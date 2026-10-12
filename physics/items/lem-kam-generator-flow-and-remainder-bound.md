---
id: lem-kam-generator-flow-and-remainder-bound
kind: lemma
title: "One KAM step: the affine generator, its canonical time-one flow, and the quadratic remainder bound"
status: draft
origin: pipeline
domain: mathematics
dependency_level: 6
deps: [def-holomorphic-kam-domain-and-diophantine-labels, lem-cauchy-fourier-and-lattice-shell-bounds, lem-truncated-homological-equation-with-conservative-loss, lem-kam-affine-taylor-fourier-truncation, def-cm-local-flow-of-an-autonomous-system, thm-cm-smooth-dependence-and-the-variational-equation, lem-cm-continuous-dependence-on-initial-data, def-variational-equation-along-an-ode-solution, prop-cm-hamiltonian-field-and-poisson-bracket-in-a-phase-chart, def-cm-phase-domain-and-standard-symplectic-two-form, thm-hamiltonian-flows-preserve-the-symplectic-form, def-complex-differentiability-holomorphic-and-entire, rem-complex-euclidean-space-dictionary, thm-gronwall-integral-inequality, def-operator-norm, def-metric-ball, def-interval, thm-chain-rule-for-total-derivatives]
dependency_roles:
  def-holomorphic-kam-domain-and-diophantine-labels: mathematical-premise
  lem-cauchy-fourier-and-lattice-shell-bounds: mathematical-premise
  lem-truncated-homological-equation-with-conservative-loss: mathematical-premise
  lem-kam-affine-taylor-fourier-truncation: mathematical-premise
  def-cm-local-flow-of-an-autonomous-system: mathematical-premise
  thm-cm-smooth-dependence-and-the-variational-equation: mathematical-premise
  lem-cm-continuous-dependence-on-initial-data: mathematical-premise
  def-variational-equation-along-an-ode-solution: mathematical-premise
  prop-cm-hamiltonian-field-and-poisson-bracket-in-a-phase-chart: mathematical-premise
  def-cm-phase-domain-and-standard-symplectic-two-form: mathematical-premise
  thm-hamiltonian-flows-preserve-the-symplectic-form: mathematical-premise
  def-complex-differentiability-holomorphic-and-entire: mathematical-premise
  rem-complex-euclidean-space-dictionary: mathematical-premise
  thm-gronwall-integral-inequality: mathematical-premise
  def-operator-norm: mathematical-premise
  def-metric-ball: mathematical-premise
  def-interval: mathematical-premise
  thm-chain-rule-for-total-derivatives: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "Jürgen Pöschel, A Lecture on the Classical KAM Theorem, arXiv:0908.2234, §3-§4 (the generator $F$ with $\\{F,N\\}+\\hat R=R$, the estimates $r^{-1}|F_\\vartheta|+\\sigma^{-1}|F_I|\\le C\\varepsilon/(\\alpha r\\sigma^{\\mu})$, the time-one flow of $X_F$ and the transformed perturbation $\\varepsilon_+\\le C[\\varepsilon/(\\alpha r\\sigma^{\\mu})+\\eta^2+K^ne^{-K\\sigma}]\\varepsilon$), PDF pp. 14-22."
      url: "https://arxiv.org/pdf/0908.2234"
    - title: "Rafael de la Llave, A Tutorial on KAM Theory (AMS Proc. Sympos. Pure Math. 69, revised version), §3.6 (construction of the correcting canonical transformation, linear in the actions) and §6.1-§6.2 (the quadratic remainder of the Newton step), printed pp. 49-58 and 92-106."
      url: "https://www.johndcook.com/KAM.pdf"
verification:
  precheck: pass
---

## Statement

Let $n\ge1$, $\tau>n-1$, $\alpha>0$, and let $\Omega_{\alpha,\tau}$ be the label set of [[def-holomorphic-kam-domain-and-diophantine-labels]]. Put $\mu:=\tau+3n+2$. Suppose $0<r\le1$, $s,h>0$, $K\ge1$, $0<\sigma\le1$, $8\sigma<s$, $0<\eta\le1/8$, and

$$h\le\frac{\alpha}{2K^{\tau+1}},\qquad K\sigma\ge1,\qquad \eta\le\sigma .$$

Let $P$ be holomorphic and $2\pi$-periodic in the angles on $D_{r,s,h}(\Omega_{\alpha,\tau})$, real-valued on real points, with $|P|_{r,s,h}\le\varepsilon$. Set

$$E:=\frac{\varepsilon}{\alpha r\sigma^\mu},\qquad E\le c\eta,$$

where $c=c(n,\tau)>0$ is sufficiently small. All constants $C$ below depend only on $n,\tau$. Define the affine Taylor polynomial $Q$ and $R=T_KQ$ by [[lem-kam-affine-taylor-fourier-truncation]], and put $\widehat R=[R]$, $N=\nu\cdot I$. Let $F$ be the zero-mean solution, with Fourier support $|k|_1\le K$, of

$$\nu\cdot\partial_\vartheta F=R-\widehat R$$

from [[lem-truncated-homological-equation-with-conservative-loss]]. Order phase coordinates as $(I,\vartheta)$, so $X_F=(-F_\vartheta,F_I)$, $\omega=\sum_i d\vartheta_i\wedge dI_i$, and $\{f,g\}=f_\vartheta\cdot g_I-f_I\cdot g_\vartheta$. Put $W=\operatorname{diag}(r^{-1}I_n,\sigma^{-1}I_n)$. Then:

1. **Generator.** $F$ is holomorphic on $D_{r,s-2\sigma,h}$, affine in $I$, and $F_I$ is independent of $I$. It satisfies $\{F,N\}+\widehat R=R$ and
$$r^{-1}|F_\vartheta|_{3r/4,s-6\sigma,h}+\sigma^{-1}|F_I|_{3r/4,s-6\sigma,h}\le CE\sigma^{n+1},\qquad |W(DX_F)W^{-1}|_{3r/4,s-6\sigma,h}\le CE\sigma^{n+1}.$$
2. **Flow.** For $0\le t\le1$, the flow $\Phi_t$ is defined and holomorphic on $D_{r/2,s-8\sigma,h}$, with
$$\Phi_t:D_{r/2,s-8\sigma,h}\longrightarrow D_{3r/4,s-7\sigma,h}.$$
Here parameters are held fixed; $D\Phi_t$ denotes the derivative in $(I,\vartheta)$. The map is affine in $I$, its angle component is independent of $I$, and it obeys $\Phi_t(I,\vartheta+2\pi k,\nu)=\Phi_t(I,\vartheta,\nu)+(0,2\pi k)$. It is canonical, and real on real points. Uniformly in $t$,
$$|W(\Phi_t-\mathrm{id})|_{r/2,s-8\sigma,h}\le CE,\qquad |W(D\Phi_t-\mathrm{id})W^{-1}|_{r/2,s-8\sigma,h}\le CE,$$
$$h|W\partial_{\nu_j}\Phi_t|_{r/2,s-8\sigma,h/2}\le CE\qquad(1\le j\le n).$$
In addition, the small action domain has the inclusion
$$\Phi_t(D_{\eta r,s-8\sigma,h})\subseteq D_{2\eta r,s-7\sigma,h}.$$
3. **Remainder.** For $\Phi=\Phi_1$ and $\chi_t=(1-t)\widehat R+tR$, the identity
$$(N+P)\circ\Phi=N+\widehat R+P_+,\qquad P_+=(P-R)\circ\Phi+\int_0^1\{\chi_t,F\}\circ\Phi_t\,dt$$
holds on $D_{r/2,s-8\sigma,h}$, and on the smaller action domain
$$|P_+|_{\eta r,s-8\sigma,h}\le C\bigl[E+\eta^2+\sigma^{-n}e^{-\sigma K/2}\bigr]\varepsilon .$$
4. **Frequency shift.** Write $\widehat R(I,\nu)=a(\nu)+v(\nu)\cdot I$. Then $v$ is holomorphic on $O_h(\Omega_{\alpha,\tau})$, real on real points, and
$$|v|_{O_h}\le B:=C\frac{\varepsilon}{r}=C\alpha E\sigma^\mu,\qquad |Dv|_{O_{h/2}}\le\frac{2nB}{h}.$$

## Facts & Assumptions

**Given:** The parameters, periodic real holomorphic perturbation, widths, cutoff, and smallness conditions of the Statement. Suppressed label sets in all domains are $\Omega_{\alpha,\tau}$; vector norms are maximum norms and operator norms are the induced row-sum norms.

[F1] Domain, Fourier, mean, and Hamiltonian conventions are [[def-holomorphic-kam-domain-and-diophantine-labels]], [[prop-cm-hamiltonian-field-and-poisson-bracket-in-a-phase-chart]], and [[def-cm-phase-domain-and-standard-symplectic-two-form]]. Cauchy bounds with action, angle, or parameter margins, and Fourier coefficient bounds, are [[lem-cauchy-fourier-and-lattice-shell-bounds]].

[F2] The Taylor and cutoff supplier [[lem-kam-affine-taylor-fourier-truncation]] gives $[R]=[Q]$, $|P-Q|_{2\eta r,s,h}\le C\eta^2\varepsilon$, $|R|_{r,s-2\sigma,h}\le C\sigma^{-n}\varepsilon$, $|R_I|_{r,s-2\sigma,h}\le C\sigma^{-n}\varepsilon/r$, $|R_\vartheta|_{r,s-2\sigma,h}\le C\sigma^{-n-1}\varepsilon$, and $|Q-R|_{r,s-2\sigma,h}\le C\sigma^{-n}e^{-\sigma K/2}\varepsilon$.

[F3] The truncated homological supplier [[lem-truncated-homological-equation-with-conservative-loss]] solves each nonzero mode by division by $ik\cdot\nu$, whose modulus is at least $(\alpha/2)|k|_1^{-\tau}$ for $|k|_1\le K$ on $O_h$. For zero-mean data of norm $M$ on $D_{r,u,h}$, its bounds with angle margin $\sigma$ are $|F|_{r,u-2\sigma,h}\le C M/(\alpha\sigma^{\tau+n})$, $|F_\vartheta|_{r,u-3\sigma,h}\le CM/(\alpha\sigma^{\tau+n+1})$, and $|F_{\vartheta\vartheta}|_{r,u-4\sigma,h}\le CM/(\alpha\sigma^{\tau+n+2})$. An action derivative costs the reciprocal action margin, independently of the angle margin.

[F4] Local flow existence, uniqueness, continuous and smooth dependence, and the variational equation are [[def-cm-local-flow-of-an-autonomous-system]], [[lem-cm-continuous-dependence-on-initial-data]], [[thm-cm-smooth-dependence-and-the-variational-equation]], and [[def-variational-equation-along-an-ode-solution]]. Bounds follow by integrating the ODE and [[thm-gronwall-integral-inequality]], using [[def-operator-norm]], [[def-metric-ball]], and [[def-interval]]. These real ODE results apply to the realification of complex coordinates.

[F5] Hamiltonian flows preserve the symplectic form ([[thm-hamiltonian-flows-preserve-the-symplectic-form]]). The chain rule along a trajectory is [[thm-chain-rule-for-total-derivatives]]; with the convention of [F1], $\frac{d}{dt}(g\circ\Phi_t)=\{g,F\}\circ\Phi_t$.

[F6] A $C^1$ complex map is holomorphic when its Wirtinger derivatives in conjugate coordinates vanish ([[def-complex-differentiability-holomorphic-and-entire]], [[rem-complex-euclidean-space-dictionary]]). Smooth dependence and uniqueness for the linear variational equation in [F4] can be used to establish this for a holomorphic vector field.

## Proof

**Proof technique:** direct; estimate the affine generator in the scaled phase norm, construct its flow on nested domains, and integrate the exact Hamiltonian identity.

1.1 *Generator and domains.* The datum $R-\widehat R$ is affine, zero-mean, and has norm at most $C\sigma^{-n}\varepsilon$ on $D_{r,s-2\sigma,h}$. Its Fourier sum is finite and its supported divisors never vanish, so $F$ is holomorphic even on $D_{r,s-2\sigma,h}$, is affine in $I$, and satisfies the equation there. Apply [F3] with $u=s-2\sigma$ and action margin $r/4$. On the appropriate nested domains this gives $|F_\vartheta|\le C\varepsilon\alpha^{-1}\sigma^{-(\tau+2n+1)}$, $|F_I|\le C\varepsilon(\alpha r)^{-1}\sigma^{-(\tau+2n)}$, $|F_{\vartheta\vartheta}|\le C\varepsilon\alpha^{-1}\sigma^{-(\tau+2n+2)}$, and $|F_{I\vartheta}|\le C\varepsilon(\alpha r)^{-1}\sigma^{-(\tau+2n+1)}$. In particular, all four bounds hold on $D_{3r/4,s-6\sigma,h}$. Since $F_{II}=0$, the blocks of $W(DX_F)W^{-1}$ are $-F_{\vartheta I}$, $-(\sigma/r)F_{\vartheta\vartheta}$, zero, and $F_{I\vartheta}$. Substitution of $E$ and $\mu$ bounds each nonzero block by $CE\sigma^{n+1}$ and also gives $|WX_F|\le CE\sigma^{n+1}$. The defining equation is precisely $\{F,N\}=R-\widehat R$. [F1, F2, F3, algebra]

2.1 *Existence through time one.* Set $\mathcal U=B_{3r/4}\times S_{s-6\sigma}$. Fix $\nu\in O_h$ and an initial point in $B_{r/2}\times S_{s-8\sigma}$. In the norm $|Wz|_\infty$, its distance to the action boundary of $\mathcal U$ is at least $1/4$ and to the angle boundary at least $2$. Step 1.1 gives field and Lipschitz bounds $M,L\le CE\sigma^{n+1}$ there. Choose $c$ so that $CE\le1/8$. While a solution remains in $\mathcal U$, integration gives $|W(\Phi_t-z)|\le Mt$ for $t\le1$. It therefore cannot approach the boundary before time one. To justify continuation without a compact domain assumption, a putative finite endpoint has a limit because the velocity is bounded; the limit has the same positive boundary margins, and local existence there extends the trajectory, contradicting maximality. Thus $\Phi_t$ exists for $0\le t\le1$, has $|I_t|<3r/4$ and $|\operatorname{Im}\vartheta_t|<s-7\sigma$, and its weighted displacement is at most $CE$. For initial $|I|<\eta r$, the sharper component estimate gives $|I_t-I|\le CEr\sigma^{n+1}\le\eta r/2$, after decreasing $c$ using $E\le c\eta$. Consequently all these trajectories lie in $B_{2\eta r}\times S_{s-7\sigma}$. [step 1.1, F4, given, algebra]

3.1 *Phase derivatives.* Apply the local smooth-dependence result in [F4] on short time intervals in Euclidean balls with closure inside the phase domain. Each trajectory on $[0,1]$ is compact and stays inside that open domain by step 2.1, so finitely many such intervals suffice; the flow composition law transfers their $C^1$ dependence to the entire trajectory. Smooth dependence then gives $A_t=D\Phi_t$ with $A_0=\mathrm{id}$ and $A_t'=DX_F(\Phi_t)A_t$. Thus $\widetilde A_t=WA_tW^{-1}$ solves $\widetilde A_t'=(WDX_FW^{-1})(\Phi_t)\widetilde A_t$. Gronwall gives $|\widetilde A_t|\le e^{Lt}$ and, by integrating the equation, $|\widetilde A_t-\mathrm{id}|\le e^{Lt}-1\le CE$ for $t\le1$. These are the asserted phase derivative bounds uniformly over all initial points and parameters. [step 1.1, step 2.1, F4, algebra]

3.2 *Holomorphy and affine structure.* Treat the parameter as additional state with equation $\nu'=0$. This extended field is holomorphic, so differentiating its real $C^1$ flow with respect to any conjugate initial coordinate gives a homogeneous complex linear variational equation with zero initial value; all conjugate-coordinate derivatives vanish by uniqueness. Hence [F6] gives holomorphy in both phase and parameter variables. Since $F$ is affine in $I$, the equation $\vartheta'=F_I(\vartheta,\nu)$ is independent of $I$. With this angle trajectory fixed, $I'=-F_\vartheta(I,\vartheta_t,\nu)$ is a linear inhomogeneous equation in $I$, so its solution depends affinely on the initial action. This proves the stated structure. [step 1.1, step 2.1, F4, F6, algebra]

3.3 *Exact transformed identity.* For a fixed initial point set $G(t)=(N+\chi_t)\circ\Phi_t$, where $\chi_t=\widehat R+t(R-\widehat R)$. Using [F5] and $\{N,F\}=-(R-\widehat R)$, one obtains $G'(t)=\bigl(R-\widehat R+\{N,F\}+\{\chi_t,F\}\bigr)\circ\Phi_t=\{\chi_t,F\}\circ\Phi_t$. The endpoint values are $G(0)=N+\widehat R$ and $G(1)=(N+R)\circ\Phi$. Integrating and then adding $(P-R)\circ\Phi$ proves the exact identity in clause 3 on the full time-one domain. [step 1.1, step 2.1, F5, algebra]

4.1 *Parameter derivatives.* If $\nu\in O_{h/2}$, every coordinate disc of radius $h/2$ about $\nu$ lies in $O_h$: this follows directly from the triangle inequality for distance to the label set. Cauchy's estimate [F1], applied to each component of $WX_F$ on the same phase domain, therefore gives $|W\partial_{\nu_j}X_F|\le CE/h$. The derivative $b_t=\partial_{\nu_j}\Phi_t$ solves $b_t'=DX_F(\Phi_t)b_t+\partial_{\nu_j}X_F(\Phi_t)$, $b_0=0$, by [F4]. Multiplying by $W$ and using the bounds already proved, Gronwall gives $|Wb_t|\le (CE/h)e^{L}$ for $t\le1$, which is the required estimate after increasing $C$. [step 1.1, step 2.1, step 3.1, F1, F4, algebra]

4.2 *Periodicity, reality, and canonicity.* The Fourier polynomial $F$ is periodic, and consequently $X_F(I,\vartheta+2\pi k,\nu)=X_F(I,\vartheta,\nu)$. Translating a trajectory by $(0,2\pi k)$ and invoking uniqueness proves equivariance. On real points the data satisfy $R_{-k}=\overline{R_k}$ and the real frequencies give $F_{-k}=\overline{F_k}$; hence $F$ and its field are real there, and uniqueness preserves reality. By [F5] the real flow is canonical. The same symplectic identity holds on the complex domain directly: in the constant matrix representing $\omega$, the Hamiltonian Jacobian satisfies $(DX_F)^{\mathsf T}J+JDX_F=0$, by symmetry of the Hessian of $F$; differentiating $(D\Phi_t)^{\mathsf T}J(D\Phi_t)$ using step 3.1 therefore gives zero derivative and initial value $J$. This proves canonicity throughout the complex domain as well. [step 1.1, step 3.1, step 3.2, F1, F4, F5, algebra]

4.3 *Remainder on the shrinking action domain.* On $D_{\eta r,s-8\sigma,h}$ the trajectories lie in $D_{2\eta r,s-7\sigma,h}$ by step 2.1. Thus [F2] gives $|(P-R)\circ\Phi|\le C[\eta^2+\sigma^{-n}e^{-\sigma K/2}]\varepsilon$. Moreover, on every trajectory, $|R_\vartheta|\le C\sigma^{-n-1}\varepsilon$, $|R_I|\le C\sigma^{-n}\varepsilon/r$, and $|\widehat R_I|\le C\varepsilon/r$ because $[R]=[Q]$ and each action-Taylor coefficient at zero is bounded by $\varepsilon/r$ by Cauchy. Since $\widehat R_\vartheta=0$, these imply $|\chi_{t,\vartheta}|\le C\sigma^{-n-1}\varepsilon$ and $|\chi_{t,I}|\le C\sigma^{-n}\varepsilon/r$. Step 1.1 gives $|F_I|\le CE\sigma^{n+2}$ and $|F_\vartheta|\le CEr\sigma^{n+1}$. Therefore $|\{\chi_t,F\}|\le |\chi_{t,\vartheta}|_1|F_I|_\infty+|\chi_{t,I}|_1|F_\vartheta|_\infty\le CE\varepsilon\sigma\le CE\varepsilon$. Integrating this bound in the identity of step 3.3 proves clause 3. [step 1.1, step 2.1, step 3.3, F1, F2, algebra]

5.1 *Mean frequency shift.* Since the cutoff preserves the zero Fourier mode, $\widehat R=[Q]$; hence $v_j=[\partial_{I_j}P(0,\cdot,\nu)]$. Cauchy's estimate at the centre of $B_r$ gives $|\partial_{I_j}P(0,\vartheta,\nu)|\le\varepsilon/r$ (take radii tending upward to $r$), and taking a real angular mean does not increase this bound. Thus $|v|\le C\varepsilon/r=B$ on $O_h$, without a Fourier-loss factor. The mean is holomorphic in $\nu$ and real on real points. On $O_{h/2}$, coordinate Cauchy estimates with radius $h/2$ bound each entry of $Dv$ by $2B/h$; the induced maximum-norm operator bound is consequently $2nB/h$. Finally $\varepsilon/r=\alpha E\sigma^\mu$ by definition. This proves clause 4 and completes the step. [F1, F2, algebra] ∎

## Remarks

The flow and exact transformed identity hold on the half-radius domain. The Taylor remainder of order $\eta^2$ holds on the shrinking domain of radius $\eta r$, using its flow image of radius at most $2\eta r$. The additional smallness $E\le c\eta$ supplies this action inclusion. The frequency shift has the action-derivative scale $\varepsilon/r$, which is the bound used when inverting $\nu\mapsto\nu+v(\nu)$ in the parameter step.
