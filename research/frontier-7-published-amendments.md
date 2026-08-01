# Frontier 7 — staged published prose amendments

These amendments were **applied on 2026-08-02** in the owner-authorized
Frontier-7 publication change, together with the sine/cosine A/B pair. This
file preserves the exact pre-publication scope-denial finding and the changes
that resolved it.

## Scope-denial sweep result

The Step-9 sweep first ran `node tools/prosecheck.mjs` on the full items and
pages corpus: 2,601 files, no mechanically decidable positional contradiction,
and 247 heuristic scope-denial candidates. Its warning count is deliberately
not treated as a mathematical result. The Frontier-7 topic/read-order review
identified one genuine future decay, occurring in the following two published
surfaces of the same earlier oscillator orientation:

1. `items/rem-classical-oscillator-is-sine-of-one-over-x.md` says that sine has
   not been defined and no sine item exists.
2. `library/real-analysis/limits-of-real-functions-examples.md` repeats that
   there is no sine item because its page has not been written.

That was accurate while the new sine items/pages were drafts. Publication would
make both sentences false, so the two amendments below were applied in the same
authorized change. No other Frontier-7 subject had a published scope-denial
claim falsified by the new content.

## Amendment 1 — oscillator orientation item

**File:** `items/rem-classical-oscillator-is-sine-of-one-over-x.md`

**Frontmatter:** add

```yaml
forward_refs: [cex-sine-of-one-over-x-has-no-limit-at-zero, ex-x-sine-of-one-over-x-tends-to-zero]
```

**Replace `## Why $\sin$ is not available here` with:**

```markdown
## The later analytic construction

This library now constructs sine and cosine from their power series, proves
their differential and addition laws, and defines pi from the first positive
zero of cosine. The promised classical examples are
[[cex-sine-of-one-over-x-has-no-limit-at-zero]] and
[[ex-x-sine-of-one-over-x-tends-to-zero]]. They occur later in the reading
order, so both links are orientation-only forward references declared in this
item's `forward_refs`; no proof on this earlier page depends on them.
```

**Replace the final paragraph of `## What is genuinely lost, and what is not`
with:**

```markdown
Those phenomena are not in scope on this earlier page; the forward-linked
analytic examples state them with sine on the later page that defines it.
```

## Amendment 2 — companion-page summary

**File:** `library/real-analysis/limits-of-real-functions-examples.md`

**Replace the paragraph beginning `**Why $\psi$ and not $\sin$.**` with:**

```markdown
**Why $\psi$ and not $\sin$.**
[[rem-classical-oscillator-is-sine-of-one-over-x]] records the classical form
of the two oscillator items as $\sin(1/x)$ and $x\sin(1/x)$, and points
forward to the later analytic examples. The remark is orientation only:
nothing on this earlier page uses or proves anything about sine, and its
elementary $\psi$ proofs remain the material developed here.
```

## Publication-time verification

The amendments landed after the Frontier-7 sine items were published in the same
authorized change. The stale model-verdict stamp was cleared, the item received
the owner's current audit date, and the targeted checks are recorded in
`research/frontier-7-publication.md`. This is an orientation/prose correction,
not a repair to a published mathematical dependency.
