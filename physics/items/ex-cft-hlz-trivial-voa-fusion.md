---
id: ex-cft-hlz-trivial-voa-fusion
kind: example
title: Modules and fusion for the one-dimensional vertex algebra
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
domain: mathematics
library: mathematics
proof_strategy: direct
deps:
  - def-vertex-algebra-state-field
  - def-vertex-algebra-module
  - def-conformal-vertex-algebra
  - def-grading-restricted-generalized-vertex-module
  - def-cft-logarithmic-intertwining-operator
  - def-cft-pz-intertwining-map
  - def-cft-pz-tensor-product
  - def-cft-contragredient-module
  - def-cft-c1-cofinite-module
  - def-cft-quasi-finite-dimensional-module
dependency_roles:
  def-vertex-algebra-state-field: mathematical-premise
  def-vertex-algebra-module: mathematical-premise
  def-conformal-vertex-algebra: mathematical-premise
  def-grading-restricted-generalized-vertex-module: mathematical-premise
  def-cft-logarithmic-intertwining-operator: mathematical-premise
  def-cft-pz-intertwining-map: mathematical-premise
  def-cft-pz-tensor-product: mathematical-premise
  def-cft-contragredient-module: mathematical-premise
  def-cft-c1-cofinite-module: mathematical-premise
  def-cft-quasi-finite-dimensional-module: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
verification:
  precheck: pass
  judge:
    model: gpt-6-luna
    verdict: pass
    date: 2026-11-06
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-05
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
dependency_level: 4
---

## Example

Take $V=\mathbb C\mathbf1$, $Y(a\mathbf1,x)(b\mathbf1)=ab\mathbf1$, $T=0$, and conformal vector $\omega=0$, with central charge zero. Its grading-restricted generalized modules are exactly finite-dimensional complex vector spaces $E$ with $Y_E(a\mathbf1,x)=a1_E$ and weight zero. Use the trivial auxiliary groups $A=\widetilde A=\{0\}$ throughout: $V^{(0)}_{(0)}=V$, $E^{(0)}_{[0]}=E$ for every module $E$, and all other components vanish. The category has all finite-dimensional complex vector spaces and all linear maps. For finite-dimensional $E,F,G$, every logarithmic intertwining operator is constant in the variable and has the form $\mathcal Y_B(e,x)f=B(e,f)$ for a unique bilinear map $B:E\times F\to G$. Thus
$$\dim I\binom{G}{E\ F}=(\dim E)(\dim F)(\dim G).$$
For every $z\ne0$, the P(z)-tensor product is $E\otimes_{\mathbb C}F$, with universal map $e\otimes f\mapsto e\otimes f$; the completion equals the module. Contragredients are the usual finite-dimensional duals, and all multipoint matrix coefficients are constant, so their convergence and continuation hold directly. This example uses no generic HLZ existence or convergence theorem.

## Example references

[[def-vertex-algebra-state-field]]

[[def-vertex-algebra-module]]

[[def-conformal-vertex-algebra]]

[[def-grading-restricted-generalized-vertex-module]]

[[def-cft-logarithmic-intertwining-operator]]

[[def-cft-pz-intertwining-map]]

[[def-cft-pz-tensor-product]]

[[def-cft-contragredient-module]]

[[def-cft-c1-cofinite-module]]

[[def-cft-quasi-finite-dimensional-module]]

## Facts & Assumptions

**Given:** Finite-dimensional complex vector spaces, including the zero space, and the displayed scalar state-field map.

[F1] The vertex-algebra and module axioms are those of [[def-vertex-algebra-state-field]] and [[def-vertex-algebra-module]]. For the conformal grading and finite-dimensional generalized weight spaces use [[def-conformal-vertex-algebra]] and [[def-grading-restricted-generalized-vertex-module]].

[F2] The formal logarithmic series, Jacobi, derivative and Möbius-bracket conditions are those of [[def-cft-logarithmic-intertwining-operator]].

[F3] The P(z)-map and representing property are those of [[def-cft-pz-intertwining-map]] and [[def-cft-pz-tensor-product]].

[F4] [[def-cft-contragredient-module]], [[def-cft-c1-cofinite-module]] and [[def-cft-quasi-finite-dimensional-module]] specify respectively the opposite-field restricted dual, the positive-weight (-1)-mode quotient and the finite weight-cutoff condition.

## Verification

1.1 Only the $(-1)$st mode is nonzero. Truncation, creation and vacuum hold immediately, translation has both sides zero, and scalar fields commute, so locality holds with exponent zero. The zero conformal field has $L(n)=0$ for every $n$ and satisfies Virasoro with $c=0$; $L(-1)=T$, $V_0=\mathbb C\mathbf1$ and all other graded pieces vanish. Thus $V$ has exactly the stipulated conformal structure. [given, F1, algebra]

2.1 On any module, linearity and vacuum force $Y_E(a\mathbf1,x)=a1_E$, hence $Y_E(\omega,x)=0$ and $L_E(n)=0$. Conversely this action satisfies Jacobi because each term is a scalar multiple of the basic formal identity $$x_0^{-1}\delta\left(\frac{x_1-x_2}{x_0}\right)-x_0^{-1}\delta\left(\frac{x_2-x_1}{-x_0}\right)=x_2^{-1}\delta\left(\frac{x_1-x_0}{x_2}\right).$$ This identity follows coefficientwise by expanding each integer power with the binomial convention. The only possible generalized eigenvalue of the zero $L_E(0)$ is zero. Thus grading restriction is exactly finite-dimensionality of $E$; its real lower weight bound is zero. Every linear map between these spaces commutes with all fields. [F1, step 1.1, algebra]

3.1 Since $L_E(-1)=0$, the derivative identity forces $\partial_x\mathcal Y(e,x)f=0$. Write each coefficient as $x^aP_a(\log x)$ with $P_a$ a finite polynomial. Its derivative is $x^{a-1}(aP_a+P_a')$. For $a\ne0$, its top coefficient forces $P_a=0$; for $a=0$ one has $P_a'=0$. Distinct exponents remain distinct after differentiation. The only remaining term is therefore a constant $B(e,f)$, bilinear in $e,f$. Conversely any such $B$ has the required truncation, zero derivative and zero Möbius brackets. Its Jacobi identity is the scalar delta identity in step 2.1 multiplied by $aB(e,f)$ for the state $a\mathbf1$. Thus the assignment $B\mapsto\mathcal Y_B$ is a linear bijection, and bases of $E,F,G$ show its dimension is the displayed product. [F2, step 2.1, algebra]

4.1 The completion of $G$ is $G$, since it has only weight zero. With the specified trivial auxiliary grading, every linear map preserves auxiliary degree and its two input degrees add to zero. A P(z)-map is consequently just a linear map $E\otimes F\to G$: weight compatibility is automatic and lower truncation is automatic outside that single weight. Its Jacobi identity reduces to $$x_0^{-1}\delta\left(\frac{x_1-z}{x_0}\right)-z^{-1}\delta\left(\frac{x_1-x_0}{z}\right)=x_0^{-1}\delta\left(\frac{z-x_1}{-x_0}\right),$$ multiplied by its value and the scalar state; this is the identity in step 2.1 with $x_2=z$, with the prescribed formal expansions. All three brackets vanish. Every linear map is therefore admitted. Composition with the identity of $E\otimes F$ gives precisely the required natural bijection of Hom spaces. This proves the P(z)-universal property directly for every $z\ne0$. [F3, step 2.1, step 3.1, algebra]

4.2 Because $V_+=0$, $C_1(E)=0$ and its quotient has dimension $\dim E$. Each strict weight cutoff is either zero or $E$, hence finite dimensional. The opposite transform fixes $\mathbf1$, so its transposed scalar field on $E^*$ is again scalar multiplication, and evaluation $E\to E^{**}$ is a module isomorphism by finite-dimensional linear algebra. Every finite product or iterate of the operators from step 3.1 is an actual finite composition of bilinear maps, independent of all insertion variables. There is a single nonzero weight projection, so the projected series are finite. Matrix coefficients converge absolutely, extend as single-valued constant functions, and have a regular expansion with exponent zero and logarithmic degree zero at every boundary divisor. [F4, step 2.1, step 3.1, algebra]

5.1 The associator sends $(e\otimes f)\otimes g$ to $e\otimes(f\otimes g)$, unit maps are scalar multiplication, and the braiding sends $e\otimes f$ to $f\otimes e$. Their inverses are the reverse rebracketing, insertion of $1$, and the reverse flip. They are linear module maps and natural because their formulas commute with arbitrary linear maps on the factors. Both routes through the associativity pentagon send $((e\otimes f)\otimes g)\otimes h$ to $e\otimes(f\otimes(g\otimes h))$; both triangle routes send $(e\otimes a)\otimes f$ to $e\otimes af$. In the first hexagon both routes send $(e\otimes f)\otimes g$ to $f\otimes(g\otimes e)$, and in the second both send $e\otimes(f\otimes g)$ to $(g\otimes e)\otimes f$. Pure tensors span, so these verify all coherence equations. Choosing a basis $e_i$ of $E$ with dual $e_i^*$, evaluation $e_i^*\otimes e_j\mapsto\delta_{ij}$ and coevaluation $1\mapsto\sum_i e_i\otimes e_i^*$ have triangle composites $e\mapsto\sum_i e_i e_i^*(e)=e$ and $\lambda\mapsto\sum_i\lambda(e_i)e_i^*=\lambda$. These formulas also cover dimension zero by the empty sum. Hence this particular example has duality by direct verification. [step 2.1, step 4.1, step 4.2, algebra] ∎
