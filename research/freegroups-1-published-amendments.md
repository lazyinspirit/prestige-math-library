# `freegroups-1` — amendments to PUBLISHED pages, STAGED not applied

`CLAUDE.md`, hard rule: amendments to published pages land **in the same commit
that publishes the level, never before**, with `verification.audited` cleared so
`depcheck`'s `published-unaudited` forces the owner's re-audit.

This run is **not publishing** — the owner audits at step 10. So everything here
is staged. **Nothing in this file has been applied to `library/`.**

## Why this file has to exist at all

Both pages are `status: published`. `depcheck` raises `draft-on-published-page`
when a published page lists a non-published item, and `library/` is bind-mounted
by the live site, so writing the 37 new ids into either page *now* would publish
dangling references to the public. The page edits and the `status: draft` →
`status: published` flips are therefore a single atomic publishing action,
performed only after the owner's step-10 audit.

Judging does **not** need these applied: `tools/judge-overlay.mjs` builds a
scratch copy of `library/` carrying these exact lists, and `JUDGE_LIBRARY_DIR`
points page discovery at it, so both judge lanes see true A/B-pair context while
the served pages stay untouched.

## What the owner applies at publish

Three things, together, in one commit:

1. Replace the two frontmatter lists below.
2. Flip all 37 new items from `status: draft` to `status: published`.
3. Set `verification.audited` on the 37, per the owner audit.

Existing published items are **not reordered or renumbered** — every one keeps
its current relative position, and the new material is interleaved after it in
reading order. No id is changed and none is removed.

## The staged lists

### `free-groups-and-presentations` — `items:`

```yaml
items: [def-alphabet-words-and-reduction,
        def-free-group,
        thm-reduced-words-form-the-free-group,
        def-group-presentation,
        thm-free-groups-unique-up-to-unique-isomorphism,
        thm-every-group-has-a-presentation,
        prop-free-equivalence-is-an-equivalence-and-a-congruence,
        def-word-quotient-model-of-the-free-group,
        thm-word-quotient-model-is-a-group,
        lem-formal-letters-act-by-permutations-on-reduced-words,
        thm-normal-form-for-the-word-quotient-model,
        thm-word-quotient-model-is-free,
        cor-generators-embed-in-the-word-quotient,
        cor-word-quotient-and-reduced-word-models-are-uniquely-isomorphic,
        def-free-basis,
        thm-finite-free-bases-have-the-same-cardinality,
        def-rank-of-a-finite-rank-free-group,
        def-relators-relations-and-finite-presentations,
        prop-normal-closure-is-products-of-conjugates,
        prop-equality-of-words-in-a-presentation,
        thm-von-dyck,
        cor-every-finite-group-is-finitely-presented,
        def-abelianisation-of-a-group,
        def-free-abelian-group,
        thm-abelianisation-of-a-free-group-is-free-abelian,
        def-tietze-transformations,
        prop-tietze-transformations-preserve-presented-groups,
        thm-tietze-transformations-connect-finite-presentations,
        def-cyclically-reduced-word,
        lem-cyclic-reduction-normal-form,
        thm-free-groups-are-torsion-free,
        thm-conjugacy-of-cyclically-reduced-words]
```

32 ids: 6 already published (unmoved), 26 new.

### `free-groups-and-presentations-examples` — `examples:`

```yaml
examples: [ex-reducing-a-word-with-formal-inverses,
           ex-free-group-on-the-empty-set,
           ex-free-group-on-one-generator,
           ex-free-group-on-two-generators-is-not-abelian,
           ex-presentation-of-a-finite-cyclic-group,
           ex-presentation-of-a-dihedral-group,
           ex-presentation-of-the-klein-four-group,
           ex-presentation-of-z-squared,
           ex-presentation-of-the-symmetric-group-on-three-letters,
           cex-delete-only-relator-rewriting-misses-ba,
           cex-delete-only-relator-rewriting-can-require-lengthening,
           cex-delete-only-relator-rewriting-is-order-dependent]
```

12 ids: 1 already published (unmoved), 11 new.

## What breaks if this is never applied

The 37 items would exist in `items/` but appear on no page. The renderer builds
pages from these frontmatter lists, so the mathematics would be invisible to
readers and unreachable from the index — present in the repository, absent from
the library. Nothing already published breaks; the run would simply have no
reader-facing effect.

## Status

Staged 2026-08-10 during step 6, after reader 1 correctly flagged the artifact
as missing. Regenerated from `research/freegroups-1-batch-1.pages.full.json`,
which carries the step-3-approved reading order. If Alpha's step-6/8 repairs
change any id or ordering, this file is regenerated before step 10 — the
orchestrator owns it, not the readers.
