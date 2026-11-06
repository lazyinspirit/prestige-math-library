---
id: def-st-double-field-theory-generalized-metric-data
kind: definition
title: Strong Constraint DFT Generalized Metric Data
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 0
domain: physics
library: physics
deps: []
dependency_roles: {}
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
physical_scope: "Local doubled-coordinate, generalized-metric, generalized-dilaton, strong-constraint, and generalized-diffeomorphism conventions for the NS–NS sector; no invariance theorem, section reduction, or global background is asserted."
sources:
  references:
    - title: "Olaf Hohm, Chris Hull, and Barton Zwiebach, Generalized Metric Formulation of Double Field Theory, arXiv:1006.4823v1"
      url: "https://arxiv.org/pdf/1006.4823v1"
      locator: "Introduction equations (1.4)–(1.17), PDF pp. 4–6, and §3.1, equations (3.8)–(3.18), pp. 10–13: doubled indices, generalized metric, strong constraint, and generalized Lie derivative."
    - title: "Gerardo Aldazabal, Diego Marqués, and Carmen Núñez, Double Field Theory: A Pedagogical Review, arXiv:1305.1907v2"
      url: "https://arxiv.org/pdf/1305.1907v2"
      locator: "§§3.3–3.4, PDF pp. 19–23: generalized fields, strong constraint, and generalized diffeomorphisms."
verification:
  precheck: pass
  judge:
    model: gpt-6-luna
    verdict: pass
    date: 2026-11-06
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-04
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
---

## Definition

For $D=10$, let $\mathcal U\subset\mathbb R^{20}$ be an open doubled-coordinate domain with coordinates $X^M=(x^i,\widetilde x_i)$, $i=0,\ldots,9$, each of length dimension. Let $\eta_{MN}=\begin{pmatrix}0&I_{10}\\I_{10}&0\end{pmatrix}$ be the constant dimensionless bilinear form. A doubled scalar is a function in $C^\infty(\mathcal U,\mathbb R)$, and a doubled tensor is a smooth array of components on $\mathcal U$ with the indicated upper and lower index slots. A generalized vector parameter is $\xi\in C^\infty(\mathcal U,\mathbb R^{20})$ with components of length dimension; set $\xi_M:=\eta_{MN}\xi^N$ and $\partial^M:=\eta^{MN}\partial_N$, so $\partial_M$ has inverse-length dimension. A scalar $\chi\in C^\infty(\mathcal U,\mathbb R)$ of length-squared dimension defines a gradient-form parameter by $\xi^M=\partial^M\chi$. A generalized metric field is a smooth symmetric covariant tensor $\mathcal H_{MN}$ on $\mathcal U$ satisfying $\mathcal H_{MP}\eta^{PQ}\mathcal H_{QN}=\eta_{MN}$; its components and those of its inverse $\mathcal H^{MN}:=\eta^{MP}\eta^{NQ}\mathcal H_{PQ}$ are dimensionless. The strong constraint requires $\eta^{MN}\partial_M\partial_NA=0$ and $\eta^{MN}(\partial_MA)(\partial_NB)=0$ for every component $A,B$ of every field, gauge parameter, and product under consideration.

After restricting to a product coordinate neighborhood $U_x\times\widetilde U\subset\mathcal U$, the standard local physical section is the slice $s(x)=(x,\widetilde x_0)$ for fixed $\widetilde x_0\in\widetilde U$, and fields on the section are independent of all $\widetilde x_i$ (equivalently, $\widetilde\partial^i=0$). Let $g$ be an invertible symmetric Lorentzian metric and $B_2$ an antisymmetric two-form on $U_x$, both with dimensionless components in these length-valued coordinates. The restriction of the generalized metric to this section is parameterized by
$$
\mathcal H_{MN}:=\begin{pmatrix}g-B_2g^{-1}B_2&B_2g^{-1}\\-g^{-1}B_2&g^{-1}\end{pmatrix}.
$$
This block matrix is symmetric and obeys $\mathcal H_{MP}\eta^{PQ}\mathcal H_{QN}=\eta_{MN}$. Let $\Phi\in C^\infty(U_x,\mathbb R)$ be the real dimensionless physical dilaton on this physical-coordinate domain. On $U_x\times\widetilde U$ its section-compatible extension is $\Phi\circ\operatorname{pr}_x$, independent of every $\widetilde x_i$. Let $d\in C^\infty(\mathcal U,\mathbb R)$ be the generalized-dilaton field; on the physical section define its restriction by $e^{-2s^*d}=\sqrt{-\det(g_{ij})}e^{-2\Phi}$, where the determinant is taken in the stated length-valued coordinates. Thus $d$ is dimensionless there. The notation $\sqrt{-g}$ in this density relation means $\sqrt{-\det(g_{ij})}$, not the metric tensor itself. The metric $g$ here is the local metric parameter in this DFT definition; identifying it with a particular supergravity frame is a separate convention. All doubled indices are raised and lowered with $\eta$.

For a generalized vector parameter $\xi^M$, define its action on a covariant generalized tensor $A_{MN}$ by
$$
(\widehat{\mathcal L}_\xi A)_{MN}=\xi^P\partial_PA_{MN}+(\partial_M\xi^P-\partial^P\xi_M)A_{PN}+(\partial_N\xi^P-\partial^P\xi_N)A_{MP},
$$
and use the following rank-zero and rank-one rules:
$$
\widehat{\mathcal L}_\xi f=\xi^P\partial_Pf,\qquad (\widehat{\mathcal L}_\xi A)_M=\xi^P\partial_PA_M+(\partial_M\xi^P-\partial^P\xi_M)A_P,
$$
$$
(\widehat{\mathcal L}_\xi V)^M=\xi^P\partial_PV^M+(\partial^M\xi_P-\partial_P\xi^M)V^P.
$$
For a mixed tensor $A_{M_1\ldots M_r}{}^{N_1\ldots N_s}$ with $r,s\ge0$, define
$$
(\widehat{\mathcal L}_\xi A)_{M_1\ldots M_r}{}^{N_1\ldots N_s}=\xi^P\partial_PA_{M_1\ldots M_r}{}^{N_1\ldots N_s}+\sum_{a=1}^r(\partial_{M_a}\xi^P-\partial^P\xi_{M_a})A_{M_1\ldots M_{a-1}P M_{a+1}\ldots M_r}{}^{N_1\ldots N_s}+\sum_{b=1}^s(\partial^{N_b}\xi_P-\partial_P\xi^{N_b})A_{M_1\ldots M_r}{}^{N_1\ldots N_{b-1}P N_{b+1}\ldots N_s}.
$$
For $r=s=0$ this is the scalar rule; for one lower or upper slot it is the displayed covector or vector rule. This componentwise definition obeys the Leibniz rule and is compatible with raising and lowering by $\eta$.

Define the generalized-dilaton transformation separately by $\delta_\xi d=\xi^P\partial_Pd-\frac12\partial_P\xi^P$; equivalently its density $\rho:=e^{-2d}$ transforms by $\delta_\xi\rho=\partial_P(\xi^P\rho)$. The two-derivative generalized-metric action density is
$$
\mathcal L_{\rm DFT}=e^{-2d}\left[\frac18\mathcal H^{MN}\partial_M\mathcal H^{KL}\partial_N\mathcal H_{KL}-\frac12\mathcal H^{MN}\partial_N\mathcal H^{KL}\partial_L\mathcal H_{MK}-2\partial_Md\,\partial_N\mathcal H^{MN}+4\mathcal H^{MN}\partial_Md\,\partial_Nd\right].
$$
For later conditional calculations, define the generalized-scalar candidate
$$
\mathcal R:=4\mathcal H^{MN}\partial_M\partial_Nd-\partial_M\partial_N\mathcal H^{MN}-4\mathcal H^{MN}\partial_Md\,\partial_Nd+4\partial_M\mathcal H^{MN}\partial_Nd+\frac18\mathcal H^{MN}\partial_M\mathcal H^{KL}\partial_N\mathcal H_{KL}-\frac12\mathcal H^{MN}\partial_M\mathcal H^{KL}\partial_K\mathcal H_{NL}.
$$
The expression $\mathcal R$ is only defined here; its scalar transformation law and relation to the action density are separate results. These are local field and transformation conventions only. They assert neither gauge closure nor gauge invariance of the action.

## Definition references

[Hohm, Hull, and Zwiebach, Introduction and §3.1](https://arxiv.org/pdf/1006.4823v1)

[Aldazabal, Marqués, and Núñez, §§3.3–3.4](https://arxiv.org/pdf/1305.1907v2)

## Facts & Assumptions

**Given:** On a local physical section, an invertible symmetric Lorentzian matrix $g$, an antisymmetric matrix $B_2$, and $\eta=\begin{pmatrix}0&I\\I&0\end{pmatrix}$.

[A1] The blocks in the Definition are ordinary matrix products, and $g^{-1}$ denotes the two-sided inverse of $g$.

## Verification

1.1 Write $A=g-B_2g^{-1}B_2$, $C=B_2g^{-1}$, $D=-g^{-1}B_2$, and $E=g^{-1}$. Since $g^T=g$ and $B_2^T=-B_2$, we have $A^T=A$, $E^T=E$, and $C^T=g^{-1}(-B_2)=D$. Thus $\mathcal H_{MN}=\begin{pmatrix}A&C\\D&E\end{pmatrix}$ is symmetric. [given, A1, algebra]

2.1 Multiplying the blocks gives
$$\mathcal H\eta\mathcal H=\begin{pmatrix}CA+AD&CC+AE\\EA+DD&EC+DE\end{pmatrix}.$$
Using $g^{-1}g=gg^{-1}=I$, its four entries are respectively $B_2-B_2g^{-1}B_2g^{-1}B_2-B_2+B_2g^{-1}B_2g^{-1}B_2=0$, $B_2g^{-1}B_2g^{-1}+I-B_2g^{-1}B_2g^{-1}=I$, $I-g^{-1}B_2g^{-1}B_2+g^{-1}B_2g^{-1}B_2=I$, and $g^{-1}B_2g^{-1}-g^{-1}B_2g^{-1}=0$. Hence $\mathcal H\eta\mathcal H=\eta$, which is the required generalized-metric relation. [given, A1, algebra] ∎

## Remarks

The strong constraint includes pairwise derivative contractions, not only the weak equation $\eta^{MN}\partial_M\partial_NA=0$ on each field separately. Choosing $\widetilde\partial^i=0$ is one local solution; this definition does not assert that a physical background globally admits that section.

