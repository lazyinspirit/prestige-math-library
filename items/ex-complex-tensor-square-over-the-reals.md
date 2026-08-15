---
id: ex-complex-tensor-square-over-the-reals
kind: example
title: "$\\mathbb C\\otimes_{\\mathbb R}\\mathbb C\\cong\\mathbb C\\times\\mathbb C$ as $\\mathbb R$-algebras"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-tensor-product-of-algebras-over-a-commutative-ring, thm-tensor-product-basis-from-bases, def-complex-numbers-and-arithmetic, thm-complex-numbers-form-a-field, cor-complex-numbers-are-a-quadratic-real-extension, def-product-ring]
aliases: []
landmark: false
short: "The real tensor square of the complex numbers"
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Wenqi Li, Commutative Algebra, Lecture 9"
      url: "https://www.math.columbia.edu/~wenqili/commalg_notes.pdf"
pipeline_run: null
---

## Example

With complex conjugation defined by $\overline{a+bi}=a-bi$, the formula

$$\Phi(z\otimes w):=(zw,\overline z\,w)$$

defines an isomorphism of $\mathbb R$-algebras

$$\mathbb C\otimes_{\mathbb R}\mathbb C\cong\mathbb C\times\mathbb C.$$

Under this isomorphism, the two product idempotents are the images of

$$\frac12(1\otimes1-i\otimes i)\quad\text{and}\quad\frac12(1\otimes1+i\otimes i).$$

## Facts & Assumptions

**Given:** The usual real embedding $\mathbb R\to\mathbb C$ and $i\in\mathbb C$.

[L1] Every complex number has unique form $a+bi$, with the usual arithmetic, and $\mathbb C$ is a field ([[def-complex-numbers-and-arithmetic]], [[thm-complex-numbers-form-a-field]]).

[L2] The vectors $1,i$ form an $\mathbb R$-basis of $\mathbb C$ ([[cor-complex-numbers-are-a-quadratic-real-extension]]).

[L3] Product bases form a basis of a tensor product ([[thm-tensor-product-basis-from-bases]]).

[L4] The tensor product of $\mathbb R$-algebras has elementary multiplication $(a\otimes b)(a'\otimes b')=aa'\otimes bb'$ ([[thm-tensor-product-of-algebras-over-a-commutative-ring]]).

[L5] $\mathbb C\times\mathbb C$ has componentwise ring operations ([[def-product-ring]]).

## Verification

**Proof technique:** direct.

1.1 Conjugation fixes real scalars and is additive and multiplicative by the coordinate formulas in [L1]. Hence $(z,w)\mapsto(zw,\overline z\,w)$ is $\mathbb R$-bilinear and induces an $\mathbb R$-linear map $\Phi$ from the tensor product. [given, L1, algebra]

1.2 By [L2] and [L3], $1\otimes1,i\otimes1,1\otimes i,i\otimes i$ form an $\mathbb R$-basis of the source. Their images are $(1,1),(i,-i),(i,i),(-1,1)$. [L1, L2, L3]

2.1 By [L4] and [L5], $\Phi((z\otimes w)(z'\otimes w'))=(zz'ww',\overline{zz'}ww')=\Phi(z\otimes w)\Phi(z'\otimes w')$, and $\Phi(1\otimes1)=(1,1)$; thus $\Phi$ is an $\mathbb R$-algebra homomorphism. [step 1.1, L1, L4, L5]

2.2 Given $(u+vi,x+yi)\in\mathbb C\times\mathbb C$, its unique coordinates in the four images of step 1.2 are $a=(u+x)/2$, $b=(v-y)/2$, $c=(v+y)/2$, and $d=(x-u)/2$. Therefore those images form a real basis and $\Phi$ is bijective. [step 1.2, L1, algebra]

2.3 Since $\Phi(i\otimes i)=(-1,1)$, the two displayed tensors map respectively to $(1,0)$ and $(0,1)$, the standard product idempotents. [step 1.2, L5, algebra]

3.1 Steps 2.1 and 2.2 prove the claimed algebra isomorphism, and step 2.3 identifies its idempotents. [step 2.1, step 2.2, step 2.3] ∎
