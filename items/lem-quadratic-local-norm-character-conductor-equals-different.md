---
dependency_level: 14
id: lem-quadratic-local-norm-character-conductor-equals-different
kind: lemma
title: Quadratic local norm characters have conductor equal to the different exponent
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
deps:
- def-local-field-valuation-ring-uniformizer-and-residue-field
- lem-local-integers-of-finite-separable-local-extension-are-monogenic
- thm-local-trace-dual-is-a-fractional-ideal
- def-different-ideal-of-a-finite-local-extension
- thm-finite-extension-local-degree-equals-ramification-index-times-residue-degree
- thm-unique-extension-of-a-nonarchimedean-absolute-value
- def-field-norm-and-trace
- thm-field-norm-and-trace-by-embeddings
- lem-unramified-local-extension-has-trivial-different
- thm-finite-unramified-local-extensions-classified-by-residue-extensions
- thm-multiplicative-group-of-a-finite-field-is-cyclic
- thm-extensions-of-finite-fields-are-galois-with-cyclic-frobenius-group
- def-lower-ramification-groups-of-a-local-galois-extension
- thm-local-artin-reciprocity-and-norm-index
- thm-first-isomorphism-theorem-groups
- cor-order-of-a-quotient-group
- thm-choice-implies-dependent-implies-countable-choice
- def-axiom-of-choice
- def-countable-choice
- def-dependent-choice
justified_by: []
proof_strategy: direct
axiom_use: Full AC and Countable Choice retain the actual local monogeneity/trace-dual
  and completion hypotheses. AC supplies DC for the accepted canonical local Artin
  norm-kernel interface; the elementary quadratic norm/conductor proof itself uses
  finite residue selections and specified convergent products. No choice-free refinement
  or general/global reciprocity-filtration theorem is asserted.
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
  - title: J. S. Milne, Class Field Theory, version4.03; local norm/conductor context
    url: https://www.jmilne.org/math/CourseNotes/CFT.pdf
    locator: Local norm and character context, ChapterIII§1 and ChapterV§3. Complete
      quadratic-special calculations are reconstructed below from actual locally written
      providers; no general conductor/filtration theorem is imported and no new full-book
      reading is asserted.
---

## Statement

Assume AC and Countable Choice. Let $E/F$ be a separable quadratic extension of complete discretely valued fields with finite residue fields. Normalize the integer valuations, write $e,f$ for ramification and residue degrees, $\mathfrak P_E,\mathfrak P_F$ for maximal ideals, $U_E=\mathcal O_E^\times$, $U_F=\mathcal O_F^\times$, and $U_E^r=1+\mathfrak P_E^r$, $U_F^r=1+\mathfrak P_F^r$ for $r\ge1$, with $U_E^0=U_E$, $U_F^0=U_F$. Let $\sigma$ be the nonidentity automorphism and $\mathfrak D_{E/F}=\mathfrak P_E^d$. Then, for every integer $r$,
$$\operatorname{Tr}_{E/F}(\mathfrak P_E^r)=\mathfrak P_F^{\lfloor(r+d)/e\rfloor}.$$
The quotient $F^\times/N_{E/F}(E^\times)$ has order two. Its unique nontrivial character $\eta_{E/F}:F^\times\to\{1,-1\}\subset\mathbb C^\times$ is continuous, including when $F$ has characteristic two, and its conductor exponent is
$$a(\eta_{E/F})=\min\{m\ge0:\eta_{E/F}(U_F^m)=1\}=fd.$$
This is zero in the unramified case and equals $d$ in the ramified case. If ramified, every uniformizer $\pi$ generates $\mathcal O_E$ over $\mathcal O_F$, $d=v_E(\pi-\sigma\pi)$, and the nonidentity element belongs to exactly $G_0,\ldots,G_{d-1}$ among the nonnegative lower ramification groups. For the nontrivial complex one-dimensional Galois character $\omega$, the lower-group Artin sum
$$\sum_{i\ge0}\frac{|G_i|}{|G_0|}\dim_{\mathbb C}(V_\omega/V_\omega^{G_i})$$
is $d$ when ramified and zero when unramified. Thus this sum, the multiplicative-character conductor and the integral local trace-Gram discriminant exponent all equal $fd$. Composing $\omega$ with the actual supplied canonical local Artin map gives exactly $\eta_{E/F}$, by its finite norm-kernel property. No general reciprocity-filtration or Hasse–Arf theorem is assumed. For the split quadratic algebra $F\times F$, the norm is onto, its norm character is trivial, and both conductor and integral trace-Gram discriminant exponents are zero. No global principal-idele product law or quadratic Hecke-character existence is asserted.

## Facts & Assumptions

**Given:** The data and explicit choice hypotheses in the Statement.

[F1] Local fields here are complete discrete finite-residue valued fields. The CC local-degree theorem gives $[E:F]=ef$; the extending absolute value is unique and complete, so base-field automorphisms preserve valuation. [[def-local-field-valuation-ring-uniformizer-and-residue-field]] [[thm-finite-extension-local-degree-equals-ramification-index-times-residue-degree]] [[thm-unique-extension-of-a-nonarchimedean-absolute-value]]

[F2] Under CC the local integer ring is monogenic; when the residues coincide every uniformizer generates it. For $\mathcal O_E=\mathcal O_F[\alpha]$ with monic minimal polynomial $g$, the actual trace-dual proof gives $\mathfrak D^{-1}=g'(\alpha)^{-1}\mathcal O_E$ and $\mathfrak D=g'(\alpha)\mathcal O_E$. The codifferent is the set of $x$ with $\operatorname{Tr}(x\mathcal O_E)\subseteq\mathcal O_F$. [[lem-local-integers-of-finite-separable-local-extension-are-monogenic]] [[thm-local-trace-dual-is-a-fractional-ideal]] [[def-different-ideal-of-a-finite-local-extension]]

[F3] Norm and trace are the multiplication determinant and trace; in a separable extension they are the product and sum over embeddings. [[def-field-norm-and-trace]] [[thm-field-norm-and-trace-by-embeddings]]

[F4] The CC unramified classification identifies the Galois action with the residue Frobenius action; a base uniformizer remains a uniformizer. A finite unramified local extension has unit different. [[thm-finite-unramified-local-extensions-classified-by-residue-extensions]] [[lem-unramified-local-extension-has-trivial-different]]

[F5] Finite-field multiplicative groups are cyclic; finite residue extensions are Galois with cyclic Frobenius group. [[thm-multiplicative-group-of-a-finite-field-is-cyclic]] [[thm-extensions-of-finite-fields-are-galois-with-cyclic-frobenius-group]]

[F6] The actual lower-group definition is $G_i=\{\tau:v_E(\tau x-x)\ge i+1\text{ for every }x\in\mathcal O_E\}$. The first group is the kernel of the residue action. [[def-lower-ramification-groups-of-a-local-galois-extension]]

[F7] The actual distinguished canonical local Artin map, under AC+DC, induces the finite quotient with kernel exactly $N(E^\times)$ for the given quadratic extension. This is used only to identify the character after the elementary norm/index proof, not as a norm-index premise for that proof. [[thm-local-artin-reciprocity-and-norm-index]]

[F8] A homomorphism induces the isomorphism by its kernel, and finite quotient cardinalities are their subgroup indices. [[thm-first-isomorphism-theorem-groups]] [[cor-order-of-a-quotient-group]]

[A1] AC and CC are retained at the actual local interfaces; AC implies DC and CC, supplying the canonical-map DC hypothesis as well. [[def-axiom-of-choice]] [[def-countable-choice]] [[thm-choice-implies-dependent-implies-countable-choice]] [[def-dependent-choice]]

## Proof

**Given:** The stated data.

1.1 A separable quadratic minimal polynomial has its distinct other root in $E$, so $E/F$ has precisely the automorphisms $1,\sigma$, also in characteristic two. By [F1] and [F5], either $e=1,f=2$ is unramified or $e=2,f=1$ is totally ramified. From [F1] and [F3], $\operatorname{Tr}x=x+\sigma x$, $Nx=x\sigma x$, $v_F(Nx)=fv_E(x)$, and $N(1+x)=1+\operatorname{Tr}x+Nx$. In the ramified case choose any uniformizer $\pi$. By [F2], $\mathcal O_E=\mathcal O_F[\pi]$, with basis $1,\pi$. Put $T=\operatorname{Tr}\pi$, $P=N\pi$. Then $v_F(P)=1$, $v_F(T)\ge1$, and $\mathfrak D=(2\pi-T)\mathcal O_E=(\pi-\sigma\pi)\mathcal O_E$ by [F2]. Hence $d=v_E(\pi-\sigma\pi)$ is finite. In odd residue characteristic $v_E(2\pi)=1<v_E(T)$, giving $d=1$. In residue characteristic two $v_E(2\pi)\ge3$ (infinity in characteristic two) and $v_E(T)\ge2$, giving $d\ge2$. [F1, F2, F3, F5, A1, given, choose, algebra]

2.1 For every integer $r$, $I=\mathfrak P_E^r$ is a finite $\mathcal O_F$-module, being a scalar multiple of the finite monogenic module [F2]. Its trace image is a nonzero fractional $\mathcal O_F$-ideal. To see nonzeroness, in characteristic not two use $\operatorname{Tr}1=2$; in characteristic two choose a field generator $\alpha$, whose separable polynomial $X^2-T_\alpha X+P_\alpha$ has $T_\alpha\ne0$, so $\operatorname{Tr}\alpha\ne0$. Multiplying the chosen element by a sufficiently deep base uniformizer puts it in $I$ without killing its trace. For every integer $m$, $\operatorname{Tr}I\subseteq\mathfrak P_F^m$ is equivalent to $\operatorname{Tr}(\mathfrak P_F^{-m}I)\subseteq\mathcal O_F$, and then to $\mathfrak P_F^{-m}I\subseteq\mathfrak D^{-1}$. Indeed this module is an $\mathcal O_E$-ideal: integral multiplication preserves it, so the first trace condition is exactly membership in the trace dual. Since $\mathfrak D^{-1}=\mathfrak P_E^{-d}$ by [F2], the condition is $r-em\ge-d$. Writing the nonzero trace ideal as $\mathfrak P_F^a$ makes these equivalences for all $m$ force $a=\lfloor(r+d)/e\rfloor$. This is equality of trace images, not merely a containment, and includes negative $r$. [F1, F2, F3, step 1.1, construct, algebra]

3.1 Suppose now the extension is ramified with residue characteristic two, so $d\ge2$ by step 1.1; write $k$ for the common residue field and $q=|k|$. For $m\ge d$ put $r_m=2m-d+1$. Step 2.1 gives $\operatorname{Tr}(\mathfrak P_E^{r_m})=\mathfrak P_F^m$ and $\operatorname{Tr}(\mathfrak P_E^{r_m+1})=\mathfrak P_F^{m+1}$. Thus the trace map on these one-dimensional $k$-layers is an isomorphism; the norm term has valuation at least $r_m\ge m+1$. Fix uniformizers $\pi,\varpi$ of $E,F$ and finite residue sections. Given $u\in U_F^d$, start $v_d=1$; if $u/Nv_m\in U_F^m$, the nonzero leading trace coefficient and the finite residue section specify $x_m\in\mathfrak P_E^{r_m}$ with $N(1+x_m)\equiv u/Nv_m\pmod{U_F^{m+1}}$, and put $v_{m+1}=v_m(1+x_m)$. Since $r_m\to\infty$, these products are Cauchy: products of terms of valuation at least $r_M$ differ from one by valuation at least $r_M$. Completeness gives a limit $v\in U_E^{d+1}$; the finite polynomial norm is continuous and separation gives $Nv=u$. Consequently $U_F^d\subseteq N(U_E^{d+1})\subseteq N(U_E^{d-1})$. This is an actual convergent correction, not an unproved closed-image assertion, and for $d=2$ it starts at $r_2=3$. [F1, F2, F3, A1, step 1.1, step 2.1, construct, algebra]

4.1 At the critical source layer $r=d-1$, step 2.1 gives trace images $\mathfrak P_F^r$ and $\mathfrak P_F^{r+1}$ for source ideals $\mathfrak P_E^r$ and $\mathfrak P_E^{r+1}$. In the residue coordinates $x=\pi^r\widetilde z\pmod{\mathfrak P_E^{r+1}}$, the leading trace is therefore $Az$ for $A\in k^\times$. The leading norm is $Bz^2$ for $B\in k^\times$, since $N\pi$ has base valuation one and the residue norm of a unit in this ramified case is its residue squared. Hence $N(1+x)$ on $U_F^r/U_F^{r+1}$ is $z\mapsto Az+Bz^2$. This is $\mathbb F_2$-linear with exactly two kernel elements $0,A/B$, so its image has exactly $q/2$ elements by [F8]. The next source ideal contributes only to $U_F^{r+1}$; moreover $2r\ge r+1$ even for $d=2$, so the source layer is indeed its additive residue quotient. Step 3.1 supplies all $U_F^{r+1}$ in the same norm group. Thus $[U_F^{d-1}:N(U_E^{d-1})]=2$, including $q=2$, when its residue image may be just zero. [F1, F3, F8, step 1.1, step 2.1, step 3.1, algebra]

5.1 For $1\le m<d-1$, step 2.1 instead gives $\operatorname{Tr}(\mathfrak P_E^m)\subseteq\mathfrak P_F^{m+1}$. Therefore the leading norm induces a nonzero multiple of $z^2$ from $U_E^m/U_E^{m+1}$ onto $U_F^m/U_F^{m+1}$, because squaring is a bijection of the finite field of characteristic two. The next source layer maps into the next target layer by the same trace and norm estimates. The residue-unit norm $k^\times\to k^\times$ is also squaring and onto. Correcting this finite list of layers proves that $N(U_E)$ maps onto $U_F/U_F^{d-1}$. When $d=2$ the principal-layer list is empty and this assertion uses residue units alone. This establishes the low-layer surjectivity needed to interpret the critical index in step 4.1 for norms of all units. [F1, F3, F5, step 1.1, step 2.1, step 4.1, construct, algebra]

6.1 If $u\in U_E$ has $Nu=1$ and $u\ne-1$, put $x=1+u$, so $x/\sigma x=u$. If $u=-1$, put $x=\pi-\sigma\pi\ne0$; then $\sigma x=-x$ and again $x/\sigma x=u$. In characteristic two the exceptional $u$ is one and this same formula still works. Write $x=\pi^jv$ with $j\in\mathbb Z$, $v\in U_E$. Monogeneity writes $v=a+b\pi$, $a,b\in\mathcal O_F$, so $v_E(\sigma v-v)\ge d$; hence $v/\sigma v\in U_E^d$. Also $\pi/\sigma\pi\in U_E^{d-1}$. Thus every norm-one unit is in $U_E^{d-1}$, including negative $j$. For $H=N(U_E)$ and $H_r=N(U_E^{d-1})$, [F8] now gives $H/H_r\cong U_E/(\ker N\,U_E^{d-1})=U_E/U_E^{d-1}$, of order $(q-1)q^{d-2}$. Step 5.1 makes its map onto $U_F/U_F^{d-1}$ surjective; that target has the same order, by its residue-unit quotient and $d-2$ additive layers. Hence the map is injective, proving $H\cap U_F^{d-1}=H_r$. Step 4.1 then gives $[U_F:H]=2$, $U_F^d\subseteq H$ and $U_F^{d-1}\nsubseteq H$. Since $v_F(Ny)=v_E(y)$ in this ramified case and $N\pi$ has valuation one, norm units are exactly unit norms and all valuations are attained. Therefore $F^\times/N(E^\times)\cong U_F/H$ has order two, with norm-character conductor exactly $d$. [F1, F2, F3, F8, step 1.1, step 3.1, step 4.1, step 5.1, construct, algebra]

7.1 Consider the remaining ramified case, odd residue characteristic; step 1.1 gives $d=1$. Every $u\in U_F^1$ is a square in $F$: with $a_0=1$ iterate $a_{n+1}=a_n-(a_n^2-u)/(2a_n)$. Derivatives remain units, polynomial Taylor expansion doubles each positive error valuation, and completeness gives $a\in U_F^1$ with $a^2=u$. For this base-field element $Na=a^2$, so $U_F^1\subseteq N(U_E)$. Modulo the residue ideal the unit norm is squaring. Its image has index two in the cyclic group $k^\times$ of even order by [F5]; every such residue square is attained by a base-field unit. Together with the preceding principal-unit correction this makes $N(U_E)$ exactly the inverse image of $k^{\times2}$, of index two in $U_F$, and the conductor is one. The valuation argument of step 6.1, using $f=1$, gives norm index two in $F^\times$ here as well. Thus all ramified cases have the asserted index and exact conductor, without using the wild critical polynomial in the tame case. [F1, F3, F5, F8, step 1.1, step 6.1, construct, algebra]

8.1 In the remaining unramified case $e=1,f=2$, [F4] gives $d=0$ and the residue extension $\ell/k$ of order $q^2/q$ with $\sigma$ acting by $z\mapsto z^q$. Its multiplicative norm is onto: a generator of $\ell^\times$ maps by $z^{q+1}$ to order $q-1$. Its trace $z+z^q$ is onto as well: it is $k$-linear and cannot vanish identically, since a nonzero degree-$q$ polynomial has at most $q$ roots (divide successively by its linear root factors). This includes characteristic two. Choose a unit with the desired norm residue, fix finite residue sections and one trace preimage for each of the finitely many residue digits, and use the base uniformizer $\varpi$ to correct successively. For every $m\ge1$, $N(1+\varpi^mx)\equiv1+\varpi^m\operatorname{Tr}_{\ell/k}\bar x\pmod{\mathfrak P_F^{m+1}}$, since the quadratic norm term has valuation at least $2m$. The specified correction product converges as in step 3.1, and continuity of the polynomial norm gives the exact desired unit norm. Thus all units are norms; norm valuations are precisely $2\mathbb Z$, attained by the base uniformizer's norm. The quotient has order two and its nontrivial character is $(-1)^{v_F(a)}$, with conductor zero. Together with step 7.1 this proves the elementary norm-index and conductor assertions in every field case. [F1, F3, F4, F5, F8, step 1.1, step 3.1, step 7.1, choose, construct, algebra]

9.1 In the ramified case monogeneity gives $\sigma(a+b\pi)-(a+b\pi)=b(\sigma\pi-\pi)$ for all integral elements. The minimum valuation is exactly $d$, attained at $\pi$. By [F6], the nonidentity element belongs to $G_i$ exactly when $i+1\le d$. Thus the nontrivial one-dimensional complex character has codimension one and weight $|G_i|/|G_0|=1$ in precisely $d$ terms of the Artin sum, yielding $d$. In the unramified case the residue action is faithful by [F4], so $G_0$ and all further groups are trivial and the sum is zero. The ramified integral power basis $(1,\pi)$ has trace-Gram determinant $(\pi-\sigma\pi)^2$, with base valuation $d$ because $e=2$. In the unramified case the monogenic residue-generator basis in [F2] reduces to a separable residue basis, whose trace-Gram determinant is nonzero, so its local discriminant is a unit. Explicitly its quadratic minimal polynomial has separable reduction, hence $T^2-4P$ has nonzero reduction, in characteristic two as well. Thus its exponent is zero. In either case this equals $fd$ and the norm of the different has that exponent: $|\mathcal O_E/\mathfrak P_E^d|=(q_F^f)^d$. These compute only the quadratic lower sum and local discriminant, without a general Hasse–Arf or reciprocity-filtration step. [F1, F2, F3, F4, F6, step 1.1, step 2.1, step 7.1, step 8.1, algebra]

10.1 The index-two norm subgroup in the field case contains $U_F^d$ when ramified and $U_F$ when unramified, by steps 6.1–8.1. These are open neighborhoods of one in $F^\times$; their cosets show the full norm subgroup and its other coset are open. Its unique nontrivial character to the discrete complex sign group is therefore continuous; this proves continuity rather than inferring it from finite index. The actual canonical map [F7] has exactly this norm kernel and is onto $\operatorname{Gal}(E/F)$; composition with $\omega(\sigma)=-1$ is the same character by uniqueness. This identification is made after the elementary proof, uses [A1] to supply DC, and invokes no general filtration theorem. Finally for $F\times F$, norm $(a,b)\mapsto ab$ is onto and the integral basis $(1,0),(0,1)$ has identity trace-Gram matrix, so character and exponents are zero. Together with steps 2.1 and 9.1 this proves every asserted clause. No product formula on global principal ideles or global Hecke-character existence has been deduced. [F1, F3, F7, F8, A1, step 2.1, step 6.1, step 7.1, step 8.1, step 9.1, algebra] ∎
