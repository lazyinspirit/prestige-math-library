---
id: thm-cft-strongly-graded-contragredient-duality
kind: theorem
title: Strongly graded contragredient duality for Möbius and conformal modules
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-retained-2026-10-29
page: vertex-modules-intertwiners-and-fusion
dependency_level: 1
domain: mathematics
library: mathematics
proof_strategy: direct
deps:
  - def-cft-hlz-strongly-graded-generalized-module
  - def-vertex-algebra-module
dependency_roles:
  def-cft-hlz-strongly-graded-generalized-module: mathematical-premise
  def-vertex-algebra-module: mathematical-premise
sources:
  references:
    - title: "Huang, Lepowsky and Zhang, Part I, Definition 2.32, equations (2.96)–(2.101), Theorem 2.34"
      url: https://arxiv.org/pdf/1012.4193v7
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  precheck: pending
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

Let $A\subseteq\widetilde A$ be abelian groups, $V$ a strongly $A$-graded Möbius or conformal vertex algebra, and $W$ a strongly $\widetilde A$-graded generalized module. There is no CFT-type, globally bounded-weight, real-weight, or uniformly nilpotent hypothesis. Set
$$W'=\bigoplus_{\beta,h}(W^{(-\beta)}_{[h]})^*,\qquad B(x)=e^{xL(1)}(-x^{-2})^{L(0)},\qquad \langle Y_{W'}(v,x)f,w\rangle=\langle f,Y_W(B(x)v,x^{-1})w\rangle.$$
Give $W'$ the indicated $(\widetilde A,\mathbb C)$-grading and set $L_{W'}(j)=L_W(-j)^t$ for $j=-1,0,1$. These data define a strongly graded generalized module. Componentwise evaluation $W\longrightarrow W''$ is an isomorphism preserving both gradings, fields and Möbius operators. Restricted transposition is a contravariant functor on grading-preserving module maps.

## Statement references

[[def-cft-hlz-strongly-graded-generalized-module]]

[[def-vertex-algebra-module]]

## Facts & Assumptions

**Given:** The strong grading means that each $(\beta,h)$-component is finite dimensional and each fixed $(\beta,h+\mathbb Z)$-string vanishes sufficiently far below. Every vector is a finite sum of components. State weights are integral. Formal powers of $-1$ use these integral weights.

[F1] [[def-cft-hlz-strongly-graded-generalized-module]] supplies the three $\mathfrak{sl}_2$ brackets, translation, the state-field and module-field Möbius commutators, the two gradings and their mode shifts. In particular $L(1)$ is locally nilpotent on a state of fixed auxiliary degree, since it lowers its integer weight in a lower-truncated string.

[F2] [[def-vertex-algebra-module]] supplies module Jacobi, vacuum and lower truncation. No analyticity is part of this input.

## Proof

1.1 We first establish opposite-field identities in this exact generality. For $v\in V^{(\alpha)}_{(d)}$, its opposite modes are $$v_n^o=(-1)^d\sum_{r\geq0}\frac{(L(1)^rv)_{2d-r-n-2}}{r!}.$$ The sum is finite by F1. Each summand has auxiliary-degree shift $\alpha$ and generalized-weight shift $n+1-d$. For every fixed $w$, module truncation shows $v_n^ow=0$ for all sufficiently negative $n$. The opposite vacuum is the identity. These statements use neither a global bound on $W$ nor a lower bound uniform in auxiliary degree. [given, F1, F2, algebra]

1.2 The Möbius brackets on states imply the covariance identities $$b^{L(0)}Y(u,t)b^{-L(0)}=Y(b^{L(0)}u,bt),\qquad e^{aL(1)}Y(u,t)e^{-aL(1)}=Y\left(e^{a(1-at)L(1)}(1-at)^{-2L(0)}u,\frac{t}{1-at}\right).$$ For the second identity, differentiation in $a$ on each side gives the same formal differential equation, using $[L(1),Y(u,t)]=Y(L(1)u,t)+2tY(L(0)u,t)+t^2\partial_tY(u,t)$; the constant terms agree. Recursion in $a$ proves equality coefficientwise. The first follows by the weight commutator. Combining them, with all powers expanded in nonnegative powers of $t$, gives $$B(s)Y(u,t)v=Y\left(B(s+t)u,-\frac{t}{s(s+t)}\right)B(s)v.$$ This calculation uses the state-field Möbius axioms themselves, so it does not import a regular-Jacobi result restricted to CFT-type algebras. [F1, algebra]

1.3 The three Lie brackets give $$L(-1)B=-B(x^2L(-1)+2xL(0)+L(1)),\quad L(0)B=B(L(0)+x^{-1}L(1)),\quad L(1)B=-x^{-2}BL(1).$$ Also $B'=B(-2x^{-1}L(0)-x^{-2}L(1))=BL(-1)+x^{-2}L(-1)B$. The chain rule with module translation proves $\partial_xY_W^o(v,x)=Y_W^o(L(-1)v,x)$. Substituting the three displayed identities in the module Möbius brackets proves $$[Y_W^o(v,x),L_W(-j)]=\sum_{k=0}^{j+1}\binom{j+1}{k}x^kY_W^o(L(j-k)v,x),\quad j=-1,0,1.$$ Finally scaling $L(1)$ across $(-x^2)^{L(0)}$ gives $B(x^{-1})B(x)=1$. All state exponentials used here are finite by F1. [F1, F2, algebra]

2.1 Here is the rational-expansion justification of opposite Jacobi. Fix homogeneous $u,v,w,f$ with $f\in W'$. Module Jacobi makes the scalar product orders and iterate the three expansions of a rational function in $t_1,t_2$ with poles only at $t_1t_2(t_1-t_2)=0$. Indeed choose $N$ such that $u_kv=0$ for $k\geq N$. The commutator residue of Jacobi gives equality of the two product expansions after multiplication by $(t_1-t_2)^N$. In the first expansion truncation on $w$ bounds the negative $t_2$-powers; in the second it bounds the negative $t_1$-powers. The exact generalized-weight shift and the one output weight selected by $f$ fix the sum of the two exponents. Consequently the common multiplied series has both exponents bounded below and is a Laurent polynomial. Multiplying Jacobi by an additional sufficiently large power of $t_1$, taking its $t_1$-residue and using truncation on $w$ permits $t_1=t_2+t_0$ and gives the iterate expansion of that same rational function. Finite sums handle arbitrary inputs. Auxiliary degrees merely make some coefficients zero; no sum over degrees is introduced. [F1, F2, step 1.1, algebra]

2.2 Transposition of the mode shift in step 1.1 sends $f\in(W')^{(\beta)}_{[h]}$ to degree $\alpha+\beta$ and weight $h+d-n-1$. The target is dual to $W^{(-\alpha-\beta)}_{[h+d-n-1]}$. As $n\to+\infty$ this runs down ONE fixed integer string in ONE fixed auxiliary degree, so strong lower truncation makes it zero. Finite support of $f$ and $v$ gives one common bound. Thus the transpose preserves the restricted direct sum and is a lower-truncated field on it. This is the precise replacement for the unavailable global lower-bound argument. [given, F1, step 1.1, algebra]

3.1 Apply step 2.1 to the finite states $B(x_1)u,B(x_2)v$ and put $t_i=x_i^{-1}$. Inversion reverses the order of the radial formal expansions. In the iterate expansion $x_1=x_2+x_0$, step 1.2 identifies the transformed inner state and the difference $t_1-t_2=-x_0/(x_1x_2)$. Thus the opposite products in reversed order and $Y_W^o(Y(u,x_0)v,x_2)$ are precisely the three expansions of one rational function with poles only on $x_1x_2(x_1-x_2)=0$. The formal delta identity for these expansions follows by linearity from the basic delta identity, multiplied by the respective expansions of $x_1^p x_2^q(x_1-x_2)^r$, $p,q,r\in\mathbb Z$: on delta support replace $x_1-x_2$ by $x_0$ and $x_1$ by $x_2+x_0$. Every rational function in question is a finite sum of such monomials. The separating restricted functionals therefore prove opposite Jacobi, with reversed operator products, coefficientwise on $W$. [F2, step 1.2, step 2.1, algebra]

4.1 Pair the candidate module axioms against $w\in W$. Opposite vacuum transposes to vacuum. Transposition reverses the two opposite products in step 3.1, producing ordinary module Jacobi; the expansions are well defined by step 2.2. Translation and the three Möbius brackets transpose from step 1.3. Since transposition reverses a commutator while $j\mapsto-j$ reverses the $\mathfrak{sl}_2$ bracket, $L' (j)=L(-j)^t$ is the required representation. In the conformal case $B(x)\omega=x^{-4}\omega$, so all $L'(n)=L(-n)^t$ are the conformal-field coefficients. The same two reversals preserve the Virasoro central term. [F1, F2, step 3.1, step 1.3, step 2.2, algebra]

5.1 On each finite component the transpose of $L(0)-h$ is nilpotent, so its dual is the generalized-weight-$h$ space. Its dimension and lower truncation in each fixed string agree with those of $W^{(-\beta)}$. There is no assertion of a nilpotence exponent uniform in all components. This verifies every strong-grading requirement for $W'$. Finite-dimensional evaluation identifies $W^{(\beta)}_{[h]}$ with the corresponding double dual. Applying the defining action twice and using $B(x^{-1})B(x)=1$ proves that evaluation commutes with the fields; $L' (j)=L(-j)^t$ proves the same for Möbius operators. [given, step 1.3, step 4.1, algebra]

6.1 For a grading-preserving module map $g:W\to U$, restriction of $g^t$ maps $U'$ to $W'$ because a component maps to that same component. Pairing the field actions and using $gY_W^o=Y_U^og$ proves that $g'$ intertwines all fields, and transposing $gL(j)=L(j)g$ proves the Möbius condition. Transposition reverses compositions and preserves identities. Hence it is the asserted contravariant functor, compatible with the evaluation isomorphisms. [step 4.1, step 5.1, algebra] ∎
