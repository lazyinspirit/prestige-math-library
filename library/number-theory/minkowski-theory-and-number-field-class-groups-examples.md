---
page: minkowski-theory-and-number-field-class-groups-examples
title: "Minkowski Theory and Number Field Class Groups — Examples"
status: draft
items: []
examples: [ex-minkowski-bound-for-gaussian-integers, ex-class-group-of-q-sqrt-minus-five, ex-class-group-of-q-sqrt-ten, ex-class-group-from-small-prime-ideals, ex-discriminant-lower-bound, ex-no-everywhere-unramified-extension-of-q, cex-minkowski-constants-change-under-scaled-embedding]
---

The examples run the Minkowski bound as a computational tool. The Gaussian
integers have trivial class group because $M_K=4/\pi<2$; the fields
$\mathbb Q(\sqrt{-5})$ and $\mathbb Q(\sqrt{10})$ have class group
$\mathbb Z/2\mathbb Z$, exhibited through a ramified prime ideal of norm $2$,
or through the norm-$2$ and norm-$3$ ideals tied together by an element of
norm $6$; and the quintic field of $X^5-X-1$ has trivial class group because
no ideal of norm $2$ or $3$ exists.

The two final examples isolate the numerical and ramification content of the
degree bound: the signature factor $(4/\pi)^{r_2}n!/n^n$ is always less than
$1$, forcing $|d_K|>1$, and a field of degree greater than one cannot be
unramified at every finite rational prime. The counterexample shows how mixing
the scaled and unscaled embedding conventions changes the covolume and
produces a false prediction from the equality criterion.
