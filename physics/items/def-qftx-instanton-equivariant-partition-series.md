---
id: def-qftx-instanton-equivariant-partition-series
kind: definition
title: "Regulated ADHM N=2* Instanton Series"
status: draft
origin: pipeline
dependency_level: 5
domain: physics
library: physics
category: advanced-qft-and-supersymmetry
axiom_base: "ZF + full AC inherited from the named ADHM quotient, topological Chern/Euler, and localized equivariant Borel–Moore suppliers; this definition adds no choice principle."
physical_scope: "A degree-by-degree formal N=2* U(N) ADHM series for N≥2 with one adjoint-hypermultiplet mass insertion, specialized physically to the adopted U(2) S4 model. It asserts neither a continuum gauge-theory measure nor regulator removal."
deps:
  - def-framed-u-n-instanton-moduli-and-adhm-data
  - def-qftx-localized-equivariant-borel-moore-data
  - def-qftx-proper-fixed-locus-localized-pushforward
  - post-qftx-s4-n2-localization-model
  - def-categorical-and-geometric-quotients-of-classical-varieties
  - lem-adhm-stable-quotient-and-torus-lift
  - def-equivariant-map-and-equivariant-vector-bundle
  - def-chern-classes-from-the-projective-bundle-relation
  - thm-naturality-normalization-and-whitney-sum-for-chern-classes
  - def-euler-class-by-zero-section-pullback-of-the-thom-class
  - thm-top-chern-class-equals-euler-class-of-the-underlying-real-bundle
  - thm-naturality-orientation-sign-and-whitney-product-for-euler-classes
  - lem-qftx-rational-torus-classifying-space-cohomology
dependency_roles:
  def-framed-u-n-instanton-moduli-and-adhm-data: formulation-prerequisite
  def-qftx-localized-equivariant-borel-moore-data: formulation-prerequisite
  def-qftx-proper-fixed-locus-localized-pushforward: formulation-prerequisite
  post-qftx-s4-n2-localization-model: physical-assumption
  def-categorical-and-geometric-quotients-of-classical-varieties: formulation-prerequisite
  lem-adhm-stable-quotient-and-torus-lift: formulation-prerequisite
  def-equivariant-map-and-equivariant-vector-bundle: formulation-prerequisite
  def-chern-classes-from-the-projective-bundle-relation: formulation-prerequisite
  thm-naturality-normalization-and-whitney-sum-for-chern-classes: formulation-prerequisite
  def-euler-class-by-zero-section-pullback-of-the-thom-class: formulation-prerequisite
  thm-top-chern-class-equals-euler-class-of-the-underlying-real-bundle: formulation-prerequisite
  thm-naturality-orientation-sign-and-whitney-product-for-euler-classes: formulation-prerequisite
  lem-qftx-rational-torus-classifying-space-cohomology: formulation-prerequisite
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Nikita A. Nekrasov, Seiberg–Witten Prepotential from Instanton Counting"
      url: https://arxiv.org/pdf/hep-th/0206161
      locator: "§1, equation (1.3), and §§3.3–3.6: equivariant pushforward series, positive-FI/noncommutative resolution, noncompactness, and fixed-point prescription."
    - title: "Hiraku Nakajima and Kota Yoshioka, Lectures on Instanton Counting"
      url: https://arxiv.org/pdf/math/0311058
      locator: "Abstract and §4: deformed partition functions as generating functions of equivariant integration over instanton moduli; §3.1 gives the framed-sheaf fixed-point setting."
    - title: "Nikita Nekrasov and Andrei Okounkov, Seiberg–Witten Theory and Random Partitions"
      url: https://arxiv.org/pdf/hep-th/0306238
      locator: "§§2.2, 2.4, 3.1 and 6.1: Ω-background, noncommutative regulator, and adjoint-hypermultiplet partition series."
    - title: "Vasily Pestun, Localization of Gauge Theory on a Four-Sphere and Supersymmetric Wilson Loops"
      url: https://arxiv.org/pdf/0712.2824
      locator: "§1 equations (1.3)–(1.4), §4.3 equations (4.47)–(4.50), and §5 equations (5.11)–(5.12): S4 instanton factor, Euclidean mass convention, adjoint-hypermultiplet mass shift, and noncommutative regulator caveat."
verification:
  precheck: pending
---

## Definition

Fix integers $N\geq2$ and $k\geq0$ and a real stability parameter $\zeta>0$. Let $V=\mathbb C^k$ and $W=\mathbb C^N$ with Hermitian structures, and let $\mathcal S_{k,N}^\zeta$ be the locus of quadruples $(B_1,B_2,I,J)$ with $B_i\in\operatorname{End}_{\mathbb C}(V)$, $I:W\to V$, and $J:V\to W$, satisfying $[B_1,B_2]+IJ=0$ and the condition that the vectors $B_{i_1}\cdots B_{i_m}I(w)$ span $V$ for all words of length $m\geq0$ and $w\in W$. The group $GL(V)$ acts algebraically by $g\cdot(B_1,B_2,I,J)=(gB_1g^{-1},gB_2g^{-1},gI,Jg^{-1})$. These are algebraic coordinates on the finite-dimensional complex data space; this formal quotient assigns no spacetime units to $B_i,I,J$. The parameter $\zeta$ labels the positive stability chamber and is not assigned a physical dimension here. Let $\pi_{k,N}:\mathcal S_{k,N}^\zeta\to X_{k,N}^\zeta$ be the positive-FI geometric quotient in the classical variety sense: $\pi_{k,N}$ is a surjective invariant morphism whose fibres are precisely the $GL(V)$-orbits; $U\subseteq X_{k,N}^\zeta$ is open exactly when $\pi_{k,N}^{-1}(U)$ is open; and for every such $U$ pullback identifies $\mathcal O_{X_{k,N}^\zeta}(U)$ with $\mathcal O_{\mathcal S_{k,N}^\zeta}(\pi_{k,N}^{-1}(U))^{GL(V)}$. Under the stable positive-FI hypotheses, the supplied stable ADHM quotient result gives this quotient a separated smooth finite-type complex structure of dimension $2kN$ and a finite invariant affine word-slice atlas. The parameter $\zeta$ labels the positive stability chamber; this is not, by definition, the zero-FI regular quotient or the moduli space of anti-self-dual connections.

Let $T_{\mathbb C}=(\mathbb C^\times)^2\times(\mathbb C^\times)^N$ act algebraically, and let $K=(S^1)^2\times(S^1)^N$ be its maximal compact subgroup. The action is $(t_1,t_2,h)\cdot(B_1,B_2,I,J)=(t_1B_1,t_2B_2,Ih^{-1},t_1t_2hJ)$, where $h$ acts on $W$ with weights $e_\alpha^{-1}$. Thus $\mathbf W=\sum_{\alpha=1}^N e_\alpha^{-1}$ and $\mathbf W^\vee=\sum_{\alpha=1}^N e_\alpha$. Write $\epsilon_i=c_1^K(t_i)$ and $a_\alpha=c_1^K(e_\alpha)$; each has mass dimension one in units $c=\hbar=1$. Let $q$ be a dimensionless formal charge-counting variable.

Assume the complexified torus action has a finite proper fixed locus $F_{k,N}$ on each quotient. Extend the torus to $T_m=T_{\mathbb C}\times\mathbb C_m^\times$ with maximal compact subgroup $K_m=K\times S_m^1$; the flavor factor acts trivially on $X_{k,N}^\zeta$. Use the product right Milnor model $E K_m$, and write $B K_m=E K_m/K_m$ and $X_{k,N,K_m}^\zeta=E K_m\times_{K_m}X_{k,N}^\zeta$, with diagonal quotient relation $(e,x)\cdot t=(e\cdot t,t^{-1}\cdot x)$. Equivariant cohomology means $H_{T_m}^*(X_{k,N}^\zeta;\mathbb Q)=H^*(X_{k,N,K_m}^\zeta;\mathbb Q)$. The derivative action makes $TX_{k,N}^\zeta$ a $K_m$-equivariant complex vector bundle, and its Borel descent is $E K_m\times_{K_m}TX_{k,N}^\zeta\to X_{k,N,K_m}^\zeta$. Assume each component of this Borel base has CW type and that the descended bundle, including its tensor products below, is numerable; Chern classes are formed componentwise on a CW model and transported by homotopy invariance. For a numerable complex rank-$n$ bundle $E$ on a connected CW model, its Chern classes are the unique coefficients in the projective-bundle relation $x_E^n-c_1(E)x_E^{n-1}+\cdots+(-1)^nc_n(E)=0$, where $P(E)$ is the bundle of complex lines in the fibers and $x_E=c_1(\gamma_E)$ for the tautological line $\gamma_E\to P(E)$. We use their rational images. For a character $\chi:T_m\to\mathbb C^\times$, let $L_\chi=E K_m\times_{K_m}\mathbb C_{\chi|_{K_m}}\to B K_m$ be its associated line, with right equivalence $(e,z)\cdot t=(e\cdot t,\chi(t)^{-1}z)$, and write $u_\chi=c_1(L_\chi)$. Put $\widetilde m=u_{\chi_m}$ for the defining flavor character, of mass dimension one like $\epsilon_i$ and $a_\alpha$, and let $L_{-1}=L_{\chi_m^{-1}}$; thus its additive weight is $-\widetilde m. At a fixed point with tangent characters $\chi_1,\ldots,\chi_{2kN}$ and additive weights $w_j=u_{\chi_j}$, pullback to $B K_m$ gives character lines $L_{\chi_j\chi_m^{-1}}$. The top Chern class of a rank-$n$ complex bundle equals the Euler class of its complex-oriented real bundle, and the Euler class is natural and multiplicative for ordered direct sums; for a character line its Euler class is its first Chern class. Therefore the top Chern restriction is $\prod_{j=1}^{2kN}(w_j-\widetilde m)$.

Set $\mathcal E_{\widetilde m}=c_{2kN}^{T_m}(TX_{k,N}^\zeta\otimes L_{-1})\in H_{T_m}^{4kN}(X_{k,N}^\zeta;\mathbb Q)$, where $L_{-1}$ in the tensor product denotes pullback from $B K_m$. At a fixed point with tangent weights $w_1,\ldots,w_{2kN}$, its restriction is $\prod_{j=1}^{2kN}(w_j-\widetilde m)$ by the preceding construction. Let $S_{T_m}$ be generated by the first Chern classes of nontrivial integral characters of $T_m$, put $R_{T_m}=H^*(B K_m;\mathbb Q)=\mathbb Q[\epsilon_1,\epsilon_2,a_1,\ldots,a_N,\widetilde m]$, and let $K_{N,m}=\operatorname{Frac}(R_{T_m})$. When the character-localized Borel–Moore concentration map and proper fixed-locus trace define $p_{k,*}^{\mathrm{loc}}$, set
$$I_{k,N}^{\mathrm{adj}}(\widetilde m)=p_{k,*}^{\mathrm{loc}}\bigl(\mathcal E_{\widetilde m}\cap[X_{k,N}^\zeta]_{K_m}\bigr)\in S_{T_m}^{-1}R_{T_m}\subset K_{N,m}.$$
This is a localized pushforward, not an ordinary pushforward along a nonproper map. The concentration isomorphism and trace are required inputs and are not asserted to exist by this definition.

When these data are supplied for every $k\geq0$, define the coefficientwise formal series
$$Z_{N,\mathrm{adj}}^{\mathrm{loc}}(q;\widetilde m)=\sum_{k\geq0}q^k I_{k,N}^{\mathrm{adj}}(\widetilde m)\in K_{N,m}\langle\!\langle q\rangle\!\rangle.$$
It has no asserted analytic convergence. In the source's Euclidean convention the real mass $m_E$ has mass dimension one, $m=i m_E$, and the equivariant mass is $\widetilde m=m+(\epsilon_1+\epsilon_2)/2$. For the adopted round $S^4_r$ model, $N=2$, $\epsilon_1=\epsilon_2=r^{-1}$, and hence $\widetilde m=i m_E+r^{-1}$. This mass shift is a source-qualified convention. The S4 postulate assumes a supersymmetry-compatible noncommutative regulator agreeing near each pole with the flat-space regulator; it does not construct that regulator or a continuum path-integral measure.

## Definition references

[[def-framed-u-n-instanton-moduli-and-adhm-data|Positive-FI framed ADHM quotient and torus action]]

[[def-categorical-and-geometric-quotients-of-classical-varieties|Classical geometric quotient conditions]]

[[lem-adhm-stable-quotient-and-torus-lift|Existence and geometry of the stable ADHM quotient]]

[[def-qftx-localized-equivariant-borel-moore-data|Normalized equivariant Borel–Moore groups]]

[[def-qftx-proper-fixed-locus-localized-pushforward|Localized proper-fixed-locus pushforward]]

[[def-equivariant-map-and-equivariant-vector-bundle|Equivariant tangent bundle]]

[[def-chern-classes-from-the-projective-bundle-relation|Topological Chern class construction]]

[[thm-naturality-normalization-and-whitney-sum-for-chern-classes|Chern class naturality and Whitney sum]]

[[def-euler-class-by-zero-section-pullback-of-the-thom-class|Euler class by the Thom construction]]

[[thm-top-chern-class-equals-euler-class-of-the-underlying-real-bundle|Top Chern class equals the real Euler class]]

[[thm-naturality-orientation-sign-and-whitney-product-for-euler-classes|Euler class naturality and direct-sum product]]

[[lem-qftx-rational-torus-classifying-space-cohomology|Rational torus classifying ring and character weights]]

[[post-qftx-s4-n2-localization-model|Source-qualified N=2* U(2) S4 model]]

[Nekrasov, §1 equation (1.3), §§3.3–3.6](https://arxiv.org/pdf/hep-th/0206161)

[Nakajima and Yoshioka, abstract, §3.1 and §4](https://arxiv.org/pdf/math/0311058)

[Nekrasov and Okounkov, §§2.2, 2.4, 3.1 and 6.1](https://arxiv.org/pdf/hep-th/0306238)

[Pestun, §1, §4.3, and §5 equations (5.11)–(5.12)](https://arxiv.org/pdf/0712.2824)

## Facts & Assumptions

**Given:** $N\geq2$, $k\geq0$, $\zeta>0$, the smooth positive-FI ADHM quotient, the compact torus action, and the localized Borel–Moore data stipulated in the Definition.

[F1] Current draft [[def-qftx-localized-equivariant-borel-moore-data]]: normalized equivariant Borel–Moore groups use the ordinary dualizing object without a quotient-stack shift, the smooth complex-oriented fundamental class has degree $2d$, and equivariant cohomology acts by cap product; its authored proof constructs the product-Milnor Borel model and character-line classes.

[F2] Current draft [[def-qftx-proper-fixed-locus-localized-pushforward]]: an allowed insertion is a homogeneous equivariant cohomology class capped with the complex-oriented Borel–Moore fundamental class, and the localized pushforward is the proper trace after the fixed-inclusion concentration inverse.

[F3] The published classical geometric quotient definition requires a surjective invariant morphism with orbit fibres, the quotient topology, and regular functions downstairs identified with invariant regular functions upstairs on every open set. [[def-categorical-and-geometric-quotients-of-classical-varieties]]

[F4] The current draft [[lem-adhm-stable-quotient-and-torus-lift]] has a complete authored local argument, not an independent acceptance: for the stable positive-FI complex ADHM locus with $N\geq1$, $k\geq0$, and $\zeta>0$, it proves the quotient is separated, smooth, finite type of complex dimension $2kN$, has a finite invariant affine word-slice atlas, and is geometric. It is a stable complex matrix quotient result, not an ASD or real moment-map identification.

[F5] The published [[def-equivariant-map-and-equivariant-vector-bundle]] defines an equivariant bundle by a smooth fibrewise-linear action covering the base action. The current draft Borel supplier [[def-qftx-localized-equivariant-borel-moore-data]] supplies the product-Milnor Borel construction used for its descent.

[F6] The published topological Chern definition and naturality/Whitney theorem apply to numerable complex bundles over connected CW bases; the published top-Chern theorem identifies $c_n$ with the Euler class of the complex-oriented underlying real bundle. The published Euler definition is the zero-section pullback of the normalized Thom class, and its naturality and ordered direct-sum product give the fixed-point weight product.

[[def-chern-classes-from-the-projective-bundle-relation]]

[[thm-naturality-normalization-and-whitney-sum-for-chern-classes]]

[[thm-top-chern-class-equals-euler-class-of-the-underlying-real-bundle]]

[[def-euler-class-by-zero-section-pullback-of-the-thom-class]]

[[thm-naturality-orientation-sign-and-whitney-product-for-euler-classes]]

[F7] The current draft [[lem-qftx-rational-torus-classifying-space-cohomology]] proves for $K_m=(S^1)^{N+3}$ that $H^*(BK_m;\mathbb Q)$ is the polynomial ring generated by degree-two coordinate-character classes and that each character line's first Chern class is its integral weight combination.

[A1] The source-qualified mass convention $m=i m_E$ and $\widetilde m=m+(\epsilon_1+\epsilon_2)/2$ is used for the N=2* insertion. This states the formal equivariant mass convention and does not assert a continuum hypermultiplet determinant identity.

[L1] Current draft [[post-qftx-s4-n2-localization-model]] fixes one adjoint hypermultiplet, gauge group $U(2)$, real Euclidean mass $m_E$, dimensionless $q=e^{2\pi i\tau}$, $\epsilon_1=\epsilon_2=r^{-1}$, and the assumed noncommutative S4 regulator. Its formal regulator and contour remain source-qualified model inputs, not proved existence claims.

## Verification

1.1 The derivative of the torus action makes $TX_{k,N}^\zeta$ an equivariant complex bundle, whose Borel descent has rank $2kN$. At a fixed point its pullback to $BK_m$ is the sum of the tangent character lines tensored by the inverse flavor line. By [F6], top Chern equals the real Euler class and Euler classes multiply over the ordered sum; by [F7], each summand has first Chern class $w_j-\widetilde m$. Thus the restriction is $\prod_j(w_j-\widetilde m)$. The class has degree $2(2kN)=4kN$. [F5, F6, F7, given]

2.1 The complex-oriented fundamental class has normalized Borel–Moore degree $4kN$. Capping it with $\mathcal E_{\widetilde m}$ of degree $4kN$ gives a degree-zero Borel–Moore class, so the stipulated localized proper trace has scalar coefficients in $S_{T_m}^{-1}R_{T_m}$. [F1, F2, given, step 1.1, algebra]

3.1 In the current S4 postulate the gauge group is $U(2)$, the mass is real Euclidean $m_E$, and the two pole rotation weights are $r^{-1}$. Applying the source convention from the Definition gives $\widetilde m=i m_E+(r^{-1}+r^{-1})/2=i m_E+r^{-1}$, so this is the specialization used in the displayed U(2) series. [L1, A1, step 2.1, algebra] ∎
