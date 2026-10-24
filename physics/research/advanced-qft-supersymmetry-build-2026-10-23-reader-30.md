# Reader report — advanced QFT and supersymmetry, batch 30

Run: `advanced-qft-supersymmetry-build-2026-10-23`  
Role: read-only reader  
Date: 2026-10-25

## Assigned inventory opened

The batch manifest assigns two pages and ten items.

- A page `qftx-susy-n1-superspace-and-actions`: `def-qftx-physical-superspace-normalization`, `def-qftx-n1-kahler-target-data`, `post-qftx-n1-wess-zumino-model`, `def-qftx-n1-vector-superfield`, `pthm-qftx-n1-wess-zumino-off-shell-invariance`, `pthm-qftx-n1-f-term-potential`, `post-qftx-n1-gauge-matter-model`, and `pthm-qftx-n1-gauge-matter-off-shell-invariance`.
- B page `qftx-susy-n1-superspace-and-actions-examples`: `ex-qftx-n1-wess-zumino-cubic-f-potential` and `ex-qftx-n1-su2-fundamental-matter-covariant-derivative`.

Both assigned page files were opened. Their IDs, titles, draft status, physics classification, item/example inventories, page prerequisites, and `page_layout: compact-v1` match the manifest. Both Markdown bodies are empty as required. The A/B item lists match the ten current item carriers.

## Dependency context opened

I opened the suppliers needed for the superspace calculations and gauge conventions, including:

- Batch 1: `def-qftx-superspace-grassmann-algebra`, `lem-qftx-grassmann-coefficient-calculus`, `def-qftx-n1-chiral-superfield`, `def-qftx-super-poincare-algebra-4d`, `lem-qftx-super-poincare-graded-jacobi`, and `lem-qftx-n1-chiral-superspace-identities`.
- Batch 2: `def-qftx-nonabelian-gauge-data`.
- Batch 19: `post-qftx-nonabelian-yang-mills-model`, `def-qftx-principal-connection-form`, `def-qftx-lie-algebra-valued-form-bracket`, `lem-qftx-principal-curvature-cartan-bianchi`, `def-qftx-associated-covariant-derivative`, and `lem-qftx-su2-compact-nonabelian-invariant-form`.
- Published mathematical suppliers used for the complex-coordinate and bundle constructions: `def-complex-numbers-and-arithmetic`, `thm-complex-numbers-form-a-field`, `def-complex-conjugate-real-imaginary-part-and-modulus`, `def-polynomial-ring-over-a-commutative-ring`, `def-quotient-ring`, `def-field-extension-generated-subfields-and-simple-extension`, `lem-x-squared-plus-one-is-irreducible-over-the-reals`, `thm-irreducible-quotient-adjoins-a-root`, `thm-reals-ordered-field`, `lem-of-square-positive`, `def-ordered-field`, `def-countable-choice`, `def-lie-group`, `def-principal-g-bundle-and-associated-fiber-bundle`, `def-smooth-principal-g-bundle`, `def-finite-dimensional-representation-of-a-group-over-a-field`, `def-associated-bundle-to-a-principal-bundle-and-representation`, `thm-associated-vector-bundle-is-well-defined`, `def-gauge-group-of-a-smooth-principal-bundle`, and `def-qft-framework-units`.
- Page context: `qftx-susy-algebra-and-multiplets`, `qftx-nonabelian-yang-mills-model`, `aqft-susy-math-foundations`, `qftx-gauge-geometry`, and the published imported `field-extensions-and-the-complex-numbers` page.

The proof-contract file, current batch notes, source-coverage record, and cross-batch dependency context were treated as evidence only. The notes' “nine items” count is stale: the current manifest has ten, including the physical superspace normalization definition.

## Mathematical and physical review

- The physical superspace normalization agrees with the supplied four-generator ordering. Direct coefficient checks give the stated −1/4 D bracket, +1/2 F bracket, component rescaling, auxiliary sign, and barred-derivative order in the D-to-F projection. The scalar D-term coefficient (4g_{i\bar j}\partial\phi^i\partial\bar\phi^{\bar j}-\Box K) yields the displayed mostly-plus kinetic term after the physical bracket.
- The Kähler coordinate datum states its coordinate domain, real smoothness, Wirtinger operators, positive Hermitian Hessian, and engineering dimensions. Bilal §7.1, eq. (7.14), identifies this mixed Hessian as the Kähler metric.
- The Wess–Zumino item is an adopted classical action with explicit spacetime, fields, coefficient algebra, holomorphic data, units, support, and a finite nilpotent Taylor prescription. Its component conversion is consistent with the stated brackets. The Wess–Zumino invariance proof establishes a conditional superspace total-derivative argument and off-shell closure with auxiliary components retained; no field equation or empirical conclusion is used.
- The F-term calculation correctly varies the complex auxiliary coordinates, completes the Hermitian square, uses positive definiteness for invertibility, and obtains (F^i=-g^{i\bar j}\bar W_{\bar j}) and (V_F=g^{i\bar j}W_i\bar W_{\bar j}\ge0). The canonical specialization is correct.
- The vector-superfield and gauge-matter formulations distinguish the represented matrix curvature from the connection-normalized Lie-algebra-valued curvature. The displayed dictionary follows from (t_{a,R}=i\rho_{R*}(T_a)); the (1/(4g^2)) action coefficient and (A=-igB) covariant derivative are consistent with the supplied pure (SU(2)) model's trace and right-connection conventions.
- The gauge-matter invariance proof checks the D-term and chiral F-term variations separately, including the finite holomorphic Taylor evaluation and the compact-support boundary condition. It is explicitly classical, full-prepotential, and makes no anomaly-cancellation, quantum-continuum, or empirical claim.
- The cubic example's derivative and auxiliary substitution are correct. The fundamental-matter example's Pauli-matrix component expansion, right-action transition law, and unitary kinetic-density invariance calculation are correct under the standard defining action of (SU(2)); its statement does not explicitly define that action map, which remains a local defect below.
- No TikZ or tikzcd diagram occurs in the ten assigned items. The inspected connection-curvature and covariant-derivative supplier diagrams agree with their accompanying formulas and are not used as proofs.

## Source checks

I read the relevant passages in these cited sources:

- Stephen P. Martin, *A Supersymmetry Primer*, version 7, <https://arxiv.org/pdf/hep-ph/9709356v7>: §3.1, eqs. (3.1.27), (3.1.30)–(3.1.31); §3.2, eqs. (3.2.16)–(3.2.18); §4.7, eq. (4.7.2); and §4.9, eqs. (4.9.3)–(4.9.6), (4.9.12)–(4.9.20). These passages support the standard chiral auxiliary elimination, D/F action structure, matrix-valued gauge curvature, and gauge-matter coupling; the item-specific η, generator, and measure normalizations were checked locally.
- Adel Bilal, *Introduction to Supersymmetry*, <https://arxiv.org/pdf/hep-th/0101055>: §4.3, eqs. (4.26)–(4.28); §5.2, eqs. (5.19)–(5.25); and §7.1, eqs. (7.1)–(7.14), (7.24)–(7.25). These passages support total-derivative invariance, representation-valued matter coupling, the Kähler metric, and the inverse-metric auxiliary potential.
- David Tong, *Gauge Theory*, Chapter 2, <https://davidtong.org/pdfs/teaching/gauge-theory/gauge2.pdf>: §2.1.1, eqs. (2.1)–(2.9), including the Hermitian-generator trace normalization, natural-unit action, and covariant derivative convention. I checked the translation to the local anti-Hermitian connection and \(\kappa=-2\operatorname{Tr}_2\).
- Matthijs Vákár, *Principal Bundles and Gauge Theories*, <https://arxiv.org/html/2110.06334>: §§1.1.3, 1.1.5, 1.3.1 and §2.6.5. These sections support the right principal/associated-bundle conventions, principal connections, and Yang–Mills action structure. The local connection and curvature calculations were checked directly in the opened suppliers.

## Defects not licensed for repair

The following subjects are read-only published or in-run dependencies, or an assigned item in this reader role. The same exact subjects and evidence are in the machine findings JSON.

1. `def-qftx-super-poincare-algebra-4d`, ## Definition, lines 58 and 68: the item says the real translations are the \(\tau\)-fixed skew-Hermitian bispinors and that Hermitian momenta are obtained by multiplying them by \(-i\), but then identifies the same \(T_{\alpha\dot\beta}\) with the Hermitian matrix \(\sigma^\mu P_\mu\). At the stated nonzero rest momentum, this makes \(T=-MI_2\), Hermitian, contradicting the preceding skew-Hermitian condition. The item needs separate symbols and a consistent factor in the mixed bracket. This batch-1 current dependency reaches assigned consumer `def-qftx-physical-superspace-normalization`; raw current SHA-256 at review was `5c0869874f505e4d89b7d14898c830f2ee887736f76b1ecb179796fbb40b34ca`. Martin §3.1, eqs. (3.1.27) and (3.1.30), treats the Hermitian spacetime momentum operator separately from the supercharge bracket.
2. `ex-qftx-n1-su2-fundamental-matter-covariant-derivative`, ## Example, opening and overlap sentences: the example names (R_{\mathrm f}:SU(2)\to U(\mathbb C^2)) as “the fundamental representation” and later uses (R_{\mathrm f}(h)=h) implicitly in \(h^{-1}\phi\), but never states the group action map. The exact completion is (R_{\mathrm f}(h)v=hv) for (h\in SU(2)\subset M_2(\mathbb C)), (v\in\mathbb C^2).
3. The following published prerequisite formulations contain inline wikilinks inside their complete Definition sections, or inside the complete Statement for the theorem, with no immediately following references section. This violates the uninterrupted-statement rule; the links need to move after the complete section while the mathematical terms remain in place:
   - `def-complex-numbers-and-arithmetic`, ## Definition, lines 27–37; assigned consumer `def-qftx-n1-kahler-target-data`.
   - `def-field-extension-generated-subfields-and-simple-extension`, ## Definition, lines 25–37; assigned consumer `def-qftx-n1-kahler-target-data`.
   - `def-polynomial-ring-over-a-commutative-ring`, ## Definition, lines 27–37; assigned consumer `def-qftx-n1-kahler-target-data`.
   - `def-quotient-ring`, ## Definition, lines 25–37; assigned consumer `def-qftx-n1-kahler-target-data`.
   - `thm-reals-ordered-field`, ## Statement, lines 34–37; assigned consumer `def-qftx-n1-kahler-target-data`.
   - `def-complex-conjugate-real-imaginary-part-and-modulus`, ## Definition, lines 25–34; assigned consumer `def-qftx-physical-superspace-normalization`.
   - `def-lie-group`, ## Definition, lines 28–41; assigned consumer `def-qftx-n1-vector-superfield`.
   - `def-principal-g-bundle-and-associated-fiber-bundle`, ## Definition, lines 31–39; assigned consumer `def-qftx-n1-vector-superfield`.
   - `def-smooth-principal-g-bundle`, ## Definition, lines 34–44; assigned consumer `def-qftx-n1-vector-superfield`.
   - `def-finite-dimensional-representation-of-a-group-over-a-field`, ## Definition, lines 25–38; assigned consumer `def-qftx-n1-vector-superfield`.
   - `def-associated-bundle-to-a-principal-bundle-and-representation`, ## Definition, lines 25–57; assigned consumer `def-qftx-n1-vector-superfield`.
   - `def-gauge-group-of-a-smooth-principal-bundle`, ## Definition, lines 35–55; assigned consumer `post-qftx-n1-gauge-matter-model`.
   - `def-qft-framework-units`, ## Definition, lines 69–123; assigned consumer `post-qftx-n1-gauge-matter-model`.

## Page verdicts

- `qftx-susy-n1-superspace-and-actions` (A): frontmatter, manifest inventory, prerequisites, and empty body pass. The page's content closure is held by the in-run super-Poincaré real-form inconsistency and the published prerequisite statement-format findings above.
- `qftx-susy-n1-superspace-and-actions-examples` (B): frontmatter, manifest inventory, prerequisites, and empty body pass. The fundamental-matter example needs an explicit representation map; its dependency closure also reaches the reported prerequisite findings.

## Edits, checks, and blocker

No authored item, page, published supplier, or manifest was edited. No reflow, precheck, or proof-layout command was run because there were no item edits; no gate, judge, stamp, or certification was attempted. The reader output is not an acceptance or publication decision.

Coverage limitation: I opened every assigned item and page and the direct supplier material needed for the reviewed superspace, auxiliary-field, and gauge calculations. I did not independently read every remote transitive ancestor in the large mathematical prerequisite closure or every source cited by those ancestors. Additional defects in those unread foundations are not ruled out. This is the outstanding review-coverage blocker.
