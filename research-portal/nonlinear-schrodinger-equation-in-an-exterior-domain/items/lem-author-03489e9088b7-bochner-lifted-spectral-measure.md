---
id: lem-author-03489e9088b7-bochner-lifted-spectral-measure
kind: lemma
domain: mathematics
title: Lifted spectral measure and isometric Bochner scale interpolation
status: draft
proof_strategy: direct
deps:
  - lem-author-03489e9088b7-spectral-cutoff-scale-identifications
  - lem-author-03489e9088b7-exact-scale-operator-interpolation
  - math:thm-spectral-theorem-for-unbounded-self-adjoint-operators
  - math:thm-unbounded-borel-functional-calculus
  - math:thm-pe12-bochner-lp-completeness
  - math:def-axiom-of-choice
  - math:def-projection-valued-measure
  - math:def-strongly-measurable-banach-valued-function
  - math:lem-complex-norm-realification-is-a-real-norm
  - math:thm-complex-holder-minkowski-and-the-quotient-norm
  - math:thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces
  - math:thm-dominated-convergence
  - math:thm-monotone-convergence-for-the-integral
  - math:thm-nonnegative-measurable-functions-admit-increasing-simple-approximations
  - lem-author-03489e9088b7-spectral-analytic-strip-profiles
dependency_roles:
  lem-author-03489e9088b7-spectral-cutoff-scale-identifications: mathematical-premise
  lem-author-03489e9088b7-exact-scale-operator-interpolation: mathematical-premise
  math:thm-spectral-theorem-for-unbounded-self-adjoint-operators: mathematical-premise
  math:thm-unbounded-borel-functional-calculus: mathematical-premise
  math:thm-pe12-bochner-lp-completeness: mathematical-premise
  math:def-axiom-of-choice: mathematical-premise
  math:def-projection-valued-measure: mathematical-premise
  math:def-strongly-measurable-banach-valued-function: mathematical-premise
  math:lem-complex-norm-realification-is-a-real-norm: mathematical-premise
  math:thm-complex-holder-minkowski-and-the-quotient-norm: mathematical-premise
  math:thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces: mathematical-premise
  math:thm-dominated-convergence: mathematical-premise
  math:thm-monotone-convergence-for-the-integral: mathematical-premise
  math:thm-nonnegative-measurable-functions-admit-increasing-simple-approximations: mathematical-premise
  lem-author-03489e9088b7-spectral-analytic-strip-profiles: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
dependency_level: 4
formulation_deps:
  - lem-author-03489e9088b7-spectral-cutoff-scale-identifications
  - lem-author-03489e9088b7-exact-scale-operator-interpolation
  - math:thm-spectral-theorem-for-unbounded-self-adjoint-operators
  - math:thm-unbounded-borel-functional-calculus
  - math:thm-pe12-bochner-lp-completeness
  - math:def-axiom-of-choice
  - math:def-projection-valued-measure
  - math:def-strongly-measurable-banach-valued-function
  - lem-author-03489e9088b7-spectral-analytic-strip-profiles
argument_deps:
  - lem-author-03489e9088b7-spectral-cutoff-scale-identifications
  - lem-author-03489e9088b7-exact-scale-operator-interpolation
  - math:thm-spectral-theorem-for-unbounded-self-adjoint-operators
  - math:thm-unbounded-borel-functional-calculus
  - math:thm-pe12-bochner-lp-completeness
  - math:def-axiom-of-choice
  - math:def-projection-valued-measure
  - math:def-strongly-measurable-banach-valued-function
  - math:lem-complex-norm-realification-is-a-real-norm
  - math:thm-complex-holder-minkowski-and-the-quotient-norm
  - math:thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces
  - math:thm-dominated-convergence
  - math:thm-monotone-convergence-for-the-integral
  - math:thm-nonnegative-measurable-functions-admit-increasing-simple-approximations
  - lem-author-03489e9088b7-spectral-analytic-strip-profiles
---

## Statement

Assume AC, let $A\ge I$ be self-adjoint on a nonzero complex Hilbert space $H$, and let $I_\tau=(0,\tau)$ with $0<\tau<\infty$ and Lebesgue measure. For a Hilbert space $X$, $L^2(I_\tau;X)$ denotes almost-everywhere classes of strongly measurable functions, meaning almost-everywhere pointwise limits of measurable simple functions, satisfying $\int_{I_\tau}\|u(t)\|_X^2dt<\infty$, with norm $(\int_{I_\tau}\|u(t)\|_X^2dt)^{1/2}$. On $\mathscr H=L^2(I_\tau;H)$, the formula $(\mathscr E(C)u)(t)=E_A(C)u(t)$ defines a regular spectral projection-valued measure; let $\mathscr A=\int\lambda\,d\mathscr E(\lambda)\ge I$. Its completed spectral scale is canonically and isometrically $\mathscr H_{\mathscr A}^s=L^2(I_\tau;H_A^s)$ for every real $s$. In particular,
$$[L^2(I_\tau;H_A^a),L^2(I_\tau;H_A^b)]_\theta=L^2(I_\tau;H_A^{(1-\theta)a+\theta b})$$
isometrically for all real $a,b$ and $0<\theta<1$. 

For the endpoint operator assertion, let $(X_0,X_1)$ be any compatible complex Banach couple: the endpoints embed continuously and complex-linearly into a common Hausdorff complex topological vector space. Give $X_0+X_1$ the norm $\inf_{x=x_0+x_1}(\|x_0\|_{X_0}+\|x_1\|_{X_1})$, and use the admissible complex strip interpolation norm. Thus admissible functions are bounded continuous sum-valued maps on $0\le\operatorname{Re}z\le1$, holomorphic in its interior, with continuous endpoint-valued boundary maps tending to zero at imaginary infinity; the function norm is the maximum of the two boundary supremum norms, and the interpolation norm is its infimum at fixed value $F(\theta)$.

Let $b_0,b_1\in\mathbb R$, set $Y_j=L^2(I_\tau;H_A^{b_j})$, and suppose complex-linear maps $L_j:X_j\to Y_j$ have finite bounds $M_j\ge0$. Assume consistency: $L_0x=L_1x$ for $x\in X_0\cap X_1$, with equality in the common space $L^2(I_\tau;H_A^{\min(b_0,b_1)})$. They then define one map $L:X_0+X_1\to Y_0+Y_1$ by $L(x_0+x_1)=L_0x_0+L_1x_1$. For $b_\theta=(1-\theta)b_0+\theta b_1$ and $0<\theta<1$,
$$\|Lx\|_{L^2(I_\tau;H_A^{b_\theta})}\le M_0^{1-\theta}M_1^\theta\|x\|_{[X_0,X_1]_\theta}\qquad(x\in[X_0,X_1]_\theta).$$
The zero-bound convention is $0^t=0$ for $t>0$. In particular, for $B\ge I$ self-adjoint on a nonzero complex Hilbert space $K$ and real $a_0,a_1$, the source endpoints may be $X_j=K_B^{a_j}$ or $X_j=L^2(I_\sigma;K_B^{a_j})$, where $I_\sigma=(0,\sigma)$ and $0<\sigma<\infty$. Their interpolation spaces are respectively $K_B^{a_\theta}$ and $L^2(I_\sigma;K_B^{a_\theta})$, with exact norms and $a_\theta=(1-\theta)a_0+\theta a_1$.

## Facts & Assumptions

[F1] Completed spectral scale levels and their unitary maps are compatible on the spectral cutoff core [[lem-author-03489e9088b7-spectral-cutoff-scale-identifications]].

[F2] The exact spectral interpolation identity and the strip operator argument apply to positive self-adjoint operators on any complex Hilbert spaces [[lem-author-03489e9088b7-exact-scale-operator-interpolation]].

[F3] The converse spectral theorem constructs a self-adjoint operator from a regular real PVM [[math:thm-spectral-theorem-for-unbounded-self-adjoint-operators]].

[F4] The PVM norm integral and monotone spectral approximation determine fractional domains and powers [[math:thm-unbounded-borel-functional-calculus]].

[F5] Bochner Lp completeness on a finite interval holds for an arbitrary real Banach value space under countable choice; apply it to the underlying real space of H [[math:thm-pe12-bochner-lp-completeness]].

[F6] AC supplies the choice assumptions of the spectral and Bochner completeness inputs [[math:def-axiom-of-choice]].

[F7] A PVM has orthogonal projection values, empty-set and whole-space normalization, intersection multiplication and strong countable additivity; regularity means regularity of every scalar measure [[math:def-projection-valued-measure]].

[F8] Strong measurability is the almost-everywhere simple-approximation convention of [[math:def-strongly-measurable-banach-valued-function]]. Realification preserves the norm and metric by [[math:lem-complex-norm-realification-is-a-real-norm]]. Scalar complex $L^2$ norms and the integral Cauchy–Schwarz inequality are supplied by [[math:thm-complex-holder-minkowski-and-the-quotient-norm]], and the inner-product Cauchy–Schwarz inequality by [[math:thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces]].

[F9] Scalar dominated convergence on an arbitrary measure space is [[math:thm-dominated-convergence]]. Nonnegative measurable functions admit increasing measurable simple approximations by [[math:thm-nonnegative-measurable-functions-admit-increasing-simple-approximations]], and their increasing integrals converge by [[math:thm-monotone-convergence-for-the-integral]]. These apply to Lebesgue time measure as well as to scalar spectral measures; the dominated limits below have integrable squared-norm majorants.

[F10] Compatible complex Banach couples, their sum norms and the admissible strip interpolation convention are defined in [[lem-author-03489e9088b7-spectral-analytic-strip-profiles]]. Only these definitions are used for the arbitrary source couple; its interpolation identity is not assumed to be spectral.

## Proof

**Given:** The data and AC in the statement.

**Goal:** All asserted identifications and bounds, with the stated exact norms.

1.1 Bounded linear maps preserve strong measurability by application to simple approximants. The usual integral pairing $\langle u,v\rangle=\int\langle u(t),v(t)\rangle_Hdt$ is defined by the inner-product and scalar integral Cauchy–Schwarz inequalities in [F8], is positive definite on the almost-everywhere quotient, and has the displayed norm. Completeness follows by applying the real Bochner completeness theorem to the underlying real Banach space of $H$; the norm, measurable simple functions and Cauchy sequences are unchanged by this realification, as specified in [F8]. Hence $\mathscr H$ is a complex Hilbert space, without any separability assumption on $H$. For each Borel $C$, $\mathscr E(C)$ is a bounded orthogonal projection, as is checked pointwise. The identities $\mathscr E(\varnothing)=0$, $\mathscr E(\mathbb R)=I$ and $\mathscr E(C\cap D)=\mathscr E(C)\mathscr E(D)$ also hold pointwise, by the corresponding identities for $E_A$. For disjoint $C_n$, the finite partial sums converge pointwise strongly to $E_A(\bigcup C_n)u(t)$; their squared differences are dominated by $\|u(t)\|^2$. Scalar dominated convergence in [F9] proves strong countable additivity on $\mathscr H$. [F3, F4, F5, F6, F7, F8, F9]

2.1 The scalar spectral measure is $\nu_u(C)=\|\mathscr E(C)u\|^2=\int_{I_\tau}\|E_A(C)u(t)\|^2dt$. It is regular: approximate $u$ in $L^2$ by finite-valued measurable simple functions $v$. Such approximation follows by truncating the norm of $u$, taking its defining simple approximants, clipping them to a fixed ball, and using scalar dominated convergence from [F9], then letting that ball increase. For simple $v$ on disjoint time sets, $\nu_v$ is a finite positive linear combination of the regular scalar measures of $E_A$, so regular. For a finite disjoint Borel partition $(C_k)$, Cauchy–Schwarz from [F8] for the orthogonal projections gives $\sum_k|\nu_u(C_k)-\nu_v(C_k)|\le(\|u\|+\|v\|)\|u-v\|$. Thus $\nu_v\to\nu_u$ in total variation. Given a Borel set and an error tolerance, first take such a $v$ with small variation error and then compact inner and open outer approximants for $\nu_v$; their errors for $\nu_u$ are also small. This proves regularity of each $\nu_u$ and hence of the PVM (polarization also gives regular cross measures). The converse spectral theorem now gives $\mathscr A$ as asserted. [F3, F4, F7, F8, F9, step 1.1]

3.1 For every nonnegative Borel $w$, the identity $\int w\,d\nu_u=\int_{I_\tau}(\int w\,d(E_A)_{u(t)})dt$ follows first for indicators from step 2.1, then for nonnegative simple functions by finite addition, then for arbitrary $w$ by the increasing simple approximations and scalar monotone convergence in [F9] on both sides. In particular for $s\ge0$ the exact norm formula with $w(\lambda)=\lambda^s$ shows that $D(\mathscr A^{s/2})$ consists precisely of $u(t)\in D(A^{s/2})$ almost everywhere with $\int\|A^{s/2}u(t)\|^2dt<\infty$, and gives equality of the norms. The pointwise power is strongly measurable because the bounded spectral truncations are strongly measurable and converge in $H$ pointwise on this domain; conversely the inverse $A^{-s/2}:H\to H_A^s$ is bounded, so the domain functions are strongly measurable also as $H_A^s$-valued functions. Truncated multipliers prove that $\mathscr A^{s/2}u(t)=A^{s/2}u(t)$ on this domain. [F1, F4, F8, F9, step 1.1, step 2.1]

4.1 For any real $s$, the core isometry $u\mapsto\mathscr A^{s/2}u$ extends onto $\mathscr H$ by the cutoff argument. The pointwise map $u(t)\mapsto J_su(t)$ is also an onto isometry $L^2(I_\tau;H_A^s)\to\mathscr H$, since $J_s$ and its inverse are bounded maps between their indicated Hilbert spaces and preserve strong measurability. On the ranges of $\mathscr E([1,N])$, these two maps agree by the bounded multiplier identities and step 3.1; these cutoff ranges lie in $D(\mathscr A^\infty)$ and are dense at every completed level. In the Bochner space they are dense because $E_A([1,N])$ converges strongly and contractively at level $s$, followed by scalar dominated convergence from [F9] in time with majorant $\|u(t)\|_s^2$. This proves the canonical isometric completion identity for all real $s$, consistently in common smaller-index spaces. Applying exact spectral interpolation to $\mathscr A$ proves the displayed identity. [F1, F2, F4, F8, F9, step 1.1, step 3.1]

5.1 Consistency makes $L$ well defined: two decompositions of $x$ differ by an element of $X_0\cap X_1$, on which the endpoint maps agree. For any decomposition $x=x_0+x_1$, the target sum norm satisfies $\|Lx\|_{Y_0+Y_1}\le M_0\|x_0\|_{X_0}+M_1\|x_1\|_{X_1}$. Infimizing gives $\|Lx\|_{Y_0+Y_1}\le\max(M_0,M_1)\|x\|_{X_0+X_1}$. Hence, for an admissible source function $F$, composition $LF$ is bounded and continuous into the target sum. Its interior difference quotients converge to $LF'(z)$ by this boundedness, so it is holomorphic. On boundary $j$, the restriction is $L_jF(j+it)$; boundedness of $L_j$ preserves endpoint continuity and decay, with supremum norm at most $M_j\|F\|_{\mathcal F}$. This argument uses only the arbitrary compatible source couple, without requiring it to be a spectral couple. [given, F10, step 4.1]

6.1 Fix $x\in[X_0,X_1]_\theta$ and an admissible $F$ with $F(\theta)=x$. For $\delta>0$ put $m_j=M_j+\delta>0$ and $G(z)=(m_0/m_1)^{z-\theta}LF(z)$, using the real logarithm of the positive ratio. This scalar factor is holomorphic and bounded on the closed strip, with boundary modulus $(m_0/m_1)^{j-\theta}$, so $G$ is admissible in the target and $G(\theta)=Lx$. Its boundary supremum at $j=0$ is at most $M_0(m_0/m_1)^{-\theta}\|F\|_{\mathcal F}\le m_0^{1-\theta}m_1^\theta\|F\|_{\mathcal F}$, and at $j=1$ it is at most $M_1(m_0/m_1)^{1-\theta}\|F\|_{\mathcal F}\le m_0^{1-\theta}m_1^\theta\|F\|_{\mathcal F}$. Taking the infimum over $F$ and then $\delta\downarrow0$ proves the geometric-mean bound, including either zero endpoint bound. Step 4.1 identifies the target interpolation norm exactly with $L^2(I_\tau;H_A^{b_\theta})$. For the two stated source specializations, [F2] gives the spectral-source identity, and the construction in steps 1.1–4.1 applied to $B,K,I_\sigma$ gives the Bochner-source identity; both preserve the exact norm. [given, F2, F10, step 4.1, step 5.1] ∎
