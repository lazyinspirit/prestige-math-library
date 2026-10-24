---
id: ex-aqft-fusion-z2-twisted-associator
kind: example
title: "A Z2 fusion datum with a nontrivial associator scalar"
status: draft
origin: pipeline
domain: mathematics
library: mathematics
category: quantum-field-theory-mathematics
dependency_level: 1
deps:
  - def-aqft-noninvertible-defect-fusion
  - def-monoidal-category
dependency_roles:
  def-aqft-noninvertible-defect-fusion: mathematical-premise
  def-monoidal-category: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Pavel Etingof, Shlomo Gelaki, Dmitri Nikshych, and Victor Ostrik, Tensor Categories, Example 2.3.8 and §4.1"
      url: "https://math.mit.edu/~etingof/egnobookfinal.pdf"
      locator: "Example 2.3.8 gives the 3-cocycle associator and its pentagon check, printed pp. 27–28; §4.1 identifies finite-group Vec_G^ω as a fusion category, printed pp. 65–66. The Z2 cocycle calculation is reproduced locally."
verification:
  precheck: pass
---

## Example

Let $G=\mathbb Z_2=\{0,1\}$ with addition modulo $2$, and define $\omega:G^3\to\mathbb C^\times$ by $\omega(a,b,c)=(-1)^{abc}$. Let $\operatorname{Vec}_{G}^{\omega}$ have as objects finite-dimensional complex $G$-graded vector spaces, as morphisms grade-preserving linear maps, tensor product
$$(W\otimes U)_c=\bigoplus_{a+b=c}W_a\otimes_{\mathbb C}U_b,$$
and unit $\delta_0$, the one-dimensional line in grade $0$. Write $\delta_a$ for the one-dimensional line in grade $a$. On homogeneous lines take the associator
$$\alpha_{\delta_a,\delta_b,\delta_c}=\omega(a,b,c)\operatorname{id}_{\delta_{a+b+c}},$$
and extend it linearly to direct sums. Since $\omega$ is a normalized $3$-cocycle, this defines a finite semisimple fusion category with $\delta_a\otimes\delta_b\cong\delta_{a+b}$. In particular, $\delta_1\otimes\delta_1\cong\delta_0$, while $\alpha_{\delta_1,\delta_1,\delta_1}=-\operatorname{id}_{\delta_1}$. The untwisted choice $\omega\equiv1$ has the same fusion multiplicities but associator $+\operatorname{id}_{\delta_1}$ on that triple. Thus the fusion multiplicities alone do not record the specified associator component; no claim about monoidal inequivalence of these two categories is made.

## Example references

[Etingof, Gelaki, Nikshych, and Ostrik, *Tensor Categories*, Example 2.3.8 and §4.1](https://math.mit.edu/~etingof/egnobookfinal.pdf)

## Facts & Assumptions

**Given:** $G=\mathbb Z_2$ under addition modulo $2$, complex finite-dimensional graded vector spaces, and the displayed function $\omega$.

[F1] [[def-aqft-noninvertible-defect-fusion]]: finite semisimple fusion data include a finite set of simple-object labels, a simple tensor unit, fusion multiplicities, an associator satisfying the pentagon, unitors satisfying the triangle, and duality maps satisfying the snake identities.

[F2] [[def-monoidal-category]]: a monoidal category has a tensor bifunctor, unit object, natural associator and unitors; the associator obeys the pentagon and the unitors obey the triangle.

## Verification

1.1 For $a,b,c,d\in\{0,1\}$, the exponent of $-1$ on the left side of the $3$-cocycle equation is $$(a+b)cd+ab(c+d)\equiv abc+abd+acd+bcd\pmod 2,$$ while on the right it is $$abc+a(b+c)d+bcd\equiv abc+abd+acd+bcd\pmod 2.$$ Hence $\omega(a+b,c,d)\omega(a,b,c+d)=\omega(a,b,c)\omega(a,b+c,d)\omega(b,c,d)$. If any argument is $0$, then $\omega=1$, so the cocycle is normalized. [given, algebra]

2.1 Every graded object is a finite direct sum of copies of $\delta_0$ and $\delta_1$, so the category is semisimple with exactly these two simple isomorphism classes; the category is abelian because kernels and cokernels of grade-preserving maps inherit the grading; its Hom spaces are finite-dimensional because they are finite direct sums of linear-map spaces. The tensor bifunctor is bilinear because each homogeneous component is a direct sum of ordinary vector-space tensor products. The unit $\delta_0$ is simple. The tensor product preserves grading and sends $\delta_a\otimes\delta_b$ to $\delta_{a+b}$. On each homogeneous component the associator is multiplication by the scalar $\omega(a,b,c)\in\{1,-1\}$, so it is invertible and natural with respect to every grade-preserving linear map. On a tensor product of four homogeneous lines, the two pentagon composites have scalar factors given by the two sides of the cocycle equation in step 1.1, so they agree. Normalization makes the unitors identities, and the triangle then holds. The dual of $\delta_0$ is $\delta_0$ with identity evaluation and coevaluation. For $\delta_1$, choose itself as left and right dual, coevaluation scalar $1$, and evaluation scalar $-1$; each snake composite has scalar $1\cdot(-1)\cdot(-1)=1$ because $\omega(1,1,1)=-1$. Direct sums inherit duals, so the category has all properties required by [F1]. [F1, F2, step 1.1, given, algebra]

3.1 Since $1+1=0$ in $G$, $\delta_1\otimes\delta_1\cong\delta_0$. But $\omega(1,1,1)=(-1)^1=-1$, so the associator on the triple $(\delta_1,\delta_1,\delta_1)$ is multiplication by $-1$; for the untwisted function it is multiplication by $+1$. Both fusion tables have $N_{11}^{0}=1$ and all other $N_{11}^{a}=0$, so these integers do not by themselves specify that associator component. This comparison concerns the written structure data only and makes no equivalence claim. [F1, step 2.1, algebra] ∎
