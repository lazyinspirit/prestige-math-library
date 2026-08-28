# frontier-22 — Alpha group `a` — Step 3 scaffold review

Group `a` covers batches `1`, `3`, and `8`: GT-6, GT-14, RT-2, and MA-9. I
read the current `research/frontier-22-batch-{1,3,8}.pages.json`,
`.coverage.json`, and `.notes.md` artifacts against the controlling design
sections in `research/plan-group-theory-track.md`,
`research/plan-algebra-track-expansion.md`,
`research/plan-category-theory-track.md`, and the live
`research/plan-spec.json`.

All four A pages are now **sufficient** for authoring on the current bytes.
Two in-scope scaffold defects were repaired during this review. The refreshed
scope ledger produced 10 pending declines; those now resolve as **10**
`stands` rows and **0** `owner-decision` rows.

| A page | batch | A items | verdict | notes |
|---|---|---:|---|---|
| `hnn-extensions-and-brittons-lemma` | 1 | 23 | **sufficient** | GT-6 route closes; Bass-Serre deferral stands |
| `simplicial-trees-and-group-actions` | 1 | 25 | **sufficient** | GT-14 route closes; all four tree-action deferrals land on GT-15 |
| `maschkes-theorem-and-complete-reducibility` | 3 | 19 | **sufficient** | B3-1 repaired; RT-2 stays on the pre-character route |
| `subobject-lattices-generators-and-the-grothendieck-axioms` | 8 | 54 | **sufficient** | B8-1 repaired; MA-9 scope rows are honest |

## Findings

| id | page | severity | disposition |
|---|---|---|---|
| B3-1 | `maschkes-theorem-and-complete-reducibility` | high | repaired in manifest |
| B8-1 | `subobject-lattices-generators-and-the-grothendieck-axioms` | high | repaired in manifest |

### B3-1 — repaired: RT-2's companion page illegally depended on published B-page examples

The batch-3 companion page used four cross-page dependencies homed only on
published examples pages:

- `ex-the-complex-representations-of-a-cyclic-group-of-order-n-are-the-n-characters`
- `ex-class-equation-of-s-three`
- `ex-class-equation-of-the-dihedral-group-of-order-eight`
- the resulting same-page downstream uses of those imported example facts

That is not allowed by the schema's examples-page rule. I repaired
`research/frontier-22-batch-3.pages.json` in the smallest coherent way:

- the `\mathbb C[\mathbb Z/3]`, `\mathbb C[S_3]`, `Q_8` / `\operatorname{Dih}(C_4)`,
  and regular-`C_4` examples now compute their class counts or degree data
  directly inside their own strategies
- their `deps` now point only to A-page theorems or earlier published A-page
  algebra/group facts

After that edit, `validate-plan` again reports **no B-page dependencies** among
the itemized pages.

### B8-1 — repaired: MA-9 drifted behind the live plan and leaned on a published B-page counterexample

The current `research/plan-spec.json` already gives
`subobject-lattices-generators-and-the-grothendieck-axioms` the prerequisite
`chains-antichains-sperner-and-dilworth`, but
`research/frontier-22-batch-8.pages.json` still listed only
`abelian-categories-examples`. The same A-page counterexample
`cex-a-subobject-lattice-need-not-be-distributive` also depended on the
published B-page item
`cex-the-diamond-and-pentagon-lattices-are-not-distributive`, which is again
forbidden as a cross-page dependency target.

I repaired `research/frontier-22-batch-8.pages.json` in the smallest coherent
way:

- added the missing backward prerequisite
  `chains-antichains-sperner-and-dilworth`, matching the live plan
- rewrote the `M_3` counterexample strategy to compute the distributivity
  failure locally in `(\mathbb Z/2)\oplus(\mathbb Z/2)`
- replaced the forbidden B-page dependency with the published lattice
  vocabulary item `def-lattice-distributive-lattice-and-order-ideal`

This closes the scaffold without changing page order, routing, or scope.

## Page review

### `hnn-extensions-and-brittons-lemma`

The GT-6 route is sufficient on current bytes. The page has the construction,
the associated-subgroup translation lemma, explicit pin and reduction language,
the transversal normal-form theorem, Britton's lemma, embedding and torsion
corollaries, the exponent-sum map, the universal property, the ascending-HNN
specialization, and the decomposed Collins-conjugacy spine. The added cyclic
reduction items are real closure work, not padding.

The one scope decline, Loh's Bass-Serre placement remark, lands cleanly on
`graphs-of-groups-and-bass-serre-theory`, which is live in `plan-spec.json` at
order `302.011`. The current HNN page stops exactly where GT-6 says it should:
algebraic normal forms, Britton reduction, and the universal property.

The current page-level `requires`
`subgroups-of-free-groups-and-schreier-rewriting-examples` /
`free-products-and-amalgamation` still close the intended earlier route on disk:
their transitive prerequisite closure already reaches both
`subgroups-of-free-groups-and-schreier-rewriting` and
`free-groups-and-presentations`, so no additional backward edge is owed here.

**Verdict: sufficient.**

### `simplicial-trees-and-group-actions`

The GT-14 route is also sufficient. The page builds oriented simplicial graphs,
finite-path and reduced-path language, the tree criterion, the path metric, the
bridge back to the published finite-tree notion, graph automorphisms, edge
inversions, barycentric subdivision, quotient graphs, fixed subtrees,
translation length, the elliptic/hyperbolic dichotomy, the finite-group
fixed-point lemma, torsion-freeness of free actions, and ping-pong.

All four scope declines are honest later-page material and all four land on the
live GT-15 page `graphs-of-groups-and-bass-serre-theory` at order `302.011`:
subtree lifting, trees of representatives, and free-action structural
consequences are exactly Bass-Serre reconstruction machinery, not hidden
prerequisites of the current automorphism page.

The design/spec mismatch on direct `requires` remains visible in the notes, but
it is not a closure defect on current bytes. The live `plan-spec.json` edge to
`amenable-groups-and-folner-criteria-examples` already reaches both
`trees-forests-and-spanning-trees` and
`cayley-graphs-word-metrics-and-quasi-isometry` transitively, so authoring is
not blocked by a missing earlier prerequisite.

**Verdict: sufficient.**

### `maschkes-theorem-and-complete-reducibility`

After B3-1, RT-2 is sufficient. The A page keeps the designed route: Maschke's
averaging proof with the characteristic hypothesis spent exactly where it
belongs, complete reducibility, semisimplicity and its converse via the
augmentation ideal, isotypic decomposition, the Wedderburn decomposition of
`k[G]`, regular-representation multiplicities, the sum-of-squares formula, the
class-sum basis of the center, the irreducibles-versus-conjugacy-class count,
and the finite-order diagonalizability corollary needed later by RT-3.

The three scope declines are real out-of-scope exclusions, not missing
scaffold items:

- Webb `Lemma 3.4.1(2)` is character-language packaging that the current
  pre-character center-dimension proof does not need.
- Etingof `Corollary 2.13` is only the weaker generic inequality, not the
  group-algebra equality the page actually proves.
- Etingof `Theorem 3.11` is a complex-unitary alternate proof of Maschke, while
  the design explicitly chooses the general averaging proof.

With the companion-page B-page dependency repair in place, the pair now closes
honestly inside the schema.

**Verdict: sufficient.**

### `subobject-lattices-generators-and-the-grothendieck-axioms`

After B8-1, MA-9 is sufficient. The page now matches the live plan on its
lattice prerequisite and keeps the intended route: modular lattices, joins and
meets of subobjects, the lattice theorem, modularity as a theorem, the
non-distributive `M_3` counterexample, the second isomorphism theorem, the
subobject Galois connection, the Jordan-Hölder length spine, generators and
well-poweredness, AB3/AB4/AB5 and their starred variants, Grothendieck
categories, the `\mathbf{Ab}` / `\mathbf{Ab}^{op}` AB5* boundary, projective
and injective objects, enough projectives for module categories, and the
projective-generator isomorphism detector.

The two scope declines are honest on current bytes:

- `AB 6)` is outside the MA-9 / MA-10 seam and is not consumed by any current
  item.
- Grothendieck's sentence leaving the starred axioms to the reader is a
  citation-fidelity warning, not an authored result, because the starred
  statements are deliberately sourced from Weibel and Stacks instead.

The batch-8 notes still reflect the older one-edge manifest state, but that
note drift does not make the current scaffold insufficient after the manifest
repair.

The batch's earlier shell-level source DNS failures also do not reopen a
mathematical scaffold defect here. They are transport-local failures recorded in
the notes; the source coverage itself remains broad enough for authoring.

**Verdict: sufficient.**

## Scope decisions

`node tools/scope-decisions.mjs refresh --run frontier-22 --group a` produced
10 pending rows. They are now resolved in
`research/frontier-22-alpha-a-scope-decisions.json` as:

- `stands`: 10 rows
- `owner-decision`: 0 rows

The later-page `stands` destination is current and exact on disk:

- `graphs-of-groups-and-bass-serre-theory` — order `302.011`

The remaining six rows are true out-of-scope exclusions with no missing live
destination page to escalate.

## Mechanical checks on the current bytes

- `node tools/scope-decisions.mjs check --run frontier-22 --group a`
  — `scope-decisions: 10 current decline(s), 0 error(s)`.
- `node tools/coverage-checklist.mjs research/frontier-22-batch-1.coverage.json research/frontier-22-batch-3.coverage.json research/frontier-22-batch-8.coverage.json --require-destination`
  — `coverage-checklist: 4 page(s), 105 harvested result(s), 0 error(s), 0 warning(s)`.
- `node tools/content-policy.mjs --manifest-only research/frontier-22-batch-1.pages.json research/frontier-22-batch-3.pages.json research/frontier-22-batch-8.pages.json`
  — `content-policy: 151 scoped item(s), 0 error(s), 0 warning(s)`.
- `node tools/validate-plan.mjs research/plan-spec.json`
  — passes on the current plan; the output ends with `OK` and reports no
  B-page dependencies or unresolved ids on the itemized pages, with only the
  repository's standing `redundant-prereq` advisories elsewhere.
- JSON parse check on the repaired manifests and scope ledger
  — `json-parse: ok`.
- Targeted dependency audit over the repaired batch-3 and batch-8 manifests
  — `forbiddenHits: []`, and batch 8 now declares both required pages.
- `git diff --check -- research/frontier-22-batch-3.pages.json research/frontier-22-batch-8.pages.json research/frontier-22-alpha-a-scope-decisions.json`
  — clean.
