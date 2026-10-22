---
id: pthm-tgrx-conditional-hawking-occupation
kind: physics-theorem
title: Conditional asymptotic occupation in a supplied collapse channel
status: published
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
domain: physics
library: physics
dependency_level: 4
deps:
  - post-tgrx-free-collapse-scattering
  - prop-tgrx-collapse-channel-spectrum
dependency_roles:
  post-tgrx-free-collapse-scattering: physical-assumption
  prop-tgrx-collapse-channel-spectrum: mathematical-premise
physical_scope: "Conditional prediction for asymptotic occupation numbers of normalized packets in the specified fixed Schwarzschild-collapse, free massless scalar channel. Finite-width packets retain their spectral integral; no measured flux, detector temperature, trans-Planckian robustness, backreaction, evaporation, or general collapse theorem is asserted."
empirical_premises: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  precheck: pass
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-10-22
    scope: Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/physics-non-fluid-129-2026-10-21-r2-publication.json.
    delegated_by: owner
sources:
  references:
    - title: "Ted Jacobson, Introduction to Quantum Fields in Curved Spacetime and the Hawking Effect, complete lecture notes"
      url: "https://arxiv.org/pdf/gr-qc/0308048"
      locator: "Complete 59-page lecture-note PDF; §§6.2.1–6.2.2, printed pp. 32–38, equations (6.1)–(6.26): late outgoing packet number, exponential near-horizon relation and greybody-filtered Bose factor."
    - title: "Stefan Hollands and Robert M. Wald, Quantum fields in curved spacetime, complete review"
      url: "https://arxiv.org/pdf/1401.2026"
      locator: "Complete 77-page review; §2.2(c), PDF pp. 27–32, equations (52)–(60): normalized late-time packet occupation and greybody-filtered Planck factor under Hadamard and incoming-ground hypotheses."
    - title: "Robert M. Wald, The Thermodynamics of Black Holes"
      url: "https://arxiv.org/pdf/gr-qc/9912119"
      locator: "Complete 46-page review; §3, PDF pp. 10–13: fixed-background late-time Hawking mode calculation and the need to keep collapse distinct from equilibrium."
---

## Statement

Assume the fixed-background collapse model and all its conditions stated in the preceding postulate on this page. Let $\ell\in\mathbb N_0$, let $K=[\omega_-,\omega_+]\subset(0,\infty)$ with $\omega_-<\omega_+$, and let $f\in C_c^\infty(K;\mathbb C)$ satisfy $\int_K|f(\omega)|^2d\omega=1$. Write
$$\mathcal N_{\ell,f}(s):=B_{\ell,s}(f,f),\qquad n_\theta(\omega):=\frac{1}{e^{\theta\omega}-1},\qquad \theta:=\frac{2\pi}{k}\ {\rm seconds}.$$
Then the late-time packet occupation exists and is
$$\lim_{s\to+\infty}\mathcal N_{\ell,f}(s)=\int_K|f(\omega)|^2\,\Gamma_\ell(\omega)\,n_\theta(\omega)\,d\omega.$$
Thus a finite-width packet has a spectral integral; its value is not, in general, the integrand at a chosen central frequency.

If $\omega_0$ is in the interior of $K$ and $f_\epsilon$ is a specified normalized family supported in $K$ with $|f_\epsilon(\omega)|^2d\omega\rightharpoonup\delta_{\omega_0}$, then the ordered limit, first $s\to+\infty$ and then $\epsilon\downarrow0$, is
$$\lim_{\epsilon\downarrow0}\lim_{s\to+\infty}\mathcal N_{\ell,f_\epsilon}(s)=\frac{\Gamma_\ell(\omega_0)}{e^{2\pi\omega_0/k}-1}.$$
Here $M$ is the fixed mass in kilograms, $G$ has units $\mathrm{m^3\,kg^{-1}\,s^{-2}}$, $c$ has units $\mathrm{m\,s^{-1}}$, $\hbar$ has units $\mathrm{J\,s}$, and $k_B$ has units $\mathrm{J\,K^{-1}}$. Matching the Bose exponent to $\hbar\omega/(k_BT_\infty)$ defines the asymptotic spectral temperature parameter
$$T_\infty:=\frac{\hbar k}{2\pi k_B}=\frac{\hbar c^3}{8\pi G M k_B}\ {\rm kelvins}.$$
This parameter labels the unfiltered Planck factor; a frequency-dependent $\Gamma_\ell$ need not leave the spectrum Planckian. It is not an observed temperature.

## Statement references

[[post-tgrx-free-collapse-scattering]]

[[prop-tgrx-collapse-channel-spectrum]]

## Facts & Assumptions

**Given:** The fixed-background model, its operator-norm convergence on each compact positive-frequency band, the passive two-mode scattering map, the continuous transmission probability, and the normalized packet family from the Statement.

[A1] [[post-tgrx-free-collapse-scattering]] adopts the positive-frequency Fock convention that the spectral coefficient $S_k(\omega)$ corresponds to mode occupation $2S_k(\omega)/\omega$ for $\omega>0$; this is a model normalization, not a detector response or observed particle count.

[A2] [[post-tgrx-free-collapse-scattering]] assumes that on each fixed compact positive-frequency band the outgoing number forms converge in operator norm to the direct integral of the exponential near-horizon channel and an independent incoming vacuum channel mixed by the passive map. It does not derive the four-dimensional scattering estimate.

[F1] [[prop-tgrx-collapse-channel-spectrum]] proves that the exponential channel has frequency spectrum $S_k(\omega)=\omega/[2(e^{2\pi\omega/k}-1)]$ for $\omega>0$.

[F2] [[prop-tgrx-collapse-channel-spectrum]] proves $\mathfrak n_{\rm out}(\omega)=\Gamma(\omega)n_\omega$ for a normalized signal vector in the stated annihilation domain and a vacuum environment, with occupation defined by the squared norm of the output annihilation image. Its real two-mode coefficients agree with the map adopted in [A2]. The calculation for the adopted mixed-state packet number forms is given directly in step 1.1.

[F3] [[prop-tgrx-collapse-channel-spectrum]] states that the Planck occupation $n_\theta(\omega)=(e^{\theta\omega}-1)^{-1}$ is positive for every $\omega>0$ when $\theta>0$.

[F4] [[post-tgrx-free-collapse-scattering]] fixes the time-frequency parameter $k=c^3/(4GM)>0$ for the fixed mass $M$ and the stated SI constants.

## Proof

1.1 Fix $\ell$ and a normalized $f$ supported in $K$. The postulate identifies the near-horizon occupation with $2S_k(\omega)/\omega$; by [F1] and $\theta=2\pi/k$, this is $n_\theta(\omega)$. Work with the joint incoming number quadratic form supplied by the direct-integral Fock channel in [A2]. Write $q_K$ for its conjugate-linear-first, linear-second polarization on $\mathcal H_K\oplus\mathcal H_K$, with the first summand the signal and the second the incoming vacuum; its diagonal is the adopted input occupation. The frequency-diagonal signal form is $q_K((g,0),(h,0))=\int_K\overline{g(\omega)}h(\omega)n_\theta(\omega)d\omega$. It is bounded, since $n_\theta$ is continuous and bounded on the compact positive-frequency band $K$. The vacuum condition gives $q_K((0,h),(0,h))=0$. These are the quadratic-moment data of the two input channels already adopted in [A2]; they require neither a pure signal vector nor a normal density-matrix representation, and no assertion that a monochromatic annihilator belongs to the compactly smeared field algebra is used. To see that there is no additional cross-moment assumption, put $F=(g,0)$ and $E=(0,h)$. Positivity and sesquilinearity give $0\le q_K(F+zE,F+zE)=q_K(F,F)+2\operatorname{Re}(zq_K(F,E))$ for every $z\in\mathbb C$. Unless $q_K(F,E)=0$, a suitable phase and arbitrarily large modulus of $z$ make this negative. Hence both cross pairings vanish. In quadratic-moment Hilbert-space language, quotienting the input form by its null vectors and completing sends every vacuum annihilation label $E$ to the zero vector; its pairing with every finite signal annihilation image is therefore zero. Thus all cross pairings are fixed by positivity, with no operator product-domain or extra finite-cross-moment axiom. The passive map in [A2], with the same real coefficients as [F2], sends the output packet label to $J_\ell f=(\sqrt{\Gamma_\ell}\,f,\sqrt{1-\Gamma_\ell}\,f)$. The coefficients are bounded measurable functions on $K$, so $J_\ell$ is defined on $\mathcal H_K$ and $\|J_\ell f\|^2=\|f\|^2$. Pulling back the adopted input number form gives $B_{\ell,\infty}(f,f)=q_K(J_\ell f,J_\ell f)=\int_K|f(\omega)|^2\Gamma_\ell(\omega)n_\theta(\omega)d\omega$. This calculates the diagonal of the adopted packet form directly, rather than treating $b^*b$ as an unbounded operator on an unspecified domain or extending [F2]'s vector theorem by assertion. [given, A1, A2, F1, F2, algebra]

2.1 Operator-norm convergence in [A2] implies $|B_{\ell,s}(f,f)-B_{\ell,\infty}(f,f)|\le\|B_{\ell,s}-B_{\ell,\infty}\|\|f\|_2^2\to0$; using $\|f\|_2=1$ and the value computed in step 1.1 proves the finite-packet limit. [A2, step 1.1, algebra]

2.2 Set $g(\omega)=\Gamma_\ell(\omega)n_\theta(\omega)$ and $d\mu_\epsilon=|f_\epsilon(\omega)|^2d\omega$. The common band $K$ is compact and bounded away from zero, and [F3] gives $n_\theta(\omega)>0$ there; with the postulated continuous $\Gamma_\ell$, $g$ is bounded and continuous on $K$. For any $\eta>0$, continuity gives a neighborhood $V$ of $\omega_0$ in $K$ on which $|g(\omega)-g(\omega_0)|<\eta$. Choose a continuous $q:K\to[0,1]$ with $q(\omega_0)=0$ and $q=1$ outside $V$. Weak convergence $\mu_\epsilon\rightharpoonup\delta_{\omega_0}$ gives $\int q\,d\mu_\epsilon\to0$, hence $\mu_\epsilon(K\setminus V)\to0$. Therefore $\left|\int_Kg\,d\mu_\epsilon-g(\omega_0)\right|\le\eta+2\|g\|_\infty\mu_\epsilon(K\setminus V)\to\eta$; as $\eta$ is arbitrary, the integral tends to $g(\omega_0)$. [given, F1, F3, step 1.1, algebra]

3.1 Apply step 2.1 at each fixed $\epsilon$, then step 2.2 to the resulting spectral integral. This order yields $\Gamma_\ell(\omega_0)/(e^{2\pi\omega_0/k}-1)$ and does not replace a finite-width integral by its central-frequency value. [A2, step 2.1, step 2.2, algebra]

4.1 By the definition of $T_\infty$ in the Statement, $\theta\omega=\hbar\omega/(k_BT_\infty)$ for every $\omega>0$; solving $\theta=2\pi/k$ gives $T_\infty=\hbar k/(2\pi k_B)$. Substituting the model value $k=c^3/(4GM)$ from [F4] gives $T_\infty=\hbar c^3/(8\pi GMk_B)$. Its units are $(\mathrm{J\,s})(\mathrm{s^{-1}})/(\mathrm{J\,K^{-1}})=\mathrm K$. The conclusion is a model-derived spectral parameter and contains no observed temperature. [given, F4, algebra] ∎
