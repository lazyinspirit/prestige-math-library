---
id: lem-ip-local-analytic-elliptic-packet-calculus
kind: lemma
title: "Local analytic elliptic packet reconstruction"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - lem-ip-analytic-cutoff-sequence
  - lem-ip-holomorphic-morse-normalization-and-gaussian-contour
  - thm-ip-analytic-stationary-phase-with-exponential-remainder
  - cor-cauchy-inequalities
  - thm-stokes-theorem-for-smooth-singular-chains
  - thm-holomorphic-inverse-function-theorem-several-variables
  - thm-compactly-supported-distributions-are-tempered
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Johannes Sjöstrand, Singularités analytiques microlocales"
      url: "https://www.numdam.org/item/AST_1982__95__R3_0.pdf"
      locator: "Theorem 1.5, printed p. 8; §4, equations (4.1)–(4.4), Theorem 4.2, Remark 4.3 and Theorem 4.5, printed pp. 23–31; §5, equations (5.8)–(5.10) and Theorem 5.3, printed pp. 33–37; §6, Definition 6.1 and Proposition 6.2, equations (6.3)–(6.5), printed pp. 37–38. Exact calculus statements imported externally; reading limits below."
dependency_level: 2
---

## Statement

Work near $(q_0,p_0)\in\mathbb R^n\times(\mathbb R^n\setminus0)$. A normalized positive analytic packet phase is a holomorphic function $\phi(y,q,p)$ on a fixed complex neighborhood of the indicated real variables, such that, for real arguments,
$$
\phi(q,q,p)=0,\qquad \partial_y\phi(q,q,p)=-p,\qquad \operatorname{Im}\phi(y,q,p)\ge c|y-q|^2
$$
for some $c>0$. A classical analytic amplitude is realized on each smaller complex neighborhood by
$$
a(y,q,p;\lambda)=\sum_{j<\epsilon\lambda}a_j(y,q,p)\lambda^{-j},\qquad \sup|a_j|\le C^{j+1}j!,
$$
with sufficiently small fixed $\epsilon>0$. Changing $\epsilon$ to a smaller positive number changes the realization by an exponentially small function on a smaller neighborhood. An elliptic amplitude has $a_0(q_0,q_0,p_0)\ne0$.

For a distribution $u$ localized to a sufficiently small fixed compact neighborhood of $q_0$, the uniform exponential decay of
$$
\langle u(y),a(y,q,p;\lambda)e^{i\lambda\phi(y,q,p)}\rangle
$$
for $(q,p)$ in a neighborhood of $(q_0,p_0)$ is independent of the normalized positive phase and elliptic classical analytic amplitude. Smooth fixed cutoffs equal to one near the packet centers are understood. This criterion agrees with the Gaussian criterion with unit directions and arbitrary $\lambda\ge1$.

More precisely, after shrinking the parameter neighborhood $W$, every other such packet $v_\beta$ with $\beta$ in a smaller $W_0\Subset W$ has a representation
$$
v_\beta(y;\lambda)=\int_W a(y,\alpha;\lambda)e^{i\lambda\phi(y,\alpha)}K(\beta,\alpha;\lambda)\,d\alpha+R_\beta(y;\lambda),
$$
where $|K|\le C\lambda^L$ and $\|R_\beta\|_{C^m}\le C_m e^{-c_m\lambda}$ on the fixed localization compact, for every fixed $m$. There is a representation in the reverse direction as well. All estimates are uniform on the stated smaller neighborhoods. Thus the inverse is an actual local operator modulo exponentially small errors, rather than just a formal inverse series.

## Statement references

[[lem-ip-analytic-cutoff-sequence|Finite-order localizers]]

[[lem-ip-holomorphic-morse-normalization-and-gaussian-contour|Holomorphic normalization and contour deformation]]

[[thm-ip-analytic-stationary-phase-with-exponential-remainder|Normalized analytic stationary phase]]

[[cor-cauchy-inequalities|Holomorphic derivative bounds]]

## Facts & Assumptions

**Given:** The phase, amplitude and nested compact neighborhoods in the statement. All holomorphic functions used below are restricted to smaller fixed neighborhoods before a constant is chosen.

[F1] [[cor-cauchy-inequalities]] bounds derivatives of a holomorphic function on a smaller polydisc by its supremum times $\alpha!r^{-|\alpha|}$.

[F2] [[lem-ip-holomorphic-morse-normalization-and-gaussian-contour]] gives local quadratic coordinates, Gaussian integrals and Stokes deformation with controlled boundary.

[F3] [[thm-ip-analytic-stationary-phase-with-exponential-remainder]] gives factorial expansion and normalized exponential remainder after truncation proportional to $\lambda$.

[F4] [[lem-ip-analytic-cutoff-sequence]] supplies compact smooth localizers with derivatives through order $N$ bounded by $C(CN)^{|\alpha|}$.

[F5] [[thm-holomorphic-inverse-function-theorem-several-variables]] supplies holomorphic local inverses.

[F6] [[thm-stokes-theorem-for-smooth-singular-chains]] permits deformation of holomorphic integral kernels on truncated contours.

[F7] [[thm-compactly-supported-distributions-are-tempered]] and continuity on a fixed support give a finite derivative order for every distributional pairing below.


[F8] **External input — specified analytic contour operator.** Sjöstrand, *Singularités analytiques microlocales*, Astérisque 95 (1982), §4, printed pp. 23–24, equations (4.1)–(4.4), defines the operator on weighted holomorphic germs $H_{\rho,x_0}$, with analytic amplitude near $(x_0,x_0,\xi_0)$ and $\xi_0=(2/i)\partial_x\rho(x_0)$. Its real $2n$-cycle is $\Gamma(x)=\{(y,\theta):\theta=(2/i)\partial_x\rho(x)+iR\overline{x-y},\ |x-y|\le r\}$, with $R$ sufficiently large and $r$ sufficiently small. Integrate the holomorphic volume form $dy\wedge d\theta$, with orientation chosen so its pullback is $(2R)^n dL(y)$, and prefactor $(2\pi h)^{-n}$. The resulting kernel has Gaussian bound with loss $(R-C)|x-y|^2/h$. Changing admissible radii/contours changes the germ only by an exponentially smaller weighted germ; amplitude $1$ gives the identity in that sense. This is an external contour/operator theorem, not an inference from formal symbols alone.

[F9] **External input — actual analytic composition and elliptic inverse.** The same source, Theorem 1.5 (printed p. 8), Theorem 4.2 (pp. 27–28), Remark 4.3 (p. 28) and Theorem 4.5 (pp. 31–32), supplies the analytic classical inverse symbol, actual operator composition with the usual reduced-symbol formula, nonstandard holomorphic-phase changes with invertible mixed derivative, and two-sided elliptic inverse on the corresponding weighted holomorphic germs. Analytic symbols and their equivalence are those of §1 (pp. 2–5): factorial coefficient bounds, truncation proportional to $h^{-1}$, and equality modulo an exponentially smaller germ. These are imported results; the formal algebra below identifies their application but is not claimed to independently reconstruct this contour calculus.

[F10] **External input — real realization and packet transition.** The same source, §5, equations (5.8)–(5.10) (printed pp. 33–35), its packet-action lemma (pp. 35–36), Theorem 5.3 (pp. 36–37), and Proposition 6.2 with equations (6.3)–(6.5) (p. 38), realizes positive analytic kernels on real variables with nested compact parameter domains and smooth spatial cutoffs. “Negligible” here means that $e^{c/h}$ times the error kernel is bounded in $C^\infty$ for some $c>0$ (definition on p. 34); in particular every fixed derivative is exponentially small on the smaller fixed compact. Classical analytic ellipticity gives the actual bidirectional packet superposition of (6.3)–(6.4), with transition kernel polynomially bounded in $h^{-1}$, uniformly on the smaller packet-parameter neighborhood. The source normalization is $\partial_y\phi=\alpha_\xi$; our phases are its specialization $\alpha=(q,-p)$, with absolute parameter Jacobian $1$. These real realization and packet-transition results are explicitly imported. They assert no global real-variable inverse outside the nested microlocal packet neighborhoods.

## Proof

**Given:** The data in the statement; put $h=\lambda^{-1}$. Complex conjugation of the coefficients of a holomorphic germ is denoted by a star: $\phi^*(z,\alpha)=\overline{\phi(\bar z,\bar\alpha)}$.

1.1 We retain the formal inverse algebra needed to identify the external operator construction [F9]. For a formal holomorphic symbol $p=\sum_{j\ge0}h^jp_j(x,\xi)$, with $|p_j|\le C^{j+1}j!$ on a fixed polydisc, define $ p\#q=\sum_{j,k,\gamma}\frac{h^{j+k+|\gamma|}}{i^{|\gamma|}\gamma!} (\partial_\xi^\gamma p_j)(\partial_x^\gamma q_k). $ There are finitely many terms in each degree. Associativity follows directly by applying the product rule to the two triple products: splitting a multi-index $\gamma=\mu+\nu$ contributes $\gamma!/(\mu!\nu!)$, which cancels its denominator and leaves identical terms. The map $p\mapsto P=p(x,\xi+hD_x)$, with $D_x=\partial_x/i$, respects this product; expansion by the product rule gives the displayed formula. [F1, algebra, construct]

1.2 The actual contour realization is [F8], with $\rho=-\operatorname{Im}S$ and $h=\lambda^{-1}$. In fixed-offset coordinates $y=x+w$, its oriented volume and prefactor give the explicit formula
$$
A_hv(x)=\left(\frac{R}{\pi h}\right)^n\int_{|w|\le r}\exp\left(\frac{-iw\cdot S_x(x)-R|w|^2}{h}\right)p\bigl(x,x+w,S_x(x)-iR\overline w;h\bigr)v(x+w;h)\,dL(w).
$$
Here $dL$ is Euclidean $2n$-dimensional measure, the phase-space cycle and its orientation are exactly those of [F8], and $R,r$ are fixed within the common holomorphy neighborhood. The Gaussian bound and amplitude-$1$ identity are the specified operator theorem [F8]; equivalently, for amplitude $1$ the holomorphic factor $e^{-iw\cdot S_x(x)/h}v(x+w;h)$ has constant Taylor coefficient $v(x;h)$ and all positive-degree holomorphic monomials have zero angular integral. The remaining Gaussian tail is exponentially small in the weighted germ. For this pluriharmonic weight the fixed-offset formula is holomorphic in $x$; it also specifies precisely the previously implicit cycle and measure. The fixed-derivative real-localization bounds used later are [F10], rather than an assertion obtained solely from this formal identity. [F1, F8, F10, algebra, construct]

2.1 Here are estimates for this formal algebra that also control its inverse. Use nested complex $x$ neighborhoods $\Omega_t$, $0<t<t_0<1$, whose boundary separation is at least $t-s$, and keep $\xi$ in a smaller fixed polydisc. Write $P=\sum h^kP_k$, where $P_k$ has differential order at most $k$. Cauchy's inequality, first in the fixed $\xi$ polydisc and then in $x$, gives $ \|P_k\|_{t,s}\le C^{k+1} k^k(t-s)^{-k},\qquad 0<s<t<t_0. $ Indeed a term with $j+|\gamma|=k$ costs at most $C^{k+1}j!\gamma!(t-s)^{-|\gamma|}$; $j!\gamma!\le k!\le k^k$, $t-s<1$, and the number of terms is at most exponential in $k$. For $k=0$ use $0^0=1$. Let $f_k(P)$ be the least admissible constant in $\|P_k\|_{t,s}\le f_k(P)k^k(t-s)^{-k}$. If $R=PQ$, choose the intermediate radius with $r-s=j(t-s)/(j+k)$ for the term $P_jQ_k$. Then $ f_\ell(PQ)\le\sum_{j+k=\ell}f_j(P)f_k(Q). $ The endpoint cases use the same estimate without an intermediate loss. Consequently $\|P\|_\rho=\sum\rho^kf_k(P)$ is submultiplicative whenever finite. Conversely $p_k=P_k1$, evaluated with a fixed radius loss, satisfies $|p_k|\le C^{k+1}k^k\le (eC)^{k+1}k!$; the last inequality follows by integrating $\log t$ from $1$ to $k$. These estimates are on one fixed smaller neighborhood, independent of $k$. [F1, step 1.1, algebra]

3.1 If $p_0\ne0$, shrink so $1/p_0$ is bounded holomorphic. The formal product $p\#(1/p_0)=1-r$ has $r_0=0$ and finite $\|r\|_\rho$ for small $\rho$ by step 2.1; decreasing $\rho$ makes this norm less than $1/2$. Thus $ q=(1/p_0)\#\sum_{\ell\ge0}r^{\#\ell} $ has finite norm, because in each degree its defining sum is finite and the geometric norm sum is at most $2$. It follows that $q_j$ have factorial bounds on a fixed smaller neighborhood. This gives a right inverse. The identical construction on the other side gives a left inverse; associativity shows they agree. Truncating at $j<\epsilon/h$ realizes these symbols. A term with index $j$ has modulus at most $C(Chj)^j$; for $j\le\epsilon/h$ and $C\epsilon<1/2$ it is at most $C2^{-j}$. Two admissible truncations therefore differ by $O(e^{-c/h})$, also in every fixed derivative by [F1]. [F1, step 1.1, step 2.1, algebra, construct]

4.1 The actual composition and inverse statements invoked here are the external results [F9]–[F10]. The following calculation identifies their specialization and symbol; it is not an independent reconstruction of that analytic contour calculus. Products of these kernels are actual iterated contour integrals. All weights needed here are of this form, with $S$ the packet phase and its holomorphic critical value; thus the saddle phases used for contour comparison are holomorphic. Their composed contour is good: if the inner integration has loss $c|y-y(z)|^2$ and the outer one loss $c|z-z(x)|^2$, their sum controls the square distance from the combined critical point, since the critical-point maps have bounded derivatives. The holomorphic Morse coordinates [F2] identify this contour and the contour obtained by doing the integrations in the other order with graphs over a common negative-definite real subspace. Such graphs have slope less than one after a linear scaling; their straight interpolation has the same positive quadratic margin on a smaller ball. Stokes therefore changes the order and reduces the composition, with exponentially small boundary errors. Taylor expansion in $y-x$, followed by integration by parts in $\theta$, gives the full symbol $ p_{\mathrm{red}}(x,\xi;h)\sim\sum_\gamma\frac{h^{|\gamma|}}{i^{|\gamma|}\gamma!} \partial_\xi^\gamma\partial_y^\gamma p(x,y,\xi;h)|_{y=x}. $ For a product this is exactly the $\#$ formula in step 1.1. To estimate rather than just manipulate this expansion, apply [F3] on the good contour after its quadratic normalization. Cauchy bounds for the analytic amplitudes give $C^{N+1}N!h^N$ for the remainder after total degree $N$; each of the finitely many symbol indices contributes the convolution estimates in step 2.1. Taking $N=\lfloor\epsilon/h\rfloor$ makes this $O(e^{-c/h})$. The actual operator consequences are supplied by [F9]–[F10]: a zero reduced symbol acts by an exponentially small operator, and the inverse symbol of step 3.1 gives an actual two-sided inverse modulo such errors. Fixed-contour local remainders and symbols are holomorphic in $x$ by the fixed-offset representation in step 1.2, so Cauchy on a further smaller neighborhood controls their fixed derivatives. Errors involving smooth spatial cutoffs or moving outer boundaries are instead differentiated by the chain rule under the fixed-parameter boundary integrals. Each of their fixed $m$ derivatives costs at most $C_m h^{-M_m}$, or an additional fixed power of $N$ for a finite-order localizer with $N$ proportional to $h^{-1}$. The boundary has a fixed positive phase margin, so these polynomial losses are absorbed by reducing that margin. No Cauchy estimate is applied to a merely smooth cutoff error. [F1, F2, F3, F6, F9, F10, step 1.1, step 2.1, step 3.1, step 1.2, algebra]

5.1 The same calculation permits a nonstandard holomorphic phase $S(x,y,\theta)$ with $S(x,x,\theta)=0$ and invertible mixed derivative $S_{x\theta}$ at the diagonal. Indeed $ S(x,y,\theta)=(x-y)\cdot\Theta(x,y,\theta),\qquad \Theta=\int_0^1 S_x(y+t(x-y),y,\theta)\,dt. $ By [F5], $\theta\mapsto\Theta$ is a local biholomorphism. The change of variable, including its holomorphic Jacobian, gives the standard kernel of step 1.2. A good contour for one kernel is good for the other because the exponent is identical. Ellipticity is preserved by the nonzero Jacobian. Hence the composition and inverse theorems [F9], with the symbol identification above, hold for these phases too. [F5, step 1.2, step 4.1, algebra]

6.1 For the given positive phase form the kernel $ A(x,y;h)=h^{-3n/2}\int e^{i(\phi(x,q,p)-\phi^*(y,q,p))/h}a(x,q,p;h)\,dq\,dp. $ Locally this is a kernel of the type just constructed. To see this, first integrate in $q$ by analytic stationary phase. At $x=y=q$ the $q$ derivative vanishes, and the imaginary part of its Hessian is positive definite because $\operatorname{Im}\phi(x,q,p)+\operatorname{Im}\phi(y,q,p)\ge c(|x-q|^2+|y-q|^2)$. Its critical value $S(x,y,p)$ is zero at $x=y$, and $S_x(x,x,p)=-p$. Thus $S_{xp}=-I$ there. The resulting kernel has prefactor $h^{-n}$ and a classical analytic amplitude whose leading term is a nonzero Gaussian determinant times $a_0(x,x,p)$. It is elliptic. The actual elliptic inverse theorem [F9], with the phase and symbol identified in steps 1.2, 3.1, 4.1 and 5.1, gives an analytic operator $B$ with $AB=BA=I$ modulo exponential errors on the appropriate holomorphic germs. [F2, F3, F9, step 3.1, step 1.2, step 4.1, step 5.1, algebra, construct]

7.1 Real realization, nested-domain composition, and all fixed-derivative localization bounds are the external input [F10]. We identify its hypotheses here, preserving the local contour and cutoff calculations. Restrict $(q,p)$ to $W$ and insert a fixed smooth spatial cutoff equal to one near $x=y=q$. Away from this diagonal, positivity supplies $\operatorname{Im}(\phi(x,\alpha)-\phi^*(y,\alpha))\ge d>0$ on the cutoff transition. When the kernel acts on a holomorphic packet $v_\beta(y)=t(y,\beta;h)e^{i\psi(y,\beta)/h}$, the total phase has its unique nearby critical point at $y=q=x$, $p=p_\beta$ when $x=q_\beta$. In a small neighborhood it satisfies the stronger contour estimate $ \operatorname{Im}S_{\mathrm{total}}\ge c\bigl(|x-q|^2+|y-q|^2+|p-p_\beta|^2\bigr) $ after deforming $y$ by $y\mapsto y+i\delta\overline{\partial_y S_{\mathrm{total}}}$ near the diagonal. Here Taylor's formula gives an added $\delta|\partial_y S_{\mathrm{total}}|^2+O(\delta^2|\partial_y S_{\mathrm{total}}|^2)$; $\partial_y S_{\mathrm{total}}=p-p_\beta+O(|x-q|+|y-q|)$, so sufficiently small $\delta$ proves the estimate. For complex $x$ nearby continue the critical point by [F5] and use the quadratic coordinates to deform a further $O(|x-q_\beta|)$, leaving the outer boundary fixed. The good-contour estimates of step 4.1 then apply uniformly. On the spatial cutoff transition the original positive margin persists; on $\partial W$, for $\beta\in W_0$, the displayed estimate supplies a fixed margin. Every swept boundary integral is consequently $O(e^{-c/h})$. For a fixed number of derivatives, its smoothly parameterized compact boundary, cutoff and phase contribute only fixed powers of $h^{-1}$ and, for finite-order localizers, of $N$. Those powers are absorbed into a smaller exponential margin. Holomorphic fixed-domain contour remainders separately have the Cauchy derivative bounds of step 4.1. If finite-order localization is needed in an integration by parts, [F4] with $N=\lfloor\epsilon/h\rfloor$ gives a factor at most $(ChN)^N$ on the nonstationary part; choose $C\epsilon<1/2$. This verifies the real realization of the compositions and of the identity on each such packet. [F1, F2, F4, F5, F6, F10, step 4.1, step 6.1, algebra]

8.1 The packet-action lemma, Theorem 5.3 and Proposition 6.2 in [F10] supply the actual realization of this step. Applying $B$ to $v_\beta$ gives $e^{i\psi(y,\beta)/h}b(y,\beta;h)$ modulo exponential errors, where $b$ is a classical analytic amplitude bounded by a fixed power of $h^{-1}$. This follows from the same composition calculation, treating $\beta$ as a parameter and taking the weight $\rho=-\operatorname{Im}\psi$ in step 1.2; the combined critical point is the diagonal, and steps 4.1 and 7.1 give the factorial remainder on smaller fixed neighborhoods. Therefore $ABv_\beta=v_\beta+R_\beta$, and its realized real-variable expression is the representation in the statement with $ K(\beta,\alpha;h)=h^{-3n/2}\int e^{i(\psi(y,\beta)-\phi^*(y,\alpha))/h}b(y,\beta;h)\,dy. $ The imaginary part of this exponent is at least $c(|y-q_\beta|^2+|y-q_\alpha|^2)$ for real parameters, so the compact integral is bounded by a power of $h^{-1}$, uniformly in $\alpha\in W$, $\beta\in W_0$. Errors and cutoff transitions retain the derivative bounds of step 7.1. Pairing the representation with $u$ is legitimate by [F7]; its finite-order seminorm bound makes $\langle u,R_\beta\rangle$ exponential. The integral of a uniformly exponentially small source transform times the polynomially bounded $K$ is exponential too. Interchange the two elliptic packet families to obtain the reverse implication. [F7, F9, F10, step 1.2, step 4.1, step 6.1, step 7.1, algebra]

9.1 Finally use the reference phase $ \phi_G(y,q,p)=(q-y)\cdot p+\frac{i|p|}{2}|q-y|^2. $ It is holomorphic on a complex neighborhood of any nonzero real $p_0$, choosing the branch of $\sqrt{p\cdot p}$ positive there. Its packet with parameter $\lambda$ is exactly the unit-direction Gaussian packet with frequency parameter $\lambda|p|$ and direction $p/|p|$. On a fixed small parameter neighborhood $|p|$ is bounded above and below by positive constants, so the exponential criteria agree; bounded frequencies are absorbed into the constant. All amplitude and inverse constructions above involve finite sums or a uniquely determined formal recursion and its finite truncation. No choice axiom is used. [step 8.1, algebra] ∎


## External source qualification and reading limits

The analytic operator/contour, composition, elliptic inversion and packet-transition assertions in [F8]–[F10] are imported established theorems under the run's external-source policy. The remaining finite algebra, normalization, localization and distributional pairing calculations above are retained. No global inverse on arbitrary real-variable functions, no uniform estimate outside the smaller parameter sets, and no reconstruction of the full analytic microlocal calculus is asserted.

For this repair the actual 169-page Numdam PDF was retrieved. Theorem 1.5 on printed p. 8, §4 on pp. 23–32, §5 on pp. 32–37, and Definition 6.1/Proposition 6.2 on pp. 37–38 were inspected in the primary text; the integration-cycle/measure formulas on p. 23, real realization and $C^\infty$ error definition on p. 34, and packet transition on p. 38 were also checked in rendered page images. This is the actual relevant source reading, not a claim to have read or audited all 169 pages, all earlier historical source references, or every foundation used by Sjöstrand.
