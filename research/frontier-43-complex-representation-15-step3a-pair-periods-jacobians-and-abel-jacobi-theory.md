# Step 3a dispatch report — `periods-jacobians-and-abel-jacobi-theory`

- Run: `frontier-43-complex-representation-15` (batch 11, orders 1614/1615, `complex-analysis`).
- Pair: A `periods-jacobians-and-abel-jacobi-theory` (23 items) / B
  `periods-jacobians-and-abel-jacobi-theory-examples` (6 items).
- Role: alpha scope review of this pair only. No scaffold was edited; this report and the
  `record-scope` receipt are the only outputs.
- **Decision: `sufficient`** for the pair's promised scope (all design ids present id-for-id,
  source coverage adequate and re-verified against the live documents, no unmet prerequisite
  found). One potential prerequisite-interface gap is flagged as uncertainty in §4.3, with a
  recommended owner action; it does not require a scope change as the consuming items construct
  the object themselves. Non-blocking owner observations are in §6.

## 1. Inputs read

- Manifests: `research/frontier-43-complex-representation-15-batch-11.pages.json` (both pages,
  all 29 items with statements, strategies, kinds, deps), `...-batch-11.coverage.json` (3 source
  rows, 55 harvested headings), `...-batch-11.notes.md` (Step-1 design reconciliation and the
  close-out pass), `...-batch-11.cross-batch-dependencies.json` (34 consumer-side rows),
  `...-scope-ledger.json` (both pages owed), `...-covers.json`, `...-planning-notes.md` (design
  pointer L4049).
- Design/prose: `research/plan-complex-analysis-track.md` §**CA-RS-3** (L4001–L4093): the
  9-row A inventory, the 6-item companion list, the sources-and-strategy paragraph, and
  "Forward references: NONE load-bearing"; `research/plan-spec.json` rows 1614/1615 (orders,
  titles, kinds, category, companions, `requires`; both `items` arrays are empty, so the
  scaffold inventory is new and displaces nothing).
- Owner/run records: `...-owner-authoring-direction.md` (no batch-11 provision),
  `...-alpha-step1-drift.md` (this page: VERDICT `no-drift`: "These supply the design's
  symplectic homology basis, period pairing, discreteness of the period lattice, and
  divisor/Jacobian constructions. … No edge or ordering correction is needed."),
  `...-supporting-plan-ownership.json` (plan hash binding). Supplier pairs' Step-3a receipts
  (batches 9 and 10) re-read as context: both recorded `sufficient`.
- Sibling scaffolds: batches 9 and 10 (declared suppliers), batches 1–8 and 12–15 (consumer
  scan) and all other current-frontier batch manifests (cross-run consumer scan).
- Sources: all three documents re-fetched live on 2026-10-07 and their recorded stamps
  reproduced byte-for-byte; the load-bearing locators were read in the extracted PDFs (§3).

## 2. Design ∶ scaffold comparison (scope only)

Every design id is present with the same id and kind, in the design's proof order:

| design row (CA-RS-3) | batch-11 item |
|---|---|
| 1. polygonal schema + HA-1 compute $H_1\cong\mathbb Z^{2g}$ and cycles $a_i,b_i$ with the standard unimodular intersection matrix | `thm-symplectic-homology-basis-compact-riemann-surface` |
| 2. period pairing and lattice in the dual space | `def-period-pairing-and-period-lattice` |
| 3. bilinear identities and positivity force the period subgroup to be a discrete full lattice | `thm-riemann-bilinear-relations` |
| 4. $\operatorname{Jac}(X)=H^0(X,K)^*/H_1(X,\mathbb Z)$ well-defined period torus | `def-jacobian-of-a-compact-riemann-surface` |
| 5. integration from a base point, extended additively to divisors | `def-abel-jacobi-map` |
| 6. Abel's theorem for divisors | `thm-abels-theorem-for-divisors` |
| 7. Jacobi inversion | `thm-jacobi-inversion` |
| 8. $\operatorname{Pic}^0(X)\cong\operatorname{Jac}(X)$ | `cor-picard-zero-is-the-jacobian` |
| 9. embedding of the point map for $g\ge1$ | `thm-abel-jacobi-embedding-positive-genus` |

Fourteen items were added to close the local proofs (all inside the design's subject and route;
none imports material owed to a different pair):

- topology of the model: `lem-cellular-homology-of-the-one-polygon-surface-model`,
  `def-intersection-form-on-the-homology-of-a-closed-oriented-surface`
  (the design's "polygonal schema and HA-1 compute $H_1$" step, with no unimodularity asserted
  prematurely);
- period machinery: `lem-holomorphic-differentials-form-a-g-dimensional-space`,
  `lem-period-pairing-is-well-defined-and-computed-by-integration`,
  `lem-cut-surface-and-boundary-jumps-of-primitives`,
  `thm-symplectic-period-formula-for-wedge-integrals`;
- Abel–Jacobi machinery: `lem-abel-jacobi-map-is-well-defined-and-base-point-independent`;
- Abel's-theorem chain: `lem-weak-solution-of-a-degree-zero-divisor-and-logarithmic-derivative-identity`,
  `lem-dbar-solvability-criterion-for-a-smooth-zero-one-form`,
  `lem-trace-of-a-holomorphic-one-form-under-a-nonconstant-map-to-the-sphere`,
  `lem-principal-divisors-have-vanishing-abel-jacobi-class`;
- inversion/embedding chain: `lem-holomorphic-differentials-separate-generic-points`,
  `def-picard-group-of-divisor-classes-and-pic-zero`,
  `lem-degree-one-holomorphic-map-of-compact-riemann-surfaces-is-an-isomorphism`.

Reading the statements, the promised claims are not weakened: the symplectic-basis theorem proves
rank $2g$ and the standard matrix with unimodularity; the bilinear-relations theorem proves the
normalized-basis isomorphism, symmetry $\Pi^{t}=\Pi$, positivity $\operatorname{Im}\Pi\succ0$ and
the **full-lattice** conclusion (not a mere subgroup); the Jacobian definition includes the
deck-group charts and the basis-independence statement; Abel's theorem is the iff
`D principal ⇔ u(D)=0`; Jacobi inversion is the surjectivity with the explicit division-by-$N$
form; the embedding theorem gives injectivity, immersivity and closed embedding. The B page maps
1:1 to the design's companion list: `ex-periods-of-a-complex-torus`,
`ex-symplectic-homology-basis-of-a-genus-two-surface`,
`ex-period-matrix-and-jacobian-of-the-pentagon-curve` (the design's genus-two period matrix,
instantiated by the pentagon curve as in McMullen Thm. 15.3),
`ex-base-point-cancellation-for-degree-zero-divisors`,
`ex-principal-divisor-tests-via-the-abel-jacobi-map`, `ex-abel-image-in-its-jacobian`.

Page metadata equals `plan-spec.json` exactly (orders 1614/1615, titles, kinds, category,
companions on both sides, and the 7/1 `requires` arrays); 23 + 6 items is far inside the cap.

## 3. Source coverage

Three full-text treatments back the pair; all three were re-fetched live on 2026-10-07 and every
stamp reproduced exactly:

- Looijenga, *Riemann Surfaces* (2007 notes) — 443 320 B, sha256_16 `0e56ac4ff91be48e`, 63 pp.
  Spot-read in the live PDF: **Prop.-Def. 7.1** (the homomorphism $e$ "maps $H_1(S)$
  isomorphically onto a lattice in $\Omega(S)^*$", image called the period lattice and quotient
  the Jacobian), **Lemma 7.4** ($I:\operatorname{Div}^0(S)\to\operatorname{Jac}(S)$ onto, via the
  implicit-function-theorem open set), **Prop. 7.5** (kernel contains the principal divisors),
  **Thm. 7.6** (Clebsch injectivity), **Cor. 7.7** (genus 1: $I_o$ an isomorphism), and
  **Lemmas 7.8–7.9** (the third-kind differential $\eta_D$ and the reciprocity formula). These
  match the coverage dispositions item-for-item.
- McMullen, *Riemann Surfaces* (Harvard 213b, 2026) — 1 128 808 B, sha256_16 `1442374a6f3a389a`,
  183 pp. Spot-read: **Thm. 15.3** with the pentagon paragraph, including verbatim
  "$H_1(X,\mathbb Z)=A\cdot C$ is a free, rank one $A$-module, where
  $A=\mathbb Z[T]/(1+T+T^2+T^3+T^4)$" and $\operatorname{Jac}(X)\cong\mathbb C^2/\mathbb Z[(\zeta,\zeta^2)]$
  (supports `ex-period-matrix-and-jacobian-of-the-pentagon-curve`); **Thm. 15.5**,
  **Thm. 15.7** (smooth embedding), **Thm. 15.8** (Jacobi surjectivity with $\det D\varphi$),
  **Thm. 15.13** (the wedge-period formula proved by cutting along the $(a_i,b_i)$, with the
  boundary jumps $f|_{a_i'}-f|_{a_i}=\alpha(b_i)$, $f|_{b_i'}-f|_{b_i}=\alpha(a_i)$),
  **Lemma 15.10/15.12** (the weak solution and the $(1/2\pi i)\int(\partial f/f)\wedge\omega$
  identity), **Thm. 15.15** (the divisor-realizing meromorphic differential).
- Forster, *Lectures on Riemann Surfaces* (GTM 81) — 19 052 171 B, sha256_16 `a7734adc75598d2b`,
  262 pp. Spot-read: the weak-solution definition, **Thm. 21.4(b)** (period subgroup is a lattice,
  via the local map $F$ at separating points), **Thm. 21.7** (Jacobi inversion proved by
  "the vector $(1/N)P$ lies in the image of … $F$", i.e. the division-by-$N$ step used by
  `thm-jacobi-inversion`).

`coverage-checklist ... --require-destination` reports `1 page(s), 55 harvested result(s),
0 error(s), 0 warning(s)`; every row is disposed and every `included`/`inline` row names an
existing item. Two reading notes, neither a scope loss: (i) the design's Schlag Ch. 8 locator is
stale (Chapter 8 is "Uniformization"; the Riemann–Roch/Abel/Jacobi material is Ch. 7) and the
book is not openly readable — the two-treatment rule is met three times over by the documents
above, so no claim was narrowed (§6.1); (ii) the coverage file carries only the A-page block, but
B items are mapped inside it (`ex-periods-of-a-complex-torus`,
`ex-period-matrix-and-jacobian-of-the-pentagon-curve`,
`ex-principal-divisor-tests-via-the-abel-jacobi-map`); the remaining three B items
(`ex-symplectic-homology-basis-of-a-genus-two-surface`,
`ex-base-point-cancellation-for-degree-zero-divisors`, `ex-abel-image-in-its-jacobian`) are
direct instances of A items and published polygon/torus items and carry no independent sourced
claim (§6.3).

## 4. Prerequisite audit (unmet-prerequisite duty)

### 4.1 Declared dependencies

The 29 items declare **125 distinct dependency ids: 90 published + 35 in-run; 0 missing.**
- All 90 published dependencies resolve to item files carrying `status: published`,
  `proved_here` not false and no `external_refs` fallback (mechanical front-matter check,
  0 flags).
- The 35 in-run ids are 25 items of this pair plus 10 cross-batch scaffolded items: 5 from batch 9
  (`hodge-theory-on-compact-riemann-surfaces`) and 5 from batch 10
  (`divisors-riemann-roch-and-duality`). Both supplier pairs are present in the current scaffold
  and their Step-3a scope receipts read `sufficient`.
- All **202 statement/strategy wikilinks resolve** (pair item, run item or published item):
  0 unresolved.
- Page `requires`: six published pages all `status: published`
  (`cw-complexes-and-cellular-homology`, `cup-cap-cross-products-and-cohomology-rings`,
  `orientations-poincare-lefschetz-and-alexander-duality`, `the-de-rham-theorem-and-degree`,
  `hilbert-space-geometry-and-riesz-representation`,
  `classification-of-compact-connected-surfaces`) plus the in-run
  `divisors-riemann-roch-and-duality`; the B page requires the A page.

### 4.2 Load-bearing suppliers checked

The batch-9/10 statements were read against their declared use: Serre duality
$i(D)=\ell(K-D)$, Riemann–Roch $\ell(D)-\ell(K-D)=\deg D+1-g$ (giving $\ell(K)=g$,
$\deg K=2g-2$), finite-dimensionality of $H^0/H^1(\mathcal O(D))$, divisors/orders/canonical
divisor and $\mathcal O(D)$, the Hermitian metric and $L^2$ pairing, Hodge decomposition,
finite-dimensional Dolbeault cohomology, harmonic-star duality
$H^{0,1}(X,\mathcal O)\cong H^0(X,K)^*$, and the holomorphic line-bundle interface. Every
supplier states the Axiom of Choice it needs, and all 29 pair items state the inherited AC
hypothesis. **No confirmed unmet prerequisite**, with one uncertainty recorded next.

### 4.3 Flagged potential prerequisite-interface gap (uncertain, non-blocking)

- **Consuming items:** `def-jacobian-of-a-compact-riemann-surface` (claims $\operatorname{Jac}(X)$
  is "a compact complex torus of complex dimension $g$" and "canonically isomorphic complex
  tori" across presentations), `def-abel-jacobi-map` and
  `lem-abel-jacobi-map-is-well-defined-and-base-point-independent` (claim $u$ is holomorphic, with
  a derivative into $T_0\operatorname{Jac}(X)\cong\Omega(X)^*$),
  `thm-abel-jacobi-embedding-positive-genus` (claims a "closed embedding … as a compact complex
  submanifold of the complex torus").
- **Required prerequisite claim:** a usable notion of a **complex manifold of complex dimension
  $g$** — or at least the complex torus $V/\Lambda$ for a full-rank lattice in a finite-dimensional
  complex vector space, with its quotient charts — and of **holomorphic maps between complex
  manifolds**.
- **Evidence for absence:** the published `def-complex-lattice-and-complex-torus` defines a full
  complex lattice only as a subgroup $\Lambda\subseteq\mathbb C$ (dimension 1); its consumers
  `thm-complex-torus-quotient-is-well-defined` and `ex-complex-torus-holomorphic-atlas` are
  dimension-1 statements; no item id or title in `items/` defines a complex manifold or a
  $g$-dimensional complex torus (`def-complex-manifold*` search empty), and no item of any of the
  15 batch manifests of this run defines one (only the dimension-1 `ex-periods-of-a-complex-torus`
  and batch-10 torus examples mention complex tori).
- **Mitigation in the manifest:** the Jacobian definition itself exhibits the quotient map as a
  covering with deck group $\Lambda$, its local inverses as charts with translation transitions,
  and compactness of a fundamental parallelotope; so the construction of the complex structure is
  self-contained as written and only the general terminology/interface is missing.
- **Recommended owner action:** either (i) add a small scaffold definition (full lattice in a
  finite-dimensional complex vector space; complex torus $V/\Lambda$; holomorphic maps between
  complex manifolds), or (ii) direct Step-3 authors to keep the transfer explicit and phrase all
  $g$-dimensional claims through the quotient charts of `def-jacobian-…` without introducing a new
  general definition (the batch-11 Step-1 note already directs this, and Step 5 should check it is
  not read as a new definition of a $g$-dimensional complex manifold).

## 5. Intended role in the library

- The pair is the CA-RS-3 station of the complex-analysis track: it finishes the period/divisor
  theory by turning the polygon homology and Riemann–Roch/Serre-duality inputs into the
  period lattice, the Jacobian, Abel's theorem and Jacobi inversion.
- Consumer scan: **no consumer is missing and none is over-declared.** Within the run there is no
  item-level consumer of the 29 ids (only the B page requires the A page); across all 762 batch
  manifests of every current-frontier run the id scan returned 0 hits; the published library
  (`items/`, `library/`) contains no reference to any of the 29 ids (several distinctive
  fragments grepped). This matches the design's "Forward references: NONE load-bearing" and the
  Step-1 no-drift verdict.
- The pair consumes 33 in-run item edges (26 from batch 10, 7 from batch 9), all landing on
  present scaffold items.

## 6. Non-blocking owner observations

1. **Stale design source pointer:** the design names "Schlag Ch. 8 §§1–5"; the published book's
   Chapter 8 is "Uniformization" (the material is Ch. 7) and the book is not openly readable
   (403/404 attempts recorded by beta-11). Recorded by beta-11; no claim narrowed. Owner
   reconciliation of the design text only.
2. **Plan `requires` does not name the Hodge page** although the proof route uses its output; the
   dependency is transitive through CA-RS-2 and the explicit item-level edges to batch 9 make it
   visible. No scope change; recorded in the batch notes.
3. **Coverage-file shape:** the batch-11 coverage has a single page block (the A page), with B
   items mapped inside it; three B items have no dedicated harvest row (they are direct instances
   of A items/published polygon examples). Accepted pattern in this run (batches 12–15 likewise
   carry only their A-page block); no sourced B claim lacks a source.
4. **Potential complex-torus interface** — §4.3; recommended either a small scaffold definition
   or an explicit Step-3 wording direction. Uncertain, not confirmed as proof-blocking.
5. Out of this pair's scope: batch-10's consumer input is reported (by beta-11) to lack the review
   row for the page edge `divisors-riemann-roch-and-duality -> hodge-theory-on-compact-riemann-surfaces`;
   the owner can have batch 10's input completed before the Step-1 gate.

## 7. Decision and receipt

`sufficient` for the pair. Recorded with
`node tools/step3-decisions.mjs record-scope --run frontier-43-complex-representation-15 --page periods-jacobians-and-abel-jacobi-theory --decision sufficient --reason <scope evidence; report path>`.
No scaffold edit, no item approval and no owner record was written; the §4.3 finding is advisory
for the owner and Step-3 authors.
