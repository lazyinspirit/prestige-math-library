---
id: lem-qftx-rank-one-regular-adhm-and-ordinary-asd-boundary
kind: lemma
title: Rank-one regular zero-FI ADHM and ordinary ASD boundary
status: "published"
origin: session
domain: mathematics
library: mathematics
category: quantum-field-theory-mathematics
page: qftx-adhm-zero-fi-asd-correspondence
dependency_level: 13
deps:
  - thm-qftx-adhm-real-complex-quotient-correspondence
  - def-qftx-adhm-linear-data-stability-and-regularity
  - thm-qftx-zero-fi-regular-adhm-asd-correspondence
  - lem-qftx-raw-adhm-real-twistor-block
  - lem-qftx-u-n-determinant-flat-charge-normalization
  - thm-de-rham-cohomology-of-spheres
  - thm-general-stokes-theorem
  - thm-higher-dimensional-spheres-are-simply-connected
  - thm-a-flat-connection-admits-local-parallel-frames
  - prop-flat-connections-have-locally-path-independent-parallel-transport-on-a-coordinate-ball
  - thm-smooth-partitions-of-unity-exist-on-manifolds
  - def-axiom-of-choice
dependency_roles:
  thm-qftx-adhm-real-complex-quotient-correspondence: mathematical-premise
  def-qftx-adhm-linear-data-stability-and-regularity: mathematical-premise
  thm-qftx-zero-fi-regular-adhm-asd-correspondence: mathematical-premise
  lem-qftx-raw-adhm-real-twistor-block: mathematical-premise
  lem-qftx-u-n-determinant-flat-charge-normalization: mathematical-premise
  thm-de-rham-cohomology-of-spheres: mathematical-premise
  thm-general-stokes-theorem: mathematical-premise
  thm-higher-dimensional-spheres-are-simply-connected: mathematical-premise
  thm-a-flat-connection-admits-local-parallel-frames: mathematical-premise
  prop-flat-connections-have-locally-path-independent-parallel-transport-on-a-coordinate-ball: mathematical-premise
  thm-smooth-partitions-of-unity-exist-on-manifolds: mathematical-premise
  def-axiom-of-choice: mathematical-premise
axiom_base: ZF + full AC inherited from the rank-two correspondence and smooth/de Rham suppliers
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: Hiraku Nakajima and Kota Yoshioka, Lectures on Instanton Counting
      url: https://arxiv.org/pdf/math/0311058
      locator: Section3.1, framed torsion-free and locally-free boundary; the rank-one stabilization and first-order rigidity are proved locally below, not quoted as an extra source theorem.
    - title: Simon K. Donaldson, The ADHM construction of Yang-Mills instantons
      url: https://arxiv.org/pdf/2205.08639
      locator: Framed ordinary ASD and ADHM setting; the proof uses the exact local rank-two suppliers, not a new reading or a source-coordinate substitution.
verification:
  precheck: pending
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-25
---

## Statement

Assume AC and the exact rank-two regular zero-FI ADHM/ASD correspondence, with all its actual analytic and intrinsic normal-form prerequisites. Fix $k\ge0$, $V=\mathbb C^k$ and $W=\mathbb C$. Let $\mathcal A^{\mathrm{reg}}_{k,1}$ be the orbit set by $U(V)$ of $B_1,B_2\in\operatorname{End}(V)$, $I:W\to V$, $J:V\to W$ with

$$[B_1,B_2]+IJ=0,\qquad [B_1,B_1^\dagger]+[B_2,B_2^\dagger]+II^\dagger-J^\dagger J=0,$$

such that words in the $B_i$ applied to $I(W)$ span $V$ and no nonzero common invariant subspace lies in $\ker J$. On the positively stereographically oriented unit round $S^4$, let $\mathcal M^{\mathrm{ASD}}_{k,1}$ be the set of smooth Hermitian line bundles $L$, smooth unitary connections $A$ with $F_A^+=0$, and unitary framings $\Phi:L_\infty\to\mathbb C$, with $q_1=-(8\pi^2)^{-1}\int F_A\wedge F_A=-k$, modulo framed unitary isomorphisms. After a fixed framed bundle is chosen, its gauge group consists of smooth unitary automorphisms equal to identity at infinity.

The regular complex $GL(V)$ quotient, defined by retaining the complex equation and the same stability and costability, has the same empty-or-point classification under the zero-FI real/complex quotient identification. For $k>0$ both ordinary sets are empty. For $k=0$ they are the single empty raw datum and the framed flat line, respectively, with no framed stabilizer. This identification is equivariant for $T=(S^1)^2\times S^1$, with $h=e^{-1}$, raw action $(t_1B_1,t_2B_2,Ih^{-1},t_1t_2hJ)$ and connection action by inverse rotational pullback and postcomposition of the framing with $h$; on the resulting point these actions are trivial.

A first-order real Hermitian family here is over $D=\mathbb C[\varepsilon]/(\varepsilon^2)$ with involution $\varepsilon^\dagger=\varepsilon$. On the raw side use free $D$-modules of ranks $k,1$, the displayed equations over $D$, regular reduction, fixed framing module, and unitary $D$-linear changes of basis. On the connection side use locally free smooth Hermitian line-bundle deformations with framed special fiber and a unitary connection $A_0+\varepsilon a$, satisfying ASD coefficientwise, modulo unitary gauge transformations with framed reduction and value identity at infinity. For $k>0$ these groupoids are empty; for $k=0$ each is equivalent to the one-object groupoid with trivial automorphism group. The identification commutes with reduction, infinitesimal scalar base changes preserving the involution, and the compact action. In particular it identifies their zero tangent spaces and restricts to the exact locally-free/base-change family range in the rank-two correspondence. No positive-FI quotient, its non-locally-free rank-one boundary, or its fixed-point series is identified with ordinary ASD moduli.

## Statement references

[[thm-qftx-zero-fi-regular-adhm-asd-correspondence]]

[[lem-qftx-raw-adhm-real-twistor-block]]

[[lem-qftx-u-n-determinant-flat-charge-normalization]]

[[thm-de-rham-cohomology-of-spheres]]

[[thm-general-stokes-theorem]]

## Facts & Assumptions

**Given:** The raw, connection, gauge, compact-action and first-order objects in the Statement, with AC.

[A1] The exact rank-two theorem supplies the ordinary framed ASD connection of a regular rank-two datum by its raw forward monad/projection construction, extends it smoothly over infinity, and proves $q_2=-k$. Its exact GAGA, coupled-vanishing and intrinsic normal-form hypotheses are retained in the rank-one raw emptiness deduction. [[thm-qftx-zero-fi-regular-adhm-asd-correspondence]]

[F1] Raw stability, costability, zero moments, unitary gauge and the compact action have their explicit finite-dimensional definitions; the forward block is the projection onto the kernel of the displayed raw matrix and is a global real twistor monad, with the stated framing. [[def-qftx-adhm-linear-data-stability-and-regularity]], [[lem-qftx-raw-adhm-real-twistor-block]]

[F2] For any smooth unitary ASD rank-two bundle on the specified sphere, the determinant connection is flat. This lemma is proved independently of inverse ADHM or projective GAGA. [[lem-qftx-u-n-determinant-flat-charge-normalization]]

[F3] $S^4$ is simply connected; flat connections have local parallel frames and path-independent transport on coordinate balls. [[thm-higher-dimensional-spheres-are-simply-connected]], [[thm-a-flat-connection-admits-local-parallel-frames]], [[prop-flat-connections-have-locally-path-independent-parallel-transport-on-a-coordinate-ball]]

[F4] $H^1_{\mathrm{dR}}(S^4)=H^2_{\mathrm{dR}}(S^4)=0$ and the integral of an exact four-form over the compact boundaryless sphere is zero. [[thm-de-rham-cohomology-of-spheres]], [[thm-general-stokes-theorem]]

[F5] Smooth chart covers admit subordinate locally finite partitions of unity. [[thm-smooth-partitions-of-unity-exist-on-manifolds]]

[L1] Only the raw positive-$k$ emptiness argument uses [A1]. The ordinary line-connection emptiness, zero-charge flat classification and first-order rigidity below use the independently proved determinant-flat, transport and de Rham inputs. No rank-one ordinary claim is deduced from the positive-FI formal series.

[F6] For $N\ge1$, each regular complex $GL(V)$ orbit has a zero-real-moment representative, unique modulo $U(V)$; the resulting identification is equivariant in the raw compact character convention. [[thm-qftx-adhm-real-complex-quotient-correspondence]]

## Proof

**Given:** The Statement hypotheses and exact inputs [A1], [F1]–[F5].

1.1 Stabilize a rank-one raw datum by $W'=\mathbb C\oplus\mathbb C$, $I'=(I,0)$ and $J'=(J,0)^t$, retaining $V,B_1,B_2$. Then $I'J'=IJ$, $I'I'^\dagger=II^\dagger$ and $J'^\dagger J'=J^\dagger J$. The word span is unchanged and $\ker J'=\ker J$, so both moments and regularity are unchanged. On the finite stereographic chart the raw kernel matrix annihilates the added framing line, and its orthogonal projection is $P_1\oplus1$. Thus [A1] produces a smooth rank-two ASD connection whose restriction to that chart is a line connection plus the flat added line and whose charge is $q_2=-k$. By [F2] its determinant curvature vanishes. On that chart this curvature is exactly the first line's curvature, so the whole rank-two curvature is zero there. Smoothness makes it zero also at infinity, hence $q_2=0$ and $k=0$. Thus no regular rank-one zero-FI datum exists for $k>0$, conditional on the exact retained rank-two input. By [F6], a regular complex rank-one orbit would have such a zero-real-moment representative, so the same emptiness conclusion applies to the complex regular quotient. [A1, F1, F2, F6, algebra]

1.2 Independently, stabilize any framed unitary ASD line connection by the trivial framed flat line. The result is a smooth unitary ASD rank-two connection. Its determinant connection is the original line connection, since $\det(L\oplus\mathbb C)=L$ and the added connection is flat. By [F2] the original connection is flat, so $q_1=0$. Its sector is therefore empty if $k>0$. If $k=0$, transport the unit vector fixed by its framing from infinity. Any two paths differ by a null-homotopic loop by [F3]; subdivide a compact null-homotopy into finitely many cells lying in parallel-frame coordinate balls. Boundary transports in each cell are identity and internal edges cancel, so the loop transport is identity. The resulting global unit parallel section gives the unique framed isomorphism to the trivial flat line. A parallel automorphism fixing its value at infinity is identity. On the raw side at $k=0$ every map is the unique zero-dimensional map, both regularity conditions hold, and $U(0)$ is trivial. This proves the point classification and absence of framed stabilizers. [F1, F2, F3, construct]

2.1 To type first-order bundle families without presuming a global trivialization, first use step 1.2 to identify the special fiber with its framed parallel line. Choose local lifts of this frame in a locally free Hermitian $D$-line family. If a lift has Hermitian Gram scalar $1+\varepsilon r$ with $r$ real, multiplication by $1-\varepsilon r/2$ makes it unitary, so unitary local lifts exist. Their transition functions have form $1+\varepsilon f_{ij}$, with imaginary-valued smooth $f_{ij}$ and additive cocycle identity. For a subordinate partition $(\rho_k)$, set $u_i=\sum_k\rho_k f_{ki}$ on chart $i$; terms extend by zero where needed. On an overlap, $u_j-u_i=\sum_k\rho_k(f_{kj}-f_{ki})=f_{ij}$. Changing local frames by $1-\varepsilon u_i$ kills the transitions. A constant unitary infinitesimal scalar then matches the given framing at infinity. Hence every such family can be written globally on the fixed framed line as $d+\varepsilon a$, with $a$ a smooth imaginary-valued one-form; the remaining gauge changes are $1+\varepsilon\phi$ with imaginary-valued $\phi$ and $\phi(\infty)=0$. [F3, F5, step 1.2, construct]

3.1 The coefficientwise ASD equation in this global frame is $(da)^+=0$. Write $a=i\alpha$ for a real one-form. Since $d\alpha$ is ASD, $\int|d\alpha|^2=-\int d\alpha\wedge d\alpha=-\int d(\alpha\wedge d\alpha)=0$ by [F4]. Continuity and nonnegativity imply $d\alpha=0$. Again [F4] gives $\alpha=df$; subtract the constant $f(\infty)$ and put $\phi=-if$. The based gauge $1+\varepsilon\phi$ removes $a$. This gauge is unique: a residual imaginary scalar with zero derivative is constant and its value at infinity is zero. Ordinary framed stabilizers were already trivial in step 1.2. The first-order connection groupoid is therefore the trivial point, not merely a set with one known reduced point. [F4, step 2.1, algebra]

4.1 A regular raw first-order family with $k>0$ would reduce to a prohibited datum from step 1.1, so none exists; the connection family for $k>0$ has no allowable special fiber by step 1.2. At $k=0$ the rank-zero internal $D$-module and all raw maps are uniquely zero, with trivial internal gauge group. Its forward monad is the constant framed line and its forward connection is $d$, also over $D$. Step 3.1 supplies a unique framed gauge from every first-order connection object to this one. Thus this explicit construction is an equivalence of the two first-order groupoids. Reduction and involution-preserving scalar maps commute with it, because the zero datum and the constant line pull back to themselves and the framed trivializing isomorphism is unique. The same argument after complexifying the real tangent spaces gives zero complexified tangent spaces; it does not assert a correspondence for arbitrary complex connections without the Hermitian real condition. [A1, F1, step 1.1, step 1.2, step 3.1, algebra]

5.1 Stabilization intertwines $T$ with the rank-two compact action having framing weights $(h,1)$. In the zero-charge classification, inverse rotations and framing changes send a flat framed object to a flat framed object; the unique framed parallel trivialization identifies it with the same point. Its uniqueness also makes the first-order identifications equivariant. They hold for every first-order Hermitian family defined above, hence also for the subset satisfying the exact locally-free/cohomology-base-change hypotheses retained in [A1]; no extra family statement is obtained from an orbit-set bijection. Positive-FI rank-one stable data and their non-locally-free sheaves and formal fixed-point series were not used in any step. [A1, F1, step 1.2, step 3.1, step 4.1, algebra] ∎
