---
page: rn-as-a-normed-space
title: "R^n as a Normed Space; Vector-Valued Functions"
status: published
items: [def-norm-and-normed-space, def-euclidean-inner-product,
        thm-cauchy-schwarz-and-the-euclidean-norm, def-p-norms-on-rn,
        lem-p-norms-are-norms-and-induce-the-published-metrics,
        def-equivalent-norms,
        lem-every-norm-on-rn-is-continuous-for-the-euclidean-metric,
        thm-all-norms-on-rn-are-equivalent,
        thm-componentwise-convergence-and-completeness,
        cor-bolzano-weierstrass-in-rn,
        def-vector-valued-functions-limits-and-continuity,
        thm-componentwise-limits-and-continuity,
        def-vector-valued-derivative-and-integral,
        thm-norm-inequality-for-the-vector-valued-integral,
        thm-mean-value-inequality, cor-vector-valued-ftc-and-lipschitz-bound,
        def-series-of-vectors-and-rearrangement, thm-absolute-convergence-in-rn,
        def-the-space-of-summing-directions, thm-steinitz-polygonal-confinement,
        thm-rearrangement-sums-lie-in-an-affine-subspace,
        rem-rn-conventions-and-scope]
examples: []
---

**A note on the notation $\iota$.** A natural number here is a von Neumann
natural, that is a set, so it is not an element of $\mathbb{R}$. The canonical
natural $\iota(n) = n \cdot 1_{\mathbb{R}}$ is the real number that $n$ names
([[def-canonical-natural]], [[lem-of-naturals-positive]]), so $1/\iota(k+1)$ is
what an informal text writes as $1/(k+1)$ and $\iota(n)$ is what it writes as
$n$ inside an inequality between reals.

**Objective.** The published metric-spaces material already gives $\mathbb{R}^n$
a metric, and the published real-analysis track already gives $\mathbb{R}$ its
calculus. This page puts the two together by adding the missing ingredient, the
**linear** structure: a norm, the Euclidean inner product, and the observation
that in finite dimensions the choice of norm never matters. It then carries
limits, continuity, the derivative, the integral and series across from
$\mathbb{R}$ to $\mathbb{R}^m$, one coordinate at a time, and ends with what can
honestly be said about rearranging a series of vectors.

**Norms, and the seam with the published metrics.**
[[def-norm-and-normed-space]] fixes the three axioms (N1), (N2), (N3), derives
nonnegativity rather than assuming it — exactly as [[def-metric-space]] and
[[lem-metric-nonnegativity]] do for metrics — and proves that $d(u,v) = \lVert u-v\rVert$
is a metric which is in addition translation invariant and absolutely
homogeneous. Not every metric on a vector space arises this way, and
[[lem-bounded-remetrisation]] is the published witness.
[[def-euclidean-inner-product]] defines $\langle x,y\rangle = \sum_{k<n}x_ky_k$
and proves its algebra from the finite-sum laws;
[[thm-cauchy-schwarz-and-the-euclidean-norm]] restates the published
[[thm-cauchy-schwarz-finite]] in vector notation, rather than reproving it, and
adds that $\lVert\cdot\rVert_2$ is a norm, the parallelogram law and
polarisation. [[def-p-norms-on-rn]] introduces $\lVert\cdot\rVert_p$ for
**rational** $p \ge 1$ and $\lVert\cdot\rVert_\infty$ for $n \ge 1$.

The seam is closed by
[[lem-p-norms-are-norms-and-induce-the-published-metrics]]: for $n \ge 1$ the
metrics induced by $\lVert\cdot\rVert_1$, $\lVert\cdot\rVert_2$ and
$\lVert\cdot\rVert_\infty$ **are** the published $d_1$, $d_2$ and $d_\infty$ of
[[lem-metrics-on-rn]], not merely metrics equivalent to them. Without that item the library would hold two
unrelated metric structures on one set.

**Equivalence of norms.** [[def-equivalent-norms]] defines equivalence and proves
the dictionary: equivalent norms give **Lipschitz** equivalent metrics, the
strongest of the three tiers of [[def-equivalent-metrics]] and
[[thm-metric-equivalence-hierarchy]], hence the same open sets, convergent
sequences, Cauchy sequences and uniformly continuous maps.
[[lem-every-norm-on-rn-is-continuous-for-the-euclidean-metric]] does the half
that costs no compactness: the finite and reverse triangle inequalities for any
norm, the bound $N(x) \le C\lVert x\rVert_1$ from the standard basis, the
comparison chain
$\lVert x\rVert_\infty \le \lVert x\rVert_2 \le \lVert x\rVert_1 \le \iota(n)\lVert x\rVert_\infty$,
and Lipschitz continuity of $N$ for $d_2$.
[[thm-all-norms-on-rn-are-equivalent]] supplies the other half by compactness of
the Euclidean unit sphere, through [[thm-heine-borel-rn]] and
[[thm-extreme-value-metric]]; the hypothesis $n \ge 1$ is used twice there and
both uses are marked.

**Sequences.** [[thm-componentwise-convergence-and-completeness]] proves that
convergence and Cauchyness in $\mathbb{R}^n$ are componentwise, and obtains
completeness in **every** norm by citing the published
[[thm-euclidean-space-complete]] and transporting it along norm equivalence.
[[cor-bolzano-weierstrass-in-rn]] assembles Bolzano-Weierstrass in
$\mathbb{R}^n$ from [[thm-heine-borel-rn]] and the ZF implication
[[thm-compact-implies-the-other-compactness-forms]]; **it is not proved again by
bisection**, that work being published at order 120, and it costs no choice
principle.

**Vector-valued functions.**
[[def-vector-valued-functions-limits-and-continuity]] defines limits and
continuity for $f : A \to \mathbb{R}^m$ and proves that they are the metric
notions of [[def-metric-continuity]] and nothing new, in the spirit of
[[lem-real-and-metric-notions-agree]].
[[thm-componentwise-limits-and-continuity]] proves that both are componentwise
and, because the domain here is a metric space rather than a subset of
$\mathbb{R}$, proves the algebra of sums, scalar multiples, inner products and
norms directly instead of quoting [[thm-algebra-of-continuous-functions]].
[[def-vector-valued-derivative-and-integral]] gives the derivative intrinsically,
as a limit of difference quotients in $\mathbb{R}^m$, with the componentwise
formula as a consequence, and defines the integral coordinatewise with the
orientation convention of [[def-oriented-integral]].

**Three theorems about vector-valued calculus.**
[[thm-norm-inequality-for-the-vector-valued-integral]] proves that
$\lVert f\rVert_2$ is integrable when $a<b$ and that
$\lVert\int_a^b f\rVert_2 \le \int_a^b \lVert f\rVert_2$ for $a \le b$, by the
inner-product argument, with the case $\int_a^b f = 0$ treated separately because
the usual division is illegitimate there.
[[thm-mean-value-inequality]] proves
$\lVert f(b)-f(a)\rVert_2 \le M(b-a)$ from the scalar mean value theorem applied
to $t \mapsto \langle f(b)-f(a),\, f(t)\rangle$, **with no integrability
hypothesis**; the equality form is false for $m \ge 2$ and the companion page
carries the witness. [[cor-vector-valued-ftc-and-lipschitz-bound]] gives the
componentwise fundamental theorem and the Lipschitz bound, and says why the mean
value inequality is proved the other way round.

**Series of vectors, and how far the rearrangement question can be taken.**
[[def-series-of-vectors-and-rearrangement]] fixes partial sums, convergence,
absolute convergence, rearrangement and the set $\mathcal{S}(x)$ of rearrangement
sums, with an explicit agreement clause against [[def-series]] and
[[def-rearrangement-and-unconditional-convergence]] at $n = 1$.
[[thm-absolute-convergence-in-rn]] proves that absolute convergence gives
convergence, by a Cauchy estimate together with completeness, and that
$\mathcal{S}(x)$ is then a single point, by reduction to
[[thm-dirichlet-rearrangement]] coordinatewise.
[[def-the-space-of-summing-directions]] introduces
$\Gamma = \{a : \sum_k|\langle a,x_k\rangle| \text{ converges}\}$ and
$\Gamma^{\perp}$, proves both are linear subspaces, and proves
$\Gamma = \mathbb{R}^n$ exactly when the series converges absolutely; it is
phrased with the inner product and not with linear functionals, because dual
spaces belong to a page earlier in the plan order that is not yet built.

[[thm-steinitz-polygonal-confinement]] proves **Steinitz's polygonal confinement
lemma in full**: finitely many vectors of norm at most $1$ summing to $0$ can be
ordered so that every partial sum has norm at most $\iota(n)$. The proof is
constructive, and it includes the support bound
$\#\operatorname{supp} \le k-1$ together with the reason equality is impossible,
which is the step most write-ups omit.
[[thm-rearrangement-sums-lie-in-an-affine-subspace]] proves that
$\mathcal{S}(x)$ is nonempty and **contained in** the affine subspace
$s + \Gamma^{\perp}$.

**What this page does not settle, stated plainly.** Whether
$\mathcal{S}(x)$ is all of $s + \Gamma^{\perp}$ when $n \ge 2$ is **not settled
here, and no item on this page asserts anything about it in either direction**.
The obstruction is machinery: every route known to this page's author needs the
orthogonal decomposition of a finite-dimensional inner product space, which
belongs to a page earlier in the plan order that is not yet built, and a
convex-separation argument that no planned page owns. No recorded-not-proved item
has been created for it. The published [[rem-rearrangement-in-higher-dimensions]]
raised the question and declined to state the literature's answer; this page
answers the part it can and continues to decline the rest. A reader is protected
from the wrong guess in the meantime: the companion page refutes the naive
$\mathbb{R}^n$ analogue of [[thm-riemann-series-theorem]] outright, using the
containment half and nothing more.

**Conventions.** [[rem-rn-conventions-and-scope]] is the page ledger. It records
where the standing hypothesis $n \ge 1$ comes from and which items carry it and
which do not, that the exponent of a $p$-norm is rational because real exponents
do not exist at this point in the reading order
([[rem-real-exponents-deferred]]), that $\mathbb{R}^n$ is a function space so
that $\mathbb{R}^1$ is not literally $\mathbb{R}$, what is taken up elsewhere in
the reading order, and which Steinitz result the confinement theorem is — it is
**not** the Steinitz exchange lemma of linear algebra, which is published under a
different id and carries the alias `lem-steinitz`.
