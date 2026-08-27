---
id: thm-additive-functors-from-a-ring-to-abelian-groups-are-left-modules
kind: theorem
title: "Additive functors from a ring to abelian groups are left modules"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-a-one-object-preadditive-category-is-the-same-thing-as-a-ring, def-left-and-right-modules, def-module-homomorphism-kernel-image-and-cokernel]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-27
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Kiran S. Kedlaya, Solid modules over an ordinary ring, Example 1.2.2"
      url: "https://www.kskedlaya.org/condensed/sec_solid1.html"
    - title: "Mike Prest, Modules as exact functors, Modules as functors"
      url: "https://arxiv.org/pdf/1801.08015"
pipeline_run: frontier-20
---

## Statement

Let $R$ be viewed as the one-object preadditive category of
[[thm-a-one-object-preadditive-category-is-the-same-thing-as-a-ring]]. Then an
additive functor $F:R\to\mathbf{Ab}$ determines a left $R$-module on the
abelian group $F(*)$, and every left $R$-module arises in this way.

## Facts & Assumptions

**Given:** A ring $R$, its one-object preadditive category with object $*$, and
an additive functor $F:R\to\mathbf{Ab}$ or a left $R$-module $M$.

[L1] A ring may be read as a one-object preadditive category whose
endomorphisms compose by ring multiplication
([[thm-a-one-object-preadditive-category-is-the-same-thing-as-a-ring]]).

[L2] A left $R$-module is an abelian group with an action satisfying the four
module axioms ([[def-left-and-right-modules]]).

[L3] A module homomorphism preserves the additive group law and the scalar
action ([[def-module-homomorphism-kernel-image-and-cokernel]]).

## Proof

**Proof technique:** direct.

1.1 Let $M:=F(*)$. Since $F$ is additive, the map $F(r):M\to M$ is a group homomorphism for each $r\in R$. Define $r\cdot m:=F(r)(m)$. [L1, L2]

1.2 Conversely, if $M$ is a left $R$-module, define $F_M(*)=M$ and $F_M(r)(m)=r\cdot m$. The module axioms in [L2] give preservation of addition on the unique hom-set, preservation of composition, and preservation of the identity. So $F_M$ is an additive functor. [L1, L2]

2.1 The identity morphism of $*$ is $1_R$ by [L1], so $1_R\cdot m=F(1_R)(m)=m$. Also $(rs)\cdot m=F(rs)(m)=F(r)F(s)(m)=r\cdot(s\cdot m)$. Additivity of $F$ on the hom-group $R$ gives $(r+s)\cdot m=r\cdot m+s\cdot m$, and each $F(r)$ being a group homomorphism gives $r\cdot(m+n)=r\cdot m+r\cdot n$. Thus $M$ is a left $R$-module by [L2]. [L1, L2, step 1.1]

3.1 Steps 2.1 and 1.2 are inverse constructions on the underlying action, so additive functors $R\to\mathbf{Ab}$ are exactly left $R$-modules. If one also tracks maps between such functors, the same equations are exactly the ones in [L3] for module homomorphisms. [L2, L3, step 2.1, step 1.2] ∎
