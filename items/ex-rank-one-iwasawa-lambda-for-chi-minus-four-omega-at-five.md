---
id: ex-rank-one-iwasawa-lambda-for-chi-minus-four-omega-at-five
kind: example
title: 'A rank-one character with $\lambda_5=1$'
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 7
deps:
  - cor-total-ramification-in-a-prime-power-cyclotomic-field
  - def-generalized-bernoulli-number
  - def-iwasawa-mu-lambda-invariants-of-power-series
  - def-iwasawa-power-series-attached-to-dirichlet-character
  - def-dirichlet-character-modulo-q
  - def-primitive-dirichlet-character-and-conductor
  - def-teichmuller-character-on-zp-units
  - lem-chinese-remainder-two-moduli
  - lem-p-adic-power-series-cyclotomic-twist-valuation
  - thm-dirichlet-l-special-values-via-generalized-bernoulli-numbers
  - thm-kubota-leopoldt-dirichlet-character-interpolation
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "H. Knospe, Special Values of p-adic L-functions and Iwasawa λ-invariants of Dirichlet characters"
      url: "https://link.springer.com/content/pdf/10.1007/s40993-026-00762-x.pdf"
      locator: "Theorem 5.2(i), printed pp. 10–11"
    - title: "H. Knospe, Special values of p-adic L-functions and Iwasawa lambda-invariants of Dirichlet characters, arXiv:2401.06100v3"
      url: "https://arxiv.org/pdf/2401.06100"
      locator: "Theorem 5.2(i), arXiv v3, printed pp. 11–12"
verification: {}
---

## Example

Let $p=5$, define the primitive quadratic character $\theta$ modulo $4$ by $\theta(a)=0$ for even $a$, $\theta(a)=1$ for $a\equiv1\pmod4$, and $\theta(a)=-1$ for $a\equiv3\pmod4$, and put $\chi=\theta\omega$. Assume as inputs an Iwasawa power series $F_\chi$ satisfying its stated interpolation relation and a finite certificate that one of its coefficients is a $5$-adic unit. Then $\mu(F_\chi)=0$, $\chi$ is even, and $\mathcal O_\chi=\mathbb Z_5$ with $e_\chi=1$. Let $\psi_1$ be trivial on the Teichmüller roots of unity and satisfy $\psi_1(6)=\zeta_5^{-1}$ on the order-five quotient $(1+5\mathbb Z_5)/(1+25\mathbb Z_5)$. The generalized Bernoulli number of the primitive product character modulo $100$ is
$$B_{1,\theta\psi_1}=2(\zeta_5^3-\zeta_5^2)=2\zeta_5^2(\zeta_5-1).$$
Since $v_5(\zeta_5-1)=1/4$, the local interpolation calculation gives $v_5(F_\chi(\zeta_5-1))=1/4<1/e_\chi$. The degree $\lambda(F_\chi)$ of the distinguished factor is therefore $1$ by the cyclotomic-twist valuation formula at $n=1$. This is a conditional exact example with the stated series and finite unit-coefficient certificate as inputs; it does not invoke an unproved Ferrero–Washington argument.

## Example references

[H. Knospe, *Special Values of p-adic L-functions and Iwasawa λ-invariants of Dirichlet characters*, Theorem 5.2(i), printed pp. 10–11](https://link.springer.com/content/pdf/10.1007/s40993-026-00762-x.pdf)

## Facts & Assumptions

**Given:** The finite $\mu=0$ coefficient certificate for $F_\chi$, the exact character data, and the compatible primitive root $\zeta_5$.

[F1] $B_{1,\theta\psi_1}=\sum_{a=1}^{100}\theta(a)\psi_1(a)B_1(a/100)$, with $B_1(X)=X-1/2$. [[def-generalized-bernoulli-number]]

[F2] The Teichmüller character has values in $\mathbb Z_5^\times$ and satisfies $\omega(-1)=-1$. [[def-teichmuller-character-on-zp-units]]

[F3] A Dirichlet character is multiplicative on units and zero on nonunits; the displayed function $\theta$ is primitive of conductor $4$. [[def-dirichlet-character-modulo-q]] [[def-primitive-dirichlet-character-and-conductor]]

[F4] Coprime moduli $4$ and $25$ determine a unique simultaneous residue class modulo $100$. [[lem-chinese-remainder-two-moduli]]

[F5] For a primitive character $\alpha$ modulo $f$ and $r\ge1$, $L(1-r,\alpha)=-B_{r,\alpha}/r$. [[thm-dirichlet-l-special-values-via-generalized-bernoulli-numbers]]

[F6] For the nontrivial tame character $\theta$ and branch $\chi=\theta\omega$, the interpolation relation gives $L_p(0,\chi\psi_1)=L(0,\theta\psi_1)$ because $\psi_1(5)=0$. [[thm-kubota-leopoldt-dirichlet-character-interpolation]]

[F7] The attached Iwasawa series satisfies $F_\chi(\zeta_\psi(1+p)^s-1)=L_p(s,\chi\psi)$ when the branch values are defined. [[def-iwasawa-power-series-attached-to-dirichlet-character]]

[F8] If $\mu(F_\chi)=0$, then $v_p(F_\chi(\zeta_{p^n}(1+p)^{1-k}-1))<1/e_\chi$ implies that this valuation equals $\lambda(F_\chi)/((p-1)p^{n-1})$. [[lem-p-adic-power-series-cyclotomic-twist-valuation]]

[A1] The finite coefficient certificate is a supplied input, not a proof of universal $\mu=0$; no Ferrero–Washington argument is used. [[def-iwasawa-mu-lambda-invariants-of-power-series]]

## Proof

**Given:** The data and certificate above.

1.1 On $(\mathbb Z/4\mathbb Z)^\times=\{1,3\}$, the stated map $\theta$ is a nontrivial homomorphism, and neither modulus $1$ nor $2$ can induce it because both have trivial unit group; hence it is primitive of conductor $4$ and $\theta(-1)=-1$. Since $\omega(-1)=-1$, $\chi$ is even. Its values lie in $\mathbb Q_5$, so $\mathcal O_\chi=\mathbb Z_5$ and $e_\chi=1$. The choice $i=1$ gives $k=i=1$ and $e_1=(5-1)5^0=4$. [F2, F3, given, algebra]

1.2 The Teichmüller lifts modulo $25$ are $t(1)=1,t(2)=7,t(3)=18,t(4)=24$, and $6^m\bmod25$ for $m=0,1,2,3,4$ are $1,6,11,16,21$. For each $r=1,2,3,4$, set $b=t(r)6^m\bmod25$ and choose the unique representatives $a_1,a_3\in\{1,\ldots,100\}$ with $a_1\equiv b\pmod{25}$, $a_1\equiv1\pmod4$, $a_3\equiv b\pmod{25}$, and $a_3\equiv3\pmod4$; uniqueness follows from [F3]. In order $r=1,2,3,4$, the pairs are $m=0:(1,51),(57,7),(93,43),(49,99)$; $m=1:(81,31),(17,67),(33,83),(69,19)$; $m=2:(61,11),(77,27),(73,23),(89,39)$; $m=3:(41,91),(37,87),(13,63),(9,59)$; $m=4:(21,71),(97,47),(53,3),(29,79)$. Direct subtraction gives $C_m=\sum_r(a_1-a_3)$ equal to $0,0,200,-200,0$ for $m=0,1,2,3,4$, respectively. [F1, F2, F3, given, algebra]

2.1 For fixed $m$, the two lifts have $\theta(a_1)=1$ and $\theta(a_3)=-1$, while $\psi_1(a_1)=\psi_1(a_3)=\zeta_5^{-m}$. Since $B_1(X)=X-1/2$, their combined contribution to [F1] is $\zeta_5^{-m}(B_1(a_1/100)-B_1(a_3/100))=((a_1-a_3)/100)\zeta_5^{-m}$. Summing the values in step 1.2 gives $B_{1,\theta\psi_1}=\frac1{100}\sum_mC_m\zeta_5^{-m}=2(\zeta_5^{-2}-\zeta_5^{-3})=2(\zeta_5^3-\zeta_5^2)$. [F1, F3, F4, step 1.2, algebra]

2.2 Since $2\zeta_5^2$ is a $5$-adic unit, [F4] gives $v_5(B_{1,\theta\psi_1})=1/4$. At $s=0$, the interpolation statement [F6] and special-value formula [F5] give $L_p(0,\chi\psi_1)=-B_{1,\theta\psi_1}$. The series identity [F7] has argument $\zeta_5(1+5)^0-1=\zeta_5-1$, so $v_5(F_\chi(\zeta_5-1))=1/4$. Since $e_1=4$ and $1/4<1/e_\chi=1$, [F8] yields $\lambda(F_\chi)=4(1/4)=1$. The use of [F8] requires the supplied certificate [A1]. [F4, F5, F6, F7, F8, A1, step 1.1, step 2.1] ∎
