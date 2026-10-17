---
id: ex-emgmath-ml-b05
kind: example
title: "Regular smooth counterpoised sphere"
status: draft
origin: pipeline
pipeline_run: physics-remaining-80-2026-10-17
domain: mathematics
library: mathematics
physical_scope: null
dependency_level: 5
proof_strategy: direct
deps:
  - def-countable-choice
  - thm-emg-smooth-counterpoised-dust
  - lem-emg-conformastatic-curvature
  - cor-emg-regular-counterpoised-sphere
dependency_roles:
  def-countable-choice: mathematical-premise
  thm-emg-smooth-counterpoised-dust: mathematical-premise
  lem-emg-conformastatic-curvature: mathematical-premise
  cor-emg-regular-counterpoised-sphere: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Sean M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1 (1997), Ch. 3, equations (3.90), (3.92), (3.95)"
      url: "https://arxiv.org/pdf/gr-qc/9712019v1"
      locator: "Curvature contractions; all central field values and integrals are derived from local suppliers."
    - title: "David Tong, General Relativity, full author-hosted lecture notes, Michaelmas 2019, §3.4.1"
      url: "https://davidtong.org/pdfs/teaching/general-relativity/gr.pdf"
      locator: "Independent Ricci and Einstein contractions; the central example is computed locally."
    - title: "Reinhard Meinel and Moritz Hütten, On the black hole limit of electrically counterpoised dust configurations, arXiv:1105.3807v3 (2011), §2"
      url: "https://arxiv.org/pdf/1105.3807"
      locator: "Model context only; no stability or black-hole-limit conclusion is used."
verification:
  precheck: pass
---

## Example

Assume $\mathrm{AC}_\omega$. Let $b>0$ have length units, let $\mathbf{x}=(x^1,x^2,x^3)\in\mathbb R^3$, and define its Euclidean radius by $r:=\sqrt{(x^1)^2+(x^2)^2+(x^3)^2}$. Take $a=b$ and $s=+1$ in the exact family of [[thm-emg-smooth-counterpoised-dust]], and define $H(\mathbf{x})=1+b/\sqrt{r^2+b^2}$ on all of $\mathbb R^3$. This is an everywhere regular smooth solution with center values
$$H(0)=2,\qquad \nabla H(0)=0,\qquad \Delta H(0)=-\frac3{b^2},\qquad \rho(0)=\frac{3c^2}{32\pi G_Nb^2},\qquad S_g(0)=\frac3{4b^2},\qquad E_i(0)=0.$$
Its proper mass and signed charge are $c^2b/G_N$ and $Q_sc^2b/G_N$, respectively. The model density is positive everywhere, so its topological support, defined as the closure in $\mathbb R^3$ of $\{\mathbf{x}\in\mathbb R^3:\rho(\mathbf{x})\ne0\}$, is all of $\mathbb R^3$.

## Facts & Assumptions

**Given:** $\mathrm{AC}_\omega$, $a=b>0$, $s=+1$, the smooth family, the arbitrary-positive-$H$ curvature table, and the proper-integral result.

[F1] [[thm-emg-smooth-counterpoised-dust]] supplies the exact coupled fields, $\rho=-c^2\Delta H/(4\pi G_NH^3)$, and the orthonormal electric components $E_i=-s c^2H_i/(Q_sH^2)$.

[F2] [[lem-emg-conformastatic-curvature]] gives $S_g=-2\Delta H/H^3$.

[F3] [[cor-emg-regular-counterpoised-sphere]] gives finite proper mass $c^2a/G_N$ and charge $sQ_sc^2a/G_N$ for the stated profile, under $\mathrm{AC}_\omega$.

[A1] $\mathrm{AC}_\omega$ is exactly the countable-choice assumption required by [F3]; no full Axiom of Choice is assumed.

## Verification

1.1 At $r=0$, $\sqrt{r^2+b^2}=b$, so $H(0)=1+b/b=2$. The derivatives in [F1] and the Laplacian formula in [F3] give $H_i(0)=0$ and $\Delta H(0)=-3b^3/b^5=-3/b^2$. [given, F1, F3, algebra]

1.2 Applying [F3] with $a=b$ and $s=+1$ yields $M_{\mathrm{prop}}=c^2b/G_N$ and $Q_{\mathrm{prop}}=Q_sc^2b/G_N$. The exact-solution conclusion is [F1]. [given, A1, F1, F3, algebra]

2.1 Substituting these values into [F1] gives $\rho(0)=3c^2/(4\pi G_Nb^2\cdot 2^3)=3c^2/(32\pi G_Nb^2)$. Equation [F2] gives $S_g(0)=-2(-3/b^2)/2^3=3/(4b^2)$, and the electric-field formula in [F1] gives $E_i(0)=0$. [step 1.1, F1, F2, algebra]

3.1 The formula in [F1] has $\Delta H=-3b^3/(r^2+b^2)^{5/2}<0$ and $H>0$ at every $\mathbf{x}\in\mathbb R^3$, hence $\rho>0$ throughout $\mathbb R^3$. The denominator never vanishes because $b>0$, so the metric, potential, and fields extend smoothly through $r=0$. The nonzero set of $\rho$ is therefore $\mathbb R^3$, whose closure is $\mathbb R^3$; by the Statement's definition, this is its topological support. [given, F1, step 1.1, algebra] ∎

## Remarks

This is a regular ideal mathematical solution, not a reported object. The dust is held static by its electromagnetic force; no equilibrium stability, formation history, or real-particle composition is inferred.
