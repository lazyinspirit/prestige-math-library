---
id: ex-qft-one-mode-interacting-model
kind: example
domain: physics
library: physics
title: Constructed one-coordinate positive-quartic example on full $L^2$
status: published
origin: pipeline
pipeline_run: physics-td-qft-rpm-62-2026-10-14
dependency_level: 7
deps:
  - pthm-qft-regulated-interacting-model-evolution
  - pthm-qft-quartic-model-energy-bound
  - def-qft-regulated-polynomial-hamiltonian
  - def-countable-choice
dependency_roles:
  pthm-qft-regulated-interacting-model-evolution: physical-result
  pthm-qft-quartic-model-energy-bound: physical-result
  def-qft-regulated-polynomial-hamiltonian: mathematical-premise
  def-countable-choice: mathematical-premise
physical_scope: 'One fixed dimensionless coordinate model on full $L^2(\mathbb R,dq;\mathbb C)$ with a positive quartic potential term, form-selected Hamiltonian, global unitary evolution, and the proved energy-increment bound. No empirical data or continuum field theory.'
empirical_premises: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "David Tong, Quantum Field Theory, author-hosted lecture notes, Chapter 3, Interacting Fields"
      url: "https://www.damtp.cam.ac.uk/user/tong/qft/qfthtml/S3.html"
      locator: "Complete Chapter 3 HTML, real-scalar phi-four interaction discussion."
    - title: "Gerald Teschl, Mathematical Methods in Quantum Mechanics, 2nd ed., §§4.4 and 8.3"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe2.pdf"
      locator: "Printed pp.139–141 and 212–214, Rayleigh–Ritz and oscillator ground state."
verification:
  verified:
    model: "gpt-6-luna, gpt-6.1-sol, and delegated Codex review/repair agents; see completed run evidence"
    verdict: "Owner accepted completed review and adjudication evidence for publication"
    date: "2026-10-15"
    scope: "Owner accepted completed delegated review and resolved adjudication evidence from research/physics-td-qft-rpm-62-2026-10-14-step6-evidence.json for publication. No new mathematical audit or source retrieval performed for publication; outside-frontier supplier limitations remain as recorded in the final report."
    evidence: "research/physics-td-qft-rpm-62-2026-10-14-step6-evidence.json"
    publication: "research/physics-td-qft-rpm-62-2026-10-14-publication-2026-10-15.json"
    delegated_by: "owner; publication instruction 2026-10-15"
---

## Example

Choose $N=1$, $a=1$, $r=1$, and $\lambda=1$, all dimensionless. The
potential is $V(q)=q^2/2+q^4$, and the physical Hamiltonian is $H_{\rm phys}
=E_*h$ with $E_*>0$ joules. The coordinate-space Hilbert space is the full
$H_1=L^2(\mathbb R,dq;\mathbb C)$ of
[[def-qft-regulated-polynomial-hamiltonian]], not a finite matrix truncation.
The positive $q^4$ term is present in the potential of the full form-selected
operator. This is a one-coordinate model; no field-scattering, continuum, or
empirical conclusion is asserted.

## Facts & Assumptions

**Given:** The $N=1$ data above, Countable Choice, and the conditional results below.

[A1] [[def-countable-choice]]: every countable family of nonempty sets has a choice function, as assumed by the QFT-IR01 mathematical suppliers.

[F1] [[pthm-qft-regulated-interacting-model-evolution]]: for the constructed self-adjoint form realization, the physical evolution is a strongly continuous unitary group for all real seconds, with the generator domain specified in that theorem.

[F2] [[pthm-qft-quartic-model-energy-bound]]: for the potential $V_\lambda(q)=r^2q^2/2+\lambda q^4$, $0\le E_g^{\rm phys}(\lambda)-E_g^{\rm phys}(0)\le 3E_*a\lambda/(2r^2)$.

[F3] [[def-qft-regulated-polynomial-hamiltonian]]: for $N=1$ the coordinate space is $\mathbb R$, the Hilbert space is $L^2(\mathbb R,dq;\mathbb C)$, and the polynomial differential expression is defined on $C_c^\infty(\mathbb R;\mathbb C)$; the definition does not assert a self-adjoint operator domain.

## Verification

1.1 The parameters satisfy $a>0$, $r>0$, and $\lambda>0$, and $V(q)=q^2/2+q^4\ge q^2/2$, so the coercivity hypotheses hold with $c=1/2$ and $C_0=0$. The coordinate variable $q$ ranges over $\mathbb R$; vectors in $H_1$ are square-integrable complex functions of $q$, identified up to equality almost everywhere by [F3]. The characteristic functions $\mathbf 1_{[3n,3n+1)}$, $n\in\mathbb N$, are nonzero pairwise orthogonal vectors, so this Hilbert space is infinite-dimensional. [F3, algebra]

2.1 By [A1], the Countable Choice hypothesis of [F2] holds. Substituting $a=r=\lambda=1$ into it gives $0\le E_g^{\rm phys}(1)-E_g^{\rm phys}(0)\le3E_*/2$. This is an exact bound for the selected model, not an exact value of either ground energy. [A1, F2, step 1.1, algebra]

3.1 By [A1], the Countable Choice hypothesis of [F1] holds. Applying [F1]
to the same selected model gives a global unitary group $U_{\rm phys}(\tau)$ for every $\tau\in\mathbb R$, norm preservation for all states, and differentiability precisely on the stated Hamiltonian domain. The quartic coefficient is positive, and the Hilbert space is infinite-dimensional by step 1.1; thus this is a one-coordinate polynomial operator model on the full Hilbert space, not a finite matrix replacement. No observation or continuum extrapolation is asserted. [A1, F1, step 1.1, algebra] ∎
