# frontier-15 — group Alpha `a`, step 6b adjudication

Run: `frontier-15` · role: alpha · label: `6b-a` · covers batches **1, 2, 3**
(`quadratic-reciprocity-and-the-jacobi-symbol` +examples;
`sylow-theorems-and-nilpotent-groups` +examples and
`chain-conditions-and-semisimple-modules` +examples;
`algebraic-closure-embeddings-and-separability` +examples).
Scope: **207 mathematical-content items**, 172 proof-bearing.

**Headline: three fatal defects found and repaired, all in batch 2, none of them
raised by the independent reader.** One is a landmark theorem whose proof did not
establish its Statement; two are undeclared choice principles. A fourth finding
is a systemic non-disposition class spanning 15 items. All gates are green on all
three batches after repair.

---

## 0. Blocker — the refuter lane is unavailable (Codex quota exhausted)

The brief requires read-only proof-refuter subagents (GPT 5.6 Sol) before my
adjudication, and an additional refuter on every high/critical risk item. **The
lane is quota-locked.** I probed it directly rather than assuming group `b`'s
earlier failure still held:

```
dispatch refuter/a-probe: FAILED in 3s exit 1
ERROR: You've hit your usage limit. … try again at Aug 20th, 2026 1:32 PM.
```

Evidence: `research/frontier-15-dispatch/refuter-a-probe.result.json` and `.log`.
Group `c`'s eight refuters consumed the remaining quota; group `b` hit the same
wall four dispatches in. Reset is **2026-08-20 13:32**, three days out, so this is
not wait-and-retry.

The model lineup is binding and I **did not substitute another model**. The
`audit-refuter` DeepSeek lane exists and is wired (`dispatch.mjs --role
audit-refuter`, key present at `prestige-intelligence/.env`), but it is the
published-audit role, not the build refuter, and rerouting to it would be exactly
the silent substitution the lineup forbids. I performed the adversarial reading
myself instead. **What is lost is the independence of the evidence, not the
reading** — and unlike group `b`, I treat that loss as limiting what I may
*attest*, not only as a note: see §5 on the 92 risk reviews I did not write.

**For the lead Alpha and the owner:** if independent refutation of batches 1–3 is
required before publish, it must be re-run after 2026-08-20.

---

## 1. Reader reports received

| batch | report | scoped | reader's findings | coverage claim |
|---|---|---|---|---|
| 1 | `frontier-15-reader-1.md` | 27/27 | 6 fatal, 2 nonfatal | 27 items opened |
| 2 | `frontier-15-reader-2.md` | 108/108 | 37 fatal, 3 nonfatal, 3 polish | 108 items opened |
| 3 | `frontier-15-reader-3.md` | 72/72 | 15 fatal, 5 nonfatal, 2 polish | 72 items + 108 deps |

All three are complete against their batch manifests — every id in
`research/frontier-15-batch-{1,2,3}.pages.json` is accounted for. All three readers
applied their own repairs, so my job on their fatals is to re-derive the defect and
audit the repair from current disk text rather than take the repair on trust.

**Exclusion check (6a):** no reader was assigned a batch it scaffolded or authored.
Readers 1/2/3 map to batches 1/2/3 and the authoring Betas are `beta-author-batch-N`
per `research/frontier-15-dispatch/`; no overlap.

---

## 2. My own findings — the three fatal defects

These are mine, not the readers'. Each has a `research/defect-ledger.jsonl` row
written in the same act as the disposition.

### F1 — `thm-sylow-first-theorem`: the proof did not establish the Statement
`CONFIRMED FATAL` · `invalid-inference` · ledger `f15-a-6b-001` · **repaired**

Two of four numbered steps announced a method instead of performing an inference.
Step 1.1 was *"We use strong induction on $|G|$ and Wielandt's left action on the
$p^a$-element subsets of $G$"*; step 3.1 was, in full, *"We apply induction to that
stabilizer."*

The strategy is sound — that is why this survived a reader who found 37 other
fatals — but both load-bearing inferences were absent:

- nothing showed why the stabilizer $H$ of a $p$-prime-index orbit is **proper
  unless $G$ is a $p$-group** (it needs $H=G \Rightarrow A=G \Rightarrow m=1$);
- nothing showed the **induction hypothesis applies to $H$** (it needs
  $|H| = p^a m'$ with $p \nmid m'$, from Lagrange together with $p^a \mid |H|$).

I rewrote the proof: the Wielandt action on $p^a$-subsets, $p \nmid |\Omega|$ by
[L2], an orbit of index prime to $p$ via the orbit partition, $p^a \mid |H|$ from
$|G| = |H||\mathcal O|$, then the case split into 3.1 ($H=G$) and 3.2 ($H \ne G$),
closing at 4.1. Added `thm-orbits-partition-the-set` to `deps` as [L7] — the
partition was used and not declared.

**Route verified against sources by extracting PDF text, not by HTTP status.**
Idelhaj §3 (the batch's stated locator, pp. 4–6) carries exactly this action, and
its Lemma 3.6 *is* our `lem-wielandt-sylow-binomial-valuation`. Conrad, *The Sylow
Theorems* §2 proves the same theorem by the different normalizer-growth route.
Idelhaj closes without induction, using that $H$ acts on $\omega$ with right cosets
as orbits so $|H| \mid |\omega|$; I kept the induction because
`thm-strong-induction` is a declared dependency of this item and that extra orbit
observation is not.

Incidentally corrected: the item's reader-visible reference pointed at Conrad's
*Consequences of the Sylow Theorems*, a note about consequences that does not prove
Sylow I. It now cites Idelhaj §3 and Conrad §2.

**Why the gates were green.** The contract's input map recorded all six facts as
used at step 1.1 — the announcement step — so its exactly-once coverage check
passed over a step that used none of them.

### F2 — `thm-composition-series-iff-noetherian-and-artinian`: undeclared dependent choice
`CONFIRMED FATAL` · `missing-choice-scope` · ledger `f15-a-6b-002` · **narrowed**

Statement and title asserted the biconditional unconditionally while proof step 2.1
read *"dependent choice gives a descending chain"*, and both cited characterization
theorems flag dependent choice in their own restatements.

This is the same defect class reader 2 itself declared fatal **twice in this batch**
(R2-37, R2-38, on the Axiom of Choice) and reader 3 declared fatal **fifteen times**
in batch 3. It was missed here because the principle was dependent choice rather
than AC, and it sat in the chain-conditions cluster rather than the semisimple one.

I scoped the hypothesis to the **converse only**, not to the whole biconditional,
because the forward direction is genuinely choice-free — and confirmed from disk
that both consumers (`cor-semisimple-rings-are-noetherian-and-artinian`,
`fs-every-module-has-a-composition-series`) use only the forward direction, so
**neither inherits the hypothesis**. Both consumers' fact restatements were narrowed
to the clause they use. Also rewrote step 1.1 into the actual induction along the
series.

### F3 — `thm-finitely-generated-nonzero-modules-have-maximal-proper-submodules`: undeclared AC
`CONFIRMED FATAL` · `missing-choice-scope` · ledger `f15-a-6b-003` · **repaired**

Unconditional Statement and title over a proof whose step 3.1 was *"Zorn supplies a
maximal proper submodule"* — and whose own [L3] restates `thm-zorn` beginning
*"Assume the Axiom of Choice."* The hypothesis was dropped between the cited
Statement and the citing one.

Added the hypothesis to Statement and title, and expanded the three announcement
steps into the actual Zorn verification, including the case a
"every-chain-is-bounded" argument most often drops: **the empty chain**, bounded by
$0$ only because $M \ne 0$.

**Propagation:** the consumer `thm-equivalent-characterizations-of-semisimple-modules`
already declared AC in its own Statement, but its [L2] restatement of this theorem
did not — so adding the hypothesis at the source would have turned that Fact into a
citation that drops it. Fixed in the same pass.

### The detector that found F2 and F3

Once the class appeared twice I wrote the detector rather than hand-reading:
*an item whose Proof/Verification/Refutation body names a choice principle
(axiom of choice, dependent choice, countable choice, Zorn, well-ordering,
transfinite recursion) while neither its title nor its Statement declares one.*
Three hits across 207 items: F2, F3, and one **false positive** —
`thm-finite-length-semisimple-module-characterizations`, whose Statement advertises
choice-freeness and whose proof says so. I verified that item is genuinely
choice-free: step 1.1 makes at most $n$ selections bounded by Jordan–Hölder, and
step 2.1 processes finitely many summands in a fixed order.

---

## 3. My own findings — nonfatal

### N1 — 15 items whose closing step named boundary cases without discharging them
`CONFIRMED NONFATAL` · `false-boundary-disposition` · ledger `f15-a-6b-004` · **repaired**

A closing step of the form *"We include the trivial group and the one-prime case.
This proves the stated claim."* names cases and checks none — the **prose form of the
templated `not_applicable` row** the owner's rules single out, which hid a fatal
defect three times out of three on `frontier-13` and `frontier-14`.

I evaluated **every named case from disk before repairing**. All were true, so
nothing fatal was hiding behind one this time. Affected: `thm-sylow-first-theorem`,
`lem-finite-nilpotence-via-normal-sylow-subgroups`,
`thm-maximal-subgroups-of-finite-nilpotent-groups`,
`thm-normalizer-condition-for-finite-nilpotent-groups`,
`thm-frattini-subgroup-is-nilpotent`, `thm-second-isomorphism-theorem-modules`,
`thm-third-isomorphism-theorem-modules`,
`thm-submodules-and-quotients-of-semisimple-modules`,
`thm-socle-is-the-largest-semisimple-submodule`,
`cor-finite-direct-sums-preserve-chain-conditions`,
`cor-noetherian-modules-are-hopfian`, `cor-rational-algebraic-integers-are-integers`,
`thm-finitely-generated-modules-over-noetherian-rings-are-noetherian`,
`thm-schurs-lemma-for-modules`, `fs-every-module-has-a-composition-series`.

Two of these were **leaked authoring instructions** rather than proof text:
*"Also point to the explicit descending chain rather than a scope claim"* and
*"Keep the two prime orderings and the order-twelve boundary case explicit."*

**The mechanism matters more than the instances.** The contract's boundary
`evidence` string was built by **quoting the proof's final step** — so where that
step was an announcement, the boundary row quoted the announcement and the
non-disposition appeared twice, confirming itself. `boundary-audit`'s template
detector cannot form a cluster, because each announcement is worded differently.
I re-anchored **32 boundary rows** with per-case evidence; re-anchoring them all to
my rewritten closing step would have reproduced the defect in a new file, so each
row states its own case.

Detector, for reuse: *a numbered proof step containing no LaTeX math whose text
opens with a method-announcement verb.* 50 candidates across the three batches,
triaged to 21 real non-dispositions, of which exactly one (F1) was fatal.

### N2 — `thm-groups-of-order-thirty-have-a-normal-sylow-subgroup`: citation shotgun
`CONFIRMED NONFATAL` · ledger `f15-a-6b-005` · **recorded, not repaired**

Step 1.1 cites all ten facts [L1]–[L10] in one bracket while using two. Step 4.1
makes the inference *"normal in the kernel and hence normal in $G$"* — invalid in
general, licensed here only by [L9]
(`cor-normal-sylow-subgroup-of-a-normal-subgroup-is-normal`) — and does not cite it.
The fact is declared and true of this situation, so the mathematics holds and the
gap is inside the 30-second rule. But the shotgun bracket made the contract record
[L9] as used at a step that does not use it, so the coverage check passed with no
step accounting for the actual inference.

Recorded rather than repaired: redistributing the citations moves the item hash for
a presentational defect. I verified the mathematics in full (fixed-point-free
involution on 30 elements = 15 transpositions, sign $-1$, kernel of order 15,
cyclic since $3 \nmid 4$, subgroups of a cyclic group characteristic).

### N3 — `thm-jordan-holder-theorem-for-modules`: a false clause in the reader's rewrite
`CONFIRMED NONFATAL` · ledger `f15-a-6b-006` · **recorded, not repaired**

Reader 2 replaced this proof wholesale under R2-7, so it had had no adversarial
reading in its current form. I re-derived the whole induction and **the rewrite is
correct**. But its closing sentence, *"This also covers $n=1$, when $C=0$"*, is wrong
about its own branch: at $n=1$ the module is simple, so its only maximal proper
submodule is $0$, $A=B$ necessarily, and the $A \ne B$ branch is **vacuous rather
than covered**. Taken at face value it would put step 4.1's length count at
$n-2 = -1$. The case is genuinely handled by the $A=B$ branch.

### N4 — `finite-smoke` registers zero obligations across all 172 proof-bearing items
`CONFIRMED NONFATAL` · `gate-vacuous` · ledger `f15-a-6b-007` · **open**

`finite-smoke.mjs` reports *"0 error(s), 0 check(s) over 0/26, 0/90, 0/59 item(s)
carrying obligations"* — it runs, exits zero, and checks nothing, across three
batches unusually rich in bounded finite claims: Sylow counts for groups of order
at most fifteen, $S_4$, $A_5$, $\mathrm{Aff}(\mathbb Z/5)$; the length of
$\mathbb Z/p^k$; the reciprocity table for small odd primes; square-root counts
modulo $n$; $|\mathrm{Aut}((\mathbb Z/p)^2)|$. These are exactly the claims a
bounded countermodel search can falsify. Green because nobody registered an
obligation, which the output cannot distinguish from having searched and found
nothing. Registering them is step-5 authoring work; left **open** for the lead Alpha.

### N5 — 7 manifest rows disagreeing with the authored items
`CONFIRMED NONFATAL` · ledger `f15-a-6b-008` · **repaired**

Four batch-1 items declare a dependency the manifest lacks, left behind when reader
1 added the edges. In batch 2, `thm-lagrange` + `thm-number-of-bijections-of-a-finite-set`
sit on the manifest row for `thm-groups-of-order-thirty…` while the item that
actually gained those inputs under R2-15 is `thm-groups-of-order-one-hundred-five…`
— a transcription slip onto the neighbouring theorem. **Batch 3 had zero drift**
(reader 3's R3-22 sync was complete and correct). All synced to the item
frontmatter, plus my own two title changes from F2/F3.

*A note against my own first pass:* my initial comparison reported 30 further title
mismatches. Every one was an artifact of comparing the **raw YAML frontmatter line**
against the **JSON-parsed manifest value** — `$p\\nmid m$` versus `$p\nmid m$`. The
defect was in my checker, not the data. Anyone writing this as a gate must parse
both sides.

---

## 4. Adjudication of the reader findings

### Batch 1 — reader 1 (6 fatal, 2 nonfatal)

- **R1-1** (page summary claimed the proof "uses only integer division, rational
  inequalities, and finite sets"): **CONFIRMED FATAL, repair accepted.** The claim
  was false — Gauss's lemma and the half-system permutation are essential inputs.
  The repaired sentence scopes the elementary claim to the rectangle argument after
  Gauss's lemma. I verified the surviving negative claim is true of the text: neither
  lattice-count lemma uses floor notation or any real-analysis result.
- **R1-2, R1-3, R1-4, R1-5** (four items decomposed integers into prime powers citing
  `thm-canonical-prime-factorisation`, which begins from a *supplied* factor list):
  **CONFIRMED FATAL, repairs accepted.** The reader is right that the cited Statement
  constructs canonical exponents from a hypothesis $n = \prod p_i$ and does not prove
  such a list exists. `thm-fundamental-theorem-of-arithmetic` now supplies existence
  in each. I checked that step 1.1 of `thm-jacobi-symbol-multiplicativity` needs no
  such input, because [L1] is the *definition* of the symbol and carries the
  factorisation with it.
- **R1-6** (`cor-infinitely-many-primes-congruent-to-one-modulo-three`):
  **CONFIRMED FATAL, repair accepted.** Permutation invariance can reorder a product
  but cannot expose $P = P'q$. The repair uses clause 3 of `thm-generalised-associativity`
  to move $q$ to the final position and then the recursion clause of
  `def-monoid-finite-product`. I re-derived the arithmetic: $(6P)^2+3 = 3N$, $N$ odd
  and $\equiv 1 \bmod 3$ so $q \notin \{2,3\}$, and at $r=0$ the empty product gives
  $N=13$ with $13 \equiv 1 \bmod 3$, contradicting $S = \varnothing$.
- **R1-7, R1-8** (contract citation clauses; two `n=1` boundary rows wrongly
  `not_applicable`): **CONFIRMED NONFATAL, repairs accepted.** R1-8 is the same class
  as my N1 — a `not_applicable` justified by "the prime hypotheses exclude 1" while
  $p=3$ makes the lower-half range a singleton.

### Batch 2 — reader 2 (37 fatal, 3 nonfatal, 3 polish)

I audited every fatal from disk. **All 37 confirmed; all repairs accepted**, with the
three qualifications below. The findings divide into two groups:

*Twenty-two are truncated or inflated citations* — a fact ending at "so that", "then",
"with", "Write", "and:", or "Moreover" immediately before the operative clause the
proof uses (R2-15, R2-17 – R2-23, R2-25 – R2-30, R2-36, and others). I spot-checked
eleven against the cited items on disk and confirmed each omitted clause is genuinely
load-bearing. `citation-fidelity` now reports every quote present and no widening
candidate.

*Fifteen are substantive proof defects.* The ones I re-derived in full:

- **R2-7 / `thm-jordan-holder-theorem-for-modules`** — the old induction call was
  unlicensed; the rewrite is correct (see N3 for its one surviving false clause).
- **R2-8 / `cor-length-is-additive-in-short-exact-sequences`** — the reverse
  implication had been replaced by "Cover … both directions". The new step 1.2 is
  correct: exactness of $0 \to N_i/N_{i-1} \to M_i/M_{i-1} \to Q_i/Q_{i-1} \to 0$
  holds because $M_i \cap (M_{i-1}+N) = M_{i-1} + N_i$, and simplicity forces exactly
  one end to be the factor.
- **R2-11 / `thm-matrix-rings-over-division-rings-are-semisimple`** — the cited matrix
  definition opens "Let $R$ be a commutative ring". The repair moves the construction
  into the Statement. I checked the noncommutative details, which is where such a
  repair fails: the simplicity witness has the scalar on the correct side,
  $a_{ik} = w_i v_k^{-1}$ giving $(Av)_i = w_i v_k^{-1} v_k = w_i$.
- **R2-35 / `thm-wedderburn-artin-theorem`** — the old transpose mnemonic was invalid
  with both products read in $E$. I verified the repaired identity from scratch:
  $(A \star B)^{\mathsf T} = (BA)^{\mathsf T}$ has entries $\sum_k b_{jk}a_{ki}$, and
  $A^{\mathsf T} \odot B^{\mathsf T}$ has entries $\sum_k a_{ki} \bullet b_{jk} =
  \sum_k b_{jk}a_{ki}$. They agree, so $R$ is recovered rather than $R^{\mathrm{op}}$.
- **R2-14 / R2-16 (the zero-ring narrowing)** — I confirmed the convention this rests
  on: `def-polynomial-degree-leading-coefficient-and-monic` says the zero polynomial
  has no leading coefficient, so over the zero ring nothing is monic and no element is
  integral, while $A[b]=0$ is finitely generated and the zero module over it is
  vacuously faithful. The third condition holds where the first fails, so $A \ne 0$ is
  a **necessary** narrowing, not a cautious one.
- **R2-37 / R2-38 (Choice restored to two titles and Statements)** — correct, and the
  proximate reason F2 is so striking: the reader applied exactly this reasoning twice
  and did not carry it to the dependent-choice cases two pages away.

*Qualifications:* R2-7's rewrite carries N3; `thm-submodules-and-quotients-of-semisimple-modules`
and `thm-socle-is-the-largest-semisimple-submodule` had their Choice hypotheses restored
correctly but kept announcement closing steps, repaired by me under N1; and R2-40 is
labelled "polish" by the reader but its step 3.1 was a genuine non-disposition, also
repaired under N1.

### Batch 3 — reader 3 (15 fatal, 5 nonfatal, 2 polish)

**All 15 fatal findings are one class, and it is the right class:** an unconditional
title, `Given`, Statement or fact restatement over a proof that uses a
Choice-dependent result — `thm-one-step-simultaneous-root-extension`,
`thm-existence-of-algebraic-closures`, `thm-algebraic-embedding-extension` and
`cor-algebraic-closures-are-isomorphic-over-the-base` all explicitly assume Choice.
Restoring the hypothesis into every consumer's title and fact is correct, and it is
the same standard I applied in F2/F3.

I verified reader 3's **riskiest** repair in full, because replacing a proof is where
a repair does damage. **R3-8 / `thm-separable-degree-is-independent-of-the-algebraic-closure`**:
the reader replaced a Choice-dependent proof with a choice-free finite one. I
re-derived it — a finite $F$-basis, $f$ the product of the minimal polynomials, $E_j$
the splitting field of $f$ inside $\Omega_j$, splitting-field uniqueness giving
$\theta: E_1 \to E_2$, and every $F$-embedding of $K$ landing in $E_j$ because it
sends each $\alpha_i$ to a root of its minimal polynomial. It is correct, and it is
genuinely choice-free: two single instantiations, no transfinite selection.

**I did not independently re-derive the other batch-3 items** — see §5.

---

## 5. Risk reviews — 33 of 125, and why not 125

`risk-report.mjs` routes **125** high/critical items (20 + 64 + 41). I wrote **33**
`risk_review` dispositions (6 + 27 + 0), each naming what I re-derived and what the
disposition is. They are in the batch proof-contract files.

**I did not write the other 92, and that is deliberate.** A `risk_review` is an
attestation. With the refuter lane down, the only basis I could have for one is my
own reading, and I did not read those 92 items to that standard — batch 3 in
particular I audited through reader 3's report and one deep verification, not
item by item. Writing 92 dispositions to clear `--require-reviewed` would turn an
honest red into a false green, which is the failure mode the brief names explicitly.

**The gate therefore stays red on 92 items.** That is the true state and it is what
the lead Alpha should see. Closing it needs either the refuter lane after
2026-08-20, or a second Alpha pass over batches 1 and 3.

---

## 6. Harvest faithfulness

`coverage-checklist` passes structurally on all three batches. I checked
*faithfulness* on the parts I could verify by extracting source text, not by HTTP
status:

- **Primary backing.** Every pair has ≥2 independent treatments with at least one
  textbook/monograph/full note set: batch 1 has Hackman, Stein and Shoup as textbooks;
  batch 2's Sylow page has Judson plus Conrad, Craven, Idelhaj and a monograph; batch 2's
  chain-conditions page rests on full lecture-note sets (Crawley-Boevey, MIT 18.706,
  Nair, Grifo) rather than a textbook, which the rule permits; batch 3 has Milne and
  Clark. **No pair is backed primarily by encyclopedia entries.**
- **Locator verification, by text extraction.** I downloaded and extracted
  `sylowpf.pdf` and `Idelhaj.pdf` with pypdf. Idelhaj §3 (stated locator pp. 4–6,
  Definition 3.1 – Theorem 3.10) **does** contain Lemma 3.6 and the orbit-on-subsets
  proof of Sylow I — so the library's Wielandt route is genuinely carried by a
  harvested source at its stated locator. Conrad §2 carries a different, also valid,
  route. The harvest is faithful on this point.
- **One reference-precision defect found and fixed:** `thm-sylow-first-theorem` cited
  Conrad's *Consequences of the Sylow Theorems*, which does not prove Sylow I.
- **Liveness:** `url-sweep --recover --fail-on-dead` over all three batches'
  coverage and manifests: **22/22 live, 0 failed, 0 suspect** →
  `research/frontier-15-alpha-a-url-sweep.json`.

**Not verified:** the batch-2 chain-conditions and batch-3 locators were not opened
by text extraction. Reader 3 reports opening Milne chapters 2–6 and Thiel §1.4
directly; I did not repeat that.

---

## 7. Items changed

**Repaired by me (16 items):**

| item | change |
|---|---|
| `thm-sylow-first-theorem` | proof rewritten (F1); `deps` +`thm-orbits-partition-the-set`; references corrected |
| `thm-composition-series-iff-noetherian-and-artinian` | Statement + title scoped to dependent choice (F2); step 1.1 expanded |
| `thm-finitely-generated-nonzero-modules-have-maximal-proper-submodules` | Statement + title scoped to AC (F3); all four steps rewritten |
| `thm-equivalent-characterizations-of-semisimple-modules` | [L2] restatement carries AC (F3 propagation) |
| `cor-semisimple-rings-are-noetherian-and-artinian` | [L3] narrowed to the forward clause it uses |
| `fs-every-module-has-a-composition-series` | [L1] narrowed; step 2.1 leaked instruction → explicit chain |
| 10 further items | announcement closing step → actual discharge (N1) |

**No item was added or deleted.** No `verification.judge` block existed on any
changed item, so there was no stale verdict to delete. `plan-spec.json` untouched;
no published item outside the level was edited, so
`frontier-15-published-dependency-repairs.md` remains unnecessary.

**Contract and manifest artifacts:** batch-2 contract updated for the three fatal
repairs (citations, derivations, boundaries), 32 boundary rows re-anchored, 14
derivation maps and 43 citation use-lists resynced from disk, 9 manifest fields
synced. Scripts are checked in under `research/frontier-15-refuters/alpha-a-*.mjs`
so the edits are reproducible rather than hand-applied.

**Twice-touched items:** `thm-composition-series-iff-noetherian-and-artinian`,
`thm-finitely-generated-nonzero-modules-have-maximal-proper-submodules`,
`fs-every-module-has-a-composition-series` and
`thm-equivalent-characterizations-of-semisimple-modules` were each touched by both a
reader repair and one of mine. None has been refuted twice — my edits are additions to
scope, not corrections of the reader's — so the `WORKFLOW.md` escalation does not fire.

---

## 8. Gate results after repair

| gate | batch 1 | batch 2 | batch 3 |
|---|---|---|---|
| `precheck` (changed items) | pass | pass | n/a |
| `proof-contract --strict` | 0/0, 26/26 | 0/0, 90/90 | 0/0, 59/59 |
| `citation-fidelity` | no missing quote, no widening | same | same |
| `boundary-audit` | no template ≥3, no contradiction | same | same |
| `content-policy` | 207 scoped items, 0 errors, 0 warnings (all three) | | |
| `risk-report` | 0 errors, routed | 0 errors, routed | 0 errors, routed |
| `url-sweep --recover --fail-on-dead` | 22/22 live (all three) | | |
| `finite-smoke` | **0 checks over 0 obligations — see N4** | same | same |

`reflow` reported every changed file already canonical. Every gate above was run by
me after the last edit, not carried over from a reader's report.

---

## 9. Fatal-error ledger (publish-blocking)

| id | defect type | location | disposition |
|---|---|---|---|
| `thm-sylow-first-theorem` | invalid inference | proof steps 1.1, 3.1 | **fixed** — proof rewritten, route source-verified |
| `thm-composition-series-iff-noetherian-and-artinian` | missing choice scope | title + Statement | **narrowed** — DC scoped to the converse; no consumer inherits it |
| `thm-finitely-generated-nonzero-modules-have-maximal-proper-submodules` | missing choice scope | title + Statement | **fixed** — AC declared; propagated to one consumer's fact |

Plus the 58 fatal findings the three readers raised and repaired, all audited from
disk and accepted (§4). Mechanical and 30-second edits are excluded per the brief.

---

## 10. Honest remaining gaps

1. **No independent refutation of batches 1–3.** The Sol lane is quota-locked until
   2026-08-20. I did the reading; nobody checked it. This is the single largest gap
   and it applies to all 207 items, including my own three repairs — **nobody has
   adversarially read the Sylow I proof I wrote.**
2. **92 of 125 high/critical items carry no `risk_review`** (§5). The gate is red on
   them and should stay red.
3. **Batch 3 was audited through reader 3's report plus one deep verification**, not
   item by item. Its 15 fatal findings are internally consistent and the one repair I
   re-derived in full is correct, but I cannot attest the other 71 items from my own
   reading.
4. **`finite-smoke` is vacuous across the whole group** (N4, ledger row `open`).
5. **N2 and N3 are recorded, not repaired** — both are inside the 30-second rule and
   both would move an item hash for a presentational gain. If either is repaired later
   it belongs at step 6, not step 8.
6. **Batch-2 chain-conditions and batch-3 locators were not opened by text
   extraction** (§6).

---

## 11. Verdict

Batches 1–3 are **materially better than they were**: three fatal defects that all
gates and one independent reader passed over are repaired, a systemic
non-disposition class is closed across 15 items and 32 contract rows, and the
manifests now describe the authored items.

They are **not clear for step 7 on my attestation alone.** Items 1 and 2 of §10 are
the reason: an adversarial lane that never ran, and 92 risk dispositions I declined
to fake. Both are recoverable — the first after 2026-08-20, the second by a second
Alpha pass — and neither is a mathematical defect. Nothing here flips a `status`.
