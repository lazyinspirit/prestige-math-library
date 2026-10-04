---
id: thm-j-uniformizes-the-level-one-modular-curve
kind: theorem
title: "The j-invariant uniformizes X(1)"
status: published
origin: pipeline
deps:
  - def-modular-discriminant-and-j-invariant
  - thm-j-invariant-classifies-complex-tori
  - def-compactified-level-one-modular-curve
  - lem-modular-quotient-local-charts
  - lem-level-one-cusp-chart-and-compactness
  - thm-ring-of-level-one-modular-forms
  - thm-level-one-valence-formula
  - cor-zeros-of-e4-and-e6-at-the-elliptic-points
  - thm-local-normal-form-holomorphic-map-riemann-surfaces
  - thm-proper-holomorphic-map-riemann-surfaces-has-degree
  - def-ramification-index-and-branch-value
  - cor-injective-holomorphic-derivative-nonzero
  - def-biholomorphic-map
  - thm-compactness-under-continuous-maps
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
sources:
  references:
    - title: "J. S. Milne, Modular Functions and Modular Forms (v1.31, 2017)"
      url: "https://www.jmilne.org/math/CourseNotes/MF.pdf"
      locator: "Remark 4.4 and the Hauptmodul statement, printed pp. 49-50."
    - title: "C. T. McMullen, Advanced Complex Analysis, Math 213a course notes (Harvard, 2010)"
      url: "https://people.math.harvard.edu/~ctm/home/text/class/harvard/213a/10/html/home/course/course.pdf"
      locator: "Theorem 5.33 and the properness argument, printed pp. 97–98; Theorem 5.42, p. 103."
    - title: "D. Zagier, Elliptic Modular Forms and Their Applications, in The 1-2-3 of Modular Forms (Universitext, Springer, 2008)"
      url: "https://people.mpim-bonn.mpg.de/zagier/files/doi/10.1007/978-3-540-74119-0_1/fulltext.pdf"
      locator: "Corollary 2 to Proposition 2, printed p. 11, and the explicit j quotient, p. 22."
---

## Statement

The function $j$ descends to a holomorphic map $\bar j:X(1)\to\widehat{\mathbb C}$ of compact Riemann surfaces, with $\bar j([\infty])=\infty$ and a simple pole at the cusp, and $\bar j$ is a biholomorphism. Consequently $X(1)$ is biholomorphic to the Riemann sphere and $j$ is a Hauptmodul. The quotient map $\pi:\mathfrak H\to Y(1)\subset X(1)$ has local degree $2$ at $i$ and $3$ at $\omega$ and $\omega+1$, representatives of the classes of $i$ and $\omega$; more generally its local degree is $2$ throughout $PSL_2(\mathbb Z)\cdot i$, $3$ throughout $PSL_2(\mathbb Z)\cdot\omega$, and $1$ elsewhere. These ramification indices belong to $\pi$, while $\bar j$ itself is unramified, so the composed map $j=\bar j\circ\pi:\mathfrak H\to\widehat{\mathbb C}$ has local degree $2$ at $i$ and $3$ at $\omega$ and $\omega+1$.

## Facts & Assumptions

**Given:** The compact Riemann surface $X(1)=PSL_2(\mathbb Z)\backslash\mathfrak H^*$ with its cusp $[\infty]$, the open part $Y(1)$, and the quotient charts at elliptic points and at the cusp ([[def-compactified-level-one-modular-curve]], [[lem-level-one-cusp-chart-and-compactness]], [[lem-modular-quotient-local-charts]]); the modular function $j$ with $j(\gamma\tau)=j(\tau)$, holomorphic on $\mathfrak H$, and with $j=q^{-1}+744+O(q)$ at the cusp ([[def-modular-discriminant-and-j-invariant]]).

[F1] $j$ is injective on $PSL_2(\mathbb Z)$-classes: if $j(\tau)=j(\tau')$ then the lattices $\Lambda_\tau,\Lambda_{\tau'}$ are homothetic, hence $\tau'=\gamma\tau$ for some $\gamma\in SL_2(\mathbb Z)$ and $[\tau]=[\tau']$ in $Y(1)$ ([[thm-j-invariant-classifies-complex-tori]]).

[F2] For $\lambda\in\mathbb C$ the form $E_4^3-\lambda\Delta\in M_{12}$ is nonzero with value $1$ at the cusp, and its valence sum is $12/12=1>0$, so it has a zero in $\mathfrak H$; hence $j$ takes the value $\lambda$ ([[thm-level-one-valence-formula]], [[def-modular-discriminant-and-j-invariant]], [[cor-zeros-of-e4-and-e6-at-the-elliptic-points]], [[thm-ring-of-level-one-modular-forms]]).

[F3] Local normal form: a nonconstant holomorphic map of Riemann surfaces has, near a point, the form $z\mapsto z^\nu$ in suitable coordinates; an injective holomorphic map of domains has nowhere-vanishing derivative and is biholomorphic onto its image ([[thm-local-normal-form-holomorphic-map-riemann-surfaces]], [[def-ramification-index-and-branch-value]], [[cor-injective-holomorphic-derivative-nonzero]], [[def-biholomorphic-map]]).

[F4] In the quotient chart of [[lem-modular-quotient-local-charts]] the map $\pi$ near $i$ is $z\mapsto z^2$ and near $\omega$ or $\omega+1$ is $z\mapsto z^3$, these being the local degrees $2$ and $3$; $\bar j$ will be unramified once it is shown biholomorphic, since biholomorphic maps have local degree one ([[def-ramification-index-and-branch-value]]).

## Proof

1.1 On $Y(1)$ the invariance and holomorphy of $j$ produce a holomorphic function $\bar j:Y(1)\to\mathbb C$: at ordinary points use a local inverse of $\pi$; at a point of stabiliser order $\nu$, the invariant Taylor series in a uniformising coordinate $z$ has only powers $z^{m\nu}$, so it is holomorphic in the quotient coordinate $z^\nu$. Near the cusp, in the $q$-chart of [[lem-level-one-cusp-chart-and-compactness]], $j$ is $q^{-1}(1+744q+O(q^2))$, a meromorphic function of $q$ with a simple pole at $q=0$; since the cusp chart identifies the cusp with $q=0$, the formula $q\mapsto q^{-1}(1+744q+\cdots)$ defines a holomorphic map of a punctured disc into $\widehat{\mathbb C}$ extending to $0$ with value $\infty$. Hence $\bar j$ extends to a holomorphic map $X(1)\to\widehat{\mathbb C}$ with $\bar j([\infty])=\infty$ and a simple pole in the $q$-coordinate. [F4, given, algebra]

2.1 $\bar j$ is injective. If $\bar j([\tau])=\bar j([\tau'])$ then $j(\tau)=j(\tau')$ (for $\tau,\tau'\in\mathfrak H$) and [F1] gives $[\tau]=[\tau']$; on $Y(1)$ this is the claim, and the cusp is the only remaining point, with $\bar j([\infty])=\infty$ not attained on $Y(1)$ because $j$ is holomorphic on $\mathfrak H$. [F1, step 1.1, given, algebra]

3.1 $\bar j$ is surjective: given $\lambda\in\mathbb C$, [F2] provides $\tau\in\mathfrak H$ with $j(\tau)=\lambda$, so $\lambda$ is in the image, while $\infty=\bar j([\infty])$; hence $\bar j(X(1))=\widehat{\mathbb C}$. [F2, step 2.1, given, algebra]

4.1 A bijective holomorphic map of compact Riemann surfaces is a biholomorphism: at every point the local normal form is $z\mapsto z^\nu$, and injectivity forces $\nu=1$, so the derivative is never zero and the map is locally biholomorphic by [F3]; a locally biholomorphic bijection has holomorphic inverse, so $\bar j$ is biholomorphic and $X(1)\cong\widehat{\mathbb C}$ with $j$ a Hauptmodul. The local degrees of $\pi$ at $i$ and at $\omega,\omega+1$ are $2$ and $3$ by [F4], the same indices hold at all their modular translates because the group acts by biholomorphisms and $\pi\circ\gamma=\pi$; outside these two orbits the stabilisers are trivial and the local degree is $1$; since $\bar j$ is unramified, the composition $j=\bar j\circ\pi$ has exactly these local degrees at the corresponding points, in particular $2$ at $i$ and $3$ at $\omega$ and $\omega+1$. [F3, F4, step 3.1, given, algebra] ∎
