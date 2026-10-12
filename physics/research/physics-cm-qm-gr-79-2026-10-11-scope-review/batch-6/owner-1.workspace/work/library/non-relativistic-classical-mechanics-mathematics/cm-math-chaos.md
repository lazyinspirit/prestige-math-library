---
page: cm-math-chaos
title: Cm Math Chaos
status: draft
items: [def-bilateral-symbol-and-bounded-sequence-space, lem-bounded-bilateral-sequence-ball-is-complete, lem-coded-quadratic-recurrence-is-a-contraction, lem-symbol-locality-gives-coding-continuity, thm-henon-coded-invariant-set-is-conjugate-to-shift, lem-finite-word-deviations-give-homoclinic-orbits, def-stable-unstable-cones-and-line-slopes, lem-slope-graph-transforms-converge, lem-weighted-tail-contractions-give-c-one-curves, lem-tail-curve-tangents-and-homoclinic-transversality, lem-close-map-first-component-has-uniform-inverse, lem-perturbed-scalar-recurrence-root-bounds, thm-explicit-perturbed-horseshoe-and-transversality, def-smooth-periodic-oscillator-pulse-model, lem-rescaled-pulse-map-is-c-one-close-to-kick, thm-smooth-fixed-mass-mechanical-horseshoe]
examples: []
requires: ["cm-math-canonical","completeness-and-uniform-continuity","construction-of-r-via-cauchy-sequences"]
---

The chaotic layer of the non-relativistic classical mechanics collection, all
of it mathematics: the coded invariant set of the area-preserving quadratic
map, its conjugacy with the two-sign shift, its transverse homoclinic points,
and the persistence of all of this for maps $C^1$-close to the quadratic
family, realised by the stroboscopic map of a smooth periodically pulsed
oscillator. Every item carries `domain: mathematics`, depends only on
mathematical suppliers, and contains no postulate, measurement or empirical
statement; the mechanical reading of the pulsed oscillator belongs to the
consuming physics pages, which supply their own units and scope.

**Symbolic coding.** [[def-bilateral-symbol-and-bounded-sequence-space]]
introduces the two-sign bilateral shift space $X_\pm=\{-1,+1\}^{\mathbb Z}$,
its shift $S_\pm$, the isometry $\varphi$ onto the published two-symbol shift
space, and the closed ball $B_R$ of bounded bilateral sequences.
[[lem-bounded-bilateral-sequence-ball-is-complete]] proves that the bounded
functions on an arbitrary nonempty set form a complete metric space in the
supremum metric, that every closed ball $B_R$ is complete, and that $\varphi$
is a bijective isometry; this is the only point of contact with the published
shift space, through which all its metric and chaos properties transfer.
[[lem-coded-quadratic-recurrence-is-a-contraction]] then shows that the
square-root recurrence $x_n=s_n\sqrt{a+x_{n-1}+x_{n+1}}$ defines, for
$a\ge100$, a contraction of $B_R$ with constant $1/L$, $L=\sqrt{a-2R}$: each
code $s$ has a unique solution $x(s)$ with $\operatorname{sign}x_n(s)=s_n$,
$|x_n(s)|\ge L$ and $x_{n+1}+x_{n-1}=x_n^2-a$.
[[lem-symbol-locality-gives-coding-continuity]] shows that the $m$-th iterate
from the zero sequence sees only a window of $2m-1$ symbols, with uniform
error $2RL^{-m}$, and deduces that the coding map
$h(s)=(x_{-1}(s),x_0(s))$ is continuous and injective.

**The coded invariant set.** [[thm-henon-coded-invariant-set-is-conjugate-to-shift]]
proves that $F(x,y)=(y,y^2-a-x)$ satisfies $F\circ h=h\circ S_\pm$, that
$\Lambda=h(X_\pm)$ is invariant, that $h$ is a homeomorphism onto $\Lambda$
(using the Axiom of Countable Choice once, through the equivalence between
closed and sequentially closed subsets of $\mathbb R^2$), that $\Lambda$ is
sequentially compact and compact under $\mathrm{AC}_\omega+\mathrm{DC}$, and
that $F|_\Lambda$ is chaotic in the stated sense: continuous, topologically
mixing, dense periodic points, and sensitive with constant $2L$.
[[lem-finite-word-deviations-give-homoclinic-orbits]] identifies the constant
codes with the hyperbolic fixed points $(r_u,r_u)$, $r_u=1+u\sqrt{a+1}$, and
shows that every code that is constant outside a finite set but not constant
gives a homoclinic point of the corresponding fixed point, with uniform
two-sided convergence and infinitely many distinct such points.

**Cones, slope fields and coded curves.** [[def-stable-unstable-cones-and-line-slopes]]
fixes the vocabulary: the cones
$C^u_k=\{|u|\le k|v|\}$ and $C^s_k=\{|v|\le k|u|\}$ with
$C^u_k\cap C^s_k=\{0\}$, the slope maps
$\Phi_y(h)=1/(2y-h)$ and $\Psi_x(r)=1/(2x-r)$, invariant line fields along a
sequence, and the stable and unstable sets and transverse homoclinic points of
a bijection. [[lem-slope-graph-transforms-converge]] proves the cone
invariance and expansion, the slope contractions with factor
$\lambda^{-2}$, and the uniform convergence of the slope iterations to the
unique invariant line fields with slopes in $[-k,k]$.
[[lem-weighted-tail-contractions-give-c-one-curves]] is the abstract
half-tail machine: a weighted supremum contraction on one-sided sequences
produces, from a reference half-orbit, a $C^1$ family of solutions with
derivative bounded by $c/(1-q)$, and
[[lem-tail-curve-tangents-and-homoclinic-transversality]] applies it to the
quadratic family to obtain $C^1$ stable and unstable curves through every
finite-word homoclinic point, with tangents in the cones of aperture $1/2$,
and to identify the local stable set of each fixed point $(r_u,r_u)$ exactly
with the constructed graph over $|b-r_u|\le1/8$ (the local unstable set being
its reflection). Transversality of the two tangent lines then makes every
finite-word point a transverse homoclinic point.

**Persistence and the smooth realisation.** [[lem-close-map-first-component-has-uniform-inverse]]
solves the first component of a map close to $F$ by a contraction, giving a
unique inverse branch $V$ with $O(\varepsilon)$ estimates, and
[[lem-perturbed-scalar-recurrence-root-bounds]] shows that the perturbed
scalar recurrence $v^2-a-u-w+e(u,v,w)=0$ has, for each sign, exactly one root
in the corresponding window, with explicit margins $\ge3/4$, derivative bounds
$d\le2/13$, and the exact orbit form
$P_{u,w}(v)=0\iff B(u,V(u,v))=V(v,w)$.
[[thm-explicit-perturbed-horseshoe-and-transversality]] then constructs, for
every $C^2$ diffeomorphism $G$ satisfying six explicit closeness inequalities
with constant $\varepsilon\le1/6$ (and the same for its conjugate), a coded
invariant set $\Lambda_G=h_G(X_\pm)$ on which $G$ is conjugate to the shift
and chaotic with sensitivity constant $2l$, hyperbolic fixed points from the
constant codes, and transverse homoclinic points from the finite-word codes;
no structural-stability theorem is invoked.
[[def-smooth-periodic-oscillator-pulse-model]] defines the smooth
$P$-periodic pulsed oscillator $q''=-q+\beta_\delta(t)(q^2-a)$ with a
normalised bump pulse of strength $\int\beta_\delta=1$;
[[lem-rescaled-pulse-map-is-c-one-close-to-kick]] proves that the rescaled
pulse endpoint map converges to the kick
$K(q,p)=(q,p+q^2-a)$ in $C^1$ as $\delta\to0$, that the period map
$G_\delta=K_\delta\circ R_0$ is a symplectic $C^\infty$ diffeomorphism close
to $F$ with a conjugate map also close to $F$, and
[[thm-smooth-fixed-mass-mechanical-horseshoe]] concludes that for all
sufficiently small $\delta$ the stroboscopic map of this explicit smooth
oscillator has a coded chaotic invariant set and transverse homoclinic
points, under the inherited Axioms of Countable and Dependent Choice for
the coding homeomorphism and compactness.

The companion page [[cm-math-chaos-examples]] records explicit finite checks:
the constants and constant-code solutions at $a=100$, the invariant slope and
cone margins, the single-flip homoclinic code, the $\delta=0$ endpoint
computation $K\circ R_0=F$, and the perturbed root and margin numbers.
