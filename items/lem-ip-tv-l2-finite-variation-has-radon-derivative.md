---
id: lem-ip-tv-l2-finite-variation-has-radon-derivative
kind: lemma
title: Finite L² distributional variation has a finite Radon derivative
status: published
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 3
deps:
  - def-ip-tv-functional-on-l2-distributional-variation
  - def-ip-spatial-bv-and-distributional-tv
  - def-countable-choice
  - lem-ip-euclidean-radon-representation-under-countable-choice
  - lem-ip-smooth-compact-support-dense-in-c0
  - lem-ip-vector-radon-variation-is-radon
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: "pass"
    date: "2026-10-22"
    scope: "Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/inverse-problems-knot-theory-all-109-2026-10-19-publication.json."
    delegated_by: "owner"
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
sources:
  references:
    - title: "José A. Iglesias, Gwenael Mercier, and Otmar Scherzer, A note on convergence of solutions of total variation regularized linear inverse problems, §1.1"
      url: "https://arxiv.org/pdf/1711.06495"
      locator: "§1.1, representation of finite distributional variation as a Radon derivative"
    - title: "Gláucio Terra, Introduction to Geometric Measure Theory — Lecture Notes, version 1.6, §7.4"
      url: "https://www.ime.usp.br/~glaucio/mat6704/textos/GMTLecureNotes.pdf"
      locator: "§7.4, distributional derivatives of locally integrable functions"
---

## Statement

Assume Countable Choice. If $\Omega\subseteq\mathbb R^2$ is open, $u\in L^2(\Omega;\mathbb R)$, and $TV_2(u;\Omega)<\infty$, then each distributional derivative of $u$ is represented by a finite signed Radon measure. Their vector measure $Du$ has finite Radon variation and $|Du|(\Omega)=TV_2(u;\Omega)$.

## Statement references

[[def-ip-tv-functional-on-l2-distributional-variation|The extended distributional-TV functional on L² is defined by its smooth test-field supremum.]]

[[def-ip-spatial-bv-and-distributional-tv|The distributional derivative uses the negative-transpose test convention.]]

## Facts & Assumptions

**Given:** Countable Choice, an open $\Omega\subseteq\mathbb R^2$, and $u\in L^2(\Omega;\mathbb R)$ with $M:=TV_2(u;\Omega)<\infty$.

[A1] Countable Choice is the axiom required by the Euclidean real Radon-representation supplier. ([[def-countable-choice]])

[F1] [[def-ip-tv-functional-on-l2-distributional-variation]]: $M$ is the supremum of $\int u\,\operatorname{div}\varphi$ over smooth compactly supported vector fields with $\|\varphi\|_\infty\le1$.

[F2] [[def-ip-spatial-bv-and-distributional-tv]]: $D_i u$ acts on a smooth compactly supported scalar test $\psi$ by $-\int u\,\partial_i\psi$.

[F3] [[lem-ip-smooth-compact-support-dense-in-c0]]: smooth compactly supported functions are uniformly dense in $C_0(\Omega)$.

[F4] [[lem-ip-euclidean-radon-representation-under-countable-choice]]: every bounded real linear functional on $C_0(\Omega)$ is integration against a unique finite signed Radon measure.

[F5] [[lem-ip-vector-radon-variation-is-radon]]: for a finite vector of signed Radon measures, partition variation is Radon and its mass equals the supremum over continuous compactly supported vector fields of norm at most one.

## Proof

1.1 Every $L^2$ function is integrable on compact subsets by Cauchy–Schwarz, so its distributional derivatives are defined. For $i=1,2$, set $L_i(\psi):=-\int_\Omega u\,\partial_i\psi\,dx$ on $C_c^\infty(\Omega;\mathbb R)$. If $\psi\ne0$, the vector field $\varphi=\psi e_i/\|\psi\|_\infty$ and its negative are admissible in [F1]; hence $|L_i(\psi)|\le M\|\psi\|_\infty$. The same bound is immediate for $\psi=0$. By [F3], $L_i$ extends uniquely to a bounded real linear functional on $C_0(\Omega)$. [A1, F1, F3, given, construct]

2.1 Countable Choice and [F4] represent each extension by a finite signed Radon measure $\mu_i$. Formula [F2] identifies $\mu_i$ with $D_i u$, so $\mu=(\mu_1,\mu_2)$ has finite vector Radon variation by [F5]. For every continuous compactly supported $g$ with $\|g\|_\infty\le1$, approximate uniformly by a smooth compactly supported $h$ with $\|h-g\|_\infty<\varepsilon$, and replace $h$ by $h/\max\{1,\|h\|_\infty\}$. The replacement has norm at most one and differs from $g$ by at most $2\varepsilon$. Since $\sum_i|\mu_i|(\Omega)<\infty$, its integral against $\mu$ approaches that of $g$ as $\varepsilon\downarrow0$. Thus the supremum over smooth unit fields equals the continuous-field supremum in [F5]. By [F2], $\int u\,\operatorname{div}\varphi=-\int\varphi\cdot d\mu$; symmetry of the unit test class removes this minus sign. Consequently $|Du|(\Omega)=M=TV_2(u;\Omega)$, proving the assertion. [A1, F1, F2, F3, F4, F5, step 1.1, construct] ∎
