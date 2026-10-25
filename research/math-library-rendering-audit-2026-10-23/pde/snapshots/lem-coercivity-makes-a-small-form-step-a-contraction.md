---
id: "lem-coercivity-makes-a-small-form-step-a-contraction"
kind: "lemma"
title: "Coercivity makes a small form step a strict contraction"
status: published
origin: pipeline
pipeline_run: "frontier-39-analysis-30"
dependency_level: 3
deps:
  - "thm-of-square-roots"
  - "cor-inner-product-induces-a-norm"
  - "def-bounded-coercive-and-symmetric-sesquilinear-forms"
  - "def-complex-conjugate-real-imaginary-part-and-modulus"
  - "def-lipschitz-holder-contraction"
  - "def-real-power"
  - "lem-coercive-form-operator-is-bounded-below"
  - "lem-form-to-bounded-operator-by-hilbert-riesz"
  - "thm-cauchy-schwarz-in-an-inner-product-space"
proof_strategy: "direct"
provenance:
  statement: "literature-derived"
  proof: "ai-altered"
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "Haim Brezis, Functional Analysis, Sobolev Spaces and Partial Differential Equations (Springer Universitext, 2011, complete 614-page text)"
      url: "https://www.math.toronto.edu/almut/Brezis.pdf"
      locator: "§5.3, proof of Theorem 5.6: $|Sv_1-Sv_2|^2\\le|v_1-v_2|^2(1-2\\rho\\alpha+\\rho^2C^2)$ and $0<\\rho<2\\alpha/C^2$, printed p. 139"
    - title: "John K. Hunter, Notes on Partial Differential Equations (UC Davis, revised 18 June 2014, complete 242-page two-quarter notes)"
      url: "https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf"
      locator: "Section 4.7, Theorem 4.21, estimates (4.23)–(4.24), printed pp. 103–104. These are elliptic energy/boundedness background; the contraction estimate is supplied by the Brezis proof and the local norm expansion."
    - title: "Richard S. Laugesen, Linear Analysis and Partial Differential Equations (University of Illinois, 2020, complete 158-page graduate notes)"
      url: "https://publish.illinois.edu/rlaugesen/files/2023/07/554-Lectures.pdf"
      locator: "§4.4, estimates (4.12)–(4.13) in the proof of Theorem 4.12, printed p. 99"
---

## Statement

Assume Countable Choice, used through [[lem-form-to-bounded-operator-by-hilbert-riesz]]. Let $H\ne\{0\}$ be a real or complex Hilbert space and let $a$ be a bounded coercive sesquilinear form on $H$ with constants $M>0,\alpha>0$ (so necessarily $\alpha\le M$); let $A$ be its operator. Put $q_\rho:=\sqrt{1-2\rho\alpha+\rho^2M^2}$ for $0<\rho<2\alpha/M^2$. Then $0\le q_\rho<1$, and for every $w\in H$ the map $$T_{\rho,w}(u):=u-\rho(Au-w)$$ is a strict contraction of $H$ with constant $q_\rho$: $\|T_{\rho,w}(u)-T_{\rho,w}(v)\|\le q_\rho\|u-v\|$ for all $u,v$. In particular $I-\rho A$ is a strict contraction with the same constant. The estimate is the only place where the coercivity constant and the bound enter the contraction argument.

## Facts & Assumptions

**Given:** Countable Choice; a Hilbert space $H\ne\{0\}$ with inner product linear in the first argument; a bounded coercive sesquilinear form $a$ with constants $M>0,\alpha>0$; its operator $A$, $a(u,v)=(Au,v)$; and a real $\rho$ with $0<\rho<2\alpha/M^2$.

[F1] $A$ is linear with $a(u,v)=(Au,v)$ for all $u,v$; $\operatorname{Re}a(u,u)=\operatorname{Re}(Au,u)\ge\alpha\|u\|^2$ and $\|Au\|\le M\|u\|$ ([[def-bounded-coercive-and-symmetric-sesquilinear-forms]], [[lem-form-to-bounded-operator-by-hilbert-riesz]], [[lem-coercive-form-operator-is-bounded-below]]).

[F2] Inner-product norm expansion: $\|z-\rho Az\|^2=\|z\|^2-2\rho\operatorname{Re}(Az,z)+\rho^2\|Az\|^2$, and $\operatorname{Re}(Az,z)\le|(Az,z)|\le\|Az\|\,\|z\|$ by Cauchy--Schwarz; the induced length is a norm with the triangle inequality ([[thm-cauchy-schwarz-in-an-inner-product-space]], [[cor-inner-product-induces-a-norm]], [[def-complex-conjugate-real-imaginary-part-and-modulus]]).

[F3] A map $S:H\to H$ is a strict contraction with constant $q$ when $\|S(u)-S(v)\|\le q\|u-v\|$ for all $u,v$ and $0\le q<1$ ([[def-lipschitz-holder-contraction]]).

[F4] Nonnegative square roots: for $t\ge0$ there is a unique $s\ge0$ with $s^2=t$, denoted $\sqrt t$ ([[thm-of-square-roots]]). If $0\le x\le y$, then $\sqrt x>\sqrt y$ would imply $x-y=(\sqrt x-\sqrt y)(\sqrt x+\sqrt y)>0$, a contradiction; hence $\sqrt x\le\sqrt y$.



## Proof

1.1 On a nonzero Hilbert space the named constants satisfy $\alpha\le M$: choosing $u\ne0$ and dividing $u$ by its norm, $\alpha\le\operatorname{Re}a(u,u)\le|a(u,u)|\le M\|u\|^2=M$, The identity $1-2\rho\alpha+\rho^2M^2=M^2(\rho-\alpha/M^2)^2+1-\alpha^2/M^2$ makes the radicand nonnegative; it may vanish when $\alpha=M$ and $\rho=\alpha/M^2$. [F1, algebra]

1.2 Contraction estimate: for $z\in H$ and $0<\rho<2\alpha/M^2$ the expansion of [F2] together with [F1] gives $$\|z-\rho Az\|^2=\|z\|^2-2\rho\operatorname{Re}(Az,z)+\rho^2\|Az\|^2\le(1-2\rho\alpha+\rho^2M^2)\|z\|^2=q_\rho^2\|z\|^2,$$ so $\|(I-\rho A)z\|\le q_\rho\|z\|$; taking $z=u-v$ and using $T_{\rho,w}(u)-T_{\rho,w}(v)=(I-\rho A)(u-v)$ gives the contraction estimate for every $w$. [F1, F2, algebra]

2.1 The constant lies in $[0,1)$: the radicand is a quadratic in $\rho$ with minimum $1-\alpha^2/M^2$ at $\rho=\alpha/M^2$, which is nonnegative because $\alpha\le M$ by step 1.1; at the endpoints $\rho=0$ and $\rho=2\alpha/M^2$ it equals $1$, and for $0<\rho<2\alpha/M^2$ either directly $1-2\rho\alpha+\rho^2M^2<1$ or by the strict minimum unless $\rho=\alpha/M^2$ and $\alpha=M$, in which case the radicand vanishes and $q_\rho=0$; in every case $0\le q_\rho<1$. Hence $I-\rho A$, and with it $T_{\rho,w}$, is a strict contraction with constant $q_\rho$. [F3, F4, step 1.1, step 1.2, algebra] ∎ 