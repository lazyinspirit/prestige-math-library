# QC01–QC06 research report

Researcher: qc_r1. This is a draft planning and supplier-audit report for QC01–QC06. It does not create library items, certify proofs, alter a plan, or make a gate claim. The machine-shaped proposed item rows are at the end; they cover 10, 12, 13, 14, 14, and 29 A items respectively.

## Full-text source receipts and reading limits

I retrieved, extracted and sequentially read the complete author-hosted John Watrous, *The Theory of Quantum Information* PDF from the verified location https://cs.uwaterloo.ca/~watrous/TQI/TQI.pdf. The cached 598-page PDF is research/quantum-computing-planning/sources/qc_r1/TQI.pdf, 2,459,123 bytes, SHA256 c8f30116586435fc265273b09ca2d63f4912a5d4b8901db1ada84b03373c6325; the PyMuPDF text extraction is TQI.txt, 1,536,128 characters, SHA256 798b2b44a1a638c8fd0a61d7526d8ffde07f5910b29b745525baa57dc92e3ed9. Fetch stamp: 2026-10-14T09:04:47.920Z. The sequential pass covered PDF pp.1–598, with exact ten-page ranges [1,10], [11,20], …, [581,590], [591,598]; no pages remain unread. Chapter 1 is explicitly a proof-free mathematical review, so I use the book's proved finite-dimensional quantum-information results but keep elementary matrix proofs and conventions attached to root suppliers or local QC proposals.

I retrieved, extracted and sequentially read Ronald de Wolf, *Quantum Computing: Lecture Notes*, arXiv:1907.09415v6, actual PDF title-page version dated 2026-08-27. The cached 239-page PDF is research/quantum-computing-planning/sources/qc_r1/de-wolf-1907.09415.pdf, 1,432,933 bytes, SHA256 b797f4165555d28180438586412e7629fecadb94a7ea81c761de8bdfd37a1fc1; text is 728,009 characters, SHA256 f02f7e7b5018f62b637d345eabe3f175d0daf592069040a0ebad7a5626441d6a. Fetch stamp: 2026-10-14T09:04:48.004Z. The complete sequential ranges are recorded in the ledger, from pp.1–10 through pp.231–239; there are no unread pages. Its Appendix A, §§A.1–A.10, PDF pp.205–210, is a compact linear-algebra review; §1.2.1–1.2.2, pp.15–17, treats pure states and projective measurement; §15.1, pp.139–140, treats mixed states and general measurements; §18.3, pp.170–174, treats reduced states, Schmidt decomposition and purification; Exercise 12, pp.23–24, with Appendix C hint p.215, gives a no-cloning exercise. It does not prove general CPTP/Kraus/Choi/Stinespring equivalences or no-broadcasting, so it corroborates rather than supplies those contracts.

At the root owner's request I also retrieved, extracted and read all 11 pages of the original Barnum–Caves–Fuchs–Jozsa–Schumacher paper, “Noncommuting Mixed States Cannot Be Broadcast,” arXiv:quant-ph/9511010v1, 8 November 1995. Cache: research/quantum-computing-planning/sources/qc_r1/barnum-caves-fuchs-jozsa-schumacher-quant-ph-9511010.pdf, 115,300 bytes, SHA256 6706f7b7e64ce473e3c8c5286586636a6e975de341e27e4b07b6889c3dcfb49e; extracted text is 18,303 characters, SHA256 589a92c30d1e68122e23fb69953c155b32b118095836f9eb570d437a3f106ce6. Fetch stamp: 2026-10-14T09:27:56.494Z. Pages 1–11 were read in order, recorded as [1,4], [5,7], [8,11], with no unread remainder. It proves the pair no-broadcast theorem in the invertible-state case; its displayed commutativity proof assumes invertibility, which is why the singular-state reduction below is an explicit root-local authoring obligation.

A second independent, full-text course cross-check is available in qc_r2's read-only cache and ledger: John Preskill, *Physics 219 / CS 219 Quantum Computation*, Chapters 2 and 3, both sequentially read completely by qc_r2 (sources/qc_r2/ch2_15.pdf, 53 pages, SHA256 709a8a52cfbc9afb65ed6fb9dfbd9b59afaa8eac21167cbaf37a43b2555b0d34; ch3_15.pdf, 65 pages, SHA256 34141b215c144c0cc8fd86e9a4ba289e1e8eb73b9dc6cf1dccdf594d4f57e6ad; receipt source-ledgers/qc_r2.json). Preskill ch.2 §§2.2–2.5, PDF pp.7–35, independently covers rays, density matrices, reduced states, Schmidt decomposition, ensembles and HJW; ch.3 §§3.1–3.3, pp.4–23, covers projective/generalized measurements, instruments, complete positivity, Kraus maps, Choi correspondence and Stinespring dilation. The course presents these as part of a physics introduction; only its finite-matrix arguments are corroboration, never logical premises. Preskill ch.4 is author-marked incomplete and is not used as a completed proof source. For QC06, Watrous supplies the trace-distance/fidelity/channel-norm proofs, de Wolf supplies the no-cloning exercise, and Barnum et al. is the primary no-broadcasting proof. I did not locate a second independent complete proof of the general no-broadcasting theorem; that sourcing limitation remains explicit.

The exact fetch/read receipts, extracted-text fingerprints, cache paths and section locators are recorded in research/quantum-computing-planning/source-ledgers/qc_r1.json; research/quantum-computing-planning/reports/qc_r1-coverage.json is the corresponding fetch-check coverage record.

## Convention and reuse audit

All QC Hilbert spaces are finite-dimensional complex inner-product spaces with the root convention: ⟨x,y⟩root is linear in the first variable. Source bra-ket formulas use the conjugate-first convention. Every proposed proof must translate them by
〈x|y〉D := ⟨y,x⟩root, 〈x|z〉 = ⟨z,x⟩root, and
|x〉〈y| : z ↦ ⟨z,y⟩root x; in an orthonormal coordinate basis this outer product has matrix x y†. For example, the source amplitude 〈x|T|y〉D becomes ⟨Ty,x⟩root, and T = Σij Tij |i〉〈j| acts as Tz = Σij Tij⟨z,j⟩root i. Density matrices, adjoints, trace pairings, partial traces and all Kraus/Stinespring formulas must use this conversion explicitly. No source formula may simply be relabelled.

Actual reusable root suppliers in the relevant dependency closure include def-real-and-complex-inner-product-space, def-dimension, def-trace-of-an-endomorphism, prop-standard-coordinate-inner-products, cor-finite-dimensional-inner-product-spaces-have-orthonormal-bases, def-adjoint-of-a-linear-map-between-inner-product-spaces, thm-adjoint-exists-and-is-unique-in-finite-dimension, thm-matrix-of-the-adjoint-is-the-conjugate-transpose, def-matrix-space, def-matrix-product-and-identity-matrix, def-trace-of-a-square-matrix, thm-trace-of-ab-equals-trace-of-ba, cor-trace-is-invariant-under-similarity, def-change-of-basis-matrix, thm-complex-spectral-theorem-for-normal-endomorphisms, thm-non-negative-operator-characterisations, thm-non-negative-square-root-exists-and-is-unique, thm-singular-value-decomposition, def-singular-values-of-an-endomorphism, def-operator-norm-on-a-finite-dimensional-inner-product-space, and thm-simultaneous-diagonalisation-of-commuting-diagonalisable-endomorphisms. The SVD statement is already linear-first and reads Tv = Σj sj⟨v,ej⟩root fj; it agrees with the translated source expansion.

Root reuse has precise boundaries. Root def-trace-of-an-endomorphism directly supplies basis-independent trace; root trace cyclicity supports partial-trace and Kraus calculations. The generic module tensor-basis supplier only proves a vector-space basis theorem; it does not provide the tensor inner product, a unitary wire permutation, or a partial trace. The root library has no finite complex Schatten-1/trace-norm definition or trace-norm triangle/duality theorem: the available induced p-norm item is for real matrices and cannot discharge QC complex trace-norm claims. I found no root QC channel, Choi, Kraus, instrument, CPTP, Stinespring, fidelity, no-cloning or no-broadcasting supplier. Infinite-dimensional trace-class results are out of scope. The missing finite-dimensional matrix lemmas and bridges are therefore proposed explicitly below, with each author's local work listed; no claim is being imported solely by citation.


The root proof routes were checked rather than treated as black boxes: the complex spectral theorem uses algebraic closure, Schur triangularization (a split characteristic polynomial gives a triangular basis, then Gram–Schmidt preserves its invariant flag), and the entrywise normal-upper-triangular lemma. The positive-operator characterization then uses that spectral theorem to show eigenvalues are nonnegative; the square-root theorem takes scalar roots and proves uniqueness on each invariant eigenspace. The root SVD applies this to |T|=√(T†T), normalizes Tej on positive singular spaces, extends the resulting orthonormal family, and handles rank zero. The adjoint matrix theorem is proved from Parseval and conjugate symmetry under the linear-first pairing; trace cyclicity is a finite double-sum identity and basis invariance is already part of the root endomorphism-trace definition. Root simultaneous diagonalization handles arbitrary commuting diagonalizable families by reducing their span to a finite-dimensional endomorphism space and inducting over a finite spanning subfamily.

## Physics-library mathematical-context audit

I inspected the NQM category's state-geometry, measurement-and-instruments, observables-and-Born-probabilities, and composites/reduced-states pages and their relevant state, instrument, tensor, density, partial-trace and Schmidt items. In particular, def-nrqm-state-geometry-state-vectors-and-rays is mathematical vocabulary built on Hilbert-space roots; lem-nrqm-state-geometry-ray-to-rank-one-projection, the density/purity lemmas, lem-nrqm-composites-hilbert-tensor-construction, lem-nrqm-composites-finite-effects-and-instruments, lem-nrqm-composites-finite-ancilla-complete-positivity, and thm-nrqm-composites-finite-partial-trace-and-schmidt contain useful mathematical context. The latter theorem's finite matrix calculation and Schmidt proof are relevant comparisons, but its dependency chain includes physics-NQM tensor/density suppliers and its source convention must still be translated. The NQM state-space and measurement definitions also sit beside adopted state and conditional-measurement postulates; model definitions do not supply finite-QC channel or measurement theorems.

These physics-library items are not resolving suppliers for this root category. Some are infinite-dimensional trace-class results or carry countable-choice assumptions, and others are conditional physical-framework readings. I use them only to audit conventions, scopes and proof ideas. Every QC dependency below is either an actual root mathematical ID or a proposed QC item; there are no physics/ IDs, postulates, experiments, observations or remarks in deps or justified_by.

## Page proposals and proof routes

The exact per-item contracts and local obligations appear in the JSON rows below. Main interfaces and their load-bearing routes are:

- **QC01 — finite complex linear algebra.** Reuse root finite-dimensional inner-product, adjoint, spectral and SVD results. Use root inner-product, adjoint, trace, positivity, spectral, square-root and SVD suppliers directly. Add only the explicit Dirac conversion and complex Schatten-1 norm contracts required by QC formulas. The trace-norm proof must establish independence from singular-vector choices, the dual formula over operator-norm contractions, positivity/definiteness, homogeneity, triangle inequality and unitary invariance; for positive A, it must prove ||A||1 = tr(A). Root thm-singular-value-decomposition and spectral suppliers are the proof premises, not re-proved duplicates.

- **QC02 — finite registers and tensor operations.** Define an ordered register basis and big-endian bit-string encoding (x0 is the most significant bit, index Σk xk 2^(n−1−k)), and prove the encoding is bijective. Build the tensor Hilbert inner product from the root linear-first pairing, prove the ordered product basis and dimension formula, prove tensor-map composition/adjoint laws, and prove every wire permutation is implemented by a unitary basis permutation. Define partial trace by its coordinate contraction and then discharge uniqueness via the trace-pairing identity, basis independence, positivity and preservation of trace. These are new finite-Hilbert-space suppliers; the generic root free-module tensor theorem is only a basis input.

- **QC03 — pure states, density operators, ensembles and purification.** Define rays and rank-one projectors with the translated outer-product formula and prove phase/ray independence, trace one, positivity and the ray/projector bijection. Define a density operator as positive semidefinite with trace one. For finite ensembles, prove the barycenter is positive and trace one and prove convex closure. Spectral diagonalization supplies a finite orthogonal ensemble. Schmidt follows by applying the root SVD to the coefficient map under the explicit conjugation conversion. A density ρ=Σj λj|ej〉〈ej| is purified by Σj√λj |ej〉⊗|j〉; normalize/check its partial trace. The minimal environment dimension is rank ρ. Equality of reduced states gives a partial isometry between purifying supports and then an environmental unitary after padding; the finite ensemble/purification correspondence needs its own coefficient-matrix factorization proof.

- **QC04 — measurements and instruments.** A projective measurement is a finite orthogonal resolution of the identity; its probability law is tr(ρPa) and its conditional state is PaρPa/pa only for pa>0. A POVM is a finite positive resolution of the identity; prove each Born weight is nonnegative and the weights sum to one. An instrument is a finite family of completely positive outcome operations whose sum is trace preserving; this page defines complete positivity by all finite ancilla extensions, without importing the later Kraus theorem. Prove branch outputs are positive, branch traces give a normalized outcome law, and division by a nonzero branch probability gives a density state. A zero-probability branch has no conditional density and is recorded as ⊥. Give the square-root Lüders instrument for a POVM and prove its operation maps are completely positive and its sum is trace preserving directly.

- **QC05 — channels and their finite representations.** State the channel as a linear map that is completely positive and trace preserving. Fix Choi ordering and vectorization to avoid transpose errors. Split the equivalence rather than treating it as an opaque fact: CP implies Choi positivity by applying id⊗Φ to the maximally entangled rank-one positive operator; positive Choi matrix gives a spectral sum of vectorized Kraus operators and entrywise reconstruction; a Kraus sum is CP by ampliation; trace preservation is equivalent to Σa Ka†Ka=I by cyclic trace and nondegenerate pairings. Stinespring uses Vx=Σa Ka x⊗|a〉, verifies V†V=I, and checks the partial-trace formula on matrix units. Conversely, every isometry followed by a partial trace is CPTP. State composition and tensor closure separately, then let the reserved equivalence theorem assemble the already-proved directions.

- **QC06 — distinguishability, error composition and impossibility results.** Define D(ρ,σ)=½||ρ−σ||1 and root fidelity F(ρ,σ)=||√ρ√σ||1; source and root inner-product conventions are translated. Prove the Helstrom maximum over effects, the POVM total-variation bound ½Σa|tr((ρ−σ)Ea)|≤D(ρ,σ) and binary-PVM attainability, channel contractivity, Uhlmann/purification characterization and Fuchs–van de Graaf inequalities. Define the raw diamond norm as Watrous's completely bounded trace norm (no factor ½); include input-dimension ancilla cap, channel norm one, channel-composition hybrid bound and tensor-product multiplicativity/error bound. The QA34 interface for hybrid composition is the finite-dimension inequality ||Ψ1∘Ψ0−Φ1∘Φ0||⋄ ≤ ||Ψ0−Φ0||⋄ + ||Ψ1−Φ1||⋄ when all four maps are channels with matching domains/codomains. A half-diamond channel distance is a separate convention and must carry its factor explicitly.

For no-cloning, the general channel statement is: if one CPTP map clones every pure state in a set S exactly to |ψ〉〈ψ|⊗|ψ〉〈ψ|, then every pair in S is either the same ray or orthogonal. Stinespring and purity force V|ψ〉=|ψψ〉⊗|eψ〉; inner-product preservation gives |〈φ|ψ〉|=|〈φ|ψ〉|² |〈eφ|eψ〉|, impossible for overlap strictly between zero and one. Thus a universal exact cloner fails for dimension at least two; in dimension one it exists. This elementary theorem is not replaced by the averaged-cloning theorem.

The strongest supported quantitative optional result is Watrous Thm.7.28: for input |ψ〉〈ψ|^{⊗n} and output target |ψ〉〈ψ|^{⊗m}, 1≤n≤m, dimension d, every CPTP map has worst-case **squared** fidelity at most Nn/Nm, where Nk=binom(k+d−1,d−1), and a channel attains the bound. In particular, universal 1→2 global squared fidelity is exactly 2/(d+1) for d≥2. The book uses root fidelity; the row below states the squared convention explicitly. Its proof route includes the Haar spherical moment identity ∫|ψ〉〈ψ|^{⊗k}dψ = Πsym,k/Nk, the symmetric-subspace dimension, the pointwise projector order bound and CP order preservation for the upper bound, and the explicit symmetrizing/replace-on-the-orthogonal-complement channel with direct complete-positivity, trace-preservation and attained-overlap checks. This quantitative result is optional and does not weaken the exact pairwise pure-state no-cloning statement.

For no-broadcasting, define a common CPTP map B:H→H⊗H to broadcast a family {ρi} if both output marginals equal ρi for every family member. Barnum et al. prove for a pair of invertible states that broadcasting forces equality in fidelity monotonicity under partial trace; their Eqs. (19)–(31) turn the equality case into [ρ0,ρ1]=0. The singular extension is explicitly decomposed:

1. For σ faithful on support S, compactness/spectral bounds give every X≥0 on S a finite c with X≤cσ.
2. If Y≥0 on H⊗H has both marginals supported on S, zero marginal mass on S⊥ plus positivity gives supp Y⊆S⊗S.
3. For a broadcaster of ρ0,ρ1, let S=suppρ0+suppρ1, σ=(ρ0+ρ1)/2; linearity broadcasts σ. The support lemma puts B(σ) in S⊗S; domination and positivity put B(X) there for every X≥0 on S, so compression/restriction gives a CPTP map on all operators of S.
4. For any fixed 0<ε<1, τi=(1−ε)ρi+εσ are faithful on S and are broadcast by the restricted channel. The full-rank theorem gives [τ0,τ1]=0, while direct expansion gives [τ0,τ1]=(1−ε)[ρ0,ρ1]; hence [ρ0,ρ1]=0 without a limiting argument.
5. An arbitrary family, finite or infinite, is broadcastable by one channel iff its members commute pairwise: necessity applies the pair result to every pair; sufficiency uses finite-dimensional simultaneous diagonalization and the explicit copying channel B(X)=Σj〈j|X|j〉 |jj〉〈jj| for the common eigenbasis. Verify this formula is CP and trace preserving by its Kraus operators and check both marginals state by state.

No second independent full proof for no-broadcasting was found in the read corpora, so that remains a source-coverage limitation; the theorem itself is supported by the complete original paper plus the stated local singular-case discharge.

## Unresolved authoring obligations

Every QC row below is a proposed contract, not an existing published root result. New proof authors still owe the displayed local work, especially: the complex finite Schatten-1 norm duality/triangle proof; tensor inner-product and partial-trace well-definedness; Choi/vectorization orientation and every Kraus/TP equivalence direction; the fidelity Uhlmann/equality implications; the full finite diamond-norm ancilla/composition/tensor route; and the singular no-broadcasting lemmas. The source citations guide those proofs but do not discharge them. No QC or QA item should depend on a physics namespace ID or a remark.



~~~json
[
  {
    "id": "def-qc-dirac-notation-conversion",
    "kind": "definition",
    "page": "finite-dimensional-complex-inner-product-spaces-and-matrix-interfaces",
    "deps": [
      "def-real-and-complex-inner-product-space",
      "def-adjoint-of-a-linear-map-between-inner-product-spaces"
    ],
    "justified_by": [
      "thm-qc-dirac-notation-coordinate-identity"
    ],
    "statement_or_definition": "Define 〈x|y〉D=⟨y,x⟩root; bra 〈x| maps z to ⟨z,x⟩root; |x〉〈y| maps z to ⟨z,y⟩root x and has coordinate matrix xy†.",
    "proof_obligations": [
      "Derive linearity of the bra and translate conjugate-first amplitudes explicitly.",
      "Compute outer-product coordinates and preserve the root convention."
    ],
    "sources": [
      {
        "url": "https://cs.uwaterloo.ca/~watrous/TQI/TQI.pdf",
        "locator": "Ch.1 §1.2 (PDF pp.1–65, proof-free review) and Ch.2 §2.1 (pp.66–79)"
      },
      {
        "url": "https://arxiv.org/pdf/1907.09415",
        "locator": "Appendix A §§A.1–A.10, PDF pp.205–210"
      }
    ],
    "title": "Dirac Notation Conversion",
    "existing_supplier_checks": [
      "Reuses inspected root suppliers: def-real-and-complex-inner-product-space, def-adjoint-of-a-linear-map-between-inner-product-spaces. These are premises only; the proposed QC statement remains local."
    ],
    "unresolved_obligations": [
      "Derive linearity of the bra and translate conjugate-first amplitudes explicitly.",
      "Compute outer-product coordinates and preserve the root convention."
    ]
  },
  {
    "id": "def-qc-trace-norm",
    "kind": "definition",
    "page": "finite-dimensional-complex-inner-product-spaces-and-matrix-interfaces",
    "deps": [
      "def-singular-values-of-an-endomorphism",
      "thm-singular-value-decomposition"
    ],
    "justified_by": [
      "thm-qc-trace-norm-spectral-formula"
    ],
    "statement_or_definition": "For a finite complex linear map A, define its Schatten-1 norm ||A||1 as the sum of its singular values, counted with multiplicity.",
    "proof_obligations": [
      "Specify singular values for rectangular maps by the root |A|=sqrt(A†A) definition and handle rank zero.",
      "Keep the finite matrix norm distinct from infinite-dimensional trace-class definitions."
    ],
    "sources": [
      {
        "url": "https://cs.uwaterloo.ca/~watrous/TQI/TQI.pdf",
        "locator": "§1.1.3, Eqs.(1.166)–(1.181), PDF pp.40–42; Schatten-1 definition and properties"
      }
    ],
    "title": "Trace Norm",
    "existing_supplier_checks": [
      "Reuses inspected root suppliers: def-singular-values-of-an-endomorphism, thm-singular-value-decomposition. These are premises only; the proposed QC statement remains local."
    ],
    "unresolved_obligations": [
      "Specify singular values for rectangular maps by the root |A|=sqrt(A†A) definition and handle rank zero.",
      "Keep the finite matrix norm distinct from infinite-dimensional trace-class definitions."
    ]
  },
  {
    "id": "prop-qc-trace-holder-inequality",
    "kind": "proposition",
    "page": "finite-dimensional-complex-inner-product-spaces-and-matrix-interfaces",
    "deps": [
      "thm-qc-trace-norm-duality-and-norm-properties"
    ],
    "justified_by": [],
    "statement_or_definition": "For compatible finite maps A,B, |tr(B†A)|≤||A||1||B||∞.",
    "proof_obligations": [
      "Apply trace-norm duality after scaling B; handle B=0 separately.",
      "State rectangular trace-pairing shapes explicitly."
    ],
    "sources": [
      {
        "url": "https://cs.uwaterloo.ca/~watrous/TQI/TQI.pdf",
        "locator": "§1.1.3, Eqs.(1.166)–(1.181), PDF pp.40–42"
      },
      {
        "url": "https://arxiv.org/pdf/1907.09415",
        "locator": "Appendix A.5, PDF pp.207–208; linear-algebra review"
      }
    ],
    "title": "Trace Holder Inequality",
    "existing_supplier_checks": [
      "Repository audit found no matching root supplier for this QC-specific contract; prove it locally."
    ],
    "unresolved_obligations": [
      "Apply trace-norm duality after scaling B; handle B=0 separately.",
      "State rectangular trace-pairing shapes explicitly."
    ]
  },
  {
    "id": "thm-qc-dirac-adjoint-amplitude-translation",
    "kind": "theorem",
    "page": "finite-dimensional-complex-inner-product-spaces-and-matrix-interfaces",
    "deps": [
      "def-qc-dirac-notation-conversion",
      "thm-adjoint-exists-and-is-unique-in-finite-dimension"
    ],
    "justified_by": [],
    "statement_or_definition": "For T:V→W, source amplitude 〈x|T|y〉D translates to ⟨Ty,x⟩root=⟨y,T*x⟩root=〈T*x|y〉D.",
    "proof_obligations": [
      "Derive the amplitude equality from the root linear-first adjoint definition and conjugate symmetry.",
      "Check domain/codomain types and use the previously defined rank-one coordinate map."
    ],
    "sources": [
      {
        "url": "https://cs.uwaterloo.ca/~watrous/TQI/TQI.pdf",
        "locator": "Ch.1 §§1.1.1–1.1.3, PDF pp.1–42; root pairing conversion verified locally"
      },
      {
        "url": "https://arxiv.org/pdf/1907.09415",
        "locator": "Appendix A.5 and A.10, PDF pp.207–210"
      }
    ],
    "title": "Dirac Adjoint Amplitude Translation",
    "existing_supplier_checks": [
      "Reuses inspected root suppliers: thm-adjoint-exists-and-is-unique-in-finite-dimension. These are premises only; the proposed QC statement remains local."
    ],
    "unresolved_obligations": [
      "Derive the amplitude equality from the root linear-first adjoint definition and conjugate symmetry.",
      "Check domain/codomain types and use the previously defined rank-one coordinate map."
    ]
  },
  {
    "id": "thm-qc-dirac-notation-coordinate-identity",
    "kind": "theorem",
    "page": "finite-dimensional-complex-inner-product-spaces-and-matrix-interfaces",
    "deps": [
      "def-qc-dirac-notation-conversion",
      "prop-standard-coordinate-inner-products",
      "thm-matrix-of-the-adjoint-is-the-conjugate-transpose"
    ],
    "justified_by": [],
    "statement_or_definition": "Source expansion T=Σij Tij|i〉〈j| acts as Tz=Σij Tij⟨z,j⟩root i; 〈x|T|y〉D=⟨Ty,x⟩root.",
    "proof_obligations": [
      "Expand z in an orthonormal basis and apply outer-product maps.",
      "Use conjugate symmetry; include zero-dimensional coordinates."
    ],
    "sources": [
      {
        "url": "https://cs.uwaterloo.ca/~watrous/TQI/TQI.pdf",
        "locator": "Ch.1 §1.2 (PDF pp.1–65, proof-free review) and Ch.2 §2.1 (pp.66–79)"
      },
      {
        "url": "https://arxiv.org/pdf/1907.09415",
        "locator": "Appendix A §§A.1–A.10, PDF pp.205–210"
      }
    ],
    "title": "Dirac Notation Coordinate Identity",
    "existing_supplier_checks": [
      "Reuses inspected root suppliers: prop-standard-coordinate-inner-products, thm-matrix-of-the-adjoint-is-the-conjugate-transpose. These are premises only; the proposed QC statement remains local."
    ],
    "unresolved_obligations": [
      "Expand z in an orthonormal basis and apply outer-product maps.",
      "Use conjugate symmetry; include zero-dimensional coordinates."
    ]
  },
  {
    "id": "thm-qc-hermitian-trace-norm-positive-negative-parts",
    "kind": "theorem",
    "page": "finite-dimensional-complex-inner-product-spaces-and-matrix-interfaces",
    "deps": [
      "def-qc-trace-norm",
      "thm-complex-spectral-theorem-for-normal-endomorphisms",
      "def-trace-of-an-endomorphism"
    ],
    "justified_by": [],
    "statement_or_definition": "For Hermitian H=H+−H− with H±≥0 and orthogonal supports, ||H||1=tr(H+)+tr(H−); if tr(H)=0 then ||H||1=2tr(H+).",
    "proof_obligations": [
      "Diagonalize H by the root complex spectral theorem and separate positive/negative eigenvalues.",
      "Use the trace-norm spectral formula and trace-zero hypothesis for the second identity."
    ],
    "sources": [
      {
        "url": "https://cs.uwaterloo.ca/~watrous/TQI/TQI.pdf",
        "locator": "§3.1.1–3.1.2, PDF pp.133–146; discrimination/trace-norm relationship"
      }
    ],
    "title": "Hermitian Trace Norm Positive Negative Parts",
    "existing_supplier_checks": [
      "Reuses inspected root suppliers: thm-complex-spectral-theorem-for-normal-endomorphisms, def-trace-of-an-endomorphism. These are premises only; the proposed QC statement remains local."
    ],
    "unresolved_obligations": [
      "Diagonalize H by the root complex spectral theorem and separate positive/negative eigenvalues.",
      "Use the trace-norm spectral formula and trace-zero hypothesis for the second identity."
    ]
  },
  {
    "id": "thm-qc-trace-norm-duality-and-norm-properties",
    "kind": "theorem",
    "page": "finite-dimensional-complex-inner-product-spaces-and-matrix-interfaces",
    "deps": [
      "def-qc-trace-norm",
      "thm-singular-value-decomposition",
      "thm-trace-of-ab-equals-trace-of-ba",
      "def-operator-norm-on-a-finite-dimensional-inner-product-space",
      "thm-operator-norm-is-the-largest-singular-value"
    ],
    "justified_by": [],
    "statement_or_definition": "For finite A, ||A||1=max_{||B||∞≤1}|tr(B†A)|; this dual formula proves homogeneity, definiteness and the triangle inequality.",
    "proof_obligations": [
      "Use SVD to attain dual bound and estimate arbitrary contractions.",
      "Derive definiteness, homogeneity and triangle inequality from the dual supremum."
    ],
    "sources": [
      {
        "url": "https://cs.uwaterloo.ca/~watrous/TQI/TQI.pdf",
        "locator": "Ch.1 §1.2 (PDF pp.1–65, proof-free review) and Ch.2 §2.1 (pp.66–79)"
      },
      {
        "url": "https://arxiv.org/pdf/1907.09415",
        "locator": "Appendix A §§A.1–A.10, PDF pp.205–210"
      }
    ],
    "title": "Trace Norm Duality And Norm Properties",
    "existing_supplier_checks": [
      "Reuses inspected root suppliers: thm-singular-value-decomposition, thm-trace-of-ab-equals-trace-of-ba, def-operator-norm-on-a-finite-dimensional-inner-product-space, thm-operator-norm-is-the-largest-singular-value. These are premises only; the proposed QC statement remains local."
    ],
    "unresolved_obligations": [
      "Use SVD to attain dual bound and estimate arbitrary contractions.",
      "Derive definiteness, homogeneity and triangle inequality from the dual supremum."
    ]
  },
  {
    "id": "thm-qc-trace-norm-rank-one-formula",
    "kind": "theorem",
    "page": "finite-dimensional-complex-inner-product-spaces-and-matrix-interfaces",
    "deps": [
      "def-qc-trace-norm",
      "thm-singular-value-decomposition",
      "cor-inner-product-induces-a-norm"
    ],
    "justified_by": [],
    "statement_or_definition": "For x∈K,y∈H, |||x〉〈y|||1=||x||||y||.",
    "proof_obligations": [
      "Compute (xy†)†(xy†)=||x||²yy† and its sole possible nonzero singular value.",
      "Translate the outer product by the root linear-first convention and include zero vectors."
    ],
    "sources": [
      {
        "url": "https://cs.uwaterloo.ca/~watrous/TQI/TQI.pdf",
        "locator": "Ch.1 §§1.1.1–1.1.3, PDF pp.1–42; root pairing conversion verified locally"
      },
      {
        "url": "https://arxiv.org/pdf/1907.09415",
        "locator": "Appendix A.5 and A.10, PDF pp.207–210"
      }
    ],
    "title": "Trace Norm Rank One Formula",
    "existing_supplier_checks": [
      "Reuses inspected root suppliers: thm-singular-value-decomposition, cor-inner-product-induces-a-norm. These are premises only; the proposed QC statement remains local."
    ],
    "unresolved_obligations": [
      "Compute (xy†)†(xy†)=||x||²yy† and its sole possible nonzero singular value.",
      "Translate the outer product by the root linear-first convention and include zero vectors."
    ]
  },
  {
    "id": "thm-qc-trace-norm-spectral-formula",
    "kind": "theorem",
    "page": "finite-dimensional-complex-inner-product-spaces-and-matrix-interfaces",
    "deps": [
      "def-qc-trace-norm",
      "thm-singular-value-decomposition",
      "thm-non-negative-square-root-exists-and-is-unique",
      "def-trace-of-an-endomorphism"
    ],
    "justified_by": [],
    "statement_or_definition": "For finite A, ||A||1=tr(sqrt(A†A)).",
    "proof_obligations": [
      "Use root SVD to identify singular values with eigenvalues of |A|=sqrt(A†A).",
      "Sum eigenvalues using the root endomorphism-trace definition."
    ],
    "sources": [
      {
        "url": "https://cs.uwaterloo.ca/~watrous/TQI/TQI.pdf",
        "locator": "§1.1.3, Eqs.(1.166)–(1.181), PDF pp.40–42"
      },
      {
        "url": "https://arxiv.org/pdf/1907.09415",
        "locator": "Appendix A.5, PDF pp.207–208; linear-algebra review"
      }
    ],
    "title": "Trace Norm Spectral Formula",
    "existing_supplier_checks": [
      "Reuses inspected root suppliers: thm-singular-value-decomposition, thm-non-negative-square-root-exists-and-is-unique, def-trace-of-an-endomorphism. These are premises only; the proposed QC statement remains local."
    ],
    "unresolved_obligations": [
      "Use root SVD to identify singular values with eigenvalues of |A|=sqrt(A†A).",
      "Sum eigenvalues using the root endomorphism-trace definition."
    ]
  },
  {
    "id": "thm-qc-trace-norm-unitary-invariance-and-positive-formula",
    "kind": "theorem",
    "page": "finite-dimensional-complex-inner-product-spaces-and-matrix-interfaces",
    "deps": [
      "def-qc-trace-norm",
      "thm-singular-value-decomposition",
      "thm-non-negative-operator-characterisations",
      "def-trace-of-an-endomorphism"
    ],
    "justified_by": [],
    "statement_or_definition": "Trace norm is left/right unitary invariant and equals tr(A) for positive A.",
    "proof_obligations": [
      "Use SVD to show left/right unitary invariance.",
      "For positive A, identify singular values with nonnegative eigenvalues and sum them using the root endomorphism trace."
    ],
    "sources": [
      {
        "url": "https://cs.uwaterloo.ca/~watrous/TQI/TQI.pdf",
        "locator": "Ch.1 §1.2 (PDF pp.1–65, proof-free review) and Ch.2 §2.1 (pp.66–79)"
      },
      {
        "url": "https://arxiv.org/pdf/1907.09415",
        "locator": "Appendix A §§A.1–A.10, PDF pp.205–210"
      }
    ],
    "title": "Trace Norm Unitary Invariance And Positive Formula",
    "existing_supplier_checks": [
      "Reuses inspected root suppliers: thm-singular-value-decomposition, thm-non-negative-operator-characterisations, def-trace-of-an-endomorphism. These are premises only; the proposed QC statement remains local."
    ],
    "unresolved_obligations": [
      "Use SVD to show left/right unitary invariance.",
      "For positive A, identify singular values with nonnegative eigenvalues and sum them using the root endomorphism trace."
    ]
  },
  {
    "id": "def-qc-ordered-bitstring-encoding",
    "kind": "definition",
    "page": "registers-tensor-products-and-partial-trace",
    "deps": [
      "def-qc-register-and-computational-basis"
    ],
    "justified_by": [
      "thm-qc-bitstring-index-is-bijection"
    ],
    "statement_or_definition": "Use big-endian enc(x)=Σk xk2^(n−1−k), so x0 is most significant and |x〉 means |enc(x)〉.",
    "proof_obligations": [
      "Specify the empty bit string index as zero.",
      "Fix convention for all ordered multi-register bases."
    ],
    "sources": [
      {
        "url": "https://cs.uwaterloo.ca/~watrous/TQI/TQI.pdf",
        "locator": "§2.1.1–2.1.3, PDF pp.66–79"
      },
      {
        "url": "https://arxiv.org/pdf/1907.09415",
        "locator": "Appendix A.6, PDF p.208"
      }
    ],
    "title": "Ordered Bitstring Encoding",
    "existing_supplier_checks": [
      "Repository audit found no matching root supplier for this QC-specific contract; prove it locally."
    ],
    "unresolved_obligations": [
      "Specify the empty bit string index as zero.",
      "Fix convention for all ordered multi-register bases."
    ]
  },
  {
    "id": "def-qc-partial-trace",
    "kind": "definition",
    "page": "registers-tensor-products-and-partial-trace",
    "deps": [
      "def-qc-tensor-register-and-permutation",
      "def-trace-of-an-endomorphism"
    ],
    "justified_by": [
      "thm-qc-partial-trace-characterization-and-basis-independence"
    ],
    "statement_or_definition": "Define (Tr_B R)ii′=Σj Rij,i′j in ordered orthonormal bases.",
    "proof_obligations": [
      "Fix factor and coordinate order.",
      "Define finite contraction including dimension-zero B."
    ],
    "sources": [
      {
        "url": "https://cs.uwaterloo.ca/~watrous/TQI/TQI.pdf",
        "locator": "§2.1.1–2.1.3, PDF pp.66–79"
      },
      {
        "url": "https://arxiv.org/pdf/1907.09415",
        "locator": "Appendix A.6, PDF p.208"
      }
    ],
    "title": "Partial Trace",
    "existing_supplier_checks": [
      "Reuses inspected root suppliers: def-trace-of-an-endomorphism. These are premises only; the proposed QC statement remains local."
    ],
    "unresolved_obligations": [
      "Fix factor and coordinate order.",
      "Define finite contraction including dimension-zero B."
    ]
  },
  {
    "id": "def-qc-register-and-computational-basis",
    "kind": "definition",
    "page": "registers-tensor-products-and-partial-trace",
    "deps": [
      "def-real-and-complex-inner-product-space",
      "def-dimension",
      "lem-standard-basis-of-f-n"
    ],
    "justified_by": [
      "thm-qc-computational-basis-orthonormal"
    ],
    "statement_or_definition": "A register of dimension d≥1 is C^d with ordered basis |0〉,…,|d−1〉; an n-qubit register is (C²)⊗n, with n=0 the one-dimensional trivial register.",
    "proof_obligations": [
      "State basis ordering and identify coordinate vectors.",
      "Distinguish one-dimensional empty tensor from zero Hilbert space."
    ],
    "sources": [
      {
        "url": "https://cs.uwaterloo.ca/~watrous/TQI/TQI.pdf",
        "locator": "§2.1.1–2.1.3, PDF pp.66–79"
      },
      {
        "url": "https://arxiv.org/pdf/1907.09415",
        "locator": "Appendix A.6, PDF p.208"
      }
    ],
    "title": "Register And Computational Basis",
    "existing_supplier_checks": [
      "Reuses inspected root suppliers: def-real-and-complex-inner-product-space, def-dimension, lem-standard-basis-of-f-n. These are premises only; the proposed QC statement remains local."
    ],
    "unresolved_obligations": [
      "State basis ordering and identify coordinate vectors.",
      "Distinguish one-dimensional empty tensor from zero Hilbert space."
    ]
  },
  {
    "id": "def-qc-tensor-map",
    "kind": "definition",
    "page": "registers-tensor-products-and-partial-trace",
    "deps": [
      "def-qc-tensor-register-and-permutation",
      "def-linear-map"
    ],
    "justified_by": [],
    "statement_or_definition": "Define ⊗kTk on elementary tensors by ⊗kxk↦⊗kTkxk.",
    "proof_obligations": [
      "Check compatibility with multilinearity and unique linear extension.",
      "Specify finite factor domains and codomains."
    ],
    "sources": [
      {
        "url": "https://cs.uwaterloo.ca/~watrous/TQI/TQI.pdf",
        "locator": "§2.1.1–2.1.3, PDF pp.66–79"
      },
      {
        "url": "https://arxiv.org/pdf/1907.09415",
        "locator": "Appendix A.6, PDF p.208"
      }
    ],
    "title": "Tensor Map",
    "existing_supplier_checks": [
      "Reuses inspected root suppliers: def-linear-map. These are premises only; the proposed QC statement remains local."
    ],
    "unresolved_obligations": [
      "Check compatibility with multilinearity and unique linear extension.",
      "Specify finite factor domains and codomains."
    ]
  },
  {
    "id": "def-qc-tensor-register-and-permutation",
    "kind": "definition",
    "page": "registers-tensor-products-and-partial-trace",
    "deps": [
      "def-qc-register-and-computational-basis",
      "def-real-and-complex-inner-product-space",
      "def-dimension"
    ],
    "justified_by": [
      "lem-qc-tensor-product-basis-and-dimension"
    ],
    "statement_or_definition": "Define tensor pairing on elementary tensors by product of root pairings and order product basis tuples lexicographically.",
    "proof_obligations": [
      "Show multilinearity relations are respected and induced form is positive definite.",
      "Keep order of factors as part of register data."
    ],
    "sources": [
      {
        "url": "https://cs.uwaterloo.ca/~watrous/TQI/TQI.pdf",
        "locator": "§2.1.1–2.1.3, PDF pp.66–79"
      },
      {
        "url": "https://arxiv.org/pdf/1907.09415",
        "locator": "Appendix A.6, PDF p.208"
      }
    ],
    "title": "Tensor Register And Permutation",
    "existing_supplier_checks": [
      "Reuses inspected root suppliers: def-real-and-complex-inner-product-space, def-dimension. These are premises only; the proposed QC statement remains local."
    ],
    "unresolved_obligations": [
      "Show multilinearity relations are respected and induced form is positive definite.",
      "Keep order of factors as part of register data."
    ]
  },
  {
    "id": "lem-qc-tensor-product-basis-and-dimension",
    "kind": "lemma",
    "page": "registers-tensor-products-and-partial-trace",
    "deps": [
      "def-qc-tensor-register-and-permutation",
      "thm-tensor-product-basis-from-bases",
      "cor-tensor-products-of-finite-free-modules-and-dimension"
    ],
    "justified_by": [],
    "statement_or_definition": "Ordered elementary tensors form an orthonormal basis with product dimension.",
    "proof_obligations": [
      "Combine root algebraic basis theorem with tensor inner product.",
      "Prove orthonormality, spanning, uniqueness and zero-factor boundaries."
    ],
    "sources": [
      {
        "url": "https://cs.uwaterloo.ca/~watrous/TQI/TQI.pdf",
        "locator": "§2.1.1–2.1.3, PDF pp.66–79"
      },
      {
        "url": "https://arxiv.org/pdf/1907.09415",
        "locator": "Appendix A.6, PDF p.208"
      }
    ],
    "title": "Tensor Product Basis And Dimension",
    "existing_supplier_checks": [
      "Reuses inspected root suppliers: thm-tensor-product-basis-from-bases, cor-tensor-products-of-finite-free-modules-and-dimension. These are premises only; the proposed QC statement remains local."
    ],
    "unresolved_obligations": [
      "Combine root algebraic basis theorem with tensor inner product.",
      "Prove orthonormality, spanning, uniqueness and zero-factor boundaries."
    ]
  },
  {
    "id": "thm-qc-bitstring-index-is-bijection",
    "kind": "theorem",
    "page": "registers-tensor-products-and-partial-trace",
    "deps": [
      "def-qc-ordered-bitstring-encoding"
    ],
    "justified_by": [],
    "statement_or_definition": "Big-endian enc is a bijection {0,1}ⁿ→{0,…,2ⁿ−1}; bit permutations induce basis permutations.",
    "proof_obligations": [
      "Prove by binary expansion or induction.",
      "Check n=0 and preservation of declared order."
    ],
    "sources": [
      {
        "url": "https://cs.uwaterloo.ca/~watrous/TQI/TQI.pdf",
        "locator": "§2.1.1–2.1.3, PDF pp.66–79"
      },
      {
        "url": "https://arxiv.org/pdf/1907.09415",
        "locator": "Appendix A.6, PDF p.208"
      }
    ],
    "title": "Bitstring Index Is Bijection",
    "existing_supplier_checks": [
      "Repository audit found no matching root supplier for this QC-specific contract; prove it locally."
    ],
    "unresolved_obligations": [
      "Prove by binary expansion or induction.",
      "Check n=0 and preservation of declared order."
    ]
  },
  {
    "id": "thm-qc-computational-basis-orthonormal",
    "kind": "theorem",
    "page": "registers-tensor-products-and-partial-trace",
    "deps": [
      "def-qc-register-and-computational-basis",
      "prop-standard-coordinate-inner-products"
    ],
    "justified_by": [],
    "statement_or_definition": "The computational vectors form an orthonormal basis under the root standard pairing.",
    "proof_obligations": [
      "Check coordinate-vector pairings and basis expansion.",
      "Include dimension one and n=0."
    ],
    "sources": [
      {
        "url": "https://cs.uwaterloo.ca/~watrous/TQI/TQI.pdf",
        "locator": "§2.1.1–2.1.3, PDF pp.66–79"
      },
      {
        "url": "https://arxiv.org/pdf/1907.09415",
        "locator": "Appendix A.6, PDF p.208"
      }
    ],
    "title": "Computational Basis Orthonormal",
    "existing_supplier_checks": [
      "Reuses inspected root suppliers: prop-standard-coordinate-inner-products. These are premises only; the proposed QC statement remains local."
    ],
    "unresolved_obligations": [
      "Check coordinate-vector pairings and basis expansion.",
      "Include dimension one and n=0."
    ]
  },
  {
    "id": "thm-qc-partial-trace-characterization-and-basis-independence",
    "kind": "theorem",
    "page": "registers-tensor-products-and-partial-trace",
    "deps": [
      "def-qc-partial-trace",
      "def-trace-of-an-endomorphism",
      "thm-trace-of-ab-equals-trace-of-ba"
    ],
    "justified_by": [],
    "statement_or_definition": "Tr_B is the unique map with tr((Tr_B R)A)=tr(R(A⊗I)) and is independent of basis of B.",
    "proof_obligations": [
      "Derive coordinate formula from pairing identity.",
      "Use trace-pairing nondegeneracy for uniqueness and then basis independence."
    ],
    "sources": [
      {
        "url": "https://cs.uwaterloo.ca/~watrous/TQI/TQI.pdf",
        "locator": "§2.1.1–2.1.3, PDF pp.66–79"
      },
      {
        "url": "https://arxiv.org/pdf/1907.09415",
        "locator": "Appendix A.6, PDF p.208"
      }
    ],
    "title": "Partial Trace Characterization And Basis Independence",
    "existing_supplier_checks": [
      "Reuses inspected root suppliers: def-trace-of-an-endomorphism, thm-trace-of-ab-equals-trace-of-ba. These are premises only; the proposed QC statement remains local."
    ],
    "unresolved_obligations": [
      "Derive coordinate formula from pairing identity.",
      "Use trace-pairing nondegeneracy for uniqueness and then basis independence."
    ]
  },
  {
    "id": "thm-qc-partial-trace-positive-and-trace-preserving",
    "kind": "theorem",
    "page": "registers-tensor-products-and-partial-trace",
    "deps": [
      "def-qc-partial-trace",
      "def-non-negative-and-positive-operator",
      "def-trace-of-an-endomorphism",
      "thm-trace-of-ab-equals-trace-of-ba"
    ],
    "justified_by": [],
    "statement_or_definition": "Partial trace preserves positivity and total trace.",
    "proof_obligations": [
      "Express each output quadratic form as a sum of nonnegative input forms.",
      "Set A=I in defining identity for trace preservation."
    ],
    "sources": [
      {
        "url": "https://cs.uwaterloo.ca/~watrous/TQI/TQI.pdf",
        "locator": "§2.1.1–2.1.3, PDF pp.66–79"
      },
      {
        "url": "https://arxiv.org/pdf/1907.09415",
        "locator": "Appendix A.6, PDF p.208"
      }
    ],
    "title": "Partial Trace Positive And Trace Preserving",
    "existing_supplier_checks": [
      "Reuses inspected root suppliers: def-non-negative-and-positive-operator, def-trace-of-an-endomorphism, thm-trace-of-ab-equals-trace-of-ba. These are premises only; the proposed QC statement remains local."
    ],
    "unresolved_obligations": [
      "Express each output quadratic form as a sum of nonnegative input forms.",
      "Set A=I in defining identity for trace preservation."
    ]
  },
  {
    "id": "thm-qc-tensor-map-composition-and-adjoint",
    "kind": "theorem",
    "page": "registers-tensor-products-and-partial-trace",
    "deps": [
      "def-qc-tensor-map",
      "thm-adjoint-exists-and-is-unique-in-finite-dimension",
      "thm-qc-dirac-notation-coordinate-identity"
    ],
    "justified_by": [],
    "statement_or_definition": "Tensor maps preserve composition and identities and (⊗kTk)*=⊗kTk*.",
    "proof_obligations": [
      "Check composition on spanning elementary tensors.",
      "Verify adjoint pairing on elementary tensors using root product convention."
    ],
    "sources": [
      {
        "url": "https://cs.uwaterloo.ca/~watrous/TQI/TQI.pdf",
        "locator": "§2.1.1–2.1.3, PDF pp.66–79"
      },
      {
        "url": "https://arxiv.org/pdf/1907.09415",
        "locator": "Appendix A.6, PDF p.208"
      }
    ],
    "title": "Tensor Map Composition And Adjoint",
    "existing_supplier_checks": [
      "Reuses inspected root suppliers: thm-adjoint-exists-and-is-unique-in-finite-dimension. These are premises only; the proposed QC statement remains local."
    ],
    "unresolved_obligations": [
      "Check composition on spanning elementary tensors.",
      "Verify adjoint pairing on elementary tensors using root product convention."
    ]
  },
  {
    "id": "thm-qc-wire-permutation-is-unitary",
    "kind": "theorem",
    "page": "registers-tensor-products-and-partial-trace",
    "deps": [
      "def-qc-tensor-register-and-permutation",
      "lem-qc-tensor-product-basis-and-dimension"
    ],
    "justified_by": [],
    "statement_or_definition": "Every finite wire permutation is implemented by a unitary basis permutation.",
    "proof_obligations": [
      "Define action on elementary tensors and prove bijectivity.",
      "Check basis inner products and inverse-adjoint identity."
    ],
    "sources": [
      {
        "url": "https://cs.uwaterloo.ca/~watrous/TQI/TQI.pdf",
        "locator": "§2.1.1–2.1.3, PDF pp.66–79"
      },
      {
        "url": "https://arxiv.org/pdf/1907.09415",
        "locator": "Appendix A.6, PDF p.208"
      }
    ],
    "title": "Wire Permutation Is Unitary",
    "existing_supplier_checks": [
      "Repository audit found no matching root supplier for this QC-specific contract; prove it locally."
    ],
    "unresolved_obligations": [
      "Define action on elementary tensors and prove bijectivity.",
      "Check basis inner products and inverse-adjoint identity."
    ]
  },
  {
    "id": "def-qc-density-operator",
    "kind": "definition",
    "page": "pure-and-mixed-states-ensembles-and-schmidt-decomposition",
    "deps": [
      "def-non-negative-and-positive-operator",
      "def-trace-of-an-endomorphism"
    ],
    "justified_by": [
      "thm-qc-density-operator-existence"
    ],
    "statement_or_definition": "A density operator on nonzero finite-dimensional H is PSD with trace one.",
    "proof_obligations": [
      "Separate mathematical definition from preparation interpretation.",
      "Exclude zero-dimensional H because no trace-one state exists."
    ],
    "sources": [
      {
        "url": "https://cs.uwaterloo.ca/~watrous/TQI/TQI.pdf",
        "locator": "§2.1.2–2.1.3, PDF pp.69–83; Thms.2.10–2.12"
      },
      {
        "url": "https://arxiv.org/pdf/1907.09415",
        "locator": "§15.1, PDF pp.139–140; §18.3, pp.170–174"
      },
      {
        "url": "https://www.preskill.caltech.edu/ph219/chap2_15.pdf",
        "locator": "§§2.3–2.5, PDF pp.16–35; complete cross-read in qc_r2 ledger"
      }
    ],
    "title": "Density Operator",
    "existing_supplier_checks": [
      "Reuses inspected root suppliers: def-non-negative-and-positive-operator, def-trace-of-an-endomorphism. These are premises only; the proposed QC statement remains local."
    ],
    "unresolved_obligations": [
      "Separate mathematical definition from preparation interpretation.",
      "Exclude zero-dimensional H because no trace-one state exists."
    ]
  },
  {
    "id": "def-qc-ensemble-and-purification",
    "kind": "definition",
    "page": "pure-and-mixed-states-ensembles-and-schmidt-decomposition",
    "deps": [
      "def-qc-density-operator",
      "def-qc-tensor-register-and-permutation"
    ],
    "justified_by": [
      "thm-qc-ensemble-barycenter-is-density",
      "thm-qc-purification-existence-and-unitary-equivalence"
    ],
    "statement_or_definition": "A finite ensemble is a probability vector with associated density states and barycenter Σi piρi; a purification of ρ is a unit Ψ∈H⊗K with Tr_K|Ψ〉〈Ψ|=ρ.",
    "proof_obligations": [
      "Specify finite simplex and zero-weight convention.",
      "Use QC02 partial trace definition and specify finite auxiliary register."
    ],
    "sources": [
      {
        "url": "https://cs.uwaterloo.ca/~watrous/TQI/TQI.pdf",
        "locator": "§2.1.2–2.1.3, PDF pp.69–83; Thms.2.10–2.12"
      },
      {
        "url": "https://arxiv.org/pdf/1907.09415",
        "locator": "§15.1, PDF pp.139–140; §18.3, pp.170–174"
      },
      {
        "url": "https://www.preskill.caltech.edu/ph219/chap2_15.pdf",
        "locator": "§§2.3–2.5, PDF pp.16–35; complete cross-read in qc_r2 ledger"
      }
    ],
    "title": "Ensemble And Purification",
    "existing_supplier_checks": [
      "Repository audit found no matching root supplier for this QC-specific contract; prove it locally."
    ],
    "unresolved_obligations": [
      "Specify finite simplex and zero-weight convention.",
      "Use QC02 partial trace definition and specify finite auxiliary register."
    ]
  },
  {
    "id": "def-qc-pure-state-and-ray",
    "kind": "definition",
    "page": "pure-and-mixed-states-ensembles-and-schmidt-decomposition",
    "deps": [
      "def-real-and-complex-inner-product-space",
      "def-dimension",
      "def-qc-dirac-notation-conversion"
    ],
    "justified_by": [
      "thm-qc-ray-projector-well-defined-and-bijective"
    ],
    "statement_or_definition": "A pure state is a ray of nonzero vectors represented by the rank-one projector |u〉〈u| for a unit representative u.",
    "proof_obligations": [
      "Define ray equivalence under nonzero complex scalars and unit normalization.",
      "Exclude zero vector and use root outer-product convention."
    ],
    "sources": [
      {
        "url": "https://cs.uwaterloo.ca/~watrous/TQI/TQI.pdf",
        "locator": "§2.1.2–2.1.3, PDF pp.69–83; Thms.2.10–2.12"
      },
      {
        "url": "https://arxiv.org/pdf/1907.09415",
        "locator": "§15.1, PDF pp.139–140; §18.3, pp.170–174"
      },
      {
        "url": "https://www.preskill.caltech.edu/ph219/chap2_15.pdf",
        "locator": "§§2.3–2.5, PDF pp.16–35; complete cross-read in qc_r2 ledger"
      }
    ],
    "title": "Pure State And Ray",
    "existing_supplier_checks": [
      "Reuses inspected root suppliers: def-real-and-complex-inner-product-space, def-dimension. These are premises only; the proposed QC statement remains local."
    ],
    "unresolved_obligations": [
      "Define ray equivalence under nonzero complex scalars and unit normalization.",
      "Exclude zero vector and use root outer-product convention."
    ]
  },
  {
    "id": "thm-qc-density-operator-convexity",
    "kind": "theorem",
    "page": "pure-and-mixed-states-ensembles-and-schmidt-decomposition",
    "deps": [
      "def-qc-density-operator",
      "thm-qc-ensemble-barycenter-is-density"
    ],
    "justified_by": [],
    "statement_or_definition": "The set of finite-dimensional density operators is convex.",
    "proof_obligations": [
      "Apply barycenter result to two states with t and 1−t.",
      "Check endpoints t=0,1."
    ],
    "sources": [
      {
        "url": "https://cs.uwaterloo.ca/~watrous/TQI/TQI.pdf",
        "locator": "§2.1.2–2.1.3, PDF pp.69–83; Thms.2.10–2.12"
      },
      {
        "url": "https://arxiv.org/pdf/1907.09415",
        "locator": "§15.1, PDF pp.139–140; §18.3, pp.170–174"
      },
      {
        "url": "https://www.preskill.caltech.edu/ph219/chap2_15.pdf",
        "locator": "§§2.3–2.5, PDF pp.16–35; complete cross-read in qc_r2 ledger"
      }
    ],
    "title": "Density Operator Convexity",
    "existing_supplier_checks": [
      "Repository audit found no matching root supplier for this QC-specific contract; prove it locally."
    ],
    "unresolved_obligations": [
      "Apply barycenter result to two states with t and 1−t.",
      "Check endpoints t=0,1."
    ]
  },
  {
    "id": "thm-qc-density-operator-existence",
    "kind": "theorem",
    "page": "pure-and-mixed-states-ensembles-and-schmidt-decomposition",
    "deps": [
      "def-qc-density-operator",
      "def-trace-of-an-endomorphism"
    ],
    "justified_by": [],
    "statement_or_definition": "Every nonzero finite-dimensional H admits I/d as a density operator.",
    "proof_obligations": [
      "Check positivity and trace d/d=1.",
      "Cover d=1 and exclusion d=0."
    ],
    "sources": [
      {
        "url": "https://cs.uwaterloo.ca/~watrous/TQI/TQI.pdf",
        "locator": "§2.1.2–2.1.3, PDF pp.69–83; Thms.2.10–2.12"
      },
      {
        "url": "https://arxiv.org/pdf/1907.09415",
        "locator": "§15.1, PDF pp.139–140; §18.3, pp.170–174"
      },
      {
        "url": "https://www.preskill.caltech.edu/ph219/chap2_15.pdf",
        "locator": "§§2.3–2.5, PDF pp.16–35; complete cross-read in qc_r2 ledger"
      }
    ],
    "title": "Density Operator Existence",
    "existing_supplier_checks": [
      "Reuses inspected root suppliers: def-trace-of-an-endomorphism. These are premises only; the proposed QC statement remains local."
    ],
    "unresolved_obligations": [
      "Check positivity and trace d/d=1.",
      "Cover d=1 and exclusion d=0."
    ]
  },
  {
    "id": "thm-qc-density-spectral-ensemble",
    "kind": "theorem",
    "page": "pure-and-mixed-states-ensembles-and-schmidt-decomposition",
    "deps": [
      "def-qc-density-operator",
      "thm-non-negative-operator-characterisations",
      "thm-non-negative-square-root-exists-and-is-unique",
      "thm-qc-ray-projector-well-defined-and-bijective"
    ],
    "justified_by": [],
    "statement_or_definition": "Every density operator has orthogonal spectral ensemble ρ=Σjλj|ej〉〈ej| with λj≥0 and Σjλj=1.",
    "proof_obligations": [
      "Apply PSD spectral theorem and trace formula.",
      "State treatment of zero eigenvalues."
    ],
    "sources": [
      {
        "url": "https://cs.uwaterloo.ca/~watrous/TQI/TQI.pdf",
        "locator": "§2.1.2–2.1.3, PDF pp.69–83; Thms.2.10–2.12"
      },
      {
        "url": "https://arxiv.org/pdf/1907.09415",
        "locator": "§15.1, PDF pp.139–140; §18.3, pp.170–174"
      },
      {
        "url": "https://www.preskill.caltech.edu/ph219/chap2_15.pdf",
        "locator": "§§2.3–2.5, PDF pp.16–35; complete cross-read in qc_r2 ledger"
      }
    ],
    "title": "Density Spectral Ensemble",
    "existing_supplier_checks": [
      "Reuses inspected root suppliers: thm-non-negative-operator-characterisations, thm-non-negative-square-root-exists-and-is-unique. These are premises only; the proposed QC statement remains local."
    ],
    "unresolved_obligations": [
      "Apply PSD spectral theorem and trace formula.",
      "State treatment of zero eigenvalues."
    ]
  },
  {
    "id": "thm-qc-ensemble-barycenter-is-density",
    "kind": "theorem",
    "page": "pure-and-mixed-states-ensembles-and-schmidt-decomposition",
    "deps": [
      "def-qc-ensemble-and-purification",
      "def-qc-density-operator"
    ],
    "justified_by": [],
    "statement_or_definition": "Finite convex mixtures of density operators are density operators, and regrouping outcomes preserves the barycenter.",
    "proof_obligations": [
      "Prove positivity termwise and trace one by linearity.",
      "Handle zero weights and finite regrouping."
    ],
    "sources": [
      {
        "url": "https://cs.uwaterloo.ca/~watrous/TQI/TQI.pdf",
        "locator": "§2.1.2–2.1.3, PDF pp.69–83; Thms.2.10–2.12"
      },
      {
        "url": "https://arxiv.org/pdf/1907.09415",
        "locator": "§15.1, PDF pp.139–140; §18.3, pp.170–174"
      },
      {
        "url": "https://www.preskill.caltech.edu/ph219/chap2_15.pdf",
        "locator": "§§2.3–2.5, PDF pp.16–35; complete cross-read in qc_r2 ledger"
      }
    ],
    "title": "Ensemble Barycenter Is Density",
    "existing_supplier_checks": [
      "Repository audit found no matching root supplier for this QC-specific contract; prove it locally."
    ],
    "unresolved_obligations": [
      "Prove positivity termwise and trace one by linearity.",
      "Handle zero weights and finite regrouping."
    ]
  },
  {
    "id": "thm-qc-ensemble-purification-correspondence",
    "kind": "theorem",
    "page": "pure-and-mixed-states-ensembles-and-schmidt-decomposition",
    "deps": [
      "def-qc-ensemble-and-purification",
      "thm-qc-density-spectral-ensemble",
      "thm-qc-schmidt-decomposition"
    ],
    "justified_by": [],
    "statement_or_definition": "Every finite ensemble decomposition of ρ is realizable by a measurement on a purification.",
    "proof_obligations": [
      "Factor coefficient matrices with equal reduced Gram matrix.",
      "Construct complete measurement effects on the purifying support and compute conditional outcomes."
    ],
    "sources": [
      {
        "url": "https://cs.uwaterloo.ca/~watrous/TQI/TQI.pdf",
        "locator": "§2.1.2–2.1.3, PDF pp.69–83; Thms.2.10–2.12"
      },
      {
        "url": "https://arxiv.org/pdf/1907.09415",
        "locator": "§15.1, PDF pp.139–140; §18.3, pp.170–174"
      },
      {
        "url": "https://www.preskill.caltech.edu/ph219/chap2_15.pdf",
        "locator": "§§2.3–2.5, PDF pp.16–35; complete cross-read in qc_r2 ledger"
      }
    ],
    "title": "Ensemble Purification Correspondence",
    "existing_supplier_checks": [
      "Repository audit found no matching root supplier for this QC-specific contract; prove it locally."
    ],
    "unresolved_obligations": [
      "Factor coefficient matrices with equal reduced Gram matrix.",
      "Construct complete measurement effects on the purifying support and compute conditional outcomes."
    ]
  },
  {
    "id": "thm-qc-purification-existence-and-unitary-equivalence",
    "kind": "theorem",
    "page": "pure-and-mixed-states-ensembles-and-schmidt-decomposition",
    "deps": [
      "def-qc-ensemble-and-purification",
      "thm-qc-density-spectral-ensemble",
      "def-qc-partial-trace",
      "thm-qc-schmidt-decomposition"
    ],
    "justified_by": [],
    "statement_or_definition": "Every finite density state has a purification; any two purifications of the same state are related by an auxiliary unitary after padding.",
    "proof_obligations": [
      "Construct Σj√λj ej⊗fj and compute partial trace.",
      "Use Schmidt coefficients to build a support isometry and extend to a unitary on padded environments."
    ],
    "sources": [
      {
        "url": "https://cs.uwaterloo.ca/~watrous/TQI/TQI.pdf",
        "locator": "§2.1.2–2.1.3, PDF pp.69–83; Thms.2.10–2.12"
      },
      {
        "url": "https://arxiv.org/pdf/1907.09415",
        "locator": "§15.1, PDF pp.139–140; §18.3, pp.170–174"
      },
      {
        "url": "https://www.preskill.caltech.edu/ph219/chap2_15.pdf",
        "locator": "§§2.3–2.5, PDF pp.16–35; complete cross-read in qc_r2 ledger"
      }
    ],
    "title": "Purification Existence And Unitary Equivalence",
    "existing_supplier_checks": [
      "Repository audit found no matching root supplier for this QC-specific contract; prove it locally."
    ],
    "unresolved_obligations": [
      "Construct Σj√λj ej⊗fj and compute partial trace.",
      "Use Schmidt coefficients to build a support isometry and extend to a unitary on padded environments."
    ]
  },
  {
    "id": "thm-qc-purification-minimal-environment-dimension",
    "kind": "theorem",
    "page": "pure-and-mixed-states-ensembles-and-schmidt-decomposition",
    "deps": [
      "thm-qc-purification-existence-and-unitary-equivalence",
      "thm-qc-schmidt-decomposition"
    ],
    "justified_by": [],
    "statement_or_definition": "The least auxiliary dimension for purifying ρ equals rank(ρ).",
    "proof_obligations": [
      "Schmidt rank bounds every purification environment.",
      "Spectral purification attains the rank."
    ],
    "sources": [
      {
        "url": "https://cs.uwaterloo.ca/~watrous/TQI/TQI.pdf",
        "locator": "§2.1.2–2.1.3, PDF pp.69–83; Thms.2.10–2.12"
      },
      {
        "url": "https://arxiv.org/pdf/1907.09415",
        "locator": "§15.1, PDF pp.139–140; §18.3, pp.170–174"
      },
      {
        "url": "https://www.preskill.caltech.edu/ph219/chap2_15.pdf",
        "locator": "§§2.3–2.5, PDF pp.16–35; complete cross-read in qc_r2 ledger"
      }
    ],
    "title": "Purification Minimal Environment Dimension",
    "existing_supplier_checks": [
      "Repository audit found no matching root supplier for this QC-specific contract; prove it locally."
    ],
    "unresolved_obligations": [
      "Schmidt rank bounds every purification environment.",
      "Spectral purification attains the rank."
    ]
  },
  {
    "id": "thm-qc-rank-one-density-operator",
    "kind": "theorem",
    "page": "pure-and-mixed-states-ensembles-and-schmidt-decomposition",
    "deps": [
      "def-qc-pure-state-and-ray",
      "def-qc-density-operator",
      "thm-qc-ray-projector-well-defined-and-bijective"
    ],
    "justified_by": [],
    "statement_or_definition": "Every ray projector is a density state; every rank-one density is the projector of a unique ray.",
    "proof_obligations": [
      "Use positivity and trace-one characterization.",
      "Apply spectral decomposition to identify rank-one projections."
    ],
    "sources": [
      {
        "url": "https://cs.uwaterloo.ca/~watrous/TQI/TQI.pdf",
        "locator": "§2.1.2–2.1.3, PDF pp.69–83; Thms.2.10–2.12"
      },
      {
        "url": "https://arxiv.org/pdf/1907.09415",
        "locator": "§15.1, PDF pp.139–140; §18.3, pp.170–174"
      },
      {
        "url": "https://www.preskill.caltech.edu/ph219/chap2_15.pdf",
        "locator": "§§2.3–2.5, PDF pp.16–35; complete cross-read in qc_r2 ledger"
      }
    ],
    "title": "Rank One Density Operator",
    "existing_supplier_checks": [
      "Repository audit found no matching root supplier for this QC-specific contract; prove it locally."
    ],
    "unresolved_obligations": [
      "Use positivity and trace-one characterization.",
      "Apply spectral decomposition to identify rank-one projections."
    ]
  },
  {
    "id": "thm-qc-ray-projector-well-defined-and-bijective",
    "kind": "theorem",
    "page": "pure-and-mixed-states-ensembles-and-schmidt-decomposition",
    "deps": [
      "def-qc-pure-state-and-ray",
      "def-trace-of-an-endomorphism",
      "def-non-negative-and-positive-operator"
    ],
    "justified_by": [],
    "statement_or_definition": "Ray-to-projector is well-defined and bijective onto rank-one orthogonal projections; each projector is PSD and trace one.",
    "proof_obligations": [
      "Translate |u〉〈u| to z↦⟨z,u⟩root u and compute positivity, adjoint, idempotence, trace.",
      "Recover ray from one-dimensional range and show phase invariance."
    ],
    "sources": [
      {
        "url": "https://cs.uwaterloo.ca/~watrous/TQI/TQI.pdf",
        "locator": "§2.1.2–2.1.3, PDF pp.69–83; Thms.2.10–2.12"
      },
      {
        "url": "https://arxiv.org/pdf/1907.09415",
        "locator": "§15.1, PDF pp.139–140; §18.3, pp.170–174"
      },
      {
        "url": "https://www.preskill.caltech.edu/ph219/chap2_15.pdf",
        "locator": "§§2.3–2.5, PDF pp.16–35; complete cross-read in qc_r2 ledger"
      }
    ],
    "title": "Ray Projector Well Defined And Bijective",
    "existing_supplier_checks": [
      "Reuses inspected root suppliers: def-trace-of-an-endomorphism, def-non-negative-and-positive-operator. These are premises only; the proposed QC statement remains local."
    ],
    "unresolved_obligations": [
      "Translate |u〉〈u| to z↦⟨z,u⟩root u and compute positivity, adjoint, idempotence, trace.",
      "Recover ray from one-dimensional range and show phase invariance."
    ]
  },
  {
    "id": "thm-qc-schmidt-decomposition",
    "kind": "theorem",
    "page": "pure-and-mixed-states-ensembles-and-schmidt-decomposition",
    "deps": [
      "def-qc-tensor-register-and-permutation",
      "thm-singular-value-decomposition",
      "def-qc-dirac-notation-conversion"
    ],
    "justified_by": [],
    "statement_or_definition": "Every Ψ∈H⊗K has Schmidt form Σr sr ur⊗vr with positive coefficients and orthonormal families; ||Ψ||²=Σr sr².",
    "proof_obligations": [
      "Apply root SVD to the coefficient map in product bases.",
      "Translate second-factor coordinates with conjugation; handle Ψ=0."
    ],
    "sources": [
      {
        "url": "https://cs.uwaterloo.ca/~watrous/TQI/TQI.pdf",
        "locator": "§2.1.2–2.1.3, PDF pp.69–83; Thms.2.10–2.12"
      },
      {
        "url": "https://arxiv.org/pdf/1907.09415",
        "locator": "§15.1, PDF pp.139–140; §18.3, pp.170–174"
      },
      {
        "url": "https://www.preskill.caltech.edu/ph219/chap2_15.pdf",
        "locator": "§§2.3–2.5, PDF pp.16–35; complete cross-read in qc_r2 ledger"
      }
    ],
    "title": "Schmidt Decomposition",
    "existing_supplier_checks": [
      "Reuses inspected root suppliers: thm-singular-value-decomposition. These are premises only; the proposed QC statement remains local."
    ],
    "unresolved_obligations": [
      "Apply root SVD to the coefficient map in product bases.",
      "Translate second-factor coordinates with conjugation; handle Ψ=0."
    ]
  },
  {
    "id": "def-qc-completely-positive-map",
    "kind": "definition",
    "page": "measurements-povms-and-instruments",
    "deps": [
      "def-non-negative-and-positive-operator",
      "def-qc-tensor-map"
    ],
    "justified_by": [],
    "statement_or_definition": "A linear map Φ:L(H)→L(K) is completely positive if Φ⊗id_Cr maps positive semidefinite operators to positive semidefinite operators for every finite r≥1.",
    "proof_obligations": [
      "State all finite ancillary dimensions and positivity on the full matrix space.",
      "Keep complete positivity distinct from mere positivity; later QC05 supplies finite Choi/Kraus characterizations."
    ],
    "sources": [
      {
        "url": "https://cs.uwaterloo.ca/~watrous/TQI/TQI.pdf",
        "locator": "§2.2.1–2.2.2, PDF pp.80–99"
      },
      {
        "url": "https://www.preskill.caltech.edu/ph219/chap3_15.pdf",
        "locator": "§§3.2–3.3, PDF pp.11–24; complete cross-read qc_r2 ledger"
      }
    ],
    "title": "Completely Positive Map",
    "existing_supplier_checks": [
      "Reuses inspected root suppliers: def-non-negative-and-positive-operator. These are premises only; the proposed QC statement remains local."
    ],
    "unresolved_obligations": [
      "State all finite ancillary dimensions and positivity on the full matrix space.",
      "Keep complete positivity distinct from mere positivity; later QC05 supplies finite Choi/Kraus characterizations."
    ]
  },
  {
    "id": "def-qc-finite-outcome-probability-kernel",
    "kind": "definition",
    "page": "measurements-povms-and-instruments",
    "deps": [
      "def-qc-povm-and-outcome-law"
    ],
    "justified_by": [
      "thm-qc-finite-outcome-law-is-a-probability-kernel"
    ],
    "statement_or_definition": "The measurement law maps each density ρ to the finite distribution a↦tr(ρEa).",
    "proof_obligations": [
      "Give the outcome set the full finite sigma algebra.",
      "Leave normalization to its theorem."
    ],
    "sources": [
      {
        "url": "https://cs.uwaterloo.ca/~watrous/TQI/TQI.pdf",
        "locator": "§2.3.1–2.3.3, PDF pp.108–131"
      },
      {
        "url": "https://arxiv.org/pdf/1907.09415",
        "locator": "§1.2.2, PDF pp.16–17; §15.1, pp.139–140"
      },
      {
        "url": "https://www.preskill.caltech.edu/ph219/chap3_15.pdf",
        "locator": "§§3.1–3.2, PDF pp.4–19; complete cross-read in qc_r2 ledger"
      }
    ],
    "title": "Finite Outcome Probability Kernel",
    "existing_supplier_checks": [
      "Repository audit found no matching root supplier for this QC-specific contract; prove it locally."
    ],
    "unresolved_obligations": [
      "Give the outcome set the full finite sigma algebra.",
      "Leave normalization to its theorem."
    ]
  },
  {
    "id": "def-qc-instrument-and-conditional-state",
    "kind": "definition",
    "page": "measurements-povms-and-instruments",
    "deps": [
      "def-qc-completely-positive-map",
      "def-trace-of-an-endomorphism",
      "def-qc-density-operator"
    ],
    "justified_by": [
      "thm-qc-instrument-outcome-law-normalizes",
      "thm-qc-instrument-conditional-state-is-density"
    ],
    "statement_or_definition": "A finite instrument is a family of CP outcome maps with Σa tr(Ia(X))=tr(X); conditional state is Ia(ρ)/pa when pa=tr(Ia(ρ))>0, otherwise ⊥.",
    "proof_obligations": [
      "Define CP through all finite ancilla extensions, without later Kraus results.",
      "Specify output spaces and finite outcome set; separate normalization proof."
    ],
    "sources": [
      {
        "url": "https://cs.uwaterloo.ca/~watrous/TQI/TQI.pdf",
        "locator": "§2.3.1–2.3.3, PDF pp.108–131"
      },
      {
        "url": "https://arxiv.org/pdf/1907.09415",
        "locator": "§1.2.2, PDF pp.16–17; §15.1, pp.139–140"
      },
      {
        "url": "https://www.preskill.caltech.edu/ph219/chap3_15.pdf",
        "locator": "§§3.1–3.2, PDF pp.4–19; complete cross-read in qc_r2 ledger"
      }
    ],
    "title": "Instrument And Conditional State",
    "existing_supplier_checks": [
      "Reuses inspected root suppliers: def-trace-of-an-endomorphism. These are premises only; the proposed QC statement remains local."
    ],
    "unresolved_obligations": [
      "Define CP through all finite ancilla extensions, without later Kraus results.",
      "Specify output spaces and finite outcome set; separate normalization proof."
    ]
  },
  {
    "id": "def-qc-povm-and-outcome-law",
    "kind": "definition",
    "page": "measurements-povms-and-instruments",
    "deps": [
      "def-non-negative-and-positive-operator",
      "def-qc-density-operator",
      "def-trace-of-an-endomorphism"
    ],
    "justified_by": [
      "thm-qc-povm-probabilities-normalize"
    ],
    "statement_or_definition": "A finite POVM is Ea≥0 with ΣEa=I; define weights pa=tr(ρEa).",
    "proof_obligations": [
      "Specify finite outcome space and effect types.",
      "Put positivity/normalization in a separate theorem."
    ],
    "sources": [
      {
        "url": "https://cs.uwaterloo.ca/~watrous/TQI/TQI.pdf",
        "locator": "§2.3.1–2.3.3, PDF pp.108–131"
      },
      {
        "url": "https://arxiv.org/pdf/1907.09415",
        "locator": "§1.2.2, PDF pp.16–17; §15.1, pp.139–140"
      },
      {
        "url": "https://www.preskill.caltech.edu/ph219/chap3_15.pdf",
        "locator": "§§3.1–3.2, PDF pp.4–19; complete cross-read in qc_r2 ledger"
      }
    ],
    "title": "POVM And Outcome Law",
    "existing_supplier_checks": [
      "Reuses inspected root suppliers: def-non-negative-and-positive-operator, def-trace-of-an-endomorphism. These are premises only; the proposed QC statement remains local."
    ],
    "unresolved_obligations": [
      "Specify finite outcome space and effect types.",
      "Put positivity/normalization in a separate theorem."
    ]
  },
  {
    "id": "def-qc-projective-measurement",
    "kind": "definition",
    "page": "measurements-povms-and-instruments",
    "deps": [
      "def-non-negative-and-positive-operator",
      "def-qc-density-operator"
    ],
    "justified_by": [
      "thm-qc-projective-measurement-outcome-law"
    ],
    "statement_or_definition": "A finite projective measurement is a finite family of pairwise orthogonal self-adjoint projections summing to I.",
    "proof_obligations": [
      "Specify finite labels and allow zero projections.",
      "Keep probability consequences separate."
    ],
    "sources": [
      {
        "url": "https://cs.uwaterloo.ca/~watrous/TQI/TQI.pdf",
        "locator": "§2.3.1–2.3.3, PDF pp.108–131"
      },
      {
        "url": "https://arxiv.org/pdf/1907.09415",
        "locator": "§1.2.2, PDF pp.16–17; §15.1, pp.139–140"
      },
      {
        "url": "https://www.preskill.caltech.edu/ph219/chap3_15.pdf",
        "locator": "§§3.1–3.2, PDF pp.4–19; complete cross-read in qc_r2 ledger"
      }
    ],
    "title": "Projective Measurement",
    "existing_supplier_checks": [
      "Reuses inspected root suppliers: def-non-negative-and-positive-operator. These are premises only; the proposed QC statement remains local."
    ],
    "unresolved_obligations": [
      "Specify finite labels and allow zero projections.",
      "Keep probability consequences separate."
    ]
  },
  {
    "id": "thm-qc-finite-outcome-law-is-a-probability-kernel",
    "kind": "theorem",
    "page": "measurements-povms-and-instruments",
    "deps": [
      "def-qc-finite-outcome-probability-kernel",
      "thm-qc-povm-probabilities-normalize"
    ],
    "justified_by": [],
    "statement_or_definition": "The POVM law is a normalized probability kernel and is affine in ρ.",
    "proof_obligations": [
      "Prove nonnegative normalized coordinates and affinity.",
      "Finite discrete outcome measurability is immediate."
    ],
    "sources": [
      {
        "url": "https://cs.uwaterloo.ca/~watrous/TQI/TQI.pdf",
        "locator": "§2.3.1–2.3.3, PDF pp.108–131"
      },
      {
        "url": "https://arxiv.org/pdf/1907.09415",
        "locator": "§1.2.2, PDF pp.16–17; §15.1, pp.139–140"
      },
      {
        "url": "https://www.preskill.caltech.edu/ph219/chap3_15.pdf",
        "locator": "§§3.1–3.2, PDF pp.4–19; complete cross-read in qc_r2 ledger"
      }
    ],
    "title": "Finite Outcome Law Is A Probability Kernel",
    "existing_supplier_checks": [
      "Repository audit found no matching root supplier for this QC-specific contract; prove it locally."
    ],
    "unresolved_obligations": [
      "Prove nonnegative normalized coordinates and affinity.",
      "Finite discrete outcome measurability is immediate."
    ]
  },
  {
    "id": "thm-qc-instrument-conditional-state-is-density",
    "kind": "theorem",
    "page": "measurements-povms-and-instruments",
    "deps": [
      "def-qc-instrument-and-conditional-state",
      "thm-qc-instrument-outcome-law-normalizes"
    ],
    "justified_by": [],
    "statement_or_definition": "Every positive-probability instrument branch normalizes to a density state.",
    "proof_obligations": [
      "Prove branch output positive and divide by its positive trace.",
      "Check trace one."
    ],
    "sources": [
      {
        "url": "https://cs.uwaterloo.ca/~watrous/TQI/TQI.pdf",
        "locator": "§2.3.1–2.3.3, PDF pp.108–131"
      },
      {
        "url": "https://arxiv.org/pdf/1907.09415",
        "locator": "§1.2.2, PDF pp.16–17; §15.1, pp.139–140"
      },
      {
        "url": "https://www.preskill.caltech.edu/ph219/chap3_15.pdf",
        "locator": "§§3.1–3.2, PDF pp.4–19; complete cross-read in qc_r2 ledger"
      }
    ],
    "title": "Instrument Conditional State Is Density",
    "existing_supplier_checks": [
      "Repository audit found no matching root supplier for this QC-specific contract; prove it locally."
    ],
    "unresolved_obligations": [
      "Prove branch output positive and divide by its positive trace.",
      "Check trace one."
    ]
  },
  {
    "id": "thm-qc-instrument-outcome-law-normalizes",
    "kind": "theorem",
    "page": "measurements-povms-and-instruments",
    "deps": [
      "def-qc-instrument-and-conditional-state",
      "def-qc-density-operator"
    ],
    "justified_by": [],
    "statement_or_definition": "Instrument branch traces give a finite probability distribution on each density input.",
    "proof_obligations": [
      "Use positivity at ancilla dimension one for nonnegative traces.",
      "Sum trace-preservation equations and use trρ=1."
    ],
    "sources": [
      {
        "url": "https://cs.uwaterloo.ca/~watrous/TQI/TQI.pdf",
        "locator": "§2.3.1–2.3.3, PDF pp.108–131"
      },
      {
        "url": "https://arxiv.org/pdf/1907.09415",
        "locator": "§1.2.2, PDF pp.16–17; §15.1, pp.139–140"
      },
      {
        "url": "https://www.preskill.caltech.edu/ph219/chap3_15.pdf",
        "locator": "§§3.1–3.2, PDF pp.4–19; complete cross-read in qc_r2 ledger"
      }
    ],
    "title": "Instrument Outcome Law Normalizes",
    "existing_supplier_checks": [
      "Repository audit found no matching root supplier for this QC-specific contract; prove it locally."
    ],
    "unresolved_obligations": [
      "Use positivity at ancilla dimension one for nonnegative traces.",
      "Sum trace-preservation equations and use trρ=1."
    ]
  },
  {
    "id": "thm-qc-luders-instrument-of-a-povm-is-valid",
    "kind": "theorem",
    "page": "measurements-povms-and-instruments",
    "deps": [
      "def-qc-povm-and-outcome-law",
      "def-qc-instrument-and-conditional-state",
      "thm-non-negative-operator-characterisations",
      "thm-non-negative-square-root-exists-and-is-unique"
    ],
    "justified_by": [],
    "statement_or_definition": "Maps Ia(X)=Ea½ X Ea½ form an instrument for a finite POVM.",
    "proof_obligations": [
      "Every ancilla extension is conjugation by Ea½⊗I and is positive.",
      "Use cyclic trace and ΣEa=I for total trace preservation."
    ],
    "sources": [
      {
        "url": "https://cs.uwaterloo.ca/~watrous/TQI/TQI.pdf",
        "locator": "§2.3.1–2.3.3, PDF pp.108–131"
      },
      {
        "url": "https://arxiv.org/pdf/1907.09415",
        "locator": "§1.2.2, PDF pp.16–17; §15.1, pp.139–140"
      },
      {
        "url": "https://www.preskill.caltech.edu/ph219/chap3_15.pdf",
        "locator": "§§3.1–3.2, PDF pp.4–19; complete cross-read in qc_r2 ledger"
      }
    ],
    "title": "Luders Instrument Of A POVM Is Valid",
    "existing_supplier_checks": [
      "Reuses inspected root suppliers: thm-non-negative-operator-characterisations, thm-non-negative-square-root-exists-and-is-unique. These are premises only; the proposed QC statement remains local."
    ],
    "unresolved_obligations": [
      "Every ancilla extension is conjugation by Ea½⊗I and is positive.",
      "Use cyclic trace and ΣEa=I for total trace preservation."
    ]
  },
  {
    "id": "thm-qc-nonselective-instrument-output-is-density",
    "kind": "theorem",
    "page": "measurements-povms-and-instruments",
    "deps": [
      "def-qc-instrument-and-conditional-state",
      "thm-qc-instrument-outcome-law-normalizes"
    ],
    "justified_by": [],
    "statement_or_definition": "Summing unnormalized branch outputs yields a density; it is the probability-weighted sum of nonzero conditional states.",
    "proof_obligations": [
      "Sum positive outputs and use total trace preservation.",
      "Omit zero branches without changing the sum."
    ],
    "sources": [
      {
        "url": "https://cs.uwaterloo.ca/~watrous/TQI/TQI.pdf",
        "locator": "§2.3.1–2.3.3, PDF pp.108–131"
      },
      {
        "url": "https://arxiv.org/pdf/1907.09415",
        "locator": "§1.2.2, PDF pp.16–17; §15.1, pp.139–140"
      },
      {
        "url": "https://www.preskill.caltech.edu/ph219/chap3_15.pdf",
        "locator": "§§3.1–3.2, PDF pp.4–19; complete cross-read in qc_r2 ledger"
      }
    ],
    "title": "Nonselective Instrument Output Is Density",
    "existing_supplier_checks": [
      "Repository audit found no matching root supplier for this QC-specific contract; prove it locally."
    ],
    "unresolved_obligations": [
      "Sum positive outputs and use total trace preservation.",
      "Omit zero branches without changing the sum."
    ]
  },
  {
    "id": "thm-qc-povm-probabilities-normalize",
    "kind": "theorem",
    "page": "measurements-povms-and-instruments",
    "deps": [
      "def-qc-povm-and-outcome-law",
      "def-non-negative-and-positive-operator",
      "thm-non-negative-operator-characterisations",
      "thm-non-negative-square-root-exists-and-is-unique"
    ],
    "justified_by": [],
    "statement_or_definition": "For a density and finite POVM, pa≥0 and Σapa=1.",
    "proof_obligations": [
      "Write tr(ρEa)=tr(Ea½ρEa½)≥0.",
      "Use completeness and trace linearity for normalization."
    ],
    "sources": [
      {
        "url": "https://cs.uwaterloo.ca/~watrous/TQI/TQI.pdf",
        "locator": "§2.3.1–2.3.3, PDF pp.108–131"
      },
      {
        "url": "https://arxiv.org/pdf/1907.09415",
        "locator": "§1.2.2, PDF pp.16–17; §15.1, pp.139–140"
      },
      {
        "url": "https://www.preskill.caltech.edu/ph219/chap3_15.pdf",
        "locator": "§§3.1–3.2, PDF pp.4–19; complete cross-read in qc_r2 ledger"
      }
    ],
    "title": "POVM Probabilities Normalize",
    "existing_supplier_checks": [
      "Reuses inspected root suppliers: def-non-negative-and-positive-operator, thm-non-negative-operator-characterisations, thm-non-negative-square-root-exists-and-is-unique. These are premises only; the proposed QC statement remains local."
    ],
    "unresolved_obligations": [
      "Write tr(ρEa)=tr(Ea½ρEa½)≥0.",
      "Use completeness and trace linearity for normalization."
    ]
  },
  {
    "id": "thm-qc-projective-conditional-state",
    "kind": "theorem",
    "page": "measurements-povms-and-instruments",
    "deps": [
      "def-qc-projective-measurement",
      "thm-qc-projective-measurement-outcome-law",
      "def-qc-density-operator"
    ],
    "justified_by": [],
    "statement_or_definition": "For pa>0, PaρPa/pa is a density supported in ran(Pa); no normalized state is asserted when pa=0.",
    "proof_obligations": [
      "Prove positive quadratic form and trace pa via cyclicity and idempotence.",
      "Normalize only on nonzero branches."
    ],
    "sources": [
      {
        "url": "https://cs.uwaterloo.ca/~watrous/TQI/TQI.pdf",
        "locator": "§2.3.1–2.3.3, PDF pp.108–131"
      },
      {
        "url": "https://arxiv.org/pdf/1907.09415",
        "locator": "§1.2.2, PDF pp.16–17; §15.1, pp.139–140"
      },
      {
        "url": "https://www.preskill.caltech.edu/ph219/chap3_15.pdf",
        "locator": "§§3.1–3.2, PDF pp.4–19; complete cross-read in qc_r2 ledger"
      }
    ],
    "title": "Projective Conditional State",
    "existing_supplier_checks": [
      "Repository audit found no matching root supplier for this QC-specific contract; prove it locally."
    ],
    "unresolved_obligations": [
      "Prove positive quadratic form and trace pa via cyclicity and idempotence.",
      "Normalize only on nonzero branches."
    ]
  },
  {
    "id": "thm-qc-projective-measurement-outcome-law",
    "kind": "theorem",
    "page": "measurements-povms-and-instruments",
    "deps": [
      "def-qc-projective-measurement",
      "def-qc-density-operator",
      "def-trace-of-an-endomorphism"
    ],
    "justified_by": [],
    "statement_or_definition": "For density ρ, pa=tr(ρPa) are nonnegative and sum to one.",
    "proof_obligations": [
      "Rewrite tr(ρPa)=tr(PaρPa) and use positivity.",
      "Use ΣPa=I and trρ=1."
    ],
    "sources": [
      {
        "url": "https://cs.uwaterloo.ca/~watrous/TQI/TQI.pdf",
        "locator": "§2.3.1–2.3.3, PDF pp.108–131"
      },
      {
        "url": "https://arxiv.org/pdf/1907.09415",
        "locator": "§1.2.2, PDF pp.16–17; §15.1, pp.139–140"
      },
      {
        "url": "https://www.preskill.caltech.edu/ph219/chap3_15.pdf",
        "locator": "§§3.1–3.2, PDF pp.4–19; complete cross-read in qc_r2 ledger"
      }
    ],
    "title": "Projective Measurement Outcome Law",
    "existing_supplier_checks": [
      "Reuses inspected root suppliers: def-trace-of-an-endomorphism. These are premises only; the proposed QC statement remains local."
    ],
    "unresolved_obligations": [
      "Rewrite tr(ρPa)=tr(PaρPa) and use positivity.",
      "Use ΣPa=I and trρ=1."
    ]
  },
  {
    "id": "thm-qc-zero-probability-branch-has-no-conditioned-state",
    "kind": "theorem",
    "page": "measurements-povms-and-instruments",
    "deps": [
      "def-qc-instrument-and-conditional-state"
    ],
    "justified_by": [],
    "statement_or_definition": "A positive branch output of trace zero is zero; conditioning is undefined and marked ⊥.",
    "proof_obligations": [
      "Use positive spectral decomposition to prove zero trace forces zero operator.",
      "Explain no division by zero or arbitrary normalized branch."
    ],
    "sources": [
      {
        "url": "https://cs.uwaterloo.ca/~watrous/TQI/TQI.pdf",
        "locator": "§2.3.1–2.3.3, PDF pp.108–131"
      },
      {
        "url": "https://arxiv.org/pdf/1907.09415",
        "locator": "§1.2.2, PDF pp.16–17; §15.1, pp.139–140"
      },
      {
        "url": "https://www.preskill.caltech.edu/ph219/chap3_15.pdf",
        "locator": "§§3.1–3.2, PDF pp.4–19; complete cross-read in qc_r2 ledger"
      }
    ],
    "title": "Zero Probability Branch Has No Conditioned State",
    "existing_supplier_checks": [
      "Repository audit found no matching root supplier for this QC-specific contract; prove it locally."
    ],
    "unresolved_obligations": [
      "Use positive spectral decomposition to prove zero trace forces zero operator.",
      "Explain no division by zero or arbitrary normalized branch."
    ]
  },
  {
    "id": "def-qc-choi-matrix",
    "kind": "definition",
    "page": "channels-kraus-choi-and-stinespring-representations",
    "deps": [
      "def-linear-map",
      "def-qc-register-and-computational-basis",
      "def-qc-tensor-register-and-permutation"
    ],
    "justified_by": [],
    "statement_or_definition": "For fixed input basis, J(Φ)=Σij |i〉〈j|⊗Φ(|i〉〈j|), input factor first and output factor second.",
    "proof_obligations": [
      "Fix factor order and convert outer products to root convention.",
      "State basis dependence and finite matrix size."
    ],
    "sources": [
      {
        "url": "https://cs.uwaterloo.ca/~watrous/TQI/TQI.pdf",
        "locator": "§2.2.1–2.2.3, PDF pp.80–107"
      },
      {
        "url": "https://www.preskill.caltech.edu/ph219/chap3_15.pdf",
        "locator": "§§3.2–3.3, PDF pp.11–24; complete cross-read qc_r2 ledger"
      }
    ],
    "title": "Choi Matrix",
    "existing_supplier_checks": [
      "Reuses inspected root suppliers: def-linear-map. These are premises only; the proposed QC statement remains local."
    ],
    "unresolved_obligations": [
      "Fix factor order and convert outer products to root convention.",
      "State basis dependence and finite matrix size."
    ]
  },
  {
    "id": "def-qc-isometric-stinespring-representation",
    "kind": "definition",
    "page": "channels-kraus-choi-and-stinespring-representations",
    "deps": [
      "def-qc-tensor-register-and-permutation",
      "def-qc-partial-trace"
    ],
    "justified_by": [
      "thm-qc-isometry-partial-trace-is-channel"
    ],
    "statement_or_definition": "A Stinespring representation is Φ(X)=Tr_E(VXV†) for an isometry V:H→K⊗E.",
    "proof_obligations": [
      "Fix environment factor order and partial-trace convention.",
      "Separate the form's definition from universal existence."
    ],
    "sources": [
      {
        "url": "https://cs.uwaterloo.ca/~watrous/TQI/TQI.pdf",
        "locator": "§2.2.1–2.2.3, PDF pp.80–107"
      },
      {
        "url": "https://www.preskill.caltech.edu/ph219/chap3_15.pdf",
        "locator": "§§3.2–3.3, PDF pp.11–24; complete cross-read qc_r2 ledger"
      }
    ],
    "title": "Isometric Stinespring Representation",
    "existing_supplier_checks": [
      "Repository audit found no matching root supplier for this QC-specific contract; prove it locally."
    ],
    "unresolved_obligations": [
      "Fix environment factor order and partial-trace convention.",
      "Separate the form's definition from universal existence."
    ]
  },
  {
    "id": "def-qc-kraus-representation",
    "kind": "definition",
    "page": "channels-kraus-choi-and-stinespring-representations",
    "deps": [
      "def-linear-map",
      "def-qc-dirac-notation-conversion"
    ],
    "justified_by": [],
    "statement_or_definition": "A finite Kraus representation is Φ(X)=Σa KaXKa† for rectangular Ka.",
    "proof_obligations": [
      "Specify the domain of X and rectangular adjoints.",
      "Allow zero maps consistently and keep CP proof separate."
    ],
    "sources": [
      {
        "url": "https://cs.uwaterloo.ca/~watrous/TQI/TQI.pdf",
        "locator": "§2.2.1–2.2.3, PDF pp.80–107"
      },
      {
        "url": "https://www.preskill.caltech.edu/ph219/chap3_15.pdf",
        "locator": "§§3.2–3.3, PDF pp.11–24; complete cross-read qc_r2 ledger"
      }
    ],
    "title": "Kraus Representation",
    "existing_supplier_checks": [
      "Reuses inspected root suppliers: def-linear-map. These are premises only; the proposed QC statement remains local."
    ],
    "unresolved_obligations": [
      "Specify the domain of X and rectangular adjoints.",
      "Allow zero maps consistently and keep CP proof separate."
    ]
  },
  {
    "id": "def-qc-quantum-channel",
    "kind": "definition",
    "page": "channels-kraus-choi-and-stinespring-representations",
    "deps": [
      "def-qc-completely-positive-map",
      "def-trace-of-an-endomorphism"
    ],
    "justified_by": [],
    "statement_or_definition": "A finite-dimensional channel is a complex-linear, completely positive, trace-preserving map between matrix spaces.",
    "proof_obligations": [
      "Specify input/output spaces and trace preservation on all operators.",
      "State that no physical realization is assumed."
    ],
    "sources": [
      {
        "url": "https://cs.uwaterloo.ca/~watrous/TQI/TQI.pdf",
        "locator": "§2.2.1–2.2.3, PDF pp.80–107"
      },
      {
        "url": "https://www.preskill.caltech.edu/ph219/chap3_15.pdf",
        "locator": "§§3.2–3.3, PDF pp.11–24; complete cross-read qc_r2 ledger"
      }
    ],
    "title": "Quantum Channel",
    "existing_supplier_checks": [
      "Reuses inspected root suppliers: def-trace-of-an-endomorphism. These are premises only; the proposed QC statement remains local."
    ],
    "unresolved_obligations": [
      "Specify input/output spaces and trace preservation on all operators.",
      "State that no physical realization is assumed."
    ]
  },
  {
    "id": "lem-qc-complete-positivity-implies-choi-positivity",
    "kind": "lemma",
    "page": "channels-kraus-choi-and-stinespring-representations",
    "deps": [
      "def-qc-completely-positive-map",
      "def-qc-choi-matrix",
      "def-qc-register-and-computational-basis"
    ],
    "justified_by": [],
    "statement_or_definition": "Complete positivity implies J(Φ)≥0.",
    "proof_obligations": [
      "Write J=(id⊗Φ)(|Ω〉〈Ω|) for Ω=Σi|i〉⊗|i〉.",
      "Use the defining ancilla positivity and root outer-product conversion."
    ],
    "sources": [
      {
        "url": "https://cs.uwaterloo.ca/~watrous/TQI/TQI.pdf",
        "locator": "§2.2.1–2.2.3, PDF pp.80–107"
      },
      {
        "url": "https://www.preskill.caltech.edu/ph219/chap3_15.pdf",
        "locator": "§§3.2–3.3, PDF pp.11–24; complete cross-read qc_r2 ledger"
      }
    ],
    "title": "Complete Positivity Implies Choi Positivity",
    "existing_supplier_checks": [
      "Repository audit found no matching root supplier for this QC-specific contract; prove it locally."
    ],
    "unresolved_obligations": [
      "Write J=(id⊗Φ)(|Ω〉〈Ω|) for Ω=Σi|i〉⊗|i〉.",
      "Use the defining ancilla positivity and root outer-product conversion."
    ]
  },
  {
    "id": "lem-qc-positive-choi-matrix-yields-kraus-operators",
    "kind": "lemma",
    "page": "channels-kraus-choi-and-stinespring-representations",
    "deps": [
      "def-qc-choi-matrix",
      "def-qc-kraus-representation",
      "thm-non-negative-operator-characterisations",
      "thm-non-negative-square-root-exists-and-is-unique"
    ],
    "justified_by": [],
    "statement_or_definition": "A positive Choi matrix yields a finite Kraus family by spectral decomposition and reshaping eigenvectors.",
    "proof_obligations": [
      "Diagonalize J=Σa|va〉〈va| and vectorize each va into a rectangular Ka under the fixed convention.",
      "Check entrywise on matrix units that Φ(X)=ΣaKaXKa†."
    ],
    "sources": [
      {
        "url": "https://cs.uwaterloo.ca/~watrous/TQI/TQI.pdf",
        "locator": "§2.2.1–2.2.3, PDF pp.80–107"
      },
      {
        "url": "https://www.preskill.caltech.edu/ph219/chap3_15.pdf",
        "locator": "§§3.2–3.3, PDF pp.11–24; complete cross-read qc_r2 ledger"
      }
    ],
    "title": "Positive Choi Matrix Yields Kraus Operators",
    "existing_supplier_checks": [
      "Reuses inspected root suppliers: thm-non-negative-operator-characterisations, thm-non-negative-square-root-exists-and-is-unique. These are premises only; the proposed QC statement remains local."
    ],
    "unresolved_obligations": [
      "Diagonalize J=Σa|va〉〈va| and vectorize each va into a rectangular Ka under the fixed convention.",
      "Check entrywise on matrix units that Φ(X)=ΣaKaXKa†."
    ]
  },
  {
    "id": "thm-qc-channels-compose-and-tensor",
    "kind": "theorem",
    "page": "channels-kraus-choi-and-stinespring-representations",
    "deps": [
      "def-qc-quantum-channel",
      "def-qc-completely-positive-map",
      "thm-qc-partial-trace-positive-and-trace-preserving"
    ],
    "justified_by": [],
    "statement_or_definition": "Finite-dimensional channel composition and tensor product are channels.",
    "proof_obligations": [
      "Check complete positivity under ampliation, composition and tensoring.",
      "Check trace preservation using adjoint/Kraus completeness and product trace."
    ],
    "sources": [
      {
        "url": "https://cs.uwaterloo.ca/~watrous/TQI/TQI.pdf",
        "locator": "§2.2.1–2.2.3, PDF pp.80–107"
      },
      {
        "url": "https://www.preskill.caltech.edu/ph219/chap3_15.pdf",
        "locator": "§§3.2–3.3, PDF pp.11–24; complete cross-read qc_r2 ledger"
      }
    ],
    "title": "Channels Compose And Tensor",
    "existing_supplier_checks": [
      "Repository audit found no matching root supplier for this QC-specific contract; prove it locally."
    ],
    "unresolved_obligations": [
      "Check complete positivity under ampliation, composition and tensoring.",
      "Check trace preservation using adjoint/Kraus completeness and product trace."
    ]
  },
  {
    "id": "thm-qc-choi-trace-preservation-condition",
    "kind": "theorem",
    "page": "channels-kraus-choi-and-stinespring-representations",
    "deps": [
      "def-qc-choi-matrix",
      "thm-qc-trace-preserving-kraus-normalization",
      "thm-qc-partial-trace-characterization-and-basis-independence",
      "thm-qc-kraus-choi-equivalence",
      "def-trace-of-an-endomorphism",
      "thm-trace-of-ab-equals-trace-of-ba"
    ],
    "justified_by": [],
    "statement_or_definition": "A CP map is TP iff Tr_output J(Φ)=I_input.",
    "proof_obligations": [
      "Compute output partial trace in the fixed matrix-unit basis.",
      "Use entrywise equality and the Kraus TP condition."
    ],
    "sources": [
      {
        "url": "https://cs.uwaterloo.ca/~watrous/TQI/TQI.pdf",
        "locator": "§2.2.1–2.2.3, PDF pp.80–107"
      },
      {
        "url": "https://www.preskill.caltech.edu/ph219/chap3_15.pdf",
        "locator": "§§3.2–3.3, PDF pp.11–24; complete cross-read qc_r2 ledger"
      }
    ],
    "title": "Choi Trace Preservation Condition",
    "existing_supplier_checks": [
      "Reuses inspected root suppliers: def-trace-of-an-endomorphism, thm-trace-of-ab-equals-trace-of-ba. These are premises only; the proposed QC statement remains local."
    ],
    "unresolved_obligations": [
      "Compute output partial trace in the fixed matrix-unit basis.",
      "Use entrywise equality and the Kraus TP condition."
    ]
  },
  {
    "id": "thm-qc-finite-kraus-choi-stinespring-equivalence",
    "kind": "theorem",
    "page": "channels-kraus-choi-and-stinespring-representations",
    "deps": [
      "thm-qc-kraus-choi-equivalence",
      "thm-qc-trace-preserving-kraus-normalization",
      "thm-qc-choi-trace-preservation-condition",
      "thm-qc-finite-stinespring-dilation",
      "thm-qc-isometry-partial-trace-is-channel"
    ],
    "justified_by": [],
    "statement_or_definition": "CPTP is equivalent to positive Choi with its TP partial-trace condition, a finite Kraus sum with ΣKa†Ka=I, and an isometric Stinespring dilation followed by partial trace.",
    "proof_obligations": [
      "Assemble only the preceding proved implications and state all factor/environment order conventions.",
      "Audit every direction for cycle-free dependencies."
    ],
    "sources": [
      {
        "url": "https://cs.uwaterloo.ca/~watrous/TQI/TQI.pdf",
        "locator": "§2.2.1–2.2.3, PDF pp.80–107"
      },
      {
        "url": "https://www.preskill.caltech.edu/ph219/chap3_15.pdf",
        "locator": "§§3.2–3.3, PDF pp.11–24; complete cross-read qc_r2 ledger"
      }
    ],
    "title": "Finite Kraus Choi Stinespring Equivalence",
    "existing_supplier_checks": [
      "Repository audit found no matching root supplier for this QC-specific contract; prove it locally."
    ],
    "unresolved_obligations": [
      "Assemble only the preceding proved implications and state all factor/environment order conventions.",
      "Audit every direction for cycle-free dependencies."
    ]
  },
  {
    "id": "thm-qc-finite-stinespring-dilation",
    "kind": "theorem",
    "page": "channels-kraus-choi-and-stinespring-representations",
    "deps": [
      "def-qc-quantum-channel",
      "thm-qc-kraus-choi-equivalence",
      "thm-qc-trace-preserving-kraus-normalization",
      "def-qc-isometric-stinespring-representation"
    ],
    "justified_by": [],
    "statement_or_definition": "Every finite channel has an isometric Stinespring representation with finite environment dimension at most the number of chosen Kraus operators.",
    "proof_obligations": [
      "Set Vx=ΣaKax⊗|a〉 and prove V†V=I from Kraus normalization.",
      "Compute partial trace entrywise and recover the channel on matrix units."
    ],
    "sources": [
      {
        "url": "https://cs.uwaterloo.ca/~watrous/TQI/TQI.pdf",
        "locator": "§2.2.1–2.2.3, PDF pp.80–107"
      },
      {
        "url": "https://www.preskill.caltech.edu/ph219/chap3_15.pdf",
        "locator": "§§3.2–3.3, PDF pp.11–24; complete cross-read qc_r2 ledger"
      }
    ],
    "title": "Finite Stinespring Dilation",
    "existing_supplier_checks": [
      "Repository audit found no matching root supplier for this QC-specific contract; prove it locally."
    ],
    "unresolved_obligations": [
      "Set Vx=ΣaKax⊗|a〉 and prove V†V=I from Kraus normalization.",
      "Compute partial trace entrywise and recover the channel on matrix units."
    ]
  },
  {
    "id": "thm-qc-isometry-partial-trace-is-channel",
    "kind": "theorem",
    "page": "channels-kraus-choi-and-stinespring-representations",
    "deps": [
      "def-qc-isometric-stinespring-representation",
      "thm-qc-partial-trace-positive-and-trace-preserving"
    ],
    "justified_by": [],
    "statement_or_definition": "An isometry followed by partial trace is CPTP.",
    "proof_obligations": [
      "Show all ancilla amplifications of partial trace are positive via its finite Kraus formula.",
      "Use V†V=I and trace preservation of partial trace."
    ],
    "sources": [
      {
        "url": "https://cs.uwaterloo.ca/~watrous/TQI/TQI.pdf",
        "locator": "§2.2.1–2.2.3, PDF pp.80–107"
      },
      {
        "url": "https://www.preskill.caltech.edu/ph219/chap3_15.pdf",
        "locator": "§§3.2–3.3, PDF pp.11–24; complete cross-read qc_r2 ledger"
      }
    ],
    "title": "Isometry Partial Trace Is Channel",
    "existing_supplier_checks": [
      "Repository audit found no matching root supplier for this QC-specific contract; prove it locally."
    ],
    "unresolved_obligations": [
      "Show all ancilla amplifications of partial trace are positive via its finite Kraus formula.",
      "Use V†V=I and trace preservation of partial trace."
    ]
  },
  {
    "id": "thm-qc-kraus-choi-equivalence",
    "kind": "theorem",
    "page": "channels-kraus-choi-and-stinespring-representations",
    "deps": [
      "def-qc-completely-positive-map",
      "def-qc-choi-matrix",
      "def-qc-kraus-representation",
      "lem-qc-complete-positivity-implies-choi-positivity",
      "lem-qc-positive-choi-matrix-yields-kraus-operators",
      "thm-qc-kraus-map-completely-positive"
    ],
    "justified_by": [],
    "statement_or_definition": "A finite-dimensional linear map is CP iff its Choi matrix is positive iff it has a finite Kraus representation.",
    "proof_obligations": [
      "Assemble CP→positive Choi→Kraus and Kraus→CP from separate proved lemmas.",
      "Audit vectorization orientation and dimensions in each implication."
    ],
    "sources": [
      {
        "url": "https://cs.uwaterloo.ca/~watrous/TQI/TQI.pdf",
        "locator": "§2.2.1–2.2.3, PDF pp.80–107"
      },
      {
        "url": "https://www.preskill.caltech.edu/ph219/chap3_15.pdf",
        "locator": "§§3.2–3.3, PDF pp.11–24; complete cross-read qc_r2 ledger"
      }
    ],
    "title": "Kraus Choi Equivalence",
    "existing_supplier_checks": [
      "Repository audit found no matching root supplier for this QC-specific contract; prove it locally."
    ],
    "unresolved_obligations": [
      "Assemble CP→positive Choi→Kraus and Kraus→CP from separate proved lemmas.",
      "Audit vectorization orientation and dimensions in each implication."
    ]
  },
  {
    "id": "thm-qc-kraus-map-completely-positive",
    "kind": "theorem",
    "page": "channels-kraus-choi-and-stinespring-representations",
    "deps": [
      "def-qc-kraus-representation",
      "def-qc-completely-positive-map"
    ],
    "justified_by": [],
    "statement_or_definition": "Every finite Kraus sum is completely positive.",
    "proof_obligations": [
      "For arbitrary ancilla r, write its ampliation as Σa(Ka⊗I)X(Ka†⊗I).",
      "Show each conjugation preserves positivity."
    ],
    "sources": [
      {
        "url": "https://cs.uwaterloo.ca/~watrous/TQI/TQI.pdf",
        "locator": "§2.2.1–2.2.3, PDF pp.80–107"
      },
      {
        "url": "https://www.preskill.caltech.edu/ph219/chap3_15.pdf",
        "locator": "§§3.2–3.3, PDF pp.11–24; complete cross-read qc_r2 ledger"
      }
    ],
    "title": "Kraus Map Completely Positive",
    "existing_supplier_checks": [
      "Repository audit found no matching root supplier for this QC-specific contract; prove it locally."
    ],
    "unresolved_obligations": [
      "For arbitrary ancilla r, write its ampliation as Σa(Ka⊗I)X(Ka†⊗I).",
      "Show each conjugation preserves positivity."
    ]
  },
  {
    "id": "thm-qc-trace-preserving-kraus-normalization",
    "kind": "theorem",
    "page": "channels-kraus-choi-and-stinespring-representations",
    "deps": [
      "def-qc-kraus-representation",
      "def-qc-quantum-channel",
      "def-trace-of-an-endomorphism",
      "thm-trace-of-ab-equals-trace-of-ba",
      "thm-matrix-of-the-adjoint-is-the-conjugate-transpose"
    ],
    "justified_by": [],
    "statement_or_definition": "A Kraus map is trace preserving iff Σa Ka†Ka=I.",
    "proof_obligations": [
      "Expand trace of the Kraus sum and cycle rectangular products.",
      "Use nondegenerate trace pairing for the converse on all X."
    ],
    "sources": [
      {
        "url": "https://cs.uwaterloo.ca/~watrous/TQI/TQI.pdf",
        "locator": "§2.2.1–2.2.3, PDF pp.80–107"
      },
      {
        "url": "https://www.preskill.caltech.edu/ph219/chap3_15.pdf",
        "locator": "§§3.2–3.3, PDF pp.11–24; complete cross-read qc_r2 ledger"
      }
    ],
    "title": "Trace Preserving Kraus Normalization",
    "existing_supplier_checks": [
      "Reuses inspected root suppliers: def-trace-of-an-endomorphism, thm-trace-of-ab-equals-trace-of-ba, thm-matrix-of-the-adjoint-is-the-conjugate-transpose. These are premises only; the proposed QC statement remains local."
    ],
    "unresolved_obligations": [
      "Expand trace of the Kraus sum and cycle rectangular products.",
      "Use nondegenerate trace pairing for the converse on all X."
    ]
  },
  {
    "id": "def-qc-broadcasting-family",
    "kind": "definition",
    "page": "trace-distance-fidelity-and-information-limits",
    "deps": [
      "def-qc-quantum-channel",
      "def-qc-partial-trace",
      "def-qc-density-operator"
    ],
    "justified_by": [],
    "statement_or_definition": "A possibly infinite family S⊆D(H) is broadcast by one channel B:L(H)→L(H⊗H) iff both marginals of B(ρ) equal ρ for every ρ∈S.",
    "proof_obligations": [
      "Specify one common CPTP map and both marginal identities.",
      "Keep broadcasting distinct from product cloning."
    ],
    "sources": [
      {
        "url": "https://arxiv.org/pdf/quant-ph/9511010",
        "locator": "Complete paper, PDF pp.2–10; pair statement/construction p.3, fidelity and invertible-state proof Eqs.(4)–(31), pp.4–10"
      }
    ],
    "title": "Broadcasting Family",
    "existing_supplier_checks": [
      "Repository audit found no matching root supplier for this QC-specific contract; prove it locally."
    ],
    "unresolved_obligations": [
      "Specify one common CPTP map and both marginal identities.",
      "Keep broadcasting distinct from product cloning."
    ]
  },
  {
    "id": "def-qc-diamond-norm",
    "kind": "definition",
    "page": "trace-distance-fidelity-and-information-limits",
    "deps": [
      "def-qc-trace-norm",
      "def-qc-completely-positive-map"
    ],
    "justified_by": [
      "thm-qc-diamond-norm-ancilla-dimension-bound"
    ],
    "statement_or_definition": "Define raw diamond norm ||Φ||⋄=sup_r||Φ⊗id_Cr||1→1, Watrous's completely bounded trace norm, with no factor ½.",
    "proof_obligations": [
      "Specify induced trace-norm ratio and all finite ancillary dimensions.",
      "Keep half-diamond distance as a separate convention."
    ],
    "sources": [
      {
        "url": "https://cs.uwaterloo.ca/~watrous/TQI/TQI.pdf",
        "locator": "§3.3.2–3.3.4, PDF pp.174–204; Def.3.43, Prop.3.44, Thm.3.46, Prop.3.48, Thm.3.49"
      }
    ],
    "title": "Diamond Norm",
    "existing_supplier_checks": [
      "Repository audit found no matching root supplier for this QC-specific contract; prove it locally."
    ],
    "unresolved_obligations": [
      "Specify induced trace-norm ratio and all finite ancillary dimensions.",
      "Keep half-diamond distance as a separate convention."
    ]
  },
  {
    "id": "def-qc-fidelity",
    "kind": "definition",
    "page": "trace-distance-fidelity-and-information-limits",
    "deps": [
      "def-non-negative-and-positive-operator",
      "thm-non-negative-operator-characterisations",
      "thm-non-negative-square-root-exists-and-is-unique",
      "def-qc-trace-norm"
    ],
    "justified_by": [],
    "statement_or_definition": "Use root fidelity F(ρ,σ)=||√ρ√σ||1=tr√(√ρσ√ρ), not its square.",
    "proof_obligations": [
      "Prove equivalent formulas through singular values.",
      "State squared fidelity convention f=F² and translate source results."
    ],
    "sources": [
      {
        "url": "https://cs.uwaterloo.ca/~watrous/TQI/TQI.pdf",
        "locator": "§3.2.1–3.2.3, PDF pp.147–171"
      },
      {
        "url": "https://www.preskill.caltech.edu/ph219/chap2_15.pdf",
        "locator": "§2.6.1–2, PDF pp.36–40; complete cross-read qc_r2 ledger, summary/corroboration only"
      }
    ],
    "title": "Fidelity",
    "existing_supplier_checks": [
      "Reuses inspected root suppliers: def-non-negative-and-positive-operator, thm-non-negative-operator-characterisations, thm-non-negative-square-root-exists-and-is-unique. These are premises only; the proposed QC statement remains local."
    ],
    "unresolved_obligations": [
      "Prove equivalent formulas through singular values.",
      "State squared fidelity convention f=F² and translate source results."
    ]
  },
  {
    "id": "def-qc-symmetric-subspace-projector",
    "kind": "definition",
    "page": "trace-distance-fidelity-and-information-limits",
    "deps": [
      "def-qc-tensor-register-and-permutation"
    ],
    "justified_by": [
      "thm-qc-symmetric-subspace-dimension-and-haar-moment"
    ],
    "statement_or_definition": "For k≥1 define Πsym,k=(1/k!)Σπ∈Sk Uπ on H⊗k; its range is the permutation-invariant symmetric subspace.",
    "proof_obligations": [
      "Show averaging is self-adjoint and idempotent using group multiplication and inverse.",
      "State k=0 and dimension-one conventions."
    ],
    "sources": [
      {
        "url": "https://cs.uwaterloo.ca/~watrous/TQI/TQI.pdf",
        "locator": "§7.2 and proof of Thm.7.28, PDF pp.423–434"
      }
    ],
    "title": "Symmetric Subspace Projector",
    "existing_supplier_checks": [
      "Repository audit found no matching root supplier for this QC-specific contract; prove it locally."
    ],
    "unresolved_obligations": [
      "Show averaging is self-adjoint and idempotent using group multiplication and inverse.",
      "State k=0 and dimension-one conventions."
    ]
  },
  {
    "id": "def-qc-trace-distance",
    "kind": "definition",
    "page": "trace-distance-fidelity-and-information-limits",
    "deps": [
      "def-qc-trace-norm",
      "def-qc-density-operator"
    ],
    "justified_by": [],
    "statement_or_definition": "For finite density states define D(ρ,σ)=½||ρ−σ||1.",
    "proof_obligations": [
      "State the one-half normalization and finite-dimensional domain.",
      "Distinguish from the raw diamond norm."
    ],
    "sources": [
      {
        "url": "https://cs.uwaterloo.ca/~watrous/TQI/TQI.pdf",
        "locator": "§3.1.1–3.1.2, PDF pp.133–146"
      },
      {
        "url": "https://arxiv.org/pdf/1907.09415",
        "locator": "Ch.1 Exercise 12, PDF pp.23–24; Appendix C hint p.215"
      }
    ],
    "title": "Trace Distance",
    "existing_supplier_checks": [
      "Repository audit found no matching root supplier for this QC-specific contract; prove it locally."
    ],
    "unresolved_obligations": [
      "State the one-half normalization and finite-dimensional domain.",
      "Distinguish from the raw diamond norm."
    ]
  },
  {
    "id": "lem-qc-faithful-state-dominates-positive-operator",
    "kind": "lemma",
    "page": "trace-distance-fidelity-and-information-limits",
    "deps": [
      "def-qc-density-operator",
      "def-non-negative-and-positive-operator",
      "thm-non-negative-operator-characterisations",
      "thm-non-negative-square-root-exists-and-is-unique"
    ],
    "justified_by": [],
    "statement_or_definition": "If σ is faithful on finite S, each X≥0 on S has a finite c with X≤cσ.",
    "proof_obligations": [
      "Take c≥||X||∞/λmin(σ) and verify by quadratic forms.",
      "State finite-dimensional spectral compactness and σ support."
    ],
    "sources": [
      {
        "url": "https://arxiv.org/pdf/quant-ph/9511010",
        "locator": "Complete paper, PDF pp.2–10; pair statement/construction p.3, fidelity and invertible-state proof Eqs.(4)–(31), pp.4–10"
      }
    ],
    "title": "Faithful State Dominates Positive Operator",
    "existing_supplier_checks": [
      "Reuses inspected root suppliers: def-non-negative-and-positive-operator, thm-non-negative-operator-characterisations, thm-non-negative-square-root-exists-and-is-unique. These are premises only; the proposed QC statement remains local."
    ],
    "unresolved_obligations": [
      "Take c≥||X||∞/λmin(σ) and verify by quadratic forms.",
      "State finite-dimensional spectral compactness and σ support."
    ]
  },
  {
    "id": "lem-qc-optimal-cloner-attains-bound",
    "kind": "lemma",
    "page": "trace-distance-fidelity-and-information-limits",
    "deps": [
      "def-qc-symmetric-subspace-projector",
      "thm-qc-symmetric-subspace-dimension-and-haar-moment",
      "thm-qc-kraus-map-completely-positive",
      "def-trace-of-an-endomorphism",
      "thm-trace-of-ab-equals-trace-of-ba"
    ],
    "justified_by": [],
    "statement_or_definition": "The map Φ(X)=(Nn/Nm)Πsym,m(X⊗I⊗(m−n))Πsym,m + tr((I−Πsym,n)X)σ, for fixed output density σ, is CPTP and has overlap Nn/Nm on every |u〉⊗n.",
    "proof_obligations": [
      "Prove complete positivity of the compressed embedding and measure-and-prepare complement term.",
      "Use (id⊗Tr⊗(m−n))(Πsym,m)=(Nm/Nn)Πsym,n to prove trace preservation.",
      "Compute the target overlap directly and verify it is constant in u."
    ],
    "sources": [
      {
        "url": "https://cs.uwaterloo.ca/~watrous/TQI/TQI.pdf",
        "locator": "Eq.(7.231)–(7.233), PDF p.434"
      }
    ],
    "title": "Optimal Cloner Attains Bound",
    "existing_supplier_checks": [
      "Reuses inspected root suppliers: def-trace-of-an-endomorphism, thm-trace-of-ab-equals-trace-of-ba. These are premises only; the proposed QC statement remains local."
    ],
    "unresolved_obligations": [
      "Prove complete positivity of the compressed embedding and measure-and-prepare complement term.",
      "Use (id⊗Tr⊗(m−n))(Πsym,m)=(Nm/Nn)Πsym,n to prove trace preservation.",
      "Compute the target overlap directly and verify it is constant in u."
    ]
  },
  {
    "id": "lem-qc-optimal-cloning-worst-case-upper-bound",
    "kind": "lemma",
    "page": "trace-distance-fidelity-and-information-limits",
    "deps": [
      "def-qc-symmetric-subspace-projector",
      "thm-qc-symmetric-subspace-dimension-and-haar-moment",
      "def-qc-quantum-channel",
      "def-qc-fidelity"
    ],
    "justified_by": [],
    "statement_or_definition": "Every n→m channel on d-dimensional identical registers has worst-case squared pure-state fidelity ≤Nn/Nm.",
    "proof_obligations": [
      "Average the pointwise overlap over the sphere and replace |u〉〈u|⊗n by Πsym,n using CP order preservation.",
      "Apply the Haar moment at m; use 0≤Πsym,m≤I and trace preservation to bound tr(Φ(Πsym,n)Πsym,m)≤tr(Φ(Πsym,n))=tr(Πsym,n)=Nn, yielding Nn/Nm."
    ],
    "sources": [
      {
        "url": "https://cs.uwaterloo.ca/~watrous/TQI/TQI.pdf",
        "locator": "Thm.7.28 proof, PDF pp.433–434"
      }
    ],
    "title": "Optimal Cloning Worst Case Upper Bound",
    "existing_supplier_checks": [
      "Repository audit found no matching root supplier for this QC-specific contract; prove it locally."
    ],
    "unresolved_obligations": [
      "Average the pointwise overlap over the sphere and replace |u〉〈u|⊗n by Πsym,n using CP order preservation.",
      "Apply the Haar moment at m; use 0≤Πsym,m≤I and trace preservation to bound tr(Φ(Πsym,n)Πsym,m)≤tr(Φ(Πsym,n))=tr(Πsym,n)=Nn, yielding Nn/Nm."
    ]
  },
  {
    "id": "lem-qc-positive-marginals-imply-joint-support",
    "kind": "lemma",
    "page": "trace-distance-fidelity-and-information-limits",
    "deps": [
      "def-qc-partial-trace",
      "def-non-negative-and-positive-operator"
    ],
    "justified_by": [],
    "statement_or_definition": "If Y≥0 on H⊗H and both marginals are supported on S, then suppY⊆S⊗S.",
    "proof_obligations": [
      "Use zero trace against (I−PS)⊗I and positivity to infer that projection annihilates Y½; repeat on second factor.",
      "Conclude Y=(PS⊗PS)Y(PS⊗PS)."
    ],
    "sources": [
      {
        "url": "https://arxiv.org/pdf/quant-ph/9511010",
        "locator": "Complete paper, PDF pp.2–10; pair statement/construction p.3, fidelity and invertible-state proof Eqs.(4)–(31), pp.4–10"
      }
    ],
    "title": "Positive Marginals Imply Joint Support",
    "existing_supplier_checks": [
      "Reuses inspected root suppliers: def-non-negative-and-positive-operator. These are premises only; the proposed QC statement remains local."
    ],
    "unresolved_obligations": [
      "Use zero trace against (I−PS)⊗I and positivity to infer that projection annihilates Y½; repeat on second factor.",
      "Conclude Y=(PS⊗PS)Y(PS⊗PS)."
    ]
  },
  {
    "id": "lem-qc-symmetric-power-irreducible",
    "kind": "lemma",
    "page": "trace-distance-fidelity-and-information-limits",
    "deps": [
      "def-qc-symmetric-subspace-projector",
      "thm-qc-unitary-group-compact"
    ],
    "justified_by": [],
    "statement_or_definition": "The natural U(d) action on Sym^k(C^d) is irreducible.",
    "proof_obligations": [
      "Decompose into torus weight monomials and show each weight space is one-dimensional.",
      "Differentiate two-coordinate unitary rotations to connect adjacent monomial weights; conclude any nonzero invariant subspace contains every weight vector."
    ],
    "sources": [
      {
        "url": "https://cs.uwaterloo.ca/~watrous/TQI/TQI.pdf",
        "locator": "§7.2 proof of Thm.7.28, PDF pp.423–434"
      }
    ],
    "title": "Symmetric Power Irreducible",
    "existing_supplier_checks": [
      "Repository audit found no matching root supplier for this QC-specific contract; prove it locally."
    ],
    "unresolved_obligations": [
      "Decompose into torus weight monomials and show each weight space is one-dimensional.",
      "Differentiate two-coordinate unitary rotations to connect adjacent monomial weights; conclude any nonzero invariant subspace contains every weight vector."
    ]
  },
  {
    "id": "thm-qc-channel-composition-hybrid-bound",
    "kind": "theorem",
    "page": "trace-distance-fidelity-and-information-limits",
    "deps": [
      "def-qc-diamond-norm",
      "def-qc-quantum-channel",
      "thm-qc-channel-diamond-norm-one"
    ],
    "justified_by": [],
    "statement_or_definition": "For matching finite channel spaces, ||Ψ1∘Ψ0−Φ1∘Φ0||⋄≤||Ψ0−Φ0||⋄+||Ψ1−Φ1||⋄.",
    "proof_obligations": [
      "Insert an intermediate composition, apply triangle inequality and submultiplicativity.",
      "Use channel norm one and state all four domain/codomain conditions."
    ],
    "sources": [
      {
        "url": "https://cs.uwaterloo.ca/~watrous/TQI/TQI.pdf",
        "locator": "§3.3.2–3.3.4, PDF pp.174–204; Def.3.43, Prop.3.44, Thm.3.46, Prop.3.48, Thm.3.49"
      }
    ],
    "title": "Channel Composition Hybrid Bound",
    "existing_supplier_checks": [
      "Repository audit found no matching root supplier for this QC-specific contract; prove it locally."
    ],
    "unresolved_obligations": [
      "Insert an intermediate composition, apply triangle inequality and submultiplicativity.",
      "Use channel norm one and state all four domain/codomain conditions."
    ]
  },
  {
    "id": "thm-qc-channel-diamond-norm-one",
    "kind": "theorem",
    "page": "trace-distance-fidelity-and-information-limits",
    "deps": [
      "def-qc-diamond-norm",
      "def-qc-quantum-channel",
      "thm-qc-diamond-norm-ancilla-dimension-bound"
    ],
    "justified_by": [],
    "statement_or_definition": "Every finite-dimensional channel has diamond norm one.",
    "proof_obligations": [
      "Show all ancilla extensions contract the trace norm on arbitrary inputs using CP/TP structure and polar decomposition.",
      "Use a density input for the lower bound."
    ],
    "sources": [
      {
        "url": "https://cs.uwaterloo.ca/~watrous/TQI/TQI.pdf",
        "locator": "§3.3.2–3.3.4, PDF pp.174–204; Def.3.43, Prop.3.44, Thm.3.46, Prop.3.48, Thm.3.49"
      }
    ],
    "title": "Channel Diamond Norm One",
    "existing_supplier_checks": [
      "Repository audit found no matching root supplier for this QC-specific contract; prove it locally."
    ],
    "unresolved_obligations": [
      "Show all ancilla extensions contract the trace norm on arbitrary inputs using CP/TP structure and polar decomposition.",
      "Use a density input for the lower bound."
    ]
  },
  {
    "id": "thm-qc-channel-tensor-error-bound",
    "kind": "theorem",
    "page": "trace-distance-fidelity-and-information-limits",
    "deps": [
      "def-qc-diamond-norm",
      "def-qc-quantum-channel",
      "thm-qc-channel-composition-hybrid-bound"
    ],
    "justified_by": [],
    "statement_or_definition": "Diamond norm is multiplicative for tensor products; replacing finite channel factors sequentially bounds product error by the sum of factor errors.",
    "proof_obligations": [
      "Prove tensor multiplicativity under finite ancilla cap.",
      "Apply telescoping hybrid expansion and channel norm one."
    ],
    "sources": [
      {
        "url": "https://cs.uwaterloo.ca/~watrous/TQI/TQI.pdf",
        "locator": "§3.3.2–3.3.4, PDF pp.174–204; Def.3.43, Prop.3.44, Thm.3.46, Prop.3.48, Thm.3.49"
      }
    ],
    "title": "Channel Tensor Error Bound",
    "existing_supplier_checks": [
      "Repository audit found no matching root supplier for this QC-specific contract; prove it locally."
    ],
    "unresolved_obligations": [
      "Prove tensor multiplicativity under finite ancilla cap.",
      "Apply telescoping hybrid expansion and channel norm one."
    ]
  },
  {
    "id": "thm-qc-diamond-norm-ancilla-dimension-bound",
    "kind": "theorem",
    "page": "trace-distance-fidelity-and-information-limits",
    "deps": [
      "def-qc-diamond-norm",
      "thm-singular-value-decomposition",
      "def-qc-tensor-register-and-permutation"
    ],
    "justified_by": [],
    "statement_or_definition": "For Φ:L(H)→L(K), the ancilla dimension in the completely bounded trace norm can be capped at dim(H), and the supremum is attained.",
    "proof_obligations": [
      "Reduce arbitrary inputs to pure states and Schmidt rank across input/ancilla.",
      "Compress ancilla support and use compactness of the finite unit sphere for attainment."
    ],
    "sources": [
      {
        "url": "https://cs.uwaterloo.ca/~watrous/TQI/TQI.pdf",
        "locator": "§3.3.2–3.3.4, PDF pp.174–204; Def.3.43, Prop.3.44, Thm.3.46, Prop.3.48, Thm.3.49"
      }
    ],
    "title": "Diamond Norm Ancilla Dimension Bound",
    "existing_supplier_checks": [
      "Reuses inspected root suppliers: thm-singular-value-decomposition. These are premises only; the proposed QC statement remains local."
    ],
    "unresolved_obligations": [
      "Reduce arbitrary inputs to pure states and Schmidt rank across input/ancilla.",
      "Compress ancilla support and use compactness of the finite unit sphere for attainment."
    ]
  },
  {
    "id": "thm-qc-exact-mixed-state-cloning-fidelity-criterion",
    "kind": "theorem",
    "page": "trace-distance-fidelity-and-information-limits",
    "deps": [
      "def-qc-fidelity",
      "def-qc-quantum-channel",
      "thm-qc-fidelity-data-processing-and-equality"
    ],
    "justified_by": [],
    "statement_or_definition": "If one channel maps each of ρ0,ρ1 exactly to ρi⊗ρi, then F(ρ0,ρ1) is 0 or 1; thus inputs are identical or have orthogonal supports.",
    "proof_obligations": [
      "Use data processing and product multiplicativity to get F≤F².",
      "Prove F=1 iff equal and F=0 iff supports orthogonal."
    ],
    "sources": [
      {
        "url": "https://cs.uwaterloo.ca/~watrous/TQI/TQI.pdf",
        "locator": "§3.2.1–3.2.3, PDF pp.147–171"
      },
      {
        "url": "https://arxiv.org/pdf/quant-ph/9511010",
        "locator": "Complete paper, PDF pp.2–10; pair statement/construction p.3, fidelity and invertible-state proof Eqs.(4)–(31), pp.4–10"
      }
    ],
    "title": "Exact Mixed State Cloning Fidelity Criterion",
    "existing_supplier_checks": [
      "Repository audit found no matching root supplier for this QC-specific contract; prove it locally."
    ],
    "unresolved_obligations": [
      "Use data processing and product multiplicativity to get F≤F².",
      "Prove F=1 iff equal and F=0 iff supports orthogonal."
    ]
  },
  {
    "id": "thm-qc-fidelity-data-processing-and-equality",
    "kind": "theorem",
    "page": "trace-distance-fidelity-and-information-limits",
    "deps": [
      "def-qc-fidelity",
      "def-qc-quantum-channel",
      "thm-qc-fidelity-purification-characterization",
      "thm-qc-finite-stinespring-dilation"
    ],
    "justified_by": [],
    "statement_or_definition": "For every finite-dimensional channel Φ, root fidelity obeys F(ρ,σ)≤F(Φ(ρ),Φ(σ)); no general equality characterization is asserted here.",
    "proof_obligations": [
      "Dilate the channel isometrically and apply the purification-maximization characterization to prove data processing.",
      "Keep equality-case analysis under its exact full-rank hypotheses in the separate Barnum no-broadcast theorem proof."
    ],
    "sources": [
      {
        "url": "https://cs.uwaterloo.ca/~watrous/TQI/TQI.pdf",
        "locator": "§3.2.1–3.2.3, PDF pp.147–171"
      }
    ],
    "title": "Fidelity Data Processing And Equality",
    "existing_supplier_checks": [
      "Repository audit found no matching root supplier for this QC-specific contract; prove it locally."
    ],
    "unresolved_obligations": [
      "Dilate the channel isometrically and apply the purification-maximization characterization to prove data processing.",
      "Keep equality-case analysis under its exact full-rank hypotheses in the separate Barnum no-broadcast theorem proof."
    ]
  },
  {
    "id": "thm-qc-fidelity-purification-characterization",
    "kind": "theorem",
    "page": "trace-distance-fidelity-and-information-limits",
    "deps": [
      "def-qc-fidelity",
      "thm-qc-purification-existence-and-unitary-equivalence",
      "def-qc-partial-trace"
    ],
    "justified_by": [],
    "statement_or_definition": "Root fidelity is the maximum absolute inner product between purifications on a common sufficiently large auxiliary space.",
    "proof_obligations": [
      "Represent purifications by coefficient matrices under fixed vectorization.",
      "Use polar decomposition/SVD to optimize and attain the trace norm."
    ],
    "sources": [
      {
        "url": "https://cs.uwaterloo.ca/~watrous/TQI/TQI.pdf",
        "locator": "§3.2.1–3.2.3, PDF pp.147–171"
      },
      {
        "url": "https://www.preskill.caltech.edu/ph219/chap2_15.pdf",
        "locator": "§2.6.1–2, PDF pp.36–40; complete cross-read qc_r2 ledger, summary/corroboration only"
      }
    ],
    "title": "Fidelity Purification Characterization",
    "existing_supplier_checks": [
      "Repository audit found no matching root supplier for this QC-specific contract; prove it locally."
    ],
    "unresolved_obligations": [
      "Represent purifications by coefficient matrices under fixed vectorization.",
      "Use polar decomposition/SVD to optimize and attain the trace norm."
    ]
  },
  {
    "id": "thm-qc-fuchs-van-de-graaf",
    "kind": "theorem",
    "page": "trace-distance-fidelity-and-information-limits",
    "deps": [
      "def-qc-trace-distance",
      "def-qc-fidelity"
    ],
    "justified_by": [],
    "statement_or_definition": "1−F(ρ,σ)≤D(ρ,σ)≤√(1−F(ρ,σ)²) in root-fidelity convention.",
    "proof_obligations": [
      "Derive lower bound from measurement characterization.",
      "Use purifications and pure-state trace-distance formula for upper bound."
    ],
    "sources": [
      {
        "url": "https://cs.uwaterloo.ca/~watrous/TQI/TQI.pdf",
        "locator": "§3.2.1–3.2.3, PDF pp.147–171"
      },
      {
        "url": "https://www.preskill.caltech.edu/ph219/chap2_15.pdf",
        "locator": "§2.6.1–2, PDF pp.36–40; complete cross-read qc_r2 ledger, summary/corroboration only"
      }
    ],
    "title": "Fuchs Van De Graaf",
    "existing_supplier_checks": [
      "Repository audit found no matching root supplier for this QC-specific contract; prove it locally."
    ],
    "unresolved_obligations": [
      "Derive lower bound from measurement characterization.",
      "Use purifications and pure-state trace-distance formula for upper bound."
    ]
  },
  {
    "id": "thm-qc-full-rank-pair-no-broadcasting",
    "kind": "theorem",
    "page": "trace-distance-fidelity-and-information-limits",
    "deps": [
      "def-qc-broadcasting-family",
      "def-qc-fidelity",
      "thm-qc-fidelity-data-processing-and-equality"
    ],
    "justified_by": [],
    "statement_or_definition": "Two faithful states on a finite-dimensional support are jointly broadcastable only if they commute; commuting states have an explicit basis-copying broadcaster.",
    "proof_obligations": [
      "Force fidelity equality by monotonicity under both partial traces.",
      "Reproduce Barnum et al. Eqs.(19)–(31) under invertibility to derive commutation; exhibit CPTP copying for sufficiency."
    ],
    "sources": [
      {
        "url": "https://arxiv.org/pdf/quant-ph/9511010",
        "locator": "Complete paper, PDF pp.2–10; pair statement/construction p.3, fidelity and invertible-state proof Eqs.(4)–(31), pp.4–10"
      }
    ],
    "title": "Full Rank Pair No Broadcasting",
    "existing_supplier_checks": [
      "Repository audit found no matching root supplier for this QC-specific contract; prove it locally."
    ],
    "unresolved_obligations": [
      "Force fidelity equality by monotonicity under both partial traces.",
      "Reproduce Barnum et al. Eqs.(19)–(31) under invertibility to derive commutation; exhibit CPTP copying for sufficiency."
    ]
  },
  {
    "id": "thm-qc-helstrom-binary-discrimination",
    "kind": "theorem",
    "page": "trace-distance-fidelity-and-information-limits",
    "deps": [
      "def-qc-trace-distance",
      "def-qc-povm-and-outcome-law",
      "thm-non-negative-operator-characterisations",
      "thm-non-negative-square-root-exists-and-is-unique"
    ],
    "justified_by": [],
    "statement_or_definition": "For equal priors optimal binary success is ½(1+D); the positive spectral projector of ρ−σ attains it.",
    "proof_obligations": [
      "Write success as ½+½tr(E(ρ−σ)) and optimize over 0≤E≤I.",
      "Use spectral positive/negative parts to prove upper bound and attainability."
    ],
    "sources": [
      {
        "url": "https://cs.uwaterloo.ca/~watrous/TQI/TQI.pdf",
        "locator": "§3.1.1–3.1.2, PDF pp.133–146"
      },
      {
        "url": "https://arxiv.org/pdf/1907.09415",
        "locator": "Ch.1 Exercise 12, PDF pp.23–24; Appendix C hint p.215"
      }
    ],
    "title": "Helstrom Binary Discrimination",
    "existing_supplier_checks": [
      "Reuses inspected root suppliers: thm-non-negative-operator-characterisations, thm-non-negative-square-root-exists-and-is-unique. These are premises only; the proposed QC statement remains local."
    ],
    "unresolved_obligations": [
      "Write success as ½+½tr(E(ρ−σ)) and optimize over 0≤E≤I.",
      "Use spectral positive/negative parts to prove upper bound and attainability."
    ]
  },
  {
    "id": "thm-qc-measurement-variation-at-most-trace-distance",
    "kind": "theorem",
    "page": "trace-distance-fidelity-and-information-limits",
    "deps": [
      "def-qc-trace-distance",
      "def-qc-povm-and-outcome-law",
      "thm-non-negative-operator-characterisations",
      "thm-non-negative-square-root-exists-and-is-unique"
    ],
    "justified_by": [],
    "statement_or_definition": "For any finite POVM, ½Σa|tr((ρ−σ)Ea)|≤D(ρ,σ), and a binary PVM attains equality.",
    "proof_obligations": [
      "Bound signed sums over positive/negative outcome sets by trace positive part of Δ=ρ−σ.",
      "Use positive spectral projector and complement as an attaining POVM."
    ],
    "sources": [
      {
        "url": "https://cs.uwaterloo.ca/~watrous/TQI/TQI.pdf",
        "locator": "§3.1.1–3.1.2, PDF pp.133–146"
      },
      {
        "url": "https://arxiv.org/pdf/1907.09415",
        "locator": "Ch.1 Exercise 12, PDF pp.23–24; Appendix C hint p.215"
      }
    ],
    "title": "Measurement Variation At Most Trace Distance",
    "existing_supplier_checks": [
      "Reuses inspected root suppliers: thm-non-negative-operator-characterisations, thm-non-negative-square-root-exists-and-is-unique. These are premises only; the proposed QC statement remains local."
    ],
    "unresolved_obligations": [
      "Bound signed sums over positive/negative outcome sets by trace positive part of Δ=ρ−σ.",
      "Use positive spectral projector and complement as an attaining POVM."
    ]
  },
  {
    "id": "thm-qc-optimal-universal-pure-state-cloning-bound",
    "kind": "theorem",
    "page": "trace-distance-fidelity-and-information-limits",
    "deps": [
      "lem-qc-optimal-cloning-worst-case-upper-bound",
      "lem-qc-optimal-cloner-attains-bound"
    ],
    "justified_by": [],
    "statement_or_definition": "For 1≤n≤m, worst-case squared root fidelity for universal pure-state n→m cloning is exactly Nn/Nm; for 1→2 it is 2/(d+1).",
    "proof_obligations": [
      "Combine the upper bound and explicit attaining CPTP channel.",
      "Translate Watrous root-fidelity/squared-overlap notation and state d=1 separately."
    ],
    "sources": [
      {
        "url": "https://cs.uwaterloo.ca/~watrous/TQI/TQI.pdf",
        "locator": "Thm.7.28 and proof, PDF pp.432–434"
      }
    ],
    "title": "Optimal Universal Pure State Cloning Bound",
    "existing_supplier_checks": [
      "Repository audit found no matching root supplier for this QC-specific contract; prove it locally."
    ],
    "unresolved_obligations": [
      "Combine the upper bound and explicit attaining CPTP channel.",
      "Translate Watrous root-fidelity/squared-overlap notation and state d=1 separately."
    ]
  },
  {
    "id": "thm-qc-pure-state-no-cloning",
    "kind": "theorem",
    "page": "trace-distance-fidelity-and-information-limits",
    "deps": [
      "def-qc-quantum-channel",
      "thm-qc-finite-stinespring-dilation",
      "def-qc-pure-state-and-ray"
    ],
    "justified_by": [],
    "statement_or_definition": "A channel exactly cloning every pure state in a set forces every pair to be identical rays or orthogonal; no universal exact cloner exists for dim≥2, while dim=1 is trivial.",
    "proof_obligations": [
      "Dilate and use purity of reduced outputs to factor environment states.",
      "Preserve overlaps to obtain |c|=|c|²|e|≤|c|²; check orthogonal/equal cases."
    ],
    "sources": [
      {
        "url": "https://cs.uwaterloo.ca/~watrous/TQI/TQI.pdf",
        "locator": "Thm.7.28 and proof, §7.2, PDF pp.432–434"
      },
      {
        "url": "https://arxiv.org/pdf/1907.09415",
        "locator": "Ch.1 Exercise 12, PDF pp.23–24; Appendix C hint p.215"
      }
    ],
    "title": "Pure State No Cloning",
    "existing_supplier_checks": [
      "Repository audit found no matching root supplier for this QC-specific contract; prove it locally."
    ],
    "unresolved_obligations": [
      "Dilate and use purity of reduced outputs to factor environment states.",
      "Preserve overlaps to obtain |c|=|c|²|e|≤|c|²; check orthogonal/equal cases."
    ]
  },
  {
    "id": "thm-qc-singular-pair-no-broadcasting",
    "kind": "theorem",
    "page": "trace-distance-fidelity-and-information-limits",
    "deps": [
      "def-qc-broadcasting-family",
      "thm-qc-full-rank-pair-no-broadcasting",
      "lem-qc-faithful-state-dominates-positive-operator",
      "lem-qc-positive-marginals-imply-joint-support"
    ],
    "justified_by": [],
    "statement_or_definition": "Arbitrary finite-dimensional states ρ0,ρ1 are jointly broadcastable iff [ρ0,ρ1]=0, including singular states.",
    "proof_obligations": [
      "Set S=suppρ0+suppρ1, σ=(ρ0+ρ1)/2; prove B broadcasts σ by linearity.",
      "Use faithful domination, CP positivity, and joint support to prove B(X) is in S⊗S for every X≥0 on S and restrict B as CPTP on all L(S).",
      "For fixed 0<ε<1 set τi=(1−ε)ρi+εσ; apply full-rank theorem and compute [τ0,τ1]=(1−ε)[ρ0,ρ1], with no limiting step."
    ],
    "sources": [
      {
        "url": "https://arxiv.org/pdf/quant-ph/9511010",
        "locator": "Complete paper, PDF pp.2–10; pair statement/construction p.3, fidelity and invertible-state proof Eqs.(4)–(31), pp.4–10"
      }
    ],
    "title": "Singular Pair No Broadcasting",
    "existing_supplier_checks": [
      "Repository audit found no matching root supplier for this QC-specific contract; prove it locally."
    ],
    "unresolved_obligations": [
      "Set S=suppρ0+suppρ1, σ=(ρ0+ρ1)/2; prove B broadcasts σ by linearity.",
      "Use faithful domination, CP positivity, and joint support to prove B(X) is in S⊗S for every X≥0 on S and restrict B as CPTP on all L(S).",
      "For fixed 0<ε<1 set τi=(1−ε)ρi+εσ; apply full-rank theorem and compute [τ0,τ1]=(1−ε)[ρ0,ρ1], with no limiting step."
    ]
  },
  {
    "id": "thm-qc-state-family-no-broadcasting-iff-commuting",
    "kind": "theorem",
    "page": "trace-distance-fidelity-and-information-limits",
    "deps": [
      "def-qc-broadcasting-family",
      "thm-qc-singular-pair-no-broadcasting",
      "thm-simultaneous-diagonalisation-of-commuting-diagonalisable-endomorphisms"
    ],
    "justified_by": [],
    "statement_or_definition": "For any family S (finite or infinite) of density operators on finite-dimensional H, one common broadcaster exists iff every pair commutes.",
    "proof_obligations": [
      "Necessity applies the singular-safe pair theorem to each pair.",
      "Simultaneously diagonalize the arbitrary commuting Hermitian family; define B(X)=Σj⟨Xj,j⟩root|jj〉〈jj|, exhibit Kraus operators and compute both marginals."
    ],
    "sources": [
      {
        "url": "https://arxiv.org/pdf/quant-ph/9511010",
        "locator": "Complete paper, PDF pp.2–10; pair statement/construction p.3, fidelity and invertible-state proof Eqs.(4)–(31), pp.4–10"
      }
    ],
    "title": "State Family No Broadcasting Iff Commuting",
    "existing_supplier_checks": [
      "Reuses inspected root suppliers: thm-simultaneous-diagonalisation-of-commuting-diagonalisable-endomorphisms. These are premises only; the proposed QC statement remains local."
    ],
    "unresolved_obligations": [
      "Necessity applies the singular-safe pair theorem to each pair.",
      "Simultaneously diagonalize the arbitrary commuting Hermitian family; define B(X)=Σj⟨Xj,j⟩root|jj〉〈jj|, exhibit Kraus operators and compute both marginals."
    ]
  },
  {
    "id": "thm-qc-symmetric-subspace-dimension-and-haar-moment",
    "kind": "theorem",
    "page": "trace-distance-fidelity-and-information-limits",
    "deps": [
      "def-qc-symmetric-subspace-projector",
      "lem-qc-symmetric-power-irreducible",
      "thm-qc-unitary-group-compact",
      "cor-normalized-haar-probability-on-a-compact-group",
      "def-axiom-of-choice"
    ],
    "justified_by": [],
    "statement_or_definition": "Assuming AC, dim Sym^k(C^d)=Nk=binom(k+d−1,d−1), and the unitary-invariant sphere average ∫|u〉〈u|⊗k dμ(u)=Πsym,k/Nk.",
    "proof_obligations": [
      "Count weak compositions of k into d nonnegative coordinates for dimension.",
      "Push normalized Haar on U(d) to the unit sphere; use invariance, support on Sym^k, irreducibility and trace one to identify the scalar."
    ],
    "sources": [
      {
        "url": "https://cs.uwaterloo.ca/~watrous/TQI/TQI.pdf",
        "locator": "§7.2, unitary-invariant measure preliminaries and Thm.7.28 proof, PDF pp.408–434"
      }
    ],
    "title": "Symmetric Subspace Dimension And Haar Moment",
    "existing_supplier_checks": [
      "Reuses inspected root suppliers: cor-normalized-haar-probability-on-a-compact-group, def-axiom-of-choice. These are premises only; the proposed QC statement remains local."
    ],
    "unresolved_obligations": [
      "Count weak compositions of k into d nonnegative coordinates for dimension.",
      "Push normalized Haar on U(d) to the unit sphere; use invariance, support on Sym^k, irreducibility and trace one to identify the scalar."
    ]
  },
  {
    "id": "thm-qc-trace-distance-channel-contractivity",
    "kind": "theorem",
    "page": "trace-distance-fidelity-and-information-limits",
    "deps": [
      "def-qc-trace-distance",
      "def-qc-quantum-channel",
      "thm-qc-measurement-variation-at-most-trace-distance"
    ],
    "justified_by": [],
    "statement_or_definition": "For every channel Φ, D(Φρ,Φσ)≤D(ρ,σ).",
    "proof_obligations": [
      "Use effect variational formula and unital positive adjoint of a channel.",
      "Check application to Hermitian trace-zero input differences."
    ],
    "sources": [
      {
        "url": "https://cs.uwaterloo.ca/~watrous/TQI/TQI.pdf",
        "locator": "§3.1.1–3.1.2, PDF pp.133–146"
      },
      {
        "url": "https://arxiv.org/pdf/1907.09415",
        "locator": "Ch.1 Exercise 12, PDF pp.23–24; Appendix C hint p.215"
      }
    ],
    "title": "Trace Distance Channel Contractivity",
    "existing_supplier_checks": [
      "Repository audit found no matching root supplier for this QC-specific contract; prove it locally."
    ],
    "unresolved_obligations": [
      "Use effect variational formula and unital positive adjoint of a channel.",
      "Check application to Hermitian trace-zero input differences."
    ]
  },
  {
    "id": "thm-qc-trace-distance-range-and-equality",
    "kind": "theorem",
    "page": "trace-distance-fidelity-and-information-limits",
    "deps": [
      "def-qc-trace-distance",
      "def-qc-density-operator",
      "thm-non-negative-operator-characterisations",
      "thm-non-negative-square-root-exists-and-is-unique"
    ],
    "justified_by": [],
    "statement_or_definition": "0≤D≤1; D=0 iff states equal and D=1 iff their supports are orthogonal.",
    "proof_obligations": [
      "Use positive/negative spectral parts of trace-zero Hermitian difference.",
      "Derive equality conditions from positivity and support."
    ],
    "sources": [
      {
        "url": "https://cs.uwaterloo.ca/~watrous/TQI/TQI.pdf",
        "locator": "§3.1.1–3.1.2, PDF pp.133–146"
      },
      {
        "url": "https://arxiv.org/pdf/1907.09415",
        "locator": "Ch.1 Exercise 12, PDF pp.23–24; Appendix C hint p.215"
      }
    ],
    "title": "Trace Distance Range And Equality",
    "existing_supplier_checks": [
      "Reuses inspected root suppliers: thm-non-negative-operator-characterisations, thm-non-negative-square-root-exists-and-is-unique. These are premises only; the proposed QC statement remains local."
    ],
    "unresolved_obligations": [
      "Use positive/negative spectral parts of trace-zero Hermitian difference.",
      "Derive equality conditions from positivity and support."
    ]
  },
  {
    "id": "thm-qc-unitary-group-compact",
    "kind": "theorem",
    "page": "trace-distance-fidelity-and-information-limits",
    "deps": [
      "def-real-and-complex-inner-product-space",
      "def-dimension",
      "thm-heine-borel-rn"
    ],
    "justified_by": [],
    "statement_or_definition": "U(d) is a compact Hausdorff topological group in finite matrix coordinates.",
    "proof_obligations": [
      "Show U†U=I is closed and entries are bounded, then apply finite-dimensional Heine–Borel.",
      "Check multiplication and inversion are continuous."
    ],
    "sources": [
      {
        "url": "https://cs.uwaterloo.ca/~watrous/TQI/TQI.pdf",
        "locator": "§7.2, PDF pp.408–434"
      }
    ],
    "title": "Unitary Group Compact",
    "existing_supplier_checks": [
      "Reuses inspected root suppliers: def-real-and-complex-inner-product-space, def-dimension, thm-heine-borel-rn. These are premises only; the proposed QC statement remains local."
    ],
    "unresolved_obligations": [
      "Show U†U=I is closed and entries are bounded, then apply finite-dimensional Heine–Borel.",
      "Check multiplication and inversion are continuous."
    ]
  }
]
~~~
## Inherited-root-remark-repair-plan

This is a proposed overlay for the two assigned remarks and their six direct logical consumers only. The six consumer hashes match the edge manifest, and all six IDs occur in the 1,832-item root prerequisite closure. No root item, merged inventory, plan, or live run was changed.

~~~json
{
  "schema_version": 1,
  "status": "planned-overlay-not-applied",
  "scope": {
    "edge_manifest": "research/quantum-planning-review/inherited-remark-edges.json",
    "closure_manifest": "research/quantum-planning-review/root-prerequisite-closure.json",
    "closure_item_count": 1832,
    "rule": "Only the two listed remark parents and their manifest-listed direct logical consumers were audited. Proposed supplier contracts are mathematical items with no remark targets."
  },
  "verification": {
    "all_six_manifest_consumers_are_in_root_prerequisite_closure": true,
    "all_six_consumer_raw_sha256_values_match_manifest": true,
    "plane_remark_raw_sha256": "29cd04ec94721ba22480fc3ebb23f3b77040fdac9ec83dc0710796c0e54ca60a",
    "contour_remark_raw_sha256": "6fe6a8c42c79908ef0457065f8b54ebfd26e823bd0bec4c9fa2e108b08e2ec39",
    "repair_is_not_yet_applied": true
  },
  "parents": [
    {
      "id": "rem-complex-plane-euclidean-dictionary",
      "path": "items/rem-complex-plane-euclidean-dictionary.md",
      "raw_sha256": "29cd04ec94721ba22480fc3ebb23f3b77040fdac9ec83dc0710796c0e54ca60a",
      "current_deps": [
        "def-complex-numbers-and-arithmetic",
        "thm-complex-numbers-are-the-real-coordinate-plane",
        "def-complex-conjugate-real-imaginary-part-and-modulus",
        "lem-complex-conjugation-and-modulus-laws",
        "def-complex-metric-convergence-and-continuity",
        "rem-euclidean-topology-dictionary"
      ],
      "planned_remark_deps": [
        "def-complex-numbers-and-arithmetic",
        "thm-complex-numbers-are-the-real-coordinate-plane",
        "thm-complex-coordinate-map-preserves-real-scalar-multiplication",
        "def-complex-conjugate-real-imaginary-part-and-modulus",
        "lem-complex-conjugation-and-modulus-laws",
        "def-complex-metric-convergence-and-continuity",
        "thm-complex-coordinate-isometry-and-topology-transport",
        "thm-complex-coordinate-map-preserves-real-total-differentiability"
      ],
      "body_repair_locations": [
        {
          "location": "body paragraph 1, lines 32-38: coordinate bijection, real scalar multiplication, and coordinate product",
          "action": "Keep the bijection/addition/product formulas linked to thm-complex-numbers-are-the-real-coordinate-plane; support the real-scalar formula by thm-complex-coordinate-map-preserves-real-scalar-multiplication. The remaining distinction between general real-linear maps and complex-linear maps is explanatory, so move it to a Remarks paragraph and do not make it a dependency."
        },
        {
          "location": "body paragraph 2, lines 40-42: conjugation, modulus, distance, and metric notions",
          "action": "Keep the conjugation/reflection and modulus links to def-complex-conjugate-real-imaginary-part-and-modulus and lem-complex-conjugation-and-modulus-laws. Replace the claim that all topology follows from the remark with the exact d_C formula in def-complex-metric-convergence-and-continuity plus thm-complex-coordinate-isometry-and-topology-transport."
        },
        {
          "location": "body paragraph 2, line 42: link to rem-euclidean-topology-dictionary",
          "action": "Remove this link from the mathematical sentence and from deps. If retained for reading context, move it to Remarks and mark it explicitly expository; it must not enter logical closure."
        },
        {
          "location": "body paragraph 2, line 42: openness, connectedness, and real total differentiability",
          "action": "Replace the topology claims by thm-complex-coordinate-isometry-and-topology-transport and replace the differentiability claim by thm-complex-coordinate-map-preserves-real-total-differentiability."
        },
        {
          "location": "body paragraph 3, lines 44-45: no compatible field order and plane geometry",
          "action": "Keep as non-supplier exposition under Remarks. Link the no-order statement there to fs-complex-numbers-form-an-ordered-field; do not make the remark a dependency."
        }
      ],
      "nonlogical_links_moved_to_remarks": [
        {
          "from": "rem-euclidean-topology-dictionary in paragraph 2",
          "to": "expository Remarks only, or remove"
        },
        {
          "from": "general real-linear versus complex-linear discussion in paragraph 1",
          "to": "expository Remarks only"
        },
        {
          "from": "no-compatible-field-order and plane-orientation discussion in paragraph 3",
          "to": "expository Remarks only, with the existing false-statement item linked as literature context"
        }
      ],
      "direct_logical_consumers": [
        {
          "id": "thm-boundary-maximum-modulus-principle",
          "path": "items/thm-boundary-maximum-modulus-principle.md",
          "raw_sha256": "99a30ea4020b22777c60c2caeb9b3e604984a7e23768e96bc3e00659d9c97685",
          "current_deps": [
            "thm-local-maximum-modulus-principle",
            "thm-heine-borel-rn",
            "thm-extreme-value-metric",
            "def-metric-interior-closure-boundary",
            "cor-rn-is-polygonally-connected-and-locally-path-connected",
            "rem-complex-plane-euclidean-dictionary"
          ],
          "replacement_deps": [
            "thm-local-maximum-modulus-principle",
            "thm-heine-borel-rn",
            "thm-extreme-value-metric",
            "def-metric-interior-closure-boundary",
            "cor-rn-is-polygonally-connected-and-locally-path-connected",
            "def-complex-domain",
            "def-complex-metric-convergence-and-continuity",
            "thm-complex-coordinate-isometry-and-topology-transport",
            "thm-metric-closure-characterisation",
            "def-metric-ball",
            "lem-metric-reverse-triangle",
            "def-metric-bounded-diameter",
            "def-metric-continuity",
            "lem-complex-conjugation-and-modulus-laws",
            "cor-archimedean-reciprocal"
          ],
          "source_hypotheses": [
            "Lebl Corollary 3.3.7, Shabat Theorem 1.15, and Tropp Theorem 7.12 support the boundary maximum principle for a bounded domain, a function continuous on its closure, and holomorphic in the domain.",
            "The cited analytic hypotheses already match the item statement; no extra boundary regularity or smoothness is required."
          ],
          "source_support": [
            {
              "title": "J. Lebl, Guide to Cultivating Complex Analysis, Corollary 3.3.7",
              "url": "https://www.jirka.org/ca/ca.pdf",
              "locator": "Corollary 3.3.7"
            },
            {
              "title": "B. V. Shabat, Introduction to Complex Analysis, Theorem 1.15",
              "url": "https://math.stanford.edu/~ryzhik/shabat-all.pdf",
              "locator": "Theorem 1.15"
            },
            {
              "title": "J. A. Tropp, Matrix Analysis, Theorem 7.12",
              "url": "https://tropp.caltech.edu/notes/Tro22-Matrix-Analysis-LN.pdf",
              "locator": "Theorem 7.12"
            }
          ],
          "repair_obligations": [
            "Replace the Facts & Assumptions Given sentence's remark citation with def-complex-domain, def-complex-metric-convergence-and-continuity, and the proposed coordinate isometry/topology theorem.",
            "In step 1, use the isometry theorem to identify the complex-metric closure with the Euclidean closure of Φ[Ω]. Show the closure is closed and bounded: closedness follows from thm-metric-closure-characterisation; if Ω lies in B(c,R), reverse triangle inequality shows its closure lies in the closed ball of radius R, which lies in B(c,R+1). Apply thm-heine-borel-rn, then transfer compactness back by the coordinate homeomorphism.",
            "Keep the existing extreme-value argument on the compact metric subspace closure. Use the complex modulus laws for continuity of |f|.",
            "In step 3, transfer connectedness of R² from cor-rn-is-polygonally-connected-and-locally-path-connected through the coordinate homeomorphism. If Ω has empty boundary, show it is nonempty clopen and hence all of C; contradict boundedness by the points n+0i and the Archimedean supplier."
          ],
          "interface_change": "The theorem statement is unchanged. Its facts and proof must name the domain and complex metric explicitly and supply the closure-boundedness and plane-unboundedness steps rather than attributing them to a remark."
        },
        {
          "id": "def-oriented-complex-triangle-and-boundary",
          "path": "items/def-oriented-complex-triangle-and-boundary.md",
          "raw_sha256": "f74c94a3648e3bd56b2366e68f908161bbe47c1ec2ef277993eeb58a0784e929",
          "current_deps": [
            "rem-complex-plane-euclidean-dictionary",
            "def-complex-contours-reversal-concatenation-and-closedness",
            "def-metric-bounded-diameter",
            "lem-complex-conjugation-and-modulus-laws",
            "cor-piecewise-c1-paths-have-additive-speed-integral-length"
          ],
          "replacement_deps": [
            "def-complex-contours-reversal-concatenation-and-closedness",
            "def-metric-bounded-diameter",
            "lem-complex-conjugation-and-modulus-laws",
            "def-complex-metric-convergence-and-continuity",
            "def-complex-path-polygonal-length-and-rectifiability",
            "thm-complex-path-coordinate-length-rectifiability-and-piecewise-c1-speed"
          ],
          "source_hypotheses": [
            "Stein and Shakarchi, Chapter 2, Section 1, treats the usual oriented triangle setup.",
            "The library deliberately permits repeated or collinear vertices; prove those degenerate cases directly from the displayed parametrizations and bounds rather than narrowing the item to the source's generic nondegenerate case."
          ],
          "source_support": [
            {
              "title": "E. Stein and R. Shakarchi, Complex Analysis, Chapter 2, Section 1",
              "url": "https://zr9558.com/wp-content/uploads/2013/11/complex_analysis-stein-shakarchi.pdf",
              "locator": "Chapter 2, Section 1"
            }
          ],
          "repair_obligations": [
            "Replace the diameter phrase's standard-identification citation by the explicit metric d_C of def-complex-metric-convergence-and-continuity.",
            "Replace the R^n piecewise-C1 supplier for a C-valued segment by the complex-path coordinate-length theorem. For each segment, show Φ(ell_uv) is affine, so its speed is constant and its complex length is |v-u|.",
            "Retain the current convex-combination estimate proving the filled triangle is nonempty and bounded; use the complex metric directly in def-metric-bounded-diameter."
          ],
          "interface_change": "The triangle/contour definitions and their degenerate cases stay unchanged; dependencies become type-correct for C-valued paths and d_C."
        },
        {
          "id": "def-complex-differentiability-holomorphic-and-entire",
          "path": "items/def-complex-differentiability-holomorphic-and-entire.md",
          "raw_sha256": "7ca566e0f5246098b55a1819cff77e8a271548008f2f04c21fb5541229be3367",
          "current_deps": [
            "rem-complex-plane-euclidean-dictionary",
            "def-complex-metric-convergence-and-continuity",
            "def-metric-topology"
          ],
          "replacement_deps": [
            "def-complex-metric-convergence-and-continuity",
            "def-metric-topology"
          ],
          "source_hypotheses": [
            "Lebl Section 2.1.1 and MIT 18.04 Topic 2 Section 2.6 define the complex difference-quotient limit at an interior point of an open subset of C."
          ],
          "source_support": [
            {
              "title": "J. Lebl, Guide to Cultivating Complex Analysis, Section 2.1.1",
              "url": "https://www.jirka.org/ca/ca.pdf",
              "locator": "Section 2.1.1"
            },
            {
              "title": "J. Orloff, MIT 18.04 Topic 2, Section 2.6",
              "url": "https://ocw.mit.edu/courses/18-04-complex-variables-with-applications-spring-2018/330e301bd727c7bdaa679cf44cb75fe3_MIT18_04S18_topic2.pdf",
              "locator": "Topic 2, Section 2.6"
            }
          ],
          "repair_obligations": [
            "No body rewrite is needed: the difference quotient already converges in the exact d_C metric definition and openness is in the metric topology.",
            "Delete only the redundant remark dependency; preserve the existing well-definedness justification for uniqueness of the complex derivative."
          ],
          "interface_change": "No definition or source-interface change; only remove a redundant contextual dependency."
        },
        {
          "id": "def-wirtinger-derivatives",
          "path": "items/def-wirtinger-derivatives.md",
          "raw_sha256": "b782a61ce6232fbec75ceb46c9e94aa3073c4b26141dd6ddc5af9bd28cb32e02",
          "current_deps": [
            "rem-complex-plane-euclidean-dictionary",
            "def-directional-and-partial-derivatives"
          ],
          "replacement_deps": [
            "def-directional-and-partial-derivatives",
            "def-complex-conjugate-real-imaginary-part-and-modulus",
            "def-complex-metric-convergence-and-continuity",
            "thm-complex-numbers-are-the-real-coordinate-plane",
            "thm-complex-coordinate-isometry-and-topology-transport",
            "thm-complex-coordinate-map-preserves-real-total-differentiability",
            "def-total-derivative-in-euclidean-space",
            "def-euclidean-linear-map"
          ],
          "source_hypotheses": [
            "Lebl Section 2.2.2 defines Wirtinger derivatives using real coordinates on an open complex domain, assuming the indicated first real partials exist; the differential identity additionally assumes real total differentiability."
          ],
          "source_support": [
            {
              "title": "J. Lebl, Guide to Cultivating Complex Analysis, Section 2.2.2",
              "url": "https://www.jirka.org/ca/ca.pdf",
              "locator": "Section 2.2.2"
            }
          ],
          "repair_obligations": [
            "Rewrite the opening to define the coordinate map tilde-f = Φ composed with f composed with Φ inverse on the open set Φ[U]; openness follows from thm-complex-coordinate-isometry-and-topology-transport.",
            "Define u and v as the real and imaginary coordinate components using def-complex-conjugate-real-imaginary-part-and-modulus and thm-complex-numbers-are-the-real-coordinate-plane. Apply def-directional-and-partial-derivatives to tilde-f on R².",
            "State real total differentiability using def-total-derivative-in-euclidean-space and translate its derivative using the proposed coordinate differentiability theorem. Prove the displayed Df identity by expanding a real-linear map in the basis (1,i), with the remainder controlled by the exact isometry."
          ],
          "interface_change": "The definition gains an explicit coordinate-domain and differential interface. Because it changes what U open, the partials, and Df mean, the integrator must review its direct and downstream consumers before accepting it."
        },
        {
          "id": "def-complex-domain",
          "path": "items/def-complex-domain.md",
          "raw_sha256": "a01c0305ae6f404cdb4e5a9123645079462173e1fbf745dd13d9518415383af2",
          "current_deps": [
            "rem-complex-plane-euclidean-dictionary",
            "def-metric-topology",
            "def-connected-space"
          ],
          "replacement_deps": [
            "def-complex-metric-convergence-and-continuity",
            "def-metric-topology",
            "thm-metric-open-set-algebra",
            "def-connected-space"
          ],
          "source_hypotheses": [
            "Lebl Section 2.1 and Howell–Mathews Section 3.1 use a domain to mean a nonempty connected open subset of C."
          ],
          "source_support": [
            {
              "title": "J. Lebl, Guide to Cultivating Complex Analysis, Section 2.1",
              "url": "https://www.jirka.org/ca/ca.pdf",
              "locator": "Section 2.1"
            },
            {
              "title": "R. Howell and J. Mathews, Complex Analysis, Section 3.1",
              "url": "https://complexanalysis.org/web/sec_diff-analytic.html",
              "locator": "Section 3.1"
            }
          ],
          "repair_obligations": [
            "Keep the nonempty/connected/open definition. State explicitly that open is for d_C and connected is for the induced metric-topology space.",
            "Remove the final sentence asserting equivalence to the usual R² notions; if useful for readers, replace it with a nonlogical cross-reference in Remarks to the proposed topology-transport theorem."
          ],
          "interface_change": "The domain contract is unchanged; the open/connected ambient structures become explicit and the unsupported equivalence sentence is removed from the definition."
        }
      ]
    },
    {
      "id": "rem-complex-contours-as-planar-rectifiable-paths",
      "path": "items/rem-complex-contours-as-planar-rectifiable-paths.md",
      "raw_sha256": "6fe6a8c42c79908ef0457065f8b54ebfd26e823bd0bec4c9fa2e108b08e2ec39",
      "current_deps": [
        "rem-complex-plane-euclidean-dictionary",
        "def-path-polygonal-length-and-rectifiability-in-rn",
        "thm-rectifiable-iff-coordinate-functions-have-bounded-variation",
        "cor-piecewise-c1-paths-have-additive-speed-integral-length"
      ],
      "planned_remark_deps": [
        "def-complex-path-polygonal-length-and-rectifiability",
        "thm-complex-coordinate-isometry-and-topology-transport",
        "thm-complex-path-coordinate-length-rectifiability-and-piecewise-c1-speed",
        "thm-complex-path-length-invariant-under-monotone-reparametrization"
      ],
      "body_repair_locations": [
        {
          "location": "body paragraph 1, line 28: planar path identification",
          "action": "Replace the plane-remark link by the proposed coordinate isometry theorem, and define the complex path's own metric polygonal sums using the new complex path definition."
        },
        {
          "location": "body paragraph 1, line 28: polygonal length and rectifiability",
          "action": "Cite the exact complex-path coordinate-length theorem, which proves termwise equality of every partition sum and equality of the resulting suprema."
        },
        {
          "location": "body paragraph 1, line 28: bounded-variation criterion",
          "action": "Use the same theorem to transfer the R² criterion to the coordinate functions x and y."
        },
        {
          "location": "body paragraph 1, line 28: piecewise-C1 speed formula",
          "action": "Use the same theorem to transfer the R² piecewise-C1 length formula. State the hypothesis as Φ composed with γ being continuous piecewise C1; this admits corners and zero-speed pieces without claiming a complex derivative of an unstated type."
        }
      ],
      "nonlogical_links_moved_to_remarks": [],
      "direct_logical_consumers": [
        {
          "id": "def-complex-contours-reversal-concatenation-and-closedness",
          "path": "items/def-complex-contours-reversal-concatenation-and-closedness.md",
          "raw_sha256": "6216c842f2f85f0f55d99aed8a7c65315ac1cc96b06518fb5e1cb89b3343c53e",
          "current_deps": [
            "rem-complex-contours-as-planar-rectifiable-paths",
            "def-piecewise-c1-path-operations-and-oriented-reparametrizations",
            "thm-arc-length-is-invariant-under-monotone-reparametrization"
          ],
          "replacement_deps": [
            "def-complex-path-polygonal-length-and-rectifiability",
            "thm-complex-path-coordinate-length-rectifiability-and-piecewise-c1-speed",
            "thm-complex-path-length-invariant-under-monotone-reparametrization",
            "def-monotone-function"
          ],
          "source_hypotheses": [
            "Stein and Shakarchi Chapter 1, Section 3 uses continuous rectifiable complex paths, endpoint-compatible concatenation, reversal, and orientation-preserving/reversing reparametrization.",
            "The R^n path-operation and arc-length suppliers currently in deps are typed only for R^n; they do not directly license operations on C-valued paths."
          ],
          "source_support": [
            {
              "title": "E. Stein and R. Shakarchi, Complex Analysis, Chapter 1, Section 3",
              "url": "https://zr9558.com/wp-content/uploads/2013/11/complex_analysis-stein-shakarchi.pdf",
              "locator": "Chapter 1, Section 3"
            }
          ],
          "repair_obligations": [
            "Define rectifiable complex path using def-complex-path-polygonal-length-and-rectifiability; do not define it by the planar-path remark.",
            "Write reversal and the two affine concatenation pieces directly for C-valued maps. The present def-piecewise-c1-path-operations-and-oriented-reparametrizations and thm-arc-length-is-invariant-under-monotone-reparametrization have R^n hypotheses and must be removed as direct suppliers.",
            "Use thm-complex-path-length-invariant-under-monotone-reparametrization for equality of C path lengths and def-monotone-function for the increasing/decreasing orientation convention.",
            "Keep endpoint matching and closedness hypotheses explicit; the path-length transfer theorem must include singleton intervals."
          ],
          "interface_change": "The public contour operations remain the same, but their underlying path and length types become explicitly C-valued. This is a source-interface repair; review all consumers of this definition and of the new complex-path definition before accepting it."
        }
      ]
    }
  ],
  "new_supplier_contracts": [
    {
      "id": "thm-complex-coordinate-map-preserves-real-scalar-multiplication",
      "kind": "theorem",
      "statement_or_definition": "For the coordinate bijection Φ(a+bi)=(a,b), for all r in R and z in C, Φ(rz)=rΦ(z), in addition to coordinatewise addition. Thus the stated identification is an R-linear bijection.",
      "deps": [
        "def-complex-numbers-and-arithmetic",
        "thm-complex-numbers-are-the-real-coordinate-plane"
      ],
      "justified_by": [],
      "proof_obligations": [
        "Write z=a+bi using the unique coordinate form.",
        "Use the canonical real embedding from def-complex-numbers-and-arithmetic and the product coordinate formula to compute (r+0i)(a+bi)=ra+(rb)i.",
        "Apply Φ and compare with scalar multiplication in R²; verify the zero and singleton cases are included."
      ],
      "sources": [
        {
          "url": "https://www.jirka.org/ca/ca.pdf",
          "locator": "Chapter 2 coordinate model of C"
        }
      ],
      "existing_supplier_checks": [
        "thm-complex-numbers-are-the-real-coordinate-plane already proves bijectivity, addition, and the complex multiplication coordinate formula, but its current statement does not explicitly give the real scalar formula."
      ],
      "unresolved_obligations": []
    },
    {
      "id": "thm-complex-coordinate-isometry-and-topology-transport",
      "kind": "theorem",
      "statement_or_definition": "With d_C(z,w)=|z-w| and d_2 the Euclidean metric, Φ:C→R² is a bijective isometry and hence a homeomorphism. For all z,w∈C and t∈R, Φ((1−t)z+tw)=(1−t)Φ(z)+tΦ(w). For every A⊆C, Φ maps d_C-open/closed sets, interior, closure, and boundary to the corresponding Euclidean notions; A is bounded, compact, or connected exactly when Φ[A] has the corresponding property.",
      "deps": [
        "thm-complex-numbers-are-the-real-coordinate-plane",
        "thm-complex-coordinate-map-preserves-real-scalar-multiplication",
        "def-complex-metric-convergence-and-continuity",
        "def-p-norms-on-rn",
        "def-isometry-and-metric-embedding",
        "def-metric-ball",
        "def-metric-topology",
        "thm-metric-open-set-algebra",
        "def-homeomorphism-and-open-maps",
        "def-metric-interior-closure-boundary",
        "def-metric-compactness",
        "def-metric-bounded-diameter",
        "thm-continuous-image-of-a-connected-space",
        "thm-continuous-image-of-a-compact-space-is-compact"
      ],
      "justified_by": [],
      "proof_obligations": [
        "Use the coordinate bijection and |z-w|=||Φz-Φw||₂ from the complex metric definition to prove distance preservation for every pair.",
        "Use real scalar preservation and addition to prove Φ((1−t)z+tw)=(1−t)Φ(z)+tΦ(w) for arbitrary real t; this supplies the exact affine-segment interface used by complex contours and triangle consumers.",
        "Show directly from equality of distances that Φ and Φ⁻¹ carry open metric balls to open metric balls; this proves continuity and openness and supplies the homeomorphism without relying on any remark.",
        "Transfer closure, interior, boundary, open and closed sets from the homeomorphism and the metric interior/closure/boundary definitions.",
        "Transfer boundedness by equality of all pairwise distances, or equivalently equality of balls around corresponding centers.",
        "Transfer compactness using continuity of Φ and Φ⁻¹ and the metric continuous-image theorem; transfer connectedness using the corresponding topological continuous-image theorem in both directions.",
        "Check the metric topology's open-set algebra and state the ambient metric/topological spaces in every application."
      ],
      "sources": [
        {
          "url": "https://www.jirka.org/ca/ca.pdf",
          "locator": "Chapter 2, complex plane identified with R²"
        }
      ],
      "existing_supplier_checks": [
        "def-complex-metric-convergence-and-continuity already defines d_C(z,w)=||Φz-Φw||₂.",
        "thm-complex-numbers-are-the-real-coordinate-plane supplies the coordinate bijection but does not itself prove topological transport."
      ],
      "unresolved_obligations": []
    },
    {
      "id": "thm-complex-coordinate-map-preserves-real-total-differentiability",
      "kind": "theorem",
      "statement_or_definition": "For open U⊆C and f:U→C, put f_R=Φ∘f∘Φ⁻¹ on Φ[U]. At z∈U, f_R is totally differentiable at Φ(z) exactly when there is a real-linear L:C_R→C_R and a remainder r(h) with f(z+h)=f(z)+L(h)+r(h) and ||r(h)||₂/|h|→0; then Df_R(Φ(z))=Φ∘L∘Φ⁻¹. This gives the precise real-total-differentiability interface for f.",
      "deps": [
        "thm-complex-coordinate-isometry-and-topology-transport",
        "thm-complex-coordinate-map-preserves-real-scalar-multiplication",
        "def-total-derivative-in-euclidean-space",
        "def-euclidean-linear-map"
      ],
      "justified_by": [],
      "proof_obligations": [
        "Make the realification of the domain and codomain explicit using Φ; do not identify a complex-linear derivative with an arbitrary real-linear derivative.",
        "Use real linearity of Φ to conjugate the candidate real-linear map.",
        "In the Frechet remainder definition, apply the exact norm identity ||Φh||₂=|h| to show the remainder divided by the input norm tends to zero in one coordinate model exactly when it does in the other.",
        "Prove the reverse direction by applying the same argument to Φ⁻¹."
      ],
      "sources": [
        {
          "url": "https://www.jirka.org/ca/ca.pdf",
          "locator": "Section 2.2.2, real-coordinate treatment of Wirtinger derivatives"
        }
      ],
      "existing_supplier_checks": [
        "The complex differentiability/Wirtinger material already uses total differentiability on R², but no direct complex-to-real total-derivative transport theorem was found in the audited closure."
      ],
      "unresolved_obligations": []
    },
    {
      "id": "def-complex-path-polygonal-length-and-rectifiability",
      "kind": "definition",
      "statement_or_definition": "For a≤b and a d_C-continuous path γ:[a,b]→C, define each partition sum by ℓ_P^C(γ)=Σ_i |γ(t_{i+1})−γ(t_i)|, define L_C(γ) as the extended-real supremum over partitions when a<b, and call γ rectifiable iff L_C(γ)<∞. On a singleton interval set L_C=0 and every path is rectifiable.",
      "deps": [
        "def-complex-numbers-and-arithmetic",
        "def-complex-metric-convergence-and-continuity",
        "def-metric-continuity",
        "def-interval",
        "lem-real-line-is-a-metric-space",
        "def-partition-and-refinement",
        "def-complete-ordered-field",
        "def-extended-reals",
        "lem-extended-reals-complete"
      ],
      "justified_by": [],
      "proof_obligations": [
        "Check every partition sum is a finite nonnegative real using the modulus and metric definitions.",
        "Use extended-real completeness for the supremum, and state the finite-length criterion without conflating it with bounded trace.",
        "Specify the singleton convention separately because the partition definition requires distinct interval endpoints."
      ],
      "sources": [
        {
          "url": "https://zr9558.com/wp-content/uploads/2013/11/complex_analysis-stein-shakarchi.pdf",
          "locator": "Chapter 1, Section 3"
        },
        {
          "url": "https://people.math.gatech.edu/~mccuan/courses/6321/lars-ahlfors-complex-analysis-third-edition-mcgraw-hill-science_engineering_math-1979.pdf",
          "locator": "Chapter 4"
        }
      ],
      "existing_supplier_checks": [
        "def-path-polygonal-length-and-rectifiability-in-rn supplies the R^n analogue but does not type-check as a definition on C."
      ],
      "unresolved_obligations": []
    },
    {
      "id": "thm-complex-path-coordinate-length-rectifiability-and-piecewise-c1-speed",
      "kind": "theorem",
      "statement_or_definition": "For a continuous γ:[a,b]→C, put Γ=Φ∘γ=(x,y). Every partition sum for γ under |·| equals the corresponding R² Euclidean polygonal sum for Γ, so L_C(γ)=L_R²(Γ), including singleton intervals. Consequently γ is rectifiable iff x and y have bounded variation. If Γ is continuous piecewise C¹ with derivative continuous on each closed piece, then γ is rectifiable and L_C(γ)=Σ_j ∫ ||Γ'_j(t)||₂ dt = Σ_j ∫ sqrt(x'_j(t)^2+y'_j(t)^2) dt; corners and zero-speed pieces are allowed.",
      "deps": [
        "def-complex-path-polygonal-length-and-rectifiability",
        "thm-complex-coordinate-isometry-and-topology-transport",
        "def-complex-conjugate-real-imaginary-part-and-modulus",
        "def-path-polygonal-length-and-rectifiability-in-rn",
        "thm-rectifiable-iff-coordinate-functions-have-bounded-variation",
        "cor-piecewise-c1-paths-have-additive-speed-integral-length"
      ],
      "justified_by": [],
      "proof_obligations": [
        "Prove continuity of Γ from continuity of γ using the coordinate isometry.",
        "For each partition chord, use |z−w|=||Φz−Φw||₂; sum termwise and then take the same supremum, treating singleton intervals separately.",
        "Apply thm-rectifiable-iff-coordinate-functions-have-bounded-variation to Γ=(x,y), obtaining both directions of the coordinate BV criterion.",
        "For piecewise C¹ Γ, apply the existing R² piecewise-C¹ speed-integral corollary on the same finite subdivision; no matching derivative values are needed at corners.",
        "Use the Euclidean norm formula to write each speed as sqrt(x'²+y'²); do not invoke an untyped complex derivative."
      ],
      "sources": [
        {
          "url": "https://people.math.gatech.edu/~mccuan/courses/6321/lars-ahlfors-complex-analysis-third-edition-mcgraw-hill-science_engineering_math-1979.pdf",
          "locator": "Chapter 4, rectifiable paths and arc length"
        },
        {
          "url": "https://people.math.ethz.ch/~lang/DG1_9Jan2025.pdf",
          "locator": "Section 1.1, piecewise-C¹ arc length"
        },
        {
          "url": "https://www.math.iitb.ac.in/~ars/ma403.pdf",
          "locator": "Section 5, coordinate criterion for rectifiable paths"
        }
      ],
      "existing_supplier_checks": [
        "The R² BV and speed-integral results already exist in the closure; the missing interface is the C-valued path definition and exact coordinate transport."
      ],
      "unresolved_obligations": []
    },
    {
      "id": "thm-complex-path-length-invariant-under-monotone-reparametrization",
      "kind": "theorem",
      "statement_or_definition": "If γ:[a,b]→C is continuous and φ:[c,d]→[a,b] is continuous, surjective, and monotone in either direction, then L_C(γ∘φ)=L_C(γ), including singleton intervals. Increasing maps preserve orientation and decreasing maps reverse it.",
      "deps": [
        "def-complex-path-polygonal-length-and-rectifiability",
        "thm-complex-path-coordinate-length-rectifiability-and-piecewise-c1-speed",
        "thm-arc-length-is-invariant-under-monotone-reparametrization",
        "def-monotone-function"
      ],
      "justified_by": [],
      "proof_obligations": [
        "Set Γ=Φ∘γ and observe Φ∘(γ∘φ)=Γ∘φ.",
        "Use the complex/R² length equality on both paths and the existing R² monotone-reparametrization theorem; cover increasing and decreasing cases and singleton intervals.",
        "Do not apply the existing R² reparametrization theorem directly to a C-valued path."
      ],
      "sources": [
        {
          "url": "https://zr9558.com/wp-content/uploads/2013/11/complex_analysis-stein-shakarchi.pdf",
          "locator": "Chapter 1, Section 3"
        },
        {
          "url": "https://people.math.ethz.ch/~lang/DG1_9Jan2025.pdf",
          "locator": "Section 1.1, arc-length invariance under monotone reparametrization"
        }
      ],
      "existing_supplier_checks": [
        "thm-arc-length-is-invariant-under-monotone-reparametrization proves the result for R^n paths only; this typed theorem transports it to C via the coordinate length equality."
      ],
      "unresolved_obligations": []
    }
  ],
  "source_interface_changes_and_consumer_review_obligations": [
    {
      "target": "def-wirtinger-derivatives",
      "required_review": "Review all direct and downstream users after the coordinate and total-derivative interface is made explicit. Preserve the exact partial-existence and real-total-differentiability hypotheses."
    },
    {
      "target": "def-complex-contours-reversal-concatenation-and-closedness",
      "required_review": "Review every direct and downstream complex contour/path-integral consumer against the new C-valued length definition, endpoint-compatible concatenation, monotone reparametrization, and singleton convention. Do not import the R^n operations theorem without a typed coordinate transport."
    },
    {
      "target": "def-oriented-complex-triangle-and-boundary",
      "required_review": "Review triangle-integral consumers after replacing the R^n speed supplier with the complex-path coordinate-length theorem; retain repeated and collinear vertex cases."
    },
    {
      "target": "thm-boundary-maximum-modulus-principle",
      "required_review": "Recertify its proof after the topology bridge replacement; no theorem-statement or downstream statement change is proposed."
    },
    {
      "target": "def-complex-domain and def-complex-differentiability-holomorphic-and-entire",
      "required_review": "No mathematical interface change is proposed beyond removing a remark dependency and stating the exact metric. Recheck their dependency closure when the planned overlay is applied."
    }
  ],
  "no_remark_supplier_assertion": {
    "new_supplier_deps_contain_remark_ids": false,
    "planned_parent_deps_contain_remark_ids": false,
    "plane_remark_consumers_after_repair": [],
    "contour_remark_consumers_after_repair": []
  }
}
~~~

