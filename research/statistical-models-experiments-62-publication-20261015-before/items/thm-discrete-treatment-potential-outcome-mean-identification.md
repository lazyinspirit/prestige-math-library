---
id: thm-discrete-treatment-potential-outcome-mean-identification
kind: theorem
title: "Discrete-treatment potential-outcome means are identifiable"
status: draft
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 2
deps:
  - def-axiom-of-choice
  - def-potential-outcomes-and-consistency
  - def-causal-average-treatment-effects
  - def-conditional-exchangeability-of-potential-outcomes
  - def-positivity-for-discrete-treatment
  - lem-conditional-independence-integrable-factorization
  - def-conditional-expectation-given-a-sigma-algebra
  - def-conditional-expectation-as-an-ae-class
  - thm-taking-out-what-is-known
  - thm-basic-algebra-and-order-properties-of-conditional-expectation
  - lem-conditional-expectation-is-unique-almost-surely
  - thm-tower-property-of-conditional-expectation
  - def-standard-borel-space
  - def-conditional-law-given-a-random-element
  - thm-existence-of-regular-conditional-distributions-for-standard-borel-targets
  - lem-regular-conditional-kernels-factor-through-a-standard-borel-conditioning-variable
  - thm-conditional-integration-through-a-regular-conditional-law
  - def-law-or-distribution-of-a-random-element
  - thm-change-of-variables-for-expectation
  - def-identifiability-of-an-estimand
  - lem-simultaneous-ae-uniqueness-of-regular-conditional-distributions
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
sources:
  references:
    - title: "Miguel A. Hernán and James M. Robins, Causal Inference: What If, 2020 (author revision 19 August 2026)"
      url: "https://miguelhernan.org/s/hernanrobins_WhatIf_19aug26.pdf"
    - title: "Hyunseung Kang, Causal Inference: Identification Under Strong Ignorability, UW–Madison STAT 992 lecture note"
      url: "https://pages.cs.wisc.edu/~hyunseung/stat992_sp24/strong_ignorability.html"
---

## Statement

Assume the Axiom of Choice. Let $\mathcal A$ be a countable discrete set containing treatment versions $0$ and $1$. On a full-data probability space $(\Omega,\mathcal F,P)$, let $A$ take values in $\mathcal A$, let $L$ take values in a standard-Borel space $\mathcal L$ ([[def-standard-borel-space]]), let $Y$ be the observed real outcome, and let $(Y^b)_{b\in\mathcal A}$ be the potential outcomes of [[def-potential-outcomes-and-consistency]]. For each treatment value $a$ under consideration, assume $Y^a\in L^1(P)$, consistency $Y=Y^A$ almost surely, conditional exchangeability $\sigma(Y^b:b\in\mathcal A)\perp\!\!\!\perp\sigma(A)\mid\sigma(L)$, and positivity $P(A=a)>0$ and $E[\mathbf1_{\{A=a\}}\mid\sigma(L)]>0$ almost surely. These are assumptions on the full-data law; Choice is required for the stated conditional-expectation classes and regular conditional distributions.

Write $P_L(B)=P(L\in B)$ for the target-population law of $L$. For such an $a$, define the treatment-stratum probability $P_a(C)=P(C\cap\{A=a\})/P(A=a)$ for $C\in\mathcal F$. Under $P_a$, let $K_a(l,dy)$ be a regular conditional law of $Y$ given the standard-Borel random element $L$, and put $m_a(l)=\int y\,K_a(l,dy)$ wherever the absolute integral is finite, with value $0$ on the exceptional set. The suppliers [[def-conditional-law-given-a-random-element]], [[thm-existence-of-regular-conditional-distributions-for-standard-borel-targets]], [[lem-regular-conditional-kernels-factor-through-a-standard-borel-conditioning-variable]], and [[thm-conditional-integration-through-a-regular-conditional-law]] give this construction. Then $m_a$ is $P_L$-integrable and is uniquely determined $P_L$-almost everywhere by the observed-data law, and

$$E_P[Y^a]=\int_{\mathcal L}m_a(l)\,P_L(dl).$$

If $L$ is countably discrete, this is

$$E_P[Y^a]=\sum_{l:P(L=l)>0}E_P[Y\mid A=a,L=l]P(L=l).$$

In this sum, $E[Y\mid A=a,L=l]$ denotes $E[Y\mathbf1_{\{A=a,L=l\}}]/P(A=a,L=l)$, whose denominator is positive for each displayed atom.

For the binary contrast, both treatment levels must satisfy positivity. The CATE is then represented $P_L$-almost everywhere by $m_1-m_0$, and the ATE is $\int(m_1-m_0)\,dP_L$. In the model whose parameters are all full-data laws satisfying these assumptions and whose observation map sends a full-data law to its $(A,L,Y)$ marginal, each $E[Y^a]$ is identifiable in the sense of [[def-identifiability-of-an-estimand]]: it is constant over full-data laws with the same observed-data law.

## Facts & Assumptions

**Given:** Choice; a full-data probability law; countable discrete treatment versions; a standard-Borel covariate $L$; integrable potential outcomes for the treatment values considered; consistency; conditional exchangeability; and positivity.

[A1] The Axiom of Choice is assumed. It supplies the conditional-expectation classes and standard-Borel regular conditional distributions used below. [[def-axiom-of-choice]]

[F1] Potential outcomes are indexed by specified treatment versions, the observed outcome is $Y^A$, and consistency is $Y=Y^A$ almost surely. [[def-potential-outcomes-and-consistency]]

[F2] Conditional exchangeability means the sigma-algebra generated by the potential-outcome family is conditionally independent of the treatment sigma-algebra given $\sigma(L)$. [[def-conditional-exchangeability-of-potential-outcomes]]

[F3] For each treatment $a$ under consideration, $P(A=a)>0$ and $E[\mathbf1_{\{A=a\}}\mid\sigma(L)]>0$ almost surely under the target law. [[def-positivity-for-discrete-treatment]]

[F4] The ATE is $E[Y^1-Y^0]$, and the CATE is the conditional-expectation class $E[Y^1-Y^0\mid\sigma(L)]$. [[def-causal-average-treatment-effects]]

[F5] A conditional-expectation version is an integrable $\sigma(L)$-measurable function satisfying the defining event-integral identities; under Choice its unique almost-sure class is available. [[def-conditional-expectation-given-a-sigma-algebra]], [[def-conditional-expectation-as-an-ae-class]]

[F6] Conditional independence of an integrable real variable and a random element extends the bounded-product identity to any bounded measurable function of that random element. [[lem-conditional-independence-integrable-factorization]]

[F7] Under Choice, a real-valued random element has a regular conditional distribution given any sub-sigma-algebra. [[thm-existence-of-regular-conditional-distributions-for-standard-borel-targets]]

[F8] For standard-Borel $L$, a regular conditional distribution given $\sigma(L)$ factors through an everywhere probability kernel on the value space of $L$; this is the conditional law given $L$. [[lem-regular-conditional-kernels-factor-through-a-standard-borel-conditioning-variable]], [[def-conditional-law-given-a-random-element]]

[F9] Integrating the identity function against that conditional law, with zero fill where the absolute integral is infinite, gives a real conditional-expectation version under $P_a$. [[thm-conditional-integration-through-a-regular-conditional-law]]

[F10] Conditional-expectation versions with the same defining event integrals agree almost surely. [[lem-conditional-expectation-is-unique-almost-surely]]

[F11] A finite $\sigma(L)$-measurable factor can be taken out of conditional expectation when the products are integrable. [[thm-taking-out-what-is-known]]

[F12] Conditional expectation preserves ordinary expectation and is the tower of nested conditional expectations. [[thm-basic-algebra-and-order-properties-of-conditional-expectation]], [[thm-tower-property-of-conditional-expectation]]

[F13] The expectation of a measurable function of a random element is its integral against that random element's law. [[def-law-or-distribution-of-a-random-element]], [[thm-change-of-variables-for-expectation]]

[F14] An estimand is identifiable when it is constant on parameter values with the same observed sampling law. [[def-identifiability-of-an-estimand]]

## Proof

**Proof technique:** Construct each observed treatment-stratum law, transport its conditional mean to the target covariate law by exchangeability and positivity, and then apply the definition of identifiability.

1.1 Fix a treatment value $a$ satisfying the hypotheses, write $e_a=E[\mathbf1_{\{A=a\}}\mid\sigma(L)]$, and define $P_a(C)=P(C\cap\{A=a\})/P(A=a)$. For every Borel $B\subseteq\mathcal L$, the defining event-integral identity for $e_a$ gives $P_a(L\in B)=E_P[\mathbf1_{\{L\in B\}}e_a]/P(A=a)$. [A1, F3, F5, construct]

1.2 Under $P_a$, $Y$ is integrable because $Y=Y^a$ on $\{A=a\}$ by consistency and $E_{P_a}|Y|=E_P[\mathbf1_{\{A=a\}}|Y^a|]/P(A=a)\le E_P|Y^a|/P(A=a)$. By [A1, F7, F8], choose a conditional law $K_a(l,dy)$ of $Y$ given $L$ under $P_a$; [F9] makes its zero-filled integral $m_a(L)$ a real integrable version of $E_{P_a}[Y\mid\sigma(L)]$. [A1, F1, F7, F8, F9]

1.3 Put $v_a=E_P[Y^a\mid\sigma(L)]$. Conditional independence in [F2], applied to the coordinate $Y^a$ and the bounded indicator $\mathbf1_{\{A=a\}}$, together with [F6], gives $E_P[\mathbf1_{\{A=a\}}Y^a\mid\sigma(L)]=e_a v_a$ almost surely. [A1, F2, F3, F6]

2.1 The covariate laws $P_{a,L}$ and $P_L$ are equivalent. Indeed, $P_L(B)=0$ makes the numerator in step 1.1 zero. Conversely, if $P_L(B)>0$, positivity gives $P(L\in B,e_a>0)>0$; since $\{e_a>0\}=\bigcup_{n\ge1}\{e_a\ge1/n\}$ up to a null set, some $n$ has $P(L\in B,e_a\ge1/n)>0$, so the numerator is positive. [step 1.1, F3, algebra]

2.2 For every $B\in\mathcal B(\mathcal L)$, the defining event integrals of $m_a(L)$ under $P_a$, consistency [F1], step 1.3, and the take-out rule [F11] give $E_{P_a}[\mathbf1_{\{L\in B\}}m_a(L)]=E_{P_a}[\mathbf1_{\{L\in B\}}Y]=E_{P_a}[\mathbf1_{\{L\in B\}}Y^a]=E_{P_a}[\mathbf1_{\{L\in B\}}v_a]$. [F1, F9, F11, step 1.3]

3.1 By [F5], $v_a\in L^1(P)$. Since $P_a$ is the law conditional on $A=a$ and $P(A=a)>0$, $$E_{P_a}|v_a|=\frac{E_P[\mathbf1_{\{A=a\}}|v_a|]}{P(A=a)}\le\frac{E_P|v_a|}{P(A=a)}<\infty,$$ so $v_a\in L^1(P_a)$. Also $m_a(L)\in L^1(P_a)$ by [F9]. These are $\sigma(L)$-measurable versions under $P_a$ with the same event integrals for $Y$ by step 2.2. Uniqueness [F10] gives $m_a(L)=v_a$ $P_a$-almost surely. Step 2.1 transfers this equality to $P_L$-almost every covariate value, so the integral in the statement is finite and independent of the conditional-law version and its null-set filler. [F5, F9, F10, step 2.1, step 2.2]

4.1 By [F12], $E_P[v_a]=E_P[Y^a]$. Since $m_a(L)=v_a$ $P$-almost surely on the target covariate law by step 3.1, the change-of-variables identity [F13] yields $\int m_a(l)P_L(dl)=E_P[Y^a]$. [F12, F13, step 3.1]

5.1 If $L$ is countably discrete, positivity implies $P(A=a,L=l)>0$ for every atom $l$ with $P(L=l)>0$, so the conditional-mean definition in the statement and the version identity [F9] give $m_a(l)=E[Y\mid A=a,L=l]$ there. Splitting the integral in step 4.1 over the countable support proves the displayed sum; its absolute convergence follows from the integrability of $v_a$. For $a=0,1$, linearity of conditional expectation [F12] gives the CATE version $m_1(L)-m_0(L),$ and subtraction of the two mean identities gives the ATE formula. Equal observed-data laws give the same $P_L$ and the same law $Q_a$ of $(L,Y)$ conditional on $A=a$, since $Q_a(D)=P((L,Y)\in D,A=a)/P(A=a)$ for measurable $D\subseteq\mathcal L\times\mathbb R$. Under this common $Q_a$, the conditional means of $Y$ given $L$ have the same defining event integrals, so [F10] makes their measurable versions equal $P_{a,L}$-almost everywhere. Step 2.1 transfers that equality to $P_L$-almost everywhere. Hence [F14] identifies each $E[Y^a]$ and the ATE. [F3, F4, F9, F10, F12, F13, F14, step 2.1, step 4.1, algebra] ∎

## Remarks

This theorem is for discrete treatment values. For continuous $A$, conditional-law versions are uniquely determined only $P_A$-almost everywhere: any two regular conditional laws agree outside a single conditioning-law null set by [[lem-simultaneous-ae-uniqueness-of-regular-conditional-distributions]], and factoring through $A$ transfers that qualification to $P_A$. The theorem asserts no pointwise causal effect at a $P_A$-null value; a specified version and any continuity or smoothness assumptions need a separate proof. Conditional exchangeability is generally untestable from the observed law. If positivity fails on a target stratum, that stratum's counterfactual mean is unsupported by the observed treatment data; the theorem does not identify the full target by this formula.
