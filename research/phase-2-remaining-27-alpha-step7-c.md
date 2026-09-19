# Step 7 adjudication — group c

Run \`phase-2-remaining-27\`; owned batches 1, 2, and 5. This report is the durable item-by-item checkpoint. Hashes are full \`itemHashGuard\` digests.

## Completed rejections

### \`def-c-star-algebra-generated-by-a-normal-operator\`

- Decision: \`confirmed_fatal\` (\`logic\`), pre-edit \`3d349d625eda719dffd003accc27a49ef22d702025af29a7a34ae6cb68c12ef8\`.
- Exact defect: before normality was assumed, the definition falsely identified the generated star-algebra with ordered monomials $T^j(T^*)^k$; products of such monomials need not retain that form when $T$ and $T^*$ do not commute.
- Repair: defined the arbitrary generated star-algebra by finite words in $T,T^*$ and derived the ordered-monomial form only under normality. Checked against the local definitions \`def-c-star-algebra\`, \`def-self-adjoint-positive-unitary-and-normal-operator\`, and the algebra-continuity dependencies already declared. No web source was needed for this elementary algebraic correction.
- Focused validation: item precheck reported 0 failing and rendercheck passed; post-edit guard hash \`4ae73d985ec04d1c753603f8a2825e614afc2a3f4ed6abbeda442ff6a579d197\`.

Next action: adjudicate \`def-order-on-bounded-self-adjoint-operators\`.

### \`def-order-on-bounded-self-adjoint-operators\`

- Decision: \`false_positive\`, guard hash \`df14563561bd8ad2bede353dac57a497a48e0964b706dc1601a888ec628b46a7\`; no content or contract change.
- Exact evidence: the definition says that spectral nonnegativity does **not** imply positivity without self-adjointness. In \`cex-self-adjointness-cannot-be-dropped-from-the-order-calculus\`, the universal implication is under “Statement refuted,” and the counterexample computes a nilpotent $J$ with spectrum $\{0\}$ and $\langle Jx,x\rangle=i/2$. The judge read the refuted statement as the counterexample’s conclusion.
- Focused validation: direct A/B text comparison; the definition and counterexample agree.

Next action: adjudicate \`def-cyclic-vector-and-cyclic-normal-operator\`.

### \`def-cyclic-vector-and-cyclic-normal-operator\`

- Decision: \`confirmed_fatal\` (\`logic\`), pre-edit \`781ac442dc3f3c09dc53c9d8500ea3359fdfe1a29b92aab3dceffbec1f200fce\`.
- Exact defect and repair: the hypotheses say bounded normal, so the explanatory phrase “the unitary operator $T$” was false; changed only “unitary” to “normal.” This exactly also disposes warning \`s8a-dd636e0bfc93c0663492b8c6\` as \`covered_by_rejection\`.
- Dependency check: \`def-self-adjoint-positive-unitary-and-normal-operator\` distinguishes the notions, while \`def-c-star-algebra-generated-by-a-normal-operator\` supplies the $T,T^*$ generated algebra. No external source was needed.
- Focused validation: item precheck reported 0 failing and rendercheck passed; post-edit guard hash \`9e85493fd42f2b1b2b37aec0b6ee89f9fde04eb00c63970983b78848f9c9c5ba\`.

Next action: adjudicate \`def-projection-valued-measure\`.

### \`def-projection-valued-measure\`

- Decision: \`confirmed_fatal\` (\`logic\`), pre-edit \`0a9fa9bd32f2d6369a5f94581dffb74f2e0e61e6f5a6a00832ea7cdeec8b5c3f\`.
- Exact defect and repair: the disjoint family was indexed by $\mathbb N$ under the run’s zero-based convention, but the displayed sum started at 1 and omitted $B_0$. Changed the lower index to 0. This is the standard strong countable-additivity clause and aligns with the item’s own prose and downstream partial sums.
- Focused validation: item precheck reported 0 failing and rendercheck passed; post-edit guard hash \`e8d67f81d627774b167d2f443d8983ec9ce700d302b74d4d972424c8cba04024\`. Downstream items that cited the formerly defective 1-based interface must be reread against this corrected supplier.

Next action: adjudicate \`def-integral-of-a-simple-function-against-a-pvm\`.

### \`def-integral-of-a-simple-function-against-a-pvm\`

- Decision: \`confirmed_fatal\` (\`logic\`), pre-edit \`0c29f012b6a7d73af0668307426e09f7daa3c760636e513a76827fa7989d368b\`.
- Exact defect and repair: an empty presentation at $X=\varnothing$ left $\max_j|a_j|$ undefined. Required $m\ge1$ and explicitly represented the empty-space zero function by $m=1$, $B_1=\varnothing$, $a_1=0$. This preserves every nonempty-space normal form and makes the displayed bound meaningful.
- Focused validation: item precheck reported 0 failing and rendercheck passed; post-edit guard hash \`f6c04113c407a6f6a9f1d1ad2497875ea5d5798740ef4dd516c37c86bc8fb0db\`.

Next action: adjudicate \`def-borel-functional-calculus-for-a-bounded-normal-operator\`.

### \`def-borel-functional-calculus-for-a-bounded-normal-operator\`

- Decision: \`confirmed_fatal\` (\`logic\`), pre-edit \`101a4ccf5dabd5c02360249a5f5604935ca796eb72ee2644310ef91ec824676f\`.
- Exact defect and repair: “bounded pointwise convergence” did not impose one uniform bound on the sequence and admitted the judge’s unbounded-spike counterexample. Replaced it by the explicit hypotheses $f_n\to f$ pointwise $E$-a.e. and $\sup_n\|f_n\|_\infty<\infty$, exactly matching \`thm-pvm-integral-is-a-star-homomorphism\`.
- Focused validation: item precheck reported 0 failing and rendercheck passed; post-edit guard hash \`1fea6dd9d60b78f3bcfa05de17cc29927f84b8399adefc7b46c48da94e67fd32\`.

Next action: adjudicate the PVM-interface consumers and spectral-projection domain objections.

### \`lem-weak-and-strong-additivity-of-orthogonal-projections\`

- Decision: \`confirmed_fatal\` (\`logic\`), pre-edit \`4fbfec1217a6a837461c2c874258093a3171507c8836f68c432b52821c0bf29b\`.
- Exact defect and repair: both displayed series began at 1 although $(B_n)_{n\in\mathbb N}$ and $Q_N=\sum_{n\le N}E(B_n)$ are zero-based. Changed both lower indices to 0, now matching the corrected PVM definition and every proof partial sum.
- Focused validation: item precheck passed and rendercheck passed; post-edit guard hash \`dc32d717e4e6d04d5e2e457d958587c7f230073ff5479a40ae0bd125a17a56f7\`.

### \`lem-continuous-functional-calculus-produces-a-regular-pvm\`

- Decision: \`confirmed_nonfatal\`, guard hash \`e29f4e3e9d8f138eea1ca58ab9ca1a8026b3ac7696421ae9f4ba34afb3a89fb0\`; no item or contract change.
- Exact evidence: step 11.1 correctly uses the zero-based partial unions $C_N=\bigcup_{n\le N}B_n$ and proves the zero-based strong sum. The mismatch existed only in the cited PVM definition’s displayed lower index, separately repaired under that supplier’s own exact rejection. With the current supplier, this proof and statement agree.
- Focused validation: current supplier/consumer text comparison; no local edit licensed or needed.

Next action: repair the spectral-measure domain conventions in the corollary and Stone formula.

### \`cor-spectral-projections-and-resolution-of-the-identity\`

- Decision: \`confirmed_fatal\` (\`logic\`), pre-edit \`305d9fef87b160fcfbd02c5a7b2931d80083668ed2bff9f00bf46cd7fa5889bb\`.
- Exact defect and repair: the native domain of $E$ is the Borel subsets of $\sigma(T)$, whereas $E(\{\lambda\})$ was used for arbitrary $\lambda\in\mathbb C$. Declared the standard zero extension $E(A):=E(A\cap\sigma(T))$ for Borel $A\subseteq\mathbb C$. The eigenspace proof now covers both $\lambda\in\sigma(T)$ and $\lambda\notin\sigma(T)$ without an ill-typed expression.
- Focused validation: item precheck passed and rendercheck passed; post-edit guard hash \`3510c09b13aa64db46d3185752166573d31835ac7efc59166f1cfd6772e548c6\`.

### \`thm-stone-resolvent-formula-for-spectral-projections\`

- Decision: \`confirmed_fatal\` (\`logic\`), pre-edit \`7b623d16e4f24c091d9b85ecaeaebabdde7909b200d930d7db528c4cb79ca5c0\`.
- Exact defect and repair: $E$ was natively defined on $\sigma(T)$ but the formula applied it to $(a,b)$ and endpoint singletons in $\mathbb R$. Declared $E(A):=E(A\cap\sigma(T))$ for Borel $A\subseteq\mathbb R$. This also makes the “endpoints outside the spectrum” special case literally meaningful.
- Focused validation: item precheck passed and rendercheck passed; post-edit guard hash \`de0107f440cc966257eb17f336404ef6a14431f9a509c76738196361224b1e4b\`.

Next action: adjudicate the diagonal/multiplication spectral examples and the direct-integral remark.

### \`cex-a-normal-operator-need-not-have-any-eigenvectors\`

- Decision: \`confirmed_fatal\` (\`dependency_citation\`), pre-edit \`fcbf9ec33dd20ae0543797ce679b660bd7f7b27e40de75ddbc0f8df469a34889\`.
- Exact defect and repair: A2’s claim about every nonzero measurable function fails for a singleton-supported representative. The proof needs, and the quotient definition supplies, the narrower fact that every representative of a **nonzero $L^2$ class** is nonzero on a set of positive measure. Replaced the overstrong phrase accordingly; the multiplication-operator counterexample is otherwise unchanged.
- Focused validation: item precheck passed and rendercheck passed; post-edit guard hash \`2a33a92db32ea62d71e11c86ad5db0e054871d7862fa785ecc42f155fc2224c4\`.

### \`rem-direct-integrals-and-general-multiplicity-theory\`

- Decision: \`confirmed_fatal\` (\`dependency_citation\`), pre-edit \`8e20ff518b8c0660d9941b21767ba30e2d650ced54a2204e275920e32629eab0\`.
- Exact defect and repair: the cited counterexample proves one multiplication operator has no eigenvectors; it does not by itself prove a general “zero almost everywhere at non-atomic points” assertion. Replaced that overstatement by the exact supplied example: multiplicity and eigenspace dimension can differ, as shown by spectrum $[0,1]$ with no nonzero eigenspace.
- Focused validation: item precheck reported 0 failing and rendercheck passed; post-edit guard hash \`f28d4974524a5ca2ebf4cdaaf3388650a13ea293b771ab6a21aa3fdf9f1ea811\`.

### \`ex-pvm-of-a-diagonal-normal-operator\`

- Decision: \`confirmed_fatal\` (\`logic\`), pre-edit \`f326fd8e4fd61ecf39bce31a81ba999ac692ebcd2e3915cae1db3ae52cea9eb0\`.
- Exact defect and repair: $I=\varnothing$ gives the zero Hilbert space, outside the nonzero-space spectral theorem cited in A3, and also leaves the displayed supremum without a stated empty-family convention. Narrowed the example to nonempty $I$, which is the domain of the advertised spectral-PVM computation.
- Focused validation: item precheck passed and rendercheck passed; post-edit guard hash \`a1f8480129b9ad1dc2a379dfa057ed0c0534e476fbe546cdbfb09cdc6bce26ac\`.

### \`ex-pvm-of-a-multiplication-operator\`

- Decision: \`confirmed_fatal\` (\`logic\`), pre-edit \`27c11fdaa20ae5376889d28fffd633aef3b8c9472bff8ca65f0196e2af19c187\`.
- Exact defect and repair: $f$ lives only on the essential range $R(m)$, while a representative of $m$ can take exceptional values outside $R(m)$ on a null set. Defined $\widetilde f$ as a bounded Borel extension (the zero extension), wrote the literal operator as $M_{\widetilde f\circ m}$, and explained why the resulting $L^2$ operator is extension-independent and customarily denoted $M_{f\circ m}$.
- Focused validation: item precheck passed and rendercheck passed; post-edit guard hash \`3277e7edf6fefa3057b74b90bea328c62750f5bf04df50b6ec691eb0d6f204e6\`.

### \`ex-borel-functional-calculus-defines-a-discontinuous-characteristic-function\`

- Decision: \`confirmed_fatal\` (\`logic\`), pre-edit \`60571c1f53c7dcd97f0c5c3e67f8a4e93262c720631ed688a952ff5c0b5b7076\`.
- Exact defect and repair: A3 falsely asserted the range description for every multiplier $g$; division by a multiplier tending to zero need not preserve $L^2$. Narrowed A3 to the indicator multiplier actually used, for which range and kernel follow pointwise and the advertised projection computation is exact.
- Focused validation: item precheck passed and rendercheck passed; post-edit guard hash \`8d207ab8239178f3de75bee93dd171a418621db4bed32ea9264c53248c7390e6\`.

### \`cex-continuous-calculus-does-not-contain-discontinuous-spectral-projections\`

- Decision: \`confirmed_fatal\` (\`dependency_citation\`), pre-edit \`7f991e9b0cc1bc717acde3b199e2dad95416cf04a5cf338e942a3e3e39641044\`.
- Exact defect and repair: A3 attributed an iff for general multipliers to the projection definition, which supplies no such theorem. Replaced it by the direct calculation needed here: an indicator multiplier is idempotent and symmetric, its range is the supported closed subspace, and hence it is that subspace’s Hilbert projection.
- Focused validation: item precheck passed and rendercheck passed; post-edit guard hash \`43ddd2da5cec1ed8a1742a1b7454c6ec8439acbedabdd423cf0e9ac6714ee580\`.

### `lem-scalar-and-complex-measures-from-a-pvm`

- Decision: `confirmed_fatal` (`logic`), pre-edit `5de7a634a6c79ca95c17fdad4129a2ebc476ad19da494340de946321a8735e94`.
- Exact defect and repair: the total-variation definition takes a supremum over countable measurable partitions, while the proof bounded only finite partitions. Applied Cauchy--Schwarz to every finite partial sum of an arbitrary countable partition and passed to the increasing limit, obtaining the claimed variation bound.
- Focused validation: item precheck reported 0 failing and rendercheck passed; post-edit guard hash `7b9cc8f92f745cd0ae8b3e689b27fa15176e04d6a1d59d73427510796cd8d4a5`.

### `lem-simple-pvm-integral-is-representation-independent`

- Decision: `confirmed_fatal` (`dependency_citation`), pre-edit `3c7e58a86204c133177b46b1d2a3a363fbeba20f6e5418f749727183f4b193e6`.
- Exact defect and repair: the cited scalar simple-integral definition uses the canonical nonzero level sets, so it did not justify identifying an arbitrary disjoint normal form with the scalar integral. Added an explicit regrouping by the finitely many values of the simple function, using finite additivity to recover the canonical level-set sum.
- Focused validation: item precheck reported 0 failing and rendercheck passed; post-edit guard hash `a6025f64319c5cb49b4dbdd7ec2b0b03e0c7c191fedcadd9d1d374de39754601`.

### `thm-bounded-borel-pvm-integral`

- Decision: `confirmed_fatal` (`dependency_citation`), pre-edit `60e9bbcab6d6cbc81cfc34a8670dd3cc06c115802a42542e8cd8496e5ede57b7`.
- Exact defect and repair: A3 attributed the concentration implication `E(A)y=y` implies `E_y(X\A)=0` to a scalar-measure lemma that does not state it. Added the direct PVM calculation `E(X\A)y=E(X\A)E(A)y=0`, after which the scalar-measure identity supplies zero mass.
- Focused validation: item precheck reported 0 failing and rendercheck passed; post-edit guard hash `d5a87fa09d50609fe722597b17f80edfbd089b4050f879715f3bcee7bd546ad7`.

### `thm-pvm-integral-is-a-star-homomorphism`

- Decision: `confirmed_fatal` (`logic`), pre-edit `fa2ccc8137070b69357c3c6bf3066f262ff391006763fb3623336a919bd4eb65`.
- Exact defect and repair: the strong-convergence clause formed `Φ_E(f)` without asserting that its almost-everywhere limit `f` is a bounded measurable function in the calculus domain. Added that hypothesis explicitly.
- Focused validation: item precheck reported 0 failing and rendercheck passed; post-edit guard hash `2a1a828b012382557672af3fd2c4301b209b4cc268b8946a185e79893817670e`.

### `thm-borel-functional-calculus-for-bounded-normal-operators`

- Decision: `confirmed_fatal` (`logic`), pre-edit `93a923d0794d7dd5b3c1e75dfca91d902f7a2ed3be9abc13a321fdad65c1f7c5`.
- Exact defect and repair: clause 4 used `f(T)` without asserting that the almost-everywhere pointwise limit `f` is bounded Borel and therefore in the calculus domain. Added that hypothesis and removed the duplicated word “bounded.”
- Focused validation: item precheck reported 0 failing and rendercheck passed; post-edit guard hash `6205c4bdbd34b69f2ae242ad4377b16aea3ccfbc2b7f050a34688008a8459828`.

### `thm-spectral-theorem-for-bounded-normal-operators-pvm-form`

- Decision: `confirmed_fatal` (`logic`), pre-edit `af15b3598d46c47fc1cc8d4eb517232c0c93038707e95cc2839b9e5e3e74cd19`.
- Exact defect and repair: A4 falsely made self-adjointness of `Φ_E(z)` equivalent to pointwise reality of `z` on the whole ambient compact set; a PVM may vanish on all nonreal points. Removed the unused equivalence and retained the valid multiplicative proof of normality.
- Focused validation: item precheck reported 0 failing and rendercheck passed; post-edit guard hash `b721a14e6fe11db53c41d870ebadce2e12e98961f241c504f297bd0d1a397da2`.

### `thm-support-and-uniqueness-of-the-spectral-measure`

- Decision: `confirmed_fatal` (`dependency_citation`), pre-edit `b14d17c27bdce7723716ea80c900477336064a6df9cf307e9e0151f68127fb2a`.
- Exact defect and repair: step 1.2 used multiplicativity and star preservation for the arbitrary PVM `E'`, but the facts cited there did not supply that result. Added and cited `thm-pvm-integral-is-a-star-homomorphism`; refreshed the unified frontier ledger immediately after the dependency edit.
- Focused validation: item precheck reported 0 failing and rendercheck passed; post-edit guard hash `2f048c80af21ec64b77f41558614ec5e5e50aa24898472a0ec64b6b5bb9a78da`.

### `thm-cyclic-spectral-representation`

- Decision: `confirmed_fatal` (`logic`), pre-edit `cf8dccea408e377d4a82049e84b514e57a3f8fd44c29a5aeb697ff7fe9130a79`.
- Exact defect and repair: step 3.2 applied the extension `U` to `hf` as though `hf` were continuous, although `h` is only Borel. Proved first, by continuous `L²` approximation and the PVM norm identity, that `U[q]=q(T)x` for every bounded Borel `q`; the multiplier intertwining then follows on continuous vectors and extends by density.
- Focused validation: item precheck reported 0 failing and rendercheck passed; post-edit guard hash `849f6391b860d3c34c0e47404c3044cae1aae7623b61ceb9868a1a79a7858dc2`.

### `lem-maximal-orthogonal-family-of-cyclic-reducing-subspaces`

- Decision: `confirmed_fatal` (`logic`), pre-edit `339bf9a31ad9a666754822b467d9426aeb0dae5672fa30cdc2ac2fd902cbb4d2`.
- Exact defect and repair: A5 falsely claimed that an arbitrary subset with zero orthogonal complement is itself dense. Replaced this by the correct equivalence for its closed linear span, which is exactly the subspace used in the proof.
- Focused validation: item precheck reported 0 failing and rendercheck passed; post-edit guard hash `32bb4a91b073de28539fc34ed81f80e50d00022d3a611c450e4ad18e6fa2f5f0`.

### `thm-multiplication-operator-form-of-the-bounded-normal-spectral-theorem`

- Decision: `confirmed_fatal` (`logic`), pre-edit `2ffaacb8a26209c05d5d547ddb0ba1db20075464482c938cbacb66488d225777`.
- Exact defect and repair: A3 used only `T`-invariance to identify ambient and restricted cyclic subspaces, although cyclicity also uses `T*`. Replaced that premise by the actual reducing hypothesis, under which both operators preserve the summand and the two cyclic constructions agree.
- Focused validation: item precheck reported 0 failing and rendercheck passed; post-edit guard hash `dcd623a005ba64b540e8db5f1f38aa602884b5c366734f4f03bed68da5bb6fbc`.

### `lem-unitary-intertwiners-preserve-direct-integral-fiber-dimension`

- Decision: `confirmed_fatal` (`dependency_citation`), pre-edit `b5aca1c69d2c583d5d88f80001dc3ec766fe556524ae0837efd36dcff7a9e3f8`.
- Exact defect and repair: step 3.2 invoked `dν/dμ`, but the listed integration theorem applies only after a derivative is given. Added the published Radon–Nikodym existence theorem, recorded why the density is positive and strictly positive under equivalence, and verified directly that multiplication by its square root is the required onto isometry. Refreshed the frontier ledger after the dependency edit.
- Focused validation: item precheck reported 0 failing and rendercheck passed; post-edit guard hash `4ada640eaa1f288a85c7e0ee4cd964baf18cdf2ed10993c49869ebd89ea54f19`.

### `ex-spectral-projection-of-an-isolated-eigenvalue-agrees-with-the-riesz-projection`

- Decision: `confirmed_fatal` (`dependency_citation`), pre-edit `b067984df9ae7a03631245f4bae82409261a6d66e944466f1a43da52f9dfd5c3`.
- Exact defect and repair: A4 misstated the cited circle Cauchy formula by omitting its centre and the condition `0<r<R`. Restored the centred condition `|z-a|<r`, which exactly licenses the contour computation around the isolated eigenvalue.
- Focused validation: item precheck reported 0 failing and rendercheck passed; post-edit guard hash `839e0ae0c96a17800e91ee30d790353240367d089c6109f55ebf27c2420047d1`.

### `lem-spectrum-of-a-positive-operator-is-nonnegative`

- Decision: `confirmed_fatal` (`dependency_citation`), pre-edit `b6df3bea6aa82457703676dfeef5ba7cc66703ecc06c05350d23e79d2bf24fc8`.
- Exact defect and repair: A2 attributed the defining adjoint pairing to the algebraic adjoint-properties theorem, whose public interface does not state it. Added and cited the adjoint definition and the underlying inner-product convention; refreshed the frontier ledger after the dependency edit.
- Focused validation: item precheck reported 0 failing and rendercheck passed; post-edit guard hash `24bf6f87983180b22292cdaf5fb9a5e8d20e993710da633e204438480c51dbf1`.

### `thm-self-adjoint-norm-and-spectrum-extrema`

- Decision: `confirmed_fatal` (`dependency_citation`), pre-edit `0911e8821af97045de862238be534f84e949f2f5ecfcc1e26ca65013ed67be08`.
- Exact defect and repair: A4 attributed norm definiteness and a spectral-radius disc bound to a spectrum definition that states only vocabulary. Those assertions were unused: the calculus isometry in A1 directly proves the norm formula, so the inaccurate fact and citation were removed.
- Focused validation: item precheck reported 0 failing and rendercheck passed; post-edit guard hash `62695672dadfb1544ab71c3237ffa2c25014c22a282f36379a643c4a02c002e3`.

### `lem-character-space-of-generated-normal-algebra-is-operator-spectrum`

- Decision: `confirmed_fatal` (`dependency_citation`), pre-edit `77c7374d7065e7e0417d7e163fe3068372805f0c2f10eb0a49af91d2e66ff8d9`.
- Exact defect and repair: A7 cited a continuous-image theorem restricted to metric spaces, while the character space is only known to be compact Hausdorff. Replaced it with the general compact-space theorem and refreshed the frontier ledger.
- Focused validation: item precheck reported 0 failing and rendercheck passed; post-edit guard hash `47a77c81c6c5e7ae8fb882cb61212dea86de0aee3ebdf165408c783e677387fa`.

### `thm-partial-isometry-characterizations`

- Decision: `confirmed_fatal` (`logic`), pre-edit `2258a492eb3c9e45402a20f331e3258b72dcbbe103b9685e1cb322a8f47f7ae7`.
- Exact defect and repair: the conclusion promoted one-way consequences to equivalences without proving the converse from partial isometry of `U*`. Applied the already proved forward implication to `U*` and used `U**=U`; rewrote the final synthesis to distinguish the equivalent conditions from the consequential range-projection identity.
- Focused validation: item precheck reported 0 failing and rendercheck passed; post-edit guard hash `db1cbc29d2548a0801b1fed99cbeac55a58ce05a9067123fa77f0186c5cdc7aa`.

### `thm-bounded-normal-operator-abstract-spectral-theorem`

- Decision: `confirmed_fatal` (`logic`), pre-edit `f69a24339c6ead9d8db9f6ad2ffed2367c53e4c275e2cf56a023c896ced8c41d`.
- Exact defect and repair: the statement invoked a coordinate function on an arbitrary compact Hausdorff space, where none is canonically defined. Restricted the witness to a nonempty compact subset of `ℂ` and explicitly identified `z` as its coordinate restriction throughout the proof.
- Focused validation: item precheck reported 0 failing and rendercheck passed; post-edit guard hash `5246c6cec4c68d038f2717bc71920bfce9c42beaf9bd26b46cc23fee2761ef86`.

### `thm-spectral-mapping-for-continuous-normal-functional-calculus`

- Decision: `confirmed_fatal` (`dependency_citation`), pre-edit `d36cbaff4750c4e67b3d0a480486e73ad030069e28a4591c9999474b4e7165c4`.
- Exact defect and repair: the calculus isomorphism alone did not imply `χ(f(T))=f(χ(T))`; this requires that `χ∘Ψ` be a point evaluation on `C(σ(T))`. Added that exact character theorem, made the composition argument explicit, and refreshed the frontier ledger.
- Focused validation: item precheck reported 0 failing and rendercheck passed; post-edit guard hash `64e061bad8405b06f7695b39e99fb79c865fc8d98a3ac3eba47e8aff77cf1742`.

### `lem-two-dimensional-numerical-range-is-convex`

- Decision: `confirmed_fatal` (`logic`), pre-edit `c07bdd3635916250ec25da1757bb033a943a95206cddd6ba2fb09bbf683abe55`.
- Exact defect and repair: step 1.1 included `V={0}` but called its empty unit-sphere numerical range a singleton. Treated dimension zero as the empty convex set and dimension one as the singleton case. Step-6 warning `s8a-ec4bab00c6600c72eca519a1` is covered by this exact rejection and repair.
- Focused validation: item precheck reported 0 failing and rendercheck passed; post-edit guard hash `0e6dbb651dea04156df466bef83cb05ee0230a4683c82d25912d46aa9c52164b`.

### `thm-continuous-functional-calculus-for-bounded-self-adjoint-operators`

- Decision: `confirmed_fatal` (`logic`), pre-edit `acf48ee919bf140cf7259198bf3cd72815911858b51885cd07865e84b52e8f6a`.
- Exact defect and repair: the polynomial approximation sequence used the undefined tolerance `1/n` at the library index `n=0`. Replaced it consistently by `1/(n+1)` in the construction, Cauchy estimate, independence estimate, and uniqueness argument.
- Focused validation: item precheck reported 0 failing and rendercheck passed; post-edit guard hash `1dfcad3447195bc9817fe32bdb9c8c7a1213ce87c402d692676c2ad03c317f58`.

### `ex-functional-calculus-for-a-multiplication-operator`

- Decision: `confirmed_fatal` (`logic`), pre-edit `88c5ea2bf53877f4d4bed17d7e4d6e5e1bbe6803ebf8da045cec42cb11368718`.
- Exact defect and repair: step 4.1 asserted that continuous multipliers equal `C*(I,M_t)` without uniform polynomial approximation or the isometric multiplier norm. Proved the norm formula by localized test vectors, deduced closed range, used Stone–Weierstrass for one inclusion and the polynomial identity for the other, and refreshed the frontier ledger.
- Focused validation: item precheck reported 0 failing and rendercheck passed; post-edit guard hash `6bf1bec97357559293882ac8bb2afcd139c99011a5648d7fae7799e8d118a09f`.

### `ex-square-root-and-absolute-value-of-a-matrix`

- Decision: `confirmed_fatal` (`dependency_citation`), pre-edit `cbe67d6fd04eeb0de3eb4b9db559d6876fd40c69e5d8527d3cfe7584e0910215`.
- Exact defect and repair: A1 attributed the defining adjoint pairing to an algebraic-properties theorem whose public interface does not state it. Added and cited the Hilbert-space adjoint definition and refreshed the frontier ledger.
- Focused validation: item precheck reported 0 failing and rendercheck passed; post-edit guard hash `d9e670525288fb4bf17b8e1a31655d70f9b0ff9a69476663e11792e7923e1565`.

### `thm-positive-square-root`

- Decision: `confirmed_fatal` (`logic`), pre-edit `088f08ae3ba5ce652555fd693552db85556fad8bc06ae5b9ab57529d456b1400`.
- Exact defect and repair: the theorem claimed that the square root was obtained by continuous polynomial approximation, but no step supplied or used polynomial approximants. Added Stone–Weierstrass and the isometric identity `||p_n(T)-g(T)||=||p_n-g||∞`, then refreshed the frontier ledger.
- Focused validation: item precheck reported 0 failing and rendercheck passed; post-edit guard hash `69755a528718bb316a2fa5129b6ec29125309a5a137440fa8a50ea1fcded522e`.

### `thm-numerical-radius-is-an-equivalent-operator-norm`

- Decision: `confirmed_fatal` (`logic`), pre-edit `c8427698b765ec4d1afa2a57d96d4dd9b72d485e8c14cf1df24462ced9d6e5d5`.
- Exact defect and repair: the approximate eigenvector sequence used the undefined tolerance `1/n` at the library index `n=0`. Replaced it by `1/(n+1)`, preserving the convergence argument for every index.
- Focused validation: item precheck reported 0 failing and rendercheck passed; post-edit guard hash `6818dc54142513141461685dc1abe7af63072ff6adb35b8a372e1ff91ccfd0c0`.

### `cex-self-adjointness-cannot-be-dropped-from-the-order-calculus`

- Decision: `confirmed_fatal` (`dependency_citation`), pre-edit `12bcc7bca98d400204186fe5ec80552fd2d5b8119af2d6e3d472eb7b42a56aec`.
- Exact defect and repair: A2 attributed both the defining adjoint pairing and a conjugate-transpose matrix rule to an algebraic adjoint theorem that states neither. Added the adjoint definition and computed `J*` directly on the standard orthonormal basis; refreshed the frontier ledger.
- Focused validation: item precheck reported 0 failing and rendercheck passed; post-edit guard hash `a1f77df91399ed449f1b9b996aa9cae6311cb80b85734ace07161db9251f20ca`.

### `lem-spectral-permanence-for-unital-c-star-subalgebras`

- Decision: `confirmed_fatal` (`logic`), pre-edit `a17a8cbc8e2d1302218f8f4b3b3ec0bb853b012b047117ec16b909d326a8502d`.
- Exact defect and repair: step 2.2 reversed spectral inclusion: `σ_A(x)⊆σ_C(x)` and `0∉σ_A(x)` do not imply `0∉σ_C(x)`. Replaced it with the standard inverse-closedness proof. For self-adjoint invertible `x`, form `C=C*(1,x,x^{-1})` and `D=C*(1,x)`; the Gelfand transform of `x` separates the character space because its value determines that of `x^{-1}`, so Stone–Weierstrass gives `D=C` and hence `x^{-1}∈B`. The usual `b*b` reduction handles arbitrary `b`; refreshed the frontier ledger.
- Authoritative source consulted: Dana P. Williams, *C\*-Algebras*, §2.2, Theorem 2.17, `https://math.dartmouth.edu/~dana/bookspapers/cstar.pdf`; it supports precisely the generated-algebra/Stone–Weierstrass proof of spectral permanence used here.
- Focused validation: item precheck reported 0 failing and rendercheck passed; post-edit guard hash `3d417b364ee533522e2b05b966b1f63e16bcfa7442a868b752fac52f61098f91`.

### `thm-projection-onto-a-nonempty-closed-convex-set`

- Decision: `confirmed_fatal` (`dependency_citation`), pre-edit `4a1dc081d5293ce03cc7621ca9c57ede47690bff558f3020314c573be7768fdf`.
- Exact defect and repair: A5 attributed sequential closedness and uniqueness of metric limits to `def-metric-topology`, which states neither result. Replaced that citation by the exact closure characterization and metric-limit uniqueness lemma and refreshed the frontier ledger.
- Focused validation: item precheck reported 0 failing and rendercheck passed; post-edit guard hash `2a5c93dd348220e61551a09363fa207caaca010e83ac68199635b3fe5a78e526`.

Next action: continue through the Hilbert-space and Fourier pages.

### `ex-haar-orthonormal-basis-of-l-two-zero-one`

- Decision: `confirmed_fatal` (`dependency_citation`), pre-edit `2be3a052dfe3c7f2aa2da6865dd91eb65134bb61dd8815b8fd3961e4c9f7ef02`.
- Exact defect and repair: the density dependency states density of restrictions of `C([0,1])` in `L^2((0,1))`; the item instead asserted density in `L^2([0,1])` and separately claimed the endpoints were null without an exact cited interface. Restated the Haar example on `(0,1)`, where the calculations are unchanged and the density citation applies verbatim, and removed the unused endpoint-null claim.
- Sources consulted: repository item `lem-continuous-periodic-functions-are-dense-in-l-p-of-finite-tori`, Statement 2 and proof step 5.1, for the exact bounded-open-interval density claim. No web source was needed.
- Focused validation: item precheck reported 0 failing and rendercheck passed; post-edit guard hash `d80a0ee9b1469bb4e59724bfbf94ab521c0202637481dedbb9a61dc3893fede7`.

Next action: adjudicate the remaining Riesz–Fischer and compact-operator/Hilbert–Schmidt rejections.

### `def-square-summable-family-on-an-arbitrary-index-set`

- Decision: `confirmed_fatal` (`logic`), pre-edit `7372063492de53c71c1ad0fd101cc238a32b8db72247253c10fdfb30a662a387`.
- Exact defect and repair: the summability proof formed infima and suprema of complex finite sums, which are unordered. Reworked the supremum argument over `R`, corrected the independent Step-6 warning's invalid `F=G=F_0` diameter specialization, and treated complex families through their absolutely summable real and imaginary parts.
- Step-6 warning `s8a-740bb14ed6917643818a401c`: `covered_by_rejection` by this exact repair.
- Focused validation: rendercheck passed (the definition kind has no precheck target); post-edit guard hash `ce7eb96245b6054438b5f4c988a5b2c2160d768cc27bc161410d12f456fcb9da`.

Next action: continue through the Fourier pages.

### `def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis`

- Decision: `confirmed_fatal` (`dependency_citation`), pre-edit `158dc535b0ed5dd83cd76c86f6f0173cd64e95ad67b4a27d41e979e2310e973f`.
- Exact defect and repair: the interface unnecessarily restricted orthonormal families to Hilbert spaces although its definitions use no completeness, and called the closed linear span merely a closed subspace. Generalized the definitions to inner-product spaces, reserved “Hilbert basis” for the complete case, and said “closed linear subspace”; refreshed the frontier ledger.
- Focused validation: rendercheck passed (the definition kind has no precheck target); post-edit guard hash `1e831c2f0ab2d8fff7f84ebb3ca9c89bba1dc70240f944684555ba56a727205a`.

Next action: adjudicate the two Bessel consumers against the repaired interface.

### `lem-finite-bessel-inequality`

- Decision: `confirmed_nonfatal`, current guard `7400c19c13f8f1a07c7b7e5743e7f6fdd35a4bf724d571c6855725834c4d1624`.
- Reason: the finite proof is correct in every inner-product space. Its only mismatch was the cited orthonormal-family interface, repaired under that definition's own targeted rejection; no consumer edit is warranted.

Next action: adjudicate the arbitrary-family Bessel theorem.

### `thm-bessel-inequality-for-an-arbitrary-orthonormal-family`

- Decision: `confirmed_nonfatal`, current guard `8ad8cd587abd6d3e20ca9e1fe96617a3d2b8d17af6a62e560ea8e6833f5982e7`.
- Reason: the theorem correctly takes the supremum of the finite Bessel bounds and uses no completeness. Its only mismatch was the orthonormal-family interface, repaired under its own rejection; no theorem edit is warranted.

Next action: continue through the Fourier page.

### `def-the-one-dimensional-torus-and-normalized-haar-integral`

- Decision: `confirmed_fatal` (`dependency_citation`), pre-edit `7a1e116d7cf49e4e147b2b68a0e48519d69789a7308cdb7806c985cb00a4f957`.
- Exact defect and repair: the quotient universal property supplied continuity of the coordinate map but not inverse continuity. Proved the induced map is a continuous bijection from a compact space to a Hausdorff finite product and hence a homeomorphism.
- Focused validation: rendercheck passed (the definition kind has no precheck target); post-edit guard hash `b029578d07610df6b823ec302d1aee7ea21b75e3b0af416bea838bdfcc98eace`.

Next action: continue through the Fourier examples.

### `ex-legendre-polynomials-from-gram-schmidt`

- Decision: `confirmed_fatal` (`logic`), pre-edit `92d1a9c425d78914eb39da687582f3923371d863e04f9696f1bd36c1f7e7456d`.
- Exact defect and repair: the proof computed only the first three Gram–Schmidt vectors but asserted the general Legendre identification and norm formula. Restricted the claim to the fully computed `P₀,P₁,P₂` and expressly made no general formula claim.
- Focused validation: item precheck reported 0 failing and rendercheck passed; post-edit guard hash `42571ffd14cc679efc9baeccc0a8f4cb0f4c0172bdd9393fdd1df3634fc50d2f`.

Next action: finish the remaining Fourier items, then move into compact operators.

### Step-6 warning `s8a-dec329ad2223a8dab75d6eb1`

- Item: `lem-l-two-with-the-integral-pairing-is-a-hilbert-space`.
- Decision: `nonfatal`. The source contains two correctly numbered claims and both formulas; the missing separating newline is presentation-only and does not warrant a fatal-only content edit.

Next action: finish the remaining Fourier items, then move into compact operators.

### `ex-fourier-series-of-a-square-wave`

- Decision: `confirmed_fatal` (`logic`), pre-edit `e3579d54c778b939c0986b04bc4b5d1b5dcff4f2c299cafc34f1e5c8af49ad98`.
- Exact defect and repair: the harmonic-size Fourier coefficients are not absolutely summable; only their squares are. Removed the false claim, supplied the missing alternating-cosine input, and corrected the title from “Leibniz's series” to the odd reciprocal-square sum actually proved; refreshed the frontier ledger.
- Focused validation: item precheck reported 0 failing and rendercheck passed; post-edit guard hash `ee2339a728640a5b590dd328b537aee780a60070c16a6218e1fec057b0b9578a`.

Next action: continue through the Fourier examples.

### `ex-fourier-series-of-a-sawtooth`

- Decision: `confirmed_fatal` (`dependency_citation`), pre-edit `df896b429c110f4a1741ac6955d5ad22dd1389864ccbaa7a6c4b39ca61ee8f3b`.
- Exact defect and repair: the sine zero-set theorem did not supply the alternating cosine values used by the coefficient computation. Added the `π`-shift formula and the integer-induction derivation; refreshed the frontier ledger.
- Focused validation: item precheck reported 0 failing and rendercheck passed; post-edit guard hash `62e6caade2973bb2065a6bb0981010c67cd4d68f2e43f0fe0bbc0cbbe30c6d10`.

Next action: continue through the Fourier examples.

### `thm-existence-of-a-maximal-orthonormal-family`

- Decision: `confirmed_fatal` (`other`), pre-edit `0f799846443128098e15baa4115238a00671a325c00ac5b94740620df869944d`.
- Exact defect and repair: the item claimed full AC was used exactly once through Zorn although the proof also invokes an `AC_ω` theorem supplied by AC. Corrected the choice accounting to record both uses.
- Focused validation: item precheck reported 0 failing and rendercheck passed; post-edit guard hash `0edaa2a98745eff37e475cf5af9827fef7f319da624a550ed66253f4c54a9529`.

Next action: continue through the Fourier examples.

### `lem-finite-tori-are-compact-hausdorff-character-spaces`

- Decision: `confirmed_fatal` (`logic`), pre-edit `89704cb03d2f60ee5bf759fee7616929ec7edb44eeb28ad48de9c3962f557cd6`.
- Exact defect and repair: the coordinate exponential was applied directly to a quotient class. Defined each character using an arbitrary real representative, proved representative independence via the exponential fibre criterion, and then proved separation.
- Focused validation: item precheck reported 0 failing and rendercheck passed; post-edit guard hash `189a0b146c098ed3fef277f3088d7e5db2b1fa43a6ee9aedd28530b7af8d3844`.

Next action: continue through the Fourier page.

### `thm-fourier-basis-and-parseval-on-the-n-torus`

- Decision: `confirmed_fatal` (`dependency_citation`), pre-edit `86b7014ab585d2971e2f6206156a0c2c87befbb7c5bcecce72fff5387004b22a`.
- Exact defect and repair: step 1.1 used one-dimensional character orthonormality without a dependency supplying it. Added the exact lemma to A1 and the dependency list and refreshed the frontier ledger.
- Focused validation: item precheck reported 0 failing and rendercheck passed; post-edit guard hash `e8478236956afd242bbd12bc9732ef075967086c03d47a110d06cf0772babd8c`.

Next action: continue through the Fourier page.

### `thm-hilbert-space-fourier-expansion`

- Decision: `confirmed_fatal` (`dependency_citation`), pre-edit `57e87c92106477cd99004f9de7e60a29bbadb454eace077dc416f2a8541dbdbf`.
- Exact defect and repair: A5 attributed the full complementary-tail identity to finite Bessel and Pythagoras alone. Made the derivation explicitly use Parseval, the finite residual identity, and the nonnegative-family splitting identity.
- Focused validation: item precheck reported 0 failing and rendercheck passed; post-edit guard hash `5a0db0e50631ae12a5255adb293bf1635903b95eb520637a03557198f6b51032`.

Next action: continue through the Fourier page.

### `ex-standard-basis-of-ell-two`

- Decision: `confirmed_fatal` (`logic`), pre-edit `bd416dc3432500d9a4c6b659162ae2953568c9eaa66ce995a960a6dddd6a0135`.
- Exact defect and repair: step 2.1 used a tail bound `ε` as though it were `ε²`; applied tail control at `ε²`. The independent Step-6 warning also correctly found that coordinate limits required scalar completeness, so added the finite-dimensional Banach completeness dependency and made that inference explicit; refreshed the frontier ledger.
- Step-6 warning `s8a-cd3570ad251db24d3fb862cd`: `covered_by_rejection` by this repair.
- Focused validation: item precheck reported 0 failing and rendercheck passed; post-edit guard hash `d420aa2ad46c06ed5d6bc3b8e37e0451701b18a3bcac8f41a086277b2c1ade60`.

Next action: continue through the Fourier page.

### `lem-trigonometric-characters-are-orthonormal`

- Decision: `confirmed_fatal` (`dependency_citation`), pre-edit `2fee113378307da429588f1a355cb4c1b2f4ab673d8c81bb41093c2a01522368`.
- Exact defect and repair: the sine zero-set theorem did not supply `cos(mπ)=(-1)^m`. Added the exact `π`-shift formula and derived the values by integer induction; refreshed the frontier ledger.
- Focused validation: item precheck reported 0 failing and rendercheck passed; post-edit guard hash `4d17f4e8a104ce2d302b4b7e2645b9fd370973f31d7ce0ed9ae3588feafd85d8`.

Next action: continue through the Fourier page.

### `thm-parseval-equivalences-for-a-complete-orthonormal-family`

- Decision: `confirmed_fatal` (`logic`), pre-edit `2774a1804d3ada4a2d94f9591f59a311a3ffb665a20b8bb9ea62b42418a91bed`.
- Exact defect and repair: A4 called the second inner-product argument linear under the complex convention. Replaced that with conjugate-linearity and its additive part, which is exactly what the span argument uses.
- Focused validation: item precheck reported 0 failing and rendercheck passed; post-edit guard hash `1e1865add0aa8a7f0a9ed3a717893c774587b44ab7931ed581377eadf612edea`.

Next action: continue through the Fourier page.

### `ex-adjoints-of-shifts-multiplication-and-integral-operators`

- Decision: `confirmed_fatal` (`dependency_citation`), pre-edit `6661695d5fc1c666aabfa17444db59ececd2f260eacb9da7fb38fcfa400da1b3`.
- Exact defect and repair: the kernel argument repeatedly invoked Tonelli while citing only the `L¹` Fubini theorem. Added the exact sigma-finite Tonelli theorem, corrected the measurable decomposition to positive and negative parts, and refreshed the frontier ledger.
- Focused validation: item precheck reported 0 failing and rendercheck passed; post-edit guard hash `d72f2b423f0a2f2ba04cff6beec2c1a12efe343e59eddbc611de0591ed9f57d7`.

Next action: continue through the Fourier page.

### `ex-standard-inner-products-on-kn-ell-two-and-l-two`

- Decision: `confirmed_fatal` (`dependency_citation`), pre-edit `c4b8388cbeb4934c0239a2fca405d5c22c5469d58a3c3a97db13350eeb716c73`.
- Exact defect and repair: A7 incorrectly claimed the complex `L²` pairing theorem assumed Countable Choice. Assigned choice only to the cited completeness theorems and recorded that the pairing theorem is choice-free.
- Focused validation: item precheck reported 0 failing and rendercheck passed; post-edit guard hash `7b2d4aaa3bea8850351990e81964d2e6497869809972d99a0fd202950ef00a29`.

Next action: continue through the Fourier page.

### `thm-l-two-fourier-series-converges-in-mean-square`

- Decision: `confirmed_fatal` (`logic`), pre-edit `5307118708d0430a671853b4091bc9ca2c3e025995aa209dec3d9d26f2b1c323`.
- Exact defect and repair: the cofinality fact took `max ∅`. Added the empty case `N=0` and restricted the finite-maximum lemma to nonempty finite sets.
- Focused validation: item precheck reported 0 failing and rendercheck passed; post-edit guard hash `dc5fb59e73cba09c74f9f9b057c4e5a7b58582b8231bed69546cd93649b511ea`.

Next action: continue through the Fourier page.

### `thm-separable-hilbert-space-has-a-countable-orthonormal-basis`

- Decision: `confirmed_fatal` (`logic`), pre-edit `6dc93462a0a8b4ed75ca2daf97a3cce6ba32c4b61c490f9699ba5ce87d117244`.
- Exact defect and repair: the cited recursion theorem iterates one fixed self-map, but the update rule depended on the external stage `n`. Put `n` into the recursion state and iterated the fixed map `(n,E)↦(n+1,Φ_n(E))` on `N×P(H)`.
- Focused validation: item precheck reported 0 failing and rendercheck passed; post-edit guard hash `ad48c155e02aea24b481f560b1fc3ba725e2871dc4ee575ec153307405fa54e0`.

Next action: continue through the Fourier page.

### `thm-jordan-von-neumann-polarization`

- Decision: `confirmed_fatal` (`logic`), pre-edit `4ddde627c7b39a335f6f2b1062925d4e52e23f2c46ec659c1122448ae2f6bb93`.
- Exact defect and repair: the stated subtraction of the four parallelogram identities did not yield the displayed Jensen identity. Corrected it to subtract the fourth identity from the third.
- Focused validation: item precheck reported 0 failing and rendercheck passed; post-edit guard hash `346eaa410ad1dc95706f35fb1fe53cb5f2279b27d6b4f3f82fb85c4cc52dd3e9`.

Next action: continue through the Hilbert-space and Fourier pages.

### `thm-completion-of-an-inner-product-space-is-hilbert`

- Decision: `confirmed_fatal` (`logic`), pre-edit `d9dec15088a03b52a3aff4be60092b6634a533153fd6fcf952578ad6b2b5d5a4`.
- Exact defect and repair: density alone did not select two countable approximating sequences in ZF, and the conclusion incorrectly denied that choice use. Explicitly formed the nonempty approximation sets, invoked Countable Choice, and corrected the choice accounting; refreshed the frontier ledger.
- Focused validation: item precheck reported 0 failing and rendercheck passed; post-edit guard hash `17487888ad9085954dfe81c9303fa4c4a2291d74cbdb713ef71128d1002362a1`.

Next action: continue through the Hilbert-space and Fourier pages.

### `thm-double-orthogonal-complement-is-closure`

- Decision: `confirmed_fatal` (`logic`), pre-edit `9f68e7116206cc31197e8834fabcadee0ee551f19dbc84d1352db46fbd0966e0`.
- Exact defect and repair: step 1.2 assumed arbitrary closure points came with approximating sequences and then silently used sequential closedness. Replaced that argument by direct ball approximations for sums and scalar multiples, using only finite choices and the norm axioms; refreshed the frontier ledger.
- Focused validation: item precheck reported 0 failing and rendercheck passed; post-edit guard hash `3dd6ba53186bbd069fb7f51cab759e3f5973c23664853b8e073e9f7cd918044d`.

Next action: continue through the Hilbert-space and Fourier pages.

### `thm-orthogonal-decomposition-by-a-closed-subspace`

- Decision: `confirmed_fatal` (`dependency_citation`), pre-edit `3233aada73ee97a3550071626df263dd2b9a65de5e8385d5a3eb4b36c5bbcdce`.
- Exact defect and repair: A4 attributed sequential closedness to the bare metric-topology definition. The claim and orthogonal-complement closedness were unused, so removed the fact and its dependencies and refreshed the frontier ledger.
- Focused validation: item precheck reported 0 failing and rendercheck passed; post-edit guard hash `5ae496a305baee93536d1cd0d5a37a0814d8b3bd4da7eab02dfb3292c9f7d127`.

Next action: continue through the Hilbert-space and Fourier pages.

### `lem-orthogonal-projection-is-linear-self-adjoint-contractive`

- Decision: `confirmed_fatal` (`logic`), pre-edit `4cf1a1c259067cd0f98e304bbb1239e0f2a72348342913de7871e454a2e45599`.
- Exact defect and repair: step 3.1 called the second inner-product argument linear under a convention where it is conjugate-linear. Replaced the false property with additivity, which is exactly what the expansion uses.
- Focused validation: item precheck reported 0 failing and rendercheck passed; post-edit guard hash `d4eb75a0d9e8d52dc4d454b4952448107a4b1185b6a45a86d2a9274c138315ee`.

Next action: continue through the Hilbert-space and Fourier pages.

### `thm-hilbert-adjoint-properties`

- Decision: `confirmed_fatal` (`logic`), pre-edit `2e6cacae16d6cf9d69698feae0e023291aae44a3b4b2c79f65e308bc671f960c`.
- Exact defect and repair: the linearity identity attempted to add `T:K→L` and `S:H→K`. Introduced same-typed `R,S:H→K` for the linearity clause and type-corrected the uniqueness, composition, and double-adjoint pairings throughout.
- Focused validation: item precheck reported 0 failing and rendercheck passed; post-edit guard hash `f8772c4d0940409f16e5725ce02679db7ce091d1c50af9f324f5df946170c1f6`.

Next action: continue through the Hilbert-space and Fourier pages.

### `lem-inner-product-is-jointly-continuous`

- Decision: `confirmed_fatal` (`dependency_citation`), pre-edit `f060229784a2a7d002d340da7c3d7defdd79b26913bcd62327aeef22b9588e61`.
- Exact defect and repair: the proof used openness of metric balls to produce a product-open neighbourhood but cited only the definitions of balls and metric topology. Added the exact open-ball theorem and refreshed the frontier ledger.
- Focused validation: item precheck reported 0 failing and rendercheck passed; post-edit guard hash `745bc6e7e1cfb0bba8ba409ced9a4165c9d51833cd7c12ee6a41752cc63138ad`.

Next action: continue through the Hilbert-space and Fourier pages.

### `thm-riesz-fischer-for-fourier-coefficients`

- Decision: `confirmed_fatal` (`dependency_citation`), pre-edit `bb9367c15db13295d724c157fb840a580f3f8295c93e81fb55d0fd8b6eef27f3`.
- Exact defect and repair: the coefficient-isometry theorem supplied surjectivity but did not state convergence of the symmetric partial sums. Added the Hilbert-space Fourier-expansion theorem and proved that the symmetric integer intervals are cofinal among finite subsets of `Z`.
- Sources consulted: repository items `thm-hilbert-space-with-a-given-orthonormal-basis-is-ell-two-of-the-index-set` and `thm-hilbert-space-fourier-expansion`, exact Statements. No web source was needed.
- Focused validation: refreshed the frontier dependency ledger; item precheck reported 0 failing and rendercheck passed; post-edit guard hash `21a6a208c6540f04676fda12d679d54ee52da1e6efa38a060693e995ef1c36ba`.

Next action: adjudicate the compact-operator and Hilbert–Schmidt rejections.

### `lem-kernel-of-identity-minus-compact-is-finite-dimensional`

- Decision: `confirmed_fatal` (`dependency_citation`), pre-edit `9878207a56cb2dbd6fbe7b403a7bd370e1bcdec3eaa00ad11013f393fe655a4a`.
- Exact defect and repair: compactness of the kernel unit ball uses its closedness, but the metric-ball definition only defines the set. Added `thm-metric-open-set-algebra`, whose fourth claim is exactly that closed metric balls are closed.
- Focused validation: refreshed the frontier dependency ledger; item precheck reported 0 failing and rendercheck passed; post-edit guard hash `737d1ae64868512183d5d9bcbd252dd44f78cdd5fee83be90edc9b065c03cb4d`.

Next action: continue the compact-operator cluster.

### `thm-hilbert-schmidt-norm-is-basis-independent`

- Decision: `confirmed_fatal` (`logic`), pre-edit `7cdbd6e793d7bc6549620134910789fc024edce5ebfd0b5c0efeafc145fed256`.
- Exact defect and repair: claim 3 called three Hilbert–Schmidt norms `+infinity` even though the supplied definition leaves them undefined when the defining sum diverges. Replaced that inconsistent clause by the simultaneous nonmembership and undefinedness already proved in step 5.1.
- Focused validation: item precheck reported 0 failing and rendercheck passed; post-edit guard hash `83544e4c007465ee28bf2233a3f1b37cf42050c979dbb11fcfeb60906a4fe352`.

Next action: continue the Hilbert–Schmidt kernel cluster.

### `ex-square-integrable-kernel-without-continuous-representative`

- Decision: `confirmed_fatal` (`dependency_citation`), pre-edit `27bae89c5c12c0ffabc4f6cea5a2d63ac76c065ac7eece7b19e3c3921e51b730`.
- Exact defect and repair: the positive-measure-ball argument restated its cited box theorem only for `[0,1]` and `[0,1/2]`, so arbitrary small rectangles were unsupported. Recorded the theorem's full arbitrary nondegenerate interval conclusion and applied it to the two factors of the rectangle inside each relative ball.
- Focused validation: item precheck reported 0 failing and rendercheck passed; post-edit guard hash `20e5f21fbba7480c60b851eaf95c81c7599ee34d8a30f1d727fff9a83e9a1cca`.

Next action: finish the Hilbert–Schmidt kernel cluster.

### `thm-l-two-kernels-give-hilbert-schmidt-operators`

- Decision: `confirmed_fatal` (`logic`), pre-edit `8ae4be4c40d9a9a92445233b27f33448d5661c8d4e89050fd90664a1a62c3c3e`.
- Exact defect and repair: the reverse completion-integral inequality replaced a completed-simple minorant by a merely measurable representative, which need not remain simple. Replaced that step by transferring each of the finitely many completed level sets to its base-measurable completion core; the resulting base-simple function stays below the original minorant and has exactly the same simple integral. Also corrected the measurability paragraph to use positive and negative parts rather than falsely calling signed functions nonnegative.
- Focused validation: item precheck reported 0 failing and rendercheck passed; post-edit guard hash `96e131fc253f703be57c8fea49dd6a20db5072f66c95e544badd3a930c8d92f8`.

Next action: continue the Hilbert–Schmidt kernel cluster.

### `ex-square-integrable-kernel-finite-rank-truncations`

- Decision: `confirmed_fatal` (`logic`), pre-edit `0f5443de6e941709f48a5253afcff98ab50b3486eacfd9222c174623bd29b5ad`.
- Exact defect and repair: the purported ordered basis was indexed by the arbitrary finite subset `J`, not by a von Neumann natural as the ordered-basis interface requires. Increasingly enumerated `J` as `j_0,...,j_(r-1)` and used the actual finite list `(e_(j_q))_(q<r)`.
- Focused validation: item precheck reported 0 failing and rendercheck passed; post-edit guard hash `b33b97509b94c581d695a6065b58d9833363fa2c1791afe02810f950a164e7cd`.

Next action: continue the Hilbert–Schmidt kernel cluster.

### `thm-riesz-schauder-spectrum-of-a-compact-operator`

- Decision: `confirmed_fatal` (`dependency_citation`), pre-edit `500329d7f7a900711421a2f3e6aa20a50d7b2378a5053c12f6d23c6e3d136553`.
- Exact defect and repair: the finite-cover proof requires its isolating metric balls to be open, but the ball definition only defines them. Added the exact metric open-ball theorem.
- Focused validation: refreshed the frontier dependency ledger; item precheck reported 0 failing and rendercheck passed; post-edit guard hash `71873a479a9a67f4439e9201824e32c2924432f4b898c20ed067060f4facef8f`.

Next action: finish the continuous-kernel item, then adjudicate Hilbert–Schmidt items.

### `ex-continuous-kernel-integral-operator-is-compact-on-c-of-an-interval`

- Decision: `confirmed_fatal` (`dependency_citation`), pre-edit `be4f32be99824d5b68435c418533c955404e2554eadd8f9a0e96e757f249eb22`.
- Exact defect and repair: the complex integral was described as a Riemann real/imaginary extension while citing a Lebesgue definition. Defined that complex Riemann convention locally, cited real Riemann integrability and linearity, and corrected the componentwise norm/equicontinuity estimates to a safe factor `2`.
- Focused validation: refreshed the frontier dependency ledger; item precheck reported 0 failing and rendercheck passed; post-edit guard hash `6608264cae45d9f094ec931c71d0501fd30e97b93d84df065d3a82dfeea3f69e`.

Next action: adjudicate the Hilbert–Schmidt items.

### `thm-fredholm-alternative-for-identity-minus-compact`

- Decision: `confirmed_fatal` (`logic`), pre-edit `2de9f90ebd7d8ad56790bf106796c9a263f30db7662cebde3ba2365ec9046008`.
- Exact defect and repair: the stabilization exponent could be zero, invalidating `Ax=0 => A^m x=0`. Used the stabilization theorem’s every-larger-exponent clause to choose `m>=1`.
- Focused validation: item precheck reported 0 failing and rendercheck passed; post-edit guard hash `5a1be39e6bc9efd76877d659a6cb7a8a65b4a6287a680745e8b3fcb661d5137d`.

Next action: continue the compact-operator cluster.

### `thm-fredholm-index-is-locally-constant`

- Decision: `confirmed_fatal` (`logic`), pre-edit `0a9cc7f8efc719bd911cd7837c2b652ee10081fef0b95f9967f7acfd1596da08`.
- Exact defect and repair: the block entries used domain order `X_1,N` while the prose declared `N,X_1`, making the factorization ill-typed. Explicitly reordered the domain splitting before defining every block.
- Focused validation: item precheck reported 0 failing and rendercheck passed; post-edit guard hash `418c4b3fd5d267d63d260ab225f959570c5afdbb272f60124b9a864a061723ec`.

Next action: continue the compact-operator cluster.

### `lem-a-compact-remainder-estimate-forces-closed-range`

- Decision: `confirmed_fatal` (`logic`), pre-edit `2df4d117f968f0e749ad07bc96a1904f88da25218d92efc1ec4bca363918962d`.
- Exact defect and repair: pointwise normalized-witness existence was promoted to a sequence without choice. Invoked the item’s existing DC-implies-Countable-Choice dependency and applied it to the witness sets before compactness.
- Focused validation: item precheck reported 0 failing and rendercheck passed; post-edit guard hash `804cd319e1d920139fe8c9adf4dce10fe11659ae8a3245eaa43cc426b15db777`.

Next action: continue the compact-operator cluster.

### `thm-fredholm-index-is-stable-under-compact-perturbations`

- Decision: `confirmed_fatal` (`logic`), pre-edit `2ae87089946ba3d874c45b36e5fd0084fca8c146b589e9676d9412c14af24050`.
- Exact defect and repair: the clopen argument invoked a relative-topology criterion absent from the cited connectedness interface and gave an incorrect closure justification. Derived explicit relative neighbourhoods from local constancy and verified both ambient closure-separation conditions directly.
- Focused validation: refreshed the frontier dependency ledger; item precheck reported 0 failing and rendercheck passed; post-edit guard hash `48735f258be4d4b34ec2f9d9ec73ac468cede8f07b79110e4cac7613e748c19f`.

Next action: continue the compact-operator cluster.

### `lem-range-of-identity-minus-compact-is-closed`

- Decision: `confirmed_fatal` (`logic`), pre-edit `6a9e59e8cc1e514cdf9b286b18fc5f4b1da787680cd6a5e6c9530d595afcb5cc`.
- Exact defect and repair: pointwise witness existence was silently converted into a witness sequence. Defined the nonempty sets `W_n` first and invoked Countable Choice supplied by DC before applying sequential compactness.
- Focused validation: refreshed the frontier dependency ledger; after adopting canonical step numbering, item precheck reported 0 failing and rendercheck passed; post-edit guard hash `5d0167ea7d65bc7ea54ef49f13d494bc50e29fbf515987c329e291316902665b`.

Next action: continue the compact-operator cluster.

### `cex-identity-is-compact-iff-the-space-is-finite-dimensional`

- Decision: `confirmed_fatal` (`dependency_citation`), pre-edit `d5c868ee98c70e2ca92679a2dfe4367668648b193659c8fba4533fe327be3e22`.
- Exact defect and repair: the proof identified the closed unit ball with its closure without a theorem establishing that the ball is closed. Added the exact closed-ball theorem and removed the inapposite metric-compactness citation.
- Focused validation: refreshed the frontier dependency ledger; item precheck reported 0 failing and rendercheck passed; post-edit guard hash `c5542697ea8128dce615da8117e957f126ab2b97bd9af175cd6981355d546a48`.

Next action: continue the compact-operator cluster.

### `lem-riesz-schauder-ascent-and-descent-stabilize`

- Decision: `confirmed_fatal` (`logic`), pre-edit `54516dba10a7aa31d8d16040fb2f5ba48d99b9cd46a341d3afa1b81d54238e25`.
- Exact defect and repair: Riesz’s lemma was not applied inside `ker A^(n+1)`, so the later-used membership was absent. Applied it in that subspace, established the smaller finite-dimensional kernel is closed, and explicitly invoked DC-implied Countable Choice for both witness sequences.
- Focused validation: refreshed the frontier dependency ledger; item precheck reported 0 failing and rendercheck passed; post-edit guard hash `884d4ababc9b411cd803e658bd471d7923ee8ce8078ac42da32521ab30150fcd`.

Next action: continue the compact-operator cluster.

### `ex-fredholm-alternative-for-an-integral-equation`

- Decision: `confirmed_fatal` (`dependency_citation`), pre-edit `43fc96e2353d03652af073f7986a1ccfe05f9b5c52e0707a561d0240e4375872`.
- Exact defect and repair: the real-only norm definition did not license the complex normed-space structure used by Fredholm theory. Added the complex norm convention and the exact finite-dimensional completeness result for the scalar field.
- Focused validation: refreshed the frontier dependency ledger; item precheck reported 0 failing and rendercheck passed; post-edit guard hash `c77b85e23381be4bd3779ac0660f06ad9a6da4315525fb8db55f07e38aedc620`.

Next action: continue the compact-operator cluster.

### `lem-dependent-choice-implies-countable-choice`

- Decision: `confirmed_fatal` (`logic`), pre-edit `d4e1828fba2dc2cd7a4a99cc89be80b9ad26436aee4dac9ee0ed65d6a5d33473`.
- Exact defect and repair: the index-domain selector was incorrectly called a choice function on the set of member sets; repeated members make those domains different. Distinguished the notions and used the least occurrence index to construct the actual member-set choice function.
- Focused validation: refreshed the frontier dependency ledger; after adopting the precheck’s canonical step numbering, item precheck reported 0 failing and rendercheck passed; post-edit guard hash `85aacacb155957cd5fcd5f8998cbc080da69e914e3db912631771ec7f173f8f4`.

Next action: continue the compact-operator cluster.

### `thm-compact-operator-sends-weakly-convergent-sequences-to-norm-convergent-sequences`

- Decision: `confirmed_fatal` (`dependency_citation`), pre-edit `3fa8ea3ef5367cd523d7c8d073d86efec2dc02dfbda758427345c9af56de2a7f`.
- Exact defect and repair: uniform boundedness was applied to operators on `X*` without establishing that domain is Banach. Added the exact continuous-dual completeness interface.
- Focused validation: refreshed the frontier dependency ledger; item precheck reported 0 failing and rendercheck passed; post-edit guard hash `b75aa891da51d55b62461a5af929a29d9fa34e0b3176e9b1d28e5b5ac3b356e2`.

Next action: continue the compact-operator cluster.

### `lem-compositions-with-a-compact-operator-are-compact`

- Decision: `confirmed_fatal` (`dependency_citation`), pre-edit `847f3fc7af34676be9874213c462b4ba8e0ceb015097419cbd85bf6bc1a2d16a`.
- Exact defect and repair: the proof cited compact-implies-closed for the converse hereditary compactness fact. Added `lem-closed-subset-of-a-compact-space-is-compact` and directly cited `def-operator-norm` for the pointwise norm estimate.
- Focused validation: refreshed the frontier dependency ledger; item precheck reported 0 failing and rendercheck passed; post-edit guard hash `89e09b2a4fc0f8727cbd2c33038c024ffc9c64d1115497739defb79f90d0f428`.

Next action: continue the compact-operator cluster.

### `def-spectrum-and-resolvent-of-a-bounded-operator`

- Decision: `confirmed_fatal` (`logic`), pre-edit `3a4064cee698b8fb7e871d1bd121a655b9fabf1c0c589d915d4ed9c3616342b3`.
- Exact defect and repair: algebraic multiplicity was defined only for finite-dimensional generalized eigenspaces but then asserted for every eigenvalue. Made the comparison conditional on finite dimensionality and supplied the eigenspace inclusion that proves it.
- Focused validation: definition precheck reported 0 failing and rendercheck passed; post-edit guard hash `c8650441a4b212cb450dbbf17eecf7a2dc35368d2b61bea775d1f83fd4467deb`.

Next action: continue the compact-operator cluster.

### `def-fredholm-operator-cokernel-and-index`

- Decision: `confirmed_fatal` (`logic`), pre-edit `91ca08d97e059c32041b22e5a891486f8a08bfc9067aff1a581ede5acf56ea73`.
- Exact defect and repair: the dimension interface requires its scalar field, but the index formula used bare `dim`. Named the common field and wrote both dimensions as `dim_F`.
- Focused validation: definition precheck reported 0 failing and rendercheck passed; post-edit guard hash `19c7c422be4d06f3ff7b9778ddef52dafc35db610308604c05366c1555ab2428`.

Next action: continue the compact-operator cluster.

### `lem-neumann-series-and-small-perturbations-of-bounded-inverses`

- Decision: `confirmed_fatal` (`dependency_citation`), pre-edit `c6bd5069a56cb6b0b6a8f309dc0eadab8a85622f810c46188621c19b44bf2b87`.
- Exact defect and repair: the Banach-series criterion guarantees convergence but does not state the norm-of-sum bound. Proved the finite-partial-sum bounds by the triangle inequality and passed to the limit using norm continuity from the reverse triangle inequality.
- Focused validation: refreshed the frontier dependency ledger; item precheck reported 0 failing and rendercheck passed; post-edit guard hash `b27ccf174c460a4f4e2b3efca9859a1d664294237fae421e2ba1e3d4dad13d79`.

Next action: continue the compact-operator cluster.

### `lem-linear-combinations-of-compact-operators-are-compact`

- Decision: `confirmed_fatal` (`dependency_citation`), pre-edit `c7cb135d188b15de2f03c2aabe735e2c107dafdf36013e5eae789f846b4c2afa`.
- Exact defect and repair: `def-bounded-linear-operator` does not define the operator norm or the sharp norm inequality, and the closure argument also needs closed subsets of compact metric spaces to be compact. Added and cited `def-operator-norm` and `lem-closed-subset-of-a-compact-space-is-compact`.
- Focused validation: refreshed the frontier dependency ledger; item precheck reported 0 failing and rendercheck passed; post-edit guard hash `033773e823a966e6db3a44ed5165ff2e5271d76fc90e38a7de9a5c67de1049e5`.

Next action: continue the compact-operator cluster.

### `ex-square-integrable-separable-product-kernel`

- Decision: `confirmed_fatal` (`logic`), pre-edit `32bd6e0f575b692c270f452549dcac95d875a4c72fcfcc28744d278f7004aec6`.
- Exact defect and repair: the kernel operator is an `L2` class, so its section formula is only an almost-everywhere identity, not a pointwise identity for every `x`. Repaired the statement and verification to use `mu`-almost everywhere, and made the range-basis argument correctly distinguish the case where either factor is zero.
- Focused validation: item precheck reported 0 failing and rendercheck passed; post-edit guard hash `08190e6bbd4200c5b35e4a31e1603d06d89064404f087fb6c211508f006ddc11`.

Next action: continue the Hilbert–Schmidt kernel cluster.

### `lem-product-rectangle-kernels-are-dense-in-product-l-two`

- Decision: `confirmed_fatal` (`logic`), pre-edit `df01dc004706689c63dc321c4bf779a6e2c15d12c31c33d9ccbf9a14ca4c87a2`.
- Exact defect and repair: fact F8 assigned an `L2` class and norm to every indicator even when its set has infinite measure. Restricted the indicator assertion to finite-measure sets and the difference assertion to finite symmetric differences; every use in the proof satisfies those conditions.
- Focused validation: item precheck reported 0 failing and rendercheck passed; post-edit guard hash `43a46677faf87a20dc214355f406fbbeb70fe17aa2397996847276e473009a59`.

Next action: close the remaining Step-6 reader-warning dispositions and assemble the defect ledger.

## Remaining Step-6 reader-warning dispositions

- `s8a-40965c6dceb6f12bd4527b4b` (`def-hilbert-space-adjoint`): `nonfatal`. The exact typed Riesz-conjugation formula is correct; the closing comparison with the Banach transpose is imprecise presentation only, so fatal-only Step 7 made no edit.
- `s8a-c5897e92e6f8d22700af2267` (`thm-hilbert-projection-variational-characterization`): `nonfatal`. Countable Choice is stronger than the supplied-point equivalence needs, but both implications are valid and the proof expressly identifies the choice-free core.
- `s8a-8e970f8ab86eae17d8bfa11a` (`def-spectral-multiplicity-function-in-the-separable-case`): `not_defect`. The construction labels its raw data decomposition-dependent; the subsequent intertwiner establishes invariance before classification uses it, so the organization is not circular.

Next action: assemble and validate the required defect-ledger rows.


## Closure summary

- Adjudicated all 95 owned judge rejections: 91 `confirmed_fatal`, 3 `confirmed_nonfatal`, and 1 `false_positive`. Every fatal item was repaired and passed its focused item precheck/rendercheck; all 91 fatal items are rejudge targets. The engine owns the rejudge, and none was initiated here.
- Dispositioned all eight owned Step-6 reader warnings: four `covered_by_rejection`, three `nonfatal`, and one `not_defect`.
- Recorded 91 mathematical defects through the prescribed defect-ledger append interface. Twenty-five superseding correction rows replace judge-form provenance digests with the immutable pre-Step-7 guard digests; they do not change any decision or repair. `defect-ledger validate` and `defect-ledger check` each reported 786 run rows checked and 0 errors in the final invocation.
- Refreshed the unified frontier dependency ledger after dependency edits and once more at closure.
- No new lemmas, published-item repairs, cross-group alerts, or external web sources were needed.
- The fatal-only guard now licenses every group-c edit. Its final global invocation remained nonzero only for other groups' items: malformed/unlicensed evidence for `ex-sweet-amalgam-over-a-common-complete-subalgebra` and an unlicensed edit to `def-classical-complex-matrix-lie-algebras`.
- The Step-7 scope check accepts all group-c decisions. Its final global invocation remained nonzero for 20 undispositioned Step-6 alerts owned by groups a and e: `s8a-4454bbe082772fc44e0e7520`, `s8a-32a5894c99c2e337c193ecbd`, `s8a-957adcaa2f669c513daa2534`, `s8a-0c4f5daa7b7ad293b0e3bfbd`, `s8a-6620c22509cb5bf85dd67ba3`, `s8a-912c4448ec9268d07012201a`, `s8a-86041504bf6d2fcc5e6f5825`, `s8a-6b82815b3d101b985142a511`, `s8a-d8db0ad2543ea7799a6ff7fb`, `s8a-2d8c48ec90229bcaf82b2c3f`, `s8a-266a9a4c5a85e2e016394b1d`, `s8a-ec870d980f5276b76506b70d`, `s8a-ca824311788e232f38dcc36a`, `s8a-bc74725cf03dc8489a16047a`, `s8a-855e17bcad2d1e9c25d40ad4`, `s8a-1fb518e7fb1d4fb4ceb8668e`, `s8a-ca1bd3129306695006bee125`, `s8a-d37abfcfbcb27418abfb7b32`, `s8a-071b5ee7ed3b0b8a77c3cd10`, and `s8a-1ebb02de9a4c307923f578ae`.

## Group-c blockers

None. The remaining red gates above are run-wide issues outside group c.
