---
id: cor-square-integrable-brownian-terminal-variables-have-ito-representations
kind: corollary
title: "Square-integrable Brownian terminal variables have Ito representations"
status: draft
origin: pipeline
deps: [thm-brownian-filtration-martingale-representation, def-natural-and-usual-augmented-brownian-filtrations, def-brownian-motion, thm-ito-isometry-and-linearity-in-predictable-l2, def-locally-square-integrable-predictable-brownian-integrand, def-ito-integral-for-square-integrable-predictable-processes, thm-localized-ito-integral, thm-ito-integral-process-has-a-continuous-martingale-version, def-conditional-expectation-as-an-ae-class, thm-tower-property-of-conditional-expectation, def-continuous-time-adapted-process-and-martingale, def-law-modification-and-indistinguishability-of-processes, def-axiom-of-choice, lem-ac-supplies-sequential-choices-for-probability-constructions]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Aad van der Vaart, Martingales, Diffusions and Financial Mathematics (preliminary notes), Theorem 6.6"
      url: "https://diamhomes.ewi.tudelft.nl/~avandervaart/books/stochint.pdf"
---

## Statement

Assume the Axiom of Choice. Let $B$ be a standard Brownian motion with usual
augmented natural filtration $(\mathcal F_t)$
[[def-natural-and-usual-augmented-brownian-filtrations]], fix $T>0$, and let
$X\in L^2(\mathcal F_T)$. Then there is a predictable process $H$ on $[0,T]$
with $E\int_0^TH_s^2\,ds<\infty$ such that
$$X=EX+\int_0^TH_s\,dB_s\qquad\text{almost surely},$$
and $H$ is unique up to $(\mathrm dt\otimes P)$-null sets. Moreover the
conditional-expectation martingale $t\mapsto E[X\mid\mathcal F_t]$ agrees, up
to indistinguishability on $[0,T]$, with the continuous process
$EX+\int_0^tH_s\,dB_s$.

## Facts & Assumptions

**Given:** AC, a standard Brownian motion $B$ with usual augmented filtration $(\mathcal F_t)$, a horizon $T>0$, and $X\in L^2(\mathcal F_T)$.
 
[F1] **Representation theorem, $L^2$ clause.** For every $Z\in L^2(\mathcal F_T)$ there is a predictable $H$ with finite energy on $[0,T]$ such that $Z=EZ+\int_0^TH\,dB$ almost surely; the conditional-expectation martingale $E[Z\mid\mathcal F_t]$ agrees up to indistinguishability with $EZ+\int_0^tH\,dB$, and $H$ is unique modulo $(\mathrm dt\otimes P)$-null sets. [[thm-brownian-filtration-martingale-representation]]
 
[F2] **Isometry and martingale property.** For finite-energy predictable $H$ the integral $\int_0^TH\,dB$ has mean zero and $L^2$ norm squared $E\int_0^TH^2ds$, and the process $t\mapsto\int_0^tH\,dB$ has a continuous version that is a martingale; if two finite-energy integrands have integrals with the same terminal value almost surely, their difference has zero $L^2(\mathrm dt\otimes P)$ norm. [[thm-ito-isometry-and-linearity-in-predictable-l2]] [[thm-ito-integral-process-has-a-continuous-martingale-version]] [[def-ito-integral-for-square-integrable-predictable-processes]] [[def-locally-square-integrable-predictable-brownian-integrand]]
 
[F3] **Conditional expectation.** $E[X\mid\mathcal F_t]$ is the unique a.s. class with $\int_AE[X\mid\mathcal F_t]dP=\int_AXdP$ for all $A\in\mathcal F_t$, and the tower property identifies $E[X\mid\mathcal F_T]=X$ as an a.s. class. [[def-conditional-expectation-as-an-ae-class]] [[thm-tower-property-of-conditional-expectation]] [[def-continuous-time-adapted-process-and-martingale]]
 
[F4] **AC bookkeeping.** Choice is declared for the conditional-expectation and completeness interfaces. [[def-axiom-of-choice]]
 
 
 
 

## Proof

**Proof technique:** direct.
 
1.1 Existence: [F1] applied to the given $X\in L^2(\mathcal F_T)$ supplies a predictable finite-energy $H$ with $X=EX+\int_0^TH\,dB$ almost surely, and the same clause identifies the conditional-expectation martingale with the continuous integral process up to indistinguishability. [F1]
 
2.1 Uniqueness: if $H$ and $K$ both represent $X-EX$, then $\int_0^T(H-K)dB=0$ almost surely, so by the isometry of [F2] $E\int_0^T(H-K)^2ds=0$, which is exactly $H=K$ $(\mathrm dt\otimes P)$-almost everywhere. [F2, step 1.1]
 
3.1 Endpoint and degenerate cases: for $X$ constant, $H=0$ and the representation reads $X=EX$; for $X=E[X\mid\mathcal F_T]$ the tower property [F3] supplies the conditional-expectation interpretation used in the last sentence of the statement; the uniqueness is modulo $(\mathrm dt\otimes P)$-null sets, so two integrands differing on a $dt$-null set of times or on a $P$-null set of paths are the same element of $L^2(\mathrm dt\otimes P)$; and AC enters only through [F4]. [F2, F3, F4, step 2.1] ∎

## Source notes

Van der Vaart, Theorem 6.6, obtains this $L^2$ terminal form as the first stage of the martingale representation theorem; here the corollary is read off directly from that clause, with uniqueness supplied by the Ito isometry.
