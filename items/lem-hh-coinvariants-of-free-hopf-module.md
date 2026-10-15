---
id: lem-hh-coinvariants-of-free-hopf-module
kind: lemma
title: "Coinvariants of a free right-right Hopf module"
status: draft
origin: pipeline
pipeline_run: hopf-hecke-unfinished-15-2026-10-15
dependency_level: 5
deps:
  - def-hh-right-right-hopf-module-and-coinvariants
  - lem-hh-free-right-right-hopf-module
  - def-hh-coalgebra-and-coalgebra-map
  - def-hh-bialgebra-and-bialgebra-map
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "Hans-Juergen Schneider, Lectures on Hopf Algebras, notes by Sonia Natale, Trabajos de Matematica 31/95"
      url: "https://www.famaf.unc.edu.ar/~andrus/papers/Schn1.pdf"
      locator: "Section 2, printed pp. 22-23: trivial Hopf modules and Theorem 2.1."
    - title: "D. S. Drogalski, Chapter 3: Hopf Algebras, UC San Diego 207A lecture notes"
      url: "https://mathweb.ucsd.edu/~drogalsk/207a-s20-lecturenotes.pdf"
      locator: "Section 3.6, printed p. 43: Theorem 3.38 and its counit identities."
---

## Statement

Let $V$ be any $k$-vector space and $H$ a Hopf algebra over $k$. For the free Hopf module $V\otimes H$ with coaction on the $H$ factor,
$$
(V\otimes H)^{\operatorname{co}H}=\{v\otimes1_H:v\in V\}.
$$
The map $i:V\to(V\otimes H)^{\operatorname{co}H}$, $i(v)=v\otimes1_H$, is an isomorphism with inverse the restriction of $q:=\operatorname{id}_V\otimes\varepsilon$.

## Facts & Assumptions

**Given:** A field $k$, a Hopf algebra $H$ with counit $\varepsilon$, and a $k$-vector space $V$.

[F1] The free Hopf module has coaction $\rho(v\otimes h)=\sum(v\otimes h_1)\otimes h_2$ ([[lem-hh-free-right-right-hopf-module]]).

[F2] Coinvariants are exactly $x$ satisfying $\rho(x)=x\otimes1_H$ ([[def-hh-right-right-hopf-module-and-coinvariants]]).

[F3] The counit identities are $\lambda_H(\varepsilon\otimes\operatorname{id}_H)\Delta=\operatorname{id}_H=\rho_H(\operatorname{id}_H\otimes\varepsilon)\Delta$ ([[def-hh-coalgebra-and-coalgebra-map]]).

[F4] The coproduct is a unital algebra map, so $\Delta(1_H)=1_H\otimes1_H$, and the counit is unital, so $\varepsilon(1_H)=1$ ([[def-hh-bialgebra-and-bialgebra-map]]).

## Proof

1.1 The map $i(v)=v\otimes1_H$ has image in the coinvariants: by [F1], $\rho(i(v))=\sum(v\otimes1_H)\otimes1_H=i(v)\otimes1_H$, since $\Delta(1_H)=1_H\otimes1_H$ by [F4]. The counit map $q=\operatorname{id}_V\otimes\varepsilon$ satisfies $q(i(v))=v\varepsilon(1_H)=v$ by [F4]. [given, F1, F4]

2.1 If $x\in(V\otimes H)^{\operatorname{co}H}$, then [F1]-[F2] say $(\operatorname{id}_V\otimes\Delta)(x)=x\otimes1_H$. Apply $\operatorname{id}_V\otimes\varepsilon\otimes\operatorname{id}_H$ to both sides. The counit identity in [F3] gives $x=q(x)\otimes1_H=i(q(x))$. Thus every coinvariant lies in the image of $i$, and $q$ is its inverse there. No basis or choice principle is used. [F1, F2, F3, construct] ∎
