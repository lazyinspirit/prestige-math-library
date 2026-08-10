# `frontier-10` — the `\iota` notation change on the free-groups pair

Owner instruction, 2026-08-11:

> Yes, I want the \iota notation to be gone for free groups A/B pairs, no need to
> rejudge and restamp since it's just a notation change.

## Owner waiver — recorded because it overrides a standing rule

Under `SCHEMA.md` §3 any material rewrite of a published item voids
`verification.judge` and forces a rejudge, and `CLAUDE.md`'s
published-dependency-repair protocol additionally requires deleting
`verification.audited`. **The owner explicitly waived both for this change.** No
`verification` block in any of the 12 items was touched — verified by diff. No
judge call was spent and no stamp was rewritten.

Touch snapshot `pre-iota-free-groups` was taken in
`research/frontier-10-touches.json` before the first edit, so the window is
auditable even though nothing downstream was re-gated.

## What changed — 12 items, 33 lines

**Eleven items: the free-group basis inclusion, renamed `\iota` → `i`.**
Purely notational. `\iota'` → `i'`, `\iota_{\mathrm{word}}` → `i_{\mathrm{word}}`,
`\iota_{\mathrm{ab}}` → `i_{\mathrm{ab}}` follow automatically. `i` was checked
first for collisions: the twelve items contained no bare math `i` as a variable,
so nothing is shadowed.

- cor-generators-embed-in-the-word-quotient
- cor-word-quotient-and-reduced-word-models-are-uniquely-isomorphic
- def-free-abelian-group
- def-free-basis
- def-free-group
- def-word-quotient-model-of-the-free-group
- ex-free-group-on-one-generator
- ex-free-group-on-the-empty-set
- thm-abelianisation-of-a-free-group-is-free-abelian
- thm-free-groups-unique-up-to-unique-isomorphism
- thm-word-quotient-model-is-free

**One item is NOT purely notational, and the owner should know it:**
`thm-finite-free-bases-have-the-same-cardinality` used `\iota` for the *other*
meaning — the canonical embedding ℕ → ℝ — because `lem-power-monotone` [L3] is
stated for a real base `a > 1` while step 3.1 produces the equality
`2^{|B|} = 2^{|C|}` in ℕ. Deleting the symbol would have made its [L2] fact
vacuous (`m^n = m^n`), so [L2] was restated to say the same thing without naming
the map:

- **was** — `[L2] For the canonical embedding $\iota:\mathbb N\to\mathbb R$, one has $\iota(m^n)=\iota(m)^n$ for $m,n\in\mathbb N$`
- **now** — `[L2] For $m,n\in\mathbb N$, the natural number $m^n$ and the real number $m^n$ agree under the canonical inclusion $\mathbb N\subseteq\mathbb R$`

and step 4.1 now reads "…[L2] lets the equality of step 3.1 be read in ℝ, and
[L3] applied to the base $2>1$ gives $2^{|B|}<2^{|C|}$…". Same logic, same cited
facts, same conclusion; only the transfer is phrased through the inclusion rather
than through a named function.

## Gates

`precheck`, `depcheck`, `rendercheck`, `prosecheck`, `fwdcheck`, `extcheck` all
pass. `rendercheck` earned its keep here: a first naive `sed 's/\\iota/i/g'`
silently produced `\circi`, `\phii` and `\psii` — ten KaTeX parse errors from
control words swallowing the replacement. Redone with a boundary-aware
substitution that inserts a space after a preceding control word.

## Not in scope

The applied `\iota(n)` form elsewhere in the library — **350 items, ~4,900
occurrences** — is untouched and remains an open owner decision. New content is
gated against it by `content-policy.mjs` error `notation-iota-applied`.
