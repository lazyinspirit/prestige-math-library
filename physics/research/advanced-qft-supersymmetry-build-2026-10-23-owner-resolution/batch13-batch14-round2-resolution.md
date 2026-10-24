Implementation status: the owner authorized necessary inventory expansion within the existing pairs13/14, rather than minting the initially proposed separate pair. Full suppliers and same-reviewer consumer repairs are now authored; see `batch13-14-implementation.json` and `batch13-14-implementation.md`. The earlier proposal below is retained as diagnostic history.

# Batch 13/14 round-two scientific escalation

Actual evidence read: all five batch14 escalated Step1 receipts; batch14 notes; complete current definition and generic finite-groupoid theorem; complete batch13 definition and consistency theorem. No batch14 carrier, native receipt, or state was edited. The generic finite-groupoid theorem and its C2 examples are sound at their stated abstract scope. The two-group realization requires an additional higher gauge interface.

## Triangle-coherence proof repaired

The prior step2.3 (original author step2.2) compressed its argument to “groups into the pentagon.” Define b=a^g, c=a^{hg}, x=a_ij, y=a_jk. The discrepancy R between sequential and direct face transformations is exactly

R = -D(h_i,g_i,x,y) + D(h_i,b_ij,g_j,y) - D(h_i,b_ij,b_jk,g_k) - D(c_ij,h_j,g_j,y) + D(c_ij,h_j,b_jk,g_k) - D(c_ij,c_jk,h_k,g_k).

The current theorem now displays this complete six-term expansion, with the precise product identifications and explicit five-term definition of D. Each D vanishes by the source cocycle hypothesis. This is proof-only: definition, theorem frontmatter, Statement, Facts and references remain unchanged. `batch13-consistency-before-triangle-expansion.md` preserves the immediate preimage; older sign/phase preimages remain intact. No additional contract edit was needed: the existing generic derivation already describes the expansion and its actual inputs.

`python3 research/advanced-qft-supersymmetry-build-2026-10-23-owner-resolution/batch13-triangle-and-associator-check.py` exits0 with both exact formal identities checked. The script expands beta symbols in the free module with group-action prefixes, reduces free group words using b_ij=g_i a_ij g_j^-1 and c_ij=h_i b_ij h_j^-1, and compares coefficients. This verifies the displayed expansion identically, not merely on finite random samples.

Focused final commands, all exit0:

- `node tools/physics-support/tsx-run.mjs tools/physics-support/precheck.mts items/thm-aqft-two-group-background-consistency.md --json`: 1 checked,0 failed.
- `node tools/physics-support/proof-layout.mjs items/thm-aqft-two-group-background-consistency.md`: 1 item,7 steps,0 defects.
- `node tools/physics-support/rendercheck.mjs items/thm-aqft-two-group-background-consistency.md --json`: no errors/warnings.
- `node tools/physics-support/proof-contract.mjs research/advanced-qft-supersymmetry-build-2026-10-23-batch-13.proof-contracts.json --strict --items thm-aqft-two-group-background-consistency --json`: ok,no errors/warnings.

An intermediate version referenced the earlier step defining D in prose, causing the mechanical checker to infer an additional phase dependency; it was replaced by the explicit D definition within the same proof paragraph before the successful final checks. No public interface was altered.

## Confirmed automorphism defect and proposed prerequisite

Identifying gauge labels by induced functions is insufficient for normalized two-group gauging. For a point, no edge or face cochains exist. All raw vertex labels act identically on the unique background. The function quotient has trivial automorphism group and mass1. The ordinary homotopy1-truncation retains G and has mass1/|G|. The full finite two-group has pi1=G and pi2=A and mass|A|/|G|. These three constructions are different even when A is trivial and G is nontrivial. An arbitrary ordinary groupoid convention does not resolve the intended higher gauging measure.

Proposed new mathematical prerequisite pair: `qftx-finite-two-group-background-integration` and its examples, after `qftx-two-group-cochains` and before `qftx-finite-symmetry-gauging`. This has not been inserted into the plan or authored as accepted content; root owns native scope controls. Reuse the existing finite cochain definition and consistency theorem. Preserve the existing abstract groupoid theorem as its exact ordinary-groupoid specialization/context. Required supplier interfaces and complete local proof route follow.

### Explicit finite background2-groupoid

Objects are the exact existing (a,B) backgrounds. A1-arrow x→y is a raw label (g,lambda) with target y given by the source formulas; equal induced maps do not identify raw labels. For fixed g and target edge cochain b=a^g, a2-arrow t:(g,lambda)⇒(g,lambda') is a vertex A-cochain with lambda'−lambda=delta_b t. There are no2-arrows when vertex labels differ. Vertical composition adds t. Horizontal composition of t on g and s on h is s+rho_h t; transport naturality gives delta_c(s+rho_h t)=delta_c s+rho_h delta_b t. This proves compatibility with the existing raw1-composition law, whose affine lambda term is rho_h lambda+mu+tau(h,g). Additivity proves interchange and vertical inverses. The source transformation is unchanged by a2-arrow because delta_b^2 t=0, which follows by the same flat-transport cancellation as for edge cochains.

For three consecutive1-arrows g,h,k, let a,b,c,d be the successive edge backgrounds. Let L=((k∘h)∘g), R=k∘(h∘g), and sigma_i=beta(k_i,h_i,g_i). Exact raw-edge expansion gives

lambda_L−lambda_R + delta_d sigma = -D(k_i,h_i,g_i,a_ij) + D(k_i,h_i,b_ij,g_j) - D(k_i,c_ij,h_j,g_j) + D(d_ij,k_j,h_j,g_j).

Thus lambda_R−lambda_L=delta_d sigma, so the associator L⇒R has vertex label sigma. This orientation/sign matters; a prior finite author sample did not establish failure of this correctly oriented formula. This second exact identity is checked by the durable formal script. Naturality follows because its vertex labels depend only on g,h,k and horizontal composition is additive. For four consecutive arrows l,k,h,g, the two pentagon labels differ by D(l_i,k_i,h_i,g_i)=0 at every vertex. Identity1-arrows and unitors are strict because beta is normalized. The existing reverse1-label gives h∘g exactly identity. The other composite g∘h has edge label -delta_b beta(g_i,h_i,g_i), by the associator calculation with h=g^-1, so it is2-isomorphic to identity by beta(g_i,h_i,g_i). All1-arrows are equivalences and all2-arrows invertible. All object,1-arrow and2-arrow sets are finite.

### Integration and actual cochain gluing

Define pi0 as1-equivalence classes of objects; pi1(x) as2-isomorphism classes of1-automorphisms; pi2(x) as2-automorphisms of the identity1-arrow. A finite2-groupoid integral of an arrow-invariant scalar weight W is sum_[x] W(x)|pi2(x)|/|pi1(x)|. Nontrivial cocycle actions with boundary lines require additional transgression data; the claim here retains the existing explicit invariant scalar-weight and factorization hypotheses and does not assert every higher cocycle supplies them.

For the explicit model, let V and E count vertices and edges. Let S_x be the set of raw1-automorphism labels at x. Then pi2(x)=ker(delta_a:C0→C1). The2-isomorphism classes in S_x have |im delta_a| elements, so |pi1(x)|=|S_x|/|im delta_a|. Consequently |pi2|/|pi1|=|A|^V/|S_x|. Fixed raw1-composition is affine-bijective in the variable vertex and edge labels; it gives bijections among raw arrow sets in one component. Since all |G|^V|A|^E raw gauge parameters have a target, each component has |G|^V|A|^E/|S_x| objects. It follows that the homotopy integral equals

Z_K(W)=c(K) sum_(a,B) W(a,B),  c(K)=|A|^(V−E)/|G|^V.

For K=K1 union_Sigma K2 with common subcomplex, objects glue by exact equality of restricted cochains, since each simplex belongs to one or both subcomplexes and all constraints are simplex-local. The vertex/edge counts give c(K)=c(K1)c(K2)/c(Sigma). Define

Z_i(s)=c(K_i)/c(Sigma) sum_(x_i restricting exactly to s) W_i(x_i).

Every boundary vertex/edge gauge parameter extends to the bulk by assigning identity/zero on remaining vertices/edges. The induced map is a bijection of extension sets, by the source inverse and composition result, so Z_i is gauge invariant if W_i is. If W_K=W_2 W_1 under matching restriction, elementary finite-sum rearrangement gives

Z_K=c(Sigma) sum_(s in background objects on Sigma) Z_2(s)Z_1(s).

Applying the proven2-cardinality formula on Sigma rewrites the right side as sum_[s] Z_2(s)Z_1(s)|pi2(s)|/|pi1(s)|. This proves the actual finite2-group cochain gluing specialization, rather than weakening it to a generic ordinary groupoid assertion. Relative2-gauges vanish on Sigma, and the relative normalizer c(K_i)/c(Sigma) retains the corresponding relative pi2 factor. Empty complexes have V=E=0 and one empty background; the formula gives1. A point has mass|A|/|G|. Setting A trivial recovers ordinary finite flat G gauge normalization.

### Source and authoring limits

Inspected actual existing Moore–Saxena full PDF using PyMuPDF, §23.3 PDF97–100 (printed96–99), especially (23.34)–(23.38). Equation23.34 explicitly weights fibers by alternating homotopy-group orders;23.35 does the same for partition functions;23.38 gives the higher abelian example. The text leaves higher-group explicit formulations to the reader and gluing to cited homotopy-fiber properties. These passages support the homotopy measure, not the complete explicit local proof above. They also warn that nontrivial action cocycles produce boundary line bundles rather than ordinary scalar functions. Do not import the broad informal ordinary-G automorphism sentence in the subsequent example: general flat-connection stabilizers are holonomy centralizers, not always all of G.

## Ownership and unresolved work

The original batch13 definition is unchanged. Its theorem Statement remains true and unchanged; its induced-function claim is not promoted to a raw-label groupoid. The smallest missing prerequisite for batch14 is the explicit finite background2-groupoid and2-cardinality/gluing supplier above. Batch14 is an active writer; no consumer source was mutated. Batch38 is a pending direct page consumer and must use the eventual precise higher interface. All five batch14 receipts remain escalated until root coordinates native scope insertion, actual supplier authoring and same-reviewer consumer reconciliation. This report is a complete proposed proof route, not readiness or proof acceptance for unauthored carriers. Root owns all rehashing and native recertification. Round-two proof expansion changes the theorem hash again; previous batch13 readiness and any transitive consumer evidence binding it need refresh after source writers drain.

Current theorem raw SHA256: 66f2fc11e45cf9b9bcce5796d0e2dd20578c6232bb50b71e43dfedb625bac6ac.
