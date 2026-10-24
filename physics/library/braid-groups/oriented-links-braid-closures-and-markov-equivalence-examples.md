---
page: oriented-links-braid-closures-and-markov-equivalence-examples
title: "Oriented Links, Braid Closures, and Markov Equivalence — Examples"
status: published
requires: [oriented-links-braid-closures-and-markov-equivalence]
items: []
examples: [ex-torus-links-as-closures-of-two-strand-braids,
           ex-a-markov-stabilization-preserves-the-unknot-closure,
           ex-alexanders-braiding-algorithm-on-a-small-diagram,
           cex-conjugacy-alone-does-not-classify-braid-closures]
---

These four entries make the closure and Markov machinery of the companion page
concrete. The first computes the closures of the two-strand braids
$\sigma_1^m$: the component count is the cycle count of the endpoint
permutation, the pictures are the $(2,m)$ torus links, and the cases
$m=0,\pm1,\pm3$ give the two-component unlink, the unknot and the two mirror
trefoils. The second exhibits both signs of a Markov stabilization of the
trivial one-strand braid and unwinds the added kink by the explicit
Reidemeister I isotopy, so that both stabilizations preserve the unknot
closure.

The third runs the Yamada-Vogel algorithm on the standard diagram of $5_2$,
smooths its crossings to a Seifert picture, performs the two reducing moves of
the source and reads off the resulting braid word, whose closure is the knot;
the example also records that the algorithm's output is not minimal for the
braid index. The fourth is a counterexample: the braids $\sigma_1$ in $B_2$ and
$\sigma_1\sigma_2$ in $B_3$ have equivalent closures, both the unknot, but
they cannot be conjugate in a single braid group because conjugacy preserves
the number of strands; at least one stabilization or destabilization is
therefore genuinely necessary in Markov's classification.
