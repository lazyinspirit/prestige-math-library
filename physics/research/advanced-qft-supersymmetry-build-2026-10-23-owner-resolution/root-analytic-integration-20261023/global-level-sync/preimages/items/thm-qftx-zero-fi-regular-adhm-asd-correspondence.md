---
id: thm-qftx-zero-fi-regular-adhm-asd-correspondence
kind: theorem
title: Conditional zero-FI regular ADHM and framed ASD correspondence
status: draft
origin: pipeline
domain: mathematics
library: mathematics
category: quantum-field-theory-mathematics
page: qftx-adhm-zero-fi-asd-correspondence
dependency_level: 9
axiom_base: "ZF + full AC through the finite-dimensional quotient, projective GAGA, twistor and characteristic-class inputs stated below."
deps:
  - lem-qftx-adhm-real-monad-normalization-and-charge
  - lem-qftx-asd-twistor-vanishing-and-monad-reconstruction
  - lem-qftx-linear-twistor-monad-charge-normalization
  - thm-qftx-framed-penrose-ward-correspondence-on-s4
  - thm-qftx-adhm-real-complex-quotient-correspondence
  - thm-qftx-framed-p2-monad-adhm-correspondence
  - thm-qftx-projective-gaga-for-monad-data
  - lem-qftx-adhm-entrywise-conjugation-does-not-match-real-moment-map
  - def-qftx-zero-fi-regular-adhm-and-twistor-data
  - def-qftx-adhm-linear-data-stability-and-regularity
dependency_roles:
  lem-qftx-adhm-real-monad-normalization-and-charge: mathematical-premise
  lem-qftx-asd-twistor-vanishing-and-monad-reconstruction: mathematical-premise
  lem-qftx-linear-twistor-monad-charge-normalization: mathematical-premise
  thm-qftx-framed-penrose-ward-correspondence-on-s4: mathematical-premise
  thm-qftx-adhm-real-complex-quotient-correspondence: mathematical-premise
  thm-qftx-framed-p2-monad-adhm-correspondence: mathematical-premise
  thm-qftx-projective-gaga-for-monad-data: mathematical-premise
  lem-qftx-adhm-entrywise-conjugation-does-not-match-real-moment-map: mathematical-premise
  def-qftx-zero-fi-regular-adhm-and-twistor-data: mathematical-premise
  def-qftx-adhm-linear-data-stability-and-regularity: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Simon K. Donaldson, The ADHM construction of Yang-Mills instantons"
      url: https://arxiv.org/pdf/2205.08639
      locator: "§§2–6, printed pp. 3–11: ADHM matrix construction, Ward correspondence, monad and charge; several substantial bridges are not locally proved in the source."
    - title: "Hiraku Nakajima and Kota Yoshioka, Lectures on Instanton Counting"
      url: https://arxiv.org/pdf/math/0311058
      locator: "§3.1, printed pp. 17–19: framed torsion-free sheaves, locally-free locus and cited framed SU(N) ASD interpretation."
verification:
  precheck: pass
---

## Statement

Let $N\geq2$, $k\geq0$, and let $\mathcal M^{\mathrm{ADHM,reg}}_{k,N}$ be the quotient by $U(k)$ of the raw data satisfying both zero moment equations and stable-and-costable regularity in the conventions stated in the following references section. Let $\mathcal M^{\mathrm{ASD}}_{k,N}$ be the framed unitary ASD sector on the round oriented $S^4$ with $q_N=-k$ in those same conventions. Conditional on the real monad normalization and Ward inputs stated below, the construction gives a $T=(S^1)^2\times(S^1)^N$-equivariant bijection

$$\mathcal M^{\mathrm{ADHM,reg}}_{k,N}\;\longleftrightarrow\;\mathcal M^{\mathrm{ASD}}_{k,N}.$$

The zero-FI real quotient is also diffeomorphic to the stable-and-costable complex $GL(k)$ quotient. Under the stated projective GAGA and family base-change hypotheses, the corresponding framed sheaves on $\mathbb P^2$ are exactly the locally free locus among the framed torsion-free sheaves with rank $N$ and Hilbert polynomial $N\binom{m+2}{2}-k$. The positive-FI stable quotient includes non-locally-free sheaves and is not identified with the ordinary framed ASD moduli. Under the same family and normal-form hypotheses, the correspondence is compatible with first-order framed deformations and their tangent spaces.

## Statement references

[[def-qftx-zero-fi-regular-adhm-and-twistor-data]]

[[def-qftx-adhm-linear-data-stability-and-regularity]]

[[thm-qftx-adhm-real-complex-quotient-correspondence]]

[[thm-qftx-framed-p2-monad-adhm-correspondence]]

[[thm-qftx-framed-penrose-ward-correspondence-on-s4]]

[[lem-qftx-adhm-real-monad-normalization-and-charge]]

[Donaldson, §§2–6, printed pp. 3–11](https://arxiv.org/pdf/2205.08639)

[Nakajima–Yoshioka, §3.1, printed pp. 17–19](https://arxiv.org/pdf/math/0311058)

## Facts & Assumptions

**Given:** $N\ge2$, $k\ge0$, the exact raw ADHM and framed ASD conventions, and the conditional GAGA, family, Ward and real-monad hypotheses stated below.

[A1] The current real/complex quotient carrier proves that every regular complex orbit meets $\mu_{\mathbb R}=0$ in exactly one $U(k)$ orbit; it also proves the converse zero-level stability implies costability, smooth quotient charts and equivariance for the exact raw torus convention. Its full finite-dimensional proof is supplied there. [[thm-qftx-adhm-real-complex-quotient-correspondence]]

[A2] The current framed $\mathbb P^2$ monad carrier identifies stable complex ADHM data with framed torsion-free sheaves of rank $N$ and Hilbert polynomial $N\binom{m+2}{2}-k$, and identifies costability with local freeness; its family and tangent clause requires the stated relative base-change maps. Its analytic dictionary uses the exact GAGA comparison in [A3]. [[thm-qftx-framed-p2-monad-adhm-correspondence]]

[A3] The current GAGA carrier asserts exact coherent analytification on $\mathbb P^2$ and $\mathbb P^3$, plus family comparison only when the higher direct images are locally free and the base-change maps are already isomorphisms. Its exact analytic inputs are the new coherence, local-flatness, compact-finiteness and scalar-projective-cohomology suppliers; its internal hyperplane and Serre-pencil proof derives all-twist comparison, positive-twist vanishing and generation. [[thm-qftx-projective-gaga-for-monad-data]]

[A4] The current framed Ward theorem proves the local integrable-Dolbeault frames, universal-line degree-zero base change/evaluation, unique incidence connection and compatibility of the pairing-induced positive metric. Its comparison input is absolute projective GAGA, not independently chosen parallel metrics or assumed base-change surjectivity. [[thm-qftx-framed-penrose-ward-correspondence-on-s4]]

[A5] The intrinsic positive-real $\mathbb CP^3$ monad normal-form existence, inverse matrix extraction, $U(k)$ uniqueness, exact rotation factors and first-order naturality are supplied by the exact intrinsic theorem used in [[lem-qftx-adhm-real-monad-normalization-and-charge]]. The entrywise-conjugation candidate is disproved in [[lem-qftx-adhm-entrywise-conjugation-does-not-match-real-moment-map]]. The exact first-order range additionally requires free H0(F_A) with reduction base change, a direct-summand coefficient-image module with reduction base change, and triviality and section base change on each fixed real twistor line; positivity is required only on the reduction. These hypotheses are imposed and are not inferred for arbitrary ASD deformations or flat-summand rank jumps. Only this range and involution-preserving epsilon-to-r-epsilon maps are used.

[F1] The raw zero-FI regular locus uses $\mu_{\mathbb C}=[B_1,B_2]+IJ$, $\mu_{\mathbb R}=[B_1,B_1^\dagger]+[B_2,B_2^\dagger]+II^\dagger-J^\dagger J$, the stable-and-costable conditions, and the rotation/framing torus action specified in the Definition. [[def-qftx-adhm-linear-data-stability-and-regularity]]

[F2] For the round oriented $S^4$, the framed charge convention is $q_N=-(8\pi^2)^{-1}\int\operatorname{tr}_N(F\wedge F)$ and the ASD equation is $F^+=0$. [[def-qftx-zero-fi-regular-adhm-and-twistor-data]]

[F3] The normalized twistor monad has $c_2=kH^2$, and the oriented Ward pullback identifies this with $\langle c_2(E),[S^4]\rangle=k=-q_N$. [[lem-qftx-linear-twistor-monad-charge-normalization]]

## Proof

**Given:** [A1]–[A5] under their exact stated hypotheses, and the conventions [F1]–[F3].

1.1 By [A1], each regular zero-FI unitary orbit determines one regular complex $GL(k)$ orbit, and each regular complex orbit has exactly one balanced unitary representative. The two constructions are inverse because each orbit intersection is unique; the quotient map is a diffeomorphism in the word-frame charts. The exact torus action in [F1] commutes with both gauge actions, so this quotient identification is $T$-equivariant. [A1, F1, algebra]

2.1 By [A2], every stable complex orbit gives one framed torsion-free $\mathbb P^2$ sheaf with the stated rank, framing and Hilbert polynomial, and the converse recovers the same orbit. Its locally-free locus is exactly the costable locus. Thus restricting [A1]'s complex quotient to regular orbits gives exactly that locally-free sheaf locus; the positive-FI stable quotient still contains the non-locally-free boundary. The family and first-order version is conditional on [A2]'s displayed base-change hypotheses and [A3], so no tangent claim is inferred outside that range. [A1, A2, A3, F1, step 1.1, algebra]

3.1 Starting with a framed ASD connection, [A4] constructs its holomorphic Ward bundle; the exact coupled cohomology-vanishing and diagonal argument [[lem-qftx-asd-twistor-vanishing-and-monad-reconstruction]] reconstructs the normalized three-term monad. Starting with regular ADHM data, [A5] identifies its normalized real monad and projection connection with this Ward bundle and connection. The equality of the two constructions is the first-order and inverse-extraction clause in [A5], so it is conditional on that exact real block proof, not on the P² citation alone. [A4, A5, step 2.1, construct]

4.1 By [A5], both composites on framed isomorphism classes are identities: ADHM data produce the Ward bundle whose monad extraction returns the same $U(k)$ orbit, and an ASD connection produces a Ward bundle whose matrix extraction returns an orbit reconstructing that framed connection. The charge of each resulting connection is $q_N=-k$ by [F2]–[F3]. Thus the claimed bijection and charge statement follow conditionally on [A4]–[A5]. [A4, A5, F2, F3, step 3.1, algebra]

5.1 The finite-dimensional quotient and $\mathbb P^2$ sheaf maps are $T$-equivariant by [A1]–[A2]. The Ward construction is natural under rotations and framing transformations by [A4]; the exact raw monad torus factors are directly calculated in the new block lemma cited by [A5], while the equivariance of inverse normalization remains part of [A5]. These exact interfaces make the composite $T$-equivariant. The same composition on first-order families is valid only under the base-change hypotheses of [A2]–[A4] and the deformation compatibility of [A5]. This proves the stated conditional torus and tangent clauses and leaves the positive-FI boundary separate. [A1, A2, A3, A4, A5, F1, step 4.1, algebra] ∎

## Remarks

The triangle records the claimed inverse maps on framed classes. Its identities are proved conditionally in step 4.1; the diagram is not evidence for the normal-form premise [A5].

```tikzcd
\mathcal M^{\mathrm{ADHM,reg}}_{k,N}
  \arrow[r,"\Phi"]
  \arrow[dr,"\mathrm{id}"']
&
\mathcal M^{\mathrm{ASD}}_{k,N}
  \arrow[d,"\Phi^{-1}"]
\\
&
\mathcal M^{\mathrm{ADHM,reg}}_{k,N}
```
