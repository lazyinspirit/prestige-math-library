---
id: thm-adhm-fixed-point-instanton-count
kind: theorem
title: "ADHM Fixed Points and the Equivariant Instanton Count"
status: draft
origin: pipeline
dependency_level: 7
domain: mathematics
library: mathematics
category: quantum-field-theory-mathematics
axiom_base: "ZF + full AC inherited from the supplied trace-normalized instanton-charge definition; the local fixed-point linear algebra is choice-free."
deps:
  - def-framed-u-n-instanton-moduli-and-adhm-data
  - thm-atiyah-bott-berline-vergne-integration-formula
  - lem-adhm-stable-quotient-and-torus-lift
  - def-qftx-adhm-linear-data-stability-and-regularity
  - thm-fixed-point-schemes-and-centralizers-of-linearly-reductive-actions
  - lem-multiplicative-type-groups-are-linearly-reductive
  - thm-zariski-tangent-space-jacobian-kernel
  - def-axiom-of-choice
dependency_roles:
  def-framed-u-n-instanton-moduli-and-adhm-data: mathematical-premise
  thm-atiyah-bott-berline-vergne-integration-formula: mathematical-premise
  lem-adhm-stable-quotient-and-torus-lift: mathematical-premise
  def-qftx-adhm-linear-data-stability-and-regularity: mathematical-premise
  thm-fixed-point-schemes-and-centralizers-of-linearly-reductive-actions: mathematical-premise
  lem-multiplicative-type-groups-are-linearly-reductive: mathematical-premise
  thm-zariski-tangent-space-jacobian-kernel: mathematical-premise
  def-axiom-of-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Hiraku Nakajima and Kota Yoshioka, Lectures on Instanton Counting"
      url: https://arxiv.org/pdf/math/0311058
      locator: "§3.1, PDF pp. 17–19, especially the T^2×T_G fixed-point classification by N-tuples of Young diagrams and Theorem 3.2's tangent character."
    - title: "Nikita A. Nekrasov, Seiberg–Witten Prepotential from Instanton Counting"
      url: https://arxiv.org/pdf/hep-th/0206161
      locator: "§§3.1–3.5, PDF pp. 12–18, equations (3.1)–(3.19): ADHM equations, FI resolution, deformation complex, tangent weights, and partition labels. The contour residues in §3.6 are outside the local proof."
verification:
  precheck: pending
---

## Statement

Fix integers $N\geq1$ and $k\geq0$ and a positive real stability parameter $\zeta$. Let $V=\mathbb C^k$ and $W=\mathbb C^N$ have their standard Hermitian structures. Define $\mathcal M^\zeta_{k,N}$ to be the geometric quotient by $GL(V)$ of data $(B_1,B_2,I,J)$ with $B_i\in\operatorname{End}(V)$, $I\in\operatorname{Hom}(W,V)$, $J\in\operatorname{Hom}(V,W)$, $[B_1,B_2]+IJ=0$, and $\operatorname{span}\{B_{i_1}\cdots B_{i_m}I(w):m\geq0,\ w\in W\}=V$. The positive parameter $\zeta$ specifies the positive-FI stability chamber. Let $T=(S^1)^2\times(S^1)^N$, with rotation characters $t_1,t_2$ and dual framing characters $e_1,\ldots,e_N$. Thus $W$ has character $\mathbf W=\sum_\alpha e_\alpha^{-1}$ and $W^\vee$ has character $\mathbf W^\vee=\sum_\alpha e_\alpha$. Its action is $(t_1,t_2,h)\cdot(B_1,B_2,I,J)=(t_1B_1,t_2B_2,Ih^{-1},t_1t_2hJ)$, where $h$ acts on $W$ with weights $e_\alpha^{-1}$. Complexify the characters and work over the rational function field $K=\mathbb Q(\epsilon_1,\epsilon_2,a_1,\ldots,a_N)$, where $\epsilon_i=c_1^T(t_i)$ and $a_\alpha=c_1^T(e_\alpha)$.

For a partition $Y$, a Young diagram means a finite downward-closed subset of $\mathbb Z_{\geq0}^2$; write $|Y|$ for its number of boxes. For an $N$-tuple $\vec Y=(Y_1,\ldots,Y_N)$ set $|\vec Y|=\sum_\alpha|Y_\alpha|$, $\mathbf W=\sum_\alpha e_\alpha^{-1}$, $\mathbf W^\vee=\sum_\alpha e_\alpha$, and
$$\mathbf V_{\vec Y}=\sum_{\alpha=1}^N e_\alpha\sum_{(i,j)\in Y_\alpha}t_1^it_2^j.$$
Then $\mathcal M^\zeta_{k,N}$ is smooth of complex dimension $2kN$, and its $T$-fixed points are isolated and in bijection with the $N$-tuples of partitions of total size $k$. At the fixed point $\vec Y$, the tangent character is
$$\operatorname{ch}_T(T_{\vec Y}\mathcal M^\zeta_{k,N})=\mathbf V_{\vec Y}^{\vee}\mathbf V_{\vec Y}(t_1+t_2-1-t_1t_2)+\mathbf V_{\vec Y}^{\vee}\mathbf W^\vee+t_1t_2\mathbf W\mathbf V_{\vec Y}.$$
For each character $\chi$, let $u_\chi=c_1^T(\chi)$. Let $E_{\vec Y}$ be the product of $u_\chi$ over the tangent weights counted with multiplicity; the fixed points are isolated, so none of these weights is zero. Define the fixed-point series by
$$Z^{\mathrm{fp}}_N(q)=\sum_{k\geq0}q^k\sum_{|\vec Y|=k}E_{\vec Y}^{-1}\in K\langle\!\langle q\rangle\!\rangle.$$
Each coefficient is a finite sum, and the series is formal; no analytic convergence is asserted.

Assume full AC as inherited from the supplied instanton-charge convention. If a $T$-equivariant isomorphism from the positive-FI quotient to the moduli of framed rank-$N$ torsion-free coherent sheaves on $\mathbb{CP}^2$ with Hilbert polynomial $N\binom{m+2}{2}-k$ is supplied, it transfers the fixed-point classification and tangent characters to that Gieseker space. The ordinary framed anti-self-dual moduli space is a separate zero-FI regular locus: identifying that locus with the regular ADHM quotient is another unresolved conditional input, and no fixed-point count or equality of series is asserted for it. If a separately proved noncompact equivariant pushforward for $\mathcal M^\zeta_{k,N}$ has a localization identity with these isolated fixed points and tangent Euler classes, then its value on the unit is the coefficient displayed above. The compact ABBV formula alone does not establish such an identity: $\mathcal M^\zeta_{k,N}$ is noncompact for $k>0$. This theorem makes no identification with an ordinary continuum gauge-theory path integral.

## Statement references

[Nakajima and Yoshioka, §3.1, PDF pp. 17–19, Theorem 3.2](https://arxiv.org/pdf/math/0311058)

[Nekrasov, §§3.1–3.5, PDF pp. 12–18, equations (3.1)–(3.19)](https://arxiv.org/pdf/hep-th/0206161)

[[def-framed-u-n-instanton-moduli-and-adhm-data|Framed ADHM data and the positive-FI stable quotient]]

[[thm-atiyah-bott-berline-vergne-integration-formula|Compact ABBV formula]]

[[def-axiom-of-choice|Full Axiom of Choice for the Chern-class clause]]

## Facts & Assumptions
**Given:** $N\geq1$, $k\geq0$, $\zeta>0$, the Hermitian spaces $V,W$, the complex ADHM equation, the stability condition, and the $T$-action stated above. Assume full AC as in the Statement: the published algebraic quotient and fixed-scheme suppliers use AC, and the conditional Chern-class/Gieseker clause inherits AC. The finite word, matrix and character calculations themselves use only finite selections. All characters are treated as algebraically independent formal variables.

[F1] [[def-framed-u-n-instanton-moduli-and-adhm-data]]: the ADHM equation is $[B_1,B_2]+IJ=0$, stability means the $B_1,B_2$-words applied to $I(W)$ span $V$, the quotient is by $GL(V)$, and $T$ acts by the displayed rotation and dual-framing convention.

[F2] [[thm-atiyah-bott-berline-vergne-integration-formula]]: the current statement is the real Borel fixed-component and isolated-fixed-point formula for compact oriented smooth $T$-manifolds without boundary. It does not cover noncompact instanton spaces.

[F3] The stable complex ADHM equation locus has a free proper gauge action and a Hausdorff second-countable complex quotient of dimension $2kN$, with tangent $\ker d_1/\operatorname{im}d_0$. Word-frame slices give holomorphic quotient charts and explicit character gauge lifts at fixed points. [[lem-adhm-stable-quotient-and-torus-lift]]

[F4] An algebraic torus is linearly reductive, so its fixed-point subscheme on a smooth complex variety is smooth, without a compactness assumption on the variety. Zariski tangent spaces in affine charts are the kernels of the equation Jacobians. [[lem-multiplicative-type-groups-are-linearly-reductive]], [[thm-fixed-point-schemes-and-centralizers-of-linearly-reductive-actions]], [[thm-zariski-tangent-space-jacobian-kernel]]

[L1] [[thm-atiyah-bott-berline-vergne-integration-formula]] gives the real Borel fixed-component formula only for compact oriented smooth $T$-manifolds without boundary, including empty-locus vanishing in every dimension. This compact theorem supplies no noncompact pushforward for the ADHM quotient.

[L2] [[def-framed-u-n-instanton-moduli-and-adhm-data]] defines the quotient presentations and the framed connection and sheaf spaces, but contains no ADHM/monad isomorphism between them. For the zero-FI clause, regular means stable and costable: no nonzero common $B_i$-invariant subspace lies in $\ker J$. This is the exact raw-data convention in [[def-qftx-adhm-linear-data-stability-and-regularity]]. The sheaf/ASD correspondences remain separate proof obligations; no such supplier is inferred from either definition.

[A4] Assume the full Axiom of Choice as in the Statement. It is used by the algebraic smoothness and fixed-scheme suppliers and inherited from the supplied trace-normalized instanton-charge definition; the finite-dimensional word and character calculations use only finite selections. [[def-axiom-of-choice]]

[A1] For the Gieseker clause in the Statement, assume the positive-FI stable quotient is $T$-equivariantly isomorphic to the specified framed sheaf moduli space, preserving the Hilbert polynomial, framing, and tangent representations.

[A2] For the ordinary instanton dictionary in the Statement, assume a $T$-equivariant ADHM correspondence identifies the zero-FI regular quotient with the framed finite-action anti-self-dual moduli space, preserving the trace charge and framing. No fixed-point transfer from the positive-FI resolution to that open regular locus is assumed.

[A3] For the pushforward clause in the Statement, assume a noncompact equivariant pushforward is separately defined on $\mathcal M^\zeta_{k,N}$ and a theorem proves its fixed-point localization identity under the precise proper-support or compactification hypotheses used for that pushforward. The compact theorem [F2] alone does not supply this premise.

## Proof

1.1 The infinitesimal $GL(V)$ action and the derivative of the complex ADHM equation form the complex $$C^0=\operatorname{End}(V)\xrightarrow{d_0}C^1=\operatorname{End}(V)t_1\oplus\operatorname{End}(V)t_2\oplus\operatorname{Hom}(W,V)\oplus\operatorname{Hom}(V,W)t_1t_2\xrightarrow{d_1}C^2=\operatorname{End}(V)t_1t_2,$$ where $d_0(\xi)=([\xi,B_1],[\xi,B_2],\xi I,-J\xi)$ and $d_1(\dot B_1,\dot B_2,\dot I,\dot J)=[\dot B_1,B_2]+[B_1,\dot B_2]+\dot I J+I\dot J$. Expanding gives $d_1d_0(\xi)=[\xi,[B_1,B_2]+IJ]=0$, so this is a complex. [given, F1, algebra]

2.1 If $d_0(\xi)=0$, then $\xi$ commutes with both $B_i$ and $\xi I=0$. Therefore $\xi B_{i_1}\cdots B_{i_m}I(w)=B_{i_1}\cdots B_{i_m}\xi I(w)=0$ for every word and $w$. Stability says those vectors span $V$, hence $\xi=0$ and $d_0$ is injective. [given, F1, step 1.1, algebra]

3.1 To show $d_1$ is onto, use the nondegenerate trace pairing on $\operatorname{End}(V)$. If $\Theta$ annihilates its image, variation of $\dot J$ gives $\Theta I=0$, and variations of $\dot B_1,\dot B_2$ give $[\Theta,B_1]=[\Theta,B_2]=0$. The same word calculation as in step 2.1 then gives $\Theta=0$. Thus the annihilator of $\operatorname{im}d_1$ is zero, so $d_1$ is surjective. [given, F1, step 1.1, step 2.1, algebra]

4.1 Apply [F3] to the displayed equation and stability condition. Its proof uses the declared holomorphic implicit-function supplier, proves properness by word-frame bounds on both the gauge transformation and its inverse, and constructs holomorphic quotient charts. Thus the quotient here is a Hausdorff second-countable complex manifold, with tangent $\ker d_1/\operatorname{im}d_0$ and complex dimension $2kN$. For $k=0$ the quotient is a point. This is the stable complex quotient; no real moment-map or sheaf/ASD identification is inferred. [given, F1, F3, step 2.1, step 3.1, algebra]

5.1 At a $T$-fixed quotient point represented by $x$, [F3] gives the unique gauge lift $g(t)=C(x)\operatorname{diag}(e_{\alpha_\ell}t_1^{a_\ell}t_2^{b_\ell})C(x)^{-1}$ from a standard-framing word basis. This is a smooth representation of the compact torus itself. The fixed-orbit equations give $g(t)I(w_\alpha)=e_\alpha I(w_\alpha)$ and $g(t)B_i=t_iB_i g(t)$, so all weights generated by stability have the form $e_\alpha t_1^it_2^j$ with $i,j\ge0$. Under $t_1t_2hJ=Jg(t)^{-1}$, a nonzero component from a $V$-weight $\chi$ to the $\beta$th framing line requires $\chi=e_\beta t_1^{-1}t_2^{-1}$. Distinct integer characters on the compact torus cannot satisfy this equality with any generated weight, so $J=0$. The moment equation then gives $[B_1,B_2]=0$. No Zariski-density or algebraic lifting assertion is used. [given, F1, F3, step 4.1, construct, algebra]

6.1 For each framing line, the commuting pair $B_1,B_2$ makes its cyclic span a quotient of $\mathbb C[x,y]$, with $x,y$ acting by $B_1,B_2$. The torus weights $e_\alpha t_1^i t_2^j$ are distinct between colors and between monomials, so the kernel is a monomial ideal. Its standard monomials form a finite downward-closed subset of $\mathbb Z_{\geq0}^2$, hence a Young diagram $Y_\alpha$. Stability says the cyclic spans together exhaust $V$, so $\sum_\alpha|Y_\alpha|=\dim V=k$. Conversely, for any such tuple, take one basis vector per box, let each $B_i$ move a box one unit in direction $i$ and send it to zero when the next box is absent, let $I$ send the $\alpha$th framing vector to the origin box of $Y_\alpha$ when nonempty, and set $J=0$. Downward closure makes the shifts commute, the moment equation holds, and every box is generated from its origin. These data are stable and recover the given diagrams. The construction and recovery are inverse on gauge orbits, proving the fixed-point bijection. [given, F1, step 5.1, algebra]

6.2 Bring each torus-transformed representative back to the fixed representative by the inverse unique gauge lift from step 5.1. The variations then transform as $t_i\operatorname{End}(V)$ for $\dot B_i$, as $V^\vee\mathbf W^\vee$ for $\dot I$, and as $t_1t_2\mathbf W\mathbf V$ for $\dot J$; the complex-equation target transforms as $t_1t_2\operatorname{End}(V)$. Thus the torus representations in the complex of step 1.1 are $C^0=\mathbf V_{\vec Y}^{\vee}\mathbf V_{\vec Y}$, $C^1=(t_1+t_2)\mathbf V_{\vec Y}^{\vee}\mathbf V_{\vec Y}+\mathbf V_{\vec Y}^{\vee}\mathbf W^\vee+t_1t_2\mathbf W\mathbf V_{\vec Y}$, and $C^2=t_1t_2\mathbf V_{\vec Y}^{\vee}\mathbf V_{\vec Y}$. Exactness at $C^0$ and $C^2$ follows from steps 2.1 and 3.1, so the tangent character is $[C^1]-[C^0]-[C^2]$, which is precisely the expression in the Statement. [given, F1, step 1.1, step 2.1, step 3.1, step 5.1, algebra]

7.1 The label set in step 6.1 is finite: for $k>0$ every box of a size-at-most-$k$ downward-closed diagram has both coordinates less than $k$, so the possible tuples lie in a finite collection of subsets; $k=0$ has only the empty tuple. Hence the fixed locus is a finite set in the Hausdorff quotient from [F3], and each point is isolated. By [F3] the quotient has a finite invariant affine atlas with algebraic action of $T_{\mathbb C}=(\mathbb C^*)^{N+2}$. In each slice its coordinate functions are eigenfunctions. A point fixed by the compact torus has every nonzero-weight coordinate equal to zero, since each nontrivial integer character is nontrivial on that compact torus; conversely these equations make the point fixed by $T_{\mathbb C}$. Thus the two fixed loci have the same point set. The fixed subscheme is smooth by [F4], because $T_{\mathbb C}$ is diagonalizable and hence linearly reductive. Its fixed ideal in these affine coordinates is generated by the nonzero-weight coordinates. Linearizing that ideal, using the tangent-kernel description in [F4], identifies its tangent with the invariant tangent subspace. A smooth fixed scheme with a finite point set has dimension zero at every point, so that subspace is zero. Therefore every complex tangent weight is a nonzero character. Its first Chern class is a nonzero integer linear polynomial in the algebraically independent variables and is invertible in $K$. The tangent has complex dimension $2kN$, so the Euler product has exactly $2kN$ factors counted with multiplicity. [given, F3, F4, step 4.1, step 6.1, step 6.2, algebra]

7.2 If assumptions [A1] and [A4] are supplied, the equivariant isomorphism transfers the fixed-point bijection and tangent characters to the Gieseker space. The local definition supplies no ADHM/monad proof of this comparison, as recorded in [L2]. [given, A1, A4, L2, step 6.1, step 6.2, algebra]

7.3 If [A2] is supplied, it identifies the zero-FI regular quotient with the ordinary framed anti-self-dual moduli, but this alone does not put the positive-FI fixed points in that open locus; the correspondence remains an explicit assumption because of [L2]. [given, A2, L2, step 6.1]

7.4 If [A3] is supplied, substituting steps 6.1 and 6.2 into its noncompact localization identity gives the stated pushforward value. The compact ABBV interface [F2] cannot be applied directly to $\mathcal M^\zeta_{k,N}$; only its compact scope is available by [L1]. [given, A3, F2, L1, step 6.1, step 6.2]

8.1 For each fixed $k$, there are finitely many partitions of $k$, hence finitely many $N$-tuples of total size $k$; every summand $E_{\vec Y}^{-1}$ is in $K$ by step 7.1. Therefore the coefficient is a finite sum and the sequence of coefficients defines the formal power series $Z_N^{\mathrm{fp}}(q)\in K\langle\!\langle q\rangle\!\rangle$. At $k=0$, $V=0$, the empty tuple is the unique fixed point, the Euler product is empty and equals $1$, so the constant coefficient is $1$. [given, step 6.1, step 7.1, algebra]

9.1 For $k>0$, use the tuple $Y_1=\{(i,0):0\leq i<k\}$ and $Y_\alpha=\varnothing$ for $\alpha>1$; step 6.1 constructs a stable datum. Replacing $B_1$ by $B_1+c\,\mathrm{id}_V$ preserves the complex equation and stability while changing $\operatorname{tr}(B_1)$ by $kc$ for every $c\in\mathbb C$. Trace is invariant under conjugation, so the descended trace function on the geometric quotient has image $\mathbb C$, which is not compact. Thus the quotient is noncompact. The completed Borel carrier matches the compact real-Borel interface in [L1]. The ADHM/monad comparisons [L2] and a valid noncompact pushforward remain the separate conditional inputs stated above. [given, F1, L1, L2, step 6.1, algebra] ∎
