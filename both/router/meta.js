if (Meteor.isClient) {
    Meta.config({
        options: {
            // Meteor.settings[Meteor.settings.environment].public.meta.title
            title: Meteor.settings.public.meta.title,
            suffix: Meteor.settings.public.meta.suffix
        }
    });
}