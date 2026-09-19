---
id: fs-every-element-of-a-complex-semisimple-lie-algebra-is-semisimple
kind: false-statement
title: Every element of a complex semisimple Lie algebra is semisimple
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-special-linear-lie-algebra-sl-two, def-semisimple-and-nilpotent-endomorphisms, def-regular-element-and-rank-of-a-complex-lie-algebra, ex-killing-form-of-sl-two, thm-cartans-semisimplicity-criterion]
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Anthony W. Knapp, Lie Groups Beyond an Introduction, 2nd ed., Chapter II"
      url: "https://www.math.stonybrook.edu/~aknapp/download/Beyond2-clickable.pdf"
      locator: "Chapter II, §4 (root vectors are nilpotent)"
landmark: false
proof_strategy: direct
---

## Statement

Every element of a complex semisimple Lie algebra is semisimple.

## Facts & Assumptions

**Given:** An element $x$ of a Lie algebra is called semisimple when its adjoint operator $\operatorname{ad}_x$ is a semisimple endomorphism as defined in [[def-semisimple-and-nilpotent-endomorphisms]]; the same convention underlies [[def-regular-element-and-rank-of-a-complex-lie-algebra]]. In $\mathfrak{sl}_2(\mathbb C)=\mathbb Ch\oplus\mathbb Ce\oplus\mathbb Cf$ of [[def-special-linear-lie-algebra-sl-two]] the brackets are $[h,e]=2e$, $[h,f]=-2f$, $[e,f]=h$.

[L1] The Killing form of $\mathfrak{sl}_2(\mathbb C)$ is nondegenerate, and a finite-dimensional characteristic-zero Lie algebra is semisimple exactly when its Killing form is nondegenerate ([[ex-killing-form-of-sl-two]], [[thm-cartans-semisimplicity-criterion]]).

## Refutation

**Proof technique:** explicit witness.

1.1 The element $e=\begin{pmatrix}0&1\\0&0\end{pmatrix}$ is nonzero, and [L1] shows that $\mathfrak{sl}_2(\mathbb C)$ is a complex semisimple Lie algebra. [given, L1]

1.2 Its adjoint operator is nilpotent and nonzero: on the basis $(h,e,f)$ one has $\operatorname{ad}_e(h)=-2e$, $\operatorname{ad}_e(e)=0$ and $\operatorname{ad}_e(f)=h$, so $\operatorname{ad}_e^3=0$ while $\operatorname{ad}_e\ne0$. [given, algebra]

2.1 A nonzero nilpotent endomorphism is not semisimple: over $\mathbb C$ its only eigenvalue is $0$, so if it were diagonalisable it would be the zero operator; hence $\operatorname{ad}_e$ is not semisimple and the element $e$ is not semisimple. This refutes the statement that every element is semisimple. [given, step 1.1, step 1.2, algebra] ∎
