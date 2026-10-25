# Batch 8 authoring notes

Run: `advanced-qft-supersymmetry-build-2026-10-23`  
Pair: `qftx-borel-localization` / `qftx-borel-localization-examples`  
Page batch dependency level: 1; the current dependency-level file lists batch 7 as the sole in-run page prerequisite.

## Plan and inventory comparison

The complete design section at `research/plan-advanced-qft-and-supersymmetry-track.md` §“Borel Localization for Compact Torus Actions” and the corresponding rows in `research/plan-spec.json` agree on both page IDs, order 964, title, companion, `quantum-field-theory-mathematics` category, mathematics library, and the A-page prerequisite `qftx-equivariant-cohomology`. The proposed inventory names only `thm-borel-localization-for-compact-torus-actions` as its future A-page theorem and explicitly separates noncompact and compact-support variants. The empty run-manifest item arrays are authoring placeholders. No plan/design conflict was found; the A page keeps the compact smooth Borel theorem, and the B page carries finite-dimensional examples.

The owner direction dated 2026-10-23 controls the scope. It requires complete local mathematics, actual inspected supplier interfaces, substantial B-page examples, no claim that finite-dimensional Borel localization proves continuum field-theory localization, and frontmatter-only A/B pages.

## Supplier interface and readiness

The required page `qftx-equivariant-cohomology` is present. Its current frontmatter lists `def-torus-equivariant-cohomology-cartan-model` and `lem-torus-classifying-space-cohomology`; the page's own required page, `moment-maps-and-symplectic-reduction`, is present and published. I read both Batch-7 carrier statements and complete proofs. The Borel definition uses the product Milnor model and real singular cohomology for smooth left actions, defines the Cartan complex separately, and makes no general Borel–Cartan comparison. The coefficient lemma uses `T=(R/Z)^r`, the right product Milnor model, tautological-line Euler classes, and the period-one Lie-algebra basis, under full AC.

Current `loadStep1Record` and `step1Decision` checks return `closed:true`, `decision:ready` with current hashes for both suppliers: `def-torus-equivariant-cohomology-cartan-model` (`5487bc1bcee36dafba1b3e4747874ed8427cefc586a5a1f8ec92687e20924551`, recorded 2026-10-23T08:29:48.868Z) and `lem-torus-classifying-space-cohomology` (`e218284e79262081b742030f2623af4efbed620a2bca954f0406b323448dd6b5`, recorded 2026-10-23T08:29:40.656Z). Their exact interfaces match the uses in `def-qftx-character-localization`; the two item edges and the required page edge are `verified` in the batch cross-batch dependency array. Verification records the scoped interface check and does not confer independent proof approval.

## Sources read for this A page

- Michael F. Atiyah and Raoul Bott, “The Moment Map and Equivariant Cohomology,” *Topology* 23 (1984), §2 on equivariant pushforward/Thom classes and §3, Lemma 3.3, Proposition 3.4, Theorem 3.5, and equation (3.7), printed pp. 4–9. Full PDF: `https://www.math.stonybrook.edu/~mmovshev/MAT570Spring2008/BOOKS/atiyahbott_moment.pdf`. Supports fixed-point restriction, orbit-isotropy torsion, normal-weight Euler classes, and the Gysin route; compact finite-dimensional hypotheses are retained.
- Shubham Dwivedi, Jonathan Herman, Lisa C. Jeffrey, and Theo van den Hurk, *Hamiltonian Group Actions and Equivariant Cohomology* (2019), §9.9, Example 9.48, and §9.10, Theorem 9.50 and proof, PDF pp. 85–87. Full PDF: `https://www.math.toronto.edu/~jeffrey/mat1312/symplecbookpub.pdf`. Independent book treatment of fixed sets, normal weights, and compact Borel localization; the local proof supplies the injectivity argument rather than relying on the book's compressed step.
- Allen Hatcher, *Algebraic Topology*, §3.2, Theorem 3.19, printed pp. 220–222. Full chapter: `https://pi.math.cornell.edu/~hatcher/AT/ATch3.pdf`. Supplies the integral projective-space ring; coefficient change, finite products, and the character lattice formula are proved locally.
- Allen Hatcher, *Vector Bundles and K-Theory*, Appendix Propositions 1.18 and 1.20, printed pp. 35–37. Active full-text mirror: `https://people.math.harvard.edu/~dafr/M392C-2012/Readings/Hatcher.pdf`. Supplies compact-Hausdorff and CW-complex paracompactness for the Borel-base lemma. The Cornell route `https://pi.math.cornell.edu/~hatcher/VBKT/VB.pdf` returned an unexpected browser status; a full-text alternative of the same book was found, read, and retained. Its failed route, search, and per-item alternative argument/dependencies remain in the coverage file's `source_resolution` and `retrieval_history`.
- Allen Hatcher, *Algebraic Topology*, Appendix, Theorem A.6 and proof, printed pp. 524–525. Full book: `https://pi.math.cornell.edu/~hatcher/AT/AT.pdf`. Supplies the product-CW topology for the countable-cell/finite-factor cases used in the Borel-base lemma.

The coverage file records all five active source locators, read extents, limits, item support, and per-result dispositions. `source-fetch-check` verified 5/5 full-text stamps. No result is attributed to the failed Cornell VBKT route.

## Completed item checkpoint

### `lem-qftx-compact-torus-fixed-locus-normal-weights`

**Claim and conventions.** Under $AC_\omega$, for compact $T=(\mathbb R/\mathbb Z)^r$ acting smoothly on a compact finite-dimensional boundaryless manifold $M$, averaging a Riemannian metric gives a $T$-invariant metric; $F=M^T$ is a compact embedded submanifold with $T_pF=(T_pM)^T$; the normal fibers have no trivial representation and split smoothly into finitely many nonzero weight bundles on each component. The proof fixes the product-torus Haar measure and the geodesic-exponential convention; it does not assume Hamiltonian or symplectic data.

**Dependencies.** Direct IDs: `def-countable-choice`, `def-smooth-left-action-of-a-lie-group`, `def-the-one-dimensional-torus-and-normalized-haar-integral`, `def-riemannian-metric-and-riemannian-manifold`, `thm-every-smooth-manifold-admits-a-riemannian-metric`, `thm-differentiation-under-the-integral-sign-on-a-compact-rectangle`, `thm-compactness-under-continuous-maps`, `thm-existence-uniqueness-and-smooth-dependence-of-geodesics`, `lem-local-isometries-send-geodesics-to-geodesics`, `thm-smooth-inverse-function-theorem-on-manifolds`. `dependency_level` = 0.

**Decisions and checks.** `loadStep1Record`/`step1Decision` return current `ready` at hash `4a413c0f820f0997b6bfaa73f4f671d3e4704819fe815130b67894cccc63ba65`. Placement is A page `qftx-borel-localization` at dependency level 0; the readiness record lists all 10 direct dependencies. Focused depcheck, content policy, strict proof contract, source coverage/fetch, and explicit proof-layout checks pass. No mathematical prerequisite remains unresolved.

### lem-qftx-compact-torus-equivariant-slice-neighborhoods

**Claim and conventions.** For any compact invariant embedded submanifold of a compact torus manifold with invariant metric, the normal exponential gives an equivariant tubular disk. Applied to an orbit \(T/H\), its normal bundle is \(T\times_HV\); because \(T\) is abelian, all stabilizers in the slice are contained in the proper isotropy subgroup \(H\). The uniform disk and injectivity arguments use compactness of the zero section and countable choice only for the displayed sequence of hypothetical collisions.

**Dependencies.** Direct IDs: `def-countable-choice`, `lem-qftx-compact-torus-fixed-locus-normal-weights`, `thm-every-orbit-is-an-injectively-immersed-homogeneous-space`, `thm-existence-uniqueness-and-smooth-dependence-of-geodesics`, `lem-local-isometries-send-geodesics-to-geodesics`, `thm-smooth-inverse-function-theorem-on-manifolds`, `thm-compactness-under-continuous-maps`. `dependency_level` = 1.

**Decisions and checks.** `loadStep1Record`/`step1Decision` return current `ready` at hash `d07623b2f7231ec40e768d1c3213c7584bc2ffa9ff52622482ae271198d962ae`. Placement is A page `qftx-borel-localization` at dependency level 1; the readiness record lists all 7 direct dependencies. Focused depcheck, content policy, strict proof contract, source coverage/fetch, and explicit proof-layout checks pass. No mathematical prerequisite remains unresolved.

### lem-qftx-proper-closed-subgroup-has-annihilating-character

**Claim and conventions.** For every proper closed subgroup \(H\) of a product torus \(T\), the quotient \(Q=T/H\) is a positive-dimensional compact connected abelian Lie group. Its exponential kernel is a full lattice; a dual lattice functional constructs a nontrivial smooth character of \(Q\), whose pullback to \(T\) is trivial on all of \(H\). This is the annihilator required by the finite orbit-slice proof.

**Dependencies.** Direct IDs: `def-countable-choice`, `thm-quotient-manifold-by-a-closed-lie-subgroup`, `thm-the-lie-group-exponential-map-is-smooth-with-identity-differential-at-zero`, `thm-one-parameter-subgroups-are-integral-curves-of-left-invariant-fields`, `prop-exponential-scales-one-parameter-subgroups`, `def-one-parameter-subgroup-of-a-lie-group`, `thm-smooth-inverse-function-theorem-on-manifolds`, `thm-compactness-under-continuous-maps`. `dependency_level` = 0.

**Decisions and checks.** `loadStep1Record`/`step1Decision` return current `ready` at hash `72e2e684a53d9e262719ea0614bd74ff0c5697fed8261ddca47bc41f0b757c19`. Placement is A page `qftx-borel-localization` at dependency level 0; the readiness record lists all 8 direct dependencies. Focused depcheck, content policy, strict proof contract, source coverage/fetch, and explicit proof-layout checks pass. No mathematical prerequisite remains unresolved.

### lem-qftx-module-localization-preserves-exactness

**Claim and conventions.** For a commutative ring, a multiplicative set not containing zero, and a short exact sequence of modules, fraction localization is short exact. The proof uses the fraction criterion, clears denominators for injectivity and kernel exactness, and chooses one preimage for surjectivity.

**Dependencies.** Direct IDs: none. `dependency_level` = 0.

**Decisions and checks.** `loadStep1Record`/`step1Decision` return current `ready` at hash `d0b449e26b43249cddac3f514e68c33c2016d1c066fcbc872c3f1e24337c688c`. Placement is A page `qftx-borel-localization` at dependency level 0; the readiness record lists all 0 direct dependencies. Focused depcheck, content policy, strict proof contract, source coverage/fetch, and explicit proof-layout checks pass. No mathematical prerequisite remains unresolved.

### lem-qftx-rational-torus-classifying-space-cohomology

**Claim and conventions.** For the right product Milnor model of T=(R/Z)^r, the rational coefficient ring is Q[u_1,...,u_r]; smooth characters are uniquely indexed by integer weight vectors and their associated first Chern classes are the corresponding linear forms. The proof also establishes degreewise finite-free homology of BT over Q and R for Künneth.

**Dependencies.** Direct IDs: `def-axiom-of-choice`, `lem-unit-circle-is-a-compact-metrizable-topological-group`, `prop-relative-cw-inclusions-are-cofibrations`, `def-compactly-generated-based-space-and-well-pointed-object`, `def-milnor-infinite-join-model-of-eg`, `thm-milnor-join-model-is-a-contractible-free-g-space`, `lem-cohomology-ring-of-infinite-complex-projective-space`, `thm-topological-universal-coefficient-short-exact-sequence-for-cohomology`, `thm-universal-coefficient-theorem-for-homology-over-a-pid`, `cor-field-kunneth-isomorphism-for-homology-of-products`, `thm-cohomological-kunneth-cross-product-is-a-ring-isomorphism`, `prop-first-chern-class-of-tensor-dual-and-conjugate-lines`, `def-chern-classes-from-the-projective-bundle-relation`, `thm-complex-exponential-is-entire-with-derivative-itself`, `thm-sine-cosine-zero-sets-and-fundamental-period`, `cor-zero-derivative-implies-constant`. `dependency_level` = 0.

**Decisions and checks.** `loadStep1Record`/`step1Decision` return current `ready` at hash `c74c17bbed7a7f23f0b158e0778df64545edcb65acdd6df06450035163bb4192`. Placement is A page `qftx-borel-localization` at dependency level 0; the readiness record lists all 16 direct dependencies. Focused depcheck, content policy, strict proof contract, source coverage/fetch, and explicit proof-layout checks pass. No mathematical prerequisite remains unresolved.

### lem-qftx-singular-cohomology-homotopy-invariance

**Claim and conventions.** Homotopic maps induce the same singular cohomology pullback for all field coefficients, by dualizing the supplied singular-chain prism formula, including degree zero.

**Dependencies.** Direct IDs: `def-singular-cochain-complex-with-coefficients`, `def-singular-cohomology-with-coefficients`, `thm-singular-chain-homotopy-formula`. `dependency_level` = 0.

**Decisions and checks.** `loadStep1Record`/`step1Decision` return current `ready` at hash `44f7fa23b09b4912941cfdb7413c204206de945c5f5ab25fbaa91c7a500a1a85`. Placement is A page `qftx-borel-localization` at dependency level 0; the readiness record lists all 3 direct dependencies. Focused depcheck, content policy, strict proof contract, source coverage/fetch, and explicit proof-layout checks pass. No mathematical prerequisite remains unresolved.

### lem-qftx-compact-smooth-manifold-has-finite-good-cover-nerve-model

**Claim and conventions.** For a compact finite-dimensional smooth Riemannian manifold, choose a finite cover by strongly geodesically convex open sets; every nonempty finite intersection remains strongly convex, and the finite nerve realization is homotopy equivalent to the manifold. The statement defines strong convexity by the unique globally minimizing geodesic connector, contained in the set and smooth in its endpoints. The empty manifold has empty nerve.

**Dependencies.** Direct IDs: `def-axiom-of-choice`, `thm-existence-of-geodesically-convex-neighborhoods`, `thm-smooth-partitions-of-unity-exist-on-manifolds`. `dependency_level` = 0.

**Decisions and checks.** `loadStep1Record`/`step1Decision` return current `ready` at hash `83bc35692e9b0c4c24d23ecd04e25744f34e5dbc4984c4851db503a24a20ca02`. Placement is A page `qftx-borel-localization` at dependency level 0; the readiness record lists all 3 direct dependencies. Focused depcheck, content policy, strict proof contract, source coverage/fetch, and explicit proof-layout checks pass. No mathematical prerequisite remains unresolved.

### lem-qftx-compact-manifold-cohomology-positive-ideal-nilpotent

**Claim and conventions.** A compact smooth Riemannian manifold has a finite geodesically convex cover, hence finite CW homotopy type and a bound N with H^q(F;k)=0 for q>=N; its positive-degree cohomology ideal is nilpotent. Finite Mayer–Vietoris induction proves the bound; the good-cover nerve lemma supplies the CW homotopy type.

**Dependencies.** Direct IDs: `def-axiom-of-choice`, `lem-qftx-singular-cohomology-homotopy-invariance`, `lem-qftx-compact-smooth-manifold-has-finite-good-cover-nerve-model`, `thm-existence-of-geodesically-convex-neighborhoods`, `thm-mayer-vietoris-sequence-in-singular-cohomology`, `def-singular-boundary-operator`, `def-singular-cochain-complex-with-coefficients`, `def-singular-cohomology-with-coefficients`. `dependency_level` = 1.

**Decisions and checks.** `loadStep1Record`/`step1Decision` return current `ready` at hash `66b35740ecbf70937ddf15ddf0b494e9b20dfd64224d6b3b90870ca2e47704c8`. Placement is A page `qftx-borel-localization` at dependency level 1; the readiness record lists all 8 direct dependencies. Focused depcheck, content policy, strict proof contract, source coverage/fetch, and explicit proof-layout checks pass. No mathematical prerequisite remains unresolved.

### lem-qftx-borel-base-is-paracompact-of-cw-type

**Claim and conventions.** For the selected product BT=(CP^infinity)^r and compact smooth F, the actual ordinary product BT x F is paracompact Hausdorff and has CW type. The proof uses Hatcher's CW paracompactness argument, the countable-CW product-topology evidence in the inspected flag-bundle item, a finite good-cover nerve model for F, and a direct locally finite refinement argument for product with compact F.

**Dependencies.** Direct IDs: `def-axiom-of-choice`, `def-paracompact-space`, `lem-qftx-compact-smooth-manifold-has-finite-good-cover-nerve-model`, `lem-universal-complex-flag-bundle-is-bt-n`. `dependency_level` = 1.

**Decisions and checks.** `loadStep1Record`/`step1Decision` return current `ready` at hash `ac3ac697c6a58ecd34140e7183ea8197d39b23fe7afa6cecf89b9666540e4d98`. Placement is A page `qftx-borel-localization` at dependency level 1; the readiness record lists all 4 direct dependencies. Focused depcheck, content policy, strict proof contract, source coverage/fetch, and explicit proof-layout checks pass. No mathematical prerequisite remains unresolved.

### def-qftx-character-localization

**Claim and conventions.** Defines A_T(k), character lines and their degree-two classes, the multiplicative set generated by nontrivial-character classes, Borel equivariant cohomology for a continuous left action, and module localization by fractions. It proves the character classes are nonzero linear forms and verifies the fraction relation and operations.

**Dependencies.** Direct IDs: `def-axiom-of-choice`, `def-torus-equivariant-cohomology-cartan-model`, `lem-torus-classifying-space-cohomology`, `lem-qftx-rational-torus-classifying-space-cohomology`, `prop-first-chern-class-of-tensor-dual-and-conjugate-lines`. `dependency_level` = 3.

**Decisions and checks.** `loadStep1Record`/`step1Decision` return current `ready` at hash `b51fc9d23974436ae1fca18db39c5aca38de6a05a14c4b00a4525f124ce56fc0`. Placement is A page `qftx-borel-localization` at dependency level 3; the readiness record lists all 5 direct dependencies. Focused depcheck, content policy, strict proof contract, source coverage/fetch, and explicit proof-layout checks pass. No mathematical prerequisite remains unresolved. Both verified Batch-7 item edges and the required page edge match the inspected interface.

### lem-qftx-fixed-normal-euler-class-is-unit-after-character-localization

**Claim and conventions.** On each fixed component, restriction of the equivariant normal Euler class to a point is the product of its nontrivial character classes. Künneth separates this coefficient from positive fixed-component degree; a finite good-cover bound makes the positive-degree ideal nilpotent, yielding an explicit finite inverse.

**Dependencies.** Direct IDs: `def-axiom-of-choice`, `lem-qftx-compact-torus-fixed-locus-normal-weights`, `def-qftx-character-localization`, `lem-qftx-rational-torus-classifying-space-cohomology`, `lem-qftx-compact-manifold-cohomology-positive-ideal-nilpotent`, `lem-qftx-borel-base-is-paracompact-of-cw-type`, `thm-subordinate-partitions-of-unity-exist`, `def-partition-of-unity-subordinate-to-a-cover`, `thm-cohomological-kunneth-cross-product-is-a-ring-isomorphism`, `thm-milnor-join-model-is-a-contractible-free-g-space`, `thm-thom-isomorphism-for-oriented-vector-bundles`, `def-r-oriented-vector-bundle-and-orientation-local-system`, `def-euler-class-by-zero-section-pullback-of-the-thom-class`, `thm-naturality-orientation-sign-and-whitney-product-for-euler-classes`, `def-chern-classes-from-the-projective-bundle-relation`. `dependency_level` = 4.

**Decisions and checks.** `loadStep1Record`/`step1Decision` return current `ready` at hash `7563baa8a2c742344b28b570c4ec545c77ab20fef97a8d80996f84cac80e1b71`. Placement is A page `qftx-borel-localization` at dependency level 4; the readiness record lists all 15 direct dependencies. Focused depcheck, content policy, strict proof contract, source coverage/fetch, and explicit proof-layout checks pass. No mathematical prerequisite remains unresolved.

### lem-qftx-nonfixed-locus-cohomology-is-torsion-after-localization

**Claim and conventions.** Localized Borel cohomology of the full nonfixed open locus vanishes. A compact exterior of the fixed tube has a finite orbit-tube cover; the punctured fixed tube retracts equivariantly to its compact sphere bundle; finite Mayer–Vietoris induction applies because each tube and each invariant open subset inside it is killed by a nontrivial character trivial on its isotropy.

**Dependencies.** Direct IDs: `def-axiom-of-choice`, `def-qftx-character-localization`, `lem-qftx-compact-torus-equivariant-slice-neighborhoods`, `lem-qftx-proper-closed-subgroup-has-annihilating-character`, `lem-qftx-module-localization-preserves-exactness`, `lem-qftx-singular-cohomology-homotopy-invariance`, `lem-qftx-compact-torus-fixed-locus-normal-weights`, `thm-closed-subspace-of-a-compact-space-is-compact`, `thm-long-exact-sequence-of-a-pair-in-singular-cohomology`, `thm-mayer-vietoris-sequence-in-singular-cohomology`, `thm-milnor-join-model-is-a-contractible-free-g-space`, `thm-quotient-manifold-by-a-closed-lie-subgroup`, `lem-universal-complex-flag-bundle-is-bt-n`, `lem-qftx-borel-base-is-paracompact-of-cw-type`, `lem-qftx-compact-smooth-manifold-has-finite-good-cover-nerve-model`, `lem-compact-fibre-numerable-bundle-totals-are-paracompact-hausdorff-of-cw-type`, `thm-first-chern-class-classifies-complex-line-bundles`, `prop-first-chern-class-of-tensor-dual-and-conjugate-lines`, `def-locally-trivial-fiber-bundle`, `def-principal-g-bundle-and-associated-fiber-bundle`. `dependency_level` = 4.

**Decisions and checks.** `loadStep1Record`/`step1Decision` return current `ready` at hash `95c87f470c65f869ee76f1ccac24dcb8e00222afa8e95b8b82e7680dfef5c8bd`. Placement is A page `qftx-borel-localization` at dependency level 4; the readiness record lists all 20 direct dependencies. Focused depcheck, content policy, strict proof contract, source coverage/fetch, and explicit proof-layout checks pass. No mathematical prerequisite remains unresolved.

### thm-borel-localization-for-compact-torus-actions

**Claim and conventions.** For compact finite-dimensional smooth T-manifolds and k=Q,R, restriction H_T^*(M) to H_T^*(M^T) is an isomorphism after inverting all nontrivial character classes. The proof uses nonfixed-locus vanishing and pair exactness, excision to the invariant tubular pair, the componentwise Thom–Gysin map, and the localized-unit Euler class.

**Dependencies.** Direct IDs: `def-axiom-of-choice`, `def-qftx-character-localization`, `lem-qftx-compact-torus-fixed-locus-normal-weights`, `lem-qftx-compact-torus-equivariant-slice-neighborhoods`, `lem-qftx-module-localization-preserves-exactness`, `lem-qftx-nonfixed-locus-cohomology-is-torsion-after-localization`, `lem-qftx-fixed-normal-euler-class-is-unit-after-character-localization`, `lem-qftx-borel-base-is-paracompact-of-cw-type`, `thm-subordinate-partitions-of-unity-exist`, `def-partition-of-unity-subordinate-to-a-cover`, `lem-qftx-singular-cohomology-homotopy-invariance`, `thm-long-exact-sequence-of-a-pair-in-singular-cohomology`, `thm-excision-for-singular-cohomology`, `thm-thom-isomorphism-for-oriented-vector-bundles`, `def-disk-sphere-and-thom-space-of-a-metric-vector-bundle`, `def-r-oriented-vector-bundle-and-orientation-local-system`, `def-euler-class-by-zero-section-pullback-of-the-thom-class`, `thm-naturality-orientation-sign-and-whitney-product-for-euler-classes`, `thm-milnor-join-model-is-a-contractible-free-g-space`. `dependency_level` = 5.

**Decisions and checks.** `loadStep1Record`/`step1Decision` return current `ready` at hash `e4c6f354ede1af5e73bcd5e9f54488a45991cf063a173eb6c8577e0bcd05f9f9`. Placement is A page `qftx-borel-localization` at dependency level 5; the readiness record lists all 19 direct dependencies. Focused depcheck, content policy, strict proof contract, source coverage/fetch, and explicit proof-layout checks pass. No mathematical prerequisite remains unresolved.

### `ex-qftx-borel-localization-rotation-on-projective-line`

**Claim and conventions.** Let \(T=\mathbb R/\mathbb Z\) act on \(M=\mathbb{CP}^1\) by \(t\cdot[z_0:z_1]=[z_0:e^{2\pi it}z_1]\). For \(k\in\{\mathbb Q,\mathbb R\}\), use the product Milnor Borel model and let \(u=c_1(L_\chi)\in H^2(BT;k)\) for \(\chi(t)=e^{2\pi it}\). The fixed set is \(F=\{p_+,p_-\}\), where \(p_+=[1:0]\) and \(p_-=[0:1]\); the tangent weights are \(+1\) at \(p_+\) and \(-1\) at \(p_-\). If \(\mathscr S_T(k)\) is generated by nontrivial character classes and \(A_T(k)=H^*(BT;k)\), then restriction identifies
\[
\mathscr S_T(k)^{-1}H_T^*(\mathbb{CP}^1;k)\cong
\mathscr S_T(k)^{-1}A_T(k)\oplus\mathscr S_T(k)^{-1}A_T(k),
\]
with the two summands given by evaluation at \(p_+\) and \(p_-\).

**Dependencies.** Direct IDs: `def-qftx-character-localization`, `lem-qftx-compact-torus-fixed-locus-normal-weights`, `thm-borel-localization-for-compact-torus-actions`. `dependency_level` = 6.

**Decisions and checks.** Current Step 1 record is `ready` at hash `439bf584fa3ac6d3582c15732631a10fbf44224c004051782da7377bcc2071da`; strict contract and explicit proof-layout checks pass.
### `ex-qftx-borel-localization-free-circle-orbit`

**Claim and conventions.** Let \(T=M=\mathbb R/\mathbb Z\) act on \(M\) by left translation \(t\cdot[x]=[t+x]\), and use the product Milnor Borel model with \(k\in\{\mathbb Q,\mathbb R\}\). This action has no fixed point. The map \([e,x]\mapsto e\cdot x\) identifies \(ET\times_TT\) with \(ET\), so \(H_T^*(T;k)\cong k\) in degree zero and is zero in positive degrees. Every positive-degree class in \(A_T(k)\) acts as zero, so localization at the nontrivial character classes gives \(\mathscr S_T(k)^{-1}H_T^*(T;k)=0\), agreeing with restriction to the empty fixed set.

**Dependencies.** Direct IDs: `def-qftx-character-localization`, `thm-borel-localization-for-compact-torus-actions`, `thm-milnor-join-model-is-a-contractible-free-g-space`, `lem-qftx-singular-cohomology-homotopy-invariance`. `dependency_level` = 6.

**Decisions and checks.** Current Step 1 record is `ready` at hash `dd01c81b404ce17a0f7d09e7b76069ef1f2347642818c22cf6e7d1430e3042f9`; strict contract and explicit proof-layout checks pass.
### `ex-qftx-borel-localization-positive-dimensional-fixed-components`

**Claim and conventions.** Let \(T=\mathbb R/\mathbb Z\) act on \(M=\mathbb{CP}^1\times\mathbb{CP}^1\) by \(t\cdot([z_0:z_1],q)=([z_0:e^{2\pi it}z_1],q)\), and let \(k\in\{\mathbb Q,\mathbb R\}\). The fixed set is the disjoint union \(F=(\{p_+\}\times\mathbb{CP}^1)\amalg(\{p_-\}\times\mathbb{CP}^1)\), with \(p_+=[1:0]\) and \(p_-=[0:1]\); the normal weights are \(+1\) and \(-1\), respectively. Let \(u\in H^2(BT;k)\) be the weight-one character class and \(b\in H^2(\mathbb{CP}^1;k)\) the generator with \(b^2=0\). Then localized restriction identifies
\[
\mathscr S_T(k)^{-1}H_T^*(M;k)\cong
\bigl(\mathscr S_T(k)^{-1}A_T(k)\otimes_k k[b]/(b^2)\bigr)\oplus
\bigl(\mathscr S_T(k)^{-1}A_T(k)\otimes_k k[b]/(b^2)\bigr),
\]
where the two summands are the Borel cohomology of the two positive-dimensional fixed components.

**Dependencies.** Direct IDs: `def-qftx-character-localization`, `lem-qftx-rational-torus-classifying-space-cohomology`, `thm-borel-localization-for-compact-torus-actions`, `thm-cohomological-kunneth-cross-product-is-a-ring-isomorphism`, `lem-cohomology-ring-of-infinite-complex-projective-space`, `thm-topological-universal-coefficient-short-exact-sequence-for-cohomology`, `lem-torus-classifying-space-cohomology`. `dependency_level` = 6.

**Decisions and checks.** `loadStep1Record`/`step1Decision` return current `ready` at hash `e383b3523a8ef8589d274d4cb77339bf19e74724796321648962e7ddb6161f1f`. Placement is B examples page `qftx-borel-localization-examples` at dependency level 6; the readiness record lists all 7 direct dependencies. Focused depcheck, content policy, strict proof contract, source coverage/fetch, and explicit proof-layout checks pass. No mathematical prerequisite remains unresolved.

## Final validation and remaining run-level work

**Assigned scope.** The A page has 13 items and the B page has 3 examples, both below the 100-item cap. Both page files are YAML frontmatter only with empty bodies and no summaries. Their A/B inventories and the 16-item batch manifest agree. Batch 8's page dependency level is 1, requiring batch 7. Item levels are: level 0 (fixed-locus weights, annihilating character, localization exactness, rational BT coefficients, homotopy invariance, finite good-cover nerve); level 1 (slice neighborhoods, positive-ideal nilpotence, Borel-base paracompactness); level 3 (character localization); level 4 (fixed-normal Euler unit, nonfixed-locus torsion); level 5 (Borel localization theorem); level 6 (all three examples).

**Passing scoped checks.** `depcheck` checks all 16 items and both pages with 0 errors/warnings. `content-policy --manifest-only --authored` checks 16 items with 0 errors/warnings. `manifest-deps` checks 16 manifest entries with 0 errors. Strict proof-contract validation checks 16/16 items, 128 fact citations, and 64 numbered steps with 0 errors/warnings. `coverage-checklist` checks one A page and 14 harvested results with 0 errors/warnings. `source-fetch-check` verifies 5/5 source stamps. The explicit statement/reference audit finds 0 inline links in all 16 complete statements. `proof-layout` checks 16 items and 64 steps with 0 defects. All 16 Batch-8 `step1Decision` checks are hash-current `ready`. The 3 cross-batch rows are `verified`.

The strict contract validator used a temporary `/tmp` item-symlink root so it could read the exact local and imported supplier sources; no mathematical supplier was edited. The `source_resolution` entry preserves the failed Hatcher Cornell VBKT route, search, active mirror, and per-item alternative argument/dependencies. No source was dropped and no mathematical coverage was waived.

**Run-wide checks left to the owner/engine.** The run-wide `checkStep1` currently covers 214 items: 143 are ready and 71 remain open; 36 pages still have empty inventories. All 16 assigned items are ready. The global item-level check is blocked by those empty scaffolds and also reports eight dependency-level mismatches outside this batch: `post-qftx-n2-vector-hypermultiplet-model` (3→6), `post-qftx-n4-super-yang-mills-model` (4→7), `ex-qftx-n2-hypermultiplet-gauge-invariants` (4→7), `ex-qftx-n2-quadratic-prepotential` (4→7), `ex-qftx-n4-adjoint-hyper-decomposition` (5→8), `ex-qftx-n4-su2-noncommuting-scalar-potential` (5→8), `post-qftx-rigid-supersymmetric-background` (3→8), and `ex-qftx-susy-round-s4-localization-data` (4→9). The populated-inventory audit confirms every Batch-8 level matches and finds no cycle.

`proof-contract-coverage` and `page-layout check` stop at the empty unassigned page `aqft-smeft-heft`. The shared `batch-dependency-levels.json` has a stale input hash after manifest changes; its recorded batch-8 row and current recomputation both give level 1 with sole prerequisite batch 7, so the shared scheduling file was left untouched. `page_layout: compact-v1` remains absent from these two page files for the engine's post-authoring page-layout stage; the pages themselves are frontmatter-only.

No unresolved mathematical prerequisite, scope/design conflict, or local proof blocker remains. The next run-level action is for the owner/engine to complete the other empty scaffolds, reconcile the out-of-scope level mismatches, refresh shared scheduling evidence, then run page-layout preparation and the full run-wide gates.


## Private policy citation source-bookkeeping addendum (Root application 2026-10-23T23:41:35.466Z; receipt research/advanced-qft-supersymmetry-build-2026-10-23-owner-resolution/private-preparation/root-combined25-application-v1/root-decision.json)

New targeted reading, separate from the historical Hatcher pp220–222 record: the complete Homotopy Invariance paragraph in §3.1 on printed201 (chapterPDF17) was inspected; the actual fetched76-page chapter is byte-identical to the previously native-stamped chapter URL. The old fetch stamp and pp220–222 reading are retained without restamping. This comparison exposed the local K-index/zero-degree proof error, for which a separate typed semantic repair is staged for Root review, not certified by this source row. URL:https://pi.math.cornell.edu/~hatcher/AT/ATch3.pdf.

Also newly inspected: Hatcher §4.G, complete Propositions4G.1–4G.2 and Corollary4G.3 with proofs, printed458–459 (chapterPDF38–39), from the existing cached98-page chapter. No wholechapter reading is claimed. The good-cover nerve corollary supplies bibliographic context; the stronger smooth geodesic-convexity/choice input remains the actual local mathematical supplier. The general realization theorems are not new logical premises. The normative fetch helper actually retrieved the exact98-page PDF at2026-10-23T23:25:29.715Z,1413396bytes,SHA256prefixf83eb722fd8032f8, in a private candidate only. URL:https://pi.math.cornell.edu/~Hatcher/AT/ATch4.4.pdf.
