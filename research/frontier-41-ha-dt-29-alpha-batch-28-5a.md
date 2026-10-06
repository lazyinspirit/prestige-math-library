# Step 5a adjudication — batch-28

Run: `frontier-41-ha-dt-29`; scope: batch 28 only. Review is local mathematical adjudication, not a judgment or certification. Engine owns hashes and gates. Historical pre/post fingerprints and baseline manifest claims are retained; historical reader findings are distinguished from independently checked current suppliers.

Sources opened: EGNO, https://math.mit.edu/~etingof/egnobookfinal.pdf, §1.11 printed pp.15–16 (definition and full proof sketch); FSS v3, https://arxiv.org/pdf/1612.04561v3, relevant sections recorded below. FSS assumes algebraic closure globally; arbitrary-field conclusions must follow from the written local algebra arguments.

## Dependency-ordered decisions

### `touched:28:lem-finite-vector-space-copowers-in-a-linear-abelian-category` — amended_repair

Checked Statement, Facts F1–F5 and all six steps against the actual dimension, biproduct/matrix, covariant Yoneda evaluation, representability uniqueness and enriched tensor definitions. Basis evaluation is k-linear and natural; basis-change comparisons are unique and invertible; representable transformations reverse direction correctly. At n=0 or Y=0 both hom-objects are zero, and n=1 recovers Y. All-vector-space enrichment is required without finite Hom; assembling a functor uses supplied universal data. Accepted the reader's mathematical repairs; amended the stale manifest statement and proof route to match this qualification. Dependencies outside batch are read-only; current consumers must use the supplied-family convention, to be checked in their ordered reviews. No item edit. Pre/post raw fingerprints differ; current item matches post.

Defects: frontier-41-ha-dt-29-5a-b28-01, frontier-41-ha-dt-29-5a-b28-02, frontier-41-ha-dt-29-5a-b28-03. Risk review complete.

### `touched:28:def-deligne-product-of-finite-linear-categories` — amended_repair

Checked the single Definition and all Remarks against the actual equivalence, functor category, size, finite category, linearity and right exactness definitions and EGNO §1.11 pp.15–16. The quantifier includes arbitrary linear abelian targets and all transformations. Small representative sources avoid a large-source functor category; copowers occur in abelian targets, where biproducts exist. No existence or simultaneous choice is asserted by this definition; the forward existence supplier remains justified_by. Empty/zero abelian categories cause no new assertion. Accepted the reader qualification and reconciled the stale manifest definition. No item edit.

Defects: frontier-41-ha-dt-29-5a-b28-04. Risk review complete.

### `touched:28:lem-bilinear-right-exact-functors-are-determined-by-the-pair-of-regular-modules` — amended_repair

Reviewed all eight steps, F1–F7 and actual algebra/tensor, free module, cokernel, matrix and transformation suppliers. For left-free coordinates phi(x)_i=sum x_j p_ij, composition entries p_ij q_li reverse under the right-action anti-homomorphism, giving K(psi phi)=K(psi)K(phi). The lifts satisfy g delta=delta'v, so descent and independence follow by annihilating images. Two successive quotients kill precisely the two relations presenting X tensor Y. Transformations extend uniquely from an action-compatible map W to W'. Internal module objects in arbitrary E avoid applying element formulas to nonexistent underlying sets. AC selects presentations and cokernels on a small source; collection bounds witnesses in a definable large target; finite choices suffice only for individual lifts. Zero presentations/arguments and k as second algebra obey the same formulas. Reader contract corrections remove W=H(0,0) and the invalid identity-identity presentation. Current item matches post; reconciled manifest statements, deps, sources and full proof route. Consumer existence theorem uses this exact internal construction and AC.

Defects: frontier-41-ha-dt-29-5a-b28-05, frontier-41-ha-dt-29-5a-b28-06, frontier-41-ha-dt-29-5a-b28-07, frontier-41-ha-dt-29-5a-b28-08. Risk review complete.

### `reader:28:4` — confirmed_fatal

Historical statement has unitors A tensor_A F and F tensor_B B for F:(B,A), which need not be defined; observed raw pre fingerprint is preserved from reader routing. Independently reviewed current Statement and six proof steps with every actual dependency, producer batch-26 contract and manifest. Current units are B tensor_B F and F tensor_A A. Pentagon rebracketings agree on fourfold elementary tensors; triangle is exactly xb tensor y=x tensor by. Tensor generators and distributivity cover arbitrary sums; zero modules and arbitrary noncommutative rings require no choice. The producer's existing closed row f41-b26-touched-unitors records this same defect; reference it without duplicating the defect. Producer carrier is read-only. Consumer's current units are checked at its later ordered review.

Defects: f41-b26-touched-unitors. Risk review recorded within routed scope.

### `reader:28:1` — confirmed_fatal

Full review of current module-model Statement, F1–F10, Steps 1.1–5.1, producer contract and manifest: P is a finite projective generator; the End(P)^op action is precomposition; maps on P powers realize free-module components; faithful Hom descends through cokernels and proves fullness; finite presentations exhibit each preimage separately. The exact split-equivalence supplier requires supplied simultaneous objects and isomorphisms. Current Step 4.1 now assumes this splitting and defines morphisms uniquely. Both equivalence-transfer directions preserve finite length, simple classes, projectivity and image-defined joins, hence superfluity. Zero category/zero algebra and empty presentations obey these formulas. The historical unconditional choice-free equivalence defect is true on the observed pre bytes and closed in the current conditional theorem; consumer uses AC and small-source collection to supply the splitting.

Defects: f41-b27-model-choice. Risk review recorded within routed scope.

### `reader:28:2` — confirmed_nonfatal

The historical Step 2.2 lifting square mismatched targets f:E(Q) to Z and q:Y onto E(Q). Current Step 2.2 uses q:Y onto Z, transports the square by E′, identifies E′E(Q) with Q, and transports the lift back by counit naturality. All current proof, contract and manifest clauses were independently reviewed with the module-model obligation above. This is a readily repaired proof typo with unchanged hypotheses and claim, hence nonfatal under this dispatch’s competent-reader rule. Reuse the producer closed row without double-counting; its fatal severity conflicts with this verdict and requires owner ledger reconciliation. No current proof defect remains.

Defects: f41-b27-model-lift-target. Risk review recorded within routed scope.

### `reader:28:3` — confirmed_nonfatal

Reviewed current left-exact supplier, all eight steps, contract and manifest independently. F3 now inputs an (A,A)-bimodule, so F(A*) and every F(t_a) are defined. The dualized functor Fd is right exact; finite Eilenberg-Watts yields K=M* with left A/right B actions. In Step 3.2, right Aop on K and left Aop on X* balance lambda(phi(au))=(lambda a)(phi(u)). Right B acts before dualization and becomes the correct left B action on Hom. Inverse uses X**=X. Yoneda at M* and naturality at right B multiplication give the bimodule transformation correspondence; evaluation at A* is an explicit quasi-inverse with inverse m maps to u maps to (a maps to u(ma)). Tensor-Hom adjunction proves the Hom functors are left exact; zeros and all finite dimensions work over any field. Historical proof typing errors were local corrections to already correct statement actions, hence nonfatal. Reuse the closed producer tensor-typing row; its fatal severity is a recorded owner reconciliation issue, and the companion F3 correction remains covered by producer row f41-b27-lex-action-domain.

Defects: f41-b27-lex-tensor-typing. Risk review recorded within routed scope.

### `touched:28:thm-finite-deligne-products-exist-by-tensor-product-algebras` — amended_repair

Checked all five proof steps and F1–F7, the completed determination lemma, actual module-model supplier and split-equivalence criterion, tensor actions/universality and finite-dimension formula. External tensor preserves finite coproducts and cokernels by its quotient universal property. Restriction is fully faithful via evaluation on (R,S); taking second algebra k gives the one-variable comparison. For arbitrary linear abelian E, E(barH(Z),E') identifies with Hom_T(Z,E(W,E')), with t acting by precomposition with W's right action; the left-exact Hom sequence proves preservation of cokernels. AC and collection supply simultaneous presentations/cokernels and the module-model splitting on small sources. Fixed undefined F(delta) to K(delta), explicitly naming the finite-free functor from the determination construction, and refreshed the contract derivation. Universal bifunctor extensions and full faithfulness give both composite-to-identity isomorphisms for uniqueness. Zero algebras, modules and targets give zero constructions; no algebraic closure is needed. Reconciled stale manifest with the current AC/data statement and full proof. The published projective-cover gap is a short finite-free lifting argument, adjudicated separately as reader:28:5; it does not force AC beyond the assumption already present here.

Defects: frontier-41-ha-dt-29-5a-b28-09, frontier-41-ha-dt-29-5a-b28-10, frontier-41-ha-dt-29-5a-b28-11. Risk review complete.

### `touched:28:lem-opposite-deligne-product-identifies-with-finite-bimodules` — amended_repair

Reviewed all six steps and exact suppliers: finite duality identifies Aop with Rop-mod, not the opposite category of arbitrary modules by unsupported identification. Rop tensor S modules are finite (S,R)-bimodules with agreeing k-actions; symmetry gives b tensor a*. Finite vector-space injections split, so external tensor is exact. Duality on (Rop tensor S)-mod and (Rop tensor S)op=R tensor Sop identify opposite products. Opposite functors target Eop, and reversing transformations on both sides gives the Lex universal property with target E. Supplied models and small sources are explicit; existence inherits AC and comparison needs no further choices. Empty/zero models and tensor factors work. Current proof and Statement are sound; reader repairs retained and stale manifest reconciled. Every owned consumer must use algebra-model bimodules and supplied equivalences, checked below.

Defects: frontier-41-ha-dt-29-5a-b28-12, frontier-41-ha-dt-29-5a-b28-13, frontier-41-ha-dt-29-5a-b28-14. Risk review complete.

### `touched:28:ex-deligne-product-of-finite-vector-space-categories` — amended_repair

Checked all three Verification steps and F1–F3. Multiplication k tensor_k k to k and c maps to c tensor 1 are inverse algebra maps, and external tensor becomes ordinary vector tensor. The general existence theorem supplies equivalence on all transformations, including arbitrary linear abelian targets. Reader edits here were source-locator metadata, but this actual use of the now AC-dependent existence supplier omitted its hypothesis. Added AC to Statement, Example, Given and deps; updated the contract choice boundary and manifest. This preserves the example's substantive conclusion. Zero-dimensional inputs give zero and k is the tensor unit. Searched every item reference consumer: none; only its companion page lists it, whose prose must inherit the convention. No wider consumer repair is needed.

Defects: frontier-41-ha-dt-29-5a-b28-15. Risk review complete.

### `touched:28:thm-categorical-eilenberg-watts-equivalences-for-finite-linear-categories` — amended_repair

Checked four steps, F1–F6, supplied small module models, finite module Rex and Lex equivalences and duality, and FSS Definition 3.1/Theorem 3.2 pp.13–15. The local algebra proof works over arbitrary fields rather than importing the paper's algebraic-closure convention. The right external comparison first identifies Hom_R(X,a) with (a* tensor_R X)*; the inverse functional map lands in a via finite double duality and is R-linear by balance. Dualizing then yields a* tensor_R X=Hom_R(X,a)*, so the claimed domain and inverse are correct. The left external comparison is finite currying; left S actions correspond to precomposition on b*. Transformations are classified by actual bimodule maps through the checked producer theorems. Zero factors/zero categories give zero; no extra choices beyond supplied models and AC-dependent product data. Reader repair is retained; reconciled manifest claim and strategy. The subsequent (co)end supplier proves the advertised inverses without a circular prerequisite.

Defects: frontier-41-ha-dt-29-5a-b28-16, frontier-41-ha-dt-29-5a-b28-17. Risk review complete.

### `touched:28:cex-a-deligne-kernel-need-not-be-one-external-tensor-factor` — amended_repair

Checked Statement refuted, F1–F3 and all three steps against the actual left/right module, dual, simple and tensor definitions and completed opposite-product correspondence. E11,E22,E12 realize the algebra over any field. u squared is zero, so its action on a one-dimensional module is scalar c with c squared zero, hence c=0. A hypothetical external factor has positive finite dimensions multiplying to 3, so one dimension is 1; either left u or right u vanishes there, while each is nonzero on the regular bimodule. Zero factors have dimension zero and cannot be witnesses. Both a,b must be left modules, with right R acting on a*. The repaired F3 claims only the external-object correspondence. No assertion that all kernels factor remains. Retained reader repairs and reconciled manifest typing, nilpotence proof and source locators.

Defects: frontier-41-ha-dt-29-5a-b28-18, frontier-41-ha-dt-29-5a-b28-19, frontier-41-ha-dt-29-5a-b28-20. Risk review complete.

### `touched:28:lem-finite-eilenberg-watts-kernel-end-and-coend-exist-with-explicit-universal-maps` — amended_repair

Read all four steps, F1–F5 and exact dinaturality, wedge/cowedge, end/coend, finite duality, tensor actions and induced (co)end-map suppliers. The off-diagonal diagram is Hom_k(a,G(b)). Coend maps rho_a(f tensor lambda)=lambda f are S/R-linear and satisfy the correctly typed equation at v:a to a'; every cowedge factors via t_U(1_U tensor mu), with left S-linearity proved by dinaturality at R_s. End maps omega_a(m)(x)=m tensor x factor every wedge by h(z)=t_R(z)(1); regular-module right multiplications establish h(zr)=h(z)r. Uniqueness uses rho_U(1 tensor mu)=mu and evaluation at 1 respectively. General natural transformations need not be invertible; induced maps, identities and composition follow from the universal equations. Model equivalences extend the result to all Lex/Rex functors. Zero modules and the zero algebra give zero vertices and the same equations. FSS Proposition 2.8/Corollary 2.9 pp.11–12 supplies comparison; its coend proof is only described as analogous, while this local proof supplies the full factorization. No unrestricted completeness assumed. Reader repairs retained; manifest reconciled.

Defects: frontier-41-ha-dt-29-5a-b28-21, frontier-41-ha-dt-29-5a-b28-22, frontier-41-ha-dt-29-5a-b28-23, frontier-41-ha-dt-29-5a-b28-24. Risk review complete.

### `touched:28:cor-kernel-composition-and-transformations-use-balanced-tensor-products` — amended_repair

Reviewed three steps and F1–F4 with actual tensor-transformation, associator/unit and corrected producer coherence statements. For M:(B,A) and N:(C,B), the composite is (N tensor_B M) tensor_A X; the middle balance preserves commuting outer C/A actions and finite dimensionality. Transformations of composites are all maps of composite kernels, not just decomposable pairs. Units for N are C tensor_C N and N tensor_B B, and for M are B tensor_B M and M tensor_A A. Zero functors give zero kernels; identity gives the regular bimodule by the kernel end. Both pentagon and triangle reduce to the already independently checked current coherence proof. Supplied models/kernels and inherited AC are explicit in the Statement; composition itself makes no choices. Retained reader unit-ring repair, checked the read-only producer correction's actual consumer use, and reconciled manifest.

Defects: frontier-41-ha-dt-29-5a-b28-25. Risk review complete.

### `touched:28:def-left-and-right-nakayama-functors-by-finite-kernel-calculus` — reviewed_no_defect

Reviewed Statement, Definition and both Remarks against actual functor/transformation/exactness definitions and completed triangle/kernel suppliers. Psi_l:Lex to kernels followed by Phi_r:kernels to Rex is well typed; the reverse composite goes Rex to Lex. Identity is both exact types, so evaluating each composite defines an endofunctor. They are different functor-category objects sharing the identity formula. Model formulas and adjunction are assigned to justified_by, not imported as an unproved extra definition assertion; no new universal-object family is selected. Supplied triangle/model/product conventions carry inherited data and choice; zero category yields zero identity/Nakayama functors. FSS Definition 3.14 pp.22 and equations (3.50)–(3.51) match this typing. Reader changed only bibliographic locators here; metadata synchronized in manifest. No mathematical defect, defect IDs empty; current carrier's proof field remains not-applicable.

Defects: none (metadata only). Risk review complete.

### `touched:28:lem-nakayama-kernels-give-well-defined-adjoint-functors` — amended_repair

Reviewed all seven steps and F1–F9 with completed kernel/triangle suppliers, exact adjoint-preserves-(co)end statement and tensor-Hom adjunction. Identity's Lex kernel is A* since Hom_A(A,-)=identity, while Rex kernel is A by tensor units. For pointwise existence, Rex evaluation M maps to M tensor_A X is a left adjoint with finite bimodule right adjoint Hom_k(X,Y); Lex evaluation M maps to Hom_Aop(X*,M) is a right adjoint with finite bimodule left adjoint Y tensor_k X*. The currying maps respect both outer A actions and finite-dimensionality; evaluating the preserved coend/end therefore gives universal objects in A itself, closing the reader-identified gap. Diagrams yield Hom(X,a)* tensor a and Hom(a,X) tensor a; uniqueness of universal maps makes the model comparisons natural and canonical. Tensor-Hom with M=A* gives unit x maps to (lambda maps to lambda tensor x), counit lambda tensor phi maps to phi(lambda), and both triangles. Zero X, zero model and zero kernels obey the same maps. No unrestricted completeness or extra choice. FSS §§3.1,3.5 formulas and pp.22–23 match; local adjunction closes the paper's cited module formula without importing another source's proof. Retained reader repair and reconciled manifest's full pointwise preservation route.

Defects: frontier-41-ha-dt-29-5a-b28-26. Risk review complete.

### `touched:28:prop-left-to-right-exact-equivalence-sends-identity-to-nakayama` — amended_repair

Reviewed three steps and F1–F4 against completed triangle/kernel/Nakayama suppliers and actual natural-isomorphism typing. Whiskering the two quasi-inverse kernel comparisons gives Gamma_lr Gamma_rl and Gamma_rl Gamma_lr naturally isomorphic to the appropriate identities. Evaluating at identity gives Nr and Nl, whose formulas are proved by the previous lemma. The comparison with unchanged endofunctors must have a common domain: both Gamma_rl restricted to Exact and inclusion Exact to Rex do. A component at identity would be a natural isomorphism Nr to identity; its failure is sufficient, and no converse is asserted. Zero category and symmetric models do not trigger this obstruction; the triangular witness later supplies a positive failure. Supplied model and AC-dependent equivalence conventions are explicit; no additional choices. FSS Definition 3.14 pp.22 confirms the identity images. Retained reader's domain repair and reconciled manifest Statement and actual proof route; direct statement consumers in scope use exactly this sufficient obstruction.

Defects: frontier-41-ha-dt-29-5a-b28-27. Risk review complete.

### `touched:28:prop-projective-nakayama-pairing-and-symmetric-algebra-specialization` — amended_repair

Reviewed four steps and F1–F7 against actual projective lifting, finite dual-basis evaluation, tensor-Hom and finite bimodule duality/unit suppliers. Hom_A(P,A) is a right A-module by multiplying values on the right; dual has the left action. gamma(lambda tensor p)(f)=lambda(f(p)) is balanced because f(ap)=af(p), and left A-linearity uses lambda(f(p)a). Its transpose followed by currying/double duality is identity on Hom_A(P,A), so gamma is an isomorphism in finite dimensions. Projectivity plus finite generation gives Hom_A(P,X)=Hom_A(P,A) tensor_A X; dual currying and Hom(X,gamma inverse) give the pairing, natural in P and X. The supplied bimodule isomorphism A* to A yields both Nr and Nl naturally identity; no general symmetry assertion. P=0, X=0 and A=k give the expected zero/evaluation cases; no extra choices. Reader fixes right-action typing and composition direction retained. Alpha removed the remaining meaningless intermediate expression ((a lambda) tensor p)(f) from Step 1.1, leaving gamma's evaluation formula; refreshed contract and manifest. Statement unchanged.

Defects: frontier-41-ha-dt-29-5a-b28-28, frontier-41-ha-dt-29-5a-b28-29, frontier-41-ha-dt-29-5a-b28-30. Risk review complete.

### `touched:28:cex-left-to-right-exact-equivalence-need-not-preserve-the-identity` — reviewed_no_defect

Checked all five Counterexample steps and F1–F4 against module, projectivity, field, dimension, tensor and actual Nakayama/identity-image suppliers. The matrix realization is valid in every characteristic. A0e1 is span e1 of dimension 1; projectivity has an explicit choice-free lift from rank-one free A0 followed by restriction to its summand. On the dual, right multiplication by e1 precomposes x maps to e1x, whose image span(e1,u) has dimension 2; extension by zero on span(e2) makes the restriction surjective. Multiplication A0* tensor_A0 A0e1 to A0*e1 has inverse nu maps to nu tensor e1, checked by balance. Thus Nr(A0e1) has dimension 2, ruling out a natural isomorphism Nr to identity. This refutes the claimed preservation over arbitrary fields and requires neither symmetry nor algebraic closure. Zero modules do not replace the specified positive witness. All equivalence data are inherited as supplied from the prerequisites; tensor computations add no choice. Reader item edits were bibliographic locators only; manifest metadata synchronized; no mathematical defect found.

Defects: none (metadata only). Risk review complete.

### `touched:28:ex-kernel-end-and-coend-distinguish-regular-and-coregular-bimodules` — amended_repair

Reviewed both identical claim sections, six Verification steps and F1–F3 with actual kernel, duality, tensor, Nakayama and identity-image prerequisites. The identity's Rex kernel is A, its Lex kernel A*, so the same intrinsic diagonal diagram has end A and coend A*. This does not assert inequality for every algebra: for A=k or any supplied symmetric algebra they agree, and the zero model also gives coincident zero kernels. The triangular witness has A0e1 dimension 1 and A0*e1 dimension 2; an A0-bimodule isomorphism A0* to A0 would induce a tensor isomorphism contradicting these dimensions. Switching Phi between the Lex/Rex kernels gives Nr and Nl as stated; their original equivalences recover identity on their matching side. Retained reader's essential qualification and synchronized stale manifest statement/full route. Searched owned usage: example has no item consumers; companion page's general claim already says the identities can differ.

Defects: frontier-41-ha-dt-29-5a-b28-31. Risk review complete.

### `page:28:deligne-products-and-categorical-eilenberg-watts` — amended_repair

Reviewed the complete A-page prose, frontmatter order and manifest order anchors against all twelve completed A-item reviews. Reader added correct chosen-small-representative, algebra-model and AC conventions. Alpha qualified the copower functoriality sentence by supplied universal representing data, and replaced the universal-sounding identity distinction with 'Nakayama, which need not be isomorphic to identity', preserving the symmetric specialization. Page order matches all routed A anchors, with suppliers before consumers except definitions' justified_by backreferences. No items/pages were added or removed. Companion B-page was read: its tensor-unit, triangular and end/coend summaries match the four current examples, interpreted under the companion existence conventions; no B-page prose repair is necessary. Page edits are mathematical qualification repairs and manifest item records were synchronized itemwise.

Defects: frontier-41-ha-dt-29-5a-b28-32, frontier-41-ha-dt-29-5a-b28-33. Risk review recorded within routed scope.

### `reader:28:5` — confirmed_nonfatal

Independently read published cover theorem Statement, L1 and all five proof steps, and the full cited projective-module characterization. L1 is the true direction projective implies summand of free; Step 1.1 uses its converse, which the cited theorem supplies for arbitrary free modules only under AC. Here the ambient module is finite free, so the written conclusion is sound and the missing justification is immediate: for q:E onto Z and f:P to Z with inclusion i:P to A^r and projection p:A^r to P, choose lifts y_j of (fp)(e_j), define l(sum a_j e_j)=sum a_j y_j, and restrict li; then qli=fpi=f. Only finitely many lifts are chosen. The minimal-dimension summand argument, finite Fitting decomposition, superfluity and uniqueness proof then all work without AC, including M=0 and zero algebra. Thus reclassify the alleged fatal missing hypothesis as a nonfatal proof citation-use gap under the dispatch's immediate-gap rule; do not claim the published citation is accurate in its used direction. Finding is recorded, not repaired: published carrier is read-only and its A-P source-maintenance strategy is to insert this finite-free lift proof or cite an exact finite-free lemma. Consumer existence theorem already assumes AC, so even the stronger cited converse is available there. No substantial unmet prerequisite or owner choice about the mathematical claim remains. Webb source URL was attempted and timed out; no claim of reading it. Exact local source evidence and direct derivation suffice for this bounded finding.

Defects: frontier-41-ha-dt-29-5a-b28-34. Risk review recorded within routed scope.

## Carrier comparisons and historical limits

Compared immutable batch-28 pre/post raw item fingerprints with current bytes. These inventories are fingerprints, not full historical preimages. Historical repaired arguments are assessed from the reader observations, retained baseline manifest claims and the independently reviewed current proofs; no claim is made that every historical byte was recovered. Reader supplier findings 1–4 preserve their exact pre observation basis, source raw hash, producer batch, consumer ID, dependency path, producer pre snapshot and split-time producer carrier unchanged in the decisions. They are confirmed historical findings, not counterexamples to corrected current bytes. No unbound observation or owner-authorized current_content_review was used.

- `lem-finite-vector-space-copowers-in-a-linear-abelian-category`: pre/post differ; current matches reader post. Current raw `e2a66d9d572f42551e32b2729c8b40418cad94d765c7d412065eecd93dae27a0`.
- `def-deligne-product-of-finite-linear-categories`: pre/post differ; current matches reader post. Current raw `88e1a5b1871cbedec4cb24b7a7aa418d22d115a0fc99130b9c83db1af74bc1d9`.
- `lem-bilinear-right-exact-functors-are-determined-by-the-pair-of-regular-modules`: pre/post differ; current matches reader post. Current raw `e00eeb3a505c0136f09cab84b776688da2ff6e927a91290a348c12dc63e4d5c7`.
- `thm-finite-deligne-products-exist-by-tensor-product-algebras`: pre/post differ; current differs from reader post (the documented Alpha edit). Current raw `8af2985a1cc56489de903ed8188daad68db3ffba66f8f47fb94aebf5d3d5bc32`.
- `lem-opposite-deligne-product-identifies-with-finite-bimodules`: pre/post differ; current matches reader post. Current raw `569cbbb86ec0aeee483d4b5b6f761ae4b584ad97c7420d443d66040c39035319`.
- `thm-categorical-eilenberg-watts-equivalences-for-finite-linear-categories`: pre/post differ; current matches reader post. Current raw `a3e6b67801bd03ae68693066a7a88dd7d7acd4f03a53320e48439bfb1bae2941`.
- `lem-finite-eilenberg-watts-kernel-end-and-coend-exist-with-explicit-universal-maps`: pre/post differ; current matches reader post. Current raw `b342875a92d000807ca4484df7fe27683dd07c6721fe973987f99f1dbb8322bc`.
- `cor-kernel-composition-and-transformations-use-balanced-tensor-products`: pre/post differ; current matches reader post. Current raw `097d727348d9b3fe3dcf8939747c566c5f9af69f80fbc1a7b11756bb222fc7c5`.
- `def-left-and-right-nakayama-functors-by-finite-kernel-calculus`: pre/post differ; current matches reader post. Current raw `cd938e1aaad929f6ecede31c75cec3d7db1a8bc3eef3df6f4b0568903c1d887a`.
- `lem-nakayama-kernels-give-well-defined-adjoint-functors`: pre/post differ; current matches reader post. Current raw `73d1a08a40f66a99402ee5197e2e69a58a8e2e883b9763439e3a80b4877f69be`.
- `prop-left-to-right-exact-equivalence-sends-identity-to-nakayama`: pre/post differ; current matches reader post. Current raw `7bb194e8c0350ad09986e44b49e69e7665822ffa415f56c32f019c8063023d84`.
- `prop-projective-nakayama-pairing-and-symmetric-algebra-specialization`: pre/post differ; current differs from reader post (the documented Alpha edit). Current raw `374104b399de779810a8f92292bee5c7035d4c5ba8ad882a3769457586d23b3e`.
- `ex-deligne-product-of-finite-vector-space-categories`: pre/post differ; current differs from reader post (the documented Alpha edit). Current raw `54380467c1a6edf14ddba89ca9bbe77e31117af87d7f1cd300c18c6931c19e89`.
- `cex-left-to-right-exact-equivalence-need-not-preserve-the-identity`: pre/post differ; current matches reader post. Current raw `fcf75e94f8fadbb37c566da65eb09847c5413a2d14d9136556219238cd768955`.
- `ex-kernel-end-and-coend-distinguish-regular-and-coregular-bimodules`: pre/post differ; current matches reader post. Current raw `89d001ab73fcd15456a6b64f93f83d5957fa93b8af4bf0eba69fb9d2b3125b8f`.
- `cex-a-deligne-kernel-need-not-be-one-external-tensor-factor`: pre/post differ; current matches reader post. Current raw `7a44dfb215689a7d81ba65ac279ea8b7e8ea3cd005d4112b02490d3ed4234a45`.

The current read-only supplier raw hashes are recorded as review evidence in their reader decisions; routing bindings remain unchanged. Producer contracts/manifests were independently opened and checked at the actual cited claims. No producer carrier or published item was edited. No statement-consumer item exists outside batch 28 for the reader-amended owned Statement/Definition supplier IDs (explicit full item-reference scan); the only reference consumer of Alpha's newly AC-qualified vector-space example is its own reviewed B page. No new pair, page, item, withdrawal or judge record was created.

## Validation and remaining owner obligations

All 22 exact obligations have one decision. All 16 HIGH/CRITICAL items have specific complete risk_review records after current proof and citation review. Initial risk-report and --require-reviewed both exit 0. Strict proof-contract checks all 16 entries with zero errors/warnings. Reflow reports all three edited items unchanged. Final focused precheck passes three of three; rendering checks the three edited items and A page with real KaTeX/YAML, exit 0. Exact commands: `node tools/tsx-run.mjs tools/precheck.mts` and `node tools/rendercheck.mjs` on the three changed item paths listed below; `node tools/proof-contract.mjs research/frontier-41-ha-dt-29-batch-28.proof-contracts.json --strict`; `node tools/risk-report.mjs research/frontier-41-ha-dt-29-batch-28.proof-contracts.json --require-reviewed`.

Changed item paths: `items/thm-finite-deligne-products-exist-by-tensor-product-algebras.md`, `items/ex-deligne-product-of-finite-vector-space-categories.md`, `items/prop-projective-nakayama-pairing-and-symmetric-algebra-specialization.md`. The last carries only a proof calculation edit; the first only names its free-module functor; the example alone changes its hypothesis and provenance.statement to ai-altered. None carries a prior verification.judge record. Manifests, affected proof-contract derivations/boundaries and all risk reviews are reconciled; 19 owned same-frontier edges have current-source evidence and the dependency ledger refresh exits 0. Published-ledger update acquired its own exclusive lock, reread/merged, added one deduplicated A-P classification and released only its own lock. Thirty-four new closed 5a-adjudicate defect rows were appended, with four existing producer rows reused to avoid double-counting. The published gap is nonfatal-recorded, not a published repair.

Owner reconciliation remains required for two ledger severity conflicts: `reader:28:2` is a proof lifting-target typo, so confirmed_nonfatal, but reused closed row `f41-b27-model-lift-target` says fatal; `reader:28:3` is a proof action-typing correction, with correct statement actions, so confirmed_nonfatal, but reused closed row `f41-b27-lex-tensor-typing` says fatal. Corrected producer proofs are mathematically sound. The Step-5b owner must reconcile these rows/producer decisions; do not make a duplicate defect or force a false fatal verdict to satisfy the checker. Both conflicts are also routed in `briefs/tasks/frontier-dependency-ledger.md`. Published projective-cover source-maintenance remains owner-held A-P; its finite-free lifting closure is written above. No substantial mathematical prerequisite remains unmet in the owned carriers.

A diagnostic run-wide `defect-ledger validate --run frontier-41-ha-dt-29` exited 1 with 167 schema errors outside batch 28 (e.g. batch 7 subclass claim-or-proof-repair and location item; batch 30 claim/facts/proof and reader-repair-reviewed). Those rows were left read-only and no mechanical defect row was created. This is not a passing run-wide check. The focused validation of our 34 new rows is recorded below. No gate battery, judge, decision stamping or certification was initiated; these remain engine/owner tasks.

Focused new-row ledger validation: `node tools/defect-ledger.mjs validate --run frontier-41-ha-dt-29 --ledger /tmp/b28-ledger.jsonl` exited 0, 34 rows, 0 errors. The durable rows are in `research/defect-ledger.jsonl`; the temporary extraction was only for scoped validation.

Final required command, after all item edits and reflow: `node tools/proof-layout.mjs items/thm-finite-deligne-products-exist-by-tensor-product-algebras.md items/ex-deligne-product-of-finite-vector-space-categories.md items/prop-projective-nakayama-pairing-and-symmetric-algebra-specialization.md`. Exit 0: `proof-layout: 3 items, 12 steps, 0 defects`. No item edit or formatter ran afterward.

Handoff: 22 routed decisions authored; owned mathematics and risk reviews complete. Engine may bind current decision hashes and run its gate battery. Two ledger severity conflicts and one published source-maintenance obligation are explicitly outstanding, with no closure claimed for those owner-held records.
