---
id: ex-logarithm-of-geometric-brownian-motion
kind: example
title: "Logarithm of geometric Brownian motion"
status: draft
origin: pipeline
deps: [lem-adapted-continuous-processes-are-progressively-measurable, def-ito-integral-of-an-elementary-predictable-process, thm-ito-formula-one-dimensional, def-brownian-motion, def-natural-and-usual-augmented-brownian-filtrations, def-continuous-brownian-ito-process, def-continuity-real, thm-heine-cantor-r, def-axiom-of-choice, lem-ac-supplies-sequential-choices-for-probability-constructions, def-elementary-predictable-brownian-integrand]
proof_strategy: direct
generation:
  role: example
provenance:
  statement: ai-generated
  proof: ai-generated
sources:
  references:
    - title: "Gregory F. Lawler, Stochastic Calculus: An Introduction with Applications, Section 3.3"
      url: "https://www.math.uchicago.edu/~lawler/finbook.pdf"
    - title: "Andreas Eberle, Introduction to Stochastic Analysis, Ito formula and geometric Brownian motion"
      url: "https://wt.iam.uni-bonn.de/fileadmin/WT/Inhalt/people/Andreas_Eberle/IntroStoAn1516/IntroStochAnalysis2015.pdf"
---

## Example

Assume the Axiom of Choice and the standing hypothesis (H) of
[[def-elementary-predictable-brownian-integrand]]. Equip $B$ with its usual
augmented filtration and replace it on the $\mathcal F_0$-null event outside a fixed measurable probability-one event of
continuous paths and zero start by the zero path; write
$\widehat B$ for this everywhere-continuous
adapted version. Let $x>0$, let $\mu$ and $\sigma$ be real and define
$$X_t:=x\exp\Bigl(\bigl(\mu-\tfrac{\sigma^2}{2}\bigr)t+\sigma\widehat B_t\Bigr),\qquad t\ge0 .$$
Then $X$ is a positive continuous Brownian Ito process with
$$dX_t=\mu X_t\,dt+\sigma X_t\,dB_t,\qquad d\log X_t=\bigl(\mu-\tfrac{\sigma^2}{2}\bigr)dt+\sigma\,dB_t,$$
both up to indistinguishability. No existence theorem for stochastic
differential equations is asserted: the process $X$ is defined by the displayed
formula.

## Facts & Assumptions

**Given:** AC, (H), a standard Brownian motion $B$ under the usual conditions, its normalized version $\widehat B$, reals $x>0,\mu,\sigma$, and a finite horizon $T>0$. [[def-natural-and-usual-augmented-brownian-filtrations]]
 
[F1] **Ito formula and class structure.** Everywhere-continuous adapted processes are predictable and progressive. The elementary integral of 1 equals $B_t-B_0$, hence $\widehat B$ has the class decomposition with drift 0 and diffusion 1 up to indistinguishability. [[lem-adapted-continuous-processes-are-progressively-measurable]] [[def-ito-integral-of-an-elementary-predictable-process]] For $g\in C^{1,2}([0,\infty)\times\mathbb R)$ and $X$ a continuous Brownian Ito process with drift $b$ and diffusion coefficient $\varsigma$, $dg(t,X_t)=(\partial_tg+b\partial_xg+\tfrac12\varsigma^2\partial^2_xg)(t,X_t)dt+\varsigma_t\partial_xg(t,X_t)dB_t$ up to indistinguishability; $B$ itself is a class process with drift $0$ and diffusion coefficient $1$. [[thm-ito-formula-one-dimensional]] [[def-continuous-brownian-ito-process]] [[def-brownian-motion]]
 
[F2] **Positivity and explicit bounds.** $X_t>0$ for every $(t,\omega)$. On $[0,T]$, uniform continuity of the path $\widehat B(\omega)$ and a finite mesh show directly that $K_T(\omega):=\sup_{s\le T}|\widehat B_s(\omega)|<\infty$. Hence $$xe^{-|\mu-\sigma^2/2|T-|\sigma|K_T}\le X_s\le xe^{|\mu-\sigma^2/2|T+|\sigma|K_T},\qquad s\le T.$$ No extreme-value assertion for $X$ is needed. [[def-continuity-real]] [[thm-heine-cantor-r]]
 
[F3] **AC bookkeeping.** Full AC covers the inherited Brownian, Ito, conditional-expectation and completeness interfaces. No solution or localization sequence is selected in the logarithmic calculation. [[def-axiom-of-choice]]
 
 
 
 

## Verification

**Proof technique:** direct.
 
1.1 First identity: apply [F1] to $g(t,y)=x\exp((\mu-\sigma^2/2)t+\sigma y)$ along $\widehat B$, which is indistinguishable from $B$ and has drift $0$ and diffusion $1$. Then $\partial_tg=(\mu-\sigma^2/2)g$, $\partial_yg=\sigma g$ and $\partial^2_{yy}g=\sigma^2g$, so $dX_t=\mu X_tdt+\sigma X_tdB_t$ up to indistinguishability. Positivity and continuity hold everywhere by the explicit definition. The composition defining $X$ is adapted, so [F1] also makes $X$, $\mu X$ and $\sigma X$ progressive and predictable. If $C_T$ is the upper bound in [F2], then $\int_0^T|\mu X_s|ds\le |\mu|TC_T$ and $\int_0^T(\sigma X_s)^2ds\le\sigma^2TC_T^2$ on every path. Together with $X_0=x$ and the displayed decomposition these verify the Ito-class assertion explicitly. [F1, F2, given]
 
2.1 Second identity: because $X$ was defined by a positive exponential, taking the ordinary logarithm gives the everywhere pathwise identity $$\log X_t=\log x+(\mu-\sigma^2/2)t+\sigma\widehat B_t.$$ Since $\widehat B$ and $B$ are indistinguishable, this is exactly $d\log X_t=(\mu-\sigma^2/2)dt+\sigma dB_t$ up to indistinguishability. The explicit bounds of [F2] also verify directly that $X$ stays in a compact subinterval of $(0,\infty)$ and its logarithm is bounded on every finite horizon; no localization or SDE existence theorem is being smuggled into the argument. [F2, step 1.1]
 
3.1 Boundary and consistency cases: at $t=0$ the identities read $X_0=x$ and $\log X_0=\log x$; for $\sigma=0$ the formulas reduce to the deterministic exponential and its logarithm; for $\mu=0$ the drift of $\log X$ is $-\sigma^2/2$; and $x>0$ is required for the logarithm. The formulas concern the explicitly defined process, not existence for an SDE, and AC enters only through [F3]. [F1, F2, F3, step 2.1] ∎

## Source notes

Lawler, Section 3.3, computes geometric Brownian motion by Ito's formula. Here the first differential follows from Ito's formula and the logarithmic identity is read directly from the defining positive exponential, with the explicit finite-horizon bounds recording why no domain problem is hidden.
