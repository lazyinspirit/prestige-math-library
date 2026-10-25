---
id: lem-qftx-low-unitary-homotopy-inputs
kind: lemma
title: "Low special-unitary homotopy inputs"
status: draft
origin: pipeline
pipeline_run: advanced-qft-supersymmetry-build-2026-10-23
dependency_level: 3
domain: mathematics
library: mathematics
category: quantum-field-theory-mathematics
page: qftx-gauge-group-sphere-homotopy
physical_scope: null
proof_strategy: direct
axiom_base: "ZF + AC"
deps:
  - lem-qftx-special-unitary-column-fibration
  - lem-qftx-hopf-generator-and-cone
  - lem-qftx-folded-product-attachment-suspends-to-zero
  - lem-qftx-suspended-hopf-composite-adem-obstruction
  - thm-long-exact-sequence-of-homotopy-groups-of-a-fibration
  - thm-lower-dimensional-sphere-maps-are-based-nullhomotopic
  - thm-based-sphere-maps-are-classified-by-geometric-degree
  - thm-freudenthal-suspension-theorem
  - lem-freudenthal-identifies-the-eventual-suspension-system-for-spheres
  - def-axiom-of-choice
dependency_roles:
  lem-qftx-special-unitary-column-fibration: mathematical-premise
  lem-qftx-hopf-generator-and-cone: mathematical-premise
  lem-qftx-folded-product-attachment-suspends-to-zero: mathematical-premise
  lem-qftx-suspended-hopf-composite-adem-obstruction: mathematical-premise
  thm-long-exact-sequence-of-homotopy-groups-of-a-fibration: mathematical-premise
  thm-lower-dimensional-sphere-maps-are-based-nullhomotopic: mathematical-premise
  thm-based-sphere-maps-are-classified-by-geometric-degree: mathematical-premise
  thm-freudenthal-suspension-theorem: mathematical-premise
  lem-freudenthal-identifies-the-eventual-suspension-system-for-spheres: mathematical-premise
  def-axiom-of-choice: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Allen Hatcher, Algebraic Topology, Chapter 4"
      url: https://pi.math.cornell.edu/~hatcher/AT/ATch4.pdf
      locator: "§4.2, printed pp. 379–381; Hopf bundle and attaching maps."
    - title: "Allen Hatcher, Algebraic Topology, Appendix"
      url: https://pi.math.cornell.edu/~Hatcher/AT/ATch4.4.pdf
      locator: "§4.B, pp. 427–428 and §4.L, pp. 487–490, 498–499; Hopf invariant, suspension, and Steenrod operations."
    - title: "J. P. May, A Concise Course in Algebraic Topology"
      url: https://www.math.uchicago.edu/~may/CONCISE/ConciseRevised.pdf
      locator: "Chapter 7, pp. 49–56 and Chapter 9, §3, p. 66; bundle fibration and homotopy LES."
verification:
  precheck: pending
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-25
---
## Statement

For every $N\ge2$, $SU(N)$ is path connected, $\pi_1(SU(N))=\pi_2(SU(N))=0$, and $\pi_3(SU(N))\cong\mathbb Z$. In addition, $\pi_4(SU(2))\cong\mathbb Z/2$ is finite and $\pi_5(SU(2))\ne0$. Here $SU(2)\cong S^3$ by the map sending a unit quaternion to its defining special-unitary matrix.

## Statement references

[Hatcher, Algebraic Topology, Chapter 4](https://pi.math.cornell.edu/~hatcher/AT/ATch4.pdf)

[Hatcher, Algebraic Topology, Appendix](https://pi.math.cornell.edu/~Hatcher/AT/ATch4.4.pdf)

[May, A Concise Course in Algebraic Topology](https://www.math.uchicago.edu/~may/CONCISE/ConciseRevised.pdf)

## Facts & Assumptions

**Given:** The column fibrations of [[lem-qftx-special-unitary-column-fibration]], the Hopf and suspension results below, and the imported sphere and fibration theorems. Work in ZF + AC because the numerable-bundle supplier uses AC.

[F1] The column maps form Hurewicz fibrations $SU(N-1)\to SU(N)\to S^{2N-1}$. [[lem-qftx-special-unitary-column-fibration]]

[F2] For a based Serre fibration, the homotopy groups and component sets of fiber, total space, and base form an exact sequence. [[thm-long-exact-sequence-of-homotopy-groups-of-a-fibration]]

[F3] For $k<d$, every based map $S^k\to S^d$ is nullhomotopic; degree identifies $\pi_3(S^3)$ with $\mathbb Z$. [[thm-lower-dimensional-sphere-maps-are-based-nullhomotopic]], [[thm-based-sphere-maps-are-classified-by-geometric-degree]]

[F4] For an $(n-1)$-connected based CW complex, the unreduced two-cone suspension map $E:\pi_i(X,x_0)\to\pi_{i+1}(\Sigma_{\mathrm{two\text{-}cone}}X,p_-)$ is surjective at $i=2n-1$. At $X=S^2$, $n=2$, and $i=3$, this is the two-cone map out of $\pi_3(S^2)$. [[thm-freudenthal-suspension-theorem]]

[F5] For integers $k\ge0$ and $n\ge1$, the published sphere-system bonding map $E:\pi_{n+k}(S^n)\to\pi_{n+k+1}(S^{n+1})$ is an isomorphism when $n>k+1$ and is surjective when $n=k+1$. Its proof identifies this map with reduced suspension by collapsing the contractible basepoint track in the two-cone suspension; at $n=2$, $k=1$, this is precisely the reduced map $\pi_3(S^2)\to\pi_4(S^3)$. [[lem-freudenthal-identifies-the-eventual-suspension-system-for-spheres]]

[F6] The Hopf generator $h$ generates $\pi_3(S^2)$, $2[\Sigma h]=0$, and $(\Sigma h)\circ(\Sigma^2h)\ne0$. [[lem-qftx-hopf-generator-and-cone]], [[lem-qftx-folded-product-attachment-suspends-to-zero]], [[lem-qftx-suspended-hopf-composite-adem-obstruction]]

## Proof

1.1 The unit-quaternion parametrization $q=a+bi+cj+dk\mapsto\begin{pmatrix}a+bi&c+di\\-c+di&a-bi\end{pmatrix}$ is a continuous bijection from compact $S^3$ to Hausdorff $SU(2)$; direct multiplication shows it is unitary with determinant one, and every matrix in $SU(2)$ has this form. It is therefore a homeomorphism. By [F3], $\pi_1(S^3)=\pi_2(S^3)=0$ and $\pi_3(S^3)=\mathbb Z$. [given, F3, algebra]

2.1 By [F4], the two-cone Freudenthal suspension map on $\pi_3(S^2)$ is surjective at the boundary index. The comparison in [F5], with $n=2$ and $k=1$, identifies this map with reduced suspension, so $E[h]=[\Sigma h]=\eta_3$ generates the quotient $\pi_4(S^3)$. The order relation $2\eta_3=0$ and the nonzero composite $\eta_3\circ\eta_4$ are supplied by [F6]. The latter implies $\eta_3\ne0$, since a composite with a null factor is null. Thus the cyclic quotient generated by $\eta_3$ has exactly two elements, proving $\pi_4(SU(2))\cong\mathbb Z/2$; the same nonzero composite lies in $\pi_5(S^3)$, so that group is nonzero. [F4, F5, F6, step 1.1, algebra]

3.1 Induct on $N\ge3$. The base sphere $S^{2N-1}$ has dimension at least five, so [F3] makes its homotopy groups in degrees $1,2,3,4$ zero. Exactness [F2] at degrees one and two therefore gives $\pi_1(SU(N-1))\cong\pi_1(SU(N))$ and $\pi_2(SU(N-1))\cong\pi_2(SU(N))$; at degree three it gives $\pi_3(SU(N-1))\cong\pi_3(SU(N))$. The component exact sequence and the connected fiber and base show $SU(N)$ is path connected: the map on components is onto, and its kernel is the image of the one-point component set of the fiber. Starting from [step 1.1], induction gives all three displayed low groups and connectedness for every $N$. [F1, F2, F3, step 1.1, algebra] ∎

