# Batch 67 Step-3a adjudication

Run: `non-ml-math-remaining-81-2026-10-18`; group: `batch-67`.

Scope owes only `refuter:67:1`; no touched, page or reader decisions. Initial risk-report ran successfully and routed 28 HIGH/CRITICAL items plus one ordinary definition.

## Completed dependency-ordered review

### `def-pa36-flag-tdo-and-module`

The isotropy sheaf character is defined for every complex weight, whereas associated algebraic line bundles are restricted to integral weights. The shifted Harish-Chandra evaluation is at kappa-rho; O_X(eta)=L_{-eta}. AC is inherited explicitly. Rank zero gives X a point and D=A=C. Checked the actual group, character, tensor, HC and rho supplier clauses. No defect in the definition.

### `lem-pa36-complex-weight-central-character-separation`

Read all four steps. Reality of q forces w to stabilize Im(kappa); after a temporary chamber conjugation q belongs to Q_I. The dual affine point stabilizer expresses w using integral roots. Undoing the conjugation before imposing antidominance preserves the original positive cone. Telescoping the reduced word gives negative integral coefficients of positive roots; pointedness proves both assertions, including regular zero difference. Checked the finite/affine Weyl and lattice supplier statements. Rank zero and w=1 have the asserted vacuous behavior.

### `lem-pa36-module-global-sections-derived-cohomology`

Read steps 1.1--3.1. Stalk adjunction makes the skyscraper injective, and AC makes the product exact; the diagonal is injective because its x component detects each nonzero germ. Extension by zero is an exact module functor on stalks, giving injective restriction and surjective restrictions of I. Underlying flasque resolution computes ordinary cohomology. Noncommutative unital rings and empty X cause no change. Exact module/injective/acyclic supplier statements checked.

### `lem-pa36-p1-line-bundle-cohomology`

Both steps checked directly: exponent intersection is 0..d for d>=0, empty otherwise; quotient removes n>=0 and n<=d, leaving d+1..-1. In particular d=-1 has H0=H1=0 and d=0 has H0=C; no degree>=2 in the two-open Cech complex. The affine-cover supplier applies to this separated projective line and invertible QC sheaf.

### `lem-pa36-principal-nilpotent-borel-orbit`

Read all three steps and exact principal-sl2 supplier argument. Positive height raising is onto the next height on every even sl2 string. The simple-root torus map is an isogeny and surjective over C; finite height elimination preserves lower heights. The converse preserves nonzero simple coefficients and rank zero is explicitly {0}. Root-factorization and principal-triple clauses supply the claimed inputs.

### `lem-pa36-qcoh-filtered-union-and-cech-colimits`

All three steps checked: affine denominator clearing extends a chart section after twisting, and a common further power kills finitely many overlap differences. Finite sums of invertible sheaves have coherent images on this Noetherian flag variety, yielding a directed union. Finite separated affine Cech terms commute with filtered colimits, and exactness gives cohomology in every degree. AC is explicit; zero sheaf is included. Actual affine/QC/coherence/colimit/projective supplier clauses checked.

### `lem-pa36-flag-tdo-pbw-and-twist`

All four steps checked. Ordered frame rewriting resolves coefficient, bracket and triple overlaps by anchor and Jacobi identities. Equivariant isotropy-character elimination resolves the extra overlaps and leaves tangent monomials. Integral Diff(L) follows by symbols, and local frame conjugations prove all-complex tensor shifts with inverse -eta. Removed the optional final Diff(L,L tensor L_eta) restatement, whose L from step 3.1 existed only in the integral case. The general local proof and Statement remain unchanged. No judge record was present.

### `lem-pa36-nilpotent-normality-and-springer-functions`

Read every step and the full published nilpotent-central-fiber proof. The incidence bundle is closed in X times N, hence proper and onto. Nonprincipal elements miss a simple coefficient and lie in parabolic unipotent radicals; the associated-bundle dimension is 2N-2. The principal orbit is regular by the supplier Jacobian argument, so CI plus R1 gives normality. Bruhat proves singleton geometric fibers over that orbit; proper/quasi-finite gives finite, and separability plus the discriminant argument gives generic degree one. Coherent proper pushforward is finite over the affine base, hence integral inside the same function field and equal to its normal base ring. Rank zero gives C identically. No defect found.

### `lem-pa36-partial-flag-twist-product`

All three steps read. Zero alpha pairing kills the rank-one derived Cartan, so kappa is a parabolic Lie character. A torsor chart splits the Atiyah algebroid into base and relative factors; the relative rank-one character is zero and yields ordinary P1 operators. Gauge derivatives transform by the chain rule and obey the torsor cocycle, giving the claimed ordinary inverse image, not a regular relative D module. The rho line restricts to degree -1 and shifts kappa-rho to kappa. Checked actual torsor, P1 and PBW supplier clauses; nonintegral base characters are allowed. No defect found.

### `thm-pa36-global-twisted-differential-operators`

Confirmed refuter:67:1 nonfatal. Original step 1.1 used O_X(kappa+rho)* outside its integral domain and obscured the fiber convention. Replaced it by a local right-O fiber calculation: moving vector-field coefficients right subtracts the trace 2rho, giving the cyclic highest weight kappa-rho for every complex kappa. Step 2.1 now explicitly uses right locally free PBW modules and right-linear finite matrices. Central annihilation on every closed fiber implies zero on reduced X. The symbol composite is the Springer pullback and an isomorphism, so the intermediate injective graded map and filtered induction prove the unchanged all-complex Statement. Rank zero and singular kappa impose no additional condition. Checked all cited supplier statements, the nilpotent supplier proof and Kashiwara 6.2.2--6.2.4. Proof remains ai-altered and no judge record was present. repair_confidence=1.

### `cex-pa36-positive-twist-global-sections-fail`

Read all three steps. For c>=1 the line O(-c-1) is a nonzero D_{c rho} module with H0=0 and H1=C^c by the explicit Cech exponents. The coroot pairing c is positive and nonzero: regularity holds, antidominance fails. Ordinary sheaf cohomology equals derived global sections on the full module category, giving the asserted nonexactness and failure of conservativity. c=1 leaves exactly exponent -1; no zero boundary is asserted.

### `ex-pa36-sl2-twisted-differential-operators`

Read all three verification steps. Differentiating the inverse matrix action gives the three displayed operators with d=-c-1. Conjugation by z^d and coordinate inversion sends derivative to dw-w^2 derivative and yields the stated second chart. Their commutators give [h,e]=2e,[h,f]=-2f,[e,f]=h. c=-1 removes the scalar terms and gives ordinary Diff(O). Uses only integral c, so no formal line is needed.

### `lem-pa36-ample-translation-splittings`

Read all six steps and Kashiwara 6.3 complete proofs. Rational finite V has a B-stable highest-first filtration, with associated bundle quotient lines O(eta_j). The filtration stays exact on arbitrary M because its quotients are locally free; diagonal Lie action preserves it. Character separation applies to the actual successive quotients. In the regular evaluation case eta-w^{-1}eta_j is positive or zero and regularity rules out the latter unless w=1. Finite central-ideal powers are comaximal, giving sheafwise differential projectors and natural complex-linear splittings. No O-linear splitting or rational B-action on arbitrary M is presumed. All actual HC/CRT/Borel-Weil/weight-separation inputs checked.

### `lem-pa36-twisted-associated-bundle-and-parabolic-descent`

Read all six steps and the defining twisted-module equations. Local associated bundles are exact even for infinite rational modules. For gamma transported by g, covariance gives both mixed commutator identities; beta-gamma is the action-algebroid representation and dr-pi=tau is its isotropy scalar. In H tensor V, beta and gamma both acquire dV and cancel, so constant V is horizontal. Negative-root PBW symbols identify associated Verma bundles with right-O tensors of D, including eta=rho. For parabolic H, relative terms cancel to ordinary inverse image; twisting the rational B action by integral rho shifts kappa to kappa+rho. No nonintegral rational character is used. Exact torsor, PBW, Verma and partial-product suppliers checked.

### `lem-pa36-localization-adjunction`

Both steps checked. A free presentation gives QC localization; sheaf tensor-Hom and evaluation at 1 identify global D-linear maps with Gamma M and retain the correct left A action. Both natural variables and right exactness are explicit. The fixed arbitrary complex parameter requires no exactness or regularity premise.

### `lem-pa36-singular-verma-chain-and-generation`

Read all nine steps and Kashiwara 8.3 proof. Generic real a+tb has exactly the complex stabilizer and zero roots, so the full-zero-subsystem hypothesis supplies W_kappa=W_J. Positive reduced prefixes give m_j>0. Singular vectors f_alpha^m v define injective PBW maps; quotient PBW order identifies finite alpha strings induced parabolically. Removing rho leaves integral rational weights and local finite parabolic action; bounded nilradical degree is stable. The V downset quotient is B-stable, its extremal line has multiplicity one, and antidominant character separation isolates only mu_N. A central polynomial is a genuine twisted-module projection onto H_N; the Hopf tensor induction isomorphism and horizontal associated-bundle identity give the finite global generating set. Coherence follows locally from Noetherian PBW symbols. Empty J leaves the proved empty chain. Exact root, Verma, representation, Hopf and descent supplier statements checked.

### `thm-pa36-flag-d-affinity`

All three steps checked against exact translation, Serre, eventual generation, filtered-union and derived-module supplier statements. For each coherent submodule choose a sufficiently positive line individually; natural coevaluation factors its cohomology map through zero and the sheaf splitting makes the map into H^i(M) zero. The colimit identifies H^i(M)=0 for arbitrary QC M. Derived-module cohomology supplies exactness. For regular kappa, split evaluation forces Gamma(M tensor L)=0; eventual generation of each coherent twist forces that coherent subsheaf to vanish. Splittings are applied to M, never asserted for its arbitrary coherent submodule. Non-antidominant regular weights are explicitly excluded.

### `ex-pa36-integral-line-bundle-translation`

All three steps checked. O(-1) at kappa=0 becomes O(-2) at kappa=rho. HC polynomial t+t^2/2 evaluates to -1/2 and 0 at -1 and 0. The Cech quotient has precisely z^{-1}, H0=0 and H1=C. This proves nonfaithfulness and nonexactness after translation without asserting invariance of global sections under a sheaf twist equivalence.

### `ex-pa36-verma-delta-rho-shift`

All three steps checked. Ordered partial^n z^m monomials give the delta basis; z partial delta=-delta gives e delta=0,h delta=(c-1)delta. The Verma map is bijective on f^n bases, and C acts by (c-1)+(c-1)^2/2=(c^2-1)/2. This also checks the right-O fiber convention used in the repaired global TDO proof. c=1 gives highest weight zero; c=-1 agrees with ordinary untwisted delta.

### `lem-pa36-global-section-unit`

Both steps checked. Arbitrary free presentations localize right-exactly; Gamma is exact on the resulting QC modules under antidominance. Direct sums are filtered unions of finite sums, and finite affine QC cohomology commutes with the filtered colimit, so Gamma D^(I)=A^(I). Naturality identifies the cokernel comparison with the actual adjunction unit. No finite generation or regularity is assumed.

### `thm-pa36-antidominant-singular-serre-quotient`

All five steps read. Exact Gamma makes K Serre; localized short exact sequences fail injectivity only in K. Unit and counit become isomorphisms in the quotient by the triangular identity and exactness. The counit image is globally generated, and its set-indexed sum of K-submodules stays in K since Gamma commutes with sums and is exact. Dividing by that sum eliminates all K-subobjects. Maps between generated K-torsion-free representatives lift by adjunction and descend across the K-kernel, proving full faithfulness and essential surjectivity. No whole-category equivalence is claimed at a singular parameter.

### `thm-pa36-regular-beilinson-bernstein-localization`

All four steps read. Unit plus triangular identity makes Gamma(counit) invertible; exact conservativity kills its kernel/cokernel. Filtered Noetherian PBW charts and Noetherian A give finite presentation of localizations of finite modules. Conversely QC plus coherent finite local generators, counit surjectivity, and quasi-compactness yield finitely many global D-generators; exact Gamma then gives finite A-generators. Statements concern D-coherence, not O-coherence. Actual finite-variable Noetherian, enveloping, PBW, smooth/projective and adjunction suppliers checked.

### `cor-pa36-category-o-localization`

All four steps read. Finite-length factors with exact central character have lambda+rho in W kappa; integrality then passes to all weights of V. Each finite upper-nilpotent orbit is h-stable, has integral torus weights, and integrates by finite exponential/BCH to rational B. Diagonal localization is strongly equivariant. Conversely global sections of a rationally linearized coherent module are locally finite rational B (use a finite affine cover for the finite coaction expression), hence h-semisimple and locally n+-finite; the established equivalence supplies finite generation and exact central quotient. Natural units/counits restrict. The exact category is explicitly separated from a generalized block; singular/nonintegral parameters are outside scope.

### `lem-pa36-relative-p1-singular-kernel`

Read all seven steps and complete Kashiwara 7.7 and 8.2 arguments. Evaluation L tensor D to L has order-one kernel L tensor T=O(1); its two global sections generate the whole differential kernel. Twisting a Gamma-zero D0 module to ordinary D, regular generation gives a sum of E and hence a quotient of L copies. Its untwisted kernel in O copies has trivial global Lie action and regular equivalence forces the canonical O tensor Gamma form. Affine push to P1 transfers the argument to any central C-algebra R; naturality retains its R action and allows arbitrary scalar extension. For commuting base differential operators the same natural evaluation retains the A action. Finite product generators have finitely many base coefficients, proving D-coherence of recovered N. Higher direct images vanish locally using affine push plus rank-one singular vanishing. Chain-rule-compatible evaluation glues and p_*p^dagger=id proves uniqueness. Both directions, nonflat scalar extensions and zero N checked.

### `cex-pa36-singular-localization-and-parabolic-kernel`

All three steps read. At kappa=0 the nonzero line O(-1) is a D0 module. Its two-chart exponent ranges are disjoint in degree zero and cover all Laurent exponents in degree one, so H0=H1=0. For rank one P_alpha=G, the parabolic push is the same zero H0. This refutes conservativity and detection while leaving antidominant exactness intact.

### `lem-pa36-singular-parabolic-kernel`

All three steps read. Actual relative P1 product classification applies to coherent product differential modules, yielding higher-image vanishing locally and hence globally. The recovered base module p_*(O(-rho) tensor M) has the partial TDO action; canonical evaluation is compatible with torsor gauge maps and glues. Conversely O(-1) relative factor has zero push; tensor back and p_*p^dagger=id recover the base module uniquely. Both directions and zero module checked. Coherence uses base differential finite generation, not O-coherence.

### `ex-pa36-finite-dimensional-integral-central-character`

All three steps checked. Highest-weight scalar gives exact chi_{(n+1)rho}; reflection changes it to the same character at -(n+1)rho, with strictly negative nonzero coroot pairing even at n=0. Finite-dimensional Cartan-semisimple modules satisfy the actual Category O supplier. The integral regular corollary applies to exact, rather than generalized, central action and gives coherent strong B equivariance.

### `thm-pa36-singular-parabolic-kernel-filtration`

All five steps read and compared with complete Kashiwara 8.3 proof. The full zero-root hypothesis and fixed longest-word chain supply the sequence independently of M. Subtracting rho sends every permissible integral pairing strictly negative and every nonintegral pairing to a nonintegral value, making kappa-rho regular antidominant. Its coherent generation twists back to E^n onto M. If Gamma M=0, all these maps kill T=D Gamma E; finite global generation puts E_N in T. Image chains in E/T and then M are coherent and their parabolic-zero property survives quotients by exact relative push. The converse uses exact Gamma successively. With J empty, E_N=E implies E/T=0 and M=0, the correct empty filtration. Zero successive quotients are allowed; no uniqueness of word asserted.

## Decision and repairs

`refuter:67:1` → `confirmed_nonfatal`, route `flagged`, repair confidence 1, closed defect `nmm81-b67-3a-nonintegral-source-line`. The sole decisions entry is in the companion JSON. The observed undefined algebraic line is a real defect; it is not classified as a false positive after its repair. The local highest-weight calculation now uses right-O fibers and a coefficient/derivative commutator, with no integrality hypothesis and no unexplained principal-antiautomorphism character change. All essential mathematics and the all-complex content contract are retained.

Two further nonfatal defects found during the required risk review are locally closed and reported for owner/engine supplemental coverage, without inventing routed obligations: `nmm81-b67-3a-principal-triple-locator` corrects the nilpotent supplier locator from Proof 2.1 to 1.2; `nmm81-b67-3a-pbw-nonintegral-restatement` removes an optional expression in terms of an integral-only line L from the all-complex twist proof. Each has a separate closed ledger row with repair confidence 1 and report evidence. No Statement, Definition, dependency array, title, page placement or provenance classification changed. The proof-contract derivation claims and inputs are synchronized after reflow. Final manifest comparison found one pre-existing omission: the flag-D-affinity row omitted the current Statement sentence explicitly asserting exactness, although its current proof and contract already include it. Synchronized that manifest statement mirror as metadata (`reviewed_no_defect`, `change_kind: metadata`, `defect_ids: []`); this adds no obligation or mathematical defect row. All other claim/dependency mirrors are unchanged. All three edited items had no judge record; no old judgment was retained for the rewritten argument.

## Historical comparison and supplier interfaces

The immutable pre/post inventories both contain the same 29 items and two pages, with identical pre/post raw item hashes throughout; the reader made no repairs. All 26 items not edited here still match those raw hashes. Only the three disclosed item files differ after this adjudication. These are raw item hashes from the snapshots, distinct from the verification-excluding guard hash; no decision hash or engine stamp is authored here. The refuter observation is bound in the scope (observed carrier fingerprint `9233fe2eba8dc80eb338be1336f6811db991fa649d2f75f3c7661358f180fdc8`), with no unbound-history resolution needed.

Read all current assigned item arguments and their 79 unique direct supplier Statement/Definition interfaces at the actual uses; the nilpotent central-fiber supplier was additionally read in full because its principal triple, complete intersection, Jacobian and central-reduction arguments are load-bearing. This is a bounded prerequisite review, not an audit of every unrelated transitive published proof. The ordinary localization definition was read for the adjunction and unit interfaces, although it owes neither a decision nor a HIGH/CRITICAL review. The page-only cross-batch record for the Category O route remains present unchanged; no KLR/Hecke theorem is used as a premise. No Statement/Definition changed, so no supplier-interface propagation or outside consumer repair is triggered. No published defect was established and no published file was edited. Stable IDs and all proposed withdrawals are preserved.

## Sources checked

- Kashiwara, [Representation theory and D-modules on flag varieties](https://www.numdam.org/item/AST_1989__173-174__55_0.pdf): local source `research/non-ml-math-remaining-81-2026-10-18-owner-drift-repair/localization/sources/kashiwara-1989.txt`. Read §5.2–5.5 (printed 89–91), §6.1–6.4 (92–96), §7.5–7.7 (98–99), and §8.1–8.3 (100–103), including the complete relevant arguments. Parameters, central-character shift, integral line convention, antidominant/regular distinctions and full zero-subsystem condition agree after convention conversion. The current local proofs supply the affine-wall separation, Springer normality, finite-matrix detection, rank-one classification and singular-chain details rather than taking source assertions as proved suppliers.
- Etingof, [MIT 18.757 notes](https://ocw.mit.edu/courses/18-757-representations-of-lie-groups-fall-2023/mit18_757_f23_lec_full.pdf): same local source directory, `etingof-18-757.txt`; read Proposition 15.12 and Corollary 16.1 with proofs, §§17.1–17.4, the Springer/normality/function arguments in §§27.2–27.4, and the relevant TDO/twist passage of §29.2 plus §29.3 through Remark 29.8. Its unshifted line parameter differs from kappa; the rank-one singular boundary is not an all-parameter equivalence. The authored arguments retain the needed regularity and antidominance conditions.
- Yi Sun, [D-modules and representation theory](https://yisun.io/notes/dmod.pdf): same source directory, `sun-dmod.txt`; read §§4.1–4.4 through the localization statements and §4.7 (42–44), plus the right-Verma convention comparison preceding §4.1. Treat this as comparison evidence: its tensor-character shortcut and application to an arbitrary coherent O-submodule are not valid substitutes for the current filtered-quotient and naturality proofs. Its right-Verma antipode explanation is likewise not used in the repaired calculation. The local Springer proof is checked against the actual local suppliers, not source-only attribution.
- Stacks [01EA](https://stacks.math.columbia.edu/tag/01EA) and [01DI](https://stacks.math.columbia.edu/tag/01DI): actual injective/flasque and skyscraper embedding statements and proofs. The authored extension to noncommutative unital sheaves is justified locally by the same module adjunctions.
- Stacks [01PD](https://stacks.math.columbia.edu/tag/01PD), §28.23, and [01XY](https://stacks.math.columbia.edu/tag/01XY), Lemma 30.9.1: finite-type QC approximation and locally Noetherian coherence interfaces. The current flag-variety proof gives the complete projective denominator-clearing construction and finite-Cech filtered-colimit argument locally; no general-scheme extension theorem or unstated limit interchange is presumed.

## Local checks and owner handoff

- Initial `node tools/risk-report.mjs research/non-ml-math-remaining-81-2026-10-18-batch-67.proof-contracts.json`: exit 0, 29 items routed, 28 HIGH/CRITICAL. Repeated with `--require-reviewed` after all reviews: exit 0, no errors.
- `node tools/proof-contract.mjs research/non-ml-math-remaining-81-2026-10-18-batch-67.proof-contracts.json --strict`: exit 0, 29/29 items, no errors or warnings.
- Reflow ran on exactly the three edited item paths. `node tools/tsx-run.mjs tools/precheck.mts` on those three paths: exit 0, 3 checked, 0 failing. `node tools/rendercheck.mjs` on the same paths: exit 0; every math span parses under real KaTeX and all frontmatter parses.
- After final item edits and reflow, the single batched `node tools/proof-layout.mjs items/lem-pa36-principal-nilpotent-borel-orbit.md items/lem-pa36-flag-tdo-pbw-and-twist.md items/thm-pa36-global-twisted-differential-operators.md`: exit 0, 3 items, 11 steps, 0 defects.
- Serialized defect-ledger append succeeded for all three rows. Run-filtered ledger validation exited 1 with seven existing foreign-row schema errors: batch35 `non-ml-math-remaining-81-2026-10-18-b35-even-subalgebra-citation` lacks `at`; batch36 `non-ml-math-remaining-81-2026-10-18-b36-sphere-fixed-projection-section` lacks `at` and has invalid class `statement` and location `Statement and Proof step 2.2`; batch52 rows `non-ml-math-remaining-81-2026-10-18-52-unbased-fiber-convention`, `...-52-equivalence-subspace`, and `...-52-first-pullback-data` have invalid caught_by_role `alpha-batch-52`. None names an owned batch67 row. These are mechanical owner alerts, not mathematical defects or new defect rows.

No local mathematical escalation remains. Owner/engine retains the two risk-discovered supplemental-coverage decisions and foreign ledger cleanup, and owns all stamping, gate execution and stage transitions. No judge cycle, certification, publication or commit was initiated.
