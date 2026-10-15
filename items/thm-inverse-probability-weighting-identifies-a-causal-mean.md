---
id: thm-inverse-probability-weighting-identifies-a-causal-mean
kind: theorem
title: "Inverse probability weighting identifies a causal mean"
status: draft
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 2
deps:
  - alg-inverse-probability-weighting-for-a-causal-mean
  - lem-conditional-treatment-indicator-factorization
  - def-potential-outcomes-and-consistency
  - def-conditional-exchangeability-of-potential-outcomes
  - def-identifiability-of-an-estimand
  - lem-conditional-independence-equivalences-and-preservation
  - def-conditional-expectation-as-an-ae-class
  - cor-expectation-of-an-indicator-is-probability
  - thm-taking-out-what-is-known
  - thm-monotone-convergence-for-the-integral
  - thm-dominated-convergence
  - thm-tower-property-of-conditional-expectation
  - def-estimand-on-a-statistical-model
  - thm-identifiability-iff-constant-on-equivalence-classes
  - def-axiom-of-choice
  - thm-change-of-variables-for-expectation
  - lem-conditional-expectation-is-unique-almost-surely
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "Hernán and Robins, Causal Inference: What If, updated 2026 author-hosted edition, Chapter 2, Technical Points 2.2–2.3 and Chapter 3"
      url: "https://miguelhernan.org/s/hernanrobins_WhatIf_19aug26.pdf"
    - title: "The Mathematics of Indirect Treatment Comparisons, Chapters 9–10, inverse-probability weighting proof"
      url: "https://choxos.github.io/Mathematics-of-ITC/chapters/part2/10-adjustment-methods.html"
---

## Statement

Assume AC for the conditional-expectation existence convention. Let $P$ be a full-data law with a discrete or atomic treatment $A$, covariate random element $L$, observed outcome $Y$, and potential outcomes $(Y^b)_{b\in\mathcal A}$ with the countably discrete convention given by [[def-potential-outcomes-and-consistency]]. Fix an atom $a$ with $P(A=a)>0$ and $Y^a\in L^1(P)$. Assume consistency $Y=Y^A$, conditional exchangeability $(Y^b)_{b\in\mathcal A}\perp\!\!\!\perp A\mid\sigma(L)$, and positivity $e_a(L):=P(A=a\mid\sigma(L))>0$ almost surely. For $I_a=\mathbf1_{\{A=a\}}$ and the observed law $Q$ of $(A,L,Y)$, the inverse-probability-weighted functional of [[alg-inverse-probability-weighting-for-a-causal-mean]] is well-defined and satisfies
$$E_Q\!\left[\frac{I_aY}{e_a(L)}\right]=E_P[Y^a].$$
Consequently, it identifies the population mean of $Y^a$ in the sense of [[def-identifiability-of-an-estimand]]. No uniform lower bound on $e_a$ is assumed. This is a population identity for the true propensity, not a finite-sample stability or estimated-weight result.

For countably discrete treatments, the supplied potential outcomes and global
consistency use [[def-potential-outcomes-and-consistency]]; conditional
exchangeability is the full-family sigma-algebra condition of
[[def-conditional-exchangeability-of-potential-outcomes]]. More generally,
for a treatment in any measurable space with measurable singleton $\{a\}$,
the same conclusion holds whenever the supplied integrable $Y^a$ is
conditionally independent of $A$ given $\sigma(L)$ and
$\mathbf1_{\{A=a\}}Y=\mathbf1_{\{A=a\}}Y^a$ almost surely, with the same
positive propensity. This atom-consistency formulation does not require
a global measurable selection $Y^A$ outside the target atom.

## Facts & Assumptions

**Given:** AC, a probability space under $P$, a fixed treatment atom $a$, $Y^a\in L^1(P)$, consistency $Y=Y^A$, conditional exchangeability $(Y^b)_{b\in\mathcal A}\perp\!\!\!\perp A\mid\sigma(L)$, and $e_a(L)>0$ almost surely.

[A1] The point-treatment setup uses potential outcomes and consistency as in [[def-potential-outcomes-and-consistency]]. For the full-family formulation, assume $Y=Y^A$, integrability of $Y^a$, and conditional independence of the potential-outcome family from $A$ given $\sigma(L)$. For the general fixed-atom formulation, assume the atom-consistency and coordinate independence specified in the Statement; those are exactly the two consequences used below.

[A2] The target is the causal mean relative to the causal model and observed law described by [[def-identifiability-of-an-estimand]].

[F1] The IPW functional is $E_Q[I_aY/e_a(L)]$, where $e_a=E_Q[I_a\mid\sigma(L)]$ and the weighted variable is required to be integrable. ([[alg-inverse-probability-weighting-for-a-causal-mean]])

[F2] For integrable $Z\perp\!\!\!\perp A\mid\mathcal G$, $E[\mathbf1_{\{A\in C\}}Z\mid\mathcal G]=E[\mathbf1_{\{A\in C\}}\mid\mathcal G]E[Z\mid\mathcal G]$. ([[lem-conditional-treatment-indicator-factorization]])

[F3] A bounded $\mathcal G$-measurable factor can be taken outside conditional expectation. ([[thm-taking-out-what-is-known]])

[F4] Integrals of a nondecreasing sequence of nonnegative measurable functions converge to the integral of their pointwise limit. ([[thm-monotone-convergence-for-the-integral]])

[F5] Dominated convergence gives $L^1$ convergence under an integrable majorant and convergence of the corresponding integrals. ([[thm-dominated-convergence]])

[F6] Conditional expectation preserves the expectation when conditioning down to the trivial sigma-algebra. ([[thm-tower-property-of-conditional-expectation]])

[F7] An estimand is a specified function on a statistical model. ([[def-estimand-on-a-statistical-model]])

[F8] Equal observed sampling laws must give equal values of an identifiable estimand. ([[def-identifiability-of-an-estimand]])

[F9] Identifiability is equivalent to a unique factorization through the statistical model map. ([[thm-identifiability-iff-constant-on-equivalence-classes]])

[F10] Conditional expectations are almost-sure classes of integrable measurable versions under AC. ([[def-conditional-expectation-as-an-ae-class]])

[F11] The expectation of an event indicator is its probability: $E[\mathbf1_B]=P(B)$. ([[cor-expectation-of-an-indicator-is-probability]])

[F12] Conditional independence is preserved by measurable maps of either variable. Thus full-family exchangeability implies independence of $Y^a$ and $A$ given $\mathcal G$, and independence of $Y^a$ implies that of $|Y^a|$. ([[lem-conditional-independence-equivalences-and-preservation]])

[F13] For a measurable function of a random element, expectation equals its integral against that element's law; integrability of the composite implies integrability under the law. ([[thm-change-of-variables-for-expectation]])

[F14] Conditional-expectation versions of the same integrable variable agree almost surely. ([[lem-conditional-expectation-is-unique-almost-surely]])

## Proof

1.1 Put $\mathcal G=\sigma(L)$, $I_a=\mathbf1_{\{A=a\}}$, $e_a=E_P[I_a\mid\mathcal G]$, $\mu_a=E_P[Y^a\mid\mathcal G]$, and $H_n=\min(n,1/e_a)$ on $\{e_a>0\}$, setting $H_n=0$ on the null complement. Let $\lambda=P_L=Q_L$ be the common covariate law. Since $\mathcal G=\sigma(L)=\{L^{-1}(B):B\in\mathcal S\}$, each real $\mathcal G$-measurable version $V$ factors as $v(L)$: for each rational $r$ choose $B_r\in\mathcal S$ with $\{V<r\}=L^{-1}(B_r)$, and put $v(x)=\inf\{r\in\mathbb Q:x\in B_r\}$, replacing nonfinite values by $0$. Its rational sublevel sets make $v$ measurable, and $v(L)=V$. Apply this to versions of the $P$- and $Q$-conditional propensities to obtain functions $\bar e_a$ and $\widetilde e_a$. By [F13] both are integrable under $\lambda$. For every measurable set $B$ in that space, $$\int_B\widetilde e_a\,d\lambda=Q(A=a,L\in B)=E_P[I_a\mathbf1_{\{L\in B\}}]=\int_B\bar e_a\,d\lambda.$$ The difference is integrable and has zero integral over every $B$, so it and zero are conditional-expectation versions of zero given the full sigma-algebra on $(\mathcal L,\mathcal S,\lambda)$. Uniqueness [F14] gives $\widetilde e_a=\bar e_a$ $\lambda$-almost everywhere. Thus the propensity used by [F1] agrees with the full-data propensity. By [F6] and [F11], $P(A=a)=E_P[I_a]=E_P[e_a]$. Then $H_n$ is bounded and $\mathcal G$-measurable, $H_n\uparrow1/e_a$ almost surely, and $I_aY=I_aY^a$ almost surely by global consistency or the stated atom-consistency. The conditional expectations exist by AC. [given, A1, F1, F6, F10, F11, F13, F14]

2.1 Full-family exchangeability, or the stated coordinate independence directly, gives $Y^a\perp\!\!\!\perp A\mid\mathcal G$. By [F12], this also holds for $|Y^a|$, so [F2] gives $E[I_a|Y^a|\mid\mathcal G]=e_aE[|Y^a|\mid\mathcal G]$. For each $n$, taking out the bounded factor $H_n$ yields $E[I_a|Y^a|H_n]=E[e_aH_nE[|Y^a|\mid\mathcal G]]$. Monotone convergence [F4] on the left and dominated convergence [F5] on the right, since $0\le e_aH_n\uparrow1$ and $E[|Y^a|\mid\mathcal G]\in L^1$, give $E[I_a|Y^a|/e_a]=E|Y^a|<\infty$. Thus the observed weighted outcome is integrable. [A1, F2, F3, F4, F5, F12, step 1.1]

3.1 By [F3], [F2] also gives $E[I_aY^a\mid\mathcal G]=e_a\mu_a$. For each $n$, $E[I_aY^aH_n]=E[e_aH_n\mu_a]$. The left sides converge to $E[I_aY^a/e_a]$ by [F5] with integrable majorant $I_a|Y^a|/e_a$ from step 2.1; the right sides converge to $E[\mu_a]$ by [F5] with majorant $|\mu_a|$. Hence $E[I_aY^a/e_a]=E[\mu_a]$. [F2, F3, F5, step 2.1]

4.1 By step 1.1 choose the common covariate-law representative $\bar e_a$ and set the observed-coordinate ratio to zero on its $\lambda$-null nonpositive set. The change-of-variables identity [F13], first for the absolute value and then for the integrable signed function, shows that the Q-integrand in [F1] and its P observed-coordinate version have the same integral. Their common absolute integral is $E_P[I_a|Y^a|/e_a]$, finite by step 2.1 and $I_aY=I_aY^a$ almost surely, so [F1] is well-defined. The same identity, atom-consistency, step 3.1, and the tower property [F6] give $E_Q[I_aY/e_a(L)]=E_P[I_aY^a/e_a]=E_P[Y^a]$. [A1, F1, F6, F13, step 1.1, step 2.1, step 3.1]

5.1 Let $\Theta_a$ be the class of full-data laws on the fixed measurable spaces for the variables in the applicable formulation of the Statement that satisfy its integrability, consistency, conditional-exchangeability (or atom-specific independence), and positivity assumptions. Define $\psi_a(P)=E_P[Y^a]$ and the observation map $\mathsf O(P)=\mathcal L_P(A,L,Y)=Q$, the pushforward of $P$ under $(A,L,Y)$. Step 4.1 proves for every $P\in\Theta_a$ that $\psi_a(P)=\Psi_{\mathrm{IPW}}(\mathsf O(P);a)$. This factor is a function of the observed law alone, with its conditional propensity class determined by that law as in step 1.1; [F7]–[F9] therefore give identifiability on this model. [A2, F1, F7, F8, F9, step 1.1, step 4.1, construct] ∎

## Remarks

Strict positivity is required at each target covariate stratum but need not be bounded away from zero. Near-positivity can make the integrand very variable, as the examples page shows. No finite-sample stability, estimated-propensity consistency, or validity after weight truncation follows from this identity. Continuous-treatment density weights are outside this theorem's scope.
