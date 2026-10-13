---
id: thm-nrqm-orbital-and-spin-legendre-rodrigues-equation
aliases: [nrqm-orbital-and-spin-legendre-rodrigues-equation]
kind: theorem
domain: mathematics
title: "Legendre Rodrigues equation"
status: published
origin: pipeline
dependency_level: 0
deps: [def-derivative, lem-derivative-of-a-power, thm-algebra-of-derivatives, thm-general-leibniz-rule, thm-binomial-theorem-over-a-commutative-ring, def-polynomial-ring-over-a-commutative-ring, def-polynomial-degree-leading-coefficient-and-monic, def-polynomial-evaluation-and-root, def-factorial-and-falling-factorial, def-binomial-coefficient, thm-binomial-closed-formula, def-natural-numbers, def-finite-sum-in-a-commutative-monoid]
dependency_roles:
  def-derivative: mathematical-premise
  lem-derivative-of-a-power: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
  thm-general-leibniz-rule: mathematical-premise
  thm-binomial-theorem-over-a-commutative-ring: mathematical-premise
  def-polynomial-ring-over-a-commutative-ring: mathematical-premise
  def-polynomial-degree-leading-coefficient-and-monic: mathematical-premise
  def-polynomial-evaluation-and-root: mathematical-premise
  def-factorial-and-falling-factorial: mathematical-premise
  def-binomial-coefficient: mathematical-premise
  thm-binomial-closed-formula: mathematical-premise
  def-natural-numbers: mathematical-premise
  def-finite-sum-in-a-commutative-monoid: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "S. Axler, P. Bourdon, W. Ramey, Harmonic Function Theory, 2nd edition, author-hosted full text, Chapter 5 (Harmonic Polynomials), printed pp. 77-105 (zonal harmonics and their explicit polynomials, (5.38))"
      url: "https://www.axler.net/HFT.pdf"
    - title: "NIST Digital Library of Mathematical Functions, §18.5(ii), Rodrigues formulas, Table 18.5.1 (Legendre row)"
      url: "https://dlmf.nist.gov/18.5"
    - title: "NIST Digital Library of Mathematical Functions, §14.7(ii), equations (14.7.8) and (14.7.13) (Ferrers associated Legendre and Legendre Rodrigues formulas)"
      url: "https://dlmf.nist.gov/14.7"
---

## Statement

For $l\in\mathbb N=\{0,1,2,\dots\}$ define the function $P_l:\mathbb R\to\mathbb R$ by the Rodrigues formula
([[def-derivative]])

$$P_l(t):=\frac1{2^ll!}\frac{d^l}{dt^l}\bigl[(t^2-1)^l\bigr].$$

Then:

(a) each $P_l$ is the polynomial function of the polynomial
$$p_l(t)=\frac1{2^ll!}\sum_{k:\ 2k\ge l}^{l}(-1)^{l-k}\binom lk\frac{(2k)!}{(2k-l)!}t^{2k-l}\ \in\mathbb R[t]$$
(so the two expressions agree at every real $t$, [[def-polynomial-evaluation-and-root]]), $p_l$ has degree $l$ with
leading coefficient $\dfrac{(2l)!}{2^l(l!)^2}\ne0$ ([[def-polynomial-degree-leading-coefficient-and-monic]]);

(b) $P_l(1)=1$ and $P_l(-1)=(-1)^l$;

(c) $P_l$ satisfies Legendre's differential equation on $\mathbb R$:
$$(1-t^2)P_l''(t)-2tP_l'(t)+l(l+1)P_l(t)=0\qquad(t\in\mathbb R);$$

(d) $P_0=1$, $P_1(t)=t$ and $P_2(t)=\frac12(3t^2-1)$.

No probability, measure or physical interpretation is attached to $P_l$; this item constructs the polynomials
that later items use as angular functions.

## Facts & Assumptions

**Given:** $l\in\mathbb N$; the function $F_l(t):=(t^2-1)^l$; the function $P_l$ defined by the Rodrigues formula; the polynomial $p_l$ displayed in (a).

[F1] The derivative of $t^0=1$ is $0$; for $n\ge1$, $\frac{d}{dt}t^n=nt^{n-1}$. Iterating this formula and the factorial recursion gives $\frac{d^m}{dt^m}t^n=\frac{n!}{(n-m)!}t^{n-m}$ for $0\le m\le n$ while $\frac{d^m}{dt^m}t^n=0$ for $m>n$; derivatives are linear and satisfy the product and power rules ([[lem-derivative-of-a-power]], [[thm-algebra-of-derivatives]], [[def-derivative]]).

[F2] The general Leibniz rule: for $m$-times differentiable $f,g$, $(fg)^{(m)}=\sum_{j=0}^{m}\binom mj f^{(j)}g^{(m-j)}$ ([[thm-general-leibniz-rule]]).

[F3] The binomial coefficients satisfy $\binom lk=\frac{l!}{k!(l-k)!}$, $\binom l0=\binom ll=1$, and $n!=(n-1)!\,n$ for $n\ge1$, with $0!=1$ ([[thm-binomial-closed-formula]], [[def-binomial-coefficient]], [[def-factorial-and-falling-factorial]], [[def-natural-numbers]]).

[F4] Polynomial evaluation is a ring homomorphism $\mathbb R[t]\to\mathbb R$, $p\mapsto p(t)$, compatible with addition and multiplication, and a nonzero polynomial of degree $d$ has leading coefficient the coefficient of $t^d$ ([[def-polynomial-ring-over-a-commutative-ring]], [[def-polynomial-evaluation-and-root]], [[def-polynomial-degree-leading-coefficient-and-monic]]).

[F5] The binomial theorem over a commutative ring: $(x+y)^n=\sum_{k=0}^n\binom nkx^ky^{n-k}$ in every commutative ring and for all elements $x,y$ ([[thm-binomial-theorem-over-a-commutative-ring]]).



## Proof

1.1 [(a), expansion] By [F5] applied in the polynomial ring to $x=t^2$ and $y=-1$, $F_l(t)=\sum_{k=0}^{l}\binom lk(-1)^{l-k}t^{2k}$ as polynomials; differentiating $l$ times termwise with [F1] and [F4] (the sum is finite, so linearity applies), every term with $2k<l$ differentiates to $0$ and every term with $2k\ge l$ contributes $\binom lk(-1)^{l-k}\frac{(2k)!}{(2k-l)!}t^{2k-l}$; hence $P_l$ agrees with the polynomial $p_l$ of the Statement. All exponents $2k-l$ with $2k\ge l$ are nonnegative, and the largest is $2l-l=l$, attained only at $k=l$ with coefficient $(2l)!/l!\ne0$ by [F3]; so $p_l$ has degree $l$ and leading coefficient $(2l)!/(l!\cdot2^l l!)=(2l)!/(2^l(l!)^2)$, which is nonzero. [given, F1, F3, F4, F5, algebra]

1.2 [(b), endpoint values] By the factorisation $F_l=(t-1)^l(t+1)^l$ and [F2], the $l$-th derivative at $t=1$ is $\sum_{j=0}^{l}\binom lj\frac{d^j}{dt^j}(t-1)^l\big|_{t=1}\cdot\frac{d^{l-j}}{dt^{l-j}}(t+1)^l\big|_{t=1}$, and every term with $j<l$ vanishes because $\frac{d^j}{dt^j}(t-1)^l$ still contains a factor $(t-1)$; the surviving term is $l!\cdot(1+1)^l=l!2^l$ by [F1], [F3], so $P_l(1)=\frac{l!2^l}{2^ll!}=1$. The same computation at $t=-1$ gives $l!\cdot(-1-1)^l=(-1)^ll!2^l$, so $P_l(-1)=\frac{(-1)^ll!2^l}{2^ll!}=(-1)^l$. [given, F1, F2, F3, algebra]

1.3 [(c), Legendre's equation] If $l=0$, then $P_0=1$ and the equation is immediate. Suppose $l\ge1$. Differentiating $F_l=(t^2-1)^l$ with [F1] gives $F_l'=2lt(t^2-1)^{l-1}$, hence $(t^2-1)F_l'=2ltF_l$. Apply $\frac{d^{l+1}}{dt^{l+1}}$ to both sides using [F2]; on the left the third and higher derivatives of $t^2-1$ vanish, so $(t^2-1)F_l^{(l+2)}+(l+1)(2t)F_l^{(l+1)}+\binom{l+1}{2}(2)F_l^{(l)}$, and on the right $2l\bigl(tF_l^{(l+1)}+(l+1)F_l^{(l)}\bigr)$, where $\binom{l+1}{2}=\frac{l(l+1)}2$ by [F3]; subtracting gives $(t^2-1)F_l^{(l+2)}+2tF_l^{(l+1)}-l(l+1)F_l^{(l)}=0$. Since $P_l=\frac1{2^ll!}F_l^{(l)}$ is exactly the $l$-fold derivative, dividing by the nonzero constant and multiplying by $-1$ yields $(1-t^2)P_l''-2tP_l'+l(l+1)P_l=0$ at every real $t$: the displayed polynomial identity holds for the polynomial $p_l$ by [F4]. [given, F1, F2, F3, F4, algebra]

2.1 [(d)] For $l=0$, $P_0=1$; for $l=1$, $P_1(t)=\frac12\frac{d}{dt}(t^2-1)=t$; for $l=2$, $P_2(t)=\frac18\frac{d^2}{dt^2}(t^4-2t^2+1)=\frac18(12t^2-4)=\frac{3t^2-1}{2}$ by [F1]. [given, F1, algebra] ∎

The identities proved here are polynomial identities in one real variable; the item makes no angular, measure or spectral claim.
