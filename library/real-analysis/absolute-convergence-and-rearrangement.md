---
page: absolute-convergence-and-rearrangement
title: "Absolute and Conditional Convergence; Rearrangement; Products"
status: published
items: [def-absolute-and-conditional-convergence, lem-positive-and-negative-parts,
        lem-abel-summation-by-parts, thm-dirichlet-test,
        thm-alternating-series-test, thm-abel-test,
        def-rearrangement-and-unconditional-convergence,
        thm-dirichlet-rearrangement, thm-riemann-series-theorem,
        cor-unconditional-iff-absolute-in-r, thm-grouping-of-series,
        def-cauchy-product, thm-mertens, cor-cauchy-product-absolute,
        thm-double-series-fubini, def-infinite-product,
        thm-infinite-product-criterion, thm-decimal-expansions,
        rem-rearrangement-in-higher-dimensions,
        rem-sums-proved-to-exist-but-not-evaluated]
examples: [fs-convergent-implies-absolutely-convergent,
           fs-rearrangement-preserves-the-sum,
           fs-cauchy-product-of-convergent-series-converges,
           fs-grouping-can-be-undone, fs-iterated-double-sums-always-agree,
           fs-infinite-product-converges-iff-terms-tend-to-one]
---

**A note on the notation $\iota$.** A natural number here is a von Neumann
natural, that is a set, so it is not an element of $\mathbb{R}$ and cannot be
divided into $1$. The canonical natural $\iota(n) = n \cdot 1_{\mathbb{R}}$ is the
real number that $n$ names ([[lem-of-naturals-positive]]), so $1/\iota(k+1)$ is
what an informal text writes as $1/(k+1)$; the shift by one is there because
$\mathbb{N}$ contains $0$ and $\iota(0) = 0$.

**Objective.** The previous page decided *whether* a series converges. This page
asks what a convergent series is worth as an object: may its terms be reordered,
may two such series be multiplied, may brackets be inserted or removed, may a
doubly indexed family be summed in either order. The answer turns out to depend
on a single dividing line, drawn in the first item of the page, and the whole page
is the story of that line.

**The dividing line.** [[def-absolute-and-conditional-convergence]] calls
$\sum a_k$ *absolutely convergent* when $\sum |a_k|$ converges and
*conditionally convergent* when it converges without that. One implication is
already proved on the previous page and is not restated here:
[[lem-absolute-convergence-implies-convergence]] says absolute convergence implies
convergence, which is what makes the two words partition the convergent series.
The converse fails, and [[fs-convergent-implies-absolutely-convergent]] exhibits
the alternating harmonic series as the witness.
[[lem-positive-and-negative-parts]] is the technical form of the distinction: for
an absolutely convergent series both part series $\sum a_k^{+}$ and
$\sum a_k^{-}$ converge, and for a conditionally convergent one both diverge to
$+\infty$. Every theorem below is a consequence of that dichotomy.

**Two convergence tests that need no sign pattern.**
[[lem-abel-summation-by-parts]] is the discrete integration by parts,
$\sum_{k<n} a_k b_k = A_n b_{n-1} - \sum_{k<n-1} A_{k+1}(b_{k+1}-b_k)$ for
$n \ge 1$. From it [[thm-dirichlet-test]] follows at once: bounded partial sums of
$\sum a_k$ together with a nonincreasing null $(b_k)$ give convergence of
$\sum a_k b_k$. [[thm-alternating-series-test]] is the special case with the
alternating sequence, and it carries in addition the bracketing of the sum between
consecutive partial sums and the error bound $|L - t_n| \le b_n$, which the
Dirichlet estimate does not produce and which is proved here from the interlacing
of the even-index and odd-index partial sums. [[thm-abel-test]] trades the two
hypotheses: a convergent $\sum a_k$ against a monotone bounded factor.

**Rearrangement.** [[def-rearrangement-and-unconditional-convergence]] fixes the
vocabulary: a rearrangement is a composite with a bijection of $\mathbb{N}$, and
unconditional convergence means every rearrangement converges to the same sum.
[[thm-dirichlet-rearrangement]] proves that absolute convergence suffices, and the
proof reduces everything to the nonnegative case, where the sum is a supremum and
cannot see the order at all. [[thm-riemann-series-theorem]] is the opposite
extreme: for a conditionally convergent real series and any $\alpha \le \beta$ in
the extended reals there is a rearrangement whose partial sums have limit inferior
$\alpha$ and limit superior $\beta$. In particular every real is the sum of some
rearrangement, and rearrangements diverging to $+\infty$ and to $-\infty$ exist.
[[cor-unconditional-iff-absolute-in-r]] closes the circle: over $\mathbb{R}$,
absolute convergence, unconditional convergence, and the mere requirement that
every rearrangement converge, are the same property.
[[fs-rearrangement-preserves-the-sum]] records the naive claim these results
refute, and [[rem-rearrangement-in-higher-dimensions]] says what the same question
looks like for series of vectors and why that answer is not reachable at this
point in the reading order.

**Brackets.** [[thm-grouping-of-series]] shows that a convergent series may be
grouped into blocks at will, the grouped partial sums being a subsequence of the
original ones. The converse fails, and
[[fs-grouping-can-be-undone]] gives the reason: a subsequence of a divergent
sequence may converge.

**Products.** [[def-cauchy-product]] fixes $c_n = \sum_{k=0}^{n} a_k b_{n-k}$, the
coefficients forced by multiplying two power series.
[[thm-mertens]] proves that one factor converging absolutely and the other merely
converging already give $\sum c_n = AB$; its first claim is a finite identity,
$\sum_{n<N} c_n = \sum_{i<N} a_i B_{N-i}$, holding for arbitrary sequences, and
that identity is reused for the absolute values in
[[cor-cauchy-product-absolute]], where both factors are absolutely convergent and
the product is too. [[fs-cauchy-product-of-convergent-series-converges]] shows
that convergence of both factors alone is not enough.

**Double series.** [[thm-double-series-fubini]] proves that when each row of an
array is absolutely summable and the row totals are summable, the two iterated
sums and the sum along every bijection $\mathbb{N} \to \mathbb{N}\times\mathbb{N}$
all exist and agree. Independence of the enumeration is
[[thm-dirichlet-rearrangement]] again. Without the absolute hypothesis the two
iterated sums can both exist and differ, which is
[[fs-iterated-double-sums-always-agree]].

**Infinite products.** [[def-infinite-product]] defines convergence of
$\prod a_k$ as convergence of some tail of the partial products to a **nonzero**
limit, and says why a zero limit has to be excluded.
[[thm-infinite-product-criterion]] carries the elementary theory: the Weierstrass
bounds $1 + \sum_{k<n} p_k \le \prod_{k<n}(1+p_k)$, with the companion upper bound
$\prod_{k<n}(1+p_k) \le 1/(1 - \sum_{k<n}p_k)$ whenever $\sum_{k<n} p_k < 1$, the
equivalence of $\prod(1+p_k)$ with $\sum p_k$ for nonnegative terms, the
$(1-p_k)$ form together with the fact that its partial products tend to $0$ when
$\sum p_k$ diverges, and convergence of $\prod(1+p_k)$ from convergence of
$\sum |p_k|$ for signed terms.
[[fs-infinite-product-converges-iff-terms-tend-to-one]] records that factors
tending to $1$ decide nothing. **No logarithm is used anywhere on this page**;
every one of those inequalities is an induction on finite products, and the
refinement of the criterion that genuinely needs the logarithm is deferred, as
[[rem-sums-proved-to-exist-but-not-evaluated]] records.

**Decimal expansions.** [[thm-decimal-expansions]] is the payoff of the geometric
series in this direction: for an integer $b \ge 2$ every $x \in [0,1)$ is the sum
of $\sum_{j\ge0} \iota(d_j)/\beta^{\,j+1}$ for a digit sequence that is unique
once the sequences eventually constantly $b-1$ are excluded. The construction is
**floor-free**: the integer part of a real is developed later in the reading
order, so the digit at each stage is selected by a finite case distinction closed
by the well-ordering principle, and the digits are assembled by the recursion
theorem.

**What is proved and what is only proved to exist.**
[[rem-sums-proved-to-exist-but-not-evaluated]] goes through the page and says
which sums are named without being evaluated (the alternating harmonic sum, the
sum of its two-positive-one-negative rearrangement) and what each evaluation
waits for. Every scope statement on this page is relative to the reading order:
the material named is developed elsewhere in this library, later than this page.
