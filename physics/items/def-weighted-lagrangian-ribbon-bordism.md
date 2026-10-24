---
id: def-weighted-lagrangian-ribbon-bordism
kind: definition
title: "Weighted Lagrangian ribbon bordisms"
status: published
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 2
deps: [lem-maslov-correction-composes-for-lagrangian-relations, thm-mayer-vietoris-sequence-in-singular-homology, thm-collar-neighborhood-theorem, thm-homotopy-equivalences-induce-isomorphisms-on-singular-homology, def-modular-ribbon-category-and-hopf-link-data, def-oriented-smooth-cobordism, def-intersection-form-on-the-homology-of-a-closed-oriented-surface, def-isotropic-coisotropic-symplectic-and-lagrangian-subspaces, def-axiom-of-choice, lem-3-manifold-boundary-kernel-is-lagrangian, lem-lagrangian-relation-sends-lagrangian-to-lagrangian, lem-maslov-index-four-lagrangian-cocycle]
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Walker, On Witten’s 3-Manifold Invariants, §§1 and 18"
      url: "https://canyon23.net/math/1991TQFTNotes.pdf"
    - title: "Bakalov and Kirillov, Lectures on Tensor Categories and Modular Functor, §§4.1 and 5.7"
      url: "https://www.math.stonybrook.edu/~kirillov/tensor/tensor.ps.gz"
---

## Definition

Assume full AC ([[def-axiom-of-choice]]), inherited from the surface intersection and boundary-kernel duality suppliers.

An object is a closed oriented surface $\Sigma$ with a fixed finite collection of marked points carrying simple labels of the complex modular ribbon fusion category and pairwise disjoint oriented embedded interval germs through those points (the ribbon-end arcs), together with a Lagrangian subspace $\lambda\subset H_1(\Sigma;\mathbb R)$ for the signed intersection form. An elementary morphism is an oriented compact smooth 3-bordism $M:\Sigma_0\to\Sigma_1$ with product collars and fixed boundary parametrizations, a properly embedded colored ribbon graph whose ends match the marked labels and, in the fixed product collars, are exactly the products of those ribbon-end arcs with the collar interval, and an integer weight $n\in\mathbb Z$. Boundary parametrizations preserve these oriented arc germs. Reversing a boundary orientation dualizes its labels and reverses its oriented ribbon-end arcs. Composition glues the identical product ribbon germs through the common parametrized surface, with no interpolating twist.

For any closed oriented surface $\Sigma$, the intersection convention is $\omega_\Sigma([\alpha],[\beta])=$ the signed intersection number in which the tangent to $\alpha$ followed by the tangent to $\beta$ gives the surface orientation. For a bordism $M:\Sigma_0\to\Sigma_1$, write $j_r$ for the inclusion maps into $H_1(M;\mathbb R)$ and set

$$\Lambda_M=\{(x_0,x_1)\in H_1(\Sigma_0;\mathbb R)\oplus H_1(\Sigma_1;\mathbb R):j_0x_0=j_1x_1\}.$$

Give the product the form $-\omega_{\Sigma_0}\oplus\omega_{\Sigma_1}$. The boundary-kernel lemma applied to $\partial M$ gives the relation with $j_0x_0=-j_1x_1$; changing the sign of the second coordinate is symplectic and gives exactly $\Lambda_M$. Hence $\Lambda_M$ is Lagrangian ([[lem-3-manifold-boundary-kernel-is-lagrangian]]).

For composable bordisms $M_1:\Sigma_0\to\Sigma_1$ and $M_2:\Sigma_1\to\Sigma_2$, put $A=\Lambda_{M_1}$ and $B=\Lambda_{M_2}$. For a relation $R\subseteq\overline V\oplus W$, write $R(L)=\{w:\exists v\in L,(v,w)\in R\}$ and $R^t(Q)=\{v:\exists w\in Q,(v,w)\in R\}$. These use the inclusion maps into each individual bordism. The three Lagrangians for composition lie in the middle surface:

$$K_1=A(\lambda_0),\qquad K_0=\lambda_1,\qquad K_2=B^t(\lambda_2)\quad\subseteq H_1(\Sigma_1;\mathbb R).$$

They are Lagrangian by [[lem-lagrangian-relation-sends-lagrangian-to-lagrangian]], applied also to the transposed relation. With the Wall-form sign fixed in [[lem-maslov-index-four-lagrangian-cocycle]], define

$$n(M_2\circ M_1)=n_2+n_1+\mu(K_1,K_0,K_2).$$

For mapping cylinders of symplectic maps $f_1,f_2$, the index is $\mu(f_1\lambda_0,\lambda_1,f_2^{-1}\lambda_2)=\mu(f_2f_1\lambda_0,f_2\lambda_1,\lambda_2)$. This is Walker's prescribed sign and order. For arbitrary bordisms, replacing the individual relations by homology maps into the glued manifold is not part of the definition.

Identity bordisms are cylinders with the product ribbons on the specified arcs and weight zero. Disjoint union takes the disjoint union of geometric data, the direct sum of the surface Lagrangians, and the sum of weights. The empty surface is the monoidal unit. Bordisms are identified by orientation-preserving diffeomorphisms respecting collars, parametrizations, ribbon data and weights; smoothing glued collars is understood up to these identifications. Associativity and the weight, unit and disjoint-union laws follow from the relation identity in [[lem-maslov-correction-composes-for-lagrangian-relations]] and the proof below. This defines the weighted category before any RT functor is asserted. The equality between its correction and a surgery-signature defect remains a separate obligation of [[thm-weighted-rt-tqft-and-factorization]]; no unweighted TQFT is asserted.

## Facts & Assumptions

**Given:** Full AC and a complex modular ribbon fusion category, closed oriented labeled surfaces with Lagrangians, and compact oriented smooth bordisms with the fixed collars and boundary parametrizations.

[F1] Under full AC, for a compact oriented three-manifold, the kernel of the boundary inclusion map is Lagrangian for the signed boundary intersection form ([[lem-3-manifold-boundary-kernel-is-lagrangian]]).

[F2] If $\Lambda\subseteq\overline V\oplus W$ is a Lagrangian relation and $L\subseteq V$ is Lagrangian, its reduction $R_\Lambda(L)$ is Lagrangian in $W$ ([[lem-lagrangian-relation-sends-lagrangian-to-lagrangian]]).

[F3] The signature convention $\mu$ is the Wall form sign, agrees with the cyclic Maslov form after the proved sign conversion, and satisfies the four-Lagrangian cocycle ([[lem-maslov-index-four-lagrangian-cocycle]]).

[F4] The middle-relation Maslov correction satisfies the relation cocycle, vanishes when either relation is the identity of its specified object, adds under direct sums and has the stated mapping-cylinder formula ([[lem-maslov-correction-composes-for-lagrangian-relations]]).

[F5] Mayer–Vietoris is exact at the direct sum of the homology of two open sets; collars give an open cover of a glued bordism retracting onto its two pieces with intersection retracting onto the common surface, and these retractions induce homology isomorphisms ([[thm-mayer-vietoris-sequence-in-singular-homology]], [[thm-collar-neighborhood-theorem]], [[thm-homotopy-equivalences-induce-isomorphisms-on-singular-homology]]).

## Proof

1.1 The boundary inclusion kernel consists of pairs with $j_0x_0+j_1x_1=0$. It is Lagrangian by [F1] for $-\omega_{\Sigma_0}\oplus\omega_{\Sigma_1}$. The linear map $(x_0,x_1)\mapsto(x_0,-x_1)$ preserves that form and sends this kernel to $\Lambda_M=\{j_0x_0=j_1x_1\}$. Thus each individual bordism defines a Lagrangian relation. [F1, given, algebra]

2.1 Transposing a Lagrangian relation reverses the sign of its symplectic form and preserves its Lagrangian property. Hence [F2] shows that $A(\lambda_0)$ and $B^t(\lambda_2)$ are Lagrangian; the third space is the specified $\lambda_1$. The Wall form in [F3] therefore defines exactly the middle-surface integer in the Definition, without any transversality or injectivity assumption. [F2, F3, step 1.1, algebra]

2.2 Let $M=M_2\circ M_1$. Choose an open cover by extending each piece a short distance into the other through its product collar. In the collar coordinate, pushing that short extension linearly back to the seam is a deformation retraction onto the original piece; their intersection is a surface times an interval and retracts onto the common surface. By [F5], Mayer–Vietoris therefore gives exactness of $H_1(\Sigma_1)\to H_1(M_1)\oplus H_1(M_2)\to H_1(M)$ at the middle term, with first arrow $y\mapsto(j_1y,-j_1'y)$. If an incoming class $x_0$ and outgoing class $x_2$ become equal in $H_1(M)$, their difference $(j_0x_0,-j_2x_2)$ lies in the image of that arrow. Hence some $y$ satisfies $j_0x_0=j_1y$ inside $M_1$ and $j_1'y=j_2x_2$ inside $M_2$. Conversely these two equalities imply equality in the union. Thus $\Lambda_M=BA$ as actual relations. Disconnected surfaces cause no exception: the proof uses exactness at the $H_1$ direct sum and makes no injectivity assertion involving $H_0$. [F5, step 1.1, algebra]

3.1 For three composable bordisms, their underlying relations compose by step 2.2. Apply [F4] with the four specified object Lagrangians. Its identity $m(B,A)+m(C,BA)=m(C,B)+m(CB,A)$ says precisely that the total correction, and therefore the total integer weight, agrees in both bracketings. The underlying geometric gluings agree up to the collar-respecting diffeomorphism that merely changes the placement of the two seams. At each seam the boundary parametrizations identify the same oriented arc germs and their product ribbons. Thus the glued ribbon germ is already smooth and fixed; changing collar lengths neither chooses an interpolation nor inserts a twist. The same two product seams occur in both bracketings. Thus weighted composition is associative on the stated diffeomorphism classes. [F4, step 2.2, algebra]

4.1 An identity cylinder has diagonal relation, so either one-sided correction has two equal Lagrangians and vanishes by [F4]. Its zero weight therefore gives the two identity laws. Surface homology, inclusion relations and Wall forms split as direct sums under disjoint union; [F4] makes corrections and weights add. The empty surface has zero homology and zero correction. Disjoint-union associators and symmetry cylinders permute these direct-sum data and have zero correction whenever their transported Lagrangians agree. Consequently the ordinary geometric symmetric-monoidal identifications respect all weights, units and composition laws. [F4, step 3.1, algebra]

5.1 For mapping cylinders the relations are graphs of $f_1,f_2$. The three middle Lagrangians are $f_1\lambda_0,\lambda_1,f_2^{-1}\lambda_2$. Symplectic invariance in [F4] transports them by $f_2$ and gives exactly $\mu(f_2f_1\lambda_0,f_2\lambda_1,\lambda_2)$. This proves the declared mapping-cylinder convention and finishes the category construction independently of the later surgery-defined RT maps. [F4, step 2.1, step 4.1, algebra] ∎
