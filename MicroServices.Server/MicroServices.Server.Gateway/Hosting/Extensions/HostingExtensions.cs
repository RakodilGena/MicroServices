using System.Diagnostics;

namespace MicroServices.Server.Gateway.Hosting.Extensions;

internal static class HostingExtensions
{
    public static void AddCorsDefaultPolicy(this WebApplicationBuilder appBuilder)
    {
        var allowOrigins = appBuilder.Configuration.GetSection("AllowOrigins").Get<string[]>() ?? [];
        
        
        appBuilder.Services.AddCors(options =>
        {
            options.AddDefaultPolicy(
                builder =>
                {
                    builder.AllowAnyMethod().AllowAnyHeader();
                    
                    if (allowOrigins.Length > 0)
                        builder.WithOrigins(allowOrigins);
                    else
                        builder.SetIsOriginAllowed(_ => true);
                    
                    builder.AllowCredentials();
                });
            
            Trace.TraceInformation(string.Join(", ",allowOrigins));
        });
    }
}