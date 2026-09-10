# Group g — current final scaffold adjudication

Run `phase-2-catchup-24`; batches 14, 15, 16; dispatch `scaffold-final-g-7d70f31f45c71ce5`.

This report supersedes the stale final report for dispatch `ef88bb20dba82588`. The earlier arithmetic repair is already present in the current manifest and plan. The formerly missing Boolean extension and SET-30 constructions are now present; the old missing-inventory findings must not be carried forward as current defects. No owner-decision JSON was present for these five A pages. The current binding SET-30 prose retains the original pair, with 60 A items and four B items.

## Decisions

| Batch | A page | Current outcome | A/B items |
|---|---|---|---|
| 14 | arithmetization-incompleteness-and-relative-consistency | accept | 28/5 |
| 14 | reflection-absoluteness-and-elementary-submodels | accept | 18/5 |
| 15 | boolean-algebras-stone-duality-and-the-prime-ideal-theorem | accept | 27/3 |
| 15 | pcf-scales-and-zfc-dowker-spaces | repaired | 60/4 |
| 16 | borel-analytic-sets-perfect-sets-and-determinacy | accept | 60/5 |

All five ordinary verdicts are sufficient. These are decisions on the current scaffolds, not publication of their claims or approval of unrelated published consumers.

## Applied repair and exact inventory comparison

The only mathematical edit in this dispatch is in `research/phase-2-catchup-24-batch-15.pages.json`, `lem-small-dowker-coloring-gives-ad-guessing.strategy`, section 5c. It formerly invoked Fodor's lemma without declaring it. It now proves the needed pressing-down instance inline: take the least regressive bound at each failing index; if all fibres were nonstationary, choose clubs avoiding them and intersect diagonally; a stationary-domain point in that diagonal club lies in the club avoiding its own fibre, a contradiction. This uses exactly the already declared `thm-diagonal-intersection-of-clubs` and AC, together with the stationary-set definitions. The published `items/thm-fodor-pressing-down.md` and `items/thm-diagonal-intersection-of-clubs.md` were read; their ZFC hypotheses and regression convention agree with the inline argument. No undeclared Fodor supplier remains.

The ordered IDs, statements, dependencies, hypotheses and inventory sizes of all ten manifests agree with their canonical plan entries. Comparing complete item objects gives exactly one difference: this applied strategy expansion. No new prerequisite pair, shared-plan inventory amendment, published edit, or weakening is needed. The final scaffold hash includes both the current manifest strategy and the canonical plan entry. The earlier arithmetic corrections and new Boolean/PCF contracts were supplied before this dispatch, not repairs claimed here.

## Arithmetic and reflection

The arithmetic proof keeps the distinction between Q numeralwise representability and PA-provable equivalence to a syntactic Sigma1 formula. The beta-history recursion uses existential initial/successor clauses and the least-output strengthening; finite Q numeral cases yield the required uniqueness uniformly in the other inputs. For D3, the PA equivalence to a syntactic Sigma1 formula is followed by a Q certificate, embedding into T, and appending the fixed PA implication. It does not infer Q equivalence from PA equivalence. D1, D2, diagonalization, Rosser and Löb precede the second-incompleteness and interpretation applications. The external strengthened-consistency hypothesis of the transitive-model counterexample remains explicit. Sentinel syntax coding is proved locally, without the unbuilt primitive-recursion page.

Source comparison: [Moschovakis, Lecture Notes in Logic](https://www.math.ucla.edu/~ynm/lectures/lnl.pdf), 4B.11–12 and 4C.12–13, printed pp147–148 and 154–156, separates these representation strengths; [Avigad, Computability and Incompleteness](https://www.andrew.cmu.edu/user/avigad/Teaching/candi_notes.pdf), §4.3, pp90–100, is the independent full-note treatment. Existing coverage keeps the exact local coding receipts and dispositions rather than adopting the problematic printed variable pattern.

Reflection selects minimum witness ranks, uses Collection and then iterates ordinal bounds; it does not choose from proper classes. The finite recursion attempts are unique and their endpoints are collected by Replacement, so the omega iteration has a set range. `items/prop-minimum-rank-selection-and-collection.md` gives the exact ZF supplier. External Foundation and elementarity, respectively, justify well-foundedness and extensionality for collapse. The chain argument uses conjugate embeddings after collapse, not inclusions of all collapsed models. The published parameterized Löwenheim–Skolem theorem and its witness-hull proof were read: finite-arity set signatures, size bounds and AC agree with the countable-model uses. The local ZF absoluteness assertions do not consume that AC construction.

Backing remains [Geschke, Models of Set Theory](https://www.math.uni-hamburg.de/home/geschke/teaching/ModelsSetTheory.pdf), §4, Theorem 4.3, pp10–12, and the [Freiburg lecture notes](https://home.mathematik.uni-freiburg.de/maxwell/coursenotes-settheoryandindependenceproofs.pdf), §3.5, pp50–55. Condensation and Shoenfield remain orientation, not proof dependencies.

## Boolean pair

The current completion-extension theorem now supplies the missing one-element extension calculation. For a partial homomorphism h on E and x outside E, take v=sup{h(a):a in E,a<=x}; define the extension on (a meet x) join (b meet not-x) by (h(a) meet v) join (h(b) meet not-v). Equality of representatives forces the appropriate symmetric differences to vanish against v and its complement. Thus the map is well-defined and preserves the Boolean operations. Chain unions and Zorn then give an extension on the whole algebra. Density, order continuity on the original subalgebra, and adjoining the complement of a supremum prove preservation of arbitrary suprema and uniqueness. Zorn is no longer substituted for the extension calculation.

The regular-open algebra uses finite nowhere-dense unions and regular representatives; it does not import Baire-property sigma-algebra closure. BPI/UFL and compactness arguments retain choice-free finite partial assignments where appropriate; the extension theorem states AC separately. The independent treatments in coverage are [Tressl, Stone Duality for Boolean Algebras](https://personalpages.manchester.ac.uk/staff/Marcus.Tressl/papers/StoneDualityBooleanAlgebras.pdf), the Boolean/Stone representation sections, and [Fremlin, Measure Theory, Chapter 31](https://www1.essex.ac.uk/maths/people/fremlin/chap31.pdf), 312O, 314K and 314T. This dispatch's browser retry of the complete Fremlin chapter timed out; the accessible results-only file was not treated as a proof. The existing full-text fetch record was retained, and the actual inline extension calculation was checked directly. No new fetch/read stamp or source-drop claim was manufactured.

## PCF and Dowker pair

The current contracts supply the previously missing topology interfaces, general PCF, Balogh construction, conditional small spaces and all four Kojman–Shelah base bounds. The direct countable scale branch does not consume general generators or either later construction.

The general-PCF route distinguishes strict comparison, weak comparison and equality modulo an arbitrary proper ideal. The exact-bound argument uses minimal upper bounds and bounding projections, not completeness of the ideal. Positive-support restriction and larger-ideal transfer reset exceptional coordinates explicitly. Principal/small-coordinate cases are handled separately before applying the exact-bound theorem at lambda>|A|^+. Universal sequences, the strengthened universal sequence, the generator criterion, restriction, finite generation, scales and filter cofinality are in proof order. The no-holes conclusion is for progressive intervals, with its coordinate-cofinality and support changes stated; stronger unrestricted range or transitivity conclusions are not silently imported.

The complete relevant generator/no-holes arguments were compared with [Abraham–Magidor, Cardinal Arithmetic](https://winterschool.eu/files/3-Cardinal_Arithmetic.pdf), §2 projection/strong-increase machinery, Theorem 3.1, and §4 Theorems 4.2, 4.8, 4.11, 4.13 and Lemma 4.14. The local PDF has 88 pages and was text-extracted with PyMuPDF; the failed `pdftotext` command is not a reading receipt. The ordinary product-cofinality argument uses finite maxima of universal sequences and an ultrafilter contradiction. The finite/principal alternatives avoid the source's restrictive introductory simplifications.

The Balogh argument was checked against the complete [Hart set-theoretic topology notes](https://fa.ewi.tudelft.nl/~hart/onderwijs/old-courses/settop/settop.pdf), §5.2, printed pp31–34, Lemma 2.1 and Exercises 1–17. The local proofs repair the printed domains and indices: finite roots are sets of functions, traces are injective on N, M belongs to N, and the reflected family K intersect (N minus M) is infinite. A petal member in M uniquely determines its K-index, forcing that index into M; this establishes the exact root outside M. The combinatorial map is fixed before the test functions. Normality includes the extra top-level complement needed in the open-extension step and the correctly indexed finite-closure-removal assembly. The shrinking obstruction iterates A intersect Phi(A), not the generally false assumption A subset Phi(A). Its conclusion is hereditary normality and cardinality continuum, without CH or regularity of the continuum.

The original AMS Balogh paper remains a historical dropped source. Its recorded initial failure and five recovery attempts were inspected and reused; it was not represented as read. The active Hart treatment and the complete composite alternate argument retain the same final theorem and earlier local dependencies. The alternative is judged by those calculations, not by the original's unavailable proof or its confidence field. All local intermediate units remain in the manifest and source dispositions.

For small Dowker spaces the local countable-ladder walk proves exactly eventual coherence and bounded sublevel sets, without higher-cardinal nonreflection. The coloring proof preserves full finite-target stationary guessing and fills noncofinal rows while checking cross-row intersections; section 5c now contains the applied pressing-down repair. The strengthened-stick argument constructs its sequence before the target family, then supplies the diagonal guessing step. Ladder topology uses weak neighborhood tests, not a false open-basis claim. Countable tail disjointification, closed expansions, and the no-two-disjoint-uncountable-closed-sets argument establish normality and the shrinking obstruction. Ordinary diamond, Ostaszewski clubsuit, stick and the quantified AD systems keep their distinct hypotheses. No ordinary-club-guessing-only, diamond(b), or unconditional aleph-one theorem is asserted.

Relevant source routes are [Rinot–Shalev–Todorcevic](https://www.assafrinot.com/files/paper54.pdf), Theorem 3.3 and §4; [Rinot–Shalev](https://www.assafrinot.com/files/paper48.pdf), §3, especially the ladder normality/shrinking arguments on pp16–19; and the separately harvested coherent-coloring and strengthened-stick treatments recorded in coverage. The local arguments expand the required interfaces rather than merely citing their names. The scale-space invariant proof separately establishes local-base upper/lower bounds and global density/weight bounds; cardinality alone is not offered as weight. The aleph-one open-status remark remains explicitly dated.

## Descriptive set theory and determinacy

The Borel cover construction is ZFC. Its AD consequences do not depend on the ZFC Borel theorem. Residual trees keep the needed prefixes; taboo reflection has the correct target-to-source direction; strategy maps have the stated locality; inverse-limit lifts are coherent through successive stages. The closed-payoff accept/challenge construction handles both players and full histories. Compare [Buffard–Levrel–Mayo](https://arxiv.org/html/2401.09659v1), Definitions and Lemmas 1–7 through the final lift: the local proof does not repeat the source's independent-lift shortcut. The independently recorded Martin cover treatment and Marker's complete lecture notes remain active sources.

The AD category and perfect-set proofs use coded countable games with their explicit choice bounds. The rational measure game separates the zero-infimum case, controls summable errors, and uses the local dyadic/Borel-sandwich transfer to completed Lebesgue measure. [Martin, A simple proof that determinacy implies Lebesgue measurability](https://seminariomatematico.polito.it/rendiconti/61-4/393.pdf), pp393–396, Lemmas 1–2 and the rational-move conclusion, was read through the complete proof. The source's compressed infimum step is not a substitute for the local zero-case argument. The Hamel branch uses the actual published coefficient-map/kernel/nontrivial-complement statements of `items/lem-hamel-basis-exists.md`, with AC, rather than an unsupported additive-function claim.

## Dependency and scope adjudication

A fresh declared-closure traversal of 215 owned items reached 867 item contracts and 135 prerequisite pages. It found no missing item, unpublished outside-run supplier, recorded-catalogue reach, illegal page order or cross-batch edge. All three owned cross-batch input arrays remain empty. The 27 raw return edges through `justified_by` and construction definitions remain diagnostic, not a claim that raw metadata is a DAG: the raw relation/notation is available before its well-definedness proof, which supplies its promised structure. The prior construction-interface review remains relevant; the new pressing-down proof adds no edge. Body mentions of later generator consumers and the final theorem's independently proved diamond implication are not imported proof premises.

Actual load-bearing interfaces were distinguished from co-resident items. For example, Balogh uses the published parameterized elementary-submodel/hull route, not batch 14's reflection theorem; the real-line AD perfect-set transfer uses the ZF coding clause, not the DC measure clause; and the countable scale construction does not use the general-PCF generator branch. No Foundations proof reaches `deferred-set-theory-beyond-choice` or `rem-dowker-spaces` as a supplier.

All 57 current scope declines were refreshed and adjudicated. For the newly harvested PCF material, excluded trichotomy, Silver and inner-model-covering results concern different hypotheses/conclusions; stronger pcf transitivity and uncountable-cofinality representation are not needed for the proved progressive-interval or countable-scale claims. Exercise 4.15's least-generator clause is included locally; only its transitivity clause is excluded. Exercise 4.18's generalized-filter development is beyond the adopted range and is not a premise of the included everywhere-product cofinality proof. The small-space exclusions concern higher cardinals, extra MA/bounding/uniformization principles, stronger coloring variants, multiplicity of nonhomeomorphic spaces, or unrelated partition relations. Their needed omega-one special cases have explicit local proofs. Parameterized diamond(b) is distinct from ordinary diamond and is expressly absent from the current binding inventory. None of these scope decisions discharges a missing proof by exclusion.

## Published-consumer debt

`items/rem-dowker-spaces.md` remains Phase-3 consumer debt. Its exact eventual suppliers are `thm-dowker-product-characterization`, `thm-rudin-dowker-space-and-cardinality`, `thm-kojman-shelah-zfc-dowker-space`, `thm-kojman-shelah-space-weight-and-character`, `thm-balogh-continuum-sized-zfc-dowker-space`, `thm-small-dowker-conditional-aleph-one-constructions`, and the dated `rem-aleph-one-dowker-status-dated-audit` for literature status only. Replace the recorded clauses after publication, preserving cardinality and choice hypotheses. This updates the older notes' statement that Balogh/small-space supplier IDs were unavailable. The canonical consumer ledger and published content were not edited; batch-15 notes carry this reconciliation.

## Executed checks

The first five checks were rerun after the mathematical repair. Source records were unchanged by it.

| Check | Actual result |
|---|---|
| `manifest-deps` on all run batch manifests | exit 0; 735 items, zero errors |
| `content-policy --manifest-only` on batches 14–16 | exit 0; 215 scoped items, zero errors/warnings |
| `coverage-checklist --require-destination` on batches 14–16 | exit 0; 5 pages, 363 harvested results, zero errors/warnings |
| `validate-plan research/plan-spec.json --max-items 60` | exit 0; 973 populated of 1619 planned pages; declared order/IDs accepted |
| `extcheck --quiet` | exit 0; existing published-content warnings are not asserted fixed |
| `source-fetch-check --coverage <14,15,16 coverage files> --stamp --timeout-sec 15` | exit 0; 30/31 fetch-verified, zero newly stamped; 31/31 resolved including one documented drop |
| `source-backing --coverage <14,15,16> --liveness research/phase-2-catchup-24-url-liveness.json --require-verified` | exit 0; 188 authored results backed by openable sources or documented alternatives |
| `scope-decisions check --run phase-2-catchup-24 --group g` | exit 0; 57 current declines, zero errors |

No test suite or publication was performed. Terminal records are written only after the final owned-artifact checks; no pair will be edited after its terminal record. The derived frontier ledger is refreshed through its tool after bookkeeping.

Closing receipt: the owned-file `git diff --check` passed. A direct whitespace check, also covering untracked owned JSON/notes/report files, found zero offending lines. The derived frontier ledger refresh completed and deduplicated its inputs. A final owner-file presence check found no owner decision for any of the five assigned A pages. The current ordinary verdicts and batch notes agree with the table above.
