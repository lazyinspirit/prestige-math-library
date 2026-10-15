---
id: thm-indirect-inference-target-exists-with-lexicographic-tie-break
kind: theorem
title: "The compact binding target exists and has a unique lexicographic tie-break"
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 1
deps:
  - def-binding-function-and-indirect-inference-target
  - thm-extreme-value-metric
  - lem-closed-subset-of-a-compact-space-is-compact
  - def-metric-compactness
  - def-metric-continuity
  - def-metric-space
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Christian Gouriéroux, Alain Monfort, and Eric Renault, Indirect Inference, Journal of Applied Econometrics 8, Supplement, S85–S118 (1993)"
      url: "https://www.stat.cmu.edu/~cshalizi/462/readings/Indirect%20Inference%20%28Gourieroux%2C%20Monfort%20and%20Renault%29.pdf"
    - title: "Thomas J. Sargent and John Stachurski, Intermediate Quantitative Economics with Python, Chapter 38: Which Moments to Match?"
      url: "https://python.quantecon.org/gallant_tauchen.html"
---

## Statement

Let $\Theta\subseteq\mathbb R^p$ be the nonempty compact parameter set of [[def-binding-function-and-indirect-inference-target]], and fix an admissible $s$ for which its objective $q_s:\Theta\to\mathbb R$ is continuous. Then
$$
M_s:=\operatorname*{arg\,min}_{\theta\in\Theta}q_s(\theta)
$$
is a nonempty compact set and has a unique lexicographically least element. Thus the target selector specified in [[def-binding-function-and-indirect-inference-target]] exists.

## Facts & Assumptions

**Given:** A nonempty compact metric space $\Theta$ with its Euclidean metric, and a continuous real-valued objective $q_s$.

[F1] The binding-target definition specifies a nonempty compact $\Theta\subseteq\mathbb R^p$ with its Euclidean subspace metric, continuity of $q_s$, and lexicographic coordinate tie-breaking. [[def-binding-function-and-indirect-inference-target]]

[F2] A continuous real-valued function on a nonempty compact metric space attains its minimum. [[thm-extreme-value-metric]]

[F3] A closed subset of a compact metric space is compact. [[lem-closed-subset-of-a-compact-space-is-compact]]

[F4] Continuity at $\theta$ means that for every $\varepsilon>0$ there is $\delta>0$ such that $d(\eta,\theta)<\delta$ implies $|q_s(\eta)-q_s(\theta)|<\varepsilon$. [[def-metric-continuity]]

[F5] The compactness hypothesis is open-cover compactness in the induced metric; the Euclidean distance is a metric. [[def-metric-compactness]] [[def-metric-space]]

## Proof

**Proof technique:** direct.

1.1 By [F2], $q_s$ attains a minimum $c$ on $\Theta$. Hence $M_s=\{\theta\in\Theta:q_s(\theta)=c\}$ is nonempty. [F1, F2, given]

2.1 The set $M_s$ is closed in $\Theta$. Indeed, if $\theta\notin M_s$, then $q_s(\theta)>c$; take $\varepsilon=(q_s(\theta)-c)/2>0$. By [F4], some $\delta>0$ makes $d(\eta,\theta)<\delta$ imply $|q_s(\eta)-q_s(\theta)|<\varepsilon$, and therefore $q_s(\eta)>c$. This ball misses $M_s$, so every point of its complement has a neighborhood in that complement. [F1, F4, step 1.1, algebra]

3.1 By [F3], $M_s$ is compact. [F1, F3, step 2.1]

4.1 Set $M_0:=M_s$. For $k=1,\ldots,p$, suppose $M_{k-1}$ is nonempty compact. The coordinate map $\pi_k(x)=x_k$ is continuous because $|\pi_k(x)-\pi_k(y)|\le\|x-y\|_2$. By [F2], it attains a minimum $a_k$ on $M_{k-1}$. Define $M_k:=\{x\in M_{k-1}:x_k=a_k\}$; this set is nonempty. It is closed in $M_{k-1}$: for $x_k\ne a_k$, a ball of radius $|x_k-a_k|/2$ around $x$ misses $M_k$ by the same coordinate inequality. Hence [F3] makes $M_k$ compact. Finite induction constructs nonempty compact $M_1,\ldots,M_p$. [F2, F3, F5, step 3.1, given, construct, induction]

5.1 The nonempty set $M_p$ contains a vector whose $k$th coordinate is $a_k$ for each $k$, so it contains at most one vector and is a singleton. For any $x\in M_s$, take the first coordinate $k$ at which $x_k\ne a_k$, if one exists. Then $x\in M_{k-1}$ and the definition of $a_k$ gives $x_k>a_k$. Thus the unique element of $M_p$ is lexicographically no larger than every member of $M_s$, and is the unique lexicographically least minimizer. [F1, step 4.1, algebra] ∎
