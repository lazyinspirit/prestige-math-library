---
id: lem-generic-word-preserving-hecke-comparison-preserves-specht-classes
kind: lemma
title: "A generic word-preserving Hecke comparison preserves ordinary Specht classes"
status: draft
origin: session
deps: [def-degenerate-affine-hecke-algebra,
       thm-jucys-murphy-joint-spectrum-is-the-set-of-tableau-content-vectors,
       thm-schur-functor-images-of-standard-simple-projective-and-tilting-objects,
       def-arbitrary-level-cyclotomic-hecke-murphy-cell-and-schur-modules,
       lem-arbitrary-level-cyclotomic-murphy-jm-action-is-content-triangular,
       thm-degenerate-ariki-categorification,
       thm-the-degenerate-cyclotomic-hecke-projective-k-zero-is-the-highest-weight-module,
       thm-split-simple-projective-hom-pairing-has-dual-bases,
       def-axiom-of-choice]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Brundan–Kleshchev, The degenerate analogue of Ariki's categorification theorem"
      url: "https://arxiv.org/pdf/0901.0057"
      locator: "Extraction lines 15-89 and 1850-1960: introduction explicitly includes Specht decomposition matrices; Section 3.4 defines induced Spechts and compares cellular conventions. Only these passages and label dictionary lines 1205-1260 read in this constructor."
    - title: "Brundan–Kleshchev, Blocks of cyclotomic Hecke algebras and Khovanov-Lauda algebras"
      url: "https://arxiv.org/pdf/0808.2032"
      locator: "Extraction lines 335-375: Corollary 2 and generic equivalence paragraph. Only this passage read here; no full-source reading claim."
---

## Statement

Work over $\mathbb C$, assume AC as in the degenerate categorification
suppliers, fix any finite ordered integral multicharge
$\mathbf m=(m_1,\ldots,m_l)$, and let
$\xi\in\mathbb C^\times$ be not a root of unity. Write $H_d$ and $H_{\xi,d}$
for the degenerate and nondegenerate cyclotomic algebras with roots $m_a$ and
$\xi^{m_a}$ respectively. Suppose isomorphisms
$\theta_d:H_d\longrightarrow H_{\xi,d}$ have actually been proved and preserve
all generalized residue-word projectors:
$\theta_d(e(\mathbf i))=e_\xi(\mathbf i)$ for every $\mathbf i\in\mathbb Z^d$.
This is an explicit hypothesis, not a claim that such isomorphisms have been
constructed here.

Let $\lambda$ be any $l$-multipartition of $d$. Let $S_m(\lambda)$ be the
intrinsic degenerate Specht obtained by ordered affine induction of the
ordinary complex Spechts evaluated at $m_a$. Let $S_\xi(\lambda)$ be the ordinary
Murphy cell Specht for roots $\xi^{m_a}$, converted from a right module to a
left module using the generator-fixing presentation anti-involution. Then
$$[\theta_d^*S_\xi(\lambda)]=[S_m(\lambda)]\quad\text{in }G_0(H_d).$$
Thus the transported simple labels $D_\xi(A)$ characterized by
$\theta_d^*D_\xi(A)\cong D_m(A)$ have exactly the same decomposition
multiplicities in these ordinary Spechts for every charged multipartition
label $\lambda=\lambda(B)$ of the source dictionary in its sorted-charge
convention. For an arbitrary charge order the class equality holds as written;
to use the source labels, sort components and their partitions together. This identifies standard
CLASSES, not necessarily modules or cellular-head labels. If the comparison
also intertwines the residue functors, its transported simple/projective
labels are the same ground-component crystal labels. All levels and ranks,
including level zero, and all supported consecutive residue cuts are included.

## Facts & Assumptions

**Given:** The algebras, the proved word-preserving isomorphisms in the Statement,
and the existing local suppliers below. We prove the standard-class dictionary
under this explicit hypothesis; construction of the isomorphisms remains
separate.

[F1] The degenerate affine ordered monomials are a basis, and
$x_{r+1}=s_rx_rs_r+s_r$; evaluation at $m$ sends $x_r$ to $m+J_r$
([[def-degenerate-affine-hecke-algebra]]). On an ordinary complex Specht,
$J_r$ has a basis of simultaneous eigenvectors indexed by standard tableaux,
with eigenvalue the node content $j-i$
([[thm-jucys-murphy-joint-spectrum-is-the-set-of-tableau-content-vectors]]).

[F2] The intrinsic degenerate Specht is the ordered affine induction from
these evaluated component Spechts
([[thm-schur-functor-images-of-standard-simple-projective-and-tilting-objects]]).
The nondegenerate Murphy cell Specht has a standard-multitableau basis on
which all $X_r$ are simultaneously triangular, with diagonal
$\xi^{m_a+j-i}$ at the node $(i,j,a)$ carrying $r$
([[lem-arbitrary-level-cyclotomic-murphy-jm-action-is-content-triangular]]).
Its cell and right/left conventions are those of
[[def-arbitrary-level-cyclotomic-hecke-murphy-cell-and-schur-modules]].

[F3] The degenerate projective $K_0$ is the standard highest weight lattice,
its ground is rationally cyclic under the lowering operators, and the
operators are residue induction
([[thm-the-degenerate-cyclotomic-hecke-projective-k-zero-is-the-highest-weight-module]]).
The Hom pairing with $G_0$ has dual projective/simple bases
([[thm-split-simple-projective-hom-pairing-has-dual-bases]]).
The arbitrary-consecutive-cut and level-zero extensions are supplied by
[[thm-degenerate-ariki-categorification]].

[F4] AC is inherited only through the supplied degenerate categorical
identifications ([[def-axiom-of-choice]]).

## Proof

**Proof technique:** direct.

1.1 Define the integer word character of a finite-dimensional module by $\operatorname{ch}M=\sum_{\mathbf i}\dim(e(\mathbf i)M)[\mathbf i]$. Commuting operators have a finite simultaneous generalized eigenspace decomposition. Applying an idempotent is exact, since a short exact sequence decomposes into its image and complementary image sequences. Consequently this character is additive and descends to $G_0$. The same definition on the nondegenerate side uses eigenvalues $\xi^{i_r}$; distinct integers give distinct eigenvalues because $\xi$ is not a root of unity. [given, algebra]

2.1 Character injectivity on the degenerate side. For a word $\mathbf i=(i_1,\ldots,i_d)$ let $P(\mathbf i)=f_{i_d}\cdots f_{i_1}\mathbb C$ be iterated residue induction of the rank-zero projective. Tensor-idempotent induction gives $P(\mathbf i)\cong H_de(\mathbf i)$, so $\operatorname{Hom}(P(\mathbf i),M)\cong e(\mathbf i)M$ by sending a homomorphism to its value at the idempotent. Hence the word coefficient equals the Cartan pairing with $[P(\mathbf i)]$. Sorting charges does not change the defining cyclotomic polynomial or this algebra; apply [F3] to that sorted realization. These projective word classes span $K_0\otimes\mathbb Q$: divided powers are scalar multiples of ordinary powers over $\mathbb Q$, and the highest weight lattice is ground-generated. A class of zero character therefore pairs to zero with every projective cover. The dual bases in [F3] make all its simple coefficients zero. Thus $\operatorname{ch}:G_0(H_d)\to\mathbb Z[\mathbb Z^d]$ is injective. [F3, F4, step 1.1, algebra]

2.2 The component word characters. On the evaluated ordinary Specht of component $a$, [F1] gives eigenvalues $m_a+j-i$ on the standard-tableau eigenbasis. Thus each standard tableau contributes its content word once. Repeated words from different components or tableaux retain their multiplicities. Empty components contribute the empty word. No semisimplicity of a higher-level cyclotomic algebra is asserted. [F1, step 1.1, algebra]

2.3 The ordinary nondegenerate Specht character. Extend tableau dominance to a total ordering. By [F2] the successive spans in this order are stable under every $X_r$ and have one-dimensional quotients with joint eigenvalues $\xi^{m_a+j-i}$. Exactness of the generalized word projectors therefore gives $\operatorname{ch}S_\xi(\lambda)=\sum_{t\in\operatorname{Std}(\lambda)}[\operatorname{res}_m(t)]$. This counts repeated diagonal words with their full multiplicity, even where eigenvalues collide among distinct tableaux. Conversion to left modules fixes every $X_r$, so does not alter this character. [F2, step 1.1, algebra]

3.1 The induction character is the shuffle character. Put $d_a=|\lambda^{(a)}|$ and $W_P=S_{d_1}\times\cdots\times S_{d_l}$. The affine PBW basis [F1], also read in reversed order using its generator-fixing anti-involution, gives the affine algebra a free right affine-parabolic basis consisting of minimal coset representatives $w\in S_d/W_P$. Hence its induced module has basis $w\otimes v$, with $v$ a tensor of component eigenvectors. Moving $x_r$ through a reduced expression of $w$, the cross relations give $x_rw=wx_{w^{-1}(r)}+\sum_{\ell(u)<\ell(w)}c_uu$. Each correction deletes at least one crossing and is scalar; reducing $u$ to its minimal coset representative cannot increase its length. The filtration by coset length is therefore polynomial-stable, and its quotient at $w$ has the component eigenword permuted by $w$. Minimal coset representatives are exactly order-preserving shuffles of the component positions. [F1, F2, step 2.2, algebra]

4.1 Each choice of component standard tableaux and an order-preserving shuffle specifies exactly one standard multitableau: place consecutive global labels into the component boxes in the selected local orders. Conversely every standard multitableau recovers its component tableaux by local renumbering and its shuffle from the component of each global label. Thus step 3.1 and additivity of generalized weight dimensions give $\operatorname{ch}S_m(\lambda)=\sum_{t\in\operatorname{Std}(\lambda)}[\operatorname{res}_m(t)]$, with all word multiplicities counted. [step 1.1, step 2.2, step 3.1, algebra]

5.1 By hypothesis $\theta_d$ preserves each word projector. Thus pullback preserves its image dimension and the integer word character. Steps 4.1 and 2.3 give identical characters for $\theta_d^*S_\xi(\lambda)$ and $S_m(\lambda)$, and step 2.1 gives equality of their classes. An algebra isomorphism induces an exact equivalence, taking simples to simples and projective covers to their corresponding covers. In the transported simple basis this class equality states $[S_\xi(\lambda):D_\xi(A)]=[S_m(\lambda):D_m(A)]$ for every $A$. It does not require the cell-module head of shape $\lambda$ to be the transported simple with that same shape. [given, step 2.1, step 4.1, step 2.3, algebra]

6.1 Labels and cuts. Use the identical ordered components and node residues $m_a+j-i$ on both sides; the column-label dictionary $B\mapsto\lambda(B)$ is the degenerate supplier's ground-difference multipartition, with no transpose. If charges are reordered, reorder their partitions simultaneously; the tableau-word sum is unchanged by this bijection, and character injectivity identifies the resulting degenerate classes. Under a residue-functor comparison, simple heads along ground crystal paths are preserved by exact equivalence, giving the same charged ground-component labels. For a supported cut the same word projectors select the same summands; apply the established class equality to that central projector. Choose finite cuts containing charges, the block support and any required neighboring operation supports as in [F3]; the calculation uses only those finite words and is unchanged under enlargement. [F3, given, step 5.1, algebra]

7.1 At $d=0$ the sole multipartition, tableau, word and Specht are empty and the class equality is the ground-line equality. At $l=0$ the cyclotomic polynomial is $1$, so both positive-rank algebras vanish, while rank zero is $\mathbb C$; there are no other Specht classes. The preceding steps cover every finite positive level, integral multicharge and rank, and step 6.1 covers supported cuts. This completes the conditional standard-class dictionary without claiming the pending comparison itself. [step 5.1, step 6.1, F3, given] ∎
