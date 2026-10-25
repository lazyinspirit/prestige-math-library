---
id: "lem-residue-field-splits-off-reduced-maximal-ideal"
kind: "lemma"
title: "residue field splits off reduced maximal ideal"
deps: ["def-axiom-of-choice", "lem-regular-element-reduction-preserves-minimal-resolution", "lem-auslander-buchsbaum-syzygy-projective-dimension", "thm-projective-dimension-at-most-n-iff-higher-ext-vanishes", "prop-the-iterated-free-module-resolution-is-canonical-in-zf", "thm-module-categories-are-grothendieck-categories", "thm-a-grothendieck-abelian-category-has-functorial-injective-embeddings", "cor-every-module-admits-an-injective-resolution"]
verification:
  precheck: pass
  verified:
    model: gpt-6-sol
    verdict: locally-reviewed
    date: '2026-09-23'
    scope: Owner-authorized bounded mathematical repair review; evidence research/ap-319-sol-repair/agent-05-receipts.jsonl (lem-residue-field-splits-off-reduced-maximal-ideal). No independent judge or whole-closure certification.
    delegated_by: owner
sources:
  references:
    - title: "Theorem 12.33 proof, p.123; Jeffries 1.60"
      url: "https://websites.umich.edu/~mmustata/CAnotes.pdf"
provenance:
  statement: literature-derived
  proof: ai-altered
status: published
origin: "pipeline"
proof_strategy: "Explicit algebraic derivation"
---

## Statement

Assume the Axiom of Choice. Let $(R,\mathfrak m,k)$ be nonzero Noetherian local and $x\in\mathfrak m\setminus\mathfrak m^2$ a nonzerodivisor. Over $S=R/(x)$ the sequence $0\to(x)/(x\mathfrak m)\to\mathfrak m/x\mathfrak m\to\mathfrak m/(x)\to0$ splits, and $(x)/(x\mathfrak m)\cong k$. Consequently finite $\operatorname{pd}_Rk$ implies finite $\operatorname{pd}_Sk$.

## Facts & Assumptions

**Given:** The objects and hypotheses in the statement. We work with the Axiom of Choice; cited dependent-choice and resolution-existence hypotheses are retained.

[F1] [[lem-regular-element-reduction-preserves-minimal-resolution]]: Let $(R,\mathfrak m,k)$ be nonzero Noetherian local, let $M$ be a nonzero finite module, and let $x\in\mathfrak m$ be a nonzerodivisor on both $R$ and $M$. Reducing a minimal free resolution of $M$ modulo $x$ gives a minimal free resolution of $M/xM$ over $S=R/(x)$. Moreover $\operatorname{pd}_S(M/xM)=\operatorname{pd}_RM$, including infinity. For $M=0$ the zero-complex assertion also holds, with both projective dimensions zero.

[F2] [[lem-auslander-buchsbaum-syzygy-projective-dimension]]: Let $0\to K\to F_0\to M\to0$ be the initial minimal presentation of a nonzero finite module over a nonzero Noetherian local ring. If $0<n=\operatorname{pd}M<\infty$, then $K\ne0$ and $\operatorname{pd}K=n-1$.

[F3] [[thm-projective-dimension-at-most-n-iff-higher-ext-vanishes]]: Assume the Axiom of Dependent Choice. In an abelian category with enough projectives and enough injectives, fix supplied projective and injective resolution data on all objects. Let $M$ be an object and $n\ge0$. The following are equivalent: 1. $\operatorname{pd}(M)\le n$; 2. $\operatorname{Ext}^k(M,N)=0$ for every object $N$ and every $k>n$; 3. $\operatorname{Ext}^{n+1}(M,N)=0$ for every object $N$.

[F4] The canonical iterated free cover gives projective resolution data under AC ([[prop-the-iterated-free-module-resolution-is-canonical-in-zf]]). Module categories are Grothendieck ([[thm-module-categories-are-grothendieck-categories]]), and under AC their functorial injective embeddings can be iterated to give injective resolutions ([[thm-a-grothendieck-abelian-category-has-functorial-injective-embeddings]], [[cor-every-module-admits-an-injective-resolution]]).

## Proof

1.1 The sequence is the quotient sequence for $x\mathfrak m\subseteq(x)\subseteq\mathfrak m$; $x$ kills every term. Multiplication by $x$ identifies $R/\mathfrak m$ with $(x)/(x\mathfrak m)$ because cancellation is valid. Choose a $k$-linear functional on $\mathfrak m/\mathfrak m^2$ taking the class of $x$ to $1$. Composing with $\mathfrak m/x\mathfrak m\to\mathfrak m/\mathfrak m^2$ gives an $S$-linear retraction onto $k$. Thus the sequence splits. [given, algebra]

2.1 If $\operatorname{pd}_Rk$ is finite, it is positive: projectivity of $k$ would split $R\to k$, giving a nontrivial idempotent unless $\mathfrak m=0$, impossible here. Its first minimal syzygy $\mathfrak m$ therefore has finite projective dimension. The element $x$ acts injectively on this ideal, so reduction gives finite $\operatorname{pd}_S(\mathfrak m/x\mathfrak m)$. The stated AC meets [F1]'s premise and implies the DC premise of [F3]. For $S$-modules, [F4] supplies the projective and injective resolution data required by [F3], and the corresponding enough-projectives and enough-injectives conditions. Apply [F3] to the finite projective dimension of $\mathfrak m/x\mathfrak m$. By step 1.1, it is $k\oplus\mathfrak m/(x)$; finite direct-sum additivity of Ext makes $\operatorname{Ext}^j_S(k,N)$ a summand of $\operatorname{Ext}^j_S(\mathfrak m/x\mathfrak m,N)$ for every $j,N$. It therefore vanishes above the same finite degree. The reverse implication of [F3] gives finite $\operatorname{pd}_Sk$. [given, F1, F2, F3, F4, step 1.1] ∎
