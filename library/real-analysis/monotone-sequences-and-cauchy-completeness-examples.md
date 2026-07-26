---
page: monotone-sequences-and-cauchy-completeness-examples
title: "Monotone Sequences, Bolzano-Weierstrass, and Cauchy Completeness: Examples and Counterexamples"
status: draft
items: []
examples: [ex-babylonian-sqrt-two, ex-recursive-sqrt-two-plus-x,
           ex-nested-intervals-single-point, ex-two-subsequential-limits,
           ex-contractive-sequence-fixed-point,
           cex-cauchy-rationals-no-rational-limit,
           cex-nested-open-intervals-empty, cex-nested-unbounded-closed-empty,
           cex-sqrt-k-differences-null-not-cauchy,
           cex-unbounded-with-convergent-subsequence,
           cex-strictly-decreasing-gaps-no-limit]
---

**Objective.** This page is the worked companion to *Monotone Sequences,
Bolzano-Weierstrass, and Cauchy Completeness*, linked under Prerequisites above.
That page proves the machinery; this one runs it. There are no new definitions
and no new theorems here: five examples compute a limit in full, and six
counterexamples exhibit the witnesses behind the false statements and behind
every hypothesis the theorems carry.

The examples all have the same two-part shape, and the shape is the lesson.
**First** a limit is shown to exist, by monotone convergence or by
contractivity, without any idea what it is. **Then** the limit is identified, by
passing to the limit in the recursion that produced the sequence. Neither half
is optional, and the second half is legitimate only because a sequence and its
shift have the same limit ([[lem-limit-of-tail]]) and the algebra of limits
transports the right-hand side. Writing down the fixed-point equation before
convergence is known proves nothing at all, and that is the standard error these
computations are arranged to expose.

The three recursive sequences are chosen to differ in exactly one respect each.
[[ex-babylonian-sqrt-two]] decreases to $\sqrt 2$ and needs the quotient case of
the algebra of limits, so its proof must first establish that the limit is
nonzero; that is where a hurried argument breaks.
[[ex-recursive-sqrt-two-plus-x]] increases to $2$ and would need continuity of
the square root, which this library has not proved yet, so the recursion is
squared before the limit is taken, turning it into a polynomial identity that the
algebra of limits handles for free. Its limit equation has two roots and only one
is admissible, so the bound $L \ge 1$ is proved rather than waved through.
[[ex-contractive-sequence-fixed-point]] converges from **any** starting value and
is not monotone at all: convergence comes from contractivity, with the
contraction constant $1/3$ attained exactly, so the error bound of the theorem is
as sharp as that theorem can be.

[[ex-nested-intervals-single-point]] computes $\bigcap_{k\ge1}[0,1/k] = \{0\}$
twice over, once by the theorem and once by inspection, since knowing that the
intersection is *a* single point and knowing *which* point are different
statements. [[ex-two-subsequential-limits]] computes an entire subsequential
limit set, $\{-1,1\}$ for $(-1)^k(1+1/k)$, and does the converse direction by
taking absolute values, which collapses the sign and leaves one null
perturbation to handle.

**The counterexamples are organised by which hypothesis they delete.**
[[cex-nested-open-intervals-empty]] deletes closedness and
[[cex-nested-unbounded-closed-empty]] deletes boundedness, from the same theorem,
and the two failures are genuinely different: in the first the candidate point
exists and simply is not a member, while in the second there is no candidate at
all, since the set of canonical naturals has no supremum.
[[cex-sqrt-k-differences-null-not-cauchy]] deletes uniformity from the
contractive hypothesis in the crudest way, keeping only that consecutive gaps
tend to $0$, and the resulting sequence is not merely non-Cauchy but divergent to
$+\infty$. [[cex-strictly-decreasing-gaps-no-limit]] deletes it in the subtlest
way: every gap is strictly smaller than the last, every ratio of consecutive gaps
is below $1$, and still no single $c < 1$ works, because those ratios approach
$1$. Between them these two say exactly what
[[def-contractive-sequence]] is asking for.
[[cex-unbounded-with-convergent-subsequence]] refutes the converse of
Bolzano-Weierstrass with an interleaving that is unbounded and has a *constant*
subsequence, so its subsequential limit set is a single point while the sequence
diverges.

[[cex-cauchy-rationals-no-rational-limit]] is the one counterexample that is
about a different field. The decimal truncations of $\sqrt 2$ are Cauchy in
$\mathbb{Q}$ with no rational limit, which is the defect the construction of
$\mathbb{R}$ was built to repair; the construction and that refutation are on the
Cauchy-construction page and are cited, not repeated. What is added here is the
view from $\mathbb{R}$: the same sequence converges, to $\sqrt 2$, which is what
[[thm-cauchy-criterion-via-lub]] guarantees for every Cauchy sequence of reals.
The failure is a property of $\mathbb{Q}$ and not of the sequence, and seeing
both halves at once is the point of putting the item here rather than leaving it
where the construction lives.
