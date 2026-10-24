---
id: thm-principle-of-descent-and-domination
kind: theorem
title: "The principle of descent and the logarithmic domination principle"
status: published
origin: pipeline
pipeline_run: frontier-37-owner-30
deps:
  - def-dependent-choice
  - thm-choice-implies-dependent-implies-countable-choice
  - def-logarithmic-potential-and-energy
  - thm-logarithmic-energy-well-defined-and-lower-semicontinuous
  - def-plane-subharmonic-function
  - lem-positive-linear-combinations-and-finite-maxima-preserve-subharmonicity
  - def-riesz-measure-subharmonic-function
  - thm-riesz-measure-is-positive-radon
  - thm-plane-subharmonic-functions-are-locally-integrable
  - lem-logarithmic-potential-distributional-laplacian
  - def-radon-measure-on-an-lch-space
  - thm-tonelli-theorem-for-sigma-finite-product-spaces
  - thm-polar-coordinates-formula-for-lebesgue-measure
  - thm-weyl-lemma-for-the-laplacian
  - cor-nonnegative-harmonic-function-with-an-interior-zero-vanishes
  - thm-c-two-characterization-of-plane-subharmonicity
  - def-plane-harmonic-function
  - lem-distributional-laplacian-commutes-with-mollification
  - thm-convolution-with-a-mollifier-is-smooth-and-differentiates-under-the-integral-sign
  - thm-translation-is-continuous-in-l-p-for-one-le-p-less-infinity
  - thm-minkowski-inequality-for-integrals
  - thm-c-c-rn-is-dense-in-l-p-of-rn
  - thm-jensens-integral-inequality
  - thm-dominated-convergence
  - thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces
  - def-weak-derivative-of-a-locally-integrable-function
  - def-sobolev-space-wkp-and-its-norm
  - lem-l-two-with-the-integral-pairing-is-a-hilbert-space
  - thm-riesz-representation-for-hilbert-space
  - def-countable-choice
  - thm-rmk-uniqueness-among-radon-measures
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
provenance_note: >-
  The descent clause is the finite-measure form of the lower-semicontinuity
  supplier, obtained by normalising to probability measures. The domination
  clause uses an inline local Sobolev proof of the bounded one-dimensional
  strict-contact identity, followed by a full-mass truncation argument on the
  Riemann sphere. The Guedj-Zeriahi and Bloom-Levenberg texts are cross-checks
  for this route, not axioms in the proof. The total-mass-at-infinity step is
  proved directly by a radial test-function computation. The
  almost-everywhere-to-everywhere upgrade uses disk means and handles common
  negative-infinity sets. Dependent Choice supplies the Countable Choice
  interfaces; no full-Choice Sobolev chain rule is used. The nonzero-mass
  hypothesis on mu is explicit (the zero case is false for c<0 and is
  excluded).
sources:
  references:
    - title: "E. B. Saff, Logarithmic Potential Theory with Applications to Approximation Theory, §2"
      url: "https://arxiv.org/pdf/1010.3760"
      locator: "Theorem 2.8 and its proof idea, printed pp. 182-183"
    - title: "T. Bloom and N. Levenberg, Pluripotential Energy"
      url: "https://arxiv.org/pdf/1007.2391"
      locator: "Proposition 5.9, printed pp. 21-22 (epsilon-maximum domination proof; cross-check only)"
    - title: "V. Guedj and A. Zeriahi, The Weighted Monge-Ampere Energy of Quasi-Plurisubharmonic Functions"
      url: "https://arxiv.org/pdf/math/0612630"
      locator: "§1.1, identity (1) on PDF p. 3, Theorem 1.3 and Corollary 1.7, printed pp. 3-8 (cross-checks for the bounded identity and full-mass truncation route; not assumed)"
verification:
  audited: 2026-10-02
  precheck: pass
---

## Statement

Assume Dependent Choice.

**(a) Principle of descent.** Let $K\subseteq\mathbb C$ be nonempty compact, and
let $\mu_n,\mu$ be finite positive Borel measures on $K$ with
$\mu_n\Rightarrow\mu$ weakly. Then
$$U^\mu(z)\le\liminf_{n\to\infty}U^{\mu_n}(z)\quad(z\in\mathbb C),\qquad I(\mu)\le\liminf_{n\to\infty}I(\mu_n).$$

**(b) Logarithmic domination principle.** Let $\mu,\nu$ be finite positive
Borel measures on $\mathbb C$ with compact support, with
$$\mu(\mathbb C)>0,\qquad \nu(\mathbb C)\le\mu(\mathbb C),\qquad I(\mu)<+\infty,$$
and let $c\in\mathbb R$. If $U^\mu\le U^\nu+c$ holds $\mu$-almost everywhere,
then it holds everywhere on $\mathbb C$.

In (b) the hypothesis and the conclusion are respectively equivalent to
$p_\mu\ge p_\nu-c$ $\mu$-a.e.\ and everywhere, where $p_\sigma=-U^\sigma$ is the
subharmonic normalisation of [[def-logarithmic-potential-and-energy]]. The
hypothesis $\mu(\mathbb C)>0$ cannot be dropped: for $\mu=\nu=0$ and $c<0$ the
exceptional-set hypothesis is vacuous while $U^0=0\le U^0+c=c$ is false.


## Facts & Assumptions

**Given:** Dependent Choice and the potential, energy and Riesz-measure conventions of [[def-logarithmic-potential-and-energy]], [[def-riesz-measure-subharmonic-function]] and [[def-dependent-choice]].

[F1] For a finite positive Borel measure $\sigma$ with compact support, $U^\sigma(z)=\int k(z,w)\,d\sigma(w)$ with $k(z,w)=\log\frac1{|z-w|}$ and diagonal value $+\infty$, $p_\sigma=-U^\sigma$, and $I(\sigma)=\int U^\sigma\,d\sigma\in(-\infty,+\infty]$ computed from the shifted nonnegative kernel $k_R=k+\log R$ with $R>\operatorname{diam}\operatorname{supp}\sigma$, the value being independent of the admissible $R$ ([[def-logarithmic-potential-and-energy]]). If $I(\sigma)<+\infty$ and $R>\operatorname{diam}\operatorname{supp}\sigma$, then $\iint k_R\,d\sigma\,d\sigma=I(\sigma)+\sigma(\mathbb C)^2\log R<+\infty$.

[F2] Let $K$ be nonempty compact and let $\varphi_n,\varphi$ be Borel probability measures on $K$ with $\varphi_n\Rightarrow\varphi$; then $U^\varphi(z)\le\liminf_nU^{\varphi_n}(z)$ for every $z\in\mathbb C$ and $I(\varphi)\le\liminf_nI(\varphi_n)$. No choice principle is required ([[thm-logarithmic-energy-well-defined-and-lower-semicontinuous]]).

[F3] Positive finite linear combinations and finite pointwise maxima of subharmonic functions on a complex domain are subharmonic on that domain, so in particular sums of two subharmonic functions are subharmonic; subharmonic functions are upper semicontinuous, are not identically $-\infty$ on any component, and satisfy the circle mean inequality ([[lem-positive-linear-combinations-and-finite-maxima-preserve-subharmonicity]], [[def-plane-subharmonic-function]]).

[F4] Assume Dependent Choice. For subharmonic $u$ on a complex domain $\Omega$ the Riesz functional $\mu_u(\varphi)=\frac1{2\pi}\int_\Omega u\,\Delta\varphi\,dA$ is nonnegative on nonnegative test functions, and there is exactly one positive Radon measure on $\Omega$, again written $\mu_u$, with $\mu_u(\varphi)=\int_\Omega\varphi\,d\mu_u$ for all $\varphi\in C_c^\infty(\Omega)$; it is called the Riesz measure of $u$ ([[def-riesz-measure-subharmonic-function]], [[thm-riesz-measure-is-positive-radon]]). For $c\in\mathbb R$ one has $\mu_{u+c}=\mu_u$, and for $\alpha>0$ one has $\mu_{\alpha u}=\alpha\mu_u$, because $\Delta$ is linear.

[F5] Dependent Choice implies Countable Choice, and in particular supplies the Countable Choice assumed by Weyl's lemma ([[thm-choice-implies-dependent-implies-countable-choice]]).

[F6] For every finite positive Borel measure $\sigma$ of compact support the normalised potential $p_\sigma=-U^\sigma$ is subharmonic on $\mathbb C$ and $p_\sigma$ is real-valued off a polar set ([[lem-logarithmic-potential-distributional-laplacian]]).

[F7] Guedj-Zeriahi, §1.1 identity (1), states the bounded plurisubharmonic contact identity in the sense of Borel measures; in dimension one its $dd^c$ normalization is a positive constant multiple of the Laplacian. This is a literature cross-check only. Neither that bounded identity nor its unbounded extension is assumed: the proof below establishes the bounded plane identity from Sobolev tests, then derives the needed unbounded full-mass identity by truncation on $\mathbb P^1$.

[F8] A Radon measure on an LCH space is finite on compact sets, outer regular on all Borel sets and inner regular on open sets: for every Borel $E$ and open $U$, $\mu(E)=\inf_{E\subseteq V\text{ open}}\mu(V)$ and $\mu(U)=\sup_{K\subseteq U\text{ compact}}\mu(K)$ ([[def-radon-measure-on-an-lch-space]]).

[F9] Every subharmonic function on a complex domain belongs to $L^1_{\mathrm{loc}}$ ([[thm-plane-subharmonic-functions-are-locally-integrable]]).

[F10] Tonelli's theorem for nonnegative product-measurable integrands on $\sigma$-finite product spaces ([[thm-tonelli-theorem-for-sigma-finite-product-spaces]]). The polar-coordinate formula used below is separately supplied by [F13].

[F11] Assume Countable Choice. If $T\in\mathcal D'(\Omega)$ and $\Delta T=0$, there is a unique smooth harmonic $h$ with $T=T_h$ ([[thm-weyl-lemma-for-the-laplacian]]).

[F12] Let $u\ge0$ be harmonic on a domain $\Omega\subseteq\mathbb R^n$, $n\ge2$. Then either $u\equiv0$ or $u(x)>0$ for every $x\in\Omega$ ([[cor-nonnegative-harmonic-function-with-an-interior-zero-vanishes]]).

[F13] Assume Countable Choice: for the unit circle $S^1$ with its surface measure $\sigma$ and every Borel function $f\ge0$ one has $\int_{\mathbb R^2}f\,dA=\int_0^\infty\int_{S^1}f(r\omega)\,r\,d\sigma(\omega)\,dr$, which with the parametrisation $\omega=e^{it}$ reads $\int_{\mathbb R^2}f\,dA=\int_0^\infty r\int_0^{2\pi}f(re^{it})\,dt\,dr$ ([[thm-polar-coordinates-formula-for-lebesgue-measure]]).

[F14] A real $C^2$ function on an open subset of $\mathbb C$ is subharmonic if and only if its Laplacian is $\ge0$ throughout; since plane harmonic functions are by definition $C^2$ with vanishing Laplacian, every harmonic function on a domain is subharmonic ([[thm-c-two-characterization-of-plane-subharmonicity]], [[def-plane-harmonic-function]]).

[F15] Distributional Laplacians commute with local mollification, and convolution by a smooth compactly supported mollifier is smooth with derivatives under the integral sign. Dependent Choice supplies the Countable Choice hypotheses of these interfaces ([[lem-distributional-laplacian-commutes-with-mollification]], [[thm-convolution-with-a-mollifier-is-smooth-and-differentiates-under-the-integral-sign]]).

[F16] Translation is continuous in $L^2(\mathbb R^2)$ and Minkowski's inequality holds for integrals, under Countable Choice ([[thm-translation-is-continuous-in-l-p-for-one-le-p-less-infinity]], [[thm-minkowski-inequality-for-integrals]]).

[F17] Weak derivatives and $W^{1,2}$ use the test-function conventions of [[def-weak-derivative-of-a-locally-integrable-function]] and [[def-sobolev-space-wkp-and-its-norm]]. Also, $C_c(\mathbb R^2)$ is dense in $L^2(\mathbb R^2)$; $L^2$ with its real integral pairing is a Hilbert space, and every bounded linear functional on a Hilbert space has a representing vector. These interfaces require at most Countable Choice ([[thm-c-c-rn-is-dense-in-l-p-of-rn]], [[lem-l-two-with-the-integral-pairing-is-a-hilbert-space]], [[thm-riesz-representation-for-hilbert-space]]).

[F18] Jensen's inequality, dominated convergence and Fubini's theorem apply to the integrable functions used below; all require at most Countable Choice ([[thm-jensens-integral-inequality]], [[thm-dominated-convergence]], [[thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]]).

[F19] Under Dependent Choice, positive Radon measures on an LCH space that agree on all continuous compactly supported tests are equal ([[thm-rmk-uniqueness-among-radon-measures]]).

## Proof

**Proof technique:** direct.

### Local Sobolev and strict-contact facts under DC

Write $dA$ for area measure and $\mu_f=(2\pi)^{-1}\Delta f$ for the Riesz measure. Use the radial unit-mass mollifier $$ \rho(x)=C\exp\!\left(-\frac1{1-|x|^2}\right)\mathbf1_{\{|x|<1\}}, \qquad \rho_\delta(x)=\delta^{-2}\rho(x/\delta), $$ with $C$ chosen so that $\int\rho\,dA=1$. The profile is smooth, radial, and nonincreasing. All mollifications below are taken on a safe interior of the relevant domain.

For a subharmonic $f$, let $$ A_r f(z)=\frac1{\pi r^2}\int_{B(z,r)}f\,dA. $$ Integrating its circle-mean inequality in the radius gives $A_r f(z)\ge f(z)$ when $f(z)$ is finite. If $f(z)=-\infty$, upper semicontinuity bounds $f$ above by any prescribed real number on a sufficiently small disk. For finite $f(z)$, upper semicontinuity gives, for each $\eta>0$, an $r_0>0$ such that $A_r f(z)\le f(z)+\eta$ for every $0<r<r_0$. Thus $f(z)\le A_r f(z)\le f(z)+\eta$ for all such $r$, and $A_r f(z)\to f(z)$. The layer-cake formula for a radial decreasing density is $$ (f*\rho_\delta)(z)=\int_0^1\pi s^2(-\rho'(s))A_{\delta s}f(z)\,ds, \qquad \int_0^1\pi s^2(-\rho'(s))\,ds=1. $$ If $f(z)$ is finite, choose $\delta<r_0$; every average in this weighted mean lies between $f(z)$ and $f(z)+\eta$, so the convolution does too. If $f(z)=-\infty$, upper semicontinuity bounds $f$ by any real $N$ on a sufficiently small disk, so every average in the weighted mean is at most $N$. Consequently the actual upper-semicontinuous representative satisfies $(f*\rho_\delta)(z)\to f(z)$ pointwise, including at $-\infty$ values. This pointwise fact will be used against Riesz measures, including at points where a finite-energy potential equals $-\infty$.

If $f$ is locally bounded above and below and subharmonic, then $f_\delta=f*\rho_\delta$ has $\Delta f_\delta=2\pi\mu_f*\rho_\delta\ge0$ by [F15]. For a smooth cutoff $0\le\eta\le1$ supported in a fixed compact set, choose $C_0$ above $f_\delta$ on a fixed neighborhood of its support and let $B$ uniformly bound $C_0-f_\delta$ there. Integration by parts, with $C_0-f_\delta\ge0$, and Young's inequality give $$ \int\eta^2|\nabla f_\delta|^2\,dA \le 2B\int\eta^2\Delta f_\delta\,dA +4B^2\int|\nabla\eta|^2\,dA. $$ The first term is bounded by the Riesz mass on a fixed compact neighborhood, and local boundedness makes $B$ uniform. Hence $\nabla f_\delta$ is bounded in local $L^2$. Pointwise convergence and local boundedness give $f_\delta\to f$ in local $L^2$. For a smooth test $\zeta$ on a smaller disk, the weak derivative functional is bounded by $$ \left|\int f\,\partial_i\zeta\,dA\right| =\lim_{\delta\downarrow0}\left|\int(\partial_i f_\delta)\zeta\,dA\right| \le C\|\zeta\|_2. $$ To use [F17] on that disk, exhaust it by concentric closed subdisks, extend each truncated $L^2$ function by zero, approximate by a compactly supported continuous function on $\mathbb R^2$, multiply by a smooth cutoff supported in the disk and equal to one on the truncation, and mollify with radius small enough to keep the support inside the disk. This proves density of smooth compactly supported tests in its $L^2$ space. The Hilbert-space representation in [F17] therefore gives an $L^2$ weak derivative. Thus $f\in W^{1,2}_{\rm loc}$.

For any $g\in W^{1,2}_{\rm loc}$, localization by a smooth cutoff, [F16], and Minkowski's inequality show that $g*\rho_\delta\to g$ strongly in local $W^{1,2}$. Weak derivatives commute with convolution on a safe interior by the direct test calculation $$ \partial_i(g*\rho_\delta)(x) =-\int g(y)\partial_{y_i}\rho_\delta(x-y)\,dA(y) =\int (\partial_i g)(y)\rho_\delta(x-y)\,dA(y). $$ No full-Choice Sobolev chain-rule supplier is used.

For smooth $F:\mathbb R\to\mathbb R$ whose derivative is bounded and Lipschitz, approximate $g\in W^{1,2}_{\rm loc}$ strongly by smooth mollifications. Classical differentiation and the estimate $$ \|F'(g_n)\nabla g_n-F'(g)\nabla g\|_2 \le \|F'\|_\infty\|\nabla g_n-\nabla g\|_2 +\|(F'(g_n)-F'(g))\nabla g\|_2 $$ prove $\nabla F(g)=F'(g)\nabla g$. For the second term, split into $|g_n-g|\le t$ and its complement, then use the Lipschitz bound on the first part and convergence in measure plus absolute continuity of $\int|\nabla g|^2$ on the second. The same estimate proves strong local $W^{1,2}$ convergence under this composition. Choose smooth $\vartheta$ with $\vartheta=0$ on $(-\infty,0]$ and $\vartheta=1$ on $[1,\infty)$, put $Q(t)=t\vartheta(t)$ and $P_\delta(t)=\delta Q(t/\delta)$. Then $|P_\delta(t)-t^+|\le\delta$, the derivatives are uniformly bounded, and $P_\delta'(t)\to1_{\{t>0\}}$ (with value $0$ at $t=0$). Dominated convergence therefore gives $$ g^+\in W^{1,2}_{\rm loc},\qquad \nabla g^+=1_{\{g>0\}}\nabla g\quad\text{almost everywhere}. $$

We now prove the bounded plane strict-contact identity. Let $x,y$ be locally bounded above and below subharmonic functions, put $w=\max(x,y)$ and $f=x-y$. The preceding bound gives $x,y,w\in W^{1,2}_{\rm loc}$, and the positive-part formula gives $\nabla(w-y)=\nabla f$ almost everywhere on $\{f>0\}$. Fix $\varphi\in C_c^\infty$ and choose smooth $\chi_n$ with $0\le\chi_n\le1$, $\chi_n(t)=0$ for $t\le1/(2n)$, and $\chi_n(t)=1$ for $t\ge1/n$. Put $\psi_n=\varphi\chi_n(f)$. Its gradient vanishes where $f\le1/(2n)$; where $f>1/(2n)$ the displayed gradients agree. Thus $$ \nabla(w-y)\cdot\nabla\psi_n =\nabla(x-y)\cdot\nabla\psi_n\quad\text{almost everywhere}. $$ For $\delta>0$ use smooth tests $\psi_{n,\delta}=\varphi\chi_n(x*\rho_\delta-y*\rho_\delta)$. Strong local $W^{1,2}$ convergence and the scalar chain rule give $\psi_{n,\delta}\to\psi_n$ strongly in $W^{1,2}$; pointwise convergence of the radial mollifications gives pointwise convergence to the actual $f$, and $|\psi_{n,\delta}|\le|\varphi|$. For each $p\in\{x,y,w\}$ the distributional Riesz identity and integration by parts give $$ \int\psi_{n,\delta}\,d\mu_p =-\frac1{2\pi}\int\nabla p\cdot\nabla\psi_{n,\delta}\,dA. $$ Strong convergence on the right and dominated convergence against the locally finite Radon measure on the left pass this identity to $\psi_n$. Subtract the $p=y$ identity from those for $p=w$ and $p=x$, use the gradient equality, and then let $n\to\infty$. Since $\chi_n(t)\to1_{\{t>0\}}$, dominated convergence gives, as Borel measures, $$ 1_{\{x>y\}}\mu_x=1_{\{x>y\}}\mu_{\max(x,y)}. $$ To pass from smooth tests to $C_c$, extend any $C_c$ function by zero and convolve it with $\rho_\delta$; uniform continuity gives uniform convergence, and small $\delta$ keeps the supports in a fixed compact subset of the domain. For a Borel contact set $E$, let $\lambda=1_E\mu_p$. It is finite on compact sets because $\lambda\le\mu_p$. It is inner regular on every Borel set $B$: take a compact exhaustion $K_n$ of the plane domain. For fixed $n$ and $\eta>0$, outer regularity of $\mu_p$ gives an open $O_n\supset K_n\setminus(E\cap B)$ with $\mu_p(O_n)\le\mu_p(K_n\setminus(E\cap B))+\eta$. Then $F_n=K_n\setminus O_n$ is compact in $E\cap B$, and $\lambda((B\cap E\cap K_n)\setminus F_n)\le\eta$. Letting $\eta\downarrow0$ and then exhausting the domain proves inner regularity on $B$; the countable selections are supplied by DC$\Rightarrow$CC. To get outer regularity, suppose $\lambda(B)<\infty$ and choose a relatively compact open exhaustion $U_n$ of the domain. By the inner regularity just proved, choose compact $F_n\subset U_n\setminus B$ with $\lambda((U_n\setminus B)\setminus F_n)<\eta 2^{-n}$. The open set $V=\bigcup_n(U_n\setminus F_n)$ contains $B$ and satisfies $\lambda(V\setminus B)<\eta$. If $\lambda(B)=\infty$, outer regularity is automatic. Thus $\lambda$ is Radon. Smooth compactly supported functions are uniformly dense in $C_c$ by zero extension and convolution with $\rho_\delta$ on a safe interior. Therefore [F19] identifies the restricted measures from their $C_c$ integrals. This proves the displayed identity as an exact Borel measure identity. The proof uses the actual upper-semicontinuous representatives and no quasicontinuous replacement.

### Finite-energy potentials are locally Sobolev

Let $\sigma$ be finite positive with compact support $K$, mass $m>0$ and $I(\sigma)<\infty$, and write $p(z)=\int\log|z-w|\,d\sigma(w)$. For a compact plane set $Q$, Tonelli and the local integrability of $|\log|z-w||^2$ uniformly for $w\in K$ show that $\int_K|\log|z-w||^2d\sigma(w)<\infty$ for area-a.e. $z\in Q$. Jensen [F18] then gives $$ \int_Q|p(z)|^2\,dA(z) \le m\int_K\int_Q|\log|z-w||^2\,dA(z)\,d\sigma(w)<\infty. $$ Thus $p\in L^2_{\rm loc}$. Put $\sigma_\delta=\sigma*\rho_\delta$ and $p_\delta=p*\rho_\delta=p_{\sigma_\delta}$; Fubini justifies the last identity because the logarithm is locally area-integrable on the compact sets involved. The convolution $\kappa_\delta=\rho_\delta*\rho_\delta$ is radial and has mass one. The circle-mean calculation $$ \frac1{2\pi}\int_0^{2\pi}\log|a+re^{it}|\,dt =\log\max(|a|,r)\ge\log|a| $$ follows by factoring out the larger radius and averaging the logarithm series, with the boundary case obtained by its integrable limit. Hence $k_R*\kappa_\delta\le k_R$ for $k_R(a)=\log(R/|a|)$. Choose $R>1+\operatorname{diam}K+2$ and $0<\delta<1$, so the shifted kernel is nonnegative on all smoothed supports. Tonelli gives $$ I(\sigma_\delta)+m^2\log R =\iint(k_R*\kappa_\delta)(z-w)\,d\sigma(z)d\sigma(w) \le\iint k_R(z-w)\,d\sigma(z)d\sigma(w) =I(\sigma)+m^2\log R. $$ On $\operatorname{supp}\sigma_\delta$, $p_\delta\le m\log R$, so $$ \int p_\delta^-\,d\sigma_\delta =I(\sigma_\delta)+\int p_\delta^+\,d\sigma_\delta \le I(\sigma)+m^2\log R. $$ For a fixed smooth cutoff $\eta$, integration by parts and $\Delta p_\delta=2\pi\sigma_\delta$ give $$ \int\eta^2|\nabla p_\delta|^2\,dA \le4\pi\int p_\delta^-\,d\sigma_\delta +4\int p_\delta^2|\nabla\eta|^2\,dA. $$ The last term is uniformly bounded by Jensen's inequality applied to $p*\rho_\delta$ and $p\in L^2_{\rm loc}$ on a slightly larger compact set. Thus $\nabla p_\delta$ is uniformly bounded in local $L^2$. Approximate identity convergence from [F16] gives $p_\delta\to p$ in local $L^2$; the bounded-functional and Hilbert-space argument above then produces the weak derivatives of $p$ in local $L^2$. Consequently every finite-energy logarithmic potential belongs to $W^{1,2}_{\rm loc}$ under DC.

The same strict-contact test proof also applies to a finite-energy subharmonic $x$ and a smooth finite-valued subharmonic obstacle $y$: then $x,y,w=\max(x,y)\in W^{1,2}_{\rm loc}$, and at points where $x=-\infty$ the radial mollifications tend to $-\infty$ while $y$ stays finite. Define $\chi_n(-\infty)=0$; the tests converge pointwise there as well. The DCT argument therefore proves the exact Borel restriction identity on the strict contact set also in this one-obstacle case.

### Full-mass truncation and the unbounded contact identity

Let $\mathbb P^1=\mathbb C\cup\{\infty\}$, $$ \rho_{FS}(z)=\tfrac12\log(1+|z|^2),\qquad \omega=dd^c\rho_{FS},\qquad dd^c=(2\pi)^{-1}\Delta\,dA, \qquad \int_{\mathbb P^1}\omega=1. $$ Indeed $\Delta\rho_{FS}=2(1+|z|^2)^{-2}$, so polar integration gives $(2\pi)^{-1}\int_{\mathbb C}\Delta\rho_{FS}\,dA=1$; the form extends smoothly over infinity using the coordinate $t=1/z$. Here $\rho_{FS}$ is a local potential on the affine chart. An $\omega$-psh function $q$ is an upper-semicontinuous locally integrable function on $\mathbb P^1$ such that $q+\rho_U$ is subharmonic in every chart with $dd^c\rho_U=\omega$. Its ordinary current $T_q=\omega+dd^cq$ is a positive Radon measure: the local Riesz measures agree on overlaps. Its total mass is one, since on the compact surface $\langle dd^cq,1\rangle=\langle q,dd^c1\rangle=0$ and $\int\omega=1$. These statements use the local Riesz-measure interface [F4] and the finite-atlas gluing just described.

For bounded $\omega$-psh $x,y$, adding a chart potential turns them into locally bounded subharmonic functions. The bounded plane identity above then gives globally on $\mathbb P^1$ $$ 1_{\{x>y\}}T_x=1_{\{x>y\}}T_{\max(x,y)}. $$ The strict set is Borel: for extended-valued upper-semicontinuous functions, $\{x>y\}=\bigcup_{r\in\mathbb Q}(\{x>r\}\cap\{y<r\})$.

For any $\omega$-psh $q$, put $q_j=\max(q,-j)$, $T_j=T_{q_j}$ and $F_j=\{q>-j\}$. Each $T_j$ is positive and has mass one. For $j\ge k$, apply the bounded identity to $(q_j,-k)$; since $\{q_j>-k\}=F_k$ and $\max(q_j,-k)=q_k$, it gives $$ T_j|_{F_k}=T_k|_{F_k}. $$ Thus $R_j=1_{F_j}T_j$ increases. Define the nonpluripolar truncation limit $T_q^{np}=\lim_jR_j$ and the full-mass class $$ \mathcal E=\{q:\ T_q^{np}(\mathbb P^1)=1\}. $$ Since $T_j(\mathbb P^1)=1$, this definition is equivalent to
$$
 q\in\mathcal E\quad\Longleftrightarrow\quad T_j(\{q\le-j\})=1-R_j(\mathbb P^1)\longrightarrow0. \tag{1}
$$
 If $q\in\mathcal E$, stabilization gives $T_j|_{F_j}=T_q^{np}|_{F_j}$; the complementary tails of both measures have mass $1-R_j(\mathbb P^1)$. Consequently
$$
 \|T_j-T_q^{np}\|_{TV}\le2\bigl(1-R_j(\mathbb P^1)\bigr)\longrightarrow0. \tag{2}
$$
 For $q\in\mathcal E$, this total-variation limit is Radon: given a Borel set, approximate it from outside by an open set for a sufficiently close Radon $T_j$; the total-variation error transfers the outer-regularity estimate to $T_q^{np}$. For an open set, approximate it from inside by a compact set for $T_j$ and transfer the estimate in the same way. The ordinary current is this same measure. Indeed $q_j\downarrow q$ and $|q_j|\le|q|$ almost everywhere, so dominated convergence gives $q_j\to q$ in $L^1_{\rm loc}$ on every chart. Hence $T_j=\omega+dd^cq_j\to T_q=\omega+dd^cq$ distributionally. By (2), the same sequence converges in total variation to $T_q^{np}$. The two limits therefore agree on smooth tests, and uniqueness of the local Riesz measure in [F4] gives
$$
 T_q^{np}=T_q\quad(q\in\mathcal E). \tag{3}
$$
 This identifies the truncation limit with the ordinary current instead of leaving two measures unnamed as though they were equal.

The integer truncation levels are cofinal among real levels: for $s\le t$, the bounded contact identity applied to $(q_t,-s)$ gives stabilization on $\{q>-s\}$. Thus changing every level by a fixed constant leaves the truncation limit, condition (1), and membership in $\mathcal E$ unchanged.

We need that $\mathcal E$ is upward closed. First derive bounded comparison. For bounded $\omega$-psh $\alpha,\beta$, put $r=\max(\alpha,\beta)$. On $\{\alpha<\beta\}$ one has $T_r=T_\beta$, and on $\{\alpha>\beta\}$ one has $T_r=T_\alpha$. Since $T_r$ has mass one, $$ T_\beta(\alpha<\beta) =1-T_r(\alpha\ge\beta) \le1-T_\alpha(\alpha>\beta) =T_\alpha(\alpha\le\beta). $$ Apply this to $(\alpha,\beta-\delta)$ and let $\delta\downarrow0$; the strict sublevel sets increase to $\{\alpha<\beta\}$, giving
$$
 T_\beta(\alpha<\beta)\le T_\alpha(\alpha<\beta). \tag{4}
$$
 For $\alpha,\beta\in\mathcal E$, apply (4) to $\alpha_j=\max(\alpha,-j)$ and $\beta_k=\max(\beta,-k)$. Let $k\to\infty$ and then $j\to\infty$. The indicators converge pointwise, and (2)-(3) give total-variation convergence of both truncated currents, so
$$
 T_\beta(\alpha<\beta)\le T_\alpha(\alpha<\beta). \tag{5}
$$
 Now suppose $\theta\in\mathcal E$ and $\theta\le q$ for an $\omega$-psh $q$. By the constant-shift observation, shift both down so $q\le-2$. Put $v=q/2$, $v_j=\max(v,-j)=q_{2j}/2$ and $\theta_{2j}=\max(\theta,-2j)$. Since $v\le-1$, the Borel sets $$ S_j=\{\theta_{2j}<v_j-j+1\} $$ satisfy $\{v\le-j\}\subseteq S_j\subseteq\{\theta\le-j\}$: on the first set $\theta_{2j}\le q_{2j}=2v_j=-2j<v_j-j+1$, and the second inclusion follows from $v_j\le-1$. Apply (5) to the bounded pair $(\theta_{2j},v_j-j+1)$; adding a constant leaves the current unchanged. Then $$ T_{v_j}(v\le-j)\le T_{v_j}(S_j) \le T_{\theta_{2j}}(S_j) \le T_{\theta_{2j}}(\theta\le-j) =T_{\theta_j}(\theta\le-j)\longrightarrow0. $$ For the equality, $T_{\theta_{2j}}$ and $T_{\theta_j}$ agree on $\{\theta>-j\}$ by stabilization and both have mass one. Hence $v\in\mathcal E$ by (1). Since $T_{v_j}=\tfrac12T_{q_{2j}}+\tfrac12\omega$, $$ T_{q_{2j}}(q\le-2j)\le2T_{v_j}(v\le-j)\longrightarrow0. $$ These are the even-index tails in (1); the tail masses are decreasing, so all tails tend to zero and $q\in\mathcal E$. This proves upward closure.

Finally let $\theta\in\mathcal E$ and let $\xi$ be any $\omega$-psh function, with no lower bound and no finiteness assumption on its current. Upward closure gives $q=\max(\theta,\xi)\in\mathcal E$. Define $$ \theta_j=\max(\theta,-j),\qquad \xi_{j+1}=\max(\xi,-j-1),\qquad q_j=\max(q,-j), $$ and $E=\{\theta>\xi\}$, $E_j=\{\theta_j>\xi_{j+1}\}$. Then $E\subseteq E_j$ and $\max(\theta_j,\xi_{j+1})=q_j$. Bounded contact gives $T_{\theta_j}|_{E_j}=T_{q_j}|_{E_j}$, hence for every Borel $B$, $$ T_{\theta_j}(B\cap E)=T_{q_j}(B\cap E). $$ By (2)-(3), $T_{\theta_j}\to T_\theta$ and $T_{q_j}\to T_q$ in total variation. Passing to the limit proves the exact Borel measure identity
$$
 1_{\{\theta>\xi\}}T_\theta =1_{\{\theta>\xi\}}T_{\max(\theta,\xi)}. \tag{6}
$$
 The proof uses bounded strict-contact only as established above; it does not assume a quasicontinuous-representative theorem or any external unbounded contact identity. It permits $\xi=-\infty$ on arbitrary Borel sets.

1.1 Descent clause: let $K$ be nonempty compact and $\mu_n\Rightarrow\mu$ finite positive Borel measures on $K$, with $m_n:=\mu_n(K)$ and $m:=\mu(K)$. Testing weak convergence against $1$ gives $m_n\to m$. If $m=0$, then $\mu=0$. For fixed $z$, set $b_z=1+|z|+\max_{w\in K}|w|$; then $k(z,w)\ge-\log b_z$ on $K$, so $U^{\mu_n}(z)\ge-m_n\log b_z\to0=U^\mu(z)$. Put $D=\max(1,\operatorname{diam}K)$; then $k\ge-\log D$ on $K^2$, so $I(\mu_n)\ge-m_n^2\log D\to0=I(\mu)$. If $m>0$, choose $N$ so $m_n>0$ for all $n\ge N$ and define $\varphi_n=\mu_n/m_n$ for that tail and $\varphi=\mu/m$. Then $\varphi_n\Rightarrow\varphi$. Applying [F2], and using $m_n\to m$, gives both inequalities after rescaling: for each fixed $z$ the values $U^{\varphi_n}(z)$ are uniformly bounded below and may be $+\infty$, so multiplication by positive scalars converging to $m$ preserves their extended liminf; the energies are uniformly bounded below by $-\log D$, so multiplication by $m_n^2\to m^2$ likewise preserves the energy liminf. Since $U^{\mu_n}=m_nU^{\varphi_n}$ and $I(\mu_n)=m_n^2I(\varphi_n)$ for $n\ge N$, the desired inequalities follow. [F1, F2, algebra, given]

1.2 Domination setup: let $\mu,\nu$ be finite positive Borel measures with compact support, $M:=\mu(\mathbb C)>0$, $\nu(\mathbb C)\le M$, $I(\mu)<+\infty$, $c\in\mathbb R$, and assume $U^\mu\le U^\nu+c$ $\mu$-a.e.; put $u:=p_\mu/M$ and $v:=(p_\nu-c)/M$, so that $u\ge v$ $\mu$-a.e. and, by [F6], [F3] and the scaling in [F4], $u$ and $v$ are subharmonic on $\mathbb C$, with Riesz measures $\mu_u=\mu/M$ and $\mu_v=\nu/M$. With $R>\max\{1,\operatorname{diam}(\operatorname{supp}\mu\cup\operatorname{supp}\nu)\}$ the shifted kernel $k_R$ is nonnegative on the product of that compact carrier and [F1] gives $\iint k_R\,d\mu\,d\mu=I(\mu)+M^2\log R<+\infty$; by Tonelli [F10] the nonnegative function $z\mapsto\int k_R(z,w)\,d\mu(w)$ is finite for $\mu$-a.e. $z$, hence so is $U^\mu$, which differs from it by the constant $M\log R$, and therefore $p_\mu$ and $u$ are finite $\mu$-a.e. Put $a:=\nu(\mathbb C)/M\le1$, $S:=\operatorname{supp}\mu\cup\operatorname{supp}\nu$ and $A:=\int|w|\,d\mu(w)$, $B:=\int|w|\,d\nu(w)$; for $|z|\ge R_0:=1+2\max_{w\in S}|w|$ one has $|\log|1-w/z||\le2|w|/|z|$, hence the uniform far-field estimates $|u(z)-\log|z||\le 2A/(M|z|)$ and $|v(z)-a\log|z|+c/M|\le 2B/(M|z|)$. [F1, F3, F4, F6, F10, given]

1.3 Agreement lemma: if $v_1,v_2$ are subharmonic on $\mathbb C$ and equal area-a.e., then they agree everywhere. For each center $a$ and radius $r>0$, their disk averages $A_r(v_i)(a)$ are equal because the functions agree a.e. and are locally integrable by [F9]. Integrating the circle submean inequality in the radius gives $A_r(v)(a)\ge v(a)$ when $v(a)$ is finite; upper semicontinuity gives $A_r(v)(a)\le N$ for every $N>v(a)$ once $r$ is small. Hence $A_r(v)(a)\to v(a)$. If $v(a)=-\infty$, upper semicontinuity gives the same upper bound for every real $N$, so the disk averages tend to $-\infty$. Equality of the disk averages therefore gives $v_1(a)=v_2(a)$, including where both equal $-\infty$. [F3, F9, F13]

1.4 Compactify the potentials to use (6). Set $a:=\nu(\mathbb C)/M\le1$, and on $\mathbb P^1$ put $\phi=u-\rho_{FS}$ and $\psi=v-\rho_{FS}$. In the coordinate $t=1/z$ near infinity, $$ \phi(1/t)=\frac1M\int\log|1-tw|\,d\mu(w)-\frac12\log(1+|t|^2), \qquad \psi(1/t)=(1-a)\log|t|+\frac1M\int\log|1-tw|\,d\nu(w)-\frac cM-\frac12\log(1+|t|^2). $$ The integrals are smooth and harmonic for sufficiently small $|t|$. In the infinity chart $\rho_{FS}(z)= -\log|t|+\frac12\log(1+|t|^2)$, so adding the local Fubini--Study potential to $\phi$ cancels the smooth curvature term and leaves the first harmonic integral; $T_\phi$ has no mass near infinity. For $\psi$ the local potential has the form $(1-a)\log|t|$ plus a harmonic function, so it is subharmonic there and contributes the atom $(1-a)\delta_\infty$. The ordinary currents are $$ T_\phi=\omega+dd^c\phi=\mu/M, \qquad T_\psi=\omega+dd^c\psi=\nu/M+(1-a)\delta_\infty. $$ The atom at infinity is the residual mass; no measure domination $\nu\le\mu$ is used. [F4, F6]

Let $P=\{z:p_\mu(z)=-\infty\}$. This is Borel by upper semicontinuity. For $R>\operatorname{diam}(\operatorname{supp}\mu)$ with $R>1$, put $\widetilde U(z)=\int k_R(z,w)\,d\mu(w)$. Then $\widetilde U=U^\mu+M\log R$ and, by finite energy and Tonelli, $$ \int\widetilde U\,d\mu=I(\mu)+M^2\log R<\infty. $$ Since $\widetilde U=+\infty$ on $P$, it follows that $\mu(P)=0$, so $T_\phi(P)=0$.

For $E_j=\{\phi>-j\}$ and $\phi_j=\max(\phi,-j)$, write $T_j=\omega+dd^c\phi_j$. On $\mathbb C$, $$ \phi_j+\rho_{FS}=\max(u,\rho_{FS}-j). $$ The finite-energy estimate above gives $u\in W^{1,2}_{loc}$; the one-obstacle strict-contact proof therefore gives $1_{E_j}T_j=1_{E_j}T_\phi$ on $\mathbb C$. For all sufficiently large $j$, $E_j$ contains a neighborhood of infinity and $\phi_j=\phi$ there, so this equality holds on all of $\mathbb P^1$. The truncation measure $\lim_j1_{E_j}T_j$ consequently equals $T_\phi|_{\mathbb P^1\setminus P}$ and has mass one. Thus $\phi\in\mathcal E$. The constant-shift property proved above gives $\phi+\varepsilon\in\mathcal E$ for every $\varepsilon>0$. [F1, F3, F4, F5, F6, F8, F9, F10, F13]

2.1 For $\varepsilon>0$ put $A_\varepsilon:=\{u+\varepsilon>v\}$ and $w_\varepsilon:=\max\{u+\varepsilon,v\}$. The set is Borel because $$ A_\varepsilon=\bigcup_{q\in\mathbb Q}\bigl(\{u>q\}\cap\{v<q+\varepsilon\}\bigr), $$ and upper-semicontinuous functions are Borel. By [F3], $w_\varepsilon$ is subharmonic and equals $u+\varepsilon$ on $A_\varepsilon$. By step 1.2, $u$ is finite $\mu$-a.e. Outside the union of that null set and the null set in the hypothesis, if $u+\varepsilon\le v$ then $u<v$, contradicting $u\ge v$. Hence $\mu(A_\varepsilon^c)=0$, so $A_\varepsilon$ is nonempty. [step 1.2, F3]

Apply (6) with $\theta=\phi+\varepsilon$ and $\xi=\psi$. On $\mathbb C$, the strict set is $A_\varepsilon$ and $\max(\phi+\varepsilon,\psi)+\rho_{FS}=w_\varepsilon$. Restricting (6) to $\mathbb C$ yields the exact Borel measure identity $$ 1_{A_\varepsilon}(\mu/M)=1_{A_\varepsilon}\lambda_\varepsilon, \qquad \lambda_\varepsilon:=\mu_{w_\varepsilon}. $$ [F15, F16, F17, F18, F19]

2.2 Mass at infinity: let $\lambda_\varepsilon=\mu_{w_\varepsilon}$, which is a positive Radon measure by [F4]. Choose a smooth $\chi:\mathbb R\to[0,1]$ equal to $1$ on a neighborhood of $[0,1]$ and supported in $(-1,2)$; such a cutoff is constant near zero. Put $\varphi_R(z)=\chi(|z|/R)$. It is smooth at the origin, equals $1$ on $B(0,R)$ and is supported in $B(0,2R)$, so $$ \lambda_\varepsilon(B(0,R))\le\int\varphi_R\,d\lambda_\varepsilon \le\lambda_\varepsilon(B(0,2R)). $$ The derivatives of $\varphi_R$ are supported in a compact annulus where $w_\varepsilon$ is locally integrable, so $w_\varepsilon\Delta\varphi_R$ is absolutely integrable. Apply [F13] to its positive and negative parts. By the Riesz definition this gives $$ \int\varphi_R\,d\lambda_\varepsilon =\frac1{2\pi}\int w_\varepsilon\Delta\varphi_R\,dA =\int_0^\infty m_\varepsilon(Rs)f(s)\,ds, \quad f(s)=s\chi''(s)+\chi'(s), $$ where $m_\varepsilon(t)=(2\pi)^{-1}\int_0^{2\pi}w_\varepsilon(te^{i\theta})\,d\theta$. By the far-field estimates in step 1.2, uniformly for all sufficiently large $t$, $$ m_\varepsilon(t)=\log t+C_\varepsilon+\eta(t),\qquad \eta(t)\to0, $$ where $C_\varepsilon=\varepsilon$ if $a<1$ after the eventual dominance crossover, and $C_\varepsilon=\max(\varepsilon,-c/M)$ if $a=1$; the far-field estimates give $|\eta(t)|\le C/t$ on this tail. The function $f=(s\chi')'$ is supported away from zero and satisfies $$ \int_0^\infty f(s)\,ds=0, \qquad \int_0^\infty f(s)\log s\,ds=1, $$ by integration by parts and $\chi(0)=1$, $\chi(\infty)=0$. Consequently $$ \int\varphi_R\,d\lambda_\varepsilon =1+\int_0^\infty\eta(Rs)f(s)\,ds\longrightarrow1. $$ There is no extra factor $1/(2\pi)$ in this last error term: the angular factor $2\pi$ cancels the Riesz normalization. The cutoff sandwich and continuity from below now give $\lambda_\varepsilon(\mathbb C)=1$. [F4, F8, F9, F13]

3.1 By the inline compactification and truncation argument in step 1.4, $\lambda_\varepsilon(B\cap A_\varepsilon)=(\mu/M)(B\cap A_\varepsilon)$ for every Borel $B\subseteq\mathbb C$. Since $\mu(A_\varepsilon^{\mathrm c})=0$ by step 2.1, for every such $B$ positivity of $\lambda_\varepsilon$ gives $$ \lambda_\varepsilon(B)\ge\lambda_\varepsilon(B\cap A_\varepsilon) =(\mu/M)(B\cap A_\varepsilon)=(\mu/M)(B). $$ Hence $\lambda_\varepsilon\ge\mu/M$ as measures. [step 1.4, step 2.1, F4]

4.1 Combining steps 3.1 and 2.2, $\lambda_\varepsilon\ge\mu/M$ and $\lambda_\varepsilon(\mathbb C)=1=(\mu/M)(\mathbb C)$; hence $\lambda_\varepsilon=\mu/M$: for every Borel $B$, $\lambda_\varepsilon(B)=\lambda_\varepsilon(\mathbb C)-\lambda_\varepsilon(B^{\mathrm c})\le1-(\mu/M)(B^{\mathrm c})=(\mu/M)(B)\le\lambda_\varepsilon(B)$, where the outer inequality is step 3.1. [step 3.1, step 2.2]

5.1 By [F9], both $u$ and $v$ are finite outside an area-null set. Define $h=\max(0,v-u-\varepsilon)$ on this common area-conull set and $h=0$ on its complement. Then $h\ge0$, $h\in L^1_{\rm loc}$ because $h=w_\varepsilon-u-\varepsilon$ a.e. and $|h|\le|w_\varepsilon|+|u|+\varepsilon$. Equality of Riesz measures from step 4.1 gives $\Delta T_h=2\pi\lambda_\varepsilon-2\pi\mu/M=0$. Weyl's lemma [F11], with its Countable Choice premise supplied by [F5], gives a harmonic $H$ with $h=H$ a.e.; continuity and $h\ge0$ a.e. imply $H\ge0$ everywhere. [step 4.1, F4, F5, F9, F11]

6.1 The functions $w_\varepsilon$ and $u+\varepsilon+H$ are subharmonic and agree area-a.e. by step 5.1; their subharmonicity follows from [F3], [F6] and [F14]. The disk-average uniqueness in step 1.3 gives $w_\varepsilon=u+\varepsilon+H$ everywhere. Choose $z_0\in A_\varepsilon$, which is nonempty by step 2.1. Here $u(z_0)$ is finite, because $-\infty$ cannot be strictly greater than a subharmonic value. Since $w_\varepsilon(z_0)=u(z_0)+\varepsilon$, the equality gives $H(z_0)=0$. By [F12], the nonnegative harmonic function $H$ vanishes identically. Hence $w_\varepsilon=u+\varepsilon$ everywhere and $v\le u+\varepsilon$ on $\mathbb C$. [step 2.1, step 5.1, step 1.3, F3, F6, F12, F14]

7.1 Step 1.1 proves assertion (a). For (b), step 6.1 gives $v\le u+\varepsilon$ everywhere for every $\varepsilon>0$; letting $\varepsilon\downarrow0$ gives $v\le u$ everywhere, that is $p_\nu-c\le p_\mu$, equivalently $U^\mu\le U^\nu+c$ everywhere, which is assertion (b). [step 1.1, step 6.1] ∎

## Remarks

**Why the mass condition and the finite energy are needed.** The hypothesis $\nu(\mathbb C)\le\mu(\mathbb C)$ is what makes the growth of $w_\varepsilon=\max\{u+\varepsilon,v\}$ equal to $\log|z|+O(1)$ with the normalised leading coefficient $1$, and it supplies the residual atom $(1-a)\delta_\infty$ in the compactification. It is a total-mass condition; no measure inequality $\nu\le\mu$ is used. The finite-energy assumption on $\mu$ is used for its $\mu$-a.e. potential finiteness, the local $W^{1,2}$ estimate, and the full-mass truncation identity. No finiteness of $I(\nu)$ is required, so $\nu$ may have atoms and infinite logarithmic energy.

**Where the domination is spent later.** The principle is the standard $\mu$-a.e.\ to everywhere upgrade of potential theory. No item in this batch cites it: the capacity--transfinite-diameter equality and the Chebyshev comparison of the companion examples page are authored without it, so the statement stands as the general domination supplier of the design and any later consumer must cite it explicitly.

**The contact-set argument is proved inline.** The bounded plane identity is proved from local $W^{1,2}$ estimates, scalar Sobolev composition, and tests supported on the strict-contact set. Finite energy places $\phi$ in the full-mass truncation class directly; the compactified unbounded identity is then derived from bounded truncations and total-variation convergence. The Guedj-Zeriahi contact statement is cited as a cross-check, not a proof premise. The argument preserves Dependent Choice: all Sobolev and Hilbert interfaces used in it require at most Countable Choice.

**Choice.** Dependent Choice is assumed in the statement; it is spent through the Riesz measure supplier [F4], and it supplies the Countable Choice assumed by Weyl's lemma in step 5.1 ([F5]) and by the polar-coordinate formula [F13] in the radial cutoff computation in step 2.2. It also supplies the Countable Choice interfaces in [F15]--[F18] used by the inline Sobolev and mollification proofs; no Full Axiom of Choice or full-Choice Sobolev chain rule is imported. The descent clause [F2] needs no choice beyond the statement's available finite-measure framework.
