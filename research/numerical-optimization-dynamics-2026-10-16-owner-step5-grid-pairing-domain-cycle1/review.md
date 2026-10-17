# Distinct Sol Step-5.4 grid-pairing domain concern — first cycle

Reviewer: Codex `/root/resume_parabolic96`. Run: `numerical-optimization-dynamics-2026-10-16`. This is research-only first-cycle work on the distinct `keep:false` rejudge of `def-uniform-grid-and-difference-operators`. Actual native Step 5.5 must genuinely adjudicate/adopt any proposal later. This review supplies no native acceptance and changes no canonical source, metadata, ledger, tools, runtime, verdict or original attribution. No hashes, checks, tests, gates, dispatches or commits were performed.

## Confirmed defect and smallest repair

The actual current Definition says: “For edge arrays p,q indexed by j=0,...,N−1, the interior inner product, norm, and edge inner product are” and then gives an interior sum from 1 to N−1. For any N>=2 and h>0, the allowed edge array p=(1,0,...,0) is nonzero but the alleged interior inner product has <p,p>_h=0. The original Sol verdict is correct. Its objection is to the declared domain of the interior *inner product*, not to the interior sum itself. Merely adding index 0 to that sum would break valid interior-node SBP and wave-energy conventions; merely removing edge arrays would discard valid difference arrays. Neither is proposed.

The draft separates the three actual spaces:

- Full nodal arrays have indices 0,...,N, and may retain any prescribed endpoints.
- Interior arrays have indices 1,...,N−1 and use <u,v>_h=h sum_(j=1)^(N−1) u_j conjugate(v_j), with its genuine positive norm.
- Edge arrays have indices 0,...,N−1 and use the already correct distinct <p,q>_(e,h)=h sum_(j=0)^(N−1) p_j conjugate(q_j), with a positive norm on every edge array.

As current consumers already do, full nodal arguments in the interior pairing are shorthand for their interior restrictions. On the full nodal space that pullback is explicitly semidefinite and is only a seminorm. On the zero-endpoint subspace, restriction to the interior is bijective, so the same notation denotes an actual inner product/norm. The draft identifies interior arrays with their zero-endpoint extensions only when viewing -Delta_h as an operator on this homogeneous space. Thus Delta_h maps full nodal arrays to interior arrays, whereas D_+ maps full nodal arrays to all N edge entries. Generic nonzero endpoint data are still admitted and retained in the SBP boundary terms. Real/complex scope and first-entry linearity remain intact.

Positive definiteness follows immediately because h>0 and each relevant index appears in its own sum: a zero sum of |z_j|^2 forces all entries of the interior array, respectively edge array, to vanish. For homogeneous nodal arrays this additionally forces both endpoints, already zero, to vanish. For the offending p=(1,0,...,0) viewed as an edge array, the repaired edge norm squared is h>0; it is never called an interior inner product on that edge space. No computational test is needed for this finite-sum argument.

This is one finite-interval Definition replacement only. Every numerical formula, periodic/infinite convention, N>=2 assumption, spacing, difference stencil, boundary condition, scheme, initialization, and consumer formula is retained. No new full-nodal norm is needed or asserted.

## Distinct from earlier b55 research

The prior `owner-step4-b55-edge-pairing-proposal` concerned an older finite edge formula which applied D_+ a second time to its arguments. The actual current Definition already has the correct componentwise edge sum. This fresh concern arose because the current wording wrongly applied the *edge-array* domain to all three displayed expressions. The new guarded draft starts from actual current bytes, not the old packet. Do not reapply the older patch. Its original evidence and reviewer attribution remain untouched.

## Supplier-first and same-reviewer affected uses

Read the actual current supplier Definition first, then the full current SBP and Poincare suppliers and their directly affected Dirichlet energy consumer. The following are focused checks of the changed typing interface, not broad audits of healthy proofs.

`lem-dirichlet-grid-summation-by-parts`: u and v are full complex nodal rows on 0,...,N. Its left side <u,-Delta_h v>_h is correctly defined by interior restriction of u and the interior output of Delta_h v. Its edge side pairs the two N-entry arrays D_+u and D_+v with the existing componentwise edge pairing. The proof telescopes to h^(-1) sum_(j=1)^N (u_j-u_(j-1)) conjugate(v_j-v_(j-1)), plus u0 conjugate((D_+v)0) minus uN conjugate((D_-v)N). This is exactly the repaired typed pairing, with no boundary values discarded. Zero endpoints give the self-adjoint/nonnegative operator on the interior/zero-extension identification. Its Statement, Facts, both proof steps and boundary terms remain unchanged.

`lem-dirichlet-grid-poincare-inequality`: w has zero endpoints. Its interior norm is therefore positive definite on that space, and its proof uses precisely the N-edge norm h^(-1) sum_(i=0)^(N−1)|w_(i+1)-w_i|^2. The telescoping argument, factor L=Nh, and conclusion need no change. No valid edge array is excluded.

`thm-dirichlet-leapfrog-discrete-energy`: U^n, V^n, averaged rows and centered time differences are all full nodal arrays with zero endpoints. Their interior norms are genuine norms under the corrected Definition. D_+ of each is an N-entry edge array. Proof steps 1.1–2.1 use the existing real edge polarization and inverse inequality with 4/h^2; step 3.1 uses Poincare on zero-endpoint rows; step 4.1 pairs the interior recurrence and uses SBP. Every occurrence is now typed correctly without changing any formula, conservation law, strict-CFL positivity scope, or mesh-uniform bound. No source edit is required.

`def-centered-leapfrog-wave-scheme`: it imports only nodes, spacings and index sets; its finite interval is homogeneous Dirichlet, its periodic branch is unchanged. Its Definition and initial rows remain unchanged.

The other direct uses of the root Definition import unchanged periodic/infinite conventions or geometry, so the new Statement/Definition delta stops at those interfaces: `def-periodic-one-way-advection-schemes` uses its own periodic/infinite stencils and finite inflow/outflow row, without an interior pairing; `alg-age-structured-renewal-upwind-finite-volume` independently specifies age/time cells, cell masses and face fluxes, without the wave pairing; `lem-periodic-advection-amplification-symbols`, `thm-periodic-centered-wave-amplification-and-endpoint`, `thm-nearest-neighbor-cfl-domain-condition`, and `ex-wave-cfl-endpoint-and-energy-breakdown` use the unchanged periodic norm/edge convention or infinite-grid domain. Their relevant current linked Fact/Definition interfaces were inspected; no independent broad proof audit is claimed. Their dependent periodic/advection/renewal branches inherit no changed premise and need no mathematical propagation.

The home hyperbolic page lists the same items and describes separate Dirichlet energy and periodic results accurately. It needs no change. Actual current dependency/alias closure discovery and explicit propagation stops are in the JSON files. No consumer source correction is required anywhere in the affected cone. Literal whole-Definition quotation mirrors are a separate native metadata currency duty, recorded as future operations only.

## Authoritative source extent actually read

Downloaded the complete cited Süli lecture notes from `https://people.maths.ox.ac.uk/suli/nspdes.pdf` to /tmp and read PDF pp.85–89 (printed pp.81–85), §6.3. PDF p.86 explicitly separates the interior sum j=1,...,J−1 from a derivative-edge sum j=1,...,J and applies SBP to zero-boundary nodal functions; PDF p.87 uses the full derivative-edge sum and interior inverse estimate. Reindexing those derivative edges by i=j−1 gives this repository's edge indices 0,...,N−1. The source supports distinct interior/edge index ranges and homogeneous-boundary identification; it does not support calling an interior sum an inner product on arbitrary edge arrays. The complex conjugates are the repository's existing Hermitian extension, locally verified by the unchanged finite-sum SBP proof. No new theorem or additional source claim is introduced. Relevant full pages, not the complete notes, were read; unrelated source formulas and proofs were not audited.

## Native evidence and handoff

`original-verdict-observation.json` preserves verbatim matching native verdict/attempt ledger rows, including original Luna keep:true and distinct later Sol keep:false, with their original timestamps, bound hashes and reasons. Existing hash strings are observed evidence, not hashes computed here. Neither verdict is rewritten or extended to proposed bytes. Native 5.5 must adjudicate the actual current source context and genuinely adopt a repair before any later currency/certification claim.

`guards/` contains exact raw current preimages. `proposed/items/def-uniform-grid-and-difference-operators.md` and `source.patch` are the precise source proposal. Before later integration the owner must require raw equality against the corresponding guard; changed carriers require a fresh rebase, not overwriting. The root owns hashes and any recertification. `future-quote-mirrors.json` contains exact-before/after quote replacements only for current run proof contracts citing this Definition; none has been applied to canonical metadata. It deliberately preserves source/fact/uses fields and historical risk-review attribution. Current native Step 5 can assess those mirrors after source adoption. This packet is first cycle, with no second review/repair cycle performed.
