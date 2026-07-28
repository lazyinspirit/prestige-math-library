---
page: compactness-examples
title: "Compactness: Examples and Counterexamples"
status: draft
items: []
examples: [ex-compactness-in-the-standard-topologies,
           ex-the-interval-the-cantor-set-and-the-hilbert-cube-are-compact,
           ex-one-point-compactifications-of-the-line-and-of-the-naturals,
           ex-sigma-compactness-and-lindelof-in-the-line-and-the-rationals,
           ex-the-sorgenfrey-line-is-lindelof-and-its-square-is-not,
           cex-limit-point-compact-without-countable-compactness,
           cex-a-continuous-image-of-a-locally-compact-space,
           ex-the-alexander-subbase-lemma-applied-to-a-closed-interval]
---

**Objective.** This page is the worked companion to Compactness, linked under
Prerequisites above. That page builds the theory; this one computes with it, in
spaces concrete enough that every claim can be checked by hand.

**Where the standard topologies sit.**
[[ex-compactness-in-the-standard-topologies]] places the discrete, indiscrete,
cofinite, cocountable, particular-point and Sierpinski topologies in the
hierarchy. Two of the answers are worth carrying away: the indiscrete and the
cofinite topologies are compact on every set, so compactness on its own separates
no points at all and implies nothing about the space beyond the covering
condition; and the discrete and particular-point topologies are compact exactly on
a finite set.

**Three compact spaces, three different tools.**
[[ex-the-interval-the-cantor-set-and-the-hilbert-cube-are-compact]] proves
compactness of $[0,1]$ from Heine-Borel, of the Cantor set from its being closed
inside $[0,1]$, and of $[0,1]^{\mathbb{N}}$ from Tychonoff. The first two are
theorems of ZF and the third rests on the Axiom of Choice, which is the
difference between a finite and an infinite index set rather than anything about
the factors.

**Compactifying by one point.**
[[ex-one-point-compactifications-of-the-line-and-of-the-naturals]] identifies the
two standard cases. For the discrete naturals the added point turns out to be
$\omega$ itself, so the compactification **is** the ordinal $\omega+1$ with its
order topology and nothing has to be constructed. For the line, inverse
stereographic projection gives a rational bijection onto the unit circle, and the
continuity of its inverse is supplied by compactness rather than computed.

**Two spaces that are large but still tractable.**
[[ex-sigma-compactness-and-lindelof-in-the-line-and-the-rationals]] shows that
$\mathbb{R}$ and $\mathbb{Q}$ are both $\sigma$-compact, and both Lindelöf
assuming countable choice, while only $\mathbb{R}$ is locally compact: the
rationals have a compact neighbourhood at no point, because a compact subset of
$\mathbb{Q}$ is closed in $\mathbb{R}$ and so cannot contain all the rationals of
an interval. [[ex-the-sorgenfrey-line-is-lindelof-and-its-square-is-not]] takes
the half-open intervals as a basis and finds a Lindelöf space whose square is
not, the antidiagonal being an uncountable closed discrete subspace; the same
space appears elsewhere in the library under the name Sorgenfrey line and is
re-minted here so that this page depends on nothing it may not cite.

**Two counterexamples.**
[[cex-limit-point-compact-without-countable-compactness]] is the witness that the
singleton hypothesis in the compactness hierarchy is not decoration: in
$\mathbb{N} \times \{a,b\}$ with the second factor indiscrete every nonempty set
has a limit point, for the trivial reason that each point has an inseparable
partner, and yet a countable open cover has no finite subcover.
[[cex-a-continuous-image-of-a-locally-compact-space]] collapses the naturals
inside $\mathbb{R}$ to a single point and shows the quotient is locally compact at
no point of it; collapsing a **compact** set instead would have preserved local
compactness, which is why the set collapsed has to be closed, discrete and
infinite.

**A second route to an old theorem.**
[[ex-the-alexander-subbase-lemma-applied-to-a-closed-interval]] derives the
compactness of $[0,1]$ from the subbase lemma and the least upper bound property
alone, with no bisection, no metric and no sequence. It costs the Axiom of Choice,
where the metric proof costs nothing, so the two routes are recorded together with
their prices rather than presented as interchangeable.
