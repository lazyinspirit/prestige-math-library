---
id: lem-nagata-finite-dense-quasi-projective-open-cover
kind: lemma
title: Finite dense quasi-projective open covers over a Noetherian base
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 0
deps:
  - def-locally-noetherian-and-noetherian-scheme
  - def-locally-finite-type-and-finite-type-morphism
  - def-quasi-projective-morphism
proof_strategy: direct
axiom_use: No choice principle is assumed. A finite affine cover and the finite set of all its permutations are used; all projective embeddings arise from supplied finite algebra generators.
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: Brian Conrad, Deligne's notes on Nagata compactifications, August 10, 2007 preprint
      url: https://math.stanford.edu/~conrad/papers/nagatafinal.pdf
      locator: Internal p.30, final finite dense quasi-projective covering argument, read in full. The disjoint-union projective-space embedding is given explicitly below instead of importing EGAII5.3.6.
---

## Statement

Let $f:X\to S$ be a morphism of finite type between Noetherian schemes. There is a finite open cover $X=\bigcup_a U_a$ such that each $U_a$ is dense in $X$ and $U_a\to S$ is H-quasi-projective: it admits a quasi-compact immersion into a finite projective space over $S$. No separation hypothesis on $f$ or choice axiom is required. The empty scheme is included.

## Facts & Assumptions

**Given:** The finite-type morphism of Noetherian schemes in the Statement.

[F1] A Noetherian scheme has a finite affine cover by Noetherian rings. Every open subspace of a Noetherian space is quasi-compact ([[def-locally-noetherian-and-noetherian-scheme]]).

[F2] A morphism of finite type is quasi-compact and locally of finite type; on affine opens over an affine base its coordinate algebra is finitely generated ([[def-locally-finite-type-and-finite-type-morphism]]).

[F3] The library's quasi-projective convention is H-quasi-projectivity: a quasi-compact immersion into some finite projective space over the base ([[def-quasi-projective-morphism]]).

## Proof

**Proof technique:** direct.

1.1 If $X$ is empty, its single empty open is dense and has its empty immersion into $\mathbb P^0_S$, so the conclusion holds. Otherwise cover $S$ by its affine opens and then their inverse images in $X$ by affine opens subordinate to those images. Quasi-compactness gives a finite such cover $W_1,\ldots,W_n$ of $X$; each $W_i$ maps to an affine open $S_i=\operatorname{Spec}A_i\subseteq S$. Its coordinate algebra has a finite list of $A_i$-algebra generators by [F2], because the restriction to this quasi-compact open is still of finite type. Thus $W_i$ is a closed subscheme of $\mathbb A^{d_i}_{S_i}$, which is open in $\mathbb P^{d_i}_{S_i}$ and hence in $\mathbb P^{d_i}_S$. This gives an immersion $W_i\to\mathbb P^{d_i}_S$. It is quasi-compact: over every affine open in the target, its inverse image is an open of the Noetherian scheme $W_i$, hence quasi-compact by [F1]. Consequently each $W_i$ is H-quasi-projective. [given, F1, F2, F3, construct, algebra]

2.1 For each permutation $\sigma$ of $\{1,\ldots,n\}$ define the open pieces $P_{\sigma,i}=W_{\sigma(i)}\setminus\overline{\bigcup_{j<i}W_{\sigma(j)}}$ and set $U_\sigma=\bigcup_iP_{\sigma,i}$. Closure is taken in $X$, and an empty preceding union has empty closure. These are open in $X$. For $i<k$, $P_{\sigma,k}$ misses $W_{\sigma(i)}$, so the pieces are pairwise disjoint. Hence $U_\sigma$ is their finite disjoint union as a scheme, and each piece is also closed in this union, since its complement there is the union of the other open pieces. [step 1.1, construct]

3.1 The open $U_\sigma$ is dense. In fact let $T\subseteq X$ be any nonempty open. There is a least index $i$ with $T\cap W_{\sigma(i)}\ne\varnothing$, since the $W_i$ cover $X$. For $j<i$, the open $T$ misses $W_{\sigma(j)}$, and therefore misses its closure: a point in that closure would have the open neighbourhood $T$ meeting $W_{\sigma(j)}$. A finite union has closure the union of its closures, so $T$ misses the closure removed in the definition of $P_{\sigma,i}$. It follows that the nonempty open $T\cap W_{\sigma(i)}$ is contained in $P_{\sigma,i}$, proving density. The finite family of all the $U_\sigma$ covers $X$, since for every $i$ some permutation starts with $i$ and its first piece is $W_i$. This uses all permutations, not any family of chosen witnesses indexed by points. [step 1.1, step 2.1, construct]

3.2 Each $P_{\sigma,i}$ is an open of $W_{\sigma(i)}$ and hence has the immersion into $\mathbb P^{d_{\sigma(i)}}_S$ constructed in step 1.1. It is quasi-compact by the same Noetherian argument there. To combine finitely many such immersions, put $N+1=\sum_i(d_{\sigma(i)}+1)$ and use disjoint coordinate blocks in $\mathbb P^N_S$. The projective linear subspaces $L_i\cong\mathbb P^{d_{\sigma(i)}}_S$ cut out by all coordinates outside block $i$ are closed and pairwise disjoint: the defining ideals of any two contain together all homogeneous coordinates, so their intersection has empty projective spectrum. Their finite union $L$ is a closed subscheme and is their disjoint union. Each immersion of $P_{\sigma,i}$ into $L_i$ factors as an open immersion followed by a closed immersion. Choose these factorizations for the finite list, take the disjoint union of the intermediate closed subschemes in $L_i$, and then its closed immersion in $\mathbb P^N_S$. The disjoint union of the open parts is open in this closed union. Thus $U_\sigma=\coprod_iP_{\sigma,i}$ has an immersion into $\mathbb P^N_S$. It is quasi-compact, again because inverse images of affine opens are open in the Noetherian scheme $U_\sigma$. [F1, F3, step 1.1, step 2.1, construct, algebra]

4.1 Step 3.2 proves H-quasi-projectivity for each of the finitely many dense opens in step 3.1. Together with the empty case of step 1.1 this is the full Statement. No use of separatedness occurred: the disjoint pieces are opens of the supplied scheme and their finite projective coordinate blocks are separated independently of the original $X$. [given, F3, step 1.1, step 3.1, step 3.2] ∎
