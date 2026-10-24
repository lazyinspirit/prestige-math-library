---
id: ex-aqft-noninvertible-z2-sum
kind: example
title: "A non-invertible direct sum in Vec_Z2"
status: draft
origin: pipeline
domain: mathematics
library: mathematics
category: quantum-field-theory-mathematics
dependency_level: 1
deps:
  - def-aqft-noninvertible-defect-fusion
dependency_roles:
  def-aqft-noninvertible-defect-fusion: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Pavel Etingof, Shlomo Gelaki, Dmitri Nikshych, and Victor Ostrik, Tensor Categories, §§2.3 and 4.1"
      url: "https://math.mit.edu/~etingof/egnobookfinal.pdf"
      locator: "§2.3, the finite-group-graded vector-space tensor product, printed pp. 27–28; §4.1, fusion-category examples, printed pp. 65–66."
verification:
  precheck: pass
---

## Example

Let $G=\mathbb Z_2=\{0,1\}$ with addition modulo $2$. Let $\operatorname{Vec}_G$ be the category of finite-dimensional complex $G$-graded vector spaces $W=W_0\oplus W_1$, with grade-preserving linear maps and tensor product
$$(W\otimes U)_c=\bigoplus_{a+b=c}W_a\otimes_{\mathbb C}U_b.$$
Its tensor unit is $\delta_0=\mathbb C$ in grade $0$; write $\delta_1=\mathbb C$ in grade $1$. The simple objects are $\delta_0,\delta_1$, with $\delta_a\otimes\delta_b\cong\delta_{a+b}$. The object $D=\delta_0\oplus\delta_1$ satisfies
$$D\otimes D\cong 2\delta_0\oplus2\delta_1.$$
Thus $D$ is non-invertible although each of its two simple summands is tensor-invertible. The object $D$ is reducible; this example does not assert the existence of a non-invertible simple object or a physical defect realization.

## Example references

[Etingof, Gelaki, Nikshych, and Ostrik, *Tensor Categories*, §§2.3 and 4.1](https://math.mit.edu/~etingof/egnobookfinal.pdf)

## Facts & Assumptions

**Given:** The finite group $\mathbb Z_2$ under addition modulo $2$ and finite-dimensional complex graded vector spaces.

[F1] [[def-aqft-noninvertible-defect-fusion]]: the ordinary fusion datum is finite semisimple and rigid monoidal with simple tensor unit; an object is tensor-invertible only if it has a two-sided tensor inverse.

## Verification

1.1 Every graded vector space is the direct sum of its two finite-dimensional homogeneous components, each of which is a finite direct sum of one-dimensional graded lines. Thus the category is semisimple with exactly two simple isomorphism classes, represented by $\delta_0$ and $\delta_1$; its Hom spaces are finite-dimensional and its kernels and cokernels inherit the grading. The displayed tensor product is bilinear and has unit $\delta_0$. Its associator is the ordinary vector-space rebracketing map, which preserves degree; the two pentagon composites send every pure tensor to the same rebracketed tensor, and the unit triangle follows from the canonical identifications with $\mathbb C\otimes W$ and $W\otimes\mathbb C$. For each $W$, grade $W^*$ by $(W^*)_a=(W_{-a})^*$; the usual evaluation and coevaluation preserve degree and satisfy the snake identities. The unit $\delta_0$ is simple, so $\operatorname{Vec}_{\mathbb Z_2}$ has the fusion properties in [F1]. [given, F1, algebra]

2.1 Distributing the tensor product over direct sums gives $$(\delta_0\oplus\delta_1)\otimes(\delta_0\oplus\delta_1)\cong(\delta_0\otimes\delta_0)\oplus(\delta_0\otimes\delta_1)\oplus(\delta_1\otimes\delta_0)\oplus(\delta_1\otimes\delta_1)\cong2\delta_0\oplus2\delta_1,$$ since $\delta_a\otimes\delta_b\cong\delta_{a+b}$. [given, step 1.1, algebra]

3.1 Any object $X$ has the form $\delta_0^{\oplus a}\oplus\delta_1^{\oplus b}$ for nonnegative integers $a,b$. Hence $$D\otimes X\cong(a+b)\delta_0\oplus(a+b)\delta_1.$$ If $a+b=0$ this is the zero object; if $a+b>0$ it has a nonzero grade-$1$ summand. In neither case is it isomorphic to the unit $\delta_0$. Therefore $D$ has no right tensor inverse and is non-invertible by [F1], while $\delta_0$ and $\delta_1$ each have themselves as two-sided inverses. [F1, step 1.1, algebra] ∎
