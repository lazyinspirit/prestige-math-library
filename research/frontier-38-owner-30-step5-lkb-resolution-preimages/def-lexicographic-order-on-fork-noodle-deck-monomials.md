---
id: def-lexicographic-order-on-fork-noodle-deck-monomials
kind: definition
title: The lexicographic order on fork-noodle deck monomials
status: draft
origin: pipeline
deps: [def-forks-noodles-and-their-lkb-intersection-pairing, def-lkb-two-variable-covering-homomorphism]
justified_by: []
aliases: []
dependency_level: 5
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Bigelow, Braid groups are linear, J. Amer. Math. Soc. 14 (2001) 471-486"
      url: "https://web.math.ucsb.edu/~bigelow/publications/03.pdf"
      locator: "Definition 3.3 and equation (9), printed pp. 480-481: lexicographic order on q^a t^b, maximal monomials, and the sum <N,F> = sum epsilon_{i,j} m_{i,j}"
    - title: "Bigelow, The Lawrence-Krammer representation, arXiv:math/0204057v1"
      url: "https://arxiv.org/pdf/math/0204057"
      locator: "Section 2.1, printed p. 5: the arcs delta_{i,j}, the monomials m_{i,j} = phi(delta_{i,j}) and the signs epsilon_{i,j}"
verification:
  precheck: n/a
---
## Definition

Let $N$ be a noodle and $F$ a fork of
[[def-forks-noodles-and-their-lkb-intersection-pairing]], and let
$\Phi$ be the two-variable covering homomorphism of
[[def-lkb-two-variable-covering-homomorphism]].

**Order.** The **lexicographic order** on the deck monomials $q^at^b$ is
$$q^at^b\le q^{a'}t^{b'}\quad\Longleftrightarrow\quad a<a',\ \text{or}\ a=a'\ \text{and}\ b\le b'.$$
The $q$-exponent is compared first. A monomial $m_{i,j}$ from a finite list is
**maximal** if $m_{i,j}\ge m_{i',j'}$ for all pairs of the list.

**Labelled intersections.** Put the tine edge $T(F)$ and the noodle $N$ in
transverse position and let $z_1,\dots,z_l$ be the intersection points of $N$
with $T(F)$, ordered along $N$. Choose a parallel copy $F'$ so that the tine
edge $T(F')$ meets $N$ transversely at points $z'_1,\dots,z'_l$, where $z_i$
and $z'_i$ are joined by a short arc of $N$ lying in the narrow strip between
$T(F)$ and $T(F')$. For $i,j\in\{1,\dots,l\}$ define
$$\delta_{i,j}=\{\alpha_1,\alpha_2\}\{\beta_1,\beta_2\}\{\gamma_1,\gamma_2\},$$
the arc in $C$ assembled from the following embedded arcs in $D\setminus P$:
$\alpha_1$ from $d_1$ to $z$ along the handle of $F$; $\alpha_2$ from $d_2$ to
$z'$ along the handle of $F'$; $\beta_1$ from $z$ to $z_i$ along $T(F)$;
$\beta_2$ from $z'$ to $z'_j$ along $T(F')$; $\gamma_1$ from $z_i$ to $d_k$
along $N$, where $k\in\{1,2\}$ is such that $\gamma_1$ does not pass through
$z'_j$; and $\gamma_2$ from $z'_j$ to $d_{k'}$ along $N$, where $k'\in\{1,2\}$
is such that $\gamma_2$ does not pass through $z_i$ (so $k\ne k'$ or $k=k'$
according to which side of the strip the two points lie on).

**Monomial and sign labels.** The pair $(z_i,z'_j)$ carries the **deck
monomial**
$$m_{i,j}=q^{a_{i,j}}t^{b_{i,j}}:=\Phi(\delta_{i,j}),$$
which is a well-defined element of $\pm q^{\mathbb Z}t^{\mathbb Z}\subset
\Lambda$; the exponent $a_{i,j}$ satisfies $a_{i,j}=(a_{i,i}+a_{j,j})/2$ by
Bigelow 2001 Lemma 2.1. The pair also carries the **sign**
$$\epsilon_{i,j}=-(-1)^{b_{i,i}+b_{j,j}+b_{i,j}}\in\{\pm1\},$$
the sign of the transverse intersection of the surfaces $\Sigma(N)$ and
$\Sigma(F)$ at the point over $\{z_i,z'_j\}$.

The list of labelled pairs $(z_i,z'_j,\epsilon_{i,j},m_{i,j})$ is kept
distinct from its sum: the *unsummed* labelled intersections are the geometric
data just described, whereas the Laurent polynomial obtained after collecting
equal monomials is the pairing value
$$\langle N,F\rangle=\sum_{i,j=1}^{l}\epsilon_{i,j}m_{i,j},$$
whose representative-independence and finiteness are proved in
[[lem-the-fork-noodle-pairing-is-well-defined-and-equivariant]]. This
definition fixes the order, the labels and the distinction, as used by the
extremal-term lemma and the geometric computation of the pairing.
