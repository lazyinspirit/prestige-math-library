---
id: thm-birkhoff-limit-identification-on-finite-measure-spaces
kind: theorem
title: Finite-measure identification of the Birkhoff limit
status: draft
origin: pipeline
deps: [thm-birkhoff-ergodic-theorem, thm-maximal-ergodic-theorem, def-strict-and-mod-null-invariant-sigma-algebras, lem-mod-null-invariant-sets-have-strictly-invariant-representatives, thm-radon-nikodym-density-exists-and-is-unique-up-to-almost-everywhere-equality, thm-integrals-are-invariant-under-measure-preserving-maps, prop-indefinite-integral-of-an-integrable-function-is-countably-additive, prop-order-and-scalar-rules-for-the-nonnegative-integral, def-axiom-of-choice]
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
sources:
  references:
    - title: "Alessio Del Vigna, The Birkhoff Ergodic Theorem"
      url: "https://poisson.phc.dm.unipi.it/~delvigna/maths/birkhoff.pdf"
      locator: "Finite-measure integral-identification part of Theorem 5, pp. 4–5"
    - title: "Charles Walkden, Ergodic Theory lecture notes"
      url: "https://personalpages.manchester.ac.uk/staff/Charles.Walkden/ergodic-theory/ergodic_theory.pdf"
      locator: "§9.4, printed pp. 84–85; end of §10.5, printed pp. 96–97"
    - title: "Omri Sarig, Lecture Notes on Ergodic Theory (2023)"
      url: "https://www.weizmann.ac.il/math/sarigo/sites/math.sarigo/files/uploads/ergodicnotes.pdf"
      locator: "§2.3.1 and Theorem 2.3, printed pp. 40–41"
proof_strategy: direct
---

## Statement

Assume the Axiom of Choice.  Let $\mu(X)<\infty$, let $T$ preserve $\mu$,
let $f\in L^1(\mu)$, and let $f^*$ be its Birkhoff limit.  For the strict
invariant sigma-algebra

$$\mathcal I=\{E\in\mathcal A:T^{-1}E=E\},$$

one has

$$\int_E f^*\,d\mu=\int_Ef\,d\mu\qquad(E\in\mathcal I).$$

Moreover, $f^*$ has an $\mathcal I$-measurable integrable representative,
unique up to $\mu$-a.e. equality, with these identities.  For complex $f$ the
integrals and the representative are understood componentwise.

## Facts & Assumptions

**Given:** AC, a finite measure space, $T$, $f$, $f^*$, and $\mathcal I$ as in the Statement.

[F1] Birkhoff supplies an integrable a.e.-invariant limit ([[thm-birkhoff-ergodic-theorem]]), and the maximal theorem holds without invertibility ([[thm-maximal-ergodic-theorem]]).

[F2] Every modulo-null invariant measurable set has a strictly invariant representative ([[lem-mod-null-invariant-sets-have-strictly-invariant-representatives]]).

[F3] Indefinite integration of an integrable real or complex function is countably additive ([[prop-indefinite-integral-of-an-integrable-function-is-countably-additive]]).

[F4] Under AC, Radon–Nikodym gives the unique integrable density of a finite signed measure absolutely continuous with respect to a finite positive measure ([[thm-radon-nikodym-density-exists-and-is-unique-up-to-almost-everywhere-equality]], [[def-axiom-of-choice]]).

[F5] Nonnegative integration is monotone and positively homogeneous ([[prop-order-and-scalar-rules-for-the-nonnegative-integral]]).

## Proof

**Proof technique:** direct invariant-stratum argument followed by Radon–Nikodym.

1.1 First let $g$ be real and integrable, and choose its Birkhoff-limit representative $g^*$ to be the pointwise limit on the convergence set and zero elsewhere.  The shifted-average identity and its rearrangement show that the convergence set is strictly invariant and that $g^*$ is strictly invariant. [F1, algebra]

1.2 Suppose first that $f$ is real.  On $(X,\mathcal I)$ define $\nu(E)=\int_Ef\,d\mu$.  This is a finite signed measure by [F3], is absolutely continuous with respect to $\mu|_{\mathcal I}$, and has finite total variation.  By [F4] there is an integrable $\mathcal I$-measurable $h$ such that $\int_Eh=\int_Ef$ for every $E\in\mathcal I$.  This is the unique step spending AC. [F3, F4]

2.1 Fix a positive integer $m$ and, for $k\in\mathbb Z$, put $$D_{m,k}=\{k/m\leq g^*<(k+1)/m\}.$$ These form a measurable, strict-invariant partition of $X$.  For $\varepsilon>0$, every point of $D_{m,k}$ belongs to the positive-maximal set of $(g-(k/m-\varepsilon))\mathbf1_{D_{m,k}}$.  The maximal theorem and strict invariance therefore give $$\int_{D_{m,k}}g\,d\mu\geq(k/m-\varepsilon)\mu(D_{m,k}).$$ Since $\mu(D_{m,k})<\infty$, letting $\varepsilon\downarrow0$ gives the same inequality with $k/m$. [F1, F5, step 1.1]

3.1 On $D_{m,k}$ one has $g^*<(k+1)/m$, so step 2.1 gives $$\int_{D_{m,k}}g^*\,d\mu\leq\int_{D_{m,k}}g\,d\mu+\frac1m\mu(D_{m,k}).$$ Countable additivity over the partition is legitimate because $g$ and $g^*$ are integrable. Summing yields $$\int_Xg^*\,d\mu\leq\int_Xg\,d\mu+\frac{\mu(X)}m.$$ Letting $m\to\infty$ and then applying the same inequality to $-g$, whose limit is $-g^*$, proves $\int g^*=\int g$. [F1, F3, F5, step 2.1]

4.1 Let $E\in\mathcal I$ and take $g=f\mathbf1_E$.  Strict invariance gives $A_ng=(A_nf)\mathbf1_E$ pointwise, so the Birkhoff limit of $g$ is $f^*\mathbf1_E$ a.e.  In the real case, step 3.1 therefore gives $$\int_Ef^*\,d\mu=\int_Ef\,d\mu.$$ [F1, step 3.1]

5.1 Since $h$ is $\mathcal I$-measurable, every rational sublevel set of $h$ is strictly invariant; rational separation therefore gives $h\circ T=h$ pointwise.  Thus, because $f^*$ is invariant almost everywhere, $B_r=\{f^*-h>r\}$ is invariant modulo null sets for every rational $r>0$.  Let $E_r\in\mathcal I$ be its strict representative from [F2].  Steps 4.1 and 1.2 give $\int_{E_r}(f^*-h)=0$, while $f^*-h>r$ a.e. on $E_r$.  Monotonicity implies $0\geq r\mu(E_r)$, so $E_r$ is null.  Applying the same argument to $h-f^*$ and taking the countable union over positive rational $r$ proves $f^*=h$ a.e. [F2, F5, step 4.1, step 1.2]

6.1 For complex $f$, apply steps 1.2–5.1 to its real and imaginary parts and set $h=h_1+ih_2$.  This $h$ is integrable and $\mathcal I$-measurable, equals $f^*$ a.e., and has all asserted event-integral identities.  Uniqueness follows componentwise from Radon–Nikodym uniqueness.  If $\mu(X)=0$, the same proof gives the zero density and all assertions are vacuous off a null set. [F4, step 4.1, step 5.1] ∎
