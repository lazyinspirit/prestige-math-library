# Step 3a reader report — batch 121

## Scope and opened inventory

Reviewed batch `121` from its current manifest, `research/physics-non-fluid-129-2026-10-21-r2-batch-121.pages.json`.

Assigned pages opened:

- `library/thermodynamics-and-general-relativity/tgrx-renormalized-stress.md`
- `library/thermodynamics-and-general-relativity/tgrx-renormalized-stress-examples.md`

All five assigned items were opened and checked in dependency order at the point of final mathematical review:

- `def-tgrx-curvature-squared-variation-tensors`
- `def-tgrx-hadamard-stress-contract`
- `post-tgrx-semiclassical-equation`
- `pthm-tgrx-state-difference-stress`
- `ex-tgrx-quasistatic-is-not-backreaction`

Relevant item suppliers opened: `def-gr-curvature-tensor-and-derived-tensors`, `def-gr-fx-covariant-field-variations`, `def-smooth-fibre-bundle-and-local-trivialization`, `def-c-r-and-smooth-maps-between-smooth-manifolds`, `def-smooth-manifold`, `def-gr-smooth-lorentzian-objects`, `def-gr-smooth-covariant-two-tensor-field`, `def-gr-tensor-fields-and-components`, `def-affine-connection-on-a-smooth-manifold`, `def-gr-metric-selected-connection`, `def-gr-inverse-metric-and-musical-isomorphisms`, `def-lie-bracket-of-smooth-vector-fields`, `def-christoffel-symbols-of-an-affine-connection`, `def-contraction-of-a-mixed-tensor`, `def-cotangent-space-and-cotangent-bundle-as-a-disjoint-union`, `thm-gr-nondegenerate-levi-civita-and-tensor-derivative`, `thm-gr-curvature-tensoriality-and-coordinate-formula`, `thm-gr-curvature-algebraic-symmetries`, `def-qftx-wavefront-hadamard`, `def-qftx-local-wavefront-set`, `def-qftx-distributions-on-smooth-manifolds`, `def-test-function-space-d-of-an-open-set`, `def-test-function-topology`, `def-distribution`, `def-tgrx-exponential-ray-channel`, `lem-tgr-exponential-current`, `post-tgr-exponential-current-and-spectral-thermometer`, `post-tgrx-free-collapse-scattering`, `def-countable-choice`, `def-tgr-emitter-quasistatic-diagnostic`, `prop-tgr-ideal-evaporation-accounting`, `lem-tgr-emitter-quasistatic-bounds`, and `cor-mean-value-theorem`.

The three declared page suppliers were opened: `tgrx-hawking-approximation`, `gr-fx12-covariant-phase-space`, and `tgr-phs04`. I also inspected the batch-121 proof contracts, coverage record, cross-batch dependency file and notes as navigation and evidence, not as review verdicts. The current batch-120 manifest confirms that `post-tgrx-free-collapse-scattering` is an item supplier from batch 120.

## Review and repair

- `def-tgrx-curvature-squared-variation-tensors`: the inverse-metric variation, positive pairing sign, curvature conventions, compact support argument and units are coherent. The tensors are expressly supplied model data; the item does not claim a general existence theorem. Ford’s formulas were checked in §3, equations (3.7)–(3.10); the source uses different metric/curvature conventions, and no component signs were imported.
- `def-tgrx-hadamard-stress-contract`: the state, Klein–Gordon operator, local parametrix, smooth remainder, finite-order stress operator and local curvature correction are specified as model inputs. Under the stated smooth-remainder condition, the diagonal limit exists. The two-point subtraction does not multiply singular distributions.
- `post-tgrx-semiclassical-equation`: the displayed equation is an adopted effective model. The stated units match: curvature and Einstein terms have length degree $m^{-2}$, the curvature-squared tensors have degree $m^{-4}$ with $m^2$ couplings, and $(8\pi G/c^4)T^{\rm ren}$ has degree $m^{-2}$. No solution or empirical-validity claim is inferred.
- `pthm-tgrx-state-difference-stress`: the proof is valid under its exact common-prescription and smooth-remainder hypotheses. Subtracting the two definitions cancels the shared parametrix and local curvature term; it does not claim absolute scheme independence.
- `ex-tgrx-quasistatic-is-not-backreaction`: the ODE dimensions, cutoff interval and imported scalar bound are consistent. The residual is defined for a supplied metric/state not assumed to solve the equation. The example claims only that the scalar ODE inputs provide no residual estimate; it asserts neither an unbounded residual nor instability.

One definition defect was repaired in `def-tgrx-hadamard-stress-contract`: its local description of causal curves omitted the parameter domain, nonzero-tangent and endpoint conventions needed for $J^\pm$ and global hyperbolicity. It now gives those conditions and explicitly identifies the earlier exact definition in `def-qftx-wavefront-hadamard`. The affected theorem and postulate consumers were checked against that clarification and their hypotheses remain unchanged. The proof contract was updated. No stale `verification.judge` field was present on this definition.

Required checks after the edit:

- `reflow.mts`: unchanged item.
- `precheck.mts`: 0 proof steps checked, 0 failing; expected for this definition-only item.
- `proof-layout.mjs`: 1 item, 0 steps, 0 defects.
- The updated batch-121 proof-contract JSON parses with all five assigned contracts.

No TikZ/tikzcd diagrams occur in the assigned pages or items. No experiment item or empirical premise is in scope.

## Uneditable dependency finding

The current batch-120 postulate `post-tgrx-free-collapse-scattering` still describes a continuous-frequency mode family as unit one-particle normalized and uses $a_{\ell,\mathrm{out},s}(f)$ in its finite-time form without defining an outgoing one-particle/Fock representation or the translation map on packets. The current version supplies $B_{\ell,s}$ as a bounded form and defines $B_{\ell,\infty}$ through a direct-integral packet map, but the displayed expectation defining $B_{\ell,s}$ still uses that unspecified annihilation operator. The mode/packet normalization convention should be made explicit (for example, by defining the continuum modes as fiber or delta-normalized data and defining packet annihilators and their retarded-time translation, or by removing the operator expression and taking the bounded forms as the primitive input).

This is an `in-run-dependency` finding outside batch 121’s write scope. The assigned consumer used for routing is `def-tgrx-hadamard-stress-contract`, whose dependency list directly reaches the supplier. This supplier issue is nonfatal to the reviewed subtraction identity, which uses only its free-field and positive-state conventions, but leaves the supplier’s scattering-form interpretation underdefined. The current supplier bytes were re-read after they changed during this review; the findings JSON binds only the final current bytes.

## Page verdicts and blocker

- `tgrx-renormalized-stress`: page metadata, item placement and declared page prerequisites are consistent. The in-scope stress definitions and equation are sound after the local definition clarification. The page has the routed batch-120 supplier finding above as dependency maintenance context.
- `tgrx-renormalized-stress-examples`: example placement and its `tgr-phs04` prerequisite are consistent. Its scalar bound and residual comparison are sound as stated; no coupled-field or empirical conclusion is claimed. The B page has no body summary, consistent with the current compact page layout.

No blocker prevented completion of the batch-121 review. The mode-packet finding requires disposition by the batch-120 owner. The review did not audit every transitive mathematical ancestor of the supplier graph or unrelated carriers in batches 58 and 120; it checked the exact supplier definitions, theorem statements/proofs and source passages needed for the assigned claims.

## Source passages read

- Stefan Hollands and Robert M. Wald, *Quantum fields in curved spacetime*, [arXiv:1401.2026](https://arxiv.org/pdf/1401.2026): §2, local Hadamard form (Eq. 18) and state-independent singular part; §3.1, Hadamard normal ordering (Eq. 83), local covariance and curvature-ambiguity discussion. The source treats the parametrix construction and smooth remainder; the assigned contract explicitly takes its local data as supplied input.
- Ted Jacobson, *Introduction to Quantum Fields in Curved Spacetime and the Hawking Effect*, [arXiv:gr-qc/0308048](https://arxiv.org/pdf/gr-qc/0308048): §4.5, equations (4.29)–(4.30), stress expectation and local ambiguity; §§6.2.1–6.2.2, equations (6.25)–(6.26), thermal occupation and greybody factor. These support context only; the supplier’s packet-pairing convergence remains an adopted premise.
- L. H. Ford, *Quantum Field Theory in Curved Spacetime*, [arXiv:gr-qc/9707062](https://arxiv.org/pdf/gr-qc/9707062): §3, PDF pp. 19–20, equations (3.7)–(3.10), point splitting and curvature-squared variations. Ford’s conventions differ; only the variational role and counterterm structure were used.
