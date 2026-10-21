---
id: lem-ip-tv-l2-functional-properties
kind: lemma
title: Convexity, lower semicontinuity, and BV agreement of L² TV
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 3
deps:
  - def-ip-tv-functional-on-l2-distributional-variation
  - lem-ip-bv-test-field-characterization-and-lsc
  - thm-cauchy-schwarz-in-an-inner-product-space
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "José A. Iglesias, Gwenael Mercier, and Otmar Scherzer, A note on convergence of solutions of total variation regularized linear inverse problems, §1.1"
      url: "https://arxiv.org/pdf/1711.06495"
      locator: "§1.1, test-field definition of TV"
    - title: "Gláucio Terra, Introduction to Geometric Measure Theory — Lecture Notes, version 1.6, §7.4"
      url: "https://www.ime.usp.br/~glaucio/mat6704/textos/GMTLecureNotes.pdf"
      locator: "§7.4, distributional variation and its test-field formula"
---

## Statement

Let $\Omega\subseteq\mathbb R^2$ be open and let $TV_2(\cdot;\Omega)$ be the extended distributional total variation on $L^2(\Omega;\mathbb R)$. It is proper, convex, lower semicontinuous in the $L^2$ norm, and positively one-homogeneous for nonnegative scalars. For every $u\in BV(\Omega)\cap L^2(\Omega)$, it agrees with spatial TV: $TV_2(u;\Omega)=TV(u;\Omega)$.

## Statement references

[[def-ip-tv-functional-on-l2-distributional-variation|The extended L² distributional-TV functional is a supremum over smooth compactly supported vector fields.]]

[[lem-ip-bv-test-field-characterization-and-lsc|For globally integrable BV functions, that test-field supremum equals the measure total variation.]]

## Facts & Assumptions

**Given:** An open $\Omega\subseteq\mathbb R^2$, the functional $TV_2$ on $L^2(\Omega;\mathbb R)$, and the spatial BV total variation.

[F1] [[def-ip-tv-functional-on-l2-distributional-variation]]: $TV_2(u;\Omega)$ is the supremum of $\int_\Omega u\,\operatorname{div}\varphi$ over smooth compactly supported vector fields with Euclidean norm at most one.

[F2] [[lem-ip-bv-test-field-characterization-and-lsc]]: for $u\in BV(\Omega)$, $TV(u;\Omega)$ equals the same test-field supremum.

[F3] [[thm-cauchy-schwarz-in-an-inner-product-space]]: each test functional $u\mapsto\int u\,\operatorname{div}\varphi$ is continuous on $L^2$, with absolute value at most $\|u\|_2\|\operatorname{div}\varphi\|_2$.

## Proof

1.1 The zero function has $TV_2(0;\Omega)=0$, so the functional is proper; its defining test class is symmetric under $\varphi\mapsto-\varphi$, hence its supremum is nonnegative. For $\lambda>0$, linearity of every test integral gives $TV_2(\lambda u;\Omega)=\lambda TV_2(u;\Omega)$, and the equality also holds for $\lambda=0$. For $\theta\in[0,1]$, every admissible field gives $\int(\theta u+(1-\theta)v)\operatorname{div}\varphi\le\theta TV_2(u;\Omega)+(1-\theta)TV_2(v;\Omega)$; taking the supremum proves convexity, with the extended-real cases automatic. [F1, given, algebra]

2.1 By [F3], every fixed test integral is a continuous linear functional on $L^2$. For each real $a$, the sublevel set $\{u:TV_2(u;\Omega)\le a\}$ is the intersection, over all admissible $\varphi$, of the closed half-spaces $\{u:\int u\operatorname{div}\varphi\le a\}$; hence it is closed and $TV_2$ is lower semicontinuous. If $u\in BV(\Omega)\cap L^2(\Omega)$, [F1] and [F2] give $TV_2(u;\Omega)=TV(u;\Omega)$. [F1, F2, F3, step 1.1] ∎
