> The dispatch block supplies batch `<i>`.

# Source scouting — batch `<i>`, `numerical-optimization-dynamics-2026-10-16`

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

**Algorithms.** Use `kind: algorithm`, an `alg-` ID and `## Definition`; algorithms function identically to definitions. Specify inputs, outputs, admissible conditions and exact instructions, including branches, calls and loops. A larger algorithm may compose or repeatedly invoke earlier smaller algorithms/procedures: put those supplier IDs in the larger algorithm's `deps`. Repetition in an execution does not create a self-edge or permit a prerequisite cycle. State correctness, termination, complexity and other properties in separate proved lemmas, theorems, propositions or corollaries; use `justified_by` for results establishing well-definedness under the ordinary definition rule. Procedure instructions are not a phase proof. Review the defining procedure and its actual prerequisites; changes to its Definition trigger the ordinary direct/indirect consumer checks.
