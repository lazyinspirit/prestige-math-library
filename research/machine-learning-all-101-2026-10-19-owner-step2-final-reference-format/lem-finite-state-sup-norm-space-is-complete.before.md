---
id: lem-finite-state-sup-norm-space-is-complete
kind: lemma
title: "Completeness of the sup metric on finite-state value functions"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 0
deps:
  - def-countable
  - def-metric-space
  - def-cauchy-in-metric
  - def-metric-convergence
  - def-real-limit
  - def-complete-metric-space
  - lem-metrics-on-rn
  - lem-finite-sum-laws
  - lem-limit-unique
  - thm-cauchy-criterion-via-lub
  - thm-induction-principle
  - thm-nat-linear-order
  - thm-well-ordering-principle
justified_by: []
aliases: []
forward_refs: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Sergey Mozgovoy, Lecture Notes on Metric Spaces and Functional Analysis"
      url: "https://www.maths.tcd.ie/~mozgovoy/data/notes_MS_2014.pdf"
      locator: "Example 1.65 and Theorem 3.19, PDF pp. 12 and 33–35; the finite-state proof below is given directly."
---

## Statement

For any finite set $S$, let $B(S)=\mathbb R^S$, the set of real-valued functions on $S$. Define

$$ d_\infty(U,V)=\begin{cases}0,&S=\emptyset,\\ \max_{s\in S}|U(s)-V(s)|,&S\ne\emptyset.\end{cases} $$

Then $d_\infty$ is a metric on $B(S)$ and $(B(S),d_\infty)$ is complete.

## Statement references

[Mozgovoy, *Lecture Notes on Metric Spaces and Functional Analysis*](https://www.maths.tcd.ie/~mozgovoy/data/notes_MS_2014.pdf).

[Sutton and Barto, *Reinforcement Learning: An Introduction*](https://web.stanford.edu/class/psych209/Readings/SuttonBartoIPRLBook2ndEd.pdf).

## Facts & Assumptions

**Given:** A finite set $S$ and the function space $B(S)=\mathbb R^S$.

[F1] [[def-countable]]: finiteness means there is a natural number $n$ and a bijection from $n=\{0,\ldots,n-1\}$ onto $S$; if $S$ is nonempty then $n\ge1$.

[F2] [[lem-metrics-on-rn]]: for $n\ge1$, $d_\infty(x,y)=\max_{k<n}|x_k-y_k|$ and $d_2(x,y)=(\sum_{k<n}(x_k-y_k)^2)^{1/2}$ are metrics on $\mathbb R^n$.

[F3] [[thm-cauchy-criterion-via-lub]]: every Cauchy sequence of reals converges to a real.

[F4] [[def-metric-space]] and [[def-complete-metric-space]]: a metric satisfies separation, symmetry, and the triangle inequality; completeness means every Cauchy sequence converges in the same metric space.

[F5] [[def-cauchy-in-metric]], [[def-metric-convergence]], and [[def-real-limit]]: metric Cauchy and convergence, as well as real Cauchy and convergence, are tested with rational $\varepsilon>0$.

[F6] [[lem-limit-unique]]: a convergent real sequence has a unique limit.

[F7] [[thm-well-ordering-principle]]: every nonempty set of natural numbers has a least element.

[F8] [[thm-induction-principle]] and [[thm-nat-linear-order]]: induction holds on $\mathbb N$, and its order is total.

## Proof

1.1 If $S=\emptyset$, then $B(S)$ has exactly one element, the empty function. Its only distance is $0$; nonnegativity, symmetry, separation, and the triangle inequality all hold on this singleton, and every sequence in it is constant and convergent. [given, F4]

1.2 Suppose $S\ne\emptyset$. By [F1], fix $n\ge1$ and a bijection $e:n\to S$. Pulling functions back along $e$ identifies $B(S)$ with $\mathbb R^n$ and carries $d_\infty$ exactly to the max metric of [F2]; hence it is a metric. [given, F1, F2]

2.1 Let $(U_m)$ be Cauchy in $d_\infty$ on $B(S)$. For each $j<n$, define the real sequence $x^{(j)}_m:=U_m(e(j))$. Given rational $\varepsilon>0$, the metric Cauchy condition supplies $K$ such that $d_\infty(U_m,U_\ell)<\varepsilon$ for all $m,\ell\ge K$. Since the pulled-back $d_\infty$ is the maximum of the coordinate differences, $|x^{(j)}_m-x^{(j)}_\ell|<\varepsilon$ for every $j<n$ and $m,\ell\ge K$. Thus each coordinate sequence is Cauchy in $\mathbb R$. [step 1.2, F2, F5]

3.1 By [F3], each coordinate sequence converges. Denote its unique limit by $y_j\in\mathbb R$, using [F6]. [step 2.1, F3, F6]

4.1 Define $U:S\to\mathbb R$ by $U(e(j)):=y_j$ for $j<n$. This is well defined because $e$ is a bijection, and it uses no choice because every $y_j$ is uniquely determined. [step 1.2, step 3.1, F1, F6]

4.2 Fix rational $\varepsilon>0$. For each $j<n$, convergence to $y_j$ gives a nonempty set of natural thresholds $K$ such that $|x^{(j)}_m-y_j|<\varepsilon$ for all $m\ge K$. Let $K_j$ be its least member, using [F7]. [step 3.1, F5, F7]

5.1 The finite nonempty list $K_0,\ldots,K_{n-1}$ has a maximum $K$: start with $K_0$ and, at each successor, retain the larger of the current maximum and the next threshold, which exists by the total order on $\mathbb N$; induction proves the resulting value dominates every entry. Thus $K\ge K_j$ for all $j<n$. [step 1.2, step 4.2, F8]

6.1 For every $m\ge K$, step 5.1 implies $|U_m(e(j))-U(e(j))|<\varepsilon$ for every $j<n$. Their finite maximum is one of these coordinate differences, so $d_\infty(U_m,U)<\varepsilon$. Since this holds for every rational $\varepsilon>0$, $(U_m)$ converges to $U$ in $d_\infty$. Every Cauchy sequence therefore converges in $B(S)$, and together with the metric property from steps 1.1–1.2 this proves completeness. [step 1.2, step 4.1, step 5.1, F2, F4, F5] ∎

## Remarks

- **The proof is a finite-coordinate Cauchy argument.** The maximum norm makes each coordinate sequence Cauchy; completeness of the real line supplies its limit; one maximum of finitely many thresholds then gives convergence in the maximum norm.
- **The same argument proves completeness for the $d_1$ metric on $\mathbb R^n$.** Each coordinate difference is at most $d_1$. Given rational $\varepsilon>0$, choose for every coordinate a threshold at tolerance $\varepsilon/(2n)$, which is again a positive rational; after taking their finite maximum, monotonicity of finite sums gives $d_1(x^{(m)},y)\le n\varepsilon/(2n)=\varepsilon/2<\varepsilon$. The $d_\infty$ case is proved above. No later result on this page uses the $d_1$ observation.
- **No choice is spent.** The limit point is assembled coordinatewise from unique limits, each threshold is the least one that works, and a common threshold is obtained by taking the maximum of finitely many indices. This matters because completeness proofs elsewhere on this page do spend $\mathrm{AC}_\omega$, and the contrast is worth keeping visible.
- **The real completeness input is localised.** The Cauchy criterion in $\mathbb R$ is the only completeness theorem used. Its proof obtains real completeness from the least-upper-bound property through Bolzano–Weierstrass; the finite-coordinate argument adds no other completeness assumption.

## Remarks references

[[lem-metrics-on-rn|The $d_1$ and $d_\infty$ metrics]].

[[lem-finite-sum-laws|Monotonicity and constant-summand laws for finite sums]].

