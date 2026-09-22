---
id: thm-gelfand-transform-is-a-contractive-unital-homomorphism
kind: theorem
title: Gelfand transform is a contractive unital homomorphism
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-gelfand-transform, thm-spectrum-as-character-values, thm-characters-on-a-unital-banach-algebra-are-continuous, def-spectral-radius, def-axiom-of-choice, def-unital-banach-algebra]
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-22
sources:
  references:
    - title: "Vahid Shirbisheh, Lectures on C-star Algebras, v2 — Theorem 3.1.18, printed p. 62"
      url: "https://arxiv.org/pdf/1211.3404"
    - title: "Theo Bühler and Dietmar A. Salamon, Functional Analysis — Theorem 5.63, printed pp. 262–266"
      url: "https://sci.mu.edu.iq/wp-content/uploads/2021/08/FUNCTIONAL-ANALYSIS-freebookcenter.net_.pdf"
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $A$ be a nonzero
commutative unital complex Banach algebra
([[def-unital-banach-algebra]]) with Gelfand transform
$\Gamma = \Gamma_A : A \to C(\Delta(A))$
([[def-gelfand-transform]]). Then:

1. $\Gamma$ is a unital complex-algebra homomorphism:
   $\Gamma(\lambda a + \mu b) = \lambda\Gamma(a) + \mu\Gamma(b)$,
   $\Gamma(ab) = \Gamma(a)\Gamma(b)$ and $\Gamma(1) = \mathbf 1$;
2. $\|\Gamma(a)\|_\infty = r(a)$ for every $a \in A$
   ([[def-spectral-radius]]), and consequently $\Gamma$ is contractive:
   $\|\Gamma(a)\|_\infty \le \|a\|$.

No injectivity, surjectivity or *-preservation is claimed for a general
commutative unital Banach algebra.

## Facts & Assumptions

**Given:** An assumed Axiom of Choice, a nonzero commutative unital complex Banach algebra $A$, its character space $\Delta(A)$ with the pointwise-evaluation topology, and $\Gamma = \Gamma_A$.

[L1] Every character of $A$ satisfies $\chi(1) = 1$ and $|\chi(a)| \le \|a\|$ for all $a \in A$ ([[thm-characters-on-a-unital-banach-algebra-are-continuous]]).

[L2] $\Gamma(a) = \hat a$ with $\hat a(\chi) = \chi(a)$, and each $\hat a$ is continuous on $\Delta(A)$ by the definition of the evaluation topology ([[def-gelfand-transform]]).

[L3] $\sigma_A(a) = \{\chi(a) : \chi \in \Delta(A)\}$, and every character satisfies $|\chi(a)| \le r(a) \le \|a\|$ ([[thm-spectrum-as-character-values]], [[def-spectral-radius]], [[def-axiom-of-choice]]).

## Proof

**Proof technique:** direct.

1.1 For $\chi \in \Delta(A)$ we have $\chi(1) = 1$ and $|\chi(a)| \le \|a\|$ for every $a$, by [L1]. [L1]

1.2 Each $\hat a$ is a continuous complex-valued function on $\Delta(A)$, since $\hat a$ is the evaluation map $e_a$ and the evaluation topology makes all $e_a$ continuous; thus $\Gamma(a) \in C(\Delta(A))$ and it makes sense to speak of $\|\Gamma(a)\|_\infty$. [L2]

1.3 $\Gamma$ is complex-linear and multiplicative: for all $\chi \in \Delta(A)$, $\Gamma(\lambda a + \mu b)(\chi) = \chi(\lambda a + \mu b) = \lambda\chi(a) + \mu\chi(b) = (\lambda\Gamma(a) + \mu\Gamma(b))(\chi)$ and $\Gamma(ab)(\chi) = \chi(ab) = \chi(a)\chi(b) = (\Gamma(a)\Gamma(b))(\chi)$, by linearity and multiplicativity of characters. [L2]

1.4 $\{\chi(a) : \chi \in \Delta(A)\} = \sigma_A(a)$ and $|\chi(a)| \le r(a) \le \|a\|$ for every $\chi$, by [L3]. [L3]

2.1 $\|\Gamma(a)\|_\infty = r(a)$ for every $a$: the set of values $\{\hat a(\chi) : \chi\} = \{\chi(a) : \chi\}$ equals $\sigma_A(a)$ by [step 1.4], and by [step 1.1] and [L1] the function $\hat a$ is bounded with $|\hat a(\chi)| \le \|a\|$, so the supremum over $\chi$ of $|\hat a(\chi)|$ is the maximum of $|z|$ over $z \in \sigma_A(a)$, that is, $r(a)$; in particular $\|\Gamma(a)\|_\infty \le \|a\|$. [step 1.1, step 1.4, L3, algebra]

2.2 $\Gamma(1) = \mathbf 1$, the constant function one: $\Gamma(1)(\chi) = \chi(1) = 1$ for every $\chi$ by [step 1.1]. [step 1.1]

3.1 By [step 1.3], [step 2.1] and [step 2.2], $\Gamma$ is a unital algebra homomorphism with $\|\Gamma(a)\|_\infty = r(a) \le \|a\|$ for all $a$; hence it is contractive. [step 1.3, step 2.1, step 2.2] ∎

## Remarks

- **The sup norm is finite.** Boundedness of $\hat a$ is not assumed: it follows from the norm bound $|\chi(a)| \le \|a\|$ of [L1], so the supremum in $\|\Gamma(a)\|_\infty$ is taken over a bounded set of values.
- **The formula $\|\hat a\|_\infty = r(a)$ is the exact quantitative content** of the theorem; the inequality $r(a) \le \|a\|$ is the contractivity, and for a general Banach algebra it may be strict.
