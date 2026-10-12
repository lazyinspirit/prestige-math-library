---
id: rem-degenerate-and-nondegenerate-ariki-theorems-have-distinct-parameter-ranges
kind: remark
title: "The degenerate and nondegenerate Ariki theorems have distinct parameter ranges"
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 43
deps: [thm-degenerate-ariki-categorification,
       thm-the-degenerate-cyclotomic-hecke-g-zero-is-the-dual-highest-weight-module,
       thm-the-degenerate-cyclotomic-hecke-projective-k-zero-is-the-highest-weight-module,
       thm-degenerate-specht-decomposition-numbers-are-canonical-basis-coefficients-at-one,
       thm-schur-functor-images-of-standard-simple-projective-and-tilting-objects,
       def-degenerate-cyclotomic-hecke-algebra,
       def-degenerate-affine-hecke-algebra,
       def-degenerate-cyclotomic-hecke-tower-and-residue-functors,
       def-type-a-affine-presentations-and-charged-cyclotomic-quotients,
       lem-generic-cyclotomic-type-a-support-is-bounded-by-rank,
       lem-integer-color-degenerate-hecke-klr-local-inverse-tables,
       lem-generic-nondegenerate-local-inverse-tables,
       lem-generic-cyclotomic-local-dictionaries-glue-to-a-tower,
       def-arbitrary-level-cyclotomic-hecke-murphy-cell-and-schur-modules,
       lem-arbitrary-level-cyclotomic-murphy-jm-action-is-content-triangular,
       thm-jucys-murphy-joint-spectrum-is-the-set-of-tableau-content-vectors,
       thm-split-simple-projective-hom-pairing-has-dual-bases,
       def-higher-level-wedge-tensor-fock-module,
       def-generic-type-a-hecke-algebra,
       def-axiom-of-choice]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Jonathan Brundan and Alexander Kleshchev, Blocks of cyclotomic Hecke algebras and Khovanov-Lauda algebras, arXiv:0808.2032v4"
      url: "https://arxiv.org/pdf/0808.2032v4"
      locator: "Introduction, printed pp. 1-4: the integer-line versus cyclic datum, Main Theorem, Corollary 2 and generic equivalence paragraph; these passages personally read in the recovered text. The local support, inverse tables and tower proof are supplied by the cited library lemmas."
    - title: "Jonathan Brundan and Alexander Kleshchev, The degenerate analogue of Ariki's categorification theorem, arXiv:0901.0057v1"
      url: "https://arxiv.org/pdf/0901.0057"
      locator: "Introduction, printed pp. 1-3 and Section 3.4, printed pp. 25-26: generic equivalence, affine-induced Spechts (3.22)-(3.24), cellular/dual conventions in Remark 3.4 and reversed induction (3.25)-(3.26); these passages personally read. The complete generic standard-class argument is local below."
verification:
  precheck: pass
---

## Statement

Assume inherited AC [[def-axiom-of-choice]] for the category-O, Schur and
highest-weight/global-basis suppliers. The explicit finite spectral and
algebra-transport constructions introduce no additional choice.

The degenerate theorem [[thm-degenerate-ariki-categorification]] concerns the
tower over $\mathbb C$ with integral multicharge $m_1\ge\cdots\ge m_l$,
additive cyclotomic roots $m_j$ and the $\mathfrak{gl}_{I^+}$
Fock/highest-weight data. Its integral Grothendieck-group, projective/simple,
standard-class and decomposition-number identifications are ungraded at the
basis parameter one. This parameter is independent of the numerical
nondegenerate Hecke parameter $\xi$.

In the **generic branch**, let $\xi\in\mathbb C^\times$ have infinite
multiplicative order and let $\mathbf m=(m_1,\ldots,m_l)$ be any finite ordered
integral multicharge, including repeated charges. Put $Q_j=\xi^{m_j}$.
Residues are integers and the datum is the directed line $i\to i+1$, of type
$A_\infty$ and quantum characteristic $e=0$. The actual word-preserving
tower isomorphism constructed through the common integer-line KLR algebra
identifies the degenerate and generic nondegenerate categorifications,
including their full integral based families and their standard classes.
At a primitive $e$-th root of unity $\xi\ne1$, the residue datum is instead
cyclic affine type $A^{(1)}_{e-1}$, with a double edge at $e=2$; that theorem
requires its own comparison and categorification. It does not follow by
specializing the generic tower isomorphism.

## Generic comparison and standard classes

Write $H_d^{\deg}$ for the first-strand quotient
$\prod_j(x_1-m_j)=0$ and $H_d^\xi$ for
$\prod_j(X_1-\xi^{m_j})=0$ in
[[def-type-a-affine-presentations-and-charged-cyclotomic-quotients]]. The
proved support and two local inverse dictionaries give a coherent tower
isomorphism
$$\Theta_d=\phi_d^\xi(\phi_d^{\deg})^{-1}:H_d^{\deg}\longrightarrow H_d^\xi,$$
with $\Theta_d(e_{\deg}(\nu))=e_\xi(\nu)$ for every integer word $\nu$,
where the eigenvalues are $\nu_r$ and $\xi^{\nu_r}$, respectively. Pullback
$\mathcal E_d=\Theta_d^*$ is an exact equivalence preserving all residue
induction/restriction bimodules and their compositions.

For an ordered multipartition $\boldsymbol\mu$ of $d$, let
$S_\xi(\boldsymbol\mu)$ be the intrinsic Murphy cell Specht of
[[def-arbitrary-level-cyclotomic-hecke-murphy-cell-and-schur-modules]],
converted from right to left through the generator-fixing star
anti-involution. Let $S_{\deg}(\boldsymbol\mu)$ be the actual affine-induced
Specht of [[thm-schur-functor-images-of-standard-simple-projective-and-tilting-objects]],
with factors $\mathrm{ev}_{m_j}^*S^{\mu^{(j)}}$ in that component order.
Then
$$[\mathcal E_d S_\xi(\boldsymbol\mu)]=[S_{\deg}(\boldsymbol\mu)]\quad\text{in }G_0(H_d^{\deg}).$$
This is equality of classes, not an asserted isomorphism of the Specht
modules. It does not identify an untwisted ordinary same-shape simple with a
transported crystal simple.

To use the source Fock labels for an arbitrary charge order, choose the fixed
stable permutation sorting the pairs $(m_j,\mu^{(j)})$ into decreasing
charges and write the sorted pairs again with indices $j$. On a sufficiently
low common finite cut, define the column-strict label $B_{\boldsymbol\mu}$ by
$$B_{\boldsymbol\mu}(m_j+1-r,j)=m_j+1-r+\mu_r^{(j)}.$$
Its remaining tail is ground. Adding the box $(r,c,j)$ has integer residue
$m_j+c-r$. The sorted intrinsic standard is the Schur image of
$N(B_{\boldsymbol\mu})$, so under the generic identification its class maps
to $S_{B_{\boldsymbol\mu}}=\pi_{\mathrm{Fock}}M_{B_{\boldsymbol\mu}}$.
Sorting paired components preserves the word-character sum and hence this
class; it does not assert an equivalence of the different parabolic
category-O realizations.

## Preserved based families and all cuts

Define $D_\xi(A)=\mathcal E^{-1}D_{\deg}(A)$ and
$Y_\xi(A)=\mathcal E^{-1}Y_{\deg}(A)$, where $Y_{\deg}(A)$ is the projective
cover of $D_{\deg}(A)$. The generic identifications give
$$[Y_\xi(A)]\longmapsto P_A=G_{\mathrm{low}}(A)|_{s=1},\qquad [D_\xi(A)]\longmapsto D_A=G_{\mathrm{up}}(A)|_{s=1}.$$
Thus $K_0$ is the full standard highest-weight lattice and $G_0$ the full
restricted integral costandard lattice. The projective canonical and simple
dual-canonical families, the Cartan Hom pairing, its dual cover/simple bases,
the Cartan map as the lower-to-upper lattice inclusion, the Chevalley
operators and their integral divided-power actions all transfer. The
costandard lattice is not asserted to be integrally generated by its ground
vector. In the transported simple basis the generic standard multiplicities
are exactly
$$[S_\xi(\boldsymbol\mu):D_\xi(A)]=d_{A,B_{\boldsymbol\mu}}(1).$$

For every admitted consecutive $I$, including $\mathbb Z$ and half-infinite
intervals, these assertions hold on the same supported central content
cuts. Finite letter cuts contain all charges; finite root cuts contain the
selected content and every intermediate content of the chosen residue
operations. Compatible lower and upper cuts append the common ground tail
and leave added top letters absent. They identify the same finite algebras,
word projectors, based labels, bimodules and standard classes on overlaps,
so the full restricted direct sums glue. A proper supported cut is retained
as a cut and is not identified with the whole rank algebra. Rank zero is the
ground line; at level zero both positive-rank towers vanish and only that
rank-zero line survives.

## Root parameters and characteristics

For the level-one root-of-unity track the regime is charge $0$, $\Lambda_0$,
$\xi\ne1$ and finite quantum characteristic $e\ge2$. In characteristic zero,
global-basis coefficients give the characteristic-zero decomposition theorem
with the track's fixed partition and sign conventions. Its graded version
also requires the transported KLR grading and graded categorification; an
ungraded coefficient at basis parameter one is not a graded decomposition
polynomial. In characteristic $p>0$ a primitive $e$-th root in a field requires
$p\nmid e$; the characteristic-zero generic equivalence makes no assertion
that the positive-characteristic adjustment matrix is the identity.

The degenerate parameter $\xi=1$ has quantum characteristic $0$ over
$\mathbb C$, but quantum characteristic $p$ over characteristic $p$.
Thus the degenerate branch is not uniformly $e=0$ across fields.
Cross-characteristic root-of-unity comparisons require their own suppliers;
no general positive-characteristic decomposition formula is claimed.

## Facts & Assumptions

**Given:** The inherited AC, a finite integral multicharge, the two
cyclotomic towers over $\mathbb C$, a parameter $\xi$ of infinite order,
their intrinsic standards, and the actual local and categorical suppliers
below.

[F1] Generic support is finite in each rank, with colors within $d-1$ of a
charge, and the two integer-color local inverse tables glue to actual
word-preserving tower maps and residue bimodules
([[lem-generic-cyclotomic-type-a-support-is-bounded-by-rank]],
[[lem-integer-color-degenerate-hecke-klr-local-inverse-tables]],
[[lem-generic-nondegenerate-local-inverse-tables]],
[[lem-generic-cyclotomic-local-dictionaries-glue-to-a-tower]]).

[F2] The arbitrary-level Murphy basis is finite free and its commuting $X_r$
act on the cell basis with dominance-triangular diagonal
$U_jz^{c-r}$ at node $(r,c,j)$
([[def-arbitrary-level-cyclotomic-hecke-murphy-cell-and-schur-modules]],
[[lem-arbitrary-level-cyclotomic-murphy-jm-action-is-content-triangular]]).
This is a universal parameter identity, not an invocation of a finite-$e$
label theorem at $e=0$.

[F3] The actual Schur standard is affine induction of evaluated ordinary
complex Spechts; its affine action factors through the cyclotomic quotient
([[thm-schur-functor-images-of-standard-simple-projective-and-tilting-objects]]).
The affine PBW basis and evaluation $x_r\mapsto m+J_r$ are proved in
[[def-degenerate-affine-hecke-algebra]], and the ordinary Specht joint
$J_r$ eigenbasis has one vector for each standard tableau, with eigenvalues
$c-r$ ([[thm-jucys-murphy-joint-spectrum-is-the-set-of-tableau-content-vectors]]).

[F4] The actual degenerate $K_0$ and $G_0$ identifications give the full lower
and upper integral lattices, normalized cover/simple families, Chevalley and
divided-power operators and all compatible finite cuts
([[thm-the-degenerate-cyclotomic-hecke-projective-k-zero-is-the-highest-weight-module]],
[[thm-the-degenerate-cyclotomic-hecke-g-zero-is-the-dual-highest-weight-module]],
[[thm-degenerate-ariki-categorification]]). The standard images and their
$d_{A,B}(1)$ multiplicities are
[[thm-degenerate-specht-decomposition-numbers-are-canonical-basis-coefficients-at-one]],
with the column-label convention of [[def-higher-level-wedge-tensor-fock-module]].

[F5] The Cartan Hom pairing has integral dual projective-cover/simple bases
([[thm-split-simple-projective-hom-pairing-has-dual-bases]]).

## Proof

**Proof technique:** direct.

1.1 **The actual generic tower comparison.** Use the first-strand presentations and the finite support of [F1]. On a first color $i$, the two cyclotomic polynomials become $y_1^{\lambda_i}$ times an invertible nilpotent-evaluated series, since $m_j-i\ne0$ and $\xi^{m_j}-\xi^i\ne0$ when $m_j\ne i$. Thus the proved affine inverse dictionaries descend in both directions to the same homogeneous cyclotomic KLR presentation. Their inverse composites fix words, dots and crossings, with the prescribed right-side order of their series. This gives the actual maps $\phi_d^{\deg},\phi_d^\xi$ and hence $\Theta_d$; no arbitrary rankwise isomorphism is selected. Their local series are independent of rank, charge order and window. The prefix projector is the sum over its appended colors, so the tower maps agree; the common last-color idempotent identifies the two induction bimodules by $a\epsilon_i\otimes v\mapsto\Theta_{d+1}(a)\epsilon_i\otimes v$, and identifies the restrictions. In a fixed finite rank bound every series is a finite nilpotent Taylor sum; window enlargement adds only zero unsupported words. Therefore the comparison preserves actual word projectors, residue functors and their finite compositions. [F1, given, construct, algebra]

1.2 **Word characters and the generic Murphy standard.** Define $\operatorname{ch}_{\deg}M=\sum_\nu\dim e_{\deg}(\nu)M[\nu]$ and $\operatorname{ch}_\xi M=\sum_\nu\dim e_\xi(\nu)M[\nu]$, with finite sums in rank $d$ by [F1]. An idempotent image is an exact functor, so both characters are additive and descend to $G_0$. Infinite order makes $\nu\mapsto(\xi^{\nu_1},\ldots,\xi^{\nu_d})$ injective. Order the Murphy basis by a linear extension of dominance; [F2] gives a simultaneous flag for the commuting $X_r$, with one-dimensional factors of eigenword $\xi^{m_j+c-r}$. Applying the exact primary word projector to this flag counts each matching factor once and every nonmatching factor zero, even when distinct tableaux give the same word. Star fixes every $X_r$, so right-to-left conversion preserves these dimensions. Hence $\operatorname{ch}_\xi S_\xi(\boldsymbol\mu)=\sum_{T\in\operatorname{Std}(\boldsymbol\mu)}[\operatorname{res}_{\mathbf m}(T)]$. [F1, F2, algebra]

2.1 **The actual degenerate standard character.** Put $d_j=|\mu^{(j)}|$ and $W_P=S_{d_1}\times\cdots\times S_{d_l}$. The affine PBW basis of [F3], read also in reverse order through its generator-fixing anti-involution, makes the affine algebra free as a right affine Young-subalgebra module on the distinguished finite shuffles $w\in S_d/W_P$. Thus the actual induced standard has basis $w\otimes v$, where $v$ is a tensor of ordinary Specht eigenvectors. The mixed relation moves a polynomial generator through the shuffle as $x_rw=wx_{w^{-1}(r)}+\sum_{\ell(u)<\ell(w)}c_uu$: each scalar correction deletes a crossing. Reducing $u$ to its minimal Young-coset representative cannot increase length. Therefore the shuffle-length filtration is stable under all commuting $x_r$, and its factors have the permuted component eigenwords $m_j+c-r$ of [F3]. Each component standard-tableau tuple and order-preserving shuffle specifies one standard multitableau, and conversely a multitableau recovers that tuple and shuffle by local renumbering. Applying exact word projectors to this filtration consequently gives $\operatorname{ch}_{\deg}S_{\deg}(\boldsymbol\mu)=\sum_{T\in\operatorname{Std}(\boldsymbol\mu)}[\operatorname{res}_{\mathbf m}(T)]$, with full multiplicities. The joined Schur theorem [F3] identifies this actual affine-induced module with the Schur image; a proposed finite-W or Hecke character is not substituted for that module. [F3, step 1.2, algebra]

2.2 **Injectivity from actual projective words.** For $\nu=(\nu_1,\ldots,\nu_d)$ put $P(\nu)=f_{\nu_d}\cdots f_{\nu_1}\mathbb C$, where the ground object is projective. The actual right-appending residue bimodules identify $P(\nu)$ with $H_d^{\deg}e_{\deg}(\nu)$ by repeated balanced tensor multiplication. Evaluation at the idempotent gives $\operatorname{Hom}(P(\nu),M)\cong e_{\deg}(\nu)M$, so its Cartan pairing is exactly the corresponding word-character coefficient. Under the projective highest-weight theorem [F4], the classes of these words span each rationalized $K_0$ weight: the lower lattice is ground-generated under divided powers, and over $\mathbb Q$ each divided power is an ordinary power divided by a factorial. Therefore an integral $G_0$ class of zero character pairs to zero with every projective cover. The integral dual bases in [F5] make every simple coefficient zero, proving word-character injectivity on $G_0$, not just on its rationalization. Only the lower projective lattice is used for this spanning argument; integral ground cyclicity of the full upper lattice is not assumed. [F1, F4, F5, step 1.2, algebra]

3.1 **Exact standard classes and charge order.** Step 1.1 makes pullback preserve every word coefficient. Steps 1.2–2.1 give equal characters for $\mathcal E_dS_\xi(\boldsymbol\mu)$ and $S_{\deg}(\boldsymbol\mu)$, and step 2.2 gives their equality in integral $G_0$. A simultaneous permutation of charges and partitions bijects their standard tableaux without changing a residue word, so it preserves both character sums and, by step 2.2, the degenerate standard class. Sort these pairs into the source charge order. The entries $m_j+1-r+\mu_r^{(j)}$ are strictly decreasing down the column and have the ground tail; their ground differences are exactly the component partitions. The source Schur/Fock dictionary [F3, F4] therefore sends the sorted standard class to $S_{B_{\boldsymbol\mu}}$. This proves the stated generic standard-class dictionary for every finite integral charge order. The calculation uses the same-shape Murphy cell and its star conversion. A convention using a contragredient dual has the same primary dimensions because star fixes the polynomial generators; a signed-conjugate convention must also carry its sign and charge/reflected-residue change. No untwisted conjugate module or unchanged signed residue word is inferred. [F2, F3, F4, step 1.1, step 1.2, step 2.1, step 2.2, algebra]

4.1 **Transfer the full based and pairing data.** An algebra isomorphism gives an exact equivalence and a Hom bijection on every pair. Thus it takes simples to simples, indecomposable projectives to indecomposable projectives and projective covers to the corresponding covers, defining precisely $D_\xi(A)$ and $Y_\xi(A)$. It preserves the Cartan pairing and the inclusion of projective classes into module classes. Composing with [F4] therefore transfers the full lower and restricted upper integral lattices, their normalized canonical/dual-canonical families at $s=1$, and the Cartan map as their lattice inclusion. The bimodule maps in step 1.1 transfer the Chevalley actions, and the integral divided-power actions transfer under these integral group isomorphisms. Combining step 3.1 with the degenerate standard multiplicities of [F4] gives $[S_\xi(\boldsymbol\mu):D_\xi(A)]=d_{A,B_{\boldsymbol\mu}}(1)$. This coefficient comparison is in the transported simple basis and implies neither a Specht-module isomorphism nor a same-shape cellular-head identification. [F4, F5, step 1.1, step 3.1, algebra]

5.1 **All compatible cuts and all ranks.** On a content $\alpha$, the sum of word projectors with that content is preserved by $\Theta_d$, as is the central sum over words in any supported interval $I$. Hence the same comparison restricts to the same supported finite content algebras and to their residue corners. For any selected finite list of contents and operations, choose lower/upper letter and root cuts containing all charges, content supports and intermediate supports; [F1] permits a common finite generic window, and [F4] identifies the actual degenerate finite-cut based lattices and standards by their common-ground-tail labels. The inverse dictionaries use fixed pair series, so the tower isomorphisms agree on overlaps. The unchanged intrinsic affine standards and their corner projections have the same characters and classes there. Thus their standard, simple and projective classes, pairings and integral lower/upper bases glue under the same composable tail maps, proving the full arbitrary-consecutive-$I$ assertion weight by weight. No proper supported cut becomes the whole rank algebra. At rank zero both maps are the identity on $\mathbb C$, with the empty word, tableau and standard. At level zero the first cyclotomic polynomial is $1$, so both positive-rank algebras and all residue operations are zero, and only the ground line remains. [F1, F3, F4, step 1.1, step 3.1, step 4.1, algebra]

6.1 **The root-of-unity obstruction and characteristic boundary.** For level one with charge zero and $d=2$, the degenerate presentation gives $x_1=0$, $x_2=s_1$ and $s_1^2=1$, hence $H_2^{\deg}\cong\mathbb C[S_2]\cong\mathbb C\oplus\mathbb C$. At $\xi=-1$ the nondegenerate level-one presentation gives $X_1=1$, $X_2=-T_1^2$ and $(T_1+1)^2=0$, hence $H_2^{-1}\cong\mathbb C[T_1]/((T_1+1)^2)$. Its class $T_1+1$ is nonzero and nilpotent, whereas the product of two fields has no nonzero nilpotent. These algebras are therefore not isomorphic. Moreover, the generic local inverse series rely on $\xi^a-\xi^b\ne0$ for distinct integers; these constants can vanish at a root of unity, so the proved generic inverse maps cannot simply be specialized there. The cyclic characteristic-zero and positive-characteristic assertions retain their own parameters and suppliers, and the grading/basis variable is never identified with the numerical $\xi$. This proves the stated obstruction and all comparison claims without claiming a general positive-characteristic decomposition formula. The only choice is the inherited AC in [F4]; the remaining constructions use finite data. [F1, F4, given, algebra] ∎
