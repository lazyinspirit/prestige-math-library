---
title: Łojasiewicz inequality and analytic point stability
status: published
research_item: thm-expander-prereq-analytic-gradient-local-input
dependency_level: 3
sources:
  references:
    - title: P.-A. Absil and K. Kurdyka, On the stable equilibrium points of gradient
        systems (accepted 2006 preprint)
      url: https://sites.uclouvain.be/absil/2005-137/stable_minima12.pdf
      locator: Section 3, Lemma 4, printed/PDF p. 4 (inequality); Theorem 3, p. 2,
        proof pp. 4–5 (stability application)
      statement: If f is real analytic near z in finite-dimensional Euclidean space,
        there are c>0, rho_0 in [0,1), and a neighborhood W of z such that
        ||grad f(x)|| >= c |f(x)-f(z)|^rho_0 for every x in W with f(x) != f(z).
        This is the restriction of Lemma 4 to nonzero energy differences; no
        value of 0^0 is imported.
      hypotheses: Real analytic scalar function on an open neighborhood of z in R^m,
        finite m>=1; Euclidean gradient and norm.
      reading_limits: Read the PDF text of Definition 1 and Theorem 3 on printed/PDF
        p. 2, Section 3 on pp. 4–5, and Section 4 on pp. 5–6. Lemma 4 on p. 4
        states rho in [0,1); only its restriction to f(x) != f(z) is imported.
        The underlying proofs [Loj65], [BM88], [KP94] were not read or
        reconstructed. The positive-exponent extension and stability application
        are local compositions of declared premises. No independent review or
        publication acceptance is asserted.
---

## Prerequisites

- [math:def-real-analytic-germ-in-several-variables](https://alphabetamath.cc/item/def-real-analytic-germ-in-several-variables)
- [def-expander-prereq-stability-and-attraction](item-def-expander-prereq-stability-and-attraction)
- [math:def-euclidean-inner-product](https://alphabetamath.cc/item/def-euclidean-inner-product)
- [lem-author-647111dd30d9-minimum-trapping](item-lem-author-647111dd30d9-minimum-trapping)
- [lem-author-647111dd30d9-nonminimum-escape](item-lem-author-647111dd30d9-nonminimum-escape)
- [math:thm-real-power-laws](https://alphabetamath.cc/item/thm-real-power-laws)
- [math:cor-holomorphic-functions-in-several-variables-are-smooth](https://alphabetamath.cc/item/cor-holomorphic-functions-in-several-variables-are-smooth)
- [physics:def-cm-equilibrium-and-lyapunov-stability](https://alphabetamath.cc/physics/item/def-cm-equilibrium-and-lyapunov-stability)
- [math:def-jacobian-matrix-and-gradient](https://alphabetamath.cc/item/def-jacobian-matrix-and-gradient)
- [math:def-ck-and-multi-index-notation-in-several-variables](https://alphabetamath.cc/item/def-ck-and-multi-index-notation-in-several-variables)
- [math:def-real-power](https://alphabetamath.cc/item/def-real-power)
- [math:thm-natural-logarithm-laws](https://alphabetamath.cc/item/thm-natural-logarithm-laws)
- [math:thm-exponential-is-strictly-increasing](https://alphabetamath.cc/item/thm-exponential-is-strictly-increasing)
- [` P.-A. Absil and K. Kurdyka, On the stable equilibrium points of gradient systems (accepted 2006 preprint) · Section 3, Lemma 4, printed/PDF p. 4 (inequality); Theorem 3, p. 2, proof pp. 4–5 (stability application) `](https://sites.uclouvain.be/absil/2005-137/stable_minima12.pdf)


## Statement

Let $m\ge1$, let $U\subseteq\mathbb R^m$ be open, let $f:U\to\mathbb R$ be real analytic, and let $z\in U$. Some neighborhood of $z$ and constants $c>0$, $0<\rho<1$ satisfy $\|\nabla f(x)\|\ge c|f(x)-f(z)|^\rho$ throughout that neighborhood. For the Euclidean downward gradient system $x'=-\nabla f(x)$, an equilibrium $z$ is Lyapunov stable exactly when it is a local minimum. These are local statements; strict minimality and asymptotic point attraction are separate properties.

Here Lyapunov stability uses maximal solutions in $U$: for every $\varepsilon>0$ with $\overline B(z,\varepsilon)\subseteq U$, there is $0<\delta\le\varepsilon$ such that every maximal solution with $\|x(0)-z\|<\delta$ is defined for all $t\ge0$ and satisfies $\|x(t)-z\|<\varepsilon$ for all $t\ge0$. An equilibrium has $\nabla f(z)=0$. This is the local autonomous ODE notion; on a complete flow it agrees with the usual metric point-stability condition.

## Facts & Assumptions

[F1] Real analyticity and its local holomorphic complexification use [math:def-real-analytic-germ-in-several-variables](https://alphabetamath.cc/item/def-real-analytic-germ-in-several-variables). The Euclidean norm and coordinate gradient use [math:def-euclidean-inner-product](https://alphabetamath.cc/item/def-euclidean-inner-product) and [math:def-jacobian-matrix-and-gradient](https://alphabetamath.cc/item/def-jacobian-matrix-and-gradient). Local minimality, strict minimality and complete-flow point stability use [def-expander-prereq-stability-and-attraction](item-def-expander-prereq-stability-and-attraction).

[F2] The analytic inequality is the imported premise [X1] recorded in External input below.

[F3] [math:cor-holomorphic-functions-in-several-variables-are-smooth](https://alphabetamath.cc/item/cor-holomorphic-functions-in-several-variables-are-smooth) gives continuous real coordinate derivatives of every order for a holomorphic function on an open subset of $\mathbb C^m$. The required $C^2$ convention is [math:def-ck-and-multi-index-notation-in-several-variables](https://alphabetamath.cc/item/def-ck-and-multi-index-notation-in-several-variables).

[F4] The maximal-solution definition of local autonomous ODE stability is [physics:def-cm-equilibrium-and-lyapunov-stability](https://alphabetamath.cc/physics/item/def-cm-equilibrium-and-lyapunov-stability). It is stated explicitly above and includes forward existence for nearby maximal solutions. For complete flows the corresponding metric definition is [def-expander-prereq-stability-and-attraction](item-def-expander-prereq-stability-and-attraction).

[F5] [lem-author-647111dd30d9-minimum-trapping](item-lem-author-647111dd30d9-minimum-trapping) proves local forward existence and stability at a $C^2$ local minimum under a positive-exponent gradient inequality, using the local stability definition in [F4].

[F6] [lem-author-647111dd30d9-nonminimum-escape](item-lem-author-647111dd30d9-nonminimum-escape) applies to a $C^2$ equilibrium when all nearby critical points have its energy value. A nonminimum then has a fixed small escape radius: every initial tolerance admits a nearby initial point and an escape time before its maximal forward endpoint. Its conclusion therefore contradicts even stability measured only over available forward times.

[F7] Real powers use [math:def-real-power](https://alphabetamath.cc/item/def-real-power) and [math:thm-real-power-laws](https://alphabetamath.cc/item/thm-real-power-laws), including $0^\beta=0$ for $\beta>0$; no value for $0^0$ is needed.

[F8] [math:thm-natural-logarithm-laws](https://alphabetamath.cc/item/thm-natural-logarithm-laws) gives that $\log$ is increasing on $(0,\infty)$ and $\log1=0$; [math:thm-exponential-is-strictly-increasing](https://alphabetamath.cc/item/thm-exponential-is-strictly-increasing) gives that $\exp$ is increasing on $\mathbb R$. Together with the power definition in [F7], these supply the exponent comparison used below.

## External input

[X1] Restricting Absil–Kurdyka, Section 3, Lemma 4, printed/PDF p. 4, to nonzero energy differences gives the following imported premise: for a real analytic scalar function near a Euclidean point $z$, there are a neighborhood $W$ of $z$, $c>0$ and $\rho_0\in[0,1)$ such that $\|\nabla f(x)\|\ge c|f(x)-f(z)|^{\rho_0}$ for every $x\in W$ with $f(x)\ne f(z)$. No assertion at $f(x)=f(z)$ is imported when $\rho_0=0$. This several-variable analytic inequality is imported, not proved here. Its underlying analytic-geometry proofs are outside the actual reading. Theorem 3 and its proof on pp. 4–5 motivate the application; the application below is supplied locally with explicit intermediate lemmas.

## Proof

**Given:** The data and hypotheses in the Statement.

**Goal:** Prove the gradient inequality and both local stability implications.

1.1 At each point of $U$, the analytic-germ supplier gives a holomorphic complexification $H$ on a complex polydisc whose restriction to the real slice is $f$. The several-variable smoothness corollary makes $H$ smooth in its real and imaginary coordinates. Holding all imaginary coordinates zero, each ordered first or second real coordinate derivative of $f$ is the restriction of the corresponding derivative of $H$, by the coordinate difference quotient defining that derivative. These derivatives are continuous on the real slice. Thus $f\in C^2(U)$ in the declared convention; no one-variable smoothness result is being substituted for the several-variable assertion. [F1, F3, given]

2.1 By the explicit external input, choose a neighborhood and $c>0$, $0\le\rho_0<1$ for the gradient inequality at points with $f(x)\ne f(z)$. Shrink it so $|f-f(z)|\le1$, and choose $\rho\in(0,1)$ with $\rho\ge\rho_0$. For $a=|f(x)-f(z)|\in(0,1]$, [F8] gives $\log a\le\log1=0$. Hence $(\rho-\rho_0)\log a\le0$, and the power definition in [F7] and exponential monotonicity in [F8] give $a^\rho=\exp(\rho\log a)\le\exp(\rho_0\log a)=a^{\rho_0}$. Thus the same $c$ works at points with $f(x)\ne f(z)$. At $f(x)=f(z)$ the new right side is zero because $\rho>0$. A strictly positive exponent is therefore available, avoiding any $0^0$ convention. [F2, F7, F8, step 1.1, algebra]

3.1 If $z$ is a local minimum, apply the conditional minimum-trapping lemma. Its $C^2(U)$, Euclidean-gradient and positive-exponent hypotheses are exactly those in steps 1.1 and 2.1. For each sufficiently small test ball it gives a smaller initial ball whose maximal solutions exist for all forward time and remain in the test ball. This proves the local stability definition in [F4]; its conclusion also supplies that $z$ is an equilibrium. [F1, F4, F5, step 1.1, step 2.1]

3.2 At every critical point $y$ in the inequality neighborhood, the positive exponent forces $f(y)=f(z)$. If the equilibrium $z$ were not a local minimum, the nonminimum-escape lemma would apply. Choose its fixed escape ball compactly inside $U$, as in that lemma: for every initial tolerance some solution exits that ball before its maximal forward endpoint. This contradicts the local stability condition in [F4], which requires both forward existence and confinement. Hence a stable equilibrium is a local minimum. [F1, F4, F6, F7, step 1.1, step 2.1]

4.1 Consequently the inequality and both stability implications hold in the stated local sense. On a complete flow the maximal solutions already exist for all forward times, and testing balls compactly inside $U$ is equivalent to testing every tolerance by choosing a smaller ball; this recovers the usual point-stability condition. No strictness or point attraction was deduced: for a locally constant function, nearby distinct initial points remain stationary, while choosing the initial radius smaller than the test radius proves stability. The stability proof is the local composition of the two declared stability lemmas with the imported analytic inequality. [F1, F4, F5, F6, step 3.1, step 3.2] ∎
