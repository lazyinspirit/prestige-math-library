---
id: thm-nrqm-coulomb-transported-radial-endpoint-realization
aliases: [nrqm-coulomb-transported-radial-endpoint-realization]
kind: theorem
domain: mathematics
title: "Transported radial endpoint realization"
status: draft
origin: pipeline
dependency_level: 6
deps: [thm-nrqm-coulomb-angular-radial-unitary-reduction, thm-nrqm-coulomb-infinitesimal-kinetic-bound, lem-nrqm-coulomb-three-dimensional-hardy-bound, thm-nrqm-orbital-and-spin-sphere-onb, thm-nrqm-orbital-and-spin-sphere-laplacian-diagonal-domain, def-nrqm-coulomb-closed-semibounded-forms, lem-spectral-form-domain-and-core-of-a-semibounded-operator, thm-riesz-representation-for-hilbert-space, thm-self-adjointness-range-criterion, def-densely-defined-closed-and-closable-operator, def-symmetric-self-adjoint-and-essentially-self-adjoint, def-adjoint-of-a-densely-defined-unbounded-operator, def-relative-boundedness-with-respect-to-an-operator, def-hilbert-space, def-l-p-space-as-a-quotient-by-null-functions, def-complex-lp-and-euclidean-test-function-conventions, def-sobolev-space-wkp-and-its-norm, thm-plancherel, lem-weak-derivatives-are-polynomial-fourier-multipliers, cor-compactly-supported-smooth-functions-are-dense-in-wkp-of-rn, cor-one-dimensional-w-one-p-functions-have-absolutely-continuous-representatives, thm-polar-coordinates-formula-for-lebesgue-measure, thm-divergence-theorem-for-bounded-piecewise-c-one-domains, cor-vector-forms-of-the-divergence-theorem, cor-cauchy-schwarz-inequality-for-l-two, thm-dominated-convergence, thm-spectral-theorem-for-unbounded-self-adjoint-operators, def-countable-choice, def-axiom-of-choice]
dependency_roles:
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
([[def-countable-choice]], [[def-axiom-of-choice]]). Let $\gamma>0$, let
$C:=-\Delta-\gamma/|\cdot|$ on $D(C)=W^{2,2}(\mathbb R^3;\mathbb C)$ be the
self-adjoint operator of [[thm-nrqm-coulomb-infinitesimal-kinetic-bound]] (c),
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

[F4] Riesz representation in a Hilbert space: every bounded conjugate-linear functional on $(V_l,\|\cdot\|_{V_l})$ is represented uniquely by an element of $V_l$ ([[thm-riesz-representation-for-hilbert-space]]).

[F5] Range criterion: a densely defined symmetric operator $T$ is self-adjoint if and only if it is closed and $\operatorname{ran}(T-z)=H$ for every nonreal $z$; if additionally $T$ is symmetric and $\operatorname{ran}(T+\mu)=H$ for one real $\mu$ and $\ker(T^*+\mu)=\{0\}$, then $T$ is self-adjoint ([[thm-self-adjointness-range-criterion]], [[def-symmetric-self-adjoint-and-essentially-self-adjoint]]).

[F6] Form-domain lemma: for a self-adjoint operator $A\ge c$ with quadratic form $q_A[x]=\int\lambda\,dE_x$, the domain $D(A)$ is dense in the form domain $Q(A)=D((A-cI)^{1/2})$ in the norm $\|x\|_Q^2=\|x\|^2+\|(A-cI)^{1/2}x\|^2$, and $q_A[x]=\langle Ax,x\rangle$ for $x\in D(A)$ ([[lem-spectral-form-domain-and-core-of-a-semibounded-operator]], [[thm-spectral-theorem-for-unbounded-self-adjoint-operators]]).

[F7] On $C_c^\infty(\mathbb R^3\setminus\{0\})$ one has $\int|\nabla\psi|^2=\int(-\Delta\psi)\overline\psi$ by the divergence theorem applied to the compactly supported field $\overline\psi\nabla\psi$, and $C_c^\infty(\mathbb R^3\setminus\{0\})$ is dense in $H^1(\mathbb R^3;\mathbb C)$: for $u\in H^1$ and the radial cutoffs $\eta_\varepsilon$ with $\eta_\varepsilon=1$ off $B(0,\sqrt\varepsilon)$, $0$ on $B(0,\varepsilon)$ and $|\nabla\eta_\varepsilon|\le c/\bigl(r\log(1/\varepsilon)\bigr)$, the Hardy bound of [[lem-nrqm-coulomb-three-dimensional-hardy-bound]] gives $\|u\nabla\eta_\varepsilon\|_2^2\le4c^2\|\nabla u\|_2^2/\log(1/\varepsilon)^2\to0$ and dominated convergence gives $\|\eta_\varepsilon u-u\|_{H^1}\to0$ ([[thm-divergence-theorem-for-bounded-piecewise-c-one-domains]], [[cor-vector-forms-of-the-divergence-theorem]], [[thm-dominated-convergence]], [[def-sobolev-space-wkp-and-its-norm]]).

[F8] For every Borel function $\varphi$ with $|\varphi|\le1$ and every $\psi\in H^2$, the identity $\mathcal F_2(-\Delta\psi)(\xi)=4\pi^2|\xi|^2\mathcal F_2\psi(\xi)$ and Cauchy-Schwarz give $|\psi(x)|\le\|(1+|\xi|^2)\mathcal F_2\psi\|_2\,\|(1+|\xi|^2)^{-1}\|_2$, so $H^2(\mathbb R^3)\subseteq C_b(\mathbb R^3)$ with a continuous representative ([[thm-plancherel]], [[lem-weak-derivatives-are-polynomial-fourier-multipliers]], [[cor-cauchy-schwarz-inequality-for-l-two]]).

[F9] One-dimensional Sobolev regularity: for $-\infty<a<b<\infty$ every class in $W^{1,2}(a,b;\mathbb C)$ has exactly one continuous representative that is absolutely continuous on $[a,b]$, with $u(x)-u(y)=\int_y^x Du(t)\,dt$; applied to $u$ and then to $u'$, a class with weak derivatives $u',u''\in L^2(a,b)$ therefore has a $C^1$ representative with $u'$ absolutely continuous and $u'(x)-u'(y)=\int_y^xu''(t)\,dt$ ([[cor-one-dimensional-w-one-p-functions-have-absolutely-continuous-representatives]], [[def-sobolev-space-wkp-and-its-norm]]).

[F10] Polar coordinates: $\int_{\mathbb R^3}g\,dx=\int_0^\infty r^2\int_{S^2}g(r\Omega)\,d\sigma(\Omega)\,dr$ for every Borel $g\ge0$; in particular for $\psi(x)=u(r)Y_{lm}(\Omega)/r$ with $u\in C_c^\infty((0,\infty))$ one has $\int_{\mathbb R^3}|\psi|^2|x|^{-1}dx=\int_0^\infty|u(r)|^2r^{-1}dr$ ([[thm-polar-coordinates-formula-for-lebesgue-measure]], [[thm-nrqm-orbital-and-spin-sphere-onb]]).

## Proof

1.1 [The form domain] Let $G_l:=\overline{\{(u,u'-u/r):u\in C_c^\infty((0,\infty))\}}\subseteq L^2(0,\infty)\times L^2(0,\infty)$ be the graph closure of the operator $u\mapsto u'-u/r$. Then $G_l$ is a closed linear subspace, hence complete; its first projection is injective, since the only pair with zero first coordinate is $(0,0)$, and we identify $V_l$ with the image of this projection, so $u\in V_l$ exactly when $u\in L^2$ and $u'-u/r\in L^2$ distributionally. For $u\in C_c^\infty((0,\infty))$ the identity $\frac{d}{dr}\bigl(|u|^2/r\bigr)=2\operatorname{Re}\bigl(u'\overline u\bigr)/r-|u|^2/r^2$ has vanishing integral over the compact support, so $\int_0^\infty|u|^2r^{-2}dr=2\operatorname{Re}\int_0^\infty u'\overline u\,r^{-1}dr=2\operatorname{Re}\int_0^\infty\frac ur\overline{\bigl(u'-\frac ur\bigr)}dr+2\int_0^\infty|u|^2r^{-2}dr$, that is $\int_0^\infty|u|^2r^{-2}dr=-2\operatorname{Re}\int_0^\infty\frac ur\overline{\bigl(u'-\frac ur\bigr)}dr\le2\|u/r\|_2\|u'-u/r\|_2$; hence $\|u/r\|_2\le2\|u'-u/r\|_2$, the term $\|u/r\|_2$ is finite, and on $C_c^\infty((0,\infty))$ the graph norm $\|u\|_2^2+\|u'-u/r\|_2^2$ and the three-term norm $\|u\|_2^2+\|u'-u/r\|_2^2+l(l+1)\|u/r\|_2^2$ are equivalent. Applying the same estimate to differences of approximating sequences, the inequality passes to the closure, so for every $u\in V_l$ the distributional function $u/r$ lies in $L^2$ with $\|u/r\|_2\le2\|u'-u/r\|_2$ and $\|u\|^2_{V_l}=\|u\|_2^2+\|u'-u/r\|_2^2+l(l+1)\|u/r\|_2^2$. The inclusion $V_l\subseteq L^2$ is continuous by definition of the norm, and $V_l$ is dense because it contains $C_c^\infty((0,\infty))$; this is the content of the first assertion of (a). [given, algebra]

2.1 [Boundedness of the form] For $u,v\in V_l$ the three integrals in $a_l(u,v)$ are finite and bounded by the $V_l$-norms: the first term is $\langle u'-u/r,v'-v/r\rangle$ with modulus at most $\|u'-u/r\|_2\|v'-v/r\|_2$ by [F3]; the term $l(l+1)\int u\overline v/r^2$ has modulus at most $l(l+1)\|u/r\|_2\|v/r\|_2$; and for the Coulomb term we distinguish cases: for $l\ge1$, $|\int u\overline v/r|\le\|u/r\|_2\|v\|_2\le\|u\|_{V_l}\|v\|_{V_l}$; for $l=0$ write $u=rw$, $v=rz$ with $w=u/r$ and $z=v/r$, so that $r^2w'=u'-u/r\in L^2$ and $r^2z'=v'-v/r\in L^2$, and then $\int u\overline v/r=\int rw\overline{rz}/r\,dr=\int r\,w\overline z\,dr$ with modulus at most $\|rw\|_2\|rz\|_2=\|u\|_2\|v\|_2\le\|u\|_{V_l}\|v\|_{V_l}$, where the identity $u=rw$ with $w=u/r$ is read in the distributional sense and $r,r^{-1}$ are bounded on the support in the estimates. Hence $|a_l(u,v)|\le C\|u\|_{V_l}\|v\|_{V_l}$ with a constant $C$ depending only on $l,\gamma$. [step 1.1, F3, given, algebra]

3.1 [Symmetry, semiboundedness and closedness] Exchanging $u$ and $v$ in each integrand of $a_l$ conjugates it, so $a_l(u,v)=\overline{a_l(v,u)}$ and $a_l(u,u)$ is real. For $l\ge1$, $|\gamma\int|u|^2/r|\le\gamma\|u/r\|_2\|u\|_2\le\tfrac12l(l+1)\|u/r\|_2^2+\tfrac{\gamma^2}{2l(l+1)}\|u\|_2^2$, so $a_l(u,u)\ge\tfrac12\|u'-u/r\|_2^2+\tfrac12l(l+1)\|u/r\|_2^2-\tfrac{\gamma^2}{2l(l+1)}\|u\|_2^2$; for $l=0$ one has $a_0(u,u)=\|u'-u/r\|_2^2-\gamma\int|u|^2/r$, and step 1.1 with Cauchy-Schwarz gives $\int|u|^2/r=\int(u/r)\overline u\le\|u/r\|_2\|u\|_2\le2\|u'-u/r\|_2\|u\|_2$, whence $\gamma\int|u|^2/r\le2\gamma\|u'-u/r\|_2\|u\|_2\le\tfrac12\|u'-u/r\|_2^2+2\gamma^2\|u\|_2^2$ and $a_0(u,u)\ge\tfrac12\|u'-u/r\|_2^2-2\gamma^2\|u\|_2^2$. Thus $a_l(u,u)\ge -M_l\|u\|_2^2$ for the finite constants $M_0:=2\gamma^2$ and $M_l:=\gamma^2/(2l(l+1))$ ($l\ge1$), and the shifted form $b_l(u,v):=a_l(u,v)+(M_l+1)\langle u,v\rangle$ satisfies $b_l(u,u)\ge\tfrac12\|u\|^2_{V_l}$ and $|b_l(u,v)|\le(C+M_l+1)\|u\|_{V_l}\|v\|_{V_l}$; therefore $b_l$ is an inner product equivalent to $\|\cdot\|_{V_l}$ and the form norm $\|u\|^2_{a_l,M_l}=\operatorname{Re}a_l(u,u)+(M_l+1)\|u\|_2^2$ is equivalent to $\|u\|^2_{V_l}$. So $a_l$ is closed in the sense of [[def-nrqm-coulomb-closed-semibounded-forms]] (the form norm is equivalent to $\|\cdot\|_{V_l}$). [step 1.1, step 2.1, F3, algebra]

4.1 [The operator $A_l$: definition and symmetry] With $V_l$ dense, for $u\in V_l$ the antilinear functional $v\mapsto a_l(u,v)$ is bounded on $V_l$ by step 2.1; define $D(A_l)$ as the set of $u$ for which this functional is of the form $v\mapsto\langle f,v\rangle$ for some $f\in L^2(0,\infty)$ and put $A_lu:=f$. Uniqueness of $f$ holds because $V_l$ is dense in $L^2$: if $f,g$ both work then $\langle f-g,v\rangle=0$ for all $v\in V_l$ and hence for all $v\in L^2$, so $f=g$. Linearity of $A_l$ follows from linearity of $a_l$ in the first argument. Moreover $A_l$ is symmetric: for $u,w\in D(A_l)$ and $v\in V_l$, $\langle A_lu,v\rangle=a_l(u,v)$ and $\langle A_lw,v\rangle=a_l(w,v)$; taking $v\in D(A_l)$ and using $a_l(u,w)=\overline{a_l(w,u)}$ from step 3.1 gives $\langle A_lu,w\rangle=a_l(u,w)=\overline{a_l(w,u)}=\overline{\langle A_lw,u\rangle}=\langle u,A_lw\rangle$, so $A_l\subseteq A_l^*$. [step 3.1, step 1.1, F4, given, algebra]

5.1 [Surjectivity of a shifted $A_l$] Fix $\mu>M_l$ and let $f\in L^2(0,\infty)$. The functional $v\mapsto\langle f,v\rangle$ is conjugate-linear and bounded on $V_l$, hence also on the Hilbert space $(V_l,b_\mu)$ with $b_\mu:=a_l+\mu\langle\cdot,\cdot\rangle$, whose norm is equivalent to $\|\cdot\|_{V_l}$ by step 3.1; by [F4] there is $u\in V_l$ with $b_\mu(u,v)=\langle f,v\rangle$ for all $v\in V_l$. Then $a_l(u,v)=\langle f,v\rangle-\mu\langle u,v\rangle=\langle f-\mu u,v\rangle$ for all $v\in V_l$, so $u\in D(A_l)$ and $(A_l+\mu)u=f$; moreover $\ker(A_l+\mu)=\{0\}$: if $(A_l+\mu)u=0$ with $u\in D(A_l)$, testing against $v=u$ gives $b_\mu(u,u)=0$, and $b_\mu(u,u)\ge\tfrac12\|u\|^2_{V_l}$ by step 3.1, so $u=0$. [step 4.1, step 3.1, F4, algebra]

6.1 [Self-adjointness and lower bound] We use the general fact that a densely defined symmetric operator $T$ with $\operatorname{ran}(T+\mu)=H$ for a real $\mu$ and $\ker(T+\mu)=\{0\}$ is self-adjoint: for $y\in D(T^*)$ put $g:=(T^*+\mu)y$ and choose $x\in D(T)$ with $(T+\mu)x=g$, which exists by surjectivity; then $(T^*+\mu)(x-y)=0$, and $\ker(T^*+\mu)=\{0\}$ because for $z\in\ker(T^*+\mu)$ one has $\langle(T+\mu)u,z\rangle=\langle u,(T^*+\mu)z\rangle=0$ for all $u\in D(T)$ by symmetry, so $z\perp\operatorname{ran}(T+\mu)=H$; hence $x=y\in D(T)$ and $T^*\subseteq T\subseteq T^*$, i.e. $T=T^*$ ([[thm-self-adjointness-range-criterion]], [[def-symmetric-self-adjoint-and-essentially-self-adjoint]]). Applying this to $T:=A_l$ with the $\mu>M_l$ of step 5.1, using symmetry from step 4.1 and surjectivity and triviality of the kernel from step 5.1, we obtain that $A_l$ is self-adjoint. Since $b_\mu(u,u)=\langle(A_l+\mu)u,u\rangle$ for $u\in D(A_l)$ and $b_\mu(u,u)\ge\tfrac12\|u\|^2_{V_l}\ge0$, we get $\langle A_lu,u\rangle\ge-\mu\|u\|_2^2$, so $A_l$ is bounded below. [step 5.1, step 4.1, F5, given, algebra]

7.1 [Form domain and density] We first note that $C_c^\infty((0,\infty))\subseteq D(A_l)$ with $A_lv=-v''+\bigl(l(l+1)/r^2-\gamma/r\bigr)v$: for $v,w\in C_c^\infty((0,\infty))$ a direct integration by parts over the compact support of the two functions (the same computation as in the weak-identity argument below) gives $a_l(v,w)=\langle L_lv,w\rangle$ with $L_lv:=-v''+\bigl(l(l+1)/r^2-\gamma/r\bigr)v\in C_c^\infty$, so $v\in D(A_l)$ by its definition. Let $Q(A_l)$ be the form domain of [F6] with the lower bound $c_l:=-M_l$ of step 6.1. For $u\in D(A_l)$ one has $\|u\|^2_{Q}=\|u\|_2^2+\langle(A_l+M_l)u,u\rangle=\|u\|_2^2+a_l(u,u)+M_l\|u\|_2^2=b_{M_l+1}(u,u)$, so the $Q$-norm is equivalent to $\|\cdot\|_{V_l}$ on $D(A_l)$ by step 3.1. Now let $u\in V_l$ and choose $u_n\in C_c^\infty((0,\infty))\subseteq D(A_l)$ with $u_n\to u$ in $V_l$ (possible by the construction of $V_l$); then $(u_n)$ is $Q$-Cauchy, and completeness of $Q(A_l)$ produces a $Q$-limit whose class in $L^2$ equals $u$, so $u\in Q(A_l)$ and $q_{A_l}[u]=\lim a_l(u_n,u_n)=a_l(u,u)$. Conversely, if $u\in Q(A_l)$, approximate it in $Q$-norm by $u_n\in D(A_l)$ ([F6]); the equivalence of norms makes $(u_n)$ $V_l$-Cauchy, hence its $V_l$-limit lies in $V_l$ and equals $u$ in $L^2$, so $u\in V_l$. Thus $Q(A_l)=V_l$ as sets with equivalent norms, $a_l(u,u)=\langle A_lu,u\rangle$ for $u\in D(A_l)$, and [F6] gives that $D(A_l)$ is dense in $V_l$ in the $V_l$-norm. [step 6.1, step 3.1, step 1.1, F6, algebra]

8.1 [The polar form decomposition of $C$] For $\psi,\varphi\in D(C)=H^2(\mathbb R^3)$ put $q(\psi,\varphi):=\int\nabla\psi\cdot\overline{\nabla\varphi}\,dx-\gamma\int\psi\overline\varphi\,|x|^{-1}dx$; by [F2] $q(\psi,\psi)=\langle C\psi,\psi\rangle$ for $\psi\in D(C)$, and $q$ extends to a bounded semibounded form on $H^1(\mathbb R^3)$ because $|\gamma\int\psi\overline\varphi|x|^{-1}|\le2\gamma\|\nabla\psi\|_2\|\varphi\|_2$ by the Hardy bound [[lem-nrqm-coulomb-three-dimensional-hardy-bound]]. For a single block $\psi=u(r)Y_{lm}(\Omega)/r$ with $u\in C_c^\infty((0,\infty))$, the second identity of clause (d) of [[thm-nrqm-coulomb-angular-radial-unitary-reduction]] (proved there by the divergence-theorem computation of that item) gives $\int|\nabla\psi|^2=\int(|u'-u/r|^2+l(l+1)|u|^2/r^2)$, while polar coordinates [F10] give $\int|\psi|^2/r=\int|u|^2/r$, hence $q(\psi,\psi)=a_l(u,u)$; for finite sums over distinct blocks the cross terms vanish because $\int_{S^2}Y_{lm}\overline{Y_{l'm'}}d\sigma=\delta_{ll'}\delta_{mm'}$ and $\int_{S^2}\nabla_{S^2}Y_{lm}\cdot\overline{\nabla_{S^2}Y_{l'm'}}d\sigma=l(l+1)\delta_{ll'}\delta_{mm'}$ after angular integration by parts, so $q(\psi,\psi)=\sum_{l,m}a_l(u_{lm},u_{lm})$ on the space of finite block sums, a subspace that is dense in $H^1(\mathbb R^3)$ by the density argument [F7] together with the block expansion of smooth compactly supported functions; both sides of the identity are continuous in the $H^1$-norm (uniform bound of step 2.1), so the identity holds for all $\psi\in H^1(\mathbb R^3)$, and the map $\psi\mapsto(u_{lm})$ is a surjective isometry from $H^1(\mathbb R^3)$ onto the space of families $(u_{lm})\in K$ with $\sum_{l,m}\|u_{lm}\|^2_{V_l}<\infty$. Consequently the form $q$ of $C$ decomposes as the direct sum of the forms $a_l$ over all blocks. [step 7.1, F1, F2, F7, F10, given, algebra]

9.1 [Block identity for the operator] The direct sum $\widehat A:=\bigoplus_{(l,m)}A_l$ on $K$, with domain $\{(u_{lm}):u_{lm}\in D(A_l),\ \sum(\|u_{lm}\|^2+\|A_lu_{lm}\|^2)<\infty\}$, is self-adjoint with quadratic form $\sum_{l,m}a_l$ on the direct sum of the $V_l$ (this is the standard direct sum of self-adjoint operators, [[def-symmetric-self-adjoint-and-essentially-self-adjoint]]), and its form agrees with $q$ under the unitary $U$ by step 8.1. The self-adjoint operator $UCU^*$ has the same quadratic form as $\widehat A$ on the common dense form domain, namely $\langle UCU^*w,w\rangle=q(U^*w,U^*w)=\sum a_l$; a closed semibounded form determines its associated operator uniquely ([[def-nrqm-coulomb-closed-semibounded-forms]]), since that operator is recovered from the relation $a(u,v)=\langle Au,v\rangle$ on its domain. Hence $UCU^*=\widehat A$, which is (d). [step 8.1, step 6.1, given, algebra]

10.1 [Weak identity and regularity] Let $u\in D(A_l)$ and $v\in C_c^\infty((0,\infty))$. Since $v\in V_l$, the definition of $A_l$ gives $\langle A_lu,v\rangle=a_l(u,v)$, and by symmetry of $a_l$ (step 3.1) and the integration by parts identity of step 7.1 applied in the reverse direction (legitimate because $v$ is compactly supported in $(0,\infty)$ and $u,u'-u/r\in L^2_{\mathrm{loc}}$), $a_l(u,v)=\int_0^\infty u(r)\overline{\bigl(-v''(r)+\frac{l(l+1)}{r^2}v(r)-\frac{\gamma}{r}v(r)\bigr)}dr$. Hence the distribution $-u''+\bigl(l(l+1)/r^2-\gamma/r\bigr)u$, tested against $v$, equals $A_lu$; in particular it is an $L^2_{\mathrm{loc}}$ function on $(0,\infty)$. On a compact subinterval $[a,b]\subset(0,\infty)$ the coefficient $q(r):=l(l+1)/r^2-\gamma/r$ is bounded, so the weak derivative identity $u''=(qu-A_lu)|_{(a,b)}$ holds in $L^2(a,b)$; thus $u\in H^2(a,b)$ for every compact subinterval, and [F9] gives a representative that is $C^1$ with locally absolutely continuous derivative and with $-u''+qu=A_lu$ holding pointwise almost everywhere on $(0,\infty)$. For the $C^2$ statement in the eigenfunction case suppose $A_lu=Eu$ with $E\in\mathbb C$ constant. Then almost everywhere $u''=(q-E)u$, and $(q-E)u$ is continuous on $(0,\infty)$ because $u\in C^1$; applying [F9] to the class $u'\in W^{1,2}(a,b)$, whose weak derivative $u''$ agrees a.e. on $(a,b)$ with the continuous function $(q-E)u$, exhibits $u'$ as a $C^1$ function with derivative $(q-E)u$, so $u$ is of class $C^2$ and the differential equation $-u''+qu=Eu$ holds pointwise on $(0,\infty)$. This is (c). [step 9.1, step 3.1, step 7.1, F3, F9, algebra]

10.2 [Eigenfunction transport and $H^2$ membership] Let $u\in D(A_l)$ and $A_lu=Eu$. By step 9.1 the family with $(l,0)$-entry $u$ and all other entries $0$ lies in $D(\widehat A)$ with $\widehat A$ image $(Eu,0,\dots)$; hence $\psi:=U^{-1}(u\delta_{(l,0)})$ lies in $D(C)$ and $C\psi=E\psi$, and $\psi(x)=u(r)Y_{l0}(\Omega)/r$ by [F1]. Since $D(C)=H^2(\mathbb R^3)$, [F8] makes $\psi$ bounded and continuous, so $u(r)/r=\psi(r\Omega_0)/Y_{l0}(\Omega_0)$ is bounded on $(0,1]$ for any fixed direction $\Omega_0$ with $Y_{l0}(\Omega_0)\ne0$ (such a direction exists because $Y_{l0}$ is not the zero function). This proves (e) and the description of $D(A_l)$ as the transported domain. [step 9.1, F1, F8, given, algebra]

11.1 [Conclusion] Clause (a) is steps 1.1 and 3.1; clause (b) is steps 4.1, 6.1 and 7.1; clause (c) is step 10.1; clause (d) is step 9.1; clause (e) is step 10.2. [step 1.1, step 3.1, step 4.1, step 6.1, step 7.1, step 9.1, step 10.1, step 10.2] ∎
