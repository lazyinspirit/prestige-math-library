---
id: ex-nrqmx-twisted-ring-spectrum
kind: example
title: Twisted circle momentum and its interval boundary matrix
status: draft
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
domain: mathematics
library: mathematics
dependency_level: 3
deps:
  - thm-nrqm-intervals-twisted-periodic-momentum-domain
  - thm-nrqmx-interval-unitary-boundaries
  - def-nrqm-intervals-hilbert-sobolev-spaces
  - lem-nrqm-intervals-endpoint-trace-and-half-line-decay
  - def-adjoint-of-a-densely-defined-unbounded-operator
  - def-function
  - def-axiom-of-choice
  - def-countable-choice
  - def-dependent-choice
dependency_roles:
  thm-nrqm-intervals-twisted-periodic-momentum-domain: mathematical-premise
  thm-nrqmx-interval-unitary-boundaries: mathematical-premise
  def-nrqm-intervals-hilbert-sobolev-spaces: mathematical-premise
  lem-nrqm-intervals-endpoint-trace-and-half-line-decay: mathematical-premise
  def-adjoint-of-a-densely-defined-unbounded-operator: mathematical-premise
  def-function: mathematical-premise
  def-axiom-of-choice: mathematical-premise
  def-countable-choice: mathematical-premise
  def-dependent-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Gerald Teschl, Mathematical Methods in Quantum Mechanics, 1st edition 2009"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe.pdf"
      locator: "Section 2.6, printed pp.82–83: phase boundary conditions for first-order momentum"
    - title: "Manuel Asorey, Alberto Ibort, and Giuseppe Marmo, Global Theory of Quantum Boundary Conditions and Topology Change"
      url: "https://arxiv.org/pdf/hep-th/0403048"
      locator: "Appendix A, printed pp.19–20: anti-diagonal interval boundary matrix and pseudo-periodic conditions"
verification:
  precheck: pass
---

## Example

Assume the Axiom of Choice, Countable Choice, and Dependent Choice. Let
$L>0$, $\theta\in[0,2\pi)$, and $\hbar>0$. On $L^2(0,L;\mathbb C)$ let
$P_\theta f=-i\hbar Df$ with
$D(P_\theta)=\{f\in H^1(0,L):f(L)=e^{i\theta}f(0)\}$, using the continuous
Sobolev trace. Then $P_\theta$ is self-adjoint and has the complete
orthonormal eigenfamily
$$\phi_n(x)=L^{-1/2}e^{i(2\pi n+\theta)x/L},\qquad n\in\mathbb Z,$$
with eigenvalues $\hbar(2\pi n+\theta)/L$. Its squared realization
$P_\theta^2/\hbar^2$ is the interval Laplacian with domain
$\{f\in H^2(0,L):f(L)=e^{i\theta}f(0),\
f'(L)=e^{i\theta}f'(0)\}$. In the boundary convention of the A-page theorem,
this is the parameter
$$U_\theta=\begin{pmatrix}0&e^{-i\theta}\\e^{i\theta}&0\end{pmatrix}\in U(2).$$

## Example references

[[thm-nrqm-intervals-twisted-periodic-momentum-domain]]

[[thm-nrqmx-interval-unitary-boundaries]]

## Facts & Assumptions

**Given:** $L>0$, $\theta\in[0,2\pi)$, and $\hbar>0$.

[F1] For $P_\theta^0=-iD$ on
$\{f\in H^1(0,L):f(L)=e^{i\theta}f(0)\}$, the supplied theorem proves
self-adjointness and the complete orthonormal eigenfamily
$\phi_n=L^{-1/2}e^{i(2\pi n+\theta)x/L}$ with eigenvalues
$(2\pi n+\theta)/L$
([[thm-nrqm-intervals-twisted-periodic-momentum-domain]]).

[F2] The interval theorem parametrizes every self-adjoint realization of
$-D^2$ by the boundary equation
$(U-I_2)a+i(U+I_2)b=0$, where
$a=(f(0),f(L))$, $b=\ell(f'(0),-f'(L))$, and $U\in U(2)$
([[thm-nrqmx-interval-unitary-boundaries]]).

[F3] $H^2(0,L)=\{f\in H^1(0,L):Df\in H^1(0,L)\}$ and the endpoint traces of
$f$ and $Df$ are defined by their continuous representatives
([[def-nrqm-intervals-hilbert-sobolev-spaces]],
[[lem-nrqm-intervals-endpoint-trace-and-half-line-decay]]).

[F4] For a densely defined linear operator $A$ on a complex Hilbert space
and $c\in\mathbb R\setminus\{0\}$, the adjoint definition gives
$D((cA)^*)=D(A^*)$ and $(cA)^*=cA^*$. Indeed,
$x\mapsto\langle cAx,y\rangle=c\langle Ax,y\rangle$ is bounded in the
ambient norm exactly when $x\mapsto\langle Ax,y\rangle$ is bounded, and its
representing vector is $cA^*y$
([[def-adjoint-of-a-densely-defined-unbounded-operator]]). The nonzero
condition is essential: $(0A)^*$ is zero on the whole Hilbert space.

[F5] Regard operators as functions with declared domains ([[def-function]]).
Their composition applies the inner operator first and then the outer one,
so
$D(P_\theta\circ P_\theta)=\{f\in D(P_\theta):P_\theta f\in D(P_\theta)\}$
and $(P_\theta\circ P_\theta)f=P_\theta(P_\theta f)$ on this domain.

## Verification

**Given:** The model operators and boundary conventions above.

1.1 The first supplier [F1] gives $P_\theta^0$ self-adjoint with the stated
eigenfamily and eigenvalues. Since $\hbar$ is a positive real scalar,
$P_\theta=\hbar P_\theta^0$ has the same domain and is self-adjoint: the
adjoint identity [F4] gives
$(\hbar P_\theta^0)^*=\hbar(P_\theta^0)^*$.
Moreover $P_\theta\phi_n=\hbar(2\pi n+\theta)\phi_n/L$, so the same complete
orthonormal family has the scaled eigenvalues in the Statement. [F1, F4, given, algebra]

1.2 By [F5], $f\in D(P_\theta^2)$ exactly when
$f\in D(P_\theta)$ and $P_\theta f\in D(P_\theta)$. The latter condition
requires $Df\in H^1$, hence $f\in H^2$ by [F3], and its twisted trace is
$-i\hbar f'(L)=e^{i\theta}(-i\hbar f'(0))$, equivalently
$f'(L)=e^{i\theta}f'(0)$. Thus $D(P_\theta^2)$ is exactly the stated
second-order domain, and $P_\theta^2/\hbar^2=-D^2$ there. [F1, F3, F5, algebra]

2.1 For a function in this domain write $c=f(0)$ and $d=f'(0)$. Its boundary
vectors are $a=c\,p$ and $b=\ell d\,q$, where
$p=(1,e^{i\theta})$ and $q=(1,-e^{i\theta})$. These vectors are orthogonal
and have equal norm, since $\langle p,q\rangle=1-e^{i\theta}e^{-i\theta}=0$
and $\|p\|^2=\|q\|^2=2$. The columns of the displayed matrix
$U_\theta$ are $(0,e^{i\theta})$ and $(e^{-i\theta},0)$, which are
orthonormal, so $U_\theta\in U(2)$. It sends $p$ to $p$ and $q$ to $-q$,
so for $x=a+ib=c\,p+i\ell d\,q$ it gives
$U_\theta x=c\,p-i\ell d\,q=a-ib$. Therefore
$(U_\theta-I_2)a+i(U_\theta+I_2)b=0$. Conversely, for any $f\in H^2(0,L)$
satisfying this equation, expand its boundary vectors as
$a=\alpha p+\beta q$ and $b=\gamma p+\delta q$; the orthogonal nonzero
vectors $p,q$ form a basis of $\mathbb C^2$. The equation becomes
$-2\beta q+2i\gamma p=0$, so $\beta=\gamma=0$. Hence
$f(L)=e^{i\theta}f(0)$ and, since $\ell>0$,
$f'(L)=e^{i\theta}f'(0)$. By [F2], this is exactly the
self-adjoint boundary realization $T_{U_\theta}$, which has the same domain
and action as $P_\theta^2/\hbar^2$. [F2, given, step 1.2, algebra] ∎
