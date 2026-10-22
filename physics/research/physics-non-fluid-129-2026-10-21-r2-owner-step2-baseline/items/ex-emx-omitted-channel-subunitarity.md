---
id: ex-emx-omitted-channel-subunitarity
kind: example
title: "A visible subblock need not be unitary"
status: draft
origin: pipeline
domain: physics
library: physics
dependency_level: 4
proof_strategy: direct
deps:
  - def-countable-choice
  - def-emx-port-scattering-model
  - pthm-emx-scattering-contraction
dependency_roles:
  def-countable-choice: mathematical-premise
  def-emx-port-scattering-model: formulation-prerequisite
  pthm-emx-scattering-contraction: physical-result
verification:
  precheck: pending
provenance:
  statement: ai-altered
  proof: ai-altered
physical_scope: "A finite-dimensional matrix example showing the distinction between the full two-channel output and a one-channel observation. The swap matrix is stipulated as a unitary scattering-data example; no particular Maxwell device realization is asserted. The zero observed output is not material absorption."
sources:
  references:
    - title: "Weng Cho Chew, Theory of Microwave and Optical Waveguides, Purdue lecture notes, complete 362-page text"
      url: "https://engineering.purdue.edu/wcchew/course/tgwAll20121211.pdf"
      locator: "§1.12.2, printed pp. 25–26 (PDF pp. 34–35): finite channel scattering matrices and the lossless unitary condition. The explicit two-channel swap and observed projection are verified locally."
    - title: "Roger B. Marks and Dylan F. Williams, A General Waveguide Circuit Theory, Journal of Research of the National Institute of Standards and Technology 97(5) (1992), pp. 533–562"
      url: "https://nistdigitalarchives.contentdm.oclc.org/digital/api/collection/p16009coll6/id/74796/download"
      locator: "§5, printed pp. 555–556: power assigned to port amplitudes; the example keeps the full channel vector distinct from the measured subset."
---

## Example

Assume $\mathrm{AC}_\omega$. Consider the algebraic two-channel scattering matrix

$$S=\begin{pmatrix}0&1\\1&0\end{pmatrix}.$$

It is unitary. Let a one-channel observer retain only channel 1, represented by the orthogonal projection $P=\operatorname{diag}(1,0)$. Identify its range $\operatorname{ran}P=\operatorname{span}\{e_1\}$ with $\mathbb C$ using the basis vector $e_1$. For incident vector $a=Ae_1$, where $|A|^2=1\,\mathrm W$, the full output is $Sa=Ae_2$, while the observed output is $PSa=0$. The observed operator $S_{\mathrm{obs}}:=PS|_{\operatorname{ran}P}:\operatorname{ran}P\to\operatorname{ran}P$ is represented by the one-by-one matrix $[0]$, so it is not unitary even though the full two-channel map conserves power. The omitted second output accounts for the power; there is no material absorption in this example. The matrix is a consistency example, not a claim that a specified waveguide device realizes it.

## Statement references

[[def-countable-choice]]

[[def-emx-port-scattering-model]]

[[pthm-emx-scattering-contraction]]

## Facts & Assumptions

**Given:** $\mathrm{AC}_\omega$, the displayed two-channel matrix, and the projection retaining channel 1.

[A1] $\mathrm{AC}_\omega$ is carried by the finite scattering theorem cited for the lossless full-channel interpretation. [[def-countable-choice]]

[F1] For a physical finite port map satisfying the contraction theorem's exact hypotheses—a bounded $C^1$ port domain, $\mathrm{AC}_\omega$, fixed $\omega>0$, a unique solution map, smooth $T$-periodic real Maxwell fields with $\rho_f=J_f=0$, one stated homogeneous Lorentz or Drude branch, and the stated wall and outgoing-power bookkeeping—vanishing material, wall, and unlisted-output losses imply $S^\dagger S=I_N$. The port model assigns power to the full amplitude vector. [[def-emx-port-scattering-model]] [[pthm-emx-scattering-contraction]]

## Verification

1.1 The matrix is real and symmetric, so $S^\dagger=S$. Direct multiplication gives $S^\dagger S=S^2=I_2$; for $a=Ae_1$ we have $Sa=Ae_2$ and $\|Ae_2\|_2^2=|A|^2=1\,\mathrm W=\|Ae_1\|_2^2$. Thus this stipulated full-channel matrix satisfies the algebraic unitary condition that [F1] gives for a physical lossless model under its separate smooth Lorentz/Drude hypotheses; no such physical realization is asserted. [given, A1, F1, algebra]

2.1 Since $Pe_1=e_1$ and $Pe_2=0$, the restriction $S_{\mathrm{obs}}=PS|_{\operatorname{ran}P}$ sends the basis vector $e_1$ to $PS e_1=0$; its one-dimensional matrix is $[0]$. Hence $S_{\mathrm{obs}}^\dagger S_{\mathrm{obs}}=[0]\ne I_1$, so the observed one-channel map is not unitary. [step 1.1, algebra]

3.1 For the chosen input, the omitted component is $Ae_2$ and has squared norm $|A|^2=1\,\mathrm W$, equal to the incident power. The retained component vanishes, but the full lossless map sends all power to channel 2; therefore the vanishing observed output is not evidence of material absorption. [step 1.1, step 2.1, algebra] ∎
