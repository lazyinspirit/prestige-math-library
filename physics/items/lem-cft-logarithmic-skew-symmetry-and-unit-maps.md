---
id: lem-cft-logarithmic-skew-symmetry-and-unit-maps
kind: lemma
title: Logarithmic skew symmetry and the tensor unit maps
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-retained-2026-10-29
page: vertex-modules-intertwiners-and-fusion
dependency_level: 5
domain: mathematics
library: mathematics
proof_strategy: direct
deps:
  - def-cft-hlz-strongly-graded-generalized-module
  - def-cft-logarithmic-intertwining-operator
  - def-cft-pz-tensor-product
  - lem-cft-pz-parallel-transport
dependency_roles:
  def-cft-hlz-strongly-graded-generalized-module: mathematical-premise
  def-cft-logarithmic-intertwining-operator: mathematical-premise
  def-cft-pz-tensor-product: mathematical-premise
  lem-cft-pz-parallel-transport: mathematical-premise
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Huang, Lepowsky and Zhang, Logarithmic tensor category theory, II
      url: https://arxiv.org/pdf/1012.4196v2
      locator: Equations 3.76–3.78 and Proposition 3.44; skew symmetry is verified locally below rather than imported.
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
---

## Statement

Let $V$ be a strongly graded Möbius or conformal vertex algebra and $W_1,W_2,X$ strongly graded generalized modules. If $\mathcal Y$ is a grading-compatible logarithmic intertwining operator of type $\binom X{W_1\ W_2}$ and $r\in\mathbb Z$, set
$$\Omega_r(\mathcal Y)(w_2,x)w_1=e^{xL_X(-1)}\mathcal Y(w_1,e^{(2r+1)\pi i}x)w_2.$$
The substitution sends $x^h$ to $e^{(2r+1)\pi ih}x^h$ and $\log x$ to $\log x+(2r+1)\pi i$. Then $\Omega_r(\mathcal Y)$ is a grading-compatible logarithmic intertwining operator of type $\binom X{W_2\ W_1}$, with inverse $\Omega_{-r-1}$.

The logarithmic intertwiners of type $\binom X{V\ W}$ are precisely
$$\mathcal Y_k(v,x)w=Y_X(v,x)k(w),$$
where $k:W\to X$ is a grading-preserving module map commuting with the Möbius operators. The intertwiners of type $\binom X{W\ V}$ are precisely
$$\mathcal Z_k(w,x)v=e^{xL_X(-1)}Y_X(v,-x)k(w),\qquad \mathcal Z_k(w,x)\mathbf1=e^{xL_X(-1)}k(w).$$
The module field has integer powers, so this last formula is independent of the integer branch label.

Let $\mathcal C$ be full, contain $V,W$, and have the relevant representing $P(z)$-products. In the objectwise uniformly nilpotent setting of logarithmic reconstruction, these classifications give natural isomorphisms $l_z:V\boxtimes_zW\to W$ and $r_z:W\boxtimes_zV\to W$ with universal values
$$\overline{l_z}(v\boxtimes_z w)=Y_W(v,z)w,\qquad \overline{r_z}(w\boxtimes_zv)=e^{zL_W(-1)}Y_W(v,-z)w.$$
For arbitrary $W_1,W_2$, skew symmetry similarly gives a natural isomorphism $R_z:W_1\boxtimes_zW_2\to W_2\boxtimes_{-z}W_1$ with universal value $e^{zL(-1)}(w_2\boxtimes_{-z}w_1)$ when the logarithm at $-z$ is chosen to be the logarithm at $z$ plus $(2r+1)\pi i$. With other endpoint logarithms, use that same lifted-logarithm evaluation of the reconstructed universal operator. Its inverse uses the reverse logarithm increment. No products of two intertwining operators or their analytic associativity are assumed here.

## Statement references

[[def-cft-hlz-strongly-graded-generalized-module]]

[[def-cft-logarithmic-intertwining-operator]]

[[def-cft-pz-tensor-product]]

[[lem-cft-pz-parallel-transport]]

## Facts & Assumptions

**Given:** The strong module gradings, the logarithmic Jacobi, derivative and Möbius identities, and the branch convention in the Statement.

[F1] [[def-cft-logarithmic-intertwining-operator]] supplies lower truncation with a bound independent of log degree in each integer exponent string, coefficientwise finite logarithmic polynomials, Jacobi and the three Möbius identities.

[F2] [[def-cft-hlz-strongly-graded-generalized-module]] supplies lower truncation in each fixed auxiliary-degree weight string and the commutators $[L(0),L(-1)]=L(-1)$ and $[L(1),L(-1)]=2L(0)$. Exponentials in this proof are interpreted componentwise; no global weight bound is assumed.

[F3] [[lem-cft-pz-parallel-transport]] supplies the local reconstruction/evaluation bijection with a fixed logarithm in its stated objectwise uniformly nilpotent scope; [[def-cft-pz-tensor-product]] supplies the representing universal property. Only this bijection, not any associativity or braiding conclusion, is used.

## Proof

1.1 Every coefficient of $e^{xL(-1)}\mathcal Y(w_1,-x)w_2$ is finite: a contribution to a fixed exponent comes from an original exponent smaller by a nonnegative integer $j$ and the factor $x^jL(-1)^j/j!$. Lower truncation in that exponent string bounds $j$ above. Each remaining coefficient is a finite logarithmic polynomial, and a fixed branch shift preserves that property. The same bound proves the new lower truncation; auxiliary degrees still add. The $L(0)$ commutator ensures that coefficients have the required generalized output weights: on a fixed exponent the difference between the output $L(0)$ and the sum of input weights is a finite combination of the two input nilpotent operators and log differentiation, all nilpotent on that coefficient. Thus the construction respects the generalized grading without any bound on all weight strings together. [given, F1, F2, algebra]

2.1 Translation covariance gives $e^{-xL(-1)}Y_X(a,t)e^{xL(-1)}=Y_X(a,t-x)$, expanded in nonnegative powers of $x$. This follows by solving the coefficientwise differential equation in $x$ from $[L(-1),Y_X(a,t)]=\partial_tY_X(a,t)$. Differentiating the definition of $\Omega_r$ gives $e^{xL(-1)}(L(-1)\mathcal Y(w_1,-x)-\mathcal Y(L(-1)w_1,-x))w_2$, since the substituted variable is $-x$ also on complex powers and shifted logarithms. The original $L(-1)$ bracket makes this $\Omega_r(\mathcal Y)(L(-1)w_2,x)w_1$. This proves the required derivative identity with the correct swapped first input. [F1, F2, step 1.1, algebra]

3.1 To prove the full swapped Jacobi identity, take original Jacobi with iterate variable $y_1$, module-current variable $y_0$, and intertwiner variable $-x$, using the chosen logarithm shift in the latter. Multiply by $e^{xL(-1)}$ and move the output current through this exponential using Step 2.1. Its three delta factors become respectively $$y_1^{-1}\delta\left(\frac{y_0+x}{y_1}\right)=y_0^{-1}\delta\left(\frac{y_1-x}{y_0}\right),$$ $$y_1^{-1}\delta\left(\frac{-x-y_0}{-y_1}\right)=x^{-1}\delta\left(\frac{y_1-y_0}{x}\right),$$ $$(-x)^{-1}\delta\left(\frac{y_0-y_1}{-x}\right)=y_0^{-1}\delta\left(\frac{x-y_1}{-y_0}\right).$$ Each equality is the formal delta reciprocity identity with its displayed numerator expansion, verified on Laurent monomials. In the first term delta substitution turns the output current into $Y_X(a,y_1)$ after conjugation; the other two terms are respectively $\Omega_r(\mathcal Y)(Y_{W_2}(a,y_0)w_2,x)w_1$ and $\Omega_r(\mathcal Y)(w_2,x)Y_{W_1}(a,y_1)w_1$. Move the original iterate term to the left and the original second term to the right. The resulting identity is precisely logarithmic intertwiner Jacobi for the swapped inputs. All exponential and substitution coefficients are finite by Step 1.1; the three binomial expansion orders were retained in the displayed identities. [F1, step 1.1, step 2.1, algebra]

4.1 For Möbius covariance write $P(x)=\begin{pmatrix}1&0&0\\x&1&0\\x^2&2x&1\end{pmatrix}$ with rows indexed by $-1,0,1$. The original three bracket identities say that the column of brackets is $P(y)$ times the column of $\mathcal Y(L(j)w_1,y)$. Since $P(x)P(-x)=1$, at $y=-x$ one has $\mathcal Y(L(j)w_1,-x)=\sum_{a=0}^{j+1}\binom{j+1}{a}x^a[L(j-a),\mathcal Y(w_1,-x)]$. Also $e^{-xL(-1)}L(j)e^{xL(-1)}=\sum_{a=0}^{j+1}\binom{j+1}{a}x^aL(j-a)$ by the three $\mathfrak{sl}_2$ brackets. Subtracting these two identities in the definition of the bracket with $\Omega_r$ leaves exactly $\sum_a\binom{j+1}{a}x^a\Omega_r(\mathcal Y)(L(j-a)w_2,x)$, as required. Finally, composing $\Omega_r$ with $\Omega_{-r-1}$ cancels $e^{xL(-1)}e^{-xL(-1)}$ and the two logarithm increments sum to zero. Hence both compositions are the identity, proving invertibility. [F1, F2, step 1.1, step 3.1, algebra]

5.1 Let $\mathcal Y$ have first input $V$. Its derivative identity applied to $\mathbf1$ shows that $\partial_x\mathcal Y(\mathbf1,x)=0$. The derivative of a finite logarithmic polynomial times a complex power vanishes only for a constant coefficient at power zero: for nonzero power compare the highest log degree, and for power zero differentiate the polynomial. Thus $\mathcal Y(\mathbf1,x)=k$ is an actual linear map $W\to X$. The current commutator derived by a Jacobi residue gives $a_{(m)}k-ka_{(m)}=\sum_{j\ge0}\binom mjx^{m-j}\mathcal Y(a_{(j)}\mathbf1,x)=0$ for every integer $m$. Hence $k$ is a module map. The three Möbius brackets on $\mathbf1$ show that it also intertwines $L(-1),L(0),L(1)$; the gradings show it preserves the auxiliary degree and generalized weights. To recover the full operator, take the Jacobi residue for the first-input state $a=a_{(-1)}\mathbf1$. It gives $$\mathcal Y(a,x)=\operatorname{Res}_t\left(\iota_{t,x}(t-x)^{-1}Y_X(a,t)k-\iota_{x,t}(t-x)^{-1}kY_W(a,t)\right)=Y_X(a,x)k,$$ since $k$ intertwines the fields and the difference of the two kernels is $t^{-1}\delta(x/t)$. Conversely this formula for any such $k$ satisfies Jacobi by module Jacobi, and its derivative and Möbius identities follow from those of the module field. This proves the left-unit classification. Applying the proved inverse skew transformation gives the right-unit classification and the displayed vacuum value. [F1, F2, step 3.1, step 4.1, algebra]

6.1 In the reconstruction scope, [F3] evaluates these two classifications as natural bijections between $P(z)$-maps with inputs $(V,W)$ or $(W,V)$ and module maps out of $W$. Thus $W$ with the two displayed universal maps represents the respective functor. The representing property of $V\boxtimes_zW$ and $W\boxtimes_zV$ gives the unique comparison isomorphisms $l_z,r_z$. More explicitly, the universal map of either chosen product corresponds by Step 5.1 to a module map $k:W\to T$; its composite with the displayed comparison is the identity of $W$, and the reverse composite is the identity of $T$ because it agrees with the universal map. This proves actual inverses and naturality without a dimension or spanning argument. Similarly evaluate $\Omega_r$ on the reconstructed universal operator for $W_2\boxtimes_{-z}W_1$. It gives the stated $P(z)$-map, hence a unique $R_z$ by universality. The inverse skew transformation with the reversed logarithm increment gives its inverse; equality of both composites is forced by their equality on the universal maps. Naturality follows in the same way, since module maps commute with all the formulas. This constructs the skew and unit maps without an external skew-symmetry or tensor-unit theorem. [F3, step 4.1, step 5.1, algebra] ∎
