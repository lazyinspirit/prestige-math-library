---
id: ex-tgr-static-cosine-heat-relaxation
kind: example
title: Static cosine relaxation
status: draft
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 5
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
deps:
  - thm-tgr-supported-static-heat-evolution
dependency_roles:
  thm-tgr-supported-static-heat-evolution: mathematical-premise
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: "Éric Gourgoulhon, An Introduction to Relativistic Hydrodynamics, arXiv:gr-qc/0603009v1, full lecture notes"
      url: "https://arxiv.org/pdf/gr-qc/0603009"
      locator: "Full 37-page PDF; §§4.3 and 5.2–5.4, PDF pp. 16–20, for covariant fluid conventions used by the cited static heat theorem."
    - title: "John K. Hunter, Notes on Partial Differential Equations, revised 18 June 2014, UC Davis full lecture notes"
      url: "https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf"
      locator: "Full 242-page PDF; §5.1.2, Theorem 5.5, printed pp. 130–131, for the heat-kernel solution interface used by the cited theorem."
---

## Example

Use the fixed-background box, lapse $N$, constants and material model of [[thm-tgr-supported-static-heat-evolution]]. Let $\overline\vartheta>0$ and $\delta\in\mathbb R$ satisfy $|\delta|<\overline\vartheta$, and take the initial redshifted temperature
$$
\vartheta_0(x)=\overline\vartheta+\delta\cos\!\left(\frac{\pi x^1}{L_1}\right),\qquad x\in\overline\Omega.
$$
It has a positive even-reflected periodic extension, and the corresponding exact solution and proper-temperature field are
$$
\vartheta(t_K,x)=\overline\vartheta+\delta\exp\!\left(-\frac{A_0\pi^2t_K}{C_VL_1^2}\right)\cos\!\left(\frac{\pi x^1}{L_1}\right),\qquad T(t_K,x)=\frac{\vartheta(t_K,x)}{N(x)}.
$$
The proper temperature tends to $\overline\vartheta/N(x)$, which varies spatially when the lapse is nonconstant, while the redshifted temperature $NT$ tends to the constant $\overline\vartheta$.

## Facts & Assumptions
**Given:** The box, lapse, heat coefficients, state function and solution class of [[thm-tgr-supported-static-heat-evolution]], with $L_1,C_V,A_0>0$.

[A1] $\overline\vartheta>0$ and $|\delta|<\overline\vartheta$.

[F1] [[thm-tgr-supported-static-heat-evolution]]: for positive even-reflected periodic initial data, $\vartheta=NT$ solves $C_V\partial_{t_K}\vartheta=A_0\Delta_x\vartheta$, satisfies zero normal derivative on each face, and is the unique solution in the stated continuous/classical class.

## Verification
**Given:** The explicit initial profile and the constants in [A1].

1.1 Put $r=A_0\pi^2/(C_VL_1^2)>0$. The formula $\widetilde\vartheta_0(x)=\overline\vartheta+\delta\cos(\pi x^1/L_1)$ on $\mathbb R^3$ is smooth, even in each coordinate, and $2L_i$-periodic in each coordinate; $|\delta|<\overline\vartheta$ makes it positive. Its average on $\Omega$ is $\overline\vartheta$, since $$\int_0^{L_1}\cos(\pi x^1/L_1)\,dx^1=\left[\frac{L_1}{\pi}\sin(\pi x^1/L_1)\right]_{0}^{L_1}=0.$$ Differentiating the displayed time-dependent profile gives $\partial_{t_K}\vartheta=-r\delta e^{-rt_K}\cos(\pi x^1/L_1)$ and $\Delta_x\vartheta=-(\pi^2/L_1^2)\delta e^{-rt_K}\cos(\pi x^1/L_1)$. Thus $C_V\partial_{t_K}\vartheta=A_0\Delta_x\vartheta$, and its initial trace is exactly $\vartheta_0$. [given, A1, algebra]

2.1 The bound $|\delta e^{-rt_K}\cos(\pi x^1/L_1)|\le|\delta|<\overline\vartheta$ proves positivity. Direct differentiation gives $\partial_{x^1}\vartheta=-(\pi\delta/L_1)e^{-rt_K}\sin(\pi x^1/L_1)$, which vanishes at $x^1=0,L_1$; the other two normal derivatives vanish because the profile is independent of $x^2,x^3$. Hence it satisfies every boundary condition of [F1], and uniqueness identifies it with the theorem's heat solution. Using $\cos^2 z=(1+\cos(2z))/2$ and integrating the cosine term over $[0,L_1]$ gives $\int_0^{L_1}\cos^2(\pi x^1/L_1)\,dx^1=L_1/2$. Therefore $$\|\vartheta(t_K,\cdot)-\overline\vartheta\|_{L^2(\Omega)}=|\delta|\sqrt{|\Omega|/2}\,e^{-rt_K}.$$ Dividing by the fixed positive lapse gives $T=\vartheta/N$. [step 1.1, F1, A1, algebra] ∎
