# Hamel-basis ZF local-closure research

Date: 2026-09-09. Scope: independent mathematical/source research only; no publication acceptance, target edit, or shared-file change.

## thm-banach-space-no-countably-infinite-hamel-basis

Inspected target SHA-256: `5b6fa302188f3d0bf03e14225f0963f7d75d7b5cf00869dcd63a18cf8e0033cf`.

Conclusion: the asserted theorem and deterministic separable Baire method do admit a complete ZF proof. The Recorded Baire dependency is mathematically unnecessary. However, deleting that edge alone does not close the currently written proof's choice accounting: its finite-dimensional-closedness citation inherits a genuine countable-choice use. Expand the uniform coding and recursion and replace that closedness invocation by the local fixed-basis argument below. No DC, CC, AC, later Foundations supplier, or new pair is needed.

### Confirmed inherited gap, separate from the Baire construction

The exact current path is:

`target` step 1.2 / L2 → `cor-finite-dimensional-subspaces-are-closed` → `lem-complete-subspace-is-closed` L2 / step 3.1 → `thm-complete-subspace-iff-closed` claim 1 / step 1.1 → `thm-metric-sequential-closure` in its sequence-manufacturing direction.

The complete-subspace theorem explicitly identifies countable choice in L2 and its final choice remark. Nevertheless its statement is unconditional; the normed-subspace lemma and finite-dimensional corollary also present unconditional contracts and use this direction without discharging that choice. These are exact proof/contract findings, not an assertion that finite-dimensional closedness is false in ZF. The fixed finite basis makes that particular result repairable without choice. The general complete-subspace theorem cannot be used as an unconditional ZF black box here. Parent owns reconciliation of these supplier findings; none was edited during this research.

### Uniform finite-word coding: complete local contract

Fix once a bijection `p:N×N→N` supplied by `thm-n-cross-n-countable` (the published formula is `p(a,b)=2^a(2b+1)-1`) and one enumeration `q:N→Q` from `thm-rationals-countable`. Fixing these two witnesses is ordinary existential instantiation in ZF, not choice from an infinite family.

Encode a finite word `(a_0,...,a_(l-1))` by putting `c_0=0`, `c_(j+1)=p(c_j,a_j)` and assigning the code `p(l,c_l)`. For a proposed code, invert its outer pair to recover `l,c`; invert the inner pair exactly `l` times, reading symbols in reverse order. If the final residue is not zero, declare the code invalid and decode it to the empty word. Otherwise return the recovered word. Finite recursion and ordinary recursion construct these functions uniformly in `l`. Every finite word has a code; decoding is a total surjection from N onto the set of finite words in N. This does not use the assertion that an arbitrary countable union of countable sets is countable, nor select a separate enumeration for every length.

For real coefficients let `q_R=q`. For complex coefficients invert `p` and set `q_C(p(a,b))=q(a)+i q(b)`. A symbol coding the pair `(n,t)` represents the term `q_K(t)b_n`. Decode a word and sum its represented terms, using zero for the empty word. This defines directly a total function `d:N→X` with image exactly the rational-coefficient span D used by the target. Repetitions and invalid codes cause no problem. The additional countable-surjection lemma becomes optional rather than load-bearing.

Rational density is supplied by `lem-q-and-irrationals-dense-r`; complex density follows by approximating real and imaginary parts and using `|u+iv|≤|u|+|v|`. In the finite approximation in target step 2.2, one may take the least coefficient-enumeration index meeting each error bound. Even ordinary finitely many choices would suffice in ZF. There is no family of independently chosen representations of arbitrary vectors: fix a vector, take its one finite Hamel representation, prove the approximation, then universally quantify.

### Choice-free local closedness, with verified completeness route

Fix N. Use the displayed real list `e=(b_0,...,b_N)` or `e=(b_0,ib_0,...,b_N,ib_N)`. It is a real ordered basis of F_N: a real relation in the complex case groups into a complex relation among the b_j, forcing both components of every coefficient to vanish. Its length is positive. Restrict the preceding finite-word procedure to these finitely many generators (invalid generator indices contribute zero). Obtain a particular enumeration `d_N:N→F_N` of their rational span; the same finite approximation proves that its image is dense in F_N.

For `x∈closure_X(F_N)` and every integer `k≥0`, there is an index j with `||x-d_N(j)||<1/(k+1)`. Indeed, first use adherence to obtain a member of F_N within half that bound, then density within F_N for the remaining half. This is an existence proof for one k, not a simultaneous selection. Define `j(k)` to be the least such j. Replacement produces the sequence `u_k=d_N(j(k))`. It converges to x in X and is Cauchy in F_N by the triangle inequality.

One may now use `cor-finite-dimensional-normed-spaces-are-banach` on the displayed basis, obtain its limit y in F_N, and conclude `x=y` by the triangle inequality/uniqueness. Alternatively expose the coordinate proof: the earlier basis-map theorem gives a linear bijection `T:R^l→F_N` and a bound `||T^{-1}u||_1≤C||u||`. Hence `T^{-1}u_k` is Cauchy; its coordinates have unique real limits, defining one tuple a. The boundedness of T gives `u_k→T(a)`, so `x=T(a)∈F_N`. Thus F_N is closed, with no general closure-to-sequence theorem invoked.

The following actual proofs, not just statements, were read to check this route:

- `cor-finite-dimensional-normed-spaces-are-banach`: transports a given Cauchy sequence through the bounded inverse of the supplied basis map. No selection of bases, sequences, or limits from an arbitrary family occurs.
- `thm-coordinate-map-for-a-finite-dimensional-normed-space`: unique coordinates, direct finite-sum upper bound, and the lower bound from `thm-all-norms-on-rn-are-equivalent`. The underlying-real route avoids its separate complex calculation.
- `thm-componentwise-convergence-and-completeness` and `thm-euclidean-space-complete`: assemble unique coordinate limits and use least eventual indices and a finite maximum. Their real completeness input is `thm-cauchy-criterion-via-lub`.
- `thm-cauchy-criterion-via-lub`, `thm-bolzano-weierstrass`, `lem-peak-monotone-subsequence`, and `cor-monotone-converges-iff-bounded`: the subsequence is generated by explicit least-index recursion; the convergent monotone sequence uses the supremum/infimum of its range. There is no general compact-metric sequential-compactness invocation.
- `thm-all-norms-on-rn-are-equivalent`: the Euclidean sphere is compact by the actual finite-coordinate bisection proof in `thm-heine-borel-rn`; the norm has a positive minimum by `thm-extreme-value-metric`.
- `thm-heine-borel-rn`, `thm-extreme-value-metric`, `thm-compact-subset-is-closed-and-bounded`, `thm-continuous-image-of-a-compact-space-is-compact`, `lem-compactness-is-intrinsic`, and `lem-closed-subset-of-a-compact-space-is-compact`: their used open-cover arguments employ canonical covers, preimages, all admissible ambient extensions, and finite subcovers. Recovering a finite list of covering indices uses only proved finite choice. EVT uses adherence of the supremum, not a manufactured approximating sequence. Thus the identified CC path is in complete-implies-closed, not in this finite-dimensional completeness/coordinate route.

This is a focused audit of those actual analytic interfaces, not a certification of every primitive in their transitive dependency closure.

### Deterministic Baire recursion and limit

The target's center-then-radius least selections are correct: after choosing the least dense-point index in a nonempty open set O, openness supplies a positive radius rho; an integer k with `1/k<rho` gives a closed ball contained in O. For the recursive step also require `1/k<r_n/2`. Existence of a suitable reciprocal is `cor-archimedean-reciprocal`; taking the least k is `thm-well-ordering-principle`.

For complete formal recursion, use states `(n,m,k)` with `k≥1` for which the closed ball centered at d(m) with radius 1/k is contained in `U_0\F_n`. The target's formulas define one successor state for every such state: first the least index in `B(d(m),1/(2k))\F_(n+1)`, then the least admissible radius index. Closedness and empty interior prove both sets nonempty. The successor remains a valid state. This is a set and a supplied total self-map, so `thm-recursion` applies to the least initial state. No DC is being silently replaced by the word “inductively”. Equivalently use all integer triples and a fixed default on invalid states.

The radii satisfy `r_n≤r_0 2^(-n)` and tend to zero by `lem-geometric-sequence-null`. Nested balls imply the centers are Cauchy. Banach completeness supplies a limit of this already constructed sequence. For a fixed ball and all sufficiently late centers, `||x_m-x_n||≤r_n`; pass to the limit using `| ||x-x_n||-||x_m-x_n|| |≤||x-x_m||`, obtaining `||x-x_n||≤r_n`. This avoids both a general nested-closed-set selection theorem and any sequence-manufacturing closure theorem. The limit avoids every F_n, contradicting their union being X.

“Canonical” here means set-theoretically determined by a predicate. The predicates need not be decidable; this is not a claim of computable or constructive-analysis effectiveness.

### Exact earlier suppliers and source evidence

Canonical target home is `finite-dimensional-normed-spaces-and-riesz-lemma`, order 288.051, A item 12. Earlier same-page suppliers are the coordinate-map theorem (item 1) and finite-dimensional Banach corollary (item 3). Other verified canonical homes: pairing and rational countability at order 18 (items 7 and 12); rational density at 131 (item 9); norm equivalence at 167 (item 8); Euclidean completeness at 118 (item 7); reciprocal Archimedean corollary at 9 (item 2); geometric null sequence at 114 (item 13). Recursion and natural well-ordering are published in `construction-of-the-natural-numbers`, canonical order 6; that page's canonical item inventory is empty, so actual published page membership, not an invented canonical item index, establishes their location. All precede the target. Do not use the draft `def-natural-number-coding-of-finite-sequences`, a later weak-choice page, or the Recorded Baire remark as proof suppliers.

Authoritative full-text comparison: Alan Sokal, UCL Mathematics 3103, 2012–2013, Handout 7, [The Baire Category Theorem and Its Consequences](https://www.ucl.ac.uk/~ucahad0/3103_handout_7.pdf), Theorem 7.3 and its proof, printed pp. 3–4, footnote 4 continued on p. 5. The complete proof and footnote were read from the accessible full PDF. The footnote explicitly describes ZF closure for separable spaces by a fixed dense sequence and least enumerated ball choices. Its preceding general Cantor intersection lemma selects points from arbitrary closed sets; the proposed local proof instead retains the already supplied ball centers. The manuscript's dense-point/radius pair wording is abbreviated; the two successive minima above give the precise usable construction. No broader claim about all complete spaces is imported.

Howard–Tachtsis's repository page supplied only an abstract, not a proof; it was not used as mathematical evidence for this conclusion. The finite-word coding and fixed-basis closure arguments above are explicit local derivations, not attributed to an unread source.

Safe handoff: root may repair the target with these local arguments and exact earlier dependencies. Merely deleting L4 and its dependency is insufficient. No target or supplier was changed and no acceptance or owner-audit stamp was written.
