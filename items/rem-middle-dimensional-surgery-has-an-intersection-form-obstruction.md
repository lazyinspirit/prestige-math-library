---
id: "rem-middle-dimensional-surgery-has-an-intersection-form-obstruction"
kind: "remark"
title: "Middle-dimensional surgery has an intersection-form obstruction"
status: draft
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
dependency_level: 7
deps: ["lem-p-surgery-kills-the-represented-pi-p-class-when-p-is-below-the-middle", "prop-homology-effect-of-surgery-away-from-the-middle-dimensions", "lem-framing-obstruction-lives-in-the-normal-bundle-of-the-surgery-sphere", "prop-surgery-on-a-normal-map-preserves-its-normal-bordism-class", "def-degree-one-normal-map-for-the-surgery-program", "def-geometric-intersection-pairing-on-a-closed-oriented-manifold", "def-self-intersection-number-of-an-oriented-submanifold", "thm-self-intersection-is-the-euler-number-of-the-normal-bundle"]
justified_by: []
aliases: []
provenance:
  statement: "literature-derived"
  proof: "not-applicable"
verification:
  precheck: "n/a"
sources:
  references:
    - title: "Wolfgang Lück, A Basic Introduction to Surgery Theory (lecture notes, Münster, 27 October 2004)"
      url: "https://him-lueck.uni-bonn.de/data/ictp.pdf"
      locator: "Chapter 4 introduction and §4.1, printed pp. 79-85 (the self-intersection element mu of an immersion, Theorem 4.8: representability by an embedding iff mu(f,w)=0 for k>=3; Remark 4.9: the condition dim M>=5 gives k>=3)"
    - title: "Andrew Ranicki, Algebraic and Geometric Surgery (Oxford Mathematical Monographs, 2002; electronic copy)"
      url: "https://math.uchicago.edu/~shmuel/tom-readings/ranicki-intro"
      locator: "Chapter 10 §10.1, Definition 10.6, printed pp. 196-197 (a b-framed embedding includes the extension of normal data over the trace); printed pp. 193-194 (in the middle dimension x is in general not represented by a framed embedding, the obstruction being a self-intersection mu(x); the surgery obstruction takes values in L_m(Z[pi_1(X)])); Chapter 11 §11.2 and Chapter 12 §§12.1-12.4, printed pp. 265-266, 270, 281-283 (quadratic kernel forms in even dimensions and kernel formations in odd dimensions, Definitions 12.1, 12.7, 12.27)"
    - title: "C. T. C. Wall, Differential Topology (Cambridge Studies in Advanced Mathematics 156, Cambridge University Press 2016)"
      url: "https://www.math.auckland.ac.nz/~hekmati/Books/Wall.pdf"
      locator: "Chapter 7 §7.1, printed pp. 196-198 (the effect of a modification on homology is not confined to one degree; the four exact sequences of the pairs)"
---

## Remark

The improvement results of this page are stated below the middle: they require
a framed embedded representative of the class to be killed and the inequality
$p\le q-2$, equivalently $2p+2\le m$
([[lem-p-surgery-kills-the-represented-pi-p-class-when-p-is-below-the-middle]]).
When the middle dimension is reached, the following genuinely new phenomena
appear.

(i) A kernel class need not be representable by an embedded sphere with trivial
normal bundle. The primary obstruction to representing a middle-dimensional
class by a framed embedding is a self-intersection class $\mu$ of the
corresponding immersion, taking values in a quotient of the group ring of
$\pi_1$, and the framing obstruction of the framing lemma of this page can be
nonzero ([[lem-framing-obstruction-lives-in-the-normal-bundle-of-the-surgery-sphere]]).
This is the content of the sources' representability criterion: for a pointed immersion $S^k\to M^{2k}$ into a compact connected manifold, with basepoints, a whisker, and an orientation at the ambient basepoint supplied, $k\ge3$ gives regular homotopy to an embedding if and only if the self-intersection element vanishes (Lück, Theorem 4.8, printed pp. 84–85). The complementary-dimension condition makes its Whitney disk construction available. The library does not prove
the self-intersection criterion here; it is recorded from the cited sources as
the exact stopping point.

(ii) Even when a class can be killed, the middle-dimensional intersection form
need not be preserved: middle-dimensional surgery can change it, as the B-page
counterexample computes for $S^2\times S^2$, using the geometric intersection
pairing of [[def-geometric-intersection-pairing-on-a-closed-oriented-manifold]]
and the self-intersection/Euler-number identification of
[[thm-self-intersection-is-the-euler-number-of-the-normal-bundle]] and
[[def-self-intersection-number-of-an-oriented-submanifold]].

(iii) In the classical oriented high-dimensional programme ($m\ge5$) over a finite oriented $m$-dimensional Poincaré complex $X$, first perform surgery below the middle. For $m=2n$, the remaining obstruction is represented by the quadratic kernel form: the middle-dimensional intersection pairing together with its self-intersection refinement. For $m=2n+1$, it is represented by a quadratic kernel formation, a nonsingular quadratic form with an ordered pair of lagrangians obtained from a middle-dimensional splitting; it is not merely a refinement of a pairing on a single middle homology group. In either parity the surgery obstruction lies in $L_m(\mathbb Z[\pi_1(X)])$ and need not vanish. These algebraic constructions are recorded from Ranicki, Chapters 11–12, and are not developed here
([[def-degree-one-normal-map-for-the-surgery-program]],
[[prop-surgery-on-a-normal-map-preserves-its-normal-bordism-class]]). The
homology-effect proposition of this page
([[prop-homology-effect-of-surgery-away-from-the-middle-dimensions]]) describes
which degrees can change and is not a statement about the middle-dimensional
form.

The geometric input for ordinary sphere surgery is a framed embedded
representative. In the normal-map setting of (iii), the framing must also be
compatible with the normal data: one must supply a null-homotopy $h$ of
$f\circ\varphi_0$ and, for the chosen framing and resulting extension
$F:W_\varphi\to X$, a stable bundle isomorphism
$B:\nu_{W_\varphi}\to F^*\xi$ extending $b$, where $\xi$ is the target normal
bundle datum ($\xi=\nu_X$ in the manifold-target proposition cited above).
The trace framing must be orientation-compatible. This is the $b$-framed
surgery datum of that proposition, as in Ranicki, Definition 10.6; a framing
and a null-homotopy alone do not supply $B$. The page's homotopy comparison
with $M_\varphi$ retains the below-middle bound $p\le q-2$; no such general
comparison in the middle dimension is asserted here.
