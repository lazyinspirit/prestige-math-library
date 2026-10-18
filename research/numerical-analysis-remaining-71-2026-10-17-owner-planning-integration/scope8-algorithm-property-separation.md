# NUFFT algorithm/property separation

Disposition: the termination/status/finite-containment argument now has its own ordinary typed lemma. The algorithm Definition is verbatim, all original Facts and all three original proof rows are preserved verbatim in the new lemma, and the entire existing transform-error theorem is untouched. This is the root-observed SCHEMA separation repair, not another mathematical repair of the already completed type1 FFT radius.

## Exact source changes and preimages

Before mutation, archived the current algorithm, entire error theorem and A page under `scope8-before-separation/`, preserving their actual paths. These are distinct from the earlier radius-repair preimages. Root explicitly authorized the new necessary same-frontier ordinary prerequisite and this exclusive batch8 source work.

Changed source path list:

- `items/alg-nufft-certified-gaussian-gridding-type1-type2.md`
- `items/lem-nufft-certified-gaussian-gridding-returns-a-status.md` — new typed lemma, same A page
- `library/numerical-linear-algebra-and-approximation/nonuniform-fast-fourier-transforms.md`

The new lemma is placed immediately after the algorithm and before the error theorem in the actual A-page item list. All original14 batch8 items and both pages remain. The algorithm now has `justified_by: [lem-nufft-certified-gaussian-gridding-returns-a-status]` and `provenance.proof: not-applicable`; it no longer contains phase Facts/Proof or a proof_strategy field. The ordinary lemma depends on the algorithm; no reverse deps edge is introduced. Root retains levels, manifests/contracts, verification markers, readiness and hashes.

## Preserved mathematical text and exact new interface

Read the current carrier and SCHEMA's full Algorithms section. SCHEMA separates algorithmic properties into ordinary proved result kinds and allows a justified_by well-definedness result that depends on the algorithm. The new lemma states that finite exact dyadic inputs and the original finite controls lead to a defined terminal status: malformed controls/structures give invalid-input; the empty-source branch gives its specified exact output; the finite candidate search returns its first certified tolerance-meeting candidate, or the first recorded inconclusive reason after exhaustion. Performed divisions, representability/twiddle guards and finite DAG containment remain the original checked properties. A rejected candidate is not returned as certified, while a later candidate may succeed. The lemma makes no new transform-error estimate.

Moved the existing six labelled Facts, Given and proof rows1.1,1.2,2.1 verbatim. Their original interval, FFT and norm suppliers remain exact direct premises of the new lemma. The Statement and proof of `thm-nufft-gaussian-gridding-error-and-type2-adjoint` were not used as a substitute termination proof, and that file was not edited.

The exact direct dependency inventory of the new lemma is:

- alg-nufft-certified-gaussian-gridding-type1-type2
- def-nufft-transform-types-and-mode-conventions
- def-nufft-finite-array-norms
- alg-certified-elementary-range-evaluation
- alg-na-computed-unitary-radix-two-fft
- alg-na-certified-unit-circle-phase
- alg-dyadic-square-root-bisection
- def-operationwise-real-complex-floating-point-model-with-sqrt-and-fma
- thm-outward-rounded-operations-are-isotone-and-dag-sound
- thm-na-computed-unitary-radix-two-fft-error-bound

## Actual child-call finiteness, not an oracle assumption

The previously read complete range evaluator, outward operations and actual computed FFT routine were retained as context. Fully read the actual phase algorithm and dyadic square-root algorithm for this separation. Added a separate preliminary proof row0.1, leaving all three original rows intact, to spell out the finite child-call argument:

- The range routine visits a finite DAG; every series truncates at the finite index J. Exponential scaling uses a finite integer number of squarings, logarithm bin enumeration has finite integer bounds from positive finite endpoints, and trigonometric reduction uses a finite explicitly bounded cell list from finite endpoints and a positive pi enclosure. An unresolved domain/normalization branch returns its specified status.
- The square-root routine starts with finite integer indices L,U and strictly reduces their positive integer gap by bisection until it is at most one. Directed finite-format conversion propagates overflow.
- The phase routine visits only the finite precision range p_phi,0 through p_phi,max and invokes the finite range evaluator at each trial.
- Each forward FFT returns at length one or at exhausted depth, or makes two calls with the depth cap decreased and a finite twiddle loop. Induction on the finite cap proves every call finite. Inverse mode adds only finite conjugations.

Thus the moved1.1 does not assume an unbounded elementary oracle, adaptive phase oracle or uncapped recursive FFT. Existing radius, sign, normalization, kernel, candidate order and precision/failure instructions are untouched.

## Same-owner old/current consumer check

Retained and checked all four actual previous closure items: algorithm, error theorem, small-multiplier example and clustered-source example. Their concrete uses remain those fully read in `scope8-final.md`, supplemented here by direct text identity and the new justification interface.

- The algorithm's complete Definition and Remarks are unchanged; only property material and its metadata moved. Its invocation/data contract is identical.
- The error theorem's entire current source is byte-identical to this move's preimage. Its F7 exact-center-grid containment and complete type1/type2 error proof remain intact; it gains no termination claim and loses no premise.
- The small-multiplier example still rejects before the FFT and uses the same Definition.
- The clustered-source example still receives the same conditional successful-run absolute certificate and no relative-error guarantee.

The new ordinary lemma adds the justified_by well-definedness carrier rather than changing any consumer's mathematical assumptions. It depends on the actual algorithm and the listed current premises. The error theorem and examples require no edits or new edges. The MRI/type3 definition remains separate. The A page changes only its item placement; no procedure or certificate prose was changed by this move. No outside canonical source was written.

Exact direct text comparisons in `scope8-algorithm-separation-identities.json` confirm the Definition, moved Facts, all three original proof rows and entire error-theorem file are preserved. No hashes are used or claimed.

## Final explicit layout and handoff

After the final source edit ran:

`node tools/proof-layout.mjs items/alg-nufft-certified-gaussian-gridding-type1-type2.md items/lem-nufft-certified-gaussian-gridding-returns-a-status.md`

Exit0: `proof-layout: 2 items, 4 steps, 0 defects`. The four steps are the additional child-call derivation and the three preserved rows; the algorithm now has no phase proof.

All writes are drained. No tests, full validators, gates, hashes, native-report/control edits or commits were performed. Root owns the explicit new inventory declaration, metadata/contracts/levels/readiness and current input binding. No native acceptance, extra review round or gate credit is asserted here.
