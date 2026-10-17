---
id: lem-tgr-spectral-thermometer
kind: lemma
title: Exact defined Markov thermometer and switched coefficient bound
status: draft
origin: pipeline
domain: mathematics
library: mathematics
physical_scope: null
dependency_level: 4
deps:
  - def-countable-choice
  - def-fourier-transform-of-a-tempered-distribution
  - def-tempered-distribution
  - def-test-function-space-d-of-an-open-set
  - lem-fourier-transform-on-tempered-distributions-is-well-defined-and-continuous
  - thm-fourier-inversion-on-schwartz-space
  - thm-fourier-transform-agrees-with-l-one-and-plancherel-transforms
  - thm-plancherel
  - thm-fourier-transform-is-a-topological-automorphism-of-tempered-distributions
  - thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces
  - lem-tgr-thermal-contour-spectrum
  - lem-tgr-exponential-current
  - lem-tgr-timelike-scalar-acceleration
proof_strategy: direct
dependency_roles:
  def-countable-choice: mathematical-premise
  def-fourier-transform-of-a-tempered-distribution: mathematical-premise
  def-tempered-distribution: mathematical-premise
  def-test-function-space-d-of-an-open-set: mathematical-premise
  lem-fourier-transform-on-tempered-distributions-is-well-defined-and-continuous: mathematical-premise
  thm-fourier-inversion-on-schwartz-space: mathematical-premise
  thm-fourier-transform-agrees-with-l-one-and-plancherel-transforms: mathematical-premise
  thm-plancherel: mathematical-premise
  thm-fourier-transform-is-a-topological-automorphism-of-tempered-distributions: mathematical-premise
  thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces: mathematical-premise
  lem-tgr-thermal-contour-spectrum: mathematical-premise
  lem-tgr-exponential-current: mathematical-premise
  lem-tgr-timelike-scalar-acceleration: mathematical-premise
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: John Preskill, Quantum Field Theory in Curved Spacetime, complete Caltech lecture notes
      url: https://preskill.caltech.edu/ph236c/Preskill_QFT_curved_spacetime.pdf
      locator: Complete 151-page PDF of the 149-page notes, §4.3, printed pp. 55–58, and §4.7, pp. 71–74. The response is pointlike and stationary; the local statement defines its own Markov model and finite-switch coefficient.
    - title: Robert M. Wald, The Thermodynamics of Black Holes
      url: https://arxiv.org/pdf/gr-qc/9912119
      locator: Complete 46-page review, §3, printed pp. 11–16. Its general KMS discussion is context, not a proof of detector thermalization.
    - title: Luís C. B. Crispino, Atsushi Higuchi, and George E. A. Matsas, The Unruh effect and its applications
      url: https://arxiv.org/pdf/0710.5373
      locator: Complete 53-page review, §III.A.1–2, PDF pp. 19–22, equations 3.1–3.28. The formal stationary point-detector rate is not the finite-switch statement proved here.
---

## Statement

Assume Countable Choice [[def-countable-choice]]. Use the massless accelerated
covariance $C_a$ and its conditional spectrum $S_a$ from
[[lem-tgr-timelike-scalar-acceleration]], with $a>0$ in metres per second
squared, $c>0$ in metres per second, and angular frequency in seconds$^{-1}$.
The conditional detailed-balance input is the actual Statement of the
current batch-74 draft [[lem-tgr-thermal-contour-spectrum]], reproduced in
[L1] below. Its declared prerequisite [[lem-tgr-exponential-current]] is also
a draft. The current run's Step-1 records report `ready` for both items;
these are authoring-readiness records, not proof acceptance. The inertial
pair $(C_0,S_0)$ is the unconditioned comparison from
[[lem-tgr-timelike-scalar-acceleration]]. Both spectra are continuous and
globally Lipschitz. The conventions are $S=\mathcal F_-C$ with kernel
$e^{-i\nu s}$ and $C$ paired bilinearly with Schwartz tests.

Let $h\in C_c^\infty(\mathbb R;\mathbb R)$ be nonzero, let the switching
duration $\mathsf T>0$ be measured in seconds, and put
$$\widehat h(z)=\int_{\mathbb R}h(u)e^{-izu}\,du,\qquad K_h=\frac{1}{2\pi\|h\|_2^2}\int_{\mathbb R}|z|\,|\widehat h(z)|^2\,dz.$$
For either stationary pair $(C,S)=(C_a,S_a)$ or $(C_0,S_0)$ define the
switched coefficient
$$R_{\mathsf T}^{(C)}(\nu)=\left\langle C(s),e^{-i\nu s} \int_{\mathbb R}h(t/\mathsf T)h((t-s)/\mathsf T)\,dt\right\rangle.$$
Then $K_h<\infty$ and, for every $\nu\in\mathbb R$,
$$R_{\mathsf T}^{(C)}(\nu)=\frac{\mathsf T^2}{2\pi} \int_{\mathbb R}S(\omega)|\widehat h(\mathsf T(\nu-\omega))|^2\,d\omega,$$
so $R_{\mathsf T}^{(C)}(\nu)\ge0$, and
$$\left|\frac{R_{\mathsf T}^{(C)}(\nu)}{\mathsf T\|h\|_2^2}-S(\nu)\right| \le\frac{\operatorname{Lip}(S)K_h}{\mathsf T},\qquad \operatorname{Lip}(S)=\sup_{x\ne y}\frac{|S(x)-S(y)|}{|x-y|}<\infty.$$
This proves the leading switched coefficient limit and its explicit error;
it is not a convergence theorem for an all-order detector transition
probability or an exact infinite-time probability.

There is also the following separately defined two-state continuous-time
Markov model. Choose an energy $E>0$ in joules, $\hbar>0$ in joule-seconds,
$k_B>0$ in joules per kelvin, and a coupling $\gamma_d>0$ in square metres
per square second. For the accelerated spectrum set
$$r_+=\gamma_d S_a(E/\hbar),\qquad r_-=\gamma_d S_a(-E/\hbar).$$
These are positive rates in seconds$^{-1}$. Let $p(t)$ be the probability
of the excited state in the two-state chain with ground-to-excited rate
$r_+$ and excited-to-ground rate $r_-$, where model time $t$ is measured in
seconds. For every $t\ge0$ and any initial probability $p(0)\in[0,1]$, then
$$p(t)=p_*+(p(0)-p_*)e^{-(r_++r_-)t},\qquad p_* =\frac{1}{1+e^{2\pi cE/(a\hbar)}}.$$
If the effective thermometer temperature $T_{\rm eff}>0$ is defined by
$p_*/(1-p_*)=e^{-E/(k_BT_{\rm eff})}$, then
$$T_{\rm eff}=\frac{\hbar a}{2\pi c k_B}.$$
This is an exact result for the specified Markov chain. It is not a weak
coupling or point-detector thermalization theorem.

## Facts & Assumptions

**Given:** Countable Choice; the exact Fourier and tempered-distribution conventions; the two covariance/spectrum pairs in the preceding item; and positive $a,c,E,\hbar,k_B,\gamma_d$ with the units stated in the Statement, and an initial excited-state probability $p(0)\in[0,1]$.

[A1] Countable Choice is inherited from the Fourier suppliers and the draft thermal-contour supplier and its draft prerequisite. [[def-countable-choice]]

[A2] In the separately specified two-state continuous-time Markov model, the
state order is $(g,e)$ and probability distributions are row vectors. Its
generator, with $Q_{ij}$ the transition rate from state $i$ to state $j$ for
$i\ne j$, is
$$Q=\begin{pmatrix}-r_+&r_+\\r_-&-r_-\end{pmatrix}.$$
The row distribution $\pi(t)=(1-p(t),p(t))$ evolves by the forward equation
$\pi'(t)=\pi(t)Q$ with $\pi(0)=(1-p(0),p(0))$; this fixes the probability
evolution meant by the chain in the Statement.

[F1] The accelerated covariance, its spectrum conditional on the contour supplier, and the inertial covariance and spectrum $C_0,S_0$ are stated in [[lem-tgr-timelike-scalar-acceleration]].

[L1] **Draft supplier, not an accepted proof input:** the actual batch-74 Statement of [[lem-tgr-thermal-contour-spectrum]] assumes its parameter $\kappa>0$ with units of inverse length. Renaming that parameter to $\alpha$ and its length variable $s$ to $u$, it gives $C_\alpha(u)=-\alpha^2(16\pi)^{-1} \operatorname{csch}^2(\alpha(u-i0)/2)$ and $S_\alpha(\omega)=\omega/[2(e^{2\pi\omega/\alpha}-1)]$, $S_\alpha(0)=\alpha/(4\pi)$, and $S_\alpha(-\omega)=e^{2\pi\omega/\alpha}S_\alpha(\omega)$ for $\omega>0$. Its declared prerequisite [[lem-tgr-exponential-current]] is also present as a batch-74 draft. Both current run Step-1 records report `ready`; this is authoring-readiness evidence, not proof acceptance. All accelerated conclusions below remain conditional on those actual statements and proof review, not on their labels.

[F2] A tempered distribution is a continuous bilinear functional on Schwartz space, and its Fourier transform is defined by bilinear transposition with the negative-sign $2\pi$ convention. [[def-tempered-distribution]] [[def-fourier-transform-of-a-tempered-distribution]]

[F3] Fourier transformation is an automorphism on tempered distributions, with inverse $R\mathcal F$; on Schwartz functions the normalization is the negative-sign $2\pi$ transform. [[lem-fourier-transform-on-tempered-distributions-is-well-defined-and-continuous]] [[thm-fourier-transform-is-a-topological-automorphism-of-tempered-distributions]] [[thm-fourier-inversion-on-schwartz-space]]

[F4] The Fourier transform agrees with the integral transform on $L^1$ and with the Plancherel extension on $L^2$; that extension is a unitary isometry under the negative-sign $2\pi$ convention. [[thm-fourier-transform-agrees-with-l-one-and-plancherel-transforms]] [[thm-plancherel]]

[F5] Absolute Fubini applies to the compactly supported time integrals used to form the autocorrelation of $h$. [[thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]]

[F6] $C_c^\infty(\mathbb R;\mathbb R)$ consists of real smooth functions whose support is compact; these functions are Schwartz. [[def-test-function-space-d-of-an-open-set]]

## Proof

1.1 Put $g_{\mathsf T}(t)=h(t/\mathsf T)$ and $A_{\mathsf T}(s)=\int g_{\mathsf T}(t)g_{\mathsf T}(t-s)\,dt$. Compact support [F6] and [F5] permit the change of variables and interchange of the two ordinary integrals. Setting $u=t$ and $v=t-s$, and using the reality of $h$, gives the negative-sign angular transform $$\widehat{A_{\mathsf T}}(\lambda) =\int_{\mathbb R^2}g_{\mathsf T}(u)g_{\mathsf T}(v)e^{-i\lambda(u-v)}\,du\,dv =\widehat{g_{\mathsf T}}(\lambda)\widehat{g_{\mathsf T}}(-\lambda) =|\widehat{g_{\mathsf T}}(\lambda)|^2 =\mathsf T^2|\widehat h(\mathsf T\lambda)|^2.$$ By [F2] and [F3], the inverse angular-frequency relation is $C(s)=(2\pi)^{-1}\int S(\omega)e^{i\omega s}\,d\omega$ in the distributional sense: it is the negative-sign $2\pi$ inverse after the change $\xi=\omega/(2\pi)$. Pairing with $e^{-i\nu s}A_{\mathsf T}(s)$ gives the absolutely convergent formula $$R_{\mathsf T}^{(C)}(\nu)=\frac{\mathsf T^2}{2\pi} \int_{\mathbb R}S(\omega)|\widehat h(\mathsf T(\nu-\omega))|^2\,d\omega.$$ Here $S$ has at most linear growth and $\widehat h$ is rapidly decreasing, so the integral is finite. [A1, F1, F2, F3, F5, F6, given, algebra]

2.1 Since $h\in C_c^\infty$ by [F6], each derivative of $\widehat h$ is obtained by transforming a compactly supported smooth function $(-iu)^j h(u)$; repeated integration by parts shows every such derivative decreases faster than any inverse power. Hence $\int|z||\widehat h(z)|^2dz<\infty$. Plancherel in [F4], followed by $z=2\pi\xi$, yields $$\int_{\mathbb R}|\widehat h(z)|^2dz=2\pi\|h\|_2^2.$$ Changing variables $z=\mathsf T(\nu-\omega)$ in 1.1 therefore gives $$\frac{R_{\mathsf T}^{(C)}(\nu)}{\mathsf T\|h\|_2^2} =\frac{1}{2\pi\|h\|_2^2}\int_{\mathbb R} S(\nu-z/\mathsf T)|\widehat h(z)|^2\,dz.$$ [A1, F4, F6, step 1.1, given, algebra]

3.1 For $C=C_0$, [F1] gives $S_0(\nu)=\max(-\nu,0)/(2\pi c^2)$. On $\nu\le0$ this is linear with slope $-1/(2\pi c^2)$, on $\nu\ge0$ it is zero, and for $x\le0\le y$, $|S_0(x)-S_0(y)|=-x/(2\pi c^2)\le(y-x)/(2\pi c^2)$. Thus its global Lipschitz constant is $1/(2\pi c^2)$. For $C=C_a$, the conditional formula in [F1] is smooth at zero by its Taylor expansion, has bounded derivative on every compact interval, has bounded derivative as $\nu\to+\infty$ by exponential decay. Its derivative is $$S_a'(\nu)=\frac{1}{2\pi c^2} \frac{e^{b\nu}-1-b\nu e^{b\nu}}{(e^{b\nu}-1)^2},\qquad b=2\pi c/a.$$ The Taylor expansion at zero makes this derivative finite there; as $\nu\to+\infty$ it decays exponentially times a polynomial, and as $\nu\to-\infty$ it tends $-1/(2\pi c^2)$. Thus it is bounded on both tails and on compact intervals, so both spectra are globally Lipschitz (the accelerated assertion is conditional on [L1]). Subtract $S(\nu)$ in step 2.1 and use $|S(\nu-z/\mathsf T)-S(\nu)|\le\operatorname{Lip}(S)|z|/\mathsf T$. The definition of $K_h$ gives the stated error bound and its $1/\mathsf T$ limit. [F1, L1, step 2.1, algebra]

4.1 The accelerated spectrum is positive: for $\nu>0$ numerator and denominator in [F1] are positive, for $\nu<0$ they are both negative, and the zero limit is positive. Thus $r_+,r_->0$. By [A2], the second component of $\pi'=\pi Q$ gives $p'(t)=r_+(1-p(t))-r_-p(t)=r_+-(r_++r_-)p(t)$. Solving this scalar linear ODE gives $p(t)=p_*+(p(0)-p_*)e^{-(r_++r_-)t}$ with $p_*=r_+/(r_++r_-)$. For $t\ge0$ seconds, this is a convex combination of $p(0)$ and $p_*\in(0,1)$, so it remains a probability. Apply [L1] at $\nu=E/\hbar>0$ to get $r_-/r_+=S_a(-\nu)/S_a(\nu)=e^{2\pi c\nu/a}$, so $p_*=1/(1+e^{2\pi cE/(a\hbar)})$. The ratio $p_*/(1-p_*)$ is therefore $e^{-2\pi cE/(a\hbar)}$. Comparing with its defining Boltzmann form gives $T_{\rm eff}=\hbar a/(2\pi c k_B)$. This calculation concerns only the specified Markov model and its adopted rates. [A2, F1, L1, algebra] ∎
