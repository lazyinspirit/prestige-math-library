---
id: ex-emg-adopted-zero-classical-scalar
kind: example
title: "Adopted zero-scalar model sector"
status: published
origin: pipeline
pipeline_run: physics-remaining-80-2026-10-17
domain: physics
library: physics
dependency_level: 10
deps:
  - thm-gronwall-integral-inequality
  - pthm-emg-classical-charged-scalar-model-evolution
dependency_roles:
  thm-gronwall-integral-inequality: mathematical-premise
  pthm-emg-classical-charged-scalar-model-evolution: physical-result
proof_strategy: direct
physical_scope: >
  Exact zero-scalar reduction of the classical finite-regularity trivial-potential charged-scalar
  model when V(0)=0. It is a conditional model calculation with no empirical,
  quantum, or nontrivial-bundle claim.
empirical_premises: []
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "H. Friedrich and A. D. Rendall, The Cauchy Problem for the Einstein Equations, Lecture Notes in Physics 540 (2000), complete 97-page preprint"
      url: "https://arxiv.org/pdf/gr-qc/0002074"
      locator: "§5.4, PDF pp. 81–87, matter-field and coupled Einstein–matter Cauchy context; its scalar-coupling discussion is contextual, not this example's proof."
    - title: "David Tong, Gauge Theory, complete author-hosted lecture notes (457-page PDF)"
      url: "https://davidtong.org/pdfs/teaching/gauge-theory/gauge.pdf"
      locator: "§2.5.2, PDF pp. 89–91 (printed pp. 78–80), the four-dimensional Abelian-Higgs action and complex scalar covariant derivative; the example uses only its classical functional form and states the local SI conventions."
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
---

## Example

Let $U$ be an open region of a smooth Hausdorff, second-countable, oriented
underlying four-manifold with a time-oriented $C^3$ Lorentzian metric $g$ of
signature $(-,+,+,+)$. Let $A$ be a $C^2$ global
real one-form on $U$ and set $F:=dA$. Assume the source-free Einstein–Maxwell
equations of [[pthm-emg-classical-charged-scalar-model-evolution]] hold on $U$:
$$dF=0,\qquad \nabla_aF^{ab}=0,\qquad G_{ab}+\Lambda g_{ab}=\kappa_E T^{\mathrm{EM}}_{ab},\qquad T^{\mathrm{EM}}_{ab}=\mu_0^{-1}\left(F_{ac}F_b{}^c-\frac14g_{ab}F_{cd}F^{cd}\right).$$
Let $V$ be smooth on an open set containing $0$, with $V(0)=0$, and set
$\varphi\equiv0$ on $U$. Then $\varphi$ is an exact solution of the adopted
classical charged-scalar model coupled to this Einstein–Maxwell field: its
current and Hilbert stress vanish, so the full equations reduce to the stated
source-free equations. For Cauchy data satisfying the hypotheses of
[[pthm-emg-classical-charged-scalar-model-evolution]] and additionally
$\varphi_0=0$ and $\pi_n=0$, the zero field is the corresponding local branch
under that theorem's stated mathematical hypotheses and the adopted model.

## Facts & Assumptions

**Given:** The stated classical Lorentzian region, global potential $A$, and source-free Einstein–Maxwell equations displayed in the Example, together with the model equations of [[pthm-emg-classical-charged-scalar-model-evolution]].

[A1] The adopted smooth real scalar potential satisfies $V(0)=0$.

[F1] [[pthm-emg-classical-charged-scalar-model-evolution]]: the adopted model equations include $dF=0$, $\nabla_aF^{ab}=-\mu_0j^b$, $G_{ab}+\Lambda g_{ab}=\kappa_E T^{\mathrm{tot}}_{ab}$, with $T^{\mathrm{tot}}=T^{\mathrm{EM}}+T^\varphi$, $T^{\mathrm{EM}}_{ab}=\mu_0^{-1}(F_{ac}F_b{}^c-\frac14g_{ab}F_{cd}F^{cd})$, $\kappa_E=8\pi G_N/c^4$, and $G_{ab}=\operatorname{Ric}_{ab}-\frac12Rg_{ab}$.

[L1] [[pthm-emg-classical-charged-scalar-model-evolution]]: on a classical model solution, $P_a=\mathcal D_a\varphi$ and $E_\varphi=\mathcal D_aP^a-V'(|\varphi|^2)\varphi$, $j^a=K_\varphi\lambda\operatorname{Im}(\overline\varphi P^a)$, and $T^\varphi_{ab}=K_\varphi\operatorname{Re}(\overline{P_a}P_b) -\frac{K_\varphi}{2}g_{ab}(g^{cd}\overline{P_c}P_d+V(|\varphi|^2))$. It defines $\kappa_E=8\pi G_N/c^4$, $T^{\mathrm{EM}}_{ab}=\mu_0^{-1}(F_{ac}F_b{}^c-\frac14g_{ab}F_{cd}F^{cd})$, and $G_{ab}=\operatorname{Ric}_{ab}-\frac12Rg_{ab}$ under the stated SI length-coordinate and Lorentzian conventions. The current authored mathematical supplier uses the same charged compatibility in both local branches, with its stated choice, admissibility and constraint hypotheses. The physical conclusion remains conditional on the adopted model.

[F2] [[thm-gronwall-integral-inequality]]: a nonnegative local energy with zero initial value and an inequality $E(t)\le C\int_0^tE(s)\,ds$ is zero; the same holds after time reversal.

## Verification

**Proof technique:** substitute the zero scalar field into the exact model equations and compare the resulting sources with the displayed source-free Einstein–Maxwell equations.

1.1 Since $\varphi\equiv0$, every derivative of $\varphi$ is zero and $P_a=\mathcal D_a\varphi=0$. Hence $E_\varphi=\mathcal D_aP^a-V'(0)\varphi=0$ and $j^a=K_\varphi\lambda\operatorname{Im}(\overline\varphi P^a)=0$. Also $g^{ab}\overline{P_a}P_b+V(|\varphi|^2)=V(0)=0$, so the defining formula gives $T^\varphi_{ab}=0$. [A1, L1, given, algebra]

2.1 Substitution of $j=0$ and $T^\varphi=0$ into [F1] leaves exactly $\nabla_aF^{ab}=0$, $dF=0$, and $G_{ab}+\Lambda g_{ab}=\kappa_E T^{\mathrm{EM}}_{ab}$, the displayed assumptions. Thus the zero extension solves the full classical model. For compatible zero-scalar Cauchy data, [L1] supplies a local development. In its temporal gauge, $\partial_0=n$ initially, so $\pi_0=\pi_n=0$ there; the charged spatial compatibility gives $\pi_i=\mathcal D_i\varphi_0=0$ as well. Hence the real scalar state $z=(\operatorname{Re}\varphi,\operatorname{Im}\varphi, \operatorname{Re}\pi_0,\operatorname{Im}\pi_0, \operatorname{Re}\pi_i,\operatorname{Im}\pi_i)$ has zero initial data. [F1, L1, step 1.1, algebra]

3.1 In the admissible coordinates, the scalar first-order equations have
$\partial_0\varphi=\pi_0$ and the $\pi$-block
$$A^0_\pi\partial_0\pi+\sum_kA^k_\pi\partial_k\pi+\text{zero-order terms}=0,$$
where
$$A^0_\pi=\begin{pmatrix}-g^{00}&0\\0&(g^{ij})\end{pmatrix},\qquad A^k_\pi=\begin{pmatrix}-2g^{0k}&-g^{kj}\\-g^{ik}&0\end{pmatrix}.$$
These are real symmetric matrices, with $A^0_\pi$ positive definite because
$g^{00}<0$ and $(g^{ij})$ is positive definite. Adding the scalar transport
equation gives symmetric matrices $A^0=I\oplus A^0_\pi$ and
$A^k=0\oplus A^k_\pi$ on the real state $z$, so the full scalar system is
$A^0\partial_0z+\sum_kA^k\partial_kz+C_0z=0$. The remaining terms can be
written $C_0z$ with $C_0$ bounded on each compact solution cylinder: they are
linear in $\varphi,\pi_0,\pi_i$, with coefficients formed from $\Gamma(g)$,
$A_i$, $F_{0i}$ and $V'(|\varphi|^2)$. The metric and matter regularity in
[L1] gives $g\in C^3$ and $A,\varphi\in C^2$ in the finite-Sobolev branch
at $s\ge5$; hence $A^0,A^k$ are continuously differentiable and $C_0$ is
continuous there.
Writing $e=z^{\mathsf T}A^0z$ and $f^k=z^{\mathsf T}A^kz$, symmetry and the
system equation give
$$\partial_0e+\sum_k\partial_kf^k=z^{\mathsf T}\left(\partial_0A^0+\sum_k\partial_kA^k-C_0-C_0^{\mathsf T}\right)z.$$
The matrix on the right is bounded, while $A^0\ge aI$ for some $a>0$ on
the compact cylinder. On the periodic torus, integrating this identity gives
$E'\le CE$ for $E=\int e$, since the spatial fluxes cancel at opposite
periodic faces. In a local chart, choose a coordinate cube $Q_0$ around the
initial point and shrink each side at a speed $\sigma$ satisfying
$\sigma a>\max_k\sup\|A^k\|$. Differentiating the integral over the moving
cube and integrating each spatial derivative by the one-variable fundamental
theorem of calculus gives
$$E'(t)\le CE(t)-\sum_{\text{faces }S}\int_S z^{\mathsf T}(\sigma A^0+\nu_kA^k)z\,dS\le CE(t),$$
where $\nu=\pm\partial_k$ is the outward coordinate normal on each face; the
face matrices are positive definite by the choice of $\sigma$. In either
domain $E(0)=0$ and $E\ge0$, so integrating the inequality and applying [F2]
gives $E=0$ forward and backward in time. Positivity of $A^0$ and continuity
of $z$ then give $\varphi=\pi=0$ near every initial point. This proves the
zero branch for finite-Sobolev data without using smooth geometric uniqueness;
for smooth data, [L1] additionally identifies the branch up to its stated
isometry and gauge. [F2, L1, step 2.1, algebra] ∎
