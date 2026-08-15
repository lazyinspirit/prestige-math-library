---
id: lem-coextension-of-scalars-carries-a-module-structure
kind: lemma
title: 'Coextension of scalars $\operatorname{Hom}_R(S,M)$ carries its canonical left $S$-module structure'
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-ring-homomorphism, def-left-and-right-modules, def-module-homomorphism-kernel-image-and-cokernel, def-the-set-of-functions-from-one-set-to-another]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: 'Emily Riehl, Category Theory in Context, 2nd ed., Example 4.1.10'
      url: 'https://emilyriehl.github.io/files/context.pdf'
pipeline_run: null
---

## Statement

Let $\varphi:R\to S$ be a unital ring homomorphism and let $M$ be a left $R$-module. Regard $S$ as a left $R$-module by $r\cdot t=\varphi(r)t$. Then $\operatorname{Hom}_R(S,M)$ is a left $S$-module under

$$ (s\cdot h)(t):=h(ts). $$

For an $R$-linear map $u:M\to M'$, postcomposition $h\mapsto u\circ h$ is $S$-linear, so this construction is functorial in $M$.

## Facts & Assumptions

**Given:** A unital ring homomorphism $\varphi:R\to S$, a left $R$-module $M$, elements $r\in R$, $s,s'\in S$, and $h,h'\in\operatorname{Hom}_R(S,M)$.

[F1] A ring homomorphism preserves addition, multiplication, zero, and one ([[def-ring-homomorphism]]).

[F2] A left module action satisfies distributivity, $(rs)m=r(sm)$, and $1_Rm=m$ ([[def-left-and-right-modules]]).

[F3] An $R$-linear map satisfies $h(x+y)=h(x)+h(y)$ and $h(rx)=rh(x)$ ([[def-module-homomorphism-kernel-image-and-cokernel]]).

[F4] The functions from one set to another form a set ([[def-the-set-of-functions-from-one-set-to-another]]).

## Proof

**Proof technique:** direct.

1.1 The set $\operatorname{Hom}_R(S,M)$ is a subset of the function set $M^S$, which exists by [F4]. [F4]

1.2 For $r\in R$ and $t\in S$, $(s\cdot h)(\varphi(r)t)=h(\varphi(r)ts)=r h(ts)=r(s\cdot h)(t)$, and additivity is similar, so $s\cdot h$ is $R$-linear. [F1, F3, algebra]

1.3 Pointwise, $((ss')\cdot h)(t)=h(tss')=(s\cdot(s'\cdot h))(t)$ and $(1_S\cdot h)(t)=h(t)$, so associativity and the unit law hold. [F1, F2, algebra]

1.4 Pointwise additivity of $h$ gives $((s+s')\cdot h)(t)=(s\cdot h+s'\cdot h)(t)$, and linearity in $h$ gives $(s\cdot(h+h'))(t)=(s\cdot h+s\cdot h')(t)$. [F3, algebra]

2.1 Steps 1.1 through 1.4 verify all left $S$-module axioms in [F2]. [step 1.1, step 1.2, step 1.3, step 1.4, F2]

3.1 If $u:M\to M'$ is $R$-linear, then $u\circ h$ is $R$-linear and $u((s\cdot h)(t))=u(h(ts))=(s\cdot(u\circ h))(t)$, so postcomposition is $S$-linear. Identities and composites are preserved by associativity of function composition. [F3, step 1.2] ∎
