---
id: ex-kolesnik-process-hypothesis-check
kind: example
title: "A linear phase fails the nondegeneracy check for Kolesnik's B-process"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 1
deps: [def-kolesnik-exponent-pair-framework]
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  references:
    - title: "G. A. Kolesnik, On the method of exponent pairs"
      url: "https://www.impan.pl/shop/publication/transaction/download/product/104633"
      locator: "Transformation B, Lemma 1, printed p. 120"
verification:
  precheck: pending
---

## Example

On the box $D=[1,2]^2$, let $f(x,y)=a x+b y+c$ for real constants $a,b,c$. Define the Hessian matrix as the matrix of second partial derivatives; its order-one principal minors are its diagonal entries and its order-two principal minor is its determinant. All these minors vanish for $f$. The nondegeneracy premise in Kolesnik's B-process Lemma 1 requires at least one such principal minor $H_k(f)$ to satisfy $|H_k(f)|\asymp A_k^{-1}$ on its domain for a positive scale $A_k$, so this phase fails the B-process nondegeneracy hypothesis. This is an illustration of a failed necessary premise, not an admitted member of the phase class: an affine function also fails the class's monomial mixed-derivative requirements with noninteger subset exponents. The fixed box is not asserted to satisfy its sufficiently-large-scale convention. No exponential-sum bound is asserted for this phase.

## Example references

[Kolesnik, Transformation B, Lemma 1, printed p. 120](https://www.impan.pl/shop/publication/transaction/download/product/104633)

## Facts & Assumptions

**Given:** The real affine phase $f(x,y)=ax+by+c$ on $D=[1,2]^2$.

[A1] The test is the explicitly stated necessary comparison $|H_k(f)|\asymp A_k^{-1}$ on $D$ for some $k\in\{1,2\}$ and some positive $A_k$. In the source notation, $H_k(f)$ is the determinant of the leading $k\times k$ principal Hessian submatrix. This is the determinant-comparison conjunct of Kolesnik's B-process Lemma 1(iii), printed p. 120; its other premises are not assumed here. No conclusion of that lemma is used.

[F1] [[def-kolesnik-exponent-pair-framework]]: Kolesnik's process claims apply only to phases in its stated multidimensional phase class and under their derivative and nondegeneracy hypotheses.

## Verification

1.1 The first derivatives of $f$ are the constants $a,b$; every second derivative is zero. Thus its Hessian matrix and each of its principal minors are zero on the whole box $D$. [given, algebra]

2.1 For every $A_k>0$, $A_k^{-1}>0$. A two-sided comparison would in particular require $cA_k^{-1}\le |H_k(f)|$ for some $c>0$, whereas step 1.1 gives $|H_k(f)|=0$ for both $k=1,2$. Thus the explicit necessary comparison in [A1] fails for every allowed $k$ and $A_k$. The B-process lemma therefore cannot be applied to this phase, regardless of its other premises. [A1, step 1.1, algebra] ∎

## Source note

The source notation and the necessary comparison above are read from §2 and §3, Lemma 1(iii), printed p. 120. This verification uses only the stated comparison and the computed zero Hessian. It neither invokes the B-process conclusion nor needs a proof of that conclusion or an operational definition of the source's method-bound envelope.
