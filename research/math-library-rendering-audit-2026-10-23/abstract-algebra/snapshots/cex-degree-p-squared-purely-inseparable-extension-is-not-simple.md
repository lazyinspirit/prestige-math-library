---
id: cex-degree-p-squared-purely-inseparable-extension-is-not-simple
kind: counterexample
title: "$\\mathbb F_p(s,t)/\\mathbb F_p(s^p,t^p)$ has degree $p^2$, infinitely many intermediate fields, and no primitive element"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [cor-rational-function-field-as-a-fraction-field, thm-polynomial-ring-over-a-field-is-a-ufd, thm-p-bases-and-degree-in-exponent-one-purely-inseparable-extensions, thm-steinitz-primitive-element-criterion]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + claude-sonnet-5"
    verdict: pass
    date: 2026-08-17
  audited: 2026-08-17
sources:
  scraped: []
  references:
    - title: "P. L. Clark, Field Theory, Chapter 5"
      url: "https://plclark.github.io/PeteLClark/Expositions/FieldTheory.pdf"
    - title: "J. S. Milne, Fields and Galois Theory, Chapters 3 and 5"
      url: "https://www.jmilne.org/math/Books/FT0.pdf"
pipeline_run: null
---

## Statement refuted

Every finite purely inseparable extension is simple.

## Facts & Assumptions

**Given:** A prime $p$, the field $F=\mathbb F_p(s^p,t^p)$, and $E=\mathbb F_p(s,t)$.

[L1] For every field $k$, the rational function field $k(u)$ is the fraction field of $k[u]$ ([[cor-rational-function-field-as-a-fraction-field]]).

[L2] A polynomial ring over a field is a unique factorization domain ([[thm-polynomial-ring-over-a-field-is-a-ufd]]).

[L3] In an exponent-one purely inseparable extension, a minimal generating family of length $r$ gives degree $p^r$ and the restricted-monomial basis ([[thm-p-bases-and-degree-in-exponent-one-purely-inseparable-extensions]]).

[L4] A finite extension is simple exactly when it has finitely many intermediate fields ([[thm-steinitz-primitive-element-criterion]]).

## Counterexample

**Proof technique:** direct.

1.1 Write $u=s^p$ and $v=t^p$. In the rational function field $\mathbb F_p(v)(u)$, the $u$-adic valuation of a $p$th power is divisible by $p$, so $u$ is not a $p$th power and $s\notin F$. Likewise, in $F(s)=\mathbb F_p(s)(v)$, the $v$-adic valuation shows that $v$ is not a $p$th power and $t\notin F(s)$. These valuation statements follow from reduced fractions in the UFDs of [L1] and [L2]. Every element of $E$ has its $p$th power in $F$, so $(s,t)$ is a minimal generating family for an exponent-one purely inseparable extension. By [L3], $[E:F]=p^2$ and $\{s^it^j:0\le i,j<p\}$ is an $F$-basis. [L1, L2, L3, algebra]

2.1 The base field $F$ is infinite because it contains the rational function field $\mathbb F_p(s^p)$ from [L1]. For each $c\in F$, put $u_c=s+ct$. Then $u_c^p=s^p+c^pt^p\in F$, while the basis in step 1.1 shows $u_c\notin F$, so [L3] gives $[F(u_c):F]=p$. [step 1.1, L1, L3, algebra]

3.1 If $c\ne d$ and $F(u_c)=F(u_d)$, that common field contains $(u_c-u_d)/(c-d)=t$ and then $s=u_c-ct$, so it equals $E$. This contradicts its degree $p$ against $[E:F]=p^2$. Hence the fields $F(u_c)$ are pairwise distinct. [step 1.1, step 2.1, algebra]

4.1 There are therefore infinitely many intermediate fields, and [L4] says that the finite extension $E/F$ is not simple. This refutes the stated universal claim. [step 2.1, step 3.1, L4] ∎
