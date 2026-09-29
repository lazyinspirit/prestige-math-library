---
page: quasi-coherent-and-coherent-sheaves-and-vector-bundles-examples
title: Quasi Coherent and Coherent Sheaves and Vector Bundles — Examples
status: draft
items:
  - ex-associated-sheaf-quotient-module
  - ex-associated-sheaf-localized-module
  - ex-skyscraper-coherent-closed-point
  - ex-line-bundle-projective-line-transition
  - cex-qc-sheaf-global-sections-not-determine-nonaffine
  - cex-pushforward-qc-needs-quasi-separated
  - cex-finite-type-module-not-locally-free
  - ex-fitting-ideal-two-by-two-presentation
  - ex-rank-zero-locally-free-sheaf
  - cex-stalk-versus-fibre-module
---

This companion page records examples and counterexamples for the
quasi-coherent, coherent, locally free and vector-bundle development on the
main page. Every computation is carried out in its own item, including the
empty, zero and degenerate cases.

For an ideal $I\subseteq A$ the associated sheaf $\widetilde{A/I}$ is
$\mathcal O_{\operatorname{Spec}A}/\widetilde I$ and its support is the closed
set $V(I)$, with $I=A$ giving empty support; localising the base ring
identifies $\widetilde{M_f}$ with the restriction of $\widetilde M$ to
$D(f)\cong\operatorname{Spec}A_f$. For a Noetherian ring $A$ and a maximal
ideal $\mathfrak m$ the skyscraper $\widetilde{A/\mathfrak m}$ is coherent,
has stalk the residue field at $\mathfrak m$ and zero stalk elsewhere, and is
the direct image of its one-point fibre.

On $\mathbb P^1_k$ the two-chart gluing relation $e_\infty=t^n e_0$ defines
the invertible sheaf $\mathcal O(n)$, with dual and tensor transitions
$t^{-n}$ and $t^{n+m}$. The same space separates a sheaf from its global
sections: $\mathcal O(-1)$ is nonzero while
$\Gamma(\mathbb P^1_k,\mathcal O(-1))=0$, so global sections do not determine
a quasi-coherent sheaf outside the affine case. Quasi-separatedness in the
quasi-coherent pushforward theorem cannot be dropped either: gluing two copies
of an affine scheme along a non-quasi-compact open gives a quasi-compact
morphism whose pushforward of the structure sheaf is not quasi-coherent.

Three further items separate hypotheses that are easy to conflate. On
$\operatorname{Spec}k[x]$ the coherent sheaf $\widetilde{k[x]/(x)}$ is finite
type but not locally free, with fibre dimension one at the origin and zero
elsewhere. For $M=\operatorname{coker}\operatorname{diag}(x,y)$ over $k[x,y]$
the Fitting ideals are $\operatorname{Fitt}_0=(xy)$,
$\operatorname{Fitt}_1=(x,y)$ and $\operatorname{Fitt}_2=A$, with fibre
dimension two at the origin, one along the punctured coordinate axes and zero
elsewhere. The rank-zero bundle exhibits $\mathcal O_X^0=0$ as finite locally
free of rank zero with
$V(0)=\operatorname{Spec}_X\operatorname{Sym}(0)=X$ and one zero vector in
every fibre, while on $\operatorname{Spec}k[t]$ at $\mathfrak p=(t)$ the stalk
$k[t]_{(t)}$ and the fibre $k$ of the structure sheaf are different objects.
