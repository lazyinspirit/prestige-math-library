# Step 3a scope review — `constructible-incidence-and-cochain-models` / `…-examples`

- Run: `frontier-44-special-representation-examples-28` · role alpha · batch 36 · 2026-10-10
- A page: `constructible-incidence-and-cochain-models` (order 1805, 2 items)
- B page: `constructible-incidence-and-cochain-models-examples` (order 1810, 1 item)
- Scope decision: **sufficient** — recorded via `tools/step3-decisions.mjs record-scope`
  (receipt `research/frontier-44-special-representation-examples-28-step3a-review-constructible-incidence-and-cochain-models.json`).
- Manifest reviewed: `research/frontier-44-special-representation-examples-28-batch-36.pages.json`,
  sha256 `4b46943293d30ab47e5739fefc8f4263414b72e3b06f408ec02858eecdf069a8` (equal to the
  recorded native36 final after-hash). No scaffold was edited.

## 1. Prose design vs scaffold, and intended role

- Prose design: `research/plan-klr-foundation-prerequisites.md` §“Constructible Incidence And
  Cochain Models”, L550–585. The generated batch task cites L428, which falls inside the
  “Mixed Hodge Structures And Strictness” section; the stale pointer is already recorded in
  `…-batch-36.notes.md` and changes no item. Owner direction
  `…-owner-authoring-direction.md` §“Owner same-frontier prerequisite extension” binds this
  pair into the original frontier; `research/plan-spec.json` carries the same 2 A + 1 B
  inventory, orders 1805/1810 and the five-element A-page `requires`.
- Design ↔ manifest, claim by claim (all three design contracts present, none narrowed):
  - `lem-finite-simplicial-constructible-sheaves-have-a-derived-incidence-model`: finite
    simplicial complex $K$, subcomplex $D$, $X=|K|\setminus|D|$, face poset of the open
    simplices not in $D$; the exact realization is fully faithful with the stated essential
    image; ordinary and compact-support cohomology, ordinary Hom and internal derived Hom
    have bounded finite cochain models commuting with coefficient field extension; local
    product comparison $R\operatorname{pr}_*\operatorname{pr}^*B\simeq B\otimes_k C^*(F;k)$
    with unit; explicit “no arbitrary algebraic map is simplicial” caveat. The design’s 8
    declared inputs are all retained (plus closure suppliers).
  - `lem-locally-split-cech-nerves-give-derived-cartesian-sheaf-descent`: coinduced
    injective resolutions for simplicial sheaves, normalized double-complex derived
    augmentation with finite total-degree diagonals, bisimplicial and derived-right-adjoint
    composition compatibility, Čech-nerve local-section descent equivalence with the
    Cartesian subcategory, algebraic-constructibility clause for principal GL bundles; no
    proper-descent claim. The design’s 4 declared inputs are all retained (plus closure
    suppliers).
  - `ex-incidence-model-of-a-closed-interval`: the two-term witness
    $[V_0\oplus V_1\xrightarrow{u_0-u_1}V_e]$, the constant-sheaf and open-edge
    extension-by-zero computations; `ai-generated` example role; inherited AC explicit in
    Statement and deps after the native36 integration.
- Intended role: the incidence/cochain-model foundation of this frontier’s constructible
  chain. 14 dependency rows consume the pair — 13 external items on 5 later pages (batches
  37, 40, 41, 43, 45) plus the companion example — and 4 later pages declare the A page in
  `requires`. Consumer strategies use exactly the supplied clauses: essential image and
  finite bar/cochain models, internal-Hom constructibility, field-extension comparison,
  the local product comparison, and the simplicial coinduced-injective/uniformly
  bounded-below total model. The B page is a leaf: no run item depends on
  `ex-incidence-model-of-a-closed-interval`.

## 2. Source coverage

- `…-batch-36.coverage.json`: 26 harvested rows (A page 21 = 12 Goresky + 9
  Bernstein–Lunts; B page 5). 0 errors, 1 advisory `coverage-low-yield` (2/21 scaffolded on
  A). The advisory is confirmed appropriate: the two planned lemmas deliberately absorb the
  simplicial-sheaf, elementary-injective, cohomology-model and derived-equivalence material
  inline, exactly as the design prescribes, and the pair is a small foundations pair that
  consumes its published sheaf/derived prerequisites rather than rebuilding them.
- Both treatments independently re-fetched today and byte-identical to the recorded stamps:
  Goresky, *Lecture Notes on Sheaves and Perverse Sheaves* (168 pp.), 1,954,729 bytes,
  sha256_16 `dfd4e0721c8c2e31`; Bernstein–Lunts, *Equivariant Sheaves and Functors*, Part I
  (66 pp.), 2,666,651 bytes, sha256_16 `d5c84bf06367288d`. `source-fetch-check` check mode:
  4/4 fetch-verified, 4/4 resolved, 0 documented drops.
- Declines checked against the fetched Goresky text: §2.4 is a historical interlude and
  §2.6 is explicitly marked “will not be used” by the source; §1(d) and §9.1–9.2 are
  deferred to the in-run `analytic-constructible-sheaf-foundations` (batch 30), whose
  `def-locally-constant-sheaf-of-finite-rank` and
  `def-algebraically-constructible-complex-of-analytic-field-sheaves` this pair consumes;
  the Bernstein–Lunts equivariant sections (§0.1–0.4, §§3.1–3.2, §§5.1–5.2) are deferred to
  the in-run `equivariant-constructible-perverse-foundations` (batch 41); §1.9.4
  (Vietoris–Begle) is genuinely not used by either lemma.
- Two coverage-annotation caveats (no scope change; nothing a current consumer needs;
  recorded for the owner/Step-8 reconciler):
  1. the §32.2 row’s contents list names “the dualizing sheaf model”, but neither the
     design statement nor the scaffold item asserts the incidence-number model $D^\bullet$
     or $DD A\cong A$; no scaffolded consumer needs it (the batch-40 Verdier theorem
     constructs $\omega_X$ from orientation instead);
  2. the §32.1/§32.3 out-of-scope reasons cite “cellular perverse and equivariant
     constructions on other pages”, but no scaffolded item in this run builds cellular
     perverse sheaves, and the §32.3-type local calculations are in fact proved inline by
     the incidence lemma’s Steps 3 and 6 under its constant-sheaf supplier.
  Both are description-precision issues, not omissions of anything the design or any
  current consumer requires.

## 3. Prerequisite audit (unmet prerequisites)

Method: parsed all `deps`, `forward_refs` and `[[…]]` targets of the 3 items from the
current manifests; classified every id against `items/*.md` and all 100 current run
manifest pages; expanded the in-run closure; checked the page-level `requires` lists.

- Direct dependencies: 34 (L1) + 22 (L2) + 5 (example) = 61; all resolve. Transitive
  closure: 1,013 items — 71 in-run scaffold items (the 3 pair items and 68 suppliers) and
  942 published `items/` files; **0 absent, 0 non-published files**. No item declares
  `forward_refs` or `justified_by`. All 57 `[[…]]` instances (32/20/5; 41 distinct ids)
  resolve to published items or in-run scaffold items, and each is already in the item’s
  `deps`.
- The seven in-run direct suppliers were checked at declared-clause level against their
  current manifest statements: batch 30 `lem-field-module-sheaves-have-injective-derived-models`
  (AC; $\operatorname{Sh}_k(X)$ Grothendieck with functorial injective embeddings and
  bounded-below injective replacements), `lem-finite-poset-diagrams-have-bounded-finite-bar-models`
  (finite bar models with exact degree ranges and field-extension commutation),
  `lem-locally-contractible-metric-spaces-have-singular-constant-sheaf-cohomology`
  (AC; $H^q(X,k_X)\cong H^q_{\operatorname{sing}}(X;k)$ on every open subset, with the
  finite-polyhedral star/closed-simplex application), `def-locally-constant-sheaf-of-finite-rank`
  (local-trivialisation definition, no groupoid identification),
  `def-algebraically-constructible-complex-of-analytic-field-sheaves`; batch 32
  `lem-c-soft-field-sheaves-are-compact-support-acyclic` (AC; locally compact Hausdorff;
  c-soft $\Rightarrow$ $\Gamma_c$-acyclic; restriction/extension/direct-sum closure) and
  `def-compactly-supported-global-sections` (AC; $\Gamma_c$ left exact with supplied
  injective-resolution datum). Hypotheses match the declared uses; these suppliers sit on
  pages of order 1796/1798, both earlier than 1805, and the edges are recorded in the
  batch-36 cross-batch dependency input (10 `verified` rows, refreshed in the unified
  ledger).
- Published supplier spot checks (Statement read): `lem-closed-immersion-preserves-sheaf-cohomology`
  (exactly $H^q(Z,\mathcal F)\cong H^q(X,i_*\mathcal F)$ for a closed inclusion),
  `lem-sheaf-supported-on-a-closed-subset-is-a-pushforward`,
  `lem-sheaf-cohomology-classes-as-derived-morphisms`, `cor-kunneth-over-a-field` (finite
  diagonals), `thm-extension-by-zero-adjunction-exactness` ($j_!\dashv j^{-1}$; $j_!$
  exact), `prop-a-finite-simplicial-complex-has-compact-hausdorff-realization`. All
  published with statement-level matches; no defective published supplier found.
- Page-level `requires`: `analytic-constructible-sheaf-foundations` (order 1796, in run),
  `compact-support-sheaf-calculus` (order 1798, in run), and the published
  `relations-functions-and-quotients`, `sheaf-cohomology-cech-cohomology-and-comparison`,
  `sheaf-operations-exactness-ringed-spaces-and-module-pullback`. No unmet page
  prerequisite.
- **No unmet prerequisite found.** Residual uncertainty: availability and declared-clause
  matching only — I did not verify the unwritten proofs of the in-run suppliers (owed to
  Steps 3b–5), and none of the three items is authored yet. The batch-36 note that
  `thm-extension-by-zero-adjunction-exactness` is declared but not visibly loaded by the L2
  route remains an authoring-time check (use it explicitly or record it as a declared
  input), not a missing prerequisite.

## 4. Consumer-interface spot checks (scope view)

- `complex-algebraic-stratified-topology` (b37): the triangulation theorem uses the
  essential image and finite bar resolutions for bounded finite ordinary/derived-Hom
  models; the conical-cochain lemma additionally assembles local models globally with the
  L2 finite Čech augmentation. Both clauses are in the pair’s statements.
- `analytic-derived-six-operations-and-duality` (b40): the six-operation theorem uses the
  L1 Step-7 product-projection comparison clause verbatim; the Verdier theorem restricts
  to objects admitting the finite conical/incidence models and constructs duality itself,
  so it needs no dualizing model from this pair.
- `equivariant-constructible-perverse-foundations` (b41): the equivariant derived category
  uses L2’s coinduced injective resolutions and Cartesian descent; Ext finiteness and the
  Stiefel-stabilisation items use L1’s finite cochain models; all within the statements.
- `affine-perverse-vanishing-and-universal-hyperplanes` (b43) and
  `proper-cohomological-descent-and-constructible-hypercovers` (b45): the Morse lemma uses
  the product-projection adjunction unit of the finite incidence model; b45 explicitly
  uses only L2’s functorial simplicial total model with uniform lower bound and finite
  truncations, and records that its local-section descent conclusion is not used as proper
  descent — matching the pair’s stated scope.
- Advisory (consumer-side metadata, no action for this pair): the b43 page consumes the L1
  item and records the edge in its cross-batch dependency input and ledger row, but its
  page `requires` list does not name the A page, unlike the other four consumer pages. For
  the Step-4/Step-8 reconciler.

## 5. Decision and next action

- `sufficient` for `constructible-incidence-and-cochain-models`: the planned results and
  example adequately cover the intended subject; every design contract is realized without
  narrowing, coverage declines are routed and confirmed (two annotation caveats recorded,
  neither consumer-affecting), source stamps hold byte-identically, and no unmet
  prerequisite was found. No enrichment, merger or scaffold edit is indicated.
- Recorded via `node tools/step3-decisions.mjs record-scope --run
  frontier-44-special-representation-examples-28 --page constructible-incidence-and-cochain-models
  --decision sufficient`, reason naming this report.
- Next action: Step 3b authors the 2 A items and 1 B example in dependency order once the
  Step 3a stage drains. Any change to a statement, title or inventory changes the scope
  hash and requires a fresh scope decision before item bookkeeping can use this pair.
