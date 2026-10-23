# Batch 44 Step 3a adjudication

Run: `fluid-dynamics-all-47-2026-10-23`; group: `batch-44`; scope: batch 44 only.

## Completed level-3 proposition review

`prop-fd-surrogate-law-shift-observable`: accept the reader citation repair, confidence 1. The current raw hash equals the immutable post-reader item hash; replacing only “Theorem 7.9 in §7A” by “§7.9” reproduces the immutable pre-reader hash. This establishes the exact reader delta without asserting recovery of absent historical source files. The changed reference label matches Axler, 12 June 2026 edition, Theorem 7.9 in Section 7A, printed pp. 196–197 / PDF pp. 211–212.

Read the complete current Statement, Facts and four proof steps and both cited suppliers. The population moment integrals are hypotheses (including the defined state-error integral); continuity of J gives measurable scalar compositions. Since integral g squared <= C, Holder with p=q=2 proves target integrability and then the stated L sqrt(C) epsilon bound. Zero Lipschitz constant, zero error, C=1 and one-point laws are valid; a probability space is nonempty. No statistical observation or physical guarantee is inferred from a finite sample. No public interface changed in the locator repair, so no consumer repair is triggered. Risk review recorded complete before advancing in generated order.

Sources actually read: [Axler, Theorem 7.9 and proof](https://measure.axler.net/MIRA.pdf), the current random-observable Definition, and the published Holder Statement and proof. The latter normalizes positive finite norms, uses Young and integration, and handles vanishing norms by null sets. Its independent source metadata issue is retained for the separate routed published finding.

Next: complete residual theorem risk review, then finite-example finding and published maintenance disposition. No judge, stamp, publication or engine gate claimed.

## Completed residual theorem risk review

`thm-fd-surrogate-residual-error` owes no separate carrier decision. Its complete current argument is sound: subtracting gives transport by v of e plus transport by e of u; Fourier orthogonality removes P from the pairing; periodicity cancels the first transport term; the second is bounded with the spatial operator norm. Viscosity contributes a nonnegative squared-gradient integral. The scalar Holder use is precisely p=q=2 on |r| and |e|. The delta-regularized norm avoids division by zero; compact smoothness supplies continuous a(t), so product differentiation, integration and an elementary scalar limit finish the estimate. Endpoints t=0,T, viscosity zero, zero defects, and u=f=0, v=t c were checked. Countable Choice remains explicit; no new selection is used. Risk complete before proceeding to the level-4 example.

Actually read [Tanveer, Section 1.2, equations (1.8)–(1.15)](https://people.math.osu.edu/tanveer.1/m865/lec6mweek.pdf) and [Morosi–Pizzocchero, Definition 3.4, Lemma 4.2 and Proposition 4.5](https://arxiv.org/pdf/1104.3832). These support the residual/comparison context; the former uses whole-space decay and the latter zero-mean higher Sobolev fields, whereas the present smooth normalized periodic proof is local and retains the constant mode. Neither external existence theorem is used. Read the residual Definition and its proof, Fourier-space and Leray Definition/proof, and Countable Choice Definition for these exact uses. No material defect or diagram omission identified.

## Completed level-4 example review

`refuter:44:1`, `ex-fd-unseen-input-shift`: confirmed nonfatal, repaired with confidence 1. Defined finite-range measurable simple maps and strong measurability as an almost-everywhere norm limit of simple maps. The explicit maps are simple themselves, so constant sequences prove the asserted property without a selection theorem. Also expanded the absolute-continuity notation by its null-set definition. All finite witnesses, domains, M>0, norms, laws and bias claims are preserved. Updated the exact manifest Example mirror and first verification derivation; no judge record existed to invalidate.

Direct evaluation gives zero training mean-square error, finite individual moments and target bias M. The singleton {1} proves failure of absolute continuity and of any density, so this violates no hypothesis of the preceding proposition. Consumer search across `items/` and `library/` finds only the owning frontmatter-only `fd-l01-examples` page: inventory membership requires no edit, and no mathematical consumer or further hop exists. Both assigned page bodies are empty and retain `page_layout: compact-v1`. The edited Example remains uninterrupted by links. No TikZ/tikzcd diagram occurs or is needed for this explicit two-point calculation.

## Published finding and dispositions

`reader:44:1`: confirmed nonfatal, `thm-holder-inequality-for-integrals`, consuming proposition `prop-fd-surrogate-law-shift-observable`. The current published source metadata still names Hunter while its actual [URL](https://metaphor.ethz.ch/x/2022/fs/401-4820-22L/notes/Mean-Field_Limits_in_Statistical_Dynamics_Golse.pdf) opens Golse, arXiv:2201.02005v1, title page. That title mismatch alone confirms the report; no claim of reading all of Golse is needed. The exact immutable import pin agrees with current raw `e12789b50fee38d8fc9798c16fcab258b0bf0d582492487970b90af9930de864`. The source copy is unchanged. Its complete current argument independently proves the scalar p=q=2 inequality actually consumed by both owned estimates. Axler is the valid separate source. Thus citation maintenance does not block the owned deductions.

Acquired `research/.published-consumer-ledger.lock`, reread and merged the published maintenance ledger, added the precise evidence and repair strategy and one deduplicated classification row, then released only this process's lock. Mathematics-owner maintenance stays OPEN; the Step-3 finding is closed only as `nonfatal-recorded`. Three canonical defect rows cover the reader locator repair, finite-example definition repair and published citation finding; every routed finding references exactly one row. There are exactly three routed decisions and no page obligations.

## Contract and dependency maintenance

The first strict contract check exposed a stale verbatim F1 quotation in the residual Definition contract: the outside Fourier-space supplier had clarified its integrable-field/coefficient domains. Updated only the owned quotation and matching supplier excerpt to the complete current Definition, which preserves the normalized-torus/H0 interface used here; the second strict check passes all four contracts. This mechanical metadata drift is not a mathematical defect and gets no defect row or extra routed decision. Replaced obsolete escalated-readiness descriptions in the proposition/example supplier records with honest current interface-review descriptions; readiness and production acceptance are not asserted. Updated all owned cross-batch rows with actual use-specific review and retained IDs, dependencies and statuses.

[Sources for the example context](https://jmlr.csail.mit.edu/papers/volume8/sugiyama07a/sugiyama07a.pdf), Section 2.1, pp.986–987, require the finite known importance ratio. [D2L Section 3.7.3.1 and Exercise 2(b–c)](https://d2l.smola.org/chapter_linear-classification/environment-and-distribution-shift.html) address support overlap and omitted target mass. These passages were opened; they motivate the example, whose exact two-point witness is verified locally. No empirical dataset, confidence level, PDE existence claim or sampling guarantee is supplied or inferred.

## Final local validation and handoff

- `proof-contract.mjs research/fluid-dynamics-all-47-2026-10-23-batch-44.proof-contracts.json --strict`: final pass, 4/4 items, zero errors or warnings after the documented quote refresh.
- `tsx-run.mjs tools/physics-support/precheck.mts items/prop-fd-surrogate-law-shift-observable.md items/ex-fd-unseen-input-shift.md`: pass, two items, zero failing.
- `rendercheck.mjs` on those same two explicit item paths: pass, YAML and mathematics parse.
- Initial `risk-report.mjs` identified exactly the two HIGH items. Final run on the same owning contract with `--require-reviewed`: pass, zero errors, complete specific reviews for both HIGH items. The expanded finite example is MODERATE, not HIGH.
- Required final `proof-layout.mjs` invocation, batching both changed/reviewed reader-edit item paths after the final item edits: pass, two items, seven steps, zero defects.
- Canonical defect append validated and appended three rows; generated view refreshed in its locked transaction. Owned frontier input refreshed/deduplicated through its native tool.
- Final scoped consistency: exactly three owed obligations, each with its closed canonical defect row; edited Example exactly matches its manifest mirror; no links interrupt it; both assigned page bodies remain empty.

All dispatched decisions and risk reviews are complete. No unresolved local mathematical blocker, substantial missing prerequisite, proposed withdrawal or outside affected consumer remains. The published Hunter/Golse citation mismatch remains an explicitly OPEN mathematics-owner maintenance referral, with scoped nonfatal disposition only. No published/imported content was edited. No judge cycle, stamp, gate battery, acceptance or publication was performed; engine hashing and gates remain pending engine work.
