# Batch 109 Step 3a adjudication

Run: inverse-problems-knot-theory-all-109-2026-10-19. Group: batch-109.

Review in generated dependency order. No native acceptance, judge cycle, stamping or publication is asserted.

## Completed lower-level review

- `def-piccirillo-conway-pair`: named Figure 1/2 isotopy classes, auxiliary orientations only; accepted locator correction (arXiv v1 pp.2–3). No mathematical interface change.
- `def-dualizable-handle-link`: meridional sublinks imply R unknotted and geometric one-pass presentations; zero linking is a separate condition. Countable Choice is explicit. The corrected §3/Theorem 3.1 locator agrees with arXiv v1 p.4. No defect.
- `lem-knot-exterior-h1-is-generated-by-meridian`: relative normal disk generates H2(N,∂N); collar excision and vanishing H2/H1(S3) give the connecting isomorphism. Meridian orientation and integral coefficients preserved. No defect.
- `lem-dualizable-slide-clears-meridian-disk`: signed parallel, disk arc avoiding finitely many punctures, full framing seams and product-bigon isotopy reduce the actual intersection count by one. Empty count terminates immediately; finite induction uses no extra choice. Corrected source locator accepted.
- `lem-slice-disk-complement-h1-is-generated-by-meridian`: excised pair is (D2×D2,D2×S1); its connecting normal disk maps to the same boundary meridian. Inclusion sends generator to generator, proving the isomorphism. No inference about π1 is made.
- `thm-dualizable-handle-link-has-two-knot-trace-descriptions`: crossing-switch calculation equates half-sum and meridian coefficient; signed slides preserve linking because f(B)=0, and framing formula f(G)+f(B)±2lk gives zero. Geometric cancellation after disk clearance and role reversal give both traces. Diagram arrows match these separate reductions. Accepted locator correction.

Sources read: Piccirillo arXiv:1808.02923v1, Definition 1.2, Lemma 1.3 pp.2–3, Proposition 1.4 p.3, §3/Theorem 3.1 pp.4–5. Direct supplier statements were opened: peripheral/exterior/link/regular-diagram/framing definitions, Countable Choice, linking invariance and scan, excision, pair sequence, sphere/cellular homology, slide definition and diffeomorphism theorem, cancellation, boundary embedding and inverse function theorem. Fixed tube data are supplied; no infinite selection is inferred.

## Initial checkpoint

The following sections record completion of the higher-level review and source repair.

## Trace-embedding review

`thm-knot-slice-iff-zero-trace-embeds-in-s-four`: both directions are valid with fixed tube data. The reverse implication uses a small round coordinate sphere in standard S4, a positive linear radial map, compact C1 control and degree-one tubular projection; it does not invoke smooth Schoenflies. The new diagram has the right mathematical objects, but its percent-comment shares a line with all central sphere/cap commands, suppressing them in TeX. Restored the newline after that comment. Verdict amended repair; no mathematical interface change. Risk complete.

## Level 5 review and open prerequisite

`lem-piccirillo-diagram-produces-dualizable-handle-link`: reader:109:1 and refuter:109:1 identify the same genuine fatal gap. The JSON target is `literal N-pd.json`; target-isomorphism checks local halfedges/ports/words. The target input has only PD/simple arrays. Annals Proposition 1.4 and §2 (pp.583–586), Figure 4 caption pp.587–588, identify the source construction, not any unbound local encoding. F8 imports only the terminal source identification, which cannot be applied to these bytes without the missing correspondence. Current raw target content was inspected, but no source redigitization or lost map recovered. The mathematical prerequisite remains open: source-bound N transcription or a direct framed isotopy to the named partner. Owner decision: supply it, or explicitly authorize a coherent broader external construction pivot; do not inherit source binding from earlier acceptance. Provisional review: fatal obligations required closure and risk was left open; no final escalated decision was issued at this point.

The separate reader:109:2/refuter:109:2 citation defect is nonfatal and repaired: step14.1 now points to slides 5.2–6.1, cancellation 7.1, and terminal movie 8.1–13.1. This repair does not close the missing binding.

`ex-unknot-zero-trace-and-dualizable-cancellation`: zero Euler-class clutching gives the trivial S2 disk bundle; standard sphere has the explicit two-vector normal frame. Disjoint meridian disks and geometric cancellation give the stated unknot from either branch. Diagram arrow labels match remaining components. Source locator correction accepted; risk complete.

## Seifert surface review

`lem-conway-seifert-surface-and-matrix`: read every step, the actual algorithm instructions and separate surface correctness statements, the push-first pairing convention and bilinearity, and the linking/intersection interface. The Figure1 knot/red-circle distinction agrees with the original figure. Eight interval cycles on four disks/eleven bands give genus four, not a genus-minimality assertion. Collins corrected 2013 original PDF §§3.1–3.3 pp.8–12 was read at https://webhomes.maths.ed.ac.uk/~v1ranick/papers/collinsseifert.pdf (the cited SBM site denied access); its push-second counts transpose to the authored rules. Exact integer checks: det(P)=det(P′)=1, PᵀBP=V and (P′)ᵀBᵀP′=V. The degree-at-most-eight determinant agrees with t⁴ at t=0,…,8, proving the polynomial identity. Full AC and orientation reversal handled. Locator correction accepted, risk complete. SymPy was unavailable; these checks used a short exact integer Bareiss implementation.

## Lee computation review

`lem-piccirillo-knot-lee-computations`: read both exact inputs, all proof steps and rank rows, and actual rational cube, Lee operations, spectral-sequence and s-definition suppliers. Reran the standard-library Conway script: 18,246 generators, 119,684 arrows, 8,038 equal-q cancellations, central Kh ranks matching all three rows and transferred coefficient 2/3. Adjacent-degree truncation preserves that central computation; its outer rows are not claimed as full homology. Source Figures1/2 and published §3 pp.586–587, Table1 p.589 agree with the named partner and surviving q3 argument. The original preprint's incoming-degree typo is correctly avoided: incoming is (-1,3−4k), outgoing (1,3+4k). No such target exists for the partner. The limiting levels are (-1,1) for Conway and (1,3) for partner, using the definition's separate rank-two well-definedness. Full partner computation was not rerun. Both collapsed pipe tables repaired with identical entries. Refuter:109:6 confirmed nonfatal; touched decision amended repair. Risk complete.

## Completed source repair: supersedes provisional open prerequisite

The provisional open review above is preserved as history. Existing owner authorization in CLAUDE.md §12 permits precise established external inputs; no additional authorization or acceptance is inferred. The smallest coherent closure is the **full** external zero-trace equality in Annals Proposition1.4 (p.583), rather than its terminal isotopy applied to unbound local bytes. F8 now states this import explicitly. Step13.1 composes H≅X0(C) from step4.1 with that published equality. H is dualizable by step5.1, so the full original existential claim follows without a source-panel-N correspondence. Original steps1–12 and the local records remain; step12 and Proof evidence state their actual local-N limit. A local/source correspondence is still unknown, but no longer a prerequisite of the claim. The original defect is confirmed fatal and repaired, never relabeled false-positive. The full local movies were not replayed. Embedded initial-cancellation and F/G/H geometric transport notes in `alternate-trace-certificate.json.gz` were read; their framed disk pushes and marked transport supply the local H witness. Source import is explicit, classical/full-AC, and neither a reconstructed proof of Proposition1.4 nor native acceptance.

`thm-piccirillo-conway-trace-partner-has-s-two`: F1 and step1.1 now describe the repaired supplier route; the Lee conclusion stays unchanged. Refuter:109:3 confirmed fatal, repaired supplier-first.

`cex-zero-trace-does-not-force-concordance`: F4 now describes that same actual route. The annulus is connected, oriented, genus zero and product-collared, so the actual cobordism bound forces equal s, contradicting 0/2. Refuter:109:4 confirmed fatal, repaired supplier-first. Both statements and chosen witness pair unchanged. Risks complete.

`lem-conway-knot-alexander-polynomial-one`: determinant t⁴ is a Laurent unit; the supplied full-AC determinant theorem and unique symmetric normalization give1. The separate rational fraction Delta/(1−t) is not used. Source correction accepted; risk complete.

`thm-conway-knot-topologically-slice-not-smoothly-slice`: the topological branch uses the actual local smooth-input Alexander-one theorem and its standard-ball conclusion. Its three-step proof was read, including framed compression charts, seam rounding, independence of short curves, empty g=0 surgery and final radial rescaling. FQ §11.9 Theorem11.11 and proof (PDF pp.238–239, printed224–225) were checked as a contractible-manifold criterion; no standalone standard-ball conclusion is attributed to it. The smooth branch applies the repaired named trace theorem, the two-direction embedding lemma and genus bound, giving2≤0. Refuter:109:5 confirmed fatal, repaired supplier-first. Remaining Theorem1.1 arXiv locator corrected p3→p2. Risk complete. The 135-step deeper Casson-handle supplier was not re-audited.

No Statement/Definition was changed. All own direct consumers of the proof-route change were read; necessary factual descriptions were synchronized. No outside consumer requires a changed interface, and no withdrawal or published-item repair is proposed. All original IDs and page inventories remain. Historical readiness/escalation text is retained in the contract's historical_prerequisite_status; current review does not assert a prior owner acceptance.

## Decisions, metadata and final local checks

The decisions file contains exactly twenty obligations: twelve touched carriers, two reader findings and six refuter findings. Seven source/reference locator normalizations use reviewed_no_defect/change_kind metadata with empty defect_ids; five touched carriers use amended_repair. All eight findings are confirmed (five fatal obligations and three nonfatal obligations), with repair_confidence1 and exactly one closed row each. Shared reader/refuter findings use the same exact defect row, and touched/refuter amendments share their actual defect rather than manufacturing duplicates. Seven unique fixed rows are ipkt109-b109-3a-{endpoint-source-binding, operation-references, partner-trace-inference, concordance-witness, nonslice-trace-inference, rank-table-layout, cone-diagram-comment}. No final escalation remains. Provisional open risk/history above remains explicit; the local/source endpoint correspondence remains unknown and is not used in the repaired conclusion.

Manifest source/provenance mirrors and coverage were synchronized, including the explicit Annals external input and actual source-version locators. Historical coverage/readiness notes are retained. No old verification.judge existed on modified carriers. Outside supplier bodies were read only to assess current uses; no whole-library audit or outside mathematical repair is asserted. Both assigned page bodies remain empty with compact-v1 and unchanged inventories. All sixteen assigned Statement/Definition/Example sections are complete, uninterrupted and link-free; original interfaces compare equal to Git originals.

Checks after the final item edits and formatter:

- Exact integer matrix checks and exact-rational Conway Lee run passed as recorded above. PD label checks find eleven/fifty-five crossings and22/110 arc labels, each occurring twice; oriented sign counts agree after applying the stated counterclockwise incoming-under convention.
- Reflow ran on all six changed item paths. Its table collapse was repaired afterward, preserving all entries; the TeX comment was removed. An overbroad interim replacement was caught by precheck, restored from the exact Git original (SHA56c25fd2b12f… equal to immutable pre/post lemma hash), and reapplied with anchored labels. It left no intermediate removal in the final carrier.
- Final precheck: six files, zero failures. Final proof-layout command batched all six changed paths: six items,39 steps, zero defects.
- rendercheck on those six paths: passed, real KaTeX and renderer YAML parsing clean. It does not compile TikZ; diagrams were reviewed at source level, including comment semantics.
- proof-contract on the owning contract with --strict:16/16 items, zero errors/warnings. Stale direct-supplier quote mirrors were regenerated from actual statements, with no mathematical source edit.
- risk-report before/after review, and final --require-reviewed: zero errors; all fourteen HIGH/CRITICAL items have specific complete reviews.
- Exact obligation, ledger-reference, all-sixteen-interface and page-body assertions passed. No engine stamp, judge cycle, acceptance, publication, commit or push was performed. Engine-owned hash stamping and gate battery remain next.

Current raw file comparison with the immutable pre/post snapshots (SHA256 prefixes; full current hashes remain engine-owned inputs):

| Item | Reader pre | Reader post | Current |
| --- | --- | --- | --- |
| `def-piccirillo-conway-pair` | 9696fa6e8f50 | c91ed01d5470 | c91ed01d5470 |
| `def-smooth-zero-trace` | ce1a0b54b29c | ce1a0b54b29c | ce1a0b54b29c |
| `def-dualizable-handle-link` | 030b44e0727f | 72c0f1c4fd5c | 72c0f1c4fd5c |
| `lem-knot-exterior-h1-is-generated-by-meridian` | 8465a779f4f0 | 8465a779f4f0 | 8465a779f4f0 |
| `lem-dualizable-slide-clears-meridian-disk` | 9cfdebad5b56 | 80cf232b9ff0 | 80cf232b9ff0 |
| `lem-slice-disk-complement-h1-is-generated-by-meridian` | d5ab6f5533af | d5ab6f5533af | d5ab6f5533af |
| `thm-dualizable-handle-link-has-two-knot-trace-descriptions` | aa4d2fe826fb | 070d89286f96 | 070d89286f96 |
| `thm-knot-slice-iff-zero-trace-embeds-in-s-four` | e5491a7ee5ea | 01c81735db81 | 92cdf99e6f40 |
| `lem-piccirillo-diagram-produces-dualizable-handle-link` | 56c25fd2b12f | 56c25fd2b12f | 3a29eb9c5d83 |
| `lem-conway-seifert-surface-and-matrix` | 73872998a52a | 7b50c25b3d92 | 7b50c25b3d92 |
| `lem-piccirillo-knot-lee-computations` | 3efc98cc7f58 | fe8c7e0561ff | 28b43b6e987b |
| `thm-piccirillo-conway-trace-partner-has-s-two` | 15537191eaae | d5a1c4af1f99 | 373074e7188f |
| `lem-conway-knot-alexander-polynomial-one` | fa02b822fdb8 | 47810a22a173 | 47810a22a173 |
| `thm-conway-knot-topologically-slice-not-smoothly-slice` | fd92afbc60b0 | 8e26da8fe2b4 | e78e6ba49ad2 |
| `ex-unknot-zero-trace-and-dualizable-cancellation` | 13634b195736 | 378704a8c5d5 | 378704a8c5d5 |
| `cex-zero-trace-does-not-force-concordance` | 021076e48ff3 | 2642954ad041 | 9bac8fe6752a |
