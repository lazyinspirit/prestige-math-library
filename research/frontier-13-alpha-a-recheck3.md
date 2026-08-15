# frontier-13 — Group A, Alpha re-check round 3 (targeted: batch 2 only)

**Scope.** `cor-number-of-solutions-of-a-binomial-congruence` on
`primitive-roots-and-unit-groups-modulo-n` (order 57.001) only. Orders 58, 96, 68
and 106 were not re-opened; their round-2 `ready-for-splice` verdicts stand.

**Filename.** Written as `-recheck3.md`, not `-recheck2.md` as the standing header
text says: `research/frontier-13-alpha-a-recheck2.md` is the durable round-2
evidence record and overwriting it would destroy the baseline this round is
measured against.

---

## Verdict

| order | page | verdict |
|---|---|---|
| 57.001 | `primitive-roots-and-unit-groups-modulo-n` | **ready-for-splice** |

All five dispatch points clear. Everything below was recomputed from disk in this
session; the Beta's own repair record was read only to locate its claims, never as
evidence for them.

---

## 1. Present and positioned (point 1) — clear

`frontier-13-batch-2.pages.json`, page 57.001: **28 items**, up from 27.

```
11  thm-eulers-criterion-for-binomial-congruences   (theorem)
12  cor-number-of-solutions-of-a-binomial-congruence (corollary)
13  lem-primitive-root-lift-to-prime-square         (lemma)
```

Immediately after the criterion, as specified. Companion B page unchanged at 11;
order 68 / 69 unchanged at 23 / 15.

## 2. Statement is the right claim, and it is true (point 2) — clear

> If $n$ has a primitive root, $\gcd(a,n)=1$, $m\ge1$, and $x^m\equiv a\pmod n$
> is solvable, then it has exactly $\gcd(\varphi(n),m)$ solution classes modulo $n$.

The hypotheses are the preceding theorem's three, plus the solvability the
criterion decides — which is the correct antecedent, since without it the count is
$0$ rather than $\gcd(\varphi(n),m)$. The conclusion counts *solution classes
modulo $n$*, not integer solutions, so nothing is overclaimed against the proof.

**Truth, not well-formedness.** Brute-forced over every modulus below 120 admitting
a primitive root, $m=1..14$, every unit $a$, restricted to instances where the
congruence is actually solvable: **18,895 instances, 0 counterexamples.** The sweep
includes the boundaries the contract claims to discharge — $n=1$, $n=2$, $m=1$ — so
those are checked rather than asserted. The proof route is also sound as sketched:
solutions are forced to be units, the index parametrises them bijectively by
exponents mod $\varphi(n)$, and $x^m\equiv a$ becomes $my\equiv\operatorname{ind}_g(a)
\pmod{\varphi(n)}$, whose solvable-case count is $\gcd(m,\varphi(n))$.

## 3. Deps: exactly four, nothing new (point 3) — clear

```
thm-eulers-criterion-for-binomial-congruences        in-pair, position 11
prop-index-calculus-modulo-n                         in-pair, position 4
def-index-of-a-unit-relative-to-a-primitive-root     in-pair, position 3
thm-linear-congruence-solvability-and-solution-count published
```

The four I named, no more. All three in-pair deps sit strictly before position 12.

**No new published dependency:** `thm-linear-congruence-solvability-and-solution-count`
is already a declared dep of `thm-eulers-criterion-for-binomial-congruences` one
position above, and is `status: published` on disk, homed on
`congruences-and-the-chinese-remainder-theorem`.

**No new `requires` edge:** page `requires` is `["splitting-fields-examples"]` in
the batch file and `["splitting-fields-examples"]` in `plan-spec.json` — identical,
unchanged.

**Independent closure audit, whole batch:** 77 items, 257 dependency edges (157
published, 62 same-page-earlier, 38 B-page-to-own-A-companion). **0 unresolved ids,
0 cross-pair edges, 0 same-page order violations, 0 duplicate ids, 0 collisions
with published ids** — so the new id is free and immutability costs nothing.

## 4. The obligations moved with it (point 4) — clear

This is the shape the run keeps dropping. All four obligations landed.

**Proof contract.** Entry present. Input map covers steps 1.1, 2.1, 3.1 — each
declared exactly once, and every citation's `uses` names a declared step. Checked
across all 67 batch-2 contracts: **0 input-map problems** (no duplicate step, no
empty step list, no citation pointing at an undeclared step).

**Citations quote propositions, not clause openings.** All four do: L1 is the
criterion's full biconditional, L2 the full index definition, L3 both index-calculus
congruences, L4 the linear-congruence theorem including *the count clause* — which
is the load-bearing half and the one a clause-opening quote would have lost.
L4 is verbatim against disk. Batch-wide: **137/137 published-target quotes match
disk** (was 136/136 at round 2; the delta is exactly this one new citation).

**The unit step is not skipped.** Step 2.1 explicitly proves every solution is a
unit before parametrising. That was the one obligation this proof could silently
lose, since the index is only defined on units.

**Boundaries.** Eight classes dispositioned; $n=1$, $m=1$ and the trivial unit
group are `checked` with evidence, the two iff cases correctly `not_applicable` for
a one-directional counting result.

**Provenance, both axes, with rationale.** `statement: literature-derived`,
`proof: ai-altered`, with a written rationale in the notes (Hackman C.III.1 carries
the exact count; the route is reorganised around the page's local index machinery
and the published count theorem). A `literature-derived` statement is legitimately
usable as a later dependency.

**Coverage row names both items.** The Hackman C.III.1 row is now:

```json
{ "name": "C.III.1 Theorem (Euler's Criterion), ...", "disposition": "included",
  "item": "thm-eulers-criterion-for-binomial-congruences",
  "items": ["thm-eulers-criterion-for-binomial-congruences",
            "cor-number-of-solutions-of-a-binomial-congruence"] }
```

One heading yielding two results now names both, which is what I asked for. Two
notes for the record, neither blocking — see §7.

## 5. General/special inversion resolved (point 5) — clear

`cor-power-congruence-solution-count-modulo-a-prime` (position 10) gives
$\gcd(d,p-1)$ nonzero solutions of $x^d\equiv1\pmod p$. It is now the $a=1$,
$n=p$ instance of the position-12 general count — verified consistent:
$\gcd(\varphi(p),d)=\gcd(p-1,d)$. The page no longer states a general *solvability*
criterion alongside a strictly narrower *count*. The special case keeps its own
independent proof from cyclicity of $(\mathbb Z/p)^*$ and its position before the
general theorem, which is correct: it is a stepping stone, not a corollary of what
follows it, so no cycle is introduced.

## 6. Nothing else regressed

Every figure recomputed from disk; the round-2 column is my own prior measurement.

| batch 2 | round 2 | now | expected delta |
|---|---|---|---|
| A / B item counts (57.001, 68) | 27 / 11, 23 / 15 | **28** / 11, 23 / 15 | +1 A |
| contracts / empty / citations | 66 / 0 / 229 | **67** / 0 / **233** | +1 / 0 / +4 |
| published-target quotes vs disk | 136 / 136 | **137 / 137** | +1 |
| coverage harvested results | 100 | 100 | +0 (row extended, no new heading) |
| `coverage-checklist.mjs` | 0 err, 0 warn | 0 err, 0 warn | — |
| `content-policy.mjs --manifest-only` | 76 items, 0/0 | **77** items, 0/0 | +1 |

Every delta is exactly the arithmetic of adding one item with four citations, and
nothing else. Had the pass touched another item, the citation total or the quote set
would have moved off `229 + 4` and `136 + 1`; they did not. `content-policy` at 0
errors also clears `notation-iota-applied` for the new item. `validate-plan.mjs`
on the live plan is OK — acyclic, no item-level cycles, forward references, B-page
dependencies or unresolved ids; its `redundant-prereq` warnings are pre-existing and
on `categories-functors-and-natural-transformations`, unrelated to this batch. Page
size 28 is far under the 60-item split ceiling.

**Id versus content**, last free moment: `cor-number-of-solutions-of-a-binomial-congruence`
names exactly what the statement counts, `cor-` matches `kind: corollary`, and the
id is unused anywhere in `items/` or the batch. No rename wanted.

## 7. For the orchestrator and the step-4 splice

1. **`items` is a non-schema key.** `coverage-checklist.mjs` reads only
   `result.item` (line 122); it never looks at `items`, so the second id is
   carried but not gate-validated. The row satisfies my round-2 requirement and the
   gate passes either way — but a downstream consumer reading only `item` will see
   one result where two exist. Worth deciding once, at step 6's harvest-faithfulness
   check, whether `items` becomes schema or the convention becomes one row per
   result. Not a splice blocker.
2. **`notes.md:296` is superseded, not wrong.** The earlier dated entry still reads
   "the section and C.III.1 are included as `thm-eulers-criterion-for-binomial-congruences`".
   The later dated entry at 372–374 explicitly corrects it. The file is an
   append-only dated log, so this is its history rather than a live contradiction —
   but a step-6 reader who greps for C.III.1 will hit the stale line first.
3. **No blocker.** Nothing in group A remains open. Orders 57.001, 58, 96, 68 and
   106 are all `ready-for-splice`.
