# Step 5b cross-batch audit — frontier-37-owner-30

Reviewer: alpha-5b-lead; scope: all dispatched batches and both full-lead impact windows.

The current cross-batch and forward-reference obligations have local dispositions: 654 accurate edges (652 original, two introduced), six load-bearing forwards replaced by four proved earlier lemmas, and two Remarks-only orientation links. There are 66 post-5a carrier dispositions: four additions, 60 changed items, and two existing A pages. Eleven confirmed local defects have closed, uniquely owned `5b-cross` ledger rows. Both full-lead impact receipts now pass after the serialized owner resolved the two independently confirmed published typing defects. Local Step 5b work is complete; engine closure gates and later published-repair judgments remain owed.

This report is a mathematical interface audit and local repair receipt. Native reviews retain their original attribution; this is not a new judgment of every full proof. This lead performed no agent dispatch, judge cycle, judge stamp, engine transition, published item edit, page/pair addition, item removal, page removal, existing-item reorder or global page-order change. The separate serialized owner published repairs are recorded below. The original work list, pre-author baseline and exact post-5a snapshots remain intact. Live `.autopilot/` status was checked against the dispatched run; concluded RESUME files were not used as scheduling authority. No checkpoint-import or merge-import artifact exists for this run, so there is no imported published-repair handoff to rewrite.

## Edge audit

Each edge row in `research/frontier-37-owner-30-5b-verdicts.jsonl` names its exact consumed fact or inherited prerequisite and binds the raw current source and target SHA-256. All 652 original edges remain declared. The two new edges from `lem-projective-line-curve-and-divisor-basics` cite `def-degree-divisor-proper-curve` and `thm-line-bundle-rational-section-cartier-divisor`: F4 uses the finite residue-weighted degree and the isomorphism attached to a nonzero rational section, under explicit AC and an established smooth proper curve. It never treats the canonical rational section of a signed divisor as automatically regular.

Number-field interfaces preserve nonzero integrality in the bounded-conjugate power argument; the logarithmic lattice uses unscaled covolume, integral O_K, finite bounded-norm ideals and finite principal-generator selections. S-unit valuations contain the class-number multiple of the finite coordinate lattice, with the empty S convention. The uniformization consumer of the real discrete-subgroup lemma uses only its one-dimensional conclusion after proper discontinuity proves discreteness.

Curve interfaces preserve Noetherianity, normality, DVR closed local rings, geometric integrality, residue-weighted degree and the explicit AC-to-DC route. Point-twist quotients have dimension [kappa(p):k]; base change uses Artinian lengths times residue degrees and handles inseparable residues. The 2g/2g+1 arguments first pass to geometric points before subtracting their divisors. Canonical differential orders use a local frame over imperfect fields; dt/residue coefficient formulas retain their separable-residue hypotheses. The coherent torsion-free-to-locally-free argument is used on the DVR curve. Complete-system dimension refers to the projectivization scheme. The fixed ample-direction vanishing Statement was reread; broader historical risk prose asserting vanishing for all sufficiently large degrees is not reused.

Braid interfaces retain the same Q_n, boundary-fixed composition, inverse configuration slicing and inverse endpoint point-pushing convention. Those two inversions cancel in the displayed Push_n comparison. The free-kernel suppliers require n>=2, and presentation induction starts at n=1; no injectivity is inferred just from a definition or a presentation surjection.

## Forward-reference dispositions

The six repaired references no longer occur in their source bodies or `forward_refs`; the cited earlier helpers are ordinary dependencies. Their defect IDs use the original work-list positions, and each belongs to only its own forward verdict.

| Source | Removed later target | Earlier proved supplier | Decision / defect suffix |
| --- | --- | --- | --- |
| `cex-weil-divisor-not-cartier-singular-cone` | `lem-noetherian-subspaces-and-compact-opens` | `lem-noetherian-open-subsets-are-quasi-compact` | lemmas-added / forward-1 |
| `ex-hyperelliptic-curve-double-cover` | `lem-twisting-sheaf-projective-space-ample` | `lem-projective-line-twisting-sheaf-ample` | lemmas-added / forward-3 |
| `ex-hyperelliptic-curve-double-cover` | `thm-serre-duality-smooth-projective-variety-locally-free-sheaves` | `lem-two-affine-double-cover-cohomology` | lemmas-added / forward-4 |
| `ex-projective-line-divisors-linear-systems` | `lem-projective-line-divisors-classified-by-degree` | `lem-projective-line-curve-and-divisor-basics` | lemmas-added / forward-5 |
| `ex-ramification-power-map-projective-line` | same degree-classification lemma | same earlier basics lemma | lemmas-added / forward-6 |
| `ex-smooth-conic-is-projective-line-with-point` | same degree-classification lemma | same earlier basics lemma | lemmas-added / forward-7 |

All defect IDs above have prefix `frontier-37-owner-30-5b-`. The corresponding source-item carrier decisions accept the already reviewed resulting carrier without duplicating ownership of the forward defect.

### Earlier lemma proofs and actual consumer uses

`lem-noetherian-open-subsets-are-quasi-compact` is on the existing divisor A page. Under AC a cover of an open U without a finite subcover yields a strictly ascending sequence of finite unions of cover members, all open in X. This contradicts the Noetherian ascending-chain condition. The empty open has the empty finite subcover. The cone's F14 uses exactly this open-subset conclusion to get a finite chart cover. The current cone argument was reread: char(k)!=2, invariant-ring normality, height-one P=(x,z), dim(P/mP)=2, and the normal height-one intersection criterion give its non-Cartier conclusion. No general arbitrary-subspace theorem is needed. [Stacks, Definition 5.9.1 and Lemma 5.9.2](https://stacks.math.columbia.edu/tag/0050) supplies the Noetherian convention and quasi-compactness statement.

`lem-projective-line-curve-and-divisor-basics` is on the existing curve A page. Its two polynomial charts and dense Laurent overlap prove geometric integrality, standard smoothness, dimension one and properness; the chart rings are Noetherian PIDs, licensing the finite-chart dimension theorem. The earlier direct twisting-sheaf cohomology gives H1(O)=0, and the earlier batch-6 arithmetic-genus definition identifies genus zero. A finite point V(g) has residue degree deg(g), order one for g, and infinity order -deg(g), so div(g)=[p]-deg(g)[infinity]. Finite signed products give D~deg(D)[infinity], including the empty product for zero D. The x0 coefficient is 1 on its chart and u=x0/x1 at infinity, giving O(1)=O(infinity) by the rational-section dictionary. AC and the induced DC cycle-map premise are explicit. The three P1/conic examples use exactly these genus, point-degree and divisor clauses; their claims are unchanged. In the conic example the old clause/step locators and provisional-sibling prose were replaced with the actual earlier prerequisite.

`lem-projective-line-twisting-sheaf-ample` uses the identity closed immersion witnessing H-very ampleness, finite-type quasi-compactness of P1, and the already published `lem-very-ample-implies-ample` over the affine base Spec(k). Its current Definition and proof were checked, and AC is inherited from those suppliers. The hyperelliptic example's F10 now claims ampleness only for the P1 target it actually uses. [Stacks, Section 29.39](https://stacks.math.columbia.edu/tag/01VG) is the checked relative-ample source context; no later general twisting-sheaf lemma is used.

`lem-two-affine-double-cover-cohomology` assumes AC, a separated k-scheme with the specified two affine charts, g>=0, and the exact overlap/gluing t=x^-1, w=x^-(g+1)y. The structure sheaf is quasi-coherent and the finite affine cover makes the scheme quasi-compact, so the earlier authored Čech comparison gives H1=T/(A+B). The monic quadratic relation gives the free Laurent-module basis 1,y. The scalar summand is exhausted; the y-powers remaining between exponents >=0 and <=-g-1 are x^-1y,...,x^-gy. This is a basis of size g, including the empty basis for g=0. No smoothness, characteristic or properness hypothesis is silently used by this quotient calculation. [Stacks, Lemma 20.11.9](https://stacks.math.columbia.edu/tag/01EW) is the checked acyclic-cover comparison context; the exact repository supplier additionally imposes its AC and separated finite-cover conventions.

In the current hyperelliptic verification, the squarefree polynomial has degree 2g+1 or 2g+2, g>=1, and k is algebraically closed of characteristic !=2. Its explicit normalized charts satisfy the new lemma's transition and cover; properness gives separatedness. Verification 4.3 applies the Čech quotient and obtains h1(O)=g directly, while finite pullback of the proved ample P1 twist establishes projectivity. The existing local calculations of ramification at roots/infinity and orders of dx/y remain valid; the regular differentials have numerator degree <=g-1. The delta correction is now at 5.3 and the final conclusion at 7.1 after the precheck-required canonical step ordering. No general Serre duality is a genus premise.

### Retained orientation links

Both source and already authored target carriers were read, including the source proof and relevant target calculations. Both links occur only in Remarks, with no proof or claim premise taken from the target.

- `cor-unramified-prime-decomposition-in-a-cyclotomic-field` -> `ex-reduced-conductor-of-q-zeta-six`: orientation-reviewed. Source page `cyclotomic-arithmetic-and-reciprocity-via-frobenius` has planned order 365.921; target page `cyclotomic-arithmetic-and-reciprocity-via-frobenius-examples` has strictly later order 365.922. The proof uses the reduced conductor and arithmetic Frobenius order, not the example. The example checks Q(zeta_6)=Q(zeta_3), conductor 3, and at prime 2 the order modulo 3 is 2, hence unramified residue degree 2.

- `thm-weierstrass-lattice-discriminant-is-nonzero` -> `ex-singular-cubic-degeneration`: orientation-reviewed. Source page `elliptic-functions-and-complex-tori` has planned order 845; target page `elliptic-functions-and-complex-tori-examples` has strictly later order 846. The lattice proof uses distinct half-period values, the discriminant identity and the affine/infinity gradient computation. The example has (g2,g3)=(3,1), discriminant zero and node (-1/2,0), so it cannot arise from a lattice; it is illustration only.

The orientation rows bind both current raw item hashes and this existing Markdown report's final raw hash. They are rebound if this report changes.

## Additional mathematical repairs

### Arbitrary Cartier divisors give rational canonical sections

`thm-line-bundle-rational-section-cartier-divisor` F4 and Verification/Proof 5.1 incorrectly typed 1_D as a global regular section for every Cartier divisor. On X=Spec(k[t]) and D=-[0], O(D)=t O_X, so 1 is not a regular section. The corrected Statement explicitly says **rational** canonical section; F4 places it in Gamma(X,K_X(O(D))) and states that it is regular exactly for effective D. Step 5.1 extends the sheaf isomorphism meromorphically before applying it to 1_D. The pair/divisor equivalence, unit-transition gluing and both directions of the iff were reviewed, including zero/empty cases and no-Choice accounting. [Stacks, Definition 31.15.1(1–2)](https://stacks.math.columbia.edu/tag/0C4S) restricts its canonical global section to effective D; [Definition 111.49.1](https://stacks.math.columbia.edu/tag/02AR) supplies the meromorphic-unit Cartier convention. The local formula f^-1 O proves the repaired rational typing directly.

The manifest, active plan, provenance-relevant contract citations and specific CRITICAL risk review were synchronized. Closed item-owned defect: `frontier-37-owner-30-5b-rational-canonical-section`. All 37 pre-existing direct consumers were checked at their actual fact/definition clauses and proof uses; none needs 1_D regular for a signed D. Effective global-section uses have effective divisors. The new P1 prerequisite was also checked. No existing consumer Statement required change, so no additional propagation hop is justified. The following locators identify the pre-existing direct uses (definitions with inherited interfaces are named explicitly in the current edge/impact evidence):

| Direct consumer | Fact or interface | Proof use |
| --- | --- | --- |
| `cex-degree-two-g-minus-one-not-always-basepoint-free` | F6 | 5.1 |
| `cex-degree-zero-line-bundle-no-section` | F5 | 3.1 |
| `cex-inseparable-map-riemann-hurwitz-naive-fails` | F7 | 3.1, 4.1 |
| `cor-degree-three-line-bundle-embeds-genus-one-plane-cubic` | F4 | 1.1, 5.1 |
| `cor-degree-zero-line-bundle-section-trivial` | F1, F2 | 1.1, 2.1, 4.1, 5.1 |
| `cor-existence-rational-function-bounded-pole` | F4, F7 | 1.2, 4.1 |
| `cor-genus-degree-smooth-plane-curve` | F5 | 4.1, 5.1 |
| `cor-h1-line-bundle-dual-sections` | F6 | 4.1 |
| `cor-nontrivial-degree-zero-line-bundle-no-sections` | F3 | 3.1, 5.1 |
| `cor-riemann-inequality-divisor-sections` | F3, F4 | 1.1, 3.1 |
| `def-base-point-linear-system` | definition / inherited interface | definition / inherited interface |
| `def-canonical-line-bundle-curve` | definition / inherited interface | definition / inherited interface |
| `def-index-speciality-divisor` | definition / inherited interface | definition / inherited interface |
| `def-little-l-divisor` | definition / inherited interface | definition / inherited interface |
| `def-riemann-roch-space-of-divisor` | definition / inherited interface | definition / inherited interface |
| `ex-genus-one-rr-degree-positive` | F4 | 2.2, 3.1 |
| `ex-plane-cubic-canonical-trivial` | F3 | 2.1, 4.1 |
| `lem-add-one-point-exact-sequence-line-bundle` | F2 | 1.3, 3.2, 3.3, 7.1 |
| `lem-cartier-to-weil-injective-normal` | F6 | 2.1 |
| `lem-divisor-order-monotonicity-sections` | F2 | 1.2, 2.1, 2.2, 3.1 |
| `lem-effective-divisors-sections-mod-scalars` | F3 | 1.1, 2.1 |
| `lem-h1-stabilizes-downward-point-removal` | definition / inherited interface | definition / inherited interface |
| `lem-projective-line-divisors-classified-by-degree` | F14, F9 | 3.2, 3.3, 3.4, 3.5, 4.1, 4.2, 6.1, 7.1, 8.1 |
| `lem-rational-differential-divisor-well-defined-class` | F3 | 1.2, 1.3 |
| `lem-riemann-roch-space-finite-dimensional` | F8 | 1.3, 5.1, 7.1 |
| `lem-torsion-quotient-invertible-sheaves-effective-divisor` | F5 | 2.1, 4.1 |
| `thm-base-point-free-linear-system-morphism` | F10, F2 | 1.1, 1.2, 3.1, 4.1, 5.1 |
| `thm-canonical-bundle-ramification-formula` | F7 | 5.1, 6.1 |
| `thm-cartier-divisors-mod-principal-to-picard` | F7 | 2.2 |
| `thm-cartier-weil-divisors-curves-agree` | F4, F5, F6 | 1.2, 3.1, 4.1, 5.1 |
| `thm-degree-positive-line-bundle-sections-zero-bound` | F3 | 1.1, 3.1 |
| `thm-degree-two-g-line-bundle-basepoint-free` | F2, F6 | 1.1, 2.1, 3.1 |
| `thm-degree-two-g-plus-one-line-bundle-very-ample` | F6 | 2.1, 3.3 |
| `thm-euler-characteristic-degree-shift-curve` | F5 | 1.1, 1.2, 3.1, 4.1 |
| `thm-h1-line-bundle-vanishes-sufficiently-high-degree` | F6 | 4.1, 7.1 |
| `thm-riemann-roch-as-l-minus-index` | F4, F5 | 1.1, 4.1 |
| `thm-riemann-roch-euler-characteristic-curve` | F3, F5 | 1.1, 1.2, 3.1 |

### Empty-scheme orders

`def-order-codimension-one-rational-function` wrongly said the empty scheme has no meromorphic units. The zero-ring/sheaf convention gives a trivial unit group with its unique identity, as the current principal-Cartier definition explicitly states. The order domain is empty because there are no prime divisors. Replaced only that false boundary caveat, reread the complete Definition, and refreshed the affected exact citation records. Orders at existing codimension-one points, all nonempty DVR computations and consumer Statements remain unchanged. Closed item-owned defect: `frontier-37-owner-30-5b-empty-order-domain`.

### Correct implication for the normal cone

`rem-regular-locally-noetherian-locally-factorial` gave the normal, non-locally-factorial cone as a witness against the reverse of regular implies locally factorial. It cannot refute locally factorial implies regular because it fails that converse's premise. The repaired final sentence states the actual conclusion: normality alone does not imply local factoriality. The source-recorded regular-local UFD orientation theorem and its non-load-bearing role are unchanged. No source reading of a new UFD proof is asserted. Closed item-owned defect: `frontier-37-owner-30-5b-normality-counterexample`.

### Chart expression types and Laplacians

`def-harmonic-and-subharmonic-riemann-surface-functions` forced every chart expression into R while its subharmonic branch allowed -infinity; log|z| at zero exhibits the type failure. A chart expression now inherits the value set of u. It also identified the carried Euclidean Laplacian with a global scalar operator and with the metric Laplacian. For u=|z|^2, Delta_z u=4, whereas w=2z gives Delta_w u=1. The correction uses a chart-indexed unweighted operator and preserves the invariant vanishing criterion under the positive conformal factor. For a specified metric rho^2|dz|^2, sqrt(det(metric))=rho^2 and the inverse metric is rho^-2 I; cancellation in divergence proves Delta_metric=rho^-2 Delta. This is an elementary calculation, not an asserted fresh reading of Marshall or Lyubich.

The manifest and active plan now distinguish real-valued harmonic from extended-real subharmonic functions. All twelve direct consumers' actual use clauses were checked: they use chartwise harmonicity/subharmonicity, restrictions, finite maxima, local conjugates or invariant harmonic vanishing. No consumer uses a nonzero global Delta_X coefficient. `lem-surface-green-identity-on-smooth-bordered-domain` F2 was clarified to use the Laplacian separately in each chart. Its full current finite-localization argument was read: steps 2.1 and 3.1 explicitly prove intrinsic area and conormal densities by cancelling conformal factors, and step 11.1 uses only vanishing. Its Statement did not change. Twelve supplier quotations in batch 28 were refreshed; the prior alpha-j risk attribution remains in the updated specific review. The two Definition defects are uniquely owned by its one repaired item verdict: `frontier-37-owner-30-5b-surface-chart-laplacian` and `frontier-37-owner-30-5b-subharmonic-chart-codomain`. The consumer's necessary notation clarification does not manufacture a second mathematical defect.

Direct consumers: 
`lem-nongreen-simply-connected-surface-is-plane-or-sphere`, `lem-dipole-green-function-on-riemann-surface`, `lem-surface-green-identity-on-smooth-bordered-domain`, `lem-harmonic-conjugates-and-log-pole-monodromy-on-surfaces`, `lem-green-function-uniformizes-simply-connected-surface`, `lem-locality-of-subharmonicity`, `lem-green-kernel-exists-after-removing-a-chart-disc`, `lem-green-envelope-dichotomy-and-logarithmic-pole`, `lem-regular-exhaustion-and-dirichlet-on-riemann-surfaces`, `lem-green-kernel-symmetry-on-riemann-surfaces`, `lem-weak-harmonic-limits-on-riemann-surfaces`, `def-canonical-green-kernel-riemann-surface`.

## Exact carrier and structural dispositions

All current composite hashes below were obtained with `node tools/cross-group-edges.mjs carrier --run frontier-37-owner-30 --id ID` after edits and contract synchronization. They bind item/page bytes, owning contract and manifest. Fifty item changes are solely quotation/audit metadata enrichment: their raw item bytes equal the exact post-5a snapshots, and their clean accepted decisions have `defect_ids: []`. Ten source-item changes are accounted for by the repairs and necessary consumer notation changes above. The four new lemmas have complete proofs, explicit dependencies/Choice premises and risk reviews. The two existing A pages preserve every original item in its original relative order and append only those task-authorized prerequisites; no global page reading order changed. There were no removals to restore or disposition, and no gate outcomes were routed or manufactured.

| Kind / batch | Subject | Disposition | Current composite SHA-256 |
| --- | --- | --- | --- |
| addition / 5 | `lem-noetherian-open-subsets-are-quasi-compact` | accepted | `92b841952e4c146dc7a89d339879c55141d0ea06b18c5464e46f8ffe4e0aaf95` |
| item / 5 | `cex-weil-divisor-not-cartier-singular-cone` | accepted | `4fd70c3e2e717d33a48ae75963f4d8feccc5dba64803511945f679448390fd3e` |
| item / 5 | `def-order-codimension-one-rational-function` | repaired | `dfdc77300aff62b0e8f07c0b17d78e5e4898e193c001f9a5b528b885452fab2b` |
| item / 5 | `lem-cartier-to-weil-injective-normal` | accepted | `9d890b618cd2a7e72abe0559afc6e6756c574b77c66d95934525981008ab2227` |
| item / 5 | `lem-finite-flat-curve-fibre-degree` | accepted | `1269566b243a138f3a0dc4d012cbbe8c4ce5dc8c700e100dad71bcb0f7dd8400` |
| item / 5 | `rem-regular-locally-noetherian-locally-factorial` | repaired | `ca80760d8a013e0a920569da5469ae9f2d80e03fb427858a444a6569aaab91d6` |
| item / 5 | `thm-cartier-weil-isomorphism-locally-factorial` | accepted | `e3fe0ae678e682f545810e3b6eb529f05de9892c95479221b07f227d33874a56` |
| item / 5 | `thm-line-bundle-rational-section-cartier-divisor` | repaired | `7e5dce44bf3765c75630c4736376700ebdda543ed2601e7b9a8995ebead569c5` |
| item / 5 | `thm-principal-divisor-degree-zero-proper-curve` | accepted | `3a53f9b17fa494df49247a55efe72c4bccbdb9eb475b4989a38808d973a12bd3` |
| page / 5 | `cartier-and-weil-divisors-line-bundles-and-picard-groups` | accepted | `420f2a88a0bd7b586778003739c4541708bc934375db4768f2c5244772831820` |
| addition / 6 | `lem-projective-line-curve-and-divisor-basics` | accepted | `51928d66a5f60cd62510305a257aa7e32c5bf219e1b5f6d52b97a2835a373de4` |
| addition / 6 | `lem-projective-line-twisting-sheaf-ample` | accepted | `d13091961f338132d6ecf440fc2a4261c12c68df20f0cf1e7d3b0325ca6ed0b1` |
| addition / 6 | `lem-two-affine-double-cover-cohomology` | accepted | `c4585215f120969cb89b57e307f1012d507cd0138464db93376d8da4a0f96954` |
| item / 6 | `cex-degree-zero-line-bundle-no-section` | accepted | `f9a4669e835aa666a75d8f6239860edc38849caacbe1677bbd60fdb44027cbc4` |
| item / 6 | `cex-inseparable-map-riemann-hurwitz-naive-fails` | accepted | `ec94d5cbaaaffc91182dac010394614847c2913ee71ff0b9491df6322261df10` |
| item / 6 | `ex-basepoint-linear-system` | accepted | `440f2099b3ba6b3e48b8e5d033fc9a2dece9c1a313855cf44691ecee46921058` |
| item / 6 | `ex-hyperelliptic-curve-double-cover` | accepted | `c5b10621ec94a982212d368e9869016b76f1d02ce156959b9d45c3234eda7cc3` |
| item / 6 | `ex-projective-line-divisors-linear-systems` | accepted | `46f47f40de45aecd9b5a6bad0c41ebe3a944088546f2c59481bb02526eb83dc5` |
| item / 6 | `ex-ramification-power-map-projective-line` | accepted | `e2be9d2ed34c8029ed57972da0102004bb446c65de2ea76ed0188c78591d4493` |
| item / 6 | `ex-smooth-conic-is-projective-line-with-point` | accepted | `2cb647ae2840bfa284020a1ef89b93e457c2ad3aa39f71503b161b3907ac885d` |
| item / 6 | `lem-effective-divisors-sections-mod-scalars` | accepted | `65adb97b542fab1d56a4fdcfa35b7fd1fa092b67219d2eb449febd76d3383025` |
| item / 6 | `lem-function-with-poles-defines-map-p1` | accepted | `adc725644f0472a7297c2159eae662f4ec6aedf5fc5c105919b255a18fa875ff` |
| item / 6 | `lem-rational-differential-divisor-well-defined-class` | accepted | `878851b594e682c2ee16db4f73693560c936ec6fd075b080cffa51bed41e6e60` |
| item / 6 | `lem-torsion-quotient-invertible-sheaves-effective-divisor` | accepted | `482ba7fa85b0a4559e29c23dcf50aeaf8c83fad60f92f64951fd033395571257` |
| item / 6 | `thm-base-point-free-linear-system-morphism` | accepted | `64dfc847736c5c900f56b87bfec76acc1bd23437ba584bdcf619063ab9ccf1c3` |
| item / 6 | `thm-canonical-bundle-ramification-formula` | accepted | `0aab3f92bde29adeef513d843bae66d81deb16b91e3133bd825da9e25fe1c1f3` |
| item / 6 | `thm-cartier-weil-divisors-curves-agree` | accepted | `cb40fab5b2882e9c271a1c5013e780dabd77a220a40199d50ec983ceb6724cfc` |
| item / 6 | `thm-degree-positive-line-bundle-sections-zero-bound` | accepted | `025d26dca9e8fa2b8b3a023d4811637a1eed811db3ec5a2374c85808a746c3e0` |
| page / 6 | `smooth-proper-curves-divisors-genus-and-ramification` | accepted | `10759a3c7018e44564f15f1be35fccfecac83a5ea7b5ce49c6a914ffead62406` |
| item / 7 | `cor-degree-zero-line-bundle-section-trivial` | accepted | `ea63749fc9925d88ea9d4bf667e21c5c9c1e5332fa367e9a972fea6e920a9161` |
| item / 7 | `cor-existence-rational-function-bounded-pole` | accepted | `d74f797dd0f86710474db2d9d28a3b3d05ce59624a61df31f15ce8a67a73c8a2` |
| item / 7 | `cor-nontrivial-degree-zero-line-bundle-no-sections` | accepted | `cf8461c9ca0f3ee93f78e1a50bd5ecf885524c6d62bd9d285883d0d802c7d61e` |
| item / 7 | `cor-riemann-inequality-divisor-sections` | accepted | `c26488b83f7e2f10af7b8c80b8ec6de4532d3b2db74a2c29ed8aba85160fdabd` |
| item / 7 | `cor-smooth-proper-curve-finite-map-projective-line` | accepted | `7ffbcef4b76980c781d59fb6c1b0a5f13b27d469c91a9ffb073292e85b64803a` |
| item / 7 | `ex-adding-point-section-dimension-jump` | accepted | `d09756f69b17398242d2cc8c06d687c9a0cdedf253383b0b828965038d795900` |
| item / 7 | `ex-degree-zero-principal-divisor` | accepted | `b682287a0872a334bc2d619e142c1f5e7fbcf70cb2ff35815376234f93a589d7` |
| item / 7 | `lem-add-one-point-exact-sequence-line-bundle` | accepted | `daaf03be1951561a5be502dbcfc377b319a384aed1aa0f2da47de0b5b5a0b9e8` |
| item / 7 | `lem-divisor-order-monotonicity-sections` | accepted | `86d2e9f5ba6b00251bda673c225bfb66520da37d273e9133ef8167686a472703` |
| item / 7 | `lem-projective-line-divisors-classified-by-degree` | accepted | `6236fa116d38bbc1858a4307ca31722f1bb9f6bf6fa3db6f487b929b53a3e3d2` |
| item / 7 | `lem-riemann-roch-space-finite-dimensional` | accepted | `c2e4747cb4f3d942f334262e9f288e3117b1159bdd756032151c67ef7c15c6fd` |
| item / 7 | `thm-euler-characteristic-degree-shift-curve` | accepted | `ae35b828ec413ac1ccee89a2b90f02c3dd92458bc8fc482c29e1cafd6282d19d` |
| item / 7 | `thm-h1-line-bundle-vanishes-sufficiently-high-degree` | accepted | `23cd87031cfea2bcdea1b736693f42df9dbc4336e70925d9c57899355d759b55` |
| item / 7 | `thm-riemann-roch-as-l-minus-index` | accepted | `129995300c4996c5bb43dd781f1a12e7073b44c5aff14089a4f859e982fe6073` |
| item / 7 | `thm-riemann-roch-euler-characteristic-curve` | accepted | `e3ddd77886fd485d4a8f52f72473a213300b8712f635fca240b5ec4c26de8573` |
| item / 8 | `cex-degree-two-g-minus-one-not-always-basepoint-free` | accepted | `33706f5d2867d5a63ce989b84b9cf581beed3580eb0cfd888efebc5fbd82d354` |
| item / 8 | `cor-degree-three-line-bundle-embeds-genus-one-plane-cubic` | accepted | `2cdeaa83969d0724f60d4a7a8734528ab08f494084fb63a2b866fb19ca5261e1` |
| item / 8 | `cor-genus-degree-smooth-plane-curve` | accepted | `4be4115aab32eb7110be03a9f999ff2375c238d6e58d121dd44993543a03a40c` |
| item / 8 | `cor-h1-line-bundle-dual-sections` | accepted | `aac2f2cbabb046c42edff30df114d4c623054cb2d8d46ba3844a044499099f04` |
| item / 8 | `ex-genus-one-rr-degree-positive` | accepted | `5675ccb4c3667de32d065b8457372df7f0aba36d9f6bfc2a58fb01538549a09b` |
| item / 8 | `ex-plane-cubic-canonical-trivial` | accepted | `a22b9158c1866495ff4e2f5cfa9dd8379337016ddb20fd7b364ef85dce35b02a` |
| item / 8 | `lem-adelic-quotient-computes-h1-structure-sheaf` | accepted | `0e0aac3f1a273ff0192125d391594020b2172587b1b8100b58c852da932cc23e` |
| item / 8 | `lem-degree-pullback-divisor-finite-morphism-curves` | accepted | `ec5fa475809a2e18801b711f81d7ed254ecfa811e6c38bd3997f4cd912b94f73` |
| item / 8 | `thm-degree-two-g-line-bundle-basepoint-free` | accepted | `3ebbabec399b0ee176996901a30e43d53695322f8e58d1ce74c03860d16ab8d2` |
| item / 8 | `thm-degree-two-g-plus-one-line-bundle-very-ample` | accepted | `b7c6a10776f46b932cb020b723710b5ce7790eafffb50b768e57daf1499da0f9` |
| item / 28 | `def-harmonic-and-subharmonic-riemann-surface-functions` | repaired | `f4eb5d1ced1390c85ae1a274c9a08a97ee95c44e9774d6fe7d30599a0a8d6b15` |
| item / 28 | `lem-dipole-green-function-on-riemann-surface` | accepted | `cab96f8910d8337fcce6c5dfc18e236a5c3cbfa743224c21f2836f9e3bcbe960` |
| item / 28 | `lem-green-envelope-dichotomy-and-logarithmic-pole` | accepted | `e4ed098800ff02976e71087033d31194fae098eb52c350b22de06cf0c29ddb5a` |
| item / 28 | `lem-green-function-uniformizes-simply-connected-surface` | accepted | `5f6afc3b41519ab7925b873d90f5dbf59b4908d6562e8c90372908aed9adeb3d` |
| item / 28 | `lem-green-kernel-exists-after-removing-a-chart-disc` | accepted | `d29fbcfb321d64093715e7d56f80aebf28e241a0b642f146fe89ff2b3865d43b` |
| item / 28 | `lem-green-kernel-symmetry-on-riemann-surfaces` | accepted | `683183c44122d2cababe7f2ff657e5568a6ea361a370bfe1563b26cb3b17fa4e` |
| item / 28 | `lem-harmonic-conjugates-and-log-pole-monodromy-on-surfaces` | accepted | `37ca5cabae93523cd258ec4bf94217465a2c5d9f9c44cc8f02d56e5a4b1a3a6f` |
| item / 28 | `lem-locality-of-subharmonicity` | accepted | `a5e166be52fe9a05245d63f8ebf7a65e657369260e0a9d7a66edd48d409eb5fc` |
| item / 28 | `lem-nongreen-simply-connected-surface-is-plane-or-sphere` | accepted | `a413b491e50b756c558c8f989820edc5d5c43215486232d7233e2763eff54ba8` |
| item / 28 | `lem-regular-exhaustion-and-dirichlet-on-riemann-surfaces` | accepted | `6d20b6689e9e32ec8be80eb4e2309072d298571756a257802e6173433efa0201` |
| item / 28 | `lem-surface-green-identity-on-smooth-bordered-domain` | accepted | `e512321257223e7fd4f7fd529899ee1ff17c3f0feebe9ca5faf4d0f8f9df278b` |
| item / 28 | `lem-weak-harmonic-limits-on-riemann-surfaces` | accepted | `5b4c59db86da888367fe134f102c17403278b755b1876f948dceec7ab4b73396` |

The owning per-batch frontier-dependency inputs were updated from the actual reviewed edges, preserving historical evidence and stable IDs; removed forward-use rows remain present with exact removal evidence. The unified ledger was rebuilt with `tools/frontier-dependency-ledger.mjs refresh`. Existing proposed withdrawals and unrelated historical records were preserved.

## Impact-window evidence and historical continuity

`research/frontier-37-owner-30-impact.json` binds pre-author -> post-5a: 830 changed public interfaces and 792 required current consumers. It records alpha-5b-lead as reviewer, exact changed supplier IDs, current consumed clause(s), dependency/citation routes and hashes for every affected item. The original baseline is unchanged. The count increased from the initial 791 because the new P1 prerequisite itself consumes an authored interface.

820 original changes are newly authored interfaces. The remaining ten pre-existing changed subjects were investigated against durable preimages: eight recovered preimages match the pre-author surface fingerprints. The Statements of `cor-ring-of-integers-is-a-dedekind-domain`, `thm-number-field-integral-ideal-factorisation-in-zf`, `thm-ramified-primes-and-the-number-field-discriminant`, and `thm-ring-of-integers-free-of-rank-degree` are byte-identical to those preimages; their actual finite-module, local-layer/nilpotency, ramification/discriminant and integral-rank consumer clauses remain licensed. The owner's durable lattice and ideal-factorization repair evidence preserves those prerequisites.

The two Levi Definitions prepend positive dimension and explicit **local** one-based aliases; their existing predicates are otherwise retained. Canonical complex coordinates were checked in `rem-complex-euclidean-space-dictionary`, which already scopes m>=1 and indices 0,...,m-1. The PCP and Gap-CSP Statements add explicit AC; the current direct reduction consumers carry that premise. Durable owner evidence checked: `frontier-37-owner-30-levi-definition-owner-repair.md`, `-levi-domain-definition-owner-repair.md`, `-pcp-choice-repair.md`, `-number-field-lattice-repair.md`, and `-zf-ideal-factorisation-repair.md`. These are historical review evidence, not fresh source attribution. Preimages for the monotone-sublist counterexample and four-petal sunflower example were not recovered; neither has a required impact consumer, so no historical delta or approval was invented for them.

Native current-content risk evidence is retained with its named reviewer, exact notes and durable report hash. Each reused unedited consumer has a guard hash matching post-5a; locally changed carriers instead have the direct reviews above. Every receipt row spells out its current source routes and consumed clauses, including declared inherited uses without a direct body wikilink. Cross-batch clauses have fresh edge dispositions. These are interface-continuity dispositions, not copied whole-proof approvals. Ordinary-risk definitions, elementary arguments and orientation carriers were read in their actual scope. Prior escalation/historical-uncertainty attribution is retained; no imported or historical review is silently promoted to this lead's new mathematical judgment. The broader old fixed-direction vanishing notes are explicitly excluded from reuse for an all-degrees claim.

The first receipt initially had two pending published typing dispositions and correctly failed on exactly those subjects. The owner then repaired both exact carriers with supported, current-hash local repair receipts. Their complete current proofs and actual prerequisites were reread, original findings and before-hashes were preserved, and the receipt now has 780 still-licensed and twelve repaired dispositions. Its final local validation passes with zero errors and warnings. Later published judgments remain owed.

`research/frontier-37-owner-30-impact-5b.json` binds post-5a -> current: 16 changed interfaces and 158 affected consumers: 151 still-licensed, one not-load-bearing and six repaired dispositions. The two additional interface changes are the separate owner published repairs; their impact adds thirteen consumers, with the remaining thirteen exact Statement uses or orientation uses checked below. It records a reviewer and the same exact clause/route/hash evidence. The specific signed-divisor typing, empty-unit caveat, earlier-prerequisite, normality-witness and chart-Laplacian corrections are propagated only where actually consumed; unchanged consumer Statements stop further surgical edits. Its receipt validation passes with zero errors and warnings.

## Published findings, serialized owner resolution and later handoff

This lead kept published items read-only and first recorded two confirmed standalone one-based coordinate defects in the locked canonical ledger. At m=1 the written z_1/v_1 endpoint was undefined under the canonical 0,...,m-1 coordinate dictionary; the aliases in the repaired Levi Definition were explicitly local to that Definition. The original exact evidence is preserved:

| Published subject | Original raw SHA-256 and defect location | Current owner repair |
| --- | --- | --- |
| `ex-the-ball-is-levi-pseudoconvex` | `8a9daed0ebf3b5a590c40a41789e0adff509a4ff82b7018dd28333557bd3af7e`; Example, Given and Verification 1.1 standalone coordinate/vector sums lacked aliases. | Raw `98607dff6515655d14cd3e64bb3f5e27758b7f0c9b1f212b3aa630044632db59`; canonical content `3c98f8f3584984f0c4b99e42fe15abce3711cff4a7a27c65eed6fa1e1403ead8`. |
| `thm-equivalent-psh-exhaustion-and-boundary-distance-pseudoconvexity` | `8dd8af58d805cd0c837915e3be7f09e872305b0d77cc0f323d7949240246e2b4`; Proof 1.1 asserted an unbound one-based squared norm. | Raw `da5a2e3b376d85115bd7fcb54001654de1154a4b026fb60f047b662f1d707573`; canonical content `e63689ac8c16765fa3fb6b565b4755a1b9e430ee400c215bf7f7988998248070`. |

During final validation, the current carriers changed through a separate serialized group-e owner repair. The durable owner resolution is `research/frontier-37-owner-30-5b-published-coordinate-owner-repair.json`, with exact archived `.before.md` files and two supported receipts in `research/frontier-37-owner-30-published-repair-evidence/`. Current raw hashes match that owner record. The read-only `recordedPublishedRepair` validation returned `ok: true` for each receipt, checking actual pre-edit ownership claims, original audited before-images, content currency, canonical locked-ledger hash-bound evidence and actual bound precheck/renderer results. The owner's local-check attribution is preserved; none is represented as a new lead judge result. Their repair pointers and exact evidence files were not rewritten by this lead.

The full current ball verification was reread against the canonical dictionary and the actual Levi-form and Levi-domain Definitions. It consistently uses j<m and both Levi indices j,k<m, giving the identity matrix and sum of vector-component squares. At a unit-sphere point some real coordinate X is nonzero; partial_X rho=2X proves nonzero differential, and its explicit positive-radicand square-root graph supplies the local smooth defining function with negative side B. These are precisely the C2 boundary premises of Levi pseudoconvexity. The Example denotes the same unit ball after relabeling and has no downstream item consumers.

The full current exhaustion proof was reread with `def-polydisc-boundary-radius`, `def-plurisubharmonic-exhaustion-and-hartogs-pseudoconvexity`, the canonical dictionary, Levi criterion and finite-maximum stability. For a proper domain the sup-norm distance to its nonempty complement is positive and 1-Lipschitz; for the whole space the existing Hartogs Definition explicitly sets the boundary function to zero. Thus b is continuous and psh, q is the canonical squared norm with identity Levi matrix, and u=max(b,q) is continuous psh. Negative sublevels are empty; nonnegative ones are bounded by q<=c and stay at distance >=exp(-c) from the complement. At every closure point the globally continuous distance retains that lower bound, placing the point in the domain, and continuity of u retains u<=c. Hence sublevels are closed and bounded, therefore compact by the exact dictionary clause. This closure-point argument justifies the written sequential argument without requiring a separate sequence-selection hypothesis.

The exhaustion Statement is byte-identical to its exact archived preimage. Its actual direct uses remain only the stated direction Hartogs pseudoconvexity -> continuous psh exhaustion: L1 of the published Levi/Hartogs theorem, F1 of `thm-levi-problem`, and F3 of `thm-pseudoconvex-domain-smooth-psh-exhaustion`. The Remarks link in `ex-pseudoconvexity-of-a-hartogs-domain` explicitly says that the converse is not supplied and uses no exhaustion premise from this theorem; its current-window disposition is not-load-bearing. Nine further dependency consumers inherit these unchanged Statements through their exact routes, recorded individually in the expanded current impact receipt. No sound consumer was edited just for citing the corrected proof.

The lead's initial exact-ID rows, suppliers and repair strategies were merged into `research/published-consumer-supplier-ledger.md` while holding its own exclusive lock, rereading and preserving the deduplicated index and literal counts, then releasing only its own lock. The later owner independently updated those two canonical classifications from A-P to A-R with truthful local-correction scope under the serialized published policy; original dated findings and before-images remain. Unrelated open/historical rows remain intact. No closed 5b carrier-defect row or false-positive gate verdict was manufactured for the published subjects outside this lead's carrier ownership.

Both impact dispositions are now locally resolved by that explicit owner evidence and fresh current-content review. **Later published-repair judging/adjudication remains owed.** Supported receipts are local correction receipts, not judge passes; the engine must preserve those exact repair handoffs for the applicable later stage. No judge cycle, stamp or published-repair certification was performed here.

## Local validation and boundaries of completion

- Reflow and precheck: all ten edited/new proof-bearing divisor/curve items passed; the additional Green-identity item passed. Definitions/remarks have no phase proof to precheck.
- Renderer: all 13 divisor/curve item/page carriers passed the actual YAML and KaTeX checks; the three additional impact-repair items passed.
- Strict proof-contract validation: batches 5, 6, 7, 8 and 28 passed respectively 47/47, 52/52, 44/44, 58/58 and 24/24, with zero errors and warnings.
- Edited/new HIGH/CRITICAL risk records were reviewed specifically, after running their owning risk reports without `--require-reviewed`; the focused final `--require-reviewed` runs passed. The chartwise Green-identity risk record retains its prior attribution and adds the current specific review.
- Dependency levels: `tools/item-dependency-levels.mjs check` passed for 824 items on 60 pages, maximum level 29. New supplier levels and necessary consumer metadata are synchronized without replacing a baseline.
- Frontier dependency-ledger refresh passed. The post-5a/current impact receipt passed; the pre-author/post-5a receipt initially reported the two confirmed published defects and now also passes after their explicit serialized owner resolution.
- Final focused cross-group verdict validation: PASS with zero errors. The validator checked original and introduced edges, all eight forward dispositions, all current carrier changes, exact hash currency and unique closed-ledger ownership.

Initial local mechanical invocations exposed an unsupported renderer flag, precheck-required proof ordering/numbering, stale exact quotations and invalid defect-subclass enum spellings. The corrected commands, canonical proof order, exact quotations and accepted enum values passed; these command/metadata failures did not create mathematical defect rows. No engine gate battery, scheduling, stamping or judge cycle was initiated. No local 5b obligation remains unresolved on these current carriers. The engine still owns the closure gate battery, final judgment/stamping and the later published-repair obligations; those stages have not been self-certified by this lead.
