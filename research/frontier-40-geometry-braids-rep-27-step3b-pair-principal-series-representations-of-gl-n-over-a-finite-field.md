# Step 3b — pair `principal-series-representations-of-gl-n-over-a-finite-field` (dispatch report)

- Run: `frontier-40-geometry-braids-rep-27`
- Dispatch label: `step3b-pair-principal-series-representations-of-gl-n-over-a-finite-field-23062f9eab8624a9`
- Role: alpha-high scaffold auditor and item author
- A page: `principal-series-representations-of-gl-n-over-a-finite-field` (order 510.055, category `representation-theory`, 30 items)
- B page: `principal-series-representations-of-gl-n-over-a-finite-field-examples` (order 510.056, 5 items)
- Batch: 2 (`research/frontier-40-geometry-braids-rep-27-batch-2.pages.json`)
- Owned IDs: 30 A items (levels 0–11) and 5 B items (levels 7–12), dispatched order held in
  `research/frontier-40-geometry-braids-rep-27-step3b-pair-principal-series-representations-of-gl-n-over-a-finite-field-23062f9eab8624a9.task.md`.

## Entry state — owned IDs and open obligations

- All 35 item files are unwritten at entry; both pages unwritten.
- Scaffold inputs read at entry: `…-batch-2.pages.json`, `…-batch-2.coverage.json`,
  `…-batch-2.notes.md` (Step-1 record), `…-step3a-pair-…-…-93ae75c77d6da043.md`
  (scope review, decision **sufficient**), `…-step3a-review-…json`,
  `research/frontier-40-geometry-braids-rep-27-owner-principal-series/` (owner repair),
  `research/frontier-40-geometry-braids-rep-27-owner-authoring-direction.md`.
- Open obligations carried into authoring:
  1. Author all 35 items with complete proofs/definitions; register in manifests, coverage and contracts.
  2. Fix the Step-3a-reported scaffold defect in `thm-type-a-iwahori-hecke-presentation`
     (display (2) writes `q\,T_1` where the unit `q\cdot 1_H` is meant; make the unit explicit in (3)).
  3. Reconcile the batch-6 consumer edges (`def-generic-type-a-hecke-algebra`,
     `thm-standard-basis-of-the-generic-type-a-hecke-algebra`, page edge) as supplier; the
     consumer's own ledger file is edited by batch 6, not here.
  4. AC: `thm-tits-deformation-for-the-type-a-hecke-algebra` and its consumers carry
     `def-axiom-of-choice` and state its exact use; the rest of the pair must stay choice-free.
- Checkpoint log: per-item entries appended below as each item is written and checked.

## Per-item checkpoints

(entries appended in dependency order during authoring)

- `def-diagonal-torus-characters-and-weyl-action` (level 0) — written; precheck n/a,
  rendercheck OK, contract CLOSED (8 boundaries). Scaffold repair: the Weyl group is
  written as $N/T$ (the published [[def-weyl-group-and-length-for-finite-gl-n]] convention),
  not $N_G(T)/T$, which fails at $q=2$; statement otherwise preserved.
- `lem-lifting-idempotents-in-complete-deformation-algebras` (level 0) — written; 5
  numbered steps, precheck PASS, contract CLOSED. Dep dropped from the manifest row:
  `prop-units-in-an-adically-complete-ring` (not used; the series argument never needs units).
- `lem-trace-form-nondegeneracy-characterizes-semisimple-finite-dimensional-algebras`
  (level 0) — written; 4 steps, precheck PASS, contract CLOSED. Manifest deps repaired to the
  suppliers actually used (dropped `def-opposite-ring`, `thm-uniqueness-of-wedderburn-artin-data`,
  `thm-equivalent-characterizations-of-semisimple-modules` [AC]; added the trace, eigenvalue,
  FTA, matrix-composite and Jacobson-radical suppliers).
- `lem-constituent-multiplicities-under-a-semisimple-endomorphism-algebra` (level 0) — written;
  5 steps, precheck PASS, contract CLOSED. Manifest deps repaired (dropped the AC-using
  `thm-equivalent-characterizations-of-semisimple-modules`; added Wedderburn-Artin,
  simple-modules-over-semisimple-rings, FTA/eigenvalue suppliers).
- `def-generic-type-a-hecke-algebra` (level 0) — written; precheck n/a, contract CLOSED.
  Dictionary to the Soergel normalization made precise ($v_{\text{here}}=v_S^{-2}$).
- `def-principal-series-module-for-finite-gl-n` (level 1) — written; precheck n/a, contract
  CLOSED (pending). Dimension count given with the explicit $|G|,|B|$ computation; the
  Weyl-orbit relation is deferred to the endomorphism results instead of being asserted here.
- `thm-standard-basis-of-the-generic-type-a-hecke-algebra` (level 1) — written; 8 steps,
  precheck PASS, contract CLOSED. Proof adapted from the published Soergel-normalization
  argument to the RG-13 parameter, with the root-system inputs cited; deps extended by
  `def-type-a-reflection-realization-and-polynomial-ring`.
- `lem-formal-triviality-of-one-parameter-semisimple-algebras` (level 1) — written; 6 steps,
  precheck PASS, contract CLOSED. Uses the in-run idempotent-lifting lemma; `lem-trace-form…`
  dropped from deps (unused), `cor-square-matrix-invertible-iff-determinant-is-a-unit` added.
- `lem-mackey-support-for-homs-between-finite-principal-series` (level 2) — written; 5 steps,
  precheck PASS, contract CLOSED. The basis statement is recorded as one-dimensional summands
  well defined up to nonzero scaling (a wording repair of "canonical basis").
- `lem-spherical-principal-series-is-the-flag-permutation-module` (level 2) — written; 4 steps,
  precheck PASS, contract CLOSED.
- `thm-finite-hecke-algebra-as-convolution-corner-and-endomorphisms` (level 3) — written;
  6 steps, precheck PASS, contract CLOSED. dim H = n! proved by the double-coset spanning
  plus the nonvanishing σ-coefficient; the opposite algebra removed by the inversion
  anti-automorphism, so the later Hecke presentation is not assumed.
- `thm-weyl-stabilizer-controls-principal-series-endomorphisms` (level 3) — written; 6 steps,
  precheck PASS, contract CLOSED. I(χ)≅I(w·χ) proved by four inner-product computations,
  positive definiteness and multiplicity comparison.
- `cor-regular-finite-principal-series-is-irreducible` (level 4) — written; 4 steps, precheck
  PASS, contract CLOSED. Added the FTA/eigenvalue suppliers for the "division algebra = C" step.
- `def-bruhat-double-coset-basis-of-the-finite-hecke-algebra` (level 4) — written; definition
  with the cell-counting computation inline, precheck n/a, contract CLOSED. Basis and dim n!
  recorded here with the explicit double-coset argument.
- `lem-principal-series-endomorphisms-as-the-chi-idempotent-corner` (level 4) — written;
  6 steps, precheck PASS, contract CLOSED. Dropped `thm-endomorphism-ring-of-the-left-regular-module-is-opposite`
  (unused); added the Bruhat double-coset supplier.

- `def-standard-intertwining-operators-for-finite-principal-series` (level 5) — written;
  definition with the representative-independence computation inline, precheck n/a,
  contract CLOSED. Added suppliers `def-weyl-group-and-length-for-finite-gl-n` and
  `def-diagonal-torus-characters-and-weyl-action`; indexing $B_w=R_{\Theta_{w^{-1}}}$ and
  the torus compensation $\chi(t)^{-1}e_\chi n_we_\chi=e_\chi\dot we_\chi$ recorded as in
  the scaffold.
- `lem-length-increasing-hecke-products` (level 5) — written; 5 steps, precheck PASS, contract
  CLOSED. Proof route: free $B$-action orbit count on $B\dot uB\times B\dot vB$ (no
  Chevalley/Demazure input), subadditivity of inversion length proved inline from
  $\operatorname{Inv}(\sigma\tau)\subseteq\operatorname{Inv}(\tau)\cup\tau^{-1}(\operatorname{Inv}(\sigma))$.
  Deps as scaffold (all four used).
- `lem-rank-one-hecke-quadratic-relation` (level 5) — written; 4 steps, precheck PASS,
  contract CLOSED. Self-contained route: $\dot sb\dot s$ has only the possibly nonzero
  below-diagonal entry $b_{i,i+1}$; the nonzero case is matched to the cell $B\dot sB$ by
  the published southwest-rank criterion, giving $(B\dot sB)^2\subseteq B\cup B\dot sB$;
  then orbit counts $m_1=q$, $m_2=q-1$ and $T_s^2=qT_1+(q-1)T_s$. Deps extended by
  `def-weyl-group-and-length-for-finite-gl-n`, `def-symmetric-group`.
- `lem-semisimplicity-and-trace-form-for-the-finite-spherical-hecke-algebra` (level 5) —
  written; 5 steps, precheck PASS, contract CLOSED. Deps repaired: dropped Maschke and the
  AC-using submodule theorem (unused), added `def-semisimple-module` and
  `thm-simple-modules-over-semisimple-rings`.
- `lem-equal-coordinate-rank-one-principal-series-of-gl2-fq` (level 6) — written; 8 steps,
  precheck PASS (canonical numbering 1.1–5.1), contract CLOSED. Route: dim I(χ)=q+1 and
  Maschke; explicit 1-dim submodule $a^{-1}\circ\det\cong a\circ\det$; dim End=2;
  multiplicity/simplicity argument gives $I(1)=1\oplus\mathrm{St}$, then the twist
  $I(\chi)\cong I(1)\otimes(a\circ\det)$ gives the general splitting; $B_2$-fixed vectors and
  the $B_s$-eigenvalues $q,-1$ proved directly. Deps extended by `def-tensor-product-...`,
  determinant suppliers, `cor-schurs-lemma-...`, `thm-bruhat-decomposition-...`.
- `lem-standard-intertwiners-form-a-basis-of-the-principal-series-endomorphism-algebra` (level 6)
  — written; 4 steps, precheck PASS, contract CLOSED. Deps extended by
  `thm-bruhat-decomposition-...`, `prop-endomorphisms-form-a-ring`,
  `thm-group-ring-is-a-unital-algebra-with-basis-g`; mixed corner
  $e_\chi\mathbb C[G]e_{\chi'}$ basis with vanishing iff $\chi=w\cdot\chi'$ proved with
  the coefficient-of-$\dot w$ computation.
- `thm-type-a-iwahori-hecke-presentation` (level 6) — written; 5 steps, precheck PASS,
  contract CLOSED. **Step-3a defect repaired**: generators are now denoted $T_{s_i}$ (so
  $T_1=e_B$ stays the unit) and the quadratic relation reads
  $T_{s_i}^2=(q-1)T_{s_i}+q\cdot1_H$; the abstract presentation $H(n)$ has an explicit unit
  and the relation $\tau_i^2=(q-1)\tau_i+q\cdot1$. Proof: generation from
  `lem-length-increasing-hecke-products`; relations from rank-one and Bruhat-cell products;
  presentation by base change of the free rank-$n!$ generic algebra
  (`thm-standard-basis...`) using right exactness of $\otimes$; surjectivity plus dimension
  equality. Deps added `thm-right-exactness-of-tensor-products`.
- `lem-length-additive-products-of-standard-intertwiners` (level 7) — written; 7 steps,
  precheck PASS, contract CLOSED. Direct corner computation in $\mathbb C[G]$:
  $e_\eta^G=e_{U_P}\prod_re_r$ with $e_{U_P}$ centralising $\mathbb C[L]$; block corner
  product rule transferred from the spherical one via the group-algebra automorphism
  $g\mapsto(a_r\circ\det)(g)^{-1}g$; then $\Theta_{v^{-1}}\Theta_{u^{-1}}=\Theta_{(uv)^{-1}}$
  for length-additive $u,v\in W_\eta$, hence $B_uB_v=B_{uv}$ and $T_uT_v=T_{uv}$; transport
  to arbitrary $\chi$ through the sorting isomorphism, with the non-identification caveat
  (inversion length is not conjugation-invariant). Deps extended by
  `thm-group-ring-...`, `thm-determinant-of-a-triangular-matrix`, `def-principal-series-...`.
- `prop-group-algebra-and-finite-field-specializations-of-the-generic-hecke-algebra`
  (level 7) — written; 4 steps, precheck PASS, contract CLOSED. (1) $v\mapsto1$ via base
  change of the presentation + Coxeter presentation of $S_n$ + dimension count;
  (2) $v\mapsto q$ quoted directly from `thm-type-a-iwahori-hecke-presentation`;
  (3) semisimplicity from Maschke and `lem-semisimplicity...`. Deps added
  `thm-the-symmetric-group-has-the-coxeter-presentation`,
  `cor-dimension-of-a-finite-group-algebra`, `thm-masckhes...` (Maschke),
  `thm-right-exactness-of-tensor-products`.
- `ex-two-dimensional-hecke-algebra-for-gl2-fq` (B page, level 7) — written; 5 steps,
  precheck PASS, contract CLOSED. Basis $\{T_1=e_B,T_s\}$, quadratic relation, presentation
  $\mathbb C[T]/(T^2-(q-1)T-q)$, splitting $H\cong\mathbb C\oplus\mathbb C$ via CRT with
  distinct roots $q,-1$, and $\dim\operatorname{End}_G(\mathbb C[\mathbb P^1])=2$.
- `lem-rank-one-hecke-parameter-for-equal-torus-characters` (level 8) — written; 6 steps,
  precheck PASS (canonical order 1.1,1.2,2.1,3.1,4.1,5.1), contract CLOSED. Block quadratic
  relation transferred through $g\mapsto a_r(\det g)^{-1}g$; raw eigenvalues
  $a(-1)q,-a(-1)$ and normalised $T_s^2=(q-1)T_s+q\,\mathrm{id}$; $\lambda_w=\prod
  a_r(-1)^{-\ell(w_r)}$; $q=3$ nontrivial-character failure recorded.
- `thm-tits-deformation-for-the-type-a-hecke-algebra` (level 8) — written; 8 steps,
  precheck PASS, contract CLOSED (27/27). Full Losev six-step argument: semisimple locus
  $Y=D(fd)$ from the trace-form determinant; formal trivialization at $x$ via
  `lem-formal-triviality...`; constructible incidence image $E_x$; $E_x$ infinite by
  Nullstellensatz + the formal point; cofinite constructible subsets of the line intersect;
  application to $\mathbb C[v^{\pm1}]\otimes H_v(n)$ at $v=1,q$. AC declared and confined to
  the two published suppliers.
- `cor-type-a-finite-hecke-algebra-is-noncanonically-isomorphic-to-csn` (level 9) — written;
  4 steps, precheck PASS, contract CLOSED. $H\cong\mathbb C[S_n]$ from Tits; no
  basis-preserving isomorphism for $n\ge2$, $q\ne1$ (quadratic relation would force
  $s_i=-1$); non-canonicity and numerical invariants only. AC declared and inherited.
- `thm-general-finite-principal-series-endomorphism-algebra` (level 9) — written; 5 steps,
  precheck PASS, contract CLOSED (29/29). Sorted case: $\beta:H_q(W_\eta)=\otimes_rH_q(S_{n_r})\to
  \mathrm{End}_G(I(\eta))$ built from the relations, surjective since $\{B_w\}$ spans and
  $\dim=\prod n_r!=|W_\eta|$; Hecke basis $T_w=\lambda_wB_w$; semisimple via
  `lem-constituent-multiplicities`; $\cong\mathbb C[W_\chi]$ via Tits (AC declared, confined);
  transport to unsorted $\chi$. Deps trimmed (dropped unused Harish-Chandra suppliers).
- `thm-spherical-principal-series-constituents-of-gl-n-fq` (level 10) — written; 4 steps,
  precheck PASS, contract CLOSED (30/30). Maschke + `lem-constituent-multiplicities` +
  Tits + Specht/hook-length give
  $\mathbb C[G/B]\cong\bigoplus_{\lambda\vdash n}V_\lambda^{\oplus f^\lambda}$ and
  $\mathrm{End}_G(\mathbb C[G/B])\cong\prod M_{f^\lambda}(\mathbb C)$. AC declared, carried
  from Tits.
- `cor-constituents-of-general-principal-series-for-finite-gl-n` (level 11) — written;
  4 steps, precheck PASS, contract CLOSED (31/31). Constituents indexed by tuples
  $(\lambda^{(r)})$ with multiplicity $\prod_rf^{\lambda^{(r)}}$ and
  $\mathrm{End}\cong\prod M_{\prod f}(\mathbb C)$; regular case irreducible, trivial case
  matches the spherical hook-length multiplicities. AC declared.

### Remaining B-page checkpoints

- `ex-q-equals-two-torus-boundary` (B page, level 11) — written; 4 steps, precheck
  PASS, contract CLOSED. $q=2$ collapse of the torus ($\widehat T=\{1\}$,
  $W_\chi=S_n$, regular case empty for $n\ge2$ but vacuously nonempty for $n=1$),
  with $n!$, the partition multiplicities $f^\lambda$ and the Tits isomorphism
  retained; AC declared and confined to the Tits-deformation supplier.
- `ex-trivial-and-steinberg-splitting-on-p1-fq` (B page, level 11) — written;
  4 steps, precheck PASS, contract CLOSED. $\mathbb C[\mathbb P^1(\mathbb F_q)]=
  \mathbf 1\oplus\operatorname{St}$, $\dim\operatorname{St}=q$, multiplicity one
  each, $T_s$-eigenvalues $q$ and $-1$, partition labels $(2)$ and $(1,1)$ under
  the noncanonical Tits parametrisation; AC declared and inherited.
- `ex-regular-and-singular-torus-characters-in-gl3-fq` (B page, level 12) —
  written; 5 steps (canonical order 1.1–1.4, 2.1, 3.1), precheck PASS, contract
  CLOSED. Cases (a)–(c) for $\operatorname{GL}_3(\mathbb F_q)$ with dimensions
  $[G:B]=(q+1)(q^2+q+1)$, endomorphism dimensions $1,2,6$ and multiplicities
  $1,1$ and $1,2,1$; the twist isomorphism $I(a,a,a)\cong I(1)\otimes(a\circ\det)$
  is proved as step 1.4 by an explicit $\Phi$; AC declared and confined to Tits.
- `rem-tits-isomorphism-is-noncanonical` (B page, level 12) — written; remark,
  precheck n/a, contract CLOSED. Noncanonicity of the Tits isomorphism and of the
  partition labelling, the failure of any basis-preserving identification at
  $q\ne1$ ($s_i=-1$ contradiction), and the canonical numerical invariants only;
  AC declared and inherited.

### Page checkpoints

- `principal-series-representations-of-gl-n-over-a-finite-field` (A page) —
  written (draft): frontmatter lists the 30 items in dependency order and, after
  the repair below, `requires` with the 15 published prerequisite pages; the
  prose states the development from characters and the principal series through
  the idempotent corner, the finite Hecke algebra, the generic algebra, Tits
  deformation and the constituent parametrisation. `rendercheck` OK;
  `item-dependency-levels check` exit 0; `validate-plan research/plan-spec.json`
  OK; `manifest-integrity` no scope drift (the page is the batch-2 A page and is
  listed in the 3a baseline scopes).
- `principal-series-representations-of-gl-n-over-a-finite-field-examples`
  (B page) — written (draft): the five leaf items, `requires` = the A page;
  no non-B item depends on any of its items (B-leaf rule respected);
  `rendercheck` OK and content-policy clean.

## Post-authoring audit: repairs and escalation

After the per-item authoring the run-wide gates were re-run against the finished
pair (`fwdcheck`, `depcheck`, `prosecheck`, `depsource`, `pathcheck`, `extcheck`,
`precheck`, `rendercheck`, coverage, source-fetch, manifest-deps,
item-dependency-levels, and `validate-plan`). Two defects in the pair were found,
repaired below as far as the pair's own inputs allow, with the irreducible
reading-order residual escalated to the owner.

**Defect A — forward dependencies on a later page (reading-order violation).**
`def-generic-type-a-hecke-algebra` and
`thm-standard-basis-of-the-generic-type-a-hecke-algebra` declared dependencies
homed on `type-a-soergel-bimodules-and-hecke-categorification` (plan order 759,
strictly later than this page's order 510.055):
`lem-type-a-reduced-words-are-connected-by-braid-moves`,
`def-type-a-hecke-algebra-in-soergel-normalization`,
`def-type-a-reflection-realization-and-polynomial-ring` and
`lem-type-a-hecke-standard-basis-for-soergel-comparison`. `fwdcheck` reported
five `forward-undeclared` errors, and a validation on a copy of the plan with
this batch's item dependencies and manifest `requires` spliced in makes
`validate-plan` refuse the batch with `undeclared-prereq` for that page — which
cannot be added to this page's `requires`, since plan order must stay
topological for `requires`.

Repairs made (the definition item is now fully clean):

- `def-generic-type-a-hecke-algebra`: dropped the two forward dependencies and
  the unused Coxeter-presentation dependency; $T_w$ is now defined from a chosen
  reduced expression, with the independence of that choice and the basis
  property discharged by the same-page standard-basis theorem through
  `justified_by` (the sanctioned well-definedness mechanism; depcheck's
  `justification-backward` holds because that theorem depends on this
  definition); the Soergel-normalization dictionary moved to a `## Remarks`
  section as a plain-text orientation note naming the later item (no wikilink:
  a declared `forward_refs` edge to that page would close a page cycle with the
  load-bearing dependencies of the theorem below, which the cycle detector
  `stack-cycle` reports). The item no longer links or depends on any later page,
  and it passes `fwdcheck` and `depcheck` cleanly.
- `thm-standard-basis-of-the-generic-type-a-hecke-algebra`: the Soergel
  comparison (formerly fact [F5], cited in step 6.1) moved to `## Remarks` as a
  plain-text orientation note for the same cycle reason;
  `def-weyl-group-and-length-for-finite-gl-n` added to `deps` for the
  statement's length convention (this also clears depcheck's
  `cited-not-in-deps` warning); the well-definedness attribution was
  re-localized: [F1] now only records the presentation and the notation, and
  the independence of $T_w$ from the reduced word is proved in step 4.1 from
  [F2] and tagged as such (step 5.2 cites that independence and carries [F2]).
  Its three remaining forward links are the escalation itself.
- `research/frontier-40-geometry-braids-rep-27-batch-2.proof-contracts.json`
  updated accordingly (definition boundary evidence reworded; the [F5] citation
  removed; [F5] removed from the inputs of derivation d61).

**Escalation — `thm-standard-basis-of-the-generic-type-a-hecke-algebra`.**
The proof genuinely rests on two published items homed on the later Soergel
page: [F2] `lem-type-a-reduced-words-are-connected-by-braid-moves` (the type-A
word property, used for the well-definedness of $T_w$ in steps 4.1 and 5.2 and
in the multiplication rule) and [F3]/[F4]
`def-type-a-reflection-realization-and-polynomial-ring` (the type-A reflection
realization and the ascent/descent sign criterion $\ell(xs_i)=\ell(x)\pm1$,
used in 1.1, 2.2, 3.1, 4.1 and 5.2). These uses are load-bearing for a theorem,
so `forward_refs` cannot absorb them. The published earlier
`lem-finite-weyl-strong-exchange-and-deletion` (order 510.0002) supplies the
exchange/deletion facts for a geometric Weyl group, but the bridge from it to
$S_n$ with permutation inversion length is exactly the later reflection item.
The item is fully authored and locally checked (precheck PASS, contract CLOSED,
all of its consumers keep the same statement); its decision is recorded
`escalate` (owner-held) with the following remedies. The recorded escalation
row was written before the two final revisions of the item (removing the
optional `forward_refs` declaration that caused the page cycle, and
re-localizing the well-definedness citation to step 4.1), so the decision row
now reads "changed inputs require a current owner decision"; the row's full
reason, reproduced here, is the escalation, and the load-bearing dependencies
it names are unchanged.

- Remedy (i): re-home `lem-type-a-reduced-words-are-connected-by-braid-moves`
  and `def-type-a-reflection-realization-and-polynomial-ring` (optionally the
  two further Soergel-page items named above) to a page earlier than 510.055
  with an owner re-home receipt.
- Remedy (ii): authorize a local prerequisite item on this A page proving the
  type-A word property and the type-A length dictionary from the published
  earlier strong-exchange lemma.

**Defect B — incomplete page prerequisite registration (repaired).** Six
published pages used by item dependencies were absent from the A page's
`requires` (hence from the closure the splice requires): 
`modular-representations-and-projective-covers` (150.001, Jacobson-radical
suppliers of the trace-form lemma),
`braided-and-symmetric-monoidal-categories` (365.029, Coxeter presentation of
$S_n$), `classical-affine-varieties-coordinate-rings-morphisms-and-rational-maps-interface`
(366.0403), `affine-algebraic-sets-and-coordinate-rings` (366.041) and
`dimension-constructible-images-and-dimensions-of-fibres` (366.057) — the three
published suppliers of the Tits deformation — and
`finite-weyl-invariants-bruhat-and-kostant-harmonics` (510.0002, strong
exchange). All six are earlier than 510.055; they are now declared in the A-page
row of `research/frontier-40-geometry-braids-rep-27-batch-2.pages.json` and in
both library page frontmatters (the B page declares its A page). With these
`requires` in place the plan-copy validation reports exactly one remaining
`undeclared-prereq`: the Soergel page, i.e. the escalation above. The six
additions are a `requires` amendment and will need the splice's requires
adjudication (`splice-plan --accept-requires`) at Step 4, like any such change.

**Gate status after the repairs** (pair-scoped unless noted).

- explicit-path `precheck`: 29 checked (definitions/remarks are n/a), 0 failing.
- `rendercheck`: OK across 25829 files. `prosecheck`: OK.
- `proof-layout` (all 35 item paths, batched): 35 items, 151 steps, 0 defects.
- `proof-contract --strict`: 0 errors, 0 warnings, 35/35 items;
  `boundary-audit --fail-on-contradicted --fail-on-template`: none contradicted.
- `item-dependency-levels check --run`: exit 0.
- `content-policy` item mode over all 27 manifests: 895 items, 0 errors;
  batch-2 scoped: 35 items, 0 errors.
- `manifest-deps` (batch 2): 35 items, 0 errors.
- `coverage-checklist --require-destination` (batch 2): 0 errors, 0 warnings;
  `source-fetch-check` (batch 2): 6/6 sources fetch-verified, 6/6 resolved.
- `validate-plan research/plan-spec.json`: OK (pre-splice; the batch's items are
  not yet in the plan, so the refusal above is expected only at Step 4).
- `fwdcheck` filtered to this pair: 3 errors remain, all the escalation
  (`[[lem-type-a-reduced-words-are-connected-by-braid-moves]]` once and
  `[[def-type-a-reflection-realization-and-polynomial-ring]]` twice in
  `thm-standard-basis-of-the-generic-type-a-hecke-algebra`). All other 35-item
  findings are gone, and the `stack-cycle` page-cycle detector is clean for the
  pair (an intermediate revision that declared the orientation links in
  `forward_refs` produced a `principal-series -> type-a-soergel ->
  principal-series` cycle with the load-bearing deps; the final revision keeps
  those orientation notes as plain text instead).
- `depcheck`: 0 findings for this pair's items (the run-wide FAIL is other
  pairs' `b-leaf-content` rows); `extcheck`: this pair clean (the run-wide single
  error is `cex-no-claim-of-resolution-in-positive-characteristic`, another
  pair's item).
- Run-level red state not owned by this pair: `splice-verify` fails on batch 9's
  in-flight additions, and `scope-decisions check` reports 344 pending
  Step-8 decline decisions run-wide, 5 of them on this A page (the deliberate
  exclusions recorded by the Step-3a review: DM Theorem 10.11, DM Example 11.13,
  DM Theorem 11.14, the Jucys–Murphy bijection, and the Kazhdan–Lusztig
  sections). Those are Step-8 decline decisions, not Step-3b item decisions, so
  they are reported rather than written here.

**Item decisions after the repairs.** All 35 original scaffold IDs were
re-recorded against the current inputs with confidence 1: 30 `repaired` and 4
`accept` (`def-bruhat-double-coset-basis-of-the-finite-hecke-algebra`,
`lem-spherical-principal-series-is-the-flag-permutation-module`,
`lem-length-increasing-hecke-products`, `rem-tits-isomorphism-is-noncanonical`),
and 1 `escalate`
(`thm-standard-basis-of-the-generic-type-a-hecke-algebra`). `step3-decisions
check --phase final` confirms 34 of the 35 are closed and the one escalation is
owner-held. No items were added or removed: all 35 IDs are present in the
pre-author scaffold inventory, so the auditor-created certification class is
empty for this pair.

## Handoff

- **Completed IDs:** the 30 A-page items (levels 0–11) and the 5 B-page items
  (levels 7–12) listed in the dispatch, all authored as `items/<id>.md`, plus
  both library pages (`library/representation-theory/principal-series-representations-of-gl-n-over-a-finite-field.md`
  and `…-examples.md`) and the batch-2 manifest, coverage, proof contracts and
  item decisions.
- **Decisions:** 34 closed (`repaired`/`accept`, confidence 1); one owner-held
  escalation (`thm-standard-basis-of-the-generic-type-a-hecke-algebra`) with the
  exact reliance, consuming steps and remedies recorded above and in
  `research/frontier-40-geometry-braids-rep-27-step3b-review-thm-standard-basis-of-the-generic-type-a-hecke-algebra.json`.
- **Checks actually run:** the list in the gate-status paragraph above
  (all commands named there were executed in this session against the final
  files, the batched `proof-layout` last).
- **Added suppliers:** no new items; six published prerequisite pages added to
  the A page's `requires` (named in Defect B) and the B page's `requires`
  made explicit.
- **Published concerns:** the two Soergel-page dependencies of the escalated
  theorem (evidence: `fwdcheck` output and the plan-copy `undeclared-prereq`
  refusal; confidence high); the run-level red gates listed above (batch-9
  splice drift; the 5 Step-8 decline decisions on this page).
- **Open obligations:** resolve the escalation (remedy (i) or (ii)); obtain the
  Step-4 requires adjudication for the six added prerequisites; batch 6's 12
  open ledger rows against this pair's suppliers
  (`def-generic-type-a-hecke-algebra`,
  `thm-standard-basis-of-the-generic-type-a-hecke-algebra` and the A page) stay
  open on the consumer side — batch-2's own cross-batch input is `[]` and
  correct, since this pair consumes no in-run batch item.
