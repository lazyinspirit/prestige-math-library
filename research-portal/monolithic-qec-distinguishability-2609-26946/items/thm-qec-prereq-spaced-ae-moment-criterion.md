---
id: thm-qec-prereq-spaced-ae-moment-criterion
kind: theorem
domain: mathematics
title: Spaced-support moment criterion for order-one AE correction
status: published
origin: session
deps:
  - def-qec-prereq-ae-error-span-contract
  - def-qec-prereq-spin-tensor-cg-conventions
  - thm-qec-prereq-wigner-eckart-contract
  - physics:thm-nrqm-orbital-and-spin-tensor-spin-composition
dependency_roles:
  def-qec-prereq-ae-error-span-contract: mathematical-premise
  def-qec-prereq-spin-tensor-cg-conventions: mathematical-premise
  thm-qec-prereq-wigner-eckart-contract: mathematical-premise
  physics:thm-nrqm-orbital-and-spin-tensor-spin-composition: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: Absorption-Emission Codes for Atomic and Molecular Quantum Information
        Platforms
      url: https://campbellgroup.physics.ucla.edu/papers/PhysRevLett.133.260601.pdf
      locator: PDF p. 3 (journal p. 260601-3), Eq. (3), its immediately following
        coefficient identification, and Eqs. (4)–(5) with their surrounding
        paragraphs
      statement: For fixed J, Eq. (3) gives coherent components from J to J-1, J+1 and
        J, each shifting m by q; its same-block zero-shift component has
        coefficient proportional to m. The following paragraph identifies their
        coefficients with Clebsch–Gordan coefficients in the ordered coupling of
        spin 1 then J. The discussion of Eqs. (4)–(5) states that
        magnetic-support spacing at least three and the diagonal Knill–Laflamme
        conditions for identity and magnetic projection suffice for the listed
        coherent errors.
      hypotheses: Two normalized codewords within a fixed spin-J manifold; all
        distinct supported magnetic labels separated by at least three; equality
        of the dephasing diagonal pair-product conditions through degree two.
        The operators are the coherent Eq. (3) sums on valid target branches,
        not separately resolved matrix units.
      reading_limits: Read the displayed Eq. (3), its coupling-order identification,
        and the criterion surrounding Eqs. (4)–(5) on PDF p. 3 in the source
        text. The PDF screenshot service failed; no visual-page inspection is
        claimed. No supplemental proof was read or reconstructed. Adjoining the
        ambient identity, comparing coupling orders and extending to the
        selected tensor span are local arguments below, not conclusions
        attributed to the cited criterion. No source audit or independent
        acceptance is claimed.
dependency_level: 2
formulation_deps:
  - def-qec-prereq-ae-error-span-contract
  - def-qec-prereq-spin-tensor-cg-conventions
argument_deps:
  - def-qec-prereq-ae-error-span-contract
  - def-qec-prereq-spin-tensor-cg-conventions
  - thm-qec-prereq-wigner-eckart-contract
  - physics:thm-nrqm-orbital-and-spin-tensor-spin-composition
---

## Statement

Use the order-one absorption–emission tensor error span of [[def-qec-prereq-ae-error-span-contract]], with input block $V_J$, selected target blocks, and code projector $P$ onto the span of two normalized codewords $|0_L\rangle=\sum_m a_m e_{J,m}$ and $|1_L\rangle=\sum_m b_m e_{J,m}$. Suppose their supports are disjoint and any two distinct magnetic labels in their union differ by at least three. Suppose also that $\sum_m |a_m|^2m^r=\sum_m |b_m|^2m^r$ for $r=0,1,2$. Then the pair-product Knill–Laflamme condition $PE^*FP=c_{E,F}P$ holds for every $E,F$ in that span. The conclusion concerns coherent tensor components; it does not assert correction of independently resolved matrix-unit transitions.

## Facts & Assumptions

[F1] The error-span contract defines the selected blocks, coherent tensor components and pair-product condition; checking a spanning family suffices by sesquilinearity. [[def-qec-prereq-ae-error-span-contract]]

[F2] The spin convention defines the magnetic basis, rank-$k$ tensor families and ordered Clebsch–Gordan coefficients. [[def-qec-prereq-spin-tensor-cg-conventions]]

[F3] For each fixed input and output spin block, the Wigner–Eckart contract expresses every rank-$k$ tensor component as one reduced scalar times the corresponding coherent Clebsch–Gordan component, with the selection rules stated there. [[thm-qec-prereq-wigner-eckart-contract]]

[F4] The independent coherent-operator formulas, correction criterion and ordered coefficient identification are recorded in External input below.

[F5] Each ordered product of two spin blocks contains exactly one summand of each spin in its coupling list, with the normalized highest-weight and lowered bases. This is a mathematical statement about the explicit spin matrices. [[physics:thm-nrqm-orbital-and-spin-tensor-spin-composition]]

## External input

For the fixed-$J$ coherent operators $E_q$, $G_q$ and $L_q$ in Eq. (3) of Jain, Hudson, Campbell and Albert, the cited passage states that spacing the supported magnetic labels by at least three and satisfying the diagonal Knill–Laflamme conditions for $\{I,J_z\}$ suffices for correction of those operators. This imported criterion concerns the listed coherent operators on valid target branches; adjoining the ambient identity is proved below.

Eq. (3) maps each input magnetic label $m$ to $m+q$, with target spin $J-1$, $J+1$ or $J$, respectively, and $L_0$ is proportional to $J_z$ on the input block. The paragraph immediately following Eq. (3) identifies each nonzero component's coefficients as a nonzero, magnetic-label-independent scalar times $C^{J',m+q}_{1,q;J,m}$, in the coupling order spin one then $J$. Component normalizations may depend on the branch and $q$. Invalid target branches are omitted. The comparison with the opposite coupling order in the Wigner–Eckart contract is proved below.

## Proof

**Given:** The selected finite blocks and the two codewords, supports, spacing and moment equalities in the Statement.

**Goal:** Prove the pair-product condition for their full order-one tensor error span.

1.1 The two codewords are orthogonal because their supports are disjoint. For each $r=0,1,2$, the operator $J_z^r$ is diagonal in the magnetic basis, so its cross matrix element between the codewords is zero and its two diagonal matrix elements agree by the given moment equality. Thus the code satisfies the pair-product conditions for $\{I,J_z\}$. [F2, given, algebra]

1.2 Define the linear flip $S:V_J\otimes V_1\to V_1\otimes V_J$ on the product basis by $S(e_{J,m}\otimes e_{1,q})=e_{1,q}\otimes e_{J,m}$. It preserves the inner product because it sends an orthonormal basis bijectively to an orthonormal basis. Applying both sides to each product-basis vector gives $S J_a^{\mathrm{tot},(J,1)}=J_a^{\mathrm{tot},(1,J)}S$ for $a=z,+,-$. For any allowed output spin $J'$, the joint conditions of weight $J'$ and annihilation by the raising operator define a one-dimensional line in either ordered product: by F5 and the ladder formula, only the unique spin-$J'$ summand contributes to that joint space. Thus the flip sends the recorded unit highest-weight vector in order $(J,1)$ to $\lambda_{J'}$ times the unit highest-weight vector in order $(1,J)$, with $|\lambda_{J'}|=1$. Use the source's coefficient phases for the latter order. Commuting $S$ through every power of the lowering operator, with the identical normalization in F2, gives the same scalar for every lowered vector. Comparing product-basis coefficients yields $C^{J',M}_{J,m;1,q}=\lambda_{J'}C^{J',M}_{1,q;J,m}$ for all $m,q,M$. In particular the proportionality is independent of both magnetic labels and component index. [F2, F4, F5, construct, algebra]

1.3 For rank zero, F3 permits only the input block as target. On that block the rank-zero tensor equation says that its sole component commutes with $J_z$ and $J_\pm$. The distinct magnetic eigenvalues of $J_z$ force it to be diagonal, and commuting with $J_+$ forces adjacent diagonal entries to be equal because its ladder coefficient is nonzero between consecutive magnetic labels. Thus it is a scalar multiple of the identity on $V_J$, including the one-dimensional case. Extended to $H$, it is a scalar multiple of the input-block projection $Q=\iota_J\pi_J$, and $QP=PQ=P$. [F1, F2, F3, algebra]

2.1 The spacing and step 1.1 meet the hypotheses of the explicit-operator criterion. Consequently the pair-product condition holds for the coherent Eq. (3) operators on the valid selected target branches, extended by zero outside the input block. Removing branches preserves that condition. [F4, step 1.1]

2.2 Fix a selected target block and a rank-one tensor family. By F3 each component is a common reduced scalar times the coherent component with coefficients $C^{J',m+q}_{J,m;1,q}$. If $J'$ is absent from the coupling list the family is zero. Otherwise step 1.2 converts these coefficients to the source's coupling order by one nonzero scalar. The nonzero component identification in F4 then makes each tensor component a scalar multiple of the corresponding Eq. (3) component; the scalar may depend on $q$, which does not affect membership in the linear span. Zero components need no additional generator. [F3, F4, step 1.2, algebra]

3.1 Each such extended operator $K_q$ also has scalar compression $PK_qP$. If its target spin differs from $J$, this compression is zero because the target block is orthogonal to the code. In the same block, a component with $q=\pm1$ has zero compression: a nonzero matrix element between supported magnetic labels would require their difference to be $q$, contrary to spacing. The remaining component is $L_0$, proportional to $J_z$, whose compression is scalar by step 1.1. Taking adjoints also gives scalar $PK_q^*P$. Since $PI_HP=P$, all pair products involving the ambient identity and these components are scalar, so adjoining $I_H$ to the family in step 2.1 preserves the pair-product condition. [F1, F2, F4, step 1.1, step 2.1, algebra]

4.1 The ambient identity and the valid Eq. (3) components satisfy the pair-product condition by step 3.1. Adjoining $Q$ preserves it: $PQ^*QP=P$, and for each operator $K$ of that family, $PQ^*KP=PKP$ and $PK^*QP=PK^*P$, which are scalar by pairing $K$ with $I_H$. Steps 2.2 and 1.3 place every generator of the stated tensor error span inside the span of this enlarged family. Sesquilinearity therefore gives $PE^*FP=c_{E,F}P$ for every $E,F$ in the full stated span. [F1, step 3.1, step 2.2, step 1.3, algebra] ∎
