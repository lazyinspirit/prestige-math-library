---
title: Three-dimensional Dirichlet energy-to-mixed-norm estimate
status: published
research_item: prop-se-import-bss-l4-linfinity
dependency_level: 7
sources:
  references:
    - title: Strichartz estimates and the nonlinear Schrödinger equation on manifolds
        with boundary
      url: https://sites.math.washington.edu/~hfsmith/research/angschrod_arxiv.pdf
      locator: Section 5, equations (54) and (55), and the argument following Lemma
        5.2, PDF pages 18–21
      statement: For the three-dimensional exterior Dirichlet problem, the solution
        given by the Duhamel formula satisfies the L4-in-time,
        Linfinity-in-space estimate bounded by the H1 norm of the initial data
        plus the L1-in-time H1 norm of the forcing. The Dirichlet estimate is
        global in time.
      hypotheses: The exterior is that of a smooth compact non-trapping obstacle;
        initial data and forcing obey the homogeneous Dirichlet boundary
        condition and have the indicated energy regularity.
      reading_limits: Read Section 5 at the cited equations and the derivation through
        the dyadic summation following Lemma 5.2, together with the statement of
        Theorem 1.1. The heat ultracontractivity result cited in that derivation
        was not independently read. The present item imports the estimate rather
        than reconstructing its proof.
---

## Prerequisites

- [def-se-geometry](item-def-se-geometry)
- [def-se-nontrapping](item-def-se-nontrapping)
- [def-se-dirichlet-scale](item-def-se-dirichlet-scale)
- [def-se-foundation-integer-sobolev-notation](item-def-se-foundation-integer-sobolev-notation)
- [def-se-foundation-time-function-spaces](item-def-se-foundation-time-function-spaces)
- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)
- [math:lem-self-adjoint-operator-generates-a-strongly-continuous-unitary-group](https://alphabetamath.cc/item/lem-self-adjoint-operator-generates-a-strongly-continuous-unitary-group)
- [math:thm-unbounded-borel-functional-calculus](https://alphabetamath.cc/item/thm-unbounded-borel-functional-calculus)
- [lem-author-9e2ffff7db46-free-continuous-convolution](item-lem-author-9e2ffff7db46-free-continuous-convolution)
- [math:thm-tonelli-and-fubini-for-completed-product-measures](https://alphabetamath.cc/item/thm-tonelli-and-fubini-for-completed-product-measures)
- [math:thm-complex-lp-completeness-and-almost-everywhere-subsequences](https://alphabetamath.cc/item/thm-complex-lp-completeness-and-almost-everywhere-subsequences)
- [math:thm-heine-borel-r](https://alphabetamath.cc/item/thm-heine-borel-r)
- [` Strichartz estimates and the nonlinear Schrödinger equation on manifolds with boundary · Section 5, equations (54) and (55), and the argument following Lemma 5.2, PDF pages 18–21 `](https://sites.math.washington.edu/~hfsmith/research/angschrod_arxiv.pdf)


## Statement

Assume the Axiom of Choice. Let $\Omega=\mathbb R^3\setminus\Theta$ be the connected exterior of a nonempty compact obstacle with smooth boundary, and suppose that the obstacle is non-trapping. Let $\Delta_D$ be the Dirichlet Laplacian and $U(t)=e^{it\Delta_D}$. For $0<T\le\infty$, let $f\in H^1_0(\Omega)$ and let $F\in L^1(0,T;H^1_0(\Omega))$ be strongly measurable. Define the energy-space Duhamel expression $u(t)=U(t)f+i\int_0^t U(t-s)F(s)\,ds$ for finite $t\in[0,T)$.

There is a constant $C$ depending on the exterior domain, independent of $f$, $F$ and $T$, such that $\|u\|_{L^4_tL^\infty_x((0,T)\times\Omega)}\le C(\|f\|_{H^1(\Omega)}+\|F\|_{L^1(0,T;H^1(\Omega))})$. The mixed norm is the scalar sectionwise norm: it does not assert strong measurability of $t\mapsto u(t)$ into $L^\infty(\Omega)$. In particular, the estimate holds for $F=0$.

## Statement references

[def-se-geometry](item-def-se-geometry)

[def-se-nontrapping](item-def-se-nontrapping)

[def-se-dirichlet-scale](item-def-se-dirichlet-scale)

[def-se-foundation-integer-sobolev-notation](item-def-se-foundation-integer-sobolev-notation)

[def-se-foundation-time-function-spaces](item-def-se-foundation-time-function-spaces)

[math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)


[math:lem-self-adjoint-operator-generates-a-strongly-continuous-unitary-group](https://alphabetamath.cc/item/lem-self-adjoint-operator-generates-a-strongly-continuous-unitary-group)

[math:thm-unbounded-borel-functional-calculus](https://alphabetamath.cc/item/thm-unbounded-borel-functional-calculus)

[lem-author-9e2ffff7db46-free-continuous-convolution](item-lem-author-9e2ffff7db46-free-continuous-convolution)

[math:thm-tonelli-and-fubini-for-completed-product-measures](https://alphabetamath.cc/item/thm-tonelli-and-fubini-for-completed-product-measures)

[math:thm-complex-lp-completeness-and-almost-everywhere-subsequences](https://alphabetamath.cc/item/thm-complex-lp-completeness-and-almost-everywhere-subsequences)

[math:thm-heine-borel-r](https://alphabetamath.cc/item/thm-heine-borel-r)
## External input

Blair–Smith–Sogge, Section 5, equations (54)–(55), state the Duhamel estimate for the three-dimensional smooth non-trapping exterior with the prescribed boundary condition. Their argument after Lemma 5.2 obtains the $L^4_tL^\infty_x$ bound by dyadic summation; the Dirichlet estimate is global in time. The result is imported here with the Dirichlet energy space and mixed-norm notation specified in the Statement. It is not the $q=\infty$ case of their Theorem 1.1, which assumes finite $q$. Their cited heat ultracontractivity input was not independently read.

## Facts & Assumptions

[F1] The exterior geometry and non-trapping convention are those of [def-se-geometry](item-def-se-geometry) and [def-se-nontrapping](item-def-se-nontrapping).

[F2] Under Choice, [def-se-dirichlet-scale](item-def-se-dirichlet-scale) defines $\Delta_D$, its unitary group and $H_D^1(\Omega)=H^1_0(\Omega)$; its energy norm is the ordinary $H^1$ norm. The integer Sobolev and zero-boundary closure notation is fixed by [def-se-foundation-integer-sobolev-notation](item-def-se-foundation-integer-sobolev-notation). [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)

[F3] For both finite $T$ and $T=\infty$, the $L^1$ forcing is Bochner integrable in the energy space, and the mixed norm means the sectionwise scalar norm rather than an asserted $L^\infty$-valued Bochner norm. The time measure is restricted Lebesgue measure on $(0,T)$, including the half-line in the infinite case. [def-se-foundation-time-function-spaces](item-def-se-foundation-time-function-spaces)


[F4] The self-adjoint Dirichlet generator on complex $L^2(\Omega)$ generates a strongly continuous unitary group under Choice. Products of its Borel spectral multipliers have the stated domains and commute when one multiplier is bounded. These are [math:lem-self-adjoint-operator-generates-a-strongly-continuous-unitary-group](https://alphabetamath.cc/item/lem-self-adjoint-operator-generates-a-strongly-continuous-unitary-group) and [math:thm-unbounded-borel-functional-calculus](https://alphabetamath.cc/item/thm-unbounded-borel-functional-calculus), applied to the realization in F2.

[F5] For a strongly continuous group on the realification of a complex Banach space with bound $M$ on a finite time interval, strongly measurable $L^1$ forcing has a well-defined continuous retarded Bochner convolution, bounded in the continuous-path norm by $M$ times its $L^1$ norm. Bounded real-linear maps commute with these integrals. [lem-author-9e2ffff7db46-free-continuous-convolution](item-lem-author-9e2ffff7db46-free-continuous-convolution)

[F6] On a completed product of sigma-finite measure spaces, Tonelli and Fubini give measurable section integrals and almost-everywhere measurable sections. In particular they identify the product $L^2$ norm with the integral of the squared section norms. [math:thm-tonelli-and-fubini-for-completed-product-measures](https://alphabetamath.cc/item/thm-tonelli-and-fubini-for-completed-product-measures)

[F7] Under Countable Choice, complex $L^2$ on every measure space is complete. [math:thm-complex-lp-completeness-and-almost-everywhere-subsequences](https://alphabetamath.cc/item/thm-complex-lp-completeness-and-almost-everywhere-subsequences)

[F8] The independent BSS estimate imported in External input is (55) for the Dirichlet spectral Duhamel formula (54), with energy initial data and boundary-compatible $L^1_tH^1_x$ forcing, and with a constant uniform in time in the Dirichlet case. Its proof is imported, not reconstructed here.

[F9] Every closed bounded real interval is compact. [math:thm-heine-borel-r](https://alphabetamath.cc/item/thm-heine-borel-r)

## Proof

**Given:** Choice, the three-dimensional non-trapping exterior, and the initial datum and forcing in the Statement.

**Goal:** Construct the energy-space expression and a jointly measurable representative, then apply the independent imported estimate to it.

1.1 Put $A=I-\Delta_D$ and $E=H_D^1(\Omega)=H^1_0(\Omega)$ with its inherited $H^1$ norm. The scale makes $E$ a complete complex Hilbert space continuously included in $L^2$, with $\|h\|_2\le\|h\|_E=\|A^{1/2}h\|_2$. Since the spectral multipliers $e^{it\lambda}$ and $(1-\lambda)^{1/2}$ commute on the latter's domain, $A^{1/2}U(t)h=U(t)A^{1/2}h$. Here the square root is used on the nonpositive spectrum of $\Delta_D$, extending it arbitrarily to a Borel function elsewhere. Thus $\|U(t)h-U(t_0)h\|_E=\|U(t)A^{1/2}h-U(t_0)A^{1/2}h\|_2\to0$ by strong continuity on $L^2$. Together with F2 this gives a strongly continuous unitary group on $E$, also as a real Banach space. [F2, F4, given]

2.1 Fix $0<S<T$, with $S$ finite. Apply F5 on $[0,S]$ to $E$, $W=U$, $r=0$, and the restriction of $F$, using $M=1$ from step 1.1. It establishes strong measurability and Bochner integrability of $s\mapsto U(t-s)F(s)$ on $[0,t]$ for each $t\le S$, and continuity in $E$ of $D(t)=\int_0^tU(t-s)F(s)\,ds$. The complex and real Bochner integrals have the same simple approximations and norm limits, so they agree. Consequently $u(t)=U(t)f+iD(t)$ is continuous in $E$ and hence in $L^2$, with $\|u(t)\|_E\le\|f\|_E+\int_0^t\|F(s)\|_E\,ds$. Changing a forcing representative on a time-null set changes none of the integrals. The constructions for different $S$ agree on their overlaps because their integrands agree there. [F2, F3, F5, step 1.1]

3.1 On $[0,S]$, construct finite-range time maps $v_n$ uniformly approximating $u$ in $L^2$ within $2^{-n}$. For each time $a$, continuity gives a relatively open neighborhood on which $\|u(t)-u(a)\|_2<2^{-n}$. Compactness in F9 gives a finite subcover; assign the sample value from the first neighborhood containing $t$. The resulting cells are Borel, so after choosing measurable spatial representatives of the finitely many sample values, $v_n(t,x)$ is jointly measurable. Choice permits these countably many representative selections. The path $u$ is bounded on this interval by step 2.1, so each $v_n$ belongs to product $L^2$. By F6, $\|v_n-v_m\|_{L^2((0,S)\times\Omega)}\le S^{1/2}(2^{-n}+2^{-m})$. F7 therefore supplies a product $L^2$ limit with a jointly measurable representative $w_S$. [F2, F6, F7, F9, step 2.1, choose, construct]

4.1 Choose a subsequence $v_{n_k}$ with $\|v_{n_k}-w_S\|_{L^2((0,S)\times\Omega)}^2\le2^{-k}$. Tonelli, first on time-space and then on counting measure times time, gives $w_S(t,\cdot)\in L^2(\Omega)$ and $\sum_k\|v_{n_k}(t,\cdot)-w_S(t,\cdot)\|_2^2<\infty$ for almost every $t$. Thus those sections converge in $L^2$ to $w_S(t,\cdot)$; step 3.1 also makes their classes converge to $u(t)$. Uniqueness of a norm limit gives $[w_S(t,\cdot)]=u(t)$ for almost every $t$. Choose finite $0=S_0<S_1<\cdots\uparrow T$ and construct $w_{S_j}$ as above; for $T=\infty$ take $S_j=j$. On each strip $[S_{j-1},S_j)\times\Omega$ use $w_{S_j}$. This countable gluing is jointly measurable and represents $u(t)$ in $L^2$ for almost every $t\in(0,T)$. Any two such representatives agree product-almost everywhere by F6 applied to their disagreement set. Hence F3 makes the scalar sectionwise mixed norm meaningful, allowing infinity before applying the estimate. No $L^\infty$-valued strong measurability is needed. [F3, F6, step 3.1, choose, construct]

5.1 The expression constructed in steps 1.1–2.1 uses exactly the Dirichlet spectral propagator, energy initial datum, and boundary-compatible forcing in the independent estimate F8. Applying that imported bound yields precisely the inequality in the Statement, with its domain-dependent constant independent of $f$, $F$ and $T$. Its global Dirichlet scope includes $T=\infty$; restriction gives every finite interval. The identification of representatives in step 4.1 makes this the scalar mixed norm specified in F3. Taking $F=0$ gives the stated homogeneous case. [F1, F2, F3, F8, step 1.1, step 2.1, step 4.1] ∎

## Source notes

The estimate and its proof are imported from the independent BSS source under the recorded reading limits. The proof above is a locally authored construction and application of that imported estimate, not a reconstruction of its dispersive proof; this is why the item has local proof provenance and is not marked external_input. The Statement is unchanged. The generated-item construction gap is repaired here without attributing a defect to the original article. The direct consumer prop-se-2-4 retains the same estimate and hypotheses, so this repair introduces no Statement/Definition interface change requiring downstream alteration. No library publication or independent review is claimed.
