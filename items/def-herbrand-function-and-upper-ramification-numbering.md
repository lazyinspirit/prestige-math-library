---
id: def-herbrand-function-and-upper-ramification-numbering
kind: definition
title: "Herbrand function and upper ramification numbering"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 6
deps:
  - def-lower-ramification-groups-of-a-local-galois-extension
  - thm-local-ramification-groups-normal-and-terminate
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "J. S. Milne, Algebraic Number Theory, version 3.08, Chapter VII, Section 'Ramification groups'"
      url: "https://www.jmilne.org/math/CourseNotes/ANT.pdf"
    - title: "Jürgen Neukirch, Algebraic Number Theory, Chapter II, Section 10"
      url: "https://web.math.ucsb.edu/~agboola/teaching/2021/fall/225A/neukirch.pdf"
verification: {}
---

## Definition

Let $L/K$ be a finite Galois extension of nonarchimedean local fields with
finite residue fields. Extend the integer lower groups to real indices by
$G_{-1}=G$ and $G_t=G_{\lceil t\rceil}$ for real $t>-1$. Define the Herbrand
function on $[-1,\infty)$ by
$$\varphi_{L/K}(u)= \begin{cases} u,&-1\le u\le0,\\ \displaystyle\int_0^u (G_0:G_t)^{-1}\,dt,&u\ge0. \end{cases}$$
It is a strictly increasing bijection from $[-1,\infty)$ onto itself; write
$\psi_{L/K}=\varphi_{L/K}^{-1}$. The upper-numbered groups are
$G^v:=G_{\psi_{L/K}(v)}$ for real $v\ge-1$.

## Definition references

[[def-lower-ramification-groups-of-a-local-galois-extension]]

[[thm-local-ramification-groups-normal-and-terminate]]

[J. S. Milne, *Algebraic Number Theory*, Chapter VII, “Ramification groups”](https://www.jmilne.org/math/CourseNotes/ANT.pdf)

[Jürgen Neukirch, *Algebraic Number Theory*, Chapter II, Section 10](https://web.math.ucsb.edu/~agboola/teaching/2021/fall/225A/neukirch.pdf)

## Facts & Assumptions

**Given:** The finite Galois local extension in the Definition.

[F1] [[def-lower-ramification-groups-of-a-local-galois-extension]]: $G_0$ and each integer $G_i$ are defined using the normalized valuation of $L$; increasing $i$ raises the valuation threshold.

[F2] [[thm-local-ramification-groups-normal-and-terminate]]: The lower groups are finite subgroups, are decreasing, and equal $\{1\}$ for all sufficiently large indices.

## Proof

1.1 By [F1], the real-indexed groups are constant on each interval between consecutive integers. The integral defining $\varphi_{L/K}$ is therefore continuous and piecewise linear. On each such interval its slope is $|G_t|/|G_0|>0$ by [F2], so the function is strictly increasing and $\varphi_{L/K}(0)=0$. [F1, F2, given, algebra]

2.1 By eventual triviality in [F2], the slope is eventually the positive constant $1/|G_0|$, so $\varphi_{L/K}(u)\to\infty$ as $u\to\infty$. On $[-1,0]$ the function is the identity and agrees continuously with the integral at zero. Thus its image is all of $[-1,\infty)$ and it has a unique inverse $\psi_{L/K}$. [F2, step 1.1, given, algebra] ∎
