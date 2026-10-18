---
id: thm-it-binary-hamming-rate-distortion
kind: theorem
title: "Binary Hamming rate-distortion function"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 6
deps:
  - def-it-finite-mutual-information
  - def-it-information-rate-distortion-function
  - thm-it-finite-conditional-mutual-information-identities-and-equality
  - thm-it-finite-entropy-chain-rule
  - thm-it-finite-kl-nonnegative-equality
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: "No choice axiom is used; all distributions and sums are finite."
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  precheck: pending
sources:
  references:
    - title: "MIT OpenCourseWare 6.441, Chapter 25: Evaluating R(D)"
      url: "https://ocw.mit.edu/courses/6-441-information-theory-spring-2016/5721b7df786b416dadad7c7bb3364d00_MIT6_441S16_chapter_25.pdf"
      locator: "§25.1.1, Bernoulli source with Hamming distortion, PDF pp. 1–2 / printed pp. 255–256."
    - title: "Thomas M. Cover and Joy A. Thomas, Elements of Information Theory, 2nd ed."
      url: "https://pages.hmc.edu/ruye/book2/ElementsofInformationTheory.pdf"
      locator: "§10.3.1: binary source with Hamming distortion."
---

## Statement

Let $X\sim\operatorname{Bernoulli}(p)$, $0\le p\le1$, and let the reproduction alphabet be $\{0,1\}$ with Hamming distortion $d(x,\hat x)=\mathbf1_{\{x\ne\hat x\}}$. Write $p_0:=\min(p,1-p)$ and
$$
h_2(u):=-u\log_2u-(1-u)\log_2(1-u),\qquad 0\log_20:=0.
$$
For every $D\ge0$, the finite-alphabet information rate-distortion function is
$$
R(D)=\begin{cases}h_2(p)-h_2(D),&0\le D\le p_0,\\0,&D\ge p_0.\end{cases}
$$

## Facts & Assumptions

**Given:** A Bernoulli source parameter $p\in[0,1]$, binary reproduction, and Hamming distortion.

[F1] [[def-it-information-rate-distortion-function]]: $R(D)$ is the minimum finite mutual information in bits over test channels of expected distortion at most $D$.

[F2] [[def-it-finite-mutual-information]]: finite mutual information is the finite joint-law KL sum; its base-$2$ version is obtained by replacing $\ln$ with $\log_2$. All entropies and mutual informations in this proof use that bit convention.

[F3] [[thm-it-finite-conditional-mutual-information-identities-and-equality]]: conditional mutual information is a finite conditional KL sum and is nonnegative.

[F4] [[thm-it-finite-entropy-chain-rule]]: finite conditional entropy obeys the chain rule, here with every finite entropy scaled from nats to bits by $1/\ln2$.

[F5] [[thm-it-finite-kl-nonnegative-equality]]: finite mutual information and conditional mutual information are nonnegative.

## Proof




**Given:** The objects in the statement and suppliers [F1]–[F5].

1.1 Let $Y$ be any test-channel output and put $E=X\oplus Y$, where $\oplus$ is addition modulo two; write $e=\mathbb P(E=1)=\mathbb E d(X,Y)$. Since $X=Y\oplus E$, the map $(Y,E)\mapsto X$ is deterministic and bijective in E for each Y, so $H(X|Y)=H(E|Y)$. By [F4], $H(E)-H(E|Y)=I(E;Y)$, and this mutual information is nonnegative by [F3] and [F5]; hence $H(E|Y)\le H(E)=h_2(e)$. If $0\le D\le p_0\le1/2$ and $e\le D$, then $h_2(e)\le h_2(D)$: on $(0,1/2)$, $h_2'(u)=\log_2((1-u)/u)\ge0$, and continuity supplies the endpoints. The entropy identity in [F4] therefore gives $I(X;Y)\ge h_2(p)-h_2(D)$. [F2, F3, F4, F5, given, algebra]

1.2 Suppose $0\le D\le p_0$ and $(p,D)\ne(1/2,1/2)$. Then $1-2D>0$ and $q:=(p-D)/(1-2D)\in[0,1]$: nonnegativity follows from $D\le p$ (since $D\le p_0$), while $q\le1$ is equivalent to $p+D\le1$, which follows from $D\le1-p$. Let $Y\sim\operatorname{Bernoulli}(q)$, independently let $E\sim\operatorname{Bernoulli}(D)$, and set $X=Y\oplus E$. Then $\mathbb P(X=1)=q(1-D)+(1-q)D=D+q(1-2D)=p$, and the Hamming distortion is exactly $D$. [given, construct, algebra]

2.1 If $D\ge p_0$, reconstructing constantly by the more probable source symbol has expected Hamming distortion $p_0$ and zero mutual information; [F5] makes zero the minimum. This proves the formula on that branch, including deterministic sources. [F1, F5, step 1.1, given]

3.1 Since E is independent of Y and determines X given Y, $H(X|Y)=H(E|Y)=H(E)=h_2(D)$. Thus $I(X;Y)=h_2(p)-h_2(D)$, attaining the converse in step 1.1. The excluded corner $p=1/2,D=1/2$ is covered by step 2.1. This proves the formula for all parameters. [F2, F4, step 1.1, step 2.1, step 1.2, given, algebra] ∎
