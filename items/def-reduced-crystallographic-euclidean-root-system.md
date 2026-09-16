---
id: def-reduced-crystallographic-euclidean-root-system
kind: definition
title: Reduced crystallographic Euclidean root system
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-inner-product-space]
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Anthony W. Knapp, Lie Groups Beyond an Introduction, 2nd ed., Chapter II"
      url: "https://www.math.stonybrook.edu/~aknapp/download/Beyond2-clickable.pdf"
      locator: "Chapter II, §5, definition of an abstract root system, printed p. 149"
landmark: false
---

## Definition

Let $E$ be a finite-dimensional real inner product space with inner product
$(\,\cdot\,,\,\cdot\,)$ ([[def-inner-product-space]]), and let
$\Phi\subseteq E\setminus\{0\}$ be a finite subset which spans $E$ over
$\mathbb R$. For $\alpha\in\Phi$ define
$$s_\alpha:E\longrightarrow E,\qquad s_\alpha(x)=x-\frac{2(x,\alpha)}{(\alpha,\alpha)}\,\alpha .$$
Since $(\alpha,\alpha)>0$ for $\alpha\ne0$, the scalar $2(x,\alpha)/(\alpha,\alpha)$
is well defined, and substitution gives
$$s_\alpha(\alpha)=-\alpha,\qquad s_\alpha(x)=x\quad\text{whenever }(x,\alpha)=0 .$$
A **reduced crystallographic root system** in $E$ (equivalently, a reduced
abstract root system) is such a pair $(E,\Phi)$ satisfying:

1. $s_\alpha(\Phi)=\Phi$ for every $\alpha\in\Phi$;
2. $\dfrac{2(\beta,\alpha)}{(\alpha,\alpha)}\in\mathbb Z$ for all
   $\alpha,\beta\in\Phi$ (the **crystallographic**, or integrality, condition);
3. $\mathbb R\alpha\cap\Phi=\{\alpha,-\alpha\}$ for every $\alpha\in\Phi$
   (the **reducedness** condition).

The elements of $\Phi$ are its **roots**, and $s_\alpha$ is the **reflection**
in the hyperplane orthogonal to $\alpha$: it fixes $\alpha^\perp$ pointwise
and negates $\alpha$.

Every root $\alpha$ satisfies $-\alpha\in\Phi$: taking $\beta=\alpha$ in
condition 2 gives $2\in\mathbb Z$, and condition 1 gives
$s_\alpha(\alpha)=-\alpha\in\Phi$. The integer
$2(\beta,\alpha)/(\alpha,\alpha)$ is the **Cartan integer** attached to the
ordered pair $(\beta,\alpha)$; condition 2 is the crystallographic axiom of
[[def-reduced-crystallographic-euclidean-root-system]].
