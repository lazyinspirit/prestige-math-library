---
id: ex-finite-permutation-orbit-with-ties-and-stabilizers
kind: example
title: "A permutation orbit with tied ranks and nontrivial stabilizers"
status: draft
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
dependency_level: 3
deps:
  - def-finite-group-randomization-test
  - def-orbit-rank-p-value
  - thm-finite-group-randomization-validity
  - def-finite-probability-space-and-event
  - lem-finite-probability-basic-laws
  - def-conditional-probability
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-14
sources:
  references:
    - title: "Peter B. Stark, Statistics 240 Lecture Notes, Part 8: Resampling Methods, §1.3, PDF pp. 10–11"
      url: "https://www.stat.berkeley.edu/~stark/Teach/S240/Notes/ch8.pdf"
    - title: "Jesse Hemerik and Jelle Goeman, Exact testing with random permutations, Sections 2–3"
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC6405018/"
---

## Example

Let $G=S_3$ permute the coordinates of $\Omega=\{e_1,e_2,e_3\}\subset\{0,1\}^3$, give the three points equal probability, take $T(x)=x_1$, and use an independent $U\sim\operatorname{Unif}(0,1)$. Each point has a stabilizer of size two. The group-average inclusive ranks are $p_0(e_1)=1/3$ and $p_0(e_2)=p_0(e_3)=1$. The randomized values are $p_U(e_1)=U/3$ and $p_U(e_2)=p_U(e_3)=1/3+2U/3$, illustrating how tied ranks fill adjacent intervals even when each orbit point has multiple group preimages.

## Facts & Assumptions

**Given:** The uniform finite sample space, coordinate-permutation action, statistic, and independent $U\sim\operatorname{Unif}(0,1)$.

[F1] A finite-group randomization setup requires an invariant null law and defines the orbit. [[def-finite-group-randomization-test]]

[F2] Orbit ranks count transformed group elements with multiplicity. [[def-orbit-rank-p-value]]

[F3] Under an invariant null, the inclusive orbit rank is superuniform and the randomized rank is uniform on each positive-probability orbit. [[thm-finite-group-randomization-validity]]

[F4] Conditional probability on a positive-probability finite event is the ratio of event probabilities. [[def-conditional-probability]]

## Verification

1.1 The group $S_3$ permutes the three one-hot vectors transitively. Each vector has weight $1/3$, so every permutation preserves the law and the null is invariant. The permutations fixing a given coordinate position are the identity and the transposition of the other two positions; hence each orbit point is produced by exactly two of the six group elements. [F1, F4, given, algebra]

2.1 At $e_1$, $T(e_1)=1$; two transformed values equal $1$ and four equal $0$. Thus $p_0(e_1)=2/6=1/3$ and $p_U(e_1)=2U/6=U/3$. At $e_2$ or $e_3$, the observed statistic is $0$; two transformed values are strictly greater and four tie, so $p_0=6/6=1$ and $p_U=(2+4U)/6=1/3+2U/3$. [F2, step 1.1, given, algebra]

3.1 Under the uniform null, $e_1$ occurs with probability $1/3$, and $e_2,e_3$ together with probability $2/3$. Conditional on the first case, $p_U$ is uniform on $[0,1/3]$; conditional on the second, it is uniform on $[1/3,1]$. For $0\le u\le1/3$, $P(p_U\le u)=(1/3)(3u)=u$. For $1/3\le u\le1$, $P(p_U\le u)=1/3+(2/3)((u-1/3)/(2/3))=u$. Hence $p_U$ is uniform on $[0,1]$. The inclusive rank is $1/3$ with probability $1/3$ and $1$ with probability $2/3$, so $P(p_0\le u)$ is $0$ for $u<1/3$, $1/3$ for $1/3\le u<1$, and $1$ for $u=1$; thus it is superuniform. These are the single-orbit conclusions of [F3]. [F3, step 2.1, given, algebra] ∎
