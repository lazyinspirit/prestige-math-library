---
id: def-gts-stable-pairs-and-dt-ideal-sheaf-moduli-on-projective-threefolds
kind: definition
title: Stable pairs and DT ideal-sheaf moduli on projective threefolds
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 0
domain: mathematics
library: physics
deps:
  - def-derived-scheme-and-cotangent-complex
dependency_roles:
  def-derived-scheme-and-cotangent-complex: mathematical-premise
justified_by: []
aliases: []
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "Pandharipande and Thomas, Curve Counting via Stable Pairs in the Derived Category"
      url: "https://arxiv.org/pdf/0707.2348v5"
      locator: "§§1.1, 1.4, 2.1–2.3; stable-pair families, the complex I•, fixed-determinant obstruction theory, and Theorems 2.14–2.15."
    - title: "Martin Kool, Four Lectures on Stable Pairs"
      url: "https://www.staff.science.uu.nl/~kool0009/talk04-13.pdf"
      locator: "Lecture 1, §§1.1–1.3, especially the stable-pair definition and Theorem 1.2; the notes refer the perfect-obstruction-theory proof to Pandharipande–Thomas."
    - title: "The Stacks Project, The Cotangent Complex, Chapter 92"
      url: "https://stacks.math.columbia.edu/download/cotangent.pdf"
      locator: "Definition 92.3.2 and the scheme cotangent-complex construction in Sections 92.18–92.24."
verification:
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-05
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
---

## Definition

Assume the Axiom of Choice and Dependent Choice carried by the declared derived and deformation suppliers. Let $X$ be a nonsingular projective threefold over $\mathbb C$ and fix an ample line bundle $H$ on $X$. For any coherent sheaf $G$ with support of dimension at most one, define its associated integral one-cycle by $[G]_1=\sum_C\operatorname{length}_{\mathcal O_{X,\eta_C}}(G_{\eta_C})[C]$, where $C$ runs over the one-dimensional irreducible support components and $\eta_C$ is their generic point; the sum is zero for zero-dimensional $G$. Its homology class is the sum of the same multiplicities times the fundamental classes of the complex curves, in singular homology $H_2(X(\mathbb C),\mathbb Z)$. Fix $\beta$ in this group. In moduli subscripts, equality of a one-cycle with $\beta$ means equality of its homology class, rather than equality of cycles. Write $[Z]_1=[\mathcal O_Z]_1$. For such a sheaf the Hilbert polynomial with respect to $H$ is $P_G(k)=\chi(X,G\otimes H^{\otimes k})=(\int_{[G]_1}c_1(H))k+\chi(X,G)$; the integral is the sum of the generic multiplicities times the degrees of $H$ on the component curves.

A stable pair is a morphism $s:\mathcal O_X\to F$ of coherent sheaves such that $F$ is pure of dimension one and $\operatorname{coker}(s)$ is zero-dimensional. Purity means every nonzero coherent subsheaf of $F$ has one-dimensional support. A family over a scheme $S$ consists of a coherent sheaf on $X\times S$ flat over $S$ and a section from $\mathcal O_{X\times S}$ whose geometric fibres satisfy these conditions; fixing the homology class of $[F]_1$ to be $\beta$ and $\chi(F)=n$ fixes the Hilbert polynomial $P_F(k)=(\int_\beta c_1(H))k+n$ and defines the moduli problem $P_n(X,\beta)$. Its associated complex is $I^\bullet=[\mathcal O_X\xrightarrow{s}F]$ in cohomological degrees $0,1$.

The DT ideal-sheaf datum $I_n(X,\beta)$ parametrizes ideal sheaves $I_Z\subseteq\mathcal O_X$ of subschemes $Z\subset X$ with dimension at most one, one-dimensional cycle class $[Z]_1=\beta$, and $\chi(\mathcal O_Z)=n$. The zero-dimensional part of $Z$ is allowed. These are distinct moduli problems: a stable pair is not identified with an ideal sheaf or with a stable map.

The cited derived-scheme supplier fixes the cotangent-complex convention if a moduli functor is given a derived enhancement. The cited square-zero-extension theorem applies to deformations of a specified flat, locally finitely presented ambient scheme over a small Artin extension. It does not identify the deformation-obstruction complex of a pair $(F,s)$ on fixed $X$; that pair-specific obstruction theory is a separate assertion and is required before constructing a PT virtual class. In particular, no stable-pair obstruction claim is deduced from the imported Ext$^2$ theorem.

## Definition references

[[def-derived-scheme-and-cotangent-complex]]

