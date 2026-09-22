# FA position 32 — escalated-to-owner

The item is untouched and still has rejected SHA-256 cc3af7778a93f7bad5972bd6943e22af43f8b3c72118be1fac6e29206d54a1cc, exactly the final Terra receipt. No partial repair, contract modification or supplier modification has been made.

Independently inspected the current statement and all proof steps, its exact dependency interfaces, contract and preserved critical risk record, batch-9 manifest and coverage entries, AHSS A/B pages, Alpha's cofiber-inclusion correction and both Terra rejections. The final rejudge is correct that construction (B) never defines its required delta_f. The pair boundary in step 1.8 has a different source and target. There are additional local defects: step 1.2 identifies a point with S^0; step 1.5 confuses collapsing all subcomplexes to one basepoint with a disjoint union and adds unjustified extra basepoints; step 2.1 asserts the generally false based decomposition Y_+=Y wedge S^0. These local problems alone are not the reason for escalation; they could be repaired after the convention issue is settled.

## Exact obstruction in an existing supplier

`items/def-reduced-generalized-cohomology-theory.md`, Definition data clauses 2–3, supplies a natural suspension isomorphism sigma and independent natural connecting maps delta_f. Its (E) imposes exactness on delta_f but does not relate delta_f to sigma. Its morphisms must commute with both. In the queued proposition, construction (A) uses the underlying functors and delta for pair boundaries and forgets sigma. Construction (B) then reconstructs a particular sigma from a cone boundary. Therefore the two constructions cannot be inverse on the stated structured theories.

Concrete countercheck: take ordinary reduced integral cohomology with its usual cofiber connecting maps delta. Both (H~,sigma,delta) and (H~,-sigma,delta) satisfy the supplier's literal axioms: negation preserves naturality and invertibility of suspension and leaves (H), (E) and (W) unchanged. Construction (A) produces the same pair theory from both. They are not isomorphic as the supplier defines morphisms. For the collapse f:X→*, the connecting map delta_f:H~^n(X)→H~^{n+1}(Sigma X) is the usual sigma, since C_f=Sigma X. An isomorphism alpha commuting with this fixed delta must satisfy alpha_{Sigma X} sigma = sigma alpha_X. Commuting also with the oppositely signed suspension would require alpha_{Sigma X} sigma = -sigma alpha_X. On X=S^0 in degree 0 these are isomorphisms between infinite cyclic groups, so the two requirements contradict one another. Thus this is an actual loss of structured data, not a missing calculation that a new lemma could prove.

## Authoritative verification

Read the complete relevant §2 argument on printed page 3, through the last paragraph continuing onto page 4, of Yiannis Loizides, *The Atiyah–Hirzebruch Spectral Sequence*:
https://math.gmu.edu/~yloizide/Atiyah-Hirzebruch.pdf

That source defines a reduced theory using natural suspension and middle exactness. It obtains the long exact sequence by iterating cofibers and using suspension. Its final paragraph on page 3 explicitly constructs the pair connecting map by composing the suspension isomorphism with pullback along the cofiber-to-suspension map. This verifies that the standard convention couples these maps, unlike the current library definition. The source was actually opened and the full relevant argument read, not inferred from a snippet. The sign-twist countercheck above is an independent argument about the exact local interface.

## Decision owed

The owner must decide whether to normalize the existing reduced-theory definition by requiring connecting maps to be induced by suspension and the specified cofiber map (with the library's sign convention), or instead change the claimed correspondence/category to retain the independent suspension data. The former requires editing the existing supplier `def-reduced-generalized-cohomology-theory` and auditing its consumers; the latter changes the manifest's promised correspondence with all structure maps. Neither is a local prerequisite lemma or a repair that preserves the fixed supplier convention. This lane has no authority to make that owner-wide choice or edit that existing supplier.

The supplier is draft run scope, not a published finding; no published-defect ledger entry is warranted. The question is recorded here in run evidence. Before recording, queue-status is required to show all earlier positions current. No third judge or new review wave is requested. After the escalation receipt is accepted, proceed to position 33; this owner decision must not stall the queue.
