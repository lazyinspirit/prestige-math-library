---
id: thm-homotopic-continuation-data-give-chain-homotopic-maps
kind: theorem
title: "Homotopic continuation data give chain homotopic maps"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [def-two-parameter-continuation-homotopy, def-continuation-chain-map, thm-continuation-count-is-a-chain-map, thm-continuation-trajectories-are-compact-up-to-breaking, lem-gluing-continuation-solutions-gives-collar-ends, lem-orientation-lines-orient-continuation-moduli-spaces, lem-boundary-of-a-compact-one-manifold-has-even-cardinality, lem-oriented-boundary-of-a-compact-oriented-one-manifold-has-zero-signed-count, def-chain-homotopy, thm-chain-homotopic-maps-induce-the-same-map-on-homology, def-mod-two-morse-chain-group, def-mod-two-morse-differential, def-signed-morse-differential-over-the-integers, def-morse-homology-of-a-morse-smale-pair, def-chain-complex-in-an-abelian-category, def-graded-morphism-of-chain-complexes, def-axiom-of-choice]
justified_by: []
dependency_level: 10
proof_strategy: direct
sources:
  references:
    - title: "Alexander F. Ritter, Part III Morse Homology (Cambridge lecture notes, complete author PDF, 115 pp.)"
      url: "https://people.maths.ox.ac.uk/ritter/morse-cambridge/combined.pdf"
      locator: "Lecture 20, Sec. 6.3 (4) with the key ideas (3): the exceptional parameters, the rogue trajectories of virtual dimension -1, the definition of K by counting them and the identity phi^0 - phi^1 = partial^+ K + K partial^-, PDF pp. 95-96"
    - title: "Michael Hutchings, Math 242 Lecture 21: Invariance via continuation maps (notes by Jackson Van Dyke, complete PDF)"
      url: "https://web.ma.utexas.edu/users/vandyke/notes/242_notes/lecture21.pdf"
      locator: "Lecture 21, Sec. 1.2, Lemma 2: the compactified parametrized moduli space counts partial K, K partial and phi_0 - phi_1, pp. 3-4"
    - title: "Udhav Fowdar, A Functional Analytic Approach to Morse Homology (UCL 4th-year project, complete PDF, 93 pp.)"
      url: "https://www.mathematik.hu-berlin.de/~wendl/pub/Fowdar.pdf"
      locator: "Ch. 8, Lemma 8.2 with the four cases of connected components of the parametrized one-manifold and the characteristic-sign relations, pp. 75-78"
verification:
  precheck: pass
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $(f^0_s,g^0_s)$ and
$(f^1_s,g^1_s)$ be regular continuation data from $(f^-,g^-)$ to
$(f^+,g^+)$ on a closed manifold $M$, let $(f^\lambda_s,g^\lambda_s)$ be a
regular two-parameter datum between them
([[def-two-parameter-continuation-homotopy]]), and let $\Phi^0,\Phi^1$ be the
continuation maps of the two data ([[def-continuation-chain-map]]).

Then there is a homomorphism of graded modules
$K=K_k:CM_k(f^-,g^-;\Lambda)\to CM_{k+1}(f^+,g^+;\Lambda)$, defined on
generators $p\in\operatorname{Crit}_k(f^-)$ by counting the zero-dimensional
part of the parametrized moduli space,
$$K_k(p)=\!\!\sum_{q\in\operatorname{Crit}_{k+1}(f^+)}\!\!\Bigl(\sum_{(\lambda,u)\in\mathcal P_0(p,q)}\tau(\lambda,u)\Bigr)q,$$
where $\mathcal P_0(p,q)$ is the finite set of points of $\mathcal P(p,q)$ of
virtual dimension $0$ (for $\Lambda=\mathbb Z/2$ the signs are dropped and the
count is taken mod $2$; for $\Lambda=\mathbb Z$ the signs are those of
[[lem-orientation-lines-orient-continuation-moduli-spaces]], including the
rogue trajectories at exceptional parameters), such that $K$ is a chain
homotopy from $\Phi^0$ to $\Phi^1$ ([[def-chain-homotopy]]):
$$\Phi^0_k-\Phi^1_k=\partial^+_{k+1}\circ K_k+K_{k-1}\circ\partial^-_k\qquad\text{for every }k.$$
Consequently $[\Phi^0]=[\Phi^1]$ on Morse homology
([[thm-chain-homotopic-maps-induce-the-same-map-on-homology]]); in particular
the continuation isomorphism of [[thm-continuation-count-is-a-chain-map]]
depends only on the two end pairs, not on the chosen regular continuation
datum.

## Facts & Assumptions

**Given:** The Axiom of Choice, two regular continuation data with maps $\Phi^0,\Phi^1$, and a regular two-parameter datum between them.

[F1] The parametrized moduli space $\mathcal P(p,q)$ is, for the regularized family, a smooth manifold of dimension $\operatorname{ind}(p)-\operatorname{ind}(q)+1$, and the zero-dimensional part $\mathcal P_0(p,q)$ is finite; for $\operatorname{ind}(p)-\operatorname{ind}(q)=0$ the compactified $\mathcal P(p,q)$ is a compact one-manifold with boundary whose boundary consists of the two end copies $\mathcal C^0(p,q)$, $\mathcal C^1(p,q)$ and the exceptional configurations: rogue trajectories of virtual dimension $-1$ at exceptional parameters, multiplied by rigid zero-dimensional Morse trajectories of the corresponding end pair ([[def-two-parameter-continuation-homotopy]], [[thm-continuation-trajectories-are-compact-up-to-breaking]], [[lem-gluing-continuation-solutions-gives-collar-ends]]).

[F2] A compact one-manifold has an even number of boundary points ([[lem-boundary-of-a-compact-one-manifold-has-even-cardinality]]), and a compact oriented one-manifold has vanishing signed boundary count ([[lem-oriented-boundary-of-a-compact-oriented-one-manifold-has-zero-signed-count]]).

[F3] The orientations of the boundary points are the products of the signs of their factors: at the exceptional parameters the sign of a rogue trajectory times a rigid Morse trajectory is the product, and the two end copies carry the signs $\tau$ of the corresponding continuation moduli spaces ([[lem-orientation-lines-orient-continuation-moduli-spaces]]).

[F4] The differentials of the two ends are the trajectory counts of [[def-mod-two-morse-differential]] and [[def-signed-morse-differential-over-the-integers]]; the continuation maps are the counts of [[def-continuation-chain-map]]; so the exceptional configurations compute exactly the coefficients of $\partial^+_{k+1}\circ K_k$ (the rogue-to-$q$ contributions) and $K_{k-1}\circ\partial^-_k$ (the $p$-to-rogue contributions), while the two end copies compute the coefficients of $\Phi^0_k-\Phi^1_k$ ([[def-chain-complex-in-an-abelian-category]], [[def-graded-morphism-of-chain-complexes]], [[def-mod-two-morse-chain-group]]).

[F5] Chain-homotopic morphisms of chain complexes induce the same map on homology ([[def-chain-homotopy]], [[thm-chain-homotopic-maps-induce-the-same-map-on-homology]], [[def-morse-homology-of-a-morse-smale-pair]]).

## Proof

**Proof technique:** direct.

1.1 Fix $k$, a generator $p\in\operatorname{Crit}_k(f^-)$ and a generator $q\in\operatorname{Crit}_k(f^+)$, so that $\operatorname{ind}(p)-\operatorname{ind}(q)=0$ and $\mathcal P(p,q)$ has virtual dimension $1$. By [F1] its compactification is a compact one-manifold with boundary, and its boundary points are of three kinds: the end copies contributing the solutions of the two given data, the exceptional configurations with a rogue trajectory from $p$ to some $b$ of index $k+1$ followed by a rigid Morse trajectory from $b$ to $q$ of index drop one, and the exceptional configurations with a rigid Morse trajectory from $p$ to some $a$ of index $k-1$ followed by a rogue trajectory from $a$ to $q$. [F1, given]

2.1 The boundary count of step 1.1 vanishes: over $\mathbb Z/2$ the number of boundary points is even by [F2], and over $\mathbb Z$ the signed boundary count vanishes by [F2] with the product signs of [F3]. In both cases the count is therefore zero. [F2, F3, step 1.1]

2.2 The dictionary of [F4] identifies the three kinds of boundary points with the coefficients: the end copies with $\Phi^0_k(p)-\Phi^1_k(p)$ evaluated at $q$ (with the orientation convention of the interval $[0,1]$ for the two ends, which is the convention in which the chain-homotopy identity has the stated sign), the rogue-then-Morse configurations with the $q$-coefficient of $\partial^+_{k+1}K_k(p)$, and the Morse-then-rogue configurations with the $q$-coefficient of $K_{k-1}\partial^-_k(p)$. [F4, step 1.1]

3.1 Combining steps 2.1 and 2.2 shows that the $q$-coefficient of $\Phi^0_k(p)-\Phi^1_k(p)-\partial^+_{k+1}K_k(p)-K_{k-1}\partial^-_k(p)$ vanishes for all generators; extending linearly gives the chain-homotopy identity $\Phi^0_k-\Phi^1_k=\partial^+_{k+1}\circ K_k+K_{k-1}\circ\partial^-_k$ for every $k$. [step 2.1, step 2.2, algebra]

4.1 By [F5] chain-homotopic chain maps induce the same homomorphism on homology; hence $[\Phi^0]=[\Phi^1]$, and the continuation isomorphism on homology depends only on the two end pairs and not on the chosen regular continuation datum. [F5, step 3.1] ∎
