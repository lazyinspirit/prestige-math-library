---
id: thm-qftx-reduced-gauge-group-sphere-nontriviality
kind: theorem
title: "Nontrivial homotopy of reduced sphere gauge groups"
status: draft
origin: pipeline
pipeline_run: advanced-qft-supersymmetry-build-2026-10-23
dependency_level: 5
domain: mathematics
library: mathematics
category: quantum-field-theory-mathematics
page: qftx-gauge-group-sphere-homotopy
physical_scope: null
proof_strategy: direct
axiom_base: "ZF + AC"
deps:
  - def-qftx-smooth-sobolev-gauge-configuration
  - lem-qftx-sphere-gauge-evaluation-fibration
  - lem-qftx-based-gauge-sphere-homotopy
  - lem-qftx-low-unitary-homotopy-inputs
  - lem-qftx-pi5-special-unitary-nonzero
  - thm-long-exact-sequence-of-homotopy-groups-of-a-fibration
  - thm-covering-maps-inject-fundamental-groups
  - thm-path-lifting-for-covering-maps
  - def-axiom-of-choice
dependency_roles:
  def-qftx-smooth-sobolev-gauge-configuration: mathematical-premise
  lem-qftx-sphere-gauge-evaluation-fibration: mathematical-premise
  lem-qftx-based-gauge-sphere-homotopy: mathematical-premise
  lem-qftx-low-unitary-homotopy-inputs: mathematical-premise
  lem-qftx-pi5-special-unitary-nonzero: mathematical-premise
  thm-long-exact-sequence-of-homotopy-groups-of-a-fibration: mathematical-premise
  thm-covering-maps-inject-fundamental-groups: mathematical-premise
  thm-path-lifting-for-covering-maps: mathematical-premise
  def-axiom-of-choice: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "J. P. May, A Concise Course in Algebraic Topology"
      url: https://www.math.uchicago.edu/~may/CONCISE/ConciseRevised.pdf
      locator: "Chapter 7, pp. 49–56 and Chapter 9, §3, p. 66; fibration LES."
    - title: "Allen Hatcher, Algebraic Topology, Chapter 4"
      url: https://pi.math.cornell.edu/~hatcher/AT/ATch4.pdf
      locator: "§4.2, printed pp. 379–381; Hopf/fibration context."
verification:
  precheck: pending
---
## Statement

Let $r\in\{3,4\}$, $N\ge2$, and $P\to S^r$ be any smooth principal $SU(N)$ bundle. Write $\mathcal G(P):=\mathcal G_\infty(P)$ for its smooth gauge group with the finite-atlas $C^\infty$ section topology and $\overline{\mathcal G}(P):=\overline{\mathcal G}_\infty(P)=\mathcal G_\infty(P)/Z_N$ for the quotient by constant central gauge sections. Then either $\overline{\mathcal G}(P)$ has more than one path component or at least one of its based homotopy groups $\pi_j(\overline{\mathcal G}(P),e)$, $j\ge1$, is nonzero. More precisely, for $r=3$ it has infinitely many path components, and for $r=4$ its fundamental group is nontrivial.

## Statement references

[May, A Concise Course in Algebraic Topology, Chapters 7 and 9](https://www.math.uchicago.edu/~may/CONCISE/ConciseRevised.pdf)

[Hatcher, Algebraic Topology, Chapter 4](https://pi.math.cornell.edu/~hatcher/AT/ATch4.pdf)

## Facts & Assumptions

**Given:** The sphere bundle, chosen evaluation frame, smooth section topologies, and finite central quotient of the Statement. The actual configuration carrier is present, but its current hash-bound Step 1 record is `ready` according to `loadStep1Record` and `step1Decision`; this is authoring readiness, not independent approval.

[F1] The actual configuration definition fixes compact connected oriented boundaryless Riemannian $M$ of dimension $3$ or $4$, $P$, its frame, the smooth gauge group $\mathcal G_\infty$ with finite-atlas $C^\infty$ section topology, the based subgroup, and $\overline{\mathcal G}_\infty=\mathcal G_\infty/Z_N$; it also defines the Sobolev groups and quotient topologies. Its carrier was inspected in full, but its current hash-bound Step 1 record is `ready` according to `loadStep1Record` and `step1Decision`; this is authoring readiness, not independent approval. [[def-qftx-smooth-sobolev-gauge-configuration]]

[F2] Evaluation is a numerable fibration $\mathcal G_m(P)\to\mathcal G(P)\to SU(N)$ and $\mathcal G(P)\to\overline{\mathcal G}(P)$ is a finite covering. [[lem-qftx-sphere-gauge-evaluation-fibration]]

[F3] For every bundle sector, $\pi_0(\mathcal G_m(P))\cong\pi_r(SU(N))$ and $\pi_j(\mathcal G_m(P))\cong\pi_{j+r}(SU(N))$ for $j\ge1$. [[lem-qftx-based-gauge-sphere-homotopy]]

[F4] $SU(N)$ is path connected, $\pi_1(SU(N))=\pi_2(SU(N))=0$, and $\pi_3(SU(N))\cong\mathbb Z$. [[lem-qftx-low-unitary-homotopy-inputs]]

[F5] $\pi_5(SU(N))\ne0$ for all $N\ge2$. [[lem-qftx-pi5-special-unitary-nonzero]]

[F6] The fibration LES is exact on homotopy groups and component sets; a covering induces an injection on fundamental groups. [[thm-long-exact-sequence-of-homotopy-groups-of-a-fibration]], [[thm-covering-maps-inject-fundamental-groups]]

[F7] Paths lift to a covering once their initial lift is fixed. [[thm-path-lifting-for-covering-maps]]

[A1] Use the actual smooth topology and constant central subgroup fixed by [F1]. No irreducible-configuration claim is needed for the homotopy argument.

## Proof

1.1 Suppose $r=3$. By [F3, F4], $\pi_0(\mathcal G_m(P))\cong\pi_3(SU(N))\cong\mathbb Z$. The evaluation LES [F2, F6] has the component segment
$$\pi_1(SU(N))\longrightarrow\pi_0(\mathcal G_m(P))\longrightarrow\pi_0(\mathcal G(P))\longrightarrow\pi_0(SU(N)).$$
The outer terms are one-point sets by [F4]. The induced map on components is surjective by exactness, and its fibers are the orbits of $\pi_1(SU(N))$ on $\pi_0(\mathcal G_m(P))$ in the action clause of [F6]. That acting group is trivial, so each fiber is a singleton and the middle map is a bijection. Thus $\mathcal G(P)$ has infinitely many components. Write $q:\mathcal G(P)\to\overline{\mathcal G}(P)$ for the quotient covering. Translation $u\mapsto uz$ by any $z\in Z_N$ is a homeomorphism and therefore acts on path components. If $q(x)$ and $q(y)$ are joined by a path $\alpha$, lift $\alpha$ starting at $x$ by [F7]. Its endpoint lies in $q^{-1}(q(y))=yZ_N$, so $x$ is joined upstairs to $yz$ for some $z\in Z_N$. Conversely, any path from $x$ to $yz$ projects to a path from $q(x)$ to $q(y)$. Since $q$ is surjective, its induced map on component sets is surjective, and these two implications identify its fibers exactly with the $Z_N$-orbits. Each orbit has at most $N$ elements; finitely many quotient components would therefore make the upstairs component set finite. Thus infinitely many components remain downstairs. [F1, F2, F3, F4, F6, F7]

2.1 Suppose $r=4$. By [F3] and [F5], $\pi_1(\mathcal G_m(P))\cong\pi_5(SU(N))\ne0$. In the evaluation LES, the map $\pi_1(\mathcal G_m(P))\to\pi_1(\mathcal G(P))$ has preceding term $\pi_2(SU(N))=0$ by [F4]; exactness makes it injective. The finite covering in [F2] induces an injection $\pi_1(\mathcal G(P))\hookrightarrow\pi_1(\overline{\mathcal G}(P))$ by [F6]. Hence $\pi_1(\overline{\mathcal G}(P))$ contains a nonzero subgroup. The two cases establish the statement for every $r,N,P$. [F2, F3, F4, F5, F6, algebra] ∎
