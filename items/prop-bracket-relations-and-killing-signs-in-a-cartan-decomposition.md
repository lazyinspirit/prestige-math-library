---
id: prop-bracket-relations-and-killing-signs-in-a-cartan-decomposition
kind: proposition
title: Bracket relations and Killing signs in a Cartan decomposition
status: published
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-cartan-decomposition-of-a-real-semisimple-lie-algebra, def-cartan-involution-of-a-real-semisimple-lie-algebra, def-killing-form-of-a-finite-dimensional-lie-algebra, thm-cartans-semisimplicity-criterion]
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Anthony W. Knapp, Lie Groups Beyond an Introduction, 2nd ed., Chapter VI"
      url: "https://www.math.stonybrook.edu/~aknapp/download/Beyond2-clickable.pdf"
      locator: "Chapter VI, §2, Proposition 6.12 and its proof, printed pp. 359-360"
landmark: false
proof_strategy: direct
verification:
  audited: 2026-09-22
---

## Statement

Let $\mathfrak g_0=\mathfrak k_0\oplus\mathfrak p_0$ be the Cartan decomposition
of a finite-dimensional real semisimple Lie algebra $\mathfrak g_0$ attached to a
Cartan involution $\theta$, with Killing form $B$
([[def-cartan-decomposition-of-a-real-semisimple-lie-algebra]]). Then

$$[\mathfrak k_0,\mathfrak k_0]\subseteq\mathfrak k_0,\qquad [\mathfrak k_0,\mathfrak p_0]\subseteq\mathfrak p_0,\qquad [\mathfrak p_0,\mathfrak p_0]\subseteq\mathfrak k_0,$$

$\mathfrak k_0$ is a subalgebra, and $B$ is negative definite on
$\mathfrak k_0$ and positive definite on $\mathfrak p_0$; moreover
$\mathfrak k_0$ and $\mathfrak p_0$ are orthogonal for $B$, and the restriction
of $\theta$ to $\mathfrak k_0$ is the identity while $\mathfrak p_0$ is the
$-1$-eigenspace.

## Facts & Assumptions

**Given:** A real semisimple Lie algebra $\mathfrak g_0$ with Cartan involution $\theta$, Cartan decomposition $\mathfrak g_0=\mathfrak k_0\oplus\mathfrak p_0$, and Killing form $B$.

[L1] $\theta$ is an involutive Lie-algebra automorphism and $B_\theta(X,Y)=-B(X,\theta Y)$ is positive definite ([[def-cartan-involution-of-a-real-semisimple-lie-algebra]], [[def-cartan-decomposition-of-a-real-semisimple-lie-algebra]]).

[L2] The Killing form is symmetric and invariant: $B([X,Y],Z)=B(X,[Y,Z])$, and $B$ is nondegenerate on $\mathfrak g_0$ ([[def-killing-form-of-a-finite-dimensional-lie-algebra]], [[thm-cartans-semisimplicity-criterion]]).



**Proof technique:** direct.

1.1 Let $X,Y$ be eigenvectors of $\theta$ with eigenvalues $\varepsilon,\delta\in\{1,-1\}$. Since $\theta$ is an automorphism, $\theta[X,Y]=[\theta X,\theta Y]=\varepsilon\delta[X,Y]$, so $[X,Y]$ lies in the $\varepsilon\delta$-eigenspace. This gives the three bracket relations at once. [L1, algebra]

2.1 For $X\in\mathfrak k_0$ and $Y\in\mathfrak p_0$, invariance and the eigenvalue relation give $B(X,Y)=B(\theta X,\theta Y)=B(X,-Y)=-B(X,Y)$, hence $2B(X,Y)=0$ and $B(X,Y)=0$: the two summands are orthogonal. [L1, L2, step 1.1, algebra]

3.1 For $X\in\mathfrak k_0$ we have $B(X,X)=-B(X,\theta X)=-B_\theta(X,X)\le0$, with equality only for $X=0$; hence $B$ is negative definite on $\mathfrak k_0$. For $Y\in\mathfrak p_0$ we have $B(Y,Y)=B(Y,-\theta Y)=-B_\theta(Y,-Y)=B_\theta(Y,Y)\ge0$ with equality only for $Y=0$; hence $B$ is positive definite on $\mathfrak p_0$. [L1, step 1.1, step 2.1, algebra]

4.1 By step 1.1, $\mathfrak k_0$ is closed under brackets and is therefore a Lie subalgebra; the restriction of $\theta$ to $\mathfrak k_0$ is the identity and to $\mathfrak p_0$ is minus the identity by definition of the eigenspaces. Together with steps 2.1 and 3.1 this proves all the assertions. [L1, step 1.1, step 2.1, step 3.1, algebra] ∎
