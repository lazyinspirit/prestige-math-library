---
id: thm-global-regular-functions-affine-variety-coordinate-ring
kind: theorem
title: "Global regular functions on a classical affine variety are its coordinate ring"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-principal-open-classical-variety, def-principal-localisation, thm-coordinate-ring-principal-open]
justified_by: []
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "J. S. Milne, Algebraic Geometry, Proposition 3.11"
      url: "https://www.jmilne.org/math/CourseNotes/AG.pdf"
    - title: "Michael Artin, Notes for a Course in Algebraic Geometry, Proposition 2.5.2"
      url: "https://math.mit.edu/classes/18.721/notes/ag-jan26-2022.pdf"
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-05
---

## Statement

Assume the Axiom of Choice.

Let $X$ be a classical affine variety over an algebraically closed field $k$.
Then evaluation induces a ring isomorphism
$$ k[X]\xrightarrow{\sim}\mathcal O_X(X). $$

## Facts & Assumptions

**Given:** The Axiom of Choice and a classical affine variety $X$ over an algebraically closed field $k$.

[L1] For every classical affine variety, the principal open determined by $1$ is the whole variety: $D_X(1)=X$ ([[def-principal-open-classical-variety]]).

[L2] The principal localisation at $1$ is the original ring: $R_1 \cong R$ ([[def-principal-localisation]]).

[L3] Assuming the Axiom of Choice, for every $\overline f \in k[X]$, evaluation induces a ring isomorphism $k[X]_{\overline f}\xrightarrow{\sim}\mathcal O_X(D_X(\overline f))$ ([[thm-coordinate-ring-principal-open]]).

## Proof

**Proof technique:** direct.

1.1 Apply [L3] to the element $1 \in k[X]$. By [L1], the target is $\mathcal O_X(X)$, and by [L2] the source is canonically $k[X]$. The resulting isomorphism is exactly the evaluation map from $k[X]$ to global regular functions on $X$. [L1, L2, L3, given]

2.1 Therefore evaluation induces a ring isomorphism $k[X]\xrightarrow{\sim}\mathcal O_X(X)$. [step 1.1] ∎
