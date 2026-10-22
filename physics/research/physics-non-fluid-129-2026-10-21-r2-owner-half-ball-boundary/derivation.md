# Constant-coefficient flat Dirichlet estimate by an explicit normal-jet lifting

Research derivation for the batch-17 Schauder owner. This is not a source edit, independent acceptance receipt, or a global boundary Schauder theorem. The owner retains verification and integration with chart flattening, coefficient freezing, continuation, and consumers.

## Exact claim and conventions

Put $B_R^+=\{x=(x',t)\in\mathbb R^2\times\mathbb R:|x|<R,\ t>0\}$ and $T_R=\{(x',0):|x'|<R\}$. Fix $0<\alpha<1$. Suppose $u$ is $C^2$ up to the flat face locally in $B_R\cap\{t\ge0\}$, is bounded on $B_R^+$, and satisfies

$$a^{ij}\partial_i\partial_j u=f\quad\hbox{in }B_R^+,\qquad u=0\quad\hbox{on }T_R,$$

where $f\in C^{0,\alpha}(\overline{B_R^+})$ and $A=(a^{ij})$ is a real constant symmetric matrix with $\lambda I\le A\le\Lambda I$, $0<\lambda\le\Lambda$. No condition is imposed on the curved boundary, and $f$ need not vanish on $T_R$. The conclusion is

$$\sum_{j=0}^2R^j\|D^ju\|_{\infty;B_{R/2}^+}+R^{2+\alpha}[D^2u]_{\alpha;\overline{B_{R/2}^+}}\le C_{\alpha,\lambda,\Lambda}\bigl(\|u\|_{\infty;B_R^+}+R^2\|f\|_{\infty;B_R^+}+R^{2+\alpha}[f]_{\alpha;\overline{B_R^+}}\bigr).$$

Derivative norms can be any fixed Euclidean component norm; in dimension three they differ by fixed constants. The estimate includes boundary limits. For the positive operator $-a^{ij}\partial_{ij}$ replace $f$ by $-f$ throughout; the same norm bound results. A nonsymmetric constant coefficient matrix may be replaced by its symmetric part because $D_{ij}u=D_{ji}u$.

This is an a priori estimate for classical/smooth approximants. It does not assume an a priori $C^{2,\alpha}$ norm of $u$, and its constants do not depend on any derivative of $f$ beyond its Hölder norm or on higher derivatives of a smooth approximant. Existing choice assumptions of the actual Newtonian/integration suppliers are retained, not removed.

## 1. An explicit lifting of a merely Hölder boundary trace

First take $A=I$ and $R=1$. Let $g(x')=f(x',0)$ on the closed unit disk. Its sup norm and Hölder seminorm are bounded by those of $f$. It has a bounded global $C^{0,\alpha}(\mathbb R^2)$ extension with controlled norm, without presuming any tangential derivative. For real $g$, let $H=[g]_\alpha$, $M=\|g\|_\infty$, and set

$$\widetilde g(x')=\max\{-M,\min\{M,\inf_{z\in\overline{B_1'}}(g(z)+H|x'-z|^\alpha)\}\}.$$

Because $|x'-z|^\alpha$ is a metric for $0<\alpha<1$, each function in the infimum is $H$-Hölder. The infimum is finite and $H$-Hölder, and equals $g$ on the original disk: the Hölder inequality gives the lower bound $g(x')$, and $z=x'$ gives equality. Clamping is 1-Lipschitz, preserves the old values, and bounds the sup norm by $M$. The case $H=0$ is the constant extension. Complex functions may be handled by separate real and imaginary extensions. Write $g$ for this extension and $H$ for its global seminorm.

Choose one nonnegative smooth mollifier $\rho$ supported in $B_1'$, with integral one. For $t>0$ put

$$g_t(x')=\int_{\mathbb R^2}\rho(z)g(x'-tz)\,dz,\qquad L(x',t)=\frac{t^2}{2}g_t(x').$$

All derivatives in the following estimates differentiate the kernel, not the raw function $g$. For a multi-index in $(x',t)$ of total order $k\ge1$, differentiating $t^{-2}\rho((x'-y')/t)$ gives a compactly supported kernel $t^{-2-k}P((x'-y')/t)$ whose integral is zero, since the original kernel has integral one. Consequently, subtracting $g(x')$ inside that integral gives

$$|D^k g_t(x')|\le C_{k,\rho}H t^{\alpha-k}\quad(k=1,2,3),\qquad |g_t(x')-g(x')|\le C_\rho Ht^\alpha.$$

This also proves existence of these derivatives for $t>0$ by ordinary bounded-kernel differentiation. Their constants use no derivative of $g$.

The second derivatives of $L$ are

$$L_{ij}=\frac{t^2}{2}(g_t)_{ij},\quad L_{it}=t(g_t)_i+\frac{t^2}{2}(g_t)_{it},\quad L_{tt}=g_t+2t(g_t)_t+\frac{t^2}{2}(g_t)_{tt},\qquad i,j\in\{1,2\}.$$

Define $L=0$ and $DL=0$ at $t=0$. The estimates give continuous extension of $L$ and $DL$ and show that its boundary Hessian is the matrix $Jg(x')$ having only the $(3,3)$ entry $g(x')$ nonzero. More precisely,

$$|D^2L(x',t)-Jg(x')|\le C_\rho Ht^\alpha,\qquad |D^3L(x',t)|\le C_\rho Ht^{\alpha-1}.$$

These are actual $C^2$ boundary derivatives: $L/t^2\to g/2$, $L_t/t\to g$, and $L_i/t\to0$; the displayed continuous interior derivatives have the matching boundary traces. Differentiating the identically zero face trace gives its tangential derivatives, and the one-sided normal difference quotients identify the other traces.

Here is the full two-point Hölder argument for the Hessian, including points at the face. For $X=(x',t)$, $Y=(y',s)$, let $d=|X-Y|$. If $d<\min(t,s)/2$, the segment between them stays at height at least $\min(t,s)$, so the $D^3L$ bound gives

$$|D^2L(X)-D^2L(Y)|\le CHd\min(t,s)^{\alpha-1}\le CHd^\alpha.$$

Otherwise $\min(t,s)\le2d$, and $\max(t,s)\le3d$. Compare each Hessian to its own boundary jet and use $|Jg(x')-Jg(y')|\le H|x'-y'|^\alpha$. This gives the same bound $CHd^\alpha$. The argument includes $s=0$ or $t=0$. On $0\le t\le1$, the sup norms of $L,DL,D^2L$ are bounded by $C(M+H)$. We have therefore proved

$$\|L\|_{C^{2,\alpha}(\mathbb R^2\times[0,1])}\le C_{\alpha,\rho}(M+H),\qquad L|_{t=0}=0,\quad (\Delta L)|_{t=0}=g.$$

The unbounded tangential strip causes no sup-norm issue because $g$ is globally bounded. Its $C^{2,\alpha}$ norm here means bounded derivatives through order two and the Hessian seminorm, not an assumption that all derivatives decay at infinity.

## 2. The exact face cancellation and a valid odd reflection

Let $v=u-L$ and $F=f-\Delta L$ on $B_1^+$. Then

$$v|_{T_1}=0,\qquad \Delta v=F,\qquad F|_{T_1}=0,\qquad \|F\|_{C^{0,\alpha}(\overline{B_1^+})}+\|L\|_{C^{2,\alpha}(\overline{B_1^+})}\le C_\alpha\|f\|_{C^{0,\alpha}(\overline{B_1^+})}.$$

The identity $F|_{T_1}=0$ is exact, not an estimate or a compatibility assumption on $f$. It follows from the normal second jet of $L$. Set

$$V(x',t)=\begin{cases}v(x',t),&t\ge0,\\-v(x',-t),&t<0,\end{cases}\qquad F_o(x',t)=\begin{cases}F(x',t),&t\ge0,\\-F(x',-t),&t<0.\end{cases}$$

Because $v$ is $C^2$ up to the face and is zero there, its tangential first and second derivatives vanish there. Continuity of the equation gives $\Delta v=F=0$ at the face, hence also $v_{tt}=0$ there. Under odd reflection the tangential-tangential and normal-normal second derivatives are odd and have zero trace; the mixed second derivatives are even and have matching traces. The first derivatives likewise match. Thus $V\in C^2(B_1)$ and $\Delta V=F_o$ classically, including on the face.

The zero trace of $F$ makes its odd extension Hölder. Same-side pairs reduce to the original bound by reflection. For opposite-side points $X=(x',t)$ and $Y=(y',-s)$, $s,t\ge0$, compare to each vertical boundary projection:

$$|F_o(X)-F_o(Y)|\le [F]_\alpha(t^\alpha+s^\alpha)\le 2^{1-\alpha}[F]_\alpha(t+s)^\alpha\le2^{1-\alpha}[F]_\alpha|X-Y|^\alpha.$$

Consequently $\|F_o\|_{C^{0,\alpha}(B_1)}\le C_\alpha\|f\|_{C^{0,\alpha}(B_1^+)}$ and $\|V\|_\infty\le\|u\|_\infty+C_\alpha\|f\|_{C^{0,\alpha}}$. Reflecting the original $f$ instead would generally give a jump of $2f(x',0)$; that invalid operation has not been used.

## 3. Localization, Newtonian cancellation, and the reflected Green kernel

Choose a fixed radial smooth $\eta$, equal to one on $B_{3/4}$ and supported in $B_{7/8}$, and extend $G=\eta F_o$ by zero to $\mathbb R^3$. Product estimates and the fixed support buffer give

$$\|G\|_{C^{0,\alpha}(\mathbb R^3)}\le C_\alpha\|F_o\|_{C^{0,\alpha}(B_1)}.$$

For completeness, pairs crossing $\partial B_1$ cause no new term: if one point is in the support $B_{7/8}$ and the other is outside $B_1$, their distance is at least $1/8$; otherwise both product values are zero. Within $B_1$, use $|\eta(X)-\eta(Y)|\le C\min(1,|X-Y|)$ and the boundedness of $F_o$. No derivative of $u$ occurs in this localization.

Use the actual local Newtonian supplier `thm-newtonian-potential-for-holder-data-is-classical`, in dimension three, with its positive $-\Delta$ fundamental solution $\Phi(z)=1/(4\pi|z|)$. Put $W=-NG$. Its proved statements give

$$\Delta W=G,\qquad \|W\|_{C^{2,\alpha}(\overline B_{3/4})}\le C_\alpha\|G\|_{C^{0,\alpha}(\mathbb R^3)}.$$

The supplier's cancellation is explicit: $D_{ij}NG$ is the absolutely convergent integral of $D_{ij}\Phi(x-y)(G(y)-G(x))$ over a containing ball, minus $\delta_{ij}G(x)/3$. Its kernel bounds are $|D^2\Phi(z)|\le C|z|^{-3}$, $|D^3\Phi(z)|\le C|z|^{-4}$. Its near contribution is bounded by $C[G]_\alpha\int_0^d r^{\alpha-1}dr$; its far difference by $C[G]_\alpha d\int_d^\infty r^{\alpha-2}dr$; the remaining constant-data annulus is bounded by the difference of sphere fluxes of $D\Phi$. Both integrals are $O([G]_\alpha d^\alpha)$ for $0<\alpha<1$. Because support and evaluation balls are fixed, every constant in that actual proof depends only on $\alpha$ and dimension. Thus the boundary argument is using a proved local kernel estimate, not importing a boundary Schauder theorem.

There is also an exact reflected-Green representation. Both $\eta$ and $\Phi$ are reflection-invariant, while $F_o$ is odd. For $x$ in the upper half-space, with $y^*=(y',-y_3)$,

$$W(x)=-\int_{\{y_3>0\}}\bigl(\Phi(x-y)-\Phi(x-y^*)\bigr)\eta(y)F(y)\,dy.$$

In particular $W$ is odd and vanishes on the flat face. The reflected kernel is not applied to a jumping odd extension of the original forcing. Its datum is the exactly corrected, zero-trace residual $F$; all Hessian cancellation is therefore justified by the full-space Hölder proof above.

Now $H=V-W$ is a classical harmonic function in $B_{3/4}$. Its sup norm is at most $\|u\|_\infty+C_\alpha\|f\|_{C^{0,\alpha}}$. The required harmonic derivative estimate can be obtained without a boundary regularity theorem. The mean-value identity for a $C^2$ harmonic function follows by differentiating sphere averages and using the divergence theorem. Averaging those identities against a fixed smooth radial kernel supported in $B_{1/16}$ gives $H=\kappa*H$ in $B_{5/8}$. Differentiating this compact smooth kernel gives $\sup_{B_{1/2}}|D^kH|\le C_k\sup_{B_{3/4}}|H|$ for $0\le k\le3$. The segment mean-value estimate then gives $[D^2H]_{\alpha;B_{1/2}}\le C_\alpha\sup|H|$. These identities also supply interior smoothness from an initially $C^2$ harmonic function. Therefore

$$\|u\|_{C^{2,\alpha}(\overline{B_{1/2}^+})}\le C_\alpha\bigl(\|u\|_{\infty;B_1^+}+\|f\|_{C^{0,\alpha}(\overline{B_1^+})}\bigr).$$

No unknown $Du$ or $D^2u$ appears on the right. In particular no absorption or interpolation assertion has been hidden in a cutoff error.

## 4. Scale and a general constant elliptic matrix

For the Laplacian, let $u_R(y)=u(Ry)$, $f_R(y)=R^2f(Ry)$. The unit estimate gives the displayed weighted estimate for any $R>0$, with exactly $R^2\|f\|_\infty$ and $R^{2+\alpha}[f]_\alpha$ on the right. Thus the construction is uniform in the half-ball radius.

For the matrix reduction write

$$A=\begin{pmatrix}A_T&b\\b^T&a\end{pmatrix},\quad S=A_T-bb^T/a,\quad B=\begin{pmatrix}S^{-1/2}&-S^{-1/2}b/a\\0&a^{-1/2}\end{pmatrix}.$$

The Schur complement $S$ is positive: $z^TSz=\min_s(z,s)^TA(z,s)$; hence $\lambda I\le S\le\Lambda I$. Direct multiplication gives $BAB^T=I$. The change $y=Bx$ preserves the plane and the upper half-space because $y_3=x_3/\sqrt a$. If $v(y)=u(B^{-1}y)$, then $\Delta_yv=f(B^{-1}y)$. Since $A=B^{-1}B^{-T}$, the singular values of $B$ lie between $\Lambda^{-1/2}$ and $\lambda^{-1/2}$. Thus $B(B_R)$ contains $B_{R/\sqrt\Lambda}$, and the half-ball estimate in that latter ball controls $u$ in $B_{\theta R}^+$ with

$$\theta=\frac{\sqrt\lambda}{2\sqrt\Lambda}.$$

The changes of derivative norms and Hölder distances cost constants depending only on $\lambda,\Lambda$. This gives an estimate in a fixed smaller physical half-ball, uniformly over $A$; it has not falsely identified a transformed ellipsoid with a ball.

Here is an explicit covering argument restoring the requested $B_{R/2}^+$. Scale to $R=1$ and set $\rho=\theta/64$. If $X\in\overline{B_{1/2}^+}$ has height $t\le\theta/8$, use the physical half-ball of radius $1/2$ centered at $(x',0)$; it lies in $B_1^+$, and its just-proved estimate controls $B_{\theta/2}^+((x',0))$, including every upper-side point within distance $\rho$ of $X$. If $t>\theta/8$, the full ball of radius $\theta/16$ centered at $X$ lies in $B_1^+$. The same Newtonian-plus-harmonic proof, without lifting or reflection, supplies the interior constant-matrix estimate on a fixed smaller ball; alternatively transform this ball as above and use the full-ball Newtonian argument. Applying the transformed full-ball estimate with physical radius $\theta/16$ controls a concentric physical ball of radius $\theta^2/16$. Thus one may take $\rho_*=\min(\theta/64,\theta^2/32)>0$, depending only on ellipticity, so every point has a controlled neighborhood containing all upper-side points within distance $\rho_*$.

For pairs at distance below $\rho_*$ the corresponding local Hölder estimate applies. For pairs farther apart, use $2\sup|D^2u|/\rho_*^\alpha$. The derivative sup bounds are already uniform from the same neighborhoods. This proves the claimed full seminorm on $\overline{B_{1/2}^+}$ with $C_{\alpha,\lambda,\Lambda}$. Rescaling proves the general $R$ formula. Neither the patch number nor these constants depends on $R$, smooth-approximant higher derivatives, or the value of the flat-face forcing.

## Reading and applicability limits

I read the complete current local Newtonian proof item, including its kernel/correction signs, cutoff derivative limits, annulus-flux cancellation and near/far Hölder estimate. I extracted and read the text of all seven retained Wang PDF pages using `mutool draw -F txt`; I made no new network retrieval and did not claim a visual PDF inspection. Wang Theorem 1 and its proof occupy pp.1–2; Theorem 1-prime on p.3 states the zero-flat-Dirichlet boundary estimate for $C^2$ solutions and gives a short adaptation paragraph. That paragraph is context for the target estimate, not a replacement for the explicit normal-jet lifting and reflection proof here. Sections on parabolic, fully nonlinear and Monge–Ampère problems do not supply this argument and are not used.

This derivation does not prove arbitrary-domain chart flattening, Hölder coefficient freezing/absorption, nonzero boundary-data extension for curved domains, global existence/continuation, or weak-to-classical regularity. Those remain the scientific owner's integration obligations. For merely weak solutions, the $C^2$ reflection justification above is not available without an additional approximation or distribution argument; it has deliberately been stated only for the requested classical approximants.
