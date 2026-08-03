---
id: ex-integers-are-an-integral-domain-not-a-field
kind: example
title: "$\\mathbb{Z}$ is an integral domain of characteristic $0$ whose group of units is $\\{1,-1\\}$, so it is not a field: $2$ is nonzero and not invertible"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [ex-integers-as-a-commutative-ring, def-zero-divisor-and-integral-domain, lem-ring-units-form-a-group, lem-field-is-a-commutative-ring, def-ring-characteristic, def-field, def-invertible-element, lem-units-of-z, thm-int-comm-ring, thm-int-ordered-ring, lem-int-cancellation, def-integers, def-int-operations, def-int-order, def-group-power, lem-nat-embeds-int, thm-induction-principle, def-nat-addition, def-natural-numbers, def-ring, def-commutative-ring]
justified_by: []
aliases: []
landmark: false
short: "ℤ: domain, char 0, not a field"
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Integral domain (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Integral_domain"
    - title: "Unit (ring theory) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Unit_(ring_theory)"
    - title: "Thomas W. Judson, Abstract Algebra: Theory and Applications, §16.4: Integral Domains and Fields"
      url: "https://math.libretexts.org/Bookshelves/Abstract_and_Geometric_Algebra/Abstract_Algebra%3A_Theory_and_Applications_%28Judson%29/16%3A_Rings/16.04%3A_Integral_Domains_and_Fields"
pipeline_run: null
---

## Example

Let $\mathbb{Z}$ be the integers with the commutative ring structure of
[[ex-integers-as-a-commutative-ring]], and let $2 := 1 + 1$. Then:

1. $\mathbb{Z}$ is an integral domain ([[def-zero-divisor-and-integral-domain]]);
2. $\mathbb{Z}^{\times} = \{1,-1\}$ ([[lem-units-of-z]], with the unit group structure from [[lem-ring-units-form-a-group]]);
3. $2 \ne 0$ and $2 \notin \mathbb{Z}^{\times}$, so $\mathbb{Z}$ is **not** a
   field ([[def-field]]);
4. $\operatorname{char}(\mathbb{Z}) = 0$ ([[def-ring-characteristic]]).

So an integral domain need not be a field: claim 1 with claim 3 is the witness
that the two notions differ.

## Facts & Assumptions

**Given:** The integers $\mathbb{Z}$ with the operations of [[def-int-operations]] and the order of [[def-int-order]], and the numeral $2 := 1 + 1$ ([[def-integers]]).

[L1] $(\mathbb{Z},+,\cdot,0,1)$ is a commutative ring ([[ex-integers-as-a-commutative-ring]], [[def-ring]], [[def-commutative-ring]]).

[L2] If $x, y \in \mathbb{Z}$ are nonzero then $xy \ne 0$ ([[lem-int-cancellation]]).

[L3] $(\mathbb{Z},\cdot,1)$ is a commutative monoid whose group of units is $\{1,-1\}$ ([[lem-units-of-z]], [[def-invertible-element]], [[lem-ring-units-form-a-group]]).

[L4] The order on $\mathbb{Z}$ is total and compatible with addition, and $\mathbb{Z}$ is a commutative ring ([[thm-int-ordered-ring]], [[thm-int-comm-ring]], [[def-int-order]]).

[L5] $\iota : \mathbb{N} \to \mathbb{Z}$, $\iota(n) = [(n,0)]$, is injective and preserves addition, multiplication and order ([[lem-nat-embeds-int]]); the formulas for $0_{\mathbb Z}=[(0,0)]$ and $1_{\mathbb Z}=[(1,0)]$ give $\iota(0)=0$ and $\iota(1)=1$ ([[def-int-operations]]).

[L6] Induction on $\mathbb{N}$, and $n + 1 = \sigma(n)$ on $\mathbb{N}$ ([[thm-induction-principle]], [[def-nat-addition]], [[def-natural-numbers]]).

[L7] The additive multiples in a ring satisfy $0 \cdot 1 = 0$ and $\sigma(n) \cdot 1 = n \cdot 1 + 1$ for $n \in \mathbb{N}$ ([[def-group-power]]).

[L8] $\operatorname{char}(R)$ is the least $n \ge 1$ with $n \cdot 1_R = 0_R$, or $0$ if there is none ([[def-ring-characteristic]]); a field is a commutative ring in which every nonzero element is a unit ([[lem-field-is-a-commutative-ring]], [[def-field]]).

## Verification

**Proof technique:** direct.

1.1 Claim 1: $\mathbb{Z}$ is a commutative ring by [L1]; $1 \ne 0$, since $1 = \iota(1)$, $0 = \iota(0)$ and $\iota$ is injective while $1 \ne 0$ in $\mathbb{N}$; and $\mathbb{Z}$ has no zero divisors by [L2]. So $\mathbb{Z}$ is an integral domain. [L1, L2, L5]

1.2 Claim 2 is [L3]: the multiplicative monoid of the ring $\mathbb{Z}$ is $(\mathbb{Z},\cdot,1)$, and its group of units is $\{1,-1\}$. [L1, L3]

1.3 $0 < 1 < 2$: $1 = \iota(1)$ lies in the image of $\iota$, so $0 \le 1$, and $1 \ne 0$ by injectivity of $\iota$; adding $1$ to $0 < 1$ gives $1 < 1 + 1 = 2$. [L4, L5]

1.4 The map $n \mapsto n \cdot 1$ from $\mathbb{N}$ to $\mathbb{Z}$ is $\iota$. Both send $0$ to $0$, since $0 \cdot 1 = 0$ and $\iota(0) = 0$; and if $n \cdot 1 = \iota(n)$ then $\sigma(n)\cdot 1 = n \cdot 1 + 1 = \iota(n) + \iota(1) = \iota(n+1) = \iota(\sigma(n))$, because $\iota$ preserves addition. Induction on $\mathbb{N}$ gives the claim. [L5, L6, L7]

2.1 Claim 3: by step 1.3, $0 < 1 < 2$, so $2 \ne 0$ and $2 \ne 1$; and $-1 < 0 < 2$ by adding $-1$ to $0 < 1$ and using transitivity, so $2 \ne -1$. Hence $2 \notin \{1,-1\} = \mathbb{Z}^{\times}$ by step 1.2. A field has every nonzero element a unit, so $\mathbb{Z}$ is not a field. [step 1.2, step 1.3, L4, L8]

2.2 Claim 4: for $n \in \mathbb{N}$ with $n \ge 1$ we have $n \cdot 1 = \iota(n)$ by step 1.4, and $\iota(n) \ne \iota(0) = 0$ because $\iota$ is injective and $n \ne 0$. So no $n \ge 1$ satisfies $n \cdot 1 = 0$, and $\operatorname{char}(\mathbb{Z}) = 0$. [step 1.4, L5, L8]

3.1 Claims 1 to 4 are established in steps 1.1, 1.2, 2.1 and 2.2. [step 1.1, step 1.2, step 2.1, step 2.2] ∎

## Remarks

- **This is the standard witness that "integral domain" is strictly weaker than "field".** $\mathbb{Z}$ satisfies every clause of [[def-zero-divisor-and-integral-domain]] and fails the one extra clause a field asks for. The gap is exactly the failure of $2$ to be invertible, and [[lem-units-of-z]] is what pins the units down.

- **Characteristic $0$ and infinite additive order are the same statement here.** By [[lem-characteristic-and-additive-order]] the characteristic is the additive order of $1$, so claim 4 says that $1$ has infinite additive order in $(\mathbb{Z},+)$; and since $\mathbb{Z}$ is a domain, the same lemma says every nonzero integer has infinite additive order too.

- **The units are read off [[lem-units-of-z]], not off the order.** That lemma proves $\mathbb{Z}^{\times} = \{1,-1\}$ from the divisibility relation and the bound on divisors; nothing on this page reproves it, and no group-theoretic example page is cited for it.
