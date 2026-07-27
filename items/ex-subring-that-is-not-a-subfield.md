---
id: ex-subring-that-is-not-a-subfield
kind: example
title: "$\\mathbb{Z}$ sits inside $\\mathbb{Q}$ as a subring that is not a subfield, so the inverse-closure clause of the subfield definition is doing work"
status: published
origin: session
deps: [def-subring, lem-subring-criterion, def-subfield, def-ring, def-commutative-ring, def-field, def-invertible-element, lem-ring-units-form-a-group, lem-units-of-z, lem-int-embeds-rat, ex-rationals-and-reals-as-fields, ex-integers-as-a-commutative-ring, thm-rat-field, thm-int-comm-ring, thm-int-ordered-ring, def-int-order, def-integers, lem-nat-embeds-int, lem-field-is-a-commutative-ring]
justified_by: []
aliases: []
landmark: false
short: "ℤ inside ℚ: subring, not subfield"
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
    - title: "Subring (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Subring"
    - title: "Field (mathematics) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Field_(mathematics)#Subfields"
pipeline_run: null
---

## Example

The integers are not literally a subset of the rationals in this library:
$\mathbb{Q}$ is a set of equivalence classes of pairs of integers, so
"$\mathbb{Z}$ inside $\mathbb{Q}$" means the image of the embedding
$j : \mathbb{Z} \to \mathbb{Q}$, $j(k) = [(k,1)]$, of [[lem-int-embeds-rat]].
Write $K := j(\mathbb{Z}) \subseteq \mathbb{Q}$ and let $2 := 1 + 1$ in
$\mathbb{Z}$. Then:

1. $K$ is a subring of the ring $\mathbb{Q}$ ([[def-subring]]);
2. $K$ is **not** a subfield of $\mathbb{Q}$ ([[def-subfield]]): the element
   $j(2)$ is a nonzero member of $K$ whose inverse in $\mathbb{Q}$ does not lie
   in $K$;
3. so the inverse-closure clause (K2) of [[def-subfield]] is not implied by
   being a subring.

## Facts & Assumptions

**Given:** The embedding $j : \mathbb{Z} \to \mathbb{Q}$, $j(k) = [(k,1)]$, and $K = j(\mathbb{Z})$; the numeral $2 = 1 + 1$ in $\mathbb{Z}$ ([[def-integers]]).

[L1] $j$ is injective and preserves addition and multiplication; composing with the embedding of $\mathbb{N}$ it also preserves order ([[lem-int-embeds-rat]]).

[L2] $\mathbb{Q}$ is a field, hence a commutative ring, with $1_{\mathbb{Q}} \ne 0_{\mathbb{Q}}$ ([[ex-rationals-and-reals-as-fields]], [[thm-rat-field]], [[def-field]], [[lem-field-is-a-commutative-ring]], [[def-ring]], [[def-commutative-ring]]).

[L3] $\mathbb{Z}$ is a commutative ring; its order is total and compatible with addition ([[ex-integers-as-a-commutative-ring]], [[thm-int-comm-ring]], [[thm-int-ordered-ring]], [[def-int-order]]).

[L4] Cancellation in the additive group of $\mathbb{Q}$, and: in a field, $x \cdot x = x$ with $x \ne 0$ forces $x = 1$, since multiplying by $x^{-1}$ gives $x = 1$ ([[def-field]], [[lem-field-is-a-commutative-ring]]).

[L5] Subring criterion: $S \subseteq R$ is a subring exactly when $1_R \in S$ and $u - v \in S$ and $uv \in S$ for all $u, v \in S$ ([[lem-subring-criterion]], [[def-subring]]).

[L6] A subfield of a field $F$ is a subring closed under the inverses of its nonzero elements ([[def-subfield]]).

[L7] The group of units of $\mathbb{Z}$ is $\{1,-1\}$ ([[lem-units-of-z]], [[lem-ring-units-form-a-group]], [[def-invertible-element]]).

[L8] $\iota : \mathbb{N} \to \mathbb{Z}$ is injective and order preserving with $\iota(0) = 0$, $\iota(1) = 1$ ([[lem-nat-embeds-int]]).

## Verification

**Proof technique:** direct.

1.1 $j(0_{\mathbb{Z}}) = 0_{\mathbb{Q}}$ and $j(1_{\mathbb{Z}}) = 1_{\mathbb{Q}}$. The first: $j(0) + j(0) = j(0+0) = j(0) = j(0) + 0_{\mathbb{Q}}$, and cancelling $j(0)$ gives $j(0) = 0_{\mathbb{Q}}$. The second: $j(1)j(1) = j(1 \cdot 1) = j(1)$, and $j(1) \ne 0_{\mathbb{Q}}$ because $1_{\mathbb{Z}} \ne 0_{\mathbb{Z}}$ and $j$ is injective with $j(0_{\mathbb{Z}}) = 0_{\mathbb{Q}}$; so $j(1) = 1_{\mathbb{Q}}$. Consequently $j(-b) = -j(b)$ for every $b$, since $j(b) + j(-b) = j(0) = 0_{\mathbb{Q}}$. [L1, L2, L3, L4, L8]

1.2 $0 < 1 < 2$ in $\mathbb{Z}$, and $-1 < 0$: the first because $1 = \iota(1)$ is nonnegative and $1 \ne 0$ by injectivity of $\iota$, the second by adding $1$ to $0 < 1$, and the third by adding $-1$ to $0 < 1$. Hence $2 \ne 0$, $2 \ne 1$ and $2 \ne -1$, so $2 \notin \mathbb{Z}^{\times}$ by [L7]. [L3, L7, L8]

2.1 $1_{\mathbb{Q}} = j(1_{\mathbb{Z}}) \in K$ by step 1.1; and for $u = j(a)$, $v = j(b)$ in $K$ we have $u - v = j(a) + (-j(b)) = j(a) + j(-b) = j(a-b) \in K$ and $uv = j(a)j(b) = j(ab) \in K$. So $K$ is a subring of $\mathbb{Q}$ by [L5]. This is claim 1. [step 1.1, L1, L2, L5]

2.2 $j(2) \ne 0_{\mathbb{Q}}$: by step 1.2, $2 \ne 0_{\mathbb{Z}}$, and $j$ is injective with $j(0_{\mathbb{Z}}) = 0_{\mathbb{Q}}$ by step 1.1. So $j(2)$ has an inverse $j(2)^{-1}$ in the field $\mathbb{Q}$. [step 1.1, step 1.2, L1, L2]

3.1 $j(2)^{-1} \notin K$. Suppose it were, say $j(2)^{-1} = j(m)$ for some $m \in \mathbb{Z}$. Then $j(2m) = j(2)j(m) = 1_{\mathbb{Q}} = j(1_{\mathbb{Z}})$, so $2m = 1_{\mathbb{Z}}$ by injectivity of $j$; that makes $2$ a unit of $\mathbb{Z}$, contradicting step 1.2. [step 1.1, step 1.2, step 2.2, L1, L7]

4.1 Claims 2 and 3: by claim 1 the set $K$ is a subring of $\mathbb{Q}$, and by steps 2.2 and 3.1 it contains a nonzero element whose inverse in $\mathbb{Q}$ is not in $K$; so (K2) of [L6] fails and $K$ is not a subfield. Since $K$ satisfies (K1), the clause (K2) is not implied by (K1). [step 2.1, step 2.2, step 3.1, L6] ∎

## Remarks

- **The example is about an image, not a subset.** [[lem-int-embeds-rat]] is what
  makes "$\mathbb{Z}$ inside $\mathbb{Q}$" meaningful, since an integer and a
  rational are different kinds of object in this library. Every claim above is
  about $K = j(\mathbb{Z})$, and $j$ being injective and operation-preserving is
  what lets facts about $\mathbb{Z}$, in particular
  [[lem-units-of-z]], be used about $K$.

- **A subring of a field is automatically an integral domain**, since it is a
  commutative ring with $1 \ne 0$ inheriting the absence of zero divisors from
  the field. So $K$ is a domain and not a field, which is the same phenomenon as
  [[ex-integers-are-an-integral-domain-not-a-field]] seen inside $\mathbb{Q}$.

- **One witness is enough.** [[def-subfield]] asks that *every* nonzero element
  of $K$ have its inverse in $K$, so a single element failing it settles the
  matter; the example produces $j(2)$ and nothing more.
