---
id: lem-laplace-resolvents-of-a-unitary-group
kind: lemma
title: "Laplace resolvents of a unitary group"
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-infinitesimal-generator-of-a-unitary-group, def-strongly-continuous-one-parameter-unitary-group, def-bochner-integrable-function, lem-bochner-integral-norm-inequality, thm-bochner-dominated-convergence, thm-bochner-integrability-criterion, thm-bounded-linear-maps-commute-with-bochner-integration, def-strongly-measurable-banach-valued-function, def-banach-valued-simple-function-and-integral, def-countable-choice, thm-fundamental-theorem-of-calculus-for-absolutely-continuous-functions, def-absolutely-continuous-function, def-metric-convergence]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Roland Schnaubelt, Evolution Equations (lecture notes)"
      url: "https://iana.math.kit.edu/downloads/iana3/schnaubelt/Skripten/evgl-skript.pdf"
      locator: "Lemma 1.17, Lemma 1.18 and Proposition 1.20 with proof, pp.11-13"
    - title: "Gerald Teschl, Mathematical Methods in Quantum Mechanics, second edition"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe2.pdf"
      locator: "Section 5.1, pp.146-148"
---

## Statement

Assume Countable Choice. Let $U$ be a strongly continuous one-parameter unitary
group on $H$ with infinitesimal generator $G$, and let $\lambda>0$. Then
$$Q_\pm(\lambda)x=\int_0^\infty e^{-\lambda t}U(\pm t)x\,dt$$
is a Bochner integral depending linearly and boundedly on $x$, with
$\|Q_\pm(\lambda)\|\le1/\lambda$ and $\operatorname{ran}Q_\pm(\lambda)\subseteq
D(G)$; moreover
$$(\lambda\mp G)Q_\pm(\lambda)=I,\qquad Q_\pm(\lambda)(\lambda\mp G)=I\ \text{on }D(G),$$
and $Q_+(\lambda)+Q_-(\lambda)=2\lambda\,Q_+(\lambda)Q_-(\lambda)$.

## Facts & Assumptions

[A1] A continuous map $[0,\infty)\to H$ is strongly measurable (restrictions to $[0,N]$ are uniform limits of step functions), and a strongly measurable $f$ with $\int\|f\|\,dt<\infty$ is Bochner integrable, with $\|\int f\|\le\int\|f\|$ ([[def-strongly-measurable-banach-valued-function]], [[def-banach-valued-simple-function-and-integral]], [[thm-bochner-integrability-criterion]], [[lem-bochner-integral-norm-inequality]]).

[A2] Bochner dominated convergence holds, and a bounded linear operator commutes with the Bochner integral ([[thm-bochner-dominated-convergence]], [[thm-bounded-linear-maps-commute-with-bochner-integration]]).

[A3] If $x\in D(G)$ and $t\in\mathbb R$, then $U(t)x\in D(G)$ and $GU(t)x=U(t)Gx$: $\frac1h(U(h)U(t)x-U(t)x)=U(t)\frac1h(U(h)x-x)\to U(t)Gx$ by continuity of the bounded operator $U(t)$ ([[def-infinitesimal-generator-of-a-unitary-group]], [[def-strongly-continuous-one-parameter-unitary-group]]).

[A4] For a continuously differentiable complex-valued function $f$ on $[0,\infty)$ with $f,f'$ bounded and $f(t)\to0$ as $t\to\infty$, one has $\int_0^\infty f'(t)dt=-f(0)$; this is the scalar fundamental theorem applied to real and imaginary parts ([[thm-fundamental-theorem-of-calculus-for-absolutely-continuous-functions]], [[def-absolutely-continuous-function]]).

## Proof

**Proof technique:** direct.

**Given:** A strongly continuous unitary group $U$ with generator $G$ and $\lambda>0$.

1.1 $t\mapsto e^{-\lambda t}U(\pm t)x$ is continuous and $\int_0^\infty\|e^{-\lambda t}U(\pm t)x\|dt=\|x\|/\lambda<\infty$, so $Q_\pm(\lambda)x$ is a well-defined Bochner integral, linear in $x$ and bounded with $\|Q_\pm(\lambda)\|\le1/\lambda$. [A1]

1.2 For $x\in D(G)$ and $t$ one has $U(t)x\in D(G)$ with $GU(t)x=U(t)Gx$, so $t\mapsto e^{-\lambda t}U(t)x$ is differentiable with derivative $e^{-\lambda t}U(t)(G-\lambda)x$. [A3]

2.1 $(\lambda-G)Q_+(\lambda)=I$: for $x\in H$ and $h>0$, commuting $U(h)$ with the integral and substituting $s=t+h$ gives $\frac1h(U(h)-I)Q_+(\lambda)x=\frac{e^{\lambda h}-1}{h}\int_h^\infty e^{-\lambda s}U(s)x\,ds-\frac1h\int_0^he^{-\lambda s}U(s)x\,ds$, whose limit as $h\to0$ is $\lambda Q_+(\lambda)x-x$; hence $Q_+(\lambda)x\in D(G)$ and $GQ_+(\lambda)x=\lambda Q_+(\lambda)x-x$. Applying the same computation to the group $t\mapsto U(-t)$, whose generator is $-G$, gives $(\lambda+G)Q_-(\lambda)=I$. [A1, A2, step 1.1]

2.2 $Q_+(\lambda)(\lambda-G)=I$ on $D(G)$: for $x\in D(G)$ and $y\in H$ put $f(t)=e^{-\lambda t}\langle U(t)x,y\rangle$; by step 1.2, $f$ is continuously differentiable with $-f'(t)=e^{-\lambda t}\langle U(t)(\lambda-G)x,y\rangle$, and $f(t)\to0$, so pairing the integral with $y$ and using [A4], $\langle Q_+(\lambda)(\lambda-G)x,y\rangle=\int_0^\infty(-f'(t))dt=f(0)=\langle x,y\rangle$; as $y$ is arbitrary, $Q_+(\lambda)(\lambda-G)x=x$. The group $U(-\cdot)$ gives the same statement for $Q_-$ and $\lambda+G$. [A2, A4, step 1.2]

3.1 The two identities show $\operatorname{ran}(\lambda\mp G)=H$ and that $Q_\pm(\lambda)$ is the two-sided inverse of $\lambda\mp G$, so $\operatorname{ran}Q_\pm(\lambda)=D(G)$ and the range clause follows. [step 2.1, step 2.2]

4.1 From step 2.1, $(\lambda+G)R_-=I$ with $R_-:=Q_-(\lambda)$, that is $GR_-=I-\lambda R_-$, hence $(\lambda-G)R_-=2\lambda R_--I$; multiplying on the left by $R_+:=Q_+(\lambda)$ and using $R_+(\lambda-G)=I$ on $D(G)$ from step 2.2 with $\operatorname{ran}R_-\subseteq D(G)$ gives $R_-=2\lambda R_+R_--R_+$, that is $R_++R_-=2\lambda R_+R_-$. [step 2.1, step 2.2, step 3.1]

5.1 All the stated claims are steps 1.1, 3.1 and 4.1. ∎
