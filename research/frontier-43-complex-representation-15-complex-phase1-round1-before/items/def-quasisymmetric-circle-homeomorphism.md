---
id: def-quasisymmetric-circle-homeomorphism
kind: definition
title: Quasisymmetric homeomorphisms of the line and circle
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps:
  - def-homeomorphism-and-open-maps
  - def-circle-as-real-line-mod-integers
  - thm-real-line-mod-integers-is-homeomorphic-to-the-unit-circle
  - def-chordal-metric-riemann-sphere
  - thm-stereographic-projection-riemann-sphere-homeomorphism
  - def-mobius-transformation
  - def-unit-disc-upper-half-plane-and-blaschke-factor
  - thm-disc-automorphisms-are-rotated-blaschke-factors
  - def-conformal-equivalence-and-automorphism-group
  - lem-metrics-on-rn
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Mikhail Lyubich, Conformal Geometry and Dynamics of Quadratic Polynomials, vol. I, §§15.1.1–15.1.2"
      url: "https://www.math.stonybrook.edu/~mlyubich/book.pdf"
    - title: "Christopher J. Bishop, Quasiconformal Mappings, Ch. 2 §8"
      url: "https://www.math.stonybrook.edu/~bishop/classes/math627.S18/QC.pdf"
    - title: "Pekka Tukia and Jussi Väisälä, Quasisymmetric embeddings of metric spaces, §§1–2"
      url: "https://doi.org/10.5186/aasfm.1980.0531"
    - title: "Jun Hu, Characterizations of circle homeomorphisms of different regularities in the universal Teichmüller space, §1"
      url: "https://ems.press/content/serial-article-files/37039?nt=1"
dependency_level: 0
---

## Definition

For an interval $I\subset\mathbb R$, let $|I|$ be its Euclidean length. An orientation-preserving homeomorphism $h:\mathbb R\to\mathbb R$ is **$L$-quasisymmetric**, $L\ge1$, if

$$|h(I)|\le L|h(J)|$$

for every pair of adjacent intervals $I,J$ of equal length. It is **quasisymmetric** if this holds for some finite $L$. Equivalently, for all $x\in\mathbb R$ and $t>0$,

$$\frac{h(x+t)-h(x)}{h(x)-h(x-t)}\le L.$$

Identify $\mathbb S^1=\mathbb R/\mathbb Z$ with the round unit circle by $[s]\mapsto e^{2\pi i s}$ ([[def-circle-as-real-line-mod-integers]], [[thm-real-line-mod-integers-is-homeomorphic-to-the-unit-circle]]). Arc lengths below are measured on the unit circle, whose circumference is $2\pi$. An orientation-preserving homeomorphism $h:\mathbb S^1\to\mathbb S^1$ is **$L$-quasisymmetric** if

$$|h(I)|\le L|h(J)|$$

for every pair of adjacent arcs $I,J$ with disjoint interiors and equal arc length. It is **quasisymmetric** if this holds for some finite $L$. The equivalent metric three-point form is that there is an increasing homeomorphism $\eta:[0,\infty)\to[0,\infty)$ such that

$$\chi(x,y)\le t\chi(x,z)\quad\Longrightarrow\quad \chi(h(x),h(y))\le\eta(t)\chi(h(x),h(z))$$

for all distinct $x,y,z\in\mathbb S^1$ and all $t\ge0$, where $\chi$ is the chordal metric ([[def-chordal-metric-riemann-sphere]]). The two definitions determine control data from one another; the symmetric-triple test is the special case of equal input chords. In particular, the adjacent-arc definition does not assign the same constant to the inverse map.

The $1$-quasisymmetric orientation-preserving homeomorphisms of $\mathbb R$ are exactly $x\mapsto ax+b$ with $a>0$. The $1$-quasisymmetric orientation-preserving homeomorphisms of $\mathbb S^1$ are exactly the rotations. An equivalent symmetric-triple test on the circle is that, for every $s\in\mathbb R$ and $0<t<1/2$, the ratio of the two image chord lengths from $h(e^{2\pi i s})$ to $h(e^{2\pi i(s+t)})$ and $h(e^{2\pi i(s-t)})$ lies between $M^{-1}$ and $M$ for some uniform $M$.

Quasisymmetric homeomorphisms are closed under composition and inversion. If $h$ has control function $\eta_h$ and $g$ has control function $\eta_g$, then $h\circ g$ has control $\eta_h\circ\eta_g$, while $h^{-1}$ has control

$$\eta_{h^{-1}}(t)=\frac{1}{\eta_h^{-1}(1/t)}\quad(t>0),\qquad \eta_{h^{-1}}(0)=0.$$

Thus an $L$-quasisymmetric map has a quasisymmetric inverse with a constant depending only on $L$; the same $L$ is not asserted.

For $0\le r<1$, every Möbius automorphism $\varphi$ of $\mathbb D$ with $|\varphi(0)|\le r$ is $L(r)$-quasisymmetric on $\mathbb S^1$. The full group of disc automorphisms is not uniformly quasisymmetric.

## Facts & Assumptions

**Given:** the adjacent-interval and adjacent-arc definitions above, the standard parametrization $[s]\mapsto e^{2\pi i s}$, the chordal metric, and the classification of disc automorphisms.

[F1] For finite $z,w\in\mathbb C$, $\chi(z,w)=2|z-w|/\sqrt{(1+|z|^2)(1+|w|^2)}$ ([[def-chordal-metric-riemann-sphere]], [[thm-stereographic-projection-riemann-sphere-homeomorphism]]).

[F2] Every automorphism of $\mathbb D$ has the form $e^{i\theta}(a-z)/(1-\overline a z)$ with $a\in\mathbb D$ and $\theta\in\mathbb R$ ([[thm-disc-automorphisms-are-rotated-blaschke-factors]]).

[F3] If $X$ is $C$-pseudoconvex and $Y$ is $k$-homogeneously totally bounded, every weakly $H$-quasisymmetric embedding $X\to Y$ is quasisymmetric with control depending only on $C,k,H$ (Tukia–Väisälä, Theorem 2.15, pp. 101–102).

[F4] For orientation-preserving circle homeomorphisms, the symmetric-triple chordal condition written in the Definition is equivalent to quasisymmetry (Hu, §1, equation (1.2), printed p. 322; the equivalence with the metric definition is noted at pp. 325–326).

## Proof

**Proof technique:** direct, using dyadic subdivision for the interval control and the metric-space three-point criterion.

1.1 For the line, take $I=[x-t,x]$ and $J=[x,x+t]$. Since $h$ is increasing, $|h(I)|=h(x)-h(x-t)$ and $|h(J)|=h(x+t)-h(x)$; swapping the adjacent pair gives the reciprocal inequality. This proves the displayed sup-form with the same $L$. If $L=1$, equality holds for every adjacent equal pair, so $h(x+t)+h(x-t)=2h(x)$. The continuous midpoint identity, first iterated for dyadic subdivisions and then extended by continuity, gives $h(x)=ax+b$; monotonicity forces $a>0$. Conversely every such affine map preserves all adjacent length ratios. [given, algebra]

1.2 On the round circle, if an arc has angular length $s\in[0,\pi]$, its chord has length $2\sin(s/2)$; hence $2s/\pi\le\chi\le s$. This proves the uniform comparison of arc and chord distances used to pass between the circle's arc metric and its chordal metric. For $L=1$, adjacent equal arcs have equal image lengths. Partitioning the circle into $n$ equal arcs shows that every such arc maps to an arc of length $2\pi/n$, independently of its starting point. Additivity gives preservation of rational arc lengths; continuity of $h$ gives preservation of every arc length. Thus $h$ is a rotation, and rotations plainly have constant $1$. [F1, given, algebra]

1.3 If $g$ has control $\eta_g$ and $h$ has control $\eta_h$, applying the first inequality to $g$ and then to $h$ gives $\eta_{h\circ g}=\eta_h\circ\eta_g$. For the inverse, suppose $\chi(h(x),h(y))\le t\chi(h(x),h(z))$. If $\chi(x,y)/\chi(x,z)>1/\eta_h^{-1}(1/t)$, then the forward control applied to the pair $(z,y)$ at base point $x$ gives $\chi(h(x),h(z))<t^{-1}\chi(h(x),h(y))$, a contradiction. Therefore $h^{-1}$ has the stated control. These formulas prove closure and show why an inverse constant need only depend on the forward constant. [given, algebra]

1.4 Write an automorphism as $\varphi(z)=e^{i\theta}(a-z)/(1-\overline a z)$, so $|a|=|\varphi(0)|\le r$. On $|z|=1$, the angular derivative is $|\varphi'(z)|=(1-|a|^2)/|1-\overline a z|^2$, which lies between $(1-r)/(1+r)$ and $(1+r)/(1-r)$. Image arc length is the integral of this derivative, so the ratio for any adjacent equal arcs is at most $L(r)=((1+r)/(1-r))^2$. [F2, given, algebra]

2.1 Let $\mu([a,b])$ be the length of the image of an oriented interval or arc. If adjacent equal intervals have image-length ratio at most $L$, then either half of any interval has image length at most $q=L/(1+L)$ times the image length of its parent. Iterating, a dyadic subinterval at depth $n$ has image length at most $q^n$ times its parent's image length; any subinterval of relative length at most $2^{-n}$ is covered by at most two such cells. Comparing equal-length initial arcs on opposite sides of a base point gives the same estimate with an additional factor at most $L$. Thus the adjacent-arc bound gives weak three-point control, with constants depending only on $L$. The arc metric on the circle is geodesic, hence pseudoconvex, and is homogeneously totally bounded: a ball of radius $R$ is covered by at most $2\lceil 2R/\rho\rceil+2$ arcs of diameter at most $\rho$. Applying [F3] gives a full metric control function $\eta$ depending only on $L$. The inequalities in step 1.2 transfer this control to $\chi$. In the reverse direction, the equal-chord symmetric-triple test in the Definition is the standard circle form of the adjacent-arc condition; equal angular offsets give equal input chords, and dyadic subdivision together with the same chord/arc inequalities gives the arc-length ratio bound, with constants depending only on the test bound ([F4]). [F1, F3, F4, given, construct]

3.1 For $a\in(0,1)$ real, take $\varphi_a(z)=(z-a)/(1-az)$. Its boundary angular derivative is $(1-a^2)/(1-2a\cos\theta+a^2)$. For fixed $0<\delta<\pi$, the image length of $[0,\delta]$ tends to $\pi$ as $a\uparrow1$, while the image length of the adjacent arc $[\delta,2\delta]$ tends to $0$, by integrating this derivative (the Poisson kernel concentrates its total mass $2\pi$ at $0$). Their ratio is unbounded, so the full disc-automorphism group has no common quasisymmetry constant. [F2, given, algebra] ∎
