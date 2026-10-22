---
id: rem-tgrx-jt-completion-notunique
kind: remark
title: The JT disk density does not determine a unique nonperturbative completion
status: draft
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
domain: physics
library: physics
dependency_level: 1
deps:
  - post-tgrx-jt-disk-spectral-model
dependency_roles:
  post-tgrx-jt-disk-spectral-model: formulation-prerequisite
justified_by: []
aliases: []
forward_refs: []
physical_scope: >
  A source-based limitation on interpreting the selected JT genus-zero disk
  density. It records that cited exact models extend beyond the single disk
  term and may average over theories; it makes no claim about every microscopic
  realization or nature.
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Phil Saad, Stephen H. Shenker, and Douglas Stanford, JT gravity as a matrix integral, §§1 and 6"
      url: "https://arxiv.org/html/1903.11115"
      locator: "Full-text article; §2.4 describes the double-scaling limit from ordinary matrix integrals; §§3.3.5 and 3.5 give the disk calculation, density and genus-expansion matching; §§1 and 6 discuss non-unique completion and the ensemble interpretation."
    - title: "Thomas G. Mertens and Gustavo J. Turiaci, Solvable models of quantum black holes: a review on Jackiw–Teitelboim gravity, §§4.3.1–4.4 and 5.2"
      url: "https://arxiv.org/html/2210.10846"
      locator: "Full-text review; §§4.3.1–4.4 discuss the SSS matrix-integral duality, density corrections, and nonperturbative limitations; §5.2 addresses factorization, discreteness, and ensemble averaging."
---

## Statement

An **ensemble** here means the following finite-dimensional probability model. Let $N\ge 1$ be an integer, let $\mathcal H_N$ be an $N$-dimensional complex Hilbert space, and let $\operatorname{Herm}(\mathcal H_N)$ be the real vector space of self-adjoint linear operators on $\mathcal H_N$, with the operator-norm topology and its Borel sigma algebra. Let $\mu$ be a Borel probability measure on $\operatorname{Herm}(\mathcal H_N)$. Each $H\in\operatorname{Herm}(\mathcal H_N)$ is an energy operator, with units $\mathrm{s^{-1}}$ in the natural units $c=\hbar=k_B=1$ of the adopted JT disk model. For inverse temperature $\beta>0$, with units seconds, define the finite-matrix partition function $Z_H(\beta):=\operatorname{tr}_{\mathcal H_N}(e^{-\beta H})$, where $\operatorname{tr}_{\mathcal H_N}$ is the ordinary finite-dimensional trace.

Since $H$ is self-adjoint and $\mathcal H_N$ is finite-dimensional, $Z_H(\beta)$ is a positive finite real number. The ensemble average is $\langle Z(\beta)\rangle_\mu:=\int_{\operatorname{Herm}(\mathcal H_N)}Z_H(\beta)\,d\mu(H)$; it is finite when $\int Z_H(\beta)\,d\mu(H)<\infty$.

A **nonperturbative completion** is additional exact model data that select an exact theory beyond the terms fixed by the formal expansion by spacetime topology, as in the adopted JT disk model. In the SSS construction, an ordinary ensemble of $L\times L$ Hermitian matrices has measure $d\mu_{L,a}(H)=\mathcal Z_{L,a}^{-1}e^{-L\operatorname{tr}V_{L,a}(H)}\,dH$ on $\operatorname{Herm}(\mathbb C^L)$, where $dH$ is Lebesgue measure, $V_{L,a}:\mathbb R\to\mathbb R$ is the chosen potential applied to the real eigenvalues of $H$, and $\mathcal Z_{L,a}:=\int e^{-L\operatorname{tr}V_{L,a}(H)}\,dH$ is finite and positive so that $\mu_{L,a}$ is normalized.

If $\lambda_1(H),\ldots,\lambda_L(H)$ are the eigenvalues counted with multiplicity, the ensemble-averaged eigenvalue-counting measure is $\nu_{L,a}(B):=\int\#\{j:\lambda_j(H)\in B\}\,d\mu_{L,a}(H)$ for each Borel set $B\subseteq\mathbb R$; where it has a density, its leading large-$L$ term is the leading eigenvalue density. A **double-scaling limit** here is the cited SSS limiting procedure along a tuned family with $L\to\infty$ and $a\to\infty$, holding $e^{S_0}$ fixed. Before shifting, its leading density has support $-a<x<a$ in the original energy coordinate $x$, where $a>0$ has units $\mathrm{s^{-1}}$. Recenter the lower edge $-a$ by defining $E:=x+a$; equivalently, evaluate the original density at $x=E-a$. The shifted support is $0<E<2a$. At fixed $C>0$ and $S_0$ of the adopted disk model, the finite-$a$ leading-density prescription in this normalization is

$$r_a(E):=e^{S_0}\frac{C}{2\pi^2}\sinh\!\left(2\pi\sqrt{2CE\left(1-\frac{E}{2a}\right)}\right),\qquad 0<E<2a.$$

For each fixed $E>0$, eventually $a>E/2$, and $2CE(1-E/(2a))\to2CE$, so $r_a(E)\to\rho_0(E)$, the adopted JT disk density. This leading-density limit does not assert convergence of the exact finite-matrix probability measures.

In this limit the JT disk density is a smooth leading density, not the discrete spectrum of one finite matrix and not, by itself, a specification of a finite-matrix probability measure. The SSS matrix-integral approach matches the JT genus expansion in this double-scaled framework and is described as a non-unique nonperturbative completion. Therefore the disk density alone specifies neither a unique nonperturbative completion nor the exact energy spectrum of one fixed boundary quantum system (one specified boundary Hilbert space with one specified energy operator, rather than an ensemble of operators). No statement is made about every possible microscopic realization.

## Statement references

[[post-tgrx-jt-disk-spectral-model]]

[Phil Saad, Stephen H. Shenker, and Douglas Stanford, *JT gravity as a matrix integral*](https://arxiv.org/html/1903.11115)

[Thomas G. Mertens and Gustavo J. Turiaci, *Solvable models of quantum black holes: a review on Jackiw–Teitelboim gravity*](https://arxiv.org/html/2210.10846)
