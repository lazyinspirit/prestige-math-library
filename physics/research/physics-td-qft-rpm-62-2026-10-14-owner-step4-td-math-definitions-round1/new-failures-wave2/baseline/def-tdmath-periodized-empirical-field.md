---
id: def-tdmath-periodized-empirical-field
kind: definition
title: Periodized empirical field of a finite configuration
status: draft
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 3
deps:
  - def-tdmath-superstable-regular-interaction
  - def-tdmath-poisson-configuration-reference
  - def-tdmath-local-tame-topology
  - thm-lebesgue-measure-of-a-box-of-every-kind
dependency_roles:
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
The integral is the push-forward of normalized Lebesgue measure on $\Lambda_L$ under $x\mapsto T_x\omega^{(L)}$. For a probability law $C_L$ on finite configurations in $\Lambda_L$, define its **empirical-field barycenter** $\bar C_L$ by
$$\bar C_L(f):=\int C_L(d\omega)\,R_{L,\omega}(f)=\frac1{L^d}\int_{\Lambda_L}E_{C_L}[f(T_x\omega^{(L)})]\,dx$$
for local tame $f$ from [[def-tdmath-local-tame-topology]]. This is a spatial average over the finite box, not the raw finite-volume law viewed at a fixed origin.

