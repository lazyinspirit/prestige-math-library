---
id: cor-linucb-expected-regret
kind: corollary
title: LinUCB has expected pseudo-regret of order $d\sqrt n\log(nL)$
status: published
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 6
verification:
  precheck: pass
deps: [alg-linucb,
       cor-expectation-linearity-monotonicity-and-modulus-bound,
       cor-expectation-of-an-indicator-is-probability,
       def-axiom-of-choice,
       def-countable-choice,
       def-expectation-of-a-nonnegative-or-integrable-random-variable,
       def-linear-contextual-bandit-model,
       def-natural-logarithm,
       lem-linucb-ridge-estimates-are-measurable,
       lem-linucb-trace-determinant-bound,
       thm-linucb-regret,
       thm-natural-logarithm-laws]
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: "The corollary inherits AC and Countable Choice only through the high-probability confidence/regret branch; the expectation and failure-event calculation uses no additional choice."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Tor Lattimore and Csaba Szepesvári, Bandit Algorithms"
      url: "https://tor-lattimore.com/downloads/book/book.pdf"
      locator: "§19.3, Corollary 19.3 and Theorem 19.2."
    - title: "Yasin Abbasi-Yadkori, Dávid Pál, and Csaba Szepesvári, Online Least Squares Estimation with Self-Normalized Processes: An Application to Bandit Problems"
      url: "https://arxiv.org/pdf/1102.2670"
      locator: "§5.1, Theorem 13 and the note on high-probability regret versus expected regret."
---

## Statement

Assume the hypotheses of the LinUCB high-probability regret theorem, with $d\ge1$, $\lambda>0$, $L\ge1$, $m_2\ge0$, and horizon $n\ge2$. Run LinUCB with $\delta=1/n$. Let $\widehat R_n$ be its random pseudo-regret and define expected pseudo-regret by $R_n:=\mathbb E[\widehat R_n]$. Put

$$q_n:=\log\!\left(1+\frac{nL^2}{d\lambda}\right),\qquad B_n:=\sqrt{8dn\beta_nq_n},$$

where $\beta_n$ is the algorithm's confidence schedule, and set

$$c:=1+\frac{\log(1+L/\lambda)}{\log2},\qquad C_1:=4+2c+\frac{1+2\lambda m_2^2}{\log2},\qquad C:=\sqrt{8C_1c}+\frac{1}{\sqrt2\log2}.$$

Here $B_n$ is generally random through $\beta_n$ and the design matrix. Then

$$R_n\le\mathbb E[B_n]+1\le C\,d\sqrt n\log(nL).$$

This is an expected pseudo-regret bound; it is distinct from a high-probability bound on realized reward regret.

## Statement references

[Tor Lattimore and Csaba Szepesvári, *Bandit Algorithms*, §19.3, Corollary 19.3](https://tor-lattimore.com/downloads/book/book.pdf)

[Abbasi-Yadkori, Pál, and Szepesvári, §5.1, Theorem 13 and its expected-regret caveat](https://arxiv.org/pdf/1102.2670)

## Facts & Assumptions

**Given:** AC, Countable Choice, LinUCB's confidence schedule, the model hypotheses, and the per-round linear-mean range bound from the high-probability regret theorem.

[A1] [[def-axiom-of-choice]]: AC is inherited through the conditional-expectation, supermartingale, and bounded optional-sampling interfaces in the confidence proof.

[A2] [[def-countable-choice]]: Countable Choice is inherited through the Gaussian integral in the confidence proof.

[F1] [[thm-linucb-regret]]: with probability at least $1-\delta$, $\widehat R_n\le\sqrt{8dn\beta_n\log(1+nL^2/(d\lambda))}$ when the per-round mean range is at most $1$.

[F2] [[alg-linucb]]: $\beta_n=\max\{1,(\sqrt\lambda m_2+\sqrt{2\log(1/\delta)+\log(\det V_{n-1}/\lambda^d)})^2\}$.

[F3] [[lem-linucb-trace-determinant-bound]]: applying its determinant bound to the first $n-1\ge1$ feature vectors and using monotonicity of $\log$ gives $\log(\det V_{n-1}/\lambda^d)\le d\log(1+(n-1)L^2/(d\lambda))\le d\log(1+nL^2/(d\lambda))=dq_n$.

[F4] [[def-linear-contextual-bandit-model]] and [F1]: the pseudo-regret is measurable and each round gap lies in $[0,1]$ under the theorem's range assumption, so $0\le\widehat R_n\le n$.

[F5] [[def-expectation-of-a-nonnegative-or-integrable-random-variable]], [[cor-expectation-linearity-monotonicity-and-modulus-bound]], and [[cor-expectation-of-an-indicator-is-probability]]: expectations are integrals, preserve order and finite sums, and $\mathbb E[\mathbf1_E]=\mathbb P(E)$.

[F6] [[thm-natural-logarithm-laws]]: $\log$ is increasing and $\log(xy)=\log x+\log y$ for positive arguments.

[F7] [[lem-linucb-ridge-estimates-are-measurable]] and [[alg-linucb]]: $\det V_{n-1}$ is measurable, and the algorithm formulas make $\beta_n$ and $B_n$ nonnegative measurable random variables.

## Proof

1.1 With $\delta=1/n$, [F2] and [F3] give $$\beta_n\le1+\left(\sqrt\lambda m_2+\sqrt{2\log n+dq_n}\right)^2\le1+2\lambda m_2^2+4\log n+2dq_n.$$ The first inequality uses $\max\{1,x\}\le1+x$ for $x\ge0$; the second uses $(a+b)^2\le2a^2+2b^2$. [F2, F3, algebra]

2.1 Since $nL\ge2$, $\log n\le\log(nL)$ and $$1+\frac{nL^2}{d\lambda}\le1+\frac{nL^2}{\lambda}\le nL\left(1+\frac{L}{\lambda}\right).$$ By [F6], $q_n\le\log(nL)+\log(1+L/\lambda)\le c\log(nL)$. Hence step 1.1 and $d\ge1$, $\log(nL)\ge\log2$ imply $\beta_n\le C_1d\log(nL)$. [F6, step 1.1, algebra]

3.1 Step 2.1 and the definition of $B_n$ give $$B_n=\sqrt{8dn\beta_nq_n}\le\sqrt{8C_1c}\,d\sqrt n\log(nL)$$ pointwise. By [F7], $B_n$ is measurable; this deterministic bound makes it integrable. [step 2.1, F6, F7, algebra]

4.1 By [F1] with $\delta=1/n$, there is a measurable event $E$ with $\mathbb P(E)\ge1-1/n$ on which $\widehat R_n\le B_n$. By [F4], $0\le\widehat R_n\le n$ on every outcome. Therefore $\widehat R_n\le B_n\mathbf1_E+n\mathbf1_{E^c}$ pointwise. Taking expectations and using [F5], [F7], and step 2.1 gives $$R_n\le\mathbb E[B_n\mathbf1_E]+n\mathbb P(E^c)\le\mathbb E[B_n]+1.$$ [A1, A2, F1, F4, F5, F7, step 3.1, algebra]

5.1 Also $d\sqrt n\log(nL)\ge\sqrt2\log2$, so $1\le d\sqrt n\log(nL)/(\sqrt2\log2)$. Combining this with steps 3.1 and 4.1 proves $R_n\le C d\sqrt n\log(nL)$. [step 2.1, step 3.1, step 4.1, algebra] ∎
