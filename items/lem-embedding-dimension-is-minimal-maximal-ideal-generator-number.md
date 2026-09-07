---
id: "lem-embedding-dimension-is-minimal-maximal-ideal-generator-number"
kind: "lemma"
title: "embedding dimension is minimal maximal ideal generator number"
deps: ["def-embedding-dimension-and-regular-local-ring", "cor-minimal-generators-over-a-local-ring", "cor-nakayama-generators-modulo-an-ideal"]
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "12.3, p.115"
      url: "https://websites.umich.edu/~mmustata/CAnotes.pdf"
provenance:
  statement: literature-derived
  proof: ai-altered
status: "draft"
origin: "pipeline"
proof_strategy: "Explicit algebraic derivation"
---

## Statement

For a nonzero Noetherian local ring $(R,\mathfrak m,k)$, $\operatorname{edim}R$ is the least number of generators of $\mathfrak m$.

## Facts & Assumptions

**Given:** The objects and hypotheses in the statement. We work with the Axiom of Choice; cited dependent-choice and resolution-existence hypotheses are retained.

[F1] [[def-embedding-dimension-and-regular-local-ring]]: For a nonzero commutative Noetherian local ring $(R,\mathfrak m,k)$, define $\operatorname{edim}R=\dim_k(\mathfrak m/\mathfrak m^2)$. The ring is **regular local** when $\operatorname{edim}R=\dim R$. The cotangent space is intrinsic, and is finite-dimensional because $\mathfrak m$ is finitely generated.

[F2] [[cor-minimal-generators-over-a-local-ring]]: Assume the Axiom of Choice. Let $(R,\mathfrak m)$ be a local ring with residue field $k=R/\mathfrak m$, and let $M$ be a finitely generated left $R$-module. A finite generating set $x_1,\dots,x_r$ of $M$ is minimal if and only if the images of $x_1,\dots,x_r$ in $M/\mathfrak mM$ form a $k$-basis. In particular every minimal generating set of $M$ has the same cardinality.

[F3] [[cor-nakayama-generators-modulo-an-ideal]]: Assume the Axiom of Choice. Let $R$ be a commutative ring, let $I \trianglelefteq R$ satisfy $I \subseteq J(R)$, and let $M$ be a finitely generated left $R$-module. If elements $x_1,\dots,x_r \in M$ generate $M/IM$, then $x_1,\dots,x_r$ generate $M$.

## Proof

1.1 Write $e=\dim_k\mathfrak m/\mathfrak m^2$. Lift a basis to $x_1,\ldots,x_e\in\mathfrak m$. Since $\mathfrak m$ is finite and $\mathfrak m=J(R)$, Nakayama gives $\mathfrak m=(x_1,\ldots,x_e)$. If $e=0$, the same assertion gives $\mathfrak m=0$. [F1, F3]

2.1 Any generating tuple of $\mathfrak m$ spans its quotient by $\mathfrak m^2$, so its length is at least $e$. The lifted basis is a minimal generating tuple by the local generator criterion. Thus the least length is $e$. [F2, step 1.1, algebra] ∎
