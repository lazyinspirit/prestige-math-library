---
id: prop-pythagorean-parallelogram-and-polarisation-identities
kind: proposition
title: "Pythagoras, the parallelogram identity, and the real and complex polarisation identities"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-inner-product-space, def-inner-product-norm]
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-15
  audited: 2026-08-16
sources:
  scraped: []
  references:
    - title: 'Sheldon Axler, Linear Algebra Done Right, 4th ed., §6A'
      url: 'https://linear.axler.net/LADR4e.pdf'
    - title: 'Sergei Treil, Linear Algebra Done Wrong, Ch. 5, §5.1'
      url: 'https://www.math.brown.edu/streil/papers/LADW/HTML_2026_04-30/Ch5.html'
pipeline_run: null
---

## Statement

For vectors $u,v$ in an inner product space:

1. if $\langle u,v\rangle=0$, then $\lVert u+v\rVert^2=\lVert u\rVert^2+\lVert v\rVert^2$;
2. $\lVert u+v\rVert^2+\lVert u-v\rVert^2=2\lVert u\rVert^2+2\lVert v\rVert^2$;
3. over $\mathbb R$, $\langle u,v\rangle=\frac14(\lVert u+v\rVert^2-\lVert u-v\rVert^2)$;
4. over $\mathbb C$ with the linear-first convention,
$$\langle u,v\rangle=\frac14\bigl(\lVert u+v\rVert^2-\lVert u-v\rVert^2+i\lVert u+iv\rVert^2-i\lVert u-iv\rVert^2\bigr).$$

## Facts & Assumptions

**Given:** Vectors $u,v$ in a real or complex inner product space.

[L1] The inner product is linear first, conjugate-linear second, and conjugate symmetric ([[def-inner-product-space]]).

[L2] Squared norm is $\lVert w\rVert^2=\langle w,w\rangle$ ([[def-inner-product-norm]]).

## Proof

**Proof technique:** direct.

1.1 Expanding by [L1] and [L2] gives $\lVert u+v\rVert^2=\lVert u\rVert^2+\langle u,v\rangle+\overline{\langle u,v\rangle}+\lVert v\rVert^2$. Orthogonality removes the middle terms and proves Pythagoras. [L1, L2, algebra]

2.1 Expanding $\lVert u-v\rVert^2$ changes the signs of both middle terms. Adding this expansion to step 1.1 proves the parallelogram identity; subtracting gives $4\operatorname{Re}\langle u,v\rangle$. [step 1.1, L1, L2, algebra]

3.1 Over $\mathbb R$, the real part is the scalar itself, giving claim 3. Over $\mathbb C$, the same expansion with $iv$ gives $\lVert u+iv\rVert^2-\lVert u-iv\rVert^2=4\operatorname{Im}\langle u,v\rangle$ under the linear-first convention. Combining real and imaginary parts gives claim 4. [step 2.1, L1, L2, algebra] ∎
