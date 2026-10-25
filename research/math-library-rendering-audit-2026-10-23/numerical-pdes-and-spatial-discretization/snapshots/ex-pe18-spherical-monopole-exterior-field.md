---
id: ex-pe18-spherical-monopole-exterior-field
kind: example
title: The outgoing monopole field of a sound-soft sphere
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 5
deps: [def-pe18-exterior-helmholtz-problem, def-spherical-bessel-and-hankel-functions, lem-spherical-bessel-and-hankel-radial-solutions, thm-pe18-rellich-uniqueness-for-a-spherical-obstacle]
proof_strategy: direct
generation:
  role: example
axiom_use: "No axiom is used; the degree-zero mode is evaluated explicitly."
provenance:
  statement: ai-generated
  proof: ai-generated
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
sources:
  references:
    - title: "NIST Digital Library of Mathematical Functions, §§10.49–10.52"
      url: "https://dlmf.nist.gov/10"
---

## Example

For constant boundary data $f=1$ on the sphere of radius $a$, the outgoing solution is
$$u(r)=\frac{h_0^{(1)}(kr)}{h_0^{(1)}(ka)}=\frac ar e^{ik(r-a)},\qquad r\ge a.$$

## Facts & Assumptions

**Given:** $a,k>0$, constant data $f=1$, and the time/radiation convention [F1].

[F1] [[def-pe18-exterior-helmholtz-problem]]: solve $(\Delta+k^2)u=0$ for $r>a$, set $u(a)=1$, and require $r(\partial_r-ik)u\to0$.

[F2] [[def-spherical-bessel-and-hankel-functions]]: at degree zero, the outgoing definition gives $h_0^{(1)}(z)=-ie^{iz}/z$.

[F3] [[lem-spherical-bessel-and-hankel-radial-solutions]]: this function solves $u''+2u'/z+u=0$ for $z>0$.

[F4] [[thm-pe18-rellich-uniqueness-for-a-spherical-obstacle]]: a classical outgoing Helmholtz solution with zero Dirichlet trace on the sphere is identically zero.

## Verification

**Given:** $a,k>0$ and [F1]–[F3].

1.1 Substituting [F2] into the Hankel ratio cancels the factor $-i/k$ and gives $u(r)=(a/r)e^{ik(r-a)}$, so $u(a)=1$. Direct differentiation yields $u'=(ik-r^{-1})u$ and $u''=(-k^2-2ik/r+2/r^2)u$. In three dimensions a radial function satisfies $\Delta u=u''+2u'/r$; hence $u''+2u'/r+k^2u=0$ by cancellation of each coefficient, in agreement with [F3] after setting $z=kr$. [F1, F2, F3, algebra]


2.1 The same derivative identity gives $r(u'-iku)=-u(r)$ and $|u(r)|=a/r\to0$. Thus the outgoing condition holds, and the displayed mode is an outgoing monopole solution. [F1, step 1.1, algebra]


3.1 If $w$ is any other classical outgoing solution with boundary value $1$, then $w-u$ is a classical outgoing solution with zero Dirichlet trace on $r=a$. By [F4], $w-u=0$. Hence the displayed field is the unique outgoing monopole solution. [F1, F4, step 1.1, step 2.1, algebra] ∎

