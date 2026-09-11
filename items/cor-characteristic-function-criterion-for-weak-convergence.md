---
id: "cor-characteristic-function-criterion-for-weak-convergence"
kind: "corollary"
title: "Characteristic function criterion for weak convergence"
deps: ["thm-levy-continuity-theorem-forward-direction", "thm-levy-continuity-theorem-converse", "lem-basic-properties-of-characteristic-functions", "def-axiom-of-choice"]
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  references:
    - title: "Durrett, Probability: Theory and Examples, fifth edition"
      url: https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf
    - title: "Norris, Probability and Measure"
      url: https://www.statslab.cam.ac.uk/~james/Lectures/pmall.pdf
status: "draft"
origin: "pipeline"
proof_strategy: "direct"
---

## Statement

Assume AC. For Borel probability laws $\mu_n$ and a specified Borel probability law $\mu$ on $\mathbb R$,
$$\mu_n\Rightarrow\mu\quad\Longleftrightarrow\quad\varphi_{\mu_n}(t)\to\varphi_\mu(t)\ \text{for every }t\in\mathbb R.$$

## Facts & Assumptions

**Given:** The hypotheses and conventions in the statement.

[F1] Weak convergence implies pointwise characteristic-function convergence. [[thm-levy-continuity-theorem-forward-direction]].

[F2] A pointwise limit continuous at zero is the characteristic function of a unique law, to which the sequence converges. [[thm-levy-continuity-theorem-converse]].

[F3] Every characteristic function is continuous at zero. [[lem-basic-properties-of-characteristic-functions]].

[F4] AC covers the choice uses inherited by the converse theorem. [[def-axiom-of-choice]].

## Proof

**Proof technique:** direct.

1.1 If $\mu_n\Rightarrow\mu$, the forward continuity theorem gives the right-hand side at every frequency, including zero, where all values are one. [F1]

2.1 Conversely suppose the right-hand side. The specified target $\mu$ has a characteristic function continuous at zero. Apply the converse theorem with $\psi=\varphi_\mu$: it gives a unique law $\nu$ with this characteristic function and $\mu_n\Rightarrow\nu$. The law $\mu$ itself satisfies the characterizing property, so that uniqueness gives $\nu=\mu$. AC is inherited through the converse theorem's Prokhorov, Fourier-uniqueness and integration-bridge uses. Point masses and constant sequences are included, and no nonzero variance, moment, or density is required. [F2, F3, F4] ∎
