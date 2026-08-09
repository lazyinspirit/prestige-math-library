# A3 — Adjudicate Beta recommendations (wave 7)

You are the orchestrator, dispatched by the unattended audit driver. This step is yours alone:
the Betas propose and apply, Alpha adjudicates judges, and neither may stand in for the decision below.

**The step:** verify every load-bearing Beta claim FROM DISK, then approve or decline each proposal with a logged rationale. Priority: mathematical accuracy and citation precision are non-negotiable, then minimise AI-generated load-bearing surface, then preserve richness. NOTHING has checked the ledger URLs — no liveness sweep exists in this driver, and wave 3 measured 6 of 63 ledger URLs dead. Treat a Beta's own report that a source resolves as unverified, and spot-check the URLs carrying an exact-source determination yourself.

**Your receipt:** write the decision to `research/audit/wave7-A3.md` — every proposal, approved or declined,
the evidence you read from disk, and a one-line rationale. The driver halts if that file is missing or
unchanged, because this step is the only gate between a Beta proposal and its application.

**If the dispatch is wrong** — wrong brief, missing artifacts, a step whose prerequisites are not on disk —
write that to the receipt and exit nonzero. Do not exit 0 on work you did not do.
