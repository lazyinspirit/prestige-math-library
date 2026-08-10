# Wave 13 Audit-Beta A4 receipt

Applied: 2026-08-10

Status: **A4 item and artifact work complete; direct scoped gates pass.** The
exact baseline is `442f831c94882899c1dc5559b36599b0f78a99c8`.

- Scope: four pages, 76 unique items, and 62 proof contracts.
- Provenance: 76/76 approved component determinations and every associated
  source URL are applied. All legacy `origin` values are preserved; no legacy
  `authorship` field remains.
- Split: 73 pure retags, exactly the three A3-listed material repairs, and zero
  creations. Pure-retag verification state is byte-preserved against the
  baseline; the three material items have no stale judge or audited state.
- Contracts: 62/62, 212 numbered steps, 284 Fact/source mappings, and 496
  boundary dispositions. Strict validation reports zero errors and zero
  warnings.
- Contract-only correction: both false iff dispositions for
  `thm-jordan-content-and-indicator-integrability` are `checked`, anchored to
  steps 1.1, 2.1, and 3.1. The item itself is unchanged and is not a material
  or rejudge target.
- Relationships: 488 total, comprising 289 published-backward and 199
  same-batch edges. The one-edge increase is the approved exact L6 dependency.
  All 24 earlier-wave barrier edges remain present: one to Wave 11 and 23 to
  Wave 12.
- Source liveness: all 17 distinct exact ledger URLs reopened successfully;
  the shell's external DNS route was unavailable, so the receipt records the
  successful web route and the prior A1/A3 HTTP-200 verification explicitly.
- Impact: the orchestrator-owned `post-A4` snapshot and generated impact
  template are present. Recalculation reproduces 76 changed interfaces and 207
  affected items exactly; dispositions remain pending for A6.
- Gates: scoped precheck, dependency, forward-reference, external-link,
  rendering, prose, citation advisory, dependency-source, strict contract,
  finite-smoke, risk, content-policy, relationship, reflow, and
  `git diff --check` checks all exit cleanly. Content policy reports zero
  errors and the one expected generated-kind warning for the positively
  identified repository-specific scope Remark.

Audit-Beta took no touch snapshot; the single stage-level `post-A4` snapshot
and resulting impact template were written through the orchestrator-owned
path. No page, Wave 11, Wave 12, or Wave 14 artifact was edited by this A4
work, and no A6 or later stage was run.
