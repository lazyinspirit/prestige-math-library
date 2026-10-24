---
id: ex-rational-power-computations-of-rational-bases
kind: example
title: "Rational powers of rational bases computed from the definition"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-rational-power, lem-rational-power-well-defined, lem-rational-power-laws, thm-nth-roots-exist, lem-power-laws, def-integer-power, def-rationals, lem-of-inverse-unique]
justified_by: []
aliases: []
landmark: false
dependency_level: 7
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-11
sources:
  scraped: []
  references:
    - title: "Jiří Lebl, Basic Analysis I: Introduction to Real Analysis, Volume I, version 6.3, 15 May 2026 (author-hosted complete book)"
      url: "https://www.jirka.org/ra/realanal.pdf"
      locator: "Chapter 4 §4.4, Corollary 4.4.3 and its convention x^{m/n} = (x^{1/n})^m, printed pp. 177-178"
---

## Example

In $\mathbb{R}$, with the rational powers of [[def-rational-power]]:

$$(4/9)^{1/2} = 2/3, \qquad (8/27)^{1/3} = 2/3, \qquad (4/9)^{3/2} = 8/27, \qquad (27/8)^{-2/3} = 4/9,$$

and $8^{2/6} = 8^{1/3} = 2$, one value produced from either representative of
the rational $1/3 = 2/6$. Every base occurring is a positive rational and every
exponent a rational with numerator an integer and denominator a natural
$\ge 1$, so the definition applies in each case; the last display is the
instance of [[lem-rational-power-well-defined]] that [[def-rational-power]]
records in its `justified_by`. The item also checks the negative-exponent and
non-coprime-representative cases, the two places where the definition is most
easily misread.

## Facts & Assumptions

**Given:** The rational powers of [[def-rational-power]], used at the displayed rational exponents.

[L1] Definition ([[def-rational-power]]): for $a > 0$ and $r = m/n$ with $m \in \mathbb{Z}$ and $n$ a natural $\ge 1$, $a^{r} = \big(a^{1/n}\big)^{m}$, and $0^{r} = 0$ for rational $r > 0$.

[L2] Well-definedness ([[lem-rational-power-well-defined]]): the value $\big(a^{1/n}\big)^{m}$ depends only on the rational $m/n$, not on the representative.

[L3] Roots ([[thm-nth-roots-exist]]): every $c \ge 0$ has a unique $c^{1/n} \ge 0$ with $\big(c^{1/n}\big)^{n} = c$, and $c^{1/n} > 0$ for $c > 0$; in particular $c^{1/1} = c$.

[L4] Integer powers and their laws ([[def-integer-power]], [[lem-power-laws]]): $x^{0} = 1$, $x^{j+1} = x^{j}x$, $(uv)^{n} = u^{n}v^{n}$ for naturals $n$, and $x^{-j} = \big(x^{j}\big)^{-1}$ for $j \ge 1$ and $x \ne 0$.

[L5] Rationals ([[def-rationals]]): a rational is an equivalence class of pairs, and equality $m/n = p/q$ holds exactly when $mq = pn$ in $\mathbb{Z}$; since $2\cdot 3 = 1\cdot 6$ this gives $2/6 = 1/3$.

[L6] Uniqueness of inverses ([[lem-of-inverse-unique]]): a nonzero element of a field has exactly one multiplicative inverse, so an element whose product with a given one is $1$ is that inverse.

## Verification

**Proof technique:** direct.

1.1 The two-thirds roots: field arithmetic gives $(2/3)^{2} = 4/9$ and $(2/3)^{3} = 8/27$ with $2/3 \ge 0$, so the uniqueness in [L3] gives $\big(4/9\big)^{1/2} = 2/3$, read at the representative $1/2$, and $\big(8/27\big)^{1/3} = 2/3$, read at the representative $1/3$. [L1, L3, algebra]

1.2 The non-coprime representative: $2^{3} = 8$ with $2 \ge 0$ gives $8^{1/3} = 2$ by [L3], and $2/6 = 1/3$ as rationals by [L5] (both are the rational with $2\cdot 3 = 1\cdot 6$), so well-definedness [L2] gives $8^{2/6} = 8^{1/3} = 2$: the same value from either representative of $1/3$. [L2, L3, L5, algebra]

2.1 The exponent $3/2$: by the definition [L1] at the representative $3/2$ and the value of step 1.1, $(4/9)^{3/2} = \big((4/9)^{1/2}\big)^{3} = (2/3)^{3} = 8/27$ by [L4] and field arithmetic. [step 1.1, L1, L4, algebra]

2.2 The negative exponent $-2/3$: $(3/2)^{3} = 27/8$ with $3/2 \ge 0$ gives $(27/8)^{1/3} = 3/2$ by the same uniqueness argument as step 1.1, so the definition at the representative $-2/3$ and the negative-exponent clause of [L4] give $(27/8)^{-2/3} = \big((27/8)^{1/3}\big)^{-2} = (3/2)^{-2} = \big((3/2)^{2}\big)^{-1} = (9/4)^{-1} = 4/9$, the last equality because $(9/4)(4/9) = 1$ and inverses are unique by [L6]. [step 1.1, L1, L3, L4, L6, algebra]

3.1 All four displays are therefore verified from the definition: the first two by uniqueness of the nonnegative roots (step 1.1), the third by the definition at the representative $3/2$ (step 2.1), the fourth by the definition at the negative representative $-2/3$ together with the negative-exponent clause of the integer powers (step 2.2), and the fifth by well-definedness across the two representatives of $1/3$ (step 1.2); every base used is positive, so no clause of [L1] is applied outside its hypotheses. [step 1.1, step 1.2, step 2.1, step 2.2, L1, L2] ∎
