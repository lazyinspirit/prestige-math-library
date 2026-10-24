---
id: ex-qftx-relative-affine-disk-filling
kind: example
title: Affine filling and the exact reducible-locus repair step
status: draft
origin: pipeline
domain: mathematics
library: mathematics
category: quantum-field-theory-mathematics
dependency_level: 6
deps:
  - def-axiom-of-choice
  - def-qftx-smooth-sobolev-gauge-configuration
  - lem-qftx-relative-finite-parameter-irreducible-avoidance
  - thm-qftx-irreducible-connections-weak-contractibility
dependency_roles:
  def-axiom-of-choice: mathematical-premise
  def-qftx-smooth-sobolev-gauge-configuration: mathematical-premise
  lem-qftx-relative-finite-parameter-irreducible-avoidance: mathematical-premise
  thm-qftx-irreducible-connections-weak-contractibility: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "I. M. Singer, Some Remarks on the Gribov Ambiguity, Communications in
        Mathematical Physics 60 (1978), 7–12"
      url: "https://projecteuclid.org/journals/communications-in-mathematical-physics\
        /volume-60/issue-1/Some-remarks-on-the-gribov-ambiguity/cmp/1103904019.\
        pdf"
      locator: "Theorem 2, p. 9: weak homotopy type; the affine cone and relative
        repair are verified locally."
    - title: "Steven Sivek, Lectures on Instantons and Contact Structures"
      url: "https://wwwf.imperial.ac.uk/~ssivek/papers/regensburg-notes.pdf"
      locator: "§1, pp. 2–3: gauge action and irreducible connections; the example's
        cone construction is verified locally."
    - title: "Dominic Walpuski, Differential Geometry III: Gauge Theory (full lecture
        notes)"
      url: "https://walpuski.com/Teaching/WS2324/DifferentialGeometry3/GaugeTheoryS.p\
        df"
      locator: "§5.13.3, PDF pp. 115–116, holonomy-stabilizer and irreducibility
        conventions; the cone and relative repair are verified locally."
verification:
  precheck: pending
---
## Example

Assume ZF together with the Axiom of Choice. Let $M=S^3$ or $S^4$, let $N\ge2$, take the trivial principal right $SU(N)$-bundle $P=M\times SU(N)$, and use its zero connection as affine origin. For any integer $j\ge1$ and any continuous sphere family $f:S^j\to\mathcal A_\infty^*$ of smooth connections on $P$, the cone formula $F([r,x])=r f(x)$ extends $f$ continuously over $D^{j+1}$ in the full affine connection space. The apex is the zero connection, whose holonomy group is the identity and which preserves every complex line, so this affine filling is reducible and does not lie entirely in $\mathcal A_\infty^*$. Relative avoidance changes the filling while fixing its boundary and produces a filling in $\mathcal A_\infty^*$; contraction of the disk to any chosen boundary point gives a based nullhomotopy. The weak-contractibility theorem ensures that such families exist for the trivial bundle and that their based homotopy classes vanish.

## Facts & Assumptions

**Given:** ZF and the Axiom of Choice; $M=S^3$ or $S^4$; $N\ge2$; the trivial principal right $SU(N)$-bundle; its product connection $0$; and a continuous map $f:S^j\to\mathcal A_\infty^*$ for $j\ge1$.

[A1] The Axiom of Choice means every family of nonempty sets has a choice function ([[def-axiom-of-choice]]).

[F1] In the trivialization $P=M\times SU(N)$, the affine connection space is $\Omega^1(M;\mathfrak{su}(N))$ translated by the product connection, and the product connection has identity holonomy around every loop ([[def-qftx-smooth-sobolev-gauge-configuration]]).

[F2] The relative avoidance lemma homotopes a continuous finite-polyhedron family into $\mathcal A_\infty^*$ while fixing its irreducible values on a subpolyhedron ([[lem-qftx-relative-finite-parameter-irreducible-avoidance]]).

[F3] The weak-contractibility theorem asserts nonemptiness and vanishing of all based homotopy groups for this irreducible locus, under the same bundle, dimension, and group hypotheses ([[thm-qftx-irreducible-connections-weak-contractibility]]).

## Proof

**Proof technique:** explicit affine cone and relative repair.

1.1 The zero connection has parallel transport equal to the identity in the product trivialization, so its based holonomy group is $\{I_N\}$. Since $N\ge2$, every complex line in $\mathbb C^N$ is a nonzero proper subspace invariant under $I_N$. Thus $0\notin\mathcal A_\infty^*$. [F1, given, algebra]

1.2 The cone $D^{j+1}=CS^j$ identifies all $(0,x)$ to one apex and has boundary parameter $r=1$. The formula $F([r,x])=r f(x)$ is well-defined because it is independent of $x$ at $r=0$, and equals $f(x)$ at $r=1$. For every continuous section seminorm $p$, compactness of $S^j$ gives $C_p=\sup_x p(f(x))<\infty$, so $p(F([r,x]))\le rC_p\to0$ as $r\to0$. Away from the apex, continuity follows from continuity of $f$ and scalar multiplication in the Fréchet vector space. Hence $F$ is a continuous affine filling in $\mathcal A_\infty$. [F1, given, algebra, construct]

2.1 By step 1.1, the apex value lies outside $\mathcal A_\infty^*$; therefore this explicit extension is not an irreducible filling, regardless of its irreducible boundary values. In particular, convexity of the full affine space does not imply convexity of its irreducible subset. [step 1.1, step 1.2, algebra]

2.2 Apply [F2] to $F$ with $K=D^{j+1}$ and $L=S^j$. The lemma fixes the boundary and supplies a homotopic endpoint $\widetilde F:D^{j+1}\to\mathcal A_\infty^*$. If $x_0\in S^j$ is the based point with $f(x_0)=A$, the maps $x\mapsto\widetilde F((1-t)x+tx_0)$ stay in the disk, remain in $\mathcal A_\infty^*$, and fix $x_0$. Their restriction to the boundary is a based nullhomotopy of $f$. [F2, given, step 1.2, construct, algebra]

3.1 Theorem [F3] supplies such irreducible sphere families, for example the constant family at any irreducible connection, and identifies the conclusion with vanishing of $\pi_j(\mathcal A_\infty^*,A)$. The example therefore isolates the precise role of relative avoidance: it upgrades a continuous affine filling, which may hit a reducible connection, to an irreducible filling without moving the sphere family. [A1, F3, step 2.2, algebra] ∎
