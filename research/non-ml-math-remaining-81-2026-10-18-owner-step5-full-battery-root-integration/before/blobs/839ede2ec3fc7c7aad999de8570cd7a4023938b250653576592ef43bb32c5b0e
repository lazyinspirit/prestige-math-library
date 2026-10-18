---
id: def-qa-37-resource-cost-model
kind: definition
title: "Anyon compiler resource ledger"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 9
deps:
  - def-qa-37-anyon-task-and-promise
  - def-qc-circuit-cost-model
  - def-qa-classical-bit-cost
  - def-qa-nonoracle-gate-cost
justified_by: []
axiom_use: "None; this is an explicit finite resource convention."
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "Chetan Nayak, Steven H. Simon, Ady Stern, Michael Freedman, and Sankar Das Sarma, Non-Abelian Anyons and Topological Quantum Computation"
      url: https://arxiv.org/pdf/0707.1889
      locator: "§IV.C, physical implementation limitations, PDF pp. 58–63."
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes"
      url: https://arxiv.org/pdf/1907.09415
      locator: "Chapter 2 §2.2, PDF pp. 26–29."
---

## Definition

For a finite anyon solver instance and one run, record separately the tuple
$$\bigl(L_{\rm in},\ N_{\rm any},\ |b|,\ N_{\rm prep},\ N_{\rm anc},\ N_{\rm meas},\ B_{\rm out},\ b_{\max},\ t_{\rm cl},\ T_H,\ \epsilon_{\rm op},\epsilon_{\rm tr},\epsilon_{\rm meas},\ell_{\rm leak},\ p_{\rm leak},\ N_{\rm phase},\ t_{\rm phase},\ \mathsf C_{\rm circ},\ N_{\rm nonoracle}\bigr).$$
Here $L_{\rm in}$ is the complete finite classical input-description bit
length, including the declared task, state/preparation descriptions when
classically encoded, and tolerance descriptions; a directly supplied quantum
input is not assumed to have a finite classical coordinate description;
$N_{\rm any}$ is the number of ordered simple-charge strand labels in the
fusion-space instance; and $|b|$ is the number of braid-generator occurrences
(inverse generators count as one). $N_{\rm prep}$ counts elementary
operations in the declared preparation procedure, while $N_{\rm anc}$ counts
the ancillary anyons or other physical ancilla systems used by preparation or
computation. If the initial state is supplied directly as an abstract quantum
input with no preparation interface, $N_{\rm prep}$ is “not applicable”, not
silently set to zero; $N_{\rm anc}$ still records any declared solver ancillas
(zero if none, or “not applicable” if no physical ancilla model is supplied).
$N_{\rm meas}$ is the number of fusion measurements,
and $B_{\rm out}$ is the total bit length of their classical outcome record
under its declared finite encoding (zero when no measurement occurs). The
largest unary precision query to a certified matrix name is $b_{\max}$; $t_{\rm cl}$
is the classical bit time used by search and postprocessing. $T_H$ is the total
Hamiltonian evolution time over the run in the declared physical time unit;
it is “not applicable” for an abstract braid-only model without Hamiltonian
evolution. The error coordinates $\epsilon_{\rm op},\epsilon_{\rm tr},
\epsilon_{\rm meas},\ell_{\rm leak},p_{\rm leak}$ are respectively a stated
operator-norm approximation bound, an independent in-band transport bound,
an implementation-to-ideal-measurement total-variation bound, and leakage
amplitude and probability bounds. $N_{\rm phase},t_{\rm phase}$ count phase
corrections and their classical control cost. $\mathsf C_{\rm circ}$ is the
complete applicable circuit cost record of [[def-qc-circuit-cost-model]],
including description length $L(C)$, gate count $g(C)$, minimum-layer depth
$d(C)$, wire count $w(C)$, declared clean/dirty ancilla counts, generator
and acceptance costs, each named oracle's query count, and tolerance encoding.
$N_{\rm nonoracle}$ counts all declared elementary nonoracle gates, including
preparation and computation, as in [[def-qa-nonoracle-gate-cost]]. For an
adaptive solver, declare the branch convention and report worst-case branch
costs; for a single circuit use that circuit's record. These coordinates
may overlap $N_{\rm prep}$ and $N_{\rm anc}$; they are separate reported
resources, not disjoint summands to be added. Without a circuit implementation
interface, $\mathsf C_{\rm circ}$ and $N_{\rm nonoracle}$ are “not applicable”.
Classical
input bit cost follows [[def-qa-classical-bit-cost]] and finite nonoracle
gates follow [[def-qa-nonoracle-gate-cost]]. An inapplicable coordinate is
marked “not applicable”; it is not assigned value zero. Unless an interface
explicitly states a bound, no braid length, preparation operation, ancilla,
matrix precision, measurement, Hamiltonian time, search step, or phase
correction is free. The tuple is a bookkeeping convention; it does not assert
any of its error or runtime bounds.
