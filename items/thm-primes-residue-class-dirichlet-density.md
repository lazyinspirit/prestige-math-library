---
id: thm-primes-residue-class-dirichlet-density
kind: theorem
title: "Primes in one reduced residue class have Dirichlet density 1 over phi(q)"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-natural-and-dirichlet-density, thm-dirichlet-character-orthogonality, thm-dirichlet-l-euler-product, thm-principal-dirichlet-l-factorization, thm-nonprincipal-dirichlet-l-holomorphic-right-half-plane, thm-dirichlet-l-nonzero-at-one]
justified_by: []
proof_strategy: direct
sources:
  references:
    - title: "Kiran S. Kedlaya, Notes on Analytic Number Theory, Theorem 4.11"
      url: "https://kskedlaya.org/ant/chap-primes-in-ap.html"
    - title: "Andrew V. Sutherland, Number Theory I, Lecture 18"
      url: "https://ocw.mit.edu/courses/18-785-number-theory-i-fall-2021/mit18_785f21_full_lec.pdf"
verification:
  audited: 2026-09-05
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-05
---

## Statement

Let $q\ge1$ and $(a,q)=1$. Then the set of primes $p\equiv a\pmod q$ has
relative Dirichlet density $1/\varphi(q)$ among the primes:

$$\sum_{\substack{p\equiv a\,(q)}}p^{-s} =\frac1{\varphi(q)}\log\frac1{s-1}+O(1)\qquad(s\downarrow1,\ s>1).$$

## Facts & Assumptions

**Given:** A modulus $q\ge1$ and a reduced residue class $a$ modulo $q$.

[L1] Character orthogonality isolates the class $a$ modulo $q$ ([[thm-dirichlet-character-orthogonality]]).

[L2] For $\operatorname{Re}s>1$, $\log L(s,\chi)=\sum_{p,m\ge1}\chi(p)^m/(m p^{ms})$ by the Euler product ([[thm-dirichlet-l-euler-product]]).

[L3] The principal factor is $L(s,\chi_0)=\zeta(s)\prod_{p\mid q}(1-p^{-s})$. Every nonprincipal $L(s,\chi)$ is holomorphic near $1$ and satisfies $L(1,\chi)\ne0$ ([[thm-principal-dirichlet-l-factorization]], [[thm-nonprincipal-dirichlet-l-holomorphic-right-half-plane]], [[thm-dirichlet-l-nonzero-at-one]]).

## Proof

**Proof technique:** direct.

1.1 Average the logarithms with the conjugate weights of the class $a$: $\frac1{\varphi(q)}\sum_{\chi\bmod q}\overline{\chi(a)}\log L(s,\chi)=\sum_{p,m\ge1}(m p^{ms})^{-1}\frac1{\varphi(q)}\sum_{\chi\bmod q}\overline{\chi(a)}\chi(p)^m$. By [L1], the inner character sum is $1$ exactly when $p^m\equiv a\pmod q$ and $0$ otherwise, so the left-hand side equals $\sum_{p^m\equiv a(q)}1/(m p^{ms})$. The terms with $m\ge2$ form a bounded tail as $s\downarrow1$ because $\sum_{p,m\ge2}1/(m p^m)<\infty$, and therefore $\frac1{\varphi(q)}\sum_{\chi}\overline{\chi(a)}\log L(s,\chi)=\sum_{p\equiv a(q)}p^{-s}+O(1)$. [L1, L2, given, algebra]

2.1 For nonprincipal $\chi$, [L3] makes $\log L(s,\chi)=O(1)$ as $s\downarrow1$. For the principal character, [L3] gives $\log L(s,\chi_0)=\log\zeta(s)+O(1)=\log(1/(s-1))+O(1)$, and $\overline{\chi_0(a)}=1$. Hence the average on the left side of step 1.1 is $\varphi(q)^{-1}\log(1/(s-1))+O(1)$. Comparing with step 1.1 yields the claimed asymptotic, which is exactly the Dirichlet density statement in [[def-natural-and-dirichlet-density]]. [L3, step 1.1, algebra] ∎
