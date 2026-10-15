# Batch 24 authoring notes — `rpm-external-charge`

## Inventory and plan reconciliation

- Authored the eight A-page items reserved by the paired inventory. `rpm-external-charge-examples` remains empty because the approved inventory reserves no standalone B example for this pair; the B page records that disposition and points to the arguments on A.
- The track design’s prose and `plan-spec.json` both declare `em-lorentz-covariant-formulation` and `rpm-geometry-actions` as page prerequisites. The design’s embedded original-reservation JSON lists only `rpm-geometry-actions` in `deps`. The plan controls: A’s manifest and page retain both prerequisites.
- The original reservation lists `post-rpm-bmt-dipole-model` before `post-rpm-external-charge-action`. The actual BMT postulate assumes Lorentz-force translation, so its dependency now explicitly includes the action postulate and the authored manifest orders that supplier first. No item was removed or weakened.
- The design’s reserved `def-em-covariant-sign-conventions` is not a current item carrier. Its needed flat convention is supplied by the published `def-em-electromagnetic-tensor` (`F_{0i}=-E_i/c`, `F_{ij}=\epsilon_{ijk}B_k`). The local RPM definition treats curved-background `F` as prescribed data; it does not derive curved Maxwell equations or infer a curved field from the flat supplier.

## Dependency and interface audit

- The item-level DAG for this batch is: local mathematical lemmas at level 0; the charged/spinning model definition and gauge lemma at level 1; the external-action postulate at level 2; the BMT postulate and action-equivalence theorem at level 3; and the mass-shell/flat-work theorem at level 4. These are `0,0,1,1,2,3,3,4`, respectively. The page requires batch 22, so its page dependency level remains 1.
- Batch 22 now has a populated manifest and a current `def-rpm-spacetime-observer-and-worldline` carrier. I inspected its exact draft Definition and its declared geometry prerequisites. It supplies the prescribed smooth time-oriented Lorentzian background, signature, future-timelike worldline and proper-time/observer/chart/tetrad distinctions used by the model definition. It is a draft definition with no proof obligation; this is an interface check, not independent approval of batch 22.
- The ODE lemma depends on `lem-gr-future-causal-classification-by-a-timelike-field` for the positive-definite orthogonal complement and nonzero pairing with the time-orientation field. Its seven direct dependencies are declared in the item and manifest.
- `post-sr-massive-particle-dynamics` and `pthm-sr-momentum-and-four-force` are flat Minkowski inputs only. Curved kinetic momentum `P=mU` is defined locally; the flat assumption is invoked only in the coordinate force/power specialization.

## Source resolution

- Tong’s combined GR PDF, the Springer PPV page, Teschl’s combined ODE PDF, and Tong’s combined EM PDF each exhausted six source-fetch attempts. Their complete source histories and item-level alternative arguments/dependencies remain in `batch-24.coverage.json`; the original URLs are recorded as dropped retrieval paths, not dropped mathematical results.
- Active alternatives are Tong’s complete GR Chapter 1 excerpt, Poisson–Pound–Vega’s complete 2011 arXiv v3 text, Tong’s complete Electromagnetism and Relativity chapter, the complete BMT author copy, and the complete PSI curved-TBMT notes. The MIT OCW five-page Picard–Lindelöf lecture was inspected in full but its compressed PDF could not be page-counted after six attempts; its retrieval record is retained as dropped with the local IVP proof and exact published ODE supplier as the complete alternative.
- The original APS BMT URL had one prior HTTP 401 attempt. A search found the complete IHES author copy; both pages were inspected and the complete short-document receipt/hash is recorded. No item or source result was dropped.
- The sources support context and model formulation only. The local mathematical items carry their own conditional proofs; the curved/variable-field BMT law remains an adopted extension, not a consequence of the homogeneous flat BMT paper or an experiment.

## Check record

Validation results are recorded below after the final edits. A failed whole-run check may reflect unrelated unassigned empty pages or pre-existing dependency records; item-specific results are distinguished from those global blockers.
