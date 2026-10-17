---
id: cex-understated-thinning-envelope-is-invalid
kind: counterexample
title: "Clipping an understated thinning envelope changes the waiting-time law"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 4
deps:
  - alg-dominating-thinning-for-time-varying-reaction-rates
  - def-reaction-network-propensity-system-and-generator
  - thm-finite-state-gillespie-and-next-reaction-exactness
  - thm-dominating-thinning-exactly-simulates-reaction-rates
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  precheck: pass
sources:
  references:
    - title: "David F. Anderson and Thomas G. Kurtz, Continuous Time Markov Chain Models for Chemical Reaction Networks"
      url: "https://people.math.wisc.edu/~dfanderson/papers/SURVEY_AndKurtz.pdf"
      locator: "§2.4, PDF pp.10–12: valid dominating-rate thinning. The understated constant-envelope counterexample is calculated locally, illustrating failure of that required domination hypothesis."
---

## Statement

Consider the one-state system $E=\{0\}$ with one zero-increment channel $\nu=0$ and constant propensity $a(t,0)=2$. Its first marked reaction time has survival $e^{-2t}$. If an implementation incorrectly uses the understated envelope $\Lambda=1$ and clips the acceptance probability $a/\Lambda=2$ to $1$, it accepts every rate-one candidate, so its first marked reaction time has survival $e^{-t}$. These laws differ for every $t>0$. The specified algorithm requires a valid envelope and does not clip: a detected violation returns `invalid-envelope`, and the exact-thinning theorem asserts no law under a failed envelope.

## Facts & Assumptions

**Given:** The one-state time-dependent propensity system above and the candidate-thinning algorithm.

[F1] A zero increment is an allowed marked reaction that leaves the state unchanged, while its propensity still contributes to the total event rate. ([[def-reaction-network-propensity-system-and-generator]])

[F2] The thinning algorithm requires a supplied envelope certificate, reports a detected violation as `invalid-envelope`, and does not clip propensities. ([[alg-dominating-thinning-for-time-varying-reaction-rates]])

[F3] Exact thinning conclusions require the certified envelope; if it fails, the theorem asserts no path law. ([[thm-dominating-thinning-exactly-simulates-reaction-rates]])

[F4] For a finite-state reaction system, the Gillespie direct method uses an exponential holding time with parameter equal to the total propensity. ([[thm-finite-state-gillespie-and-next-reaction-exactness]])

## Proof

**Proof technique:** direct.

1.1 The target system has constant total rate $2$; [F4] therefore gives its first marked-event survival $e^{-2t}$. This is an event even though $\nu=0$, by [F1]. [F1, F4, given, algebra]

2.1 A rate-one candidate process has no candidate by time $t$ with probability $e^{-t}$. The clipped rule accepts every candidate, hence its first accepted-event survival is $e^{-t}$; for $t>0$, $e^{-t}\ne e^{-2t}$. Thus clipping changes the event law. [F2, step 1.1, algebra]

3.1 Here $a=2>\Lambda=1$, so the required certificate is false. The specified procedure therefore lies outside the theorem's hypothesis and, whenever the violation is evaluated at a candidate, returns `invalid-envelope`; [F2] expressly forbids continuing by clipping. [F2, F3, step 2.1, given] ∎