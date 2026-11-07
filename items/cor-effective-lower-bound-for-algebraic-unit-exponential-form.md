---
id: cor-effective-lower-bound-for-algebraic-unit-exponential-form
kind: corollary
title: "Effective lower bound for a multiplicative expression in fixed algebraic numbers"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 4
deps:
  - lem-certified-number-field-embeddings-and-logarithmic-minors
  - def-number-field
  - thm-explicit-homogeneous-linear-form-in-logarithms-waldschmidt
  - def-axiom-of-choice
  - def-absolute-logarithmic-weil-height-on-projective-space-over-a-number-field
  - def-absolute-multiplicative-weil-height-on-projective-space-over-a-number-field
  - def-complex-logarithms-principal-logarithm-and-complex-powers
  - thm-classification-of-complex-logarithms
  - cor-complex-exponential-cartesian-form-modulus-and-eulers-identity
  - lem-principal-log-near-one-bounded-by-twice-distance
justified_by: []
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Michel Waldschmidt, Linear Independence of Logarithms of Algebraic Numbers, IMSc Report 116 (1992), Theorem 10.1"
      url: "https://www.imsc.res.in/xmlui/bitstream/handle/123456789/318/MR116.pdf?isAllowed=y&sequence=1"
    - title: "Jan-Hendrik Evertse, Diophantine Equations (2017 author notes), Chapter 5, Corollary 5.3"
      url: "https://pub.math.leidenuniv.nl/~evertsejh/dio17-5.pdf"
verification: {}
proof_strategy: direct
---

## Statement

Assume the Axiom of Choice. Let $K$ be a number field, let $s\ge1$, fix $\alpha_1,\ldots,\alpha_s\in K^\times$, and let $b_1,\ldots,b_s\in\mathbb Z$ satisfy $M:=\prod_{j=1}^s\alpha_j^{b_j}\ne1$. Put $B:=\max_j|b_j|$. Then $B\ge1$, and there is an effectively computable constant $C>0$, depending only on the fixed numbers $\alpha_1,\ldots,\alpha_s$ and $s$, such that
$$
|M-1|>\exp\!\left(-C[\log(B+2)]^2\right).
$$

## Statement references

[[def-number-field]]

[[def-axiom-of-choice]]

[[thm-explicit-homogeneous-linear-form-in-logarithms-waldschmidt]]

[[def-absolute-logarithmic-weil-height-on-projective-space-over-a-number-field]]

[[def-absolute-multiplicative-weil-height-on-projective-space-over-a-number-field]]

[[def-complex-logarithms-principal-logarithm-and-complex-powers]]

[[thm-classification-of-complex-logarithms]]

[[cor-complex-exponential-cartesian-form-modulus-and-eulers-identity]]

[[lem-principal-log-near-one-bounded-by-twice-distance]]

[Waldschmidt, *Linear Independence of Logarithms of Algebraic Numbers*, Chapter X, Theorem 10.1](https://www.imsc.res.in/xmlui/bitstream/handle/123456789/318/MR116.pdf?isAllowed=y&sequence=1)

[Evertse, *Diophantine Equations*, Chapter 5, Corollary 5.3](https://pub.math.leidenuniv.nl/~evertsejh/dio17-5.pdf)

## Facts & Assumptions

**Given:** The Axiom of Choice, a number field $K$, fixed nonzero algebraic numbers $\alpha_j$, integer exponents $b_j$, and $M=\prod_j\alpha_j^{b_j}\ne1$.

[A1] The homogeneous lower-bound theorem assumes AC through its absolute number-field height normalization. ([[def-axiom-of-choice]], [[thm-explicit-homogeneous-linear-form-in-logarithms-waldschmidt]])

[F1] The homogeneous theorem states that for algebraic $\alpha_i=e^{\ell_i}$, algebraic coefficients $\beta_i$, and $\Lambda=\sum_i\beta_i\ell_i\ne0$, parameters $A_i,B\ge e$ satisfying $\log A_i\ge h(\alpha_i)$, $D\log A_i\ge e|\ell_i|$, $\log B\ge h(1:\beta_1:\cdots:\beta_m)$, and $B\ge(50mD\log A)^{3m}$ give
$$|\Lambda|>\exp\!\left(-(50m)^{3m}D^{m+2}(\log B)^2\prod_i\log A_i\right).$$
([[thm-explicit-homogeneous-linear-form-in-logarithms-waldschmidt]])

[F2] For a projective point $P=[x_0:\cdots:x_q]$ over a number field of degree $N$, $h(P)=N^{-1}\log H_K(P)$, where $H_K$ uses the norm of the coordinate ideal and the real and complex embedding maxima with exponents $1$ and $2$ respectively. ([[def-absolute-multiplicative-weil-height-on-projective-space-over-a-number-field]], [[def-absolute-logarithmic-weil-height-on-projective-space-over-a-number-field]])

[F3] The principal logarithm satisfies $\exp(\operatorname{Log}z)=z$, has imaginary part in $(-\pi,\pi]$, and all logarithms of a nonzero complex number differ by $2\pi i k$ for an integer $k$; in particular $\operatorname{Log}(-1)=\pi i$. ([[def-complex-logarithms-principal-logarithm-and-complex-powers]], [[thm-classification-of-complex-logarithms]], [[cor-complex-exponential-cartesian-form-modulus-and-eulers-identity]])

[F4] If $|z|\le\tfrac12$, then $|\operatorname{Log}(1+z)|\le2|z|$. ([[lem-principal-log-near-one-bounded-by-twice-distance]])

[F5] Exact field coordinates permit computation of an integral basis and certified embedding enclosures. ([[lem-certified-number-field-embeddings-and-logarithmic-minors]])

## Proof

1.1 Since $M\ne1$, not all exponents vanish, so $B\ge1$. Set $m=s+1$, $D=[\mathbb Q(\alpha_1,\ldots,\alpha_s):\mathbb Q]$, $\ell_j=\operatorname{Log}\alpha_j$ for $1\le j\le s$, and $\ell_m=\pi i=\operatorname{Log}(-1)$. For $j\le s$ put $A_j=\exp(1+h([1:\alpha_j])+e|\ell_j|)$ and put $A_m=\exp(1+e|\ell_m|)$; then every $A_j\ge e$. Define $A=\max_jA_j$, $C_0=\max\{e,(50mD\log A)^{3m},s+2\}$, $q=1+\log C_0/\log3$, $K_0=(50m)^{3m}D^{m+2}\prod_{j=1}^{m}\log A_j$, and $C=K_0q^2+\log2/(\log3)^2$. For the moment these real constants establish the estimate; the final construction below supplies a rational computable majorant without deciding any branch-cut equality. [given, A1, F1, F2, F3, algebra]

2.1 If $|M-1|>\tfrac12$, then $\log(B+2)\ge\log3$ and $C\ge\log2/(\log3)^2$, so $\exp(-C[\log(B+2)]^2)\le\tfrac12<|M-1|$. [given, step 1.1, algebra]

2.2 Suppose $0<|M-1|\le\tfrac12$ and set $L=\operatorname{Log}(1+(M-1))$. By [F4], $|L|\le2|M-1|\le1$, and $L\ne0$ because $\exp(L)=M\ne1$. By [F3], for some $k\in\mathbb Z$, $L=\sum_{j=1}^s b_j\ell_j+2k\ell_m$. Taking imaginary parts and using $|\operatorname{Im}L|\le1$ and $|\operatorname{Im}\ell_j|\le\pi$ gives $|2k|\le1/\pi+sB\le(s+2)(B+2)$. [given, F3, F4, step 1.1, algebra]

3.1 Set $B_0=C_0(B+2)$ and coefficient tuple $(\beta_1,\ldots,\beta_m)=(b_1,\ldots,b_s,2k)$. The projective tuple has first coordinate $1$ and integer coordinates, so its coordinate ideal over $\mathbb Q$ is $\mathbb Z$; [F2] with the single real embedding therefore gives $h(1:\beta_1:\cdots:\beta_m)=\log\max(1,|b_1|,\ldots,|b_s|,|2k|)\le\log B_0$. The choice of $A_j$ gives $\log A_j\ge h([1:\alpha_j])$ and $D\log A_j\ge e|\ell_j|$; also $B_0\ge e$ and $B_0\ge(50mD\log A)^{3m}$. Thus all hypotheses of [F1] hold for $\alpha_1,\ldots,\alpha_s,-1$, their chosen logarithms $\ell_1,\ldots,\ell_m$, and the coefficients above. [A1, F1, F2, step 1.1, step 2.2, algebra]

4.1 Apply [F1] to the nonzero linear form $L$. Since $\log(B+2)\ge\log3$, step 1.1 gives $\log B_0=\log C_0+\log(B+2)\le q\log(B+2)$ and hence $|L|>\exp(-K_0q^2[\log(B+2)]^2)$. From [F4], $|M-1|\ge|L|/2$; the definition of $C$ and $\log(B+2)\ge\log3$ yield $|M-1|>\exp(-C[\log(B+2)]^2)$. The two cases prove the claim. [F1, F4, step 1.1, step 3.1, algebra]

5.1 Here is an exact finite procedure for a computable larger constant. Using exact rational coordinates, compute each monic minimal polynomial by finding the first rational linear dependence among $1,\alpha_j,\alpha_j^2,\ldots$; the ambient field dimension bounds this finite search. Do the same for $\alpha_j^{-1}$. Let $N$ be the product of the degrees of the minimal polynomials of the $\alpha_j$; the tower formula gives $D\le N$. Choose $q_j\ge1$ to be the least common denominator of the coefficients of the monic minimal polynomial of $\alpha_j$. Scaling its variable shows that $q_j\alpha_j$ satisfies a monic integral polynomial. Choose $R_j\ge1$ to be an integer Cauchy root bound for both minimal polynomials, for example the ceiling of $1$ plus the largest absolute value of their nonleading coefficients. The geometric-sum root argument bounds every conjugate modulus of both $\alpha_j$ and $\alpha_j^{-1}$ by $R_j$. These choices depend only on the fixed numbers. Then $|\log|\alpha_j||\le\log R_j\le R_j$, and $|\ell_j|\le R_j+4$ since $\pi<4$. Using coordinates $[q_j:q_j\alpha_j]$ in [F2], their nonzero integral coordinate ideal has norm at least $1$, so $h([1:\alpha_j])\le\log(q_jR_j)\le q_jR_j$. Choose the integer $a_j=1+q_jR_j+3(R_j+4)$ and put $a_m=13$. Since $e<3$, parameters $A_j=\exp(a_j)$ satisfy all the required height and logarithm inequalities, including for $-1$. Put $a=\max a_j$, choose an integer $T\ge\max(3,s+2,(50mNa)^{3m})$, and set $K=(50m)^{3m}N^{m+2}\prod a_j$. The same argument in steps 2.1–4.1 now works with $B_0=T(B+2)$: because $\log3>1$, $\log T\le T$, and $\log2<1$, the integer $C^*=K(1+T)^2+1$ is a sufficient constant. All searches and computations just described are finite exact arithmetic or certified enclosure computations. This proves the asserted effectivity as well as the estimate. [F1, F2, F3, F5, step 4.1, algebra] ∎
