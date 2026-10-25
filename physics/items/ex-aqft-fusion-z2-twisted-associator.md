---
id: ex-aqft-fusion-z2-twisted-associator
kind: example
title: "A Z2 fusion datum with a nontrivial associator scalar"
status: "published"
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

Let $G=\mathbb Z_2=\{0,1\}$ with addition modulo $2$, and define $\omega:G^3\to\mathbb C^\times$ by $\omega(a,b,c)=(-1)^{abc}$, using the representatives $a,b,c\in\{0,1\}$. A normalized $3$-cocycle here means a function satisfying, for every $a,b,c,d\in G$,
$$
\omega(a+b,c,d)\omega(a,b,c+d)=\omega(a,b,c)\omega(a,b+c,d)\omega(b,c,d),
$$
and the normalization $\omega(0,b,c)=\omega(a,0,c)=\omega(a,b,0)=1$. All sums in these equations are modulo $2$. Let $\operatorname{Vec}_{G}^{\omega}$ have as objects finite-dimensional complex $G$-graded vector spaces, as morphisms grade-preserving linear maps, tensor product
$$(W\otimes U)_c=\bigoplus_{a+b=c}W_a\otimes_{\mathbb C}U_b,$$
and unit $\delta_0$. Write $\delta_a$ for $\mathbb C$ concentrated in grade $a$. On morphisms, tensor product acts by $(f\otimes g)(w\otimes u)=f(w)\otimes g(u)$. The unitors are the grade-preserving isomorphisms $\lambda_W:\delta_0\otimes W\to W$, $\lambda_W(z\otimes w)=zw$, and $\rho_W:W\otimes\delta_0\to W$, $\rho_W(w\otimes z)=zw$, with inverses $w\mapsto1\otimes w$ and $w\mapsto w\otimes1$. Use the canonical isomorphism $m_{a,b}:\delta_a\otimes\delta_b\to\delta_{a+b}$, $z\otimes t\mapsto zt$, to identify tensor products of these lines with their representative lines. Every scalar description below is relative to these identifications, with each bracketing identified by iterating $m$. Let $\alpha^{\mathrm{vec}}$ denote the ordinary vector-space rebracketing map. For arbitrary graded objects $W,U,V$, define the full associator $\alpha_{W,U,V}:(W\otimes U)\otimes V\to W\otimes(U\otimes V)$ on each component $(W_a\otimes U_b)\otimes V_c$ by $\omega(a,b,c)\alpha^{\mathrm{vec}}_{W_a,U_b,V_c}$, and take the direct sum over all $a,b,c\in G$. In particular, $\alpha_{\delta_a,\delta_b,\delta_c}=\omega(a,b,c)\operatorname{id}_{\delta_{a+b+c}}$.

The left and right dual of $\delta_a$ is $\delta_{-a}$. For $a=0$, both evaluations are $m_{0,0}:\delta_0\otimes\delta_0\to\delta_0$ and both coevaluations are $m_{0,0}^{-1}:\delta_0\to\delta_0\otimes\delta_0$, $z\mapsto z(1\otimes1)$. For $a=1$, the left maps have types $\operatorname{ev}_L:\delta_1\otimes\delta_1\to\delta_0$ and $\operatorname{coev}_L:\delta_0\to\delta_1\otimes\delta_1$, and the right maps have types $\operatorname{ev}_R:\delta_1\otimes\delta_1\to\delta_0$ and $\operatorname{coev}_R:\delta_0\to\delta_1\otimes\delta_1$; each evaluation is $-m_{1,1}$ and each coevaluation is $m_{1,1}^{-1}$. With these data, the cocycle equation and normalization give a finite semisimple fusion category with $\delta_a\otimes\delta_b\cong\delta_{a+b}$. In particular, $\delta_1\otimes\delta_1\cong\delta_0$, while $\alpha_{\delta_1,\delta_1,\delta_1}=-\operatorname{id}_{\delta_1}$. The untwisted choice $\omega\equiv1$ has the same fusion multiplicities but associator $+\operatorname{id}_{\delta_1}$ on that triple. Thus the fusion multiplicities alone do not record the specified associator component; no claim about monoidal inequivalence of these two categories is made.

## Example references

[Etingof, Gelaki, Nikshych, and Ostrik, *Tensor Categories*, Example 2.3.8 and §4.1](https://math.mit.edu/~etingof/egnobookfinal.pdf)

## Facts & Assumptions

**Given:** $G=\mathbb Z_2$ under addition modulo $2$, complex finite-dimensional graded vector spaces, and the displayed function $\omega$.

[F1] [[def-aqft-noninvertible-defect-fusion]]: finite semisimple fusion data include a finite set of simple-object labels, a simple tensor unit, fusion multiplicities, an associator satisfying the pentagon, unitors satisfying the triangle, and duality maps satisfying the snake identities.

[F2] [[def-monoidal-category]]: a monoidal category has a tensor bifunctor, unit object, natural associator and unitors; the associator obeys the pentagon and the unitors obey the triangle.

## Verification

1.1 For $a,b,c,d\in\{0,1\}$, the exponent of $-1$ on the left side of the $3$-cocycle equation is $$(a+b)cd+ab(c+d)\equiv abc+abd+acd+bcd\pmod 2,$$ while on the right it is $$abc+a(b+c)d+bcd\equiv abc+abd+acd+bcd\pmod 2.$$ Hence the displayed cocycle equation holds. If any argument is $0$, then $\omega=1$, so the displayed normalization holds. [given, algebra]

2.1 Every graded object is a finite direct sum of copies of $\delta_0$ and $\delta_1$, so the category is semisimple with exactly these two simple isomorphism classes; the category is abelian because kernels and cokernels of grade-preserving maps inherit the grading; its Hom spaces are finite-dimensional because they are finite direct sums of linear-map spaces. The tensor bifunctor is bilinear because each homogeneous component is a direct sum of ordinary vector-space tensor products. The unit $\delta_0$ is simple and $\operatorname{End}(\delta_0)=\mathbb C$. Every graded epimorphism splits by choosing bases in its two homogeneous components, so every object is projective and each simple has its identity as a projective cover. Only finite-dimensional basis choices are used. The tensor product preserves grading and gives $\delta_a\otimes\delta_b\cong\delta_{a+b}$ via $m_{a,b}$. On each homogeneous component the full associator is the rebracketing map multiplied by $\omega(a,b,c)\in\{1,-1\}$, so it is invertible and natural with respect to every grade-preserving linear map. On every homogeneous pure tensor $((w_a\otimes u_b)\otimes v_c)\otimes x_d$, the two pentagon composites have scalar factors given by the two sides of the cocycle equation in step 1.1 and the same final rebracketing, so they agree; these tensors span the fourfold tensor product. The displayed unitors are natural and invertible. Since $\omega(a,0,b)=1$, both sides of the triangle $(\operatorname{id}_W\otimes\lambda_U)\circ\alpha_{W,\delta_0,U}=\rho_W\otimes\operatorname{id}_U$ send $(w_a\otimes z)\otimes u_b$ to $zw_a\otimes u_b$. For $\delta_0$, both duals are $\delta_0$ with evaluation $m_{0,0}$ and coevaluation $m_{0,0}^{-1}$; with the stated unitors, every snake composite sends $z$ to $z$. For $\delta_1$, the left maps are $\operatorname{ev}_L:\delta_1\otimes\delta_1\to\delta_0$ with scalar $-1$ and $\operatorname{coev}_L:\delta_0\to\delta_1\otimes\delta_1$ with scalar $1$; the right maps $\operatorname{ev}_R:\delta_1\otimes\delta_1\to\delta_0$ and $\operatorname{coev}_R:\delta_0\to\delta_1\otimes\delta_1$ have the same respective scalars. The left snake composites have scalars $1\cdot(-1)\cdot(-1)=1$ and $1\cdot(-1)\cdot(-1)=1$, the second using $\alpha^{-1}_{1,1,1}$; the right snake composites have scalars $1\cdot(-1)\cdot(-1)=1$ and $1\cdot(-1)\cdot(-1)=1$, the first using $\alpha^{-1}_{1,1,1}$. Thus both snake identities hold in each orientation. For a finite sum of simple lines, take the sum of their specified duals, define evaluation to be the specified evaluation on matching summands and zero on distinct summands, and define coevaluation as the sum of the specified coevaluations followed by the matching inclusions. The snake composites restrict to the identity on each summand by the preceding calculation, so this also supplies duals for every object (and the empty sum gives the zero-object dual). Thus the category has all properties required by [F1]. [F1, F2, step 1.1, given, algebra]

3.1 Since $1+1=0$ in $G$, $\delta_1\otimes\delta_1\cong\delta_0$. But $\omega(1,1,1)=(-1)^1=-1$, so the associator on the triple $(\delta_1,\delta_1,\delta_1)$ is multiplication by $-1$; for the untwisted function it is multiplication by $+1$. Both fusion tables have $N_{11}^{0}=1$ and all other $N_{11}^{a}=0$, so these integers do not by themselves specify that associator component. This comparison concerns the written structure data only and makes no equivalence claim. [F1, step 2.1, algebra] ∎
