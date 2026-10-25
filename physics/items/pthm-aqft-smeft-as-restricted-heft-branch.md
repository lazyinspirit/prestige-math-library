---
id: pthm-aqft-smeft-as-restricted-heft-branch
kind: physics-theorem
title: The selected SMEFT model is a restricted HEFT branch
status: "published"
origin: pipeline
pipeline_run: advanced-qft-supersymmetry-build-2026-10-23
dependency_level: 7
domain: physics
library: physics
category: advanced-qft-and-supersymmetry
deps:
  - post-aqft-smeft-model
  - def-aqft-warsaw-basis-contract
  - post-aqft-heft-model
  - def-aqft-chiral-power-counting
  - def-qftx-associated-covariant-derivative
  - lem-qftx-principal-curvature-cartan-bianchi
dependency_roles:
  post-aqft-smeft-model: physical-assumption
  def-aqft-warsaw-basis-contract: formulation-prerequisite
  post-aqft-heft-model: physical-assumption
  def-aqft-chiral-power-counting: formulation-prerequisite
  def-qftx-associated-covariant-derivative: mathematical-premise
  lem-qftx-principal-curvature-cartan-bianchi: mathematical-premise
axiom_base: "ZF + AC_omega, inherited through the selected gauge and field-data suppliers; the finite field substitution uses no additional choice principle."
proof_strategy: direct
physical_scope: "A conditional field-space and finite-polynomial coefficient map from the selected dimension-six linear Higgs model to a restricted nonlinear HEFT branch on the nonzero-doublet patch. It proves no equality of full operator quotients, no converse, no universal HEFT parametrization, no UV completion, and no empirical realization."
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "B. Grzadkowski, M. Iskrzynski, M. Misiak and J. Rosiek, Dimension-Six Terms in the Standard Model Lagrangian"
      url: "https://arxiv.org/pdf/1008.4884"
      locator: "§§2–3 and Tables 1–3, printed pp. 2–5, for the field content, dimension-six source representatives, and coefficient convention."
    - title: "Gerhard Buchalla, Oscar Catà and Claudius Krause, Complete Electroweak Chiral Lagrangian with a Light Higgs at NLO"
      url: "https://arxiv.org/pdf/1307.5017"
      locator: "§§2 and 5–6, printed pp. 2–3 and 12–15, for the nonlinear U,h convention and the distinction between the linear-Higgs branch and general HEFT functions."
    - title: "Rodrigo Alonso, A Primer on Higgs Effective Field Theory with Geometry"
      url: "https://www.ippp.dur.ac.uk/~ralonso/PoHEFT.pdf"
      locator: "§§3.1–3.2, 5.2 and 6, for the nonzero-doublet polar parametrization, scalar geometry and coefficient correlations; the local map below is proved directly."
verification:
  precheck: pending
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-25
---
## Statement

Let $v>0$, let $J=(-v,\infty)$, and use the linearly transforming complex doublet $H$ with hypercharge $Y=1/2$ and the nonlinear fields $h\in J$, $U\in SU(2)$, with the gauge transformations and mostly-plus Minkowski conventions of the two adopted electroweak models. Here $\sigma^2=\begin{pmatrix}0&-i\\i&0\end{pmatrix}$ is the second Pauli matrix. Put $e_2=(0,1)^T$, $\widetilde H=i\sigma^2H^*$, and define
$$\Phi:J\times SU(2)\longrightarrow\mathbb C^2\setminus\{0\},\qquad \Phi(h,U)=\frac{v+h}{\sqrt2}Ue_2.$$
Then $\Phi$ is a smooth diffeomorphism onto the nonzero-doublet field space. Its inverse is obtained from $\rho=(H^\dagger H)^{1/2}>0$ and $\Sigma(H)=(\widetilde H,H)$ by
$$h=\sqrt2\rho-v,\qquad U=\frac{\Sigma(H)}{\rho}.$$
It is equivariant for $SU(2)_L\times U(1)_Y$: for $g_L\in SU(2)_L$ and $z\in U(1)_Y$, under $H\mapsto g_Lz^3H$ one has $U\mapsto g_LU\operatorname{diag}(z^3,z^{-3})^{-1}$ and $h\mapsto h$. The point $H=0$ is excluded; no value of $U$ is assigned there.

For the finite selected SMEFT interaction consisting of the renormalizable terms and the source-defined Warsaw representatives through canonical dimension six, substitute $H=\Phi(h,U)$ and its conjugate into each representative and expand covariant derivatives by the product rule. In the unnormalized radial variable $x=h/v$, every resulting coefficient function multiplying a fixed finite HEFT derivative/Goldstone monomial is a polynomial in $x$ of degree at most six. More precisely, after choosing a finite ordered list of the resulting HEFT monomials and a common dimensionally consistent coefficient normalization, the HEFT coefficient tuple is $f=R c$, where $c$ is the finite selected SMEFT coefficient tuple and $R$ is the finite matrix defined by this substitution. Thus its functions and coefficients obey the polynomial and linear-image correlations of this selected branch; they are not freely specifiable smooth HEFT functions. For example, an independent coefficient function $e^x$ is not in the degree-at-most-six polynomial class on any open interval. These radial functions are analytic in $h/v$ before any further field reparametrization.

The canonical-dimension cutoff and the separately defined HEFT chiral/loop grading remain distinct: the substitution does not identify all HEFT classes through a chosen chiral order with the Warsaw list. The result is a conditional statement about the named finite coefficient representatives and their local field substitution, not a proof that a formal algebraic invariant quotient equals the full physical compact-gauge invariant space. It asserts neither that every HEFT lies on this branch nor that every HEFT point has a weakly coupled ultraviolet completion.

## Statement references

[[post-aqft-smeft-model|Selected linear Higgs fields, gauge action and finite dimension-six model]]

[[post-aqft-heft-model|Nonlinear Goldstone and scalar-singlet transformation law]]

[[def-aqft-warsaw-basis-contract|Finite source-defined dimension-six coefficient representatives]]

[[def-aqft-chiral-power-counting|Separate HEFT chiral and loop grading]]

[[def-qftx-associated-covariant-derivative|Associated-bundle covariant derivative convention]]

[[lem-qftx-principal-curvature-cartan-bianchi|Curvature convention for the gauge fields]]

[Grzadkowski et al., full dimension-six operator article](https://arxiv.org/pdf/1008.4884)

[Buchalla, Catà and Krause, full electroweak chiral EFT paper](https://arxiv.org/pdf/1307.5017)

[Alonso, full HEFT geometry lecture notes](https://www.ippp.dur.ac.uk/~ralonso/PoHEFT.pdf)

## Facts & Assumptions

**Given:** The finite coefficient model and all fields are those in the Statement, with smooth fields on the trivial bundle and the supplied gauge actions.

[F1] [[post-aqft-smeft-model]]: $H$ is a smooth complex doublet of hypercharge $Y=1/2$ (integer charge $y=3$), and its conjugate is $\widetilde H=i\sigma^2H^*$; the adopted field content, unit conventions and direct-product gauge action are fixed there.

[F2] [[post-aqft-heft-model]]: $h$ is gauge invariant with range $J=(-v,\infty)$, $U$ is a smooth $SU(2)$-valued field, $g_R(z)=\operatorname{diag}(z^3,z^{-3})$, and $U\mapsto g_LUg_R(z)^{-1}$; the local derivative is $D_\mu U=\partial_\mu U+igW_\mu U-ig'B_\mu UT_3$.

[F3] [[def-aqft-warsaw-basis-contract]]: the selected finite list consists of the source-defined B- and L-conserving dimension-six polynomial representatives, with three-family components, at most six fields and the stated dimensionless coefficient convention; it does not claim a local completeness proof or compact-to-algebraic quotient identity.

[F4] [[def-aqft-chiral-power-counting]]: the HEFT chiral/loop grading is separate from canonical dimension, and its retained NLO classes may have arbitrary smooth functions of $h/v$; no identity with a finite SMEFT dimension truncation is part of that definition.

[F5] [[def-qftx-associated-covariant-derivative]] and [[lem-qftx-principal-curvature-cartan-bianchi]]: associated fields use the supplied right-principal connection and representation covariant derivative, and gauge curvature is $F_A=dA+\tfrac12[A\wedge A]$; in the electroweak doublet representation this gives the local $D_\mu H$ and the compatible $D_\mu U$ used above.

## Proof

**Proof technique:** Construct the inverse on the nonzero-doublet patch, check gauge equivariance, and substitute finite polynomial representatives term by term.

**Given:** [F1]–[F5].

1.1 For $H=(a,b)^T\ne0$, let $\rho=(H^\dagger H)^{1/2}>0$. Direct multiplication gives $\Sigma=(i\sigma^2H^*,H)=\begin{pmatrix}b^*&a\\-a^*&b\end{pmatrix}$, so $\Sigma^\dagger\Sigma=(|a|^2+|b|^2)I=\rho^2I$ and $\det\Sigma=|a|^2+|b|^2=\rho^2$. Therefore $U=\Sigma/\rho$ is unitary with determinant one, hence lies in $SU(2)$, and $h=\sqrt2\rho-v>-v$ lies in $J$. The map $\Phi$ is smooth by scalar and matrix multiplication. Also $H^\dagger H$ is smooth and positive on $\mathbb C^2\setminus\{0\}$, $s\mapsto\sqrt{s}$ is smooth on $(0,\infty)$, and division by $\rho>0$ is smooth, so the displayed inverse is smooth. Conversely, direct multiplication for an $SU(2)$ matrix gives $i\sigma^2U^*=Ui\sigma^2$ and $i\sigma^2e_2=e_1$, so $\Sigma(\Phi(h,U))=(v+h)U/\sqrt2$ and $\rho(\Phi(h,U))=(v+h)/\sqrt2$. These identities show that the two formulas compose to the identity in both directions. Thus $\Phi$ is a smooth diffeomorphism onto precisely the nonzero-doublet patch. [given, F1, F2, algebra]

1.2 The doublet derivative is $D_\mu H=\partial_\mu H+igW_\mu H+\tfrac{i}{2}g'B_\mu H$, because $Y(H)=1/2$. Applying the product rule to $H=(v+h)Ue_2/\sqrt2$ and using $T_3e_2=-e_2/2$ in the $D_\mu U$ formula of [F2] yields
$$D_\mu H=\frac1{\sqrt2}\left((\partial_\mu h)Ue_2+(v+h)D_\mu Ue_2\right).$$
The conjugate formula follows by complex conjugation. Repeated covariant derivatives expand into finite sums by the product rule, and field strengths remain the same curvature polynomials under this substitution. Thus every selected local polynomial representative has a finite HEFT expansion. [given, F1, F2, F5, algebra]

2.1 For $g_L\in SU(2)$, the defining two-dimensional representation obeys $i\sigma^2g_L^*=g_Li\sigma^2$; this follows by writing $g_L=\begin{pmatrix}a&b\\-b^*&a^*\end{pmatrix}$ and multiplying. Since $H\mapsto g_Lz^3H$, this identity gives $\widetilde H\mapsto g_Lz^{-3}\widetilde H$. Consequently $\Sigma\mapsto g_L\Sigma\operatorname{diag}(z^{-3},z^3)=g_L\Sigma g_R(z)^{-1}$. Unitarity preserves $\rho$, so $h$ is unchanged and $U=\Sigma/\rho$ has exactly the HEFT transformation law in [F2]. Hence $\Phi$ is equivariant. [given, F1, F2, step 1.1, algebra]

2.2 Each undifferentiated $H$ or $\widetilde H$ in a representative contributes one factor $v+h$; each differentiated doublet contributes, by step 1.2, a sum whose terms contain at most one such factor. The source representatives contain at most six scalar fields by [F3]. Therefore every product term after the finite Leibniz expansion has radial degree at most six. Writing $x=h/v$ only extracts fixed powers of $v$ into its coefficient, so every radial coefficient is a polynomial in $x$ of degree at most six and hence analytic. The finite selected representatives produce finitely many HEFT monomials; define $R_{\alpha k,a}$ to be the coefficient of the $k$th radial power in monomial slot $\alpha$ after the stated substitution and dimensional normalization. Linearity of substitution then gives $f_{\alpha k}=\sum_aR_{\alpha k,a}c_a$, which is the claimed finite linear-image constraint. [given, F3, step 1.2, algebra]

3.1 A degree-at-most-six polynomial has seventh derivative identically zero, whereas $(d/dx)^7e^x=e^x\ne0$ on every open interval. Thus $e^x$ cannot be one of the branch coefficient functions on any open interval. This exhibits a smooth HEFT coefficient choice outside this finite polynomial class and proves that the substitution does not parametrize general HEFT functions. [given, step 2.2, algebra]

4.1 The finite starting list is selected by canonical dimension in [F3], whereas [F4] defines a separate chiral/loop grading and allows arbitrary smooth radial functions. No step identifies those gradings or their operator lists. The construction used only the nonzero-doublet diffeomorphism and finite substitutions; it supplies neither a value at $H=0$ nor an inverse map from arbitrary HEFT data, a compact-to-algebraic invariant-space equality, or a UV-completion theorem. [given, F3, F4, step 1.1, step 2.2, algebra] ∎
