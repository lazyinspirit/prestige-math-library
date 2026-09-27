---
page: the-ip-equals-pspace-theorem-examples
title: "The IP = PSPACE Theorem: Examples and Counterexamples"
status: draft
items: []
examples: [ex-two-quantifier-qbf-arithmetization-transcript, ex-multilinearization-preserves-boolean-values, ex-ip-can-be-given-perfect-completeness, cex-ip-equals-pspace-needs-no-degree-reduction]
---

These examples keep the protocol at sizes that can be checked by hand: a
complete two-quantifier transcript over a small prime field, an explicit
multilinearization of a two-variable polynomial whose degree in one variable
drops from three to one, and the true instance $\exists x\,(x)$ carried through
the TQBF reduction to exhibit perfect completeness. The counterexample is the
family $\exists y\,\forall x_1\cdots\forall x_k\,(y)$: its syntax is linear in
$k$, but the naive arithmetization that omits the reductions carries degree
$2^k$ at the node for $y$, so the degree reduction cannot be dropped.
