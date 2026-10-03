---
id: cex-calderon-zygmund-operators-need-not-map-linfinity-to-linfinity
kind: counterexample
title: "Calderón–Zygmund operators need not map L∞ to L∞"
status: draft
origin: pipeline
pipeline_run: frontier-38-owner-30
deps: [cex-calderon-zygmund-strong-lone-bound-fails, def-truncated-hilbert-transform-and-principal-value, def-countable-choice]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
sources:
  references:
    - title: "Loukas Grafakos, Classical Fourier Analysis, third edition"
      url: "https://www.math.stonybrook.edu/~bishop/classes/math638.F20/Grafakos_Classical_Fourier_Analysis.pdf"
      locator: "§5.1.1 and Remark 5.1.9 on endpoint behaviour, printed pp. 314–322"
    - title: "Richard S. Laugesen, Harmonic Analysis Lecture Notes"
      url: "https://arxiv.org/pdf/0903.3845"
      locator: "Chapter 20, interval transform, printed pp. 113–119"
---

## Statement refuted

Assume Countable Choice ([[def-countable-choice]]).

The bounded function $f=\mathbf 1_{(0,1]}$ has compatible Hilbert transform
$q(x)=\pi^{-1}\log|x/(x-1)|$, which is essentially unbounded near $0$ and near
$1$: $q(x)\to-\infty$ as $x\to0$ and $q(x)\to+\infty$ as $x\to1$. Therefore no
bounded $L^\infty\to L^\infty$ extension agrees with the $L^2$ Hilbert transform
on $L^\infty\cap L^2$, and $L^\infty$ need not be mapped to $L^\infty$ by a
Calderón–Zygmund operator. No BMO-valued endpoint estimate is refuted or
asserted here.

## Facts & Assumptions

**Given:** The indicator $f=\mathbf 1_{(0,1]}$, its transform $q(x)=\frac1\pi\log\frac{|x|}{|x-1|}$ on $\mathbb R\setminus\{0,1\}$, and the truncations $H_\varepsilon$ of [[def-truncated-hilbert-transform-and-principal-value]].

[F1] $f\in L^1\cap L^2$, the symmetric principal value satisfies $\lim_{\varepsilon\downarrow0}H_\varepsilon f(x)=q(x)$ for every $x\notin\{0,1\}$, and $Hf=q$ almost everywhere as an $L^2$ class ([[cex-calderon-zygmund-strong-lone-bound-fails]], [[def-truncated-hilbert-transform-and-principal-value]]).

## Counterexample

**Proof technique:** direct.

1.1 The function $q$ is unbounded above and below on every punctured neighbourhood of the endpoints: for $0<x<1$, $\frac{|x|}{|x-1|}=\frac{x}{1-x}$, which tends to $0$ as $x\to0^+$ and to $+\infty$ as $x\to1^-$; since $\log$ is continuous, strictly increasing, with $\lim_{u\downarrow0}\log u=-\infty$ and $\lim_{u\to\infty}\log u=+\infty$, one has $q(x)\to-\infty$ as $x\to0^+$ and $q(x)\to+\infty$ as $x\to1^-$. Hence for every $M>0$ the sets $\{q>M\}$ and $\{q<-M\}$ contain nondegenerate intervals, so both have positive Lebesgue measure and $q$ is not essentially bounded. [F1, given, algebra]

2.1 Suppose $T:L^\infty(\mathbb R;\mathbb C)\to L^\infty(\mathbb R;\mathbb C)$ were bounded and agreed with the $L^2$ Hilbert transform on $L^\infty\cap L^2$. Since $f\in L^\infty\cap L^2$ by [F1], the class $Tf$ would equal the class $Hf=q$; but $q$ is not essentially bounded by step 1.1, whereas every class in $L^\infty$ is essentially bounded. This contradiction shows that no bounded $L^\infty\to L^\infty$ extension compatible on $L^\infty\cap L^2$ exists, which is the asserted failure; nothing here concerns a BMO-valued estimate. [F1, step 1.1, algebra] ∎
