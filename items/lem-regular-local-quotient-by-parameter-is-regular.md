---
id: "lem-regular-local-quotient-by-parameter-is-regular"
kind: "lemma"
title: "regular local quotient by parameter is regular"
deps: ["lem-regular-system-of-parameters-equivalent-basis", "thm-dimension-at-most-embedding-dimension", "thm-dimension-as-minimal-number-of-radical-generators"]
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Proposition 12.7, p.115"
      url: "https://websites.umich.edu/~mmustata/CAnotes.pdf"
provenance:
  statement: literature-derived
  proof: ai-altered
status: "draft"
origin: "pipeline"
proof_strategy: "Explicit algebraic derivation"
---

## Statement

Let $(R,\mathfrak m,k)$ be regular local of dimension $d$, and let $x\in\mathfrak m\setminus\mathfrak m^2$. Then $R/(x)$ is regular local, of dimension and embedding dimension $d-1$.

## Facts & Assumptions

**Given:** The objects and hypotheses in the statement. We work with the Axiom of Choice; cited dependent-choice and resolution-existence hypotheses are retained.

[F1] [[lem-regular-system-of-parameters-equivalent-basis]]: Let $(R,\mathfrak m,k)$ be a nonzero Noetherian local ring of dimension $d$, and let $\mathbf x=(x_1,\ldots,x_d)\in\mathfrak m^d$. Then $\mathbf x$ is a regular system of parameters if and only if its classes form a $k$-basis of $\mathfrak m/\mathfrak m^2$. In particular every lift of a cotangent basis in a regular local ring generates $\mathfrak m$ and is a system of parameters.

[F2] [[thm-dimension-at-most-embedding-dimension]]: Every nonzero commutative Noetherian local ring $R$ satisfies $\dim R\le\operatorname{edim}R<\infty$.

[F3] [[thm-dimension-as-minimal-number-of-radical-generators]]: Let $(R,\mathfrak m)$ be a finite-dimensional Noetherian local ring of dimension $d<\infty$. Then $d$ is the least integer $n$ for which there exists an $n$-generated ideal $J\subseteq R$ with $\sqrt J=\mathfrak m$.

## Proof

1.1 Extend the nonzero class of $x$ to a basis of $\mathfrak m/\mathfrak m^2$ and lift it. The resulting $d$ elements generate $\mathfrak m$; their last $d-1$ images generate the maximal ideal of $S=R/(x)$. Hence $\operatorname{edim}S\le d-1$. The hypotheses force $d\ge1$ and $S\ne0$. [F1, given]

2.1 Let $t=\dim S$, which is finite by the embedding bound. Lift $t$ radical generators of the maximal ideal of $S$. Together with $x$ they generate an ideal of $R$ with radical $\mathfrak m$, so $d\le t+1$. Combining $d-1\le t\le\operatorname{edim}S\le d-1$ proves all the assertions, including the field quotient when $d=1$. [F3, F2, step 1.1, algebra] ∎
