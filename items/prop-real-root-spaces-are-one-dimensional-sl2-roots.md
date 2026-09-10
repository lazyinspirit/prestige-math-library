---
id: prop-real-root-spaces-are-one-dimensional-sl2-roots
kind: proposition
title: "Real root spaces are one dimensional sl2 roots"
status: draft
origin: pipeline
deps: ["def-real-and-imaginary-kac-moody-roots", "prop-the-weyl-group-preserves-roots-and-root-multiplicities", "prop-kac-moody-root-spaces-are-finite-dimensional"]
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
    - title: "Kleshchev, Lectures on Infinite Dimensional Lie Algebras — §5.1, pp.68–69, with §3.2 transport"
      url: https://darkwing.uoregon.edu/~klesh/teaching/IDLALN3.pdf
proof_strategy: direct
---

## Statement

Every real root $\alpha$ has a one-dimensional root space and an $\mathfrak{sl}_2$ triple $(e_\alpha,h_\alpha,f_\alpha)$ in degrees $\alpha,0,-\alpha$. The only roots on $\mathbb C\alpha$ are $\pm\alpha$. The coroot $h_\alpha$ is independent of the transporting Weyl word and simple root when normalized by $\alpha(h_\alpha)=2$.

## Facts & Assumptions

**Given:** A real root alpha=w alpha_i and the proved root-transporting automorphisms.

[F1] Real roots are the Weyl orbits of the simple roots. ([[def-real-and-imaginary-kac-moody-roots]]).

[F2] Simple reflections lift to Lie automorphisms and preserve multiplicities. ([[prop-the-weyl-group-preserves-roots-and-root-multiplicities]]).

[F3] Simple root spaces and their multiples are known. ([[prop-kac-moody-root-spaces-are-finite-dimensional]]).

## Proof

1.1 Choose a finite word for $w$ and multiply the automorphisms of F2 to get $T$. Applying $T$ to $[e_i,f_i]=h_i$, $[h_i,e_i]=2e_i$, and $[h_i,f_i]=-2f_i$ gives a triple $e_\alpha=Te_i$, $h_\alpha=Th_i$, $f_\alpha=Tf_i$ with those same brackets. Each vector is nonzero; they lie in three distinct weight spaces $\alpha,0,-\alpha$, hence are independent. Mapping the standard three matrix generators of $\mathfrak{sl}_2$ to them is a bracket-preserving linear bijection. [F1, F2, F3]

2.1 F2 and F3 give $\mathfrak g_\alpha=T\mathfrak g_{\alpha_i}=\mathbb Ce_\alpha$ and the analogous negative equality. If $c\alpha$ were another root, $T^{-1}$ would send its nonzero space to degree $c\alpha_i$, so F3 forces $c=1$ or $c=-1$. The bracket line $[\mathfrak g_\alpha,\mathfrak g_{-\alpha}]$ is therefore the nonzero line $\mathbb Ch_\alpha$, independent of $T$. Evaluation by $\alpha$ is nonzero on this line since $\alpha(h_\alpha)=2$ from step 1.1. There is exactly one element of this line with that evaluation, proving independence of the normalized coroot. [F2, F3, step 1.1] ∎

## Sources

Source comparison: [Kleshchev](https://darkwing.uoregon.edu/~klesh/teaching/IDLALN3.pdf), §5.1, pp.68–69, with §3.2 transport.
