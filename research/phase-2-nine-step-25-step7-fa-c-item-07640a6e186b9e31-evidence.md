# Final adjudicator evidence — group c, queue position 1/1

Run: `phase-2-nine-step-25`.
Item: `prop-the-tor-balance-isomorphism-is-natural-and-coherent-under-change-of-resolutions`.
Decision: **accepted-after-review**. Source status: **verified**.

## Scope and evidence inspected

Read `CLAUDE.md`, `README.md`, `SCHEMA.md`, `WORKFLOW.md`, and the exact queue
`research/phase-2-nine-step-25-step7-fa-c-item-07640a6e186b9e31.json`.
Inspected the current item in full, both Tor A/B pages under
`library/homological-algebra/`, the relevant entry in each batch-5 pages,
proof-contracts and coverage JSON file, including the complete contract's
boundaries and risk_review, and the group-c Step-7 context record.
Read the exact initial rejection and final Terra rejection in
`research/phase-2-nine-step-25-judge.jsonl`, the corresponding initial
confirmed-fatal row in `research/phase-2-nine-step-25-judge-adjudications.jsonl`,
and Sol's item-specific adjudication/repair account in
`research/phase-2-nine-step-25-alpha-step7-c.md`.

Read all nine direct suppliers in `items/`:

- `thm-left-and-right-projective-constructions-of-tor-are-naturally-isomorphic`
- `def-tensor-double-complex-of-two-projective-resolutions`
- `lem-the-rows-of-the-augmented-tensor-double-complex-are-exact`
- `lem-the-columns-of-the-augmented-tensor-double-complex-are-exact`
- `thm-long-exact-sequence-in-homology`
- `thm-projective-comparison-maps-are-unique-up-to-chain-homotopy`
- `thm-projective-comparison-map-exists`
- `prop-each-tor-construction-is-covariant-in-both-variables`
- `def-dependent-choice`

Also read the tensor-total definition, both resolution-defined Tor definitions,
the balanced-Tor definition and the false statement about equality of the two
constructions. These fix right-module-first tensor order, nonnegative supplied
resolutions, finite direct-sum diagonals, and differential
`d_Q tensor 1 + (-1)^p 1 tensor d_P`. DC supplies comparison maps and homotopies;
no assertion that DC supplies arbitrary projective resolutions is made.

## Independent mathematical adjudication

The original rejection concerned missing construction and quasi-isomorphism
data. Sol's current steps 1.1 and 2.1–2.2 now supply those data locally. The final
Terra rejection (2026-09-10T08:13:40.182Z, context
`1d83016ed5e5b348a3d40fefc778655e7ffe3070805e7c31a8cce687ef34e4d9`)
objects only that the earlier theorem's statement does not specify the ratio or
assert uniqueness of natural isomorphisms. That observation about the abbreviated
statement is accurate, but it is not a mathematical gap in this current proof.

The cited theorem's **proof step 3.1 explicitly constructs its asserted
isomorphism as H_i(b)H_i(a)^{-1}**, using the same augmentations in its step 1.1.
Thus the consumer's agreement clause identifies the actual construction in the
cited item, rather than deducing uniqueness from mere existence. Moreover the
consumer constructs the maps and proves their properties itself. Neither its
naturality square nor its coherence argument invokes uniqueness of arbitrary
natural isomorphisms. I do not infer such uniqueness; it is unnecessary here.
The page's balance-map convention and downstream balanced-Tor definition are
consistent with this interpretation. A statement-only interface loses this
construction detail, but the complete current mathematical items resolve it.

For completeness I checked the local kernel argument, including the edges.
The map a is augmentation on p=0 and zero elsewhere; b is augmentation on q=0
and zero elsewhere. Exact augmented rows/columns imply degreewise surjectivity.
Augmentation identities make them chain maps; at p=0 the surviving vertical
sign is +1. In ker(a), the p=0 term is the augmentation kernel. For a degree-n
cycle, eliminate its largest q component by a horizontal preimage in (p+1,q).
When p=0, membership in ker(a), rather than an unaugmented cycle equation alone,
is precisely what licenses this preimage. The preimage lies in ker(a), since
p+1>0. Subtracting its boundary changes only lower q, so the process ends after
finitely many steps. In ker(b), interchange p and q and solve the signed
vertical equation; the preimage has q+1>0 and belongs to ker(b). These arguments
include n=0, empty support and zero modules. Negative degrees are zero. The
short exact sequences with these acyclic kernels give both homology
isomorphisms by the declared long exact sequence supplier.

For comparison lifts g and f, tensoring gives a chain map T because both lifts
preserve degree and commute with differentials. Augmentation preservation gives
`a'T=(u tensor f)a` and `b'T=(g tensor v)b`. Taking homology and inverting H(a)
and H(a') proves exactly the ratio naturality identity in step 3.1. Homotopy
uniqueness and the covariance supplier identify maps from different lifts.
Identity lifts induce identity maps; composites lift composites; opposite
identity comparisons therefore induce inverses, and three-resolution
identifications satisfy the cocycle law. These checks establish the entire
claim with the stated DC assumption and supplied-resolution scope.

## Authoritative source verification

Consulted Weibel, *An Introduction to Homological Algebra*, Chapter 2:
https://math.mit.edu/~hrm/palestine/weibel/02-derived_functors.pdf

Read the complete relevant argument in §2.7: 2.7.1, Theorem 2.7.2 and its proof,
and Acyclic Assembly Lemma 2.7.3 and its proof, printed pp.58–61 (PDF pp.29–32;
extracted lines 976–1068). This verifies the sign convention and the two
augmentation quasi-isomorphisms giving balance through total-complex homology.
The source uses mapping cones; the local proof instead proves kernel acyclicity
by finite elimination. The DC accounting was checked in the local suppliers,
not attributed to Weibel. Screenshot retrieval for PDF indices 30–31 returned
cache errors; the complete relevant extracted text was successfully retrieved
and read, so no source argument remained unavailable.

Also consulted the opening of §3.2, printed p.68, in Chapter 3:
https://math.mit.edu/~hrm/palestine/weibel/03-tor_and_ext.pdf

This confirms the right/left module convention and explicitly points back to
the preceding chapter's balance result. Chapter 3's introductory assertion was
not substituted for the proof in Chapter 2.

## Focused checks and closure

- Targeted precheck: `node tools/tsx-run.mjs tools/precheck.mts items/prop-the-tor-balance-isomorphism-is-natural-and-coherent-under-change-of-resolutions.md` — PASS, 1 checked, 0 failing.
- Read-only manifest/interface check — PASS: all nine declared dependency files
  exist; the owning batch-5 manifest statement and ordered deps exactly match
  the current item; the owning scoped proof contract exists. Its six derivations
  and boundary/risk records agree with the proof on independent inspection.
- Current `itemHashGuard`:
  `4dfd392c262fe476fc5c4b650cec996f68c7e9b54beae0847d17bf07e9192e7a`.
  This agrees with Sol's recorded post-repair guard. No mathematical or metadata
  bytes were edited during this FA review.
- Read `briefs/tasks/frontier-dependency-ledger.md` and the owning batch-5
  consumer input (currently `[]`). No dependency repair, addition or changed
  edge was required, so there is no consumer-batch row to amend and no
  prerequisite-repair licence to append. Repair scope is unchanged.
- No new lemma, third consumer judgment, judge verdict, or pass stamp was created.

No unresolved mathematical obligation or blocker remains for this queue item.
Next action: record this accepted-after-review decision with the prescribed
terminal recorder, using source-status verified. The engine retains ownership
of subsequent run transitions and closure checks.
