# Step-6 independent reader report — batch 3

Run: `phase-2-wave-1`  
Batch: `3`  
Role: reader-3

## Scope opened

I read the current manifest `research/phase-2-wave-1-batch-3.pages.json`,
contracts `research/phase-2-wave-1-batch-3.proof-contracts.json`, all four
assigned pages, and every current assigned item:

- `modular-traces-and-brauer-character-independence` (A):
  `lem-a-finite-dimensional-algebra-separates-its-simple-modules`,
  `lem-modular-trace-functions-of-simple-modules-are-linearly-independent`,
  `lem-modular-trace-depends-only-on-the-p-regular-part`,
  `lem-prime-to-p-roots-lift-uniquely-in-a-complete-discrete-valuation-ring`,
  `def-lifted-modular-trace-on-p-regular-elements`,
  `lem-reduction-of-teichmuller-lifted-traces-recovers-modular-traces`, and
  `thm-irreducible-brauer-characters-are-linearly-independent-on-p-regular-elements`.
- `modular-traces-and-brauer-character-independence-examples` (B):
  `ex-modular-traces-for-a-cyclic-p-prime-group`,
  `ex-brauer-character-independence-for-s-three-in-characteristic-two`, and
  `cex-ordinary-traces-on-p-singular-elements-do-not-define-brauer-characters`.
- `group-homology-transfer-and-low-degree-exact-sequences` (A):
  `lem-diagonal-bar-coinvariants-compute-group-homology`,
  `def-finite-index-transfer-on-normalized-bar-chains`,
  `lem-bar-transfer-is-a-chain-map-and-choice-independent-up-to-chain-homotopy`,
  `lem-corestriction-after-bar-transfer-is-index-multiplication-on-homology`,
  `thm-positive-degree-integral-homology-of-a-finite-group-is-annihilated-by-its-order`,
  `lem-bar-first-integral-homology-is-the-abelianization`,
  `lem-free-group-augmentation-ideal-has-the-generator-difference-basis`,
  `lem-low-degree-filtration-sequence-for-a-first-quadrant-bicomplex`,
  `def-free-presentation-lyndon-bar-bicomplex-and-edge-maps`,
  `lem-free-presentation-bicomplex-collapses-in-positive-middle-group-degree`,
  `thm-free-presentation-homology-five-term-sequence`,
  `def-crossed-homomorphisms-principal-coboundaries-and-first-cohomology`,
  `def-degree-one-restriction-inflation-and-quotient-action`,
  `lem-degree-one-maps-and-quotient-action-are-well-defined`,
  `thm-degree-one-inflation-restriction-exact-sequence`,
  `lem-bar-two-cocycles-classify-abelian-kernel-extensions`,
  `lem-pullback-and-coefficient-pushout-realize-bar-cohomology-maps`,
  `def-low-degree-transgression-for-a-group-extension`,
  `lem-transgression-kernel-is-the-image-of-restriction`,
  `lem-kernel-of-degree-two-inflation-is-the-transgression-image`, and
  `thm-inflation-restriction-transgression-five-term-sequence`.
- `group-homology-transfer-and-low-degree-exact-sequences-examples` (B):
  `ex-transfer-annihilation-for-a-cyclic-group`,
  `ex-free-presentation-five-term-sequence-for-a-cyclic-group`, and
  `ex-transgression-for-the-integral-heisenberg-extension`.

For the load-bearing interfaces I also opened the cited current dependency
statements, including the splitting modular-system/DVR definitions, the
finite-dimensional representation and split-simple-module interfaces, normalized
and unnormalized bar resolutions, derived group-homology convention,
projectivity/DC, and the published free-bar theorem. The manifest records no
cross-batch dependencies.

## Independent mathematical checks

- The finite simultaneous-density proof uses only a finite semisimple direct
  sum, obtains a complement by induction, and then bounds every finite selection
  before deducing that the original family is finite. The matrix-unit trace
  isolation does not use the identity matrix in bad characteristic.
- The modular trace proof keeps the p-regular and p-power factors
  separate. Its nilpotent-trace argument is over (k), and the root-lift proof
  uses the completeness and unit derivative supplied by the modular-system
  interface. Reduction is applied additively to the sum of lifted eigenvalues.
  Scaling a finite K-relation and reducing yields the stated Brauer-character
  independence; the full-rank minor also correctly supplies scalar-extension and
  cyclotomic-embedding independence.
- The C_m, S_3, and C_2 witnesses type-check. In particular the
  S_3 matrices satisfy the required relations, its two eigenlines are
  exchanged, and the Heisenberg factor set has the displayed negative
  transgression sign.
- For transfer, the right-coset retraction, coefficient tm, diagonal
  coinvariants, and prism homotopy have compatible actions. The inclusion after
  transfer is multiplication by the index. The finite cyclic resolution, free
  presentation five-term sequence, and their boundary cases m=1, G=1,
  and R=1 agree with the statements.
- The low-degree bicomplex chase has the stated filtration direction and signs.
  The extension arguments correctly distinguish the choice-free H1 portion
  from the AC-declared factor-set, normalizer, pullback, pushout, and
  transgression arguments. No unlicensed arbitrary choice was used where the
  item says only DC or no choice.

## Verdicts and edits

| Page | Verdict | Edit |
| --- | --- | --- |
| `modular-traces-and-brauer-character-independence` | Pass | None |
| `modular-traces-and-brauer-character-independence-examples` | Pass | None |
| `group-homology-transfer-and-low-degree-exact-sequences` | Pass | None |
| `group-homology-transfer-and-low-degree-exact-sequences-examples` | Pass | None |

No confirmed defect remained, so no item, contract, page prose, or verification
record was edited. There are therefore no uneditable findings for the companion
JSON artifact.

## Checks and blockers

- Focused `precheck` over the manifest contract scope: **32 checked, 0 failing**.
  (The two definition-only items without proof bodies are not counted by
  precheck.)
- `node tools/depcheck.mjs --quiet` reports the repository's existing global
  diagnostics (75 errors and 474 warnings), none located in an assigned batch-3
  page or item. This unrelated global failure prevents a clean whole-repository
  dependency-check pass but is not a batch-3 mathematical blocker.
