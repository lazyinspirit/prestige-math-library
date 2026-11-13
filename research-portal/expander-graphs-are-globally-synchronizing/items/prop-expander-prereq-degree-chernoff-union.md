---
id: prop-expander-prereq-degree-chernoff-union
kind: proposition
title: Chernoff bounds with the exact degree mean
domain: mathematics
status: published
origin: pipeline
deps:
  - prop-expander-prereq-degree-law-and-dependence
  - math:lem-chernoff-bound-for-independent-bernoulli-trials
  - math:thm-finite-union-bound
dependency_roles:
  prop-expander-prereq-degree-law-and-dependence: mathematical-premise
  math:lem-chernoff-bound-for-independent-bernoulli-trials: mathematical-premise
  math:thm-finite-union-bound: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
dependency_level: 1
---

## Statement

Let $n\ge2$ be an integer and $p\in[0,1]$. In $G(n,p)$, the simple graph on $[n]=\{1,\ldots,n\}$ whose possible edges occur independently with probability $p$, let $d(v)$ be the number of edges incident to $v$ and put $\mu=(n-1)p$. For $0\le\delta\le1$,
$$\mathbb P(\exists v:|d(v)-\mu|\ge\delta\mu)\le2n\exp(-\mu\delta^2/3).$$
No independence between different vertex degrees is required. If $1/n\le\varepsilon\le1$, then the estimate centered at $pn$ is
$$\mathbb P(\exists v:|d(v)-pn|\ge\varepsilon pn)\le2n\exp\left(-\frac{p(n\varepsilon-1)^2}{3(n-1)}\right).$$
In particular, for fixed $0<\varepsilon\le1$ and $p=\gamma\log n/n\in[0,1]$, if $\gamma\ge\gamma_0>3/\varepsilon^2$, the latter probability tends to zero uniformly over such $\gamma$ as $n\to\infty$. The same conclusion holds when $\gamma\to\infty$, subject to $p\le1$.

## Statement references

[[prop-expander-prereq-degree-law-and-dependence]]

[[math:lem-chernoff-bound-for-independent-bernoulli-trials]]

[[math:thm-finite-union-bound]]

## Facts & Assumptions

**Given:** The graph and parameters in the Statement.

**Goal:** Prove the exact-mean and translated simultaneous degree bounds and the stated logarithmic-density consequence.

[F1] Each $d(v)$ is the sum of the $n-1$ mutually independent Bernoulli$(p)$ indicators of the possible edges incident to $v$. ([[prop-expander-prereq-degree-law-and-dependence]])

[F2] For a finite sum of independent Bernoulli variables with mean $\mu$, the two-sided deviation probability at $\delta\mu$ is at most $2\exp(-\mu\delta^2/3)$ when $0\le\delta\le1$, including $\mu=0$. ([[math:lem-chernoff-bound-for-independent-bernoulli-trials]])

[F3] The probability of a finite union of events is at most the sum of their probabilities; independence of the events is unnecessary. ([[math:thm-finite-union-bound]])

## Proof

**Proof technique:** Apply the single-vertex tail bound and then the finite union bound; translate the center before selecting the deviation parameter.

1.1 For each vertex, [F1] gives a sum to which [F2] applies with mean $(n-1)p=\mu$. Thus its probability of deviation at least $\delta\mu$ is at most $2\exp(-\mu\delta^2/3)$. Applying [F3] to the $n$ vertex events proves the first displayed inequality, regardless of dependence among degrees. [F1, F2, F3]

2.1 Since $pn-\mu=p$, the triangle inequality gives $|d(v)-\mu|\ge |d(v)-pn|-p$. If $1/n\le\varepsilon\le1$, put $\delta=(n\varepsilon-1)/(n-1)$; then $0\le\delta\le1$ and $\delta\mu=\varepsilon pn-p$. Hence every event $|d(v)-pn|\ge\varepsilon pn$ is contained in $|d(v)-\mu|\ge\delta\mu$. The first bound therefore gives the second, including $p=0$. [step 1.1, algebra]

3.1 For fixed $0<\varepsilon\le1$, the restriction $1/n\le\varepsilon$ holds for all sufficiently large $n$. Substituting $p=\gamma\log n/n$ in the second bound yields $2n^{1-\gamma a_n}$, where $a_n=(n\varepsilon-1)^2/(3n(n-1))\to\varepsilon^2/3$. If $\gamma\ge\gamma_0>3/\varepsilon^2$, choose $c>1$ with $\gamma_0a_n\ge c$ for all sufficiently large $n$; the probability is then at most $2n^{1-c}$ uniformly in $\gamma$. A sequence with $\gamma\to\infty$ eventually exceeds such a fixed $\gamma_0$, so the same conclusion follows whenever the specified $p$ is a probability. [step 2.1, algebra] ∎
