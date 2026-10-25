---
id: lem-direct-sum-factor-swap-scales-oriented-bases-by-a-sign
kind: lemma
title: "Swapping direct summands scales oriented bases by a sign"
status: published
origin: pipeline
pipeline_run: frontier-38-owner-30
deps: [def-product-orientation, def-internal-direct-sum, def-determinant-line-orientation-of-a-finite-dimensional-real-vector-space]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: literature-derived
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
    scope: "Historical full Step 5 item mathematical read and adjudication where required, including the used supplier interfaces; current mathematical text matches the recorded postreview snapshot."
    delegated_by: owner
    evidence:
      - research/frontier-38-owner-30-reader-12.md
      - research/frontier-38-owner-30-dispatch/reader-reader-12.result.json
      - research/frontier-38-owner-30-step5-hash-12-post-5a.json
      - research/frontier-38-owner-30-alpha-batch-12-5a-decisions.json
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
sources:
  references:
    - title: "Victor Guillemin and Alan Pollack, Differential Topology (Prentice-Hall, 1974; complete 236-page PDF)"
      url: https://www.math.auckland.ac.nz/~hekmati/Books/GP.pdf
      locator: "Ch. 3 §3, printed p. 115 (the sign $(-1)^{(\\dim X)(\\dim Z)}$ computed by counting transpositions of basis elements)"
---

## Statement

Let $U,W$ be oriented finite-dimensional real vector spaces, using determinant-line rays also in dimension zero, with dimensions $k,l$. The swap $s:U\oplus W\to W\oplus U$, $s(u,w)=(w,u)$, has orientation sign $(-1)^{kl}$ for the written product orientations. If $V=U\oplus W$ is an internal direct sum, the two orientations transported to $V$ by addition likewise differ by $(-1)^{kl}$.

## Facts & Assumptions

**Given:** Oriented $U,W$ of dimensions $k,l$, and, for the internal version, $V=U\oplus W$.

[F1] Product orientations use the ordered determinant isomorphism $\det(U\oplus W)\cong\det U\otimes\det W$ ([[def-product-orientation]]).

[F2] An orientation is a positive ray in the determinant line, including the two rays in dimension zero ([[def-determinant-line-orientation-of-a-finite-dimensional-real-vector-space]]).

[F3] Internal direct sums identify the external sum with $V$ by $(u,w)\mapsto u+w$ ([[def-internal-direct-sum]]).

## Proof

1.1 For positive-dimensional factors take positive bases $u,w$. The swap sends the domain's ordered basis $(u,w)$ to the list consisting first of the $U$-vectors in the second summand, then of the $W$-vectors in the first. Reordering that image to the codomain's positive list $(w,u)$ takes $kl$ transpositions, so its determinant sign is $(-1)^{kl}$. This is the exterior-algebra identity $w\wedge u=(-1)^{kl}u\wedge w$. [F1, F2, given, algebra]

2.1 The same exterior identity applies to arbitrary positive determinant elements, including signed scalars for a zero-dimensional factor; if $k=0$ or $l=0$ its sign is $+1$. For an internal sum, the two addition maps satisfy $a_{W,U}\circ s=a_{U,W}$, so transporting their product rays to $V$ gives the same comparison sign. Thus both statements hold in every dimension, and for $k=l=1$ the swap reverses orientation. [F1, F2, F3, step 1.1, algebra] ∎
