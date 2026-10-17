# Confirmed SOC return-interface mismatch — first focused cycle

Research-only proposal for future native Step5. Step3 is closed and Step4 remains frozen/read-only: no canonical source, metadata, tool, ledger, hash, check, gate or dispatch action was performed. Full actual supplier/caller and the complete affected source arguments were read in dependency order. No new external fulltext reading or source coverage is claimed; this is a local interface mismatch, independently settled by the exact existing formulas.

## Supplier first; smallest missing interface

`alg-sqp-second-order-correction` correctly defines the internal minimum-norm correction
w=-Aᵀ(AAᵀ)⁻¹c_A(x+p), proves Aw=-c_A(x+p), and **returns p+w as a displacement**. For r=0 it returns p, with internal w=0. Its domain/rank/evaluation failure status and inactive-constraint caveat remain correct. Neither this Definition nor its proof needs changing.

The globalization caller is wrong in two literal places: Definition step2 calls the returned object “a correction w” and tests/returns x+p+w; F3 calls the return a corrected point. The provider returns neither that bare w nor a point. Reading the return literally as w therefore adds p twice. The smallest repair is **one source carrier only**: name the returned displacement s_SOC, evaluate/return x+s_SOC, and state F3's exact displacement interface. Keep the original QP p fixed for D_r, backtracking, multiplier records and return fields.

`source.diff` is the exact two-locus diff; `proposed/items/alg-sqp-merit-globalization-with-finite-budgets.md` is the full proposed source. `exact-source-operations.json` gives full literal before/proposed guards. Actual whole sources/metadata/context are preserved under before/. There are no dependency, ID, Statement, supplier-SOC or proof-paragraph changes.

## Independent hand derivation of the reported witness

Use U=R, equality h(z)=z-1, objective f(z)=z²/2, x=0 and B=1. The linearized equality forces p=1, and the exact SPD QP has this unique feasible solution. A=1 and h(x+p)=0 give w=0, so the actual SOC return is displacement1. At rho=2, sigma=1/4, the merit at x is2; the model objective change is0 and the equality penalty drops by2, hence D_r=2 and the SOC threshold is2-(1/4)2=3/2.

Correct candidate x+s_SOC=1 has merit1/2 and passes. The old literal interpretation gives x+p+(SOC return)=2, with merit2+2|1|=4, and rejects. The repair tests the intended supplier return exactly once. This witness establishes a real bad SOC branch; it does **not** establish a false finite-status theorem. Because ordinary backtracking includes t0=1, this particular example can subsequently accept point1 as ordinary accepted instead of accepted-soc. No overall failure or convergence claim is manufactured from it.

The r=0 supplier branch is also consistent after repair: its returned p is evaluated at x+p, not x+2p. No rank-zero, inactive-constraint or budget branch is removed.

## Entire current-run consumer closure, personally checked

Actual current manifest ownership plus source frontmatter deps/justified_by/forward_refs were used to build the reverse logical/context cone. Exact body-reference search corroborated the direct uses. SOC and globalization have no aliases. This is current-run closure, not unrelated corpus auditing.

SOC has three direct current-run consumers: globalization; thm-sqp-second-order-correction-residual-order; ex-sqp-maratos-effect-and-second-order-correction. Including globalization's transitive consumers gives six distinct items. The changed globalization Definition has exactly three direct items and one further indirect item:

| Item | Batch | Current actual use and disposition |
|---|---|---|
|thm-sqp-second-order-correction-residual-order|85|SOC F1 uses the internal formula w and minimum-norm property, never claims the algorithm returns w. Complete Proof1.1–2.1 derives ||w||≤M||p||²/(2s0), cancellation and cubic residual at x+p+w. Supplier unchanged; no source repair needed.|
|ex-sqp-maratos-effect-and-second-order-correction|85|SOC F3 computes internal w; globalization F5 asserts the full corrected candidate test. Complete verification computes x+p+w, its residual s⁴/4 and merit difference. Under repaired caller, s_SOC=p+w, so F5 now tests exactly this point and original D_r=s². Proof3.1's Armijo margin tends to-1/4; the full sufficiently-small nonzero theta/fixed rho conclusion, quadratic correction and stronger quartic residual remain intact. F5's source prose is already accurate **after** caller repair; no extra example source edit is necessary. Its exact caller Definition quote must be refreshed.|
|thm-sqp-merit-globalization-finite-budget-status|85|Complete Statement/F1/Proof1.1–2.1 use finite QP status, at most R correction tests and RJmax ordinary tests, actual passing record and flag partition. Replacing the candidate representation changes no loop cardinality, finite-valued test assumption, multiplier record, fraction or failure status. Its entire conclusion stays true. Refresh F1's exact caller quote only.|
|alg-ctrl1-finite-budget-transcription-solver-dispatch|100|Full Definition inspected, including builder and entire SQP branch. It consumes the supplier's actual returned accepted point z+ for accepted/accepted-soc and full QP multipliers; it does not add p again. Retains E/J and original supplier record; all other statuses stop without changing current state. No source or current quote mirror is needed.|
|thm-ctrl1-local-sqp-kkt-convergence-on-a-transcription|100|Indirect via dispatcher. Complete Statement and Proof1.1–4.1 concern the identified-active-set exact-Hessian full-step branch and a separate conditional mesh-family contraction/KKT-root argument. They do not infer merit/SOC acceptance. The finite dispatcher may stop early. No source, theorem conclusion or supplier quote changes are needed.|

The globalization source itself retains its existing complete finite-loop proof: F3's output type is corrected, while Proof1.1–2.1 remain byte-identical. No other consumers were found in this exact current-run cone. Ordinary penalty/backtracking parameters and caps, independent E/J rows, original QP multipliers, correction-failure fallback, domain-exit/nonpositive-prediction/line-search-budget distinctions, absence of unconditional acceptance or convergence, and the complete Maratos scope are retained.

Complete relevant pages read: sqp-active-set-and-augmented-lagrangian-methods; its examples page; direct-transcription-and-numerical-ode-optimal-control. Their current summaries refer to the actual accepted point, conditional local convergence, finite statuses and exact corrected merit calculation. No page prose claims the wrong double-addition interface or needs repair. Page inventory/order/ownership stay unchanged.

## Future exact mirrors and custody

`future-exact-quote-mirrors.json` proposes exactly2 guarded quote replacements in batch85 contract:

- thm-sqp-merit-globalization-finite-budget-status citations[0].quote, F1;
- ex-sqp-maratos-effect-and-second-order-correction citations[4].quote, F5.

Both currently equal the full old globalization Definition; proposed values are the entire new Definition. Fact IDs, source links, sections, uses, proof inputs/claims/step IDs and all unrelated contract fields are preserved. The caller's own F3 citation already quotes the unchanged SOC Definition correctly, and no supplier_interfaces field currently mirrors its wrong F3 paragraph. It does not require a quote edit. The old interface occurs in no other nested field of actual85/100 manifests/contracts. The85 manifest has no optional Statement mirror for this caller; existing id/kind/title/deps/level are unaffected.100's dispatcher has no active caller quotation to rewrite. Actual future native5 should supplement the focused risk/consumer evidence honestly, retaining prior review histories rather than claiming the earlier missed check was already correct.

Do not apply these payloads during frozen Step4, rewrite the original Step4 digest/finding, mutate closed Step3 evidence or claim current hashes/readiness. Root controls source repair authority and genuine Step5 integration, ledger typing, final source checks, mirrors, currency and any needed later review of changed bytes.

## Actual Step4 status at inspection

`actual-step4-status.json` records exact selected state/result/ledger paths and observation time. Actual batch85 Alpha read completed successfully: state ended18:02:20.937Z/lastExitOk true; genuine immutable alpha-batch-read-85.attempt-1.result.json ended18:02:20.843Z, completed/unaborted, exit/process0, model gpt-6.1-sol. Its actual context records this would-be-fatal concern. This is the Alpha read, **not Luna judgment**.

At the captured observation, the current run's Luna judge ledger had no row for any of the seven supplier/affected items; corresponding attempts selection was also empty. The global judge ledger contained other gpt-6-luna rows and Step4 had no gatesPassedAt/doneAt. No pending or future Luna verdict is invented, and an eventual keep verdict would not repair the demonstrated interface mismatch. Root can refresh actual live status when integrating later. No judge/currency validator was run here.
