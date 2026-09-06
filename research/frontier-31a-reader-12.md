# frontier-31a / Step 6a reader / batch 12

## Scope opened

I independently read the two current draft pages:

- A: `library/algebraic-topology/relative-homology-excision-and-mayer-vietoris.md`
- B: `library/algebraic-topology/relative-homology-excision-and-mayer-vietoris-examples.md`

I read all 39 current assigned item files. The A inventory was
`def-singular-chain-complex-of-a-pair`,
`lem-singular-boundary-descends-to-relative-chains`,
`def-relative-singular-homology`,
`prop-relative-homology-is-functorial-for-maps-of-pairs`,
`prop-relative-homology-of-the-empty-and-total-subspace`,
`thm-long-exact-sequence-of-a-pair-in-singular-homology`,
`def-relative-homology-connecting-homomorphism-on-cycles`,
`lem-the-relative-connecting-map-is-independent-of-lift-and-representative`,
`thm-naturality-of-the-long-exact-sequence-of-a-pair`,
`def-barycenter-and-affine-cone-on-a-singular-chain`,
`def-barycentric-subdivision-chain-operator`,
`thm-barycentric-subdivision-is-a-chain-map`,
`def-barycentric-subdivision-prism-homotopy`,
`thm-barycentric-subdivision-is-chain-homotopic-to-the-identity`,
`lem-mesh-of-iterated-barycentric-subdivision-tends-to-zero`,
`def-cover-small-singular-chain-subcomplex`,
`lem-every-finite-singular-chain-becomes-cover-small-after-enough-subdivision`,
`thm-cover-small-singular-chains-compute-singular-homology`,
`thm-cover-small-inclusion-is-a-chain-homotopy-equivalence`,
`thm-excision-for-singular-homology`,
`cor-homology-of-good-pairs-is-reduced-homology-of-the-quotient`,
`lem-two-open-cover-small-chains-are-the-sum-of-the-two-singular-subcomplexes`,
`thm-short-exact-two-open-singular-chain-mayer-vietoris-sequence`,
`thm-mayer-vietoris-sequence-in-singular-homology`,
`def-mayer-vietoris-connecting-class`,
`lem-the-mayer-vietoris-connector-is-independent-of-small-chain-decomposition`,
`thm-naturality-of-singular-mayer-vietoris`,
`thm-simplicial-and-singular-homology-agree-for-simplicial-complexes`,
`cor-homology-of-spheres`, and
`cor-suspension-isomorphism-in-reduced-singular-homology`.

The B inventory was
`ex-relative-homology-of-a-disk-and-its-boundary`,
`ex-relative-homology-of-an-interval-and-its-endpoints`,
`ex-first-barycentric-subdivision-of-a-triangle`,
`ex-cover-small-chains-for-the-two-arc-cover-of-a-circle`,
`ex-mayer-vietoris-computation-of-sphere-homology`,
`ex-mayer-vietoris-computation-of-the-torus-first-homology`,
`cex-excision-fails-without-the-closure-inside-interior-hypothesis`,
`cex-one-subdivision-depth-does-not-make-all-singular-simplices-cover-small`, and
`cex-relative-homology-is-not-the-homology-of-the-set-difference`.

I also opened the complete direct dependency interface required by those claims:
the singular chain complex, boundary-square, induced-map, chain-map-boundary,
homological LES and its naturality, singular simplex/chain and boundary,
Lebesgue-number, reduced singular homology, simplicial comparison-chain,
simplex acyclicity, five-lemma, contractible-space, and deformation-retract
items. All are published. Their relevant definitions and conclusions support
the batch uses; no published-dependency defect was found.

For citation verification I opened the current full PDFs cited in the batch:
Hatcher, *Algebraic Topology*, Chapter 2, specifically the pair/excision
material at PDF lines 1271--1371, the Mayer--Vietoris construction at
3487--3525, and the comparison theorem including the infinite-dimensional
argument at 1937--2098; and May, *A Concise Course in Algebraic Topology*,
Chapter 14.3 at 6788--6845. These support the displayed pair LES, small-chain
chain-homotopy equivalence, excision condition, Mayer--Vietoris sign, compact
skeletal reduction, and well-pointed suspension qualification.

## Repairs made

1. In `ex-mayer-vietoris-computation-of-the-torus-first-homology`, exactness
   gave an extension `0 -> G -> H_1(T^2;G) -> G -> 0`, but the prior proof
   treated it as split without justification for arbitrary abelian `G`. I
   computed both relevant Mayer--Vietoris maps as
   `(a,b) -> (a+b,-a-b)` and exhibited the coordinate-circle section and
   cokernel generator. This supplies the split and the claimed `G ⊕ G`.
2. In `thm-simplicial-and-singular-homology-agree-for-simplicial-complexes`, I
   made the `G`-linear comparison, skeletal relative calculation, and
   compact-image reduction to a finite-dimensional skeleton explicit. The
   prior three lines did not establish the stated arbitrary-coefficient,
   arbitrary-complex scope.
3. In `ex-relative-homology-of-an-interval-and-its-endpoints`, I corrected the
   connector's ambient group from `H~_0(E;G)` to the actual LES target
   `H_0(E;G)`, while retaining that it corresponds to the reduced generator.
4. I updated the two material proof-contract derivation entries in
   `research/frontier-31a-batch-12.proof-contracts.json`. None of the three
   changed draft items contained a stale `verification.judge` record.

## Checks

- Reflowed each changed item. Two files changed formatting and the interval
  clarification was already reflowed.
- `node tools/tsx-run.mjs tools/precheck.mts` on all three changed items:
  pass (3 checked, 0 failing).
- `node tools/proof-contract.mjs research/frontier-31a-batch-12.proof-contracts.json --strict --items ex-mayer-vietoris-computation-of-the-torus-first-homology,thm-simplicial-and-singular-homology-agree-for-simplicial-complexes`:
  pass (0 errors, 0 warnings, 2/2 checked).
- Full batch precheck: pass (31 proof-bearing assigned items checked, 0
  failing).
- Full batch strict proof-contract check: pass (31/31 checked, 0 errors, 0
  warnings).
- `node tools/content-policy.mjs research/frontier-31a-batch-12.pages.json --json`:
  pass (39 scoped IDs, 0 errors, 0 warnings).

## Page verdicts and blockers

- A page: pass after the comparison-theorem repair. Pair chains, degree zero,
  finite-chain smallness, excision's closure-inside-interior hypothesis,
  Mayer--Vietoris signs, spheres, and the based well-pointed suspension scope
  are all retained.
- B page: pass after the torus and interval repairs. The counterexamples meet
  their claimed boundary conditions, including the nonuniform subdivision
  depth and the excision endpoint witness.
- `node tools/depcheck.mjs --quiet` does not pass repository-wide: it reports
  eight existing hard errors outside this batch and 474 existing warnings. It
  also reports this A page's
  `def-relative-homology-connecting-homomorphism-on-cycles` as missing even
  though I opened its current file and independently confirmed its matching
  frontmatter ID and filename. The scoped content-policy check accepts all 39
  batch IDs, so this contradictory global diagnostic is recorded as a
  validation blocker rather than repaired by altering the page or item.

No uneditable in-flight, page, or published-dependency finding remains.
