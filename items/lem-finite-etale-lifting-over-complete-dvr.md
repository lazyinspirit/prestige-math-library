---
id: lem-finite-etale-lifting-over-complete-dvr
kind: lemma
title: "Finite etale schemes over a complete local ring and splitting"
status: draft
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
deps:
  - def-axiom-of-choice
  - lem-complete-local-finite-etale-algebra-lifting
  - lem-finite-etale-algebra-module-presentation-and-rank
  - thm-finite-etale-algebras-invariant-under-nilpotent-thickening
  - lem-etale-residue-extensions-finite-separable
  - thm-structure-theorem-for-artinian-rings
  - lem-artinian-domain-is-a-field
  - def-etale-morphism-schemes
  - thm-regular-local-rings-are-domains-and-cohen-macaulay
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "Bosch, Lutkebohmert, Raynaud, Neron Models (1990), 2.3/5-10 (finite etale lifting over complete local rings)"
      url: "https://www.math.stonybrook.edu/~kamenova/homepage_files/Bosch_Raynaud_Neron_Model_tc.pdf"
    - title: "The Stacks Project, Tag 04GK (finite etale algebras over henselian local rings)"
      url: "https://stacks.math.columbia.edu/tag/04GK"
---

## Statement

Assume AC. Let $R$ be a Noetherian local ring which is complete and separated for its maximal ideal $\mathfrak m$, with residue field $k$, and let $Y\to\operatorname{Spec}R$ be a finite etale $R$-scheme. Then the reduction map $Y(R)\to Y(k)$ is a bijection. If in addition $k$ has no nontrivial finite separable field extension, then every finite etale $R$-algebra of rank $d$ is isomorphic to $R^d$ as an $R$-algebra, and $Y$ is a disjoint union of $d$ copies of $\operatorname{Spec}R$.

## Facts & Assumptions

**Given:** AC, a complete separated Noetherian local ring $(R,\mathfrak m)$ with residue field $k$, and a finite etale $R$-scheme $Y$.

[F1] Reduction $A\mapsto A/\mathfrak mA$ is an equivalence between finite etale $R$-algebras and finite etale $k$-algebras, for $(R,\mathfrak m)$ complete and separated; more generally for a nilpotent ideal $I$ in a commutative ring, reduction gives such an equivalence ([[lem-complete-local-finite-etale-algebra-lifting]], [[thm-finite-etale-algebras-invariant-under-nilpotent-thickening]], both assuming AC).

[F2] A module-finite commutative $A$-algebra $D$ is finite etale over $A$ if and only if $D$ is finitely presented and flat as an $A$-module with $\Omega_{D/A}=0$; then $D$ is finite projective locally free, its rank is locally constant and equals the number of geometric points in a fibre ([[lem-finite-etale-algebra-module-presentation-and-rank]], assuming AC).

[F3] At a point of a locally finite-type morphism whose stalk of relative differentials vanishes, the residue-field extension is finite separable; in particular a finite etale field extension $L/k$, viewed as $\operatorname{Spec}L\to\operatorname{Spec}k$, has $L/k$ finite separable ([[lem-etale-residue-extensions-finite-separable]], assuming AC).

[F4] A commutative Artinian ring is the product of its localizations at its finitely many maximal ideals, and a local Artinian ring which is a domain is a field; a regular local ring is a domain ([[thm-structure-theorem-for-artinian-rings]], [[lem-artinian-domain-is-a-field]], [[thm-regular-local-rings-are-domains-and-cohen-macaulay]]).

[F5] A smooth morphism has geometrically regular fibres, and an etale morphism is smooth ([[def-etale-morphism-schemes]]).

## Proof

**Proof technique:** direct. Everything is reduced to the lifting equivalence and the classification of finite etale algebras over the residue field.

1.1 Write $Y=\operatorname{Spec}A$ with $A$ a finite etale $R$-algebra. By [F1] the reduction functor $A\mapsto A\otimes_Rk=A/\mathfrak mA$ is an equivalence from finite etale $R$-algebras to finite etale $k$-algebras. An equivalence is fully faithful, so it induces bijections $$\operatorname{Hom}_{R\text{-alg}}(A,R)\longrightarrow\operatorname{Hom}_{k\text{-alg}}(A\otimes_Rk,k),$$ natural in $A$; under the anti-equivalence of affine schemes these are the maps $Y(R)\to Y(k)$ given by reduction. Hence $Y(R)\to Y(k)$ is a bijection. [F1, algebra]

1.2 Assume now that $k$ has no nontrivial finite separable extension, and let $E$ be a finite etale $k$-algebra. As a finite-dimensional commutative $k$-algebra, $E$ is Artinian, so $E\cong\prod_iE_i$ with each $E_i$ local Artinian by [F4]. Each $E_i$ is a direct factor of $E$, hence finite etale over $k$; being etale over the field $k$ it is smooth of relative dimension zero, so its only fibre is geometrically regular and in particular regular by [F5]. A regular local ring is a domain, and a local Artinian domain is a field by [F4], so $E_i$ is a field; as a finite etale field extension of $k$ it is finite separable over $k$ by [F3], hence equals $k$. Therefore $E\cong k^d$ for $d=\dim_kE$, and every finite etale $k$-algebra is a product of copies of $k$. [F2, F3, F4, F5, given, algebra]

2.1 Let $A$ be a finite etale $R$-algebra of rank $d$; by [F2] its rank equals the $k$-dimension of $A\otimes_Rk$, which is a finite etale $k$-algebra, so $A\otimes_Rk\cong k^d$ by step 1.2. Since reduction is an equivalence by [F1], it is essentially surjective and reflects isomorphisms, so $A\cong R^d$; consequently $Y=\operatorname{Spec}A$ is the disjoint union of $d$ copies of $\operatorname{Spec}R$. The complete Noetherian local hypotheses are exactly those stated, and AC is available for both the lifting equivalence [F1] and the classification suppliers [F2]-[F4]. [F1, F2, F3, F4, step 1.1, step 1.2, algebra] ∎ 