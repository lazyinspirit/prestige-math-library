# Step 3a dispatch report — `quasisymmetry-welding-and-conformal-removability`

- Run: `frontier-43-complex-representation-15` (batch 14, orders 1622/1623, `complex-analysis`).
- Pair: A `quasisymmetry-welding-and-conformal-removability` (16 items) / B
  `quasisymmetry-welding-and-conformal-removability-examples` (6 items). Batch 14 is the only
  pair in its batch files.
- Role: alpha scope review of this pair only. No scaffold, manifest, coverage, item, plan or
  owner record was edited; this report and the `record-scope` receipt are the only outputs.
- **Decision: `sufficient`** — every design row and companion example is present with the designed
  scope, source coverage is adequate and independently re-verified, and no unmet prerequisite was
  found. Scope hash at review: `6ed76d447401053d891347d6a226b17b77b17cd84e09498733db0a4dee3b3cbb`.
  Non-blocking owner observations are in §5.

## 1. Inputs read

- Manifests: `research/frontier-43-complex-representation-15-batch-14.pages.json` (both pages, all
  22 items with statements, strategies, kinds, deps, axiom use),
  `...-batch-14.coverage.json` (7 sources, 52 harvest rows with dispositions),
  `...-batch-14.cross-batch-dependencies.json` (41 rows: 1 page, 40 item; all status `open`),
  `...-batch-14.notes.md` (Step-1 design reconciliation, inventory rationale, choice record),
  `...-scope-ledger.json` (both pages owed, batch 14), `plan-spec.json` rows 1622/1623
  (orders/companion/requires; both `items` arrays empty, so the scaffold displaces nothing).
- Design/prose: `research/plan-complex-analysis-track.md` §CA-QC-3 (L4206–4230: 8-row item table,
  companion list, source/proof-strategy paragraph, holomorphic-motion/Teichmüller denial),
  summary row L493, requirement mapping L5466, source mapping L4896–4932.
- Run records: `...-alpha-step1-drift.md` L84–90 (this page: VERDICT `no-drift`, with the explicit
  warnings that uniqueness is asserted only under conformal removability and that the Hausdorff
  claim is limited to zero-length sets and quasicircles, no dimension-threshold converse);
  `...-owner-authoring-direction.md` §"Batch 14" (the retained CA-QC-2 regularity/Jacobian
  interface may be consumed only once its local supplier proofs are authored and reconciled);
  batch-12 notes (§"Assumption propagation": batches 13–14 consumers must carry the Axiom of
  Choice of the quasiconformal suppliers; the deferred point-removal row lands here); batch-13
  notes; the 22 step-1 readiness receipts (22/22 `ready`, not mathematical approval).
- Sources re-read for this review (not deferred to the authors): Lyubich, *Conformal Geometry and
  Dynamics of Quadratic Polynomials* I, §15.4 (Theorem 15.23 and its full proof), §16.1–16.3;
  Bishop, *Quasiconformal Mappings*, Ch. 2 §7 (removability; Corollaries 7.5–7.7), §8
  (Theorem 8.1), §9 (bounded turning); Ahlfors–Beurling 1950, §5 Theorems 9–10, §6 Theorems
  11/11′; Younsi 2015, §3.2 Theorem 3.5 (Besicovitch), §5.4 Definition 5.22 / Proposition 5.23 /
  Corollary 5.24; Gehring 1999, §II.A–B (reflection property, two-point inequality, reversed
  triangle inequality). Full texts were fetched and read in the extracted text.

## 2. Design ∶ scaffold comparison (scope only)

All eight design rows are present, id-for-id, with the designed content:

| design row (CA-QC-3) | batch-14 item |
|---|---|
| quasisymmetric circle/line homeomorphism, uniform adjacent-arc control | `def-quasisymmetric-circle-homeomorphism` (definition; line, circle, closure, $1$-qs rigidity, normalised Möbius behaviour) |
| Beurling–Ahlfors quantitative extension | `thm-beurling-ahlfors-extension` (theorem; disc and line, both directions) |
| quasicircle = qc image of a circle (with quasidisk/quasiarc) | `def-quasicircle` (definition) |
| selected bounded-turning/three-point and qc-reflection characterisations | `thm-quasicircle-characterizations` (theorem; (i)⇔(ii) with the two-point/reversed-triangle forms, (i)⇔(iii)) |
| every qs circle map is a welding, up to normalisation | `thm-quasiconformal-welding-existence` (theorem; existence with $K(L)$-quasicircle curve, extension-independence, $\operatorname{Aut}(\mathbb D)$ invariance, Möbius postcomposition only) |
| conformal removability of a compact set | `def-conformal-removable-compact-set` (definition; global and local forms, elementary consequences) |
| two weldings of a removable curve differ by Möbius | `thm-welding-uniqueness-under-removability` (theorem) |
| zero-length sets and quasicircles are removable; no converse | `thm-zero-length-sets-and-quasicircles-are-conformally-removable` (theorem; explicitly no converse, no dimension threshold) |
| welding definition (support) | `def-conformal-welding-of-a-jordan-curve` |
| gluing lemma (support) | `lem-smooth-arcs-and-circles-are-removable-for-quasiconformal-maps` |
| explicit Ahlfors–Beurling formula (support) | `lem-ahlfors-extension-of-line-quasisymmetric-maps` |
| Carathéodory/Conformal Schönflies boundary correspondence (support) | `lem-riemann-maps-of-jordan-domains-extend-homeomorphically` |
| Besicovitch finite-length removability (support) | `lem-zero-length-sets-are-removable-for-continuous-analytic-functions` |
| round circles removable (support) | `lem-round-circles-are-conformally-removable` |
| positive area is never removable (support) | `lem-positive-area-compact-sets-are-not-conformally-removable` |
| removability is qc-invariant (support) | `lem-conformal-removability-is-quasiconformally-invariant` |

The six companion entries map exactly onto `ex-quasisymmetric-power-map-on-the-circle`,
`ex-snowflake-quasicircle`, `ex-conformal-welding-of-the-round-circle`,
`ex-mobius-ambiguity-in-conformal-welding`, `cex-every-compact-set-is-conformally-removable`,
`ex-single-point-conformal-removability`. The eight added A items are local proof support
introduced by the scaffold, not padding: each is consumed by at least one other item of the pair
(in-degree checked inside the pair); the only A-page leaf is the designed headline result
`thm-quasiconformal-welding-existence`, and the B items are leaves by design. The batch notes name
the design step each support item serves. The design's warnings are honoured literally: the
existence theorem states
well-definedness and Möbius ambiguity but explicitly withholds unconditional uniqueness, which is
stated only under removability; the removability theorem asserts no converse and no
Hausdorff-dimension threshold; holomorphic motions and Teichmüller theory appear only as reasoned
declines in the coverage. The design's "uniquely only up to postcomposition after normalization
qualifications" is thus split across the two items exactly as the drift review requires.

## 3. Source coverage

Seven sources, 52 harvested rows with explicit dispositions (18 `included`, 20 `inline`,
14 `out-of-scope` with written reasons): Lyubich §15.1–15.4/§16.1–16.3; Bishop QC Ch. 2 §§7–9;
Ahlfors–Beurling §§1, 5–7; Younsi §§1–5; Jones–Smirnov §§1–2; Gehring §I–II; Bishop 2007 §1.
I independently re-read the load-bearing passages and confirm the disposition claims:

- Lyubich Thm 15.23 (printed pp. 212–214) states the qs↔quasicircle correspondence and proves it
  from the Ahlfors–Beurling extension plus MRMT; the proof's extension-independence step
  ($H'=H\circ\Psi$, $\Psi=\mathrm{id}$ on $\mathbb T$, hence $\Gamma_{\hat h'}=\Gamma_{\hat h}$)
  matches the scaffold's clause (b) verbatim, so that clause is not an overclaim.
- Lyubich §16: conformal removability = qc removability (Prop 16.2), quasicircles removable
  (Lemma 16.3), removable sets have zero area (Prop 16.4); the divergence-property branch is
  declined with reason and has no consumer here.
- Bishop §7: finite or σ-finite 1-measure is removable; Cor 7.5–7.7 covers the line and
  quasicircles through the Jones–Smirnov shadow criterion. Bishop §8 Theorem 8.1 and §9 give the
  bounded-turning/three-point dictionary used by the characterisation theorem.
- Ahlfors–Beurling: Theorem 9 (null class $N_B$ ⇔ extremal distances unchanged), Theorem 11/11′
  (a set on a line/analytic curve is $N_B$ iff of length zero) — the analytic engine cited for
  the zero-length lemma, correctly located.
- Younsi: Theorem 3.5 (Besicovitch: $\mathcal H^1(E)<\infty\Rightarrow$ removable for continuous
  analytic functions) and §5.4 (Definition 5.22, Proposition 5.23, Corollary 5.24: welding
  uniqueness exactly when the boundary is CH-removable), matching
  `thm-welding-uniqueness-under-removability`; the survey also warns that the converse has been
  falsely claimed in the literature — the scaffold does not claim it.
- Gehring §II.B: two-point inequality, reversed triangle inequality
  $|z_1-z_2||z_3-z_4|+|z_2-z_3||z_4-z_1|\le b|z_1-z_3||z_2-z_4|$, and their equivalence with
  explicit constant dependence ($b=2a(a+1)$) — the scaffold's formulation. The reflection
  property is Ahlfors's characterisation (a web check confirms the standard quasiconformal
  reflection/involution form used by the scaffold).

The out-of-scope declines (annulus interpolation and Cantor-set equivalence; quasi-annulus
compactness; divergence property; holomorphic motions/Teichmüller; continuous-coefficient mapping
theorem; projection criterion; sharp capacity computations; absolute-area-zero characterisation;
dynamics applications; open problems; quasihyperbolic/Hölder-domain criteria; Gehring §§III–IV;
approximate welding theory) are consistent with the design's stated denials and none has a
consumer on this pair. `tools/coverage-checklist.mjs --require-destination` reports 0 errors and
one warning (18/52 scaffolded) whose "confirm the declines with Alpha" action is exactly this
confirmation.

## 4. Prerequisites and dependency records

- Direct declarations: the transitive closure of the 22 items' declared `deps` contains 168
  distinct ids — all resolve to published items or to items scaffolded in this run (batches 12–13);
  0 missing and 0 "planned-only" (i.e. nothing in the closure exists only as a plan row). The 44
  distinct `[[...]]` wikilink targets in statements and strategies resolve except one id-naming
  typo recorded in §5.
- Page `requires`: the four declared pages all exist — `the-riemann-mapping-theorem`,
  `hausdorff-measure-and-hausdorff-dimension`, `logarithmic-potential-capacity-and-riesz-decomposition`
  are `status: published`, and `beltrami-equation-and-measurable-riemann-mapping` is the in-run
  batch-13 pair (scaffolded; authored in this run under the owner direction). This matches the
  design's CA-QC-2/CA-16/CA-PT-1 inputs plus the plan's added Hausdorff requirement.
- Owner interlock respected: the three batch-13 suppliers consumed here are exactly
  `def-measurable-beltrami-coefficient`, `def-weak-solution-beltrami-equation` and
  `thm-measurable-riemann-mapping-sphere`; no batch-14 item touches
  `thm-holder-regularity-beltrami-solutions` or the local Hölder lemmas, as the owner direction
  requires.
- Cross-batch ledger: all 41 rows (batches 12–13 suppliers) are `open` pending those suppliers'
  authoring, which is the expected Step-3a state; no row is missing a target.
- Choice assumptions: every item consuming a batch-12/13 quasiconformal supplier assumes the
  Axiom of Choice in its `axiom_use`, as the batch-12 record requires; the four Countable-Choice
  items stay choice-free.
- Consumers/role: no item of any other in-run pair, and no published item, consumes this pair's
  items (verified across all 15 batch manifests and the published tree); the page's forward
  references are none load-bearing, as the design states. The batch-12 deferred row "point
  removal" is delivered by `ex-single-point-conformal-removability`.

### Unmet prerequisites

None confirmed. There is no prerequisite claim absent from both the published library and the
current scaffold: the full 168-item closure of the pair resolves, the four page-level requires
exist, and the in-run suppliers are legitimately scaffolded. Residual uncertainty, stated
honestly: content-level adequacy of the published suppliers (e.g. `def-hausdorff-measure`,
`thm-jordan-brouwer-separation`, `cor-cauchy-theorem-convex-domain`) is not audited here and
belongs to the Step-3b item audits and Step-5 review; nothing found suggests a gap. The one
broken wikilink (§5.1) is a naming typo against an existing published item, not an absent claim.

## 5. Non-blocking owner observations

1. **Broken wikilink id (naming typo).** The strategy text of
   `lem-zero-length-sets-are-removable-for-continuous-analytic-functions` cites
   `[[thm-cauchy-theorem-convex-domain]]`; no such item exists. The intended published item is
   `cor-cauchy-theorem-convex-domain` (title "Cauchy's theorem on a convex complex domain"), and
   its id is already the declared dependency of the item — so the prerequisite is available and
   only the in-text link prefix is wrong. Authoring should use the real id. Step 3a prohibits
   scaffold edits, so this is recorded, not repaired.
2. **Declared-but-unconsumed requirement.** `logarithmic-potential-capacity-and-riesz-decomposition`
   (CA-PT-1) is not consumed by any item of the pair (already recorded in the batch notes). The
   plan itself declares this requirement (L4209/L5466), so keeping it is design-faithful as a
   reading-order prerequisite; the owner may confirm at splice whether it should remain an
   unconsumed declared edge.
3. **Scaffold formatting.** The statement of `ex-mobius-ambiguity-in-conformal-welding` contains
   three literal `\n` escape sequences instead of paragraph breaks. Cosmetic; resolved when the
   example is authored in Step 3b.
4. **Placement observation (carried from the batch notes).** The Carathéodory/Conformal
   Schoenflies boundary correspondence
   (`lem-riemann-maps-of-jordan-domains-extend-homeomorphically`) is homed locally on this A page;
   it could alternatively live on the Riemann-mapping page. Its published suppliers
   (`thm-jordan-brouwer-separation`, `lem-jordan-schoenflies-extension-for-plane-curves`) make the
   local route available, so this is a placement choice for the owner, not a scope gap.
5. **Item-level decisions remain Step 3b work.** This review certifies scope only: proof-route
   adequacy, the exact constants in the characterisation and extension theorems, and the choice
   interfaces are for the Step-3 authors and Step-5 reviewers.

## 6. Verification performed

| check | actual result |
|---|---|
| `node tools/manifest-deps.mjs research/frontier-43-complex-representation-15-batch-14.pages.json` | 22 items, 0 errors |
| `node tools/coverage-checklist.mjs ...batch-14.coverage.json --require-destination` | 1 page, 52 results, 0 errors, 1 expected warning (18/52 low yield; declines confirmed above) |
| dependency closure script over `items/` + all 15 batch manifests + `plan-spec.json` | 168 ids, 0 missing, 0 planned-only |
| wikilink resolution script over the pair's statements/strategies | 44 targets, 43 resolve, 1 id-naming typo (§5.1) |
| page-require existence check | 3 published + 1 in-run (batch 13) |
| step-1 readiness receipts for the 22 items | 22/22 `ready` (not approval) |
| primary-source re-read | Lyubich §15.4/§16, Bishop §7–9, Ahlfors–Beurling §5–6, Younsi §3.2/§5.4, Gehring §II; locators confirmed |

## Decision

`sufficient`. The planned definitions (quasisymmetric maps, quasicircle/quasidisk/quasiarc,
conformal removability, conformal welding), results (Ahlfors–Beurling extension both ways,
quasicircle characterisations, welding existence with normalization qualifications, welding
uniqueness under removability, zero-length/quasicircle removability with no converse) and the six
companion examples adequately cover the intended subject, the source coverage is complete for the
declared scope with reasoned declines, and no prerequisite is unmet. Decision recorded with
`tools/step3-decisions.mjs record-scope` (receipt:
`research/frontier-43-complex-representation-15-step3a-review-quasisymmetry-welding-and-conformal-removability.json`,
decision `sufficient`, bound to the scope hash above).
