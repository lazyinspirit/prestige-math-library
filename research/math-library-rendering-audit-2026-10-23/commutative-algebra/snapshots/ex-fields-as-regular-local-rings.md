---
id: "ex-fields-as-regular-local-rings"
kind: "example"
title: "fields as regular local rings"
deps: ["def-embedding-dimension-and-regular-local-ring", "thm-nakayama-lemma"]
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Example 12.6, p.115"
      url: "https://websites.umich.edu/~mmustata/CAnotes.pdf"
provenance:
  statement: ai-generated
  proof: ai-altered
status: published
origin: "pipeline"
generation:
  role: example
proof_strategy: "Explicit algebraic derivation"
---

## Example

Every field $k$ is regular local with dimension and embedding dimension zero. Conversely every zero-dimensional regular local ring is a field. Its regular system is empty and its residue field has a free resolution concentrated in degree zero.

## Facts & Assumptions

**Given:** The objects and hypotheses in the example. We work with the Axiom of Choice; cited dependent-choice and resolution-existence hypotheses are retained.

[F1] [[def-embedding-dimension-and-regular-local-ring]]: For a nonzero commutative Noetherian local ring $(R,\mathfrak m,k)$, define $\operatorname{edim}R=\dim_k(\mathfrak m/\mathfrak m^2)$. The ring is **regular local** when $\operatorname{edim}R=\dim R$. The cotangent space is intrinsic, and is finite-dimensional because $\mathfrak m$ is finitely generated.

[F2] [[thm-nakayama-lemma]]: Assume the Axiom of Choice. Let $R$ be a commutative ring, let $I \trianglelefteq R$ satisfy $I \subseteq J(R)$, and let $M$ be a finitely generated left $R$-module. If $IM=M$, then $M=0$.

## Verification

1.1 A field has the single prime and maximal ideal $(0)$, so its dimension and cotangent dimension are both zero. It is regular by definition. The empty tuple generates its maximal ideal and $k\xrightarrow{1}k$ is its length-zero augmented resolution. [F1, algebra]

2.1 For a zero-dimensional regular local ring, $\mathfrak m/\mathfrak m^2=0$. Nakayama applied to the finite ideal $\mathfrak m$ gives $\mathfrak m=0$. Every element outside the maximal ideal is a unit, so the ring is a field. [F2, step 1.1] ∎
