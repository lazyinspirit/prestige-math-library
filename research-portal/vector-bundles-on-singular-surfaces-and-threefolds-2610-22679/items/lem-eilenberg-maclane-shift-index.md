---
id: lem-eilenberg-maclane-shift-index
kind: lemma
title: Complex shifts and spectral homotopy indices
status: published
domain: mathematics
deps:
  - def-stable-spectra-interface
  - lem-author-80e2d7bee57f-cochain-to-chain
  - lem-author-80e2d7bee57f-shift-cohomology
  - lem-author-80e2d7bee57f-chain-shift-reindex
  - lem-author-80e2d7bee57f-spectral-integer-shift
  - lem-author-80e2d7bee57f-tower-group-index
  - thm-author-80e2d7bee57f-eilenberg-maclane-input
  - math:def-cochain-complex-in-an-abelian-category
  - math:def-cohomology-object-of-a-cochain-complex
  - math:def-cochain-map
  - def-decreasing-filtered-spectrum
  - math:def-axiom-of-choice
  - math:lem-additive-kan-and-normalized-fibration-criterion
  - math:def-simplicial-horn-and-kan-fibration
  - lem-author-e0b0bf18ed2b-spectra-tail-invariance
  - thm-author-e0b0bf18ed2b-stable-enhancement-input
dependency_roles:
  def-stable-spectra-interface: mathematical-premise
  lem-author-80e2d7bee57f-cochain-to-chain: mathematical-premise
  lem-author-80e2d7bee57f-shift-cohomology: mathematical-premise
  lem-author-80e2d7bee57f-chain-shift-reindex: mathematical-premise
  lem-author-80e2d7bee57f-spectral-integer-shift: mathematical-premise
  lem-author-80e2d7bee57f-tower-group-index: mathematical-premise
  thm-author-80e2d7bee57f-eilenberg-maclane-input: mathematical-premise
  math:def-cochain-complex-in-an-abelian-category: mathematical-premise
  math:def-cohomology-object-of-a-cochain-complex: mathematical-premise
  math:def-cochain-map: mathematical-premise
  def-decreasing-filtered-spectrum: mathematical-premise
  math:def-axiom-of-choice: mathematical-premise
  math:lem-additive-kan-and-normalized-fibration-criterion: mathematical-premise
  math:def-simplicial-horn-and-kan-fibration: mathematical-premise
  lem-author-e0b0bf18ed2b-spectra-tail-invariance: mathematical-premise
  thm-author-e0b0bf18ed2b-stable-enhancement-input: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
proof_strategy: direct-proof
dependency_level: 5
formulation_deps:
  - def-stable-spectra-interface
  - thm-author-80e2d7bee57f-eilenberg-maclane-input
  - math:def-cochain-complex-in-an-abelian-category
  - math:def-cohomology-object-of-a-cochain-complex
  - math:def-cochain-map
  - def-decreasing-filtered-spectrum
  - math:def-axiom-of-choice
  - lem-author-80e2d7bee57f-tower-group-index
argument_deps:
  - def-stable-spectra-interface
  - lem-author-80e2d7bee57f-cochain-to-chain
  - lem-author-80e2d7bee57f-shift-cohomology
  - lem-author-80e2d7bee57f-chain-shift-reindex
  - lem-author-80e2d7bee57f-spectral-integer-shift
  - lem-author-80e2d7bee57f-tower-group-index
  - thm-author-80e2d7bee57f-eilenberg-maclane-input
  - math:def-cochain-complex-in-an-abelian-category
  - math:def-cohomology-object-of-a-cochain-complex
  - math:def-cochain-map
  - def-decreasing-filtered-spectrum
  - math:def-axiom-of-choice
  - math:lem-additive-kan-and-normalized-fibration-criterion
  - math:def-simplicial-horn-and-kan-fibration
  - lem-author-e0b0bf18ed2b-spectra-tail-invariance
  - thm-author-e0b0bf18ed2b-stable-enhancement-input
sources:
  references:
    - title: "Stefan Schwede and Brooke Shipley, Stable model categories are
        categories of modules: the levels of the chain-complex Eilenberg–Mac
        Lane construction"
      url: https://homepages.math.uic.edu/~bshipley/classTopFinal.pdf
      locator: Appendix B.1, construction of W on printed pp. 38–39 (PDF pages 38–39),
        from (WC)_k = hom_ChZ(N Delta[k], C) through (HC)_n = W(C[n]); paragraph
        immediately before (B.1.9); Remark B.1.10; opening proof of Theorem
        B.1.11, printed p. 40 (PDF page 40).
      statement: The functor W takes chain complexes to simplicial abelian groups, and
        the naive chain-complex Eilenberg–Mac Lane construction has nth level
        W(D[n]). The underlying spectra are Omega spectra. This is the naive
        construction, distinguished from the symmetric construction in Remark
        B.1.10.
      hypotheses: D is any unbounded chain complex of abelian groups, viewed as a
        module over the one-object ringoid Z; n is nonnegative. Use the naive
        construction already imported by
        thm-author-80e2d7bee57f-eilenberg-maclane-input, including its
        circle-order conversion.
      reading_limits: In this assignment, read the W and H construction through
        (B.1.9), Remark B.1.10, and the opening proof of Theorem B.1.11 in the
        primary PDF text. Import the stated construction and Omega property. The
        Alexander–Whitney foundations and full Quillen-equivalence proof were
        not reconstructed. Kan fibrancy is deduced locally using the declared
        Math Library lemma.
    - title: Kerodon, loop spaces and path fibrations
      url: https://kerodon.net/tag/01JE
      locator: Example 4.6.1.13, entire example; Example 3.1.8.10
        (https://kerodon.net/tag/0101), entire example.
      statement: For a pointed Kan complex (Z,z), paths starting at z form a
        contractible Kan complex with endpoint evaluation a Kan fibration to Z.
        The fiber at z is the loop Kan complex Hom_Z(z,z). This gives a natural
        model for based loops.
      hypotheses: Z is Kan, z is a chosen vertex, and the basepoint of its loop
        complex is the constant path. Both endpoints of a loop are fixed at z.
      reading_limits: Read both entire examples in primary HTML during this
        assignment, including the endpoint-evaluation factorization. Their
        earlier mapping-fibration results are imported. The equality of this
        fiber with the pointed mapping complex from Delta[1]/boundary Delta[1]
        and its application here are local deductions.
    - title: Kerodon, Whitehead theorem for Kan complexes and pointed homotopy
        invariance
      url: https://kerodon.net/tag/00WV
      locator: Theorem 3.2.7.1, statement and proof; Remark 3.2.2.17
        (https://kerodon.net/tag/00VJ).
      statement: A map between Kan complexes is a homotopy equivalence if it is
        bijective on components and induces isomorphisms on every positive
        homotopy group at every basepoint. A pointed map which is such a
        homotopy equivalence is invertible in the pointed homotopy category.
      hypotheses: Both source and target are Kan. The positive-degree tests are made
        at every source vertex, and the component map must be bijective. The
        pointed conclusion uses a basepoint-preserving map.
      reading_limits: Read the complete theorem statement and displayed proof and
        Remark 3.2.2.17 in primary HTML during this assignment. The proof
        imports its fibration factorization and antecedent propositions; these
        were not reconstructed. The realization-to-Kan group comparison is
        supplied by the separately declared local tail-invariance interface.
---

## Statement
Work in ZFC with the size and pointed-space conventions of the stable spectra interface and Omega-tower comparison. Let $C$ be an unbounded cochain complex of abelian groups: its groups $C^q$ and homomorphisms $d_C^q:C^q\to C^{q+1}$ are indexed by all integers and satisfy $d_C^{q+1}d_C^q=0$, with no boundedness assumption. Write $H^q(C)=\ker d_C^q/\operatorname{im}d_C^{q-1}$. A cochain map $f:C\to C'$ has degreewise homomorphisms satisfying $d_{C'}^qf^q=f^{q+1}d_C^q$. Write $HC$ for the spectrum associated, through the stable spectra interface, to the Eilenberg–Mac Lane Omega spectrum of the chain complex $D_n=C^{-n}$, with differential $\partial_n=d_C^{-n}$. Then, naturally in cochain maps and for all integers $i,j$,

$$\pi_i(HC)\cong H^{-i}(C),\qquad \pi_i(H(C[2j]))\cong H^{2j-i}(C),\qquad \pi_i((HC)[2j])\cong H^{2j-i}(C).$$

Here $C[k]^q=C^{q+k}$ with differential $(-1)^k d_C^{q+k}$ is the cochain shift, whereas $(HC)[k]$ is integer spectral suspension; the formulas do not identify these two objects by a specified equivalence.

For the graded application, let $E$ be a spectrum with a decreasing filtration $F^\bullet E$, and put $\operatorname{gr}^jE=\operatorname{cofib}(F^{j+1}E\to F^jE)$, a spectrum. Let $C_j$ be a cochain complex of abelian groups. A specified equivalence $\operatorname{gr}^jE\simeq(HC_j)[2j]$ induces $\pi_i\operatorname{gr}^jE\cong H^{2j-i}(C_j)$.

For the support application, let $C_{j,T}$ be any separately supplied cochain complex of abelian groups representing cohomology with support. Only its cochain-complex structure is used here; the construction of such a support complex is separate input to an application. Its unshifted realization and its spectral $2j$-shift satisfy

$$\pi_i(HC_{j,T})\cong H^{-i}(C_{j,T}),\qquad \pi_i((HC_{j,T})[2j])\cong H^{2j-i}(C_{j,T}).$$

## Facts & Assumptions
**Given:** The Axiom of Choice and the size conventions above; $C$ and integers $i,j$ as stated. For the graded conclusion, $E$, its decreasing filtration, $C_j$, and the specified graded equivalence. For the support conclusion, the supplied cochain complex $C_{j,T}$.

**Goal:** Establish the displayed natural group identifications and their graded and support consequences.

[F1] [[lem-author-80e2d7bee57f-cochain-to-chain]] constructs $D_n=C^{-n}$ with $\partial_n=d_C^{-n}$ and identifies $H_i(D)$ with $H^{-i}(C)$ naturally in cochain maps.

[F2] [[thm-author-80e2d7bee57f-eilenberg-maclane-input]] supplies the functorial pointed simplicial Omega spectrum of the unbounded chain complex $D$ and identifies its stable homotopy groups with $H_i(D)$. Its stable groups and sphere-order convention are those of that supplier.

[F3] [[lem-author-80e2d7bee57f-tower-group-index]] compares a coherent Omega tower with its associated spectrum and identifies its stable groups with the enhanced homotopy groups, naturally in tower maps and with the same ordered suspension–loop convention.

[F4] [[lem-author-80e2d7bee57f-shift-cohomology]] computes cohomology after cochain shift, and [[lem-author-80e2d7bee57f-chain-shift-reindex]] identifies the corresponding shifted chain complex, including its differential.

[F5] [[lem-author-80e2d7bee57f-spectral-integer-shift]] computes homotopy groups after integer spectral shift; [[def-stable-spectra-interface]] supplies the stable category, its coherent Omega-tower interpretation, and its homotopy-group functors.

[F6] [[math:def-cochain-complex-in-an-abelian-category]], [[math:def-cohomology-object-of-a-cochain-complex]], and [[math:def-cochain-map]] supply the complex, cohomology and map definitions used above, specialized to abelian groups.

[F7] [[def-decreasing-filtered-spectrum]] supplies the coherent decreasing filtration on $E$ and defines its associated graded spectra as the displayed cofibers.

[A1] Assume [[math:def-axiom-of-choice]] as part of ZFC. This retains the foundational hypothesis of [F3] and [F5]; use their same fixed size conventions. The local index calculations make no further choices of models or representatives.

[F8] Every simplicial abelian group is Kan by [[math:lem-additive-kan-and-normalized-fibration-criterion]], specifically its first assertion and proof step 1.1. Here Kan means that every horn extends to a simplex, as in [[math:def-simplicial-horn-and-kan-fibration]]. Only that assertion is used, not the boundary-lifting converse.

[F9] Reference 0 in External input identifies the actual levels $X_n$ of the spectrum $X=HD$ in [F2] as $W(D[n])$, which are simplicial abelian groups pointed by zero. The symbol $W$ denotes the source's functor to simplicial abelian groups; its full construction is imported, not reconstructed here.

[F10] Reference 1 in External input supplies the natural path-fibration model of loops for a pointed Kan complex. Reference 2 supplies the Kan homotopy-equivalence criterion and its pointed consequence. They apply only after both relevant complexes are known to be Kan.

[F11] [[lem-author-e0b0bf18ed2b-spectra-tail-invariance]] supplies the pointed simplicial prespectrum convention, the natural realization-to-Kan homotopy-group comparisons and their ordered suspension compatibility, and invariance of the resulting colimits. [[thm-author-e0b0bf18ed2b-stable-enhancement-input]] supplies the model of spaces as the coherent nerve of Kan complexes, its pointed objects, and the coherent Omega-tower equivalence. Use its same nested universes and ZFC assumptions.

## External input
Reference 0 imports the simplicial abelian group structure of each level of the specific construction in [F2]. Reference 1 imports the Kan path-fibration model of based loops. Reference 2 imports the criterion and pointed consequence in [F10]. The Kan assertion used in [F8] is supplied by the declared Math Library lemma. The passage from these premises to the coherent tower, the comparison of its bonding maps, and the shift calculations below are local arguments. No monoidal or symmetric-spectrum comparison is asserted.

## Proof
1.1 By [F1] and [F6], $D_n=C^{-n}$ with differential $\partial_n=d_C^{-n}$ is an unbounded chain complex. Apply [F2] under [A1] and write $X=HD$, $K=\Delta^1/\partial\Delta^1$ and $s_n:K\wedge X_n\to X_{n+1}$ for its sphere-first structure maps. By [F9] and [F8], every $X_n$ is Kan. For any pointed Kan complex $(Z,z)$, $\operatorname{Map}_*(K,Z)$ is exactly the fiber at $z$ of evaluation at the terminal endpoint on paths starting at $z$: both descriptions require both endpoint restrictions of $\Delta^1\times\Delta[m]\to Z$ to be constant at $z$. Thus [F10] makes this mapping complex Kan and identifies it naturally with derived loops. Each adjoint $\alpha_n:X_n\to\operatorname{Map}_*(K,X_{n+1})$ is a weak equivalence by [F2]; [F11] compares its realization groups with its Kan groups at every basepoint, so [F10] makes it an equivalence of pointed spaces. The actual pointed maps and their natural loop construction give a coherent tower $Y_n=X_n$ in the Kan model of [F11], using iterated composites of the adjoints and their loop images for successive transitions; functorial composition supplies the compatibilities. This is a construction from the supplied strict maps, without choosing representatives of homotopy-category arrows. To compare bonding maps, put $d=n+i\geq2$. Under [F11], the tower map $\lambda_d^{-1}(\alpha_n)_*$ sends a sphere class $[f]$ to the class of $s_n\circ(1_K\wedge f)$ after the ordered identification $S^{d+1}=S^1\wedge S^d$. This is precisely the bonding map defining the stable groups in [F2], including its conversion of the source's circle order. Therefore [F11] identifies the two colimits, and [F3] gives $\pi_i(HC)\cong G_i(Y)\cong G_i(X)\cong H_i(D)=H^{-i}(C)$. Every construction and comparison is natural in cochain maps, by [F1], [F2], [F10] and [F11]. [F1, F2, F3, F5, F6, F8, F9, F10, F11, A1, given]

2.1 Apply step 1.1 to $C[2j]$. By [F4], its associated chain complex is the corresponding chain shift and $H^{-i}(C[2j])\cong H^{2j-i}(C)$. Independently, [F5] gives $\pi_i((HC)[2j])\cong\pi_{i-2j}(HC)\cong H^{2j-i}(C)$. The graded object of [F7] is a spectrum, and its specified equivalence to $(HC_j)[2j]$ induces an isomorphism under the homotopy-group functor; applying the same formula to the cochain complex $C_j$ proves the graded conclusion. Applying step 1.1 and the spectral-shift formula to the supplied cochain complex $C_{j,T}$ gives its two displayed formulas. Both applications use exactly the stated complex types, with the unshifted and shifted spectra kept distinct. The shift identifications are natural by [F4] and [F5], and the graded identification is natural for maps preserving the specified equivalence. [F4, F5, F6, F7, A1, given, step 1.1] ∎
