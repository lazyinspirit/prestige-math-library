---
id: prop-the-weyl-group-preserves-roots-and-root-multiplicities
kind: proposition
title: "The weyl group preserves roots and root multiplicities"
status: draft
origin: pipeline
deps: ["def-simple-reflections-and-the-kac-moody-weyl-group", "lem-serre-elements-vanish-before-serre-generation", "prop-kac-moody-root-spaces-are-finite-dimensional"]
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  references:
    - title: "Kleshchev, Lectures on Infinite Dimensional Lie Algebras — Lemma 3.1.2 and §3.2, pp.37–42"
      url: https://darkwing.uoregon.edu/~klesh/teaching/IDLALN3.pdf
proof_strategy: direct
---

## Statement

For every finite GCM, $W$ permutes $\Delta$, and $\dim\mathfrak g_{w\beta}=\dim\mathfrak g_\beta$. Each simple reflection is implemented on root spaces by a Lie automorphism of $\mathfrak g$. For a symmetrizer $D$, the form on the root span with $(\alpha_i,\alpha_j)=d_i a_{ij}$ is $W$-invariant.

## Facts & Assumptions

**Given:** A finite GCM, its simple triples and the specified Weyl action.

[F1] The reflection formula is fixed. ([[def-simple-reflections-and-the-kac-moody-weyl-group]]).

[F2] Serre vanishing holds before generation. ([[lem-serre-elements-vanish-before-serre-generation]]).

[F3] Root spaces form a direct weight decomposition with finite multiplicities. ([[prop-kac-moody-root-spaces-are-finite-dimensional]]).

## Proof

1.1 For $D=\operatorname{ad}e_i$, F2 gives nilpotence on each $e_j$; the relations give $Df_j=\delta_{ij}h_i$, $D^2f_i=-2e_i$, $D^3f_i=0$, and $D^2h=0$. For any derivation, $D^m[x,y]=\sum_{k=0}^m\binom mk[D^kx,D^{m-k}y]$, proved by induction and Pascal addition. Hence nilpotence on generators propagates to every finite bracket word and every finite sum. The same holds for $\operatorname{ad}f_i$. Their pointwise finite exponentials preserve brackets by the binomial identity, with inverses obtained by negating the derivation. [F2, given]

2.1 Set $T_i=\exp(\operatorname{ad}f_i)\exp(-\operatorname{ad}e_i)\exp(\operatorname{ad}f_i)$. On the triple, the finite expansions use $\exp(\operatorname{ad}f_i)e_i=e_i-h_i-f_i$, $\exp(\operatorname{ad}f_i)h_i=h_i+2f_i$, and $\exp(-\operatorname{ad}e_i)f_i=f_i-h_i-e_i$. Substitution gives $T_ie_i=-f_i$, $T_if_i=-e_i$, and $T_ih_i=-h_i$. It fixes $\ker\alpha_i$ in $\mathfrak h$. Writing $h=(h-\alpha_i(h)h_i/2)+\alpha_i(h)h_i/2$ gives $T_ih=h-\alpha_i(h)h_i$. [F1, step 1.1]

3.1 For $x\in\mathfrak g_\beta$, $[h,T_ix]=T_i[T_i^{-1}h,x]=\beta(s_ih)T_ix=(s_i\beta)(h)T_ix$. The inverse automorphism gives a bijection between these spaces. Products of $T_i$ implement each word in the generators of $W$, proving root and multiplicity invariance. Only the induced weight action, not independence of the lift from a word, is required. [F1, F3, step 2.1]

4.1 If $DA$ is symmetric, extend $(\alpha_i,\alpha_j)=d_i a_{ij}$ bilinearly. For $\lambda$ in the root span, $(\alpha_i,\lambda)=d_i\lambda(h_i)$ and $(\alpha_i,\alpha_i)=2d_i$. Expanding $(\lambda-\lambda(h_i)\alpha_i,\mu-\mu(h_i)\alpha_i)$ cancels the two cross terms against $2d_i\lambda(h_i)\mu(h_i)$, leaving $(\lambda,\mu)$. This computation allows a degenerate form. [F1, given] ∎

## Sources

Source comparison: [Kleshchev](https://darkwing.uoregon.edu/~klesh/teaching/IDLALN3.pdf), Lemma 3.1.2 and §3.2, pp.37–42.
