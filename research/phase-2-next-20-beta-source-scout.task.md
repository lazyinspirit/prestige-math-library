> The dispatch block supplies batch `<i>`.

# Source scouting — batch `<i>`, `phase-2-next-20`

Use `source-fetch-check` on this batch's coverage to identify the failed source
records. Follow `briefs/beta-scaffold.md`: autonomous web search, five recovery
retries after the initial failure, then an alternate proof if genuinely absent.
Work only in this batch's manifest, coverage and notes; register added lemmas
and dependencies for any alternate proof.

Prefer a verified alternate URL for the same text, then a complete archive of
that text. A different treatment requires reharvesting its actual range and
rewriting its contents rows and locators; retain `original_url` provenance.

Run `source-fetch-check --stamp` after each change. Record the failed source,
search result, replacement or documented drop in the batch notes. If not fully
confident in the alternative mathematics, escalate the URL and exact uncertainty
to the owner and keep the batch blocked. Never remove an affected result.
