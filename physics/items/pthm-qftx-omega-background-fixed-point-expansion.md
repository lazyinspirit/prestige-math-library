---
id: pthm-qftx-omega-background-fixed-point-expansion
kind: physics-theorem
title: "Ω-Background Fixed-Point Expansion"
status: draft
origin: pipeline
dependency_level: 6
domain: physics
library: physics
category: advanced-qft-and-supersymmetry
axiom_base: "ZF + full AC inherited from the ADHM, topological Chern/Euler, and localized equivariant Borel–Moore supplier chain; no stronger choice principle is used."
physical_scope: "Conditional equality of a source-specific, formally regulated N=2* U(N) Ω-background instanton series for N≥2 with the positive-FI ADHM fixed-point sum. Its adopted S4 application is U(2). No continuum path integral, full S4 partition function, contour integral, regulator removal, or analytic convergence is claimed."
deps:
  - def-qftx-instanton-equivariant-partition-series
  - lem-qftx-stable-adhm-partition-fixed-points-and-tangent-character
  - def-qftx-proper-fixed-locus-localized-pushforward
  - thm-qftx-proper-fixed-locus-noncompact-localization
  - post-qftx-s4-n2-localization-model
dependency_roles:
  def-qftx-instanton-equivariant-partition-series: formulation-prerequisite
  lem-qftx-stable-adhm-partition-fixed-points-and-tangent-character: mathematical-premise
  def-qftx-proper-fixed-locus-localized-pushforward: formulation-prerequisite
  thm-qftx-proper-fixed-locus-noncompact-localization: mathematical-premise
  post-qftx-s4-n2-localization-model: physical-assumption
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Vasily Pestun, Localization of Gauge Theory on a Four-Sphere and Supersymmetric Wilson Loops"
      url: https://arxiv.org/pdf/0712.2824
      locator: "§1 equations (1.3)–(1.4) and regulator caveat; §4.3 equations (4.47)–(4.50); §5 equations (5.11)–(5.12), including the equivariant mass shift and U(2) one-instanton factor."
    - title: "Nikita A. Nekrasov, Seiberg–Witten Prepotential from Instanton Counting"
      url: https://arxiv.org/pdf/hep-th/0206161
      locator: "§1 equation (1.3), §§3.3–3.6, equations (3.9)–(3.20): equivariant series, positive-FI resolution, noncompactness, contour prescription, fixed points and tangent weights."
    - title: "Hiraku Nakajima and Kota Yoshioka, Lectures on Instanton Counting"
      url: https://arxiv.org/pdf/math/0311058
      locator: "§3.1, PDF pp. 17–19, fixed points indexed by N-tuples of Young diagrams and Theorem 3.2 tangent character; the sheaf/ASD identification is cited there, not proved."
    - title: "Nikita Nekrasov and Andrei Okounkov, Seiberg–Witten Theory and Random Partitions"
      url: https://arxiv.org/pdf/hep-th/0306238
      locator: "§§2.2, 2.4, 3.1 and 6.1: Ω rotations, noncommutative regulator, colored partitions, and the adjoint-hypermultiplet partition series."
verification:
  precheck: pending
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-25
---

## Statement

Fix $N\geq2$, $k\geq0$, and $\zeta>0$. Let $X_{k,N}^\zeta$ be the positive-FI stable complex ADHM quotient with rotation and dual-framing torus $T=(S^1)^2\times(S^1)^N$ acting by $(t_1,t_2,h)\cdot(B_1,B_2,I,J)=(t_1B_1,t_2B_2,Ih^{-1},t_1t_2hJ)$, where $\mathbf W=\sum_{\alpha=1}^N e_\alpha^{-1}$. Write $\epsilon_i=c_1^T(t_i)$ and $a_\alpha=c_1^T(e_\alpha)$, and assume these weights are algebraically independent. Let $q$ be dimensionless and formal. For an $N$-tuple of partitions $\vec Y=(Y_1,\ldots,Y_N)$, each $Y_\alpha$ a finite downward-closed subset of $\mathbb Z_{\geq0}^2$, put $|\vec Y|=\sum_\alpha|Y_\alpha|$, $\mathbf V_{\vec Y}=\sum_{\alpha=1}^N e_\alpha\sum_{(i,j)\in Y_\alpha}t_1^it_2^j$, and $\mathbf W^\vee=\sum_\alpha e_\alpha$. Assume the complexified torus acts algebraically on a smooth separated finite-type variety of complex dimension $2kN$, with a finite invariant affine atlas and finite proper fixed locus. Assume the fixed points and tangent characters are those in the positive-FI stable ADHM partition-fixed-point and tangent-character result. Extend $T$ by a flavor circle acting trivially on the quotient, with defining character $\chi_m$ and additive weight $\widetilde m=c_1(L_{\chi_m})$. Let $K_m=K\times S_m^1$ use the product right Milnor model, and set $X_{k,N,K_m}^\zeta=E K_m\times_{K_m}X_{k,N}^\zeta$ with the diagonal Borel quotient relation. Equivariant cohomology is $H^*(X_{k,N,K_m}^\zeta;\mathbb Q)$; its Chern classes are the rationalized ordinary Chern classes of the descended equivariant bundles, defined by the projective-bundle relation of the preceding Definition. At a fixed point with tangent characters of additive weights $w_\chi$, the top class $c_{2kN}^{T_m}(TX_{k,N}^\zeta\otimes L_{-1})$ restricts to $\prod_\chi(w_\chi-\widetilde m)$: the Borel fiber is the sum of character lines tensored by the inverse flavor line, and top Chern equals the Euler class of the complex-oriented real bundle, multiplicative over the ordered sum. Thus $\mathcal E_{\widetilde m}=c_{2kN}^{T_m}(TX_{k,N}^\zeta\otimes L_{-1})\in H^{4kN}(X_{k,N,K_m}^\zeta;\mathbb Q)$. Assume its localized Borel–Moore pushforward is defined by the proper-fixed-locus construction and satisfies the noncompact localization formula. For the source-reported $N=2^*$ convention, set $m=i m_E$ for real Euclidean mass $m_E$ and $\widetilde m=m+(\epsilon_1+\epsilon_2)/2$.

At a fixed point $\vec Y$, the tangent character is
$$\operatorname{ch}_T(T_{\vec Y}X_{k,N}^\zeta)=\mathbf V_{\vec Y}^{\vee}\mathbf V_{\vec Y}(t_1+t_2-1-t_1t_2)+\mathbf V_{\vec Y}^{\vee}\mathbf W^\vee+t_1t_2\mathbf W\mathbf V_{\vec Y}.$$
For each tangent character $\chi$, write $w_\chi=c_1^T(\chi)$ and let $E_{\vec Y}=\prod_\chi w_\chi$ and $N_{\vec Y}(\widetilde m)=\prod_\chi(w_\chi-\widetilde m)$, with multiplicities. Then the mass-inserted coefficient and formal series are
$$I_{k,N}^{\mathrm{adj}}(\widetilde m)=\sum_{|\vec Y|=k}\frac{N_{\vec Y}(\widetilde m)}{E_{\vec Y}},\qquad Z_{N,\mathrm{adj}}^{\mathrm{loc}}(q;\widetilde m)=\sum_{k\geq0}q^k\sum_{|\vec Y|=k}\frac{N_{\vec Y}(\widetilde m)}{E_{\vec Y}}\in\mathbb Q(\epsilon_1,\epsilon_2,a_1,\ldots,a_N,\widetilde m)\langle\!\langle q\rangle\!\rangle.$$

For the adopted round $S^4_r$ $N=2^*$ model, specialize to $N=2$, $\epsilon_1=\epsilon_2=r^{-1}$ and $\widetilde m=i m_E+r^{-1}$, with $q=e^{2\pi i\tau}$ on the model's continued Coulomb contour. The source assumes, but does not construct, the supersymmetry-compatible noncommutative S4 regulator agreeing near each pole with the flat-space regulator. The displayed identity is a formal fixed-point calculation for the regulated local factor; it does not prove existence of that regulator, a continuum functional measure, the full S4 partition function, or convergence of the series.

## Statement references

[[def-qftx-instanton-equivariant-partition-series|Mass-inserted ADHM series definition]]

[[lem-qftx-stable-adhm-partition-fixed-points-and-tangent-character|Stable ADHM fixed-point and tangent-character core]]

[[def-qftx-proper-fixed-locus-localized-pushforward|Intrinsic localized Borel–Moore pushforward]]

[[thm-qftx-proper-fixed-locus-noncompact-localization|Noncompact localization with a proper fixed locus]]

[[post-qftx-s4-n2-localization-model|Source-qualified $N=2^*$ U(2) S4 model]]

[Pestun, §1 equations (1.3)–(1.4), §4.3 equations (4.47)–(4.50), and §5 equations (5.11)–(5.12)](https://arxiv.org/pdf/0712.2824)

[Nekrasov, §1 equation (1.3) and §§3.3–3.6](https://arxiv.org/pdf/hep-th/0206161)

[Nakajima and Yoshioka, §3.1, PDF pp. 17–19](https://arxiv.org/pdf/math/0311058)

[Nekrasov and Okounkov, §§2.2, 2.4, 3.1 and 6.1](https://arxiv.org/pdf/hep-th/0306238)

## Facts & Assumptions

**Given:** $N\geq2$, $k\geq0$, $\zeta>0$, the positive-FI stable ADHM quotient, its compact rotation/framing torus action, and the localized mass-inserted Borel–Moore pushforward stipulated in the Statement.

[F1] The current draft [[def-qftx-instanton-equivariant-partition-series]] defines equivariant Chern classes as rationalized ordinary Chern classes of Borel-descended bundles; its top class restricts at a fixed point to $\prod_\chi(w_\chi-\widetilde m)$. Its coefficient is the localized proper-fixed-locus pushforward capped with the complex-oriented fundamental class, has field $\mathbb Q(\epsilon_1,\epsilon_2,a_1,\ldots,a_N,\widetilde m)$, and the series is coefficientwise formal.

[F2] The current draft [[lem-qftx-stable-adhm-partition-fixed-points-and-tangent-character]] has an authored local proof: for the positive-FI stable quotient it gives smooth complex dimension $2kN$, isolated fixed points bijective with $N$-tuples of partitions of total size $k$, and the stated tangent character. Its proof also supplies the stable quotient, finite invariant affine atlas, and finite proper fixed locus. It asserts no sheaf/ASD correspondence; the separate noncompact pushforward is supplied by [F4].

[F3] Current draft [[def-qftx-proper-fixed-locus-localized-pushforward]] defines the localized trace as $p_{F,*}\circ(i_*)^{-1}$ on normalized equivariant Borel–Moore groups, with a complex-oriented fundamental class and cap-product insertions. Its stated interface matches the present use.

[F4] Current draft [[thm-qftx-proper-fixed-locus-noncompact-localization]] has an authored conditional proof: for a smooth separated finite-type complex variety with a finite invariant affine cover and proper fixed locus, the localized trace of a homogeneous insertion is the sum of its restrictions divided by the normal Euler classes. Its Statement specifies the normalized Borel–Moore degree and finite-fixed-point reciprocal-Euler case; the stated trace interface matches this use.

[L1] Current draft [[post-qftx-s4-n2-localization-model]] adopts a round S4, gauge group $U(2)$, one adjoint hypermultiplet with real Euclidean mass $m_E$, $q=e^{2\pi i\tau}$, equal pole rotations $\epsilon_1=\epsilon_2=r^{-1}$, and a source-assumed noncommutative S4 regulator. Its exact source-qualified interface is used conditionally, not as a proven physical fact.

[A1] Assume the source-reported $N=2^*$ instanton factor uses the mass-inserted tangent Euler class $\prod_\chi(w_\chi-\widetilde m)$ over the vector tangent Euler class. The source's §5 equation (5.11) gives this shifted-weight numerator and $\widetilde m=m+(\epsilon_1+\epsilon_2)/2$; this is a formal regulator convention, not a proof of a continuum determinant or path-integral equality.

[A2] Apply the fixed-point, tangent-character, smoothness, finite-atlas, and proper-fixed-locus conclusions of [F2] under its exact positive-FI hypotheses. This proof uses only that stable quotient result; it makes no ADHM-to-ASD or ADHM-to-Gieseker identification and takes the separate pushforward from [F4].

[A3] Assume the localized Borel–Moore construction [F3] and formula [F4] are available for this quotient and for the flavor-extended torus, with the smooth finite-type action, finite invariant affine atlas, and proper finite fixed locus required by [F4]. The required geometric hypotheses follow from [F2] under [A2]; the added flavor torus acts trivially on the base, so it preserves the same affine cover and fixed locus.

[A4] Assume the exact source regulator input [L1] identifies the formal local factor of the adopted $N=2^*$ U(2) S4 model with the mass-inserted series for $N=2$ under the stated Euclidean mass shift. No full S4 integral or regulator construction is inferred.

## Proof

1.1 By [A2] and [F2], the $T$-fixed points of $X_{k,N}^\zeta$ are isolated and correspond bijectively to the $N$-tuples $\vec Y$ with $|\vec Y|=k$. The tangent character at each point is the displayed character, so its additive weights, with multiplicity, have Euler product $E_{\vec Y}$. [given, A2, F2]

2.1 Extend $T$ by the flavor circle acting trivially on the base. This does not change the fixed-point set, and at $\vec Y$ the top Chern insertion restricts to $N_{\vec Y}(\widetilde m)=\prod_\chi(w_\chi-\widetilde m)$ by [F1]. Each nontrivial tangent character class $w_\chi$ is inverted in the character-localized coefficient ring; no invertibility of the shifted numerator factors is needed. [given, F1, F2, step 1.1, algebra]

3.1 Apply the noncompact Borel–Moore localization formula [F4] under [A3] to $\mathcal E_{\widetilde m}\cap[X_{k,N}^\zeta]$. Each fixed component is a proper point, its proper trace is evaluation, and its normal bundle is the tangent representation; hence the coefficient is the finite sum $\sum_{|\vec Y|=k}N_{\vec Y}(\widetilde m)/E_{\vec Y}$. Its Borel–Moore degree is zero because $c_{2kN}$ has degree $4kN$, equal to the degree of the fundamental class. [F1, F3, F4, A3, step 1.1, step 2.1]

4.1 By the definition [F1], the pushforward in step 3.1 is $I_{k,N}^{\mathrm{adj}}(\widetilde m)$. For finite $N$ and fixed $k$ there are finitely many partition tuples, so each coefficient is a finite rational function in the stated field. The coefficient sequence therefore defines the displayed formal power series; at $k=0$, the unique empty tuple has empty numerator and denominator products equal to $1$. [F1, F2, step 3.1, algebra]

5.1 Under the source-reported insertion convention [A1] and the exact model input [A4], the $N=2$ specialization of step 4.1 is the formal local $N=2^*$ instanton factor with $\epsilon_1=\epsilon_2=r^{-1}$, $\widetilde m=i m_E+r^{-1}$, and the model's $q$ and continued Coulomb contour. The argument proves only this conditional fixed-point formula; it establishes neither the assumed S4 regulator nor a continuum functional integral. [given, A1, A4, L1, step 4.1] ∎
