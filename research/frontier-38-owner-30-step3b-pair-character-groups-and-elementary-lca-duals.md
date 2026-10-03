# Step 3b authoring record — pair `character-groups-and-elementary-lca-duals`

- Run `frontier-38-owner-30`, stage `3b-author`, dispatch label
  `step3b-pair-character-groups-and-elementary-lca-duals-8c2a25db988d517d`.
- Role: alpha-high (scaffold auditor and item author), batch 10.
- A page: `character-groups-and-elementary-lca-duals` (order 510.06501,
  13 items). B page: `character-groups-and-elementary-lca-duals-examples`
  (order 510.06502, 4 items). Scope decision `sufficient`
  (`research/frontier-38-owner-30-step3a-review-character-groups-and-elementary-lca-duals.json`);
  `step3-decisions check --run frontier-38-owner-30 --phase scope` is closed
  for all 30 pairs at entry.
- Owned item IDs in dispatch (dependency-level) order:

  Level 0: `lem-compact-open-topology-on-a-discrete-domain-is-pointwise` [0],
  `lem-unit-circle-is-a-compact-metrizable-topological-group` [0].

  Level 1: `def-pontryagin-dual-and-compact-open-topology` [1],
  `lem-circle-neighbourhood-arc-contains-no-nontrivial-subgroup` [1],
  `lem-continuous-characters-of-the-real-line-are-exponentials` [1].

  Level 2: `lem-character-evaluation-pairing-is-jointly-continuous` [2],
  `lem-compact-open-character-group-operations-are-continuous` [2],
  `lem-pointwise-limits-of-characters-are-characters` [2].

  Level 3: `lem-dual-homomorphisms-are-continuous-and-functorial` [3],
  `lem-dual-identity-neighbourhood-is-compact` [3],
  `thm-compact-groups-have-discrete-duals-and-discrete-groups-have-compact-duals` [3].

  Level 4: `lem-duals-of-finite-products-and-discrete-direct-sums` [4],
  `thm-dual-of-an-lca-group-is-locally-compact-abelian` [4],
  `ex-pontryagin-dual-of-a-finite-cyclic-group` [4],
  `ex-pontryagin-dual-of-the-circle-is-the-integers` [4],
  `ex-pontryagin-dual-of-the-integers-is-the-circle` [4].

  Level 5: `ex-pontryagin-dual-of-euclidean-space` [5].

## Open obligations at entry

1. Author all 17 `items/<id>.md` files (none exists at entry) and both
   `library/fourier-analysis/` pages.
2. Write `research/frontier-38-owner-30-batch-10.proof-contracts.json`
   (batch 10 is owned by this pair alone).
3. Record Step 3 item decisions with examined dependency IDs and evidence.
4. Run the explicit-path precheck, render, content-policy, strict
   proof-contract, dependency-level and `validate-plan` checks, and
   `node tools/proof-layout.mjs` once on all changed item paths.
5. No in-run incomplete supplier: every declared dependency of the 17 items is
   published at entry; the one in-run consumer (Peter-Weyl pair, batch 11)
   consumes three items of this pair, to be verified there.

## Per-item checkpoints

All 17 items were audited, authored, checked and checkpointed in the dispatch
order below. "Checks" abbreviates the explicit-path `precheck.mts`,
`rendercheck.mjs` and (at handoff, batched) `proof-layout.mjs` runs; every item
passes all three, and every item has a strict proof-contract entry in
`research/frontier-38-owner-30-batch-10.proof-contracts.json`.

### Level 0

1. `lem-compact-open-topology-on-a-discrete-domain-is-pointwise` — claim:
   compact subsets of a discrete $X$ are finite, and compact-open = pointwise
   on $C(X,Y)$; subspace statement for $\mathcal F\subseteq C(X,Y)$ (the
   scaffold's "$\mathcal F\subseteq Y^X$" restricted to the only domain on which
   the compact-open topology is defined). Proof: open singletons give a finite
   cover; $S(K,V)$ is the finite intersection of pointwise subbasics; both
   inclusions. Sources: Dikranjan §7.1 Example 7.1(2); Einsiedler-Ward C.3.
   Deps 6, all published. Decision `accept` (confidence 1).
2. `lem-unit-circle-is-a-compact-metrizable-topological-group` — claim adds the
   explicit topological-group isomorphism $\varepsilon:\mathbb R/\mathbb Z\to
   \mathbb T$ and the two metric identities; the redundant "with $|z|=1$" of
   the scaffold was dropped from the quantifier, no claim weakened. Proof by
   $\exp$ addition/cartesian form, the parametrisation of the circle, the
   quotient universal property, compact-to-Hausdorff, and $\varepsilon$-$\delta$
   continuity of $\exp(2\pi i\,\cdot)$ through the isometry $\Phi$.
   Suppliers added beyond the scaffold: `def-real-exponential-function-and-e`,
   `thm-sine-and-cosine-derivatives`, `cor-differentiable-implies-continuous`,
   `def-quotient-group`, `def-isometry-and-metric-embedding`,
   `def-metric-continuity`, `thm-composition-of-continuous-functions`,
   `thm-product-universal-property`. Deps 28. Decision `accept`.

### Level 1

3. `def-pontryagin-dual-and-compact-open-topology` — definition only; fixes the
   multiplicative circle, pointwise multiplication, the compact-open subbasis
   $S(K,V)$, the evaluation pairing, and the identification with the published
   circle. Deps 6. Decision `accept` (definition; no proof obligation;
   `provenance.proof: not-applicable`).
4. `lem-circle-neighbourhood-arc-contains-no-nontrivial-subgroup` — claim and
   proof as scaffolded: argument reduction to $0<t<1/6$ via
   $|\exp(2\pi iu)-1|=2|\sin(\pi u)|$, $\sin(\pi/6)=1/2$ derived (via the
   double-angle identity and the shift formula, since no published statement
   carries the special value), and $n=\lfloor 1/(6t)\rfloor+1$ with
   $\sin(\pi nt)>1/2$. Suppliers added: `def-complex-exponential`,
   `thm-double-angle-and-power-reduction-identities`,
   `thm-quarter-turn-values-and-shift-formulas`,
   `thm-sine-cosine-signs-monotonicity-and-ranges`,
   `thm-sine-and-cosine-derivatives`, `lem-complex-conjugation-and-modulus-laws`,
   `lem-integer-part`, `def-the-one-dimensional-torus-and-normalized-haar-integral`,
   `def-quotient-group`. Deps 14. Decision `accept`.
5. `lem-continuous-characters-of-the-real-line-are-exponentials` — claim and
   route as scaffolded: transport along $\varepsilon$, lift through the
   universal cover, additivity of the lift from connectedness of $\mathbb R$
   and closedness of $\mathbb Z$, Cauchy-equation regularity, uniqueness by
   $t=1/(2|\xi-\xi'|)$. Suppliers added:
   `thm-continuous-image-of-a-connected-space`, `def-connected-space`,
   `thm-composition-of-continuous-functions`, `thm-algebra-of-continuous-functions`,
   `def-group-homomorphism`, `def-complex-exponential`. Deps 21. Choice-free.
   Decision `accept`.

### Level 2

6. `lem-compact-open-character-group-operations-are-continuous` — claim and the
   two displayed inclusions kept. Proof: products/inverses of characters are
   characters (composition with the continuous operations of $\mathbb T$); the
   $\varepsilon/2$ estimates; continuity of the operations on $\widehat G$ at
   subbasic identity neighbourhoods; Hausdorffness by $S(\{x\},V)\cap
   S(\{x\},W)=\varnothing$. Suppliers added: `def-subspace-topology-top`,
   `def-compact-space`, `thm-product-universal-property`,
   `thm-composition-of-continuous-functions`, `thm-metric-hausdorff-separation`,
   `cor-complex-exponential-cartesian-form-modulus-and-eulers-identity`,
   `lem-complex-conjugation-and-modulus-laws`. Deps 14. Decision `accept`.
7. `lem-character-evaluation-pairing-is-jointly-continuous` — claim kept; proof
   repairs the scaffold's strategy, which as written did not ensure the
   chosen compact neighbourhood $K$ satisfies
   $\gamma_0(K-x_0)\subseteq B(1,\varepsilon/2)$: the compact-closure base
   lemma supplies $K\subseteq U$ inside a neighbourhood on which $\gamma_0$ is
   $\varepsilon/2$-close to $\gamma_0(x_0)$; the estimate then closes. Deps 12
   (added `lem-a-locally-compact-hausdorff-space-has-a-base-of-open-sets-with-compact-closure`,
   `def-neighbourhood-top`, `def-compact-space`,
   `thm-compactness-under-continuous-maps`,
   `lem-complex-conjugation-and-modulus-laws`). Decision `accept`.
8. `lem-pointwise-limits-of-characters-are-characters` — all three clauses
   kept; clause (1) made precise as closedness of $\operatorname{Hom}(G,\mathbb
   T)$ in $\mathbb T^G$ (intersection of preimages of the diagonal; nets for
   the limit formulation), clause (2) via the pointwise-closure equicontinuity
   lemma, clause (3) via discreteness making every map continuous. Suppliers
   added: `thm-closure-characterised-by-nets`, `def-directed-set-and-net`,
   `thm-product-universal-property`, `thm-composition-of-continuous-functions`,
   `thm-metric-hausdorff-separation`, `def-hausdorff-space`,
   `ex-discrete-and-indiscrete-topologies`,
   `lem-compact-open-topology-on-a-discrete-domain-is-pointwise`. Deps 16.
   Decision `accept`.

### Level 3

9. `lem-dual-homomorphisms-are-continuous-and-functorial` — parts (a) and (b)
   kept, including the no-stronger-claim sentence. (a) pullback continuity by
   $\widehat\varphi^{-1}(S(K,V))=S(\varphi(K),V)$. (b) $G/H$ proved a
   topological group (open continuous surjection $q\times q$ is a quotient
   map), $q̂$ continuous bijective onto $H^\perp$ with $H^\perp$ closed, and
   inverse continuity at an arbitrary point by the compact-lift theorem
   together with a finite-subcover construction of a rotation neighbourhood.
   Suppliers added: `def-quotient-group`,
   `cor-quotient-of-an-abelian-group-is-abelian`,
   `lem-open-or-closed-surjection-is-quotient`, `def-compact-space`,
   `thm-composition-of-continuous-functions`,
   `thm-compactness-under-continuous-maps`. Deps 17. AC used only in (b), as
   the statement declares. Decision `accept`.
10. `lem-dual-identity-neighbourhood-is-compact` — claim and route kept
    (local equicontinuity/compactness, not a bare Ascoli citation), but the
    scaffold's trigonometric estimate was replaced by an equally elementary
    argument that avoids unpublished special values: the closed sets
    $F_k=\{z:z^j\in D,\ j\le k\}$ decrease to $\{1\}$ by the arc lemma, so
    some $F_k$ lies in $B(1,\varepsilon)$ by the finite-intersection property
    of compactness; $U=\{u:ju\in K,\ j\le k\}$ then gives equicontinuity;
    closedness of $N$ through pointwise limits (item 8) and Ascoli's
    sufficiency corollary give compactness. Suppliers added:
    `def-topology-of-pointwise-convergence`, `thm-compact-iff-fip`,
    `def-finite-intersection-property`, `thm-closure-characterised-by-nets`,
    `def-directed-set-and-net`, `def-compact-space`,
    `thm-composition-of-continuous-functions`, `def-continuous-map-top`.
    Deps 22. AC used exactly through Ascoli, as declared. Decision `accept`.
11. `thm-compact-groups-have-discrete-duals-and-discrete-groups-have-compact-duals`
    — both one-way clauses kept, no iff added. (1) $S(G,D)=\{1\}$ open by the
    arc lemma, translations make every point open. (2) compact-open =
    pointwise on the discrete domain, $\operatorname{Hom}$ closed in
    $\mathbb T^G$, Tychonoff + closed subspace compact. Supplier added:
    `lem-pointwise-limits-of-characters-are-characters`. Deps 16. AC only
    through Tychonoff in clause (2), as declared. Decision `accept`.

### Level 4

12. `lem-duals-of-finite-products-and-discrete-direct-sums` — part (1)
    choice-free with the explicit product/box topology conventions; part (2)
    for the algebraic direct sum with the discrete topology, the product
    topology on the dual side, and the scaffold's explicit disclaimer for
    non-discrete factors. Suppliers added:
    `def-external-direct-product-of-groups`, `def-direct-sum-of-a-family-of-modules`,
    `thm-product-universal-property`, `def-topological-group`,
    `thm-composition-of-continuous-functions`, `def-neighbourhood-top`.
    Deps 21. AC used only in part (2) through Tychonoff. Decision `accept`.
13. `thm-dual-of-an-lca-group-is-locally-compact-abelian` — claim kept
    (local compactness at the identity via the compact neighbourhood of item
    10, translations; compact-open sets form an identity-neighbourhood basis
    by the finite-intersection refinement of the subbasis). Suppliers added:
    `def-compact-open-topology-for-topological-domains`,
    `lem-a-locally-compact-hausdorff-space-has-a-base-of-open-sets-with-compact-closure`,
    `def-neighbourhood-top`, `thm-compact-subset-of-a-hausdorff-space-is-closed`,
    `thm-compactness-under-continuous-maps`,
    `thm-composition-of-continuous-functions`. Deps 13. AC used exactly
    through item 10, as declared. Decision `accept`.
14. `ex-pontryagin-dual-of-a-finite-cyclic-group` — claim kept for the
    presented group $\mathbb Z/N\mathbb Z$ with the quotient topology of the
    discrete group $\mathbb Z$ (made explicit); no generator chosen. Roots of
    unity classification, uniqueness mod $N$, discreteness on both sides.
    Decision `accept`.
15. `ex-pontryagin-dual-of-the-circle-is-the-integers` — **route change**:
    instead of the scaffold's Fourier-coefficient computation, the proof
    composes $\chi$ with $\varepsilon:\mathbb R/\mathbb Z\to\mathbb T$ and
    applies the classification of continuous characters of the line (item 5),
    obtaining $\chi(z)=z^n$ with $n=\xi\in\mathbb Z$ from
    $|\exp(2\pi i\xi)-1|=2|\sin(\pi\xi)|$. The statement (including its
    "Assume the Axiom of Countable Choice" hypothesis) is unchanged; the proof
    given is in fact choice-free, and the item says so after the final step.
    Deps 17. Decision `accept`.
16. `ex-pontryagin-dual-of-the-integers-is-the-circle` — claim kept:
    $z\mapsto(n\mapsto z^n)$ is a bijective homomorphism, continuous into the
    discrete-domain dual with continuous inverse $\gamma\mapsto\gamma(1)$.
    Suppliers added: `lem-group-power-laws`, `thm-product-universal-property`,
    `thm-composition-of-continuous-functions`,
    `ex-discrete-and-indiscrete-topologies`. Deps 18. Decision `accept`.

### Level 5

17. `ex-pontryagin-dual-of-euclidean-space` — claim kept. Classification
    coordinatewise through the one-dimensional case; uniqueness of the
    frequency vector; continuity of $\xi\mapsto\varphi_\xi$ by an
    $\varepsilon$-$\delta$ estimate on compact $K$; continuity of the inverse at
    the identity by the closed ball of radius $1/(2\varepsilon)$ and the value
    $\exp(\pi i)=-1$ at $x_0=\eta/(2\|\eta\|^2)$, which avoids unpublished
    sine bounds. Suppliers added: `lem-compact-open-character-group-operations-are-continuous`,
    `thm-heine-borel-rn`, `thm-compactness-under-continuous-maps`,
    `def-group-homomorphism`, `lem-group-power-laws`,
    `thm-composition-of-continuous-functions`. Deps 20. Choice-free.
    Decision `accept`.

## Added suppliers (item-file and manifest dependency inputs updated)

Every declared dependency of all 17 items resolves to a published item; the
scaffold lists were preserved and extended with the published supports the
completed arguments actually use. The additions are the items named in the
checkpoints above; all are out-of-run (`status: published`), so the in-run
dependency levels recorded in the manifest (0,0,1,1,1,2,2,2,3,3,3,4,4,4,4,4,5)
are unchanged and re-verified by `tools/item-dependency-levels.mjs check --run
frontier-38-owner-30` (exit 0; no batch-10 error). The batch-10 manifest was
updated in place for these 17 items only; no sibling row was touched.

## Checks actually run (final state)

* `node tools/tsx-run.mjs tools/precheck.mts` on the 17 explicit paths →
  16 checked (definitions have no phase body), 0 failing.
* `node tools/rendercheck.mjs` on the 17 item paths and the 2 new pages →
  OK, all math spans parse under KaTeX, all frontmatter parses.
* `PRESTIGE_APP_DIR=/tmp/fr38/app node tools/proof-layout.mjs <17 paths>` →
  `17 items, 93 steps, 0 defects`. **Environment note:** in the default
  environment `tools/proof-layout.mjs` cannot start its renderer: the sibling
  checkout has no `worker/node_modules`, so `tools/paths.mjs` falls back to
  `tools/typescript-loader-hooks.mjs`, whose `transpileModule` call sets no
  `jsx` option and the renderer's `web/components/library/ItemBody.tsx` fails
  with `SyntaxError: Unexpected token '<'`. The run above used an isolated
  `PRESTIGE_APP_DIR=/tmp/fr38/app` whose `worker/node_modules` and `web` point
  at the installed `prestige-intelligence/web` tree (the checkout's tsx), i.e.
  the selection `tools/paths.mjs` documents as intended when the app tsx is
  installed; no repository file was modified. The default invocation still
  fails and this is escalated as a tooling defect affecting every writer.
* `node tools/content-policy.mjs research/frontier-38-owner-30-batch-10.pages.json`
  → 17 scoped items, 0 errors, 0 warnings (provenance and URL rules).
* `node tools/proof-contract.mjs research/frontier-38-owner-30-batch-10.proof-contracts.json
  --strict` → 17/17 items checked, 0 errors, 0 warnings (exact citation quotes
  for all 220 fact-source pairs, 93 classified steps, all 8 boundary
  dispositions per item).
* `node tools/manifest-deps.mjs research/frontier-38-owner-30-batch-10.pages.json`
  → 17 items, 0 errors; `node tools/item-dependency-levels.mjs check --run
  frontier-38-owner-30` → exit 0 (no batch-10 error).
* `node tools/audit-manifest.mjs research/frontier-38-owner-30-batch-10.pages.json`
  → 276 relationships over 17 items, 0 defects (all cross-batch edges
  published-backward or in-batch).
* `node tools/coverage-checklist.mjs research/frontier-38-owner-30-batch-10.coverage.json
  --require-destination` → 2 pages, 66 harvested, 0 errors, 0 warnings.
* `node tools/validate-plan.mjs research/plan-spec.json` → exit 0 (only the
  standing note about planned pages without item lists).
* `node tools/manifest-integrity.mjs --run frontier-38-owner-30` → 60/60
  pages, no scope drift.
* `node tools/depcheck.mjs` (repo-wide) → FAIL, caused by sibling pairs still
  being authored (dozens of `page-item-missing` rows for other groups' pages
  and two `b-leaf-content` rows in scheme-theory/sheaf-cohomology); a scoped
  scan of the 17 items found 0 missing dependencies, 0 unresolved links and 0
  cycles.
* `node tools/step3-decisions.mjs record-item` → all 17 items recorded
  `accept`, confidence 1, with the full declared dependency lists; `check --run
  frontier-38-owner-30 --phase final` → none of the 17 items remains open.

## Step-3 gate status and open obligations

* The pair's scope decision (Step 3a, `sufficient`) is still current: the
  manifest statements, titles and kinds were not altered.
* The in-run consumer `ex-peter-weyl-for-the-circle-without-reminting-pontryagin-duality`
  (batch 11) consumes `lem-unit-circle-is-a-compact-metrizable-topological-group`,
  `def-pontryagin-dual-and-compact-open-topology` and
  `thm-compact-groups-have-discrete-duals-and-discrete-groups-have-compact-duals`.
  All three are now authored with the claims the consumer was scaffolded
  against; the consumer's actual proof uses are for that pair to reconcile, and
  this pair flags no unfinished supplier.
* `node tools/frontier-dependency-ledger.mjs refresh --run frontier-38-owner-30`
  currently fails before reaching batch 10 with a YAML escape defect in a
  sibling item: `items/thm-mod-two-intersection-number-is-homotopy-invariant.md`
  (frontmatter `locator` contains `\#` inside a double-quoted scalar; reported
  by the parser as `Invalid escape sequence \# at line 21, column 57`). This is
  that group's item to repair; the batch-10 rows are unchanged by it.
* No unresolved mathematical uncertainty and no unmet prerequisite remains in
  this pair. The one intentional deviation from the scaffold is the proof
  route of `ex-pontryagin-dual-of-the-circle-is-the-integers` (documented
  above); its statement and choice declaration are untouched.

## Handoff

Completed: both `library/fourier-analysis/` pages
(`character-groups-and-elementary-lca-duals`,
`character-groups-and-elementary-lca-duals-examples`), all 17 owned item files,
the batch-10 manifest dependency/level refresh for the owned rows,
`research/frontier-38-owner-30-batch-10.proof-contracts.json`, the 17 Step-3b
item decisions (all `accept`, confidence 1), and this report. Checks run and
their actual results are listed above; the proof-layout renderer environment
defect and the sibling YAML defect are escalated, not hidden. Items written
here remain `draft`; Step 4 owns splicing and Steps 5-8 own independent
verification.
