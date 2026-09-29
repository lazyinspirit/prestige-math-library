# Independent Step 5 owner review — batch 5

Review date: 2026-09-29. Scope: the eight requested items in batch 5 of run
frontier-36-complete. I read each current item together with its current
proof-contract entry and checked the Step 5 pre/post hash receipts. This is
item-specific review evidence; I did not run certification or retry the gate.

## Hash comparison

Item hashes below are SHA-256 of the current item file bytes. Contract hashes
are SHA-256 of the recursively key-sorted JSON contract entry, matching the
Step 5 hash convention. “Pre → post” gives the Step 5 receipt values; the
manifest column gives the current carrier value and its pre/post receipt value.
For item and manifest cells, “same” means both receipt hashes equal the current
hash. In contract cells, “prehash → same” means the post receipt equals the
prehash; the leading hash is the current contract hash.

| ID | Current item (Step 5 pre/post) | Current contract (Step 5 pre → post) | Current manifest (Step 5 pre/post) |
|---|---|---|---|
| def-algebraically-independent-finite-tuples-over-a-field | 19fb83287eaf3155c7c8e54461ea0c9cd920df74df3e2114d5de27887a2a4e27 (same) | 8b923d0322bf4d5f12e4de8c0413914ca0d937350cf4eac78144fd43211275e5 (63131e40776b43d970a194447a192f54ff0821ddfbb4a36b52da08b4d9c59a67 → same) | 4928573cc41c234a7485f08f39542ff3d0a33b06f75a3b2180927ba71272f3b6 (same) |
| lem-quasi-finite-morphism-fibre-characterization | 60daf240c20f390d6ebf3be8c2d15d0d123bb935da1747b71c12703d8b8d52bb (same) | 89ec045dbf37f4dc314678053b2e0620eb0b284e806eb691156bad213e9130ce (94d9428c65d86af23456e94a7cac73e97ae24b7dcbd10145a463f3a956a47c95 → same) | 8882be46e07ff47e1f5edfe6acbcf06f83312d2d090410cc9b5c3474668af934 (same) |
| lem-uniqueness-of-twists-on-the-projective-line | fccc9f0ac7918692a0363dd9a0a91cabf529591b8cbb8412f90856fd36c910af (same) | 58a7656fcd66a031cbd83fb86e676d7bed8c1549b9bd2439dd0058bf9644f446 (28a339359376628fc20ce1caa15cfb5dd95d0bd0c6ae58fb1d98f9ca9fb27710 → same) | 06757e8e51c2ce1b8e7903868dca393cbff105e5fea0c7ddec9779576043bd7f (same) |
| def-birational-morphism-schemes | 7d03e2967b671cada35328a645e65defe81ce2b659541ed79791044fbbbeb99c (same) | 44f6148c579898ae8c7a77a5c3dda095398fe6de60bb1aca9f603f88ce58b93f (173d49c5e18584abc8edacd3ae6e52a15bc71ee84b61fe5847d28e577a8a2e1e → same) | 283d948d7dc2ad0f866c70215d52af661362ce0a12488cf9d2c7a29f3e9d25ab (same) |
| lem-birational-morphism-principal-open-isomorphism | cad136eefd8ac21c402cb88623b75e750c4894a2119876b16524d6fcfab0d415 (same) | b8cbd5eff48db962c8251dfd4c82b146362eb9993b120487f8f93390e76ec4ac (3a7197c5a5ba31487b40b3f047c73cd9e895458f6335a42a3d9337fde181cd3b → same) | e663e343bfb1d303f2e063d096691ef75068283e4538434a2766e3ac88ffb1ce (same) |
| lem-curve-closed-subsets-finite | 90c7991a187b20df81a65b5deca1b7bb324c2d7a62b94770fbd8681a8e31ab68 (same) | 06f96636739019844de1df378edf9617fd7d8156c1594c57ae80efa2baa9469f (34129bd2ab29dafaf61a6b8c48a3485088281845698dd6adce0c79961835bb53 → 31befc74f31f41cfcd92054f7962714661c0fc320f1f1f8db9ffa013015e2a00) | 5d45602d4744501199b83a08b533fa36c32cf6db2b82477b2b6a7786cfdd7324 (same) |
| lem-projective-space-finite-type-over-base | 528199e69dd3e75dbba4b5fc08fe6e4232414255df756e1e2bfde36f2fca14e8 (same) | 5b603c432471130d3f5ad9a211aa4976a6d3207aed93ac3d949b646434bf1460 (57bbe3e25030aa446792ce75862d1ccb55f0dc11179b3139f44c86ebbac1c413 → same) | caa690daafa572e99814821c262262617120630b8c53f6cbeb7b9e08510b7c32 (same) |
| lem-closed-immersion-pushout-schemes | 7b23c642e4f1ad7999caf26a9220e411412ec76c0eabb503075a7e70b3bbd8a7 (pre/post: 944c13ae5e644c7ff2ced010053a2016fd796d608e103d3ec8444d437aa9541f) | 0d78590796fd22d9e217dc1181d5cf0c7543418c898cc740fe53991307fbee48 (68e55116676adf5535f9acbf2d9c1024b6d9b3c0f8a13fdbe9318683a57cf5b5 → same) | dc8dbb94b14e0dfc12abc74f47d40e8e866e0ce226cdbf50818c98bd143f94a6 (same) |

The current contract hash differs from its Step 5 pre hash for all eight
entries. For seven items the post hash equals the pre hash; the curve contract
has a distinct post hash. The current contract hash differs from the post hash
for all eight. All current manifest hashes match the pre and post receipts. Seven
current item hashes match both item receipts. For the pushout item the receipt
and the candidate inventory predate the repair: both receipts still bind
944c13ae5e644c7ff2ced010053a2016fd796d608e103d3ec8444d437aa9541f, while the
current file is 7b23c642e4f1ad7999caf26a9220e411412ec76c0eabb503075a7e70b3bbd8a7.
Thus the pushout's current item carrier is not covered by the Step 5 post
receipt, even though its manifest hash is unchanged.

The Step 5 pre/post snapshots contain hashes, not earlier contract bodies, and
no earlier bodies are present in the reviewed carriers. I therefore verified
the exact hash deltas and reviewed each current contract in full, but cannot
claim a field-by-field textual diff against the old contract bodies. All eight
current risk_review entries say status complete and name group-alpha-a as
reviewer; I independently compared their notes and cited derivations to the
current statements and proofs.

## Item and contract review

All eight current item files and their exact batch 5 contract entries were
read together. Current contracts were checked for source/claim alignment,
derivation coverage, boundary rows, and consistency of risk_review with the
actual proof.

1. **def-algebraically-independent-finite-tuples-over-a-field** — The
   evaluation map follows from the polynomial-ring universal property, and its
   kernel is exactly the finite-support polynomial relations. The empty set,
   zero member, singleton/transcendental case, and finite variable renaming all
   match the definition. The Stacks Fields definition (tag 030D) is aligned.
   This ID is named in the group-a narrative.
2. **lem-quasi-finite-morphism-fibre-characterization** — The finite-type
   hypothesis is carried through the local fibre algebra criterion; the
   isolated-point/residue-field equivalence and the finite-type,
   zero-dimensional, quasi-compact fibre argument establish all three
   conditions. Empty fibres and nilpotents are covered. The cited Stacks
   algebra and varieties results (tags 00PJ, 00PK, 06LH; scheme-level tag
   01TC) support the invoked criteria. This ID is absent from the group-a
   narrative and decisions, so I independently checked its full proof and
   contract.
3. **lem-uniqueness-of-twists-on-the-projective-line** — The frames and
   transition functions give the compatibility equation
   $a_1u^m=u^na_0$. Units on each polynomial chart are nonzero constants;
   positive and negative exponents are both ruled out by polynomial degree,
   and equal indices give the converse. The risk note matches the proof. This
   ID is absent from the group-a narrative and decisions, so I independently
   checked its full proof and contract.
4. **def-birational-morphism-schemes** — For integral source and target there
   is a unique generic point on each; the stated image and generic-stalk
   isomorphism are the integral-scheme specialization of Stacks Definition
   29.51.1 (tag 01RO). Its function-field interpretation is consistent with
   the cited supplier. This ID is absent from the group-a narrative and
   decisions, so I independently checked the definition, dependencies, and
   contract.
5. **lem-birational-morphism-principal-open-isomorphism** — At the generic
   point the chart ring map embeds domains and induces an isomorphism of
   fraction fields. Clearing the finitely many denominators of finite-type
   generators gives a nonzero principal localization; the map there is
   surjective by generation and injective through the common fraction field.
   The preimage principal open and nonemptiness claims follow from the domain
   hypotheses. This agrees with Stacks Lemma 29.51.5 (tag 0BAC). This ID is
   absent from the group-a narrative and decisions, so I independently
   checked its full proof and contract.
6. **lem-curve-closed-subsets-finite** — The finite affine cover gives
   Noetherianity; the specialization argument establishes T0; a proper closed
   subset has a finite irreducible decomposition, and dimension one forces
   each component to be a singleton closed point. The proof declares where
   AC is used in the cited Noetherian and decomposition suppliers. This ID is
   named in the group-a decisions file; I also checked its current proof and
   contract.
7. **lem-projective-space-finite-type-over-base** — The n+1 standard affine
   charts are polynomial algebras in finitely many generators, including the
   n=0 identity case; their finite cover gives quasi-compact inverse images
   over affine base opens, and local finite type plus quasi-compactness gives
   finite type. Empty base is handled. The cited Stacks chart and
   quasi-compactness results (tags 01MD and 01WC) agree. This ID is named in
   the group-a narrative.
8. **lem-closed-immersion-pushout-schemes** — The quotient topology and
   fibre-product sheaf give the stated stalks; the local closed-immersion maps
   are surjective, and the affine fibre-product charts have the stated
   topology and sections. The projections are closed immersions,
   A ⊗_R B ≅ C for R=A×_C B with both maps surjective, and the
   universal property holds in schemes and S-schemes. Stacks tags 0ECI,
   0ECJ, 0E25 and the affine pushout tag 0ET0 were checked against the
   hypotheses used here.

   **Resolved defect and receipt limitation.** The pre-repair Step 1.3 claim
   that the stalk-map kernels were nonzero merely because the point lies in
   both closed-immersion images was false: an identity closed immersion has
   zero kernel. The current proof instead says the kernels are proper because
   the target stalk is a nonzero local ring, and consequently they lie in the
   respective maximal ideals. Zero kernels are allowed. This is correct and
   supplies what Step 2.1 needs; I found no further mathematical defect in
   the current item or its current risk_review. The corrected item hash is
   7b23c642e4f1ad7999caf26a9220e411412ec76c0eabb503075a7e70b3bbd8a7 and
   its current contract hash is
   0d78590796fd22d9e217dc1181d5cf0c7543418c898cc740fe53991307fbee48.
   The item hash in the existing Step 5 post receipt and candidate inventory
   is stale after this repair and must not be used as proof of current-carrier
   completeness.

## Review disposition

I found no unresolved mathematical issue in the eight current items after the
pushout correction. I do not attest that the Step 5 gate is complete: the
corrected pushout item hash differs from both Step 5 item receipts, and its
candidate inventory's item carrier predates that repair. No ledger,
certification tool, item, contract, or engine state was changed for this
review; this file is the sole review artifact.
