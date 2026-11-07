---
dependency_level: 4
id: lem-gl3-outer-dual-phase-normalization
kind: lemma
title: "Exact outer-dual coefficient phase normalization"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-full-level-gl3-automorphic-distribution, def-pullback-of-a-distribution-by-a-diffeomorphism]
justified_by: []
proof_strategy: direct
sources:
  references:
    - title: "Miller and Schmid, Automorphic Distributions, L-functions, and Voronoi Summation for GL(3), (2.11), (3.24)–(3.26), (5.9) and (6.2); exact coefficient phase derived from these conventions"
      url: "https://arxiv.org/pdf/math/0408100v3"
---

## Statement

For a supplied normalized full-level GL3 principal-series automorphic distribution with parameters $(\lambda,\delta)$, let $\vartheta(g)=w_0(g^t)^{-1}w_0$, with $w_0$ the coordinate-reversal matrix. Its unphased scalar distribution pullback $\tau'=\vartheta^*\tau$ has parameters $\lambda'=(-\lambda_3,-\lambda_2,-\lambda_1)$, $\delta'=(\delta_3,\delta_2,\delta_1)$ and coefficients
$$c'_{r,s}=c_{-s,-r},\qquad a'_{r,s}=(-1)^{\delta_2}a_{s,r}\quad(rs\ne0).$$
Consequently the phase-fixed dual $\widetilde\tau=(-1)^{\delta_2}\vartheta^*\tau$ has normalized coefficients $\widetilde a_{r,s}=a_{s,r}$ and its phase-fixed dual is again $\tau$. This finite transformation of supplied distributions and coefficients uses no choice axiom.

## Statement references

[Miller and Schmid, (3.24)–(3.26), (5.9) and (6.2)](https://arxiv.org/pdf/math/0408100v3)

## Facts & Assumptions

**Given:** The supplied distribution model, $\sum\lambda_j=0$, $\sum\delta_j=0$ and the coefficient normalization from [[def-full-level-gl3-automorphic-distribution]].

[F1] That definition gives left $\Gamma$ invariance, the right character $\omega_{\lambda,\delta}$, and $a_{r,s}=c_{r,s}|r|^{\lambda_1}|s|^{-\lambda_3}(\operatorname{sgn}r)^{\delta_1}(\operatorname{sgn}s)^{\delta_3}$.

[F2] The first, explicitly choice-free, clause of [[def-pullback-of-a-distribution-by-a-diffeomorphism]] transposes a smooth coordinate change on test densities with its absolute Jacobian. Its later regular-function compatibility clause is not invoked here.

## Proof

**Given:** The stated supplied data.

1.1 Direct matrix inversion gives $\vartheta(n(x,y,z))=n(-y,-x,xy-z)$, whose coordinate Jacobian is one. The involution preserves $P$ and $\Gamma$ and sends a diagonal $(a_1,a_2,a_3)$ to $(a_3^{-1},a_2^{-1},a_1^{-1})$. Substituting in the given right character leaves its normalizing ratio unchanged and gives precisely $(\lambda',\delta')$. Acting on the central-average Fourier test $e(-rx-sy)$ replaces it by $e(ry+sx)$, so [F2] gives $c'_{r,s}=c_{-s,-r}$. All are finite test-density transformations; no function representative or integral change-of-variables theorem is required. [F1, F2, given, algebra]

1.2 For $m=\operatorname{diag}(\epsilon_1,\epsilon_2,\epsilon_3)\in\Gamma$, factor $m^{-1}n=(m^{-1}nm)m^{-1}$ and use the principal-series right character and left invariance. This gives [F1, F2, algebra]
$$\tau(\epsilon_1\epsilon_2x,\epsilon_2\epsilon_3y,\epsilon_1\epsilon_3z)=\prod_j\epsilon_j^{\delta_j}\tau(x,y,z).$$
Its absolute coordinate Jacobian is one. The two choices with only $\epsilon_1=-1$ or only $\epsilon_3=-1$, tested against the same central-average Fourier densities, give $c_{-r,s}=(-1)^{\delta_1}c_{r,s}$ and $c_{r,-s}=(-1)^{\delta_3}c_{r,s}$. These conclusions use only the supplied finite group action and [F2]. [F1, F2, algebra]

2.1 Combining the parameter transformation and normalization gives [F1, step 1.1, step 1.2, algebra]
$$a'_{r,s}=c_{-s,-r}|r|^{-\lambda_3}|s|^{\lambda_1}(\operatorname{sgn}r)^{\delta_3}(\operatorname{sgn}s)^{\delta_1}=(-1)^{\delta_1+\delta_3}a_{s,r}=(-1)^{\delta_2}a_{s,r}.$$
Multiplication of the entire distribution by $(-1)^{\delta_2}$ therefore gives the asserted coefficients of $\widetilde\tau$. Since $\vartheta^2$ is the identity and $\delta'_2=\delta_2$, applying this phase-fixed operation twice multiplies by $(-1)^{2\delta_2}=1$. This proves the involution and every stated coefficient assertion, including zero coefficient data. [F1, step 1.1, step 1.2, algebra] ∎
