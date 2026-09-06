# Step 8 — group e adjudication

Run frontier-31a; batches 2, 5, and 6.

## Outcome

- Read all eight owned pages, all 103 owned items, every dependency implicated by a rejection, and the Step-7 context.
- Adjudicated all 22 exact rejection tuples: 17 confirmed_fatal, 5 confirmed_nonfatal, and 0 false_positive.
- Repaired exactly the 17 judge-confirmed fatal items and the one independently fatal Step-7 warning.
- Appended 18 matching defect-ledger rows.
- Dispositioned both Step-7 warnings.
- Found no cross-group or published-item defect.

## Exact rejection decisions

| item | context SHA-256 | pre-edit guard SHA-256 | outcome | decision and repair |
|---|---|---|---|---|
| cor-algebraic-integer-minimal-polynomial-criterion | 020a376a2c44574d19c0932a14fd625b5735e8752453171c52c21daf8ecffe79 | a890e213c6001d9856bf940592d86f4c4eaafb4131b9f08314aba3d961ed7d71 | confirmed_nonfatal | The direct dependency defines the ring of integers as the integral closure, so the reverse implication is immediate. No edit. |
| cor-holomorphic-functional-calculus-in-the-wiener-algebra | d28a980857e05a1bf057ba5645e2181d0654314ee62b7a66394f78a11de011de | 8692e256e99537d4ceb51887fd69043786b6687222b716925c9c2bb72a1ed272 | confirmed_fatal | All-positive contours fail on a multiply connected neighbourhood. Repaired with an oriented finite frontier chain having the required index, plus exact compact-neighbourhood, index, and Cauchy dependencies. |
| cor-ring-of-integers-is-a-dedekind-domain | 6b3aafa7e54d648fac2297e112a8401c172ea3e11ba9bbf43463c652f3b6d542 | 0b1b18a853b09357da160d474d608242414f9944eaa0708272e387defd1e6dc2 | confirmed_fatal | The cited theorem assumes Choice. Added and cited that hypothesis. |
| def-archimedean-embeddings-and-number-field-signature | b82137bd17ba4f81fe1c290614cae06411ef4698ecfe6ffa8cacd439e331a87e | 2fc7fec8214d3bfd25336c220ab9df41468391d80c93047de85b29d536a5bcc1 | confirmed_fatal | K was unbound. Fixed a number field K and typed the relevant Q-embeddings. |
| def-discriminant-of-a-number-field-basis-and-order | e7114bce161f5ae8c55a635b4e982eeec6494b43a0e5fee56b5aaa398ef1525b | 71a148aceda9a33654d4571d0f8baa5c20e9b3eab0838d1ed6bd6287129e4529 | confirmed_fatal | The definition deferred basis independence. Proved it from the unimodular change-of-basis formula before defining order and field discriminants. |
| def-indefinite-lebesgue-integral-on-a-compact-interval | ee797f466f69d9ad8fa51f6c3392975775a472fc68ab20af28825dc8c19e8aec | 29ddbaa222660a9895c38ed6eea85033bed0e471160406507ba208ea75bcc06b | confirmed_fatal | The cited set integral covered only nonnegative functions. Defined the signed and complex cases by the ordinary integral against the interval indicator. |
| def-luzin-property-n-on-a-compact-interval | 21ccdb558c6ba0c33882ad04486c92edac1afd1b84db0232418b96ff3dc97402 | f84d73748e72774e319032e8520c31e956ac9794b08e91c11188fae165fb70e9 | confirmed_fatal | The image of a null set need not be measurable for an arbitrary map. Recast the definition in terms of outer measure. |
| def-total-variation-function-on-a-compact-interval | 829b399a0e22735cf76e89c44c5e1e94d43dc0b597fff7a00d53065da3a5496c | cecb35d4d00c4182ce9e5308944f802eb27bd9e07e403105c23ba381badcb1c3 | confirmed_nonfatal | A partition of a subinterval extends to one of the whole interval, immediately proving bounded variation of every restriction. No edit. |
| def-wiener-algebra-of-the-circle | 9f28c7d867d1051ff5fdc585e383cc558314c7c7c61aae76f95596ea7c62cd57 | e6efe0e1d03250687453754f28f15f466408314d8d1bf56706ba7e84f09f7ce2 | confirmed_fatal | The synthesis lemma assumes Countable Choice. Qualified the continuous-representative assertion and added the exact forward reference. |
| ex-change-of-variables-through-an-increasing-absolutely-continuous-map-with-a-positive-measure-flat-set | 3c2ce68b543fddd8c51f634566b7b579b51d20d185db2e417aa3b19683488012 | 9a32783fb5bd6ef878ce22ab4cafb22bc7405bd78a069d3d15bc78a3d8d4b0af | confirmed_fatal | The construction gives a zero derivative only almost everywhere on the flat set. Narrowed the pointwise assertion accordingly. |
| lem-chain-rule-for-an-indefinite-integral-after-an-absolutely-continuous-composition | 38e057c1dc1da8ceab6c471f5f0bf85a74832051fbd896d97c3bda20ed9a23ac | 0701ddfb0203b5750cddae6161dd0cf226702caeaa713fd880818bbe8f38fc25 | confirmed_fatal | Absolute continuity alone did not identify the derivative with the integrand. Added the first Lebesgue FTC dependency. |
| lem-fourier-transform-of-a-gaussian | a503414a45ae157a0ce546ec39c70168a24be6eda3e990e2746af38bb1e76668 | 9d0b3ad70406566e95414881aad664cd4ddb81dd98b1aaff3eaf1d0cb5c1a752 | confirmed_fatal | Completing the square hid an unjustified complex contour shift. Replaced it with dominated real differentiation, integration by parts, the Gaussian integral at zero, and scaling. |
| lem-luzin-property-n-gives-an-integral-growth-estimate | 144ce9edf54ab511fb3166d91e9ea0b0df9dd0de49b92386f1b09b8107035d4b | 00bd0108fd87292fda234ad7a88a0d4cb065a50b9b3388a549ad39cea0b7dc95 | confirmed_fatal | The outer-regular covering theorem assumes Countable Choice. Added and cited that scope. |
| thm-absolutely-continuous-functions-have-luzin-property-n | 6f67603b420eefca4ff26f60a60d010da2e336c6bf4ac3e07a7d091354c5b27f | 742cfa22659664410782432e0b22d549c49c4ea241368f1d7e69cfa3b4a7edd0 | confirmed_nonfatal | Closed component hulls can share endpoints, but their open interiors are pairwise disjoint, which is exactly the library's AC convention. No edit. |
| thm-an-absolutely-continuous-function-with-zero-derivative-almost-everywhere-is-constant | 44e799d102d968d01269b7ea199a53dec25b8e3417a60b6099dc3679c0d2ef94 | 60c77eade95126036a391eb5ccb1c914c143f34c0ed9ae6aba955e4c7e13218d | confirmed_fatal | The proof conflated small residual outer measure with finite complementary gaps. Repaired the residual estimate and telescoped over the actual finite gap family. |
| thm-banach-zarecki-characterisation-of-absolute-continuity | 46d998ca769938a92c289f98fc1a6cf56b5bc9dacdb217dda9a6c72ea1591090 | 85bdad102dffaff7103361385545ec04a18b8f97f2011fcc6cceaf5badcc1680 | confirmed_nonfatal | The separately cited monotone differentiability theorem gives differentiability of the positive and negative variation functions almost everywhere. No edit. |
| thm-clearing-denominators-for-an-algebraic-number | cc33f0812024da752364281c1ffeaf006d1aa07fde5a625dabf08a392f2bc6eb | 4f1c152b89c228bb877d32c9d0a65ee5ced548e5f608fea9c08a51019137a59f | confirmed_fatal | Clearing denominators in an arbitrary annihilator does not prove integrality. Started from the monic minimal polynomial and constructed a monic integer polynomial for the scaled element. |
| thm-number-field-discriminant-is-well-defined-and-nonzero | c8211d297a8ee10c15a4dd719ef984797ec1bd0d1f3151558c2e2bdf96357b6b | 7ceac64a4923c4c2ffa4ebefd2e5792b8217abead4b617910261691c30243215 | confirmed_nonfatal | Closure of the ring of integers under products plus the direct trace-and-norm corollary immediately gives integral trace pairings. No edit. |
| thm-primitive-dirichlet-l-analytic-continuation | 7e387db42775c3e80db437154588e0a3552327c6f33b4b8adbe69d44e390741b | d6a5a868d13d0290aec4adc38e08b4fa423eede4934791ba9defdedccf8eaf03 | confirmed_fatal | The completed zeta function has simple poles at zero and one. Corrected the exception and the entire-factor statement. |
| thm-primitive-dirichlet-l-functional-equation | c7c76d2be43b33b5559dff7460d8b8f074836bcc377f9f3f77c7e45fbe579499 | 7bd2823a7a7815fa9cd0cc4c6440e4c3e0259df3d630391057addef9b6112cc5 | confirmed_fatal | The theta transformations were unsupported. Added Gaussian and twisted-Poisson dependencies, derived both parity cases, and treated the principal q=1 subtraction separately. |
| thm-total-variation-function-of-an-absolutely-continuous-function | edd76d2fd9d5fa63ec04841d73f298edd9bac9a32ae0d79fd47683f1684d319c | 60a5cbe9a88bbbdd16a6052d300725fce7096f48fc1b3dd829691b443d8f45ae | confirmed_fatal | The proof applied the AC theorem directly to an integrable derivative. First formed its absolutely continuous indefinite integral, then applied the first Lebesgue FTC. |
| thm-wiener-lemma-for-absolutely-convergent-fourier-series | bb8274b63133a7789d5dda732a817224ebded6d8913115bb4598e14566da2c11 | 2cf95ba33c42e8be33321a5165853832486f8586b2bf08a7c6122219dbed6b79 | confirmed_fatal | The Banach-algebra dependency did not supply the claimed coefficient-algebra identification. Added synthesis support and classified characters directly from the exponentials. |

## Step-7 warning decisions

- s8a-d3ba59ea03a61aa6b75f590c — confirmed_fatal, defect type other. The definition falsely identified a power basis of an arbitrary order with the equality O_K = Z[alpha]. It now says O = Z[alpha], reserving O_K = Z[alpha] for the monogenic full-ring case. Pre-edit guard a8dafbdce105ef593aaa2aac3b7aea7fd7b2e4745295d7f9aa5ec75c765a95dc; post-edit guard 843ac68abf8dadb6c1437cc652203a5d75ccd86c5326c0de4bce762f51bf9be1.
- s8a-2158c569e504a804e4753b4e — covered_by_rejection. It identifies the same residual-cover and telescoping defect as the exact rejection of thm-an-absolutely-continuous-function-with-zero-derivative-almost-everywhere-is-constant.

No cross-group alert was raised.

## Rejudge targets and post-edit guard hashes

| item | post-edit guard SHA-256 | defect row |
|---|---|---|
| cor-holomorphic-functional-calculus-in-the-wiener-algebra | 4c903b4fb967d2bf6b483a50ce2a1d63638426b2827d3cb6fa22811bf1a6421e | frontier-31a-A8-e-001 |
| cor-ring-of-integers-is-a-dedekind-domain | 481080dad7f9e8bc583f53030a3e4db399d72bef85350144417f0570c55946db | frontier-31a-A8-e-002 |
| def-archimedean-embeddings-and-number-field-signature | f6f82cdc2ff2a51f0c4b857072d11be4622cd0ac7bc5f25798bb04033a0cbfb7 | frontier-31a-A8-e-003 |
| def-discriminant-of-a-number-field-basis-and-order | af659e3481959bdc0591348a0ebe965a46635acdb5fb03326d02d5df9b8be179 | frontier-31a-A8-e-004 |
| def-indefinite-lebesgue-integral-on-a-compact-interval | 2edd4b2399e04e1cc664d9db5706bd6a07a2af0086a7a78459f2dc99a01442a6 | frontier-31a-A8-e-005 |
| def-luzin-property-n-on-a-compact-interval | 6bac817d5deaedf8f9e6860763d97d1f13ca81433e39d0294e5a209242996bfc | frontier-31a-A8-e-006 |
| def-wiener-algebra-of-the-circle | 62721936e5082beada51c2f0e275d1fc72eb8e1e01240b541aa5d29996ab2ad9 | frontier-31a-A8-e-007 |
| ex-change-of-variables-through-an-increasing-absolutely-continuous-map-with-a-positive-measure-flat-set | 44f3ea5965724433dfe916c8be462b6cc41e134bc131df6eb56af14a74b55471 | frontier-31a-A8-e-008 |
| lem-chain-rule-for-an-indefinite-integral-after-an-absolutely-continuous-composition | b843df42297848b53bf195174976cec87d97acacbc96b301e66eb3ae4ffc0503 | frontier-31a-A8-e-009 |
| lem-fourier-transform-of-a-gaussian | 763753ddf070c7ceed63243883265723d9e7e6506202c852201fc230db1e36b5 | frontier-31a-A8-e-010 |
| lem-luzin-property-n-gives-an-integral-growth-estimate | 747da82543732bc137cf8ddae51f829105ededb5de00521b56bbc6ad8cdd23cf | frontier-31a-A8-e-011 |
| thm-an-absolutely-continuous-function-with-zero-derivative-almost-everywhere-is-constant | 7594ce29049d746cc28ddee22526a7117e39ef5ec213efefeb0d02ad19fdd382 | frontier-31a-A8-e-012 |
| thm-clearing-denominators-for-an-algebraic-number | fa05eb3ab59b0c7fec80dab80e70891998eb94b175e2cfd858d3687c66451530 | frontier-31a-A8-e-013 |
| thm-primitive-dirichlet-l-analytic-continuation | b4a9f3e589ac79d5008e10eb2bdbb1a3c04ec8e39f394595a2c5065ebbca5ed9 | frontier-31a-A8-e-014 |
| thm-primitive-dirichlet-l-functional-equation | 821d87faaf0bff4738e95001c447a7a5e35dd321bd9bc1755dc2f39cf92ca72c | frontier-31a-A8-e-015 |
| thm-total-variation-function-of-an-absolutely-continuous-function | 0d456ff41f1f25ff336908a41c4bae5553239c50223895713d46c8a355171fba | frontier-31a-A8-e-016 |
| thm-wiener-lemma-for-absolutely-convergent-fourier-series | 44fe2c5e11e52935a3e649ec4c590bde1c6daa27989d2b9af23b907750173cef | frontier-31a-A8-e-017 |
| def-integral-basis-and-power-integral-basis | 843ac68abf8dadb6c1437cc652203a5d75ccd86c5326c0de4bce762f51bf9be1 | frontier-31a-A8-e-018 |

## Sources consulted

- Christopher Heil, Absolute Continuity and the Banach–Zaretsky Theorem, <https://heil.math.gatech.edu/papers/abscont_typosmarked.pdf>, Growth Lemmas I–II and Lemma 16 in Section 3.3, Theorem 17 and Corollary 18 in Sections 3.4–3.5, pages 14–21. These passages support the outer-measure growth estimate, Banach–Zaretsky characterization, and the null-set mapping property of absolutely continuous functions.
- R. K. Srivastava, Hardy–Littlewood Maximal Functions and the Lebesgue, <https://www.iitg.ac.in/rksri/Hardy-Littlewood%20Maximal%20Functions%2C%202019.pdf>, Lemma 6.3. This gives the finite Vitali-family plus complementary-gap proof that an absolutely continuous function with derivative zero almost everywhere is constant.
- Nickolas Andersen, Analytic Number Theory, <https://mathdept.byu.edu/~nick/ucla/205a/205a-notes.pdf>, pages 64–66, Theorems 16.7–16.8 and Remark 16.9. These give the even and odd theta transformations, the completed primitive Dirichlet L-functions, and the root factor with the stated Fourier convention. Pages 25–26 record the gamma poles and the entire factor for completed zeta, supporting the poles at zero and one.
- J. S. Milne, Algebraic Number Theory, <https://www.jmilne.org/math/CourseNotes/ANT.pdf>, Proposition 2.6 on page 29 and the integral-basis examples on pages 39–40. Proposition 2.6 supports the monic-polynomial denominator argument; the basis discussion distinguishes an integral basis of an order from the special equality O_K = Z[alpha].
- Richard S. Laugesen, Harmonic Analysis Lecture Notes, <https://arxiv.org/abs/0903.3845>. The abstract and contents were consulted only to orient the Fourier/Poisson convention check; no adjudication or repair rests on this source.

## Checks

- Focused precheck: all 12 repaired proof-bearing items pass; the six other repairs are definitions.
- Focused rendercheck: all 18 repaired items pass YAML, delimiter, and KaTeX validation.
- Manifest dependency and content-policy checks: all 103 owned items pass with zero errors or warnings.
- Dependency check exits successfully; it reports only existing advisory corpus warnings.
- Group-e exact join: 22 unique adjudications, 17 fatal and 5 nonfatal; 18 unique defect rows; two alert decisions; zero missing or duplicate owned links.
- Defect-ledger validation and fatal-link closure check: 628 current-run rows checked with zero errors.
- Step-8 guard was run against pre-step8: 212 changed items, 111 licensed, 101 run-wide errors, and zero group-e errors.
- Step-8 scope check was run: zero open group-e rejection or warning; the run-wide check still reports eight missing alert dispositions in groups b, c, and h.

## Blockers

No group-e blocker. The engine owns rejudgment of the 18 targets. At the time of this report, run-wide closure remains pending on other groups' append-only adjudication and alert-decision rows; those out-of-scope records were not repaired here.
