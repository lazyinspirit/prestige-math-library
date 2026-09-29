---
id: def-smooth-projective-dualizing-line-bundle-and-trace
kind: definition
title: Dualizing line bundle and trace datum of a smooth projective variety
status: draft
origin: pipeline
landmark: false
deps:
  - def-sheaf-relative-differentials
  - thm-differentials-smooth-locally-free
  - def-sheaf-cohomology-derived-global-sections
  - thm-cohomology-projective-space-twisting-sheaves
  - def-axiom-of-choice
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "The Stacks Project, Duality for Schemes"
      url: https://stacks.math.columbia.edu/download/duality.pdf
      locator: "§27, Lemmas 27.1, 27.4-27.5 and Remarks 27.2-27.3, 27.6"
    - title: "Ravi Vakil, Foundations of Algebraic Geometry, Classes 53-54"
      url: https://math.stanford.edu/~vakil/0506-216/216Cjun2807.pdf
      locator: "Class 53 §§1-5, Class 54 §§7, 11"
---

## Definition

Assume the Axiom of Choice. Let $k$ be a field and let $X$ be a projective
$k$-scheme of finite type which is **smooth of pure relative dimension $n$**:
every point of $X$ has an open neighbourhood on which $\Omega^1_{X/k}$ is
locally free of rank $n$, which by the in-run theorem
`thm-differentials-smooth-locally-free` of the flat/smooth/etale A page holds
for every smooth $X\to\operatorname{Spec}k$ of pure relative dimension $n$.
Here $\Omega^1_{X/k}$ is the sheaf of relative differentials of
[[def-sheaf-relative-differentials]] and $H^q(X,-)$ is sheaf cohomology as in
[[def-sheaf-cohomology-derived-global-sections]].

**Dualizing line bundle.** The sheaf
$$\omega_X:=\det\Omega^1_{X/k}:=\textstyle\bigwedge^n\Omega^1_{X/k}$$
is the $n$-th exterior power of the locally free sheaf $\Omega^1_{X/k}$ of rank
$n$; it is a locally free $\mathcal O_X$-module of rank one, called the
**dualizing line bundle** (or canonical bundle) of $X$. Its formation is
functorial in the following weak sense: an isomorphism
$\varphi:X\to X'$ of smooth projective $n$-dimensional $k$-schemes induces a
canonical isomorphism $\varphi^*\omega_{X'}\cong\omega_X$.

**Projective-space model.** For $X=\mathbb P^n_k$ with the standard
homogeneous coordinates $x_0,\dots,x_n$, the dualizing bundle is
$\omega_{\mathbb P^n}\cong\mathcal O(-n-1)$. To see the bundle identity
directly, on $U_i=D_+(x_i)$ use the ordered coordinates $x_\ell/x_i$
for $\ell\ne i$ and the local generator
$\eta_i=(-1)^i\bigwedge_{\ell\ne i}d(x_\ell/x_i)$, with the indices in
increasing order. The coordinate change on $U_i\cap U_j$ gives
$\eta_j=(x_j/x_i)^{-n-1}\eta_i$: its Jacobian has the displayed
power, and the signs $(-1)^i$ remove the ordering sign. The standard
frames $x_i^{-n-1}$ of $\mathcal O(-n-1)$ have this same transition,
so sending $x_i^{-n-1}$ to $\eta_i$ glues to the asserted isomorphism.
For $n=0$ the empty wedge is $1$ and both bundles are trivial on
$\mathbb P^0_k=\operatorname{Spec}k$. By
[[thm-cohomology-projective-space-twisting-sheaves]] the group
$H^n(\mathbb P^n_k,\mathcal O(-n-1))$ is one dimensional with Laurent
generator $(x_0\cdots x_n)^{-1}$. The **Laurent-coefficient residue
trace** is the $k$-linear map
$$t_{\mathbb P^n}:H^n(\mathbb P^n_k,\omega_{\mathbb P^n})\longrightarrow k$$
which, on that monomial basis, sends the class with
Laurent tail $(x_0\cdots x_n)^{-1}$ to $1\in k$. Compatibility of this
normalisation with cup products is the content of the twisting-sheaf duality
theorem proved later on this page.

**Normalized Serre trace.** Let $X$ be smooth projective of pure dimension $n$
over $k$. A **normalized Serre trace** for $X$ is a $k$-linear map
$$t_X:H^n(X,\omega_X)\longrightarrow k$$
such that:

1. after any closed immersion $j:X\hookrightarrow\mathbb P^N_k$ over $k$
   with pure codimension $c=N-n$, the Gysin map
   $G_j:H^n(X,\omega_X)\to H^N(\mathbb P^N_k,\omega_{\mathbb P^N})$ is
   formed by the adjunction and regular-immersion identification
   $H^n(X,\omega_X)\cong
   \operatorname{Ext}^{N}_{\mathbb P^N}(j_*\mathcal O_X,\omega_{\mathbb P^N})$
   followed by the map on Ext induced contravariantly by the unit
   $\mathcal O_{\mathbb P^N}\to j_*\mathcal O_X$ and the identification
   $\operatorname{Ext}^{N}_{\mathbb P^N}(\mathcal O_{\mathbb P^N},\omega_{\mathbb P^N})
   \cong H^N(\mathbb P^N_k,\omega_{\mathbb P^N})$; the normalization condition
   is the typed equality $t_X=t_{\mathbb P^N}\circ G_j$;
2. for every finite locally free $\mathcal O_X$-module $\mathcal E$ the
   evaluation pairing
   $$H^q(X,\mathcal E)\times H^{n-q}(X,\mathcal E^\vee\otimes\omega_X)\longrightarrow k,\qquad (\alpha,\beta)\longmapsto t_X(\alpha\cup\beta),$$
   is a perfect pairing of $k$-vector spaces for every $0\le q\le n$.

The existence of a normalized Serre trace, its nondegeneracy and its
independence of the chosen embedding $j$ are claims of
`thm-serre-duality-smooth-projective-variety-locally-free-sheaves` proved later
on this page; this definition only fixes the data, the sign convention
$\omega_X=\det\Omega^1_{X/k}$ and the projective-space normalisation. In
particular the trace is *not* part of the definition of $\omega_X$ and no
existence statement is made here.
