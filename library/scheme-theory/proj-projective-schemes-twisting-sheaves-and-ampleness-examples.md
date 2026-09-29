---
page: proj-projective-schemes-twisting-sheaves-and-ampleness-examples
title: Proj Projective Schemes Twisting Sheaves and Ampleness — Examples
status: draft
items:
  - ex-proj-polynomial-ring-projective-space
  - ex-proj-empty-irrelevant-nilpotent
  - ex-twisting-sheaf-projective-line-transitions
  - ex-zero-section-empty-effective-divisor
  - ex-proj-quotient-projective-hypersurface
  - cex-o-minus-one-no-global-generators
  - cex-proj-graded-ring-not-faithful
  - ex-line-bundle-map-conic-veronese
  - cex-globally-generated-not-very-ample
  - ex-projective-bundle-trivial-rank-r
---

This companion page records examples and counterexamples for the Proj,
twisting-sheaf and ampleness development on the main page. Every chart
computation is carried out in its own item, including the empty, nilpotent,
rank-zero and characteristic-two cases.

For the polynomial ring, the standard charts of $\operatorname{Proj}$
$k[x_0,\dots,x_n]$ have rings $k[x_0/x_i,\dots,x_n/x_i]$ and the overlap
change is the displayed ratio of coordinates; for $n=0$ the space is a single
point. The twist transitions on $\mathbb P^1_k$ are $e_1=t^n e_0$ with
$t=x_1/x_0$, including negative $n$, where the homogeneous unit $x_1^n$ is
the frame. A nilpotent irrelevant ideal makes $\operatorname{Proj}$ empty
even though the spectrum is not, and the unit section of $\mathcal O_X$ has
zero ideal $\mathcal O_X$ and empty zero scheme. A nonzero homogeneous
equation cuts the hypersurface $\operatorname{Proj}(k[x]/(F))\subset
\mathbb P^n_k$ with chart ring $k[x_a/x_i]/(F/x_i^{\deg F})$.

Three items delimit the concepts. $\Gamma(\mathbb P^1_k,\mathcal O(-1))=0$,
so an invertible sheaf need not be globally generated; the second Veronese
$T=k[x^2,xy,y^2]$ has the same $\operatorname{Proj}$ as $k[x,y]$ but is not
isomorphic to it as a graded algebra, so $\operatorname{Proj}$ forgets the
grading; and the structure sheaf is globally generated but not very ample,
since no immersion into projective space pulls $\mathcal O(1)$ back to
$\mathcal O_{\mathbb P^1_k}$. The degree-two Veronese map exhibits the conic
$Z_0Z_2-Z_1^2=0$ as the scheme-theoretic image of $\mathbb P^1_k$, and the
projective bundle of a trivial module gives
$\mathbb P_S(\mathcal O_S^r)\cong\mathbb P^{r-1}_S$ for $r\ge1$, with the
rank-zero case empty.
