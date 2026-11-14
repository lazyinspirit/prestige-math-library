---
id: pthm-qec-distinguishability-transition-shifts
kind: physics-theorem
domain: physics
title: Source-dependent versus uniform Zeeman shifts
status: draft
origin: session
deps:
  - post-qec-distinguishability-atomic-lift
  - def-qec-prereq-diagonal-lift-phase-data
  - math:def-axiom-of-choice
  - math:def-countable-choice
  - math:def-dependent-choice
  - def-qec-prereq-bosonic-kerr-scope
dependency_roles:
  post-qec-distinguishability-atomic-lift: physical-assumption
  def-qec-prereq-diagonal-lift-phase-data: mathematical-premise
  math:def-axiom-of-choice: mathematical-premise
  math:def-countable-choice: mathematical-premise
  math:def-dependent-choice: mathematical-premise
  def-qec-prereq-bosonic-kerr-scope: formulation-prerequisite
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: Monolithic Quantum Error Correction in the Presence of Distinguishability
      url: https://arxiv.org/abs/2609.26946
      locator: PDF page 3, Eq. (11) and the following paragraph
      statement: The article gives the transition-frequency shift from the Jm lift as
        Delta times m minus (J minus 1) times delta, and contrasts it with the
        source-independent shift minus delta times Delta from a perturbation
        proportional to m alone.
      hypotheses: The article's angular-momentum transition from |J,m> to
        |J-1,m+delta>, with the stated diagonal perturbations.
      reading_limits: The supplied PDF page 3 text was read. This reference attributes
        the article's claim; the proof below calculates the shifts from the
        stated model and transition-energy convention.
physical_scope: Separate conditional energy-shift calculations for the finite
  angular-momentum emitter and the prescribed one-mode Kerr Hamiltonian on its
  finite occupation span, in units with hbar equal to one. Neither case asserts
  a measured shift, an environmental measurement, a loss rate, or perfect
  discrimination of decay paths.
dependency_level: 4
formulation_deps:
  - post-qec-distinguishability-atomic-lift
  - def-qec-prereq-diagonal-lift-phase-data
  - math:def-axiom-of-choice
  - math:def-countable-choice
  - math:def-dependent-choice
  - def-qec-prereq-bosonic-kerr-scope
argument_deps:
  - post-qec-distinguishability-atomic-lift
  - def-qec-prereq-diagonal-lift-phase-data
  - math:def-axiom-of-choice
  - math:def-countable-choice
  - math:def-dependent-choice
  - def-qec-prereq-bosonic-kerr-scope
---

## Statement

Assume the Axiom of Choice, Countable Choice and Dependent Choice, and take the finite angular-momentum emitter model with its phenomenological diagonal lift. Its orthonormal states are $|J,m\rangle$, where $J$ labels a retained spin block and $m$ its magnetic state. For a transition from $|J,m\rangle$ to an existing state $|J-1,m+\delta\rangle$, with $\delta\in\{-1,0,1\}$ and real lift strength $\Delta$, define transition frequency as source energy minus destination energy in units with $\hbar=1$.

The lift with level shifts $\Delta Jm$ changes this transition frequency by $\Delta[m-(J-1)\delta]$. For fixed $J$ and $\delta$, this shift differs for distinct allowed source labels $m$ when $\Delta\ne0$. By contrast, a diagonal perturbation assigning the level shift $\Delta m$ to every $|J,m\rangle$ changes the transition frequency by $-\delta\Delta$, independent of $m$. Thus this latter shift alone supplies no source-label distinction through transition frequency within a fixed polarization channel $\delta$. Neither calculation alone determines the full environmental record.

Independently, assume Countable Choice and the prescribed one-mode Kerr model on the finite occupation span, with real parameters $\omega,K$, occupation states $|n\rangle$ for integers $n\geq0$, and assigned energies $E_n=\omega n+\frac K2n(n-1)$. The adjacent downward transition frequencies $g_n=E_n-E_{n-1}=\omega+K(n-1)$ satisfy $g_{n+1}-g_n=K$ for every $n\geq1$. Hence $K\ne0$ separates each pair of consecutive downward transition frequencies; when $K=0$, all these frequencies equal $\omega$. This case uses Countable Choice for its Fock-space supplier and does not use the finite-emitter or regulated-bath hypotheses. These energy differences alone specify no environmental record or recovery performance.

## Statement references

[[post-qec-distinguishability-atomic-lift]]

[[def-qec-prereq-diagonal-lift-phase-data]]

[[def-qec-prereq-bosonic-kerr-scope]]

[[math:def-countable-choice]]

## Facts & Assumptions

[F1] The finite emitter has an orthonormal magnetic basis, an unperturbed Hamiltonian diagonal in that basis, and the postulated lift assigns energy $\Delta Jm$ to $|J,m\rangle$. The postulate treats this lift as a model assumption. [[post-qec-distinguishability-atomic-lift]]

[F2] For a diagonal lift, the contribution to a directed transition energy is the lift eigenvalue at its source minus that at its destination. [[def-qec-prereq-diagonal-lift-phase-data]]

[A1] Assume the Axiom of Choice, Countable Choice and Dependent Choice used by the emitter model's regulated bath construction. [[math:def-axiom-of-choice]] [[math:def-countable-choice]] [[math:def-dependent-choice]]

[F3] In the separate one-mode model, the prescribed Kerr Hamiltonian assigns $E_n=\omega n+\frac K2n(n-1)$ and adjacent downward gaps $g_n=\omega+K(n-1)$ for $n\geq1$, with real $\omega,K$. [[def-qec-prereq-bosonic-kerr-scope]]

[A2] Assume Countable Choice for the Fock-space construction in the separate one-mode case. [[math:def-countable-choice]]

## Proof

**Given:** For the emitter case, the finite emitter, retained source and destination states, real $\Delta$, and the two specified diagonal perturbations. Independently, for the one-mode case, the Kerr model with real $\omega,K$ and Countable Choice.

**Goal:** Calculate the emitter transition-frequency shifts and their dependence on $m$, and compare consecutive downward gaps in the independent Kerr case.

1.1 By [F1], the first lift assigns $\Delta Jm$ to the source and $\Delta(J-1)(m+\delta)$ to the destination. The source-minus-destination rule [F2] therefore gives $\Delta[Jm-(J-1)(m+\delta)]=\Delta[m-(J-1)\delta]$. For fixed $J,\delta$, subtracting the shifts for source labels $m_1,m_2$ gives $\Delta(m_1-m_2)$, which is nonzero if both factors are nonzero. [F1, F2, A1, algebra]

2.1 For the second perturbation, the source and destination shifts are respectively $\Delta m$ and $\Delta(m+\delta)$. By [F2] their difference is $-\delta\Delta$, which is the same for every allowed $m$ at fixed $\delta$. Consequently the perturbation's transition-frequency shift cannot by itself distinguish those source labels. This calculation specifies no environmental state or measurement, so it implies no stronger claim about the complete record. [F2, step 1.1, algebra]

3.1 In the one-mode case of [F3] under [A2], $g_{n+1}=\omega+Kn$ and $g_n=\omega+K(n-1)$ for every integer $n\geq1$, so subtraction gives $g_{n+1}-g_n=K$. If $K\ne0$ these two frequencies differ; if $K=0$ the formula gives $g_n=\omega$ for every $n\geq1$. Only the prescribed energy assignments are used: no environmental state, measurement or noise channel is supplied by this calculation. [F3, A2, algebra] ∎

## Source notes

The article describes the first shift as distinguishing decay pathways. The calculation above establishes the stated source dependence of their frequencies; how much information a particular environment acquires requires additional dynamical and measurement assumptions. The independent Kerr calculation is proved here from the prescribed one-mode model.
