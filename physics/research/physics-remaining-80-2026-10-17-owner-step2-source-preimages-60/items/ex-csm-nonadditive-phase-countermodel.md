---
id: ex-csm-nonadditive-phase-countermodel
kind: example
title: "The middle sector at N=4 and the transition point"
status: draft
origin: pipeline
domain: physics
library: physics
dependency_level: 5
deps:
  - pthm-csm-nonadditive-phase-countermodel
dependency_roles:
  pthm-csm-nonadditive-phase-countermodel: physical-result
physical_scope: "Exact N=4 specialization of the stated global three-sector finite-state model; no short-range material system is asserted."
empirical_premises: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "David Tong, Statistical Physics, §§1.2–1.3 and §§5.1, 5.4.2"
      url: "https://davidtong.org/pdfs/teaching/statistical-physics/statphys.pdf"
    - title: "Daniel Arovas, Lecture Notes on Thermodynamics and Statistical Mechanics, §§2.12, 4.2, and 7.6 (2013)"
      url: "https://www.lip.pt/~jespada/teaching/data/TEM/LectureNotes-Arovas.pdf"
verification:
  precheck: pass
---

## Example

Specialize the finite-sector model of [[pthm-csm-nonadditive-phase-countermodel]] to $N=4$ at its positive transition parameter.

## Facts & Assumptions

**Given:** The three sectors, energies, and finite exponential-tilt law from [[pthm-csm-nonadditive-phase-countermodel]].

[F1] [[pthm-csm-nonadditive-phase-countermodel]]: at $\beta_c=(\log2)/\epsilon$, the sector weights are $1$, $2^{-N}$, and $1$; every shell half-width $0\le\Delta<N\epsilon$ isolates $B_N$, and its uniform counting probability is $Q_{N,\Delta}(\omega)=|\mathcal S_{N,\Delta}|^{-1}$ for $\omega\in\mathcal S_{N,\Delta}$, so the shell probability of $B_N$ is $1$.

## Verification

**Proof technique:** direct.

**Given:** $N=4$, $\epsilon>0$, $\beta=\beta_c$, and $0\le\Delta<4\epsilon$.

1.1 Since $\beta_cN\epsilon=4\log2$, the three aggregate canonical sector weights are $1$, $e^{-4\log2}=1/16$, and $4^4e^{-8\log2}=1$. Thus $Z_4=33/16$ and $P_{\beta_c,4}(B_4)=(1/16)/(33/16)=1/33$. [given, F1, algebra]

2.1 The shell centered at $4\epsilon$ with half-width $\Delta<4\epsilon$ excludes the neighboring energy levels $0$ and $8\epsilon$, so it contains exactly the single state in $B_4$. Its uniform probability is therefore one on $B_4$, compared with the canonical value $1/33$. [given, F1, algebra] ∎

