---
id: thm-mertens-primes-arithmetic-progressions
kind: theorem
title: "Mertens sum for primes in an arithmetic progression"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-dirichlet-character-orthogonality, lem-nonprincipal-dirichlet-character-partial-sums, thm-nonprincipal-dirichlet-l-holomorphic-right-half-plane, thm-dirichlet-l-nonzero-at-one, thm-von-mangoldt-divisor-sum-identity, def-von-mangoldt-function, def-chebyshev-psi-function, lem-chebyshev-psi-prime-power-expansion, lem-chebyshev-functions-prime-power-comparison, thm-chebyshev-theta-linear-bounds, thm-first-mertens-theorem-for-primes, lem-abel-summation-by-parts]
justified_by: []
proof_strategy: direct
sources:
  references:
    - title: "Kiran S. Kedlaya, Notes on Analytic Number Theory, Chapter 4"
      url: "https://kskedlaya.org/ant/chap-primes-in-ap.html"
    - title: "P. Andersen, Analytic Number Theory, Chapters 14-15"
      url: "https://www.math.ku.dk/~andersk/undervisning/22-23/AnalyticNT/notes.pdf"
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-05
---

## Statement

For fixed $q\ge1$ and $(a,q)=1$,

$$ \sum_{\substack{p\le x\\ p\equiv a\,(q)}}\frac1p=\frac1{\varphi(q)}\log\log x+O_q(1). $$

## Facts & Assumptions

**Given:** A modulus $q\ge1$, a reduced residue class $a$, and the weighted sum

$$A(x):=\sum_{\substack{p\le x\\ p\equiv a\,(q)}}\frac{\log p}{p}.$$

[L1] Character orthogonality isolates one reduced residue class modulo $q$ ([[thm-dirichlet-character-orthogonality]]).

[L2] For a nonprincipal character, the partial sums of $\chi$ are bounded, the series $\sum_{n\ge1}\chi(n)/n$ converges to $L(1,\chi)$, and $L(1,\chi)\ne0$ ([[lem-nonprincipal-dirichlet-character-partial-sums]], [[thm-nonprincipal-dirichlet-l-holomorphic-right-half-plane]], [[thm-dirichlet-l-nonzero-at-one]]).

[L3] The von Mangoldt identity is $\log n=\sum_{d\mid n}\Lambda(d)$, and $\Lambda$ is supported on prime powers ([[thm-von-mangoldt-divisor-sum-identity]], [[def-von-mangoldt-function]]).

[L4] Chebyshev's bounds and the prime-power expansion imply $\psi(x)=\sum_{n\le x}\Lambda(n)=O(x)$ ([[def-chebyshev-psi-function]], [[lem-chebyshev-psi-prime-power-expansion]], [[lem-chebyshev-functions-prime-power-comparison]], [[thm-chebyshev-theta-linear-bounds]]).

[L5] The ordinary weighted prime sum satisfies $\sum_{p\le x}(\log p)/p=\log x+O(1)$ ([[thm-first-mertens-theorem-for-primes]]), and Abel summation by parts is available ([[lem-abel-summation-by-parts]]).

## Proof

**Proof technique:** direct.

1.1 For each Dirichlet character $\chi$ modulo $q$, define $$ A_\chi(x):=\sum_{p\le x}\chi(p)\frac{\log p}{p}. $$ Because every prime $p\equiv a\pmod q$ is coprime to $q$, [L1] gives $$ \varphi(q)A(x)=\sum_{\chi\bmod q}\overline{\chi(a)}\,A_\chi(x). $$ [L1, given, algebra]

2.1 If $\chi=\chi_0$ is principal, then $$ A_{\chi_0}(x)=\sum_{\substack{p\le x\\ p\nmid q}}\frac{\log p}{p}=\log x+O_q(1) $$ by [L5]. Now let $\chi\ne\chi_0$, put $M_\chi(y):=\sum_{n\le y}\chi(n)$, and define $$T_\chi(x):=\sum_{n\le x}\frac{\chi(n)\log n}{n},\qquad S_\chi(x):=\sum_{n\le x}\frac{\chi(n)\Lambda(n)}n.$$ Abel summation and [L2] give $T_\chi(x)=O_q(1)$ and $$\sum_{b\le y}\frac{\chi(b)}b=L(1,\chi)+O_q(y^{-1}).$$ Using [L3], complete multiplicativity, and finite rearrangement, $$T_\chi(x)=\sum_{a\le x}\frac{\chi(a)\Lambda(a)}a\sum_{b\le x/a}\frac{\chi(b)}b=L(1,\chi)S_\chi(x)+O_q\!\left(\frac1x\sum_{a\le x}\Lambda(a)\right).$$ The last error is $O_q(1)$ by [L4]. Since $L(1,\chi)\ne0$ by [L2], it follows that $S_\chi(x)=O_q(1)$. Removing the absolutely bounded contribution of prime powers $p^m$ with $m\ge2$ gives $A_\chi(x)=O_q(1)$. Returning to step 1.1, only the principal character contributes an unbounded term, and therefore $$ A(x)=\frac1{\varphi(q)}\log x+O_q(1). $$ [L2, L3, L4, L5, step 1.1, algebra]

3.1 Apply [L5] to the sequence that is $1/p$ on primes $p\equiv a\pmod q$ and $0$ otherwise, with weight $\log n$. Exactly as in the ordinary prime Mertens argument, this gives $$ \sum_{\substack{p\le x\\ p\equiv a\,(q)}}\frac1p =\frac{A(x)}{\log x}+\int_2^x\frac{A(t)}{t\log^2 t}\,dt. $$ Substituting the estimate from step 2.1 yields $$ \frac{A(x)}{\log x}=\frac1{\varphi(q)}+O_q\!\left(\frac1{\log x}\right) $$ and $$ \int_2^x\frac{A(t)}{t\log^2 t}\,dt =\frac1{\varphi(q)}\int_2^x\frac{dt}{t\log t}+O_q\!\left(\int_2^\infty\frac{dt}{t\log^2 t}\right) =\frac1{\varphi(q)}\log\log x+O_q(1). $$ Combining these two estimates proves $$ \sum_{\substack{p\le x\\ p\equiv a\,(q)}}\frac1p =\frac1{\varphi(q)}\log\log x+O_q(1). $$ [L5, step 2.1, algebra] ∎
