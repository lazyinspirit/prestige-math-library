---
id: lem-characters-on-a-commutative-c-star-algebra-preserve-star
kind: lemma
title: Characters on a unital commutative C star algebra preserve star
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [thm-characters-on-a-unital-banach-algebra-are-continuous, def-self-adjoint-positive-unitary-and-normal-elements-of-a-c-star-algebra, def-c-star-algebra, def-character-and-maximal-ideal-space, def-unital-banach-algebra]
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
    - title: "Vahid Shirbisheh, Lectures on C-star Algebras, v2 — Proposition 3.1.31, printed p. 64"
      url: "https://arxiv.org/pdf/1211.3404"
    - title: "Theo Bühler and Dietmar A. Salamon, Functional Analysis — §5.5.1, printed pp. 258–262"
      url: "https://sci.mu.edu.iq/wp-content/uploads/2021/08/FUNCTIONAL-ANALYSIS-freebookcenter.net_.pdf"
---

## Statement

Let $A$ be a unital commutative complex C\*-algebra
([[def-c-star-algebra]], [[def-unital-banach-algebra]]) and let
$\chi : A \to \mathbb C$ be a character ([[def-character-and-maximal-ideal-space]]).
Then

$$\chi(a^*) \;=\; \overline{\chi(a)} \qquad (a \in A).$$

The argument is choice-free and does not use the later theorem that the
spectrum of a self-adjoint element is real.

## Facts & Assumptions

**Given:** A unital commutative complex C\*-algebra $A$ and a character $\chi$ on $A$.

[F1] $\chi$ is unital and contractive: $\chi(1) = 1$ and $|\chi(x)| \le \|x\|$ for every $x \in A$; $\chi$ is complex-linear and multiplicative ([[thm-characters-on-a-unital-banach-algebra-are-continuous]], [[def-character-and-maximal-ideal-space]]).

[F2] $\|x^*x\| = \|x\|^2$ and the norm is submultiplicative and satisfies the triangle inequality; the multiplication is commutative ([[def-c-star-algebra]], [[def-unital-banach-algebra]]).

[F3] $s\in A$ is self-adjoint when $s^*=s$ ([[def-self-adjoint-positive-unitary-and-normal-elements-of-a-c-star-algebra]]).

## Proof

**Proof technique:** direct.

1.1 First $1^*=1$: taking adjoints of $1b=b=b1$ and using surjectivity of the involution shows $1^*$ is a two-sided identity, hence equals $1$ by uniqueness. For a self-adjoint $s \in A$ and real $t$ the element $s + it1$ satisfies $(s+it1)^*(s+it1) = s^2 + t^21$: indeed $(s+it1)^* = s - it1$ by [F3] and conjugate-linearity of the involution, and multiplying out in the commutative algebra gives $s^2 + its - its + t^21 = s^2+t^21$. [F2, F3, algebra]

1.2 $\chi$ is complex-linear with $\chi(1) = 1$ and $|\chi(x)| \le \|x\|$ for all $x$; in particular $\chi(s+it1) = \chi(s) + it$. [F1]

1.3 For $a\in A$ set $s=(a+a^*)/2$ and $t=(a-a^*)/(2i)$. Conjugate-linearity and involutivity give $s^*=(a^*+a)/2=s$ and $t^*=-(a^*-a)/(2i)=t$, while $s+it=a$ and $s-it=a^*$. Thus both parts are self-adjoint by [F3]. [F2, F3, algebra]

2.1 For a self-adjoint $s$ and real $t$: $|\chi(s)+it|^2 = |\chi(s+it1)|^2 \le \|s+it1\|^2 = \|(s+it1)^*(s+it1)\| = \|s^2+t^21\| \le \|s^2\| + t^2 \le \|s\|^2 + t^2$, using [step 1.1], [step 1.2], the C\*-identity, the triangle inequality and submultiplicativity. [step 1.1, step 1.2, F2]

3.1 Writing $\chi(s) = u + iv$ with $u,v$ real, the inequality of [step 2.1] reads $u^2 + (v+t)^2 \le \|s\|^2 + t^2$, that is, $u^2+v^2+2vt \le \|s\|^2$ for every real $t$. If $v > 0$ then $t \to +\infty$ makes the left side tend to $+\infty$; if $v < 0$ then $t \to -\infty$ does the same; both contradict the uniform upper bound. Hence $v = 0$ and $\chi(s) \in \mathbb R$ for every self-adjoint $s$. [step 2.1, algebra]

4.1 For arbitrary $a = s+it$ as in [step 1.3]: $\chi(a^*) = \chi(s - it) = \chi(s) - i\chi(t) = \overline{\chi(s) + i\chi(t)} = \overline{\chi(a)}$ by [step 3.1] and linearity. [step 1.3, step 3.1, F1, algebra] ∎

## Remarks

- **The two signs of $t$ are both needed.** The estimate at a single real $t$ only bounds $v$ from one side, and it is the freedom to take $t$ arbitrarily large in both directions that forces $v = 0$.
- **The lemma is what makes the Gelfand transform a $\ast$-map** in the commutative Gelfand–Naimark theorem; without it, the range of $\Gamma$ would be a mere algebra of functions.
