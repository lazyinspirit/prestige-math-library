# frontier-11, batch 1 — step-5 gate failures (rendercheck + finite-smoke)

You are **Beta-frontier-11-1**. Your authored content is otherwise green:
`precheck`, `proof-contract` (205/205), `citecheck`, `fwdcheck`, `extcheck`,
`prosecheck` and `content-policy` all pass. Two gates fail and both are yours.

## 1. `rendercheck` — 5 errors, all `multiline-display`

**Display math must be one source line between `$$`.** A hard line break inside
`$$…$$` mis-renders in the published page. Fix by joining each display onto a
single source line.

| file | display |
|---|---|
| `items/def-complex-conjugate-real-imaginary-part-and-modulus.md` | `\operatorname{Re}z=a,\qquad \operatorname{Im}z=b,\qquad \overline z=a-bi,` |
| `items/lem-complex-conjugation-and-modulus-laws.md` | `\overline{z+w}=\overline z+\overline w,\qquad \overline{zw}=…` |
| `items/lem-complex-conjugation-and-modulus-laws.md` | `z\overline z=\|z\|^2,\qquad \|z\|\ge0,qquad \|z\|=0\Longleftrightarrow z=0,` |
| `items/thm-every-complex-number-has-a-square-root.md` | `u+vi,\qquad u=\sqrt{\frac{\|z\|+a}{2}},\qquad v=\frac{b}{2u}.` |

**One of these is a real LaTeX bug, not a line-break problem.** In
`lem-complex-conjugation-and-modulus-laws`, the third display reads

```
|z|\ge0,qquad |z|=0
```

— `qquad` is missing its backslash and would render as the literal letters
"qquad" in the published page. Fix it to `\qquad`. **Read each of the five
displays character by character while you are in there**; rendercheck reports the
line-break defect and will not necessarily report a second defect on the same
line.

Verify with:

```
node tools/rendercheck.mjs
```

## 2. `finite-smoke` — 14 errors, `unknown finite smoke check`

Your `research/frontier-11-batch-1.proof-contracts.json` puts **free-text prose**
in the `smoke.check` field, e.g. *"Enumerate the four reduced representatives and
verify the complete multiplication table…"*. That field is not a description: it
must name a **registered check** implemented in `tools/finite-smoke.mjs`. There
are exactly four:

- `tree-characterisation`
- `forest-edge-component-count`
- `induced-complement-commutes`
- `cyclic-subgroup-lagrange`

Because the names did not resolve, **`0 check(s)` actually ran** — the gate is
not "failing a countermodel search", it never executed one. The affected ids:

`ex-the-four-element-field-from-an-irreducible-quadratic`,
`cex-reducible-polynomial-quotient-is-not-a-field`,
`thm-centralizer-cardinality-from-cycle-type`,
`cor-symmetric-group-class-equation-by-cycle-type`,
`lem-normal-subgroup-containing-a-three-cycle-is-a-n`,
`lem-nontrivial-normal-subgroup-of-a-n-contains-a-three-cycle`,
`thm-alternating-group-is-simple-for-n-at-least-five`,
`ex-s-four-conjugacy-classes-and-class-equation`,
`ex-s-five-conjugacy-classes-and-class-equation`,
`ex-a-five-conjugacy-classes-and-split-five-cycles`,
`ex-klein-four-is-normal-in-a-four`,
`fs-same-cycle-type-implies-conjugate-in-a-n`,
`fs-a-n-is-simple-for-all-n-at-least-four`,
`fs-arbitrary-transposition-and-n-cycle-generate-s-n`.

**For each of the 14, do one of these two things:**

- **If a registered check genuinely applies**, use its exact name with the
  parameters that check accepts. `cyclic-subgroup-lagrange` may fit one or two of
  the group-theoretic ids — read its implementation in `tools/finite-smoke.mjs`
  before claiming it, and only use it if it actually verifies the claim you are
  anchoring. Do not bend an item's contract to fit a check.
- **Otherwise remove the `smoke` field from that contract entry**, and move the
  verification you described into the entry's **boundary/degenerate disposition
  prose**, where a written finite check belongs. The reasoning you wrote is good
  and should not be lost — it is in the wrong field, not wrong.

**Do not invent a check name, and do not edit `tools/finite-smoke.mjs`.** Adding
a new check is a tooling change, not authoring work; if you believe one of these
deserves a real implementation, say so in your notes and name the check you would
add. The orchestrator decides.

Verify with:

```
node tools/finite-smoke.mjs research/frontier-11-proof-contracts.json
```

after the orchestrator re-merges — or against your own batch file directly.

## Boundaries

Change only `items/` files you authored and your own
`research/frontier-11-batch-1.*` artifacts. The four re-homed ℂ items stay
`status: published` with `verification.audited` absent — **do not re-add it** and
do not flip them to draft. Do not touch `plan-spec.json`, `library/`, another
batch, or any normative doc.

Re-run `precheck` on any item whose text you change and keep
`verification.precheck: pass` truthful.
