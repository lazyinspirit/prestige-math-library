---
id: ex-empirical-laws-of-a-finite-valued-iid-sample
kind: example
title: Empirical laws of a finite valued iid sample
deps: ["thm-empirical-measures-of-iid-euclidean-samples-converge-weakly", "def-weak-convergence-of-borel-probability-measures", "thm-finite-and-countable-subadditivity-of-measures"]
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  references:
    - title: Durrett, §§2.4–2.5, pp. 76–87
      url: https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf
provenance:
  statement: ai-altered
  proof: ai-altered
status: draft
origin: pipeline
proof_strategy: direct
---

## Example

For IID samples with law $\mu=\sum_{j=1}^mp_j\delta_{a_j}$ on distinct points $a_1,\ldots,a_m\in\mathbb R^d$, where $p_j\ge0$ and $\sum_jp_j=1$, the empirical laws converge weakly almost surely. On outcomes whose samples all lie in this finite set, weak convergence is equivalent to convergence of all atom frequencies to $p_j$.

## Facts & Assumptions

[F1] [[thm-empirical-measures-of-iid-euclidean-samples-converge-weakly]]: For IID $\mathbb R^d$-valued samples $(X_i)$ with common law $\mu$ and finite $d\ge1$, the empirical probabilities $\widehat\mu_n=n^{-1}\sum_{i=1}^n\delta_{X_i}$ converge weakly to $\mu$ almost surely on one common event.

[F2] [[thm-finite-and-countable-subadditivity-of-measures]]: Let $\mu$ be a measure and let $(E_k)_{k\in\mathbb N}$ be measurable. Then

$$\mu\left(\bigcup_{k\in\mathbb N}E_k\right)\le\sum_{k=0}^{\infty}\mu(E_k).$$

For every $m\in\mathbb N$ one also has

$$\mu\left(\bigcup_{k<m}E_k\right)\le\sum_{k<m}\mu(E_k),$$

including $m=0$, where both sides are $0$.

## Verification

**Given:** The objects, hypotheses and definitions in the statement. Its conclusions are to be established below.

1.1 Apply F2 to the union of the sample-outside-support events. By F1, the empirical laws converge weakly almost surely. Also all samples lie in the finite set on a conull event, since each outside event has probability zero and there are countably many coordinates. [F1, F2]

1.2 On such an outcome put $q_{n,j}=n^{-1}\#\{i\le n:X_i=a_j\}$. If each q_{n,j}->$p_j$, then for bounded continuous f, $\int f\,d\widehat\mu_n=\sum_jq_{n,j}f(a_j)\to\sum_jp_jf(a_j)=\int f\,d\mu$, proving weak convergence. [given, algebra]

2.1 Conversely, for $m\ge2$ put $r_j=\frac12\min_{l\ne j}\|a_j-a_l\|>0$ and $f_j(x)=\max(0,1-\|x-a_j\|/r_j)$. This bounded continuous test is one at $a_j$ and zero at every other $a_l$. Its empirical integral is q_{n,j} and its $\mu$ integral is $p_j$, so weak convergence implies q_{n,j}->$p_j$. If $m=1$, both frequencies are identically one and the constant test suffices. [given, algebra] ∎
