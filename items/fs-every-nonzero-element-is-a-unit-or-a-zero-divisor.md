---
id: fs-every-nonzero-element-is-a-unit-or-a-zero-divisor
kind: false-statement
title: "FALSE: In every commutative ring, each nonzero element is either a unit or a zero divisor"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-ring, def-commutative-ring, def-zero-divisor-and-integral-domain, lem-ring-units-form-a-group, def-invertible-element, lem-units-of-z, lem-int-cancellation, thm-subset-of-a-finite-set, ex-integers-as-a-commutative-ring, thm-int-comm-ring, thm-int-ordered-ring, def-int-order, def-integers, def-int-operations, lem-nat-embeds-int, def-nat-order, def-nat-addition]
justified_by: []
aliases: []
landmark: false
short: "FALSE: unit or zero divisor"
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Zero divisor (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Zero_divisor"
    - title: "Unit (ring theory) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Unit_(ring_theory)"
    - title: "Integral domain (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Integral_domain"
pipeline_run: null
---

## Statement

**False claim:** in every commutative ring $R$ ([[def-commutative-ring]]), every
$a \in R$ with $a \ne 0$ is either a unit of $R$
([[lem-ring-units-form-a-group]]) or a zero divisor
([[def-zero-divisor-and-integral-domain]]).

The integers refute it. With $2 := 1 + 1$ in $\mathbb{Z}$, the element $2$ is
nonzero, is not a unit, and is not a zero divisor.

## Facts & Assumptions

**Given:** The commutative ring $\mathbb{Z}$ with the operations of [[def-int-operations]] and the order of [[def-int-order]], and the numeral $2 = 1 + 1$ ([[ex-integers-as-a-commutative-ring]], [[def-integers]]).

[L1] $\mathbb{Z}$ is a commutative ring ([[ex-integers-as-a-commutative-ring]], [[thm-int-comm-ring]], [[def-ring]], [[def-commutative-ring]]).

[L2] $\mathbb{Z}^{\times} = \{1,-1\}$ ([[lem-units-of-z]], [[lem-ring-units-form-a-group]], [[def-invertible-element]]).

[L3] If $x, y \in \mathbb{Z}$ are nonzero then $xy \ne 0$ ([[lem-int-cancellation]]).

[L4] The order on $\mathbb{Z}$ is total and compatible with addition; $\iota : \mathbb{N} \to \mathbb{Z}$ is injective and order preserving with $\iota(0) = 0$ and $\iota(1) = 1$. Since $0+1=1$ in $\mathbb N$, one has $0\le1$ there and hence $\iota(0)\le\iota(1)$ ([[thm-int-ordered-ring]], [[def-int-order]], [[lem-nat-embeds-int]], [[def-nat-order]], [[def-nat-addition]]).

[L5] $a$ is a zero divisor when $a \ne 0$ and $ab = 0$ or $ba = 0$ for some $b \ne 0$ ([[def-zero-divisor-and-integral-domain]]).

[L6] The refuted claim: in every commutative ring, every nonzero element is a unit or a zero divisor.

## Refutation

**Proof technique:** direct.

1.1 $0 < 1 < 2$ and $-1 < 0$ in $\mathbb{Z}$: $1 = \iota(1)$ is nonnegative and differs from $0 = \iota(0)$ because $\iota$ is injective, so $0 < 1$; adding $1$ gives $1 < 2$; adding $-1$ to $0 < 1$ gives $-1 < 0$. In particular $2 \ne 0$, $2 \ne 1$ and $2 \ne -1$. [L4]

2.1 $2$ is not a unit of $\mathbb{Z}$: by [L2] the units are $1$ and $-1$, and $2$ is neither, by step 1.1. [step 1.1, L2]

2.2 $2$ is not a zero divisor of $\mathbb{Z}$: if $2b = 0$ with $b \ne 0$, then $2 \ne 0$ by step 1.1 and $b \ne 0$ give $2b \ne 0$ by [L3], a contradiction; and $b \cdot 2 = 2b$ by commutativity. So no such $b$ exists. [step 1.1, L1, L3, L5]

3.1 $\mathbb{Z}$ is a commutative ring by [L1], and by step 1.1 the element $2$ is nonzero, while by steps 2.1 and 2.2 it is neither a unit nor a zero divisor. So the claim of [L6] is false. [step 1.1, step 2.1, step 2.2, L1, L6] ∎

## Remarks

- **What the claim is confusing it with.** In an integral domain every nonzero element is a non-zero-divisor, and the claim would follow if every nonzero non-zero-divisor were a unit. That last implication is what $\mathbb{Z}$ refutes: $2$ cancels, by [[lem-int-cancellation]], and is still not invertible.

- **The claim becomes true under a finiteness hypothesis, which it does not make.** If $R$ is a commutative ring and $a \ne 0$, consider $x \mapsto ax$. If it is injective and $R$ is finite, it is surjective by [[thm-subset-of-a-finite-set]], so $ax = 1$ for some $x$ and $a$ is a unit; if it is not injective, then $ax = ay$ with $x \ne y$ gives $a(x-y) = 0$ with $x - y \ne 0$, so $a$ is a zero divisor. The hypothesis that $R$ is finite is exactly what $\mathbb{Z}$ fails, and the statement above assumes nothing of the kind. This paragraph applies the cited finite-set theorem as an observation about the claim; it is not part of the refutation.

- **The witness is $2$, not $0$.** Under the convention of [[def-zero-divisor-and-integral-domain]] the element $0$ is not a zero divisor, so a claim quantified over nonzero elements is not vacuously repaired by looking at $0$; the refutation has to exhibit a genuine nonzero element, and it does.
