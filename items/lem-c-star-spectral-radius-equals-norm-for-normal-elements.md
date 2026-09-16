---
id: lem-c-star-spectral-radius-equals-norm-for-normal-elements
kind: lemma
title: C star spectral radius equals norm for normal elements
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-self-adjoint-positive-unitary-and-normal-elements-of-a-c-star-algebra, def-c-star-algebra, thm-spectral-radius-formula, def-spectral-radius, def-axiom-of-choice, def-unital-banach-algebra]
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Vahid Shirbisheh, Lectures on C-star Algebras, v2 — Lemma 3.1.30 and Proposition 3.1.32, printed pp. 64–65"
      url: "https://arxiv.org/pdf/1211.3404"
    - title: "Dana P. Williams, Lecture Notes on the Spectral Theorem — §4, printed pp. 9–11"
      url: "https://www.math.dartmouth.edu/~dana/bookspapers/ln-spec-thm.pdf"
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $A$ be a unital
complex C\*-algebra ([[def-c-star-algebra]],
[[def-unital-banach-algebra]]) and let $a \in A$ be normal
([[def-self-adjoint-positive-unitary-and-normal-elements-of-a-c-star-algebra]]).
Then

$$r(a) \;=\; \|a\|,$$

where $r(a)$ is the spectral radius ([[def-spectral-radius]]).

## Facts & Assumptions

**Given:** An assumed Axiom of Choice, a unital complex C\*-algebra $A$, and a normal element $a \in A$.

[L1] $\|x^*x\| = \|x\|^2$ and $\|x^*\| = \|x\|$ for all $x \in A$, and the norm is submultiplicative ([[def-c-star-algebra]]).

[L2] $x$ is normal when $x^*x = xx^*$, and $x$ is self-adjoint when $x^* = x$; a self-adjoint element is normal ([[def-self-adjoint-positive-unitary-and-normal-elements-of-a-c-star-algebra]]).

[L3] Under the Axiom of Choice, $r(x) = \lim_{k\to\infty}\|x^k\|^{1/k} = \inf_{k\ge1}\|x^k\|^{1/k}$ for every $x \in A$ ([[thm-spectral-radius-formula]], [[def-spectral-radius]], [[def-axiom-of-choice]]).

## Proof

**Proof technique:** direct.

1.1 For every normal $d \in A$ one has $\|d^2\| = \|d\|^2$: by [L1] and [L2], $\|d^2\|^2 = \|(d^2)^*(d^2)\| = \|d^*d^*dd\|$ and, since $d^*d = dd^*$, the element $d^*d^*dd = (d^*d)(dd^*) = (d^*d)^2$; so $\|d^2\|^2 = \|(d^*d)^2\| = \|(d^*d)^*(d^*d)\| = \|d^*d\|^2 = \|d\|^4$, whence $\|d^2\| = \|d\|^2$. [L1, L2, algebra]

2.1 By induction on $n \ge 0$, $\|a^{2^n}\| = \|a\|^{2^n}$ for the normal element $a$: the case $n=0$ is $\|a\| = \|a\|$; if $\|a^{2^n}\| = \|a\|^{2^n}$, then $a^{2^n}$ is normal (a power of a normal element commutes with its adjoint, since $a$ and $a^*$ commute), so [step 1.1] applies to $d = a^{2^n}$ and gives $\|a^{2^{n+1}}\| = \|(a^{2^n})^2\| = \|a^{2^n}\|^2 = \|a\|^{2^{n+1}}$. [step 1.1, L2, algebra]

3.1 By [L3] the limit $r(a) = \lim_{k}\|a^k\|^{1/k}$ exists, and the sequence $k = 2^n$ is a strictly increasing sequence of indices, so the subsequence $\|a^{2^n}\|^{1/2^n} = \|a\|$ converges to $r(a)$; hence $r(a) = \|a\|$. [step 2.1, L3, algebra] ∎

## Remarks

- **No continuous functional calculus is used**, and no assumption that the spectrum is real is made: the whole content is the C\*-identity plus the spectral radius formula.
- **The normality hypothesis is exactly what makes the power norms a subsequence of geometric form**: for a general element only $\|a^{2^n}\| \le \|a\|^{2^n}$ holds, and the limit can be strictly smaller.
