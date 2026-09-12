---
id: "lem-an-injective-resolution-for-f-produces-a-g-acyclic-resolution-after-f"
kind: "lemma"
title: "Applying F gives a termwise G-acyclic complex"
deps: ["def-g-acyclic-object-for-a-left-exact-functor", "def-injective-resolution-in-an-abelian-category", "def-right-derived-object-relative-to-injective-resolution-data", "thm-projective-and-injective-constructions-of-ext-are-naturally-isomorphic"]
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - title: "Stacks Project, Tags 015H and 015M"
      url: "https://stacks.math.columbia.edu/download/derived.pdf"
status: "draft"
origin: "pipeline"
pipeline_run: "phase-2-next-17"
proof_strategy: "direct"
---

## Statement

Let $F:\mathcal A\to\mathcal B$ and $G:\mathcal B\to\mathcal C$ be additive left-exact functors and suppose that $F$ sends injectives to $G$-acyclic objects, relative to supplied resolution data. For a supplied injective resolution $A\to I^\bullet$, the complex $F(I^\bullet)$ is bounded below and termwise $G$-acyclic, with $H^q(F(I))=R^qF(A)$. It need not be a resolution of $F(A)$.

## Facts & Assumptions

**Given:** These functors, acyclicity hypothesis and supplied injective resolution.

[F1] A resolution has injective terms in nonnegative degrees ([[def-injective-resolution-in-an-abelian-category]]).

[F2] $G$-acyclicity is vanishing of positive right derived objects ([[def-g-acyclic-object-for-a-left-exact-functor]]).

[F3] Relative right derived objects are $H^q(F(I))$ ([[def-right-derived-object-relative-to-injective-resolution-data]]).

[F4] Supplied projective and injective models of Ext have quasi-isomorphic Hom complexes ([[thm-projective-and-injective-constructions-of-ext-are-naturally-isomorphic]]).

## Proof

1.1 Each $I^q$ is injective, so the hypothesis gives $R^pG(F(I^q))=0$ for $p>0$. Additivity makes $F(I)$ a cochain complex, zero in negative degrees. Its cohomology is precisely $R^qF(A)$ by definition. In degree zero left exactness identifies its kernel with $F(A)$; positive exactness would additionally require every positive $R^qF(A)$ to vanish. [F1, F2, F3, given]

2.1 For a witness take $F=\operatorname{Hom}_{\mathbb Z}(\mathbb Z/2,-)$, $G$ the identity of abelian groups and $A=\mathbb Z$, with a supplied injective resolution of $A$. Identity is exact, so all its positive derived objects vanish. The projective resolution $0\to\mathbb Z\xrightarrow{2}\mathbb Z\to\mathbb Z/2\to0$ has rank-one free, hence projective, terms: a map from $\mathbb Z$ lifts across an epimorphism by lifting the image of $1$. Applying $\operatorname{Hom}(-,\mathbb Z)$ gives $\mathbb Z\xrightarrow{2}\mathbb Z$ in degrees zero and one. Its degree-one cohomology is $\mathbb Z/2\ne0$. F4 identifies this with $H^1(F(I))$. Thus $F(I)$ is not a resolution of $F(A)=0$, even though every one of its terms is $G$-acyclic. This witness is relative to supplied data and uses no choice of an infinite family of lifts. [F4, step 1.1] ∎
