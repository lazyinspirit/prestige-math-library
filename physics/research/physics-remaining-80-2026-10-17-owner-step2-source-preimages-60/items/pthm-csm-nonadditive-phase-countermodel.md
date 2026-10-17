---
id: pthm-csm-nonadditive-phase-countermodel
kind: physics-theorem
title: "Explicit nonadditive transition and ensemble inequivalence"
status: draft
origin: pipeline
domain: physics
library: physics
dependency_level: 4
deps:
  - post-csm-examples-ensemble-preparations
  - def-natural-logarithm
  - thm-natural-logarithm-laws
  - def-real-exponential-function-and-e
  - def-finite-probability-space-and-event
  - def-finite-real-random-variable-and-distribution
  - def-expectation-on-a-finite-probability-space
  - def-real-analytic-function
  - thm-power-series-sums-are-real-analytic
  - thm-real-analytic-functions-closed-under-algebra-quotients-and-composition
  - thm-real-analytic-inverse-and-implicit-function-theorems
  - thm-derivative-of-exponential
dependency_roles:
  post-csm-examples-ensemble-preparations: physical-assumption
  def-natural-logarithm: mathematical-premise
  thm-natural-logarithm-laws: mathematical-premise
  def-real-exponential-function-and-e: mathematical-premise
  def-finite-probability-space-and-event: mathematical-premise
  def-finite-real-random-variable-and-distribution: mathematical-premise
  def-expectation-on-a-finite-probability-space: mathematical-premise
  def-real-analytic-function: mathematical-premise
  thm-power-series-sums-are-real-analytic: mathematical-premise
  thm-real-analytic-functions-closed-under-algebra-quotients-and-composition: mathematical-premise
  thm-real-analytic-inverse-and-implicit-function-theorems: mathematical-premise
  thm-derivative-of-exponential: mathematical-premise
physical_scope: "A specified finite global three-sector model with N-dependent multiplicities; its positive-temperature canonical limit has a jump in mean energy per member and a middle-sector ensemble-inequivalence witness. No volume density, short-range model, or empirical system is asserted."
empirical_premises: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "David Tong, Statistical Physics, §§1.2–1.3 and §§5.1, 5.4.2"
      url: "https://davidtong.org/pdfs/teaching/statistical-physics/statphys.pdf"
    - title: "Daniel Arovas, Lecture Notes on Thermodynamics and Statistical Mechanics, §§2.12, 4.2, and 7.6 (2013)"
      url: "https://www.lip.pt/~jespada/teaching/data/TEM/LectureNotes-Arovas.pdf"
verification:
  precheck: pass
---

## Statement

Fix $N\ge1$ and $\epsilon>0$ joules. Let $\Omega_N=A_N\sqcup B_N\sqcup C_N$ be disjoint finite sectors with $|A_N|=1$, $|B_N|=1$, and $|C_N|=4^N$, and define the energy $H_N$ to be $0$, $N\epsilon$, and $2N\epsilon$ on those sectors, respectively. The model is global and size-dependent. Here *product-additive* means that one fixed finite one-site alphabet $\Gamma$ supplies $\Omega_N=\Gamma^N$ for every $N$, and one fixed one-site energy function $h:\Gamma\to\mathbb R$ (with values measured in joules) satisfies $H_N(\gamma_1,\ldots,\gamma_N)=\sum_{i=1}^Nh(\gamma_i)$. The present family is non-product-additive; no local, short-range, or fluid interpretation is assumed.

Use counting measure on each $\Omega_N$ as the reference measure, so every individual state has weight one. For a real inverse-energy parameter $\beta$ in joules$^{-1}$, define the finite exponential-tilt probability by
$$Z_N(\beta)=\sum_{\omega\in\Omega_N}e^{-\beta H_N(\omega)}=1+e^{-\beta N\epsilon}+4^Ne^{-2\beta N\epsilon},\qquad P_{\beta,N}(\omega)=\frac{e^{-\beta H_N(\omega)}}{Z_N(\beta)}.$$
For $\beta>0$ this is the adopted canonical preparation. For $\beta\le0$ it is only the same finite counting formula used algebraically; no negative-temperature reservoir is asserted. Also, for a shell half-width $\Delta$ in joules with $0\le\Delta<N\epsilon$, define $\mathcal S_{N,\Delta}=\{\omega:|H_N(\omega)-N\epsilon|\le\Delta\}$ and give it the uniform counting probability $Q_{N,\Delta}(\omega)=|\mathcal S_{N,\Delta}|^{-1}$ for $\omega\in\mathcal S_{N,\Delta}$.

For every real $\beta$, the finite exponential-tilt probability of $B_N$ obeys
$$P_{\beta,N}(B_N)\le\frac{1}{2^{N+1}+1},$$
whereas the shell probability of $B_N$ is $1$. Define the dimensionless normalized log partition function $\psi_N(\beta)=N^{-1}\log Z_N(\beta)$. Then
$$\psi_N(\beta)\longrightarrow\psi(\beta):=\max\{0,\log4-2\beta\epsilon\},\qquad 0\le\psi_N(\beta)-\psi(\beta)\le\frac{\log3}{N}.$$
For $\beta>0$, define the canonical mean energy per member by $u_N(\beta):=N^{-1}\mathbb E_{P_{\beta,N}}[H_N]$ and, when the limit exists, set $u(\beta):=\lim_{N\to\infty}u_N(\beta)$. The corner occurs at the positive inverse temperature $\beta_c=(\log2)/\epsilon$. The limit $u(\beta)$ exists for every $\beta>0$ and equals $2\epsilon$ for $0<\beta<\beta_c$, $\epsilon$ at $\beta=\beta_c$, and $0$ for $\beta>\beta_c$. In this item, a **first-order transition point** means a positive-$\beta$ point where $u$ has finite but unequal one-sided limits; thus the jump at $\beta_c$ is first order under this explicit convention. Every finite-$N$ function $\psi_N$ is real analytic. This is one explicit global finite-state countermodel, not a universal criterion for phase transitions or ensemble equivalence in short-range matter.

## Facts & Assumptions

**Given:** The stated finite sectors, their counting measure, the energy function, the dimensionful parameter $\epsilon>0$, and the finite exponential-tilt and shell laws in the Statement.

[A1] For the canonical branch, use the adopted preparation convention only when $\beta>0$; the $\beta\le0$ expression is a finite algebraic extension, not a physical negative-temperature claim.

[A2] The shell comparison is the separately specified uniform probability on $\mathcal S_{N,\Delta}$; it is not derived from dynamics or from a general equivalence principle.

[F1] [[post-csm-examples-ensemble-preparations]]: a canonical probability is the normalized $e^{-\beta H}$ weight relative to a specified reference measure when $\beta>0$ and the partition function is finite and positive.

[F2] [[def-natural-logarithm]]: for $x>0$, $\log x$ is the unique real $y$ with $\exp(y)=x$.

[F3] [[thm-natural-logarithm-laws]]: $\log$ is strictly increasing and $\log(xy)=\log x+\log y$ for positive $x,y$.

[F4] [[def-real-exponential-function-and-e]]: $\exp$ is the everywhere-convergent real power series.

[F5] [[def-real-analytic-function]]: a function is real analytic on an open real domain when it has a convergent power-series representation on a neighbourhood of every point.

[F6] [[thm-power-series-sums-are-real-analytic]]: the sum of a real power series is real analytic in the interior of its radius of convergence.

[F7] [[thm-real-analytic-functions-closed-under-algebra-quotients-and-composition]]: sums, products, nonvanishing quotients, and compatible compositions of real-analytic functions are real analytic.

[F8] [[thm-real-analytic-inverse-and-implicit-function-theorems]]: a real-analytic map with invertible derivative has a real-analytic local inverse.

[F9] [[thm-derivative-of-exponential]]: $\exp'(x)=\exp(x)>0$ for every real $x$.

[F10] [[def-finite-probability-space-and-event]]: a finite probability space is a finite outcome set with nonnegative weights summing to $1$, and event probabilities are sums of the weights.

[F11] [[def-finite-real-random-variable-and-distribution]]: a real random variable on a finite probability space is a function from the outcome set to $\mathbb R$.

[F12] [[def-expectation-on-a-finite-probability-space]]: $\mathbb E[Y]=\sum_{\omega\in\Omega}Y(\omega)w(\omega)$.

## Proof

**Given:** The exact model data and law in the Statement; $\beta$ is positive for the canonical physical interpretation and may be any real number in the separate finite algebraic claims.

1.1 If this family were product-additive under the definition in the Statement, its fixed alphabet would have $|\Gamma|=|\Omega_1|=6$, forcing $|\Omega_2|=|\Gamma|^2=36$. But $|\Omega_2|=1+1+4^2=18$. Thus no such product decomposition exists. The three sector weights in the finite exponential tilt are $1$, $x$, and $4^Nx^2$, where $x=e^{-\beta N\epsilon}>0$; they sum to the displayed positive finite $Z_N(\beta)$, so division by $Z_N$ gives a finite probability law as in [F10]. For $\beta>0$, [A1] and [F1] identify this normalized counting weight with the adopted canonical branch; for $\beta\le0$ it remains only the stated algebraic expression. [given, A1, F1, F10, algebra]

1.2 The energies of $A_N$ and $C_N$ differ from $N\epsilon$ by exactly $N\epsilon$. The condition $\Delta<N\epsilon$ excludes both sectors from $\mathcal S_{N,\Delta}$, while $B_N\subseteq\mathcal S_{N,\Delta}$. Thus the shell is exactly the one-state set $B_N$ and its uniform counting probability assigns $B_N$ probability one. [given, A2, algebra]

1.3 Put $M_N=\max\{1,4^Nx^2\}$. If $x\le1$, then $x\le M_N$; if $x>1$, then $4^Nx^2\ge x$ since $N\ge1$. Hence $M_N\le Z_N\le3M_N$. By [F2]–[F3], $$\frac1N\log M_N=\max\{0,\log4-2\beta\epsilon\}=\psi(\beta),$$ so taking logarithms in $M_N\le Z_N\le3M_N$ gives $0\le\psi_N-\psi\le(\log3)/N$, and consequently $\psi_N\to\psi$. [given, F2, F3, algebra]

1.4 By [F4], $\exp$ is a power series converging for every real argument, so [F6] makes $\exp$ real analytic on $\mathbb R$. The affine polynomial $\beta\mapsto-\beta N\epsilon$ is real analytic, hence [F7] makes $\beta\mapsto e^{-\beta N\epsilon}$ real analytic as well. [given, F4, F6, F7, algebra]

2.1 Since $(1-2^Nx)^2\ge0$, $1+4^Nx^2\ge2^{N+1}x$. Therefore $Z_N=1+x+4^Nx^2\ge(2^{N+1}+1)x$, and division by $Z_N>0$ gives $P_{\beta,N}(B_N)\le(2^{N+1}+1)^{-1}$. [given, F10, step 1.1, algebra]

2.2 The equality $\log4=2\log2$ from [F3] gives the unique corner $\beta_c=(\log2)/\epsilon>0$. On $0<\beta<\beta_c$, the larger branch is $\log4-2\beta\epsilon$ and has slope $-2\epsilon$; on $\beta>\beta_c$ the larger branch is $0$ and has slope $0$. The one-sided slopes differ. [given, F2, F3, step 1.3, algebra]

2.3 The exponential is positive, so $Z_N=1+e^{-\beta N\epsilon}+4^Ne^{-2\beta N\epsilon}>0$ for every real $\beta$. Its expression as a sum and product of the analytic function in step 1.4 is real analytic by [F7]. [given, F2, F7, step 1.4, algebra]

3.1 By [F12], with [F11] identifying $H_N$ as a finite real random variable, the mean energy per member is $u_N(\beta)=\epsilon\bigl(x+2\cdot4^Nx^2\bigr)/Z_N$ for $\beta>0$. If $0<\beta<\beta_c$, divide numerator and denominator by the high-sector weight $4^Nx^2$: the low-to-high ratio is $e^{-N(\log4-2\beta\epsilon)}\to0$ and the middle-to-high ratio is $e^{N(\beta\epsilon-\log4)}\le2^{-N}\to0$, so $u_N(\beta)\to2\epsilon$. If $\beta>\beta_c$, both non-low weights $x=e^{-\beta N\epsilon}$ and $4^Nx^2=e^{N(\log4-2\beta\epsilon)}$ tend to zero, so $u_N(\beta)\to0$. At $\beta=\beta_c$, the three sector weights are $1$, $2^{-N}$, and $1$, so $u_N(\beta_c)=\epsilon(2^{-N}+2)/(2+2^{-N})\to\epsilon$. These limits give the stated piecewise $u$ and its unequal one-sided limits. [given, F11, F12, step 2.2, algebra]

3.2 Fix $\beta_0\in\mathbb R$ and put $z_0=Z_N(\beta_0)>0$. By step 1.4, $\exp$ is real analytic; [F9] gives $\exp'(\log z_0)=z_0\ne0$, so [F8] gives a real-analytic local inverse near $z_0$. By the inverse definition [F2], that local inverse is $\log$ on this neighborhood, hence $\log$ is real analytic near $z_0$. [given, F2, F8, F9, step 1.4, step 2.3, algebra]

4.1 By [F5] the target property is real analyticity, and [F7] makes the composition $N^{-1}\log Z_N$ real analytic using steps 2.3 and 3.2. Hence every finite-$N$ function $\psi_N$ is real analytic. The derivative jump in step 2.2 belongs to the limiting function, not to a finite-$N$ singularity. [given, F5, F7, step 2.2, step 2.3, step 3.2, algebra] ∎

## Remarks

The uniform shell and the positive-temperature canonical law are two explicitly specified preparations. The strict middle-sector probability bound is uniform in all real $\beta$, including $N$-dependent choices. It establishes one ensemble-inequivalence observable in this global finite-sector sequence; it does not establish behavior for additive or short-range systems.

