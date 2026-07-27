---
id: cex-common-divisors-of-zero-have-no-greatest-element
kind: counterexample
title: "The common divisors of $(0,0)$ are all of $\\mathbb{Z}$ and have no greatest element in the order of $\\mathbb{Z}$, so $\\gcd(0,0)$ cannot be defined as a maximum and is fixed by convention"
status: draft
origin: session
deps: [def-divides-in-z, def-common-divisor-and-gcd, cor-common-divisor-divides-gcd, lem-int-bounded-above-has-greatest, def-int-order, thm-int-ordered-ring, thm-int-comm-ring, def-int-operations, lem-nat-embeds-int, def-integers]
justified_by: []
aliases: []
landmark: false
short: "$D(0,0) = \\mathbb{Z}$ has no maximum"
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-28
sources:
  scraped: []
  references:
    - title: "Greatest common divisor (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Greatest_common_divisor"
pipeline_run: null
---

## Statement refuted

**Refuted claim:** for every pair of integers $(a,b)$ the set

$$D(a,b) \;=\; \{\, d \in \mathbb{Z} \;:\; d \mid a \ \text{ and } \ d \mid b \,\}$$

of common divisors has a greatest element, so that $\gcd(a,b)$ can be defined as
that maximum at every pair ([[def-divides-in-z]],
[[def-common-divisor-and-gcd]]).

**Witness:** $(a,b) = (0,0)$. Every integer divides $0$, so
$D(0,0) = \mathbb{Z}$; and $\mathbb{Z}$ has no greatest element, since
$m < m+1$ for every $m$. So there is no maximum to take, and $\gcd(0,0)$ is
fixed by the convention $\gcd(0,0) := 0$ of [[def-common-divisor-and-gcd]]
rather than computed.

This does not contradict [[lem-int-bounded-above-has-greatest]]: that lemma
requires the set to be **bounded above**, and $\mathbb{Z}$ is not.

## Facts & Assumptions

**Given:** The set $D(0,0)$ of common divisors of $0$ and $0$.

[L1] $\mathbb{Z}$ is a commutative ring: $x \cdot 0 = 0$, $x + 0 = x$, $x \cdot 1 = x$, $x \cdot (-1) = -x$, and every $x$ has an additive inverse ([[thm-int-comm-ring]], [[def-int-operations]], [[def-integers]]).

[L2] The order on $\mathbb{Z}$ is total, antisymmetric and transitive and is compatible with addition; positives are closed under multiplication; $x < y$ means $x \le y$ together with $x \ne y$ ([[thm-int-ordered-ring]], [[def-int-order]]).

[L3] $d \mid u$ means $u = dq$ for some $q$; in particular $d \mid 0$ for every $d$, since $0 = d \cdot 0$ ([[def-divides-in-z]]).

[L4] A nonempty set of integers **bounded above** has a greatest element ([[lem-int-bounded-above-has-greatest]]).

[L5] $\iota : \mathbb{N} \to \mathbb{Z}$ is injective with image the nonnegative integers, and $\iota(1) = 1$, $\iota(0) = 0$ ([[lem-nat-embeds-int]]).

[L6] $d = \gcd(u,v)$ exactly when $d \ge 0$, $d \mid u$, $d \mid v$, and every common divisor of $u$ and $v$ divides $d$ ([[cor-common-divisor-divides-gcd]]).

## Counterexample

**Proof technique:** direct.

1.1 $D(0,0) = \mathbb{Z}$: every integer $d$ satisfies $d \mid 0$, so every integer is a common divisor of $0$ and $0$. [L3]

1.2 $0 < 1$: $1 = \iota(1)$ lies in the image of $\iota$, hence $0 \le 1$; and $1 \ne 0$ because $\iota$ is injective and $1 \ne 0$ in $\mathbb{N}$. [L5]

2.1 For every $m \in \mathbb{Z}$, $m < m+1$: adding $m$ to $0 < 1$ gives $m \le m+1$, and $m = m+1$ would give $0 = 1$ after adding $-m$, contrary to step 1.2. [step 1.2, L1, L2]

3.1 $\mathbb{Z}$ has no greatest element: if $m$ were one, then $m + 1 \in \mathbb{Z}$ would give $m+1 \le m$, while $m < m+1$ by step 2.1, contradicting antisymmetry. [step 2.1, L2]

3.2 [L4] is not contradicted, since its hypothesis fails: $\mathbb{Z}$ is not bounded above, because for any candidate bound $b$ the integer $b+1$ exceeds it by step 2.1. [step 2.1, L4]

4.1 By steps 1.1 and 3.1 the set $D(0,0)$ has no greatest element, so the refuted claim fails at $(0,0)$ and no maximum defines $\gcd(0,0)$. [step 1.1, step 3.1]

5.1 What survives at $(0,0)$ is the divisibility characterisation [L6]: $0 \ge 0$, $0 \mid 0$, and every common divisor of $(0,0)$ divides $0$ by [L3], so $0$ is the value that characterisation returns — which is exactly the convention adopted in [[def-common-divisor-and-gcd]]. [step 4.1, L3, L6] ∎

## Remarks

- **The failure is only at $(0,0)$.** For every other pair one of the two
  arguments is nonzero, and then the common divisors are bounded above by its
  absolute value ([[lem-divisor-bound]]), so [[lem-int-bounded-above-has-greatest]]
  applies and the maximum exists.

- **The convention is not a patch over an inconvenience but over an absence.**
  There is no integer that could serve as "the greatest common divisor of $0$ and
  $0$" in the order of $\mathbb{Z}$, so a value has to be supplied; that it is
  $0$ is forced by the identities $\gcd$ is required to satisfy
  ([[ex-gcd-with-zero]]).
