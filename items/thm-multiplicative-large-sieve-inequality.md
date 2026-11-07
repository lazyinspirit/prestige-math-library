---
dependency_level: 2
id: thm-multiplicative-large-sieve-inequality
kind: theorem
title: "Multiplicative large-sieve inequality for primitive Dirichlet characters"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
deps:
  - def-abstract-large-sieve-setting
  - thm-additive-large-sieve-inequality
  - def-dirichlet-character-modulo-q
  - def-primitive-dirichlet-character-and-conductor
  - def-principal-dirichlet-character
  - def-induced-dirichlet-character
  - def-unit-group-modulo-n-and-euler-totient
  - def-gauss-sum-dirichlet-character
  - lem-primitive-gauss-sum-twist
  - thm-primitive-gauss-sum-norm
  - thm-dirichlet-character-orthogonality
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
aliases: []
sources:
  scraped: []
  references:
    - title: "Kiran Kedlaya, Notes on Analytic Number Theory, Chapter 16"
      url: "https://kskedlaya.org/ant/chap-largesieve2.html"
      locator: "Theorems 16.1–16.2 and proof of Theorem 16.2, §§16.1–16.2"
    - title: "Emmanuel Kowalski, The Large Sieve and its Applications (Cambridge Tracts 175, 2008)"
      url: "https://ndl.ethernet.edu.et/bitstream/123456789/23450/1/E.%20Kowalski.pdf"
      locator: "§4.3, equation (4.5) and Exercise 4.1, printed pp. 57–58"
verification:
  precheck: pass
---

## Statement

Let $Q,N\ge1$ be integers, let $M\in\mathbb Z$, and let $a_n\in\mathbb C$
for $M<n\le M+N$. Then
$$\sum_{1\le q\le Q}\ \sum_{\substack{\chi\ ({\rm mod}\ q)\\ \chi\ {\rm primitive}}} \left|\sum_{M<n\le M+N}a_n\chi(n)\right|^2 \le(Q^2+4\pi N)\sum_{M<n\le M+N}|a_n|^2.$$
Here a Dirichlet character modulo $q$ is extended by zero on residue classes
that are not units, and primitive means it is not induced from a proper
divisor of $q$; the principal character modulo $1$ is included.

## Statement references

[[def-dirichlet-character-modulo-q]]

[[def-primitive-dirichlet-character-and-conductor]]

[[def-principal-dirichlet-character]]

[[def-induced-dirichlet-character]]

[[def-unit-group-modulo-n-and-euler-totient]]

[[def-gauss-sum-dirichlet-character]]

[[thm-additive-large-sieve-inequality]]

[Kedlaya, Chapter 16, full text](https://kskedlaya.org/ant/chap-largesieve2.html)

[Kowalski, Chapter 4.3, full text](https://ndl.ethernet.edu.et/bitstream/123456789/23450/1/E.%20Kowalski.pdf)

## Facts & Assumptions

**Given:** Positive integers $Q,N$, an integer $M$, and complex coefficients
$a_n$ on $M<n\le M+N$.

[F1] The primitive Gauss-sum twist identity is
$\sum_{a\bmod q}\chi(a)e(am/q)=\overline{\chi(m)}\tau(\chi)$
for every integer $m$ ([[lem-primitive-gauss-sum-twist]]).

[F2] If $\chi$ is primitive modulo $q$, then
$|\tau(\chi)|^2=q$ ([[thm-primitive-gauss-sum-norm]]).

[F3] For unit residues $a,b$ modulo $q$,
$\sum_{\chi\bmod q}\chi(a)\overline{\chi(b)}
=\varphi(q)$ when $a=b$ and $0$ otherwise
([[thm-dirichlet-character-orthogonality]]).

[F4] For a finite $\delta$-separated set of frequencies in
$\mathbb R/\mathbb Z$, the additive large sieve has constant at most
$\delta^{-1}+4\pi N$ on an interval of $N$ integers
([[thm-additive-large-sieve-inequality]]).

[F5] Modulo $1$ the unit group has one element, whose principal character is
primitive; a character modulo $q$ is primitive precisely when it is not
induced from a proper divisor
([[def-unit-group-modulo-n-and-euler-totient]],
[[def-principal-dirichlet-character]],
[[def-primitive-dirichlet-character-and-conductor]],
[[def-induced-dirichlet-character]]).

[F6] For $q>1$, unit residues are exactly the residue classes represented by
integers coprime to $q$, and $\varphi(q)$ counts this subset of all $q$
residue classes ([[def-unit-group-modulo-n-and-euler-totient]]).

## Proof

1.1 For each primitive $\chi$ modulo $q$, conjugating [F1] gives $\chi(n)=\frac{1}{\overline{\tau(\chi)}} \sum_{a\bmod q}\overline{\chi(a)}e(-an/q).$ The denominator is nonzero by [F2]. Since $\chi(a)=0$ off the units, this sum may be restricted to $a\in(\mathbb Z/q\mathbb Z)^\times$. [F1, F2, given]

1.2 Represent each unit residue by $0\le a<q$. By [F6], for $q>1$ it satisfies $0<a<q$ and $\gcd(a,q)=1$; the representative of $-a/q$ in $[0,1)$ is then $(q-a)/q$, a reduced fraction in $(0,1)$. For $q=1$, the unit is $a=0$ and the frequency is $0$. Equality of two such representatives in $[0,1)$, followed by cross multiplication and coprimality, forces their denominators and numerators to agree. Hence the frequencies $-a/q$ are distinct in $\mathbb R/\mathbb Z$. For two distinct such fractions, their difference from any integer is a nonzero integer divided by $qq'$, so its absolute value is at least $1/(qq')\ge Q^{-2}$. Thus, when $Q\ge2$, these frequencies are $Q^{-2}$-separated with $0<Q^{-2}\le1/2$. [F5, F6, given, algebra]

2.1 Put $S_q(a):=\sum_{M<n\le M+N}a_ne(-an/q)$. Substitution of step 1.1 and $|\tau(\chi)|^2=q$ show $\left|\sum_n a_n\chi(n)\right|^2 =\frac1q\left|\sum_{a\in(\mathbb Z/q\mathbb Z)^\times} \overline{\chi(a)}S_q(a)\right|^2.$ [step 1.1, algebra]

3.1 Sum step 2.1 over primitive characters and enlarge the nonnegative sum to all characters modulo $q$. Expanding the square and applying [F3] gives $\sum_{\chi\ ({\rm mod}\ q)\ {\rm primitive}} \left|\sum_n a_n\chi(n)\right|^2 \le\frac{\varphi(q)}q \sum_{a\in(\mathbb Z/q\mathbb Z)^\times}|S_q(a)|^2 \le\sum_{a\in(\mathbb Z/q\mathbb Z)^\times}|S_q(a)|^2,$ because $\varphi(q)$ counts a subset of the $q$ residue classes [F6]. [F3, F6, step 2.1, algebra]

4.1 If $Q\ge2$, sum step 3.1 over $q\le Q$ and apply [F4] with $\delta=Q^{-2}$; the result is the asserted bound. If $Q=1$, only the modulus-$1$ principal character occurs, giving the single frequency set $\{0\}\subset\mathbb R/\mathbb Z$, which is $1$-separated vacuously. Apply [F4] with $\delta=1$ to obtain the same bound. These cases cover every positive integer $Q$. [F4, F5, step 3.1, step 1.2, given, algebra] ∎
