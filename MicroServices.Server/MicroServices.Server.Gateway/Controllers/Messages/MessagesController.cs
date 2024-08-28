using Microsoft.AspNetCore.Mvc;

namespace MicroServices.Server.Gateway.Controllers.Messages;

[ApiController]
[Route("api/v1/Messages")]
public sealed partial class MessagesController : ControllerBase;