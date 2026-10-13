---
page: cm-math-kam
title: Cm Math Kam
status: published
items:
  - def-holomorphic-kam-domain-and-diophantine-labels
  - lem-cauchy-fourier-and-lattice-shell-bounds
  - lem-truncated-homological-equation-with-conservative-loss
  - lem-kam-affine-taylor-fourier-truncation
  - lem-kam-generator-flow-and-remainder-bound
  - lem-frequency-reparametrization-by-contraction
  - lem-kam-parameter-sequences-satisfy-all-step-hypotheses
  - lem-kam-composed-map-and-derivative-convergence
  - thm-parameter-kam-torus-invariance-and-lagrangianity
  - lem-kam-limit-is-an-embedding
  - lem-nondegenerate-frequency-reduction-and-alpha-square-smallness
  - lem-diophantine-resonance-slab-measure
  - thm-positive-measure-analytic-kam-family
  - lem-kam-conjugation-symmetry-of-the-construction
examples: []
requires:
  - analytic-majorants-and-the-cauchy-kovalevskaya-theorem
  - analyticity-liouville-and-morera
  - cm-math-canonical
  - goursat-and-cauchys-theorem-in-a-convex-domain
  - holomorphic-functions-of-several-variables
  - complex-differentiability-and-cauchy-riemann
  - construction-of-r-via-cauchy-sequences
  - fubini-and-change-of-variables
  - contour-integration
  - fejer-and-poisson-summability-of-fourier-series
  - bounded-linear-operators-and-quotient-spaces
  - connectedness
  - the-exponential-function
  - cm-math-dynamics
---

The analytic KAM layer of the non-relativistic classical mechanics collection,
all of it mathematics. The page proves, from explicit hypotheses and with every
constant accounted for, that a real analytic nondegenerate Hamiltonian
$H(p,\vartheta)=h(p)+F(p,\vartheta)$ on an action-angle domain retains a
positive-measure family of invariant Lagrangian tori carrying quasi-periodic
motion, with frequency vectors satisfying the Diophantine condition
$|k\cdot\nu|\ge\alpha|k|_1^{-\tau}$, once the perturbation is small in the
classical sense $\lVert F\rVert\le c\alpha^2$. Every item carries
`domain: mathematics` and depends only on mathematical suppliers; nothing here
asserts that any mechanical system is governed by such a Hamiltonian.

The framework is fixed by
[[def-holomorphic-kam-domain-and-diophantine-labels]]: the angular torus
$\mathbb T^n=(\mathbb R/2\pi\mathbb Z)^n$, the action-angle-parameter
neighbourhoods $D_{r,s,h}(\Omega)=B_r\times S_s\times O_h(\Omega)$ of complex
widths, holomorphy and sup-norms, the Fourier coefficients, mean and cutoff
$T_K$, and the $(\alpha,\tau)$-Diophantine label set $\Omega_{\alpha,\tau}$. All
measures, choices and conventions used later are declared there, including the
countable-choice convention.

The analytic estimates are [[lem-cauchy-fourier-and-lattice-shell-bounds]]:
Fourier decay $|g_k|\le M e^{-(s-\sigma)|k|_1}$, Cauchy bounds for first and
second derivatives on domains with margins, the lattice shell count
$\#\{|k|_1=m\}\le4^nm^{n-1}$ and the exponential small-divisor sums
$\sum_{k\ne0}|k|_1^\tau e^{-\sigma|k|_1}\le C_{n,\tau}\sigma^{-(\tau+n)}$.

[[lem-truncated-homological-equation-with-conservative-loss]] solves
$\nu\cdot\partial_\vartheta u=v$ for zero-mean data by Fourier division, with
the conservative loss $\tau+n$ on a complex parameter neighbourhood, and
[[lem-kam-affine-taylor-fourier-truncation]] performs the affine Taylor
splitting and the truncated Fourier approximation of the perturbation.
[[lem-kam-generator-flow-and-remainder-bound]] builds the generator $F$ with
$\{F,N\}+\widehat R=R$, estimates its time-one flow in the weighted norm
$W=\operatorname{diag}(r^{-1}I,\sigma^{-1}I)$, records its $2\pi$-equivariance
in the angle variable, and derives the quadratic remainder
$\varepsilon_+\le C[\varepsilon/(\alpha r\sigma^\mu)+\eta^2+\sigma^{-n}e^{-\sigma K/2}]\varepsilon$.
[[lem-frequency-reparametrization-by-contraction]] eliminates the frequency
shift by a contraction on a complex ball, and
[[lem-kam-parameter-sequences-satisfy-all-step-hypotheses]] verifies, with
explicit geometric sequences $(\sigma_j,K_j,h_j,s_j,E_j)$, that every step
hypothesis holds at every stage.

[[lem-kam-composed-map-and-derivative-convergence]] composes the one-step maps,
proves uniform convergence of the transformations on the real slice
$\mathcal L=\{0\}\times S_{s_0/4}\times\Omega_{\alpha,\tau}$ together with all
angular derivatives, and records the size bounds and the frequency-Lipschitz
bound. [[thm-parameter-kam-torus-invariance-and-lagrangianity]] passes the
normal form to the limit: the limiting family satisfies
$X_H\circ\Psi_\infty=D\Psi_\infty\cdot(0,\nu)$ with frequency $\nu$, the motion
on each torus is conjugate to $\vartheta\mapsto\vartheta+\nu t$, and the
Lagrangian pullback vanishes. [[lem-kam-limit-is-an-embedding]] shows that the
limiting parametrisation is injective modulo $2\pi$, descends to an injective
continuous map of $\mathbb T^n$, has rank-$n$ differential and a Lipschitz
inverse: each limiting torus is an embedded torus, not merely an immersion, and
[[lem-kam-conjugation-symmetry-of-the-construction]] shows that conjugation
symmetric (real analytic) data produce tori in the real phase space.

[[lem-nondegenerate-frequency-reduction-and-alpha-square-smallness]] eliminates
the parameter by the inverse frequency map $b=(Dh)^{-1}$: with the action
substitution $p=b(\nu)+I$ the perturbation becomes $P_h+F$ with
$|P_h|\le M_2|I|^2$, and the choice $r=\sqrt{\varepsilon/M_2}$ converts the
threshold into $\varepsilon\le c\alpha^2$.
[[lem-diophantine-resonance-slab-measure]] estimates the resonant set
$\bigcup_{k\ne0}\{|k\cdot\nu|<\alpha|k|_1^{-\tau}\}$ in a cube by $O(\alpha)$,
so the Diophantine set has positive measure for small $\alpha$.
[[thm-positive-measure-analytic-kam-family]] assembles the chain into the
classical positive-measure persistence theorem: for a nondegenerate real
analytic $h$ (through the inverse frequency map and a Hessian bound $M_2$) and
$\varepsilon\le c\alpha^2$, a positive-measure set of frequencies carries
invariant Lagrangian tori, and their union has positive $2n$-dimensional
Lebesgue measure in phase space. The theorem is a statement about Lebesgue
measure, not about probability or empirical frequency.
