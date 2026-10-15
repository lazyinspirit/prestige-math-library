---
id: lem-two-stage-finite-design-variance-identities
kind: lemma
title: "Finite two-stage sampling variance identities"
status: published
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 4
deps:
  - def-two-stage-randomized-interference-design-and-effects
  - lem-finite-simple-random-sampling-identities
  - def-finite-probability-space-and-event
  - def-expectation-on-a-finite-probability-space
  - def-variance-and-covariance
  - lem-finite-sum-laws
  - lem-finite-event-conditional-expectation-formula
  - thm-linearity-of-expectation
  - cor-variance-adds-for-pairwise-independent-random-variables
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
sources:
  references:
    - title: "Michael G. Hudgens and M. Elizabeth Halloran, Toward Causal Inference With Interference, Appendices A.4 and A.6–A.9"
      url: "https://www.treatment-effects.com/Hudgens-Halloran-2008.pdf"
---

## Statement

Let $N\ge4$ groups be completely randomized, with exactly $C$ groups assigned $\psi$ and $N-C$ assigned $\phi$, where $2\le C\le N-2$. For each group $i$ and strategy $s\in\{\phi,\psi\}$, let $a_i(s)$ be a fixed real value and let $X_i(s)$ be a real-valued random variable from that group's finite second-stage assignment law, with $\mathbb E[X_i(s)]=a_i(s)$ and $v_i(s)=\operatorname{Var}(X_i(s))$. Conditional on the first-stage vector, the group-specific second-stage random variables are independent. Let $C_\psi=C$, $C_\phi=N-C$, and define
$$\hat\mu_s=\frac1{C_s}\sum_{i:S_i=s}X_i(s),\qquad s_{X,s}^2=\frac1{C_s-1}\sum_{i:S_i=s}(X_i(s)-\hat\mu_s)^2.$$
For $S_s^2=(N-1)^{-1}\sum_i(a_i(s)-\bar a(s))^2$ and $S_{\psi-\phi}^2=(N-1)^{-1}\sum_i\{a_i(\psi)-a_i(\phi)-\overline{a(\psi)-a(\phi)}\}^2$, one has
$$\operatorname{Var}(\hat\mu_s)=\left(1-\frac{C_s}{N}\right)\frac{S_s^2}{C_s}+\frac1{C_sN}\sum_{i=1}^Nv_i(s),\qquad \mathbb E[s_{X,s}^2]=S_s^2+\frac1N\sum_{i=1}^Nv_i(s),$$
and
$$\operatorname{Var}(\hat\mu_\psi-\hat\mu_\phi)=\frac{S_\psi^2}{C}+\frac{S_\phi^2}{N-C}-\frac{S_{\psi-\phi}^2}{N}+\frac1{CN}\sum_i v_i(\psi)+\frac1{(N-C)N}\sum_i v_i(\phi).$$
Consequently,
$$\mathbb E\!\left[\frac{s_{X,\psi}^2}{C}+\frac{s_{X,\phi}^2}{N-C}\right]=\operatorname{Var}(\hat\mu_\psi-\hat\mu_\phi)+\frac{S_{\psi-\phi}^2}{N}.$$

## Facts & Assumptions

**Given:** The finite two-stage assignment law with fixed strategy-arm sizes, fixed real group values $a_i(s)$, and finite second-stage random variables $X_i(s)$ whose conditional laws are independent across groups and have means $a_i(s)$ and variances $v_i(s)$.

[F1] [[def-two-stage-randomized-interference-design-and-effects]]: the first-stage strategy-$\psi$ groups are a uniform $C$-element subset of the $N$ groups, and the second-stage assignments are independent across groups conditional on the strategy vector.

[F2] [[lem-finite-simple-random-sampling-identities]]: for a uniform fixed-size subset, sample means have covariance $(1-m/n)S_{xy}/m$, and sample covariance is unbiased for the corresponding finite-population covariance.

[F3] [[def-expectation-on-a-finite-probability-space]] and [[def-variance-and-covariance]]: expectations and variances are finite weighted sums and centered second moments on the finite assignment space.

[F4] [[lem-finite-sum-laws]]: finite sums distribute over addition and scalar multiplication.

[F5] [[thm-linearity-of-expectation]]: expectation distributes over finite sums on a finite probability space.

[F6] [[lem-finite-event-conditional-expectation-formula]]: averaging conditional expectations over a finite partition recovers unconditional expectation.

[F7] [[cor-variance-adds-for-pairwise-independent-random-variables]]: for a finite pairwise-independent family of square-integrable real random variables, the variance of the sum is the sum of their variances.

## Proof

1.1 For a fixed strategy $s$, write $A_s(\mathbf S)=C_s^{-1}\sum_{i:S_i=s}a_i(s)$ and $E_s=C_s^{-1}\sum_{i:S_i=s}\epsilon_i(s)$, where $\epsilon_i(s)=X_i(s)-a_i(s)$; then $\hat\mu_s=A_s+E_s$. By [F2], $\mathbb E[A_s]=\bar a(s)$. Conditional on each first-stage vector, $\mathbb E[E_s\mid\mathbf S]=0$ by centering; [F6] therefore gives $\mathbb E[E_s]=0$ and $\mathbb E[(A_s-\bar a(s))E_s]=0$. Expanding the variance definition [F3] and using [F5] now gives $\operatorname{Var}(\hat\mu_s)=\operatorname{Var}(A_s)+\mathbb E[E_s^2]=\operatorname{Var}(A_s)+\mathbb E[\operatorname{Var}(E_s\mid\mathbf S)]$. [F1, F2, F3, F5, F6, given, algebra]

1.2 Conditional on a first-stage vector, expand the within-arm sum of squares using [F4]: $\sum_{i:S_i=s}(X_i(s)-\hat\mu_s)^2=\sum_{i:S_i=s}(a_i(s)-A_s)^2+\sum_{i:S_i=s}\epsilon_i(s)^2-C_sE_s^2+2\sum_{i:S_i=s}(a_i(s)-A_s)\epsilon_i(s)$. The last term has conditional mean zero. By expectation linearity [F5] and variance addition [F7], the conditional mean of $\sum_i\epsilon_i(s)^2-C_sE_s^2$ is $(1-1/C_s)\sum_{i:S_i=s}v_i(s)$. Dividing by $C_s-1$, then averaging over the first-stage partition by [F5] and [F6], gives the expected fixed selected sample variance plus $N^{-1}\sum_i v_i(s)$; the fixed sample-variance identity and inclusion probabilities in [F2] make these terms $S_s^2$ and $N^{-1}\sum_i v_i(s)$. Thus $\mathbb E[s_{X,s}^2]=S_s^2+N^{-1}\sum_i v_i(s)$. [F1, F2, F4, F5, F6, F7, algebra]

1.3 Let $S_{\psi\phi}=(N-1)^{-1}\sum_i(a_i(\psi)-\bar a(\psi))(a_i(\phi)-\bar a(\phi))$. If $\bar a_{\phi}^{\,S}$ is the sample mean of the fixed $a_i(\phi)$ values in the $\psi$-selected groups, the complementary $\phi$-group mean equals $(N\bar a(\phi)-C\bar a_{\phi}^{\,S})/(N-C)$. Applying the covariance identity in [F2] to both fixed lists on the same $C$-group sample gives $\operatorname{Cov}(\bar a_{\psi}^{\,S},\bar a_{\phi}^{\,S})=(1-C/N)S_{\psi\phi}/C$; the complement identity then makes the covariance between the fixed $\psi$-sample mean and the fixed $\phi$-complement mean equal to $-S_{\psi\phi}/N$. [F1, F2, F3, F4, algebra]

2.1 Conditional on a first-stage vector, the selected errors are a finite pairwise-independent family, so [F7] gives $\operatorname{Var}(E_s\mid\mathbf S)=C_s^{-2}\sum_{i:S_i=s}v_i(s)$. The selected groups form a uniform $C_s$-element sample, with inclusion probabilities $C_s/N$ by [F2]. Averaging the conditional variance over first-stage vectors using [F5] and [F6] yields $\mathbb E[\operatorname{Var}(E_s\mid\mathbf S)]=C_s^{-2}\sum_i(C_s/N)v_i(s)=\sum_i v_i(s)/(C_sN)$. The fixed component $\operatorname{Var}(A_s)=(1-C_s/N)S_s^2/C_s$ by [F2]; step 1.1 then proves the first one-arm variance identity. [F1, F2, F5, F6, F7, step 1.1, algebra]

2.2 Write $A_\Delta=A_\psi-A_\phi$ and $E_\Delta=E_\psi-E_\phi$. Conditional on the first-stage vector, all selected group errors are centered and independent across groups; [F7] gives $\operatorname{Var}(E_\Delta\mid\mathbf S)=C^{-2}\sum_{i:S_i=\psi}v_i(\psi)+(N-C)^{-2}\sum_{i:S_i=\phi}v_i(\phi)$. By [F6], its covariance with the fixed $A_\Delta$ is zero and its conditional variance averages over the design to $\sum_i v_i(\psi)/(CN)+\sum_i v_i(\phi)/((N-C)N)$, using the inclusion probabilities in [F2]. Expanding the variance definition [F3] with linearity [F5] shows the total contrast variance is the fixed component plus this averaged error variance. The fixed component has variance $(1-C/N)S_\psi^2/C+(C/N)S_\phi^2/(N-C)+2S_{\psi\phi}/N$ by [F2] and step 1.3. Since $S_{\psi-\phi}^2=S_\psi^2+S_\phi^2-2S_{\psi\phi}$, this is $S_\psi^2/C+S_\phi^2/(N-C)-S_{\psi-\phi}^2/N$. Adding the second-stage terms proves the stated contrast-variance identity. [F1, F2, F3, F5, F6, F7, step 1.3, algebra]

3.1 By step 1.2 and expectation linearity [F5], the expected arm-wise variance sum is $S_\psi^2/C+S_\phi^2/(N-C)+\sum_i v_i(\psi)/(CN)+\sum_i v_i(\phi)/((N-C)N)$. Comparing with step 2.2 leaves exactly $S_{\psi-\phi}^2/N$. [F5, step 1.2, step 2.2, algebra] ∎