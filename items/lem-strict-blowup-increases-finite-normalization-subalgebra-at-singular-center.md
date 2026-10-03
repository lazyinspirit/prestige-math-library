---
id: lem-strict-blowup-increases-finite-normalization-subalgebra-at-singular-center
kind: lemma
title: Blowing up a non-regular point strictly increases the finite normalization subalgebra
status: draft
origin: pipeline
deps: [lem-normalization-factors-through-blowup-of-curve-point, lem-point-blowup-of-integral-curve-is-finite, def-blowup-scheme-along-ideal, thm-blowup-effective-cartier-divisor-isomorphism, thm-one-dimensional-regular-local-rings-are-dvrs, def-coherent-module-scheme, thm-coherent-sheaves-abelian-noetherian-scheme, def-locally-noetherian-and-noetherian-scheme, def-axiom-of-choice, def-intersection-multiplicity-of-closed-subschemes, def-strict-normal-crossings-divisor, thm-artinian-ring-characterisation-by-primes, thm-artinian-ring-has-finite-length, def-composition-series-and-length-of-a-module, def-finite-morphism-schemes, thm-localisation-of-modules-is-exact, cor-blowup-birational-integral-scheme]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
sources:
  references:
    - title: "The Stacks Project, tag 0BI4 (Lemma 54.15.1)"
      url: https://stacks.math.columbia.edu/tag/0BI4
      locator: "Proof of Lemma 54.15.1: the system f_*O_X contains ... contains f_{2,*}O_{Y_2} contains f_{1,*}O_{Y_1} contains O_Y is a strictly decreasing system of coherent submodules as long as Y_{i-1} is not regular, because each blowup Y_i->Y_{i-1} is not an isomorphism as m_{y_{i-1}} is not invertible; complete text retrieved and read 2026-10-03."
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $Y$ be an integral
Noetherian scheme of dimension one with finite normalization
$\nu:Y^{\nu}\to Y$, let $p\in Y$ be a closed point that is not a regular point of
$Y$, let $\beta:Y_1=\operatorname{Bl}_pY\to Y$ be the blowup of $Y$ in $p$, and
let $\nu_1:Y^{\nu}\to Y_1$ be the factorization of $\nu$ through $\beta$
([[lem-normalization-factors-through-blowup-of-curve-point]]). Then the natural
inclusion of coherent $\mathcal O_Y$-subalgebras
$\mathcal O_Y\subseteq\beta_*\mathcal O_{Y_1}$ inside
$\nu_*\mathcal O_{Y^{\nu}}$ is strict: $\beta_*\mathcal O_{Y_1}$ strictly
contains $\mathcal O_Y$, and the quotient
$\beta_*\mathcal O_{Y_1}/\mathcal O_Y$ is a nonzero coherent sheaf of finite
length supported exactly at $p$.

More generally, if $Y_i\to Y_{i-1}$ is a blowup at a closed non-regular point
and $f_i:Y_i\to Y$ denotes the composite, then $f_{i,*}\mathcal O_{Y_i}$
strictly contains $f_{i-1,*}\mathcal O_{Y_{i-1}}$ inside
$\nu_*\mathcal O_{Y^{\nu}}$ for every $i\ge1$.

## Facts & Assumptions

[F1] The blowup $\beta$ is finite, $\nu$ factors uniquely through it, and $\beta_*\mathcal O_{Y_1}$ is a coherent $\mathcal O_Y$-subalgebra of $\nu_*\mathcal O_{Y^{\nu}}$; $\beta$ is an isomorphism over $Y\setminus\{p\}$ ([[lem-normalization-factors-through-blowup-of-curve-point]], [[lem-point-blowup-of-integral-curve-is-finite]]).

[F2] $\beta$ is an isomorphism if and only if $\mathcal O_{Y,p}$ is regular; equivalently, if and only if the maximal ideal $\mathfrak m_p$ is invertible ([[lem-point-blowup-of-integral-curve-is-finite]], [[thm-blowup-effective-cartier-divisor-isomorphism]], [[thm-one-dimensional-regular-local-rings-are-dvrs]]).

[F3] On a locally Noetherian scheme the cokernel of a morphism of coherent modules is coherent, and a coherent module whose support is a single closed point $y$ has a stalk of finite length at $y$: the stalk is a finitely generated module over the Noetherian local ring $\mathcal O_{Y,y}$ annihilated by an $\mathfrak m_y$-primary ideal, and a zero-dimensional Noetherian ring is Artinian of finite length ([[def-coherent-module-scheme]], [[thm-coherent-sheaves-abelian-noetherian-scheme]], [[def-locally-noetherian-and-noetherian-scheme]], [[thm-artinian-ring-characterisation-by-primes]], [[thm-artinian-ring-has-finite-length]], [[def-composition-series-and-length-of-a-module]]).

[F4] A finite morphism is affine; for an affine morphism and a short exact sequence of quasi-coherent modules over the source, the pushforward sequence is again short exact, because on affine charts the pushforward is given by the same ring extension and localization is exact ([[def-finite-morphism-schemes]], [[thm-localisation-of-modules-is-exact]]).

[F5] The Axiom of Choice is assumed, inherited from the cited blowup, normalization and length suppliers ([[def-axiom-of-choice]]).

## Proof

**Given:** AC, an integral Noetherian one-dimensional scheme $Y$ with finite normalization $\nu:Y^{\nu}\to Y$, a closed non-regular point $p\in Y$, and the blowup $\beta:Y_1=\operatorname{Bl}_pY\to Y$ with factorization $\nu_1:Y^{\nu}\to Y_1$.

1.1 By [F1] the inclusion $\mathcal O_Y\subseteq\beta_*\mathcal O_{Y_1}\subseteq\nu_*\mathcal O_{Y^{\nu}}$ holds as $\mathcal O_Y$-algebras, and $\beta_*\mathcal O_{Y_1}$ is coherent. If the first inclusion were an equality, then the finite morphism $\beta$ would satisfy $\beta_*\mathcal O_{Y_1}=\mathcal O_Y$; on an affine chart $U=\operatorname{Spec}R\subseteq Y$ with $\beta^{-1}(U)=\operatorname{Spec}B$ this says that the image of the structure map $R\to B$ generates $B$ as an $R$-module, so $B=R$ and $\beta|_{\beta^{-1}(U)}$ is an isomorphism; hence $\beta$ would be an isomorphism. But $p$ is not a regular point, so $\beta$ is not an isomorphism by [F2]. Therefore $\mathcal O_Y\subsetneq\beta_*\mathcal O_{Y_1}$: the inclusion is strict. [F1, F2, algebra]

2.1 The quotient $\mathcal Q=\beta_*\mathcal O_{Y_1}/\mathcal O_Y$ is coherent by [F3] and is nonzero by step 1.1. Away from $p$ the morphism $\beta$ is an isomorphism, so $(\beta_*\mathcal O_{Y_1})_q=\mathcal O_{Y,q}$ for every $q\ne p$, and the stalk $\mathcal Q_q=0$ there; hence the support of $\mathcal Q$ is contained in the closed point $p$, and therefore equals $\{p\}$. By [F3] the stalk $\mathcal Q_p$ has finite length over $\mathcal O_{Y,p}$. [F1, F3, step 1.1]

3.1 This proves the first assertion. For the general step, argue by induction on $i$. At each stage $Y_{i-1}$ is an integral Noetherian one-dimensional scheme with a fixed finite normalization $\nu_{i-1}:Y^{\nu}\to Y_{i-1}$: for $i-1=0$ this is $\nu$; inductively, $Y_i$ is the blowup of the integral scheme $Y_{i-1}$ in a nonzero ideal, hence is integral ([[cor-blowup-birational-integral-scheme]]) and Noetherian, and [[lem-normalization-factors-through-blowup-of-curve-point]] shows that $Y^{\nu}$ is a normalization of $Y_i$ as well. Let $\beta_i:Y_i=\operatorname{Bl}_{p_{i-1}}Y_{i-1}\to Y_{i-1}$ be the blowup at a closed non-regular point $p_{i-1}$, so that by the already proved first assertion applied to $Y_{i-1}$ and $p_{i-1}$ the sequence of $\mathcal O_{Y_{i-1}}$-modules $0\to\mathcal O_{Y_{i-1}}\to(\beta_i)_*\mathcal O_{Y_i}\to\mathcal Q_i\to0$ is exact with $\mathcal Q_i\ne0$. [step 1.1, step 2.1]

4.1 Push the short exact sequence of step 3.1 forward along the finite affine morphism $f_{i-1}$. By [F4] this gives $0\to f_{i-1,*}\mathcal O_{Y_{i-1}}\to f_{i,*}\mathcal O_{Y_i}\to f_{i-1,*}\mathcal Q_i\to0$. This last sheaf is nonzero: choose an affine open $V=\operatorname{Spec}R$ of $Y$ containing the image of the center. Its inverse image is affine, say $\operatorname{Spec}B$, and $\mathcal Q_i$ restricts there to a nonzero finite $B$-module $M$, because its nonzero center stalk lies on that open. The pushforward restricts to the same nonzero module $M$ viewed as an $R$-module. Restriction of scalars is faithful, so $f_{i-1,*}\mathcal Q_i\ne0$. Consequently the pushed-forward inclusion is strict. Both terms embed as coherent subalgebras in $\nu_*\mathcal O_{Y^{\nu}}$ by the normalization factorization at each stage. No assertion that $\mathcal Q_i$ is a sheaf on the reduced residue-field point is needed: its stalk may have nontrivial nilpotent maximal-ideal action. [F1, F4, step 3.1, algebra]

5.1 Collecting: the inclusion $\mathcal O_Y\subsetneq\beta_*\mathcal O_{Y_1}$ is strict with quotient a nonzero coherent sheaf of finite length supported exactly at $p$, and every further point blowup at a closed non-regular center strictly increases the pushed-forward structure sheaf inside the fixed finite normalization $\nu_*\mathcal O_{Y^{\nu}}$. [F5, step 1.1, step 2.1, step 4.1] ∎
