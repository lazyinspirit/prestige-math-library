# Step 7 adjudication — group a

Run: `phase-2-next-18`  
Batch: 5  
Status: complete

## Completed rejection adjudications

### `prop-subalgebras-quotients-and-finite-products-of-nilpotent-lie-algebras`

- Tuple: `gpt-5.6-terra` / `7a6ecccc7524bc0fb18d0b48f21124e895db57dd717bf75e99e88fc49d5c40bd`
- Outcome: `confirmed_fatal` (`logic`)
- Exact defect: step 2.1 used the undefined term $\gamma_0$ when the nonempty product has only zero factors, so the proof did not establish the stated class-$0$ boundary case.
- Guard hash before repair: `00adcb70dbd7bc704b9141b79b40e9ceb03e0c3dde59aa07bc4580065feb522b`
- Guard hash after repair: `f1b685198165348de1ac50ebf8d291efdcaf7ad25dec134a0f376c1d0eb12856`
- Repair: separated the case $c=0$ (all factors and the product are zero) from $c\geq1$ (the attaining factor has nonzero $\gamma_c$).
- Dependencies checked: `def-lower-central-series-and-nilpotent-lie-algebra`, `def-nilpotency-class-of-a-lie-algebra`, `def-direct-product-and-direct-sum-of-lie-algebras`.
- Focused checks: item precheck passed; item rendercheck passed.
- Rejudge target: yes.
- Sources consulted: none; the correction is an elementary consequence of the displayed componentwise lower-central-series identity and the local class conventions.

### `thm-lower-and-upper-central-series-characterize-nilpotence`

- Tuple: `gpt-5.6-terra` / `e25b4ad08c07230e7cde229c6740b681759848f63f4947042675d87271c831cd`
- Outcome: `confirmed_nonfatal`
- Exact issue: the induction implication in step 2.1 is needed for $r<c$, although the surrounding sentence states the invariant on $0\leq r\leq c$. At the terminal index the invariant already yields $\gamma_{c+1}\subseteq Z_0$; no $Z_{-1}$ term is needed.
- Guard hash: `3530da438b51862116c9b0c3f1309fc5751e4b011c3927341d41f09fba2a3c0f`
- Content/contract/impact changes: none, as required for a nonfatal outcome.
- Dependencies checked: `def-lower-central-series-and-nilpotent-lie-algebra`, `def-upper-central-series-of-a-lie-algebra`.
- Rejudge target: no.
- Sources consulted: none; the range check follows directly from the displayed induction invariant.

### `thm-derived-algebra-of-a-solvable-linear-lie-algebra-is-nilpotent`

- Tuple: `gpt-5.6-terra` / `0a01f412e088dccc2d9781b5b6f3c3acf7dec88a87774eef9e4a48ac58fa8765`
- Outcome: `confirmed_fatal` (`dependency_citation`)
- Exact defect: [L2] falsely stated that the cited Engel theorem applies directly when each element is nilpotent on $V$; its actual hypothesis concerns each $\operatorname{ad}_x$ on the Lie algebra.
- Guard hash before repair: `23ddcb3033f319cfcd073202af32bafcfb8a757044a29f15cdbe6d08c93a86f6`
- Guard hash after repair: `9fcb45888987a3e01d2d59918e083fb5686706b3cbcf39b8c8fb6d80cce49dea`
- Repair: corrected [L2], then proved $\operatorname{ad}_x=L_x-R_x$ nilpotent on $\operatorname{End}(V)$ from $x^m=0$ and restricted it to the derived subalgebra.
- Dependencies checked: `thm-engels-theorem`, `cor-simultaneous-upper-triangularization-of-solvable-lie-algebra-representations`, and the parallel computation in `lem-engel-common-zero-vector` step 1.3.
- Focused checks: item precheck passed; item rendercheck passed.
- Rejudge target: yes.
- Sources consulted: none; the missing bridge is proved directly in the repaired item.

### `def-nilradical-of-a-finite-dimensional-lie-algebra`

- Tuple: `gpt-5.6-terra` / `6944fa65d6315f463e7b9bb3687f9094c0145c3ef791303ee50df892b2c7afe4`
- Outcome: `false_positive`
- Exact finding: the rejection says the cited theorem does not prove sums of nilpotent ideals nilpotent or use finite dimensionality that way. Its proof does exactly this in steps 5.1 and 6.1, respectively.
- Guard hash: `7d38a8decd2883ac26b883177581c85986e5f00431513a7e366b6ce58ab3e84b`
- Content/contract/impact changes: none.
- Dependency checked: the complete proof of `thm-existence-and-characteristicity-of-the-nilradical-in-characteristic-zero`, especially steps 5.1–6.1.
- Rejudge target: no.
- Sources consulted: none; the local dependency itself resolves the objection exactly.

### `thm-equivalent-characterizations-of-reductive-lie-algebras`

- Tuple: `gpt-5.6-terra` / `bc2b872816d563cff5a23693d6780bb9c0757074cec1d3e86cab63e81b7670e9`
- Outcome: `confirmed_fatal` (`dependency_citation`)
- Exact defect: [L5] attributed the invariant-complement criterion to a definition that states only direct-sum decomposition, and step 1.3 used the unstated direction twice.
- Guard hash before repair: `494b5886916e6a0a975512fdcaeaace7d720e244071a1c4c794d241088790d0d`
- Guard hash after repair: `7abd2b1e9a1a821267a8584123e165934ee3aac39952f1c257378301fb219dc3`
- Repair: stated the dependency's exact definition and proved the finite-dimensional complement construction by adjoining irreducible summands disjoint from the current submodule sum.
- Dependency checked: `def-irreducible-completely-reducible-and-faithful-lie-algebra-representation`.
- Focused checks: item precheck passed; item rendercheck passed.
- Rejudge target: yes.
- Sources consulted: none; the missing equivalence direction is fully derived in the repaired proof.

### `def-simple-semisimple-and-reductive-lie-algebras`

- Tuple: `gpt-5.6-terra` / `260e99b144426ff753ef15c2ca59bd2b61edf471f30a6fcd4bc8e461f3a35384`
- Outcome: `confirmed_fatal` (`dependency_citation`)
- Exact defect: the closing sentence called the zero algebra reductive without retaining the characteristic-zero scope of this library's cited reductive definition.
- Guard hash before repair: `9deb578d7fb9de38de1a0b0e97b1a7bbead6c85bfd7425b9e659849f9e00bb79`
- Guard hash after repair: `defed5266ea7754bcc8627a30952b92a76603ebae282b10428e8b203ec99d3d6`
- Repair: qualified the reductivity assertion by $\operatorname{char}k=0$ while retaining the any-field semisimplicity assertion.
- Dependencies checked: `def-semisimple-lie-algebra-by-vanishing-radical`, `def-reductive-lie-algebra-by-semisimple-derived-algebra-and-center`.
- Focused checks: rendercheck passed; precheck reported zero proof-bearing items, as expected for a definition.
- Rejudge target: yes.
- Sources consulted: none; the field scope is explicit in the cited local definition.

### `thm-lie-third-fundamental-theorem`

- Tuple: `gpt-5.6-terra` / `c27369b2b05e2f06d2121f7508d10b1777cb2a4f90d400706874eaa37f1e8f3d`
- Outcome: `confirmed_fatal` (`logic`)
- Exact defect: the statement asserted uniqueness of a connected simply connected integration, but steps 1.1–2.1 established only existence; universal-cover uniqueness over the constructed subgroup did not compare arbitrary integrations.
- Guard hash before repair: `11324ad8b1ac462de47ef4b6b9aa1ce3c900a4f7eef00e9f07d01cb8f3661bfb`
- Guard hash after repair: `b9dfd343b7514921be50e55f10ca219c71e612e186616fdaf2b4319dbbbbed5f`
- Repair: added the earlier `thm-lie-second-fundamental-theorem`, integrated an algebra isomorphism and its inverse, and used uniqueness there to show both composites are identities. The statement now says directly “unique up to Lie-group isomorphism.”
- Owned carriers synchronized: item, batch-5 manifest, and proof contract; the downstream equivalence contract quote was refreshed. The added dependency is within batch 5, so no cross-batch frontier-ledger row is created.
- Focused checks: item precheck passed; item rendercheck passed; manifest/contract JSON parsed; strict proof-contract check passed for this item, its repaired product predecessor, and the downstream equivalence theorem.
- Rejudge target: yes.
- Sources consulted: none; `thm-lie-second-fundamental-theorem` states exactly the required integration existence and uniqueness.

### `def-levi-subalgebra-and-levi-decomposition`

- Tuple: `gpt-5.6-terra` / `af647443aadc549d41235324558f5113c0e6cd8670d7c4068a4536a99176f6ad`
- Outcome: `confirmed_fatal` (`dependency_citation`)
- Exact defect: the item claimed that radical-first $\mathfrak r\rtimes\mathfrak s$ agreed with a cited convention that writes the acting algebra first and the ideal second.
- Guard hash before repair: `a021960d8a3ef01a26a7c5d53af0d3e80c40b873a84862980c194e33dd337341`
- Guard hash after repair: `06b90ab8678945e6144322bf740c9f33eb1040a965698fc450cb7296a1fbd620`
- Repair: replaced the unsupported notation by the defined product $\mathfrak s\ltimes\mathfrak r$ and the canonical isomorphism $(x,u)\mapsto x+u$.
- Dependency checked: `def-semidirect-product-of-lie-algebras`.
- Owned carriers synchronized: item and batch-5 manifest.
- Focused checks: item rendercheck passed; manifest JSON parsed.
- Rejudge target: yes.
- Sources consulted: none; the cited local definition fixes the convention explicitly.

### `thm-equivalence-between-simply-connected-real-lie-groups-and-finite-dimensional-real-lie-algebras`

- Tuple: `gpt-5.6-terra` / `edbe67a6c9c2bd12a8f26a80b1339000d5bfb529819410ec65914aa7e129cc81`
- Outcome: `confirmed_fatal` (`dependency_citation`)
- Exact defect: [L1] called a Lie-algebra homomorphism a map “out of a group” and omitted the target Lie group, making the cited interface ill-typed.
- Guard hash before repair: `e7c910556239f3cfbceaa64a8512faab6f3c717eb276fff48a74fc75ba7b6f86`
- Guard hash after repair: `7b4174578bb032186b222d7c6336c833a659296ebb9a4bd0e3fd01e5700575b8`
- Repair: stated the exact map $\operatorname{Lie}(G)\to\operatorname{Lie}(H)$ and its unique integrated homomorphism $G\to H$.
- Dependency checked: `thm-lie-second-fundamental-theorem`.
- Focused checks: item precheck passed; item rendercheck passed; strict proof-contract check passed.
- Rejudge target: yes.
- Sources consulted: none; Lie II's local statement supplies the exact typed interface.

### `cor-the-lie-algebra-of-the-automorphism-group-of-a-semisimple-lie-algebra`

- Tuple: `gpt-5.6-terra` / `6c7c1cc9cb45e4fec941aa323c1de94192db0f5e309d7d824429d53f1f2621b8`
- Outcome: `confirmed_fatal` (`logic`)
- Exact defect: for a complex Lie algebra, $A[x,y]=[Ax,Ay]$ is polynomial but not complex-linear in $A$, so the asserted route to an $i$-stable tangent space was false.
- Guard hash before repair: `749cab9b133aff18eae857d73f8332ad4b871ba1e7d71a0bfdf5483cff410040`
- Guard hash after repair: `4a64de7b0895193a8330a88c141c2699560d603900a0d36d23b92b164eccf7bd`
- Repair: applied the closed-subgroup theorem first to the underlying real group, identified tangent vectors as complex-linear derivations in both directions, and used their $i$-stability together with exponential charts for the complex subgroup structure.
- Dependency checked: `thm-cartans-closed-subgroup-theorem`; the tangent calculation is carried out in the item.
- Focused checks: item precheck passed; item rendercheck passed; strict proof-contract check passed.
- Rejudge target: yes.
- Sources consulted: none; the correction follows by differentiating the displayed bracket equation and the elementary derivation-flow calculation.

### `thm-the-chevalley-eilenberg-differential-squares-to-zero`

- Tuple: `gpt-5.6-terra` / `8bae7fc22caf64d3530586437a5cb2b9f0dd92a44b6a07cad57c8b21841a8a7c`
- Outcome: `confirmed_fatal` (`logic`)
- Exact defect: step 1.1 counted two created-bracket action terms where the expansion has one, and no step handled the mixed action--bracket terms on three distinct indices; the exhaustion claim was therefore false.
- Guard hash before repair: `500ca9bf854bcc87b62b0deecc18c2f4f7ced4fca9e205f563db4450dc4784e6`
- Guard hash after repair: `5b2962d73be29d20b933f6992723318d5ee06f976f77c54401a28e04e5204a66`
- Repair: enumerated the two successive-action terms and the single created-bracket action term, computed the opposite signs of every three-index mixed pair, and displayed the parity/alternation and Jacobi cancellations for the two double-bracket types.
- Dependencies checked: `def-chevalley-eilenberg-differential`, `def-representation-of-a-lie-algebra`, `def-lie-algebra-over-a-field`.
- Focused checks: item precheck passed; item rendercheck passed; strict proof-contract check passed.
- Rejudge target: yes.
- Sources consulted: none; every sign was recomputed directly from the page's zero-based formula and recorded in the repaired proof.

### `ex-first-cohomology-with-trivial-coefficients-is-the-dual-abelianization`

- Tuple: `gpt-5.6-terra` / `39773055f9bd4d2871f6c9b865558fbf945e74eb8573eadcfd0870b4b3cefca2`
- Outcome: `confirmed_fatal` (`dependency_citation`)
- Exact defect: [L2] inflated the quotient-Lie-algebra definition into a universal property it does not state, and step 2.1 used that property without a derivation.
- Guard hash before repair: `9707ac0b3f24c71390f33927b74a465811006395f7d55b00f84bd05f57a1eca6`
- Guard hash after repair: `c225f10ffe80637164df2182a968de4e8dd4cdf2a26dd57cd776a46c743b7505`
- Repair: retained the exact quotient/canonical-projection interface and explicitly defined the descended form on cosets, proved well-definedness, and checked descent and pullback are linear inverses.
- Dependencies checked: `def-quotient-lie-algebra`, `prop-first-lie-algebra-cohomology-is-derivations-modulo-inner-derivations`.
- Focused checks: item precheck passed; item rendercheck passed; strict proof-contract check passed.
- Rejudge target: yes.
- Sources consulted: none; the missing quotient factorization is fully derived in the repaired step.

### `thm-weyls-complete-reducibility-theorem`

- Tuple: `gpt-5.6-terra` / `710e4b9c666a79ee87096b47338333b2481ca0806d6f1ebb162809d4b1020b65`
- Outcome: `confirmed_fatal` (`dependency_citation`)
- Exact defect: [L1] attributed the finite-dimensional invariant-complement criterion to a definition that states only direct-sum decomposition into irreducibles, and step 5.1 relied on the unstated implication.
- Guard hash before repair: `308d35d3e9cea14281ab67799d7b66d42cdcb42db29c0aca118fedec1bae0bb2`
- Guard hash after repair: `bcea6daeff843ae27bba0012aafef11f3672c685016c7e70015b88a4cdb7355a`
- Repair: corrected [L1] to the exact definition and, after proving complements for every submodule, used induction on dimension to split off a minimal nonzero irreducible submodule and decompose its complement.
- Dependency checked: `def-irreducible-completely-reducible-and-faithful-lie-algebra-representation`; the remainder of the theorem's declared Casimir and descent chain was reread.
- Focused checks: item precheck passed; item rendercheck passed; strict proof-contract check had no errors and retained its pre-existing shotgun-bracket warning.
- Rejudge target: yes.
- Sources consulted: none; the missing finite-dimensional implication is proved directly in the repaired final step.

### `ex-distinct-conjugate-levi-subalgebras`

- Tuple: `gpt-5.6-terra` / `d1879d2e9765f7bf2cfbd8eca6c50864eb108ed0e7cffd4d9250b7d3f3e356e9`
- Outcome: `confirmed_fatal` (`dependency_citation`)
- Exact defect: [L2] replaced Malcev's finite product of inner exponentials by a single exponential. The targeted rereading also exposed radical-first semidirect notation incompatible with [L1]'s acting-algebra-first convention.
- Guard hash before repair: `6e9007faf9f3f3ebc8f892582e564aea98489e8269521b48dd7470e465264ee6`
- Guard hash after repair: `fb7652b0679068a25b543eb40179f55c39be28afff4a300bd76d3fd931e3b4b6`
- Repair: stated the exact finite-product theorem, described the computed automorphism as a one-factor instance, and consistently rewrote the example as $\mathfrak{sl}_2\ltimes V$ with elements $(x,v)$ and the standard factor $\mathfrak{sl}_2\oplus0$.
- Dependencies checked: `thm-malcev-conjugacy-of-levi-subalgebras`, `def-semidirect-product-of-lie-algebras`.
- Focused checks: item precheck passed; item rendercheck passed; strict proof-contract check passed. The batch manifest already used the corrected acting-algebra-first convention, so it required no edit.
- Rejudge target: yes.
- Sources consulted: none; both interfaces and the nilpotent adjoint computation are explicit in the local items.

### `ex-direct-sum-decomposition-of-a-semisimple-lie-algebra`

- Tuple: `gpt-5.6-terra` / `e830e31a67d58543b1c707ea75730d9e1e8a45e95b550fa3fe82843d76a6d4ad`
- Outcome: `confirmed_fatal` (`dependency_citation`)
- Exact defect: [L1] attributed the complete ideal classification to the direct-sum decomposition theorem, whose statement supplies only existence of a finite direct sum of simple ideals.
- Guard hash before repair: `9d1ba7b5782858f02b8b0d92d7f698f5f12a895ed81f44491cfcfa6104fad869`
- Guard hash after repair: `187293d9a73de1d8e8f4dcd9e27cef3775308cf4ac542a97dc7e0c9ed111a061`
- Repair: replaced the dependency with `prop-ideals-and-quotients-of-semisimple-lie-algebras`, whose statement exactly classifies ideals relative to the simple-factor decomposition, and synchronized the manifest and proof contract.
- Dependencies checked: the complete statements and proofs of `thm-semisimple-lie-algebras-decompose-as-direct-sums-of-simple-ideals` and `prop-ideals-and-quotients-of-semisimple-lie-algebras`.
- Focused checks: item precheck passed; item rendercheck passed; manifest JSON parsed; strict proof-contract check passed.
- Rejudge target: yes.
- Sources consulted: none; the exact local proposition resolves the citation objection.

### `ex-the-bch-group-of-a-nilpotent-lie-algebra`

- Tuple: `gpt-5.6-terra` / `722685c2fca916895206500647ee109e9be8add55a81dce743b01e61f21ffc39`
- Outcome: `confirmed_fatal` (`dependency_citation`)
- Exact defect: step 2.1 assumed a connected simply connected integration, while [L2] was conditional on a group already having those properties and supplied no existence theorem.
- Guard hash before repair: `d14cf0e83f233c8f0088962a011998bc2d179f85e6cf119e6107d6c16eeeb270`
- Guard hash after repair: `212830f21a856ee0ee12b57d5583e21b9e61e25db76e59d77c21b89b8bacf1c5`
- Repair: added `thm-lie-third-fundamental-theorem` for existence, retained the exponential-diffeomorphism theorem as a separate conditional step, and synchronized the manifest and proof contract. The added dependency is within batch 5, so no cross-batch frontier-ledger row is created.
- Dependencies checked: `thm-lie-third-fundamental-theorem`, `thm-the-exponential-map-of-a-connected-simply-connected-nilpotent-lie-group-is-a-diffeomorphism`, `thm-baker-campbell-hausdorff`.
- Focused checks: item precheck passed; item rendercheck passed; manifest JSON parsed; strict proof-contract check passed for this item and for the neighboring contract restored after the citation-label insertion.
- Rejudge target: yes.
- Sources consulted: none; Lie III's current local statement supplies exactly the missing integration existence.

### `ex-an-abelian-extension-from-a-two-cocycle`

- Tuple: `gpt-5.6-terra` / `3addd72a7f32476159d17447398d7932084cab00d5e8715f288fa92d1ea7520a`
- Outcome: `confirmed_fatal` (`dependency_citation`)
- Exact defect: [L1] attributed the explicit cocycle-extension bracket to a theorem statement that supplies only a natural bijection between cohomology and extension classes.
- Guard hash before repair: `8d73af9861dd7af3c57df90f9a1e5a125c386f76214e03974b6c76d8f0f71932`
- Guard hash after repair: `72a8254db6e86ab81eb0a3768ec86c2d46acb7cd4d601d8f6171528db9870a1b`
- Repair: removed the inflated dependency and directly defined the bracket on $kz\oplus\mathfrak a$, then checked bilinearity, alternation, Jacobi, abelian kernel, quotient, induced trivial action, and the Heisenberg basis relations. Manifest and proof contract were synchronized.
- Dependencies checked: the Statement and construction proof of `thm-second-lie-algebra-cohomology-classifies-abelian-extensions`; the repair no longer treats its Statement as the formula source.
- Focused checks: item precheck passed; item rendercheck passed; manifest JSON parsed; strict proof-contract check passed.
- Rejudge target: yes.
- Sources consulted: none; the specialized construction and every Lie-algebra axiom are proved directly in the repaired example.

### `cor-levi-factors-are-noncanonical-but-unique-up-to-inner-unipotent-conjugacy`

- Tuple: `gpt-5.6-terra` / `d8b27671f01eaea1bd6572145b52c0d5eedebc6c9225bc43eb82c285928944d1`
- Outcome: `confirmed_fatal` (`logic`)
- Exact defect: the proof established conjugacy but did not prove that unequal Levi factors occur; its unlicensed reference to a later companion example could not support the first sentence or title.
- Guard hash before repair: `3fb13492b53014daa79319521f4b6f962e64062025f85074ccf799f163495167`
- Guard hash after repair: `852d4ba09ac1b025e0bbb4527b4b626a8c1ee0f41010265efb04cba0756135e4`
- Repair: constructed $\mathfrak{sl}_2(k)\ltimes k^2$, computed the nondegenerate Killing matrix of $\mathfrak{sl}_2$, proved the radical is exactly $k^2$, and exhibited a nilpotent inner exponential carrying the standard Levi factor to a distinct factor.
- Dependencies checked: `thm-malcev-conjugacy-of-levi-subalgebras`, `def-semidirect-product-of-lie-algebras`, `def-radical-of-a-finite-dimensional-lie-algebra`, `thm-cartans-semisimplicity-criterion`.
- Focused checks: item precheck passed; item rendercheck passed; manifest JSON parsed; strict proof-contract check passed.
- Rejudge target: yes.
- Sources consulted: none; the witness and all structural claims are derived explicitly from the local interfaces.

## Reader-warning dispositions

All nine reader warnings have been adjudicated.

- `s8a-b9a7e1ee292c4537a2a6d3d6` — `covered_by_rejection`; same Engel-interface defect and same repair as the exact rejection above.
- `s8a-109416225a6dd01d94fb8f47` — `covered_by_rejection`; the exact rejection licensed the expanded sign accounting and exhaustion repair.
- `s8a-c0c2450770cbc8f59e0d57fa` — `covered_by_rejection`; the exact rejection licensed the same ideal-classification dependency repair.
- `s8a-6f5d3bfc0a51a9d60cd8f368` — `confirmed_fatal` (`dependency_citation`); [L1] now cites the exact simultaneous-triangularization corollary, and step 2.2 proves the adjoint-nilpotence bridge required by Engel. Guard `856d575bd5b34c97ba57caf3bb838b6ea9acba737002f3132359bd21a108ceba` → `45a9f3f635ae559816d523f590d4e00cd154bb7fc8bd1bcf5c34bded92f8d717`; item precheck, rendercheck, manifest JSON, and strict proof-contract check passed; rejudge target yes; no external source was needed because the exact corollary and binomial calculation are local.
- `s8a-0ac9148c3ddb305f40185816` — `confirmed_fatal` (`dependency_citation`); [L4] now cites the exact simultaneous-triangularization corollary, step 3.1 proves that extended derivations map $U$ into $J$ and preserve $J^N$, the iterated-Leibniz split proving $I^N\subseteq I_0$, and the finite $U/I$-module filtration proving $U/I^N$ finite-dimensional, while step 4.1 explicitly obtains strict upper triangularity of $D+y$. Guard `cc1e6ddf73513d453a44a1183e643def06a2dadb362b43cd7e2ee43c8cb79deb` → `52140ab475179c34f9e6e30e22594b0be50a5ff03bae8197f3ef590cbcbdfb27`; item precheck, rendercheck, manifest JSON, and strict proof-contract check passed; rejudge target yes. Source consulted: Anthony Knapp, *Lie Groups Beyond an Introduction*, Appendix B §3, printed pp. 663–668 ([author-hosted PDF](https://www.math.stonybrook.edu/~aknapp/download/Beyond2.pdf)); Lemma B.12 explicitly uses the simultaneous-triangularization corollary, proves $J^N\subseteq I$, derivation stability and $I^N\subseteq I_0$, and invokes the left-Noetherian finite-codimension result to conclude $U/I_0$ is finite-dimensional.
- `s8a-521a3a0f13e12b7da8c2406d` — `nonfatal`; step 2.2 contains the displayed relations $\sum_{i\ne s}t_i\in I^2$ for every $s$. Subtracting two such relations gives $t_s-t_{s'}\in I^2$, and combining the resulting common congruence class with the displayed total relation and characteristic zero yields each $t_s\in I^2$. This is an immediate reader-closable omission, not a false claim; no content, manifest, contract, or rejudge target change. Sources consulted: none; the deduction is internal to the displayed congruences.
- `s8a-43f447447c30a1deca2e29ff` — `nonfatal`; the Killing-form definition does not itself state invariance, but step 2.1 marks the equality as algebra and it follows immediately from $\operatorname{ad}_{[x,y]}=[\operatorname{ad}_x,\operatorname{ad}_y]$ and cyclicity of trace: $K([x,y],z)=\operatorname{tr}([\operatorname{ad}_x,\operatorname{ad}_y]\operatorname{ad}_z)=\operatorname{tr}(\operatorname{ad}_x[\operatorname{ad}_y,\operatorname{ad}_z])$. This is reader-closable proof detail; no content, manifest, contract, or rejudge target change. Sources consulted: none; the full calculation is elementary from the current local definition.
- `s8a-501792767d93db33a1048add` — `nonfatal`; the “by step 1.1” pointer in step 2.1 is inaccurate, but the standing branch has $[\mathfrak g,\mathfrak r]\ne0$ and the current case assumes that $\mathfrak r$ has no nonzero proper $\mathfrak g$-ideal, so the nonzero ideal $[\mathfrak g,\mathfrak r]\subseteq\mathfrak r$ equals $\mathfrak r$. In step 3.1, $\mathfrak s_1\subseteq\mathfrak s_0+\mathfrak m$, the projection to $\mathfrak s_0$ has kernel $\mathfrak s_1\cap\mathfrak m=0$ because $\mathfrak m\subseteq\mathfrak r$, and the Levi factors have equal dimension; it is therefore the graph of a linear map, and closure under brackets is exactly the cocycle equation. Both are immediate reader-closable justifications; no content, manifest, contract, or rejudge target change. Sources consulted: none; [L1] and the current case hypotheses supply every fact.
- `s8a-cf17701c456118499524f39d` — `confirmed_fatal` (`dependency_citation`); [L4] had attributed the ideal-complement property to the direct-sum decomposition theorem. It now cites `prop-ideals-and-quotients-of-semisimple-lie-algebras`, whose statement explicitly supplies an ideal complement, and the manifest and proof contract match. The warning's separate concern about the Casimir homotopy identity remains presentation-level: its mechanism is stated, the identity is correct, and the independent reader checked it in degrees zero through two. Guard `4248840fafad9ffdbabce1f1fc9a4cc60369b187d67d9d588597d568ee60091a` → `05874783e9a7bda3567f0cc5d47395e68a0747a3afc86fb87bb9ecac5318b8f2`; item precheck, rendercheck, manifest JSON, and strict proof-contract check passed; rejudge target yes. Sources consulted: none; the exact supplying proposition and the homotopy calculation are local.

## Alerts

None. No dependency edge or defect crossed the group boundary during adjudication.

## Validation and reconciliation

- Ledger reconciliation found exactly one adjudication row for each of the 18 owned `(id, model, context_sha256)` rejection tuples and exactly one owning-group decision for each of the nine Step-6 warning IDs.
- Guard reconciliation found 19 changed group-a items, exactly the 16 judge-licensed fatal repairs plus the three independently fatal reader-warning repairs. It reported zero group-a errors. The repository-wide `step7-guard.mjs` invocation remained red at the latest check with 32 errors on other groups' in-flight items; none names an item in batch 5 or group a.
- The strict `node tools/step7-scope.mjs check --run phase-2-next-18` was run and remained red on 25 undispositioned warnings/alerts, all owned by other groups. The structural check with `--allow-pending-alerts` passed: six groups, 566 partitioned items, 62 currently open routed rejections, and 23/48 warnings/alerts dispositioned. All nine group-a warnings are among the dispositions.
- A combined focused precheck passed on all 17 proof-bearing repaired items; the two repaired definitions correctly supplied no proof body to check. Rendercheck passed on all 19 repaired items. Strict proof-contract validation checked all 17 repaired items with contracts and returned zero errors; it retained one non-error `shotgun-bracket` warning on `thm-weyls-complete-reducibility-theorem` already noted in that item's adjudication.
- `node tools/defect-ledger.mjs validate --run phase-2-next-18` passed with 186 rows and zero schema errors. Exact-link reconciliation found one matching defect row for each of the 16 fatal judge adjudications and each of the three fatal reader warnings in group a. The repository-wide defect-ledger coverage check remained red only because another group's fatal adjudication on `cor-solovay-model-has-no-banach-tarski-decomposition` had no defect row at check time.
- Manifest and proof-contract JSON parsed after the final repairs. No item was added, deleted, renamed, or moved; no frontier-ledger or cross-group-alert row was needed.

## Next action

None within this dispatch. The engine may rejudge the 19 repaired group-a items and continue the repository-wide stage once the other groups close their outstanding guard, alert, and defect-ledger obligations.
