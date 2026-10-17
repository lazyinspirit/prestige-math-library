---
id: thm-tgr-photon-planck-flux
kind: theorem
title: Actual photon box trace and Planck energy/entropy flux
status: draft
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 3
deps:
  - def-countable-choice
  - lem-qsm-fock-occupation-basis-and-car-relations
  - lem-qsm-models-diagonal-occupation-trace
  - lem-tgr-photon-box-shell-summability
  - lem-tgr-planck-integrals
  - lem-tgr-photon-box-riemann-limits
  - lem-nrqm-orbital-and-spin-sphere-integral-in-angle-coordinates
  - thm-polar-coordinates-formula-for-lebesgue-measure
  - lem-finite-rank-operators-are-compact
  - thm-norm-limit-of-compact-operators-is-compact
  - def-trace-class-operator
  - def-trace-of-a-trace-class-operator
  - thm-trace-of-a-positive-operator-is-the-sum-of-its-eigenvalues
dependency_roles:
  def-countable-choice: mathematical-premise
  lem-qsm-fock-occupation-basis-and-car-relations: mathematical-premise
  lem-qsm-models-diagonal-occupation-trace: mathematical-premise
  lem-tgr-photon-box-shell-summability: mathematical-premise
  lem-tgr-planck-integrals: mathematical-premise
  lem-tgr-photon-box-riemann-limits: mathematical-premise
  lem-nrqm-orbital-and-spin-sphere-integral-in-angle-coordinates: mathematical-premise
  thm-polar-coordinates-formula-for-lebesgue-measure: mathematical-premise
  lem-finite-rank-operators-are-compact: mathematical-premise
  thm-norm-limit-of-compact-operators-is-compact: mathematical-premise
  def-trace-class-operator: mathematical-premise
  def-trace-of-a-trace-class-operator: mathematical-premise
  thm-trace-of-a-positive-operator-is-the-sum-of-its-eigenvalues: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "Mehran Kardar, MIT OpenCourseWare 8.333 Statistical Mechanics I, Lecture 20, photon-gas section"
      url: "https://ocw.mit.edu/courses/8-333-statistical-mechanics-i-statistical-mechanics-of-particles-fall-2013/368b2180e6efa1417ab336d79b2df6db_MIT8_333F13_Lec20.pdf"
    - title: "University of Mississippi PHY 727 course notes, Lecture 18: The Photon Gas"
      url: "https://www.phy.olemiss.edu/~luca/phys727/Topics/L18_photons.pdf"
---

## Statement

Assume Countable Choice ($\mathrm{AC}_\omega$) as defined in [[def-countable-choice]]. Fix $L,T,\hbar,c,k_B>0$ with SI units respectively metre, kelvin, joule-second, metre per second, and joule per kelvin. Let $\beta=(k_BT)^{-1}$ in inverse joules. The mathematical periodic-box mode set is $I=(\mathbb Z^3\setminus\{0\})\times\{1,2\}$, with two polarization labels and the enumeration by increasing max-norm shells and then lexicographic order; within each shell use lexicographic order on $(n,s)$. For $i=(n,s)$ set $\epsilon_i=\hbar c(2\pi/L)|n|$ in joules and $\omega_n=2\pi c|n|/L$ in inverse seconds. The zero wavevector is excluded and no zero-point energy is included.

Let $\Omega_B$ be the finite-support maps $m:I\to\mathbb N_0$, set $E(m)=\sum_{i\in I}\epsilon_i m_i$, and let $\mathcal H_B=\ell^2(\Omega_B,\mathbb C)$ with its occupation basis. Define the nonnegative diagonal multiplier $H$ by $(Ha)_m=E(m)a_m$ on $D(H)=\{a\in\ell^2(\Omega_B,\mathbb C):\sum_m E(m)^2|a_m|^2<\infty\}$, so $H|m\rangle=E(m)|m\rangle$. For each $\gamma>0$ in inverse joules define the bounded positive diagonal multiplier $e^{-\gamma H}$ by $e^{-\gamma H}|m\rangle=e^{-\gamma E(m)}|m\rangle$, and set $Z_L(\gamma)=\sum_{m\in\Omega_B}e^{-\gamma E(m)}$; the proof shows this sum is finite and equals the operator trace $\operatorname{Tr}(e^{-\gamma H})$. Set $q_n=e^{-\beta\epsilon_{(n,1)}}$, $Z_L=Z_L(\beta)$, $\rho_L=Z_L^{-1}e^{-\beta H}$, and $p_m=e^{-\beta E(m)}/Z_L$. Define the diagonal-state entropy by $S_L=-k_B\sum_{m\in\Omega_B}p_m\log p_m$, where $\log$ is the natural logarithm.

The finite-box trace, energy and entropy are actual diagonal sums, not continuum mode integrals. The partition function $Z_L$ and occupations $q_n$ are dimensionless, $\rho_L$ has trace one, energy and $U_L$ have units joules, and $S_L$ has units joules per kelvin. The sums satisfy $Z_L=\prod_{n\ne0}(1-q_n)^{-2}<\infty$, $\rho_L$ is a positive trace-one trace-class operator, and every nonnegative integer energy moment under $\rho_L$ is finite. Define the everywhere-defined diagonal operator $B_L$ by
$(B_La)_m=p_mE(m)a_m$ for $a\in\mathcal H_B$. The proof shows that it
is bounded, positive and trace class, agrees with $\rho_LH$ on $D(H)$,
and equals $H\rho_L$ on all of $\mathcal H_B$. The notation
$\operatorname{Tr}(\rho_LH)$ means $\operatorname{Tr}(B_L)$, the trace
of that unique bounded extension. Moreover,
$$U_L=\operatorname{Tr}(\rho_LH)=2\sum_{n\ne0}\frac{\epsilon_{(n,1)}}{e^{\beta\epsilon_{(n,1)}}-1}<\infty.$$
The entropy is
$$S_L=k_B(\log Z_L+\beta U_L)=2k_B\sum_{n\ne0}\left[-\log(1-q_n)+\frac{\beta\epsilon_{(n,1)}q_n}{1-q_n}\right]<\infty.$$

With $u_L=U_L/L^3$ and $s_L=S_L/L^3$ in joules per cubic metre and joules per kelvin per cubic metre, respectively, their thermodynamic-volume limits at fixed $T$ exist. For every continuous compactly supported $\psi:[0,\infty)\to\mathbb R$, the limiting spectral energy measure is
$$\lim_{L\to\infty}\frac{2}{L^3}\sum_{n\ne0}\frac{\hbar\omega_n}{e^{\beta\hbar\omega_n}-1}\psi(\omega_n)=\frac{\hbar}{\pi^2c^3}\int_0^\infty\frac{\omega^3\psi(\omega)}{e^{\beta\hbar\omega}-1}\,d\omega.$$
The integrated limits are
$$u=\lim_{L\to\infty}u_L=\frac{\pi^2k_B^4T^4}{15\hbar^3c^3},\qquad s=\lim_{L\to\infty}s_L=\frac{4u}{3T}.$$

In a separately specified isotropic freely streaming ray model, directions have uniform angular density $u/(4\pi)$ for energy and $s/(4\pi)$ for this coarse mode entropy on the unit sphere; each ray has velocity $c\hat n$. Define one-sided flux through a plane by integrating the outward normal velocity component over the outward hemisphere. Then $F=cu/4=\sigma T^4$ and $F_S=cs/4=(4/3)F/T$, where $F$ is in watts per square metre, $F_S$ in joules per kelvin per square metre per second, and $\sigma=\pi^2k_B^4/(60\hbar^3c^2)$ in watts per square metre per kelvin to the fourth power. This is a mathematical model deduction; it does not assert an observed blackbody, an equilibration mechanism, or a horizon-emission law.

## Facts & Assumptions

**Given:** Countable Choice and the parameters, units, periodic mode set and ordering, diagonal Hamiltonian domain, zero-mode exclusion, entropy definition, and explicit ray-transport model in the Statement.

[F1] [[lem-qsm-fock-occupation-basis-and-car-relations]], Statement: for the specified enumerated bosonic mode set, finite-support occupation configurations are countable and their occupation vectors are an orthonormal basis of the bosonic Fock space.

[F2] [[lem-qsm-models-diagonal-occupation-trace]], Statement: assuming $\mathrm{AC}_\omega$, for a finite or enumerated countable mode set the diagonal multipliers $H,N,K_\mu$ are self-adjoint on their displayed weighted $\ell^2$ domains. In the bosonic case, if $q_j=e^{-\beta(\epsilon_j-\mu)}$, $0<q_j<1$, $\sup_jq_j<1$, and $\sum_jq_j<\infty$, then $e^{-\beta(H-\mu N)}$ is positive trace class with trace $\prod_j(1-q_j)^{-1}$; after normalization its one-mode marginal is $(1-q_j)q_j^n$ and its mean is $q_j/(1-q_j)$. The current batch 45 evidence records this exact draft carrier as Step-1-ready; this is not independent review or proof acceptance, so uses remain conditional on its actual statement and proof.

[F3] [[lem-tgr-photon-box-shell-summability]]: for positive $L,\beta,\hbar,c$, the shell $|n|_\infty=j$ has $24j^2+2$ points, $\sup_{n\ne0}q_n<1$, and all sums $\sum_{n\ne0}\epsilon_n^p q_n$ are finite for integers $p\ge0$; repeating the modes twice preserves the bounds.

[F4] [[lem-tgr-photon-box-riemann-limits]]: for $f(r)=r/(e^r-1)$ and $g(r)=f(r)-\log(1-e^{-r})$, the full radial energy sum and singular entropy sum converge to their Lebesgue integrals as $d\downarrow0$, and every continuous compactly supported radial test has the corresponding three-dimensional lattice Riemann limit.

[F5] [[lem-tgr-planck-integrals]]: the two nonnegative improper integrals $\int_0^\infty x^3/(e^x-1)\,dx$ and $\int_0^\infty x^2[-\log(1-e^{-x})]\,dx$ converge to $\pi^4/15$ and $\pi^4/45$, respectively.

[F6] [[def-countable-choice]]: $\mathrm{AC}_\omega$ states that every sequence of nonempty sets has a choice function. It is the exact choice principle assumed by [F1], [F2], [F5], [F7] and [F8]; no stronger choice axiom is used.

[F7] [[thm-polar-coordinates-formula-for-lebesgue-measure]], Statement: under $\mathrm{AC}_\omega$, every nonnegative Borel function on $\mathbb R^3$ integrates as $\int_0^\infty\int_{S^2}h(r\omega)r^2\,d\sigma\,dr$; for radial $h$ this is $4\pi\int_0^\infty h(r)r^2\,dr$.

[F8] [[lem-nrqm-orbital-and-spin-sphere-integral-in-angle-coordinates]], Statement (a)–(b): in spherical angles the polar surface element is $d\sigma=\sin\theta\,d\theta\,d\varphi$ on $(0,\pi)\times(0,2\pi)$ and $\sigma(S^2)=4\pi$.

[F9] [[lem-finite-rank-operators-are-compact]] and
[[thm-norm-limit-of-compact-operators-is-compact]] make a norm limit of
finite diagonal truncations compact under Countable Choice.
[[def-trace-class-operator]] defines trace class by summable singular values;
for a positive compact diagonal operator these are its nonnegative diagonal
eigenvalues, and [[thm-trace-of-a-positive-operator-is-the-sum-of-its-eigenvalues]]
gives their sum as its trace. The trace in
[[def-trace-of-a-trace-class-operator]] applies to bounded trace-class
operators on the whole Hilbert space.

[A1] The model deliberately omits the zero wavevector and the oscillator zero-point energy. The theorem makes no claim about a physical preparation, material wall, measured spectrum, or actual horizon radiation.

[A2] The ray model assigns uniform angular density $u/(4\pi)$ and $s/(4\pi)$ on the unit sphere and velocity $c\hat n$; one-sided energy and coarse entropy flux are defined by integrating the positive normal component over the outward hemisphere.

## Proof

1.1 For $i=(n,s)$ with $n\ne0$, $|n|\ge1$, so $\epsilon_i\ge2\pi\hbar c/L>0$. Thus $q_i\le e^{-2\pi\beta\hbar c/L}<1$, and [F3] gives $\sum_{i\in I}q_i<\infty$ with the required strict supremum bound. [given, F3, algebra]

1.2 Put $d=2\pi\beta\hbar c/L$ and $f(r)=r/(e^r-1)$ with its continuous extension $f(0)=1$. Then $\omega_n=d|n|/(\beta\hbar)$ and $\epsilon_n=k_BT\,d|n|$. The function $r\mapsto f(r)\psi(r/(\beta\hbar))$ is continuous and compactly supported, so the signed radial-limit clause of [F4] gives its lattice sum limit as $4\pi\int_0^\infty r^2f(r)\psi(r/(\beta\hbar))\,dr$. Converting $L^{-3}=(d/(2\pi\beta\hbar c))^3$ gives the radial integral with coefficient $k_BT/(\pi^2(\beta\hbar c)^3)$. The substitution $r=\beta\hbar\omega$ multiplies the integrand by $(\beta\hbar)^4$ and this coefficient becomes $\hbar/(\pi^2c^3)$ because $k_BT\beta=1$. This is exactly the stated spectral energy measure. [given, F4, algebra]

2.1 The countable mode set has the specified enumeration, [F1] supplies its bosonic occupation basis and countability, and [F6] supplies exactly $\mathrm{AC}_\omega$. Applying the actual batch-45 draft interface [F2] with $\mu=0$ identifies its self-adjoint diagonal multiplier and domain with $H$ and $D(H)$ here. Its trace conclusion gives $Z_L=\prod_{n\ne0}(1-q_n)^{-2}<\infty$ and the positive trace-one state with diagonal probabilities $p_m$. The same hypotheses hold at every inverse temperature $\gamma>0$, in particular at $\gamma=\beta/2$, by [F3]. [given, F1, F2, F6, step 1.1, F3]

2.2 Using $f$ from step 1.2, $u_L=2k_BT[(2\pi)^3(\beta\hbar c)^3]^{-1}d^3\sum_{n\ne0}f(d|n|)$. By [F4] the limit is $2k_BT[(2\pi)^3(\beta\hbar c)^3]^{-1}\int_{\mathbb R^3}f(|x|)\,d^3x$. Formula [F7] makes this $k_BT[\pi^2(\beta\hbar c)^3]^{-1}\int_0^\infty r^3/(e^r-1)\,dr$. Applying [F5] and $\beta=(k_BT)^{-1}$ gives $u=\pi^2k_B^4T^4/(15\hbar^3c^3)$. [given, F4, F5, F7, step 1.2, algebra]

3.1 Let $J_N$ exhaust the enumerated modes by finite initial subsets and set $E_N(m)=\sum_{i\in J_N}\epsilon_i m_i$. By [F2], finite-sum linearity and its one-mode means give $\sum_m p_mE_N(m)=\sum_{i\in J_N}\epsilon_iq_i/(1-q_i)$. The nonnegative configuration sum is the supremum over finite sets of configurations; every finite set of finite-support configurations is supported in some $J_N$, so taking the supremum over $N$ yields $U_L=\sum_m p_mE(m)=2\sum_{n\ne0}\epsilon_{(n,1)}q_n/(1-q_n)$. Since $q_i\le q_*<1$, [F3] bounds this by $(1-q_*)^{-1}\sum_i\epsilon_iq_i<\infty$. For every integer $r\ge1$, $y^re^{-\beta y}\le C_{r,\beta}e^{-\beta y/2}$ for $y\ge0$, where $C_{r,\beta}=\sup_{y\ge0}y^re^{-\beta y/2}<\infty$. Summing and using $Z_L(\beta/2)<\infty$ from step 2.1 gives $\sum_m p_mE(m)^r<\infty$; the zeroth moment equals one. Put $b_m=p_mE(m)\ge0$. Their finite sum $U_L$ bounds $\sup_m b_m$, so $B_L$ is bounded on all $\ell^2$. Its finite diagonal truncations have finite rank, and their operator-norm errors are bounded by the summable tails $\sum_{m\text{ omitted}}b_m\to0$. Thus [F9] makes $B_L$ compact, and its summable nonnegative diagonal eigenvalues make it positive trace class with trace $\sum_m b_m=U_L$. On $D(H)$ its coordinate action is $\rho_LH$; the finite-support vectors are dense, so the bounded extension is unique. Moreover $\sup_m E(m)p_m<\infty$ implies $\sum_m E(m)^2p_m^2|a_m|^2<\infty$ for every $a\in\ell^2$. Hence $\rho_La\in D(H)$ and $H\rho_L=B_L$ everywhere. This justifies exactly the trace notation in the Statement. [F1, F2, F3, F9, step 2.1, algebra]

4.1 The vacuum contributes one to $Z_L$, so $Z_L\ge1$, and $-\log p_m=\log Z_L+\beta E(m)\ge0$. Also $-\log(1-q_i)\le q_i/(1-q_*)$, so [F3] makes the logarithmic mode sum finite and the logarithm of the convergent product equals $2\sum_{n\ne0}-\log(1-q_n)$. Summing $-p_m\log p_m$ using $\sum_mp_m=1$ and the finite mean from step 3.1 gives $S_L=k_B(\log Z_L+\beta U_L)$. Substituting the product logarithm and the mode-mean sum gives the displayed finite positive series. [step 2.1, step 3.1, F3, algebra]

5.1 Set $g(r)=f(r)-\log(1-e^{-r})$. The exact entropy series in step 4.1 gives $s_L=2k_B[(2\pi)^3(\beta\hbar c)^3]^{-1}d^3\sum_{n\ne0}g(d|n|)$. The singular-sum result [F4] proves convergence despite the logarithmic singularity at zero. Formula [F7] turns the limiting integral into $4\pi$ times the sum of the two integrals in [F5]; their ratio is $1/3$. Thus $s=(4/3)k_B^4T^3\pi^2/(15\hbar^3c^3)=4u/(3T)$. [F4, F5, F7, step 4.1, step 2.2, algebra]

6.1 By the angular surface element in [F8], the outward-hemisphere integral of the normal velocity factor is $\int_0^{2\pi}\int_0^{\pi/2}\cos\theta\sin\theta\,d\theta\,d\varphi=\pi$; the full sphere has measure $4\pi$, so the isotropic average of the positive normal component is $1/4$. Under the explicitly defined angular densities in [A2], the one-sided fluxes are $F=cu/4$ and $F_S=cs/4$. Substituting the limits from steps 2.2 and 5.1 gives the stated $\sigma$, $F=\sigma T^4$, and $F_S=(4/3)F/T$. These are deductions in the defined model only. [given, A2, F8, step 2.2, step 5.1, algebra] ∎
