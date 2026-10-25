---
id: thm-qftx-zero-fi-regular-adhm-asd-correspondence
kind: theorem
title: Conditional zero-FI regular ADHM and framed ASD correspondence
status: "published"
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
  - lem-qftx-raw-adhm-real-twistor-block
  - thm-qftx-positive-real-adhm-monad-normal-form
  - lem-qftx-positive-real-monad-chain-lift
  - lem-qftx-local-integrable-dolbeault-frames
  - lem-qftx-twistor-line-section-direct-image
  - thm-cohomology-projective-space-twisting-sheaves
  - thm-cohomology-and-base-change
  - lem-proper-flat-fp-cohomology-perfect-complex
  - thm-nakayama-lemma
  - thm-smooth-partitions-of-unity-exist-on-manifolds
  - def-axiom-of-choice
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
  lem-qftx-raw-adhm-real-twistor-block: mathematical-premise
  thm-qftx-positive-real-adhm-monad-normal-form: mathematical-premise
  lem-qftx-positive-real-monad-chain-lift: mathematical-premise
  lem-qftx-local-integrable-dolbeault-frames: mathematical-premise
  lem-qftx-twistor-line-section-direct-image: mathematical-premise
  thm-cohomology-projective-space-twisting-sheaves: mathematical-premise
  thm-cohomology-and-base-change: mathematical-premise
  lem-proper-flat-fp-cohomology-perfect-complex: mathematical-premise
  thm-nakayama-lemma: mathematical-premise
  thm-smooth-partitions-of-unity-exist-on-manifolds: mathematical-premise
  def-axiom-of-choice: mathematical-premise
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
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-25
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

[A4] Under full AC and its exact absolute GAGA hypothesis, the ordinary framed Ward theorem uses the separately proved local integrable-Dolbeault frame lemma and proves universal-line degree-zero base change/evaluation, the unique incidence connection and compatibility of the pairing-induced positive metric. Its comparison input is absolute projective GAGA, not independently chosen parallel metrics or assumed base-change surjectivity. [[thm-qftx-framed-penrose-ward-correspondence-on-s4]]

[A5] The intrinsic positive-real $\mathbb CP^3$ monad normal-form existence, inverse matrix extraction, $U(k)$ uniqueness, exact rotation factors and first-order naturality are supplied by the exact intrinsic theorem used in [[lem-qftx-adhm-real-monad-normalization-and-charge]]. The entrywise-conjugation candidate is disproved in [[lem-qftx-adhm-entrywise-conjugation-does-not-match-real-moment-map]]. The exact first-order range additionally requires free $H^0(F_A)$ with reduction base change, a direct-summand coefficient-image module with reduction base change, and triviality and section base change on each fixed real twistor line; positivity is required only on the reduction. These hypotheses are imposed and are not inferred for arbitrary ASD deformations or flat-summand rank jumps. Only this range and involution-preserving epsilon-to-r-epsilon maps are used.

[A6] The intrinsic positive-real monad theorem gives the converse from regular zero-moment data to the globally locally split monad with positive real-line pairing and infinity frame, and classifies normalized framed chain isomorphisms by $U(k)$. The chain-lift lemma lifts cohomology morphisms uniquely under the scalar negative-twist vanishings. The normal-form theorem's first-order clause gives the analogous normalized classification by $U(k,D)$ only in the exact range stated here. Neither supplier asserts a first-order Ward equivalence; that bridge is proved below. [[thm-qftx-positive-real-adhm-monad-normal-form]], [[lem-qftx-positive-real-monad-chain-lift]]

[F1] The raw zero-FI regular locus uses $\mu_{\mathbb C}=[B_1,B_2]+IJ$, $\mu_{\mathbb R}=[B_1,B_1^\dagger]+[B_2,B_2^\dagger]+II^\dagger-J^\dagger J$, the stable-and-costable conditions, and the rotation/framing torus action specified in the Definition. [[def-qftx-adhm-linear-data-stability-and-regularity]]

[F2] For the round oriented $S^4$, the framed charge convention is $q_N=-(8\pi^2)^{-1}\int\operatorname{tr}_N(F\wedge F)$ and the ASD equation is $F^+=0$. [[def-qftx-zero-fi-regular-adhm-and-twistor-data]]

[F3] The normalized twistor monad has $c_2=kH^2$, and the oriented Ward pullback identifies this with $\langle c_2(E),[S^4]\rangle=k=-q_N$. [[lem-qftx-linear-twistor-monad-charge-normalization]]

[F4] The raw block lemma supplies the global holomorphic monad, equal positive Gram matrices on finite real lines, the Euler decomposition and infinity frame, the stereographic ASD projection and compact-torus chain factors. It supplies no inverse extraction or smooth global extension by itself. [[lem-qftx-raw-adhm-real-twistor-block]]

[F5] An integrable smooth Dolbeault operator on an ordinary complex vector bundle has local holomorphic frames, and intertwining maps are holomorphic. The universal line family is the proper flat projective-line bundle with graph incidence used in the section-bundle lemma. Proper coherent base-flat families have the degree-one/degree-zero base-change criteria, finite local cohomology modules and a finite projective cohomology complex; Nakayama kills a finite stalk with zero residue fibre. On a projective line, $H^0(\mathcal O)=\mathbb C$, $H^1(\mathcal O)=0$, and both groups of $\mathcal O(-1)$ vanish; the analytic values follow from [A3] by closed-line direct image. These are the inputs to the first-order argument below, not an assumed first-order Ward theorem. [[lem-qftx-local-integrable-dolbeault-frames]], [[lem-qftx-twistor-line-section-direct-image]], [[thm-cohomology-and-base-change]], [[lem-proper-flat-fp-cohomology-perfect-complex]], [[thm-nakayama-lemma]], [[thm-cohomology-projective-space-twisting-sheaves]]

[F6] Smooth partitions of unity subordinate to an open cover exist under countable choice, which follows from the full AC assumed here. They split the additive transition cocycles of first-order smooth bundle deformations. [[thm-smooth-partitions-of-unity-exist-on-manifolds]], [[def-axiom-of-choice]]

## Proof

**Given:** Full AC, [A1]–[A6] under the exact hypotheses in the Statement, and [F1]–[F6]. Full AC also supplies the DC and countable choice used by [F5]–[F6].

1.1 By [A1], every regular complex orbit meets the zero real level in exactly one $U(k)$ orbit. Thus inclusion of the zero-level regular locus induces the stated diffeomorphic identification with the regular complex quotient. The compact action [F1] commutes with gauge and preserves both zero moments, so the identification is $T$-equivariant. [given, A1, F1, algebra]

1.2 To construct the forward map from an arbitrary regular zero-moment datum, use [F4]'s global raw monad. Write $F=\ker\beta/\operatorname{im}\alpha$ and $K=V\oplus V\oplus W$. The identity $\beta(v)=\alpha(\sigma v)^\dagger$ gives $\ker\beta(v)=(\operatorname{im}\alpha(\sigma v))^\perp$. The standard first-slot-linear Hermitian form on $K$ therefore descends to a pairing between $F_v$ and $F_{\sigma v}$: changing either representative by its $\alpha$-image pairs to zero. The annihilator identities show that the induced pairing is nondegenerate; the Hermitian symmetry follows from that on $K$. Conjugate pullback makes it holomorphic. On a finite real line, [F4]'s Euler decomposition identifies its section space with $\ker D_z$ and the pairing with the restricted positive form; at infinity these are exactly $W$ and its fixed frame. The two locally split monad sequences also split as smooth bundles. Their total Chern classes give $c(F)=((1-H)(1+H))^{-k}$, hence $c_1(F)=0$ and $c_2(F)=kH^2$. Thus every hypothesis of the inverse Ward construction [A4] is met. It produces a smooth global framed unitary ASD connection, and [F2]–[F3] give $q_N=-k$ with the specified orientation and trace. [A4, F2, F3, F4, construct, algebra]

1.3 We now prove the additional Ward bridge over $D=\mathbb C[\epsilon]/(\epsilon^2)$; it is not part of [A4]'s ordinary Statement. A first-order ASD object means a locally free rank-$N$ module over $C^\infty_{S^4}\otimes D$, with a nondegenerate $D$-Hermitian form positive on reduction, unitary framing and form-preserving connection $\nabla_D$, with $F_{\nabla_D}^+=0$ coefficientwise. Morphisms are framed unitary $D$-linear connection isomorphisms. Pull back and define the vertical/horizontal operator using [A4]'s incidence. Its square vanishes by the same curvature identity coefficientwise. Viewed over $\mathbb C$, this is an integrable Dolbeault operator on a smooth rank-$2N$ bundle, so [F5] supplies holomorphic frames. Multiplication by $\epsilon$ is an intertwining map, hence holomorphic, with square zero and image equal to kernel of complex rank $N$. At a point choose $N$ holomorphic sections $s_a$ whose $\epsilon s_a$ form a basis of that image. The $2N$ sections $s_a,\epsilon s_a$ remain a complex frame nearby by a nonzero determinant. Thus the $s_a$ are a holomorphic $D$-basis. The pairing is holomorphic by metric compatibility as in [A4], and every real-line restriction is the constant free module of its base fibre. This gives the forward first-order Ward object and preserves its framing. [A4, F5, given, construct, algebra]

2.1 By [A2], regular complex orbits correspond exactly to locally free framed sheaves on $\mathbb P^2$: stability gives torsion-freeness and costability gives local freeness. At positive level, $k=1$, $B_1=B_2=J=0$ and $II^\dagger=\zeta>0$ satisfy both moment equations and are stable, whereas $V\subset\ker J$ violates costability. Thus the positive-FI quotient includes a non-locally-free point and is not identified here with the ordinary ASD sector. This proves the boundary assertion without using any Ward-family claim. [A1, A2, F1, step 1.1, algebra]

2.2 This Ward connection is the raw projection connection on the finite chart. On the complexified line-parameter chart $X$, let $a_X=\alpha_{\lambda_1}$, $b_X=\alpha_{\lambda_2}$ and $S_X=\ker\beta_{\lambda_1}\cap\ker\beta_{\lambda_2}$. Along the real locus these are $a_z,b_z,\ker D_z$; the complement and invertible Gram persist near each real line. Along a parameter direction $v$ in $\mathscr D=\ker(de)$ at $[\lambda]$, the point of $Z$ is fixed, so differentiating $\beta(\lambda)s=0$ for a section $s(X)\in S_X$ gives $\beta(\lambda)\,ds(v)=0$. At the real locus write the component of $ds(v)$ perpendicular to $\ker D_z$ as $a_z u+b_z w$. Since $\beta(\lambda)=f_z(-\lambda_2,\lambda_1)$ on these two summands, its kernel condition is $-\lambda_2u+\lambda_1w=0$. Hence $(u,w)=(\lambda_1r,\lambda_2r)$ and that component is $\alpha(\lambda)r$, zero in monad cohomology. Evaluation therefore transports the canonical relative derivative to $P_zds(v)$. The cotangent uniqueness in [A4]'s incidence construction identifies the full connection with $P\,d$. The global Ward bundle supplies its smooth extension at infinity. [A4, F4, step 1.2, algebra]

2.3 Conversely let $F_D$ be a holomorphic locally free $D$-bundle in the stated monad range. Its underlying complex bundle $G$ has rank $2N$ and is trivial on every real line; no positive complex form on $G$ is assumed. Here is the needed section-bundle argument without that assumption. Algebraize $G$ by [A3] and form the universal proper flat line family $p:\mathscr L\to\operatorname{Gr}(2,4)$, $e:\mathscr L\to Z$, with its graph charts as in [F5]. The locally free $e^*G$ is base-flat. At a real line its fibre has $H^1=0$ and $H^0=\mathbb C^{2N}$. The degree-one base-change map is therefore surjective. By [F5] it is an isomorphism; finiteness from the projective cohomology complex and Nakayama kill the degree-one stalk near that line. The degree-one local-freeness criterion then makes degree-zero base change surjective, hence an isomorphism with locally free section bundle of rank $2N$. Evaluation is an isomorphism on the real line. Removing the proper image of its determinant-zero locus makes it an isomorphism on an entire neighboring line family. Analytifying evaluation and using that holomorphic functions on a product with $\mathbb P^1$ are constant along its fibres identifies the actual analytic section bundle, exactly as in [F5]. Multiplication by $\epsilon$ commutes with evaluation and has image equal to kernel of rank $N$. The local frame argument of step 1.3 now makes this section bundle free of rank $N$ over $\mathcal O\otimes D$ and evaluation $D$-linear. Restriction to the real locus is a smooth free $D$-bundle. [A3, F5, step 1.3, construct, algebra]

3.1 Conversely, start with a framed ASD connection. By [A4] it has its positive Ward bundle, and the reconstruction supplier produces a monad of ranks $k,2k+N,k$, including flat summands. Apply [A5] to this monad to extract its regular zero-moment orbit. Applying step 1.2 to that orbit returns the original framed Ward bundle; the inverse identity in [A4] returns the original connection. Starting with raw data, the cohomology isomorphism in [A4] followed by the chain lifting and inverse extraction in [A6] returns that same normalized monad up to exactly $U(k)$. Thus both composites on framed classes are identities. This uses [A5] only in its stated ASD-to-data direction. [A4, A5, A6, F3, F4, step 1.2, step 2.2, algebra]

3.2 On the graph-chart universal family, $\mathscr D=\ker(de)$ consists of variations $v$ with $v\lambda=0$. The canonical flat derivative along $\mathscr D$ on $e^*F_D$ transfers by evaluation to the pulled-back section bundle. The restriction of cotangent forms gives $p_*\mathscr D^*\cong\Omega^1_{\operatorname{Gr}(2,4)}$: on each line its kernel is $\mathcal O(-1)^{\oplus2}$ with $H^0=H^1=0$, and the map is equivalently the restriction of linear covectors on $\operatorname{Hom}(\mathbb C^2,\mathbb C^2)$ to all planes $v\lambda=0$. These planes span that four-dimensional space; both spaces of covectors have dimension four. The same isomorphism tensored with $D$ therefore pushes the partial derivative to a unique full $D$-connection, with the Leibniz rule. It is flat on every alpha-plane, hence ASD on the real locus by the incidence curvature polynomial. Duals, conjugate pullback, pairing and morphisms commute with evaluation and this unique construction. Consequently it preserves the induced $D$-Hermitian form and unitary framing. Evaluation intertwines the reconstructed vertical/horizontal operator with the original one, and starting from a connection recovers all its alpha-plane derivatives, which determine the full connection. These prove inverse identities on framed $D$-objects and morphisms. All constructions commute with reduction and $\epsilon\mapsto r\epsilon$, $r\in\mathbb R$; this also proves the first-order Ward naturality missing from the ordinary supplier. [A4, F5, step 1.3, step 2.3, construct, algebra]

4.1 The action here is the compact $T$ of [F1]. Since $\bar t_i=t_i^{-1}$ and $h^\dagger=h^{-1}$, [F4]'s chain factors are $(t_1t_2)^{-1}$, $\operatorname{diag}(t_2^{-1},t_1^{-1},h)$ and $1$; the induced map at infinity is $h$. Ward reconstruction and inverse extraction commute with these maps by [A4] and [A6]. Thus the bijection of step 3.1 is $T$-equivariant. No assertion for nonunitary complex-torus parameters is needed. [A1, A2, A4, A6, F1, F4, step 3.1, algebra]

4.2 For precision, a tangent vector at a fixed ordinary framed object is a first-order object with identified reduction, modulo isomorphisms inducing identity on that reduction. On the raw side write $x_D=x+\epsilon\dot x$; the tangent quotient is the real-linear kernel of $(d\mu_{\mathbb C},d\mu_{\mathbb R})_x$ modulo $([\xi,B_1],[\xi,B_2],\xi I,-J\xi)$, $\xi^\dagger=-\xi$, restricted to the stated monad/base-change range. On the ASD side smooth first-order bundle transitions differ from the reduced ones by an additive $\operatorname{End}(E)$ cocycle. A partition of unity [F6] splits it: in common bundle notation, for $c_{ij}+c_{jk}=c_{ik}$, $u_i=\sum_j\rho_jc_{ij}$ gives $u_i-u_j=c_{ij}$. A change $1-\epsilon h_0^{-1}h_1/2$ normalizes a metric $h_0+\epsilon h_1$, and a smooth adjustment near infinity fixes the framing. Thus these tangents are represented by $A+\epsilon a$, $a\in\Omega^1(S^4,\mathfrak u(E))$, with $(d_Aa)^+=0$, modulo $d_A\xi$ for smooth $\xi\in\Gamma(\mathfrak u(E))$ with $\xi(\infty)=0$. Here $\mathfrak u(E)$ is the bundle of skew-Hermitian endomorphisms and $d_A$ is the covariant exterior derivative. Restrict to those Ward objects admitting the exact monad, section, coefficient-image and base-change conditions already imposed in the Statement; nothing asserts them for all infinitesimal ASD objects. [F1, F6, step 1.3, step 3.2, algebra]

5.1 Apply [A6] over $D$ to precisely those monads. Its chain lifting also extends over $D$: the two locally split kernel/image sequences give the same Hom restriction maps, whose kernels and cokernels vanish by the degree-zero, degree-one and degree-two groups of $\mathcal O(-1)$ and $\mathcal O(-2)$. The projective twisting-sheaf calculation in [F5] supplies those vanishings over $D$, and $H^0(\mathcal O)=D$, so the lift is uniquely a constant $D$-linear chain map. Uniqueness makes it preserve the lifted pairing whenever the cohomology map does. The raw construction remains valid because every required inverse matrix has invertible reduction, with $(M_0+\epsilon M_1)^{-1}=M_0^{-1}-\epsilon M_0^{-1}M_1M_0^{-1}$, and its real-line Euler decomposition holds over $D$. Together with steps 1.3, 2.3 and 3.2 and [A3]'s exact comparison this gives inverse maps on the restricted first-order classes. If a holomorphic $D$-object needs algebraization, apply absolute GAGA to its coherent underlying complex bundle and to its holomorphic nilpotent endomorphism; full faithfulness transports the $D$-action and exactness transports kernel and image. Its locally free $D$-structure follows from the same rank-$N$ frame argument, so no general relative algebraization theorem is being assumed. The comparison with framed-sheaf families uses [A2] only with its stipulated relative cohomology ranks and base-change isomorphisms. On fixed reductions all first-order equations, derivatives, changes of bases and gauge actions are real-linear in the $\epsilon$ coefficients; evaluation and the inverse uniquely determined connection respect their sums. The induced inverse tangent maps are therefore real-linear. This proves the stated first-order compatibility in exactly its prescribed range, including $k=0$ and flat summands, and completes every clause. [A2, A3, A6, F4, F5, step 3.1, step 4.1, step 1.3, step 2.3, step 3.2, step 4.2, algebra] ∎

## Remarks

The triangle records the claimed inverse maps on framed classes. Its identities are proved conditionally in step 3.1; the diagram is not evidence for the normal-form premise [A5].

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
