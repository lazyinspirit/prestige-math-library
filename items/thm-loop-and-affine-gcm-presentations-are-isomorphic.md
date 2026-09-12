---
id: thm-loop-and-affine-gcm-presentations-are-isomorphic
kind: theorem
title: Loop and affine GCM presentations are isomorphic
deps: ["lem-the-affine-simple-root-alpha-zero-is-delta-minus-the-highest-root", "def-degree-derivation-and-full-untwisted-affine-algebra", "thm-serre-presentation-of-a-kac-moody-algebra", "def-kac-moody-algebra-associated-to-a-gcm", "lem-finite-semisimple-cartan-root-and-string-structure"]
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - title: Kleshchev, Lectures on Infinite Dimensional Lie Algebras, Theorem 7.2.1
      url: https://darkwing.uoregon.edu/~klesh/teaching/IDLALN3.pdf
    - title: Perrin, Introduction to Kac-Moody Groups and Lie Algebras, Theorem 12.2.15
      url: https://lmv.math.cnrs.fr/wp-content/uploads/2019/09/km-suite.pdf
status: draft
origin: pipeline
proof_strategy: direct
---

## Statement

Let $\widehat A$ be the untwisted affine GCM of a finite-dimensional complex simple $\mathfrak g$, with normalized form and realized Cartan $\widehat{\mathfrak h}$. The assignments
$$e_0\longmapsto f_\theta\otimes t,\qquad f_0\longmapsto e_\theta\otimes t^{-1},\qquad h_0\longmapsto c-\theta^\vee,$$
and the degree-zero assignments for the finite simple triples, together with the identity on $\widehat{\mathfrak h}$, extend uniquely to an isomorphism $\mathfrak g(\widehat A)\cong\widehat{\mathfrak g}$.

## Facts & Assumptions

**Given:** The normalized finite simple algebra and the displayed assignments.

[F1] The highest-root data and affine matrix realization are [[lem-the-affine-simple-root-alpha-zero-is-delta-minus-the-highest-root]].

[F2] The full affine bracket is [[def-degree-derivation-and-full-untwisted-affine-algebra]].

[F3] For symmetrizable GCMs the Cartan and Serre relations present the algebra by [[thm-serre-presentation-of-a-kac-moody-algebra]].

[F4] Every nonzero ideal meets the Cartan in [[def-kac-moody-algebra-associated-to-a-gcm]].

[F5] Finite simple generation and all root strings, including normalized rank-one triples, are [[lem-finite-semisimple-cartan-root-and-string-structure]].

## Proof

1.1 F1 gives $[e_0,f_0]=h_0$ in the target. F2 gives the Cartan action with weights $\alpha_0=\delta-\theta$ and $-\alpha_0$, as well as commutativity of the Cartan. The finite simple brackets hold by F5. For $i>0$, $[e_0,f_i]$ lies at finite weight $-\theta-\alpha_i$ and $[e_i,f_0]$ at $\theta+\alpha_i$, both absent by highest-root maximality. Their mode degrees are nonzero, so no central term occurs. Thus every mixed relation $[e_i,f_j]=\delta_{ij}h_i$ holds. [F1, F2, F5, algebra]

1.2 The finite positive Serre relations follow from finite root strings. For $i>0$, $f_\theta$ is a lowest vector for the $i$th finite triple, of weight $-\theta(h_i)=\widehat a_{i0}$, because $-\theta-\alpha_i$ is absent. Its raising string is killed after $1-\widehat a_{i0}$ applications of $\operatorname{ad}e_i$. Conversely $e_i$ is a highest vector for the $\theta$ triple, of weight $\alpha_i(\theta^\vee)=-\widehat a_{0i}$, since $\theta+\alpha_i$ is absent. Its lowering string is killed after $1-\widehat a_{0i}$ applications of $\operatorname{ad}f_\theta$. If $\theta=\alpha_i$, this is the adjoint rank-one string $e_\theta,h_\theta,f_\theta,0$ of length three. In the loop brackets the relevant positive mode degrees never produce a central term, so these are exactly the two Serre relations involving index zero. Interchanging raising and lowering and replacing every mode degree by its negative proves the negative Serre family by the same strings. [F1, F2, F5, algebra]

2.1 The matrix is symmetrizable by F1. Steps 1.1–1.2 and F3 therefore give a unique homomorphism $\varphi:\mathfrak g(\widehat A)\to\widehat{\mathfrak g}$ with the specified images. It fixes the embedded Cartan, so its kernel meets that Cartan trivially. F4 forces the kernel to be zero. [F1, F3, F4, step 1.1, step 1.2, algebra]

3.1 Its image contains $\mathfrak g\otimes1$ by F5. The set $J_+=\{x\in\mathfrak g:x\otimes t\in\operatorname{im}\varphi\}$ is an ideal in $\mathfrak g$, since $[y\otimes1,x\otimes t]=[y,x]\otimes t$. It contains the nonzero $f_\theta$, hence is all of $\mathfrak g$ by simplicity. Likewise $J_-=\{x:x\otimes t^{-1}\in\operatorname{im}\varphi\}$ contains $e_\theta$ and is all of $\mathfrak g$. [F2, F5, step 2.1, given, algebra]

4.1 Nonabelian simplicity gives $[\mathfrak g,\mathfrak g]=\mathfrak g$, because the derived algebra is a nonzero ideal. If all positive modes of degree $k-1$ lie in the image, then $[x\otimes t,y\otimes t^{k-1}]=[x,y]\otimes t^k$ for $k\ge2$; finite sums of these brackets span the degree-$k$ mode. Induction from step 3.1 gives all positive modes. Bracketing degree $-1$ with degree $-(k-1)$ gives all negative modes in the same way. The image already contains $c,d$ through the Cartan. Hence it is the full affine algebra. Combined with step 2.1 this proves the isomorphism. All sums, string calculations and selections at a fixed mode are finite, with no AC. [F2, step 2.1, step 3.1, algebra] ∎
