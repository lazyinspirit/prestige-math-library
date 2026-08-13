---
id: lem-coinduced-modules-are-injective
kind: lemma
title: "Coinduction sends injective abelian groups to injective modules"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [def-injective-module, def-hom-groups-and-induced-hom-maps]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-13
  audited: 2026-08-13
sources:
  scraped: []
  references:
    - title: "A. Kleshchev, Lectures on Abstract Algebra for Graduate Students, sections 3.6, 3.14, and 3.15"
      url: "https://darkwing.uoregon.edu/~klesh/teaching/Alg600LN12.pdf"
    - title: "The Stacks Project, Algebra"
      url: "https://stacks.math.columbia.edu/tag/05CD"
    - title: "P. Hekmati, Homological Algebra, section 3.1"
      url: "https://www.math.auckland.ac.nz/~hekmati/HomologicalAlgebra.pdf"
pipeline_run: null
---

## Statement

Let $R$ be a unital ring and $D$ an injective abelian group. Give $\operatorname{Hom}_{\mathbb Z}(R,D)$ the left $R$-action
$$(r\varphi)(s)=\varphi(sr).$$
Then $\operatorname{Hom}_{\mathbb Z}(R,D)$ is an injective left $R$-module.

## Facts & Assumptions

**Given:** A unital ring $R$ and an injective abelian group $D$.

[F1] Injectivity is extension of homomorphisms along monomorphisms ([[def-injective-module]]).

[F2] $\operatorname{Hom}$ groups use pointwise addition and maps induced by composition ([[def-hom-groups-and-induced-hom-maps]]).

## Proof

**Proof technique:** direct.

1.1 The formula $(r\varphi)(s)=\varphi(sr)$ satisfies $r_1(r_2\varphi)=(r_1r_2)\varphi$, the distributive laws, and $1\varphi=\varphi$, so it defines a left $R$-module structure. [given, F2, algebra]

2.1 For every left $R$-module $M$, evaluation at $1$ defines $$\Theta_M:\operatorname{Hom}_R(M,\operatorname{Hom}_{\mathbb Z}(R,D))\to\operatorname{Hom}_{\mathbb Z}(M,D),\quad \Theta_M(F)(m)=F(m)(1).$$ [step 1.1, F2]

3.1 The inverse sends $g:M\to D$ to $\widehat g(m)(r)=g(rm)$. Indeed, $\widehat g$ is $R$-linear because $\widehat g(sm)(r)=g(rsm)=(s\widehat g(m))(r)$, and evaluation at $1$ and the unit law show that the two constructions are inverse. [step 1.1, step 2.1, algebra]

3.2 Let $u:A\to B$ be a monomorphism and $F:A\to\operatorname{Hom}_{\mathbb Z}(R,D)$. Under $\Theta_A$, it corresponds to a group homomorphism $g:A\to D$, which extends along the underlying subgroup inclusion to $\tilde g:B\to D$ because $D$ is injective. [given, step 2.1, F1]

4.1 The inverse construction of step 3.1 turns $\tilde g$ into an $R$-linear extension $\widehat{\tilde g}:B\to\operatorname{Hom}_{\mathbb Z}(R,D)$ of $F$. Hence the coinduced module is injective by [F1]. [step 3.1, step 3.2, F1] ∎
