---
id: thm-universal-elements-and-universal-factorisations
kind: theorem
title: "A representation is equivalently a universal element with a unique factorisation property"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [lem-yoneda-evaluation-bijection,
       thm-yoneda-lemma-is-natural-in-both-variables,
       cor-contravariant-yoneda-lemma, def-universal-element]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-13
sources:
  scraped: []
  references:
    - title: "Emily Riehl, Category Theory in Context, Definition 2.3.3"
      url: "https://emilyriehl.github.io/files/context.pdf"
    - title: "Tom Leinster, Basic Category Theory, Corollaries 4.3.2 and 4.3.3"
      url: "https://arxiv.org/pdf/1612.09375.pdf"
pipeline_run: null
---

## Statement

Let $\mathcal C$ be locally small.

1. A pair $(R,u)$ with $u\in F(R)$ is universal for a functor
   $F:\mathcal C\to\mathbf{Set}$ if and only if, for every object $c$ and
   every $x\in F(c)$, there is a unique morphism $f:R\to c$ such that
   $F(f)(u)=x$.
2. A pair $(R,u)$ with $u\in P(R)$ is universal for a presheaf
   $P:\mathcal C^{\mathrm{op}}\to\mathbf{Set}$ if and only if, for every
   object $c$ and every $x\in P(c)$, there is a unique morphism $f:c\to R$
   such that $P(f)(u)=x$.

Every representation $\theta$ determines its universal element by
$u=\theta_R(1_R)$, and the universal element recovers $\theta$ by the formulas
in the statement. These correspondences are the Yoneda correspondences and
are natural in the representing object and the set-valued functor.

## Facts & Assumptions

**Given:** A locally small category $\mathcal C$, an object $R$, and either a functor $F:\mathcal C\to\mathbf{Set}$ with $u\in F(R)$ or a presheaf $P$ with $u\in P(R)$.

[L1] Evaluation at $1_R$ is a bijection $\operatorname{Nat}(\mathcal C(R,-),F)\cong F(R)$ whose inverse sends $u$ to $f\mapsto F(f)(u)$ ([[lem-yoneda-evaluation-bijection]]).

[L2] This covariant evaluation bijection is natural in both the representing object and the target functor ([[thm-yoneda-lemma-is-natural-in-both-variables]]).

[L3] Dually, evaluation gives $\operatorname{Nat}(\mathcal C(-,R),P)\cong P(R)$ naturally in $R$ and $P$, with inverse $u\mapsto(f\mapsto P(f)(u))$ ([[cor-contravariant-yoneda-lemma]]).

[F1] A universal element is an element whose Yoneda-associated natural transformation is a natural isomorphism ([[def-universal-element]]).

## Proof

**Proof technique:** direct.

1.1 By [L1], any natural transformation $\theta:\mathcal C(R,-)\Rightarrow F$ satisfies $\theta_c(f)=F(f)(\theta_R(1_R))$; thus a representation determines $u=\theta_R(1_R)$ and is exactly the family $\theta^u$. [L1, F1]

1.2 By [L3], the same argument for a presheaf identifies its representing transformation with $f\mapsto P(f)(u)$; componentwise bijectivity is exactly the stated existence and uniqueness of $f:c\to R$. [L3, F1]

2.1 The family $\theta^u$ is a natural isomorphism if and only if each function $\theta^u_c:f\mapsto F(f)(u)$ is bijective, which is equivalent to the existence and uniqueness of $f:R\to c$ for every $x\in F(c)$. [step 1.1, F1]

3.1 The naturality assertions for the two correspondences are [L2] and [L3], so steps 1.1--2.1 prove both equivalences and the final assertion. [step 1.1, step 2.1, step 1.2, L2, L3] ∎
