# Frontier 7 — staged published prose amendments

These are **not applied**. All Frontier-7 content is draft, so the current
published prose remains true. The two amendments become necessary only if the
sine/cosine A/B pair is approved for publication: they must land in that same
authorized publication change, after the owner audit, never beforehand.

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

That is currently accurate because the new sine items/pages are drafts. If they
are published, both sentences become false. No other Frontier-7 subject has a
published scope-denial claim falsified by the still-draft content. No published
file was edited in this run, so no post-repair re-grep is due now.

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

## Publication-time verification required

Apply the two amendments only after the Frontier-7 sine items are published in
the same authorized change. Then clear the old published verification stamps
from the amended item, audit it under the owner-approved publication protocol,
run `fwdcheck`, `prosecheck`, and a targeted re-grep of both files, and record
the result in the publication receipt. This is an orientation/prose correction,
not a repair to a published mathematical dependency.
