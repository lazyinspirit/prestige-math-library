---
id: thm-logarithmic-energy-well-defined-and-lower-semicontinuous
kind: theorem
title: "Lower semicontinuity of logarithmic potential and energy"
status: published
origin: pipeline
pipeline_run: frontier-37-owner-30
deps:
  - def-logarithmic-potential-and-energy
  - def-weak-convergence-of-borel-probability-measures
  - def-probability-measure
  - def-product-measure-on-sigma-finite-spaces
  - cor-integral-over-a-null-set-vanishes
  - cor-additivity-of-the-nonnegative-lebesgue-integral
  - thm-algebra-of-continuous-functions
  - thm-logarithm-derivative-and-integral
  - thm-monotone-convergence-for-the-integral
  - thm-real-stone-weierstrass-for-compact-metric-spaces
  - thm-finite-products-of-compact-spaces
  - thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "E. B. Saff, Logarithmic Potential Theory with Applications to Approximation Theory, §§1–3"
      url: "https://arxiv.org/pdf/1010.3760"
      locator: "§1, energy and weak convergence of measures, printed pp. 168–170"
    - title: "B. Khoruzhenko, LTCC Potential Theory notes, §§3 and 5"
      url: "https://maths.qmul.ac.uk/~boris/potential_th_notes.pdf"
      locator: "§3, lower semicontinuity of potentials and energy"
verification:
  audited: 2026-10-02
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-02
---

## Statement

Let $K\subseteq\mathbb C$ be nonempty compact and let $\mu_n,\mu$ be Borel
probability measures on $K$ with $\mu_n\Rightarrow\mu$. With the Borel kernel
$k(z,w)=\log\frac1{|z-w|}$ assigned $+\infty$ on the diagonal, the extended
integrals $U^\mu(z)=\int_{\mathbb C}k(z,w)\,d\mu(w)$ and
$I(\mu)=\iint_{\mathbb C\times\mathbb C}k\,d\mu\otimes d\mu$ of
[[def-logarithmic-potential-and-energy]] are unambiguous: for each fixed $z$, a Borel function of $w$ that equals
$k(z,w)$ for $\mu$-almost every $w$ gives the same potential at $z$; a
Borel kernel equal to $k$ for $(\mu\otimes\mu)$-almost every $(z,w)$
gives the same energy. Moreover

$$U^\mu(z)\le\liminf_{n\to\infty}U^{\mu_n}(z)\quad(z\in\mathbb C),\qquad I(\mu)\le\liminf_{n\to\infty}I(\mu_n).$$

Finally, if $\mu(\{z\})>0$ for some $z$ then $U^\mu(z)=+\infty$, so for atomic
measures the diagonal value is not a free convention. No choice principle is
required.

## Facts & Assumptions

**Given:** a nonempty compact $K\subseteq\mathbb C$, Borel probability measures $\mu_n,\mu$ on $K$ with $\mu_n\Rightarrow\mu$, and the kernel, potential and energy conventions of [[def-logarithmic-potential-and-energy]].

[F1] On a compactly supported finite positive measure $\nu$, the potential $U^\nu(z)=\int k(z,w)\,d\nu(w)$ is the extended integral of the Borel kernel with diagonal value $+\infty$, and for $R>\operatorname{diam}\operatorname{supp}\nu$ the energy satisfies $I(\nu)=\iint k_R\,d\nu\otimes d\nu-\nu(\mathbb C)^2\log R$ with $k_R=k+\log R$ ([[def-logarithmic-potential-and-energy]]).

[F2] For Borel probability measures on a metric space, $\mu_n\Rightarrow\mu$ means $\int f\,d\mu_n\to\int f\,d\mu$ for every bounded continuous real $f$ ([[def-weak-convergence-of-borel-probability-measures]]).

[F3] A Borel probability measure has total mass one ([[def-probability-measure]]).

[F4] The integral over a measurable null set vanishes, and the nonnegative integral is additive ([[cor-integral-over-a-null-set-vanishes]], [[cor-additivity-of-the-nonnegative-lebesgue-integral]]).

[F5] Sums, scalar multiples, maxima and minima of continuous real functions are continuous, and $\log$ is differentiable with derivative $1/x$ on $(0,\infty)$ ([[thm-algebra-of-continuous-functions]], [[thm-logarithm-derivative-and-integral]]).

[F6] Monotone convergence: for $0\le f_M\uparrow f$ pointwise measurable, $\int f_M\,d\mu\uparrow\int f\,d\mu$ ([[thm-monotone-convergence-for-the-integral]]).

[F7] A unital point-separating subalgebra of $C(K,\mathbb R)$ on a nonempty compact metric space is uniformly dense ([[thm-real-stone-weierstrass-for-compact-metric-spaces]]).

[F8] A finite product of nonempty compact spaces is compact ([[thm-finite-products-of-compact-spaces]]).

[F9] For a product-integrable function the iterated and product integrals agree ([[thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]]).

[F10] The product measure $\mu\otimes\mu$ is a measure on the product $\sigma$-algebra ([[def-product-measure-on-sigma-finite-spaces]]).

## Proof

**Proof technique:** direct.

1.1 Let $K$, $\mu_n$, $\mu$ and $\Rightarrow$ be as given, fix $R>\operatorname{diam}K$, and set $k(z,w):=\log\frac1{|z-w|}$, $k_R:=k+\log R$, $U^\nu(z):=\int k(z,w)\,d\nu(w)$ and $I(\nu):=\iint k\,d\nu\otimes d\nu$ in the conventions of [F1]; then $I(\nu)=\iint k_R\,d\nu\otimes d\nu-\log R$ for every Borel probability $\nu$ on $K$. [F1, F3, given]

1.2 The finite sums $\sum_{i}f_i(z)h_i(w)$ of continuous functions $f_i,h_i$ on $K$ form a unital subalgebra of $C(K\times K,\mathbb R)$ separating points, so it is uniformly dense by [F7], since $K\times K$ is a nonempty compact metric space. [F7, F8, algebra]

2.1 The shifted kernel $k_R(z,w)=\log\frac{R}{|z-w|}$ is Borel, nonnegative on $K\times K$, and equal to $+\infty$ exactly on the diagonal. [step 1.1, F1]

2.2 If nonnegative measurable functions $f,g$ agree off a null set $E$, then $\int f=\int_{X\setminus E}f+\int_E f=\int_{X\setminus E}g+0=\int g$ by [F4]; hence, for each fixed $z$, Borel functions of $w$ agreeing with $k(z,w)$ $\mu$-almost everywhere produce the same value of $U^\mu(z)$, and Borel kernels agreeing with $k$ $(\mu\otimes\mu)$-almost everywhere produce the same energy. [F4, step 1.1, algebra]

2.3 Fix $z\in\mathbb C$ and choose $R_z>\sup_{w\in K}|z-w|$; for $M>0$ the truncation $\varphi_M(w):=\min\{M,\log\frac{R_z}{|z-w|}\}$ is continuous on $K$ and bounded by $M$, because it equals $M$ near $w=z$ and is a minimum of continuous functions elsewhere, and $U^\nu(z)\ge\int\varphi_M\,d\nu-\log R_z$ for every Borel probability $\nu$ on $K$. [step 1.1, F5, algebra]

2.4 For such a finite sum $h=\sum_if_ih_i$, [F9] and [F10] give $\iint h\,d\mu_n\otimes d\mu_n=\sum_i\left(\int f_i\,d\mu_n\right)\left(\int h_i\,d\mu_n\right)\to\sum_i\left(\int f_i\,d\mu\right)\left(\int h_i\,d\mu\right)=\iint h\,d\mu\otimes d\mu$. [step 1.2, F2, F9, F10, algebra]

3.1 Since $\varphi_M$ is bounded and continuous, the weak convergence $\mu_n\Rightarrow\mu$ gives $\int\varphi_M\,d\mu_n\to\int\varphi_M\,d\mu$, hence $\liminf_nU^{\mu_n}(z)\ge\int\varphi_M\,d\mu-\log R_z$ for every $M$. [step 2.3, F2, algebra]

3.2 For $M>0$ put $g_M(z,w):=\min\{M,k_R(z,w)\}$; it is continuous on $K\times K$, bounded by $M$, and $I(\nu)+\log R=\iint k_R\,d\nu\otimes d\nu\ge\iint g_M\,d\nu\otimes d\nu$ for every Borel probability $\nu$ on $K$. [step 2.1, F5, algebra]

3.3 Given $\varepsilon>0$, step 1.2 provides $h$ with $|g_M-h|\le\varepsilon$ on $K\times K$ and hence $\left|\iint g_M\,d\mu_n\otimes d\mu_n-\iint g_M\,d\mu\otimes d\mu\right|\le2\varepsilon+\left|\iint h\,d\mu_n\otimes d\mu_n-\iint h\,d\mu\otimes d\mu\right|$, so step 2.4 makes the left side tend to $0$: $\iint g_M\,d\mu_n\otimes d\mu_n\to\iint g_M\,d\mu\otimes d\mu$. [step 1.2, step 2.4, algebra]

4.1 As $M\to\infty$ one has $\varphi_M\uparrow\log\frac{R_z}{|z-w|}$ pointwise, so [F6] gives $\int\varphi_M\,d\mu\uparrow\int\log\frac{R_z}{|z-w|}\,d\mu(w)=\log R_z+U^\mu(z)$ in the extended sense; combining with step 3.1 yields $U^\mu(z)\le\liminf_nU^{\mu_n}(z)$ for every $z\in\mathbb C$. [step 3.1, step 1.1, F6, algebra]

4.2 Therefore $\liminf_n(I(\mu_n)+\log R)\ge\iint g_M\,d\mu\otimes d\mu$ for every $M$; since $g_M\uparrow k_R$ pointwise, [F6] gives $\iint g_M\,d\mu\otimes d\mu\uparrow\iint k_R\,d\mu\otimes d\mu=I(\mu)+\log R$, so $I(\mu)\le\liminf_nI(\mu_n)$. [step 3.2, step 3.3, step 1.1, F6, algebra]

5.1 If $\mu(\{z\})>0$, the diagonal value of the kernel gives $U^\mu(z)\ge k(z,z)\mu(\{z\})=+\infty$; for $\mu=\delta_z$, replacing $k(z,z)=+\infty$ by a finite value $c$ changes $U^\mu(z)$ from $+\infty$ to $c$, so the diagonal value cannot be assigned freely for the class of atomic measures. [step 1.1, F1, algebra] ∎
