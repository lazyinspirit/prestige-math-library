---
id: thm-nrqm-coulomb-transported-radial-endpoint-realization
aliases: [nrqm-coulomb-transported-radial-endpoint-realization]
kind: theorem
domain: mathematics
title: "Transported radial endpoint realization"
status: published
origin: pipeline
dependency_level: 6
deps: [thm-orthogonal-decomposition-by-a-closed-subspace, thm-nrqm-coulomb-angular-radial-unitary-reduction, thm-nrqm-coulomb-infinitesimal-kinetic-bound, lem-nrqm-coulomb-three-dimensional-hardy-bound, thm-nrqm-orbital-and-spin-sphere-onb, thm-nrqm-orbital-and-spin-sphere-laplacian-diagonal-domain, def-nrqm-coulomb-closed-semibounded-forms, lem-spectral-form-domain-and-core-of-a-semibounded-operator, thm-riesz-representation-for-hilbert-space, thm-self-adjointness-range-criterion, def-densely-defined-closed-and-closable-operator, def-symmetric-self-adjoint-and-essentially-self-adjoint, def-adjoint-of-a-densely-defined-unbounded-operator, def-relative-boundedness-with-respect-to-an-operator, def-hilbert-space, def-l-p-space-as-a-quotient-by-null-functions, def-complex-lp-and-euclidean-test-function-conventions, def-sobolev-space-wkp-and-its-norm, thm-plancherel, lem-weak-derivatives-are-polynomial-fourier-multipliers, cor-compactly-supported-smooth-functions-are-dense-in-wkp-of-rn, cor-one-dimensional-w-one-p-functions-have-absolutely-continuous-representatives, thm-polar-coordinates-formula-for-lebesgue-measure, thm-divergence-theorem-for-bounded-piecewise-c-one-domains, cor-vector-forms-of-the-divergence-theorem, cor-cauchy-schwarz-inequality-for-l-two, thm-dominated-convergence, thm-spectral-theorem-for-unbounded-self-adjoint-operators, def-countable-choice, def-axiom-of-choice]
dependency_roles:
  thm-orthogonal-decomposition-by-a-closed-subspace: mathematical-premise
  thm-nrqm-coulomb-angular-radial-unitary-reduction: mathematical-premise
  thm-nrqm-coulomb-infinitesimal-kinetic-bound: mathematical-premise
  lem-nrqm-coulomb-three-dimensional-hardy-bound: mathematical-premise
  thm-nrqm-orbital-and-spin-sphere-onb: mathematical-premise
  thm-nrqm-orbital-and-spin-sphere-laplacian-diagonal-domain: mathematical-premise
  def-nrqm-coulomb-closed-semibounded-forms: mathematical-premise
  lem-spectral-form-domain-and-core-of-a-semibounded-operator: mathematical-premise
  thm-riesz-representation-for-hilbert-space: mathematical-premise
  thm-self-adjointness-range-criterion: mathematical-premise
  def-densely-defined-closed-and-closable-operator: mathematical-premise
  def-symmetric-self-adjoint-and-essentially-self-adjoint: mathematical-premise
  def-adjoint-of-a-densely-defined-unbounded-operator: mathematical-premise
  def-relative-boundedness-with-respect-to-an-operator: mathematical-premise
  def-hilbert-space: mathematical-premise
  def-l-p-space-as-a-quotient-by-null-functions: mathematical-premise
  def-complex-lp-and-euclidean-test-function-conventions: mathematical-premise
  def-sobolev-space-wkp-and-its-norm: mathematical-premise
  thm-plancherel: mathematical-premise
  lem-weak-derivatives-are-polynomial-fourier-multipliers: mathematical-premise
  cor-compactly-supported-smooth-functions-are-dense-in-wkp-of-rn: mathematical-premise
  cor-one-dimensional-w-one-p-functions-have-absolutely-continuous-representatives: mathematical-premise
  thm-polar-coordinates-formula-for-lebesgue-measure: mathematical-premise
  thm-divergence-theorem-for-bounded-piecewise-c-one-domains: mathematical-premise
  cor-vector-forms-of-the-divergence-theorem: mathematical-premise
  cor-cauchy-schwarz-inequality-for-l-two: mathematical-premise
  thm-dominated-convergence: mathematical-premise
  thm-spectral-theorem-for-unbounded-self-adjoint-operators: mathematical-premise
  def-countable-choice: mathematical-premise
  def-axiom-of-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "G. Teschl, Mathematical Methods in Quantum Mechanics, 1st edition 2009, Section 9.1 pp. 181-186 (Sturm-Liouville operators, boundary conditions and self-adjoint realisations) and Section 10.4 p. 230 (Theorem 10.8: domain and essential spectrum of the radial Coulomb operator A_l)"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe.pdf"
    - title: "Haim Brezis, Functional Analysis, Sobolev Spaces and Partial Differential Equations (Springer Universitext 2011), Section 8.6 pp. 231-233 (eigenfunction expansions and the variational characterisation of one-dimensional eigenvalues) and Section 9.5 pp. 291-298 (variational formulation of boundary value problems)"
      url: "https://www.math.toronto.edu/almut/Brezis.pdf"
---

## Statement

Assume the Axiom of Countable Choice and the Axiom of Choice
([[def-countable-choice]], [[def-axiom-of-choice]]). Let $\gamma\ge0$, let
$C:=-\Delta-\gamma/|\cdot|$ on $D(C)=W^{2,2}(\mathbb R^3;\mathbb C)$ be the
self-adjoint operator of [[thm-nrqm-coulomb-infinitesimal-kinetic-bound]] (c) when $\gamma>0$, and the free Fourier multiplier when $\gamma=0$,
and let $U$ be the unitary of
[[thm-nrqm-coulomb-angular-radial-unitary-reduction]] from $L^2(\mathbb R^3)$
onto $K=\bigoplus_{(l,m)}L^2\bigl((0,\infty),dr\bigr)$, with coefficients
$u_{lm}=r\,c_{lm}$. For $l\ge0$ let $V_l$ be the closure of
$C_c^\infty((0,\infty);\mathbb C)$ in $L^2(0,\infty;\mathbb C)$ for the norm
$$\|u\|_{V_l}^2:=\int_0^\infty\Bigl(\Bigl|u'(r)-\frac{u(r)}{r}\Bigr|^2+\frac{l(l+1)}{r^2}|u(r)|^2+|u(r)|^2\Bigr)dr,$$
realized as the space of $u\in L^2$ with $u'-\frac ur\in L^2$ and
$\int|u|^2/r^2<\infty$ in the distributional sense
([[def-densely-defined-closed-and-closable-operator]],
[[def-l-p-space-as-a-quotient-by-null-functions]]), and define
$$a_l(u,v):=\int_0^\infty\Bigl[\overline{\Bigl(v'(r)-\frac{v(r)}{r}\Bigr)}\Bigl(u'(r)-\frac{u(r)}{r}\Bigr)+\frac{l(l+1)}{r^2}u(r)\overline{v(r)}-\frac{\gamma}{r}u(r)\overline{v(r)}\Bigr]dr .$$
Then:

(a) $V_l$ is a dense linear subspace of $L^2(0,\infty)$ that is a Hilbert space for $\|\cdot\|_{V_l}$, the inclusion $V_l\hookrightarrow L^2(0,\infty)$ is continuous, and $a_l$ is a bounded symmetric sesquilinear form on $V_l$ that is closed and semibounded below;

(b) the operator $A_l$ defined by
$$D(A_l):=\Bigl\{u\in V_l:\exists\,f\in L^2(0,\infty)\ \text{with}\ a_l(u,v)=\langle f,v\rangle\ \forall v\in V_l\Bigr\},\qquad A_lu:=f,$$
is well defined, self-adjoint and bounded below; $D(A_l)$ is dense in $V_l$ in the norm $\|\cdot\|_{V_l}$ and $a_l(u,u)=\langle A_lu,u\rangle$ for $u\in D(A_l)$;

(c) for every $u\in D(A_l)$ the distributional identity $-u''+\bigl(l(l+1)/r^2-\gamma/r\bigr)u=A_lu$ holds on $(0,\infty)$; consequently $u\in H^2_{\mathrm{loc}}(0,\infty)$, $u$ is of class $C^1$ with $u'$ locally absolutely continuous, and the identity holds pointwise almost everywhere on $(0,\infty)$; if moreover $A_lu=Eu$ for some constant $E\in\mathbb C$ (in particular if $u$ is an eigenfunction of $A_l$), then $u$ is of class $C^2$ on $(0,\infty)$ and the differential equation holds pointwise there;

(d) *block identity.* For $\psi\in L^2(\mathbb R^3)$ with $U\psi=(u_{lm})$ one has $\psi\in D(C)$ if and only if $u_{lm}\in D(A_l)$ for every $(l,m)$ and $\sum_{l,m}\bigl(\|u_{lm}\|^2+\|A_lu_{lm}\|^2\bigr)<\infty$; then $U(C\psi)=(A_lu_{lm})_{l,m}$. Equivalently $UCU^*=\bigoplus_{(l,m)}A_l$ on $K$;

(e) *eigenfunction transport.* If $u\in D(A_l)$ and $A_lu=Eu$ for some $E\in\mathbb R$, then the function $\psi(x):=u(r)Y_{l0}(\Omega)/r$ (with $x=r\Omega$) lies in $H^2(\mathbb R^3;\mathbb C)$, satisfies $C\psi=E\psi$, and $r\mapsto u(r)/r$ is bounded on $(0,1]$; moreover $\psi$ is bounded and continuous on $\mathbb R^3$.

No endpoint boundary condition is imposed by hand: the domain $D(A_l)$ is the
form-domain realization transported from $D(C)=H^2(\mathbb R^3)$, and no
physical interpretation of $A_l$, $C$, $U$ or $\gamma$ is asserted.

## Facts & Assumptions

**Given:** the constants and operators $\gamma,C,U$; the form domain $V_l$ and form $a_l$; a parameter $\mu$ chosen below; function spaces as in the statement.

[F1] $U$ is unitary and its inverse is the finite-subset-net sum $\psi=\sum_{l,m}u_{lm}(r)Y_{lm}(\Omega)/r$; for $\psi\in C_c^\infty(\mathbb R^3\setminus\{0\})$ the coefficients are $u_{lm}=r\int\psi(r\Omega)\overline{Y_{lm}}d\sigma$ ([[thm-nrqm-coulomb-angular-radial-unitary-reduction]]).

[F2] $C$ is self-adjoint on $D(C)=H^2(\mathbb R^3;\mathbb C)$, $C\ge-M_0$ for a finite $M_0$, and $\langle C\psi,\psi\rangle=\int_{\mathbb R^3}|\nabla\psi|^2dx-\gamma\int_{\mathbb R^3}|\psi|^2|x|^{-1}dx$ for $\psi\in D(C)$ ([[thm-nrqm-coulomb-infinitesimal-kinetic-bound]], [[thm-plancherel]], [[lem-weak-derivatives-are-polynomial-fourier-multipliers]]).

[F3] $|u(r)|\le r^{1/2}\|u/r\|_{L^2(r,\infty)}+r^{1/2}\bigl(\int_r^\infty|u'-\tfrac ur|^2\bigr)^{1/2}$-type endpoint bounds are not assumed; instead the following elementary inequalities are used: $2|ab|\le\varepsilon a^2+\varepsilon^{-1}b^2$, $\bigl|\int f\overline g\bigr|\le\|f\|_2\|g\|_2$, and $C_c^\infty((0,\infty))$ is dense in $L^2(0,\infty)$ ([[cor-cauchy-schwarz-inequality-for-l-two]], [[cor-compactly-supported-smooth-functions-are-dense-in-wkp-of-rn]]).

[F4] Orthogonal decomposition by a closed subspace is available under CC ([[thm-orthogonal-decomposition-by-a-closed-subspace]]). Riesz representation in a Hilbert space: every bounded conjugate-linear functional on $(V_l,\|\cdot\|_{V_l})$ is represented uniquely by an element of $V_l$ ([[thm-riesz-representation-for-hilbert-space]]).

[F5] Range criterion: a densely defined symmetric operator $T$ is self-adjoint if and only if it is closed and $\operatorname{ran}(T-z)=H$ for every nonreal $z$; if additionally $T$ is symmetric and $\operatorname{ran}(T+\mu)=H$ for one real $\mu$ and $\ker(T^*+\mu)=\{0\}$, then $T$ is self-adjoint ([[thm-self-adjointness-range-criterion]], [[def-symmetric-self-adjoint-and-essentially-self-adjoint]]).



[F7] On $C_c^\infty(\mathbb R^3\setminus\{0\})$ one has $\int|\nabla\psi|^2=\int(-\Delta\psi)\overline\psi$ by the divergence theorem applied to the compactly supported field $\overline\psi\nabla\psi$, and $C_c^\infty(\mathbb R^3\setminus\{0\})$ is dense in $H^1(\mathbb R^3;\mathbb C)$: for $u\in H^1$ and the radial cutoffs $\eta_\varepsilon$ with $\eta_\varepsilon=1$ off $B(0,\sqrt\varepsilon)$, $0$ on $B(0,\varepsilon)$ and $|\nabla\eta_\varepsilon|\le c/\bigl(r\log(1/\varepsilon)\bigr)$, the Hardy bound of [[lem-nrqm-coulomb-three-dimensional-hardy-bound]] gives $\|u\nabla\eta_\varepsilon\|_2^2\le4c^2\|\nabla u\|_2^2/\log(1/\varepsilon)^2\to0$ and dominated convergence gives $\|\eta_\varepsilon u-u\|_{H^1}\to0$ ([[thm-divergence-theorem-for-bounded-piecewise-c-one-domains]], [[cor-vector-forms-of-the-divergence-theorem]], [[thm-dominated-convergence]], [[def-sobolev-space-wkp-and-its-norm]]).

[F8] For every Borel function $\varphi$ with $|\varphi|\le1$ and every $\psi\in H^2$, the identity $\mathcal F_2(-\Delta\psi)(\xi)=4\pi^2|\xi|^2\mathcal F_2\psi(\xi)$ and Cauchy-Schwarz give $|\psi(x)|\le\|(1+|\xi|^2)\mathcal F_2\psi\|_2\,\|(1+|\xi|^2)^{-1}\|_2$, so $H^2(\mathbb R^3)\subseteq C_b(\mathbb R^3)$ with a continuous representative ([[thm-plancherel]], [[lem-weak-derivatives-are-polynomial-fourier-multipliers]], [[cor-cauchy-schwarz-inequality-for-l-two]]).

[F9] One-dimensional Sobolev regularity: for $-\infty<a<b<\infty$ every class in $W^{1,2}(a,b;\mathbb C)$ has exactly one continuous representative that is absolutely continuous on $[a,b]$, with $u(x)-u(y)=\int_y^x Du(t)\,dt$; applied to $u$ and then to $u'$, a class with weak derivatives $u',u''\in L^2(a,b)$ therefore has a $C^1$ representative with $u'$ absolutely continuous and $u'(x)-u'(y)=\int_y^xu''(t)\,dt$ ([[cor-one-dimensional-w-one-p-functions-have-absolutely-continuous-representatives]], [[def-sobolev-space-wkp-and-its-norm]]).

[F10] Polar coordinates: $\int_{\mathbb R^3}g\,dx=\int_0^\infty r^2\int_{S^2}g(r\Omega)\,d\sigma(\Omega)\,dr$ for every Borel $g\ge0$; in particular for $\psi(x)=u(r)Y_{lm}(\Omega)/r$ with $u\in C_c^\infty((0,\infty))$ one has $\int_{\mathbb R^3}|\psi|^2|x|^{-1}dx=\int_0^\infty|u(r)|^2r^{-1}dr$ ([[thm-polar-coordinates-formula-for-lebesgue-measure]], [[thm-nrqm-orbital-and-spin-sphere-onb]]).

## Proof

1.1 Put $D_0u=u'-u/r$ on $C_c^\infty(0,\infty)$. This operator is closable: if $u_n\to0$ and $D_0u_n\to g$ in $L^2$, then on every compact subinterval $u_n/r\to0$ in $L^2$ and $u_n'\to0$ distributionally, so $g=0$ distributionally and almost everywhere. Integration of $(|u|^2/r)'$ on the core gives $\|D_0u\|_2^2=\|u'\|_2^2$ and $\|u/r\|_2^2=-2\operatorname{Re}\int(u/r)\overline{D_0u}$; consequently $\|u/r\|_2\le2\|D_0u\|_2$. Applied to differences, these identities make the defining $V_l$ norm equivalent to the $H^1$ norm for each fixed $l$, and identify its completion in $L^2$ with $H_0^1(0,\infty)$. In particular the graph completion has injective first projection, its derivative is distributional, and it is a Hilbert space densely and continuously embedded in $L^2$. No fixed-$l$ equivalence constant will be used in an infinite channel sum. [given, F3, algebra]

1.2 Let $\mathcal W$ be the Hilbert direct sum of $V_l$ over $(l,m)$, with squared norm $\sum\|u_{lm}\|_{V_l}^2$. On finite compact smooth radial sums, the corrected angular-radial block identity and Euclidean integration by parts give $\|\psi\|_{H^1}^2=\sum\|u_{lm}\|_{V_l}^2$ and $q(\psi,\varphi)=\sum a_l(u_{lm},v_{lm})$, where $q=\int\nabla\psi\cdot\overline{\nabla\varphi}-\gamma\int\psi\overline\varphi/|x|$. Polar integration gives the actual $r^{-1}$ potential weight. To establish the necessary full $H^1$ density, first use smooth density and the origin-removing cutoffs of [F7], followed by compact support and mollification, to reduce to $\psi\in C_c^\infty(\mathbb R^3\setminus\{0\})$. [F1, F2, F7, F10, algebra]

2.1 The trace at zero of an $H^1(0,1)$ function exists by $|u(t)-u(s)|\le|t-s|^{1/2}\|u'\|_2$, and is continuous in its $H^1$ norm: choose a point where $|u|\le\|u\|_{L^2(0,1)}$ and use this estimate to bound $|u(0)|$ by $\|u\|_2+\|u'\|_2$. Thus the completion in step 1.1 has zero trace. Conversely $u,u'-u/r,u/r\in L^2$ gives $u'\in L^2$ and a trace; its trace must be zero since otherwise $\int|u|^2/r^2$ diverges. Take a smooth cutoff $\chi_\varepsilon$ vanishing below $\varepsilon$, one beyond $2\varepsilon$, with $|\chi_\varepsilon'|\le c/\varepsilon$; then $\|\chi_\varepsilon'u\|_2^2\le4c^2\int_0^{2\varepsilon}|u|^2/r^2\to0$, and all omitted function, derivative and weighted tails tend to zero. A cutoff between $R$ and $2R$ adds a derivative bounded by $(c/R)\|u\|_{L^2(R,2R)}$. Mollify the resulting compactly supported functions on intervals away from zero; $H^1$ convergence and boundedness of $1/r$ there give core convergence in $V_l$. This proves exactly the stated distributional realization, including $l=0$, and the first part of (a). [step 1.1, F3, F9, algebra]

2.2 For such an annular smooth $\psi$, let $\psi_N=P_N\psi$ be the angular truncation $l\le N$. All its radial coefficients are smooth with the same annular support. The polar formula gives $\Delta\psi_N=P_N\Delta\psi$: radial differentiation commutes with the finite projection, and angular integration by parts gives $\langle-\Delta_{S^2}\psi(r\cdot),Y_{lm}\rangle=\lambda_l\langle\psi(r\cdot),Y_{lm}\rangle$. This latter identity uses only the supplied finite-span eigenidentity, with a local Green argument for the other smooth function: excise caps of angular radius $\delta$, integrate the chart expression, cancel periodic azimuth boundaries, and let $\delta\downarrow0$; smooth intrinsic gradients are bounded and cap boundaries have length $O(\delta)$, so their terms vanish. Angular completeness and polar integration give $\psi_N\to\psi$ and $\Delta\psi_N\to\Delta\psi$ in $L^2$. For the smooth annular residual $R_N$, integration by parts gives $\|\nabla R_N\|^2=\langle-\Delta R_N,R_N\rangle\le\|\Delta R_N\|\|R_N\|\to0$. Thus finite compact smooth radial sums are $H^1$-dense with the gradient tail actually controlled. [step 1.2, F1, F7, F10, algebra]

3.1 Write $D u=u'-u/r$ and $\lambda_l=l(l+1)$. Hardy and Cauchy–Schwarz give $|\int u\overline v/r|\le2\|Du\|_2\|v\|_2$; the derivative and angular terms are bounded by their corresponding $V_l$ norms. Hence $a_l$ is bounded and symmetric. The inequality $2\gamma xy\le x^2/2+2\gamma^2y^2$ gives the uniform bound $a_l[u]\ge\frac12\|Du\|_2^2+\lambda_l\|u/r\|_2^2-2\gamma^2\|u\|_2^2$. With $\mu=2\gamma^2+1$, the shifted form $b_l=a_l+\mu\langle\cdot,\cdot\rangle$ is a complete inner product with $\frac12\|u\|_{V_l}^2\le b_l[u]\le c_\gamma\|u\|_{V_l}^2$, uniformly in $l$. Riesz representation on $(V_l,b_l)$ solves $b_l(u,v)=\langle f,v\rangle$ for every $f\in L^2$, so the actual domain definition gives $u\in D(A_l)$ and $(A_l+\mu)u=f$. Testing $v=u$ gives uniqueness. This proves closedness and semiboundedness of the form and surjectivity of its associated shifted operator. [step 1.1, step 2.1, F3, F4, algebra]

4.1 For $u\in C_c^\infty(0,\infty)$, integration by parts gives $a_l(u,v)=\langle L_lu,v\rangle$ first for core $v$, where $L_lu=-u''+(\lambda_l/r^2-\gamma/r)u\in L^2$. Both sides are continuous in $V_l$, so the identity extends to every $v\in V_l$. Thus the core is contained in $D(A_l)$ and this operator domain is $L^2$-dense before any adjoint is taken. The representing $f$ is unique by $V_l$ density. Symmetry of the form gives symmetry of $A_l$. For $y\in D(A_l^*)$, solve $(A_l+\mu)x=(A_l^*+\mu)y$ by step 3.1; then $y-x\in\ker(A_l^*+\mu)=\operatorname{ran}(A_l+\mu)^\perp=0$. Hence $A_l=A_l^*$ on exactly its defined domain, and $\langle A_lu,u\rangle=a_l[u]\ge-2\gamma^2\|u\|^2$. [step 3.1, step 2.1, F5, algebra]

4.2 Finite-support families with core coordinates are dense in $\mathcal W$, since each $V_l$ is the core completion. Step 2.2 therefore extends the finite-core isometry onto $\mathcal W$, with its $L^2$ extension agreeing with $U$: $U(H^1)=\mathcal W$. The full polarized form identity extends by continuity. In particular the infinite Coulomb sum is uniformly bounded by $\sum|\int u_{lm}\overline{v_{lm}}/r|\le2(\sum\|Du_{lm}\|^2)^{1/2}(\sum\|v_{lm}\|^2)^{1/2}$; kinetic and angular sums have their corresponding Cauchy–Schwarz bounds. This uses no equivalence constant growing with $l$. [step 1.1, step 3.1, step 1.2, step 2.2, F3, algebra]

5.1 If $w\in V_l$ is $b_l$-orthogonal to $D(A_l)$, the solution $u_f=(A_l+\mu)^{-1}f$ from step 3.1 gives $0=b_l(u_f,w)=\langle f,w\rangle$ for every $f\in L^2$; therefore $w=0$. Orthogonal decomposition in the Hilbert space $(V_l,b_l)$ implies that the closure of $D(A_l)$ is all $V_l$. Norm equivalence makes this the required density in $\|\cdot\|_{V_l}$ and completes (a),(b). This proves form density directly, without a spectral-form assertion. [step 3.1, step 4.1, F4, algebra]

5.2 For $u\in D(A_l)$, test its form identity against core $v$. Distributional integration by parts gives $-u''+(\lambda_l/r^2-\gamma/r)u=A_lu$; the cross terms in $(u'-u/r)\overline{(v'-v/r)}$ cancel by integrating $(u\overline v/r)'$. On a compact interval away from zero the potential coefficient is bounded, so $u''\in L^2$ there and step 2.1 gives $u,u'\in L^2$. Thus $u\in H^2_{\mathrm{loc}}$, and [F9] gives its $C^1$ representative and locally absolutely continuous derivative. If $A_lu=Eu$, the right side for $u''$ is continuous, so integration makes $u'$ of class $C^1$ and the equation holds everywhere with $u\in C^2$. This proves (c) without regularity at the origin. [step 4.1, step 2.1, F9, algebra]

5.3 Define $\widehat A=\bigoplus A_l$ on exactly the square-summable graph domain in (d). Finite-support domain vectors are dense and coordinate symmetry gives symmetry. Self-adjointness of each $A_l$ gives $\|(A_l\pm i)^{-1}\|\le1$, by $\|(A_l\pm i)u\|^2=\|A_lu\|^2+\|u\|^2$. For $f\in K$, take $u_{lm}=(A_l\pm i)^{-1}f_{lm}$; the coordinate norm sum is bounded by $\|f\|^2$, and $A_lu_{lm}=f_{lm}\mp iu_{lm}$ has square-summable norms. Thus both ranges of $\widehat A\pm i$ are all $K$, proving self-adjointness by the symmetric range criterion. Coordinate closedness also directly proves the graph is closed. [step 4.1, F5, algebra]

6.1 For $\psi\in H^2=D(C)$ and $\varphi\in H^1$, weak Fourier integration by parts and three-dimensional Hardy give $q(\psi,\varphi)=\langle C\psi,\varphi\rangle$: prove it first for core $\varphi$ and extend by $H^1$ continuity, using $\psi/|x|\in L^2$. By step 4.2, $u=U\psi\in\mathcal W$. Fix one coordinate $j=(l,m)$ and $v\in V_l$; then $\varphi=U^{-1}(v\delta_j)\in H^1$ and the full form identity gives $a_l(u_j,v)=\langle(UC\psi)_j,v\rangle$. Hence $u_j\in D(A_l)$ and $A_lu_j=(UC\psi)_j$. The latter coordinates are square summable, so $C\subseteq U^*\widehat A U$. Both operators are self-adjoint; taking adjoints reverses the inclusion, giving equality. This proves the full iff graph-domain statement and action formula (d), also for $\gamma=0$ using its explicit free operator. [step 4.2, step 5.3, F1, F2, F7, algebra]

7.1 If $A_lu=Eu$, the one-block family $u\delta_{(l,0)}$ belongs to $D(\widehat A)$; step 6.1 gives $\psi=U^{-1}(u\delta_{(l,0)})\in H^2$, $C\psi=E\psi$, and $\psi=u(r)Y_{l0}(\Omega)/r$ almost everywhere. Its $H^2$ Fourier transform lies in $L^1$ by Cauchy–Schwarz with $(1+|\xi|^2)^{-1}\in L^2$, so the absolutely convergent inverse defines a bounded continuous representative by dominated convergence, agreeing with the $L^2$ inverse by truncation. Step 5.2 and continuity of $Y_{l0}$ make the polar expression continuous away from zero; two continuous functions agreeing almost everywhere on that open set agree everywhere, since any nonzero difference persists on a positive-measure neighborhood. Choose $\Omega_0$ with $Y_{l0}(\Omega_0)\ne0$; then $|u(r)/r|\le\|\psi\|_\infty/|Y_{l0}(\Omega_0)|$ for $0<r\le1$. This proves (e) with genuine operator-domain transport and justifies evaluation on a fixed ray. All clauses (a)–(e) follow. [step 5.2, step 6.1, F1, F8, F9, algebra] ∎


## Remarks

Form-domain lemma: for a self-adjoint operator $A\ge c$ with quadratic form $q_A[x]=\int\lambda\,dE_x$, the domain $D(A)$ is dense in the form domain $Q(A)=D((A-cI)^{1/2})$ in the norm $\|x\|_Q^2=\|x\|^2+\|(A-cI)^{1/2}x\|^2$, and $q_A[x]=\langle Ax,x\rangle$ for $x\in D(A)$ ([[lem-spectral-form-domain-and-core-of-a-semibounded-operator]], [[thm-spectral-theorem-for-unbounded-self-adjoint-operators]]).
