---
id: "ex-relative-homology-of-a-handle-by-excision"
kind: "example"
title: "Relative homology of a handle by excision"
deps: ["cor-relative-homology-of-a-single-handle-pair", "lem-relative-homology-of-the-standard-handle-pair"]
provenance:
  statement: "ai-generated"
  proof: "ai-altered"
verification:
  audited: 2026-09-07
sources:
  references:
    - url: "https://audin.pages.math.unistra.fr/livres/audin-damian-en.pdf"
      title: "Audin–Damian, Morse Theory and Floer Homology"
status: published
origin: "pipeline"
proof_strategy: "finite relative calculation"
generation:
  role: "example"
---

## Example

For a single $2$-handle crossing in a $4$-manifold satisfying the compact-band hypotheses (and $\mathrm{AC}_\omega$), collar excision reduces the relative homology to $(D^2\times D^2,S^1\times D^2)$ and then to $(D^2,S^1)$. With any abelian coefficients $G$, the result is $G$ in degree $2$ and zero in every other degree.

## Facts & Assumptions

[F1] [[cor-relative-homology-of-a-single-handle-pair]]: Assume $\mathrm{AC}_\omega$ and the one-critical-point compact-band hypotheses, with critical index $k$. For every abelian group $G$ and $i\ge0$, $H_i(M^b,M^a;G)\cong G$ if $i=k$ and zero otherwise. In particular this holds for the additive group of any coefficient ring. No orientation of $M$ is needed.

[F2] [[lem-relative-homology-of-the-standard-handle-pair]]: For any abelian group $G$, integers $0\le k\le n$, and $i\ge0$, the standard handle pair has $H_i(D^k\times D^{n-k},S^{k-1}\times D^{n-k};G)\cong G$ if $i=k$ and zero otherwise. Here $D^0$ is a point and $S^{-1}=\varnothing$.

## Verification

**Given:** The objects and hypotheses in the example.

1.1 The collar-excision argument for a single critical point replaces the sublevel pair in relative homology by the standard handle pair with $k=2,n=4$. It uses an open collar thickening of the lower sublevel before excision, so the closure-in-interior requirement is met. [F1]

2.1 The explicit pair homotopy $(u,v)\mapsto(u,(1-t)v)$ contracts the second disk factor. The standard-pair calculation then identifies $H_2(D^2,S^1;G)$ with $H_1(S^1;G)=G$. In degree zero the map from the circle to the disk is the identity on $G$, so the relative degree-zero group and degree-one group vanish; all higher groups except degree two vanish as well. This includes $G=0$. [F2, step 1.1, algebra] ∎
