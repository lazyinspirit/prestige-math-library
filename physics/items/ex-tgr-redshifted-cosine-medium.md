---
id: ex-tgr-redshifted-cosine-medium
kind: example
title: Redshifted cosine medium
status: published
origin: pipeline
domain: physics
library: physics
dependency_level: 10
proof_strategy: direct
deps:
  - pthm-tgr-supported-redshift-heat-relaxation
dependency_roles:
  pthm-tgr-supported-redshift-heat-relaxation: physical-result
justified_by: []
physical_scope: "One explicit compatible cosine profile in the fixed-lapse, externally supported parabolic heat model; the proper equilibrium is spatially nonuniform when the selected lapse is nonconstant."
empirical_premises: []
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: "Éric Gourgoulhon, An Introduction to Relativistic Hydrodynamics, arXiv:gr-qc/0603009v1 (2006), §§4.3 and 5.1–5.3"
      url: "https://arxiv.org/pdf/gr-qc/0603009"
      locator: "Full 37-page lecture-note PDF; PDF pp. 16–19: fluid-frame thermodynamic and stress conventions used by the conditional model. The cosine solution is checked directly here."
    - title: "John K. Hunter, Notes on Partial Differential Equations, revised 18 June 2014, University of California, Davis"
      url: "https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf"
      locator: "Full 242-page lecture-note PDF; §5.1.2, Theorem 5.5 and proof, printed pp. 130–131 (PDF pp. 137–138): Gaussian heat-equation context. The exact cosine eigenmode and insulated faces are verified directly here."
---

## Example

Use the box, positive lapse $N$, constants, material and support of [[pthm-tgr-supported-redshift-heat-relaxation]]. Assume $N$ is nonconstant on $\Omega$. Choose $\overline\vartheta>0$ and $\delta\in\mathbb R$ with $|\delta|<\overline\vartheta$. Set

$$\vartheta_0(x)=\overline\vartheta+\delta\cos\!\left(\frac{\pi x^1}{L_1}\right),\qquad x\in\overline\Omega.$$

The unique redshifted-temperature solution and proper-temperature field are

$$\vartheta(t_K,x)=\overline\vartheta+\delta\exp\!\left(-\frac{A_0\pi^2t_K}{C_VL_1^2}\right)\cos\!\left(\frac{\pi x^1}{L_1}\right),\qquad T(t_K,x)=\frac{\vartheta(t_K,x)}{N(x)}.$$

The redshifted temperature converges to $\overline\vartheta$, while the proper temperature converges to the nonconstant profile $\overline\vartheta/N(x)$. This is a calculated solution of the postulated model, not an observation about an actual material.

## Facts & Assumptions

**Given:** $L_i,A_0,C_V>0$, a smooth nonconstant lapse bounded above and strictly away from zero on $\overline\Omega$, and $\overline\vartheta>0$ with $|\delta|<\overline\vartheta$, all under the physical-model conditions of [[pthm-tgr-supported-redshift-heat-relaxation]].

[F1] [[pthm-tgr-supported-redshift-heat-relaxation]]: the fixed model solves $C_V\partial_{t_K}\vartheta=A_0\Delta_x\vartheta$ with zero normal derivative on each face, and its solution is unique for the stated positive even-reflected periodic initial data. It also gives $T=\vartheta/N$ and the limit $T_{\rm eq}=\overline\vartheta/N$.

## Verification

1.1 Extend the displayed initial profile to all $\mathbb R^3$ by the same cosine formula. It is $C^\infty$, even and $2L_i$-periodic in every coordinate. Its values lie between $\overline\vartheta-|\delta|$ and $\overline\vartheta+|\delta|$, so the strict inequality on $\delta$ gives positive lower and finite upper bounds. Its average on $\Omega$ is $\overline\vartheta$, because the integral of $\cos(\pi x^1/L_1)$ from $0$ to $L_1$ is $0$. [given, algebra]

2.1 Put $r=A_0\pi^2/(C_VL_1^2)>0$. Differentiating the proposed solution gives $\partial_{t_K}\vartheta=-r\delta e^{-rt_K}\cos(\pi x^1/L_1)$ and $\Delta_x\vartheta=-(\pi^2/L_1^2)\delta e^{-rt_K}\cos(\pi x^1/L_1)$, hence $C_V\partial_{t_K}\vartheta=A_0\Delta_x\vartheta$. Its initial trace is $\vartheta_0$. Also $\partial_{x^1}\vartheta=-(\pi\delta/L_1)e^{-rt_K}\sin(\pi x^1/L_1)$ vanishes at $x^1=0,L_1$, and $\partial_{x^2}\vartheta=\partial_{x^3}\vartheta=0$, so every face has zero normal derivative. Uniqueness in [F1] identifies this function with the model solution. [given, F1, step 1.1, algebra]

3.1 The exponential factor tends to zero, so $\vartheta(t_K,x)\to\overline\vartheta$. Because $N$ is time independent and positive, $T=\vartheta/N\to\overline\vartheta/N$ pointwise. The latter is nonconstant by the stipulated nonconstancy of $N$. Direct integration using $\int_0^{L_1}\cos^2(\pi x^1/L_1)\,dx^1=L_1/2$ gives the exact norm $\left\|\vartheta(t_K,\cdot)-\overline\vartheta\right\|_{L^2(\Omega)}=|\delta|\sqrt{|\Omega|/2}\,e^{-rt_K}$. Thus this example realizes a decaying redshifted mode with a spatially varying proper-temperature equilibrium in the selected model. [F1, step 2.1, algebra] ∎
