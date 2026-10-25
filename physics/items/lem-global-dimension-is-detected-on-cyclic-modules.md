---
id: "lem-global-dimension-is-detected-on-cyclic-modules"
kind: "lemma"
title: "global dimension is detected on cyclic modules"
deps: ["def-left-and-right-global-dimension-of-a-ring", "thm-baer-criterion-for-injective-modules", "thm-injective-dimension-at-most-n-iff-higher-ext-vanishes", "thm-projective-dimension-at-most-n-iff-higher-ext-vanishes", "thm-ext-dimension-shifting-in-the-second-variable", "thm-module-categories-have-enough-injectives"]
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Propositions 12.24–12.25, p.120"
      url: "https://websites.umich.edu/~mmustata/CAnotes.pdf"
provenance:
  statement: literature-derived
  proof: ai-altered
status: published
origin: "pipeline"
proof_strategy: "Explicit algebraic derivation"
---

## Statement

For a unital ring $R$, its left global dimension equals $\sup_I\operatorname{pd}_R(R/I)$ over all left ideals $I$, and equals the supremum of the injective dimensions of all left modules. The equalities allow infinity; in the commutative Noetherian case the cyclic modules are finite.

## Facts & Assumptions

**Given:** The objects and hypotheses in the statement. We work with the Axiom of Choice; cited dependent-choice and resolution-existence hypotheses are retained.

[F1] [[def-left-and-right-global-dimension-of-a-ring]]: For a ring $R$, define $$\operatorname{l.gl.dim}R=\sup\{\operatorname{pd}_R M:M\text{ is a left }R\text{-module}\},$$ and $$\operatorname{r.gl.dim}R=\sup\{\operatorname{pd}_{R^{\mathrm{op}}} M:M\text{ is a right }R\text{-module}\}.$$ They are separately defined extended natural numbers; their equality is not part of the notation.

[F2] [[thm-baer-criterion-for-injective-modules]]: Assume the Axiom of Choice. A left $R$-module $I$ is injective if and only if every homomorphism $f:J\to I$ from a left ideal $J\le R$ extends to a homomorphism $R\to I$. The forward implication is choice-free. The converse uses AC through Zorn's lemma.

[F3] [[thm-injective-dimension-at-most-n-iff-higher-ext-vanishes]]: Assume enough injectives. For an object $N$ and $n\geq0$, $\operatorname{id}(N)\leq n$ if and only if $\operatorname{Ext}^k(M,N)=0$ for every object $M$ and every $k>n$.

[F4] [[thm-projective-dimension-at-most-n-iff-higher-ext-vanishes]]: Assume the Axiom of Dependent Choice. In an abelian category with enough projectives and enough injectives, fix supplied projective and injective resolution data on all objects. Let $M$ be an object and $n\ge0$. The following are equivalent: 1. $\operatorname{pd}(M)\le n$; 2. $\operatorname{Ext}^k(M,N)=0$ for every object $N$ and every $k>n$; 3. $\operatorname{Ext}^{n+1}(M,N)=0$ for every object $N$.

[F5] [[thm-ext-dimension-shifting-in-the-second-variable]]: Assume the Axiom of Dependent Choice. Let $\mathcal A$ be abelian with enough projectives and enough injectives, and fix supplied projective and injective resolution data on all its objects. If $0\to N\to I\to\Sigma N\to0$ is an injective copresentation, then for $q\ge1$ there are natural isomorphisms $\operatorname{Ext}^{q+1}(M,N)\cong\operatorname{Ext}^{q}(M,\Sigma N)$; its low-degree part is $0\to\operatorname{Hom}(M,N)\to\operatorname{Hom}(M,I)\to\operatorname{Hom}(M,\Sigma N)\to\operatorname{Ext}^1(M,N)\to0$.

[F6] [[thm-module-categories-have-enough-injectives]]: Assume the Axiom of Choice. For every unital ring $R$ and every left $R$-module $M$, there is an injective left $R$-module $I$ and a monomorphism $M\to I$. Thus left $R$-modules have enough injectives. For commutative $R$, one explicit functorial target is $$J(M)=\left(R^{(M^\vee)}\right)^\vee\cong\prod_{\phi\in M^\vee}R^\vee,$$ where $X^\vee=\operatorname{Hom}_{\mathbb Z}(X,\mathbb Q/\mathbb Z)$; the embedding is $M\to M^{\vee\vee}\to J(M)$. Here $X^\vee$ is a left $R$-module by $(r\phi)(x)=\phi(rx)$.

## Proof

1.1 Fix $n\ge0$ and suppose every $R/I$ has projective dimension at most $n$. For any left module $N$, choose an injective resolution and let $C$ be its $n$th cosyzygy, with $C=N$ when $n=0$. Dimension shifting gives $\operatorname{Ext}^1(R/I,C)=\operatorname{Ext}^{n+1}(R/I,N)=0$. The last vanishing follows from the projective-dimension Ext criterion. [F6, F5, F4]

2.1 To apply Baer, any map $I\to C$ extends to $R$: its pushout with $I\hookrightarrow R$ yields an extension of $R/I$ by $C$, whose Ext class is zero and hence splits. Therefore $C$ is injective by Baer. The truncated injective resolution gives $\operatorname{id}N\le n$, so all $\operatorname{Ext}^{j}(M,N)$ vanish for $j>n$ and arbitrary $M,N$. [F2, F3, step 1.1]

3.1 The projective-dimension criterion now gives $\operatorname{pd}M\le n$ for every module $M$. Conversely such a global bound applies to all cyclic modules and forces every injective dimension at most $n$ by the same Ext criterion. Thus all three bounds are equivalent for each finite $n$, proving equality of their extended suprema. This includes the zero ring, whose only module has dimension zero under the adopted resolution convention. [F4, F3, F1, step 2.1] ∎
