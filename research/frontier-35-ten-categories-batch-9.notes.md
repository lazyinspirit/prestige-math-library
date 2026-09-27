# Frontier 35 — batch 9 Step 1 notes

Run: `frontier-35-ten-categories` · role: beta · owned pairs: `projective-extensions-and-the-little-group-method` and `monomial-characters-and-m-groups` with their B companions.

## Scope and plan comparison

The current `research/plan-spec.json` entries at lines 279154–279204 match the dispatched four page IDs, orders 510.039–510.042, categories, companions, and page `requires` arrays. The plan has no controlling item inventory for these pages; there is no plan/design metadata conflict. No owner direction file exists at `research/frontier-35-ten-categories-owner-authoring-direction.md` at construction time.

The RG-5 design lists `def-extension-of-an-invariant-irreducible-representation`; the same concept is already published as `def-extension-of-an-irreducible-normal-subgroup-representation`. The latter is used directly and harvested as `already-published`, avoiding a duplicate definition. The design phrase “projective representation of the inertia quotient” is mathematically imprecise for a nontrivial normal type: the normalized projective operators act on the inertia **group** and satisfy their prescribed restriction to the normal subgroup; only the factor set descends to the quotient. The manifest states this distinction and follows the published left-conjugation convention `ρ^g(n)=ρ(g⁻¹ng)`.

RG-6's design routes the virtual-character theorem through the already published `thm-brauer-induction`. Its published transitive proof chain contains the proof-dependency gap recorded below. The local theorem instead repeats the sound published elementary-detection and induction-ideal argument, using the local supersolvable M-group proof for the elementary subgroup step. It retains the full conclusion that inducing subgroups can be chosen *p*-elementary, including the trivial-group case. This is a proof-route correction, not a change to the plan's page prerequisites. The standard supersolvable hypothesis is read as a series whose terms are normal in the whole group, as stated in tom Dieck §4.3; the local statements make this explicit. A merely subnormal prime-factor series would be inadequate.

## Sources and dispositions

Full source bodies were fetched, inspected, and stamped in the [coverage record](frontier-35-ten-categories-batch-9.coverage.json). The source check verified 6/6 source rows (five distinct URLs; tom Dieck supports both A pages), with zero drops. The coverage checklist records 83 harvested results, each included/inline with a specific item ID, already published with an ID, or out of scope with a reason.

| A page | Full treatments inspected | Use |
|---|---|---|
| Projective extensions | [Späth, §1.A–B, printed pp. 2–6](https://darstellungstheorie.uni-wuppertal.de/fileadmin/mathe/darstellungstheorie/LausanneBS_final.pdf); [tom Dieck, §§4.2.5–4.2.7, printed pp. 55–57](https://www.uni-math.gwdg.de/tammo/d01.pdf) | Factor sets, associated inertia operators, central extensions, linearization, Clifford correction, and split little groups. Späth states the projective Clifford theorem with an external proof citation; the manifest supplies a complete multiplicity-space proof route. |
| Monomial characters | [tom Dieck, §4.3 and §4.6, printed pp. 57–59, 64–65](https://www.uni-math.gwdg.de/tammo/d01.pdf); [Li, §§12.5 and 14.3, printed pp. 146–148, 162–164](https://www.wwli.asia/downloads/YAlg1.pdf); [SLMath, Chapter 9 slides, PDF pp. 374–404](https://www.slmath.org/ckeditor_assets/attachments/500/characters.pdf); [Garrett, §§1–2, PDF pp. 1–3](https://www-users.cse.umn.edu/~garrett/m/repns/notes_2014-15/05_finite_heisenberg_ssw.pdf) | Independent supersolvable proofs, Brauer monomial consequence, complete Taketa proof, and the unitriangular Heisenberg calculation. Garrett assumes odd field size; the local calculation checks `p=2` directly. |

No source failed retrieval or required `source_resolution`. The full-text PDF inspection, not snippets or HTTP status alone, informed the item strategies. The Taketa statement was not accepted merely from tom Dieck's theorem list: the SLMath proof supplies the derived-length induction and the local kernel lemma records its missing intermediate calculation.

## Item and proof-dependency audit

The four page inventories contain 30 stable, previously unused item IDs (12 RG-5 A, 4 RG-5 B, 10 RG-6 A, 4 RG-6 B). Each item has an explicit `deps` array and an individual Step 1 `ready` receipt with examined dependencies. All 30 receipts were current after the final manifest edit; zero owned items were escalated. These are construction records, not mathematical approval or publication.

I read the published statement and proof of the direct Clifford, Gallagher, induction, cocycle, Brauer detection, supersolvable, character-kernel, and group examples used here. A recursive declared-edge audit of the 30 owned roots reached 606 distinct local/published items, scanned 35,475 path-edge occurrences, and found no unresolved, circular, forward, draft, or `proved_here: false` dependency. This mechanical closure check does not independently re-prove all 606 published arguments; the load-bearing direct proofs and the identified inherited Brauer chain were also read. In particular, none of the owned roots reaches `lem-monomiality-lifts-along-a-quotient`, `lem-nonabelian-supersolvable-group-has-a-noncentral-normal-abelian-subgroup`, `thm-finite-supersolvable-groups-are-monomial`, or `thm-brauer-induction` after the local proof-route correction.

The projective correspondence proves the inverse multiplier on `Hom_N(S,U)` directly and verifies irreducibility using the published isotypical subspace correspondence. The split abelian result constructs a genuine stabilizer extension, so its obstruction is zero. The RG-6 positive theorem descends to a faithful quotient via the local induction–inflation lemma and uses a *proper* inertia subgroup; Brauer's virtual equality is kept separate. The Taketa proof includes the kernel of an induced module and Frobenius reciprocity. The B examples include small-order cases and complete degree counts. No axiom of choice is invoked: all groups, transversals, bases, and representation spaces used here are finite. This batch adds no Foundations page or path to `deferred-set-theory-beyond-choice`.

There is no new cross-batch supplier pair or cross-batch item edge from these two pairs. The owned [dependency input](frontier-35-ten-categories-batch-9.cross-batch-dependencies.json) is `[]`, and `frontier-dependency-ledger.mjs refresh` completed.

## Published proof defects for the canonical ledger

These are existing published proof-chain issues; their statements may be true. They were not edited here and are not actual prerequisites of the owned items after the route correction.

1. **`lem-monomiality-lifts-along-a-quotient` — published.** Its proof step 2.1 invokes “compatibility of induction with quotient inflation” without establishing that compatibility or declaring a supplier in `deps`. The full argument is given by tom Dieck Lemma 4.3.4 and by the owned `lem-induction-commutes-with-inflation` (Step 1 ready manifest, **not published**). Repair the published lemma by adding this supplier once published, or insert the explicit covariant-function proof and update its dependencies. The published `thm-finite-supersolvable-groups-are-monomial` consumes this lemma; `lem-p-elementary-characters-are-induced-from-linear-characters` and `thm-brauer-induction` inherit the chain. The owned theorems use the new local proof instead.
2. **`lem-nonabelian-supersolvable-group-has-a-noncentral-normal-abelian-subgroup` — published.** Its proof step 1.1 chooses a maximal abelian term `G_i` and asserts “by maximality” that some element of `G` fails to commute with `G_i`. It omits the needed argument: if `G_i` were central and `G_{i+1}/G_i` cyclic, then `G_{i+1}` would be abelian, contradicting maximality. Tom Dieck Lemma 4.3.3 instead passes to `G/Z(G)`; the owned `lem-nonabelian-supersolvable-group-has-the-required-abelian-normal-subgroup` gives that complete proof (Step 1 ready manifest, **not published**). Repair by inserting the missing central/cyclic argument or adopting the center-quotient proof. The published supersolvable theorem consumes the current lemma, but the owned theorem uses the local replacement.

The published `def-supersolvable-groups-and-monomial-characters` says “normal series” and displays adjacent normality symbols. The source's “string of normal subgroups” requires each term normal in the whole group; this is the convention used above. A later editorial pass should make that convention explicit in the published definition, because adjacent subnormality alone would include non-supersolvable solvable groups and invalidate the quoted theorem.

## Check results

| Check | Actual result |
|---|---|
| Coverage checklist, owned file, `--require-destination` | Exit 0; 2 A pages, 83 harvested results, 0 errors, 0 warnings. |
| Whole-run manifest dependencies | Exit 0; 415 current scoped items, 0 normalized, 0 errors. The count reflects concurrent batches. |
| Whole-run manifest content policy | Exit 0; 415 scoped items, 0 errors, 0 warnings. |
| `validate-plan` | Exit 0; page order and declared prerequisites acyclic and consistent. It notes 431 planned pages still have no item list. |
| Source fetch check, owned coverage | Exit 0; 6/6 source rows fetch-verified and resolved. |
| Repository-wide `extcheck` | Exit 1; 12 errors and 48 warnings on existing unrelated published/recorded items, including `fs-every-subexponential-growth-group-has-polynomial-growth` and several missing `precheck: n/a` fields. The scoped owned closure contains no recorded result and none of these error IDs. This unrelated published consumer debt does not block the new supplier manifest. |
| Whole-run Step 1 check | Open because other batches contain escalations, stale receipts, or empty inventories; the 30 owned receipts are all current and `ready`. |

Step 3 must still review the mathematics and the owner/operator must reconcile the run before the full engine gate.
