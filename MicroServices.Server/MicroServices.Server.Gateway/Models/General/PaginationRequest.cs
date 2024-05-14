namespace MicroServices.Server.Gateway.Models.General;

public sealed record PaginationRequest(
    int Count, 
    int Offset);