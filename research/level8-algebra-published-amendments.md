# Level-8 ALGEBRA — amendments staged for the publishing commit

**Status: APPLIED 2026-07-28, in the publishing commit, on the owner's "i
audited. Publish".** Amendments 1, 2 and 3 landed; amendment 4 (optional
courtesy pointer) was left unapplied per its own default. Amendment 3's open
question was resolved by NOT clearing `verification.audited` on
`cex-dirichlet-has-no-limit-anywhere`: an alias removal changes no claim
(SCHEMA §3's own materiality test), and clearing would have blocked the publish
on `published-unaudited`. The owner may override on review. `def-field` and the
three amendment-2 items carry `verification.verified` (`delegated_by: owner`)
rather than a fresh `audited`, since their final on-disk text postdates the
owner's audit; the three amendment-2 items were re-judged (all pass,
`research/level8-algebra-judge-alpha.jsonl`).

Not to be confused with `research/level8-published-amendments.md`, which is the
record of a **different** level 8 — the pre-renumber one, published 2026-07-27.
The name collision is an artefact of the renumber; this file is the current one.

Level-8 algebra = `divisibility-gcd-and-bezout` (22), `rings-subrings-and-
integral-domains` (42), `vector-spaces-and-subspaces` (68) and their `-examples`
companions. 96 items.

---

## Amendment 1 — `items/def-field.md`, axiom (M)

**Owner-approved 2026-07-28.** Approved after two independent counterexamples
showed that the strict reading of (M) makes the published `lem-of-zero-mult`
FALSE: under it the axioms admit a model with $0 \cdot 1 = 1$ — take
$\mathbb{F}_2$ and redefine $0 \cdot y := y$, which leaves (A) untouched, leaves
$(F \setminus \{0\}, \cdot)$ the trivial group, and satisfies (D) in all eight
instances.

### 1a. The axiom

OLD:

```
- **(M)** $(F \setminus \{0\}, \cdot)$ is an abelian group with identity $1$:
  multiplication is associative and commutative, $x \cdot 1 = x$ for all $x$, and
  every $x \ne 0$ has a multiplicative inverse $x^{-1}$ with $x \cdot x^{-1} = 1$.
```

NEW:

```
- **(M)** Multiplication is associative and commutative **on all of $F$**, and
  $x \cdot 1 = x$ for every $x \in F$; moreover $(F \setminus \{0\}, \cdot)$ is an
  abelian group with identity $1$, so every $x \ne 0$ has a multiplicative inverse
  $x^{-1}$ with $x \cdot x^{-1} = 1$.
```

### 1b. A Remark recording why the quantifier is explicit

Add to `## Remarks`, with the $\mathbb{F}_2$ witness above and the observation
that commutativity on all of $F$ is what turns (D) into its right-hand form
$(y+z) \cdot x = y \cdot x + z \cdot x$, which `lem-of-zero-mult` uses.

### 1c. Frontmatter

Clear `verification.audited: 2026-07-25` so `depcheck`'s `published-unaudited`
forces the owner's re-audit. `precheck: n/a` stays.

### 1d. Blast radius — verified from disk

64 direct dependents. **Nothing weakens**: the amendment states the reading every
existing proof already used, so no downstream item needs re-deriving. The only
item whose licensing CHANGES is `lem-of-zero-mult`, which becomes correctly
licensed rather than incorrectly.

Three published items reference (M) and are UNAFFECTED, because the amendment
preserves the $(F \setminus \{0\}, \cdot)$ clause verbatim: `def-group`,
`lem-of-inverse-unique`, `ex-additive-and-multiplicative-groups-of-a-field`.

---

## Amendment 2 — THE TRAP: four level-8 texts describe the OLD (M)

**Found by Alpha-8 at step 10a (finding F3), 2026-07-28.** These are level-8
items, not published ones, but they must be edited **in the same commit**, because
each one describes the current wording of (M) and its ambiguity. The moment (M)
is amended they describe text that no longer exists — the library asserting
something false about its own contents, which is the defect class this level
spent three fixes on.

Without this, the publishing commit would falsify four of the very items it
publishes.

| site | what it says now | required change |
|---|---|---|
| `items/lem-field-is-a-commutative-ring.md` `[A1]` | quotes the old gloss VERBATIM and calls it "a reading of the published axiom"; steps 1.2 and 1.3 cite `[A1]` | (M) now states this outright. `[A1]` becomes an ordinary `[L#]` citing `def-field`, or is folded into the existing field-axioms fact; steps 1.2/1.3 retag accordingly |
| `items/lem-field-is-a-commutative-ring.md` first Remark | "Why the reading has to be stated"; "This item amends no published item" | the reading no longer has to be stated. Rewrite to record that (M) states associativity, commutativity and $x \cdot 1 = x$ on all of $F$, and why that matters for the monoid and right-distributivity steps |
| `items/lem-commutative-division-ring-is-a-field.md` step 3.1 + Remark | "under either reading of its gloss"; "**The ambiguity in the gloss of axiom (M) does not arise on this side**" | there is no longer an ambiguity. Step 3.1 stays TRUE as written (it verifies both) but the "either reading" framing goes; the Remark must not describe an ambiguity that no longer exists |
| `items/lem-restriction-of-scalars.md` Remark | "`def-field` states axiom (M) [ambiguously] … the reading used above … is the standard one" | rewrite to cite the amended (M) directly |
| `library/abstract-algebra/rings-subrings-and-integral-domains.md` §"A reading of the published field axioms, declared where it is load bearing" | whole paragraph is about the ambiguity and its declaration | rewrite, or drop, since the thing it declares is now an axiom |

**Verified UNAFFECTED, do not touch:** `items/def-vector-space.md` (uses only the
$F \setminus \{0\}$ clause) and `items/ex-the-zero-ring.md` (its argument is that
$F \setminus \{0\}$ is EMPTY in the zero ring, which the amendment preserves).

**After applying, re-grep** `axiom (M)` and `gloss` across `items/` and
`library/` — §10b's own rule, written because a level-8 fix once corrected one
sentence and left the same falsehood sixteen lines away.

Each edited item needs its `verification.judge` block deleted, then reflow,
precheck and re-judge (`--batch "divisibility-gcd-and-bezout,rings-subrings-and-
integral-domains,vector-spaces-and-subspaces"`).

---

## Amendment 3 — duplicate alias

`cex-dirichlet-function` is declared in `aliases:` by BOTH
`items/cex-dirichlet-has-no-limit-anywhere.md` and
`items/cex-dirichlet-is-nowhere-continuous.md`. Verified library-wide: it is the
only duplicate alias, and nothing links to it today, so it is latent.

**No gate catches this** — `depcheck` resolves links but never checks alias
uniqueness.

FIX: remove it from `cex-dirichlet-has-no-limit-anywhere`, keeping it on
`cex-dirichlet-is-nowhere-continuous` (nowhere-continuity is the statement
canonically associated with the name "Dirichlet function").

**OPEN FOR THE OWNER:** an alias removal changes no mathematics, so it is not
obvious that `verification.audited` should be cleared the way §10b requires for a
content amendment. Ask before clearing.

**FOLLOW-UP worth considering:** add an `alias-duplicate` check to `depcheck.mjs`.
Three lines, and it would have caught this. Needs owner sign-off as a gate change,
with `ARCHITECTURE.md` updated in the same commit.

---

## Amendment 4 — OPTIONAL, owner's call, from the step-10b sweep

`items/thm-division-algorithm-in-z.md` (published) promises "The version for
$b \ne 0$, with $0 \le r < |b|$, follows once absolute values are in hand".
Level 8 delivers exactly that as `cor-division-algorithm-nonzero-divisor`, and
the published item has no pointer to it.

Nothing it says is false — the promise is fulfilled, not falsified — so this is a
courtesy to the reader, not a correction. It is left unapplied because touching a
published item clears `verification.audited` and forces a re-audit. See
`research/level8-algebra-scope-sweep.md`.
