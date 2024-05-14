namespace MicroServices.Server.Gateway.Models;

public sealed record MessageDto(
    string Author,
    DateTime SentAt,
    string Message,
    IReadOnlyList<string> ProducedBy);