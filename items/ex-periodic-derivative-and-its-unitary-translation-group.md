---
id: ex-periodic-derivative-and-its-unitary-translation-group
kind: example
title: "Periodic derivative and its unitary translation group"
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [cex-symmetric-need-not-be-self-adjoint, thm-self-adjointness-range-criterion, thm-stone-one-parameter-unitary-groups, def-symmetric-self-adjoint-and-essentially-self-adjoint, def-strongly-continuous-one-parameter-unitary-group, def-infinitesimal-generator-of-a-unitary-group, def-absolutely-continuous-function, thm-integration-by-parts-for-absolutely-continuous-functions, thm-fundamental-theorem-of-calculus-for-absolutely-continuous-functions, cor-the-indefinite-integral-of-an-l-one-function-is-absolutely-continuous, thm-first-fundamental-theorem-of-calculus-for-l-one, thm-complex-l-two-inner-product-is-well-defined-and-cauchy-schwarz, cor-c-one-change-of-variables-for-l-one-functions, thm-tonelli-theorem-for-sigma-finite-product-spaces, thm-heine-cantor-r, def-axiom-of-choice]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Dana P. Williams, Lecture Notes on the Spectral Theorem"
      url: "https://www.math.dartmouth.edu/~dana/bookspapers/ln-spec-thm.pdf"
      locator: "Example 7.23 (operator T_2) and Theorem 7.37, pp.32-39"
    - title: "Gerald Teschl, Mathematical Methods in Quantum Mechanics, second edition"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe2.pdf"
      locator: "Section 2.6, pp.91-95 and Section 5.1, pp.145-148"
---

## Example

Assume the Axiom of Choice. Use the complex Hilbert space
$H=L^2((0,1);\mathbb C)$ with first-variable-linear inner product.
Let
$$D(P)=\{f\in H:f\text{ has an }AC[0,1]\text{ representative with } f'\in L^2(0,1),\ f(0)=f(1)\},\qquad Pf=-if'.$$
Complex absolute continuity is read componentwise; the continuous
representative is unique, so endpoint values are unambiguous. Then $P$ is
self-adjoint, and
$$V(t)f(x)=f((x+t)\bmod1),\qquad t\in\mathbb R,$$
defines a strongly continuous unitary group on equivalence classes. Its
infinitesimal generator is $G=iP$, with $D(G)=D(P)$; equivalently
$V(t)=e^{itP}$. The self-adjoint Stone operator is $P$, whereas the derivative
generator is $iP$.

## Facts & Assumptions

**Given:** Full AC, H and P as in the Example.

[A1] The minimal derivative operator T with both endpoint values zero is densely defined on H. Its domain lies in D(P). Its counterexample also proves uniqueness of the absolutely continuous representative in each $L^2$ class and the componentwise complex integration-by-parts formula $\int f'\overline g=[f\overline g]_0^1-\int f\overline{g'}$. In particular for f in D(T), $\langle Tf,g\rangle=+i\int f\overline{g'}$ for absolutely continuous g with derivative in $L^2$. [[cex-symmetric-need-not-be-self-adjoint]] [[def-absolutely-continuous-function]] [[thm-integration-by-parts-for-absolutely-continuous-functions]]

[A2] A densely defined symmetric operator with both ranges ran(P+i)=ran(P-i)=H is self-adjoint. A self-adjoint operator has no proper symmetric extension. The latter is a maximality statement about a self-adjoint smaller operator, not about an arbitrary symmetric restriction of a self-adjoint operator. [[thm-self-adjointness-range-criterion]] [[def-symmetric-self-adjoint-and-essentially-self-adjoint]]

[A3] Under full AC, Stone's theorem identifies a strongly continuous unitary group with e^{itS} for a unique self-adjoint S; its derivative generator G has D(G)=D(S) and G=iS. [[thm-stone-one-parameter-unitary-groups]] [[def-infinitesimal-generator-of-a-unitary-group]] [[def-strongly-continuous-one-parameter-unitary-group]]

[A4] An L1 indefinite integral is absolutely continuous and has the integrand as derivative almost everywhere; an absolutely continuous function equals its initial value plus the integral of its derivative. These statements apply componentwise to complex functions. [[cor-the-indefinite-integral-of-an-l-one-function-is-absolutely-continuous]] [[thm-first-fundamental-theorem-of-calculus-for-l-one]] [[thm-fundamental-theorem-of-calculus-for-absolutely-continuous-functions]]

[A5] The complex $L^2$ pairing is first-variable-linear and satisfies Cauchy--Schwarz. Changes of variable by translations preserve Lebesgue integrals. Tonelli interchanges nonnegative integrals. A continuous function on a compact real interval is uniformly continuous. [[thm-complex-l-two-inner-product-is-well-defined-and-cauchy-schwarz]] [[cor-c-one-change-of-variables-for-l-one-functions]] [[thm-tonelli-theorem-for-sigma-finite-product-spaces]] [[thm-heine-cantor-r]]

[A6] Full AC is assumed for Stone's theorem and supplies the Countable Choice and Dependent Choice required by the calculus, density, range and compactness interfaces. [[def-axiom-of-choice]]

## Verification

**Proof technique:** direct.

1.1 The domain is linear and its representatives and derivatives are well defined by [A1]. Since D(T) is dense and contained in D(P), P is densely defined. For periodic f,g in D(P), integration by parts and the first-variable convention give $$\langle Pf,g\rangle=-i[f\overline g]_0^1+i\int_0^1 f\overline{g'}=i\int_0^1 f\overline{g'}=\langle f,Pg\rangle.$$ Periodicity of both endpoints cancels the boundary term. Thus P is symmetric. [A1, A5, given]

1.2 For real t let r be its representative in [0,1) modulo integers. Splitting the x integral at 1-r and translating on the two intervals gives $$\int_0^1 |f((x+r)\bmod1)|^2dx=\int_r^1|f(y)|^2dy+\int_0^r|f(y)|^2dy=\|f\|_2^2.$$ Endpoints have measure zero. The same computation for indicators of null sets proves independence of the measurable representative; periodic extension from a Lebesgue-measurable representative is measurable, and translations preserve null modifications. V(t) is linear, V(0)=I and V(s)V(t)=V(s+t) on classes by addition modulo 1. Its inverse is V(-t), so it is unitary. [A5, given]

2.1 Let $\varepsilon\in\{1,-1\}$ and $g\in H$. Cauchy--Schwarz gives $g\in L^1(0,1)$. Put $$c_\varepsilon=\frac{-ie^\varepsilon}{e^\varepsilon-1}\int_0^1e^{-\varepsilon s}g(s)ds,\qquad u(x)=e^{\varepsilon x}\left(c_\varepsilon+i\int_0^xe^{-\varepsilon s}g(s)ds\right).$$ The denominator is nonzero for either sign. By [A4], u is absolutely continuous and $u'=\varepsilon u+ig$ almost everywhere. For completeness, the product with the smooth exponential is absolutely continuous: the integral factor is bounded and absolutely continuous, the exponential is bounded with bounded derivative, and the increment product formula verifies the defining AC estimates. Thus u is bounded, belongs to $L^2$, and u' belongs to $L^2$. The displayed constant gives $u(1)=u(0)=c_\varepsilon$. Finally $-iu'+\varepsilon i u=g$, so $(P+\varepsilon i)u=g$. Both shifts are onto; [A2] and step 1.1 make P self-adjoint. [A2, A4, A5, step 1.1]

2.2 Every f in D(T) has a continuous periodic extension. Its restriction to [-1,2] is uniformly continuous by [A5]; hence $\|V(t)f-f\|_2\le\sup_{x\in[0,1]}|f(x+t)-f(x)|\to0$ as t tends to zero through either sign. Given arbitrary f in H and eta>0 choose g in D(T) with $\|f-g\|_2<\eta$ by [A1]. Isometry gives $\|V(t)f-f\|_2\le2\eta+\|V(t)g-g\|_2$. First send t to zero and then eta to zero. The group law and isometry transfer continuity to every real time. Thus V is a strongly continuous unitary group. [A1, A3, A5, step 1.2]

3.1 For f in D(P), its periodic extension is absolutely continuous on every compact interval: finitely many translates of the AC representative join with matching endpoint values, and the AC estimates combine across finitely many joins. Its a.e. derivative is the periodic extension of f'. By [A4], for positive or negative t, $$\frac{V(t)f-f}{t}-f'=\frac1t\int_0^t(V(s)f'-f')ds$$ in the scalar pointwise integral sense for almost every x. Let J_t be the interval between 0 and t. Cauchy--Schwarz in s and Tonelli yield $$\left\|\frac{V(t)f-f}{t}-f'\right\|_2^2\le\frac1{|t|}\int_{J_t}\|V(s)f'-f'\|_2^2ds\le\sup_{|s|\le|t|}\|V(s)f'-f'\|_2^2\longrightarrow0,$$ by step 2.2 applied to the $L^2$ class f'. For joint measurability use the explicit periodic Borel representative of f' obtained as the finite limit of $(n+1)(f(x+1/(n+1))-f(x))$, assigning zero where no finite limit exists. Each difference quotient is continuous, its finite-convergence set is Borel by the countable Cauchy criterion, and the limit equals f' wherever f is differentiable. Composition with addition modulo 1 is jointly Borel. Since the representative differs from f' only on a null set, translation invariance and Tonelli leave the displayed estimates unchanged. Consequently D(P) is contained in D(G) and Gf=f'=iPf. [A3, A4, A5, step 1.2, step 2.2]

4.1 By [A3], S=-iG is self-adjoint. Step 3.1 gives P contained in S, with equal values on D(P). P is itself self-adjoint by step 2.1, so [A2]'s maximality applies to P and its symmetric extension S, and gives P=S. Equivalently the adjoint inclusions read $P\subseteq S=S^*\subseteq P^*=P$. Thus D(G)=D(P), G=iP and Stone's uniqueness gives $V(t)=e^{itP}$. [A2, A3, step 2.1, step 3.1]

5.1 The zero function and every constant function are in D(P); constants are fixed by V and annihilated by P and G. V(0)=I, integer translations are I, and negative times are included in both the group and derivative calculations. No division by t occurs at t=0, only a two-sided limit, and neither $e-1$ nor $e^{-1}-1$ vanishes. Endpoint values belong to the unique AC representative, while the translation action belongs to $L^2$ classes. Full AC has the uses in [A6]; the two resolvent solutions and the translation are explicit. [A1, A6, step 2.1, step 1.2, step 3.1, step 4.1] ∎
