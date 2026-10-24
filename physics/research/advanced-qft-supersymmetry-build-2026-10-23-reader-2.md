# Step 3a reader report — batch 2

Run: `advanced-qft-supersymmetry-build-2026-10-23`  
Role: independent reader  
Scope: batch `2`

## Opened inventory

Pages reviewed:

- `qftx-gauge-geometry` — `library/quantum-field-theory-mathematics/qftx-gauge-geometry.md`.
- `qftx-gauge-geometry-examples` — `library/quantum-field-theory-mathematics/qftx-gauge-geometry-examples.md`.

Assigned items reviewed in prerequisite order:

- `def-qftx-nonabelian-gauge-data`
- `def-qftx-principal-connection-form`
- `def-qftx-lie-algebra-valued-form-bracket`
- `lem-qftx-principal-curvature-cartan-bianchi`
- `def-qftx-associated-covariant-derivative`
- `ex-qftx-su2-flat-pure-gauge-connection`
- `ex-qftx-su2-noncommuting-curvature`

The 32 unique direct mathematical suppliers opened for the assigned dependency closure were:

`def-countable-choice`; `def-lie-group`; `thm-the-tangent-space-at-the-identity-is-a-lie-algebra`; `def-principal-g-bundle-and-associated-fiber-bundle`; `def-smooth-principal-g-bundle`; `def-finite-dimensional-representation-of-a-group-over-a-field`; `def-associated-bundle-to-a-principal-bundle-and-representation`; `thm-associated-vector-bundle-is-well-defined`; `def-principal-connection-and-vertical-curvature`; `def-exponential-map-of-a-lie-group`; `thm-one-parameter-subgroups-are-integral-curves-of-left-invariant-fields`; `def-conjugation-and-the-adjoint-representation-of-a-lie-group`; `prop-adjoint-is-a-smooth-lie-group-representation`; `def-differential-of-a-smooth-map`; `thm-chain-rule-for-differentials-of-smooth-maps`; `def-finite-dimensional-lie-algebra`; `def-finite-dimensional-vector-valued-forms-and-their-exterior-derivative`; `def-wedge-product-of-differential-forms`; `prop-differential-forms-form-a-graded-commutative-algebra`; `thm-the-exterior-derivative-is-a-graded-derivation`; `def-adjoint-representation-of-a-lie-algebra`; `thm-differential-of-a-lie-group-homomorphism-is-a-lie-algebra-homomorphism`; `thm-the-differential-of-adjoint-is-ad`; `def-left-maurer-cartan-form`; `def-lie-derivative-of-a-tensor-field`; `def-lie-derivative-of-a-differential-form`; `thm-lie-derivative-of-a-vector-field-equals-the-lie-bracket`; `def-lie-bracket-of-smooth-vector-fields`; `thm-the-exterior-derivative-commutes-with-pullback`; `thm-the-exterior-derivative-squares-to-zero`; `ex-unitary-and-special-unitary-lie-groups`; `thm-heine-borel-rn`.

Also opened the current batch-2 manifest, proof-contract file, notes, coverage record, and cross-batch dependency record. The manifest inventories match the two page files; the cross-batch dependency record is empty.

## Review

The gauge-data definition specifies the group, global bundle, representations, quotient convention, sector equivalence, and admitted sectors. The associated quotient has the smooth bundle structure supplied by the associated-bundle result on the underlying real representation; its local transition maps are complex-linear because each representation is unitary on a complex Hermitian space. No unproved physical interpretation is asserted.

The connection-form definition consistently uses the right action, (Z_P(p)=\left.\frac{d}{dt}\right|_0p\exp_G(tZ)), the orbit differential, and (R_g^*\omega=\operatorname{Ad}_{g^{-1}}\omega). Its reconstruction of the horizontal complement and its conversion of vertical curvature are justified by the displayed arguments and supplier definitions. The graded bracket has the stated shuffle normalization; the graded skew, Jacobi, and exterior-derivative identities follow from the finite component expansion.

The curvature lemma has consistent signs for (s_j=s_i g_{ij}): (A_j=\operatorname{Ad}_{g_{ij}^{-1}}A_i+g_{ij}^{-1}dg_{ij}), with curvature transforming by the same adjoint action. The horizontal curvature formula and local Bianchi identity follow under the declared bracket and right-action conventions. Its `tikzcd` square has the same domains and transformations as the text and commutes by the proved formulas.

The associated covariant derivative uses the quotient convention consistently: section coordinates transform by \(\rho(g_{ij}^{-1})\), the Maurer–Cartan term cancels in the transition calculation, and the local formulas patch and satisfy the Leibniz rule. Its `tikzcd` square correctly represents that transformation of sections and associated-bundle-valued one-forms.

Both SU(2) examples are correct. The pure-gauge form is nonzero and has zero curvature; the matrix connection is right-equivariant and reproduces fundamental fields. In the second example, \([T_1,T_2]=T_3\), so \(F=T_3\,dx\wedge dy\), and the associated covariant-derivative commutator is the same matrix. Compactness and noncommutativity of SU(2) are explicitly established. The diagrams in both diagram-bearing items agree with their stated maps; no proof relies on a diagram.

I checked the cited passages relevant to these conventions: Vákár, *Principal Bundles and Gauge Theories*, §§1.3.1, 1.3.3, 1.4.1, 2.1, and 2.5.1 ([full text](https://arxiv.org/html/2110.06334)), and Neeb, *Differential Topology of Fiber Bundles* (2024), Chapter 1 §§1.4 and 1.6, Chapter 5 §5.4, and Chapter 6 §6.1 ([full PDF](https://www.math.fau.de/wp-content/uploads/2024/01/bundle-lect.pdf)). Vákár §2.5.1 is only abelian U(1) context; the SU(2) computations are established locally. Neeb §5.4 confirms the right-action transition law, and §6.1 confirms the Cartan curvature convention. The source passages support conventions and context; the assigned mathematical deductions are proved locally.

No item or page was edited. No confirmed or suspected defect remains in this batch, and no repair, withdrawal, or outside-scope escalation is required.

## Page verdicts

- `qftx-gauge-geometry`: **pass**. The five listed items agree with the manifest; the A page contains frontmatter only and no summary.
- `qftx-gauge-geometry-examples`: **pass**. The two examples agree with the manifest; the B page contains frontmatter only and no summary.

## Blocker and coverage limit

Blocker: none.

The assigned items, pages, and each unique direct supplier used by their claims were opened. This review checks the published suppliers at the exact statements and passages used; it is not a fresh audit of every upstream proof in the published mathematical dependency graph.
