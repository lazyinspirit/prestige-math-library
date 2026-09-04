---
id: thm-morse-lemma
kind: theorem
title: "Morse lemma"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [def-nondegenerate-critical-point-nullity-index-and-coindex, lem-one-variable-completion-of-the-square-with-a-smooth-parameter, lem-morse-splitting-induction-preserves-the-residual-hessian, lem-sylvester-inertia-makes-morse-index-intrinsic, thm-sylvesters-law-of-inertia]
justified_by: []
aliases: []
landmark: true
proof_strategy: dimension induction
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-04
sources:
  scraped: []
  references:
    - title: "Liviu I. Nicolaescu, An Invitation to Morse Theory, 2nd ed."
      url: "https://www3.nd.edu/~lnicolae/Morse2nd.pdf"
    - title: "Michele Audin and Mihai Damian, Morse Theory and Floer Homology"
      url: "https://audin.pages.math.unistra.fr/livres/audin-damian-en.pdf"
---

## Statement

Let $f:M\to\mathbb R$ be smooth, let $p$ be a nondegenerate critical point of
$f$, and let $\lambda$ be the index of $p$. If $n=\dim M$, then there are local
coordinates $(x^1,\dots,x^n)$ centered at $p$ in which

$$f=f(p)-\sum_{i=1}^{\lambda}(x^i)^2+\sum_{i=\lambda+1}^{n}(x^i)^2.$$

For $n=0$, both sums are empty.

## Facts & Assumptions

**Given:** A smooth function $f:M\to\mathbb R$, a nondegenerate critical point $p$, and its index $\lambda$.

[F1] Index and nondegeneracy are defined from the critical Hessian ([[def-nondegenerate-critical-point-nullity-index-and-coindex]]).

[L1] Sylvester's law gives a linear coordinate change that puts any symmetric Hessian matrix into diagonal normal form with its positive, negative, and zero counts recorded on the diagonal ([[thm-sylvesters-law-of-inertia]]).

[L2] The chartwise inertia counts of the Hessian equal the intrinsic index, coindex, and nullity ([[lem-sylvester-inertia-makes-morse-index-intrinsic]]).

[L3] A nonzero second derivative in one chosen coordinate splits off a signed square after a local coordinate change ([[lem-one-variable-completion-of-the-square-with-a-smooth-parameter]]).

[L4] After splitting one signed square, the remaining Hessian is the restricted residual Hessian ([[lem-morse-splitting-induction-preserves-the-residual-hessian]]).

## Proof

**Proof technique:** dimension induction.

1.1 If $n=0$, the manifold is locally a point, so $f$ is locally constant at $p$. The Hessian acts on the zero vector space, hence $\lambda=0$ by [F1], and the displayed formula is exactly $f=f(p)$ with both sums empty. [F1, given, base]

1.2 Assume the theorem proved in dimensions $<n$, where $n>0$. Choose local coordinates $u=(u^1,\dots,u^n)$ centered at $p$ and write $g:=f\circ u^{-1}-f(p)$. By [L1], after a linear change of the $u$-coordinates the Hessian matrix of $g$ at $0$ is diagonal with entries in $\{1,-1,0\}$. Since $p$ is nondegenerate and has index $\lambda$, [F1] and [L2] force exactly $\lambda$ negative diagonal entries, exactly $n-\lambda$ positive diagonal entries, and no zero entry. Reorder the coordinates so the first diagonal entry is negative when $\lambda>0$ and positive when $\lambda=0$; in particular $\partial^2g/\partial (u^1)^2(0)\ne0$. [F1, L1, L2, given, assume-case[ positive-dimension], construct]

2.1 Apply [L3] to the first coordinate $u^1$, taking the remaining variables as parameters. After shrinking the chart there are new coordinates $(v^1,y)$ with $g(v^1,y)=\varepsilon (v^1)^2+H(y)$, where $\varepsilon\in\{\pm1\}$, $y\in\mathbb R^{n-1}$, and $0$ is a critical point of $H$. [L3, step 1.2, construct]

3.1 By [L2], the Hessian of $g$ in the $(v^1,y)$ chart still has index $\lambda$. By [L4], the Hessian of $H$ at $0$ is the restriction to the $y$-coordinates, and the split $v^1$-direction contributes one negative square exactly when $\varepsilon=-1$. Therefore $\operatorname{Hess}_0(H)$ is nondegenerate, with index $\lambda-1$ when $\varepsilon=-1$ and index $\lambda$ when $\varepsilon=1$. [L2, L4, step 2.1, algebra]

4.1 Apply the induction hypothesis to $H$ on $\mathbb R^{n-1}$. It yields local coordinates $(v^2,\dots,v^n)$ putting $H$ into its Morse normal form, and adjoining $v^1$ contributes one additional negative square exactly when $\varepsilon=-1$. Therefore the full expression for $g$ has exactly $\lambda$ negative squares and $n-\lambda$ positive squares. [ih, step 3.1, construct]

5.1 Combining steps 2.1 and 4.1 proves the displayed normal form for dimension $n$, and step 1.1 covers the base case. [step 1.1, step 2.1, step 4.1, discharge-induction] ∎
