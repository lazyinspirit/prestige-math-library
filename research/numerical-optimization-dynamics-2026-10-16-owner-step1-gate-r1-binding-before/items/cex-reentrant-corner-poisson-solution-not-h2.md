---
id: cex-reentrant-corner-poisson-solution-not-h2
kind: counterexample
title: A reentrant corner prevents automatic H² dual regularity
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 3
deps:
  - def-countable-choice
  - def-sobolev-space-wkp-and-its-norm
  - def-wkp-zero-as-a-sobolev-closure
  - thm-aubin-nitsche-l2-error-estimate-under-adjoint-regularity
proof_strategy: counterexample
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
verification: {}
---

## Statement refuted

Every bounded Lipschitz planar domain and every $f\in L^2$ have a
zero-Dirichlet weak Poisson solution in $H^2$, so the full-adjoint
$s=1$ hypothesis in an Aubin–Nitsche estimate is automatic on every such
domain.

## Facts & Assumptions

**Given:** Countable Choice; the open L-shaped domain
$$\Omega=((-1,0)\times(-1,1))\cup((-1,1)\times(0,1)),$$
whose interior angle at the origin is $3\pi/2$; a smooth radial cutoff
$\chi$ equal to $1$ for $r\le1/4$ and $0$ for $r\ge1/2$; and polar
coordinates $0<r<1$, $0<\theta<3\pi/2$ near that corner.

[F1] $H^1_0(\Omega)$ is the norm closure of $C_c^\infty(\Omega)$ in
$W^{1,2}(\Omega)$ ([[def-wkp-zero-as-a-sobolev-closure]],
[[def-sobolev-space-wkp-and-its-norm]]).

[F2] The Aubin–Nitsche estimate requires the stated adjoint regularity and
dual approximation bounds; it does not assert those hypotheses for every
domain ([[thm-aubin-nitsche-l2-error-estimate-under-adjoint-regularity]]).

## Counterexample

1.1 Set $\lambda=2/3$ and $\Phi(r,\theta)=r^{\lambda}\sin(\lambda\theta),\qquad u(r,\theta)=\chi(r)\Phi(r,\theta).$ For $0<r<1/4$, polar differentiation gives $\partial_{rr}\Phi=\lambda(\lambda-1)r^{\lambda-2}\sin(\lambda\theta), \qquad \Delta\Phi=0.$ Also $|\Phi|\le Cr^{2/3}$ and $|\nabla\Phi|\le Cr^{-1/3}$, so $\int_{\Omega\cap B(0,1/4)}(|u|^2+|\nabla u|^2)\,dx \le C\int_0^{1/4}(r^{4/3}+r^{-2/3})r\,dr<\infty.$ Away from the origin $u$ is smooth with compact radial support, hence $u\in H^1(\Omega)$. [given, algebra]

1.2 To verify $u\in H^1_0(\Omega)$, choose a smooth radial cutoff $\eta_\epsilon$ that is $0$ on $r\le\epsilon$, $1$ on $r\ge2\epsilon$, and satisfies $|\nabla\eta_\epsilon|\le C/\epsilon$. The estimates $\int_{r<2\epsilon}|\nabla u|^2=O(\epsilon^{4/3})$ and $\int_{\epsilon<r<2\epsilon}|u\nabla\eta_\epsilon|^2=O(\epsilon^{4/3})$ show $\eta_\epsilon u\to u$ in $H^1$ as $\epsilon\downarrow0$. For fixed $\epsilon$, cut off next in angular strips of width $2\delta$ beside $\theta=0$ and $\theta=3\pi/2$. Since $u$ vanishes linearly in distance to either ray on the support $r\ge\epsilon$, the cutoff-gradient term is bounded on strips of area $O(\delta)$, and the removed $H^1$ mass tends to zero as $\delta\downarrow0$. The resulting functions are smooth and compactly supported in $\Omega$. Thus [F1] gives $u\in H^1_0(\Omega)$. [F1, given, algebra]

2.1 Define $f:=-\Delta u$ in $\Omega$. On $r<1/4$, $\chi=1$ and $\Delta\Phi=0$; on the annulus where $\chi$ varies, all factors and their derivatives are bounded; outside $r<1/2$, $u=0$. Hence $f\in L^2(\Omega)$. Every compactly supported smooth test function is supported away from $\partial\Omega$, so classical integration by parts gives $\int_\Omega\nabla u\cdot\overline{\nabla v} =\int_\Omega f\overline v$. Both sides are continuous in the $H^1_0$ norm, so density from [F1] extends the identity to every $v\in H^1_0(\Omega)$. Thus $u$ is a zero-Dirichlet weak solution with $L^2$ forcing. [F1, step 1.2, algebra]

3.1 If $u\in H^2(\Omega)$, its Cartesian Hessian would be square-integrable. On $r<1/4$, however, its radial second derivative is a unit-direction contraction of that Hessian and $\int_{\Omega\cap B(0,1/4)}|\partial_{rr}u|^2\,dx=|\lambda(\lambda-1)|^2\int_0^{3\pi/2}\sin^2(\lambda\theta)\,d\theta\int_0^{1/4}r^{2\lambda-4}r\,dr=\infty.$ because $2\lambda-3=-5/3<-1$. This contradicts square-integrability of the Hessian, so $u\notin H^2(\Omega)$. The universal statement is false; [F2] also makes clear that the Aubin–Nitsche estimate assumes this regularity rather than asserting it for every domain. [given, F2, step 1.1, algebra, contradiction] ∎
