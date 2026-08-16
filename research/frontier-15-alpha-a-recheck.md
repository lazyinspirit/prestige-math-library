# frontier-15 — Alpha group `a`, step-3 re-check before the splice

Batches owned: **1, 2, 3** (`research/frontier-15-alpha-groups.json`, group `a`).
Pairs: `quadratic-reciprocity-and-the-jacobi-symbol`, `sylow-theorems-and-nilpotent-groups`,
`chain-conditions-and-semisimple-modules`, `algebraic-closure-embeddings-and-separability`.
Alpha: Claude Opus 5, `claude` runner, `xhigh`, 1,000,000-token window.

Every disposition below was checked against the manifest, coverage and contract
files as they now stand, and against the published items and source PDFs — not
against what the Betas reported. Three defects survived the fix pass; I repaired
all three here.

---

## Finding-by-finding

| id | Beta disposition | my verdict |
|---|---|---|
| **B1-1** | already correct | **confirmed** |
| **B2-1** | already correct | **confirmed** |
| **B2-2** | applied | **confirmed with a defect introduced by the fix — repaired by Alpha** |
| **B2-3** | already correct | **confirmed** |
| **B2-4** | already correct | **confirmed** |
| **B2-5** | applied (binding authoring decision) | **confirmed** |
| **B2-6** | applied | **confirmed, with a recorded limitation** |
| **B2-7** | applied | **confirmed** |
| **B3-1** | applied | **confirmed** |
| **B3-2** | pushback accepted (my decline) | **confirmed** |
| **B3-3** | applied | **confirmed** |

No Beta pushed back on a finding, so there is no pushback to adjudicate; B3-2 is
the mirror case — my own decline of Beta-3's F2, which Beta-3 accepted and whose
stale text it replaced with the disk-verified fact.

---

### B1-1 — confirmed (no change was the right outcome)

`cor-infinitely-many-primes-congruent-to-one-modulo-three` still carries
`def-countable`, `def-equinumerous` and `def-injection-surjection-bijection`, and
batch 1's contract now shows where they are consumed: planned step 1.1 lists
`L5, L6, L7` among its inputs and its claim is "if the set of primes congruent to
one modulo three were finite, [L5]–[L7] would give a finite list surjecting onto
that set". That is the published `thm-euclid-infinitude-of-primes` convention,
which I re-read at step 3. Not padding, and nothing was edited to make it look
answered.

### B2-1 — confirmed

`thm-sylow-second-theorem` on disk carries both clauses in its title, the
conjugacy clause is asserted (not incidental) in the strategy, and `thm-lagrange`
is in `deps`. The contract was updated, which is what the fix pass added beyond
my repair: planned step 3.1 now reads "Taking `H` Sylow, Lagrange's theorem turns
containment into equality; applying this to any Sylow `p`-subgroup `Q` gives
`Q = gPg⁻¹`", with `thm-lagrange` in its input map, and the eight boundary rows
name both clauses instead of the obsolete containment-only title. The three
consumers (`thm-sylow-number-as-normalizer-index`, `thm-sylow-third-theorem`,
`cor-sylow-subgroup-normal-iff-unique`) now cite a Statement that contains what
they claim.

### B2-2 — confirmed, and one defect the fix introduced · REPAIRED

The substance is right, and I checked all of it rather than the report:

- **Heisenberg.** `ex-heisenberg-sylow-subgroup-of-the-upper-triangular-group` no
  longer mentions `GL_3`. It builds `H_p = F_p³` under
  `(a,b,c)(a',b',c') = (a+a', b+b', c+c'+ab')` — which is exactly the product of
  the two unitriangular matrices, and the stated inverse `(-a,-b,-c+ab)` is
  correct — and forms the ambient group as `H_p ⋊ (F_p^×)³` under
  `(d₁,d₂,d₃)·(a,b,c) = (d₁d₂⁻¹a, d₂d₃⁻¹b, d₁d₃⁻¹c)`. I verified that this action
  is the conjugation action of the diagonal torus on the unipotent radical, and
  that it is an action by automorphisms: the third coordinate of
  `d·((a,b,c)(a',b',c'))` and of `(d·(a,b,c))(d·(a',b',c'))` both come to
  `d₁d₃⁻¹(c+c'+ab')`. `|B_p| = p³(p-1)³`, so `H_p` is Sylow, and
  `prop-canonical-subgroups-of-an-external-semidirect-product` — which I opened,
  and which states `N̄` is normal — gives normality, hence uniqueness through
  `cor-sylow-subgroup-normal-iff-unique`. `p=2` is treated. Every dependency is
  published on `semidirect-products-and-automorphism-groups` (order 68) or
  earlier, all inside page 71's closure.
- **`GL_2`.** The new A-page theorem
  `thm-order-of-automorphism-group-of-elementary-abelian-rank-two` is correct:
  `f` is determined by `(f(e₁), f(e₂))`, is an automorphism iff `u ≠ 0` and
  `v ∉ ⟨u⟩`, giving `(p²−1)(p²−p)`, and `(4−1)(4−2) = 6` at `p = 2`. It cites
  `thm-subset-of-a-finite-set`, whose clause 4 is exactly "every injection
  `f : A → A` is a bijection" — the step the strategy leans on. The B example's
  route closes: the shears `u_t(x,y) = (x+ty, y)` form a Sylow `p`-subgroup since
  `(p²−1)(p²−p) = p(p−1)²(p+1)`; their common fixed subgroup is `L = {(x,0)}`; an
  automorphism normalises `P` exactly when it preserves `L` (I checked both
  directions — conjugating `u_t` by `(x,y) ↦ (ax+by, dy)` gives `u_{at/d}`);
  `|N| = p(p−1)²`; `n_p = p+1`; and the `p²−1` elements of order `p` follow.
- **Harvest consistency.** The four dispositions now agree, and they agree in the
  direction the fix took: Conrad `sylowapp` Thm. 2.4 and Thm. 2.7 are `included`
  with notes naming the coordinate realisation, while the two declines name the
  **special linear group and the determinant** specifically (`sylowpf` Ex. 1.6,
  `sylowapp` Ex. 5.7), which really are unavailable at order 70 — the coordinate
  trick that rescues `Aut((Z/p)²)` does not produce `SL₂` without a determinant.
  That is a true reason, not the generic one I flagged.

**Defect introduced by the fix, repaired by me.** The corollary the B2-7 fix
added, `cor-classification-of-groups-of-order-one-hundred-five`, cited
`lem-direct-product-of-finite-cyclic-groups-is-cyclic-iff-orders-are-coprime`,
which is published on **`primitive-roots-and-unit-groups-modulo-n`, order
57.001** — a page in **neither** the manifest's nor the plan's transitive
`requires` closure for page 70 (32 pages; I printed it). This is the same class
as B3-1 and B2-4, arriving in the repair of a different one: the dependency
resolves as a published id, so nothing in `content-policy` or `coverage-checklist`
sees it.

I repaired it rather than routing it, because an in-closure route exists and is
better: `thm-order-of-element-in-direct-product` (order 38, "ord(g,h) =
lcm(ord g, ord h)") and `thm-classification-of-cyclic-groups` (same page) give
the identification directly — pairing generators of `N₅` and of a cyclic `H`
yields an element of order `lcm(5,21) = 105`. Applied in three places, which is
what the "one act" rule means here:

1. `research/frontier-15-batch-2.pages.json` — `deps` swap on the corollary;
2. the same file — the strategy now states the lcm route instead of asserting the
   cyclic identification;
3. `research/frontier-15-batch-2.proof-contracts.json` — planned step 4.1's claim
   and input map follow the same swap.

**Second repair, same item family: a title asserting what the page cannot prove.**
The B example's title read

> Sylow `p`-subgroups of `Aut((Z/p)²) ≅ GL_2(F_p)`: `n_p = p+1`

The whole point of the fix is that `GL_2(F_p)` is **not defined** until
`matrices-and-the-matrix-of-a-linear-map` at order 78, so the title asserted an
isomorphism to an object the page has no access to and no proof can establish —
B2-1's defect exactly (a Statement claiming more than its proof gives), reappearing
in the repair of B2-2. It is fatal later and invisible to the judges, who read
Statements and cannot see a false title. Repaired to

> Sylow `p`-subgroups of `Aut((Z/p)²)`: `n_p = p+1`

with the conventional name kept as a name: both the A theorem's and the B
example's strategies now say a Remark may record that this group is conventionally
written `GL_2(F_p)`, that this is a name only, and that no isomorphism to a matrix
group may be asserted and no matrix item cited. I made the same correction to the
`coverage.json` note on Conrad Thm. 2.7, which claimed the item "proves the
coordinate dictionary" — it cannot prove a dictionary to a group that does not
exist here, and the note now says what the item actually does. The stale title in
the notes' item list (line 570) was corrected to match the manifest.

### B2-3 — confirmed

The B page is unchanged and remains eleven worked examples. My step-3 reasoning
holds: the A page carries five `fs-` items doing the boundary-marking work, and
no corpus convention requires counterexamples on the B page specifically. Nothing
was moved merely to change the kind mix.

### B2-4 — confirmed

`chain-conditions-and-semisimple-modules` still requires
`the-field-of-fractions-and-localisation` in the manifest; page 108's closure
contains it; order 53.2 < 108, so it is a backward edge.

### B2-5 — confirmed

Both items still declare exactly one dependency, no `def-dependent-choice` edge
appeared, and no topology prerequisite was added, so nothing forward-references
`compactness-in-metric-spaces` (order 120). The contracts now carry the split I
adjudicated: on the Noetherian side, step 1.1 (finite generation ⟹ ACC) and step
3.1 (maximal condition ⟹ finite generation) are marked choice-free while step 2.1
consumes dependent choice, and planned step 4.1 is the instruction to state DC in
Facts as an adopted axiom with no dependency, forward reference or prerequisite.
The Artinian contract marks DCC ⟹ minimal condition as the DC-consuming direction.
That is the adjudication, on disk, in the artifact the step-5 author reads.

### B2-6 — confirmed, with a recorded limitation

The pair now has a textbook: Judson, *Abstract Algebra: Theory and Applications*,
`https://judsonbooks.org/aata-files/aata-original.pdf`. I checked it rather than
taking it: the URL answers HTTP 200 with a 1.5 MB PDF, I downloaded it and read
the range. Printed p. 220 is PDF p. 227; the chapter opens on the failure of
Lagrange's converse with `A₄` as the witness; Theorem 13.1 is Cauchy, Corollary
13.2 the `p`-group equivalence, Example 1 the `A₅` subgroup orders, Theorem 13.3
the First Sylow Theorem; and the paragraph "A Sylow `p`-subgroup `P` of a group
`G` is a maximal `p`-subgroup of `G`" is where the locator says it stops. All six
harvested headings are real and the range is complete.

**Limitation, recorded and not blocking.** Three printed pages is a narrow
textbook backing: it stops before Judson's own Sylow II and III (Thms. 13.6,
13.7). I checked what that costs by reading pp. 222–228 myself — Lemmas 13.4/13.5,
Thms. 13.6–13.7, §13.2's Thm. 13.8 (`pq` cyclic), Thm. 13.9 (commutator
subgroup), Lemma 13.10 (`|HK|`), Examples 2–9 (orders 15, 99, 1645, 20, 56, 48)
and Thm. 13.11 (Odd Order, cited not proved). **Nothing standard there is absent
from the pair**: Sylow II/III are `included` from both Conrad notes, which I
verified verbatim at step 3; `pq` and the `p²q` family are on the page; the
commutator subgroup belongs to `composition-series-and-solvable-groups`; and the
product formula is `lem-product-with-normal-subgroup`, already published and
correctly dispositioned. So the harvest is honest and no result was lost — but the
textbook is a supporting source, not the pair's primary backing, and the primary
backing remains lecture notes. B2-6 stays a recorded deviation from the batch
task's own bar, as it was at step 3.

One disposition is loose rather than wrong: Judson's Corollary 13.2 (a finite
group is a `p`-group iff its order is `pⁿ`) is dispositioned `already-published`
onto `def-finite-p-group`, which is a definition, not a proof of that equivalence.
The repo defines a finite `p`-group by `p`-power order, and no item in the pair
uses the elementwise characterisation, so the bridge is a convention note and
Beta-2 recorded the convention difference explicitly. Recorded, not blocking.

### B2-7 — confirmed

Conrad Cor. 5.13 is no longer declined: it is `included` on the new
`cor-classification-of-groups-of-order-one-hundred-five`, with Thm. 5.12 `inline`
in the same item, so the page no longer classifies order 30 while declining order
105 for a richness reason. I verified the mathematics before accepting it:
`H = N₇P` has order 21 and `G = N₅H`; conjugation `H → Aut(N₅)` has image of order
dividing both 21 and `|Aut(C₅)| = 4`, hence trivial; so `G ≅ C₅ × H`; the
published `thm-classification-of-groups-of-order-pq` gives exactly two order-21
groups (`3 | 7−1`), and the two products are distinguished by commutativity. The
statement is Conrad's and the deps carry the route — after my swap above.

### B3-1 — confirmed

Page 98's manifest `requires` is exactly the plan's three edges:
`algebraic-extensions-degree-and-finite-fields-examples`,
`eigenvalues-eigenvectors-and-the-characteristic-polynomial`,
`the-field-of-fractions-and-localisation`. `splice-plan --dry-run` on batch 3
reports 2 pages, 72 items, no disagreement. Edit E1 in the notes now carries the
same three-edge replacement, and its "exact old text" block matches
`research/plan-algebra-track.md` lines 2525–2526 verbatim, so the step-4
propagation will apply rather than silently miss.

### B3-2 — confirmed (my decline, accepted)

F2's stale text is gone. Its replacement states the disk fact — the plan declares
three prerequisites and `order-zorn-and-the-axiom-of-choice` is already in the
transitive closure — and instructs that no direct Zorn edge be added, which is
what keeps step 4 clean.

### B3-3 — confirmed

`lem-one-step-root-extension-over-a-perfect-field-is-algebraically-closed`
declares `thm-transitivity-of-algebraicity`, and its strategy now says the step
"is transitivity of algebraicity applied to `L/F` algebraic, and is cited, not
asserted". The contract records it as fact P4 with the published Statement quoted
verbatim — "If `F ⊆ K ⊆ L`, the extension `K/F` is algebraic, and `L/K` is
algebraic, then `L/F` is algebraic" — used at step 3.1 and listed in that step's
input map. I compared the quote against `items/thm-transitivity-of-algebraicity.md`
character for character.

---

## Mechanical re-run, after my repairs

| check | result |
|---|---|
| dependency resolution + `requires`-closure, batches 1–3 (my checker) | **8 pages, 207 items, 712 deps, 0 errors** — 337 in-batch, 375 published; 0 unresolved, 0 forward, 0 out-of-closure, 0 `ai-generated` statement targets |
| cross-batch dependency edges | **0**, as Beta-2 reported |
| `coverage-checklist.mjs` × 3 | 84 / 157 / 108 harvested results, **0 errors, 0 warnings** |
| `content-policy.mjs --manifest-only` × 3 | 27 / 108 / 72 scoped items, **0 errors, 0 warnings** |
| `boundary-audit.mjs --fail-on-template` × 3 | 208 / 720 / 472 rows, no template-reuse cluster, exit 0 |
| `prosecheck.mjs --warnings` | 5 files, **0 errors, 0 warnings** |
| `splice-plan.mjs --dry-run` | batch 1 clean (27 items), batch 3 clean (72 items), batch 2 refuses on one `requires` edge — see below |
| item counts | sylow A **42**, chain-conditions A **43**, algebraic-closure A **60**, reciprocity A **18**; all ≤ 60 |

The closure checker is the one that found the surviving defect; the four
repo gates were green over it both before and after, which is why the check
exists.

---

## What the lead Alpha must adjudicate at step 4

`splice-plan.mjs --run frontier-15 --batch 2 --dry-run` refuses:

> `chain-conditions-and-semisimple-modules`: the manifest declares requires the
> plan does not — `the-field-of-fractions-and-localisation`.

**That refusal is correct and expected**, and it is my step-3 repair #2 arriving
where it should. Adjudication: add the edge to `plan-spec.json`. It is backward
(order 53.2 < 108), it is not otherwise reachable — I computed page 108's closure
both through the manifest and through the plan — and
`fs-noetherian-rings-have-noetherian-subrings` needs it, since the witness sits
`k[x₁, x₂, …]` inside its fraction field. Batches 1 and 3 need no adjudication.

Two further notes for the stages after this one:

- **The Judson source postdates the step-2 URL sweep.**
  `research/frontier-15-url-liveness.json` records 39 URLs, 39 live, and contains
  no `judsonbooks.org` row, so this stage's `urlGate`/`fetchGate` is the first to
  see it. I verified it independently: HTTP 200, `application/pdf`, 1,534,445
  bytes, and I read the cited pages out of the document itself. Separately, **no
  source in any batch carries a `fetch_verified` stamp** — Beta-2 recorded the
  cause honestly (its sandbox had no outbound DNS: `0/11`, `ENOTFOUND` for every
  host, no stamp fabricated). DNS resolves from this host, so if the engine's
  mechanical stamp repair runs here it should succeed; I did not run it myself,
  because the stamping repair belongs to this stage's gate and two writers on the
  coverage files is the failure mode that rule exists to prevent.
- **Planned boundary rows on the chain-conditions pair are heavily templated** —
  e.g. "The planned statement for … assigns the smallest or collapsed structures
  allowed by the hypotheses". `boundary-audit --fail-on-template` passes and these
  are *planned* contracts with no proofs behind them yet, so this is not a step-3
  finding. It is the class that hid a fatal defect twice on `frontier-13` and
  three times on `frontier-14`, so I am flagging it for 6b.1: the eight rows are
  present, which is all `--strict` checks.

---

## Verdicts

| pair | verdict |
|---|---|
| `quadratic-reciprocity-and-the-jacobi-symbol` | **ready for splice** |
| `sylow-theorems-and-nilpotent-groups` | **ready for splice** — B2-2 closed by the Beta fix plus my two repairs |
| `chain-conditions-and-semisimple-modules` | **ready for splice**, with the `requires` adjudication above owed at step 4 |
| `algebraic-closure-embeddings-and-separability` | **ready for splice** |

`research/frontier-15-alpha-a-step3-verdicts.json` is updated: the Sylow pair moves
from `insufficient` to `sufficient`, so the `3-recheck` gate's
`--require-sufficient` predicate can close on my group. Nothing else in that file
changed.

**Standing hazard, unchanged and still true:** page 98 is at exactly 60 items with
zero headroom, so a single added A item trips `validate-plan`'s `size` and forces
the split whose cut I adjudicated in advance at step 3 (§F1). The Sylow A page is
at 42 after the fix, so it has room; do not prune a harvested result to stay under
a ceiling.

## Honest remaining gaps

- **The `requires` adjudication at step 4 is not mine to apply** — it is the lead
  Alpha's, and until it is applied batch 2 does not splice.
- **B2-6's textbook backing is narrow.** Verified faithful and verified to cost no
  result, but the pair's primary sources are still lecture notes.
- **The fetch stamps are absent run-wide**, and my evidence that the batch-2 URLs
  are readable is my own fetch, not a mechanical stamp.
- **I did not re-open every source at every locator in this pass.** I opened
  Judson at pp. 220–228 because it is the source the fix pass added; the Hackman,
  both Conrad and Milne ranges I read at step 3 are unchanged and their
  dispositions were not touched, except for the two `included` notes discussed
  above. Clark, Shoup, Stein, Gorodnik, Idelhaj, Boston, Crawley-Boevey, MIT
  18.706, Nair, Grifo and the Cambridge sheet remain checked structurally and by
  disposition text only. Step 6b.0 is where that closes.
