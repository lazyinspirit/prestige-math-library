---
id: thm-na-filon-interpolation-error-bound
kind: theorem
title: Nonstationary error bound for endpoint Filon interpolation
status: draft
origin: pipeline
dependency_level: 5
deps:
  - def-na-finite-interval-oscillatory-integral
  - lem-na-lagrange-interpolation-on-distinct-nodes
  - alg-na-filon-nodal-moment-quadrature
  - thm-na-nonstationary-oscillatory-integration-by-parts
proof_strategy: direct
axiom_use: "No choice axiom is used; the argument uses explicit finite formulas and the cited calculus results."
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "NIST Digital Library of Mathematical Functions, §2.3(i)"
      url: "https://dlmf.nist.gov/2.3"
    - title: "A. Iserles, S. P. Nørsett, and S. Olver, Highly oscillatory quadrature: The story so far, §3.2"
      url: "https://www.cs.ox.ac.uk/sheehan.olver/papers/storysofar.pdf"
    - title: "D. Levin, Procedures for computing one- and two-dimensional integrals of functions with rapid irregular oscillations, §3"
      url: "https://people.math.ethz.ch/~hiptmair/Seminars/OSCINT/LEV82.pdf"
---

## Statement

Let $a<b$, $\omega\in\mathbb R\setminus\{0\}$, $f\in C^2[a,b]$ be complex-valued, and $g\in C^3[a,b]$ be real-valued with $|g'|\ge c>0$. Use the endpoint Lagrange rule from [[alg-na-filon-nodal-moment-quadrature]] and put $r=f-p_n$. If $\mu_j=\int_a^b\ell_j e^{i\omega g}$ and the rule uses $\widehat\mu_j$ with $|\widehat\mu_j-\mu_j|\le\epsilon_j$, then
$$|I_\omega(f,g;[a,b])-Q_n|\le\frac{|T_gr(a)/g'(a)|+|T_gr(b)/g'(b)|+(b-a)\|T_g^2r\|_\infty}{|\omega|^2}+\eta_n.$$
With exact moments $\eta_n=0$, this is an $O(|\omega|^{-2})$ endpoint-interpolation error bound. The constant depends on the fixed amplitude, phase, nodes, and derivative norms.

## Facts & Assumptions

**Given:** The hypotheses in the Statement, the integral convention on [[def-na-finite-interval-oscillatory-integral]], and the endpoint nodes $c_0=a,c_n=b$.

[F1] [[lem-na-lagrange-interpolation-on-distinct-nodes]]: $p_n=\sum_{j=0}^nf(c_j)\ell_j$ and $p_n(c_j)=f(c_j)$.

[F2] [[alg-na-filon-nodal-moment-quadrature]]: $Q_n=\sum_jf(c_j)\widehat\mu_j$ and $\eta_n=\sum_j|f(c_j)|\epsilon_j$.

[F3] [[thm-na-nonstationary-oscillatory-integration-by-parts]]: the two-step identity for $I_\omega(h,g)$ has first boundary term $[(h/g')e^{i\omega g}]_a^b/(i\omega)$, second term $-[(T_gh/g')e^{i\omega g}]_a^b/(i\omega)^2$, and remainder $I_\omega(T_g^2h,g)/(i\omega)^2$.

## Proof

1.1 Let $Q_n^\ast=\sum_jf(c_j)\mu_j$. By [F1], linearity of the integral gives $Q_n^\ast=I_\omega(p_n,g)$; by [F2], $|Q_n^\ast-Q_n|\le\eta_n$. Hence $I_\omega(f,g)-Q_n=I_\omega(r,g)+(Q_n^\ast-Q_n)$. [given, F1, F2, algebra]

1.2 The endpoint nodes and [F1] give $r(a)=r(b)=0$, so the first boundary term in [F3] vanishes. Applying [F3] to $r$ leaves $I_\omega(r,g)=-\frac{[(T_gr/g')e^{i\omega g}]_a^b}{(i\omega)^2}+\frac{I_\omega(T_g^2r,g)}{(i\omega)^2}.$ [given, F1, F3, algebra]

2.1 Since $|e^{i\omega g}|=1$, the modulus of the displayed boundary term is at most $|T_gr(a)/g'(a)|+|T_gr(b)/g'(b)|$, and the integral term is at most $(b-a)\|T_g^2r\|_\infty$. Combine these bounds with step 1.1 and $|(i\omega)^2|=|\omega|^2$ to obtain the assertion. [given, F2, step 1.1, step 1.2, algebra] ∎
