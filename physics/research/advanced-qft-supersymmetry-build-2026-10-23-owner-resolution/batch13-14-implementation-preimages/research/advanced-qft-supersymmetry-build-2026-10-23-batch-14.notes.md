# Batch 14 authoring notes — Finite Groupoid Gauging and Gluing

## Scope and plan comparison

Owned pair: **qftx-finite-symmetry-gauging** and **qftx-finite-symmetry-gauging-examples**, category **quantum-field-theory-mathematics**, mathematics library. The complete design at **research/plan-advanced-qft-and-supersymmetry-track.md** § “Finite Groupoid Gauging and Gluing” (lines 191–201) calls for a finite background field groupoid, cocycle-weighted gauging sum, gauge invariance, and a declared gluing law. The matching A/B rows in **research/plan-spec.json** and the batch-14 manifest agree on IDs, titles, order 970, category/library, A requiring **qftx-two-group-cochains**, and B requiring A. No design/plan conflict was found. The empty item arrays were planning placeholders. The owner direction and this dispatch control over stale scaffold-only or page-summary wording; both authored page bodies remain empty.

The batch-level dependency record assigns batch 14 dependency level 1 with requires ["13"]. The authored item DAG is recorded below after all items are complete. The item plan names **def-aqft-background-gauging-data** and **thm-aqft-finite-group-gauging**; the B examples are additional assigned examples, not suppliers to another page.

## Dependency audit and owner escalation

Before using the required page-13 input, called **loadStep1Record** and **step1Decision** for the current run. Both current records exist and return closed true: **def-aqft-two-group-background** is ready with hash a2634896ce546ad19ae337a7e2ec04413ae89c8c106f88e4efb2091382cf5acb, and **thm-aqft-two-group-background-consistency** is ready with hash 0ca4f3dc61c89dfd32c393dc2fc1e291d7c3b2d58aa0b1502d89d52ab70c7aaa. These are Step-1 authoring-readiness records, not independent proof acceptance.

Inspected the current item statements and complete current proof. The definition gives finite data (G,A,rho,beta), the normalized-cocycle convention, the ordered simplicial cochain equation delta_a B = a^* beta, and the explicit vertex/edge gauge formulas. The theorem's hypotheses match those formulas and the associator direction. Its Statement says induced gauge maps preserve the equation, have the displayed composition representative, are invertible, and compose associatively. However, proof step 2.2 asserts that an unshown expansion groups into the pentagon identity; it does not display the triangle-coherence algebra. The source page’s current proof therefore remains unresolved at this exact step despite its ready receipt.

There is also an automorphism-interface question for the proposed use in a normalized gauging sum. If arrows are identified solely by their induced maps on cochains, then on a one-vertex complex with trivial A there is a unique background and all vertex labels g in G induce the same map; that convention gives a trivial automorphism group. The usual finite gauge groupoid over a point is BG and has automorphism group G. The current theorem does not settle whether equal induced maps retain separate gauge labels or how higher gauge-of-gauge data enter the automorphism weight. This is a material interface uncertainty for the intended two-group gauging instance.

The assigned definition records the two-group specialization only conditionally and keeps the general finite-groupoid datum explicit. No current page-13 conclusion is claimed as proved. A corrected local proof of the page-13 composition/coherence result and an explicit automorphism convention are the smallest missing suppliers. They belong on the A page **qftx-two-group-cochains** or, if a full finite two-group homotopy quotient is needed, in a new mathematics A/B prerequisite pair placed before **qftx-finite-symmetry-gauging**. This batch does not edit the supplier. The affected readiness records for this batch will therefore be escalated after all available authoring and checks are complete.

## Current published finite-groupoid suppliers inspected

- **def-qftx-finite-groupoid-integration** is a published mathematical definition with no item dependencies. Its current statement defines finite groupoids, automorphism-weighted cardinality, homotopy fibers, and finite pushforward. Its proof checks finiteness and invariance under changing a boundary representative. It supplies the generic finite integration interface used here.
- **def-qftx-finite-homotopy-pullback** is a published mathematical definition whose only dependency is the integration definition above. Its current statement gives objects (c,e,alpha) and compatible pairs of arrows; its proof verifies groupoid closure and finiteness. It supplies the exact pullback syntax used by the new theorem.
- **def-qftx-finite-flat-connection-groupoid** and **thm-qftx-finite-groupoid-gluing** were also inspected. They concern ordinary finite G flat connections and an untwisted finite BF theory; the gluing theorem does not cover the proposed two-group field groupoid or a cocycle action. They remain contextual and are not claimed as direct suppliers for this pair.

The proposed inventory marks the finite-group-BF reuse edges as nonlogical context candidates and lists no active item supplier edges for this pair. This authoring uses only the exact generic integration and homotopy-pullback interfaces after checking their current statements and proofs; the ordinary flat-connection and untwisted gluing conclusions are not transferred to a two-group model.

## Source retrieval and reading record

The full Moore–Saxena lecture-note PDF was retrieved directly after the browser PDF viewer rejected its 42.8 MB response size; the direct download succeeded. Inspected the complete relevant passages from §§12–13 and 18 (PDF pp. 50–53 and 65–66) and §§23.2–23.3 (PDF pp. 92–99) with the full-text extraction. These give groupoid and finite gauge field definitions, the 1/|Aut| sum, the cocycle-weighted simplicial model, homotopy-pullback correspondences, and homotopy-cardinality pushforward. The notes say the general finite-model gluing properties follow from homotopy-pullback properties; the algebraic weighted gluing proof in this batch is local.

Read Freed–Quinn, §2, PDF pp. 8–11, including Lemma 2.4 and Theorem 2.13. The complete argument tracks boundary bundle identifications, automorphism stabilizers, the induced measure, and the cocycle-weighted gluing law. Its model is a finite ordinary group, not a proof of a two-group field-groupoid interface.

Read Dijkgraaf–Witten, §§6.2 and 6.4–6.5, PDF pp. 22–30, including equations (6.8)–(6.9) and (6.24)–(6.27). It fixes the finite 3D cocycle action, ordered simplex conventions, and the closed-manifold scope of its gauge-invariance argument. Its finite 3D construction supports the bounded example only; it does not prove a general higher-group result.

All source arguments, searches, recovery attempts, item dispositions, and successful source-fetch-check stamps are recorded in **research/advanced-qft-supersymmetry-build-2026-10-23-batch-14.coverage.json**. The three distinct full-text URLs were stamp-verified: Moore–Saxena, 42,849,573 bytes, SHA-256 prefix 4cfb09f14c723859, 331 pages; Freed–Quinn, 4,057,353 bytes, prefix e438743080c9f650, 38 pages; Dijkgraaf–Witten, 4,728,897 bytes, prefix 16b91b2cc799be38, 38 pages. No source retrieval was abandoned or dropped.

## Completed item: def-aqft-background-gauging-data

Defines a finite background field groupoid with its automorphism groups retained, a U(1)-valued degree-zero cocycle/action weight, and the normalized sum over isomorphism classes weighted by reciprocal automorphism order. It records the finite two-group cochain/gauge formulas as a conditional candidate instance; the existing page-13 consistency theorem and automorphism interpretation remain open as described above. Direct dependencies are **def-aqft-two-group-background**, **thm-aqft-two-group-background-consistency**, and **def-qftx-finite-groupoid-integration**; its in-run dependency level is 2. The complete generic finite-groupoid interface and exact conditional supplier excerpts are in the item and proof contract.

## Completed item: thm-aqft-finite-group-gauging

Proves gauge invariance and the finite weighted gluing identity for finite groupoids when the restriction comparison is an equivalence to the homotopy pullback and the cocycle/action weight factors across the gluing. The proof establishes the orbit-stabilizer formula for homotopy-pullback objects, computes each boundary homotopy-fiber integral, and matches the two finite sums term by term. Direct dependencies are **def-aqft-background-gauging-data**, **def-qftx-finite-groupoid-integration**, and **def-qftx-finite-homotopy-pullback**; its in-run level is 3. The proof does not transfer ordinary finite-group flat-connection gluing to the two-group model; that instance remains subject to the conditional definition and open page-13 interface.

The source arguments read for this item are Moore–Saxena §§23.2–23.3 and Freed–Quinn §2. Moore–Saxena's lecture notes define homotopy-pullback correspondences and homotopy-cardinality pushforward but defer a fully explicit proof; Freed–Quinn proves a related finite ordinary-group theorem with boundary bundle identifications and automorphism measures. The new argument supplies the required abstract finite-groupoid weighted formula directly. Dijkgraaf–Witten §6 is action-convention context for its specific 3D model, not a supplier for the general theorem.

The contract finite check was run by exhaustive Node enumeration for the homotopy pullback of two identity functors on B(C2): 2 objects, 8 total arrows, 2 automorphisms at each object, one isomorphism class of cardinality 1/2; each identity homotopy fiber has 2 objects, exactly one arrow between every ordered pair, and cardinality 1. The boundary sum is also 1/2. The C2 character sum evaluates to 0, and the one-object point sum to 1/2. These checks cover only the declared finite examples. The general theorem remains conditional on its stated homotopy-pullback and weight-factorization hypotheses.

## Completed B-page examples

- **ex-aqft-finite-groupoid-point-normalization** is the one-object groupoid BG for G=C2 with unit weight; its single class and order-two automorphism group give the normalized sum 1/2. It uses the generic groupoid definition at item level 3.
- **ex-aqft-finite-z2-cocycle-circle** is the conjugation groupoid C2//C2 with the nontrivial character weight; its two classes each have automorphism order 2 and the two phases cancel. Its exhaustive two-element check gives 0. It uses the generic groupoid definition at item level 3.
- **ex-aqft-finite-c2-gluing-identity** computes the homotopy pullback of two identity functors on BC2. It has two objects, two compatible arrows between every ordered pair, one isomorphism class, and automorphism order 2; both sides of the gluing law are 1/2. It depends on the A definition, homotopy-pullback definition, and A theorem at item level 4.

## Dependency levels and batch evidence

Recomputed the assigned item closure against the current full run manifest index. No cycle or level mismatch occurs in this closure: **def-aqft-background-gauging-data** level 2; **thm-aqft-finite-group-gauging** level 3; point and C2-character examples level 3; C2 gluing example level 4. Batch 14 remains level 1 with prerequisite batch 13. A full-run item-index scan also reports 76 empty scaffold inventories in unrelated pages; none lies in this batch's dependency closure.

The read-only batch-level recomputation still gives batch 14 level 1 and requires ["13"], matching its stored row, but the full shared dependency-level record digest is stale after run manifests changed. The shared scheduling record is owner-owned and was left untouched.

The cross-batch dependency file is a JSON array with three rows: the required page-13 page edge is open; the inspected finite 2-group Definition item edge is verified; the consistency-theorem item edge is open. The verified row records only the scoped statement/readiness check. It does not imply independent proof approval.

## Final scoped checks

- Content policy passed all 5 items with 0 errors and 0 warnings; manifest-deps passed 5 items with 0 normalizations and 0 errors.
- The strict proof-contract check passed 5/5 items with 0 errors and 0 warnings.
- Proof layout passed 5 changed items, 19 numbered proof steps, and 0 defects; normative precheck passed all 5 with 0 failures.
- Rendercheck passed all 5 items and both pages, including real KaTeX span parsing and YAML parsing.
- Focused depcheck passed all 5 items and their 9-item dependency closure with 0 errors and 0 warnings; prerequisite page-cycle checks covered 345 pages.
- Coverage checklist passed 2 pages and 18 harvested results with 0 errors and 0 warnings. Source-fetch-check --stamp verified all 5 coverage entries, representing 3 distinct full-text URLs, with 0 drops.
- A scoped editorial/mirror check found no hyperlinks inside the five complete item claims, confirmed exact manifest statement mirrors, and verified both page bodies are empty YAML-only carriers.

The remaining Step-1 escalations are the exact two-group consistency proof gap and automorphism-convention ambiguity recorded above. The generic finite-groupoid theorem and its examples have complete conditional/local arguments; they do not claim the unresolved two-group specialization is proved.


## Final Step-1 authoring records

The final current authoring-readiness records for all five assigned items are **escalated**, with no owner flag. Their recorded hashes were independently recomputed from each current item and its declared dependency closure and match exactly. The records preserve the complete generic finite-groupoid proofs while identifying the open page-13 prerequisite issue above:

- **def-aqft-background-gauging-data** — 1f9f72024cbe1f709768dd0a6f92e0b857df6b1c6604c9953dd7a362f33edc50.
- **thm-aqft-finite-group-gauging** — 74c100e8a504aed2159df80dd590410cb239a51de3318efcfbc92018e5b4a480.
- **ex-aqft-finite-groupoid-point-normalization** — 59c5e2f489cb67366152f35eeaddddc68e687aeaa7d264e55a5b416c256deded.
- **ex-aqft-finite-z2-cocycle-circle** — 1f5179027b769925857160fd31761305bca5f01813627d9bcefbd18567f2b41d.
- **ex-aqft-finite-c2-gluing-identity** — 7f864352b7fcadcf16fb22cdd7d01bb535975d98279aeab0712a0d0c908f6e6f.

The escalations are not caused by draft status, pending precheck, or missing independent approval. The remaining issue is substantive: page-13 consistency proof step 2.2 has an unexpanded coherence calculation, and the gauge-label/automorphism convention needed by the conditional two-group gauging instance is unspecified. Batch 14 therefore records its page-13 dependency as open and does not claim the two-group instance is proved. The batch-14 row itself remains dependency level 1 with requires ["13"]. Its recomputed row matches the stored row, while the owner-controlled full shared batch-level dependency digest is stale after run-manifest changes; that shared file was not edited.
