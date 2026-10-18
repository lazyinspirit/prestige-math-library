---
id: thm-hh-sl2-q3-iwahori-convolution-corner
kind: theorem
title: The SL2(Q3) Iwahori convolution corner has affine parameters 3
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 2
deps:
  - lem-hh-sl2-q3-lattice-tree-and-iwahori-orbits
  - def-hh-affine-hecke-algebra-from-root-datum
  - lem-hh-affine-hecke-im-basis
  - cor-p-adic-field-is-locally-compact-and-totally-disconnected
  - cor-existence-of-left-and-right-haar-measures
  - cor-normalized-haar-probability-on-a-compact-group
  - def-axiom-of-choice
  - lem-hh-positive-affine-parameter-has-infinite-quantum-characteristic
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: Maarten Solleveld, Affine Hecke algebras and their representations, §1.2
      url: https://arxiv.org/pdf/2009.03007
---

## Statement

Assume the Axiom of Choice [[def-axiom-of-choice]]. Put $G=\operatorname{SL}_2(\mathbb Q_3)$ and let $I$ be the subgroup in [[lem-hh-sl2-q3-lattice-tree-and-iwahori-orbits]]. With left Haar measure normalized by $\mu(I)=1$, let $\mathcal A=C_c^\infty(G;\mathbb C)$ be the convolution algebra of locally constant compactly supported functions and $e=1_I$. Then $e*e=e$ and
$$e\mathcal A e=C_c(I\backslash G/I;\mathbb C)\cong\mathcal H_{\mathrm{IM}}(A_1,q_{s_0}=q_{s_1}=3).$$
Here the root datum is the simply connected $\operatorname{SL}_2$ datum, with cocharacter lattice its coroot lattice and hence $\Omega=1$. The isomorphism sends $T_{s_i}$ to $1_{Is_iI}$, where
$$s_1=\begin{pmatrix}0&-1\\1&0\end{pmatrix},\qquad s_0=\begin{pmatrix}0&-\pi^{-1}\\\pi&0\end{pmatrix},\qquad \pi=3.$$
In particular both satisfy $T_{s_i}^2=2T_{s_i}+3e$; the normalized generators $N_{s_i}=3^{-1/2}T_{s_i}$ satisfy $(N_{s_i}-\sqrt3)(N_{s_i}+1/\sqrt3)=0$. Every smooth complex $G$-representation $V$ has a unital action of this corner on $V^I$, by the convolution integral. This assertion is about the explicitly supported corner and the invariant-vector functor; it asserts no equivalence with the whole smooth representation category or an entire Iwahori block. Its positive-real parameter has quantum characteristic $\infty$.

## Facts & Assumptions

**Given:** The concrete group, subgroup, root datum, and choice assumption in the Statement.

[F1] [[lem-hh-sl2-q3-lattice-tree-and-iwahori-orbits]] proves the degree-four lattice tree, type-ordered edge transitivity, edge stabilizer $I$, and alternating-word double cosets.

[F2] [[def-hh-affine-hecke-algebra-from-root-datum]] defines the Iwahori–Matsumoto algebra; for this root datum its affine Weyl group is the infinite dihedral group on $s_0,s_1$, and its length-zero group is trivial.

[F3] [[lem-hh-affine-hecke-im-basis]] gives the basis indexed by affine Weyl group elements.

[F4] [[cor-p-adic-field-is-locally-compact-and-totally-disconnected]] gives the compact open subring $\mathbb Z_3$ under countable choice, which follows from [[def-axiom-of-choice]].

[F5] [[cor-existence-of-left-and-right-haar-measures]] supplies Haar measure on an LCH group under AC.

[F6] [[lem-hh-positive-affine-parameter-has-infinite-quantum-characteristic]] gives infinite quantum characteristic for every positive real parameter greater than one over $\mathbb C$.

[F7] On a compact Hausdorff group, the normalized left Haar probability is unique and right invariant under AC ([[cor-normalized-haar-probability-on-a-compact-group]]).

## Proof

1.1 The determinant equation makes $G$ a closed subspace of $\mathbb Q_3^4$, hence it is LCH by [F4]; the matrix operations and inversion are continuous. The subgroup $I$ is open and is a closed subset of the compact space $\mathbb Z_3^4$, hence compact. By [F5] choose left Haar measure. Its value on $I$ is finite and positive: finiteness is compactness, while if it were zero, each compact support of a continuous test function would have a finite cover by translates of the open subgroup $I$, making every Haar integral zero. Rescale to $\mu(I)=1$. This is the only use of arbitrary choice beyond the countable compactness input in [F4]. Convolution of locally constant compactly supported functions is defined by finite sums after partitioning a compact integration domain into cosets of a sufficiently small compact open congruence subgroup. The usual associative identity follows by changing $x=yz$ using left invariance and interchanging these finite sums; compact support and local constancy are preserved. [F4, F5, given, algebra, choose]

2.1 Averaging on the left and right by $e$ makes a function invariant under both $I$ actions. Indeed $e*f(g)=\int_I f(i^{-1}g)\,d\mu(i)$ and $f*e(g)=\int_I f(gi)\,d\mu(i)$. The restriction of $\mu$ to $I$ is a left Haar probability on the compact Hausdorff group $I$, so [F7] makes it right invariant. Thus $e*e=e$, and every bi-invariant $f$ has $e*f=f=f*e$. This proves the corner equality. The double cosets are open, and a compact support meets only finitely many of them, so their characteristic functions form a vector-space basis. [F1, F5, F7, step 1.1, algebra]

3.1 The displayed $s_1$ fixes $[L_0]$ and sends the base edge through that type-$0$ vertex; $s_0=D s_1D^{-1}$ with $D=\operatorname{diag}(1,\pi)$ fixes $[L_1]$ and changes the base edge through type $1$. Their squares are $-I\in I$. The three right cosets in each simple double coset are explicitly $$Is_1I=\coprod_{b\in\mathbb F_3}\begin{pmatrix}1&b\\0&1\end{pmatrix}s_1I,\qquad Is_0I=\coprod_{b\in\mathbb F_3}\begin{pmatrix}1&0\\\pi b&1\end{pmatrix}s_0I.$$ For the first, reduce the action on the four lines at $[L_0]$: $I$ fixes the line $e_1$ and upper unipotents translate the other three. For the second, use the basis $e_1,\pi e_2$ at $[L_1]$, where lower unipotents translate the three lines other than the backward one. These matrices have entries in $I$, their three images are distinct, and [F1] shows they exhaust the orbit. [F1, step 2.1, algebra]

4.1 Under $G/I$ identified with type-ordered edges, the operator given by $1_{Is_iI}$ sums over the three other edges at the endpoint of the indicated type. Two such moves at the same vertex return to the original edge in three ways and reach any specified other edge in two ways. Equivalently the finite right-coset formula for convolution gives $1_{Is_iI}*1_{Is_iI}=3e+2\,1_{Is_iI}$. A product with alternating endpoint types follows the unique shortest gallery in the tree. There is exactly one intermediate gallery to any specified final edge of that type word, so the product of the simple characteristic functions is the characteristic function of its entire double coset, with coefficient one. By [F1] these exhaust all double cosets. The infinite dihedral group has no finite braid relation between the two generators, so the quadratic identities give an algebra map from [F2] onto the corner. The basis of [F3] maps bijectively to the distinct double-coset characteristic functions, proving injectivity as well as surjectivity. Rescaling its quadratic identities yields the displayed symmetric normalization. [F1, F2, F3, step 2.1, step 3.1, algebra]

5.1 If $V$ is smooth, each vector is fixed by an open subgroup. For $f$ compactly supported and $v\in V$, $\int_G f(g)\pi(g)v\,d\mu(g)$ is a finite sum: partition its compact support into finitely many right cosets of a compact open subgroup fixing $v$ on which $f$ is constant. Refining the subgroup preserves the sum by additivity of Haar measure, so it is well defined. Finite-sum convolution and the representation law prove multiplicativity. Averaging by $e$ is the projection onto $V^I$ because left translation by $I$ preserves its integral and averaging fixes every $I$-fixed vector. Hence the corner acts on $V^I$ with identity $e$, including $V^I=0$. Finally [F6] applies to $3>1$, giving the precise parameter boundary. No equivalence assertion is used in this construction. [F1, F6, step 1.1, step 2.1, step 4.1, algebra] ∎
