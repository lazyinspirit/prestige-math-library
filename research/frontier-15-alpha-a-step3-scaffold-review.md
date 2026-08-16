# frontier-15 — Alpha group `a`, step-3 scaffold breadth and depth review

Batches owned: **1, 2, 3** (`research/frontier-15-alpha-groups.json`, group `a`).
Pairs reviewed: 4 A/B pairs, **205 items** (27 + 51 + 55 + 72).
Alpha: Claude Opus 5, `claude` runner, `xhigh`, 1,000,000-token window.

Every load-bearing claim below was verified from disk or from the source PDF, not
from a Beta report. Where a Beta's stated reason turned out to be false of disk,
that is recorded as its own finding.

---

## Severity table

| id | pair | severity | class | disposition |
|---|---|---|---|---|
| **B3-1** | algebraic-closure | **blocking** | prerequisite closure broken | **repaired by Alpha** |
| **B2-1** | sylow | **blocking** | Statement asserts less than the harvest and three consumers claim | **repaired by Alpha** |
| **B2-2** | sylow | **blocking** | two items rest on order-78 machinery at order 71 | **routed to Beta-2 — pair `insufficient`** |
| **B2-4** | chain-conditions | **blocking** | undeclared prerequisite page | **repaired by Alpha** |
| B3-3 | algebraic-closure | moderate | missing dependency edge on a load-bearing step | **repaired by Alpha** |
| B2-5 | chain-conditions | moderate | dependent choice is a forward reference here | **adjudicated — binding authoring decision below** |
| B3-2 | algebraic-closure | moderate | Beta finding F2 rests on a false premise | **declined** |
| B2-6 | sylow | minor | source depth below the batch task's own bar | recorded, not blocking |
| B2-7 | sylow | minor | a decline reason weaker than the rule now requires | recorded, not blocking |
| B1-1 | reciprocity | none | suspected dep padding — **refuted by disk** | no action |

Four repairs applied; one finding routed; four pairs verdicted. **Nothing in
batch 1 required repair.**

---

## Mechanical grounding, run first

Two checkers over batches 1–3, both re-run after every repair:

1. **Dependency resolution** — every `deps` target of all 205 items either exists
   on disk as `status: published`, or is earlier in the same batch. Result:
   **0 unresolved, 0 forward references, 0 targets whose
   `provenance.statement` is `ai-generated`.** No item is ineligible as a
   dependency.
2. **`requires`-closure** — for every item, is the *page* carrying its dependency
   inside the declared transitive `requires` closure? This is the check that
   found B3-1, B2-4 and B2-2, and none of them is visible to (1).

> **Verifier defect, recorded because it nearly cost a finding.** My first
> closure checker parsed library `items:` lists with a block-sequence regex; the
> pages use flow-style YAML (`items: [a, b, c]`), so it mapped almost nothing and
> emitted a 40-line `NO-PAGE` bucket of noise. A second defect: it resolved each
> B page's closure through `plan-spec.json`'s copy of the A page's `requires`
> rather than the manifest's, which made batch 3's B page read "OK" while four of
> its items had in fact lost their prerequisite, and later made batch 2's B page
> read "broken" *after* I had repaired it. Both were fixed and every result below
> is from the corrected run.

After the four repairs, **all eight pages close.**

---

## Batch 1 — `quadratic-reciprocity-and-the-jacobi-symbol` (18 + 9)

**Verdict: sufficient.** No repair needed. The design proposed 14 + 8; the
scaffold delivers 18 + 9, and the additions are harvested, not padding.

### Is the standard development present?

Yes. Reciprocity via Gauss's lemma and the rectangle count; both supplements for
the Jacobi symbol; well-definedness; multiplicativity in both arguments; Jacobi
reciprocity; the Euclidean evaluation algorithm; the square/Jacobi-value
implication with its failing converse; nonsingular lifting at odd prime powers;
the two-power criterion; the global CRT criterion and root count; and the
kernel/square-subgroup index computation. I checked the harvest for a standard
result appearing in no source's contents and found none.

### Harvest faithfulness — checked against the source, not the file

I downloaded Hackman (`booktot.pdf`, 415 pp.) and read §D.V at its stated
locator. It is faithful:

- §D.V "The Rectangle Proof" does begin at printed p. 127 (PDF p. 138), as
  recorded.
- **D.V.1 Lemma** is exactly `lem-gauss-lower-half-lattice-count`: it proves
  `Σ_{j=1}^{(p-1)/2} ⌊jq/p⌋ ≡ N (mod 2)`, hence `(-1)^S = (q/p)`.
- The rectangle argument is exactly `lem-reciprocity-rectangle-lattice-count`:
  the count `(p-1)/2 · (q-1)/2`, the diagonal `py − qx = 0`, and "as (p,q) are
  relatively prime there are no lattice points on the diagonal".

**Trap 1 (no floor function) is honoured, and honoured faithfully.** Hackman
writes `⌊jq/p⌋`; the scaffold writes "the number of positive integers `y` with
`py < qx`". These are the same object — Hackman's own text derives his floor from
"`1 ≤ y ≤ ⌊qj/p⌋`, so the number of admissible `y` is …". The scaffold keeps the
source's mathematics and drops only the notation that would be a forward
reference to real analysis. Traps 2–5 are honoured too: the zero convention and
empty product are in `def-jacobi-symbol` and discharged by
`prop-jacobi-symbol-well-defined` against `thm-canonical-prime-factorisation`;
`lem-nonsingular-square-root-lift-modulo-odd-prime-powers` says in its own
strategy that it is "a direct specialised congruence proof, not a general Hensel
lemma"; **no item in batch 1 declares any choice principle**, so the ZF-only trap
holds mechanically; and `cex-jacobi-symbol-one-does-not-imply-a-square` is
retained with the `(2/15)` witness.

### Routes I traced in full

`thm-jacobi-map-kernel-and-square-subgroup` is the heaviest item on the page (13
dependencies) and its route closes: `(Z/n)^×  ≅ ∏(Z/p_i^{e_i})^×` with each
factor cyclic of even order gives `|ker(sq)| = 2^r`, hence `[U_n : U_n²] = 2^r`;
`n` is a square iff every `e_i` is even, in which case `χ_n` is trivial;
otherwise a local nonsquare at an odd-exponent prime with 1 elsewhere makes
`χ_n` surjective, so `[ker χ_n : U_n²]` is `2^r` or `2^{r-1}` respectively, and
`r = 0` gives 1 at `n = 1`. I also checked the published targets it leans on —
`thm-unit-group-modulo-two-power-structure` really does supply the unique
`(-1)^ε 5^j` form, and `cor-number-of-solutions-to-quadratic-congruence-modulo-prime`
really does give `1 + (a/p)` solution classes.

`cor-infinitely-many-primes-congruent-to-one-modulo-three`: `N = 12P² + 1`, any
prime divisor `q` is odd and `≠ 3`, and `q | (6P)² + 3 = 3N` gives `(6P)² ≡ −3`,
so `q ≡ 1 (mod 3)`, so `q` is on the list, so `q | P` and `q | 1`. It closes,
including at the empty list.

### B1-1 — a suspicion I raised and then refuted

I flagged `def-countable`, `def-equinumerous` and
`def-injection-surjection-bijection` on that corollary as possible dep padding —
"adding a dep to silence a checker when the proof does not use it" is the
dominant historical defect class. **Refuted from disk.** The published
`thm-euclid-infinitude-of-primes` states its infinitude clause as "there is no
`m ∈ ℕ` with `P ≈ m` (`def-countable`, `def-equinumerous`)" and carries exactly
those three ids in its own `deps`. The scaffold is following the established
library convention, not padding it. No action.

### Beta-1's seven amendments — all verified, all approved

NT3-1 (split supplements from reciprocity), NT3-2 (the algorithm is Shoup §12.3's
Euclidean one, not the binary variant of Exercise 12.5), NT3-3 (separate the
square implication from its counterexample), NT3-4 (add the character and kernel
structure), NT3-5 (locator correction to Hackman B.VII.5), NT3-6 (retain the
infinitude corollary), NT3-7 (distinct witnesses so the companion does not
duplicate the published `ex-square-roots-of-one-modulo-one-hundred-twenty-eight`).

I spot-checked NT3-5 against the PDF: **Hackman B.VII.5 is indeed the worked
example for `x² − b ≡ 0 (mod 2^e)` with `b` odd and `e ≥ 3`**, noting that
`f'(x) = 2x ≡ 0 (mod 2)` so no solution refines uniquely — the correct locator
for the two-power criterion, and the old B.IV locator was wrong as Beta said.

---

## Batch 2, pair A — `sylow-theorems-and-nilpotent-groups` (40 + 11)

**Verdict: insufficient**, on B2-2 alone. B2-1 is repaired below.

### B2-1 (blocking) — Sylow II never states conjugacy · REPAIRED

The scaffolded item was:

> `thm-sylow-second-theorem` — "Sylow II **in containment form**: every
> `p`-subgroup lies in a conjugate of any Sylow `p`-subgroup"

Its strategy proved conjugacy in passing ("Taking `H` Sylow gives conjugacy") but
the **Statement asserted only containment**. Three later items then cite it for
conjugacy:

- `thm-sylow-number-as-normalizer-index` — "Conjugation is **transitive on the
  Sylow p-subgroups** by Sylow II";
- `thm-sylow-third-theorem` — "Sylow II inside that normalizer **forces P = Q**";
- `cor-sylow-subgroup-normal-iff-unique` — "Sylow II says every Sylow subgroup
  **is one of its conjugates**".

None of those is licensed by the containment form as written. This is the
citation-fidelity rule exactly: a clause's opening words are not a citation, and
a Statement that asserts less than its consumers claim is the defect this stage
exists for.

**It is also a harvest inconsistency, and that is what makes it certain rather
than stylistic.** I extracted the headings of Conrad's `sylowpf.pdf` and read
them:

> **Theorem 1.7 (Sylow I).** A finite group `G` has a `p`-Sylow subgroup for
> every prime `p` and each `p`-subgroup of `G` lies in a `p`-Sylow subgroup.
> **Theorem 1.8 (Sylow II).** For each prime `p`, the `p`-Sylow subgroups of `G`
> are conjugate.

So the scaffold had **renamed the source's theorems**: it called Conrad's Sylow I
containment clause "Sylow II", and never stated Conrad's actual Sylow II. Worse,
`research/frontier-15-batch-2.coverage.json` maps **four** source headings —
Conrad `sylowpf` Thm. 1.7 (containment) and Thm. 1.8 (conjugacy), Conrad
`sylowapp` Thm. 1.2 (conjugacy), Idelhaj Thm. 3.4 and Thm. 3.10 — all onto
`thm-sylow-second-theorem` with disposition `included`. The harvest therefore
claimed conjugacy was covered by an item whose Statement did not contain it.
That is precisely the `group-actions-and-cayleys-theorem` failure — a page citing
a source titled "Orbits and stabilizers" and publishing without the
orbit–stabiliser theorem — caught one stage earlier this time.

**Repair applied (form 3, correct the Statement).** In
`research/frontier-15-batch-2.pages.json`:

- title → "Sylow II: every `p`-subgroup lies in a conjugate of any Sylow
  `p`-subgroup, **and the Sylow `p`-subgroups form a single conjugacy class**";
- the strategy now carries both clauses as asserted conclusions, with clause (b)
  spelled out — `Q ≤ gPg⁻¹` with `|Q| = |gPg⁻¹| = p^a` finite forces
  `Q = gPg⁻¹` — and states that both are asserted *because* the second is what
  the later items cite;
- `thm-lagrange` added to `deps`, since the order argument closing clause (b) is
  now inside this item rather than implicit in its consumers.

No item was added, so nothing downstream moves.

### B2-2 (blocking, routed to Beta-2) — two examples rest on order-78 machinery

`ex-heisenberg-sylow-subgroup-of-the-upper-triangular-group` and
`ex-sylow-subgroups-of-gl-two-over-a-finite-prime-field` build their ambient
groups out of invertible `3×3` and `2×2` matrices over `F_p`. That machinery does
not exist at this point in the reading order:

- `def-invertible-matrix-and-general-linear-group` and
  `cor-general-linear-group-is-a-group` are published on
  **`matrices-and-the-matrix-of-a-linear-map`, order 78**; the Sylow pair is at
  orders **70/71**.
- The transitive `requires` closure of page 71 is 33 pages and contains **no**
  matrix, vector-space or determinant page.
- The published `semidirect-products-and-automorphism-groups` (order 68) — which
  the design at line 2096 says makes `GL_2(F_p)` "affordable" — **never mentions
  `GL_2`**; I read its item list, and it carries only
  `thm-automorphisms-of-a-finite-cyclic-group` and
  `thm-automorphisms-of-a-finite-rank-free-abelian-group`. The design's claim is
  stale and was never realised.

Neither item declares any of this in `deps` — they list only Sylow items and
`thm-z-mod-p-is-a-field` — so the closure checker in §Mechanical grounding cannot
see it either. The machinery is used in the *construction*, not in a citation.

**The harvest already knows this.** The same `coverage.json` declines Conrad
Example 1.6 (Sylow subgroups of `SL_2(Z/(3))`) and Example 5.7 with the reason
"needs the special-linear-group definition and **matrix infrastructure that
occurs after this page's reading-order slot**". That reason is true — and it is
the same reason that condemns Thm. 2.4 and Thm. 2.7, which the file marks
`included`. Two dispositions, one fact, opposite conclusions.

I am routing this rather than repairing it because the fix is source-backed
construction, and Beta-2 holds the sources. The exact prescription, with the
preferred disposition (build the prerequisite, per the owner's 2026-08-11 rule)
and the fallback, is in `research/frontier-15-alpha-a-step3-verdicts.json`. In
brief: rebuild the Heisenberg item natively on `F_p³` under
`(a,b,c)(a',b',c') = (a+a', b+b', c+c'+ab')`, mirroring the published
`ex-heisenberg-group-is-nilpotent-of-class-two` which does exactly that on `Z³`
citing only `def-group`; and for the `GL_2` item, scaffold `Aut((Z/p)²)` with its
order `(p²−1)(p²−p)` counted by ordered bases and restate the example over it.
The A page is at 40 items, so it has room.

I verified Conrad's Thm. 2.7 verbatim before prescribing anything: "For prime
`p`, `Heis(Z/(p))` is the unique `p`-Sylow subgroup of the group of invertible
upper-triangular matrices…". **Beta-2's finding 2 is correct** — the design's
"unique `p`-Sylow of `GL_3(F_p)`" is false, since the unitriangular group is
Sylow in `GL_3` but not normal there — and the correction is approved. The item
is still unbuildable as written, which is a separate defect Beta did not see.

### Is the standard development otherwise present?

Yes, and it is rich. Sylow I by Wielandt's binomial-valuation route, with
`lem-wielandt-sylow-binomial-valuation` split out; Sylow III and III*; normal iff
unique; the Frattini argument; `N_G(N_G(P)) = N_G(P)` in the stronger
"self-normalising" form Conrad's Thm. 2.1 actually proves; the normaliser
condition; maximal subgroups of nilpotent groups; the index-`p` **existence**
theorem §II.3.b demands; the `p`-core, Fitting and Frattini development with the
non-generator characterisation and `F(G/Φ(G)) = F(G)/Φ(G)`; and the Sylow
characterisation of nilpotence that earns the page its title. Applications:
`p²q`, 30, 45, 105, `pq`.

Two checks against the batch task's own traps: the scaffold **mints nothing
§II.3.a lists as published** — I confirmed `thm-classification-of-groups-of-order-pq`
and `lem-groups-of-order-pq-have-a-normal-q-subgroup` are on disk and correctly
cited rather than re-minted — and the index-`p` existence item is present with a
route that closes (maximal proper subgroup of a nontrivial finite `p`-group;
nilpotent so the index is prime; Lagrange makes that prime `p`).

I also verified the two strongest applications, since Beta-2's finding 3
strengthened them: order 30 (`n₅ = 6` and `n₃ = 10` cannot both hold on 30
elements; the order-15 subgroup is cyclic of index 2 and its Sylow subgroups are
characteristic) and order 105 (`21·4 + 15·6 = 174 > 104`; the order-35 subgroup
is cyclic of index 3). Both are true as strengthened. **Approved.**

### B2-6 (minor, recorded) — source depth

`research/frontier-15-beta-2.task.md` requires "at least one textbook/monograph
per pair". The Sylow pair has none: two Conrad blurbs, a two-page Boston note,
and a UChicago REU paper. The gate passes — `coverage-checklist.mjs`'s
`PRIMARY_KINDS` admits `lecture-notes` and `course-notes` — and I verified the
harvest is genuinely faithful and complete against both Conrad PDFs, so the
mathematics is well backed. Recorded as a deviation from the dispatch
instruction, **not** a reason for `insufficient`. The chain-conditions pair is
unaffected: Crawley-Boevey, Nair and Grifo are full course-note sets.

### B2-7 (minor, recorded) — one decline weaker than the rule

Conrad Cor. 5.13 (two isomorphism types of groups of order 105) is declined
`out-of-scope` as "beyond the … conclusion required", while the page *does*
classify order 30 into four types via the same published semidirect-product
machinery. Since 2026-08-11 a decline must name another page's topic or an
unreached subject area; "not required here" is a richness judgement. Not
blocking, and I am not forcing the addition — but the two dispositions should be
made consistent when B2-2 is fixed.

### B2-3 — the B page

11 worked examples, no counterexamples. I checked whether that violates a
convention and it does not: false statements live on both A and B pages across
the published corpus, and this A page carries five (`fs-converse-of-lagrange…`,
`fs-subgroups-of-equal-p-power-order-are-conjugate`,
`fs-unique-sylow-subgroup-forces-a-direct-product`,
`fs-groups-of-order-forty-two…`, `fs-finite-nilpotent-and-solvable-groups-coincide`)
which do the boundary-marking work. The B page is a real development. No finding.

---

## Batch 2, pair B — `chain-conditions-and-semisimple-modules` (43 + 12)

**Verdict: sufficient**, after the repair below.

### B2-4 (blocking) — undeclared prerequisite page · REPAIRED

`fs-noetherian-rings-have-noetherian-subrings` cites `def-field-of-fractions` and
`thm-field-of-fractions-is-a-field-and-the-domain-embeds`. Both are published on
**`the-field-of-fractions-and-localisation`, order 53.2**, which was in **neither**
the manifest's nor `plan-spec.json`'s `requires` closure for page 108 — I
computed the closure both ways. The witness needs it: a non-Noetherian subring of
a Noetherian ring is got by sitting `k[x₁, x₂, …]` inside its fraction field,
which is Noetherian because it is a field.

**Repair applied.** `the-field-of-fractions-and-localisation` added to page 108's
`requires` in the manifest. Order 53.2 < 108, so it is a backward edge and
`prereq-order` is safe; it was not previously reachable, so it is not
`redundant-prereq`. Both pages now close.

### B2-5 (moderate) — dependent choice is a **forward reference** here · ADJUDICATED

`thm-equivalent-characterizations-of-noetherian-modules` and
`thm-equivalent-characterizations-of-artinian-modules` both name dependent choice
in their strategies ("Under dependent choice, failure of finite generation
recursively produces a strict ascending chain"; "State exactly where DC is
used"), and both declare `deps` consisting of a single definition. Their
page-mates `thm-finitely-generated-nonzero-modules-have-maximal-proper-submodules`
and `thm-equivalent-characterizations-of-semisimple-modules` correctly declare
`thm-zorn`, so the omission is internally inconsistent.

I started to repair this by adding `def-dependent-choice` and stopped, because
that would have created a worse defect. **`def-dependent-choice` is published on
`compactness-in-metric-spaces`, order 120** — twelve pages *after* this one. It
cannot be a `deps` target here, and citing it would be an unlicensed forward
reference to a topology page from an algebra page. (`def-axiom-of-choice` is on
`relations-functions-and-quotients` and `def-countable-choice` on
`countability-and-uncountability`; only DC is homed this late.)

**Adjudication, binding on the Step-5 author.** Keep both statements. State the
DC use in **Facts**, as an adopted foundational axiom — `LEVELS.md` §Step 2
licenses exactly this: the axioms the library has adopted, `def-dependent-choice`
named among them, "are assumed rather than derived, so depending on one is not an
unproved dependency". Add **no** `deps` edge, **no** `forward_refs` entry, and
**no** topology prerequisite. Label the clauses so the reader can see the split:
"every submodule finitely generated ⟹ ACC" and "maximal condition ⟹ every
submodule finitely generated" are choice-free; only "ACC ⟹ maximal condition"
(and the contrapositive construction of a strict chain) consumes DC. Recording
this here so the author does not invent a forward reference at step 5 and trip
`fwdcheck` at step 6.

### Is the standard development present?

Yes. Noetherian and Artinian modules and rings with their equivalences; exactness
of both chain conditions in short exact sequences and finite direct sums; finite
generation over a left Noetherian ring; Hopfian; composition series ⟺
Noetherian + Artinian; Jordan–Hölder; additivity of length; the endomorphism ring
with `End_R(_R R) ≅ R^op` and the Hom-matrix description of a finite direct sum;
maximal submodules; the semisimple equivalences with the choice cost isolated and
a separate choice-free finite-length form; socle; Schur; the semisimple-ring
equivalences; matrix rings over division rings; Wedderburn–Artin with uniqueness;
left/right agreement; and the integrality block via the determinant trick.

The design's denials hold: **no Jacobson radical appears anywhere** — I checked,
and the Crawley-Boevey route is used, with the source's radical-formulated
Artin–Wedderburn clause explicitly declined `out-of-scope` for that reason. The
left/right convention is stated per clause, and `cor-left-and-right-semisimplicity-agree`
correctly comes only after the matrix-product theorem. Hopkins–Levitzki is
absent, which is right: it needs the radical the design forbids.

All the §II.1.d re-homes landed (module isomorphism and correspondence theorems,
`End_R(M)`, `End_R(R) ≅ R^op`, maximal submodules) and so did the §II.5.c
integrality block. **The split risk did not materialise: 43 items, well under 60.**
The `Z(p^∞)` question is settled in favour of building it —
`ex-prufer-p-group-is-artinian-not-noetherian` — which I approve; the construction
as the `p`-power-denominator subgroup of `Q/Z` is in scope.

### Beta-2's eight findings — all verified, all approved

1. Fitting subgroup as `∏_p O_p(G)`, not the product of the normal Sylow
   subgroups. **The old design text is false**: `S₄` has no normal Sylow subgroup
   at all, so that product is trivial, while `F(S₄) = V₄ = O₂(S₄)`. Approved.
2. Heisenberg ambient group. Correct against Conrad Thm. 2.7, verified verbatim.
   Approved — see B2-2 for the separate availability defect.
3. Full order-30 and order-105 conclusions. Verified both proofs. Approved.
4. Index-`p` existence by the maximal-subgroup route rather than through
   `G/[G,G]G^p`. The old route did need commutator-power quotient machinery
   outside the declared prerequisites. Approved.
5. Cite `thm-rational-root-theorem`, not the pure-power corollary — the corollary
   does not give the denominator-divides-leading-coefficient clause a general
   monic polynomial needs. Approved.
6. The triangular ring `[[Z, Q], [0, Q]]` as right Noetherian but not left
   Noetherian. Handedness matters and is the standard orientation; source-checked
   by Beta and consistent with the page's left-module convention. Approved.
7. Narrow the order-≤15 table to Sylow data rather than an isomorphism
   classification. Approved — the page cannot prove the order-8 and order-12
   classifications from its prerequisites.
8. Retain the Prüfer group. Approved.

One open convention Beta left for the author and I am settling now:
`thm-wedderburn-artin-theorem`'s strategy says "Include the zero ring as the
empty product **if the repository permits it, otherwise** state the nonzero-ring
convention explicitly". Take the second branch: **state the nonzero-ring
convention explicitly in the Statement.** A step-5 author should not be
discovering a repository convention mid-proof.

---

## Batch 3 — `algebraic-closure-embeddings-and-separability` (60 + 12)

**Verdict: sufficient**, after the repairs below.

### B3-1 (blocking) — the manifest replaced the page's prerequisites · REPAIRED

`plan-spec.json` declares three prerequisites for page 98:

```
algebraic-extensions-degree-and-finite-fields-examples
eigenvalues-eigenvectors-and-the-characteristic-polynomial
the-field-of-fractions-and-localisation
```

The manifest declared **two**, dropping the last two and adding
`order-zorn-and-the-axiom-of-choice`. Both drops are load-bearing:

- **`def-algebraically-closed-field` is published on
  `eigenvalues-eigenvectors-and-the-characteristic-polynomial` (order 86)** and is
  reachable no other way. Five A-page items cite it, including
  **`def-algebraic-closure` itself** — the page's central definition —
  `thm-embeddings-of-a-simple-algebraic-extension-correspond-to-distinct-roots`,
  `cor-fields-of-characteristic-zero-and-finite-fields-are-perfect`,
  `lem-one-step-root-extension-over-a-perfect-field-is-algebraically-closed` and
  `thm-algebraic-embedding-extension`.
- **`cor-rational-function-field-as-a-fraction-field` is published on
  `the-field-of-fractions-and-localisation` (order 53.2)** and is cited by four B
  items — `ex-x-p-minus-t-is-irreducible-and-inseparable`,
  `ex-fp-t-over-fp-tp-is-purely-inseparable-of-degree-p`,
  `cex-degree-p-squared-purely-inseparable-extension-is-not-simple` and
  `ex-perfect-closure-of-fp-t-is-an-infinite-perfect-field`. Without it there is
  no `F_p(t)`, and the entire inseparability half of the B page has no ground.

**Repair applied.** Page 98's manifest `requires` restored to exactly the three
`plan-spec.json` declares. This also keeps step 4 clean: `splice-plan.mjs`
refuses when a manifest declares a `requires` edge the plan does not, so the
manifest and the plan now agree and there is nothing to adjudicate there.

### B3-2 (moderate) — Beta-3's finding F2 is declined

F2 asks to add `order-zorn-and-the-axiom-of-choice` to the `requires`, on the
ground that "the current plan object lists only
`algebraic-extensions-degree-and-finite-fields-examples`" and that "the page's two
uses of `thm-zorn` sit outside its declared prerequisite closure".

**Both halves are false of disk.** The plan lists three prerequisites, not one;
and `order-zorn-and-the-axiom-of-choice` (order 10) is already reachable
transitively from `algebraic-extensions-degree-and-finite-fields-examples`, so
`thm-zorn` was inside the closure the whole time. Adding the edge would earn a
`redundant-prereq` warning and — more to the point — would have been a
manifest-declares-what-the-plan-does-not splice refusal at step 4. **Declined.**
The real defect F2 half-saw is B3-1, and that is repaired.

This is worth stating plainly because the finding *read* as routine and its
premise was wrong in the direction that hides two dropped edges: had I approved
F2 as written and moved on, the page would have gone to step 4 with
`def-algebraic-closure` citing a definition outside its closure.

### B3-3 (moderate) — a load-bearing step with no dependency · REPAIRED

`lem-one-step-root-extension-over-a-perfect-field-is-algebraically-closed` ends:
"Any element algebraic over the one-step extension is algebraic over `F`, and its
minimal polynomial over `F` already splits in the extension." That step is
transitivity of algebraicity, and **no item in batch 3 cited
`thm-transitivity-of-algebraicity`**, which is published on
`algebraic-extensions-degree-and-finite-fields` and inside the page's closure.

I checked Milne against this: his **Proposition 6.5** proof cites his (1.45) at
exactly this point. Read verbatim from `FT0.pdf`: "Let `Ω/F` be an extension of
fields. If `Ω` is algebraic over `F` and every nonconstant polynomial in `F[X]`
has a root in `Ω`, then `Ω` is algebraically closed (hence an algebraic closure
of `F`)." The scaffold's statement matches the source exactly, including the
algebraicity hypothesis — so **Beta-3's finding F5 is correct and approved.**

**Repair applied.** `thm-transitivity-of-algebraicity` added to that lemma's
`deps`, and its strategy now says the step "is cited, not asserted".

### Do the routes close? Traced in full

The one-step construction is the page's spine and it holds:

- `lem-artin-simultaneous-root-ideal-is-proper` — a finite alleged identity
  `1 = Σ g_i f_i(x_{f_i})` is killed by evaluating in a splitting field of the
  product of the finitely many `f` occurring, unused variables to zero. ✓
- `thm-one-step-simultaneous-root-extension` — maximal ideal (Zorn, declared),
  quotient is a field, each `x_f` is a root of `f`, every element uses finitely
  many algebraic residues. ✓
- `lem-perfect-subfield-of-a-one-step-root-extension-in-positive-characteristic` —
  I checked this one hardest, since it carries the characteristic-`p` half.
  `F' = {a ∈ L : a^{p^n} ∈ F for some n}` is a subfield by Frobenius; it is
  perfect because for `a ∈ F'` with `a^{p^n} ∈ F`, the polynomial
  `x^{p^{n+1}} − a^{p^n} ∈ F[x]` has a root `b ∈ L` by hypothesis, and injectivity
  of `x ↦ x^{p^n}` in characteristic `p` gives `b^p = a` with `b ∈ F'`; and for
  `g ∈ F'[x]` nonconstant, raising the finitely many coefficients to a common
  `p^n` gives `h = g^{p^n} ∈ F[x]`, whose root `α ∈ L` satisfies
  `g(α)^{p^n} = 0`, hence `g(α) = 0`. The root lands in `L`, not in `F'`, which
  is the correct and needed form. ✓
- `thm-one-step-algebraic-root-extension-is-algebraically-closed` then applies the
  perfect-case lemma with base `F'` and ambient `L`. ✓

**Every trap the batch task states is honoured**, and I checked each against the
scaffold rather than the notes: the ω-iteration is absent and the one-step route
is the one built; the closure is retained, not traded for the
ambient-normal-extension fallback; the properness of Artin's ideal is its own
numbered lemma rather than being compressed into "quotient by a maximal ideal";
`cor-algebraic-closures-are-isomorphic-over-the-base` says "generally
**nonuniquely**" and `fs-algebraic-closure-is-unique-up-to-unique-isomorphism`
records the false phrasing as a false statement; the id is
`def-normal-closure-of-an-algebraic-extension`, so the group-theoretic
`def-normal-closure` namespace is not collided with; Zorn is declared at both
uses (`thm-one-step-simultaneous-root-extension`, `thm-algebraic-embedding-extension`);
and the D6 dictionary item
`cor-polynomial-ring-on-a-finite-family-agrees-with-the-iterated-construction`
is present, so there is no silent second notion of a multivariate polynomial ring.

The separable-degree half is ordered to avoid the circularity Beta's F4 warns
about: the simple-extension root count and restriction fibres precede
multiplicativity; the full-degree criterion precedes transitivity; pure
inseparability is established before `[K:F]_s = [K_s:F]`. **F4 approved.** **F3
approved** — Milne's Theorem 5.1 does prove the stronger "all but possibly one
generator separable" form, and the perfect-case one-step proof consumes exactly
that.

Declines are specific and name their destination **by page id** —
`the-galois-correspondence` for Milne Thm. 3.10 and Clark Thms. 4.26/4.27,
`the-fundamental-theorem-of-algebra` for Clark Thm. 3.2 — as the rule requires.

### F1 — the split contingency, and a standing hazard

Beta-3's F1 is approved **as a contingency and it has not triggered**: the A page
is at **exactly 60 items**, `validate-plan.mjs` errors only *above* `--max-items`
(default 60), so it passes with **zero headroom**. My three batch-3 repairs
changed a `requires` list and one `deps` list and added **no item**, deliberately.

**Flagging for whoever touches this pair next, at any stage:** adding a single A
item to page 98 trips `size` and forces the split. If the split is ever taken,
F1's cut is adjudicated and approved in advance — items 1–35 stay on page 98 with
B items 1–4 and 12; items 36–60 move to a new
`separable-degree-perfect-and-purely-inseparable-extensions` after order 99 with
B items 5–11; the second A page requires the first B page; both A pages get their
own two-paragraph summaries; and `the-galois-correspondence` plus the waiting
number-theory and commutative-algebra consumers re-point to the new second B
page. Do not prune a harvested result to stay under the ceiling.

---

## Harvest faithfulness — what I actually opened

`coverage-checklist.mjs` proves a harvest is structurally complete; only a reader
can tell whether it is honest. I downloaded and read four sources at their stated
locators rather than trusting the files:

| source | checked | result |
|---|---|---|
| Hackman, `booktot.pdf` | §D.V at printed p. 127; B.VII.5 | **faithful** — D.V.1 and the rectangle count are exactly the two scaffolded lemmas; B.VII.5 is the two-power square-root example, confirming Beta's locator correction |
| Conrad, `sylowpf.pdf` | all Theorem/Example headings, 7 pp. | **faithful, and it exposed B2-1** — Thm. 1.8 is conjugacy, which the scaffold never stated |
| Conrad, `sylowapp.pdf` | all Theorem/Lemma/Corollary headings, 20 pp. | **faithful** — Thms. 2.4, 2.7, 5.9, 5.11, 5.14 and Lemma 5.8 all present and correctly mapped; Thm. 2.7 confirms Beta's finding 2 verbatim |
| Milne, `FT0.pdf` | Prop. 6.5 | **faithful** — statement matches including the algebraicity hypothesis; confirms F5 and exposes B3-3 |

No source's contents list was a thin selection of its range, and I found no
standard result absent from every source's contents. `url-liveness.json` reports
39/39 live with 2 superseded citations already swapped — including the Boston
note, correctly recovered to a Wayback snapshot rather than re-sourced.

`coverage-checklist.mjs` over my three batches after the repairs:
**4 pages, 343 harvested results, 0 errors, 0 warnings.**
(My first run of it reported four `coverage-missing-page` errors; that was my
invocation — the tool derives each manifest from the coverage filename and takes
no `--manifests` flag, so the paths I passed were parsed as further coverage
files. Recorded because a mis-invoked gate reads exactly like a red one.)

---

## Repairs applied by Alpha

All in the batch manifests; both files re-parsed and both checkers re-run clean
after every edit. No item added or deleted anywhere, so no page count moved and
no plan renumbering is implied.

| # | file | change |
|---|---|---|
| 1 | `frontier-15-batch-2.pages.json` | `thm-sylow-second-theorem`: title and strategy now assert the conjugacy clause as well as the containment clause; `thm-lagrange` added to `deps` |
| 2 | `frontier-15-batch-2.pages.json` | `chain-conditions-and-semisimple-modules` `requires` += `the-field-of-fractions-and-localisation` |
| 3 | `frontier-15-batch-3.pages.json` | `algebraic-closure-embeddings-and-separability` `requires` restored to `plan-spec.json`'s three edges |
| 4 | `frontier-15-batch-3.pages.json` | `lem-one-step-root-extension-over-a-perfect-field-is-algebraically-closed`: `thm-transitivity-of-algebraicity` added to `deps`; strategy names the step as cited |

**Not repaired, by design:** B2-2 is routed to Beta-2, because the fix is
source-backed construction and Beta holds the sources. B2-5 is an adjudication
rather than an edit, recorded above and binding on the step-5 author. B2-6 and
B2-7 are recorded and non-blocking.

## Verdicts

| pair | verdict |
|---|---|
| `quadratic-reciprocity-and-the-jacobi-symbol` | **sufficient** |
| `sylow-theorems-and-nilpotent-groups` | **insufficient** — B2-2 |
| `chain-conditions-and-semisimple-modules` | **sufficient** (after repair 2) |
| `algebraic-closure-embeddings-and-separability` | **sufficient** (after repairs 3, 4) |

Machine-readable: `research/frontier-15-alpha-a-step3-verdicts.json`.

## Honest remaining gaps

- **B2-2 is unresolved by design** and holds the Sylow pair. The `3-recheck` gate
  should not clear until Beta-2 has rebuilt or re-homed both items and made the
  four `coverage.json` dispositions consistent.
- **B2-5 is an adjudication, not a verified authoring outcome.** I decided that
  DC is stated in Facts with no citation; whether the step-5 author honours that
  is a step-6 check, and `fwdcheck` is what would catch the alternative.
- **I did not open every source at every locator** — I opened four PDFs covering
  the Hackman, both Conrad and Milne ranges, chosen by where a defect would be
  load-bearing. Clark's Field Theory (61 harvested headings), Shoup, Stein,
  Gorodnik, Idelhaj, Boston, Crawley-Boevey, MIT 18.706, Nair, Grifo and the
  Cambridge example sheet were checked structurally and by disposition text, not
  by opening the PDF. Step 6b.0 should close that.
- **`the-field-of-fractions-and-localisation` on page 108 is a new edge**, so
  `splice-plan.mjs` at step 4 will see a manifest `requires` the plan lacks and
  refuse. That refusal is expected and correct, and the lead Alpha should
  adjudicate it by adding the edge to `plan-spec.json` — it is backward
  (53.2 < 108) and not otherwise reachable. Batch 3 needs no such adjudication,
  since its manifest now matches the plan exactly.
