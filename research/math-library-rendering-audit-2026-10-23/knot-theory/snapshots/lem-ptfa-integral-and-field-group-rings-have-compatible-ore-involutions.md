---
id: lem-ptfa-integral-and-field-group-rings-have-compatible-ore-involutions
kind: lemma
title: Integral and field PTFA group rings have compatible Ore fractions and
  involutions
status: published
origin: pipeline
deps:
  - def-poly-torsion-free-abelian-group
  - lem-torsion-free-abelian-extensions-preserve-group-ring-domains
  - lem-ptfa-groups-have-finite-folner-sets
  - lem-folner-group-ring-domains-have-ore-fractions
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: "pass"
    date: "2026-10-22"
    scope: "Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/inverse-problems-knot-theory-all-109-2026-10-19-publication.json."
    delegated_by: "owner"
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
sources:
  references:
    - title: Cochran, Orr and Teichner, Knot concordance, Whitney towers and
        L2-signatures, Section2.1
      url: https://arxiv.org/pdf/math/9908117
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 2
---

## Statement

Let $\Gamma$ be PTFA and let $k$ be either $\mathbb Z$ or a commutative field. The group ring $A=k[\Gamma]$ has no zero divisors, satisfies both Ore conditions, and has a fraction division ring $K$ in which every element is both a right and a left fraction of elements of $A$. The involution $\overline{\sum c_g g}=\sum c_g g^{-1}$ extends uniquely to an involutive anti-automorphism of $K$.

Every intermediate unital ring $A\subseteq R\subseteq K$ has no zero divisors, satisfies both Ore conditions, and has this same $K$ as its fraction division ring. If $R$ is stable under the extended involution, that involution restricts to $R$ and descends to its additive quotient $K/R$. None of these assertions requires a choice principle.

## Statement references

[[lem-torsion-free-abelian-extensions-preserve-group-ring-domains]]

[[lem-ptfa-groups-have-finite-folner-sets]]

[[lem-folner-group-ring-domains-have-ore-fractions]]

## Facts & Assumptions

**Given:** The coefficient ring, PTFA series and indicated intermediate ring when used.

[F1] Nonsplit extensions by torsion-free abelian quotients preserve absence of group-ring zero divisors over every commutative field. [[lem-torsion-free-abelian-extensions-preserve-group-ring-domains]]

[F2] PTFA groups have finite left Folner sets, and a group ring without zero divisors over a commutative field with these sets satisfies both Ore conditions and has a constructed right-fraction division ring. [[lem-ptfa-groups-have-finite-folner-sets]], [[lem-folner-group-ring-domains-have-ore-fractions]]

## Proof

1.1 If $k$ is a commutative field, apply [F1] finitely many times along the supplied subnormal PTFA series, starting with $k[\{1\}]=k$. Only normality of one subgroup in the next is needed. This gives absence of zero divisors in $A$. By [F2], $A$ satisfies both Ore conditions and embeds in a division ring $K$ whose elements are right fractions. Each right fraction $as^{-1}$ is also a left fraction: for $a\ne0$, the left Ore condition gives $ta=bs\ne0$, hence $as^{-1}=t^{-1}b$; zero uses denominator one. [F1, F2, given, construct, algebra]

2.1 For $k=\mathbb Z$, embed $A$ coefficientwise into $\mathbb Q[\Gamma]$ and use its division ring from step 1.1. The embedding is injective by the unique group basis, so $A$ has no zero divisors. A nonzero common right multiple of integral group-ring elements obtained over $\mathbb Q[\Gamma]$ has rational multiplier coefficients in two finite supports. Multiply both multipliers by a common positive integer clearing those finitely many denominators; this integer is central and nonzero, so the equality becomes a nonzero common right multiple over $A$. The same operation clears the left multipliers, proving both Ore conditions for $A$. A fraction $as^{-1}$ over $\mathbb Q[\Gamma]$ becomes $(Na)(Ns)^{-1}$ over $A$ for one common central positive integer $N$. Left fractions are cleared identically. Thus this same $K$ is the stated fraction division ring of $\mathbb Z[\Gamma]$. [step 1.1, construct, algebra]

3.1 On $A$ the displayed coefficient formula is additive, reverses products and has square the identity, directly from the group law and commutativity of $k$. Define on a right fraction $\jmath(as^{-1})=\bar s^{-1}\bar a$. To check independence, if $as^{-1}=bt^{-1}$ choose $su=tv=w\ne0$ in $A$; multiplication on the right by $w$ gives $au=bv$. Applying the original involution gives $\bar u\bar a=\bar v\bar b$, while $\bar w=\bar u\bar s=\bar v\bar t$. Multiplying on the left by $\bar w^{-1}$ proves $\bar s^{-1}\bar a=\bar t^{-1}\bar b$. Thus the formula is well-defined. [step 1.1, step 2.1, construct, algebra]

4.1 With the same common denominator, the sum is $(au+bv)w^{-1}$, and $\bar w^{-1}(\bar u\bar a+\bar v\bar b)=\bar s^{-1}\bar a+\bar t^{-1}\bar b$, proving additivity. For a product $(as^{-1})(bt^{-1})$ with $b\ne0$, choose $bu=sv\ne0$. It is $av(tu)^{-1}$. Its image is $\bar t^{-1}\bar u^{-1}\bar v\bar a$, which equals $\bar t^{-1}\bar b\bar s^{-1}\bar a$ because $\bar u\bar b=\bar v\bar s$. This is the reverse product of the two images. Zero factors are immediate. The map preserves one and sends nonzero elements to nonzero elements, so it preserves inverses in reverse multiplication. Its square fixes $A$ and therefore every fraction, proving it is an involutive anti-automorphism. Every anti-automorphism extending the one on $A$ must have this fraction formula, proving uniqueness. [step 3.1, construct, algebra]

5.1 Let $A\subseteq R\subseteq K$. It has no zero divisors since $K$ is a division ring. For nonzero $a,b\in R$, express $a^{-1}b=cd^{-1}$ over $A$; then $bd=ac\ne0$ is a common right multiple with multipliers in $R$. Express $ba^{-1}=u^{-1}v$ over $A$; then $ub=va\ne0$ is a common left multiple. All elements of $K$ are already fractions over $A$, so are fractions over $R$. If $R$ is involution-stable, step 4.1 and the equality $\jmath^2=1$ give $\jmath(R)=R$; hence $q+R\mapsto\jmath(q)+R$ is well-defined on the additive quotient and has square one. [step 1.1, step 2.1, step 4.1, construct, algebra]

6.1 Each field-extension step uses the finite supplied series, each multiplier or denominator clearing uses two finite supports, and each fraction calculation chooses a single finite common multiple. No order, section or system of representatives on an infinite set was chosen. This proves the stated choice scope for the group ring, its involution and every intermediate ring. [step 1.1, step 2.1, step 3.1, step 4.1, step 5.1, algebra] ∎
