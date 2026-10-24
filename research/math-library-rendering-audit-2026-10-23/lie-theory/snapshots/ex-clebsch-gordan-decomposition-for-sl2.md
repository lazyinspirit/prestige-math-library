---
id: ex-clebsch-gordan-decomposition-for-sl2
kind: example
title: The Clebsch--Gordan tensor decomposition for sl2
status: published
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 9
deps:
  - def-axiom-of-choice
  - def-tensor-product-multiplicity-for-highest-weight-modules
  - cor-racah-speiser-tensor-product-algorithm
  - thm-finite-dimensional-representations-of-sl-two
  - thm-highest-weight-classification-of-finite-dimensional-irreducible-representations
  - prop-root-systems-of-the-classical-complex-lie-algebras
  - def-classical-complex-matrix-lie-algebras
  - def-integral-dominant-and-strictly-dominant-weights
  - def-weyl-vector-rho-for-a-chosen-positive-system
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "A. W. Knapp, Lie Groups Beyond an Introduction, 2nd ed., Birkhäuser 2002"
      url: "https://www.math.stonybrook.edu/~aknapp/download/Beyond2-clickable.pdf"
      locator: "Ch. IX §8 Problem 17 with its printed solution, printed pp. 611--612 and 747--748 (the Steinberg/Racah--Speiser formula; specialization to $A_1$ gives the Clebsch--Gordan decomposition)."
    - title: "P. Etingof, Lie Groups and Lie Algebras II (MIT 18.755, Spring 2024), complete lecture notes"
      url: "https://ocw.mit.edu/courses/18-755-lie-groups-and-lie-algebras-ii-spring-2024/mit18_755_s24_lec_full.pdf"
      locator: "§26.1--26.3, printed pp. 138--142 (weights and characters of $\\mathfrak{sl}_2$-modules); §27.1, printed p. 145."
---

## Example

Assume the Axiom of Choice. Take $\mathfrak g=\mathfrak{sl}_2$ with positive
root $\alpha$ and Weyl group $W=\{1,s\}$, so that $\rho=\alpha/2=:\omega$ and
the dominant integral weights are $m\omega$, $m\ge0$
([[prop-root-systems-of-the-classical-complex-lie-algebras]],
[[def-classical-complex-matrix-lie-algebras]],
[[def-integral-dominant-and-strictly-dominant-weights]],
[[def-weyl-vector-rho-for-a-chosen-positive-system]]). For an integer $m\ge0$ let
$L(m)=L(m\omega)$ be the finite-dimensional simple module of highest weight
$m\omega$; it has dimension $m+1$ and weights
$m\omega,(m-2)\omega,\dots,-m\omega$, each of multiplicity one
([[thm-finite-dimensional-representations-of-sl-two]],
[[thm-highest-weight-classification-of-finite-dimensional-irreducible-representations]]).
Then for all integers $a,b\ge0$ the tensor-product multiplicities of
[[def-tensor-product-multiplicity-for-highest-weight-modules]] are
$$c^{c}_{ab}=\begin{cases}1,&|a-b|\le c\le a+b,\ c\equiv a+b\ (\mathrm{mod}\ 2),\\0,&\text{otherwise,}\end{cases} \qquad\text{equivalently}\qquad L(a)\otimes L(b)\cong\bigoplus_{j=0}^{\min(a,b)}L(a+b-2j).$$
In particular there are exactly $\min(a,b)+1$ simple summands, with extreme
summands $L(a+b)$ and $L(|a-b|)$. The number matches the Racah--Speiser sum of
[[cor-racah-speiser-tensor-product-algorithm]]: in the $\rho=\omega$
normalisation a weight $\varphi$ of $L(b)$ is irregular relative to $a\omega$
exactly when $\varphi+a\omega+\rho=0$, i.e. $\varphi=-(a+1)\omega$, which is a
weight of $L(b)$ exactly when $a+1\le b$ and $a+b$ is odd; the remaining $b+1$ (or $b$) weights
contribute $\pm1$, and the contributions with sign $-1$ cancel the
overlapping range $0\le c\le b-a-2$ when $a<b$, leaving exactly the
multiplicities $1$ above.

## Facts & Assumptions

**Given:** AC, integers $a,b\ge0$, $\mathfrak g=\mathfrak{sl}_2$ with $\Phi^+=\{\alpha\}$, $\rho=\omega=\alpha/2$, $W=\{1,s\}$ where $s$ acts by $s(\lambda\omega)=-\lambda\omega$, and the modules $L(m)=L(m\omega)$ of dimension $m+1$ with weights $(m-2j)\omega$, $j=0,\dots,m$, of multiplicity one.

[F1] Racah--Speiser algorithm: for dominant integral $\lambda,\mu$,
$$c^\nu_{\lambda\mu}=\sum_{\substack{\varphi\text{ weight of }L(\mu)\\ \varphi\text{ regular relative to }\lambda,\ \nu(\varphi)=\nu}}(-1)^{\ell(u(\varphi))}m_\mu(\varphi),$$
where $\varphi$ is regular relative to $\lambda$ when
$\psi+\rho=\varphi+\lambda+\rho$ is fixed by no reflection, $u(\varphi)$ is
the unique element of $W$ with $u(\varphi)(\psi+\rho)$ strictly dominant, and
$\nu(\varphi)=u(\varphi)(\psi+\rho)-\rho$; irregular weights are discarded and
every $\nu$ with $c^\nu_{\lambda\mu}\ne0$ occurs as $\nu(\varphi)$ for a
regular weight $\varphi$
([[cor-racah-speiser-tensor-product-algorithm]]).

[F2] The reflections of $W=\{1,s\}$ act on weights by $s(\lambda\omega)=-\lambda\omega$; an element $\chi\omega$ is strictly dominant exactly when $\chi>0$, and $u(\varphi)=1$ for a regular weight $\varphi$ with $\varphi+\lambda+\rho>0$, while $u(\varphi)=s$ when $\varphi+\lambda+\rho<0$. The trivial Weyl group element has length $0$ and the reflection has length $1$ ([[def-weyl-vector-rho-for-a-chosen-positive-system]], [[prop-root-systems-of-the-classical-complex-lie-algebras]], [[cor-racah-speiser-tensor-product-algorithm]], [[def-integral-dominant-and-strictly-dominant-weights]]).

[F3] A weight $\varphi=(b-2j)\omega$ of $L(b)$ is irregular relative to $a\omega$ exactly when $\varphi=-(a+1)\omega$, i.e. $b-2j=-(a+1)$ or equivalently $2j=a+b+1$; this happens for a unique $j$ exactly when $a+b$ is odd and $0\le j\le b$, which for $a,b\ge0$ means $a<b$ and $j=(a+b+1)/2$, and this weight exists automatically in that case. Sums of weights are computed in the one-dimensional space $\mathbb R\omega$ ([[cor-racah-speiser-tensor-product-algorithm]], [[thm-finite-dimensional-representations-of-sl-two]]).

## Verification

1.1 Fix integers $a,b\ge0$ and let $c\ge0$ be an integer; the coefficient to compute is $c^{c\omega}_{a\omega,b\omega}$. By [F1] its value is the alternating sum of the multiplicities $m_b(\varphi)=1$ over the regular weights $\varphi$ of $L(b)$ with $\nu(\varphi)=c\omega$; recall $\lambda=a\omega$, $\mu=b\omega$, $\rho=\omega$. [F1, given, algebra]

1.2 Regularity and the value of $u$. For a weight $\varphi=\varphi_0\omega$ of $L(b)$, the shifted weight $\varphi+a\omega+\rho=(\varphi_0+a+1)\omega$ is fixed by $s$ exactly when it is zero, i.e. $\varphi_0=-(a+1)$. Such a weight exists in $L(b)$ exactly when $a+1\le b$ and $b+a+1$ is even, by [F3]; it is then the unique irregular weight. For every other weight, $\varphi_0+a+1\ne0$, so $u(\varphi)=1$ if $\varphi_0+a+1>0$ and $u(\varphi)=s$ if $\varphi_0+a+1<0$ [F2]. [F1, F2, F3, given, algebra]

2.1 Contributions of the regular weights. Write $\varphi=(b-2j)\omega$, $j=0,\dots,b$, and put $t=\varphi_0+a+1=b-2j+a+1$. If $t>0$, then $\nu(\varphi)=(b-2j+a)\omega$ and the sign is $(-1)^0=+1$; this contributes $+1$ to $c^\nu_{ab}$ with $\nu=b+a-2j$, i.e. to $c=a+b-2j$ with $0\le j<(a+b+1)/2$. If $t<0$, then $u(\varphi)=s$, $\nu(\varphi)=s(t\omega)-\omega=-t\omega-\omega=( -t-1)\omega=(2j-a-b-2)\omega$ and the sign is $(-1)^1=-1$; this contributes $-1$ to the coefficient of $c=2j-a-b-2$. The inequality $t<0$ means $j>(a+b+1)/2$, so $j$ ranges over the integers from $\lfloor(a+b+1)/2\rfloor+1$ to $b$ (if any), and the corresponding $c=2j-a-b-2$ are exactly the integers congruent to $a+b$ modulo $2$ lying in the interval $0\le c\le b-a-2$ when $a+b$ is even and $1\le c\le b-a-2$ when $a+b$ is odd, the empty interval when the bound $b-a-2$ is negative. [F1, F2, step 1.2, algebra]

3.1 The $+1$ family has $0\le j\le\min(b,\lfloor(a+b)/2\rfloor)$, so its output weights are exactly the integers $c\equiv a+b\pmod2$ with $\max(0,a-b)\le c\le a+b$. If $b\le a$, there is no $-1$ family, and the least output is $a-b$. If $b>a$, the $-1$ family of step 2.1 cancels exactly the same-parity $+1$ outputs below $b-a$, namely $0\le c\le b-a-2$. In either case the survivors are precisely $|a-b|\le c\le a+b$ with the stated parity, each with coefficient one; all other coefficients are zero. [F1, step 1.2, step 2.1, algebra]

4.1 Reading the multiplicities: the values $c$ with $c^c_{ab}=1$ are $a+b, a+b-2, \dots, |a-b|$, exactly $\min(a,b)+1$ values, with extremes $a+b$ and $|a-b|$; hence $L(a)\otimes L(b)\cong\bigoplus_{j=0}^{\min(a,b)}L(a+b-2j)$, and the dimension check is $\sum_{j=0}^{\min(a,b)}(a+b-2j+1)=(a+1)(b+1)=\dim L(a)\dim L(b)$. [F1, step 3.1, algebra] ∎
