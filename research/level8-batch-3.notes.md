# Level 8, batch 3 (Beta-8-3) — notes for the orchestrator

Pages: `limits-of-real-functions` (A, 20 items), `limits-of-real-functions-examples`
(B, 12 items). Final page objects: `research/level8-batch-3.pages.json` (validated by
splicing into a scratch copy of plan-spec.json: validate-plan OK, depsource 0 unresolved
on both pages; the only archimedean-reciprocal worklist survivors are the three items
Beta-7 already triaged as legitimate direct-form uses).

## 1. Prose-scaffold amendments (apply to `research/plan-realanalysis-pages.md`)

### Edit 1 — the RA-12 entry (Block V), currently lines 211–217

**File:** `research/plan-realanalysis-pages.md`
**Section:** `### Block V: continuity`, entry `**RA-12 Limits of Real Functions** <- RA-10, RA-04`

**Old text (exact, whole paragraph):**

```
**RA-12 Limits of Real Functions** <- RA-10, RA-04
cluster point; the epsilon-delta limit; one-sided limits; limits at and to
infinity; the **sequential (Heine) criterion**; uniqueness; algebra of limits;
order preservation; squeeze; local boundedness; two-sided iff both one-sided;
**composition of limits with the correct hypothesis**. B: psi(1/x) has no limit
at 0 (trig-free, using psi = dist(.,Z)); the precise composition failure
(f(u) = 0 for u != 0, f(0) = 1, g == 0: lim f = lim g = 0 but lim f(g(x)) = 1).
```

**New text:**

```
**RA-12 Limits of Real Functions** <- RA-10, RA-04
cluster point; the epsilon-delta limit; one-sided limits; limits at and to
infinity; the **sequential (Heine) criterion**; uniqueness; algebra of limits;
order preservation; squeeze; local boundedness; two-sided iff both one-sided;
**composition of limits with the correct hypothesis**. B: psi(1/x) has no limit
at 0 (trig-free, using psi = dist(.,Z)); the precise composition failure
(f(u) = 0 for u != 0, f(0) = 1, g == 0: lim f = lim g = 0 but lim f(g(x)) = 1).
Level-8 audit (Beta-8-3, 2026-07-26), binding for authoring:
(a) PAGE ORDER: local boundedness and the sign-preservation lemma now PRECEDE
the algebra theorem — they are its toolkit. Sign preservation is strengthened to
"L != 0 implies |f| > |L|/2 on a punctured neighbourhood; if L > 0 then
f > L/2 > 0 there" (reverse triangle, cor-of-reverse-triangle); the |L|/2 lower
bound is exactly what the quotient case needs, and it also shows c stays a limit
point of the quotient's domain A cap {g != 0}.
(b) CHOICE HYGIENE: the Heine criterion's sequence-to-epsilon direction costs
AC_omega, and this page carries the remark recording that. Therefore algebra,
order preservation, squeeze and composition are proved DIRECTLY epsilon-delta
(choice-free), NOT via Heine; only the criterion itself and the nonexistence
corollary sit on the sequential side. Heine's epsilon-to-sequence direction is
choice-free and is the one the corollary uses.
(c) The algebra theorem is stated at a FINITE limit point only. The B-page limit
at +infinity example must NOT cite it: it is proved by the direct estimate
|(3x^2-1)/(x^2+x) - 3| = (1+3x)/(x^2+x) <= 4/x for x >= 1, then Archimedean.
(d) def-sequence is 0-indexed: the null sequences of the B page are 1/(k+1) and
2/(2k+1) (giving 1/x-values k+1 in Z and k+1/2), never 1/k.
(e) The judge sees Statements only: ex-distance-to-the-integers must STATE (and
verify in its body) attainment at a nearest integer, psi = 0 exactly on Z,
psi(m + 1/2) = 1/2, range [0,1/2], and 1-periodicity — the psi(1/x)
counterexample cites precisely these. Z sits inside R via lem-int-embeds-rat
then lem-rat-embeds-dense; the nearest-integer argument is Archimedean +
well-ordering (mind negative x: apply WOP to a shifted set of naturals).
(f) Dirichlet items: sequences in Q minus {c} and in the irrationals minus {c}
come from lem-sequential-characterisation-of-closure-r applied to the dense sets
of lem-q-and-irrationals-dense-r (AC_omega inherited and recorded through that
lemma; a canonical choice-free alternative — least-indexed rational under a fixed
enumeration, and c + sqrt2/(k+1) patched by sqrt3 at the at-most-one bad index —
exists if the owner prefers, at the price of thm-rationals-countable and
thm-of-square-roots deps).
(g) The choice-cost remark must claim only: epsilon-to-sequence is ZF; the
converse as proved here uses AC_omega; pointwise sequential criteria cannot be
had for free (the full pointwise schema is in fact equivalent to AC_omega(R),
Herrlich, *Axiom of Choice*, LNM 1876 — attributed, not proved here); and
Sierpinski's theorem that EVERYWHERE-sequentially-continuous implies continuous
is ZF, so the remark must not overclaim. Title softened accordingly ("uses",
not "is exactly").
(h) fs-limit-unique-at-every-point and its B-page counterexample concern the RAW
epsilon-delta formula extended to an arbitrary point of the domain (vacuously
satisfied by every L at an isolated point); under the official def-function-limit
the limit at an isolated point is UNDEFINED, and both items must say so.
```

## 2. Forward references and same-level cross-page references

**A page (`limits-of-real-functions`):** none. Every external dep is either on a
published page or on `topology-of-r` (level 7, the declared prerequisite):
`def-limit-point-r`, `def-neighbourhood-r`, `lem-sequential-characterisation-of-closure-r`
(items 1–3, 5–6, 8–14, 20 various).

**B page (`limits-of-real-functions-examples`):** same-level: none. Level-7
(`topology-of-r`): `lem-q-and-irrationals-dense-r`,
`lem-sequential-characterisation-of-closure-r` (Dirichlet items 9–10).
`rem-classical-oscillator-is-sine-of-one-over-x` (item 12) points at
`sine-cosine-and-the-definition-of-pi` in prose only, with NO `forward_refs`
entry and NO `proved_here: false`; its prose treats "the classical oscillator is
sin(1/x)" as orientation, not as a proved claim.

**CORRECTION (Beta-8-3, step 8, 2026-07-27).** The paragraph above originally
proposed a **page-level** forward reference,
`forwardRefs: [sine-cosine-and-the-definition-of-pi]`, to be carried in the
ledger until the sine page was scaffolded. **That is not expressible in the
current schema and the assumption was wrong.** `forward_refs` (SCHEMA §3) takes
ITEM ids and `tools/fwdcheck.mjs` rejects an entry that names no existing or
planned item (`forward-dangling`); a wikilink from an item body to a PAGE id is a
hard `link-unplanned` error. `sine-cosine-and-the-definition-of-pi` is plan order
74 with an empty item list, so there is no id to name and no legal way to declare
the reference. The `not-proved-here` ‡ tier is not the substitute either: it is
for results this library will never prove (DEFERRED.md), whereas sine is planned
material, and marking it ‡ would tell the reader the opposite of the truth. The
remark therefore carries neither field, by design. When the sine page is
authored, this remark is the place to add a real `forward_refs` entry naming the
item that states the classical pair.

No same-level references into the four pages owned by batches 1 and 2, in either
direction from my side.

## 3. Authoring reminders not tied to a scaffold line

- `def-function-limit`: quantify `0 < |x - c| < delta` (punctured), stated ONLY at
  a limit point `c` of `A`; `c in A` is not required and `f(c)`, when defined, is
  irrelevant. The notation "lim = L" is single-valued only by the uniqueness
  lemma: set `justified_by: [lem-function-limit-unique]` in the item frontmatter
  (WORKFLOW definition-justification rule). If epsilon is quantified over
  rationals in house style (as in def-real-limit), keep `lem-rat-embeds-dense`
  load-bearing in the uniqueness lemma (epsilon = a rational below |L - L'|/2).
- `def-one-sided-limits`: well-posed only when `c` is a limit point of
  `A cap (-inf, c)` resp. `A cap (c, inf)`; defined as limits of restrictions, so
  uniqueness and locality are inherited, not reproved.
- `def-limits-at-infinity`: `lim_{x -> +inf}` requires the domain unbounded above
  (that is the limit-point condition's analogue, hence the `def-bounded-set` dep);
  infinite limits at a point are stated at a limit point of the domain (dep
  `def-limit-point-r` added); follow def-divergence-to-infinity's convention that
  +inf/-inf are abbreviations, not reals — the extended reals
  (`\overline{\mathbb{R}}`) are NOT needed on these pages.
- `thm-composition-of-function-limits`: hypotheses must include `g(A) ⊆ B` and
  `L` a limit point of `B`; case (i) is `L in B` and `f(L) = M`, case (ii) is
  `g != L` on a punctured neighbourhood of `c`.
- `thm-algebra-of-function-limits`: state the quotient on the domain
  `A cap {g != 0}` and note (via the sign lemma) that `c` remains a limit point
  of it; mirrors the published thm-algebra-of-limits, whose quotient case
  requires the denominator sequence nonzero at EVERY index — automatic here.

## 4. Recommendations needing an owner decision (also in my report)

1. **`lem-integer-part` (floor) as a reusable lemma.** No floor/integer-part item
   exists anywhere in the library or plan; ex-distance-to-the-integers builds the
   nearest-integer argument inline from Archimedean + WOP. Floor recurs later
   (RA-14 monotone functions, RA-27 powers, Jordan content). Adding
   `lem-integer-part` ("for every real x there is a unique integer m with
   m <= x < m+1") to the A page would change the item count (20 -> 21), so it is
   NOT in my pages.json. Trade-off: one-time count change vs. repeated inline
   reconstruction on later pages.
   **RESOLVED (2026-07-27): accepted.** `lem-integer-part` is item 15 of the A
   page, the page is 21 items, and `research/plan-spec.json` records 21. Its
   uniqueness half is assembled inline from `lem-nat-embeds-int` (every integer
   >= 0 is the image of a unique natural, order preserving) plus `lem-nat-discrete`
   (m < n iff sigma(m) <= n, so a natural j != 0 satisfies j >= 1); there is still
   no standalone "discreteness of Z" item in the library, and that assembly is
   what later pages will inherit.
2. **Algebra of limits at ±infinity.** Deliberately absent; the single B-page
   use is served by a direct estimate. If later pages (improper integrals,
   asymptotics) want it, add it there as a lemma rather than stretching
   thm-algebra-of-function-limits now.
3. **Sharpness of the choice-cost remark.** If the owner wants the full
   "equivalent to AC_omega(R)" claim rather than the softened "uses", the clean
   mechanism is a separate `proved_here: false` remark with `sources_checked`
   citing Herrlich — a count change, so not emitted.
