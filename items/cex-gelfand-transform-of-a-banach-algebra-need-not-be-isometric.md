---
id: cex-gelfand-transform-of-a-banach-algebra-need-not-be-isometric
kind: counterexample
title: Gelfand transform of a Banach algebra need not be isometric
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-gelfand-transform, thm-characters-on-a-unital-banach-algebra-are-continuous]
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
    - title: "Vahid Shirbisheh, Lectures on C-star Algebras, v2 — Definition 3.1.23 and §3.1, printed pp. 62–67"
      url: "https://arxiv.org/pdf/1211.3404"
    - title: "Theo Bühler and Dietmar A. Salamon, Functional Analysis — Theorem 5.63 and §5.5.1, printed pp. 262–266"
      url: "https://sci.mu.edu.iq/wp-content/uploads/2021/08/FUNCTIONAL-ANALYSIS-freebookcenter.net_.pdf"
---

## Statement refuted

The claim that the Gelfand transform of every commutative unital complex Banach
algebra is isometric, that is, that $\|\hat a\|_\infty = \|a\|$ for all $a$, is
**false**.

## Facts & Assumptions

**Given:** The commutative unital complex Banach algebra $A := \mathbb C[\varepsilon]/(\varepsilon^2)$ of dual numbers, with elements $a + b\varepsilon$ and norm $\|a + b\varepsilon\| := |a| + |b|$, and its Gelfand transform $\Gamma(a) = \hat a$ ([[def-gelfand-transform]]).

[L1] A character of a nonzero unital complex Banach algebra is unital and continuous with $|\chi(x)| \le \|x\|$; it is complex-linear and multiplicative ([[thm-characters-on-a-unital-banach-algebra-are-continuous]].

## Counterexample

**Proof technique:** direct.

1.1 The multiplication $(a + b\varepsilon)(c + d\varepsilon) = ac + (ad+bc)\varepsilon$ is associative, commutative and complex-bilinear, and the norm is submultiplicative: $\|xy\| = |ac| + |ad+bc| \le |a||c| + |a||d| + |b||c| \le (|a|+|b|)(|c|+|d|) = \|x\|\,\|y\|$; the unit is $1 = 1 + 0\varepsilon$ with $\|1\| = 1$, and the algebra is complete because its two coordinates are controlled by the norm ($|a| \le \|x\|$, $|b| \le \|x\|$) and conversely $\|x\| \le 2\max(|a|,|b|)$, so the norm is equivalent to the Euclidean norm on $\mathbb C^2$; hence $A$ is a nonzero commutative unital complex Banach algebra. [algebra]

1.2 Every character $\chi$ of $A$ satisfies $\chi(\varepsilon)^2 = \chi(\varepsilon^2) = \chi(0) = 0$ by multiplicativity [L1], so $\chi(\varepsilon) = 0$ since $\mathbb C$ is a field; hence $\chi(a + b\varepsilon) = a\chi(1) + b\chi(\varepsilon) = a$ by linearity and unitality [L1]; in particular $\Delta(A)$ consists of the single character $\chi_0(a+b\varepsilon) = a$. [1.1, L1, algebra]

2.1 The element $\varepsilon = 0 + 1\varepsilon$ has norm $\|\varepsilon\| = 1 \ne 0$, while its Gelfand transform vanishes identically: $\hat\varepsilon(\chi_0) = \chi_0(\varepsilon) = 0$ by [step 1.2]; hence $\|\hat\varepsilon\|_\infty = 0 \ne 1 = \|\varepsilon\|$, so the Gelfand transform of $A$ is not isometric (and not injective, since $\varepsilon \ne 0$ has zero transform). [step 1.2, L1, algebra] ∎

## Remarks

- **Consistency with the general theory.** By [[thm-gelfand-transform-is-a-contractive-unital-homomorphism]] only the inequality $\|\hat a\|_\infty = r(a) \le \|a\|$ is available in general; here $r(\varepsilon) = 0$, so the transform realises the strict inequality.
- **The algebra is not a C\*-algebra**: no involution making $\|a^*a\| = \|a\|^2$ holds for this norm, which is why [[thm-commutative-gelfand-naimark]] is not contradicted.
