---
id: def-tdmath-periodized-empirical-field
kind: definition
title: Periodized empirical field of a finite configuration
status: draft
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 3
justified_by: [lem-tdmath-periodized-empirical-field-stationary-density]
deps:
  - thm-tonelli-theorem-for-sigma-finite-product-spaces
  - def-tdmath-superstable-regular-interaction
  - def-tdmath-poisson-configuration-reference
  - def-tdmath-local-tame-topology
  - thm-lebesgue-measure-of-a-box-of-every-kind
dependency_roles:
  thm-tonelli-theorem-for-sigma-finite-product-spaces: mathematical-premise
  def-tdmath-superstable-regular-interaction: mathematical-premise
  def-tdmath-poisson-configuration-reference: mathematical-premise
  def-tdmath-local-tame-topology: mathematical-premise
  thm-lebesgue-measure-of-a-box-of-every-kind: mathematical-premise
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "H.-O. Georgii, Large deviations and the equivalence of ensembles for Gibbsian particle systems with superstable interaction"
      url: "https://www.mathematik.uni-muenchen.de/~georgii/papers/LDPsuperstable.pdf"
      locator: "Section 1, equation (1.1), printed p.172 / PDF p.2: translation-invariant empirical field formed from the periodic continuation of a finite-box configuration."
    - title: "H.-O. Georgii and H. Zessin, Large deviations and the maximum entropy principle for marked point random fields"
      url: "https://www.mathematik.uni-muenchen.de/~georgii/papers/GiiZess.pdf"
      locator: "Sections 2–3: stationary empirical fields and their local-tame topology."
---

## Definition

Use the cube $\Lambda_L=[0,L)^d$ and the translation $T_x$ defined in [[def-tdmath-poisson-configuration-reference]]. For a finite configuration $\omega\subset\Lambda_L$, let $\omega^{(L)}=\{q+Lk:q\in\omega,\ k\in\mathbb Z^d\}$ be its periodic continuation. Define its **periodized empirical field**
$$R_{L,\omega}:=\frac1{L^d}\int_{\Lambda_L}\delta_{T_x\omega^{(L)}}\,dx.$$
The integral is the push-forward of normalized Lebesgue measure on $\Lambda_L$ under $x\mapsto T_x\omega^{(L)}$. The map $(\omega,x)\mapsto T_x\omega^{(L)}$ is jointly measurable for the configuration sigma-algebra: the count in any bounded Borel set $A$ is the countable sum $\sum_{q\in\omega}\sum_{k\in\mathbb Z^d}\mathbf1_A(q+Lk+x)$, measurable in the finite-coordinate codes of $\omega$ and in $x$, and these count maps generate that sigma-algebra.

For any probability law $C_L$ on finite configurations in $\Lambda_L$, define its **empirical-field barycenter** as the probability mixture
$$\bar C_L(B):=\int R_{L,\omega}(B)\,C_L(d\omega)$$
for every measurable configuration set $B$. For a nonnegative measurable $f$, Tonelli ([[thm-tonelli-theorem-for-sigma-finite-product-spaces]]) applies to the probability $C_L$ and finite cube Lebesgue measure, giving its integral in $[0,+\infty]$ by
$$\bar C_L(f)=\int C_L(d\omega)\,R_{L,\omega}(f)=\frac1{L^d}\int_{\Lambda_L}E_{C_L}[f(T_x\omega^{(L)})]\,dx.$$
For a signed local tame $f$ from [[def-tdmath-local-tame-topology]], use this equality as a finite real identity when $\int R_{L,\omega}(|f|)\,C_L(d\omega)<\infty$; no difference $+\infty-(+\infty)$ is assigned a value. In particular this integrability holds for every local tame $f$ if $E_{C_L}N(\omega)<\infty$: for a fixed bounded support $A$, choose $0\leq a<\infty$ with $A\subseteq[-a,a]^d$. The number of periodic copies of any one point falling in $A$ is at most $M_{L,A}:=(2a/L+2)^d$, uniformly over its position and translation, because each coordinate lies in an interval of length $2a$ on a lattice of spacing $L$. Consequently $|f(T_x\omega^{(L)})|\leq b(1+M_{L,A}N(\omega))$.

For a stationary probability law $P$, define its intensity by $\rho(P):=E_PN_{[0,1)^d}\in[0,+\infty]$; finite intensity means $\rho(P)<\infty$. Stationarity is preserved by probability mixture. [[lem-tdmath-periodized-empirical-field-stationary-density]] proves stationarity and the finite-intensity formulas for $R_{L,\omega}$ and for $\bar C_L$ when $E_{C_L}N<\infty$. Thus arbitrary $C_L$ still has a probability barycenter, while its expectations on all signed tame tests need not be finite. This is a spatial average over the finite box, not the raw finite-volume law viewed at a fixed origin.
