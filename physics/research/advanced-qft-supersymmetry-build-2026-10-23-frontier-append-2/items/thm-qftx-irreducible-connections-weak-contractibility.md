---
id: thm-qftx-irreducible-connections-weak-contractibility
kind: theorem
title: Weak contractibility of the irreducible connection locus
status: draft
origin: pipeline
domain: mathematics
library: mathematics
category: quantum-field-theory-mathematics
dependency_level: 7
deps:
  - def-axiom-of-choice
  - def-qftx-smooth-sobolev-gauge-configuration
  - lem-qftx-relative-finite-parameter-irreducible-avoidance
  - def-higher-homotopy-group-by-based-cubes
dependency_roles:
  def-axiom-of-choice: mathematical-premise
  def-qftx-smooth-sobolev-gauge-configuration: mathematical-premise
  lem-qftx-relative-finite-parameter-irreducible-avoidance: mathematical-premise
  def-higher-homotopy-group-by-based-cubes: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "I. M. Singer, Some Remarks on the Gribov Ambiguity, Communications in Mathematical Physics 60 (1978), 7–12"
      url: "https://projecteuclid.org/journals/communications-in-mathematical-physics/volume-60/issue-1/Some-remarks-on-the-Gribov-ambiguity/cmp/1103904019.pdf"
      locator: "Theorem 2, p. 9: weak homotopy type; Singer's infinite-codimension discussion is not used as a complete proof."
    - title: "Steven Sivek, Lectures on Instantons and Contact Structures"
      url: "https://wwwf.imperial.ac.uk/~ssivek/papers/regensburg-notes.pdf"
      locator: "§1, pp. 2–3: Sobolev gauge actions and irreducible connections; no weak-contractibility proof is claimed from these notes."
    - title: "Dominic Walpuski, Differential Geometry III: Gauge Theory (full lecture notes)"
      url: "https://walpuski.com/Teaching/WS2324/DifferentialGeometry3/GaugeTheoryS.pdf"
      locator: "§5.13.3, PDF pp. 115–116, holonomy-centralizer and irreducibility conventions; no weak-contractibility proof is claimed from these notes."
verification:
  precheck: pending
---
## Statement

Assume ZF together with the Axiom of Choice. Let $M$ be $S^3$ or $S^4$, let $N\ge2$, and let $P\to M$ be any smooth principal right $SU(N)$-bundle. Fix a smooth reference connection $A_0$, a basepoint $m\in M$, and a frame of $P_m$. Equip the affine space $\mathcal A_\infty=A_0+\Omega^1(M;\operatorname{ad}P)$ with its $C^\infty$ section topology, and let $\mathcal A_\infty^*$ be the connections whose based holonomy action on $\mathbb C^N$ has no nonzero proper invariant complex subspace. Then $\mathcal A_\infty^*$ is nonempty and path-connected, and for every $A\in\mathcal A_\infty^*$ and every integer $j\ge1$, $\pi_j(\mathcal A_\infty^*,A)=0$. Here $\pi_j(X,x)$ is the based homotopy group of continuous maps $u:(I^j,\partial I^j)\to(X,x)$ modulo homotopies that keep $\partial I^j$ at $x$.

## Facts & Assumptions

**Given:** ZF and the Axiom of Choice; $M=S^3$ or $S^4$; $N\ge2$; a smooth principal right $SU(N)$-bundle $P$; a smooth reference connection $A_0$; and a based irreducible connection $A\in\mathcal A_\infty^*$ when a basepoint is specified.

[A1] The Axiom of Choice means every family of nonempty sets has a choice function ([[def-axiom-of-choice]]).

[F1] The batch-56 configuration definition sets $\mathcal A_\infty=A_0+\Omega^1(M;\operatorname{ad}P)$ and defines $\mathcal A_\infty^*$ by irreducibility of the based holonomy action on $\mathbb C^N$. Its complete definition was inspected and its current Step 1 record is ready; the argument uses exactly this interface ([[def-qftx-smooth-sobolev-gauge-configuration]]).

[F2] For every continuous map from a finite polyhedron into $\mathcal A_\infty$, with irreducible values on a subpolyhedron, the relative avoidance lemma supplies a homotopy fixed on that subpolyhedron and an open neighborhood of it whose endpoint is entirely irreducible. Its complete argument and exact batch-56 inputs were inspected; the configuration and stabilizer suppliers now have current ready Step 1 records ([[lem-qftx-relative-finite-parameter-irreducible-avoidance]]).

[F3] $\pi_j(X,x)$ is represented by continuous maps $u:(I^j,\partial I^j)\to(X,x)$, with the zero class exactly the maps based-homotopic to the constant map ([[def-higher-homotopy-group-by-based-cubes]]).

## Proof

**Proof technique:** affine fillings followed by relative avoidance.

1.1 The affine space $\mathcal A_\infty$ contains $A_0$. Apply [F2] to the constant map from a one-point polyhedron with empty subpolyhedron and value $A_0$. Its endpoint is an element of $\mathcal A_\infty^*$, proving nonemptiness. [A1, F1, F2, given, construct]

1.2 Let $A,B\in\mathcal A_\infty^*$. The affine path $\gamma(t)=(1-t)A+tB$ is continuous in the Fréchet topology and has irreducible endpoints. Apply [F2] with $K=I$ and $L=\{0,1\}$. The resulting endpoint path remains in $\mathcal A_\infty^*$ and fixes both endpoints, so the locus is path-connected. [F1, F2, construct, algebra]

1.3 Fix $j\ge1$ and a based representative $u:(I^j,\partial I^j)\to(\mathcal A_\infty^*,A)$. The quotient $I^j/\partial I^j$ is homeomorphic to $S^j$, so regard $u$ as a continuous sphere map with value $A$ at the collapsed boundary point. Identify $D^{j+1}$ with the cone on $S^j$ and define $F([r,x])=A_0+r(u(x)-A_0)$ for $0\le r\le1$. For each continuous section seminorm $p$, compactness of $S^j$ gives $C_p=\sup_x p(u(x)-A_0)<\infty$; hence $p(F([r,x])-A_0)\le rC_p\to0$ as $r\to0$. This proves continuity at the cone apex in every defining seminorm, and away from the apex continuity follows from continuity of $u$ and affine operations. Thus $F:D^{j+1}\to\mathcal A_\infty$ is a continuous filling of $u$. [F1, F3, given, algebra, construct]

2.1 Apply [F2] to $F$ with $K=D^{j+1}$ and $L=\partial D^{j+1}=S^j$. Its boundary is already irreducible, so the endpoint is a map $G:D^{j+1}\to\mathcal A_\infty^*$ agreeing with $u$ on the boundary. Choose the based point $x_0\in S^j$ with $u(x_0)=A$. Since the disk is convex, $C_t(x)=(1-t)x+tx_0$ remains in the disk and fixes $x_0$. Then $G(C_t(x))$ is a homotopy from $G$ to the constant map at $A$ that fixes $x_0$ and remains in $\mathcal A_\infty^*$. Restricting it to $S^j$ gives a based nullhomotopy of $u$; by [F3], its class in $\pi_j(\mathcal A_\infty^*,A)$ is zero. Since $j$ and $u$ were arbitrary, every stated homotopy group vanishes. [F2, F3, step 1.3, construct, algebra] ∎
