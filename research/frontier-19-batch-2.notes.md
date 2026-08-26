# frontier-19 · Beta-2 · batch notes — `positive-definite-binary-quadratic-forms-and-reduction` (steps 1–2)

Run `frontier-19`, batch `2`, one A/B pair, category `number-theory`.
Author: Beta-2 (Codex / GPT-5.4 agent lane, `xhigh`, 1M context).
Design section: `research/plan-number-theory-track.md` §`NT-6. Positive-definite binary quadratic forms and reduction`, lines 657–756.

Artifacts owned by this batch and written here:
`research/frontier-19-batch-2.pages.json`,
`research/frontier-19-batch-2.coverage.json`,
`research/frontier-19-batch-2.proof-contracts.json`, and this file.
Nothing else in the repository was written.

The dispatch requires `research/frontier-19-batch-2.coverage.json` and later gates it, but the “ONLY files you may write” list omits that required artifact. This is the same prompt defect already recorded in prior batch notes. I follow the repository precedent: the three listed artifacts and the required coverage artifact are the only files written.

## Continuity checkpoint

- **Current substage:** step-1/2 scaffold finalization; manifest drafted, notes file created, coverage/proof-contract artifacts not yet written.
- **Owned artifact paths:** `research/frontier-19-batch-2.pages.json`, `research/frontier-19-batch-2.coverage.json`, `research/frontier-19-batch-2.proof-contracts.json`, `research/frontier-19-batch-2.notes.md`.
- **Completed checks:** read `CLAUDE.md`, `SCHEMA.md`, `README.md`, `QUALITY-CONTROLS.md`, the NT-6 design block, the current `plan-spec.json` entry, the latest completed batch-1 notes precedent (`research/frontier-18-batch-1.notes.md`), the current published prerequisite pages and the published number-theory seam pages that defer into NT-6. Confirmed the prompt defect precedent for `coverage.json`. Confirmed the step-0 drift note that this page was reordered and gained the matrix/group-action prerequisites. Verified all proposed new ids are absent from both `items/` and `research/plan-spec.json` with `rg -n '...ids...' items research/plan-spec.json` (no matches).
- **Open mathematical/dependency constraints:** decide whether the discriminant-square-mod-\(4n\) criterion stays; if it stays, the \(x^2+2y^2\) prime example stays and closes one earlier deferment. The page-level `requires` include `group-actions-and-cayleys-theorem`, but the item-level closure currently uses matrix multiplication rather than the published left-action definition because the arithmetic convention here is a right substitution action.
- **Exact next action:** finish the coverage harvest and then write the proof contracts from the manifest as finalized on disk.

## Scope, order, and artifact boundary

The design section and `research/plan-spec.json` agree on the page ids, category,
order `78.1` / `78.2`, companion relation, and declared prerequisites. The
step-0 drift note explains why this page was reordered ahead of the
continued-fractions/Pell chain and why the group-action and matrix pages were
added as prerequisites; I found no new design/spec drift beyond that already
adjudicated change.

The A page now has 23 items and the B page has 10. The A page is 37 items below
the hard 60-item ceiling, so no split is proposed.

## Source-fetch status

`node tools/coverage-checklist.mjs research/frontier-19-batch-2.coverage.json --require-destination`
passes with 1 page, 58 harvested results, 0 errors, and 0 warnings.

The mandatory fetch command

    node tools/source-fetch-check.mjs --coverage research/frontier-19-batch-2.coverage.json --stamp

failed mechanically, and only mechanically:

- `https://wstein.org/edu/Fall2002/124/stein/main-05-2003.pdf` — `EAI_AGAIN`
- `https://dms.umontreal.ca/~andrew/Courses/Chapter4.pdf` — `EAI_AGAIN`
- `https://encyclopediaofmath.org/wiki/Binary_quadratic_form` — `EAI_AGAIN`

I searched the repository for these exact URLs in existing `*.coverage.json`
files and found no prior stamped receipts to reuse honestly. The sources were
opened and read through web research, but no `fetch_verified` stamp was
fabricated.

## Applyable amendments to `research/plan-number-theory-track.md`

### NT6-1 — insert the discriminant-square criterion and rename the invariant row

Recommendation: approve.

Exact old text:

    | `thm-proper-equivalence-preserves-representations` | `thm` | Properly equivalent forms represent exactly the same integers, and their primitive representations correspond bijectively. | L/A; Stein Prop. 9.2.4; Granville §4.1.  The inverse unimodular substitution is integral and preserves \(\gcd(r,s)=1\), so both directions and the primitive clause are proved. |
    | `prop-proper-equivalence-preserves-discriminant` | `prop` | Proper equivalence preserves discriminant and primitivity of the form. | L/A; Stein Prop. 9.2.8 and the coefficient transformation; Granville Ex. 4.1d.  In fact the discriminant is multiplied by the square of the determinant; unimodularity also preserves the coefficient ideal in both directions. |
    | `def-positive-definite-binary-quadratic-form` | `def` | A form is positive definite when \(f(x,y)>0\) for every nonzero \((x,y)\in\mathbb R^2\). | L/NA; Stein §9.2.4; Granville §4.1.  The intrinsic positivity definition comes before its coefficient criterion. |

Exact new text:

    | `thm-proper-equivalence-preserves-representations` | `thm` | Properly equivalent forms represent exactly the same integers, and their primitive representations correspond bijectively. | L/A; Stein Prop. 9.2.4; Granville §4.1.  The inverse unimodular substitution is integral and preserves \(\gcd(r,s)=1\), so both directions and the primitive clause are proved. |
    | `prop-proper-equivalence-preserves-discriminant-and-primitivity` | `prop` | Proper equivalence preserves discriminant and primitivity of the form. | A/A; Stein Prop. 9.2.8 proves the discriminant part, and the coefficient-ideal argument extracted from the same substitution formulas proves the primitivity part. |
    | `prop-discriminant-square-mod-four-n-criterion-for-primitive-representation` | `prop` | Some discriminant \(\Delta\) form primitively represents \(n\) exactly when \(\Delta\) is a square modulo \(4n\). | A/A; Granville Prop. 4.1, adapted from “properly represented” to this page’s primitive-representation convention.  This is the exact bridge needed for the \(x^2+2y^2\) payoff on the companion page. |
    | `def-positive-definite-binary-quadratic-form` | `def` | A form is positive definite when \(f(x,y)>0\) for every nonzero \((x,y)\in\mathbb R^2\). | L/NA; Stein §9.2.4; Granville §4.1.  The intrinsic positivity definition comes before its coefficient criterion. |

If declined, the page drops the one source-backed congruence-to-representation
bridge that closes the earlier `x^2+2y^2` deferment, and the id on the
discriminant invariant row no longer matches the actual statement carried by the
scaffold.

### NT6-2 — decompose the reduction and uniqueness proofs

Recommendation: approve.

Exact old text:

    | `def-reduced-positive-definite-binary-quadratic-form` | `def` | A positive-definite form \((a,b,c)\) is reduced when \(|b|\le a\le c\), with \(b\ge0\) whenever \(|b|=a\) or \(a=c\). | L/NA; Stein Def. 9.3.1.  The boundary rule is part of the definition and is indispensable for uniqueness. |
    | `thm-reduction-of-positive-definite-binary-quadratic-forms` | `thm` | Every positive-definite integral binary quadratic form is properly equivalent to a reduced form, found by iterating the explicit swap and shear transformations of §9.3.2. | L/A; existence half of Stein Thm. 9.3.2 and the algorithm in §9.3.2; Granville reduction algorithm (4.1.1) and Ex. 4.1e.  Supply a decreasing positive-integer measure, including the boundary-normalisation step, to prove termination. |
    | `thm-unique-reduced-positive-definite-binary-quadratic-form` | `thm` | Each proper-equivalence class of positive-definite forms contains exactly one reduced form. | L/A; uniqueness half of Stein Thm. 9.3.2; Granville §4.1.  Prove that the leading coefficient of a reduced form is minimal in its class, then use the half-open interval \(-a<b\le a\) and the boundary sign convention to force the shear parameter to be zero. |
    | `lem-leading-coefficient-bound-for-a-reduced-form` | `lem` | If a reduced positive-definite form has discriminant \(\Delta\), then \(a\le\sqrt{|\Delta|/3}\), and \(c\le |\Delta|/3\) after the finite coefficient constraints are imposed. | L/A; Stein proof of Prop. 9.4.1.  From \(b^2\le a^2\le ac\), obtain \(|\Delta|=4ac-b^2\ge3a^2\); use \(c=(b^2-\Delta)/(4a)\) for enumeration rather than claiming an unsourced symmetric bound. |

Exact new text:

    | `def-reduced-positive-definite-binary-quadratic-form` | `def` | A positive-definite form \((a,b,c)\) is reduced when \(|b|\le a\le c\), with \(b\ge0\) whenever \(|b|=a\) or \(a=c\). | L/NA; Stein Def. 9.3.1.  The boundary rule is part of the definition and is indispensable for uniqueness. |
    | `lem-gauss-reduction-step-improves-a-positive-definite-form` | `lem` | A non-reduced positive-definite form admits an equivalent positive-definite form with smaller reduction measure. | A/A; extracted from Stein §9.3.2 and Granville’s algorithm (4.1.1).  The page isolates the swap/shear improvement step before the termination theorem uses it. |
    | `thm-reduction-of-positive-definite-binary-quadratic-forms` | `thm` | Every positive-definite integral binary quadratic form is properly equivalent to a reduced form. | L/A; existence half of Stein Thm. 9.3.2 and Granville Ex. 4.1e.  The proof now cites the preceding improvement lemma instead of hiding the whole algorithm in one monolith. |
    | `lem-leading-coefficient-is-minimal-in-a-reduced-class` | `lem` | The leading coefficient of a reduced positive-definite form is minimal in its proper-equivalence class. | A/A; extracted from the uniqueness proof in Stein Thm. 9.3.2 and Granville Ex. 4.1f(a). |
    | `lem-reduced-forms-with-the-same-leading-coefficient-are-equal` | `lem` | Properly equivalent reduced forms with the same leading coefficient are equal. | A/A; extracted from the boundary-sign analysis in Stein Thm. 9.3.2 and Granville Ex. 4.1f(b). |
    | `thm-unique-reduced-positive-definite-binary-quadratic-form` | `thm` | Each proper-equivalence class of positive-definite forms contains exactly one reduced form. | L/A; Stein Thm. 9.3.2 and Granville Ex. 4.1f(c).  The theorem now consumes the two focused lemmas instead of carrying those proof obligations inline. |
    | `lem-leading-coefficient-bound-for-a-reduced-form` | `lem` | If a reduced positive-definite form has discriminant \(\Delta\), then \(a\le\sqrt{|\Delta|/3}\). | A/A; extracted from Stein’s proof of Prop. 9.4.1.  The unsourced symmetric bound on \(c\) is dropped; the page only needs the \(a\)-bound, and Step 5 can recover \(c\) from the discriminant equation during enumeration. |

If declined, the scaffold hands Step 5 two long proofs with their internal
claims unnamed, and it also preserves a stronger \(c\)-bound than the sources
actually justify.

### NT6-3 — replace the B-page table with the richer ten-item companion

Recommendation: approve.

Exact old text:

    | `ex-reducing-a-large-binary-quadratic-form` | `ex` | Trace Stein's form \((458,214,25)\) through swaps and shears to \((1,0,1)\), recording the product matrix. |
    | `ex-reduced-forms-of-discriminant-minus-four` | `ex` | Enumerate the unique primitive reduced form and recover the two-square form. |
    | `ex-reduced-forms-of-discriminant-minus-twenty` | `ex` | Enumerate all reduced primitive forms and compute the form class number. |
    | `ex-reduced-forms-of-discriminant-minus-twenty-three` | `ex` | Enumerate the three proper classes and distinguish conjugate middle coefficients. |
    | `cex-same-discriminant-does-not-imply-proper-equivalence` | `cex` | Compare \((1,0,6)\) and \((2,0,3)\) of discriminant \(-24\) by the integer \(1\) they do or do not represent. |
    | `cex-same-represented-integers-do-not-imply-proper-equivalence` | `cex` | Show that \((2,1,3)\) and \((2,-1,3)\) represent the same integers but are distinct reduced representatives. |
    | `ex-proper-versus-improper-equivalence-of-forms` | `ex` | Use a determinant \(-1\) substitution to explain why forgetting orientation merges some proper classes. |
    | `cex-indefinite-classes-have-cycles-of-reduced-forms` | `cex` | Exhibit a positive-discriminant reduction cycle, warning against importing the NT-6 uniqueness theorem. |

Exact new text:

    | `ex-reducing-a-large-binary-quadratic-form` | `ex` | Trace Stein's form \((458,214,25)\) through swaps and shears to \((1,0,1)\), recording the product matrix. |
    | `ex-reduced-forms-of-discriminant-minus-four` | `ex` | Enumerate the unique primitive reduced form and recover \(h(-4)=1\). |
    | `ex-reduced-forms-of-discriminant-minus-eight` | `ex` | Enumerate the unique primitive reduced form of discriminant \(-8\) and identify it with \(x^2+2y^2\). |
    | `ex-primes-represented-by-x-squared-plus-two-y-squared` | `ex` | Use the discriminant-\(-8\) criterion and reciprocity to recover the prime classes \(p\equiv1,3\pmod8\). |
    | `ex-reduced-forms-of-discriminant-minus-twenty` | `ex` | Enumerate all reduced primitive forms and compute \(h(-20)=2\). |
    | `ex-reduced-forms-of-discriminant-minus-twenty-three` | `ex` | Enumerate the three proper classes and compute \(h(-23)=3\). |
    | `cex-same-discriminant-does-not-imply-proper-equivalence` | `cex` | Compare \((1,0,6)\) and \((2,0,3)\) of discriminant \(-24\) by the integer \(1\) they do or do not represent. |
    | `cex-same-represented-integers-do-not-imply-proper-equivalence` | `cex` | Show that \((2,1,3)\) and \((2,-1,3)\) represent the same integers but are distinct reduced representatives. |
    | `ex-proper-versus-improper-equivalence-of-forms` | `ex` | Use the determinant \(-1\) substitution \((x,y)\mapsto(x,-y)\) to show how improper equivalence merges those two proper classes. |
    | `cex-indefinite-classes-have-cycles-of-reduced-forms` | `cex` | Exhibit Granville's positive-discriminant reduction cycle, warning against importing the NT-6 uniqueness theorem. |

If declined, the batch re-defers the already-deferred \(x^2+2y^2\) payoff and
loses the cleanest worked companion to the new discriminant-square criterion.

## 1. Per-page item list

### A page `positive-definite-binary-quadratic-forms-and-reduction` — order 78.1 — 23 items

| # | id | kind | title |
|---|---|---|---|
| 1 | `def-binary-quadratic-form-over-integers` | definition | Integral binary quadratic forms |
| 2 | `def-integer-represented-by-binary-quadratic-form` | definition | Integers represented, and primitively represented, by a binary quadratic form |
| 3 | `def-primitive-binary-quadratic-form` | definition | Primitive binary quadratic forms |
| 4 | `def-discriminant-of-binary-quadratic-form` | definition | The discriminant of a binary quadratic form |
| 5 | `prop-binary-quadratic-form-discriminants-modulo-four` | proposition | An integer is the discriminant of an integral binary quadratic form exactly when it is congruent to $0$ or $1$ modulo $4$ |
| 6 | `def-principal-binary-quadratic-form` | definition | The principal binary quadratic form of a discriminant |
| 7 | `def-proper-equivalence-of-binary-quadratic-forms` | definition | Proper equivalence of binary quadratic forms |
| 8 | `lem-binary-quadratic-form-substitution-is-a-right-action` | lemma | Integral substitution defines a right action of $\mathrm{SL}_2(\mathbb Z)$ on integral binary quadratic forms |
| 9 | `thm-proper-equivalence-preserves-representations` | theorem | Properly equivalent binary quadratic forms represent the same integers, with primitive representations in bijection |
| 10 | `prop-proper-equivalence-preserves-discriminant-and-primitivity` | proposition | Proper equivalence preserves discriminant and primitivity of the form |
| 11 | `prop-discriminant-square-mod-four-n-criterion-for-primitive-representation` | proposition | Some discriminant $\Delta$ form primitively represents $n$ exactly when $\Delta$ is a square modulo $4n$ |
| 12 | `def-positive-definite-binary-quadratic-form` | definition | Positive-definite binary quadratic forms |
| 13 | `prop-positive-definite-binary-form-criterion` | proposition | An integral binary quadratic form is positive definite exactly when its leading coefficient is positive and its discriminant is negative |
| 14 | `def-reduced-positive-definite-binary-quadratic-form` | definition | Reduced positive-definite binary quadratic forms |
| 15 | `lem-gauss-reduction-step-improves-a-positive-definite-form` | lemma | A non-reduced positive-definite form admits an equivalent positive-definite form with smaller reduction measure |
| 16 | `thm-reduction-of-positive-definite-binary-quadratic-forms` | theorem | Every positive-definite integral binary quadratic form is properly equivalent to a reduced form |
| 17 | `lem-leading-coefficient-is-minimal-in-a-reduced-class` | lemma | The leading coefficient of a reduced positive-definite form is minimal in its proper-equivalence class |
| 18 | `lem-reduced-forms-with-the-same-leading-coefficient-are-equal` | lemma | Properly equivalent reduced forms with the same leading coefficient are equal |
| 19 | `thm-unique-reduced-positive-definite-binary-quadratic-form` | theorem | Each proper-equivalence class of positive-definite integral binary quadratic forms contains exactly one reduced form |
| 20 | `lem-leading-coefficient-bound-for-a-reduced-form` | lemma | A reduced positive-definite form of discriminant $\Delta$ satisfies $a\le\sqrt{|\Delta|/3}$ |
| 21 | `cor-finiteness-of-positive-definite-binary-form-classes` | corollary | For each negative discriminant, there are only finitely many proper-equivalence classes of positive-definite integral binary quadratic forms |
| 22 | `def-binary-quadratic-form-class-number` | definition | The class number of primitive positive-definite binary quadratic forms of discriminant $\Delta$ |
| 23 | `cor-binary-quadratic-form-equivalence-is-decidable` | corollary | Proper equivalence of positive-definite integral binary quadratic forms is decidable |

### B page `positive-definite-binary-quadratic-forms-and-reduction-examples` — order 78.2 — 10 items

| # | id | kind | title |
|---|---|---|---|
| 1 | `ex-reducing-a-large-binary-quadratic-form` | example | Reducing $(458,214,25)$ to $(1,0,1)$ |
| 2 | `ex-reduced-forms-of-discriminant-minus-four` | example | The reduced primitive forms of discriminant $-4$ |
| 3 | `ex-reduced-forms-of-discriminant-minus-eight` | example | The reduced primitive forms of discriminant $-8$ |
| 4 | `ex-primes-represented-by-x-squared-plus-two-y-squared` | example | Odd primes congruent to $1$ or $3$ modulo $8$ are represented by $x^2+2y^2$ |
| 5 | `ex-reduced-forms-of-discriminant-minus-twenty` | example | The reduced primitive forms of discriminant $-20$ |
| 6 | `ex-reduced-forms-of-discriminant-minus-twenty-three` | example | The reduced primitive forms of discriminant $-23$ |
| 7 | `cex-same-discriminant-does-not-imply-proper-equivalence` | counterexample | Forms of discriminant $-24$ need not be properly equivalent |
| 8 | `cex-same-represented-integers-do-not-imply-proper-equivalence` | counterexample | Distinct reduced forms can represent the same integers |
| 9 | `ex-proper-versus-improper-equivalence-of-forms` | example | Improper equivalence can merge two distinct proper classes |
| 10 | `cex-indefinite-classes-have-cycles-of-reduced-forms` | counterexample | An indefinite proper-equivalence class can contain a cycle of reduced forms |

Both counts are recountable from the tables above. The A page is 37 items below
the 60-item ceiling, so no split is proposed.

Suggested `landmark: true` items for Step 5 on the A page:
`def-binary-quadratic-form-over-integers`,
`def-proper-equivalence-of-binary-quadratic-forms`,
`prop-discriminant-square-mod-four-n-criterion-for-primitive-representation`,
`def-reduced-positive-definite-binary-quadratic-form`,
`thm-reduction-of-positive-definite-binary-quadratic-forms`,
`thm-unique-reduced-positive-definite-binary-quadratic-form`,
and `def-binary-quadratic-form-class-number`.

## 2. Per-pair richness report

Both passes were run on this single A/B pair.

**Proof-decomposition pass.** It found real work.

- The reduction theorem was split into `lem-gauss-reduction-step-improves-a-positive-definite-form` plus `thm-reduction-of-positive-definite-binary-quadratic-forms`. The theorem now owns only termination and final boundary normalization; the explicit swap/shear improvement is a separately auditable lemma.
- The uniqueness theorem was split into `lem-leading-coefficient-is-minimal-in-a-reduced-class`, `lem-reduced-forms-with-the-same-leading-coefficient-are-equal`, and `thm-unique-reduced-positive-definite-binary-quadratic-form`. That isolates the two nontrivial subclaims Stein and Granville both use.
- The old design carried the leading-coefficient bound as a corollary-ish side fact inside the class-number discussion. It is now a named lemma because every small-discriminant enumeration on the B page reuses it.

No microlemma was manufactured for routine coefficient algebra. The right-action
law, the discriminant computation, and the \(x^2+2y^2\) congruence payoff are
all source-backed claims with their own mathematical use.

**Corollary pass.** It found two worthwhile additions and one explicit non-addition.

- Added `prop-discriminant-square-mod-four-n-criterion-for-primitive-representation`, the cleanest immediate payoff from the equivalence/discriminant machinery and the bridge needed for represented-prime examples.
- Added `cor-binary-quadratic-form-equivalence-is-decidable`, which is the honest algorithmic consequence of reduction plus uniqueness.
- Declined the source-backed \(x^2+3y^2\) and discriminant-\(-24\) prime criteria as required A-page material. The class-number-one discriminant-\(-8\) case is now built; the finer residue split between multiple reduced classes is recorded as an explicit `owner-decision` deferment rather than silently omitted.

The A page is nowhere near the 60-item ceiling, so no split is proposed.

## 3. Findings for the step-3 Alpha

Each finding is one decision recommendation, ordered by severity.

### Finding 1 — approve the new discriminant-square criterion and the \(x^2+2y^2\) payoff

**What is wrong in the design.** Frontier-17 explicitly deferred the `x^2+2y^2`
prime criterion to this page, but the NT-6 design as written never supplies the
Granville Proposition 4.1 bridge from primitive representation to a square
discriminant modulo \(4n\), so the payoff still cannot be built honestly.

**What I propose.** Approve `prop-discriminant-square-mod-four-n-criterion-for-primitive-representation`
on the A page and `ex-primes-represented-by-x-squared-plus-two-y-squared` on the
B page, with the exact table edits in NT6-1 and NT6-3 above.

**If declined.** The page re-defers a result already deferred to it, and the
companion loses the one clean represented-prime example whose proof actually
closes from the harvested sources and the published reciprocity pages.

### Finding 2 — approve the reduction/uniqueness decomposition

**What is wrong in the design.** The design's two main theorems each hide
source-visible subclaims: the reduction step itself, minimality of the leading
coefficient, and the boundary-case equality analysis. Leaving them inline makes
Step 5 harder and Step 6 less auditable.

**What I propose.** Approve the A-page table replacement in NT6-2 above.

**If declined.** Step 5 receives two long proofs with their internal claims
unscaffolded, and the bound lemma keeps a stronger \(c\)-claim than the cited
sources actually support.

### Finding 3 — approve the intrinsic positivity definition instead of copying Stein's convention as-is

**What is wrong in the design if copied mechanically.** Stein's §9.2.4 packages
"definite" through the sign of the discriminant; Granville states the same
criterion. The page, however, is about positive-definite forms as an actual
positivity property on \(\mathbb R^2\), and the proof obligations later use that
intrinsic meaning.

**What I propose.** Keep `def-positive-definite-binary-quadratic-form` as the
intrinsic positivity definition and make `prop-positive-definite-binary-form-criterion`
the equivalence to \(a>0\) and \(\Delta<0\).

**If declined.** The page still works mathematically, but its foundational
definition is copied from one source convention instead of stating the property
the later proofs and examples actually use.

### Finding 4 — decline the further Granville represented-prime exercises for this batch and record them as `owner-decision`

**What is wrong.** Granville 4.1h goes beyond the \(x^2+2y^2\) case and asks for
prime criteria for \(x^2+3y^2\) and the two discriminant-\(-24\) reduced forms.
Those are mathematically on-topic, but they are not needed to close the
reduction/class-number story or the already deferred \(-8\) seam.

**What I propose.** Keep the explicit `owner-decision` deferrals now recorded in
`research/frontier-19-batch-2.coverage.json`.

**If declined.** Step 5 grows another residue-splitting branch with no planned
downstream home and no further scaffold support, which is exactly the kind of
topic creep the owner now wants caught at step 2 rather than after authoring.

## 4. Forward references kept

None. This batch keeps no `planned-later` or forward-reference dependency.

## 5. New ids proposed

The exact reuse check run was:

    rg -n 'def-binary-quadratic-form-over-integers|def-integer-represented-by-binary-quadratic-form|def-primitive-binary-quadratic-form|def-discriminant-of-binary-quadratic-form|prop-binary-quadratic-form-discriminants-modulo-four|def-principal-binary-quadratic-form|def-proper-equivalence-of-binary-quadratic-forms|lem-binary-quadratic-form-substitution-is-a-right-action|thm-proper-equivalence-preserves-representations|prop-proper-equivalence-preserves-discriminant-and-primitivity|prop-discriminant-square-mod-four-n-criterion-for-primitive-representation|def-positive-definite-binary-quadratic-form|prop-positive-definite-binary-form-criterion|def-reduced-positive-definite-binary-quadratic-form|lem-gauss-reduction-step-improves-a-positive-definite-form|thm-reduction-of-positive-definite-binary-quadratic-forms|lem-leading-coefficient-is-minimal-in-a-reduced-class|lem-reduced-forms-with-the-same-leading-coefficient-are-equal|thm-unique-reduced-positive-definite-binary-quadratic-form|lem-leading-coefficient-bound-for-a-reduced-form|cor-finiteness-of-positive-definite-binary-form-classes|def-binary-quadratic-form-class-number|cor-binary-quadratic-form-equivalence-is-decidable|ex-reducing-a-large-binary-quadratic-form|ex-reduced-forms-of-discriminant-minus-four|ex-reduced-forms-of-discriminant-minus-eight|ex-primes-represented-by-x-squared-plus-two-y-squared|ex-reduced-forms-of-discriminant-minus-twenty|ex-reduced-forms-of-discriminant-minus-twenty-three|cex-same-discriminant-does-not-imply-proper-equivalence|cex-same-represented-integers-do-not-imply-proper-equivalence|ex-proper-versus-improper-equivalence-of-forms|cex-indefinite-classes-have-cycles-of-reduced-forms' items research/plan-spec.json

It returned no matches. All 33 ids are new to both the live item pool and the
plan spec.

## 6. Cross-batch dependencies

None. This batch needs nothing from another frontier-19 batch, and I do not see
another current batch depending on these items at Step 2.

## 7. Confidence statement

High on the mathematical scaffold, the reading-order closure, and the source
harvest. Lower on two points that are explicitly recorded rather than hidden:

- the DNS blocker means the fetch stamps are still missing, even though the
  full texts were opened and read through web research;
- the indefinite-cycle counterexample is scaffolded from Granville's explicit
  §4.6 convention and example, but I did not yet author the exact cycle on
  disk, so Step 5 must re-open that source before final wording.

I did verify the spliced-manifest shape locally:

- `node tools/splice-plan.mjs --run frontier-19 --batch 2 --dry-run` — 2 pages spliced, 0 already correct, 33 items.
- A temp spliced copy at `/tmp/frontier-19-batch-2-spliced-plan.json` makes
  `node tools/validate-plan.mjs /tmp/frontier-19-batch-2-spliced-plan.json`
  exit `0`; its only output is the repo's standing `redundant-prereq` warnings.
- `node tools/depsource.mjs ../../../../tmp/frontier-19-batch-2-spliced-plan.json --page positive-definite-binary-quadratic-forms-and-reduction`
  reports 8 published external deps, 0 planned-earlier, 0 planned-later,
  0 unresolved.

The Step-5/6-only proof-contract tools behave exactly as expected at scaffold
time:

- `node tools/proof-contract.mjs research/frontier-19-batch-2.proof-contracts.json --strict` — 24 `item-missing` errors, because no draft items exist yet.
- `node tools/finite-smoke.mjs research/frontier-19-batch-2.proof-contracts.json` — 0 checks over 0 authored items.
- `node tools/risk-report.mjs research/frontier-19-batch-2.proof-contracts.json` — 24 `item-missing` errors for the same reason.

## 8. Web research ledger and dependency closure

### Web source ledger

1. William Stein, *Elementary Number Theory and Elliptic Curves* (2003), Chapter 9  
   `https://wstein.org/edu/Fall2002/124/stein/main-05-2003.pdf`
   - Supports the equivalence definition, representation invariance, discriminant,
     principal form, reduced-form definition, reduction/uniqueness theorem, class
     finiteness, primitive forms, and the class-number definition.
   - Also supplies the two worked counterexample/example seeds:
     `(458,214,25)` and the pair `(2,1,3)`, `(2,-1,3)`.

2. Andrew Granville, Chapter 4 course notes, *Binary Quadratic Forms*  
   `https://dms.umontreal.ca/~andrew/Courses/Chapter4.pdf`
   - Supports the discriminant-square-mod-\(4n\) criterion, the Gauss reduction
     algorithm, the leading-coefficient minimality claim, the reduced-form
     uniqueness decomposition, the small-discriminant worked examples, the
     \(x^2+2y^2\) represented-prime example, and the indefinite-cycle warning.

3. Encyclopedia of Mathematics, *Binary quadratic form*  
   `https://encyclopediaofmath.org/wiki/Binary_quadratic_form`
   - Convention tiebreaker only: discriminant normalization, determinant
     \(\pm1\) versus \(+1\) equivalence, and the warning that indefinite
     reduction behaves differently from the positive-definite theory.

### Convention disagreements found

- **Discriminant normalization.** Stein and Granville use \(\Delta=b^2-4ac\).
  The encyclopedia records the Kronecker-style \(ac-b^2/4\) normalization as
  well. This batch adopts \(\Delta=b^2-4ac\) and says so explicitly.
- **Proper versus improper equivalence.** Stein and Granville use determinant
  \(+1\) for the class relation developed on this page. The encyclopedia also
  records determinant \(\pm1\) as a coarser equivalence. The B page now makes
  that distinction explicit with `ex-proper-versus-improper-equivalence-of-forms`.
- **Positive-definite definition.** Stein packages definiteness by sign of the
  discriminant in §9.2.4; the page instead defines positive definiteness
  intrinsically on \(\mathbb R^2\) and proves the coefficient criterion next.
- **Indefinite reduction.** Granville §4.6 warns that positive-discriminant
  classes generally cycle through several reduced forms. The page records that as
  an explicit counterexample instead of overextending the positive-definite
  uniqueness theorem.

### Published dependency closure

Every load-bearing published dependency in the manifest was opened from disk and
checked for `status: published`. The published ids actually used are:

- `def-common-divisor-and-gcd`
- `def-congruence-modulo-an-integer`
- `lem-congruence-respects-integer-arithmetic`
- `thm-matrix-multiplication-laws`
- `lem-coprime-criterion`
- `thm-first-supplement-to-quadratic-reciprocity`
- `thm-second-supplement-to-quadratic-reciprocity`

I also opened the prerequisite page files
`library/abstract-algebra/group-actions-and-cayleys-theorem.md`,
`library/linear-algebra/matrices-and-the-matrix-of-a-linear-map.md`,
`library/number-theory/lagrange-four-square-theorem.md`, and
`library/number-theory/lagrange-four-square-theorem-examples.md`, plus the
published number-theory seam pages that had previously deferred into NT-6.

No published dependency in this batch has `provenance.statement: ai-generated`,
and none is legacy-unclassified. Every load-bearing dependency is either earlier
on this same A/B pair or already published on a strictly earlier page. There is
no external-fallback `proved_here: false` item and no forward reference.

## 9. Planned component provenance and Step-5 source rationale

No planned item in this batch has `provenance.statement: ai-generated`, so there
is no AI-statement truth-risk or counterexample-search obligation beyond the
ordinary mathematical checking already done here.

### A page

| Item | Statement | Proof | Rationale and Step-5 reference |
|---|---|---|---|
| `def-binary-quadratic-form-over-integers` | literature-derived | not-applicable | Standard notation from Stein §9.2.1 and Granville §4.1; cite Stein and Granville. |
| `def-integer-represented-by-binary-quadratic-form` | literature-derived | not-applicable | Standard representation and primitive-representation language from Stein/Granville; cite Stein and Granville. |
| `def-primitive-binary-quadratic-form` | literature-derived | not-applicable | Stein Def. 9.4.2; cite Stein. |
| `def-discriminant-of-binary-quadratic-form` | literature-derived | not-applicable | Stein Def. 9.2.6 and Granville §4.1; cite Stein and Granville. |
| `prop-binary-quadratic-form-discriminants-modulo-four` | literature-derived | ai-altered | Stein Prop. 9.2.9 gives the exact statement; the proof is re-expressed with the library’s congruence vocabulary. |
| `def-principal-binary-quadratic-form` | literature-derived | not-applicable | Stein Def. 9.2.10; cite Stein. |
| `def-proper-equivalence-of-binary-quadratic-forms` | literature-derived | not-applicable | Stein Def. 9.2.2 / Granville §4.1. The page fixes determinant \(+1\) as “proper.” |
| `lem-binary-quadratic-form-substitution-is-a-right-action` | literature-derived | ai-altered | Stein Prop. 9.2.3, rewritten with explicit right-action equations and the published matrix-multiplication law. |
| `thm-proper-equivalence-preserves-representations` | literature-derived | ai-altered | Stein Prop. 9.2.4 / Granville Ex. 4.1d. Primitive-representation wording is carried explicitly. |
| `prop-proper-equivalence-preserves-discriminant-and-primitivity` | ai-altered | ai-altered | Stein Prop. 9.2.8 gives the discriminant claim; the coefficient-ideal primitivity clause is extracted from the same substitution formulas and Granville’s setup. |
| `prop-discriminant-square-mod-four-n-criterion-for-primitive-representation` | ai-altered | ai-altered | Granville Prop. 4.1 says “properly represented”; the page rewrites that to its primitive-representation convention and proves it with the published Bézout/coprimality lemma. |
| `def-positive-definite-binary-quadratic-form` | literature-derived | not-applicable | Standard intrinsic positivity condition from Granville §4.1; Stein’s sign convention is mentioned only as the later criterion. |
| `prop-positive-definite-binary-form-criterion` | literature-derived | ai-altered | Stein §9.2.4 / Granville §4.1; proof via completed square written out locally. |
| `def-reduced-positive-definite-binary-quadratic-form` | literature-derived | not-applicable | Stein Def. 9.3.1 and Granville’s equivalent boundary convention. |
| `lem-gauss-reduction-step-improves-a-positive-definite-form` | ai-altered | ai-generated | Extracted from Stein §9.3.2 and Granville’s algorithm (4.1.1); the exact “reduction measure” phrasing is local. |
| `thm-reduction-of-positive-definite-binary-quadratic-forms` | literature-derived | ai-altered | Stein Thm. 9.3.2 existence half; proof split to cite the preceding improvement lemma. |
| `lem-leading-coefficient-is-minimal-in-a-reduced-class` | ai-altered | ai-generated | Source-backed subclaim from Stein Thm. 9.3.2 / Granville Ex. 4.1f(a). |
| `lem-reduced-forms-with-the-same-leading-coefficient-are-equal` | ai-altered | ai-generated | Source-backed subclaim from Stein Thm. 9.3.2 / Granville Ex. 4.1f(b). |
| `thm-unique-reduced-positive-definite-binary-quadratic-form` | literature-derived | ai-altered | Stein Thm. 9.3.2 / Granville Ex. 4.1f(c), now consuming the two focused lemmas. |
| `lem-leading-coefficient-bound-for-a-reduced-form` | ai-altered | ai-generated | Extracted from Stein’s proof of Prop. 9.4.1; the page keeps only the justified \(a\)-bound. |
| `cor-finiteness-of-positive-definite-binary-form-classes` | literature-derived | ai-altered | Stein Prop. 9.4.1, proved from uniqueness plus the bound lemma. |
| `def-binary-quadratic-form-class-number` | literature-derived | not-applicable | Stein Def. 9.4.3; cite Stein. |
| `cor-binary-quadratic-form-equivalence-is-decidable` | ai-altered | ai-generated | Immediate algorithmic consequence of reduction plus uniqueness; source-backed by Stein’s reduction theory but formulated locally as a decision result. |

### B page

| Item | Statement | Proof | Rationale and Step-5 reference |
|---|---|---|---|
| `ex-reducing-a-large-binary-quadratic-form` | literature-derived | ai-altered | Stein Ex. 9.2.5 / 9.3.3. |
| `ex-reduced-forms-of-discriminant-minus-four` | ai-altered | ai-generated | Granville Ex. 4.1g motivates the discriminant choice; the exact worked enumeration is local. |
| `ex-reduced-forms-of-discriminant-minus-eight` | ai-altered | ai-generated | Granville Ex. 4.1g and the page’s own reduction/class-number machinery. |
| `ex-primes-represented-by-x-squared-plus-two-y-squared` | literature-derived | ai-altered | Granville Ex. 4.1h exact payoff, written through the page’s discriminant-square criterion and the published reciprocity supplements. |
| `ex-reduced-forms-of-discriminant-minus-twenty` | ai-altered | ai-generated | Granville Ex. 4.1g source-backed choice of discriminant; worked enumeration local. |
| `ex-reduced-forms-of-discriminant-minus-twenty-three` | ai-altered | ai-generated | Granville Ex. 4.1g source-backed choice; worked enumeration local. |
| `cex-same-discriminant-does-not-imply-proper-equivalence` | literature-derived | ai-altered | Stein’s explicit nonconverse to Prop. 9.2.8. |
| `cex-same-represented-integers-do-not-imply-proper-equivalence` | literature-derived | ai-altered | Stein Ex. 9.3.4. |
| `ex-proper-versus-improper-equivalence-of-forms` | ai-altered | ai-generated | Source-backed from the determinant-\(-1\) convention comparison in Granville/EoM, but the exact worked pairing with the previous counterexample is local. |
| `cex-indefinite-classes-have-cycles-of-reduced-forms` | literature-derived | ai-altered | Granville §4.6 and the encyclopedia’s indefinite-reduction warning; Step 5 must re-open the exact cycle before authoring. |

## Continuity checkpoint

- **Current substage:** step-1/2 scaffold complete; manifest, coverage harvest, proof contracts, and notes all written.
- **Owned artifact paths:** unchanged.
- **Completed checks:** `content-policy --manifest-only` clean; `coverage-checklist --require-destination` clean; `splice-plan --dry-run` clean; temp-spliced `validate-plan` exit 0; page-filtered `depsource` reports 8 published deps, 0 unresolved, 0 planned-later; `prosecheck` on this notes file clean. `source-fetch-check --stamp` blocked by `EAI_AGAIN` on all three source URLs. `proof-contract --strict`, `finite-smoke`, and `risk-report` were run and behave as expected before item authoring: `item-missing` on the first and third, 0 checks on the second.
- **Open mathematical/dependency constraints:** none in the scaffold itself. The only unresolved gate input is the missing fetch stamps, which is a network/DNS blocker rather than a mathematical one.
- **Exact next action:** Step 3 Alpha should adjudicate Findings 1–4, especially the inserted discriminant-square criterion and the B-page enrichment; Step 5 author should begin from the provenance tables and the exact source ledger above, then re-open Granville §4.6 before writing the indefinite-cycle counterexample.

## Continuity checkpoint

- **Current substage:** step-5 authoring; all 33 owned item files and both owned page files are now on disk in draft status.
- **Owned artifact paths:** `items/def-binary-quadratic-form-over-integers.md`, `items/def-integer-represented-by-binary-quadratic-form.md`, `items/def-primitive-binary-quadratic-form.md`, `items/def-discriminant-of-binary-quadratic-form.md`, `items/prop-binary-quadratic-form-discriminants-modulo-four.md`, `items/def-principal-binary-quadratic-form.md`, `items/def-proper-equivalence-of-binary-quadratic-forms.md`, `items/lem-binary-quadratic-form-substitution-is-a-right-action.md`, `items/thm-proper-equivalence-preserves-representations.md`, `items/prop-proper-equivalence-preserves-discriminant-and-primitivity.md`, `items/prop-discriminant-square-mod-four-n-criterion-for-primitive-representation.md`, `items/def-positive-definite-binary-quadratic-form.md`, `items/prop-positive-definite-binary-form-criterion.md`, `items/def-reduced-positive-definite-binary-quadratic-form.md`, `items/lem-gauss-reduction-step-improves-a-positive-definite-form.md`, `items/thm-reduction-of-positive-definite-binary-quadratic-forms.md`, `items/lem-leading-coefficient-is-minimal-in-a-reduced-class.md`, `items/lem-reduced-forms-with-the-same-leading-coefficient-are-equal.md`, `items/thm-unique-reduced-positive-definite-binary-quadratic-form.md`, `items/lem-leading-coefficient-bound-for-a-reduced-form.md`, `items/cor-finiteness-of-positive-definite-binary-form-classes.md`, `items/def-binary-quadratic-form-class-number.md`, `items/cor-binary-quadratic-form-equivalence-is-decidable.md`, `items/ex-reducing-a-large-binary-quadratic-form.md`, `items/ex-reduced-forms-of-discriminant-minus-four.md`, `items/ex-reduced-forms-of-discriminant-minus-eight.md`, `items/ex-primes-represented-by-x-squared-plus-two-y-squared.md`, `items/ex-reduced-forms-of-discriminant-minus-twenty.md`, `items/ex-reduced-forms-of-discriminant-minus-twenty-three.md`, `items/cex-same-discriminant-does-not-imply-proper-equivalence.md`, `items/cex-same-represented-integers-do-not-imply-proper-equivalence.md`, `items/ex-proper-versus-improper-equivalence-of-forms.md`, `items/cex-indefinite-classes-have-cycles-of-reduced-forms.md`, `library/number-theory/positive-definite-binary-quadratic-forms-and-reduction.md`, `library/number-theory/positive-definite-binary-quadratic-forms-and-reduction-examples.md`, `research/frontier-19-batch-2.notes.md`, `research/frontier-19-batch-2.coverage.json`, and `research/frontier-19-batch-2.proof-contracts.json`.
- **Completed gates:** scoped `reflow` and `precheck` pass on all 33 owned item files. The A-page theory spine and the B-page companion each passed their own scoped precheck runs on August 25, 2026.
- **Frozen-text state:** all titles and statements are drafted. One deliberate scaffold change is already on disk: `prop-discriminant-square-mod-four-n-criterion-for-primitive-representation` now states the positive-integer hypothesis explicitly in its title and Statement because the unrestricted version is false at `n=0`.
- **Open mathematical constraints:** the proof-contract file has not yet been synchronized to the final item text; the coverage and step-5 report still need the title/dependency ledger for the authored batch; repository-wide gates have not yet been run.
- **Exact next action:** update `research/frontier-19-batch-2.proof-contracts.json` to the final 24 proof-bearing items, then refresh the notes/coverage/report sections and run the required scoped gates plus the batch-manifest checks.

## Step-3 fix pass

Alpha group `b` marked batch `2` (`positive-definite-binary-quadratic-forms-and-reduction`)
as `sufficient` with `findings: none` in
`research/frontier-19-alpha-b-step3-scaffold-review.md`. No numbered finding ids
were issued for this batch, so the fix pass applied no scaffold changes.

## Step-5 authoring

### Per-item list

- `def-binary-quadratic-form-over-integers` — `precheck: n/a`
- `def-integer-represented-by-binary-quadratic-form` — `precheck: n/a`
- `def-primitive-binary-quadratic-form` — `precheck: n/a`
- `def-discriminant-of-binary-quadratic-form` — `precheck: n/a`
- `prop-binary-quadratic-form-discriminants-modulo-four` — `precheck: pass`
- `def-principal-binary-quadratic-form` — `precheck: n/a`
- `def-proper-equivalence-of-binary-quadratic-forms` — `precheck: n/a`
- `lem-binary-quadratic-form-substitution-is-a-right-action` — `precheck: pass`
- `thm-proper-equivalence-preserves-representations` — `precheck: pass`
- `prop-proper-equivalence-preserves-discriminant-and-primitivity` — `precheck: pass`
- `prop-discriminant-square-mod-four-n-criterion-for-primitive-representation` — `precheck: pass`
- `def-positive-definite-binary-quadratic-form` — `precheck: n/a`
- `prop-positive-definite-binary-form-criterion` — `precheck: pass`
- `def-reduced-positive-definite-binary-quadratic-form` — `precheck: n/a`
- `lem-gauss-reduction-step-improves-a-positive-definite-form` — `precheck: pass`
- `thm-reduction-of-positive-definite-binary-quadratic-forms` — `precheck: pass`
- `lem-leading-coefficient-is-minimal-in-a-reduced-class` — `precheck: pass`
- `lem-reduced-forms-with-the-same-leading-coefficient-are-equal` — `precheck: pass`
- `thm-unique-reduced-positive-definite-binary-quadratic-form` — `precheck: pass`
- `lem-leading-coefficient-bound-for-a-reduced-form` — `precheck: pass`
- `cor-finiteness-of-positive-definite-binary-form-classes` — `precheck: pass`
- `def-binary-quadratic-form-class-number` — `precheck: n/a`
- `cor-binary-quadratic-form-equivalence-is-decidable` — `precheck: pass`
- `ex-reducing-a-large-binary-quadratic-form` — `precheck: pass`
- `ex-reduced-forms-of-discriminant-minus-four` — `precheck: pass`
- `ex-reduced-forms-of-discriminant-minus-eight` — `precheck: pass`
- `ex-primes-represented-by-x-squared-plus-two-y-squared` — `precheck: pass`
- `ex-reduced-forms-of-discriminant-minus-twenty` — `precheck: pass`
- `ex-reduced-forms-of-discriminant-minus-twenty-three` — `precheck: pass`
- `cex-same-discriminant-does-not-imply-proper-equivalence` — `precheck: pass`
- `cex-same-represented-integers-do-not-imply-proper-equivalence` — `precheck: pass`
- `ex-proper-versus-improper-equivalence-of-forms` — `precheck: pass`
- `cex-indefinite-classes-have-cycles-of-reduced-forms` — `precheck: pass`

### Ledger

- `prop-discriminant-square-mod-four-n-criterion-for-primitive-representation` changed title and Statement from the scaffold’s unrestricted “some discriminant `Δ` form primitively represents `n`” wording to the positive-integer form actually proved. Reason: the unrestricted claim is false at `n = 0`, while Granville’s proposition is a positive-`n` criterion.
- `thm-reduction-of-positive-definite-binary-quadratic-forms` added `thm-well-ordering-principle` to `deps`. Reason: the final termination proof explicitly chooses a least reduction measure and cannot honestly treat that as algebra.
- `lem-leading-coefficient-bound-for-a-reduced-form` added `prop-positive-definite-binary-form-criterion` to `deps`. Reason: the final proof uses `\Delta < 0` to rewrite `|\Delta|` as `4ac-b^2`.
- `ex-primes-represented-by-x-squared-plus-two-y-squared` added `thm-proper-equivalence-preserves-representations`, `thm-legendre-symbol-multiplicativity`, and `def-legendre-symbol` to `deps`. Reason: the reciprocity supplements alone do not license the move from congruence classes to a square root of `-2` modulo `p`, nor the transfer of representation from an arbitrary discriminant-`-8` form to `x^2+2y^2`.
- `prop-proper-equivalence-preserves-discriminant-and-primitivity` dropped the scaffold dep `def-common-divisor-and-gcd`. Reason: the final proof transports common divisors directly through the substitution formulas and does not use the published gcd definition.
- `library/number-theory/positive-definite-binary-quadratic-forms-and-reduction.md` cleared `examples:` to `[]`. Reason: published A/B pairs in number theory keep example ownership on the B page; leaving the A page list populated created a batch-local page cycle in `depcheck`.
- No planned item was dropped or merged. No external-fallback `proved_here: false` item was introduced. No published dependency was edited.

### Final provenance

- `def-binary-quadratic-form-over-integers`, `def-integer-represented-by-binary-quadratic-form`, `def-discriminant-of-binary-quadratic-form`, `def-proper-equivalence-of-binary-quadratic-forms`, `def-positive-definite-binary-quadratic-form`, `def-reduced-positive-definite-binary-quadratic-form`, `def-binary-quadratic-form-class-number` — `literature-derived / not-applicable`; Stein Ch. 9 and Granville Ch. 4 definitions, with only local notation normalization.
- `def-primitive-binary-quadratic-form`, `def-principal-binary-quadratic-form` — `literature-derived / not-applicable`; Stein Defs. 9.4.2 and 9.2.10, with direct library wording.
- `prop-binary-quadratic-form-discriminants-modulo-four` — `literature-derived / literature-derived`; Stein Prop. 9.2.9, restated in the library’s congruence language.
- `lem-binary-quadratic-form-substitution-is-a-right-action` — `literature-derived / literature-derived`; Stein Prop. 9.2.3 / Granville Ex. 4.1d, written as explicit right-action equations using the published matrix product laws.
- `thm-proper-equivalence-preserves-representations` — `literature-derived / ai-altered`; Stein Prop. 9.2.4 / Granville Ex. 4.1d, with the primitive-representation clause written out locally.
- `prop-proper-equivalence-preserves-discriminant-and-primitivity` — `ai-altered / ai-altered`; Stein Prop. 9.2.8 supplies the discriminant half, and the primitivity half is a local extraction from the same substitution formulas.
- `prop-discriminant-square-mod-four-n-criterion-for-primitive-representation` — `ai-altered / ai-altered`; Granville Prop. 4.1 is adapted from “properly represented” to the page’s primitive-representation convention, with the positive-`n` restriction made explicit.
- `prop-positive-definite-binary-form-criterion` — `literature-derived / ai-altered`; Stein §9.2.4 / Granville §4.1, with the completed-square proof written locally.
- `lem-gauss-reduction-step-improves-a-positive-definite-form` — `ai-altered / ai-generated`; extracted from Stein §9.3.2 and Granville’s algorithm (4.1.1), with the exact reduction measure formulated locally.
- `thm-reduction-of-positive-definite-binary-quadratic-forms` — `literature-derived / ai-altered`; Stein Thm. 9.3.2 existence half, now factored through the explicit improvement lemma and a published well-ordering step.
- `lem-leading-coefficient-is-minimal-in-a-reduced-class`, `lem-reduced-forms-with-the-same-leading-coefficient-are-equal`, `lem-leading-coefficient-bound-for-a-reduced-form` — `ai-altered / ai-generated`; source-backed subclaims extracted from Stein Thm. 9.3.2 / Prop. 9.4.1 and Granville Ex. 4.1f, with local direct proofs.
- `thm-unique-reduced-positive-definite-binary-quadratic-form`, `cor-finiteness-of-positive-definite-binary-form-classes`, `cor-binary-quadratic-form-equivalence-is-decidable` — `literature-derived / ai-altered`; Stein Thm. 9.3.2 / Prop. 9.4.1, reorganized through the focused lemmas on this page.
- `ex-reducing-a-large-binary-quadratic-form` — `literature-derived / ai-altered`; Stein Exs. 9.2.5 and 9.3.3, with the full reduction chain and composite matrix written out locally.
- `ex-reduced-forms-of-discriminant-minus-four`, `ex-reduced-forms-of-discriminant-minus-eight`, `ex-reduced-forms-of-discriminant-minus-twenty`, `ex-reduced-forms-of-discriminant-minus-twenty-three` — `ai-altered / ai-generated`; the discriminant choices are source-backed by Stein/Granville, while the finite enumerations are local calculations from the page’s own reduction and class-number machinery.
- `ex-primes-represented-by-x-squared-plus-two-y-squared` — `literature-derived / ai-altered`; Granville Ex. 4.1h, proved through the page’s discriminant-`-8` machinery and the published reciprocity supplements plus Legendre-symbol multiplicativity.
- `cex-same-discriminant-does-not-imply-proper-equivalence` — `literature-derived / ai-altered`; Stein’s explicit nonconverse after Prop. 9.2.8, with the representation-separation proof written locally.
- `cex-same-represented-integers-do-not-imply-proper-equivalence` — `literature-derived / ai-altered`; Stein Ex. 9.3.4, with the represented-set comparison written as an explicit substitution identity.
- `ex-proper-versus-improper-equivalence-of-forms` — `ai-altered / ai-generated`; Granville’s determinant-`-1` convention applied to the preceding reduced-form pair.
- `cex-indefinite-classes-have-cycles-of-reduced-forms` — `literature-derived / ai-altered`; Granville §4.6, with the reduced-form pair and the determinant-one matrix written explicitly on the page.

### Gates

- `node tools/tsx-run.mjs tools/precheck.mts items/<33 owned ids>`: pass on all 24 proof-bearing items; 9 definition items correctly remain `precheck: n/a`.
- `node tools/proof-contract.mjs research/frontier-19-batch-2.proof-contracts.json --strict`: 0 errors, 1 warning (`shotgun-bracket` on `ex-primes-represented-by-x-squared-plus-two-y-squared`).
- `node tools/coverage-checklist.mjs research/frontier-19-batch-2.coverage.json`: pass, 58 harvested results, 0 errors, 0 warnings.
- `node tools/content-policy.mjs research/frontier-19-batch-2.pages.json`: pass, 33 scoped items, 0 errors, 0 warnings.
- `node tools/validate-plan.mjs research/plan-spec.json`: pass.
- `node tools/prosecheck.mjs <33 item files + 2 page files> --warnings`: pass, 35 files checked, 0 errors, 0 warnings.
- `node tools/depcheck.mjs`: still red outside this batch. After the A-page frontmatter repair, batch-2’s own page cycle is gone; the remaining 9 errors are elsewhere, including the batch-3 Kummer page cycle and unrelated published/library issues.
- `node tools/fwdcheck.mjs`: still red outside this batch with 1 unrelated `link-unplanned` error; no batch-2 id is named.
- `node tools/extcheck.mjs`: no batch-2 id is named.
- `node tools/citecheck.mjs`: no batch-2 id is named; the reported warnings are unrelated heuristic triage elsewhere in the repository.

### Escalations

- No batch-local mathematical blocker remains.
- Batch-local scaffold correction already applied: the discriminant-square criterion is authored only for positive integers `n`.
- Repository-wide dependency gates remain non-green for reasons outside batch 2, as recorded under **Gates**. I did not edit those external items or pages.

### Confidence

- Confidence is high on the batch-local mathematical spine: every owned proof-bearing item is authored, precheck-clean, and contract-clean; the source-backed routes were checked against the harvested Stein/Granville scope, and Granville §4.6 was reopened directly before authoring the indefinite-cycle counterexample.
- I did not run judges, Alpha risk routing, or any publish/audit metadata update; those belong to later stages.
- I did not independently fetch fresh source stamps for the three harvested URLs in this runtime; the earlier `source-fetch-check --stamp` DNS blocker remains historical context from scaffold time, not a resolved fetch receipt from step 5.
