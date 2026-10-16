# Step 3a adjudication — batch 4

Run: `quantum-computing-algorithms-60-2026-10-15`; group: `batch-4`; covers: `4`.

The scope has no touched/page carriers and no reader/refuter findings. Both review reports and the pre/post inventories were read; all pre/post item, manifest, contract and page hashes agree. Exactly zero adjudication decisions are owed. The twelve risk-review obligations remain substantive independent reviews; this report records them in generated dependency order. No mathematical acceptance stamp or gate is claimed.

## Completed item reviews

### thm-qc-projective-measurement-outcome-law (level 2)

Read steps 1.1–2.1 and all seven cited supplier interfaces. For each projection P, PρP is self-adjoint with nonnegative quadratic form; finite spectral diagonalization makes its trace real and nonnegative. Rectangular trace cyclicity with P²=P identifies that trace with tr(ρP). Finite trace linearity and ΣP=I give total 1; removing one summand proves the upper bound, including a singleton outcome set. Zero projections give zero weights; H=0 and empty Ω are excluded by the definitions. No AC or physical premise is used. Reader and refuter report no findings; independent review found no defect.

Evidence: current item Proof 1.1–2.1; `def-qc-projective-measurement`, `def-qc-density-operator`, positivity definition and characterization, endomorphism-trace definition, trace linearity and rectangular cyclicity. Claim and conventions: nonzero finite complex H, finite nonempty Ω, linear-first inner products, p(a)=tr(ρP_a). Disposition: no defect; risk review complete; item unchanged. Next: finite ancilla block-map lemma.

### lem-qc-finite-ancilla-amplification-is-block-map (level 3)

Read Proof 1.1–3.1 and all ten dependency interfaces, including the full current draft tensor-register and product-basis arguments. Finite bases and Gram–Schmidt supply product orthonormal bases. Coefficient expansion uniquely determines every X_ij; prescribing images on the K product basis uniquely defines the amplified operator on the full operator space, without assuming X is a pure tensor. Block uniqueness and complex linearity give linearity in X. At r=1 the displayed conjugations by the canonical tensor-unit unitaries recover Φ. If H or K is zero its empty basis gives the unique zero blocks/operator; r=0 is excluded. Only finitely many witnesses are chosen, so AC is unnecessary. No reader/refuter finding or independent defect.

Claim: a unique block family and full-space linear amplification for finite H,K and r≥1, with the canonical r=1 identification. Dependencies: the register, tensor-register, product-basis, finite iterated tensor, Gram–Schmidt, dimension, inner-product and linear-map interfaces named in the item. Disposition: no defect; risk review complete; item unchanged. Next: finite Naimark compression.

### thm-qc-finite-naimark-isometric-compression (level 3)

Read Proof 1.1–3.1 and every cited dependency interface, with the current draft tensor-map and Dirac definitions. Product-basis action gives the orthogonal self-adjoint Q_a and ΣQ_a=I. Positive square roots satisfy M_a*=M_a and ΣM_a*M_a=I, hence the pairing computation gives V*V=I and V*Q_aV=E_a. Self-adjointness and the quadratic form prove positivity of VρV*, and rectangular cyclicity proves both its trace-one property and outcome equality across different-dimensional spaces. H and Ω are nonempty/nonzero, so the dilation space is nonzero; zero effects cause no division. Any fixed finite enumeration works and requires no AC. Watrous cached TQI.txt lines 3934–3948, Theorem 2.42 and its complete proof (printed p.109), supplies exactly this isometric compression. Reader/refuter have no findings; independent review found no defect.

Claim and convention: linear-first pairings, Vx=Σ√E_a x⊗|a⟩, V*Q_aV=E_a; this is algebraic compression. Sources: cached Watrous §2.3.2, Theorem 2.42 and complete proof; Preskill Chapter 3 pp.8–10, equations (3.23)–(3.29). All 18 cited interfaces checked. Disposition: no defect; risk review complete; item unchanged. Next: POVM normalization.

### thm-qc-povm-probabilities-normalize (level 3)

Read Proof 1.1–2.1 against all eight exact supplier interfaces. With M_a=√E_a, the sandwich M_aρM_a is self-adjoint and nonnegative even when E_aρ is not self-adjoint. Spectral positivity and trace cyclicity therefore give real nonnegative p(a). Finite trace linearity and ΣE_a=I give total one; summing the other nonnegative weights gives p(a)≤1. Zero effects give p=0, and a singleton family gives E=I and p=1. No commutativity, faithfulness or positive lower bound is assumed. H=0 and empty Ω are excluded; no AC. The argument matches Watrous Definition 2.34 and equation (2.202), cached TQI.txt lines 3650–3691, and Preskill §3.1.2 equation (3.29). No reader/refuter finding or independent defect.

Claim: p(a)=tr(ρE_a) is a probability vector for every density operator and finite POVM. Disposition: no defect; risk review complete; item unchanged. Next: projective conditional state.

### thm-qc-projective-conditional-state (level 3)

Read Proof 1.1–2.1 and all eight dependency interfaces. The self-adjoint sandwich P_aρP_a has nonnegative quadratic form. The explicit hypothesis p_a>0 makes division a positive real scaling, preserving self-adjointness/positivity. Trace cyclicity with P_a²=P_a gives trace p_a, so the normalized trace is one. The last step supplies the explicit preimage y=ρP_ax/p_a proving the asserted image inclusion. Zero projections and orthogonal input support cannot satisfy p_a>0 and are properly excluded; no state is assigned to them. A singleton measurement has p=1 and returns ρ. The claim uses the chosen projective update rule, not uniqueness of a state from a POVM alone. No AC. Preskill Chapter 3 p.8 equations (3.16)–(3.18) agrees with this update. Reader/refuter have no findings; independent review found no defect.

Claim: P_aρP_a/p_a is density with image contained in im(P_a), conditional on p_a>0. Disposition: no defect; risk review complete; item unchanged. Next: finite-outcome probability kernel.

### thm-qc-finite-outcome-law-is-a-probability-kernel (level 4)

Read Proof 1.1–3.1 and all eight cited interfaces, including the full coordinate-topology kernel definition. POVM normalization supplies a finite probability measure for each ρ. In any fixed ordered basis, tr(ρE_a)=Σ_ij ρ_ij(E_a)_ji is continuous as a finite real-linear expression in real/imaginary matrix coordinates; its restriction to the density set is real by normalization. The inverse-image σ-algebra argument explicitly upgrades continuity to Borel measurability. Convex combinations remain self-adjoint, nonnegative and trace one; trace linearity gives affinity. Empty event has mass zero, full event mass one, and λ=0,1 return the endpoints. No topology change, closedness of the density set, basis orthonormality or AC is needed. Watrous §2.3.1 supplies linear outcome weights; the Borel assertion is proved locally. No reader/refuter finding or independent defect.

Claim: the finite-event law is a Borel probability kernel and preserves convex combinations. Disposition: no defect; risk review complete; item unchanged. Next: instrument outcome normalization.

### thm-qc-instrument-outcome-law-normalizes (level 6)

Read Proof 1.1–2.1, all six dependency interfaces, and the complete instrument/CP definitions. CP at r=1 is ordinary positivity through the proved unitary tensor-unit identifications; hence each branch τ_a is nonnegative and its finite spectral trace is real and nonnegative. The instrument trace identity at X=ρ gives Σp_a=1, and the complement sum proves p_a≤1. Individual branches need not preserve trace and may be zero. A singleton instrument has p=1. Although K=0 is permitted in the definition of the ambient data, it admits no instrument with a density input, because every output trace would be zero; the claimed hypotheses therefore introduce no zero-output counterexample. Empty Ω/H=0 are excluded. No AC. Preskill §3.2.4 equations (3.51)–(3.55) supports the branch-weight convention; normalization is proved locally. Reader/refuter have no findings; independent review found no defect.

Claim: instrument branch traces form a probability distribution. Disposition: no defect; risk review complete; item unchanged. Next: Lüders instrument.

### thm-qc-luders-instrument-of-a-povm-is-valid (level 6)

Read Proof 1.1–2.1 and all seventeen dependencies. Composition and pointwise evaluation establish a complex-linear map on all L(H). For every finite r≥1 the proved block amplification sends X to S_aXS_a, where S_a is block diagonal with the self-adjoint M_a=√E_a. The explicit pairing identities prove both self-adjointness and nonnegative quadratic form of S_aXS_a for every nonnegative full-space X; no restriction to pure tensors or separable states is made. For every input operator X, not merely densities, cyclicity gives tr(I_a(X))=tr(XE_a), and completeness/linearity give the required trace identity. Zero effects give the zero CP map; a singleton POVM has E=I. Finite Gram–Schmidt uses no AC. Preskill p.11 equation (3.30), p.16 equations (3.51)–(3.55), and §3.2.6 pp.18–19 support the square-root/CP conventions. No reader/refuter finding or independent defect.

Claim: X↦√E_a X√E_a is an instrument on H. Disposition: no defect; risk review complete; item unchanged. Next: zero-probability branch.

### thm-qc-zero-probability-branch-has-no-conditioned-state (level 6; CRITICAL)

Read Proof 1.1–2.1 and all six supplier interfaces. CP at r=1 makes τ=I_a(ρ) nonnegative. Finite spectral diagonalization gives real λ_j≥0; tr τ=0 forces every λ_j=0, hence τ=0, including an empty output basis. The instrument definition explicitly assigns the symbol ⊥ at p=0, and the quotient is undefined; no arbitrary density is asserted impossible as extra data. The conclusion concerns this input branch, not that the map I_a vanishes on every input. Positivity is essential: a general trace-zero operator need not be zero. There is no limit, quotient-space construction or AC in the proof despite the risk scoring keyword. Preskill §3.2.4 equation (3.55) supplies conditional normalization; the zero branch convention and trace-zero lemma are explicit local content. No reader/refuter finding or independent defect.

Claim: zero branch weight forces zero subnormalized output and the defined conditional value ⊥. Disposition: no defect; risk review complete; item unchanged. Next: positive instrument conditional state.

### thm-qc-instrument-conditional-state-is-density (level 7)

Read Proof 1.1–3.1 and all seven dependency interfaces. Normalization makes p_a real in [0,1]; the strict positive hypothesis permits positive real scaling. CP at r=1 makes τ_a nonnegative; the written pairing calculation and quadratic-form scaling establish self-adjointness and positivity of τ_a/p_a. Trace linearity gives trace one exactly. Positive trace excludes a zero-dimensional output even though the instrument definition permits K=0 as ambient data. Zero-weight branches are excluded rather than normalized; p=1 is allowed without a strict upper bound. No purity, invertibility, Kraus representation or AC is assumed. Preskill §3.2.4 equations (3.52)–(3.55) supports precisely the branch normalization, with density verified locally. No reader/refuter finding or independent defect.

Claim: every positive-probability conditional branch is density on the output space. Disposition: no defect; risk review complete; item unchanged. Next: nonselective output.

### thm-qc-nonselective-instrument-output-is-density (level 7)

Read Proof 1.1–2.1 and all eight dependency interfaces. CP at r=1 makes every τ_a nonnegative; the finite sum is explicitly shown self-adjoint with nonnegative quadratic form. Trace linearity and normalized branch weights give trace one and therefore nonzero output space. For p_a>0 the defining relation gives τ_a=p_aρ_a; for p_a=0 the independently reviewed zero-branch theorem gives τ_a=0. Summation yields the mixture formula without multiplying the nonstate symbol ⊥ by zero. Normalization ensures at least one positive branch; singleton and deterministic instruments are included. No assumption that each branch preserves trace, no positivity of general arbitrary operators, and no AC is used. Preskill pp.16–18 §3.2.4–3.2.5 supports branch averaging; the result is locally proved. No reader/refuter finding or independent defect.

Claim: ΣI_a(ρ) is density and equals the mixture over only positive-probability states. Disposition: no defect; risk review complete; item unchanged. Next: zero-probability projective example.

### ex-qc-zero-probability-projective-branch (level 7; CRITICAL)

Read all six verification steps and all fifteen dependency interfaces. Recomputed the two diagonal projection products, adjoint pairings and quadratic forms in the linear-first standard C² pairing. ρ=P_0 is nonnegative with trace one; P_0+P_1=I and orthogonality make both a projective measurement and POVM. tr(P_0²)=1 and tr(P_0P_1)=0. Since each P_a is already nonnegative with P_a²=P_a, uniqueness of the nonnegative square root gives √P_a=P_a, so the reviewed Lüders theorem supplies an instrument. Its outputs on this input are P_0 and zero; only the first is normalized, and the second conditional value is ⊥ by definition. The zero-probability map itself is not identically zero on other inputs. No 0/0 or positivity/CP confusion, and no AC. Preskill §3.1.1 p.8 gives the projective update convention; exact matrices are verified locally. No reader/refuter finding or independent defect.

Claim: explicit C² projectors and ρ=P_0 give probabilities (1,0) and a zero second Lüders output. Disposition: no defect; risk review complete; item unchanged. All twelve generated item reviews are now complete. Next: final local checks and evidence comparison.

## Sources and review limits

The mathematical review used the actual current item proofs and exact cited supplier statements/definitions. The eight directly used draft suppliers from batches 1–3 were read in full: `def-qc-dirac-notation-conversion`, `def-qc-register-and-computational-basis`, `def-qc-tensor-register-and-permutation`, `lem-qc-tensor-product-basis-and-dimension`, `def-qc-tensor-map`, `def-qc-density-operator`, `def-qc-finite-positive-effect-family`, and `lem-qc-complete-effect-family-members-are-effects`. The 21 directly used published supplier interfaces were checked as used; this is not an audit of their entire transitive closure. The finite positive-operator characterization, rectangular trace-cyclicity and trace-linearity proofs were also read. No unfamiliar or unresolved mathematical inference remained.

Literature evidence was read from the existing full-text caches, without a new network retrieval:

- John Watrous, *The Theory of Quantum Information*, §2.3.1, Definition 2.34 and equations (2.199)–(2.202), printed pp.101–102; §2.3.2, projective-measurement discussion and Theorem 2.42 with its complete proof, printed pp.107–109. Cache: `research/quantum-computing-planning/sources/qc_r1/TQI.txt`, lines 3638–3698 and 3873–3949. Source: <https://cs.uwaterloo.ca/~watrous/TQI/TQI.pdf>. The local construction preserves the theorem’s finite positive-family and identity-sum hypotheses, with root linear-first pairings handled explicitly.
- John Preskill, Chapter 3, pp.8–11, equations (3.16)–(3.32), including square-root measurement maps and the warning that a POVM alone does not specify an output state; pp.16–18, §3.2.4 equations (3.51)–(3.55), branch trace weights and conditional normalization; pp.18–19, §3.2.6, complete positivity for ancillary extensions. Cache: `research/quantum-computing-planning/sources/qc_r2/ch3_15/page-{8,9,10,11,16,17,18,19}.txt`. Source: <https://www.preskill.caltech.edu/ph219/chap3_15.pdf>. The local proofs are algebraic and do not import physical postulates as proof premises.

## Consumer and published dispositions

All owned consumers retain their Statements, Definitions, dependency IDs and conventions. The current cross-batch dependency records were inspected; the actual uses of the eight draft suppliers preserve their finite-dimensional domains, linear-first pairing, tensor order, positivity and trace hypotheses. No changed supplier interface requires propagation. The frontier dependency ledger has an appended batch-4 review note; existing stable IDs, verified-interface records and proposed withdrawals are preserved.

No defective published prerequisite was identified, so no published-consumer ledger entry or lock was needed. No confirmed defect exists to enter in the defect ledger. No repair was made, so no repair-confidence or judge invalidation is applicable. No historical escalation, missing preimage, proposed withdrawal or owner decision is opened by this assignment.

## Local validation and handoff

- Initial `node tools/risk-report.mjs research/quantum-computing-algorithms-60-2026-10-15-batch-4.proof-contracts.json`: exit 0; twelve HIGH/CRITICAL items routed, zero errors.
- Final same command with `--require-reviewed`: exit 0; all twelve required reviews complete, zero errors.
- `node tools/proof-contract.mjs research/quantum-computing-algorithms-60-2026-10-15-batch-4.proof-contracts.json --strict`: exit 0; 12/12 items checked, zero errors and zero warnings. This also checks exact supplier quotations and derivation coverage.
- Read-only hash comparison: the pre/post item/contract/manifest records agree, the pre/post page records agree, and all seventeen actual current raw item SHA-256 values match the post snapshot. No changed carrier requires an accepted/amended/reverted repair decision.
- Decisions file has version 1, the exact run and group `batch-4`, and `decisions: []`, matching the zero routed touched/page/reader/refuter obligations.

Only the twelve `risk_review` records, this report, the required decisions file and the appended frontier note were authored. No item or page was edited; proof reflow, precheck and the changed-item proof-layout command are therefore inapplicable. No judge, stamp, self-certification, dispatch or gate battery was initiated. There are no unresolved batch-4 blockers. The engine owns hash stamping and the subsequent gates.
