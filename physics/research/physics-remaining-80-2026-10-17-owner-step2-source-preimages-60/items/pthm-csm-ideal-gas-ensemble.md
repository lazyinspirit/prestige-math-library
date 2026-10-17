---
id: pthm-csm-ideal-gas-ensemble
kind: physics-theorem
title: "Exact canonical and grand ideal-gas preparations"
status: draft
origin: pipeline
domain: physics
library: physics
dependency_level: 4
deps:
  - post-csm-examples-ensemble-preparations
  - lem-csm-examples-gamma-gaussian-tools
  - thm-change-of-variables-for-compact-jordan-sets
  - post-rpm-null-test-particle-action
  - def-rpm-mechanical-momentum-and-observer-energy
  - def-gr-observer-and-rest-space
  - lem-gr-observer-projection-decomposition
dependency_roles:
  post-csm-examples-ensemble-preparations: physical-assumption
  lem-csm-examples-gamma-gaussian-tools: mathematical-premise
  thm-change-of-variables-for-compact-jordan-sets: mathematical-premise
  post-rpm-null-test-particle-action: physical-assumption
  def-rpm-mechanical-momentum-and-observer-energy: formulation-prerequisite
  def-gr-observer-and-rest-space: formulation-prerequisite
  lem-gr-observer-projection-decomposition: mathematical-premise
physical_scope: "Finite-N classical monatomic ideal gas on a bounded rectangular box with beta>0 and fixed action reference, plus a separately adopted three-dimensional classical H=c|p| branch; excludes quantum statistics, actual equilibration, and identifying the massless branch with m->0."
empirical_premises: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "David Tong, Statistical Physics, §§2.2–2.2.1 and §2.2.4"
      url: "https://davidtong.org/pdfs/teaching/statistical-physics/statphys.pdf"
    - title: "Mehran Kardar, MIT OpenCourseWare 8.333, Statistical Mechanics I, Lecture 13, IV.D–IV.E (Fall 2013)"
      url: "https://live.ocw.mit.edu/courses/8-333-statistical-mechanics-i-statistical-mechanics-of-particles-fall-2013/0cdb670a825c6aaea7e229ac40776cbf_MIT8_333F13_Lec13.pdf"
    - title: "Mehran Kardar, MIT OpenCourseWare 8.333, Statistical Mechanics I, Lecture 14, IV.G and IV.I (Fall 2013)"
      url: "https://live.ocw.mit.edu/courses/8-333-statistical-mechanics-i-statistical-mechanics-of-particles-fall-2013/89259a8fd183acfaec06922c88a6024b_MIT8_333F13_Lec14.pdf"
verification:
  precheck: pass
---

## Statement

Let $d,N\ge1$, let $B=\prod_{j=1}^d[0,L_j]\subset\mathbb R^d$ have finite volume $V=\prod_jL_j>0$, let $m>0$ be a particle mass in kg, let $h_0>0$ be a fixed action reference in J s, and let $\beta>0$ in J$^{-1}$. On the phase space $B^N\times\mathbb R^{dN}$ with coordinates $(q_i,p_i)$, adopt the Hamiltonian
$$H_N(q,p)=\sum_{i=1}^N\frac{|p_i|^2}{2m}$$
and the reference measure $d\nu_N=dq\,dp/(N!h_0^{dN})$. Under the canonical preparation of [[post-csm-examples-ensemble-preparations]], set $\lambda:=h_0\sqrt{\beta/(2\pi m)}$ (metres). Then
$$Z_N=\int e^{-\beta H_N}\,d\nu_N=\frac{V^N}{N!\lambda^{dN}}.$$
Positions are independent uniform points of $B$ and all momentum components are independent centered Gaussians of variance $m/\beta$. The energy satisfies $U=\mathbb E H_N=dN/(2\beta)$ and $\operatorname{Var}(H_N)=dN/(2\beta^2)$. With $F=-\beta^{-1}\log Z_N$ and boxes scaled at fixed shape, the model pressure $\mathcal P:=-\partial_VF$ obeys $\mathcal PV=N/\beta=Nk_BT$, where $T=(k_B\beta)^{-1}$ and $k_B$ has units J K$^{-1}$. The fixed-reference entropy is $S=k_B(\log Z_N+\beta U)$; its value retains the chosen $N!$ and $h_0$ convention.

For $d=3$, a one-particle speed $v=|p|/m$ has density
$$f(v)=4\pi\left(\frac{m\beta}{2\pi}\right)^{3/2}v^2e^{-\beta mv^2/2},\qquad v\ge0.$$
Its mean squared, modal, and mean speeds are $3/(m\beta)$, $\sqrt{2/(m\beta)}$, and $\sqrt{8/(\pi m\beta)}$, respectively.

For the separate grand-canonical preparation on disjoint number sectors $N\in\{0,1,\ldots\}$, let $\mu_{\rm chem}$ be a chemical potential in joules and $z=e^{\beta\mu_{\rm chem}}>0$ the dimensionless activity. Then
$$\Xi=\sum_{N=0}^\infty z^NZ_N=e^{zV/\lambda^d},\qquad \mathbb P(N=j)=e^{-\nu}\frac{\nu^j}{j!},\quad \nu:=zV/\lambda^d,$$
so $\mathbb E N=\operatorname{Var}(N)=\nu$ and the conditional law given $N$ is the canonical law above.

A distinct three-dimensional classical ultra-relativistic model adopts $H_{\rm ur}(p)=c|p|$ for $p\in\mathbb R^3\setminus\{0\}$, with $c>0$ in m s$^{-1}$ and $p$ in kg m s$^{-1}$. Its separate canonical partition function is
$$Z_{N,{\rm ur}}=\frac{V^N}{N!h_0^{3N}}\left(\frac{8\pi}{(\beta c)^3}\right)^N,$$
with $U_{\rm ur}=3N/\beta$, $\operatorname{Var}(H_{\rm ur})=3N/\beta^2$, $C_V=3Nk_B$, and $\mathcal PV=N/\beta$. This branch is not obtained by setting $m=0$ in the Gaussian model and makes no photon-number or quantum-statistics claim.

## Facts & Assumptions

**Given:** $d,N\ge1$, a bounded rectangle $B$ of volume $V>0$, $m>0$, $h_0>0$, $\beta>0$, and the Hamiltonian and reference measure in the Statement.

[F1] [[post-csm-examples-ensemble-preparations]]: for a specified model with finite positive partition function, the canonical density is $Z^{-1}e^{-\beta H}$ relative to its fixed reference; grand-sector weights are $z^NZ_N/\Xi$. This is an adopted preparation, not an equilibration theorem.

[F2] [[lem-csm-examples-gamma-gaussian-tools]]: positive Gaussian coefficients have the stated Gaussian moments and finite products; gamma integrals, equal-scale gamma convolution, and moment differentiation follow from its explicit evaluations and Gamma recurrence.

[F3] [[thm-change-of-variables-for-compact-jordan-sets]]: an injective $C^1$ map with nonzero Jacobian on an open neighborhood of a compact Jordan set obeys the compact Jordan change-of-variables formula.

[F4] [[post-rpm-null-test-particle-action]]: the adopted massless test sector has nonzero future-null mechanical momentum $P$ and does not identify it with $mU$ at $m=0$.

[F5] [[def-rpm-mechanical-momentum-and-observer-energy]]: for an observer $n$ with $g(n,n)=-1$, define spatial momentum $q_n(P)=P+g(P,n)n$ and observer energy $E_n(P)=-c\,g(P,n)$; in the massless sector $P$ is nonzero future null.

[F6] [[def-gr-observer-and-rest-space]]: an observer is future unit timelike, its rest space is $n^\perp$, and its spatial projection is $h_n(P)=P+g(n,P)n$.

[F7] [[lem-gr-observer-projection-decomposition]]: $g(h_n(P),h_n(P))=g(P,P)+g(P,n)^2$, and $g$ is positive definite on the three-dimensional rest space $n^\perp$.

[A1] The canonical and grand-canonical probability laws and thermodynamic identifications are adopted as in [F1]; the calculations establish conditional consequences only.

[A2] The ultra-relativistic branch separately adopts the classical Hamiltonian $H_{\rm ur}(p)=c|p|$ in one observer's orthonormal spatial momentum coordinates. It is not a massless limit of the massive Hamiltonian and is not a quantum radiation model.

## Proof
1.1 Under [A1], the canonical normalization integral factors into $V^N$, $N$ identical momentum integrals, and the stipulated counting factor $1/(N!h_0^{dN})$. By [F2], each scalar component contributes $\int_{\mathbb R}e^{-\beta p^2/(2m)}dp=\sqrt{2\pi m/\beta}$, hence $Z_N=V^N(N!h_0^{dN})^{-1}(2\pi m/\beta)^{dN/2}=V^N/(N!\lambda^{dN})$. [given, A1, F1, F2, algebra]



1.2 For the separate massless branch, let $N_{\rm time}$ denote the future timelike field in the adopted time-oriented background and choose $n=N_{\rm time}/\sqrt{-g(N_{\rm time},N_{\rm time})}$ from [F6]. [F4] makes $P$ future null, so $g(P,n)<0$. By [F7], $|q_n(P)|^2=g(q_n(P),q_n(P))=g(P,n)^2$, hence $E_n(P)=-cg(P,n)=c|q_n(P)|$. Identifying $q_n$ with its components in an orthonormal basis of the positive rest space gives the adopted $H_{\rm ur}(p)=c|p|$ with the stated units. [given, A2, F4, F5, F6, F7, algebra]



2.1 The normalized density is a product of the uniform position density on $B^N$ and $dN$ scalar Gaussian momentum densities. Therefore the stated coordinate independence and variances follow from [F2]; each scalar mean is zero by oddness. [given, F2, step 1.1]



2.2 In the grand preparation of [F1], substitute $Z_N=V^N/(N!\lambda^{dN})$ into the sector sum. The exponential power series gives $\Xi=\exp(zV/\lambda^d)$. The normalized sector weight is $e^{-\nu}\nu^N/N!$ with $\nu=zV/\lambda^d$. [A1, F1, step 1.1, algebra]



3.1 Each scalar momentum coordinate has second moment $m/\beta$ and fourth moment $3m^2/\beta^2$ from [F2]. Thus each term $p_{i\alpha}^2/(2m)$ has mean $1/(2\beta)$ and variance $1/(2\beta^2)$; independence makes means add and variances add, giving the claimed $U$ and $\operatorname{Var}(H_N)$. [given, F2, step 2.1, algebra]



3.2 For $d=3$, the momentum vector density is $(\beta/(2\pi m))^{3/2}e^{-\beta|p|^2/(2m)}$. On $r\in[\epsilon,R]$, $\theta\in[\delta,\pi-\delta]$, and $\phi\in[\delta,2\pi-\delta]$, the spherical coordinate map is injective on an open neighborhood; differentiating its three coordinate functions gives determinant $r^2\sin\theta\ne0$, so [F3] applies. Letting the radial and angular cutoffs exhaust their ranges is justified by the finite gamma moments in [F2]; the angular integral is $4\pi$. Transforming $r=mv$ gives the stated normalized speed density. [given, F2, F3, step 2.1, algebra]



3.3 Differentiating the absolutely convergent exponential series, or shifting its index, gives $\mathbb E N=\nu$ and $\mathbb E[N(N-1)]=\nu^2$, so $\operatorname{Var}(N)=\mathbb E[N(N-1)]+\mathbb EN-(\mathbb EN)^2=\nu$. Conditioning on sector $N$ recovers the canonical density because its factor $z^N$ is constant within that sector. [step 2.2, algebra]



4.1 From [A1], $F=-\beta^{-1}[N\log V-\log N!-dN\log\lambda]$ for fixed $T,N$ and fixed box shape, so $-\partial_VF=N/(\beta V)$ and $\mathcal PV=N/\beta$. The entropy definition in [F1] gives $S=k_B(\log Z_N+\beta U)$ with the same fixed $h_0$ and factorial convention. [A1, F1, step 1.1, step 3.1, algebra]



4.2 The density is proportional to $v^2e^{-av^2}$ with $a=\beta m/2$. Its mode solves $2v-2av^3=0$ for $v>0$, hence $v_{\rm mode}=a^{-1/2}$. The second moment is $3/(2a)=3/(m\beta)$ by the gamma recurrence in [F2]. The mean is $$\mathbb E v=\frac{4a^{3/2}}{\sqrt\pi}\int_0^\infty v^3e^{-av^2}dv=\frac{4a^{3/2}}{\sqrt\pi}\frac{\Gamma(2)}{2a^2}=\frac{2}{\sqrt{\pi a}}=\sqrt{\frac{8}{\pi\beta m}}.$$ These are model-distribution moments, not values for an individual measured particle. [F2, step 3.2, algebra]



4.3 On a compact spherical annulus, the spherical coordinate map with Jacobian $r^2\sin\theta$ is handled as in step 3.2 using [F3]. Its angular integral is $4\pi$, and the radial integral is $$4\pi\int_0^\infty r^2e^{-\beta cr}dr=4\pi\frac{\Gamma(3)}{(\beta c)^3}=\frac{8\pi}{(\beta c)^3}$$ by [F2]. Multiplying independent particle factors and the stated positional/counting reference gives $Z_{N,{\rm ur}}$. [A1, A2, F1, F2, F3, step 3.2, algebra]



5.1 Under the normalized radial density proportional to $r^2e^{-\beta cr}$, gamma moments give mean energy $3/\beta$ and variance $3/\beta^2$ per particle. Independence adds these to $U_{\rm ur}=3N/\beta$ and $\operatorname{Var}(H_{\rm ur})=3N/\beta^2$; differentiating $U_{\rm ur}$ with $\beta^{-1}=k_BT$ gives $C_V=3Nk_B$. Since $Z_{N,{\rm ur}}$ is proportional to $V^N$, $-\partial_VF=N/(\beta V)$, so $\mathcal PV=N/\beta$. [A1, F1, F2, step 4.3, algebra] ∎

## Remarks

The source M18 Ising-chain supplier is not used here. The massless momentum relation is a consequence of the adopted null-sector convention and the stated observer projection; the classical canonical $H=c|p|$ preparation is a separate model assumption. No empirical data or precision are asserted.

