---
id: thm-tgr-gravity-collapse-nonextensivity
kind: theorem
title: "Point collapse and unscaled gravity nonextensivity"
status: draft
origin: pipeline
domain: mathematics
library: mathematics
deps:
  - def-tgr-gravitating-phase-reference
  - def-tgr-softened-gravity-finite-phase
  - lem-tgr-finite-gaussian-moment-envelope
  - thm-tonelli-theorem-for-sigma-finite-product-spaces
dependency_roles:
  def-tgr-gravitating-phase-reference: mathematical-premise
  def-tgr-softened-gravity-finite-phase: mathematical-premise
  lem-tgr-finite-gaussian-moment-envelope: mathematical-premise
  thm-tonelli-theorem-for-sigma-finite-product-spaces: mathematical-premise
justified_by: []
aliases: []
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Joseph Katz, Thermodynamics and Self-Gravitating Systems, Foundations of Physics 33 (2003), author manuscript"
      url: "https://arxiv.org/pdf/astro-ph/0212295"
    - title: "Pierre-Henri Chavanis, Statistical mechanics of self-gravitating systems in general relativity: II. The classical Boltzmann gas"
      url: "https://arxiv.org/pdf/1908.10817"
    - title: "David Tong, Statistical Physics, complete author-hosted lecture notes"
      url: "https://davidtong.org/pdfs/teaching/statistical-physics/statphys.pdf"
proof_strategy: direct
verification:
  precheck: pass
dependency_level: 2
---

## Statement

Use the dimensionless phase reference of [[def-tgr-gravitating-phase-reference]] and the softened Hamiltonian of [[def-tgr-softened-gravity-finite-phase]].

1. For two equal positive masses in a bounded three-dimensional box with nonempty interior, the distinct point Hamiltonian
$$H_2^{\mathrm{pt}}(q,p)=\frac{|p_1|^2+|p_2|^2}{2m}-\frac{Gm^2}{|q_1-q_2|}$$
makes the canonical partition integral infinite for every $\beta>0$.

2. For fixed $a>0$, let $B_N$ be a sequence of bounded boxes containing one fixed cube $C$ of volume $v>0$ and diameter $D<\infty$, with constants $b_1,b_2>0$ such that $b_1N\le |B_N|\le b_2N$. The softened canonical partition functions satisfy
$$\frac{\log Z_N(\beta)}{N}\ge \beta c(N-1)-\log N+K_\beta, \qquad c=\frac{Gm^2}{2\sqrt{D^2+a^2}}>0,$$
where $K_\beta$ is independent of $N$. Hence $\log Z_N/N\to+\infty$ and the free energy per particle $-\beta^{-1}\log Z_N/N$ tends to $-\infty$.

3. For the unscaled point attraction $-Gm^2/r$ restricted to the hard-core position domain $D_N=\{q\in B_n^N:|q_i-q_j|>a\text{ for }i\ne j\}$ with fixed $a>0$, there is a fixed-density sequence of integers $n\ge2$, $N=n^3$, boxes $B_n=(0,nd)^3$ of side $O(n)$ for fixed $d>a$, and positive-volume admissible position sets on which the interaction energy is at most $-c_0N^{5/3}$ for some $c_0>0$. Its canonical partition functions therefore also satisfy $\log Z_N/N\to+\infty$.

These three model-family statements rule out automatic ordinary extensive stability from finite volume or short-distance regularization alone. They do not rule out differently scaled interactions or all possible gravitational thermodynamic limits.

## Facts & Assumptions

**Given:** The phase reference, the softened Hamiltonian, $G,m,a,\beta>0$, and the box or packing hypotheses in the Statement.

[F1] The phase reference is $d\nu_N=d^{3N}q\,d^{3N}p/(N!h_*^{3N})$. ([[def-tgr-gravitating-phase-reference]])

[F2] The softened model has kinetic energy $\sum_i|p_i|^2/(2m)$ and pair attraction $-Gm^2/\sqrt{|q_i-q_j|^2+a^2}$. ([[def-tgr-softened-gravity-finite-phase]])

[F3] For $d=3N$, the momentum Gaussian integral is $(2\pi m/\beta)^{3N/2}$ and its polynomial moments are finite. ([[lem-tgr-finite-gaussian-moment-envelope]])

[F4] Tonelli's theorem applies to the nonnegative Boltzmann integrand on product Lebesgue spaces. ([[thm-tonelli-theorem-for-sigma-finite-product-spaces]])

## Proof

1.1 Choose an interior point $q_0$ of the box and a length $\ell>0$ small enough that the cubes below lie in the box for all sufficiently large integers $n$. Let $Q_{1,n}=q_0+(0,\ell/n)^3$ and $Q_{2,n}=q_0+(2\ell/n,0,0)+(0,\ell/n)^3$. They are disjoint, have volumes $(\ell/n)^3$, and every pair satisfies $0<|q_2-q_1|\le\sqrt{11}\ell/n$. On their product the point-potential Boltzmann weight is at least $\exp(\beta Gm^2 n/(\sqrt{11}\ell))$, so its positional integral is at least $(\ell/n)^6\exp(\beta Gm^2 n/(\sqrt{11}\ell))$. This lower bound tends to infinity, proving divergence of the positional integral. The independent momentum Gaussian integral is positive and finite by [F3]; Tonelli [F4] therefore makes the full partition integral infinite. [given, F1, F3, F4, algebra]

1.2 In the softened model, when every $q_i\in C$, all pair distances are at most $D$ and hence $U_a(q)\le-Gm^2N(N-1)/(2\sqrt{D^2+a^2})=-cN(N-1)$. Restricting the nonnegative partition integral to $C^N\times\mathbb R^{3N}$ and integrating momenta gives
$$Z_N(\beta)\ge \frac{v^N}{N!h_*^{3N}}e^{\beta cN(N-1)}\left(\frac{2\pi m}{\beta}\right)^{3N/2}.$$
Use $N!\le N^N$, divide logarithms by $N$, and gather all $N$-independent terms into $K_\beta$ to obtain the claimed bound. Since $\beta cN-\log N\to+\infty$, the free-energy conclusion follows. [F1, F2, F3, given, algebra]

2.1 For each fixed $N=n^3$, the hard-core condition bounds each pair attraction below by $-Gm^2/a$; the finite box and Gaussian momentum integral therefore make its partition function finite. Fix $d>a+2\delta$ with $0<\delta<d$. In $B_n=(0,nd)^3$, place centers at $d(k_1+\frac12,k_2+\frac12,k_3+\frac12)$ for $k_i\in\{0,\ldots,n-1\}$ and choose the open cube of side $\delta$ centered at each center. These cubes lie in $B_n$ and have positive volume. Distinct grid centers are at least $d$ apart, and two points in their cubes differ from their centers by at most $\sqrt3\delta$; hence every particle separation exceeds $d-\sqrt3\delta>a$, since $2>\sqrt3$. The product cubes are admissible. Each pair distance is at most $\sqrt3(n-1)d+\sqrt3\delta\le c_rnd$ with $c_r=\sqrt3$. Since $|B_n|=n^3d^3=Nd^3$, this sequence has fixed number density $d^{-3}$. There are $N(N-1)/2$ pairs; for $N\ge2$,
$$U_N\le-\frac{Gm^2}{c_rnd}\frac{N(N-1)}2\le-c_0N^{5/3},\qquad c_0=\frac{Gm^2}{4c_rd}>0,$$
because $n=N^{1/3}$. Restricting the finite partition integral to these product cubes, integrating momenta, and using $N!\le N^N$ gives $\log Z_N/N\ge\beta c_0N^{2/3}-\log N+K_\beta\to+\infty$. [F1, F3, given, algebra] ∎
