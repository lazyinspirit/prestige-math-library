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
  - pthm-emg-classical-charged-scalar-model-evolution
dependency_roles:
  pthm-emg-classical-charged-scalar-model-evolution: physical-result
proof_strategy: direct
physical_scope: >
  Exact zero-scalar reduction of the smooth trivial-potential charged-scalar
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

Let $U$ be an open region of a smooth, oriented, time-oriented Lorentzian
four-manifold $(M,g)$ with signature $(-,+,+,+)$. Let $A$ be a smooth global
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

**Given:** The smooth Lorentzian region, global potential $A$, and source-free
Einstein–Maxwell equations displayed in the Example, together with the model
equations of [[pthm-emg-classical-charged-scalar-model-evolution]].

[A1] The adopted smooth real scalar potential satisfies $V(0)=0$.

[F1] [[pthm-emg-classical-charged-scalar-model-evolution]]: the adopted
model equations include $dF=0$, $\nabla_aF^{ab}=-\mu_0j^b$,
$G_{ab}+\Lambda g_{ab}=\kappa_E T^{\mathrm{tot}}_{ab}$, with
$T^{\mathrm{tot}}=T^{\mathrm{EM}}+T^\varphi$,
$T^{\mathrm{EM}}_{ab}=\mu_0^{-1}(F_{ac}F_b{}^c-\frac14g_{ab}F_{cd}F^{cd})$,
$\kappa_E=8\pi G_N/c^4$, and $G_{ab}=\operatorname{Ric}_{ab}-\frac12Rg_{ab}$.

[L1] [[pthm-emg-classical-charged-scalar-model-evolution]]: on a smooth
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
$G_{ab}+\Lambda g_{ab}=\kappa_E T^{\mathrm{EM}}_{ab}$, which are the displayed
assumptions. Thus the zero extension solves the full model equations. If its
initial scalar data are zero, the compatible scalar derivatives are also
zero; applying the local uniqueness clause of the cited evolution theorem
identifies this extension as the local zero-scalar branch under the stated mathematical hypotheses and adopted model. [F1, L1, step 1.1] ∎
