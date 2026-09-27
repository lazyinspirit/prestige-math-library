# Step 3 owner repair — geometric braids and Artin generators

This receipt records owner repair of the 10 A and 4 B items on the
`geometric-braids-and-artin-generators` pair after the interrupted Step 3b
author attempt. The [independent audit](frontier-35-ten-categories-geometric-braids-independent-audit-2026-09-24.md)
identified the defects. The local arguments and their current dependencies were
checked directly during repair. The audit's source-reading claims remain its own;
this receipt does not claim a new PDF retrieval or an independent judge review.

## Mathematical and scope repairs

- The isotopy definition now states the consequence of continuity: every
  individual top endpoint stays fixed during an isotopy, even though the
  boundary condition is expressed setwise. A vertical tangent is allowed;
  failure of the one-point-per-height graph condition is the obstruction.
- The stacking proof handles the empty braid and the one-strand case, and uses
  the open complement of a nonempty endpoint fibre to derive constancy from
  connectedness. The group proof contracts the right inverse at parameter 1,
  preserving the bottom point for nonpure braids. Its unit computation was
  already corrected in the interrupted author draft.
- The three-strand relation uses absolute strand positions and centred vectors
  about `q_{i+1}`. Its half-turn braid is `c + R_(pi u)(q_k-c)`, based at the
  actual configuration for every allowed `n,i`. Reflection and relabelling use
  the same centred vectors. The far-commutativity proof already used the
  nonvanishing of the diamond path, rather than the false constant-norm claim.
- The polygonal proof now separates `n=0`, `n=1` and `n>=2`, constructs a
  boundary margin for every nonempty braid, and applies the finite polynomial
  avoidance argument only when pairs exist. Its finite-dimensional induction
  retains a formally nonzero coefficient for each excluded polynomial. The
  manifest states the actual common breakpoint heights and the proper
  polynomial conditions. The crossing-generation lemma supplies its precise
  induction assertion, handles absent neighbors at extreme ranks, and proves
  convexity locally without depending on a B-page example.
- The Artin-surjectivity proof now writes its relators in the convention
  declared by its cited definition. The two-strand example distinguishes the
  spacing `h` from the circle homeomorphism `H`, uses the full lower-half lift
  at height `1/2`, and identifies the integral lift correction correctly.
  The three-strand example has the complete permutation chains and an accurate
  closed-ball bound.
- The last counterexample is titled as an isotopy of embedded arcs. Its middle
  arc has a horizontal shelf at height `1/2`; the height is nondecreasing but
  not strictly increasing. The false hairpin/turnback description was removed.
  The A/B page prose and batch manifest reflect the corrected geometry.
- The B page now requires the published
  `the-fundamental-group-of-the-circle` page in its frontmatter, batch
  manifest, canonical plan and braid track. This one edge reaches the covering,
  lifting, circle homeomorphism and trigonometric suppliers actually cited by
  the B examples. No item, claim or pair was dropped. A current owner Step 3a
  `proceed` receipt covers the reconciled pair scope.

## Focused checks and provenance boundary

All 11 proof-bearing item paths passed `tools/precheck.mts`; the 14-item batch
proof contract passed `tools/proof-contract.mjs --strict` with zero errors or
warnings. `rendercheck` passed the 14 items and two pages; `prosecheck` passed
the same 16 files with zero errors and two heuristic warnings.
`manifest-deps` passed the batch manifest. `validate-plan` passed the full
plan, including the new B-page edge, with an acyclic declared reading order.
The Step 3 scope check passed all 26 pairs after the owner scope receipt.

The global `depcheck --quiet` currently fails on broad repository findings,
including a Brauer-character page cycle and published-item warnings. Its
failure is not represented here as a batch-15 pass.

The last braid Step 3b author attempt ended unsuccessfully. These repairs and
mechanical checks do not turn it into successful dispatch evidence. A genuine
covering author retry must finish before the current item decisions and any
invalidated Step 3 auditor certificates are refreshed once against stable
carriers. No new author result or final Step 3 certification is claimed here.
