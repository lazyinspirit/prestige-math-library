# Batch 26 Step 5a adjudication — frontier-38-owner-30

Scope: batch 26 only; group `batch-26`. Ten touched obligations, reader:26:1 and flagged:26:1. No page obligations. Review follows the generated dependency order. This report records local review, never judgment or certification.

Initial risk report: twelve HIGH/CRITICAL items, zero tool errors. Repository instructions, order task, scope, reader report/findings, refuter report, and both hash snapshots read.

## Completed level 0

- `def-degree-invertible-sheaf-proper-dimension-one`: no carrier decision owed. Both definitions match Stacks 0AYQ Definition 33.44.1; proper coherent finiteness, constant rank, rank zero and empty cases checked against actual supplier interfaces. Risk review complete.
- `def-divisor-intersection-number-on-smooth-projective-surface`: reviewed_no_defect, audit_enrichment. Item pre/post bytes coincide; only boundary evidence was corrected. Four-term dual convention, coherence, symmetry, identity cancellation and integral Cartier/Picard correspondence checked. Risk review complete.
- `lem-closed-immersion-projection-formula-invertible`: no decision owed. All steps checked: cofinal pushed stalks, tensor balancing inverse, stalk isomorphism, coherent pushforward and natural cohomology over the induced base structure. Risk review complete.

Sources: https://stacks.math.columbia.edu/tag/0AYQ (Definition 33.44.1); local exact cited interfaces, especially `def-euler-characteristic-coherent-sheaf`, `cor-projective-cohomology-finite-dimensional-field`, `thm-coherent-sheaves-abelian-noetherian-scheme`, `thm-cartier-divisors-mod-principal-to-picard`, `lem-closed-immersion-cohomology-pushforward`. AC is inherited; no new selection.

Next: level-1 finite-support lemma and cone counterexample, including flagged:26:1.

### lem-euler-characteristic-finite-support-twist-invariance

Read all nine steps and exact cited clauses. Residue field is finite by the finite-type Nullstellensatz; one-point global sections are kappa(p) and positive cohomology vanishes. Pullback of a rank-one sheaf to the field is rank one and therefore trivial, noncanonically; projection formula then identifies the twist with the same pushed module. Isomorphisms respect the inherited k-action. No rationality or separability restriction. Statement requires a given closed point, so empty X has no instance. AC is inherited, no family of choices. Current item equals post hash; the reader changed only the Stacks chapter title to Varieties, correctly shown by 0BEI. Contract boundary-locator corrections are audit enrichment.

Disposition: reviewed_no_defect. Risk review complete.

### cex-intersection-pairing-needs-cartier-or-cycle-hypotheses

Read all sixteen steps, facts and exact supplier clauses. The even-monomial invariant model is normal in characteristic other than two, since an element integral over its invariant subring lies in k[u,v] and is invariant. The four nonempty domain charts are irreducible opens with common point; their dimension is two over arbitrary k by transcendence degree. The ruling prime has height one and its localized generator quotient has dimension two, hence is not principal. A hypothetical Cartier equation with cycle the ruling would have valuation one there and zero elsewhere; the height-one intersection theorem forces its principal ideal to equal that ruling ideal, a contradiction. Both counterexamples stand: P^3 hyperplanes meet in P^1 and the Euler sum is 1. The reader correctly removed the false assertion that no point on this line has length one and corrected the open-cover and source hypotheses. Amended only F6 to n>0: P^0_k has H^0(O(-1))=k, while the actual n=3 witness is unaffected. AC/DC inheritance is explicit. Current Statement refuted is unchanged; no consumer impact window opens.

Disposition: amended_repair. Risk review complete.

`flagged:26:1`: confirmed_fatal; closed row `f38o30-b26-negative-twist-dimension-zero`. Local repair adds n>0 to F6. Next: level-2 integral-curve identity.

### lem-euler-characteristic-twist-integral-proper-curve

Read all eight steps and actual suppliers, including the complete published devissage proof. The defect chi(L tensor G)-rank(G)deg(L)-chi(G) is additive by exact rank-one twisting, Euler additivity and generic vector-space rank additivity. Zero gives zero; O_X is a generic-rank-one witness and each pushed residue field is a point witness with generic rank zero. On an integral dimension-one scheme every proper irreducible closed subset has dimension zero by extending a strict chain; hence the witness list is complete. The strengthened L5 correctly uses integrality, unlike the old general one-dimensional-space claim (a reducible curve has a proper dimension-one component). The local devissage hypotheses include support containment and annihilation by the generic maximal ideal; both witnesses satisfy them. Rank-zero coherent sheaves are included. Current post bytes preserve the main Statement and correct L5 and the devissage URL. Stacks 0AYQ Lemma 33.44.5 and 01YI statement/proof checked. AC inherited, no new selection.

Disposition: accepted_repair. Risk review complete.

### cor-degree-additive-proper-curve

Read all eight steps and reused the independently read devissage and closed-immersion suppliers. D(F)=chi(F)-chi(LF)-chi(MF)+chi(LMF) is additive with signs +,-,-,+; coherence of each twist ensures all sums exist. Witnesses i_*O_Z cover every integral closed subscheme: points cancel by twist invariance; integral curves cancel by the rank-one identity and natural closed-immersion cohomology over k. Generic stalk annihilation and rank one are explicit. This devissage works on nonreduced, reducible, disconnected and dimension-zero schemes; empty C uses P(0) without witnesses. Dual degree follows from tensor inverse. Reader correctly requires coherent G only for F6 Euler consequence and corrects the sign instructions in 1.2. An infinite direct sum of the structure sheaf on Spec k has no integer Euler characteristic, refuting the old unrestricted F6 consequence. Post item retains the Statement. AC inherited from the exact suppliers. Stacks 0AYQ Lemma 33.44.7 and 01YI corroborate the hypotheses.

Disposition: accepted_repair. Risk review complete.

### thm-intersection-with-curve-as-degree-of-restriction

Read all seven steps and exact suppliers. Effective C is closed and proper, and height-one minimal primes plus chain dimension two give dim C<=1; C may be nonreduced or empty. Coherent twisting sequence gives chi(C,N|C)=chi(X,N)-chi(X,N(-C)). Subtracting the N=O and N=O(-D) equations gives -deg_C(O(-D)|C), converted to +deg_C(O(D)|C by the proved dual sign. D need not be effective for this direction. Swapping roles requires effective D and uses symmetry, proving the second equality. Smooth geometrically integral comparison uses the exact Cartier/Weil/Picard and Euler degree-shift interfaces. Empty C cancels both sides. The reader correctly restricted the Euler consequence of F3 to coherent sheaves; infinite direct sums on a closed point would otherwise give undefined chi. Post bytes preserve the Statement. AC inherited, computations choice-free. Stacks 0BEL Lemmas 33.45.8 and 33.45.12 corroborate the restriction convention.

Disposition: accepted_repair. Risk review complete.

### thm-surface-intersection-product-bilinear-and-symmetric

Read all six steps and exact suppliers. Expanded shift identity term by term; its right side is the negative quadratic Euler defect on effective H, which vanishes by curve additivity on any proper dim<=1 H, including nonreduced/empty H. Eventual global generation over the Noetherian field yields nonzero sections of the two rank-one sheaves on nonempty integral X; their regular zero divisors E,F represent D up to linear equivalence. The shift formula already allows arbitrary C,D, so the cancellation in 3.1 applies without requiring effective C. It proves additivity for differences of effective divisors, then symmetry gives the other variable. Integral Cartier/Picard surjectivity translates to every line bundle and integer bilinearity. The reader correctly restricted the chi pushforward clause F4 to coherent F; otherwise infinite direct sums need not have finite chi. No Statement change. Two particular sections use finite selection, AC inherited from suppliers. Stacks 0BEL Lemma 33.45.5 statement/proof supports the conclusion, while the authored proof is independently checked.

Disposition: accepted_repair. Risk review complete.

### ex-intersection-pairing-on-p2

Read all six verification steps and actual supplier clauses. Polynomial charts give regular integral pure dimension two over every field, with intersecting irreducible open cover; the added regularity/dimension citations are appropriate. Twist cohomology gives chi(O(m))=(m+2)(m+1)/2 for m>=0, m=-1,-2 and m<=-3, including generalized-binomial negative arguments. Substitution in the four dual terms expands to de for every integer pair, including zero and negative degrees. Nonzero forms cut effective Cartier divisors on integral P^2. The line restriction sequence gives chi_l(O(2))=3 and chi_l(O)=1, hence degree 2. Reader corrected the false Definition part-3 locator and supplied exact chart prerequisites. Amended F4 to require coherent F in its general chi comparison: without it, an infinite direct sum of a point sheaf on l has infinite H^0. Actual restrictions of O(m) are coherent, so no formula or Example changes. Risk review and contract boundary evidence updated; AC inherited from cohomology.

Disposition: amended_repair. Risk review complete.

### lem-blowup-intersection-matrix-at-smooth-point

Read all six proof steps and complete relevant external proofs: regular local blowup charts, affine regular-sequence pushforward vanishing, normal-bundle frames, residue-field Euler scaling, strict-transform saturation and projection formula/acyclic comparison. Finite-type pure dimension two gives dim O_X,p=2; neither rationality nor separability is needed. A globally generated ample twist of the coherent nonzero point ideal has a finite set of sections, the degree-one quotient and fractional-Rees invariance give X prime embedded into P^N_X, and the explicitly proved Segre chart equations give absolute projectivity. E has normal O(-1) over kappa(p); its Euler difference over k is -r. A pulled-back line bundle restricts trivially to E, giving orthogonality. The structural pi is a k-morphism, so the corrected external Euler comparison applies to all four line bundles, giving pullback intersection invariance. The strict-transform equality then gives C prime dot E=mr and C prime squared=C squared-m squared r; off-center m=0 follows from the identity open. Pre/post item bytes identical; reader corrected exact supplier quotations, and I refreshed the now-stale F5 projection-formula quote to the current k-morphism clause. No current consumer repair needed. Producer manifest still lacks k-morphism: route its reconciliation to batch 2/Step 5b, retaining that external blocker rather than altering its manifest. Current mathematical risk complete. AC inherited plus finite selections of sections/parameters. Stacks 0AGP Lemmas 54.3.1, 54.3.2 and 54.3.4 confirm the local hypotheses and signs.

Disposition: reviewed_no_defect. Risk review complete.

### reader:26:1 — batch-2 supplier

Confirmed the historical missing-k-morphism defect from the exact retained producer manifest clause and its reported counterexample, independently of the reader verdict. With k=Q(t), X=Spec Q(u) structured by t->u^2 and Y by t->u, the underlying identity f is not over k; both schemes are finite proper, f_*O=O and R^qf_*O=0, yet the k-Euler dimensions are 2 and 1. T^2-t is irreducible since t has odd t-adic valuation. Current producer Statement explicitly requires f a k-morphism. Its full four-step proof is sound: invertible tensor is an exact autoequivalence preserving injectives, the ordinary projection map is locally identity, its resolution comparison proves all q, and the acyclic comparison is natural for scalar multiplication and therefore k-linear for maps over k. Actual consumer pi in blowup lemma F5/4.2 is over k, proper, with vanishing higher images, so no consumer Statement repair is needed. Independently read current producer contract, manifest, exact prerequisites and complete acyclic-comparison proof; source presence and prior approval are not used as proof certificates. Current mathematical source is repaired; producer manifest reconciliation and its distinct preimage escalation remain owner-held.

Historical disposition: Owner explicitly approved the source-accurate Euler correction in research/frontier-38-owner-30-step5-owner-checkpoints.json (euler-k-morphism, received 2026-10-03T08:51:33.881512+00:00). This dispatch authorizes disposition of the unbound reader finding after independent current-proof review. The retained manifest supplies the defective clause and the current item/contract supply the corrected argument, but no exact original observed-byte binding exists; historical_delta_unknown remains true and the producer historical-preimage escalation is not cleared.

Verdict confirmed_fatal; exact closed row `f38o30-b26-projection-euler-k-morphism`. Immutable producer and path fingerprints retained verbatim in decisions. This decision closes the independently confirmed historical clause defect; it does not close the producer touched-carrier preimage escalation or the stale producer manifest. The owner/Step-5b lead must reconcile the batch-2 manifest Statement and strategy with the qualified current item; outside write scope, no edit made.

### ex-intersection-pairing-on-blowup-of-p2

Read all seven verification steps and independently reviewed its suppliers before this item. Rational p gives r=1, so E squared=-1, l dot E=0 and pullback plane self-intersection gives l squared=1. Pairing a relation al+bE=0 with l,E forces a=b=0, proving the claimed rank-two sublattice (no assertion that it is all Pic). A reduced line through p has local multiplicity one, so its strict transform class is l-E, intersects E once and has square zero; a line missing p has unchanged total/strict transform. Bilinear expansion confirms both formulas. Negative integral combinations are included via bilinearity; X is nonempty by P^2 and a given rational p. AC inherited, explicit lines require only finite selections. Current item pre/post bytes coincide; touched carrier is only corrected boundary evidence and exact supplier local-dimension quotations. No defect to repair; complete risk review.

Disposition: reviewed_no_defect. Risk review complete.

## Snapshot comparison and evidence limits

All twelve current item raw hashes matched the post-reader snapshot on entry. Three touched item files were identical in pre/post: the surface-pairing definition, blowup matrix lemma and blowup plane example; their touches concern contract audit evidence. The closed-point lemma changed only a source chapter label. Reader report identifies the prior defects precisely; current mathematics was reviewed independently rather than inferred from those descriptions. This lane did not recover full historical item preimages from hashes or claim a complete byte diff. The seven mathematical/metadata reader item revisions remain as reviewed, with two further Facts repairs by this lane.

| Touched carrier | Pre raw SHA-256 | Post-reader raw SHA-256 | Current raw SHA-256 |
| --- | --- | --- | --- |
| `cex-intersection-pairing-needs-cartier-or-cycle-hypotheses` | `3491c87bdaba5c2e4f20f67770ee17191505c60d6e3432257533c610f85a15a3` | `bc958d88a4e400532cd3e68dae122d82736d6bb9953f6ef424d07252ebad9a2b` | `3b3474d4bca8eb6df399734797eceea66a720bf78dc02b8181dc68bd5d141614` |
| `cor-degree-additive-proper-curve` | `283dbc5c0676a26251b98a19969e6d2b07320e1102aba36bae0af4fe89d097bb` | `b69884612c437a2c6250eb0c01f6cc6ce24e708a7bb2bd1ebd7c2bcf644c637a` | `b69884612c437a2c6250eb0c01f6cc6ce24e708a7bb2bd1ebd7c2bcf644c637a` |
| `def-divisor-intersection-number-on-smooth-projective-surface` | `adef4090bb8463ec5cba065b66e6655d24273015b2f6ee009fa2e046abca69c2` | `adef4090bb8463ec5cba065b66e6655d24273015b2f6ee009fa2e046abca69c2` | `adef4090bb8463ec5cba065b66e6655d24273015b2f6ee009fa2e046abca69c2` |
| `ex-intersection-pairing-on-blowup-of-p2` | `d2f6071b7a0049cfd872e08d336b1606481080912efa8b62f2525bd07703a9f6` | `d2f6071b7a0049cfd872e08d336b1606481080912efa8b62f2525bd07703a9f6` | `d2f6071b7a0049cfd872e08d336b1606481080912efa8b62f2525bd07703a9f6` |
| `ex-intersection-pairing-on-p2` | `ee02a2ed3c3a1a378747a1d663f97df0e2d27b8dc122a33c1bca07ab026f2e15` | `f1a2ed2e3dbbc11c2d32faf706109268168b69216e03d398626b36bed3c8fab6` | `d248c04bd144cf626d7c242545ae4847e3c2d2c27d1b17d6d2585aeb7dc19b9e` |
| `lem-blowup-intersection-matrix-at-smooth-point` | `5ce62da72f3b967f97cdda09b302d5abcc6d1bb8a034a4b7afcc040ff690e796` | `5ce62da72f3b967f97cdda09b302d5abcc6d1bb8a034a4b7afcc040ff690e796` | `5ce62da72f3b967f97cdda09b302d5abcc6d1bb8a034a4b7afcc040ff690e796` |
| `lem-euler-characteristic-finite-support-twist-invariance` | `953d0716ef416bd58bc2fef3f6a76241389150fe7ec025a9e8fc373a34d9b61d` | `cb62343ebab1fe8b618ff57e74d92465e51e5d7225ac0e5a42dfe8bdbcb33c94` | `cb62343ebab1fe8b618ff57e74d92465e51e5d7225ac0e5a42dfe8bdbcb33c94` |
| `lem-euler-characteristic-twist-integral-proper-curve` | `bf98187e986a6d0a61cafd81c58d0e1900a2eaf68bb68189c6dace527334bbaa` | `c2a94401af0520ed2c4a73f2d1206b0eaca1ee27ce81a9fd9f00b6ae6d0fdcb5` | `c2a94401af0520ed2c4a73f2d1206b0eaca1ee27ce81a9fd9f00b6ae6d0fdcb5` |
| `thm-intersection-with-curve-as-degree-of-restriction` | `1015be0e73a520e9b1a747263201c2c130af3b45df7e21a572964cf48e9d0299` | `02c8ab21f9e8a851d337ffc7708b8fba223ed38836b075c51ab8b5e3cec2315a` | `02c8ab21f9e8a851d337ffc7708b8fba223ed38836b075c51ab8b5e3cec2315a` |
| `thm-surface-intersection-product-bilinear-and-symmetric` | `a56b3ca589a5c9441a92d93b3db34c126282942d616fe7ed096983650804c54b` | `0e304e048dc5dd52bfdb6fea59b7eb40d9cf35a018e4452c3be4fecdc298a499` | `0e304e048dc5dd52bfdb6fea59b7eb40d9cf35a018e4452c3be4fecdc298a499` |

## Sources and scope

Read exact current cited internal clauses for all 128 declared supplier IDs (including in-batch suppliers), with full extra proofs for the published devissage supplier and the point-blowup, exceptional Euler/normal bundle, transform, projection formula and acyclic-comparison suppliers identified above. Every one of the 250 recorded contract quotes was compared with its actual current source section: one stale projection-formula quote was found and refreshed; final citation-fidelity reports no quote mismatch. Long initial supplier output was truncated in its middle; the missing level-0 interfaces were recovered separately. This is a focused prerequisite review, not a recursive audit of every foundational proof. Neither cited Vakil PDF was read; no assertion of checking their locators is made.

Authoritative sources read: [Stacks 0AYQ](https://stacks.math.columbia.edu/tag/0AYQ), Definition 33.44.1 and Lemmas 33.44.5–7; [Stacks 01YI](https://stacks.math.columbia.edu/tag/01YI), complete relevant statement/proof, alongside the independently checked local devissage argument; [Stacks 0BEI](https://stacks.math.columbia.edu/tag/0BEI), Definition 33.33.1, Lemmas 33.33.2–3 and 33.33.5; [Stacks 0BEL](https://stacks.math.columbia.edu/tag/0BEL), Definition 33.45.3 and Lemmas 33.45.5, 33.45.8, 33.45.12; [Stacks 01E6](https://stacks.math.columbia.edu/tag/01E6), Lemmas 20.54.1–2 and their relevant full proofs; [Stacks 0AGP](https://stacks.math.columbia.edu/tag/0AGP), Lemmas 54.3.1–2 and 54.3.4 with their arguments. These are independent source checks; current authored proofs establish the actual in-batch conclusions.

## Repairs and bookkeeping

Only two item files edited here: cone counterexample F6 now says n>0; plane example F4 now requires coherent F for Euler comparison. Main Statements/Definitions/Examples are unchanged, so no statement-triggered consumer propagation window was opened. Reader repairs retained. No material item proof rewrite occurred; every assigned item already has no verification.judge. Source chapter/devissage metadata in affected owned manifest rows was synchronized, plane/cone dependencies and their proof strategies reconciled, contract quotation/uses/boundaries refreshed, and all twelve risk reviews completed. Owning consumer cross-batch records retain the projection-formula edge and A-page prerequisite as open for producer-manifest reconciliation; the obsolete smooth-chart edge is retained as removed because its direct citation/use is absent. Ran the canonical serialized frontier refresh. No proposed withdrawal was deleted. No new defective published carrier was found, and published items/ledger were left untouched.

## Local checks

- Reflow on both changed items: unchanged, exit 0.
- Batched precheck: 2 checked, 0 failing, exit 0.
- Rendercheck: both changed files parse YAML and all math, exit 0.
- Final batched proof-layout after all edits and formatters: 2 items, 22 steps, 0 defects, exit 0.
- Strict proof-contract: 12/12 items, 0 errors or warnings, exit 0 after fixing three nonstandard worksheet case labels and two omitted F1 use locators. These were mechanical contract errors, not mathematical defect rows.
- Citation-fidelity: 250 citations, no missing quotes, exit 0; five heuristic widening candidates independently assessed below.
- Content-policy with --manifest-only: 12 items, 0 errors or warnings, exit 0.
- Required risk-report --require-reviewed: 12 routed items, 0 errors, exit 0.
- Exact decision obligation comparison: 12/12 owed, no extras or duplicates; each ledger reference has matching subject and stage and is closed.

The five citation-fidelity candidates are false alarms in their actual contexts: closed-immersion F1 cites topology for open neighborhoods, not a claim about positive-numbered finite intersections; the two curve F6 candidates quantify cohomological q, conventionally nonnegative (negative derived groups are zero); blowup F5 quantifies q>0 only for vanishing and concludes Euler equality using the corrected current k-morphism clause, and its Euler-definition citation is not an assertion of cohomology for arbitrary negative q. No unnecessary item edits made for these screens.

## Handoff and unresolved external evidence

Twelve decisions written: four accepted_repair, two amended_repair, four reviewed_no_defect (metadata/audit_enrichment), and two confirmed_fatal routed findings. Twelve deduplicated closed defect rows cover the actual confirmed defects; no row was created for mechanical checks. All local mathematical reviews complete; no current in-batch unmet mathematical prerequisite found.

Escalated external carrier reconciliation: `research/frontier-38-owner-30-batch-2.pages.json`, item `lem-projection-formula-invertible-twist`, still states its final Euler comparison without f a k-morphism and strategy 3.1 omits scalar linearity. Exact current `items/lem-projection-formula-invertible-twist.md` Statement/Proof 3.1 is corrected and independently sound; `research/frontier-38-owner-30-batch-2.proof-contracts.json` records that corrected proof. Required owner/Step-5b action: reconcile producer manifest to those current approved bytes, preserve its existing historical-preimage escalation, and disposition the open owned consumer edge. I did not edit batch 2 or claim that its preimage escalation was resolved. The historical reader counterexample refutes the retained defective clause, not the corrected live bytes. Original observed-byte binding remains unbound as required.

The engine owns decision hashing, gate batteries and stage transitions. No judge, stamp, self-certification, agent dispatch or gate cycle initiated.

Final additional checks: full content-policy (without --manifest-only) passed for all 12 scoped items with zero errors/warnings; required risk-report rerun after final contract corrections passed for all 12; scoped git diff --check passed. No further item edits followed the final batched proof-layout command.
