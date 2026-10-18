# Source and dependency receipt

Read CLAUDE.md and README.md in full before repository work. All authored output stays under this proposal directory.

## Existing mathematics actually read

Full bodies (not titles) of the universal oriented/unoriented Pontryagin–Thom correspondence, rational oriented-bordism detection, and signature cobordism invariance were read. PT is a correspondence, without a low-degree integral computation. Rational detection gives only a positive multiple of a boundary. Signature invariance applies in dimension divisible by four and does not supply Ω³_SO=0. None is used to infer single-copy integral vanishing.

Also read full bodies of adapted excellent Morse existence, self-indexing existence, equal-index handle attachment, local generalized planar Poincare–Bendixson, Hopf turning tangent, surface classification, smooth disk-arc isotopy extension, and compact boundaryless-source smooth isotopy extension. The hashes of these exact inputs are in `sources/local-input-hashes.tsv`. The classification theorem is topological only; the proposal does not treat it as a smooth-diffeomorphism theorem. The h-cobordism ordered-handle proposition was also read, but the proof instead uses its genuinely general compact-triad suppliers directly.

## Authentic complete external sources and precise reading limits

1. **Benson Farb and Dan Margalit, A Primer on Mapping Class Groups, author draft Version 5.0, 4 January 2011.** Complete 509-page author draft already cached at `scratchpad/source-cache/braid-groups/farb-margalit-primer-v5-author-draft.pdf`. Source URL: <https://web.archive.org/web/20111027114600id_/http://www.math.uchicago.edu/~margalit/mcg/mcgv50.pdf>. PDF SHA-256: `46c4cc848134ba38d6e7fe15462aac3069796db23b0e34a50a9018773d7fc7f2` (recomputed).

   Actually read this turn: §1.3 pp.38–43 (surface cutting and change of coordinates); §2.2.1 pp.50–51 (Alexander trick and explicit warning that it is not a smooth proof); §3.5 pp.81–82 (braid relation and twist transport); §3.6 pp.87–91 (inclusion/capping/cutting homomorphisms and their proofs); Chapter4 pp.93–109 (generation outline, curve surgery, nonseparating-curve connectivity, point-pushing formulas, complete Birman proof and boundary-capping discussion). Exact relevant extracted text is retained in `sources/farb-margalit-read-excerpts.txt`. I do not claim the rest of the draft read. The proposal authors an all-twists proof, weaker than finite generation, and avoids the draft's change-of-coordinates and HOME0/DIFF0 gaps by explicit smooth operations and the next source. It uses no named theorem as a substitute for its construction.

2. **Jiayong Li and Jordan Alan Watts, The orientation-preserving diffeomorphism group of S² deforms to SO(3) smoothly**, arXiv:0912.2877v2, 1 April2010. Complete 16-page PDF retrieved from <https://arxiv.org/pdf/0912.2877>, retained at `sources/li-watts.pdf`, SHA-256 `1356f31ce3a811f45ea1fe02bd5bf09a1da943f97bd8026aaab5b04d13f0f18e`. Searchable complete extraction retained at `sources/li-watts.txt`.

   Actually read: title, abstract and introduction; pp.8–11 local straightening and assembly; **all of §3 pp.12–16**, including Lemma3.2, Theorem3.3, Remark3.4, Lemma3.5 and proof of Theorem3.1. Only §3 square contraction is used. The source invokes Poincare–Bendixson and leaves the smooth time-rescaling function χ as a construction; the proposal binds the existing actual planar theorem, adds the logarithm/turning-tangent exclusion of periodic orbits and gives an explicit χ by positive-density integration. It corrects the right edge using the exact interval interpolation in the source. No use is made of the Sobolev bounds or global sphere deformation from §2.

No fabricated Smale reading is claimed. Attempts at the AMS original were blocked (403); one Ranicki filename retrieved a different paper, recognized from its title page, and the irrelevant file was removed. Li–Watts provides the complete modern proof actually used.

## Scope of delivered interface

`constructive-oriented-three-boundary.md` gives a smooth single-copy boundary construction through smooth disk isotopy, all-twists generation, an actual Heegaard splitting from existing general Morse suppliers, and the local two-handle trace of a gluing twist. It includes disconnected/empty inputs and a marked fixed-cap corollary. It does not assert relative handle cancellation/trading, Kirby completeness, a chosen surgery diagram's uniqueness, canonical choices, or integral degree-four bordism detection. These remain the other owners' interfaces.

## Precision repair after parent read

The genus-induction collar step now removes the entire first derivative `[[1,a],[0,b]]`, including tangential normal shear, by an explicit positive upper-triangular jet path and supported linear vector-field flow. Only after the first jet is identity does the proof use a Taylor estimate; the remaining collar removal is an explicit cutoff interpolation with derivative `I+O(δ)` and its global inverse.

The planar kernel step now gives the compact-family disk-to-frame deformation in exponential coordinates, including its smooth q=0 integral formula. It also spells out two-parameter track velocity extension, finite-cover patching, relative-edge behavior, ODE lifting and the quotient-of-lifts argument. Thus it does not infer two-parameter monodromy invariance from an unproved disk-group contractibility statement.


## Direct mean-value supplier binding

Read the full authored body and seven proof steps of `lem-mean-value-inequality-for-a-differentiable-banach-valued-curve`. The proposed helper now declares it directly as a dependency and Fact F7, applies its Banach-valued curve estimate to displacement on a straight segment in step 4.2, and carries its exact Statement quotation and use in the contract payload. The science and Statement are otherwise unchanged. Proposal origin is now `pipeline` with `pipeline_run: non-ml-math-remaining-81-2026-10-18`, matching the A78 owner carrier.
