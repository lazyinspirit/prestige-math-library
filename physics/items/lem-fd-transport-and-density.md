---
id: lem-fd-transport-and-density
kind: lemma
title: "Smooth transport, Jacobian and advected reference density"
status: published
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 1
deps:
  - def-fd-smooth-motion
  - thm-euclidean-inverse-function-theorem
  - thm-chain-rule-for-total-derivatives
  - cor-determinant-is-a-polynomial-in-the-matrix-entries
  - thm-change-of-variables-for-compact-jordan-sets
  - thm-injective-c-one-images-of-compact-jordan-sets-are-jordan
  - thm-continuous-functions-on-compact-jordan-sets-are-integrable
  - def-riemann-integral-over-a-jordan-set
  - lem-jordan-set-integral-well-defined
  - thm-multidimensional-integral-properties
  - thm-mean-value-inequality-for-total-derivatives
  - cor-zero-total-derivative-on-a-convex-open-set-is-constant
dependency_roles:
  def-fd-smooth-motion: mathematical-premise
  thm-euclidean-inverse-function-theorem: mathematical-premise
  thm-chain-rule-for-total-derivatives: mathematical-premise
  cor-determinant-is-a-polynomial-in-the-matrix-entries: mathematical-premise
  thm-change-of-variables-for-compact-jordan-sets: mathematical-premise
  thm-injective-c-one-images-of-compact-jordan-sets-are-jordan: mathematical-premise
  thm-continuous-functions-on-compact-jordan-sets-are-integrable: mathematical-premise
  def-riemann-integral-over-a-jordan-set: mathematical-premise
  lem-jordan-set-integral-well-defined: mathematical-premise
  thm-multidimensional-integral-properties: mathematical-premise
  thm-mean-value-inequality-for-total-derivatives: mathematical-premise
  cor-zero-total-derivative-on-a-convex-open-set-is-constant: mathematical-premise
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "R. Abeyaratne, Continuum Mechanics, Volume II of Lecture Notes on the Mechanics of Solids (MIT, 1988, revised 2020), Chapter 3 §§3.4.3 and 3.7"
      url: "https://web.mit.edu/abeyaratne/Volumes/RCA_Vol_II.pdf"
    - title: "James F. Price, Lagrangian and Eulerian Representations of Fluid Flow, Part 1: Kinematics and the Equations of Motion (MIT OpenCourseWare, Fall 2024; essay revised August 2023), §§3.2–3.4.1"
      url: "https://ocw.mit.edu/courses/res-12-001-topics-in-fluid-dynamics-fall-2024/mitres_12_001_f24_essay1_pt1.pdf"
  scraped: []
verification:
  precheck: pass
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-10-23
    scope: Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/fluid-dynamics-all-47-2026-10-23-publication.json.
    delegated_by: owner
physical_scope: null
empirical_premises: []
---

## Statement

Let $I\subseteq\mathbb R$ be an open interval containing $0$, let $B\subseteq\mathbb R^3$ be a bounded open region, let $U$ be an open neighborhood of $\overline B$, and let $\chi\in C^2(I\times U,\mathbb R^3)$ be a family of orientation-preserving diffeomorphisms $\chi_t:U\to\chi_t(U)$ with $J(t,a):=\det D_a\chi(t,a)>0$. Here $C^r$ means that all coordinate partial derivatives through total order $r$ exist and are continuous; a diffeomorphism is a bijection with an inverse of the stated regularity. Write $A(t,x)=\chi_t^{-1}(x)$, $u(t,x)=\partial_t\chi(t,A(t,x))$, $F=D_a\chi$, $L=D_xu$, and $\theta=\operatorname{tr}L=\sum_{i=1}^3\partial_{x_i}u_i$. Here $D_a\chi$ and $D_xu$ are matrices of coordinate partial derivatives. The joint inverse $A$ has domain $\Omega=\{(t,x):t\in I,\ x\in\chi_t(U)\}$.

A compact Jordan set $K\subset\mathbb R^3$ means a compact set whose boundary, for every $\varepsilon>0$, is coverable by finitely many axis-parallel boxes with total volume less than $\varepsilon$, where a box's volume is the product of its side lengths. Integrals over such sets are Riemann integrals, defined by extending the integrand by zero to a containing rectangle. Let $K\subset U$ be any compact Jordan set and let $q,\rho\in C^1(\Omega,\mathbb R)$. Then $A$ is jointly $C^2$, and for every $a\in U$ and $t\in I$,

$$\partial_tF(t,a)=L(t,\chi(t,a))F(t,a),\qquad \partial_tJ(t,a)=J(t,a)\theta(t,\chi(t,a)),\qquad J(t,a)=J(0,a)\exp\!\left(\int_0^t\theta(s,\chi(s,a))\,ds\right).$$

For every $t\in I$, change of variables and material transport satisfy

$$\int_{\chi_t(K)}q(t,x)\,dx=\int_Kq(t,\chi(t,a))J(t,a)\,da,$$

$$\frac{d}{dt}\int_{\chi_t(K)}q(t,x)\,dx=\int_{\chi_t(K)}\bigl(D_tq(t,x)+q(t,x)\theta(t,x)\bigr)\,dx=\int_{\chi_t(K)}\bigl(\partial_tq+\nabla_x\!\cdot(qu)\bigr)\,dx,$$

where $D_tq=\partial_tq+u\cdot\nabla_xq$ and $\nabla_x\!\cdot(qu)=\sum_{i=1}^3\partial_{x_i}(qu_i)$. Define $M_K(t):=\int_{\chi_t(K)}\rho(t,x)\,dx$. The pointwise continuity equation $D_t\rho+\rho\theta=0$, equivalently $\partial_t\rho+\nabla_x\!\cdot(\rho u)=0$, holds on $\Omega$ if and only if $M_K$ is constant on $I$ for every compact Jordan $K\subset U$, and if and only if $\rho(t,\chi(t,a))J(t,a)=\rho(0,\chi(0,a))J(0,a)$ for all $a\in U$ and $t\in I$. This is a mathematical equivalence; it adopts no physical mass-conservation postulate and asserts no weak-field or vacuum extension.

## Statement references

[R. Abeyaratne, *Continuum Mechanics*, Volume II, §§3.4.3 and 3.7 (printed pp. 71–72, 86–88)](https://web.mit.edu/abeyaratne/Volumes/RCA_Vol_II.pdf)

[James F. Price, *Lagrangian and Eulerian Representations of Fluid Flow*, Part 1, §§3.2–3.4.1 (MIT OpenCourseWare, Fall 2024)](https://ocw.mit.edu/courses/res-12-001-topics-in-fluid-dynamics-fall-2024/mitres_12_001_f24_essay1_pt1.pdf)

## Facts & Assumptions

**Given:** The motion, fields, and compact Jordan set in the statement.

[F1] The stated motion is jointly $C^2$ with orientation-preserving diffeomorphic slices; $u=\partial_t\chi\circ A$ and $D_t=\partial_t+u\cdot\nabla_x$ are the local definitions in this lemma's Statement. Joint inverse regularity is proved in steps 1.1 and 2.1 using [F2]. The notation agrees with [[def-fd-smooth-motion]] when that definition's regular-body hypotheses apply; no regularity of $\partial B$ is needed here.

[F2] [[thm-euclidean-inverse-function-theorem]]: a $C^1$ Euclidean map with invertible derivative at a point has a $C^1$ local inverse with derivative given by the inverse matrix.

[F3] [[thm-chain-rule-for-total-derivatives]]: for composable totally differentiable Euclidean maps, $D(g\circ f)=Dg(f)Df$.

[F4] [[cor-determinant-is-a-polynomial-in-the-matrix-entries]]: for every finite matrix size the determinant is given by its Leibniz permutation polynomial; in particular, for a $3\times3$ matrix $M=(m_{ij})$, $\det M=\sum_{\sigma\in S_3}\operatorname{sgn}(\sigma)\prod_{i=1}^3m_{\sigma(i),i}$, where $S_3$ is the set of permutations of $\{1,2,3\}$ and $\operatorname{sgn}(\sigma)$ is $1$ or $-1$ according as $\sigma$ is even or odd.

[F5] [[thm-change-of-variables-for-compact-jordan-sets]]: an injective $C^1$ Euclidean map with invertible derivative transforms Riemann integrals over compact Jordan sets by the absolute determinant.

[F6] [[thm-continuous-functions-on-compact-jordan-sets-are-integrable]]: every continuous real function on a compact Jordan set is Riemann integrable there.

[F7] [[def-riemann-integral-over-a-jordan-set]], [[lem-jordan-set-integral-well-defined]]: the integral over a bounded Jordan set is the zero-extension integral on a containing rectangle, independent of the chosen rectangle.

[F8] [[thm-multidimensional-integral-properties]]: on a rectangle the Riemann integral is linear, monotone, and satisfies the absolute-value bound.

[F9] [[thm-mean-value-inequality-for-total-derivatives]]: on a convex open interval, a uniform derivative bound gives the corresponding difference bound for a scalar function.

[F10] [[cor-zero-total-derivative-on-a-convex-open-set-is-constant]]: a totally differentiable map with zero derivative on a convex open set is constant there.

[F11] [[thm-injective-c-one-images-of-compact-jordan-sets-are-jordan]]: an injective $C^1$ map with invertible derivative sends every compact Jordan set $K$ in its domain to a compact Jordan image $g(K)$

## Proof

1.1 Set $H(t,a)=(t,\chi(t,a))$. It is $C^2$ and injective: equality of two images first gives equal times and then equal labels by injectivity of that time slice. Its derivative is block triangular with determinant $J(t,a)>0$, so [F2] gives local $C^1$ inverses; injectivity makes these local inverses agree on overlaps and yields the joint $C^1$ inverse on $\Omega$. [given, F1, F2, algebra]

1.2 For fixed $t$, the image $\chi_t(K)$ is compact Jordan by [F11]. The continuous function $q(t,\cdot)$ is Riemann integrable there by [F6]. The map $\chi_t$ is injective and $C^1$ with invertible derivative, so applying [F5] and using $J(t,a)>0$ gives $\int_{\chi_t(K)}q(t,x)\,dx=\int_KG_1(t,a)\,da$, where $G_1(t,a):=q(t,\chi(t,a))J(t,a)$. [F5, F6, F11, given]

2.1 Differentiating $H\circ H^{-1}=\mathrm{id}$ and using [F3] gives $D(H^{-1})=(DH\circ H^{-1})^{-1}$. Since $DH$ and $H^{-1}$ are $C^1$, their composition is $C^1$. Each entry of its inverse is a cofactor divided by its nonzero determinant; cofactors are determinants of minors and are polynomials by [F4]. Thus $D(H^{-1})$ is $C^1$, so $H^{-1}$ is $C^2$ and in particular $A$ is jointly $C^2$. [F3, F4, step 1.1, algebra]

3.1 Differentiate $A(t,\chi(t,a))=a$ in $t$ and in $a$. The chain rule gives $\partial_tA+(D_xA)u=0$ and $(D_xA)F=I_3$, hence $D_xA=F^{-1}$. For every $C^1$ scalar field $q$, it also gives $\partial_t(q(t,\chi(t,a)))=(D_tq)(t,\chi(t,a))$. [F1, F3, step 2.1]

4.1 To justify commuting the mixed partials, fix a component $g$ of $\chi$ and a reference coordinate $a_i$. For sufficiently small $h,k$, the rectangular increment $g(t+h,a+ke_i)-g(t,a+ke_i)-g(t+h,a)+g(t,a)$ equals both $\int_t^{t+h}\!\int_0^k \partial_{a_i}\partial_sg(s,a+re_i)\,dr\,ds$ and $\int_0^k\!\int_t^{t+h}\partial_s\partial_{a_i}g(s,a+re_i)\,ds\,dr$, by the one-variable fundamental theorem of calculus applied in the two orders. Divide by $hk$ and let $h,k\to0$; continuity of both second partials gives $\partial_t\partial_{a_i}g=\partial_{a_i}\partial_tg$. Hence $\partial_tF=D_a\partial_t\chi$. Now use $\partial_t\chi=u(t,\chi)$ and [F3] to obtain $\partial_tF=(D_xu)(t,\chi)F=L(t,\chi)F$. [given, F1, F3, step 3.1, algebra]

5.1 Put $C=F^{-1}\partial_tF$. The permutation formula in [F4] is a finite sum with one entry from each column; the product rule therefore differentiates $J$ by replacing one column at a time: $\partial_tJ=\sum_{j=1}^3\det(F_1,\ldots,\partial_tF_j,\ldots,F_3)$. Since $\partial_tF=FC$, multilinearity expands $\partial_tF_j=\sum_iF_iC_{ij}$ in the $j$th term. For $i\ne j$, the resulting determinant has two equal columns and its permutation terms cancel in pairs under the transposition of those columns; only $i=j$ remains. Thus $\partial_tJ=J\sum_jC_{jj}=J\operatorname{tr}C$. By step 4.1, $C=F^{-1}L(t,\chi)F$, and the finite-sum calculation $\sum_i(F^{-1}LF)_{ii}=\sum_{j,k}L_{jk}\sum_iF_{ki}(F^{-1})_{ij}=\sum_jL_{jj}$ gives $\operatorname{tr}(F^{-1}LF)=\operatorname{tr}L$. Hence $\partial_tJ=J\theta(t,\chi)$. [F4, step 4.1, algebra]

6.1 For fixed $a$, set $h(s)=\theta(s,\chi(s,a))$ and $G(t)=\int_0^t h(s)\,ds$. Continuity gives Riemann integrability on each compact subinterval by [F6]. For small nonzero $k$, the absolute integral estimate [F8] yields $\left|(G(t+k)-G(t))/k-h(t)\right|\le\sup_{s\text{ between }t\text{ and }t+k}|h(s)-h(t)|$, which tends to zero. Thus $G'=h$. By step 5.1, $(J e^{-G})'=0$; [F10] makes this product constant on the interval $I$, and evaluating at $t=0$ gives the stated exponential formula. [F6, F8, F10, step 5.1, algebra]

6.2 The function $G_1$ from step 1.2 is $C^1$. By the chain and product rules and steps 3.1 and 5.1, $\partial_tG_1(t,a)=\bigl(D_tq+q\theta\bigr)(t,\chi(t,a))J(t,a)$. [F1, F3, step 1.2, step 3.1, step 5.1, algebra]

7.1 If $K=\varnothing$, the fixed-domain integral in step 1.2 and its derivative are zero, and step 1.2 identifies the moving-domain integral with it; thus the differentiation assertion holds. Assume $K\ne\varnothing$. Fix $t$ and choose a compact interval $T\subset I$ around it with $T\times K\subset I\times U$. For any $\varepsilon>0$ and each $a_0\in K$, continuity of $\partial_tG_1$ at $(t,a_0)$ supplies a product neighborhood $T_{a_0}\times V_{a_0}$ on which $\partial_tG_1$ differs from $\partial_tG_1(t,a_0)$ by less than $\varepsilon/3$. A finite subcover of $K$ and the minimum of its finitely many time widths show that $|\partial_tG_1(s,a)-\partial_tG_1(t,a)|<2\varepsilon/3$ uniformly for $a\in K$ when $s$ is sufficiently close to $t$. Choose an open interval $V$ containing $t$, contained in $\operatorname{int}T$ and in this time neighborhood, and take $k\ne0$ small enough that the segment from $t$ to $t+k$ lies in $V$. For each fixed $a\in K$, the $C^1$ function $\phi_a(s):=G_1(s,a)-G_1(t,a)-(s-t)\partial_tG_1(t,a)$ has derivative $\phi_a'(s)=\partial_tG_1(s,a)-\partial_tG_1(t,a)$, whose absolute value is less than $2\varepsilon/3$ throughout $V$. Applying [F9] to $\phi_a|_V$ gives the same uniform bound for the difference-quotient error. Thus the difference quotients converge uniformly on $K$ to $\partial_tG_1(t,\cdot)$. [F9, step 1.2, step 6.2, algebra]

8.1 The integrands $G_1(t,\cdot)$ and $\partial_tG_1(t,\cdot)$ are continuous on $K$ and hence integrable by [F6]. Use [F7] to represent the integrals as integrals of zero extensions on one fixed nondegenerate containing rectangle. Outside $K$ the extended difference quotients are zero, so [F8]'s absolute-value bound moves the difference quotient through the rectangle integral and bounds its error by the rectangle's volume times the uniform error. The uniform convergence from step 7.1 proves $\frac{d}{dt}\int_KG_1(t,a)\,da=\int_K\partial_tG_1(t,a)\,da$. [F6, F7, F8, step 7.1]

9.1 Substitute step 6.2 into step 8.1 and use step 1.2 to return to current coordinates. The coordinate product rule gives $\nabla_x\!\cdot(qu)=u\cdot\nabla_xq+q\theta$, proving both transport identities. [step 1.2, step 6.2, step 8.1, algebra]

10.1 Set $R:=D_t\rho+\rho\theta$. It is continuous on $\Omega$ because $u,\rho\in C^1$ and $\theta$ is continuous. Step 9.1 gives $M_K'(t)=\int_{\chi_t(K)}R(t,x)\,dx$. If $R=0$, each $M_K$ has zero derivative and is constant by [F10] on $I$. [F10, step 9.1, given]

10.2 Conversely, if every $M_K$ is constant, then its derivative is zero. For each fixed $t$, $R(t,\cdot)$ is continuous, and [F11] makes $\chi_t(K)$ compact Jordan; [F6] therefore makes $R(t,\cdot)$ Riemann integrable there, so [F5] and step 9.1 give $\int_KR(t,\chi(t,a))J(t,a)\,da=0$ for every compact Jordan $K\subset U$. If the continuous integrand were positive at some $a_0\in U$, continuity and $J>0$ would give a small closed cube $C\subset U$ on which it is at least half its positive value at $a_0$. Monotonicity in [F8] would then give a strictly positive integral over $C$, since $C$ has positive volume, contradicting the zero integral. If it were negative, apply the same argument to its negative and use linearity in [F8]. Thus $R(t,\chi(t,a))J(t,a)=0$ for every $a\in U$; since $J>0$ and $\chi_t$ maps $U$ onto $\chi_t(U)$, $R=0$ throughout the swept open set. [F1, F5, F6, F8, F11, step 9.1, algebra]

11.1 For fixed $a\in U$, product and chain rules give $\frac{d}{dt}[\rho(t,\chi(t,a))J(t,a)]=J(t,a)R(t,\chi(t,a))$. If $R=0$, [F10] makes this product constant on $I$, with value $\rho(0,\chi(0,a))J(0,a)$. Conversely, that invariance implies its derivative is zero, and $J>0$ gives $R=0$. Together with steps 10.1 and 10.2 this proves all equivalences. [F1, F3, F10, step 5.1, step 10.1, step 10.2, algebra] ∎
