---
id: ex-emg-zero-scalar-controlled-reduction
kind: example
title: "Zero scalar with V(0)=0 reduces to electrovacuum"
status: published
origin: pipeline
domain: mathematics
library: mathematics
physical_scope: null
dependency_level: 9
proof_strategy: direct
deps:
  - thm-emg-local-classical-charged-scalar-development
  - def-emg-trivial-potential-charged-scalar-system
dependency_roles:
  thm-emg-local-classical-charged-scalar-development: mathematical-premise
  def-emg-trivial-potential-charged-scalar-system: mathematical-premise
sources:
  references:
    - title: "Helmut Friedrich and Alan Rendall, The Cauchy Problem for the Einstein Equations, Lecture Notes in Physics 540 (2000), complete arXiv text"
      url: "https://arxiv.org/pdf/gr-qc/0002074"
      locator: "Complete 97-page PDF; §§2.4, 3.1 and 5.1: local Einstein–Maxwell Cauchy context and the separation of local development from global claims. The zero-field reduction is proved directly here."
    - title: "Mathieu Colin and Tatsuya Watanabe, Cauchy problem for the nonlinear Klein–Gordon equation coupled with the Maxwell equation, Journal of Mathematical Analysis and Applications 443 (2016), full author-hosted PDF"
      url: "https://www.math.u-bordeaux.fr/~mcolin/cauchy_maxKG.pdf"
      locator: "Complete 23-page PDF; §2, PDF pp. 3–5: charged-scalar equation and current conventions. The zero-field substitution is checked directly under the curved model."
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pending
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
---

## Example

Use [[def-emg-trivial-potential-charged-scalar-system]] and suppose $0\in\mathcal U$ and $V(0)=0$. Let $\varphi\equiv0$ and $\pi_a\equiv0$. Then the scalar equation, current, and scalar stress vanish, and the full coupled field equations reduce exactly to the source-free Einstein–Maxwell equations. Conversely, any smooth source-free Einstein–Maxwell solution on this region that admits the global potential $F=dA$ is a solution of the defined charged-scalar system with $\varphi=0$. The condition $V(0)=0$ is essential for the zero scalar stress conclusion. In particular, source-free initial data in this exact-potential sector that satisfy the local-development theorem's hypotheses have a smooth local realization in this branch.

## Facts & Assumptions

**Given:** The mathematical system of [[def-emg-trivial-potential-charged-scalar-system]], a smooth solution or compatible smooth initial data, and the zero scalar field.

[F1] [[def-emg-trivial-potential-charged-scalar-system]] defines $\pi=D\varphi$, the scalar equation, and the full coupled field equations; for $\varphi=0$, these give $\pi=0$ and $D_a\pi^a=0$.

[F2] The current and scalar Hilbert tensor are $j^a=K_\varphi\lambda\operatorname{Im}(\overline\varphi\pi^a)$ and $T^\varphi_{ab}=K_\varphi\operatorname{Re}(\overline{\pi_a}\pi_b)-\tfrac12K_\varphi g_{ab}L_\varphi$ in [[def-emg-trivial-potential-charged-scalar-system]].

[L1] [[thm-emg-local-classical-charged-scalar-development]] gives smooth local existence for its exact-potential data satisfying the sourced Maxwell and total-stress Einstein constraints. The example uses that local conclusion with its stated constraints and choice assumptions.

[A1] $0\in\mathcal U$, $V(0)=0$, and all fields are smooth. For the existence clause, take exact-potential electrovacuum initial data satisfying the Gauss and Einstein constraints in [[thm-emg-local-classical-charged-scalar-development]]; the zero scalar and its zero normal derivative complete the data.

[A2] Assume $\mathrm{AC}_\omega$ and Dependent Choice $\mathrm{DC}$ as required by the local-development supplier [L1].

## Proof
1.1 Since $\varphi=0$ and $\pi=0$, the scalar equation is $0-V'(0)\,0=0$ and $j^a=0$. Also $L_\varphi=V(0)=0$, so $T^\varphi_{ab}=0$. The condition $V(0)=0$ is what removes the remaining term $-\tfrac12K_\varphi g_{ab}V(0)$. [F1, F2, A1, algebra]

2.1 Substituting $j=0$ and $T^\varphi=0$ into the system of [F1] leaves exactly $G_{ab}+\Lambda g_{ab}=\kappa T^{\mathrm{EM}}_{ab}$, $dF=0$, and $\nabla_aF^{ab}=0$. Conversely, an exact-potential source-free solution with $\varphi=\pi=0$ satisfies each charged-scalar equation by step 1.1 and each remaining equation by its source-free hypothesis. [F1, F2, step 1.1, algebra]

3.1 For exact-potential electrovacuum initial data, setting $\varphi_0=0$, $\pi_n=0$, and hence $\pi_i=0$ makes $j=0$ and $T^\varphi=0$ on the initial slice. The sourced Maxwell and total-stress Einstein constraints in [L1] then reduce to the source-free electrovacuum constraints. Applying [L1] under [A2] gives a smooth local solution. On that solution the scalar block for $(\varphi,\pi)$ is a homogeneous first-order wave/transport system with the metric, $A$ and $F$ as given smooth coefficients: the potential term is the smooth coefficient $V\prime(|\varphi|^2)$ times $\varphi$, and every other scalar source is linear in $\varphi,\pi$. The symmetric scalar-block energy with zero initial scalar data therefore satisfies $E\prime\le CE$ and is zero by the same local uniqueness argument in [L1]. Thus $\varphi=\pi=0$ persists. Step 2.1 then identifies the resulting equations with the zero-scalar branch. No global existence claim follows. [A1, A2, L1, step 1.1, step 2.1] ∎
