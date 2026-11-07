---
dependency_level: 5
id: lem-rational-subgroups-have-quantitatively-adapted-malcev-bases
kind: lemma
title: Rational subgroups have quantitatively adapted Mal’cev bases
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
deps:
  - lem-finite-nilpotent-exponential-and-bch-calculus
  - lem-quantitative-malcev-polynomial-coordinate-calculus
  - def-malcev-basis-and-rationality
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: Ben Green and Terence Tao, The quantitative behaviour of polynomial orbits on nilmanifolds
      url: https://annals.math.princeton.edu/wp-content/uploads/annals-v175-n2-p02-p.pdf
      locator: Definition A.7 and Propositions A.9–A.10, printed pp. 532–534
---

## Statement

Let $G/\Gamma$ have a supplied $Q$-rational Mal’cev basis $X$, dimension $m$, nilpotence step at most $s$, and $Q\ge2$. Let $\mathfrak h\subset\mathfrak g$ be a Lie subalgebra with a basis of rational combinations of $X$ whose coefficient heights are at most $Q$. Set $H=\exp\mathfrak h$ and $\Lambda=H\cap\Gamma$. Suppose every term of a finite flag in $\mathfrak h$ has a basis of rational combinations of $X$ with coefficient heights at most $Q$, and the flag either is a degree-$d$ filtration $\mathfrak h=\mathfrak h_0=\mathfrak h_1\supset\cdots\supset\mathfrak h_{d+1}=0$, or satisfies $\mathfrak h=\mathfrak h_0\supset\cdots\supset\mathfrak h_{d+1}=0$ and $[\mathfrak h,\mathfrak h_i]\subset\mathfrak h_{i+1}$ for every $i$. Then $\Lambda$ is a lattice in the closed connected subgroup $H$, and $H/\Lambda$ has a Mal’cev basis adapted to the flag, consisting of rational combinations of $X$ with coefficient heights $Q^{O_{m,s,d}(1)}$. Its structure constants have the same bound.

The assertion includes rational intersections and rational relative-square subalgebras, with their specified rational flags satisfying these conditions. It establishes the lattice condition rather than assuming it in the meaning of rational subgroup. All constructions require only finite choices.

## Statement references

[Green–Tao, A.7–A.10](https://annals.math.princeton.edu/wp-content/uploads/annals-v175-n2-p02-p.pdf)

## Facts & Assumptions

**Given:** The supplied ambient basis, subalgebra and finite rational flag in the statement. Constants $C$ depend only on $m,s,d$.

[F1] Mal’cev basis, rational height, and lattice use the supplied conventions in [[def-malcev-basis-and-rationality]].

[F2] Exponential subgroups, finite BCH and nested global coordinates are supplied by [[lem-finite-nilpotent-exponential-and-bch-calculus]].

[F3] Bounded rational coordinate maps, common denominators and finite rational linear algebra are proved in [[lem-quantitative-malcev-polynomial-coordinate-calculus]].

## Proof

1.1 Use $A_X=\log_X\circ E_X$ for second-to-first coordinates and $F_X=A_X^{-1}$. Since $\Gamma=E_X(\mathbb Z^m)$, clearing the common coefficient denominator of $A_X$ gives $\log_X\Gamma\subset a^{-1}\mathbb Z^m$ for some $a\le Q^C$. Enlarge $a$ to be divisible also by every coefficient denominator of $F_X$. Its zero constant term then gives $F_X(a\mathbb Z^m)\subset\mathbb Z^m$, so $a\mathbb Z^m\subset\log_X\Gamma$. Thus $a\mathbb Z^m\subset\log_X\Gamma\subset a^{-1}\mathbb Z^m$. A rational change of full basis and its bounded rational inverse preserve such a sandwich after enlarging $a$ by a bounded power: apply their matrices to the two inclusions and clear denominators. Extend a rational basis of $\mathfrak h$ to $\mathfrak g$ and restrict to the first $\dim\mathfrak h$ coordinates of this sandwich. Since exponential images preserve intersections, it gives the same weak sandwich for $\log\Lambda$ in the chosen basis of $\mathfrak h$. No lattice property for $\Lambda$ has yet been assumed. [F1, F2, F3, algebra]

2.1 Extend bounded rational bases successively through the flag from its smallest nonzero term to $\mathfrak h$, using the finite minor construction of [F3]. This gives a bounded rational ordered basis $Y=(Y_1,\ldots,Y_l)$ in which every specified flag term is a tail. In the filtration case choose the largest $i\ge1$ with $Y_j\in\mathfrak h_i$; then $[\mathfrak h,Y_j]\subset\mathfrak h_{i+1}$, strictly after its flag block. In the second flag case use its given bracket-drop property, including $i=0$. Thus in either case $[\mathfrak h,Y_j]\subset\operatorname{span}(Y_{j+1},\ldots,Y_l)$. The preceding change-of-basis argument gives $a\mathbb Z^l\subset\log_Y\Lambda\subset a^{-1}\mathbb Z^l$, with $a\le Q^C$. BCH makes ordered exponential coordinates for every nested basis a global triangular polynomial chart. [F2, F3, step 1.1, algebra]

3.1 Put $V_j=\operatorname{span}(Y_{j+1},\ldots,Y_l)$, $K_j=\exp V_j$, and $\Lambda_j=\Lambda\cap K_j$. Construct $Z_l,\ldots,Z_1$ in reverse order, each $Z_j\in\operatorname{span}(Y_j,\ldots,Y_l)$ with positive $Y_j$ coefficient and $\exp Z_j\in\Lambda$, requiring $\Lambda_j=\{\exp(n_{j+1}Z_{j+1})\cdots\exp(n_lZ_l):n_i\in\mathbb Z\}$. Initially $K_l=\{e\}$, so the assertion is empty. Suppose the later vectors have been constructed. The first coordinate projection of $\Lambda_{j-1}$ in $K_{j-1}/K_j\cong\mathbb R$ is an additive subgroup $P$ with $a\mathbb Z\subset P\subset a^{-1}\mathbb Z$, by the weak sandwich and triangular BCH. A subgroup of $\mathbb Z$ is generated by its least positive member, since Euclidean division leaves a smaller nonnegative remainder in that subgroup. Therefore $P=c\mathbb Z$ with $c=b/a$, $1\le b\le a^2$. [F2, step 2.1, construct, algebra]

4.1 Choose one lift $\gamma\in\Lambda_{j-1}$ with first coordinate $c$, and write $\gamma=\exp(cY_j)h$ with $h\in K_j$. Reduce $h$ on the right modulo $\Lambda_j$ using its already constructed $Z_{>j}$ basis: at each coordinate in increasing order multiply by $\exp(-\lfloor t_i\rfloor Z_i)$, recalculating that coordinate after previous multiplications. Triangular multiplication leaves previous coordinates fixed and replaces the current one by its fractional part. It gives $h=h_0\delta$, where $\delta\in\Lambda_j$ and all the later $Z$ coordinates of $h_0$ lie in $[0,1)$. Then $\gamma_0=\gamma\delta^{-1}=\exp(cY_j)h_0\in\Lambda_{j-1}$. If the already constructed $Z_i$ have coefficient heights $Q^C$, bounded BCH coefficients, $c\le a$ and the bounded coordinates of $h_0$ imply that $\log_Y\gamma_0$ has magnitude $Q^C$. Its coefficients also lie in $a^{-1}\mathbb Z$ by the weak sandwich. Both their numerators and denominators are therefore bounded by $Q^C$. Set $Z_j=\log\gamma_0$. This is a bounded rational lift with its necessary tail correction. [F2, F3, step 2.1, step 3.1, construct, algebra]

5.1 Every $\gamma\in\Lambda_{j-1}$ has first projection $nc$ for an integer $n$, so $\exp(-nZ_j)\gamma\in\Lambda_j$. Hence it has the asserted ordered integer factorization in $Z_j,\ldots,Z_l$. Conversely every such product lies in $\Lambda_{j-1}$. The first projection determines $n$ uniquely, and induction determines the tail uniquely. This proves the induction assertion. The positive nonzero diagonal and tail form make $Z$ a basis, and its flag tails are the original flag tails. Its structure constants have heights $Q^C$ by [F3]. There are only $l$ stages, so successive enlargements of $C$ remain bounded in terms of $m,s,d$. [F3, step 3.1, step 4.1, algebra]

6.1 The resulting ordered coordinates are global by [F2], and $\Lambda$ consists exactly of their integral points by step 5.1. Its discreteness follows either from the ambient discrete $\Gamma$ or the weak sandwich. The same finite floor reduction gives every right coset a representative in $E_Z([0,1)^l)$; the continuous image of the closed cube $[0,1]^l$ therefore maps onto $H/\Lambda$, proving compactness. Thus $\Lambda$ is a lattice and $Z$ is the required adapted Mal’cev basis. For rational intersections and relative-square subalgebras, [F3] supplies the bounded rational bases from their defining linear equations; the argument applies whenever their specified flags have the stated bracket-drop property. A single lift is chosen at each of finitely many stages, so only finite choice is used. The case $l=0$ has empty basis and the trivial lattice. [F1, F2, F3, step 5.1, algebra] ∎

## Remarks

The reading covers GT12 Definitions 2.1–2.6 and all Appendix A. Printed Definition A.7 reverses the useful weak-lattice inclusions; the proved sandwich is $a\mathbb Z^l\subset\log_Y\Lambda\subset a^{-1}\mathbb Z^l$. The lift step of A.9 requires tail corrections: in the additive lattice generated by $(1,1/2),(0,1)$, projection has generator $1$ but $(1,0)$ is not a lattice point. The tail-corrected generator induction includes those corrections explicitly. No general Mal’cev-existence theorem or choice-dependent exponential theorem is imported.
