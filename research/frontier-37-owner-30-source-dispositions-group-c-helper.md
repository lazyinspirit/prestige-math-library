# Group C source-disposition audit — batches 11 and 12

Run `frontier-37-owner-30`; report-only audit of the existing batch 11/12
coverage declines. This report does not change manifests, coverage, plans,
items, carriers, decisions, ledgers, gates, or receipts.

## Audit basis

I compared every currently `deferred` and `out-of-scope` coverage row with the
batch manifests, authored item proofs and dependency lists, the batch notes,
and the Fourier-track plan. I reused the complete-text retrieval and reading
evidence in the batch notes rather than refetching sources. The relevant full
texts had been fetched and inspected: Laugesen (stamp
`b1ef00490b91e492`), Grafakos (stamp `38c219d3c9013a85`), Williams (stamp
`05c37240004db213`), Guth (stamp `547e68e49cfcd334`), and Harboure (stamp
`b4e12183a71b3993`). I also checked Grafakos’s extracted text at the exact
statements on printed pp. 317–324. No source-reading obstacle remains.

The actual batch 11 periodic proof uses the finite-frequency square identity,
power induction, interpolation and duality; its real-line proof uses the
signum multiplier and Plancherel. The actual batch 12 proof uses Williams’s
near/far split and Hedberg inequality with the published centered maximal
bound. None of the declined results below is a dependency in either current
manifest proof route.

The Markdown plan contains the cited future FR-8 and FR-14 item IDs, but their
current entries in `research/plan-spec.json` still have empty `items` arrays.
Thus an exact item is a planned destination, not a supplier already spliced
or available as a proved item.

## Batch 11 — Hilbert and Riesz transforms

| Coverage row | Current disposition and actual use | Planned destination check | Audit stand / reconciliation |
|---|---|---|---|
| Laugesen, Ch. 12, Thm. 12.1, weak `(1,1)` for the periodic conjugate operator | `deferred` to FR-8. The current FR-7 periodic theorem claims strict-range strong `Lp`; it proves this by the square identity and does not use the weak endpoint. | FR-8 plans `thm-calderon-zygmund-operator-has-weak-type-one-one`, but its stated setting is the Euclidean `R^n` CZ operator. Neither that item nor the FR-8 plan states the periodic/toroidal weak bound. | **Reconcile the destination.** Do not treat the generic Euclidean item as proof of Laugesen’s torus theorem. Under the current plan, classify this source result as out of scope for FR-7; if the endpoint is wanted later, add an explicit periodic weak-type claim and its torus decomposition proof to a planned page. |
| Grafakos, §5.1.2, Thm. 5.1.5, printed pp. 317–319 | `out-of-scope`. The actual theorem is on `R`: `f*Q_ε-H^(ε)f→0` in `Lp` and almost everywhere, plus a Schwartz Cauchy/Poisson boundary formula. The FR-7 B example proves only the multiplier identity taking the line Poisson kernel to its conjugate kernel; no item consumes the general boundary theorem. | No FR-7 or FR-8 item promises this regularized boundary comparison. | **Keep out of scope, correct the reason.** The present reason says the theorem is unnecessary for the periodic square identity, which misses the real-line B example context. State instead that the example is a direct multiplier computation and makes no general boundary-limit claim. |
| Grafakos, §5.1.2, Rem. 5.1.6, printed p. 319 | `deferred` to FR-8. The remark contains both convergence of hard truncations `H^(ε)f` to `Hf` and the resulting `f*Q_ε→Hf` boundary limit, in `Lp` and almost everywhere (with the source’s stated ranges). The current FR-7 endpoint remark promises only later truncation results. | FR-8 plans `cor-principal-value-truncations-converge-almost-everywhere`, which covers the hard-truncation clause. It does not state Poisson-convolution boundary convergence or the strong `Lp` convergence clause. | **Reconcile the row’s scope.** Keep only the hard-truncation conclusion deferred to FR-8. For the full source remark, either add explicit Poisson-boundary and norm-convergence claims with proof routes to the future plan, or mark those additional claims out of scope; FR-8’s current item list does not cover them. |
| Grafakos, §5.1.3, Thm. 5.1.7 conclusion, printed pp. 320–322, real-line strong `Lp` | `deferred` to FR-8. The square-identity/power-interpolation argument from this section is used inline as the method for the periodic FR-7 theorem; the separate real-line conclusion is not a current FR-7 claim or dependency. | Exact FR-8 item: `cor-hilbert-transform-is-bounded-on-lp`, sourced from FR-7’s real-line `L²` result and the generic CZ weak/strong-range items. | **Keep deferred.** The target matches the real-line claim and its proof route. |
| Grafakos, §5.1.3, Rem. 5.1.8, sharp Pichorides norms, printed p. 322 | `out-of-scope`. The batch claims boundedness and endpoint failure, not optimal operator constants; no manifest item uses the numerical norms. | No exact claim is planned on FR-7 or FR-8. | **Keep out of scope.** Existing reason accurately marks sharp constants beyond the pair. |
| Grafakos, §5.1.3, Def. 5.1.10, maximal Hilbert transform, printed p. 322 | `deferred` to FR-8. It is not consumed in FR-7; the FR-7 definition carefully distinguishes truncations from general pointwise convergence. | Exact generic destination: FR-8 `def-maximal-truncated-singular-integral`, followed by its planned maximal-truncation bounds. | **Keep deferred.** The generic definition is the intended home for this operator notion. |
| Grafakos, §5.1.3, Ex. 5.1.11, printed p. 322 | `out-of-scope`. The full text computes the maximal transform of an interval indicator, `H^*(1_[a,b])(x)=π^{-1}|log |(x-a)/(x-b)||`; no current FR-7 B item asserts this maximal-truncation example. The authored interval example is for the untruncated transform. | Neither the FR-7 B inventory nor the FR-8 B inventory has this example. | **Keep out of scope and correct the row label.** “Maximal transform of log-plus” does not accurately name the printed example; label it as the maximal transform of an interval indicator (whose value is an absolute logarithm). |
| Grafakos, §5.1.3, Thm. 5.1.12, maximal Hilbert estimate, printed pp. 323–324 | `deferred` to FR-8. The current batch does not claim maximal estimates or general truncation convergence. | FR-8 plans `thm-maximal-truncations-are-weak-one-one-and-strong-lp` and `cor-principal-value-truncations-converge-almost-everywhere`; these cover the maximal `Lp` bound and a.e. convergence. The source theorem also asserts `Lp` convergence of truncations, which is not stated by either planned item. | **Reconcile the full theorem row.** Keep the maximal bound and a.e. limit deferred. Add a planned `Lp`-convergence conclusion with its dense-core/uniform-bound proof, or mark that norm-convergence clause outside the future page’s promised claim. |

## Batch 12 — Riesz potentials and HLS

| Coverage row | Current disposition and actual use | Planned destination check | Audit stand / reconciliation |
|---|---|---|---|
| Williams, footnote 88, inverse fractional Laplacian identification | `out-of-scope`. The batch fixes the kernel normalization at one and proves the `Lp→Lq` estimate by positive near/far bounds. No Fourier-symbol identity is a dependency or used in the proof. | No item in FR-13 or its planned FR-14 consumer needs the Fourier transform of the Riesz kernel. | **Keep out of scope.** The current reason correctly identifies the separate distributional kernel-transform work this would require. |
| Williams, §11.3, printed pp. 73–74, fractional integration as the Stein–Tomas input | `deferred` to FR-14. The current HLS proof supplies the earlier real-variable theorem and does not consume the later restriction argument. | Exact FR-14 item: `lem-stein-tomas-tt-star-bound-from-fractional-integration`, which explicitly applies FR-13 HLS at the stated parameter. The future page currently has no `plan-spec` inventory yet. | **Keep deferred.** This is a real planned consumer and preserves the acyclic FR-13-to-FR-14 direction; it is not yet a published or spliced supplier. |
| Guth, §1 Lemma 1.1, finite Vitali covering, printed p. 1 | `out-of-scope`. The HLS proof uses the already-published maximal theorem, not Guth’s finite covering construction. | No FR-13 item needs a new Vitali lemma. | **Keep out of scope.** The reason matches the actual supplier route. |
| Guth, §1 Lemma 1.2, finite-union ball doubling, printed p. 1 | `out-of-scope`. This supports Guth’s maximal-function derivation, which the batch does not follow. | No FR-13 item needs the finite-union estimate. | **Keep out of scope.** The reason matches the actual supplier route. |
| Guth, §2 Lemma 2.3, refined maximal superlevel estimate, printed p. 2 | `out-of-scope`. The batch cites the published strong centered-maximal bound rather than rebuilding Guth’s distribution estimate. | No FR-13 item needs this intermediate maximal estimate. | **Keep out of scope.** The reason matches the actual supplier route. |
| Guth, §3 Lemma 3.1, radial-average representation, printed p. 3 | `out-of-scope`. The local proof uses Williams’s dyadic near-shell estimate and a Hölder far bound; it does not use the layer-cake representation. | No FR-13 item needs this alternate near-kernel representation. | **Keep out of scope.** The reason matches the actual supplier route. |
| Harboure, §1 gradient representation and Sobolev motivation, printed pp. 1–2 | `out-of-scope`. The assigned theorem is the Riesz-potential `Lp→Lq` estimate, not a Sobolev-embedding theorem. | No FR-13 item promises the gradient representation. | **Keep out of scope.** The distinction between HLS and its Sobolev application is accurate. |
| Harboure, Thm. 2, off-diagonal Marcinkiewicz interpolation, printed p. 3 | `out-of-scope`. The HLS manifest and authored proof use the published strong maximal estimate plus Hedberg’s pointwise inequality; no off-diagonal interpolation item is in the proof dependency route. | The FR-13 plan cites MT-17’s strong maximal bound, not a new Harboure interpolation theorem. | **Keep out of scope.** This is an unused alternate proof component. |
| Harboure, Young convolution reminder, printed p. 3 | `out-of-scope`. The authored near/far argument applies Hölder directly to the far kernel; it does not use Young’s convolution inequality. | No FR-13 or FR-14 claim needs this reminder. | **Keep out of scope.** This is an unused auxiliary fact from Harboure’s alternate weak-type proof. |

## Handoff findings

Batch 12’s nine declines are substantively well classified: eight are unused
alternate or adjacent results and Williams’s one deferred result has the exact
FR-14 planned consumer. Batch 11’s four FR-8 deferrals have a real general
singular-integral page home, but three need claim-level reconciliation: the
periodic weak endpoint is not the Euclidean generic item; Grafakos’s Poisson
boundary claim is not planned; and the maximal Hilbert theorem includes an
`Lp`-convergence conclusion not stated in FR-8’s current items. The remaining
batch 11 out-of-scope results are not manifest premises; two coverage labels
should be corrected as noted above. These are planning/disposition findings,
not source-read or proof-completion claims.
