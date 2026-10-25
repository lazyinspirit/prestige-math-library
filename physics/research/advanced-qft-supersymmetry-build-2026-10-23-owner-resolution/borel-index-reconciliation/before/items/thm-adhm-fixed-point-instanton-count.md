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
  - def-axiom-of-choice
dependency_roles:
  def-framed-u-n-instanton-moduli-and-adhm-data: mathematical-premise
  thm-atiyah-bott-berline-vergne-integration-formula: mathematical-premise
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
**Given:** $N\geq1$, $k\geq0$, $\zeta>0$, the Hermitian spaces $V,W$, the complex ADHM equation, the stability condition, and the $T$-action stated above. Assume full AC only for the conditional Chern-class/Gieseker clause; the local fixed-point calculations are choice-free. All characters are treated as algebraically independent formal variables.

[F1] [[def-framed-u-n-instanton-moduli-and-adhm-data]]: the ADHM equation is $[B_1,B_2]+IJ=0$, stability means the $B_1,B_2$-words applied to $I(W)$ span $V$, the quotient is by $GL(V)$, and $T$ acts by the displayed rotation and dual-framing convention.

[F2] [[thm-atiyah-bott-berline-vergne-integration-formula]]: the current statement is the real Borel fixed-component and isolated-fixed-point formula for compact oriented smooth $T$-manifolds without boundary. It does not cover noncompact instanton spaces.

[L1] [[thm-atiyah-bott-berline-vergne-integration-formula]]: its Statement gives the Borel fixed-component and isolated-fixed-point formula only for compact oriented smooth $T$-manifolds without boundary. Its current proof cites the now-present batch-8 Borel-localization carrier; that statement matches the compact real-Borel interface, but the carrier and its direct in-run prerequisites have no current Step-1 readiness records. The ABBV item itself also has no current Step-1 readiness record. I use only the compact scope conditionally.

[L2] [[def-framed-u-n-instanton-moduli-and-adhm-data]] defines the two ADHM quotient presentations and the framed connection and sheaf spaces, but contains no proof-bearing ADHM/monad isomorphism between them. No such local supplier is present in this assigned pair.

[A4] Assume the full Axiom of Choice as inherited from the supplied trace-normalized instanton-charge definition; no choice principle is used in the local fixed-point or tangent-character arguments. [[def-axiom-of-choice]]

[A1] For the Gieseker clause in the Statement, assume the positive-FI stable quotient is $T$-equivariantly isomorphic to the specified framed sheaf moduli space, preserving the Hilbert polynomial, framing, and tangent representations.

[A2] For the ordinary instanton dictionary in the Statement, assume a $T$-equivariant ADHM correspondence identifies the zero-FI regular quotient with the framed finite-action anti-self-dual moduli space, preserving the trace charge and framing. No fixed-point transfer from the positive-FI resolution to that open regular locus is assumed.

[A3] For the pushforward clause in the Statement, assume a noncompact equivariant pushforward is separately defined on $\mathcal M^\zeta_{k,N}$ and a theorem proves its fixed-point localization identity under the precise proper-support or compactification hypotheses used for that pushforward. The compact theorem [F2] alone does not supply this premise.

## Proof

1.1 The infinitesimal $GL(V)$ action and the derivative of the complex ADHM equation form the complex $$C^0=\operatorname{End}(V)\xrightarrow{d_0}C^1=\operatorname{End}(V)t_1\oplus\operatorname{End}(V)t_2\oplus\operatorname{Hom}(W,V)\oplus\operatorname{Hom}(V,W)t_1t_2\xrightarrow{d_1}C^2=\operatorname{End}(V)t_1t_2,$$ where $d_0(\xi)=([\xi,B_1],[\xi,B_2],\xi I,-J\xi)$ and $d_1(\dot B_1,\dot B_2,\dot I,\dot J)=[\dot B_1,B_2]+[B_1,\dot B_2]+\dot I J+I\dot J$. Expanding gives $d_1d_0(\xi)=[\xi,[B_1,B_2]+IJ]=0$, so this is a complex. [given, F1, algebra]

2.1 If $d_0(\xi)=0$, then $\xi$ commutes with both $B_i$ and $\xi I=0$. Therefore $\xi B_{i_1}\cdots B_{i_m}I(w)=B_{i_1}\cdots B_{i_m}\xi I(w)=0$ for every word and $w$. Stability says those vectors span $V$, hence $\xi=0$ and $d_0$ is injective. [given, F1, step 1.1, algebra]

3.1 To show $d_1$ is onto, use the nondegenerate trace pairing on $\operatorname{End}(V)$. If $\Theta$ annihilates its image, variation of $\dot J$ gives $\Theta I=0$, and variations of $\dot B_1,\dot B_2$ give $[\Theta,B_1]=[\Theta,B_2]=0$. The same word calculation as in step 2.1 then gives $\Theta=0$. Thus the annihilator of $\operatorname{im}d_1$ is zero, so $d_1$ is surjective. [given, F1, step 1.1, step 2.1, algebra]

4.1 The zero set of the complex equation is a smooth submanifold near a stable point by the implicit function theorem applied to the surjective derivative $d_1$. The $GL(V)$ stabilizer is trivial: any stabilizer element commutes with each $B_i$ and fixes $I(W)$, so it fixes every vector in the stable spanning set. For $k=0$ the quotient is a point and has dimension $0=2kN$. Suppose $k>0$. By stability choose $k$ vectors $v_ell=B_{i_{ell,1}}\cdots B_{i_{ell,m_ell}}I(w_ell)$ forming a basis of $V$, and let $C(x)$ be the matrix with these columns for nearby data $x$. On the invariant open set $U$ where $C(x)$ is invertible, $C(g\cdot x)=gC(x)$. The slice $S=\{x\in U:C(x)=\mathrm{id}_V\}$ meets every orbit in $U$ exactly once, and $(g,s)\mapsto g\cdot s$ is a diffeomorphism $GL(V)\times S\to U$ with inverse $x\mapsto(C(x),C(x)^{-1}\cdot x)$. The derivative of $C$ along the orbit direction $\xi\cdot s$ at $s\in S$ is $\xi$, so $\mathrm{id}_V$ is a regular value and $S$ is smooth. Therefore the geometric quotient is locally this smooth slice, with tangent $\ker d_1/\operatorname{im}d_0$. Its complex dimension is $(2k^2+2kN)-k^2-k^2=2kN$. [given, F1, step 2.1, step 3.1, algebra]

5.1 At a $T$-fixed quotient point, stability makes the gauge transformation relating any torus transform of a representative to that representative unique. Uniqueness and the group law make these transformations a representation on $V$; since the quotient action is algebraic, its stabilizer is Zariski closed, and fixedness under the compact torus extends to its complexification. The weight decomposition starts with the images of the $N$ framing lines under $I$, of weights $e_\alpha$, and each $B_i$ advances the corresponding weight by $t_i$. Thus all weights in $V$ have the form $e_\alpha t_1^i t_2^j$ with $i,j\geq0$. Under the fixed-orbit equation $t_1t_2hJ=Jg^{-1}$, a nonzero component from a $V$-weight $\chi$ to the $\beta$th framing line would require $\chi=e_\beta t_1^{-1}t_2^{-1}$. Algebraic independence excludes that weight from the generated weights, so $J=0$. The complex moment equation then gives $[B_1,B_2]=0$. [given, F1, step 4.1, construct]

6.1 For each framing line, the commuting pair $B_1,B_2$ makes its cyclic span a quotient of $\mathbb C[x,y]$, with $x,y$ acting by $B_1,B_2$. The torus weights $e_\alpha t_1^i t_2^j$ are distinct between colors and between monomials, so the kernel is a monomial ideal. Its standard monomials form a finite downward-closed subset of $\mathbb Z_{\geq0}^2$, hence a Young diagram $Y_\alpha$. Stability says the cyclic spans together exhaust $V$, so $\sum_\alpha|Y_\alpha|=\dim V=k$. Conversely, for any such tuple, take one basis vector per box, let each $B_i$ move a box one unit in direction $i$ and send it to zero when the next box is absent, let $I$ send the $\alpha$th framing vector to the origin box of $Y_\alpha$ when nonempty, and set $J=0$. Downward closure makes the shifts commute, the moment equation holds, and every box is generated from its origin. These data are stable and recover the given diagrams. The construction and recovery are inverse on gauge orbits, proving the fixed-point bijection. [given, F1, step 5.1, algebra]

6.2 Bring each torus-transformed representative back to the fixed representative by the inverse unique gauge lift from step 5.1. The variations then transform as $t_i\operatorname{End}(V)$ for $\dot B_i$, as $V^\vee\mathbf W^\vee$ for $\dot I$, and as $t_1t_2\mathbf W\mathbf V$ for $\dot J$; the complex-equation target transforms as $t_1t_2\operatorname{End}(V)$. Thus the torus representations in the complex of step 1.1 are $C^0=\mathbf V_{\vec Y}^{\vee}\mathbf V_{\vec Y}$, $C^1=(t_1+t_2)\mathbf V_{\vec Y}^{\vee}\mathbf V_{\vec Y}+\mathbf V_{\vec Y}^{\vee}\mathbf W^\vee+t_1t_2\mathbf W\mathbf V_{\vec Y}$, and $C^2=t_1t_2\mathbf V_{\vec Y}^{\vee}\mathbf V_{\vec Y}$. Exactness at $C^0$ and $C^2$ follows from steps 2.1 and 3.1, so the tangent character is $[C^1]-[C^0]-[C^2]$, which is precisely the expression in the Statement. [given, F1, step 1.1, step 2.1, step 3.1, step 5.1, algebra]

7.1 The fixed-point bijection in step 6.1 is discrete. An invariant Riemannian metric gives an equivariant exponential chart at a fixed point, so the tangent space to the fixed locus is precisely the zero-weight subspace. A zero character would therefore give a positive-dimensional fixed locus through that point, contradicting discreteness. Thus every tangent weight is nonzero and its first Chern class is invertible in $K$. The tangent dimension is $2kN$, so the Euler product has $2kN$ factors counted with multiplicity. [given, step 4.1, step 6.1, step 6.2, algebra]

7.2 If assumptions [A1] and [A4] are supplied, the equivariant isomorphism transfers the fixed-point bijection and tangent characters to the Gieseker space. The local definition supplies no ADHM/monad proof of this comparison, as recorded in [L2]. [given, A1, A4, L2, step 6.1, step 6.2, algebra]

7.3 If [A2] is supplied, it identifies the zero-FI regular quotient with the ordinary framed anti-self-dual moduli, but this alone does not put the positive-FI fixed points in that open locus; the correspondence remains an explicit assumption because of [L2]. [given, A2, L2, step 6.1]

7.4 If [A3] is supplied, substituting steps 6.1 and 6.2 into its noncompact localization identity gives the stated pushforward value. The compact ABBV interface [F2] cannot be applied directly to $\mathcal M^\zeta_{k,N}$; only its compact scope is available by [L1]. [given, A3, F2, L1, step 6.1, step 6.2]

8.1 For each fixed $k$, there are finitely many partitions of $k$, hence finitely many $N$-tuples of total size $k$; every summand $E_{\vec Y}^{-1}$ is in $K$ by step 7.1. Therefore the coefficient is a finite sum and the sequence of coefficients defines the formal power series $Z_N^{\mathrm{fp}}(q)\in K\langle\!\langle q\rangle\!\rangle$. At $k=0$, $V=0$, the empty tuple is the unique fixed point, the Euler product is empty and equals $1$, so the constant coefficient is $1$. [given, step 6.1, step 7.1, algebra]

9.1 For $k>0$, use the tuple $Y_1=\{(i,0):0\leq i<k\}$ and $Y_\alpha=\varnothing$ for $\alpha>1$; step 6.1 constructs a stable datum. Replacing $B_1$ by $B_1+c\,\mathrm{id}_V$ preserves the complex equation and stability while changing $\operatorname{tr}(B_1)$ by $kc$ for every $c\in\mathbb C$. Trace is invariant under conjugation, so the descended trace function on the geometric quotient has image $\mathbb C$, which is not compact. Thus the quotient is noncompact. The Borel carrier is present and matches the compact real-Borel interface, but its own readiness chain remains unresolved by [L1]; the ADHM/monad comparisons [L2] and a valid noncompact pushforward remain unresolved. [given, F1, L1, L2, step 6.1, algebra] ∎
