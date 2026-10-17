---
id: cex-qsm-local-empty-exact-band
kind: counterexample
title: A centered exact band can be empty
status: draft
origin: pipeline
pipeline_run: physics-remaining-80-2026-10-17
domain: mathematics
library: physics
dependency_level: 2
deps:
  - def-qsm-local-additive-spectral-ensembles
dependency_roles:
  def-qsm-local-additive-spectral-ensembles: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: David Tong, Statistical Physics, §§1.2–1.3
      url: https://davidtong.org/pdfs/teaching/statistical-physics/statphys.pdf
    - title: Daniel Arovas, Lecture Notes on Thermodynamics and Statistical Mechanics, §§4.2–4.3
      url: https://courses.physics.ucsd.edu/2025/Spring/physics210a/LECTURES/STATMECH.pdf
---

## Statement

There are two-level additive data and a canonical mean for which every
zero-width band centered at that mean is empty. Consequently a normalized
uniform band density is not defined for that choice.

## Facts & Assumptions

**Given:** The finite additive ensemble convention in
[[def-qsm-local-additive-spectral-ensembles]].

[F1] [[def-qsm-local-additive-spectral-ensembles]]: the second canonical
probability is $p_2=e^{-\beta e_2}/(e^{-\beta e_1}+e^{-\beta e_2})$ and the
$N$-site energy label with $m$ occurrences of level $e_2$ has energy
$m e_2+(N-m)e_1$.

## Proof

1.1 Take $q=2$, $e_1=0$, $e_2=\epsilon>0$, and choose finite $\beta>0$
with $\beta\epsilon=\log\sqrt2$. By [F1],
$$p_2=\frac{e^{-\beta\epsilon}}{1+e^{-\beta\epsilon}} =\frac1{1+\sqrt2}=\sqrt2-1.$$
This number is irrational: if $\sqrt2$ were rational, writing it as a
reduced fraction $a/b$ gives $a^2=2b^2$, so $a$ is even, then $b$ is even,
contradicting reduction. Hence $p_2$ is irrational. [given, F1, algebra]

2.1 For any integer $N\ge1$, an $N$-site label has energy $m\epsilon$
for some integer $m$, whereas the canonical mean is $NE=N\epsilon p_2$.
The zero-width band condition forces $m\epsilon=N\epsilon p_2$, hence
$m=Np_2$. Since $p_2$ is irrational, $Np_2$ is not an integer. Thus no
label satisfies the condition, $\Gamma_N=\varnothing$, and
$\Pi_N/|\Gamma_N|$ is undefined. This shows why a nonemptiness or positive
width hypothesis cannot be omitted. [F1, step 1.1, algebra] ∎
