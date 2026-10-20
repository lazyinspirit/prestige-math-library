---
id: cor-erm-excess-risk-from-uniform-deviation
kind: corollary
title: "ERM excess risk from Rademacher uniform deviation"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 3
deps:
  - def-axiom-of-choice
  - def-empirical-risk-minimizer
  - def-identically-distributed-and-iid-random-variables
  - def-natural-logarithm
  - def-population-and-empirical-risk
  - def-rademacher-complexity
  - def-supervised-learning-problem
  - lem-population-and-empirical-risk-are-measurable
  - thm-rademacher-uniform-generalization
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification: {judge: {model: "gpt-6-luna", verdict: pass, date: 2026-10-20}}
sources:
  references:
    - title: "Mehryar Mohri, Afshin Rostamizadeh, and Ameet Talwalkar, Foundations of Machine Learning, 2nd ed., Theorem 3.3 and proof"
      url: "https://www.dropbox.com/s/38p0j6ds5q9c8oe/10290.pdf?dl=1"
    - title: "Peter L. Bartlett and Shahar Mendelson, Rademacher and Gaussian Complexities: Risk Bounds and Structural Results, JMLR 3 (2002), Theorem 8 and proof"
      url: "https://www.jmlr.org/papers/volume3/bartlett02a/bartlett02a.pdf"
---

## Statement

Assume AC. Let $(\mathcal X,\Sigma_X)$, $(\mathcal Y,\Sigma_Y)$, and $(\mathcal A,\Sigma_A)$ be nonempty measurable spaces, let $P$ be a probability measure on $\mathcal X\times\mathcal Y$, let $\mathcal H$ be a nonempty class of measurable predictors $h:\mathcal X\to\mathcal A$, and let $\ell:\mathcal A\times\mathcal Y\to[0,1]$ be measurable. For $h\in\mathcal H$, define $g_h(x,y):=\ell(h(x),y)$, $\mathcal G:=\{g_h:h\in\mathcal H\}$, and $\overline{\mathcal G}:=\{1-g:g\in\mathcal G\}$. Assume the sample, independent-copy, and sign suprema over $\mathcal G$ and $\overline{\mathcal G}$ required by the uniform generalization theorem are measurable in their respective product sigma algebras. Let $Z_i=(X_i,Y_i)$ be mutually independent with common law $P$, with $m\ge1$, and write

$$R_P(h):=Pg_h,\qquad \widehat R_S(h):=P_mg_h.$$

Suppose a measurable prediction rule $\widehat h_\eta$ exists such that $\widehat h_\eta(S)\in\mathcal H$ for every sample $S$ and each samplewise output is an $\eta$-approximate empirical risk minimizer, meaning $\widehat R_S(\widehat h_\eta(S))\le\inf_{h\in\mathcal H}\widehat R_S(h)+\eta$ for a fixed finite $\eta\ge0$. Assume $S\mapsto R_P(\widehat h_\eta(S))$ is measurable. For $\delta\in(0,1)$, with independent uniform signs $\sigma_i$, $\widehat{\mathfrak R}_S(\mathcal G)=\mathbb E_\sigma\sup_{g\in\mathcal G}m^{-1}\sum_i\sigma_i g(Z_i)$ and $\mathfrak R_m(\mathcal G)=\mathbb E_S\widehat{\mathfrak R}_S(\mathcal G)$, each of the following excess-risk bounds holds with probability at least $1-\delta$:

$$R_P(\widehat h_\eta(S))-\inf_{h\in\mathcal H}R_P(h)\le4\mathfrak R_m(\mathcal G)+2\sqrt{\frac{\log(2/\delta)}{2m}}+\eta,$$

$$R_P(\widehat h_\eta(S))-\inf_{h\in\mathcal H}R_P(h)\le4\widehat{\mathfrak R}_S(\mathcal G)+6\sqrt{\frac{\log(4/\delta)}{2m}}+\eta.$$

The two displayed bounds are separate probability guarantees. This corollary asserts no existence of an empirical-risk-minimizing measurable rule for a general class.

## Statement references

[[def-supervised-learning-problem]]: supplies measurable observation, prediction, and loss spaces with a joint law.

[[def-identically-distributed-and-iid-random-variables]]: IID means the sample coordinates are mutually independent and have the common law $P$.

[[def-population-and-empirical-risk]]: defines population risk as expected loss and empirical risk as its sample average.

[[def-empirical-risk-minimizer]]: defines exact and $\eta$-approximate ERM rules and does not assert a selector exists for every class.

[[lem-population-and-empirical-risk-are-measurable]]: proves measurability of induced losses and fixed-predictor risks.

[[thm-rademacher-uniform-generalization]]: supplies the two separate two-sided uniform deviation bounds under AC.

[[def-rademacher-complexity]]: defines the one-sided empirical and expected complexities used in the conclusion.

[[def-axiom-of-choice]]: AC is carried because the concentration-based supplier assumes it.

[[def-natural-logarithm]]: defines the logarithm appearing in the confidence terms.

[Mohri et al., Theorem 3.3 and complete proof, Chapter 3 §3.1](https://www.dropbox.com/s/38p0j6ds5q9c8oe/10290.pdf?dl=1): supplies the uniform Rademacher deviations; the two-deviation ERM comparison is proved locally.

[Bartlett and Mendelson, Theorem 8 and complete proof, printed pp. 466–467](https://www.jmlr.org/papers/volume3/bartlett02a/bartlett02a.pdf): gives an independent uniform risk-bound argument in a different normalization.

## Facts & Assumptions

**Given:** A supervised prediction problem with bounded measurable loss, IID sample, AC, and an existing measurable $\eta$-approximate ERM rule with $\widehat h_\eta(S)\in\mathcal H$ for every sample $S$ and measurable selected population risk.

[A1] Assume AC. It is used by the concentration theorem in the uniform-deviation supplier. [[def-axiom-of-choice]]

[F1] A supervised problem has nonempty measurable instance, label, and action spaces; a joint law; measurable predictors; and a measurable loss. [[def-supervised-learning-problem]]

[F2] Population risk is the integral of the loss under $P$ and empirical risk is its sample average. For $g_h(x,y)=\ell(h(x),y)$ these equal $Pg_h$ and $P_mg_h$. [[def-population-and-empirical-risk]]

[F3] An $\eta$-approximate ERM relative to $\mathcal H$ belongs to $\mathcal H$ and has empirical risk at most the empirical infimum plus $\eta$ when the infimum is finite; the supplied measurable prediction rule has $\widehat h_\eta(S)\in\mathcal H$ for every sample $S$, is jointly measurable in sample and new instance, and the definition asserts no selector exists for every class. [[def-empirical-risk-minimizer]]

[F4] The induced loss $g_h$ is measurable, and fixed-predictor population and empirical risks are well-defined. [[lem-population-and-empirical-risk-are-measurable]]

[F5] With probability at least $1-\delta$, $\sup_{g\in\mathcal G}|Pg-P_mg|\le2\mathfrak R_m(\mathcal G)+\sqrt{\log(2/\delta)/(2m)}$. [[thm-rademacher-uniform-generalization]]

[F6] With probability at least $1-\delta$, $\sup_{g\in\mathcal G}|Pg-P_mg|\le2\widehat{\mathfrak R}_S(\mathcal G)+3\sqrt{\log(4/\delta)/(2m)}$. [[thm-rademacher-uniform-generalization]]

[F7] The sample coordinates are mutually independent and all have common law $P$. [[def-identically-distributed-and-iid-random-variables]]

## Proof

**Given:** The hypotheses in the Statement.

1.1 For each $h\in\mathcal H$, the supervised loss function $g_h$ is measurable by [F1] and [F4]. By [F2], $R_P(h)=Pg_h$ and $\widehat R_S(h)=P_mg_h$, so the uniform bounds in [F5]–[F6] control all predictors in $\mathcal H$ under the IID hypothesis [F7]. [F1, F2, F4, F5, F6, F7, given, construct]

2.1 On the event in [F5], put $d:=2\mathfrak R_m(\mathcal G)+\sqrt{\log(2/\delta)/(2m)}$. Then every $h$ satisfies $R_P(h)\le\widehat R_S(h)+d$ and $\widehat R_S(h)\le R_P(h)+d$. By [F3], $\widehat R_S(\widehat h_\eta)\le\inf_h\widehat R_S(h)+\eta$. Since $\widehat h_\eta(S)\in\mathcal H$ by [F3], applying the first inequality to $\widehat h_\eta$ and taking the infimum in the second gives $R_P(\widehat h_\eta)-\inf_hR_P(h)\le d+\inf_h\widehat R_S(h)+\eta-\inf_hR_P(h)\le2d+\eta$, where $\inf_h\widehat R_S(h)\le\inf_hR_P(h)+d$. [F2, F3, F5, step 1.1, algebra]

2.2 On the event in [F6], put $d:=2\widehat{\mathfrak R}_S(\mathcal G)+3\sqrt{\log(4/\delta)/(2m)}$. The two inequalities $R_P(h)\le\widehat R_S(h)+d$ and $\widehat R_S(h)\le R_P(h)+d$ hold for every $h$. Since $\widehat h_\eta(S)\in\mathcal H$, [F3] permits applying the first inequality to the selected predictor and gives $R_P(\widehat h_\eta)-\inf_hR_P(h)\le d+\inf_h\widehat R_S(h)+\eta-\inf_hR_P(h)\le2d+\eta$, using $\inf_h\widehat R_S(h)\le\inf_hR_P(h)+d$. [F2, F3, F6, step 1.1, algebra]

3.1 The events in [F5] and [F6] are the AC-dependent concentration branch [A1]. Each has probability at least $1-\delta$; step 2.1 proves the first displayed excess bound on the [F5] event, and step 2.2 proves the second on the [F6] event. Substituting each value of $d$ from those steps gives respectively $4\mathfrak R_m(\mathcal G)+2\sqrt{\log(2/\delta)/(2m)}+\eta$ and $4\widehat{\mathfrak R}_S(\mathcal G)+6\sqrt{\log(4/\delta)/(2m)}+\eta$. The guarantees are separate. [A1, F5, F6, step 2.1, step 2.2, algebra] ∎
