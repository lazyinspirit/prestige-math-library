# Cycle 1 diagnosis and guarded proposal

The native batch-13 alert at zero-based index 1 names an actual in-run draft page, not an outside published page. Its unique canonical path is `library/hopf-hecke-algebras/type-a-affine-hecke-algebras-and-bernstein-pbw.md`. The current batch-12 manifest owns that exact page and its theorem `thm-hh-affine-type-a-bernstein-pbw`; group d covers batch 12. Group e covers source batch 13, whose A page explicitly requires the affected page. The frozen Step4 digest is exactly the successful attempt-1 native structured output. `diagnosis.json` binds all these original bytes and the exact alert.

The mathematical finding is correct: the theorem gives the Laurent monomials times T_w as an R_0-basis. As an A-module the basis is T_w; the larger family contains the displayed A-linear dependence. No theorem edit is necessary. The minimal later prose correction replaces `derives the $A$-basis` with `derives the $R_0$-basis`, leaving frontmatter and all item carriers unchanged. No live page repair is included here; ordinary Step5 owning-group work and its page currency guards must handle it.

The defect in `tools/step5-scope.mjs` is asymmetric indexing: concerns already resolve itemOwner or pageOwner, but Step4 alerts consult only itemOwner. The proposed file fixes those alert lookups in `collectAlerts` and the digest gate. It resolves the actual existing page owner; it does not fabricate item ownership, create a foreign-page exception, alter any digest, or extend the published-item policy. The existing published repair helper and its strict validation are untouched. Step5 judge-backed rejection alerts retain their item-only semantics. The page warning remains an ordinary alert in the derived inventory and must receive the actual owning group's disposition. Existing explicit refusal to use page warnings to license item repairs remains intact.

The separate Step3 required-published-page route from a505eb496f is inapplicable because this page is already owned and draft. No new receipt, source observation, publication status, acceptance, review coverage or frozen closure rewrite is needed.

`proposal/tools/step5-scope-page-alerts.test.mjs` exercises the proposed production CLI against isolated repositories and the production schema. Seven tests passed: cross-batch page and item alerts route; same-batch page/item alerts and unknown pages fail; outside published items still require exact policy-valid routing; the page alert remains visible, pending disposition fails closure, a false owner fails provenance, the actual owner's nonfatal disposition closes, and a page warning cannot authorize fatal item repair.

Run before integration:

```
PAGE_ALERT_TEST_REPO="$PWD" node --test research/hopf-hecke-unfinished-15-2026-10-15-owner/step4-published-alerts/required-page/proposal/tools/step5-scope-page-alerts.test.mjs
```

After copying the proposed test and implementation into tools, its default repository discovery works with `node --test tools/step5-scope-page-alerts.test.mjs`. A short WORKFLOW paragraph proposal records ordinary page routing. All files produced by this task are confined beneath this evidence directory. No live code, page, ledger, gate, control state or commit was changed.
