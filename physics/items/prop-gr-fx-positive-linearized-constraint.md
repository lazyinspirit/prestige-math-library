---
id: prop-gr-fx-positive-linearized-constraint
kind: proposition
title: "Positive Fourier inverse for the linearized CMC constraint"
status: draft
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
domain: mathematics
library: physics
dependency_level: 3
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
deps:
  - def-gr-fx-conformal-constraint-data
  - thm-gr-fx-lichnerowicz-reduction
  - prop-gr-fx-constant-constraint-solution
  - def-gr-periodic-torus-and-sobolev-spaces
  - lem-gr-periodic-fourier-differentiation-and-norm-equivalence
  - thm-fourier-basis-and-parseval-on-the-n-torus
  - thm-heine-borel-rn
  - thm-extreme-value-metric
  - def-countable-choice
dependency_roles:
  def-gr-fx-conformal-constraint-data: mathematical-premise
  thm-gr-fx-lichnerowicz-reduction: mathematical-premise
  prop-gr-fx-constant-constraint-solution: mathematical-premise
  def-gr-periodic-torus-and-sobolev-spaces: mathematical-premise
  lem-gr-periodic-fourier-differentiation-and-norm-equivalence: mathematical-premise
  thm-fourier-basis-and-parseval-on-the-n-torus: mathematical-premise
  thm-heine-borel-rn: mathematical-premise
  thm-extreme-value-metric: mathematical-premise
  def-countable-choice: mathematical-premise
physical_scope: "Fourier analysis of the linearized vacuum CMC constraint operator at the stated flat-torus solution; it proves a positive linear inverse and no nonlinear nearby-data existence theorem."
sources:
  references:
    - title: "É. Gourgoulhon, 3+1 Formalism and Bases of Numerical Relativity, Lecture Notes in Physics 846 (2012; author preprint arXiv:gr-qc/0703035v1), §6.3.3, §6.5.2, and §§8.2.2–8.2.4"
      url: "https://arxiv.org/pdf/gr-qc/0703035"
      locator: "Full 220-page lecture-note PDF retrieved; complete relevant scalar-curvature and CMC Lichnerowicz sections inspected, including equations (6.52), (6.103), (8.5)–(8.8) and the §8.2.4 uniqueness discussion."
    - title: "R. Bartnik and J. Isenberg, The Constraint Equations, in The Einstein Equations and the Large Scale Behavior of Gravitational Fields (Birkhäuser, 2004), arXiv:gr-qc/0405092v1"
      url: "https://arxiv.org/pdf/gr-qc/0405092"
      locator: "Full 34-page review chapter retrieved; the relevant §4.1 discussion and equations (47)–(56) were inspected for the CMC scalar equation and the distinction between its formula and solvability analysis."
verification:
  precheck: pass
---

## Statement

Let $\Sigma=\mathbb T^3_{2\pi}$ with dimensionless coordinates
$x^i\pmod{2\pi}$ and flat conformal metric
$\widetilde h=L_*^2\sum_{i=1}^3(dx^i)^2$, where $L_*>0$ is a fixed reference
length. Suppose $\widetilde\sigma$ has constant squared norm $A>0$ and
$\tau\ne0$, and let $\phi_0$ be the positive constant solution in the preceding
proposition. Put
$$c:=7A\phi_0^{-8}+\frac{10}{3}\tau^2\phi_0^4>0.$$
The directional linearization of the Lichnerowicz scalar expression at
$\phi_0$ is
$$\mathcal A v=-8\widetilde\Delta v+cv.$$
It is strictly positive on nonzero smooth real $v$. For every integer $s\ge2$,
the same differential expression, interpreted using weak derivatives, defines
a bounded bijection
$\mathcal A:H^{s+2}(\mathbb T^3_{2\pi})\to H^s(\mathbb T^3_{2\pi})$. With
Fourier coefficients relative to the normalized torus measure, its inverse is
$$\widehat{\mathcal A^{-1}f}(k)= \frac{\widehat f(k)}{8L_*^{-2}|k|^2+c},\qquad k\in\mathbb Z^3,$$
and, for $N_s(f)^2:=\sum_k(1+|k|^2)^s|\widehat f(k)|^2$,
$$N_{s+2}(\mathcal A^{-1}f)\le \min\{8L_*^{-2},c\}^{-1}N_s(f).$$
The equivalent derivative Sobolev norms therefore give a bounded
$H^s\to H^{s+2}$ inverse. This linear result does not assert nonlinear
differentiability of the constraint map or nearby-data solvability.

## Statement references

[[def-gr-fx-conformal-constraint-data]]

[[thm-gr-fx-lichnerowicz-reduction]]

[[prop-gr-fx-constant-constraint-solution]]

[[def-gr-periodic-torus-and-sobolev-spaces]]

[[lem-gr-periodic-fourier-differentiation-and-norm-equivalence]]

[[thm-fourier-basis-and-parseval-on-the-n-torus]]

[[thm-heine-borel-rn]]

[[thm-extreme-value-metric]]

[[def-countable-choice]]

## Facts & Assumptions

**Given:** The flat torus with $L_*>0$, constant $A>0$ and $\tau\ne0$, and $\phi_0>0$ as in the preceding proposition. Assume $\mathrm{AC}_\omega$ for the Fourier Sobolev suppliers and inherited embedded Lorentzian interpretation. Let $\chi_k([x])=e^{ik\cdot x}$ and $\widehat f(k)=\int f\overline{\chi_k}\,d\mu$ use the normalized measure $\mu$ of the torus supplier.

[A1] [[def-countable-choice]], [[def-gr-fx-conformal-constraint-data]], [[def-gr-periodic-torus-and-sobolev-spaces]], [[lem-gr-periodic-fourier-differentiation-and-norm-equivalence]]: $\mathrm{AC}_\omega$ is the axiom that every countable family of nonempty sets has a choice function; the Fourier Sobolev suppliers state it explicitly, and the local GR definition carries it only for embedded interpretation.

[F1] [[def-gr-fx-conformal-constraint-data]]: $\phi$ is positive and dimensionless; the metric's Christoffel symbols use the Levi-Civita formula, curvature is computed from that connection, and $\widetilde\Delta$ is its metric Laplacian.

[F2] [[thm-gr-fx-lichnerowicz-reduction]]: the scalar expression is $\mathcal C(\phi)=-8\widetilde\Delta\phi+\widetilde R\phi- |\widetilde\sigma|_{\widetilde h}^2\phi^{-7}+(2/3)\tau^2\phi^5$.

[F3] [[prop-gr-fx-constant-constraint-solution]]: $\phi_0>0$ solves this equation for the stated flat constant seed data.

[F4] [[def-gr-periodic-torus-and-sobolev-spaces]]: the torus is $\mathbb R^3/(2\pi\mathbb Z)^3$, smooth functions lift to smooth periodic functions, its normalized measure is Lebesgue measure on a fundamental cube divided by $(2\pi)^3$, its characters are indexed by $k\in\mathbb Z^3$, and $H^s$ is defined by weak derivatives.

[F5] [[lem-gr-periodic-fourier-differentiation-and-norm-equivalence]]: the Fourier differentiation identity holds and $N_s$ is equivalent to the derivative Sobolev norm for every nonnegative integer $s$.

[F6] [[thm-fourier-basis-and-parseval-on-the-n-torus]]: the Fourier coefficient map is a surjective isometry from complex $L^2$ onto $\ell^2(\mathbb Z^3)$; real-valued inputs have conjugate-symmetric coefficients.

[F7] [[thm-heine-borel-rn]]: every closed box in Euclidean three-space is compact.

[F8] [[thm-extreme-value-metric]]: every continuous real-valued function on a nonempty compact metric space is bounded and attains its extrema.

## Proof

1.1 For a fixed smooth real direction $v$, its periodic lift is continuous on
the nonempty compact box $[0,2\pi]^3$ by [F4, F7], so [F8] gives a finite
bound $V:=\sup|v|$. If $V>0$, choose $|\epsilon|<\phi_0/(2V)$; if $V=0$,
positivity is immediate. In either case $\phi_0+\epsilon v>0$ for all such
directions and sufficiently small $|\epsilon|$.
Every term in $c$ is positive because $A>0$, $\phi_0>0$ and $\tau\ne0$.
Since $\widetilde h_{ij}=L_*^2\delta_{ij}$, the Christoffel formula in the
conformal-data definition gives $\widetilde\Gamma^k{}_{ij}=0$ in the local
periodic charts. The curvature definition then gives $\widetilde R=0$, and
the Laplacian formula gives $\widetilde\Delta=L_*^{-2}\sum_i\partial_i^2$.
Differentiating the scalar expression [F2] at the constant $\phi_0$ gives
$-8\widetilde\Delta v$ from its linear Laplacian term, zero from
$\widetilde R=0$, $7A\phi_0^{-8}v$ from $-A\phi^{-7}$, and
$(10/3)\tau^2\phi_0^4v$ from $(2/3)\tau^2\phi^5$. Thus its directional
linearization is $\mathcal A=-8\widetilde\Delta+c$. For each $i$,
periodicity makes the integral of $\partial_i(v\partial_i v)$ over one period zero;
expanding that derivative gives
$\int v\partial_i^2v\,d\mu=-\int(\partial_i v)^2\,d\mu$. Summing over $i$
therefore yields
$$\int v\mathcal A v\,d\mu =8L_*^{-2}\int|\nabla_0v|^2\,d\mu+c\int v^2\,d\mu>0$$
for every nonzero smooth real $v$: choose a point where $v\ne0$; continuity
gives a coordinate box of positive torus measure on which $|v|$ is bounded
below by a positive constant, so $\int v^2d\mu>0$. Here
$\nabla_0v=(\partial_1v,\partial_2v,\partial_3v)$.
[A1, F1, F2, F3, F4, F7, F8, algebra]

2.1 For any $v\in H^{s+2}$, the weak-derivative Fourier identity [F5] gives
$\widehat{\mathcal A v}(k)=a_k\widehat v(k)$ with
$a_k=8L_*^{-2}|k|^2+c$. Since $c>0$, every $a_k>0$, and
$a_k\ge m(1+|k|^2)$ for
$m:=\min\{8L_*^{-2},c\}>0$; also
$a_k\le M(1+|k|^2)$ for
$M:=\max\{8L_*^{-2},c\}$. The upper bound proves
$N_s(\mathcal A v)\le M N_{s+2}(v)$. Norm equivalence in [F5] therefore
makes the weak operator bounded for the derivative Sobolev norms. For real
$f\in H^s$,
[F6] gives $\widehat f(-k)=\overline{\widehat f(k)}$. Since $a_{-k}=a_k$ is real,
$\widehat v(k):=\widehat f(k)/a_k$ has the same conjugate symmetry and
therefore [F6] gives it a unique complex $L^2$ representative $v$. The
coefficient definition gives $\widehat{\overline v}(k)=\overline{\widehat v(-k)}
=\widehat v(k)$, so injectivity of the coefficient isometry [F6] yields
$\overline v=v$ in $L^2$. The lower bound gives
$$N_{s+2}(v)^2 =\sum_k\frac{(1+|k|^2)^{s+2}}{a_k^2}|\widehat f(k)|^2 \le m^{-2}N_s(f)^2.$$
The lower bound makes the coefficient sequence square-summable with weight
$(1+|k|^2)^{s+2}$; [F5] then gives $v\in H^{s+2}$, with
$\mathcal A v=f$. If $\mathcal A v=0$, then $a_k\widehat v(k)=0$ for every
$k$, hence all coefficients vanish and $v=0$. This proves surjectivity,
injectivity and the asserted inverse bound for every integer $s\ge2$.
[F4, F5, F6, step 1.1, algebra] ∎

## Remarks

The zero Fourier mode is invertible because $a_0=c>0$. The result supplies the linear inverse only; a nonlinear implicit-function argument would also require an explicitly proved positive-open domain and composition estimates.
