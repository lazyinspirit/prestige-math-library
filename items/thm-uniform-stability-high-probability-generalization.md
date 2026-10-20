---
id: thm-uniform-stability-high-probability-generalization
kind: theorem
title: "High-probability generalization from uniform stability"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 3
deps:
  - def-uniform-algorithmic-stability
  - thm-uniform-stability-expected-generalization
  - def-supervised-learning-problem
  - def-population-and-empirical-risk
  - def-identically-distributed-and-iid-random-variables
  - def-natural-logarithm
  - thm-natural-logarithm-laws
  - def-axiom-of-choice
  - thm-mcdiarmid-bounded-differences
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-20
sources:
  references:
    - title: "Olivier Bousquet and André Elisseeff, Stability and Generalization, JMLR 2 (2002), Theorem 12 and proof"
      url: "https://www.jmlr.org/papers/volume2/bousquet02a/bousquet02a.pdf"
    - title: "Mehryar Mohri, Afshin Rostamizadeh, and Ameet Talwalkar, Foundations of Machine Learning, 2nd ed., Theorem 14.2 and proof"
      url: "https://moodle2.units.it/pluginfile.php/757669/mod_resource/content/1/Mohri%20et%20al.%20-%202018%20-%20Foundations%20of%20machine%20learning.pdf"
---

## Statement

Assume the Axiom of Choice. Let $(\mathsf X,\Sigma_X)$ and $(\mathsf Y,\Sigma_Y)$ be nonempty measurable instance and label spaces, and equip $\mathsf Z=\mathsf X\times\mathsf Y$ with $\Sigma_Z=\Sigma_X\otimes\Sigma_Y$. Let $P$ be a probability measure on $(\mathsf Z,\Sigma_Z)$, let $\mathcal F$ be a nonempty class of measurable functions $f:(\mathsf X,\Sigma_X)\to(\mathbb R,\mathcal B(\mathbb R))$, and let $\ell:\mathbb R\times\mathsf Y\to[0,\infty)$ be measurable with respect to $\mathcal B(\mathbb R)\otimes\Sigma_Y$. For $f\in\mathcal F$ and $z=(x,y)$ write $L_f(z)=\ell(f(x),y)$, $R_P(f)=\int_{\mathsf Z}L_f(z)\,P(dz)$, and $\widehat R_S(f)=m^{-1}\sum_{i=1}^mL_f(Z_i)$. Let $S=(Z_1,\ldots,Z_m)$ have product law $P^m$ on $(\mathsf Z^m,\Sigma_Z^{\otimes m})$, with $m\ge1$, and let $A$ be a deterministic, permutation-invariant size-indexed learning rule that outputs members of $\mathcal F$ and has a nonincreasing uniform deletion-stability sequence $(\beta_n)_{n\ge1}$. Assume the maps $(S,z)\mapsto L_{A_S}(z)$ and $(S,z)\mapsto L_{A_{S\setminus i}}(z)$ for every $i\in[m]$ are jointly measurable on the sample/test product space, and all sample-dependent risk, empirical-risk, and leave-one-out maps in the conclusions are measurable, and assume $0\le L_{A_T}(z)\le M<\infty$ for every full or deleted sample $T$ and every $z\in\mathsf Z$. Define $R_{\mathrm{loo}}(A,S)=m^{-1}\sum_{i=1}^m L_{A_{S\setminus i}}(Z_i)$ using the size-$m$ deletion output. For each $\delta\in(0,1)$, the following two bounds hold separately, each with probability at least $1-\delta$ over $S\sim P^m$:

$$R_P(A_S)\le\widehat R_S(A_S)+2\beta_m+(4m\beta_m+M)\sqrt{\frac{\log(1/\delta)}{2m}},$$

$$R_P(A_S)\le R_{\mathrm{loo}}(A,S)+\beta_m+(4m\beta_m+M)\sqrt{\frac{\log(1/\delta)}{2m}}.$$

The displayed probability guarantees are separate and need not hold on the same event.

## Statement references

The natural logarithm in the confidence terms is defined by [[def-natural-logarithm]].

Its positivity on arguments greater than $1$ follows from [[thm-natural-logarithm-laws]].

Bousquet and Elisseeff, Theorem 12 and full proof, printed pp. 507–509, give these two separate bounds under deletion stability. [Full JMLR paper PDF](https://www.jmlr.org/papers/volume2/bousquet02a/bousquet02a.pdf)

Mohri, Rostamizadeh, and Talwalkar, Theorem 14.2 and complete proof, printed pp. 334–336, give the corresponding replacement-stability bound. [Full second-edition book PDF](https://moodle2.units.it/pluginfile.php/757669/mod_resource/content/1/Mohri%20et%20al.%20-%202018%20-%20Foundations%20of%20machine%20learning.pdf)

## Facts & Assumptions

**Given:** AC, an IID product sample, a measurable supervised loss, a permutation-invariant rule with uniform deletion stability, jointly measurable sample-dependent test losses, measurable sample-dependent risks, and the common finite loss bound $M$.

[A1] Assume AC. It is used through the bounded-differences supplier, whose conditional-expectation and martingale proof assumes AC. [[def-axiom-of-choice]]

[A2] The full and deleted sample-dependent test losses are jointly measurable in the sample and test observation. The sample-dependent risk, empirical-risk, and leave-one-out maps are measurable, and $0\le L_{A_T}(z)\le M$.

[F1] Population risk is the $P$-integral of the loss; empirical risk is its finite sample average. [[def-population-and-empirical-risk]]

[F2] Uniform deletion stability bounds the pointwise loss change from a full output to its size-$m$ deletion output by $\beta_m$. [[def-uniform-algorithmic-stability]]

[F3] IID means mutually independent sample coordinates with common law $P$. [[def-identically-distributed-and-iid-random-variables]]

[F4] The expected stability theorem gives $\mathbb E[R_P(A_S)-\widehat R_S(A_S)]\le2\beta_m$, $\mathbb E[R_P(A_S)-R_{\mathrm{loo}}(A,S)]\le\beta_m$, and the pointwise risk-change bound $|R_P(A_S)-R_P(A_{S\setminus i})|\le\beta_m$. [[thm-uniform-stability-expected-generalization]]

[F5] For $x>0$, $\log x$ is the unique real $y$ with $\exp(y)=x$. [[def-natural-logarithm]]

[F6] The natural logarithm is strictly increasing and $\log1=0$, so $x>1$ implies $\log x>0$. [[thm-natural-logarithm-laws]]

[F7] Under AC, for independent coordinates and a product-measurable integrable function whose $i$th coordinate oscillation is at most $c_i$, McDiarmid gives $\mathbb P\{F-\mathbb EF\ge t\}\le\exp(-2t^2/\sum_i c_i^2)$ for $t>0$ when $\sum_i c_i^2>0$. [[thm-mcdiarmid-bounded-differences]]

## Proof

1.1 Fix an index $k$ and let $S'$ be any sample that differs from $S$ only at coordinate $k$. Their retained samples $S\setminus k$ and $S'\setminus k$ coincide. By [F4], $|R_P(A_S)-R_P(A_{S'})|\le|R_P(A_S)-R_P(A_{S\setminus k})|+|R_P(A_{S'\setminus k})-R_P(A_{S'})|\le2\beta_m$. For every $j\ne k$, the two loss terms at the common test point $Z_j$ differ by at most $2\beta_m$, by [F2] through the same deleted output. The two $k$th loss terms each lie in $[0,M]$, so their difference is at most $M$. Hence $|\widehat R_S(A_S)-\widehat R_{S'}(A_{S'})|\le 2(m-1)\beta_m/m+M/m\le2\beta_m+M/m$. For $\Phi(S)=R_P(A_S)-\widehat R_S(A_S)$ this yields the coordinate oscillation $|\Phi(S)-\Phi(S')|\le4\beta_m+M/m$. [A2, F1, F2, F4, given, algebra]

1.2 Fix an index $k$ and samples $S,S'$ differing only at coordinate $k$. The risk term in $\Psi(S)=R_P(A_S)-R_{\mathrm{loo}}(A,S)$ changes by at most $2\beta_m$ by [F4]. In the leave-one-out average, the $k$th term uses the same deleted training sample for $S$ and $S'$, and its test losses differ by at most $M$. For $j\ne k$, the two deleted training samples $S\setminus j$ and $S'\setminus j$ have the same $m-2$ common observations and the two alternative $k$th observations. Form a size-$m$ indexed sample $T$ from those $m-2$ common observations and both alternatives. Up to permutation, each of the two deleted training samples is obtained by deleting one of the alternatives from $T$. Permutation invariance and [F2] therefore bound their loss change at the common test point $Z_j$ by $2\beta_m$. When $m=1$ there are no indices $j\ne k$, so only the $k$th term occurs. Thus the leave-one-out average changes by at most $2(m-1)\beta_m/m+M/m\le2\beta_m+M/m$, and $|\Psi(S)-\Psi(S')|\le4\beta_m+M/m$. [A2, F2, F4, given, construct, algebra]

2.1 Put $c=4\beta_m+M/m$. If $c=0$, then $M=\beta_m=0$ and every loss and both gaps vanish. If $c>0$, then $\Phi$ is bounded, measurable, and integrable by [A2]. Since $0<\delta<1$, [F5]–[F6] give $\log(1/\delta)>0$, so $t=c\sqrt{m\log(1/\delta)/2}>0$. The product law $P^m$ makes the coordinates independent by [F3], and [F7] with all $m$ coordinate bounds equal to $c$ gives $\mathbb P\{\Phi-\mathbb E\Phi\ge t\}\le\exp(-2t^2/(mc^2))=\delta$. By [F4], outside this event $\Phi\le2\beta_m+t=2\beta_m+(4m\beta_m+M)\sqrt{\log(1/\delta)/(2m)}$. Together with the $c=0$ case this proves the first probability bound. [A1, A2, F3, F4, F5, F6, F7, step 1.1, given, algebra]

3.1 With $c=4\beta_m+M/m$, the case $c=0$ again has zero losses and zero gaps. If $c>0$, [A2] makes $\Psi$ bounded, measurable, and integrable. Since $0<\delta<1$, [F5]–[F6] give $\log(1/\delta)>0$. The product law $P^m$ makes the coordinates independent by [F3], and [F7] with coordinate bounds $c$ gives $\mathbb P\{\Psi-\mathbb E\Psi\ge c\sqrt{m\log(1/\delta)/2}\}\le\delta$. By [F4], $\mathbb E\Psi\le\beta_m$, so outside this event $\Psi\le\beta_m+(4m\beta_m+M)\sqrt{\log(1/\delta)/(2m)}$. This proves the second probability bound, separately from the first. [A1, A2, F3, F4, F5, F6, F7, step 1.2, given, algebra] ∎
