---
dependency_level: 2
id: lem-additive-multiplicative-algebraic-subgroups-and-degree
kind: lemma
title: Algebraic subgroups of an additive-multiplicative product and their degree
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
provenance:
  statement: ai-altered
  proof: ai-generated
deps:
- def-axiom-of-choice
- lem-bidegree-hilbert-filtration-projective-degree
- lem-hall-malcev-integer-abelian-structure-and-rank
- thm-integer-smith-normal-form-computes-kernel-and-cokernel
- thm-bezout-identity
- thm-classical-affine-nullstellensatz-correspondence
proof_strategy: direct
sources:
  references:
  - title: Damien Roy, ChapterVIII in Waldschmidt, Linear Independence of Logarithms
      of Algebraic Numbers, IMSc Report116, 1992
    url: https://www.imsc.res.in/xmlui/bitstream/handle/123456789/318/MR116.pdf?isAllowed=y&sequence=1
  - title: The Stacks Project, Cohomology of Schemes, Hilbert polynomials and Serre
      vanishing
    url: https://stacks.math.columbia.edu/download/coherent.pdf
---

## Statement

Assume the Axiom of Choice. Let $k$ be algebraically closed of characteristic zero and $G=k^{d_0}\times(k^*)^{d_1}$. Every closed algebraic subgroup $H$ of $G$ has the form $V\times T_\Phi$, where $V\subseteq k^{d_0}$ is a vector subspace and

$$T_\Phi=\{y\in(k^*)^{d_1}:y_1^{u_1}\cdots y_{d_1}^{u_{d_1}}=1\ \text{for every }u\in\Phi\}$$

for a subgroup $\Phi\subseteq\mathbb Z^{d_1}$. Here $\Phi$ is uniquely determined. Put $\delta_0=\dim_k V$, $\delta_1=d_1-\operatorname{rank}\Phi$ and $\delta=\delta_0+\delta_1$. Then $H$ is pure of dimension $\delta$, and for every $a,b\ge1$,

$$\deg_{a,b}H\ge\frac{\delta!}{\delta_0!\delta_1!}a^{\delta_0}b^{\delta_1}.$$

Finite disconnected multiplicative subgroups and zero coordinate factors are included.

## Statement references

[Waldschmidt–Roy, ChapterVIII §2, Proposition8.3 and Lemmas8.5–8.7](https://www.imsc.res.in/xmlui/bitstream/handle/123456789/318/MR116.pdf?isAllowed=y&sequence=1)

## Facts & Assumptions

**Given:** AC, the characteristic-zero algebraically closed field, product group and algebraic subgroup in the Statement.

[A1] Choice is inherited from the algebraic set and degree suppliers. ([[def-axiom-of-choice]])

[F1] The abstract character-independence assertion required here is proved by the translation argument in the first proof step. No diagonalizable-group hypothesis is assumed in that argument.

[F2] Subgroups of finite-rank integer free groups have finite bases; Smith reduction gives their explicit diagonal forms under integer coordinate changes, and integer gcds have Bézout representations. ([[lem-hall-malcev-integer-abelian-structure-and-rank]], [[thm-integer-smith-normal-form-computes-kernel-and-cokernel]], [[thm-bezout-identity]])

[F3] Positive-bidegree degrees have the product formula and ordinary affine degree is positive on each nonempty component. ([[lem-bidegree-hilbert-filtration-projective-degree]])

[F4] A reduced closed algebraic set is exactly the common zero locus of its vanishing ideal. ([[thm-classical-affine-nullstellensatz-correspondence]])

## Proof

1.1 Let $J$ be any group and let $\chi_1,\ldots,\chi_s:J\to k^*$ be distinct characters. If there is a nonzero linear relation among them, choose one with the fewest nonzero terms. One term cannot vanish, since a character is everywhere nonzero. For at least two terms, choose $h\in J$ on which the first and last characters differ. Evaluate the relation at $gh$ and subtract $\chi_s(h)$ times the relation at $g$. The last term disappears, the first retains a nonzero coefficient, and the resulting relation has fewer nonzero terms, a contradiction. This proves abstract character independence. [given, algebra]

1.2 We first separate the additive and multiplicative coordinates. For $(x,y)\in H$ and a polynomial $P$ vanishing on $H$, the function $P(mx,y^n)$, for integers $m,n$, is a finite sum $\sum_j Q_j(m)c_j^n$ with pairwise distinct nonzero $c_j\in k$. Since $(nx,y^n)\in H$, $\sum_j Q_j(n)c_j^n=0$ for every integer $n$. All $Q_j$ are zero. To prove this without a transcendence theorem, let $T$ shift $n$ to $n+1$. On $Q(n)c^n$, $T-c$ lowers the polynomial degree, while $T-c'$ for $c'\ne c$ preserves its degree and multiplies its leading coefficient by $c-c'$. If some $Q_j\ne0$, applying $\prod_{i\ne j}(T-c_i)^{\deg Q_i+1}$ annihilates the other summands but leaves a nonzero polynomial times $c_j^n$. It cannot vanish at every integer in characteristic zero. This contradiction proves the claim. Therefore $P(x,1)=P(0,y)=0$, and [F4] gives $(x,1),(0,y)\in H$. It follows that $H=H_0\times H_1$, with $H_0=\{x:(x,1)\in H\}$ and $H_1=\{y:(0,y)\in H\}$ closed algebraic subgroups. [given, A1, F4, algebra]

2.1 The additive subgroup $H_0$ is a vector subspace. Indeed, for $x\in H_0$ and a polynomial $P$ vanishing on $H_0$, the polynomial $P(tx)$ in $t$ vanishes at all integers, so is identically zero. Thus $tx\in H_0$ for every $t\in k$ by [F4]; closure under addition is already given. Choosing linear coordinates on $V=H_0$ identifies its degree-$D$ restriction space with all polynomials of total degree at most $D$ in $\delta_0$ variables, of dimension $\binom{D+\delta_0}{\delta_0}$. Hence $V$ has dimension $\delta_0$ and ordinary degree1. [step 1.2, F3, F4, algebra]

2.2 Define $\Phi=\{u\in\mathbb Z^{d_1}:y^u=1\text{ for all }y\in H_1\}$. Clearly $H_1\subseteq T_\Phi$. Write any polynomial vanishing on $H_1$ as a finite sum $\sum_u c_u y^u$. Two monomials restrict to the same character on $H_1$ precisely when their exponent difference belongs to $\Phi$. Grouping by these cosets and applying [F1], each coset's coefficient sum is zero. The same sums vanish on $T_\Phi$, where monomials in one coset also agree. Thus every polynomial vanishing on $H_1$ vanishes on $T_\Phi$, and [F4] proves $H_1=T_\Phi$. [step 1.2, F1, F4, algebra]

3.1 By [F2], after an integer invertible change of character coordinates, $\Phi$ is generated by $n_1e_1,\ldots,n_se_s$, with each $n_i\ge1$ and $s=\operatorname{rank}\Phi$. The corresponding invertible Laurent-monomial coordinate substitution is an algebraic automorphism of the torus. It identifies $T_\Phi$ with $\prod_{i\le s}\{z_i:z_i^{n_i}=1\}\times(k^*)^{d_1-s}$. Each finite factor has exactly $n_i$ distinct points because $k$ is algebraically closed of characteristic zero. Thus this set is a disjoint finite union of tori of dimension $\delta_1=d_1-s$, so is pure of that dimension. This also proves uniqueness of $\Phi$: an exponent outside the diagonal subgroup is detected either by a free nonzero torus coordinate, or by one of the finite factors. In the latter case, if every $n_i$th root also had its $u_i$th power equal to1, Bézout for the integers would put all $n_i$ distinct roots among the at most $\gcd(n_i,u_i)<n_i$ roots of that lower power equation, a contradiction. [step 2.2, F2, algebra]

4.1 Choose $\delta_1$ standard character coordinates whose images are integer-linearly independent modulo $\Phi$; such a subset exists because their images span the rational rank-$\delta_1$ quotient. Distinct monomials in these coordinates restrict to distinct characters on $T_\Phi$ by step2.2, so are linearly independent by [F1]. Its degree-$D$ restriction space therefore has dimension at least $\binom{D+\delta_1}{\delta_1}$, proving ordinary degree at least1 from its Hilbert polynomial of degree $\delta_1$. By [F3]'s product formula and step1.2, $H=V\times T_\Phi$ is pure of dimension $\delta$ and has degree at least $\binom\delta{\delta_0}a^{\delta_0}b^{\delta_1}$. If either coordinate factor is absent or a subgroup is finite, the same argument uses the empty standard basis and the degree of a finite reduced point set; all factorial and zeroth-power conventions give exactly the asserted formula. [step 2.1, step 3.1, F1, F2, F3, algebra] ∎
