---
id: lem-qftx-asd-twistor-vanishing-and-monad-reconstruction
kind: lemma
title: Conditional twistor vanishing and normalized monad reconstruction
status: draft
origin: pipeline
domain: mathematics
library: mathematics
category: quantum-field-theory-mathematics
page: qftx-adhm-zero-fi-asd-correspondence
dependency_level: 7
axiom_base: "ZF + full AC and DC for the named cohomology and projective-family suppliers."
deps:
  - thm-qftx-coupled-penrose-vanishing
  - thm-qftx-framed-penrose-ward-correspondence-on-s4
  - lem-qftx-twistor-line-section-direct-image
  - lem-qftx-u-n-determinant-flat-charge-normalization
  - thm-qftx-projective-gaga-for-monad-data
  - lem-koszul-resolution-and-flat-fibre-restriction
  - thm-first-hypercohomology-spectral-sequence
  - thm-serre-duality-projective-space-coherent-sheaves
  - thm-cohomology-projective-space-twisting-sheaves
  - thm-rr-for-projective-space-projections
  - thm-higher-dimensional-spheres-are-simply-connected
  - thm-a-flat-connection-admits-local-parallel-frames
  - prop-flat-connections-have-locally-path-independent-parallel-transport-on-a-coordinate-ball
  - def-axiom-of-choice
  - def-dependent-choice
dependency_roles:
  thm-qftx-coupled-penrose-vanishing: mathematical-premise
  thm-qftx-framed-penrose-ward-correspondence-on-s4: mathematical-premise
  lem-qftx-twistor-line-section-direct-image: mathematical-premise
  lem-qftx-u-n-determinant-flat-charge-normalization: mathematical-premise
  thm-qftx-projective-gaga-for-monad-data: mathematical-premise
  lem-koszul-resolution-and-flat-fibre-restriction: mathematical-premise
  thm-first-hypercohomology-spectral-sequence: mathematical-premise
  thm-serre-duality-projective-space-coherent-sheaves: mathematical-premise
  thm-cohomology-projective-space-twisting-sheaves: mathematical-premise
  thm-rr-for-projective-space-projections: mathematical-premise
  thm-higher-dimensional-spheres-are-simply-connected: mathematical-premise
  thm-a-flat-connection-admits-local-parallel-frames: mathematical-premise
  prop-flat-connections-have-locally-path-independent-parallel-transport-on-a-coordinate-ball: mathematical-premise
  def-axiom-of-choice: mathematical-premise
  def-dependent-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Simon K. Donaldson, The ADHM construction of Yang-Mills instantons"
      url: https://arxiv.org/pdf/2205.08639
      locator: "§5, printed pp. 8–10: the Penrose/Weitzenböck vanishing route and Beilinson/Koszul reconstruction; the source invokes rather than proves the analytic Penrose input."
    - title: "Hiraku Nakajima and Kota Yoshioka, Lectures on Instanton Counting"
      url: https://arxiv.org/pdf/math/0311058
      locator: "§3.1, printed pp. 17–19: framed sheaves and the locally-free ASD locus; it does not prove the CP3 twistor monad."
verification:
  precheck: pass
---

## Statement

Let $A$ be a framed unitary ASD connection on the round oriented $S^4$, let $\mathcal E$ be its Ward bundle on $Z=\mathbb CP^3$, and let $k=-q_N(A)$. Use the exact coupled cohomology-vanishing input stated below for both $\mathcal E$ and $\mathcal E^\vee$. Assume also the exact projective GAGA and line-family base-change inputs needed to regard $\mathcal E$ as an algebraic bundle, to make its restrictions trivial on a complex-open neighbourhood of at least one real twistor line, and to apply the diagonal resolution. Finally, use the Chern-character normalization $\operatorname{ch}(\mathcal E)=N-kH^2$ in $A^*(\mathbb CP^3)_\mathbb Q$, where $H=c_1(\mathcal O(1))$; this normalization is conditional on the twistor pullback class convention matching the framed charge.

Under these inputs,

$$H^1(Z,\mathcal E(-2))=H^1(Z,\mathcal E^\vee(-2))=0.$$

There is a canonical Beilinson three-term monad

$$\mathcal O_Z(-1)\otimes U\longrightarrow\mathcal O_Z\otimes K\longrightarrow\mathcal O_Z(1)\otimes U',$$

whose middle cohomology is $\mathcal E$ and whose terms are

$$U=H^2(Z,\mathcal E(-3)),\qquad K=H^2(Z,\mathcal E\otimes\Omega_Z^2),\qquad U'=H^2(Z,\mathcal E\otimes\Omega_Z^1(-1)),$$

with $\dim U=\dim U'=k$ and $\dim K=2k+N$. The construction is natural in framed bundle isomorphisms and unique up to changes of bases in $U,K,U'$. The values of all global parallel sections form its maximal trivial flat parallel summand, and the connection splits orthogonally into that summand and a summand with no nonzero parallel sections; arbitrary nonflat parallel summands are permitted. The monad construction is additive across this splitting and uses no hypothesis $H^0(Z,\mathcal E)=0$.

## Statement references

[[thm-qftx-framed-penrose-ward-correspondence-on-s4]]

[[thm-qftx-coupled-penrose-vanishing]]

[[lem-qftx-twistor-line-section-direct-image]]

[[thm-qftx-projective-gaga-for-monad-data]]

[Donaldson, §5, printed pp. 8–10](https://arxiv.org/pdf/2205.08639)

[Nakajima–Yoshioka, §3.1, printed pp. 17–19](https://arxiv.org/pdf/math/0311058)

## Facts & Assumptions

**Given:** The Ward bundle and its framed ASD connection, the round twistor conventions, the exact coupled cohomology-vanishing input, the projective-family hypotheses, and the stated Chern-character normalization.

[A1] For the Ward bundle, the underlying smooth bundle is the twistor pullback and its Dolbeault operator is the ordinary vertical derivative and the connection-horizontal alpha-plane operator, by the forward Ward construction. The exact coupled-vanishing theorem therefore gives $H^1(Z,\mathcal E(-2))=H^1(Z,\mathcal E^\vee(-2))=0$, including reducible and flat summands. Its approved interface asserts these two vanishings; no additional transform-map existence is inferred from that Statement. Until its actual proof is authored and independently checked, this application remains an honest prerequisite hold. [[thm-qftx-coupled-penrose-vanishing]], [[thm-qftx-framed-penrose-ward-correspondence-on-s4]]

[A2] Absolute projective GAGA is still conditional on its analytic proof. Once supplied, the current universal-line direct-image lemma proves the needed local evaluation and degree-zero base-change maps; they are no longer extra assumed surjectivity inputs. [[thm-qftx-projective-gaga-for-monad-data]], [[lem-qftx-twistor-line-section-direct-image]]

[A3] The twistor pullback of the framed Chern class has $c_1(\mathcal E)=0$, $c_2(\mathcal E)=kH^2$, and $c_3(\mathcal E)=0$, so $\operatorname{ch}(\mathcal E)=N-kH^2$. The positive incidence convention and actual Thom/projective-cohomology calculation are supplied by [[thm-qftx-framed-penrose-ward-correspondence-on-s4]]; the $U(N)$ determinant and charge calculation is supplied by [[lem-qftx-u-n-determinant-flat-charge-normalization]]; the equality $\pi^*u=H^2$ is now checked for that exact convention; it is not inferred from a source sign convention.

[F1] The exact round sphere, positive stereographic orientation and incidence are those of the Ward construction and the coupled-vanishing supplier. The latter has no GAGA, monad or inverse ADHM premise, so this application does not create a circular proof. [[thm-qftx-framed-penrose-ward-correspondence-on-s4]], [[thm-qftx-coupled-penrose-vanishing]]

[F2] For a flat connection on the simply connected $S^4$, parallel transport gives a global parallel frame; for a unitary connection the orthogonal complement of its parallel sections is preserved. [[thm-higher-dimensional-spheres-are-simply-connected]], [[thm-a-flat-connection-admits-local-parallel-frames]], [[prop-flat-connections-have-locally-path-independent-parallel-transport-on-a-coordinate-ball]]

[F3] The standard projective diagonal has the Koszul resolution $0\to\mathcal O(-3)\boxtimes\Omega^3(3)\to\mathcal O(-2)\boxtimes\Omega^2(2)\to\mathcal O(-1)\boxtimes\Omega^1(1)\to\mathcal O\to\mathcal O_\Delta\to0,$ because the diagonal is a regular embedding of codimension three and its three local coordinate differences form a regular sequence. [[lem-koszul-resolution-and-flat-fibre-restriction]]

[F4] The bounded hypercohomology spectral sequence has first page $E_1^{p,q}=H^q(K^p)$, differential $d_r:(p,q)\mapsto(p+r,q-r+1)$, and converges with a finite filtration to the hypercohomology of the diagonal complex. [[thm-first-hypercohomology-spectral-sequence]]

[F5] On $\mathbb P^3$, Serre duality identifies $H^q(F)^*$ with $\operatorname{Ext}^{3-q}(F,\mathcal O(-4))$; for locally free $F$ this is $H^{3-q}(F^*(-4))$. [[thm-serre-duality-projective-space-coherent-sheaves]]

[F6] On $\mathbb P^n$, $H^0(\mathcal O(d))=0$ for $d<0$, and the only possible nonzero cohomology of $\mathcal O(d)$ is in degrees $0$ and $n$, with $H^n(\mathcal O(d))=0$ for $d>-n-1$. [[thm-cohomology-projective-space-twisting-sheaves]]

[F7] Hirzebruch–Riemann–Roch on $\mathbb P^3$ gives $\chi(F)=\int_{\mathbb P^3}\operatorname{ch}(F)\operatorname{td}(T\mathbb P^3)$ for the vector bundles and twists in this argument. [[thm-rr-for-projective-space-projections]]

## Proof

**Given:** [A1]–[A3] and [F1]–[F7].

1.1 The Ward construction gives exactly the smooth pullback bundle and vertical/horizontal Dolbeault operator required in [A1], for the same sphere and incidence in [F1]. Thus its two cohomology vanishings apply directly. The dual is again unitary and ASD, since its curvature is $-F_A^t$ and Hodge star commutes with transpose, and its holomorphic operator is the induced dual one. Hence both $H^1(Z,\mathcal E(-2))$ and $H^1(Z,\mathcal E^\vee(-2))$ vanish. This uses the supplier's exact stated conclusion, not an unexposed injective-map premise. [A1, F1, algebra]

1.2 Let $L\cong\mathbb P^1$ be any real twistor line. Its normal bundle in $\mathbb P^3$ is $\mathcal O(1)^{\oplus2}$, and the conormal sequence splits because its extension group is $H^1(\mathcal O(1))^{\oplus2}=0$. Hence $\Omega_Z^1|_L\cong\mathcal O(-2)\oplus\mathcal O(-1)^{\oplus2}$ and $T_Z|_L\cong\mathcal O(2)\oplus\mathcal O(1)^{\oplus2}$. Since $\Omega_Z^2\cong T_Z(-4)$, each of $\mathcal E(-1)|_L$, $\mathcal E(-3)|_L$, $\mathcal E(-2)|_L$, $(\mathcal E\otimes\Omega_Z^1(-1))|_L$, and $(\mathcal E\otimes\Omega_Z^2)|_L$ is a sum of negative line bundles. The Serre-dual bundles restrict respectively to $\mathcal E^*(-3)$, $\mathcal E^*(-1)$, $\mathcal E^*(-2)$, $\mathcal E^*\otimes T_Z(-3)$, and $\mathcal E^*\otimes\Omega_Z^1$, also sums of negative line bundles. Every point of $Z$ lies on a real line, so negativity on every such line makes every global section zero. Thus [F6] gives $H^0(Z,F)=0$ and [F5] gives $H^3(Z,F)=0$ for all the listed coefficient bundles $F$. [A2, F5, F6, algebra]

2.1 Choose a plane $P\cong\mathbb P^2$ containing a real twistor line. By [A2] and the direct-image result, an open family of lines near that line has evaluation isomorphisms and hence trivial restrictions of $\mathcal E$. Those lines form a nonempty open subset of the line family of $P$; the incidence projection from this open subset covers a dense subset of $P$. A section of $\mathcal E(-2)|_P$ vanishes on every such line because $H^0(\mathbb P^1,\mathcal O(-2)^{\oplus N})=0$, so it vanishes on a dense subset and is zero. The divisor sequence $0\to\mathcal E(-3)\to\mathcal E(-2)\to\mathcal E(-2)|_P\to0$ and step 1.1 now give $H^1(Z,\mathcal E(-3))=0$. [A2, F6, step 1.1, algebra]

2.2 Tensor $0\to\Omega_Z^1(-1)\to\mathcal O(-2)^{\oplus4}\to\mathcal O(-1)\to0$ by $\mathcal E$. Step 1.2 gives $H^0(\mathcal E(-2))=H^0(\mathcal E(-1))=0$, and step 1.1 gives $H^1(\mathcal E(-2))=0$. The long exact sequence yields $H^1(\mathcal E\otimes\Omega_Z^1(-1))=0$. Serre duality and step 1.1 also give $H^2(\mathcal E(-2))=0$. [F5, F6, step 1.1, step 1.2, algebra]

3.1 Apply [F4] to the diagonal Koszul resolution [F3], tensoring the second factor by $\mathcal E(-2)$, pushing to the first factor, and twisting that output factor by $\mathcal O(2)$. Its first page is $E_1^{p,q}=H^q(Z,\mathcal E(-2)\otimes\Omega_Z^{-p}(-p))\otimes\mathcal O_Z(p+2)$ for $p=-3,-2,-1,0$. Steps 1.2, 2.1 and 2.2 and Serre duality make every term in rows $q=0,1,3$ vanish except possibly $H^1(\mathcal E\otimes\Omega_Z^2)$ at $(-2,1)$. No differential can enter this term; its only possible outgoing $d_2$ lands in $H^0(\mathcal E(-2))=0$. It therefore survives to $E_\infty$, but the diagonal complex resolves $\mathcal E(-2)$ in degree zero and has no degree $-1$ hypercohomology. Since $(-2)+1=-1$, the term is zero. Thus the remaining spectral-sequence row is $q=2$. [F3, F4, step 1.2, step 2.1, step 2.2, algebra]

4.1 The row $q=2$ gives the complex $H^2(\mathcal E(-3))\otimes\mathcal O(-1)\to H^2(\mathcal E\otimes\Omega_Z^2)\otimes\mathcal O\to H^2(\mathcal E\otimes\Omega_Z^1(-1))\otimes\mathcal O(1)$. All higher differentials vanish because all other rows are zero. Its only cohomology is the degree-zero hypercohomology of the diagonal resolution, namely $\mathcal E$; the first and last terms are exact because the other total degrees vanish. The maps are linear in the homogeneous output coordinates, since each Koszul differential is contraction with the universal linear section. Thus this is the stated monad; its cohomology vector spaces are canonical, and changing bases acts by $GL(U)\times GL(K)\times GL(U')$. [F3, F4, step 3.1, algebra]

4.2 From [A3], $\operatorname{ch}(\mathcal E(t))=Ne^{tH}-kH^2e^{tH}$ and $\operatorname{td}(T_Z)=1+2H+\tfrac{11}{6}H^2+H^3$. Hirzebruch–Riemann–Roch [F7] gives $\chi(\mathcal E(t))=N\binom{t+3}{3}-k(t+2)$, with values $k,-N+2k,0,-k$ for $t=-3,-4,-2,-1$. The Euler sequences $0\to\mathcal O(-4)\to\mathcal O(-3)^{\oplus4}\to\Omega_Z^2\to0$ and $0\to\Omega_Z^1(-1)\to\mathcal O(-2)^{\oplus4}\to\mathcal O(-1)\to0$ give Euler characteristics $k,2k+N,k$ for the three monad coefficient bundles. Steps 1.2, 2.1, 2.2 and 3.1 leave only $H^2$ in each, so these values are the dimensions. [A3, F6, F7, step 1.2, step 2.1, step 2.2, step 3.1, algebra]

5.1 The space of parallel sections of $\widehat E$ evaluates to a trivial subbundle, and its orthogonal complement is parallel because the connection is unitary. No nonzero parallel section lies in the complement. Every flat summand is trivial since $S^4$ is simply connected [F2]. The Ward transform and diagonal construction preserve direct sums. For a trivial rank-$m$ summand $\mathcal O_Z^{\oplus m}$, the two Euler sequences and [F6] give coefficient groups $H^2(\mathcal O(-3))=0$, $H^2(\Omega_Z^2)^{\oplus m}\cong\mathbb C^m$, and $H^2(\Omega_Z^1(-1))=0$, so its monad is $0\to\mathcal O_Z^{\oplus m}\to0$. Flat summands are therefore included without imposing $H^0(Z,\mathcal E)=0$ or $H^0(Z,\mathcal E^\vee)=0$. No Dirac index or kernel-dimension formula is used. [F2, F6, step 4.1, algebra] ∎
