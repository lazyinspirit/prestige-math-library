---
id: cex-knot-kt-43-boundary-case
kind: counterexample
title: "A null-homologous unknot in a homology sphere can have reducible exterior"
status: published
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - lem-poincare-homology-sphere-is-nontrivial-integral-homology-sphere
  - thm-mayer-vietoris-sequence-in-singular-homology
  - thm-alexander-duality-for-compact-locally-contractible-subsets-of-a-sphere
  - cor-homology-of-spheres
  - thm-poincare-duality-for-oriented-topological-manifolds
  - thm-universal-coefficient-theorem-for-cohomology-over-a-pid
  - def-axiom-of-choice
dependency_level: 1
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Algebraic Topology, Winter Semester 2021/22, §4.5.12"
      url: "https://loeh.app.ur.de/teaching/topologie1_ws2122/lecture_notes.pdf"
      locator: "Printed pp.178–179; the Poincaré homology sphere and its nontrivial binary-icosahedral fundamental group"
    - title: "Allen Hatcher, Algebraic Topology, §2.2"
      url: "https://pi.math.cornell.edu/~hatcher/AT/ATch2.pdf"
      locator: "Mayer–Vietoris sequence for the connected-sum homology calculation"
    - title: "Yi Ni, Knot Floer homology detects fibred knots, arXiv:math/0607156v4, Theorem 1.1"
      url: "https://arxiv.org/pdf/math/0607156v4"
      locator: "Printed p.2; the exact irreducible-complement hypothesis"
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: "pass"
    date: "2026-10-22"
    scope: "Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/inverse-problems-knot-theory-all-109-2026-10-19-publication.json."
    delegated_by: "owner"
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
---

## Statement refuted

Assume the Axiom of Choice. An integral homology $3$-sphere is a closed connected oriented $3$-manifold $Y$ with $H_*(Y;\mathbb Z)\cong H_*(S^3;\mathbb Z)$; a knot $K\subset Y$ is null-homologous when $[K]=0$ in $H_1(Y;\mathbb Z)$. The assertion that every smooth null-homologous knot in an integral homology $3$-sphere has irreducible complement is false, where irreducible means that every embedded $2$-sphere in the complement bounds a $3$-ball there.

## Statement references

[[thm-rank-one-top-knot-floer-detects-fiberedness|Ni's irreducible-complement hypothesis]]

[Ni, *Knot Floer homology detects fibred knots*, Theorem 1.1](https://arxiv.org/pdf/math/0607156v4)

[[lem-poincare-homology-sphere-is-nontrivial-integral-homology-sphere|The Poincaré sphere homology and fundamental group]]

[[thm-rank-one-top-knot-floer-detects-fiberedness|Ni's exact irreducibility hypothesis]]

[Algebraic Topology, Winter Semester 2021/22, §4.5.12](https://loeh.app.ur.de/teaching/topologie1_ws2122/lecture_notes.pdf)

[Hatcher, *Algebraic Topology*, §2.2](https://pi.math.cornell.edu/~hatcher/AT/ATch2.pdf)

## Diagram

The connected-sum sphere separates the two punctured Poincaré summands; the unknot lies in a smaller ball in the left summand.

```tikz
\begin{tikzpicture}[scale=0.95]
  \draw[rounded corners,thick] (-2,-1.15) rectangle (1.45,1.15);
  \draw[rounded corners,thick] (2.55,-1.15) rectangle (6,1.15);
  \node at (-0.25,0.55) {$P\setminus\operatorname{int}B^3$};
  \node at (4.25,0.55) {$P\setminus\operatorname{int}B^3$};
  \draw[dashed,thick] (2,-1.15)--(2,1.15);
  \node[above] at (2,1.15) {$S^2$};
  \draw[thick] (-1.2,-0.1) circle (0.55);
  \node at (-1.2,0.15) {$B_0$};
  \draw[thick] (-1.2,-0.1) circle (0.2);
  \node at (-1.2,-0.1) {$U$};
  \node at (-1.2,-0.82) {$N(U)\subset B_0$};
\end{tikzpicture}
```

## Facts & Assumptions

**Given:** AC, the Poincaré sphere $P$, the connected sum $Y=P\#P$, a connected-sum sphere $S$, a standard round unknot $U$ in a $3$-ball $B_0$ contained in the first summand and disjoint from $S$, and a tubular neighborhood $N(U)\subset B_0$.

[F1] [[lem-poincare-homology-sphere-is-nontrivial-integral-homology-sphere]]: $H_1(P;\mathbb Z)=H_2(P;\mathbb Z)=0$ and $\pi_1(P)\ne1$.

[F2] [[thm-mayer-vietoris-sequence-in-singular-homology]]: for an open cover, the sequence $H_1(U\cap V)\to H_1(U)\oplus H_1(V)\to H_1(X)\to H_0(U\cap V)\to H_0(U)\oplus H_0(V)$ is exact.

[F3] [[thm-alexander-duality-for-compact-locally-contractible-subsets-of-a-sphere]], [[cor-homology-of-spheres]], and [[thm-universal-coefficient-theorem-for-cohomology-over-a-pid]]: $H_1(S^2;\mathbb Z)=0$; for an unknot $U\cong S^1$ in $S^3$, $\widetilde H_0(S^3\setminus U;\mathbb Z)=0$ and $\widetilde H_1(S^3\setminus U;\mathbb Z)\cong\widetilde H^1(U;\mathbb Z)\cong\mathbb Z$.

[F4] [[thm-poincare-duality-for-oriented-topological-manifolds]] and [[thm-universal-coefficient-theorem-for-cohomology-over-a-pid]]: under AC, a closed connected oriented $3$-manifold with $H_1=0$ has $H_0=H_3=\mathbb Z$ and $H_2\cong H^1=0$.

[F5] Every spherical gluing below is made with a retained product collar $S^2\times(-2\varepsilon,2\varepsilon)$, chosen disjoint from $U$. For closed pieces $A_-$ and $A_+$ on the negative and positive sides, replace them by the relative-open sets $O_-=A_-\cup(S^2\times(-2\varepsilon,\varepsilon))$ and $O_+=A_+\cup(S^2\times(-\varepsilon,2\varepsilon))$ in their union. On the added collar of $O_-$, send its parameter $t\ge0$ to $(1-s)t$; fix $A_-$. The analogous formula on the negative added collar retracts $O_+$ to $A_+$. Their intersection is $S^2\times(-\varepsilon,\varepsilon)$ and retracts to $S^2$ by $t\mapsto(1-s)t$. These homotopies match the identity on the joining sphere and remain valid after deleting $U$, since the collars miss it. Thus [F2] is applied only to these actual open covers, with the same homology groups as the named closed pieces. The collars are the product collars retained in the chosen smooth ball and connected-sum constructions; no collar for an arbitrary wild sphere is asserted.

[A1] [[def-axiom-of-choice]]: AC is the assumption of the local Poincaré-duality suppliers.

## Counterexample


1.1 The unknot $U$ bounds its spanning disk inside $B_0$, so $[U]=0$ in $H_1(Y;\mathbb Z)$. For $X=P\setminus\operatorname{int}B^3$, use the collar enlargements [F5] of $X$ and $B^3$ in $P$. They form an open cover, retract to those pieces, and have intersection retracting to $S^2$; apply [F2] to this open cover. Since $H_1(S^2)=0$ by [F3], exactness injects $H_1(X)$ into $H_1(P)=0$, so $H_1(X)=0$. The same exact sequence in degree zero, using $H_1(P)=0$ and $H_0(P)=H_0(S^2)=H_0(B^3)=\mathbb Z$, gives $0\to\mathbb Z\to H_0(X)\oplus\mathbb Z\to\mathbb Z\to0$. Rank comparison yields $H_0(X)\cong\mathbb Z$, so each punctured summand is connected with $H_1=0$. [given, F1, F2, F3, algebra]

1.2 Put $A=B_0\setminus U$ and let $C$ be the closed ball on the other side of $\partial B_0$ in $S^3$. Identify $B_0$ with the unit ball and $U$ with a round circle in the plane $z=0$. From every point of $A$, the vertical segment in the direction of the sign of its $z$-coordinate reaches $\partial B_0$ without meeting $U$; when $z=0$, the starting point is not on $U$ and the upward segment meets the plane only there. Since $\partial B_0$ is path-connected, $A$ is path-connected. Thicken $A$ and $C$ by collars to obtain an open cover of $S^3\setminus U$ whose overlap retracts to $S^2$. The map on $H_0(S^2)$ is the injection $1\mapsto(1,-1)$. Since $H_1(S^2)=0$ and $C$ is contractible, [F2] identifies $H_1(A;\mathbb Z)$ with $H_1(S^3\setminus U;\mathbb Z)$; [F3] identifies the latter with $\mathbb Z$. [F2, F3, given, algebra]

2.1 Apply [F2] to the open collar enlargements [F5] of the two punctured summands in $Y$; the pieces and intersection retract to the punctured summands and $S^2$, respectively. By step 1.1 both summands are connected and have zero $H_1$, and the map $H_0(S^2;\mathbb Z)\to H_0(P\setminus\operatorname{int}B^3;\mathbb Z)\oplus H_0(P\setminus\operatorname{int}B^3;\mathbb Z)$ sends $1$ to $(1,-1)$ and is injective. Exactness gives $H_1(Y;\mathbb Z)=0$. Since $Y$ is closed, connected, and oriented, [F4] gives $H_2(Y;\mathbb Z)=0$ and $H_0(Y;\mathbb Z)=H_3(Y;\mathbb Z)=\mathbb Z$. Hence $Y$ is an integral homology sphere. The duality and UCT uses are under [A1]. [A1, F2, F4, given, step 1.1, algebra]

2.2 The side of $S$ in the second summand is $P\setminus\operatorname{int}B^3$, which is not a $3$-ball: capping it with a ball would identify $P$ with $S^3$, contrary to [F1]. The other side is the union of $P\setminus\operatorname{int}(B^3\cup B_0)$ and $A$, glued along $\partial B_0$. Apply [F5] to obtain an open cover of this side, relative to its remaining boundary, with intersection retracting to that sphere and pieces retracting to the two named sets. Since $H_1(S^2)=0$ by [F3], exactness in [F2] makes the map from the direct sum of the two pieces' $H_1$ groups into the union's $H_1$ injective. Step 1.2 therefore makes this side's $H_1$ nonzero. Neither side is a $3$-ball, so $S$ cannot bound a $3$-ball in $Y\setminus U$. [F1, F2, F3, step 1.2, given, algebra]

3.1 Therefore $Y\setminus U$ is reducible and the displayed universal assertion is false. The diagram records the separation and location of $U$; the proof uses the homology and homotopy arguments above, not the diagram. [step 2.1, step 2.2] ∎

