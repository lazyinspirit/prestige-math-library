---
id: def-breuil-kisin-fargues-module
kind: definition
title: "Breuil–Kisin–Fargues module"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 0
deps:
  - def-integral-perfectoid-ring-via-ainf-and-tilt
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Bhatt, Morrow, and Scholze, Integral p-adic Hodge Theory, Definition 1.5 and §4.3"
      url: "https://arxiv.org/pdf/1602.03148v3.pdf"
    - title: "Bhatt and Scholze, Prismatic F-crystals and Crystalline Galois Representations, §5.2"
      url: "https://arxiv.org/pdf/2106.14735v2.pdf"
verification:
  precheck: n/a
---

## Definition

Let $C$ be a complete algebraically closed extension of $\mathbb Q_p$ whose ring of integers $\mathcal O_C$ is integral perfectoid in the sense of the integral-perfectoid definition, so its tilt $\mathcal O_C^\flat=\varprojlim_{x\mapsto x^p}\mathcal O_C/p\mathcal O_C$ has a Fontaine map $\theta:A_{\inf}\to\mathcal O_C$ with principal kernel, where $A_{\inf}=W(\mathcal O_C^\flat)$. Let $\phi$ be Witt Frobenius and choose a generator $\xi$ of $\ker\theta$. A **Breuil–Kisin–Fargues module** is a finitely presented $A_{\inf}$-module $M$ equipped with a $\phi$-semilinear isomorphism
$$
\varphi_M:M[1/\xi]\xrightarrow{\sim}M[1/\phi(\xi)]
$$
such that $M[1/p]$ is finite free over $A_{\inf}[1/p]$. Semilinearity means $\varphi_M(am)=\phi(a)\varphi_M(m)$ for $a\in A_{\inf}$ and $m\in M$.

## Definition references

[[def-integral-perfectoid-ring-via-ainf-and-tilt]]

[[lem-completion-of-an-algebraic-closure-of-a-p-adic-field-is-perfectoid]]

[Bhargav Bhatt, Matthew Morrow, and Peter Scholze, *Integral p-adic Hodge Theory*, Definition 1.5 and §4.3](https://arxiv.org/pdf/1602.03148v3.pdf)

[Bhargav Bhatt and Peter Scholze, *Prismatic F-crystals and Crystalline Galois Representations*, §5.2](https://arxiv.org/pdf/2106.14735v2.pdf)
