---
id: def-degenerate-cyclotomic-hecke-tower-and-residue-functors
kind: definition
title: "The degenerate cyclotomic Hecke tower and its residue functors"
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 36
deps: [def-degenerate-cyclotomic-hecke-algebra,
       def-stable-range-and-block-idempotent-for-higher-level-schur-weyl-duality,
       def-hecke-induction-and-restriction-functors-on-degenerate-cyclotomic-blocks,
       thm-split-simple-projective-hom-pairing-has-dual-bases,
       def-grothendieck-group-of-an-essentially-small-abelian-category,
       def-split-grothendieck-group-of-an-additive-category,
       thm-finite-length-grothendieck-groups-have-simple-class-bases,
       thm-finite-dimensional-algebra-projective-classes-form-a-split-k-zero-basis,
       def-projective-simple-hom-pairing-on-grothendieck-groups,
       thm-adjoint-exact-functors-induce-adjoint-grothendieck-operators,
       lem-type-a-tableau-central-summands-are-single-linkage-blocks,
       def-integral-parabolic-category-o-block-for-higher-level-schur-weyl-duality,
       thm-higher-level-schur-weyl-endomorphism-isomorphism,
       thm-the-whittaker-functor-is-exact-and-fully-faithful-on-the-required-projectives,
       thm-chinese-remainder-theorem-for-comaximal-ideals, def-axiom-of-choice]
axiom_use: "Inherited AC through DG PBW/Skryabin and the parabolic projective generator, full-projective faithfulness and single-linkage suppliers. Polynomial spectral interpolation and dot identities make no additional choice once the finite algebra is supplied."
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Jonathan Brundan and Alexander Kleshchev, The degenerate analogue of Ariki's categorification theorem, Math. Z. 266 (2010) 877-919 (complete 44-page arXiv article)"
      url: "https://arxiv.org/pdf/0901.0057"
      locator: "Section 3.2 (printed pp. 23-24), formulas (3.7)-(3.14): the cyclotomic quotient $H^m_d$, its weight idempotents $e(i)$, the block idempotents $e_\\alpha$ and the tower $H^\\Lambda$; complete passage read. Finite-I supported central cut distinguished from full $H_d$; primitivity is proved via actual16 single-linkage and actual17 full-projective centre comparison, not assumed from orbit sums."
    - title: "Jonathan Brundan and Alexander Kleshchev, The degenerate analogue of Ariki's categorification theorem, Math. Z. 266 (2010) 877-919 (complete 44-page arXiv article)"
      url: "https://arxiv.org/pdf/0901.0057"
      locator: "Section 3.3 (printed pp. 24-25), formulas (3.15)-(3.20): the Grothendieck groups, the Cartan pairing, the non-unital embeddings $\\iota_{\\alpha,\\alpha_i}$, the residue functors $e_i,f_i$ and the duality; complete passage read. Finite-I supported central cut distinguished from full $H_d$; primitivity is proved via actual16 single-linkage and actual17 full-projective centre comparison, not assumed from orbit sums."
    - title: "Jonathan Brundan and Alexander Kleshchev, Schur-Weyl duality for higher levels, Selecta Math. (N.S.) 14 (2008) 1-57 (complete 50-page arXiv article)"
      url: "https://arxiv.org/pdf/math/0605217"
      locator: "Section 3.3 and Lemma 3.5 (printed pp. 23-26): the cyclotomic quotient, its PBW basis and dimension $l^dd!$, and the block idempotents; complete passage read. Finite-I supported central cut distinguished from full $H_d$; primitivity is proved via actual16 single-linkage and actual17 full-projective centre comparison, not assumed from orbit sums."
    - title: "Jonathan Brundan and Alexander Kleshchev, Representations of shifted Yangians and finite W-algebras, Mem. Amer. Math. Soc. 196 (2008), no. 918 (complete 109-page arXiv memoir)"
      url: "https://arxiv.org/pdf/math/0508003"
      locator: "Section 4.4 (printed pp. 45-47, (4.38)-(4.45)) and Section 8.5 (printed pp. 93-97): the parabolic category and Whittaker-functor context in which the blocks $H^\\Lambda_\\alpha$ occur; the relevant passages were read. Finite-I supported central cut distinguished from full $H_d$; primitivity is proved via actual16 single-linkage and actual17 full-projective centre comparison, not assumed from orbit sums."
verification:
  precheck: pass
---

## Definition

Assume the Axiom of Choice [[def-axiom-of-choice]] for the imported tensor-PBW and category-$\mathcal O$ realization assertions specified in `axiom_use`. The algebraic definitions themselves require no additional choice.

Fix a nonempty set $I\subseteq\mathbb Z$ of consecutive integers (possibly all of
$\mathbb Z$ or half-infinite), put $I^+:=I\cup(I+1)$, fix a level $l\ge1$ and an
integral multicharge $m_1\ge\cdots\ge m_l$, and let
$\Lambda=\sum_{j=1}^{l}\Lambda_{m_j}\in P^+$ be the corresponding dominant
integral weight. Throughout, the ground field is $\mathbb C$ and the degree-$d$
degenerate cyclotomic Hecke algebra $H_d(m)$ is the algebra of
[[def-degenerate-cyclotomic-hecke-algebra]]: the quotient of the degenerate
affine Hecke algebra by the relation $(x_1-m_1)\cdots(x_1-m_l)=0$, with
$\mathbb C$-basis $\{x_1^{r_1}\cdots x_d^{r_d}w\}$ over $0\le r_i<l$, $w\in S_d$,
and $\dim_{\mathbb C}H_d(m)=l^d d!$. The $x_1,\dots,x_d$ commute pairwise.

**(1) Joint spectral idempotents and content idempotents.** For
$i=(i_1,\dots,i_d)\in\mathbb Z^d$ let $e(i)\in H_d(m)$ be the joint polynomial
spectral idempotent of $x_1,\dots,x_d$ that projects onto the generalized joint
eigenspace with generalized eigenvalues $i_1,\dots,i_d$; these idempotents are
those of [[def-stable-range-and-block-idempotent-for-higher-level-schur-weyl-duality]],
they lie in the commutative subalgebra generated by $x_1,\dots,x_d$, are
mutually orthogonal, sum to the identity of $H_d(m)$, and all but finitely many
are zero. For $\alpha\in Q^+$ with $d=\operatorname{ht}(\alpha)$ put

$$I_\alpha:=\{\,i\in I^d\ :\ \textstyle\sum_{r=1}^{d}\alpha_{i_r}=\alpha\,\},\qquad e_\alpha:=\sum_{i\in I_\alpha}e(i)\in H_d(m),\qquad H^\Lambda_\alpha:=e_\alpha H_d(m).$$

Because $I_\alpha$ is finite (so only finitely many nonzero $e(i)$ occur in it),
$e_\alpha$ is an idempotent of $H_d(m)$, nonzero or zero, and $H^\Lambda_\alpha$
is a finite-dimensional algebra with identity $e_\alpha$. Its (finite
dimensional, unital) left modules are exactly the $H_d(m)$-modules on which
$e_\alpha$ acts as the identity.

**(2) The supported degree and the tower.** The **degree-$d$ supported tower
algebra** is $f_{I,d}H_d(m)$ with $f_{I,d}:=\sum_{i\in I^d}e(i)$; for
$I\ne\mathbb Z$ this is in general a proper central cut of the whole degree-$d$
algebra $H_d(m)$, and no equality with $H_d(m)$ is asserted. The **tower** is

$$H^\Lambda:=\bigoplus_{\alpha\in Q^+}H^\Lambda_\alpha .$$

It is a unital algebra when $I$ is finite and a locally unital algebra in
general; the ambient tower inclusion is the degree-raising embedding
$\iota\colon H_d(m)\hookrightarrow H_{d+1}(m)$ of
[[def-hecke-induction-and-restriction-functors-on-degenerate-cyclotomic-blocks]].
At level $0$ the tower is concentrated in degree $0$: $H^\Lambda_0=\mathbb C$
and $H^\Lambda_d=0$ for $d>0$.

**(3) Grothendieck groups and the Cartan pairing.** For each $\alpha$ let
$D(A)$ range over representatives of the simple finite-dimensional
$H^\Lambda_\alpha$-modules and $Y(A)\twoheadrightarrow D(A)$ over their
projective covers. The **module Grothendieck group** $G_0(H^\Lambda_\alpha)$ is
the Grothendieck group $G_0$ of the category of finite-dimensional
$H^\Lambda_\alpha$-modules ([[def-grothendieck-group-of-an-essentially-small-abelian-category]])
and the **split projective group** $K_0(H^\Lambda_\alpha)$ is the split
Grothendieck group of finite-dimensional projective modules
([[def-split-grothendieck-group-of-an-additive-category]]); both are taken block
by block and then summed over $\alpha\in Q^+$. The **Cartan pairing**

$$\langle-,-\rangle\colon K_0(H^\Lambda)\times G_0(H^\Lambda)\longrightarrow\mathbb Z,\qquad \langle[P],[M]\rangle:=\dim_{\mathbb C}\operatorname{Hom}_{H^\Lambda}(P,M),$$

is the object-level Hom pairing of
[[def-projective-simple-hom-pairing-on-grothendieck-groups]]; its biadditivity
on the two groups is the descent proved in
[[thm-split-simple-projective-hom-pairing-has-dual-bases]], which also shows
that $\{[Y(A)]\}$ and $\{[D(A)]\}$ are dual bases (over $\mathbb C$ every simple
endomorphism ring is $\mathbb C$). Different blocks are orthogonal.

**(4) Residue maps and residue functors.** For $i\in I$ and $\alpha\in Q^+$
the embedding $\iota$ composed with the projection onto the block
$H^\Lambda_{\alpha+\alpha_i}$ is the non-unital algebra homomorphism

$$\iota_{\alpha,\alpha_i}\colon H^\Lambda_\alpha\longrightarrow H^\Lambda_{\alpha+\alpha_i},\qquad u_{\alpha,i}:=\iota_{\alpha,\alpha_i}(e_\alpha)=\sum_{i\in I_{\alpha+\alpha_i},\ i_{d+1}=i}e(i).$$

The **residue restriction functor** $e_i$ sends a finite-dimensional
$H^\Lambda_{\alpha+\alpha_i}$-module $M$ to the vector space
$u_{\alpha,i}M$ viewed as an $H^\Lambda_\alpha$-module through
$\iota_{\alpha,\alpha_i}$, and the **residue induction functor** $f_i$ sends a
finite-dimensional $H^\Lambda_\alpha$-module $M$ to
$H^\Lambda_{\alpha+\alpha_i}u_{\alpha,i}\otimes_{H^\Lambda_\alpha}M$. Their
well-definedness, exactness, biadjointness, compatibility with the duality
$\circledast$ of (5), and their effect on Grothendieck groups (adjoint operators
for the Cartan pairing, by
[[thm-adjoint-exact-functors-induce-adjoint-grothendieck-operators]]) are the
content of
[[def-hecke-induction-and-restriction-functors-on-degenerate-cyclotomic-blocks]];
summing over $\alpha$ gives endofunctors $e_i,f_i$ of the tower.

**(5) Duality.** The anti-automorphism $\ast$ of $H_d(m)$ with
$s_r^\ast=s_r$ and $x_r^\ast=x_r$ preserves each $H^\Lambda_\alpha$. On
finite-dimensional left $H^\Lambda_\alpha$-modules put
$M^{\circledast}:=\operatorname{Hom}_{\mathbb C}(M,\mathbb C)$ with left action
$(hf)(m):=f(h^\ast m)$. This duality fixes every simple module and commutes with
the residue functors; it is the ordinary duality recorded in
[[def-hecke-induction-and-restriction-functors-on-degenerate-cyclotomic-blocks]],
and it is used throughout this page in the form $M^{\circledast}$.

**(6) Stable and admissible data.** A charge datum as above is used in the
form of its admissible stable realization of
[[def-stable-range-and-block-idempotent-for-higher-level-schur-weyl-duality]];
stable range means at least $d$ Jordan strings of maximal length $l$, and
admissibility means $c_i-c_j\in\mathbb Z$ implies $c_i=c_j$ for the origin $c$.
These hypotheses are only invoked where the corresponding supplier is used;
the definitions (1)-(5) themselves do not assume them.

## Remarks

**(a) Why the cut is a cut.** Take $I=\{0\}$, level $1$ and $m=(0)$, so that
$H_2(0)=\mathbb C[S_2]$ with $x_1=0$ and $x_2=s_1$ by the level-one instance
of [[def-degenerate-cyclotomic-hecke-algebra]]. The eigenvalues of $x_2$ on
$H_2$ are $\pm1$, so $e(0,0)=0$ and $H^\Lambda_{2\alpha_0}=0$, although the
whole degree-$2$ algebra is two-dimensional. The supported central cut is
therefore genuinely smaller than the degree, and no identity
$H^\Lambda_{d}=H_d(m)$ is used anywhere on this page. See
[[ex-degenerate-ariki-decomposition-numbers-in-small-rank]] for the full
height-two window.

**(b) Single blocks.** Let $\alpha\in Q^+$ be nonzero and such that
$H^\Lambda_\alpha\ne0$. Then $H^\Lambda_\alpha$ has no nontrivial central
idempotent: it is a single block. This is not immediate from the orbit-sum
description of $e_\alpha$ (a sum of orthogonal idempotents over an orbit is
central, but centrality alone does not make it primitive) and is proved in the
proof below from the actual suppliers: the stable Schur-Weyl endomorphism
isomorphism, full faithfulness on all projectives and the single-linkage
property of the corresponding genuine parabolic block.

**(c) Choice.** The imported suppliers cited in the proof
([[lem-type-a-tableau-central-summands-are-single-linkage-blocks]],
[[thm-higher-level-schur-weyl-endomorphism-isomorphism]],
[[thm-the-whittaker-functor-is-exact-and-fully-faithful-on-the-required-projectives]])
are proved under the Axiom of Choice; that assumption is inherited by the single
block statement of (b), and no further choice is made in this item: all
selections below are among the finitely many isomorphism classes of simples of
a finite-dimensional algebra.

## Facts & Assumptions

**Given:** Assume inherited AC [[def-axiom-of-choice]] as specified above.  A nonempty consecutive set $I\subseteq\mathbb Z$, a level $l\ge1$, an
integral multicharge $m_1\ge\cdots\ge m_l$, and the algebra $H_d(m)$ of
[[def-degenerate-cyclotomic-hecke-algebra]] with its commuting generators
$x_1,\dots,x_d$ satisfying $(x_1-m_1)\cdots(x_1-m_l)=0$ and its isomorphism
$H^\Lambda_\alpha\cong\operatorname{End}_{\mathcal O}(T_\alpha)^{op}$ in the admissible
stable realization supplied by
[[thm-higher-level-schur-weyl-endomorphism-isomorphism]]. We prove the
single-block property (b), as announced in the Remarks.

[F5] Pairwise comaximal ideals of a commutative ring satisfy the Chinese
remainder isomorphism $R/\prod_s I_s\cong\prod_s R/I_s$
([[thm-chinese-remainder-theorem-for-comaximal-ideals]]).

## Proof

**Proof technique:** direct.

1.1 **Per-position polynomial projectors and integer spectra.** The finite-dimensional algebra has a faithful regular representation. For adjacent dots put $\delta=x_r-x_{r+1}$ and $\phi_r=s_r\delta+1$. The native cross relations give $\phi_rx_r=x_{r+1}\phi_r$, $\phi_rx_{r+1}=x_r\phi_r$ and $\phi_r^2=1-\delta^2$. On a generalized joint weight whose adjacent entries differ by neither $1$ nor $-1$, $1-\delta^2$ is invertible by a finite nilpotent geometric series; hence the swapped weight is nonzero. If any entry of a nonzero weight is not integral, move its leftmost nonintegral entry left across all preceding integral entries. The swaps are invertible, but the resulting first entry contradicts $\prod_j(x_1-m_j)=0$. Thus all spectra are integral. For each position separately choose an annihilator $p_r(z)=\prod_{a\in S_r}(z-a)^{N_r}$ from its finite regular spectrum, with $N_r=\dim H_d(m)$ sufficient. Chinese remainder interpolation gives mutually orthogonal polynomial projectors $E_{r,a}(x_r)$ summing to one. Their products $e(i)=\prod_r E_{r,i_r}(x_r)$ give exactly the simultaneous generalized-weight projectors on every finite module; algebra identities follow from regular faithfulness. There is no assertion that the first-position cyclotomic polynomial annihilates other dots. [F5, given, construct, algebra]

1.2 **The content-block centre comparison.** In an admissible stable realization the actual endomorphism theorem identifies $H:=H^\Lambda_\alpha$ with $\operatorname{End}_{\mathcal O}(T_\alpha)^{op}$. Choose a projective generator $Q$ of the genuine block containing $T_\alpha$, and put $M=\pi Q$. Full faithfulness on projectives identifies $\operatorname{End}_{\mathcal O}(Q)$ with $\operatorname{End}_H(M)$, and $M$ contains the regular left module $\pi T_\alpha=H$. No projectivity of all of $M$ over $H$ is assumed. A central endomorphism $z$ of $M$ restricts on $H$ to right multiplication $R_h$. Commuting with every $R_b$ forces $h\in Z(H)$. For each $m\in M$, the map $f_m:H\to M$, $a\mapsto am$, commutes with $z$; evaluation at one gives $z(m)=hm$. Conversely multiplication by central $h$ commutes with every $H$-map. These constructions are inverse, proving $Z(\operatorname{End}_H M)=Z(H)$, and passage to opposite rings preserves centres. The stated Choice assumption is inherited only for the category-$\mathcal O$ suppliers. [given, construct, algebra]

2.1 **Central content interpolation.** Symmetric polynomials in the dots commute with crossings by the native cross relations, because $s_r$ commutes with $x_r+x_{r+1}$ and $x_rx_{r+1}$ and with all other dots; these generate the elementary symmetric polynomials. Their elementary symmetric values distinguish the finitely many different multisets of generalized joint eigenvalues. Finite Chinese remainder interpolation in these symmetric operators therefore gives a central multiset projector. Its action on every regular generalized weight is one precisely on that multiset, so it equals the orbit sum $e_\alpha$ of the per-position projectors from step 1.1. This argument does not require the annihilating polynomials for different positions to be equal. [F5, step 1.1, given, algebra]

2.2 **A single linkage block has no split central idempotent.** $\mathcal O_\alpha$ is a single linkage block by [[lem-type-a-tableau-central-summands-are-single-linkage-blocks]]: it admits no decomposition into two nonzero orthogonal factors. A central idempotent $f=f^2\ne0$ of $A$ with $f\ne1$ would split the projective generator $Q=Qf\oplus Q(1-f)$ into two nonzero summands whose Hom-spaces in both directions vanish, because every morphism between them is annihilated by composing with $f$ on either side in the two possible orders; this exhibits $\mathcal O_\alpha$ as the product of the two nonzero full subcategories generated by these summands, contradicting single-linkage. Hence $Z(A)$ has no nontrivial idempotent, and by step 1.2 the same holds for $Z(H)=Z(H^\Lambda_\alpha)$: the stable content component is a single block. [step 1.2, given, algebra]

3.1 **Symmetric polynomials in the $x_r$ are central.** It suffices to show that the elementary symmetric functions in the $x_r$ are fixed by conjugation with each basic transposition $s_r$, since these generate the symmetric polynomials and commute with all $x_i$ with $i\notin\{r,r+1\}$. The defining cross relations of [[def-degenerate-cyclotomic-hecke-algebra]] give $x_{r+1}s_r=s_rx_r+1$ and $s_rx_{r+1}=x_rs_r+1$; multiplying the first by $s_r$ on the left yields $s_rx_{r+1}s_r=x_r+s_r$, and the second yields $s_rx_rs_r=x_{r+1}-s_r$. Consequently $s_r(x_r+x_{r+1})s_r=x_r+x_{r+1}$ and $s_r(x_rx_{r+1})s_r=(x_{r+1}-s_r)(x_r+s_r)=x_rx_{r+1}$, so the two elementary generators in the pair $\{x_r,x_{r+1}\}$ are fixed, and $s_r^2=1$ makes the same true for every polynomial in them; together with the commuting generators this fixes every symmetric polynomial. Comparing with step 2.1, $e_\alpha$ commutes with every $x_i$ and every $s_r$, hence is central in $H_d(m)$. [step 2.1, given, algebra]

3.2 **Arbitrary consecutive $I$.** Let $I$ be any nonempty consecutive set and fix a content $\alpha$ and a finite list of residue operations to be performed. Choose a finite lower endpoint $k$ and an upper endpoint $r$ so that every charge $m_j$ lies in the letter alphabet $[k,r+1]$ and every simple-root support occurring in the list lies in $[k,r]$; enlarge an auxiliary stable realization only in the direction of the stable range, so that the added bottom rows of every tableau are forced to keep the ground entry in every column and every added top entry is absent. By the actual double-cut/common-tail compatibility and the contractible-central-corner restriction of [[def-stable-range-and-block-idempotent-for-higher-level-schur-weyl-duality]] and [[thm-the-whittaker-functor-is-exact-and-fully-faithful-on-the-required-projectives]], the $I$-supported content component $H^\Lambda_\alpha$ is the same finite-dimensional algebra as the corresponding content component of the stable realization, with the same intrinsic Specht modules, the same residue projectors and the same residue maps; no whole-degree equality is used. Applying step 2.2 to that common component proves (b) for arbitrary consecutive $I$. [step 2.2, given, algebra]

4.1 **Nonzeroness is open.** Centrality neither makes $e_\alpha$ primitive nor excludes $e_\alpha=0$; both questions are settled by steps 2.2 and 3.2 using the stable realization, whose hypotheses are the ones declared in the Given. [step 3.1, given]

5.1 **Level zero and the vanishing witness.** At level $0$ the cyclotomic polynomial is the empty product $1$, so $H_d(m)=0$ for $d>0$ and only $H_0(m)=\mathbb C$ remains; this is the convention of (2). For the witness, $I=\{0\}$, level $1$, charge $(0)$, $d=2$: the level-one presentation gives $x_1=0$ and $x_2=s_1$, so $H_2(0)=\mathbb C[S_2]$ with eigenvalues $\pm1$ for $x_2$; hence $E_0(x_2)=0$, $e(0,0)=0$, and the supported component $H^\Lambda_{2\alpha_0}=e_{(0,0)}H_2(0)$ is $0$, while $H_2(0)\ne0$. This completes the proof of the two claims (b) and the level-$0$ convention; the exactness and biadjointness clauses of (4) are the declared supplier statements of [[def-hecke-induction-and-restriction-functors-on-degenerate-cyclotomic-blocks]], not reproved here. [step 1.1, step 2.2, step 3.2, given, algebra] ∎
