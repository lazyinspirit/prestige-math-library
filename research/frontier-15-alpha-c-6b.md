# frontier-15 — Alpha-c, step 6b adjudication (batch 7)

**Scope:** batch 7 only — `monads-comonads-and-their-algebras` (A, 59 items) and
`monads-comonads-and-their-algebras-examples` (B, 13 items), 72 items, 55
proof-bearing. Alpha-c is Claude Opus 5, `xhigh`, 1,000,000-token window.

**Verdict:** batch 7 is clean for step 7. Six reader findings adjudicated, eight
read-only refuters dispatched and every one of their findings adjudicated,
24 `risk_review` dispositions written, 19 defect-ledger rows appended, 13 items
and one page summary repaired, and every batch gate re-run green.

---

## 1. Reader report received and its coverage

`research/frontier-15-reader-7.md`, from `reader-7` (GPT 5.6 Sol, `xhigh`, 1M).
It claims 72/72 items opened, all 440 boundary rows reviewed, every `[F#]`/`[A#]`/`[L#]`
target opened, and every title compared with its proof. **Coverage complete and
credible:** I verified the claim against disk on the five items it says it
repaired and on the three contract rows it says it rewrote, and every stated
change is present and is what it says it is. It reported three fatal, two
nonfatal, one polish, all repaired, nothing left open.

The reader excluded correctly: `reader-7` authored no batch-7 content.

## 2. Every reader fix, audited

| id | subject | reader verdict | my adjudication |
|---|---|---|---|
| R7-1 | `thm-a-distributive-law-makes-the-composite-a-monad`, proof | fatal, proof replaced | **confirmed fatal**, repair verified correct |
| R7-2 | `thm-algebras-for-the-covariant-power-set-monad-…`, `[L1]` + `deps` | fatal | **confirmed fatal**, repair verified correct |
| R7-3 | `ex-the-interior-comonad-on-a-topological-space`, `[L1]` + step 1.1 | fatal | **confirmed fatal**, repair verified correct |
| R7-4 | `thm-eilenberg-moore-creates-base-colimits-…`, step 3.1 | nonfatal | **confirmed nonfatal**, repair verified correct |
| R7-5 | `def-t-algebra-and-algebra-homomorphism`, display | polish | **confirmed polish**, repair verified |
| R7-6 | three empty-set contract boundary rows | nonfatal | **confirmed nonfatal**, repair verified correct |

**R7-1 is the one that mattered, and it was a wholesale proof replacement, so it
had had no adversarial reading in its current form at all.** I re-derived the
entire new proof myself rather than checking the repair narrative, and gave it a
dedicated refuter (`c-refuter-8`) on top of its topic refuter (`c-refuter-4`).
What I verified: `\widetilde T(A,a)=(TA,T(a)\lambda_A)` satisfies the lifted
algebra unit law via the first distributive unit law and associativity via the
first distributive multiplication law plus naturality of `\lambda` at `a`;
`\eta^T` and `\mu^T` are `S`-algebra homomorphisms via the second unit and second
multiplication laws plus naturality of `\eta^T`, `\mu^T` at `a`; the composite
Eilenberg–Moore adjunction `F^{\widetilde T}F^S \dashv U^SU^{\widetilde T}`
induces `TS` on objects; and expanding the two counits through
`thm-adjunctions-compose` gives `\mu^T S\circ TT\mu^S\circ T\lambda S`, whose
last two arrows become `T\mu^S\circ\mu^T SS` by naturality of `\mu^T` at the
arrow `\mu^S` — exactly the Statement's multiplication, and `TS` not `ST`.
I checked the route against the cited source directly, extracting the text of
Cheng's paper: Theorem 2.2 (Beck) states the equivalence "a distributive law of
`S` over `T` ⟺ a lifting of `T` to a monad on `S`-Alg", so the replacement proof
follows the cited source's own argument rather than inventing one.

**R7-2 and R7-3 are both the inflated-restatement class**, the library's largest
confirmed-fatal class, and both repairs are correct. For R7-3 I opened the
published `def-interior-closure-boundary-top` and confirmed it states only the
largest-open-subset, containment and open-fixed-point clauses — monotonicity and
idempotence were not there — and then re-derived both from the narrowed `[L1]`
alone, as did two refuters independently.

For **R7-2** I did not stop at the citation: I re-derived the whole power-set
algebra theorem, including transitivity of the induced order by applying the
flattening law to `{{x,y},{z}}` and to `{{x},{y,z}}`, and `a(A) \le u` for an
upper bound `u` via the family `{{x,u} : x \in A\} \cup \{\{u\}\}`, which also
covers `A = \varnothing` and makes `a(\varnothing)` the least element.

## 3. Refuter findings and dispositions

Eight read-only refuters (`gpt-5.6-sol`, `xhigh`, 1M context,
`--sandbox read-only`, attested by `dispatch.mjs --dry-run --json`), covering all
72 items: seven by topic group, plus one dedicated to the five items the reader
had rewritten, since the reader is the author of that text and nobody else had
read it. Task files at `research/frontier-15-refuters/task-*.md`, transcripts at
`research/frontier-15-dispatch/refuter-c-refuter-*.log`.

`c-refuter-1`, `-3`, `-4`, `-7`, `-8` returned **no findings** — 51 items between
them, including all three reader-repaired proofs and the critical-tier ultrafilter
lemma. Three returned findings:

| # | refuter | subject | their severity | my adjudication |
|---|---|---|---|---|
| 2-1 | c-refuter-2 | `thm-the-comparison-functor-from-kleisli-…`, missing local-smallness hypothesis | fatal | **false positive** |
| 2-2 | c-refuter-2 | `def-kleisli-category` says "hom-sets" | fatal | **confirmed nonfatal**, repaired (both instances) |
| 2-3 | c-refuter-2 | `rem-the-universal-properties-…` misstates functor-category formation | fatal | **confirmed fatal**, repaired |
| 5-1 | c-refuter-5 | A-page summary drops the poset hypothesis | fatal | **confirmed fatal**, repaired |
| 6-1 | c-refuter-6 | `thm-cokleisli-composition-…` step 3.1 swaps the counit laws | nonfatal | **confirmed nonfatal**, repaired |
| 6-2 | c-refuter-6 | `fs-the-kleisli-and-eilenberg-moore-…` `[L3]`, step 4.1 | nonfatal | **confirmed nonfatal**, repaired |
| 6-3 | c-refuter-6 | `fs-a-monad-is-a-monoid-object-…` exhibits no instance | nonfatal | **confirmed nonfatal**, repaired |

**2-1, refuted with evidence.** The claim was that "fully faithful" is defined by
bijections while `def-injection-surjection-bijection` opens "Let `A` and `B` be
sets", so an arbitrary category leaves the hom-map a class map with no declared
hypothesis. `def-category` settles it in as many words: *"every class below is a
formula and every function whose domain may be proper-class-sized is a definable
class-function schema. When its domain is a set, it is an ordinary set-valued
function."* The item uses "fully faithful" exactly as the published definition
defines it, under a convention the library adopted corpus-wide; adding a
local-smallness hypothesis here would depart from every other fully-faithful
claim in the library, and the owner's repair delegation explicitly excludes
choosing between conventions. Recorded in the ledger so step 8 does not have to
re-adjudicate the same report.

**5-1 is the one a citation audit could never have found**, because it lives in
page prose no mechanical tier reads. The summary said "Preorders turn monads and
comonads into closure and interior operators". Both items are careful — each says
"If `P` is a poset, this is equivalently a closure operator" — but the summary
dropped it. I verified the counterexample: on the indiscrete preorder on `{0,1}`
the swap map is monotone with `p \le Tp` and `T(Tp) \le Tp`, so it is a monad, yet
`T^2(0) = 0 \ne 1 = T(0)`, so it is not idempotent and not a closure operator.
Repaired; the summary is still exactly two paragraphs, 60 and 87 words.

**2-2 was graded down and the class was swept, not the instance.** The word
"hom-sets" for an arbitrary monad is a false size claim under `def-category`'s
hom-collection vocabulary, and the refuter's proper-class witness is correct. But
"hom-set" appears loosely in 36 items across the corpus including published ones,
so this is established library usage rather than a defect peculiar to this item,
and nothing on the page rests on it — nonfatal. I repaired **both** in-flight
instances (`def-kleisli-category` and `def-cokleisli-category`, which had the
identical phrasing); fixing only the one that was reported would have shipped the
class. The corpus-wide usage is a convention question for the owner and outside
my write boundary.

**2-3 and 6-3 are two instances of one mis-citation** in the same batch:
`prop-size-of-functor-categories` cited for the *formation* of a functor category,
where it states only sufficient conditions for smallness and local smallness —
formation needs a small source and lives in `def-functor-category`. Two instances
make it a class, so I grepped every citation of that proposition in the corpus:
seven other users, all citing it for a size conclusion, all correct. The
in-flight sibling `rem-a-monad-is-a-monoid-in-the-endofunctor-category-only-when-that-category-exists`
also states the relation correctly, which is what makes these item defects rather
than a library convention.

## 4. My own findings

Beyond the reader's and the refuters':

- **Six pointer citations across three items.** A scan of every fact line in the
  batch for pointer language found `[L1]`/`[L6]`/`[L7]` on
  `thm-a-distributive-law-makes-the-composite-a-monad` ("the four
  distributive-law equations express compatibility…", "with the stated formulas
  for the composite unit and counit", "whose multiplication is obtained from its
  counit"), `[L1]`/`[L2]` on
  `cor-kleisli-and-eilenberg-moore-have-the-extremal-adjunction-universal-properties`
  ("the unique … functor **described in** …"), and `[L3]` on
  `cor-cokleisli-and-coeilenberg-moore-have-the-dual-extremal-universal-properties`
  ("have the corresponding extremal universal properties"). All six substitute a
  summary of what the target is *for* in place of the proposition, which
  `CLAUDE.md` bans. The last is the worst: it withholds exactly the
  initial/terminal directions that step 2.1 reverses, so a dualisation error
  there would be unreviewable. All six replaced by the propositions themselves.
- **Step 2.1 of the distributive-law proof named the wrong axiom** — introduced by
  the R7-1 repair itself. Its first display uses the first distributive *unit*
  law, not the first multiplication law. Corrected.
- **Two Statements used an undefined technical term.**
  `thm-the-kleisli-factorisation-functor-exists-and-is-unique` and
  `thm-the-comparison-functor-exists-and-is-unique` both asserted "a unique
  **morphism of adjunctions**" and listed "the corresponding counit equality"
  among the properties. Neither term is defined anywhere in the library — the
  phrase occurs only in those two items and the corollary applying them — so the
  uniqueness quantifier was unpinned. It is load-bearing, not decorative: I
  checked that `UJ = U_T` alone does **not** force `J` on the Kleisli counit when
  `U` is not faithful. Both Statements now write out the three equalities each
  proof actually argues. Riehl Prop 5.2.13, read from the source PDF, states the
  same result.

**Not repaired, recorded:** `thm-ultrafilter-characterisation` is declared in
`thm-the-ultrafilter-monad-is-a-monad`'s `deps` but no fact or step cites it —
a superfluous edge, true, and removing it would move the item hash for nothing.
A batch-wide scan for declared-but-uncited deps returned 34 candidates; almost all
are legitimate concept references in Definition prose, so that number is
candidates, not findings, and I am not turning it into a repair sweep.

## 5. `risk_review` — 24 of 55 items routed high or critical

All 24 written into `research/frontier-15-batch-7.proof-contracts.json`;
`risk-report --require-reviewed` is now 0 errors. Each names the refuter that read
the item, what I re-derived myself, and the disposition. None is templated.

The **only critical-tier item** (score 8) is
`lem-the-principal-ultrafilter-and-ultrafilter-flattening-maps-are-natural`, and
the risk there is a silently used choice principle. I read it in full and gave it
two refuters. Nothing in the pushforward, the principal unit, the flattening or
the monad laws uses the ultrafilter lemma or any choice principle — no step
asserts that a nonprincipal ultrafilter *exists*, only that the given
constructions land in `\beta`. `c-refuter-5` reached the same conclusion
independently and ran exhaustive finite checks through size 3.

## 6. Harvest faithfulness (6b.0) — sources opened, not pinged

`url-sweep --recover --fail-on-dead` reports 4/4 live, but an HTTP 200 is not a
readable document, so I extracted text from all four sources with `pypdf`:

- **Riehl, *Category Theory in Context*** (`locator`: chapter 5 in full,
  §§5.1–5.6, printed pages 183–219). Verified: printed 183 ≈ PDF 201, and the
  100 harvested rows spread 25/25/7/10/16/17 across §§5.1–5.6 with **no section
  skipped**. I read Theorem 5.6.5, Lemma 5.2.9, Prop 5.2.13 and Lemma 5.2.14 out
  of the PDF and confirmed each matches the item that cites it.
- **Richter, *From Categories to Homotopy Theory*** (chapter 6, stated
  sub-ranges). Verified: **every** harvested key falls inside the stated PDF page
  range, and everything in range but unharvested is outside the locator's
  declared cut-offs (§6.4 entirely, 6.2.7–6.2.15, 6.5.3–6.5.4).
- **Mac Lane, *CWM*** (chapter VI §§1–5, stopping before §6). Verified: all five
  section titles present in the stated range, with §6 Split Coequalizers
  immediately after. Mac Lane numbers no results, so descriptive row names are the
  honest enumeration here.
- **Cheng, *Distributive laws for Lawvere theories*** (§2, Definition 2.1 through
  Example 2.4, stopping before Theorem 2.5). Verified, and its Definition 2.1
  matches `def-distributive-law-between-two-monads` axiom for axiom.

**One faithfulness repair.** Richter **Definition 6.3.8**, the category of
adjunctions inducing a fixed monad, was disposed `included` as
`rem-the-universal-properties-of-kleisli-and-eilenberg-moore-are-schematic`. That
Remark exists precisely to *decline* forming that category on size grounds, so
`included` was false of disk — and it is why "morphism of adjunctions" ended up
undefined in two Statements: the definition that would have supplied it was
booked as built. Changed to `inline` with the reason, naming where the surviving
content lives. `coverage-checklist` still green.

Also checked and true: every `deferred` row names `monadicity-and-becks-theorem`,
which exists in `plan-spec.json` at order 365.007 and `requires` this pair — no
deferral points nowhere. Backing is three textbooks and one paper, so the
two-independent-treatments rule is met with room.

**One nonfatal harvest discrepancy, recorded not repaired:** the harvest names
"Example 5.4.9 / Proposition 5.4.10 / Corollary 5.4.11" where the PDF snapshot
has Proposition 5.4.9 / Corollary 5.4.10 — an off-by-one confined to *deferred*
rows, with no authored item citing a 5.4.x locator. `context.pdf` is a living
file. Flagged for the MA-4 scaffold, which will harvest that section for real.

## 7. Items and pages changed

Thirteen items and one page. I added no result and deleted none, so nothing
required a `splice-plan --update`; `splice-plan --verify` confirms plan and
manifests still agree.

| file | change |
|---|---|
| `thm-a-distributive-law-makes-the-composite-a-monad` | `[L1]`, `[L6]`, `[L7]` state their propositions; step 2.1 names the right axiom |
| `thm-the-kleisli-factorisation-functor-exists-and-is-unique` | Statement writes out the three equalities |
| `thm-the-comparison-functor-exists-and-is-unique` | Statement writes out the three equalities |
| `cor-kleisli-and-eilenberg-moore-have-the-extremal-adjunction-universal-properties` | `[L1]`, `[L2]` state their propositions |
| `cor-cokleisli-and-coeilenberg-moore-have-the-dual-extremal-universal-properties` | `[L3]` states which resolution is initial and which terminal |
| `thm-cokleisli-composition-is-associative-and-unital` | step 3.1 counit laws un-swapped; `[L2]` states its proposition |
| `rem-the-universal-properties-of-kleisli-and-eilenberg-moore-are-schematic` | false formation claim corrected; `def-functor-category` added to `deps` |
| `fs-a-monad-is-a-monoid-object-in-the-endofunctor-category-for-every-category` | `[L2]` corrected, `[L3]`/`[L4]` added, step 2.1 instantiates `\mathbf{Set}`; planned `deps` edge restored and cited |
| `fs-the-kleisli-and-eilenberg-moore-categories-are-equivalent-for-every-monad` | `[L3]` cites the characterisation theorem, new `[L5]`, step 4.1 rebound; two `deps` added |
| `def-kleisli-category`, `def-cokleisli-category` | "hom-sets" → "hom-collections" |
| `library/category-theory/monads-comonads-and-their-algebras.md` | summary poset hypothesis restored |

Contracts: 8 entries requoted, 4 citations added, 5 derivations updated, 24
`risk_review` blocks written — all in the **batch** file, never a merged one.

**Rejudge set** (every item above whose normalized text moved) — these are the ids
whose own `item_sha256` has changed since authoring; their unedited page-mates are
unaffected.

## 8. Planned-versus-authored dependency drift

Seven items, for the lead Alpha's receipt:

| item | drift | reason |
|---|---|---|
| `thm-a-distributive-law-…` | +5 (`def-t-algebra…`, `def-eilenberg-moore-category`, `thm-the-eilenberg-moore-adjunction-…`, `thm-adjunctions-compose`, `thm-every-adjunction-induces-a-monad-…`) | the R7-1 replacement proof runs through the lifted monad and composed adjunctions; the scaffold planned the direct axiom chase |
| `thm-algebras-for-the-covariant-power-set-monad-…` | +`def-t-algebra-and-algebra-homomorphism` | R7-2: the algebra laws had to be cited to the item that states them |
| `thm-the-coeilenberg-moore-adjunction-…` | +`def-comonad` | authored `[L1]` quotes the comonad axioms directly |
| `rem-the-universal-properties-…` | +`def-functor-category` | refuter 2-3 repair: formation is that item's, not the size proposition's |
| `fs-the-kleisli-and-eilenberg-moore-…` | +2 | refuter 6-2 repair |
| `fs-a-monad-is-a-monoid-object-…` | +2 | refuter 6-3 repair |
| `thm-monad-morphisms-on-a-fixed-category-form-a-category` | −`rem-a-monad-is-a-monoid-…` | **pre-existing, not mine**: the author dropped a planned edge the proof does not use. Dropping an unused edge is correct; recorded so the receipt does not read it as scope loss |

## 9. Gates

| gate | result |
|---|---|
| `precheck` (55 proof-bearing) | 55 checked, 0 failing |
| `proof-contract --strict` | 55/55, 0 errors, 0 warnings |
| `citation-fidelity --fail-on-missing-quote` | 130 citations, no missing quote, no widening candidate |
| `boundary-audit` | 440 rows, no template reuse ≥3, 2 contradicted candidates — both verified false positives |
| `risk-report --require-reviewed` | 0 errors, 24/24 reviewed |
| `content-policy` | 72 items, 0 errors, 0 warnings |
| `coverage-checklist` | 177 rows, 0 errors, 0 warnings |
| `url-sweep --recover --fail-on-dead` | 4/4 live — **and all four opened and text-extracted** |
| `depcheck` / `citecheck` / `fwdcheck` / `extcheck` | no batch-7 line in any of them |
| `rendercheck` | 11 files, clean under real KaTeX |
| `prosecheck --warnings` | 0 errors, 0 warnings |
| `splice-plan --verify` | plan and manifests agree |
| `defect-ledger validate --run frontier-15` | 19 rows, 0 errors |
| `finite-smoke` | **vacuous: 0 checks over 0/55 items carrying obligations** |

**The finite-smoke line is a green gate that checked nothing**, and this batch has
material it could have covered — the two-element list monad, the finite
distributive law, the finite ultrafilter set, the non-free two-element algebra.
No item carries a smoke obligation, so the gate is not evidence. What substitutes
for it here is hand computation by the refuters: `c-refuter-7` recomputed every
displayed list, Kleisli composite, flattening, formal sum and state-monad pair and
checked all four distributive-law axioms elementwise; `c-refuter-5` ran exhaustive
checks on power-set carriers of size 0–3 and ultrafilters through size 3. I am
reporting this rather than letting the green line stand for coverage.

The two `boundary-audit` contradicted candidates are both on
`fs-the-kleisli-and-eilenberg-moore-…` and are lexical: "equivalent" there names
the categorical predicate under refutation, not a biconditional, and both rows
already record that reason.

## 10. Twice-touched items

Three items were repaired twice within step 6 — once by the reader, once by me:

- `thm-a-distributive-law-makes-the-composite-a-monad` (R7-1 proof replacement,
  then my three fact restatements and the step-2.1 axiom name). Both touches are
  mine to account for and I read the whole proof rather than the diff; two
  independent refuters found no defect in the result.
- `thm-algebras-for-the-covariant-power-set-monad-…` and
  `ex-the-interior-comonad-on-a-topological-space` were repaired by the reader and
  re-derived by me from scratch; I made no second edit to either.

None reaches the escalation rule's threshold in a way that changes the
disposition, and the escalation stays advisory at step 6.

## 11. Honest remaining gaps

1. **`finite-smoke` is vacuous on this batch** (above). The gap is mechanical
   coverage of the finite computations, not the computations themselves.
2. **Corpus-wide "hom-set" usage.** 36 items say "hom-set" where `def-category`
   says "hom-collection". I fixed the two in my batch. Whether the published 34
   should follow is a convention decision for the owner, and a real edit per item
   — not a `sed` pass.
3. **"Morphism of adjunctions" is still undefined in the library.** I removed the
   dependence on it from the two Statements that carried it, so nothing now rests
   on an undefined term. Defining it properly needs the category of adjunctions
   the library deliberately does not form; `monadicity-and-becks-theorem` (MA-4)
   is where Richter's Definition 6.3.8 would land if the owner wants it.
4. **Riehl §5.4 numbering in deferred coverage rows** (§6). Confined to rows for
   results MA-4 will build; no authored item is affected.
5. I checked no cross-batch edge and no other batch. 6c is the lead Alpha's.

## 12. Fatal-error ledger for batch 7

Five fatal defects, all fixed, none open.

| id | item / file | defect type | location | disposition |
|---|---|---|---|---|
| C01 | `thm-a-distributive-law-makes-the-composite-a-monad` | invalid inference — the load-bearing associativity verification was asserted, not performed | proof step | proof replaced (reader), independently re-derived and confirmed by me plus two refuters |
| C02 | `thm-algebras-for-the-covariant-power-set-monad-…` | incorrect dependency citation — algebra laws cited to two items that do not state them | Facts block | citation split, missing dep added; whole theorem re-derived |
| C03 | `ex-the-interior-comonad-on-a-topological-space` | inflated restatement — monotone/idempotent attributed to a definition stating neither | Facts block | `[L1]` narrowed to the three real clauses, step 1.1 derives the rest |
| C07 | `library/category-theory/monads-comonads-and-their-algebras.md` | false statement — preorders claimed to give closure operators | page summary | hypothesis restored; counterexample verified |
| C08 | `rem-the-universal-properties-…` | false statement + inaccurate citation — functor-category formation attributed to a size proposition | Remark | corrected to cite `def-functor-category` for formation |

Fourteen further rows (`C04`–`C06`, `C09`–`C19`) are nonfatal, polish, one false
positive and two recorded-not-repaired; all are in
`research/defect-ledger.jsonl` with evidence paths.

**Nothing in batch 7 is publish-blocking, and nothing is open.**

---

### Artifacts I own

- `research/frontier-15-alpha-c-6b.md` (this file)
- `research/frontier-15-batch-7.proof-contracts.json` (requotes, added citations,
  updated derivations, 24 `risk_review` blocks)
- `research/frontier-15-batch-7.pages.json` (`deps` for three repaired items)
- `research/frontier-15-batch-7.coverage.json` (one disposition repair)
- `research/frontier-15-batch-7.url-sweep.json`
- `research/frontier-15-refuters/task-1..8.md` and the three scripts that applied
  the contract, manifest and coverage edits, kept so the edits are reproducible
- 19 rows in `research/defect-ledger.jsonl` (`frontier-15-C01` … `C19`)
