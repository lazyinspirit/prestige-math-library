---
id: lem-gluing-continuation-solutions-gives-collar-ends
kind: lemma
title: "Gluing continuation solutions gives collar neighbourhoods of the broken ends"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-continuation-trajectories-are-compact-up-to-breaking, lem-metric-end-flow-matching-gives-local-broken-charts, def-broken-continuation-trajectory, def-regular-continuation-datum-between-morse-smale-pairs, def-topological-manifold-with-boundary, def-axiom-of-choice]
justified_by: []
dependency_level: 6
proof_strategy: direct
sources:
  references:
    - title: "Udhav Fowdar, A Functional Analytic Approach to Morse Homology (UCL 4th-year project, complete PDF, 93 pp.)"
      url: "https://www.mathematik.hu-berlin.de/~wendl/pub/Fowdar.pdf"
      locator: "Sec. 6, Theorem 6.10 (continuation gluing), printed p.53, and Sec. 7, Theorems 7.5-7.6: gluing of time-dependent and lambda-parametrised trajectories is a diffeomorphism onto a collar, orientation-compatible, pp. 43-68"
    - title: "Alexander F. Ritter, Part III Morse Homology (Cambridge lecture notes, complete author PDF, 115 pp.)"
      url: "https://people.maths.ox.ac.uk/ritter/morse-cambridge/combined.pdf"
      locator: "Lecture 18, Sec. 5.5 (linear gluing isomorphisms) and Lecture 20, Sec. 6.3 (3) (the two breaking cases are exactly the boundary), PDF pp. 81-84 and 92-93"
    - title: "Liviu I. Nicolaescu, An Invitation to Morse Theory, 2nd ed. (complete author PDF, 291 pp.)"
      url: "https://www3.nd.edu/~lnicolae/Morse2nd.pdf"
      locator: "Sec. 4.4, Theorem 4.4.5 and Lemmas 4.4.8-4.4.9 (the local gluing model producing collar neighbourhoods of the strata), read at PDF pp. 194-202"
verification:
  precheck: pass
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $(f_s,g_s)$ be a
regular continuation datum on a closed manifold $M$, let
$\operatorname{ind}(p)-\operatorname{ind}(q)=1$, and let
$$\beta=(\gamma^-,v)\in\mathcal M^-(p,a)\times\mathcal C(a,q),\qquad \operatorname{ind}(a)=\operatorname{ind}(q),$$
or
$$\beta=(v,\gamma^+)\in\mathcal C(p,b)\times\mathcal M^+(b,q),\qquad \operatorname{ind}(b)=\operatorname{ind}(p),$$
be a once-broken continuation trajectory ([[def-broken-continuation-trajectory]]).
Then there are $\delta>0$ and a continuous injection
$\psi:[0,\delta)\to\overline{\mathcal C}(p,q)$ with
$$\psi(0)=\beta,\qquad \psi(t)\in\mathcal C(p,q)\ (t>0),$$
that is smooth on $(0,\delta)$, whose parameter $t$ is a neck-length (gluing)
parameter, and whose image is a neighbourhood of $\beta$; moreover every
sequence in $\mathcal C(p,q)$ converging geometrically to $\beta$ lies
eventually in $\psi((0,\delta))$. Consequently every once-broken boundary
point of the compactification of
[[thm-continuation-trajectories-are-compact-up-to-breaking]] has a one-sided
collar chart, and $\overline{\mathcal C}(p,q)$ is a compact one-dimensional
topological manifold with boundary whose boundary is exactly the disjoint
union of these once-broken products.

## Facts & Assumptions

**Given:** The Axiom of Choice, the stated regular datum and index-drop-one once-broken configuration.

[F1] Its geometric compactification is compact metrizable, and the only added configurations are the two displayed once-broken products. The rigid middle and metric-end tail sets are finite ([[thm-continuation-trajectories-are-compact-up-to-breaking]], [[def-broken-continuation-trajectory]]).

[F2] The local exact flow-matching chart has one coordinate $\rho=1/T$ at a single break, with a fixed-time anchor adjacent to the unshifted middle. It includes constant connectors. The chart is a homeomorphism onto a geometric neighbourhood and every sufficiently close trajectory has the unique inverse crossing-time coordinate ([[lem-metric-end-flow-matching-gives-local-broken-charts]]).

[F3] The regular unbroken space has dimension one ([[def-regular-continuation-datum-between-morse-smale-pairs]]).

## Proof

**Proof technique:** direct.

1.1 At the specified once-broken point, the two rigid piece spaces have singleton local charts by [F1]. The broken-stratum chart $B$ of [F2] is therefore a point. Its one-neck matching chart is a homeomorphism $\psi:[0,\delta)\to U$, taking zero to the broken point and positive $\rho$ to exact unbroken solutions. It is smooth on the positive interval. No middle translation is used: the passage ends, or starts in the positive-break case, at the fixed-time anchor. This remains valid if the middle is a constant solution at the intermediate critical point. [F1, F2, given, construct]

2.1 By the inverse coverage of [F2], any ordinary trajectory geometrically sufficiently close to the broken point has the unique entry-crossing time relative to that anchor, hence the unique $T$ and $\rho=1/T$. It is the matched trajectory $\psi(\rho)$. Thus the image is a neighbourhood, the map is injective, and every sequence converging to that broken point lies eventually in its positive image. [F2, step 1.1]

3.1 Apply steps 1.1–2.1 at each added point. By [F1] these are exactly the once-broken products, and every such point has a half-interval neighbourhood. The unbroken points have ordinary one-dimensional charts by [F3]. Together with compactness and metrizability of [F1], these charts make the compactification a compact one-dimensional topological manifold with boundary in the sense of [[def-topological-manifold-with-boundary]], with the stated boundary and collars. [F1, F3, step 1.1, step 2.1] ∎
