# Phase 2 catch-up 24 — Step 3a scope review, group c

Run: `phase-2-catchup-24`  
Dispatch: `step3a-c-4ab0e77aac3a0ffb`  
Batches: 5, 6, 7

This is a scope review, not an audit of proof correctness. I read the current
pair manifests and coverage, the binding HA-10/HA-11a/HA-15 and CA-16M prose,
the canonical plan entries, the empty per-batch cross-frontier dependency
records, the source-recovery receipt, the relevant downstream supplier records,
and the Step-3 decision state. There is no current owner Step-3a decision for
any of these four pairs.

| A page | A/B inventory | Scope decision |
| --- | ---: | --- |
| `tor-flatness-and-global-dimension` | 41 / 8 | **sufficient** |
| `kunneth-exactness-and-splittings-over-principal-ideal-domains` | 5 / 2 | **sufficient** |
| `spectral-sequences` | 44 / 7 | **sufficient** |
| `koszul-euler-characteristics-and-hilbert-samuel-multiplicity` | 7 / 3 | **sufficient** |

## `tor-flatness-and-global-dimension` — sufficient

The pair covers its intended HA-10 role: tensor totalisation; the two
resolution constructions and balanced Tor bifunctor; functoriality, natural
balance, both long exact sequences and dimension shifting; flatness criteria
and tensor-exactness obstruction; cyclic and integer calculations; symmetry;
flat dimension and weak global dimension; comparisons and representative
semisimple/integer cases. Its examples exercise cyclic Tor, torsion detection,
flat nonprojectives, localisation, the low-degree double complex, symmetry,
handedness, and weak/global dimension. Projective/injective dimension and
global dimension are already owned by HA-9; unbounded totalisations and flat
derived replacements belong to HA-14/HA-16; the Noetherian and ideal-test
refinements are explicitly retained for the later regular-local development.
Those boundaries do not leave HA-10 without a defining or characteristic
result. Coverage uses complete relevant portions of Weibel Chapters 2–4 and
Sharifi §3.5, and all harvested extras now have stated destinations.

## `kunneth-exactness-and-splittings-over-principal-ideal-domains` — sufficient

This is deliberately a narrow repair supplier, and the five A items provide
the whole required interface: arbitrary-rank PID submodule freeness under AC,
cycle-boundary decomposition, the two-term tensor kernel/cokernel calculation,
the natural Künneth short exact sequence, and existence of a noncanonical
section. The two B items test both a nonzero Tor correction over the noninteger
PID `k[t]` and the field case where the cross product is already an
isomorphism. The algebraic-topology consumer supplies its separate
Eilenberg–Zilber comparison, while cochain variants remain on the existing
universal-coefficient/Künneth page; neither belongs in this repair pair.
Coverage reads the complete relevant arguments in tom Dieck and Friedman and
the arbitrary-rank PID freeness arguments in Garrett and Goel.

## `spectral-sequences` — sufficient

The pair adequately supplies the finite additive filtered-complex foundation
promised by HA-15. It includes filtration and associated-graded conventions,
filtered complexes and maps, induced homology filtrations, the full
`Z_r/B_r` construction, well-defined differentials and
`E_{r+1} \cong H(E_r)`, homological and cohomological conventions, morphisms,
stabilisation and collapse, bounded abutment, edge maps, extension problems,
and reindexing. Its examples include a genuine nonzero `d_2`, edge maps,
collapse, equal associated gradeds with unequal filtered groups, and a
nonsplit extension. General/infinite convergence, exact couples, double
complexes, comparison theorems, and five-term sequences are coherently
deferred to HA-16; derived applications belong to HA-17; multiplicative
spectral sequences are outside the stated additive track. Coverage uses the
complete cited ranges in Weibel and Sharifi plus Stacks Tags `012K` and
`00ZX`.

## `koszul-euler-characteristics-and-hilbert-samuel-multiplicity` — sufficient

The seven A items form the intended bridge: module-relative eventual
Hilbert–Samuel polynomiality, the Euler characteristic and coefficient-indexed
multiplicity conventions, finite-length Koszul homology, bounded-complex Euler
identities, the shifted-adic comparison, equality of multiplicity with the
Koszul Euler characteristic, and first-element reduction with its annihilator
correction. The three examples cover the empty sequence, the correction term,
and a redundant zero generator, including the distinction between coefficient
index and intrinsic dimension. This supplies every interface named for the
pending parameter-reduction consumer. General multiplicity additivity already
belongs to the Rees/Hilbert–Samuel page, and the top-dimensional associativity
formula and depth theory are not needed for this bridge. Coverage reads the
complete relevant arguments in Stacks Tags `0AZU`, `00JV`, and `00K4` and the
cited Hochster ranges, including the first-element argument.

## Consistency checks

- Current batch manifests and `research/plan-spec.json` agree exactly on item
  order and page requirements for all eight pages.
- Coverage checklist: batch 5 has 102 harvested results, batch 6 has 119, and
  batch 7 has 24, with zero errors or warnings.
- Current liveness-backed source check: 47/47 authored results remain backed.
- Whole-run manifest dependency check: 735 items, zero unresolved or
  normalised dependencies and zero errors. Canonical plan validation passes.
- The batch 5/6/7 cross-batch dependency records are all `[]`; the reviewed
  pairs use earlier published suppliers rather than one another.

The build-manifest narrative still describes the original Koszul bridge as
six A items, but the later binding CA-16M amendment, current batch manifest,
coverage, and canonical plan all agree on the necessary seven-item inventory.
I treat that sentence as stale census prose, not an omitted topic in the
current pair.
