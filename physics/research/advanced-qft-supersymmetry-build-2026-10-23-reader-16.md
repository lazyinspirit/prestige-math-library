# Reader report — batch 16

Run: `advanced-qft-supersymmetry-build-2026-10-23`  
Role: independent reader  
Scope: batch `16`

## Opened inventory and page verdicts

Assigned pages:

- `qftx-eft-operator-quotients` — opened `library/quantum-field-theory-mathematics/qftx-eft-operator-quotients.md`. Verdict: pass. The A-page inventory agrees with the seven assigned A items, its three declared page prerequisites resolve, the page body is empty, and `page_layout: compact-v1` is present.
- `qftx-eft-operator-quotients-examples` — opened `library/quantum-field-theory-mathematics/qftx-eft-operator-quotients-examples.md`. Verdict: pass. The B-page inventory contains the assigned example, has no A-page items, its body is empty, and `page_layout: compact-v1` is present.

Assigned items, reviewed in supplier-to-consumer order:

1. `def-aqft-local-operator-and-dimension`
2. `lem-aqft-invariant-quotient-exactness`
3. `lem-aqft-finite-order-local-operator-space-finite-dimensional`
4. `def-aqft-lsz-amplitude-data`
5. `def-aqft-operator-basis-quotient`
6. `prop-aqft-integration-by-parts-eom-and-field-redefinition-redundancy`
7. `thm-aqft-field-redefinition-observable-equivalence-at-fixed-order`
8. `ex-aqft-operator-basis-reduction`

Supplier context opened for the assigned statements and arguments:

- Mathematical suppliers: `def-reductive-and-linearly-reductive-over-c`, `thm-complete-reducibility-and-reynolds-operator-for-complex-reductive-group`, `def-axiom-of-choice`, and the transitive action convention in `def-rational-action-on-affine-variety`.
- Required page context: `aqft-susy-math-foundations`, `reductive-affine-invariant-theory-and-geometric-quotients`, and `relations-functions-and-quotients`.
- The relevant cross-batch Grassmann suppliers on the foundations page: `def-qftx-superspace-grassmann-algebra` and `lem-qftx-grassmann-coefficient-calculus`.
- Source passages checked: Brion, *Introduction to actions of algebraic groups*, Theorem 1.23 and the Reynolds-operator argument following Theorem 1.24, printed pp. 8–9 ([official NUMDAM PDF](https://www.numdam.org/item/10.5802/ccirm.1.pdf)); Burgess, *Introduction to Effective Field Theory*, §2.1, equations (21)–(26), printed pp. 13–15 ([arXiv PDF](https://arxiv.org/pdf/hep-th/0701053)); Neubert, *Effective Field Theory and Heavy Quark Physics*, §2, equations (27)–(29), printed pp. 14–15 ([arXiv PDF](https://arxiv.org/pdf/hep-ph/0512222)); and Criado–Pérez-Victoria, *Field redefinitions in effective theories at higher orders*, §2, equations (2.2)–(2.6), §3, equation (3.2), §5.1, equation (5.5), and Appendix B, equations (B.1)–(B.11), printed pp. 32–34 ([arXiv PDF](https://arxiv.org/pdf/1811.09413)).

## Independent mathematical review

- The invariant-quotient lemma applies the published Reynolds exactness statement to the finite-dimensional rational quotient map (V\to V/N). Its kernel computation and the induced canonical isomorphism preserve the declared hypotheses and direction.
- The finite-dimensionality lemma bounds the monomials by the finite degree cutoff and then takes a weight-homogeneous subset; its invariant subspace is finite-dimensional.
- The operator quotient definition records only its stated (G)-stable relation subspace. It makes no completeness claim for all EFT relations.
- The field-redefinition proposition’s sign and order are correct under its declared first-variation, compact-support, and formal-truncation conventions. The scalar example independently gives the integration-by-parts sign, the mass-spurion class identity, and the quartic/sextic coefficients.
- The LSZ theorem is conditional on the supplied regulated change-of-variables identity, full graded Jacobian, transformed source, common limits, and stable simple-pole data. Equality of the normalized generating functionals gives the stated equality of connected functions and joint residues; it makes no claim that such data exist for a general QFT.
- The `tikzcd` exact-sequence diagram in `lem-aqft-invariant-quotient-exactness` has the stated inclusions and quotient maps; both rows are exact and the squares commute. No diagram repair was needed.
- All eight assigned items have uninterrupted definitions/statements/examples, with their links after the complete section. Proof steps remain separated and fully tagged.

## Repairs and evidence

1. **`def-aqft-local-operator-and-dimension` — Definition.** The authored definition did not state the action on the polynomial coordinate algebra used in (P_{r,q,D}^{G}), and the evaluation domain for formal odd components was only named. I specified a finite Grassmann coefficient algebra and coefficientwise-smooth component fields, defined polynomial evaluation, required the jet representation to preserve parity and assigned weights, and gave the induced left action ((g\cdot f)(z)=f(\rho_r(g^{-1})z)). This makes the invariant subspace and super-polynomial evaluation unambiguous. The action formula agrees with the function-action convention in the opened `def-rational-action-on-affine-variety` supplier.

2. **`prop-aqft-integration-by-parts-eom-and-field-redefinition-redundancy` — Statement, A4, and Proof step 1.4.** The inverse construction used Taylor expansion of a “local” map without specifying its regularity or finite-jet dependence. I defined the admitted (F) as coefficientwise-smooth in (x) and finitely many field jets, and stated its parity, equivariance, and support conditions. Step 1.4 now identifies the finite Taylor expansions that define the formal recursion. Burgess equations (23)–(24) and Criado–Pérez-Victoria equation (2.4) support the local perturbative setting; the finite-order inverse recursion is proved locally. This leaves the action change conditional on the stated variational and boundary conventions.

3. **Proof contract.** Updated batch-16 contract quotations for the revised local-operator definition, recorded the new graded-action boundary case, synchronized the proposition’s step 1.4 derivation, and corrected the existing stale step reference in its (F=0) finite check from `4.1` to `1.4`. Neither repaired item had a `verification.judge` record, so none was removed.

Focused interface checks of the definition change’s current-run consumers covered `lem-aqft-finite-order-local-operator-space-finite-dimensional`, `def-aqft-lsz-amplitude-data`, `def-aqft-operator-basis-quotient`, `prop-aqft-integration-by-parts-eom-and-field-redefinition-redundancy`, `ex-aqft-operator-basis-reduction`, `def-aqft-chiral-power-counting`, `def-aqft-scheme-and-wilson-coefficients`, `def-aqft-eft-scattering-channel`, `prop-aqft-quartic-contact-jet-matching`, `def-aqft-operator-basis-physical-data`, `ex-aqft-scalar-gauge-operator-power-counting`, and `ex-aqft-scalar-eom-operator-reduction`. Their recorded premises and definitions are compatible with the clarified parity-preserving polynomial action and weight convention; no out-of-batch repair was required. This was a focused interface check, not a full proof re-review of the other batches. The current-run theorem links the proposition only in its references and does not use it as a proof premise.

## Validation

- `reflow.mts` on both changed items: completed, unchanged formatting.
- `precheck.mts` on `def-aqft-local-operator-and-dimension`: 0 checked, 0 failing.
- `precheck.mts` on `prop-aqft-integration-by-parts-eom-and-field-redefinition-redundancy`: 1 checked, 0 failing.
- Final `proof-layout.mjs` call, batching both changed item paths: 2 items, 7 steps, 0 defects.

## Unrepaired defects and blocker

No confirmed defect remains in the assigned items or pages, and no uneditable finding was identified. No blocker remains.

Coverage limitation: I checked the exact published Reynolds-operator clause and its use in this batch, but did not recursively re-audit every transitive mathematical dependency of that already-published supplier. Cross-batch consumer review was focused on compatibility with the clarified definition; I did not re-audit those consumers' complete proofs.
