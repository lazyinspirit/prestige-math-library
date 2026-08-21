---
id: cor-injective-regular-ck-map-is-a-ck-diffeomorphism-onto-its-image
kind: corollary
title: "An injective regular $C^k$ map is a $C^k$ diffeomorphism onto its image"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-ck-euclidean-maps-and-diffeomorphisms, thm-injective-regular-c-one-map-is-a-diffeomorphism-onto-its-image, thm-higher-regularity-of-local-inverses]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-21
sources:
  scraped: []
  references:
    - title: "J. Lebl, Basic Analysis II, Remark 8.5.8"
      url: "https://jirilebl.github.io/ra/realanal2.pdf"
    - title: "University of Toronto MAT237, §3.3"
      url: "https://www.math.utoronto.ca/courses/mat237y1/20199/notes/Chapter3/S3.3.html"
pipeline_run: null
---

## Statement

Let $k,n\ge1$, let $U\subseteq\mathbb R^n$ be open, and let $f:U\to\mathbb R^n$ be an injective $C^k$ map whose derivative is invertible everywhere. Then $f[U]$ is open and the corestriction $f:U\to f[U]$ is a $C^k$ diffeomorphism.

## Facts & Assumptions

**Given:** The hypotheses in the Statement and the $C^k$ diffeomorphism convention of [[def-ck-euclidean-maps-and-diffeomorphisms]].

[L1] Under the corresponding $C^1$ hypotheses, $f[U]$ is open and $f:U\to f[U]$ is a $C^1$ diffeomorphism ([[thm-injective-regular-c-one-map-is-a-diffeomorphism-onto-its-image]]).

[L2] If $f$ is $C^k$ for $k\ge1$, then every local inverse supplied by the inverse function theorem is $C^k$ ([[thm-higher-regularity-of-local-inverses]]).

## Proof

**Proof technique:** direct.

1.1 Since a $C^k$ map with $k\ge1$ is $C^1$, [L1] supplies the open image and the unique global $C^1$ inverse $g:f[U]\to U$. [L1]

2.1 Around each $y\in f[U]$, the inverse $g$ agrees with the unique local inverse of $f$. By [L2] that restriction is $C^k$. Thus $g$ is locally, and hence globally, $C^k$, so the corestriction is a $C^k$ diffeomorphism. [step 1.1, L2] ∎
