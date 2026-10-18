# Historical ordinary published maintenance and the expanded audit frontier

Observed paused/drained stage: 5.7-certify, zero active dispatches. This is a read-only investigation, not a gate or certificate attempt.

`observation.json` enumerates all 26 original ordinary-maintenance successors. Twenty-five are inside the original frozen frontier; the quantile example is outside. All 26 current sources are byte-identical to their authenticated archived successors, all current guards equal the bridge guards, and all ordinary recorded repair policies pass. None of the 26 is in the original initial certificate items or changed inventory. No new source change or broken publication lineage was found.

The original initial certificate contains 520 items and 243 changes. Its frontier and baseline raw pins still exactly match current files. Its initial published history and collection evidence pins also match. No original frontier, baseline, report or certificate rewrite explains the discrepancy.

Commit cf61c5030fa146cfc5b5d5002ea53f8aa0b47bf7 changed `gateFrontier()` from `frontier.ids.filter(id => !isPublishedItem(root, id))` to all frozen IDs. Its new general audit policy intentionally keeps published subjects in adjudication/certification. The earlier initial certificate used the previous draft-only projection. The repeat certification now demands native evidence for the 25 historical ordinary repairs even though the original recorded bridge explicitly left them outside native certification and Sol judgment (existing bridge documentation line174).

## Proposed compatibility rule, pending root acceptance

Retain the new all-frontier default. Admit only the preexisting authenticated ordinary bridge into a typed historical exclusion from native certificate item/review inventories, not a synthesized native certification basis. Authenticate original bridge, exact initial collection and genuine original initial certificate evidence pins, original baseline/original-unassigned status and current ordinary receipt; require each currently excluded source to remain exactly the archived successor. Freeze explicit exclusion provenance and source guards in the new certificate, revalidate it when loading/saving later certificates, and retain all draft, creation, downstream closure, threshold and native review checks.

Unknown published items, newly assigned audit subjects, altered published status or later source edits get no historical exclusion. A real later source change cannot inherit this old bridge exemption. Fresh audit/new-run defaults remain unchanged. The original initial certificate remains untouched, and the outside-frontier quantile item gains no scope or native credit.

No code, sources, index, HEAD or native artifacts were changed by this investigation.
