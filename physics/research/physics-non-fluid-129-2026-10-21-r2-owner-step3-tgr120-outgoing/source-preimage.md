---
id: post-tgrx-free-collapse-scattering
kind: postulate
title: Specified late-time free-field collapse scattering model
status: draft
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
domain: physics
library: physics
dependency_level: 3
deps:
  - def-tgrx-exponential-ray-channel
  - def-qftx-wavefront-hadamard
  - post-tgr-exponential-current-and-spectral-thermometer
dependency_roles:
  def-tgrx-exponential-ray-channel: formulation-prerequisite
  def-qftx-wavefront-hadamard: formulation-prerequisite
  post-tgr-exponential-current-and-spectral-thermometer: formulation-prerequisite
physical_scope: "A fixed, four-dimensional Schwarzschild-collapse background and one real, free, massless scalar field; the scope is the assumed late-time, frequency-resolved scattering channel and its specified narrow-band limit. It does not assert coupled gravity, backreaction, evaporation, trans-Planckian robustness, a detector reading, an experimental result, or universal validity of the model."
empirical_premises: []
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "Ted Jacobson, Introduction to Quantum Fields in Curved Spacetime and the Hawking Effect, complete lecture notes"
      url: "https://arxiv.org/pdf/gr-qc/0308048"
      locator: "Complete 59-page lecture-note PDF; §§6.2.1–6.2.2, printed pp. 32–38, equations (6.1)–(6.26): late outgoing packets, the near-horizon exponential relation, the thermal factor and greybody transmission probability."
    - title: "Stefan Hollands and Robert M. Wald, Quantum fields in curved spacetime, complete review"
      url: "https://arxiv.org/pdf/1401.2026"
      locator: "Complete 77-page review; §2.3(c), PDF pp. 26–31, equations (52)–(60): collapse background, Hadamard and incoming-ground-state assumptions, late-time normalized packets, the greybody-filtered Planck occupation and its limits."
    - title: "Robert M. Wald, The Thermodynamics of Black Holes"
      url: "https://arxiv.org/pdf/gr-qc/9912119"
      locator: "Complete 46-page review; §3, PDF pp. 10–13: fixed-background collapse, the late-time exterior particle calculation, and the distinction between the Hawking and equilibrium settings."
---

## Postulate

Use the mathematical assumptions of the supplied chiral channel, including Countable Choice: every sequence of nonempty sets admits a choice function. Adopt SI units. Let $c>0$ have units $\mathrm{m\,s^{-1}}$, $G>0$ have units $\mathrm{m^3\,kg^{-1}\,s^{-2}}$, $\hbar>0$ have units $\mathrm{J\,s}$, and $k_B>0$ have units $\mathrm{J\,K^{-1}}$. The mass $M>0$ is a fixed model parameter in kilograms. Use a Hausdorff, second-countable, oriented, time-oriented, globally hyperbolic smooth Lorentzian four-manifold $(\mathcal M,g)$ without boundary, of signature $(-+++)$. Global hyperbolicity means strong causality and compact causal diamonds $J^+(p)\cap J^-(q)$, where $J^\pm$ are defined by consistently directed causal curves; strong causality means every point has arbitrarily small neighborhoods that each causal curve meets in a connected parameter interval. A Hadamard bisolution is a distribution $W_2$ on $\mathcal M\times\mathcal M$ satisfying $P_xW_2=P_yW_2=0$ and $\operatorname{WF}(W_2)=\mathcal C_g^+$, the positive-frequency null relation whose pairs $(x,\xi;y,-\eta)$ have nonzero future-null covectors $\xi,\eta$ equal to a common positive multiple of the metric-dual tangent of one affinely parametrized future null geodesic at the two endpoints, with covector parallel transport and either endpoint parameter order; coincident endpoints have $\eta=\xi$. The manifold is the smooth domain on which this free-field model is posed; no singular interior is included.

Assume that after a smooth Cauchy surface $\Sigma_0$ (a spacelike hypersurface met exactly once by each inextendible causal curve of the modeled region), the modeled future exterior is exactly the Schwarzschild exterior of fixed mass $M$, with areal radius $r>r_s$, $r_s=2GM/c^2$, and metric
$$ds^2=-\left(1-\frac{r_s}{r}\right)c^2dt^2+\left(1-\frac{r_s}{r}\right)^{-1}dr^2+r^2(d\vartheta^2+\sin^2\vartheta\,d\varphi^2).$$
Here $t$ is the stationary Schwarzschild time in seconds, $r$ is in metres, and $\vartheta,\varphi$ are the usual dimensionless angular coordinates. The metric is a fixed background: the field does not change it. The retarded coordinate is $u=t-r_*/c$, where $r_*=r+r_s\log(r/r_s-1)$. The associated geometric surface-gravity parameter in inverse metres and its time-frequency version are, by this model's normalization,
$$\kappa_{\rm geom}:=\frac{1}{2r_s}=\frac{c^2}{4GM},\qquad k:=c\kappa_{\rm geom}=\frac{c^3}{4GM}>0.$$

Adopt one real, linear, massless, minimally coupled scalar field on $(\mathcal M,g)$. Its smooth classical solutions are $\phi\in C^\infty(\mathcal M;\mathbb R)$ satisfying $P\phi=0$ for $P:=-g^{ab}\nabla_a\nabla_b$, where $\nabla$ is the unique torsion-free connection with $\nabla g=0$; the canonical scalar field has length degree $\mathrm{m^{-1}}$.

For its quantization, choose a complex Hilbert one-particle space $\mathcal H_{\rm in}$ with inner product conjugate-linear in the first variable and linear in the second; its dense incoming packet subspace is specified below. For $n\ge1$, let $\mathcal H_{\rm in,s}^{(n)}$ be the range of the symmetrizing projection $P_{s,n}:=\frac1{n!}\sum_{\pi\in S_n}U_\pi$ on the completed $n$-fold Hilbert tensor product, where $U_\pi$ permutes tensor factors, and put $\mathcal H_{\rm in,s}^{(0)}:=\mathbb C$. The bosonic Fock space is the Hilbert direct sum
$$\mathcal F_s(\mathcal H_{\rm in}):=\left\{(\Psi_n)_{n\ge0}:\Psi_n\in\mathcal H_{\rm in,s}^{(n)},\ \sum_{n\ge0}\|\Psi_n\|^2<\infty\right\},$$
with vacuum $\Omega=(1,0,0,\ldots)$ and finite-particle domain $\mathcal D_{\rm fin}$ consisting of sequences with only finitely many nonzero components. On this domain, define creation and annihilation by $a_n^\dagger(h)\Psi_n:=\sqrt{n+1}P_{s,n+1}(h\otimes\Psi_n)$ and $a_n(h)\Psi_n:=\sqrt n(C_h\otimes I^{\otimes(n-1)})\Psi_n$ for $n\ge1$, where $C_h(v):=\langle h,v\rangle$; set $a(h)\Omega=0$. The model supplies a continuous real-linear map $K:C_c^\infty(\mathcal M;\mathbb R)\to\mathcal H_{\rm in}$, for the standard test-function topology, the locally convex inductive-limit topology over compact supports of the fixed-support smooth-function spaces, whose seminorms are suprema of each finite order of coordinate derivatives on compact chart subsets, with $K(Pf)=0$, and defines the smeared field $\Phi(f):=a(Kf)+a^\dagger(Kf)$ on $\mathcal D_{\rm fin}$. For real test functions the Fock commutation relations give $[\Phi(f),\Phi(g)]=2i\operatorname{Im}\langle Kf,Kg\rangle I$, where $I$ is the identity; thus $K$ fixes the commutator form of this adopted representation. Let $\mathfrak A$ be the unital complex $*$-algebra generated by all $a(h),a^\dagger(h)$ for $h\in\mathcal H_{\rm in}$, the smeared fields $\Phi(f)$, and the outgoing packet operators and their adjoints specified below. All generators and their adjoints preserve the common dense domain $\mathcal D_{\rm fin}$; the involution is the Hilbert adjoint restricted to this domain, so every finite product used below belongs to $\mathfrak A$. Inclusion of the packet operators and existence of a state on this enlarged algebra satisfying all following conditions are adopted model premises, not consequences of the smearing map $K$. A state $\varpi$ is a positive normalized linear functional on that algebra, and its two-point distribution is $W_2(f,g)=\varpi(\Phi(f)\Phi(g))$. Require $W_2$ to be a Hadamard bisolution for $P$. The pairing uses $d{\rm vol}_g=|\det(g_{ab})|^{1/2}|dx^0dx^1dx^2dx^3|$. The one-particle space, map $K$, and state are adopted model data; their construction is not derived from collapse matter. Here positive normalized means complex-linear with $\varpi(T^*T)\ge0$ for every $T\in\mathfrak A$ and $\varpi(I)=1$.

Assume a smooth conformal completion $\overline{\mathcal M}$ with boundary defining function $\rho$ such that $\rho>0$ on $\mathcal M$, $\rho=0$ and $d\rho\ne0$ on the selected boundary components, and $\widetilde g=\rho^2g$ extends smoothly as a nondegenerate Lorentzian metric with those components null hypersurfaces. Denote the past and future null components by $\mathscr I^-$ and $\mathscr I^+$; they are the asymptotic endpoints of incoming and outgoing null rays in this model. Fix a smooth affine parameter $v$ in seconds on the generators of $\mathscr I^-$, relative to $\widetilde g$ (so $\widetilde\nabla_{\partial_v}\partial_v=0$). The dense incoming positive-frequency one-particle packet subspace consists of the model's incoming mode packets with Fourier dependence $e^{-i\omega v}$, where $\omega>0$ is angular frequency in radians per second and radians are dimensionless. For every packet $h$ in this subspace, write $a_{\rm in}(h):=a(h)$; the incoming ground-state condition means $\varpi(a_{\rm in}(h)^*a_{\rm in}(h))=0$. This free-field equation, quantization, state, and asymptotic structure are adopted, not derived assumptions.

For each outgoing retarded-time coordinate $u$, measured in seconds, adopt the increasing null-ray label
$$U(u)=U_H-Ae^{-ku},\qquad U_H\in\mathbb R\ {\rm seconds},\quad A>0\ {\rm seconds}.$$
The two-point current channel for this label is exactly the tested exponential channel defined by the ray map above. It is the time-coordinate version of the reduced exponential-current branch, whose length flow parameter is $u_{\rm geom}=cu$, inverse-length parameter is $\kappa_{\rm geom}=k/c$, and detailed-balance convention is the same. The identification of the four-dimensional near-horizon packet channel with this one-dimensional tested current is an adopted model premise, not a restriction theorem for a four-dimensional field. The separate accelerated-detector and two-state-rate branch is not part of this collapse model.

Let $\ell\in\mathbb N_0$ label the degree of a spherical-harmonic angular channel; no sum over its magnetic degeneracy is taken. For angular frequency $\omega>0$, measured in radians per second (radians are dimensionless), let $\Gamma_\ell(\omega)\in[0,1]$ be the dimensionless transmission probability supplied by the stationary radial-scattering model. Assume $\Gamma_\ell$ is continuous on every compact frequency interval $K=[\omega_-,\omega_+]\subset(0,\infty)$ with $\omega_-<\omega_+$. By definition in this model, the normalized near-horizon signal mode $a_{\ell,\omega}$ and independent incoming vacuum mode $e_{\ell,\omega}$ are mapped to the outgoing mode $b_{\ell,\omega}$ and its complementary mode $d_{\ell,\omega}$ by
$$\begin{pmatrix}b_{\ell,\omega}\\d_{\ell,\omega}\end{pmatrix}=\begin{pmatrix}\sqrt{\Gamma_\ell(\omega)}&\sqrt{1-\Gamma_\ell(\omega)}\\-\sqrt{1-\Gamma_\ell(\omega)}&\sqrt{\Gamma_\ell(\omega)}\end{pmatrix}\begin{pmatrix}a_{\ell,\omega}\\e_{\ell,\omega}\end{pmatrix}.$$
All four mode operators use the unit one-particle normalization of the supplied channel, so their occupations are dimensionless. The squared coefficient $\Gamma_\ell(\omega)$ is the transmitted fraction; no transmission coefficient is calculated here.

In the adopted frequency-diagonal Fock interpretation, the positive-frequency Fourier coefficient of the ordered current two-point function is $\omega/2$ times the mode occupation. Thus the occupation associated with spectral coefficient $S_k(\omega)$ is, by this model's normalization, $2S_k(\omega)/\omega$ for $\omega>0$. This identification is part of the adopted channel model; it is not a detector response or an observed particle count.

For each compact frequency interval $K=[\omega_-,\omega_+]\subset(0,\infty)$ with $\omega_-<\omega_+$, the packet Hilbert space is $\mathcal H_K=L^2(K,d\omega)$ with $\langle f,g\rangle_K:=\int_K\overline{f(\omega)}g(\omega)d\omega$. Write $C_c^\infty(K;\mathbb C)$ for zero extensions to $K$ of smooth functions compactly supported in $(\omega_-,\omega_+)$. A normalized packet is an $f\in C_c^\infty(K;\mathbb C)$ with $\int_K|f(\omega)|^2d\omega=1$; $f$ has units $\mathrm{s}^{1/2}$. For each $s\in\mathbb R$, the model supplies a bounded sesquilinear form $B_{\ell,s}:\mathcal H_K\times\mathcal H_K\to\mathbb C$, conjugate-linear in its first entry and linear in its second. The model supplies conjugate-linear packet maps $f\mapsto a_{\ell,\mathrm{out},s}(f)$ on $\mathcal H_K$ with operators and adjoints preserving $\mathcal D_{\rm fin}$, satisfying $[a_{\ell,\mathrm{out},s}(f),a_{\ell,\mathrm{out},s}(g)^*]=\langle f,g\rangle_K I$ and $[a_{\ell,\mathrm{out},s}(f),a_{\ell,\mathrm{out},s}(g)]=0$ there. On smooth packets its value is
$$B_{\ell,s}(f,g):=\varpi\!\left(a_{\ell,\mathrm{out},s}(g)^*a_{\ell,\mathrm{out},s}(f)\right),$$
where $a_{\ell,\mathrm{out},s}(f)$ is the annihilation operator of the packet translated to retarded-time center $s$ seconds at $\mathscr I^+$. The reversed order of the labels $g,f$ makes $B_{\ell,s}$ conjugate-linear in $f$ and linear in $g$ with the stated annihilator convention; its diagonal remains the number expectation. Boundedness on $\mathcal H_K$ is an assumed moment bound, not boundedness of the operators themselves.

Put $\theta:=2\pi/k$ seconds and $n_\theta(\omega):=(e^{\theta\omega}-1)^{-1}$. Define the incoming number form on $\mathcal H_K\oplus\mathcal H_K$ by
$$q_{\ell,K}((f_1,f_2),(g_1,g_2)):=\int_K\overline{f_1(\omega)}g_1(\omega)n_\theta(\omega)\,d\omega,$$
where the first component is the near-horizon signal and the second is the independent incoming vacuum channel. Define the packet map induced by the first row of the passive mode transformation by
$$J_{\ell,K}f:=\bigl(\sqrt{\Gamma_\ell}\,f,\sqrt{1-\Gamma_\ell}\,f\bigr).$$
The exact limiting form is the adopted direct-integral model input
$$B_{\ell,\infty}(f,g):=q_{\ell,K}(J_{\ell,K}f,J_{\ell,K}g)=\int_K\overline{f(\omega)}g(\omega)\Gamma_\ell(\omega)n_\theta(\omega)\,d\omega.$$
Thus the signal has the exponential-channel occupation $n_\theta$, the environment and signal-environment cross terms vanish by the incoming vacuum and independence premises, and the passive map supplies the transmission factor. Assume that for each fixed $K$ the bounded forms converge in operator norm as $s\to+\infty$ to this $B_{\ell,\infty}$, meaning
$$\sup_{\|f\|_2,\|g\|_2\le1}|B_{\ell,s}(f,g)-B_{\ell,\infty}(f,g)|\longrightarrow0.$$
No uniform error rate over bands, angular indices, or packet families is assumed.

Only after this late-time convergence is fixed may a stationary-frequency limit be taken. For each $\omega_0$ in the interior of such an interval $K$, use a specified family $f_\epsilon\in\mathcal H_K$ with common compact support $K$, $\|f_\epsilon\|_2=1$, and spectral probability measures $|f_\epsilon(\omega)|^2d\omega$ converging weakly to the point mass $\delta_{\omega_0}$. This is concentration of normalized packets, not $L^2$-norm convergence to a non-normalizable monochromatic mode.

This is an adopted fixed-background scattering model. The Hadamard state, incoming ground condition, exact late Schwarzschild exterior, passive channel, transmissivity, packet-pairing convergence, and packet-family limits are premises; no Einstein evolution, four-dimensional scattering estimate, quantitative finite-time error bound, trans-Planckian robustness, detector construction, observed temperature, backreaction, or evaporation history is derived or asserted.

## Postulate references

[[def-qftx-wavefront-hadamard]]

[[def-tgrx-exponential-ray-channel]]

[[post-tgr-exponential-current-and-spectral-thermometer]]

