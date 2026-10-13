---
id: thm-smooth-fixed-mass-mechanical-horseshoe
kind: theorem
title: "A smooth periodic one-degree-of-freedom oscillator with polynomial pulse forcing has stroboscopic chaos and a transverse homoclinic point"
status: draft
origin: pipeline
domain: mathematics
dependency_level: 6
deps: [def-metric-compactness, def-smooth-periodic-oscillator-pulse-model, lem-rescaled-pulse-map-is-c-one-close-to-kick, thm-explicit-perturbed-horseshoe-and-transversality, def-bilateral-symbol-and-bounded-sequence-space, def-stable-unstable-cones-and-line-slopes, def-cm-topologically-mixing-dense-periodic-and-sensitive-maps, def-metric-continuity, def-metric-convergence, def-abs-value, def-countable-choice, def-dependent-choice]
dependency_roles:
  def-metric-compactness: mathematical-premise
  def-smooth-periodic-oscillator-pulse-model: mathematical-premise
  lem-rescaled-pulse-map-is-c-one-close-to-kick: mathematical-premise
  thm-explicit-perturbed-horseshoe-and-transversality: mathematical-premise
  def-bilateral-symbol-and-bounded-sequence-space: mathematical-premise
  def-stable-unstable-cones-and-line-slopes: mathematical-premise
  def-cm-topologically-mixing-dense-periodic-and-sensitive-maps: mathematical-premise
  def-metric-continuity: mathematical-premise
  def-metric-convergence: mathematical-premise
  def-abs-value: mathematical-premise
  def-countable-choice: mathematical-premise
  def-dependent-choice: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "G. Teschl, Ordinary Differential Equations and Dynamical Systems, AMS Graduate Studies in Mathematics 140 (author's preliminary online edition, complete PDF), Sections 13.1-13.3, the Smale horseshoe and periodically forced planar systems"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-ode/ode.pdf"
    - title: "P. Cvitanović, R. Artuso, R. Mainieri, G. Tanner, G. Vattay, Chaos: Classical and Quantum (ChaosBook.org, edition 17.6.8, complete PDF), Chapter 15 Section 15.2, the complete Hénon horseshoe and its persistence"
      url: "https://chaosbook.org/chapters/ChaosBook.pdf"
    - title: "R. Devaney and Z. Nitecki, Shift automorphisms in the Hénon mapping, Communications in Mathematical Physics 67 (1979) 137-146, hyperbolic invariant sets of quadratic area-preserving maps"
      url: "https://projecteuclid.org/journals/communications-in-mathematical-physics/volume-67/issue-2/Shift-automorphisms-in-the-H%C3%A9non-mapping/cmp/1103905161.pdf"
verification:
  precheck: pass
---

## Statement

Grant the Axioms of Countable and Dependent Choice ([[def-countable-choice]], [[def-dependent-choice]]), inherited from the compactness and homeomorphism clauses of [[thm-explicit-perturbed-horseshoe-and-transversality]]. Fix $a\ge100$, let $w$, $\beta_\delta$, $P=\pi/2+\delta$ and the stroboscopic map $G_\delta$ be as in [[def-smooth-periodic-oscillator-pulse-model]], and let $X_\pm$, $S_\pm$, $D_\pm$ be the two-sign shift space of [[def-bilateral-symbol-and-bounded-sequence-space]]. Then there is $\delta_0>0$, depending only on $a$ and $w$, such that for every $0<\delta<\delta_0$:

1. there is a function $h_\delta:X_\pm\to\mathbb R^2$ that is a homeomorphism of $(X_\pm,D_\pm)$ onto a compact subset $\Lambda_\delta:=h_\delta(X_\pm)$ of $\mathbb R^2$ and satisfies $G_\delta\circ h_\delta=h_\delta\circ S_\pm$; in particular $\Lambda_\delta$ is compact and $G_\delta$-invariant, and $G_\delta|_{\Lambda_\delta}$ is conjugate to the shift;
2. $G_\delta|_{\Lambda_\delta}$ is continuous, topologically mixing, has dense periodic points and is sensitive with a positive constant; hence it is chaotic in the stated sense ([[def-cm-topologically-mixing-dense-periodic-and-sensitive-maps]]);
3. the two constant codes give two hyperbolic fixed points of $G_\delta$, one of each sign;
4. for every nonconstant code $s\in X_\pm$ that is constant outside a finite set, the point $h_\delta(s)$ is a transverse homoclinic point of the corresponding fixed point, and distinct such codes give distinct points ([[def-stable-unstable-cones-and-line-slopes]]).

All statements are about the explicit smooth $P$-periodic ordinary differential equation $q''=-q+\beta_\delta(t)(q^2-a)$ and its time-$P$ map; no empirical claim, measurement or physical assumption occurs.

## Facts & Assumptions

**Given:** The parameter $a\ge100$, the fixed normalized pulse $w$, and for each $\delta>0$ the periodic coefficient $\beta_\delta$, the Hamiltonian $H_\delta$, the rescaled pulse equation, the rotation $R_0$, the endpoint map $K_\delta$ and the stroboscopic map $G_\delta$ of [[def-smooth-periodic-oscillator-pulse-model]].

[F1] Structure of the model ([[def-smooth-periodic-oscillator-pulse-model]]): $\beta_\delta$ is $C^\infty$ and $P$-periodic with $\beta_\delta\ge0$ and $\int_0^P\beta_\delta=1$; the associated system is $q'=p$, $p'=-q+\beta_\delta(t)(q^2-a)$, smooth and locally Lipschitz in the state; and $G_\delta=K_\delta\circ R_0$ is its time-$P$ map.

[F2] Pulse approximation ([[lem-rescaled-pulse-map-is-c-one-close-to-kick]]): there are $\delta_1>0$ and $C_1,C_2<\infty$ depending only on $a$ and $w$ such that for $0<\delta\le\delta_1$ the maps $K_\delta$ and $G_\delta=K_\delta\circ R_0$ are defined and $C^\infty$ on a neighbourhood of $S=[-R-1,R+1]^2$, $R=\sqrt a+3$, have $\sup_S(|G_\delta-F|+\|DG_\delta-DF\|)\le C_1\delta$ with $F(q,p)=(p,p^2-a-q)$, $G_\delta$ is a symplectic $C^\infty$ diffeomorphism onto its image, and the conjugate map $H_\delta=S_w\circ G_\delta^{-1}\circ S_w$, $S_w(q,p)=(p,q)$, satisfies $\sup_S(|H_\delta-F|+\|DH_\delta-DF\|)\le C_2\delta$ and is likewise $C^\infty$ and diffeomorphic onto its image near $S$; moreover both $G_\delta$ and $H_\delta$ satisfy each of the six componentwise closeness inequalities displayed in the statement of [[thm-explicit-perturbed-horseshoe-and-transversality]] on $S$ with the common constant $\bar C\delta$, where $\bar C:=\max(1,C_1,C_2)$.

[F3] Under the Axioms of Countable and Dependent Choice ([[def-countable-choice]], [[def-dependent-choice]]), the perturbed horseshoe ([[thm-explicit-perturbed-horseshoe-and-transversality]]): for every $\varepsilon\le1/6$ with $C\varepsilon\le1$ and every $C^2$ diffeomorphism $G$ onto its image on a neighbourhood of $S$ satisfying the six closeness inequalities with constant $\varepsilon$ on $S$, and whose conjugate $S_w\circ G^{-1}\circ S_w$ does the same, the conclusions of clauses 1-4 above hold for $G$ under these same axioms with sensitivity constant $2(\sqrt a-3)$ and with all codes constant outside finite sets.

[F4] A homeomorphism here means a bijection $h_\delta$ whose forward and inverse maps are continuous in the stated metrics ([[def-metric-continuity]]); conjugacy means such a homeomorphism satisfying $G_\delta\circ h_\delta=h_\delta\circ S_\pm$. Compactness means that every open cover of the metric subspace has a finite subcover ([[def-metric-compactness]]). Chaos has the four properties in [[def-cm-topologically-mixing-dense-periodic-and-sensitive-maps]]. Hyperbolicity means that every eigenvalue of the fixed-point differential has modulus different from $1$; a transverse homoclinic point is a point different from the fixed point lying in both invariant sets, with injective $C^1$ curves in those sets through it and nonzero linearly independent tangents ([[def-stable-unstable-cones-and-line-slopes]], using metric convergence [[def-metric-convergence]]).



## Proof

**Proof technique:** direct; choose $\delta_0$ so that the pulse approximation puts $G_\delta$ and $H_\delta$ inside the hypotheses of the perturbed horseshoe theorem, then transfer that theorem's conclusions.

1.1 Choice of the threshold: put $\bar C:=\max(1,C_1,C_2)$ and let $\delta_0:=\min\bigl(\delta_1,\;1/(6\max(1,\bar C)),\;1/(\max(1,C)\max(1,\bar C))\bigr)>0$, so that for $0<\delta<\delta_0$ the number $\varepsilon:=\bar C\delta$ satisfies $0<\varepsilon\le1/6$ and $C\varepsilon\le1$. [given, F2, F3, algebra]

2.1 Hypotheses of the perturbed horseshoe for $G_\delta$: by [F2] (with the identification of $G_\delta$ as the time-$P$ map in [F1]), for $0<\delta<\delta_0$ the maps $G_\delta$ and $H_\delta=S_w\circ G_\delta^{-1}\circ S_w$ are $C^\infty$, hence $C^2$, diffeomorphisms onto their images on a neighbourhood of $S$, and both satisfy each of the six componentwise closeness inequalities of [F3] on $S$ with the common constant $\varepsilon=\bar C\delta$; in particular $H_\delta$ is defined and $C^2$ on a neighbourhood of $S$ with the same inequalities. Thus the hypotheses of [F3] are met with $\varepsilon=\bar C\delta$. [step 1.1, F1, F2, F3]

3.1 Conclusions: applying [F3] to $G=G_\delta$ gives clauses 1-4 for the stroboscopic map: the coding homeomorphism $h_\delta$ onto a compact invariant set $\Lambda_\delta$ with $G_\delta\circ h_\delta=h_\delta\circ S_\pm$, chaotic behaviour of $G_\delta|_{\Lambda_\delta}$, the two hyperbolic fixed points of the constant codes, and transverse homoclinic points for all codes constant outside a finite set, in the sense of [F4]. Distinct codes give distinct points because $h_\delta$ is injective. [step 2.1, F3, F4] ∎


## Remarks

- The threshold $\delta_0$ is explicit: it is the minimum of the pulse-approximation threshold and the two smallness conditions on $\max(1,C_1,C_2)\delta$ from [[thm-explicit-perturbed-horseshoe-and-transversality]]. No qualitative structural-stability theorem is used.

- The forced oscillator $q''=-q+\beta_\delta(t)(q^2-a)$ is a dimensionless mathematical model. A mechanical interpretation with a mass, a length scale and an angular frequency would multiply $q$ and $p$ by those scales and rescale the Hamiltonian; that interpretation, its units and its physical scope belong to the consuming physics pages and are not asserted here.

- Periodic driving supplies energy to the system; no energy conservation or autonomous structure is claimed. The horseshoe and homoclinic point concern the time-$P$ map and its compact invariant set.
