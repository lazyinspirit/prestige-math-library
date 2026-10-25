---
id: lem-group-cancellation
kind: lemma
title: "Cancellation in a group: $gx = gy$ or $xg = yg$ forces $x = y$; equivalently left and right translation by $g$ are bijections of $G$, so $gx = h$ and $xg = h$ each have exactly one solution"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-group, lem-group-inverse-laws, def-injection-surjection-bijection, def-identity-element]
justified_by: []
aliases: [lem-cancellation-in-a-group, lem-translation-bijective]
landmark: false
short: "cancellation; translations are bijections"
proof_strategy: direct
verification:
  precheck: pass
  verified:
    model: claude-opus-5
    verdict: certify
    date: 2026-08-02
    scope: published-audit
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "Cancellation property (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Cancellation_property"
    - title: "Group (mathematics) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Group_(mathematics)"
pipeline_run: null
---

## Statement

Let $G$ be a group ([[def-group]]) and let $g \in G$. Define the **left
translation** $\lambda_g : G \to G$ by $\lambda_g(x) = gx$ and the **right
translation** $\rho_g : G \to G$ by $\rho_g(x) = xg$. Then:

1. **Cancellation.** For all $x, y \in G$: if $gx = gy$ then $x = y$, and if
   $xg = yg$ then $x = y$.
2. $\lambda_g$ and $\rho_g$ are bijections of $G$
   ([[def-injection-surjection-bijection]]), with inverse maps $\lambda_{g^{-1}}$
   and $\rho_{g^{-1}}$ respectively.
3. For every $h \in G$ the equation $gx = h$ has exactly one solution in $G$,
   namely $x = g^{-1}h$; and $xg = h$ has exactly one solution, namely
   $x = hg^{-1}$.

## Facts & Assumptions

**Given:** A group $G$ with identity $e$, an element $g \in G$ with inverse $g^{-1}$, and the maps $\lambda_g(x) = gx$, $\rho_g(x) = xg$ ([[def-group]]).

[L1] The group axioms: associativity, $e$ a two-sided identity, and $g^{-1}g = e = g g^{-1}$ ([[def-group]], [[def-identity-element]]).

[L3] A map is bijective exactly when it has a two-sided inverse map; injective means $f(x) = f(y)$ forces $x = y$ ([[def-injection-surjection-bijection]]).

## Proof

**Proof technique:** direct.

1.1 Suppose $gx = gy$. Multiplying on the left by $g^{-1}$ and regrouping, $x = e x = (g^{-1}g)x = g^{-1}(gx) = g^{-1}(gy) = (g^{-1}g)y = e y = y$. [L1]

1.2 Suppose $xg = yg$. Multiplying on the right by $g^{-1}$ and regrouping, $x = x e = x(g g^{-1}) = (xg)g^{-1} = (yg)g^{-1} = y(g g^{-1}) = y e = y$. [L1]

1.3 For every $x \in G$, $\lambda_{g^{-1}}(\lambda_g(x)) = g^{-1}(gx) = (g^{-1}g)x = ex = x$, and $\lambda_g(\lambda_{g^{-1}}(x)) = g(g^{-1}x) = (g g^{-1})x = ex = x$. [L1]

1.4 For every $x \in G$, $\rho_{g^{-1}}(\rho_g(x)) = (xg)g^{-1} = x(g g^{-1}) = x$, and $\rho_g(\rho_{g^{-1}}(x)) = (x g^{-1})g = x(g^{-1}g) = x$. [L1]

1.5 Existence in claim 3: $g(g^{-1}h) = (g g^{-1})h = eh = h$, so $x = g^{-1}h$ solves $gx = h$; and $(hg^{-1})g = h(g^{-1}g) = he = h$, so $x = hg^{-1}$ solves $xg = h$. [L1]

2.1 Claim 1 is steps 1.1 and 1.2. [step 1.1, step 1.2]

2.2 By step 1.3 the map $\lambda_{g^{-1}}$ is a two-sided inverse of $\lambda_g$, so $\lambda_g$ is a bijection of $G$ with inverse $\lambda_{g^{-1}}$; by step 1.4 the same holds for $\rho_g$ with inverse $\rho_{g^{-1}}$. This is claim 2. [step 1.3, step 1.4, L3]

2.3 Uniqueness in claim 3: if $gx = h = gx'$ then $x = x'$ by step 1.1, and if $xg = h = x'g$ then $x = x'$ by step 1.2. [step 1.1, step 1.2]

3.1 Cancellation holds on both sides, both translations are bijections, and each of the two equations has exactly one solution. [step 2.1, step 2.2, step 1.5, step 2.3] ∎

## Remarks

- Claim 2 is the form used most often: it says every row and every column of the multiplication table of a group is a rearrangement of $G$, since $\lambda_g$ and $\rho_g$ permute $G$. Inversion pairs $g$ with $g^{-1}$ ([[lem-group-inverse-laws]]), so the two families of translations are indexed by the same elements.

- Cancellation is strictly weaker than invertibility. A commutative monoid can satisfy both cancellation laws without being a group; $(\mathbb{N},+)$ is such a monoid, recorded on the companion page.
