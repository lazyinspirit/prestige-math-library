---
id: ex-qftx-omega-u2-one-instanton-factor
kind: example
title: 'The $U(2)$ $\mathcal N=2^*$ One-Instanton Factor'
status: "published"
origin: pipeline
dependency_level: 7
domain: physics
library: physics
category: advanced-qft-and-supersymmetry
axiom_base: "ZF + full AC inherited from the fixed-point theorem and mass-inserted series suppliers; the two-partition and rational simplification calculations use only finite algebra."
physical_scope: "The finite, formal charge-one coefficient for the conditional regulated U(2) N=2* ADHM series; no contour evaluation or continuum path-integral claim."
deps:
  - def-qftx-instanton-equivariant-partition-series
  - pthm-qftx-omega-background-fixed-point-expansion
  - post-qftx-s4-n2-localization-model
dependency_roles:
  def-qftx-instanton-equivariant-partition-series: formulation-prerequisite
  pthm-qftx-omega-background-fixed-point-expansion: physical-result
  post-qftx-s4-n2-localization-model: physical-assumption
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Vasily Pestun, Localization of Gauge Theory on a Four-Sphere and Supersymmetric Wilson Loops"
      url: https://arxiv.org/pdf/0712.2824
      locator: "§5, equations (5.11)–(5.12): shifted tangent weights and the U(2) charge-one N=2* coefficient."
verification:
  precheck: pending
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-25
---

## Example

Take $N=2$ and charge $k=1$ in the mass-inserted formal ADHM series. Use its dimensionless formal charge variable $q$; the equivariant weights $\epsilon_i,a_\alpha,\widetilde m$ have mass dimension one. Let $s=\epsilon_1+\epsilon_2$, $d=a_2-a_1$, and $\widetilde m=i m_E+s/2$ in the source's Euclidean mass convention. Exactly one box lies in either color, so the fixed-point tuples are $(\square,\varnothing)$ and $(\varnothing,\square)$. Their tangent characters and Euler classes are
$$\operatorname{ch}_T(T_{(\square,\varnothing)}X)=t_1+t_2+\frac{e_2}{e_1}+t_1t_2\frac{e_1}{e_2}$$
$$E_1=\epsilon_1\epsilon_2d(s-d),\qquad N_1=(\epsilon_1-\widetilde m)(\epsilon_2-\widetilde m)(d-\widetilde m)(s-d-\widetilde m)$$
$$\operatorname{ch}_T(T_{(\varnothing,\square)}X)=t_1+t_2+\frac{e_1}{e_2}+t_1t_2\frac{e_2}{e_1}$$
$$E_2=-\epsilon_1\epsilon_2d(s+d),\qquad N_2=(\epsilon_1-\widetilde m)(\epsilon_2-\widetilde m)(-d-\widetilde m)(s+d-\widetilde m).$$
For generic weights satisfying $\epsilon_1\epsilon_2d(s-d)(s+d)\ne0$, the coefficient of $q$ is
$$\frac{N_1}{E_1}+\frac{N_2}{E_2}=\frac{2(\epsilon_1-\widetilde m)(\epsilon_2-\widetilde m)(\widetilde m^2-\widetilde m s+s^2-d^2)}{\epsilon_1\epsilon_2(s^2-d^2)}.$$
For the adopted $S^4_r$ model, set $\epsilon_1=\epsilon_2=r^{-1}$ and $\widetilde m=i m_E+r^{-1}$. At $m_E=0$ the displayed one-instanton coefficient vanishes because its first two numerator factors are zero; this is only the degree-one check of the $\mathcal N=4$ massless limit.

The diagram places the single box in each of the two possible framing colors. The first coordinate is horizontal and the second vertical.

```tikz
\begin{tikzpicture}[x=1.1cm,y=1.1cm]
  \draw[step=1.1cm,gray] (0,0) grid (1,1);
  \draw[fill=blue!20] (0,0) rectangle (1,1);
  \node[below] at (0.5,0) {$|Y_1|=1$};
  \node[below] at (2.1,0) {$Y_2=\emptyset$};
  \node at (3.2,0.5) {$\mathrm{or}$};
  \draw[step=1.1cm,gray] (4,0) grid (5,1);
  \draw[fill=orange!20] (4,0) rectangle (5,1);
  \node[below] at (4.5,0) {$|Y_2|=1$};
  \node[below] at (6.1,0) {$Y_1=\emptyset$};
  \node[above] at (0.5,1.2) {color 1};
  \node[above] at (4.5,1.2) {color 2};
\end{tikzpicture}
```

## Example references

[[def-qftx-instanton-equivariant-partition-series|Mass-inserted series and coefficient convention]]

[[pthm-qftx-omega-background-fixed-point-expansion|Conditional fixed-point expansion]]

[[post-qftx-s4-n2-localization-model|Adopted U(2) S4 model and mass specialization]]

[Pestun, §5, equations (5.11)–(5.12)](https://arxiv.org/pdf/0712.2824)

## Facts & Assumptions

**Given:** $N=2$, $k=1$, the ADHM character convention, generic rotation, framing and flavor weights, and the conditional localized mass-inserted series.

[F1] The current draft [[pthm-qftx-omega-background-fixed-point-expansion]] has an authored conditional proof: for each partition tuple the fixed-point contribution is the product of tangent weights shifted by $-\widetilde m$, divided by the tangent Euler product; the fixed points are the partition tuples of total size $k$.

[F2] Current draft [[def-qftx-instanton-equivariant-partition-series]]: the coefficient is the proper-fixed-locus localized pushforward of the rational Borel top Chern class of the tangent bundle tensored with the inverse flavor line, capped with the complex-oriented fundamental class; its restriction at a fixed point of tangent weights $w_\chi$ is $\prod_\chi(w_\chi-\widetilde m)$.

[F3] Current draft [[post-qftx-s4-n2-localization-model]] adopts $\mathcal N=2^*$ $U(2)$ with real Euclidean mass $m_E$ and equal pole rotations $\epsilon_1=\epsilon_2=r^{-1}$; its noncommutative S4 regulator remains a source assumption, not a proven existence claim.

[A1] Assume the theorem's finite-proper-fixed-locus pushforward conditions and the source-reported mass-insertion interpretation hold for the displayed generic-parameter calculation. The source model's regulator remains assumed, and the formula is not an evaluation of the continued Coulomb contour.

## Verification

1.1 The only total-size-one tuples are $(\square,\varnothing)$ and $(\varnothing,\square)$. Substitution of $\mathbf V=e_1$ and $\mathbf V=e_2$ into the ADHM tangent character gives respectively $t_1+t_2+e_2/e_1+t_1t_2e_1/e_2$ and $t_1+t_2+e_1/e_2+t_1t_2e_2/e_1$. [given, F1, algebra]

2.1 Taking first Chern classes of those four weights gives $(\epsilon_1,\epsilon_2,d,s-d)$ and $(\epsilon_1,\epsilon_2,-d,s+d)$. Multiplication yields $E_1=\epsilon_1\epsilon_2d(s-d)$ and $E_2=-\epsilon_1\epsilon_2d(s+d)$; shifting each weight by $-\widetilde m$ gives exactly $N_1,N_2$ stated above. [given, F1, step 1.1, algebra]

3.1 Put $A=(\epsilon_1-\widetilde m)(\epsilon_2-\widetilde m)$ and $C=\widetilde m^2-\widetilde m s-d^2$. The two shifted cross-color products are $(d-\widetilde m)(s-d-\widetilde m)=C+sd$ and $(-d-\widetilde m)(s+d-\widetilde m)=C-sd$. Therefore
$$\frac{N_1}{E_1}+\frac{N_2}{E_2}=\frac{A}{\epsilon_1\epsilon_2d}\left(\frac{C+sd}{s-d}-\frac{C-sd}{s+d}\right)=\frac{A}{\epsilon_1\epsilon_2d}\frac{(C+sd)(s+d)-(C-sd)(s-d)}{s^2-d^2}.$$
The numerator is $2Cd+2s^2d=2d(C+s^2)$, so cancellation of $d$ in the generic rational function field gives the displayed coefficient. [given, step 2.1, algebra]

4.1 Under [F2] and [F3], the source S4 specialization has $\epsilon_1=\epsilon_2=r^{-1}$ and $\widetilde m=i m_E+r^{-1}$. Setting $m_E=0$ makes $A=0$, so the degree-one coefficient vanishes; this checks only this coefficient and assigns no value at the excluded generic Euler-denominator poles. [given, F2, F3, A1, step 3.1, algebra] ∎
