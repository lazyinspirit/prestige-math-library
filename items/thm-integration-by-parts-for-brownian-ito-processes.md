---
id: thm-integration-by-parts-for-brownian-ito-processes
kind: theorem
title: "Integration by parts for Brownian Ito processes"
status: draft
origin: pipeline
deps: [def-continuous-brownian-ito-process, def-quadratic-covariation-of-brownian-ito-processes, thm-quadratic-covariation-of-brownian-ito-processes, thm-ito-formula-one-dimensional, def-locally-square-integrable-predictable-brownian-integrand, def-progressively-measurable-and-predictable-process, lem-adapted-continuous-processes-are-progressively-measurable, def-elementary-predictable-brownian-integrand, thm-localized-ito-integral, thm-stopping-an-ito-integral, thm-ito-integral-process-has-a-continuous-martingale-version, thm-ito-isometry-and-linearity-in-predictable-l2, def-continuous-time-adapted-process-and-martingale, thm-heine-cantor-r, def-law-modification-and-indistinguishability-of-processes, def-axiom-of-choice, lem-ac-supplies-sequential-choices-for-probability-constructions]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Aad van der Vaart, Martingales, Diffusions and Financial Mathematics (preliminary notes), equation (5.63)"
      url: "https://diamhomes.ewi.tudelft.nl/~avandervaart/books/stochint.pdf"
    - title: "Andreas Eberle, Introduction to Stochastic Analysis, Corollary 6.17"
      url: "https://wt.iam.uni-bonn.de/fileadmin/WT/Inhalt/people/Andreas_Eberle/IntroStoAn1516/IntroStochAnalysis2015.pdf"
---

## Statement

Assume the Axiom of Choice and the standing hypothesis (H) of
[[def-elementary-predictable-brownian-integrand]]. Let
$X=X_0+\int_0^{\cdot}b^X_s\,ds+\int_0^{\cdot}\xi_s\,dB_s$ and
$Y=Y_0+\int_0^{\cdot}b^Y_s\,ds+\int_0^{\cdot}\eta_s\,dB_s$ be real continuous
Brownian Ito processes over the same Brownian motion $B$ and filtration
[[def-continuous-brownian-ito-process]], including its usual-filtration conditions. For the displayed integrands use simultaneous everywhere-continuous representatives of $X,Y$: intersect their measurable full events of continuity and decomposition with the coefficient-integrability events at integer horizons, and set the processes, initial values and coefficients to zero on the complement. This complement is an $\mathcal F_0$-null event. All conclusions concern the original processes up to indistinguishability and do not depend on this choice. Define the **differential integrals**
$$\int_0^tX_s\,dY_s:=\int_0^tX_sb^Y_s\,ds+\int_0^tX_s\eta_s\,dB_s, \qquad \int_0^tY_s\,dX_s:=\int_0^tY_sb^X_s\,ds+\int_0^tY_s\xi_s\,dB_s,$$
where the stochastic terms are the localized Ito integrals of the predictable
locally square-integrable integrands $X\eta$ and $Y\xi$
[[thm-localized-ito-integral]] and the Lebesgue terms are pathwise integrals.
Then, up to indistinguishability, for every $t\ge0$
$$X_tY_t=X_0Y_0+\int_0^tX_s\,dY_s+\int_0^tY_s\,dX_s+[X,Y]_t,$$
with $[X,Y]$ the quadratic covariation of
[[thm-quadratic-covariation-of-brownian-ito-processes]]. In particular, when
$b^X=b^Y=0$, the centered process
$X_tY_t-[X,Y]_t-X_0Y_0$ is a continuous local martingale. If additionally
$E|X_0Y_0|<\infty$, then $X_tY_t-[X,Y]_t$ is itself a continuous local martingale.
In this zero-drift case, if in addition $X\eta$ and $Y\xi$ have finite energy on $[0,t]$, $X_0Y_0$
is integrable, and $E\int_0^t|\xi_s\eta_s|ds<\infty$, then
$E[X_tY_t]=E[X_0Y_0]+E[X,Y]_t$.

## Facts & Assumptions

**Given:** AC, (H), and two real continuous Brownian Ito processes $X,Y$ over the same Brownian motion with the decompositions in the statement and the usual-filtration conditions of their class.

[F1] **Class and versions.** The class has progressive representatives and continuous paths on measurable full events; drift absolute integrals and diffusion energies are finite almost surely at every finite horizon. The usual conditions put all ambient null events in $\mathcal F_0$. Linear combinations remain in the class with the combined coefficients. Everywhere-continuous adapted processes are predictable and progressive; products of predictable processes are predictable. [[def-continuous-brownian-ito-process]] [[lem-adapted-continuous-processes-are-progressively-measurable]] [[def-progressively-measurable-and-predictable-process]] [[def-locally-square-integrable-predictable-brownian-integrand]]

[F2] **Integral interfaces.** Predictable integrands with almost-sure locally finite energy have continuous localized Ito integrals. Their finite-energy stopped pieces have the isometry and real linearity, and are mean-zero square-integrable martingales. Common energy stopping times give linearity of finite sums of localized integrals and make their sums local martingales. Adding an $\mathcal F_0$-measurable constant preserves the local-martingale property when that constant is integrable. [[thm-localized-ito-integral]] [[thm-stopping-an-ito-integral]] [[thm-ito-integral-process-has-a-continuous-martingale-version]] [[thm-ito-isometry-and-linearity-in-predictable-l2]] [[def-continuous-brownian-ito-process]] [[def-continuous-time-adapted-process-and-martingale]]

[F3] **Scalar Ito formula and compact continuity.** The one-dimensional Ito formula applies to every class process and every global $C^{1,2}$ function, with normalized representatives on a common full event. A continuous real path is bounded on every compact time interval. [[thm-ito-formula-one-dimensional]] [[thm-heine-cantor-r]]

[F4] **Covariation.** For two class processes over the same scalar Brownian motion, $[X,Y]_t=\int_0^t\xi_s\eta_s\,ds$ up to indistinguishability. Drifts contribute no covariation. [[thm-quadratic-covariation-of-brownian-ito-processes]] [[def-quadratic-covariation-of-brownian-ito-processes]]

[F5] **Versions and choice.** Indistinguishability is agreement at all times on one measurable full event. Full AC covers all inherited conditional-expectation, completeness, integral-construction and countable-choice interfaces. [[def-law-modification-and-indistinguishability-of-processes]] [[def-axiom-of-choice]] [[lem-ac-supplies-sequential-choices-for-probability-constructions]]

## Proof

**Proof technique:** direct.

1.1 Normalize simultaneously as specified in the statement. The complement of the intersection of the two continuity/decomposition events and the countably many coefficient-integrability events belongs to $\mathcal F_0$ by [F1]. Multiplying all processes, initial values and coefficients by its full-event indicator preserves adaptation, progressive or predictable measurability as appropriate, all coefficient classes and the decompositions up to indistinguishability. The normalized $X,Y$ are continuous everywhere and therefore predictable. Any two such normalizations agree on a common full event, so their drift integrands agree pathwise there and their stochastic integrands agree in product measure on every finite horizon; the localized integral uniqueness preserves the resulting identities. [F1, F2, F5]

2.1 The differential integrals are well defined. Fix a finite $T$ and put $C_X=\sup_{s\le T}|X_s|<\infty$, $C_Y=\sup_{s\le T}|Y_s|<\infty$ pathwise. Then $\int_0^T|X_sb^Y_s|ds\le C_X\int_0^T|b^Y_s|ds<\infty$ and $\int_0^T(X_s\eta_s)^2ds\le C_X^2\int_0^T\eta_s^2ds<\infty$; the corresponding two bounds with $X,Y$ exchanged also hold. The products in the drift are progressive, and those in the stochastic terms are predictable. Moreover $2|\xi\eta|\le\xi^2+\eta^2$ makes the covariance integral locally finite and continuous. For $U=X+Y$, the combined drift is locally absolutely integrable and its diffusion satisfies $(\xi+\eta)^2\le2\xi^2+2\eta^2$; thus $U$ is a class process with coefficients $b^X+b^Y,\xi+\eta$. The same bounds ensure the integrability of all products used below, including $X\xi,Y\eta$ and $U(\xi+\eta)$. [F1, F2, F3, step 1.1]

3.1 Apply [F3] with $f(t,z)=z^2$, whose time derivative is zero, first space derivative is $2z$ and second space derivative is $2$, separately to $X,Y,U$. Each application is licensed by step 2.1 and gives, on one common full event for all $t$, $$X_t^2-X_0^2=2\int_0^tX_sb^X_sds+2\int_0^tX_s\xi_s dB_s+\int_0^t\xi_s^2ds,$$ $$Y_t^2-Y_0^2=2\int_0^tY_sb^Y_sds+2\int_0^tY_s\eta_s dB_s+\int_0^t\eta_s^2ds,$$ $$U_t^2-U_0^2=2\int_0^tU_s(b^X_s+b^Y_s)ds+2\int_0^tU_s(\xi_s+\eta_s)dB_s+\int_0^t(\xi_s+\eta_s)^2ds.$$ [F3, F5, step 2.1]

4.1 Subtract the first two identities from the third and divide by two. The left side is $X_tY_t-X_0Y_0$. The drift coefficient is $Xb^Y+Yb^X$, the stochastic coefficient is $X\eta+Y\xi$, and the last coefficient is $\xi\eta$. Pathwise Lebesgue linearity applies by the absolute-integrability bounds in step 2.1. To justify stochastic subtraction and separation, stop at the common energy levels of the finitely many product integrands in step 2.1, also capped by the integer level in time. Each stopped integral has finite energy, so finite-energy linearity holds there. The stopping identity and countable exhaustion give the same linearity up to indistinguishability for the original localized integrals. Consequently $$X_tY_t-X_0Y_0=\int_0^t(X_sb^Y_s+Y_sb^X_s)ds+\int_0^tX_s\eta_s dB_s+\int_0^tY_s\xi_s dB_s+\int_0^t\xi_s\eta_sds$$ on a common full event for all $t$. [F2, step 2.1, step 3.1]

5.1 By [F4] the last integral in step 4.1 equals $[X,Y]$ up to indistinguishability, and step 2.1 identifies the first three terms as the two differential integrals in the statement. Intersect the finitely many full events. This proves the stated identity for the normalized versions at all times, and step 1.1 transfers it to the original processes. [F4, F5, step 1.1, step 2.1, step 4.1]

6.1 Suppose now that $b^X=b^Y=0$. By step 5.1 the centered process $XY-[X,Y]-X_0Y_0$ is the sum of two localized Ito integrals. Common energy localization of $X\eta,Y\xi$ makes this a continuous local martingale by [F2]. If $X_0Y_0$ is integrable, the $\mathcal F_0$-measurable constant process with that value is a martingale, so [F2] also makes $XY-[X,Y]$ a local martingale. Under the additional expectation hypotheses at a fixed $t$, the two stochastic integrals are individually square-integrable and mean zero, and $E|[X,Y]_t|\le E\int_0^t|\xi_s\eta_s|ds<\infty$. Together with integrability of $X_0Y_0$, the product identity proves integrability of $X_tY_t$ itself. Taking expectations yields exactly the stated formula. For nonzero drifts the drift integrals remain and no local-martingale corollary is asserted. [F2, F4, step 5.1]

7.1 At $t=0$ every integral is zero. A constant factor has zero diffusion and gives its constant-multiple product identity. If either diffusion vanishes, the covariation vanishes while any remaining drift and stochastic terms stay in the displayed formula; if both vanish this is the ordinary finite-variation product rule. For $X=Y$ the identity becomes $X_t^2=X_0^2+2\int_0^tX_s\,dX_s+[X]_t$, already obtained in step 3.1. No boundedness of the original initial values or of the diffusion coefficients was assumed. All energy bounds are local pathwise bounds converted to expected bounds only by stopping, and full AC is inherited as in [F5]. These cases are consistent with the zero-drift restriction in step 6.1. [F5, step 3.1, step 6.1] ∎

## Source notes

Van der Vaart, equation (5.63), records the integration-by-parts identity. The proof here instead polarizes the square case of the already established one-dimensional Ito formula: subtract the identities for $X^2,Y^2$ from that for $(X+Y)^2$. It uses only Brownian Ito processes, their stated representative convention, finite-energy linearity and the covariation formula; no general semimartingale integration or weighted-staircase convergence theorem is invoked.
