---
id: lem-qftx-adhm-real-monad-normalization-and-charge
kind: lemma
title: Real monad normalization, regularity, framing and charge
status: draft
origin: pipeline
domain: mathematics
library: mathematics
category: quantum-field-theory-mathematics
page: qftx-adhm-zero-fi-asd-correspondence
dependency_level: 8
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
---

## Statement

Let $N\geq2$, $k\geq0$, and let a framed real Ward bundle on $Z=\mathbb CP^3$ have the normalized linear monad with vector-space dimensions $k,2k+N,k$. Then the real monad is equivalent to a raw datum $(B_1,B_2,I,J)$ on $V=\mathbb C^k$, $W=\mathbb C^N$ in exactly the convention

$$\mu_{\mathbb C}=[B_1,B_2]+IJ=0,\qquad \mu_{\mathbb R}=[B_1,B_1^\dagger]+[B_2,B_2^\dagger]+II^\dagger-J^\dagger J=0.$$

The tuple is regular exactly when the associated quaternionic construction is pointwise nondegenerate. Its kernel projection connection extends over $\infty$, has the specified framing, and equals the Ward connection. Changes of normalized monad bases induce exactly the $U(k)$ action on raw data, and inverse matrix extraction recovers the same $U(k)$ orbit. The resulting charge is $k=-q_N=\langle c_2(E),[S^4]\rangle$. A complete proof of the real monad-to-quaternionic block interface is still outstanding; the entrywise conjugation candidate is refuted by the recorded comparison lemma and is not used as that proof.

## Statement references

[[lem-qftx-asd-twistor-vanishing-and-monad-reconstruction]]

[[def-qftx-zero-fi-regular-adhm-and-twistor-data]]

[[def-qftx-adhm-linear-data-stability-and-regularity]]

[[lem-qftx-linear-twistor-monad-charge-normalization]]

[[lem-qftx-adhm-entrywise-conjugation-does-not-match-real-moment-map]]

[Donaldson, §6, printed pp. 10–11](https://arxiv.org/pdf/2205.08639)

[Nakajima–Yoshioka, §3.1, printed pp. 17–19](https://arxiv.org/pdf/math/0311058)

## Facts & Assumptions

**Given:** The stated Ward bundle and normalized monad; the exact raw ADHM moment-map convention; and the conditional real-block interface [A1] The exact intrinsic normal-form supplier takes a linear bundle monad on the fixed $\mathbb P^3$, with dimensions $k,2k+N,k$, $N\ge2$, locally free middle bundle trivial on every real line, its positive nondegenerate holomorphic $\sigma$-Hermitian pairing and unitary framing at infinity. It asserts the precise raw polynomial $\alpha,\beta$ form, zero moment maps, stable-and-costable regularity, inverse extraction and exactly the simultaneous $U(k)$ residual action. It retains compact rotation/framing chain factors and naturality on the stated first-order locally-free/base-change range, including $k=0$ and flat summands. These are the needed existence, positivity, uniqueness and family conclusions, not an equivalence with a historical displayed block. Until the actual supplier has been authored and independently checked, they remain an explicit prerequisite hold. [[thm-qftx-positive-real-adhm-monad-normal-form]]

[F1] The preceding vanishing lemma reconstructs a three-term monad with dimensions $k,2k+N,k$ from the Ward bundle. [[lem-qftx-asd-twistor-vanishing-and-monad-reconstruction]]

[F2] The exact raw moment maps, stability, costability and $U(k)$ action are those in the local ADHM definition. [[def-qftx-adhm-linear-data-stability-and-regularity]]

[F3] A normalized monad of these dimensions has $\operatorname{ch}(\mathcal E)=N-kH^2$ and, under the stated Ward pullback and orientation, $k=-q_N=\langle c_2(E),[S^4]\rangle$. [[lem-qftx-linear-twistor-monad-charge-normalization]]

[F4] The framed determinant connection is flat and its framing gives the $SU(N)$ reduction needed for the trace-normalized Chern-Weil comparison. [[lem-qftx-u-n-determinant-flat-charge-normalization]], [[thm-chern-weil-forms-represent-the-at-characteristic-classes-over-the-reals]]

[F5] The exact raw real monad, moment coefficients, regularity/rank equivalence, positive kernel projection, local ASD curvature and framing torus chain factors are proved directly, without the source substitution. [[lem-qftx-raw-adhm-real-twistor-block]]

## Proof

**Given:** [A1] as an explicit conditional interface, together with [F1]–[F4]. Until [A1] is supplied and checked, the proof below is conditional and this item is not ready.

1.1 The entrywise-conjugation counterexample remains valid for the literal source equations; it is not a defect in the raw block supplied by [F5]. The source's displayed M also ends its first block row with P* despite declaring P of size k×N, so that entry has N rows rather than k in general. These displays cannot be substituted for an intrinsic real normal-form proof. Retain exactly [A1]'s existence and uniqueness obligation. [A1, F2, F5, algebra]

1.2 The reconstructed monad in [F1] is linear with locally free middle bundle, trivial on every real line, and has the positive Hermitian Ward pairing and unitary framing fixed in the definition. Its dimensions are those required by [A1]. Thus, assuming the exact supplier [A1], extract the raw tuple from its intrinsic normal form. Its monad composition vanishes, so [F5]'s polynomial identity makes both raw moment coefficients zero. Full fiber rank on each real line and [F5]'s Gram/rank equivalence identify the locus exactly with stable-and-costable regularity. The intrinsic unitary normalization and inverse-extraction clause in [A1] identify the remaining framed monad changes precisely with $(B_1,B_2,I,J)\mapsto(gB_1g^{-1},gB_2g^{-1},gI,Jg^{-1})$ for $g\in U(k)$. The compact-rotation and framing chain maps are exactly those in [F5] and [A1]; first-order naturality is used only in [A1]’s locally-free/base-change range. No arbitrary analytic-family algebraization is inferred. No source-coordinate conjugation or nonexistent universal equivalence is invoked. [A1, F2, F5, algebra]

2.1 Conversely, the regular raw monad in [F5] is a global holomorphic bundle, trivial on every real line, with canonical positive reality: its pairing is induced by the standard Hermitian form on K and β(v)=α(σv)*. It is well-defined on cohomology since kerβ(v) is orthogonal to imα(σv), and on a real line its canonical representatives are kerD with the positive restricted metric; at infinity it is W. Apply the proved local Ward construction to obtain a global framed unitary ASD connection. On the finite chart it equals P d: for a kernel representative v along a D=ker(de) direction, β is constant, so its derivative lies in kerβ; the component of dv orthogonal to kerD lies in im a⊕im b, and β=f(−λ₂,λ₁) forces that component to lie in im(aλ₁+bλ₂)=imα. It therefore vanishes in monad cohomology, leaving exactly P dv. Thus evaluation identifies the projection and Ward connections; the Ward construction supplies the smooth extension and framing at infinity. The normalization of [F3] with determinant reduction [F4] gives k=c₂(E)[S⁴]=−q_N. Under [A1], extraction and construction are inverse on U(k) orbits and framed Ward connections, completing the original full claim conditionally only on that genuine inverse normal-form obligation and the stated upstream GAGA/Penrose inputs. [A1, F1, F3, F4, F5, step 1.2, algebra] ∎
