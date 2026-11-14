---
id: lem-qec-author-252014cb5616-lift-frequency-window
kind: lemma
domain: mathematics
title: Finite diagonal lift and its relative frequency window
status: published
origin: session
deps:
  - def-qec-prereq-spin-tensor-cg-conventions
  - def-qec-prereq-diagonal-lift-phase-data
dependency_roles:
  def-qec-prereq-spin-tensor-cg-conventions: mathematical-premise
  def-qec-prereq-diagonal-lift-phase-data: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
proof_strategy: direct-proof
dependency_level: 2
---

## Statement

Fix a spin label $J\geq1$ and the spin blocks $V_J$ and $V_{J-1}$. Let $H_0$ and $D$ be diagonal in their combined orthonormal spin basis, with real eigenvalues $E_{Kn}$ and $d_{Kn}=\Delta Kn$, respectively, for $K\in\{J,J-1\}$ and $n=-K,-K+1,\ldots,K$, where $\Delta$ is real. Use units with $\hbar=1$, so directed frequencies are source energies minus destination energies.

For every formal triple with $m=-J,-J+1,\ldots,J$ and $\delta\in\{-1,0,1\}$, define $s_{Jm\delta}=\Delta[m-(J-1)\delta]$. Then $|s_{Jm\delta}|\leq(2J-1)|\Delta|$. The pair $(J,m)\to(J-1,m+\delta)$ designates existing spin states only when $m+\delta\in\{-(J-1),-(J-1)+1,\ldots,J-1\}$. For such a pair, $s_{Jm\delta}$ is the change of its directed frequency on replacing $H_0$ by $H_0+D$. This is an energy-difference statement and does not assert that a transition matrix element is nonzero; for labels without a destination state, $s_{Jm\delta}$ remains only a formal algebraic expression.

If the transitions under consideration have unperturbed directed frequency $E_{Jm}-E_{J-1,m+\delta}=\Omega_J=\omega_0h_J$, where $\omega_0,h_J>0$, then $|s_{Jm\delta}/\Omega_J|\leq r_J=(2J-1)|\Delta|/(\omega_0h_J)$. For $r_J<1$, all their shifted frequencies $\Omega_J+s_{Jm\delta}$ remain positive. The relative bound and positivity of the formal numbers $\Omega_J+s_{Jm\delta}$ also hold for every listed formal triple.

## Facts & Assumptions

[F1] The spin convention supplies the blocks $V_K$ with orthonormal basis labels $n=-K,-K+1,\ldots,K$. Thus a destination in $V_{J-1}$ must have its magnetic label in that block's range. [[def-qec-prereq-spin-tensor-cg-conventions]]

[F2] If the unperturbed operator and lift are diagonal in the same specified basis, replacing the former by their sum changes a directed source-minus-destination energy difference by the source lift eigenvalue minus the destination lift eigenvalue. [[def-qec-prereq-diagonal-lift-phase-data]]

## Proof

**Given:** The common diagonal spin basis, real eigenvalues, formal label ranges and positive unperturbed frequency specified in the Statement. **Goal:** Establish the algebraic window, its transition-energy interpretation on existing states, and positivity.

1.1 For every formal triple, $|m|\leq J$ and $|\delta|\leq1$. Since $J-1\geq0$, the triangle inequality gives $|s_{Jm\delta}|=|\Delta|\,|m-(J-1)\delta|\leq|\Delta|[J+(J-1)]=(2J-1)|\Delta|$. No destination state is needed for this algebraic inequality. [given, algebra]

2.1 When $m+\delta$ is in the magnetic range of $V_{J-1}$, both states exist by [F1] and are common eigenvectors of $H_0$ and $D$ by hypothesis. Applying [F2] changes their directed frequency by $d_{Jm}-d_{J-1,m+\delta}=\Delta[Jm-(J-1)(m+\delta)]=s_{Jm\delta}$. A zero matrix element does not alter this energy-difference identity or establish a nonzero transition. Outside that destination range only the formal expression in step 1.1 is asserted. [given, F1, F2, step 1.1, algebra]

3.1 Divide the inequality in step 1.1 by $\Omega_J=\omega_0h_J>0$ to obtain $|s_{Jm\delta}/\Omega_J|\leq r_J$. If $r_J<1$, then $\Omega_J+s_{Jm\delta}\geq\Omega_J-|s_{Jm\delta}|\geq\Omega_J(1-r_J)>0$ for every formal triple. For each existing-state pair whose unperturbed directed frequency is $\Omega_J$, step 2.1 identifies this positive number as its shifted frequency. [given, step 1.1, step 2.1, algebra] ∎
