---
id: ex-bosonic-closed-string-genus-one-vacuum-integrand
kind: example
title: Critical bosonic torus vacuum integrand with covariant ghost factors
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
category: string-theory
library: physics
dependency_level: 12
domain: physics
physical_scope: "Formal covariant gauge-fixed torus trace in the critical flat bosonic model, with explicit b/c zero-mode and translation quotient normalization; the integral diverges at the bosonic tachyon cusp."
deps:
  - def-string-punctured-moduli-amplitude-form
  - def-string-bc-ghost-moduli-pairing
  - def-st-bosonic-bc-ghost-system
  - pthm-st-bosonic-bc-ghost-central-charge
  - thm-gaussian-integral
  - thm-liouville-bounded-entire-function
  - def-st-bosonic-matter-oscillator-modes
  - post-st-bosonic-polyakov-model
  - def-st-string-tension-alpha-prime
  - pthm-st-critical-dimension-flat-bosonic-string
  - pthm-st-closed-bosonic-lightcone-spectrum
  - thm-standard-fundamental-domain-for-the-modular-group
  - thm-jacobi-theta-triple-product
  - lem-jacobi-theta-transformation-laws
  - def-countable-choice
  - def-axiom-of-choice
dependency_roles:
  def-string-punctured-moduli-amplitude-form: formulation-prerequisite
  def-string-bc-ghost-moduli-pairing: formulation-prerequisite
  def-st-bosonic-bc-ghost-system: formulation-prerequisite
  pthm-st-bosonic-bc-ghost-central-charge: physical-result
  thm-gaussian-integral: mathematical-premise
  thm-liouville-bounded-entire-function: mathematical-premise
  def-st-bosonic-matter-oscillator-modes: formulation-prerequisite
  post-st-bosonic-polyakov-model: physical-assumption
  def-st-string-tension-alpha-prime: formulation-prerequisite
  pthm-st-critical-dimension-flat-bosonic-string: physical-result
  pthm-st-closed-bosonic-lightcone-spectrum: physical-result
  thm-standard-fundamental-domain-for-the-modular-group: mathematical-premise
  thm-jacobi-theta-triple-product: mathematical-premise
  lem-jacobi-theta-transformation-laws: mathematical-premise
  def-countable-choice: mathematical-premise
  def-axiom-of-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "David Tong, String Theory, Cambridge Part III notes"
      url: "https://www.damtp.cam.ac.uk/user/tong/string/string.pdf"
      locator: "§§6.4.1–6.4.4, printed pp. 145–153; torus quotient, eta trace, and explicit warning that the light-cone vacuum derivation omits zero-mode details."
    - title: "Timo Weigand, Introduction to String Theory, Winter term 2011/12"
      url: "https://www.thphys.uni-heidelberg.de/courses/weigand/Strings11-12.pdf"
      locator: "Eqs. (5.91)–(5.115), printed pp. 110–116, torus b insertions, conformal Killing translations, formal trace, and tachyon cusp; the source quotes the ghost factor and the oscillator/zero-mode split is supplied locally here."
    - title: "Sam Christian, Ben Mazel, Yuchen Wang, Xi Yin and Yutai Zhang, Bosonic String Amplitudes From Ribbon Graphs"
      url: "https://arxiv.org/pdf/2609.17660v1"
      locator: "§4 and §§5.1–5.6, PDF pp. 21–32, chartwise covariant b-ghost pairings and moduli measure conventions."
verification:
  precheck: pass
  judge:
    model: gpt-6-luna
    verdict: pass
    date: 2026-11-06
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-05
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
---

## Statement

In the adopted flat critical closed bosonic model with $D=26$, $\alpha'>0$, target-volume regulator $V_{26}$, and torus modulus $\tau=\tau_1+i\tau_2$ in a $PSL(2,\mathbb Z)$ fundamental domain, the formal covariant gauge-fixed one-loop vacuum integrand is, up to a $\tau$-independent normalization,
$$V_{26}(4\pi^2\alpha')^{-13}\,d^2\tau\,\tau_2^{-14}|\eta(\tau)|^{-48}.$$
Here $q=e^{2\pi i\tau}$ and $\eta(\tau)=q^{1/24}\prod_{n\ge1}(1-q^n)$. The antighost zero modes pair with the two real torus moduli, while the constant $c$ zero modes are removed by quotienting translations; the source convention gives the net gauge-fixing factor $d^2\tau/(4\tau_2)$. The cusp $\tau_2\to\infty$ diverges exponentially because the closed bosonic ground state is tachyonic. This is a formal integrand, not a finite vacuum energy or a construction of a global functional measure.

## Facts & Assumptions

**Given:** A flat critical closed bosonic Polyakov model, Wick-rotated target momentum integral, a target-volume regulator, the conventional torus quotient, and the following explicit gauge-fixing convention: $d^2\tau=d\tau_1d\tau_2$, moduli/ghost zero-mode factor $d^2\tau/(4\tau_2)$, with the translation CK volume divided out and the holomorphic/antiholomorphic $b$ insertions paired with the two real moduli. Normalize the formal ghost oscillator trace by its standard anticommuting $bc$ Fock supertrace with the zero modes removed; use the zero-mode-saturated ground $c_1|0\rangle$.

[F1] [[post-st-bosonic-polyakov-model]] and [[def-st-string-tension-alpha-prime]] fix the flat model and $\alpha'>0$.

[F2] [[def-st-bosonic-matter-oscillator-modes]] supplies 26 matter oscillator families before criticality reduction; [[pthm-st-critical-dimension-flat-bosonic-string]] conditionally gives $D=26$ and intercept one. Its current Step 1 record is escalated on the missing quantum Lorentz-closure input.

[F3] [[def-st-bosonic-bc-ghost-system]] supplies Grassmann-odd modes with $\{b_m,c_n\}=\delta_{m+n,0}$ and the local field types $b(z)dz^2$ and $c(z)\partial_z$, with independent antiholomorphic partners. The global torus zero-mode dimensions are proved locally in step 2.1.

[F4] [[def-string-bc-ghost-moduli-pairing]] defines the antighost pairing with a supplied Beltrami direction and requires a separate conformal-Killing zero-mode prescription. The torus pairing, translation quotient and their normalization are the data in Given and [A1]; the required zero-mode dimensions are established in step 2.1.

[F5] [[def-string-punctured-moduli-amplitude-form]] is only a local chartwise form, so the torus integrand below is a formal gauge-fixed Fock trace with the above normalization, not a theorem about a global functional measure.

[F6] [[thm-standard-fundamental-domain-for-the-modular-group]] gives a fundamental domain for the modular action. [[thm-jacobi-theta-triple-product]] and [[lem-jacobi-theta-transformation-laws]] imply $|\eta(-1/\tau)|=|\tau|^{1/2}|\eta(\tau)|$ and $|\eta(\tau+1)|=|\eta(\tau)|$; the transformation-law supplier carries countable choice.

[F7] [[pthm-st-bosonic-bc-ghost-central-charge]] gives $c_{gh}=-26$ for the exact ghost stress tensor and vacuum convention. [[pthm-st-closed-bosonic-lightcone-spectrum]] conditionally gives $\alpha'M^2/4=N-1$ with level matching. Its current readiness, like [F2], is escalated; the ground state $N=\widetilde N=0$ is interpreted as tachyonic only under that exact input.

[A1] Adopt the source gauge-fixing normalization: after pairing the torus $b$ zero modes with the two real moduli and quotienting the constant $c$ translations, the net zero-mode/moduli factor is $d^2\tau/(4\tau_2)$. Weigand derives the moduli and CK setup and quotes the final ghost factor; this coefficient is carried as a declared normalization, not derived from a global determinant.

[A2] [[def-axiom-of-choice]] and [[def-countable-choice]] are assumed where required by the imported modular-theta inputs [F6]; the modular quotient is the stated source convention.

[F8] [[thm-gaussian-integral]]: $\int_{-\infty}^{\infty}e^{-x^2}\,dx=\sqrt{\pi}$.

[F9] [[thm-liouville-bounded-entire-function]]: every bounded entire function is constant.

## Proof

1.1 For one Euclidean target coordinate, the torus zero-mode momentum trace is $\int_{\mathbb R}\frac{dk}{2\pi}e^{-\pi\alpha'\tau_2k^2}=(4\pi^2\alpha'\tau_2)^{-1/2}$ by the rescaled Gaussian integral [F8]. Taking 26 independent coordinates and restoring their regulated volume gives $V_{26}(4\pi^2\alpha'\tau_2)^{-13}$. The matter oscillator trace is $|q|^{-26/12}\prod_{n\ge1}|1-q^n|^{-52}=|\eta(\tau)|^{-52}$, because for each chirality each positive oscillator mode has a bosonic geometric trace $(1-q^n)^{-1}$ and the vacuum factor is $q^{-26/24}$. [given, F1, F2, F8, algebra]

1.2 Write $Q=e^{\pi i\tau}$, so $q=Q^2$, and define $\theta_3=\Theta(0|\tau)$, $\theta_4=\Theta(1/2|\tau)$ and $\theta_2=Q^{1/4}\Theta(\tau/2|\tau)=\sum_{n\in\mathbb Z}Q^{(n+1/2)^2}$, using $Q^a:=e^{\pi ia\tau}$. Substituting these arguments into the triple product in [F6] gives $\theta_2=2Q^{1/4}\prod_{n\ge1}(1-q^n)(1+q^n)^2$, $\theta_3=\prod_{n\ge1}(1-q^n)(1+Q^{2n-1})^2$ and $\theta_4=\prod_{n\ge1}(1-q^n)(1-Q^{2n-1})^2$. The identity $\prod_{n\ge1}(1+q^n)\prod_{n\ge1}(1-q^{2n-1})=1$ follows by splitting the nonzero absolutely convergent product $\prod_{n\ge1}(1-q^n)$ into its even and odd indices and using $1+q^n=(1-q^{2n})/(1-q^n)$. Multiplication therefore gives $\theta_2\theta_3\theta_4=2Q^{1/4}\prod_{n\ge1}(1-q^n)^3=2\eta(\tau)^3$. All products converge locally uniformly for $\operatorname{Im}\tau>0$, since the sums of absolute geometric tails converge; their factors are nonzero there. Let $s(\tau)=\exp(\tfrac12\operatorname{Log}(\tau/i))$ as in [F6]. Its full $z$-transformation, evaluated at $z=0,1/2,-1/(2\tau)$, respectively, gives $\theta_3(-1/\tau)=s\theta_3(\tau)$, $\theta_4(-1/\tau)=s\theta_2(\tau)$ and $\theta_2(-1/\tau)=s\theta_4(\tau)$; the exponential factors cancel in the last identity and $\Theta(-1/2|\tau)=\Theta(1/2|\tau)$ by its integer Fourier series. Taking absolute values in the product identity now yields $|\eta(-1/\tau)|^3=|s|^3|\eta(\tau)|^3$, hence $|\eta(-1/\tau)|=|\tau|^{1/2}|\eta(\tau)|$. Directly from its exponential prefactor and $q$ product, $\eta(\tau+1)=e^{\pi i/12}\eta(\tau)$, so its magnitude is $T$-invariant. No cube-root phase choice is needed. [F6, A2, algebra]

2.1 On $\Sigma_\tau=\mathbb C/(\mathbb Z+\tau\mathbb Z)$, a holomorphic vector field has lift $f(z)\partial_z$ and a holomorphic quadratic differential has lift $g(z)dz^2$, where $f,g$ are entire lattice-periodic functions. Each is bounded on a closed fundamental parallelogram and periodicity makes it bounded on $\mathbb C$; [F9] makes each constant. Since $\partial_z$ and $dz^2$ are nonzero global sections, each zero-mode space is exactly one-dimensional in a chirality. For the nonzero modes, the CAR in [F3] give two fermionic occupation modes at each positive integer $n$; the ghost-number supertrace in Given assigns sign $-1$ to each single occupation, so the factor is $(1-q^n)^2$. The zero-mode-saturated chiral ground $c_1|0\rangle$ has $L_0=-1$ because $[L_0,c_1]=-c_1$ and $L_0|0\rangle=0$. By [F7], the cylinder shift is $-c_{gh}/24=26/24$, so its ground factor is $q^{-1+26/24}=q^{1/12}$. The resulting nonzero-mode character is $\eta(\tau)^2$ per chirality and $|\eta(\tau)|^4$ in the closed trace. The $b$ zero modes are saturated by [F4], the constant $c$ modes are removed by the translation quotient, and the remaining factor is exactly the adopted $d^2\tau/(4\tau_2)$ in [A1]. [given, F3, F4, F7, F9, A1, step 1.1, algebra]

3.1 Multiplying the target zero-mode factor, matter oscillators, ghost oscillators, and the gauge-fixing factor in [A1] gives
$$\frac{d^2\tau}{4\tau_2}V_{26}(4\pi^2\alpha'\tau_2)^{-13}|\eta|^{-52}|\eta|^4\propto V_{26}(4\pi^2\alpha')^{-13}d^2\tau\,\tau_2^{-14}|\eta|^{-48}.$$
By step 1.2 the eta magnitude transforms with weight $1/2$, so $|\eta|^{-48}$ has modular weight $-24$; $\tau_2^{-14}$ contributes weight $+28$ and $d^2\tau$ contributes weight $-4$. These exponents sum to zero, proving invariance of the displayed density under generators $S,T$, hence on the stated fundamental domain. [F4, F5, F6, A1, A2, step 1.1, step 2.1, step 1.2, algebra]

4.1 As $\tau_2\to\infty$, $|q|=e^{-2\pi\tau_2}\to0$ and the locally uniformly convergent product $\prod_{n\ge1}(1-q^n)$ tends to $1$. Therefore $|\eta|^{-48}=|q|^{-2}(1+o(1))=e^{4\pi\tau_2}(1+o(1))$. Independently, [F7] labels the level-matched ground state $N=\widetilde N=0$ as having $M^2=-4/\alpha'$. The exponential cusp growth thus comes from the bosonic tachyon; multiplication by the polynomial $\tau_2^{-14}$ remains nonintegrable, so the vacuum integral diverges. No finite vacuum energy is claimed. [F6, F7, step 3.1, algebra] ∎

## Remarks

Tong explicitly calls the uncorrected light-cone torus derivation dishonest about zero modes. This calculation instead states the covariant $b/c$ insertions, the two torus moduli, the residual translation quotient and its normalization, then derives the matter/ghost oscillator factors in a formal Fock trace. The gauge-fixed factor is an adopted normalization, not a newly proved global path-integral measure. The criticality/spectrum inputs remain escalated.
