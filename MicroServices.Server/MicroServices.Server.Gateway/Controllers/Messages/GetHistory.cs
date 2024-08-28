using MicroServices.Server.Gateway.Models;
using MicroServices.Server.Gateway.Models.ErrorResults;
using MicroServices.Server.Gateway.Models.General;
using Microsoft.AspNetCore.Mvc;

namespace MicroServices.Server.Gateway.Controllers.Messages;

public partial class MessagesController
{
    /// <summary>
    /// Returns messages history
    /// </summary>
    /// <returns></returns>

    [HttpGet]
    [ProducesResponseType<IEnumerable<MessageDto>>(StatusCodes.Status200OK)]
    [ProducesResponseType<ErrorResult>(StatusCodes.Status500InternalServerError)]
    public async Task<ActionResult<IEnumerable<MessageDto>>> GetMessages(
        [FromQuery] PaginationRequest paginationRequest)
    {
        await Task.Yield();

        MessageDto[] hardcodedData =
        [
            new MessageDto("Vasiliy", DateTime.UtcNow, "Sure, I'm down!", []),
            new MessageDto("Lina", DateTime.UtcNow.AddMinutes(-1), "Hello guys, wanna throw a party tonight?", []),
            new MessageDto("Andrew", DateTime.UtcNow.AddMinutes(-2), "Hey, you!", []),
            new MessageDto("Dmitriy", DateTime.UtcNow.AddMinutes(-3), "Hi anyone", [])
        ];

        return Ok(hardcodedData);
    }
}