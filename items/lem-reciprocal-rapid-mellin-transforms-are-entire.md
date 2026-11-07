---
id: lem-reciprocal-rapid-mellin-transforms-are-entire
kind: lemma
title: Reciprocal rapid Mellin transforms are entire
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 0
deps:
  - thm-dominated-convergence
  - thm-substitution-for-improper-integrals
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
sources:
  scraped: []
  references: []
---

## Statement

Let $\kappa\in\mathbb R$ and let $f,g:(0,\infty)\to\mathbb C$ be continuous. Suppose that for every $N>0$ there is $C_N<\infty$ such that $|f(t)|+|g(t)|\le C_Nt^{-N}$ for $t\ge1$, and that $f(t)=t^{-\kappa}g(1/t)$ for every $t>0$. Define

$$M_f(s)=\int_0^\infty f(t)t^s\,\frac{dt}{t},\qquad M_g(s)=\int_0^\infty g(t)t^s\,\frac{dt}{t}.$$

Both integrals converge absolutely for every complex $s$ and define entire functions bounded on every finite vertical strip. They satisfy $M_f(s)=M_g(\kappa-s)$ for all $s\in\mathbb C$.

## Facts & Assumptions

**Given:** Exactly the continuous functions, rapid bounds, reciprocal identity and real parameter in the Statement.

[F1] Dominated convergence permits limits inside complex integrals under an integrable majorant. [[thm-dominated-convergence]]

[F2] A monotone differentiable substitution on compact truncations preserves the value of a convergent improper integral. [[thm-substitution-for-improper-integrals]]

## Proof

**Given:** The Statement data and [F1]–[F2].

1.1 The reciprocal identity also gives $g(t)=t^{-\kappa}f(1/t)$. The rapid bounds control both integrands at infinity for every $s$. At zero, $|f(t)|\le C_Nt^{N-\kappa}$ and $|g(t)|\le C_Nt^{N-\kappa}$ for every $N>0$, so a sufficiently large $N$ gives absolute convergence. On a compact set of $s$ the same bounds remain integrable after multiplying by any fixed power of $|\log t|$. For small complex $h$, the difference quotient of $t^s$ is bounded by $|\log t|t^{\operatorname{Re}s}e^{|h||\log t|}$; [F1] therefore permits differentiation under each integral and proves both transforms entire. The same integrable majorant without logarithms bounds either transform uniformly in a finite vertical strip. [given, F1, construct, algebra]

2.1 Apply [F2] with $u=1/t$ to the absolutely convergent integral. The reciprocal identity gives $M_f(s)=\int_0^\infty g(1/t)t^{s-\kappa}dt/t=\int_0^\infty g(u)u^{\kappa-s}du/u=M_g(\kappa-s)$. [given, F2, step 1.1, algebra] ∎
