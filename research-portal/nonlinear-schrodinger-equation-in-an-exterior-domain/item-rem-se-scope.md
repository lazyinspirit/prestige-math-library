---
title: Scope of geometric assumptions and control results
status: draft
research_item: rem-se-scope
dependency_level: 26
sources:
  references:
    - title: Nonlinear Schrödinger equation in an exterior domain, v2
      url: https://arxiv.org/abs/2610.11968
      locator: PDF page 21, §5.1, first paragraph
---

PDF p. 21: ` §5.1, first paragraph `

## Prerequisites

- [def-se-geometry](item-def-se-geometry)
- [def-se-control-cutoffs](item-def-se-control-cutoffs)
- [def-se-dirichlet-scale](item-def-se-dirichlet-scale)
- [def-se-boundary-state-space](item-def-se-boundary-state-space)
- [def-se-trajectory](item-def-se-trajectory)
- [def-se-ucpw](item-def-se-ucpw)
- [thm-se-1-1](item-thm-se-1-1)
- [thm-se-1-2](item-thm-se-1-2)
- [thm-se-1-3](item-thm-se-1-3)
- [thm-se-1-5](item-thm-se-1-5)
- [cor-se-1-6](item-cor-se-1-6)
- [rem-se-nontrapping-gcc](item-rem-se-nontrapping-gcc)
- [lem-author-062cb22743bb-free-no-return](item-lem-author-062cb22743bb-free-no-return)
- [math:lem-ac-supplies-countable-and-dependent-choice-for-banach-integration](https://alphabetamath.cc/item/lem-ac-supplies-countable-and-dependent-choice-for-banach-integration)
- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)


## Statement

Assume the Axiom of Choice. Let $n\ge2$ and let $\Theta\subset\mathbb R^n$ be a nonempty compact obstacle with smooth boundary and connected exterior $\Omega=\mathbb R^n\setminus\Theta$, and assume that its generalized reflected or glancing rays leave every compact set in finite forward time. Fix $\lambda\in\mathbb R\setminus\{0\}$ and $R>0$ with $\Theta\subset B_R(0)$, and put $\omega=\{x\in\Omega:|x|>R\}$. Use this $\lambda$ in the nonlinear equations and this $R$ for internal control. For every $T>0$, the following control results hold under the precise hypotheses of their respective statements.

For $n\in\{2,3\}$ and $s\in\{1,2\}$, sufficiently small endpoints can be joined near zero for both the cubic and quintic equations, either by an internal force supported near infinity in the exterior or by a Dirichlet control on the outer boundary of a bounded truncation. The boundary endpoints must have zero value trace on the obstacle boundary. The linear exterior equation admits internal control between arbitrary endpoints in the Dirichlet spectral space $H_D^s(\Omega)$ for every $s\in[-2,2]$. The smallness radius can depend on the fixed geometry, time and other parameters; these are local nonlinear results, not arbitrary-size nonlinear control.

For a cubic reference trajectory $w$ satisfying (W), internal control near its endpoints also holds at $s=1,2$ if the additional hypothesis (UCPw) holds. Here (W) requires $w\in C([0,T];H_D^2(\Omega)\cap W^{2,\infty}(\Omega))$ in the intersection norm and the uncontrolled cubic equation in distributions. For this fixed coupling and observation region, (UCPw) asserts that an energy-continuous solution of $iq_t+\Delta q+2\lambda|w|^2q-\lambda w^2\overline q=0$ which vanishes on $(0,T)\times\omega$ is identically zero. It is an additional assumption, not a consequence asserted here for every trajectory.

For the fixed ball $B_R(0)$ containing the obstacle, non-trapping is equivalent to the geometric control condition from infinity: there is $L_R>0$ such that every complete unit-speed generalized reflected or glancing ray meets $\omega$ at a time in $(0,L_R)$. This ray-hitting time is not a lower bound on the Schrödinger control time $T$. The stated control results do not impose star-shapedness of the obstacle.

## Statement references

[def-se-geometry](item-def-se-geometry)

[def-se-control-cutoffs](item-def-se-control-cutoffs)

[def-se-dirichlet-scale](item-def-se-dirichlet-scale)

[def-se-boundary-state-space](item-def-se-boundary-state-space)

[def-se-trajectory](item-def-se-trajectory)

[def-se-ucpw](item-def-se-ucpw)

[thm-se-1-1](item-thm-se-1-1)

[thm-se-1-2](item-thm-se-1-2)

[thm-se-1-3](item-thm-se-1-3)

[thm-se-1-5](item-thm-se-1-5)

[cor-se-1-6](item-cor-se-1-6)

[rem-se-nontrapping-gcc](item-rem-se-nontrapping-gcc)

[lem-author-062cb22743bb-free-no-return](item-lem-author-062cb22743bb-free-no-return)

[math:lem-ac-supplies-countable-and-dependent-choice-for-banach-integration](https://alphabetamath.cc/item/lem-ac-supplies-countable-and-dependent-choice-for-banach-integration)

[math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)

## Facts & Assumptions

[F1] The geometry and non-trapping convention are those of [def-se-geometry](item-def-se-geometry). The cutoff in [def-se-control-cutoffs](item-def-se-control-cutoffs) vanishes near the obstacle and is positive outside a containing ball. The spaces and boundary trace convention are specified by [def-se-dirichlet-scale](item-def-se-dirichlet-scale) and [def-se-boundary-state-space](item-def-se-boundary-state-space). Assume Choice as in [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice). By [math:lem-ac-supplies-countable-and-dependent-choice-for-banach-integration](https://alphabetamath.cc/item/lem-ac-supplies-countable-and-dependent-choice-for-banach-integration), this supplies the Countable Choice and Dependent Choice hypotheses used by the geometric supplier.

[F2] Under their stated hypotheses, [thm-se-1-3](item-thm-se-1-3) gives near-zero cubic exterior internal control, [thm-se-1-1](item-thm-se-1-1) gives near-zero cubic outer Dirichlet boundary control, and [cor-se-1-6](item-cor-se-1-6) gives both conclusions for the quintic equation. These results use $n=2,3$, $s=1,2$, arbitrary $T>0$, and sufficiently small compatible endpoint data.

[F3] Under its stated hypotheses, [thm-se-1-2](item-thm-se-1-2) gives linear exterior internal control for arbitrary endpoint pairs at every spectral order $s\in[-2,2]$ and every $T>0$.

[F4] [def-se-trajectory](item-def-se-trajectory) specifies (W), and [def-se-ucpw](item-def-se-ucpw) specifies the additional energy-level unique-continuation implication (UCPw). Under both hypotheses and its other stated assumptions, [thm-se-1-5](item-thm-se-1-5) gives cubic internal control near the two trajectory endpoints at $s=1,2$.

[F5] [rem-se-nontrapping-gcc](item-rem-se-nontrapping-gcc) gives the implication from non-trapping to uniform ray hitting from infinity for the fixed containing ball, and distinguishes its geometric hitting time from the Schrödinger control time. Its geometric assertion assumes Countable Choice and Dependent Choice, supplied by F1.

[F6] [lem-author-062cb22743bb-free-no-return](item-lem-author-062cb22743bb-free-no-return) applies to the same smooth compact-obstacle geometry and complete unit-speed generalized rays. A common exterior-hitting bound for rays initially in the closed containing ball implies that every complete ray, including those initially outside the ball, tends to spatial infinity. The lemma proves no return after an outward exit and treats the initially exterior rays separately.

## Proof

**Given:** The stated geometry, Choice assumption and the respective parameters and endpoint hypotheses of the cited results.

**Goal:** Combine their conclusions while retaining their distinct ranges and assumptions.

1.1 Apply the cubic and quintic results in F2 for each $s\in\{1,2\}$. Their internal conclusions use forces localized by the cutoff, and their boundary conclusions use compatible data with zero obstacle trace. Their positive smallness radii give the claimed near-zero scope. Apply F3 separately to arbitrary linear endpoint pairs at each $s\in[-2,2]$; no nonlinear conclusion at intermediate or negative orders follows from this application. [given, F1, F2, F3]

1.2 For a fixed trajectory satisfying (W) and (UCPw) with the chosen coupling and observation region, apply F4 with the stated endpoint closeness to obtain the trajectory conclusion. [given, F4]

1.3 Under the non-trapping hypothesis, F1 supplies the choice hypotheses of F5. Apply F5 to the fixed ball $B_R(0)$ to obtain $L_R>0$ and a hit of $\omega$ by every complete unit-speed generalized ray at a time in $(0,L_R)$. This proves the forward implication in the geometric equivalence. [given, F1, F5]

1.4 Conversely, suppose this uniform hitting property holds for the fixed ball, without assuming non-trapping in this implication. In particular, every complete ray initially in $\overline B_R(0)$ hits $\omega$ within the common bound $L_R$. By F6, each such ray remains outside after its outward exit and tends to spatial infinity; every complete ray initially outside the ball also eventually tends to spatial infinity. Consequently every ray eventually remains outside any prescribed compact spatial set, since that set lies in some finite-radius ball. This is the required non-trapping property for the same generalized rays. [given, F6]

2.1 F2–F4 quantify over every positive control time within their respective endpoint and trajectory hypotheses, whereas F5 concerns a geometric ray-hitting time. Thus the geometric hitting time imposes no lower bound on the Schrödinger control time. The hypotheses in F2–F4 do not require star-shapedness, so the stated control deductions do not impose it. [F2, F3, F4, F5, step 1.1, step 1.2, step 1.3, step 1.4] ∎

## Source notes

The article's concluding paragraph attributes bounded-domain Schrödinger observability under geometric control to its reference [24] and notes that geometric control is not generally necessary, citing [33,10]. It describes local smoothing as the mechanism providing sufficiency in its exterior setting, in place of a star-shaped multiplier condition. These are contextual attributions to that paragraph; they are not independent imports or premises for the deductions above. The cited theorem and remark items contain the actual hypotheses and arguments for the scope summarized here.
