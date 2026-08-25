---
id: ex-a-normal-basis-of-f-eight-over-f-two
kind: example
title: "A normal basis of $\\mathbb F_8$ over $\\mathbb F_2$"
status: draft
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [thm-normal-basis-theorem-for-a-cyclic-extension, def-normal-basis, thm-extensions-of-finite-fields-are-galois-with-cyclic-frobenius-group, def-relative-frobenius-of-a-finite-field-extension, lem-order-of-the-relative-frobenius, thm-polynomial-quotient-is-a-field-iff-irreducible, thm-quadratic-and-cubic-irreducibility-test, thm-simple-algebraic-extension-quotient-power-basis-and-degree, thm-evaluation-kernel-and-minimal-polynomial, thm-unique-coordinates-with-respect-to-an-ordered-basis, thm-rank-nullity, def-linear-basis, def-extension-degree-and-finite-extension]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "K. Conrad, Linear Independence of Characters (expository blurb), Section 3"
      url: "https://kconrad.math.uconn.edu/blurbs/galoistheory/linearchar.pdf"
    - title: "J. S. Milne, Fields and Galois Theory, v5.10, the normal basis theorem"
      url: "https://www.jmilne.org/math/CourseNotes/FT.pdf"
pipeline_run: null
---

## Example

Let $K:=\mathbb F_2[t]/(t^{3}+t+1)$, a field of order $8$, let $\alpha$ be the
class of $t$, and let $\sigma(x)=x^{2}$ generate
$\operatorname{Gal}(K/\mathbb F_2)$. Put

$$\beta:=\alpha+1 .$$

Then the conjugate list

$$\bigl(\beta,\ \beta^{2},\ \beta^{4}\bigr)=\bigl(\alpha+1,\ \alpha^{2}+1,\ \alpha^{2}+\alpha+1\bigr)$$

is a normal basis of $K$ over $\mathbb F_2$ ([[def-normal-basis]]).

**Not every element works.** The generator $\alpha$ itself does not: its
conjugate list is $(\alpha,\alpha^{2},\alpha^{2}+\alpha)$, whose three members
sum to $0$, so they are linearly dependent over $\mathbb F_2$ and are not a
basis.

## Facts & Assumptions

**Given:** The field $K=\mathbb F_2[t]/(t^{3}+t+1)$ with $\alpha$ the class of $t$, so $\alpha^{3}=\alpha+1$ and $\alpha^{4}=\alpha^{2}+\alpha$; squaring is additive in characteristic two.

[L1] $t^{3}+t+1$ has no root in $\mathbb F_2$, so it is irreducible ([[thm-quadratic-and-cubic-irreducibility-test]]) and $K$ is a field ([[thm-polynomial-quotient-is-a-field-iff-irreducible]]); it is the minimal polynomial of $\alpha$ ([[thm-evaluation-kernel-and-minimal-polynomial]]), so $[K:\mathbb F_2]=3$ with power basis $1,\alpha,\alpha^{2}$ ([[thm-simple-algebraic-extension-quotient-power-basis-and-degree]], [[def-extension-degree-and-finite-extension]]).

[L2] $K/\mathbb F_2$ is Galois with $\operatorname{Gal}(K/\mathbb F_2)=\{\mathrm{id},\sigma,\sigma^{2}\}$ cyclic of order three, $\sigma(x)=x^{2}$, and $|K|=8$ ([[thm-extensions-of-finite-fields-are-galois-with-cyclic-frobenius-group]], [[def-relative-frobenius-of-a-finite-field-extension]], [[lem-order-of-the-relative-frobenius]]).

[L3] A list $v$ of length $n$ is an ordered basis of $V$ if and only if every $x\in V$ has exactly one coordinate list $\lambda$ with $x=\sum_{i<n}\lambda_iv_i$ ([[thm-unique-coordinates-with-respect-to-an-ordered-basis]], [[def-linear-basis]]).

[L4] For a linear map $T:V\to W$ with $V$ finite-dimensional, $\dim V=\dim\ker T+\dim\operatorname{im}T$ ([[thm-rank-nullity]]).

[L5] Every finite Galois extension with cyclic Galois group has a normal basis ([[thm-normal-basis-theorem-for-a-cyclic-extension]]).

## Verification

**Proof technique:** direct.

1.1 By [L1] and [L2] the space $K$ is a three-dimensional $\mathbb F_2$-vector space with basis $1,\alpha,\alpha^{2}$, and $\operatorname{Gal}(K/\mathbb F_2)=\{\mathrm{id},\sigma,\sigma^{2}\}$ acts by $x\mapsto x,\ x^{2},\ x^{4}$. [L1, L2]

2.1 The conjugate list of $\alpha$ is $(\alpha,\alpha^{2},\alpha^{4})$ with $\alpha^{4}=\alpha\cdot\alpha^{3}=\alpha(\alpha+1)=\alpha^{2}+\alpha$; hence $\alpha+\alpha^{2}+\alpha^{4}=\alpha+\alpha^{2}+\alpha^{2}+\alpha=0$. A vanishing combination with all coefficients $1$ is nontrivial, so this list is linearly dependent over $\mathbb F_2$ and is not a basis. [step 1.1, L3, given]

3.1 The conjugates of $\beta=\alpha+1$ are $\beta$, $\beta^{2}=(\alpha+1)^{2}=\alpha^{2}+1$ and $\beta^{4}=(\beta^{2})^{2}=(\alpha^{2}+1)^{2}=\alpha^{4}+1=\alpha^{2}+\alpha+1$. [step 1.1, step 2.1, given]

4.1 The seven nonzero $\mathbb F_2$-combinations of $\beta,\beta^{2},\beta^{4}$ are nonzero: the three single terms are $\alpha+1$, $\alpha^{2}+1$ and $\alpha^{2}+\alpha+1$; the three pairwise sums are $\beta+\beta^{2}=\alpha^{2}+\alpha$, $\beta+\beta^{4}=\alpha^{2}$ and $\beta^{2}+\beta^{4}=\alpha$; and the total sum is $\beta+\beta^{2}+\beta^{4}=1$. None of these seven is $0$, as each has a nonzero coordinate list in the basis $1,\alpha,\alpha^{2}$. [step 1.1, step 3.1, given]

5.1 So the $\mathbb F_2$-linear map $T\colon\mathbb F_2^{3}\to K$ sending $(c_1,c_2,c_3)$ to $c_1\beta+c_2\beta^{2}+c_3\beta^{4}$ has trivial kernel by step 4.1; both spaces have dimension three by step 1.1, so [L4] makes $T$ surjective as well, hence bijective, and [L3] makes $(\beta,\beta^{2},\beta^{4})$ an ordered basis of $K$ over $\mathbb F_2$. [step 1.1, step 4.1, L3, L4]

6.1 That list is the family of conjugates of $\beta$ under $\operatorname{Gal}(K/\mathbb F_2)$ by step 3.1, so it is a normal basis, as [L5] guarantees exists for this cyclic extension. [step 3.1, step 5.1, L2, L5] ∎

## Remarks

- **A conjugate family of the right size can still fail.** The list $(\alpha,\alpha^{2},\alpha^{4})$ has three distinct members and is a single Galois orbit, yet it is not a basis; what fails is independence, not the orbit condition. The normal basis theorem asserts that some element works, never that every element does ([[fs-every-basis-of-a-finite-field-over-a-subfield-is-a-normal-basis]]).
