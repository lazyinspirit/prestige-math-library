# Eilenberg–Watts expansion: integration and local proof review

Owner commission, 2026-10-04: expand the already published homological algebra
track, research the precise theorem and variants online, write complete local
proofs and adjacent theory into its prose scaffold, and register future A/B
pairs. All definitions must be justified and every load-bearing prerequisite
must be local to the library.

The canonical addition is `research/plan-homological-algebra-track.md`,
HA-25–HA-29, proof sections P1–P14 and witnesses B1–B5. It contains the
arbitrary-ring Eilenberg–Watts proof, natural-transformation correspondence,
bicategory coherence, small projective-generator reconstruction, Morita
invertibility and center invariance, finite right/left exact variants, a full
finite Deligne-product construction, explicit universal end/coend maps,
Nakayama functors, and the coherent-shift graded variant. The existing bounded
derived-tensor theorems provide the derived adjacency; unrestricted
triangulated-functor classification is explicitly outside the statement.

Five A/B pairs are registered at orders 919–928 in `research/plan-spec.json`.
Their empty item arrays are intentional future scaffold inputs. The proposed
inventory has 52 A items (7 definitions, 20 lemmas, 12 theorems, 10 corollaries,
2 propositions, 1 orientation remark) and 17 B items (9 examples, 8
counterexamples). No B item is a proof supplier. The largest A inventory has
12 items. Nothing was authored into `items/` or `library/`, no published page
was reopened, and no engine transition was requested.

The published finite-category and k-linear definitions are reused. P8 adds
projective-generator realization and the comparison of the two enough-projective
conventions. Newly introduced constructions have explicit well-definedness
arguments, with separate `justified_by` lemmas for functor categories, tensor
bicategory coherence, the small/progenerator comparison, Deligne existence,
Nakayama, and coherent shifts. The bicategory/pseudofunctor definition specifies
axioms, their full coherence equations, and a strict-category consistency
instance, separately from proving the tensor instance.

Authoritative full texts retrieved and closely read over the ranges recorded
in `source-manifest.json`:

- Etingof–Gelaki–Nikshych–Ostrik, [Tensor Categories, §§1.8 and 1.11](https://math.mit.edu/~etingof/egnobookfinal.pdf).
- Fuchs–Schaumann–Schweigert, [Eilenberg–Watts calculus, §2.1, Theorem 3.2, §§3.2 and 3.5](https://arxiv.org/html/1612.04561v3).
- Hazrat, [Graded Rings and Graded Grothendieck Groups, §2.3](https://arxiv.org/abs/1405.5071).

Crossref searches established bibliographic attribution. Watts's original
article was inaccessible behind an AMS challenge and its proof was not read.
The source-gap table distinguishes omitted exposition and cited intermediate
results from genuine errors: no mathematical error in these sources was
established. P1–P13 close the local proof omissions directly. Hazrat's allowance
of non-shift-compatible transformations is a convention difference, not an
error; the expansion explicitly restricts its graded 2-cells and proves the
necessity by a degreewise-scalar counterexample.

Validation completed successfully:

- `node research/eilenberg-watts-expansion/check.mjs`: collisions, inventory/prose agreement, definition-justification direction, prerequisite resolution and reachability, same-page order, B leaves, companions, page sizes, separation from both active run scopes, and the transitive closure of 626 published authored suppliers. No `proved_here: false` result occurs in that closure. The checker also validates an item-hydrated temporary plan, so the empty canonical arrays do not make the item audit vacuous.
- `node tools/validate-plan.mjs research/plan-spec.json`: canonical plan valid; future arrays remain empty.
- `node tools/rendercheck.mjs /tmp/ew-research/final-proofs.md --json`: extracted current addition, no math-render errors or warnings.
- Scoped `git diff --check`: clean.
- Removing the ten owned future rows and serializing the current plan reproduces the pre-edit SHA-256 in `integration.json`. All pre-existing plan content, including the owner's uncommitted edits, was preserved exactly.

These are local proof review and planning checks. They do not constitute an
independent mathematical audit, authoring, publication, or an active build.
Future authors receive complete proof contracts and exact existing-library
suppliers; the normal engine review and publication workflow still applies.
