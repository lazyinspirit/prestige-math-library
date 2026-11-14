---
title: Minimal single-manifold encoding
status: published
research_item: def-qec-distinguishability-minimal-code
dependency_level: 2
sources:
  references:
    - title: Monolithic Quantum Error Correction in the Presence of Distinguishability
      url: https://arxiv.org/abs/2609.26946
      locator: PDF p. 6, minimal-code bullet and Fig. 4
      statement: The article specifies the two codewords as |1,-1> and |1,1>, calls
        the code the smallest encoding supported within a single J manifold, and
        uses it as a baseline for which a decay is flagged by leaving the J=1
        manifold. Fig. 4 depicts the two unit amplitudes.
      hypotheses: The article's angular-momentum benchmark and its stated decay model.
      reading_limits: Article-origin attribution only. The supplied extracted text at
        the minimal-code bullet was read; the figure was not independently
        measured. This citation is not independent evidence for a prerequisite
        or an experimental realization.
---

PDF p. 6: ` Minimal-code bullet and Fig. 4 `

## Prerequisites

- [def-qec-distinguishability-angular-basis](item-def-qec-distinguishability-angular-basis)
- [def-qec-prereq-finite-operator-conventions](item-def-qec-prereq-finite-operator-conventions)
- [def-qec-prereq-restricted-logical-channel](item-def-qec-prereq-restricted-logical-channel)


## Definition

Use the spin-$1$ block $V_1=\mathbb C^3$ with its orthonormal magnetic basis $|1,m\rangle$, $m=-1,0,1$. The minimal single-manifold encoding has logical codewords $|\bar 0\rangle=|1,-1\rangle$ and $|\bar 1\rangle=|1,1\rangle$. Its codespace is their complex linear span $\mathcal C\subset V_1$. Equivalently, its encoding is the linear map $V:\mathbb C^2\to V_1$ sending the standard logical basis vectors $|0\rangle,|1\rangle$ to $|\bar 0\rangle,|\bar 1\rangle$, respectively.

## Definition references

[def-qec-distinguishability-angular-basis](item-def-qec-distinguishability-angular-basis)

[def-qec-prereq-finite-operator-conventions](item-def-qec-prereq-finite-operator-conventions)

[def-qec-prereq-restricted-logical-channel](item-def-qec-prereq-restricted-logical-channel)

## Justification

The angular-basis convention supplies the three distinct orthonormal vectors in $V_1$; the finite operator conventions give the ket notation. Thus the two displayed codewords are orthonormal, and their linear span is a two-dimensional subspace. For logical vectors $x=x_0|0\rangle+x_1|1\rangle$ and $y=y_0|0\rangle+y_1|1\rangle$, orthonormality gives the same inner product for $Vx,Vy$ as for $x,y$. Hence $V$ is an isometry and defines a code in the stated code-restriction convention. [def-qec-distinguishability-angular-basis](item-def-qec-distinguishability-angular-basis) [def-qec-prereq-finite-operator-conventions](item-def-qec-prereq-finite-operator-conventions) [def-qec-prereq-restricted-logical-channel](item-def-qec-prereq-restricted-logical-channel)

## Remarks

The article calls this the smallest encoding supported in a single $J$ manifold and uses it as its lowest-$J$ baseline for detecting a decay: in its stated model a decay is flagged because the state leaves the $J=1$ manifold. Its Fig. 4 depicts unit amplitudes at $m=-1,+1$. These are descriptions of the article's benchmark; the definition alone does not assert a universal minimality theorem or specify a decay channel.
