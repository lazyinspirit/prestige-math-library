# Step 3b report — A/B pair `riemann-roch-for-curves-via-euler-characteristics`

- Run: `frontier-37-owner-30`
- Role: alpha-high, batch 7
- Owned pair: A `riemann-roch-for-curves-via-euler-characteristics` (order
  366.087, 34 items), B `riemann-roch-for-curves-via-euler-characteristics-examples`
  (order 366.088, 10 items)
- Dispatch: `research/frontier-37-owner-30-step3b-pair-riemann-roch-for-curves-via-euler-characteristics.task.md`
- Output batch file: `research/frontier-37-owner-30-batch-7.pages.json`
- Proof contracts: `research/frontier-37-owner-30-batch-7.proof-contracts.json`

## Inputs read (entry checkpoint)

- `CLAUDE.md`, `SCHEMA.md`, `research/frontier-37-owner-30-batch-7.notes.md`
  (Step-1 construction notes), the batch-7 manifest and coverage, the batch-7
  cross-batch dependency input, `research/plan-spec.json` entry for order
  366.087, design section AV-24 of `research/plan-algebraic-geometry-track.md`.
- Step-3a scope review
  `research/frontier-37-owner-30-step3a-pair-riemann-roch-for-curves-via-euler-characteristics.md`
  (scope sufficient; 24 inline harvest absorptions deferred to Step 5 by the
  review's own disposition).
- `research/frontier-37-owner-30-owner-authoring-direction.md` does not exist
  (checked at dispatch open); `research/frontier-37-owner-30-pre-splice-plan-findings.json`
  rechecked for this pair: 1 `intra-order` + 19 `b-leaf` + 8 `undeclared-prereq`
  findings, each dispositioned below.
- Direct in-run prerequisite pairs inspected for supplier status:
  `cartier-and-weil-divisors-line-bundles-and-picard-groups` (batch 5; scaffold
  only, no item files authored at this writing) and
  `smooth-proper-curves-divisors-genus-and-ramification` (batch 6; partly
  authored — `def-algebraic-curve-over-field`, `thm-local-ring-smooth-curve-dvr`,
  `def-divisor-smooth-proper-curve`, `thm-h0-structure-sheaf-proper-curve`,
  `def-arithmetic-genus-proper-curve`, `def-degree-divisor-proper-curve`, and
  further items authored as drafts).

## Authoring order (recomputed dependency levels)

Authoring follows the dispatch order; levels are recomputed after every local
dependency repair with `tools/item-dependency-levels.mjs`. Current plan
(levels before this dispatch's authoring):

0. `lem-nonzero-map-invertible-to-locally-free-injective`, `lem-vector-bundle-p1-extension-splits`
1. `lem-vector-bundle-p1-has-maximal-degree-line-subbundle`
2. `lem-smooth-curve-coherent-torsion-free-locally-free`
3. `def-genus-euler-characteristic-curve`, `lem-vector-bundle-p1-maximal-line-quotient-locally-free`
4. `lem-degree-zero-effective-divisor-empty`
10. `lem-projective-line-divisors-classified-by-degree`
11. `cor-picard-projective-line-integers`, `lem-divisor-order-monotonicity-sections`, `lem-riemann-roch-space-finite-dimensional`
12. `cor-degree-zero-line-bundle-section-trivial`, `cor-negative-degree-no-sections-rr`, `def-little-l-divisor`, `lem-add-one-point-exact-sequence-line-bundle`, `thm-birkhoff-grothendieck-vector-bundles-p1`, B `ex-adding-point-section-dimension-jump`
13. `def-index-speciality-divisor`, `lem-add-one-point-euler-characteristic`, `lem-h1-stabilizes-downward-point-removal`
14. `lem-divisor-decomposition-positive-negative-points`
15. `thm-euler-characteristic-degree-shift-curve`
16. `thm-riemann-roch-euler-characteristic-curve`
17. `cor-riemann-inequality-divisor-sections`, `thm-riemann-roch-as-l-minus-index`
18. `cor-existence-rational-function-bounded-pole`, `def-nonspecial-divisor`, B `ex-degree-zero-principal-divisor`, B `ex-riemann-roch-projective-line-divisor`
19. `cor-dimension-complete-linear-system`, `cor-smooth-proper-curve-finite-map-projective-line`, B `cex-negative-degree-rr-right-side-negative`, B `cex-riemann-inequality-not-equality-special-divisor`
20. `thm-genus-zero-point-implies-projective-line`, `thm-h1-line-bundle-vanishes-sufficiently-high-degree`, B `ex-empty-divisor-euler-characteristic`, B `ex-linear-system-poles-at-one-point`
21. `cor-nontrivial-degree-zero-line-bundle-no-sections`, `cor-riemann-theorem-large-degree`, `lem-large-positive-divisors-nonspecial`, B `cex-genus-zero-without-rational-point-not-p1`, B `ex-genus-zero-conic-with-rational-point`
22. `rem-sharp-degree-thresholds-wait-for-duality`, B `ex-nonspecial-large-divisor`

## Checkpoint log

Each entry records: item id; exact claim and conventions; source locators;
declared dependencies; decision; checks actually run; open gaps; next action.

### Checkpoint 1 — `lem-nonzero-map-invertible-to-locally-free-injective` (level 0)

- Claim: on an integral scheme, every nonzero morphism from an invertible sheaf
  to a finite locally free sheaf is injective.
- Route: stalkwise; on a chart both are free over a domain, a nonzero element of
  a domain is not a zero divisor, and injectivity is stalkwise
  (`thm-sheaf-morphism-isomorphism-stalkwise`).
- Checks: precheck PASS; strict contract entry clean; no gap. Decision pending
  until the manifest sync (recorded after all manifest edits).

### Checkpoint 2 — `lem-vector-bundle-p1-extension-splits` (level 0)

- Claim: for 0 → O(b) → E → F → 0 finite locally free on P¹ with F a sum of
  line bundles O(b_i), b_i ≤ b, the sequence splits: E ≅ O(b) ⊕ F.
- Rewritten during this dispatch as a direct induction on the number of
  line-bundle summands of the quotient, with base case the rank-one
  computation H¹(O(n)) = 0 for n ≥ 0 from
  `cor-h0-projective-space-o-d-homogeneous-polynomials` and
  `cor-top-cohomology-projective-space-o-d` (no dependence on any
  examples-page item, no dependence on `lem-nonzero-map…`).
- Checks: precheck PASS; strict contract clean after adding
  `def-section-restriction-and-global-section`. No gap.

### Checkpoint 3 — `lem-vector-bundle-p1-has-maximal-degree-line-subbundle` (level 1)

- Claim: a nonzero finite locally free module E of rank r ≥ 1 on P¹ has a line
  subbundle of maximal degree b, with H⁰(E(-b)) ≠ 0, H⁰(E(-b-1)) = 0, and every
  nonzero φ: O(b) → E injective.
- Route: nonemptiness from `lem-eventual-global-generation-coherent-twists` +
  `def-globally-generated-sheaf`; boundedness below by twisting a section to
  O(-n) → E and left exactness of global sections; maximality by the same
  vanishing criterion.
- Checks: precheck PASS; strict contract clean after adding
  `def-projective-morphism-pre-proj`,
  `def-relative-projective-space-standard-charts`. No gap.

### Checkpoint 4 — `lem-smooth-curve-coherent-torsion-free-locally-free` (level 2)

- Claim: on a smooth curve over a field, a coherent module is finite locally
  free iff torsion-free in the local sense; a non-torsion-free coherent module
  has a nonzero global section; subsheaves of locally free modules are
  torsion-free.
- Route: stalks over the DVR O_{C,x} (`thm-local-ring-smooth-curve-dvr`,
  `cor-dvr-is-a-pid`), f.g. torsion-free modules over a PID are free, local
  freeness spreads by `thm-locally-free-locus-finite-presentation-open`;
  clause (2) by the sheaf gluing argument; clause (3) immediate.
- Checks: precheck PASS; strict contract clean (4/4 scope). No gap.

### Checkpoint 5 — `def-genus-euler-characteristic-curve` (level 3, definition)

- Claim/conventions: for a smooth proper geometrically integral curve C over
  k, g(C) := h¹(C, O_C) = dim_k H¹(C, O_C), so χ(C, O_C) = 1 − g(C) by
  `thm-h0-structure-sheaf-proper-curve`; this is the arithmetic genus
  p_a(C) = 1 − χ(O_C) of `def-arithmetic-genus-proper-curve`. No Serre duality.
- Dependencies (item file, synced to manifest): `def-algebraic-curve-over-field`,
  `def-arithmetic-genus-proper-curve`, `def-dimension`,
  `def-euler-characteristic-coherent-sheaf`,
  `def-sheaf-cohomology-derived-global-sections`,
  `thm-h0-structure-sheaf-proper-curve`.
- Contract: citations `[]`, derivations `[]`, 8 boundary rows, all
  `not_applicable` with item-specific reasons (definition, no proof steps).
- Checks: strict proof-contract clean at scope 6; precheck n/a (definition).
- Open gap: depends on batch-6 supplier `def-algebraic-curve-over-field` (and
  `thm-h0-structure-sheaf-proper-curve`), both authored on disk as drafts; the
  supplier-use reconciliation for the decision is recorded below.

### Checkpoint 6 — `lem-vector-bundle-p1-maximal-line-quotient-locally-free` (level 3)

- Claim: E finite locally free of rank r ≥ 2 on P¹ with φ: O(b) → E nonzero and
  b maximal (so H⁰(E(-b-1)) = 0); then F = E/O(b) is finite locally free of
  rank r − 1.
- Route: twist 0 → O(b) → E → F → 0 by O(-b); the long exact sequence of the
  further twist by O(-1) with H⁰(E(-b-1)) = 0 and H¹(O(-1)) = 0 gives
  H⁰(F(-b-1)) = 0; a torsion relation on F(-b) would twist on a chart to a
  nonzero section of F(-b-1) killed by a and gluing with 0 to a nonzero global
  section, contradicting this vanishing; hence F(-b) is torsion-free and
  coherent; on each standard chart U = Spec A (A = k[t], k[u] a PID) the module
  M = F(-b)(U) is finitely generated by the finite-type cover + quasi-compactness
  + unit-ideal localisation criterion, and torsion-free, hence free; so F(-b),
  and by the twisting equivalence F, is finite locally free; rank r − 1 by
  splitting over a trivialising chart.
- Facts [F1]–[F10]; deps synced to manifest (33 deps, all A-page or
  earlier-in-run suppliers, no b-leaf target).
- Checks: reflow + canonical renumbering applied; precheck PASS; strict
  proof-contract clean (boundary reasons item-specific); citation-fidelity
  `--fail-on-missing-quote` clean (102 citations over 6 items, no widening
  candidates); boundary-audit clean (no contradicted rows, no template reuse).
- Open gap: none local; the item no longer depends on any unfinished supplier.

### Pipeline checks run at checkpoint 6

- `node tools/tsx-run.mjs tools/precheck.mts` on the 6 authored items: all PASS.
- `node tools/proof-contract.mjs research/frontier-37-owner-30-batch-7.proof-contracts.json --strict`: 0 errors, 6/6 items.
- `node tools/citation-fidelity.mjs … --fail-on-missing-quote`: no missing
  quotes, no widening candidates.
- `node tools/boundary-audit.mjs … --fail-on-contradicted --fail-on-template`:
  no contradicted dispositions, no template reuse.
- `node tools/depcheck.mjs`: no error naming any authored batch-7 item (the only
  repo-wide failure is the batch-8 page
  `residues-serre-duality-for-curves-and-the-full-riemann-roch-theorem.md`
  listing `thm-adjunction-smooth-plane-curve`, which is another group's file).
- `node tools/item-dependency-levels.mjs check --run frontier-37-owner-30`:
  808 items across 60 pages clean after the batch-7 level refresh.
- Next action: author `lem-degree-zero-effective-divisor-empty` (level 4).

### Checkpoint 0 — pipeline established (before this continuation)

- Tooling under `/tmp/f37c` (not part of the deliverable): `lib.mjs` exact
  section-quote helpers, `number.mjs` canonical layer renumbering,
  `uses.mjs` per-step token extraction, `gen.mjs` contract-entry generator,
  `build.mjs` contract-file assembler, `scope.json`, `show.mjs`, `sec.mjs`,
  `closure.mjs`. Item edits are made in `items/`; contracts in
  `/tmp/f37c/specs/<id>.mjs` → `/tmp/f37c/<id>.json` →
  `research/frontier-37-owner-30-batch-7.proof-contracts.json`.
- Completed and contracted: `lem-nonzero-map-invertible-to-locally-free-injective`,
  `lem-vector-bundle-p1-extension-splits`,
  `lem-vector-bundle-p1-has-maximal-degree-line-subbundle`,
  `lem-smooth-curve-coherent-torsion-free-locally-free` — each precheck PASS,
  strict proof-contract clean.
- `def-genus-euler-characteristic-curve` and
  `lem-vector-bundle-p1-maximal-line-quotient-locally-free` files written;
  contract entries and checkpoints pending (next action).

### Checkpoint 7 — `lem-degree-zero-effective-divisor-empty` (level 4)

- Claim: for an effective divisor $D$ on a proper geometrically integral curve,
  $\deg_k(D)\ge0$ with equality exactly for $D=0$, and $D\le D'$ with equal
  degree forces $D=D'$.
- Route: unwinding through `def-degree-divisor-proper-curve` and
  `def-divisor-support-positive-negative-parts`; nonnegativity and vanishing
  from `lem-degree-effective-divisor-nonnegative`; the comparison clause is the
  difference $D'-D$, effective of degree zero.
- Checks: precheck PASS; strict contract clean; manifest deps synced.
- Open gap: none; all suppliers authored (batch-6 items on disk).

### Checkpoint 8 — `lem-projective-line-divisors-classified-by-degree` (level 10 → 4 after repair)

- Claim: $\mathbb P^1_k$ is a smooth proper geometrically integral curve of
  genus $0$; $\operatorname{div}(g)=[p]-d[\infty]$ for monic irreducible $g$ of
  degree $d$; $\operatorname{div}(x_0)=[\infty]$, $\mathcal O(1)\cong
  \mathcal O(\infty)$, $\deg_k\mathcal O(1)=1$; every divisor $D$ is linearly
  equivalent to $\deg_k(D)[\infty]$, so
  $\deg_k\colon\operatorname{CaDiv}(\mathbb P^1_k)/\operatorname{Prin}(\mathbb P^1_k)\to\mathbb Z$
  is an isomorphism.
- Local statement repair (report to owner): the frozen scaffold wrote
  $\infty=[1:0]=V(x_1)$ together with $t=x_1/x_0$; these are inconsistent
  (for $g=t$ clause 2 would give $\operatorname{div}(t)=[p]-[\infty]=0$ at a
  finite $p$). The authored statement uses the page's running convention
  $\infty=[0:1]=V(x_0)$, $t=x_1/x_0$, origin $[1:0]=V(x_1)$, keeps every
  promised claim, and keeps the true $x_1$-clause as the last clause of (3).
- Local notation repair: the two-affine twist frames are $e_0,e_\infty$ with
  $e_\infty=t^ne_0$ (not $e_0,e_1$); F2/F12 now state the comparison
  $x_0\leftrightarrow e_0$, $x_1\leftrightarrow e_\infty$ correctly.
- Ordering repair: the item's level moved from 10 to 4 because its former
  scaffold deps on the three unauthored Cartier suppliers were replaced by the
  A-page suppliers `cor-h0-projective-space-o-d-homogeneous-polynomials`,
  `cor-top-cohomology-projective-space-o-d` and
  `def-genus-euler-characteristic-curve`, and by the B-leaf deps
  (`ex-cohomology-o-d-projective-line-all-d`,
  `ex-polynomial-ring-flat-smooth`,
  `ex-twisting-sheaf-projective-line-transitions`) being dropped in favour of
  local arguments — clearing three `b-leaf` findings and three
  `undeclared-prereq` entries for this item.
- Flagged suppliers (exact; decision stays `escalate`): the item names the
  unauthored batch-5 items `def-invertible-sheaf-of-cartier-divisor`,
  `thm-line-bundle-rational-section-cartier-divisor` and
  `thm-cartier-weil-divisors-curves-agree` in fact [F14] and in the Statement's
  supplier note, with the exact obligations restated there; the consuming steps
  are 2.1 and 3.4 (attaching $\operatorname{div}(x_0)$,
  $\operatorname{div}(x_1)$), 4.3 ($\mathcal O(1)\cong\mathcal O(\infty)$ and
  the degree of an invertible sheaf via a rational section), 8.1 (Cartier–Weil
  transport) and 9.1 (choice accounting). The wikilinks are written as code
  spans rather than `[[…]]` so that the unresolved ids do not trip
  `depcheck`'s `link-unresolved`; the obligation is flagged here and the item is
  escalated until the suppliers are authored and their uses verified.
- Pre-splice findings: the three `b-leaf` findings naming this item are
  resolved locally (no B-page dependency remains). No `intra-order` finding
  names this item.
- Checks: precheck PASS; canonical renumbering at a fixpoint (the step order
  was repaired so that the divisor-of-$x_1$ step follows the coordinate-section
  step it cites); strict proof-contract clean at 8/8; citation-fidelity
  `--fail-on-missing-quote` clean (151 citations, no widening candidates);
  boundary-audit clean; manifest deps synced (41 deps, level 4).
- Open gap: the three flagged suppliers above; decision `escalate`.

### Checkpoint 9 — `cor-picard-projective-line-integers` (level 10 → 5 after repair)

- Claim: for every field $k$ the degree homomorphism induces an isomorphism
  $\operatorname{Pic}(\mathbb P^1_k)\to\mathbb Z$, and the inverse sends $d$ to
  $[\mathcal O(d)]$.
- Route repair: the frozen scaffold used the published example
  `ex-line-bundle-projective-line-transition` (an examples-page dependency of an
  A-page corollary). The authored proof avoids it: the chart/gluing computation
  of $\mathcal O(d[\infty])\cong\mathcal O(d)$ is redone locally from
  `def-twisting-sheaf-proj`, `thm-gluing-sheaves` and
  `lem-uniqueness-of-twists-on-the-projective-line`, and the Cartier-to-Picard
  dictionary is used only through the flagged batch-5 suppliers. The base case
  is item 8 (`lem-projective-line-divisors-classified-by-degree`).
- Flagged suppliers (exact; decision stays `escalate`): `def-invertible-sheaf-of-cartier-divisor`
  and `lem-cartier-divisor-addition-tensor` (consuming steps 1.2, 3.1),
  `thm-cartier-divisors-mod-principal-to-picard` (consuming step 1.2) and
  `cor-degree-descends-picard-curve` (consuming step 2.1), all batch 5 and not
  yet authored on disk. They are named in fact [F5] and in the Statement's
  supplier note as code spans so that `depcheck` does not report unresolved
  wikilinks; they are deliberately absent from the frontmatter `deps` until
  they are authored and their uses verified.
- Pre-splice findings: no `intra-order` finding names this item; the `b-leaf`
  finding on `ex-line-bundle-projective-line-transition` is resolved locally.
- Checks: precheck PASS; canonical renumbering at a fixpoint; strict
  proof-contract clean at 9/9; citation-fidelity `--fail-on-missing-quote`
  clean; boundary-audit clean; manifest deps synced (9 deps, level 5).
- Open gap: the four flagged suppliers above; decision `escalate`.

### Checkpoint 10 — `thm-birkhoff-grothendieck-vector-bundles-p1` (level 12 → 6 after repair)

- Claim: every locally free coherent sheaf of finite rank on
  $\mathbb P^1_k$ splits as a direct sum
  $\bigoplus_i\mathcal O(d_i)$, with the $d_i$ uniquely determined up to
  permutation.
- Route repair: the frozen scaffold's base case cited the examples-page leaf
  `ex-cohomology-o-d-projective-line-all-d`; the authored proof uses the
  published A-page suppliers `cor-h0-projective-space-o-d-homogeneous-polynomials`
  and `cor-top-cohomology-projective-space-o-d` instead, and the degree-normalised
  base case is item 9 (`cor-picard-projective-line-integers`). The extension
  step splits the top degree line subbundle and its quotient locally freely via
  items 1–6.
- Ordering repair: level 12 → 6 because the former B-leaf dependencies were
  replaced by A-page suppliers already available at that level.
- Flagged suppliers (exact; decision stays `escalate`): the item consumes
  item 9, whose degree-descends supplier `cor-degree-descends-picard-curve`
  (batch 5) is not yet authored; the dependency is inherited through item 9 and
  is flagged here rather than re-listed as an independent use.
- Checks: precheck PASS; canonical renumbering at a fixpoint; strict
  proof-contract clean at 8/8 (21 citations); citation-fidelity
  `--fail-on-missing-quote` clean; boundary-audit clean; manifest deps synced
  (18 deps, level 6).
- Open gap: the inherited flagged supplier above; decision `escalate`.

### Checkpoint 11 — `lem-riemann-roch-space-finite-dimensional` (level 11 → 1 after repair)

- Claim: for a smooth proper geometrically integral curve $C$ over $k$ and a
  divisor $D$, the sheaf $\mathcal O_C(D)$ is coherent, $L(D)=H^0(C,\mathcal
  O_C(D))$ is finite-dimensional, $H^q(C,\mathcal O_C(D))$ is
  finite-dimensional for all $q\ge0$ and vanishes for $q\ge2$, and
  $\chi(C,\mathcal O_C(D))=h^0(D)-h^1(D)$ is defined; hence $l(D)$ is a
  nonnegative integer.
- Route: coherence of $\mathcal O_C(D)$ from local freeness of rank one plus
  the locally Noetherian curve (finite type over the Noetherian field $k$);
  all-degree finiteness from `cor-projective-cohomology-finite-dimensional-field`
  applied to the proper $k$-scheme $C$; vanishing above degree one from
  `thm-noetherian-topological-space-dimension-vanishing` with the Noetherian
  underlying space supplied by `lem-curve-closed-subsets-finite`; the Euler
  characteristic collapses through the two surviving terms.
- Ordering repair: level 11 → 1 because the scaffold deps
  `def-riemann-roch-space-of-divisor` and `lem-cartier-divisor-sheaf-invertible`
  are unauthored and were written as flagged obligations in fact [F8] and the
  Statement instead of frontmatter deps.
- Flagged suppliers (exact; decision stays `escalate`):
  `def-riemann-roch-space-of-divisor` (batch 6), consumed at step 5.1 for the
  identification $L(D)=H^0(C,\mathcal O_C(D))$, and
  `lem-cartier-divisor-sheaf-invertible` (batch 5), consumed at step 1.3 for
  the invertibility of $\mathcal O_C(D)$.
- Checks: precheck PASS; canonical renumbering at a fixpoint (the numbering
  tool regrouped the steps into its layer order, 11 steps); strict
  proof-contract clean at 11/11 (19 citations); citation-fidelity
  `--fail-on-missing-quote` clean; boundary-audit clean; manifest deps synced
  (20 deps, level 1).
- Open gap: the two flagged suppliers above; decision `escalate`.

### Checkpoint 12 — `def-little-l-divisor` (level 12 → 3 after repair; definition)

- Claim: for a divisor $D$ on a smooth proper geometrically integral curve,
  $l(D):=\dim_kL(D)=\dim_kH^0(C,\mathcal O_C(D))=h^0(D)$ is the dimension of
  the Riemann-Roch space, a nonnegative integer; one writes
  $h^i(D)=\dim_kH^i(C,\mathcal O_C(D))$; and $l(0)=1$.
- Intra-order repair (report to owner): the frozen scaffold cites
  `lem-riemann-roch-space-finite-dimensional`, which sits later on the same
  page and cannot be reordered (sealed page order). The authored definition
  keeps the finiteness claim as a promise discharged by that lemma and names it
  in a code span rather than a wikilink, so no forward dependency is declared
  and no `intra-order` edge remains; the import of the finiteness
  identification is preserved in the Statement. Step 4 should consider whether
  the owner wants the definitional finiteness restated after the lemma instead.
- Flagged suppliers (exact; decision stays `escalate`):
  `def-riemann-roch-space-of-divisor` (batch 6) supplies $L(D)$ and its
  identification with $H^0(C,\mathcal O_C(D))$ (quoted in the Definition);
  `lem-cartier-divisor-sheaf-invertible` (batch 5) is named for the sheaf
  $\mathcal O_C(D)$.
- Checks: reflow unchanged; precheck clean (0 checked — definition, no proof);
  strict proof-contract entry clean (0 citations, 8 `not_applicable` boundary
  rows with item-specific reasons); manifest deps synced (5 deps, level 3);
  `depcheck` reports no error naming this item.
- Open gap: the two flagged suppliers above and the owner's Step-4
  reconciliation of the deferred finiteness pointer; decision `escalate`.

### Checkpoint 13 — `def-index-speciality-divisor` (level 13 → 10 after repair; definition)

- Claim: $i(D):=h^1(C,\mathcal O_C(D))=\dim_kH^1(C,\mathcal O_C(D))$ is a
  nonnegative integer, depends only on the linear-equivalence class of $D$,
  satisfies $i(0)=g(C)$, and measures the failure of the Riemann inequality
  $l(D)\ge\deg_k(D)+1-g$ to be an equality; no duality is used.
- Flagged suppliers (exact; decision stays `escalate`):
  `def-invertible-sheaf-of-cartier-divisor` and
  `def-linear-equivalence-cartier-divisors` (batch 5, linear-equivalence
  invariance of the attached sheaf) and `thm-cartier-weil-divisors-curves-agree`
  (batch 6, divisor-to-sheaf dictionary); all named in code spans in the
  Definition and absent from frontmatter deps.
- Checks: precheck clean (definition, no proof); strict proof-contract entry
  clean; boundary-audit clean after two `iff` rows were converted from
  `not_applicable` to `checked` with item-specific evidence (the Definition
  itself states the "exactly when i(D)=0" biconditional); manifest deps synced
  (7 deps, level 10).
- Open gap: the three flagged suppliers; decision `escalate`.

### Checkpoint 14 — `lem-divisor-order-monotonicity-sections` (level 11 → 10)

- Claim: for $D\le E$ on a smooth proper geometrically integral curve,
  $L(D)\subseteq L(E)$ as $k$-subspaces and the natural morphism of invertible
  subsheaves $\mathcal O_C(D)\to\mathcal O_C(E)$ is injective; for
  $E=D+p$, $L(D)=\ker(L(D+p)\to\kappa(p))$ with the quotient embedding into
  $\kappa(p)$ and $\dim_kL(D+p)/L(D)\le[\kappa(p):k]$; hence
  $l(D)\le l(E)\le l(D)+\deg_k(E-D)$.
- Route: order-conditions reading of $L$; the one-point map
  $\varphi(f)=$ class of $t^{a+1}f$ in $\mathcal O_{C,p}/(t)=\kappa(p)$ has
  kernel exactly $L(D)$; rank-nullity and subspace monotonicity give the
  bound; iteration over the finite support gives the general inequality.
- Flagged suppliers (exact; decision stays `escalate`):
  `def-riemann-roch-space-of-divisor` (batch 6; $L(D)$ and $L=H^0$),
  `def-principal-weil-divisor-and-class-group` (batch 5;
  $\operatorname{div}(f)=\sum_x\operatorname{ord}_x(f)[x]$ with additivity),
  `def-invertible-sheaf-of-cartier-divisor` and
  `thm-cartier-weil-divisors-curves-agree` (the invertible subsheaf
  $\mathcal O_C(D)\subseteq K_C$ and its global sections); named in [F2] as code
  spans, absent from frontmatter deps.
- Checks: precheck PASS; canonical renumbering at a fixpoint (10 steps); strict
  proof-contract clean at 10/10 (16 citations); citation-fidelity
  `--fail-on-missing-quote` clean; boundary-audit clean; manifest deps synced
  (15 deps, level 10).
- Open gap: the four flagged suppliers; decision `escalate`.

### Checkpoint 15 — `ex-adding-point-section-dimension-jump` (B page; level 12 → 5)

- Claim (as repaired): the jump $l(D+p)-l(D)$ lies in
  $[0,[\kappa(p):k]]$, both extremes occur, and intermediate values occur;
  computations (i) jump 0 on $\mathbb P^1_k$, (ii) jump $1=[\kappa(p):k]$ for
  a rational point, (iii) over $\mathbb R$ jump $2=[\kappa(p):k]$ for
  $p=V(t^2+1)$, (iv) over $\mathbb R$ jump 1 in residue degree 2.
- Confirmed scaffold defect (reported): the frozen statement claimed the jump
  "is either 0 or $[\kappa(p):k]$"; case (iv) refutes this. Repair keeps every
  promised instance (i)-(iii), corrects the general claim to the true bound of
  `lem-divisor-order-monotonicity-sections`, adds case (iv), and fixes the
  sign error in the scaffold's claim that $(t-q)/(t-a)$ has divisor
  $[a]-[q]$ (its divisor is $[q]-[a]=-(D+p)$). Title updated accordingly.
- Route repair: the scaffold's B-leaf dependency
  `ex-cohomology-o-d-projective-line-all-d` was dropped; all four computations
  are done explicitly from `lem-projective-line-divisors-classified-by-degree`
  plus the order dictionary, with the sheaf restatement kept as the flagged
  dictionary claim.
- Flagged suppliers (exact; decision stays `escalate`):
  `def-riemann-roch-space-of-divisor` and
  `def-principal-weil-divisor-and-class-group` (order form of $L(D)$ and
  $\operatorname{div}$), `def-invertible-sheaf-of-cartier-divisor` and
  `thm-cartier-weil-divisors-curves-agree` ($\mathcal O(p)\cong\mathcal O(2)$
  in case (iii)); named as code spans in [F4], absent from frontmatter deps.
- Checks: precheck PASS; canonical renumbering (with one stale range reference
  repaired by hand, `Steps 1.2-2.1`); strict proof-contract clean; boundary
  audit clean; manifest deps synced (14 deps, level 5).
- Open gap: the four flagged suppliers and the owner's Step-4 prose amendment
  for the corrected statement and title; decision `escalate`.

### Checkpoint 16 — `lem-add-one-point-exact-sequence-line-bundle` (level 10 → 6 after repair)

- Claim: the inclusion $\mathcal O_C(D)\to\mathcal O_C(D+p)$ has cokernel the
  skyscraper $i_{p,*}\kappa(p)$, giving a short exact sequence
  $0\to\mathcal O_C(D)\to\mathcal O_C(D+p)\to i_{p,*}\kappa(p)\to0$ of coherent
  $\mathcal O_C$-modules with $H^0(C,i_{p,*}\kappa(p))\cong\kappa(p)$ of
  $k$-dimension $d=[\kappa(p):k]$ and $H^q=0$ for $q\ge1$; iterating, for every
  effective $E$ the cokernel $Q_E$ of $\mathcal O_C(D)\to\mathcal O_C(D+E)$ is
  coherent, supported on $\operatorname{Supp}(E)$, with
  $\dim_kH^0(C,Q_E)=\deg_k(E)$ and $H^q(C,Q_E)=0$ for $q\ge1$ — hence the
  promised bound $0\le\dim_kH^0(C,Q_E)\le\deg_k(E)$.
- Route repair (b-leaf): the frozen scaffold used the published examples-page
  leaf `ex-skyscraper-sheaf-acyclic`. The authored proof descends the
  cohomology of the skyscraper from the published A-page items
  `lem-closed-immersion-preserves-sheaf-cohomology` and
  `thm-cohomology-one-point-space` applied to the one-point space
  $\{p\}\subseteq C$, and constructs the third term as the cokernel of an
  explicit evaluation morphism $\psi(f)=t^{a+1}f\bmod(t)$ whose kernel is
  computed to be $\mathcal O_C(D)$; exactness is checked stalkwise with
  `thm-exactness-of-sheaves-stalkwise`. The scaffold's Cartier tensor route
  (`cor-twist-exact-sequence-effective-divisor`,
  `lem-cartier-divisor-addition-tensor`,
  `lem-effective-cartier-divisor-exact-sequence`,
  `def-effective-cartier-divisor`) is not used and its dependencies were
  dropped: the local argument is complete. The iteration uses the third
  isomorphism theorem in an abelian category plus the long exact sequence.
- Ordering repair: level 10 → 6, since the only remaining unfinished suppliers
  are the flagged Cartier dictionary items named as code spans in [F2].
- Flagged suppliers (exact; decision stays `escalate`):
  `def-invertible-sheaf-of-cartier-divisor` (batch 5) and
  `thm-cartier-weil-divisors-curves-agree` (batch 6), consumed in [F2] and at
  steps 1.3, 2.1, 2.2, 2.3 (section and stalk descriptions of
  $\mathcal O_C(D),\mathcal O_C(D+p)\subseteq K_C$) and 3.2; the obligations
  are stated in [F2] and in the Statement.
- Statement note: the scaffold's third term $i_*(\mathcal O_C(D+p)|_p)$ is
  realised as the skyscraper $i_{p,*}\kappa(p)$ (the restriction of the line
  bundle to the point is a one-dimensional $\kappa(p)$-vector space).
- Pre-splice findings: the single `b-leaf` finding naming this item is
  resolved (no examples-page dependency remains); no `intra-order` finding
  names it.
- Checks: reflow + canonical renumbering at a fixpoint (15 steps); precheck
  PASS; strict proof-contract clean at 16/16; citation-fidelity
  `--fail-on-missing-quote` clean (270 citations, no widening candidates);
  boundary-audit clean; manifest deps synced (39 deps, level 6); `depcheck`
  reports no error naming this item.
- Open gap: the two flagged suppliers above; decision `escalate`.

### Checkpoint 17 — `lem-add-one-point-euler-characteristic` (level 6)

- Claim: for a smooth proper geometrically integral curve $C$, a divisor $D$
  and a closed point $p$ of residue degree $d=[\kappa(p):k]$,
  $\chi(C,\mathcal O_C(D+p))=\chi(C,\mathcal O_C(D))+d$, and more generally
  $\chi(C,\mathcal O_C(D+E))=\chi(C,\mathcal O_C(D))+\deg_k(E)$ for every
  effective $E\ge0$.
- Route: additivity of $\chi$ (`lem-euler-characteristic-additive-short-exact`)
  applied to the single-point sequence of checkpoint 16, with
  $\chi(i_{p,*}\kappa(p))=\dim_kH^0=d$ from the vanishing of its higher
  cohomology; the general effective case uses the iterated cokernel $Q_E$ and
  $\dim_kH^0(C,Q_E)=\deg_k(E)$ from checkpoint 16, with coherence of
  $\mathcal O_C(D),\mathcal O_C(D+E),Q_E$ from
  `lem-riemann-roch-space-finite-dimensional` and checkpoint 16.
- Flagged suppliers: inherited through checkpoint 16 (the Cartier dictionary
  items `def-invertible-sheaf-of-cartier-divisor`,
  `thm-cartier-weil-divisors-curves-agree`); named in the Statement as code
  spans, absent from frontmatter deps. Decision `escalate`.
- Checks: precheck PASS; canonical renumbering at a fixpoint (5 steps); strict
  proof-contract clean at 17/17; citation-fidelity `--fail-on-missing-quote`
  clean (no widening candidates after the fact text was aligned with the
  quoted "$E\ge0$"); boundary-audit clean (two `not_applicable` rows for the
  absent biconditional with item-specific reasons); manifest deps synced.
- Open gap: the inherited flagged suppliers; decision `escalate`.

### Checkpoint 18 — `lem-h1-stabilizes-downward-point-removal` (level 6)

- Claim: for a smooth proper geometrically integral curve $C$ over a field
  $k$, a divisor $D$ and a closed point $p$ of residue degree
  $d=[\kappa(p):k]$, the segment
  $0\to H^0(\mathcal O_C(D))\to H^0(\mathcal O_C(D+p))\to\kappa(p)\xrightarrow{\partial}H^1(\mathcal O_C(D))\to H^1(\mathcal O_C(D+p))\to0$
  is exact with $\partial$ the connecting map,
  $H^1(\mathcal O_C(D+p))\cong H^1(\mathcal O_C(D))/\operatorname{im}\partial$,
  so $h^1(D+p)\le h^1(D)$ with equality iff $\partial=0$, the drop being
  $\dim_k\operatorname{im}\partial\le d$; consequently $h^1$ is antitone in
  the divisor and $n\mapsto h^1(D_0+nA)$ stabilizes for $A\ge0$.
- Route: read the long exact sequence of checkpoint 16's single-point
  sequence, replace the skyscraper terms by $\kappa(p)$ and $0$ using the
  vanishing of higher cohomology of the skyscraper, then apply the first
  isomorphism theorem and the quotient-dimension formula; iterate one point
  at a time over the finite support of an effective divisor; a non-increasing
  sequence of nonnegative integers is eventually constant.
- Contract repair made during authoring: added
  `def-divisor-support-positive-negative-parts` to the frontmatter deps
  (cited in [F1]) and added the `F5 -> def-sheaf-cohomology-derived-global-sections`
  citation row.
- Flagged suppliers: inherited through checkpoints 16–17
  (`def-invertible-sheaf-of-cartier-divisor` and
  `thm-cartier-weil-divisors-curves-agree`); this item consumes
  `lem-add-one-point-exact-sequence-line-bundle`, which carries the flags.
  Decision `escalate`.
- Checks: precheck PASS; canonical renumbering at a fixpoint (5 steps);
  strict proof-contract clean at 18/18; citation-fidelity
  `--fail-on-missing-quote` clean (299 citations, no widening candidates);
  boundary-audit clean (144 rows, no contradicted/template); manifest deps
  synced (16 deps, level 6).
- Open gap: the inherited flagged suppliers; decision `escalate`.

### Checkpoint 19 — `thm-euler-characteristic-degree-shift-curve` (level 8; resumed dispatch)

- Claim: for a smooth proper geometrically integral curve $C$ over $k$ and
  every divisor $D$, $\chi(C,\mathcal O_C(D))-\chi(C,\mathcal O_C)=\deg_k(D)$,
  equivalently
  $h^0(D)-h^1(D)=\deg_k(D)+h^0(0)-h^1(0)$; no Serre duality.
- Route: read the telescoped degree shift off
  `lem-divisor-decomposition-positive-negative-points` (its part 3), convert
  both Euler characteristics to their $h^0-h^1$ forms by
  `lem-riemann-roch-space-finite-dimensional`, and prove the equivalence of
  the two displayed forms through the flagged identification
  $\mathcal O_C(0)\cong\mathcal O_C$.
- Flagged suppliers (exact; decision stays `escalate`):
  `def-invertible-sheaf-of-cartier-divisor` and
  `thm-line-bundle-rational-section-cartier-divisor` (batch 5, not authored)
  for the attachment of $\mathcal O_C(D)$ and $\mathcal O_C(0)\cong\mathcal O_C$,
  inherited through the decomposition lemma; consuming steps 1.1, 1.2, 3.1 and
  4.1. `thm-cartier-weil-divisors-curves-agree` (batch 6) exists on disk as a
  draft with its own flags.
- Checks: precheck PASS; canonical renumbering applied (1.1, 1.2, 2.1, 3.1,
  4.1); strict proof-contract clean at 20/20 (12 citations); citation-fidelity
  `--fail-on-missing-quote` clean; boundary-audit clean (no contradicted rows,
  no template reuse); manifest deps synced (10 deps, level 8).
- Contract repairs made to earlier entries while closing the strict gate:
  (i) `lem-divisor-decomposition-positive-negative-points` had a duplicate
  citation row `F1 -> def-divisor-support-positive-negative-parts`; the two
  quotes were merged into one row spanning both paragraphs.
  (ii) `lem-add-one-point-exact-sequence-line-bundle` cited a quote from
  `def-sheaf-total-quotient-rings` that no longer occurs in that item's
  Definition (the item is an untracked draft being rewritten by another
  worker); the quote was replaced by the current sentence stating the
  integral case, and the same reconciliation is flagged to the owner.
- Open gap: the two batch-5 suppliers above; decision `escalate`.
- Next action: `thm-riemann-roch-euler-characteristic-curve` (level 9).

### Checkpoint 20 — `thm-riemann-roch-euler-characteristic-curve` (level 9)

- Claim: $h^0(D)-h^1(D)=\chi(C,\mathcal O_C(D))=\deg_k(D)+1-g$ for every
  divisor $D$ on a smooth proper geometrically integral curve $C$ of genus
  $g=g(C)$; no Serre duality.
- Route: substitute $\chi(C,\mathcal O_C)=1-g$ from
  `def-genus-euler-characteristic-curve` into the degree shift
  `thm-euler-characteristic-degree-shift-curve`, and read both equalities.
- Flagged suppliers (exact; decision stays `escalate`): inherited from
  `thm-euler-characteristic-degree-shift-curve` — the batch-5 items
  `def-invertible-sheaf-of-cartier-divisor` and
  `thm-line-bundle-rational-section-cartier-divisor` for the attachment of
  $\mathcal O_C(D)$; consuming steps 1.1, 1.2 and 3.1.
- Checks: precheck PASS; renumbering fixpoint (1.1, 1.2, 2.1, 3.1); strict
  proof-contract clean at 21/21 (11 citations); citation-fidelity and
  boundary-audit clean; manifest deps synced (11 deps, level 9).
- Open gap: the inherited batch-5 suppliers; decision `escalate`.
- Next action: level 10 — `cor-riemann-inequality-divisor-sections` and
  `thm-riemann-roch-as-l-minus-index`.

### Checkpoint 21 — level 10: `cor-riemann-inequality-divisor-sections`, `thm-riemann-roch-as-l-minus-index`

- `cor-riemann-inequality-divisor-sections`: claim
  $l(D)=h^0(D)\ge\deg_k(D)+1-g$ for every divisor; route: rearrange the
  Riemann-Roch identity to $h^0(D)=\deg_k(D)+1-g+h^1(D)$ and use
  $h^1(D)\ge0$. Deps: `def-algebraic-curve-over-field`, `def-axiom-of-choice`,
  `def-dimension`, `def-divisor-smooth-proper-curve`,
  `def-genus-euler-characteristic-curve`, `def-index-speciality-divisor`,
  `def-little-l-divisor`, `thm-riemann-roch-euler-characteristic-curve`.
  Steps renumbered 1.1, 2.1, 3.1; precheck PASS; contract clean.
- `thm-riemann-roch-as-l-minus-index`: claim
  $l(D)-i(D)=h^0(D)-h^1(D)=\deg_k(D)+1-g$, $i(D)\ge0$, hence the Riemann
  inequality with equality iff $i(D)=0$, and the $D=0$ reading $1-g=0+1-g$
  with $i(0)=g$. The equality case is stated as $i(D)=0$; the term
  "nonspecial" is only a code-span pointer to the later
  `def-nonspecial-divisor` (which itself consumes this theorem), so no
  intra-order edge is introduced. Steps 1.1, 2.1, 3.1, 3.2, 4.1; precheck
  PASS; strict contract clean at 23/23; iff boundary rows checked both
  directions; manifest deps synced.
- Flagged suppliers (both items, decision `escalate`): inherited batch-5
  `def-invertible-sheaf-of-cartier-divisor` and
  `thm-line-bundle-rational-section-cartier-divisor` for $\mathcal O_C(D)$;
  consuming steps: corollary 1.1/2.1/3.1; theorem 1.1/2.1/3.1/3.2/4.1.
- Checks: precheck PASS for both; strict proof-contract clean at 23/23;
  citation-fidelity and boundary-audit clean; levels recomputed for all 44.
- Next action: level 11 — `cor-existence-rational-function-bounded-pole`,
  `def-nonspecial-divisor`, then B `ex-degree-zero-principal-divisor` and
  `ex-riemann-roch-projective-line-divisor`.

### Checkpoint 22 — `cor-existence-rational-function-bounded-pole` (level 11, first item)

- Claim: for a smooth proper geometrically integral curve $C$ over $k$ with
  genus $g$, a closed point $p$ of residue degree $d=[\kappa(p):k]\ge1$ and
  every integer $n\ge1$ with $nd+1-g\ge2$, the space $L(np)$ contains a
  nonconstant $f$; every such $f$ has all poles at $p$ of order at most $n$
  and at least one pole, so $(f)_\infty$ is a nonzero effective divisor
  supported at $p$. Closed points exist by
  [[lem-curve-closed-subsets-finite]] (chain dimension one gives two points).
- Route: [F1] closed points exist; [F4] Riemann inequality gives
  $l(np)\ge nd+1-g\ge2$; constants form a one-dimensional subspace [F5];
  [F6] yields $f\in L(np)\setminus k\cdot1$; membership reads off the pole
  bound, nonconstancy forces a pole, and [F5] excludes $f\in L(0)$.
- Steps: 1.1, 1.2, 2.1, 3.1, 4.1 (renumber fixpoint; precheck PASS).
- Flagged suppliers (decision stays `escalate`): inherited batch-5
  `def-invertible-sheaf-of-cartier-divisor` and
  `thm-line-bundle-rational-section-cartier-divisor` for the identification
  $L(D)=H^0(C,\mathcal O_C(D))$; consumed at steps 1.1, 2.1, 3.1 and 4.1 via
  the flagged dictionary fact [F7] (code-span pointer, no wikilink so no
  unresolved dependency edge). Also inherited through [F4] and [F5]: the
  same two batch-5 items plus `thm-principal-divisor-degree-zero-proper-curve`
  (batch 6, unauthored) via [[thm-h0-structure-sheaf-proper-curve]].
- Checks: precheck PASS; renumber fixpoint 1.1/1.2/2.1/3.1/4.1; strict
  proof-contract clean at 24/24 (13 citation rows); citation fidelity exit 0;
  boundary audit clean (no contradicted, no template); manifest deps synced
  (15 deps, level 11).
- Contract repair during this checkpoint: spec initially lost the backslash in
  `\operatorname` (end anchor), F5 rows missing use `4.1`, and the
  `degenerate` boundary evidence lacked a step reference; all three fixed in
  the spec and regenerated.
- Open gap: the batch-5 dictionary suppliers; decision `escalate`.
- Next action: level 11 — `def-nonspecial-divisor` (A), then B
  `ex-degree-zero-principal-divisor`, B `ex-riemann-roch-projective-line-divisor`.

### Checkpoint 23 — level 11: `def-nonspecial-divisor`, B `ex-degree-zero-principal-divisor`, B `ex-riemann-roch-projective-line-divisor`

- `def-nonspecial-divisor` (A, definition). Claim: $D$ is **nonspecial**
  when $i(D)=0$, **special** otherwise; by
  [[thm-riemann-roch-as-l-minus-index]] this is exactly the equality case
  $l(D)=\deg_k(D)+1-g$ of the Riemann inequality, speciality is a class
  property, and $0$ is nonspecial exactly when $g=0$. Deps: five authored
  items (the unauthored `def-linear-equivalence-cartier-divisors` is kept as a
  code-span flag, not a manifest dep). Definition kind, no proof steps;
  precheck reports it as a definition (no checkable step body); strict
  contract clean; boundary rows include the two `iff` readings of the
  statement. Flagged: batch-5 `def-linear-equivalence-cartier-divisors`,
  `def-invertible-sheaf-of-cartier-divisor`,
  `lem-cartier-divisor-sheaf-invertible`,
  `thm-line-bundle-rational-section-cartier-divisor`; decision `escalate`.
- B `ex-degree-zero-principal-divisor`. Claim: for distinct rational points
  $a\ne b$ of $\mathbb P^1_k$, $f=(t-a)/(t-b)$ has
  $\operatorname{div}(f)=[a]-[b]$, principal of degree zero;
  $\mathcal O(\operatorname{div}f)\cong\mathcal O$, so
  $l=1$, $i=0$, $\chi=1$ and Riemann-Roch reads $1-0=0+1-0$; and
  $\operatorname{div}(g)=Z(g)-d[\infty]$ of degree zero for monic $g$ of
  degree $d$. Steps 1.1, 2.1, 2.2, 3.1, 3.2, 4.1, 5.1, 6.1; precheck PASS;
  strict contract clean (16 citation rows, 15 facts); citation fidelity and
  boundary audit clean.
  - **Scaffold repair (confirmed defect).** The scaffold's alternative clause
    "$L(\operatorname{div}f)$ consists of the scalar multiples of $f$ because
    $\operatorname{div}(g)+\operatorname{div}(f)\ge0$ forces $g/f$ to have
    no poles" is false: the condition forces $\operatorname{div}(gf)\ge0$,
    so $L(\operatorname{div}f)=k\cdot(1/f)$ and $f\notin L(\operatorname{div}f)$
    since $2[a]-2[b]$ is not effective. The item carries the corrected
    spanning function and records the repair.
  - **b-leaf repair.** Pre-splice finding: the item depended on the
    examples-page item `ex-cohomology-o-d-projective-line-all-d`. Removed; the
    $h^0(\mathcal O)=1$ and $h^1(\mathcal O)=0$ values now come from the
    published A-page corollaries [[cor-h0-projective-space-o-d-homogeneous-polynomials]]
    and [[cor-top-cohomology-projective-space-o-d]].
  - Flagged suppliers (decision `escalate`): batch-5
    `def-invertible-sheaf-of-cartier-divisor`,
    `thm-line-bundle-rational-section-cartier-divisor`,
    `lem-cartier-divisor-addition-tensor`,
    `thm-cartier-divisors-mod-principal-to-picard`,
    `def-principal-weil-divisor-and-class-group`, and batch-6
    `thm-cartier-weil-divisors-curves-agree` and
    `thm-principal-divisor-degree-zero-proper-curve` (the last is promised by
    the statement; the degree computation is direct and does not use it),
    consumed at steps 1.3, 2.2, 3.1, 4.1, 5.1.
- B `ex-riemann-roch-projective-line-divisor`. Claim: for $D=d[\infty]$ on
  $\mathbb P^1_k$, $l(D)=\max(d+1,0)$, $i(D)=\max(-d-1,0)$, so
  $l-i=d+1=\deg_k(D)+1-g$ for every integer $d$; the divisors of degree
  $\ge-1$ are exactly the nonspecial ones; $|D|\ne\varnothing$ iff $d\ge0$.
  Steps 1.1, 2.1, 3.1, 3.2, 4.1; precheck PASS; strict contract clean
  (13 citation rows, 10 facts); citation fidelity and boundary audit clean.
  - **b-leaf repair.** Same replacement of
    `ex-cohomology-o-d-projective-line-all-d` by the two published A-page
    corollaries; the negative-degree clause was restated as $l(D)=0$,
    $i(D)=-d-1$, so the displayed identity is true at every $d$.
  - Flagged suppliers (decision `escalate`): the same batch-5 dictionary plus
    batch-6 `def-complete-linear-system`; consumed at steps 1.1 and 4.1.
- Checks: precheck PASS for both B items and the definition registered;
  strict proof-contract clean at 27/27; citation-fidelity exit 0; boundary
  audit clean; manifest deps synced for all three; levels recomputed for all
  44.
- Next action: level 12 — `cor-degree-zero-line-bundle-section-trivial`,
  `cor-negative-degree-no-sections-rr`,
  `cor-smooth-proper-curve-finite-map-projective-line`, B
  `cex-riemann-inequality-not-equality-special-divisor`.

### Checkpoint 24 — level 12: `cor-degree-zero-line-bundle-section-trivial`, `cor-negative-degree-no-sections-rr`, `cor-smooth-proper-curve-finite-map-projective-line`, B `cex-riemann-inequality-not-equality-special-divisor`

- A `cor-degree-zero-line-bundle-section-trivial`: for a degree-zero
  $\mathcal O_C(D)$ with nontrivial class, $l(D)=1$ and $i(D)=0$, so
  $\chi=1$; supplier swap: the scaffold's `lem-degree-zero-effective-divisor-empty`
  is replaced by the authored `lem-degree-effective-divisor-nonnegative`.
  Steps renumbered 1.1, 2.1, 3.1, 4.1; precheck PASS; contract clean.
- A `cor-negative-degree-no-sections-rr`: for $\deg_k(D)<0$ one has
  $L(D)=0$, $l(D)=0$, and Riemann-Roch reads $i(D)=g-1-\deg_k(D)$; steps
  1.1, 2.1, 3.1, 4.1; precheck PASS; contract clean.
- A `cor-smooth-proper-curve-finite-map-projective-line`: every smooth proper
  geometrically integral curve admits a finite $k$-morphism to $\mathbb P^1_k$
  with pole divisor of degree $[k(C):k(f)]$; the missing `## Proof` heading
  was added; steps 1.1, 2.1, 3.1, 3.2, 4.1; precheck PASS; contract clean.
- B `cex-riemann-inequality-not-equality-special-divisor`. Claim: for a smooth
  proper geometrically integral curve of genus $g\ge1$ the zero divisor has
  $l(0)=1$ and $i(0)=g\ge1$, so the Riemann inequality at $D=0$ is strict with
  excess exactly $i(0)=g$; in general $l(D)=\deg_k(D)+1-g+i(D)$, so the
  inequality is strict by exactly $i(D)$ for every special divisor and is an
  equality exactly for the nonspecial ones. Route: definitions of $l$, $i$,
  genus plus the authored Riemann-Roch identity, then the plane-quartic
  realization. Steps 1.1, 2.1, 2.2, 3.1, 4.1; precheck PASS; strict contract
  clean at 31/31 (11 citation rows, 6 facts, 8 boundary rows); manifest deps
  synced; level 12.
  - **Scaffold defect found and repaired (integrality gap).** The scaffold's
    step read "by [F5] there is a smooth plane quartic $X=V_+(F)$ ... so $X$
    is a smooth proper geometrically integral curve of genus $g=3$". The
    cited published item
    [[cor-smooth-projective-complete-intersections-general]] supplies a
    nonempty Zariski-open set of members that are nonempty, smooth over $k$
    and of pure dimension one — and it explicitly claims *no* irreducibility
    or connectedness — while
    [[thm-plane-curve-arithmetic-genus]] applies only to an integral curve of
    dimension one. The passage "smooth quartic of pure dimension one
    $\Rightarrow$ integral curve" is therefore not proved by the cited items.
    The statement and step 3.1 were rewritten to assert only the conditional
    reading ("an integral smooth plane quartic has genus $3$"), and the gap is
    now recorded in the item as an open obligation with its exact suppliers,
    `ex-plane-quartic-genus-three-smooth` (batch 6 examples page of this run)
    and `cor-genus-degree-smooth-plane-curve` (batch 8 of this run), both
    provisional drafts; the first is an examples-page item and so cannot even
    be consumed as a leaf. The consuming step is 3.1 and the general
    positive-genus statement of steps 1.1, 2.1, 2.2 does not depend on it.
  - Flagged suppliers (decision `escalate`): the two items above for the
    plane-quartic instance (consuming step 3.1), plus the inherited batch-5
    `def-invertible-sheaf-of-cartier-divisor` and
    `thm-line-bundle-rational-section-cartier-divisor` through
    [[thm-riemann-roch-as-l-minus-index]] and
    [[thm-h0-structure-sheaf-proper-curve]] (steps 1.1, 2.1, 2.2, 4.1), and
    batch-6 `thm-plane-curve-arithmetic-genus` (draft of this run, itself
    flagged).
  - Checks: precheck PASS; strict proof-contract clean at 31/31; citation
    fidelity to be re-run at handoff; boundary rows include both iff readings,
    the empty-support reading $\deg_k(0)=0$, and the $g=1$ endpoint.
- Next action: level 13 — `cor-dimension-complete-linear-system`,
  `thm-genus-zero-point-implies-projective-line`,
  `thm-h1-line-bundle-vanishes-sufficiently-high-degree`; then B
  `cex-negative-degree-rr-right-side-negative` (b-leaf repair: replace
  `ex-cohomology-o-d-projective-line-all-d` and the same-page example
  `ex-riemann-roch-projective-line-divisor` by published A-page suppliers).

### Checkpoint 25 — `thm-h1-line-bundle-vanishes-sufficiently-high-degree` (level 13, third item)

- **Item.** `thm-h1-line-bundle-vanishes-sufficiently-high-degree` (A page),
  step **3b dispatch level 13**; item file written and checkpointed. Claim:
  for $k$ a field, $C$ smooth proper geometrically integral over $k$, a finite
  $k$-morphism $\varphi:C\to\mathbb P^1_k$, an effective divisor $A$ with
  $\mathcal O_C(A)\cong\varphi^*\mathcal O(1)$ and any divisor $D_0$, there is
  $n_0$ with $H^1(C,\mathcal O_C(D_0+nA+E))=0$ for all $n\ge n_0$ and all
  effective $E$, equivalently $h^1(D)=0$ for all $D\ge D_0+n_0A$; no Serre
  duality or $2g-2$ threshold is used, and AC is inherited from the
  ample-powers and Serre-vanishing suppliers only.
  Conventions: ampleness in the absolute sense of [[def-ample-invertible-sheaf]];
  projectivity in the finite-dimensional H-projective convention of
  [[def-projective-morphism-pre-proj]]; $h^1$ as in [[def-little-l-divisor]].
- **Route (authored).** Step 1.1: $\mathcal O(1)$ is ample on $\mathbb P^1_k$
  (identity closed immersion over an affine base + [[lem-very-ample-implies-ample]]),
  so $L=\mathcal O_C(A)\cong\varphi^*\mathcal O(1)$ is ample by
  [[lem-ample-pullback-finite-morphism]]. Step 2.1: [[thm-ample-powers-very-ample-proper-base]]
  makes a power $L^{\otimes d}$ ($d\ge1$) closed H-very ample over
  $\operatorname{Spec}k$, hence $C$ projective over the Noetherian ring $k$.
  Step 3.1: [[thm-serre-vanishing]] applied to $\mathcal O_C(D_0)$ and the ample
  $L^{\otimes d}$ gives $m_0$ with $H^1(C,\mathcal O_C(D_0)\otimes L^{\otimes dm})=0$
  for $m\ge m_0$. Step 4.1 (flagged): the divisor–tensor dictionary
  $\mathcal O_C(D_0)\otimes L^{\otimes dm}\cong\mathcal O_C(D_0+dmA)$
  supplied by `lem-cartier-divisor-addition-tensor`,
  `thm-line-bundle-rational-section-cartier-divisor`,
  `def-invertible-sheaf-of-cartier-divisor` (batch 5, not on disk) converts this
  to $H^1(C,\mathcal O_C(D_0+dmA))=0$. Step 5.1: spread to all $n\ge n_0:=dm_0$
  and effective $E$ by writing $n=dm_0+r$ and using monotonicity of $h^1$
  ([[lem-h1-stabilizes-downward-point-removal]]). Step 6.1: both directions of
  the "equivalently" clause. Step 7.1: summary and AC accounting.
- **Source locators read.** `cor-smooth-proper-curve-finite-map-projective-line`
  Statement (finite morphism and $\mathcal O_C(A)\cong\varphi^*\mathcal O(1)$
  clause); `def-very-ample-invertible-sheaf-relative` Definition ("Definition."
  block and $n=0$); `lem-very-ample-implies-ample` Statement (affine-base
  absolute ampleness); `lem-ample-pullback-finite-morphism` Statement;
  `thm-ample-powers-very-ample-proper-base` Statement ($d_0\ge1$, closed
  H-very ample); `thm-serre-vanishing` Statement (single $m_0$ for all $q>0$);
  `lem-h1-stabilizes-downward-point-removal` Statement items 1–3 (antitone
  $h^1(D+E)\le h^1(D)$); `def-little-l-divisor` Definition ($h^i(D)$);
  `def-axiom-of-choice` Definition; plus the supporting definitions
  `def-proper-morphism`, `def-locally-finite-type-and-finite-type-morphism`,
  `def-locally-noetherian-and-noetherian-scheme`, `def-projective-morphism-pre-proj`,
  `def-coherent-module-scheme`, `def-sheaf-cohomology-derived-global-sections`,
  `lem-field-is-noetherian`, `thm-noetherian-ring-has-noetherian-spectrum`,
  `def-invertible-sheaf`, `def-ample-invertible-sheaf`, `def-finite-morphism-schemes`.
- **Dependencies (frontmatter, 23).** The 21 sources above plus
  `def-algebraic-curve-over-field` and `def-divisor-smooth-proper-curve`;
  manifest deps/level re-synced (computed level **13**).
- **Decision / flags (escalate).** Step 4.1 consumes the batch-5 dictionary
  suppliers `lem-cartier-divisor-addition-tensor`,
  `thm-line-bundle-rational-section-cartier-divisor`,
  `def-invertible-sheaf-of-cartier-divisor` — none authored on disk; the
  divisor-sum identity $D_0+dmA$ and tensor/dictionary compatibility are the
  exact proof obligation, flagged in the item's Statement and [F6]. Step 1.1
  consumes [[cor-smooth-proper-curve-finite-map-projective-line]], itself a
  draft escalated on batch-5 pullback suppliers and the batch-6
  `lem-finite-flat-curve-fibre-degree`; the finite-morphism and twist clauses
  used here are the ones it states. Decision `escalate` on both counts; no
  owner-held escalation overridden.
- **Repair note.** Precheck REPAIR (step renumbering: the dictionary step moved
  from 3.2 to 4.1, stated form 4.1→5.1, equivalence 4.2→6.1, conclusion
  5.1→7.1) adopted mechanically into the canonical stratified numbering,
  including the stale "step 3.2" prose references; precheck now PASS.
- **Checks.** `precheck` PASS (direct); strict proof contract clean at 34/34
  (22 citation rows covering every fact→source link, 7 derivations, 8 item-specific
  boundary rows, 0 warnings); manifest deps and levels synced (level 13);
  item file present with the two escalations recorded.
- **Open gaps.** Batch-5 dictionary suppliers (consuming step 4.1); batch-5/6
  suppliers of `cor-smooth-proper-curve-finite-map-projective-line` (consuming
  step 1.1). Both are recorded for reconciliation; nothing in the item is
  marked complete.
- **Next action.** Level 13 B item `cex-negative-degree-rr-right-side-negative`
  (b-leaf repair: replace the citations of `ex-cohomology-o-d-projective-line-all-d`
  and the same-page `ex-riemann-roch-projective-line-divisor` with published
  A-page suppliers or a complete local argument), then level 14.

### Checkpoint 26 — B `cex-negative-degree-rr-right-side-negative` (level 13/14, b-leaf repair)

- **Item.** `cex-negative-degree-rr-right-side-negative` (B page, examples),
  dispatch position 13, computed manifest level 14; file written and
  checkpointed. Claim (preserved): for $k$ a field, $m\ge1$ and
  $D=-m[\infty]$ on $\mathbb P^1_k$, one has $\deg_k(D)=-m<0$, $l(D)=0$,
  $i(D)=m-1$, and Riemann-Roch reads $0-(m-1)=1-m=\deg_k(D)+1-g$; the
  readings "$l(D)=\deg_k(D)+1-g$" and "there exist $\deg_k(D)+1-g$ sections"
  fail for every $m\ge2$ (first at $D=-2[\infty]$: $0-1=-1=-2+1$), the
  Riemann inequality is vacuous rather than false, and the negative-degree
  vanishing stays consistent because $H^1$ compensates. Boundary $m=1$ is the
  consistent endpoint with $l=i=0$ and right-hand side $0$.
- **Route (authored).** Step 1.1: $[\kappa(\infty):k]=1$ gives
  $\deg_k(-m[\infty])=-m$; $\mathcal O(1)\cong\mathcal O(\infty)$ plus the
  dictionary gives $\mathcal O(D)\cong\mathcal O(-m)$. Step 2.1:
  $h^0(\mathcal O(-m))=0$ and $h^1(\mathcal O(-m))=0$ for $m=1$, $=m-1$ for
  $m\ge2$; hence $l(D)=0$ and $i(D)=m-1$, cross-checked against
  [[cor-negative-degree-no-sections-rr]]. Step 3.1: Riemann-Roch identity at
  $D$. Step 3.2: the refuted readings, vacuity of the Riemann inequality, and
  the exact $i(D)$ excess. Step 4.1: summary and AC accounting.
- **Source locators read.** `lem-projective-line-divisors-classified-by-degree`
  Statement (clause 1 genus $0$; clause 3 $\operatorname{div}(x_0)=[\infty]$,
  $\mathcal O(1)\cong\mathcal O(\infty)$; clause 4
  $D'\sim\deg_k(D')[\infty]$ and degree isomorphism on classes);
  `cor-picard-projective-line-integers` Statement; `cor-h0-projective-space-o-d-homogeneous-polynomials`
  Statement ($H^0=0$ for $d<0$; $k[x_0,x_1]_d$ basis of size $d+1$);
  `cor-top-cohomology-projective-space-o-d` Statement ($H^1=0$ for $d>-2$;
  rank $\binom{-d-1}{1}$ for $d\le-2$); `thm-riemann-roch-as-l-minus-index`
  Statement; `cor-negative-degree-no-sections-rr` Statement;
  `cor-riemann-inequality-divisor-sections` Statement;
  `def-index-speciality-divisor`, `def-little-l-divisor`, `def-dimension`,
  `def-degree-divisor-proper-curve`, `def-divisor-smooth-proper-curve`,
  `def-algebraic-curve-over-field`, `def-axiom-of-choice` definitions.
- **B-leaf repair (recorded in the item as a scaffold-repair note).** The
  frozen scaffold depended on `ex-cohomology-o-d-projective-line-all-d`
  (examples page
  `cohomology-of-quasi-coherent-sheaves-on-affine-and-projective-schemes-examples`)
  and on the same-page example `ex-riemann-roch-projective-line-divisor`; both
  examples-page items are leaves and cannot carry a load. They are replaced by
  the published A-page corollaries
  [[cor-h0-projective-space-o-d-homogeneous-polynomials]] and
  [[cor-top-cohomology-projective-space-o-d]] plus the A-page
  [[lem-projective-line-divisors-classified-by-degree]] and
  [[cor-picard-projective-line-integers]]; every promised claim is preserved.
- **Dependencies (frontmatter, 14).** The authored A-page suppliers above plus
  `cor-negative-degree-no-sections-rr`, `cor-riemann-inequality-divisor-sections`,
  `thm-riemann-roch-as-l-minus-index`, `def-algebraic-curve-over-field`,
  `def-axiom-of-choice`, `def-degree-divisor-proper-curve`, `def-dimension`,
  `def-divisor-smooth-proper-curve`, `def-index-speciality-divisor`,
  `def-little-l-divisor`; synced (level 14). No examples-page dependency
  remains.
- **Decision / flags (escalate).** Steps 1.1 and 2.1 consume the batch-5
  dictionary `def-invertible-sheaf-of-cartier-divisor`,
  `thm-line-bundle-rational-section-cartier-divisor`,
  `lem-cartier-divisor-addition-tensor` and the batch-6
  `thm-cartier-weil-divisors-curves-agree`, none authored on disk; the
  identification $\mathcal O(-m[\infty])\cong\mathcal O(-m)$ and
  $l(D)=h^0(\mathcal O(D))$, $i(D)=h^1(\mathcal O(D))$ are the exact
  obligations, flagged in the item. The supplier
  [[cor-negative-degree-no-sections-rr]] is itself escalated on the missing
  batch-6 `thm-principal-divisor-degree-zero-proper-curve` (consumed at its
  step 2.1); this item's use of that corollary is at step 2.1 as the vanishing
  cross-check. Decision `escalate`.
- **Checks.** `precheck` PASS after adopting the canonical stratification
  (1.1, 2.1, 3.1, 3.2, 4.1); strict proof contract clean at 35/35
  (15 citation rows, 11 facts, 8 item-specific boundary rows, 0 warnings);
  manifest deps/level synced (level 14).
- **Open gaps.** Batch-5 dictionary (steps 1.1, 2.1); batch-6
  `thm-cartier-weil-divisors-curves-agree` (steps 1.1, 2.1); inherited
  escalation of `cor-negative-degree-no-sections-rr` (step 2.1).
- **Next action.** Level 14 A items `cor-nontrivial-degree-zero-line-bundle-no-sections`,
  `cor-riemann-theorem-large-degree`, `lem-large-positive-divisors-nonspecial`;
  then B `cex-genus-zero-without-rational-point-not-p1`,
  `ex-empty-divisor-euler-characteristic`, `ex-genus-zero-conic-with-rational-point`.

### Checkpoint 27 — `cor-nontrivial-degree-zero-line-bundle-no-sections` (level 14 → 11)

- **Item.** `cor-nontrivial-degree-zero-line-bundle-no-sections` (A page);
  authored. Claim (preserved): for $\mathcal L$ invertible of degree $0$ on a
  smooth proper geometrically integral curve $C$ with
  $\mathcal L\not\cong\mathcal O_C$, $H^0(C,\mathcal L)=0$; and for a smooth
  plane cubic **curve** $E$ and distinct $k$-rational points $P\ne Q$, the
  sheaf $\mathcal O_E(P-Q)$ has degree zero, is nontrivial, and
  $H^0(E,\mathcal O_E(P-Q))=0$, discharging the promise recorded by the
  batch-6 counterexample `cex-degree-zero-line-bundle-no-section`.
- **Route.** Step 1.1: contrapositive of
  [[cor-degree-zero-line-bundle-section-trivial]]. Step 1.2:
  $\deg_k(P-Q)=1-1=0$. Step 1.3: if $\mathcal O_E(P-Q)\cong\mathcal O_E$,
  the kernel-$\operatorname{Prin}$ statement gives $f$ with
  $\operatorname{div}(f)=P-Q$; then $(f)_\infty=[Q]$ has degree $1$, so
  [[lem-function-with-poles-defines-map-p1]] gives a degree-one morphism
  $E\to\mathbb P^1_k$, [[cor-birational-smooth-proper-curves-isomorphic]]
  makes it an isomorphism, and $g(E)=1\ne0=g(\mathbb P^1_k)$ is the
  contradiction. Step 2.1 applies step 1.1; step 3.1 summarizes.
- **Scaffold defect repaired (integrality, same class as the quartic fix).**
  [[thm-plane-curve-arithmetic-genus]] applies only to a subscheme that is a
  curve, i.e. integral of dimension one; the conditional reading "an integral
  smooth plane cubic has genus $1$" is asserted, the exact open obligation is
  recorded in the item with supplier `cor-genus-degree-smooth-plane-curve`
  (batch 8 of this run, provisional draft), consuming step 1.3, and the
  decision stays escalated. (The unconditional statement for all smooth plane
  cubics of pure dimension one is not claimed.)
- **Dependencies (frontmatter, 13, sorted).** Brought to on-disk-only items:
  `cor-birational-smooth-proper-curves-isomorphic`,
  `cor-degree-zero-line-bundle-section-trivial`, `def-algebraic-curve-over-field`,
  `def-axiom-of-choice`, `def-degree-divisor-proper-curve`,
  `def-divisor-smooth-proper-curve`, `def-genus-euler-characteristic-curve`,
  `def-invertible-sheaf`, `def-sheaf-cohomology-derived-global-sections`,
  `lem-function-with-poles-defines-map-p1`,
  `lem-projective-line-divisors-classified-by-degree`,
  `thm-cartier-weil-divisors-curves-agree`,
  `thm-plane-curve-arithmetic-genus`. The missing batch-5 suppliers
  (`cor-degree-descends-picard-curve`,
  `def-invertible-sheaf-of-cartier-divisor`,
  `thm-cartier-divisors-mod-principal-to-picard`,
  `def-principal-weil-divisor-and-class-group`,
  `thm-line-bundle-rational-section-cartier-divisor`) are named as code spans
  and flagged, never wikilinked; synced (level 11).
- **Decision / flags (escalate).** Batch-5 degree descent and Cartier-to-Picard
  dictionary (steps 1.2, 1.3); batch-6 drafts
  [[lem-function-with-poles-defines-map-p1]] (escalated on
  `lem-finite-flat-curve-fibre-degree`) and
  [[cor-birational-smooth-proper-curves-isomorphic]] (step 1.3); batch-8
  `cor-genus-degree-smooth-plane-curve` for the integrality obligation
  (step 1.3). No owner-held escalation overridden.
- **Checks.** `precheck` PASS after adopting canonical stratification
  (1.1, 1.2, 1.3, 2.1, 3.1); strict proof contract clean at 36/36
  (12 citation rows, 7 facts, 8 item-specific boundary rows, 0 warnings);
  manifest deps/level synced.
- **Open gaps.** Batch-5 (steps 1.2, 1.3); batch-6 fibre-degree supplier
  through [[lem-function-with-poles-defines-map-p1]] (step 1.3); batch-8
  integrality supplier (step 1.3).
- **Next action.** `cor-riemann-theorem-large-degree` (level 14), then
  `lem-large-positive-divisors-nonspecial`, then the three B items of level 14.

### Checkpoint 28 — `cor-riemann-theorem-large-degree` (level 14 → 13)

- **Item.** `cor-riemann-theorem-large-degree` (A page); authored; precheck
  PASS first try (steps 1.1, 2.1, 3.1). Claim (preserved): with $C$, finite
  $\varphi:C\to\mathbb P^1_k$, effective $A$ with
  $\mathcal O_C(A)\cong\varphi^*\mathcal O(1)$ and the integer $n_0$
  supplied for $D_0$ by the vanishing theorem, every $D\ge D_0+n_0A$ has
  $h^1(D)=0$ and $l(D)=\deg_k(D)+1-g$; in particular every
  $D_0+nA+E$ with $n\ge n_0$, $E$ effective.
- **Route.** Step 1.1 unwraps the vanishing theorem (write
  $E:=D-(D_0+n_0A)$); step 2.1 substitutes $h^1=0$ into the
  Euler-characteristic Riemann-Roch identity
  [[thm-riemann-roch-euler-characteristic-curve]]; step 3.1 records the
  explicit form and AC accounting. Scaffold dep
  `lem-add-one-point-exact-sequence-line-bundle` was unused and dropped;
  no dependency was invented.
- **Dependencies (frontmatter, 6).** `def-axiom-of-choice`,
  `def-divisor-smooth-proper-curve`, `def-genus-euler-characteristic-curve`,
  `def-little-l-divisor`, `thm-h1-line-bundle-vanishes-sufficiently-high-degree`,
  `thm-riemann-roch-euler-characteristic-curve`; synced.
- **Decision / flags (escalate).** Both suppliers are in-run drafts with their
  own flags: the vanishing theorem on the batch-5 divisor–tensor dictionary
  (its step 4.1) and the Riemann-Roch identity on the batch-5 Cartier
  dictionary; the consumer is escalated until those are reconciled. No
  examples-page dependency.
- **Checks.** `precheck` PASS; strict contract clean at 37/37 at the time of
  writing (6 citation rows, 4 facts, 8 boundary rows, 0 warnings); manifest
  synced.
- **Open gaps.** Batch-5 dictionary through both suppliers.
- **Next action.** `lem-large-positive-divisors-nonspecial`.

### Checkpoint 29 — `lem-large-positive-divisors-nonspecial` (level 14 → 13)

- **Item.** `lem-large-positive-divisors-nonspecial` (A page); authored;
  precheck PASS first try (steps 1.1, 2.1, 3.1). Claim (preserved): for
  $C$, finite $\varphi:C\to\mathbb P^1_k$, effective $A$ with
  $\mathcal O_C(A)\cong\varphi^*\mathcal O(1)$ and any $D_0$, there is
  $n_0$ depending on $D_0$ and $\varphi$ such that every
  $D\ge D_0+n_0A$ — explicitly every $D_0+nA+E$ with $n\ge n_0$, $E$
  effective — is nonspecial, $H^1(C,\mathcal O_C(D))=0$; the fixed-direction
  restriction (no universal $\deg>2g-2$ threshold, no Serre duality) is kept
  in the statement.
- **Route.** Step 1.1 applies the vanishing theorem; step 2.1 translates
  $h^1(D)=0$ into nonspeciality via [[def-nonspecial-divisor]] and
  [[def-index-speciality-divisor]]; step 3.1 records the fixed-direction
  restriction and AC accounting. The scaffold's `def-effective-cartier-divisor`
  (missing on disk) was replaced by [[def-divisor-smooth-proper-curve]] for
  effectivity, with no change of claim.
- **Dependencies (frontmatter, 8).** `cor-smooth-proper-curve-finite-map-projective-line`
  (flagged draft, parenthetical existence clause), `def-axiom-of-choice`,
  `def-divisor-smooth-proper-curve`, `def-genus-euler-characteristic-curve`,
  `def-index-speciality-divisor`, `def-little-l-divisor`,
  `def-nonspecial-divisor`, `thm-h1-line-bundle-vanishes-sufficiently-high-degree`;
  synced.
- **Decision / flags (escalate).** Vanishing theorem (batch-5 dictionary at
  its step 4.1) and the parenthetical corollary (batch-5 pullback dictionary
  and batch-6 `lem-finite-flat-curve-fibre-degree`); both consumed at step
  1.1 (the corollary only as the stated example). No examples-page
  dependency.
- **Checks.** `precheck` PASS; strict contract clean at 38/38 (7 citation
  rows, 5 facts, 8 boundary rows, 0 warnings; a first-pass contract gap —
  step 2.1 also cites [F1] — was corrected); manifest synced.
- **Open gaps.** Batch-5 dictionary; batch-6 fibre-degree supplier.
- **Next action.** Level-14 B items in dispatch order:
  `cex-genus-zero-without-rational-point-not-p1` (b-leaf: replace
  `ex-base-change-real-conic-to-complex`, `ex-projective-conic-standard-charts`
  by A-page suppliers or a local argument), then
  `ex-empty-divisor-euler-characteristic`, then
  `ex-genus-zero-conic-with-rational-point`.

### Checkpoint 30 — B `cex-genus-zero-without-rational-point-not-p1` (level 14 → 13)

- **Item.** `cex-genus-zero-without-rational-point-not-p1` (B page); authored;
  precheck PASS; steps 1.1, 1.2, 2.1, 3.1, 4.1. Witness preserved: over
  $k=\mathbb R$ the conic $C=V_+(x^2+y^2+z^2)\subseteq\mathbb P^2_{\mathbb R}$
  has $C(\mathbb R)=\varnothing$, has arithmetic genus $0$, and is not
  isomorphic to $\mathbb P^1_{\mathbb R}$, while $C_{\mathbb C}\cong
  \mathbb P^1_{\mathbb C}$ after the base change (the point $[i:0:1]$).
- **Route.** b-leaf repair: the frozen scaffold cited the examples-page items
  `ex-base-change-real-conic-to-complex` and `ex-projective-conic-standard-charts`.
  Both are leaves; the citations were replaced by A-page and library
  suppliers — [[thm-jacobian-criterion-affine-variety]],
  [[thm-ag-perfect-field-jacobian-regularity]],
  [[thm-regular-equals-smooth-over-perfect-field]],
  [[thm-projective-space-proper-over-base]],
  [[thm-polynomial-ring-over-a-field-is-a-ufd]],
  [[lem-projective-hypersurface-dimension-drop]],
  [[thm-plane-curve-arithmetic-genus]] — together with local computations
  (partials $2x,2y,2z$; no linear factor of $x^2+y^2+z^2$ over $\mathbb C$;
  $[i:0:1]$ and $\varnothing=C(\mathbb R)$ vs $\{[1:0]\}=\mathbb P^1_{\mathbb R}(\mathbb R)$).
  Every promised claim kept; the local argument of $C_{\mathbb C}\cong\mathbb P^1_{\mathbb C}$
  is the rational-point theorem applied over $\mathbb C$.
- **Dependencies (frontmatter, 16).** `cor-fields-of-characteristic-zero-and-finite-fields-are-perfect`,
  `def-algebraic-curve-over-field`, `def-axiom-of-choice`,
  `def-degree-divisor-proper-curve`, `def-genus-euler-characteristic-curve`,
  `def-geometric-fibre`, `def-proper-morphism`, `def-residue-field-scheme-point`,
  `lem-projective-hypersurface-dimension-drop`,
  `thm-ag-perfect-field-jacobian-regularity`,
  `thm-genus-zero-point-implies-projective-line`,
  `thm-jacobian-criterion-affine-variety`, `thm-plane-curve-arithmetic-genus`,
  `thm-polynomial-ring-over-a-field-is-a-ufd`,
  `thm-projective-space-proper-over-base`,
  `thm-regular-equals-smooth-over-perfect-field`; synced.
- **Decision / flags (escalate).** The passages to "curve" and to genus zero
  use the flagged batch-6 [[thm-plane-curve-arithmetic-genus]] and the
  rational-point comparison uses [[thm-genus-zero-point-implies-projective-line]]
  (batch-5/6 flags, escalated); consumed at steps 1.1, 2.1 and 3.1. No
  examples-page dependency remains.
- **Checks.** `precheck` PASS; strict contract clean at 39/39 at the time of
  writing (8 facts, 0 warnings); manifest synced.
- **Open gaps.** Batch-6 plane-curve genus (its own integrality hypotheses),
  batch-5/6 divisor dictionary through the rational-point theorem.
- **Next action.** B `ex-empty-divisor-euler-characteristic`.

### Checkpoint 31 — B `ex-empty-divisor-euler-characteristic` (level 14)

- **Item.** `ex-empty-divisor-euler-characteristic` (B page); authored;
  precheck PASS; steps 1.1, 2.1, 2.2, 3.1, 4.1. Claim (preserved):
  $L(0)=\langle1\rangle$, $l(0)=h^0(\mathcal O_C)=1$, $i(0)=h^1(\mathcal O_C)=g$,
  $\chi(C,\mathcal O_C)=1-g$, Riemann-Roch at the empty divisor reads
  $1-g=0+1-g$, $|0|=\{0\}$ with $\dim_k|0|=0=l(0)-1$, and the genus
  boundary: $g=0$ gives nonspeciality and equality, $g=1$ gives the first
  strict case $1\ge0$ with gap $i(0)=1$.
- **Route.** b-leaf repair: the frozen scaffold cited the examples-page item
  `ex-cohomology-o-d-projective-line-all-d`; replaced by the A-page
  [[cor-h0-projective-space-o-d-homogeneous-polynomials]],
  [[cor-top-cohomology-projective-space-o-d]] and
  [[lem-projective-line-divisors-classified-by-degree]] at $d=0$/$g=0$. The
  genus-one boundary uses only the stated identity $i(0)=g$ of
  [[def-index-speciality-divisor]]; no projective-line assertion is made in
  genus one.
- **Dependencies (frontmatter, 14).** `cor-dimension-complete-linear-system`,
  `cor-h0-projective-space-o-d-homogeneous-polynomials`,
  `cor-top-cohomology-projective-space-o-d`, `def-axiom-of-choice`,
  `def-complete-linear-system`, `def-divisor-smooth-proper-curve`,
  `def-euler-characteristic-coherent-sheaf`, `def-genus-euler-characteristic-curve`,
  `def-index-speciality-divisor`, `def-little-l-divisor`, `def-nonspecial-divisor`,
  `lem-projective-line-divisors-classified-by-degree`,
  `thm-h0-structure-sheaf-proper-curve`, `thm-riemann-roch-as-l-minus-index`; synced.
- **Decision / flags (escalate).** [[thm-riemann-roch-as-l-minus-index]]
  (batch-5 Cartier dictionary in its statement; steps 1.2 and the genus-one
  boundary of step 2.1), [[cor-dimension-complete-linear-system]] with
  [[def-complete-linear-system]] (batch-5/6 linear-equivalence dictionary;
  step 1.3).
- **Checks.** `precheck` PASS; strict contract clean at 40/40 at the time of
  writing; manifest synced.
- **Open gaps.** Batch-5 Cartier dictionary; batch-5/6 complete-linear-system
  dictionary.
- **Next action.** B `ex-genus-zero-conic-with-rational-point`.

### Checkpoint 32 — B `ex-genus-zero-conic-with-rational-point` (level 14)

- **Item.** `ex-genus-zero-conic-with-rational-point` (B page); authored;
  precheck PASS; steps 1.1, 2.1, 3.1, 4.1. Claim (preserved, all scaffold
  numerical promises): for a field $k$ of characteristic not two, a smooth
  plane conic curve $C=V_+(F)\subseteq\mathbb P^2_k$ and a $k$-rational point
  $p\in C$ one has $\deg_k[p]=1$, $p_a(C)=0$, $g(C)=0$, $C\cong\mathbb P^1_k$,
  $l([p])=2$, $i([p])=0$, and Riemann-Roch at $[p]$ reads $2-i([p])=1+1-0$.
- **Route.** b-leaf repair: the frozen scaffold cited the examples-page items
  `ex-quadratic-veronese-conic` and `ex-rational-parametrization-circle-conic`;
  both are leaves, so the load was replaced by
  [[thm-genus-zero-point-implies-projective-line]],
  [[cor-h0-projective-space-o-d-homogeneous-polynomials]],
  [[lem-projective-line-divisors-classified-by-degree]] and the local argument
  of steps 1–3, with the line-pencil picture kept as the classical geometric
  remark (its would-be supplier named). **Author-level source repairs made
  during authoring:** [F2] now cites the on-disk
  [[def-genus-euler-characteristic-curve]] for the smooth-case agreement of
  genus with arithmetic genus (it had pointed at `def-little-l-divisor`'s
  page conventions, which do not carry that statement); [F4] now records
  $g(\mathbb P^1_k)=0$ and $\mathcal O([q])\cong\mathcal O(1)$ for every
  $k$-rational $q$; step 3.1 now *derives* $i([q])=0$ from Riemann-Roch on
  $\mathbb P^1_k$ ($2-i([q])=1+1-0$) instead of attributing it to the
  $h^0$-only corollary. Repairs keep every promised claim.
- **Dependencies (frontmatter, 13).**
  `cor-h0-projective-space-o-d-homogeneous-polynomials`,
  `def-algebraic-curve-over-field`, `def-axiom-of-choice`,
  `def-degree-divisor-proper-curve`, `def-genus-euler-characteristic-curve`,
  `def-index-speciality-divisor`, `def-little-l-divisor`,
  `def-nonspecial-divisor`, `def-sheaf-cohomology-derived-global-sections`,
  `lem-projective-line-divisors-classified-by-degree`,
  `thm-genus-zero-point-implies-projective-line`,
  `thm-plane-curve-arithmetic-genus`, `thm-riemann-roch-as-l-minus-index`; synced.
- **Decision / flags (escalate).** [[thm-plane-curve-arithmetic-genus]]
  (batch-6 draft), [[thm-genus-zero-point-implies-projective-line]] and
  [[thm-riemann-roch-as-l-minus-index]] (batch-5/6 flags): steps 1.1 and 2.1
  for the first two, steps 3.1 and 4.1 for the third. The isomorphism
  invariance [F6] of $l$ and $i$ additionally uses
  `def-invertible-sheaf-of-cartier-divisor` (batch 5, not on disk) at step 3.1.
  The unconditional passage "smooth plane conic of pure dimension one ⇒
  integral conic curve" is the same open obligation as in the quartic and
  cubic instances and needs the batch-8 draft
  `cor-genus-degree-smooth-plane-curve`; it is not supplied here.
- **Checks.** `precheck` PASS after the edits; strict contract clean at 41/41
  (15 citation rows, 7 facts, 8 boundary rows, 0 warnings); manifest synced;
  item registered in scope and coverage.
- **Open gaps.** Batch-5 Cartier dictionary (invariance of cohomology under
  isomorphism); batch-6 plane-curve genus and rational-point theorem; batch-8
  conic-to-curve passage.
- **Next action.** Level-15 items in dispatch order:
  `rem-sharp-degree-thresholds-wait-for-duality` (A page), B
  `ex-linear-system-poles-at-one-point`, B `ex-nonspecial-large-divisor`.

### Checkpoint 33 — `rem-sharp-degree-thresholds-wait-for-duality` (level 15, remark)

- **Item.** A page; authored as a scope statement with no proof (precheck
  `n/a`, `provenance.proof: not-applicable`). Claim: this page proves the
  Euler-characteristic identity $l(D)-i(D)=\deg_k(D)+1-g$ with $i(D)\ge0$ and
  the fixed-direction vanishing $H^1(C,\mathcal O_C(D_0+nA+E))=0$ for
  $n\ge n_0(D_0,\varphi)$; the four classical degree thresholds
  ($\deg_kK_C=2g-2$ and $h^0(C,K_C)=g$; vanishing for $\deg_k(D)>2g-2$;
  base-point-freeness in degree $\ge2g$; very ampleness in degree $\ge2g+1$)
  all rest on the Serre-duality identification $i(D)=l(K_C-D)$ and are
  deferred to the duality pair, whose batch-8 item ids are named as
  destinations. AC is inherited, nothing is selected.
- **Dependencies (frontmatter, 10).**
  `cor-riemann-theorem-large-degree`, `def-algebraic-curve-over-field`,
  `def-axiom-of-choice`, `def-genus-euler-characteristic-curve`,
  `def-index-speciality-divisor`, `def-little-l-divisor`,
  `lem-large-positive-divisors-nonspecial`,
  `thm-h1-line-bundle-vanishes-sufficiently-high-degree`,
  `thm-riemann-roch-as-l-minus-index`,
  `thm-riemann-roch-euler-characteristic-curve`; synced.
- **Decision / flags (escalate).**
  [[thm-h1-line-bundle-vanishes-sufficiently-high-degree]],
  [[cor-riemann-theorem-large-degree]] and
  [[lem-large-positive-divisors-nonspecial]] are in-run drafts escalated on
  the batch-5 divisor–tensor and Cartier dictionaries (and, for the
  finite-map corollary, the batch-6 fibre-degree item); the remark asserts
  none of the deferred thresholds and cites no batch-8 item, so those names
  are forward destinations, not suppliers of any claim here.
- **Checks.** `precheck` n/a (0 checked); strict contract clean at 44/44
  with this item's entry at 0 citation rows, 0 derivations and 8 boundary
  rows (each naming a step or the statement); manifest synced; scope 44.
- **Open gaps.** None of its own; the four thresholds are the duality
  pair's obligation, not this remark's.
- **Next action.** B `ex-linear-system-poles-at-one-point`.

### Checkpoint 34 — B `ex-linear-system-poles-at-one-point` (level 15)

- **Item.** B page; authored after adopting the precheck repair; canonical
  steps 1.1, 1.2, 2.1, 3.1, 3.2, 4.1, 5.1. Claim (all scaffold promises
  preserved): for a nonconstant $f\in k(C)^\times$ with pole divisor
  $(f)_\infty=m[p]$, the pencil $k\cdot1+k\cdot f$ is a two-dimensional
  base-point-free subspace of $L(D_0)$ at $D_0=(f)_\infty$; its attached
  morphism is exactly the finite $\varphi_f$ of degree $[k(C):k(f)]$ with
  fibre over infinity $(f)_\infty$; among the divisors $np\ge(f)_\infty$ it
  is base-point-free exactly at $n=m$; on $\mathbb P^1_k$ with $f=t$ the
  morphism is the identity $[1:t]$; and the construction realizes the
  single-pole case of the finite-map corollary, nonemptily by the
  bounded-pole existence corollary.
- **Scaffold defect repaired (load-bearing).** The frozen scaffold asserted
  that $\operatorname{span}(1,f)$ is base-point-free inside $L(np)$ for
  every $n\ge m$ and that $L(n[\infty])$ cuts out the same morphism. That is
  false as soon as the pole order $m$ is smaller than $n$: $p$ lies in both
  $\operatorname{div}(1)+np=np$ and
  $\operatorname{div}(f)+np=(f)_0+(n-m)[p]$. The repair keeps every promised
  object and treats the general case at the pole divisor, where step 2.1
  proves base-point-freeness, and records the enlarged divisors of steps 3.2
  and 4.1 as the base-point case. A local witness on $\mathbb P^1_k$ shows
  the attached morphism depends on the subspace: $V_1=k\cdot1+k\cdot t^2$
  and $V_2=k\cdot1+k\cdot(t^2+t)$ in $L(2[\infty])$ are base-point-free of
  dimension two, and no fractional linear $M$ satisfies $M(t^2)=t^2+t$
  (clearing denominators forces $c=0$, then $d=0$, then $a=b=0$,
  contradicting invertibility of $M$).
- **Dependencies (frontmatter, 12).**
  `cor-existence-rational-function-bounded-pole`,
  `cor-smooth-proper-curve-finite-map-projective-line`,
  `def-algebraic-curve-over-field`, `def-axiom-of-choice`,
  `def-base-point-linear-system`, `def-divisor-smooth-proper-curve`,
  `def-divisor-support-positive-negative-parts`,
  `def-relative-projective-space-standard-charts`,
  `def-riemann-roch-space-of-divisor`,
  `lem-function-with-poles-defines-map-p1`,
  `lem-projective-line-divisors-classified-by-degree`,
  `thm-base-point-free-linear-system-morphism`; synced.
- **Decision / flags (escalate).** Steps 1.1–5.1 consume batch-6 drafts
  `def-riemann-roch-space-of-divisor`, `def-base-point-linear-system` and
  `thm-base-point-free-linear-system-morphism` (steps 1.2, 2.1, 3.1, 3.2,
  4.1, 5.1), `lem-function-with-poles-defines-map-p1` and
  [[cor-smooth-proper-curve-finite-map-projective-line]] (steps 3.1, 4.1,
  5.1), and the in-run escalated
  [[cor-existence-rational-function-bounded-pole]] (step 5.1); the
  projective-line data come from the on-disk
  [[lem-projective-line-divisors-classified-by-degree]]. Escalate until
  those suppliers are authored and the uses reconciled.
- **Checks.** `precheck` PASS after the adopted repair (REPAIR → adopt →
  PASS); strict contract clean at 44/44 with this item at 12 citation rows,
  7 derivations and 8 boundary rows; manifest synced; scope 44.
- **Open gaps.** Batch-6 divisor-space/base-point dictionary and finite-map
  corollary; batch-5 pullback dictionary inherited through them.
- **Next action.** B `ex-nonspecial-large-divisor`.

### Checkpoint 35 — B `ex-nonspecial-large-divisor` (level 15)

- **Item.** B page; authored; steps 1.1, 1.2, 1.3, 2.1, 2.2, 3.1, 4.1.
  Claim: the fixed-direction theorem makes every $D=D_0+nA+E$ with
  $n\ge n_0(D_0,\varphi)$ and $E$ effective nonspecial, whence
  $l(D)=\deg_k(D)+1-g$; on $\mathbb P^1_k$ with $A=[\infty]$,
  $l(d[\infty])=d+1$ for $d\ge0$ and $0$ for $d<0$, while
  $i(d[\infty])=0$ exactly for $d\ge-1$ and $i(d[\infty])=-d-1\ge1$ for
  $d\le-2$, so nonspeciality holds exactly for $d\ge-1$ with boundary value
  $d=-1$ ($l=i=0$) and $\deg_k(d[\infty])=d$; the example explicitly does
  not assert the universal bound $\deg_k(D)>2g-2\Rightarrow i(D)=0$, which
  waits for the duality pair.
- **b-leaf repair.** The frozen scaffold cited the examples-page items
  `ex-cohomology-o-d-projective-line-all-d` and
  `ex-riemann-roch-projective-line-divisor`; both are leaves, so the load
  was moved to the published A-page suppliers
  [[cor-h0-projective-space-o-d-homogeneous-polynomials]],
  [[cor-top-cohomology-projective-space-o-d]] and
  [[lem-projective-line-divisors-classified-by-degree]], with
  [[cor-picard-projective-line-integers]] for
  $\mathcal O(d[\infty])\cong\mathcal O(d)$.
- **Author-level edit made while checkpointing.** Two stale references in
  the floated supplier note — "used at steps 1.2 and 5.1" and "used at
  steps 2.1 and 5.1", from a step numbering this item does not have — were
  corrected to the actual uses (steps 2.1 and 3.1 for
  [[thm-riemann-roch-as-l-minus-index]]; steps 1.2 and 1.3 for the
  batch-5 dictionary behind
  [[cor-picard-projective-line-integers]]). The proof text itself was not
  touched; precheck re-run PASS.
- **Dependencies (frontmatter, 14).**
  `cor-h0-projective-space-o-d-homogeneous-polynomials`,
  `cor-picard-projective-line-integers`,
  `cor-top-cohomology-projective-space-o-d`,
  `def-algebraic-curve-over-field`, `def-axiom-of-choice`,
  `def-degree-divisor-proper-curve`, `def-divisor-smooth-proper-curve`,
  `def-genus-euler-characteristic-curve`, `def-index-speciality-divisor`,
  `def-little-l-divisor`, `def-nonspecial-divisor`,
  `lem-large-positive-divisors-nonspecial`,
  `lem-projective-line-divisors-classified-by-degree`,
  `thm-riemann-roch-as-l-minus-index`; synced.
- **Decision / flags (escalate).**
  [[lem-large-positive-divisors-nonspecial]] (step 1.1) and
  [[thm-riemann-roch-as-l-minus-index]] (steps 2.1, 3.1) are in-run drafts
  escalated on the batch-5 divisor–tensor and Cartier dictionaries, and the
  identifications $\mathcal O(d[\infty])\cong\mathcal O(d)$ and
  $\deg_k\mathcal O_C(D)=\deg_kD$ at steps 1.2 and 1.3 come from the
  flagged batch-5 suppliers of [[cor-picard-projective-line-integers]]
  (`def-invertible-sheaf-of-cartier-divisor`,
  `thm-cartier-divisors-mod-principal-to-picard`,
  `cor-degree-descends-picard-curve`), not on disk at this writing.
  Escalate until those suppliers are authored and the uses reconciled.
- **Checks.** `precheck` PASS (direct); strict contract clean at 44/44 with
  this item at 16 citation rows, 8 facts, 7 derivations and 8 boundary
  rows, 0 warnings; manifest synced; coverage gate
  (`coverage-checklist`) 0 errors (one pre-existing advisory low-yield
  warning for the source harvest).
- **Open gaps.** Batch-5 divisor–sheaf dictionary; nothing else.
- **Next action.** All 44 authored: run the end-of-dispatch gates
  (precheck/depcheck/rendercheck/fwdcheck/extcheck/item-dependency-levels/
  validate-plan/content-policy/strict contracts/citation fidelity/boundary
  audit), refresh the dependency ledger, then record item decisions.

## Pre-splice findings disposition

Source: `research/frontier-37-owner-30-pre-splice-plan-findings.json`
(recorded 2026-09-30T09:13:00Z against the pre-Step-3a-enrichment overlay
checked 2026-09-30 07:27 UTC; the file itself states diagnostic-only, no scope
waiver, recheck current inputs). Of its repo-wide counts (1 prefix, 1
intra-order, 34 b-leaf, 31 undeclared-prereq), 28 findings name this pair:
19 `b-leaf`, 8 `undeclared-prereq`, 1 `intra-order`. Each was rechecked
against the current manifests, item files and plan-spec before the affected
items were authored.

**19 `b-leaf` findings — resolved by replacement, not by dropping claims.**
Every finding named a consumer on this pair and a published examples-page
supplier that had been cited as a load. The load was replaced item by item
(details in the checkpoints above and in each item's `*Scaffold repair,
recorded for the owner.*` note where one was written):

- `lem-add-one-point-exact-sequence-line-bundle` →
  `ex-skyscraper-sheaf-acyclic`: replaced by the published A-page suppliers
  `def-skyscraper-sheaf-abelian-group`, `thm-cohomology-one-point-space` and
  `lem-closed-immersion-preserves-sheaf-cohomology`, with the skyscraper
  cohomology recomputed in steps 2.2/3.3.
- `lem-projective-line-divisors-classified-by-degree` →
  `ex-cohomology-o-d-projective-line-all-d`, `ex-polynomial-ring-flat-smooth`,
  `ex-twisting-sheaf-projective-line-transitions`: all three dropped in favour
  of `cor-h0-projective-space-o-d-homogeneous-polynomials`,
  `cor-top-cohomology-projective-space-o-d`,
  `def-genus-euler-characteristic-curve` and the local chart computations of
  checkpoint 8.
- `cor-picard-projective-line-integers` →
  `ex-line-bundle-projective-line-transition`: dropped; the transition
  computation is local (step 3.1) with `def-twisting-sheaf-proj`,
  `thm-gluing-sheaves` and `lem-uniqueness-of-twists-on-the-projective-line`
  (checkpoint 9).
- `lem-vector-bundle-p1-has-maximal-degree-line-subbundle` →
  `ex-cohomology-o-d-projective-line-all-d`: dropped; boundedness and maximality
  come from `lem-eventual-global-generation-coherent-twists` and the published
  vanishing corollaries (checkpoint 3).
- `lem-vector-bundle-p1-maximal-line-quotient-locally-free` →
  `ex-cohomology-o-d-projective-line-all-d`: dropped; the needed
  $H^1(\mathcal O(-1))=0$ is the published A-page corollary (checkpoint 6).
- `lem-vector-bundle-p1-extension-splits` →
  `ex-cohomology-o-d-projective-line-all-d`: the item was rewritten as a direct
  induction whose base case is
  `cor-h0-projective-space-o-d-homogeneous-polynomials` +
  `cor-top-cohomology-projective-space-o-d` (checkpoint 2).
- `thm-birkhoff-grothendieck-vector-bundles-p1` →
  `ex-cohomology-o-d-projective-line-all-d`: base case now the same two
  published corollaries plus `cor-picard-projective-line-integers`
  (checkpoint 10).
- B `ex-riemann-roch-projective-line-divisor` → the same examples item:
  replaced by `cor-h0-projective-space-o-d-homogeneous-polynomials` and
  `cor-top-cohomology-projective-space-o-d`; the negative-degree compensation
  clause was additionally corrected to $l(D)=0$, $i(D)=-d-1$, $l-i=d+1$.
- B `ex-genus-zero-conic-with-rational-point` → `ex-quadratic-veronese-conic`,
  `ex-rational-parametrization-circle-conic`: replaced by
  `thm-genus-zero-point-implies-projective-line`, the published computation
  $h^0(\mathcal O(1))=2$ and the local computations of items 1–3.
- B `cex-genus-zero-without-rational-point-not-p1` →
  `ex-base-change-real-conic-to-complex`,
  `ex-projective-conic-standard-charts`: replaced by the explicit computations
  of items 1, 3, 5, 6 ($F$ and its partials, the sign of the sum of squares,
  the evaluation at $[i:0:1]$, and $k$-rational-point transport along an
  isomorphism).
- B `ex-adding-point-section-dimension-jump` →
  `ex-cohomology-o-d-projective-line-all-d`: replaced by
  `lem-divisor-order-monotonicity-sections` and the item's own computations;
  the frozen scaffold's claim that the jump is $0$ or $[\kappa(p):k]$ is
  false and was corrected to the true bound
  $0\le l(D+p)-l(D)\le[\kappa(p):k]$, with the new case (iv) as the disproof
  (checkpoint 15).
- B `ex-degree-zero-principal-divisor` → the same examples item: replaced by
  the published corollaries and a direct computation; the frozen scaffold's
  "scalar multiples of $f$" reading was false and is corrected to scalar
  multiples of $1/f$.
- B `ex-nonspecial-large-divisor` → the same examples item and the same-page
  `ex-riemann-roch-projective-line-divisor`: replaced by
  `cor-h0-projective-space-o-d-homogeneous-polynomials`,
  `cor-top-cohomology-projective-space-o-d`,
  `lem-projective-line-divisors-classified-by-degree` and
  `cor-picard-projective-line-integers`.
- B `cex-negative-degree-rr-right-side-negative` → the same two examples
  items: replaced by the two published corollaries and the A-page suppliers
  named in its scaffold-repair note.
- B `ex-empty-divisor-euler-characteristic` → the same examples item:
  replaced by the two published corollaries and
  `lem-projective-line-divisors-classified-by-degree`.

Mechanical close: a scan of all 44 item files and the current batch-7
manifests for the nine examples-page ids named by these findings reports
**zero** hits — no manifest `deps` entry, no item-frontmatter deps entry and
no `[[...]]` link; `depcheck` reports no `b-leaf-content` finding naming any
batch-7 item file (370 findings repo-wide, none ours). Residual prose mentions
of examples-page items survive only inside `*Scaffold repair, recorded for the
owner.*` notes, written as code spans rather than `[[...]]` links and absent
from every deps list: `ex-riemann-roch-projective-line-divisor` line 62,
`cex-negative-degree-rr-right-side-negative` line 76,
`ex-empty-divisor-euler-characteristic` line 64,
`ex-nonspecial-large-divisor` line 84,
`cex-genus-zero-without-rational-point-not-p1` lines 100–101 and
`ex-genus-zero-conic-with-rational-point` lines 71 and 75–76. All eight lines
were read: each is the historical record of the repair, not a load-bearing
use, and the load-bearing citations in those items point at A-page suppliers
or local steps.

**8 `undeclared-prereq` findings — resolved.** The findings said the two pages
depend on seven examples pages outside their declared `requires` closure. All
eight were consequences of the same load-bearing examples-page citations;
with those replaced, no item on either page depends on any examples page, so
no `requires` change is needed. `validate-plan research/plan-spec.json` now
passes with no undeclared-prereq or B-page-dependency finding.

**1 `intra-order` finding — reported, not reordered.**
`def-little-l-divisor` names `lem-riemann-roch-space-finite-dimensional`,
which appears later on the same page, as the source of the promise that
$l(D)$ is a finite nonnegative integer. Disposition: the definition is
self-contained (it introduces the notation; its only existence statement,
$l(0)=1$, cites `thm-h0-structure-sheaf-proper-curve`); the promise is carried
as prose with a code span, not as a `[[...]]` link, and the manifest deps do
not list the lemma (verified); the lemma itself is authored and proves exactly
the promised finiteness. The intra-page order is the one the dispatch fixed
for authoring, and reordering items now would invalidate these items' recorded
decision receipts (which hash manifest item metadata); so the finding is
reported to the owner and Step 4, which should decide — as checkpoint 12
already recommends — whether to restate the definitional finiteness promise
after the lemma, to reorder the two items when the page is spliced, or to
accept the forward prose promise as it stands. No mathematical load is hidden:
nothing on the page proves $l(D)$ finite before the lemma.

**Other local repairs made while authoring** (all recorded in the item files
and checkpoints): the `lem-projective-line-divisors-classified-by-degree`
label convention repair ($\infty=[0:1]=V(x_0)$) and its twist-frame notation
repair; the `ex-linear-system-poles-at-one-point` base-point repair (the
scaffold's $\operatorname{span}(1,f)\subseteq L(np)$ is not base-point-free for
$m<n$); the quartic integrality repair in
`cex-riemann-inequality-not-equality-special-divisor` and the cubic one in
`cor-nontrivial-degree-zero-line-bundle-no-sections`; the supplier swap that
makes `lem-degree-zero-effective-divisor-empty` rest on
`lem-degree-effective-divisor-nonnegative`; the missing `## Proof` section
added to `cor-smooth-proper-curve-finite-map-projective-line`; the effective
divisor qualification restored in `cor-existence-rational-function-bounded-pole`
[F5]; the `generation:` provenance blocks removed from nine literature-derived
B-page examples; and the two stale step references in
`ex-nonspecial-large-divisor`'s supplier note corrected to steps 2.1 and 3.1
(for `thm-riemann-roch-as-l-minus-index`) and steps 1.2 and 1.3 (for the
batch-5 dictionary behind `cor-picard-projective-line-integers`).

## Published concerns and cross-pair findings

- No published item is implicated by this dispatch: all 44 authored items are
  `status: draft` in the pre-splice batch, and no published content was
  edited. The reconciler owns
  `research/published-consumer-supplier-ledger.md`; nothing in this report
  asks it to change a published row.
- **Four batch-6 drafts cite a batch-7 supplier without a dependency
  declaration.** `cex-inseparable-map-riemann-hurwitz-naive-fails`,
  `ex-projective-line-divisors-linear-systems`,
  `ex-ramification-power-map-projective-line` and
  `ex-smooth-conic-is-projective-line-with-point` (all on
  `smooth-proper-curves-divisors-genus-and-ramification`, batch 6, status
  `draft`) cite `lem-projective-line-divisors-classified-by-degree` in
  Statement/Facts. Mechanical evidence: `depcheck` prints four
  `[cited-not-in-deps]` findings for these four files and `fwdcheck --quiet`
  prints four `[forward-dangling]` findings saying the id "is planned nowhere
  and can never be closed" (370 and 45 findings repo-wide respectively; zero
  of either kind names a batch-7 item file). Cause: the item is homed in
  `research/frontier-37-owner-30-batch-7.pages.json` but not in
  `research/plan-spec.json`'s page item lists (both owned pages show
  `0 items` there until the Step-4 splice), so the plan-derived home map
  cannot see it yet. Confidence: mechanical finding; this dispatch has read
  access only and did not audit the mathematical use. Proposed repair for the
  batch-6 owners (not performed here): after the splice homes the item, move
  `lem-projective-line-divisors-classified-by-degree` from `forward_refs` to
  `deps` in those four items, or drop the citation, then re-run
  `depcheck`/`fwdcheck`.
- **Two global gate failures belong to other groups.** (a)
  `item-dependency-levels check --run frontier-37-owner-30` fails solely on
  `thm-principle-of-descent-and-domination` (batch 24): manifest level 3 vs
  computed 2. (b) `frontier-dependency-ledger refresh --require-reviewed`
  fails solely on the unreviewed batch-3→batch-2 edge
  `thm-logarithmic-unit-image-is-a-full-lattice` →
  `def-minkowski-embedding-of-a-number-field`; `unreviewed_batches` is empty
  and every batch-7 edge is reviewed. Neither names a batch-7 file; both are
  routed to their owners.

## Open obligations

- **Completion state.** All 44 assigned items are authored and complete on
  disk (34 on A, 10 on B), with all 44 in the proof-contract `scope` and all
  44 carrying a contract entry; all 44 have a recorded item decision receipt
  (`research/frontier-37-owner-30-step3b-review-<id>.json`, no `--owner`).
  The manifest item set equals the dispatch item set exactly: no item ID was
  added, dropped or renamed; no Recorded result was consumed; no published
  file was edited. The completed IDs are, on A:
  `def-little-l-divisor`, `lem-riemann-roch-space-finite-dimensional`,
  `lem-divisor-order-monotonicity-sections`,
  `lem-add-one-point-exact-sequence-line-bundle`,
  `lem-add-one-point-euler-characteristic`,
  `lem-divisor-decomposition-positive-negative-points`,
  `thm-euler-characteristic-degree-shift-curve`,
  `def-genus-euler-characteristic-curve`,
  `thm-riemann-roch-euler-characteristic-curve`,
  `cor-riemann-inequality-divisor-sections`,
  `cor-negative-degree-no-sections-rr`,
  `lem-h1-stabilizes-downward-point-removal`,
  `cor-existence-rational-function-bounded-pole`,
  `cor-smooth-proper-curve-finite-map-projective-line`,
  `thm-h1-line-bundle-vanishes-sufficiently-high-degree`,
  `cor-riemann-theorem-large-degree`,
  `thm-genus-zero-point-implies-projective-line`,
  `lem-projective-line-divisors-classified-by-degree`,
  `cor-picard-projective-line-integers`,
  `lem-smooth-curve-coherent-torsion-free-locally-free`,
  `lem-nonzero-map-invertible-to-locally-free-injective`,
  `lem-vector-bundle-p1-has-maximal-degree-line-subbundle`,
  `lem-vector-bundle-p1-maximal-line-quotient-locally-free`,
  `lem-vector-bundle-p1-extension-splits`,
  `thm-birkhoff-grothendieck-vector-bundles-p1`,
  `lem-degree-zero-effective-divisor-empty`,
  `cor-degree-zero-line-bundle-section-trivial`,
  `cor-nontrivial-degree-zero-line-bundle-no-sections`,
  `def-index-speciality-divisor`, `thm-riemann-roch-as-l-minus-index`,
  `def-nonspecial-divisor`, `lem-large-positive-divisors-nonspecial`,
  `cor-dimension-complete-linear-system`,
  `rem-sharp-degree-thresholds-wait-for-duality`; and on B:
  `ex-riemann-roch-projective-line-divisor`,
  `ex-genus-zero-conic-with-rational-point`,
  `cex-genus-zero-without-rational-point-not-p1`,
  `ex-adding-point-section-dimension-jump`,
  `cex-riemann-inequality-not-equality-special-divisor`,
  `ex-degree-zero-principal-divisor`,
  `ex-linear-system-poles-at-one-point`, `ex-nonspecial-large-divisor`,
  `cex-negative-degree-rr-right-side-negative`,
  `ex-empty-divisor-euler-characteristic`. **6 items are closed** — `accept` for
  `lem-nonzero-map-invertible-to-locally-free-injective`,
  `lem-vector-bundle-p1-has-maximal-degree-line-subbundle`,
  `lem-smooth-curve-coherent-torsion-free-locally-free`,
  `def-genus-euler-characteristic-curve`,
  `lem-vector-bundle-p1-maximal-line-quotient-locally-free`, and `repaired`
  for `lem-vector-bundle-p1-extension-splits` (rewritten as a direct
  induction off published suppliers). *(Superseded 2026-10-01 for the decision
  labels: `lem-smooth-curve-coherent-torsion-free-locally-free` and
  `lem-vector-bundle-p1-maximal-line-quotient-locally-free` are now `repaired`
  after the author-level fixes of Continuation C4, and the accept/repaired
  split is 3/3; see Continuation C3.)* **38 items are `escalate`** because
  their proofs consume an in-run supplier that is either not yet authored on
  disk or itself still escalated by its own batch-5/batch-6 owner; each of the
  38 remains a valid authored draft that passes every applicable gate
  (precheck PASS, or n/a for the definitions/remark among them) with a clean
  strict contract, pending supplier reconciliation and re-recorded decisions.
- **Escalation map (recorded decision reason per item; nearest blockers).**
  The table gives item → supplier → disk state → the consuming steps named in
  the receipt. The full transitive flag list for each item is its
  `dependencies` receipt array; each item file also records its flagged
  suppliers in a `*Supplier obligations (flagged, not yet discharged).*`
  paragraph where one was written, otherwise in a flagged fact line,
  statement prose, or its declared deps; the corresponding checkpoint above
  records the use. The checkpoints were written as authoring progressed, so a
  checkpoint's "Open gap: none" states the status at that moment; the 44
  decision receipts are the current record, and the final dependency pass
  that produced this table supersedes those lines where they differ.

  | escalated item | supplier (state) | consuming steps |
  | --- | --- | --- |
  | `cex-genus-zero-without-rational-point-not-p1` | `def-divisor-smooth-proper-curve`, `def-riemann-roch-space-of-divisor`, `lem-effective-divisors-sections-mod-scalars` (drafts) | flagged facts |
  | `cex-negative-degree-rr-right-side-negative` | `def-divisor-smooth-proper-curve` (draft) step 1.1; `def-riemann-roch-space-of-divisor`, `lem-degree-effective-divisor-nonnegative` (drafts) | 1.1 / flagged facts |
  | `cex-riemann-inequality-not-equality-special-divisor` | `def-divisor-smooth-proper-curve`, `thm-cartier-weil-divisors-curves-agree`, `def-riemann-roch-space-of-divisor` (drafts) | flagged facts |
  | `cor-degree-zero-line-bundle-section-trivial` | `def-divisor-smooth-proper-curve`, `lem-degree-effective-divisor-nonnegative`, `thm-cartier-weil-divisors-curves-agree` (drafts) | 3.1 |
  | `cor-dimension-complete-linear-system` | `def-complete-linear-system`, `def-divisor-smooth-proper-curve` (drafts) 4.2; `lem-effective-divisors-sections-mod-scalars` (draft) | 1.1, 2.1, 4.2, 5.1 |
  | `cor-existence-rational-function-bounded-pole` | `def-divisor-smooth-proper-curve` (draft) 1.1, 1.2; `def-riemann-roch-space-of-divisor` (draft) | 1.2, 2.1, 3.1, 4.1 |
  | `cor-negative-degree-no-sections-rr` | `def-divisor-smooth-proper-curve` (draft) 2.1, 4.1; `def-riemann-roch-space-of-divisor` (draft) 1.1; `lem-degree-effective-divisor-nonnegative` (draft) 3.1 | as listed |
  | `cor-nontrivial-degree-zero-line-bundle-no-sections` | `def-divisor-smooth-proper-curve` (draft) 1.2; `lem-function-with-poles-defines-map-p1`, `thm-cartier-weil-divisors-curves-agree` (drafts) | 1.3, 3.1 |
  | `cor-picard-projective-line-integers` | `cor-degree-descends-picard-curve`, `lem-cartier-divisor-addition-tensor`, `thm-cartier-divisors-mod-principal-to-picard` (unauthored) | 1.2, 2.1, 3.1, 4.1, 5.1 |
  | `cor-riemann-inequality-divisor-sections` | `def-divisor-smooth-proper-curve` (draft) 1.1; `thm-cartier-weil-divisors-curves-agree`, `def-riemann-roch-space-of-divisor` (drafts) | 1.1 / flagged facts |
  | `cor-riemann-theorem-large-degree` | `def-divisor-smooth-proper-curve` (draft) 2.1; `def-riemann-roch-space-of-divisor` (draft); `lem-cartier-divisor-addition-tensor` (unauthored) | 2.1 / flagged facts |
  | `cor-smooth-proper-curve-finite-map-projective-line` | `def-divisor-smooth-proper-curve` (draft) 3.2, `lem-function-with-poles-defines-map-p1` (draft) 2.1, 4.1; `def-pullback-cartier-divisor` (unauthored) 3.2, 4.1 | as listed |
  | `def-index-speciality-divisor` | `def-divisor-smooth-proper-curve`, `thm-cartier-weil-divisors-curves-agree`, `def-riemann-roch-space-of-divisor` (drafts) | flagged facts |
  | `def-little-l-divisor` | `def-divisor-smooth-proper-curve`, `def-riemann-roch-space-of-divisor` (drafts) | flagged facts |
  | `def-nonspecial-divisor` | `def-divisor-smooth-proper-curve`, `thm-cartier-weil-divisors-curves-agree`, `def-riemann-roch-space-of-divisor` (drafts) | flagged facts |
  | `ex-adding-point-section-dimension-jump` | `def-divisor-smooth-proper-curve` (draft); `def-riemann-roch-space-of-divisor`, `thm-cartier-weil-divisors-curves-agree` (drafts) | 1.1–1.4, 2.1, 3.1 |
  | `ex-degree-zero-principal-divisor` | `def-divisor-smooth-proper-curve` (draft) 2.1, 2.2, 3.2; `def-riemann-roch-space-of-divisor` (draft) 2.1, 3.2, 4.1; `thm-principal-divisor-degree-zero-proper-curve` (unauthored) 3.1, 4.1, 6.1 | as listed |
  | `ex-empty-divisor-euler-characteristic` | `def-complete-linear-system`, `def-divisor-smooth-proper-curve` (drafts) | 2.2, 4.1 |
  | `ex-genus-zero-conic-with-rational-point` | `def-divisor-smooth-proper-curve`, `thm-cartier-weil-divisors-curves-agree`, `def-riemann-roch-space-of-divisor` (drafts) | flagged facts |
  | `ex-linear-system-poles-at-one-point` | `def-base-point-linear-system` (draft) 1.2, 2.1, 3.2, 4.1; `def-divisor-smooth-proper-curve` (draft) 1.1; `def-riemann-roch-space-of-divisor` (draft) 1.1, 1.2, 2.1, 3.1, 3.2, 4.1, 5.1 | as listed |
  | `ex-nonspecial-large-divisor` | `def-divisor-smooth-proper-curve` (draft) 1.3; `cor-degree-descends-picard-curve`, `lem-cartier-divisor-addition-tensor` (unauthored) | 1.3 / flagged facts |
  | `ex-riemann-roch-projective-line-divisor` | `def-complete-linear-system` (draft) 1.1, 3.2, 4.1; `def-divisor-smooth-proper-curve` (draft) 1.1, 3.1, 3.2 | as listed |
  | `lem-add-one-point-euler-characteristic` | `def-divisor-smooth-proper-curve`, `lem-degree-effective-divisor-nonnegative` (drafts) | 1.1 |
  | `lem-add-one-point-exact-sequence-line-bundle` | `def-divisor-smooth-proper-curve`, `lem-degree-effective-divisor-nonnegative` (drafts) 1.1, 6.3; `thm-cartier-weil-divisors-curves-agree` (draft) 1.3, 3.2, 3.3, 7.1 | as listed |
  | `lem-degree-zero-effective-divisor-empty` | `def-divisor-smooth-proper-curve` (draft) 1.1, 3.1; `lem-degree-effective-divisor-nonnegative` (draft) 2.1 | as listed |
  | `lem-divisor-decomposition-positive-negative-points` | `def-divisor-smooth-proper-curve`, `lem-degree-effective-divisor-nonnegative` (drafts) | 1.1, 2.1, 4.1 |
  | `lem-divisor-order-monotonicity-sections` | `def-divisor-smooth-proper-curve` (draft) 1.1, 1.2, 2.3, 2.4, 4.1; `def-riemann-roch-space-of-divisor`, `thm-cartier-weil-divisors-curves-agree` (drafts) 1.2, 2.1, 2.2, 3.1 | as listed |
  | `lem-h1-stabilizes-downward-point-removal` | `def-divisor-smooth-proper-curve`, `lem-degree-effective-divisor-nonnegative` (drafts) | 3.1, 4.1 |
  | `lem-large-positive-divisors-nonspecial` | `def-divisor-smooth-proper-curve` (draft) 3.1; `lem-function-with-poles-defines-map-p1` (draft); `def-pullback-cartier-divisor` (unauthored) | 3.1 / flagged facts |
  | `lem-projective-line-divisors-classified-by-degree` | `def-divisor-smooth-proper-curve` (draft) 4.2, 4.3, 5.2, 5.3, 6.2, 6.3, 7.1; `thm-cartier-weil-divisors-curves-agree`, `thm-line-bundle-rational-section-cartier-divisor` (draft/unauthored) 2.1, 3.4, 4.3, 8.1, 9.1 | as listed |
  | `lem-riemann-roch-space-finite-dimensional` | `def-riemann-roch-space-of-divisor` (draft) 1.3, 5.1, 7.1; `lem-cartier-divisor-sheaf-invertible` (unauthored) | 1.3, 5.1, 7.1 |
  | `rem-sharp-degree-thresholds-wait-for-duality` | `def-divisor-smooth-proper-curve`, `thm-cartier-weil-divisors-curves-agree`, `def-riemann-roch-space-of-divisor` (drafts) | flagged facts |
  | `thm-birkhoff-grothendieck-vector-bundles-p1` | `cor-degree-descends-picard-curve`, `lem-cartier-divisor-addition-tensor`, `thm-cartier-divisors-mod-principal-to-picard` (unauthored) | flagged facts |
  | `thm-euler-characteristic-degree-shift-curve` | `def-divisor-smooth-proper-curve` (draft) 1.1; `def-riemann-roch-space-of-divisor`, `lem-degree-effective-divisor-nonnegative` (drafts) | 1.1 / flagged facts |
  | `thm-genus-zero-point-implies-projective-line` | `def-divisor-smooth-proper-curve` (draft) 1.1, 2.1, 4.1, 5.1; `def-riemann-roch-space-of-divisor`, `lem-effective-divisors-sections-mod-scalars` (drafts) 1.1, 2.1, 3.1 | as listed |
  | `thm-h1-line-bundle-vanishes-sufficiently-high-degree` | `def-divisor-smooth-proper-curve` (draft); `lem-cartier-divisor-addition-tensor` (unauthored) 4.1, 5.1, 7.1; `lem-function-with-poles-defines-map-p1` (draft) | 4.1, 5.1, 7.1 / flagged facts |
  | `thm-riemann-roch-as-l-minus-index` | `def-divisor-smooth-proper-curve` (draft) 1.1; `thm-cartier-weil-divisors-curves-agree`, `def-riemann-roch-space-of-divisor` (drafts) | 1.1 / flagged facts |
  | `thm-riemann-roch-euler-characteristic-curve` | `def-divisor-smooth-proper-curve` (draft) 1.1; `def-riemann-roch-space-of-divisor` (draft); `lem-cartier-divisor-sheaf-invertible` (unauthored) | 1.1 / flagged facts |

  "Draft" means the supplier file exists on disk but its own decision is
  `escalate` on further unfinished batch-5/6 suppliers; "unauthored" means no
  item file exists at handoff. Distinct suppliers named as nearest blockers
  and not yet authored: `cor-degree-descends-picard-curve`,
  `def-pullback-cartier-divisor`, `lem-cartier-divisor-addition-tensor`,
  `lem-cartier-divisor-sheaf-invertible`,
  `thm-cartier-divisors-mod-principal-to-picard`,
  `thm-line-bundle-rational-section-cartier-divisor`,
  `thm-principal-divisor-degree-zero-proper-curve`. Beyond the nearest
  blockers, the batch-5/6 chains reached through them also contain the still
  unauthored `thm-cartier-to-weil-divisor-normal-scheme` (a declared dep of
  `thm-cartier-weil-divisors-curves-agree`) and
  `lem-finite-flat-curve-fibre-degree` (a declared dep of
  `lem-function-with-poles-defines-map-p1`); and three batch-5 dictionaries
  named by these items are on disk as drafts whose own decisions are not yet
  recorded (`def-invertible-sheaf-of-cartier-divisor`,
  `def-linear-equivalence-cartier-divisors`,
  `def-effective-cartier-divisor`). When the batch-5/6 owners author and
  accept these, the affected consuming steps (as tabled above and in the item
  supplier notes) must be re-read and the affected decisions re-recorded;
  until then the escalations stay open for the owner and no item is marked
  complete.
- **Integrality obligations deferred to batch 8.** The conic, cubic and
  quartic examples
  (`ex-genus-zero-conic-with-rational-point`,
  `cex-genus-zero-without-rational-point-not-p1`,
  `cex-riemann-inequality-not-equality-special-divisor`,
  `cor-nontrivial-degree-zero-line-bundle-no-sections`) record an
  unconditional passage from "smooth plane curve" to "integral curve" that
  needs `cor-genus-degree-smooth-plane-curve` (batch 8 of this run), not
  supplied here; the conditional readings actually used are stated in the
  items, and the affected decisions remain escalated.
- **Coverage advisory.** `coverage-checklist` reports 0 errors and one
  pre-existing advisory: 13/69 harvested results scaffolded on the A page,
  to be confirmed with Alpha. The Step-3a scope review dispositioned the 24
  inline harvest absorptions as deferred to Step 5; this dispatch neither
  added nor dropped any promised result.
- **Pre-splice items for Step 4.** The `intra-order` disposition above, the
  four batch-6 citation findings, the two global gate blockers, and the fact
  that both owned pages still show `0 items` in `research/plan-spec.json`
  (item lists are spliced from the batch manifests) are the plan-level
  mismatches to carry into Step 4.
- **Ledger.** The batch-7 cross-batch dependency input
  (`research/frontier-37-owner-30-batch-7.cross-batch-dependencies.json`) now
  has 204 rows: 86 rows were added this dispatch so that every declared batch-7
  in-run cross-batch edge has a review, and 16 stale rows were marked
  `removed` with per-item evidence (their load moved to another flagged
  supplier or the clause is no longer consumed); no `removed` row is still
  declared. A mechanical recheck finds 154 declared in-run cross-batch edges
  from the batch-7 manifests and 0 missing rows; sibling pairs' rows were
  preserved untouched.

## Gates run at handoff

All commands were run from the repo root against the current on-disk state
(read-only with respect to items and manifests; the decision receipts and
ledger were recorded before this pass):

- `node tools/tsx-run.mjs tools/precheck.mts` on all 44 explicit item paths:
  exit 0, "39 checked, 0 failing — all clean" (the five definition/remark
  files have no phase body).
- `node tools/rendercheck.mjs <44 files>`: exit 0, OK — no wikilink in math,
  no delimiter defects, every span parses under KaTeX, every frontmatter
  block parses.
- `node tools/content-policy.mjs research/frontier-37-owner-30-batch-7.pages.json`:
  exit 0, "44 scoped item(s), 0 error(s), 0 warning(s)".
- `node tools/proof-contract.mjs research/frontier-37-owner-30-batch-7.proof-contracts.json
  --strict`: exit 0, "0 error(s), 0 warning(s), 44/44 item(s) checked".
- `node tools/manifest-deps.mjs research/frontier-37-owner-30-batch-7.pages.json`:
  exit 0, "44 item(s), 0 normalized, 0 error(s)".
- `node tools/citation-fidelity.mjs research/frontier-37-owner-30-batch-7.proof-contracts.json
  --items-dir items --fail-on-missing-quote`: exit 0, 589 citations over 44
  items, no missing quote. Two heuristic widening candidates remain, both on
  `thm-h1-line-bundle-vanishes-sufficiently-high-degree`: [F4] →
  `thm-ample-powers-very-ample-proper-base` (the recorded quote itself
  contains "$d_0\ge1$ … for every $d\ge d_0$"; the flagged "$d\ge0$" token is
  $N_d\ge0$) and [F5] → `def-sheaf-cohomology-derived-global-sections` (the
  fact line restricts to $q>0$; the cited definition supplies $q\ge0$ for the
  notation $H^q$). Both were read and are faithful, not widenings.
- `node tools/boundary-audit.mjs research/frontier-37-owner-30-batch-7.proof-contracts.json
  --items-dir items --fail-on-contradicted --fail-on-template`: exit 0, 352
  rows over the batch contract, 48 marked `not_applicable`, no template reuse
  at or above 3 members, no contradicted disposition found by the detectors.
- `node tools/coverage-checklist.mjs research/frontier-37-owner-30-batch-7.coverage.json`:
  exit 0, 0 errors, 1 advisory warning (13/69 harvested; see Open
  obligations).
- `node tools/item-dependency-levels.mjs check --run frontier-37-owner-30`:
  exit 1 (global) with the single error
  `thm-principle-of-descent-and-domination: dependency_level 3 differs from
  computed 2` — a batch-24 item owned by another group; no batch-7 item is
  named, and the batch-7 levels recompute cleanly.
- `node tools/validate-plan.mjs research/plan-spec.json`: exit 0, "declared
  page order is acyclic and consistent; no item-level cycles, forward
  references, B-page dependencies, or unresolved ids among the 1300 page(s)
  with item lists" — with the pre-splice note that 367 planned pages
  (including both pages of this pair) carry no item list yet, plus two
  redundant-prereq advisories on other pages.
- `node tools/depcheck.mjs`: exit 1 (global), 370 findings; 0 name any
  batch-7 item file. Four `[cited-not-in-deps]` findings name the batch-7
  supplier `lem-projective-line-divisors-classified-by-degree` from the four
  batch-6 drafts recorded under Published concerns.
- `node tools/fwdcheck.mjs --quiet`: exit 1 (global), 45 findings; 0 name any
  batch-7 item file. The same four batch-6 drafts carry `[forward-dangling]`
  findings for the batch-7 supplier (planned nowhere pre-splice), recorded
  under Published concerns.
- `node tools/extcheck.mjs`: exit 0, OK — every recorded-not-proved statement
  is a cited remark with no proof and every consequence is marked.
- `node tools/frontier-dependency-ledger.mjs refresh --run frontier-37-owner-30
  --require-reviewed`: exit 1 (global) with the sole unreviewed edge
  `thm-logarithmic-unit-image-is-a-full-lattice` →
  `def-minkowski-embedding-of-a-number-field` (batch 3→2, another group);
  `unreviewed_batches` is empty and all 204 batch-7 rows are reviewed.
- `node tools/tsx-run.mjs tools/step3-decisions.mjs check --run
  frontier-37-owner-30 --phase final`: run for the record; exit 1 reflects
  the run's open work (our 38 escalated items plus other pairs' open
  decisions). Receipt inventory for this pair: 44 receipts, 5 `accept`, 1
  `repaired`, 38 `escalate`, 0 owner receipts.

Handoff summary: 44/44 items authored and contracted; 6 closed; 38 escalated
on named batch-5/batch-6 suppliers with exact consuming steps recorded; all
batch-7-local gates that can pass in the pre-splice state pass; the remaining
global failures name other groups' items, with the four batch-6 citation gaps
routed to their owners.

**Superseded 2026-10-01** for the page files, the item-decision inventory and
the gate exits: the continuation below adds the two pair pages, records the
manifest dependency sync and the re-recorded decisions, records two concrete
author-level repairs, and re-runs the gates on the current state.

## Step-3b continuation (2026-10-01) — pages, manifest sync, decision refresh, repairs, gates

### C1. Pair pages authored (both files were missing at the previous exit)

- `library/scheme-theory/riemann-roch-for-curves-via-euler-characteristics.md`:
  34 A items in manifest order; `requires:
  [cartier-and-weil-divisors-line-bundles-and-picard-groups,
  sheaf-cohomology-cech-cohomology-and-comparison,
  cohomology-of-quasi-coherent-sheaves-on-affine-and-projective-schemes,
  smooth-proper-curves-divisors-genus-and-ramification]`, identical to the
  `research/plan-spec.json` entry at order 366.087; `examples: []`.
- `library/scheme-theory/riemann-roch-for-curves-via-euler-characteristics-examples.md`:
  the 10 B items in manifest order; `requires:
  [riemann-roch-for-curves-via-euler-characteristics]`; `items: []`.
- `node tools/rendercheck.mjs <both pages>`: exit 0, `OK — 2 file(s)` (no
  wikilink in math, no delimiter defect, every span parseable).
- Page prose fixes the pair boundary: Euler-characteristic Riemann–Roch only,
  the index of speciality left an unknown nonnegative integer, and the
  duality thresholds $\deg K_C=2g-2$, $h^0(K_C)=g$, vanishing above $2g-2$,
  base-point-freeness at $2g$ and very ampleness at $2g+1$ explicitly deferred
  to `residues-serre-duality-for-curves-and-the-full-riemann-roch-theorem`.

### C2. Manifest dependency sync (5 items)

The dated receipts of the previous exit were recorded while the batch-7
manifest was not yet byte-stable: five manifest items still carried scaffold
lists that disagreed with the authored item frontmatter. They were resynced to
the authored declarations (the union of `deps`, `justified_by`,
`forward_refs`):

| item | manifest deps before → after | dropped | added |
|---|---|---|---|
| `lem-divisor-decomposition-positive-negative-points` | 5 → 13 | — | the curve, Euler-characteristic and cohomology-functoriality suppliers |
| `lem-smooth-curve-coherent-torsion-free-locally-free` | 12 → 17 | `def-annihilator-and-torsion-of-a-module`, `def-exact-sequence-sheaves` | `def-algebraic-curve-over-field`, `def-integral-scheme`, `def-irreducible-topological-space-and-subset`, `def-stalk-of-presheaf`, `def-subsheaf`, `def-finite-type-finite-presentation-module-sheaf`, `thm-locally-free-locus-finite-presentation-open` |
| `lem-nonzero-map-invertible-to-locally-free-injective` | 7 → 16 | — | the affine-chart, irreducibility, stalk and exactness suppliers used by the proof |
| `lem-vector-bundle-p1-has-maximal-degree-line-subbundle` | 20 → 23 | `def-closed-immersion-schemes`, `def-sheaf-hom`, `def-sheaf-tensor-product`, `lem-dual-locally-free-and-base-change`, `ex-cohomology-o-d-projective-line-all-d` | `cor-h0-projective-space-o-d-homogeneous-polynomials`, `lem-global-sections-left-exact`, `thm-projective-space-as-proj`, `thm-twisting-sheaf-invertible-standard-graded`, `thm-zero-sheaf-cohomology-global-sections`, `def-twisting-sheaf-proj`, `def-module-on-ringed-space`, `def-locally-noetherian-and-noetherian-scheme` |
| `lem-vector-bundle-p1-extension-splits` | 10 → 19 | `def-sheaf-hom`, `ex-cohomology-o-d-projective-line-all-d`, `lem-dual-locally-free-and-base-change`, `lem-invertible-sheaf-dual-tensor-inverse` | the $H^0$/$H^1$ twisting corollaries, exactness/stalk, tensor and global-section suppliers used by the direct induction |

After the sync, a full frontmatter-versus-manifest comparison over all 44 items
reports **0 mismatches** (checked 2026-10-01); `manifest-deps` exits 0 with
`44 item(s), 0 normalized, 0 error(s)`; and `item-dependency-levels check
--run frontier-37-owner-30` recomputes with no level change (exit 0). The
examples-page supplier `ex-cohomology-o-d-projective-line-all-d` is now
declared by no batch-7 item, so no B-page item is a dependency target of this
pair (the three `ai-generated` B statements remain non-dependency leaves).

### C3. Item decisions re-recorded (stale receipts refreshed)

The five manifest entries above changed bytes, and every receipt whose
closure contains one of them (directly or transitively) went stale. The
re-recordable receipts were re-recorded against current inputs with the full
examined dependency list = the current declared set, confidence 1:

| item | decision | evidence headline |
|---|---|---|
| `lem-nonzero-map-invertible-to-locally-free-injective` | `accept` | adapted affine charts over a domain; nonzero chart elements act injectively; vanishing propagates across the irreducible $X$; injectivity stalkwise; 16 examined IDs, 0 in-run deps |
| `lem-vector-bundle-p1-extension-splits` | `repaired` | direct induction on the number of line-bundle summands; base case $r=0$; $H^1(\mathcal O(n))=0$ for $n\ge-1$ from the published vanishing corollary; lift of the unit section; splitting off the minimal summand; 19 examined IDs, 0 in-run deps |
| `lem-smooth-curve-coherent-torsion-free-locally-free` | `repaired` | see C4.2; suppliers `def-algebraic-curve-over-field` and `thm-local-ring-smooth-curve-dvr` are closed items on disk |
| `lem-vector-bundle-p1-has-maximal-degree-line-subbundle` | `accept` | global generation gives sections in high degree; $H^0(E)$-comparison bounds degrees below; minimum yields a line subbundle of maximal degree; in-run supplier `lem-nonzero-map-invertible-to-locally-free-injective` accepted |
| `lem-vector-bundle-p1-maximal-line-quotient-locally-free` | `repaired` | see C4.1; in-run supplier `lem-vector-bundle-p1-has-maximal-degree-line-subbundle` accepted |

Current pair-local inventory: **44 receipts = 3 `accept` + 3 `repaired` +
38 `escalate`; 6 items closed** (the two `repaired` items above replace the
earlier single `repaired` label for `lem-vector-bundle-p1-extension-splits` in
the section above). The 38 escalations are owner-held. Thirty of them now show
`changed inputs require a current owner decision` (their receipt hash no
longer matches the closure, because batches 5/6 were edited after the
escalation was recorded and because of the manifest sync); eight are current.
`tools/step3-decisions.mjs record-item` refuses a non-owner re-record over an
escalation (`The owner must resolve this item decision`), so no escalation was
converted here and none was overridden.

### C4. Concrete defects found and repaired during this audit

1. **`lem-vector-bundle-p1-maximal-line-quotient-locally-free`, step 3.1.**
   The earlier proof used a cover whose alleged second open set was contained in
   `U`, so the sets did not cover `X`. The subsequent correction fixed the
   cover shape but still called the nonzero-germ locus of `m` open, and formed
   `W` using `X\setminus U` without proving that set open. *Current repair:*
   choose a point `x` with `m_x\neq0`, then an affine principal neighborhood
   `U` inside the relation domain and a standard chart. The annihilator stays
   nonzero by integrality. Its residue-zero locus `Z=V(a|_U)` is a proper
   closed subset of the integral curve `U`, hence finite, and its points are
   closed in `X`. Therefore `W=X\setminus Z` is open and `U\cup W=X`;
   `a` is a unit on the overlap, so `m'` and zero glue to a nonzero global
   section of `F(-b-1)`, contradicting step 2.1.
2. **`lem-smooth-curve-coherent-torsion-free-locally-free`, generic point.**
   The earlier proof called the generic local ring a DVR; at the generic point
   `O_{C,eta}=k(C)` is a field, and the library defines a DVR to be a
   non-field. [F1] now separates closed points (DVR by
   `thm-local-ring-smooth-curve-dvr`, PID by `cor-dvr-is-a-pid`) from the
   generic point (the function field, a field and hence a PID); step 1.2 uses
   the PID structure theorem in both cases.
3. **Further audit of the smooth-curve lemma, steps 1.1 and 1.3.** Step 1.1
   intersected the nonzero-germ locus of `m` with a nonempty open, although
   that locus need not be open. Step 1.3 used the zero-germ locus as if its
   complement were the unit locus, which fails at closed zeros, and inferred
   global closedness from closedness only inside `U`. *Repair:* choose any
   `x` with `m_x\neq0`; integrality makes the germ of the nonzero regular
   section `a` nonzero at that same point. For 1.3, choose an affine
   neighborhood `U`, use the residue-zero locus `Z=V(a)`, and apply
   `lem-curve-closed-subsets-finite` to show `Z` finite and closed in the
   whole curve. Then `C\setminus Z` is an open complement on which `a` is
   invertible along the overlap, so the local section and zero glue.
4. **Further audit of `lem-vector-bundle-p1-maximal-line-quotient-locally-free`,
   steps 4.1 and rank.** Step 4.1 asserted one power from each localization
   annihilated all of `M/N`; the supplier only gives a power for each
   element. Step 2.2 assumed `F` free before the proof had established it.
   *Repair:* for each `z\in M/N`, choose powers `f_i^{n_i(z)}` that kill
   `z`; since `(f_i)=A`, those powers still generate the unit ideal, so
   `z=0`. Defer rank additivity to step 4.2, after local freeness, and split
   the exact free stalk sequence at every point. The selected manifest and
   proof-contract entries now include `def-integral-scheme` and
   `lem-curve-closed-subsets-finite` for the curve argument.

The earlier C4 authoring checks preceded the further proof and contract edits
listed above. Those current inputs have not been re-reviewed or re-gated; root
owns the ordinary reviews and shared gates after the authorized repairs
stabilize.

### C5. Supplier status re-check and ledger input (2026-10-01)

- **Now authored and closed** in batches 5/6 (current accept/repaired
  receipts, statements re-read where used): `def-algebraic-curve-over-field`,
  `thm-local-ring-smooth-curve-dvr`, `thm-h0-structure-sheaf-proper-curve`,
  `def-arithmetic-genus-proper-curve`, `def-degree-divisor-proper-curve`,
  `def-divisor-support-positive-negative-parts`, `def-cartier-divisor`,
  `def-effective-cartier-divisor`, `def-order-codimension-one-rational-function`,
  `def-picard-group-scheme`, `def-rational-section-line-bundle`,
  `def-sheaf-total-quotient-rings`, `def-nonconstant-morphism-curves-degree`,
  `cor-birational-smooth-proper-curves-isomorphic`,
  `lem-proper-normal-curve-rational-function-map`,
  `thm-plane-curve-arithmetic-genus`.
- **Still owner-held escalations** (batch 6): `def-divisor-smooth-proper-curve`,
  `def-riemann-roch-space-of-divisor`, `lem-degree-effective-divisor-nonnegative`,
  `def-complete-linear-system`, `def-base-point-linear-system`,
  `lem-effective-divisors-sections-mod-scalars`,
  `lem-function-with-poles-defines-map-p1`,
  `thm-cartier-weil-divisors-curves-agree`,
  `thm-base-point-free-linear-system-morphism`.
- **Still unfinished** (batch 5, plus two batch-6 fibres): twelve IDs have no
  file under `items/` — `cor-degree-descends-picard-curve`,
  `cor-twist-exact-sequence-effective-divisor`,
  `def-pullback-cartier-divisor`, `lem-cartier-divisor-addition-tensor`,
  `lem-cartier-divisor-sheaf-invertible`,
  `lem-effective-cartier-divisor-exact-sequence`,
  `lem-pullback-cartier-divisor-line-bundle`,
  `thm-cartier-divisors-mod-principal-to-picard`,
  `thm-cartier-weil-isomorphism-locally-factorial`,
  `thm-line-bundle-rational-section-cartier-divisor`,
  `thm-principal-divisor-degree-zero-proper-curve`,
  `lem-global-section-effective-divisor` — and three more
  (`def-invertible-sheaf-of-cartier-divisor`,
  `def-linear-equivalence-cartier-divisors`,
  `lem-finite-flat-curve-fibre-degree`) are on disk without a current
  receipt. Every one of the 38 escalations of this pair depends, directly or
  transitively, on at least one of these.
- **Owner action flagged — `def-divisor-smooth-proper-curve`.** Its escalation
  of 2026-09-30T13:20 was recorded because the in-run supplier
  `def-weil-divisor-normal-noetherian-scheme` was mid-rewrite and failing
  precheck. That supplier now carries a current accept receipt, and all five
  declared in-run suppliers of `def-divisor-smooth-proper-curve`
  (`def-algebraic-curve-over-field`, `def-degree-divisor-proper-curve`,
  `def-divisor-support-positive-negative-parts`,
  `def-weil-divisor-normal-noetherian-scheme`,
  `thm-local-ring-smooth-curve-dvr`) are closed. Its escalation therefore
  appears stale and re-decidable by the owner; re-deciding it unblocks
  `lem-degree-effective-divisor-nonnegative` and is the first link of the
  chain that unblocks most of this pair's 38 escalations.
- **Ledger input refreshed.**
  `research/frontier-37-owner-30-batch-7.cross-batch-dependencies.json` has one
  review row per declared batch-7 cross-batch edge (204 rows; all reviewed).
  Five rows were upgraded to `verified` for the five closed-consumer edges
  whose supplier statements and uses were re-read here
  (`def-genus-euler-characteristic-curve` → `def-arithmetic-genus-proper-curve`,
  → `thm-h0-structure-sheaf-proper-curve`, → `def-algebraic-curve-over-field`;
  `lem-smooth-curve-coherent-torsion-free-locally-free` →
  `thm-local-ring-smooth-curve-dvr`, → `def-algebraic-curve-over-field`); 183
  rows stay `open` — 95 refreshed because the supplier now carries a current
  accept/repaired receipt while the consumer is still an owner-held escalation
  (use not yet re-read against the accepted statement), 23 refreshed because
  the supplier is on disk without a receipt, and 65 unchanged because the
  supplier is still an owner-held escalation or unauthored; 16 stale
  pre-splice rows remain `removed`.
  `frontier-dependency-ledger refresh --run frontier-37-owner-30` exits 0;
  `--require-reviewed` exits 1 on the single unreviewed edge
  `thm-logarithmic-unit-image-is-a-full-lattice` →
  `def-minkowski-embedding-of-a-number-field` (batch 3→2, another group).
- **Scope declines.** All 32 batch-7 decline rows in
  `research/frontier-37-owner-30-alpha-i-scope-decisions.json` are `stands`
  with row-specific evidence (the coverage low-yield warning's declines).
  `tools/scope-decisions.mjs check --run frontier-37-owner-30 --group i`
  still exits 1 solely on the 20 pending rows of batches 26/27, which belong
  to the other pairs sharing group i.

### C6. Gates re-run on the current state (2026-10-01)

| command | exit | result |
|---|---|---|
| `precheck.mts` on the 44 explicit item paths | 0 | `39 checked, 0 failing — all clean` (5 definition/remark files have no phase body) |
| `rendercheck.mjs` on the 44 items | 0 | `OK — 44 file(s)` |
| `rendercheck.mjs` on the 2 page files | 0 | `OK — 2 file(s)` |
| `content-policy.mjs` on the batch-7 pages | 0 | `44 scoped item(s), 0 error(s), 0 warning(s)` |
| `proof-contract.mjs --strict` | 0 | `0 error(s), 0 warning(s), 44/44 item(s) checked` |
| `citation-fidelity.mjs --fail-on-missing-quote` | 0 | 589 citations over 44 items; no missing quote (two heuristic widening candidates unchanged) |
| `boundary-audit.mjs --fail-on-contradicted --fail-on-template` | 0 | 352 rows, 48 `not_applicable`; no contradicted disposition, no template reuse |
| `manifest-deps.mjs` | 0 | `44 item(s), 0 normalized, 0 error(s)` |
| `coverage-checklist.mjs --require-destination` | 0 | 0 errors, 1 advisory (13/69 harvested, declines confirmed by the scope rows) |
| `item-dependency-levels.mjs check --run` | 0 | `813 item(s) checked across 60 page(s); maximum level 24` (the former global error on `thm-principle-of-descent-and-domination` is gone) |
| `validate-plan.mjs research/plan-spec.json` | 0 | acyclic and consistent; 367 planned pages still carry no item list (pre-splice) |
| `depcheck.mjs` | 1 (global) | findings name no batch-7 item file; four `[cited-not-in-deps]` findings name this pair's `lem-projective-line-divisors-classified-by-degree` from four batch-6 drafts (routed to that owner) |
| `fwdcheck.mjs --quiet` | 1 (global) | 41 findings, none naming a batch-7 item file |
| `extcheck.mjs` | 0 | OK — every recorded-not-proved statement remains a cited remark |
| `depsource.mjs --page <each of the two pages>` | 0 | 0 unresolved dependencies |
| `frontier-dependency-ledger refresh --run` | 0 | refreshed and deduplicated; all 204 batch-7 rows reviewed |
| `step3-decisions.mjs check --run --phase final` | 1 | run-wide open work: 457/813 accepted at the final re-run (443/813 at the first run this dispatch, as other pairs keep closing); pair-local 6 closed, 38 owner-held escalations |

### Handoff state (current)

- **Artifacts:** 44/44 item files on disk; both page files on disk; 44 proof
  contract entries (strict clean); batch-7 manifest and coverage present; this
  report present. No assigned item, page, contract or report artifact is
  missing.
- **Closed (6):** `lem-nonzero-map-invertible-to-locally-free-injective`
  (`accept`), `lem-vector-bundle-p1-extension-splits` (`repaired`),
  `lem-smooth-curve-coherent-torsion-free-locally-free` (`repaired`),
  `lem-vector-bundle-p1-has-maximal-degree-line-subbundle` (`accept`),
  `lem-vector-bundle-p1-maximal-line-quotient-locally-free` (`repaired`),
  `def-genus-euler-characteristic-curve` (`accept`).
- **Open (38):** owner-held escalations, each authored and contract-clean,
  each flagged in its item with the exact supplier IDs and consuming steps;
  the escalation map in the section above still lists the suppliers and steps.
  Their ledger rows were refreshed where the edge's state changed (95 rows for
  suppliers now accepted, 23 for suppliers on disk without a receipt), and 30
  of the 38 receipt hashes are stale (`changed inputs require a current owner
  decision`), so the owner should re-read the current closure when re-deciding
  each one.
- **Blocking chain:** the union of the unauthored/unreceipted batch-5 IDs and
  the nine batch-6 owner-held escalations in C5; the re-decidable first link
  is `def-divisor-smooth-proper-curve`.
- **Checks actually run:** the table in C6, plus `pathcheck` (warnings only)
  and `prosecheck` (0 errors, run-wide warnings). No `--owner` receipt and no
  judge/audit stamp was written by this dispatch.
