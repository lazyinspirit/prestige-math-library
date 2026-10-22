---
id: lem-qftx-global-microlocal-pullback
kind: lemma
title: "Canonical global microlocal pullback by controlled local Fourier construction"
status: draft
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
domain: mathematics
library: mathematics
physical_scope: null
dependency_level: 0
deps:
  - def-countable-choice
  - def-qftx-distributions-on-smooth-manifolds
  - thm-local-finite-order-characterization-of-distributions
  - lem-compactly-supported-distributions-extend-to-smooth-functions
  - thm-fourier-transform-of-a-compactly-supported-distribution-is-a-smooth-polynomially-bounded-multiplier
  - def-qftx-local-wavefront-set
  - lem-qftx-wavefront-chart-invariance
  - thm-fourier-inversion-on-schwartz-space
  - lem-schwartz-parameter-pairing-and-integral-interchange
  - lem-distribution-pairing-with-smooth-parameter-families
  - lem-test-function-cutoffs-and-euclidean-localization
  - thm-dominated-convergence
  - thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces
  - cor-c-one-change-of-variables-for-l-one-functions
  - thm-lebesgue-measure-of-a-box-of-every-kind
dependency_roles:
  def-countable-choice: mathematical-premise
  def-qftx-distributions-on-smooth-manifolds: mathematical-premise
  thm-local-finite-order-characterization-of-distributions: mathematical-premise
  lem-compactly-supported-distributions-extend-to-smooth-functions: mathematical-premise
  thm-fourier-transform-of-a-compactly-supported-distribution-is-a-smooth-polynomially-bounded-multiplier: mathematical-premise
  def-qftx-local-wavefront-set: mathematical-premise
  lem-qftx-wavefront-chart-invariance: mathematical-premise
  thm-fourier-inversion-on-schwartz-space: mathematical-premise
  lem-schwartz-parameter-pairing-and-integral-interchange: mathematical-premise
  lem-distribution-pairing-with-smooth-parameter-families: mathematical-premise
  lem-test-function-cutoffs-and-euclidean-localization: mathematical-premise
  thm-dominated-convergence: mathematical-premise
  thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces: mathematical-premise
  cor-c-one-change-of-variables-for-l-one-functions: mathematical-premise
  thm-lebesgue-measure-of-a-box-of-every-kind: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Klaus Fredenhagen and Katarzyna Rejzner, Perturbative algebraic quantum field theory"
      url: "https://arxiv.org/pdf/1208.1428"
      locator: "Appendix A, PDF pp.35\u201338, especially Theorem A.7, which explicitly gives only a proof idea. Retrieved complete42-page PDF and read these complete appendix pages; controlled approximation, all local estimates and gluing are proved locally here."
verification:
  precheck: pending
---

## Statement

Assume Countable Choice. Let $M,N$ be Hausdorff second-countable smooth manifolds without boundary, let $f:N\to M$ be smooth, and let $\Gamma\subset T^*M\setminus0$ be closed and conic. Put
$$N_f=\{(f(x),\eta):\eta\ne0,\ df_x^T\eta=0\}.$$
If $\Gamma\cap N_f=\varnothing$, every $u\in\mathcal D'(M)$ with $\operatorname{WF}(u)\subset\Gamma$ has a canonical scalar-distribution pullback $f^*u$. It agrees with $u\circ f$ for smooth scalar functions, commutes with restriction to open subsets, is independent of all coordinate charts and support cutoffs, and satisfies
$$\operatorname{WF}(f^*u)\subset f^*\Gamma:=\{(x,df_x^T\eta):(f(x),\eta)\in\Gamma\}.$$
In particular the same assertion holds with $\Gamma=\operatorname{WF}(u)$. A nonproper map and a test whose image meets several target charts are allowed.

The following precise local convergence property is part of the assertion. Call $u_j\to u$ **controlled relative to $\Gamma$** when all these distributions have wavefront sets in $\Gamma$, they converge on every fixed test density, on each fixed compact test support they share one finite derivative-order bound, and, in every chart, for every compact smooth cutoff $a$ and closed cone $C$ with $(\operatorname{supp}a\times C)\cap\Gamma=\varnothing$, one has
$$\sup_j\sup_{\eta\in C}(1+|\eta|)^q|\widehat{a u_j}(\eta)|<\infty\qquad(q=0,1,\ldots).$$
An empty cone imposes no condition. Then $f^*u_j\to f^*u$ is controlled relative to $f^*\Gamma$ locally, with common support bounds whenever the input supports and the relevant source test supports are fixed. On a compact coordinate patch, compactly supported smooth mollifications of a localized distribution give such an approximating sequence on every smaller patch. Consequently the pullback is uniquely determined by its smooth values and this controlled sequential continuity. This statement uses the explicitly defined convergence property, rather than assuming a general spectral or locally convex extension principle.

## Statement references

[[def-qftx-distributions-on-smooth-manifolds]]

[[def-qftx-local-wavefront-set]]

[[lem-qftx-wavefront-chart-invariance]]

## Facts & Assumptions

**Given:** The manifolds, closed conic set, map and transversality hypotheses in the Statement; Fourier transform has kernel $e^{-2\pi i x\cdot\eta}$ and distributions pair bilinearly with test densities.

[A1] Countable Choice supplies the Fourier and Lebesgue interfaces; no further choice axiom is assumed. [[def-countable-choice]]

[F1] Scalar distributions use the test-density topology, and diffeomorphism pullback uses its absolute-Jacobian transformation. Fixed-compact derivative bounds characterize Euclidean distributions. [[def-qftx-distributions-on-smooth-manifolds]] [[thm-local-finite-order-characterization-of-distributions]]

[F2] A compactly supported distribution acts on smooth functions after any cutoff equal to one near its support; its Fourier transform is smooth and polynomially bounded. [[lem-compactly-supported-distributions-extend-to-smooth-functions]] [[thm-fourier-transform-of-a-compactly-supported-distribution-is-a-smooth-polynomially-bounded-multiplier]]

[F3] Local wavefront regularity is rapid localized Fourier decay; cutoff transfer, chart invariance and the criterion of empty wavefront are proved locally. [[def-qftx-local-wavefront-set]] [[lem-qftx-wavefront-chart-invariance]]

[F4] Fourier inversion and seminorm-dominated parameter integrals pass through distribution pairings with their exact hypotheses; smooth common-compact-support parameter pairings differentiate. [[thm-fourier-inversion-on-schwartz-space]] [[lem-schwartz-parameter-pairing-and-integral-interchange]] [[lem-distribution-pairing-with-smooth-parameter-families]]

[F5] Compact chart subsets admit nonnegative smooth cutoffs equal to one on neighborhoods. [[lem-test-function-cutoffs-and-euclidean-localization]]

[F6] Dominated convergence and absolutely integrable Fubini apply; Lebesgue substitution by a $C^1$ diffeomorphism has the absolute Jacobian. A bounded box has its side-product volume. [[thm-dominated-convergence]] [[thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]] [[cor-c-one-change-of-variables-for-l-one-functions]] [[thm-lebesgue-measure-of-a-box-of-every-kind]]

## Proof

**Given:** [A1] and [F1]–[F6].

1.1 We first specify two elementary Fourier estimates used with uniform constants. A compact smooth amplitude $a$ has $|\widehat a(\eta)|\le C_q(1+|\eta|)^{-q}$: for $|\eta|\ge1$ integrate repeatedly in a coordinate with $|\eta_i|\ge|\eta|/\sqrt n$, and use its bounded support for $|\eta|\le1$. If compact distributions $v_j$ share an order-$m$ bound, [F2] gives $|\widehat v_j(\eta)|\le C(1+|\eta|)^m$ uniformly. Multiplication by $a$ corresponds to convolution with $\widehat a$, by [F4]. Uniform rapid decay in a cone transfers to every smaller closed cone under this multiplication: split the convolution into input frequencies in an intermediate regular cone and its complement. In the first region either that frequency is at least half the output size, giving its rapid bound, or the Schwartz factor has size at least half the output size. In the complement, angular separation gives a Schwartz-factor argument bounded below by a positive constant times the sum of both frequency sizes. Taking the decay exponent above $m+n+q+1$ makes each tail integrable and bounds the convolution by $C_q(1+|\eta|)^{-q}$. This proves also smooth-factor wavefront containment, with uniform bounds for families. The parameter-pairing lemma justifies the convolution before the estimates; all resulting integrals are absolutely convergent. [A1, F1, F2, F3, F4, F6, algebra]

1.2 Here is the needed nonstationary estimate, including its dependence on the amplitude. On a fixed compact coordinate set let $\Phi(x;\eta,\xi)=f(x)\cdot\eta-x\cdot\xi$, put $R=|\eta|+|\xi|\ge1$, and suppose $|\nabla_x\Phi|\ge cR$ throughout the amplitude support. Every fixed $x$ derivative of $\nabla\Phi$ is at most $C_\alpha R$. Differentiating the quotient shows that every fixed derivative of $b=\nabla\Phi/(2\pi i|\nabla\Phi|^2)$ is at most $C'_\alpha R^{-1}$. The operator $L=b\cdot\nabla_x$ satisfies $L e^{2\pi i\Phi}=e^{2\pi i\Phi}$. Repeated integration by parts gives
$$\left|\int e^{2\pi i\Phi}a(x)\,dx\right|\le C_q R^{-q}\max_{|\alpha|\le q}\sup|\partial^\alpha a|.$$
Indeed $L^*a=-\sum_i\partial_i(b_i a)$, and induction gives a finite sum of derivatives of $a$ through order $q$ times products of $q$ coefficient derivatives, each contributing $R^{-1}$. Compact support removes boundary terms. Constants depend only on finitely many derivatives of $f$, the compact set and $c$, and are uniform for every frequency in the specified region. The same proof with $\xi=0$ applies to $f(x)\cdot\eta$. [given, algebra]

1.3 We construct the smooth approximants rather than assume a distributional regularization theorem. By [F5] choose $b\ge0$ compactly supported and equal to one on a neighborhood of a closed box of positive volume inside the unit ball. Rescale its support into the unit ball. By [F6], $0<\int b<\infty$; put $\rho=b/\int b$ and $\rho_\epsilon(z)=\epsilon^{-n}\rho(z/\epsilon)$. For a compactly supported distribution $v$, define $v_\epsilon(y)=\langle v(z),\rho_\epsilon(y-z)|dz|\rangle$. It is smooth by [F4], supported in the $\epsilon$-neighborhood of $\operatorname{supp}v$, and has common compact support for $0<\epsilon\le\epsilon_0$. Pairing against a test $h$ and using [F4] gives $\langle v_\epsilon,h\rangle=\langle v,h_\epsilon\rangle$, where $h_\epsilon(z)=\int\rho(w)h(z+\epsilon w)dw$. Every derivative of $h_\epsilon-h$ tends uniformly to zero on the common compact support, by uniform continuity of the corresponding derivative of $h$. The finite-order bound proves weak convergence and a common order bound, because the averaging bounds every derivative seminorm of $h_\epsilon$ by the corresponding seminorm of $h$ on a fixed enlarged compact. The same interchange, or Fourier testing, gives
$$\widehat{v_\epsilon}(\eta)=\widehat\rho(\epsilon\eta)\widehat v(\eta),\qquad |\widehat\rho(\epsilon\eta)|\le\int\rho=1.$$
Hence all polynomial and regular-cone bounds for $v$ are uniform in $\epsilon$. For a smaller local cutoff $a$, first choose $b_0=1$ near its support, inside a wavefront-regularity localization. For sufficiently small $\epsilon$, $a(\rho_\epsilon*v)=a(\rho_\epsilon*(b_0v))$; step 1.1 gives the uniform regular-cone bound. The finitely many initial terms of a sequence $\epsilon_j\downarrow0$ are smooth and have their own finite rapid bounds. Compactness and finite subdivision into regular base/cone patches handle any compact cutoff/cone pair disjoint from $\operatorname{WF}(v)$. Thus these approximants are controlled on each smaller patch. [A1, F1, F2, F4, F5, F6, step 1.1, construct]

2.1 Fix $x_0\in N$ and use one source chart and one target chart about $y_0=f(x_0)$, of positive dimensions for now. On their unit frequency spheres set $K_0=\{\eta:df_{x_0}^T\eta=0\}$. It is compact and disjoint from the compact fiber $\Gamma_{y_0}\cap S^{m-1}$. Choose an open conic neighborhood $V$ of $K_0$ with closure of directions still disjoint from that fiber. Closedness of $\Gamma$ implies that the same disjointness holds over a sufficiently small target neighborhood: otherwise points of $\Gamma$ approaching $y_0$, with directions in the compact closure, have a subsequence with a forbidden limit. Outside $V$, compactness gives $|df_{x_0}^T\eta|\ge2c|\eta|$; shrink the source chart so $|df_x^T\eta|\ge c|\eta|$ there. Shrink again so its image lies in the target neighborhood and choose its target cutoff $\beta$ supported there. If $K_0$ is empty take $V$ empty. Localized Fourier transforms $\widehat{\beta u}$ are rapidly decreasing on $V$: for each compact set of directions in $V$, the regularity witnesses over $\operatorname{supp}\beta$ give a finite base cover and cutoff decomposition; step 1.1 transfers the bounds, and a finite direction cover gives one bound for each order. Choose $V$ initially with closure inside this regular neighborhood, so the bounds hold on its whole set of directions. Only finitely many witnesses are used for each such estimate. [F1, F3, F5, step 1.1, construct]

3.1 On a compact source test support $H$ inside this small patch, choose $\beta=1$ near $f(H)$ and write $v=\beta u$. For $\omega=a(x)|dx|$ define
$$T_a(\eta)=\int e^{2\pi i f(x)\cdot\eta}a(x)dx,\qquad P_f(v)(\omega)=\int\widehat v(\eta)T_a(\eta)d\eta.$$
On $V$, $\widehat v$ decreases arbitrarily fast and $|T_a|\le\operatorname{vol}(H)\sup|a|$. Off $V$, step 1.2 with $\xi=0$ gives $|T_a(\eta)|\le C_q(1+|\eta|)^{-q}p_q(a)$. Take $q>m+m_v+1$, where $m$ is the target dimension and $m_v$ is a finite-order exponent from [F2]. The integrals are absolutely convergent, with $|P_f(v)(\omega)|\le C p_q(a)$. This proves fixed-support continuity, hence a distribution by [F1]. If $v_j\to v$ is controlled, their common finite-order and regular-cone bounds give the same integrable majorant. Weak convergence gives $\widehat v_j(\eta)\to\widehat v(\eta)$ for each fixed $\eta$, so dominated convergence proves $P_f(v_j)(\omega)\to P_f(v)(\omega)$, with a uniform fixed-support order bound. For smooth $v$, Fourier inversion and absolutely integrable Fubini identify the value with $\int v(f(x))\omega(x)$. [A1, F1, F2, F4, F6, step 1.2, step 2.1, construct]

4.1 We prove the output cone estimate with uniform bounds, needed also for controlled limits. Fix an output direction $\xi_0$ at $x_0$ outside $f^*\Gamma$. Shrink the source base patch and its output cone $C$ about $\xi_0$. There is a target singular-direction cone $G$ containing every direction of $\Gamma$ over the target cutoff support such that for $\eta\in G$, $\xi\in C$ and $x$ in the source patch,
$$|df_x^T\eta-\xi|\ge c_1(|\eta|+|\xi|).$$
To see this, normalize $|\eta|+|\xi|=1$. A sequence contradicting the bound has a convergent frequency subsequence and base limit. If the output frequency limit were zero, local transversality from step 2.1 forces the input frequency limit to be zero; if the input limit were zero the equation forces the output limit to be zero. Both contradict normalization. Otherwise the limit is a covector in $f^*\Gamma$ with output direction in the chosen excluded closed cone. Closedness and compactness therefore give the separation after shrinking; choose a slightly larger closed input cone still satisfying it. The complement of $G$ is regular for the localized input. To Fourier transform a compact output localization replace $a$ in step 3.1 by $a(x)e^{-2\pi i x\cdot\xi}$. On $G$, apply step 1.2 and the polynomial input bound. Its integral is at most $C_q(1+|\xi|)^{-q+m+m_v}$ after increasing $q$. Off $G$, use a uniform bound $B$ for $df_x^T$. For $|\eta|\le|\xi|/(2\max(1,B))$, the phase is nonstationary and the same estimate applies. For the remaining regular input frequencies, the bound on $T_a$ and arbitrary input decay give $C_N(1+|\xi|)^{-N+m}$ after integration. Taking these exponents arbitrarily large proves rapid output decay on $C$. The estimates use only common input bounds, so they hold uniformly for controlled sequences. The set $f^*\Gamma$ is closed locally away from the zero section: transversality bounds $|\eta|$ by a constant times $|df_x^T\eta|$ on $\Gamma$ over a smaller compact patch, allowing the same compactness argument. Thus the output weak limits and these uniform bounds give exactly the claimed controlled convergence. [F2, F3, F6, step 1.2, step 2.1, step 3.1, algebra]

5.1 The formula is independent of the allowed target cutoff. For two cutoffs equal to one near $f(H)$, first work inside one of the small target neighborhoods of step 2.1. Their difference times $u$ is a compact distribution $w$ zero on a neighborhood of the compact set $f(H)$. Its mollifications from step 1.3 vanish at every $f(x)$, $x\in H$, for sufficiently small $\epsilon$, since their supports expand by at most $\epsilon$ and the two closed compact sets have positive Euclidean distance. Their ordinary smooth pullbacks therefore pair to zero with $\omega$. The controlled continuity in step 3.1 makes $P_f(w)(\omega)=0$. If the two originally allowed target neighborhoods differ, insert a third cutoff supported in their overlap and equal to one near the image of a smaller source support; compare with it in each neighborhood and use a finite decomposition of $\omega$. This also proves locality and independence of extensions outside the target chart. [F3, F5, step 1.3, step 3.1, construct]

5.2 Controlled convergence is invariant under a smooth change of coordinates. For completeness, the Fourier estimate is the one for a diffeomorphism, not an assumed arbitrary-map pullback. In source coordinates $y=\psi(z)$, the localized transformed Fourier value pairs $v_j$ with $a(\psi(z))|\det D\psi(z)|e^{-2\pi i\psi(z)\cdot\eta}$. Insert a cutoff equal to one on this compact support and use Fourier inversion [F4]. The resulting phase is $z\cdot\zeta-\psi(z)\cdot\eta$. In the near-stationary region $\zeta$ is comparable to $\eta$ and lies in a regular source cone whenever the transformed compact base/output cone avoids the transported $\Gamma$; there use the uniform regular bounds and a polynomial volume estimate. On the complementary region $|\zeta-D\psi(z)^T\eta|\ge c(|\zeta|+|\eta|)$; step 1.2 and the uniform polynomial bound give arbitrary rapid decay after integration. This is precisely the chart-invariance estimate with constants uniform in $j$. Common finite-order bounds transfer by the finite chain/product rules for compactly supported test densities, and weak convergence transfers because diffeomorphism pullback is already defined by the density transpose. Hence the same smooth approximants from step 1.3, expressed in either target chart, are controlled. Both local candidates in step 3.1 are their limits and equal the same ordinary smooth pullback at every stage. They are therefore equal. A change of source chart similarly gives the same smooth integrals by the absolute-Jacobian substitution in [F6], followed by the controlled limit. This proves coordinate covariance of the constructed scalar distribution and compatibility with the previously defined diffeomorphism pullback. [A1, F1, F2, F3, F4, F6, step 1.2, step 1.3, step 3.1, step 4.1, algebra]

6.1 We now glue; no assumption that $f(\operatorname{supp}\omega)$ fits one chart is made. Cover the compact support of a test density by finitely many small source patches of step 2.1. Shrink the covering patches still covering that support, take compact smooth cutoffs $b_i$ supported in the original patches and equal to one on the smaller ones, and put $s=\sum_i b_i$. It is positive near the test support. With another compact cutoff $h=1$ there and supported where $s>0$, set $a_i=hb_i/s$ there and zero elsewhere. They are smooth, subordinate, and sum to one near the test support. Define $\langle f^*u,\omega\rangle=\sum_i P_{f,i}(u)(a_i\omega)$. On an overlap the two terms are equal: shrink around each point to a common source patch and a target chart inside the two target-chart overlap, use step 5.1 for cutoffs and step 5.2 for coordinates, and decompose a compact overlap test into finitely many such patches. Two partitions now give the same answer by the double sum on $a_i a'_j\omega$. This proves linearity, independence and compatibility with restriction. For each fixed compact support choose this finite cover once. Each local pairing has a finite seminorm estimate by step 3.1; multiplication by the fixed $a_i$ is bounded by finitely many compact derivative seminorms. Their finite sum is continuous on that fixed-support space, and the test-density topology in [F1] gives a global distribution. Local estimates in step 4.1 give its wavefront bound and controlled sequential continuity. [F1, F5, step 2.1, step 3.1, step 4.1, step 5.1, step 5.2, construct]

7.1 If a source or target coordinate dimension is zero, every local distribution there is a scalar function, and the relevant local map is an ordinary smooth map from or to a point. For a zero-dimensional source, transversality forces the target distribution to be smooth near its image point, by [F3], so evaluation is defined; for a zero-dimensional target its local scalar pulls back as a constant. The finite-test gluing above handles zero-dimensional components, and an empty source has only the zero test space and its unique distribution. Zero inputs pull back to zero. Nonproper $f$ has required no extra hypothesis: each construction used only a compact source test support and its compact image. Finally any other rule agreeing on smooth inputs and obeying the stated controlled sequential continuity agrees on each small patch by the actual approximants of step 1.3, hence agrees globally by step 6.1. All coverings and comparisons for one test use finite choice only; [A1] enters exactly through the declared Fourier and Lebesgue suppliers. [A1, F1, F3, step 1.3, step 6.1, algebra] ∎

## Remarks

The local separation in step 2.1 precedes every Fourier construction. Transversality at points over $f(x)$ is not replaced by a single conic separation over the image of an arbitrary compact source set. Smooth approximation here has explicitly proved common finite-order and rapid-decay bounds; weak convergence alone would not justify a singular pullback limit.
