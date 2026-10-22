---
id: lem-subgroup-group-ring-extension-is-faithfully-flat-and-preserves-fraction-quotients
kind: lemma
title: Subgroup group-ring extension and fraction quotients
status: draft
origin: session
deps: [def-tensor-product-of-modules-by-generators-and-relations, def-homology-object-of-a-chain-complex]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: Cha and Kim, Iterated satellite operators on the knot concordance group
      url: https://arxiv.org/pdf/2402.04629v2
      locator: Equation4.6 and preceding paragraph, printed page15
    - title: Cochran, Orr and Teichner, Knot concordance, Whitney towers and L2-signatures
      url: https://arxiv.org/pdf/math/9908117
      locator: Section2.1, Ore localization and induced coefficient modules
---

## Statement

Let $k$ be a commutative unital ring and $H\le G$ a subgroup. Set $A=k[H]\subseteq B=k[G]$. Extension $-\otimes_A B$ on right modules is exact and faithful, and for each right $A$-module $M$ the map $m\mapsto m\otimes1$ is split injective as an $A$-module map. For every right-$A$ chain complex $C_*$, without a boundedness or finiteness assumption, there is the natural isomorphism
$$H_i(C_*)\otimes_A B\cong H_i(C_*\otimes_A B).$$
The corresponding left-module assertions hold with the tensor factors reversed.

Suppose additionally that $A$ and $B$ have $1\ne0$, no zero divisors and both Ore conditions, and are embedded in their right-fraction division rings $F$ and $K$, respectively. Then the inclusion $A\to B$ extends uniquely to an injective ring map $F\to K$. Under this identification,
$$F\cap B=A,\qquad F/A\longrightarrow K/B\text{ is injective as an }A\text{-bimodule map}.$$
All assertions require no choice principle, including when $G/H$ is infinite. No splitting of a group extension is assumed.

## Facts & Assumptions

**Given:** The group rings and, for the second clause only, the supplied Ore division rings. Group-ring elements are finite formal $k$-linear combinations of group elements.

[F1] A tensor product is the group on pairs modulo additivity and balancing relations; every tensor is a finite sum of elementary tensors. [[def-tensor-product-of-modules-by-generators-and-relations]]

[F2] The homology of a chain complex is its cycles modulo its boundaries. [[def-homology-object-of-a-chain-complex]]

## Proof

1.1 For a finite set $S$ of left cosets $Hg$, let $B_S$ be the subgroup of $B$ consisting of sums supported on those cosets. It is a left $A$-submodule, and dropping all coefficients outside those cosets defines a left-$A$ linear projection $B\to B_S$ splitting inclusion. A finite choice of representatives $g_1,\ldots,g_r$ gives the explicit left-$A$ isomorphism $A^r\to B_S$, $(a_j)\mapsto\sum_j a_jg_j$: the supports of distinct summands are disjoint, and translating a supported sum by $g_j^{-1}$ proves surjectivity and uniqueness. Only representatives of this finite set of cosets are used; no global representative system is chosen. Every finite set of elements of $B$ lies in some such $B_S$, by taking the finitely many cosets that meet their supports. [given, construct, algebra]

1.2 For the fraction clause, send $as^{-1}\in F$, with $a,s\in A$ and $s\ne0$, to the same expression in $K$. If also $as^{-1}=bt^{-1}$ in $F$, choose a nonzero common right multiple $su=tv=w$ in $A$. Multiplying on the right by $w$ gives $au=bv$ in $A$, and the same identity in $K$ proves equality there. Thus the map is well-defined. At a common denominator the addition formula is $(au+bv)w^{-1}$ in both division rings. For a product $as^{-1}bt^{-1}$ with $b\ne0$, choose $bv=su$ nonzero in $A$. Then $s^{-1}b=uv^{-1}$ and the product is $au(tv)^{-1}$ in both rings; the case $b=0$ is immediate. Hence the map preserves multiplication, addition and unit. Its kernel is zero, since $as^{-1}=0$ implies $a=0$ in $K$ and hence in $A$. Uniqueness follows because a ring map extending $A$ must send the inverse of each nonzero $s\in A$ to its inverse in $K$. [given, construct, algebra]

2.1 Let $f:M'\to M$ be injective. A tensor $z\in M'\otimes_A B$ lies in the image of $M'\otimes_A B_S$ for a finite $S$, by [F1] and step 1.1. If $(f\otimes1)z=0$, apply $1\otimes(B\to B_S)$ to see that its representative $z_S$ maps to zero in $M\otimes_A B_S$. The explicit finite-free coordinates of step 1.1 identify this map with a finite direct sum of copies of $f$, so $z_S=0$ and $z=0$. For arbitrary maps $L\xrightarrow{f}M\xrightarrow{g}N$ exact at $M$, the same finite projection sends a tensor in $\ker(g\otimes1)$ into a finite direct sum of copies of $\ker g=\operatorname{im}f$. Lifting its finitely many coordinates gives a tensor in the image of $f\otimes1$. Conversely that image lies in the kernel since $gf=0$. A surjective map also remains surjective, by lifting the finitely many first coordinates of a tensor expression. Thus extension is exact for arbitrary right modules. [F1, step 1.1, construct, algebra]

3.1 Dropping all coefficients outside $H$ defines an $A$-bimodule map $p:B\to A$ with $p(1)=1$: multiplication by a group element of $H$ on either side preserves both $H$ and its complement. Balancing therefore defines $\rho_M:M\otimes_A B\to M$, $\rho_M(m\otimes b)=mp(b)$. It is right-$A$ linear and satisfies $\rho_M(m\otimes1)=m$. This proves the split unit assertion. If $f\otimes1=0$ for a module homomorphism $f$, then $f(m)=\rho_N((f\otimes1)(m\otimes1))=0$ for each $m$; the functor is faithful. Apply step 2.1 to the exact sequences defining cycles, boundaries and their quotient. It identifies tensor cycles with the kernel of the tensor differential, tensor boundaries with its image, and the tensor quotient with their quotient. The resulting map is $[z]\otimes b\mapsto[z\otimes b]$, proving the natural homology assertion degree by degree. Replacing left cosets by right cosets gives the same finite-coordinate proof for left modules, and the same coefficient projection splits their unit map. [F1, F2, step 1.1, step 2.1, construct, algebra]

4.1 Suppose $q\in F\cap B$. Write $q=as^{-1}$ with $a,s\in A$, $s\ne0$, so $qs=a$. Partition the finite support of $q$ into right cosets $gH$ and choose finitely many representatives, using $1$ for the coset $H$ if it occurs. Thus $q=\sum_j g_jq_j$ with $q_j\in A$. Right multiplication by $s$ preserves each of these coset supports. Since $a$ is supported on $H$, every summand outside that coset satisfies $g_jq_js=0$ as a group-ring element. The absence of zero divisors in $B$ and $s\ne0$ imply $q_j=0$ for each such summand. Therefore $q$ is supported on $H$, which means $q\in A$. The reverse inclusion is given, so $F\cap B=A$. The map of additive quotients $F/A\to K/B$ is well-defined, has kernel $(F\cap B)/A=0$, and respects both $A$ actions because all inclusions are ring maps. Every representative, denominator, lift and coordinate set in this proof belongs to a single finite argument; no simultaneous infinite family is selected. This proves all assertions without a choice principle. [F1, step 1.1, step 1.2, construct, algebra] ∎
