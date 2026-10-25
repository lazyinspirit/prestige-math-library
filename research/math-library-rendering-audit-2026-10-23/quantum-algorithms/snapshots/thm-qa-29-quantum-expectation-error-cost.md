---
id: thm-qa-29-quantum-expectation-error-cost
kind: theorem
title: "Quantum bounded-expectation guarantee and query cost"
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 24
deps:
  - alg-qa-29-quantum-expectation-estimation
  - def-qa-29-coherent-sampler
  - lem-qa-29-coherent-sampler-outcome-law
  - def-qa-29-expectation-estimation-task
  - thm-qa-13-amplitude-estimation-guarantee
  - thm-qa-13-amplitude-estimation-query-complexity
  - alg-qa-13-phase-estimation-amplitude-estimation
  - alg-qa-13-median-confidence-estimation
  - thm-qa-13-median-confidence-guarantee
  - thm-qa-13-median-confidence-query-cost
  - lem-chernoff-bound-for-independent-bernoulli-trials
  - lem-qa-13-pi-rational-bounds
  - def-natural-logarithm
  - thm-logarithm-derivative-and-integral
  - thm-natural-logarithm-laws
  - def-qc-controlled-unitary-access
  - def-qc-inverse-unitary-access
  - def-qc-dirac-notation-conversion
  - def-qc-circuit-cost-model
  - def-qa-quantum-query-algorithm
justified_by: []
proof_strategy: direct
axiom_use: "No choice axiom is used; all sample laws and phase registers are finite."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Ashley Montanaro, Quantum speedup of Monte Carlo methods, Theorem 3"
      url: "https://arxiv.org/pdf/1504.06987v3"
    - title: "Gilles Brassard, Peter Høyer, Michele Mosca, and Alain Tapp, Quantum Amplitude Amplification and Estimation, Theorem 12"
      url: "https://arxiv.org/pdf/quant-ph/0005055"
    - title: "Andrew M. Childs, Lecture Notes on Quantum Algorithms, Section 19.3"
      url: "https://www.cs.umd.edu/~amchilds/qa/qa.pdf"
verification:
  precheck: n/a
---

## Statement

Let $g:X\to[a,b]$ be exactly encoded with $a\le b$, let $V$ be the coherent sampler of [[def-qa-29-coherent-sampler]], and let $\mu=\sum_xp_xg(x)$. If $a=b$, the algorithm [[alg-qa-29-quantum-expectation-estimation]] returns $a=\mu$ exactly. If $a<b$, then for rational $0<\varepsilon\le b-a$ and $0<\delta<1$ it returns $\widetilde\mu$ with $|\widetilde\mu-\mu|\le\varepsilon$ with probability at least $1-\delta$. Writing $q=(\mu-a)/(b-a)$ and $M$ for its QA13 phase-register size, the median output also obeys
$$|\widetilde\mu-\mu|\le(b-a)\left(\frac{2\pi\sqrt{q(1-q)}}{M}+\frac{\pi^2}{M^2}\right)$$
with probability at least $1-\delta$ in either declared QA13 access mode. For $a<b$, in repeated controlled-$Q$ access it uses exactly $r(M-1)$ controlled-Grover calls, where $M$ and $r$ are the current QA13 median-interface parameters. In this mode its controlled-sampler/reflection query count is $O\bigl((b-a)\varepsilon^{-1}(1+\ln(1/\delta))\bigr)$ for all $0<\delta<1$, and $O\bigl((b-a)\varepsilon^{-1}\ln(1/\delta)\bigr)$ when $0<\delta\le1/2$. If $a=b$, the algorithm returns $a$ exactly with no quantum query.

For $a<b$, in supplied controlled-power access it instead uses exactly $rm$ controlled-power queries, where $M=2^m$; sum their separately declared costs over all $r$ runs. No $M-1$ constituent-call expansion is inferred for a supplied power.

The query bound is an oracle statement. Every controlled or inverse sampler call, good-state reflection, initial-state reflection, rotation, arithmetic operation, state preparation, and classical order-statistic computation retains its separately supplied cost.

## Facts & Assumptions

**Given:** The finite coherent sampler, exact finite value encoding, the bounded interval $[a,b]$, the parameters $\varepsilon,\delta$ in the Statement, and either declared QA13 access mode. The controlled-sampler/reflection bound assumes repeated controlled-$Q$ access.

[F1] [[def-qa-29-coherent-sampler]] supplies $V|0\rangle=\sum_x\sqrt{p_x}|x\rangle|g(x)\rangle|w_x\rangle$ with unit work vectors; [[lem-qa-29-coherent-sampler-outcome-law]] proves sample outcome probability $p_x$.

[F2] [[alg-qa-29-quantum-expectation-estimation]] computes $q(x)=(g(x)-a)/(b-a)$, rotates a flag with good probability $q(x)$, runs the QA13 median estimator, and returns $a+(b-a)\widetilde q$.

[F3] [[thm-qa-13-amplitude-estimation-guarantee]]: for a single QFT estimate and $M\ge4$, $|\widetilde q-q|\le2\pi\sqrt{q(1-q)}/M+\pi^2/M^2$ with probability at least $8/\pi^2$.

[F4] [[alg-qa-13-median-confidence-estimation]] chooses the least power of two $M\ge88/(7\eta)$ for target $\eta$ and the least positive odd $r$ satisfying $2^r\ge(2/\delta)^8$, then returns the median of $r$ fresh runs.

[F5] [[thm-qa-13-median-confidence-guarantee]] states that this median has additive error at most $\eta$ with probability at least $1-\delta$.

[F6] In repeated controlled-$Q$ access, [[thm-qa-13-median-confidence-query-cost]] gives exactly $r(M-1)$ controlled-$Q$ calls and its stated logarithmic query bounds. The median threshold also gives $M<176/(7\eta)$.

[F7] [[lem-chernoff-bound-for-independent-bernoulli-trials]] gives $\Pr(|S-\mathbb ES|\ge u)\le2e^{-2u^2/r}$ for a sum of $r$ independent Bernoulli indicators.

[F8] [[lem-qa-13-pi-rational-bounds]] gives $\pi<22/7$ and $8/\pi^2>98/121$.

[F9] [[def-natural-logarithm]] defines the natural logarithm, and [[thm-logarithm-derivative-and-integral]] gives $\ln2=\int_1^2dt/t$, hence $0<\ln2<1$.

[F10] [[def-qc-controlled-unitary-access]] and [[def-qc-inverse-unitary-access]] keep controlled and inverse calls explicit; [[def-qc-circuit-cost-model]] separates oracle, gate, width, precision, and classical bit costs. [[def-qa-quantum-query-algorithm]] specifies fresh independent executions.

[F11] [[thm-natural-logarithm-laws]] gives strict increase, $\ln(xy)=\ln x+\ln y$ and $\ln(1/x)=-\ln x$ for positive inputs. Iterating the product identity gives $\ln(x^n)=n\ln x$ for a positive integer $n$. [[def-natural-logarithm]] gives $\ln(\exp u)=u$.

[F12] [[thm-qa-13-amplitude-estimation-query-complexity]] gives exactly $m$ supplied controlled-power queries per QFT run at $M=2^m$, with their separately declared costs.

## Proof
1.1 Since $q(x)=(g(x)-a)/(b-a)$, the interval promise gives $q(x)\in[0,1]$. By [F1]–[F2], the good-flag probability after the controlled rotation is $\sum_xp_xq(x)=\bigl(\sum_xp_xg(x)-a\sum_xp_x\bigr)/(b-a)=(\mu-a)/(b-a)=q$. [given, F1, F2, algebra]

1.2 For one QAE run, [F3] gives the stated probability-error radius $E=2\pi\sqrt{q(1-q)}/M+\pi^2/M^2$ with success at least $8/\pi^2$. Since fresh runs in [F4] are independent, if the median is outside $[q-E,q+E]$, at least $(r+1)/2$ of their failure indicators are one. [given, F3, F4]

1.3 Suppose $a<b$. In repeated controlled-$Q$ access, [F4] and [F6] give exactly $r(M-1)$ controlled-Grover calls, $M<176/(7\eta)$, and the stated logarithmic query bounds. Substitute $\eta=\varepsilon/(b-a)$. In supplied controlled-power access, [F4] and [F12] give $r$ runs of $m$ power queries, hence exactly $rm$ such queries with their declared costs summed. Neither access choice changes the ideal QFT output law in [F3]. The separate input-access costs in [F10] are not converted into gates without the supplied implementations. [given, F3, F4, F6, F10, F12, algebra]

2.1 Set $p_0=98/121$. By [F8], each failure indicator has mean at most $1-p_0$. If $S$ is their sum, the median-failure event entails $S-\mathbb ES\ge r(p_0-1/2)$. Applying [F7] to this containing event bounds its probability by $2e^{-c r}$, where $c=2(75/242)^2=5625/29282$ and $8c>1$. [given, F7, F8, step 1.2, algebra]

3.1 Put $L=\ln(2/\delta)>0$. Taking logarithms of the positive threshold $2^r\ge(2/\delta)^8$ in [F4] and applying the product law repeatedly as in [F11] gives $r\ln2\ge8L$. Because $0<\ln2<1$ by [F9], $r>8L$, and $8c>1$ gives $cr>L$. By [F11], $\ln(\delta/2)=-L$ and $\ln(e^{-cr})=-cr<-L$, so strict increase implies $2e^{-cr}<\delta$. Therefore the median error radius is at most $E$ with probability at least $1-\delta$. The same event implies error at most $\eta$ whenever $M\ge88/(7\eta)$ and $0<\eta\le1$, because $\sqrt{q(1-q)}\le1/2$, $\pi/M\le\eta/4$, and $\pi^2/M^2\le\eta^2/16\le\eta/16$. [given, F4, F9, F11, step 2.1, algebra]

4.1 For the algorithm choose $\eta=\varepsilon/(b-a)\le1$. By [F2], $|\widetilde\mu-\mu|=(b-a)|\widetilde q-q|$. The median guarantee [F5] gives the requested additive error; step 3.1 supplies the stronger radius, and multiplication by $b-a$ gives the Statement. [given, F2, F5, step 3.1, algebra]

5.1 If $a=b$, the value is constant $g(x)=a$ for every $x$, so $\mu=a$ by the probability normalization and the exact-return branch has zero error and zero quantum calls. [given, F1, algebra] ∎