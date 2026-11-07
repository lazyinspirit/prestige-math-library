---
dependency_level: 3
id: ex-multiplicative-large-sieve-for-dirichlet-character-sums
kind: example
title: "The multiplicative large sieve for Dirichlet-character sums"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
deps:
  - thm-multiplicative-large-sieve-inequality
  - def-dirichlet-character-modulo-q
  - def-primitive-dirichlet-character-and-conductor
  - def-principal-dirichlet-character
  - def-induced-dirichlet-character
  - def-unit-group-modulo-n-and-euler-totient
  - def-pi-via-first-positive-cosine-zero
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
aliases: []
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Kiran Kedlaya, Notes on Analytic Number Theory, Chapter 16"
      url: "https://kskedlaya.org/ant/chap-largesieve2.html"
      locator: "Theorem 16.2"
    - title: "Emmanuel Kowalski, The Large Sieve and its Applications (Cambridge Tracts 175, 2008)"
      url: "https://ndl.ethernet.edu.et/bitstream/123456789/23450/1/E.%20Kowalski.pdf"
      locator: "§4.3, equation (4.5)"
---

## Example

Take $M=0$, $N=2$, $Q=3$, and $a_1=a_2=1$. In the sum over primitive
characters with moduli $q\le3$, modulus $1$ contributes $|1+1|^2=4$; modulus
$2$ contributes nothing because its only character is principal and induced
from modulus $1$; modulus $3$ has one primitive nonprincipal character with
values $\chi(1)=1$ and $\chi(2)=-1$, whose sum is $0$. Thus the left side of
the multiplicative large-sieve inequality is $4$. Its right side is
$(3^2+4\pi\cdot2)(|1|^2+|1|^2)=18+16\pi$, so the inequality holds in this
finite instance.

## Example references

[[thm-multiplicative-large-sieve-inequality]]

[[def-dirichlet-character-modulo-q]]

[[def-primitive-dirichlet-character-and-conductor]]

[[def-principal-dirichlet-character]]

[[def-induced-dirichlet-character]]

[[def-unit-group-modulo-n-and-euler-totient]]

[[def-pi-via-first-positive-cosine-zero]]

## Facts & Assumptions

**Given:** The finite choices $M=0$, $N=2$, $Q=3$, and $a_1=a_2=1$.

[F1] A Dirichlet character modulo $q$ is a homomorphism on the unit group,
extended by zero to nonunits; the principal character is trivial on units
([[def-dirichlet-character-modulo-q]], [[def-principal-dirichlet-character]]).

[F2] A character is primitive exactly when it is not induced from a proper
divisor; the principal character modulo $1$ is primitive
([[def-primitive-dirichlet-character-and-conductor]],
[[def-induced-dirichlet-character]]).

[F3] The unit groups modulo $1$, $2$, and $3$ are respectively
$\{[0]_1\}$, $\{[1]_2\}$, and $\{[1]_3,[2]_3\}$
([[def-unit-group-modulo-n-and-euler-totient]]).

[F4] The multiplicative large-sieve inequality bounds the primitive-character
second moment by $(Q^2+4\pi N)\sum_n|a_n|^2$
([[thm-multiplicative-large-sieve-inequality]]).

[F5] The library's $\pi$ is positive
([[def-pi-via-first-positive-cosine-zero]]).

## Verification

1.1 Modulo $1$ the unit group is trivial, so its unique character is primitive and has value $1$ at both integers $1,2$; its contribution is $|2|^2=4$. Modulo $2$ the unit group is also trivial, so its only character is principal; that character is induced from modulus $1$ and is not primitive. [F1, F2, F3, given, algebra]

1.2 The unit group modulo $3$ has order $2$ with generator $[2]_3$, so its nonprincipal character is uniquely determined by $\chi(2)=-1$ and $\chi(1)=1$. It is not induced from the only proper divisor $1$, whose character is principal, so it is primitive. Its sum on $n=1,2$ is $1-1=0$. [F1, F2, F3, given, algebra]

2.1 The three moduli therefore contribute $4,0,0$, respectively, and the left side is $4$. [step 1.1, step 1.2, algebra]

3.1 The coefficient norm is $|1|^2+|1|^2=2$ and $Q^2+4\pi N=9+8\pi$, so the right side is $18+16\pi>18>4$ because $\pi>0$. This verifies the inequality in the example. [F4, F5, given, algebra] ∎
