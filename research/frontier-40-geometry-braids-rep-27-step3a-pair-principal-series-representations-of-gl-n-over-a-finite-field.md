# Step 3a scope review — principal-series-representations-of-gl-n-over-a-finite-field

- Run `frontier-40-geometry-braids-rep-27` (batch 2), role alpha, label
  `step3a-pair-principal-series-representations-of-gl-n-over-a-finite-field-93ae75c77d6da043`.
- A page `principal-series-representations-of-gl-n-over-a-finite-field` (order 510.055,
  category `representation-theory`, 30 manifest items).
- B page `principal-series-representations-of-gl-n-over-a-finite-field-examples`
  (order 510.056, 5 items); companion pointers A->B and B->A are consistent and both
  pages sit alone in batch 2.
- Decision: **sufficient**, recorded as a non-owner review with
  `node tools/step3-decisions.mjs record-scope --run frontier-40-geometry-braids-rep-27
  --page principal-series-representations-of-gl-n-over-a-finite-field --decision sufficient`.
  Receipt: `research/frontier-40-geometry-braids-rep-27-step3a-review-principal-series-representations-of-gl-n-over-a-finite-field.json`.
- Scope only: this review decides whether the planned definitions, results and examples
  cover the intended subject. It is not item or proof approval, and it edits no scaffold,
  item, plan row or owner record.

## Evidence read

| Artifact | Use |
|---|---|
| `research/frontier-40-geometry-braids-rep-27-batch-2.pages.json` | Full A inventory (30 items) and B inventory (5 items): every statement, kind, `deps`, page `requires`, companion pairing |
| `research/frontier-40-geometry-braids-rep-27-batch-2.coverage.json` | Six source records with locators, fetch stamps and 52 individually disposed source results |
| `research/frontier-40-geometry-braids-rep-27-batch-2.notes.md` | Step-1 scaffold record: design reconciliation, the eight added helper lemmas, the local general-character normalization, Tits/AC route, scoped checks |
| `research/frontier-40-geometry-braids-rep-27-batch-2.cross-batch-dependencies.json` (empty) and `…-batch-6.cross-batch-dependencies.json` (9 open edges) | This pair needs nothing outside batch 2; batch 6 declares its consumer edges to three of this pair's items |
| `research/plan-representation-theory-groups-track.md` RG-13 (L829–887), §11 row (L2329), §12 rows (L2427–2431), §3/§13 boundary rows (L157–178, L2554) | Controlling prose design: role "induction from a Borel, intertwiners, Iwahori–Hecke algebra", all 27 designed rows, the recorded single-general-$n$-treatment qualification, deliberate exclusions |
| `research/plan-spec.json` rows 510.055/510.056 | Identity, kind, order, category, companion, `requires` (item arrays are manifest-owned) |
| `research/frontier-40-geometry-braids-rep-27-alpha-step1-drift.md` (principal-series entry) and `…-drift-evidence.json` | Verdict `no-drift`; all nine declared prerequisite pages precede the consumer; "No prerequisite is missing; source scope remains as recorded in RG-13" |
| `research/frontier-40-geometry-braids-rep-27-owner-principal-series/` (`review.md`, `changes.json`, `checks.json`, `dependency-check.json`, `source-and-supplier-evidence.json`) | Owner Step-1 repair record closing the two flagged batch-2 uncertainties (parameter normalization, Tits supplier applicability), with exact supplier claims/hashes |
| `research/frontier-40-geometry-braids-rep-27-owner-authoring-direction.md` | Owner direction: preserve each pair's complete promised claim scope; in-run dependencies allowed |
| All 91 distinct `deps` targets on disk | Existence, publication status and page placement of every supplier item |
| Load-bearing sources re-fetched/re-hashed this session (below) | Independent byte- and statement-level check of the scope-critical source claims |

## Inventory against the prose design

RG-13 designs 27 rows: 22 A items and 5 B items. All 27 are present in batch 2 with the
designed ids and kinds, in design order:

- A: `def-diagonal-torus-characters-and-weyl-action`,
  `def-principal-series-module-for-finite-gl-n`,
  `lem-mackey-support-for-homs-between-finite-principal-series`,
  `thm-weyl-stabilizer-controls-principal-series-endomorphisms`,
  `cor-regular-finite-principal-series-is-irreducible`,
  `def-standard-intertwining-operators-for-finite-principal-series`,
  `lem-spherical-principal-series-is-the-flag-permutation-module`,
  `thm-finite-hecke-algebra-as-convolution-corner-and-endomorphisms`,
  `def-bruhat-double-coset-basis-of-the-finite-hecke-algebra`,
  `lem-length-increasing-hecke-products`, `lem-rank-one-hecke-quadratic-relation`,
  `thm-type-a-iwahori-hecke-presentation`, `def-generic-type-a-hecke-algebra`,
  `thm-standard-basis-of-the-generic-type-a-hecke-algebra`,
  `prop-group-algebra-and-finite-field-specializations-of-the-generic-hecke-algebra`,
  `lem-semisimplicity-and-trace-form-for-the-finite-spherical-hecke-algebra`,
  `lem-lifting-idempotents-in-complete-deformation-algebras`,
  `thm-tits-deformation-for-the-type-a-hecke-algebra`,
  `cor-type-a-finite-hecke-algebra-is-noncanonically-isomorphic-to-csn`,
  `thm-spherical-principal-series-constituents-of-gl-n-fq`,
  `thm-general-finite-principal-series-endomorphism-algebra`,
  `cor-constituents-of-general-principal-series-for-finite-gl-n`.
- B (unchanged): `ex-two-dimensional-hecke-algebra-for-gl2-fq`,
  `ex-trivial-and-steinberg-splitting-on-p1-fq`,
  `ex-regular-and-singular-torus-characters-in-gl3-fq`,
  `ex-q-equals-two-torus-boundary`, `rem-tits-isomorphism-is-noncanonical`.

Eight added local lemmas close the promised proof route and extend no claim beyond the
design: `lem-trace-form-nondegeneracy-characterizes-semisimple-finite-dimensional-algebras`,
`lem-constituent-multiplicities-under-a-semisimple-endomorphism-algebra`,
`lem-principal-series-endomorphisms-as-the-chi-idempotent-corner`,
`lem-standard-intertwiners-form-a-basis-of-the-principal-series-endomorphism-algebra`,
`lem-length-additive-products-of-standard-intertwiners`,
`lem-equal-coordinate-rank-one-principal-series-of-gl2-fq`,
`lem-rank-one-hecke-parameter-for-equal-torus-characters`, and
`lem-formal-triviality-of-one-parameter-semisimple-algebras`. Each designed row keeps
its planned role: construction and dimension of $I(\chi)$; Mackey support and
$\dim\operatorname{End}_G I(\chi)=|W_\chi|$; the regular irreducibility criterion; the
spherical Hecke presentation and Tits deformation; spherical constituents with
multiplicities $f^\lambda$; the arbitrary-character Hecke endomorphism algebra with the
explicit parameter $q$; and tuple-of-partitions constituents with multiplicities
$\prod_r f^{\lambda^{(r)}}$. The subject is covered from definition through the
commissioned stopping point; nothing in the design is dropped, renamed or re-kinded.

## Source coverage

The page has six fetch-verified sources and 52 individually disposed source results
(no drops). I re-fetched five and re-hashed the sixth local copy this session; every
byte count and sha256 prefix matches the coverage stamp:

| Source | Stamp (bytes; sha256-16) | Load-bearing content read |
|---|---|---|
| Dudas–Michel, *Lectures on Finite Reductive Groups…* | 668990; `843c1774f1dcb2e6` | §10.3 Prop 10.8 (series ↔ Irr H(L,N)); §11.3 Lemmas 11.8–11.10, Theorem 11.11 (Coxeter system, parameters powers of $q$, scalars $\lambda_w$, $H_q(W(L,N)^F,S)\cong H(L,N)$ over $\mathbb C$), Corollary 11.12 (Irr$(G^F|(L,N))\leftrightarrow$ Irr$_\mathbb C W(L,N)^F$) |
| Taylor, *Finite Reductive Groups* | 651844; `dcf3e205c9d2944c` | Exercise 5.11 ($q_s=q$ for $\mathrm{GL}_n$ with standard Frobenius), Prop 5.16 (two specializations), Thm 5.18/Cor 5.19 (Tits deformation), Thm 5.21 and Example 5.22 (bijection Irr$(W^F)\to$ Irr$(G\mid R_T^G(M))$, multiplicities = simple dimensions, hook-length for $\mathrm{GL}_n$), Remark 5.23 (non-canonical bijection) |
| Losev, *Lecture 8* | 85489; `da632cf4aaab4539` | Theorem 2.6 with its complete six-step proof (Tits deformation for free finite-rank algebras; idempotent lifting and the formal-to-Zariski step the scaffold repairs) |
| Oi, *Representation Theory of Finite Groups of Lie Type* | 541729; `674f86c96ade70f8` | Prop 2.7 and Prop 2.8 with complete proofs: rank-two irreducibility, isomorphism classes, $\chi\times\chi\cong(1\times1)\otimes(\chi\circ\det)$, constituent degrees $1,q$ |
| Curtis, *Representations of Hecke Algebras* | 3160676; `44809fc53e1e09de` | Survey corroboration for the Hecke endomorphism identification (Thm 1.7) and specialization/iso results (3.1–3.3); not promoted into an unread parameter formula |
| Milne, *Algebraic Geometry* | 2833201; `8222dff2574a5afc` | Strong Nullstellensatz (Thm 2.16), constructible sets (Prop 9.6), constructibility of images (Thm 9.7) backing the Tits formal-to-classical bridge |

The design records that only Dudas–Michel is a full general-$n$ treatment for arbitrary
torus characters; Taylor/Losev independently cover the spherical sub-case, and Oi is the
rank-two check. That qualification is honoured: the scaffold does not claim Taylor proves
the nontrivial-character case, and it pins the specialization $q_s=q$ by a local
determinant-twist computation (`lem-rank-one-hecke-parameter-for-equal-torus-characters`)
rather than by an unread degree-quotient formula — I verified that Dudas–Michel prints
the Coxeter/parameter structure but not the quotient formula, exactly as the owner repair
states. The plan's deliberate exclusions (Deligne–Lusztig classification, Dudas–Michel
Thm 10.11, Example 11.13, Thm 11.14, the Jucys–Murphy natural bijection, Oi's cuspidal
section) are outside the commissioned principal-series stopping point and are not
omissions of the pair's subject.

## Dependencies and unmet prerequisites

- The two pages have 91 distinct dependency targets: 60 resolve to published items on
  disk, 31 to items scaffolded inside batch 2 itself. There are no unresolved targets,
  no cross-batch suppliers for this pair, and every one of the nine A-page `requires`
  pages is published; the B page's only `requires` is its in-run companion A page.
- All published suppliers keep the hypotheses the consumers need where checked:
  Harish–Chandra adjunction and the parabolic Mackey formula are stated for standard
  parabolics of $\mathrm{GL}_n(\mathbb F_q)$ over $\mathbb C$; `def-conjugate-representation-and-conjugate-character`
  matches the twist convention $^\rho X$ used in the Mackey item; the Chevalley and
  strong Nullstellensatz suppliers explicitly assume AC and an algebraically closed
  field, and AC is carried through Tits deformation and its consumers as `def-axiom-of-choice`
  deps; Maschke, Specht/hook-length and Wedderburn suppliers are published, judged items.
- Downstream: batch 6 declares nine open edges to this pair (page plus
  `def-generic-type-a-hecke-algebra`, `thm-standard-basis-of-the-generic-type-a-hecke-algebra`);
  the consumer statements use the same $T_i^2=(v-1)T_i+v$ normalization defined here, so
  the interface matches. Those edges remain for the Step-3 gate and consumer
  reconciliation, as recorded, not as a scope gap.
- No unmet prerequisite is confirmed, and none is reasonably suspected: every named
  result in every statement and strategy resolves to a published item or a batch-2
  scaffold item, and the remaining obligations (faithfulness of Harish–Chandra
  induction on endomorphism algebras; the determinant unit criterion; finiteness of
  proper closed subsets of a principal open of $\mathbb A^1$) are short arguments the
  scaffold states inline. The earlier batch-2 run-record flags on the general-character
  parameter normalization and on Tits supplier applicability were closed by the
  documented owner repair, whose added lemmas are all present in the scaffold.

## Statement-level defect to route (not a scope omission)

`thm-type-a-iwahori-hecke-presentation` display (2) reads
`T_i^2=(q-1)T_i+q\,T_1` while (1) names $T_1,\dots,T_{n-1}\in H$ the standard basis
elements attached to the simple transpositions. Under that naming the $i=1$ instance
reads $T_1^2=(2q-1)T_1$, which conflicts with the correct relation in its own
dependency `lem-rank-one-hecke-quadratic-relation`
(`T_s^2=(q-1)T_s+q\,T_1`, "here $T_1=e_B$ is the unit") and with
`def-bruhat-double-coset-basis-of-the-finite-hecke-algebra` and
`def-generic-type-a-hecke-algebra` (`T_i^2=(v-1)T_i+v`). The intended display is
$T_i^2=(q-1)T_i+q\cdot 1_H$, and the abstract presentation in (3) should make the unit
explicit so that the generator $T_1$ is not silently identified with $1_{H(n)}$.
This is a notational defect in a scaffold statement, not a missing definition, result
or example, so it does not change the scope decision; Step 3a may not edit the
scaffold, and the fix is recommended to the owner for the Step-3b author.

## Decision

The planned definitions, results and examples cover the intended subject
("induction from a Borel, intertwiners, Iwahori–Hecke algebra" for the finite general
linear groups), match all 27 designed rows plus eight supporting lemmas, carry
two-treatment source coverage with the general-$n$ qualification recorded and honoured,
resolve every prerequisite inside the published library or batch 2, and match the
declared downstream interface. Recorded: **sufficient**. No owner action is requested;
the pair may proceed to Step 3b authoring.
