---
id: "def-relative-cap-product"
kind: "definition"
title: "Relative cap products with quotient domains displayed"
status: "draft"
origin: "pipeline"
pipeline_run: "phase-2-next-17"
deps: ["def-relative-cup-product","thm-cap-product-boundary-identity","def-relative-singular-homology"]
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - title: Hatcher relative cap products pp.239--241; Miller Lecture 34
      url: https://pi.math.cornell.edu/~hatcher/AT/ATch3.pdf
provenance:
  statement: literature-derived
  proof: not-applicable
---

## Definition

Let $A,B\subseteq X$, $R$ be a commutative unital ring, and put $N=C_*(A;R)+C_*(B;R)$. The cohomology-first cap formula induces
$$C^p(X,A;R)\otimes_R(C_n(X;R)/N_n)\longrightarrow C_{n-p}(X,B;R),\qquad \varphi\otimes[c]\longmapsto[\varphi\cap c].$$
For a simplex in $A$ its front-face evaluation is zero; for a simplex in $B$ its retained back face is in $B$. Thus changing $c$ by a chain in either summand of $N$ changes the output by zero modulo $C_*(B;R)$. These are all relations in the quotient, and bilinearity respects the tensor relations.

Use [[def-relative-singular-homology]] for relative cycles and boundaries. Suppose $\delta\varphi=0$ and $\partial c\in N$. The identity of [[thm-cap-product-boundary-identity]] gives $\partial(\varphi\cap c)=(-1)^p\varphi\cap\partial c$, which is zero modulo $B$ by the preceding calculation. If $c$ changes by $\partial b$ plus an element of $N$, the change in the output is the relative boundary $(-1)^p\partial(\varphi\cap b)$. If $\varphi$ changes by $\delta u$ with $u$ vanishing on $A$, then
$$\delta u\cap c=u\cap\partial c+(-1)^p\partial(u\cap c).$$
Its first term is zero modulo $B$ because $\partial c\in N$, so this too is a relative boundary. For $p=0$ the possible $u$ is zero. This proves descent in both variables.

Under the excisive hypotheses of [[def-relative-cup-product]], its explicitly constructed quotient-chain equivalence gives
$$H_n(C_*(X;R)/N)\cong H_n(X,A\cup B;R).$$
Transporting the chain construction through this canonical quotient map defines the **relative cap product**
$$H^p(X,A;R)\otimes_R H_n(X,A\cup B;R)\longrightarrow H_{n-p}(X,B;R).$$
As with relative cup, openness of $A,B$ in their union suffices; any other neighborhood/subcomplex replacement must supply the indicated compatible comparison. An arbitrary triad is not silently assumed excisive.

In particular, taking $B=\varnothing$ gives
$$H^p(X,A;R)\otimes_R H_n(X,A;R)\longrightarrow H_{n-p}(X;R).$$
Taking $B=A$ and precomposing the homology input with the quotient map from absolute homology gives
$$H^p(X,A;R)\otimes_R H_n(X;R)\longrightarrow H_{n-p}(X,A;R).$$
For $A=\varnothing$ the general construction includes the usual action on relative homology of $(X,B)$. If $A=X$ the cohomology input is zero; if $B=X$ the target is zero. Empty spaces, zero ring/inputs and point spaces cause no exception. When $n<p$ output chains are zero, and when $n=p$ they are vertex chains. Degenerate simplices obey the same containment tests. All operations and quotient comparisons are explicit, so no AC is required.
