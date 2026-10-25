---
id: def-bem-double-layer-transmission-space
kind: definition
title: The finite-energy double-layer transmission space
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 5
deps: [def-bem-lipschitz-polyhedral-boundary-and-trace-spaces, lem-bem-lipschitz-trace-and-lifting, def-bem-laplace-layer-potentials-and-energy-spaces]
justified_by: [thm-bem-double-layer-transmission-jumps-and-bounds]
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
sources:
  references:
    - title: "Martin Costabel, Boundary Integral Operators on Lipschitz Domains: Elementary Results (1988)"
      url: https://costabel.perso.math.cnrs.fr/publis/Co88_Lip.pdf
      locator: "§§3–4, printed pp. 617–622: weak conormal derivatives, Green formulas, transmission solutions, and double-layer jump relations."
    - title: "Francisco-Javier Sayas, First Steps in the Boundary Element Method (2015 lecture notes)"
      url: https://team-pancho.github.io/teaching/math838/BEM.pdf
      locator: "Chapter 3 §§3.1–3.3, printed pp. 40–46: single/double layers defined by transmission jumps and their energy interpretation."
---

## Definition

Use the exterior energy space $E^+(\Omega^+)$ and weak conormal conventions of [[def-bem-laplace-layer-potentials-and-energy-spaces]]. For $\phi\in H^{1/2}(\Gamma)$ let
$$\mathcal A_\phi=\{(u^-,u^+)\in H^1(\Omega^-)\times E^+(\Omega^+):\gamma^-u^- -\gamma^+u^+=-\phi\}.$$
When it exists uniquely, denote by $D\phi$ the pair in $\mathcal A_\phi$ minimizing
$$\mathcal E(u^-,u^+)=\int_{\Omega^-}|\nabla u^-|^2dx+\int_{\Omega^+}|\nabla u^+|^2dx.$$
Existence, uniqueness, harmonicity, and equality of the weak conormals are proved in [[thm-bem-double-layer-transmission-jumps-and-bounds]].

For $\phi\in H^{1/2}(\Gamma)$ and $x\notin\Gamma$, the corresponding classical potential, whose agreement with the minimizer is proved in [[thm-bem-double-layer-transmission-jumps-and-bounds]], is $D\phi(x)=\int_\Gamma\partial_{n_y}G_3(x,y)\phi(y)\,dS_y$. The sign in the imposed jump, $\gamma^-D\phi-\gamma^+D\phi=-\phi$, is the convention for this kernel.
