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
verification:
  precheck: n/a
---
## Statement

Assume AC. Put the tine $T(F)$ and the noodle $N$ in transverse position with
the minimal number $l$ of intersection points, assume $l>0$, and label the pairs by monomials
$m_{i,j}=q^{a_{i,j}}t^{b_{i,j}}$ and signs
$\epsilon_{i,j}=-(-1)^{b_{i,i}+b_{j,j}+b_{i,j}}$. If $m_{i,j}$ is maximal
among the monomials, then $m_{i,i}=m_{j,j}=m_{i,j}$, hence
$\epsilon_{i,j}=-(-1)^{b_{i,j}}$; consequently every term of the pairing
carrying a maximal monomial has the same sign and the maximal coefficient of
$\langle N,F\rangle$ is nonzero.

## Facts & Assumptions

**Given:** a noodle $N$ and a fork $F$, placed with the tine and $N$ in minimal position by [[lem-arcs-in-a-punctured-disk-have-disjointness-detecting-minimal-positions]]; the labelled intersections $z_1,\dots,z_l$, the parallel points $z'_1,\dots,z'_l$, the monomials $m_{i,j}$ and signs $\epsilon_{i,j}$ of [[def-lexicographic-order-on-fork-noodle-deck-monomials]].

[F1] The exponent formula $a_{i,j}=(a_{i,i}+a_{j,j})/2$ holds for all $i,j$; it is Bigelow 2001 Lemma 2.1, proved from the explicit computation of the arcs $\xi_i$.

[F2] The sign formula $\epsilon_{i,j}=-(-1)^{b_{i,i}+b_{j,j}+b_{i,j}}$ is Bigelow 2001 equation (1), proved from the orientations of $\Sigma(N)$ and $\Sigma(F)$.



## Proof

1.1 Let $m_{i,j}$ be maximal in the lexicographic order. Then $a_{i,j}$ is maximal among the integers $a_{k,l}$, hence $a_{i,i}\le a_{i,j}$ and $a_{j,j}\le a_{i,j}$. By [F1], $$a_{i,j}=\tfrac12\bigl(a_{i,i}+a_{j,j}\bigr)\le\tfrac12\bigl(a_{i,j}+a_{i,j}\bigr)=a_{i,j},$$ and the two inequalities must be equalities; this is possible only if $a_{i,i}=a_{j,j}=a_{i,j}$. [F1, given, algebra]

2.1 To prove $b_{i,i}=b_{i,j}$, suppose $b_{i,i}<b_{i,j}$, the only possible strict inequality by maximality and step 1.1. Let $\alpha$ run from $z'_i$ to $z'_j$ along $T(F')$, and let $\beta$ return along $N$. If $\beta$ misses $z_i$, lifting the loop with one point fixed at $z_i$ gives $b_{i,j}-b_{i,i}=2w$, where $w=\operatorname{wind}(\alpha\beta,z_i)$. If $\beta$ passes through $z_i$, push it locally so $z_i$ lies to its left; this contributes one positive half twist, giving $1+b_{i,j}-b_{i,i}=2w$. In either case $w>0$. [given, step 1.1, construct]

3.1 In the infinite cyclic cover $\pi:\widetilde D_1\to D\setminus\{z_i\}$ lift $\alpha$, then $\beta$ from its endpoint. Choose a clockwise return loop $\gamma$ at $z'_i$, winding $w$ times about $z_i$, nullhomotopic in $D\setminus P$, and meeting $\alpha\cup\beta$ only at its endpoints. It can be drawn in a thin puncture-free neighborhood of an access path to $z_i$; its lifted spiral $\widetilde\gamma$ is embedded and joins the endpoint of $\widetilde\beta$ back to the start of $\widetilde\alpha$. Let $\widetilde z'_k$ be the first intersection of $\widetilde\alpha$ with $\widetilde\beta$, and take the initial $\widetilde\alpha'$ and final $\widetilde\beta'$ at this point. Then $\widetilde\alpha'\widetilde\beta'\widetilde\gamma$ is a Jordan curve. Its bounded disk $\widetilde B$ lies to its left: the clockwise spiral leaves a noncompact region on the right. The labelled-loop winding computation gives $a_{i,k}-a_{i,i}=\#(\widetilde B\cap\pi^{-1}(P))$. Maximality forces this nonnegative integer to be zero. Hence the disk misses the lifted punctures and its projected boundary $\delta=\alpha'\beta'\gamma$ is nullhomotopic in $D\setminus P$. This is the disk calculation in Bigelow 2001's extremal-claim proof, printed p. 481 (the precise claim number is recorded in the source locator). [F1, given, step 2.1, construct]

4.1 The projection of $\alpha'\beta'$ need not be embedded. If it is a Jordan curve, cancellation of the nullhomotopic $\gamma$ shows it bounds a puncture-free digon. Otherwise the portions of $\pi^{-1}(\alpha')$ entering $\widetilde B$ are disjoint arcs with both endpoints on $\widetilde\beta'$. Choose an innermost such arc $\widetilde\alpha''$ and its corresponding side $\widetilde\beta''$. The latter has no further intersections with $\pi^{-1}(\alpha')$, so its projection meets $\alpha'$ only at the two endpoints. Thus $\alpha''\beta''$ is an embedded loop. Its lifted disk is contained in the puncture-free $\widetilde B$, so the projected loop is nullhomotopic and bounds a puncture-free digon by Jordan separation. In both cases the parallel tine and $N$ cobound a digon, which transfers across the narrow parallel strip to $T(F)$ and $N$ and contradicts minimality. Therefore $b_{i,i}=b_{i,j}$. [step 3.1, construct]

5.1 The equality $b_{j,j}=b_{i,j}$ is proved by the same argument with the roles of $i$ and $j$ interchanged: the same arc $\alpha$ from $z'_i$ to $z'_j$ and the arc $\beta'$ from $z'_i$ to $z'_j$ along $N$ are used, and the maximality of $a_j$ replaces that of $a_i$. Hence $b_{i,i}=b_{j,j}=b_{i,j}$ and $m_{i,i}=q^{a_{i,i}}t^{b_{i,i}} =q^{a_{i,j}}t^{b_{i,j}}=m_{i,j}$, and similarly $m_{j,j}=m_{i,j}$. [step 4.1, algebra]

6.1 By [F2] and step 5.1, if $m_{i,j}$ is maximal then $\epsilon_{i,j}=-(-1)^{b_{i,i}+b_{j,j}+b_{i,j}}=-(-1)^{b_{i,j}}$; the same holds for every pair $(i',j')$ whose monomial equals the maximal monomial $m_{i,j}$. Hence all terms of $\langle N,F\rangle$ carrying the maximal monomial have the same sign, and since monomials are compared in the lexicographic order, the coefficient of the maximal monomial in $\langle N,F\rangle$ is, up to sign, the number of such terms, which is at least one. In particular $\langle N,F\rangle\ne0$. [F2, step 1.1, step 5.1, algebra] ∎
