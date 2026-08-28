# frontier-23 — Alpha group `d` — Step 3 scaffold review

Group `d` covers batches `8` and `10`: `exactness-and-the-member-calculus` and
`formal-languages-encodings-and-decision-problems`. I read the current
`research/frontier-23-batch-{8,10}.pages.json`,
`research/frontier-23-batch-{8,10}.coverage.json`, and
`research/frontier-23-batch-{8,10}.notes.md` artifacts against the controlling
design sections in `research/plan-category-theory-track.md`,
`research/plan-computability-theory-track.md`, and the live
`research/plan-spec.json`. I also refreshed
`research/frontier-23-alpha-d-scope-decisions.json` and resolved all `25`
current decline rows.

Both owned A pages are now **sufficient** for authoring on the current bytes.
Two in-scope scaffold defects were repaired during this review on Friday,
August 28, 2026, both in batch `8`: the MA-10 A-page `requires` line now
matches the controlling design, and the pair no longer depends across page
boundaries on published B-page items. The refreshed scope receipt now contains
`23` `stands` rows and `2` `owner-decision` rows.

No owned A page is near the step-3 split ceiling: MA-10 has `49` A items and
TC-1 has `18`.

| A page | batch | A items | verdict | notes |
|---|---|---:|---|---|
| `exactness-and-the-member-calculus` | 8 | 49 | **sufficient** | sufficient after B8-1/B8-2 manifest repair |
| `formal-languages-encodings-and-decision-problems` | 10 | 18 | **sufficient** | low-yield warning reviewed; two non-load-bearing scope rows route to owner decision |

## Findings

| id | page | severity | disposition |
|---|---|---|---|
| B8-1 | `exactness-and-the-member-calculus` | high | repaired in manifest |
| B8-2 | `exactness-and-the-member-calculus` / `exactness-and-the-member-calculus-examples` | high | repaired in manifest |

### B8-1 — repaired: the MA-10 manifest carried the wrong backward prerequisites

The controlling MA-10 design at
`research/plan-category-theory-track.md:2068-2071` requires

- `abelian-categories`
- `subobject-lattices-generators-and-the-grothendieck-axioms`
- `free-modules-and-exact-sequences`

but the live batch-8 manifest had only the B page
`subobject-lattices-generators-and-the-grothendieck-axioms-examples`.

That was a real scaffold-closure defect on the current bytes. The MA-10 item
graph spends `abelian-categories` throughout, spends `MA-9` projective,
injective, and AB5 items at `research/plan-category-theory-track.md:2163-2164`,
and the companion page spends the published module splitting theorem named in
the MA-10 design at `:2108` and `:2177`. I repaired
`research/frontier-23-batch-8.pages.json` in the smallest coherent way by
replacing the drifted B-page prerequisite with the three backward A-page
prerequisites the design already names.

After that edit, a local closure audit over the reviewed manifests reports zero
missing prerequisite homes outside the manifest-local items or the transitive
`requires` closure.

### B8-2 — repaired: the MA-10 pair depended on published B-page items from other pages

The live batch-8 manifest also had two cross-page B-item dependencies:

- A-page item `cex-hom-is-not-exact` depended on the published B-page item
  `cex-contravariant-hom-need-not-be-right-exact`.
- B-page item `cex-a-non-split-short-exact-sequence-of-abelian-groups`
  depended on the published B-page item
  `cex-nonsplit-short-exact-sequence-of-integers-mod-two`.

`SCHEMA.md` §4 forbids that pattern: an item homed only on an examples page may
not be a dependency of another page, except for an earlier item on the same B
page. The MA-10 design text itself records those witnesses as cited instances at
`research/plan-category-theory-track.md:2162` and `:2177`, but the manifest
cannot keep them as formal `deps`.

I repaired `research/frontier-23-batch-8.pages.json` by keeping the same
mathematics while removing the forbidden dependency edges: both strategies now
reuse the standard `0 -> Z -> Z -> Z/2 -> 0` construction directly inside `Ab`,
with dependencies only on the local categorical items and the published A-page
theorem `thm-abelian-groups-form-an-abelian-category`.

The same local closure audit now reports zero illegal B-page dependencies across
the reviewed manifests.

## Page review

### `exactness-and-the-member-calculus`

MA-10 is sufficient after B8-1/B8-2. The page follows the controlling route in
`research/plan-category-theory-track.md:2068-2164`: exactness, split exact
sequences, the member calculus, the six chasing rules with all three clauses of
rule (vi), the covering criterion, the kernel/cokernel lead-in lemmas, the
dual-comember seam, Hom left exactness, and the AB5/exact-filtered-colimit
equivalence. The B page is also substantive, with nine concrete member,
splitting, and kernel-row examples.

The source harvest is honest for the page actually being built. The Mac Lane,
Stacks, Freyd, Weibel, and Mehrle deferrals all land either on exact current
later pages or on already-owned prior scope, so every batch-8 decline row now
resolves as `stands`. The only real scaffold defects were the repaired manifest
closure problems above.

**Verdict: sufficient after repair.**

### `formal-languages-encodings-and-decision-problems`

TC-1 is sufficient on the current manifest. The page keeps the planned route in
`research/plan-computability-theory-track.md:180-202`: alphabets and words,
the seam to the published finite-word page, language operations, reversal,
induced word maps, effective encodings, problem types, size conventions, and
the two local false statements. Beta's replacement of
`fs-every-injection-is-an-effective-encoding` with
`fs-every-effective-encoding-is-prefix-free` is a legitimate local repair of a
non-authorable false statement, not scope padding.

The source set is sufficient for authoring: Gallier, Savage, Sipser, and
Arora-Barak cover the formal-language and decision/search route, while the
St. Olaf note covers polynomially related encodings. The standing
`coverage-low-yield` warning is real but not disqualifying: the `20/55` yield is
backed by explicit later-page or out-of-scope dispositions, and the group-d
scope review confirms those rows rather than letting them pass silently.

Two batch-10 rows remain `owner-decision`, and both are routing precision
issues rather than hidden prerequisites:

- Arora-Barak `Theorem 2.19` is described in the coverage row as a general
  search-to-decision theorem, but the live TC-20 page only names
  `def-search-version-of-an-np-relation` and the SAT-specific
  `thm-sat-search-reduces-to-sat-decision`.
- Sipser's "A TM has three possible outcomes for each input" belongs on the
  current machine-semantics page `turing-machines-configurations-and-computation`
  (`research/plan-computability-theory-track.md:474-487`), not on the stored
  destination `decidable-recognizable-and-enumerable-languages`.

Neither row is load-bearing for page `581` itself, so the scaffold is still
authorable.

**Verdict: sufficient.**

## Scope and checks

The resolved scope receipt is current on disk:

- `stands`: `23` rows
- `owner-decision`: `2` rows

Checks run on the exact reviewed artifacts:

- `node tools/scope-decisions.mjs check --run frontier-23 --group d` — pass,
  `25` current decline(s), `0` error(s).
- `node tools/content-policy.mjs --manifest-only research/frontier-23-batch-8.pages.json research/frontier-23-batch-10.pages.json` — pass,
  `80` scoped item(s), `0` error(s), `0` warning(s).
- `node tools/coverage-checklist.mjs --require-destination research/frontier-23-batch-8.coverage.json research/frontier-23-batch-10.coverage.json` — pass with one standing warning,
  `2` page(s), `99` harvested result(s), `0` error(s), `1` warning(s)
  (`coverage-low-yield` on `formal-languages-encodings-and-decision-problems`,
  `20/55` harvested rows scaffolded).
- Local closure audit over the reviewed manifests after B8-1/B8-2 — pass,
  `80` checked items, `0` missing prerequisite homes, `0` cross-page B-item
  dependencies.
