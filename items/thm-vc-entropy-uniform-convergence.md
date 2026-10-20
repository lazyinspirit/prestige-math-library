---
id: thm-vc-entropy-uniform-convergence
kind: theorem
title: "VC entropy uniform deviation without a logarithmic sample-size factor"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 3
deps:
  - lem-vc-loss-rademacher-bound
  - def-population-and-empirical-risk
  - lem-population-and-empirical-risk-are-measurable
  - def-identically-distributed-and-iid-random-variables
  - thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique
  - thm-independent-random-elements-have-product-joint-law
  - thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces
  - thm-mcdiarmid-bounded-differences
  - def-axiom-of-choice
  - lem-probability-measure-basic-identities
  - def-natural-logarithm
  - thm-natural-logarithm-laws
  - def-real-exponential-function-and-e
  - cor-exponential-reciprocal-and-positivity
  - cor-expectation-linearity-monotonicity-and-modulus-bound
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification: {judge: {model: "gpt-6-luna", verdict: pass, date: 2026-10-20}}
sources:
  references:
    - title: "Mehryar Mohri, Afshin Rostamizadeh, and Ameet Talwalkar, Foundations of Machine Learning, 2nd ed., Theorem 3.3 and proof"
      url: "https://www.dropbox.com/s/38p0j6ds5q9c8oe/10290.pdf?dl=1"
    - title: "Peter L. Bartlett and Shahar Mendelson, Rademacher and Gaussian Complexities: Risk Bounds and Structural Results, Theorem 5 and Appendix B"
      url: "https://www.jmlr.org/papers/volume3/bartlett02a/bartlett02a.pdf"
---

## Statement

Let $(\mathcal X,\Sigma)$ be a nonempty measurable space, let $H$ be a nonempty class of measurable binary classifiers with finite VC dimension $d$, and put $\mathcal Z:=\mathcal X\times\{0,1\}$ with sigma-algebra $\Sigma_{\mathcal Z}:=\Sigma\otimes\mathcal P(\{0,1\})$. Let $P$ be a probability law on $\mathcal Z$, and let $S=(Z_1,\ldots,Z_m)$ consist of $m\ge1$ IID observations with law $P$. For $h\in H$, put $g_h(x,y):=\mathbf1\{h(x)\ne y\}$, $\mathcal G_H:=\{g_h:h\in H\}$, and $\overline{\mathcal G}_H:=\{1-g:g\in\mathcal G_H\}$. Define $R_P(h):=P\{h(X)\ne Y\}$ and $\widehat R_S(h):=m^{-1}\sum_{i=1}^m g_h(Z_i)$. For measurable $g:\mathcal Z\to[0,1]$, write $Pg:=\int g\,dP$ and $P_mg(S):=m^{-1}\sum_{i=1}^m g(Z_i)$. Let $S'=(Z'_1,\ldots,Z'_m)$ be an independent sample with law $P^m$, and write $P'_mg:=P_mg(S')$.

Assume the following maps are measurable:
1. $S\mapsto\sup_{g\in\mathcal G_H}(Pg-P_mg(S))$ and $S\mapsto\sup_{\bar g\in\overline{\mathcal G}_H}(P\bar g-P_m\bar g(S))$ on $(\mathcal Z^m,\Sigma_{\mathcal Z}^{\otimes m})$;
2. $(S,S')\mapsto\sup_{g\in\mathcal G_H}(P'_mg-P_mg(S))$ and $(S,S')\mapsto\sup_{\bar g\in\overline{\mathcal G}_H}(P'_m\bar g-P_m\bar g(S))$ on $(\mathcal Z^m\times\mathcal Z^m,\Sigma_{\mathcal Z}^{\otimes m}\otimes\Sigma_{\mathcal Z}^{\otimes m})$;
3. for every fixed $\sigma\in\{-1,+1\}^m$, the maps $(S,S')\mapsto\sup_{g\in\mathcal G_H}m^{-1}\sum_{i=1}^m\sigma_i(g(Z'_i)-g(Z_i))$ and $(S,S')\mapsto\sup_{\bar g\in\overline{\mathcal G}_H}m^{-1}\sum_{i=1}^m\sigma_i(\bar g(Z'_i)-\bar g(Z_i))$ on $(\mathcal Z^m\times\mathcal Z^m,\Sigma_{\mathcal Z}^{\otimes m}\otimes\Sigma_{\mathcal Z}^{\otimes m})$;
4. for every fixed $\sigma\in\{-1,+1\}^m$, the maps $S\mapsto\sup_{g\in\mathcal G_H}m^{-1}\sum_{i=1}^m\sigma_i g(Z_i)$ and $S\mapsto\sup_{\bar g\in\overline{\mathcal G}_H}m^{-1}\sum_{i=1}^m\sigma_i\bar g(Z_i)$ on $(\mathcal Z^m,\Sigma_{\mathcal Z}^{\otimes m})$.

The first pair of maps gives the two one-sided deviation suprema and makes the absolute-deviation supremum in the conclusion measurable. Set $K_0:=3e^2/(e-1)$, $K:=4K_0$, $A:=12eK+2$, and $C_{\rm VC}:=3\sqrt{8A}(\sqrt{\log A}+2\sqrt{\log2})$, where $e:=\exp(1)$ and $\log$ is the natural logarithm. If the Axiom of Choice (AC) is assumed, then for every $0<\delta<1$, with probability at least $1-\delta$,

$$\sup_{h\in H}|R_P(h)-\widehat R_S(h)|\le2C_{\rm VC}\sqrt{\frac{d+1}{m}}+\sqrt{\frac{\log(2/\delta)}{2m}}.$$

This is a uniform absolute-deviation bound; it claims neither ERM existence nor a distribution-free lower bound.

## Statement references

[Mohri et al., Theorem 3.3 and proof](https://www.dropbox.com/s/38p0j6ds5q9c8oe/10290.pdf?dl=1): one-sided generalization through ghost-sample symmetrization and bounded differences.

[Bartlett and Mendelson, Theorem 5 and Appendix B](https://www.jmlr.org/papers/volume3/bartlett02a/bartlett02a.pdf): an independent Rademacher generalization proof in a different normalization.

## Facts & Assumptions

**Given:** A nonempty finite-VC binary class, an IID sample, measurable deviation suprema, and $0<\delta<1$.

[F1] For every fixed sample, the zero-one loss class $G_H$ has one-sided empirical Rademacher complexity at most $C_{\rm VC}\sqrt{(d+1)/m}$, with explicit $C_{\rm VC}$. [[lem-vc-loss-rademacher-bound]]

[F2] Population risk is the integral of the loss and empirical risk is its sample average; for zero-one loss these equal the error probability and empirical error fraction. [[def-population-and-empirical-risk]]

[F3] The fixed-class risks are measurable functions of the sample. [[lem-population-and-empirical-risk-are-measurable]]

[F4] IID observations have the finite product joint law, and the bounded measurable integrands used in ghost-sample symmetrization satisfy Fubini. [[def-identically-distributed-and-iid-random-variables]], [[thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique]], [[thm-independent-random-elements-have-product-joint-law]], [[thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]]

[A1] Assume the Axiom of Choice; the concentration supplier below requires it. [[def-axiom-of-choice]]

[F5] Under AC, a measurable integrable function with coordinate oscillations at most $c_i$ has upper tail $\Pr\{f-\mathbb Ef\ge t\}\le\exp(-2t^2/\sum_i c_i^2)$. [[thm-mcdiarmid-bounded-differences]]

[F6] Probability is subadditive on a finite union. [[lem-probability-measure-basic-identities]]

[F7] The natural logarithm is increasing and inverse to the exponential on positive reals. [[def-natural-logarithm]], [[thm-natural-logarithm-laws]], [[def-real-exponential-function-and-e]], [[cor-exponential-reciprocal-and-positivity]]

[F8] Expectation is linear and monotone for integrable real random variables. [[cor-expectation-linearity-monotonicity-and-modulus-bound]]

## Proof

**Given:** The hypotheses in the Statement.

1.1 For $h\in H$, put $g_h(x,y)=\mathbf1\{h(x)\ne y\}$ and define $\Phi(S)=\sup_{h\in H}(R_P(h)-\widehat R_S(h))$. On a product probability space take an independent IID copy $S'$. Each coordinate of $S'$ has law $P$, so product-law marginals and Fubini [F4], together with expectation linearity [F8], give $R_P(h)=\mathbb E_{S'}\widehat R_{S'}(h)$ for every $h$. Monotonicity of expectation then gives $\Phi(S)\le\mathbb E_{S'}\sup_h(\widehat R_{S'}(h)-\widehat R_S(h))$. The integrand is bounded and measurable by assumption, hence [F4] allows integration in either sample order. For each fixed sign vector, swapping $Z_i$ with $Z_i'$ at exactly its negative coordinates preserves the joint product law, so the expected supremum is unchanged when each difference is multiplied by $\sigma_i$. Subadditivity of the supremum and expectation linearity [F8] bound it by the sum of the two expected one-sided empirical Rademacher suprema, which are equal because $\sigma$ and $-\sigma$ have the same law. Thus $\mathbb E\Phi(S)\le2\mathbb E_{S,\sigma}\widehat{\mathfrak R}_S(G_H)$. [F2, F3, F4, F8, given, construct, algebra]

2.1 By [F1], $\mathbb E\Phi(S)\le2C_{\rm VC}\sqrt{(d+1)/m}$. Replacing one observation in $S$ changes each $\widehat R_S(h)$ by at most $1/m$, so the supremum $\Phi(S)$ changes by at most $1/m$ as well. Applying [F5] with $c_i=1/m$ and $t=\sqrt{\log(2/\delta)/(2m)}$ gives $\Pr\{\Phi(S)>\mathbb E\Phi(S)+t\}\le\delta/2$. [A1, F1, F5, F7, step 1.1, algebra]

3.1 The complemented class $\bar H=\{1-h:h\in H\}$ has the same trace counts and VC dimension as $H$, and its loss satisfies $g_{1-h}(x,y)=1-g_h(x,y)$. Applying steps 1.1–2.1 to $\bar H$ with the same $\delta$ and $t$ therefore gives, except on an event of probability at most $\delta/2$, $\widehat R_S(h)-R_P(h)\le2C_{\rm VC}\sqrt{(d+1)/m}+t$ for every $h\in H$. The finite union bound [F6] combines this lower-deviation event with step 2.1, giving the asserted absolute-deviation bound with probability at least $1-\delta$. [A1, F1, F4, F6, F7, step 1.1, step 2.1, algebra] ∎
