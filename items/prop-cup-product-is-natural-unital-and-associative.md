---
id: "prop-cup-product-is-natural-unital-and-associative"
kind: "proposition"
title: "Cup product is natural, unital and associative"
status: published
origin: "pipeline"
pipeline_run: "phase-2-next-17"
deps: ["def-singular-cup-product-on-cochains","def-singular-cohomology-ring","thm-homotopic-maps-induce-equal-maps-in-singular-cohomology"]
verification:
  audited: 2026-09-13
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - title: Hatcher Proposition 3.10; Miller Proposition 28.3
      url: https://math.mit.edu/~hrm/papers/notes-905.pdf
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: "direct"
---

## Statement

For continuous $f:X\to Y$ and a commutative unital ring $R$, pullback on singular cohomology satisfies
$$f^*(a\smile b)=f^*a\smile f^*b,\qquad f^*(1)=1.$$
Cup product is associative already on cochains. Consequently $f^*:H^*(Y;R)\to H^*(X;R)$ is a unital graded-ring homomorphism. Homotopic maps give the same homomorphism.

## Facts & Assumptions

[F1] [[def-singular-cup-product-on-cochains]] is the front/back-face formula, bilinear over $R$.

[F2] [[def-singular-cohomology-ring]] supplies the quotient multiplication and the closed cochain assigning $1$ to every vertex as unit.

[F3] [[thm-homotopic-maps-induce-equal-maps-in-singular-cohomology]] proves equality of pullbacks in every degree for homotopic maps.

## Proof

**Given:** $f:X\to Y$ continuous, and homogeneous cochains $\varphi,\psi,\eta$ of degrees $p,q,r$. Write $f^\sharp\varphi(\sigma)=\varphi(f\sigma)$.

1.1 Face restriction commutes with postcomposition. On a $(p+q)$-simplex $\sigma$, evaluation of $f^\sharp(\varphi\smile\psi)$ is $\varphi(f\sigma[0,\ldots,p])\psi(f\sigma[p,\ldots,p+q])$, which is the evaluation of $f^\sharp\varphi\smile f^\sharp\psi$. Precomposition is linear and commutes with positive coboundary because each face does; it therefore induces the same multiplicative equality on cocycle classes. On a vertex $x$, $f^\sharp\mathbf1(x)=\mathbf1(f(x))=1$, giving the unit identity on classes. [F1, F2, given]

2.1 On a $(p+q+r)$-simplex $\sigma$, both $(\varphi\smile\psi)\smile\eta$ and $\varphi\smile(\psi\smile\eta)$ evaluate to $\varphi(\sigma[0,\ldots,p])\psi(\sigma[p,\ldots,p+q])\eta(\sigma[p+q,\ldots,p+q+r])$. Associativity in $R$ makes the results equal. Bilinearity extends this identity to finite sums of homogeneous cochains; descent gives associativity in the cohomology ring. Together with step 1.1 this proves the graded-ring homomorphism claim. [F1, F2, step 1.1]

3.1 If $f$ and $g$ are homotopic, [F3] gives equality on each homogeneous group. Every element of the graded direct sum has finite support, so the two ring homomorphisms are equal. Degree-zero factors in step 2.1 merely shorten blocks to vertices. The same formula covers degenerate simplices and points. Empty spaces and the zero ring give zero cochains and the stipulated zero-ring unit; any existing pullback still preserves this unit. All formulas are prescribed, so no AC is required. [F1, F2, F3, step 1.1, step 2.1] ∎
