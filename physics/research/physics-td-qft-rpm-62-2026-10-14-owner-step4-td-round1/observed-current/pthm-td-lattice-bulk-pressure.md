---
id: pthm-td-lattice-bulk-pressure
kind: physics-theorem
domain: physics
title: Bulk log-partition pressure for a bounded finite-range lattice model
status: draft
origin: pipeline
library: physics
dependency_level: 5
deps: [def-td-finite-microstate-model, def-td-si-quantities, def-tdmath-bounded-finite-range-lattice, post-td-canonical-sampling, thm-tdmath-finite-range-lattice-pressure-limit]
dependency_roles:
  def-td-finite-microstate-model: formulation-prerequisite
  def-td-si-quantities: formulation-prerequisite
  def-tdmath-bounded-finite-range-lattice: mathematical-premise
  post-td-canonical-sampling: physical-assumption
  thm-tdmath-finite-range-lattice-pressure-limit: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
physical_scope: Finite-alphabet, bounded, translation-invariant finite-range interactions on free cubic lattices with a declared cell volume; the pressure convention is specific to this lattice model and implies no continuum-particle or long-range pressure law.
sources:
  references:
    - title: David Tong, Statistical Physics, complete lecture notes, §5.3.1 (printed pp. 156–157)
      url: https://davidtong.org/pdfs/teaching/statistical-physics/statphys.pdf
    - title: Daniel Arovas, Lecture Notes on Thermodynamics and Statistical Mechanics, §6.2.2 (printed pp. 330–333)
      url: https://courses.physics.ucsd.edu/2025/Spring/physics210a/LECTURES/STATMECH.pdf
verification:
  precheck: pass
---

## Statement

Use the finite-alphabet, bounded, translation-invariant finite-range lattice model of [[def-tdmath-bounded-finite-range-lattice]], with physical interaction energies in joules, inverse temperature $\beta=(k_{\mathrm B}T)^{-1}>0$, and partition sum $Z_L(\beta)$. Suppose each site represents a fixed cell of volume $v_0>0$ in $\mathrm{m^3}$. Define the reduced log-partition density $p_L=L^{-d}\log Z_L$ and the lattice pressure convention $P_L=(k_{\mathrm B}T/v_0)p_L$ in pascals. Then $p_L$ and $P_L$ have finite limits as $L\to\infty$. If a second boundary-energy model on the same configuration sets differs pointwise by at most $C_bL^{d-1}$ joules for fixed $C_b$, it has the same limit.

The pressure convention in this statement is assigned to this lattice model. Equating it with a derivative-based macroscopic pressure or a measured mechanical pressure requires a separate model identification.

## Facts & Assumptions

**Given:** A finite alphabet, finite-range bounded lattice interactions, positive $T$, the canonical partition sum, and a fixed physical cell volume.

[F1] [[def-tdmath-bounded-finite-range-lattice]]: for integer $d,L\ge1$, finite alphabet $\mathcal A$, bounded finite-range translation-invariant interactions, and $\beta>0$, $H_L$ and $Z_L=\sum_s e^{-\beta H_L(s)}$ are defined with free boundary.

[F2] [[thm-tdmath-finite-range-lattice-pressure-limit]] (current batch 11 draft): the sequence $p_L=L^{-d}\log Z_L$ has a finite limit for every fixed $\beta>0$, and a boundary-energy perturbation bounded by $C_bL^{d-1}$ has the same limit. Its full current proof was inspected; its draft status remains conditional.

[F3] [[def-td-si-quantities]]: $k_{\mathrm B}$ has units $\mathrm{J\,K^{-1}}$, $T$ is in kelvins, $v_0$ is in $\mathrm{m^3}$, and $k_{\mathrm B}T/v_0$ is in pascals.

[F4] [[post-td-canonical-sampling]]: the positive finite lattice partition sum defines the adopted finite-volume canonical law.

[A1] $v_0$ is fixed as $L$ varies, and the physical interaction parameters are held fixed in the sequence of cubic boxes.

## Proof

**Given:** The bounded finite-range lattice data, $\beta>0$, a fixed cell volume, and the stated boundary perturbation bound.

1.1 The finite lattice data in [F1] and $\beta>0$ match the model hypotheses of [F2]. Thus $p_L=L^{-d}\log Z_L$ converges to a finite $p_\infty$; the same supplier gives the identical limit for the stated boundary perturbation. By [F4], these finite partition sums give the adopted lattice canonical law. [F1, F2, F4, A1]

2.1 Since $v_0$ and $T$ are fixed along the volume sequence, multiplying by the constant $k_{\mathrm B}T/v_0$ preserves convergence: $P_L=(k_{\mathrm B}T/v_0)p_L\to(k_{\mathrm B}T/v_0)p_\infty$. The factor has units of pressure by [F3]. This proves only the declared lattice pressure convention. [F3, step 1.1, algebra] ∎
