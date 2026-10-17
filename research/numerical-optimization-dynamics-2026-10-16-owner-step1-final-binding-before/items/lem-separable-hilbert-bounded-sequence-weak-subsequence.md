---
id: lem-separable-hilbert-bounded-sequence-weak-subsequence
kind: lemma
title: A bounded sequence in a separable Hilbert space has a weakly convergent subsequence
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 0
deps:
  - def-countable-choice
  - def-hilbert-space
  - def-separable-space
  - thm-cauchy-schwarz-in-an-inner-product-space
  - thm-nested-interval-property
  - thm-riesz-representation-for-hilbert-space
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: Hannes Meinlschmidt, Optimization with Partial Differential Equations, FAU lecture notes
      url: "https://hannes.meinlschmidt.eu/lecture_notes/pde_opt.pdf"
      locator: "§2, printed pp. 5–7: weak sequential compactness used in the direct method."
---

## Statement

Assume Countable Choice. Let $H$ be a separable real Hilbert space and let $(x_n)_{n\ge1}$ be a sequence with $\|x_n\|_H\le C$ for some finite $C$. Then there are a strictly increasing sequence of indices $(n_k)$ and $x\in H$ such that $x_{n_k}\rightharpoonup x$ weakly in $H$.

## Facts & Assumptions
**Given:** Countable Choice, a real Hilbert space $H$, a countable dense sequence $(v_j)_{j\ge1}$ in $H$, and a sequence $(x_n)$ with $\|x_n\|_H\le C$.

[F1] Every nested sequence of nonempty closed bounded real intervals whose lengths tend to zero has a unique common point ([[thm-nested-interval-property]]).

[F2] Every bounded linear functional on a Hilbert space is represented by a unique vector under Countable Choice ([[thm-riesz-representation-for-hilbert-space]], [[def-countable-choice]]).

[F3] Cauchy–Schwarz gives $|\langle x_n,v\rangle_H|\le\|x_n\|_H\|v\|_H$ ([[thm-cauchy-schwarz-in-an-inner-product-space]]).

## Proof

1.1 For any bounded real sequence $(a_k)$ in $[-R,R]$, start with $I_0=[-R,R]$. At each stage split the current interval into its two closed halves and choose the left half if it contains infinitely many terms of the current sequence, and otherwise choose the right half. At least one half contains infinitely many terms. Choose the least index later than the preceding selected index whose term lies in the chosen half. The resulting nested intervals have lengths tending to zero, so [F1] gives a common point, and the selected subsequence converges to it. Every choice in this construction is the least natural index or the leftmost of two alternatives, so the extraction is determined by its input sequence. [F1, given, construct]

2.1 For each $j$, the scalar sequence $\langle x_n,v_j\rangle_H$ is bounded by $C\|v_j\|_H$ by [F3]. Apply the deterministic extraction in step 1.1 successively to these coordinate sequences, each time inside the previously obtained subsequence. This recursive rule produces nested infinite subsequences $N_1\supseteq N_2\supseteq\cdots$ on which the first, first two, and then first $j$ pairings converge, respectively. Let $n_k$ be the $k$th index of $N_k$. Nestedness makes $(n_k)$ strictly increasing, and for each fixed $j$ the sequence $\langle x_{n_k},v_j\rangle_H$ converges because its tail is a subsequence of $N_j$. [F3, step 1.1, given, construct]

3.1 For any $v\in H$, choose $v_j$ arbitrarily close to $v$. For indices $k,\ell$, [F3] gives $|\langle x_{n_k}-x_{n_\ell},v\rangle_H| \le |\langle x_{n_k}-x_{n_\ell},v_j\rangle_H|+2C\|v-v_j\|_H.$ The first term tends to zero as $k,\ell\to\infty$ for fixed $j$, and the second can be made arbitrarily small by density. Thus $\langle x_{n_k},v\rangle_H$ converges for every $v$. Its limit $L(v)$ is linear and satisfies $|L(v)|\le C\|v\|_H$, so $L$ is a bounded linear functional. By [F2] there is a unique $x\in H$ with $L(v)=\langle x,v\rangle_H$ for all $v$. Therefore $x_{n_k}\rightharpoonup x$. [F2, F3, step 2.1, given, algebra] ∎

## Remarks

The subsequence extraction itself uses a deterministic interval bisection and no choice function. Countable Choice is stated because the Riesz representation supplier requires it.
