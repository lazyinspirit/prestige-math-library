# Batch 27 Step 5a adjudication — frontier-38-owner-30

Reviewer: alpha batch-27. Scope: batch 27 only; dependency order follows the generated order task. This report records local mathematical review and checks, not an independent judgment or engine certification.

## Evidence and baseline

Read CLAUDE.md, README.md, SCHEMA.md, briefs/alpha-step5.md, briefs/tasks/alpha-5a-adjudicate.md, the generated order task, scope 27, reader report/findings 27, refute 27, and both Step-5 hash snapshots. All fifteen item raw hashes and both page raw hashes matched the reader's post snapshot before this adjudication. The six routed item hashes differ between pre/post; manifests and page item orders do not. Reader-reported changes are assessed against current text, exact source passages and actual dependency statements; hashes alone do not establish validity. No rendered evidence bundle was supplied or found among the batch artifacts.

Initial risk-report command: `node tools/risk-report.mjs research/frontier-38-owner-30-batch-27.proof-contracts.json`; exit 0, fifteen CRITICAL items, no tool errors. Reviews below are completed individually before advancing to higher dependency levels.

## Dependency-ordered review

### Level 0 — def-intersection-multiplicity-of-closed-subschemes

Decision `touched:27:def-intersection-multiplicity-of-closed-subschemes`: **accepted_repair**, repair_confidence 1. The reader correctly describes Y as a possible strict-transform curve and Y∩Z as its zero-dimensional contact locus. The Definition assumes an integral one-dimensional Y, a closed p in the intersection, and exclusion of Y's generic point from Z. Every prime of the local intersection quotient is consequently maximal; the nilpotent-maximal-ideal filtration in R1 has finite-dimensional residue-field factors. Restriction of scalars along the quotient does not change submodules or length. Thus the displayed length is finite, positive and local; an empty intersection supplies no p, and Y⊆Z is excluded. For two distinct regular curves on a regular surface, length one means their local parameters are independent modulo the square of the maximal ideal; higher length is tangency. No choice is used by this length construction.

Source: [Stacks Equation 54.15.2.1, 0BI6](https://stacks.math.columbia.edu/tag/0BI6), displayed invariant; surrounding [54.15.2, 0BI5](https://stacks.math.columbia.edu/tag/0BI5), statement and proof, fixes the integral curve setting. Read all ten declared supplier Definition/Statement sections; the actual length argument uses the nilradical nilpotence and length-additivity statements. The invariant's Definition did not change during the reader repair, so no Statement/Definition impact window opens. Closed defect: `frontier-38-owner-30-5a-batch-27-D01`. Risk review complete; next item is the stabilization lemma.

### Level 0 — lem-increasing-sequence-of-coherent-subsheaves-stabilizes

Decision `flagged:27:1`: **confirmed_fatal**, repaired with repair_confidence 1. The second source entry falsely names tag 01X8 as Section 30.10. [01X8](https://stacks.math.columbia.edu/tag/01X8) is Section 30.2, Čech cohomology. Replaced its title, URL and locator with [Lemma 30.10.1, 01Y8](https://stacks.math.columbia.edu/tag/01Y8), statement and complete proof (lines 22–27), which states ACC for quasi-coherent submodules of a coherent module on a Noetherian scheme. The scoped coherent-submodule assertion is a valid special case. [0BI4](https://stacks.math.columbia.edu/tag/0BI4), proof lines 36–39, uses exactly this result.

Read all five authored steps and all ten supplier statements. A finite affine cover gives finitely generated modules over Noetherian rings; module ACC (the choice-free forward direction) stabilizes the corresponding inclusions. Affine equivalence identifies the subsheaves; the finite maximum of local indices gives global equality. Empty X, zero module, a single chart and an already constant sequence are covered. The explicitly inherited AC through the quasi-coherent interfaces suffices; no further infinite selection is used. The Statement and Proof, manifest, provenance classification and internal contract citation uses remain valid unchanged. Closed defect: `frontier-38-owner-30-5a-batch-27-D02`. Risk review complete; next item is the SNC definition.

### Level 2 — def-strict-normal-crossings-divisor

Risk-only review, no decision owed. Read Definition/R1–R3 and all nine supplier statements. Under explicit AC, regular-local UFD and parameter-quotient suppliers justify product equations for reduced curves, regular components exactly when equations are outside m², and pair length one exactly when the equations generate m. Both equivalent descriptions follow, with no triple intersection. Nonclosed curve points are generic, so closed-point tests suffice. Empty curve/unit ideal, a single component, and crossings are covered; field smoothness is not required. Sources: [0BI9, Definition 41.21.1](https://stacks.math.columbia.edu/tag/0BI9), and [0BIA, Lemma 41.21.2](https://stacks.math.columbia.edu/tag/0BIA), complete equivalence proof, plus [0BIC](https://stacks.math.columbia.edu/tag/0BIC), full resolution proof. This locally Noetherian definition deliberately does not supply the global Noetherian hypothesis required for finite resolution. No defect; risk review complete. Next: ambient point-blowup regularity.

### Level 7 — lem-blowup-of-closed-point-of-regular-surface-is-regular

Risk-only review; no decision owed. Read all eight steps and all 23 supplier statements. Localization at the center preserves the local rings to be tested. For local dimension two, cancellation modulo x proves the chart presentation has no x-power torsion; xT−y has a nonzero cotangent class at each exceptional prime, yielding a regular parameter quotient. Symmetry covers the second chart; the off-center isomorphism and nonzerodivisor exceptional equation establish pure dimension two. For local dimension one the DVR point ideal is invertible near p and is the unit ideal off p, so the blowup is an isomorphism and E is a reduced Cartier point. In dimension two, the graded-ring and normal-cone suppliers give E≅P¹ over κ(p). Read [0AGQ, 54.3.1](https://stacks.math.columbia.edu/tag/0AGQ), complete statement/proof, and [0BIC](https://stacks.math.columbia.edu/tag/0BIC), full contextual use. Explicit AC suffices; no field smoothness is inferred. No defect; risk review complete. Next: contact drop.

### Level 7 — lem-intersection-multiplicity-drop-under-point-blowup

Risk-only review; no decision owed. Read every step and all 17 supplier statements/definitions. In the DVR O(Y,p), the nonzero image of the other ideal has minimal valuation N≥1. The induced center ideal is invertible on Y, so Y′≅Y, with a unique q over p and unchanged residue field. The blowup-chart map remains well-defined with ambient zero divisors. Saturation contains f/x for a minimizing f; its image has valuation N−1. If q remains on Z′, the contact length j therefore satisfies 1≤j≤N−1; N=1 forces disjointness. E restricts to the uniformizer, giving contact length one. Checked [0BI7, 54.15.3](https://stacks.math.columbia.edu/tag/0BI7), full proof, and [080E, 31.34.2](https://stacks.math.columbia.edu/tag/080E), full intrinsic blowup proof, against the exact regular-source hypothesis. The AC assumption covers all cited interfaces. No defect; risk review complete. Next: intrinsic curve point-blowup finiteness.

### Level 7 — lem-point-blowup-of-integral-curve-is-finite

Decision `touched:27:lem-point-blowup-of-integral-curve-is-finite`: **amended_repair**, repair_confidence 1. The current raw hash equals the reader post hash 8d8490b2d4c104db1d44765f60bd25ec13edd00927e8b886644a8708afa69565 and differs from pre. The revised [0AB7, 33.17.2](https://stacks.math.columbia.edu/tag/0AB7) locator matches condition (1): properness, Noetherian target local ring of dimension at most one, and algebraic/finite generic residue-field extensions imply finiteness near the target point. Read that complete proof and [02LS, 37.44.1](https://stacks.math.columbia.edu/tag/02LS), full proof. The authored argument uses its independent proper-plus-quasi-finite route, not an altered interpretation of 0AB7.

Read all seven steps and all 31 supplier statements. A degree-one Hilbert–Samuel polynomial has positive slope and hence an eventually positive constant graded-piece length. The finite homogeneous generators of I_sat/I admit a common irrelevant-ideal annihilating power, giving high-degree equality; Serre vanishing and the saturation dictionary then identify these pieces with the exceptional fibre's section spaces. The fibre therefore has nonzero constant Hilbert polynomial and dimension zero. Proper finite-type zero-dimensional fibres yield quasi-finiteness and finiteness. Pullback-center invertibility proves the reverse identity criterion; the DVR criterion proves the forward construction from regularity. The coherent Sym(I_p) presentation gives local H-projectivity without an unjustified global fixed-dimensional immersion. All AC hypotheses are present. Statement/Definition unchanged by this source repair. Closed defect `frontier-38-owner-30-5a-batch-27-D03`; risk complete. Next: normalization factorization.

### Level 8 — lem-normalization-factors-through-blowup-of-curve-point

Risk-only review; no decision owed. Read all eight steps and all 15 supplier clauses, with [0BI4](https://stacks.math.columbia.edu/tag/0BI4) and [0BI5](https://stacks.math.columbia.edu/tag/0BI5), complete relevant proofs. Finiteness of normalization is assumed for an arbitrary Noetherian curve; the finite-type field theorem is used only in the explicitly restricted example. Each normalization point over p is closed with DVR local ring; the pulled-back point ideal is nonzero proper there and the unit ideal elsewhere. Coherence extends its stalk generators, giving an effective Cartier inverse image and the unique universal-property factorization. Over an affine base, R-finite C is also B-finite for R⊆B⊆C. Normality and integrality then identify C with the integral closure of B; finite pushforward gives the coherent subalgebra inclusion. The regular-center identity and inherited AC are correctly handled. No defect; risk complete. Next: strict algebra growth.

### Level 9 — lem-strict-blowup-increases-finite-normalization-subalgebra-at-singular-center

Decision `touched:27:lem-strict-blowup-increases-finite-normalization-subalgebra-at-singular-center`: **amended_repair**, repair_confidence 1. Current raw hash da7fb9e27fa322e23d7499ce6a943446a26bf0a72e240957618527a01b8bb4f0 matches post and differs from pre. Removed secondary source 0BI6 really is only the intersection-length invariant; [0BI4](https://stacks.math.columbia.edu/tag/0BI4), complete proof, provides the finite normalization chain and non-isomorphism argument. The retained finite-affine argument supplies strictness explicitly.

Read all five steps and all 17 suppliers. Equality of the natural structure subalgebra for a finite morphism would identify every affine algebra with its base and make the morphism an isomorphism, contradicting the singular-center criterion. The coherent nonzero quotient vanishes off p and has finite length via its primary annihilator. At subsequent stages finite affine pushforward is exact and faithful restriction of scalars, so nonzero quotients and strict inclusions survive over Y. Integrality, Noetherian dimension one and the same finite normalization persist. The proof correctly permits nilpotent maximal-ideal action on the quotient. Statement unchanged by the source-only repair; no consumer repair needed. Closed defect `frontier-38-owner-30-5a-batch-27-D04`; risk complete. Next: finite termination.

### Level 10 — thm-regularization-of-finite-normalization-curve-by-point-blowups

Risk-only review; no decision owed. Read every step and all 18 supplier clauses. The previously reviewed finite birational blowup and factorization results preserve an integral Noetherian one-dimensional curve and its fixed finite normalization; injective integral affine extensions preserve dimension. Nonclosed points are generic with field local rings, so a nonregular stage supplies a nonregular closed center. Explicit AC authorizes recursive choices. Each step strictly enlarges the coherent structure algebra over the original Y, contradicting the reviewed stabilization lemma if continued infinitely. The already regular case uses n=0; no higher-dimensional or nonfinite-normalization conclusion is claimed. Compared with [0BI4, 54.15.1](https://stacks.math.columbia.edu/tag/0BI4), complete proof, and its exact finiteness input [0AB7](https://stacks.math.columbia.edu/tag/0AB7). No defect; risk complete. Next: ambient realization of the intrinsic sequence.

### Level 11 — lem-regularization-of-curve-on-noetherian-ambient-by-point-blowups

Risk-only review; no decision owed. Read all four steps and all ten supplier clauses; [0BI5](https://stacks.math.columbia.edu/tag/0BI5) and [080E](https://stacks.math.columbia.edu/tag/080E), complete proofs, provide the exact interfaces. Simultaneous induction constructs the closed embedded current curve and the next ambient blowup. A closed curve point is closed in the ambient scheme, and the ambient point ideal restricts to its maximal ideal on the curve. The strict-transform theorem therefore identifies each stage with the prescribed intrinsic blowup. Finite standard chart covers preserve Noetherianity. The final transform is the regular intrinsic curve, including n=0. No ambient regularity or field hypothesis is imported. Explicit inherited AC suffices. No defect; risk complete. Next: cusp counterexample.

### Level 11 — cex-finite-normalization-does-not-make-the-curve-regular-before-blowups

Decision `touched:27:cex-finite-normalization-does-not-make-the-curve-regular-before-blowups`: **amended_repair**, repair_confidence 1. Current raw hash 5f81d2e4c3b06d6b1a71c829096970a68adb1293db768df07a1da537beb20916 matches post and differs from pre. Read all four steps, Facts, all 14 supplier clauses, and the affected contract. The normal form embeds the cusp ring as k[t²,t³]; finiteness over k[t²] gives dimension one and the origin has cotangent dimension two. The finite normalization k[t] is generated by 1,t, with the explicit nonzero relation t³·1−t²·t=0, so the reader correctly removed the contract's basis assertion. The fraction fields agree, the off-origin inverse is y/x, and the origin fibre is supported at one point. The UFD denominator argument proves normality.

The reader's added x-chart computation gives x=t²; the other chart has 1−ys³=0 and lies in the overlap because s is invertible. Thus the whole transform is the regular affine line after one point blowup. This fills a nonfatal verification gap in the otherwise true one-blowup claim. The deleted 0BI7 locator had the wrong mathematical role and regular-source hypothesis; [0BI4](https://stacks.math.columbia.edu/tag/0BI4), full proof, supports the retained finite-normalization discussion. Characteristic restrictions and AC are explicit. No Statement change. Closed defects: `frontier-38-owner-30-5a-batch-27-D05` (citation), `D06` (nonfatal chart verification gap), `D07` (contract basis assertion); risk complete. Next: component separation.

### Level 12 — thm-separation-of-regular-curve-components-by-point-blowups

Risk-only review; no decision owed. Read all five steps and all 12 supplier clauses, with [0BI8, 54.15.4](https://stacks.math.columbia.edu/tag/0BI8), full proof, and the already checked contact-drop result. Regularizing components successively preserves the others' finite normalization and leaves already regular curves intrinsically unchanged. Distinct integral one-dimensional curves meet in a finite closed set on the Noetherian ambient scheme. At every maximum-contact center, all persisting pairwise contacts decrease and off-center contacts are unchanged. Blowing the finite set attaining the maximum therefore lowers it; the final length-one phase eliminates all remaining contacts. Empty contacts and zero/one component cases are valid. The elementary integer descent and explicit AC justify termination. No defect; risk complete. Next: embedded SNC theorem.

### Level 13 — thm-embedded-snc-resolution-of-reduced-curve-on-regular-surface

Decision `touched:27:thm-embedded-snc-resolution-of-reduced-curve-on-regular-surface`: **amended_repair**, repair_confidence 1. Current raw hash d63a6d5c0162066c690fd1a1bdbe2851652f414a8485a46213ba083650c0a04a equals post and differs from pre. The reader correctly removed regularity of the entire final support: k[u,v]_(u,v)/(uv) has dimension one and cotangent dimension two, although its two components are regular and transverse. The corrected Statement and final step promise SNC support and regular components. The affected contract boundary and D6.1 agree with that conclusion.

Read all six steps and all 18 supplier clauses. Noetherianity gives finite original components. Local UFD makes the reduced initial curve Cartier, so the arbitrary-subscheme principalization input in [0BIB](https://stacks.math.columbia.edu/tag/0BIB) is unnecessary here (its whole proof read). Regularization/separation uses dimension-two centers; exceptional curves and later strict transforms stay regular. Domain chart embeddings preserve nonzero local Cartier equations. The finite pairwise contact maximum decreases, including new exceptional contacts of length one; the final finite set of triple-or-higher points is removed without creating new triples. Empty Z and unit equations are included. Checked [0BIC](https://stacks.math.columbia.edu/tag/0BIC), complete proof, and [0BIA](https://stacks.math.columbia.edu/tag/0BIA), complete equivalence proof.

Statement impact inspection: exact ID search across all items/pages found only the owned node example, cusp example and A page as direct reference/dependency consumers. Their actual uses assert SNC and regular individual components, so they remain sound under the corrected conclusion. The A page already reflects this distinction; its separate missing-Noetherian finding is reviewed below. No outside consumer needs a Step-5b alert; no further-hop claim changed. Closed defect `frontier-38-owner-30-5a-batch-27-D08`; risk complete. Next: cusp example.

### Level 14 — ex-cusp-resolution-and-delta-drop

Risk-only review; no decision owed. Read Example/Facts and all seven Verification steps, with all 17 direct supplier clauses. The first two charts and their overlap prove the whole strict transform is A¹, with exceptional contact ring k[t]/(t²) of length two. Its own curve multiplicity is one. The second blowup gives u=0, t=0, t−u=0 at the unique remaining contact: three distinct transverse directions. The other chart adds no exceptional contact; the third blowup separates those directions into distinct points on the new exceptional curve. The earlier [0BI7](https://stacks.math.columbia.edu/tag/0BI7) regular-source result is used only after the cusp is regularized.

At infinity, the projective cubic has regular chart v=u³. Its normalization quotient at the cusp is k[t]/k[t²,t³], with basis the class of t, so δ_k=1; the first strict transform is its finite regular normalization and δ_k=0. Read the complete eight-stage proof of `lem-blowup-multiplicity-euler-characteristic-drop` and fourteen additional relevant prerequisite Statement/Definition sections: its filtration has quotients O_E(−j), summing r(1−j) to −r·binom(m,2), with the resulting positive Euler change and negative defect change. Its exact proper regular surface/ample hypotheses hold on P²_k, r=1 and m=2. This agrees with the direct quotient calculation. Transitive supplier proofs and source books were not exhaustively audited. Characteristic restrictions and inherited AC are stated. No defect; risk complete. Next: node example.

### Level 14 — ex-node-resolved-by-one-blowup

Decision `touched:27:ex-node-resolved-by-one-blowup`: **amended_repair**, repair_confidence 1. Current raw hash 460ca1f81fffe5fec6a54912a308e1ca207547cff8ed7cbf1ee8687d6872857a equals post and differs from pre. Read all five steps, Facts/Example, all 15 supplier clauses and the contract boundary. The original origin has local dimension one and cotangent dimension two, so it fails [0BI7](https://stacks.math.columbia.edu/tag/0BI7)'s regular-source hypothesis. The reader correctly replaces that use with the existing explicit chart calculation and an accurate source locator.

The normal-form embedding proves an integral global curve with unique singular origin. Formal sqrt(1+x) exists by recursion dividing only by two, so characteristic three is valid. Its two formal branches are regular, with independent tangents and mutual length one; they are not distinct global components. In the x-chart the entire strict transform is x=t²−1; the other chart has s²(1+ys)=1 and belongs to the overlap. Exceptional points t=±1 are distinct, each of length one. The finite map with module generators 1,t is birational from normal k[t], hence the normalization. E∪Z′ has only these transverse contacts and is SNC, with regular components but not a regular union at contacts. This is the corrected embedded theorem's actual conclusion. Closed defect `frontier-38-owner-30-5a-batch-27-D09`; risk complete. All fifteen item risk reviews are now complete. Next: page-only obligations.

## Manifest reconciliation

The owning `batch-27.pages.json` still repeated repaired defects. Alpha synchronized the current source entries for the finiteness, strict-growth, stabilization, embedded-SNC, node and cusp-counterexample items; corrected the embedded theorem manifest's false union-regularity conclusion and the node manifest's singular-source attribution; and supplied the counterexample's actual chart strategy. These amendments change the full manifest carrier even where the item remains byte-identical to the reader result, so the five affected touched decisions are amended_repair. The intersection definition remains accepted_repair, with only its risk_review added to the contract. All stable IDs, dependencies, page ownership, provenance classes and item orders are preserved. The engine owns aggregation of run manifests.

The strict-growth manifest strategy additionally claimed that exact functors preserve strict injections. Exactness alone does not preserve a nonzero quotient (tensoring with a localization is a counterexample); this finite-affine pushforward is also faithful restriction of scalars. Alpha corrected the strategy to this exact reason, matching the reviewed authored proof. Closed defect `frontier-38-owner-30-5a-batch-27-D14` is referenced by the strict-growth decision. No item Statement changes or new consumer impact arise from these manifest corrections.

## Page-only obligations

Decision `page:27:point-blowup-resolution-on-arbitrary-regular-surfaces`: **amended_repair**, repair_confidence 1. Before Alpha's edit the full page matched post raw hash bcbbc0305f42ce07a84beb405a117d2c53c8f890727277254f9951b377a0390e, differing from pre. The reader correctly added finite normalization, inserted the necessary phase removing tangencies among all support components, and corrected regularity of the union to SNC with regular components. The cusp's length-two exceptional contact shows why regularizing/separating original components and removing triple points alone would not suffice. These are closed defects `frontier-38-owner-30-5a-batch-27-D10` (finite normalization), `D11` (missing contact-descent phase), and `D12` (false union regularity).

Decision `flagged:27:2`: **confirmed_fatal**, repaired with repair_confidence 1, closed defect `frontier-38-owner-30-5a-batch-27-D13`. The opening still claimed finite resolution for an arbitrary regular surface without Noetherianity, although the scoped SNC Definition explicitly permits locally Noetherian surfaces and the embedded theorem explicitly requires a Noetherian surface. Take a countable disjoint union of affine planes over Q, and the closed reduced curve given by one cusp in each component. The surface is locally Noetherian, regular and pure dimension two, and every integral curve component has finite normalization. Each blowup at an individual closed point changes only one connected component. Finitely many such blowups leave infinitely many singular cusps, violating SNC. Alpha added “Noetherian” to the opening; the stated finite-normalization hypothesis and the reader's repaired conclusion/phases are retained.

Read the complete A-page prose and both page lists, comparing every mathematical paragraph with the now-reviewed items and their relevant suppliers. Checked [0BIC](https://stacks.math.columbia.edu/tag/0BIC), complete theorem/proof, and the exact local-versus-global Noetherian definitions. The local-dimension-one identity blowup and dimension-two projective-line distinction remains correct. The finite-normalization chain, ambient realization, contact descent and triple-point phases now match the theorem. The companion B page is unchanged and owes no decision; its node/cusp descriptions are read under the hypotheses in the linked examples. No item Statement/Definition changed during this page repair; no further consumer repair is needed.

## Published findings, checks and blockers

Completed: nine exact routed decisions (six touched, one page, two flagged), comprising one accepted_repair, six amended_repair (five items and the page), and two confirmed_fatal. Fourteen confirmed defects have one closed/fixed ledger row each, owned at caught_at_stage 5a-adjudicate; the nonfatal chart-verification gap is explicitly classified nonfatal. Each flagged decision references exactly one closed row. Repair confidence is 1 on every completed repair. No extra decision is created for risk-only items or the unchanged companion page.

All fifteen CRITICAL risk reviews are complete in the owning proof contract. The only Alpha-edited item is the stabilization lemma's source entry plus mechanical reflow of its Facts/Given paragraphs; Alpha also amended A-page prose, synchronized the owning manifest, recorded risk reviews, and maintained the consumer-batch dependency input. No material proof rewrite occurred, and no judge record was introduced or invalidated. Published items remain read-only. No defective published supplier or affected outside consumer was found, so the published ledger needs no new row or lock. No withdrawal is proposed, no unresolved defect or risk review remains, and no escalation or owner decision is required.

The owned cross-batch input retains its stable edges and prior evidence, with current Alpha statement/use checks and current raw hashes appended. `node tools/frontier-dependency-ledger.mjs refresh --run frontier-38-owner-30` completed (exit 0, refreshed and deduplicated). The generic instruction file `briefs/tasks/frontier-dependency-ledger.md` directs this per-consumer-batch input/refresh workflow; it is not itself an item-record carrier. No outside owner's input was edited.

Local checks, all after final content edits:

- Reflow: `node tools/tsx-run.mjs tools/reflow.mts items/lem-increasing-sequence-of-coherent-subsheaves-stabilizes.md`; exit 0, joined soft wraps only.
- Precheck: `node tools/tsx-run.mjs tools/precheck.mts items/lem-increasing-sequence-of-coherent-subsheaves-stabilizes.md`; exit 0, 1 checked, 0 failing.
- Rendercheck: `node tools/rendercheck.mjs items/lem-increasing-sequence-of-coherent-subsheaves-stabilizes.md library/algebraic-geometry/point-blowup-resolution-on-arbitrary-regular-surfaces.md`; exit 0, both YAML blocks and all math parsed with the real parser/KaTeX.
- Required final risk check: `node tools/risk-report.mjs research/frontier-38-owner-30-batch-27.proof-contracts.json --require-reviewed`; exit 0, 15 routed items, 0 errors.
- Final layout, run once after the final item edit/formatter: `node tools/proof-layout.mjs items/def-intersection-multiplicity-of-closed-subschemes.md items/lem-increasing-sequence-of-coherent-subsheaves-stabilizes.md items/lem-point-blowup-of-integral-curve-is-finite.md items/lem-strict-blowup-increases-finite-normalization-subalgebra-at-singular-center.md items/cex-finite-normalization-does-not-make-the-curve-regular-before-blowups.md items/thm-embedded-snc-resolution-of-reduced-curve-on-regular-surface.md items/ex-node-resolved-by-one-blowup.md`; exit 0, **7 items, 32 steps, 0 defects**.
- Local JSON/artifact consistency check: 9 exact unique obligations, 14 fixed unique ledger rows with matching subjects/decision references, exactly one row per flagged decision, unchanged manifest dependency/provenance classifications, and no subject hashes stamped. Exit 0. The first ledger append rejected three enum spellings before writing anything; corrected to the tool's remark/group-alpha/fixed vocabulary and appended successfully. That mechanical input failure created no defect row.

Final raw hashes for Alpha-edited content: stabilization item `87d3da216a61e110558063cb99eb99e1ab3c35ad6932407343f4f3c73785aea7`; A page `5f5ffe8080a17834491d41d64e25630bdaf5774c005284db76dfc9f13d23d2e7`. These are evidence only; the decisions intentionally have no sealed subject_sha256 fields.

Review limit: all current owned arguments, direct supplier Definition/Statement clauses, the full Euler-drop supplier proof and its relevant additional supplier clauses were read. Full transitive dependency proofs and Euler-source books were not exhaustively audited. Source statements/complete relevant Stacks arguments are linked in the item reviews. No mathematical confidence is inferred from reader/refuter verdicts or mechanical checks alone. No judgment, self-certification, decision hash stamping, agent dispatch, or workflow/gate transition was performed. The engine owns next-step stamping and gates.


## Direct supplier inventory

Relevant Definition/Statement sections read for all 82 external direct suppliers (scoped item suppliers are reviewed above):

- `items/cor-blowup-birational-integral-scheme.md`
- `items/cor-dimension-of-a-finite-polynomial-ring-over-a-field.md`
- `items/cor-dimension-of-a-quotient-as-chains-above-an-ideal.md`
- `items/cor-dimension-preserved-by-integral-extensions.md`
- `items/cor-dvr-is-a-pid.md`
- `items/cor-finite-type-algebra-over-noetherian-ring-is-noetherian.md`
- `items/cor-finite-variable-polynomial-ring-noetherian.md`
- `items/cor-h0-projective-space-o-d-homogeneous-polynomials.md`
- `items/cor-length-is-additive-in-short-exact-sequences.md`
- `items/cor-localisations-of-regular-local-rings-are-regular.md`
- `items/cor-serre-normality-criterion-two-directions.md`
- `items/def-axiom-of-choice.md`
- `items/def-blowup-scheme-along-ideal.md`
- `items/def-cartier-divisor.md`
- `items/def-coherent-module-scheme.md`
- `items/def-composition-series-and-length-of-a-module.md`
- `items/def-dimension-noetherian-topological-space.md`
- `items/def-effective-cartier-divisor.md`
- `items/def-embedding-dimension-and-regular-local-ring.md`
- `items/def-exceptional-divisor-blowup.md`
- `items/def-finite-morphism-schemes.md`
- `items/def-finite-type-finite-presentation-module-sheaf.md`
- `items/def-hilbert-function-sheaf-projective.md`
- `items/def-hilbert-samuel-function-and-polynomial.md`
- `items/def-integral-scheme.md`
- `items/def-local-ring.md`
- `items/def-locally-noetherian-and-noetherian-scheme.md`
- `items/def-noetherian-module.md`
- `items/def-noetherian-ring-and-module.md`
- `items/def-normal-noetherian-ring.md`
- `items/def-normalization-defect-of-reduced-curve.md`
- `items/def-projective-scheme-from-a-homogeneous-quotient.md`
- `items/def-quasi-coherent-module-scheme.md`
- `items/def-quasi-finite-morphism-schemes.md`
- `items/def-relative-proj-quasi-coherent-graded-algebra.md`
- `items/def-scheme-theoretic-fibre.md`
- `items/def-smooth-morphism-schemes.md`
- `items/def-strict-transform-closed-subscheme.md`
- `items/def-symmetric-algebra-qc-module.md`
- `items/def-total-transform-divisor.md`
- `items/lem-affine-blowup-algebra-properties.md`
- `items/lem-blowup-isomorphism-off-center.md`
- `items/lem-blowup-local-on-base-scheme.md`
- `items/lem-blowup-multiplicity-euler-characteristic-drop.md`
- `items/lem-blowup-reduced-integral-under-domain-rees.md`
- `items/lem-chain-dimension-open-cover.md`
- `items/lem-finite-modules-over-noetherian-rings-are-noetherian.md`
- `items/lem-regular-local-domain-induction.md`
- `items/lem-regular-local-quotient-by-parameter-is-regular.md`
- `items/lem-regular-system-of-parameters-equivalent-basis.md`
- `items/thm-affine-blowup-standard-charts.md`
- `items/thm-affine-quasi-coherent-equivalence.md`
- `items/thm-artinian-ring-characterisation-by-primes.md`
- `items/thm-artinian-ring-has-finite-length.md`
- `items/thm-associated-graded-ring-of-a-regular-local-ring.md`
- `items/thm-blowup-base-change-flat.md`
- `items/thm-blowup-closed-immersion-transform-universal.md`
- `items/thm-blowup-effective-cartier-divisor-isomorphism.md`
- `items/thm-blowup-projective.md`
- `items/thm-blowup-universal-property.md`
- `items/thm-closed-subschemes-projective-space-homogeneous-ideals.md`
- `items/thm-coherent-sheaves-abelian-noetherian-scheme.md`
- `items/thm-dimension-of-a-polynomial-ring-over-a-noetherian-ring.md`
- `items/thm-dvr-ideal-and-module-length.md`
- `items/thm-equivalent-characterisations-of-a-dvr.md`
- `items/thm-equivalent-characterizations-of-noetherian-modules.md`
- `items/thm-exceptional-divisor-normal-cone-proj.md`
- `items/thm-hilbert-polynomial-coherent-sheaf.md`
- `items/thm-hilbert-polynomial-degree-support-dimension.md`
- `items/thm-hilbert-samuel-dimension-theorem.md`
- `items/thm-localisation-and-polynomial-extension-of-regular-rings.md`
- `items/thm-localisation-of-modules-is-exact.md`
- `items/thm-nilradical-of-a-noetherian-ring-is-nilpotent.md`
- `items/thm-noetherian-ring-quotients-and-localisations.md`
- `items/thm-nonaffine-regular-local-ring-is-ufd.md`
- `items/thm-normalization-reduced-curve-exists-finite.md`
- `items/thm-one-dimensional-regular-local-rings-are-dvrs.md`
- `items/thm-polynomial-ring-over-a-field-is-a-ufd.md`
- `items/thm-projective-morphism-proper.md`
- `items/thm-proper-quasi-finite-is-finite.md`
- `items/thm-pullback-center-ideal-invertible.md`
- `items/thm-serre-vanishing.md`
