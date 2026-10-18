---
id: def-dual-coxeter-number-for-normalized-form
kind: definition
title: Dual Coxeter number for the normalized invariant form
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 1
deps:
  - def-casimir-operator-relative-to-an-invariant-form
  - def-residue-two-cocycle-on-a-loop-algebra
  - def-loop-algebra-of-a-simple-lie-algebra
  - def-killing-form-of-a-finite-dimensional-lie-algebra
  - def-trace-of-an-endomorphism
  - def-trace-of-a-square-matrix
  - def-compact-real-form-of-a-complex-semisimple-lie-algebra
  - cor-finite-dimensional-inner-product-spaces-have-orthonormal-bases
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: David Ben-Zvi and Edward Frenkel, Geometric Realization of the Segal–Sugawara Construction, §2.1
      url: https://math.mit.edu/juvitop/pastseminars/notes_2019_Fall/BenZviFrenkel.pdf
    - title: Antony Wassermann, Kac–Moody and Virasoro Algebras, Chapter I §13
      url: https://arxiv.org/pdf/1004.1287
---

## Definition

For a finite-dimensional complex simple Lie algebra $\mathfrak g$ as in [[def-loop-algebra-of-a-simple-lie-algebra]], use the invariant form $B$ normalized by long roots of square $2$ in [[def-residue-two-cocycle-on-a-loop-algebra]]. The local trace calculation below shows that the Casimir $\Omega_B$ from [[def-casimir-operator-relative-to-an-invariant-form]] acts in the adjoint representation as $\gamma_B I$ for a unique positive real scalar $\gamma_B$. Define the **dual Coxeter number** by $h^\vee=\gamma_B/2$. If a compact real form $\mathfrak k$ from [[def-compact-real-form-of-a-complex-semisimple-lie-algebra]] is additionally supplied, then for every $Q=-B|_{\mathfrak k}$-orthonormal basis $(X_i)$ one has $-\sum_i\operatorname{ad}(X_i)^2=2h^\vee I$. This is the normalization used in the affine central term and every Sugawara denominator below; existence of a compact real form is not needed to define $h^\vee$.

## Facts & Assumptions

**Given:** A nonzero finite-dimensional complex simple Lie algebra $\mathfrak g$ and its normalized invariant form $B$. A compact real form is extra input only for step 3.1.

[F1] The normalization is $B=cK_{\mathfrak g}$ for a positive real scalar $c$; $B$ is nondegenerate, symmetric and invariant ([[def-residue-two-cocycle-on-a-loop-algebra]]). The Lie algebra is nonzero ([[def-loop-algebra-of-a-simple-lie-algebra]]).

[F2] For $B$-dual bases $x_i,x^i$, the adjoint Casimir operator is $C=\sum_i\operatorname{ad}(x_i)\operatorname{ad}(x^i)$ ([[def-casimir-operator-relative-to-an-invariant-form]]).

[F3] The Killing form is $K_{\mathfrak g}(x,y)=\operatorname{tr}_{\mathfrak g}(\operatorname{ad}(x)\operatorname{ad}(y))$ ([[def-killing-form-of-a-finite-dimensional-lie-algebra]]). The endomorphism trace is the sum of the diagonal entries in any finite basis ([[def-trace-of-an-endomorphism]], [[def-trace-of-a-square-matrix]]).

[F4] A supplied compact real form has negative-definite restricted Killing form ([[def-compact-real-form-of-a-complex-semisimple-lie-algebra]]). A finite-dimensional positive-definite real inner-product space has an orthonormal basis by finite Gram–Schmidt ([[cor-finite-dimensional-inner-product-spaces-have-orthonormal-bases]]).

## Proof

**Given:** The Lie algebra and normalized form above; write $N=\dim_{\mathbb C}\mathfrak g>0$.

1.1 Fix one finite basis $x_1,\ldots,x_N$ and its $B$-dual basis $x^1,\ldots,x^N$, so $B(x_i,x^j)=\delta_i^j$. If $T x_i=\sum_j t_{ji}x_j$, then $B(Tx_i,x^i)=t_{ii}$ by duality. Therefore [F3] gives $\operatorname{tr}(T)=\sum_iB(Tx_i,x^i)$. All choices here are finite and $B$ is nondegenerate by [F1]. [F1, F3, choose, algebra]

1.2 For arbitrary $x,y\in\mathfrak g$, [F2], symmetry and invariance give
$$B(Cx,y)=\sum_iB([x_i,[x^i,x]],y)=\sum_iB([x^i,x],[y,x_i])=\sum_iB([x,[y,x_i]],x^i).$$
Indeed the first conversion uses $B([a,b],c)=B(b,[c,a])$ with $a=x_i$, and the second uses the same identity with $a=x$, followed by symmetry. Step 1.1 identifies the final sum with $\operatorname{tr}(\operatorname{ad}(x)\operatorname{ad}(y))=K_{\mathfrak g}(x,y)$. Thus $B(Cx,y)=K_{\mathfrak g}(x,y)$, with no compact real form or spectral assertion. [F1, F2, F3, step 1.1, algebra]

2.1 By [F1], $K_{\mathfrak g}(x,y)=c^{-1}B(x,y)$. Step 1.2 implies $B(Cx-c^{-1}x,y)=0$ for every $y$, so nondegeneracy yields $Cx=c^{-1}x$ for every $x$. Hence $C=\gamma_B I$ with $\gamma_B=c^{-1}>0$. The scalar is unique because $\mathfrak g\ne0$. Its half $h^\vee=\gamma_B/2$ is therefore well defined and positive without a compact-form existence theorem or a choice axiom. [F1, step 1.2, algebra]

3.1 If a compact real form $\mathfrak k$ is supplied, [F1] and [F4] make $Q=-B|_{\mathfrak k}$ positive definite. Take a finite $Q$-orthonormal real basis $(X_i)$ by [F4]; it is also a complex basis of $\mathfrak g$ because $\mathfrak k$ is a real form. Its $B$-dual basis is $(-X_i)$, since $B(X_i,-X_j)=\delta_{ij}$. Thus [F2] gives $C=-\sum_i\operatorname{ad}(X_i)^2$, and step 2.1 identifies this with $2h^\vee I$. This proves the conditional compact-basis formula without constructing a compact real form or inferring its existence from its definition. [F1, F2, F4, step 2.1, choose, algebra] ∎
