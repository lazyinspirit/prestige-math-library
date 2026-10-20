# Elliptic supplier proof proposal — cycle 1

Author: `/root/pinn_pde_repair/elliptic_supplier`, 2026-10-19. Proof notes only; no item, plan, manifest, receipt, gate, or verification stamp is changed. `CLAUDE.md`, `README.md`, schema/workflow instructions, the ML-36 plan section, batch-37 notes and the actual elliptic carriers were inspected. The configured `model_auto_compact_token_limit` is 500000; no credentials were printed. This author did not retrieve/read a new external source and claims no new external reading credit. The mathematical argument below is an authored proof using actual local analytic suppliers.

## Disposition and exact claim

Keep the source's global bounded $C^{2,\alpha}(U)$ assertion as a false statement and retain `cex-shin-elliptic-corner-regularity-on-exterior-sphere-domain` with its native $2\pi/3$ sector and $\chi(r)r^{3/2}\sin(3\theta/2)$ refutation. The correct existence theorem is separate:

Assume AC (and its countable/dependent instances). Let $n\ge2$, $0<\alpha<1$, and let $U\subset\mathbb R^n$ be bounded open, with an exterior ball at each boundary point. It may in addition be Lipschitz, as required by the approved PINN branch. Let
$$Lu=A:D^2u+\beta\cdot Du+cu,$$
where $A=A^T\in C^{1,\alpha}(U)$, $\beta,c\in C^{0,\alpha}(U)$ have finite global indicated norms, $\lambda I\le A\le\Lambda I$, and $c\le0$. For every $f\in C^{0,\alpha}(U)$ and $g\in C(\partial U)$ there is exactly one
$$u\in C^{2,\alpha}_{\mathrm{loc}}(U)\cap C(\bar U)$$
with $Lu=f$ and $u=g$. The stability estimate in `lem-shin-elliptic-residual-stability` holds in this class, against every $h\in C^2(U)\cap C(\bar U)$ for which the displayed residual norm is finite. If $g=0$, this solution is also in $H^1_0(U)$, with an energy bound depending only on the displayed coefficient bounds, $\|DA\|_\infty$, $U$, and $\|f\|_\infty$. More generally, if $g$ is the restriction of $G\in C^{2,\alpha}(\bar U)$ (ambient extension interpretation suffices), then $u-G\in H^1_0(U)$.

For the intended source divergence operator $L u=\sum_{i,j}D_i(a_{ij}D_ju)+\sum_iD_i(b_i u)+\sum_i c_iD_iu+du$, set $A=(a_{ij})$, $\beta_j=\sum_iD_ia_{ij}+b_j+c_j$, $c=\sum_iD_ib_i+d$. The source's finite $C^{1,\alpha}/C^\alpha$ assumptions give exactly the finite norms above. Constants in a nondivergence maximum estimate may depend on the expanded drift and expanded potential, hence on the bounded first derivatives of $a,b$; do not claim these are bounded by the source's pointwise $\Lambda,v$ alone.

The printed carrier/source expression $\sum_{i,j}D_i(a_{ij}D_ju+b_i u)$ repeats the $b_i u$ term $n$ times and does not have the intended expansion just given. Preserve that printed formula/discrepancy separately; this proof uses the intended single $b$ divergence term and the displayed expanded coefficients.

The proof of this theorem does **not** consume the published global Schauder theorem, its boundary Schauder supplier, or an externally quoted half-ball lemma. Smooth approximants are solved by weak Fredholm theory plus the Sobolev bootstrap proved below.

## Exact logical suppliers

Existing actual items needed for the proof, beyond the operator/Hölder/Sobolev definitions:

- `lem-shin-elliptic-residual-stability`: its explicit exponential barrier also proves comparison, including the case $Lz\ge0$, $z|_{\partial V}\le0$ on an arbitrary bounded open $V$.
- `thm-fredholm-alternative-for-weak-elliptic-dirichlet-problems`: applied to the **negative** of the positive-principal operator after conversion to divergence form.
- `thm-global-h-two-dirichlet-regularity` and its actual local inputs `lem-tangential-h-two-estimate-near-a-flat-dirichlet-boundary`, `lem-normal-second-derivative-recovered-from-the-elliptic-equation`; used for the smooth-boundary Sobolev bootstrap below.
- `thm-interior-h-k-plus-two-elliptic-regularity`: interior pieces of the same bootstrap.
- `thm-extension-theorem-for-bounded-smooth-domains`, `thm-higher-order-sobolev-embedding`: turn sufficiently high integer Sobolev regularity on a smooth domain into $C^2(\bar V)$, and identify the zero trace with zero boundary restriction. The trace identification can be supplied by `lem-sobolev-trace-agrees-with-continuous-boundary-values` and `thm-kernel-of-the-trace-is-w-one-p-zero` on these smooth domains.
- `thm-interior-schauder-estimate-for-uniformly-elliptic-equations`: uniform local estimates for the smooth classical approximants, and local compactness of the Hessians.
- `thm-convolution-with-a-mollifier-is-smooth-and-differentiates-under-the-integral-sign`: explicit smoothing below; `thm-morse-sard-for-euclidean-maps`: regular levels of the smoothed distance produce smooth relatively compact approximating domains.
- `thm-tietze-extension-theorem`: a bounded continuous extension of the continuous boundary datum to $\mathbb R^n$. Its ambient space is metric, hence normal, and the boundary is closed.
- `cor-real-and-euclidean-vector-valued-ascoli-arzela`: compact subsequences on interior compact sets, followed by a countable diagonal extraction.
- For the zero-boundary energy assertion only: bounded sequences in a Hilbert space have weakly convergent subsequences and a norm-closed linear subspace is weakly closed; these can be supplied by the local Hilbert weak compactness result, or proved by the separable-span argument given below. Add `def-axiom-of-choice`, `def-countable-choice` to the final theorem's dependencies. AC is inherited by Fredholm/extension/embedding/compactness; no claim of choice-free analysis is made.

Suggested new helper is `lem-shin-smooth-dirichlet-approximants-from-sobolev-bootstrap`, proved in the next section. It has an established statement (smooth elliptic Dirichlet solvability), not an AI-generated logical-supplier classification. A second helper `lem-shin-zero-boundary-classical-solution-has-finite-energy` may package the last section. Neither new helper exists as an item yet.

## 1. Smooth Dirichlet solvability, with the boundary bootstrap proved

**Lemma.** Let $V\Subset\mathbb R^n$ have $C^\infty$ boundary. Suppose $A,\beta,c,F,G$ are smooth on a neighborhood of $\bar V$, $A=A^T\ge\lambda I$, and $c\le0$. There is a unique $u\in C^\infty(\bar V)$ solving $Lu=F$, $u=G$ on $\partial V$. Here $C^\infty(\bar V)$ means smooth to every finite order from inside; an ambient extension for each finite order follows from the smooth extension theorem. Constants in higher norms need not be uniform across domains or coefficients.

First establish the regularity fact needed to test the homogeneous kernel: a zero-trace weak solution with smooth coefficients and smooth forcing on a smooth bounded domain lies in $H^k(V)$ for every integer $k$. Write the negative operator as
$$P=-L=-\partial_i(A_{ij}\partial_j)+(\partial_iA_{ij}-\beta_j)\partial_j-c.$$
Its principal coefficients are Lipschitz and uniformly elliptic, and its lower coefficients are bounded. Global $H^2$ regularity gives the base $u\in H^2(V)$.

Here is the full higher-order induction, rather than an appeal to boundary smoothness. Assume $u\in H^{m+1}(V)$ for some $m\ge1$. On an interior patch, the local higher-order Sobolev theorem gives $H^{m+2}$ on a smaller patch. On a boundary patch, use a smooth graph chart and nested smooth cutoffs as in the actual global $H^2$ proof. In the flattened coordinates the cutoff solution $v$ has compact lateral support in $\overline H$, belongs to $H^{m+1}(H)$, has zero trace, and satisfies
$$Pv=-a^{ij}D_iD_jv+B^iD_iv+Cv=F_0.$$
The transformed coefficients are smooth with $a^{nn}\ge\lambda'>0$, and $F_0\in H^m$ on the patch after localization; the cutoff commutators have order at most one and thus belong to $H^m$ by the induction hypothesis. A further cutoff identically one on the desired smaller patch avoids all artificial lateral boundaries.

For every tangential multi-index $\gamma$ of order $m$, put $w=D_{\mathrm{tan}}^\gamma v$. It belongs to $H^1$ and has zero trace on the flat face. The latter follows by tangential difference quotients: every quotient of a zero-trace $H^1$ function is zero trace, and the iterated quotients converge in $H^1$ when $v\in H^{m+1}$; the trace kernel is closed. Apply the product rule in distributions to obtain
$$Pw=D_{\mathrm{tan}}^\gamma F_0+\sum_{0<\eta\le\gamma}\binom\gamma\eta(D_{\mathrm{tan}}^\eta a^{ij})D_iD_jD_{\mathrm{tan}}^{\gamma-\eta}v-\sum_{0<\eta\le\gamma}\binom\gamma\eta(D_{\mathrm{tan}}^\eta B^i)D_iD_{\mathrm{tan}}^{\gamma-\eta}v-\sum_{0<\eta\le\gamma}\binom\gamma\eta(D_{\mathrm{tan}}^\eta C)D_{\mathrm{tan}}^{\gamma-\eta}v.$$
Every term is $L^2$: the largest derivative of $v$ in a commutator has order $m+1$, since $|\eta|\ge1$. Multiplying $w$ by the further cutoff adds only $L^2$ commutators, since $w\in H^1$. Convert $P$ back to divergence form and apply precisely the flat-boundary tangential $H^2$ lemma plus normal recovery (and the interior $H^2$ input) used in the global $H^2$ proof. This gives $w\in H^2$ on the smaller half-patch. Therefore all derivatives of $v$ of total order $m+2$ with at most two normal differentiations are $L^2$ there.

Recover the remaining order-$m+2$ derivatives by induction on their number $q\ge3$ of normal differentiations. In distributions differentiate the equation by $D_n^{q-2}D_{\mathrm{tan}}^\gamma$, where $|\gamma|=m+2-q$, and isolate the term
$$-a^{nn}D_n^qD_{\mathrm{tan}}^\gamma v.$$
When all $m$ derivatives fall on $v$, every other principal term has at most $q-1$ normal differentiations and is already $L^2$ by this normal-count induction. If any derivative falls on a coefficient, the derivative of $v$ has order at most $m+1$, hence is $L^2$ by the original Sobolev induction. Differentiated lower-order terms also have order at most $m+1$, and the differentiated $F_0$ is $L^2$. The reciprocal $1/a^{nn}$ is smooth and bounded on the patch. Division proves that the missing distributional derivative is represented by an $L^2$ function. There is no circular assumption of its boundary integrability: the distribution identity itself supplies the derivative, exactly as in the normal-recovery lemma. This proves $H^{m+2}$ on every smaller boundary patch. A finite cover proves $u\in H^{m+2}(V)$, completing the induction.

For any fixed $r$, choose $k$ with $k-n/2>r+1/2$. Smooth-domain extension and the higher-order Sobolev embedding give a $C^r(\bar V)$ representative. Representatives at different $r$ coincide, since continuous representatives equal almost everywhere must agree everywhere. Thus $u\in C^\infty(\bar V)$. Its zero trace equals its zero classical boundary value.

Now apply the weak Fredholm theorem to $P$ on $H^1_0(V)$. Every element of the homogeneous kernel has the just-proved smoothness up to the boundary. The classical comparison principle for $L$ with $c\le0$ makes that kernel zero: apply it to $u$ and $-u$. The first Fredholm alternative therefore gives a unique weak solution for every smooth forcing. For the specified boundary value, apply it to $v=u-G$ with forcing $-F-PG\in C^\infty(\bar V)$. The regularity argument makes $v$ smooth to the boundary, and $u=v+G$ solves the required problem. Uniqueness follows from the same comparison principle. This proves the lemma without a boundary Schauder theorem or continuity-method premise.

## 2. Constructing the approximants

Let $\delta(x)=\operatorname{dist}(x,\mathbb R^n\setminus U)$ on all of $\mathbb R^n$; it is nonnegative, 1-Lipschitz, vanishes outside $U$, and has compact support because $U$ is bounded. Fix a nonnegative unit-mass smooth mollifier supported in the unit ball. Put $\varepsilon_j\downarrow0$ and $\delta_j=\rho_{\varepsilon_j}*\delta$. Then
$$|\delta_j-\delta|\le\varepsilon_j.$$
Choose a regular value $t_j\in(2\varepsilon_j,3\varepsilon_j)$, using the local Euclidean Morse–Sard theorem, and set $V_j=\{\delta_j>t_j\}$. This is bounded with compact smooth boundary, satisfies $\bar V_j\subset U$ (indeed $\delta\ge t_j-\varepsilon_j>\varepsilon_j$ on its closure), and contains $\{\delta>4\varepsilon_j\}$. Every compact subset of $U$ is contained in $V_j$ for all sufficiently large $j$. Discard an initial empty $V_j$ if necessary. Nestedness is not required anywhere below. If there are several components, use the same argument componentwise; a compact smooth boundary has a finite graph cover and the proof supplies the same finite-cover regularity on their union.

Choose $s_j<\varepsilon_j/4$ tending to zero and mollify the original coefficients and forcing at scale $s_j$ on a neighborhood of $\bar V_j$:
$$A_j=\rho_{s_j}*A,\quad\beta_j=\rho_{s_j}*\beta,\quad c_j=\rho_{s_j}*c,\quad f_j=\rho_{s_j}*f.$$
Only values inside $U$ are used there. Consequently $A_j=A_j^T$, $\lambda I\le A_j\le\Lambda I$, $c_j\le0$, and the sup bounds of $\beta_j,c_j,f_j,DA_j$ do not exceed the original corresponding bounds. On every fixed interior ball, their Hölder norms are uniformly bounded and they converge uniformly to the original coefficients/data; $DA_j\to DA$ uniformly locally as well. The Hölder bound follows directly by integrating $|F(x-z)-F(y-z)|\le[F]_\alpha|x-y|^\alpha$. Each coefficient is smooth near $\bar V_j$; its higher derivatives can grow with $j$, which does not matter.

Extend $g$ to a bounded continuous $G$ on $\mathbb R^n$ using Tietze and set $G_j=\rho_{s_j}*G$. Uniform convergence $G_j\to G$ holds on any fixed compact neighborhood of $\bar U$, by uniform continuity there. Also $\|G_j\|_\infty\le\|G\|_\infty$. The lemma gives a smooth classical $u_j$ on $\bar V_j$ satisfying
$$L_ju_j=f_j\quad\hbox{in }V_j,\qquad u_j=G_j\quad\hbox{on }\partial V_j.$$

## 3. A uniform global bound independent of the artificial boundary

Take a slab $a\le x_1\le b$ containing $\bar U$, put $B=\sup_j\|\beta_{j,1}\|_\infty$, $C_0=\sup_j\|c_j\|_\infty$, and choose $\kappa$ with $\lambda\kappa^2-B\kappa-C_0\ge1$. For $\psi=e^{\kappa x_1}$, $L_j\psi\ge e^{\kappa a}=:\eta>0$. Fix $M>e^{\kappa b}$ and put $\Phi=M-\psi>0$. Then $L_j\Phi\le-\eta$ for every $j$.

Let $Q=\|G\|_\infty$ and $R=\|f\|_\infty$. On $\partial V_j$, both $u_j-Q-(R/\eta)\Phi$ and $-u_j-Q-(R/\eta)\Phi$ are nonpositive. Their $L_j$ images are nonnegative, since $c_j\le0$, $|f_j|\le R$ and $L_j\Phi\le-\eta$. Comparison gives
$$|u_j|\le Q+(R/\eta)\|\Phi\|_\infty=:M_0$$
on $V_j$. This constant depends only on the original domain/slab, uniform ellipticity and expanded coefficient sup bounds, $R,Q$. It is independent of $j$, of the smoothness of $\partial V_j$, and of all higher coefficient derivatives.

## 4. Local convergence and the PDE

For every ball $B_{2r}(x)\Subset U$, it is contained in $V_j$ for large $j$. Apply the actual interior Schauder theorem to $u_j$ there. All coefficient $C^\alpha$ norms and ellipticity constants are uniformly controlled on that fixed ball, $\|u_j\|_\infty\le M_0$, and the $C^\alpha$ norm of $f_j$ is uniformly bounded. Hence $u_j$ is uniformly bounded in $C^{2,\alpha}(B_r(x))$.

Cover $U$ by a countable family of such inner balls with rational centers/radii. Arzelà–Ascoli on each smaller closed ball and diagonal extraction give one subsequence for which $(u_j,Du_j,D^2u_j)$ converges uniformly on every compact subset of $U$. The fundamental theorem of calculus on coordinate segments identifies the limits with $(u,Du,D^2u)$; their compatibility on overlapping balls follows from uniform convergence. Passing each Hessian Hölder difference quotient to the limit proves $u\in C^{2,\alpha}_{\mathrm{loc}}(U)$. Uniform local convergence of all coefficients/data and derivatives gives $Lu=f$ pointwise. The uniform bound gives $|u|\le M_0$.

## 5. Exterior-ball barrier and continuous attainment of arbitrary boundary data

Fix $q\in\partial U$. Let $B_R(z)$ be an exterior ball tangent at $q$. Replace it by the smaller ball with center $z'=(z+q)/2$ and radius $r_0=R/2$. Its **closed** ball is contained in $B_R(z)\cup\{q\}$: for $x\ne q$ on the smaller closed ball, strict triangle inequality gives $|x-z|<R$. Thus
$$|x-z'|\ge r_0\quad(x\in\bar U),\qquad |x-z'|=r_0\iff x=q.$$
This strict contact property is necessary; the original exterior ball could touch the boundary at several points.

Write $r=|x-z'|$, $e=(x-z')/r$, and let $R_1=\max_{\bar U}r$. Choose an integer $m>0$ so large that
$$(m+2)\lambda-n\Lambda-R_1\sup_j\|\beta_j\|_\infty\ge1.$$
Define $W_0=r_0^{-m}-r^{-m}$. It is smooth near $\bar U$, nonnegative there, vanishes exactly at $q$, and a direct differentiation gives
$$L_jW_0=m r^{-m-2}\bigl(\operatorname{tr}A_j-(m+2)e^TA_je+r\beta_j\cdot e\bigr)+c_jW_0\le-mr^{-m-2}\le-mR_1^{-m-2}.$$
After multiplying by $R_1^{m+2}/m$, obtain a single $W_q\ge0$ with $W_q(q)=0$, $W_q>0$ on $\bar U\setminus\{q\}$, and $L_jW_q\le-1$ for every $j$.

Fix $0<\epsilon<1$. Continuity of $G$ at $q$ gives a neighborhood $N$ of $q$ where $|G(x)-g(q)|<\epsilon/2$. Uniform approximation gives $|G_j-G|<\epsilon/2$ on $\bar U$ for all sufficiently large $j$. Thus $|G_j-g(q)|<\epsilon$ on $N\cap\bar U$. On the compact complementary set $\bar U\setminus N$, $W_q$ has a strictly positive minimum; choose $K$ so large that
$$|G_j-g(q)|\le\epsilon+KW_q\quad\hbox{on all of }\bar U$$
for all sufficiently large $j$, and also
$$K\ge R+C_0(|g(q)|+\epsilon).$$
Apply comparison on $V_j$ to
$$z_j^+=u_j-g(q)-\epsilon-KW_q,\qquad z_j^-=-u_j+g(q)-\epsilon-KW_q.$$
They are nonpositive on $\partial V_j$, and
$$L_jz_j^+=f_j-c_j(g(q)+\epsilon)-KL_jW_q\ge-R-C_0(|g(q)|+\epsilon)+K\ge0,$$
$$L_jz_j^-=-f_j+c_j(g(q)-\epsilon)-KL_jW_q\ge-R-C_0(|g(q)|+\epsilon)+K\ge0.$$
Therefore
$$|u_j(x)-g(q)|\le\epsilon+KW_q(x)\quad(x\in V_j)$$
for all sufficiently large $j$. Passing to the interior limit gives the same bound for $u$ on $U$. Let $x\to q$ from inside $U$ and use $W_q(x)\to0$; then $\limsup_{x\to q}|u(x)-g(q)|\le\epsilon$. Since $\epsilon$ was arbitrary, $u(x)\to g(q)$. Set $u=g$ on $\partial U$. The resulting function is continuous at every boundary point and in the interior, hence belongs to $C(\bar U)$.

This proves existence. The exponential-barrier comparison from the residual-stability lemma applied to the difference of two solutions proves uniqueness. Its stated residual estimate applied to $u-h$ proves the stability branch without any regularity of $h$ stronger than $C^2(U)\cap C(\bar U)$ plus bounded residual. No boundary-correction existence needs to be assumed.

## 6. Zero-boundary finite energy, proved from the same approximants

Now set $g=0$ and choose $G=G_j=0$ exactly. Let $u_j$ be the corresponding approximants above. For them, the positive equation expands equivalently to
$$\operatorname{div}(A_jDu_j)+q_j\cdot Du_j+c_ju_j=f_j,\qquad q_j=\beta_j-\operatorname{div}A_j.$$
The bounds on $DA_j,\beta_j$ give $\sup_j\|q_j\|_\infty\le Q_1<\infty$. This is where the original $C^{1,\alpha}$ regularity of $A$ is used; existence in the purely nondivergence formulation required only $C^\alpha$ principal coefficients after an appropriate different approximation argument.

Multiply by $u_j$, integrate over $V_j$, and use $u_j=0$ on its smooth boundary:
$$\lambda\|Du_j\|_2^2\le\|f_j\|_2\|u_j\|_2+Q_1\|Du_j\|_2\|u_j\|_2+\|c_j\|_\infty\|u_j\|_2^2.$$
Young's inequality gives
$$\|Du_j\|_2^2\le C\bigl(\|f_j\|_2^2+\|u_j\|_2^2\bigr).$$
The uniform supremum estimate with $Q=0$ yields $\|u_j\|_2\le |U|^{1/2}C\|f\|_\infty$, and $\|f_j\|_2\le|U|^{1/2}\|f\|_\infty$. Thus
$$\sup_j\|u_j\|_{H^1(V_j)}\le C_U\|f\|_\infty.$$
Because $u_j$ is smooth to its smooth boundary and zero there, it lies in $H^1_0(V_j)$. Extend it by zero to $U$; approximation of each class by $C_c^\infty(V_j)\subset C_c^\infty(U)$ proves that this extension belongs to $H^1_0(U)$ and has the same $H^1$ norm.

For completeness, no unproved compactness premise is hidden here. In the Hilbert space $H^1_0(U)$, take the closed span of the countable sequence of extensions. Apply Gram–Schmidt to its listed vectors, discarding zeros, to obtain a finite or countable orthonormal basis of that span. Boundedness, diagonal extraction of the scalar coordinates, and Bessel's inequality give square-summable limiting coordinates and a vector in that closed span. Approximate each test vector by its finite basis sums; the common norm bound then proves weak convergence to this vector. Its $L^2$ restriction to every compact interior ball agrees with $u$, since the chosen local-classical subsequence converges uniformly there. Thus the weak limit is the function $u$ almost everywhere on $U$. It follows that
$$u\in H^1_0(U),\qquad\|u\|_{H^1(U)}\le C_U\|f\|_\infty.$$
Equivalently the weak limit in $H^1(U)$ remains in the closed linear subspace $H^1_0(U)$; the direct closed-span construction already takes place in that subspace.

Passing the original weak equations to the limit against any $\varphi\in C_c^\infty(U)$ is legitimate by local uniform convergence of coefficients/data and weak convergence of gradients. The divergence representation above shows that $u$ solves the variational equation; density extends it to all $H^1_0$ tests because $A,q,c,f$ are bounded. This establishes both the finite-energy membership and the correct weak interpretation, rather than inferring them from continuity and zero boundary values alone.

For a general $C^{2,\alpha}$ lifting $G$, apply this zero-boundary result to $v=u-G$ with forcing $f-LG\in C^{0,\alpha}(U)$. Uniqueness of the classical Dirichlet problem identifies that zero-boundary solution with $u-G$.

**Exact PINN energy consequence.** Let $e\in C^2(U)\cap C(\bar U)$ vanish on $\partial U$, and assume $Le=q\in C^{0,\alpha}(U)$. Construct the zero-boundary solution $v$ for datum $q$ by this theorem. It belongs to $H^1_0(U)$. The difference $e-v$ is zero-boundary classical and $L(e-v)=0$, so comparison makes it zero. Therefore $e\in H^1_0(U)$, and its weak equation and all zero-trace energy tests are legitimate. Apply this with $e=h_m-u^*$ and $q=Lh_m-f$. It is the needed bridge for `lem-shin-elliptic-energy-estimate`; continuous zero trace by itself was not used as a Sobolev-membership theorem. If one wants to allow merely bounded continuous $q$ rather than Hölder $q$, a further approximation/weak-regularity argument is needed; the approved PINN hypotheses already give Hölder $q$.

## 7. Rich global regularity branch, and its exact supplier boundary

If $U$ is bounded $C^{2,\alpha}$, all expanded coefficients are $C^\alpha(\bar U)$ and the boundary datum is the trace of $G\in C^{2,\alpha}(\bar U)$, the solution just constructed is $C^2(U)\cap C(\bar U)$. The actual Statement of `thm-boundary-schauder-estimate-for-the-dirichlet-problem` applies to exactly this input and asserts
$$u\in C^{2,\alpha}(\bar U),\qquad\|u\|_{2,\alpha;\bar U}\le C\bigl(\|u\|_\infty+\|f\|_{0,\alpha;\bar U}+\|G\|_{2,\alpha;\bar U}\bigr).$$
The preceding exponential comparison bounds $\|u\|_\infty$ by the data and yields the full data estimate. This is the richest appropriate global branch under smooth boundary and smooth boundary data. Merely continuous $g$ is insufficient for it even on a ball.

**Honest transitive status.** The current boundary Schauder carrier uses an externally quoted [F4] for the half-ball boundary regularity/a priori estimate, not a proved local half-ball item. It explicitly says the regularity upgrade must precede applying the a priori estimate. Thus the global branch above is fully justified *relative to that published supplier's Statement*, but the supplier's current local-authoring gap must remain visible if the parent requires every transitive analytic lemma newly closed. This proof does not falsely claim to have repaired its half-ball argument. Do not certify the branch as citation-free solely from the supplier's published status. The exterior-sphere existence/stability and zero-boundary energy results in Sections 1–6 bypass this gap completely.

## 8. One-dimensional branch

The PINN $n=1$ treatment is separate. On a bounded interval $(a,b)$, the equation $a(x)u''+\beta(x)u'+c(x)u=f$ is a first-order linear system for $(u,u')$. Picard iteration of its integral equation on short subintervals, followed by finitely many continuations, gives solutions for arbitrary initial value/slope. Subtract one particular solution and solve for the unknown initial slope. The endpoint coefficient of that slope cannot vanish, since otherwise the homogeneous solution with $u(a)=0$, $u'(a)=1$ would vanish at $b$, contradicting the same exponential-barrier comparison. Thus arbitrary two endpoint values determine a unique $C^{2,\alpha}([a,b])$ solution. On a bounded Lipschitz open subset of $\mathbb R$, the compact finite boundary-chart cover gives a finite union of intervals, so solve on each. This branch needs an actual locally proved linear-ODE existence supplier if made into an item; no new ODE source reading is claimed here. The proof in Sections 1–6 is the fully developed $n\ge2$ supplier requested for the main sampling regime.

## 9. Parabolic common-supplier assessment

No complete parabolic proof is claimed by these notes. Smooth spatial Sobolev bootstrapping does not supply time-dependent weak-to-classical regularity, and freezing coefficients in time is not a substitute for proving it. A natural parabolic analogue would require a locally proved interior parabolic Schauder regularity/estimate and smooth approximate initial-boundary solvability (with the necessary approximant compatibility), followed by parabolic exterior-ball barriers and an initial-time continuity barrier. The existing heat-only maximum principle does not provide those inputs for variable coefficients. These obligations are separate from the elliptic result and must not be reported as resolved by it. The parent has a separate parabolic supplier assignment.

## Review checklist for the parent

The delicate points are now explicit: (i) negative versus positive divergence convention in Fredholm; (ii) the global smooth Sobolev bootstrap uses differentiated *nondivergence* equations to keep commutators in $L^2$; (iii) Sobolev tangential derivatives retain zero flat-face trace; (iv) recovery induction counts normal derivatives, so never assumes the desired missing derivative; (v) smooth-domain approximants need not be nested; (vi) the smaller exterior ball has unique closed contact; (vii) the constant $g(q)$ contributes a zero-order term in both comparison inequalities; (viii) zero-boundary finite energy follows from zero extensions and a uniform first-derivative coefficient bound, rather than from continuity at the boundary; (ix) the global Schauder transitive citation gap is honestly separated; (x) no parabolic completion or new external-source reading has been invented.
