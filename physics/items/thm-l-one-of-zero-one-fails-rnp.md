---
id: thm-l-one-of-zero-one-fails-rnp
kind: theorem
title: "$L^1[0,1]$ fails the Radon--Nikodym property"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-axiom-of-choice, lem-ac-supplies-countable-and-dependent-choice-for-banach-integration, def-lebesgue-measure-and-the-lebesgue-sigma-algebra, thm-lebesgue-measure-is-a-complete-measure, thm-lebesgue-measure-of-a-box-of-every-kind, def-restriction-of-a-measure, prop-restriction-is-a-measure, def-l-p-space-as-a-quotient-by-null-functions, thm-the-l-p-norm-descends-to-the-quotient-and-makes-l-p-a-normed-space, thm-riesz-fischer-completeness-of-l-p, def-complex-lp-and-euclidean-test-function-conventions, thm-complex-holder-minkowski-and-the-quotient-norm, thm-complex-lp-completeness-and-almost-everywhere-subsequences, thm-rnp-lipschitz-differentiability-characterization]
justified_by: []
forward_refs: []
aliases: []
landmark: true
proof_strategy: counterexample
verification:
  audited: 2026-09-14
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-14
sources:
  scraped: []
  references:
    - title: "Jeff Cheeger and Bruce Kleiner, On the differentiability of Lipschitz maps from metric measure spaces to Banach spaces"
      url: "https://math.nyu.edu/~bkleiner/bspace.pdf"
      locator: "Introduction subsection 'The Radon-Nikodym property', complete example, printed pp. 2--3"
    - title: "Gilles Pisier, Martingales in Banach Spaces"
      url: "https://webusers.imj-prg.fr/~gilles.pisier/ihp-pisier.pdf"
      locator: "Chapter 2, remark following Corollary 2.11, printed p. 42"
pipeline_run: phase-2-next-18
---

## Statement

Assume the Axiom of Choice. The real and complex Banach spaces
$L^1([0,1],\lambda)$ for nonatomic Lebesgue measure do not have the
Radon--Nikodym property.

## Facts & Assumptions

[A1] The Axiom of Choice holds ([[def-axiom-of-choice]]).

[L1] AC supplies Countable Choice ([[lem-ac-supplies-countable-and-dependent-choice-for-banach-integration]]). Under Countable Choice, Lebesgue measure is a complete measure and an interval has its length ([[def-lebesgue-measure-and-the-lebesgue-sigma-algebra]], [[thm-lebesgue-measure-is-a-complete-measure]], [[thm-lebesgue-measure-of-a-box-of-every-kind]]).

[L2] Restriction to a measurable set is a measure ([[def-restriction-of-a-measure]], [[prop-restriction-is-a-measure]]).

[L3] Real $L^1$ is the quotient by almost-everywhere equality, its integral formula is a norm, and it is complete under Countable Choice ([[def-l-p-space-as-a-quotient-by-null-functions]], [[thm-the-l-p-norm-descends-to-the-quotient-and-makes-l-p-a-normed-space]], [[thm-riesz-fischer-completeness-of-l-p]]).

[L4] The same quotient norm and completeness statements hold for complex $L^1$ ([[def-complex-lp-and-euclidean-test-function-conventions]], [[thm-complex-holder-minkowski-and-the-quotient-norm]], [[thm-complex-lp-completeness-and-almost-everywhere-subsequences]]).

[L5] Under AC, a Banach space has RNP exactly when all its Lipschitz curves on $[0,1]$ are norm differentiable almost everywhere ([[thm-rnp-lipschitz-differentiability-characterization]]).

## Proof

**Proof technique:** counterexample.

**Given:** AC and either the real or complex scalar field.

1.1 Fix the precise $L^1[0,1]$ model. Let $\lambda_{[0,1]}(E)=\lambda(E\cap[0,1])$ on the Lebesgue sigma-algebra of $\mathbb R$. By [L1]--[L2] this is a finite measure. We use $L^1(\lambda_{[0,1]})$ as the same-ambient realization of $L^1([0,1],\lambda)$: values outside $[0,1]$ have zero seminorm. The real space is Banach by [L3], and the complex space is Banach by [L4]; [A1] supplies the Countable Choice required by the completeness results. [given, A1, L1, L2, L3, L4]

2.1 Construct the Lipschitz curve. For $0\leq t\leq1$, put $F(t)=[\mathbf1_{(0,t)}]$. Every representative is measurable and integrable. If $0\leq s<t\leq1$, then [L1, L3, L4, step 1.1, construct]

$$\|F(t)-F(s)\|_1=\|[\mathbf1_{(s,t)}]\|_1=\lambda((s,t))=t-s.$$

Thus $F$ is an isometric, and in particular one-Lipschitz, curve in either the real or complex target.

3.1 Calculate two incompatible positive difference quotients. Fix $t\in(0,1)$ and $0<h<1-t$. The positive difference quotient is [L1, L3, L4, step 2.1, algebra]

$$q_h:=\frac{F(t+h)-F(t)}h=\left[\frac1h\mathbf1_{(t,t+h)}\right].$$

On $(t,t+h/2)$ the difference $q_h-q_{h/2}$ has absolute value $1/h$, and on $(t+h/2,t+h)$ it again has absolute value $1/h$. It vanishes elsewhere up to endpoints. Consequently

$$\|q_h-q_{h/2}\|_1=\frac1h\frac h2+\frac1h\frac h2=1.$$

4.1 Prove failure of differentiability at every interior point. Choose, for example, $h_n=(1-t)/(n+2)$. If $F'(t)$ existed in norm, both $q_{h_n}$ and $q_{h_n/2}$ would converge to it, so their mutual distances would tend to zero. Step 3.1 says every one of those distances is one, a contradiction. Hence $F$ is norm nondifferentiable at every $t\in(0,1)$. [step 3.1]

5.1 Apply the Lipschitz characterization and close the boundary cases. [A1, L5, step 1.1, step 2.1, step 4.1] If either $L^1$ target had RNP, [L5] would make the one-Lipschitz curve $F$ norm differentiable at almost every interior point, contrary to step 4.1. Thus both targets fail RNP. Endpoint values cause no issue: $F(0)=0$ and $F(1)=[\mathbf1_{(0,1)}]$, while differentiability is asserted only on the interior. Open, closed, or half-open versions of the intervals define the same $L^1$ classes because their endpoint differences are null. The complex proof uses the same real-valued representatives inside complex $L^1$. AC is used through [L5] and to supply the Countable Choice in step 1.1. [A1, L1, L5, step 4.1] ∎