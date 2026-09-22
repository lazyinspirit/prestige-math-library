---
page: gelfand-theory-and-commutative-c-star-algebras-examples
title: Gelfand Theory and Commutative C Star Algebras — Examples
status: published
items: []
examples: [ex-maximal-ideal-space-of-c-of-k, ex-maximal-ideal-space-of-the-disc-algebra, ex-gelfand-transform-of-ell-one-of-z, cex-gelfand-transform-of-a-banach-algebra-need-not-be-isometric, ex-banach-stone-weighted-composition-isometries, ex-gelfand-kolmogorov-recovers-beta-x-not-x, ex-stone-duality-for-a-power-set-algebra, ex-stone-duality-for-a-finite-boolean-algebra, rem-nagata-cp-theorem-remains-topological, rem-gerlits-nagy-remains-selection-principle-theory, rem-linear-dugundji-extension-remains-topological, ex-c-zero-of-a-locally-compact-space, ex-unitization-corresponds-to-one-point-compactification, rem-wiener-lemma-is-developed-on-the-fourier-analysis-track]
---

These companion examples exercise the Gelfand machinery of the main page on its
standard models. The character spaces of $C(K)$ and of the disc algebra show the
two extreme behaviours of a uniform algebra: for $C(K)$ the evaluations are all
the characters, while for the disc algebra
the character space is the closed disc even though the boundary restriction is
isometric, so the transform sees the interior. The Laurent example computes the
characters of $\ell^1(\mathbb Z)$ under convolution: they are the evaluations of
absolutely convergent Laurent series at unimodular $z$, the parameter circle is
homeomorphic to the character space, and the transform is the Laurent series
itself — injective but, as the Fourier track owns, not surjective. On the failing
side, the dual-number algebra $\mathbb C[\varepsilon]/(\varepsilon^2)$ with norm
$|a|+|b|$ has a single character killing $\varepsilon$, so its Gelfand transform
is neither injective nor isometric, and a weighted composition
$Tf(t) = e^{it}f(1-t)$ is a surjective isometry that is neither unital nor
multiplicative, displaying the full freedom allowed by Banach–Stone.

The topological examples unpack the dictionary. For discrete $\mathbb N$ a free
ultrafilter produces a free maximal ideal of $\mathbb R^{\mathbb N}$, so the ring
of all continuous functions has its maximal ideals in set-theoretic bijection
with $\beta\mathbb N$, with fixed ideals corresponding exactly to
$\mathbb N$; no topology on that ideal set is inferred. The Stone space of the power-set algebra is $\beta\mathbb N$ with
its universal property, and the finite power-set examples compute the degenerate
case where ultrafilters are principal and the Stone space is discrete. On the
nonunital side, $c_0(\mathbb N)$ has exactly the evaluation characters, no unit
and the finite-support characteristic functions as an approximate unit, and its
minimal unitization is the algebra of convergent sequences, corresponding to the
one-point compactification of $\mathbb N$. Three orientation remarks record
results that remain outside this pair — Nagata's $C_p$ theorem, the
Gerlits–Nagy selection-principle equivalence and Dugundji's linear extension
problem — each explicitly deferred and used nowhere in a proof; a fourth records
that the Wiener inverse theorem belongs to the Fourier-analysis track.
