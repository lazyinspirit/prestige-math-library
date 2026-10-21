---
id: thm-homological-lhs-spectral-sequence-for-group-extensions
kind: theorem
title: "Homological Lyndon–Hochschild–Serre spectral sequence for group extensions"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 1
deps:
  - def-axiom-of-choice
  - def-dependent-choice
  - cor-classifying-space-of-a-discrete-group-is-a-k-g-one
  - thm-existence-and-homotopy-uniqueness-of-eilenberg-maclane-spaces
  - thm-long-exact-sequence-of-homotopy-groups-of-a-fibration
  - thm-homological-serre-spectral-sequence
  - lem-diagonal-bar-coinvariants-compute-group-homology
  - lem-classifying-maps-are-natural-under-group-homomorphisms
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "John McCleary, Nontrivial fundamental groups, §8bis.2"
      url: "https://pages.vassar.edu/mccleary/files/2011/04/MC08bis.fin_.pdf"
      locator: "Theorem 8bis.14 and the homological Lyndon–Hochschild–Serre spectral sequence discussion, PDF pp. 13–15"
    - title: "Allen Hatcher, Algebraic Topology"
      url: "https://pi.math.cornell.edu/~hatcher/AT/AT.pdf"
      locator: "§4.3, printed p. 408, which states that the homotopy fiber of a map between CW complexes has CW homotopy type"
    - title: "John Milnor, On Spaces Having the Homotopy Type of a CW-Complex"
      url: "https://webhomes.maths.ed.ac.uk/~v1ranick/papers/milnorcw.pdf"
      locator: "Theorem 3 and its proof, printed pp. 276–280 (PDF pp. 6–10): compact-domain mapping n-ads preserve CW homotopy type; Hatcher §4.3 records the homotopy-fiber consequence. The complete theorem and proof were read; no stronger consequence is used."
---

## Statement

Assume the Axiom of Choice. For every short exact sequence of discrete groups
$$1\longrightarrow N\longrightarrow G\longrightarrow Q\longrightarrow 1,$$
the homological Serre spectral sequence of the induced map of classifying spaces
has
$$E^2_{p,q}\cong H_p\!\left(Q;H_q(N;\mathbb Z)\right) \quad\Longrightarrow\quad H_{p+q}(G;\mathbb Z).$$
Here $H_p(Q;M)$ denotes homology of $BQ$ with the local coefficient system
determined by the left $Q$-module $M$, and group homology uses the bar
classifying spaces. The coefficient group $H_q(N;\mathbb Z)$ has the $Q$-action
induced by conjugation by lifts in $G$, and convergence is strong with the
finite Serre filtration in each total degree.

## Statement references

[McCleary, Theorem 8bis.14 and §8bis.2](https://pages.vassar.edu/mccleary/files/2011/04/MC08bis.fin_.pdf)

[Hatcher, §4.3, p. 408](https://pi.math.cornell.edu/~hatcher/AT/AT.pdf)

[Milnor, Theorem 3 and proof, pp. 276–280](https://webhomes.maths.ed.ac.uk/~v1ranick/papers/milnorcw.pdf)

## Facts & Assumptions

**Given:** Full AC and a short exact sequence $1\to N\to G\to Q\to1$ of discrete groups.

[A1] Full AC, written AC, is [[def-axiom-of-choice]].

[L2] Full AC implies DC: apply AC to the family of nonempty successor sets of a serial relation, choose one initial element, and recursively follow the resulting choice function. [[def-dependent-choice]]

[L1] Under AC, Milnor's classifying space $BG$ is a connected CW model with $\pi_1(BG)\cong G$ and $\pi_k(BG)=0$ for $k>1$. [[cor-classifying-space-of-a-discrete-group-is-a-k-g-one]]

[F1] The homotopy long exact sequence of a Serre fibration computes the homotopy groups of its fiber. [[thm-long-exact-sequence-of-homotopy-groups-of-a-fibration]]

[F2] For a Serre fibration over a path-connected CW complex, the homological Serre spectral sequence has $E^2_{p,q}=H_p(B;\mathcal H_q(F;\mathbb Z))$ and strongly converges to the homology of the total space. [[thm-homological-serre-spectral-sequence]]

[F3] The homology of a classifying space with the local system determined by a module is the usual bar-model group homology; the derived-functor identification in the library assumes DC. [[lem-diagonal-bar-coinvariants-compute-group-homology]], [[def-dependent-choice]]

[F4] Connected CW models with the same identified fundamental group and vanishing higher homotopy groups are homotopy equivalent under AC. [[thm-existence-and-homotopy-uniqueness-of-eilenberg-maclane-spaces]]

[F5] **External input:** For a map between CW complexes, its mapping-path homotopy fiber has CW homotopy type. This is the homotopy-fiber consequence of Milnor's compact-domain mapping n-ad theorem, stated explicitly in Hatcher's §4.3; the hypotheses here are satisfied by the classifying CW models in step 1.1. [[Hatcher §4.3, p. 408](https://pi.math.cornell.edu/~hatcher/AT/AT.pdf)], [[Milnor, Theorem 3, pp. 276–280](https://webhomes.maths.ed.ac.uk/~v1ranick/papers/milnorcw.pdf)]

[F6] Classifying maps commute up to based homotopy with a based map and its induced fundamental-group homomorphism. [[lem-classifying-maps-are-natural-under-group-homomorphisms]]

## Proof

**Given:** The group extension and [A1].

1.1 Choose connected CW models from [L1]. Build a based map $BG\to BQ$ inducing $G\to Q$ by mapping the one-skeleton to loops representing the quotient images, filling each two-cell because its attaching word maps to the identity in $Q$, and extending over each higher cell because $\pi_k(BQ)=0$ for $k>1$. The finite cell extensions are simultaneous over a set of cells; [A1] supplies those choices. Replace this map by its mapping-path fibration $p:E\to BQ$; the total space $E$ is homotopy equivalent to $BG$, and the fiber $F$ is its homotopy fiber. [A1, L1, given, construct]

1.2 The map on fundamental groups is the quotient $G\to Q$. Exactness of [F1] gives $\pi_0(F)=\{*\}$, $\pi_1(F)\cong\ker(G\to Q)=N$, and $\pi_k(F)=0$ for every $k>1$, because both $BG$ and $BQ$ have zero higher homotopy groups by [L1]. By the external input [F5], $F$ has CW homotopy type. Choose a connected CW model $F'\simeq F$ and identify $\pi_1(F')$ with $N$. The uniqueness theorem [F4] gives $F'\simeq BN$, so $H_q(F;\mathbb Z)\cong H_q(N;\mathbb Z)$ for every $q$. [L1, F1, F4, F5, step 1.1]

1.3 A lift $g\in G$ of a loop class $q\in Q=\pi_1(BQ)$ transports the fiber fundamental group by $n\mapsto gng^{-1}$. Choose a based homotopy equivalence $h:F'\to F$ as in step 1.2 and a based homotopy inverse $\bar h:F\to F'$, using the basepoint path supplied by the transport. The map $T'_g=\bar h\circ T_g\circ h$ is a based self-map of $F'$ inducing $c_g(n)=gng^{-1}$ on $\pi_1(F')\cong N$. By [F6], the classifying map $c:F'\to BN$ satisfies $c\circ T'_g\simeq B(c_g)\circ c$, so the monodromy on $H_q(F')$ agrees under $h$ with the bar-classifying-space map induced by $c_g$. If a different lift is chosen, it differs by an element of $N$ and changes this map by an inner automorphism of $N$. Inner conjugation is homotopic to the identity on the bar classifying space: the conjugation functor on the one-object category of $N$ is naturally isomorphic to the identity by the conjugating element. Hence the induced action on $H_q(F;\mathbb Z)\cong H_q(N;\mathbb Z)$ depends only on $q$, and is exactly the stated $Q$-module action. [L1, F1, F4, F6, step 1.2, algebra]

2.1 Apply [F2] to $p:E\to BQ$. By step 1.2 the fiber homology is $H_q(N;\mathbb Z)$, and step 1.3 identifies its monodromy local system with the conjugation action. Therefore the $E^2$ page is $H_p(Q;H_q(N;\mathbb Z))$ and the spectral sequence strongly converges to $H_{p+q}(E;\mathbb Z)$. [F2, step 1.2, step 1.3]

2.2 The total-space equivalence from step 1.1 identifies $H_{p+q}(E;\mathbb Z)$ with $H_{p+q}(BG;\mathbb Z)$. By [F4], this classifying CW model is homotopy equivalent to the bar model used in [F3], so its homology is $H_{p+q}(G;\mathbb Z)$. The base and fiber are connected CW models, so the Serre filtration is first quadrant and finite on each total-degree diagonal. AC supplies the DC hypothesis of [F3] by [L2]. The fiber action and Serre filtration introduce no further choice. [A1, L2, F3, F4, step 1.1, step 2.1] ∎
