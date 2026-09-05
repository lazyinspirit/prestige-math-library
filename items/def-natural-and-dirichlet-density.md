---
id: def-natural-and-dirichlet-density
kind: definition
title: "Natural and Dirichlet density"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: []
justified_by: []
sources:
  references:
    - title: "Kiran S. Kedlaya, Notes on Analytic Number Theory, Definitions 4.3 and 4.4"
      url: "https://kskedlaya.org/ant/chap-primes-in-ap.html"
verification:
  precheck: n/a
---

## Definition

Let $A\subseteq\mathbb N_{\ge1}$ and write
$A(x):=\#\{n\le x:n\in A\}$.

- If the limit exists, the **natural density** of $A$ is
  $$\lim_{x\to\infty}\frac{A(x)}{x}.$$
- If the limit exists, the **Dirichlet density** of $A$ is the number $\delta$
  for which
  $$\lim_{s\downarrow1,\ s>1}(s-1)\sum_{n\in A}n^{-s}=\delta,$$
  equivalently
  $$\sum_{n\in A}n^{-s}=\frac{\delta}{s-1}+o\!\left(\frac1{s-1}\right) \qquad(s\downarrow1,\ s>1).$$

If $P$ is a set of primes, its **relative natural density among the primes** is
the limit of $\pi_P(x)/\pi(x)$ when that limit exists, where
$\pi_P(x):=\#\{p\le x:p\in P\}$.

Its **relative Dirichlet density among the primes** is the number $\delta$ for
which

$$\lim_{s\downarrow1,\ s>1}\frac{\sum_{p\in P}p^{-s}}{\sum_p p^{-s}}=\delta.$$

Since $\sum_p p^{-s}=\log(1/(s-1))+O(1)$ as $s\downarrow1$, this is
equivalently

$$\sum_{p\in P}p^{-s}=\delta\log\frac1{s-1}+o\!\left(\log\frac1{s-1}\right)\qquad(s\downarrow1,\ s>1).$$
