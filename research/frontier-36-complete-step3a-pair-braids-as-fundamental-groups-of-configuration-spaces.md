# Step 3a scope review — braids as fundamental groups of configuration spaces

- Run: `frontier-36-complete`
- A/B pair: `braids-as-fundamental-groups-of-configuration-spaces` / `braids-as-fundamental-groups-of-configuration-spaces-examples`
- Decision for A: **insufficient pending owner resolution of a scope conflict**.

## Scope evidence

The active batch-24 manifest plans ten A items covering the based motion definition, tracing and slicing, homotopies, the inverse-on-classes correspondence, the product-convention reversal, the geometric/unordered configuration group isomorphism, the pure/ordered subgroup, and endpoint monodromy. Its four B items give a half-twist loop, an ordered full-twist loop, the distinction between ordered and unordered closure, and a height-folded picture that cannot be sliced into configurations. This is an adequate A/B scope for the narrower model-identification subject in the detailed BG-3 table. The pair is a distinct bridge from the published geometric-braid and configuration-space pages to the later punctured-disk mapping-class and pure-braid pages.

Current coverage maps the core correspondence to González-Meneses, §§1.1–1.3 (printed pp. 3–6), and Birman–Brendle, §1.1 (author manuscript pp. 3–5); the half-twist example also uses González-Meneses, §1.5 (pp. 7–8). I read these relevant sections in the full sources. The local height-fold counterexample is explicitly constructed in the manifest. The active manifest requires the geometric-braid, configuration-space, and fundamental-group pages; the cross-batch dependency input is empty. The A/B lists have no other evident subject or example gap for the narrower scope.

## Blocking scope conflict

The plan gives incompatible scopes. In the BG-1 table and proof seam, it says BG-3 will prove injectivity of the Artin-presentation map using a Fox–Neuwirth configuration-cell argument (`research/plan-braid-groups-track.md`, lines 211–217). The detailed BG-3 table later says Artin presentation is postponed to BG-6 (line 286). The active batch-24 manifest follows the latter scope: it has no Fox–Neuwirth cell decomposition, configuration-space presentation computation, or Artin-injectivity/completeness result. Its coverage also does not include González-Meneses, §3.2 (printed pp. 23–25), where the cited Fox–Neuwirth cell-complex route derives the Artin presentation. The two source routes therefore support the narrower scope but not both stated plan obligations.

The batch-24 construction note acknowledges this conflict and adopts the later detailed table. I found no owner-authored decision resolving it in the active owner direction, scope ledger, or run state. Accordingly, I cannot certify the intended scope as sufficient while the earlier BG-1 proof-seam promise remains in the plan.

## Recommended owner action

If the BG-1 promise is intended to bind BG-3, enrich the A scope with the Fox–Neuwirth cell decomposition and the resulting fundamental-group presentation/injectivity argument, and add the corresponding source coverage. If the detailed BG-3 table is intended to control and BG-6 owns Artin completeness, reconcile the BG-1 proof seam to that route, then have the owner record `proceed` for the reconciled scope. I do not choose between those scope decisions or edit the scaffolds. No pair merger is indicated by the present evidence.

## Source locators

- Juan González-Meneses, [*Basic results on braid groups*](https://arxiv.org/pdf/1010.0321), §§1.1–1.3, pp. 3–6; §1.5, pp. 7–8; and §3.2, pp. 23–25.
- Joan S. Birman and Tara E. Brendle, [*Braids: A Survey*](https://arxiv.org/pdf/math/0409205), §1.1, author-manuscript pp. 3–4.

## Records reviewed

`research/frontier-36-complete-batch-24.pages.json`, `research/frontier-36-complete-batch-24.coverage.json`, `research/frontier-36-complete-batch-24.cross-batch-dependencies.json`, `research/frontier-36-complete-batch-24.notes.md`, `research/plan-spec.json`, `research/plan-braid-groups-track.md`, `research/frontier-36-complete-owner-authoring-direction.md`, and `.autopilot/frontier-36-complete/state.json`.
