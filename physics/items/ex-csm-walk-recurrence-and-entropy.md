---
id: ex-csm-walk-recurrence-and-entropy
kind: example
title: "A diffusive time step and a four-state entropy reversal"
status: draft
origin: pipeline
domain: physics
library: physics
dependency_level: 5
deps:
  - pthm-csm-walk-recurrence-and-entropy
dependency_roles:
  pthm-csm-walk-recurrence-and-entropy: physical-result
physical_scope: "Exact finite specializations of the stated walk, rotor, and permutation models; no observations or collision-derived diffusion law are asserted."
empirical_premises: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Daniel Arovas, Lecture Notes on Thermodynamics and Statistical Mechanics, §§1.2.1 and 1.4.2 (2013)"
      url: "https://www.lip.pt/~jespada/teaching/data/TEM/LectureNotes-Arovas.pdf"
    - title: "Rick Durrett, Probability: Theory and Examples, 5th ed., §3.3.2, Theorem 3.3.17"
      url: "https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf"
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
---

## Example

This example evaluates one finite walk step size, one rotor period, and the first three states of the exact finite permutation model in [[pthm-csm-walk-recurrence-and-entropy]].

## Facts & Assumptions

**Given:** The three explicitly defined models and their units and conventions from [[pthm-csm-walk-recurrence-and-entropy]].

[F1] [[pthm-csm-walk-recurrence-and-entropy]]: under $\ell^2=2D\delta t$, the walk has variance $n\ell^2$; the rotor period is $2\pi I/|p_0|$; the finite permutation has coarse entropies $0,\log2,0$ and fine entropy $\log2$.

## Verification

**Proof technique:** direct.

**Given:** $t=1$ s, $D=1$ m$^2$s$^{-1}$, $\delta t=1/8$ s, $I=1$ kg m$^2$, and $p_0=1$ kg m$^2$s$^{-1}$.

1.1 The scaling gives $\ell=\sqrt{2D\delta t}=1/2$ m and $n=\lfloor t/\delta t\rfloor=8$, so $\operatorname{Var}(S_n)=8(1/2\ {\rm m})^2=2$ m$^2$ and $\varphi_{S_n}(k)=\cos((1/2\ {\rm m})k)^8$. This is a finite model marginal; its Gaussian limit is the separate $\delta t\downarrow0$ conclusion of [F1]. [given, F1, algebra]

2.1 The rotor return period is $2\pi I/|p_0|=2\pi$ s. The finite permutation calculation has coarse entropy $0$ at times zero and two and $\log2$ at time one, while the fine entropy remains $\log2$ at all three times. [given, F1, algebra] ∎

