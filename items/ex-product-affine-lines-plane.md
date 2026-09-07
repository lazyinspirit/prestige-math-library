---
id: "ex-product-affine-lines-plane"
kind: "example"
title: "The affine plane and the pair of generic points"
status: published
origin: "pipeline"
deps: ["thm-affine-fibre-product-tensor-ring", "lem-points-of-scheme-fibre-product-residue-tensors"]
provenance:
  statement: "literature-derived"
  proof: "ai-altered"
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Vakil 10.1.2–3"
      url: "https://math.stanford.edu/~vakil/216blog/FOAGmar3111public.pdf"
proof_strategy: direct
---

## Example

For any field $k$, $\mathbb A^1_k\times_k\mathbb A^1_k\cong\mathbb A^2_k$ functorially. Nevertheless the product has distinct points over the pair of generic points: in $k[x,y]$, both $(0)$ and $(y-x)$ contract to $(0)$ in each of $k[x]$ and $k[y]$.

## Facts & Assumptions

**Given:** The objects, hypotheses and conventions in the statement above.

[F1] Let $A\to B$ and $A\to C$ be maps of commutative unital rings, allowing the zero ring. In the category of all schemes, $$\operatorname{Spec}B\times_{\operatorname{Spec}A}\operatorname{Spec}C\cong\operatorname{Spec}(B\otimes_A C).$$ The projections correspond to $b\mapsto b\otimes1$ and $c\mapsto1\otimes c$. ([[thm-affine-fibre-product-tensor-ring]])

[F2] For scheme morphisms $f:X\to S$ and $g:Y\to S$, points of $P=X\times_S Y$ are in bijection with quadruples $(x,y,s,\mathfrak r)$ where $f(x)=g(y)=s$ and $$\mathfrak r\in\operatorname{Spec}(\kappa(x)\otimes_{\kappa(s)}\kappa(y)).$$ The residue field at the corresponding point of $P$ is canonically $\kappa(\mathfrak r)$. ([[lem-points-of-scheme-fibre-product-residue-tensors]])

## Verification

1.1 F1 identifies the product ring with $k[x]\otimes_k k[y]\cong k[x,y]$: the maps send $x\otimes1$ to $x$ and $1\otimes y$ to $y$, with inverse on every polynomial specified by these images. Consequently morphisms from every $k$-scheme $T$ into the plane are compatible pairs of morphisms into the two lines. Empty test schemes are allowed. [given, F1, algebra]

2.1 The ring $k[x,y]$ is a domain, so $(0)$ is prime. The quotient by $(y-x)$ is $k[x]$, also a domain, so this is another prime, distinct because $y-x\ne0$. Substitution $y=x$ is injective on either single-variable subring, giving the asserted contractions. F2 explains these as distinct residue-tensor primes over the same point pair. This works over every field, including characteristic two. [F2, step 1.1, algebra] ∎
