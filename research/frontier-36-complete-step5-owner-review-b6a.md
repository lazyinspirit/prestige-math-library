# Step 5 owner review evidence — batch 6, group b

Date: 2026-09-29  
Run: `frontier-36-complete`  
Scope: independent review of the ten requested batch-6 items and their current
entries in `research/frontier-36-complete-batch-6.proof-contracts.json` for the
owner's Step-5 contract recertification.

The root `.autopilot/state.json` records run `frontier-36-complete` at
`5a-adjudicate`. The existing group-b report,
`research/frontier-36-complete-alpha-b-5a.md`, names each of the ten IDs below
exactly once. This note adds a separate current-carrier review; it is not an
engine stamp or gate verdict.

## Hash comparison

The Step-5 pre and post records are
`research/frontier-36-complete-step5-hash-6-pre.json` and
`research/frontier-36-complete-step5-hash-6-post.json`; they agree with each
other for all ten IDs. For nine IDs, the baseline item hash matches current
item bytes. The etale-radicial item has the source-label repair described
below, so its table row shows its Step-5 baseline and current hashes. All ten
manifest hashes match the current batch-6 manifest rows. The contract column
gives the Step-5 baseline contract hash followed by the current canonical
contract-entry hash. Current entries have `risk_review.status: complete` and
`risk_review.reviewer: alpha-b-5a`.

| ID | Item SHA-256 (Step 5 → current) | Contract SHA-256 (Step 5 → current) | Manifest SHA-256 (baseline = current) |
|---|---|---|---|
| `lem-constructible-stable-generalisation-open` | `1b9527b109fabaaa24db7562d427719d2f78b977b15f47708b0b5ff1a12ff08e` → `1b9527b109fabaaa24db7562d427719d2f78b977b15f47708b0b5ff1a12ff08e` | `9bd511ffe881462b8fa9a171092c1082e91154df122fdea1c3bed14d764b88d2` → `b84d3ade0ad74e5a68eaf1eb195d826407f6203ac520b24bf31057bbfff58940` | `e20c2aa93c85a4f90ae31760cda0671da27a32ba4685539b3070916697306b72` |
| `lem-fibre-injective-map-flat-cokernel-noetherian-target` | `745d3b617b58f1c0c494a699615e355592f44343244f321f9de8a20dd20c6c96` → `745d3b617b58f1c0c494a699615e355592f44343244f321f9de8a20dd20c6c96` | `bfdcbe066a8c01956e40f33228b5f7d49411848c8ea3268e06f51ac5cf0f944b` → `0d5f927514c737a89df2396f747949dc1cc65a50e075a786a53bac744b48b376` | `940a7a153596f6c536ac380319ceaf9ab568278e6b8819a81b9410fe5e521930` |
| `lem-free-fibre-flat-module-free-noetherian-target` | `6e5937cff4088e08480d906d862675364b3419186ad91128387e6c65449d1d0d` → `6e5937cff4088e08480d906d862675364b3419186ad91128387e6c65449d1d0d` | `85650cabdfa322541ecf5637318a97cc77e691e8ce04363d506f34bc4ede0d85` → `5971b46d001a4f06bb249c278be7c9c555c9807948ec72d1a9c8701b0dc2191d` | `8af690e47db06983396926a4912d5a07fd5760bff27e3cd63d6d7b5458cdcf62` |
| `lem-noetherian-local-flatness-criterion-finite-over-target` | `e00975e2e361beb8251a98f511a8045a69f43cfd87332b0bc755aea169fa6136` → `e00975e2e361beb8251a98f511a8045a69f43cfd87332b0bc755aea169fa6136` | `629b036783c573ca9b1bb1cfcf23d3292598c72301788b87cadcc64ebe697e35` → `2ed2c4b44de89ec0388535a91297fe6e208bf3630dbda664dca03485e41a12c8` | `039693e358ea5a230be67eb0b9586b2676bcf6d7199f77a8428a2e3b65d99b1e` |
| `lem-noetherian-approximation-fp-algebra-module-system` | `d71d1ffe44d6ff245f6c38272579b474a37bdcf0f4c43af0ef6b37df8c7ac3ab` → `d71d1ffe44d6ff245f6c38272579b474a37bdcf0f4c43af0ef6b37df8c7ac3ab` | `eeab447d373eab78cddc42880a5b17d176b6a68ee45ca3b46bd2be9b6c9cebda` → `5906bc18f5b74e2281d3ecb7af676f7a9d7300e7a8a0d937e49cf6c79cca0b81` | `142d05620d4b4e49ae8db2f6743258bb092fdf07f309660a849d0f335e822dd3` |
| `lem-noetherian-local-flatness-tor-killing-base-change` | `64ce19ff7149b2193eac1b85b47cb8b5b6acc6a0580ef8aaa421971680f21844` → `64ce19ff7149b2193eac1b85b47cb8b5b6acc6a0580ef8aaa421971680f21844` | `c15c8abef64296065f6ddc5cedadafcd324277f76bf19e3e44d745b18ad45781` → `621ee00cfc8eabbbd1c6a44133cac1c0e72885b81a9106bfc57017c61cd61eb6` | `537ea130b03a4c1f0b8bfec9e45863bf1aa42894ca6834cd23962eef65710e11` |
| `lem-eventual-flatness-noetherian-local-approximation` | `97e5ddcb7e6b38e36314f4e838931435b2df7ea232a656ca3a9deb377f6810eb` → `97e5ddcb7e6b38e36314f4e838931435b2df7ea232a656ca3a9deb377f6810eb` | `06301931f8f4ab699520598be61ea5b5a26d6e914bb792ca373a97d2af59c66b` → `e894cb856f71370057e4cc0a367a7f696ccf2f600124771c0593dab72fafe7cd` | `e528a1a7542ecee1bb1d1c4a1c93f30a021c198f66697c348252fec9536440d4` |
| `lem-noetherian-flatness-by-fibres-finite-target-module` | `829f4df14d19b54ecf7d034de21d702bc70a4b96162773cfa6b7d4cc287eb353` → `829f4df14d19b54ecf7d034de21d702bc70a4b96162773cfa6b7d4cc287eb353` | `4f1b28f2a6d1cf996032507eed36182f198d6dea2678de667528e4702def76a1` → `e183954aa3849ca71e4d8c30ae0695943bd8c2991624fdbb2c302d3c7c66f83e` | `05ec3f2f62bb143986e3c8f745f0ab5069ec0859ad6b8b1e0eada71d3c64165e` |
| `lem-etale-radicial-morphism-open-immersion` | `782207e4b2d319d6ea466f72c8a37b22cef4515d885c3b16a21f387af2dc8d66` → `7a70a149b218603e66381ed9ccfd5b17d6f4437209bc895204faff3588e84dcc` | `bef28aec2953afe659e48b235cf40fee4ad820ba4f76d483b5714e3d3bf8526e` → `42f3dc2ac5af01eec2f2f091c96770a7c7f6cddae158a4d788bf880d320471b1` | `74412f7b384fe3570ce271676f5387dca5edd1298af6725832c38082c44a7de0` |
| `lem-fibrewise-exact-flat-complex-lifts-noetherian-target` | `7e590441abdc89fd09313204ceb4327a3aef2871d684f327b5bea1f71df3a276` → `7e590441abdc89fd09313204ceb4327a3aef2871d684f327b5bea1f71df3a276` | `e239432bc305967dc940a5c891fab4e1e5059e659b2ab7278c62b866dc15d8f3` → `73672457523709039e63f58cb66135f8869451cb08b2681e70cd67e803159f10` | `c5f7d29faf9264173fc0601ae58c5003355270e0c8ce9174b4455232e8d9d8d0` |

The historical records retain hashes, not the former contract-entry JSON. Thus
the contract-hash changes are established, but this comparison alone cannot
attribute every changed contract byte specifically to `risk_review`. The
current entry was reviewed in full; no historical contract body was available
for a field-by-field delta.

## Item checks

- `lem-constructible-stable-generalisation-open` — The finite-union
  representation, affine-spectrum image construction, quasi-compactness of
  the finite product map, and complement argument support both directions,
  including empty cases. The current contract's 15 supplier excerpts match
  their named current items. Stacks tag 0903 supplies the spectral-space
  specialization result. No remaining mathematical issue found.
- `lem-fibre-injective-map-flat-cokernel-noetherian-target` — The induction
  on powers of the base maximal ideal uses flatness of the target correctly;
  Krull intersection uses only finiteness over the Noetherian target. Repeating
  modulo each proper ideal yields the Tor criterion for the cokernel without
  adding finite generation over the base. All 4 excerpts match. Stacks tag
  00ME has the same finite-over-target and flat-target hypotheses. No remaining
  mathematical issue found.
- `lem-free-fibre-flat-module-free-noetherian-target` — Lifting the finite
  fibre basis gives a fibre-injective map; the preceding lemma and Nakayama
  produce the isomorphism. Nonzero (M) guarantees positive rank, so (S) is
  an (R)-flat summand. All 3 excerpts match; Stacks tag 00MH states this
  result. No remaining mathematical issue found.
- `lem-noetherian-local-flatness-criterion-finite-over-target` — The
  equational relation-lifting step reduces injectivity of
  \(\mathfrak m\otimes_R M\to M\) to the assumed \(I\)-test. Tor vanishing
  propagates through finite-length quotients; Artin–Rees and Krull intersection
  then kill every finitely generated ideal-test kernel. The required finiteness
  is over (S), exactly where used. All 6 excerpts match; tags 00ML and 00MK
  support the criterion and its local-flatness step. No remaining mathematical
  issue found.
- `lem-noetherian-approximation-fp-algebra-module-system` — Finite equation
  and matrix data define the stages; right exact tensor base change gives the
  presentation system, and localization at contracted primes gives the stated
  local system. The item explicitly does not assert descent of flatness. All 5
  excerpts match; tags 00R1 and 00QX support the global and local approximation
  clauses. No remaining mathematical issue found.
- `lem-noetherian-local-flatness-tor-killing-base-change` — The two comparison
  maps are surjective under the stated quotient-flatness assumption and by
  right exactness; after localization, the image generated by the original
  Tor group is the target obstruction. A zero map kills that obstruction, and
  the finite-over-target criterion applies. The zero-module case is harmless.
  All 5 excerpts match; tags 00MM, 00MN and 00MO support these steps. No
  remaining mathematical issue found.
- `lem-eventual-flatness-noetherian-local-approximation` — The initial Tor
  obstruction is finite over (S_i). Its finite generating set vanishes at
  one common later stage because the colimit module is flat; the preceding
  Tor-killing criterion then proves flatness at that stage. The conclusion is
  correctly existential. All 5 excerpts match; tags 00R6 and 00QX support the
  source result and local approximation. No remaining mathematical issue
  found.
- `lem-noetherian-flatness-by-fibres-finite-target-module` — The surjection
  \(\mathfrak m\otimes_R M\to\mathfrak mS\otimes_S M\) and injective
  composite establish the required ideal-tensor injection. The quotient is
  flat over (S/\mathfrak mS), so the finite-over-target criterion applies;
  the zero case is covered. All 2 excerpts match. Stacks tag 00MP gives the
  corresponding nonzero case and stronger conclusion. No remaining
  mathematical issue found.
- `lem-etale-radicial-morphism-open-immersion` — The point/residue-field
  condition implies universal injectivity; the unramified diagonal argument
  gives a monomorphism, and the local faithfully flat affine argument proves
  it is an isomorphism on principal opens in its image. The stated absence of
  separatedness and quasi-compactness assumptions is respected. All 9 excerpts
  match. Review found a source-label metadata defect: the prior title assigned
  Theorem 41.14.1 to section tag 025F, while 025F is Section 41.14 and the
  theorem is tag 025G. Repaired the title to name both exact labels, preserving
  the working 025F URL, locator and proof. The 025F and 025G live Stacks page
  titles confirm those labels; Lemma 35.25.2 (tag 02LC) also supports the
  universal-injective étale result. The claim/proof remains mathematically
  supported; this is a repaired metadata defect, not a proof defect.
- `lem-fibrewise-exact-flat-complex-lifts-noetherian-target` — The top
  reduced injection lifts with flat cokernel; finite induction on the remaining
  complex proves exactness away from (F_0) and flatness of the final
  cokernel. The (e=1) case is explicit. All 2 excerpts match; Stacks tag
  00MI supports the exact-complex lifting result. No remaining mathematical
  issue found.

Across these items, 56 recorded supplier excerpts were checked against their
named current supplier text; all match. The cited Stacks statements were also
checked against the present claim hypotheses and conclusions.

## Remaining issues and disposition

- No mathematical defect or unresolved mathematical uncertainty was found in
  these ten current items or their current risk-review notes. The source-label
  metadata defect in `lem-etale-radicial-morphism-open-immersion` has been
  repaired; its current item SHA-256 is
  `7a70a149b218603e66381ed9ccfd5b17d6f4437209bc895204faff3588e84dcc`.
- `lem-etale-radicial-morphism-open-immersion` now has an item-plus-contract
  delta from the Step-5 snapshot and needs a Step-5 item-repair receipt. The
  other nine items match their Step-5 item hashes and remain contract-only
  deltas. No item, manifest, or contract changed as part of this review-note
  update.
- The missing historical batch-6 contract body prevents an independent
  field-by-field claim that the contract hash delta consists only of
  `risk_review`; treat that as an evidence limitation if contract-only delta
  provenance is required for this recertification.
- This review made only the source-title metadata repair described above. It
  did not edit contracts, ledgers, certification tooling or engine state, and
  did not retry or certify the Step-5 gate.
