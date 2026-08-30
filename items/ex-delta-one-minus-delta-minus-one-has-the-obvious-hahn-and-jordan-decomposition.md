---
id: ex-delta-one-minus-delta-minus-one-has-the-obvious-hahn-and-jordan-decomposition
kind: example
title: "The signed measure delta_1 minus delta_-1 has the obvious Hahn and Jordan decomposition"
status: draft
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [def-dirac-measure, thm-jordan-decomposition-for-signed-measures, thm-hahn-decomposition-for-signed-measures]
proof_strategy: direct
verification:
  precheck: pass
sources:
  references:
    - title: "John K. Hunter, Measure Theory, Example 6.14"
      url: "https://www.math.ucdavis.edu/~hunter/measure_theory/measure_notes.pdf"
---

## Example

On $(\mathbb R,\mathcal B(\mathbb R))$, let
$$\nu:=\delta_1-\delta_{-1}.$$
Then $P=\mathbb R\setminus\{-1\}$ is positive, $N=\{-1\}$ is negative, and
$$\nu^+=\delta_1,\qquad \nu^-=\delta_{-1},\qquad |\nu|=\delta_1+\delta_{-1}.$$

## Facts & Assumptions

**Given:** The Dirac set functions $\delta_1$ and $\delta_{-1}$.

[L1] The Dirac set function at a point is the indicator-valued set function on measurable sets. ([[def-dirac-measure]])

[L2] Hahn decomposition splits a signed measure into a positive part and a negative part, and Jordan decomposition records the corresponding measures. ([[thm-hahn-decomposition-for-signed-measures]], [[thm-jordan-decomposition-for-signed-measures]])

## Verification

**Proof technique:** direct.

1.1 By [L1], for every measurable $E$ one has [L1, L2] $\nu(E)=\mathbf 1_E(1)-\mathbf 1_E(-1)$. If $E\subseteq P$ is measurable, then $-1\notin E$, so $\nu(E)=\mathbf 1_E(1)\ge0$. If $E\subseteq N$ is measurable, then $1\notin E$, so $\nu(E)=-\mathbf 1_E(-1)\le0$. Thus $P$ is positive and $N$ is negative. [L1, L2]

2.1 Since $\mathbb R=P\sqcup N$, step 1.1 gives a Hahn decomposition. [L2, step 1.1]
The Jordan measures are therefore $\delta_1$ and $\delta_{-1}$, so $|\nu|=\delta_1+\delta_{-1}$ by [L2]. ∎
