---
id: prop-emg-constant-electrovac-rescaling
kind: proposition
title: "Constant coupled electrovac rescaling"
status: draft
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 4
deps:
  - def-countable-choice
  - def-emg-geometric-scaling
  - def-gr-curvature-tensor-and-derived-tensors
  - def-gr-metric-selected-connection
  - thm-emg-conformal-maxwell
  - thm-emg-field-normalization-equivalence
dependency_roles:
  def-countable-choice: mathematical-premise
  def-emg-geometric-scaling: mathematical-premise
  def-gr-curvature-tensor-and-derived-tensors: mathematical-premise
  def-gr-metric-selected-connection: mathematical-premise
  thm-emg-conformal-maxwell: mathematical-premise
  thm-emg-field-normalization-equivalence: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "David Tong, General Relativity, Cambridge Part III lecture notes, §4, author-hosted full-text HTML, Maxwell equations, Einstein equation and electromagnetic stress"
      url: "https://www.damtp.cam.ac.uk/user/tong/gr/grhtml/S4.html"
    - title: "Sean M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1, §§3.4–3.5, 4.3–4.5 and 7.2, curvature, Maxwell forms and coupled Einstein–Maxwell equations"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
---

## Statement

Let $g,F,j,\Lambda,c,G,\mu_0,\kappa$ be as in [[def-emg-geometric-scaling]] and the four-dimensional Lorentzian curvature convention of [[def-gr-curvature-tensor-and-derived-tensors]]. Suppose they satisfy the formal sourced Einstein–Maxwell equations

$$G_{ab}(g)+\Lambda g_{ab}=\frac{\kappa}{\mu_0}\mathcal Q_{ab}(g,F),\qquad dF=0,\qquad d(\star_gF)=\mu_0\,\iota_j\operatorname{vol}_g,$$

where $\mathcal Q$ is the quadratic tensor of [[thm-emg-field-normalization-equivalence]]. For a positive dimensionless constant $\lambda$, define

$$g':=\lambda^2g,\qquad F':=\lambda F,\qquad \Lambda':=\lambda^{-2}\Lambda,\qquad j':=\lambda^{-3}j.$$

Then $(g',F',j',\Lambda')$ satisfies the same equations with the same numerical constants $c,G,\mu_0$. In particular, a source-free electrovac solution ($j=0$) maps to a source-free electrovac solution. No transformation law for an additional matter stress tensor or matter action is asserted.

## Facts & Assumptions

**Given:** The smooth Lorentzian geometry, parameter dictionary and quadratic tensor of [[def-emg-geometric-scaling]], [[thm-emg-field-normalization-equivalence]] and [[def-gr-curvature-tensor-and-derived-tensors]]. The inherited geometric setup carries $\mathrm{AC}_\omega$ as in [A1].

[F1] For $\mathcal F=\alpha F$, the Einstein equation above is equivalent to $G_{ab}+\Lambda g_{ab}=2\mathcal Q_{ab}(g,\mathcal F)$. ([[thm-emg-field-normalization-equivalence]])

[F2] Under a smooth positive conformal factor $\Omega$, the Maxwell pair $(F,j)$ maps to $(F,\Omega^{-4}j)$ for $\widetilde g=\Omega^2g$. ([[thm-emg-conformal-maxwell]])

[F3] The metric-selected connection has the Christoffel formula of [[def-gr-metric-selected-connection]], and curvature, Ricci, scalar and Einstein tensors have the definitions of [[def-gr-curvature-tensor-and-derived-tensors]].

[A1] The inherited choice assumption is Countable Choice $\mathrm{AC}_\omega$, not full Choice. ([[def-countable-choice]])

## Proof

1.1 Since $\lambda$ is constant, $(g')^{ab}=\lambda^{-2}g^{ab}$ and $\partial_cg'_{ab}=\lambda^2\partial_cg_{ab}$. Substitution in the Christoffel formula [F3] gives $\Gamma'[g']{}^a{}_{bc}=\Gamma[g]^a{}_{bc}$; hence the two curvature operators and their lower-index Ricci tensors agree by [F3]. Tracing with $(g')^{-1}$ gives $S[g']=\lambda^{-2}S[g]$, so $G_{ab}(g')=G_{ab}(g)$. [given, F3, A1, algebra]

1.2 In the definition of $\mathcal Q$, $F'_{ac}=\lambda F_{ac}$ while $F'_b{}^c=(g')^{cd}F'_{bd}=\lambda^{-1}F_b{}^c$, so the first quadratic term is unchanged. Also $F'_{cd}F'^{cd}=\lambda^{-2}F_{cd}F^{cd}$ and $g'_{ab}=\lambda^2g_{ab}$, so the trace term is unchanged. Therefore $\mathcal Q_{ab}(g',F')=\mathcal Q_{ab}(g,F)$. [given, F1, algebra]

2.1 We have $\Lambda'g'_{ab}=\lambda^{-2}\Lambda\,\lambda^2g_{ab}=\Lambda g_{ab}$. Together with steps 1.1 and 1.2, both sides of the Einstein equation are unchanged. Equivalently, $\mathcal F'=\alpha F'=\lambda\mathcal F$ and the normalized equation in [F1] has the same quadratic tensor under $(g,\mathcal F)\mapsto(g',\mathcal F')$. [F1, step 1.1, step 1.2, algebra]

3.1 Apply [F2] with the constant conformal factor $\Omega=\lambda$: $(g,F,j)$ maps to $(g',F,\lambda^{-4}j)$. The differential-form Maxwell equations are linear in the pair $(F,j)$, so multiplying both entries of this solution by $\lambda$ gives $(g',F',j')=(g',\lambda F,\lambda^{-3}j)$, which also solves them. This proves the sourced Maxwell transformation; when $j=0$, the transformed source remains zero. [F2, algebra] ∎

## Remarks

The scaling is an exact identity for the displayed equations. Because lengths and the cosmological parameter are rescaled, it does not say that a fixed apparatus or fixed dimensionful matter data are unchanged. A matter model must supply its own transformation law before any coupled matter invariance can be claimed.
