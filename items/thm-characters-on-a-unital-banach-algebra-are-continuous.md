---
id: thm-characters-on-a-unital-banach-algebra-are-continuous
kind: theorem
title: Characters on a unital Banach algebra are continuous
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-unital-banach-algebra, def-character-and-maximal-ideal-space, def-spectrum-and-resolvent-set-in-a-banach-algebra, lem-neumann-series, def-invertible-element-and-general-linear-group-of-a-banach-algebra]
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Vahid Shirbisheh, Lectures on C-star Algebras, v2 — Theorem 3.1.11 proof and Proposition 3.1.12(i), printed pp. 54–61"
      url: "https://arxiv.org/pdf/1211.3404"
    - title: "Theo Bühler and Dietmar A. Salamon, Functional Analysis — Chapter 5 §5.5.1, printed pp. 258–262"
      url: "https://sci.mu.edu.iq/wp-content/uploads/2021/08/FUNCTIONAL-ANALYSIS-freebookcenter.net_.pdf"
---

## Statement

Let $A$ be a nonzero unital complex Banach algebra
([[def-unital-banach-algebra]]) and let $\chi$ be a character on $A$
([[def-character-and-maximal-ideal-space]]). Then:

1. $\chi$ is unital: $\chi(1) = 1$;
2. $\chi(a) \in \sigma_A(a)$ for every $a \in A$
   ([[def-spectrum-and-resolvent-set-in-a-banach-algebra]]);
3. $|\chi(a)| \le \|a\|$ for every $a \in A$; consequently $\chi$ is bounded
   linear with $\|\chi\| = 1$, and in particular $\chi$ is continuous.

No Hahn–Banach theorem, no spectral-radius formula and no existence of
characters is used: the argument runs on the Neumann series alone and is a
theorem of ZF.

## Facts & Assumptions

**Given:** A nonzero unital complex Banach algebra $A$, a character $\chi$ on $A$, and an element $a \in A$.

[L1] $A$ is a complex vector space with associative bilinear multiplication, a complete submultiplicative norm, a unit $1$ with $1x = x1 = x$ and $\|1\| = 1$, and $0 \ne 1$ because $A$ is nonzero ([[def-unital-banach-algebra]]).

[L2] A character is nonzero, complex-linear and multiplicative; in particular $\chi(1 \cdot 1) = \chi(1)^2$ and $\chi(a \cdot 1) = \chi(a)\chi(1)$ ([[def-character-and-maximal-ideal-space]]).

[L3] $b \in A$ is invertible exactly when $bc = cb = 1$ for some $c \in A$, and $z \in \sigma_A(a)$ exactly when $z1 - a$ is not invertible ([[def-spectrum-and-resolvent-set-in-a-banach-algebra]]).

[L4] If $\|y\| < 1$ then $1-y$ is invertible, with inverse $\sum_{n \ge 0} y^n$ ([[lem-neumann-series]]).


## Proof

**Proof technique:** direct.

1.1 $\chi(1) = \chi(1 \cdot 1) = \chi(1)^2$ by multiplicativity [L2], so $\chi(1) \in \{0,1\}$; if $\chi(1) = 0$ then $\chi(a) = \chi(a \cdot 1) = \chi(a)\chi(1) = 0$ for every $a$, contradicting that $\chi$ is nonzero [L2], so $\chi(1) = 1$. [L1, L2, algebra]

2.1 Put $\lambda := \chi(a)$ and suppose $\lambda \notin \sigma_A(a)$, so that $a - \lambda 1$ is invertible with two-sided inverse $b$ [L3]. Then $1 = \chi(1) = \chi(b(a-\lambda 1)) = \chi(b)\bigl(\chi(a) - \lambda\chi(1)\bigr) = \chi(b) \cdot 0 = 0$ by [step 1.1], [L2] and linearity, a contradiction; hence $\chi(a) \in \sigma_A(a)$. [step 1.1, L2, L3]

3.1 Suppose $|\lambda| > \|a\|$ where $\lambda = \chi(a)$. Then $\|a/\lambda\| = \|a\|/|\lambda| < 1$, so $1 - a/\lambda$ is invertible by [L4], and therefore $\lambda 1 - a = \lambda(1 - a/\lambda)$ is invertible with inverse $\lambda^{-1}(1-a/\lambda)^{-1}$; by [L3] this says $\lambda \notin \sigma_A(a)$, contradicting [step 2.1]. Hence $|\chi(a)| \le \|a\|$ for every $a \in A$. [step 2.1, L1, L3, L4, algebra]

4.1 By [step 1.1] $\chi(1) = 1$ and by [step 3.1] $|\chi(a)| \le \|a\|$ for all $a$, so $\chi$ is bounded linear with $\|\chi\| \le 1$; since $\|1\| = 1$ and $\chi(1) = 1$, $\|\chi\| = 1$. Every bounded linear map between normed spaces is continuous, so $\chi$ is continuous. [step 1.1, step 3.1, L1] ∎

## Remarks

- **The unit hypothesis is not cosmetic.** For a nonzero unital Banach algebra the computation $\chi(1)^2 = \chi(1)$ is what forces unitality; on a nonunital Banach algebra characters can be unbounded, which is why the nonunital theory on this page is developed through the C\*-algebraic unitization.
- **Choice-free.** Steps 1.1–2.2 use only the algebra axioms, the definition of the spectrum and the Neumann series; no selection from nonempty sets and no separation theorem occurs.
- **Where the bound is used.** Part 3 is what puts $\Delta(A)$ inside the dual unit ball and identifies the pointwise-evaluation topology with the weak-star subspace topology; this is the standard automatic-continuity statement for characters.
