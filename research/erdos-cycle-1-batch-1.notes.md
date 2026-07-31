# ERDOS shortest-path cycle 1, batch 1: Beta scaffold notes

Scope: Steps 1–2 only for the pairs `uniform-convergence-of-functions` and
`chains-antichains-sperner-and-dilworth`. The proposed page objects are in
`research/erdos-cycle-1-batch-1.pages.json`. No item, library page, or
`research/plan-spec.json` content was changed.

## Source ledger

The uniform-convergence scaffold was checked against the following sources.

- MIT OpenCourseWare, *18.100B Real Analysis* (Spring 2025), [full lecture
  notes](https://live.ocw.mit.edu/courses/18-100b-real-analysis-spring-2025/mit18_100b_s25_lec_full.pdf).
  The relevant sequence-of-functions section gives pointwise and uniform
  convergence, the supremum-metric criterion, the uniform limit theorem,
  completeness of continuous functions in the supremum metric, interchange
  with the Riemann integral, the derivative-limit theorem, and the
  Weierstrass M-test.
- Jiří Lebl, *Basic Analysis I & II*, [HTML
  edition](https://www.jirka.org/ra/html/). The sequence-and-series-of-functions
  chapter was used to cross-check the quantified definitions and the
  hypotheses of Dini's theorem.
- University of Alberta Math 317, [Infinite Series of
  Functions](https://www.math.ualberta.ca/~xinweiyu/317.Q1.14w/LecNote317-02%20Infinite%20Series%20of%20Functions.pdf).
  This was used for the uniform Dirichlet and Abel tests and their
  summation-by-parts proofs.
- MIT OpenCourseWare, *18.100A Real Analysis* (Fall 2020), [lecture notes and
  readings](https://www.ocw.mit.edu/courses/18-100a-real-analysis-fall-2020/pages/lecture-notes-and-readings/).
  Lecture 24 independently supports the uniform limit theorem, the M-test,
  and interchange with integration.
- William F. Trench, *Introduction to Real Analysis*, [Open Textbook
  Library record](https://open.umn.edu/opentextbooks/textbooks/174), chapter
  4.4. This was used as an additional open-source check on standard
  terminology and examples.

The poset and extremal-set scaffold was checked against the following sources.

- Mitchel Keller and William T. Trotter, *Applied Combinatorics*, [Dilworth's
  theorem and its dual](https://appliedcombinatorics.org/book/s_posets_dilworth.html)
  and [the subset
  lattice](https://appliedcombinatorics.org/book/s_posets_subset-lattice.html).
  These supplied the finite Dilworth induction, Mirsky's rank proof, and a
  check on the Boolean-lattice conventions.
- Jacob Fox, MIT MAT 307, [lecture 12 on Erdős-Ko-Rado by Katona's
  method](https://math.mit.edu/~fox/MAT307-lecture12.pdf). This supplied the
  cyclic-interval lemma and double-counting normalization.
- Jiří Matoušek and Jan Vondrák, [*The Probabilistic
  Method*](https://www.cs.cmu.edu/~15850/handouts/matousek-vondrak-prob-ln.pdf),
  pp. 14–15. This independently checks the Erdős-Ko-Rado statement and
  cycle-method proof.
- MIT OpenCourseWare, *18.212 Algebraic Combinatorics*, [lecture 16 on
  distributive
  lattices](https://ocw.mit.edu/courses/18-212-algebraic-combinatorics-spring-2019/resources/mit18_212s19_lec16/).
  This supports the finite Birkhoff representation theorem through
  join-irreducibles and order ideals.
- The Electronic Journal of Combinatorics, [*Symmetric chain decompositions
  of necklace
  posets*](https://www.combinatorics.org/ojs/index.php/eljc/article/view/v23i2p53).
  Its background section was used to check the symmetric-chain terminology;
  the scaffold uses the elementary Boolean-lattice induction.
- László Babai and Péter Frankl, [*Linear Algebra Methods in
  Combinatorics*](https://people.cs.uchicago.edu/~laci/babai-frankl-book2022.pdf).
  This was used to cross-check the statements of Erdős-Ko-Rado and the
  Erdős-Rado sunflower lemma.
- The Archive of Formal Proofs, [*Birkhoff's Representation Theorem for
  Finite Distributive
  Lattices*](https://www.isa-afp.org/entries/Birkhoff_Finite_Distributive_Lattices.html).
  This was an independent statement-level check of the finite theorem.

## Published dependency audit

Every published item named in a `deps` array of the proposed scaffold was
opened from disk, including its frontmatter and Definition or Statement.
The audited items are:

`def-function-space`, `def-real-limit`, `thm-cauchy-criterion-via-lub`,
`def-series`, `lem-of-abs-value`, `def-metric-continuity`,
`def-metric-uniform-continuity`, `def-metric-compactness`,
`lem-sup-metric-is-a-metric`, `thm-extreme-value-metric`,
`thm-linearity-of-the-integral`, `thm-monotonicity-of-the-integral`,
`thm-riemann-criterion`, `def-darboux-integral`, `def-derivative`,
`thm-ftc-first-part`, `thm-ftc-second-part`,
`thm-series-cauchy-criterion`, `lem-abel-summation-by-parts`,
`def-continuity-real`, `thm-heine-borel-characterisation-r`,
`def-partial-order`, `def-chain`, `def-finite-cardinality`,
`thm-subset-of-a-finite-set`, `def-binomial-coefficient`,
`def-factorial-and-falling-factorial`,
`thm-number-of-bijections-of-a-finite-set`, `thm-product-rule`,
`def-sum-over-a-finite-index-set`, `thm-well-ordering-principle`,
`thm-induction-principle`, `def-a-monotone-sublist-of-a-finite-list-of-reals`,
`lem-pigeonhole`, `def-injection-surjection-bijection`, and
`thm-fundamental-theorem-of-arithmetic`.

The A-page `requires` arrays name the home pages of these direct published
dependencies. Transitive prerequisites remain supplied by those published
pages. No proposed load-bearing dependency is homed on a B page, a later page,
an unproved/deferred catalogue, or either companion B page.

Several audited published items carry `forward_refs` for examples or later
orientation. The particular Definition or Statement used here is proved
without those forward references. Authors must cite only the proved clause
named in the scaffold fact, never a forward-looking remark or consequence.

## Conventions and seams

### Uniform convergence

Page 169 defines pointwise convergence, uniform convergence, and uniformly
Cauchy sequences directly by quantifiers for functions into
`mathbb R`. It does not cite `def-topology-of-uniform-convergence`,
`lem-uniform-convergence-in-the-uniform-metric`,
`thm-uniform-limit-theorem`, or `thm-dini` in any proof: all four are
published on `function-space-topologies`, order 283, and are therefore later
than page 169.

The final remark is orientation only. At authoring, give that remark
`forward_refs` to the four exact later item IDs above and say:

- the present quantified definition agrees with convergence in the supremum
  metric whenever the functions involved are bounded;
- the later uniform-limit theorem has an arbitrary topological domain and
  metric target, while the present theorem is the earlier real-valued metric
  specialization;
- the later Dini theorem is for compact metric domains, while the present
  theorem is deliberately restricted to a closed real interval.

The proof of `thm-c-k-complete-in-the-sup-metric` must first use the extreme
value theorem to establish that each continuous function on compact nonempty
`K` is bounded. It then applies the native uniform Cauchy criterion and native
uniform limit theorem. Do not cite the later general completeness theorem.

For the derivative-limit theorem, use the standard FTC proof. Fix `x_0`,
write each difference `f_k(x)-f_k(x_0)` as the integral of `f_k'`, pass to the
uniform derivative limit in the integral, and use the convergence of
`f_k(x_0)`. This is why the item separately depends on both parts of the
working FTC and the integral error estimate.

Index all sequences from zero. Thus the powers example is `x^(k+1)`, the
shrinking rectangle uses height `k+2` on
`[1/(k+2),2/(k+2)]`, and rational examples use `k+1` or `k+2` wherever a
zero denominator would otherwise occur.

### Posets and extremal set theory

`def-chain` and `def-partial-order` are reused exactly; neither is re-minted.
A chain is a subset whose elements are pairwise comparable. An antichain is a
subset whose distinct elements are incomparable. Height and width are defined
only for nonempty finite posets, avoiding empty-family maximum conventions.

The local LYM theorem is stated in the upper-shadow form. The author should
also record the equivalent lower-shadow form in a Remark, not as a second
theorem. The LYM normalization is
`sum_(A in F) 1/binom(n,|A|) <= 1`.

For odd `n`, there are two middle levels. The equality clause of Sperner's
theorem means that a maximum antichain is one complete middle level, not an
arbitrary mixture of sets from the two levels. The proof needs the local LYM
equality analysis; the bare LYM inequality alone does not justify that
classification.

The Erdős-Ko-Rado theorem asserts the sharp bound and that a star attains it.
It does not claim uniqueness of extremizers. In particular, at `n=2k` there
are additional extremal families, so a uniqueness clause would be false.

The sunflower lemma uses the classical strict threshold
`|F| > k!(r-1)^k` for distinct `k`-sets and `r >= 2`. The induction begins
with `k=0`; the maximal disjoint subfamily lemma supplies either an
empty-core sunflower or a transversal of size at most `k(r-1)`.

In Birkhoff's theorem, an order ideal is downward closed, join-irreducible
means non-bottom and `j=a join b` implies `j=a` or `j=b`, and the
representation sends `x` to the order ideal of join-irreducibles below `x`.
The inverse sends an ideal to its join, with the empty join equal to the
bottom element. The decomposition and join-prime lemmas are separate because
both are load-bearing.

## Decomposition and cheap-corollary pass

Dilworth is split into the maximal-antichain down/up decomposition, the
induction/splicing step, and the theorem. The Boolean-lattice route is split
into maximal-chain counting, LYM, local LYM, Sperner with equality, the
symmetric-chain induction step, the decomposition theorem, and the cheap
second Sperner proof. Erdős-Ko-Rado has a separate cyclic-interval lemma.
The sunflower proof has a separate maximal-disjoint-subfamily lemma. Birkhoff
has separate join-irreducible decomposition, join-prime, and order-ideal
lattice lemmas. The cheap Erdős-Szekeres corollary is retained as the promised
second proof.

The uniform page separates the quantified definitions, uniform Cauchy
criterion, function-series tail criterion, algebra of uniform limits,
continuity preservation, completeness of `C(K,R)`, the integral error bound,
interchange with integration, the derivative theorem, and the three standard
series tests. This keeps each proof locally auditable.

The A-page item totals are below the 100-item warning ceiling:
19 on uniform convergence and 32 on chains/antichains.

## Drops, corrections, and licensing

- Dropped the cosine double-limit example and removed the B page's planned
  `sine-cosine-and-the-definition-of-pi` forward whitelist. The example needs
  unbuilt trigonometry and the definition of pi; it can return only after that
  page is published.
- Dropped the requested example of pointwise convergence on `mathbb R` with
  uniform convergence on no interval. A clean witness would either duplicate
  later function-space examples or require more machinery than this core.
- Dropped the proposed “LYM equality without a full level” counterexample
  because it is false. Equality in the maximum-antichain problem forces a
  complete middle level; the scaffold instead proves the equality case.
- Dropped the naive infinite-Dilworth false statement. Dilworth extends to
  infinite posets of finite width, while failures at infinite width require a
  carefully scoped cardinal version and machinery not developed in this
  pair. A later item may return after infinite poset width and cardinal chain
  covers are defined and a published witness is available.
- Omitted uniqueness in Erdős-Ko-Rado. The sharp numerical theorem and star
  construction are dependency-closed; classifying all extremizers is a
  separate theorem and has an exceptional boundary case.
- Kept the divisor lattice of `60` because the published fundamental theorem
  of arithmetic licenses its exponent-vector description. If authoring finds
  that the concrete isomorphism would overgrow the item, rescope it to the
  divisor lattice of `12`; do not delete the Birkhoff theorem.
- No external text or diagram is copied. The sources license statements and
  proof strategies only; all eventual library prose and proofs must be newly
  written.

## Authoring recommendations

- Definitions that introduce operations or a claimed structure must discharge
  well-definedness and the structure axioms in `justified_by` or in an
  immediately following lemma, according to `SCHEMA.md`.
- The uniform product lemma should state its boundedness assumptions
  explicitly and prove the estimate by adding and subtracting `f g_k` (or
  `f_k g`); do not state the false unrestricted product theorem.
- Uniform Dirichlet must make “uniformly decreasing to zero” precise:
  each coefficient sequence is nonnegative and nonincreasing in the index,
  and the supremum over the domain tends to zero.
- Uniform Abel must require a single bound valid for all indices and all
  points. Pointwise boundedness without a uniform bound is insufficient.
- The moving rectangles are Riemann integrable step functions; compute their
  integrals directly from Darboux integrability rather than citing a later
  measure-theory fact.
- In the Dini no-continuity-of-approximants witness, define the endpoint values
  so the indicator sequence really is monotone and converges everywhere to
  zero.
- The six-element width-three example must display both a three-element
  antichain and a cover by three chains.
- For `M_3` and `N_5`, list the relevant elements and the exact failed
  distributive identity; a picture alone is not a proof.
- The false statements on the A page must carry self-contained refutations.
  Their B-page counterexamples may cite the A false statement but cannot be
  needed by its refutation.

## Dependency-closure certification

The proposed scaffold is dependency closed in published order:

- every external `deps` target is a published item on an earlier page;
- every new in-pair target occurs earlier on the same page, except that B
  items may cite their own A page;
- neither A page depends on an item from its B companion;
- no item depends on a different B page;
- no load-bearing dependency is a forward reference or a recorded-but-unproved
  result;
- the only later-item links are the four declared orientation-only
  `forward_refs` on
  `rem-uniform-convergence-agrees-with-the-later-uniform-topology`;
- both B-page `forwardRefs` arrays are empty.

Certification applies to this Step-2 scaffold. Authoring must preserve the
listed statements, hypotheses, item order, and dependency directions or
repeat the dependency audit for any amendment.
