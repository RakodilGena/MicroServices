namespace MicroServices.Server.Gateway.Models.ErrorResults;

public sealed record ErrorResult(
    string Message,
    ErrorResultType Type);