---
id: cex-ip-calderon-logarithmic-modulus-not-lipschitz
kind: counterexample
title: A shrinking inclusion rules out uniform Lipschitz stability on the BV class
status: published
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 6
deps:
  - def-axiom-of-choice
  - def-countable-choice
  - def-ip-calderon-admissible-conductivity-class
  - def-ip-calderon-weak-dn-map-for-bounded-conductivities
  - lem-ip-calderon-radial-inclusion-dn-spectrum
  - lem-ip-calderon-rough-dn-map-wellposedness
  - lem-ip-calderon-disk-inclusion-perimeter-scaling
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Mikko Salo, Calderón problem (University of Helsinki lecture notes, Spring 2008)"
      url: "https://users.jyu.fi/~salomi/lecturenotes/calderon_lectures.pdf"
      locator: "Chapter 4, explicit concentric-disk inclusion example, printed pp. 29–30; exact operator estimate is derived locally here."
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: "pass"
    date: "2026-10-22"
    scope: "Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/inverse-problems-knot-theory-all-109-2026-10-19-publication.json."
    delegated_by: "owner"
---

## Statement refuted

Assume the Axiom of Choice and Countable Choice. Let $D=B(x_0,a)\subset(0,1)^2$ with $x_0=(1/2,1/2)$ and $a=1/4$, let $D'=B(x_0,a/2)$, and set $m=1/2$, $M=3/2$, and $R=1$. There exists a finite constant $L$ such that $\|\gamma_1-\gamma_2\|_{L^2(D)}\le L\|\dot{\Lambda}_{\gamma_1}-\dot{\Lambda}_{\gamma_2}\|_{\mathcal L(\mathcal D(D)/\mathbb C\mathbf1,(\mathcal D(D)/\mathbb C\mathbf1)^*)}$ for every $\gamma_1,\gamma_2\in X_2(1)$.

## Statement references

[[def-ip-calderon-admissible-conductivity-class|The fixed planar BV class used in the refuted estimate.]]

[[lem-ip-calderon-radial-inclusion-dn-spectrum|The exact DN spectrum and quotient operator bound for a concentric inclusion.]]

## Facts & Assumptions

**Given:** The Axiom of Choice and Countable Choice; $D=B(x_0,a)$, $a=1/4$, $D'=B(x_0,a/2)$, $m=1/2$, $M=3/2$, $R=1$, $\gamma_0\equiv1$, and $\gamma_j=1+\tfrac12\chi_{B(x_0,r_j)}$ with $r_j=a/2^{j+2}$.

[F1] The class $X_2(1)$ uses the bounds $1/2\le\gamma\le3/2$, background value $1$ off $D'$, and $\max\{\|\gamma\|_{L^1(D)},TV(\gamma;D)\}\le1$. ([[def-ip-calderon-admissible-conductivity-class]])

[F2] For each $0<r\le a/2$ and $\beta>0$, the disk inclusion $1+\beta\chi_{B(x_0,r)}$ has DN eigenvalue difference from the background disk equal to $\frac{2n}{a}\frac{\eta(r/a)^{2n}}{1-\eta(r/a)^{2n}}$ on mode $n\ge1$, and the induced quotient-space operator norm is at most $\frac{2\eta}{1-\eta}(r/a)^2$, where $\eta=\beta/(2+\beta)$. ([[lem-ip-calderon-radial-inclusion-dn-spectrum]])

[F3] The weak DN maps are bounded operators on the trace quotient and are uniquely defined for these uniformly elliptic conductivities. ([[def-ip-calderon-weak-dn-map-for-bounded-conductivities]], [[lem-ip-calderon-rough-dn-map-wellposedness]])

[F4] For every disk $B(x_0,r)$, its indicator has total variation $2\pi r$ in the plane. ([[lem-ip-calderon-disk-inclusion-perimeter-scaling]])

[A1] The Axiom of Choice is assumed at the weak DN interface, and Countable Choice at the disk-perimeter scaling and Fourier trace-quotient interfaces. ([[def-axiom-of-choice]], [[def-countable-choice]])

## Counterexample

**Proof technique:** direct.

**Given:** The data in the Statement refuted.

1.1 For every $j\ge1$, $r_j\le a/8<a/2$, so the inclusion lies in $D'$. Its values are $1$ and $3/2$, and its $L^1(D)$ norm is $\pi a^2+\tfrac12\pi r_j^2\le\pi/16+\pi/2048<1$. By [F4], $TV(\gamma_j;D)=\tfrac12(2\pi r_j)=\pi r_j\le\pi a/8<1$. Also $\gamma_0$ equals the background and has $L^1(D)=\pi/16<1$ and zero variation. Thus [F1] gives $\gamma_0,\gamma_j\in X_2(1)$. [A1, F1, F4, given, algebra]

1.2 The squared $L^2(D)$ difference is $\int_{B(x_0,r_j)}(1/2)^2dx=\pi r_j^2/4$, hence its norm is $\frac12\sqrt\pi r_j$. Apply [F2] with $\beta=1/2$, so $\eta=(1/2)/(5/2)=1/5$ and $2\eta/(1-\eta)=1/2$; this gives the stated DN bound. The well-posedness and definition facts [F3] ensure the operator comparison is in the stated quotient-space norm. [A1, F2, F3, given, algebra]

2.1 If the asserted finite constant $K$ existed, step 1.1 puts both coefficients in its class, while step 1.2 computes the data and DN differences; hence the estimate applied to $(\gamma_j,\gamma_0)$ would give $\frac12\sqrt\pi r_j\le\frac K2(r_j/a)^2$. Dividing by $r_j>0$ yields $\sqrt\pi\le Kr_j/a^2$ for every $j$. Since $r_j\to0$, the right-hand side tends to zero, contradicting $\sqrt\pi>0$. Therefore the refuted statement is false. [F3, step 1.1, step 1.2, algebra] ∎
