# Batch 59 authoring notes — `qft-ir01`

Run: `physics-td-qft-rpm-62-2026-10-14`  
Role: beta  
Page pair: `qft-ir01` / `qft-ir01-examples`

## Scope and plan comparison

Read the canonical repository and physics-workspace instructions, the full
QFT-IR01 design section, the assigned task, the active owner-direction file,
`research/plan-spec.json`, the batch dependency-level input, the proposed item
inventory, and the full `IR00`–`IR02` and `IR09` research arguments. The owner
direction requires complete assigned pages and local carriers, exact readiness
records, and conditional arguments for any unavailable supplier. It leaves
shared plans and imported mathematics unchanged.

The design reservation names nine A items and two B items; the completed
manifest retains those eleven IDs. `plan-spec.json` held empty item placeholders
for both pages, which are now populated in the batch manifest. The task and
`plan-spec.json` give the A page the same five mathematical prerequisites:
compact/self-adjoint/trace-class operators, density/separability/convolution in
Lp, Hilbert geometry/Riesz, orthonormal bases/Parseval/Fourier, and relations,
functions and quotients. The embedded reservation block in the QFT design says
`"requires": []`, which conflicts with those five requirements. The populated
manifest follows the assigned task and `plan-spec.json`; the discrepancy is
recorded here. The B page requires `qft-ir01`.

The source inventory's `def-qft-regulated-polynomial-hamiltonian` lists the
full Axiom of Choice. Its actual definition and construction need only
Countable Choice, so the item cites `def-countable-choice`. The inventory's
Hermite supplier has no dependencies, but its proof needs the published
mathematical anisotropic oscillator theorem and the local form completion; the
manifest records these real suppliers. The old bounded-operator self-adjoint
definition was not applicable to the unbounded Hamiltonian. The theorem now
uses the published unbounded domain, adjoint, and self-adjoint definitions.
The Gibbs result declares the local oscillator form supplier, Riesz, nuclear
series, positive trace, general basis-independent trace, and bounded-operator
inputs required by its completed proof. The generic ground variational result
does not depend on Hermite functions; the quartic B example does.

## Inventory, dependencies, and levels

The dependency-level JSON records batch 59 at level 0 with no in-run batch
prerequisites. Recomputed item levels from the actual same-batch edges are:

| Item | Level | In-batch suppliers |
|---|---:|---|
| `def-qft-regulated-polynomial-hamiltonian` | 0 | none |
| `lem-qft-coercive-polynomial-form-domain` | 1 | `def-qft-regulated-polynomial-hamiltonian` |
| `lem-qft-cube-poincare-compact-form-inclusion` | 2 | `lem-qft-coercive-polynomial-form-domain` |
| `lem-qft-hermite-oscillator-research-supplier` | 2 | `lem-qft-coercive-polynomial-form-domain` |
| `lem-qft-polynomial-positive-compact-resolvent` | 3 | `lem-qft-cube-poincare-compact-form-inclusion` |
| `thm-qft-self-adjoint-regulated-interaction` | 4 | `lem-qft-polynomial-positive-compact-resolvent` |
| `thm-qft-regulated-global-unitary-evolution` | 5 | `thm-qft-self-adjoint-regulated-interaction` |
| `thm-qft-regulated-gibbs-trace` | 5 | `thm-qft-self-adjoint-regulated-interaction`, `lem-qft-hermite-oscillator-research-supplier`, `lem-qft-coercive-polynomial-form-domain` |
| `lem-qft-regulated-ground-variational-bound` | 5 | `thm-qft-self-adjoint-regulated-interaction` |
| `rem-qft-cutoff-vs-continuum-interaction` | 5 | `def-qft-regulated-polynomial-hamiltonian`, `thm-qft-self-adjoint-regulated-interaction` |
| `ex-qft-quartic-ground-energy-bound` | 6 | `def-qft-regulated-polynomial-hamiltonian`, `lem-qft-hermite-oscillator-research-supplier`, `lem-qft-regulated-ground-variational-bound`, `lem-qft-coercive-polynomial-form-domain` |

All other direct dependencies are already published mathematical suppliers or
the five page prerequisites. The Hermite item instantiates the published
multidimensional oscillator theorem at $\hbar=1$, $m_j=(2a_j)^{-1}$ and
$\omega_j=2\sqrt{a_jc}$, then proves that the product basis is complete in the
local quadratic form norm. This avoids a claim that the MIT lecture itself
completes Hermite completeness.

## Source reading and retrieval evidence

The A page has three full-text sources with verified retrieval stamps in the
coverage file:

- Teschl, *Mathematical Methods in Quantum Mechanics*, 2nd ed., author PDF,
  `https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe2.pdf` —
  `ee2cfd1c9fdc41ef`, 370 PDF pages. Inspected §§2.3, 4.4, 5.1, 6.3 and 8.3.
- Laugesen, *Spectral Theory of Partial Differential Equations*, full lecture
  notes, arXiv v1 PDF, `https://arxiv.org/pdf/1203.2344v1` —
  `8aca596d3246a35e`, 120 PDF pages. Inspected Chapters 3, 4, 8 and 9. The
  Chapter 8 argument invokes generic local Rellich compactness; the QFT item
  instead proves its required finite-mode compactness with cube means and
  coercive tails.
- Melrose, MIT 18.102 Lecture 23, official OCW PDF,
  `https://www.ocw.mit.edu/courses/18-102-introduction-to-functional-analysis-spring-2009/5fc9f8fe6fc4fec37683a39268c7b6b0_MIT18_102s09_lec23.pdf` —
  `75797c4ec5e4db35`, 8 PDF pages. Inspected printed pp.133–135 for oscillator
  ladder relations, eigenvalues, and orthogonality. Those pages do not prove
  completeness; the local Hermite item cites the published mathematics
  supplier that does.

The coverage file records each harvested heading, item disposition, locator,
retrieval attempt, and verified stamp. Candidate URLs that failed retrieval
remain in `source_retrieval_history`; each has its initial attempt and five
recovery retries recorded. They were superseded by the versioned/official full
texts above, and none of their uninspected material is cited as evidence.

## Scope and mathematical status

All items are mathematical, conditional deductions under their stated
Countable Choice and coercivity hypotheses. The polynomial and coefficients
are fixed finite data. The self-adjoint operator is the realization selected
by the completed positive form and compact variational inverse. The proof does
not assert essential self-adjointness of the initial $C_c^\infty$ expression,
exclude other self-adjoint extensions, or infer physical measurements. The
unitary group has a mathematical real parameter. The Gibbs estimate is a
finite trace estimate for $\beta>0$, and the quartic inequality is an exact
variational bound. No continuum or infinite-volume limit is asserted.

No cross-batch item supplier is used. `batch-59.cross-batch-dependencies.json`
therefore records an empty list. Downstream batches may consume this page only
after their own dependencies and independent checks are satisfied.

## Final checks

Check results are appended after the scoped validation pass. Draft content and
readiness records are authoring evidence, not independent approval.
