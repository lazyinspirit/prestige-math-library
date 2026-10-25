---
id: thm-adhm-fixed-point-instanton-count
kind: theorem
title: "ADHM Fixed Points and the Equivariant Instanton Count"
status: "published"
origin: pipeline
dependency_level: 14
domain: mathematics
library: mathematics
category: quantum-field-theory-mathematics
axiom_base: "ZF + full AC used by the supplied stable-quotient, linear-reductivity, fixed-scheme, localized Borel–Moore and trace-normalized charge results; the finite local matrix and character calculations are choice-free."
deps:
  - lem-qftx-rank-one-regular-adhm-and-ordinary-asd-boundary
  - thm-qftx-framed-p2-monad-adhm-correspondence
  - thm-qftx-zero-fi-regular-adhm-asd-correspondence
  - thm-qftx-proper-fixed-locus-noncompact-localization
  - def-framed-u-n-instanton-moduli-and-adhm-data
  - thm-atiyah-bott-berline-vergne-integration-formula
  - lem-adhm-stable-quotient-and-torus-lift
  - def-qftx-adhm-linear-data-stability-and-regularity
  - thm-fixed-point-schemes-and-centralizers-of-linearly-reductive-actions
  - lem-multiplicative-type-groups-are-linearly-reductive
  - thm-zariski-tangent-space-jacobian-kernel
  - def-axiom-of-choice
  - lem-qftx-stable-adhm-partition-fixed-points-and-tangent-character
dependency_roles:
  lem-qftx-rank-one-regular-adhm-and-ordinary-asd-boundary: mathematical-premise
  thm-qftx-framed-p2-monad-adhm-correspondence: mathematical-premise
  thm-qftx-zero-fi-regular-adhm-asd-correspondence: mathematical-premise
  thm-qftx-proper-fixed-locus-noncompact-localization: mathematical-premise
  def-framed-u-n-instanton-moduli-and-adhm-data: mathematical-premise
  thm-atiyah-bott-berline-vergne-integration-formula: mathematical-premise
  lem-adhm-stable-quotient-and-torus-lift: mathematical-premise
  def-qftx-adhm-linear-data-stability-and-regularity: mathematical-premise
  thm-fixed-point-schemes-and-centralizers-of-linearly-reductive-actions: mathematical-premise
  lem-multiplicative-type-groups-are-linearly-reductive: mathematical-premise
  thm-zariski-tangent-space-jacobian-kernel: mathematical-premise
  def-axiom-of-choice: mathematical-premise
  lem-qftx-stable-adhm-partition-fixed-points-and-tangent-character: mathematical-premise
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
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-25
---

## Statement

Assume full AC. Fix integers $N\geq1$ and $k\geq0$ and a positive real stability parameter $\zeta$. Let $V=\mathbb C^k$ and $W=\mathbb C^N$ have their standard Hermitian structures. Define $\mathcal M^\zeta_{k,N}$ to be the geometric quotient by $GL(V)$ of data $(B_1,B_2,I,J)$ with $B_i\in\operatorname{End}(V)$ for $i\in\{1,2\}$, $I\in\operatorname{Hom}(W,V)$, $J\in\operatorname{Hom}(V,W)$, $[B_1,B_2]+IJ=0$, and $\operatorname{span}\{B_{i_1}\cdots B_{i_m}I(w):m\geq0,\ i_1,\ldots,i_m\in\{1,2\},\ w\in W\}=V$. The positive parameter $\zeta$ specifies the positive-FI stability chamber. Let $T=(S^1)^2\times(S^1)^N$, with rotation characters $t_1,t_2$ and dual framing characters $e_1,\ldots,e_N$. Thus $W$ has character $\mathbf W=\sum_\alpha e_\alpha^{-1}$ and $W^\vee$ has character $\mathbf W^\vee=\sum_\alpha e_\alpha$. Its action is $(t_1,t_2,h)\cdot(B_1,B_2,I,J)=(t_1B_1,t_2B_2,Ih^{-1},t_1t_2hJ)$, where $h$ acts on $W$ with weights $e_\alpha^{-1}$. Complexify the characters and work over the rational function field $K=\mathbb Q(\epsilon_1,\epsilon_2,a_1,\ldots,a_N)$, where $\epsilon_i=c_1^T(t_i)$ and $a_\alpha=c_1^T(e_\alpha)$.

For a partition $Y$, a Young diagram means a finite downward-closed subset of $\mathbb Z_{\geq0}^2$; write $|Y|$ for its number of boxes. For an $N$-tuple $\vec Y=(Y_1,\ldots,Y_N)$ set $|\vec Y|=\sum_\alpha|Y_\alpha|$, $\mathbf W=\sum_\alpha e_\alpha^{-1}$, $\mathbf W^\vee=\sum_\alpha e_\alpha$, and
$$\mathbf V_{\vec Y}=\sum_{\alpha=1}^N e_\alpha\sum_{(i,j)\in Y_\alpha}t_1^it_2^j.$$
Then $\mathcal M^\zeta_{k,N}$ is smooth of complex dimension $2kN$, and its $T$-fixed points are isolated and in bijection with the $N$-tuples of partitions of total size $k$. At the fixed point $\vec Y$, the tangent character is
$$\operatorname{ch}_T(T_{\vec Y}\mathcal M^\zeta_{k,N})=\mathbf V_{\vec Y}^{\vee}\mathbf V_{\vec Y}(t_1+t_2-1-t_1t_2)+\mathbf V_{\vec Y}^{\vee}\mathbf W^\vee+t_1t_2\mathbf W\mathbf V_{\vec Y}.$$
For each character $\chi$, let $u_\chi=c_1^T(\chi)$. Let $E_{\vec Y}$ be the product of $u_\chi$ over the tangent weights counted with multiplicity; the fixed points are isolated, so none of these weights is zero. Define the fixed-point series by
$$Z^{\mathrm{fp}}_N(q)=\sum_{k\geq0}q^k\sum_{|\vec Y|=k}E_{\vec Y}^{-1}\in K\langle\!\langle q\rangle\!\rangle.$$
Each coefficient is a finite sum, and the series is formal; no analytic convergence is asserted.

If a $T$-equivariant isomorphism from the positive-FI quotient to the moduli of framed rank-$N$ torsion-free coherent sheaves on $\mathbb{CP}^2$ with Hilbert polynomial $N\binom{m+2}{2}-k$ is supplied, it transfers the fixed-point classification and tangent characters to that Gieseker space. The ordinary framed ASD sector is covered only by the separate conditional zero-FI regular ADHM dictionary, which assumes its stated real-monad normalization, framed Ward correspondence, and projective algebraization comparison; the rank-one case also uses the separate rank-one boundary result. This theorem makes no fixed-point-count or series-equality claim for the ordinary sector. If a separately proved noncompact equivariant pushforward for $\mathcal M^\zeta_{k,N}$ has a localization identity with these isolated fixed points and tangent Euler classes, then its value on the unit is the coefficient displayed above. The compact ABBV formula alone does not establish such an identity: $\mathcal M^\zeta_{k,N}$ is noncompact for $k>0$. This theorem makes no identification with an ordinary continuum gauge-theory path integral.

## Statement references

[Nakajima and Yoshioka, §3.1, PDF pp. 17–19, Theorem 3.2](https://arxiv.org/pdf/math/0311058)

[Nekrasov, §§3.1–3.5, PDF pp. 12–18, equations (3.1)–(3.19)](https://arxiv.org/pdf/hep-th/0206161)

[[def-framed-u-n-instanton-moduli-and-adhm-data|Framed ADHM data and the positive-FI stable quotient]]

[[thm-atiyah-bott-berline-vergne-integration-formula|Compact ABBV formula]]

[[def-axiom-of-choice|Full Axiom of Choice]]

## Facts & Assumptions
**Given:** Full AC, $N\geq1$, $k\geq0$, $\zeta>0$, the Hermitian spaces $V,W$, the complex ADHM equation, the stability condition, and the $T$-action stated above. The stable quotient and torus-lift supplier uses AC for its quotient construction; the linear-reductivity and fixed-scheme suppliers use AC to establish smoothness and the invariant-tangent description; and the localized Borel–Moore construction inherits AC through its equivariant homology suppliers. The optional Gieseker and ordinary-ASD comparisons retain AC through the trace-normalized charge and monad/twistor suppliers. The finite word, matrix and character calculations themselves use only finite selections. All characters are treated as algebraically independent formal variables.

[F1] [[def-qftx-adhm-linear-data-stability-and-regularity]]: the ADHM equation is $[B_1,B_2]+IJ=0$, stability means the $B_1,B_2$-words applied to $I(W)$ span $V$, the quotient is by $GL(V)$, and $T$ acts by the displayed rotation and dual-framing convention.

[F2] [[thm-atiyah-bott-berline-vergne-integration-formula]]: the current statement is the real Borel fixed-component and isolated-fixed-point formula for compact oriented smooth $T$-manifolds without boundary. It does not cover noncompact instanton spaces.


[F5] The stable matrix quotient has exactly the partition fixed points, tangent character, nonzero weights and finite formal series stated above. This uses no sheaf/ASD dictionary or pushforward. [[lem-qftx-stable-adhm-partition-fixed-points-and-tangent-character]]

[L1] [[thm-atiyah-bott-berline-vergne-integration-formula]] gives the real Borel fixed-component formula only for compact oriented smooth $T$-manifolds without boundary, including empty-locus vanishing in every dimension. This compact theorem supplies no noncompact pushforward for the ADHM quotient.

[L2] [[def-framed-u-n-instanton-moduli-and-adhm-data]] defines the quotient presentations and the framed connection and sheaf spaces, but contains no ADHM/monad isomorphism between them. For the zero-FI clause, regular means stable and costable: no nonzero common $B_i$-invariant subspace lies in $\ker J$. This is the exact raw-data convention in [[def-qftx-adhm-linear-data-stability-and-regularity]]. The actual separate sheaf and zero-FI ASD suppliers are named in [A1]–[A2]; their proofs are supplied separately and are not inferred from either definition.

[A1] The exact framed $\mathbb P^2$ monad theorem gives the stable-data/framed torsion-free-sheaf correspondence, with rank $N\ge1$, Hilbert polynomial $N\binom{m+2}{2}-k$, framing character $\sum e_\alpha^{-1}$, inverse extraction, and tangent correspondence in its stated locally-free/base-change family range. Combined with the finite real/complex quotient theorem, its positive-FI clause has the quotient used here. [[thm-qftx-framed-p2-monad-adhm-correspondence]]

[[thm-qftx-projective-gaga-for-monad-data|Projective algebraization and family base change]]

[A2] For $N\ge2$, the zero-FI correspondence supplier identifies the stable-and-costable real quotient with the framed ordinary ASD sector having $q_N=-k$, preserving the specified orientation, unitary framing, compact torus action and exact first-order family qualifications. For $N=1$, the rank-one boundary lemma proves that both ordinary spaces are empty at $k>0$ and are the framed flat point at $k=0$, with compatible compact actions and an explicit first-order groupoid equivalence. Its stabilization proof retains the rank-two supplier's actual GAGA, coupled-vanishing and intrinsic normal-form prerequisites; it introduces no extra rank-one dictionary premise. The two suppliers therefore cover the ordinary dictionary for every $N\ge1$ under exactly those inherited hypotheses. Neither identifies the positive-FI resolution or its rank-one formal coefficients with ordinary ASD moduli. [[thm-qftx-zero-fi-regular-adhm-asd-correspondence]], [[lem-qftx-rank-one-regular-adhm-and-ordinary-asd-boundary]]


[A4] Full AC is the opening hypothesis. The stable quotient and torus-lift input [[lem-adhm-stable-quotient-and-torus-lift]], the linear-reductivity input [[lem-multiplicative-type-groups-are-linearly-reductive]], the smooth fixed-scheme input [[thm-fixed-point-schemes-and-centralizers-of-linearly-reductive-actions]], and the localized Borel–Moore input [[thm-qftx-proper-fixed-locus-noncompact-localization]] all use AC through their stated prerequisites. The conditional Gieseker and ordinary-ASD comparisons inherit it through the charge and monad/twistor suppliers in [A1]–[A2]. Only the local finite-word, matrix and character calculations are choice-free. [[def-axiom-of-choice]]

[F6] The noncompact Borel–Moore theorem constructs the intrinsic localized pushforward $p_{F*}(i_*)^{-1}$ for a smooth separated finite-type variety with a finite invariant affine cover and proper fixed locus. It proves the Euler-denominator identity for $\alpha\cap[X]_T$, including the unit insertion, by concentration and self-intersection. Its properness requirement is on the fixed locus; it does not require a chosen compactification or define the integral by the desired fixed-point sum. [[thm-qftx-proper-fixed-locus-noncompact-localization]]

## Proof

1.1 Apply [F5] to the exact raw equation, stability and dual-framing action in the Statement. Its definition of the stable matrix quotient agrees with the present quotient, and its proof supplies smoothness, the finite invariant affine atlas, partition fixed points, tangent character, nonzero tangent weights, and the formal series with constant coefficient one. Its formal variable $u_\chi$ agrees with the first Chern class of a character under the displayed coefficient convention. Thus all stable-quotient and formal-series assertions follow without using the separate dictionary or pushforward inputs. [given, A4, F1, F5, algebra]

2.1 The quotient in [A1] has exactly the raw equation, stability, dual framing representation, rank and Hilbert polynomial of the Statement. Its normalized construction is equivariant for those framing and rotation characters, and the first-order family clause identifies tangent representations in its stated base-change range. Thus [A1] transfers the fixed-point bijection and tangent characters of step 1.1 to the Gieseker space. [given, A1, A4, L2, step 1.1, algebra]

2.2 For $N\ge2$, the source and target of [A2]'s rank-two-and-higher supplier agree with the zero-FI regular quotient and the framed ASD sector in the conditional dictionary, with $q_N=-k$ and identical framing and orientation. For $N=1$, stabilize by adding one unused framed line as in the boundary lemma: its moment equations, word stability and costability are unchanged. Its proved boundary identifies the two empty spaces at $k>0$ and the unique framed flat points at $k=0$, and its direct first-order gauge argument supplies the corresponding family identification rather than inferring it from an orbit-set bijection. Thus the ordinary dictionary has no uncovered rank-one case; its exact rank-two analytic and normal-form hypotheses remain inherited. This does not place any positive-FI partition fixed point in the open regular ordinary locus. In particular, the positive-FI one-box rank-one contribution is still the formal coefficient of step 1.1 and is not an ordinary positive-charge abelian instanton. [given, A2, A4, L2, step 1.1, algebra]

2.3 The word-slice construction in step 1.1 makes the stable quotient a smooth separated finite-type complex variety of pure dimension $2kN$ with a finite invariant affine cover. The raw character action and the compensated word-frame slice formulas are Laurent polynomial, so the action and its cover extend to the complex algebraic torus whose compact form is $T$. On each affine chart a regular function has a finite character expansion, so invariance under the compact torus and its complexification agree; thus their fixed loci agree. The partition fixed scheme is smooth and zero dimensional by [F5], with finitely many points, hence proper. Every hypothesis of [F6] is met. Apply its independently constructed $p_*^{\mathrm{loc}}=p_{F*}(i_*)^{-1}$ to $1\cap[\mathcal M^\zeta_{k,N}]_T$ and extend coefficients to $K$. At each fixed point the normal bundle is its full tangent representation, whose nonzero Euler factors are exactly $E_{\vec Y}$ by step 1.1. The result is therefore $\sum_{|\vec Y|=k}E_{\vec Y}^{-1}$. This is a theorem about localized Borel–Moore pushforward, not a continuum path integral; compact ABBV [F2] was not applied to the noncompact quotient. [given, A4, F2, F5, F6, L1, step 1.1, algebra]

2.4 For each fixed $k$, there are finitely many partitions of $k$, hence finitely many $N$-tuples of total size $k$; every summand $E_{\vec Y}^{-1}$ is in $K$ by step 1.1. Therefore the coefficient is a finite sum and the sequence of coefficients defines the formal power series $Z_N^{\mathrm{fp}}(q)\in K\langle\!\langle q\rangle\!\rangle$. At $k=0$, $V=0$, the empty tuple is the unique fixed point, the Euler product is empty and equals $1$, so the constant coefficient is $1$. [given, step 1.1, algebra]

3.1 For $k>0$, use the tuple $Y_1=\{(i,0):0\leq i<k\}$ and $Y_\alpha=\varnothing$ for $\alpha>1$; step 1.1 constructs a stable datum. Replacing $B_1$ by $B_1+c\,\mathrm{id}_V$ preserves the complex equation and stability while changing $\operatorname{tr}(B_1)$ by $kc$ for every $c\in\mathbb C$. Trace is invariant under conjugation, so the descended trace function on the geometric quotient has image $\mathbb C$, which is not compact. Thus the quotient is noncompact. The completed Borel carrier matches the compact real-Borel interface in [L1]. The ADHM/monad comparisons in [A1]–[A2] retain their exact analytic and family hypotheses, while step 2.3 has supplied the precise intrinsic localized Borel–Moore pushforward covered by [F6]. [given, F1, L1, L2, step 1.1, algebra] ∎
