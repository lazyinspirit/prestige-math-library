---
id: lem-emg-xs-rn-tensor-identities
kind: lemma
title: Exact Reissner-Nordström Ricci and curvature identities
status: draft
origin: pipeline
pipeline_run: physics-remaining-80-2026-10-17
domain: mathematics
library: mathematics
dependency_level: 4
deps:
  - def-emg-xs-rn-data
  - lem-gr-warped-spherical-christoffel-and-ricci
  - def-gr-curvature-tensor-and-derived-tensors
  - thm-gr-curvature-tensoriality-and-coordinate-formula
  - thm-gr-curvature-algebraic-symmetries
  - lem-derivative-of-a-power
  - thm-algebra-of-derivatives
dependency_roles:
  def-emg-xs-rn-data: mathematical-premise
  lem-gr-warped-spherical-christoffel-and-ricci: mathematical-premise
  def-gr-curvature-tensor-and-derived-tensors: mathematical-premise
  thm-gr-curvature-tensoriality-and-coordinate-formula: mathematical-premise
  thm-gr-curvature-algebraic-symmetries: mathematical-premise
  lem-derivative-of-a-power: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: S. M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1
      url: https://arxiv.org/pdf/gr-qc/9712019
      locator: "Chapter 7, equations (7.106)-(7.112), printed pp. 201-202 (PDF pp. 207-208): the RN source-free equations and two-form"
    - title: "Tim Adamo and E. T. Newman, The Kerr-Newman Metric: A Review, arXiv:1410.6626v2"
      url: https://arxiv.org/pdf/1410.6626
      locator: "Section 2.1-2.2, printed pp. 4-11 (PDF pp. 5-12): RN seed and exact electrovac verification"
physical_scope: null
---


## Statement

Let $M,q_e,q_m\in\mathbb R$, $Q^2=q_e^2+q_m^2$, and let $J\subset(0,\infty)$ be open with
$f(r)=1-2M/r+Q^2/r^2\ne0$ on $J$. For the dyonic RN datum of
[[def-emg-xs-rn-data]], in a spherical-polar chart its Ricci components are
$$\operatorname{Ric}_{00}=f\left(\frac{f''}{2}+\frac{f'}r\right)=\frac{fQ^2}{r^4},\quad \operatorname{Ric}_{11}=-\frac1f\left(\frac{f''}{2}+\frac{f'}r\right)=-\frac{Q^2}{fr^4},$$
$$\operatorname{Ric}_{22}=1-f-rf'=\frac{Q^2}{r^2},\qquad \operatorname{Ric}_{33}=(1-f-rf')\sin^2\theta=\frac{Q^2\sin^2\theta}{r^2},$$
and all mixed components vanish. The scalar curvature is zero and
$\operatorname{Ric}_{ab}\operatorname{Ric}^{ab}=4Q^4/r^8$. The Kretschmann scalar is
$$R_{abcd}R^{abcd}=f''^2+\frac{4(f')^2}{r^2}+\frac{4(1-f)^2}{r^4} =\frac{48M^2}{r^6}-\frac{96MQ^2}{r^7}+\frac{56Q^4}{r^8}.$$
All formulas hold on every component of $J$, including $f<0$.

## Facts & Assumptions

**Given:** The dyonic RN datum with length parameters $M,q_e,q_m$, positive-radius interval $J$, and $f\ne0$.

[F1] [[def-emg-xs-rn-data]]: the base metric is $q=-f(dx^0)^2+f^{-1}dr^2$, the sphere factor is $r^2\gamma_{S^2}$, and $Q^2=q_e^2+q_m^2$.

[F2] [[lem-gr-warped-spherical-christoffel-and-ricci]]: for $g=q+r^2\gamma_{S^2}$ with $\det q<0$, the product-chart Christoffel symbols include $\Gamma^i{}_{Aj}=r^{-1}(\partial_A r)\delta^i{}_j$ and $\Gamma^A{}_{ij}=-r q^{AB}(\partial_Br)\gamma_{ij}$; its Ricci formulas say the mixed Ricci components vanish and
$\operatorname{Ric}_{AB}=\operatorname{Ric}(q)_{AB}-2r^{-1}\operatorname{Hess}_{AB}r$,
$\operatorname{Ric}_{ij}=(1-z-r\Delta_qr)\gamma_{ij}$.

[F3] [[def-gr-curvature-tensor-and-derived-tensors]] and [[thm-gr-curvature-tensoriality-and-coordinate-formula]]: use
$R(X,Y)Z=\nabla_X\nabla_YZ-\nabla_Y\nabla_XZ-\nabla_{[X,Y]}Z$,
$R^a{}_{bcd}=\partial_c\Gamma^a{}_{db}-\partial_d\Gamma^a{}_{cb}
+\Gamma^a{}_{ce}\Gamma^e{}_{db}-\Gamma^a{}_{de}\Gamma^e{}_{cb}$, and
$\operatorname{Ric}_{bd}=g^{ac}R_{abcd}$.

[F4] [[thm-gr-curvature-algebraic-symmetries]]: $R_{abcd}=-R_{bacd}=-R_{abdc}=R_{cdab}$, so the six unordered index pairs determine the full contraction.

[F5] [[lem-derivative-of-a-power]] and [[thm-algebra-of-derivatives]]: for
$r>0$ and every integer $n\ge1$, $(r^{-n})'=-n r^{-n-1}$; finite sums and
scalar multiples differentiate by the corresponding sums and scalar multiples.

[A1] $r>0$, $f\ne0$, and $Q^2=q_e^2+q_m^2$.

## Proof


1.1 By [F5] and the sum and scalar rules, $f'=2M/r^2-2Q^2/r^3$ and $f''=-4M/r^3+6Q^2/r^4$. On the two-dimensional base, $q^{00}=-f^{-1}$ and $q^{11}=f$. Its only nonzero Christoffel symbols, apart from lower-index symmetry, are $\Gamma^0{}_{01}=f'/(2f)$, $\Gamma^1{}_{00}=ff'/2$, and $\Gamma^1{}_{11}=-f'/(2f)$, by the metric formula in [F3]. Substitution gives $\operatorname{Ric}(q)_{00}=ff''/2$, $\operatorname{Ric}(q)_{11}=-f''/(2f)$, $\operatorname{Hess}_{00}r=-ff'/2$, $\operatorname{Hess}_{11}r=f'/(2f)$, $z=f$, and $\Delta_qr=f'$. Applying [F2] yields the four Ricci entries in the Statement; the angular factor $\sin^2\theta$ is the corresponding component of $\gamma_{S^2}$. [given, F1, F2, F3, F5, algebra]

2.1 Contracting those diagonal entries with $g^{00}=-1/f$, $g^{11}=f$, $g^{22}=1/r^2$, $g^{33}=1/(r^2\sin^2\theta)$ gives $S=-Q^2/r^4-Q^2/r^4+Q^2/r^4+Q^2/r^4=0$ and $\operatorname{Ric}_{ab}\operatorname{Ric}^{ab}=4Q^4/r^8$. These contractions are valid for either sign of $f$ because only $f\ne0$ is used. [step 1.1, A1, algebra]

2.2 In coordinates $(x^0,r,\theta,\phi)$, the nonzero Christoffel symbols of the full metric, apart from lower-index symmetry, are $$\Gamma^0{}_{01}=\frac{f'}{2f},\quad \Gamma^1{}_{00}=\frac{ff'}2,\quad \Gamma^1{}_{11}=-\frac{f'}{2f},\quad \Gamma^1{}_{22}=-rf,\quad \Gamma^1{}_{33}=-rf\sin^2\theta,\quad \Gamma^2{}_{12}=\frac1r,\quad \Gamma^3{}_{13}=\frac1r,\quad \Gamma^2{}_{33}=-\sin\theta\cos\theta,\quad \Gamma^3{}_{23}=\cot\theta.$$ All other entries are zero. Substitution of this complete list in the coordinate curvature formula of [F3] gives the following matrix of the 21 independent pair-pair components, with row and column labels $01,02,03,12,13,23$: $$\begin{array}{c|cccccc} &01&02&03&12&13&23\\\hline 01&f''/2&0&0&0&0&0\\ 02&0&rff'/2&0&0&0&0\\ 03&0&0&rff'\sin^2\theta/2&0&0&0\\ 12&0&0&0&-rf'/(2f)&0&0\\ 13&0&0&0&0&-rf'\sin^2\theta/(2f)&0\\ 23&0&0&0&0&0&r^2(1-f)\sin^2\theta \end{array}.$$ For example, the entries $R_{0101}$, $R_{0202}$ and $R_{2323}$ follow by using respectively the base-only, base-sphere and sphere Christoffel symbols in [F3]; the $03,12,13$ entries follow by the same substitution with the listed factors $\sin^2\theta$, $f^{-1}$ and $r^{-1}$. The table gives all 21 pair-pair entries, not only the nonzero ones. The pair symmetries [F4] then recover every ordered component. [F2, F3, F4, step 1.1, algebra]

3.1 In the full contraction, each independent diagonal pair entry occurs four times. The $01$ entry contributes $4(f''/2)^2=f''^2$. Each of the four base-sphere entries $02,03,12,13$ contributes $(f')^2/r^2$ after raising its four indices with $g^{00}=-1/f$, $g^{11}=f$, $g^{22}=1/r^2$ and $g^{33}=1/(r^2\sin^2\theta)$; their sum is $4(f')^2/r^2$. The $23$ entry contributes $4(1-f)^2/r^4$. Thus $R_{abcd}R^{abcd}=f''^2+4(f')^2/r^2+4(1-f)^2/r^4$ for either sign of $f$; only $f\ne0$ is used. [step 2.2, F4, algebra]

4.1 Substituting [A1] into the three terms gives respectively $16M^2/r^6-48MQ^2/r^7+36Q^4/r^8$, $16M^2/r^6-32MQ^2/r^7+16Q^4/r^8$, and $16M^2/r^6-16MQ^2/r^7+4Q^4/r^8$. Adding coefficients proves the displayed polynomial. [A1, step 3.1, algebra] ∎

## Remarks

The calculation is a mathematical identity on $f\ne0$. It makes no assertion at a coordinate root, at $r=0$, about a distributional source there, or about a maximal extension.

