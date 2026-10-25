---
id: lem-cg-affine-type-crystallographic-alcove-diagrams
kind: lemma
title: "Crystallographic alcove diagrams: the affine list realized by Weyl types A–G"
status: published
origin: pipeline
pipeline_run: frontier-42-coxeter-32
dependency_level: 16
deps:
  - def-cg-standard-affine-diagrams
  - lem-cg-positive-radical-and-affine-gram-exclusions
  - def-cg-crystallographic-scaling-coroot-and-lattice
  - lem-cg-integer-pairings-and-allowed-dihedral-labels
  - thm-cg-crystallographic-finite-type-and-lattice-stability
  - def-cg-affine-root-hyperplane-reflection-and-alcove
  - lem-cg-highest-root-and-fundamental-alcove
  - lem-cg-affine-point-stabilizers-and-vertex-residues
  - thm-cg-affine-alcove-transitivity-presentation-and-length
  - prop-highest-root-exists-and-is-unique-in-an-irreducible-finite-root-system
  - ex-classical-root-systems-in-euclidean-coordinates
  - thm-rank-two-root-system-classification
  - prop-the-weyl-group-is-finite-and-acts-faithfully-on-the-root-system
  - def-reduced-crystallographic-euclidean-root-system
  - def-coroot-and-dual-root-system
  - def-weyl-group-of-a-root-system
  - def-root-lattice-coroot-lattice-weight-lattice-and-coweight-lattice
  - thm-simple-roots-form-a-basis-and-every-root-has-one-sign-of-integral-coordinates
  - def-positive-system-and-base-of-simple-roots
  - def-height-of-a-root-and-highest-root
  - def-linear-basis
  - def-graph-isomorphism-and-complement
  - def-cartan-matrix-of-a-based-root-system
  - def-bilinear-symmetric-skew-and-alternating-forms
  - def-definiteness-inertia-and-signature-data-over-the-reals
  - lem-cg-affine-reflection-identities-and-local-finiteness
  - thm-a-based-root-system-is-determined-up-to-isomorphism-by-its-cartan-matrix
  - def-geometric-simplex-spanned-by-affinely-independent-vertices
  - lem-cg-reflection-form-invariance-and-rank-two-orders
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "A. W. Knapp, Lie Groups Beyond an Introduction, 2nd ed., Appendix C: Data for Simple Lie Algebras"
      url: "https://www.math.stonybrook.edu/~aknapp/download/Beyond2-clickable.pdf"
      locator: "Classical irreducible reduced root systems and Exceptional irreducible reduced root systems, printed pp. 684–692 (PDF pp. 702–710). The tables give root sets and simple bases and identify the last exceptional root listed as the largest. Knapp's F4 numbering on printed p. 691 is the reverse of this item's Bourbaki numbering: its highest-root vector (2,4,3,2) becomes (2,3,4,2) after reversal. The G2 numbering on printed p. 692 has alpha1 short and alpha2 long, as here. Candidate membership and maximality are proved locally in Steps 1.1–3.1."
    - title: "M. W. Davis, The Geometry and Topology of Coxeter Groups, author manuscript"
      url: "https://people.math.osu.edu/davis.12/davisbook.pdf"
      locator: "Section 6.4, Example 6.4.1 and Theorem 6.4.3 with its proof, printed pp. 82–84 (PDF pp. 98–100): the example treats the rank-one infinite-dihedral case; the theorem assumes dimension at least two and gives the presentation/fundamental-domain result for a simple convex polytope with dihedral angles integral submultiples of π."
    - title: "R. Xiong, Lectures on Affine Weyl Groups"
      url: "https://cubicbear.github.io/doc/affineNotes.pdf"
      locator: "Chapter 2, §§2.1–2.13, PDF pp. 11–14: the coroot-lattice semidirect product, affine simple reflection from the highest root, untwisted affine diagrams, and the affine Weyl group Coxeter-group statement. This is a convention comparison; the proved local alcove generation and presentation theorem provides the group-theoretic proof inputs."
    - title: "M. W. Davis, The Geometry and Topology of Coxeter Groups, author manuscript"
      url: "https://people.math.osu.edu/davis.12/davisbook.pdf"
      locator: "Section 6.9, Table 6.1, printed p. 104 (PDF p. 120), and Appendix C.2, Lemma C.2.2, printed pp. 435–436 (PDF pp. 451–452): the standard spherical/Euclidean diagram list and the semidefinite corank-one property of its Euclidean column. The item proves the matrix claims directly from the alcove normals and the local positive-radical lemma."
verification:
  audited: "2026-10-08"
---

## Statement

Let $\Phi\ne\varnothing$ be an irreducible reduced crystallographic Euclidean root system with positive system and base $\Delta=\{\alpha_1,\ldots,\alpha_n\}$. Its finite Weyl group and chosen simple-root lengths give a crystallographic scaling of the finite Coxeter form; by [[thm-cg-crystallographic-finite-type-and-lattice-stability]] the based finite type is one of $A_n$ ($n\ge1$), $B_n$ or $C_n$ ($n\ge2$), $D_n$ ($n\ge4$), $E_6,E_7,E_8,F_4$, or $G_2$. The root lengths of $\Phi$ are part of the chosen root system: in particular the two rank-two systems denoted $B_2$ and $C_2$ have the same finite Coxeter diagram but the two dual root-length assignments. Use the standard simple-root numbering: the classical coordinate bases of [[ex-classical-root-systems-in-euclidean-coordinates]], Bourbaki numbering for $E_6,E_7,E_8,F_4$, and $\alpha_1$ short and $\alpha_2$ long for $G_2$. Let $\theta$ be the highest root and let
$$A_\Phi:=\{x\in E:(x,\alpha_i)>0\ (1\le i\le n),\ (x,\theta)<1\}$$
be the fundamental alcove of [[lem-cg-highest-root-and-fundamental-alcove]]. Put $s_0=r_{\theta,1}$ and $s_i=r_{\alpha_i,0}$ for $1\le i\le n$, and define $m^\Phi_{ij}:=\operatorname{ord}(s_is_j)$, allowing $m^\Phi_{ij}=\infty$.

**(1) Highest-root table and affine labels.** The highest roots and the new labels from the affine facet $H_{\theta,1}$ are as follows; all unlisted $m^\Phi_{0i}$ equal $2$, and the entries $m^\Phi_{ij}$ for $i,j\ge1$ are the finite-type labels.

- $A_n$: $\theta=\alpha_1+\cdots+\alpha_n$. If $n=1$, $m^\Phi_{01}=\infty$. If $n\ge2$, $m^\Phi_{01}=m^\Phi_{0n}=3$.
- $B_n$: $\theta=\alpha_1+2\alpha_2+\cdots+2\alpha_n$. For $n\ge3$, $m^\Phi_{02}=3$; for $n=2$, $m^\Phi_{02}=4$.
- $C_n$: $\theta=2\alpha_1+\cdots+2\alpha_{n-1}+\alpha_n$ and $m^\Phi_{01}=4$.
- $D_n$: $\theta=\alpha_1+2\alpha_2+\cdots+2\alpha_{n-2}+\alpha_{n-1}+\alpha_n$ and $m^\Phi_{02}=3$.
- $E_6$: $\theta=\alpha_1+2\alpha_2+2\alpha_3+3\alpha_4+2\alpha_5+\alpha_6$ and $m^\Phi_{02}=3$.
- $E_7$: $\theta=2\alpha_1+2\alpha_2+3\alpha_3+4\alpha_4+3\alpha_5+2\alpha_6+\alpha_7$ and $m^\Phi_{01}=3$.
- $E_8$: $\theta=2\alpha_1+3\alpha_2+4\alpha_3+6\alpha_4+5\alpha_5+4\alpha_6+3\alpha_7+2\alpha_8$ and $m^\Phi_{08}=3$.
- $F_4$: $\theta=2\alpha_1+3\alpha_2+4\alpha_3+2\alpha_4$ and $m^\Phi_{01}=3$.
- $G_2$: $\theta=3\alpha_1+2\alpha_2$, with $m^\Phi_{02}=3$, $m^\Phi_{01}=2$, and $m^\Phi_{12}=6$.

Thus $m^\Phi$ is the standard affine diagram of the corresponding line of [[def-cg-standard-affine-diagrams]]; for $B_2$ and $C_2$ it is the common path with labels $(4,4)$.

**(2) Facet-normal Gram matrix.** The inward unit normals of $A_\Phi$ are $u_0=-\theta/\|\theta\|$ and $u_i=\alpha_i/\|\alpha_i\|$ for $i\ge1$. Their Gram matrix is the cosine matrix of $m^\Phi$:
$$ (u_i,u_j)=-\cos(\pi/m^\Phi_{ij}), $$
where $\cos(\pi/\infty)=1$. Hence the facet-reflection matrix of $A_\Phi$ equals the cosine matrix of the displayed affine diagram.

**(3) Semidefinite consequences.** For every standard affine diagram $D$, its cosine matrix $C_D$ is positive semidefinite of corank one and has a kernel vector with every coordinate positive. Every proper principal submatrix of $C_D$ is positive definite; the empty principal submatrix case is vacuous.

**(4) Surjectivity.** Every standard affine diagram occurs in (1): $\tilde A_1$ is obtained from $A_1$; $\tilde A_n$ from $A_n$ for $n\ge2$; $\tilde B_n$ from $B_n$ for $n\ge3$; $\tilde B_2=\tilde C_2$ from either $B_2$ or $C_2$; and $\tilde C_n$ from $C_n$ for $n\ge2$, $\tilde D_n$ from $D_n$ for $n\ge4$, and $\tilde E_6,\tilde E_7,\tilde E_8,\tilde F_4,\tilde G_2$ from their matching finite types. The aliases $\tilde D_3=\tilde A_3$, $\tilde E_4=\tilde A_4$, and $\tilde E_5=\tilde D_5$ are therefore realized by $A_3,A_4,D_5$, respectively. The convention $\tilde C_1:=\tilde A_1$ is covered by $A_1$.

**(5) Affine Weyl group and simplex reflection presentation.** The assignment from the standard generators of the abstract Coxeter group $W(m^\Phi)$ to $s_0,\ldots,s_n$ is an isomorphism onto $W_a(\Phi)$, and
$$W_a(\Phi)=Q^\vee\rtimes W(\Phi).$$
Thus each standard affine diagram is the Coxeter diagram of a Euclidean simplex reflection group with fundamental alcove $A_\Phi$. In rank one the two endpoint hyperplanes are disjoint and their product has infinite order.

**(6) Verification data.** The coefficient vectors in (1) are those of the highest roots in the stated standard numbering. For simply laced types $A,D,E$, the values $2c_i-\sum_{j\sim i}c_j$ for $\theta=\sum_i c_i\alpha_i$ give the displayed attachment node (and for $A_1$ the single value is $2$). For $B,C,F,G$, the coordinate root models and the root-length ratios give exactly the normalized pairings recorded in the proof below. The $B_2/C_2$ coincidence is only a coincidence of the finite Coxeter diagram; the two root-length assignments are both included.

**(7) Non-isomorphism.** Apart from the naming conventions $\tilde C_1=\tilde A_1$, $\tilde B_2=\tilde C_2$, $\tilde D_3=\tilde A_3$, $\tilde E_4=\tilde A_4$, and $\tilde E_5=\tilde D_5$ in [[def-cg-standard-affine-diagrams]], the diagrams in clauses (1)–(6) of that definition are pairwise non-isomorphic as labelled graphs. No twisted affine diagrams or extended affine Weyl group $P^\vee\rtimes W$ are asserted here. No choice principle is used.

## Facts & Assumptions

**Given:** The finite irreducible reduced crystallographic root system $\Phi$, its positive system and base $\Delta$, highest root $\theta$, Weyl group $W(\Phi)$, root and coroot lattices, and the affine hyperplanes and reflections of [[def-cg-affine-root-hyperplane-reflection-and-alcove]].

[F1] The system is finite and reduced; the positive system has base $\Delta$; the simple roots form a basis; positive roots have nonnegative integral simple-root coordinates; the highest root exists, is unique, dominates every positive root, and is dominant against every positive root ([[def-reduced-crystallographic-euclidean-root-system]], [[def-positive-system-and-base-of-simple-roots]], [[def-height-of-a-root-and-highest-root]], [[def-linear-basis]], [[thm-simple-roots-form-a-basis-and-every-root-has-one-sign-of-integral-coordinates]], [[prop-highest-root-exists-and-is-unique-in-an-irreducible-finite-root-system]]).

[F2] The standard coordinate root systems of types $A_n,B_n,C_n,D_n$ and their simple-root bases are as in [[ex-classical-root-systems-in-euclidean-coordinates]]. In particular these include $B_2$ and $C_2$; the latter has $\alpha_1=e_1-e_2$, $\alpha_2=2e_2$.

[F3] The exceptional based diagrams use Bourbaki numbering: the $E$ chain is $1-3-4-5-6$ (continued through $7,8$ when present), with node $2$ attached to $4$. For $F_4$, in order $1,2,3,4$ the squared simple lengths are proportional to $(2,2,1,1)$ and its Cartan matrix has rows $(2,-1,0,0),(-1,2,-1,0),(0,-2,2,-1),(0,0,-1,2)$. For $G_2$, $\alpha_1$ is short, the squared lengths are proportional to $(2,6)$ and $(\alpha_1,\alpha_2)=-3$ in that normalization. These are the based type and length data of [F7], not assertions of membership or maximality of a table vector. A linear map between based root systems with the same Cartan matrix carries their simple roots and roots correspondingly ([[thm-a-based-root-system-is-determined-up-to-isomorphism-by-its-cartan-matrix]]).

[F4] The coroot is $\alpha^\vee=2\alpha/(\alpha,\alpha)$; the affine reflections satisfy $r_{\alpha,k}=t_{k\alpha^\vee}s_\alpha$, $r_{\alpha,0}=s_\alpha$, and $r_{\alpha,1}r_{\alpha,0}=t_{\alpha^\vee}$; by definition $Q^\vee$ is generated by the coroots of all roots, and $W$ preserves both the root system and the inner product ([[def-coroot-and-dual-root-system]], [[lem-cg-affine-reflection-identities-and-local-finiteness]], [[def-cg-affine-root-hyperplane-reflection-and-alcove]], [[def-root-lattice-coroot-lattice-weight-lattice-and-coweight-lattice]], [[def-weyl-group-of-a-root-system]]).

[F5] The closed fundamental alcove is a bounded geometric simplex with exactly the walls $H_{\alpha_i,0}$ and $H_{\theta,1}$ as its facets; its open interior is an alcove ([[lem-cg-highest-root-and-fundamental-alcove]] (2)).

[F6] For the finite simple roots, the orders of products of their reflections are the finite Coxeter labels. For an affine facet paired with a finite facet, the rank-two mirror angle is $\pi/m$ for $m\in\{2,3,4,6\}$ when the walls meet; the rank-one endpoint case has disjoint walls and $m=\infty$ ([[def-weyl-group-of-a-root-system]], [[lem-cg-affine-point-stabilizers-and-vertex-residues]] (2), [[thm-rank-two-root-system-classification]]).

[F7] The Weyl group of $\Phi$ is finite. The normalized simple roots form a basis; their pairwise inner products are the Coxeter-form entries $-\cos(\pi/m_{ij})$ by the rank-two root-angle classification, so identifying $e_i$ with $\alpha_i/\|\alpha_i\|$ identifies the Coxeter form with their positive-definite Gram form. Set $c_i=\|\alpha_i\|$ in the Coxeter scaling definition. Its scaled Cartan entry is $a_{ij}=2(\alpha_i,\alpha_j)/\|\alpha_j\|^2=C_{ji}$, the transpose of the usual based Cartan matrix $C$ of $\Phi$ ([[def-cg-crystallographic-scaling-coroot-and-lattice]], [[def-cartan-matrix-of-a-based-root-system]]); hence the scaling is crystallographic. The scaled-root theorem [[thm-cg-crystallographic-finite-type-and-lattice-stability]] (1)–(2) gives exactly the finite crystallographic types $A,B,C,D,E,F,G$ with their standard ranks and the $B_n/C_n$ dual length assignments. Its root system $\Phi_c$ has based Cartan matrix $A^T=C$, so [[thm-a-based-root-system-is-determined-up-to-isomorphism-by-its-cartan-matrix]] identifies $\Phi_c$ with $\Phi$. Since $\Phi_c=\bigcup_i\rho(W)a_i$ by the scaling definition and reflections preserve the form, every root has one of the simple-root lengths; [F15] transports these lengths up to a common positive factor. Thus every root has squared length at most $M:=\max_i\|\alpha_i\|^2$, including the short-root orbits. The finiteness and angle inputs are [[prop-the-weyl-group-is-finite-and-acts-faithfully-on-the-root-system]] and [[thm-rank-two-root-system-classification]].

[F8] Across a label-$3$ edge the squared simple-root lengths are equal; across label $4$ their ratio is $2$ or $1/2$, and across label $6$ it is $3$ or $1/3$. The Cartan products are $0,1,2,3$ ([[def-cg-crystallographic-scaling-coroot-and-lattice]], [[lem-cg-integer-pairings-and-allowed-dihedral-labels]] (1)–(2)).

[F9] A connected positive-semidefinite cosine matrix with nonzero radical has a positive radical vector, radical of dimension one, and positive-definite proper principal submatrices ([[lem-cg-positive-radical-and-affine-gram-exclusions]] (1)–(2)).

[F10] The standard affine diagrams have the explicit graph recipes in [[def-cg-standard-affine-diagrams]] (1)–(6); every graph in those clauses is connected. Their low-rank aliases are recorded separately in [F16].

[F11] The local theorem [[thm-cg-affine-alcove-transitivity-presentation-and-length]] (1) proves that the fundamental facet reflections generate $W_a$; (2) proves that the homomorphism from their actual Coxeter presentation to $W_a$ is an isomorphism, including rank one. These are the precise generation and presentation inputs.

[F12] For an $n$-simplex with $n\ge2$, two distinct facets share the hull of the $n-1$ vertices omitted by neither facet, a codimension-two face by affine independence ([[def-geometric-simplex-spanned-by-affinely-independent-vertices]]). In its two-dimensional normal section, the inward normals make an angle supplementary to the interior wedge angle: the two boundary rays are perpendicular to the respective inward normals. Thus their pairing is the negative cosine of the interior dihedral angle. For $n=1$ the two facets are distinct endpoints.

[F13] A graph isomorphism preserves vertex count, degrees, and adjacency; for the Coxeter diagrams defined in [[def-cg-standard-affine-diagrams]] (1)–(6), the labels attached to corresponding edges are part of the labelled-graph isomorphism data ([[def-graph-isomorphism-and-complement]]).

[F14] The inner product on $E$ is symmetric and positive definite; for vectors $u_i$ and scalars $x_i$, the Gram quadratic form is $\sum_{i,j}x_ix_j(u_i,u_j)=\|\sum_i x_i u_i\|^2\ge0$ ([[def-bilinear-symmetric-skew-and-alternating-forms]], [[def-definiteness-inertia-and-signature-data-over-the-reals]]).

[F15] If two based root systems on a connected diagram have the same Cartan matrix $C$, then their simple-root Gram matrices $G,G'$ are positive scalar multiples. Indeed, from $C_{ij}=2G_{ij}/G_{ii}$, an edge $i\sim j$ gives $C_{ij}G_{ii}=2G_{ij}=2G_{ji}=C_{ji}G_{jj}$, so the Cartan entries determine the ratio of adjacent squared lengths; connectedness fixes all diagonal entries up to one common scalar, and the same formula fixes all off-diagonal entries. Consequently normalized pairings of corresponding linear combinations of simple roots agree ([[def-cartan-matrix-of-a-based-root-system]]).

[F16] The low-rank naming conventions are $\tilde C_1=\tilde A_1$, $\tilde B_2=\tilde C_2$, $\tilde D_3=\tilde A_3$, $\tilde E_4=\tilde A_4$, and $\tilde E_5=\tilde D_5$ ([[def-cg-standard-affine-diagrams]] (7)).

[F17] Two unit normals with pairing $-\cos(\pi/m)$ for finite $m\ge2$ give a positive-definite rank-two Gram form, and the product of their linear reflections has exact order $m$ ([[lem-cg-reflection-form-invariance-and-rank-two-orders]] (3)(i),(iii)–(iv)). To apply this to two intersecting affine walls, translate an intersection point to the origin and identify their normal span with that rank-two plane; both reflections fix its orthogonal complement.

## Proof

**Proof technique:** establish candidate membership and maximality locally, compute the alcove normals, and apply the positive-radical lemma and the proved local affine presentation. All computations are finite and explicit; no Choice is used.

1.1 By [F7] the finite crystallographic type is among the rows in (1). Define a candidate $t$ by the coefficient vector in its row. In the classical coordinate systems [F2], $t$ is respectively $e_1-e_{n+1}$, $e_1+e_2$, $2e_1$, and $e_1+e_2$ for $A,B,C,D$, so it is a root; expansion gives the displayed coefficients, including $(1,2)$ for $B_2$ and $(2,1)$ for $C_2$. For simply laced $A,D,E$, put $L^2=\|\alpha_i\|^2$. Their Gram matrix gives $(t,\alpha_i)=L^2(2c_i-\sum_{j\sim i}c_j)/2$. Substituting the stated coefficients in the graphs gives bracket $1$ at the two $A_n$ endpoints ($n\ge2$), $2$ at the sole $A_1$ node, $1$ at node $2$ of $D_n$, and $1$ at node $2,1,8$ of $E_6,E_7,E_8$ respectively, and zero elsewhere. Therefore $(t,\alpha_i)\ge0$ and $\|t\|^2=\sum_ic_i(t,\alpha_i)=L^2$ in every simply laced row. For $B,C$, the same coordinate calculations give nonnegative simple pairings and squared norm $M$; the $F_4,G_2$ Gram data [F3] give respectively $\|t\|^2=2$, $(t,\alpha_i)=(1,0,0,0)$ and $\|t\|^2=6$, $(t,\alpha_i)=(0,3)$ in the stated normalizations. All candidates have nonnegative integral coefficients, squared norm $M$, and nonnegative simple pairings. [F2, F3, F7, F8, F15, algebra]

2.1 Membership for the exceptional simply laced candidates follows locally by descent, without a highest-root table. Let $z=\sum_i d_i\alpha_i$ have nonnegative integral coefficients and $\|z\|^2=L^2$. If it is not a simple root, $L^2=\sum_i d_i(z,\alpha_i)>0$ supplies a positive pairing. For that $i$, $k=2(z,\alpha_i)/L^2=2d_i-\sum_{j\sim i}d_j$ is a positive integer. Since $\|z-\alpha_i\|^2=L^2(2-k)\ge0$, one has $k\le2$; equality forces $z=\alpha_i$. Thus for a nonsimple $z$, $k=1$ and $d_i\ge1$ (otherwise its pairing is nonpositive). The reflection $s_i z=z-\alpha_i$ keeps all coefficients nonnegative and the norm unchanged while decreasing their sum by one. Repetition ends at a simple root; reversing this finite reflection word proves that $z$ is a root by reflection invariance. Apply this to the $E$ candidates from Step 1.1. For $F_4$, the coefficient vector $(2,3,4,2)$ is carried by successive reflections at nodes $1,2,3,2,1,4,3$ through $(1,3,4,2),(1,2,4,2),(1,2,2,2),(1,1,2,2),(0,1,2,2),(0,1,2,0),(0,1,0,0)$; the reflection coefficients are the row pairings with [F3]'s Cartan matrix. Reversing the word from $\alpha_2$ proves membership. For $G_2$, reflections at nodes $2,1$ carry $(3,2)$ to $(3,1)$ and $(0,1)$, again a simple root. This proves membership of every candidate, preserving its exact coefficients. [F1, F3, F4, step 1.1, algebra]

3.1 Each candidate $t$ is a positive root of squared norm $M$ and has $(t,\alpha_i)\ge0$. If a root $t+\eta$ lay strictly above it in the root order, $\eta$ would be a nonzero nonnegative integral combination of simple roots. Positive definiteness then gives $\|t+\eta\|^2=M+2(t,\eta)+\|\eta\|^2>M$, contrary to the all-root length bound of [F7]. Thus $t$ is maximal. The unique-highest-root supplier [F1] identifies it with $\theta$. Every positive root lies below a maximal root by finiteness (extend an upward chain until it stops), and uniqueness makes that maximal root this candidate. This proves membership and the full highest-root assertion in (1), including the short-root orbits of $F_4,G_2$, without importing table maximality. [F1, F7, step 1.1, step 2.1, algebra]

4.1 For simply laced $A,D,E$, the simple roots have one length $L$ by [F8], and all roots have that length by [F7]. Adjacent simple roots have angle $2\pi/3$, so their pairing is $-L^2/2$. Thus $L^2=(\alpha_i,\alpha_i)$ is independent of $i$, and for the coefficients $c_i$ just listed, $(\theta,\alpha_i)=\frac{L^2}{2}(2c_i-\sum_{j\sim i}c_j)$. The bracket is $1$ at both endpoints and $0$ elsewhere in $A_n$ for $n\ge2$, is $2$ for the single node of $A_1$, is $1$ at node $2$ and $0$ elsewhere in $D_n$, and is $1$ at node $2,1,8$ respectively and $0$ elsewhere in $E_6,E_7,E_8$. The highest root $\theta$ also has length $L$, since it is a root in the same simply laced system. Hence the normalized pairing $(\theta,\alpha_i)/(\|\theta\|\|\alpha_i\|)$ is $1/2$ at each displayed attachment and $0$ elsewhere, including value $1$ for the sole $A_1$ node. [F1, F3, F7, F8, F15, step 1.1, step 3.1, algebra]

4.2 In the standard $B_n$ coordinates, $(\theta,\alpha_i)$ vanishes except at $i=2$, where it is $1$; $\|\theta\|^2=2$ and $\|\alpha_2\|^2=2$ for $n\ge3$, while $\|\alpha_2\|^2=1$ for $B_2$. Thus the normalized pairing is $1/2$ for $n\ge3$ and $1/\sqrt2$ for $B_2$. In $C_n$, only $(\theta,\alpha_1)$ is nonzero and equals $2$; $\|\theta\|^2=4$ and $\|\alpha_1\|^2=2$, so the normalized pairing is $1/\sqrt2$. In the Bourbaki $F_4$ basis, $\|\theta\|^2=2$ and the only nonzero simple-root pairing is $(\theta,\alpha_1)=1$, so its normalized value is $1/2$. For $G_2$, normalize $\|\alpha_1\|^2=2$, $\|\alpha_2\|^2=6$, and $(\alpha_1,\alpha_2)=-3$; then $\theta=3\alpha_1+2\alpha_2$ has squared length $6$, pairs to $0$ with $\alpha_1$ and to $3$ with $\alpha_2$, so the normalized values are $0$ and $1/2$. These model calculations give the same normalized pairings for $\Phi$ by [F15], hence exactly the finite values in (1). [F2, F3, F6, F8, F15, step 1.1, step 3.1, algebra]

5.1 By [F5], the walls $H_{\alpha_i,0}$ and $H_{\theta,1}$ are precisely the facets of the bounded simplex $A_\Phi$, with inward unit normals $u_i=\alpha_i/\|\alpha_i\|$ and $u_0=-\theta/\|\theta\|$. For $i,j\ge1$, their Gram entries are $-\cos(\pi/m^\Phi_{ij})$ by the finite-type root angles. For $0,i$, one has $(u_0,u_i)=-(\theta,\alpha_i)/(\|\theta\|\|\alpha_i\|)$; Steps 4.1–4.2 give $-1/2,-1/\sqrt2,$ or $0$ in rank at least two. The corresponding walls intersect by [F12], so [F17] gives exact product orders $3,4,$ or $2$, respectively. In type $A_1$, $u_0=-u_1$, giving the entry $-1$; in the coordinate $a=(x,\alpha_1)$ the endpoint reflections are $a\mapsto-a$ and $a\mapsto2-a$, whose product is translation by two and has infinite order. Hence the full Gram matrix is the cosine matrix of $m^\Phi$. [F5, F6, F12, F17, step 4.1, step 4.2, algebra]

5.2 Reading the types in Step 1.1 against the graph recipes in [F10] gives the listed affine diagram for each finite type. The bounds are explicit: $A_n$ covers $n=1$ and $n\ge2$ separately; $B_2$ gives the path $(4,4)$ and $B_n$ for $n\ge3$ gives the branch diagram; $C_n$ covers every $n\ge2$; and $D_n$ covers every $n\ge4$. The three exceptional simply laced vectors attach at the nodes giving arms $(2,2,2),(1,3,3),(1,2,5)$, while the $F_4,G_2$ pairings give the displayed labelled paths. The low-rank conventions [F16] realize $\tilde C_1,\tilde B_2,\tilde D_3,\tilde E_4,\tilde E_5$ via $A_1,B_2,A_3,A_4,D_5$, respectively. [F2, F3, F10, F16, step 1.1, step 4.1, step 4.2, algebra]

6.1 Take any standard affine diagram $D$. By Step 5.2, including the aliases [F16], it is the affine diagram of a finite root system $\Phi$ of rank $n$. Step 5.1 identifies its cosine matrix with the Gram matrix of the $n+1$ inward unit normals of $A_\Phi$, so the matrix is positive semidefinite by [F14]. The finite simple-root normals $u_1,\ldots,u_n$ form a basis of $E$. For any coefficient vector $x$, $x$ lies in the Gram kernel exactly when $\sum_i x_i u_i=0$, since $x^{\mathsf T}Gx=\|\sum_i x_i u_i\|^2$; hence the Gram matrix has rank $n$ and a nonzero radical. The matrix graph is connected with nonpositive off-diagonal entries and diagonal entries $1$ by [F10, F16]. Apply [F9] to obtain a one-dimensional radical generated by a vector with every coordinate positive; the same clause gives positive definiteness of every nonempty proper principal submatrix, while the empty case is vacuous. [F1, F9, F10, F14, F16, step 5.1, step 5.2, algebra]

6.2 Let $G=\langle s_0,\ldots,s_n\rangle$. By [F11](1), $G=W_a$, and by [F11](2) the abstract Coxeter group on the actual reflection-product matrix $m^\Phi$ maps isomorphically onto it. This uses the proved local generation and presentation statements in every rank, including the endpoint reflections in rank one, whose product is a nonzero coroot translation. The identities [F4] give $W_a=Q^\vee\rtimes W$ directly: every affine generator $r_{\alpha,k}=t_{k\alpha^\vee}s_\alpha$ lies in that semidirect product, while $s_\alpha=r_{\alpha,0}$ and $t_{\alpha^\vee}=r_{\alpha,1}r_{\alpha,0}$ lie in $W_a$ for every root. The coroots generate $Q^\vee$, and $w(\alpha^\vee)=(w\alpha)^\vee$ shows that $W$ normalizes its translations. A translation and an element of $W$ agree only at the identity, since $W$ fixes the origin. Together with the alcove simplex and matrix computation, this proves (5). [F4, F5, F11, step 5.1, algebra]

7.1 The kernel and proper-minor claims are those established in Step 6.1 for the cosine matrix identified in Step 5.1. The coefficient and normalized-pairing computations of Steps 1.1–4.2 give the stated verification data, including the $A_1$ parallel-wall case and the distinct $B_2/C_2$ root-length assignments. [step 1.1, step 4.1, step 4.2, step 5.1, step 6.1, algebra]

8.1 To distinguish the labelled graphs without using the coincidence assertion in clause (7) of the definition, first note that $\tilde A_1$ is the only listed graph with an $\infty$-edge, and the cycles $\tilde A_n$ for $n\ge2$ have all degrees $2$ and are distinguished by vertex count. Among the remaining trees, $\tilde B_n$ has one degree-$3$ vertex and exactly one $4$-edge; $\tilde C_n$ is a path with exactly two $4$-edges; $\tilde F_4$ is a path with one interior $4$-edge; and $\tilde G_2$ is the three-vertex path with a $6$-edge. The all-$3$ diagrams are distinguished by degree data: $\tilde D_4$ has a degree-$4$ vertex, $\tilde D_n$ for $n\ge5$ has two degree-$3$ vertices, and each $\tilde E$ diagram has one degree-$3$ vertex with its stated arm lengths, which distinguish $\tilde E_6,\tilde E_7,\tilde E_8$. Vertex counts distinguish successive members within each family. Thus only the explicit naming conventions in [F16] identify two family names. No Choice is used: all root-coordinate checks and graph invariants are finite and explicit. [F10, F13, F16, step 1.1, step 4.1, step 4.2, algebra] ∎
