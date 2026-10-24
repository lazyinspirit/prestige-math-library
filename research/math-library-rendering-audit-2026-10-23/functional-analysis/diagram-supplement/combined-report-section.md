# Functional Analysis diagram-candidate supplement

Candidates are source-supported optional diagrams from the primary review; they remain uncertain pending independent adjudication.

## Candidate 1: `ex-riesz-projection-for-a-matrix-with-separated-spectrum`

- Reviewer lanes: 06.
- Diagram kind: spectral-plane contour and eigenspace map.
- Why considered: A compact figure can make the contour separation and resulting spectral summands immediately visible, while the local source gives exact coordinates, contour, map and output projection.
- Concrete content/check: Complex plane with points 1 and 2, positively oriented radius-1/2 circle around 1; alongside C^2 coordinate arrows e1↦1·e1 and e2↦2·e2, and projection P_E(e1)=e1, P_E(e2)=0. Mark range Ce1 and kernel Ce2. Preserve orientation and the circle’s exclusion of 2.
- Frozen source lines: 26, 39, 43, 47, 48, 49, 61, 65.
- Source SHA-256: `57b884a32d31f9e9499ce788534c55a47c561d2fcc89a63d2d52964abe86c36b`.
- Local screenshot evidence: `ex-riesz-projection-for-a-matrix-with-separated-spectrum--02.png` (`8e01c1612a6a6727efc799e40f16064aad244b9963bcaefd41332e60f247c2cb`).

## Candidate 2: `lem-canonical-map-is-natural`

- Reviewer lanes: 01.
- Diagram kind: naturality commutative square (optional TikZ/tikzcd).
- Why considered: The exact assertion is naturality of the canonical evaluation map and has a standard square whose commutativity is the theorem itself; a diagram would clarify four map directions at a glance.
- Concrete content/check: Top: X --T--> Y. Left: J_X: X -> X**. Right: J_Y: Y -> Y**. Bottom: T**: X** -> Y**. Mark the equality T** o J_X = J_Y o T.
- Frozen source lines: 27, 39, 41.
- Source SHA-256: `dbadaa91315cfe18f09c00f1534b76ea1d4ba7d87fcf0135f525ec088f6d1e88`.
- Local screenshot evidence: `lem-canonical-map-is-natural--01.png` (`59f2de4d85b4eff02885e3fa9dd33a1b84abcd44b3932074f3be486f70ff342a`).

## Candidate 3: `lem-fredholm-splitting-and-parametrix`

- Reviewer lanes: 03.
- Diagram kind: Fredholm direct-sum / parametrix map diagram.
- Why considered: The Statement gives two complementary direct sums, a restricted isomorphism, an explicitly defined partial inverse, and two finite-rank defect maps. A compact diagram could make domains, codomains, and the two different defect spaces easier to inspect. The prose and formulas themselves are sufficient; this is uncertain editorial value, not a rendering or mathematical defect.
- Concrete content/check: A split-map diagram showing X = ker(T) ⊕ X₁, Y = ran(T) ⊕ Y₀, with T zero on ker(T) and T|X₁ an isomorphism onto ran(T); indicate U=(T|X₁)⁻¹ and S=U on ran(T), S=0 on Y₀. Mark ST as the projection onto X₁ along ker(T), TS as the projection onto ran(T) along Y₀, and the finite-dimensional defect ranges ran(ST−I)=ker(T) and ran(TS−I)=Y₀.
- Frozen source lines: 35, 39, 42, 44, 45, 72, 74, 76.
- Source SHA-256: `edf7db1cbc2e81aa025963ef8a6c4ce321fa54b2d3f19f8a8f6211f67c19b11d`.
- Local screenshot evidence: `lem-fredholm-splitting-and-parametrix--01.png` (`a7bb1ff0272b199fb265cb578e6330ab60ce9a2a558527dc93f27f32cc30d90b`), `lem-fredholm-splitting-and-parametrix--02.png` (`9470d3ee67531612b3f35ba55a97a60fbd46b7deb0b7e2729e360f8f42645f27`), `lem-fredholm-splitting-and-parametrix--03.png` (`1662ca511eae562842b3b78c5fe4ed6698cc0707c3c47bb725000abe2f656a53`).

## Candidate 4: `thm-bounded-left-inverse-iff-range-is-complemented`

- Reviewer lanes: 06.
- Diagram kind: operator factorization / projection diagram.
- Why considered: The equivalence is explicitly a map-factorization statement across X, ran(T), and Y; one commuting/factorization diagram can clarify which composites are identities/projections.
- Concrete content/check: Show X --T--> ran(T) ↪ Y, R:ran(T)→X with RT=I_X on the range; in the forward direction show P=TS:Y→ran(T) and P^2=P; in the reverse direction show S=R∘P and ST=I_X. Do not imply T is onto Y.
- Frozen source lines: 39, 42, 50, 66.
- Source SHA-256: `7b3002281004ee79e66e22d77c615a739e7160ffa42a8d738dc17fe13ed72c16`.
- Local screenshot evidence: `thm-bounded-left-inverse-iff-range-is-complemented--02.png` (`b4f0acd8440597262399fcc2859fe8d45e6e99f559d488ef46896a4a487e4e9a`).

## Candidate 5: `thm-commutative-gelfand-duality`

- Reviewer lanes: 10.
- Diagram kind: optional-commutative-diagrams-for-contravariant-naturality.
- Why considered: The Statement asserts a contravariant equivalence, defines both arrow pullbacks/transposes, and states that evaluation and Gelfand identifications are natural and mutually inverse. Commutative diagrams would make map direction and naturality identities easier to verify; prose remains complete and no correctness issue was found in the preview.
- Concrete content/check: Draw naturality squares. For continuous g:X→Y, show C(g):C(Y)→C(X) and the induced spectrum map Δ(C(X))→Δ(C(Y)), with η_X and η_Y and the commuting evaluation square. For unital *-homomorphism φ:A→B, draw A→B above C(Δ(A))→C(Δ(B)), vertical maps Γ_A and Γ_B and bottom arrow pullback along Δ(φ):Δ(B)→Δ(A); label Γ_B∘φ=(Δφ)^*∘Γ_A.
- Frozen source lines: 39, 41, 44, 45, 47, 49.
- Source SHA-256: `1b684cdb48d086a8469e4fc3d491e4b2e174cdc7fe25ddd3d74c9df6915499a7`.
- Local screenshot evidence: `thm-commutative-gelfand-duality--01.png` (`6093d37462d2b7a14e3827dc7cd34283d0acfb49b9212f44459d7eb692174fa2`).

## Candidate 6: `thm-completion-universal-property-for-bounded-linear-maps`

- Reviewer lanes: 07.
- Diagram kind: optional-commutative-extension-diagram.
- Why considered: The central claim is a compatibility relation between the completion embedding and the extended operator, which a small commutative triangle can make immediately visible. The existing equation and prose proof are complete, so no diagram is needed for correctness.
- Concrete content/check: Nodes X, X-hat, Y; arrows i:X→X-hat, T:X→Y, and T-hat:X-hat→Y; mark T-hat∘i=T. Use arrow direction exactly as stated.
- Frozen source lines: 36, 37, 38, 41, 42, 43, 44, 68.
- Source SHA-256: `35d81e461e19bb02a142fc12c57c6a7e8275237cf33af6a1c0ff86b6176b7c25`.
- Local screenshot evidence: `thm-completion-universal-property-for-bounded-linear-maps--01.png` (`d6b11ff8062b8dad6f15b1b578dad4ed62df5b2729d98661557763b1c81eaf35`), `thm-completion-universal-property-for-bounded-linear-maps--02.png` (`e925dcf77d2613b5eee9bb87bcec0fe4b67bb1ec1968d94c0713c65c7cadb026`).

## Candidate 7: `thm-fredholm-index-is-additive`

- Reviewer lanes: 04, 04.
- Diagram kind: finite exact-sequence schematic.
- Why considered: The proof introduces six spaces and five maps, then verifies exactness in two long steps before telescoping dimensions. A linear exact-sequence schematic could make those map domains and the cancellation easier to scan, without adding a premise or proof content.
- Concrete content/check: Draw the objects V1,...,V6 in order and arrows α, β, γ, δ, ε as defined on line 48, with zero objects at the ends. Mark exactness at each Vi as proved in lines 52 and 54. The arrow labels must retain their source and target: α(x)=x, β(x)=Tx, γ(y)=y+ran T, δ(y+ran T)=Uy+ran(UT), ε(z+ran(UT))=z+ran U.
- Frozen source lines: 48, 50, 52, 54, 56, 58.
- Source SHA-256: `90f9b4fc6cd3423af6b85a20c1b8b412a9095152b928ecf8a81da759e4d627c5`.
- Local screenshot evidence: `thm-fredholm-index-is-additive--01.png` (`6c4ea1cdbe2f94b115ebce76b08f75faa44b364581c67de0e4adf51cc0e87a36`), `thm-fredholm-index-is-additive--02.png` (`030965032f1afdb6e56e3c7853815eedea35fcbf136911617e6bebf503ce9095`).
