---
id: "ex-grothendieck-spectral-sequence-with-an-exact-outer-functor"
kind: "example"
title: "Grothendieck with an exact outer functor"
deps: ["cor-grothendieck-collapse-when-one-functor-is-exact", "def-spectral-sequence-computation-record", "thm-projective-and-injective-constructions-of-ext-are-naturally-isomorphic", "def-dependent-choice"]
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
    - title: "Stacks Project, Tags 015J-015N"
      url: "https://stacks.math.columbia.edu/download/derived.pdf"
status: "draft"
origin: "pipeline"
pipeline_run: "phase-2-next-17"
proof_strategy: "direct"
---

## Example

If the outer functor $G$ is exact in the Grothendieck setup, then only the column $E_2^{0,q}=G(R^qF(A))$ survives and the upper edge is $R^n(GF)(A)\cong G(R^nF(A))$. For $F=\operatorname{Hom}_{\mathbb Z}(\mathbb Z/2,-)$, $G=\mathrm{id}_{\mathbf{Ab}}$ and $A=\mathbb Z$, the only nonzero second-page entry is $E_2^{0,1}=\mathbb Z/2$.

## Facts & Assumptions

**Given:** The supplied resolutions and DC or supplied comparisons of the Grothendieck setup.

[F1] Exact outer functors give the stated canonical collapse isomorphism ([[cor-grothendieck-collapse-when-one-functor-is-exact]]).

[F2] Ext from supplied projective and injective models agrees ([[thm-projective-and-injective-constructions-of-ext-are-naturally-isomorphic]]).

## Verification

1.1 Applying an exact $G$ to any augmented injective resolution preserves its positive exactness, so $R^pG(V)=0$ for $p>0$ and every $V$ is $G$-acyclic. The Grothendieck injective-image condition is therefore automatic. The page has only column zero; for every $r\ge2$ outgoing differentials land in a zero positive column and incoming ones start in a negative column. Consequently $E_2=E_\infty$, and $F^1H^n=0,F^0H^n=H^n$ reconstruct the target through the upper edge in F1. [F1]

2.1 For the displayed specialization resolve $\mathbb Z/2$ by $0\to\mathbb Z\xrightarrow{2}\mathbb Z\to\mathbb Z/2\to0$. The free rank-one terms are projective by lifting the image of $1$. Applying $\operatorname{Hom}(-,\mathbb Z)$ gives $\mathbb Z\xrightarrow{2}\mathbb Z$, with kernel zero and cokernel $\mathbb Z/2$. F2 thus gives $R^0F(\mathbb Z)=0$, $R^1F(\mathbb Z)=\mathbb Z/2$ and all higher terms zero. The target is zero outside degree one and is $\mathbb Z/2$ in degree one; its upper edge is the identity under these common Hom-cohomology identifications. The lower edge is zero in positive degrees because its source is a positive derived identity functor. No extension or additional splitting choice remains. [F1, F2, step 1.1] ∎
