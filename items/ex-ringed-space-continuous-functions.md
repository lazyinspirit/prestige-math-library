---
id: ex-ringed-space-continuous-functions
kind: example
title: "Continuous real-valued functions make a space into a locally ringed space"
status: draft
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-locally-ringed-space, def-ringed-space, def-stalk-of-presheaf, def-local-ring]
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-05
sources:
  scraped: []
  references:
    - title: "The Stacks Project, Example 6.25.2 and Section 26.2"
      url: "https://stacks.math.columbia.edu/tag/0090"
    - title: "Ravi Vakil, The Rising Sea, Example 2.2.13"
      url: "https://math.stanford.edu/~vakil/216blog/FOAGnov1817public.pdf"
---

## Example

For every topological space $X$, the sheaf $\mathcal C_X^0$ of continuous
real-valued functions makes $(X,\mathcal C_X^0)$ into a locally ringed space.

## Facts & Assumptions

**Given:** A topological space $X$.

[F1] A ringed space is a space equipped with a sheaf of rings
([[def-ringed-space]]).

[F2] Stalks are germs of neighbourhood sections ([[def-stalk-of-presheaf]]).

[L1] A locally ringed space is a ringed space whose stalks are local rings
([[def-locally-ringed-space]], [[def-local-ring]]).

## Verification

**Proof technique:** direct.

1.1 The usual restriction of continuous functions makes $U\mapsto \mathcal C_X^0(U)$ a sheaf of commutative rings on $X$, so [F1] gives a ringed space $(X,\mathcal C_X^0)$. [F1, given]

2.1 Fix $x\in X$. By [F2], the stalk $\mathcal C^0_{X,x}$ consists of germs of continuous real-valued functions near $x$. The germs vanishing at $x$ form an ideal $\mathfrak m_x$. If a germ is not in $\mathfrak m_x$, it has a representative $g$ with $g(x)\neq0$, so continuity makes $g$ nonzero on a smaller neighbourhood of $x$; hence $1/g$ is continuous there and defines an inverse germ. Therefore the nonunits are exactly the germs in $\mathfrak m_x$, so $\mathfrak m_x$ is the unique maximal ideal. Thus $\mathcal C^0_{X,x}$ is a local ring, and [L1] shows that $(X,\mathcal C_X^0)$ is locally ringed. [F2, L1, given] ∎
