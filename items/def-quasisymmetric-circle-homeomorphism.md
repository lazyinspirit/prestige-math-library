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
  - thm-natural-logarithm-laws
  - thm-exponential-limits-and-range
  - thm-real-power-laws
  - thm-real-power-continuity-and-derivatives
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-08
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

$$L^{-1}\le\frac{h(x+t)-h(x)}{h(x)-h(x-t)}\le L.$$

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

[F3] Positive-base real powers are continuous, obey the power laws and have derivative $\alpha t^{\alpha-1}$ on $t>0$; the natural logarithm is increasing with $\log1=0$ ([[thm-real-power-laws]], [[thm-real-power-continuity-and-derivatives]], [[thm-natural-logarithm-laws]], [[thm-exponential-limits-and-range]]). Thus the positive powers and exponentials in the control function below have the asserted monotonicity and endpoint limits.

## Proof

**Proof technique:** direct, using dyadic subdivision and arc/chord comparison for the metric and symmetric-triple criteria.

1.1 For the line, take $I=[x-t,x]$ and $J=[x,x+t]$. Since $h$ is increasing, $|h(I)|=h(x)-h(x-t)$ and $|h(J)|=h(x+t)-h(x)$; swapping the adjacent pair gives the reciprocal inequality. This proves the displayed two-sided ratio criterion with the same $L$, and conversely that criterion bounds both orders of every adjacent equal pair. If $L=1$, equality holds for every adjacent equal pair, so $h(x+t)+h(x-t)=2h(x)$. The continuous midpoint identity, first iterated for dyadic subdivisions and then extended by continuity, gives $h(x)=ax+b$; monotonicity forces $a>0$. Conversely every such affine map preserves all adjacent length ratios. [given, algebra]

1.2 On the round circle, if an arc has angular length $s\in[0,\pi]$, its chord has length $2\sin(s/2)$; hence $2s/\pi\le\chi\le s$. This proves the uniform comparison of arc and chord distances used to pass between the circle's arc metric and its chordal metric. For $L=1$, adjacent equal arcs have equal image lengths. Partitioning the circle into $n$ equal arcs shows that every such arc maps to an arc of length $2\pi/n$, independently of its starting point. Additivity gives preservation of rational arc lengths; continuity of $h$ gives preservation of every arc length. Thus $h$ is a rotation, and rotations plainly have constant $1$. [F1, given, algebra]

1.3 If $g$ has control $\eta_g$ and $h$ has control $\eta_h$, applying the first inequality to $g$ and then to $h$ gives $\eta_{h\circ g}=\eta_h\circ\eta_g$. For the inverse, suppose $\chi(h(x),h(y))\le t\chi(h(x),h(z))$. If $\chi(x,y)/\chi(x,z)>1/\eta_h^{-1}(1/t)$, then the forward control applied to the pair $(z,y)$ at base point $x$ gives $\chi(h(x),h(z))<t^{-1}\chi(h(x),h(y))$, a contradiction. Therefore $h^{-1}$ has the stated control. These formulas prove closure and show why an inverse constant need only depend on the forward constant. [given, algebra]

1.4 Write an automorphism as $\varphi(z)=e^{i\theta}(a-z)/(1-\overline a z)$, so $|a|=|\varphi(0)|\le r$. On $|z|=1$, the angular derivative is $|\varphi'(z)|=(1-|a|^2)/|1-\overline a z|^2$, which lies between $(1-r)/(1+r)$ and $(1+r)/(1-r)$. Image arc length is the integral of this derivative, so the ratio for any adjacent equal arcs is at most $L(r)=((1+r)/(1-r))^2$. [F2, given, algebra]

2.1 Write $d$ for shortest arc distance and $\mu(I)$ for the length of the image of an oriented arc $I$. Put $q=L/(1+L)<1$ and $\alpha=-\log_2q>0$. Either half of an arc has image length at most $q$ times its parent's; hence each depth-$n$ dyadic cell has image length at most $q^n\mu(I)$. Given $d(x,z)=b\le\pi$, let $B$ be a shortest arc from $x$ to $z$. Its complement contains the opposite initial arc of length $b$, whose image length is at least $\mu(B)/L$. Consequently $\mu(B)/L\le d(h(x),h(z))\le\mu(B)$. If $a=d(x,y)\le b$, the shortest arc from $x$ to $y$ lies in $B$ or in that opposite initial arc. With $n=\lfloor\log_2(b/a)\rfloor$, it is covered by at most two depth-$n$ cells there, so $d(h(x),h(y))/d(h(x),h(z))\le2L^2q^n\le(2L^2/q)(a/b)^\alpha$. If $a>b$, divide the shortest arc to $y$ into $m=\lceil a/b\rceil$ consecutive pieces, all of length $b$ except possibly the last. Extend the last piece to length $b$ for comparison. All comparisons use adjacent length-$b$ arcs, with $b<\pi$, so their image lengths are bounded successively by $L,L^2,\ldots,L^m$ times $\mu(B)$, including the opposite-side initial comparison when needed. Thus the image distance ratio is at most $mL^{m+1}$. With $C=2L^2/q$, a continuous increasing control dominating both bounds is $\eta_d(t)=C(L+1)^2t^\alpha$ for $0\le t\le1$ and $\eta_d(t)=Ct(L+1)^{t+1}$ for $t\ge1$. The comparison $2d/\pi\le\chi\le d$ in step 1.2 gives chordal control $\eta_\chi(t)=(\pi/2)\eta_d(\pi t/2)$. The same subdivision and consecutive-interval argument on the line, without the arc/complement comparison, supplies metric control there as well. No external weak-to-full quasisymmetry theorem is needed. [F1, F3, step 1.2, given, construct, algebra]

3.1 Full chordal control implies the symmetric-triple test with $M=\max(1,\eta_\chi(1))$, because equal angular offsets less than $\pi$ give equal input chords. Conversely suppose the symmetric-triple test holds with constant $M$. Let $I,J$ be adjacent equal arcs of length $s\le\pi$ with common endpoint $x$, and put $u=\mu(I)$, $v=\mu(J)$. If $u,v\le\pi$, step 1.2 and the test give $u\le(\pi M/2)v$; the endpoint case $s=\pi$ follows by continuity from $s<\pi$. If $u>\pi$, an interior point $w$ of $I$ maps to the antipode of $h(x)$. Its input offset is some $t<s\le\pi$; the point $w'$ at the same offset on the opposite side of $x$ lies in $J$. The test gives $\chi(h(x),h(w'))\ge2/M$, whence $v\ge2/M$ and $u/v\le\pi M$. If $u\le\pi<v$, the ratio is at most one. Interchanging $I,J$ proves the reciprocal bound, so the arc definition holds with $L=\pi M$. This proves both equivalences with control depending only on the specified control data. Together with step 1.3 it proves composition and inversion for the original definitions. [F1, step 1.2, step 1.3, step 2.1, given, algebra]

4.1 For $a\in(0,1)$ real, take $\varphi_a(z)=(z-a)/(1-az)$. If $0<\theta<\pi$, write $\varphi_a(e^{i\theta})=e^{iA_a(\theta)}$ with $0<A_a(\theta)<\pi$, and set $A_a(0)=0$. Substituting $e^{i\theta}=(1+i\tan(\theta/2))/(1-i\tan(\theta/2))$ gives $\tan(A_a(\theta)/2)=((1+a)/(1-a))\tan(\theta/2)$. Hence $A_a(\theta)\to\pi$ as $a\uparrow1$ for every fixed $0<\theta<\pi$. For fixed $0<\delta<\pi/2$, the image lengths of $[0,\delta]$ and $[\delta,2\delta]$ are $A_a(\delta)$ and $A_a(2\delta)-A_a(\delta)$; these tend to $\pi$ and zero, respectively. Their ratio is unbounded, so the full disc-automorphism group has no common quasisymmetry constant. [F2, given, algebra] ∎
