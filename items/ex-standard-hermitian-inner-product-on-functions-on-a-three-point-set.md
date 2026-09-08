---
id: ex-standard-hermitian-inner-product-on-functions-on-a-three-point-set
kind: example
title: "The normalized Hermitian form on three points"
status: published
origin: pipeline
pipeline_run: phase-2-wave-1
deps: [lem-standard-hermitian-form-on-functions-on-a-nonempty-finite-set-is-an-inner-product]
justified_by: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-09-09
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-08
provenance:
  statement: ai-generated
  proof: ai-altered
generation:
  role: example
sources:
  scraped: []
  references:
    - title: "Sheldon Axler, Linear Algebra Done Right, fourth edition"
      url: "https://linear.axler.net/LADR4e.pdf"
---

## Example

For $X=\{1,2,3\}$, identify functions with their value triples and put $\langle f,h\rangle=\frac13\sum_{j=1}^3f(j)\overline{h(j)}$. Its Gram matrix in the point-indicator basis is $I_3/3$. For $f=(1,i,0)$ and $h=(i,1,1)$, one has $\langle f,h\rangle=0$ and $\langle f,f\rangle=2/3$. Multiplying each point indicator by $\sqrt3$ gives an orthonormal basis.

## Facts & Assumptions

**Given:** $X=\{1,2,3\}$, point indicators $e_1,e_2,e_3$, and the displayed normalized form and vectors $f,h$.

[F1] The normalized finite function-space form is an inner product linear in its first variable ([[lem-standard-hermitian-form-on-functions-on-a-nonempty-finite-set-is-an-inner-product]]).

## Verification

**Proof technique:** direct.

1.1 The set $X$ is nonempty of cardinality three, so F1 applies with normalization $1/3$. The point indicators are a basis: $v=v(1)e_1+v(2)e_2+v(3)e_3$ for every function $v$, and evaluating a zero combination at each point makes all coefficients zero. [F1, given, algebra]

2.1 For $j=k$, only the value at point $j$ contributes to $\langle e_j,e_k\rangle$, giving $1/3$. For $j\ne k$, the two indicators never both have nonzero value at the same point, so the pairing is zero. Thus $\langle e_j,e_k\rangle=\delta_{jk}/3$, which is the matrix $I_3/3$. [step 1.1, algebra]

2.2 Since $\overline i=-i$, $\langle f,h\rangle=(1(-i)+i(1)+0(1))/3=0$. Also $\langle f,f\rangle=(1\cdot1+i(-i)+0)/3=(1+1)/3=2/3$. In particular this nonzero vector has strictly positive diagonal value. [step 1.1, given, algebra]

3.1 Put $u_j=\sqrt3\,e_j$, where $\sqrt3$ is the positive real square root. Direct substitution gives $\langle u_j,u_k\rangle=3\langle e_j,e_k\rangle=\delta_{jk}$. Scaling each basis vector by the nonzero scalar $\sqrt3$ preserves spanning and independence (divide the coefficients by $\sqrt3$), so $(u_1,u_2,u_3)$ is an orthonormal basis. [step 1.1, step 2.1, algebra] ∎

## Sources

[Axler](https://linear.axler.net/LADR4e.pdf), 6.3(b), p. 184, gives positive weighted inner products. The equal weights $1/3$ and the displayed vectors are the local example.
