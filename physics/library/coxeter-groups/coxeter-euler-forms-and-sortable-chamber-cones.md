---
page: coxeter-euler-forms-and-sortable-chamber-cones
title: "Coxeter Euler Forms and Sortable Chamber Cones"
status: published
items:
  - def-cg-coxeter-oriented-euler-form-and-c-sorting-word
  - lem-cg-positive-span-of-transported-simple-roots
  - lem-cg-coxeter-word-transport-and-form-independence
  - lem-cg-finite-dihedral-subsystems-and-canonical-roots
  - lem-cg-finite-rank-two-inversion-set-recognition
  - lem-cg-greedy-sorting-word-and-rank-two-alignment
  - lem-cg-weak-parabolic-projection-and-cover-joins
  - def-cg-sortable-element-skip-roots-and-cone
  - lem-cg-uniform-omega-positive-and-aligned-sortability
  - def-cg-initial-letter-sortable-projection
  - lem-cg-sortable-recursion-output-and-initial-choice-independence
  - lem-cg-sortable-skips-basis-and-cover-decomposition
  - lem-cg-sortable-cone-criterion-and-projection-monotonicity
  - thm-cg-sortable-skip-basis-cover-roots-and-chamber-unions
examples: []
---

Uniform sortable-element proofs need an oriented form and basis of skipped roots. These are additional Coxeter constructions; they are not supplied by generic lattice theory or by the noncrossing correspondence.

Proof completion is recorded in each item's current verification and proof contract. The prose below records the scope and supplier routes; each linked item carries its complete local argument. Source reading supports those routes and is not a substitute for a library proof.

## Ordered construction and proof contracts

**def-cg-coxeter-oriented-euler-form-and-c-sorting-word.** Fix a reduced Coxeter word c. Define its oriented bilinear Euler form from the symmetric B by triangular entries, and skew form ω=E-E^T with normalization stated. Define c∞ as repeated blocks and the lexicographically earliest position set yielding a reduced word for w. Existence and uniqueness follow from finite length and lex order on finite subsets with least admissible next position; a greedy descent algorithm is justified next.

Definition justification: `lem-cg-greedy-sorting-word-and-rank-two-alignment`.

**lem-cg-greedy-sorting-word-and-rank-two-alignment.** Prove the greedy left-descent scan returns the earliest reduced subword for arbitrary finite S, and prove block-sequence independence, initial-letter conjugation, and parabolic restriction. In finite type, realize each generalized rank-two parabolic as a chamber-face stabilizer, apply the finite-dihedral roots lemma, and prove orientation by angular order in its pointed root sector. Define alignment using the resulting zero-ω and positive-ω inversion-set cases. Only the rank-two orientation/alignment clause has the finite-type hypothesis.

**lem-cg-finite-dihedral-subsystems-and-canonical-roots.** For a plane P spanned by roots in finite positive-definite geometry, choose x∈P⊥ off the finitely many root hyperplanes not containing P⊥. Its point stabilizer is a conjugate parabolic with roots exactly Φ∩P: a fixing root reflection has normal in P and conversely. Spanning implies rank two (for rank-two ambient use x=0). Transport its chamber base and select the two extreme rays of its positive-root cone; their reflection product gives a finite dihedral system. Prove all plane positive roots lie in angular order between these endpoints and the full plane subsystem has its canonical extreme rays. Include commuting A1×A1. This supplies the canonical dihedral systems used by alignment and inversion recognition; no general infinite reflection-subgroup theorem is imported.

**lem-cg-finite-rank-two-inversion-set-recognition.** Show I⊆Φ+ is an inversion set iff its rank-two restrictions satisfy the initial/final segment criterion. Prove closure of I and complement under positive rank-two combinations. A minimum-height root of nonempty I forces a simple root in I; otherwise reflecting by a simple positive pairing yields a smaller positive root and contradicts complement closure. For s∈I prove s(I\{α_s}) retains the rank-two condition, including systems containing α_s and reversed dihedral order; induct on |I|. This is the finite proof required by Reading–Speyer Lemma2.17, not an infinite-root-system fallback.

**lem-cg-weak-parabolic-projection-and-cover-joins.** For finite W let w_J be the W_J prefix in the length-additive left parabolic decomposition, distinct from a minimal coset representative. Prove N(w_J^-1)=N(w^-1)∩Φ_J,+ by strong exchange: a later prefix reflection in W_J would delete a suffix letter and shorten the minimum representative. Thus w_J is the greatest W_J element below w. Put q=w_0(J)w_0; it is the minimal representative of W_Jw_0, and the largest lift of z∈W_J is zq=z w_0(J)w_0, with inversion set N(z^-1)∪(Φ_+ minus Φ_J,+). These lower/upper adjunctions prove projection preserves meet and join. Supply RS2.22–23 with exact hypotheses: if s is a cover reflection of w and every other cover reflection lies in W_{S minus {s}}, then w=s∨w_{S minus {s}}; if y∈W_{S minus {s}}, then cov(s∨y)=cov(y)∪{s}. For the first claim every predecessor of w loses either inversion s or an inversion of w_J, so no strict lower element bounds s and w_J. For the second, put z=s∨y: a predecessor above y must lose s, so s is a cover. Any other cover t outside W_J would retain inversions of both s and y, contradicting the join; hence t∈W_J. Projection homomorphism gives z_J=y, so deleting t projects to a cover of y. Conversely for a cover ty of y, s∨ty<z by its strictly smaller parabolic projection; a predecessor of z above that join must delete the unique inversion t in N(y^-1) minus N((ty)^-1), so t also covers z. An arbitrary y not≥s is reduced to its parabolic prefix only in the sortable application, where sortable recursion supplies parabolic support.

**def-cg-sortable-element-skip-roots-and-cone.** Define c-sortable by weakly decreasing sets of selected generators in successive c∞ blocks. For each s define its first unselected occurrence (for sortable elements, after all selected occurrences); the preceding selected prefix acts on α_s to give its skip root. Define Cone_c(v) by nonnegative pairing with all skip roots, using the existing dual vector space.

Definition justification: `lem-cg-sortable-skips-basis-and-cover-decomposition`.

**lem-cg-uniform-omega-positive-and-aligned-sortability.** Prove Reading–Speyer Prop3.11 by induction on rank plus reduced-word length and initial c-letter; check each reflected-root inequality under c↦scs. Deduce aligned iff sortable (Theorem4.3) using finite rank-two recognition and explicit two initial-letter cases. Prove parabolic restriction (Prop3.13). No exceptional-type enumeration or computer verification is used as a proof supplier.

**def-cg-initial-letter-sortable-projection.** For finite W and Coxeter word c define π_c recursively: with initial s, if s is a left descent of w set π_c(w)=sπ_scs(sw); otherwise set π_c(w)=π_sc(w_{S\{s}}). Here sc deletes the initial letter, while scs rotates it to the end. The lexicographic measure (rank,length) decreases in each branch; identity and rank-zero are bases. Choice independence, sortable output, idempotence and monotonicity are conclusions, not part of the recursion.

Definition justification: `lem-cg-sortable-recursion-output-and-initial-choice-independence`.

**lem-cg-sortable-recursion-output-and-initial-choice-independence.** Prove RS6.6–6.10 by rank/length induction. Two initial generators commute; check four descent combinations, including (sw)_J=s(w_J) when J excludes the other commuting letter, from the proved inversion-intersection rule. Prove π(w) sortable and ≤w; greedy block recursion gives equality iff w sortable and therefore idempotence. Prove initial-letter descent detection and parabolic restriction. Do not use monotonicity or greatest-below at this stage.

**lem-cg-sortable-skips-basis-and-cover-decomposition.** Prove RS5.1–5.2 and5.9–5.11 by the two initial-letter recursions. Every simple generator has a first omitted occurrence; decreasing sorting blocks prevent its later selection. Recursive skip roots are a basis by reflection or rank-one extension of a parabolic basis. Their negative roots are exactly the negatives of cover-reflection normals; give both forced/unforced skip cases and the earliest-unforced-skip contradiction. Euler orthogonality implies the RS5.3–5.4 cover decompositions: initial s cover gives v=s∨v_{S\{s}}, with all other covers parabolic; terminal s inversion is a cover by the omega-positive sequence. These are uniform matrix/recursion proofs, not old exceptional computer checks.

**lem-cg-sortable-cone-criterion-and-projection-monotonicity.** First prove RS6.11 for v≤w: π(w)=v iff wC⊂Cone_c(v), by the sorting recursion and chamber signs; parabolic coordinate projection sends wC into w_J C_J and root-wall signs give full chamber containment. Then prove monotonicity for a weak cover x<y: both descending initial s reduces length, neither reduces rank. In the mixed case y=sx, RS6.12 retains each simple generator below y via its finite rank-two join with initial s. Apply it in scs orientation; the adjacent chambers differ only across H_s, so the shared skip cone has α_s as a wall. Reflecting the skip basis and its negative-cover rule proves π_c(y) covers π_scs(x); parabolic/rank induction gives π_scs(x)≥π_c(x). This closes monotonicity without assuming greatest-below. Output≤w plus monotonicity now gives greatest sortable below w, and full fiber/chamber correspondence follows. Include the geometric proof of the retained-simple-generator lemma and all rank-two wall cases.

**thm-cg-sortable-skip-basis-cover-roots-and-chamber-unions.** Assemble the earlier explicit tower: skip roots form a basis and their negative normals are precisely cover reflections; recursive projection is well-defined, sortable, monotone and the greatest sortable element below w; chamber signs and the proved cone criterion give Cone_c(v) as the union of precisely the closed chambers with π_c(w)=v. Parabolic restriction and the full chamber-wall argument are already supplied by the preceding lemmas. No future recursive definition, noncrossing bijection or traditional Cambrian-congruence identification is used.

## Prerequisites and reading

Required earlier pages: [[weak-order-inversions-and-lattice-operations]], [[finite-reflection-arrangements-and-spherical-coxeter-complexes]]. The companion [[coxeter-euler-forms-and-sortable-chamber-cones-examples]] tests these constructions and conventions. Exact item dependencies and source reading limits are recorded in `research/coxeter-scaffold/inventory.json` and `research/plan-coxeter-groups-track.md`.
