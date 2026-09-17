---
id: thm-ito-isometry-and-linearity-in-predictable-l2
kind: theorem
title: "Ito isometry and linearity in predictable L2"
status: draft
origin: pipeline
deps: [lem-general-ito-integral-is-independent-of-the-approximating-sequence-and-ae-representative, lem-cross-ito-isometry, def-ito-integral-for-square-integrable-predictable-processes, thm-ito-isometry-for-elementary-integrands, def-ito-integral-of-an-elementary-predictable-process, def-elementary-predictable-brownian-integrand, def-continuous-time-adapted-process-and-martingale, thm-density-of-elementary-predictable-processes-in-predictable-l2, thm-riesz-fischer-completeness-of-l-p, thm-basic-algebra-and-order-properties-of-conditional-expectation, def-conditional-expectation-as-an-ae-class, thm-the-l-p-norm-descends-to-the-quotient-and-makes-l-p-a-normed-space, def-axiom-of-choice, lem-ac-supplies-sequential-choices-for-probability-constructions]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Gregory F. Lawler, Stochastic Calculus: An Introduction with Applications, Sections 3.2.2-3.2.3"
      url: "https://www.math.uchicago.edu/~lawler/finbook.pdf"
---

## Statement

Assume the Axiom of Choice and the standing hypothesis (H) of
[[def-elementary-predictable-brownian-integrand]]. Fix $T>0$. For predictable
$H,K$ with finite energy $E\int_0^TH^2ds,E\int_0^TK^2ds<\infty$ the integrals
$\int_0^TH\,dB$ of
[[def-ito-integral-for-square-integrable-predictable-processes]] satisfy
$$\int_0^T(H+K)\,dB=\int_0^TH\,dB+\int_0^TK\,dB,\qquad \int_0^T(aH)\,dB=a\int_0^TH\,dB\quad(a\in\mathbb R),$$
and the identities are equalities of $L^2(P)$-classes (almost sure
equalities). Moreover the map $H\mapsto\int_0^TH\,dB$ is an isometry,
$$E\Bigl(\int_0^TH\,dB\Bigr)^2=E\int_0^TH^2ds=\|H\|^2_{L^2(\mathrm dt\otimes P)},$$
it takes values in the mean-zero subspace of $L^2(P)$, and the bilinear cross
identity
$$E\Bigl[\Bigl(\int_0^TH\,dB\Bigr)\Bigl(\int_0^TK\,dB\Bigr)\Bigr]=E\int_0^TH_sK_s\,ds$$
holds for all such $H,K$. In particular the image of the map is a closed
subspace of $L^2(P)$ isometric to the predictable $L^2$ space of $H$'s, and
$H\mapsto\int_0^TH\,dB$ is injective up to the $(\mathrm dt\otimes P)$-class.

## Facts & Assumptions

**Given:** AC, the standing hypothesis (H), $T>0$, finite-energy predictable $H,K$, elementary sequences $H^n\to H$ and $K^n\to K$ in $L^2(\mathrm dt\otimes P)$, and $a\in\mathbb R$.

[F1] $\|H^n+K^n-(H+K)\|_2\le\|H^n-H\|_2+\|K^n-K\|_2\to0$ and $\|aH^n-aH\|_2=|a|\,\|H^n-H\|_2\to0$, so $H^n+K^n$ and $aH^n$ are admissible approximating sequences for $H+K$ and $aH$. [[thm-the-l-p-norm-descends-to-the-quotient-and-makes-l-p-a-normed-space]]

[F2] For elementary $G$ one has $I_T(G)=$ the elementary sum, $E I_T(G)^2=E\int_0^TG^2$, $E I_T(G)=0$, and for elementary $G,G'$ on a common refinement $E[I_T(G)I_T(G')]=E\int_0^TGG'$. [[def-ito-integral-of-an-elementary-predictable-process]] [[thm-ito-isometry-for-elementary-integrands]] [[lem-cross-ito-isometry]] [[def-continuous-time-adapted-process-and-martingale]]

[F3] Each integral $\int_0^TG\,dB$ is the $L^2(P)$-limit of $I_T(G^n)$ for any admissible elementary sequence, and the limit is independent of the sequence. [[def-ito-integral-for-square-integrable-predictable-processes]] [[lem-general-ito-integral-is-independent-of-the-approximating-sequence-and-ae-representative]]

[F4] On the quotient space $L^2(P)$, $L^2$-convergence implies convergence of norms and of expectations: $\bigl|\|X_n\|_2-\|X\|_2\bigr|\le\|X_n-X\|_2$ and $|EX_n-EX|\le\|X_n-X\|_2$; and the predictable $L^2$ space, like every $L^2$ space, is complete. [[thm-the-l-p-norm-descends-to-the-quotient-and-makes-l-p-a-normed-space]] [[thm-basic-algebra-and-order-properties-of-conditional-expectation]] [[thm-riesz-fischer-completeness-of-l-p]]

[F5] The algebraic identities $(X+Y)^2-(X-Y)^2=4XY$ and $X^2-Y^2=(X-Y)(X+Y)$ hold for real random variables, and $L^2(P)$ is a real vector space of classes. [[def-conditional-expectation-as-an-ae-class]]

[F6] AC is declared for the ambient interfaces. [[def-axiom-of-choice]]

## Proof

**Proof technique:** direct.

1.1 For each $n$ the elementary integrals are linear on a common refinement, $I_T(H^n+K^n)=I_T(H^n)+I_T(K^n)$ and $I_T(aH^n)=aI_T(H^n)$ identically; by [F2] the isometry $E I_T(G)^2=E\int_0^TG^2$, the mean identity $EI_T(G)=0$ for elementary $G$, and the cross identity hold at every index. [F2, given]

1.2 By [F1] the sequences $H^n+K^n$ and $aH^n$ are admissible for $H+K$ and $aH$, so [F3] gives $I_T(H^n+K^n)\to\int_0^T(H+K)dB$ and $I_T(aH^n)\to\int_0^T(aH)dB$ in $L^2(P)$, as well as $I_T(H^n)\to\int_0^THdB$ and $I_T(K^n)\to\int_0^TKdB$. [F1, F3, given]

2.1 Letting $n\to\infty$ in the linear identities of step 1.1 and using uniqueness of $L^2(P)$-limits, $\int_0^T(H+K)dB=\int_0^THdB+\int_0^TKdB$ and $\int_0^T(aH)dB=a\int_0^THdB$ almost surely. [F3, step 1.1, step 1.2]

2.2 Taking the limit in the elementary isometry of step 1.1 gives $E(\int_0^THdB)^2=\lim_nE I_T(H^n)^2=\lim_nE\int_0^T(H^n)^2=\|H\|^2_{L^2(\mathrm dt\otimes P)}$ by [F4] applied to the $L^2(P)$-limits and to the $L^2(\mathrm dt\otimes P)$-convergence $H^n\to H$. Likewise $E\int_0^THdB=\lim_nE I_T(H^n)=0$, and the triangle inequality gives $\bigl|E\int_0^THdB\bigr|\le\|\int_0^THdB\|_2<\infty$. So the image is mean-zero and isometric. [F4, step 1.1, step 1.2]

3.1 For the cross identity use $4XY=(X+Y)^2-(X-Y)^2$ with $X=\int_0^THdB$ and $Y=\int_0^TKdB$: by step 2.1, $4E[XY]=E(\int_0^T(H+K)dB)^2-E(\int_0^T(H-K)dB)^2=\|H+K\|^2_2-\|H-K\|^2_2=4E\int_0^THK\,ds$ by step 2.2. All terms are finite by step 2.2. [F5, step 2.1, step 2.2]

4.1 Steps 2.1--3.1 are exactly the linearity, isometry, mean-zero and cross-identity claims; injectivity follows because $\|\int_0^T(H-K)dB\|_2=\|H-K\|_{L^2(\mathrm dt\otimes P)}$, and closedness of the image follows because the image of a complete space under an isometry onto it is complete, hence closed, with the target metric restricted: the domain of classes is complete by [F4], and the isometry carries its Cauchy sequences to Cauchy sequences whose limits are the images of the domain limits. AC enters only through the declared ambient interfaces [F6]; the approximating sequences are the given ones and the limits are unique. [step 2.1, step 3.1, F4, F6, given] ∎

## Source notes

Lawler, Sections 3.2.2--3.2.3, proves linearity and the variance rule for the extended integral by approximation. The presentation here keeps the two descents separate: item 11 supplies well-definedness of the limit, and the elementary isometry and cross isometry of items 7 and 8 are passed to the limit through the continuity of the $L^2$ norm and of the expectation.
