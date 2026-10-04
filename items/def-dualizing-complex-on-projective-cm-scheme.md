---
id: def-dualizing-complex-on-projective-cm-scheme
kind: definition
title: "Dualizing complexes and the normalized dualizing sheaf on a projective CM scheme"
status: published
origin: pipeline
pipeline_run: frontier-38-owner-30
deps: ["def-derived-category-of-an-abelian-category", "def-sheaf-ext-for-coherent-modules", "def-cohen-macaulay-local-module-and-ring"]
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
sources:
  references:
    - title: "Stacks, Definition 47.15.1: local dualizing-complex conditions"
      url: https://stacks.math.columbia.edu/tag/0A7B
    - title: "Stacks, Lemma 48.27.1: normalization over a field"
      url: https://stacks.math.columbia.edu/tag/0FVV
---

## Definition

A dualizing complex on a Noetherian scheme $X$ is an object $D_X\in D^b_{\mathrm{Coh}}(X)$ such that, locally on affine open neighborhoods $U=\operatorname{Spec}B$, its corresponding complex has finite injective dimension over $B$ and the homothety map $B\to R\operatorname{Hom}_B(D_X|_U,D_X|_U)$ is an isomorphism. Here $D^b_{\mathrm{Coh}}$ means bounded complexes with coherent cohomology, $\mathcal R\!Hom$ denotes derived internal Hom, and $\operatorname{Ext}_X^r(M,N)=\operatorname{Hom}_{D(X)}(M,N[r])$ is **global** Ext, rather than a sheaf Ext.

For a projective scheme over a field $k$, a normalization over $k$ consists of a dualizing complex $D_X$ and a trace $t_X:R\Gamma(X,D_X)\to k$ for which the evaluation map induces natural isomorphisms
$$\operatorname{Hom}_{D(X)}(K,D_X[r])\cong \operatorname{Hom}_k(H^{-r}(X,K),k)$$
for all $K\in D^b_{\mathrm{Coh}}(X)$ and $r\in\mathbb Z$. For a pure $d$-dimensional Cohen–Macaulay scheme (every local ring has depth equal to dimension), the normalized dualizing sheaf is $\omega_X=\mathcal H^{-d}(D_X)$. The local constructions on this page prove existence and $D_X\cong\omega_X[d]$; concentration is a conclusion, rather than an additional definition. The shift convention is $H^a(K[b])=H^{a+b}(K)$. Pure dimension means every irreducible component has dimension $d$. A dualizing sheaf on a singular CM scheme need not be invertible.
