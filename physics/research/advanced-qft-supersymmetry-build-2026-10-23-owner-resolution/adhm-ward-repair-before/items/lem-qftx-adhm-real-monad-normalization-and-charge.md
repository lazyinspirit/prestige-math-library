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
  - lem-qftx-asd-twistor-vanishing-and-monad-reconstruction
  - def-qftx-zero-fi-regular-adhm-and-twistor-data
  - def-qftx-adhm-linear-data-stability-and-regularity
  - lem-qftx-linear-twistor-monad-charge-normalization
  - lem-qftx-adhm-entrywise-conjugation-does-not-match-real-moment-map
  - def-qftx-donaldson-adhm-matrix-convention
  - thm-qftx-framed-penrose-ward-correspondence-on-s4
  - lem-qftx-u-n-determinant-flat-charge-normalization
  - thm-chern-weil-forms-represent-the-at-characteristic-classes-over-the-reals
dependency_roles:
  lem-qftx-asd-twistor-vanishing-and-monad-reconstruction: mathematical-premise
  def-qftx-zero-fi-regular-adhm-and-twistor-data: mathematical-premise
  def-qftx-adhm-linear-data-stability-and-regularity: mathematical-premise
  lem-qftx-linear-twistor-monad-charge-normalization: mathematical-premise
  lem-qftx-adhm-entrywise-conjugation-does-not-match-real-moment-map: mathematical-premise
  def-qftx-donaldson-adhm-matrix-convention: mathematical-premise
  thm-qftx-framed-penrose-ward-correspondence-on-s4: mathematical-premise
  lem-qftx-u-n-determinant-flat-charge-normalization: mathematical-premise
  thm-chern-weil-forms-represent-the-at-characteristic-classes-over-the-reals: mathematical-premise
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

The tuple is regular exactly when the associated quaternionic construction is pointwise nondegenerate. Its kernel projection connection extends over $\infty$, has the specified framing, and equals the Ward connection. Changes of normalized monad bases induce exactly the $U(k)$ action on raw data, and inverse matrix extraction recovers the same $U(k)$ orbit. The resulting charge is $k=-q_N=\langle c_2(E),[S^4]\rangle$. A complete proof of the real monad-to-quaternionic block interface is still outstanding; the entrywise conjugation candidate is refuted by the calculation below and is not used as that proof.

## Statement references

[[lem-qftx-asd-twistor-vanishing-and-monad-reconstruction]]

[[def-qftx-zero-fi-regular-adhm-and-twistor-data]]

[[def-qftx-adhm-linear-data-stability-and-regularity]]

[[lem-qftx-linear-twistor-monad-charge-normalization]]

[[lem-qftx-adhm-entrywise-conjugation-does-not-match-real-moment-map]]

[Donaldson, §6, printed pp. 10–11](https://arxiv.org/pdf/2205.08639)

[Nakajima–Yoshioka, §3.1, printed pp. 17–19](https://arxiv.org/pdf/math/0311058)

## Facts & Assumptions

**Given:** The stated Ward bundle and normalized monad; the exact raw ADHM moment-map convention; and the conditional real-block interface [A1].

[A1] Missing real-monad interface: a proof must give an explicit unitary/quaternionic change of basis from the real Ward monad to the source block matrix, specify the resulting raw $(B_1,B_2,I,J)$, check both exact moment equations, prove that pointwise rank of the block operator is equivalent to stable-and-costable regularity, identify the kernel projection connection with the Ward connection including its extension and framing at $\infty$, and prove that normalized monad isomorphisms are exactly $U(k)$ changes of basis with inverse matrix extraction. The exact source equations are in [[def-qftx-donaldson-adhm-matrix-convention]], and the proposed entrywise-conjugate candidate fails the real equation by [[lem-qftx-adhm-entrywise-conjugation-does-not-match-real-moment-map]]. This is an unresolved local proof obligation, not an accepted supplier.

[F1] The preceding vanishing lemma reconstructs a three-term monad with dimensions $k,2k+N,k$ from the Ward bundle. [[lem-qftx-asd-twistor-vanishing-and-monad-reconstruction]]

[F2] The exact raw moment maps, stability, costability and $U(k)$ action are those in the local ADHM definition. [[def-qftx-adhm-linear-data-stability-and-regularity]]

[F3] A normalized monad of these dimensions has $\operatorname{ch}(\mathcal E)=N-kH^2$ and, under the stated Ward pullback and orientation, $k=-q_N=\langle c_2(E),[S^4]\rangle$. [[lem-qftx-linear-twistor-monad-charge-normalization]]

[F4] The framed determinant connection is flat and its framing gives the $SU(N)$ reduction needed for the trace-normalized Chern-Weil comparison. [[lem-qftx-u-n-determinant-flat-charge-normalization]], [[thm-chern-weil-forms-represent-the-at-characteristic-classes-over-the-reals]]

## Proof

**Given:** [A1] as an explicit conditional interface, together with [F1]–[F4]. Until [A1] is supplied and checked, the proof below is conditional and this item is not ready.

1.1 The proposed entrywise conjugation cannot be substituted for [A1]: [[lem-qftx-adhm-entrywise-conjugation-does-not-match-real-moment-map]] verifies that the source complex equation transfers but the source real equation does not imply the raw real equation. Thus retain [A1] as an independent obligation and do not infer the raw moment maps from Donaldson's displayed equations alone. [F2, A1, algebra]

1.2 Assuming [A1], the normalized quaternionic change of basis produces a raw tuple satisfying both equations in [F2]. The pointwise full-rank equivalence in [A1] identifies its locus exactly with stable and costable data, so the tuple is regular. A unitary change of basis $g\in U(k)$ in the internal monad vector spaces acts on the tuple by $(B_1,B_2,I,J)\mapsto(gB_1g^{-1},gB_2g^{-1},gI,Jg^{-1})$; conversely the uniqueness clause of [A1] says every normalized framed monad isomorphism has this form. Hence the normalized monad classes and raw regular $U(k)$ orbits agree conditionally on [A1]. [A1, F2, algebra]

2.1 By [A1], the orthogonal-kernel projection and its framing at infinity give the Ward connection and the inverse matrix extraction. Its ASD equation follows from the Ward correspondence [[thm-qftx-framed-penrose-ward-correspondence-on-s4]]. The monad Chern character and the oriented twistor pullback calculation in [F3], together with the framed determinant normalization [F4], give $k=\langle c_2(E),[S^4]\rangle=-q_N$. This completes the charge calculation once the exact block interface is established. [A1, F1, F3, F4, step 1.2, algebra] ∎
