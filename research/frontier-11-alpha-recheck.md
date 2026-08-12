# frontier-11 — Alpha step-3 re-check, and the D1 sequencing plan

Alpha, Claude Opus 5 (`claude-opus-5[1m]`), `xhigh`, 2026-08-12. Re-check of every
label issued in `research/frontier-11-alpha-step3-scaffold-review.md` after all
five Betas applied their findings, plus the D1 relocation plan requested by the
orchestrator.

**Web access worked this time.** I opened Riehl, Leinster, Wilf,
Flajolet–Sedgewick, Apostol, Ambrus Pál and Keith Conrad at their locators and
checked `contents` against what those ranges actually contain — criterion 2 of
the step-3 review, which I could not run before. Method: `WebFetch` cannot parse
PDFs, so I fetched each PDF and extracted its text locally (a throwaway venv at
`/tmp/f11pdf`, sources in `/tmp/f11src`). Nothing outside the repo was modified
and no repo file was edited in this dispatch.

**I edited no file under `items/`, `library/` or `plan-spec.json`.**

---

## 1. Per-label resolution

| label | pair | verdict | evidence |
|---|---|---|---|
| **T1** | field-extensions | **resolved** | `thm-simple-transcendental-extension-is-rational-expressions-in-the-generator`, deps = generated-subfields + transcendence + evaluation kernel. Strategy proves the rational-expression set is a subfield and closes by minimality. No fraction field anywhere. |
| **T2** | field-extensions | **resolved** | `thm-simple-transcendental-extensions-are-uniquely-f-isomorphic`. Cross-multiplication + injectivity of evaluation for well-definedness, generator swap for inverse, T1 for uniqueness. Exactly the route I specified. |
| **T3** | field-extensions | **resolved** | `cor-composite-of-two-subfields`, deps = the generated-subfield definition only. Cites nothing on `splitting-fields`. |
| **T4** | field-extensions | **resolved** | `cor-stem-fields-are-uniquely-f-isomorphic`. Divisibility identifies both minimal polynomials with $p$; the universal property's uniqueness clause makes both composites identities. |
| **coverage retags** (b1) | field-extensions | **resolved** | Judson 21.9 → `included` at T2; Milne Ex. 1.24 → `included` at T1; Milne's composite paragraph → `included` at T3; and the unique-stem-field row **retargeted** off `thm-universal-property-of-adjoining-an-irreducible-root` onto T4. That last one is the retag that mattered and it was made. |
| **F1** | fundamental-theorems | **resolved** | `rem-ftc-roadmap` is item 1 on the page, deps on published `thm-ftc-first-part` and `thm-ftc-second-part`, and its strategy marks every stage published / proved-here / deferred. The title is now an accurate index. |
| **F2** | fundamental-theorems | **resolved** | `thm-newton-leibniz-with-a-countable-exceptional-set`, stated with continuity of $F$ and $E\subseteq(a,b)$ countable. Proof is the direct $\varepsilon2^{-n}$ absorption with a least-upper-bound first-crossing argument, then Darboux squeeze. "No gauge integral or choice principle enters" is written into the strategy. |
| **F3** | fundamental-theorems | **resolved** | The `deferred` row for Cousin's lemma exists — in the `canonical` array, not `sources`, which is why a naive walk of the harvest misses it. Reason names the absent consumer and the future Henstock–Kurzweil home. The three D4 deferrals sit in the same array, intact. |
| **F4** | fundamental-theorems | **declined — accepted** | F4 was marked "recommended, not required". Beta declined it: no harvested heading and no downstream item needs moving limits, and adding it would be unsourced enrichment against generated-claim minimization. That is the correct reading of the rule and I do not overturn it. |
| **A1** | arc-length | **resolved** | `cor-chord-length-is-at-most-arc-length`, and it was made an explicit dependency of the arc-length-function strictness clause and the general parametrization theorem, so it is consumed rather than decorative. |
| **A2** | arc-length | **resolved** | `cor-length-of-the-graph-of-a-c1-function`, stated with the exact hypotheses I gave. |
| **A3** | arc-length | **resolved** | Trig route taken: `ex-unit-circle-arc-has-length-theta`, and `sine-cosine-and-the-definition-of-pi` added to order 181's `requires` (179 < 181, no cycle). |
| **R-A** | arc-length | **resolved** | Apostol Ch. 6 §§6.9–6.12 added, 15 headings. Locator verified exactly — see §3. |
| **C1** | formal-power-series | **resolved** | Title is now "$K[[x]]$ embeds in $K((x))$ as the nonnegative-order subring; every nonzero Laurent series is uniquely $x^{v(h)}u$…". The only occurrence of "field of fractions" left anywhere in batch 3 is the instruction *not* to invoke one. |
| **C2** | formal-power-series | **resolved** | Wilf's *generatingfunctionology* Ch. 1–2 added, 29 headings. Verified — see §3. |
| **E1** | extremal-graph-theory | **resolved** | Both boundary items added as `false-statement`. `fs-every-triangle-free-graph-is-bipartite` routes through the published odd-cycle characterisation rather than the neighbouring AI-generated $C_5$ example — a better choice than the one I suggested. |
| **E2** | extremal-graph-theory | **resolved** | Five `deferred` rows (Zhao §§1.8–1.10, Thms 1.9.1, 1.10.1), each naming order 221 or order 225 as what would license it. |
| **D-1** | determinant | **resolved** | `lem-alternating-top-forms-are-determined-by-one-ordered-basis` and `thm-operator-determinant-scales-every-alternating-top-form` added; Axler 9.40 and 9.41 both retagged `included` onto the second. The misdisposed 9.41 row is fixed. |
| **D-2** | determinant | **partially resolved — pushback accepted** | The false invertibility criterion is there. Beta declined `cex-the-determinant-is-not-additive` with disk evidence: `items/fs-determinant-is-additive-on-matrices.md` is **published**, states exactly $\det(A+B)=\det A+\det B$ is false, and refutes it with $A=B=I_2$. Minting a second id is forbidden by SCHEMA §2. I verified the file. The substitute `ex-columnwise-additivity-versus-whole-matrix-nonadditivity` marks the same boundary against the published counterexample and is the better item. My finding was wrong to ask for a new id; I had not checked the corpus for the statement. |
| **R-D** | determinant | **resolved** | Ambrus Pál §7 added, 8 headings, genuinely over a commutative ring. Verified — see §3. Beta also correctly refuted my Conrad attribution; see §3. |
| **Y1** | yoneda | **resolved** | Riehl 17 → 67 rows, Leinster 11 → 48, both re-enumerated over corrected locators with "selected" removed. Verified heading by heading — see §3. It surfaced one genuine gap I could not see without source access. |

### The one thing Y1 found that I predicted it would not

I wrote that I expected the re-enumeration to expose no content gap, and marked
that a prediction. It exposed one: **Leinster Definition 4.1.25, generalized
elements and their shapes**, now scaffolded as `def-generalized-element-and-shape`
(deps `def-category` only). I confirmed Definition 4.1.25 exists in Leinster at
printed p. 100. The prediction was wrong and the harvest apparatus caught it —
which is the argument for the apparatus.

### Two Beta pushbacks, both correct

Both were raised with disk or source evidence, as the fix brief invited. Both
stand, and both correct me:

1. **D-2**, above: the counterexample I asked for is already published.
2. **R-D**: I wrote that Keith Conrad's *Universal identities* "proves
   $\operatorname{adj}(AB)=\operatorname{adj}(B)\operatorname{adj}(A)$ over an
   arbitrary commutative ring by the polynomial-identity argument". I opened it.
   Its sections are Introduction / Reduction to the Complex Case / The Theorems /
   Proofs of Theorems / Consequence of the Cayley–Hamilton Theorem; Lemma 5.1 is
   the cofactor identity $AC=CA=(\det A)I$ and Theorem 5.2 the unit criterion.
   **The product-reversal identity is not in it.** My attribution was wrong.
   Pál §7 supplies what R-D actually needed.

---

## 2. Final verdicts

| # | pair | breadth & depth | clear to splice? |
|---|---|---|---|
| 1 | `field-extensions-and-the-complex-numbers` | **sufficient** | **NO** — see §4, blocker B1 |
| 2 | `conjugacy-and-simplicity-in-the-symmetric-groups` | **sufficient** | yes |
| 3 | `the-fundamental-theorems-of-calculus` | **sufficient** | yes |
| 4 | `arc-length-and-rectifiable-curves` | **sufficient** | yes |
| 5 | `formal-power-series` | **sufficient** | yes |
| 6 | `extremal-graph-theory` | **sufficient** | yes |
| 7 | `the-determinant-of-a-linear-operator` | **sufficient** | yes |
| 8 | `the-integral-logarithm-and-its-characterisations` | **sufficient** | yes |
| 9 | `universal-properties-and-the-yoneda-lemma` | **sufficient** | yes |

Every step-3 breadth-and-depth finding is resolved or was declined with a reason
I accept. **All nine pairs are `sufficient` on breadth and depth.**

Pair 1 is nonetheless **not clear to splice**, for a defect of a different kind
that I found while planning D1 and that no breadth criterion would have caught.
It is in §4. I am separating the two verdicts rather than folding them together,
because the scaffold's *mathematical coverage* is fine and its *treatment of four
published items* is not.

Gate state I re-ran myself:

- `coverage-checklist.mjs` on all five batches — **9 pages, 508 harvested
  results, 0 errors, 0 warnings.** Confirms the orchestrator's count.
- `validate-plan.mjs research/plan-spec.json` — **OK**, 202 pages with item lists,
  acyclic, no forward refs; only `redundant-prereq` warnings, all pre-existing.
- `content-policy.mjs --manifest-only` — batches 2/3/4/5 **0 errors**; batch 1
  **8 errors**. See §4.
- 238 items across 18 pages; largest A page 22 (`formal-power-series`). Nothing
  near the 60-item ceiling, so **no split is warranted anywhere in this run** —
  unchanged from my step-3 finding.

---

## 3. Harvest spot-checks — what the sources actually contain

### Batch 5, Riehl — locator **holds**, harvest **not padded**

Riehl's own table of contents (printed p. vii): Chapter 2 p. 53, **§2.1 p. 54,
§2.2 p. 59, §2.3 p. 67, §2.4 p. 72**, Chapter 3 p. 81. The locator claims
§§2.1–2.4, printed pp. 54–80. **Exact.**

I extracted every numbered result in that range and compared it to the 67 rows.
Present in both, in order: Example 2.1.1; Definitions 2.1.3, 2.1.4; Example
2.1.5(i)–(xiv); Example 2.1.6(i)–(vii); Examples 2.2.1, 2.2.2; Proposition 2.2.3;
Theorem 2.2.4; Remark 2.2.7; Corollaries 2.2.8, 2.2.10, 2.2.11; Example 2.2.9;
Proposition 2.3.1; Corollary 2.3.2; Definition 2.3.3; Examples 2.3.4, 2.3.6,
2.3.7, 2.3.8; Proposition 2.3.10; Remark 2.3.12; Example 2.3.13; Definitions
2.4.1, 2.4.2; Examples 2.4.3–2.4.6; Lemma 2.4.7; Propositions 2.4.8, 2.4.9;
Examples 2.4.10, 2.4.11, 2.4.12(i)–(vi); Definition 2.4.13; Proposition 2.4.14.
Plus the four section headings. Exercises are excluded, as the locator says.

The strongest evidence it is a real enumeration is what is **absent**: there is no
2.1.2, no 2.2.5, no 2.2.6, no 2.3.5, no 2.3.9, no 2.3.11 — those numbers belong to
displayed equations, not named results, and the harvest skips exactly them. A
fabricated list fills gaps; this one has the source's own gaps.

67 rows against 66 genuine headings: Riehl's Example 2.1.5(vi) covers both the
free group and the free abelian group, and the harvest splits it into two rows
because the two halves take different dispositions (`included` / `out-of-scope`).
That is correct practice, not inflation.

### Batch 5, Leinster — locator **holds**, harvest **not padded**

Leinster's TOC: **4 Representables p. 83, §4.1 p. 84, §4.2 p. 93, §4.3 p. 99.**
The locator claims §4.1 pp. 84–92, §4.2 pp. 93–98, §4.3 pp. 99–106. **Exact**, and
the sub-ranges are derivable from the TOC itself.

All 40 named results verified present: 4.1.1–4.1.25 (25), 4.2.1 (1), 4.3.1–4.3.14
(14). Nothing invented, nothing in the range omitted. §4.2 yielding only two rows
is right — between Theorem 4.2.1 and Notation 4.3.1 the source names no other
result. The three §4.3 subsection headings ("A representation is a universal
element", "The Yoneda embedding", "Isomorphism of representables") are real. 48
rows = 46 headings with Example 4.1.5 split three ways, same legitimate reason.

Batch 5's own count differs from mine only in denominator: 124 source rows + 10
canonical rows = the 134 its notes report. (Its prose says "40 out-of-scope" where
its table says 41; trivial, worth a one-character fix at step 5.)

### Batch 3, Flajolet–Sedgewick — locator **holds**, but **under-enumerated**

TOC: **A.5 Formal power series p. 730, A.6 Lagrange inversion p. 732.** Locator
exact. But the range contains two named items the harvest does not record:
**Theorem A.2 (Lagrange Inversion Theorem)** and **Note A.13, "A variant of
Lagrange inversion"**. The harvest carries only the two section headings.

That is the opposite of padding, and C2 has made this leg non-critical (Wilf is
now the second substantial treatment). **Recommendation, not a blocker:** add the
two rows at step 5 — a coverage edit, not a rewrite.

### Batch 3, Wilf — locator **holds**, harvest **faithful**

Verified against the source: Ch. 1 opening, §§1.1–1.6, Theorem 1.6.1; Ch. 2
opening, §2.1, §2.2 with Rules 1–5, §2.3 with Rules 1′–3′, §2.4 with Theorems
2.4.1–2.4.3, §2.5, §2.6 with Theorem 2.6.1. All real, all correctly titled.

The four rows the harvest attributes to unnumbered propositions inside §2.1 are
all genuinely there: *a formal series has a reciprocal iff $a_0\ne0$, and it is
unique*; *for $f(0)=0$ the compositional inverse exists iff the coefficient of $x$
is nonzero*; *$f'=0\Rightarrow f$ constant*; *$f'=f\Rightarrow f=ce^x$*.

### Batch 2, Apostol — locator **holds** at section and page level

I reached a copy carrying the book's own contents pages: **6.9 Curves and paths
133; 6.10 Rectifiable paths and arc length 134; 6.11 Additive and continuity
properties of arc length 135; 6.12 Equivalence of paths. Change of parameter
136.** The locator's "§§6.9–6.12, book pp. 133–137" is **exact**, and the chapter
is *Functions of Bounded Variation and Rectifiable Curves* as claimed.

**Not verified:** the internal numbering — Definition 6.16 and Theorems
6.17–6.20. The copy I reached carries only front matter and later chapters, and
the two full-text copies I tried were 403/401. The numbering is coherent and
consistent with the section boundaries, and the *content* attributed to each
number is standard and correct for those sections, but I did not read them. I am
recording that rather than implying I checked it.

### Batch 4, Ambrus Pál — locator **holds**, harvest **complete and exact**

"§7 Cramer's rule for commutative rings, PDF pp. 9–10, complete section from
Lemma 7.1 through Theorem 7.7." Verified in full: §7 heading, Lemma 7.1, Remark
7.2, **Definition 7.3**, Theorem 7.4, Theorem 7.5, Theorem 7.6, Theorem 7.7 —
exactly the 8 harvested rows, in order, with the contents the harvest ascribes to
them. Definition 7.3 does define the determinant and the deleted-row-and-column
minors **over a commutative ring with unity**, and 7.4/7.5 are the two Laplace
expansions, 7.6 the wrong-cofactor vanishing, 7.7 the Cramer adjoint identity.
This is precisely the commutative-ring treatment R-D asked for.

### No locator in this run fails

Every `locator` I could open matches what the source contains at that range. The
only defects found are the Flajolet–Sedgewick under-enumeration above and the
Apostol numbering I could not reach.

---

## 4. D1 — the relocation, and why it cannot run as approved

The orchestrator asked for the exact ordered sequence and the points where the
tree would be inconsistent. Both are below. But the first thing to report is that
**the sequencing problem the orchestrator worried about is already solved in this
repo, and a different problem — not yet noticed — blocks D1 outright.**

### 4.1 The mechanism already exists

`ARCHITECTURE.md` §3.11a, "The re-home receipt — `--rehomed FILE`" (owner,
2026-08-06), was written for exactly this operation: *"when a new page is built
underneath existing ones … a statement the library already owns may need to move
down to be citable there. Minting a second id for it is forbidden … Moving it is
the only legal option."* Both hard gates read `--rehomed`:
`validate-plan`'s `dup-id` and `content-policy --manifest-only`'s
`batch-item-already-exists` / `batch-plan-id-collision`. Two receipts are already
on disk as precedent: `research/zfc-rehomed.json` and
`research/frontier-10-rehomed.json` (the latter from yesterday).

### 4.2 Batch 1's manifest gate is red right now

`node tools/content-policy.mjs research/frontier-11-batch-1.pages.json --manifest-only`
→ **8 errors**, two per relocated id (`batch-item-already-exists`,
`batch-plan-id-collision`). Batches 2–5 are clean.

This is not a new breakage; it is D1 staged in the scaffold ahead of the receipt.
Batch 1's gate record lists `validate-plan` and `coverage-checklist` only — it
never ran `content-policy`, which is why the run record reads "all step-2 gates
green". Batch 2's Beta did run it. The claim should be narrowed to
"validate-plan and coverage-checklist green; batch 1's manifest gate pending the
D1 receipt".

### 4.3 Blast radius: smaller and better-shaped than D1 assumed

`consumers.mjs` on the four ids → **19 distinct consumers**. I resolved every one
to its home page:

- **18 on `the-complex-exponential-and-eulers-formula` (order 189)**
- **1 on `the-complex-exponential-and-eulers-formula-examples` (order 190)**
- **0 anywhere else.**

Nothing between order 54 and order 189 cites any of the four. So adding
`field-extensions-and-the-complex-numbers` to order 189's `requires` covers every
logical and direct-citation consumer in a single edge; order 190 inherits it
transitively through 189, and adding it to 190 directly would only raise
`redundant-prereq`. The "resolve all 20 consumers" step is real but structurally
trivial — with one exception, §4.5.

### 4.4 BLOCKER B1 — the scaffold does not relocate these items, it rewrites them

D1 was approved on the premise that this is *"published text moving to a new
page, not new drafts. Their existing `verification` blocks and component
provenance travel with them; nothing is retro-tagged."* I compared the scaffold
entries against the published files. That premise does not hold:

| id | published title | scaffold title |
|---|---|---|
| `def-complex-numbers-and-arithmetic` | The complex numbers as $\mathbb R^2$, with their arithmetic, real embedding, and imaginary unit | The complex numbers as $\mathbb R[x]/(x^2+1)$, with the real embedding and imaginary unit $i$ |
| `thm-complex-numbers-form-a-field` | The complex numbers form a field, and every nonzero $x+iy$ has inverse $(x-iy)/(x^2+y^2)$ | $\mathbb C=\mathbb R[x]/(x^2+1)$ is a field, every element is uniquely $a+bi$, … |
| `def-complex-conjugate-…-and-modulus` | (unchanged) | (unchanged), but deps change |
| `lem-complex-conjugation-and-modulus-laws` | Conjugation laws, $z\overline z=|z|^2$, multiplicativity of modulus, and the triangle inequality | Conjugation is an involutive real-field automorphism, …, definite, multiplicative, and subadditive |

Every one of the four also has a **different dependency set** in the scaffold than
on disk:

- `def-complex-numbers-and-arithmetic` — disk `[def-real-numbers]`; scaffold
  `[def-polynomial-ring-over-a-commutative-ring, def-field-extension-generated-subfields-and-simple-extension]`.
- `thm-complex-numbers-form-a-field` — drops `def-field`, adds the irreducible-quotient route.
- `def-complex-conjugate-…` — drops `def-complex-numbers-and-arithmetic`, adds `cor-cauchy-reals-lub-complete`.
- `lem-complex-conjugation-and-modulus-laws` — drops `def-p-norms-on-rn` and
  `lem-p-norms-are-norms-and-induce-the-published-metrics`.

**This is a material rewrite of four published items under SCHEMA §3, not a
relocation.** It changes the *construction of $\mathbb C$* — from the plane
$\mathbb R^2$ with coordinate arithmetic to the stem field $\mathbb R[x]/(x^2+1)$.
It voids `verification.audited: 2026-08-02` on all four, requires re-precheck, and
puts them in step-7 judge scope on their new text.

I want to be clear that **the scaffold's mathematics is the better mathematics.**
A page titled *Simple Field Extensions and the Construction of the Complex
Numbers* whose whole apparatus is Kronecker, stem fields and the power basis
should build $\mathbb C$ as $\mathbb R[x]/(x^2+1)$; relocating an $\mathbb R^2$
definition onto it would leave the page defining $\mathbb C$ by coordinates and
then separately proving $\mathbb R[x]/(x^2+1)$ is a field, which is incoherent for
its own purpose. What is wrong is the *paperwork*: the owner approved a
citation-neutral move and what is staged is a rewrite of published mathematics.

### 4.5 Two consequences that must be settled with it

**(a) A load-bearing sentence at order 189 loses its warrant.** Published
`def-complex-metric-convergence-and-continuity` reads:

> Under the identification $\mathbb C=\mathbb R^2$, this is exactly the metric
> $d_2$ induced by the Euclidean norm of [[def-p-norms-on-rn]].

Today that identification is supplied by `def-complex-numbers-and-arithmetic`'s
"Set $\mathbb C=\mathbb R^2$". Replace it with the quotient model and the sentence
cites nothing. **Batch 1's scaffold contains no bridge item** — searching its
`pages.json` for $\mathbb R^2$ or "plane" returns zero hits. Three consumers rest
on the plane model directly or transitively:
`def-complex-metric-convergence-and-continuity`, `thm-complex-plane-is-complete`
(via `thm-componentwise-convergence-and-completeness`), and
`lem-complex-polynomial-growth-and-minimum-modulus` (via `thm-heine-borel-rn`).

**The exact result to add**, at order 54, immediately after
`thm-complex-numbers-form-a-field`:

> **`thm-complex-numbers-are-the-real-coordinate-plane`** — the map
> $a+bi\mapsto(a,b)$ is a bijection $\mathbb C\to\mathbb R^2$ carrying the field
> operations to the coordinate formulas
> $(a,b)+(u,v)=(a+u,b+v)$ and $(a,b)(u,v)=(au-bv,av+bu)$, and
> $|a+bi|=\sqrt{a^2+b^2}$.

Source: Srivastava §1.1, **already in batch 1's ledger** as the $\mathbb R^2$
treatment. It states only the coordinate bijection and the arithmetic — deliberately
**not** the norm identification, which needs `def-p-norms-on-rn` at order 167 and
must stay at order 189, where the metric item already cites it directly. With this
item present, the order-189 sentence keeps its warrant unchanged.

**(b) BLOCKER B1a, which the rewrite happens to solve.** As *published*,
`lem-complex-conjugation-and-modulus-laws` cannot sit at order 54 at all: its
proof step 2.1 is `[given]` and reads *"The Euclidean norm triangle inequality on
$\mathbb R^2$ is exactly $|z+w|\le|z|+|w|$"*, carried entirely by
`def-p-norms-on-rn` and `lem-p-norms-are-norms-and-induce-the-published-metrics`
at **order 167**. That is a load-bearing forward reference from order 54 —
`forward-ref` hard-fails, and declaring `rn-as-a-normed-space` in order 54's
`requires` hard-fails `prereq-order` (167 > 54). Re-homing the p-norm pair instead
is not an option: it has **43 consumers**.

Two order-54 items need this lemma (`thm-real-automorphisms-of-the-complex-numbers`,
`thm-every-complex-number-has-a-square-root`), so leaving it at 189 reintroduces the
forward reference D1 exists to remove.

The scaffold's rewritten proof dissolves this: it derives the triangle inequality
from $(av-bu)^2\ge0$, i.e. Lagrange's identity
$(a^2+b^2)(u^2+v^2)-(au+bv)^2=(av-bu)^2$, then squaring monotonicity. I checked the
identity; it is correct, and its inputs (`thm-of-square-roots`,
`lem-of-square-monotone`, `lem-of-square-positive`) all sit at order $\le 9$. So
**a pure relocation is impossible and the rewrite is what makes order 54 legal.**
That is the strongest argument for taking the rewrite deliberately rather than
letting it happen as a side effect.

### 4.6 The exact ordered sequence

Written for the rewrite reading, which is the one I recommend. **S0 gates
everything.**

**S0 — owner re-decision.** D1's premise 4 ("published text travels, nothing
retro-tagged") is false as staged, and a pure relocation is impossible (§4.5b).
The owner should re-approve as a **material rewrite of four published items**, or
direct otherwise. Nothing below starts first. This is recorded, not asked.

**S1 — write `research/frontier-11-rehomed.json`.** Schema per ARCHITECTURE
§3.11a: `version: 1`, `run: "frontier-11"`, `approved_by: "owner"`, `approved_on`,
a `reason`, and four `items` entries with `from_page:
"the-complex-exponential-and-eulers-formula"`, `to_page:
"field-extensions-and-the-complex-numbers"` and a per-item `reason`. No gate
consequence by itself. *`from_page` is verified against the disk home, not
trusted, so it must name order 189's page exactly.*

**S2 — `tools/touchlog.mjs` baseline, BEFORE the first edit** to `items/` or
`library/`. Dedicated snapshot; record its path in the run record. This is the
baseline `impact-audit.mjs` runs from at S8.

**S3 — step-4 splice, `research/plan-spec.json` only.** Order 54 gains its items
(now 21, with the bridge item of §4.5a) and `roots-and-rational-powers` in
`requires` (D2); order 55 gains 7. **Order 189's plan-spec entry drops the four**,
and gains `field-extensions-and-the-complex-numbers` in `requires`.

**S4 — gates after S3.**
- `validate-plan.mjs research/plan-spec.json --rehomed research/frontier-11-rehomed.json`
  → **passes**, printing one `[rehome]` line per item. **Without `--rehomed` it
  fails `dup-id` four times**, because `homePageOf` still resolves the four to
  order 189 from `library/`.
- `content-policy.mjs research/frontier-11-batch-1.pages.json --manifest-only --rehomed …`
  → the 8 errors of §4.2 clear.
- `depcheck` → unchanged and green; `library/` has not been touched.
- **Tree consistent.** Plan says 54, disk says 189, and the receipt is the
  recorded, visible reconciliation. This is the state §3.11a was written for.

**S5 — step-5 authoring, `items/`.** Author order 54/55 as drafts. The four item
files are rewritten in place (quotient construction, new proofs, plus the new
bridge item). Because they are published items being materially rewritten:
delete `verification.audited` from each; delete any `verification.judge`; re-run
`precheck.mts` and record `verification.precheck: pass`.

**S6 — create `library/abstract-algebra/field-extensions-and-the-complex-numbers.md`
with `status: draft`**, listing all 21 ids including the four. **Do not remove
them from order 189's page file yet.**

**S7 — gates after S6.** Two intermediate states appear here; both are named in
§4.7.

**S8 — `impact-audit.mjs` from the S2 baseline.** 19 consumers, all on 189/190. I
disposition each: the three resting on the plane model (§4.5a) are checked against
the new bridge item; the remaining sixteen are citation-only and unaffected by a
construction change that preserves every statement they cite. Resolve the queue
before the level continues.

**Steps 6–9 — normal.** The four rewritten items are in step-6 audit scope and
step-7 judge scope like every other item on the pair; they sit inside order 54/55's
frozen pair context.

**S9 — the publish commit, at step 10, ONE commit.** Flip order 54/55 to
`status: published`; **in the same commit** remove the four ids from
`library/real-analysis/the-complex-exponential-and-eulers-formula.md`'s `items:`
list; owner sets `verification.audited` on the four along with the rest of the
page.

**S10 — gates after S9.** `depcheck` → `multi-home` clears, `published-unaudited`
clears. `validate-plan --rehomed` → `homePageOf` now resolves the four to order
54, the receipt entry stops being exercised, and the `[rehome]` line disappears.
`impact-audit` closed.

### 4.7 Where the tree is inconsistent, and what to do about it

**(1) Now, before S1.** Batch 1's manifest gate is red, 8 errors (§4.2).
*Avoided by:* S1's receipt. Until then, do not describe batch 1 as gate-green.

**(2) S3 → S6: plan-spec says 54, `library/` says 189.** *Not* an inconsistency —
it is the documented state the receipt exists to express, and `validate-plan
--rehomed` prints a visible `[rehome]` line for each. §3.11a's deferral applies
here because **the destination is unpublished**; its inverted case (both endpoints
published, defer breaks things) is not this one.

**(3) S6 → S9: both pages list the four.** `depcheck` raises `multi-home` ×4 — a
**warning**, and the truth. The public is unaffected: readers see the four exactly
once, on published order 189; the second listing is a draft page the renderer
shows only to the signed-in owner behind a DRAFT banner. They are never listed by
nothing. *This is the transient the orchestrator was worried about, and it is
benign.*

**(4) S5 → S9: the one genuine inconsistency.** After S5 the four are
`status: published`, still listed by published order 189, and their
`verification.audited` is gone. `depcheck` raises **`published-unaudited`, an
ERROR**, for the whole window. Note `draft-on-published-page` never fires — their
`status` never changes to draft, which is what the orchestrator's "published page
listing a draft item" worry would have needed.

*This window is unavoidable under the rewrite reading.* Deferring the rewrite to
the publish commit would avoid it but would mean the step-7 judges never see the
final text, which is worse and violates the paired-judge contract. The repo
already has the mechanism for exactly this class: `depcheck --pending-audit-ok`,
whose comment names it *"a materially repaired published item loses its obsolete
`audited` stamp there"*. Its stated sole caller is the audit workflow's A4 gate,
so **using it in a build is a deviation to record explicitly in the run record and
in the step-10 report**, not one to assume. That is the decision I am flagging
rather than taking.

**(5) A trap worth stating, because it will look like success.** From S6 onward
both pages list the four, and `validate-plan` builds `homePageOf` by walking
`library/` and keeping the **first** hit. `abstract-algebra` precedes
`real-analysis`, so the destination wins by traversal order, `dup-id` then sees
`home === pid` and passes through the plain `else authored++` branch — **without
consulting the receipt, and the `[rehome]` line silently disappears.** Do not read
its absence as "the move landed". The only proof the move landed is order 189's
page file no longer listing the ids. I would put that sentence in the run record.

### 4.8 If the owner prefers a pure relocation

It cannot be executed for all four. `lem-complex-conjugation-and-modulus-laws`
would have to stay at order 189 (§4.5b), which leaves order 54's
`thm-real-automorphisms-of-the-complex-numbers` and
`thm-every-complex-number-has-a-square-root` forward-referencing it, and order 54
would define $\mathbb C$ by coordinates while proving the quotient is a field.
The remaining three move cleanly — their non-intra dependencies sit at orders 7
and 9 — but the result is not a coherent page. I do not recommend it.

---

## 5. Blockers

**B1 — D1 cannot proceed as approved.** What is staged is a material rewrite of
four published items, including a changed construction of $\mathbb C$, not the
citation-neutral relocation the owner approved; and a pure relocation is
impossible for `lem-complex-conjugation-and-modulus-laws` because of an order-167
dependency. Needs an owner re-decision on the corrected premise (§4.4–4.5).
Recorded here, not raised as a prompt. **Pair 1 must not be spliced until it
lands.** Batches 2–5 are unaffected and can splice now.

**B2 — batch 1's `content-policy --manifest-only` gate is red**, 8 errors, and has
been since the scaffold was written; batch 1 never ran that gate. Clears with the
receipt at S1 (§4.2).

**B3 — Apostol's internal numbering is unverified.** Section titles and page
numbers verified exactly from the book's own contents; Definition 6.16 and
Theorems 6.17–6.20 not read, because the full-text copies I reached returned
403/401 (§3).

**Not a blocker, for the record:** to read PDFs I created a throwaway Python venv
at `/tmp/f11pdf` and downloaded sources to `/tmp/f11src`. `WebFetch` returns raw
PDF bytes that its summarising model cannot parse, so source-locator verification
needs local extraction; worth knowing for the step-6 re-checks.

---

I remain the sole adjudicator of judge rejections later in this run. My step-3
reasoning, the two places it was wrong (D-2's duplicate id, the Conrad
attribution), and the D1 analysis above are all recoverable from this file.
