---
id: lem-nonaffine-finite-field-descent-of-morphisms
kind: lemma
title: "Morphisms descend under a finite field extension with the full descent identity"
status: published
origin: pipeline
deps: [thm-affine-fibre-product-tensor-ring, thm-morphisms-into-affine-scheme-global-sections]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
    delegated_by: "owner via frontier-38-owner-30 build dispatch"
    scope: "Historical completed Step 5 full authored item reading and mathematical acceptance; exact historical raw bytes differ from current only by publication status and verification metadata. Direct prerequisite interfaces checked; no recursive audit of supplier proofs."
    evidence:
      - "research/frontier-38-owner-30-reader-24.md"
      - "research/frontier-38-owner-30-alpha-batch-24-5a.md"
      - "research/frontier-38-owner-30-step5-hash-24-post-5a.json"
    content_sha256: "02854c77e1d9bf5e398281cb1f48f8b81365260fa1841bb6fbba0fc76ab4e6b8"
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
sources:
  references:
    - title: "Stacks Project, Descent, descent of morphisms of schemes"
      url: https://stacks.math.columbia.edu/tag/023Q
    - title: "SGA3, Expose VIA, 3.2.3 finite scalar descent"
      url: https://webusers.imj-prg.fr/~patrick.polo/SGA3/Exp6A-13oct24.pdf
---

## Statement

Let $K/k$ be a finite field extension, not necessarily separable, and let $X,Z$ be $k$-schemes. A $K$-morphism $f:X_K\to Z_K$ comes from a unique $k$-morphism $X\to Z$ if and only if its two base extensions over $K\otimes_kK$ agree under the canonical identifications. This is the full descent identity, not just invariance under automorphisms of $K/k$.

## Facts & Assumptions

[F1] Affine products have tensor-product coordinate rings. Morphisms into affine schemes correspond to maps on global sections. ([[thm-affine-fibre-product-tensor-ring]], [[thm-morphisms-into-affine-scheme-global-sections]])

## Proof

**Given:** $K/k$, $X$, $Z$, and a morphism $f$ with the stated descent identity.

1.1 For any $k$-algebra $A$, the sequence $A\to A\otimes_kK\rightrightarrows A\otimes_kK\otimes_kK$ is an equalizer. Choose a $k$-linear map $\epsilon:K\to k$ with $\epsilon(1)=1$, by extending $1$ to a finite basis. If the two images of $b\in A\otimes K$ agree, applying $\epsilon$ to the first of the two field factors gives $b=a\otimes1$, where $a=(1\otimes\epsilon)b$. Conversely such elements have equal images. The first map is injective by the same retraction. [F1, algebra, choose]

1.2 The projection $p:X_K\to X$ is finite faithfully flat, hence closed and onto. If two points of $X_K$ lie over the same point $x$, they lift to a common point of $X_K\times_XX_K$: their residue-field tensor product over $\kappa(x)$ is nonzero, so has a prime. Let $V\subset Z$ be affine. The descent identity implies that $W=f^{-1}(V_K)$ has the same inverse images under the two relation projections, so membership in $W$ is constant over the entire fibre of $p$. Thus $U=X\setminus p(X_K\setminus W)$ is open and $W=p^{-1}(U)$. These $U$ cover $X$ as $V$ ranges over an affine cover of $Z$. Finiteness makes $p$ closed by lying-over after quotienting an integral affine coordinate extension. [given, algebra, construct]

2.1 On an affine open $T=\operatorname{Spec}A\subset U$, write $V=\operatorname{Spec}B$. By [F1] the morphism corresponds to a map $B\otimes K\to A\otimes K$. Its restriction to $B$ has equal images in $A\otimes K\otimes K$ by the descent identity, so step 1.1 puts its image in $A$. This gives a unique $k$-morphism $T\to V$ with the required scalar extension. On overlaps the two descended maps agree: preimages of original affine target opens are the descended opens just constructed, and equality of the ring maps is detected by the injective map $A\to A\otimes K$ on any affine source chart. They glue to the desired morphism. Uniqueness follows from the same detection argument, and every base extension satisfies the descent identity. Only finite basis choices were used. [F1, step 1.1, step 1.2, construct] ∎
