---
id: thm-vc-uniform-convergence
kind: theorem
title: "One-sided VC uniform convergence and the finite-class branch"
status: published
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 3
deps:
  - def-shattered-set-and-vc-dimension
  - def-growth-function
  - thm-sauer-shelah-growth-bound
  - def-population-and-empirical-risk
  - lem-population-and-empirical-risk-are-measurable
  - def-identically-distributed-and-iid-random-variables
  - thm-independent-random-elements-have-product-joint-law
  - thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique
  - thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces
  - thm-mcdiarmid-bounded-differences
  - def-axiom-of-choice
  - thm-finite-class-uniform-deviation
  - lem-bounded-variable-hoeffding-mgf
  - def-natural-logarithm
  - thm-natural-logarithm-laws
  - cor-expectation-linearity-monotonicity-and-modulus-bound
  - thm-exponential-two-point-convexity
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification: {judge: {model: "gpt-6-luna", verdict: pass, date: 2026-10-20}}
sources:
  references:
    - title: "Mehryar Mohri, Afshin Rostamizadeh, and Ameet Talwalkar, Foundations of Machine Learning, 2nd ed., Theorems 3.3, 3.5, 3.7, Corollary 3.8, and Corollary 3.19"
      url: "https://www.dropbox.com/s/38p0j6ds5q9c8oe/10290.pdf?dl=1"
    - title: "Peter L. Bartlett and Shahar Mendelson, Rademacher and Gaussian Complexities: Risk Bounds and Structural Results, Theorem 5 and Appendix B"
      url: "https://www.jmlr.org/papers/volume3/bartlett02a/bartlett02a.pdf"
---

## Statement

Let $(\mathcal X,\Sigma)$ be a nonempty measurable space, let $H$ be a nonempty class of measurable binary functions on $\mathcal X$ with finite VC dimension $d$, put $\mathcal Z=\mathcal X\times\{0,1\}$ with its product sigma-algebra, and let $P$ be a probability law on $\mathcal Z$. For $h\in H$, define $R_P(h):=P\{(x,y):h(x)\ne y\}$ and $\widehat R_S(h):=m^{-1}\sum_{i=1}^m\mathbf1\{h(X_i)\ne Y_i\}$ for an IID sample $S=((X_i,Y_i))_{i=1}^m$ of size $m\ge1$ with law $P$. Assume every displayed supremum over $H$ and its binary loss class that appears below is measurable. For $0<\delta<1$, the following separate branches hold.

1. If $H$ is finite, then without an Axiom of Choice premise, with probability at least $1-\delta$,
$$\sup_{h\in H}|R_P(h)-\widehat R_S(h)|\le\sqrt{\frac{\log|H|+\log(2/\delta)}{2m}}.$$
In particular, if $d=0$, then $H$ is a singleton and this gives $\sup_{h\in H}|R_P(h)-\widehat R_S(h)|\le\sqrt{\log(2/\delta)/(2m)}$.

2. If $1\le d\le m$ and the Axiom of Choice (AC) is assumed, then with probability at least $1-\delta$, simultaneously for every $h\in H$,
$$R_P(h)\le\widehat R_S(h)+\sqrt{\frac{2d\log(em/d)}{m}}+\sqrt{\frac{\log(1/\delta)}{2m}}.$$

Here $\log$ is the natural logarithm and $e=\exp(1)$.

## Statement references

[Mohri et al., Theorem 3.3, Theorem 3.5, Theorem 3.7, Corollary 3.8, and Corollary 3.19](https://www.dropbox.com/s/38p0j6ds5q9c8oe/10290.pdf?dl=1): one-sided Rademacher generalization, the finite-sample maximum bound, and the stated VC display.

[Bartlett and Mendelson, Theorem 5 and Appendix B](https://www.jmlr.org/papers/volume3/bartlett02a/bartlett02a.pdf): an independent classification-risk bound in their $2/m$ absolute-supremum normalization.

## Facts & Assumptions

**Given:** A measurable binary class $H$ with finite $d=\operatorname{VCdim}(H)$, an IID sample of size $m\ge1$ with law $P$, measurable deviation suprema, and $0<\delta<1$.

[F1] Shattering is defined on indexed tuples; repeated points remain distinct coordinates and $d$ is the supremum of shattered lengths. [[def-shattered-set-and-vc-dimension]]

[F2] $\Pi_H(m)$ is the supremum of trace cardinalities on indexed $m$-tuples. [[def-growth-function]]

[F3] For every integer $m\ge0$, $\Pi_H(m)\le\sum_{j=0}^d\binom{m}{j}$, and for $1\le d\le m$ it is at most $(em/d)^d$. [[thm-sauer-shelah-growth-bound]]

[F4] Population risk is the integral of the nonnegative loss and empirical risk is its sample average; for zero-one loss they are the error probability and the sample error fraction. [[def-population-and-empirical-risk]]

[F5] For each fixed measurable classifier, its population and empirical risks are measurable functions of the sample. [[lem-population-and-empirical-risk-are-measurable]]

[F6] IID observations are independent and have the same law; their finite product law exists and has the rectangle formula; bounded measurable functions on a product probability space may be integrated in either order. [[def-identically-distributed-and-iid-random-variables]], [[thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique]], [[thm-independent-random-elements-have-product-joint-law]], [[thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]]

[A1] Assume the Axiom of Choice for the VC branch. The supplied McDiarmid inequality assumes AC through its conditional-expectation proof. [[def-axiom-of-choice]]

[F7] Under AC, if a measurable integrable function on a finite product probability space changes by at most $c_i$ when coordinate $i$ alone changes, then its upper tail is at most $\exp(-2t^2/\sum_i c_i^2)$. [[thm-mcdiarmid-bounded-differences]]

[F8] For a finite nonempty class $\mathcal G$ of measurable $[0,1]$ functions, $\Pr\{\sup_{g\in\mathcal G}|P_mg-Pg|\ge t\}\le2|\mathcal G|e^{-2mt^2}$, and this finite-class proof is choice-free. [[thm-finite-class-uniform-deviation]]

[F9] If $0\le Y\le1$ almost surely, then $\mathbb E e^{\lambda(Y-\mathbb EY)}\le e^{\lambda^2/8}$ for every real $\lambda$. [[lem-bounded-variable-hoeffding-mgf]]

[F10] The natural logarithm is increasing and obeys the product law. [[def-natural-logarithm]], [[thm-natural-logarithm-laws]]

[F11] Expectation is linear and monotone for integrable real random variables. [[cor-expectation-linearity-monotonicity-and-modulus-bound]]

[F12] For all $x,y\in\mathbb R$ and $0\le t\le1$, $\exp((1-t)x+ty)\le(1-t)\exp(x)+t\exp(y)$. [[thm-exponential-two-point-convexity]]

## Proof

**Given:** The objects and assumptions of the Statement.

1.1 Put $g_h(x,y):=\mathbf1\{h(x)\ne y\}$. Its unit-level set is $(h^{-1}\{0\}\times\{1\})\cup(h^{-1}\{1\}\times\{0\})$, so each $g_h$ is measurable and takes values in $[0,1]$. By [F4]–[F5], $Pg_h=R_P(h)$ and $P_mg_h=\widehat R_S(h)$ are well-defined, measurable risk functions; the assumed supremum measurability applies to their deviations. [F4, F5, given, construct]

2.1 For an independent IID copy $S'$ of $S$, every coordinate of $S'$ has law $P$; the product-law and Fubini facts in [F6], together with finite expectation linearity [F11], give $R_P(h)=\mathbb E_{S'}P_m'g_h$ for every $h$. Thus $\Phi(S):=\sup_{h\in H}(R_P(h)-P_mg_h)\le\mathbb E_{S'}\sup_{h\in H}(P_m'g_h-P_mg_h)$. The integrand is bounded and measurable, so product-law invariance and Fubini [F6] allow integration over $S,S'$. For each fixed sign vector $\sigma$, swapping $Z_i$ with $Z_i'$ whenever $\sigma_i=-1$ preserves their joint product law; averaging over the finite sign space therefore leaves this expectation unchanged after inserting $\sigma_i$ into each difference. [F6, F11, given, step 1.1]

3.1 Subadditivity of the supremum and expectation linearity [F11] give $\mathbb E\Phi(S)\le2\mathbb E_{S,\sigma}\widehat{\mathfrak R}_S(G_H)$, where $\widehat{\mathfrak R}_S(G_H)=\mathbb E_\sigma\sup_h m^{-1}\sum_i\sigma_i g_h(Z_i)$. Writing $\widetilde h=2h-1$ and $\widetilde Y_i=2Y_i-1$ gives $g_h(Z_i)=(1-\widetilde h(X_i)\widetilde Y_i)/2$; the sign-only term has mean zero and $-\sigma_i\widetilde Y_i$ are again independent uniform signs, so $\widehat{\mathfrak R}_S(G_H)=\tfrac12\mathbb E_\sigma\sup_h m^{-1}\sum_i\sigma_i\widetilde h(X_i)$. [F6, F11, step 2.1, algebra]

4.1 For a fixed sample, the set $V_S=\{(\widetilde h(X_1),\ldots,\widetilde h(X_m)):h\in H\}$ has $|V_S|\le\Pi_H(m)$ and each vector has Euclidean norm $\sqrt m$. For a fixed $v\in\{-1,+1\}^m$, $Y_i=(1+\sigma_i v_i)/2$ is in $[0,1]$ with mean $1/2$; applying [F9] at parameter $2\lambda$ gives $\mathbb E e^{\lambda\sigma_i v_i}\le e^{\lambda^2/2}$. Expanding the finite uniform sign sum factors over coordinates, so $\mathbb E_\sigma e^{\lambda\sum_i\sigma_i v_i}\le e^{m\lambda^2/2}$. For a finite $V$ of size $N$, $e^{\lambda\max_v\sum_i\sigma_iv_i}\le\sum_v e^{\lambda\sum_i\sigma_iv_i}$. On the finite sign space, the two-point convexity inequality [F12] gives $e^{\lambda\mathbb E_\sigma\max_v\sum_i\sigma_iv_i}\le\mathbb E_\sigma e^{\lambda\max_v\sum_i\sigma_iv_i}$; its equal-weight finite form follows by induction over its $q=2^m$ outcomes, applying [F12] to the mean of the first $q-1$ outcomes and the last outcome with weights $(q-1)/q$ and $1/q$. Taking logarithms using [F10] yields $\mathbb E_\sigma\max_{v\in V}m^{-1}\sum_i\sigma_iv_i\le\log N/(m\lambda)+\lambda/2$. Optimizing $\lambda>0$ gives $\sqrt{2\log N/m}$ (and the bound is $0$ if $N=1$). By steps 2.1–3.1, $\mathbb E\Phi(S)\le\sqrt{2\log\Pi_H(m)/m}$. [F2, F9, F10, F12, step 2.1, step 3.1, algebra]

5.1 By [F3], when $1\le d\le m$ the preceding expectation is at most $\sqrt{2d\log(em/d)/m}$. Changing one sample coordinate changes $\Phi(S)$ by at most $1/m$, because every $g_h$ is $[0,1]$-valued. Apply [F7] with $c_i=1/m$ and $t=\sqrt{\log(1/\delta)/(2m)}$; since $\sum_i c_i^2=1/m$, with probability at least $1-\delta$ we have $\Phi(S)\le\mathbb E\Phi(S)+t$, which is the stated VC branch. [A1, F3, F7, step 4.1, algebra]

6.1 If $d=0$, no two distinct functions in $H$ can differ at any point, since that point would be shattered; hence $H$ contains one function. If $H$ is finite, the loss class $\{g_h:h\in H\}$ is finite with size at most $|H|$. Put $t=\sqrt{(\log|H|+\log(2/\delta))/(2m)}$; then $2|H|e^{-2mt^2}=\delta$ by [F10]. Applying [F8] at this $t$ proves the choice-free branch, including the $d=0$ case. [F1, F4, F8, F10, given, algebra] ∎
