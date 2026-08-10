# `freegroups-1` — run record

Enrichment of the **published** A/B pair `free-groups-and-presentations`
(order 60) and `free-groups-and-presentations-examples` (order 61), category
`abstract-algebra`, run under `LEVELS.md` steps 0 to 10.

Started 2026-08-10. Working-tree baseline: `f9a00d89`.

## The owner's request

> Examine `https://getcurious.cc/articles/math-free-groups-word-problem` and
> enrich the A/B pair for "free groups and presentations" by adding definitions,
> theorems, and examples that are missing. I want every item to be authored,
> judged, audited, and stamped like the rest of the repo via the build workflow
> from step 1 to step 10.

Amended mid-run by the owner:

> Define and prove as much as possible within this A-B pair.

## Orchestrator decisions

**D1 — the article is a scope pointer, not a citable source.** `getcurious.cc`
is not a reputable mathematical source under the step-1 source-grounded rule. It
may be used to identify *what* is missing. Every statement it suggests must be
re-sourced against reputable literature (peer-reviewed or open textbooks,
university-hosted notes, Encyclopedia of Mathematics) before it is scaffolded,
and the article is never recorded in `sources.references`.

**D2 — the decidability material is OUT of scope.** The article's centrepiece is
the word problem: Dehn's three decision problems, Novikov–Boone, "residually
finite + finitely presented implies solvable word problem", Knuth–Bendix,
Todd–Coxeter. This library has built **no computability machinery at all** —
grep confirms no Turing machine, no decidability, no recursive function, nothing
about algorithms as objects. Under the self-contained-scope hard rule an item
may not rest on unbuilt machinery, and none of these can be honestly proved in
scope. They are **dropped, not deleted**: the batch notes must record each one
with what would license it (a computability level that does not exist yet).

**D2a — but the rewriting failures stay, as pure algebra.** The article's three
"naive algorithm fails" witnesses are *not* decidability claims. Each says: in a
named finitely presented group, a named explicit word is trivial (or not) while
a named syntactic procedure reports otherwise. That is checkable group theory
requiring no notion of *decidable*. All three verified by hand at scaffold time:

- `⟨a,b | ab⟩`: `ab = 1` so `b = a^{-1}` and the group is infinite cyclic; the
  word `ba` equals `1` yet contains no occurrence of the relator `ab`.
- `⟨a,b | aba^{-1}b^{-1}⟩ ≅ Z^2`: `w = a^2b^2a^{-2}b^{-2}` is trivial, is freely
  reduced, and contains no occurrence of the relator or its inverse — the word
  must be *lengthened* before it can be shortened.
- `⟨a,b | ab, aba⟩`: is the trivial group, since `aba = (ab)a = a` forces `a = 1`
  and then `b = 1`; on `w = aba`, deleting `ab` first strands `a`, while deleting
  `aba` empties the word — so the outcome depends on deletion order.

State these as counterexamples/false statements about a *specific rewriting
procedure*, never as claims about decidability in general.

**D3 — maximal scope (owner amendment).** Define and prove as much as the pair
can honestly hold. The A-page 100-item ceiling is a review ceiling, not a target;
the pair currently holds 6 + 1. Do not pad, and do not drop a valuable result
merely to stay small. Anything that cannot be proved in scope is dropped with a
licensing note rather than asserted.

**D4 — new items are drafts; page amendments are STAGED.** Both pages are
`status: published`, and `depcheck` raises `draft-on-published-page` when a
published page lists a non-published item. Follow the `frontier-1` precedent:
author every new item as `status: draft`, and stage the additions to the two
pages' `items:`/`examples:` lists in
`research/freegroups-1-published-amendments.md` **without applying them**. The
page edits and the status flips land together in the single publishing commit
after the owner's step-10 audit.

**D6 — the free group is CONSTRUCTED as `W(X)/~`, and its universal property is
PROVED (owner, 2026-08-10, mid-run).** The owner's words:

> I want to use the {words}/~ definition for free groups, and then prove they
> possess the universal property of free groups.

The published `def-free-group` characterises a free group *abstractly*, by the
universal property; that stays, because it is what licenses "**the** free group"
and the published uniqueness-up-to-unique-isomorphism theorem. What this run adds
is the **concrete construction** and the **theorem** that it satisfies that
characterisation — so the universal property is earned here, never assumed.

The published `def-alphabet-words-and-reduction` already supplies both halves of
the raw material: words on `X ⊔ X^{-1}`, and the relation "**freely
equivalent**" — one word carried to another by finitely many elementary
cancellations and their reverse insertions. That relation *is* `~`. **Reuse it;
do not mint a second name for it.**

The development to scaffold, each step a separate item where it carries real
proof weight:

1. Free equivalence is an equivalence relation, and concatenation descends to it:
   if `w ~ w'` and `v ~ v'` then `wv ~ w'v'`.
2. `F(X) := W(X)/~` with `[w][v] := [wv]` is a group — well-defined by (1),
   associative because concatenation is, identity `[ε]`, and
   `[x_1...x_n]^{-1} = [x_n^{-1}...x_1^{-1}]`. Associativity is *free* on this
   model, which is the whole reason to prefer it.
3. **Normal form:** every `~`-class contains exactly one reduced word. Existence
   by induction on length; uniqueness by the van der Waerden permutation
   argument — one permutation of the set of reduced words per letter, with
   `σ_{a^{-1}} ∘ σ_a = id`, inducing a map constant on `~`-classes, evaluated at
   the empty word. `def-symmetric-group` is published at order 44, below this
   page, so `Sym(-)` is legitimately citable.
4. **The universal property, proved:** for every group `G` and every `f: X → G`
   there is a unique homomorphism `φ: F(X) → G` with `φ ∘ ι = f`. Well-defined
   because an elementary move changes the product by `f(x)f(x)^{-1} = e`; unique
   because `ι(X)` generates. Conclude that `(F(X), ι)` **is** a free group in the
   sense of published `def-free-group`.
5. Corollaries: `ι` is injective (immediate from the normal form), and this model
   is uniquely isomorphic to the published reduced-word model by
   `thm-free-groups-unique-up-to-unique-isomorphism`.

**Overlap check is mandatory before minting.** `thm-reduced-words-form-the-free-group`
is published and builds the *reduced-word* model (concatenate, then freely
reduce), and `def-alphabet-words-and-reduction` says the reduction and uniqueness
facts "are proved in" it. Read that theorem in full from disk and determine
exactly which of steps 1 to 5 it already establishes. Reuse what exists; mint
only what is genuinely new; and where the two models coexist, relate them by the
published uniqueness theorem rather than restating either.

**D5 — reuse before minting.** `def-free-group` is already stated *by the
universal property*, `thm-reduced-words-form-the-free-group` already supplies
existence plus that universal property, and
`thm-free-groups-unique-up-to-unique-isomorphism` supplies uniqueness.
`def-normal-closure` and `def-commutator-and-commutator-subgroup` are published.
Do not restate any of these. Ids are immutable; grep `items/` and
`plan-spec.json` before minting.

## What the pair currently holds

A page, order 60 — `def-alphabet-words-and-reduction`, `def-free-group`,
`thm-reduced-words-form-the-free-group`, `def-group-presentation`,
`thm-free-groups-unique-up-to-unique-isomorphism`,
`thm-every-group-has-a-presentation`.

B page, order 61 — `ex-reducing-a-word-with-formal-inverses`.

## Dependency base available (order < 60)

`monoids-groups-and-subgroups` (24), `cosets-and-lagranges-theorem` (32),
`normal-subgroups-and-quotient-groups` (34),
`group-homomorphisms-and-the-isomorphism-theorems` (36),
`cyclic-groups-and-direct-products` (38),
`the-structure-of-finite-abelian-groups` (40),
`group-actions-and-cayleys-theorem` (42),
`symmetric-groups-and-the-sign-homomorphism` (44), and the ring/module pages
(46+). Symmetric and cyclic groups being available is what makes concrete
presentations provable here.

## State

| step | state |
|---|---|
| 0 batch | complete — one batch, one A/B pair |
| 1 scaffold | complete — 44 items, 37 new |
| 2 resolve deps | complete |
| 3 adjudicate | complete — freegroups-1-step3-decisions.md |
| 4 apply | complete — manifest split mint-only, gate 0/0; Alpha deferred to step 6 per D7 |
| 5 author | complete — 37 drafts, `696d3ffc` (after the Codex auth outage, fixed in `ee6c08fc`) |
| 6 audit | complete — 2 readers + Alpha + 6 refuters; 5 fatal repaired; `16d74c93` |
| 7 judge | complete — 74 verdicts, 0 nulls; coverage gate EXIT 0 with spine 59/59 and the Alpha receipt |
| 8 adjudicate rejections | complete — 2 fatal, 9 nonfatal, 2 false positive; step8-guard clean |
| 9 scope sweep | in progress |
| 10 rundown | — (sole owner pause) |

## BLOCKED at step 5 — Codex auth must be renewed by the owner

Steps 0 to 4 are complete. Step 5 authoring failed after 6 seconds, exit 1, with
`refresh_token_reused` / 401. **This is not a content failure and nothing
mathematical is wrong.**

Cause: ChatGPT-subscription auth uses a single-use refresh token. The step-1
Beta ran 63 minutes, refreshed mid-run, and wrote the rotated token into the
throwaway `CODEX_HOME` that `dispatch.mjs` deletes on exit. The canonical
`/root/.codex-writable/auth.json` kept the retired token — it is still dated
2026-07-30 — so every later Codex call 401s, including plain `codex exec`.
`codex login status` does not detect this: it reads the file and still reports
"Logged in using ChatGPT".

Fixed forward in `ee6c08fc`: `dispatch.mjs` now copies a rotated auth record
back to the canonical `CODEX_HOME`, and `preflight`'s `codex-auth` line is
relabelled because presence is not validity. Neither fix can revive the token
already retired.

**Owner action required — interactive, cannot be automated:**

```
codex login
```

Lane status while blocked:

| lane | model | state |
|---|---|---|
| Beta authoring, readers, refuters | GPT 5.6 Sol via Codex | **DOWN** |
| second judge lane | GPT 5.6 Terra via Codex | **DOWN** |
| Alpha | Claude Opus 5 | up |
| first judge lane | DeepSeek V4 Pro | up |

## Next action

After `codex login`, verify with a real call rather than `login status`:

```
node tools/preflight.mjs --judges
```

then re-dispatch step 5 unchanged:

```
node tools/dispatch.mjs --role beta \
  --brief research/freegroups-1-brief-beta-1-authoring.md \
  --label batch-1-author --run freegroups-1 --timeout 21600
```

No scaffold, adjudication, or gate result is invalidated by the outage; the
step-5 brief and the mint-only manifest are unchanged on disk.
