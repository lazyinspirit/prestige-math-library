---
id: cor-the-derived-algebra-of-a-finite-dimensional-solvable-lie-algebra-is-nilpotent-in-characteristic-zero
kind: corollary
title: The derived algebra of a solvable Lie algebra is nilpotent in characteristic zero
status: published
origin: pipeline
pipeline_run: phase-2-next-18
deps: [thm-derived-algebra-of-a-solvable-linear-lie-algebra-is-nilpotent, prop-a-central-extension-of-a-nilpotent-lie-algebra-is-nilpotent, prop-derivations-form-a-lie-algebra-and-inner-derivations-form-an-ideal, prop-kernels-images-and-first-isomorphism-theorem-for-lie-algebras, def-restriction-and-extension-of-scalars]
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: 2026-09-14
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-14
sources:
  references:
    - title: "Knapp, Lie Groups Beyond an Introduction, Proposition 1.39"
      url: https://www.math.stonybrook.edu/~aknapp/download/Beyond2-clickable.pdf
      locator: "Proposition 1.39 and proof, printed pp. 32–33"
---

## Statement

For every characteristic-zero field $k$, the derived algebra
$[\mathfrak g,\mathfrak g]$ of a finite-dimensional solvable $k$-Lie algebra
$\mathfrak g$ is nilpotent.

## Facts & Assumptions

**Given:** A characteristic-zero field $k$ and a finite-dimensional solvable $k$-Lie algebra $\mathfrak g$.

[L1] Over an algebraically closed characteristic-zero field, the derived algebra of a finite-dimensional solvable linear Lie algebra is nilpotent ([[thm-derived-algebra-of-a-solvable-linear-lie-algebra-is-nilpotent]]).

[L2] A central extension of a nilpotent Lie algebra is nilpotent ([[prop-a-central-extension-of-a-nilpotent-lie-algebra-is-nilpotent]]).

[L3] The adjoint map is a Lie homomorphism with kernel the center ([[prop-derivations-form-a-lie-algebra-and-inner-derivations-form-an-ideal]]).

[L4] A Lie homomorphism induces an isomorphism from the quotient by its kernel to its image ([[prop-kernels-images-and-first-isomorphism-theorem-for-lie-algebras]]).

[L5] Extension of scalars from $F$ to a field extension $K$ is $K\otimes_F-$ ([[def-restriction-and-extension-of-scalars]]).

## Proof

**Proof technique:** direct.

1.1 Choose one finite basis $e_1,\ldots,e_n$ of $\mathfrak g$ and let $k_0\subseteq k$ be the subfield generated over $\mathbb Q$ by the finitely many structure constants in $[e_i,e_j]=\sum_s c_{ij}^s e_s$. The same table defines a $k_0$-Lie algebra $\mathfrak g_0$ with $k\otimes_{k_0}\mathfrak g_0\cong\mathfrak g$ as in [L5]. Direct expansion of pure tensors and induction give $(K\otimes_F\mathfrak a)^{(r)}=K\otimes_F\mathfrak a^{(r)}$ and $\gamma_r(K\otimes_F\mathfrak a)=K\otimes_F\gamma_r(\mathfrak a)$ for every field extension $K/F$. Scalar extension is faithful on a finite-dimensional vector space because a basis remains a basis. Hence solvability of $\mathfrak g$ implies solvability of $\mathfrak g_0$. [given, L5, algebra]

2.1 The finitely generated field $k_0/\mathbb Q$ is countable with an explicit enumeration by rational expressions. In ZF, build an algebraic closure $K$ by a deterministic countable tower: dovetail all polynomials over earlier stages, choose the first coded monic irreducible factor, adjoin one root, and take the union. Every polynomial over the union occurs at a finite stage and later gains a root, so the union is algebraically closed. Put $\mathfrak G=K\otimes_{k_0}\mathfrak g_0$; step 1.1 makes $\mathfrak G$ finite-dimensional and solvable. No choice function is used in this fixed enumeration. [L5, step 1.1, algebra]

3.1 The homomorphic image $\operatorname{ad}(\mathfrak G)$ is solvable because its derived terms are images of those of $\mathfrak G$. It is a linear Lie algebra on $\mathfrak G$, so [L1] says its derived algebra $[\operatorname{ad}(\mathfrak G),\operatorname{ad}(\mathfrak G)]=\operatorname{ad}(\mathfrak G')$ is nilpotent. [L1, L3, step 2.1, algebra]

4.1 Restrict $\operatorname{ad}$ to $\mathfrak G'$. By [L3] its kernel is $\mathfrak G'\cap Z(\mathfrak G)$, which is central in $\mathfrak G'$, and by [L4] the quotient by this kernel is isomorphic to the nilpotent image $\operatorname{ad}(\mathfrak G')$ from step 3.1. The central-extension result [L2] therefore makes $\mathfrak G'$ nilpotent. [L2, L3, L4, step 3.1]

5.1 If $\gamma_{c+1}(\mathfrak G')=0$, the scalar-extension identities of step 1.1 give $0=K\otimes_{k_0}\gamma_{c+1}(\mathfrak g_0')$, so faithfulness gives $\gamma_{c+1}(\mathfrak g_0')=0$. Extending from $k_0$ to $k$ then gives $\mathfrak g'=k\otimes_{k_0}\mathfrak g_0'$ and $\gamma_{c+1}(\mathfrak g')=0$. Thus $\mathfrak g'$ is nilpotent. Characteristic zero enters through $\mathbb Q\subseteq k$ and [L1]; the algebraic closure used in step 2.1 was constructed without AC. [L5, step 1.1, step 2.1, step 4.1] ∎
