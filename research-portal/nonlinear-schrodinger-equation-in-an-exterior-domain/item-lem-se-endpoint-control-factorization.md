---
title: Endpoint maps and exact steering from a null-control operator
status: published
research_item: lem-se-endpoint-control-factorization
dependency_level: 1
---

## Prerequisites

- [lem-se-observation-gramian-right-inverse](item-lem-se-observation-gramian-right-inverse)
- [def-se-foundation-control-language](item-def-se-foundation-control-language)
- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)
- [math:def-hilbert-space-adjoint](https://alphabetamath.cc/item/def-hilbert-space-adjoint)
- [math:lem-bochner-time-l2-is-separable-hilbert](https://alphabetamath.cc/item/lem-bochner-time-l2-is-separable-hilbert)
- [math:thm-bochner-integrability-criterion](https://alphabetamath.cc/item/thm-bochner-integrability-criterion)
- [math:lem-bochner-integral-norm-inequality](https://alphabetamath.cc/item/lem-bochner-integral-norm-inequality)
- [math:lem-linearity-of-the-bochner-integral](https://alphabetamath.cc/item/lem-linearity-of-the-bochner-integral)
- [math:thm-bounded-linear-maps-commute-with-bochner-integration](https://alphabetamath.cc/item/thm-bounded-linear-maps-commute-with-bochner-integration)
- [math:thm-cauchy-schwarz-in-an-inner-product-space](https://alphabetamath.cc/item/thm-cauchy-schwarz-in-an-inner-product-space)
- [math:def-strongly-measurable-banach-valued-function](https://alphabetamath.cc/item/def-strongly-measurable-banach-valued-function)
- [math:def-banach-valued-simple-function-and-integral](https://alphabetamath.cc/item/def-banach-valued-simple-function-and-integral)
- [def-se-foundation-time-function-spaces](item-def-se-foundation-time-function-spaces)
- [math:cor-lebesgue-sigma-algebra-is-the-completion-of-borel-lebesgue-measure](https://alphabetamath.cc/item/cor-lebesgue-sigma-algebra-is-the-completion-of-borel-lebesgue-measure)
- [math:thm-finite-and-countable-subadditivity-of-measures](https://alphabetamath.cc/item/thm-finite-and-countable-subadditivity-of-measures)
- [math:thm-hilbert-adjoint-properties](https://alphabetamath.cc/item/thm-hilbert-adjoint-properties)
- [math:def-hilbert-space](https://alphabetamath.cc/item/def-hilbert-space)
- [math:def-bounded-linear-operator](https://alphabetamath.cc/item/def-bounded-linear-operator)
- [math:def-operator-norm](https://alphabetamath.cc/item/def-operator-norm)
- [math:thm-holder-inequality-for-integrals](https://alphabetamath.cc/item/thm-holder-inequality-for-integrals)


## Statement

Assume the Axiom of Choice. Let $E$ and $U$ be real Hilbert spaces, with $U$ separable, and let $T>0$. An evolution here is a family of bounded real-linear maps $W(t,r):E\to E$ for $t,r\in[0,T]$ such that $W(t,t)=I$, $W(t,s)W(s,r)=W(t,r)$, and $(t,r)\mapsto W(t,r)x$ is continuous for each $x\in E$. Assume $M=\sup_{0\le r\le T}\|W(T,r)\|<\infty$ and that $B(r):U\to E$ is real-linear, $K=\sup_r\|B(r)\|<\infty$, and $r\mapsto B(r)u$ is continuous for each $u\in U$.

Let $Z=L^2((0,T);U)$ be the space of strongly measurable functions modulo almost-everywhere equality with square-integrable norm, equipped with its integral real inner product. Define $L:Z\to E$ by $Lh=\int_0^T W(T,r)B(r)h(r)\,dr$. Assume, in addition, that for each $v\in E$ the function $r\mapsto B(r)^*W(T,r)^*v$ is strongly measurable. Then $L$ is bounded, and its real Hilbert adjoint is $(L^*v)(r)=B(r)^*W(T,r)^*v$ almost everywhere.

If $\|L^*v\|_Z\ge c\|v\|_E$ for every $v\in E$, where $c>0$, set $Q=LL^*$ and $R=L^*Q^{-1}$. Then $LR=I_E$ and $\|R\|\le c^{-1}$. For the controlled endpoint $u(T)=W(T,0)x_0+Lh$, the bounded linear selection $G(x_0,x_T)=R(x_T-W(T,0)x_0)$ steers $x_0$ to $x_T$.

For continuous controls, suppose that a bounded linear map $J:E\to C([0,T];U)$ represents the observation: its equivalence-class map $iJ$ equals $L^*$. Then $R_C=JQ^{-1}$ is a bounded continuous-control selection with $LR_C=I_E$, where $L$ acts on a continuous function through its class in $Z$. Thus $G_C(x_0,x_T)=R_C(x_T-W(T,0)x_0)$ steers the endpoints. Independently, if a bounded linear null-control selection $N:E\to C([0,T];U)$ satisfies $W(T,0)x+LNx=0$ for every $x\in E$, then $G_N(x_0,x_T)=N(x_0-W(0,T)x_T)$ also steers $x_0$ to $x_T$.

For a complex state space treated as real, multiplication by $-i$ is a real-linear operation. In particular, if multiplication by a coefficient $\varphi$ defines a bounded real-linear map $M_\varphi:U\to E$, the Schrödinger control action may be chosen as $B=-iM_\varphi$, so its contribution is $\int_0^T W(T,r)(-i\varphi h(r))\,dr$. No commutation of $i$ with a real-linear evolution is assumed.

## Statement references

[def-se-foundation-control-language](item-def-se-foundation-control-language)

[math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)

[math:def-hilbert-space-adjoint](https://alphabetamath.cc/item/def-hilbert-space-adjoint)

[math:lem-bochner-time-l2-is-separable-hilbert](https://alphabetamath.cc/item/lem-bochner-time-l2-is-separable-hilbert)

[math:def-strongly-measurable-banach-valued-function](https://alphabetamath.cc/item/def-strongly-measurable-banach-valued-function)

[def-se-foundation-time-function-spaces](item-def-se-foundation-time-function-spaces)

[math:def-hilbert-space](https://alphabetamath.cc/item/def-hilbert-space)

[math:def-bounded-linear-operator](https://alphabetamath.cc/item/def-bounded-linear-operator)

[math:def-operator-norm](https://alphabetamath.cc/item/def-operator-norm)

## Facts & Assumptions

[F1] Under Choice, the Bochner $L^2$ space over a separable real Hilbert space, with the Borel sigma-algebra on $(0,T)$ and restricted Lebesgue measure, is a Hilbert space with the integral pairing; finite-valued interval-step functions are dense ([math:lem-bochner-time-l2-is-separable-hilbert](https://alphabetamath.cc/item/lem-bochner-time-l2-is-separable-hilbert), [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)). This is the Borel-time supplier statement; step 1.2 transfers its conclusions to the completed Lebesgue time convention used here.

[F2] A strongly measurable Banach-valued function with integrable norm is Bochner integrable; its integral obeys the norm estimate and is linear. Bounded linear maps commute with this integral ([math:thm-bochner-integrability-criterion](https://alphabetamath.cc/item/thm-bochner-integrability-criterion), [math:lem-bochner-integral-norm-inequality](https://alphabetamath.cc/item/lem-bochner-integral-norm-inequality), [math:lem-linearity-of-the-bochner-integral](https://alphabetamath.cc/item/lem-linearity-of-the-bochner-integral), [math:thm-bounded-linear-maps-commute-with-bochner-integration](https://alphabetamath.cc/item/thm-bounded-linear-maps-commute-with-bochner-integration)).

[F3] The Hilbert adjoint is defined by the pairing identity in [math:def-hilbert-space-adjoint](https://alphabetamath.cc/item/def-hilbert-space-adjoint). Under Countable Choice, the Hilbert-adjoint identities in [math:thm-hilbert-adjoint-properties](https://alphabetamath.cc/item/thm-hilbert-adjoint-properties) give bounded linear adjoints with $\|T^*\|=\|T\|$ and $T^{**}=T$ for bounded operators between real or complex Hilbert spaces. The assumed Axiom of Choice supplies Countable Choice. We use the real-field case for $E$, $U$ and the Hilbert time space $Z$ established in step 1.2. Inner products satisfy Cauchy–Schwarz ([math:thm-cauchy-schwarz-in-an-inner-product-space](https://alphabetamath.cc/item/thm-cauchy-schwarz-in-an-inner-product-space)).

[F4] For a bounded observation operator with lower bound $c$, its Gramian is invertible and the observation composed with its inverse is a right inverse of the observation adjoint with norm at most $c^{-1}$. A bounded continuous representative map gives the corresponding continuous lift ([lem-se-observation-gramian-right-inverse](item-lem-se-observation-gramian-right-inverse)).

[F5] Exact steering and bounded endpoint-to-control selections have the meanings specified in [def-se-foundation-control-language](item-def-se-foundation-control-language); the endpoint relation in this lemma is the displayed affine formula.

[F6] Strong measurability means pointwise norm convergence of measurable finite-range simple functions outside a measurable null set. A measurable simple function has a finite range and measurable level sets; finite intersections of measurable partition cells give another such function ([math:def-strongly-measurable-banach-valued-function](https://alphabetamath.cc/item/def-strongly-measurable-banach-valued-function), [math:def-banach-valued-simple-function-and-integral](https://alphabetamath.cc/item/def-banach-valued-simple-function-and-integral)).

[F7] The space $C([0,T];U)$ consists of norm-continuous paths with pointwise vector operations and finite supremum norm $\|f\|_\infty=\sup_{0\le r\le T}\|f(r)\|_U$ ([def-se-foundation-time-function-spaces](item-def-se-foundation-time-function-spaces)). Time-space classes and time integrals here use restricted Lebesgue measure on its Lebesgue sigma-algebra, as in that supplier.

[F8] Under Countable Choice, [math:cor-lebesgue-sigma-algebra-is-the-completion-of-borel-lebesgue-measure](https://alphabetamath.cc/item/cor-lebesgue-sigma-algebra-is-the-completion-of-borel-lebesgue-measure) identifies Lebesgue measure with the completion of its Borel restriction. At dimension one, intersecting its decomposition with $(0,T)$ shows that every Lebesgue measurable time set agrees with a relative Borel set outside a relative Borel null set; every Lebesgue null time set is contained in such a Borel null set. The measures agree on Borel sets. [math:thm-finite-and-countable-subadditivity-of-measures](https://alphabetamath.cc/item/thm-finite-and-countable-subadditivity-of-measures) makes a countable union of Borel null sets Borel and null. The assumed Axiom of Choice supplies the countable selections and the Countable Choice hypothesis of the completion supplier.

[F9] On any measure space, Hölder's inequality at $p=q=2$ gives $\int|fg|\le(\int|f|^2)^{1/2}(\int|g|^2)^{1/2}$ for measurable real-valued $f,g$ with finite square integrals; the product is integrable ([math:thm-holder-inequality-for-integrals](https://alphabetamath.cc/item/thm-holder-inequality-for-integrals), Statement, clause 1).

[F10] A real Hilbert space is a complete real inner-product space with its induced norm ([math:def-hilbert-space](https://alphabetamath.cc/item/def-hilbert-space)). A real-linear map between real normed spaces is bounded when $\|Ax\|\le C\|x\|$ for some finite $C\ge0$ ([math:def-bounded-linear-operator](https://alphabetamath.cc/item/def-bounded-linear-operator)). Its operator norm is $\|A\|=\sup_{\|x\|\le1}\|Ax\|$, and rescaling gives $\|Ax\|\le\|A\|\|x\|$, including the zero-space case ([math:def-operator-norm](https://alphabetamath.cc/item/def-operator-norm)).

## Proof

**Given:** The evolution, control action, measurability hypotheses, and Choice in the statement, together with the additional hypotheses for each conditional conclusion.

**Goal:** Identify the endpoint adjoint and construct the asserted bounded steering selections, retaining the real-linear placement of $-i$.

1.1 Put $A(r)=W(T,r)B(r)$. By F10, $\|A(r)u\|\le\|W(T,r)\|\|B(r)u\|\le MK\|u\|$, and taking the unit-ball supremum gives $\|A(r)\|\le MK$. For fixed $u\in U$, the increment of $A(r)u$ at $r_0$ is bounded by $M\|B(r)u-B(r_0)u\|+\|(W(T,r)-W(T,r_0))B(r_0)u\|$. Both terms tend to zero by the stated strong continuity hypotheses. Thus $r\mapsto A(r)u$ is continuous for every fixed $u$, without a separability hypothesis on $E$. [given, F10]

1.2 Let $Z_B$ denote the Borel-time space of F1 and let $Z$ use the completed time measure of F7. A Borel-strongly-measurable representative is also Lebesgue-strongly-measurable. Conversely, let $h$ be a representative in $Z$, and choose finite-range Lebesgue simple approximants $s_n$ converging to $h$ outside a Lebesgue null set, as in F6. Apply F8 to their countably many level sets and choose relative Borel replacements. Disjointifying each finite family, and putting zero on any remainder, gives finite-range Borel simple functions $t_n$ equal to $s_n$ off Borel null sets. Choose also a Borel null cover of the original exceptional set. Their countable union $N$ is Borel and null by F8. Define $\widetilde h=h$ off $N$ and $\widetilde h=0$ on $N$. The Borel simple functions $t_n\mathbf1_{N^c}$ converge pointwise in norm to $\widetilde h$ everywhere, so $\widetilde h$ is Borel-strongly-measurable and represents the original Lebesgue class. Two Borel-time representatives which agree Lebesgue-almost everywhere agree outside a Borel null set by F8, so this class map is also injective. It preserves sums and real scalar multiples. Scalar norm and inner-product integrals agree by simple approximation, since the completed measure agrees with the Borel measure on Borel sets; exceptional sets can be assigned zero before taking these integrals. Thus the class map is an onto real-linear isometry preserving the integral inner product. Transporting F1 through this map proves that the specified $Z$ is Hilbert and that the same finite-valued interval-step controls are dense in $Z$. No restriction of the admissible Lebesgue control classes is imposed. [given, F1, F6, F7, F8, choose, construct]

2.1 For $n\ge1$, partition $[0,T)$ into the $2^n$ intervals $I_{n,k}=[kT2^{-n},(k+1)T2^{-n})$ and put $q_n(r)=kT2^{-n}$ on $I_{n,k}$, with $q_n(T)=T$. Then $|q_n(r)-r|\le T2^{-n}$. If $f:[0,T]\to Y$ is a continuous curve in any Banach space $Y$, the function $f(q_n(r))$ is finite-valued and measurable: its level sets are unions of these measurable interval cells, possibly with the singleton $\{T\}$. Continuity gives $f(q_n(r))\to f(r)$ for every $r$. These are explicit simple approximants, so $f$, and its restriction to $(0,T)$, are strongly measurable by F6. In particular this applies to every curve $A(r)u$ from step 1.1. [given, F6, step 1.1, construct]

3.1 For a strongly measurable representative $h$ of a class in $Z$, F6 supplies measurable finite-range simple functions $s_n$ with $s_n(r)\to h(r)$ off a measurable null set. Define $g_n(r)=A(q_n(r))s_n(r)$ on $(0,T)$. If $s_n$ takes the value $u_j$ on a measurable cell $H_{n,j}$, then $g_n$ takes the constant value $A(kT2^{-n})u_j$ on $H_{n,j}\cap I_{n,k}$; merging coincident values gives a measurable finite-range simple function. At each $r$ outside the exceptional null set, $\|g_n(r)-A(r)h(r)\|\le MK\|s_n(r)-h(r)\|+\|(A(q_n(r))-A(r))h(r)\|\to0$. The second term tends to zero by step 1.1 applied to the fixed vector $h(r)$, while the first tends to zero by the chosen approximation. Therefore $r\mapsto A(r)h(r)$ is strongly measurable directly by F6, even when $E$ is not separable. [given, F6, step 1.1, step 2.1, construct]

3.2 For $f\in C([0,T];U)$, step 2.1 gives strong measurability of its restriction to $(0,T)$, while F7 gives $\int_0^T\|f(r)\|_U^2\,dr\le T\|f\|_\infty^2<\infty$. Hence $if=[f|_{(0,T)}]$ defines a map $i:C([0,T];U)\to Z$ with $\|if\|_Z\le\sqrt T\|f\|_\infty$. Restriction and passage to equivalence classes preserve pointwise sums and real scalar multiples, so $i$ is bounded and real-linear. Every occurrence of $Lf$ for a continuous control consequently means $L(if)$. [given, F1, F6, F7, step 2.1, step 1.2]

4.1 Choose the representative $h$ to be zero on the exceptional null set of its strong simple approximation, as allowed by F6. The scalar function $f(r)=\|h(r)\|_U$ is measurable: the norms of the simple approximants, also set to zero on that set, are measurable scalar simple functions converging pointwise to $f$. By the definition of $Z$, $\int_0^T f(r)^2\,dr=\|h\|_Z^2<\infty$. The constant function $g(r)=1$ is measurable with $\int_0^T g(r)^2\,dr=T<\infty$ for the time measure in F7. Apply F9 to $f,g$ on this restricted Lebesgue measure space, with conjugate exponents $p=q=2$, to obtain $\int_0^T\|h(r)\|_U\,dr\le\sqrt T\|h\|_Z$. By step 1.1 and F10, $\|A(r)h(r)\|_E\le MK\|h(r)\|_U$; together with step 3.1, this gives the strong measurability and integrable norm needed in F2. Hence the endpoint integrand is Bochner integrable and $\|Lh\|\le MK\sqrt T\|h\|_Z$. Linearity follows from the integral's linearity. If $h$ and $\widetilde h$ agree almost everywhere, their endpoint integrands also agree there; the integral norm bound applied to their difference gives $Lh=L\widetilde h$. Thus $L$ is a well-defined bounded real-linear map on $Z$. [given, F1, F2, F6, F7, F9, F10, step 1.1, step 1.2, step 3.1]

5.1 Put $Ov(r)=B(r)^*W(T,r)^*v$. By F3, both adjoints are bounded and real-linear, with $\|B(r)^*\|=\|B(r)\|\le K$ and $\|W(T,r)^*\|=\|W(T,r)\|\le M$. Thus $\|Ov(r)\|\le MK\|v\|$. The assumed strong measurability gives $Ov\in Z$, and pointwise real linearity and this estimate make $O:E\to Z$ bounded and real-linear. For a finite-valued step control $h$, commute the bounded functional $x\mapsto(x,v)_E$ with the Bochner integral and use the defining adjoint identities pointwise to get $(Lh,v)_E=\int_0^T(h(r),Ov(r))_U\,dr=(h,Ov)_Z$. Density of such controls and the bounds for $L$ and $O$ extend this equality to every $h\in Z$. Uniqueness of the Hilbert adjoint therefore gives $O=L^*$. [given, F1, F2, F3, F6, step 1.2, step 4.1]

5.2 The evolution identities give $W(T,0)W(0,T)=I_E$. With $y=x_0-W(0,T)x_T$, the null-control hypothesis gives $LNy=-W(T,0)y$. Consequently $W(T,0)x_0+LN(y)=W(T,0)W(0,T)x_T=x_T$. The composition defining $G_N$ is bounded and real-linear. [given, F5, step 4.1, step 3.2]

6.1 Apply [F4] with observation $O=L^*$ and observation space $Z$. Its adjoint is $L$, because the identity in step 5.1 also characterizes $O^*$ by symmetry of the real inner products. Thus $Q=O^*O=LL^*$ is invertible, $R=OQ^{-1}$ obeys $LR=I_E$, and $\|R\|\le c^{-1}$. Substitution into the endpoint formula gives $W(T,0)x_0+LG(x_0,x_T)=x_T$; boundedness follows from the bound for $R$ and boundedness of $W(T,0)$. [F3, F4, F5, step 1.2, step 5.1]

7.1 If $J$ is supplied, [F4] gives $R_C=JQ^{-1}$, a bounded map into $C([0,T];U)$ with $iR_C=R$. Step 3.2 supplies the bounded linear class map $i$ required in F4, so $LR_C=L(iR_C)=LR=I_E$. The same substitution proves continuous-control steering and boundedness of $G_C$. [given, F4, F5, step 3.2, step 6.1]

8.1 If $B=-iM_\varphi$, the endpoint formula in step 4.1 has integrand $W(T,r)(-i\varphi h(r))$ by substitution. The proof used only real linearity, so it does not move $i$ through $W(T,r)$. This proves the stated conditional Schrödinger formulation. [given, step 4.1] ∎

## Remarks

The observation measurability, the lower bound, and any continuous representative map are hypotheses to verify in an application. The lemma does not assert them from strong continuity of $W$ alone. The evolution and control action may be realifications of complex-linear operators; all conclusions stated here are real-linear.
