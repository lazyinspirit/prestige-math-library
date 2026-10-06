---
id: thm-homotopic-continuation-data-give-chain-homotopic-maps
kind: theorem
title: "Homotopic continuation data give chain homotopic maps"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-two-parameter-continuation-homotopy, def-continuation-chain-map, thm-continuation-count-is-a-chain-map, thm-continuation-trajectories-are-compact-up-to-breaking, lem-orientation-lines-orient-continuation-moduli-spaces, lem-boundary-of-a-compact-one-manifold-has-even-cardinality, lem-oriented-boundary-of-a-compact-oriented-one-manifold-has-zero-signed-count, def-chain-homotopy, thm-chain-homotopic-maps-induce-the-same-map-on-homology, def-mod-two-morse-chain-group, def-mod-two-morse-differential, def-signed-morse-differential-over-the-integers, def-morse-homology-of-a-morse-smale-pair, def-chain-complex-in-an-abelian-category, def-graded-morphism-of-chain-complexes, def-axiom-of-choice, lem-metric-end-flow-matching-gives-local-broken-charts]
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
the induced continuation map on homology of [[thm-continuation-count-is-a-chain-map]]
depends only on the two end pairs, not on the chosen regular continuation
datum. The continuation chain map itself is independent up to chain homotopy.

## Facts & Assumptions

**Given:** The Axiom of Choice, the two regular endpoint data, and the augmented-regular parameter family, constant in the parameter near its two endpoints and with uniform fixed autonomous ends.

[F1] The total parameter-included endpoint fibre product is transverse, has dimension $d=\operatorname{ind}(p)-\operatorname{ind}(q)+1$, and at parameter endpoints has ordinary product collars. No interior vertical-member regularity is assumed ([[def-two-parameter-continuation-homotopy]]).

[F2] The pointed metric-end height estimates and compact-window extraction prove compactness of continuation objects, without a height coordinate on the middle ([[thm-continuation-trajectories-are-compact-up-to-breaking]]). Exact finite flow matching applies to an augmented-regular middle and its autonomous breaks ([[lem-metric-end-flow-matching-gives-local-broken-charts]]).

[F3] The augmented parameter-first orientation and the negative raw zero-dimensional counting sign give endpoint signs $-\Phi^0,+\Phi^1$ and positive products at both autonomous breaking patterns ([[lem-orientation-lines-orient-continuation-moduli-spaces]]).

[F4] A compact one-manifold has even boundary cardinality, and an oriented compact one-manifold has zero signed boundary count ([[lem-boundary-of-a-compact-one-manifold-has-even-cardinality]], [[lem-oriented-boundary-of-a-compact-oriented-one-manifold-has-zero-signed-count]]).

[F5] The end differentials and continuation maps count the rigid trajectories, while chain-homotopic maps induce the same homology map ([[def-continuation-chain-map]], [[def-mod-two-morse-differential]], [[def-signed-morse-differential-over-the-integers]], [[def-chain-homotopy]], [[thm-chain-homotopic-maps-induce-the-same-map-on-homology]]).

## Proof

**Proof technique:** direct, by augmented compactification and its oriented boundary.

1.1 In any sequence of augmented solutions, first extract a convergent parameter subsequence in $[0,1]$. The autonomous ends are fixed, so the square-root height modulus of [F2] is uniform; the compact-window field and all its finite-time evolution estimates are uniform over the compact parameter interval. The pointed-tail and unshifted-window extraction of [F2] therefore applies verbatim with the converging parameter included. The limit middle solves the limiting parameter equation. By [F1] its augmented dimension is nonnegative, so its vertical index difference is at least $-1$. Each nonconstant autonomous tail loses at least one index. Telescoping consequently bounds the total tail count by $d$, not by the vertical index difference. The triple of pointed height paths, unshifted middle window and parameter gives the same compact metrizable geometric topology as in [F2]. [F1, F2, given]

2.1 When $d=0$, no autonomous break is possible in step 1.1; moreover at parameter endpoints the fixed regular data have vertical index $-1$, so there are no endpoint solutions. Thus $\mathcal P_0(p,q)$ is a compact zero-dimensional manifold and is finite. Its signed count with the convention of [F3] defines $K$ on the finite critical basis, with degree $+1$; extending finitely and linearly gives the displayed homomorphism. This remains valid for isolated rogue solutions whose vertical derivative is not onto, because their full augmented derivative and orientation are supplied by [F1] and [F3]. [F1, F3, step 1.1, construct]

3.1 When $d=1$, the extraction allows at most one autonomous break. The only added configurations are a negative rigid end trajectory followed by an augmented zero-dimensional middle, or an augmented zero-dimensional middle followed by a positive rigid end trajectory. Each broken stratum is locally a point, and the augmented fixed-anchor matching chart in [F2] gives its half-interval collar, including inverse coverage. At parameter endpoints [F1] gives the ordinary half-interval collar over each rigid endpoint-datum solution. No endpoint can coincide with an autonomous break, since the requisite augmented zero-dimensional middle has vertical index $-1$ and the parameter-end data are regular. The compactification is therefore a compact one-manifold with precisely these four boundary patterns. Its boundary products are finite by step 2.1 and the metric-end rigid finiteness proved in [F2]. [F1, F2, step 1.1, step 2.1]

4.1 Orient this one-manifold by the parameter-first endpoint sequence. By [F3], its parameter-end signed counts are $\Phi^1-\Phi^0$ and its two broken counts are respectively $K\partial^-$ and $\partial^+K$, both with positive product signs. By [F4] their sum is zero. Over $\mathbb Z/2$ the same statement follows from even boundary cardinality. Comparing the coefficient at every degree-$k$ target $q$ of every degree-$k$ generator $p$, [F5] therefore gives $\Phi^0_k-\Phi^1_k=\partial^+_{k+1}K_k+K_{k-1}\partial^-_k$. Finite linear extension gives this identity in every degree. [F3, F4, F5, step 2.1, step 3.1, algebra]

5.1 The identity of step 4.1 is exactly the chain-homotopy identity of [F5]; hence the maps induce the same homology map. Finally any two regular data with the same fixed ends admit an augmented-regular family relative to their parameter endpoints: the regularizing function and metric perturbations in the parameter-interior endpoint-transversality construction of [F1] preserve the endpoint data. Applying the preceding argument gives datum independence of the induced homology map and of the chain-homotopy class of the chain map. [F1, F5, step 4.1] ∎
