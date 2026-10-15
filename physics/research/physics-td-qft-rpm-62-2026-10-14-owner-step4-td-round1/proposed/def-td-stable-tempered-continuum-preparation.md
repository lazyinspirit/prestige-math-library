---
id: "def-td-stable-tempered-continuum-preparation"
kind: "definition"
title: "Stable regularly tempered classical positional preparation"
status: "draft"
origin: "pipeline"
domain: "physics"
library: "physics"
physical_scope: "Nonrelativistic classical point-particle models whose thermodynamic claims concern positions and pair interactions; kinetic momentum variables are outside this definition."
deps: [def-td-si-quantities, def-tdmath-superstable-regular-interaction]
dependency_roles:
  def-td-si-quantities: formulation-prerequisite
  def-tdmath-superstable-regular-interaction: mathematical-premise
aliases: []
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "Konstantin K. Likharev, Essential Graduate Physics, Part SM: Statistical Mechanics (2024 author-hosted lecture notes)"
      url: "https://phys.libretexts.org/Bookshelves/Thermodynamics_and_Statistical_Mechanics/Essential_Graduate_Physics_-_Statistical_Mechanics_%28Likharev%29/03%3A_Ideal_and_Not-So-Ideal_Gases/3.05%3A_Gases_of_weakly_interacting_particles"
    - title: "David Tong, Statistical Physics (author-hosted Cambridge lecture notes)"
      url: "https://davidtong.org/teaching/statistical-physics/statmechhtml/S1"
    - title: "Hans-Otto Georgii, Large deviations and the equivalence of ensembles for Gibbsian particle systems with superstable interaction, Probability Theory and Related Fields 99 (1994), 171–195"
      url: "https://www.mathematik.uni-muenchen.de/~georgii/papers/LDPsuperstable.pdf"
dependency_level: 3
---

## Definition

Fix an integer spatial dimension $d\geq1$, a reference length $\ell_0>0$ measured in metres, and a bounded Lebesgue-measurable region $\Lambda\subset\mathbb R^d$ with dimensionless volume $V=|\Lambda|<\infty$. Its physical region is $\ell_0\Lambda$. The coordinate $x\in\Lambda$ is dimensionless and represents physical position $\ell_0x$. Use the Euclidean norm $|x|_2=(\sum_{j=1}^d x_j^2)^{1/2}$ and the maximum norm $|x|_\infty=\max_{1\leq j\leq d}|x_j|$. A finite positional configuration of $N$ classical point particles in $\Lambda$ is an unordered simple set $\omega=\{x_1,\ldots,x_N\}\subset\Lambda$; simple means that no point is repeated. Particle number $N$ is a dimensionless nonnegative integer. When $V>0$, the physical number density corresponding to the dimensionless density $N/V$ is $N/(\ell_0^dV)$, in $\mathrm{m}^{-d}$; no density $N/V$ is assigned when $V=0$.

A pair potential is an even measurable function $\varphi:\mathbb R^d\to\mathbb R\cup\{+\infty\}$, where $\varphi(x)$ is the interaction energy in joules at physical displacement $\ell_0x$ and evenness means $\varphi(x)=\varphi(-x)$. Set $E_0=1\,\mathrm J$ and $\widehat\varphi=\varphi/E_0$. Whenever $\widehat\varphi$ is Borel measurable, it is the dimensionless numerical potential used by [[def-tdmath-superstable-regular-interaction]]. For a labelled representative of $\omega$, define the positional pair energy
$$H_N(\omega)=\sum_{1\leq i<j\leq N}\varphi(x_i-x_j),\qquad H_0=H_1=0.$$
If any pair is forbidden by the potential, its energy and hence $H_N$ are $+\infty$. This model contains no kinetic energy, internal molecular coordinates, quantum exchange terms, or external field.

The interaction is stable if there is a constant $B\geq0$, measured in joules, such that $H_N(\omega)\geq-BN$ for every finite simple configuration. It has a regular integrable tail if there are $R>0$ and a nonnegative nonincreasing measurable function $\psi:[R,\infty)\to[0,\infty)$, measured in joules, such that $|\varphi(x)|\leq\psi(|x|_2)$ for $|x|_2\geq R$ and
$$\int_R^\infty r^{d-1}\psi(r)\,dr<\infty.$$
A stable potential with this tail condition is the stable regularly tempered class used for the free-cube results on this page. Superstability and a positive divergent core are stronger, separate hypotheses and are not implied by stability.

At temperature $T>0$ measured in kelvins, use the exact SI Boltzmann constant $k_{\mathrm B}=1.380649\times10^{-23}\,\mathrm{J\,K^{-1}}$ of [[def-td-si-quantities]] and write $\beta=(k_{\mathrm B}T)^{-1}$ in joules inverse. Thus $\beta H_N$ is dimensionless. When applying a purely mathematical partition or energy supplier to $\widehat\varphi=\varphi/E_0$, pass the dimensionless parameter $\widehat\beta:=E_0\beta=E_0/(k_{\mathrm B}T)$ and numerical energy $\widehat H_N=H_N/E_0$. Then $\widehat\beta\widehat H_N=\beta H_N$; the physical inverse-energy parameter is never passed unchanged as the numerical inverse temperature. The same conversion applies to the periodic image energy. The activity $z>0$ is dimensionless relative to the reference intensity $\ell_0^{-d}$. A free-wall finite-volume model contains only positions in $\Lambda$ and uses $H_N$ above.

For periodic boundary conditions, identify a cubic cell of side $L$ in these dimensionless coordinates with the torus $\mathbb R^d/(L\mathbb Z^d)$. For its half-open representative $\Lambda_L=[0,L)^d$ and a finite simple configuration $\omega\subset\Lambda_L$, define the periodic continuation $\omega^{\mathrm{per}}=\{x+Lk:x\in\omega,\ k\in\mathbb Z^d\}$ and
$$H_{L,\mathrm{per}}(\omega)=\frac12\sum_{x\in\omega}\sum_{\substack{y\in\omega^{\mathrm{per}}\\ y\ne x}}\varphi(y-x).$$
Here the inner sum omits only the identical point $y=x$; it includes images of the same particle in other cells. The factor $1/2$ removes double counting of ordered representatives of each periodic pair. For any fixed $L>0$ and finite $\omega$, the $|k|_\infty=m$ image shell has $O_d(m^{d-1})$ terms and, outside finitely many $m$, $|y-x+Lk|_2\geq (L/2)m$. Monotonicity and the finite weighted tail integral imply $\sum_m m^{d-1}\psi(Lm/2)<\infty$, so the far-image tail is absolutely convergent. The remaining near-image set is finite; a term $+\infty$ makes $H_{L,\mathrm{per}}=+\infty$, and otherwise the finite near terms plus the absolutely convergent tail define the sum. Translating a centered half-open cell to $[0,L)^d$ preserves every displacement and this energy. Free-wall and periodic preparations are distinct boundary conditions. All limits on this page concern positional configurations and do not by themselves include a momentum integral or a full phase-space energy shell.
