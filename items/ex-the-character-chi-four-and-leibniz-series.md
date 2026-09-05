---
id: ex-the-character-chi-four-and-leibniz-series
kind: example
title: "The character chi_4 and the Gregory-Leibniz series"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-dirichlet-l-function, ex-dirichlet-characters-modulo-three-four-and-five, thm-nonprincipal-dirichlet-l-holomorphic-right-half-plane, thm-gregory-leibniz-series-for-pi-from-a-finite-remainder]
justified_by: []
proof_strategy: direct
sources:
  references:
    - title: "Kiran S. Kedlaya, Notes on Analytic Number Theory, section 3.2"
      url: "https://kskedlaya.org/ant/chap-lfunc.html"
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-05
---

## Example

For the nonprincipal character $\chi_4$ modulo $4$,

$$L(1,\chi_4)=1-\frac13+\frac15-\frac17+\cdots=\frac{\pi}{4}.$$

## Facts & Assumptions

**Given:** The definition of $L(s,\chi)$, the table for $\chi_4$, the holomorphic continuation of nonprincipal Dirichlet $L$-functions, and the Gregory-Leibniz theorem ([[def-dirichlet-l-function]], [[ex-dirichlet-characters-modulo-three-four-and-five]], [[thm-nonprincipal-dirichlet-l-holomorphic-right-half-plane]], [[thm-gregory-leibniz-series-for-pi-from-a-finite-remainder]]).

## Verification

**Proof technique:** direct.

1.1 The unit group modulo $4$ is $\{1,3\}$, with $3^2\equiv1\pmod4$. Its unique nontrivial character sends $1$ to $1$ and $3$ to $-1$, and extension by zero sends the even classes to $0$. This is the character $\chi_4$ listed in [[ex-dirichlet-characters-modulo-three-four-and-five]], so $\chi_4(2m)=0$, $\chi_4(4m+1)=1$, and $\chi_4(4m+3)=-1$. The convergence theorem then identifies $$ L(1,\chi_4)=\sum_{n\ge1}\frac{\chi_4(n)}n=\sum_{m\ge0}\left(\frac1{4m+1}-\frac1{4m+3}\right)=1-\frac13+\frac15-\frac17+\cdots. $$ [given, algebra]

2.1 The last series is exactly the Gregory-Leibniz series, so [[thm-gregory-leibniz-series-for-pi-from-a-finite-remainder]] gives $L(1,\chi_4)=\pi/4$. [step 1.1, given, algebra] ∎
