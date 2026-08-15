# Group Alpha c — `frontier-14` step-3 fix re-check (batch 7)

Reviewer: group Alpha **c**. Scope: the batch-7 pair `stone-weierstrass-general`
(287) and `stone-weierstrass-general-examples` (288).

Source of truth for this re-check is **disk**, not the Beta's report. Note that
three of the four batch-7 artifacts (`notes.md`, `coverage.json`,
`proof-contracts.json`) are untracked and `pages.json` is uncommitted, so there is
no pre-fix/post-fix git diff to lean on: every claim below was checked against the
current file contents.

The Beta recorded **`applied` for all eleven findings and pushed back on none**.
That is the shape this stage exists to distrust, so each was re-opened.

---

## Per-finding disposition

| id | disposition |
|---|---|
| C1 | **confirmed** |
| C2 | **confirmed** (one clause-selection residual, R3) |
| C3 | **confirmed** |
| C4 | **confirmed** |
| C5 | **confirmed**, but the repair introduced R1 and left R2 |
| C6 | **confirmed** |
| C7 | **confirmed** |
| C8 | **confirmed** (alternative 2, as defaulted) |
| C9 | **confirmed** for all seven named quotes; method change recorded below, residuals R4, R5 |
| C10 | **confirmed** (advisory finding; residual R6) |
| C11 | **confirmed** |

### C1 — ℂ has a metric

Confirmed. All six named items now carry
`def-complex-metric-convergence-and-continuity`:
`def-self-adjoint-complex-function-algebra` (`pages.json:63`),
`lem-real-part-of-a-self-adjoint-complex-function-algebra` (`:177`),
`thm-complex-stone-weierstrass-self-adjoint` (`:191`),
`cor-self-adjoint-algebra-generated-by-a-separating-family-is-dense` (`:203`),
`cex-disc-algebra-is-not-dense-without-self-adjointness` (`:251`),
`ex-trigonometric-polynomials-are-dense-on-the-circle` (`:270`).

The substitution I asked for also happened: both B items dropped
`thm-complex-numbers-are-the-real-coordinate-plane` and their compactness steps
(`step-1-1` in each contract) now run off the complex metric plus Heine–Borel.
`lem-metrics-on-rn` is no longer a dependency of anything in the batch, as the
notes claim. The coordinate-plane theorem survives only in
`lem-real-part-of-a-self-adjoint-complex-function-algebra`, where it is cited as
`L3` in both derivations — that retention is inside what C1 licensed, but see R4
for the quote it carries.

### C2 — metric compactness converted to topological compactness

Confirmed. `thm-compactness-agrees-with-metric-compactness` and
`thm-metric-hausdorff-separation` are on all three examples (`:258`, `:276`,
`:289` and the `-hausdorff` lines following each). The dictionary proposition
additionally carries `def-continuous-real-functions-on-a-compact-metric-space` and
`thm-metric-continuity-characterisations` (`:74`–`:77`), and its strategy now
opens with the ambient reconciliation rather than the clause-by-clause comparison
(`:70`). Its contract step 1.1 consumes `L1`–`L6` together, so the reconciliation
is a real input and not a decorative dep. Residual: R3.

### C3 — the disc counterexample's root machinery

Confirmed, and this is the most thorough of the eleven repairs.
`cor-complex-de-moivre-formula` and `thm-kernel-and-fibres-of-complex-exponential`
are deps (`:255`–`:256`), and the contract has grown from one derivation to five:
compactness (1.1), root enumeration plus primitivity from the exponential kernel
(2.1), the inline induction for $(x-1)\sum_{k<N}x^k=x^N-1$ with the cancellations
it yields (2.2), the averaging contradiction (3.1), and the conclusion (3.2).
**Neither `"finite geometric identity"` nor `"field algebra"` remains as a
free-text input in this contract** — its only unmatched-looking inputs are
`step-2-1`/`step-2-2`, which are derivation ids, i.e. genuine step references.

D1 discipline held under the repair: step 2.2 uses `cor-sum-of-roots-of-unity`
(`L8`) only for the exponent-one cancellation, the induction covering every other
shifted exponent, and the `risk_review` note repeats the instruction.

### C4 — the Carlen dichotomy

Confirmed, in full and in both families.
`thm-real-stone-weierstrass-dichotomy-for-separating-algebras` exists (`:145`)
with both alternatives in its strategy, and
`cor-real-stone-weierstrass-nowhere-vanishing-form` now derives from it and from
nothing else (`deps` is a single id, `:162`).
`thm-complex-stone-weierstrass-self-adjoint` is retitled to the dichotomy with the
unital case as a consequence (`:183`) and deps on the real dichotomy (`:187`).
The harvest carries two separate Carlen rows — Theorem 1.26 → the dichotomy, and
"Immediate nowhere-vanishing consequence of Theorem 1.26" → the corollary
(`coverage.json:109`–`:117`) — and the 1.29 row now names the dichotomy too
(`:139`).

I re-read the dichotomy's proof strategy for soundness, since it is new
mathematics in the scaffold rather than a relabelling. It closes: the no-common-zero
branch is the approximate-unit lemma plus real Stone–Weierstrass; the common-zero
branch adjoins constants, and evaluating an approximant $a+c$ at $x_0$ bounds
$|c|$ by the error, giving $\lVert g-a\rVert<2\varepsilon$. Separation makes $x_0$
unique, and uniform limits preserve vanishing, so the inclusion is an equality.

**FA-18 is still safe.** `thm-complex-stone-weierstrass-self-adjoint` keeps its
id and still asserts unital density; C4 widened it rather than replacing it.

### C5 — Erdman 21.2.2 and the quotient definition

Confirmed as to each of the four things C5 asked for: the 21.2.2 row no longer
points at `def-function-algebra-indistinguishability-quotient`
(`coverage.json:18`–`:21`); the quotient definition is retagged `ai-altered`
(`notes.md:176`); the `ex-two-point-duplication-algebra-and-its-quotient`
rationale is corrected and explicitly disclaims 21.2.2 (`notes.md:177`); and a
separate row now backs the quotient definition against 21.2.15.

That new row is R1 — **I checked it against the source and it names material
Erdman does not have.** See below.

### C6 — the lattice criterion at the sources' generality

Confirmed, and the boundary I was most worried about is anchored rather than
orphaned. `def-two-point-duplication-property` exists (`:18`);
`lem-two-compact-cover-sweeps-for-function-lattices` is restated for a sublattice
with the duplication property relative to a target $f$ (`:92`–`:93`) and deps on
the new definition rather than on the interpolation lemma;
`thm-lattice-stone-weierstrass` is the unital separating specialisation and
obtains the property before applying the sweep (`:103`).

The equal-pair case does not fall between the two items: the sweeps contract's
`degenerate` row records that the property is "quantified over all ordered pairs,
including coincident points", and the theorem's step 1.1 says the property is
supplied "with a constant handling coincident points", with a matching `one`
boundary row for the singleton domain. The notes state the same and give the
reason Erdman's printed distinct-pair form is vacuous on a singleton
(`notes.md:179`). Related coverage gap: R2.

### C7 — Berkeley 9.4/9.6

Confirmed. The divergence is recorded in the fix section, including the
$L=\{f\in C([0,1],\mathbb R):f(0)\le f(1)\}$ witness (`notes.md:181`), and both
Berkeley coverage rows now carry the qualification in their names
(`coverage.json:86`, `:96`). It landed in the fix section rather than in the
numbered convention list at `notes.md:41`; the substance is what C7 asked for, so
I am not sending it back for placement.

### C8 — the missing A-page `fs-` item

Confirmed as the default I named. No `fs-` item was minted, and the canonical
block now carries an explicit
`FALSE: complex Stone–Weierstrass holds without closure under conjugation` row
mapped to the disc counterexample (`coverage.json:159`–`:162`). The disposition is
now visible rather than silent, which was the whole point of alternative 2.
**The orchestrator's page-285 decision is untouched by this** — if 285 mints its
`fs-` item, 287 should be revisited for symmetry.

### C9 — citation quotes

All seven quotes in C9's table are fixed, and each is faithful to the item on
disk:

| cited item | now reads |
|---|---|
| `thm-complex-nth-roots-and-roots-of-unity` | the enumeration with its formula and range, applied-$\iota$ stripped — this simultaneously discharges convention note 7 and the `notation-iota-applied` collision |
| `lem-compactness-of-a-subspace-is-ambient` (×2) | the two clauses themselves, with the empty-set alternative noted, not the bold labels |
| `thm-compactness-under-continuous-maps` | full hypotheses; and the second use correctly cites clause 2 (extreme values), which the item really does state |
| `thm-heine-borel-rn` | "closed **and** bounded" |
| `def-topology-of-uniform-convergence` | the definition, not the commentary paragraph |
| `lem-complex-conjugation-and-modulus-laws` | $z\overline z=|z|^2$, $|zw|=|z||w|$, $|z+w|\le|z|+|w|$, balanced and complete |

**A method change came with the repair, and it must not go unrecorded.** Before
the fix pass, all 23 published-source quotes were verbatim on disk — I verified
that independently at step 3. After it, **46 of 52 published-source quotes are
paraphrases** that do not occur in the cited file. That is permitted by the house
rule ("the smallest faithful shortening"), and in several places it is *required*
— the roots item's applied-$\iota$ notation cannot be quoted verbatim without
tripping `content-policy`. But it retires a mechanical check: "the quote is on
disk" was a gate anyone could re-run, and faithfulness is not.

So I re-read every distinct cited Statement on disk and compared. They are
faithful, with the exceptions at R3, R4 and R5. Spot-notes from that pass:
`lem-complex-conjugation-and-modulus-laws`'s "real-field automorphism" phrasing is
the item's own words; `cor-complex-de-moivre-formula`'s "for every integer $m$"
matches the published domain (the paraphrase drops $\kappa_{\mathbb R}$ around
$m$, which the notation rule wants); `thm-metric-continuity-characterisations` is
cited only at (a)⟺(b), which is the choice-free implication.

### C10 — one-derivation contracts

Confirmed, and the count in the notes is exact: **nine** contracts now carry 2–5
derivations — the sweeps lemma, lattice theorem, real dichotomy, complex theorem,
real-part lemma, quotient representation, disc counterexample, circle example and
distance-lattice example. The other ten remain single-derivation, which the Beta
states plainly. C10 was advisory and stays advisory: the real check is at step 5,
when `derivations` must have one entry per numbered proof step. Residual R6.

### C11 — negative powers on the circle

Confirmed. `def-complex-integer-powers` and
`lem-complex-conjugation-and-modulus-laws` are deps (`:274`, `:272`), and the
identity is a derivation rather than an identification: step 2.1 reads "the
identity $z\overline z=1$ and uniqueness of a field inverse give
$z^{-1}=\overline z$", used before the Laurent rewrite.

---

## Residuals

Numbered fresh; none renumbers a `C` finding, none blocks the splice, and R3–R7
are all step-5 work by construction because the contracts are rewritten there.

### R1 — a coverage row names material that is not in Erdman

`coverage.json:63` harvests **"The quotient relation and quotient-space
construction used in Theorem 21.2.15"**, `included` →
`def-function-algebra-indistinguishability-quotient`.

I re-downloaded the Erdman PDF and extracted it. `21.2.15` occurs **once in 265
pages**, on printed p175, and in full it is:

> **21.2.15. Theorem (Generalized Stone-Weierstrass theorem).** If $X$ is a compact topological space and $A$ is a closed unital subalgebra of $C(X)$, then there exists a compact Hausdorff space $Y$ such that $A$ is isometrically isomorphic to $C(Y)$.

There is no proof anywhere in the document, and therefore no quotient relation and
no quotient-space construction. The row describes a source heading the source does
not have — the harvest-faithfulness failure, in the one place the fix pass added a
row.

**This one is mine as much as the Beta's**: C5 told it to "give
`def-function-algebra-indistinguishability-quotient` an honest row against
21.2.15", and there is no honest row to give, because the schema maps one heading
to one item and 21.2.15's heading is already spent on the representation theorem.

**Fix:** delete the row. The definition is then an unbacked local construction
like the other eight house items on this pair, and its `ai-altered` provenance
with the 21.2.15 rationale (`notes.md:176`) already tells the truth — that Erdman
gives an abstract $Y$ and the scaffold chooses the canonical quotient. Deleting it
leaves the harvest at 28 rows and does not touch any item.

### R2 — the new definition has no harvest row, and 21.2.2 is sitting on the wrong item

`def-two-point-duplication-property` maps to no coverage row, while its provenance
rationale backs it with Erdman 21.2.2 (`notes.md:173`) — and the 21.2.2 row points
at `lem-two-point-interpolation-for-a-separating-real-function-lattice`, which
21.2.5 already covers.

This is my own C5/C6 tension and I should adjudicate it rather than leave the Beta
holding it. Erdman 21.2.2, verbatim from the extracted text:

> **21.2.2. Definition.** Let $X$ be a topological space. We will say that a family $F$ of continuous functions on $X$ possesses the **two-point duplication property with respect to a function** $f\in C(X)$ if for every pair of points $x\ne y$ in $X$ there exists $h\in F$ which agrees with $f$ at $x$ and $y$.

It is a *definition of the property*, so it belongs to
`def-two-point-duplication-property`. 21.2.5 — a separating unital algebra *has*
the property — is the interpolation lemma's backing and is already recorded as
such.

**Fix:** re-point the 21.2.2 row to `def-two-point-duplication-property`. One
string, no mathematics, no item change. C5's instruction is superseded on this
point by this paragraph.

### R3 — the compactness bridge is cited at the clause that does not cover subsets

All four C2 sites cite `thm-compactness-agrees-with-metric-compactness` at
`"Statement, clause 1"`, whose content is "$(X,d)$ is a compact metric space iff
$(X,\mathcal T_d)$ is a compact topological space" — a statement about a whole
space. The disc and the circle are **subsets** of $\mathbb C=\mathbb R^2$, and
Heine–Borel (correctly cited at clause 2) delivers "compact *subset* of
$(\mathbb R^n,d_2)$". Clause 1 gets there only after separately identifying the
metric-subspace topology with the topological-subspace topology; **clause 2 of the
same item is exactly that identification**, and my C2 text named it.

**Fix:** move the citation to `Statement, clause 2` with its quote, in
`cex-disc-algebra-is-not-dense-without-self-adjointness` (L12),
`ex-trigonometric-polynomials-are-dense-on-the-circle` (L9) and
`ex-distance-function-lattice-is-dense-on-a-compact-metric-space` (L4). The
dictionary proposition (L4) is about a whole metric space and clause 1 is right
there.

### R4 — the uniform-convergence citation quotes the sequence clause

`thm-lattice-stone-weierstrass` (L3) and
`thm-real-stone-weierstrass-dichotomy-for-separating-algebras` (L4) cite
`def-topology-of-uniform-convergence` at its sequential clause ("a sequence
$(f_k)$ converges uniformly to $f$ if …"), but both conclusions are **density in
the uniform topology**, which is the item's later clause — the metric topology of
$\bar\rho$ on $Y^X$, restricted to $C(X,Y)$. The item carries both, so this is a
clause selection, not a missing dependency; left alone it becomes an $\varepsilon$
statement authored against a definition about sequences.

### R5 — two pointer-style quotes survive C9's sweep

In `lem-real-part-of-a-self-adjoint-complex-function-algebra`:

- L2, `thm-complex-numbers-form-a-field`: "… complex addition and multiplication obey **the displayed coordinate formulas**"
- L3, `thm-complex-numbers-are-the-real-coordinate-plane`: "carries complex addition and multiplication to **the displayed real-coordinate formulas**"

Both point at formulas instead of stating them, which is the same defect C9 named
in different clothing. Both are cited as inputs to real derivations. The formulas
are two lines; write them.

Related, and already promised by the Beta rather than owed: the same-batch
prospective citations quote the target item's **title** (for instance L1/L2 of
`thm-lattice-stone-weierstrass`). `notes.md:123` commits to freezing these against
the authored Statement text at step 5. That is the right handling; it just has to
actually happen.

### R6 — seven free-text contract inputs remain outside the disc counterexample

C3 removed them where I named them. Elsewhere they persist: `"field algebra"`
(interpolation lemma, and again in the finite-space example), `"closure facts"`
(`thm-real-stone-weierstrass-general`), `"finite products"`,
`"piecewise-linear separators"`, `"closedness"`, `"one-sided derivatives"` and
`"linear algebra"`.

Most are genuinely routine. **`"one-sided derivatives"` is not**: it is the whole
argument that $|x-c|$ is not a polynomial in
`ex-polynomial-algebra-is-dense-but-not-closed-on-an-interval`, and no
differentiation item is among that example's deps. There is a cheaper route that
stays inside the page's closure — if $p$ agreed with $|x-c|$ on $[a,b]$ then
$p(x)-(x-c)$ would vanish on $[c,b]$, forcing $p(x)=x-c$ identically, and
symmetrically $p(x)=c-x$. Either supply a dependency or write the algebraic route
as steps.

### R7 — superseded rows still stand in the notes

The fix section opens by declaring that it supersedes the rows above it, and it
does, but the superseded text is unmarked and a step-5 author reads top-down:

- `notes.md:107` still tags `def-function-algebra-indistinguishability-quotient`
  `literature-derived` with the exact 21.2.2 misreading C5 identified
- `notes.md:118` still backs `ex-two-point-duplication-algebra-and-its-quotient`
  on "Erdman 21.2.2 and 21.2.15"
- `notes.md:82` still lists `lem-metrics-on-rn` as a dependency
- convention note 5 (`notes.md:47`) still instructs the B items to derive
  $|z-w|=d_2(\Phi z,\Phi w)$ from the modulus definition, a route C1 replaced with
  a published item that states the equality outright

Strike them in place or annotate each with "superseded by the step-3 fix pass".

---

## Checks re-run from disk

| check | result |
|---|---|
| D1: the three forbidden ids across all four artifacts | **0 occurrences** each, unchanged |
| item ids | 24 unique (18 A + 6 B), no duplicates |
| A item citing a B item | none |
| external dependencies | **29**, matching the notes; every one exists on disk, is `status: published`, and is homed on a page inside 287's 64-page `requires` closure — including all seven new ones (189, 255, 116, 169) |
| `lem-metrics-on-rn` removed as a dependency | confirmed |
| contract scope | 19 contracts, 19 proof-bearing items, no definition carries one, none missing |
| boundary rows | 152, eight per contract |
| published-quote verbatim check | 6 of 52 verbatim (was 23 of 23) — see C9 above |
| provenance rows | all 24 items covered, across the original table plus the fix-pass corrections |
| A-page size | 18 / 60 |
| `coverage-checklist.mjs` | exit 0 — 1 page, 29 results, 0 errors, 0 warnings |
| `content-policy.mjs --manifest-only` | exit 0 — 24 scoped items, 0 errors, 0 warnings |
| `validate-plan.mjs research/plan-spec.json` | exit 0 |
| `manifest-integrity.mjs --run frontier-14` | exit 0 — 18 owed, 18 present, no scope drift |

The Beta's four reported gate results reproduce exactly.

**Declines.** Still exactly one, still true: Gelfand duality, `out-of-scope`,
`license_page: gelfand-theory-and-commutative-c-star-algebras`, which is a real
page id at order 288.081. Unchanged by the fix pass, and re-verified in
`plan-spec.json`. No `deferred` rows exist. The four `already-published` rows are
unchanged and were checked on disk at step 3.

**Split.** Still none. 18 A items and 6 B items; C4 and C6 added two A items, as
predicted.

## What I could not check

- **The proofs**, again — none are authored. Where I say the dichotomy or the
  averaging argument closes, I checked the strategy and the contract steps.
- **Source liveness by `url-sweep.mjs`.** I verified Erdman directly by
  downloading and parsing it for R1 and R2. Berkeley and Carlen were verified the
  same way at step 3 and neither URL nor locator changed.
- **Item-level `validate-plan` against the live spec.** Page 287 still carries
  `items: []` in `plan-spec.json`; the Beta's in-memory splice cannot be
  reproduced from disk. The parts that matter at step 3 — unique ids, no A→B
  citation, every external dep published and in closure — I checked directly.

---

## Verdict

| page | verdict |
|---|---|
| `stone-weierstrass-general` (287) | **ready for splice** |
| `stone-weierstrass-general-examples` (288) | **ready for splice** |

Every one of the eleven findings is on disk and correct; no `applied` entry was
empty. R1 and R2 are two coverage-row string edits that touch no item and no
`plan-spec.json` entry — worth making before the splice because they are seconds
of work, but they do not gate it. R3–R7 belong to step 5, where the contracts are
rewritten against authored numbered proofs anyway; they should be named in the
step-5 authoring brief so they are not rediscovered at step 6.
