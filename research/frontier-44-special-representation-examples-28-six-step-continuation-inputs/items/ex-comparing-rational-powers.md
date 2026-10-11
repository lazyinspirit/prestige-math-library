---
id: ex-comparing-rational-powers
kind: example
title: "Comparing rational powers: $2^{1/3} < 2^{1/2} < 3^{1/3}$"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [lem-rational-power-monotone, lem-rational-power-laws, lem-power-monotone, thm-nth-roots-exist, def-rational-power, def-integer-power]
justified_by: []
aliases: []
landmark: false
dependency_level: 8
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Jiří Lebl, Basic Analysis I: Introduction to Real Analysis, Volume I, version 6.3, 15 May 2026 (author-hosted complete book)"
      url: "https://www.jirka.org/ra/realanal.pdf"
      locator: "Chapter 4 §4.4, Corollary 4.4.3 (root function, monotone with the convention x^{m/n} = (x^{1/n})^m), printed pp. 177-178"
---

## Example

(i) $2^{1/2} > 2^{1/3}$; (ii) $3^{1/2} > 2^{1/2}$; (iii)
$2^{1/2} < 3^{1/3}$; hence

$$2^{1/3} < 2^{1/2} < 3^{1/3}.$$

All bases are positive and all exponents rational, so [[def-rational-power]]
applies. Clauses (i) and (ii) are instances of the two monotonicity statements
of [[lem-rational-power-monotone]], but (iii) is not: it compares bases
$2 < 3$ against exponents in the opposite order $1/2 > 1/3$, and neither
monotonicity clause decides it.

## Facts & Assumptions

**Given:** The positive bases $2$ and $3$ and the rational exponents $1/3 < 1/2$ in $\mathbb{Q}$.

[L1] Rational powers ([[def-rational-power]], [[thm-nth-roots-exist]]): for $a > 0$ and rational $r$ the value $a^{r}$ is defined and positive, and $a^{1/n}$ is the unique nonnegative $n$-th root of $a$.

[L2] Rational power laws ([[lem-rational-power-laws]]): $\big(a^{r}\big)^{s} = a^{rs}$ for $a > 0$ and rationals $r, s$, and $a^{1} = a$.

[L3] Monotonicity of rational powers ([[lem-rational-power-monotone]]): for $a > 1$ and rationals $r < s$ one has $a^{r} < a^{s}$; and for rational $r > 0$ and $0 < a < b$ one has $a^{r} < b^{r}$.

[L4] Monotonicity of integer powers ([[lem-power-monotone]]): for $j \ge 1$, $t \mapsto t^{j}$ is strictly increasing on the nonnegative reals, so $0 \le u < v$ implies $u^{j} < v^{j}$.

[L5] Integer powers ([[def-integer-power]]): $2^{3} = 2^{2}\cdot 2 = 4\cdot 2 = 8$ and $3^{2} = 9$ by the recursion clause and field arithmetic.

## Verification

**Proof technique:** direct.

1.1 Clause (i): $2 > 1$ and $1/3 < 1/2$ in $\mathbb{Q}$, so exponent monotonicity [L3] gives $2^{1/3} < 2^{1/2}$. [L1, L3, algebra]

1.2 Clause (ii): $1/2 > 0$ and $2 < 3$ with both bases positive, so base monotonicity [L3] gives $2^{1/2} < 3^{1/2}$. [L1, L3, algebra]

1.3 Clause (iii): raising to the sixth power, $\big(2^{1/2}\big)^{6} = 2^{(1/2)\cdot 6} = 2^{3} = 8$ and $\big(3^{1/3}\big)^{6} = 3^{(1/3)\cdot 6} = 3^{2} = 9$ by [L2] and [L5], and $8 < 9$; since $2^{1/2} \ge 0$ and $3^{1/3} \ge 0$ by [L1], the strict monotonicity of $t \mapsto t^{6}$ on the nonnegatives [L4] turns $8 < 9$ into $2^{1/2} < 3^{1/3}$. [L1, L2, L4, L5, algebra]

2.1 Chaining (i) from step 1.1 and (iii) from step 1.3 gives $2^{1/3} < 2^{1/2} < 3^{1/3}$, and (ii) from step 1.2 records the companion comparison $3^{1/2} > 2^{1/2}$; the three claims together are the displayed order, and only clause (iii) needed the sixth-power device, since no single monotonicity statement compares $2^{1/2}$ with $3^{1/3}$. [step 1.1, step 1.2, step 1.3, L3] ∎
