---
id: thm-homological-atiyah-hirzebruch-spectral-sequence
kind: theorem
title: Homological Atiyah–Hirzebruch spectral sequence
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [lem-homological-ahss-exact-couple-from-the-skeletal-filtration, thm-an-exact-couple-generates-a-spectral-sequence, def-exact-couple, def-homological-spectral-sequence, def-associated-graded-object-of-a-filtered-object]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Davis–Kirk, Lecture Notes in Algebraic Topology, Theorem 9.6, printed pp. 243–246"
      url: https://www.maths.gla.ac.uk/~mpowell/Davis_Kirk_Lecture%20notes%20in%20algebraic%20topology.pdf
      locator: "Theorem 9.6, printed pp. 243–246"
    - title: "Haynes Miller, MIT 18.906 Algebraic Topology II, Lecture 26, printed pp. 89–92"
      url: https://ocw.mit.edu/courses/18-906-algebraic-topology-ii-spring-2020/e8a061a73ca1a451df8809c7a7fbc846_MIT18_906S20_notes.pdf
      locator: "Lecture 26, exact-couple filtration conventions, printed pp. 89–92"
---

## Statement

Let $X$ be a finite CW complex and $\widetilde h$ a reduced generalized homology
theory with pair groups $h_*$. There is a homological spectral sequence with
$$E^1_{p,q}=h_{p+q}(X^p,X^{p-1}),\qquad E^2_{p,q}\cong H_p\bigl(X;h_q(*)\bigr),\qquad d^r:E^r_{p,q}\to E^r_{p-r,q+r-1},$$
and for each total degree $n$ the filtration $F_p h_n(X):=
\operatorname{im}\bigl(h_n(X^p)\to h_n(X)\bigr)$ satisfies
$$E^\infty_{p,q}\cong F_p h_{p+q}(X)\big/ F_{p-1}h_{p+q}(X).$$
The filtration is finite in each total degree: $F_p h_n(X)=0$ for $p<0$ and
$F_p h_n(X)=h_n(X)$ for $p\geq\dim X$.

## Facts & Assumptions

[F1] The adjacent skeletal pairs form an initial exact couple with $D_{p,q}=h_{p+q}(X^p)$, $E_{p,q}=h_{p+q}(X^p,X^{p-1})$, first page the cellular chains with coefficients $h_q(*)$ and first differential the cellular boundary ([[lem-homological-ahss-exact-couple-from-the-skeletal-filtration]]).

[F2] An initial exact couple generates a spectral sequence starting at $E^1=E$ with differentials of bidegree $(-r,r-1)$ and with the subquotient description $E^r_{p,q}\cong N^r_{p,q}/B^r_{p,q}$, where $N^r_{p,q}=k^{-1}(\operatorname{im}(i^{r-1}:D_{p-r,q+r-1}\to D_{p-1,q}))$ and $B^r_{p,q}=j(\ker(i^{r-1}:D_{p,q}\to D_{p+r-1,q-r+1}))$ ([[thm-an-exact-couple-generates-a-spectral-sequence]], [[def-exact-couple]]).

[F3] A homological spectral sequence has square-zero differentials $d^r:E^r_{p,q}\to E^r_{p-r,q+r-1}$ and specified homology identifications $H(E^r,d^r)\cong E^{r+1}$ ([[def-homological-spectral-sequence]]).

[F4] For a finite CW complex and each $n$, the subgroups $F_p h_n(X)=\operatorname{im}(h_n(X^p)\to h_n(X))$ are nested with $F_p=0$ for $p<0$ and $F_p=h_n(X)$ for $p\geq\dim X$ ([[def-associated-graded-object-of-a-filtered-object]]).

## Proof

**Proof technique:** direct.

**Given:** A finite CW complex $X$ of dimension $N$ and a reduced generalized homology theory $\widetilde h$.

1.1 The exact couple of [F1] is initial, so [F2] supplies a spectral sequence with $E^1_{p,q}=h_{p+q}(X^p,X^{p-1})$, differentials of bidegree $(-r,r-1)$ and the displayed subquotient description of every page. [F1, F2]

1.2 Since the first differential is the cellular boundary, $E^2_{p,q}=H(E^1,d_1)_{p,q}\cong H_p(X;h_q(*))$ by the cellular homology identification of [F1]. [F1, F3]

1.3 For fixed $(p,q)$ put $n=p+q$. Then $N^r_{p,q}=k^{-1}(\operatorname{im}(h_{n-1}(X^{p-r})\to h_{n-1}(X^{p-1})))$: for $r>p$ the source skeleton is empty, so the image is zero and $N^\infty_{p,q}=\ker k$. Likewise $B^r_{p,q}=j(\ker(h_n(X^p)\to h_n(X^{p+r-1})))$, and for $p+r-1\geq N$ this kernel is $\ker(h_n(X^p)\to h_n(X))$. [F1, F2]

2.1 By exactness, $\ker k=\operatorname{im}(j:D_{p,q}=h_n(X^p)\to E_{p,q})$. Define $\Phi:\ker k\to F_ph_n(X)/F_{p-1}h_n(X)$ by choosing $x\in h_n(X^p)$ with $j(x)=e$ and sending $e$ to the image of $x$ in $h_n(X)$ modulo $F_{p-1}$. This is well defined because two such lifts differ by $\ker j=\operatorname{im}(h_n(X^{p-1})\to h_n(X^p))$, and it is surjective by the definition of $F_p$. Its kernel is $j(\ker(h_n(X^p)\to h_n(X)))$: one inclusion is immediate, and if the image of $x$ lies in $F_{p-1}$, choose $y\in h_n(X^{p-1})$ with the same image in $h_n(X)$; then $x-i(y)$ maps to zero in $h_n(X)$ and $j(x)=j(x-i(y))$. Thus step 1.3 gives $E^\infty_{p,q}=\ker k/j(\ker(h_n(X^p)\to h_n(X)))\cong F_ph_n(X)/F_{p-1}h_n(X)$. [F1, F2, F4, step 1.3]

3.1 Steps 1.1, 1.2 and 2.1 give the asserted first and second pages, the bidegree of the differentials and the identification of the stable page with the associated graded of the finite filtration, which proves the theorem. [step 1.1, step 1.2, step 2.1] ∎

## Source notes

Compare [Davis–Kirk](https://www.maths.gla.ac.uk/~mpowell/Davis_Kirk_Lecture%20notes%20in%20algebraic%20topology.pdf), Theorem 9.6, printed pp. 243–246, for the bidegree $(-r,r-1)$ and the finite skeletal convergence statement, and [Miller](https://ocw.mit.edu/courses/18-906-algebraic-topology-ii-spring-2020/e8a061a73ca1a451df8809c7a7fbc846_MIT18_906S20_notes.pdf), Lecture 26, printed pp. 89–92, for the exact-couple filtration conventions.
