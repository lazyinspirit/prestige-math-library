# Step 3a reader report — batch 42

Run: `physics-non-fluid-129-2026-10-21-r2`  
Role: reader  
Batch: `42`

## Opened inventory

Assigned pages:

- `gr-fx14-holonomy-and-discrete-geometric-interface`
- `gr-fx14-holonomy-and-discrete-geometric-interface-examples`

Assigned items, read in dependency order:

- `thm-qftx-cw-fundamental-group-presentation`
- `def-gr-fx-thin-paths`
- `prop-gr-fx-connection-path-transport-exists`
- `prop-gr-fx-su2-compact`
- `prop-gr-fx-thin-path-quotient-groupoid`
- `def-gr-fx-connection-path-transport`
- `def-gr-fx-discrete-holonomy-model`
- `def-gr-fx-thin-path-groupoid`
- `prop-gr-fx-thin-transport-invariance`
- `prop-gr-fx-discrete-wilson-trace`
- `prop-gr-fx-vertex-haar-projection`
- `prop-gr-fx-s1-loop-noncontractible`
- `prop-gr-fx-path-functor-and-gauge`
- `prop-gr-fx-small-loop-curvature`
- `ex-gr-fx14-1`
- `ex-gr-fx14-2`
- `ex-gr-fx14-3`

Opened the 45 unique direct item suppliers needed to check those items:

`cor-normalized-haar-probability-on-a-compact-group`, `def-axiom-of-choice`, `def-axiom-schema-of-separation`, `def-based-loops-and-fundamental-group`, `def-bounded-linear-operator`, `def-category`, `def-determinant-of-a-square-matrix`, `def-dual-complex-representation`, `def-equivalence-relation`, `def-exterior-derivative-by-the-invariant-vector-field-formula`, `def-functor-and-contravariant-functor`, `def-gauge-group-of-a-smooth-principal-bundle`, `def-gr-fx-tetrad-spin-connection` (batch 41), `def-group-presentation`, `def-haar-averaging-operator-on-hom-spaces`, `def-hilbert-space`, `def-integral-of-a-form-over-a-smooth-singular-simplex`, `def-isomorphism-groupoid-and-connected-category`, `def-linear-isomorphism-and-invertible-linear-map`, `def-matrix-product-and-identity-matrix`, `def-orthogonal-projection`, `def-pullback-of-a-differential-form`, `def-real-and-complex-inner-product-space`, `def-smooth-differential-k-form`, `def-smooth-manifold`, `def-smooth-map-between-manifolds-with-boundary`, `def-smooth-singular-simplex`, `def-strongly-continuous-unitary-representation`, `def-tensor-product-of-complex-representations`, `def-topological-group`, `def-trace-of-an-endomorphism`, `lem-cw-quotients-and-collapse-of-a-contractible-subcomplex`, `lem-haar-averaging-projects-onto-the-intertwiner-space`, `lem-linear-matrix-odes-have-unique-global-solutions-on-a-given-interval`, `lem-the-set-of-functions-between-two-sets-is-a-set`, `prop-normal-closure-is-products-of-conjugates`, `prop-pullback-of-forms-is-smooth-functorial-and-preserves-wedges`, `thm-a-regular-level-set-is-an-embedded-submanifold`, `thm-determinant-multiplicative`, `thm-fundamental-group-of-finite-wedge-of-circles`, `thm-fundamental-group-of-the-circle`, `thm-heine-borel-rn`, `thm-seifert-van-kampen`, `thm-smooth-dependence-of-ode-solutions-on-parameters`, and `thm-stokes-theorem-for-smooth-singular-chains`.

Opened the 18 declared page prerequisites and checked their current page identity, status and relevant summary. The two GR pages are drafts; the other 16 are published mathematical pages. The assigned A-page's declared prerequisites are listed at lines 23–40 of its current carrier.

## Review and repairs

- The finite-CW presentation proof uses the exact connected-finite-CW hypotheses and the cited quotient, wedge, Seifert–van Kampen and circle suppliers. I changed its title to include “connected”; the Statement was already restricted to connected complexes.
- In `ex-gr-fx14-2`, I added the direct check that the defining action of all of `SU(2)` is a continuous unitary representation, as required by the graph model and the Wilson-trace result.
- In `prop-gr-fx-vertex-haar-projection`, I added the finite-dimensional coordinate argument establishing that each constructed `W_v` is a Hilbert space before applying the weak Haar-averaging supplier. I also specified the outer tensor-product inner product and finite-dimensional structure used for the joint orthogonal projection.
- In `ex-gr-fx14-3`, I changed the title to identify the established object as an invariant tensor; the item does not define the tensor-to-intertwiner identification needed by its former title.
- Updated the proof-contract derivations for `ex-gr-fx14-2` and `prop-gr-fx-vertex-haar-projection`. Those items had no `verification.judge` records to remove.
- Reflow and precheck passed for both proof-repaired items: `ex-gr-fx14-2` and `prop-gr-fx-vertex-haar-projection` (each reported unchanged by reflow and passed direct precheck). The final `proof-layout` run covered all four changed item paths: 4 items, 14 steps, 0 defects.
- No assigned diagram needed repair. The triangle arrows in `ex-gr-fx14-2` follow the stated traversal order, and the `ex-gr-fx14-3` diagram depicts the diagonal action on the two tensor factors. Their proofs do not rely on the diagrams.

## Unedited findings

The A-page frontmatter still declares three page prerequisites that are not supported as prerequisites by its current mathematics. These metadata edges are outside the authorized item/A-page-prose repair scope:

- `gr-fx12-covariant-phase-space` at `requires` line 24. The A-page itself says at line 49 that none of its local arguments uses that page's dynamical claims, and no assigned item depends on an FX12 result. Remove the prerequisite or identify the exact necessary page-level interface.
- `characters-and-the-orthogonality-relations` at `requires` line 39. That page expressly scopes its character theory to finite groups. The assigned graph arguments use continuous finite-dimensional representations of compact `SU(2)` and Haar averaging; they use no character or orthogonality result from this finite-group page. Remove the edge or identify an applicable result and its use.
- `uniform-spaces` at `requires` line 40. The assigned definitions and proofs use smooth manifolds, piecewise-smooth paths, finite CW presentations and compact-group Haar averaging; no uniform-space construction is used. Remove the edge or identify the exact needed uniform-space result.

## Page verdicts

- `gr-fx14-holonomy-and-discrete-geometric-interface`: the summary accurately states the local Lorentz transport, curvature sign convention, finite `SU(2)` scope and explicit exclusions. The item arguments are sound after the repairs above. The three unsupported prerequisite edges remain open for owner disposition.
- `gr-fx14-holonomy-and-discrete-geometric-interface-examples`: the summary accurately describes the three bounded examples and carries the full-AC qualification for the Haar example. The two diagrams match their statements; the example calculations are supported after the defining-representation check.

## Sources and coverage limits

I inspected relevant local full-text excerpts for Schreiber–Waldorf, *Parallel Transport and Functors*, §2.1 and the proof of Proposition 4.3 in Appendix B.3; Baez, *Spin Network States in Gauge Theory*, §2; Tong, *General Relativity*, the path-dependence/holonomy passages of §3.3.3 and the opening vielbein/curvature-form passages of §3.4.2; and Kowalski, *An Introduction to the Representation Theory of Groups*, the relevant passages in §§2.5, 3.4 and Theorem 5.2.1. Schreiber–Waldorf's smooth paths with sitting instants and globally smooth homotopies differ from the local finite-triangle convention; the local quotient and transport proofs were checked on their stated convention. Baez's source/target representation-slot convention differs from the local model, whose gauge action is proved directly. The small-loop sign and remainder were checked from the local four-segment expansion.

This review checked all assigned items, pages, direct item suppliers and declared prerequisite page summaries, but did not re-audit the complete transitive dependency closure or independently reopen every full source cited by published suppliers (including Hatcher's full text). No experimental observations or empirical claims occur in this batch. There is no blocker to this reader handoff.
