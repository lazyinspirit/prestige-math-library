---
id: cex-hopf-lax-without-convex-superlinear-coercivity
kind: counterexample
title: Nonconvexity can break the equation; nonsuperlinearity can limit the Lagrangian domain
status: draft
origin: pipeline
pipeline_run: frontier-39-analysis-30
deps:
- def-legendre-transform-of-a-hamiltonian
- def-hopf-lax-operator
- lem-hopf-lax-infima-localise
- def-viscosity-subsolution-and-supersolution
justified_by: []
aliases: []
dependency_level: 3
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  scraped: []
  references:
  - title: 'Hung Vinh Tran, Hamilton--Jacobi Equations: Theory and Applications, 2020 preliminary author manuscript of AMS Graduate Studies in Mathematics 213 (complete text)'
    url: https://people.math.wisc.edu/~htran24/HJ-equations-Tran-AMS.pdf
    locator: Chapter 2, Example 2.2, printed p. 61 (superlinearity versus linear growth), and assumptions (2.18), printed p. 67. The two conjugates and counterexample residuals are computed here.
verification:
  precheck: pass
---

## Statement refuted

**False claim:** the Hopf--Lax formula of [[def-hopf-lax-operator]] solves the
equation for every finite superlinear Hamiltonian, and the Legendre transform
of a finite Hamiltonian is real-valued on all of $\mathbb R^n$.

Two separate scope boundaries occur. (a) Convexity is essential if the
Hopf--Lax formula is claimed to solve the equation for the original
Hamiltonian: for $H(p)=p^2-2|p|$ on $\mathbb R$, which is finite and
superlinear but not convex, the formula applied to $u_0\equiv0$ produces
$u(x,t)=t$, and at every interior point the smooth function itself is an upper
test whose residual $u_t+H(u_x)=1+H(0)=1>0$ violates the viscosity subsolution
inequality ([[def-viscosity-subsolution-and-supersolution]]). (b)
Superlinearity is needed for the full-domain real-valued Lagrangian
conclusion: for the finite convex Hamiltonian $H(p)=\sqrt{1+p^2}$, which is
not superlinear, the Legendre transform equals $-\sqrt{1-v^2}$ for
$|v|\le1$ and $+\infty$ for $|v|>1$, so finite action is available only when
$|x-y|\le t$; this is exactly the full-domain finiteness conclusion of
[[lem-hopf-lax-infima-localise]] that fails without superlinearity. The second
clause does not show failure of the value or the solution property: for
$u_0\equiv0$ the formula is $Q_tu_0\equiv-t$, whose residual is
$-1+H(0)=0$.

## Facts & Assumptions

**Given:** The Hamiltonians $H(p)=p^2-2|p|$ and $H(p)=\sqrt{1+p^2}$ on $\mathbb R$, their Legendre transforms $L$, the bounded uniformly continuous datum $u_0\equiv0$, and the extended infimum formula $Q_t$ defined in [F2].

[F1] $L(v)=\sup_{p\in\mathbb R}(pv-H(p))$ for a finite Hamiltonian on $\mathbb R$, the supremum being taken in $\overline{\mathbb R}$, and $L(v)=+\infty$ is possible ([[def-legendre-transform-of-a-hamiltonian]]).

[F2] For the two Hamiltonians considered here, define the extended infimum formula $Q_tu_0(x):=\inf_{y\in\mathbb R}\{u_0(y)+tL((x-y)/t)\}$ for $t>0$ and $Q_0u_0:=u_0$. This extends the same expression in [[def-hopf-lax-operator]] beyond that definition's convex-superlinear hypotheses. Here $L(v)\ge-H(0)$ and $u_0=0$, so the infimum is well defined in $\mathbb R\cup\{+\infty\}$, with $t(+\infty)=+\infty$. The finiteness and attainment theorem [[lem-hopf-lax-infima-localise]] applies under convexity and superlinearity only; it is not invoked for these two Hamiltonians.

[F3] A function $u$ is a viscosity subsolution of $u_t+H(u_x)=0$ only if $\phi_t+H(\phi_x)\le0$ at every local maximum of $u-\phi$ with $\phi\in C^1$ ([[def-viscosity-subsolution-and-supersolution]]).

## Counterexample

**Proof technique:** split each conjugate supremum at the sign of $p$ and evaluate the resulting formula.

1.1 Conjugate of the nonconvex Hamiltonian. For $H(p)=p^2-2|p|$ and $p\ge0$ one has $pv-H(p)=p(v+2)-p^2$, whose supremum over $p\ge0$ is $(v+2)_+^2/4$; for $p\le0$, writing $p=-q$ with $q\ge0$ gives $pv-H(p)=-qv-q^2+2q=q(2-v)-q^2$, whose supremum is $(2-v)_+^2/4$. Hence $L(v)=\max\{(v+2)_+^2/4,(2-v)_+^2/4\}$, where $r_+=\max(r,0)$; in particular $L(0)=1$, $L(v)=(2+|v|)^2/4\ge1$ for every $v$ and $L(v)\ge4$ for $|v|\ge2$, so $\inf_vL(v)=1$, attained at $v=0$. [F1, algebra]

1.2 Conjugate of the non-superlinear Hamiltonian. For $H(p)=\sqrt{1+p^2}$ and $|v|<1$, the function $p\mapsto pv-\sqrt{1+p^2}$ has derivative $v-p/\sqrt{1+p^2}$, which vanishes exactly at $p=v/\sqrt{1-v^2}$, where the value is $-\sqrt{1-v^2}$; at $v=\pm1$ the supremum is $0$, approached along the infinite tail $p\to\pm\infty$; and for $|v|>1$ the expression tends to $+\infty$ along $p=\operatorname{sgn}(v)r$ as $r\to\infty$. Hence $L(v)=-\sqrt{1-v^2}$ for $|v|\le1$ and $L(v)=+\infty$ for $|v|>1$: the Legendre transform is not real-valued on all of $\mathbb R$, finite action being available only when $|x-y|/t\le1$, that is $|x-y|\le t$. For $u_0\equiv0$ the formula is $Q_tu_0=t\inf_vL(v)=-t$; the residual of $u(x,t)=-t$ is $u_t+H(u_x)=-1+H(0)=-1+1=0$, so as a formal expression it does satisfy the equation, and no failure of the solution property is claimed in this clause. [F1, F2, algebra]

2.1 The formula is not a solution for the nonconvex Hamiltonian. With $u_0\equiv0$, the Hopf--Lax formula of [F2] is $Q_tu_0(x)=t\inf_{v\in\mathbb R}L(v)=t$ for every $x$ and $t>0$ (the substitution $v=(x-y)/t$ turns the infimum over $y$ into the infimum over $v$). The function $u(x,t)=t$ is smooth, and for a smooth function every point is both an upper and a lower contact with the test function itself; as an upper test, [F3] requires $u_t+H(u_x)\le0$, but $u_t=1$ and $u_x=0$ give $1+H(0)=1>0$. Hence the Hopf--Lax output is not a viscosity subsolution, therefore not a viscosity solution, of $u_t+H(u_x)=0$. [step 1.1, F2, F3, algebra]

3.1 Conclusion. Part (a) exhibits a finite superlinear nonconvex Hamiltonian whose Hopf--Lax output fails the subsolution inequality pointwise, and part (b) exhibits a finite convex non-superlinear Hamiltonian whose Legendre transform is finite only on a bounded velocity set, so superlinearity cannot be dropped from the full-domain finiteness conclusion. The two failures are of different kinds: convexity is needed for the equation to hold, superlinearity for the Lagrangian to be finite everywhere. [step 1.1, step 1.2, step 2.1] ∎ 