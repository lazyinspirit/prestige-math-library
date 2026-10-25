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
dependency_level: 12
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

Assume full AC. Let $N\geq2$, $k\geq0$, $V=\mathbb C^k$, and $W=\mathbb C^N$ with their standard Hermitian products. A raw datum is $(B_1,B_2,I,J)$ with $B_i\in\operatorname{End}_{\mathbb C}(V)$, $I:W\to V$, and $J:V\to W$. Its moment maps are

$$\mu_{\mathbb C}=[B_1,B_2]+IJ,\qquad \mu_{\mathbb R}=[B_1,B_1^\dagger]+[B_2,B_2^\dagger]+II^\dagger-J^\dagger J.$$

It is stable if the vectors $B_{i_1}\cdots B_{i_m}I(w)$, for $m\ge0$, $i_j\in\{1,2\}$, and $w\in W$, span $V$; it is costable if no nonzero common $B_1,B_2$-invariant subspace lies in $\ker J$; it is regular if both conditions hold. Let $\mathcal M^{\mathrm{ADHM,reg}}_{k,N}$ be the quotient of the regular zero-moment locus by

$$(B_1,B_2,I,J)\mapsto(gB_1g^{-1},gB_2g^{-1},gI,Jg^{-1}),\qquad g\in U(V)$$

The stable complex quotient uses the same formula with $g\in GL(V)$.

Give $S^4=\mathbb H\mathbb P^1$ the unit round metric and positive stereographic orientation $dx^0\wedge dx^1\wedge dx^2\wedge dx^3$, where $z_1=x^0+ix^1$, $z_2=x^2+ix^3$. A framed ASD object is a smooth Hermitian rank-$N$ bundle $E\to S^4$ with smooth unitary connection $A$, unitary framing at infinity, $F_A^+=(F_A+*_gF_A)/2=0$, and

$$q_N(E,A)=-\frac{1}{8\pi^2}\int_{S^4}\operatorname{tr}_N(F_A\wedge F_A)=-k,$$

modulo unitary bundle isomorphisms preserving the connection and framing; let $\mathcal M^{\mathrm{ASD}}_{k,N}$ be the set of these classes.

Let $T=(S^1)^2\times(S^1)^N$ act on raw data by

$$(t_1,t_2,h)\cdot(B_1,B_2,I,J)=(t_1B_1,t_2B_2,Ih^{-1},t_1t_2hJ),\qquad h=\operatorname{diag}(e_1^{-1},\ldots,e_N^{-1}),$$

where $t_1,t_2,e_1,\ldots,e_N\in S^1=\{u\in\mathbb C:|u|=1\}$, and on framed ASD classes by inverse pullback under the rotations $(z_1,z_2)\mapsto(t_1z_1,t_2z_2)$ of $S^4$ and postcomposition of the framing by $h$. Assume the following exact conditional supplier conclusions: the zero real quotient is identified diffeomorphically with the stable-and-costable complex $GL(V)$ quotient, and for every $\zeta>0$ the real level quotient with $\mu_{\mathbb R}=\zeta I_V$ is identified with the stable complex quotient; the stable complex quotient is identified with framed rank-$N$ torsion-free sheaves on $\mathbb P^2$ with a trivialization $\mathcal E|_{L_\infty}\cong W\otimes\mathcal O_{L_\infty}$, with Hilbert polynomial $N\binom{m+2}{2}-k$, and costability is equivalent to local freeness; the framed Ward construction gives a bijection between the specified framed ASD classes and holomorphic rank-$N$ bundles on $Z=\mathbb P_{\mathbb C}(\mathbb H^2)=\mathbb C\mathbb P^3$, with $\sigma([v])=[jv]$ for the fixed quaternionic structure $j^2=-1$, that are trivial on every real line, have $c_2=kH^2$ for $H=c_1(\mathcal O_Z(1))$ with $\mathcal O_Z(1)$ the dual tautological line, and carry a nondegenerate holomorphic pairing $b:\mathcal E\otimes\sigma^*\overline{\mathcal E}\to\mathcal O_Z$ satisfying $b_{\sigma z}(v,u)=\overline{b_z(u,v)}$ whose induced form is $h_x(s,t)=b_z(s(z),t(\sigma z))$ and is positive definite on every real-line section space, together with a unitary framing at infinity; and the positive-real linear-monad normal form and its inverse identify each such Ward bundle with a monad $\mathcal O_Z(-1)^{\oplus k}\to\mathcal O_Z^{\oplus(2k+N)}\to\mathcal O_Z(1)^{\oplus k}$ whose zero-moment raw data are regular, modulo $U(V)$. These suppliers retain their stated projective GAGA, family base-change, orientation, charge-normalization, and compact-torus hypotheses.

Under these hypotheses, the construction gives a $T$-equivariant bijection

$$\mathcal M^{\mathrm{ADHM,reg}}_{k,N}\;\longleftrightarrow\;\mathcal M^{\mathrm{ASD}}_{k,N}.$$

For any positive stability level $\zeta>0$, the positive-FI quotient is the quotient by $U(V)$ of $\mu_{\mathbb C}=0$, $\mu_{\mathbb R}=\zeta I_V$ stable data and can contain non-locally-free framed sheaves; for $N\ge2$ such a point occurs already at $k=1$ by taking $V=\mathbb C$, $B_1=B_2=0$, $J=0$, and any nonzero $I:W\to V$ with $II^\dagger=\zeta$. This boundary is not identified with ordinary framed ASD moduli. The first-order assertion is restricted as follows. Let $D=\mathbb C[\epsilon]/(\epsilon^2)$ with $\epsilon^\dagger=\epsilon$. The raw modules are free of ranks $k,N$, their moment equations hold over $D$, and their reduction is regular. The monad terms are free of ranks $k,2k+N,k$, its end maps are locally split, its middle cohomology is locally free and commutes with reduction, its global section module is free and commutes with reduction, its coefficient-image submodule is a direct summand and commutes with reduction, and every fixed real-line restriction is trivial with its section module commuting with reduction. The framing and pairing are defined over $D$, positivity is required on the reduction, and allowed base maps are reduction and $\epsilon\mapsto r\epsilon$ for $r\in\mathbb R$. The framed-sheaf family clause additionally requires its three relative cohomology bundles to have ranks $(0,k,0)$, $(0,2k+N,0)$, and $(0,k,0)$ and every stated fiber base-change map to be an isomorphism. Within this range the correspondence is compatible with first-order framed deformations and identifies their tangent spaces.

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
