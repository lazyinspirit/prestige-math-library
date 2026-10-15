---
id: def-tdmath-periodized-empirical-field
kind: definition
title: Periodized empirical field of a finite configuration
status: published
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 3
deps:
  - def-countable-choice
  - def-tdmath-superstable-regular-interaction
  - def-tdmath-poisson-configuration-reference
  - def-tdmath-local-tame-topology
  - thm-lebesgue-measure-of-a-box-of-every-kind
  - thm-tonelli-theorem-for-sigma-finite-product-spaces
dependency_roles:
  def-countable-choice: mathematical-premise
  def-tdmath-superstable-regular-interaction: mathematical-premise
  def-tdmath-poisson-configuration-reference: mathematical-premise
  def-tdmath-local-tame-topology: mathematical-premise
  thm-lebesgue-measure-of-a-box-of-every-kind: mathematical-premise
  thm-tonelli-theorem-for-sigma-finite-product-spaces: mathematical-premise
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
verification:
  verified:
    model: "gpt-6-luna, gpt-6.1-sol, and delegated Codex review/repair agents; see completed run evidence"
    verdict: "Owner accepted completed review and adjudication evidence for publication"
    date: "2026-10-15"
    scope: "Owner accepted completed delegated review and resolved adjudication evidence from research/physics-td-qft-rpm-62-2026-10-14-step6-evidence.json for publication. No new mathematical audit or source retrieval performed for publication; outside-frontier supplier limitations remain as recorded in the final report."
    evidence: "research/physics-td-qft-rpm-62-2026-10-14-step6-evidence.json"
    publication: "research/physics-td-qft-rpm-62-2026-10-14-publication-2026-10-15.json"
    delegated_by: "owner; publication instruction 2026-10-15"
---

## Definition

Assume Countable Choice [[def-countable-choice]]. Use the cube $\Lambda_L=[0,L)^d$ and the translation $T_x$ defined in [[def-tdmath-poisson-configuration-reference]]. For a finite configuration $\omega\subset\Lambda_L$, let $\omega^{(L)}=\{q+Lk:q\in\omega,\ k\in\mathbb Z^d\}$ be its periodic continuation. Define its **periodized empirical field**
$$R_{L,\omega}:=\frac1{L^d}\int_{\Lambda_L}\delta_{T_x\omega^{(L)}}\,dx.$$
The integral is the push-forward of normalized Lebesgue measure on $\Lambda_L$ under $x\mapsto T_x\omega^{(L)}$. For any probability law $C_L$ on finite configurations in $\Lambda_L$, define its **empirical-field barycenter** as the probability mixture
$$\bar C_L(B)=\int C_L(d\omega)R_{L,\omega}(B)$$
for every measurable configuration event $B$. By [[thm-tonelli-theorem-for-sigma-finite-product-spaces]], for a nonnegative measurable test $f$, the mixture identity holds with values in $[0,+\infty]$. For a signed local tame $f$ from [[def-tdmath-local-tame-topology]], the finite expectation formula
$$\bar C_L(f)=\int C_L(d\omega)R_{L,\omega}(f)=\frac1{L^d}\int_{\Lambda_L}E_{C_L}[f(T_x\omega^{(L)})]\,dx$$
is asserted when $\int C_L(d\omega)R_{L,\omega}(|f|)<\infty$. In particular $E_{C_L}N<\infty$ suffices: if a bounded support $A$ is contained in a box of side $a$, then $N_A(T_x\omega^{(L)})\leq (\lceil a/L\rceil+2)^dN(\omega)$ uniformly in $x$. The growth bound $|f|\leq b(1+N_A)$ therefore gives absolute integrability. For stationary laws write $\rho(P)=E_PN_{[0,1)^d}\in[0,+\infty]$, with finite intensity meaning $\rho(P)<\infty$; this agrees with the finite-intensity convention in [[def-tdmath-superstable-regular-interaction]]. This is a spatial average over the finite box, not the raw finite-volume law viewed at a fixed origin.
