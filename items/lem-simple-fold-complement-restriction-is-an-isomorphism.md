---
id: lem-simple-fold-complement-restriction-is-an-isomorphism
kind: lemma
title: "The simple-fold complement restriction is an isomorphism"
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 1
deps:
  - def-simple-fold-complement-splitting-and-projection
  - thm-rank-nullity
  - def-rank-and-nullity
  - cor-double-orthogonal-complement-and-dimension
  - thm-dimension-of-a-linear-subspace
  - thm-linear-kernel-image-and-injectivity
  - lem-standard-basis-of-f-n
  - def-linear-basis
  - def-linear-independence
  - def-dimension
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: "Eugene L. Allgower and Kurt Georg, Numerical Continuation Methods: An Introduction, Springer Series in Computational Mathematics 13 (1990)"
      url: "http://lib.ysu.am/disciplines_bk/080dea8526183abcce1135f2a4460625.pdf"
      locator: "Chapter 2, §2.1, printed pp. 7–12: kernel complements and full-rank curve tangents"
    - title: "K. A. Cliffe, A. Spence, and S. J. Tavener, The numerical analysis of bifurcation problems with application to fluid mechanics, Acta Numerica 9 (2000), 39–131"
      url: "https://www.math.colostate.edu/~tavener/manuscripts/cliffe/acta-numerica-2000.pdf"
      locator: "§3.2, printed pp. 53–55: Lyapunov–Schmidt projection and complement solve"
---

## Statement

For the data and notation of [[def-simple-fold-complement-splitting-and-projection]],
$J|_X:X\to Y$ is a linear isomorphism. The map $P=I-qw^T$ satisfies
$$P^2=P,\qquad \operatorname{range}P=Y,\qquad \ker P=\operatorname{span}\{q\}, \qquad PJ=J,\qquad Pb=0.$$

## Facts & Assumptions

**Given:** $J,v,w,b,a,X,Y,q,P$ and their hypotheses in
[[def-simple-fold-complement-splitting-and-projection]].

[F1] [[thm-rank-nullity]]: for a map between finite-dimensional spaces,
$\dim V=\dim\ker T+\dim\operatorname{im}T$.

[F2] [[cor-double-orthogonal-complement-and-dimension]]:
$\dim W+\dim W^\perp=\dim V$ in finite-dimensional inner-product spaces.

[F3] [[thm-dimension-of-a-linear-subspace]]: subspaces of equal finite
dimension are equal; [[thm-linear-kernel-image-and-injectivity]]: a linear
map is injective exactly when its kernel is zero.

[F4] [[lem-standard-basis-of-f-n]]: $\dim\mathbb R^n=n$.

[F5] [[def-linear-independence]], [[def-linear-basis]], and
[[def-dimension]]: independence means a zero linear combination has only zero
coefficients, a basis is an independent spanning set, and dimension is the
size of a finite basis.

[F6] [[def-rank-and-nullity]]: rank of a map with finite-dimensional domain
is the dimension of its image.

## Proof

**Given:** The fold data in [[def-simple-fold-complement-splitting-and-projection]].

1.1 Since $v$ is unit it is nonzero. If $\alpha v=0$, then $\alpha\|v\|_2^2=0$, so $\alpha=0$; thus $\{v\}$ is independent, and it spans $\operatorname{span}\{v\}$ by definition. It is therefore a basis and that span has dimension one by [F5]. The orthogonal-complement formula [F2] gives $\dim X=n-1$. [F2, F5, given, algebra]

1.2 Since $w^Tq=1$, the map $w^T$ is onto $\mathbb R$. Rank-nullity [F1] and $\dim\mathbb R^n=n$ [F4] give $\dim Y=n-1$; [F4] also gives $\dim\mathbb R^n=n$. [F1, F4, given, algebra]

1.3 Since $w^Tq=1$, direct multiplication gives $P^2=(I-qw^T)^2=I-qw^T=P$. Also $w^TP=0$, so $\operatorname{range}P\subseteq Y$, while $Py=y$ for every $y\in Y$; hence $\operatorname{range}P=Y$. The equation $Pz=0$ is equivalent to $z=q(w^Tz)$, so $\ker P=\operatorname{span}\{q\}$. [given, algebra]

2.1 From $w^TJ=0$ we have $\operatorname{im}J\subseteq Y$, and $J$ has rank $n-1$ by [F6]. Thus $\dim\operatorname{im}J=\dim Y$, so [F3] gives $\operatorname{im}J=Y$. Moreover, if $x\in X\cap\ker J$, then $x=\alpha v$ and $0=v^Tx=\alpha$, so $J|_X$ is injective by [F3]. Its image has dimension $n-1$ by [F1] and therefore equals $Y$ by [F3]. This proves that $J|_X$ is an isomorphism. [F1, F3, F6, step 1.1, step 1.2, given, algebra]

3.1 Finally $PJ=J-q(w^TJ)=J$, and $Pb=b-q(w^Tb)=b-qa=0$ by the definitions. [given, step 1.3, algebra] ∎
