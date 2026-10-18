---
id: lem-modular-hom-state-spaces-have-exact-sewing-inverses
kind: lemma
title: "Modular Hom state spaces have exact sewing inverses and the dimension formula"
status: published
dependency_level: 5
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
proof_strategy: direct
deps:
  - def-rt-state-spaces
  - def-modular-ribbon-category-and-hopf-link-data
  - def-rigid-object-and-rigid-monoidal-category
  - def-pivotal-structure
  - def-fusion-and-multifusion-category
  - thm-mac-lane-coherence-in-the-canonical-map-form
  - thm-algebraic-verlinde-formula
  - lem-modular-hopf-matrix-squared
  - lem-balancing-and-hopf-link-character-identity
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Bakalov and Kirillov, Lectures on Tensor Categories and Modular Functor"
      url: "https://www.math.stonybrook.edu/~kirillov/tensor/tensor.ps.gz"
      locator: "Sections 5.1 and 5.8 for state-space/sewing context; both Hom-coordinate inverses are proved locally."
---

## Statement

Fix a complex modular ribbon fusion category and its state-space convention in [[def-rt-state-spaces]], with $H=\bigoplus_i i\otimes i^*$ and $S=s/D$. On a disconnected surface take the tensor product of the connected Hom state spaces, with empty value $\mathbb C$. Write $r_i:i\otimes i^*\to\mathbf1$ and $b_i^R:\mathbf1\to i^*\otimes i$ for the corresponding right evaluation and coevaluation. With fixed tensor order and parametrizations, separating sewing is the isomorphism

$$G:\bigoplus_i\operatorname{Hom}(\mathbf1,X\otimes i)\otimes\operatorname{Hom}(\mathbf1,i^*\otimes Y)\longrightarrow\operatorname{Hom}(\mathbf1,X\otimes Y),\qquad G_i(f\otimes k)=(1_X\otimes r_i\otimes1_Y)(f\otimes k).$$

For any simple-summand inclusions $g_{i\alpha}:i^*\to X$ and composition-dual projections $p_{i\alpha}:X\to i^*$, its inverse is

$$F(z)=\sum_{i,\alpha}((g_{i\alpha}\otimes1_i)b_i^R)\otimes((p_{i\alpha}\otimes1_Y)z).$$

For nonseparating sewing the direct-sum inclusions/projections $u_i:i\otimes i^*\to H$, $v_i:H\to i\otimes i^*$ give mutually inverse maps

$$G((z_i)_i)=\sum_i(1_X\otimes u_i)z_i,\qquad F(z)=((1_X\otimes v_i)z)_i.$$

These maps retain every multiplicity coordinate, are independent of auxiliary bases, are natural on uncut factors, and commute for disjoint cut pairs with fixed compatible tensor order. Thus iterated algebraic sewing has the explicit reverse cutting inverse. For simple marked labels,

$$\dim\operatorname{Hom}(\mathbf1,i_1\otimes\cdots\otimes i_n\otimes H^{\otimes g})=\sum_x S_{0x}^{\,2-2g-n}\prod_{r=1}^n S_{i_rx}.$$

These are algebraic state-space identities. Identification with presentation-independent bordism sewing requires the separately constructed RT functor; no surgery move theorem is a hypothesis or conclusion here.

## Facts & Assumptions

**Given:** The complex modular category, fixed tensor orders, and finite Hom state spaces in the Statement.

[F1] The state spaces are the stated Hom spaces with the finite handle object ([[def-rt-state-spaces]], [[def-modular-ribbon-category-and-hopf-link-data]]).

[F2] Rigidity gives evaluation/coevaluation snakes, and the pivotal comparison identifies the right-dual object with the chosen $i^*$ ([[def-rigid-object-and-rigid-monoidal-category]], [[def-pivotal-structure]]).

[F3] Finite semisimplicity supplies simple-summand inclusions/projections, scalar simple endomorphisms and zero Hom between distinct simples ([[def-fusion-and-multifusion-category]]).

[F4] Canonical associator changes between the same fixed tensor words agree ([[thm-mac-lane-coherence-in-the-canonical-map-form]]).

[F5] Algebraic Verlinde holds with no conjugation, $S$ is symmetric with $S^2=C$, and its dual-label symmetries and Hopf-link characters have the stated fusion convention ([[thm-algebraic-verlinde-formula]], [[lem-modular-hopf-matrix-squared]], [[lem-balancing-and-hopf-link-character-identity]]).

## Proof

1.1 Choose the right-duality maps on $i^*$ induced by the pivotal structure. Concretely, from the left maps $b_i,e_i$ and pivotal $j_i$, take $b_i^R=(1_{i^*}\otimes j_i^{-1})b_{i^*}$ and $r_i=e_{i^*}(j_i\otimes1_{i^*})$. The left snakes for $i^*$, with naturality and tensor compatibility of $j$, give $(r_i\otimes1_i)(1_i\otimes b_i^R)=1_i$ and $(1_{i^*}\otimes r_i)(b_i^R\otimes1_{i^*})=1_{i^*}$. These also follow directly from the right-dual data in [F2]. Fix all parentheses through [F4]. Finite semisimplicity gives $p_{i\alpha}g_{j\beta}=\delta_{ij}\delta_{\alpha\beta}1_{i^*}$ and $\sum g_{i\alpha}p_{i\alpha}=1_X$. The maps $G,F$ are therefore typed finite sums between the specified Hom spaces. [F1, F2, F3, F4, construct]

2.1 Substitute the displayed $F$ into $G$. Interchange separates the middle composite into the right snake $(1_{i^*}\otimes r_i)(b_i^R\otimes1_{i^*})=1_{i^*}$. Thus $GF(z)=\sum_{i,\alpha}(g_{i\alpha}p_{i\alpha}\otimes1_Y)z=z$. No dimension scalar appears because the projections are composition-dual, not trace-dual. [F2, F3, step 1.1, algebra]

3.1 Conversely, for $f:\mathbf1\to X\otimes i$ put $g_f=(1_X\otimes r_i)(f\otimes1_{i^*}):i^*\to X$. The other right snake gives $f=(g_f\otimes1_i)b_i^R$. In $F(G_i(f\otimes k))$, the $j\beta$ term contains $p_{j\beta}g_f:i^*\to j^*$, which is zero for $j\ne i$ and a scalar $\gamma_\beta$ for $j=i$. The same snake gives its second factor as $\gamma_\beta k$. The sum of the first factors multiplied by those scalars is $(\sum_\beta g_{i\beta}p_{i\beta}g_f\otimes1_i)b_i^R=f$. Hence $FG_i(f\otimes k)=f\otimes k$. Decomposable tensors span each finite tensor product, so $FG=1$ on the entire direct sum, including zero Hom blocks. A basis change $g'=gA$, $p'=A^{-1}p$ cancels in the finite sum for $F$, proving independence of all auxiliary summand bases. [F2, F3, step 1.1, step 2.1, algebra]

4.1 For a nonseparating cut, [F1] and direct-sum additivity identify the target with the stated Hom space into $X\otimes H$. Its inclusions and projections satisfy $\sum_i u_iv_i=1_H$ and $v_iu_j=\delta_{ij}1_{i\otimes i^*}$. Thus $GF=1$ and the $(i,j)$ block of $FG$ is $\delta_{ij}1$, exactly as in the Statement. All multiplicity coordinates remain inside their Hom spaces; none is removed by these simple-label sums. [F1, F3, step 3.1, algebra]

5.1 Naturality on every uncut factor follows by composing the written evaluation, inclusion and projection words and using bifunctoriality; the inverse is natural because it is the inverse of that same map. For two disjoint cut pairs, expand their two finite resolutions before any contraction. Evaluations or inclusions on distinct leg pairs commute by interchange. For separating cuts, insert the actual identities $\sum gp=1$ at their two seams; both orders give the same product of coupon inclusions and projections, regrouped as finite sums. If one summand is produced by the first cut, applying its resolution of identity gives the same all-cuts coupon word. Associators comparing the two fixed tensor words agree by [F4]. Adjacent swaps therefore identify every ordering of finitely many disjoint cuts. Composing the reverse cutting maps cancels each adjacent $F/G$ pair by steps 2.1–3.1. This proves iterated algebraic sewing and its full inverse, with empty sums and empty cut lists included. [F2, F3, F4, step 2.1, step 3.1, step 4.1, algebra]

6.1 The three-marked sphere has dimension $N_{i_1i_2}^{i_3^*}$; by [F5] this equals $\sum_x S_{i_1x}S_{i_2x}S_{i_3x}/S_{0x}$. The zero-, one- and two-marked spheres follow from the corresponding entries of $S^2=C$: their dimensions are $1$, $\delta_{i0}$ and $\delta_{i,j^*}$. Sewing pants and handles using the proved inverse maps gives all finite products with $H^{\otimes g}$. At a separating seam the simple-label sum is $\sum_a S_{ax}S_{a^*y}=\delta_{xy}$, by symmetry, dual-label symmetry and $S^2=C$. At a nonseparating seam its same-index value is $1$. Combining the powers of $S_{0x}$ gives exactly $2-2g-n$. Induction over the finite seam list proves the displayed dimension formula for every $g,n\ge0$. In particular the unmarked torus dimension is $|I|$. This proves an algebraic identity from actual Hom decompositions and Verlinde; it makes no unproved assertion about surgery independence. [F1, F3, F5, step 3.1, step 4.1, step 5.1, algebra] ∎
