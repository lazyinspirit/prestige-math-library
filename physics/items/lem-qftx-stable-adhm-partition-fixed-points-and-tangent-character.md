---
id: lem-qftx-stable-adhm-partition-fixed-points-and-tangent-character
kind: lemma
title: Stable ADHM partition fixed points and tangent character
status: "published"
origin: session
dependency_level: 2
domain: mathematics
library: mathematics
category: quantum-field-theory-mathematics
page: qftx-adhm-moduli
axiom_base: ZF + full AC inherited through the algebraic quotient and smooth fixed-scheme suppliers
proof_strategy: direct
deps:
  - def-qftx-adhm-linear-data-stability-and-regularity
  - lem-adhm-stable-quotient-and-torus-lift
  - thm-fixed-point-schemes-and-centralizers-of-linearly-reductive-actions
  - lem-multiplicative-type-groups-are-linearly-reductive
  - thm-zariski-tangent-space-jacobian-kernel
  - def-axiom-of-choice
dependency_roles:
  def-qftx-adhm-linear-data-stability-and-regularity: mathematical-premise
  lem-adhm-stable-quotient-and-torus-lift: mathematical-premise
  thm-fixed-point-schemes-and-centralizers-of-linearly-reductive-actions: mathematical-premise
  lem-multiplicative-type-groups-are-linearly-reductive: mathematical-premise
  thm-zariski-tangent-space-jacobian-kernel: mathematical-premise
  def-axiom-of-choice: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: Hiraku Nakajima and Kota Yoshioka, Lectures on Instanton Counting
      url: https://arxiv.org/pdf/math/0311058
      locator: Section 3.1, PDF pp.17–19; partition labels and tangent character, with the stated dual-framing convention.
    - title: Nikita A. Nekrasov, Seiberg–Witten Prepotential from Instanton Counting
      url: https://arxiv.org/pdf/hep-th/0206161
      locator: Sections 3.1–3.5, PDF pp.12–18; ADHM deformation complex and formal fixed-point series.
verification:
  precheck: pending
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-25
---

## Statement

Assume full AC. Fix integers $N\geq1$ and $k\geq0$ and a positive real stability parameter $\zeta$. Let $V=\mathbb C^k$ and $W=\mathbb C^N$ have their standard Hermitian structures. Define $\mathcal M^\zeta_{k,N}$ to be the geometric quotient by $GL(V)$ of data $(B_1,B_2,I,J)$ with $B_i\in\operatorname{End}(V)$ for $i\in\{1,2\}$, $I\in\operatorname{Hom}(W,V)$, $J\in\operatorname{Hom}(V,W)$, $[B_1,B_2]+IJ=0$, and $\operatorname{span}\{B_{i_1}\cdots B_{i_m}I(w):m\geq0,\ i_1,\ldots,i_m\in\{1,2\},\ w\in W\}=V$. The positive parameter $\zeta$ specifies the positive-FI stability chamber. Let $T=(S^1)^2\times(S^1)^N$, with rotation characters $t_1,t_2$ and dual framing characters $e_1,\ldots,e_N$. Thus $W$ has character $\mathbf W=\sum_\alpha e_\alpha^{-1}$ and $W^\vee$ has character $\mathbf W^\vee=\sum_\alpha e_\alpha$. Its action is $(t_1,t_2,h)\cdot(B_1,B_2,I,J)=(t_1B_1,t_2B_2,Ih^{-1},t_1t_2hJ)$, where $h$ acts on $W$ with weights $e_\alpha^{-1}$. Work over the rational function field $K=\mathbb Q(\epsilon_1,\epsilon_2,a_1,\ldots,a_N)$ in algebraically independent variables. For $\chi=t_1^{m_1}t_2^{m_2}\prod_\alpha e_\alpha^{n_\alpha}$ set $u_\chi=m_1\epsilon_1+m_2\epsilon_2+\sum_\alpha n_\alpha a_\alpha$.

For a partition $Y$, a Young diagram means a finite downward-closed subset of $\mathbb Z_{\geq0}^2$; write $|Y|$ for its number of boxes. For an $N$-tuple $\vec Y=(Y_1,\ldots,Y_N)$ set $|\vec Y|=\sum_\alpha|Y_\alpha|$, $\mathbf W=\sum_\alpha e_\alpha^{-1}$, $\mathbf W^\vee=\sum_\alpha e_\alpha$, and
$$\mathbf V_{\vec Y}=\sum_{\alpha=1}^N e_\alpha\sum_{(i,j)\in Y_\alpha}t_1^it_2^j.$$
Then $\mathcal M^\zeta_{k,N}$ is smooth of complex dimension $2kN$, and its $T$-fixed points are isolated and in bijection with the $N$-tuples of partitions of total size $k$. At the fixed point $\vec Y$, the tangent character is
$$\operatorname{ch}_T(T_{\vec Y}\mathcal M^\zeta_{k,N})=\mathbf V_{\vec Y}^{\vee}\mathbf V_{\vec Y}(t_1+t_2-1-t_1t_2)+\mathbf V_{\vec Y}^{\vee}\mathbf W^\vee+t_1t_2\mathbf W\mathbf V_{\vec Y}.$$
Let $E_{\vec Y}$ be the product of $u_\chi$ over the tangent weights counted with multiplicity; the fixed points are isolated, so none of these weights is zero. Define the fixed-point series by
$$Z^{\mathrm{fp}}_N(q)=\sum_{k\geq0}q^k\sum_{|\vec Y|=k}E_{\vec Y}^{-1}\in K\langle\!\langle q\rangle\!\rangle.$$
Each coefficient is a finite sum, and the series is formal; no analytic convergence is asserted.

The quotient is a separated smooth finite-type complex algebraic variety with a finite invariant affine word-slice atlas for the algebraic complex torus $T_{\mathbb C}=(\mathbb C^*)^{N+2}$. This result concerns the stable matrix quotient and a formal series. It asserts no sheaf/ASD dictionary or integration identity.

## Statement references

[[def-qftx-adhm-linear-data-stability-and-regularity]]

[Nakajima–Yoshioka, §3.1](https://arxiv.org/pdf/math/0311058)

[Nekrasov, §§3.1–3.5](https://arxiv.org/pdf/hep-th/0206161)

## Facts & Assumptions
**Given:** $N\geq1$, $k\geq0$, $\zeta>0$, the Hermitian spaces $V,W$, the complex ADHM equation, the stability condition, and the $T$-action stated above. Assume full AC as in the Statement: the published algebraic quotient and fixed-scheme suppliers use AC. The finite word, matrix and character calculations themselves use only finite selections. All characters are treated as algebraically independent formal variables.

[F1] The raw equation, stability and torus action are those of [[def-qftx-adhm-linear-data-stability-and-regularity]].

[F3] The stable complex ADHM equation locus has a free proper gauge action, and its Hausdorff second-countable smooth quotient has complex dimension $2kN$ and tangent $\ker d_1/\operatorname{im}d_0$. Its finite affine atlas consists of word-frame slices $S_C$. If column $\ell$ of $C$ has color $\alpha_\ell$ and word counts $(a_\ell,b_\ell)$, normalization uses $D_C(t)=\operatorname{diag}(e_{\alpha_\ell}t_1^{a_\ell}t_2^{b_\ell})$; the slice action $s\mapsto D_C(t)^{-1}\cdot(t\cdot s)$ is Laurent-polynomial and extends algebraically to $T_{\mathbb C}=(\mathbb C^*)^{N+2}$. [[lem-adhm-stable-quotient-and-torus-lift]]

[F4] An algebraic torus is linearly reductive, so its fixed-point subscheme on a smooth complex variety is smooth, without a compactness assumption on the variety. Zariski tangent spaces in affine charts are the kernels of the equation Jacobians. [[lem-multiplicative-type-groups-are-linearly-reductive]], [[thm-fixed-point-schemes-and-centralizers-of-linearly-reductive-actions]], [[thm-zariski-tangent-space-jacobian-kernel]]
## Proof

**Given:** The stable matrix quotient, torus action and independent formal variables in the Statement.

1.1 The infinitesimal $GL(V)$ action and the derivative of the complex ADHM equation form the complex $$C^0=\operatorname{End}(V)\xrightarrow{d_0}C^1=\operatorname{End}(V)t_1\oplus\operatorname{End}(V)t_2\oplus\operatorname{Hom}(W,V)\oplus\operatorname{Hom}(V,W)t_1t_2\xrightarrow{d_1}C^2=\operatorname{End}(V)t_1t_2,$$ where $d_0(\xi)=([\xi,B_1],[\xi,B_2],\xi I,-J\xi)$ and $d_1(\dot B_1,\dot B_2,\dot I,\dot J)=[\dot B_1,B_2]+[B_1,\dot B_2]+\dot I J+I\dot J$. Expanding gives $d_1d_0(\xi)=[\xi,[B_1,B_2]+IJ]=0$, so this is a complex. [given, F1, algebra]

2.1 If $d_0(\xi)=0$, then $\xi$ commutes with both $B_i$ and $\xi I=0$. Therefore $\xi B_{i_1}\cdots B_{i_m}I(w)=B_{i_1}\cdots B_{i_m}\xi I(w)=0$ for every word and $w$. Stability says those vectors span $V$, hence $\xi=0$ and $d_0$ is injective. [given, F1, step 1.1, algebra]

3.1 To show $d_1$ is onto, use the nondegenerate trace pairing on $\operatorname{End}(V)$. If $\Theta$ annihilates its image, variation of $\dot J$ gives $\Theta I=0$, and variations of $\dot B_1,\dot B_2$ give $[\Theta,B_1]=[\Theta,B_2]=0$. The same word calculation as in step 2.1 then gives $\Theta=0$. Thus the annihilator of $\operatorname{im}d_1$ is zero, so $d_1$ is surjective. [given, F1, step 1.1, step 2.1, algebra]

4.1 Apply [F3] to the displayed equation and stability condition. Its proof uses the declared holomorphic implicit-function supplier, proves properness by word-frame bounds on both the gauge transformation and its inverse, and constructs holomorphic quotient charts. Thus the quotient here is a Hausdorff second-countable complex manifold, with tangent $\ker d_1/\operatorname{im}d_0$ and complex dimension $2kN$. For $k=0$ the quotient is a point. This is the stable complex quotient; no real moment-map or sheaf/ASD identification is inferred. [given, F1, F3, step 2.1, step 3.1, algebra]

5.1 At a $T$-fixed quotient point represented by $x$, [F3] gives the unique gauge lift $g(t)=C(x)\operatorname{diag}(e_{\alpha_\ell}t_1^{a_\ell}t_2^{b_\ell})C(x)^{-1}$ from a standard-framing word basis. This is a smooth representation of the compact torus itself. The fixed-orbit equations give $g(t)I(w_\alpha)=e_\alpha I(w_\alpha)$ and $g(t)B_i=t_iB_i g(t)$, so all weights generated by stability have the form $e_\alpha t_1^it_2^j$ with $i,j\ge0$. Under $t_1t_2hJ=Jg(t)^{-1}$, a nonzero component from a $V$-weight $\chi$ to the $\beta$th framing line requires $\chi=e_\beta t_1^{-1}t_2^{-1}$. Distinct integer characters on the compact torus cannot satisfy this equality with any generated weight, so $J=0$. The moment equation then gives $[B_1,B_2]=0$. No Zariski-density or algebraic lifting assertion is used. [given, F1, F3, step 4.1, construct, algebra]

6.1 For each framing line, the commuting pair $B_1,B_2$ makes its cyclic span a quotient of $\mathbb C[x,y]$, with $x,y$ acting by $B_1,B_2$. The torus weights $e_\alpha t_1^i t_2^j$ are distinct between colors and between monomials, so the kernel is a monomial ideal. Its standard monomials form a finite downward-closed subset of $\mathbb Z_{\geq0}^2$, hence a Young diagram $Y_\alpha$. Stability says the cyclic spans together exhaust $V$, so $\sum_\alpha|Y_\alpha|=\dim V=k$. Conversely, for any such tuple, take one basis vector per box, let each $B_i$ move a box one unit in direction $i$ and send it to zero when the next box is absent, let $I$ send the $\alpha$th framing vector to the origin box of $Y_\alpha$ when nonempty, and set $J=0$. Downward closure makes the shifts commute, the moment equation holds, and every box is generated from its origin. These data are stable and recover the given diagrams. The construction and recovery are inverse on gauge orbits, proving the fixed-point bijection. [given, F1, step 5.1, algebra]

6.2 Bring each torus-transformed representative back to the fixed representative by the inverse unique gauge lift from step 5.1. The variations then transform as $t_i\operatorname{End}(V)$ for $\dot B_i$, as $V^\vee\mathbf W^\vee$ for $\dot I$, and as $t_1t_2\mathbf W\mathbf V$ for $\dot J$; the complex-equation target transforms as $t_1t_2\operatorname{End}(V)$. Thus the torus representations in the complex of step 1.1 are $C^0=\mathbf V_{\vec Y}^{\vee}\mathbf V_{\vec Y}$, $C^1=(t_1+t_2)\mathbf V_{\vec Y}^{\vee}\mathbf V_{\vec Y}+\mathbf V_{\vec Y}^{\vee}\mathbf W^\vee+t_1t_2\mathbf W\mathbf V_{\vec Y}$, and $C^2=t_1t_2\mathbf V_{\vec Y}^{\vee}\mathbf V_{\vec Y}$. Exactness at $C^0$ and $C^2$ follows from steps 2.1 and 3.1, so the tangent character is $[C^1]-[C^0]-[C^2]$, which is precisely the expression in the Statement. [given, F1, step 1.1, step 2.1, step 3.1, step 5.1, algebra]

7.1 The label set in step 6.1 is finite: for $k>0$ every box of a size-at-most-$k$ downward-closed diagram has both coordinates less than $k$, so the possible tuples lie in a finite collection of subsets; $k=0$ has only the empty tuple. Hence the fixed locus is a finite set in the Hausdorff quotient from [F3], and each point is isolated. By [F3] the quotient has a finite affine atlas of word-frame slices $S_C$, and on each slice the normalized action is $s\mapsto D_C(t)^{-1}\cdot(t\cdot s)$ with $D_C(t)=\operatorname{diag}(e_{\alpha_\ell}t_1^{a_\ell}t_2^{b_\ell})$. Each ambient matrix-entry coordinate restricts to a weight vector and these coordinates generate the affine slice coordinate ring, so the action extends algebraically to $T_{\mathbb C}$ and the slices are invariant. A point fixed by the compact torus has every nonzero-weight coordinate equal to zero, since each nontrivial integer character is nontrivial on that compact torus; conversely these equations make the point fixed by $T_{\mathbb C}$. Thus the two fixed loci have the same point set. The $T_{\mathbb C}$-fixed subscheme is smooth by [F4], because $T_{\mathbb C}$ is diagonalizable and hence linearly reductive. In an invariant affine slice its fixed ideal is generated by the images of the nonzero-weight matrix coordinates; linearizing that ideal and applying the Jacobian-kernel result in [F4] identifies its tangent with the invariant tangent subspace. A smooth fixed scheme with a finite point set has dimension zero at every point, so that subspace is zero. Therefore every complex tangent weight is a nonzero character. Its associated $u_\chi$ is a nonzero integer linear polynomial in the algebraically independent variables and is invertible in $K$. The tangent has complex dimension $2kN$, so the Euler product has exactly $2kN$ factors counted with multiplicity. [given, F3, F4, step 4.1, step 6.1, step 6.2, algebra]

8.1 For each fixed $k$, there are finitely many partitions of $k$, hence finitely many $N$-tuples of total size $k$; every summand $E_{\vec Y}^{-1}$ is in $K$ by step 7.1. Therefore the coefficient is a finite sum and the sequence of coefficients defines the formal power series $Z_N^{\mathrm{fp}}(q)\in K\langle\!\langle q\rangle\!\rangle$. At $k=0$, $V=0$, the empty tuple is the unique fixed point, the Euler product is empty and equals $1$, so the constant coefficient is $1$. [given, step 6.1, step 7.1, algebra] ∎
