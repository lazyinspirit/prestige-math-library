---
id: thm-a-generator-detects-equality-of-subobjects
kind: theorem
title: "A generator detects comparison of subobjects"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-generator-and-cogenerator-of-a-category, thm-the-meet-of-subobjects-is-their-pullback, thm-an-abelian-category-is-balanced, cor-in-a-preadditive-category-with-a-zero-object-a-morphism-is-epic-exactly-when-its-cokernel-is-zero, def-abelian-category]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-28
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-28
sources:
  scraped: []
  references:
    - title: "Peter Freyd, Abelian Categories, Proposition 3.35"
      url: "https://www.tac.mta.ca/tac/reprints/articles/3/tr3.pdf"
pipeline_run: frontier-22
---

## Statement

Let $G$ be a generator of an abelian category, and let $B,C\le A$ be
subobjects. Then

$$B\le C\quad\Longleftrightarrow\quad \text{every morphism }G\to A\text{ factoring through }B\text{ also factors through }C.$$

## Facts & Assumptions

**Given:** A generator $G$ and subobjects $B,C\le A$, represented by monomorphisms $b:B\rightarrowtail A$ and $c:C\rightarrowtail A$.

[L1] A generator separates distinct morphisms by precomposition ([[def-generator-and-cogenerator-of-a-category]]).

[L2] The meet $B\wedge C$ is represented by the pullback of $b$ and $c$ ([[thm-the-meet-of-subobjects-is-their-pullback]]).

[L3] In an abelian category, a morphism that is both monic and epic is an isomorphism ([[thm-an-abelian-category-is-balanced]]).

[L4] In a preadditive category with a zero object, a morphism is epic exactly when its cokernel is zero ([[cor-in-a-preadditive-category-with-a-zero-object-a-morphism-is-epic-exactly-when-its-cokernel-is-zero]]).

[L5] Abelian categories have cokernels ([[def-abelian-category]]).

## Proof

**Proof technique:** direct.

1.1 If $B\le C$, then any map $G\to A$ factoring through $B$ also factors through $C$ by composition. [given, algebra]

1.2 To prove the converse, assume $B\nleq C$. By [L2], let $p:P\rightarrowtail B$ be the pullback subobject of $b$ and $c$. If $p$ were epic, then [L3] would make it an isomorphism, forcing $b$ to factor through $c$. So $p$ is not epic. [L2, L3, contrapositive-reduce]

2.1 Let $q:B\to Q$ be a cokernel of $p$, which exists by [L5]. Since $p$ is not epic, [L4] implies $q\ne0$. [L4, L5, step 1.2]

3.1 The morphisms $q$ and $0_{B,Q}$ are therefore distinct, so [L1] gives some $u:G\to B$ with $q u\ne0$. If $b u$ factored through $c$, the pullback property in [L2] would force $u$ to factor through $p$, hence $q u=0$, impossible. Thus $b u:G\to A$ factors through $B$ but not through $C$. [L1, L2, step 2.1, construct]

4.1 Step 1.1 proves the forward implication, and steps 1.2, 2.1, and 3.1 prove the contrapositive of the reverse implication. Therefore $B\le C$ exactly when every morphism $G\to A$ factoring through $B$ also factors through $C$. [step 1.1, step 1.2, step 2.1, step 3.1, discharge-contrapositive: reverse implication] ∎
