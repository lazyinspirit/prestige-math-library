---
id: lem-qftx-adhm-real-monad-normalization-and-charge
kind: lemma
title: Real monad normalization, regularity, framing and charge
status: "published"
origin: pipeline
domain: mathematics
library: mathematics
category: quantum-field-theory-mathematics
page: qftx-adhm-zero-fi-asd-correspondence
dependency_level: 11
axiom_base: "ZF + full AC through the stated GAGA, Chern-Weil and projective-cohomology suppliers."
deps:
  - thm-qftx-positive-real-adhm-monad-normal-form
  - lem-qftx-asd-twistor-vanishing-and-monad-reconstruction
  - def-qftx-zero-fi-regular-adhm-and-twistor-data
  - def-qftx-adhm-linear-data-stability-and-regularity
  - lem-qftx-linear-twistor-monad-charge-normalization
  - lem-qftx-adhm-entrywise-conjugation-does-not-match-real-moment-map
  - def-qftx-donaldson-adhm-matrix-convention
  - thm-qftx-framed-penrose-ward-correspondence-on-s4
  - lem-qftx-u-n-determinant-flat-charge-normalization
  - thm-chern-weil-forms-represent-the-at-characteristic-classes-over-the-reals
  - lem-qftx-raw-adhm-real-twistor-block
dependency_roles:
  thm-qftx-positive-real-adhm-monad-normal-form: mathematical-premise
  lem-qftx-asd-twistor-vanishing-and-monad-reconstruction: mathematical-premise
  def-qftx-zero-fi-regular-adhm-and-twistor-data: mathematical-premise
  def-qftx-adhm-linear-data-stability-and-regularity: mathematical-premise
  lem-qftx-linear-twistor-monad-charge-normalization: mathematical-premise
  lem-qftx-adhm-entrywise-conjugation-does-not-match-real-moment-map: mathematical-premise
  def-qftx-donaldson-adhm-matrix-convention: mathematical-premise
  thm-qftx-framed-penrose-ward-correspondence-on-s4: mathematical-premise
  lem-qftx-u-n-determinant-flat-charge-normalization: mathematical-premise
  thm-chern-weil-forms-represent-the-at-characteristic-classes-over-the-reals: mathematical-premise
  lem-qftx-raw-adhm-real-twistor-block: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Simon K. Donaldson, The ADHM construction of Yang-Mills instantons"
      url: https://arxiv.org/pdf/2205.08639
      locator: "§6, printed pp. 10–11: quaternionic block matrix, its two equations and pointwise nondegeneracy; the block translation is not taken as proved by citation."
    - title: "Hiraku Nakajima and Kota Yoshioka, Lectures on Instanton Counting"
      url: https://arxiv.org/pdf/math/0311058
      locator: "§3.1, printed pp. 17–19: framed locally-free sheaf locus and its cited SU(N) ASD interpretation; the U(N) normalization is supplied locally."
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-25
---

## Statement

Let $N\geq2$, $k\geq0$, and equip $V=\mathbb C^k$ and $W=\mathbb C^N$ with their standard Hermitian products. Let $S^4=\mathbb H\mathbb P^1$ and $Z=\mathbb P_{\mathbb C}(\mathbb H^2)=\mathbb C\mathbb P^3$ have the twistor projection $\pi([v])=\operatorname{span}_{\mathbb C}(v,jv)$ and antiholomorphic involution $\sigma([v])=[jv]$ specified in the preceding twistor definition, with $j^2=-1$. Let $E\to S^4$ be a framed Hermitian bundle with a smooth unitary connection $A$, unitary framing at infinity, and $F_A^+=(F_A+*_gF_A)/2=0$ for the unit round metric and positive orientation specified in the twistor definition. Define $q_N(E,A)=-(8\pi^2)^{-1}\int_{S^4}\operatorname{tr}_N(F_A\wedge F_A)$. Let $\mathcal E$ be its holomorphic Ward bundle, with underlying smooth bundle $\pi^*E$. A framed positive Ward bundle includes a nondegenerate holomorphic pairing $b:\mathcal E\otimes\sigma^*\overline{\mathcal E}\to\mathcal O_Z$ satisfying $b_{\sigma z}(v,u)=\overline{b_z(u,v)}$, whose induced form $b_z(s(z),t(\sigma z))$ is positive on $H^0(L_x,\mathcal E|_{L_x})$ for every real twistor line $L_x$, and a unitary framing on the infinity line $L_\infty$.

Assume its monad is the holomorphic complex

$$\mathcal O_Z(-1)\otimes U\xrightarrow{\alpha}\mathcal O_Z\otimes S\xrightarrow{\beta}\mathcal O_Z(1)\otimes U',$$

with $\beta\alpha=0$, locally split injective and surjective end maps, locally free middle cohomology $\ker\beta/\operatorname{im}\alpha$, and $\dim_\mathbb C U=\dim_\mathbb C U'=k$, $\dim_\mathbb C S=2k+N$. Then the real monad is equivalent to a raw datum $(B_1,B_2,I,J)$ on $V=\mathbb C^k$, $W=\mathbb C^N$ in exactly the convention

$$\mu_{\mathbb C}=[B_1,B_2]+IJ=0,\qquad \mu_{\mathbb R}=[B_1,B_1^\dagger]+[B_2,B_2^\dagger]+II^\dagger-J^\dagger J=0.$$

The tuple is stable when the vectors $B_{i_1}\cdots B_{i_m}I(w)$ span $V$, costable when no nonzero common $B_1,B_2$-invariant subspace lies in $\ker J$, and regular when both hold. Equivalently, the raw block map

$$D_z=\begin{pmatrix}-B_2+z_2&B_1-z_1&I\\ B_1^\dagger-\bar z_1&B_2^\dagger-\bar z_2&J^\dagger\end{pmatrix}:V\oplus V\oplus W\to V\oplus V$$

is onto for every $z=(z_1,z_2)\in\mathbb C^2$. Its kernel projection connection on the finite stereographic chart is $\nabla=P\,d$, where $P$ is the orthogonal projection onto $\ker D_z$; it extends over infinity, has the specified framing, and equals the Ward connection. Changes of normalized monad bases, meaning chain isomorphisms preserving the lifted pairing and infinity framing, induce exactly the simultaneous $U(k)$ action on raw data, and inverse matrix extraction recovers the same $U(k)$ orbit. With $q_N(E,A)=-(8\pi^2)^{-1}\int_{S^4}\operatorname{tr}_N(F_A\wedge F_A)$ for the framed ASD connection $A$, the resulting charge is $k=-q_N(E,A)=\langle c_2(E),[S^4]\rangle$. The entrywise conjugation candidate is refuted by the recorded comparison lemma and is not used in the intrinsic real monad normalization.

## Statement references

[[lem-qftx-asd-twistor-vanishing-and-monad-reconstruction]]

[[def-qftx-zero-fi-regular-adhm-and-twistor-data]]

[[def-qftx-adhm-linear-data-stability-and-regularity]]

[[lem-qftx-linear-twistor-monad-charge-normalization]]

[[lem-qftx-adhm-entrywise-conjugation-does-not-match-real-moment-map]]

[Donaldson, §6, printed pp. 10–11](https://arxiv.org/pdf/2205.08639)

[Nakajima–Yoshioka, §3.1, printed pp. 17–19](https://arxiv.org/pdf/math/0311058)

## Facts & Assumptions

**Given:** The stated Ward bundle and normalized monad; the exact raw ADHM moment-map convention; and the conditional real-block interface below.

[A1] The exact intrinsic normal-form supplier takes a linear bundle monad on the fixed $\mathbb P^3$, with dimensions $k,2k+N,k$, $N\ge2$, locally free middle bundle trivial on every real line, its positive nondegenerate holomorphic $\sigma$-Hermitian pairing and unitary framing at infinity. It asserts the precise raw polynomial $\alpha,\beta$ form, zero moment maps, stable-and-costable regularity, inverse extraction and exactly the simultaneous $U(k)$ residual action. It retains compact rotation/framing chain factors and naturality on the stated first-order locally-free/base-change range, including $k=0$ and flat summands. These are the needed existence, positivity, uniqueness and family conclusions, not an equivalence with a historical displayed block. [[thm-qftx-positive-real-adhm-monad-normal-form]] The exact first-order range additionally requires free $H^0(F_A)$ with reduction base change, a direct-summand coefficient-image module with reduction base change, and triviality and section base change on each fixed real twistor line; positivity is required only on the reduction. These hypotheses are imposed and are not inferred for arbitrary ASD deformations or flat-summand rank jumps. Only this range and involution-preserving epsilon-to-r-epsilon maps are used.

[F1] The preceding vanishing lemma reconstructs a three-term monad with dimensions $k,2k+N,k$ from the Ward bundle. [[lem-qftx-asd-twistor-vanishing-and-monad-reconstruction]]

[F2] The exact raw moment maps, stability, costability and $U(k)$ action are those in the local ADHM definition. [[def-qftx-adhm-linear-data-stability-and-regularity]]

[F3] A normalized monad of these dimensions has $\operatorname{ch}(\mathcal E)=N-kH^2$ and, under the stated Ward pullback and orientation, $k=-q_N=\langle c_2(E),[S^4]\rangle$. [[lem-qftx-linear-twistor-monad-charge-normalization]]

[F4] The framed determinant connection is flat and its framing gives the $SU(N)$ reduction needed for the trace-normalized Chern-Weil comparison. [[lem-qftx-u-n-determinant-flat-charge-normalization]], [[thm-chern-weil-forms-represent-the-at-characteristic-classes-over-the-reals]]

[F5] The exact raw real monad, moment coefficients, regularity/rank equivalence, positive kernel projection, local ASD curvature and framing torus chain factors are proved directly, without the source substitution. [[lem-qftx-raw-adhm-real-twistor-block]]

## Proof

**Given:** the exact supplier interface [A1], together with [F1]–[F4].

1.1 The entrywise-conjugation counterexample remains valid for the literal source equations; it is not a defect in the raw block supplied by [F5]. The source's displayed M also ends its first block row with P* despite declaring P of size k×N, so that entry has N rows rather than k in general. These displays cannot be substituted for an intrinsic real normal-form proof. Use exactly [A1]'s intrinsic existence and uniqueness conclusions. [A1, F2, F5, algebra]

1.2 The reconstructed monad in [F1] is linear with locally free middle bundle, trivial on every real line, and has the positive Hermitian Ward pairing and unitary framing fixed in the definition. Its dimensions are those required by [A1]. Thus, assuming the exact supplier [A1], extract the raw tuple from its intrinsic normal form. Its monad composition vanishes, so [F5]'s polynomial identity makes both raw moment coefficients zero. Full fiber rank on each real line and [F5]'s Gram/rank equivalence identify the locus exactly with stable-and-costable regularity. The intrinsic unitary normalization and inverse-extraction clause in [A1] identify the remaining framed monad changes precisely with $(B_1,B_2,I,J)\mapsto(gB_1g^{-1},gB_2g^{-1},gI,Jg^{-1})$ for $g\in U(k)$. The compact-rotation and framing chain maps are exactly those in [F5] and [A1]; first-order naturality is used only in [A1]’s locally-free/base-change range. No arbitrary analytic-family algebraization is inferred. No source-coordinate conjugation or nonexistent universal equivalence is invoked. [A1, F2, F5, algebra]

2.1 Conversely, the regular raw monad in [F5] is a global holomorphic bundle, trivial on every real line, with canonical positive reality: its pairing is induced by the standard Hermitian form on K and $\beta(v)=\alpha(\sigma v)^*$. It is well-defined on cohomology since $\ker\beta(v)$ is orthogonal to $\operatorname{im}\alpha(\sigma v)$, and on a real line its canonical representatives are $\ker D$ with the positive restricted metric; at infinity it is W. Apply the proved local Ward construction to obtain a global framed unitary ASD connection. On the finite chart it equals P d: for a kernel representative v along a $D=\ker(de)$ direction, β is constant, so its derivative lies in $\ker\beta$; the component of dv orthogonal to $\ker D$ lies in $\operatorname{im}a\oplus\operatorname{im}b$, and $\beta=f(-\lambda_2,\lambda_1)$ forces that component to lie in $\operatorname{im}(a\lambda_1+b\lambda_2)=\operatorname{im}\alpha$. It therefore vanishes in monad cohomology, leaving exactly P dv. Thus evaluation identifies the projection and Ward connections; the Ward construction supplies the smooth extension and framing at infinity. The normalization of [F3] with determinant reduction [F4] gives $k=c_2(E)[S^4]=-q_N$. Under [A1], extraction and construction are inverse on U(k) orbits and framed Ward connections, proving the full claim under the exact normal-form, GAGA and coupled-vanishing hypotheses stated above. [A1, F1, F3, F4, F5, step 1.2, algebra] ∎
