---
id: thm-continuation-count-is-a-chain-map
kind: theorem
title: "The continuation count is a chain map"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [def-continuation-chain-map, thm-continuation-trajectories-are-compact-up-to-breaking, lem-gluing-continuation-solutions-gives-collar-ends, lem-orientation-lines-orient-continuation-moduli-spaces, def-mod-two-morse-differential, def-signed-morse-differential-over-the-integers, lem-boundary-of-a-compact-one-manifold-has-even-cardinality, lem-oriented-boundary-of-a-compact-oriented-one-manifold-has-zero-signed-count, def-morse-homology-of-a-morse-smale-pair, def-chain-complex-in-an-abelian-category, def-graded-morphism-of-chain-complexes, def-axiom-of-choice]
justified_by: []
dependency_level: 9
proof_strategy: direct
sources:
  references:
    - title: "Alexander F. Ritter, Part III Morse Homology (Cambridge lecture notes, complete author PDF, 115 pp.)"
      url: "https://people.maths.ox.ac.uk/ritter/morse-cambridge/combined.pdf"
      locator: "Lecture 20, Sec. 6.3 (3): the chain-map computation phi o partial^- = partial^+ o phi from the parity of the boundary of C(p^-,q^+), PDF pp. 92-93"
    - title: "Michael Hutchings, Math 242 Lecture 21: Invariance via continuation maps (notes by Jackson Van Dyke, complete PDF)"
      url: "https://web.ma.utexas.edu/users/vandyke/notes/242_notes/lecture21.pdf"
      locator: "Lecture 21, Lemma 1 with the boundary formula for m^V(p_1,p_0) and the mod-two computation, pp. 2-3"
    - title: "Udhav Fowdar, A Functional Analytic Approach to Morse Homology (UCL 4th-year project, complete PDF, 93 pp.)"
      url: "https://www.mathematik.hu-berlin.de/~wendl/pub/Fowdar.pdf"
      locator: "Ch. 8: the commutative square with the characteristic-sign bookkeeping, pp. 73-75"
    - title: "Michele Audin and Mihai Damian, Morse Theory and Floer Homology (complete author PDF of the English book, 628 pp.)"
      url: "https://audin.pages.math.unistra.fr/livres/audin-damian-en.pdf"
      locator: "Ch. 3 Sec. 3.4, first step: the block matrix form of the differential in the splitting and the identity Phi^F partial_{X_0} = partial_{X_1} Phi^F, printed p. 75, PDF p. 85"
verification:
  precheck: pass
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $(f_s,g_s)$ be a
regular continuation datum from $(f^-,g^-)$ to $(f^+,g^+)$ on a closed manifold
$M$, let $\Phi$ be its continuation map ([[def-continuation-chain-map]]) and
let $\partial^\pm$ be the Morse differentials over $\Lambda=\mathbb Z/2$ and
$\Lambda=\mathbb Z$ ([[def-mod-two-morse-differential]],
[[def-signed-morse-differential-over-the-integers]]).

Then $\Phi$ is a chain map:
$$\Phi_{k-1}\circ\partial^-_k=\partial^+_k\circ\Phi_k\qquad\text{for every }k,$$
in both coefficient cases, with any fixed orientation lines in the integral
case. Consequently $\Phi$ induces a homomorphism
$$[\Phi]:HM_k(f^-,g^-;\Lambda)\to HM_k(f^+,g^+;\Lambda)$$
on Morse homology ([[def-morse-homology-of-a-morse-smale-pair]],
[[def-chain-complex-in-an-abelian-category]],
[[def-graded-morphism-of-chain-complexes]]).

## Facts & Assumptions

**Given:** The Axiom of Choice, a regular continuation datum $(f_s,g_s)$ with
continuation map $\Phi$, and the two Morse differentials.

[F1] For critical points with index drop one the compactification is a
compact one-manifold with boundary, whose boundary is the disjoint union of
the once-broken products $\mathcal M^-(p,a)\times\mathcal C(a,q)$ and
$\mathcal C(p,b)\times\mathcal M^+(b,q)$ with the prescribed index conditions,
and each end moduli space occurring is finite
([[thm-continuation-trajectories-are-compact-up-to-breaking]],
[[lem-gluing-continuation-solutions-gives-collar-ends]]).

[F2] A compact one-manifold has an even number of boundary points
([[lem-boundary-of-a-compact-one-manifold-has-even-cardinality]]), and a
compact oriented one-manifold has signed boundary count zero
([[lem-oriented-boundary-of-a-compact-oriented-one-manifold-has-zero-signed-count]]).

[F3] With the orientation conventions of
[[lem-orientation-lines-orient-continuation-moduli-spaces]], the sign of a
once-broken boundary point of the type $(\gamma^-,v)$ is
$\tau(\gamma^-)\tau(v)$ and the sign of one of the type $(v,\gamma^+)$ is
$-\tau(v)\tau(\gamma^+)$, the relative sign being the orientation convention
of the collar interval; the differential conventions of
[[def-signed-morse-differential-over-the-integers]] are then such that the
signed boundary sum of the boundary points of
$\overline{\mathcal C}(p,q)$ is the coefficient of $q$ in
$(\Phi_{k-1}\circ\partial^-_k-\partial^+_k\circ\Phi_k)(p)$.

[F4] The differentials are the trajectory counts of
[[def-mod-two-morse-differential]] and
[[def-signed-morse-differential-over-the-integers]]; over $\mathbb Z/2$ all
signs are absent, and the continuation map is the count of
[[def-continuation-chain-map]]; this dictionary identifies the two sides of
the coefficient computations below. Both maps are graded: $\partial^\pm$ and
$\Phi$ lower, respectively preserve, the index, so coefficients vanish
automatically outside the two cases considered.

## Proof

**Proof technique:** direct.

1.1 Fix $k$, a generator $p\in\operatorname{Crit}_k(f^-)$ and a generator $q\in\operatorname{Crit}_{k-1}(f^+)$, so that $\operatorname{ind}(p)-\operatorname{ind}(q)=1$. By [F1] the compactification $\overline{\mathcal C}(p,q)$ is a compact one-manifold with boundary, and its boundary is the disjoint union of the once-broken products $\mathcal M^-(p,a)\times\mathcal C(a,q)$ and $\mathcal C(p,b)\times\mathcal M^+(b,q)$, each of them finite. [F1, given]

2.1 Over $\mathbb Z/2$, the boundary of $\overline{\mathcal C}(p,q)$ has an even number of points by [F2]; counting the boundary points by their type gives $\sum_a\#\mathcal M^-(p,a)\#\mathcal C(a,q)+\sum_b\#\mathcal C(p,b)\#\mathcal M^+(b,q)\equiv0$, which by the dictionary of [F4] is the $q$-coefficient of $\Phi_{k-1}\partial^-p+\partial^+_k\Phi p$; over $\mathbb Z/2$ this sum vanishes, which is the asserted identity in the mod-two case. [F2, F4, step 1.1]

2.2 Over $\mathbb Z$, [F2] makes the signed boundary count of the oriented compactification vanish; by [F3] the boundary signs are the products of the piece signs, and the differential and orientation normalization identifies this signed count with the $q$-coefficient of $(\Phi_{k-1}\partial^--\partial^+_k\Phi)(p)$, which therefore vanishes. [F2, F3, step 1.1]

3.1 Steps 2.1 and 2.2 cover every pair $(p,q)$ of generators with $\operatorname{ind}(p)=\operatorname{ind}(q)+1$, and for all other pairs both sides of the identity have zero coefficient by the grading recorded in [F4]; extending linearly over the generators gives $\Phi_{k-1}\circ\partial^-_k=\partial^+_k\circ\Phi_k$ for every $k$ over both coefficient rings, i.e. a degree-zero morphism of chain complexes. [F4, step 2.1, step 2.2]

4.1 A morphism of chain complexes induces a homomorphism on homology by the universal property of the homology functor, so $[\Phi]:HM_k(f^-,g^-;\Lambda)\to HM_k(f^+,g^+;\Lambda)$ is well defined; this is the last assertion. [step 3.1] ∎
