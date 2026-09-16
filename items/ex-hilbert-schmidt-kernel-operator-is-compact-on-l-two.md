---
id: ex-hilbert-schmidt-kernel-operator-is-compact-on-l-two
kind: example
title: A Hilbert–Schmidt kernel operator is compact on L two
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [thm-l-two-kernels-give-hilbert-schmidt-operators, thm-hilbert-schmidt-operators-are-compact, ex-square-integrable-kernel-without-continuous-representative, def-hilbert-schmidt-operator, def-compact-linear-operator, def-finite-sigma-finite-and-semifinite-measures, def-completed-product-measure, def-axiom-of-choice, lem-ac-supplies-countable-and-dependent-choice-for-banach-integration, def-countable-choice]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "John Roe, Lectures on Analysis — Proposition 13.5 and Exercise 13.4, printed p. 68"
      url: "https://bpb-us-e1.wpmucdn.com/sites.psu.edu/dist/1/4020/files/2017/12/analysis-slides-278829v.pdf"
    - title: "Gerald Teschl, Topics in Real and Functional Analysis, version November 17, 2017 — §3.6, Lemma 3.23, printed pp. 93–94"
      url: "https://www.uomustansiriyah.edu.iq/media/lectures/9/9_2018_12_07!10_23_44_AM.pdf"
---

## Example

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $(X,\mathcal A,\mu)$
and $(Y,\mathcal B,\nu)$ be sigma-finite measure spaces
([[def-finite-sigma-finite-and-semifinite-measures]]), let
$\overline{\mu\times\nu}$ be the completed product measure
([[def-completed-product-measure]]), and let $k$ be a class in
$L^2(\overline{\mu\times\nu};\mathbb C)$. Then the kernel operator
$T_k:L^2(\nu;\mathbb C)\to L^2(\mu;\mathbb C)$ of
[[thm-l-two-kernels-give-hilbert-schmidt-operators]] is compact
([[def-compact-linear-operator]]), and this needs no continuity of the kernel:
the discontinuous kernel of
[[ex-square-integrable-kernel-without-continuous-representative]] is square
integrable, so its integral operator is compact as well, even though the kernel
has no continuous representative. Thus compactness of the integral operator here
strictly extends the continuous-kernel compactness results.

## Facts & Assumptions

**Given:** The Axiom of Choice, sigma-finite $(X,\mathcal A,\mu)$ and $(Y,\mathcal B,\nu)$, the completed product, and $k\in L^2(\overline{\mu\times\nu};\mathbb C)$.

[F1] The kernel theorem supplies the bounded operator $T_k$, and it supplies a Hilbert basis $E$ of $L^2(\nu;\mathbb C)$ together with the identity $\sum_{e\in E}\|T_ke\|^2=\|k\|_2^2<+\infty$, the sum being a finite-subset supremum ([[thm-l-two-kernels-give-hilbert-schmidt-operators]]).

[F2] A bounded operator that is Hilbert–Schmidt relative to a Hilbert basis of its domain is compact under Countable Choice ([[thm-hilbert-schmidt-operators-are-compact]], [[def-hilbert-schmidt-operator]]).

[F3] The preceding example exhibits a square-integrable kernel in $L^2(\overline{\mu\times\nu};\mathbb C)$ for the square with the completed product measure that has no continuous representative ([[ex-square-integrable-kernel-without-continuous-representative]]).

[F4] Choice implies Countable Choice ([[def-axiom-of-choice]], [[lem-ac-supplies-countable-and-dependent-choice-for-banach-integration]], [[def-countable-choice]]).

## Verification

**Proof technique:** direct.

**Given:** The objects above, the kernel theorem's operator $T_k$, and a Hilbert basis $E$ of $L^2(\nu;\mathbb C)$ with $\sum_{e\in E}\|T_ke\|^2<+\infty$ from [F1].

1.1 By [F1] the operator $T_k$ is well defined and bounded, and relative to the Hilbert basis $E$ of $L^2(\nu;\mathbb C)$ its Hilbert–Schmidt square-sum is $\|k\|_2^2<+\infty$; thus $T_k$ is Hilbert–Schmidt relative to $E$. [F1]

2.1 The target $L^2(\mu;\mathbb C)$ is a Hilbert space, hence a Banach space, and $T_k$ is compact by [F2] applied with [step 1.1], Countable Choice being available by [F4]; since $k$ was an arbitrary square-integrable kernel, every kernel operator of the pair is compact. [step 1.1, F2, F4]

3.1 In particular, for the kernel of [F3] — square integrable, rank one, and without continuous representative — the hypotheses of [step 2.1] hold, so its integral operator is compact although the kernel is discontinuous; this is the sense in which the present compactness statement strictly extends the continuous-kernel results. [step 2.1, F3]

4.1 Steps 2.1 and 3.1 prove both assertions: compactness of $T_k$ for every square-integrable kernel over sigma-finite factors, and the specific discontinuous witness. [step 2.1, step 3.1] ∎
