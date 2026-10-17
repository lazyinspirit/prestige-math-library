---
id: ex-emg-xs-two-center
kind: example
title: Two-center exact exterior with same-sign fluxes
status: draft
origin: pipeline
pipeline_run: physics-remaining-80-2026-10-17
domain: mathematics
library: mathematics
physical_scope: null
dependency_level: 5
deps:
  - def-emg-xs-harmonic-mp
  - prop-emg-xs-mp-multicenter
dependency_roles:
  def-emg-xs-harmonic-mp: mathematical-premise
  prop-emg-xs-mp-multicenter: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: David Tong, General Relativity, complete author-hosted lecture notes
      url: https://davidtong.org/pdfs/teaching/general-relativity/gr.pdf
      locator: Section 6, “Multi-Black Hole Solutions”; local calculations give the exact two-center domain and signed fluxes.
    - title: Reinhard Meinel and Moritz Hütten, On the black hole limit of electrically counterpoised dust configurations, arXiv:1105.3807v3
      url: https://arxiv.org/pdf/1105.3807
      locator: Section 2, conformastatic data; its dust and unit conventions are not imported into this example.
verification:
  precheck: pass
---

## Example

Let $d,m_1,m_2>0$ have length units, set $a_1=(0,0,0)$ and $a_2=(d,0,0)$, and take $\sigma=+1$. On $D=\mathbb R^3\setminus\{a_1,a_2\}$, put

$$H(x)=1+\frac{m_1}{|x-a_1|}+\frac{m_2}{|x-a_2|}.$$

The resulting datum is an exact source-free electrovac exterior. For either center $a_A$, every coordinate sphere $S_A(r)=\{x:|x-a_A|=r\}$ with $0<r<d$, oriented by its outward Euclidean normal, has electric flux $m_A$ and magnetic flux zero. Precisely, fix any $s\in\mathbb R_{x^0}$ and use the oriented embedded sphere $i_{s,S_A(r)}(S_A(r))$ in the spacetime, where $i_{s,S_A(r)}(x)=(s,x)$ as in [[prop-emg-xs-mp-multicenter]]; the fluxes are the pullback integrals under that inclusion and are independent of $s$. The centers are excluded from the manifold; this example asserts no center regularity, horizon extension, equilibrium stability, or observation.

## Facts & Assumptions

**Given:** The distinct centers, positive lengths, sign, and the exact harmonic MP family.

[F1] [[def-emg-xs-harmonic-mp]] defines $H$, the metric, and the global potential on a positive harmonic exterior.

[F2] [[prop-emg-xs-mp-multicenter]] proves smoothness, harmonicity, source-free electrovac equations, and the flux $\sigma m_A$ for each isolated center.

[A1] $d,m_1,m_2>0$ and the two centers are distinct.

## Verification

1.1 The Euclidean distances $|x-a_1|$ and $|x-a_2|$ are positive and smooth on $D$. The formula is the $N=2$ instance of the function in [F2], with positive coefficients and $\sigma=+1$, so it is positive and harmonic on $D$ and defines the metric-field data of [F1]. [given, F1, F2, A1, construct]

2.1 Apply [F2] with $N=2$, $a_1\ne a_2$, $m_1,m_2>0$, and $\sigma=+1$. For every displayed $0<r<d$, the closed radius-$r$ ball about either center excludes the other center. Thus [F2] applies to the time-slice embeddings specified in the Example, giving the geometric electrovac equations on the full punctured domain and $q_e=m_A$, $q_m=0$ on every such sphere; these values are independent of $s$. The result is an exact mathematical example; none of the excluded centers is included as a regular point. [given, F2, A1, step 1.1] ∎
