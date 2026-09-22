---
id: cor-brownian-filtration-local-martingales-have-continuous-versions
kind: corollary
title: "Cadlag Brownian-filtration local martingales have continuous versions"
status: draft
origin: pipeline
deps: [thm-brownian-filtration-martingale-representation, def-natural-and-usual-augmented-brownian-filtrations, def-brownian-motion, def-continuous-time-adapted-process-and-martingale, def-continuous-time-stopping-time, thm-localized-ito-integral, thm-ito-integral-process-has-a-continuous-martingale-version, def-locally-square-integrable-predictable-brownian-integrand, def-law-modification-and-indistinguishability-of-processes, def-continuity-real, def-axiom-of-choice, lem-ac-supplies-sequential-choices-for-probability-constructions]
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
[[def-natural-and-usual-augmented-brownian-filtrations]]. Every local
martingale $M$ relative to $(\mathcal F_t)$ whose paths are right-continuous
with left limits on one event of probability one has a version with continuous
paths, and any two continuous versions of $M$ are indistinguishable.

## Facts & Assumptions

**Given:** AC, a standard Brownian motion $B$ with usual augmented filtration $(\mathcal F_t)$, and a local martingale $M$ with cadlag paths.
 
[F1] **Representation.** There is a predictable locally square-integrable $H$ with $M_t=M_0+\int_0^tH_s\,dB_s$ for all $t\ge0$ up to indistinguishability, and such an $H$ is unique modulo $(\mathrm dt\otimes P)$-null sets on each finite horizon. [[thm-brownian-filtration-martingale-representation]]
 
[F2] **Continuity of localized integrals.** For a predictable locally square-integrable $H$ the localized integral $t\mapsto\int_0^tH_s\,dB_s$ has continuous paths on a full-measure event and is unique up to indistinguishability among continuous processes with the same stopped finite-energy pieces. [[thm-localized-ito-integral]] [[thm-ito-integral-process-has-a-continuous-martingale-version]] [[def-locally-square-integrable-predictable-brownian-integrand]]
 
[F3] **Indistinguishability from rational agreement.** If two processes with continuous paths agree at every rational time on a single event of probability one, then they are indistinguishable: continuity extends the agreement to all times on that event. [[def-law-modification-and-indistinguishability-of-processes]] [[def-continuity-real]]
 
[F4] **AC bookkeeping.** Choice is declared for the conditional-expectation interface underlying the representation. [[def-axiom-of-choice]]
 
 
 
 

## Proof

**Proof technique:** direct.
 
1.1 By [F1] write $M=M_0+\int H\,dB$ up to indistinguishability with $H$ predictable and locally square-integrable; by [F2] the localized integral has continuous paths on a full-measure event, so the process $M^{\mathrm c}_t:=M_0+\int_0^tH_s\,dB_s$ is a continuous version of $M$. [F1, F2]
 
2.1 Uniqueness: if $M'$ and $M''$ are two continuous versions of $M$, then they agree with $M$ at every rational time almost surely, hence agree with each other at every rational time on the intersection of two full-measure events; by [F3] they are indistinguishable. [F3, step 1.1]
 
3.1 Boundary and consistency cases: for $M$ itself already continuous, the version is $M$ up to indistinguishability; for $M$ constant the integral representation has $H=0$; the corollary shows that a cadlag local martingale of this filtration cannot have a genuine jump, because the representation is continuous; the uniqueness statement is about continuous versions, and no claim is made that an arbitrary cadlag modification is continuous pathwise; and AC enters only through [F4]. [F1, F2, F4, step 2.1] ∎

## Source notes

Van der Vaart, Theorem 6.6, yields the continuity statement as an immediate consequence of the representation by a localized stochastic integral; the uniqueness argument is the standard rationals-and-continuity computation recorded in the definition of indistinguishability.
