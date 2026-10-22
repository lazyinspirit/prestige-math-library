---
id: lem-integral-khovanov-frobenius-algebra-defines-a-cobordism-functor
kind: lemma
title: "The integral Khovanov Frobenius algebra defines a closed cobordism functor"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps: [def-barnatan-tangle-cobordism-category, def-khovanov-frobenius-algebra-and-cube-of-resolutions, lem-finite-chart-surface-normal-forms-supply-jordan-disks-and-torsion-free-groups, lem-finite-c2-surface-carriers-have-smooth-normal-forms-and-relative-cap-approximations, def-countable-choice]
dependency_level: 4
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Dror Bar-Natan, Khovanov's homology for tangles and cobordisms, Definition 7.1 and Proposition 7.2"
      url: "https://arxiv.org/pdf/math/0410495v2"
      locator: "Published printed pp.1470–1471; actual integral algebra and S, T, four-tube calculation; functor existence and arbitrary gluing proved locally below"
---

## Statement

Assume countable choice. Let $\mathcal A=\mathbb Z[X]/(X^2)$, with $\deg1=1$, $\deg X=-1$, and structure maps $m,\eta,\Delta,\epsilon$ given by $\eta(1)=1$, $\epsilon(1)=0$, $\epsilon(X)=1$, $\Delta(1)=1\otimes X+X\otimes1$, and $\Delta(X)=X\otimes X$. There is an additive symmetric monoidal functor $F$ from the category of closed Bar-Natan smoothing cobordisms before local relations to finite free graded abelian groups. Here closed means that objects consist of circles, including the empty collection, and there are no vertical side intervals. The target has all integral linear maps, graded by their homogeneous degrees, and its symmetry is the ordinary interchange of tensor factors, without a Koszul sign from quantum degrees.

Explicitly, $F(C)$ is the free group on the labelings of the finite circle set of $C$ by $1,X$, graded by the sum of the label degrees. For a connected surface $\Sigma$ of genus $g$, with $p$ incoming and $q$ outgoing circles, its map in any temporary ordering of those circles is $F(\Sigma)=\Delta_q H^g m_p$, where $H=m\Delta$, $m_0=\eta$, $m_1=1_{\mathcal A}$, $m_p$ is iterated multiplication for $p\ge2$, $\Delta_0=\epsilon$, $\Delta_1=1_{\mathcal A}$ and $\Delta_q$ is iterated comultiplication for $q\ge2$. For a disconnected surface, take the tensor product over its connected components and route each factor to its actual boundary circle. The empty surface is sent to $1_{\mathbb Z}$. This construction is independent of all temporary orderings, respects embedded isotopy, stacking and disjoint union, sends the elementary birth, death, merge and split to $\eta,\epsilon,m,\Delta$, and sends a surface to a homogeneous map of degree $\chi(\Sigma)$. It respects S, T and four-tube and therefore descends to the closed Bar-Natan quotient category.

## Statement references

[[def-barnatan-tangle-cobordism-category]]

[[def-khovanov-frobenius-algebra-and-cube-of-resolutions]]

[[lem-finite-chart-surface-normal-forms-supply-jordan-disks-and-torsion-free-groups]]

[[lem-finite-c2-surface-carriers-have-smooth-normal-forms-and-relative-cap-approximations]]

[Bar-Natan, Definition 7.1 and Proposition 7.2](https://arxiv.org/pdf/math/0410495v2)

## Facts & Assumptions

**Given:** The category, algebra and formulas in the statement. A tensor product indexed by a finite circle set is identified with the free group on its $1,X$ labelings; integer scalars are the tensors on the empty set.

[F1] [[def-barnatan-tangle-cobordism-category]] defines the circle objects, properly embedded compact orientable surfaces with product collars, embedded isotopy, stacking, and the local S, T and four-tube relations.

[F2] [[def-khovanov-frobenius-algebra-and-cube-of-resolutions]] proves associativity, commutativity, the unit and counit identities, coassociativity, cocommutativity and both Frobenius identities for the displayed integral algebra. It gives degrees $-1$ for $m,\Delta$ and $+1$ for $\eta,\epsilon$.

[F3] [[lem-finite-chart-surface-normal-forms-supply-jordan-disks-and-torsion-free-groups]], clause 2, supplies finite surface normal forms under countable choice: a compact connected orientable surface with $b$ boundary circles has genus $g\ge0$ and $\chi=2-2g-b$.

[F4] [[lem-finite-c2-surface-carriers-have-smooth-normal-forms-and-relative-cap-approximations]] supplies smooth disk and Euler-characteristic-zero torus normal forms and collar-compatible disk parametrizations. Its finite smooth handle construction gives finite smooth disk-and-band models compatible with boundary collars.

[A1] [[def-countable-choice]] is used through [F3] and [F4]. Circle orderings, component orderings, basis sums and spanning trees below involve only finite sets and add no choice principle.

## Proof

1.1 Each surface has finitely many connected components and boundary circles: finitely many connected manifold charts cover a compact surface and meet every component, and the same argument applies to its compact one-dimensional boundary. For a surface with boundary, form its smooth double using the reflected product collars. It is an oriented boundaryless smooth surface containing the original surface as a compact subsurface. Thus [F3] applies in both the closed and boundary cases. Euler characteristic and the genus determined by $2-2g-b$ are invariant under a smooth diffeomorphism and hence under an embedded isotopy. In particular the formula in the statement uses actual invariants of the given surface, including knotted embeddings; it does not require that its embedding be a standard picture. Disk and torus components have the stated smooth models by [F4]. [F1, F3, F4, A1, construct]

1.2 Put $\langle a,b\rangle=\epsilon(ab)$. In the ordered basis $1,X$ this pairing has matrix $\begin{pmatrix}0&1\\1&0\end{pmatrix}$, whose inverse is the same integral matrix. In particular it is perfect over $\mathbb Z$, with dual bases $e_0=1,e_1=X$ and $e^0=X,e^1=1$. Hence $a=\sum_i\epsilon(ae_i)e^i$ and $\sum_i\epsilon(Ae_i)\epsilon(e^iB)=\epsilon(AB)$. Their tensor powers are also perfect, including the empty tensor pairing on $\mathbb Z$. Moreover $\sum_i e_i e^i=2X$ and $H(a)=m\Delta(a)=2Xa$, directly on the two basis elements. All these identities are integral; no scalar is inverted. [F2, algebra]

2.1 Define $F(\Sigma)$ by the stated component formula, first using arbitrary finite boundary and component orderings. Associativity and commutativity make $m_p$ invariant under all permutations of its $p$ inputs. Coassociativity and cocommutativity make $\Delta_q$ invariant under all permutations of its $q$ outputs. Thus changing the temporary input or output order conjugates the map by precisely the corresponding ordinary tensor permutations. Permuting component blocks has the same effect, by bilinearity of the ordinary tensor product. On the canonical labeling modules this is the same map, so the construction uses no objectwise choice of a circle ordering. The genus and boundary incidences in step 1.1 give invariance under embedded isotopy. Extend by integral linearity to the source morphism groups. [F1, F2, step 1.1, construct, algebra]

2.2 Consider stacking two cobordisms and form a finite graph with one vertex for each connected component of either surface and one edge for each glued intermediate circle. The connected components of this graph are precisely those of the glued surface. Within a connected graph component with $v$ vertices and $e$ edges, let the component genera be $g_1,\ldots,g_v$, and let its unglued boundary count be $b$. Use [F3], clause 1, on the smooth doubles, including the finite graph of boundary circles in the one-skeleton; cutting along those circles gives finite cell structures on the original surfaces. Subdividing the finitely many boundary edges and transporting the gluing circle parametrizations gives matching finite cell structures for gluing. The alternating cell count then subtracts the circle characteristic zero; subdivision does not change that count. Therefore $2-2G-b=\sum_j(2-2g_j-b_j)=2v-2\sum_jg_j-b-2e$, where $G$ is the genus after gluing and $\sum_jb_j=b+2e$. Thus $G=\sum_jg_j+e-v+1$. This includes an isolated vertex, for which $e=0,v=1$, and a final component with no external boundary. [F1, F3, F4, A1, step 1.1, construct, algebra]

3.1 The comultiplication is adjoint to multiplication for these pairings: $\langle\Delta(a),b\otimes c\rangle=\epsilon(abc)$. This follows from the Frobenius and counit identities in [F2], or directly from its two values of $\Delta$. Iterating gives $\langle\Delta_q(a),b_1\otimes\cdots\otimes b_q\rangle=\epsilon(a\prod_jb_j)$ for every $q\ge0$; for $q=0$ this is exactly the definition $\Delta_0=\epsilon$. Consequently the connected map in step 2.1 has multilinear form $\epsilon((2X)^g a_1\cdots a_p b_1\cdots b_q)$ after pairing its outputs against $b_1,\ldots,b_q$. For $p=0$ the input product is $1$ by $m_0=\eta$; the formula also includes $p=q=0$. Perfection in step 1.2 implies that these forms determine all the maps uniquely. [F2, step 2.1, step 1.2, algebra]

3.2 The degrees of $m_p$ and $\Delta_q$ are $1-p$ and $1-q$ for all $p,q\ge0$, including the unit and counit cases. Since $H$ has degree $-2$, the connected map has degree $(1-q)-2g+(1-p)=2-2g-p-q=\chi(\Sigma)$ by [F3]. Tensor products add these degrees on disconnected surfaces. Zero maps, including spheres, are homogeneous of the indicated degree as well. Thus the integral linear extension is a graded functor: every homogeneous source morphism goes to a map of that degree, and a sum of source degrees goes to the corresponding sum of homogeneous maps. [F2, F3, step 2.1, algebra]

4.1 In terms of the forms of step 3.1, composition contracts the two ends of each graph edge by the dual bases of step 1.2. Indeed expanding an intermediate tensor as $\sum_{i_1,\ldots,i_k}\langle z,e_{i_1}\otimes\cdots\otimes e_{i_k}\rangle e^{i_1}\otimes\cdots\otimes e^{i_k}$ is exactly composition of the two maps. Choose a spanning tree in a connected graph component. Contract its edges one at a time. Each tree edge joins two distinct current vertices, and the identity $\sum_i\epsilon(Ae_i)\epsilon(e^iB)=\epsilon(AB)$ merges their two vertex forms into one, adding their handle exponents. After the $v-1$ tree edges the remaining $e-v+1$ edges are loops on that merged vertex. Each loop inserts $\sum_i e_i e^i=2X$ into its product. Thus the final form is $\epsilon((2X)^{\sum_jg_j+e-v+1}\prod\text{external labels})$. By step 2.2 this is the form for the actual glued surface. Tensoring over graph components and using perfection proves $F(\Sigma_2\circ\Sigma_1)=F(\Sigma_2)F(\Sigma_1)$. Multiple edges, loops after contraction, components with only incoming or only outgoing circles, and components with no external circles are all covered by this same finite calculation. [step 1.2, step 3.1, step 2.2, construct, algebra]

5.1 An identity annulus has $g=0,p=q=1$, so its map is $1_{\mathcal A}$; the empty identity is $1_{\mathbb Z}$. Thus step 4.1 proves an actual functor. The formula sends the birth disk, death disk, merging pants and splitting pants respectively to $\eta,\epsilon,m,\Delta$. On disjoint unions it is the tensor product by construction; on a symmetry cobordism its annular components route the labels by the corresponding permutation. The labeling identifications $F(C\sqcup C')\cong F(C)\otimes F(C')$ satisfy associativity, unit and symmetry coherence because each takes a labeling to its restrictions on the indicated circle sets. Hence the functor is additive and symmetric monoidal with the ordinary tensor symmetry, independently of the quantum degrees. Cochain Koszul signs concern later totalization of complexes and do not enter this surface functor. [F1, F2, step 2.1, step 4.1, algebra]

6.1 Finally a sphere is sent to $\epsilon\eta=0$, and a torus to $\epsilon H\eta=2$. For four-tube, cut out the local ball containing the four disk patches. Regard the four disk boundaries as four outgoing circles. If $u_i$ denotes the tensor with $X$ at position $i$ and $1$ at the other three positions, tubing patches $i,j$ gives the vector $u_i+u_j$: the local annulus has map $\Delta\eta(1)=1\otimes X+X\otimes1$ on those two circles, and the other disks give $1$. Thus the vectors for $12+34$ and $13+24$ are both $u_1+u_2+u_3+u_4$. To reinsert any surrounding surface, contract these four outputs against its four exposed boundary circles using step 1.2. The proof of step 4.1 applies to this arbitrary abstract boundary gluing as well: it used only the incidence graph and the Euler characteristic of circle gluing, with no time-order or embedding-normal-form hypothesis. Hence the equal local vectors give equal maps in every surrounding cobordism. This verifies the full local relation, not only its empty surrounding case. All defining relations of the quotient in [F1] are therefore respected, and the actual functor descends to that quotient, as claimed. [F1, F2, step 1.2, step 3.1, step 4.1, step 5.1, algebra] ∎
