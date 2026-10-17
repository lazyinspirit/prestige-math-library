---
id: ex-emg-adopted-zero-classical-scalar
kind: example
title: "Adopted zero-scalar model sector"
status: draft
origin: pipeline
pipeline_run: physics-remaining-80-2026-10-17
domain: physics
library: physics
dependency_level: 9
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

**Given:** The stated classical Lorentzian region, global potential $A$, and source-free
Einstein–Maxwell equations displayed in the Example, together with the model
equations of [[pthm-emg-classical-charged-scalar-model-evolution]].

[A1] The adopted smooth real scalar potential satisfies $V(0)=0$.

[F1] [[pthm-emg-classical-charged-scalar-model-evolution]]: the adopted
model equations include $dF=0$, $\nabla_aF^{ab}=-\mu_0j^b$,
$G_{ab}+\Lambda g_{ab}=\kappa_E T^{\mathrm{tot}}_{ab}$, with
$T^{\mathrm{tot}}=T^{\mathrm{EM}}+T^\varphi$,
$T^{\mathrm{EM}}_{ab}=\mu_0^{-1}(F_{ac}F_b{}^c-\frac14g_{ab}F_{cd}F^{cd})$,
$\kappa_E=8\pi G_N/c^4$, and $G_{ab}=\operatorname{Ric}_{ab}-\frac12Rg_{ab}$.

[L1] [[pthm-emg-classical-charged-scalar-model-evolution]]: on a classical
model solution,
$P_a=\mathcal D_a\varphi$ and
$E_\varphi=\mathcal D_aP^a-V'(|\varphi|^2)\varphi$,
$j^a=K_\varphi\lambda\operatorname{Im}(\overline\varphi P^a)$, and
$T^\varphi_{ab}=K_\varphi\operatorname{Re}(\overline{P_a}P_b)
-\frac{K_\varphi}{2}g_{ab}(g^{cd}\overline{P_c}P_d+V(|\varphi|^2))$.
It defines $\kappa_E=8\pi G_N/c^4$,
$T^{\mathrm{EM}}_{ab}=\mu_0^{-1}(F_{ac}F_b{}^c-\frac14g_{ab}F_{cd}F^{cd})$,
and $G_{ab}=\operatorname{Ric}_{ab}-\frac12Rg_{ab}$ under the stated SI
length-coordinate and Lorentzian conventions.
The current authored mathematical supplier uses the same charged compatibility in both local branches, with its stated choice, admissibility and constraint hypotheses. The physical conclusion remains conditional on the adopted model.

[F2] [[thm-gronwall-integral-inequality]]: a nonnegative local energy with zero initial value and an inequality $E(t)\le C\int_0^tE(s)\,ds$ is zero; the same holds after time reversal.

## Verification

**Proof technique:** substitute the zero scalar field into the exact model
equations and compare the resulting sources with the displayed source-free
Einstein–Maxwell equations.

1.1 Since $\varphi\equiv0$, every derivative of $\varphi$ is zero and
$P_a=\mathcal D_a\varphi=0$. Hence
$E_\varphi=\mathcal D_aP^a-V'(0)\varphi=0$ and
$j^a=K_\varphi\lambda\operatorname{Im}(\overline\varphi P^a)=0$. Also
$g^{ab}\overline{P_a}P_b+V(|\varphi|^2)=V(0)=0$, so the defining formula gives
$T^\varphi_{ab}=0$. [A1, L1, given, algebra]

2.1 Substitution of $j=0$ and $T^\varphi=0$ into [F1] leaves exactly
$\nabla_aF^{ab}=0$, $dF=0$, and
$G_{ab}+\Lambda g_{ab}=\kappa_E T^{\mathrm{EM}}_{ab}$, the displayed
assumptions. Thus the zero extension solves the full classical model. For
compatible zero-scalar Cauchy data, take the local development supplied by the
evolution theorem. In its admissible coordinates, the scalar equation for
$(\varphi,\partial_0\varphi,\partial_i\varphi)$ has the positive wave time
block $\operatorname{diag}(1,-g^{00},(g^{ij}))$; the metric and potential are
given classical coefficients. The gauge terms and
$V'(|\varphi|^2)\varphi$ are homogeneous in the scalar variables along this
solution, with bounded coefficient functions on a compact cylinder. Multiplying
the real and imaginary wave systems by their energy variables and integrating
by parts gives $E'\le CE$; on the torus there is no boundary, and on a local
ball choose a shrinking side speed larger than the ratio of the spatial
matrix norm to the positive time-matrix lower bound, so its side flux is
nonnegative. The initially zero scalar and covariant normal derivative, with
the charged spatial compatibility and temporal gauge, give zero ordinary
scalar Cauchy data. Hence [F2], in both time directions, gives
$\varphi=\pi=0$ in the local development. This establishes the zero branch
also for finite-Sobolev data; it uses no smooth geometric uniqueness for
nonsmooth fields. For smooth data the evolution theorem's smooth geometric
uniqueness additionally identifies this branch up to its stated isometry and
gauge. [F1, L1, F2, step 1.1, algebra] ∎
