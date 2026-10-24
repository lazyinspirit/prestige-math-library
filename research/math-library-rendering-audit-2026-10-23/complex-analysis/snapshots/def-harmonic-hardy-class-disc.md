---
id: def-harmonic-hardy-class-disc
kind: definition
title: "Harmonic Hardy classes on the unit disc"
status: published
origin: pipeline
pipeline_run: frontier-37-owner-30
deps: [def-complex-lp-and-euclidean-test-function-conventions, def-countable-choice, def-essential-supremum-with-respect-to-a-measure, def-plane-harmonic-function, def-the-one-dimensional-torus-and-normalized-haar-integral, thm-complex-holder-minkowski-and-the-quotient-norm, thm-identity-principle-for-plane-harmonic-functions, thm-poisson-representation-for-disc-harmonic-functions]
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  audited: 2026-10-02
  precheck: n/a
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-02
sources:
  references:
    - title: "Axler, Bourdon and Ramey, Harmonic Function Theory, second edition, Chapter 6"
      url: "https://www.axler.net/HFT.pdf"
      locator: "The Spaces h^p(B), printed pp. 117-119 (PDF pp. 122-124): the definition of h^p, the p=infinity convention and the norm assertions."
    - title: "Herbert Koch, Notes for Harmonic and Real Analysis (University of Bonn, 2014-15), Chapter 3"
      url: "https://www.math.uni-bonn.de/ag/ana/WiSe1415/V4B5_notes.pdf"
      locator: "§§1.2.1-3, printed pp. 35-37: Hardy classes of harmonic functions and their boundary norms."
---

## Definition

Assume [[def-countable-choice|countable choice]]. Identify the torus
$\mathbb T=\mathbb R/\mathbb Z$ with the unit circle as in
[[def-the-one-dimensional-torus-and-normalized-haar-integral]], and write $m$
for its normalized Haar measure, a probability measure. For a function
$u:\mathbb D\to\mathbb C$ and $0\le r<1$ write
$$u_r:\mathbb T\to\mathbb C,\qquad u_r(\zeta):=u(r\zeta).$$

A complex-valued function $u=U+iV$ on $\mathbb D$ is called **harmonic** when
both components $U$ and $V$ are real-valued plane harmonic functions in the
sense of [[def-plane-harmonic-function]]; this is the componentwise convention
of [[def-complex-lp-and-euclidean-test-function-conventions]]. Every such $u$
is continuous, because a $C^2$ real function is continuous and both components
are of class $C^2$.

**The classes $\mathbf h^p(\mathbb D)$.** For $1\le p<\infty$ let
$$h^p(\mathbb D):=\Bigl\{\,u:\mathbb D\to\mathbb C\ \text{harmonic}:\ \sup_{0\le r<1}\|u_r\|_{L^p(\mathbb T,m)}<+\infty\,\Bigr\},$$
where $u_r$ is regarded as an element of the quotient space
$L^p(\mathbb T,m;\mathbb C)$ of
[[def-complex-lp-and-euclidean-test-function-conventions]] through its
continuous representative, and $\|\cdot\|_{L^p(\mathbb T,m)}$ is the norm of
[[thm-complex-holder-minkowski-and-the-quotient-norm]]. For $p=\infty$ set
$$h^\infty(\mathbb D):=\Bigl\{\,u:\mathbb D\to\mathbb C\ \text{harmonic}:\ \sup_{0\le r<1}\ \sup_{\zeta\in\mathbb T}|u(r\zeta)|<+\infty\,\Bigr\}.$$
Here the inner supremum may equivalently be read as the essential supremum of
$u_r$ with respect to $m$ ([[def-essential-supremum-with-respect-to-a-measure]]):
a continuous function has the same supremum and essential supremum, because a
nonempty open subset of $\mathbb T$ contains the image $q((a,b))$ of an open
interval with $0<b-a<1$ (the map $q$ is open and its images of rational-endpoint
intervals form a base, as proved in
[[def-the-one-dimensional-torus-and-normalized-haar-integral]]), and such a set
has $m$-measure $b-a>0$; hence a continuous function bounded by $M$ almost
everywhere is bounded by $M$ everywhere. In particular
$$\sup_{0\le r<1}\ \sup_{\zeta\in\mathbb T}|u(r\zeta)|=\sup_{z\in\mathbb D}|u(z)|,$$
because every $z\in\mathbb D$ has the form $r\zeta$ with $r=|z|$ and $\zeta\in\mathbb T$.

**The Hardy norms.** For $u\in h^p(\mathbb D)$ put
$$\|u\|_{h^p}:=\sup_{0\le r<1}\|u_r\|_{L^p(\mathbb T,m)}\quad (1\le p<\infty),\qquad \|u\|_{h^\infty}:=\sup_{z\in\mathbb D}|u(z)| .$$
Then $h^p(\mathbb D)$ is a complex vector space: harmonicity and finiteness of
the suprema are preserved by finite linear combinations, and
$\|u+v\|_{h^p}\le\|u\|_{h^p}+\|v\|_{h^p}$,
$\|\lambda u\|_{h^p}=|\lambda|\,\|u\|_{h^p}$ for $\lambda\in\mathbb C$, by the
corresponding statements at each radius in
[[thm-complex-holder-minkowski-and-the-quotient-norm]]. The assignment is
definite: if $\|u\|_{h^p}=0$, then $\|u_{1/2}\|_{L^p}=0$, so $u_{1/2}=0$
almost everywhere, hence $u_{1/2}=0$ everywhere by continuity and the
preceding paragraph; the Poisson representation formula
[[thm-poisson-representation-for-disc-harmonic-functions]] then gives $u=0$ on
the disc $|z|<\tfrac12$, and the identity principle
[[thm-identity-principle-for-plane-harmonic-functions]], applied to the two
components on the domain $\mathbb D$, gives $u=0$. Thus $\|\cdot\|_{h^p}$ is a
norm on $h^p(\mathbb D)$ for every $1\le p\le\infty$. No containment among the
classes $h^r(\mathbb D)\subseteq h^p(\mathbb D)$ for $p<r$ is asserted here;
only the containment $h^\infty(\mathbb D)\subseteq h^1(\mathbb D)$ will be used,
and it is proved where it is needed.
