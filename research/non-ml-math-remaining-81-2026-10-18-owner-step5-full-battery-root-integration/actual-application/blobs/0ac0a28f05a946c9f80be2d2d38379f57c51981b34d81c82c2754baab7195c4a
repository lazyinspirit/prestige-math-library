---
id: lem-hh-affine-hecke-bernstein-quotients-are-well-defined
kind: lemma
title: "The Bernstein cross-relation quotients are Laurent polynomials"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 3
deps: [def-hh-affine-hecke-bernstein-presentation, def-abstract-root-datum-and-its-weyl-group]
justified_by: []
aliases: []
proof_strategy: direct
verification:
  precheck: pass
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Maarten Solleveld, Affine Hecke Algebras and Their Representations"
      url: "https://arxiv.org/pdf/2009.03007"
      locator: "§1.3, Definition 1.6, PDF p. 10: divisibility in the Bernstein cross-relations in both parameter cases."
    - title: "Dan Ciubotaru, Tutorial on Affine Hecke Algebras"
      url: "https://imsarchives.nus.edu.sg/oldwww/Programs/016theory/files/dan.pdf"
      locator: "§3, Theorem 3.1 and the following discussion, PDF p. 5: divisibility of theta_y minus theta_s(y) by the root or doubled-root denominator."
---

## Statement

Let $R=(X,\Phi,Y,\Phi^\vee,\Delta)$ be the reduced based root datum and let $\mathbb C[Y]$ and the reflection action be as in [[def-hh-affine-hecke-bernstein-presentation]]. For every $\alpha\in\Delta$ and $y\in Y$,

$$
\frac{\theta_y-\theta_{s_\alpha(y)}}{1-\theta_{-\alpha^\vee}}\in\mathbb C[Y]\quad\text{if }\alpha\notin2X,
$$

and

$$
\frac{\theta_y-\theta_{s_\alpha(y)}}{1-\theta_{-2\alpha^\vee}}\in\mathbb C[Y]\quad\text{if }\alpha\in2X.
$$

## Facts & Assumptions

**Given:** A reduced based root datum $R=(X,\Phi,Y,\Phi^\vee,\Delta)$, a simple root $\alpha\in\Delta$, and an element $y\in Y$.

[F1] The root datum has an integral perfect pairing, and its simple reflection acts by $s_\alpha(y)=y-\langle\alpha,y\rangle\alpha^\vee$ with $\langle\alpha,y\rangle\in\mathbb Z$ ([[def-abstract-root-datum-and-its-weyl-group]]).

[F2] The group algebra $\mathbb C[Y]$ has basis $\{\theta_z:z\in Y\}$ and multiplication $\theta_z\theta_{z'}=\theta_{z+z'}$ ([[def-hh-affine-hecke-bernstein-presentation]]).

## Proof

**Given:** The data above. Put $n=\langle\alpha,y\rangle\in\mathbb Z$ and $u=\theta_{-\alpha^\vee}$.

1.1 By [F1], $s_\alpha(y)=y-n\alpha^\vee$, so by [F2] the numerator is $\theta_y(1-u^n)$. If $n>0$, then $(1-u^n)/(1-u)=1+u+\cdots+u^{n-1}$; if $n=0$, the quotient is zero; and if $n=-k<0$, then $(1-u^n)/(1-u)=-u^{-k}(1+u+\cdots+u^{k-1})$. Each expression is a finite Laurent polynomial, proving the first assertion. [F1, F2, given, algebra]

2.1 If $\alpha\in2X$, write $\alpha=2\beta$ with $\beta\in X$. Then $n=\langle2\beta,y\rangle=2\langle\beta,y\rangle=2m$ for an integer $m$. With $u=\theta_{-\alpha^\vee}$, the numerator is $\theta_y(1-u^{2m})$. For $m>0$, $(1-u^{2m})/(1-u^2)=1+u^2+\cdots+u^{2m-2}$; for $m=0$ it is zero; and for $m<0$ the same finite negative-power identity from step 1.1, applied to $u^2$, is a Laurent polynomial. Since $1-u^2=1-\theta_{-2\alpha^\vee}$, the second assertion follows. [F1, F2, step 1.1, algebra] ∎
