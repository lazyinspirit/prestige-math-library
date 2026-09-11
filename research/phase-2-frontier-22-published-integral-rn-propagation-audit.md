# Frontier-22 published integral and Radon--Nikodym propagation audit

Date: 2026-09-11

## Scope and deduplication

| Published item | SHA-256 | Prior disposition | Current disposition |
|---|---|---|---|
| `cor-additivity-of-the-nonnegative-lebesgue-integral` | `6cfbc962cb728c705d29240316fd3ea0fef21b58c26b9c540565893dd7123214` | clear | A-P |
| `def-integrable-real-and-complex-functions-and-their-integrals` | `ba43e04976130819cf23c7556ee6fa06aa341af90a9b7d31f406fbe620017d74` | clear | A-P |
| `thm-linearity-of-the-lebesgue-integral-on-l-one` | `9d9fa97f1174d181cbe9d7720e8e25d380d83c1243e7a70d3dd87050efdac51c` | clear | A-P |
| `thm-lebesgue-decomposition-exists-for-sigma-finite-signed-measures` | `ce6cd2ab1e3dc6c8b725f84f8c38ff3e17af749595e4f6f87583427f7e985a51` | A-R | A-P |
| `thm-radon-nikodym-density-exists-and-is-unique-up-to-almost-everywhere-equality` | `54ec8c39c1c99f292be0dccfdd287eef134453324f282266f7941e48638f3bff` | A-R | A-P |

All five complete targets and the exact integral clauses used by the active
Solovay-density draft were read. Before each move, the exact ID, aliases,
nonnegative additivity, finite positive/negative parts, L1 linearity,
Lebesgue-decomposition finite-density construction, RN existence/uniqueness,
zero-complement mechanism and supplier IDs were searched across the whole
canonical ledger. Each target had exactly one classification row. The moves
replace those rows and preserve the earlier clear or repaired receipts as
history; no new ID or duplicate is introduced.

## Exact propagation

`cor-additivity-of-the-nonnegative-lebesgue-integral` takes increasing simple
approximants, uses simple-integral additivity at every stage, and invokes the
now-A-P monotone-convergence theorem for the limit. Its extended nonnegative
limit-of-sums argument is correct, but both load-bearing suppliers require the
finite zero-complement refinement recorded in the foundation audit.

`def-integrable-real-and-complex-functions-and-their-integrals` defines positive
and negative integrals through the affected nonnegative-integral definition.
Its separation of positive/negative parts correctly prevents undefined
infinity subtraction, and the complex finite-modulus convention is sound, but
the definition remains load-bearing on the incomplete arbitrary-simple-integral
well-definedness proof.

`thm-linearity-of-the-lebesgue-integral-on-l-one` uses only finite nonnegative
integrals, so its real sign cases and real/imaginary recombination never trigger
the separately defective zero-times-infinity branch. It nevertheless directly
uses the affected integrable-function definition and nonnegative additivity.
The visible linearity proof is valid after the same upstream refinement.

`thm-lebesgue-decomposition-exists-for-sigma-finite-signed-measures` was
previously repaired for its AC contract, finite-density normalization, annular
assembly and signed subtraction. The current proof directly uses monotone
convergence at steps 2.1 and 5.1, nonnegative additivity in steps 1.1, 3.1 and
7.1, and the real-integral definition at steps 6.1--7.1. The repaired argument
is otherwise sound, but these newly found supplier gaps reopen its one A-R row
to A-P.

`thm-radon-nikodym-density-exists-and-is-unique-up-to-almost-everywhere-equality`
uses that decomposition for existence and L1 linearity on each finite
exhaustion piece for uniqueness. Its prior AC and finite-piece repair remains
valid. The new upstream foundation finding reopens its one A-R row to A-P.

Repair the finite zero-complement refinement in the simple-integral foundation,
then retain all five current visible arguments. No new theorem, axiom or
Phase-2 pair is needed.

## Current frontier impact

The active draft `lem-lc-solovay-density-locality-and-null-joins` cites both the
RN theorem and L1 linearity. Its measures are finite on the probability space,
its densities are integrable or bounded in `[0,1]`, and every scalar used in
the displayed estimates is strictly positive. Thus the same elementary local
foundation repair restores every consumed clause; none of the draft's stated
mathematics is false. Until that local bypass or the published repair is
installed, these are exact Step-5 prerequisite defects.

## Limits

This audit is bounded to the five complete targets, their exact foundation
uses and the active Solovay path. It does not reopen unrelated portions of the
prior A-R repairs or classify every transitive integral consumer. No published
or draft item was edited, no external source was newly consulted, and no
independent judgment or exhaustive discovery claim is made.
