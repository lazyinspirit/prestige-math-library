---
id: lem-emg-fx-linearized-hodge
kind: lemma
title: Variation of the Lorentzian Hodge map and the linearized Maxwell equation
status: published
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
domain: mathematics
library: mathematics
physical_scope: null
dependency_level: 1
proof_strategy: direct
deps:
  - def-countable-choice
  - def-emg-fx-linearized-electrovac
  - lem-emg-lorentz-hodge-calculus
dependency_roles:
  def-countable-choice: mathematical-premise
  def-emg-fx-linearized-electrovac: mathematical-premise
  lem-emg-lorentz-hodge-calculus: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Sean M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1 (1997), Chapter 1, equations (1.87)–(1.93)"
      url: "https://arxiv.org/pdf/gr-qc/9712019v1"
      locator: "PDF pp. 30–31 (printed pp. 23–24): Hodge star from the metric and orientation, its Lorentzian signature factor, and the exterior-form Maxwell equations. The variation formula below is derived locally by differentiating the component definition."
verification:
  precheck: pass
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-10-22
    scope: Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/physics-non-fluid-129-2026-10-21-r2-publication.json.
    delegated_by: owner
---

## Statement

Let $g_\epsilon=g+\epsilon h+O(\epsilon^2)$ be a smooth variation of an oriented Lorentzian metric on a four-manifold, and let $\omega_\epsilon=\omega+\epsilon\tau+O(\epsilon^2)$ be a smooth variation of a $k$-form, $0\le k\le4$. Define $h_a{}^b:=g^{bc}h_{ac}$, $\operatorname{tr}_g h:=g^{ab}h_{ab}$, and
$$\bigl(h^\sharp\!\cdot\omega\bigr)_{a_1\ldots a_k}:=\sum_{j=1}^k h_{a_j}{}^b\omega_{a_1\ldots a_{j-1}b a_{j+1}\ldots a_k},$$
with $h^\sharp\!\cdot\omega:=0$ for $k=0$. Then
$$\left.\frac{d}{d\epsilon}\right|_0\star_{g_\epsilon}\omega_\epsilon=\star_g\left(\tau+\frac12(\operatorname{tr}_g h)\omega-h^\sharp\!\cdot\omega\right).$$
In particular, for the geometric background $\mathcal F$ and perturbation $f$ of [[def-emg-fx-linearized-electrovac]],
$$\delta(\star\mathcal F)=\star_g\left(f+\frac12(\operatorname{tr}_g h)\mathcal F-h^\sharp\!\cdot\mathcal F\right).$$
If $(h,f)$ satisfies the linearized Maxwell equation, then $d\,\delta(\star\mathcal F)=0$; this last condition is exactly the derivative of $d(\star_{g_\epsilon}\mathcal F_\epsilon)=0$, not a consequence of the variation formula alone.

## Statement references

[[def-emg-fx-linearized-electrovac]]

[[lem-emg-lorentz-hodge-calculus]]

## Facts & Assumptions

**Given:** The smooth oriented Lorentzian metric $g$, its metric volume form, a smooth symmetric covariant tensor $h$, and smooth forms $\omega,\tau$ with $0\le k\le4$.

[F1] [[lem-emg-lorentz-hodge-calculus]]: the oriented Hodge map is characterized by $\alpha\wedge\star_g\beta=\langle\alpha,\beta\rangle_g\,\mathrm{vol}_g$ and, for a two-form, $({\star_g\mathcal F})_{ab}=\tfrac12(\mathrm{vol}_g)_{abcd}\mathcal F^{cd}$.

[F2] [[def-emg-fx-linearized-electrovac]]: the perturbation parameter is dimensionless, $h=\dot g_0$, $f=\dot{\mathcal F}_0$, and the Maxwell residual is differentiated on a fixed domain.

[A1] The geometric Lorentzian suppliers carry $\mathrm{AC}_\omega$ as background. This finite component calculation makes no choice of a family of objects. ([[def-countable-choice]])

## Proof

1.1 Differentiating $g_\epsilon^{ac}g_{\epsilon cb}=\delta^a_b$ at $\epsilon=0$ gives $\dot g^{ab}=-h^{ab}$. In a positively oriented chart, $\mathrm{vol}_{g_\epsilon}=\sqrt{|\det(g_{\epsilon ab})|}\,dx^0\wedge dx^1\wedge dx^2\wedge dx^3$. Since $\det(g_\epsilon)=\det(g)\det(I+\epsilon g^{-1}h)+O(\epsilon^2)$ and the linear term of $\det(I+\epsilon A)$ is $\epsilon\operatorname{tr}A$, differentiation gives $\dot{\mathrm{vol}}_g=\tfrac12(\operatorname{tr}_g h)\mathrm{vol}_g$. [A1, F1, algebra]

2.1 Evaluating the defining identity in [F1] on increasing coordinate wedges gives the component formula $({\star_g\omega})_{b_1\ldots b_{4-k}}=\tfrac1{k!}(\mathrm{vol}_g)_{a_1\ldots a_k b_1\ldots b_{4-k}}\omega^{a_1\ldots a_k}$, with the same orientation sign as the displayed two-form case. Thus the component Hodge map is the oriented volume tensor times the $k$ inverse-metric factors that raise the indices of $\omega_\epsilon$. Differentiating the volume contributes $\tfrac12(\operatorname{tr}_g h)\omega$ inside the Hodge map by step 1.1; differentiating each of the $k$ inverse metrics contributes $-h_{a_j}{}^b$ in its corresponding covariant slot by step 1.1; differentiating $\omega_\epsilon$ contributes $\tau$. Summing these $k+2$ terms yields $\dot\star\omega_\epsilon=\star_g(\tau+\tfrac12(\operatorname{tr}_g h)\omega-h^\sharp\!\cdot\omega)$, including $k=0$ where the slot sum is empty. [F1, step 1.1, algebra]

3.1 Substituting $\omega=\mathcal F$ and $\tau=f$ gives the displayed variation. The exterior derivative is independent of $\epsilon$ and linear, so differentiating $d(\star_{g_\epsilon}\mathcal F_\epsilon)=0$ gives $d\,\delta(\star\mathcal F)=0$. The closure equation differentiates to $df=0$ in the linearized definition. [F2, step 2.1, algebra] ∎

