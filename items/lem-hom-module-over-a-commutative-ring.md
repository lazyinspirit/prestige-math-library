---
id: lem-hom-module-over-a-commutative-ring
kind: lemma
title: "Over a commutative ring the homomorphism group $\\operatorname{Hom}_R(M,N)$ is an $R$-module"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-hom-groups-and-induced-hom-maps, def-commutative-ring, def-left-and-right-modules, def-module-homomorphism-kernel-image-and-cokernel]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-25
sources:
  scraped: []
  references:
    - title: "A. Altman and S. Kleiman, A Term of Commutative Algebra, 13th ed., §4"
      url: "https://web.mit.edu/18.705/www/13Ed.pdf"
    - title: "J. S. Milne, A Primer of Commutative Algebra, v4.03, §1"
      url: "https://www.jmilne.org/math/xnotes/CA.pdf"
pipeline_run: null
---

## Statement

Let $R$ be a commutative ring and let $M,N$ be $R$-modules. Then the abelian
group $\operatorname{Hom}_R(M,N)$ of [[def-hom-groups-and-induced-hom-maps]]
becomes an $R$-module under the pointwise scalar action

$$(rf)(m):=r\,f(m)\qquad(r\in R,\ f\in\operatorname{Hom}_R(M,N),\ m\in M).$$

The underlying additive group is the published one, unchanged: this extends the
abelian-group structure rather than replacing it. Commutativity of $R$ is used,
and is used only to see that $rf$ is again $R$-linear.

## Facts & Assumptions

**Given:** A commutative ring $R$ and $R$-modules $M,N$.

[L1] For left $R$-modules $M,N$, the set $\operatorname{Hom}_R(M,N)$ of module homomorphisms is an abelian group under pointwise addition, with zero the zero homomorphism and inverse $(-f)(m)=-f(m)$ ([[def-hom-groups-and-induced-hom-maps]]).

[L2] A ring $R$ is **commutative** when its multiplication is commutative, $xy=yx$ for all $x,y\in R$ ([[def-commutative-ring]]).

[L3] A left $R$-module is an abelian group $(M,+,0_M)$ with an action satisfying $r(m+n)=rm+rn$, $(r+s)m=rm+sm$, $(rs)m=r(sm)$ and $1_Rm=m$ ([[def-left-and-right-modules]]).

[L4] A function $f:M\to N$ between left $R$-modules is an **$R$-module homomorphism** if $f(m+m')=f(m)+f(m')$ and $f(rm)=rf(m)$ for all $m,m'\in M$ and $r\in R$ ([[def-module-homomorphism-kernel-image-and-cokernel]]).

## Proof

**Proof technique:** direct.

1.1 The set $\operatorname{Hom}_R(M,N)$ already carries the pointwise addition making it an abelian group, with the zero homomorphism as neutral element and $(-f)(m)=-f(m)$ as inverse. Nothing below alters that addition. [L1, given]

2.1 For $r\in R$ and $f\in\operatorname{Hom}_R(M,N)$ the function $rf$ defined by $(rf)(m)=r\,f(m)$ is again an $R$-module homomorphism. Additivity is pointwise: $(rf)(m+m')=r(f(m)+f(m'))=rf(m)+rf(m')$. Homogeneity is where commutativity enters: for $s\in R$, $(rf)(sm)=r\,f(sm)=r(s\,f(m))=(rs)f(m)=(sr)f(m)=s\big(r\,f(m)\big)=s\,(rf)(m)$. [L2, L3, L4, step 1.1, algebra]

3.1 The module axioms hold pointwise, each being an identity in $N$ evaluated at an arbitrary $m\in M$: $\big((r+r')f\big)(m)=(r+r')f(m)=rf(m)+r'f(m)$, $\big(r(f+g)\big)(m)=r\big(f(m)+g(m)\big)=rf(m)+rg(m)$, $\big((rr')f\big)(m)=(rr')f(m)=r\big(r'f(m)\big)$ and $(1_Rf)(m)=1_Rf(m)=f(m)$. [L1, L3, step 2.1, algebra]

4.1 So $\operatorname{Hom}_R(M,N)$ with the addition of step 1.1 and the action of step 2.1 satisfies the definition of an $R$-module, and its additive group is the published abelian group unchanged. [step 1.1, step 3.1] ∎

## Remarks

- **Commutativity is not decoration here.** Over a noncommutative $R$ the function $rf$ need not be $R$-linear, since the computation in step 2.1 turns on $rs=sr$. That is why [[def-hom-groups-and-induced-hom-maps]] gives only an abelian group in general, and why the module structure is recorded separately rather than being read into the definition.

- **The induced maps are $R$-linear for this structure.** For $u\colon M\to M'$ and $v\colon N\to N'$ the maps $u^*$ and $v_*$ of [[def-hom-groups-and-induced-hom-maps]] satisfy $u^*(rg)=r\,u^*(g)$ and $v_*(rf)=r\,v_*(f)$, both by evaluating at a point, so nothing about the published functoriality has to be revisited.
