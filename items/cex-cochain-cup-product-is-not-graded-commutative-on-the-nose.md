---
id: "cex-cochain-cup-product-is-not-graded-commutative-on-the-nose"
kind: "counterexample"
title: "Cochain cup product is not strictly graded commutative"
status: "draft"
origin: "pipeline"
pipeline_run: "phase-2-next-17"
deps: ["def-singular-cup-product-on-cochains","thm-singular-cohomology-is-graded-commutative"]
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - title: Hatcher proof of Theorem 3.11 and cup formula
      url: https://pi.math.cornell.edu/~hatcher/AT/ATch3.pdf
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: "direct"
---

## Statement refuted

The singular cochain cup product satisfies $a\smile b=(-1)^{pq}b\smile a$ for every pair of cochains of degrees $p,q$.

## Facts & Assumptions

[F1] [[def-singular-cup-product-on-cochains]] defines the product by evaluating on the front and back faces and multiplying coefficient values.

[F2] [[thm-singular-cohomology-is-graded-commutative]] proves the signed identity for cohomology classes represented by cocycles.

## Counterexample

**Given:** $X=\Delta^2$ with vertices $v_0,v_1,v_2$, integral coefficients, and the identity singular two-simplex $s:\Delta^2\to X$. Write $e_{ij}:\Delta^1\to X$ for its affine edge from $v_i$ to $v_j$.

1.1 Define the integral one-cochain $a$ to have value $1$ on the singular simplex $e_{01}$ and value $0$ on every other singular one-simplex; define $b$ similarly with support $\{e_{12}\}$. Each extends uniquely to a homomorphism on the free group of finite singular one-chains. The two edges are distinct maps (their initial vertices differ), so $$a(e_{01})=b(e_{12})=1,\qquad b(e_{01})=a(e_{12})=0.$$ No choice of a basis is involved: singular simplex maps are the specified generators. [given, construct]

2.1 Formula [F1] gives $$(a\smile b)(s)=a(e_{01})b(e_{12})=1,\qquad (b\smile a)(s)=b(e_{01})a(e_{12})=0.$$ Since $p=q=1$, graded commutativity would require the first value to be the negative of the second. But $1\ne-0$ in $\mathbb Z$. Thus these are unequal cochains, even with the required sign. [F1, step 1.1, algebra]

3.1 Here $\partial s=e_{12}-e_{02}+e_{01}$, so $\delta a(s)=1$ and $\delta b(s)=1$. Neither cochain is a cocycle, and [F2] does not assert the refuted identity for them. This calculation uses two nondegenerate one-faces of a single nondegenerate two-simplex. Mixed degree-zero and positive-degree cochains can also witness failure when the zero-cochain takes different values at the two endpoints of an edge; the present example instead keeps both cochains in degree one. Empty spaces and the zero coefficient ring cannot furnish this witness. All faces include their endpoints, and all other simplex values, including degenerate ones, were explicitly set to zero. No AC is used. [F1, F2, step 1.1, step 2.1] ∎
