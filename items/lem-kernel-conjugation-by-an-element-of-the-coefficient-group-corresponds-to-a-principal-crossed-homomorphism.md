---
id: lem-kernel-conjugation-by-an-element-of-the-coefficient-group-corresponds-to-a-principal-crossed-homomorphism
kind: lemma
title: "Kernel conjugation by an element of the coefficient group corresponds to a principal crossed homomorphism"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-principal-crossed-homomorphism-for-abelian-coefficients, def-graph-subgroup-in-a-semidirect-product, thm-external-semidirect-product-is-a-group]
proof_strategy: direct
verification:
  audited: 2026-09-04
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-04
sources:
  scraped: []
  references:
    - title: "David A. Craven, Finite Group Theory"
      url: "https://web.mat.bham.ac.uk/D.A.Craven/docs/lectures/finitegroups2012.pdf"
---

## Statement

Let $G$ act on an abelian group $A$, let $z:G\to A$ be a crossed homomorphism,
and let $a\in A$. If $z_a:G\to A$ is defined by

$$z_a(g)=z(g)+g\cdot a-a,$$

then the graph subgroup $\Gamma_{z_a}$ is the conjugate of $\Gamma_z$ by
$(-a,1)$ in $A\rtimes G$.

## Facts & Assumptions

**Given:** An action of $G$ on an abelian group $A$, a crossed homomorphism $z:G\to A$, and an element $a\in A$.

[L1] The principal crossed homomorphism attached to $a$ is $g\mapsto g\cdot a-a$
([[def-principal-crossed-homomorphism-for-abelian-coefficients]]).

[L2] The graph subgroup of a map is $\Gamma_z=\{(z(g),g):g\in G\}$
([[def-graph-subgroup-in-a-semidirect-product]]).

[L3] The semidirect-product multiplication is
$$(x,g)(y,h)=(x+g\cdot y,gh)$$
for abelian coefficients ([[thm-external-semidirect-product-is-a-group]]).

## Proof

**Proof technique:** direct.

1.1 In $A\rtimes G$, the inverse of $(-a,1)$ is $(a,1)$. Therefore $(-a,1)(z(g),g)(a,1)=(-a+z(g)+g\cdot a,g)=(z_a(g),g)$ by [L3] and the definition in [L1]. [given, L1, L3, algebra]

2.1 Step 1.1 shows that conjugating each element of $\Gamma_z$ by $(-a,1)$ produces the corresponding element of $\Gamma_{z_a}$. Hence $(-a,1)\Gamma_z(a,1)=\Gamma_{z_a}$. So kernel conjugation changes the graph exactly by a principal crossed homomorphism. [L2, step 1.1] ∎
