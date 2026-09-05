---
id: lem-local-homomorphism-residue-field-map
kind: lemma
title: "A local morphism of stalks induces a residue-field map"
status: published
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-local-ring, def-morphism-locally-ringed-spaces]
proof_strategy: direct
verification:
  audited: 2026-09-05
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-05
sources:
  scraped: []
  references:
    - title: "The Stacks Project, Section 26.2"
      url: "https://stacks.math.columbia.edu/tag/01HA"
    - title: "Ravi Vakil, The Rising Sea, Section 6.3.1"
      url: "https://math.stanford.edu/~vakil/216blog/FOAGnov1817public.pdf"
---

## Statement

Let
$$
(f,f^\sharp):(X,\mathcal O_X)\to(Y,\mathcal O_Y)
$$
be a morphism of locally ringed spaces, and let $x\in X$. Then the local stalk
map
$$
f^\sharp_x:\mathcal O_{Y,f(x)}\longrightarrow\mathcal O_{X,x}
$$
induces a field homomorphism
$$
\kappa(f(x))\longrightarrow \kappa(x)
$$
between residue fields.

## Facts & Assumptions

**Given:** A morphism of locally ringed spaces
$(f,f^\sharp):(X,\mathcal O_X)\to(Y,\mathcal O_Y)$ and a point $x\in X$.

[F1] A local ring has a unique maximal ideal, and its residue field is the
quotient by that ideal ([[def-local-ring]]).

[F2] In a morphism of locally ringed spaces, the stalk map
$f^\sharp_x:\mathcal O_{Y,f(x)}\to\mathcal O_{X,x}$ sends the maximal ideal of
the source into the maximal ideal of the target
([[def-morphism-locally-ringed-spaces]]).

## Proof

**Proof technique:** direct.

1.1 Let $\mathfrak m_{f(x)}$ and $\mathfrak m_x$ be the maximal ideals of the two stalks. By [F2], the composite $$\mathcal O_{Y,f(x)}\xrightarrow{\,f^\sharp_x\,}\mathcal O_{X,x}\longrightarrow \mathcal O_{X,x}/\mathfrak m_x$$ kills $\mathfrak m_{f(x)}$, so it factors through the quotient $$\mathcal O_{Y,f(x)}/\mathfrak m_{f(x)}.$$ [F1, F2, given]

2.1 By [F1], the source and target quotients in step 1.1 are exactly the residue fields $\kappa(f(x))$ and $\kappa(x)$. Therefore step 1.1 is the desired field homomorphism $$\kappa(f(x))\to\kappa(x).$$ [F1, step 1.1] ∎
