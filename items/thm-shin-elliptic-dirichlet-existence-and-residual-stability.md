---
id: thm-shin-elliptic-dirichlet-existence-and-residual-stability
kind: theorem
title: "Exterior-sphere elliptic Dirichlet existence, energy and residual stability"
status: published
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 3
deps:
  - def-axiom-of-choice
  - def-countable-choice
  - def-shin-elliptic-divergence-form-operator
  - lem-shin-smooth-dirichlet-approximants-from-sobolev-bootstrap
  - lem-shin-elliptic-residual-stability
  - def-holder-spaces-c-k-alpha-and-their-scaled-norms
  - def-wkp-zero-as-a-sobolev-closure
  - lem-w-one-two-is-a-hilbert-space
  - thm-gram-schmidt-orthonormalisation
  - thm-bessel-inequality-and-finite-parseval-identity
  - thm-riesz-representation-for-hilbert-space
  - thm-interior-schauder-estimate-for-uniformly-elliptic-equations
  - thm-morse-sard-for-euclidean-maps
  - thm-tietze-extension-theorem
  - thm-convolution-with-a-mollifier-is-smooth-and-differentiates-under-the-integral-sign
  - cor-real-and-euclidean-vector-valued-ascoli-arzela
  - lem-shin-uniform-boundary-schauder-estimate-for-smooth-dirichlet-approximants
  - thm-young-inequality-real-exponents
  - thm-holder-inequality-for-integrals
  - thm-kernel-of-the-trace-is-w-one-p-zero
  - lem-sobolev-trace-agrees-with-continuous-boundary-values
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  precheck: pass
sources:
  references:
    - title: "Shin, Darbon, and Karniadakis, On the Convergence of Physics-Informed Neural Networks for Linear Second-Order Elliptic and Parabolic Type PDEs"
      url: "https://arxiv.org/pdf/2004.01806"
      locator: "Appendix D; source formulation corrected to local interior regularity"
---

## Statement

Assume the Axiom of Choice and Countable Choice. Let all coefficients and data be real. Let $n\ge1$, $0<\alpha<1$, and let $U\subset\mathbb R^n$ be nonempty, bounded and Lipschitz, with an exterior ball at every boundary point. Suppose $a_{ij}=a_{ji},b_i\in C^{1,\alpha}(U)$ and $c_i,d\in C^{0,\alpha}(U)$, with finite global norms, and $\lambda_0 I\le A=(a_{ij})\le\Lambda_0 I$ for constants $0<\lambda_0\le\Lambda_0$. Define
$$L[u]=\sum_{i,j}D_i(a_{ij}D_ju)+\sum_iD_i(b_i u)+\sum_i c_iD_iu+du,$$
$$\beta_j=\sum_iD_ia_{ij}+b_j+c_j,\qquad \gamma=\sum_iD_ib_i+d,$$
and assume $\gamma\le0$. Retain, when required by the source application, the bounds $\sum_{i,j}|a_{ij}|^2\le\Lambda$ and $\lambda_0^{-2}(|b|^2+|c|^2)+\lambda_0^{-1}|d|\le v^2$.

For every $f\in C^{0,\alpha}(U)$ and $g\in C(\partial U)$ there is exactly one solution
$$u\in C^{2,\alpha}_{\mathrm{loc}}(U)\cap C(\bar U),\qquad Lu=f,\qquad u|_{\partial U}=g.$$
There is a finite constant $C_L$, depending on $U$, ellipticity and the sup bounds of the expanded coefficients $A,\beta,\gamma$, such that every $h\in C^2(U)\cap C(\bar U)$ with bounded residual satisfies
$$\|u-h\|_{\infty;U}\le C_L\bigl(\|f-Lh\|_{\infty;U}+\|g-h\|_{\infty;\partial U}\bigr).$$
If $g=0$, then $u\in H^1_0(U)$ and $\|u\|_{H^1(U)}\le C_E\|f\|_{\infty;U}$, where $C_E$ may additionally depend on $\|DA\|_\infty$. If $g$ is the restriction of an ambient $C^{2,\alpha}$ lifting $G$ near $\bar U$, then $u-G\in H^1_0(U)$. If in addition $U$ is $C^{2,\alpha}$ and $g$ has such a lifting $G$, the solution lies in $C^{2,\alpha}(\bar U)$ and satisfies
$$\|u\|_{2,\alpha;\bar U}\le C\bigl(\|f\|_{0,\alpha;U}+\|G\|_{2,\alpha;\bar U}\bigr).$$
The global branch follows by uniform estimates on smooth interior approximants and passage to the classical limit.

## Statement references

[Shin et al., Appendix D: exterior-sphere existence and stability formulation](https://arxiv.org/pdf/2004.01806)

[[lem-shin-smooth-dirichlet-approximants-from-sobolev-bootstrap]]

[[lem-shin-uniform-boundary-schauder-estimate-for-smooth-dirichlet-approximants]]

## Facts & Assumptions

**Given:** The domain, coefficients, sign and finite norms, forcing and boundary datum in the Statement. Assume AC and CC; their uses are inherited by smooth weak solvability, Sobolev extension, measure theory and sequential compactness.

[F1] Smooth-domain, smooth-coefficient Dirichlet approximants exist by weak Fredholm theory and the locally proved boundary Sobolev bootstrap ([[lem-shin-smooth-dirichlet-approximants-from-sobolev-bootstrap]]).

[F2] The residual estimate holds with the positive principal convention and nonpositive expanded potential ([[lem-shin-elliptic-residual-stability]], [[def-shin-elliptic-divergence-form-operator]]).

[F3] Interior Schauder estimates give uniform local $C^{2,\alpha}$ bounds from uniform coefficient Hölder bounds, the forcing norm and the solution supremum ([[thm-interior-schauder-estimate-for-uniformly-elliptic-equations]], [[def-holder-spaces-c-k-alpha-and-their-scaled-norms]]).

[F4] Mollification is smooth, commutes with the derivatives in use and preserves sup and Hölder bounds by integration; regular levels of smooth functions have smooth boundaries ([[thm-convolution-with-a-mollifier-is-smooth-and-differentiates-under-the-integral-sign]], [[thm-morse-sard-for-euclidean-maps]]).

[F5] A bounded continuous datum on the closed set $\partial U$ has a bounded continuous extension to the metric, hence normal, space $\mathbb R^n$ ([[thm-tietze-extension-theorem]]).

[F6] Pointwise bounded equicontinuous families on compact metric spaces have convergent subsequences; apply this to the function, gradient and Hessian jointly ([[cor-real-and-euclidean-vector-valued-ascoli-arzela]]).

[F7] Zero-trace spaces are closures of compactly supported smooth classes; extension by zero from $H^1_0(V)$ to $H^1_0(U)$ is therefore valid for $V\subset U$. On smooth domains the zero trace and classical zero boundary restriction agree ([[def-wkp-zero-as-a-sobolev-closure]], [[thm-kernel-of-the-trace-is-w-one-p-zero]], [[lem-sobolev-trace-agrees-with-continuous-boundary-values]]). Cauchy–Schwarz and Young inequalities control the energy products ([[thm-holder-inequality-for-integrals]], [[thm-young-inequality-real-exponents]]).

[F8] Already smooth zero-boundary Dirichlet solutions on smooth domains with a common uniformly controlled $C^{2,\alpha}$ graph atlas obey a uniform global a priori Schauder bound from the supremum and forcing norm. Every bounded $C^{2,\alpha}$ domain has relatively compact smooth approximating open sets with exactly those uniform atlas bounds, eventually containing every interior compact set ([[lem-shin-uniform-boundary-schauder-estimate-for-smooth-dirichlet-approximants]]). This estimate is used only on smooth approximants, not on the original solution before boundary regularity has been established.

[F9] The permitted choices are AC and CC ([[def-axiom-of-choice]], [[def-countable-choice]]). The zero-boundary Sobolev space is Hilbert, Gram–Schmidt applies to every finite initial list after dependent vectors are discarded, and finite Bessel bounds control the coefficient sums ([[lem-w-one-two-is-a-hilbert-space]], [[thm-gram-schmidt-orthonormalisation]], [[thm-bessel-inequality-and-finite-parseval-identity]]). Every bounded linear functional on a Hilbert space is an inner product against a vector ([[thm-riesz-representation-for-hilbert-space]]). The proof below gives the weak subsequence argument directly in the separable closed span.

## Proof

1.1 Expand the intended divergence expression by the product rule to obtain $L=A:D^2+\beta\cdot D+\gamma$. On a bounded Lipschitz domain, two sufficiently close points in a fixed smaller graph patch can be joined inside a larger patch by a path of length at most a fixed multiple of their distance; bounded first derivatives therefore give a Lipschitz bound for $a,b$ there. A finite cover and the supremum bound for separated pairs give their global Hölder bounds. Thus the finite global coefficient assumptions give finite Hölder bounds for the expanded coefficients, $\gamma\le0$, and a finite bound for $DA$. Throughout the proof write $c=\gamma$, and use $\lambda=\lambda_0$, $\Lambda=\Lambda_0$. [given, F2, algebra]

1.2 If $n=1$, the bounded Lipschitz set is a finite union of open intervals: its compact boundary has a finite one-sided graph-chart cover, and in dimension one each such chart contains one boundary point. On each interval $(a,b)$ all coefficients and $f$ extend Hölder-continuously to $[a,b]$ and $A\ge\lambda$. Write $y=(u,u')$, so $y'=M(x)y+F(x)$, where $M=\left(\begin{smallmatrix}0&1\\-c/A&-\beta/A\end{smallmatrix}\right)$ and $F=(0,f/A)$. For $Th(x)=\int_a^xM(t)h(t)\,dt$, iterated integration gives $\|T^kh\|_\infty\le \|h\|_\infty(\|M\|_\infty(b-a))^k/k!$. Therefore the uniformly convergent series $y=\sum_{k\ge0}T^k(y(a)+\int_a^{\cdot}F)$ solves the integral equation, hence the differential system; the factorial bound also proves uniqueness by iterating the homogeneous difference equation. Choose one particular solution with the prescribed left value and slope zero, and add $s$ times the homogeneous solution with initial value zero and slope one. That homogeneous solution cannot also vanish at $b$: otherwise [F2] would make it identically zero, contradicting its slope at $a$. Thus exactly one $s$ gives the prescribed right value. The equation makes $u''$ globally Hölder, so $u\in C^{2,\alpha}([a,b])$. Zero endpoint values imply $u\in H^1_0(a,b)$ directly: multiply by a cutoff vanishing within $\varepsilon$ of each endpoint, with derivative bounded by $C/\varepsilon$; since $|u|\le\|u'\|_\infty\operatorname{dist}(x,\partial(a,b))$, the cutoff error in $H^1$ tends to zero, and each compactly supported $H^1$ function is approximated by mollification. For zero data, integration against $u$ gives $\lambda\|u'\|_2^2\le\|f\|_2\|u\|_2+\|\beta-A'\|_\infty\|u'\|_2\|u\|_2+\|c\|_\infty\|u\|_2^2$; Young's inequality and [F2] then give the stated energy bound on these finitely many intervals. This proves all existence, energy, and global regularity conclusions in dimension one; [F2] gives stability. Henceforth take $n\ge2$. [given, F2, F4, F7, algebra]

1.3 Let $\delta(x)=\operatorname{dist}(x,\mathbb R^n\setminus U)$ on all of $\mathbb R^n$; it is nonnegative, 1-Lipschitz, vanishes outside $U$, and has compact support because $U$ is bounded. Fix a nonnegative unit-mass smooth mollifier supported in the unit ball. Put $\varepsilon_j\downarrow0$ and $\delta_j=\rho_{\varepsilon_j}*\delta$. Then $$|\delta_j-\delta|\le\varepsilon_j.$$ Choose a regular value $t_j\in(2\varepsilon_j,3\varepsilon_j)$, using the local Euclidean Morse–Sard theorem, and set $V_j=\{\delta_j>t_j\}$. This is bounded with compact smooth boundary, satisfies $\bar V_j\subset U$ (indeed $\delta\ge t_j-\varepsilon_j>\varepsilon_j$ on its closure), and contains $\{\delta>4\varepsilon_j\}$. Every compact subset of $U$ is contained in $V_j$ for all sufficiently large $j$. Discard an initial empty $V_j$ if necessary. Nestedness is not required anywhere below. If there are several components, use the same argument componentwise; a compact smooth boundary has a finite graph cover and the proof supplies the same finite-cover regularity on their union. [given, F1, F4, F5]

1.4 Choose $s_j<\varepsilon_j/4$ tending to zero and mollify the original coefficients and forcing at scale $s_j$ on a neighborhood of $\bar V_j$: $$A_j=\rho_{s_j}*A,\quad\beta_j=\rho_{s_j}*\beta,\quad c_j=\rho_{s_j}*c,\quad f_j=\rho_{s_j}*f.$$ Only values inside $U$ are used there. Consequently $A_j=A_j^T$, $\lambda I\le A_j\le\Lambda I$, $c_j\le0$, and the sup bounds of $\beta_j,c_j,f_j,DA_j$ do not exceed the original corresponding bounds. On every fixed interior ball, their Hölder norms are uniformly bounded and they converge uniformly to the original coefficients/data; $DA_j\to DA$ uniformly locally as well. The Hölder bound follows directly by integrating $|F(x-z)-F(y-z)|\le[F]_\alpha|x-y|^\alpha$. Each coefficient is smooth near $\bar V_j$; its higher derivatives can grow with $j$, which does not matter. [given, F1, F4, F5]

1.5 Extend $g$ to a bounded continuous $G$ on $\mathbb R^n$ using Tietze and set $G_j=\rho_{s_j}*G$. Uniform convergence $G_j\to G$ holds on any fixed compact neighborhood of $\bar U$, by uniform continuity there. Also $\|G_j\|_\infty\le\|G\|_\infty$. The lemma gives a smooth classical $u_j$ on $\bar V_j$ satisfying $$L_ju_j=f_j\quad\hbox{in }V_j,\qquad u_j=G_j\quad\hbox{on }\partial V_j.$$ [given, F1, F4, F5]

1.6 Take a slab $a\le x_1\le b$ containing $\bar U$, put $B=\sup_j\|\beta_{j,1}\|_\infty$, $C_0=\sup_j\|c_j\|_\infty$, and choose $\kappa$ with $\lambda\kappa^2-B\kappa-C_0\ge1$. For $\psi=e^{\kappa x_1}$, $L_j\psi\ge e^{\kappa a}=:\eta>0$. Fix $M>e^{\kappa b}$ and put $\Phi=M-\psi>0$. Then $L_j\Phi\le-\eta$ for every $j$. The comparison implication used below follows directly: if $z\in C^2(V_j)\cap C(\bar V_j)$, $L_jz\ge0$ and $z\le0$ on $\partial V_j$, a value $z(x_0)>0$ would, for $\epsilon>0$ sufficiently small that $\epsilon e^{\kappa b}<z(x_0)$, force $z+\epsilon\psi$ to have a positive interior maximum. There its gradient is zero and Hessian negative semidefinite, so ellipticity and $c_j\le0$ give $L_j(z+\epsilon\psi)\le0$. This contradicts $L_j(z+\epsilon\psi)\ge\epsilon\eta>0$, proving $z\le0$. [given, F2, algebra]

1.7 Let $Q=\|G\|_\infty$ and $R=\|f\|_\infty$. On $\partial V_j$, both $u_j-Q-(R/\eta)\Phi$ and $-u_j-Q-(R/\eta)\Phi$ are nonpositive. Their $L_j$ images are nonnegative, since $c_j\le0$, $|f_j|\le R$ and $L_j\Phi\le-\eta$. Comparison gives $$|u_j|\le Q+(R/\eta)\|\Phi\|_\infty=:M_0$$ on $V_j$. This constant depends only on the original domain/slab, uniform ellipticity and expanded coefficient sup bounds, $R,Q$. It is independent of $j$, of the smoothness of $\partial V_j$, and of all higher coefficient derivatives. [given, F2]

1.8 For every ball $B_{2r}(x)\Subset U$, it is contained in $V_j$ for large $j$. Apply the actual interior Schauder theorem to $u_j$ there. All coefficient $C^\alpha$ norms and ellipticity constants are uniformly controlled on that fixed ball, $\|u_j\|_\infty\le M_0$, and the $C^\alpha$ norm of $f_j$ is uniformly bounded. Hence $u_j$ is uniformly bounded in $C^{2,\alpha}(B_r(x))$. [given, F3, F6]

1.9 Cover $U$ by a countable family of such inner balls with rational centers/radii. Arzelà–Ascoli on each smaller closed ball and diagonal extraction give one subsequence for which $(u_j,Du_j,D^2u_j)$ converges uniformly on every compact subset of $U$. The fundamental theorem of calculus on coordinate segments identifies the limits with $(u,Du,D^2u)$; their compatibility on overlapping balls follows from uniform convergence. Passing each Hessian Hölder difference quotient to the limit proves $u\in C^{2,\alpha}_{\mathrm{loc}}(U)$. Uniform local convergence of all coefficients/data and derivatives gives $Lu=f$ pointwise. The uniform bound gives $|u|\le M_0$. [given, F3, F6]

1.10 Fix $q\in\partial U$. Let $B_R(z)$ be an exterior ball tangent at $q$. Replace it by the smaller ball with center $z'=(z+q)/2$ and radius $r_0=R/2$. Its **closed** ball is contained in $B_R(z)\cup\{q\}$: for $x\ne q$ on the smaller closed ball, strict triangle inequality gives $|x-z|<R$. Thus $$|x-z'|\ge r_0\quad(x\in\bar U),\qquad |x-z'|=r_0\iff x=q.$$ This strict contact property is necessary; the original exterior ball could touch the boundary at several points. [given, F2]

1.11 Write $r=|x-z'|$, $e=(x-z')/r$, and let $R_1=\max_{\bar U}r$. Choose an integer $m>0$ so large that $$(m+2)\lambda-n\Lambda-R_1\sup_j\|\beta_j\|_\infty\ge1.$$ Define $W_0=r_0^{-m}-r^{-m}$. It is smooth near $\bar U$, nonnegative there, vanishes exactly at $q$, and a direct differentiation gives $$L_jW_0=m r^{-m-2}\bigl(\operatorname{tr}A_j-(m+2)e^TA_je+r\beta_j\cdot e\bigr)+c_jW_0\le-mr^{-m-2}\le-mR_1^{-m-2}.$$ After multiplying by $R_1^{m+2}/m$, obtain a single $W_q\ge0$ with $W_q(q)=0$, $W_q>0$ on $\bar U\setminus\{q\}$, and $L_jW_q\le-1$ for every $j$. [given, F2]

1.12 Fix $0<\epsilon<1$. Continuity of $G$ at $q$ gives a neighborhood $N$ of $q$ where $|G(x)-g(q)|<\epsilon/2$. Uniform approximation gives $|G_j-G|<\epsilon/2$ on $\bar U$ for all sufficiently large $j$. Thus $|G_j-g(q)|<\epsilon$ on $N\cap\bar U$. On the compact complementary set $\bar U\setminus N$, $W_q$ has a strictly positive minimum; choose $K$ so large that $$|G_j-g(q)|\le\epsilon+KW_q\quad\hbox{on all of }\bar U$$ for all sufficiently large $j$, and also $$K\ge R+C_0(|g(q)|+\epsilon).$$ Apply comparison on $V_j$ to $$z_j^+=u_j-g(q)-\epsilon-KW_q,\qquad z_j^-=-u_j+g(q)-\epsilon-KW_q.$$ They are nonpositive on $\partial V_j$, and $$L_jz_j^+=f_j-c_j(g(q)+\epsilon)-KL_jW_q\ge-R-C_0(|g(q)|+\epsilon)+K\ge0,$$ $$L_jz_j^-=-f_j+c_j(g(q)-\epsilon)-KL_jW_q\ge-R-C_0(|g(q)|+\epsilon)+K\ge0.$$ Therefore $$|u_j(x)-g(q)|\le\epsilon+KW_q(x)\quad(x\in V_j)$$ for all sufficiently large $j$. Passing to the interior limit gives the same bound for $u$ on $U$. Let $x\to q$ from inside $U$ and use $W_q(x)\to0$; then $\limsup_{x\to q}|u(x)-g(q)|\le\epsilon$. Since $\epsilon$ was arbitrary, $u(x)\to g(q)$. Set $u=g$ on $\partial U$. The resulting function is continuous at every boundary point and in the interior, hence belongs to $C(\bar U)$. [given, F2]

1.13 This proves existence. The exponential-barrier comparison from the residual-stability lemma applied to the difference of two solutions proves uniqueness. Its stated residual estimate applied to $u-h$ proves the stability branch without any regularity of $h$ stronger than $C^2(U)\cap C(\bar U)$ plus bounded residual. No boundary-correction existence needs to be assumed. [given, F2]

1.14 Now set $g=0$ and choose $G=G_j=0$ exactly. Let $u_j$ be the corresponding approximants above. For them, the positive equation expands equivalently to $$\operatorname{div}(A_jDu_j)+q_j\cdot Du_j+c_ju_j=f_j,\qquad q_j=\beta_j-\operatorname{div}A_j.$$ The bounds on $DA_j,\beta_j$ give $\sup_j\|q_j\|_\infty\le Q_1<\infty$. This is where the original $C^{1,\alpha}$ regularity of $A$ is used; existence in the purely nondivergence formulation required only $C^\alpha$ principal coefficients after an appropriate different approximation argument. [given, F2, F7, F9]

1.15 Multiply by $u_j$, integrate over $V_j$, and use $u_j=0$ on its smooth boundary: $$\lambda\|Du_j\|_2^2\le\|f_j\|_2\|u_j\|_2+Q_1\|Du_j\|_2\|u_j\|_2+\|c_j\|_\infty\|u_j\|_2^2.$$ Young's inequality gives $$\|Du_j\|_2^2\le C\bigl(\|f_j\|_2^2+\|u_j\|_2^2\bigr).$$ The uniform supremum estimate with $Q=0$ yields $\|u_j\|_2\le |U|^{1/2}C\|f\|_\infty$, and $\|f_j\|_2\le|U|^{1/2}\|f\|_\infty$. Thus $$\sup_j\|u_j\|_{H^1(V_j)}\le C_U\|f\|_\infty.$$ Because $u_j$ is smooth to its smooth boundary and zero there, it lies in $H^1_0(V_j)$. Extend it by zero to $U$; approximation of each class by $C_c^\infty(V_j)\subset C_c^\infty(U)$ proves that this extension belongs to $H^1_0(U)$ and has the same $H^1$ norm. [given, F2, F7, F9]

1.16 For completeness, no unproved compactness premise is hidden here. In the Hilbert space $H^1_0(U)$, take the closed span of the countable sequence of extensions. Apply Gram–Schmidt to its listed vectors, discarding zeros, to obtain a finite or countable orthonormal basis of that span. Boundedness, diagonal extraction of the scalar coordinates, and Bessel's inequality give square-summable limiting coordinates and a vector in that closed span. Approximate each test vector by its finite basis sums; the common norm bound then proves convergence against every inner product test vector in that span. For any ambient Hilbert test vector $z$, finite Bessel bounds make the series of its coordinates in this basis converge in the closed span, and its residual is orthogonal to every basis vector and hence to the span; replacing $z$ by this series thus gives the same pairing; Riesz representation therefore proves weak convergence in the ambient Hilbert space, including convergence against the bounded $L^2$ pairings of functions and gradients. Its $L^2$ restriction to every compact interior ball agrees with $u$, since the chosen local-classical subsequence converges uniformly there. Thus the weak limit is the function $u$ almost everywhere on $U$. It follows that $$u\in H^1_0(U),\qquad\|u\|_{H^1(U)}\le C_U\|f\|_\infty.$$ Equivalently the weak limit in $H^1(U)$ remains in the closed linear subspace $H^1_0(U)$; the direct closed-span construction already takes place in that subspace. [given, F2, F7, F9]

1.17 Passing the original weak equations to the limit against any $\varphi\in C_c^\infty(U)$ is legitimate by local uniform convergence of coefficients/data and weak convergence of gradients. The divergence representation above shows that $u$ solves the variational equation; density extends it to all $H^1_0$ tests because $A,q,c,f$ are bounded. This establishes both the finite-energy membership and the correct weak interpretation, rather than inferring them from continuity and zero boundary values alone. [given, F2, F7, F9]

1.18 For a general $C^{2,\alpha}$ lifting $G$, apply this zero-boundary result to $v=u-G$ with forcing $f-LG\in C^{0,\alpha}(U)$. Uniqueness of the classical Dirichlet problem identifies that zero-boundary solution with $u-G$. [given, F2, F7, F9]

1.19 Suppose $n\ge2$, $U$ is $C^{2,\alpha}$ and the datum has the stated ambient lifting $G$. Use the smooth interior approximating domains $V_j$ from [F8], which have uniform $C^{2,\alpha}$ graph charts and eventually contain every compact subset of $U$. Write $d_j=\operatorname{dist}(\bar V_j,\mathbb R^n\setminus U)>0$. Repeat the already proved smooth-coefficient construction at scales $0<r_j<d_j/4$ tending to zero, so all coefficient, forcing and lifting convolution evaluations near $\bar V_j$ remain inside $U$. Uniform ellipticity, symmetry, the expanded-potential sign and all global $C^\alpha$ bounds are preserved. For the undifferentiated $a,b$ terms, their finite first-derivative bounds yield a global Lipschitz bound on this fixed smooth domain: in each graph patch, sufficiently close points are connected inside a slightly larger patch by a path of length at most $C|x-y|$; a finite cover handles close pairs and the supremum bound handles separated pairs. The prescribed highest-derivative Hölder norms then give the uniform expanded coefficient norms. The lifting mollifications have uniformly bounded $C^{2,\alpha}$ norms and converge uniformly near the closure. [given, F1, F4, F8]

1.20 Let $u_j$ be the smooth Dirichlet solutions on $V_j$ with forcing $f_j$ and boundary lifting $G_j$. Their existence and smoothness up to the smooth boundary were proved by the Sobolev-bootstrap helper before using any boundary Schauder estimate. The exponential comparison gives a uniform supremum bound. Apply [F8] to the already smooth zero-boundary functions $w_j=u_j-G_j$, whose forcings $f_j-L_jG_j$ have uniformly bounded $C^\alpha$ norms. The domain geometry and coefficient controls are uniform, so $\sup_j\|u_j\|_{C^{2,\alpha}(\bar V_j)}\le C(\|f\|_{0,\alpha;U}+\|G\|_{2,\alpha;\bar U})$. [given, F1, F2, F4, F8]

2.1 The existing interior compactness and exterior-ball boundary comparison arguments give a subsequence converging locally in $C^2(U)$ to the unique classical Dirichlet solution $u$. The displayed global derivative bounds pass to this local limit. For any fixed distinct $x,y\in U$, both points eventually lie in $V_j$, so their second-derivative Hölder quotient passes to the limit with the same common bound. Hence $D^2u$ is bounded and globally $\alpha$-Hölder on $U$, and extends continuously to the closure. The function and gradient extend continuously as well: bounded first and second derivatives give Lipschitz bounds along the controlled-length local interior paths in each graph patch, and separated pairs are bounded by the global suprema. These extensions are the continuous extensions of the interior derivatives. Consequently $u\in C^{2,\alpha}(\bar U)$ with the stated data estimate, obtained entirely from smooth approximants without assuming the original solution's boundary Hölder norm. Together with the parent's one-dimensional argument and the prior local existence, uniqueness, stability and energy steps, all branches follow. [given, F2, F3, F6, F8] ∎

## Remarks

The source's globally bounded $C^{2,\alpha}(U)$ claim for merely continuous boundary data and an exterior-sphere domain is false; the separate false statement and its native sector counterexample preserve that assertion and its refutation. The correct unconditional class here is local $C^{2,\alpha}$ with continuity on the closure.

The printed expression $\sum_{i,j}D_i(a_{ij}D_ju+b_i u)$ repeats the $b$ term $n$ times. The intended single-divergence expression and the displayed expanded coefficients are used here. The simple residual barrier constant depends on the expanded drift and potential; no dependence solely on the source's pointwise $\lambda_0,\Lambda,v$ bounds is asserted.

The smooth-boundary global branch is proved using explicit Newtonian/Poisson half-ball estimates and freezing on smooth interior approximants. The solution's boundary regularity is obtained only after passing the resulting uniform estimates to the local classical limit. The published boundary Schauder carrier's externally quoted half-ball input is not consumed. No new external source-reading credit is claimed by this repair.
