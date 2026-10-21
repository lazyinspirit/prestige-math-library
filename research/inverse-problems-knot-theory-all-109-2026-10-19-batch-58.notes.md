# Batch 58 authoring notes — crossing signs, writhe, and linking number

Run: `inverse-problems-knot-theory-all-109-2026-10-19`  
Batch: `58`  
Owner direction: `research/inverse-problems-knot-theory-all-109-2026-10-19-owner-authoring-direction.md`  
Manifest: `research/inverse-problems-knot-theory-all-109-2026-10-19-batch-58.pages.json`

## Controlling plan and conflicts

The owner direction requires draft-only A/B carriers, statement-first prose,
frontmatter-only pages, actual local proofs, and no acceptance or publication.
The selected design is KT-03 in `research/plan-knot-theory-track.md`, lines
140–179: it controls the sign determinant, the positive Artin calibration,
total versus component self-writhe, the integer half-sum linking number, the
R1/R2/R3 proof route, the framing caveat, the blackboard self-linking result,
and the Hopf/Whitehead/kink examples. The page identities, category, order,
titles, and `requires` interfaces in the two `research/plan-spec.json` entries
match the design; the plan-spec entries have empty item lists, so they do not
specify additional item claims or a competing proof route.

Two prerequisite-map details needed mathematical separation before writing the
carriers:

1. `research/knot-theory-planning-2026-10-18/prerequisite-map.md`, the
   `lem-linking-number-even-sum-and-reidemeister-invariance` contract and the
   algorithm contract, include the framed-knot definition as a direct
   prerequisite. The definition's self-linking number in turn uses the diagram
   linking algorithm. Read literally, that produces a cycle. The mathematical
   dependency is one-way: the parity/invariance lemma establishes integer
   linking first; a separate push-off lemma establishes self-linking
   well-definedness; then the framed-knot definition uses those suppliers. The
   manifest records that acyclic repair, and the former unnecessary edges are
   omitted.
2. The plan's helper-result scope also includes equality with signed surface
   intersection, but its listed axiom is only `def-countable-choice`. The
   actual published supplier `thm-alexander-duality-for-compact-locally-contractible-subsets-of-a-sphere`
   states full AC, and
   `def-one-variable-alexander-module-of-an-oriented-link` inherits that
   hypothesis. To preserve the weaker `AC_ω` branch for diagram integrality,
   Reidemeister invariance, writhe, and blackboard framing, the intersection
   characterization is a separate theorem under full AC. Its scope is retained;
   the stronger axiom is explicit and is not propagated to the other consumers.

The extra local result
`thm-oriented-linking-number-scan-terminates-and-is-correct` gives the finite
algorithm's termination and output property as a theorem, as required for
algorithms. `lem-framed-knot-push-off-self-linking-well-defined` supplies the
normal-coordinate and isotopy argument required before the definition uses
self-linking. A proof audit then exposed an unproved planar-offset claim in the
blackboard-writhe argument. The new local result
`lem-blackboard-push-off-has-two-mixed-crossings-per-crossing` supplies its
finite local-coordinate and crossing-count proof before the blackboard theorem
uses it. It depends on the already authored push-off lemma, so its level is 5;
the blackboard theorem remains level 6. No supplier cycle remains after these
additions.

## Active-run evidence and boundaries

At initial inspection, `.autopilot/inverse-problems-knot-theory-all-109-2026-10-19`
reported the run `running`, stage `1-scaffold` at `0/109`, and no in-flight
worker. The dispatch supplied scheduling input hash
`69632ca90817955c25ab60d41e32cde58ca7d3d83e260e2e0e7ef6b68b8447ce`; batch 58
is `dependency_level: 0` with no prerequisite batches. The matching entry in
`research/inverse-problems-knot-theory-all-109-2026-10-19-batch-dependency-levels.json`
has `requires: []`. Its page-level `requires` are the two published pages
`geometric-braids-and-artin-generators` and
`oriented-links-braid-closures-and-markov-equivalence`.

The assigned supplier bodies were read before use. In particular:

- `def-elementary-geometric-half-twist` fixes the anticlockwise positive
  generator, with strand $i$ passing below the midpoint and the opposite
  crossing as its group inverse.
- `def-regular-oriented-link-diagram` supplies finite transverse double
  crossings, no triple points, over/under data and oriented strands.
- `def-oriented-reidemeister-moves` includes every orientation and height-order
  variant; R2 changes a mixed pair by opposite signs and R3 preserves crossing
  signs and over/under data.
- `thm-oriented-reidemeister-equivalence-theorem` has hypothesis
  $\mathrm{AC}_\omega$ and proves the finite move reduction. Its proof spends
  that axiom only through the general-position/track-avoidance suppliers; the
  move-realization direction is choice-free.
- `def-geometric-braid-with-setwise-endpoints`,
  `prop-stacking-of-geometric-braids-is-well-defined`, and
  `def-closure-of-a-geometric-braid` supply the endpoint permutation, product
  order, and closure-component cycle rule used by the B examples.
- The mod-two intersection suppliers support the parity argument; the tubular
  neighbourhood definition, theorem, and compact-chart uniqueness corollary
  support the push-off definition. The normal-bundle quotient and its smooth
  vector-bundle structure were checked, including their `AC_ω` hypotheses.
- The local intersection-sign, relative Whitney approximation, relative
  transversality, and compact-boundary-count suppliers were read in full for
  the signed surface theorem and the local push-off lemma.

No published item or other pair's page was edited.

## Item inventory and dependency levels

| Item | Level | In-run dependencies |
|---|---:|---|
| `def-oriented-crossing-sign-writhe-and-blackboard-framing` | 0 | none |
| `lem-linking-number-even-sum-and-reidemeister-invariance` | 1 | `def-oriented-crossing-sign-writhe-and-blackboard-framing` |
| `alg-oriented-linking-number-from-diagram` | 2 | crossing definition; even-sum lemma |
| `thm-oriented-linking-number-scan-terminates-and-is-correct` | 3 | algorithm; even-sum lemma |
| `thm-linking-number-equals-signed-intersection` | 4 | scan theorem; algorithm; even-sum lemma |
| `lem-framed-knot-push-off-self-linking-well-defined` | 4 | scan theorem; algorithm; even-sum lemma |
| `def-framed-knot-self-linking-and-seifert-framing` | 5 | push-off lemma; scan theorem; algorithm |
| `lem-blackboard-push-off-has-two-mixed-crossings-per-crossing` | 5 | crossing definition; push-off lemma |
| `thm-blackboard-framing-self-linking-is-writhe` | 6 | crossing definition; linking suppliers; framed-knot definition; local push-off crossing lemma |
| `thm-linking-number-is-invariant-and-writhe-is-not` | 7 | linking suppliers; framed-knot definition; blackboard theorem |
| `ex-knot-kt-03-worked-cases` | 8 | A-page sign, algorithm, and invariance items |
| `cex-knot-kt-03-boundary-case` | 8 | A-page sign, framing, and writhe items |

The complete claim text for each item is stored verbatim in its matching
`statement` field in the batch manifest and in the uninterrupted claim section
of the item file. This index records the intended scope without substituting
for those statements:

| Item | Claim scope |
|---|---|
| `def-oriented-crossing-sign-writhe-and-blackboard-framing` | Determinant crossing sign calibrated to the positive Artin generator; total/self-writhe and blackboard normal section. |
| `lem-linking-number-even-sum-and-reidemeister-invariance` | Even mixed sum, integer half-sum, move and ambient-isotopy invariance, symmetry, and orientation reversal. |
| `alg-oriented-linking-number-from-diagram` | Finite two-component scan; other component counts return `invalid-input`. |
| `thm-oriented-linking-number-scan-terminates-and-is-correct` | Scan termination, exact half-sum output, and invalid-input termination. |
| `thm-linking-number-equals-signed-intersection` | For a supplied regular diagram and spanning surface, diagram linking, meridian coefficient, and signed surface intersection agree. |
| `lem-framed-knot-push-off-self-linking-well-defined` | Small framed push-offs are embedded/disjoint and their linking integer is independent of radius, representative, and normalized chart. |
| `def-framed-knot-self-linking-and-seifert-framing` | Framing classes, relative integer torsor, self-linking, and surface-relative Seifert framing. |
| `lem-blackboard-push-off-has-two-mixed-crossings-per-crossing` | A normalized blackboard push-off yields exactly two same-sign mixed crossings for each diagram crossing. |
| `thm-blackboard-framing-self-linking-is-writhe` | Blackboard self-linking equals knot writhe and component self-linking equals self-writhe. |
| `thm-linking-number-is-invariant-and-writhe-is-not` | Two-component linking is invariant; R1 changes writhe/self-linking by its sign, while R2/R3 preserve writhe. |
| `ex-knot-kt-03-worked-cases` | Positive Hopf closure has linking 1; the specified Whitehead closure has linking 0. |
| `cex-knot-kt-03-boundary-case` | A positive R1 kink preserves unframed knot type while changing writhe and blackboard self-linking from 0 to 1. |

All other logical dependencies are exact published suppliers in the item
frontmatter and manifest. Page inventories are ten A items and two B examples,
well below the 100-item cap. A/B page files contain YAML frontmatter only; the
engine-owned `page_layout: compact-v1` pass has not been pre-empted.

## Conventions and mathematical coverage

The oriented diagram sign is $\operatorname{sgn}\det(v_{\rm over},v_{\rm under})$
in the plane orientation induced by the ambient orientation and positive
viewing normal. In the geometric braid chart $(x,y,t)$, viewing along $+y$
orients the $(x,t)$ projection by $(t,x)$; for the positive Artin half twist,
the over and under vectors are $(1,-2h)$ and $(1,2h)$, so the determinant is
$4h>0$. Reversing the chart orientation reverses all signs.

The evenness proof changes over/under decorations to make one projected
component pass over the other at every mixed crossing. Its signed sum is the
integer intersection number of the two projected loops, which is zero after a
linear homotopy of one loop to a point outside the other. Every switch changes
the signed sum by an even integer. R1 adds no mixed crossing; R2 adds a mixed
pair of opposite signs or two self-crossings; R3 preserves the three signs.
Symmetry and orientation reversal follow directly from the determinant.

The algorithm rejects component counts other than two and otherwise performs
one finite pass over crossings. The intersection theorem assumes a supplied
regular diagram and a supplied surface whose outward-normal-first boundary
orientation agrees with $K$. It defines $\operatorname{lk}(J,K)=m$ by the
unique meridian coefficient $[J]=m[\eta]$ in $H_1(S^3\setminus K;\mathbb Z)$.
Under full AC, Alexander duality makes $[\eta]$ a generator; a local oriented
coordinate calculation proves the positive meridian has surface intersection
$+1$. The proof compares the intersection homomorphism with the diagram
half-sum by explicit local crossing switches. Its final planar diagonal
intersection sign is the negative of the mixed determinant sign, so the
vanishing conclusion is unchanged. No surface- or diagram-existence theorem
is assumed. A framed knot uses a homotopy class of nonzero normal sections; the
relative framing integer is a winding number, self-linking is defined using a
small push-off, and the Seifert framing is only defined relative to a supplied
surface. The zero-self-linking conclusion is left to KT-04 as planned.

For blackboard self-linking, each original self-crossing contributes exactly
two mixed crossings of the same sign with a sufficiently small blackboard
push-off; half their sum recovers the original self-writhe. For the positive
Hopf closure $\widehat{\sigma_1^2}$, the two mixed signs are $+1,+1$. For the
Whitehead closure of $\sigma_1\sigma_2^{-1}\sigma_1\sigma_2^{-2}$, the endpoint
permutation is $(1\ 3)$ and the mixed signs are $-1,-1,+1,+1$. A positive R1
kink on the unknot changes writhe and blackboard self-linking from $0$ to $1$
without changing the unframed knot type. TikZ figures show the positive
crossing, Hopf closure, local two-crossing blackboard offset, and R1 kink; their
captions state orientations and over/under conventions, and no proof depends on
a drawing.

## Source ledger

| Source | Exact locator read | Supported claims and disposition |
|---|---|---|
| Calegari, *Introduction to Knot Theory*, <https://math.uchicago.edu/~dannyc/notes/knot_theory.pdf> | Full 48-page notes inspected; §3.3, pp. 26–29, including Definition 3.11, Proposition 3.12, full Theorem 3.13 discussion and proof through Proposition 3.17 | Half-sum convention, symmetry, R-move invariance, intersection characterization included with full local proofs supplied here. The additive-invariant proof architecture is out of scope and is not used as a proved supplier. |
| Elhamdadi–Hajij–Istvan, *Framed Knots* v6, <https://arxiv.org/pdf/1910.10257v6> | Full 21-page v6 inspected; §3, pp. 3–9; §3.1, pp. 5–7; Definition 5.1 and Theorem 5.2, p. 17 | Mixed half-sum, move checks, framing/self-linking, blackboard writhe, the local two-crossing push-off calculation, intersection characterization and Seifert framing included with local proofs. The zero-self-linking theorem is deferred to KT-04. |
| Weisstein, “Whitehead Link,” Wolfram MathWorld, <https://mathworld.wolfram.com/WhiteheadLink.html> | Complete entry inspected, lines 9–20 and references | Standard braid word and link identity used for the B example; crossing cycles and mixed signs recomputed locally. The source's linking-number value is corroboration, not proof. |

Full-text retrieval was verified by `node tools/source-fetch-check.mjs
--coverage research/inverse-problems-knot-theory-all-109-2026-10-19-batch-58.coverage.json
--stamp`: 3/3 sources passed and were stamped on initial retrieval; the final
stamp check again passed 3/3 with zero new stamps. No retrieval failure or
source drop occurred, so no `source_resolution` record was needed.

## Scoped validation and readiness

Final scoped validation:

- Batch dependency levels: the batch-only `dependencyLevels` check reports all
  12 descriptors with no errors; computed levels are 0, 1, 2, 3, 4, 4, 5, 5,
  6, 7, 8, 8. No cycle remains.
- The run-wide `node tools/item-dependency-levels.mjs check --run
  inverse-problems-knot-theory-all-109-2026-10-19` still exits 1 because 174
  pages outside batch 58 have empty scaffold inventories. It reports no level
  mismatches, and none of the 12 owned IDs is an error. The batch-scoped check
  passes.
- `node tools/proof-contract.mjs research/inverse-problems-knot-theory-all-109-2026-10-19-batch-58.proof-contracts.json
  --strict`: 0 errors, 0 warnings, 12/12 items.
- `node tools/tsx-run.mjs tools/precheck.mts <12 explicit item paths>`: 9 proof
  items checked, 0 failures; the 3 definition/algorithm items are not
  applicable to phase-format checks.
- `node tools/proof-layout.mjs <12 explicit item paths>`: 12 items, 29 steps,
  0 defects. `node tools/rendercheck.mjs <12 explicit item paths --json>`:
  12 checked, 0 errors, 0 warnings.
- Focused `depcheck` on the 12 owned IDs and `content-policy` on this batch
  manifest both pass with 0 errors and 0 warnings. The manifest and A/B page
  inventories match; both page bodies are empty; all 12 claim sections are
  uninterrupted and immediately followed by their references sections.
- Final source check with `--stamp`: 3/3 fetch-verified, 0 documented drops.
- `step1-decisions` records all 12 items as `ready` with `owner: false`, their
  full declared dependency IDs, and current hashes. A direct hash check confirms
  all 12 records remain closed. These are author readiness records, not an
  independent acceptance or a publication decision.
- Final active-run check: the run remains `running`; `1-scaffold` is at `7/109`
  covered with no worker in flight. The owner repair/recertification blocker
  points to `research/inverse-problems-knot-theory-all-109-2026-10-19-step1-blockers.json`;
  none of the 12 batch-58 IDs appears in that list.
  No autopilot state, plan, verdict, or other pair's item was changed.
