---
id: cex-2z-is-not-a-subring
kind: counterexample
title: "$2\\mathbb{Z}$ is closed under addition, negation and multiplication and is not a subring of $\\mathbb{Z}$, because it does not contain $1$"
status: draft
origin: session
deps: [def-subring, lem-subring-criterion, def-ring, def-subgroup, def-divides-in-z, lem-divisibility-basic, lem-units-of-z, ex-integers-as-a-commutative-ring, thm-int-comm-ring, thm-int-ordered-ring, def-integers, def-int-operations, def-int-order, lem-nat-embeds-int, def-invertible-element]
justified_by: []
aliases: []
landmark: false
short: "$2\\mathbb{Z}$ is not a subring"
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
    - title: "Subring (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Subring"
    - title: "Rng (algebra) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Rng_(algebra)"
pipeline_run: null
---

## Statement refuted

**False claim:** if $S$ is a subset of a ring $R$ that contains $0_R$ and is
closed under addition, under additive inverses and under multiplication, then
$S$ is a subring of $R$ ([[def-subring]]).

The even integers refute it. Let $2 := 1 + 1$ in $\mathbb{Z}$ and

$$2\mathbb{Z} \;:=\; \{\, x \in \mathbb{Z} \;:\; 2 \mid x \,\} \;=\; \{\, 2k : k \in \mathbb{Z} \,\},$$

divisibility being the relation of [[def-divides-in-z]]. This set contains $0$,
is closed under addition, additive inverses and multiplication, and does not
contain $1$; so it fails clause (T1) of [[def-subring]] and is not a subring of
$\mathbb{Z}$.

## Facts & Assumptions

**Given:** The commutative ring $\mathbb{Z}$, the numeral $2 = 1 + 1$, and the set $2\mathbb{Z} = \{\, x \in \mathbb{Z} : 2 \mid x \,\}$ ([[ex-integers-as-a-commutative-ring]], [[def-divides-in-z]]).

[L1] $\mathbb{Z}$ is a commutative ring with the operations of [[def-int-operations]] ([[ex-integers-as-a-commutative-ring]], [[thm-int-comm-ring]], [[def-ring]]).

[L2] $d \mid a$ means $a = dq$ for some $q \in \mathbb{Z}$, and $d \mid 0$ for every $d$ ([[def-divides-in-z]]).

[L3] Divisibility is linear: if $d \mid a$ and $d \mid b$ then $d \mid ax + by$ for all $x, y \in \mathbb{Z}$; and $d \mid a$ implies $d \mid ac$ and $d \mid -a$ ([[lem-divisibility-basic]]).

[L4] $u \mid 1$ holds exactly for $u = 1$ and $u = -1$; equivalently $\mathbb{Z}^{\times} = \{1,-1\}$ ([[lem-units-of-z]], [[def-invertible-element]]).

[L5] The order on $\mathbb{Z}$ is total and compatible with addition, and $\iota : \mathbb{N} \to \mathbb{Z}$ is injective and order preserving with $\iota(0) = 0$, $\iota(1) = 1$ ([[thm-int-ordered-ring]], [[def-int-order]], [[lem-nat-embeds-int]], [[def-integers]]).

[L6] A subring must satisfy (T1) $1_R \in S$, (T2) closure under addition, (T3) closure under additive inverses and (T4) closure under multiplication ([[def-subring]]); equivalently $1_R \in S$ together with $a - b \in S$ and $ab \in S$ ([[lem-subring-criterion]]).

[L7] A subgroup of an abelian group is a subset containing the identity and closed under the operation and under inverses ([[def-subgroup]]).

[L8] The refuted claim: a subset of a ring containing $0$ and closed under addition, additive inverses and multiplication is a subring.

## Counterexample

**Proof technique:** direct.

1.1 $0 \in 2\mathbb{Z}$, since $2 \mid 0$ by [L2]. [L2]

1.2 $2\mathbb{Z}$ is closed under multiplication: if $2 \mid a$ then $2 \mid ab$ for every $b \in \mathbb{Z}$, by [L3]. [L3]

1.3 $0 < 1 < 2$ and $-1 < 0$ in $\mathbb{Z}$: $1 = \iota(1)$ is nonnegative and differs from $0 = \iota(0)$ because $\iota$ is injective, so $0 < 1$; adding $1$ gives $1 < 2$; and adding $-1$ to $0 < 1$ gives $-1 < 0$. Hence $2 \ne 1$ and $2 \ne -1$. [L5]

2.1 $2\mathbb{Z}$ is closed under addition and under additive inverses: if $2 \mid a$ and $2 \mid b$ then $2 \mid a \cdot 1 + b \cdot 1 = a + b$ by the linearity of [L3], and $2 \mid -a$ by [L3]. So $2\mathbb{Z}$ is a subgroup of $(\mathbb{Z},+,0)$ in the sense of [L7]. [step 1.1, L1, L3, L7]

2.2 $1 \notin 2\mathbb{Z}$: if $2 \mid 1$ then $2 \in \{1,-1\}$ by [L4], contradicting step 1.3. [step 1.3, L2, L4]

3.1 By steps 1.1, 2.1 and 1.2 the set $2\mathbb{Z}$ contains $0$ and is closed under addition, additive inverses and multiplication; by step 2.2 it does not contain $1 = 1_{\mathbb{Z}}$, so clause (T1) of [L6] fails and $2\mathbb{Z}$ is not a subring of $\mathbb{Z}$. The claim of [L8] is therefore false. [step 1.1, step 2.1, step 1.2, step 2.2, L6, L8] ∎

## Remarks

- **What $2\mathbb{Z}$ is, since it is not a subring.** It is a subgroup of
  $(\mathbb{Z},+,0)$ closed under multiplication, and with the restricted
  operations it satisfies every clause of [[def-ring]] except the existence of a
  multiplicative identity. Such a structure is called a **non-unital ring** in
  this library, and it is not called a ring, by the convention fixed in
  [[def-ring]].

- **This is why the subring criterion tests $1_R \in S$ separately.**
  [[lem-subring-criterion]] compresses the three additive and multiplicative
  closure conditions into "$a - b \in S$ and $ab \in S$" but leaves
  $1_R \in S$ standing on its own, and the present witness is the reason: no
  amount of closure implies it.

- **$2\mathbb{Z}$ has no identity at all**, not merely a different one. If
  $e \in 2\mathbb{Z}$ satisfied $ex = x$ for every $x \in 2\mathbb{Z}$, then
  taking $x = 2$ gives $2e = 2 = 2 \cdot 1$, so $e = 1$ by multiplicative cancellation in $\mathbb{Z}$ ([[lem-int-cancellation]]),
  which is not in $2\mathbb{Z}$ by the argument above.
