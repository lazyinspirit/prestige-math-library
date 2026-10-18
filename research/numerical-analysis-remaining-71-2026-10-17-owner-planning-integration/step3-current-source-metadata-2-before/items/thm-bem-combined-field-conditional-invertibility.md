---
id: thm-bem-combined-field-conditional-invertibility
kind: theorem
title: Bounded invertibility of the smooth-boundary Helmholtz combined field
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 5
deps:
  [
    def-bem-smooth-helmholtz-combined-field-operator,
    thm-bem-smooth-helmholtz-operator-compact-perturbation,
    lem-bem-helmholtz-double-layer-conormal-jump,
    lem-bem-smooth-trace-and-helmholtz-layer-extension,
    thm-bem-exterior-helmholtz-dirichlet-uniqueness,
    thm-fredholm-alternative-for-identity-minus-compact,
    def-axiom-of-choice
  ]
justified_by: []
proof_strategy: direct
axiom_use: "The Axiom of Choice is assumed; it supplies Countable Choice for
  Fourier, variational and harmonic regularity suppliers."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Sayas, First Steps in the Boundary Element Method; local proof of the C2
        extension below"
      url: https://team-pancho.github.io/teaching/math838/BEM.pdf
verification:
  precheck: pass
---

## Statement

Assume the Axiom of Choice, let $k>0$ and real $\eta\ne0$, and use the smooth-boundary geometry, spaces and operator $A_{k,\eta}$ of [[def-bem-smooth-helmholtz-combined-field-operator]]. Then $A_{k,\eta}$ extends to a bounded bijection on complex $H^{1/2}(\Gamma)$ with bounded inverse. In particular, for this fixed $k,\eta$ there is a finite constant $C_{k,\eta}=\|A_{k,\eta}^{-1}\|$ such that
$$\|\phi\|_{H^{1/2}(\Gamma)}\le C_{k,\eta}\|A_{k,\eta}\phi\|_{H^{1/2}(\Gamma)}.$$
The constant can also depend on $\Gamma$; no bound uniform as $k$ varies is asserted. For every boundary datum $f\in H^{1/2}(\Gamma)$, $u=D_kA_{k,\eta}^{-1}f-i\eta S_kA_{k,\eta}^{-1}f$ is the unique outgoing weak exterior Dirichlet solution with trace $f$ in the local $H^1$ class of [[thm-bem-exterior-helmholtz-dirichlet-uniqueness]].

## Facts & Assumptions

**Given:** The Axiom of Choice, $k>0$, real $\eta\ne0$, and the smooth-boundary geometry in the Statement.

[F1] $2A_{k,\eta}=I-\mathcal K_{k,\eta}$ with compact $\mathcal K_{k,\eta}$ on $H^{1/2}(\Gamma)$ ([[thm-bem-smooth-helmholtz-operator-compact-perturbation]]).

[F2] The layers have outgoing exterior and $H^1$ interior restrictions solving Helmholtz and obeying weak Green's identity ([[lem-bem-smooth-trace-and-helmholtz-layer-extension]]); their trace and conormal jumps are $[\gamma D_k\phi]=-\phi$, $[\partial_nD_k\phi]=0$, $[\gamma S_k\lambda]=0$, $[\partial_nS_k\lambda]=\lambda$ ([[lem-bem-helmholtz-double-layer-conormal-jump]]).

[F3] Outgoing exterior zero-Dirichlet solutions in this geometry vanish ([[thm-bem-exterior-helmholtz-dirichlet-uniqueness]]).

[F4] Under the Axiom of Choice, injectivity of identity minus a compact operator on a Banach space implies bounded invertibility ([[thm-fredholm-alternative-for-identity-minus-compact]], [[def-axiom-of-choice]]).

## Proof

1.1 Suppose $A_{k,\eta}\phi=0$ and set $u=D_k\phi-i\eta S_k\phi$. Here $\phi\in H^{1/2}$ is a valid single-layer density by the continuous inclusions $H^{1/2}\subset L^2\subset H^{-1/2}$, the last inclusion following from Cauchy–Schwarz and the continuous $H^{1/2}\to L^2$ embedding. By [F2], $u^+$ is outgoing, weak Helmholtz and has zero exterior trace. [F3] gives $u^+=0$, so also $\partial_n^+u=0$. [F2, F3, given, algebra]

2.1 By [F2], $\gamma^-u-\gamma^+u=-\phi$, so $\gamma^-u=-\phi$. The conormal jump is $\partial_n^-u-\partial_n^+u=-i\eta\phi$, whence $\partial_n^-u=-i\eta\phi=i\eta\gamma^-u$. The products here use the $L^2$ realization of $H^{1/2}$ as an element of its dual $H^{-1/2}$. [F2, step 1.1, algebra]

3.1 The interior weak Green identity [F2] tested with $u^-$ gives $\int_{\Omega^-}(|\nabla u^-|^2-k^2|u^-|^2)dx=\langle\partial_n^-u,\gamma^-u\rangle=i\eta\|\gamma^-u\|_{L^2(\Gamma)}^2.$ The left side is real. Taking imaginary parts and using real $\eta\ne0$ gives $\gamma^-u=0$, and step 2.1 gives $\phi=0$. Thus $A_{k,\eta}$ is injective. [F2, step 2.1, given, algebra]

4.1 By [F1], $2A_{k,\eta}=I-\mathcal K_{k,\eta}$ with compact $\mathcal K_{k,\eta}$. Injectivity and [F4] make $I-\mathcal K_{k,\eta}$ boundedly invertible, hence so is $A_{k,\eta}$. Its finite inverse norm gives the estimate. For a prescribed $f$, use $\phi=A_{k,\eta}^{-1}f$; [F2] gives the outgoing solution and the operator identity gives its trace $f$. The difference of any two such solutions satisfies [F3], proving uniqueness. [F1, F2, F3, F4, step 3.1, given, construct, algebra] ∎
## Remarks

The identifier is retained for link compatibility with the earlier conditional carrier. Its three former interface hypotheses are now proved by the local suppliers cited above. The modal foundations used for exterior uniqueness are independent of any spherical-obstacle boundary condition; their same-ID placement on this page avoids a reverse dependency on the PE18 page.
