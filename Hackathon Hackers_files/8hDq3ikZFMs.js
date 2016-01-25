/*!CK:1355412378!*//*1453262268,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["+IEwy"]); }

__d('PostInvalidationExperiment',['AdsCreationExperimentStore'],function a(b,c,d,e,f,g,h){'use strict';if(c.__markCompiled)c.__markCompiled();function i(){var k=h.getExperiment('ig_existing_post_invalidation_experiment');if(!k.getInExperiment())return false;var l=k.getParamBool('has_more_descriptive_invalidation_messages');k.logExposure();return l;}function j(){var k=h.getExperiment('ig_existing_post_invalidation_experiment');if(!k.getInExperiment())return false;var l=k.getParamBool('has_softer_invalidation_symbology');k.logExposure();return l;}f.exports={hasMoreDescriptiveInvalidationMessage:i,hasSofterInvalidationSymbology:j};},null);