---
id: def-euclidean-hypersurface-normal-shape-operator-and-curvature
kind: definition
title: Euclidean hypersurface normals, shape operators and curvature
status: published
origin: pipeline
pipeline_run: frontier-38-owner-30
deps:
- def-embedded-submanifold-and-slice-chart
- def-total-derivative-in-euclidean-space
- def-determinant-of-a-linear-operator
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
    delegated_by: "owner via frontier-38-owner-30 build dispatch"
    scope: "Historical completed Step 5 full authored item reading and mathematical acceptance; exact historical raw bytes differ from current only by publication status and verification metadata. Direct prerequisite interfaces checked; no recursive audit of supplier proofs."
    evidence:
      - "research/frontier-38-owner-30-reader-6.md"
      - "research/frontier-38-owner-30-alpha-batch-6-5a.md"
      - "research/frontier-38-owner-30-step5-hash-6-post-5a.json"
    content_sha256: "9950d9bed5bb5ecf8c7f0476ff4bb32a00a852475bf95d41bb3376bbb190b7cc"
  precheck: n/a
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
  - title: J. Lebl, Basic Analysis II, §8.5
    url: https://www.jirka.org/ra/html/sec_svinvfuncthm.html
    locator: Theorem 8.5.1 inverse derivative formula; the smooth adjugate bootstrap and finite localization are derived locally.
  - title: Ved Datar, Lectures on Riemannian Geometry
    url: https://math.iisc.ac.in/~vvdatar/Lecture_Notes/RG_Lectures_typesett_published.pdf
    locator: Definition 14.2.1 and Corollary 14.2.2, printed p.104; Example 14.2.4, p.105; Definition 14.2.7 and Remark 14.2.8, p.106. The explicit graph determinant is derived locally in this item or its suppliers.
justified_by:
- lem-smooth-euclidean-hypersurface-graph-and-localization
---

## Definition

For $n\ge2$, a smooth embedded hypersurface $S\subset\mathbb R^n$ has the embedded-submanifold meaning of [[def-embedded-submanifold-and-slice-chart]]. If $X:U\subset\mathbb R^{n-1}\to S$ is a smooth local parametrization of rank $n-1$, define $T_{X(y)}S=\operatorname{im}DX(y)$ with its Euclidean inner product. A smooth local unit normal is a smooth map $\nu:V\to\mathbb R^n$ on a relatively open subset $V\subseteq S$ with $|\nu|=1$ and $\nu\perp TS$. Define the Euclidean shape operator by $S_\nu v=-d\nu_p(v)$ on $T_pS$, and the extrinsic Gaussian (Gauss–Kronecker) curvature by $K_\nu(p)=\det S_\nu(p)$. Here $d\nu_p(DX(y)u)=D(\nu\circ X)(y)u$. Smooth functions and compact supports on $S$ use its subspace topology and these local parametrizations. Nonvanishing curvature means $K_\nu\ne0$ for either choice of local unit normal at each point. The graph and localization lemma [[lem-smooth-euclidean-hypersurface-graph-and-localization]] proves that these definitions are independent of parametrization, that the derivative takes values in $T_pS$, and that changing the unit normal only changes the sign of the shape operator. This is the Euclidean specialization of the usual Weingarten definition; the equivalence is proved there, without requiring the later Riemannian theory.
