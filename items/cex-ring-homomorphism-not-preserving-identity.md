---
id: cex-ring-homomorphism-not-preserving-identity
kind: counterexample
title: "The map $n \\mapsto (n,0)$ from $\\mathbb{Z}$ to $\\mathbb{Z} \\times \\mathbb{Z}$ preserves addition and multiplication and does not preserve $1$, so the clause $f(1) = 1$ is not redundant"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-ring-homomorphism, def-product-ring, def-ring, def-group-homomorphism, lem-ring-elementary-consequences, ex-integers-as-a-commutative-ring, thm-int-comm-ring, def-integers, def-int-operations, lem-nat-embeds-int, thm-omega-is-peano-system]
justified_by: []
aliases: []
landmark: false
short: "additive and multiplicative, $f(1) \\ne 1$"
proof_strategy: direct
verification:
  precheck: pass
  verified:
    model: gpt-5.6-sol-codex-subscription
    verdict: certify
    date: 2026-08-03
    scope: published-audit
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "Ring homomorphism (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Ring_homomorphism"
    - title: "Product of rings (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Product_of_rings"
pipeline_run: null
---

## Statement refuted

**False claim:** if $R$ and $S$ are rings and $f : R \to S$ satisfies
$f(x+y) = f(x)+f(y)$ and $f(xy) = f(x)f(y)$ for all $x, y \in R$, then $f$ is a
ring homomorphism ([[def-ring-homomorphism]]); that is, clause (RH3),
$f(1_R) = 1_S$, is redundant.

The map

$$f : \mathbb{Z} \longrightarrow \mathbb{Z}\times\mathbb{Z}, \qquad f(n) := (n, 0)$$

refutes it, $\mathbb{Z}\times\mathbb{Z}$ being the product ring
([[def-product-ring]]). It satisfies both displayed conditions and sends $1$ to
$(1,0)$, which is not the identity $(1,1)$ of $\mathbb{Z}\times\mathbb{Z}$.

## Facts & Assumptions

**Given:** The commutative ring $\mathbb{Z}$, the product ring $\mathbb{Z}\times\mathbb{Z}$ with componentwise operations, zero $(0,0)$ and identity $(1,1)$, and the map $f(n) = (n,0)$ ([[ex-integers-as-a-commutative-ring]], [[def-product-ring]]).

[L1] $\mathbb{Z}$ is a commutative ring ([[ex-integers-as-a-commutative-ring]], [[thm-int-comm-ring]], [[def-ring]], [[def-integers]], [[def-int-operations]]).

[L2] $\mathbb{Z}\times\mathbb{Z}$ is a ring whose operations are componentwise, whose zero is $(0,0)$ and whose identity is $(1,1)$; two of its elements are equal exactly when both components agree ([[def-product-ring]]).

[L3] $0 \cdot x = x \cdot 0 = 0$ in any ring ([[lem-ring-elementary-consequences]]).

[L4] $1 \ne 0$ in $\mathbb{Z}$, since $1 = \iota(1)$, $0 = \iota(0)$, $\iota$ is injective, and $1 = \sigma(0) \ne 0$ in $\mathbb{N}$ by Peano axiom (P1) ([[lem-nat-embeds-int]], [[def-int-operations]], [[thm-omega-is-peano-system]]).

[L5] A ring homomorphism must satisfy (RH1) additivity, (RH2) multiplicativity and (RH3) $f(1_R) = 1_S$; (RH1) alone makes $f$ a homomorphism of the additive groups ([[def-ring-homomorphism]], [[def-group-homomorphism]]).

[L6] The refuted claim: (RH1) and (RH2) imply (RH3).

## Counterexample

**Proof technique:** direct.

1.1 $f$ is additive: $f(m+n) = (m+n, 0) = (m,0) + (n,0) = f(m) + f(n)$, the middle equality being componentwise addition with $0 + 0 = 0$. So $f$ satisfies (RH1) and is a homomorphism of the additive groups. [L1, L2, L5]

1.2 $f$ is multiplicative: $f(mn) = (mn, 0)$ and $f(m)f(n) = (m,0)(n,0) = (mn,\; 0 \cdot 0) = (mn, 0)$, using componentwise multiplication and $0 \cdot 0 = 0$. So $f$ satisfies (RH2). [L2, L3]

1.3 $f(1) = (1,0) \ne (1,1)$, since the second components differ: $0 \ne 1$ in $\mathbb{Z}$ by [L4]. So (RH3) fails for $f$. [L2, L4]

2.1 By steps 1.1, 1.2 and 1.3 the map $f$ satisfies (RH1) and (RH2) and fails (RH3), so it is not a ring homomorphism and the claim of [L6] is false: clause (RH3) of [[def-ring-homomorphism]] is not redundant. [step 1.1, step 1.2, step 1.3, L5, L6] ∎

## Remarks

- **The contrast with groups is the point.** By (RH1) alone the map $f$ is a homomorphism of the additive groups, and for groups preservation of the identity is automatic ([[lem-group-homomorphism-basic-properties]]); indeed $f(0) = (0,0)$ here. The multiplicative structures are only monoids, and for monoids the analogous statement is false, which is exactly why [[def-group-homomorphism]] imposes $f(e) = e'$ on monoid homomorphisms and [[def-ring-homomorphism]] imposes (RH3).

- **The image is not a subring.** $f(\mathbb{Z}) = \mathbb{Z}\times\{0\}$ is closed under subtraction and multiplication and does not contain $(1,1) = 1_{\mathbb{Z}\times\mathbb{Z}}$, so it fails clause (T1) of [[def-subring]] — the same clause that [[cex-2z-is-not-a-subring]] fails, for the same reason, namely that closure alone never supplies the ambient identity. It follows that [[lem-ring-homomorphism-basic-properties]], whose claim 4 puts a subring as the image of a ring homomorphism, really does use (RH3).

- **$(1,0)$ is an identity for the image, but not the identity of the ambient ring.** For $(m,0)$ in the image, $(1,0)(m,0) = (m,0)$. So the failure is not that the image has no identity; it is that its identity is not $1_{\mathbb{Z}\times\mathbb{Z}}$, and [[def-subring]] asks for the ambient identity.
