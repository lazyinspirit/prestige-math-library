# Step 3a scope review — pair `geometric-braids-and-artin-generators`

- Run: `frontier-35-ten-categories` (stage `3a-scope`), dispatch label
  `step3a-pair-geometric-braids-and-artin-generators-32c744220e2176d1`
- Role: alpha (scope reviewer; not owner, not item author)
- A page: `geometric-braids-and-artin-generators` (batch 15, order 729,
  `braid-groups`, 10 items: 3 definitions, 4 lemmas, 2 propositions,
  1 theorem)
- B page: `geometric-braids-and-artin-generators-examples` (batch 15, order
  730, `braid-groups`, 4 items: 2 examples, 2 counterexamples)
- Decision: **`sufficient`**, recorded through
  `node tools/step3-decisions.mjs record-scope --run frontier-35-ten-categories
  --page geometric-braids-and-artin-generators --decision sufficient`.
- Date: 2026-09-24.

This review decides scope only. It is not an item approval, not a proof
judgment, and not an owner record. No scaffold, manifest, item, design or
engine artifact was edited.

## 1. Intended subject and role in the library

The controlling prose design is BG-1 of `research/plan-braid-groups-track.md`:
the A section at lines 191–216 (page id/requires lines 193–198, proposed-item
table lines 200–210, "Proof seam" lines 212–216) and the examples section at
lines 218–228. The design fixes the intended subject as: the parametrized
strand model of a geometric braid, isotopy relative top and bottom, well-defined
stacking and the group law, the Artin half twists $\sigma_i$, the two geometric
relation families (disjoint-support commutativity and the three-strand braid
relation), generation by half twists, and **surjectivity only** of the Artin
presentation onto the geometric braid group. The examples page is designed to
witness integer twists in $B_2$, the three-strand relation, and the two
definition boundaries (setwise versus pointwise endpoints; arbitrary link
isotopy versus braid isotopy).

The current `research/plan-spec.json` controls page identity: order 729 (A),
730 (B), category `braid-groups`, companion pairing, and the declared
`requires` list — all four entries agree with the design
(`homotopy-and-homotopy-equivalence`, `subspaces-products-and-quotients`,
`free-groups-and-presentations`, `braided-and-symmetric-monoidal-categories`).
The plan's item inventories for both pages are empty (unspliced), so the batch
manifest `research/frontier-35-ten-categories-batch-15.pages.json` is the
inventory of record for this review, exactly as Step 1 recorded.

| prerequisite | order | status |
| --- | --- | --- |
| `homotopy-and-homotopy-equivalence` | 289 | published (library/topology) |
| `subspaces-products-and-quotients` | 251 | published (library/topology) |
| `free-groups-and-presentations` | 60 | published (library/abstract-algebra) |
| `braided-and-symmetric-monoidal-categories` | 365.029 | published (library/category-theory); owns `def-braid-group-by-the-artin-presentation` |

All four are earlier than 729. A page-level `requires` closure computed from
`research/plan-spec.json` (108 pages) contains every page carrying a direct
prerequisite of this pair's items, including `compactness-in-metric-spaces`
(order 120), which carries `thm-heine-borel-rn`, `thm-extreme-value-metric` and
`thm-heine-cantor-metric` used by the polygonal-representatives lemma.

Step-1 drift verdict: `no-drift` (`frontier-35-ten-categories-alpha-step1-drift.md`
lines 149–153): stacking, inversion, half-twist generation and only
surjectivity; presentation completeness is expressly later, so no backward edge
is licensed. The run's owner direction
(`frontier-35-ten-categories-owner-authoring-direction.md`) does not mention
this pair; the run's two owner deferrals (`…-deferred-pairs.json`,
`…-deferred-items.json`) concern batch 8 and the Easton pair only, so this pair
is fully inside the authorized scope.

Role and consumers. The pair is the first page of the `braid-groups` category
and the geometric foundation of the braid track. No published item or page
mentions a geometric braid (recursive scan of `library/` and `items/`,
21,350 Markdown/JSON files: 0 hits for the phrase, 0 hits for any of the 14 new
item IDs), and no in-run page or item of another batch references this pair
(`research/frontier-35-ten-categories-batch-15.cross-batch-dependencies.json`
is `[]`; reverse scan of all 17 batch manifests: only the B page, which
declares `requires: [geometric-braids-and-artin-generators]`). Its downstream
consumers are later plan pages 733 (`braids-as-fundamental-groups-of-configuration-spaces`),
739 (`artin-presentation-completeness-and-braid-combing`), 749 and 757 — none
of them in this run, so the pair blocks nothing here. It is a supplier, not a
consumer. There is no duplication: the abstract Artin presentation and the
braid category already published on `braided-and-symmetric-monoidal-categories`
are the intended algebraic interface, and the published
`def-braid-group-by-the-artin-presentation` defines the abstract presented
group for $n\ge2$ with $n\le1$ trivial, matching the geometric definition's
stated $n=0,1$ convention.

## 2. Design-to-manifest mapping

Every designed A item is present with the designed kind and in the designed
proof order:

| design row (BG-1, lines 202–210) | manifest item | kind |
| --- | --- | --- |
| geometric braid with setwise endpoints | `def-geometric-braid-with-setwise-endpoints` | definition |
| isotopy relative top and bottom | `def-braid-isotopy-relative-top-and-bottom` | definition |
| well-defined stacking | `prop-stacking-of-geometric-braids-is-well-defined` | proposition |
| group structure | `thm-geometric-braids-form-a-group` | theorem |
| elementary half twist | `def-elementary-geometric-half-twist` | definition |
| geometric far commutativity | `lem-geometric-far-commutativity` | lemma |
| geometric three-strand relation | `lem-geometric-three-strand-braid-relation` | lemma |
| generation by half twists | `lem-every-geometric-braid-is-a-word-in-half-twists` | lemma |
| Artin surjection (surjectivity only) | `prop-the-artin-presentation-surjects-onto-geometric-braids` | proposition |

All four designed B items are present with the designed kinds:
`ex-geometric-two-strand-braids-are-integer-twists`,
`ex-the-three-strand-geometric-braid-relation`,
`cex-setwise-endpoints-do-not-make-a-braid-pure`,
`cex-arbitrary-link-isotopy-need-not-be-braid-isotopy`.

One A item beyond the design table:
`lem-geometric-braids-admit-generic-polygonal-representatives`. Step 1
recorded it (`frontier-35-ten-categories-batch-15.notes.md` line 11) as the
support device that makes the designed crossing-generation proof finite and
collision-free, and the coverage file maps it to the GM §1.5
finite-crossing/distinct-height statement. It is a local genericity lemma for a
designed claim, not new subject matter, and its consumers are inside the pair.

Dependency divergences from the design tables, all recorded by Step 1 and none
of them a scope reduction:

1. `ex-geometric-two-strand-braids-are-integer-twists` drops the design's
   dependency on the published `thm-the-two-strand-braid-group-is-infinite-cyclic`
   and instead proves its own winding invariant from
   `def-elementary-geometric-half-twist` plus the surjection proposition. Reason:
   that published theorem carries a confirmed proof gap whose exact evidence is
   in the batch notes (lines 27–31, defect 1). The example's subject —
   geometric $B_2$ is an integer twist — is unchanged and is now self-contained.
2. `thm-geometric-braids-form-a-group` adds `def-homotopy-relative-and-path-homotopy`;
   the generation lemma adds the isotopy definition and the polygonal lemma;
   `cex-setwise-endpoints-do-not-make-a-braid-pure` adds the half-twist
   definition. Every added edge is a genuine local prerequisite.

No designed convention is dropped: first-under-second stacking, setwise endpoint
condition, transported strand labels, positive half twist with its opposite,
the $n=0,1$ convention and the interior-disk/base-configuration stipulations
are all carried in the manifest strategies.

## 3. Source coverage

The A coverage entry (`…-batch-15.coverage.json`) lists two sources and 13
individually disposed harvested results (9 GM rows, 4 BB rows), each `included`
with a named item or `deferred` with a destination that resolves in
`plan-spec.json`. I re-fetched both documents and reproduced the stamps
byte-for-byte and hash-for-hash:

| source | stamp | reproduced |
| --- | --- | --- |
| González-Meneses, *Basic results on braid groups*, arXiv:1010.0321 | 45 pages, 474,454 bytes, sha256-16 `8fef987df3601d1e` | yes (identical) |
| Birman–Brendle, *Braids: A Survey*, math.columbia.edu/~jb/Handbook-21.pdf | 91 pages, 809,077 bytes, sha256-16 `22f52d9961a3f0fc` | yes (identical) |

What I read in the sources (complete relevant passages, not abstracts):

- GM §1.2: braids as collections of strands, equality as deformation with the
  endpoints fixed, strands pairwise disjoint, each strand meeting each
  horizontal plane once; multiplication by stacking with height rescaling.
- GM §1.3: general braids as motions of unordered configurations, strands with
  permuted top endpoints, well-defined multiplication by concatenation.
- GM §1.4: the punctured-disk mapping-class isomorphism $\mathcal M(D_n)\cong B_n$
  — the deferred destination (so the deferral is a real section, not a silent
  omission).
- GM §1.5: the standard Artin generators $\sigma_i$ (Figure 2), the existence of
  a deformation with finitely many double crossings at distinct heights, and
  generation of $B_n$ by $\sigma_1,\dots,\sigma_{n-1}$.
- GM §3.2: the Fox–Neuwirth cell argument deriving
  $\sigma_i\sigma_j=\sigma_j\sigma_i$ (disjoint case) and
  $\sigma_i\sigma_{i+1}\sigma_i=\sigma_{i+1}\sigma_i\sigma_{i+1}$ (three-point
  case) from the $(2n-2)$-cells — the source for the two geometric relation
  lemmas; the completeness conclusion of §3.2 is the deferred row.
- BB §1.1: geometric braid as the graph of $n$ simultaneous paths, equivalence
  by simultaneous homotopy rel endpoints in the configuration space, and the
  index-$n!$ subgroup/short exact sequence context.
- BB §1.2: the Artin presentation relations, and the elementary braid $\sigma_i$.
- BB §1.3: the punctured-disc mapping-class isomorphism (`simple proof` section)
  — the second deferred destination.

Deferrals on this page, all forward in order and all resolving to plan pages:
GM §1.4 and BB §1.3 → `punctured-disks-mapping-classes-and-point-pushing`
(order 735); GM §3.2 completeness → `artin-presentation-completeness-and-braid-combing`
(order 739); BB §5.1 → the sibling Garside pair in this same batch. There are
no `out-of-scope` rows on this page.

Two coverage notes, neither a hole in the subject:

1. Farb–Margalit §9.1.1 appears in two of the design's locator cells
   (the braid definition and the isotopy definition) but was not harvested for
   this batch, which used GM §§1.2–1.3 and BB §1.1–1.2 for the same content.
   Both harvested sources independently carry the material, so the two-source
   route is intact; the Farb–Margalit locator is a route alternative, not an
   unbacked claim.
2. B-page rows have no coverage entry of their own. That is this run's
   convention (coverage files list A pages only; verified against batch 9's
   coverage), and the design's provenance rule treats unlocatable B witnesses
   as local examples/counterexamples that are forbidden as dependency targets —
   which the manifest honours: no later row depends on any B item.

## 4. Proof seam and the BG-3/BG-6 wording conflict

The pair stops at surjectivity by design (table row for
`prop-the-artin-presentation-surjects-onto-geometric-braids`; "Proof seam",
lines 212–216). That is exactly what the ten A items support: relations give a
homomorphism, generic-crossing decomposition gives surjectivity, and nothing in
the manifest infers injectivity from pictures.

The design is internally inconsistent about which later page completes the
Artin map:

- BG-1's seam (lines 213–216) says BG-3 proves injectivity via the Fox–Neuwirth
  cell computation, but BG-3's own designed inventory (lines 262–291) contains
  no injectivity or completeness item — it constructs the
  geometric↔configuration isomorphism only.
- BG-6 (`artin-presentation-completeness-and-braid-combing`, lines 368–384)
  does contain `thm-the-artin-presentation-is-complete-for-geometric-braids`,
  routed through braid combing (GM Proposition 3.1, §§3.1 pp. 19–22), and it
  declares the surjection proposition from this pair as its dependency.
- This pair's coverage row defers "§3.2 completeness of the presentation" to
  `artin-presentation-completeness-and-braid-combing` (order 739), and the
  manifest strategy for the surjection item says "the later braid-combing
  theorem supplies it" — i.e. the scaffold and coverage follow BG-6.

Step 1 already recorded this conflict and left it to the owner
(`frontier-35-ten-categories-batch-15.notes.md` line 9). It concerns later
pages only: whichever later page supplies completeness, this pair's inventory
and interface are unchanged, so it is not a scope defect for this pair. I state
it here because the owner must reconcile the BG-1 seam sentence (BG-3 versus
BG-6) before those pages are built; I did not edit the design or the manifest.

## 5. Scope judgement

**`sufficient`.** The planned definitions, results and examples cover the
intended subject adequately:

- design coverage is item-for-item for all 9 A rows and all 4 B rows, with the
  designed proof order; the single added A item is a local support lemma whose
  consumer is inside the pair;
- the subject components a library page titled "Geometric Braids and Artin
  Generators" owes are all present: the strand model and its equivalence
  relation, the group law, the Artin generators with their inverse, the two
  relation families proved by isotopy, generation, and the Artin-to-geometric
  surjection; the examples page supplies the $B_2$ invariant computation, the
  explicit three-strand movie, and both definition boundaries;
- source coverage rests on two independent complete treatments whose stamps I
  reproduced exactly, and I read the cited sections that carry every included
  row;
- the two substantive omissions (mapping-class identification, presentation
  injectivity/completeness) are deliberate, documented forward deferrals to
  plan pages 735 and 739, both later in order, with no backward edge and no
  double booking of the pair's own claims;
- prerequisites are published and earlier; the pair neither duplicates a
  published item nor blocks an in-run consumer.

The decision does not certify any proof, any item statement, or the defects
this review notes below.

## 6. Observations for the owner and Step 3b (no decision change)

1. Definition precision. The manifest strategy for
   `def-geometric-braid-with-setwise-endpoints` says the base points sit on "a
   horizontal diameter of the disk", while the Step-1 notes (line 13) require
   the moving points and the base configuration to lie in the **interior** of
   the fixed disk to give the uniform boundary margin used by the polygonal
   approximation. Step 3b should print the interior condition and the
   base-configuration data explicitly.
2. The counterexample `cex-setwise-endpoints-do-not-make-a-braid-pure` uses the
   term "pure" without any A-page definition of pure geometric braids. The
   endpoint permutation recorded by the braid definition is the load-bearing
   notion, and pure braid groups are defined on the configuration page
   (order 731). Step 3b can define "pure = trivial endpoint permutation"
   inline; no new A item is required.
3. `ex-geometric-two-strand-braids-are-integer-twists` now proves its own
   relative winding invariant because the published $B_2$ theorem is
   defect-flagged (batch notes lines 27–31). Step 3b must not import that
   published proof, and Step 5 should check isotopy invariance, stacking
   additivity and normalization on $\sigma_1$ independently.
4. Mechanical granularity note. `thm-heine-cantor-metric` (dependency of the
   polygonal lemma) is not reachable by an item-level dependency walk from the
   four declared `requires` pages, although its page
   `compactness-in-metric-spaces` (order 120) lies in the page-level closure;
   the same pattern occurs for five direct dependencies of the sibling batch-16
   page. Step 1 declared the dependency and recorded the item ready, so I treat
   this as the run's accepted page granularity, not a missing prerequisite.
5. Design seam conflict of §4 — owner reconciliation of BG-1's seam sentence
   with BG-3/BG-6.

## 7. Evidence index

- Design: `research/plan-braid-groups-track.md` BG-1 A lines 191–216, B lines
  218–228; BG-3 lines 262–291; BG-5 line 352 (future consumer of
  `def-elementary-geometric-half-twist` and the surjection proposition); BG-6
  lines 368–384.
- Plan: `research/plan-spec.json` (orders 729/730; `requires` verified;
  destinations 735 and 739 present).
- Batch inputs: `research/frontier-35-ten-categories-batch-15.pages.json`,
  `…-batch-15.coverage.json`, `…-batch-15.notes.md`,
  `…-batch-15.cross-batch-dependencies.json` (`[]`).
- Step-1 status: all 14 items carry current `ready` records
  (`research/frontier-35-ten-categories-step1-<id>.json`);
  `research/frontier-35-ten-categories-alpha-step1-drift.md` lines 149–153.
- Owner records: `research/frontier-35-ten-categories-owner-authoring-direction.md`
  (no braid entry), `…-deferred-pairs.json`, `…-deferred-items.json`.
- Sources: fetched to `/tmp/gm-braids.pdf` (474,454 bytes,
  sha256-16 `8fef987df3601d1e`) and `/tmp/bb-braids.pdf` (809,077 bytes,
  sha256-16 `22f52d9961a3f0fc`); text extracted to `/tmp/gm.txt`, `/tmp/bb.txt`.
- Checks run: two-source stamp reproduction; page-level `requires` closure from
  plan-spec; item-level reachability probe; recursive consumer scan of
  `library/` and `items/`; reverse scan of all 17 run manifests; published
  inventory check for existing geometric-braid items (0 hits).
- Not done (out of role): no proof-level verification of the to-be-authored
  items, no item decisions, no scaffold or design edits, no re-hashing of
  plan-spec beyond the pages consulted.
