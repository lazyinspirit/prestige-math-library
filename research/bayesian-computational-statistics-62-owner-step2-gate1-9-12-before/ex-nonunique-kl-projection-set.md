---
id: ex-nonunique-kl-projection-set
kind: example
title: "A nonunique KL projection set need not select one parameter"
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 1
deps:
  - def-axiom-of-choice
  - def-kl-projection-set-and-relative-kl-neighborhoods
  - thm-kolmogorov-iid-l1-strong-law
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  references:
    - title: "B. J. K. Kleijn and A. W. van der Vaart, The Bernstein-Von-Mises Theorem under Misspecification, Corollary 4.2, p. 379"
      url: "https://pure.uva.nl/ws/files/1850322/114737_376240.pdf"
---

## Example

On $\mathsf X=\{0,1\}$ with counting measure, let
$p_0(0)=3/5$, $p_0(1)=2/5$;
$p_a(0)=p_a(1)=p_b(0)=p_b(1)=1/2$; and
$p_c(0)=1/5$, $p_c(1)=4/5$. Give prior probabilities
$\Pi(a)=\Pi(b)=1/4$ and $\Pi(c)=1/2$. On the labels $\{a,b,c\}$ use
$\rho(u,v)=0$ for $u=v$ and $1$ otherwise.
Take $X_1,X_2,\ldots$ IID with law $P_0$.

## Facts & Assumptions

**Given:** The finite model, prior, and IID sampling law in the Example.

[F1] [[def-kl-projection-set-and-relative-kl-neighborhoods]]: the KL
projection is the full set of parameters minimizing
$\mathrm{KL}(P_0\Vert P_\theta)$.

[A1] Assume AC through the imported KL convention
[[def-axiom-of-choice]]. No additional choice is used in this finite model.

[F2] [[thm-kolmogorov-iid-l1-strong-law]]: integrable IID real variables
have sample means converging almost surely to their expectation.

## Verification




1.1 Since $p_a=p_b$, their KL losses are equal. Direct calculation gives $K(c)-K(a) =\frac35\log\frac{1/2}{1/5}+\frac25\log\frac{1/2}{4/5} =\frac35\log\frac52+\frac25\log\frac58 =\frac15\log\frac{3125}{512}>0.$ Thus the minimizer set is $\Theta^*=\{a,b\}$. [A1, F1, algebra]

2.1 The likelihoods at $a$ and $b$ agree for every data vector, so their posterior odds remain $\Pi(a)/\Pi(b)=1$. The posterior odds of $c$ against $a$ have log equal to $\log(\Pi(c)/\Pi(a))+\sum_{i=1}^n\log(p_c(X_i)/p_a(X_i))$. By [F2], the sum divided by $n$ tends almost surely to $-(K(c)-K(a))<0$. Hence the posterior mass of $c$, the complement of $\Theta^*$, tends to zero while the posterior never selects one of $a,b$ over the other. [F1, F2, algebra] ∎

