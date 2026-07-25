---
page: sequences-and-limits
title: "Sequences and Limits"
status: draft
items: [def-sequence, lem-limit-of-tail, lem-limit-unique,
        lem-convergent-implies-bounded, lem-convergent-implies-cauchy,
        lem-null-times-bounded, thm-algebra-of-limits,
        lem-limit-preserves-order, thm-squeeze, lem-limit-abs,
        def-divergence-to-infinity, lem-reciprocal-of-null-diverges,
        lem-index-map-grows, lem-subsequence-inherits-limit,
        rem-sequence-conventions]
examples: [fs-bounded-implies-convergent, fs-limit-preserves-strict-inequality,
           fs-subsequence-convergence-implies-convergence]
---

**Objective.** This page builds the working toolkit for limits of real
sequences: the arithmetic of limits, the order properties of limits, the squeeze
theorem, and the behaviour of limits under passage to a subsequence. Together
with the suprema page it is what the rest of real analysis is written in.

Convergence is **not** defined here. The published [[def-real-limit]] already
says what it means for a sequence of reals to converge to a real and what it
means to be Cauchy, exactly as [[def-complete-ordered-field]] already defined the
supremum before the suprema page. What that definition leaves open is everything
one computes with, and that is the content of this page. The first item,
[[def-sequence]], adds only the surrounding vocabulary: bounded, eventually,
frequently, tail, subsequence.

One point of hygiene is settled at the outset. [[def-real-limit]] quantifies over
**rational** $\varepsilon > 0$, because in the construction of $\mathbb{R}$ the
rationals are available first. That loses nothing, since below any positive real
lies a positive rational ([[lem-rat-embeds-dense]]), and the argument is written
out once in the remarks of [[def-sequence]]. Proofs here run the test against a
real $\varepsilon$ wherever that is more convenient and cite that remark rather
than switching silently.

**The four load-bearing results.** [[lem-limit-unique]] is what licenses the
notation $\lim_k x_k$ at all. [[thm-algebra-of-limits]] is the main theorem:
limits respect sums, scalar multiples, differences, products and, under the
right hypothesis, quotients. Its quotient case is where textbook proofs
habitually cheat, since the estimate $|1/y_k - 1/y| = |y - y_k|/(|y_k||y|)$ is
worthless without a lower bound on $|y_k|$; that bound, $|y_k| > |y|/2$
eventually, is proved here from the reverse triangle inequality rather than
waved through. [[thm-squeeze]] establishes convergence of a sequence that is not
assumed to converge, which is what makes it a tool rather than a computation
rule. [[lem-subsequence-inherits-limit]] gives the standard divergence test: two
subsequences with different limits force divergence.

**Where the older pages are consumed.** [[lem-convergent-implies-bounded]] is
where round one's [[lem-finite-set-has-max]] does its main work: the first
finitely many terms of a convergent sequence are bounded because a nonempty
finite set of reals has a maximum, proved once by induction and cited here rather
than re-derived. Two further items on this page take a maximum of finitely many
reals and cite the same lemma. [[lem-index-map-grows]] is the corresponding
consumer on the $\mathbb{N}$ side, turning a strictly increasing index map into
the inequality $n_k \ge k$ by induction, using both that $0$ is the least natural
and that $\mathbb{N}$ is discrete ([[lem-nat-discrete]]); neither ingredient may
be dropped, as the remarks there show.

**Divergence to infinity is divergence.** [[def-divergence-to-infinity]] fixes
the meaning of $x_k \to +\infty$ and stresses what it does not mean: $+\infty$ is
not a real number, no limit in the sense of [[def-real-limit]] is being claimed,
and a sequence diverging to $+\infty$ is unbounded and therefore has no limit at
all. The notation is an abbreviation and never an equation, in line with the
library's refusal ([[rem-sup-conventions]]) to extend $\mathbb{R}$ silently.
[[lem-reciprocal-of-null-diverges]] then records the one clean bridge between the
two notions, valid for sequences of positive terms.

**The three false statements guard the three standard errors.** A bounded
sequence need not converge ([[fs-bounded-implies-convergent]]); the true
statement in that direction requires passing to a subsequence and is
Bolzano-Weierstrass, which this library does not yet prove anywhere. Strict
inequalities are not preserved in
the limit ([[fs-limit-preserves-strict-inequality]]); only the non-strict form
[[lem-limit-preserves-order]] survives, because a positive gap may shrink to
nothing. And one convergent subsequence says nothing at all about the sequence
([[fs-subsequence-convergence-implies-convergence]]); the correct statement needs
every subsequence, or a Cauchy hypothesis.

**What is deliberately deferred.** Monotone sequences and the monotone
convergence theorem, the Bolzano-Weierstrass theorem, and the completeness of
$\mathbb{R}$ in the Cauchy sense all belong to the next page of this track,
*Monotone Sequences, Bolzano-Weierstrass, and Cauchy Completeness*, which is
planned and not yet written. Of those, monotone sequences are not defined
anywhere in this library, and neither the monotone convergence theorem nor the
Bolzano-Weierstrass theorem is proved anywhere in it as things stand; no item
here may be cited for either. Cauchy completeness is the
exception and is stated as such rather than left vague: every Cauchy sequence of
reals converges, for the $\mathbb{R}$ this page works in, is already proved on the
Cauchy-construction page ([[thm-reals-cauchy-complete]]); what the next page will
add is a proof from the least-upper-bound property that does not go through a
construction. This page itself proves only the easy half,
[[lem-convergent-implies-cauchy]], and its remarks say exactly where the other
half stands. Nothing here uses the least-upper-bound property
except through the Archimedean property ([[thm-of-archimedean]]), so every result
on this page holds verbatim for sequences of rationals.
