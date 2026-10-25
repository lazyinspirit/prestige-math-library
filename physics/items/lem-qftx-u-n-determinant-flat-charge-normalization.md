---
id: lem-qftx-u-n-determinant-flat-charge-normalization
kind: lemma
title: Determinant flatness and charge normalization for framed U(N) ASD data
status: draft
origin: pipeline
domain: mathematics
library: mathematics
category: quantum-field-theory-mathematics
page: qftx-adhm-zero-fi-asd-correspondence
dependency_level: 4
axiom_base: "ZF + full AC, inherited through characteristic-class comparison; full AC implies the countable-choice hypothesis of de Rham sphere cohomology."
deps:
  - def-qftx-zero-fi-regular-adhm-and-twistor-data
  - def-qftx-instanton-number-and-asd-sector
  - lem-qftx-principal-curvature-cartan-bianchi
  - def-axiom-of-choice
  - thm-de-rham-cohomology-of-spheres
  - thm-higher-dimensional-spheres-are-simply-connected
  - prop-flat-connections-have-locally-path-independent-parallel-transport-on-a-coordinate-ball
  - thm-a-flat-connection-admits-local-parallel-frames
  - def-chern-pontryagin-and-euler-characteristic-forms
  - def-chern-classes-from-the-projective-bundle-relation
  - thm-chern-weil-forms-represent-the-at-characteristic-classes-over-the-reals
  - thm-de-rham-theorem
dependency_roles:
  def-qftx-zero-fi-regular-adhm-and-twistor-data: mathematical-premise
  def-qftx-instanton-number-and-asd-sector: mathematical-premise
  lem-qftx-principal-curvature-cartan-bianchi: mathematical-premise
  def-axiom-of-choice: mathematical-premise
  thm-de-rham-cohomology-of-spheres: mathematical-premise
  thm-higher-dimensional-spheres-are-simply-connected: mathematical-premise
  prop-flat-connections-have-locally-path-independent-parallel-transport-on-a-coordinate-ball: mathematical-premise
  thm-a-flat-connection-admits-local-parallel-frames: mathematical-premise
  def-chern-pontryagin-and-euler-characteristic-forms: mathematical-premise
  def-chern-classes-from-the-projective-bundle-relation: mathematical-premise
  thm-chern-weil-forms-represent-the-at-characteristic-classes-over-the-reals: mathematical-premise
  thm-de-rham-theorem: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Simon K. Donaldson, The ADHM construction of Yang-Mills instantons"
      url: https://arxiv.org/pdf/2205.08639
      locator: "§6, printed pp. 10–11: U(r) framing, matrix construction, orientation/charge conventions; local proof supplies the determinant-line reduction and exact trace conversion."
    - title: "Hiraku Nakajima and Kota Yoshioka, Lectures on Instanton Counting"
      url: https://arxiv.org/pdf/math/0311058
      locator: "§3.1, printed p. 17: framing implies c1=0 and the locally-free instanton sector; local proof establishes the stronger flat determinant connection under ASD."
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-25
---

## Statement

Assume full Axiom of Choice. Let $S^4=\mathbb H\mathbb P^1$ have the unit round metric and positive stereographic orientation $dx^0\wedge dx^1\wedge dx^2\wedge dx^3$, where $z_1=x^0+ix^1$, $z_2=x^2+ix^3$. Let $E\to S^4$ be a smooth Hermitian rank-$N$ bundle, $N\ge2$, with a smooth unitary connection $A$ and a unitary framing $\Phi:E_\infty\to\mathbb C^N$. Its curvature $F_A$ is an anti-Hermitian endomorphism-valued two-form; set $F_A^+=(F_A+*_gF_A)/2$, where $*_g$ is the Hodge star for the stated metric and orientation, and assume $F_A^+=0$. The determinant-line connection is the connection induced by $A$ on $\det E=\Lambda^N E$. Its framing at $\infty$ determines a unit vector in $(\det E)_\infty$. With

$$q_N(E,A)=-\frac{1}{8\pi^2}\int_{S^4}\operatorname{tr}_N(F_A\wedge F_A)$$

and determinant Chern-form convention $c(A)=\det(I-F_A/(2\pi i))$, one has

$$q_N(E,A)=-\langle c_2(E),[S^4]\rangle\in-\mathbb Z_{\geq0}.$$

Thus $k=-q_N=\langle c_2(E),[S^4]\rangle$ is a nonnegative integer, with the sign corresponding to the anti-self-dual equation $F_A^+=0$.

The induced determinant-line connection is flat. Its framing at $\infty$ determines a unique global unit parallel section, so the framed unitary bundle reduces to a framed $SU(N)$ bundle.

## Statement references

[[def-qftx-zero-fi-regular-adhm-and-twistor-data]]

[[def-qftx-instanton-number-and-asd-sector]]

[[thm-de-rham-cohomology-of-spheres]]

[[thm-higher-dimensional-spheres-are-simply-connected]]

[[thm-chern-weil-forms-represent-the-at-characteristic-classes-over-the-reals]]

## Facts & Assumptions

**Given:** Full AC, a smooth framed Hermitian rank-$N$ bundle on the specified compact oriented round $S^4$, a smooth unitary connection, and $F_A^+=0$.

[A1] Full AC is the choice-function principle; restricting its choice function to any countable family gives countable choice. [[def-axiom-of-choice]]

[F1] In local unitary frames $F_A=dA+A\wedge A$ is anti-Hermitian, the Hodge star is that of the specified orientation, and $q_N=-(8\pi^2)^{-1}\int\operatorname{tr}_N(F_A\wedge F_A)$. [[def-qftx-zero-fi-regular-adhm-and-twistor-data]], [[def-qftx-instanton-number-and-asd-sector]]

[F2] The trace curvature obeys $D_AF_A=0$, and trace annihilates commutators, so $d\operatorname{tr}F_A=0$. [[lem-qftx-principal-curvature-cartan-bianchi]]

[F3] $H^2_{\mathrm{dR}}(S^4)=0$ under countable choice, and $S^4$ is simply connected. [[thm-de-rham-cohomology-of-spheres]], [[thm-higher-dimensional-spheres-are-simply-connected]]

[F4] A flat connection has local parallel frames and path-independent parallel transport on sufficiently small coordinate balls. [[thm-a-flat-connection-admits-local-parallel-frames]], [[prop-flat-connections-have-locally-path-independent-parallel-transport-on-a-coordinate-ball]]

[F5] The total Chern form is $\det(I-F_A/(2\pi i))$, and its real de Rham class is the realification of the topological Chern class. [[def-chern-pontryagin-and-euler-characteristic-forms]], [[def-chern-classes-from-the-projective-bundle-relation]], [[thm-chern-weil-forms-represent-the-at-characteristic-classes-over-the-reals]], [[thm-de-rham-theorem]]

## Proof

1.1 In a local unitary frame let $F_{\det A}$ be the curvature of the induced connection on $\det E$. The induced connection on the top exterior power has local connection matrix $\operatorname{tr}A$, hence $F_{\det A}=\operatorname{tr}F_A$. Put $\eta=-i\operatorname{tr}F_A$, a real two-form because $F_A$ is anti-Hermitian. By [F2], $d\eta=0$, and the linearity of trace in $F_A^+=0$ gives $*_g\eta=-\eta$. [given, F1, F2, algebra]


2.1 By [A1] and [F3], $\eta$ is exact, so choose a smooth real one-form $\alpha$ with $\eta=d\alpha$. The ASD equation gives $\int_{S^4}\eta\wedge *_g\eta=-\int_{S^4}d\alpha\wedge\eta=-\int_{S^4}d(\alpha\wedge\eta)=0$, since $d\eta=0$ and $S^4$ is compact without boundary. The integrand $\eta\wedge *_g\eta$ is the nonnegative squared norm density of the real form $\eta$; zero integral forces $\eta=0$ pointwise. Hence $F_{\det A}=0$ and the determinant connection is flat. [A1, F3, step 1.1, algebra]

3.1 Choose the unit vector $v_\infty$ in $(\det E)_\infty$ specified by the determinant of the framing. For any $x\in S^4$, parallel transport $v_\infty$ along a piecewise smooth path from $\infty$ to $x$. If two paths are chosen, their concatenation is a loop. By [F3] the loop is null-homotopic; subdivide a null-homotopy square into finitely many rectangles mapped into coordinate balls, which is possible by compactness and a Lebesgue number for the pulled-back coordinate-ball cover. On each rectangle [F4] makes boundary transport the identity. Multiplying around the subdivision cancels the interior edges, so the two path transports agree. The resulting section is smooth by local parallel frames, is parallel by construction, and agrees with $v_\infty$; uniqueness follows from uniqueness of parallel sections along each path. Its unit norm is preserved by unitary parallel transport, so the determinant framing reduces the structure group to $SU(N)$. [F3, F4, step 2.1, construct]

4.1 Writing $C=-F_A/(2\pi i)$, the degree-four term of $\det(I+C)$ is $c_2(A)=\tfrac12((\operatorname{tr}C)\wedge(\operatorname{tr}C)-\operatorname{tr}(C\wedge C))$. Step 2.1 gives $\operatorname{tr}F_A=0$, so this reduces to $c_2(A)=(8\pi^2)^{-1}\operatorname{tr}_N(F_A\wedge F_A)$. Therefore $q_N=-\int_{S^4}c_2(A)$. By [F5] and the de Rham integration pairing, $\int_{S^4}c_2(A)=\langle c_2(E),[S^4]\rangle$, an integer. Finally $q_N=(8\pi^2)^{-1}\int B(F_A\wedge F_A)$ for the positive invariant form $B(X,Y)=-\operatorname{tr}_N(XY)$; since $F_A=-*_gF_A$ and $B$ is positive definite, $q_N=-(8\pi^2)^{-1}\int B(F_A\wedge *_gF_A)\leq0$. This proves the stated sign and nonnegativity of $k=-q_N$. [F1, F5, step 2.1, algebra] ∎
