---
id: lem-tdmath-periodized-empirical-field-stationary-density
kind: lemma
title: Stationarity and intensity of a periodized empirical field
status: draft
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 4
deps:
  - def-tdmath-periodized-empirical-field
  - def-tdmath-local-tame-topology
  - thm-lebesgue-measure-of-a-box-of-every-kind
  - thm-lebesgue-outer-measure-and-measurability-are-translation-invariant
  - thm-tonelli-theorem-for-sigma-finite-product-spaces
dependency_roles:
  def-tdmath-periodized-empirical-field: mathematical-premise
  def-tdmath-local-tame-topology: mathematical-premise
  thm-lebesgue-measure-of-a-box-of-every-kind: mathematical-premise
  thm-lebesgue-outer-measure-and-measurability-are-translation-invariant: mathematical-premise
  thm-tonelli-theorem-for-sigma-finite-product-spaces: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "H.-O. Georgii, Large deviations and the equivalence of ensembles for Gibbsian particle systems with superstable interaction"
      url: "https://www.mathematik.uni-muenchen.de/~georgii/papers/LDPsuperstable.pdf"
      locator: "Section 1, equation (1.1), printed p.172 / PDF p.2: the periodic empirical field is translation invariant."
---

## Statement

For $L>0$ and a finite configuration $\omega\subset\Lambda_L$ with $N(\omega)=N$, the measure $R_{L,\omega}$ of [[def-tdmath-periodized-empirical-field]] is a stationary probability law of finite intensity and
$$\rho(R_{L,\omega})=\frac{N}{L^d}.$$
For any probability law $C_L$ on finite configurations in $\Lambda_L$ with $E_{C_L}N<\infty$, its empirical-field barycenter $\bar C_L$ is also a stationary probability law of finite intensity and $\rho(\bar C_L)=E_{C_L}N/L^d$.

## Facts & Assumptions

**Given:** The half-open cube $\Lambda_L$, a finite simple configuration $\omega\subset\Lambda_L$, and, when the barycenter is used, a law $C_L$ with $E_{C_L}N<\infty$; use [[def-tdmath-periodized-empirical-field]].

[F1] [[def-tdmath-periodized-empirical-field]]: $R_{L,\omega}$ averages the translations of the $L\mathbb Z^d$-periodic continuation over one fundamental cube.

[F2] [[def-tdmath-local-tame-topology]]: stationarity means invariance under every translation and finite intensity means finite expected count in a unit cell. The notation in [[def-tdmath-periodized-empirical-field]] is $\rho(P)=E_PN_{[0,1)^d}$.

[F3] [[thm-lebesgue-measure-of-a-box-of-every-kind]], [[thm-lebesgue-outer-measure-and-measurability-are-translation-invariant]], and [[thm-tonelli-theorem-for-sigma-finite-product-spaces]]: $\Lambda_L$ has volume $L^d$, translations preserve Lebesgue measure, and nonnegative sums may be integrated termwise.

## Proof

**Given:** The hypotheses and definitions in Facts & Assumptions.

1.1 By [F1], $R_{L,\omega}$ is the push-forward of normalized Lebesgue probability on $\Lambda_L$, so it is a probability measure. For a bounded measurable local $f$ and $y\in\mathbb R^d$,
$$R_{L,\omega}(f\circ T_y)=L^{-d}\int_{\Lambda_L}f(T_{x+y}\omega^{(L)})\,dx.$$
The integrand is $L\mathbb Z^d$-periodic in $x$. The translated cube $\Lambda_L+y$ is another fundamental region for this lattice; partitioning it and $\Lambda_L$ into their finitely many translated intersections and using translation invariance of Lebesgue measure gives equal integrals. Hence $R_{L,\omega}(f\circ T_y)=R_{L,\omega}(f)$ for every $y$, so $R_{L,\omega}$ is stationary. [F1, F3, algebra]

2.1 For bounded Borel $A$, Tonelli's theorem and the periodic continuation give
$$R_{L,\omega}(N_A)=L^{-d}\int_{\Lambda_L}\sum_{q\in\omega}\sum_{k\in\mathbb Z^d}\mathbf1_A(q+Lk+x)\,dx.$$
For each fixed $q\in\omega$, the sets $\Lambda_L+Lk$ partition $\mathbb R^d$ up to null boundaries. Translating variables in each integral therefore makes the inner sum of integrals equal to $|A|$. Summing over the $N$ representatives gives $R_{L,\omega}(N_A)=N|A|/L^d$. Taking $A=[0,1)^d$ proves $\rho(R_{L,\omega})=N/L^d$ and finite intensity. [F1, F2, F3, step 1.1, algebra]

3.1 The barycenter $\bar C_L$ is a probability mixture of the stationary laws $R_{L,\omega}$, so it is stationary. By step 2.1 and Tonelli,
$$\rho(\bar C_L)=E_{C_L}[R_{L,\omega}(N_{[0,1)^d})]=E_{C_L}N/L^d<\infty.$$
Thus it belongs to the finite-intensity stationary domain of $\tau_L$. [F1, F2, step 2.1, algebra] ∎

