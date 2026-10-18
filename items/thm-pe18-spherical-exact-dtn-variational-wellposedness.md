---
id: thm-pe18-spherical-exact-dtn-variational-wellposedness
kind: theorem
title: Existence and uniqueness for the spherical exact-DtN variational problem
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 7
deps: [def-pe18-spherical-dtn-truncated-variational-problem, lem-pe18-modal-trace-and-form-continuity, thm-pe18-exact-spherical-dtn-map-on-smooth-data, lem-pe18-spherical-harmonic-structure-and-density, lem-pe18-spherical-hankel-radial-identities, lem-pe18-spherical-hankel-modulus-and-radiation-bounds]
justified_by: []
proof_strategy: direct
axiom_use: "No choice axiom is used; existence is the explicit outgoing modal series and uniqueness is proved degree by degree."
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
sources:
  references:
    - title: "NIST Digital Library of Mathematical Functions, Chapter 10: Bessel Functions"
      url: "https://dlmf.nist.gov/10"
    - title: "Plamen Stefanov, Scattering and Inverse Scattering in R^n, Appendix 1, §§1.1–1.2"
      url: "https://www.math.purdue.edu/~stefanov/publications/SCATTERING.pdf"
---

## Statement

Fix $0<a<R$, $k>0$, and smooth $f$ on $\mathbb S^2$. The exact-DtN variational problem of [[def-pe18-spherical-dtn-truncated-variational-problem]] has exactly one solution $u\in\mathcal V_f$. It is the restriction to $a\le r\le R$ of the outgoing modal field
$$u(r,\omega)=\sum_{\ell=0}^\infty\frac{h_\ell^{(1)}(kr)}{h_\ell^{(1)}(ka)}f_\ell(\omega),$$
where $f_\ell$ is the degree-$\ell$ projection of $f$.

## Facts & Assumptions

**Given:** $0<a<R$, $k>0$, smooth $f$, and the variational definition [F1].

[F1] [[def-pe18-spherical-dtn-truncated-variational-problem]]: the trial trace at $a$ is $f_\ell$, tests have zero trace at $a$, and the form subtracts $R^2\tau_\ell$ at the outer boundary.

[F2] [[lem-pe18-modal-trace-and-form-continuity]]: the form and traces are continuous on the coefficient energy space; finite-degree tests are dense by truncating the defining Hilbert sum.

[F3] [[thm-pe18-exact-spherical-dtn-map-on-smooth-data]]: the outgoing modal series for smooth data at any positive sphere is classical, solves the Helmholtz equation, has the prescribed trace, and satisfies $u_\ell'(R)=\tau_\ell u_\ell(R)$.

[F4] [[lem-pe18-spherical-harmonic-structure-and-density]]: $\|f_\ell\|_2$ decays faster than every inverse power of $1+\ell$ and the degree-$\ell$ angular energy is $\ell(\ell+1)$ times the squared $L^2$ norm.

[F5] [[lem-pe18-spherical-hankel-radial-identities]] and [[lem-pe18-spherical-hankel-modulus-and-radiation-bounds]]: $h_\ell^{(1)}(ka)\ne0$, the outgoing/incoming Wronskian is nonzero, $|h_\ell(kr)/h_\ell(ka)|\le1$ for $r\ge a$, and $|h_\ell'|\le(1+(\ell+1)/(kr))|h_\ell|$.

## Proof

**Given:** The data and suppliers [F1]–[F4].

1.1 By [F3] applied at the inner radius $a$, the proposed series has inner trace $f$. Its degree-$\ell$ radial ratio has modulus at most one for $r\ge a$ by [F5], and its radial derivative is bounded by $k+(\ell+1)/r$ times that ratio. The angular energy of degree $\ell$ is $\ell(\ell+1)$ times its squared $L^2$ norm. Consequently its total $\mathcal V$ energy is at most $C_{a,R,k}\sum_\ell(1+\ell)^2\|f_\ell\|_2^2$, which is finite by [F4]. Thus it belongs to $\mathcal V_f$. [F1, F3, F4, F5, algebra]

1.2 Let $w\in\mathcal V_0$ solve the homogeneous variational equation. Testing against functions supported in a single degree and compactly supported in $(a,R)$ shows distributionally that $(r^2w_\ell')'+(k^2r^2-\ell(\ell+1))w_\ell=0$. Since the coefficients are smooth and $r>0$, this one-dimensional equation implies $w_\ell\in C^2([a,R];\mathcal H_\ell)$. Integrating by parts and allowing arbitrary outer test trace yields $w_\ell'(R)=\tau_\ell w_\ell(R)$; the inner trace is $w_\ell(a)=0$. [F1, F2, algebra]

2.1 Each modal coefficient satisfies $(r^2u_\ell')'+(k^2r^2-\ell(\ell+1))u_\ell=0$ and $u_\ell'(R)=\tau_\ell u_\ell(R)$ by [F3]. Integration by parts against a finite-degree test with zero inner trace makes its modal volume term equal $R^2u_\ell'(R)\overline{v_\ell(R)}$; the outer term in [F1] subtracts exactly $R^2\tau_\ell u_\ell(R)\overline{v_\ell(R)}$. Hence the form vanishes for every finite-degree test. Finite-degree truncations converge in $\mathcal V$, and [F2] extends the identity to every test in $\mathcal V_0$. This proves existence. [F1, F2, F3, step 1.1, algebra]

3.1 The radial ODE solution is $w_\ell(r)=A_\ell h_\ell^{(1)}(kr)+B_\ell h_\ell^{(2)}(kr)$: the two solutions have nonzero Wronskian by [F5], and matching value and derivative at one radius followed by uniqueness of the linear initial-value equation spans all solutions. At $R$, the condition from step 1.2 gives $B_\ell k\bigl((h_\ell^{(2)})'(kR)-[(h_\ell^{(1)})'(kR)/h_\ell^{(1)}(kR)]h_\ell^{(2)}(kR)\bigr)=0$. The parenthesized factor is the nonzero Wronskian divided by $h_\ell^{(1)}(kR)$, so $B_\ell=0$. The inner condition and [F5] then give $A_\ell=0$. Every modal projection vanishes, hence $w=0$ in $\mathcal V$. This proves uniqueness. [F1, F5, step 1.2, algebra] ∎
