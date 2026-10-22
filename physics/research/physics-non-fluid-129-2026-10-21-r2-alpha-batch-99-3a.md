# Batch 99 Step 3a adjudication

Run: `physics-non-fluid-129-2026-10-21-r2`; group: `batch-99`; covers: 99 only.

Read the dispatched order, scope, reader report/findings and refuter report. Eight touched obligations; no page, reader or refuter finding obligations. All nine current items and their direct cited supplier statements were independently reviewed. The root mathematics/imports and published carriers remain read-only. All claims in this batch are mathematical conditional results, not empirical evidence.

Exact historical evidence: every current item initially matched the raw SHA256 in the post-reader snapshot. Every pre-reader item was recovered byte-for-byte at `research/physics-non-fluid-129-2026-10-21-r2-owner-step2-csm84-85-99/current/<id>.md` and matched the pre snapshot. No historical-preimage uncertainty remains. The five source edits and three contract-only changes agree with the reader report.

## def-qsmx-conjugate-hilbert-space-and-antilinear-adjoint

Checked all three steps: conjugate scalar multiplication makes c_H an onto antilinear isometry; Cauchy completeness transfers. Dense-domain bounded functionals extend uniquely and Riesz under Countable Choice gives the linear adjoint. With tilde(S)*y=c_H z the conjugate-space identity is exactly <Sx,y>=<z,x>. No dense-adjoint-domain or closability assertion is smuggled into this definition; H=0 is allowed.

## def-qsmx-von-neumann-algebra

Checked Definition and steps 1.1–2.1 against the imported WOT definition and double-commutant theorem under AC. The identity omega(x*x)=||x Omega||^2 proves precisely faithful iff separating for unit Omega. GNS supplies cyclicity only. The reader explicitly defines nonempty directed preorders/nets and real nonnegative functional values. Zero H admits no unit vector, so its unit-vector clause is vacuous; its algebra/topology clauses remain meaningful.

## lem-qsmx-trace-class-duality

Checked all six steps. SVD indexes positive singular values, with empty rank-zero expansion; nuclear-tail inequality proves trace-norm density without an ambient Hilbert basis. R_{xi,eta} is linear in xi and conjugate-linear in eta. Riesz on conjugate b gives a linear X; Tr(R X)=<X xi,eta> by the adjoint formula. Ideal and trace bounds pass to the trace-norm limit. Rank-one testing proves both isometry and uniqueness; the zero space is explicitly handled. AC covers imported Countable Choice.

## lem-qsmx-bicommutant-and-commutant-cyclicity

Checked all seven steps. The orbit closure in a finite amplification is a closed linear subspace reduced by D_r; its projection blocks lie in R prime. Thus D_T preserves this orbit closure for T in R double-prime, giving simultaneous finite-tuple SOT approximation. WOT closure and the imported theorem give the reverse inclusion. Cyclic to separating uses boundedness on a dense orbit; separating to cyclic uses I-P in M prime. Empty neighborhood tests and zero H cause no failure. AC covers the projection supplier.

## lem-qsmx-linear-closed-polar-decomposition

Checked all six steps, including the graph projection proof that I+A*A is onto, the bounded symmetric inverse and dense range, and the adjoint-domain proof of self-adjointness. H1=0 is discharged before the nonzero-H spectral theorem; H2=0 also works. Negative spectral support is excluded by bounded negative spectral intervals. The minimizer identity and monotone integral convergence prove D(A) subset D(P); spectral cutoffs and graph closedness prove the reverse inclusion and norm equality. The unbounded range-kernel identity is proved directly, not cited from the bounded supplier. V(Px)=Ax is well defined; its isometric extension and zero kernel summand give U, its closed final range and uniqueness. Injectivity plus dense range gives a surjective isometry.

## lem-qsmx-monotone-bounded-positive-net

Checked all three steps. Each quadratic net converges to its real supremum; the linear-first four-term polarization produces a bounded sesquilinear limit, so Riesz gives x in M by WOT closure. Quadratic inequalities give the least upper bound. The positive-form Cauchy–Schwarz proof treats both v>0 and v=0, yielding ||(x-x_i)xi||^2 <= C<(x-x_i)xi,xi>. Reader handles H=0 before a unit-sphere supremum; C=0 is also immediate. Nonempty directed indexing and AC are explicit.

## ex-qsmx-nonfaithful-gns-vector

Checked all six steps. Coordinate projections and matrix units compute the defining commutant as scalars; rank-one operators give cyclicity, while projection onto xi-perp is nonzero for n>1 (I kills the zero vector). Matrix units prove Hilbert–Schmidt completeness and the correct linear-first trace inner product. Left/right multiplications are bounded and mutual commutants. Strictly positive rho gives invertible sqrt(rho), so a=X rho^(-1/2) gives the entire orbit and zero annihilator. Cyclic trace gives the stated vector functional. No n=1 counterclaim or singular-density assertion is made.

## lem-qsmx-closed-antilinear-polar-calculus

Checked all four steps and F4–F5. The real-linear graph isometry sends the antilinear graph to its complex-linearization; a closed extension makes the graph closure a graph. With A=tilde(T), J=U c_H and P=c_H^(-1) B c_H have the exact composition domains. Transporting the real spectral projections proves positive self-adjointness and P^2=T*T. Kernels and orthogonal complements transport under c_H. The Tomita rule is well defined by separatingness, dense by cyclicity; commutant cyclicity kills each possible nonzero vertical graph limit and proves closability. The conclusion factors the closure, not merely closable S. No unproved S0-prime equals adjoint identity is asserted.

## lem-qsmx-von-neumann-predual

Checked all six steps. M_perp is a closed common kernel; the quotient injection into M* is independent of representatives and bounded by the quotient norm. Quotient-dual annihilator and trace-class duality reduce surjectivity to M_perp-perp=M. A finite WOT neighborhood outside M yields a finite coordinate subspace and a separating linear functional; its rank-one trace representative annihilates M but not X. This proves the double-annihilator identification without assuming a general representation theorem. AC supplies Countable Choice for quotient completeness and the ultrafilter lemma for Alaoglu. Bounded SOT convergence, finite-rank density and uniform trace-tail bounds prove normality of positive quotient functionals, including all vector functionals. No positive lift or converse characterization of all normal functionals is needed; H=0 and C=0 are harmless.

## Dispositions and amendments

Six touched carriers receive `amended_repair`: the reader mathematics is retained; Alpha corrects printed-page labels in source metadata and synchronizes the manifest statement/source snapshots. `lem-qsmx-monotone-bounded-positive-net` is included among those six. The unchanged antilinear carrier and finite-matrix example receive `reviewed_no_defect`, `change_kind: audit_enrichment`, `defect_ids: []`; their pre/post item bytes are identical. The untouched conjugate-Hilbert-space definition receives its required risk review only, with no extra decision. Completed repairs have `repair_confidence: 1`.

Reader repairs are recorded as closed nonfatal defects; they are not newly routed reader findings. The linear polar repair closes a substantial supplier-scope gap locally and preserves the full claim. No new mathematical claim, dependency, page or item is introduced. All source/proof provenance remains truthful, and no changed carrier has a stale judge record.

Next action: append the closed ledger rows, finish the exact source/consumer evidence, and run focused checks on the final edited carriers and contract.

Final proof polish: predual proof 2.2 incorrectly referred to local step 1.1 for the limit norm bound. Alpha replaces that reference with the explicit inequality `||x xi|| = lim_i ||x_i xi|| <= C||xi||`. The claim and consumers are unchanged; the contract is regenerated for this proof edit. This is a further closed nonfatal citation defect. Audit-count correction: the linear polar proof has six numbered steps; an earlier ledger evidence note said seven. The current report, decisions and risk review use the correct count; the mathematical review is unchanged.

## Source evidence and limits

Primary sources were retrieved with the web PDF reader. Local `pdftotext` is unavailable; that attempted extraction supplied no evidence. The review uses the actual source passages below, the pinned mathematical supplier statements, and the local arguments, rather than treating a source or prior review as a verdict.

- [Hiai](https://arxiv.org/pdf/2004.02383), §§1.1–1.3, PDF pp. 3–4, §1.9 pp. 9–10, §2.1 pp. 10–11, and Appendix A.1 p. 142: operator topology/order conventions, cyclic/separating data, Tomita closability, and spectral-domain/resolvent formulas were checked. The source uses a different inner-product convention; the authored conjugate-space formulas were checked directly in the linear-first convention. The graph-projection polar proof is local, not claimed as a proof read in Hiai.
- [Blackadar](https://bruceblackadar.com/Mathematics/Cycr.pdf), I.2.5.3–I.2.5.4, PDF p. 18 / printed p. 10; I.8.5.3–I.8.6.2, PDF pp. 52–53 / printed pp. 44–45: checked commutants/amplifications, trace ideals, finite-rank density, trace-class duality and the weak-star topology. The precise section identifiers resolve independently of page numbering. Alpha fixes the incorrect PDF labels in the six owned source records, without changing their section identifiers.
- [Witten](https://arxiv.org/pdf/1803.04993), §3.1, printed pp. 18–20 (PDF pp. 19–21), equations (3.1)–(3.10), footnotes 14–15: checked the graph-closure and closability discussion and the explicit warning that the elementary adjoint calculation gives only an extension. The owned antilinear lemma does not claim the stronger adjoint equality.
- [Anantharaman–Popa](https://www.idpoisson.fr/anantharaman/publications/IIun.pdf), §7.4, Theorem 7.4.5 and its complete proof, printed pp. 114–115 (PDF pp. 120–121), with Remark 7.4.7 continuing onto printed p. 116: checked that the theorem is for a tracial von Neumann algebra in its standard representation. It is comparison material, not a supplier for the arbitrary concrete quotient construction. The two owned locators now correctly call 114–116 printed pages.

The 47 unique declared direct dependency IDs comprise six owned suppliers, 39 imported mathematical suppliers, and the two local published suppliers `lem-qsm-state-gns-construction` and `lem-qsm-matrix-state-calculus`. All 39 imported raw hashes match `research/math-imports.json`. The published GNS statement gives a cyclic representation for consistent local density inputs under Countable Choice, without a separating-vector conclusion. The matrix supplier gives the finite spectral and trace calculus used in the example. Imported AC, Countable Choice, Riesz, projection, SVD/nuclear/trace, spectral, monotone-integral, quotient-dual and Alaoglu statements were opened with their hypotheses. This is a review of the actual direct uses, not a recursive audit of all transitive mathematics or every page in the prerequisite library.

## Consumer and frontier review

The reader's Definition/Statement clarifications were checked against every current direct dependency or item-reference consumer found by searching their four supplier IDs. Within batch 99, the bicommutant, monotone-net, antilinear, predual and matrix-example arguments use the same concrete algebra, order, trace or closed-operator domains. The linear-polar consumer is `lem-qsmx-closed-antilinear-polar-calculus`; its graph closure is a closed densely defined linearization, including zero spaces, so the clarified supplier applies exactly.

Outside batch 99, the actual relevant uses were inspected in `def-qsmx-standard-modular-data`, `lem-qsmx-tomita-operator-involution`, `def-qsmx-von-neumann-kms-state`, `lem-qsmx-modular-resolvent-core`, `thm-qsmx-tomita-takesaki`, `thm-qsmx-finite-modular-density`, and `post-tgrx-wedge-modular-model`. These uses require the unchanged algebra/commutant and cyclic/separating definitions, the same basis-free trace pairing, or the predual/vector-normality/compactness conclusions. Defining positivity through the quotient injection preserves their uses. No consumer repair is necessary, so there is no next-hop interface propagation or outside-scope escalation. The final Alpha proof-bound correction and citation-label edits do not change any Statement or Definition.

Read `briefs/tasks/frontier-dependency-ledger.md`: its owned input is `research/physics-non-fluid-129-2026-10-21-r2-batch-99.cross-batch-dependencies.json`, currently `[]`. No new same-run external-batch supplier was found or introduced; the two local earlier mathematical suppliers are published. That input remains accurate and unchanged; no refresh or shared-ledger mutation is necessary. No defective published item was found, so the published-consumer ledger and its lock were not touched. No proposed withdrawal exists in this scope.

Neither assigned page nor any assigned item contains a TikZ/tikzcd diagram. The arguments specify their constructions algebraically; no missing diagram is necessary to state or prove a scoped claim.

## Final local checks and handoff

The six edited item paths were batched explicitly in every item-format check:

`items/def-qsmx-von-neumann-algebra.md`, `items/lem-qsmx-trace-class-duality.md`, `items/lem-qsmx-linear-closed-polar-decomposition.md`, `items/lem-qsmx-bicommutant-and-commutant-cyclicity.md`, `items/lem-qsmx-monotone-bounded-positive-net.md`, `items/lem-qsmx-von-neumann-predual.md`.

- Reflow: five unchanged; bicommutant Facts paragraphs joined mechanically. No mathematical text changed in that reflow.
- Regenerated citations/derivations for the six edited contract entries, preserving boundary records and all nine risk reviews.
- `node tools/physics-support/proof-contract.mjs research/physics-non-fluid-129-2026-10-21-r2-batch-99.proof-contracts.json --strict`: exit 0, 9/9 checked, zero errors or warnings.
- `node tools/physics-support/risk-report.mjs research/physics-non-fluid-129-2026-10-21-r2-batch-99.proof-contracts.json`: initial routing completed; all nine required reviews authored above and in the contract. Final rerun with `--require-reviewed`: exit 0, nine routed items, zero errors.
- `node tools/physics-support/tsx-run.mjs tools/physics-support/precheck.mts <six explicit paths above>`: exit 0, six checked, zero failing.
- `node tools/physics-support/rendercheck.mjs <six explicit paths above>`: exit 0; YAML and all mathematics parsed under the real renderer/KaTeX.
- After all final edits and reflow, `node tools/physics-support/proof-layout.mjs <six explicit paths above>`: exit 0, six items, 31 steps, zero defects.
- Closed defect ledger: twelve rows appended through the serialized ledger tool, all referenced by the applicable touched decision. The generated ledger view was refreshed. No mechanical failure was entered as a defect.
- Decisions JSON contains exactly the eight scope obligations, with six `amended_repair` and two `reviewed_no_defect` audit-enrichment dispositions; no extra obligation or decision hash was authored.

No remaining mathematical blocker, unresolved defect, outside repair request or owner escalation. The engine still owns decision hash sealing, gate battery, judgment and stage transitions; none was initiated here. No publication or commit was performed.

Final locator refinement after checking the complete section anchors: Blackadar I.2.5.3–I.2.5.4 is printed p. 10 / PDF p. 18; I.9.1.1–I.9.1.2 is printed pp. 49–50 / PDF pp. 57–58; I.3.2.5 is printed p. 17 / PDF p. 25. The bicommutant and monotone-net item/manifest source records now give these correct printed numbers. These two corrections refine the existing locator defects; their earlier ledger notes describing the edit as only a label change should be read with this correction. All section identifiers and mathematical claims remain unchanged. Final metadata-only refinement was followed by the same focused check commands and batched proof-layout check.
