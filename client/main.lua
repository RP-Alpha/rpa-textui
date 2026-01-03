local function Show(msg, type)
    SendNUIMessage({
        action = 'show',
        message = msg,
        type = type
    })
end

local function Hide()
    SendNUIMessage({
        action = 'hide'
    })
end

RegisterNetEvent('rpa-textui:client:Show', function(msg, type)
    Show(msg, type)
end)

RegisterNetEvent('rpa-textui:client:Hide', function()
    Hide()
end)

exports('Show', Show)
exports('Hide', Hide)
