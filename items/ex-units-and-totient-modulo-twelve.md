---
id: ex-units-and-totient-modulo-twelve
kind: example
title: "$(\\mathbb Z/12)^\\times=\\{[1],[5],[7],[11]\\}$ and $\\varphi(12)=4$"
status: published
origin: session
deps: [thm-unit-criterion-modulo-n, thm-euler-totient-product-formula, thm-standard-representatives-modulo-n, def-unit-group-modulo-n-and-euler-totient, def-addition-and-multiplication-modulo-n, def-integers-modulo-n, def-congruence-modulo-an-integer]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-07-31
sources:
  scraped: []
  references:
    - title: "Mathematics LibreTexts, Euler's phi Function"
      url: "https://math.libretexts.org/Bookshelves/Combinatorics_and_Discrete_Mathematics/Yet_Another_Introductory_Number_Theory_Textbook_-_Cryptology_Emphasis_%28Poritz%29/02%3A_Congruences/2.05%3A_Euler%27s__%CF%95__Function"
pipeline_run: null
---

## Example

$$(\mathbb Z/12)^\times=\{[1]_{12},[5]_{12},[7]_{12},[11]_{12}\},\qquad\varphi(12)=4.$$

Every displayed unit is its own inverse.

## Facts & Assumptions

**Given:** The quotient $\mathbb Z/12$ and its unit group.

[L1] The classes modulo $12$ have the unique standard representatives $0,\ldots,11$ ([[thm-standard-representatives-modulo-n]]).

[L2] The class $[a]_{12}$ is a unit exactly when $\gcd(a,12)=1$, and $\varphi(12)$ counts these units ([[thm-unit-criterion-modulo-n]], [[def-unit-group-modulo-n-and-euler-totient]]).

[L3] Euler's finite prime-divisor product gives $\varphi(n)=\prod_{p^k\parallel n}(p^k-p^{k-1})$ ([[thm-euler-totient-product-formula]]).

[F1] Equality of residue classes is congruence of representatives ([[def-integers-modulo-n]]), and congruence means divisibility of their difference ([[def-congruence-modulo-an-integer]]).

[F2] Products of residue classes are computed by multiplying representatives: $[a]_{12}[b]_{12}=[ab]_{12}$ ([[def-addition-and-multiplication-modulo-n]]).

## Verification

**Proof technique:** direct.

1.1 Among $0,\ldots,11$, exactly $1,5,7,11$ have gcd $1$ with $12$: every other representative is divisible by $2$ or $3$. Thus [L1] and [L2] give the displayed unit group and $\varphi(12)=4$. [L1, L2]

1.2 The congruences $5^2=25\equiv1$, $7^2=49\equiv1$, and $11^2=121\equiv1\pmod{12}$ show that the three nonidentity units, as well as $[1]_{12}$, are self-inverse. [L2, F1, F2]

2.1 Since $12=2^2\cdot3$, [L3] independently gives $\varphi(12)=(2^2-2)(3-1)=2\cdot2=4$, agreeing with the list. [step 1.1, L3] ∎
