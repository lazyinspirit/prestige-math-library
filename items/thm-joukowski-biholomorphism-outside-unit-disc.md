---
id: thm-joukowski-biholomorphism-outside-unit-disc
kind: theorem
title: "The Joukowski map is a biholomorphism from the exterior disc onto $\\mathbb{C}\\setminus[-1,1]$"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-slit-plane-root-branch-biholomorphism-to-a-sector, thm-homological-simple-connectivity-equivalences]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Lars V. Ahlfors, Complex Analysis, 3rd ed., Ch. 3 §4.2"
      url: "https://people.math.gatech.edu/~mccuan/courses/6321/lars-ahlfors-complex-analysis-third-edition-mcgraw-hill-science_engineering_math-1979.pdf"
    - title: "Elias M. Stein and Rami Shakarchi, Complex Analysis, Ch. 8 §1.2"
      url: "https://zr9558.com/wp-content/uploads/2013/11/complex_analysis-stein-shakarchi.pdf"
---

## Statement

Let

$$E:=\{z\in\mathbb C:|z|>1\},\qquad \Omega:=\mathbb C\setminus[-1,1],$$

and define the Joukowski map by

$$J(z):=\frac12\left(z+\frac1z\right)\qquad(z\in E).$$

Then $J:E\to\Omega$ is a biholomorphism.

## Facts & Assumptions

**Given:** The exterior disc $E$, the slit-complement $\Omega$, and the map $J$ above.

[F1] For $n=2$, the slit-plane root branch
$R_2(t)=\exp(\operatorname{Log}t/2)$ is a biholomorphism from
$\mathbb C\setminus\{x\in\mathbb R:x\le0\}$ onto the right half-plane
$\{s\in\mathbb C:\operatorname{Re}s>0\}$, with inverse $s\mapsto s^2$
([[thm-slit-plane-root-branch-biholomorphism-to-a-sector]]).

## Proof

**Proof technique:** direct.

1.1 For $w\in\Omega$, put $m(w):=(w-1)/(w+1)$. If $m(w)$ were a nonpositive real number, then $w=(1+m(w))/(1-m(w))$ would lie in $[-1,1]$, contradicting $w\in\Omega$; also $m(w)\ne1$ because $(w-1)/(w+1)=1$ has no finite solution. Hence $m$ maps $\Omega$ holomorphically into the slit plane of [F1]. Define $s(w):=R_2(m(w))$, so $\operatorname{Re}s(w)>0$ for every $w\in\Omega$. [F1, given, construct, algebra]

2.1 Define $H(w):=(1+s(w))/(1-s(w))$ on $\Omega$. Since $s(w)\ne1$, this is holomorphic there; using $s(w)^2=m(w)$ gives $J(H(w))=\frac12\left(\frac{1+s}{1-s}+\frac{1-s}{1+s}\right)=\frac{1+s^2}{1-s^2}=\frac{1+m(w)}{1-m(w)}=w$, and $|1+s(w)|^2-|1-s(w)|^2=4\operatorname{Re}s(w)>0$ yields $|H(w)|>1$, so $H(\Omega)\subseteq E$. [F1, step 1.1, algebra]

3.1 For $z\in E$, put $s:=(z-1)/(z+1)$. Then $\operatorname{Re}s=(|z|^2-1)/|z+1|^2>0$, so $s$ lies in the right half-plane, and a direct calculation gives $(J(z)-1)/(J(z)+1)=((z-1)/(z+1))^2=s^2$. By [F1], the right-half-plane inverse of squaring is exactly $R_2$, so $R_2((J(z)-1)/(J(z)+1))=s$, and substituting this into the definition of $H$ yields $H(J(z))=(1+s)/(1-s)=z$. [F1, step 2.1, algebra]

4.1 Steps 2.1 and 3.1 show that $J$ and $H$ are holomorphic two-sided inverses between $E$ and $\Omega$. Therefore $J:E\to\Omega$ is a biholomorphism. [step 2.1, step 3.1] ∎
