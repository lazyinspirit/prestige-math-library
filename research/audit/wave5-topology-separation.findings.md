# Wave 5 — Audit-Beta findings, `topology-separation` batch (A1/A2)

Scope of record: `research/audit/wave5-topology-separation.pages.json` —
2 A/B pairs, **72 items**.

| page | kind | items |
|---|---|---|
| `separation-axioms` | A | 28 |
| `separation-axioms-examples` | B | 8 |
| `nets-and-filters` | A | 28 |
| `nets-and-filters-examples` | B | 8 |

**Coverage statement.** All 72 items were read from disk in full. Every one of
the **339 numbered proof steps** in the **51 proof-bearing items** was verified
against its declared `[A#]`/`[L#]`/`[F#]` facts, and every one of the **374
fact-to-target citations** was verified against the cited item's own on-disk
`Statement`/`Definition`/`Example` section — 120 distinct citation targets were
opened, including every cross-category target (metric spaces, ordinals, filters,
compactness, series). The two A-page summaries and every Remark were read with
proof-step suspicion. No exception; nothing was sampled.

**Headline: no fatal defect.** No false statement, no invalid inference, and no
mis-citation that changes a hypothesis, quantifier, direction or conclusion was
found in any Statement, proof step, Verification, Refutation or Remark. Ten
nonfatal findings are recorded below (N1–N10); two of them (N1, N2) are the
reason `proof-contract.mjs` currently reports 3 errors on this batch, and both
have a one-line repair. One provenance row is escalated to Alpha for the
concurrence its evidence class requires (E1).

---

## Checkpoint (substage / next action)

- **Substage:** A4 complete. Everything A3 approved for this batch is applied.
- **Artifacts owned:** `wave5-topology-separation.{provenance.jsonl,findings.md,proof-contracts.json}`,
  plus the generators that emit the first and third
  (`research/audit/gen-wave5-sep-provenance.mjs`,
  `research/audit/gen-wave5-sep-contracts.mjs`), the A4 applier
  (`research/audit/apply-wave5-sep-retag.mjs`) and two read-only helpers used
  during the audit (`wave5-sep-dump.mjs`, `wave5-sep-wiki.mjs`).
- **Next action:** A6 — Alpha certifies the three materially repaired items
  (none may be self-certified) and rules on E1's concurrence, which is the one
  thing standing between this batch and a green A4 gate. See "A4 — applied".
- **Working-tree baseline at A4 start:** commit `4fec483`. Item files are now
  modified: 72 retagged, 3 of them also materially repaired.

---

## What was checked, and the mechanical results

| gate | result |
|---|---|
| `citecheck.mjs` on all 72 items | **pass** — "every recognised elementary move cites a home that states it" |
| `proof-contract.mjs --strict` on this batch | 3 errors, all of them N1/N2 (an `[L#]` fact no numbered step cites); everything else validates: 374 citation quotes are exact substrings of the cited section, 339 steps are each mapped exactly once, 408 boundary dispositions accepted |
| `risk-report.mjs` on this batch | 51 items routed: **33 CRITICAL, 9 HIGH, 9 MODERATE**. These are structural signals (biconditionals, dependency counts, limiting language), not defects; every contract carries `risk_review: pending` for Alpha's A5/A6 routing |
| `finite-smoke.mjs` | not applicable — no item in this batch has a finite/combinatorial claim with a bounded countermodel check available |

---

## N1 — `lem-ordinal-order-topology-is-t3` declares a fact no step cites

**Class (b), citation precision. Nonfatal.**

`[L6]` reads: "A closed neighbourhood of a point is a neighbourhood of it that
is closed, and $\overline{K} = K$ for such a $K$
([[def-interior-closure-boundary-top]])." No numbered step tags `[L6]`. The step
that uses it is 4.1, which concludes that the basic set $B$ "is closed by step
3.1 and open, hence a **closed neighbourhood** of $\xi$ inside $N$", tagged
`[step 3.1, L4]`.

The mathematics is untouched: the notion is used correctly and the fact states
it correctly. What fails is the mechanical contract, which requires every
declared fact to be cited by at least one step, so this is the first of the
three `proof-contract.mjs` errors.

**Proposed repair (smallest correction).** Add `L6` to step 4.1's tag list:
`[step 3.1, L4]` → `[step 3.1, L4, L6]`. No prose, no statement, no dependency
changes. This is a Facts/step-tag change the judge can see, so it is material:
dedicated snapshot, stale `verification.judge`/`audited` deleted, A6 reading.

---

## N2 — `ex-the-particular-point-topology-in-the-separation-hierarchy` declares a fact no step cites

**Class (b), citation precision. Nonfatal.**

`[L3]` reads: "A set is closed exactly when its complement is open, and
$\overline{A}$ is the smallest closed superset of $A$
([[def-interior-closure-boundary-top]], [[thm-closure-characterisation-top]],
claim 2)." No numbered step tags `[L3]`. Its second half is used in the **first
Remark** ("$\overline{\{p\}} = X$, because the only closed set containing $p$ is
$X$"), which is not a numbered step, and its first half is redundant with `[A1]`,
which already lists the closed sets of $\mathcal{T}_p$ outright. This is the
source of the other two `proof-contract.mjs` errors.

**Proposed repairs, Alpha's choice.** Either (i) tag `L3` in steps 1.3 and 2.1,
where closedness of $\{p\}$ and of $\{x\}$ is asserted — smallest edit, keeps
the fact; or (ii) drop `[L3]` from the Facts block, the Remark already carrying
its own `[[thm-closure-characterisation-top]]` link and `deps` being unaffected.
I recommend (i): it does not remove text, and the two steps do use closedness.

---

## N3 — `thm-metric-spaces-are-completely-normal` `[L6]` cites a definition for an existence claim

**Class (b), citation precision. Nonfatal; I recommend no repair.**

`[L6]` reads: "A two-element set of reals has a maximum, which is one of the two
and is at least the other ([[def-max-min]])." `def-max-min` **defines** maximum
and minimum and proves uniqueness; it does not assert that a two-element set has
one. Its own Remark points at `lem-finite-set-has-max` for existence, and the two
sibling items on the same page cite the pair together
(`thm-metric-spaces-are-tychonoff-and-perfectly-normal` `[L6]` and
`lem-the-k-topology-is-hausdorff-and-not-regular` `[L5]`: "([[def-max-min]],
[[lem-finite-set-has-max]])").

The claim is true and closes in well under 30 seconds from trichotomy, and the
step that uses it (5.2, $r_a + s_b \le 2\max\{r_a,s_b\}$) is correct. Repairing
it means editing a Facts line and adding `lem-finite-set-has-max` to `deps`,
which is a material change for a quirk the standing rule says to spend no effort
on. Recorded, not chased.

---

## N4 — `ex-sequential-fan-is-frechet-urysohn-not-first-countable` step 1.1 omits the trivial case

**Class (b). Nonfatal, 30-second gap.**

Step 1.1 opens "Suppose $\infty \in \overline{A}$" and concludes "Hence one spoke
meets $A$ infinitely." That conclusion needs $\infty \notin A$: for $A =
\{\infty\}$ (which is closed, its complement being all the isolated points) the
hypothesis holds and no spoke meets $A$ at all. The neighbourhood the step
builds does not miss $A$ in that case, because it contains $\infty$.

Nothing downstream breaks: when $\infty \in A$ the Fréchet–Urysohn conclusion is
the constant sequence, and step 2.1 already handles isolated closure points that
way. A reader closes it instantly. **Optional repair:** in step 1.1, read
"Suppose $\infty \in \overline{A}$" as "Suppose $\infty \in \overline{A}
\setminus A$, the case $\infty \in A$ being the constant sequence".

---

## N5 — `ex-arens-space-is-sequential-not-frechet-urysohn` step 1.2 leaves two trivial cases implicit

**Class (b). Nonfatal, 30-second gap. Same shape as N4.**

In step 1.2, "If $x_n \in \overline{C}$, then $C$ meets its $n$-th row
arbitrarily far out" presumes $x_n \notin C$ (otherwise there is nothing to
prove), and the last part, "These tails form a neighbourhood of $\infty$
disjoint from $C$", presumes $\infty \notin C$ (otherwise, again, nothing to
prove). Both are the trivial branch of the case split and neither affects the
conclusion. Recorded, not chased.

---

## N6 — `thm-compact-hausdorff-tychonoff-from-the-ultrafilter-lemma` step 2.1 misstates the codomain

**Class (b). Nonfatal, notation.**

Step 2.1 reads: "The uniqueness in step 1.1 defines a function $p : I \to
\prod_i X_i$, rather than choosing a family of limits." The object it defines is
a **point of** the product, i.e. $p \in \prod_{i \in I} X_i$, equivalently a
function on $I$ with $p(i) = p_i \in X_i$. As written the codomain is the
product itself.

The argument is right and is the load-bearing part of the proof — it is exactly
why no choice function over $I$ is needed — and step 2.2 uses $p$ correctly as a
point of $P$. **Optional repair:** "defines a point $p \in \prod_{i \in I} X_i$,
namely the function $i \mapsto p_i$, rather than choosing a family of limits."

---

## N7 — two examples cite a lemma about $\mathbb{R}$ for maxima of finite sets of naturals

**Class (b), citation precision. Nonfatal.**

`ex-sequential-fan-is-frechet-urysohn-not-first-countable` `[L1]` and
`ex-arens-space-is-sequential-not-frechet-urysohn` `[L2]` both say "Every
nonempty finite subset of $\mathbb{N}$ has a maximum ... ([[lem-finite-set-has-max]],
...)". `lem-finite-set-has-max` is stated for **reals**: "for every $n \in
\mathbb{N}$ and all $a_0, \dots, a_n \in \mathbb{R}$, the set $\{a_0, \dots,
a_n\}$ has a maximum and a minimum". In this library a natural number is a von
Neumann natural and is not a real (that is why `def-canonical-natural` exists),
so the cited home is stated over the wrong domain.

The claim used is true in ZF and elementary (a nonempty finite set of naturals
has a maximum, by the well-ordering already cited beside it in the same fact),
and both items also cite `thm-well-ordering-principle`, which is over
$\mathbb{N}$. A minor citational quirk under the standing rule: recorded, not
chased.

---

## N8 — the nets page assumes "the ultrafilter lemma", which the library states only under AC

**Not a defect. Recorded so Alpha does not have to rediscover it.**

Five items (`thm-compactness-via-nets-filters-and-ultrafilters`,
`lem-every-net-has-a-universal-subnet`, `cor-compactness-via-universal-nets`,
`thm-compact-hausdorff-tychonoff-from-the-ultrafilter-lemma`,
`ex-free-ultrafilter-converging-in-a-convergent-sequence-space`) open with
"**Assume the ultrafilter lemma**" and cite `[[thm-ultrafilter-lemma]]` for the
extension of a filter to an ultrafilter. That target's own Statement reads
"**Assume the Axiom of Choice** … Then there is an ultrafilter $\mathcal{U}$ on
$X$ with $\mathcal{F}_0 \subseteq \mathcal{U}$", and it is the library's only
home for the named principle.

So the citing items assume **less** than the target proves from, and every
consequence they draw is true a fortiori under AC. The citation is a pointer to
the named statement, not a use of a theorem whose hypothesis they fail to meet.
Nothing needs repair; the alternative (an item stating UL as a standalone
principle) is a scope decision for the owner, not an audit repair.
`rem-tychonoff-choice-strengths` already declines to compare the two strengths.

---

## N9 — 60 of 72 items will need new `sources.references` URLs at A4

**Class (c), provenance retag. Mechanical consequence of A1, not a defect.**

Every `literature-derived` and `ai-altered` determination owes a reader-visible
URL. Measured against the current frontmatter: **11 items** already carry every
URL this audit recorded, **31** carry some of them, **29** carry none of them
(the `nets-and-filters` pair carries a single reference per item throughout), and
**1** is the `established-knowledge` row of E1, which carries none by
construction. Total additions at A4: **99 URLs across 60 items**, all verified
HTTP 200 on 2026-08-05, all inside the pure-retag pass.

---

## N10 — `fs-every-hausdorff-space-is-regular` gives a loose reason in its Statement

**Class (d), debatable restatement. Nonfatal; I recommend no repair.**

The Statement says: "Since regularity together with $T_1$ gives back the
Hausdorff condition ([[lem-urysohn-sits-between-hausdorff-and-regular-plus-t1]]),
the arrow $T_2 \Rightarrow T_3$ is refuted as well: the witness is $T_1$, so it
is a Hausdorff space that is not $T_3$."

The conclusion is correct and the proof of it is correct, but the stated reason
is not what does the work: what refutes $T_2 \Rightarrow T_3$ is that the
witness is Hausdorff, is $T_1$, and is **not regular**, hence not $T_3$. The
cited lemma is the converse direction and is not needed. The clause is
rhetorical rather than false, so under the triage rule it is recorded only.

---

## E1 — one provenance row escalated for Alpha's concurrence

`ex-free-ultrafilter-converging-in-a-convergent-sequence-space` is recorded as
`statement: ai-altered`, `evidence: established-knowledge`, with **no URL**. The
construction — push a free ultrafilter on $\mathbb{N}$ forward along the
inclusion into $\mathbb{N} \cup \{\infty\}$, where the neighbourhoods of $\infty$
are the tails, and observe that it converges to $\infty$ — is textbook folklore
about the one-point compactification of a discrete space. I located every
ingredient (free ultrafilters under the ultrafilter lemma, filter convergence,
the convergent-sequence space) but no single source stating this example, and it
is plainly **not** AI-invented, so the owner rule forbids `ai-generated`.

Per the A1 table this row is valid only once Alpha independently concurs; until
then it must not be read as a sourced determination. **This is the only row in
the batch that needs concurrence.**

---

## Provenance summary (A1)

72 rows in `wave5-topology-separation.provenance.jsonl`, one per item, none
previously tagged (the manifest excluded already-tagged items mechanically).

| statement / proof / evidence | items |
|---|---|
| `literature-derived` / `ai-generated` / `exact-source` | 22 |
| `literature-derived` / `not-applicable` / `exact-source` | 3 |
| `literature-derived` / `ai-altered` / `exact-source` | 2 |
| `ai-altered` / `ai-generated` / `semantic-source` | 40 |
| `ai-altered` / `not-applicable` / `semantic-source` | 3 |
| `ai-altered` / `ai-altered` / `semantic-source` | 1 |
| `ai-altered` / `ai-generated` / `established-knowledge` | 1 (E1) |

**No item was classified `ai-generated`.** Every statement in the batch is
established mathematics with a located source or, in the single case above, a
recoverable folklore construction; the owner rule requires a positive
determination of genuine AI invention, and none was warranted. That also keeps
every item eligible as a dependency target, which matters here: this batch is
heavily depended on (39 consumers for `def-t0-and-t1-spaces`, 37 for
`def-normal-and-t4-spaces`, 29 for `def-regular-and-t3-spaces`).

**Where the labels came from.** Statements were checked against the source's own
clause, not against memory: the Wikipedia articles were pulled as plain text
through the action API and read (Kolmogorov/T1, separation axioms, separated
sets, $G_\delta$/$F_\sigma$, regular, Urysohn and completely Hausdorff,
Tychonoff, normal, zero/cozero, order topology, K-topology, cofiniteness,
Sierpiński, particular point, cocountable, discrete, trivial, Tychonoff plank,
first uncountable ordinal, net, directed set, subnet, filter, ultrafilter, BPI,
compact space, Tychonoff's theorem, sequential space, Fréchet–Urysohn,
unconditional and absolute convergence, Hausdorff, first countable), and the
Munkres section notes were fetched and extracted with `pdftotext`
(§13 basis and the K-topology basis, §17 closed sets and Theorem 17.8, §31 the
separation axioms with Lemma 31.1 and Example 1, §32 Theorem 32.2, §33 the
Urysohn lemma). Two sourced facts are worth naming because they carry the
convention forks this page turns on:

- Munkres §31 defines regularity and normality **with closed singletons built
  in** ("Suppose that one-point sets are closed in space X. Then X is regular
  …"), which is exactly the fork `def-regular-and-t3-spaces` and
  `def-normal-and-t4-spaces` describe and take the other side of.
- The Urysohn article's own naming-conventions section records that Steen and
  Seebach exchange "Urysohn" and "completely Hausdorff", which is the collision
  `def-urysohn-space` flags.

---

## Notable confirmations (checked, and clean)

These are recorded because they are the places a defect would have been
expensive, and each was verified rather than assumed.

- **The K-topology non-regularity proof matches its source step for step.**
  Munkres §31 Example 1 finishes by choosing "any $z$ such that
  $\max\{c, 1/(n+1)\} < z < 1/n$"; the library item, whose $K$ is index-shifted
  to $\{1/(n+1)\}$, takes $t := \max\{\max\{a,c\}, 1/(n+2)\}$ and
  $z := (t + 1/(n+1))/2$, and step 9.1 proves the interval $(t, 1/(n+1))$ misses
  $K$ rather than asserting it. The item's own Remark says that closing this gap
  is why the argument exists.
- **The deleted Tychonoff plank is the sourced witness**, with the sourced pair
  of closed sets, and its one choice principle is confined where the statement
  says: step 8.1 takes the **least** $\alpha_n$ (no dependent choice), and
  $\mathrm{AC}_\omega$ enters only inside
  `thm-countable-subsets-of-omega-one-are-bounded` at step 9.1.
- **The perfect-to-complete normality proof spends countable choice exactly
  once**, at step 4.1, as its statement claims; steps 7.1–8.1 dispose of the
  index comparison including the boundary case $n = m$.
- **All four false statements are genuinely false and their witnesses work**:
  cofinite on $\mathbb{R}$ ($T_1$, not Hausdorff), indiscrete on two points
  (normal, not $T_0$), the $K$-topology (Hausdorff, not regular), cocountable on
  $\mathbb{R}$ (unique sequential limits, not Hausdorff).
- **No published-claim decay was found.** The one place it would have shown,
  `rem-separation-axiom-conventions` §5, is already current: it says general
  topological compactness "**is** now available at this point in the reading
  order ([[def-compact-space]])" and names
  `thm-compact-subset-of-a-hausdorff-space-is-closed` for the two separation
  lemmas the missing packaged statement would need — and that target does state
  both (point versus compact set, and two disjoint compact sets). The forward
  reference in `ex-sierpinski-space-is-t0-normal-and-not-regular` to
  `fs-every-regular-space-is-normal` is declared in `forward_refs`, the target
  exists, is published, and does refute the implication the Remark says it does.
- **The subnet convention is Kelley's**, and every result that depends on the
  choice of convention (cluster point iff convergent subnet, every net has a
  universal subnet, the subnet-is-not-a-subsequence refutation) is stated and
  proved under it, with the stricter Willard convention named and declined in
  `def-subnet`'s Remark.
- **The independence claims about Urysohn's lemma are not asserted on the
  library's own authority.** `rem-separation-axiom-conventions` §3 says Urysohn's
  lemma is not a theorem of ZF, nor of ZF + countable choice, and points at
  `rem-urysohn-lemma-not-a-zf-theorem`, which carries the Läuchli and Tachtsis
  attributions and is declared as an `external_refs` mention rather than a
  dependency.

---

## A4 — applied

Everything below was authorised by `research/audit/wave5-A3.md` (§2, §3, §5c, §6,
§9). Nothing else was touched. No deletion of an item, no id change, and no
reading-order change was made; the A10 queue from this batch is still empty.

### The pure retag — 72 items, 99 URLs, no dedicated snapshots

Applied by `research/audit/apply-wave5-sep-retag.mjs`, which writes exactly two
things and is idempotent: the `provenance:` block (after `origin:`, where every
already-tagged item in the corpus carries it) and any ledger URL not already in
`sources.references`. It never touches `verification:`, the body, or `deps`, so
the retag by itself voids no judge stamp.

- **72 of 72** items now carry `provenance.statement` / `provenance.proof`
  matching their ledger row; a re-run reports `72 already tagged, 72 needed
  nothing`.
- **99 URLs added across 60 items**, which is exactly the count §5c approved.
  Titles follow the corpus's own conventions — `"<Article> (Wikipedia)"`,
  `"<topic> (nLab)"`, and for the five ETSU PDFs the existing
  `"R. Gardner, Introduction to Topology, notes on Munkres Section NN: <Title>
  (East Tennessee State University)"` form. The three Dan Ma blog posts are new
  to the corpus and are titled `"D. Ma, <Title> (Dan Ma's Topology Blog)"`.
- No item in this batch carried a legacy `authorship:` line, so D5's
  delete-in-the-same-edit obligation was vacuous here.
- No `generation:` block was written, because **no item in this batch is
  `ai-generated`** — the block is required only for that class.
- Snapshots: none of its own. The driver's `pre-A4` (11:10:08Z) and its
  end-of-step `post-A4` already bracket exactly this work, per the wave-2
  measurement in the brief.

### The three material repairs

Each took its own dedicated `touchlog` snapshot immediately before its first
edit, and each had its retag folded into the **same** edit so the item records
one content transition rather than two. Each lost its stale
`verification.judge` block and its obsolete `audited` stamp; none may be
certified by me. `reflow.mts` reported all three **unchanged** (formatting was
already canonical) and `precheck.mts` passed all three.

**1. `lem-ordinal-order-topology-is-t3` — class (b), citation precision (N1, §2).**
Snapshot `pre-repair-lem-ordinal-order-topology-is-t3`.

- old: `… hence a closed neighbourhood of $\xi$ inside $N$. [step 3.1, L4]`
- new: `… hence a closed neighbourhood of $\xi$ inside $N$. [step 3.1, L4, L6]`

Step 4.1 concludes that the basic set $B$ is a *closed neighbourhood* of $\xi$,
which is precisely the notion `[L6]` supplies; the fact was used and merely
untagged. No prose, statement, or dependency changed.

**2. `ex-the-particular-point-topology-in-the-separation-hierarchy` — class (b) (N2, §2).**
Snapshot `pre-repair-ex-the-particular-point-topology-in-the-separation-hierarchy`.

- old: `[L3] A set is closed exactly when its complement is open, and $\overline{A}$ is the smallest closed superset of $A$ ([[def-interior-closure-boundary-top]], [[thm-closure-characterisation-top]], claim 2).`
- new: *(the fact is deleted)*

A3 declined my preferred option (i) — tagging `L3` into steps 1.3 and 2.1 — and
it is right: I reread both steps, and each reads closedness straight off `[A1]`,
which lists the closed sets of $\mathcal{T}_p$ outright ("the closed sets are
$X$ and the subsets not containing $p$"). Tagging `L3` there would have cited a
fact the steps do not use, which is the defect class this audit exists to find.
`[L3]` was the last label, so no renumbering was needed and the Facts list has
no gap. Nothing is lost: the only use of its second half is the first Remark,
which carries its own `[[thm-closure-characterisation-top]]` link, verified
still present after the edit. `deps` was left untouched per §2 — an unused
dependency is not a defect, and `def-interior-closure-boundary-top` is now
uncited within the item but still declared.

**3. `thm-compact-hausdorff-tychonoff-from-the-ultrafilter-lemma` — class (a), a false clause (N6, §6).**
Snapshot `pre-repair-thm-compact-hausdorff-tychonoff-from-the-ultrafilter-lemma`.

- old: `2.1 The uniqueness in step 1.1 defines a function $p:I\to\prod_iX_i$, rather than choosing a family of limits. [step 1.1, L3, construct]`
- new: `2.1 The uniqueness in step 1.1 defines a point $p\in\prod_{i\in I}X_i$, namely the function $i\mapsto p_i$, rather than choosing a family of limits. [step 1.1, L3, construct]`

The derivation, written out: step 1.1 produces, for each $i \in I$, a unique
limit $p_i \in X_i$. The object this determines is the element of
$\prod_{i\in I}X_i$ whose $i$-th coordinate is $p_i$ — that is, a function on
$I$ with $p(i) \in X_i$, hence a *point of* the product. A function
$I \to \prod_i X_i$ would instead send each index to an entire point of the
product, which is not what step 1.1 gives and not what step 2.2 uses (2.2 takes
a neighbourhood of $p$ in $P = \prod_i X_i$). I recorded this as nonfatal
notation at A2; A3 overrode that as a false clause, and I agree the repair is
right — this is the step that carries why no choice function over $I$ is needed,
so a false codomain is worst exactly here. The repair is A3's approved wording
and my own from N6; only the LaTeX was matched to the item's spacing.

### Ledger correction

`escalated_to_alpha: true` now rides on `ex-free-ultrafilter-converging-in-a-convergent-sequence-space`
(§3). The field was **absent**, not `false` as §3 states. I made it derive from
the evidence class in `gen-wave5-sep-provenance.mjs` rather than hardcoding the
id, since every `established-knowledge` row is by construction escalated for
concurrence; the batch has exactly one. Regenerating the ledger changed exactly
that one field on that one row and nothing else, verified by diff.

### Contract regeneration and gates

`gen-wave5-sep-contracts.mjs` was re-run against the edited text:
`items=51 citations=372 steps=339` (was 374 citations — the two the deleted
`[L3]` carried).

| gate | before A4 | after A4 |
|---|---|---|
| `proof-contract.mjs --strict` | 3 errors | **0 errors**, 51/51 items |
| `finite-smoke.mjs` | — | 0 errors, 0 checks (no bounded countermodel available) |
| `risk-report.mjs` (tiers only, as A4 requires) | — | 0 errors, 51 routed; `risk_review` still `pending` for Alpha at A6 |
| `citecheck.mjs`, 72 items | pass | pass |
| `precheck.mts`, 3 changed items | — | 3 checked, 0 failing |
| `depcheck.mjs --pending-audit-ok` | — | exit 0 |
| `content-policy.mjs --audit` | — | **1 error** — see below |

`depcheck` now lists all three repaired items under `published-unaudited`, which
is the correct A4 output: A4 is the one window in which a published item is
knowingly uncertified, and only A6's independent reading may clear it.

### The one thing A4 cannot close — E1 blocks the `content-policy` gate

```
ERROR audit-ledger-alpha-concurrence [ex-free-ultrafilter-converging-in-a-convergent-sequence-space]:
  established-knowledge requires Alpha's recorded concurrence (alpha_concurred: true);
  without it the statement falls back to ai-generated
content-policy: 72 scoped item(s), 1 error(s), 0 warning(s)
```

A3 §3 approved these rows "to be written with `alpha_concurred: false`" and
routed the concurrence to **A6**. But `content-policy.mjs:319` makes that
combination a hard error, and `gates.mjs` runs `content-policy.mjs --audit` at
**A4** with no `required: false`. So the row cannot pass the gate that runs at
the end of this step. This is not specific to my batch: the same collision
applies to the seven `established-knowledge` rows in `topology-countability`,
so eight rows wave-wide are affected.

I did not resolve it, because none of the three available moves is mine:

1. **Set `alpha_concurred: true`.** Refused. The owner rule makes this Alpha's
   independent determination and A3 explicitly declined to make it; writing it
   myself is self-certification of my own evidence class.
2. **Fall back to `ai-generated`**, as the A1 table's last row says to do until
   concurrence. This would also need `evidence` changed to `none`/`trivial`
   (`AUDIT_EVIDENCE` maps `established-knowledge` to `ai-altered`, so the pair
   would otherwise fail `audit-ledger-evidence-mismatch`) and a `generation:
   role: example` block. It is *mechanically* available — I checked, and no item
   in the corpus depends on this one, so the dependency-ineligibility of an
   `ai-generated` statement would cost nothing here. I still declined it: the
   owner rule permits `ai-generated` only on a positive determination of genuine
   AI invention, and both A3 and I read this as textbook folklore about the
   one-point compactification of a discrete space. Recording it would be
   entering a determination I believe to be false in order to turn a gate green.
3. **Demote the error at A4.** This looks to me like the right fix and it is not
   mine to make. The codebase already has this exact pattern one gate over:
   `depcheck --pending-audit-ok` exists solely because A4 legitimately creates a
   class that only a later independent reading may clear, and its comment says
   so. `established-knowledge` pending Alpha's concurrence is the same shape —
   A4 creates it, A6 clears it, and the A6 run of the same gate keeps the error
   hard, so nothing is lost by demoting it at A4. That is a tool plus
   normative-doc change and belongs to the orchestrator or the owner.

**Recommendation:** the cheapest correct unblock is for Alpha to rule on the
eight concurrences *before* the A4 gate rather than at A6 — the evidence is
already assembled in this file and in the countability findings, and Alpha's
ruling is a ledger write, not a reading of changed text. Failing that, option 3.

### One observation outside my scope

Sibling Betas ran A4 concurrently against the shared `wave5-touches.json`, which
now interleaves four batches' snapshots. `touchlog report --min 2` currently
names six items as "repaired more than once": `rem-function-space-conventions`
(3), `thm-the-exponential-law`, `fs-pointwise-convergence-implies-uniform-convergence-on-compact-sets`,
`lem-uniform-metric-on-a-function-space`, `cor-components-of-open-subsets-of-rn-are-polygonally-connected`
and `ex-countability-profile-of-omega-one`. **None is in this batch**, and I make
no claim about whether they are real double-repairs or the wave-2 granularity
phantom recurring — but the pattern is the one the brief warns about, so Alpha
should read those counts as unverified rather than as an escalation trigger.

Every one of my 72 items records **exactly one** content transition, which is
the intended result of folding each material repair's retag into the same edit.
`thm-compact-hausdorff-tychonoff-from-the-ultrafilter-lemma` reads as zero until
the driver takes its end-of-step `post-A4` snapshot, because its dedicated
snapshot was the last one taken; that is expected, not a missing edit.
