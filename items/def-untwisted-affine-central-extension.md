---
id: def-untwisted-affine-central-extension
kind: definition
title: Untwisted affine central extension
deps: ["def-loop-algebra-of-a-simple-lie-algebra", "def-residue-two-cocycle-on-a-loop-algebra", "lem-the-loop-residue-form-is-alternating", "lem-the-loop-residue-form-satisfies-the-lie-two-cocycle-identity"]
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  audited: 2026-09-13
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - title: Kleshchev, Lectures on Infinite Dimensional Lie Algebras, Section 7.1
      url: https://darkwing.uoregon.edu/~klesh/teaching/IDLALN3.pdf
    - title: Perrin, Introduction to Kac-Moody Groups and Lie Algebras, Definition 12.2.3
        and Corollary 12.2.6
      url: https://lmv.math.cnrs.fr/wp-content/uploads/2019/09/km-suite.pdf
status: published
origin: pipeline
---

## Definition

The **untwisted central extension** is the vector space $\overline{L\mathfrak g}=L\mathfrak g\oplus\mathbb Cc$, with $c$ a new nonzero basis vector, and bracket
$$[u+ac,v+bc]=[u,v]_{L\mathfrak g}+\omega(u,v)c.$$
Here $L\mathfrak g$ is [[def-loop-algebra-of-a-simple-lie-algebra]], while $B$ and $\omega$ are exactly the normalized invariant form and residue cocycle of [[def-residue-two-cocycle-on-a-loop-algebra]]. Their alternatingness and cocycle identity are proved in [[lem-the-loop-residue-form-is-alternating]] and [[lem-the-loop-residue-form-satisfies-the-lie-two-cocycle-identity]]. Thus $c$ is central, and for $x_m=x\otimes t^m$,
$$[x_m,y_n]=[x,y]_{m+n}+m\delta_{m,-n}B(x,y)c.$$
The bracket is bilinear and alternating by the first cited lemma. Its Jacobi sum has loop component zero by loop Jacobi and central component $\omega([u,v],w)+\omega([v,w],u)+\omega([w,u],v)=0$ by the second lemma. Central inputs give zero directly. Hence this defines a Lie algebra. The projection to $L\mathfrak g$ is a surjective Lie homomorphism with kernel $\mathbb Cc$. The vector-space inclusion of the loop algebra need not preserve its bracket. No universal property of this extension is asserted.
