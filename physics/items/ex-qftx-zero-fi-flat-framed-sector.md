---
id: ex-qftx-zero-fi-flat-framed-sector
kind: example
title: The zero-charge regular datum and framed flat ASD sector
status: draft
origin: pipeline
domain: mathematics
library: mathematics
category: quantum-field-theory-mathematics
page: qftx-adhm-zero-fi-asd-correspondence-examples
dependency_level: 13
deps:
  - thm-qftx-zero-fi-regular-adhm-asd-correspondence
  - def-qftx-adhm-linear-data-stability-and-regularity
  - def-qftx-instanton-number-and-asd-sector
  - thm-qftx-yang-mills-selfdual-action-bound
  - thm-higher-dimensional-spheres-are-simply-connected
  - thm-a-flat-connection-admits-local-parallel-frames
  - prop-flat-connections-have-locally-path-independent-parallel-transport-on-a-coordinate-ball
  - def-axiom-of-choice
dependency_roles:
  thm-qftx-zero-fi-regular-adhm-asd-correspondence: mathematical-premise
  def-qftx-adhm-linear-data-stability-and-regularity: mathematical-premise
  def-qftx-instanton-number-and-asd-sector: mathematical-premise
  thm-qftx-yang-mills-selfdual-action-bound: mathematical-premise
  thm-higher-dimensional-spheres-are-simply-connected: mathematical-premise
  thm-a-flat-connection-admits-local-parallel-frames: mathematical-premise
  prop-flat-connections-have-locally-path-independent-parallel-transport-on-a-coordinate-ball: mathematical-premise
  def-axiom-of-choice: mathematical-premise
axiom_base: "The direct zero-charge classification uses the displayed energy identity and supplied local parallel frames; the additional comparison with the general correspondence assumes full AC and its ordinary supplier hypotheses."
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  references:
    - title: "Simon K. Donaldson, The ADHM construction of Yang-Mills instantons"
      url: https://arxiv.org/pdf/2205.08639
      locator: "§§2–3, printed pp. 3–5: charge-zero boundary and the framed Ward setting."
    - title: "Hiraku Nakajima and Kota Yoshioka, Lectures on Instanton Counting"
      url: https://arxiv.org/pdf/math/0311058
      locator: "§3.1, printed p. 17: framing convention and locally-free locus."
verification:
  precheck: pass
---

## Example

Fix $N\ge2$ and equip $V=\mathbb C^0=0$ and $W=\mathbb C^N$ with their standard Hermitian products. A raw ADHM datum consists of $B_i\in\operatorname{End}(V)$, $I:W\to V$, and $J:V\to W$, with moment maps

$$\mu_{\mathbb C}=[B_1,B_2]+IJ,\qquad \mu_{\mathbb R}=[B_1,B_1^\dagger]+[B_2,B_2^\dagger]+II^\dagger-J^\dagger J.$$

Stability means the span of all vectors $B_{i_1}\cdots B_{i_m}I(w)$ is $V$, costability means that no nonzero common invariant subspace lies in $\ker J$, and the regular zero-FI quotient is the set of data with both moments zero and both conditions, modulo $U(V)$. It consists of the unique empty datum at $k=0$.

Give $S^4=\mathbb H\mathbb P^1$ its unit round metric and positive stereographic orientation. A framed ASD object is a smooth Hermitian rank-$N$ bundle $E\to S^4$ with a smooth unitary connection $A$, a unitary framing at infinity, $F_A^+=(F_A+*_gF_A)/2=0$, and

$$q_N(E,A)=-\frac{1}{8\pi^2}\int_{S^4}\operatorname{tr}_N(F_A\wedge F_A)=0,$$

modulo unitary bundle isomorphisms preserving the framing and connection. This sector consists of the trivial rank-$N$ bundle with its flat connection and fixed framing, and its group of framing-preserving parallel unitary automorphisms is trivial.

## Example references

[[thm-qftx-zero-fi-regular-adhm-asd-correspondence]]

[[def-qftx-adhm-linear-data-stability-and-regularity]]

[[thm-qftx-yang-mills-selfdual-action-bound]]

[[thm-higher-dimensional-spheres-are-simply-connected]]

[Donaldson, §§2–3, printed pp. 3–5](https://arxiv.org/pdf/2205.08639)

[Nakajima–Yoshioka, §3.1, printed p. 17](https://arxiv.org/pdf/math/0311058)

## Facts & Assumptions

**Given:** $N\ge2$, $k=0$, the raw ADHM definitions, and a smooth framed unitary ASD connection on the round $S^4$ with $q_N=0$.

[F1] For $V=\mathbb C^0$, each ADHM endomorphism or framing map is the unique zero-dimensional map; stability and costability hold vacuously, and both $U(0)$ and $GL(0)$ are trivial. [[def-qftx-adhm-linear-data-stability-and-regularity]]

[F2] On the real vector space $\mathfrak u(N)$ of skew-Hermitian matrices, $B(X,Y)=-\operatorname{tr}_N(XY)$ is a positive-definite real bilinear form. The charge formula in the Example is $q_N=(8\pi^2)^{-1}\int B(F_A\wedge F_A)$. Under full AC the general action-bound supplier gives the ASD zero-charge implication; step 1.2 proves the needed identity directly here, so that supplier is not used without its axiom premise. [[def-qftx-instanton-number-and-asd-sector]], [[thm-qftx-yang-mills-selfdual-action-bound]]

[A1] Only for the additional comparison in step 2.1, assume full AC and the exact ordinary quotient, GAGA, Ward and monad supplier hypotheses of the conditional correspondence theorem. The direct classification below does not invoke that general correspondence. [[thm-qftx-zero-fi-regular-adhm-asd-correspondence]], [[def-axiom-of-choice]]

[F3] The sphere $S^4$ is simply connected. A flat connection has local parallel frames and path-independent parallel transport on coordinate balls. [[thm-higher-dimensional-spheres-are-simply-connected]], [[thm-a-flat-connection-admits-local-parallel-frames]], [[prop-flat-connections-have-locally-path-independent-parallel-transport-on-a-coordinate-ball]]

## Proof

**Given:** The hypotheses in the Example.

1.1 When $k=0$, $V=0$. There is exactly one quadruple of maps, all with zero-dimensional domain or codomain. Both moment equations are the unique equality of endomorphisms of $0$; the span of the empty family is $0=V$, and no nonzero subspace of $V$ exists. Thus this datum is stable and costable, and the quotient by $U(0)$ is one point. [F1, algebra]

1.2 The Hodge identity and $*_gF_A=-F_A$ give $\int_{S^4}|F_A|_B^2\,d\mathrm{vol}=\int B(F_A\wedge *_gF_A)=-8\pi^2q_N=0$, where the norm uses the round metric and the positive form [F2]. Its continuous nonnegative integrand must vanish everywhere: a positive value would give a positive integral on an open neighborhood. Hence $F_A=0$. For two piecewise smooth paths from $\infty$ to $x$, their concatenation is a loop and is null-homotopic by [F3]. Pull back a cover by coordinate balls with local parallel frames to the compact homotopy square; a Lebesgue number gives a finite subdivision with each cell mapped into one such ball. Transport along a continuous edge is defined using that ball's parallel frame; on overlaps parallel-frame changes are locally constant, so the definition agrees along each connected edge. Each cell has identity boundary transport. Sweeping through successive cells cancels the transport on shared edges with its inverse and leaves identity transport around the external boundary. Thus transport from $\infty$ is path-independent. Transporting the fixed framed orthonormal basis gives smooth parallel sections, as seen in local parallel frames, and a framed unitary isomorphism with the trivial flat bundle. A parallel unitary automorphism preserving the framing is identity, since its value everywhere is transported from its identity value at $\infty$. Conversely, the trivial framed flat connection is ASD and has $q_N=0$. Thus the sector has exactly one class and its based parallel stabilizer is trivial. [given, F2, F3, construct]

2.1 Pairing the unique empty datum with the trivial framed flat bundle gives the bijection of the two singleton sets established in steps 1.1 and 1.2. For the additional comparison, impose all hypotheses [A1], including full AC: the conditional correspondence then applies, and its bijection necessarily sends that datum to this class, with $q_N=0$. The direct classification and its no-stabilizer conclusion were proved before this comparison and require no irreducibility assumption. [A1, F1, F2, step 1.1, step 1.2] ∎
