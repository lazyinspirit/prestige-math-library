---
id: "cex-an-unbounded-predictable-transform-may-lose-integrability"
kind: "counterexample"
title: "An unbounded predictable transform may lose integrability"
deps: ["def-martingale-submartingale-and-supermartingale", "def-predictable-discrete-time-process", "def-discrete-martingale-transform", "def-conditional-expectation-as-an-ae-class", "lem-conditional-expectation-is-unique-almost-surely", "lem-conditioning-a-known-variable-and-an-independent-variable", "thm-nonnegative-weighted-sums-of-measures", "prop-dirac-measure-is-a-probability-measure", "thm-monotone-convergence-for-the-integral", "thm-generated-sigma-algebra-exists-and-is-minimal", "def-expectation-of-a-nonnegative-or-integrable-random-variable", "def-axiom-of-choice"]
provenance:
  statement: ai-generated
  proof: ai-altered
proof_strategy: "direct"
generation:
  role: counterexample
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  references:
    - title: "Durrett, Probability: Theory and Examples, fifth edition"
      url: https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf
status: published
origin: "pipeline"
---

## Statement refuted

Assume AC. Predictability of finite real $H$ and boundedness of a martingale $M$ do not ensure integrability of the algebraic gain $\sum_{k=1}^nH_k(M_k-M_{k-1})$. The following gain is finite at every point and fails the integrable-transform domain already at time one.

## Facts & Assumptions

**Given:** The hypotheses and conventions in the statement refuted.

[F1] Nonnegative finite and countable weighted sums of measures are measures. [[thm-nonnegative-weighted-sums-of-measures]].

[F2] A Dirac measure at a specified point is a probability measure. [[prop-dirac-measure-is-a-probability-measure]].

[F3] Under AC every integrable input has a measurable integrable conditional version. [[def-conditional-expectation-as-an-ae-class]].

[F4] A known integrable variable conditions to itself; an independent one conditions to its mean. [[lem-conditioning-a-known-variable-and-an-independent-variable]].

[F5] Increasing nonnegative measurable limits pass through integrals. [[thm-monotone-convergence-for-the-integral]].

[F6] AC supplies the inherited conditional-expectation existence and any stated choice of versions. [[def-axiom-of-choice]].

[F7] Every product increment must be integrable for an integrable transform. [[def-discrete-martingale-transform]].

## Counterexample

**Proof technique:** direct.

1.1 Let $\Omega=\{(j,e):j\ge1,\ e\in\{-1,1\}\}$ with its full power-set sigma-algebra and masses $P\{(j,e)\}=2^{-j-1}$. The weighted Dirac sum is a measure by [F1]–[F2]. Its first m two-point blocks have total mass $\sum_{j=1}^m2^{-j}=1-2^{-m}$, by multiplying the finite sum by two and subtracting; since $2^m\ge m+1$, its limit is one. Hence $P(\Omega)=1$. Let $\mathcal F_0$ be all unions of the blocks $B_j=\{(j,-1),(j,1)\}$ and $\mathcal F_n$ the full power set for $n\ge1$. Complements and countable unions preserve block unions, so this is a filtration. [F1, F2]

2.1 Set $M_0=0$, $M_n(j,e)=e$ for $n\ge1$. These variables are adapted and bounded by one. For any $A\in\mathcal F_0$, its positive-sign and negative-sign portions have equal probability: each equals $\sum_{j:B_j\subseteq A}2^{-j-1}$. Thus $\int_Ae\,dP=0$, a finite subtraction, so the zero function meets all CE event identities. Consequently $E[M_1\mid\mathcal F_0]=0=M_0$. At later times $M_{n+1}=M_n=e$ is already known and integrable, so it conditions to itself. Thus $M$ is a bounded martingale [[def-martingale-submartingale-and-supermartingale]]. [F3, F4, step 1.1]

3.1 Define $H_1(j,e)=2^j$ and $H_k=0$ for $k\ge2$. Every value is finite, $H_1$ is constant on each block and hence $\mathcal F_0$-measurable, and later H values are known constants. Thus $H$ is predictable [[def-predictable-discrete-time-process]] and unbounded. The algebraic gain at every positive time is $G_n(j,e)=2^je$. For $f_m=2^j\mathbf1_{\{j\le m\}}$, the finite simple integral is $Ef_m=\sum_{j=1}^m\sum_{e=\pm1}2^j2^{-j-1}=m$. To justify the limiting step locally, augment every finite disjoint simple display by its complement with coefficient $0$; intersections of two augmented displays partition $\Omega$ and carry equal coefficients, so finite additivity and $0\cdot(+\infty)=0$ prove representation independence. Common refinements give monotonicity. For any $0\le u_r\uparrow u$, a simple $s\le u$, and $0<c<1$, the sets $A_r=\{u_r\ge cs\}$ increase to $\Omega$, including on the zero level of $s$, and continuity from below for the finite-sum measure $A\mapsto\int_A s$ gives $c\int s\le\sup_r\int u_r$. Let $c\uparrow1$ and take the supremum over $s$ to obtain MCT. Applying this to $f_m\uparrow|G_1|$ gives $E|G_1|=\infty$. Hence the product at time one is not integrable and violates [F7], and the gains cannot be a martingale. No signed conditional expectation of $G_1$ is formed. AC is inherited only from the CE notation used for the bounded M; all masses and factors are explicit. [F5, F6, F7, step 1.1, step 2.1, construct] ∎
