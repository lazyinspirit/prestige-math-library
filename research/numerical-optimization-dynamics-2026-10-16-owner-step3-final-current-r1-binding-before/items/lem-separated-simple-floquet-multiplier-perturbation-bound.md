---
id: lem-separated-simple-floquet-multiplier-perturbation-bound
kind: lemma
title: "A separated simple Floquet multiplier has a left/right-conditioned finite enclosure"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 6
deps:
  - def-local-periodic-orbit-poincare-and-floquet-data
  - def-validated-periodic-shooting-jet-enclosure
  - thm-derivative-of-a-simple-eigenvalue-is-y-star-a-prime-x
  - prop-simple-eigenvalues-admit-left-right-normalization
  - def-compatible-left-and-right-eigenvectors-for-a-simple-eigenvalue
  - def-eigenvalue-eigenvector-eigenspace-and-spectrum
  - thm-jordan-form-exists-iff-the-characteristic-polynomial-splits
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  precheck: pass
sources:
  references:
    - title: "Y. A. Kuznetsov, Elements of Applied Bifurcation Theory, 2nd ed., Chapter 1, §1.5"
      url: "https://www.ma.imperial.ac.uk/~dturaev/kuznetsov.pdf"
      locator: "Complete 614-page second-edition PDF retrieved; inspected printed pp. 26–30 on transverse sections, return maps, variational equation, monodromy, and phase multiplier."
    - title: "S. M. Rump, Verification methods: Rigorous results using floating-point arithmetic, Acta Numerica 19 (2010)"
      url: "https://www.tuhh.de/ti3/rump/intlab/ActaNumerica2010.pdf"
      locator: "Full 163-page article retrieved; inspected §§10 and 13, including Theorems 13.1–13.3 and the strict-inclusion/Krawczyk proof in §13.3."
---

## Statement

Let $A\in\mathbb C^{n\times n}$ have an algebraically simple eigenvalue $\lambda_0$, with right vector $v$ normalized by $\|v\|_2=1$ and compatible left vector $w$ normalized by $w^*v=1$. Put $Q=I-vw^*$, $W=\ker w^*$, $q=\|Q\|_2$, and $\kappa=\|w\|_2$. The restriction $A_W=A|_W$ is well-defined. Let $D=\{\lambda:|\lambda-\lambda_0|\le\rho\}$ be a disk such that every $\lambda\in D$ makes $\lambda I_W-A_W$ invertible and
$$R\ge\sup_{\lambda\in D}\| (\lambda I_W-A_W)^{-1}\|_2<\infty.$$
If $n\ge2$, $\|E\|_2\le\delta$, and $Rq^2\delta<1$, then every eigenvalue $\lambda$ of $A+E$ in $D$ satisfies
$$
|\lambda-\lambda_0|\le \kappa\delta+\frac{\kappa qR\delta^2}{1-Rq^2\delta}.
$$
When $A$ is a monodromy matrix, this bounds the corresponding Floquet multiplier. The formula is a finite nonnormal perturbation enclosure; an unseparated cluster requires the contour-count route instead.

## Facts & Assumptions

**Given:** A simple eigenvalue, compatible normalized left/right vectors, an isolating disk for the complementary restriction, and a perturbation norm bound.

[F1] A simple eigenvalue admits compatible left and right eigenvectors whose pairing is nonzero and can be normalized to one ([[prop-simple-eigenvalues-admit-left-right-normalization]], [[def-compatible-left-and-right-eigenvectors-for-a-simple-eigenvalue]]).

[F2] The subspace $W=\ker w^*$ is invariant under $A$, and $A$ has no eigenvalue $\lambda_0$ on $W$ because the full eigenvalue is simple ([[def-eigenvalue-eigenvector-eigenspace-and-spectrum]], [[thm-jordan-form-exists-iff-the-characteristic-polynomial-splits]]).

[F3] Along $A+tE$, the derivative of the simple eigenvalue at $t=0$ is $w^*Ev$ ([[thm-derivative-of-a-simple-eigenvalue-is-y-star-a-prime-x]]).

[F5] The monodromy matrix and its eigenvalues are the Floquet data of the periodic orbit ([[def-local-periodic-orbit-poincare-and-floquet-data]]); a validated matrix enclosure is part of the shooting jet ([[def-validated-periodic-shooting-jet-enclosure]]).

## Proof
1.1 Since $w^*A=\lambda_0w^*$, $W$ is invariant; since $Av=\lambda_0v$ and $w^*v=1$, every vector splits uniquely as $\alpha v+y$ with $y\in W$. The restriction has no eigenvalue $\lambda_0$ by algebraic simplicity. Also $Q$ is the projection onto $W$. For $n\ge2$, its range is nonzero and $Q$ acts as the identity there, so $q\ge1$. [F1, F2, given, algebra]

2.1 Let $\lambda\in D$ be an eigenvalue of $A+E$ with eigenvector $x=\alpha v+y$, $y\in W$. If $\alpha=0$, projection onto $W$ gives $y=(\lambda I_W-A_W)^{-1}QE y$. Thus $\|y\|_2\le Rq\delta\|y\|_2$, while $Rq\delta\le Rq^2\delta<1$, forcing $y=0$, contrary to $x\ne0$. Hence $\alpha\ne0$; rescale the eigenvector so $\alpha=1$. [given, step 1.1, algebra]

3.1 Projecting $(A+E)(v+y)=\lambda(v+y)$ onto $W$ gives $y=(\lambda I_W-A_W)^{-1}QE(v+y)$. Therefore $\|y\|_2\le Rq\delta(1+\|y\|_2)$ and $\|y\|_2\le Rq\delta/(1-Rq\delta)$. [given, step 2.1, algebra]

4.1 Applying $w^*$ to the same eigen-equation gives $\lambda-\lambda_0=w^*Ev+w^*Ey$. The first term is the first-order eigenvalue derivative [F3]; its modulus is at most $\kappa\delta$, while the second is at most $\kappa\delta\|y\|_2$. Substituting step 3.1 gives the stronger denominator $1-Rq\delta$. Since $q\ge1$, $1-Rq^2\delta\le1-Rq\delta$ and both are positive, so replacing by the smaller denominator yields the stated bound. If $A$ is monodromy, [F5] identifies $\lambda$ as a Floquet multiplier. [F3, F5, step 1.1, step 3.1, algebra] ∎
