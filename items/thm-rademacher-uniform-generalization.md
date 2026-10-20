---
id: thm-rademacher-uniform-generalization
kind: theorem
title: "Rademacher uniform generalization bounds"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 2
deps:
  - def-axiom-of-choice
  - def-identically-distributed-and-iid-random-variables
  - def-natural-logarithm
  - lem-probability-measure-basic-identities
  - def-rademacher-complexity
  - thm-natural-logarithm-laws
  - thm-mcdiarmid-bounded-differences
  - thm-rademacher-symmetrization-bound
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
    - title: "Peter L. Bartlett and Shahar Mendelson, Rademacher and Gaussian Complexities: Risk Bounds and Structural Results, JMLR 3 (2002), Theorems 5 and 8 with proofs"
      url: "https://www.jmlr.org/papers/volume3/bartlett02a/bartlett02a.pdf"
---

## Statement

Assume the Axiom of Choice (AC). Let $(\mathcal Z,\mathcal A,P)$ be a probability space, let $m\ge1$, and let $\mathcal G$ be a nonempty class of measurable functions $g:\mathcal Z\to[0,1]$. Take $S=(Z_1,\ldots,Z_m)$ to be the coordinate sample with law $P^m$. Put $P_mg=m^{-1}\sum_i g(Z_i)$ and $\overline{\mathcal G}:=\{1-g:g\in\mathcal G\}$. Assume the sample, independent-copy and sign suprema over $\mathcal G$ and $\overline{\mathcal G}$ used in the displayed claims and the symmetrization argument are measurable. Let $\sigma_1,\ldots,\sigma_m$ be independent uniform signs, and let

$$\widehat{\mathfrak R}_S(\mathcal G):=\mathbb E_\sigma\sup_{g\in\mathcal G}\frac1m\sum_{i=1}^m\sigma_i g(Z_i),\qquad \mathfrak R_m(\mathcal G):=\mathbb E_{S\sim P^m}\widehat{\mathfrak R}_S(\mathcal G),$$

where the $\sigma_i$ are independent uniform signs, and let $\delta\in(0,1)$. Each of the following four guarantees holds with probability at least $1-\delta$ over $S$:

$$\forall g\in\mathcal G,\qquad Pg\le P_mg+2\mathfrak R_m(\mathcal G)+\sqrt{\frac{\log(1/\delta)}{2m}},$$

$$\forall g\in\mathcal G,\qquad Pg\le P_mg+2\widehat{\mathfrak R}_S(\mathcal G)+3\sqrt{\frac{\log(2/\delta)}{2m}},$$

$$\sup_{g\in\mathcal G}|Pg-P_mg|\le2\mathfrak R_m(\mathcal G)+\sqrt{\frac{\log(2/\delta)}{2m}},$$

$$\sup_{g\in\mathcal G}|Pg-P_mg|\le2\widehat{\mathfrak R}_S(\mathcal G)+3\sqrt{\frac{\log(4/\delta)}{2m}}.$$

The four guarantees are separate probability statements. The choice axiom is used through the bounded-differences theorem.

## Statement references

[[def-rademacher-complexity]]: fixes the one-sided empirical and expected complexities and their $1/m$ normalization.

[[thm-rademacher-symmetrization-bound]]: bounds the expected one-sided deviation by twice the expected complexity.

[[thm-mcdiarmid-bounded-differences]]: supplies bounded-differences concentration under AC.

[[def-axiom-of-choice]]: AC is the stated set-theoretic axiom carried by the concentration theorem.

[[def-natural-logarithm]]: defines $\log$ as the inverse of the exponential on positive inputs.

[[thm-natural-logarithm-laws]]: gives the reciprocal law $\log(1/x)=-\log x$ and monotonicity of $\log$.

[[lem-probability-measure-basic-identities]]: gives finite subadditivity for the union bounds.

[Mohri et al., Theorem 3.3 and complete proof, printed pp. 31–33](https://www.dropbox.com/s/38p0j6ds5q9c8oe/10290.pdf?dl=1): proves both one-sided bounds with the stated constants in the adopted normalization.

[Bartlett and Mendelson, Theorems 5 and 8 with proofs, printed pp. 464–467 and 479–480](https://www.jmlr.org/papers/volume3/bartlett02a/bartlett02a.pdf): gives independent risk-bound proofs in its separate absolute/$2/m$ convention.

## Facts & Assumptions

**Given:** AC, IID observations with law $P$, a nonempty measurable class of $[0,1]$-valued functions, measurable suprema, $m\ge1$ and $0<\delta<1$.

[A1] AC states that every family of nonempty sets has a choice function. It is invoked only through the McDiarmid supplier, whose theorem assumes AC and whose proof uses it in the conditional-expectation / martingale construction. [[def-axiom-of-choice]]

[F1] For $g\in\mathcal G$, $Pg=\int g\,dP$; $\widehat{\mathfrak R}_S(\mathcal G)$ is the sign-average one-sided supremum with normalization $1/m$, and $\mathfrak R_m(\mathcal G)=\mathbb E_S\widehat{\mathfrak R}_S(\mathcal G)$. [[def-rademacher-complexity]]

[F2] For an IID sample and measurable suprema, $\mathbb E_S\sup_g(Pg-P_mg)\le2\mathfrak R_m(\mathcal G)$; this expectation inequality is choice-free. [[thm-rademacher-symmetrization-bound]]

[F3] If a product-measurable integrable function of independent coordinates changes by at most $c_i$ when coordinate $i$ changes, AC gives the upper-tail bound $\mathbb P\{f-\mathbb Ef\ge t\}\le\exp(-2t^2/\sum_i c_i^2)$; applying it to $-f$ gives the lower-tail version. [[thm-mcdiarmid-bounded-differences]]

[F4] For $x>0$, $\log x$ is the unique real $y$ with $\exp(y)=x$. [[def-natural-logarithm]]

[F5] $\log$ is strictly increasing, $\log 1=0$, and $\log(1/x)=-\log x$ for $x>0$; it is the inverse of the exponential on positive inputs. [[thm-natural-logarithm-laws]]

[F6] IID means the sample coordinates are mutually independent and have the common law $P$. [[def-identically-distributed-and-iid-random-variables]]

[F7] A finite union of events has probability at most the sum of their probabilities. [[lem-probability-measure-basic-identities]]

## Proof

**Given:** The hypotheses in the Statement.

1.1 Put $\Psi(S):=\sup_{g\in\mathcal G}(Pg-P_mg)$. Changing one coordinate changes each term in this supremum by at most $1/m$, hence $|\Psi(S)-\Psi(S')|\le1/m$. By the Statement, $\Psi$ is measurable, and it is bounded because $0\le g\le1$. Since $0<\delta<1$, [F5] and $m\ge1$ give $t:=\sqrt{\log(1/\delta)/(2m)}>0$; [F4]–[F5] give $\exp(-2mt^2)=\delta$. McDiarmid [F3] with $c_i=1/m$ gives $\Psi(S)\le\mathbb E\Psi(S)+t$ with probability at least $1-\delta$, and [F2] bounds its expectation by $2\mathfrak R_m(\mathcal G)$. This proves the first one-sided bound. [A1, F1, F2, F3, F4, F5, F6, given]

1.2 For each fixed sample, $\widehat{\mathfrak R}_S(\overline{\mathcal G})=\mathbb E_\sigma[m^{-1}\sum_i\sigma_i+\sup_{g\in\mathcal G}m^{-1}\sum_i(-\sigma_i)g(Z_i)]$. The first term has mean zero and $-\sigma$ has the same uniform law as $\sigma$, so this equals $\widehat{\mathfrak R}_S(\mathcal G)$; taking expectations gives $\mathfrak R_m(\overline{\mathcal G})=\mathfrak R_m(\mathcal G)$. [F1, given, algebra]

2.1 For each fixed sign vector, changing one observation changes every $m^{-1}\sum_i\sigma_i g(Z_i)$ by at most $1/m$, since $g$ takes values in $[0,1]$; the same bound holds for the supremum and then for its sign average $\widehat{\mathfrak R}_S(\mathcal G)$. This statistic is bounded and measurable by the Statement. With $t=\sqrt{\log(1/\delta)/(2m)}>0$ as in step 1.1, [F3] applied to its negative gives $\mathfrak R_m(\mathcal G)\le\widehat{\mathfrak R}_S(\mathcal G)+t$ with probability at least $1-\delta$. [A1, F1, F3, F4, F5, F6, step 1.1, given]

2.2 For $h=1-g$, $Ph-P_mh=P_mg-Pg$. Apply step 1.1 to $\mathcal G$ and $\overline{\mathcal G}$ with failure probability $\delta/2$ each. By [F7] and step 1.2, both deviations are at most $2\mathfrak R_m(\mathcal G)+\sqrt{\log(2/\delta)/(2m)}$ except on an event of probability at most $\delta$. This proves the first two-sided bound. [F1, F7, step 1.1, step 1.2, algebra]

3.1 Apply step 1.1 with failure probability $\delta/2$ and step 2.1 with failure probability $\delta/2$. By [F7], both events hold with probability at least $1-\delta$. Since $2/\delta>1$, [F5] gives $t:=\sqrt{\log(2/\delta)/(2m)}>0$; combining the two bounds gives $\Psi(S)\le2\mathfrak R_m(\mathcal G)+t\le2\widehat{\mathfrak R}_S(\mathcal G)+3t$. This is the second one-sided guarantee. [F1, F4, F5, F7, step 1.1, step 2.1, algebra]

4.1 Apply step 3.1 to $\mathcal G$ and $\overline{\mathcal G}$ with failure probability $\delta/2$ each. Their complexities agree by step 1.2, and their upper deviations are $\sup_g(Pg-P_mg)$ and $\sup_g(P_mg-Pg)$, respectively. By [F7] the two bounds hold together with probability at least $1-\delta$, giving the last two-sided bound with $\log(4/\delta)$. [F1, F7, step 1.2, step 3.1, algebra] ∎
