---
id: lem-it-finite-kl-agrees-with-measurable-kl
kind: lemma
title: "Finite KL divergence agrees with measurable-space KL"
status: published
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 0
deps: [def-qa-35-finite-probability-entropy-and-stochastic-matrices, def-finite-probability-space-and-event, thm-finite-probability-spaces-are-exactly-finite-full-power-set-probability-spaces, cor-expectation-agrees-with-the-finite-weighted-sum, def-absolutely-continuous-with-respect-to-a-positive-measure, def-radon-nikodym-derivative, def-kullback-leibler-divergence, def-axiom-of-choice]
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: "Assumes AC only to invoke the published general measurable KL definition; the finite density and sum calculation are explicit and choice-free."
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
sources:
  references:
    - title: "Robert M. Gray, Entropy and Information Theory, corrected first edition"
      url: https://ee.stanford.edu/~gray/it.pdf
      locator: "Chapter 2, §2.3, printed pp. 21–23; Chapter 5, §5.2, printed pp. 83–89; finite and RN forms of divergence."
    - title: "Yury Polyanskiy and Yihong Wu, Information Theory: From Coding to Learning, author prepublication"
      url: https://people.lids.mit.edu/yp/homepage/data/itbook-export.pdf
      locator: "Chapter 2, §2.1, printed pp. 21–22; discrete support convention and RN definition."
---

## Statement

Assume AC only for the interface to the published general definition [[def-kullback-leibler-divergence]]. Let $p,q$ be probability vectors on a finite set $S$, and let $P(A)=\sum_{i\in A}p_i$, $Q(A)=\sum_{i\in A}q_i$ on $\mathcal P(S)$. Then the measurable-space divergence $D(P\|Q)$ equals the finite KL sum $\sum_{i:p_i>0}p_i\ln(p_i/q_i)$, with value $+\infty$ exactly when some $p_i>0=q_i$.

## Facts & Assumptions

**Given:** AC, a finite set $S$, and probability vectors $p,q$ on $S$.

[A1] [[def-axiom-of-choice]]: every family of nonempty sets has a choice function. Here AC is assumed only when invoking the current published measurable KL definition; no selection is used to construct the finite density below.

[F1] [[def-qa-35-finite-probability-entropy-and-stochastic-matrices]]: a finite KL sum uses $0\ln0=0$ and is $+\infty$ if $p_i>0=q_i$ for some coordinate.

[F2] [[thm-finite-probability-spaces-are-exactly-finite-full-power-set-probability-spaces]]: on a finite set, nonnegative weights summing to one define a probability measure on the full power set by $P(A)=\sum_{i\in A}p_i$.

[F3] [[def-absolutely-continuous-with-respect-to-a-positive-measure]]: $P\ll Q$ means every measurable $Q$-null set is $P$-null.

[F4] [[def-radon-nikodym-derivative]]: for $P\ll Q$, a Radon–Nikodym derivative is a measurable function class satisfying $P(A)=\int_A r\,dQ$ for every measurable $A$.

[F5] [[cor-expectation-agrees-with-the-finite-weighted-sum]]: on a finite probability space, the expectation of a real function is the sum of its values weighted by the outcome probabilities.

[F6] [[def-kullback-leibler-divergence]]: if $P\not\ll Q$, then $D(P\|Q)=+\infty$.

[F7] [[def-kullback-leibler-divergence]]: in the absolutely continuous case, use an RN density $r=dP/dQ$, set $\ell=0$ on $\{r=0\}$ and $\ell=\ln r$ on $\{r>0\}$.

[F8] [[def-kullback-leibler-divergence]]: the measurable KL is $D(P\|Q)=\int\ell\,dP$ in the absolutely continuous case.

[F9] [[def-finite-probability-space-and-event]]: a finite probability space has a finite outcome set with nonnegative weights summing to one, and every subset is an event.

## Proof

1.1 By [F9], the finite vectors define probability spaces on $(S,\mathcal P(S))$, with every singleton measurable; [F2] gives their event weights. If $p_i>0=q_i$, then $P(\{i\})>0=Q(\{i\})$, so [F3] gives $P\not\ll Q$. The general definition [F6] and finite convention [F1] both give $+\infty$. [given, F1, F2, F3, F6, F9]

1.2 Suppose $p_i=0$ whenever $q_i=0$. If $Q(A)=0$, the finite sum $\sum_{i\in A}q_i=0$ and nonnegativity force $q_i=0$ for every $i\in A$; hence $p_i=0$ for those $i$ and $P(A)=0$. Thus $P\ll Q$ by [F3]. Define $r_i=p_i/q_i$ when $q_i>0$ and $r_i=0$ when $q_i=0$. Since every subset of $S$ is measurable, this finite function is measurable. For every $A\subseteq S$, [F5] gives $\int_A r\,dQ=\sum_{i\in A}r_iq_i=\sum_{i\in A}p_i=P(A)$, so [F4] identifies $r$ as a Radon–Nikodym derivative. It is explicitly constructed; no choice is used in this step. [F2, F3, F4, F5, given, algebra]

2.1 Under the AC interface assumption [A1], substitute the density from step 1.2 into [F8], using the logarithm convention [F7]. Applying [F5] to $\ell(i)=\ln r_i$ for $r_i>0$ and $\ell(i)=0$ for $r_i=0$ gives $D(P\|Q)=\sum_{i:p_i>0}p_i\ln r_i=\sum_{i:p_i>0}p_i\ln(p_i/q_i)$; coordinates with $p_i=0$ contribute $0$ by [F1]. [A1, F1, F5, F7, F8, step 1.2, algebra]

3.1 Step 1.1 handles support failure, while step 2.1 proves equality with the finite sum when $p$ is supported by $q$. These cases exhaust the finite vectors in the Statement. [given, step 1.1, step 2.1] ∎
