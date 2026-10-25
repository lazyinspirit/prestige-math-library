---
page: formal-laurent-series-field
title: "The Formal Laurent Series Field $\\mathbb{R}((t^{-1}))$: Cauchy Complete, Non-Archimedean, Not Complete"
status: published
items: [def-formal-laurent-series, lem-laurent-series-ring, lem-laurent-valuation,
        thm-laurent-series-field, thm-laurent-ordered-field,
        lem-laurent-non-archimedean, cor-laurent-not-lub-complete,
        def-sequences-in-an-ordered-field, thm-laurent-cauchy-complete,
        cor-laurent-nested-intervals]
examples: [cex-laurent-nested-intervals-empty]
---

**Objective.** This page builds one field and proves five things about it,
because the five together are a single fact that no earlier page in this library
could exhibit: **Cauchy completeness does not imply the least-upper-bound
property.** The field is
$K = \mathbb{R}((t^{-1}))$, the formal Laurent series in $t^{-1}$ over
$\mathbb{R}$, and what is proved here is that $K$ is an ordered field, that it
is not Archimedean, that it therefore fails the least-upper-bound property, that
every Cauchy sequence in it nevertheless converges, and that it satisfies the
nested interval property in the shrinking form. The last two hold in a field
where the first three fail, and that is the whole point.

**Why a new field, when $\mathbb{R}(t)$ was already available.**
[[cex-ordered-field-not-archimedean]] built the rational functions ordered by
eventual sign and used them for exactly one purpose: to show that an ordered
field need not be Archimedean. That is the whole of what this library has proved
about $\mathbb{R}(t)$, and it is not enough here, because nothing there speaks
about Cauchy sequences or about nested intervals; this page does not settle
either question for $\mathbb{R}(t)$ and does not need to. $K$ is built instead,
and every property required below is proved for it outright. The two fields are
ordered by the same idea, the behaviour of an element at infinity, but an
element of $K$ is an arbitrary series in descending powers of $t$ rather than a
ratio of polynomials. This page does not construct an
embedding of $\mathbb{R}(t)$ into $K$ and never uses one; the relationship is
recorded honestly in the remarks of [[def-formal-laurent-series]] and is not
relied on anywhere.

**The construction, and the one hard algebraic step.**
[[def-formal-laurent-series]] defines an element of $K$ as a function
$\mathbb{Z} \to \mathbb{R}$ whose support is bounded below, written
$\sum_{k \ge k_0} a_k t^{-k}$, with the valuation $v(f)$ its lowest nonzero
index and $\operatorname{lc}(f)$ the coefficient there.
[[lem-laurent-series-ring]] does the bookkeeping that makes the definition
legitimate: bounded-below support is exactly what makes each coefficient of a
product a *finite* sum, it is preserved by both operations, and the result is a
commutative ring. [[lem-laurent-valuation]] then records the two facts that
every later argument runs on, $v(fg) = v(f) + v(g)$ and the behaviour of $v$
under sums, from which $K$ is at once an integral domain.

The genuinely non-trivial algebra is [[thm-laurent-series-field]]: every nonzero
series is invertible. The obstacle is that the natural formula for the inverse
is a geometric series, and $K$ has no notion of an infinite sum. What replaces
it is the observation that $u^{n}$ vanishes at every index below $n$ when $u$
does below $1$, so at any single index only finitely many powers contribute; the
inverse is defined index by index from that finite truncation, and the fact that
the result again has support bounded below is checked rather than assumed. That
check is where a hand-waved proof would fail.

**The order, and where it stops behaving like $\mathbb{R}$.**
[[thm-laurent-ordered-field]] orders $K$ by the sign of the leading
coefficient: $f > 0$ exactly when the lowest-index nonzero coefficient of $f$ is
a positive real. Comparison therefore looks at one coefficient only, the first
at which two elements differ, and every later coefficient is irrelevant. That
single sentence explains everything unusual about $K$.
[[lem-laurent-non-archimedean]] draws the consequences: $t$ exceeds every
canonical natural, so $K$ is not Archimedean; the monomials $t^{-k}$ decrease;
and, the clause that matters most, **every positive element of $K$ exceeds some
$t^{-k}$ with $k \in \mathbb{N}$**. The value group is $\mathbb{Z}$,
whose cofinality is countable, and that clause is what countable cofinality
means down in the order.

[[cor-laurent-not-lub-complete]] is then two lines of abstract nonsense and a
short concrete argument. The abstract route is the contrapositive of
[[thm-of-archimedean]], proved several pages earlier: a complete ordered field
is Archimedean, $K$ is not, so $K$ is not complete. The concrete route names the
set that fails, the canonical naturals $\{n \cdot 1_K\}$, which are bounded
above by $t$ and have no least upper bound because every upper bound of them can
be halved at its leading coefficient and remain an upper bound. Both are kept,
because a reader who is about to be told that $K$ *is* Cauchy complete is
entitled to see precisely which set has no supremum.

**Sequences in a field that is not $\mathbb{R}$.**
[[def-sequences-in-an-ordered-field]] is deliberately general: it fixes
convergence, Cauchyness, monotonicity, boundedness, subsequences and closed
intervals in an arbitrary ordered field $F$, so that the later page on the
equivalent forms of completeness has one place to cite rather than a
reconstruction of its own. Two points in it are load bearing rather than
decorative. The thresholds $\varepsilon$ range over $F$, not over the rationals,
and in a non-Archimedean field that is a real difference: this page contains a
sequence that would pass the Cauchy test read with rational thresholds and fails
it in $K$. And a theorem proved about sequences of reals is a theorem about
$\mathbb{R}$; it may not be cited for a general $F$ merely because its proof
looks like it would transfer.

**Cauchy completeness, and why the argument is not a formality.**
[[thm-laurent-cauchy-complete]] is the main theorem. Its hinge is the
countable-cofinality clause of [[lem-laurent-non-archimedean]]: the continuum of
thresholds in the Cauchy condition collapses to the countable family $t^{-k}$,
so testing against those suffices, and a sequence indexed by $\mathbb{N}$ is
long enough to meet all of them. Applying the condition at $t^{-(k+1)}$ says
that the coefficients at all indices $j \le k$ are eventually constant along the
sequence, and the limit is assembled from those eventual values. Two obligations
are discharged explicitly rather than waved through: the assembled function must
have support bounded below, which comes from the single threshold $k = 0$
freezing the entire negative half-line at one stage; and no choice is used,
since each stage is *defined* as a least element supplied by the well-ordering
principle rather than chosen.

**Nested intervals, in one form and not the other.**
[[cor-laurent-nested-intervals]] deduces from Cauchy completeness that a nested
sequence of closed intervals whose lengths tend to $0$ *in the order of $K$*
meets in exactly one point. The restriction is not a weakness of the proof. The
unrestricted property is **false** in $K$, and
[[cex-laurent-nested-intervals-empty]] exhibits nested intervals
$[\iota(n)t^{-1},\, \iota(1/(n+1))]$ with empty intersection: a common point
would have to be infinitesimal, because it lies below every positive real
constant, and simultaneously larger than every multiple of $t^{-1}$, which no
element of $K$ is. The shrinking hypothesis must also be read in $K$ and not in
$\mathbb{R}$, and both items say so. The lengths in the counterexample keep a
nonzero coefficient at index $0$, so not one of them ever gets below $t^{-1}$;
and the remarks of [[cor-laurent-nested-intervals]] make the same point with
lengths that are the real constants $2/(n+1)$, which tend to $0$ in the ordinary
real sense and do not tend to $0$ in $K$ at all.

**What this page is for.** Three results elsewhere in the library need a single
honest witness, and this field is it: an ordered field in which every Cauchy
sequence converges but the least-upper-bound property fails; an ordered field
with the shrinking nested interval property but without least upper bounds; and
a Cauchy complete, non-Archimedean, incomplete ordered field. All three are
statements about the same $K$, and every ingredient of all three is proved on
this page.
