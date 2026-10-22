---
id: lem-adjoint-hyperbolic-ltwo-one-forms-are-exact
kind: lemma
title: Closed square-integrable adjoint one-forms on a cusped hyperbolic
  three-manifold are exact
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-axiom-of-choice
  - thm-choice-implies-dependent-implies-countable-choice
  - thm-riesz-representation-for-hilbert-space
  - thm-orthogonal-decomposition-by-a-closed-subspace
  - thm-smooth-partitions-of-unity-exist-on-manifolds
  - lem-smooth-compactly-supported-functions-are-dense-in-ltwo-of-an-open-set
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
sources:
  references:
    - title: Pere Menal-Ferrer and Joan Porti, Twisted cohomology for hyperbolic three
        manifolds
      url: https://arxiv.org/pdf/1001.2242
      locator: Section 2, particularly Corollary 2.12 and Lemma 2.14; the required
        complete-manifold analytic implication is also proved locally below
dependency_level: 0
---

## Statement

Assume the Axiom of Choice. Let $M=\Gamma\backslash\mathbb H^3$ be an oriented hyperbolic three-manifold with compact complement to finitely many standard torus cusp ends, each isometric to $(T^2\times[0,\infty),dt^2+e^{-2t}g_T)$ for a flat metric $g_T$. The compact case is allowed. Let $E=\mathbb H^3\times_\Gamma\mathfrak{sl}_2(\mathbb C)$ be the adjoint flat bundle. Give its fiber at a basepoint the Hilbert–Schmidt Hermitian product and transport this product by the homogeneous $\mathrm{PSL}_2(\mathbb C)/\mathrm{PSU}(2)$ construction. Write $d_E$ for its flat differential and $\delta_E$ for the metric formal adjoint.

There is $c>0$, depending only on the model normalization, such that every compactly supported smooth $E$-valued one-form satisfies
$$\|d_E\alpha\|_2^2+\|\delta_E\alpha\|_2^2\ge c\|\alpha\|_2^2.$$
Every smooth $E$-valued one-form $\alpha$ with $d_E\alpha=0$ and $\|\alpha\|_2<\infty$ has a smooth square-integrable primitive $b$, with $d_Eb=\alpha$ and $\|b\|_2\le c^{-1/2}\|\alpha\|_2$.

## Statement references

[[def-axiom-of-choice]]

[[thm-riesz-representation-for-hilbert-space]]

[[thm-orthogonal-decomposition-by-a-closed-subspace]]

[Menal-Ferrer and Porti, §2](https://arxiv.org/pdf/1001.2242)

## Facts & Assumptions

**Given:** Full AC, the hyperbolic quotient with the stated finite cusp decomposition, the adjoint bundle, its homogeneous metric and the flat differential.

[A1] AC supplies Countable Choice and Dependent Choice for Hilbert projections, Riesz representation, countable localizations and the convergent approximation sequences below. [[def-axiom-of-choice]], [[thm-choice-implies-dependent-implies-countable-choice]]

[F1] A Hilbert space is the orthogonal sum of a closed subspace and its orthogonal complement; bounded linear functionals have unique Riesz representing vectors. [[thm-orthogonal-decomposition-by-a-closed-subspace]], [[thm-riesz-representation-for-hilbert-space]]

[F2] Under the inherited countable-choice hypothesis, smooth partitions of unity subordinate to open covers exist. On each coordinate chart, compactly supported smooth functions are dense in $L^2$; this applies componentwise to the finitely many local bundle coefficients used below. [[thm-smooth-partitions-of-unity-exist-on-manifolds]], [[lem-smooth-compactly-supported-functions-are-dense-in-ltwo-of-an-open-set]]

## Proof

1.1 Put $G=\mathrm{PSL}_2(\mathbb C)$, $K=\mathrm{PSU}(2)$ and $V=\mathfrak{sl}_2(\mathbb C)$. Choose $X_1=\tfrac12\left(\begin{smallmatrix}i&0\\0&-i\end{smallmatrix}\right)$, $X_2=\tfrac12\left(\begin{smallmatrix}0&1\\-1&0\end{smallmatrix}\right)$ and $X_3=\tfrac12\left(\begin{smallmatrix}0&i\\i&0\end{smallmatrix}\right)$ in $\mathfrak k$, and put $Y_j=iX_j$. These $Y_j$ are an orthonormal tangent basis for curvature $-1$ hyperbolic space; for example $\exp(tY_1)$ moves the basepoint distance $|t|$, and the $K$ action rotates this basis. The matrix commutators give $[X_i,X_j]=\epsilon_{ijk}X_k$ and $[Y_i,Y_j]=i\epsilon_{ijk}Y_k$. On $V$ let $R_j=\operatorname{ad}Y_j$. Each $Y_j$ is Hermitian, so $R_j$ is self-adjoint for $\langle A,B\rangle=\operatorname{tr}(AB^*)$, by cyclicity of trace. The $K$ action is unitary for this product. [given, construct, algebra]

2.1 Represent $E$-valued forms by horizontal $K$-equivariant $V$-valued forms on $Q=\Gamma\backslash G$, expressing their coefficients in the left Maurer–Cartan frame. Indeed a frame $g$ identifies the fiber over $gK$ with $V$ by $\operatorname{Ad}g$, and replacing $g$ by $gk$ changes these coefficients by $\operatorname{Ad}k^{-1}$ and rotates the tangent indices. In these coefficients write $\varepsilon_j$ for exterior multiplication by the dual of $Y_j$ and $\iota_j$ for contraction by $Y_j$. The ordinary covariant differential of the $K$ connection is $D=\sum_j\varepsilon_jY_j$, because the horizontal part of $[Y_i,Y_j]$ is zero. Differentiating the fiber change $\operatorname{Ad}g$ gives $d_E=D+T$, where $T=\sum_j\varepsilon_jR_j$. These are actual coefficient formulas on all degrees, not definitions of a different connection. [step 1.1, algebra]

3.1 The invariant volume on $Q$ is the product of hyperbolic volume and normalized compact-fiber volume. Integration in a local bundle chart and then a subordinate smooth partition of unity [F2] shows that integration of a $K$-invariant coefficient norm on $Q$ equals its integration on $M$. The left invariant fields $Y_j$ have zero divergence for this volume: $G$ is unimodular, since $\operatorname{tr}(\operatorname{ad}Z)=0$ for the displayed Lie algebra basis, hence for all $Z$, and $\det\operatorname{Ad}(\exp Z)=1$. Right translation therefore preserves its Haar volume. Integration by parts on compact supports now gives $D^*=-\sum_j\iota_jY_j$ and $T^*=\sum_j\iota_jR_j$. The relations $\varepsilon_i\iota_j+\iota_j\varepsilon_i=\delta_{ij}$ show that $DT^*+T^*D+TD^*+D^*T=0$: the two anticommutator sums are respectively $\sum_jR_jY_j$ and its negative, since coefficient differentiation commutes with the constant matrices $R_j$. Thus $d_E\delta_E+\delta_Ed_E=DD^*+D^*D+H$, where $H=TT^*+T^*T$. All statements are $K$-equivariant and descend from $Q$ to $M$. [step 1.1, step 2.1, F2, algebra]

4.1 On one-form coefficients $a=(a_1,a_2,a_3)\in V^3$, the exterior-contraction relations give $(Ha)_i=\sum_jR_j^2a_i+\sum_j[R_i,R_j]a_j$. This finite-dimensional self-adjoint operator is positive definite. If $Ha=0$, positivity of $TT^*+T^*T$ gives $Ta=0$, namely $R_ia_j=R_ja_i$ for all $i,j$. Since $[R_i,R_j]=i\epsilon_{ijk}R_k$, the commutator sum in the displayed formula is a multiple of $R_ka_j-R_ja_k$ and vanishes. Consequently $0=\langle Ha,a\rangle=\sum_{i,j}\|R_ja_i\|^2$. Each $a_i$ commutes with all $Y_j$, which span $\mathfrak{sl}_2(\mathbb C)$ over $\mathbb C$. A matrix commuting with all traceless matrices is scalar, and a traceless scalar is zero. Thus $a=0$. Compactness of the unit sphere in $V^3$ supplies $c>0$ with $H\ge cI$. [step 1.1, step 3.1, algebra]

5.1 For a compactly supported smooth one-form, integration by parts in step 3.1 and step 4.1 give $\|d_E\alpha\|_2^2+\|\delta_E\alpha\|_2^2=\|D\alpha\|_2^2+\|D^*\alpha\|_2^2+(H\alpha,\alpha)\ge c\|\alpha\|_2^2$. We next extend this inequality to the joint weak graph domain. On each cusp choose a smooth cutoff equal to one for $t\le R$, zero for $t\ge2R$, with derivative bounded by $C/R$, and set it equal to one on the compact core. These cutoffs $\chi_R$ have compact support and $|d\chi_R|\le C/R$. For a weak graph-domain form $v$, the product formulas $d_E(\chi_Rv)=\chi_Rd_Ev+d\chi_R\wedge v$ and $\delta_E(\chi_Rv)=\chi_R\delta_Ev-\iota_{\nabla\chi_R}v$ show convergence to $v$ in the joint graph norm. The same conclusion holds separately for each differential and codifferential and for forms of every degree. In the compact case take the cutoff identically one. [A1, step 3.1, step 4.1, given, algebra]

6.1 Here are the local smoothing details needed to finish that graph-density argument. In a finite collection of trivializing charts around the support of $\chi_Rv$, every differential or codifferential is a first-order matrix operator $P=\sum_jA_j(x)\partial_j+B(x)$ with smooth coefficients. Multiplication by a subordinate smooth partition [F2] reduces to forms supported inside individual charts. For convolution with a smooth unit-mass kernel $\rho_\epsilon$, the difference $P(v*\rho_\epsilon)-(Pv)*\rho_\epsilon$ is a sum of integral operators with kernels $(A_j(x)-A_j(y))\partial_j\rho_\epsilon(x-y)+(\partial_jA_j)(y)\rho_\epsilon(x-y)$ and a zero-order coefficient commutator. The $L^1$ kernel bounds are uniform on the compact chart, by the mean-value bound for $A_j$ and scaling of $\rho_\epsilon$; thus these commutators are uniformly bounded on $L^2$. They tend to zero on smooth functions by differentiation of convolutions, hence on all $L^2$ functions by the smooth-density fact in [F2] and the uniform bound. Therefore local mollification converges in each asserted graph norm, also for the direct sum operator $(d_E,\delta_E)$. The partition contributes only fixed zero-order commutators, so a finite sum completes the approximation by compactly supported smooth forms. Together with step 5.1 this proves the coercive inequality on the maximal joint graph domain. It also proves that maximal differentials are the adjoints of maximal formal codifferentials, since their compact-support integration-by-parts identities extend by this graph density. [A1, F2, step 5.1, construct, algebra]

7.1 Let $\mathcal H_p=L^2(\Lambda^pT^*M\otimes E)$ and let $d_p$ be the maximal weak differential. It is closed: convergence of a form and its differential in $L^2$ preserves the weak test-function identity. Flatness gives $d_1d_0=0$ distributionally. Put $Z=\ker d_1$, a closed subspace of $\mathcal H_1$, and $\delta=d_0^*$. Every $w\in Z^\perp$ belongs to $\operatorname{Dom}\delta$ with $\delta w=0$, because it is orthogonal to $\operatorname{ran}d_0\subseteq Z$. Hence the orthogonal projection $P_Z$ maps $\operatorname{Dom}\delta$ into itself and $\delta P_Zv=\delta v$. On $Z\cap\operatorname{Dom}\delta$, steps 5.1 and 6.1 give $\|v\|_2\le c^{-1/2}\|\delta v\|_2$. In particular $A=\delta|_{Z\cap\operatorname{Dom}\delta}$ is injective with closed range: a Cauchy sequence of its images is, by this estimate, the image under the closed operator $\delta$ of a convergent sequence in $Z$. [F1, step 5.1, step 6.1, algebra]

8.1 Fix a weakly closed $\alpha\in\mathcal H_1$, so $\alpha\in Z$. On the closed range of $A$ define $\ell(Av)=\langle v,\alpha\rangle$. It is well defined and bounded, with norm at most $c^{-1/2}\|\alpha\|_2$, by step 7.1. Extend it to $\mathcal H_0$ by zero on the orthogonal complement of that range and use [F1] to obtain $b\in\mathcal H_0$ with $\langle Av,b\rangle=\langle v,\alpha\rangle$ and $\|b\|_2\le c^{-1/2}\|\alpha\|_2$. For arbitrary $v\in\operatorname{Dom}\delta$, replace $v$ by $P_Zv$; its $\delta$ image is unchanged and its pairing with $\alpha$ is unchanged. Thus $\langle\delta v,b\rangle=\langle v,\alpha\rangle$ on the full domain of $\delta$. By the adjoint definition and the graph-density conclusion of step 6.1, $b\in\operatorname{Dom}d_0$ and $d_0b=\alpha$. This proves the primitive assertion in the weak sense without an external closed-range or harmonic-representative theorem. [A1, F1, step 6.1, step 7.1, algebra]

9.1 If $\alpha$ is smooth, the primitive $b$ is smooth. In a flat parallel frame on a coordinate ball, $d_Eb=\alpha$ is the ordinary componentwise distributional equation $db=\alpha$. A smooth closed one-form on a smaller star-shaped coordinate ball has a smooth primitive $b_0$, given by integrating along straight radial segments; differentiating the integral and using closedness verifies $db_0=\alpha$. Then $d(b-b_0)=0$ distributionally. Mollification on still smaller balls makes this difference a sequence of constants, so its distributional limit is constant as well. Thus $b=b_0+\text{constant}$ is smooth locally and hence globally. Its $L^2$ norm and the bound from step 8.1 remain unchanged. [step 8.1, algebra] ∎

## Source reading and scope

The complete 29-page Menal-Ferrer–Porti paper, including its principal-bundle appendix, was read. Its algebraic positivity proof is specialized above to the adjoint three-dimensional representation. Its externally stated Andreotti–Vesentini implication is replaced by the explicit graph-density and Hilbert-space argument in steps 5.1–9.1. Standard torus cusp models are hypotheses here; this lemma does not derive the geometric cusp decomposition. No triangulation or positivity of tetrahedron shapes is assumed.
