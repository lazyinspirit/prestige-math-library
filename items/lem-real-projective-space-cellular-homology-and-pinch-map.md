---
id: lem-real-projective-space-cellular-homology-and-pinch-map
kind: lemma
title: Real projective space cellular homology and the pinch map
status: draft
origin: pipeline
pipeline_run: phase-2-next-20
deps: [thm-cellular-boundary-is-the-incidence-degree-matrix, thm-cellular-homology-computes-singular-homology, prop-cellular-maps-induce-cellular-chain-maps, prop-degree-of-identity-constant-reflection-and-antipodal-sphere-maps, thm-global-sphere-degree-is-the-sum-of-local-degrees, lem-local-sphere-orientations-and-finite-puncture-excision, cor-cohomology-over-a-field-is-dual-to-homology-over-that-field, def-axiom-of-choice]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  references:
    - title: Miller, section 17, printed pages 42–44; pinch map checked locally
      url: https://math.mit.edu/~hrm/papers/notes-905.pdf
---

## Statement

For each integer $m\ge0$, $\mathbb{RP}^m=S^m/(x\sim-x)$ has a CW structure with one cell in each dimension $0,\ldots,m$. Orientations can be chosen so its integral cellular complex has $C_j=\mathbb Z$ in these degrees, $d_j=2$ for positive even $j$, and $d_j=0$ for odd $j$. Consequently its integral homology is $\mathbb Z$ in degree zero, $\mathbb Z/2$ in odd degrees $0<j<m$, $\mathbb Z$ in degree $j=m$ when $m$ is odd, and zero otherwise. For $m=0$ only the degree-zero copy occurs.

The quotient $q:\mathbb{RP}^2\to\mathbb{RP}^2/\mathbb{RP}^1\cong S^2$ induces an isomorphism $H_2(\mathbb{RP}^2;\mathbb F_2)\to H_2(S^2;\mathbb F_2)$. Assuming AC, it therefore induces an isomorphism $q^*:H^2(S^2;\mathbb F_2)\to H^2(\mathbb{RP}^2;\mathbb F_2)$, both groups being $\mathbb F_2$.

## Facts & Assumptions

[F1] [[thm-cellular-boundary-is-the-incidence-degree-matrix]] computes boundary coefficients by the attaching map followed by collapse to the previous cell sphere; oriented edges have endpoint difference. [[thm-cellular-homology-computes-singular-homology]] identifies cellular and singular homology, naturally for cellular maps.

[F2] [[prop-degree-of-identity-constant-reflection-and-antipodal-sphere-maps]] gives antipodal degree $(-1)^{r+1}$ on $S^r$, $r\ge1$. [[lem-local-sphere-orientations-and-finite-puncture-excision]] identifies local orientation generators as restrictions of global ones, and [[thm-global-sphere-degree-is-the-sum-of-local-degrees]] sums the contributions of a finite fibre.

[F3] [[prop-cellular-maps-induce-cellular-chain-maps]] defines the chain maps from the actual relative skeletal maps for any abelian coefficient group, compatible with singular homology.

[F4] Under [[def-axiom-of-choice]], [[cor-cohomology-over-a-field-is-dual-to-homology-over-that-field]] identifies cohomology naturally with the full field dual of homology.

## Proof

**Given:** The finite integer $m\ge0$ and the quotient definition in the statement. AC is used only for the final application of [F4].

1.1 Regard $S^j$ as the unit sphere in $\mathbb R^{j+1}$ and let its last-coordinate upper hemisphere be $D^j$. In the antipodal quotient, each class outside the equatorial $S^{j-1}$ has a unique representative in its open upper hemisphere. The equator maps to $\mathbb{RP}^{j-1}$ by its antipodal quotient. Hence adjoining this closed hemisphere to $\mathbb{RP}^{j-1}$ attaches one $j$-disk by that equatorial quotient map. This is a homeomorphism of the attachment quotient with $\mathbb{RP}^j$: it is a continuous bijection from a compact space to a Hausdorff space. To check Hausdorffness here, two distinct antipodal orbits are finite disjoint subsets of the metric sphere, so sufficiently small disjoint neighborhoods of the two orbits may be chosen invariant under the antipodal map; their quotient images are disjoint open neighborhoods. Starting with $\mathbb{RP}^0=*$ and iterating these finite disk attachments gives the stated CW structure and the usual inclusions as skeleta. [given]

2.1 For $j\ge2$, the cellular incidence map is $f:S^{j-1}\to\mathbb{RP}^{j-1}/\mathbb{RP}^{j-2}\cong S^{j-1}$: quotient by antipodes and then collapse the lower skeleton. The preimage of the lower skeleton is the equatorial $S^{j-2}$. Off that equator, each of the two open hemispheres maps homeomorphically onto the open top cell in the target. Choose a point $y$ there, with preimages $x,-x$, and orient the characteristic $j$-disk so the local degree at $x$ is $+1$. Let $a$ be the antipodal map of the domain. Since $f a=f$, composition of the induced maps of local relative groups gives $\deg_x f=\deg_{-x}f\,\deg_x a$. The local degree of the homeomorphism $a$ equals its global degree: the global-to-local generator maps commute with $a$ and are isomorphisms by [F2]. Thus $\deg_x a=(-1)^j$ and $\deg_{-x}f=(-1)^j$. The finite-fibre formula yields $\deg f=1+(-1)^j$. With the preceding cell orientation fixed, the source cell can be oriented as above in each degree. By [F1], $d_j$ is therefore $2$ for even $j$ and zero for odd $j$. For $j=1$, both endpoints attach to the sole vertex, so $d_1=0$ directly, without a degree assertion for $S^0$. [F1, F2, step 1.1]

3.1 For $0<j<m$ even, $d_j=2$ is injective, so $H_j=0$. For $0<j<m$ odd, $d_j=0$ and $d_{j+1}=2$, so $H_j=\mathbb Z/2$. In top degree $m>0$, there is no incoming boundary: the kernel is $\mathbb Z$ for odd $m$ and zero for even $m$. In degree zero $d_1=0$ gives $H_0=\mathbb Z$. There are no chains above $m$ or below zero. [F1] transfers these cellular computations to integral singular homology. This also proves separately that $m=0$ is just the point case and $m=1$ has $H_0=H_1=\mathbb Z$. [F1, step 1.1, step 2.1]

3.2 With coefficients $\mathbb F_2$, each cellular group is $\mathbb F_2$ and every differential is zero. Indeed change of coefficients in the relative chain groups sends each oriented integral disk generator to the coefficient-one disk generator, and commutes with the defining connecting and quotient maps; hence the coefficients computed in step 2.1 reduce modulo two. These coefficient-one generators span each one-cell group, so this identifies its entire differential. For $\mathbb{RP}^2$ the resulting complex has one copy of $\mathbb F_2$ in degrees zero, one and two and zero differentials, in particular $H_2=\mathbb F_2$. [F1, F3, step 1.1, step 2.1]

4.1 Collapse $\mathbb{RP}^1$ in the disk attachment for $\mathbb{RP}^2$. This collapses the boundary of its characteristic $2$-disk and leaves its interior unchanged, so the quotient is $D^2/\partial D^2\cong S^2$ with one zero-cell and one two-cell. The map $q$ is cellular. Its map on degree-two cellular groups sends the characteristic disk generator to the same disk generator, since the composite characteristic disk map is the quotient $D^2\to D^2/\partial D^2$ used to define that target generator. Over $\mathbb F_2$ this is the identity, while the target degree-one group is zero. Both degree-two homology groups are their entire degree-two chain groups, so the cellular map induces an isomorphism. By [F3], this is the actual singular map $q_*$. [F1, F3, step 1.1, step 3.2]

5.1 Apply the natural field-duality isomorphism [F4] in degree two. Its naturality square identifies $q^*$ with precomposition by the isomorphism $q_*$ of step 4.1. Precomposition by an isomorphism has inverse precomposition by its inverse, so $q^*$ is an isomorphism as claimed. This uses singular cohomology throughout, with no assumption that a cellular cochain is a singular cochain. [F4, step 4.1]

6.1 The homology formula excludes negative degrees and handles the top degree separately, so it does not count the degree-zero group twice when $m=0$. For $m=2$ it gives $H_1=\mathbb Z/2$, $H_2=0$ integrally, while step 3.2 gives nonzero mod-two $H_2$; these are distinct coefficient assertions. Orienting the finitely many cells in a fixed $\mathbb{RP}^m$ makes only finite choices; the displayed local degrees are unchanged up to the controlled cell-orientation sign. The AC assumption in step 5.1 is inherited from field duality and is not used to prove the cellular boundary or integral homology calculation. [F1, F2, F3, F4, step 1.1, step 2.1, step 3.1, step 3.2, step 4.1, step 5.1] ∎
