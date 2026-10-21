---
id: lem-fiber-outer-grading-and-integral-cut-euler-matrix
kind: lemma
title: "Outer fiber grading and the integral cut Euler matrix"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - lem-integral-sutured-floer-compactness-and-orientations
  - lem-marked-fiber-admits-a-sutured-surface-diagram
  - def-top-alexander-grading-of-knot-floer-homology
  - def-sutured-floer-chain-complex
  - def-balanced-taut-sutured-manifold-and-product-region
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Juhasz, Floer homology and surface decompositions"
      url: "https://arxiv.org/pdf/math/0609779v3"
    - title: "Ozsvath and Szabo, Holomorphic disks and topological invariants for closed three-manifolds"
      url: "https://arxiv.org/pdf/math/0101206"
    - title: "Sarkar and Wang, An algorithm for computing some Heegaard Floer homologies"
      url: "https://arxiv.org/pdf/math/0607777v4"
    - title: "Ni, Knot Floer homology detects fibred knots"
      url: "https://arxiv.org/pdf/math/0607156v4"
---

## Statement

For the actual marked Seifert surface of genus g, oriented as minus the fiber for the cut, an adapted generator x has Alexander degree g minus the number of its interior polygon coordinates. Thus the top degree-g generators are exactly the outer generators and correspond to the cut diagram generators with their ordered intersection signs. If the integral top homology is one copy of the integers, the actual cut incidence matrix is unimodular, the cut is an integral homology product, and its periodic-domain group vanishes.

## Facts & Assumptions

[F1] [[lem-integral-sutured-floer-compactness-and-orientations]] supplies its stated definitions or proved operator/construction interface at its stated scope.

[F2] [[lem-marked-fiber-admits-a-sutured-surface-diagram]] supplies its stated definitions or proved operator/construction interface at its stated scope.

[F3] [[def-top-alexander-grading-of-knot-floer-homology]] supplies its stated definitions or proved operator/construction interface at its stated scope.

[F4] [[def-sutured-floer-chain-complex]] supplies its stated definitions or proved operator/construction interface at its stated scope.

[F5] [[def-balanced-taut-sutured-manifold-and-product-region]] supplies its stated definitions or proved operator/construction interface at its stated scope.

## Proof

**Given:** The actual diagrams, markings, orientation classes, and admissibility hypotheses in the statement.

1.1 The actual binding bridge and drilled diagram carry the oriented Seifert surface and its page framing. Set S=−F, with the orientation used for the sutured cut. Use the meridional boundary trivialization t_μ from the Alexander definition, not a trivialization transported from an unmarked closed diagram. [construct]

1.2 **The relative Euler obstruction.** Represent a generator's relative Spin^c structure by its Morse vector field with the selected index-one/index-two trajectories removed and locally replaced by the standard nonvanishing fields. On S project its orthogonal plane field to TS away from these local trajectory patches. Its relative Euler obstruction is the sum of three contributions: the tangent Euler number χ(S); the half-index at each crossing of ∂S with a suture; and the rotation correction of the specified boundary trivialization. A crossing contributes −1/2: in the oriented sutured collar the positive and negative normal fields are joined by a half-turn opposite the positive tangent boundary rotation. The two meridional crossings therefore give I(S)=−1. The page longitude and the actual meridional collar frame have zero extra rotation relative to one another, so r(S,t_μ)=0. This uses the actual fiber marking; a different longitude framing would change this term. [construct]

1.3 For an outer field no selected trajectory pierces the interior of S. Hence its obstruction is χ(S)+I(S)−r(S,t_μ)=(1−2g)−1=−2g. At an interior coordinate of the adapted polygon, the Morse replacement has the local model of a trajectory piercing S once. The orthogonal two-plane frame on the boundary of that small patch turns twice positively relative to the outer model: one turn from each side of the removed trajectory tube. Its relative obstruction therefore increases by two. The patches are disjoint and all other local frames agree. If n_P(x) counts the generator coordinates in the polygon interior, additivity of the relative Euler obstruction gives [construct]

1.4 ⟨c₁(s(x),t_μ),[−F]⟩ = −2g+2n_P(x), A_F(x) = ½⟨c₁(s(x),t_μ),[F]⟩ = g−n_P(x). [construct]

1.5 Thus no generator has Alexander degree greater than g, and its degree is g exactly when it is outer. The local sign is fixed by orienting S=−F and by the carried page longitude; reversing S reverses the Chern evaluation. This proves the absolute anchor, not merely a relative difference of Alexander gradings. [construct]

1.6 **The actual cut generator set.** In the cut/double surface diagram, a generator cannot enter the forbidden copy of P: the α and β boundary conditions occupy its opposite copies. Every generator is therefore the unique lift of an outer generator, and every outer generator lifts. This correspondence preserves the ordered α/β intersection signs, since each intersection neighborhood is copied with its surface orientation. Consequently the Euler sum of the top Alexander module is exactly the signed intersection sum of the cut diagram. This is the generator-level identification used in the integral matrix reduction before asserting a signed differential comparison. [construct]

2.1 Research donor for the Ni original, 2026-10-20. This proves the homology-product operation once the actual signed sutured complex has been constructed. It supplies neither that construction nor the product-detection theorem. [construct]

2.2 **Claim with exact inputs.** Assume Countable Choice as used by the general real-strip Fredholm supplier. Let $(\Sigma,\boldsymbol\alpha,\boldsymbol\beta)$ be an actual finite transverse balanced sutured diagram for a connected oriented compact three-manifold $M$. Suppose its compressed lower and upper surfaces $R_-$ and $R_+$ are connected. There are $d$ curves in each family, and both compressed surfaces have nonempty boundary. Supply the actual finite integral disk-count complex $C$, with differential squaring to zero and counting index-one Whitney strips. No absolute Maslov grading, rational-homology-sphere hypothesis, or three-sphere comparison is assumed. [construct]

2.3 If the total integral homology of this supplied complex is $\mathbb Z$, then [construct]

2.4 $$H_*(M,R_-;\mathbb Z)=H_*(M,R_+;\mathbb Z)=0.$$ [construct]

2.5 Thus $M$ is an integral homology product. The conclusion is weaker than being a product sutured manifold and does not imply fiberedness by itself. [construct]

2.6 **1. The exact relative handle matrix.** Orient and order the attaching curves. Set $I_{ij}=\alpha_i\cdot\beta_j$, using the oriented surface intersection number. Compressing $\Sigma$ along all alpha curves gives $R_-$. In the diagram's handle description the lower compression body is obtained by attaching two-handles to $\Sigma\times[-1,0]$ at the lower end. Reverse this description: it is $R_-\times[0,1]$ with $d$ one-handles. The alpha circles on its upper boundary are precisely their belt circles. There are no additional zero-handles: the compressed surface is the connected nonempty $R_-$, and no closed compressed component is present in a balanced diagram. The upper beta compressions attach $d$ two-handles. They give the diagram-defined $M$; by the same balance condition no sphere or other closed compressed component requires a three-handle. [construct]

2.7 The relative cellular handle complex for $(M,R_-)$ is therefore [construct]

2.8 $$0\longrightarrow\mathbb Z^d\xrightarrow{\ I\ }\mathbb Z^d\longrightarrow0,$$ [construct]

2.9 in degrees two and one. To verify the matrix, push each attaching beta circle slightly into the boundary transverse to the one-handle belt circles. An oriented traversal through the $i$th one-handle contributes $+1$ or $-1$ according to its crossing of the oriented belt circle $\alpha_i$. Collapsing the one-handle cores to their relative one-cells reads exactly this sum as the degree of the beta attaching circle on that cell. Thus its $i,j$ incidence number is $\alpha_i\cdot\beta_j$, after choosing the corresponding core orientations. Changing one handle orientation multiplies its row or column by $-1$, which has no effect on unimodularity. This is the actual relative handle complex, not a closed-manifold $H_1(Y)$ presentation. [construct]

2.10 Applying the reversed construction from $R_+$ gives the transpose matrix up to row and column signs, with the surface orientation reversed if necessary. Consequently it is enough to prove $\det I=\pm1$. [construct]

2.11 **2. A parity needing no three-sphere normalization.** For every generator $\mathbf x$ let $\sigma_{\mathbf x}$ be the permutation matching its ordered alpha labels to its ordered beta labels, and put [construct]

2.12 $$q(\mathbf x)=\operatorname{sgn}(\sigma_{\mathbf x})\prod_{i=1}^d\operatorname{sgn}_{\Sigma}(\alpha_i',\beta_{\sigma_{\mathbf x}(i)}')(x_i).$$ [construct]

2.13 This is a globally defined sign on all generators, including generators in different Spin-c classes. Expanding the determinant by permutations and expanding each algebraic intersection sum gives [construct]

2.14 $$\sum_{\mathbf x}q(\mathbf x)=\det I.$$ [construct]

2.15 The sign of the actual intersection of the ordered product tori is $\epsilon(\mathbf x)=c_dq(\mathbf x)$, with $c_d=(-1)^{d(d-1)/2}$. Indeed the tangent columns are the $d$ alpha vectors followed by the $d$ beta vectors. Reorder beta vectors to the matching alpha slots, giving $\operatorname{sgn}\sigma_{\mathbf x}$, and interleave the two blocks into their oriented surface-coordinate planes, giving $c_d$. The remaining two-dimensional determinants are exactly the local surface signs above. Symmetric coordinates add no real orientation sign, because a permutation of complex coordinate factors preserves real orientation. [construct]

2.16 For each Whitney strip actually counted in $C$, [construct]

2.17 $$(-1)^{\mu(\phi)}=\epsilon(\mathbf x)\epsilon(\mathbf y)=q(\mathbf x)q(\mathbf y).$$ [construct]

2.18 Here is precisely the general operator calculation used, without importing an $S^3$ grading statement. Orient the two pulled-back boundary bundles by their global ordered product-circle frames. The real-frame construction in `lem-geometric-strip-linearization-frame-and-fredholm-index`, steps 2.1--6.1, compares the two transported terminal boundary frames with the chosen terminal complex frame by signs $\sigma_0,\sigma_1$. It constructs $\ell=p-2k$, with $(-1)^p=\sigma_0\sigma_1$, and proves that the index of the actual strip operator is $-\ell$. Therefore its index parity is $\sigma_0\sigma_1$. At the two endpoints the complex changes of coordinates have positive real determinant; the remaining real basis comparison is exactly the ratio of the ordered-torus intersection signs. Thus $\sigma_0\sigma_1=\epsilon(\mathbf x)\epsilon(\mathbf y)$, proving the formula. One may choose the actual product-integrable endpoint charts furnished by that supplier so its exact end hypothesis applies. No generator-to-generator Whitney class is required when no such class occurs, no equality of Spin-c labels is needed across unrelated generators, and no absolute even/odd origin is chosen by total $\widehat{HF}(S^3)$. [construct]

2.19 Every counted differential strip has index one, so the differential reverses $q$. Regard $C$ as a finite parity complex, even for $q=+1$ and odd for $q=-1$. Its Euler characteristic is consequently $\det I$. [construct]

2.20 **3. Unimodularity and integral acyclicity.** Tensor $C$ with $\mathbb Q$. Tensoring by this localization is exact, so its total homology is $\mathbb Q$ by the supplied integral homology hypothesis. Its two parity homologies form a direct sum with total dimension one; one has dimension one and the other zero. Hence its Euler characteristic is $+1$ or $-1$. [construct]

2.21 For completeness the equality of Euler characteristics of this finite parity complex and its homology uses only rank-nullity. If its two differential matrices have ranks $r_+$ and $r_-$, then the homology dimensions are $\dim C^+-r_+-r_-$ and $\dim C^--r_--r_+$. Their difference is $\dim C^+-\dim C^-$. This proves [construct]

2.22 $$\det I=\chi(C\otimes\mathbb Q)=\pm1.$$ [construct]

2.23 The adjugate identity now gives an integer inverse $I^{-1}=(\det I)^{-1}\operatorname{adj}(I)$. Therefore the actual relative handle complex in section 1 is acyclic over $\mathbb Z$. Its reversed counterpart from $R_+$ is acyclic as well. These complexes compute the two asserted relative homology groups, completing the claim. When $d=0$ the empty matrix has determinant one, and the same argument reads directly as the empty relative handle complex. [construct]

2.24 **Original use and exact reading.** For a knot cut along its connected Seifert surface, $R_-$ and $R_+$ are copies of that surface and so satisfy the connectedness hypotheses. Once the missing signed surface-decomposition comparison identifies its actual sutured homology with the original integral top Alexander group $\mathbb Z$, this proved operation gives the full integral homology-product conclusion needed at the start of Ni's argument. It replaces the homology-reduction operation only; characteristic product regions, horizontal and annular decomposition, taut nonvanishing, and Gabai's surfaces remain separate obligations. [construct]

2.25 Actual local sources read fully in this session: `items/lem-geometric-strip-linearization-frame-and-fredholm-index.md`, `items/lem-finite-ended-cauchy-riemann-relative-index-is-compact-determinant-winding.md`, and `items/lem-s-three-local-intersection-signs-determine-normalized-maslov-parity.md`. Only the first supplier's general strip operator calculation is invoked in the proof above. The last item's three-sphere normalization is not invoked; its finite ordered-intersection expansion motivated the separate calculation in section 2. The relative handle presentation and integral determinant conclusion are supplied explicitly here. No new independent review or canonical proof-acceptance claim is made. [construct] ∎
