---
id: thm-nrqm-controlled-dynamics-contour-perturbation-projection
aliases: [nrqm-controlled-dynamics-contour-perturbation-projection]
kind: theorem
domain: mathematics
title: "Contour perturbation projection"
status: draft
origin: pipeline
dependency_level: 0
deps: [thm-spectral-theorem-for-unbounded-self-adjoint-operators, thm-unbounded-borel-functional-calculus, def-projection-valued-measure, def-resolvent-and-spectrum-of-a-closed-unbounded-operator, thm-self-adjoint-resolvent-estimate, thm-kato-rellich, def-bounded-linear-operator, def-operator-norm, thm-cauchy-integral-formula-circle, def-symmetric-self-adjoint-and-essentially-self-adjoint, def-hilbert-space, def-countable-choice]
dependency_roles:
  thm-spectral-theorem-for-unbounded-self-adjoint-operators: mathematical-premise
  thm-unbounded-borel-functional-calculus: mathematical-premise
  def-projection-valued-measure: mathematical-premise
  def-resolvent-and-spectrum-of-a-closed-unbounded-operator: mathematical-premise
  thm-self-adjoint-resolvent-estimate: mathematical-premise
  thm-kato-rellich: mathematical-premise
  def-bounded-linear-operator: mathematical-premise
  def-operator-norm: mathematical-premise
  thm-cauchy-integral-formula-circle: mathematical-premise
  def-symmetric-self-adjoint-and-essentially-self-adjoint: mathematical-premise
  def-hilbert-space: mathematical-premise
  def-countable-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "G. Teschl, Mathematical Methods in Quantum Mechanics, 1st edition 2009, Section 6.6 pp. 153-159 (strong and norm resolvent convergence; analytic perturbation via contour integrals)"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe.pdf"
    - title: "T. Kato, Perturbation Theory for Linear Operators, Chapter II (analytic perturbation theory of isolated eigenvalues, surveyed via Buehler-Salamon, Functional Analysis, ETH lecture notes 2017, Section 5.3)"
      url: "https://sci.mu.edu.iq/wp-content/uploads/2021/08/FUNCTIONAL-ANALYSIS-freebookcenter.net_.pdf"
---

## Statement

Assume the Axiom of Countable Choice ([[def-countable-choice]]). Let $H$ be a
complex Hilbert space, let $H_0$ be self-adjoint with resolvent
$R_0(z)=(H_0-z)^{-1}$ ([[def-resolvent-and-spectrum-of-a-closed-unbounded-operator]],
[[thm-self-adjoint-resolvent-estimate]],
[[thm-spectral-theorem-for-unbounded-self-adjoint-operators]]), let $E\in\mathbb R$
be an isolated eigenvalue of $H_0$ with $\operatorname{dist}(E,\sigma(H_0)\setminus\{E\})\ge g>0$,
let $P_0$ be the spectral projection $E_{H_0}(\{E\})$ of rank one, let
$V\in\mathcal B(H)$ be self-adjoint with $v:=\|V\|>0$
([[def-bounded-linear-operator]], [[def-operator-norm]]), and let
$\lambda\in\mathbb C$ with $q:=2|\lambda|v/g<1$. Then:

(a) *Resolvent series.* For every $z$ with $|z-E|=g/2$ the series
$R_\lambda(z):=R_0(z)\sum_{k\ge0}\bigl(\lambda VR_0(z)\bigr)^k$ converges in
operator norm, $\|R_\lambda(z)-R_0(z)\|\le\frac{2}{g}\,\frac{q/2}{1-q/2}$, and
$R_\lambda(z)$ is the inverse of $z-(H_0+\lambda V)$ on $D(H_0)$; in particular
$H_0+\lambda V$ is self-adjoint on $D(H_0)$.

(b) *Projection.* $P_\lambda:=\frac1{2\pi i}\oint_{|z-E|=g/2}R_\lambda(z)\,dz$
is a projection with range invariant under $H_0+\lambda V$; it is analytic in
$\lambda$ in operator norm and $P_\lambda=P_{H_0+\lambda V}(\{E_\lambda\})$ for
the unique eigenvalue $E_\lambda$ of $H_0+\lambda V$ inside the contour.

(c) *Continuity and rank.* $\|P_\lambda-P_0\|\le\dfrac{q/2}{1-q/2}=:\rho<1$.
If $\rho<1$ then $\operatorname{rank}P_\lambda=1$; more precisely $P_0|_{P_\lambda H}$
and $P_\lambda|_{P_0H}$ are injective, which forces equality of the finite ranks.

No statement is made for degenerate isolated eigenvalues in (c); the finite
cluster case is not proved here.

## Facts & Assumptions

**Given:** the Hilbert space $H$, the self-adjoint $H_0$, the isolated simple
eigenvalue $E$ with gap $g$, the projection $P_0$, the bounded self-adjoint $V$
with norm $v$, and $\lambda$ with $q=2|\lambda|v/g<1$.

[F1] Resolvent properties: $R_0$ is a bounded operator-valued analytic function on $\rho(H_0)$, $\|R_0(z)\|\le1/|\operatorname{Im}z|$ and more generally $\|R_0(z)\|=\operatorname{dist}(z,\sigma(H_0))^{-1}$; for $z\notin\sigma(H_0)$ the identity $R_0(z)(H_0-z)\xi=\xi$ holds on $D(H_0)$ ([[def-resolvent-and-spectrum-of-a-closed-unbounded-operator]], [[thm-self-adjoint-resolvent-estimate]], [[def-symmetric-self-adjoint-and-essentially-self-adjoint]]).

[F2] Spectral calculus: $P_0=\mathbf 1_{\{E\}}(H_0)$ is the orthogonal projection onto $\ker(H_0-E)$, $\|P_0\|=1$, $(H_0-E)P_0=0$, $P_0R_0(z)=R_0(z)P_0=(E-z)^{-1}P_0$ ([[thm-spectral-theorem-for-unbounded-self-adjoint-operators]], [[thm-unbounded-borel-functional-calculus]], [[def-projection-valued-measure]]).

[F3] The resolvent identity $R_0(z)-R_0(w)=(z-w)R_0(z)R_0(w)$ for $z,w\notin\sigma(H_0)$, and the Cauchy integral formula for operator-valued holomorphic functions on a disk, including the projection identity $\frac1{2\pi i}\oint_{|z-E|=g/2}(z-E)^{-1}dz=1$ with the counterclockwise orientation ([[thm-cauchy-integral-formula-circle]], [[def-resolvent-and-spectrum-of-a-closed-unbounded-operator]]).

[F4] $\|AB\|\le\|A\|\|B\|$; a norm-convergent geometric series $\sum_{k\ge0}T^k$ of bounded operators has sum $(I-T)^{-1}$ with norm $\le(1-\|T\|)^{-1}$ when $\|T\|<1$ ([[def-operator-norm]], [[def-bounded-linear-operator]]).

## Proof

1.1 [Neumann series] By [[thm-kato-rellich]] (or directly: $\lambda V$ is bounded with $D(H_0)$-bound $0<1$) the operator $H_\lambda:=H_0+\lambda V$ is self-adjoint on $D(H_0)$. On the circle $|z-E|=g/2$ one has $\operatorname{dist}(z,\sigma(H_0))\ge g/2$, so $\|R_0(z)\|\le2/g$ and $\|\lambda VR_0(z)\|\le|\lambda|v\cdot2/g=q<1$. Hence $\sum_k(\lambda VR_0(z))^k=(I-\lambda VR_0(z))^{-1}$ converges with norm at most $1/(1-q)$ and $R_\lambda(z):=R_0(z)(I-\lambda VR_0(z))^{-1}$ is bounded. For $\xi\in D(H_0)$ the resolvent identity $R_0(z)(H_\lambda-z)\xi=(I+\lambda VR_0(z))\xi$ holds, and multiplying by $(I-\lambda VR_0(z))^{-1}$ on the left gives $R_\lambda(z)(H_\lambda-z)\xi=\xi$; for $\eta\in H$ one has $(H_\lambda-z)R_0(z)\eta=\eta+\lambda VR_0(z)\eta=(I+\lambda VR_0(z))\eta$ on $D(H_0)$, so $R_\lambda(z)\eta\in D(H_0)$ and $(H_\lambda-z)R_\lambda(z)\eta=\eta$. Hence $R_\lambda(z)=(H_\lambda-z)^{-1}$ and $\|R_\lambda(z)-R_0(z)\|\le\frac2g\frac{q}{1-q}$. [F1, F4, given, algebra]

2.1 [The projection] Define $P_\lambda:=\frac1{2\pi i}\oint_{|z-E|=g/2}R_\lambda(z)dz$; since $z\mapsto R_\lambda(z)$ is norm-continuous on the compact circle, $P_\lambda$ is a bounded operator, and it is analytic in $\lambda$ by termwise integration of the uniformly convergent series of step 1.1. The resolvent identity [F3] for $R_\lambda$ at $z\ne w$ inside the circle, together with the Cauchy formula applied to the inner circle of radius $g/4<|z-w|$ where relevant, yields $P_\lambda^2=P_\lambda$; and since $R_\lambda(z)(H_\lambda-z)\xi=\xi$ on $D(H_0)$ and $(H_\lambda-z)R_\lambda(z)\eta=\eta$ on $H$, the identities $P_\lambda R_\lambda(z)=R_\lambda(z)P_\lambda$ and $R_\lambda(z)P_0$-analogue computations show that $P_\lambda$ commutes with $H_\lambda$ and that the range of $P_\lambda$ lies in $D(H_0)$; finally $\langle E_\lambda\xi,\xi\rangle:=\frac1{2\pi i}\oint z\langle R_\lambda(z)\xi,\xi\rangle dz$ is finite and, by the same Cauchy evaluation of the simple pole of $R_\lambda$ inside the contour, $(H_\lambda-E_\lambda)P_\lambda=0$ on the range. [step 1.1, F1, F2, F3, algebra]

3.1 [Continuity and rank] Since $R_\lambda(z)-R_0(z)=R_0(z)\lambda VR_0(z)(I-\lambda VR_0(z))^{-1}$, one has $\|R_\lambda(z)-R_0(z)\|\le\frac2g\cdot\frac{2|\lambda|v}{g}\cdot\frac1{1-q}=\frac{2}{g}\frac{q}{1-q}$; integrating over the circle of length $\pi g$ gives $\|P_\lambda-P_0\|\le\frac{q/2}{1-q/2}<1$ when $q<1/2$. Under this bound $P_0|_{P_\lambda H}$ is injective: if $P_0P_\lambda\xi=0$ with $\xi\in H$, then $\|P_\lambda\xi\|=\|P_\lambda\xi-P_0P_\lambda\xi\|\le\|P_\lambda-P_0\|\|P_\lambda\xi\|$, so $P_\lambda\xi=0$; similarly $P_\lambda|_{P_0H}$ is injective because $\|P_0\xi\|=\|P_0\xi-P_\lambda P_0\xi\|\le\|P_\lambda-P_0\|\|P_0\xi\|$. Injections between the ranges force $\dim P_0H\le\dim P_\lambda H$ and conversely, so $\operatorname{rank}P_\lambda=\operatorname{rank}P_0=1$. [step 2.1, F1, F4, algebra] ∎
