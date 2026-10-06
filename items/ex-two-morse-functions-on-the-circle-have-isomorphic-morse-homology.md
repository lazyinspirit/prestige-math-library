---
id: ex-two-morse-functions-on-the-circle-have-isomorphic-morse-homology
kind: example
title: "Two Morse functions on the circle have isomorphic Morse homology"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: literature-derived
deps:
  - def-axiom-of-choice
  - def-canonical-morse-homology-of-a-closed-manifold
  - def-mod-two-morse-differential
  - def-morse-function-and-excellent-morse-function
  - def-morse-homology-of-a-morse-smale-pair
  - def-morse-smale-pair
  - def-nondegenerate-critical-point-nullity-index-and-coindex
  - def-signed-morse-differential-over-the-integers
  - lem-boundary-orientation-of-compactified-one-dimensional-morse-moduli
  - lem-unstable-orientations-induce-trajectory-moduli-orientations
  - thm-morse-homology-is-naturally-isomorphic-to-singular-homology
  - thm-reverse-continuation-is-an-inverse-on-morse-homology
justified_by: []
dependency_level: 15
proof_strategy: direct
sources:
  references:
    - title: "Michele Audin and Mihai Damian, Morse Theory and Floer Homology (complete author PDF of the English book, 628 pp.)"
      url: "https://audin.pages.math.unistra.fr/livres/audin-damian-en.pdf"
      locator: "Ch. 3 Sec. 3.1.c (the circle: the two trajectories cancel modulo two) and Exercise 15 (the integral complex of the circle), printed pp. 57-60 and 81, PDF pp. 67-70 and 91"
    - title: "Alexander F. Ritter, Part III Morse Homology (Cambridge lecture notes, complete author PDF, 115 pp.)"
      url: "https://people.maths.ox.ac.uk/ritter/morse-cambridge/combined.pdf"
      locator: "Lecture 19, Sec. 6.1, example (1): the differential of the circle complex vanishes and the Morse homology is that of S^1, PDF p. 87"
verification:
  precheck: pass
---

## Example

Assume the Axiom of Choice ([[def-axiom-of-choice]]). On $S^1$ consider the height function $f_0(\theta)=\cos\theta$ with maximum
$p$ at $\theta=0$ and minimum $q$ at $\theta=\pi$, and a Morse function $f_1$
with two maxima and two minima obtained from $f_0$ by a birth--death pair as
in the local calculation below
([[def-morse-function-and-excellent-morse-function]],
[[def-nondegenerate-critical-point-nullity-index-and-coindex]],
[[def-morse-smale-pair]]).

Then the Morse complex of $f_0$ is
$\Lambda\cdot p\xrightarrow{\ \partial\ }\Lambda\cdot q$ with
$\partial p=0$, since the two trajectories from $p$ to $q$ (the two arcs of
$S^1\setminus\{p,q\}$) carry opposite signs in the conventions of
[[lem-unstable-orientations-induce-trajectory-moduli-orientations]]: both arcs
inherit the same orientation from the orientation of the one-dimensional
unstable manifold $W^u(p)=S^1\setminus\{q\}$, while the flow direction is
opposite on the two arcs
([[def-signed-morse-differential-over-the-integers]],
[[def-mod-two-morse-differential]]). Hence $HM_0(f_0)=\Lambda$ and
$HM_1(f_0)=\Lambda$
([[def-morse-homology-of-a-morse-smale-pair]]); the same computation with the
extra acyclic summand gives $HM_*(f_1)\cong HM_*(f_0)$, and the continuation
isomorphism of [[thm-reverse-continuation-is-an-inverse-on-morse-homology]]
realizes this identification. Both groups agree with $H_*(S^1;\Lambda)$ under
[[thm-morse-homology-is-naturally-isomorphic-to-singular-homology]], so the
canonical Morse homology
[[def-canonical-morse-homology-of-a-closed-manifold]] is
$HM_0(S^1;\Lambda)=HM_1(S^1;\Lambda)=\Lambda$ and $HM_k=0$ for $k\ne0,1$.

## Facts & Assumptions

**Given:** The Axiom of Choice and the height function $f_0=\cos\theta$ on $S^1$ with maximum $p$ and minimum $q$, and the function $f_1$ obtained from it by a birth--death pair.

[F1] On the circle both $f_0$ and $f_1$ are Morse, and both pairs are Morse--Smale with respect to the round metric: unstable and stable manifolds of the (at most one-dimensional) trajectory spaces meet transversally ([[def-morse-smale-pair]], [[def-morse-function-and-excellent-morse-function]]).

[F2] The two trajectories from $p$ to $q$ are the two arcs of $S^1\setminus\{p,q\}$; both are contained in the one-dimensional unstable manifold $W^u(p)$ and inherit its orientation, while the flow direction is opposite on the two arcs; by comparison with the flow orientation their signs are opposite. The unparametrized moduli space here is zero-dimensional ([[lem-unstable-orientations-induce-trajectory-moduli-orientations]]).

[F3] Because the only two critical points of $f_0$ have indices $1$ and $0$, the Morse complex of $f_0$ has no other differentials; the signed count of [F2] makes $\partial p=0$ over $\mathbb Z$ and $2\equiv0$ over $\mathbb Z/2$ ([[def-signed-morse-differential-over-the-integers]], [[def-mod-two-morse-differential]]).

[F4] After the explicit basis change below, the birth--death pair adds an acyclic two-term summand to the complex of $f_0$, so $HM_*(f_1)\cong HM_*(f_0)$; the continuation map between the two Morse--Smale pairs is an isomorphism on homology (the local calculation below, [[thm-reverse-continuation-is-an-inverse-on-morse-homology]]).

[F5] For a closed manifold the Morse homology of any Morse--Smale pair is isomorphic to singular homology, and the canonical Morse homology is well defined up to canonical isomorphism ([[thm-morse-homology-is-naturally-isomorphic-to-singular-homology]], [[def-canonical-morse-homology-of-a-closed-manifold]]).

## Verification

**Proof technique:** direct.

1.1 For $f_1$, enumerate the critical points in circular order as $p,q_1,c,q_2$, with $p,c$ maxima and $q_1,q_2$ minima. Orient both unstable intervals in the direction of increasing angle. The two outgoing arcs at each maximum then give $\partial p=q_1-q_2$ and $\partial c=q_2-q_1$ (over $\mathbb Z/2$ replace minus by plus). In the integral bases $P=p+c$, $C=c$, $Q=q_1$, $B=q_2-q_1$, one has $\partial P=0$, $\partial C=B$. These are invertible basis changes over $\mathbb Z$ and over the stated coefficient rings. The pair $C\mapsto B$ has contracting homotopy $B\mapsto C$, so the complex is the direct sum of the minimal zero-differential complex on $P,Q$ and this acyclic pair. [F2, F3, given, algebra]

1.2 By [F1] both pairs are Morse--Smale, so the Morse complexes are defined. By [F3] the Morse complex of $f_0$ is $\Lambda p\to\Lambda q$ with $\partial p=0$, because the only differential is the signed count of the two arcs from $p$ to $q$ and the two signs cancel. [F1, F2, F3, given]

2.1 Hence $H_1(f_0)=\ker\partial_1=\Lambda p$ and $H_0(f_0)=\Lambda q/\operatorname{im}\partial_1=\Lambda q$, so $HM_0(f_0)=\Lambda=HM_1(f_0)$ and $HM_k(f_0)=0$ for $k\ne0,1$. [step 1.2, algebra]

3.1 By [F4] the birth--death pair adds an acyclic summand, so the homology of the complex of $f_1$ is the same: $HM_*(f_1)\cong HM_*(f_0)$, and the continuation isomorphism realizes the identification. [F4, step 2.1]

4.1 By [F5] both computations agree with the singular homology of the circle, $H_0(S^1;\Lambda)=H_1(S^1;\Lambda)=\Lambda$ and $H_k=0$ otherwise, so the canonical Morse homology of $S^1$ is $\Lambda$ in degrees $0$ and $1$; this is the claimed comparison of the minimal and the stabilised function. [F5, step 3.1] ∎
