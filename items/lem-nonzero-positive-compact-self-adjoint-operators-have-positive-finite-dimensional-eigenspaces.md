---
id: "lem-nonzero-positive-compact-self-adjoint-operators-have-positive-finite-dimensional-eigenspaces"
kind: "lemma"
title: "The positive norm eigenvalue of a nonzero positive compact self-adjoint operator has a nonzero finite-dimensional eigenspace"
deps: ["def-l-two-operator-conventions-for-weak-mixing", "lem-closed-l-two-subspaces-have-orthogonal-projections", "thm-complex-l-two-inner-product-is-well-defined-and-cauchy-schwarz", "def-axiom-of-choice"]
sources:
  references:
    - title: Axler 10.96–10.99 p.326, with local positive quadratic argument replacing Fredholm theory
      url: https://measure.axler.net/MIRA.pdf
provenance:
  statement: ai-altered
  proof: ai-altered
status: "draft"
origin: "pipeline"
proof_strategy: "direct"
---

## Statement

Assume AC. Let $H$ be a nonzero closed complex $L^2$ subspace and $S:H\to H$ a nonzero bounded positive self-adjoint compact operator. Then $\alpha=\|S\|>0$ is an eigenvalue, and $\ker(S-\alpha I)$ is nonzero, closed and finite-dimensional.

## Facts & Assumptions

[F1] Operator norms, positivity, self-adjointness and sequential compactness have the local conventions [[def-l-two-operator-conventions-for-weak-mixing]].

[F3] The complex pairing is positive definite and satisfies Cauchy–Schwarz [[thm-complex-l-two-inner-product-is-well-defined-and-cauchy-schwarz]].

[F4] Assume AC [[def-axiom-of-choice]].

## Proof

**Given:** $H,S$ as stated and AC.

1.1 Write $B(x,y)=\langle Sx,y\rangle$ and $q(x)=B(x,x)$. Self-adjointness makes $B$ Hermitian and positivity gives $q\ge0$. For $q(y)>0$, expand $q(x-ty)$ with $t=B(x,y)/q(y)$ to obtain $0\le q(x)-|B(x,y)|^2/q(y)$. If $q(y)=0$ and $B(x,y)\ne0$, taking $t=R B(x,y)$ with arbitrarily large positive real $R$ makes $q(x-ty)=q(x)-2R|B(x,y)|^2<0$, a contradiction. Thus in all cases $|B(x,y)|^2\le q(x)q(y)$. [F1, F3]

2.1 Put $a=\sup_{\|x\|=1}q(x)$. This is finite and nonnegative, since $q(x)\le\|S\|$ on the nonempty unit sphere. For any $z$, the norm formula $\|z\|=\sup_{\|y\|=1}|\langle z,y\rangle|$ follows from Cauchy–Schwarz and testing $y=z/\|z\|$ when $z\ne0$; when $z=0$ both sides vanish. Step 1.1 consequently gives $\|Sx\|^2\le a q(x)$ for all $x$. On unit vectors this is at most $a^2$, hence $\|S\|\le a$. The reverse inequality follows from the definition of $a$, so $a=\|S\|=\alpha$. If $a=0$, the displayed bound would force $S=0$, contrary to the hypothesis; thus $\alpha>0$. [F1, F3, step 1.1]

3.1 By AC choose unit vectors $x_n$ for every $n\in\mathbb N$ with $q(x_n)>\alpha-1/(n+1)$. Expansion, step 2.1, and self-adjointness yield $\|Sx_n-\alpha x_n\|^2=\|Sx_n\|^2-2\alpha q(x_n)+\alpha^2\le\alpha(\alpha-q(x_n))<\alpha/(n+1)$. Compactness gives a subsequence $Sx_{n_j}\to y\in H$. Thus $x_{n_j}\to x=y/\alpha$, and $\|x\|=1$. Boundedness gives $Sx_{n_j}\to Sx$, while $Sx_{n_j}-\alpha x_{n_j}\to0$; uniqueness of limits gives $Sx=\alpha x$. [F1, F3, F4, step 2.1]

4.1 Let $E=\ker(S-\alpha I)$. It is a linear subspace and is closed by continuity of $S-\alpha I$. It contains the unit vector from step 3.1. Suppose it has no finite spanning set. A choice function on the nonempty subsets of $E$ permits the following recursive selection: choose its value on the complement of the span of the finitely many previously obtained orthonormal vectors, subtract its projections onto them and normalize. The residual is nonzero because the chosen vector is not in that span. Pairing expansion shows that the resulting sequence $(e_n)$ is orthonormal and lies in $E$. Then for $n\ne m$, $\|Se_n-Se_m\|=\alpha\|e_n-e_m\|=\alpha\sqrt2$. No subsequence of these images is Cauchy, contradicting compactness. Therefore $E$ has a finite spanning set and is finite-dimensional. The only infinite selections were the maximizing sequence and this hypothetical orthonormal recursion, both under AC. [F1, F3, F4, step 3.1] ∎
