---
id: lem-orthogonal-fv-compressible-viscous-flux-consistency
kind: lemma
title: Second-order face-flux consistency for the one-dimensional viscous operator
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 5
aliases: []
deps:
  - def-orthogonal-fv-compressible-viscous-scheme
  - lem-compressible-viscous-flux-entropy-variable-factorization
  - lem-compressible-ideal-gas-entropy-pair-and-variables
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  precheck: pass
sources:
  references:
    - title: "R. Eymard, T. Gallouët, and R. Herbin, Finite Volume Methods, January 2019 updated author text, complete manuscript"
      url: "https://raphaeleh.github.io/PUBLI/bookevol.pdf"
      locator: "Chapter 9 §§9.2 and 9.5, printed pp. 37–39 and 50–53: orthogonal center-to-face fluxes and smooth-solution face-flux consistency estimates."
    - title: "Jérôme Droniou, Finite volume schemes for diffusion equations: introduction to and review of modern methods, 2014, complete preprint"
      url: "https://arxiv.org/pdf/1407.1567"
      locator: "Section 2 introductory TPFA construction, PDF p. 8, equations (2.1)–(2.4), and Remark 1.3, PDF p. 6: flux consistency context. The second-order state-block estimate is proved locally."
---

## Statement

Let $U\in C^3([0,L],\mathcal G)$ have image in a compact subset of $\mathcal G$. On the uniform mesh in [[def-orthogonal-fv-compressible-viscous-scheme]], sample $U_i=U(x_i)$. For every interior face $x_{i+1/2}$, the defined viscous face flux satisfies

$$\left|G_{i+1/2}-K_{11}(U(x_{i+1/2}))\,\partial_xv(U(x_{i+1/2}))\right|\le C h^2,$$

for all sufficiently small $h$, where $C$ depends on $U$, the fixed physical parameters, and the compact positive-state set, but not on $i$ or $h$. This is a face-flux consistency estimate only; it asserts no mesh-uniform solution error bound.

## Facts & Assumptions

**Given:** $L>0$, a $C^3$ field $U:[0,L]\to\mathcal G$ whose image lies in a compact subset of $\mathcal G$, and the uniform cell centers and face flux formula of [[def-orthogonal-fv-compressible-viscous-scheme]].

[F1] [[def-orthogonal-fv-compressible-viscous-scheme]]: $U_{i+1/2}=(U_i+U_{i+1})/2$ and $G_{i+1/2}=K_{11}(U_{i+1/2})(v(U_{i+1})-v(U_i))/h$.

[F2] [[lem-compressible-viscous-flux-entropy-variable-factorization]]: $K_{11}(U)$ is the smooth state block representing the one-direction viscous flux $K_{11}(U)\partial_xv$ on $\mathcal G$.

[F3] [[lem-compressible-ideal-gas-entropy-pair-and-variables]]: $v=(c_v\gamma-s-\beta|u|^2/2,\beta u,-\beta)$, where $\beta=c_v\rho/\varepsilon=1/T$.

## Proof


1.1 Fix an interior face $x_f=x_{i+1/2}$ and put $U_f=U(x_f)$. Taylor's theorem at $x_f$ gives $U(x_f\pm h/2)=U_f\pm(h/2)U'(x_f)+(h^2/8)U''(x_f)+O(h^3)$, uniformly in the face index because $U'''$ is bounded. Averaging the two expansions and using [F1] yields $U_{i+1/2}=U_f+O(h^2)$. [F1, given, algebra]

1.2 In [F3], $u=m/\rho$, $\varepsilon=E-|m|^2/(2\rho)$, and $s=c_v\log((\gamma-1)\varepsilon/\rho^\gamma)+s_0$. These functions and $\beta$ are smooth on $\mathcal G$, where $\rho,\varepsilon>0$, so $v\circ U$ is $C^3$ on $[0,L]$ with bounded third derivative. Its centered Taylor expansion gives $(v(U(x_f+h/2))-v(U(x_f-h/2)))/h=\partial_xv(U_f)+O(h^2)$ uniformly in $i$. [F3, given, algebra]

2.1 The block $K_{11}(U)$ is smooth on $\mathcal G$ by its explicit finite-dimensional factorization [F2], hence has bounded first derivatives on a compact neighborhood of the image of $U$. Step 1.1 gives $K_{11}(U_{i+1/2})=K_{11}(U_f)+O(h^2)$. Multiplying this by the bounded difference quotient in step 1.2 and using [F1] proves the stated $O(h^2)$ face-flux estimate. [F1, F2, step 1.1, step 1.2, algebra] ∎
