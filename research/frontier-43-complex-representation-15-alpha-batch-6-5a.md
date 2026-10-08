# Step 5a adjudication — batch 6

Run: `frontier-43-complex-representation-15`. Group: `batch-6`. Scope: batch 6 only. Engine owns hashes, gates and transitions; no judge or certification was run.

Initial evidence: exact order task, scope, reader-6 and reader-findings-6, refute-6, pre/post hash inventories, current contract and manifest. Reader findings are empty; 14 touched obligations and flagged:6:1 are owed. Initial risk-report exited 0, reporting 23 HIGH/CRITICAL items. Metadata-only contract deltas are distinguished from eight mathematical item deltas.

## `def-symmetrizable-cartan-datum-for-a-quantum-group`

Reviewed the full current Definition and all six prerequisite interfaces. The finite nonempty GCM, positive integer symmetrizer, independent coroots and freely independent roots specify a datum; neither perfect pairing nor spanning coroots nor fundamental weights are assumed. Singular matrices are permitted. The minimal-realization supplier asserts existence and isomorphism, not a canonical toral lattice. Pre/post item hashes agree; the reader corrected only the contract zero-case reference to the pairing, before toral generators are defined. No mathematical carrier defect or new AC use.

Risk review: complete. Verdict: `reviewed_no_defect`.

## `lem-nonsingular-principal-minor-of-the-symmetrized-cartan-matrix`

Read all six proof steps and exact matrix prerequisite statements. The r=0 case explicitly supplies the empty determinant convention. For r>0 a maximal invertible principal block exists in a finite family. One-index Schur complements kill the complementary diagonal; two-index complements with symmetric inverse have determinant -t^2 and kill every off-diagonal over R. The block factorization bounds row rank above by |J|, and its nonzero minor bounds rank below. Positive diagonal scaling transfers the determinant and corank claims. No positivity of B, finite-type assumption or AC is needed. No routed defect and no edit.

Risk review: complete. No touched/finding obligation.

## `def-quantum-integers-factorials-and-divided-powers-at-q-i`

Read Definition and Verification 1.1–3.1 against the asymmetric multinomial supplier. Positive d_i and indeterminate q make all positive-index numerators and factorials nonzero; [0]=0 and [0]!=1 are separate. Multiplying finite geometric expansions gives exponent -r(m-r), including m=0 and r=0,m. Inversion q_i -> q_i^{-1} preserves symmetric quotients. Pre/post item hashes agree; reader only corrected the contract to assert nonzero numerator at positive indices. No signed-index claim is present.

Risk review: complete. Verdict: `reviewed_no_defect`.

## `lem-a-two-sided-coideal-in-an-enveloping-algebra-is-generated-by-its-primitive-part`

Reviewed Proof 1.1–5.1 with exact PBW, filtration, symmetric universality, basis/AC, augmentation and quotient interfaces. Filtration splits give the graded coideal. After modding out the primitive part, induction makes symbols primitive in S(l/j); multiplying the (n-1,1) component gives nf, so char 0 kills degrees n>=2. In 4.1, containment of both generated ideals in J bounds their graded spaces above; PBW lifts bound them below, closing the reader omission. Descending filtration induction proves both left/right equalities and uniqueness. Augmentation excludes J=U(l), and l=0 gives only J=0. AC is explicitly used for arbitrary basis, ordering and filtration splits. The reader correction and remark locator corrections are accepted; no Statement change.

Risk review: complete. Verdict: `amended_repair` (reader mathematics retained; manifest/contract synchronized).

## `thm-root-graded-manin-triple-gives-dual-lie-bialgebras`

Reviewed all four steps and exact Lie, exterior and locally finite Manin-triple definitions. Same-side finite degree decompositions and perfect finite-piece pairing give actual exterior-square cobrackets, without completing the whole double. Mixed bracket coefficients follow from invariance with the displayed signs. Transposed opposite Jacobi gives co-Jacobi; pairing mixed Jacobi with the opposite basis gives the displayed cocycle coefficient identity in both signs. Basis choices are only in finitely many finite-dimensional pieces for each calculation, so no arbitrary family choice is required. Zero pieces pose no problem. No edit.

Risk review: complete. No touched/finding obligation.

## `def-drinfeld-jimbo-quantized-enveloping-algebra`

Reviewed Definition and all four Verification steps against tensor universality, ideal and quotient suppliers. K_i means K_{d_i h_i}, not K_{h_i} for general d_i; inverses follow from toral relations. Denominator nonvanishing uses q indeterminate. Both Serre sums are homogeneous; the mixed delta term has degree zero exactly when i=j. Finite word supports give a homogeneous ideal and direct-sum grading; factorization preserves scalars by quotient surjectivity. No injectivity/PBW claim is smuggled into the definition. No edit.

Risk review: complete. No touched/finding obligation.

## `lem-opposite-symmetrizable-kac-moody-borels-are-root-degreewise-dual-lie-bialgebras`

Read Proof 1.1–3.1 and each of the 17 supplier interfaces. The principal rank block gives an isomorphism after projection onto J and complementary Cartan lifts D_j. Minimal dimension makes those lifts a complement. Finite words and root-cone decompositions bound every enveloping root piece. Enumeration of bracket words supplies bases without AC; characteristic-zero symmetrization transports the averaged finite-tensor pairing, which is a vector-space pairing only. The form on g plus its abelian Cartan copy makes diagonal/antidiagonal Borels complementary isotropic. The factor 1/2 in the root pairing yields delta(e_i)=d_i e_i wedge h_i, as checked against f_i wedge h, and delta(h)=0. Full-rank/empty complement and degree-zero unit cases are handled. No edit.

Risk review: complete. No touched/finding obligation.

## `lem-quantum-pascal-recurrence-and-gaussian-integrality`

Read all five steps with exact symmetric/asymmetric Gaussian and polynomial/Laurent interfaces. The numerator identity yields both Pascal forms by symmetry; r=0,m and all out-of-range integers obey the zero convention. Rescaling by q_i^{r(m-r)} gives polynomial recurrence G_{m,r}=G_{m-1,r}+q_i^{2(m-r)}G_{m-1,r-1}. Product induction has the stated exponent and works at N=0 as 1; alternating cancellation requires N>=1. q transcendence makes Laurent evaluation injective. No denominator or endpoint defect; no edit.

Risk review: complete. No touched/finding obligation.

## `def-formal-quantum-shuffle-borel-for-a-symmetrizable-cartan-datum`

Reviewed Definition (a)–(c), all 11 proof steps and the 17 exact prerequisite interfaces. Triple-block shuffle inversions prove associativity. Color-count derivations commute and give the Ore multiplication. Each fixed word component is finite free; the least-order ideal/unit argument makes C[[hbar]] a PID and generated-word submodules finite free, so tensoring with A_C gives complete fixed-color components. The reader correction completes tensors separately in each total color degree, retaining finite degree support in the direct-sum algebras; the unrestricted completion would have an ill-typed multiplication target. The word-cut coproduct has matching cross-cut weight, crossed commutators are compatible, and exponentials are grouplike. Lexicographic word/Cartan recursion constructs both antipode inverses, whose uniqueness gives antimultiplicativity and restriction. The Serre map remains conditional here. No perfect original toral pairing or whole-direct-sum completeness is assumed; no AC. Accepted the coherent completion repair and its three added PID/series prerequisites.

Risk review: complete. Verdict: `amended_repair` (reader mathematics retained; manifest/contract synchronized).

## `def-positive-negative-and-toral-quantum-subalgebras`

Reviewed Statement and five proof steps with all three supplier interfaces. Homogeneous word spans give direct half gradings; finite toral products give the surjection from the locally defined group algebra. Step 1.4 proves conjugation by each K_h has scalar q^{beta(h)}, whereas multiplication by arbitrary toral elements is not this action. The reader Statement clarification now specifies exactly that conjugation. Degree-zero toral inclusion asserts neither equality with the full degree-zero space nor independence. No new injectivity claim or choice. Accepted the clarification; direct consumers must be checked against this unchanged conjugation formula.

Risk review: complete. Verdict: `amended_repair` (reader mathematics retained; manifest/contract synchronized).

## `lem-q-binomial-expansion-for-q-commuting-elements`

Read all four proof steps against exact Gaussian suppliers. Inverting t gives exponent -r(N-r). Injective substitution t=q_i^2 transfers Pascal to Q(t). Right multiplication by x+y with y^a x=t^a xy^a yields precisely t^{N-r}, including N=0 and r endpoints. This proves the x^r y^{N-r} ordering and both commutation conventions without commutativity assumptions on A or root-of-unity specialization. No edit.

Risk review: complete. No touched/finding obligation.

## `lem-coproduct-preserves-the-positive-and-negative-quantum-serre-ideals`

Reviewed all ten steps with every exact supplier interface, before and after the toral-action quotient. x=E_i tensor K_i^{-1}, y=1 tensor E_i satisfy yx=q_i^2xy. In 4.1, the factorial cancellation and crossings give (r+a+2t)M+(M-1)k; in 4.2 the exponent ru+tv+t(a+2u) becomes k(u+1-k)+(k-1)r with t=k-r and a+u+v=1-k. Thus the reader-added q_i^{k(u+1-k)} is necessary for the printed coefficient and independent of the cancellation index. M>0 and k>0 cancel, while M=0 and k=0 survive with precisely the displayed grouplikes. The signed generator map and flip transport the negative formula; algebra-map ideal closure proves the coideal assertion. Rank-one no-pair, a=0, and extreme bidegrees are included. Accepted the coefficient repair; Statement unchanged.

Risk review: complete. Verdict: `amended_repair` (reader mathematics retained; manifest/contract synchronized).

## `lem-quantum-serre-sums-vanish-in-the-formal-quantum-shuffle-algebra`

Reviewed all eight proof steps against all five exact suppliers. Repeated-letter shuffle factors A_m and the three-block coefficient use t=q_i^{-2}. The separated u/v sums in 2.1 each become a finite Gauss product; p+Q=N>=1 makes one vanish even at endpoints. Word pairing has multiplicative hbar^{-k} length weight. Inversion of permutations preserves symmetric letter weights and proves M(t,p)=M(p,t); positive Serre cancellation therefore gives opposite annihilation. The braided cut coproduct maps the generated half into its tensor square, making its annihilator a two-sided ideal; no unsupported prefix membership or full-Sh radical is asserted. Degree zero/unit pairing and a=0 are compatible. Pre/post item hashes agree; the reader refreshed contract source excerpts only.

Risk review: complete. Verdict: `reviewed_no_defect`.

## `lem-the-generic-borel-half-and-opposite-half-form-a-dj-crossed-double`

Read every step and all eight supplier interfaces. Proof 1.1 actually rewrites K_hF_j to q^{-alpha_j(h)}F_jK_h. Raw/Judge item hash da2f596c392de4a2eed9f4e5ea7768f7bf1bb50d5416ce592539baf326aeb421 agrees with both immutable pre/post snapshots and the Step-5 baseline. The refuter quoted a different right side. With the printed correct rule the (E/F count, F<K<E inversion count, toral count) measure strictly decreases. All overlapping and zero-torus rules join in 2.1; induction defines a linear normal-form inverse on arbitrary sums. Both opposite-generator Serre commutators vanish by finite Gaussian cancellation; toral homogeneity then makes the sum of factor ideals two-sided. Repeated right exactness identifies the tensor quotient, and positive-height Serre ideals preserve the unit, proving injective factor maps and unique transported multiplication. No nonsingularity or AC needed. The touched change is only contract excerpt refresh, accepted as audit enrichment; flagged:6:1 is separately false_positive without an item edit.

Risk review: complete. Verdict: `reviewed_no_defect`.

## `thm-the-drinfeld-jimbo-formulas-define-a-hopf-algebra`

Reviewed all 15 proof steps and 13 exact suppliers, including convolution uniqueness and right-exact tensor kernel. Coideal inclusion is derived from the kernel of pi tensor pi, rather than assumed in the free presentation. Toral, mixed and both Serre relation families are checked separately. In 2.3 the positive right-toral crossing exponent is m(m-1+a)=0; the negative exponent is m(m+1+a)=2m with extra q_j^2. Hence the repaired formulas -Serre+ K_i^m K_j and -q_i^{2m}q_j^2 Serre- K_i^{-m}K_j^{-1} are correct before imposing Serre. Coassociativity/counits extend as algebra-map identities, while the two convolution equations extend by the explicit word induction in 5.2. S-square matches the chosen inverse-K positive coproduct; no involutivity is claimed. Rank-one no-Serre and zero-edge cases work. Accepted reader computations; Statement unchanged.

Risk review: complete. Verdict: `amended_repair` (reader mathematics retained; manifest/contract synchronized).

## `thm-the-formal-quantum-serre-half-embeds-in-the-quantum-shuffle-algebra-and-is-degreewise-free`

Reviewed all ten steps and 28 exact suppliers. Reader 1.1 correctly uses identity on the entire completed coefficient algebra A_C, since polynomial Cartan generators do not algebraically generate it. Only the reduced map is asserted Hopf. Its augmented coideal kernel invokes the AC supplier in 3.1. In 3.2, generated-half finite freeness and coefficientwise Cartan tensors establish torsion-freeness before any divisions. The coassociative cocommutator identity gives co-Jacobi after division by hbar^2; the difference of algebra-map commutator identities gives the primitive cocycle rule. The computed cobracket agrees with the rescaled Manin pairing; graded dual image contains Cartan and every f_i, hence the full opposite Borel and kernel zero. Finite PID components M=R^p plus t cyclic torsion summands have d=p+t; surjection onto rank-d free N forces p>=d, so t=0 and p=d. Unit determinant proves degreewise isomorphism, separately handling d=0 and alpha=0. q-prime -> exp(hbar) is injective by (q-prime-1)-order; finite Laurent presentation minors preserve rank under the field embedding. Accepted both reader proof corrections and the AC locator change.

Risk review: complete. Verdict: `amended_repair` (reader mathematics retained; manifest/contract synchronized).

## `cex-unsymmetrized-q-parameters-break-the-cartan-normalization`

Reviewed all six Counterexample steps and all four exact suppliers. The four-dimensional arrow representation satisfies every toral action, diagonal/off-diagonal commutator and both directions of both Serre families: all color squares vanish, color-1 triple sandwiches vanish, and each color-2 cubic Serre term includes a square. Thus the nonzero tensor image survives the full quotient. Explicit action on v0 tensor v1 gives 1+q^{-2}-q-q^{-1}=q^{-2}(1-q)(1+q^2), nonzero for indeterminate q. Off-diagonal tensor commutator has cross scalar q_1^{a12}q_2^{-a21}-1=q-1 and maps v1 tensor v1 nontrivially. The test algebra is explicitly unsymmetrized, distinct from the supplier datum; no PBW assumption or specialized q endpoint is used. No edit.

Risk review: complete. No touched/finding obligation.

## `ex-quantum-serre-calculation-in-type-a-two`

Reviewed seven steps and all seven exact supplier interfaces. A2 with d1=d2=1 gives the indicated toral actions and Gaussian [2]=q+q^{-1}. Each of the six explicit mixed coefficient groups in (2,1) and (1,2) vanishes by direct substitution; extreme terms have K1^{-2}K2^{-1}. The negative formula uses the already-proved coideal supplier. The q=1 claim specializes only the polynomial Serre expression into the classical double bracket, not the coefficient field Q(q) or entire algebra. No edit.

Risk review: complete. No touched/finding obligation.

## `ex-the-double-edge-quantum-serre-relation-for-affine-a-one`

Reviewed eight steps and all eight exact supplier interfaces. Symmetric double-edge GCM has m=3 and [3]=q^2+1+q^{-2}. The q-binomial cube and twelve mixed coefficient expressions cover splits (3,1),(2,2),(1,3); direct substitution cancels all of them, including the alternating endpoint identity 1-[3]q^2+[3]q^4-q^6=0. Extreme toral factors are K1^{-3}K2^{-1} and K1^3K2; the negative identity uses the proved supplier. Classical specialization is only the Serre polynomial, giving ad(e1)^3 e2. Singularity of the affine matrix requires no inverse. No edit.

Risk review: complete. No touched/finding obligation.

## `thm-generic-quantum-serre-halves-have-classical-pbw-ranks-and-a-nondegenerate-hopf-pairing`

Read all six steps and nine exact supplier interfaces. Generator identification transfers ranks to the negative half. In each finite free component, arbitrary classical-basis lifts have unit determinant, while regular rational lifts transfer through z -> exp(hbar); ordered PBW monomials are used only with a supplied classical homogeneous basis. Shuffle embedding makes the Serre kernel a coideal for the primitive braided coproduct; both antipodes follow by positive-height recursion. Word permutation weights give both pairing adjunctions, and negative quotient surjectivity plus diagonal ambient-word pairing kills no nonzero positive element after extension to K; equal finite ranks make the pairing perfect both ways. Generic rescaling by product_i (hbar d_i/(exp(d_i hbar)-exp(-d_i hbar)))^{alpha_i} has constant unit factors 1/2 and is color-multiplicative. Field injection then transfers coideal, adjunction, pairing determinant and rational-Q(z) statements. Height zero has unit pairing. AC is carried explicitly from the embedding supplier. Reader changed only contract quotes; item pre/post unchanged.

Risk review: complete. Verdict: `reviewed_no_defect`.

## `ex-quantized-sl-two-relations-coproduct-and-antipode`

Read all seven Verification steps with all seven supplier interfaces. Reader now specifies P-vee=Z h1, P=Z alpha1 and pairing 2, making K=K_h1 the full rank-one torus. The Q(q)-coefficient Laurent module is defined locally by finite convolution; integer-coefficient Laurent supplier is used only as the construction pattern. For every signed n, lambda_n-lambda_{n+1}=(q^{2n}-q^{-2n})/(q-q^{-1}), avoiding undefined negative quantum-integer notation. The oscillator checks both toral actions and mixed relation, proves E nonzero and K not 1 independently of triangularity. Its explicit coefficient functional separates Delta(E) from its flip; S-square and q-binomial order match the inverse-K positive convention including n=0. No AC. Accepted reader datum/construction/notation corrections and removal of stale escalation prose.

Risk review: complete. Verdict: `amended_repair` (reader mathematics retained; manifest/contract synchronized).

## `thm-triangular-decomposition-of-a-quantized-enveloping-algebra`

Reviewed all three steps and four exact suppliers. The crossed-double normal-factor isomorphism identifies the separately presented halves and group torus with their generated images, giving multiplication bijectivity and independence for supplied factor bases. Total beta decomposes as alpha-gamma with finite support per element, rather than claiming finite total-degree dimension. At beta=0, F_i tensor 1 tensor E_i lies outside the toral factor and is nonzero. Enumerated homogeneous half bases and toral crossing by nonzero character give free left U_q^0 copies; the rank sum can be infinite. AC applies only to the classical-rank/PBW supplier, not to clauses (i),(ii) or graded decomposition. The revised subalgebra conjugation wording is consumed exactly in F2 and step 3.1 and requires no carrier change. Pre/post item hashes agree; touched change is contract source-excerpt refresh.

Risk review: complete. Verdict: `reviewed_no_defect`.

## `thm-quantized-sl-two-string-formulas`

Reviewed all seven steps and six exact supplier interfaces. Pure color-i half components have one word and no Serre relation; independent coroots make K_i^m distinct, and unconditional triangularity proves independent rank-one normal monomials. Commutator induction has T_b=(q_i-q_i^{-1})^{-1} sum_s(q_i^{-2s}K_i-q_i^{2s}K_i^{-1}); division gives the exact b>=1 formula. The left cyclic ideal kills positive E exponents and evaluates the toral Laurent factor at q_i^N, so {F_i^{(t)}w_N} is a basis. Reader signed extension [s]_i for all integers makes the infinite action defined beyond N+1 and has E v_{N+1}=0. The tail t>=N+1 is stable and generated by its first vector. Nonzero positive quantum integers prove the remaining N+1 vectors independent, simplicity by E^T and F strings, and uniqueness by the universal cyclic quotient. N=0 gives the one-dimensional trivial string, b=1 recovers the mixed relation. AC-dependent PBW ranks are not used. Accepted the local signed-notation repair; Statement unchanged.

Risk review: complete. Verdict: `amended_repair` (reader mathematics retained; manifest/contract synchronized).

## Manifest and contract reconciliation

Synchronized the eight mathematically changed reader-carrier rows in the owning pages manifest: current Statement/Definition, title, dependencies, strategy and provenance. In particular the formal shuffle row now includes its three PID/series prerequisites and degreewise completion, the subalgebra row specifies conjugation, the embedding row uses AC in 3.1, and the oscillator row specifies its toral lattice. All IDs, pages and order are retained. No item was edited by Alpha. The initial local strict proof-contract check reported two mechanical omissions in the formal shuffle contract: F4 use 1.1 and an unanchored one-letter boundary note. Both are synchronized to the actual proof; no defect-ledger row is created for these mechanical failures.

## Exact finding disposition and final decision counts

The scope names its native flagged obligation `refuter:6:1`; the decision retains that exact scope identifier with `route: "flagged"` (the dispatch prose also calls this `flagged:6:1`). It is `false_positive`, referenced by exactly one closed false-positive ledger row. Canonically hashing the three-field immutable reader-post carrier yields `59c20d02ca348b7a715581019d4db628187153b07b63f458f41dfb9bdc541d7c`, exactly the scope's observed hash. Its item hash is `da2f596c392de4a2eed9f4e5ea7768f7bf1bb50d5416ce592539baf326aeb421`, identical to current bytes and the pre-reader item. Thus this is a misquotation of the bound carrier, not a historical true finding made obsolete by a repair. No historical uncertainty or owner resolution is invented. Proof 1.1 already places `F_jK_h` on the rewrite right side.

There are exactly 15 unique decisions: eight `amended_repair` touched composite carriers, six `reviewed_no_defect` touched audit enrichments with empty defect lists, and one `false_positive` flagged finding. The eight mathematical reader repairs are accepted as mathematics; their final verdict is amended because Alpha synchronized their manifest and derivation carriers, which differ from the reader-post composite snapshots. All completed repairs have `repair_confidence: 1`. Eleven distinct reader-repaired defects have closed fixed ledger rows; the finding has its separate closed false-positive row. There are no reader findings, page obligations, escalations or withdrawals. The initial accepted-repair checkpoints above are superseded by these final composite-carrier verdicts.

## Consumer impact and published review

The corrected formal shuffle Definition has exactly three direct item dependency/reference consumers: `lem-quantum-serre-sums-vanish-in-the-formal-quantum-shuffle-algebra`, `thm-the-formal-quantum-serre-half-embeds-in-the-quantum-shuffle-algebra-and-is-degreewise-free`, and `thm-generic-quantum-serre-halves-have-classical-pbw-ranks-and-a-nondegenerate-hopf-pairing`. Their actual uses involve finite color-degree word pairings, fixed-degree completed tensors, or the generated half. All fit the new degreewise completion. The completed-tensor divisions in embedding 3.2 were independently checked. No further Statement repair is necessary.

The corrected subalgebra Statement has exactly three direct item consumers: `lem-the-generic-borel-half-and-opposite-half-form-a-dj-crossed-double`, `thm-triangular-decomposition-of-a-quantized-enveloping-algebra`, and `thm-quantized-sl-two-string-formulas`. They use generated images, root gradings and conjugation; none asserts scalar left multiplication by the torus. The oscillator Example has no direct item consumer. The two owning page bodies use the construction and formulas accurately and require no edits. These direct-use searches include all repository item dependency declarations and wikilink references. No outside-batch item consumer is affected by these reader interface changes. The remaining repairs change only proofs, facts or local notation and require no interface propagation.

Published repository prerequisites were read as exact interfaces; no defective published repository item was established. Published content and its canonical ledger remained read-only. The source-paper issues discussed below are not findings against a published library item. The owning cross-batch dependency input remains `[]`; stable IDs and any existing withdrawal records are preserved. Step 5b and the engine retain computed edge obligations and impact windows; this report does not close those stages.

## Source statements actually checked

- [Jeong–Kang–Kashiwara](https://arxiv.org/pdf/math/0305390), §1, printed pp. 5–6, (1.1), Definition 1.2, (1.4)–(1.6): checked the symmetric factorial/Serre conventions, toral and mixed relations, and the exact inverse-K positive Hopf formulas. Its Hopf assertion is supplemented by the local relation checks.
- [Enriquez](https://www.heldermann-verlag.de/jlt/jlt13/enrila.pdf), §1.1, printed pp. 22–23; §2.1 relevant definition/proof passages, printed pp. 30–37, Proposition 2.1, Lemmas 2.4–2.11, (25)–(27); §2.2 p. 37 (28); §2.3 p. 38: checked the rank-block assumption, shuffle/crossed model, primitive-kernel duality argument, finite PID comparison and pairing. The local augmentation condition, inverse-permutation convention, corrected length weight and generated-half annihilation avoid literal source defects.
- [Berkeley lectures](https://categorified.net/LieQuantumGroups.pdf), §10.4.1.4 proof, printed pp. 242–243; §13.1.3.9–13.1.3.22, pp. 308–310; §12.2.0–12.2.1, pp. 274–276: checked mixed-double coefficients, quasiprimitivity/commutator/triangularity statements and rank-one relations/string comparison. The source uses positive K coproduct; the items preserve their JKK inverse-K convention. The local string proof uses symmetric quantum integers and its explicit cyclic quotient, without importing source diagonalizability assertions.

These were PDF text passages opened through the web tool, not a whole-book audit. No PDF screenshot or independent judge review is claimed. Every batch carrier was reviewed locally; exact direct prerequisite Statements/Definitions were opened, including the matrix, PBW/Serre, formal-series/PID, quotient/tensor, choice, Laurent and scalar-extension interfaces. No exhaustive recursive audit of all transitive published suppliers or all bibliographies is claimed.

## Focused checks and remaining work

- Recomputed active engine status from `.autopilot/frontier-43-complex-representation-15`; it identifies Step 5a work. Historical RESUME assertions were not used. No dispatch or stage transition was initiated.
- Initial and final `node tools/risk-report.mjs research/frontier-43-complex-representation-15-batch-6.proof-contracts.json` checks passed; final `--require-reviewed` reports complete reviews for all 23 HIGH/CRITICAL items, zero errors.
- Final `node tools/proof-contract.mjs research/frontier-43-complex-representation-15-batch-6.proof-contracts.json --strict`: 27/27 checked, zero errors; the one shotgun-bracket warning concerns coideal 1.1. Its cited AC/basis/order/PBW/filtration inputs are all actually used, and the other proof steps have their local justifications; it does not establish a mathematical gap. Routed contract claims were enriched to full current step claims, replacing truncated records such as “By”.
- Batched `node tools/tsx-run.mjs tools/precheck.mts` on the eight reader-changed items: 8 checked, zero failing. Batched `node tools/rendercheck.mjs` on those same paths: 8 files, no YAML/math defects.
- After all item/formatter work, ran exactly once `node tools/proof-layout.mjs` on those eight explicit paths: 8 items, 74 steps, zero defects. No item was edited by Alpha, and no item changed after this check.
- Exact rational spot checks: the repaired coproduct exponent identity passed on 494 admissible tuples for m=1 through 8; signed oscillator and finite-string coefficient identities passed on 142 cases at q=2,3. These corroborate the general derivations and do not replace them.
- All 27 current raw item hashes equal their immutable reader-post hashes. The decision set exactly equals the 14 touched scope obligations plus its one native refuter obligation, with no duplicate. Ledger append used the tool's serialized transaction; `node tools/defect-ledger.mjs validate --run frontier-43-complex-representation-15` passed with zero errors. A rejected first append had invalid location enum spellings, appended nothing, and was corrected to `proof-step` plus exact location detail; no mathematical defect row was created for that mechanical failure.

No mathematical blocker remains in an owed batch-6 obligation. No judge, hash stamping, self-certification or gate battery was initiated. Engine-owned current hashes and gates remain pending at handoff.

Metadata alerts outside routed touched obligations: the unchanged manifest rows for `lem-quantum-serre-relations-are-stable-under-the-chevalley-involutions`, `ex-quantum-serre-calculation-in-type-a-two`, and `ex-the-double-edge-quantum-serre-relation-for-affine-a-one` retain older prose mirrors. The Chevalley formulas are mathematically identical; the two example mirrors omit the current explicit “polynomial Serre expression only” specialization wording. Current item proofs already state the correct limitation. These unowed rows are retained for owner/Step-5b metadata disposition, with no extra decision or defect row and no item repair requested.
