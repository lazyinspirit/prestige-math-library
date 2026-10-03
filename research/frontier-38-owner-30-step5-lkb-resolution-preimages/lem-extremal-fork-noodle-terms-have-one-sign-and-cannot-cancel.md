---
id: lem-extremal-fork-noodle-terms-have-one-sign-and-cannot-cancel
kind: lemma
title: Extremal fork-noodle terms have one sign and cannot cancel
status: draft
origin: pipeline
deps: [def-lexicographic-order-on-fork-noodle-deck-monomials, lem-the-fork-noodle-pairing-is-well-defined-and-equivariant, lem-arcs-in-a-punctured-disk-have-disjointness-detecting-minimal-positions, def-axiom-of-choice, lem-jordan-schoenflies-extension-for-plane-curves]
justified_by: []
aliases: []
dependency_level: 7
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Bigelow, Braid groups are linear, J. Amer. Math. Soc. 14 (2001) 471-486"
      url: "https://web.math.ucsb.edu/~bigelow/publications/03.pdf"
      locator: "Claim 3.4 and its proof, printed pp. 480-481: maximal monomial implies m_{i,i}=m_{j,j}=m_{i,j}"
    - title: "Bigelow, The Lawrence-Krammer representation, arXiv:math/0204057v1"
      url: "https://arxiv.org/pdf/math/0204057"
      locator: "Section 2.1, printed p. 5: Lemma a_{i,j}=(a_{i,i}+a_{j,j})/2 and Claim 3.3"
verification:
  precheck: n/a
---
## Statement

Assume AC. Put the tine $T(F)$ and the noodle $N$ in transverse position with
the minimal number $l$ of intersection points, label the pairs by monomials
$m_{i,j}=q^{a_{i,j}}t^{b_{i,j}}$ and signs
$\epsilon_{i,j}=-(-1)^{b_{i,i}+b_{j,j}+b_{i,j}}$. If $m_{i,j}$ is maximal
among the monomials, then $m_{i,i}=m_{j,j}=m_{i,j}$, hence
$\epsilon_{i,j}=-(-1)^{b_{i,j}}$; consequently every term of the pairing
carrying a maximal monomial has the same sign and the maximal coefficient of
$\langle N,F\rangle$ is nonzero.

## Facts & Assumptions

**Given:** a noodle $N$ and a fork $F$, placed with the tine and $N$ in
minimal position by
[[lem-arcs-in-a-punctured-disk-have-disjointness-detecting-minimal-positions]];
the labelled intersections $z_1,\dots,z_l$, the parallel points
$z'_1,\dots,z'_l$, the monomials $m_{i,j}$ and signs $\epsilon_{i,j}$ of
[[def-lexicographic-order-on-fork-noodle-deck-monomials]].

[F1] The exponent formula $a_{i,j}=(a_{i,i}+a_{j,j})/2$ holds for all $i,j$;
it is Bigelow 2001 Lemma 2.1, proved from the explicit computation of the arcs
$\xi_i$.

[F2] The sign formula
$\epsilon_{i,j}=-(-1)^{b_{i,i}+b_{j,j}+b_{i,j}}$ is Bigelow 2001 equation
(1), proved from the orientations of $\Sigma(N)$ and $\Sigma(F)$.



## Proof

1.1 Let $m_{i,j}$ be maximal in the lexicographic order. Then $a_{i,j}$ is maximal among the integers $a_{k,l}$, hence $a_{i,i}\le a_{i,j}$ and $a_{j,j}\le a_{i,j}$. By [F1], $$a_{i,j}=\tfrac12\bigl(a_{i,i}+a_{j,j}\bigr)\le\tfrac12\bigl(a_{i,j}+a_{i,j}\bigr)=a_{i,j},$$ and the two inequalities must be equalities; this is possible only if $a_{i,i}=a_{j,j}=a_{i,j}$. [F1, given, algebra]

2.1 One shows $b_{i,i}=b_{i,j}$ by the winding-number argument of Bigelow. Since $m_{i,j}$ is maximal and $a_{i,i}=a_{i,j}$, one has $b_{i,i}\le b_{i,j}$. Suppose $b_{i,i}<b_{i,j}$. Let $\alpha$ be the embedded arc from $z'_i$ to $z'_j$ along $T(F')$ and $\beta$ the embedded arc from $z'_j$ to $z'_i$ along $N$. If $\beta$ does not pass through $z_i$, let $w$ be the winding number of the closed curve $\alpha\beta$ around $z_i$; then $b_{i,j}-b_{i,i}=2w$. If $\beta$ passes through $z_i$, modify $\beta$ near $z_i$ so that $z_i$ lies to its left; then $1+b_{i,j}-b_{i,i}=2w$. In either case $w>0$. Let $D_1=D\setminus\{z_i\}$, let $\pi:\widetilde D_1\to D_1$ be its universal (infinite cyclic) cover, and lift $\alpha$ to an arc $\widetilde\alpha$ in $\widetilde D_1$, then $\beta$ to the lift $\widetilde\beta$ beginning at $\widetilde\alpha(1)$. The loop $\gamma$ based at $z'_i$ that winds $w$ times clockwise around $z_i$, is null-homotopic in $D\setminus P$, and meets $\alpha\cup\beta$ only in its endpoints has a lift $\widetilde\gamma$ from $\widetilde\beta(1)$ to $\widetilde\alpha(0)$ that is embedded. Let $\widetilde z'_k$ be the first point of $\widetilde\alpha$ meeting $\widetilde\beta$, and let $\widetilde\alpha'$, $\widetilde\beta'$ be the corresponding initial and final segments; then $\widetilde\delta'=\widetilde\alpha'\widetilde\beta'\widetilde\gamma$ is a simple closed curve in $\widetilde D_1$ and, by the Jordan curve theorem ([[lem-jordan-schoenflies-extension-for-plane-curves]]), bounds a disk $\widetilde B$. Its projection $\delta'$ is null-homotopic in $D\setminus P$ (the clockwise winding of $\gamma$ leaves a non-compact region on the right of $\widetilde\delta'$, so $\widetilde B$ is wound counterclockwise), and $a_k-a_i$ equals the cardinality of $\widetilde B\cap\pi^{-1}(P)$. Since $a_i$ is maximal, this cardinality is zero and $a_k=a_i$. It follows that $\delta'$ is null-homotopic, hence $\alpha'$ is homotopic relative to its endpoints to a subarc of $N$; therefore $T(F)$ and $N$ cobound a digon, contradicting minimality of $l$. Thus $b_{i,i}<b_{i,j}$ is impossible and $b_{i,i}=b_{i,j}$. [F1, given, step 1.1, construct]

3.1 The equality $b_{j,j}=b_{i,j}$ is proved by the same argument with the roles of $i$ and $j$ interchanged: the same arc $\alpha$ from $z'_i$ to $z'_j$ and the arc $\beta'$ from $z'_i$ to $z'_j$ along $N$ are used, and the maximality of $a_j$ replaces that of $a_i$. Hence $b_{i,i}=b_{j,j}=b_{i,j}$ and $m_{i,i}=q^{a_{i,i}}t^{b_{i,i}} =q^{a_{i,j}}t^{b_{i,j}}=m_{i,j}$, and similarly $m_{j,j}=m_{i,j}$. [step 2.1, algebra]

4.1 By [F2] and step 3.1, if $m_{i,j}$ is maximal then $\epsilon_{i,j}=-(-1)^{b_{i,i}+b_{j,j}+b_{i,j}}=-(-1)^{b_{i,j}}$; the same holds for every pair $(i',j')$ whose monomial equals the maximal monomial $m_{i,j}$. Hence all terms of $\langle N,F\rangle$ carrying the maximal monomial have the same sign, and since monomials are compared in the lexicographic order, the coefficient of the maximal monomial in $\langle N,F\rangle$ is, up to sign, the number of such terms, which is at least one. In particular $\langle N,F\rangle\ne0$. [F2, step 1.1, step 3.1, algebra] ∎
