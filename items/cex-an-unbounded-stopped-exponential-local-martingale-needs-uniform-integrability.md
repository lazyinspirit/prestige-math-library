---
id: cex-an-unbounded-stopped-exponential-local-martingale-needs-uniform-integrability
kind: counterexample
title: "An unbounded stopped exponential martingale needs uniform integrability"
status: draft
origin: pipeline
deps: [cor-exponential-brownian-martingale, def-brownian-motion, def-continuous-time-stopping-time, def-uniformly-integrable-family, thm-uniform-integrability-plus-probability-convergence-implies-l1-convergence, thm-law-of-the-iterated-logarithm-for-brownian-motion-at-infinity, thm-doob-lp-maximal-inequality, thm-doob-l1-maximal-inequality, cor-absolute-value-and-powers-of-a-martingale-are-submartingales, thm-optional-sampling-for-bounded-stopping-times, thm-dominated-convergence, def-continuous-time-filtration-and-all-pairs-martingale, def-continuity-real, thm-heine-cantor-r, def-convergence-in-probability, def-elementary-predictable-brownian-integrand, def-conditional-expectation-as-an-ae-class, def-axiom-of-choice, lem-ac-supplies-sequential-choices-for-probability-constructions]
proof_strategy: direct
generation:
  role: counterexample
provenance:
  statement: ai-generated
  proof: ai-generated
sources:
  references:
    - title: "Gregory F. Lawler, Stochastic Calculus: An Introduction with Applications, Sections 3.3 and 4.1"
      url: "https://www.math.uchicago.edu/~lawler/finbook.pdf"
---

## Statement refuted

The inference "if $Z$ is a positive continuous local martingale with $Z_0=1$ and
$\tau<\infty$ almost surely, then $EZ_{t\wedge\tau}=1$ for all $t$ implies
$EZ_\tau=1$" is false: the equality of the stopped expectations at finite times
does not by itself justify optional stopping at an unbounded stopping time. The
witness is $Z_t=\exp(B_t-t/2)$ and
$\tau=\inf\{t\ge0:Z_t=1/2\}$; for this pair $EZ_{t\wedge\tau}=1$ for every finite
$t$, $\tau<\infty$ almost surely, yet $Z_{t\wedge\tau}\to1/2$ almost surely and
$EZ_\tau=1/2\ne1$, and the stopped family is not uniformly integrable.

## Facts & Assumptions

**Given:** AC, (H), a standard Brownian motion $B$ equipped with its usual augmented natural filtration, the process $Z_t=\exp(B_t-t/2)$, the level $1/2$, the stopping time $\tau=\inf\{t:Z_t=1/2\}$, and $t>0$.
 
[F1] **Exponential martingale.** $Z$ is a positive continuous martingale with $EZ_t=1$ for every $t$, and for $\theta=2$ the same statement applied to $\exp(2B_t-2t)$ gives $Ee^{2B_t}=e^{2t}$, hence $EZ_t^2=Ee^{2B_t-t}=e^{t}<\infty$. [[cor-exponential-brownian-martingale]] [[def-brownian-motion]]
 
[F2] **The level set is hit.** On the full-measure event of continuity, $\log Z_t=B_t-t/2\to-\infty$ as $t\to\infty$ because $B_t/t\to0$ almost surely by the law of the iterated logarithm; hence $Z_t\to0$, while $Z_0=1>1/2$, so the continuous path attains the value $1/2$ at some finite time and $\tau<\infty$ almost surely. [[thm-law-of-the-iterated-logarithm-for-brownian-motion-at-infinity]] [[def-continuity-real]] [[def-brownian-motion]]
 
[F3] **$\tau$ is a stopping time.** The set $\{1/2\}$ is closed and $Z$ has continuous paths, so on the continuity event $\{\tau\le t\}=\bigcap_m\bigcup_{q\in\mathbb Q\cap[0,t]}\{|Z_q-1/2|<1/m\}$ up to a null set, by the same rational approximation argument as for closed sets: a hit at time $\le t$ has neighbouring rational times nearby, and rational approximate contact for all $m$ yields a limit point with $Z=1/2$; each event on the right is in $\mathcal F_t$, and the exceptional null set is contained in the usual augmentation. [[def-continuous-time-stopping-time]] [[def-continuity-real]] [[thm-heine-cantor-r]]
 
[F4] **Finite-time stopping identity and domination.** For each finite $t$, the dyadic ceilings $\tau_n$ of $\tau\wedge t$ give $EZ_{\tau_n}=EZ_0=1$ by discrete optional sampling, and the dominated convergence theorem applies to $Z_{\tau_n}\to Z_{\tau\wedge t}$ because the family is dominated by $\sup_{s\le t}Z_s$, which is integrable: $s\mapsto Z_s$ is a nonnegative submartingale on $[0,t]$ (as a positive martingale composed with the convex function $x\mapsto|x|$) and $Z_t\in L^2$ by [F1], so Doob's $L^2$ maximal inequality gives $E\sup_{s\le t}Z_s\le2(EZ_t^2)^{1/2}<\infty$. [[thm-optional-sampling-for-bounded-stopping-times]] [[thm-dominated-convergence]] [[thm-doob-lp-maximal-inequality]] [[thm-doob-l1-maximal-inequality]] [[cor-absolute-value-and-powers-of-a-martingale-are-submartingales]] [[def-uniformly-integrable-family]] [[def-continuous-time-filtration-and-all-pairs-martingale]]
 
[F5] **Uniform integrability and $L^1$ limits.** If a sequence converges almost surely and is uniformly integrable, then it converges in $L^1$; equivalently, the expectations converge to the expectation of the limit whenever the limit is integrable and the family is uniformly integrable. [[thm-uniform-integrability-plus-probability-convergence-implies-l1-convergence]] [[def-uniformly-integrable-family]] [[def-convergence-in-probability]]
 
[F6] **AC bookkeeping.** Choice is declared for the conditional-expectation interface. [[def-axiom-of-choice]]
 
 
 
 

## Counterexample

**Proof technique:** direct.
 
1.1 Finite-time means: fix $t<\infty$; by [F4] the finite-grid expectations satisfy $EZ_{\tau_n}=1$ and $(Z_{\tau_n})_n$ is dominated by the integrable random variable $\sup_{s\le t}Z_s$, so dominated convergence in the a.s. convergence $Z_{\tau_n}\to Z_{\tau\wedge t}$ gives $EZ_{t\wedge\tau}=1$, the stopping-time property of $\tau$ being [F3]. [F2, F3, F4]
 
1.2 Limit of the stopped variables: since $\tau<\infty$ almost surely by [F2], for almost every $\omega$ and every $t>\tau(\omega)$ one has $Z_{t\wedge\tau}(\omega)=Z_\tau(\omega)=1/2$, so $Z_{t\wedge\tau}\to1/2$ almost surely as $t\to\infty$. [F2, given]
 
2.1 The contradiction: if the family $(Z_{t\wedge\tau})_{t\ge0}$ were uniformly integrable, then by [F5] the almost-sure convergence of step 1.2 would imply $L^1$ convergence, hence $\lim_tEZ_{t\wedge\tau}=E[1/2]=1/2$; but step 1.1 gives $EZ_{t\wedge\tau}=1$ for every finite $t$. Since $1\ne1/2$, the family is not uniformly integrable, and optional stopping at the unbounded time $\tau$ fails: $EZ_\tau=1/2\ne1=EZ_0$. [F4, F5, step 1.1, step 1.2]
 
3.1 Boundary and consistency cases: for bounded stopping times $\tau\wedge n$ the identity $EZ_{\tau\wedge n}=1$ does hold, so the failure is exactly the unboundedness of $\tau$; the stopping time is finite almost surely, so almost-sure finiteness alone is not enough; the martingale is positive and has $EZ_t=1$ for every finite $t$, so terminal integrability at finite times is not the missing hypothesis; the witness exhibits both the failed conclusion ($E Z_\tau=1$) and the failed hypothesis (uniform integrability of the stopped family); and AC enters only through [F6]. [F1, F4, F6, step 2.1] ∎

## Source notes

Lawler, Sections 3.3 and 4.1, discusses the role of uniform integrability in optional stopping for the exponential martingale. The counterexample above uses the explicit level set $\{Z=1/2\}$, the law of the iterated logarithm for finiteness of the hitting time, and Doob's $L^2$ maximal inequality to dominate the sampled family at finite times.
