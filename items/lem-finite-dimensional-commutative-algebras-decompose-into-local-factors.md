---
id: lem-finite-dimensional-commutative-algebras-decompose-into-local-factors
kind: lemma
title: Finite-dimensional commutative algebras decompose into local factors
deps: []
provenance:
  statement: literature-derived
  proof: ai-altered
status: published
origin: pipeline
verification:
  audited: 2026-09-12
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  references:
    - title: Jacobsen, Block fusion systems and the center of the group ring, Lemma 2.32 and Theorem 2.33, pp.18–19; general-field lifting proved locally
      url: https://www.math.ku.dk/bibliotek/arkivet/phd-theses/phd14mwj.pdf
proof_strategy: direct
---

## Statement

Every finite-dimensional commutative unital $k$-algebra $A$ is a finite product of local $k$-algebras. For every ideal $I$, writing $A=\prod A_i$ gives $I=\prod I_i$ and $A/I\cong\prod A_i/I_i$, and every nonzero factor quotient is local. The zero algebra is the empty product.

## Facts & Assumptions

**Given:** A finite-dimensional commutative unital algebra over any field.

## Proof

**Proof technique:** direct.

1.1 A nontrivial idempotent $e$ gives $A\cong eA\times(1-e)A$ by $a\mapsto(ea,(1-e)a)$, with inverse addition. Both factors have strictly smaller positive dimension. Repeated splitting therefore terminates with finitely many nonzero factors having no nontrivial idempotents. Zero requires no factors. [given]

2.1 In such a factor $B$, let $m_a$ be multiplication by $a$. Choose $n$ with both kernels and images stabilized through $2n$, possible by finite dimension. If $v=a^nw$ is also in $\ker m_a^n$, then $a^{2n}w=0$ implies $a^nw=0$, so $v=0$. Rank-nullity gives $B=\ker m_a^n\oplus\operatorname{im}m_a^n$. Both spaces are ideals, whose cross-products lie in their zero intersection. Decomposing $1=u+v$ in them gives $u^2=u,v^2=v,uv=0$. Indecomposability forces one summand to be zero. A zero kernel makes $m_a$ bijective and $a$ a unit; a zero image gives $a^n=0$. Thus every nonunit is nilpotent. [step 1.1]

3.1 In a commutative ring the nilpotents form an ideal: if $a^r=b^s=0$, every term of $(a+b)^{r+s}$ vanishes, and $(ca)^r=0$. This ideal $\mathfrak m$ is proper since $1$ is not nilpotent, and every element outside it is a unit by step 2.1. Consequently $B/\mathfrak m$ is a field, and every proper ideal lies in $\mathfrak m$; this proves uniqueness of the maximal ideal without an existence theorem. [step 2.1]

4.1 Multiplication by the coordinate idempotents shows that any ideal $I$ contains every coordinate projection of each of its elements. Finite addition then gives $I=\prod I_i$ and the displayed quotient isomorphism. If $I_i\ne A_i$, it lies in the unique maximal ideal $\mathfrak m_i$; the quotient has proper ideal $\mathfrak m_i/I_i$ and every class outside it has a unit representative. This ideal is its unique maximal ideal. If $I_i=A_i$, that quotient is zero and may be omitted. [step 1.1, step 3.1] ∎

## Sources

Jacobsen, Block fusion systems and the center of the group ring, Lemma 2.32 and Theorem 2.33, pp.18–19; general-field lifting proved locally. Local argument and conventions as displayed above.
