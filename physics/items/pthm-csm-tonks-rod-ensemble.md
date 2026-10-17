---
id: pthm-csm-tonks-rod-ensemble
kind: physics-theorem
title: "Exact Tonks hard-rod pressure and convergent virial series"
status: published
origin: pipeline
domain: physics
library: physics
dependency_level: 4
deps:
  - def-countable-choice
  - thm-natural-logarithm-laws
  - thm-logarithm-derivative-and-integral
  - def-natural-logarithm
  - post-csm-examples-ensemble-preparations
  - lem-csm-examples-gamma-gaussian-tools
  - thm-change-of-variables-for-compact-jordan-sets
  - thm-lebesgue-product-measure-agrees-with-euclidean-lebesgue-on-borel-sets
  - thm-tonelli-theorem-for-sigma-finite-product-spaces
  - thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces
  - thm-lebesgue-measure-of-a-box-of-every-kind
  - thm-jordan-measurable-sets-are-lebesgue-measurable-with-equal-content
  - thm-jordan-boundary-criterion
  - thm-graphs-of-continuous-functions-have-content-zero
  - thm-heine-borel-rn
  - lem-riemann-lebesgue-comparison-for-distribution-test-integrands
  - thm-monotone-convergence-for-the-integral
dependency_roles:
  def-countable-choice: mathematical-premise
  thm-natural-logarithm-laws: mathematical-premise
  thm-logarithm-derivative-and-integral: mathematical-premise
  def-natural-logarithm: mathematical-premise
  post-csm-examples-ensemble-preparations: physical-assumption
  lem-csm-examples-gamma-gaussian-tools: mathematical-premise
  thm-change-of-variables-for-compact-jordan-sets: mathematical-premise
  thm-lebesgue-product-measure-agrees-with-euclidean-lebesgue-on-borel-sets: mathematical-premise
  thm-tonelli-theorem-for-sigma-finite-product-spaces: mathematical-premise
  thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces: mathematical-premise
  thm-lebesgue-measure-of-a-box-of-every-kind: mathematical-premise
  thm-jordan-measurable-sets-are-lebesgue-measurable-with-equal-content: mathematical-premise
  thm-jordan-boundary-criterion: mathematical-premise
  thm-graphs-of-continuous-functions-have-content-zero: mathematical-premise
  thm-heine-borel-rn: mathematical-premise
  lem-riemann-lebesgue-comparison-for-distribution-test-integrands: mathematical-premise
  thm-monotone-convergence-for-the-integral: mathematical-premise
physical_scope: "Finite-N one-dimensional classical hard rods of common length a>=0 with L>Na and quadratic momenta; the Euclidean Lebesgue product and Jordan-volume calculations assume ACω; exact thermodynamic and virial statements only for this Tonks model, not an all-fluid cluster expansion."
empirical_premises: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "University of Warwick, PX439/CO904 Statistical Mechanics of Complex Systems, lecture notes, §3.5 The Tonks gas"
      url: "https://warwick.ac.uk/fac/cross_fac/complexity/study/msc_and_phd/co904/lecture_notes_co904px439.pdf"
    - title: "David Tong, Statistical Physics, §2.2, classical ideal-gas normalization"
      url: "https://davidtong.org/pdfs/teaching/statistical-physics/statphys.pdf"
verification:
  precheck: pass
---

## Statement

Assume $\mathrm{AC}_\omega$ as defined in [[def-countable-choice]] for the Euclidean Lebesgue product and Jordan-volume identifications below. Use the natural logarithm $\log$ of [[def-natural-logarithm]]. Let $N\ge1$, let $a\ge0$ be a hard-rod length in metres, and let $L>Na$ be the one-dimensional box length in metres. Rod centers are $x_i\in[a/2,L-a/2]$ with $|x_i-x_j|\ge a$ for $i\ne j$. Let each rod have mass $m>0$ kg, momentum $p_i\in\mathbb R$ in kg m s$^{-1}$, and Hamiltonian $H=\sum_{i=1}^Np_i^2/(2m)$ on the allowed configuration set, with infinite energy outside it. Adopt the reference $dx\,dp/(N!h_0^N)$, where $h_0>0$ is a fixed action in J s, and canonical inverse temperature $\beta>0$ in J$^{-1}$. Put $\lambda=h_0\sqrt{\beta/(2\pi m)}$. Then
$$Z_N=\frac{(L-Na)^N}{N!\lambda^N},\quad U=\mathbb E H=\frac{N}{2\beta},\quad p_{1D}:=-\left(\frac{\partial F}{\partial L}\right)_{N,a,m,\beta,h_0}=\frac{N}{\beta(L-Na)},\quad F=-\beta^{-1}\log Z_N.$$
Here $p_{1D}$ is the one-dimensional force conjugate to length and has units N; it is not a three-dimensional pressure. With number density $\rho=N/L$, the exact equation is
$$\beta p_{1D}=\frac{\rho}{1-a\rho}=\sum_{j=1}^\infty a^{j-1}\rho^j,\qquad a\rho<1.$$
After the first $M\ge1$ terms, the exact nonnegative remainder (strictly positive when $a>0$) is $\rho(a\rho)^M/(1-a\rho)$, bounded by $\rho r^M/(1-r)$ whenever $a\rho\le r<1$. At fixed $\rho>0$ with $a\rho<1$, as $N,L\to\infty$ with $N/L=\rho$,
$$\lim\frac{\beta F}{N}=\log\!\left(\frac{\rho\lambda}{1-a\rho}\right)-1,$$
with finite-size excess between $0$ and $(1+\log N)/N$.

## Facts & Assumptions

**Given:** $\mathrm{AC}_\omega$, $N\ge1$, $a\ge0$, $L>Na$, $m>0$, $\beta>0$, and the hard-core position set and Hamiltonian in the Statement.

[F1] [[post-csm-examples-ensemble-preparations]]: for each specified model with finite positive partition function, the canonical density is $Z^{-1}e^{-\beta H}$ relative to its fixed reference, and $F=-\beta^{-1}\log Z$ is the adopted free-energy definition.

[F2] [[lem-csm-examples-gamma-gaussian-tools]]: for $m,\beta>0$, $\int_{\mathbb R}e^{-\beta p^2/(2m)}dp=\sqrt{2\pi m/\beta}$ and the normalized Gaussian has second moment $m/\beta$; the positive gamma integral is finite.

[F3] [[thm-change-of-variables-for-compact-jordan-sets]]: an injective $C^1$ map with nonzero Jacobian on an open neighborhood of a compact Jordan set obeys the compact Jordan change-of-variables formula.

[F4] [[def-natural-logarithm]] defines $\log$ on positive reals; [[thm-natural-logarithm-laws]] makes it continuous and increasing with the product and quotient laws, and [[thm-logarithm-derivative-and-integral]] gives $\log'(x)=1/x$ and $\log x=\int_1^xdt/t$. Finite iteration of the product law gives the integer-power identity.

[F5] Under $\mathrm{AC}_\omega$, Euclidean Lebesgue measure is the product of its coordinate factors, boxes have the product of their side lengths as measure, and bounded Jordan sets are Lebesgue measurable with measure equal to their Jordan content ([[thm-lebesgue-product-measure-agrees-with-euclidean-lebesgue-on-borel-sets]], [[thm-lebesgue-measure-of-a-box-of-every-kind]], [[thm-jordan-measurable-sets-are-lebesgue-measurable-with-equal-content]]).

[F6] Tonelli factors nonnegative product integrals and Fubini factors absolutely integrable signed product integrals on sigma-finite measure spaces ([[thm-tonelli-theorem-for-sigma-finite-product-spaces]], [[thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]]).

[F7] A bounded set is Jordan measurable when its boundary has content zero, and, for $m\ge1$, a continuous graph over a closed nondegenerate rectangle in $\mathbb R^m$ has content zero in $\mathbb R^{m+1}$ ([[thm-jordan-boundary-criterion]], [[thm-graphs-of-continuous-functions-have-content-zero]]).

[F8] The Gaussian moments in [F2] are improper Riemann integrals; on bounded intervals they agree with Lebesgue integrals under $\mathrm{AC}_\omega$, and monotone convergence passes nonnegative truncations to the full line ([[lem-riemann-lebesgue-comparison-for-distribution-test-integrands]], [[thm-monotone-convergence-for-the-integral]]).

[F9] A closed bounded subset of $\mathbb R^N$ is compact, in particular each closed box and the ordered simplex below ([[thm-heine-borel-rn]]).

[A1] The finite hard-core configuration rule and indistinguishable-classical-particle reference convention are the adopted Tonks model assumptions; no interaction beyond hard exclusion is included.

## Proof

1.1 The single-rod momentum Lebesgue integral is $\int_{\mathbb R}e^{-\beta p^2/(2m)}dp=\sqrt{2\pi m/\beta}$ by [F2] and [F8]. By [F5] and Tonelli [F6], the $N$ momentum factors integrate to the product of these integrals. Dividing by $h_0^N$ gives $\lambda^{-N}$. [given, F2, F5, F6, F8, algebra]

1.2 By [F2] and the bounded Riemann-to-Lebesgue agreement in [F8], each normalized scalar momentum Gaussian has second moment $m/\beta$. Thus the mean kinetic energy of each rod is $1/(2\beta)$ and the total mean is $U=N/(2\beta)$. [given, F2, F8, algebra]

1.3 Put $\ell=L-Na>0$. For $N=1$, the allowed position set is $[a/2,L-a/2]$, whose Lebesgue measure is $L-a=\ell$ directly by the box formula [F5]; no graph theorem is needed. For $N\ge2$, the allowed labelled position set is a finite union of closed bounded ordering polytopes in $[a/2,L-a/2]^N$, hence compact by [F9]. Its boundary is contained in finitely many box faces and contact hyperplanes $x_i-x_j=\pm a$, each contained in a graph of an affine function over a sufficiently large closed nondegenerate $(N-1)$-dimensional coordinate rectangle, so [F7] makes it Jordan measurable. Fix one label ordering $\pi$ and sort its centers as $x_{\pi(1)}\le\cdots\le x_{\pi(N)}$. On that sector set $y_i=x_{\pi(i)}-a/2-(i-1)a$ ; the hard-core inequalities become the closed bounded, hence compact, ordered simplex $S_\ell:=\{0\le y_1\le\cdots\le y_N\le\ell\}$ by [F9]. Its boundary is contained in the box faces and finitely many tie hyperplanes, each contained in such an affine graph over a nondegenerate $(N-1)$-dimensional rectangle; [F7] therefore makes $S_\ell$ Jordan measurable. The affine permutation map has absolute determinant $1$, so [F3] preserves Jordan volume. The $N!$ coordinate permutations of $S_\ell$ partition $[0,\ell]^N$ up to the tie hyperplanes, which have content zero by [F7]; their equal volumes sum to $\ell^N$, hence each simplex has volume $\ell^N/N!$. The $N!$ labelled order sectors cover the allowed set and overlap only on the stated content-zero contact hyperplanes. Therefore its Jordan content is $\ell^N$, and [F5] gives the full labelled position Lebesgue measure $\ell^N$. [given, A1, F3, F5, F7, F9, algebra]

2.1 The reference measure divides the position-momentum integral by $N!h_0^N$. Product Lebesgue measure and Tonelli [F5, F6] separate the position measure $\ell^N$ from step 1.3 and the momentum integral from step 1.1. Thus $Z_N=\ell^N/(N!\lambda^N)$. [F1, F5, F6, step 1.1, step 1.3, algebra]

3.1 By the product, quotient and integer-power laws in [F4], $F=-\beta^{-1}[N\log((L-Na)/\lambda)-\log N!]$, using the logarithm derivative in [F4] at fixed $N,a,\beta$ gives $p_{1D}=N/[\beta(L-Na)]$. Substituting $\rho=N/L$ yields $\beta p_{1D}=\rho/(1-a\rho)$. [F1, F4, step 2.1, algebra]

4.1 At $a=0$, the virial series has first term $\rho$ and all higher terms zero, so its remainder after any $M\ge1$ terms is zero. For $0\le a\rho<1$, the finite geometric identity $\sum_{j=1}^M(a\rho)^{j-1}=(1-(a\rho)^M)/(1-a\rho)$ gives the stated virial partial sum and exact remainder after multiplication by $\rho$. If $a\rho\le r<1$, then $(a\rho)^M/(1-a\rho)\le r^M/(1-r)$, proving the uniform bound. [step 3.1, algebra]

5.1 At fixed $\rho>0$, $L-Na=N(1/\rho-a)>0$, so the laws in [F4] give $$\frac{\beta F}{N}=-\log((L-Na)/\lambda)+\frac{\log N!}{N}.$$ For each integer $k=1,\ldots,N-1$, monotonicity of $\log$ bounds its integral on $[k,k+1]$ between $\log k$ and $\log(k+1)$. Summing gives $$\int_1^N\log x\,dx\le\log N!\le\int_1^N\log x\,dx+\log N.$$ For $N=1$ the sums and integral are empty and zero. Since [F4] gives $(x\log x-x)'=\log x$, the integral is $N\log N-N+1$. Hence $\log N!=N\log N-N+\epsilon_N$ with $1\le\epsilon_N\le1+\log N$. Substitution and [F4] cancel $\log N$, yielding $$\frac{\beta F}{N}=\log\!\left(\frac{\rho\lambda}{1-a\rho}\right)-1+\frac{\epsilon_N}{N}.$$ The excess is nonnegative and at most $(1+\log N)/N$. Finally, $\log N=\int_1^Ndx/x\le\int_1^Ndx/\sqrt{x}=2(\sqrt N-1)$, so that upper bound tends to zero and proves the stated thermodynamic limit. [F4, step 2.1, algebra] ∎

## Remarks

The infinite virial series is the geometric expansion of this exact one-dimensional hard-rod equation of state. It is not a formal or convergent cluster expansion for arbitrary fluids, attractions, dimensions, or interactions.

