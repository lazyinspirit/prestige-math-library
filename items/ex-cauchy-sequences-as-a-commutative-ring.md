---
id: ex-cauchy-sequences-as-a-commutative-ring
kind: example
title: "The Cauchy sequences of rationals form a commutative ring that is not an integral domain: two eventually-constant sequences with disjoint supports multiply to zero"
status: published
origin: session
deps: [def-ring, def-commutative-ring, def-zero-divisor-and-integral-domain, lem-ring-elementary-consequences, def-subring, lem-subring-criterion, def-ring-of-functions, thm-cauchy-ring, def-rational-cauchy-sequence, thm-rat-field, def-natural-numbers, def-nat-order]
justified_by: []
aliases: []
landmark: false
short: "𝒞 is not a domain"
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-28
  audited: 2026-07-28
sources:
  scraped: []
  references:
    - title: "Cauchy sequence (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Cauchy_sequence"
    - title: "Zero divisor (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Zero_divisor"
pipeline_run: null
---

## Example

Let $X := \{\, n \in \mathbb{N} : n \ge 1 \,\}$ ([[def-natural-numbers]],
[[def-nat-order]]) and let $\mathcal{C}$ be the set of Cauchy sequences of
rationals, that is, the set of those functions $X \to \mathbb{Q}$ that satisfy
the condition of [[def-rational-cauchy-sequence]]; that definition indexes its
sequences $(a_n)_{n \ge 1}$, so $X$, and not $\mathbb{N}$, is the index set.
Give $\mathcal{C}$ the termwise operations and the constant sequences $0$ and
$1$. Then:

1. $\mathcal{C}$ is a commutative ring in the sense of [[def-ring]] and
   [[def-commutative-ring]], with $1 \ne 0$;
2. $\mathcal{C}$ is a subring ([[def-subring]]) of the ring
   $\mathbb{Q}^{X}$ of **all** functions $X \to \mathbb{Q}$ with pointwise
   operations ([[def-ring-of-functions]]);
3. $\mathcal{C}$ is **not** an integral domain
   ([[def-zero-divisor-and-integral-domain]]): the sequences

   $$a = (1,0,0,0,\dots), \qquad b = (0,1,1,1,\dots)$$

   defined by $a_1 = 1$, $a_n = 0$ for $n \ge 2$, and $b_1 = 0$, $b_n = 1$ for
   $n \ge 2$, are both Cauchy, both nonzero, and satisfy $ab = 0$; so each is a
   zero divisor.

## Facts & Assumptions

**Given:** $X = \{\, n \in \mathbb{N} : n \ge 1 \,\}$; the set $\mathcal{C}$ of functions $X \to \mathbb{Q}$ that are Cauchy in the sense of [[def-rational-cauchy-sequence]]; termwise addition and multiplication; and the constant sequences $0$ and $1$.

[L1] $\mathcal{C}$ with termwise addition and multiplication and the constant sequences $0$ and $1$ is a commutative ring with identity ([[thm-cauchy-ring]]).

[L2] $\mathbb{Q}$ is a field; in particular $1 \ne 0$ in $\mathbb{Q}$ and $\mathbb{Q}$ is a commutative ring ([[thm-rat-field]], [[def-ring]], [[def-commutative-ring]]).

[L3] For a set $Y$ and a ring $R$, the set $R^{Y}$ of all functions $Y \to R$ with pointwise operations and the constant functions $0_R$, $1_R$ is a ring, commutative when $R$ is ([[def-ring-of-functions]]).

[L4] Subring criterion: $S \subseteq R$ is a subring exactly when $1_R \in S$, and $u - v \in S$ and $uv \in S$ for all $u, v \in S$ ([[lem-subring-criterion]], [[def-subring]]).

[L5] A sequence $(c_n)_{n \ge 1}$ of rationals is Cauchy when for every rational $\varepsilon > 0$ there is $N \in \mathbb{N}$ with $|c_m - c_n| < \varepsilon$ for all $m, n \ge N$ ([[def-rational-cauchy-sequence]]).

[L6] $0 \cdot t = t \cdot 0 = 0$ in any ring ([[lem-ring-elementary-consequences]]).

[L7] $a$ is a zero divisor when $a \ne 0$ and $ab = 0$ for some $b \ne 0$; an integral domain is a commutative ring with $1 \ne 0$ and no zero divisors ([[def-zero-divisor-and-integral-domain]]).

## Verification

**Proof technique:** direct.

1.1 Claim 1: [L1] states exactly that $\mathcal{C}$, with these operations and these two constant sequences, is a commutative ring with identity, so all of (R1), (R2), (R3) and commutativity hold. And $1 \ne 0$ in $\mathcal{C}$, since the two constant sequences differ at the index $1$, where $1 \ne 0$ in $\mathbb{Q}$. [L1, L2]

1.2 $\mathbb{Q}^{X}$ is a commutative ring by [L3] with $Y = X$ and $R = \mathbb{Q}$, its operations being pointwise, which on functions $X \to \mathbb{Q}$ is termwise. [L2, L3]

1.3 Any eventually constant sequence is Cauchy: if $c_n = c$ for all $n \ge N_0$, then for any rational $\varepsilon > 0$ and all $m, n \ge N_0$ we have $|c_m - c_n| = |c - c| = 0 < \varepsilon$. In particular $a$, $b$ and the constant sequences $0$ and $1$ lie in $\mathcal{C}$. [L2, L5, given]

1.4 $ab = 0$: at the index $1$ the product is $a_1 b_1 = 1 \cdot 0 = 0$, and at every index $n \ge 2$ it is $a_n b_n = 0 \cdot 1 = 0$; every index of $X$ is $1$ or is $\ge 2$. [L2, L6, given]

2.1 Claim 2: $\mathcal{C} \subseteq \mathbb{Q}^{X}$, the identity of $\mathbb{Q}^{X}$ is the constant sequence $1$, which lies in $\mathcal{C}$ by step 1.3, and $\mathcal{C}$ is closed under termwise subtraction and multiplication because it is a ring under those operations by [L1] and they are the operations of $\mathbb{Q}^{X}$ by step 1.2. So the criterion [L4] applies. [step 1.2, step 1.3, L1, L4]

2.2 $a \ne 0$ and $b \ne 0$ in $\mathcal{C}$: $a_1 = 1 \ne 0$ and $b_2 = 1 \ne 0$ in $\mathbb{Q}$, and two sequences are equal exactly when they agree at every index. [step 1.3, L2, given]

3.1 Claim 3: by steps 2.2 and 1.4 the element $a$ is nonzero and $ab = 0$ with $b$ nonzero, so $a$ is a zero divisor, and symmetrically so is $b$. Hence $\mathcal{C}$ has zero divisors and is not an integral domain, although by step 1.1 it is a commutative ring with $1 \ne 0$. [step 1.1, step 2.2, step 1.4, L7] ∎

## Remarks

- **The index set is stated because it is not $\mathbb{N}$.**
  [[def-rational-cauchy-sequence]] indexes its sequences from $n = 1$, while
  [[def-ring-of-functions]] takes an arbitrary index set; the ambient ring in
  claim 2 is therefore $\mathbb{Q}^{X}$ with $X = \{\, n \in \mathbb{N} : n \ge 1 \,\}$,
  not $\mathbb{Q}^{\mathbb{N}}$. Since $\mathbb{N}$ contains $0$
  ([[def-natural-numbers]]) the two are different sets of functions, and the
  subring claim would be false as stated about the second.

- **Why this matters for the construction of $\mathbb{R}$.** The real numbers are
  defined as the quotient $\mathcal{C}/\mathcal{N}$ by the null sequences
  ([[def-real-numbers]]), and [[thm-reals-field]] proves that quotient is a
  field. The present example shows the field property cannot come from
  $\mathcal{C}$ alone: $\mathcal{C}$ is not even a domain. What
  [[thm-reals-field]] actually uses is [[lem-null-maximal]], a property of
  $\mathcal{N}$ inside $\mathcal{C}$. The two zero divisors above cause no
  trouble in the quotient: $a$ is a null sequence ([[def-null-sequence]]), so its
  class is $0$, and $b$ differs from the constant sequence $1$ by a null
  sequence, so its class is $1$.

- **The witnesses are chosen to keep the verification short.** Both are
  eventually constant, hence Cauchy with no $\varepsilon$ bookkeeping, and their
  supports are disjoint, which makes the product zero at every index.
