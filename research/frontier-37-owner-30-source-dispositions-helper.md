# Independent source-disposition audit — batches 1, 9, 10, 14, and 16

Date: 2026-10-01. Role: report-only helper review. This is not a scope-owner
decision, an item decision, or a gate result. No plan, manifest, coverage,
contract, item, page, receipt, ledger, or engine file was changed; this report
is the sole write.

## Evidence read and limits

I read the current coverage rows, page-manifest item inventories, and batch
notes for batches 1, 9, 10, 14, and 16; the existing independent pair reports
for the stationary Markov, PDE-6, PDE-12, RG-10, and RG-23 pairs; and the
binding plan blocks for PT-17, PDE-6/PDE-12/PDE-14/PDE-14F/PDE-16/PDE-19,
RG-10/RG-11/RG-23/RG-28, and RL-7/RL-8. The current manifests contain 22/10
items (A/B) in batch 1, 21/9 in batch 9, 16/7 in batch 10, 20/5 in batch 14,
and 18/4 in batch 16. In particular, the old batch-9 scope report predates
the current overlay inventory and is not treated as the live manifest.

For batch 1, I reused the existing report's inspection of Durrett §5.7 and
its full-text checks of the other named out-of-scope headings; the current
coverage now has explicit rows for the five previously missing examples.
For batches 9, 10, and 14, I reused their source-section checks and verified
the current exact destination rows in the plan. For batch 16, I reused the
settled source inventory except for the concrete witness correction below;
I inspected the cached BHV text at Appendix B.1, especially Theorem B.1.4
(PDF pp. 349–354 / printed pp. 343–348). No source files were fetched again.

Current disposition counts are 46 rows: batch 1, 16 out-of-scope; batch 9,
7 deferred and 1 out-of-scope; batch 10, 3 deferred and 1 out-of-scope;
batch 14, 1 deferred and 7 out-of-scope; batch 16, 1 deferred and 9
out-of-scope. The recommendations below assess the actual row, its reason,
and any real plan route. “No assigned destination” means no such page/item
exists in the current plan; it is not a suggestion to silently attach the
result to a neighboring page.

## Batch 1 — PT-17 stationary Markov chains

All 16 current rows correctly stay outside the approved PT-17 claims. PT-17
promises countable-chain recurrence, return-cycle/Kac results, reversibility,
aperiodic total-variation convergence, Cesàro averages, and stationary-chain
ergodic conclusions, with the listed finite examples. None of these rows is
needed by those arguments. There is no later page assigned to these specific
models or alternate proof methods; adding one would require a future PT-17
scope amendment or another explicit plan row.

| Source result (current out-of-scope row) | Assessment and route |
|---|---|
| Durrett Ex. 5.5.1, the random walk on $\mathbb Z^d$ with counting stationary measure | **Stand out-of-scope.** PT-17 includes the finite doubly-stochastic example and the one-dimensional symmetric-walk counterexample, not the $\mathbb Z^d$ stationary-measure model. No later destination is assigned. |
| Durrett Ex. 5.5.2, asymmetric nearest-neighbour walk and non-normalisable geometric weights | **Stand out-of-scope.** The assigned walk counterexample is the symmetric walk on $\mathbb Z$; no current item claims the asymmetric $(p/q)^x$ weights. No later destination is assigned. |
| Durrett Ex. 5.5.3, Ehrenfest urn chain | **Stand out-of-scope.** A finite birth-and-death formula may specialize to this chain, but PT-17 does not promise the urn model or its explicit distribution. There is no separate destination. |
| Durrett Thm. 5.5.6, Kolmogorov cycle criterion | **Stand out-of-scope.** The current definition and time-reversal theorem establish detailed balance and identify reversibility; they do not assert the all-cycles characterization. No later destination is assigned. |
| Durrett Ex. 5.5.8, renewal-chain stationary measure | **Stand out-of-scope.** PT-17 proves the general return-cycle occupation construction, but does not state this queueing model as an example. The general theorem is the available mathematical route if a later example is commissioned; no such example is planned. |
| Durrett Ex. 5.5.13, infinite birth-and-death normalization test | **Stand out-of-scope.** The assigned birth-and-death example is finite; its finite normalization formula does not claim the infinite-state summability criterion. No later destination is assigned. |
| Durrett Ex. 5.5.14, M/G/1 queue positive-recurrence threshold | **Stand out-of-scope.** This model and its queue-specific drift/martingale proof are not a consequence claimed by the general positive-recurrence theorem. The plan separately denies queueing applications; no later destination is assigned. |
| Durrett Thm. 5.5.15, entropy proof of invariant-measure uniqueness | **Stand out-of-scope.** It is an alternative proof method; PT-17's return-cycle minimality route already proves the needed uniqueness, so the source result adds no claim. No destination is needed. |
| Durrett Ex. 5.6.3, triangle-and-square periodic chain | **Stand out-of-scope.** PT-17's B page uses the two-state periodic/Cesàro boundary and a directed-cycle counterexample; this six-state matrix is not promised. No later destination is assigned. |
| LPW Ex. 1.10, particular five-vertex graph transition matrix | **Stand out-of-scope.** The assigned finite connected simple-graph result gives the degree law generally, making this displayed matrix a specialization with no new claim. It can be checked inline under the existing graph-walk example; no new item is needed. |
| LPW Rem. 1.11, loops and multiple-edge conventions | **Stand out-of-scope.** PT-17 explicitly uses finite simple graphs without loops or parallel edges, so these alternate model conventions do not affect the claim. No destination is assigned. |
| LPW Ex. 21.17, reflected half-line walk with geometric invariant law | **Stand out-of-scope.** The positive-recurrence theorem does not calculate this invariant mass profile, and the assigned B examples do not include the half-line model. No later destination is assigned. |
| LPW Ex. 21.18, infinite birth-and-death balance products and summability | **Stand out-of-scope.** This infinite-state criterion is not the finite birth-and-death formula promised by PT-17. No later destination is assigned. |
| Aldous Lemma 13.2, total-variation contraction under a Markov transition | **Stand out-of-scope.** The owned convergence proof uses a product-chain meeting argument and countable Scheffé identity; it does not invoke general contraction. No later destination is assigned. |
| Aldous Lemma 13.3, total-variation limit is stationary | **Stand out-of-scope.** The ordinary-time theorem starts with an independently constructed invariant law and does not infer stationarity of arbitrary limits. No later destination is assigned. |
| Aldous Ex. 14.3, reflected-walk drift regimes | **Stand out-of-scope.** It is a model example absent from PT-17, not a proof input to the positive-recurrence equivalence. No later destination is assigned. |

### Batch-1 source-range reconciliation

This is a source-record issue, not a missing PT-17 theorem. The plan's PT-17
“Source backing read” names Durrett §§5.5–5.8 and §§6.1–6.3, LPW §§1.5–1.6,
4.1–4.3, 21.3 and Appendix C.1, and Varadhan §§6.1 and 6.3. Current batch-1
coverage names Durrett §§5.5–5.6 and 6.2, LPW §1.4, 21.3 and Appendix C.1,
and Aldous Lectures 13–15. The existing pair report inspected Durrett §5.7
and established that its periodic subsequential-limit and Orey tail-field
claims are not in the approved inventory; PT-17's Birkhoff/shift-ergodicity
claim does not assert the stronger Orey identification. The plan's own
harvest routes general-state kernel construction to PT-15/inline, places
general-state recurrence and convergence out-of-scope, and assigns Birkhoff
to MT-23/PT-17. Recommendation: **reconcile the plan's “read” source range
with the actual PT-17 coverage record** (including an explicit disposition
for any §5.7 result retained as read); do not enlarge PT-17 to periodic
subsequence limits or Orey's theorem. The historical missing-heading note in
the earlier pair report is resolved: current coverage contains explicit
out-of-scope rows for Durrett Examples 5.5.1–5.5.3, 5.5.14 and 5.6.3.

## Batch 9 — PDE-6 Poisson and interior harmonic estimates

The current 21/9-item manifest contains the PDE-6 overlay additions, so the
pre-overlay Step 3a report's “insufficient” conclusion is not used as a
current disposition. Six Schikorra results deferred to PDE-19 have a direct
future item or proof block in the current plan. The remaining fractional
Laplacian row names a related H^s destination but does not currently land on
an item that asserts its integral representation or symmetric-difference
integrability; that destination needs reconciliation.

| Source result | Current disposition | Assessment, boundary, and route |
|---|---|---|
| Schikorra Ex. 2.12, symmetric-difference integrability for the fractional Laplacian | Deferred to `bessel-potential-completions-and-real-order-sobolev-spaces` | **Reconcile / escalate the destination.** Keep the nonlocal integral out of PDE-6, whose plane-wave computation is the only fractional-Laplacian claim. PDE-14F currently promises the $H^s$ completion and weighted Fourier characterization, not the symmetric-difference integral identity/integrability estimate; the matching FR-6 Fourier characterization also does not state that integral. No current planned item is a complete route. A later owner must add the exact operator/integral claim to a plan item (potentially by amending PDE-14F/FR-6) or name a genuinely matching future page. Do not count the current destination string as proof that the claim is assigned. |
| Schikorra Thm. 8.2, variable-coefficient interior Schauder estimate | Deferred to `schauder-and-lp-elliptic-estimates` | **Stand deferred.** PDE-19 item 6 is the uniformly elliptic interior Schauder estimate; PDE-6 remains the Laplacian-only estimate. |
| Schikorra Exs. 8.4–8.6, Hölder interpolation/absorption inequalities | Deferred to `schauder-and-lp-elliptic-estimates` | **Stand deferred.** PDE-19 item 5 freezes coefficients and absorbs their oscillation; the PDE-6 Newtonian-potential route does not require this general-coefficient proof. |
| Schikorra Thm. 8.7, global Schauder estimate by scaling | Deferred to `schauder-and-lp-elliptic-estimates` | **Stand deferred.** PDE-19 item 9 owns the global estimate and classical Dirichlet solvability. |
| Schikorra Ex. 8.9, Hölder Taylor remainder | Deferred to `schauder-and-lp-elliptic-estimates` | **Stand deferred.** Its use is in the later coefficient-freezing/Schauder route (PDE-19 items 5–6); the current Laplacian proof does not claim it as a separate result. |
| Schikorra Ex. 8.10, compactness limit in blow-up proof | Deferred to `schauder-and-lp-elliptic-estimates` | **Stand deferred.** PDE-19 item 8 explicitly uses compactness to obtain global Schauder regularity; PDE-6 uses its explicit kernel estimate instead. |
| Schikorra Lemmas 8.12–8.13, cutoff/interpolation route to Theorem 8.11 | Deferred to `schauder-and-lp-elliptic-estimates` | **Stand deferred.** PDE-19 items 8–9 own the global regularity/estimate claims; this alternative absorption proof is not needed in PDE-6. |
| Simon Problem 4.1, smoothness of weak harmonic solutions | Out-of-scope | **Stand out-of-scope.** PDE-6 items assume classical harmonicity and do not claim weak-solution regularity. The published `cor-locally-integrable-weakly-harmonic-functions-are-smooth` is the available library route if a weak formulation is later needed; no new PDE-6 item is justified. |

## Batch 10 — PDE-12 smooth approximation and Sobolev extension

The three deferred claims have direct matching later plan items. The one
out-of-scope capacity example has no current destination, and the current
batch does not make any dense-singularity claim.

| Source result | Current disposition | Assessment, boundary, and route |
|---|---|---|
| Laugesen Ex. 3.11, one-dimensional Hölder estimate | Deferred to `sobolev-poincare-and-morrey-inequalities` | **Stand deferred.** PDE-14 item 11 proves Morrey's estimate/representative; PDE-12's extension construction does not need the embedding result. |
| Laugesen Ex. 3.13, Poincaré inequality for $H^1_0$ | Deferred to `sobolev-poincare-and-morrey-inequalities` | **Stand deferred.** PDE-14 item 7 is exactly the zero-boundary Poincaré theorem; no such inequality is assumed by the PDE-12 density/extension claims. |
| Laugesen Ex. 3.14, weak Poisson solution | Deferred to `lax-milgram-and-weak-elliptic-solutions` | **Stand deferred.** PDE-16 item 13 proves existence/uniqueness for the weak Dirichlet Poisson problem; PDE-12 supplies approximation and extension only. |
| Laugesen Ex. 3.9, dense sets of Sobolev singularities | Out-of-scope | **Stand out-of-scope.** This is a capacity/fine-properties construction, not an input to approximation, zero extension, or bounded-domain extension. There is no matching future page/item in the current plan; if wanted, the plan needs an explicit capacity example destination. |

## Batch 14 — RG-10 branching, Young's rule, and Schur–Weyl interface

The RG-10 inventory deliberately proves Young's rule by semistandard maps
and integral Garnir straightening, and proves only the finite-dimensional
Schur–Weyl interface for tensor powers. The future routes below do not enlarge
those current statements.

| Source result | Current disposition | Assessment, boundary, and route |
|---|---|---|
| Craven Thm. 2.16 proof's Ex. 2.5(iv), RSK dimension count | Out-of-scope | **Stand out-of-scope for RG-10.** Its proof method is not used: RG-10 proves semistandard-map spanning directly by Garnir straightening. The RSK count itself has the actual RG-11 destination `the-hook-length-formula-and-rsk-correspondence`; no RSK dependency should be added to RG-10. |
| Snowden Rem. 3.27, RSK dimension-count route to spanning | Deferred to `the-hook-length-formula-and-rsk-correspondence` | **Stand deferred.** RG-11 explicitly proves RSK and the hook formula; RG-10 uses its independent direct spanning proof. |
| Etingof Props. 4.61–4.62, Schur-polynomial and dimension formulas | Out-of-scope | **Stand out-of-scope for RG-10.** It promises neither full Schur characters nor a dimension formula. Actual future routes split across RL-8's Schur-module/Schur-character block and RL-7's Weyl-dimension formula; the current RG-10 highest-weight/cutoff result remains the only claim here. |
| Etingof Thm. 4.63, full Weyl character formula | Out-of-scope | **Stand out-of-scope for RG-10.** RG-10 uses only the nonvanishing/length-cutoff interface. RL-7 `weyl-character-and-multiplicity-formulas` is the actual future general Weyl-character destination. |
| Etingof Prop. 4.64, determinant twists of $GL(V)$ factors | Out-of-scope | **Stand out-of-scope for RG-10.** Its tensor-power factors are homogeneous of degree $n$; rational determinant twists are not asserted. RL-8's `prop-determinant-twists-translate-glr-highest-weights` is the future route. |
| Lin Ex. 27.11, general exterior-power presentation of Schur functors | Out-of-scope | **Stand out-of-scope.** RG-10 needs the tensor multiplicity/highest-weight interface, not a quotient presentation of all Schur functors. No current plan item states the general presentation. |
| Lin Ex. 27.12, exact sequence presenting $S_{(2,1)}$ | Out-of-scope | **Stand out-of-scope.** The current $V^{\otimes3}$ example follows from the double-centralizer decomposition and does not assert this presentation. No current destination is assigned. |
| Lin Thm. 27.13, classification of all algebraic $GL$ representations | Out-of-scope | **Stand out-of-scope.** RG-10 covers only homogeneous factors appearing in tensor powers. RL-8 has polynomial/rational Schur-module and determinant-twist ingredients, but the current plan does not assign an exhaustive algebraic-$GL$ classification theorem; do not imply that it does. |

## Batch 16 — RG-23 unitary induction

The one deferred example has a direct RG-28 destination. The other source
results do not add claims to the current quotient-measure/induction
construction; some have possible conceptual neighbors but no matching
planned theorem, so they remain out-of-scope rather than being routed by
association.

| Source result | Current disposition | Assessment, boundary, and route |
|---|---|---|
| BHV Thm. B.1.4(ii), every quasi-invariant measure is associated to a continuous $\rho$-function | Out-of-scope | **Stand out-of-scope, with corrected evidence.** The old pair report's witness $(1+1_{\mathbb Q})dx$ is invalid: it is exactly $dx$ as a measure, so the continuous density $1$ represents it. A valid witness is on $G=\mathbb R$, $H=\{0\}$: let $d\mu=w(x)dx$, with $w=1$ on $x<0$ and $w=2$ on $x\ge0$. This is a nonzero Radon measure equivalent to Haar, hence quasi-invariant under all translations. If a continuous positive $\rho$ represented $\mu$ by the B.1.4 Weil identity, RN uniqueness would give $\rho=1$ a.e. on $(-\infty,0)$ and $\rho=2$ a.e. on $(0,\infty)$, forcing these values everywhere on those open intervals and contradicting continuity at 0. The source says “associated as above”; part (i) defines that by equality in the Weil integral formula, not merely equivalence of measure classes. RG-23 therefore keeps its narrower distinction between a quasi-invariant measure class and the constructed strongly quasi-invariant representative with continuous cocycle; it does not claim all representatives have continuous densities. No future page is assigned to the broader false assertion. |
| BHV Ex. E.1.8(iii), $SL_2(\mathbb R)$ principal series | Deferred to `sl2-r-principal-and-complementary-series` | **Stand deferred.** RG-28 explicitly owns Iwasawa coordinates, normalized induction, and the principal-series model; RG-23 supplies its induction construction. |
| BHV Prop. E.2.1, induction preserves equivalence of subgroup representations | Out-of-scope | **Stand out-of-scope.** The pointwise induced unitary map is not used by the assigned quotient, continuity, or induction-in-stages claims. No later item is assigned to this functoriality statement. |
| BHV Prop. E.2.2, induction distributes over arbitrary direct sums | Out-of-scope | **Stand out-of-scope.** The current Hilbert induction construction and four examples do not assert a direct-sum comparison. No exact destination is assigned. |
| BHV Cor. E.2.3, irreducibility of induced representation forces irreducibility of the source | Out-of-scope | **Stand out-of-scope.** RG-23 makes no irreducibility claim; this is a later Mackey/representation-theory question, but no current planned item states this converse. |
| BHV Prop. E.2.5, tensor-product identity for induced representations | Out-of-scope | **Stand out-of-scope.** It is not an input to the quotient-measure construction or induction-in-stages proof, and no matching destination is planned. |
| BHV Cor. E.2.6, restriction tensoring with a quasi-regular representation | Out-of-scope | **Stand out-of-scope.** It follows the omitted tensor identity and is not used by RG-23's assigned claims or examples. No destination is assigned. |
| Bruhat Ch. 7 §3.4, relatively invariant character extension criterion | Out-of-scope | **Stand out-of-scope.** RG-23's invariant-measure criterion uses equality of modular functions on $H$; it does not claim the more general extension criterion for a relatively invariant measure. No future route is assigned. |
| Vogan §1, abstract induction-adjunction motivation | Out-of-scope | **Stand out-of-scope.** The assignment constructs unitary Hilbert induction and asserts no algebraic adjunction. No later destination is assigned. |
| Vogan §2, ring-module tensor/Hom adjunction examples | Out-of-scope | **Stand out-of-scope.** These motivate algebraic induction but supply no topological, quotient-measure, or Hilbert proof step in RG-23. No destination is assigned. |

### Batch-16 source-range reconciliation and settled disposition

The RG-23 plan names Colojoară–Gheondea Ch. 4 §§1–4 and BHV Appendix E
§§E.1–E.3 as “Source backing read”; current coverage instead names BHV
Appendices B and E.1–E.2, Bruhat, and two Vogan notes. The previous pair
report found that all actual H1–H5 claims have inspected alternative
support, but that Colojoară–Gheondea is not in coverage and BHV E.3.1
(invariant-vector characterization) has no harvest row, item, or current
consumer. Recommendation: **reconcile the source matrix**, and either add an
explicit out-of-scope disposition for E.3.1 / narrow the declared E range,
and correct the “read” label for Colojoară–Gheondea / record the actual
replacement treatments. E.3.1 is not a missing RG-23 claim: its invariant
vector/finite-invariant-measure criterion is absent from the approved
inventory. Do not expand RG-23 on this evidence.

The BHV row remains correctly out-of-scope, but the historical pair-report
rationale must not be reused verbatim. The null-set witness correction is
the only newly confirmed defect in the settled batch-16 review; the positive
jump-density witness above is the valid replacement evidence.

## Handoff findings

1. **Actionable row-level route gap:** batch-9 Exercise 2.12 is marked
   deferred to PDE-14F even though PDE-14F/FR-6 do not currently promise its
   symmetric-difference integral claim. Keep the PDE-6 claim boundary and
   reconcile the future destination before treating that row as fully
   dispositioned.
2. **Source-record reconciliation:** PT-17 and RG-23 each declare read ranges
   broader/different from the current coverage records. Existing alternate
   proofs keep their mathematical inventories supported, but the declared
   source matrix and harvested rows should be aligned.
3. No other unsupported current claim was found among the 46 rows. Deferred
   destinations for the other 11 rows map to actual later plan items; the
   remaining out-of-scope rows preserve the current item claims, with no
   fictitious destination supplied.

