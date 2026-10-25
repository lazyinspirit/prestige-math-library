---
id: def-wave-equation-cauchy-data-and-wave-speed
kind: definition
title: "Wave equation, Cauchy data and wave speed"
status: published
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 0
deps: [def-ck-and-multi-index-notation-in-several-variables, def-directional-and-partial-derivatives, def-laplacian-of-a-c2-function, def-linear-semilinear-quasilinear-and-fully-nonlinear-pde, def-partial-differential-operator-order-and-solution, lem-sphere-and-ball-measures-scale, def-countable-choice, def-polar-surface-measure-on-the-unit-sphere, thm-chain-rule-for-total-derivatives, thm-continuous-partial-derivatives-imply-total-differentiability]
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "John K. Hunter, Notes on Partial Differential Equations (revised 18 June 2014, UC Davis)"
      url: "https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf"
      locator: "§7.1, printed pp. 211–212, equations (7.1)–(7.2): wave equation and Cauchy/initial boundary data"
    - title: "Gerald Teschl, Partial Differential Equations: From Classical to Modern (2025 archived author manuscript, AMS Graduate Studies in Mathematics)"
      url: "https://web.archive.org/web/20250324094647id_/https://www.mat.univie.ac.at/~gerald/ftp/book-pde/pde.pdf"
      locator: "§7.1, printed p. 167, equation (7.1): the wave equation $u_{tt}=\\Delta u$ and its Cauchy problem"
    - title: "Jared Speck, MIT 18.152 Introduction to Partial Differential Equations, Class Meeting #10: Introduction to the Wave Equation (Fall 2011)"
      url: "https://ocw.mit.edu/courses/18-152-introduction-to-partial-differential-equations-fall-2011/ccd4ae63858e855c18c96ce96a797b9b_MIT18_152F11_lec_10.pdf"
      locator: "§4, (4.0.11)–(4.0.13): the wave equation with speed $c$ and its initial data"
    - title: "Victor Ivrii, Partial Differential Equations (University of Toronto, 2018, CC BY-SA)"
      url: "https://www.math.toronto.edu/courses/apm346h1/20181/PDE-textbook/PDE-textbook.pdf"
      locator: "§2.3.1–2.3.3, printed pp. 45–48, equations (2.3.1) and (2.3.8)–(2.3.9): speed $c$, displacement and velocity data"
---


## Definition

Let $n\ge1$, $T>0$ and $c>0$, let $\partial_t,\partial_j$ be the partial derivatives of [[def-directional-and-partial-derivatives]] and let $\Delta=\sum_{j=1}^n\partial_j^2$ be the Laplacian of [[def-laplacian-of-a-c2-function]]. The **wave operator** of speed $c$ is
$$\Box_c:=\partial_t^2-c^2\Delta ,$$
and the **wave equation with source** $f$ is the equation $\Box_cu=f$ on a slab $\mathbb R^n\times(0,T)$; the equation is **homogeneous** when $f=0$. A **classical solution on the time slab** $\mathbb R^n\times[0,T)$ is a function $u$ of class $C^2$ on $\mathbb R^n\times(0,T)$ in the sense of [[def-ck-and-multi-index-notation-in-several-variables]] which satisfies the equation at every point of $\mathbb R^n\times(0,T)$. This is the classical-solution and Cauchy-data vocabulary of [[def-partial-differential-operator-order-and-solution]], and $\Box_c$ is a linear second-order operator in the sense of [[def-linear-semilinear-quasilinear-and-fully-nonlinear-pde]].

The **Cauchy problem** for $\Box_cu=f$ prescribes a **displacement** $u_0:\mathbb R^n\to\mathbb R$ and a **velocity** $u_1:\mathbb R^n\to\mathbb R$ and asks for a classical solution attaining them as $t\downarrow0$ in the pointwise sense: $u(x,t)\to u_0(x)$ and $\partial_tu(x,t)\to u_1(x)$ for every $x\in\mathbb R^n$ as $t\downarrow0$. Only the limits are part of the data, so $u$ need not be defined at $t=0$ a priori.

**Unit-speed rescaling convention.** A function $u$ solves $\Box_cu=0$ on $\mathbb R^n\times[0,T)$ with data $(u_0,u_1)$ if and only if $v(x,s):=u(x,s/c)$ solves $\partial_s^2v=\Delta v$ on $\mathbb R^n\times[0,cT)$ with data $(u_0,u_1/c)$; equivalently $u(x,t)=v(x,ct)$. Indeed continuous coordinate partial derivatives imply total differentiability ([[thm-continuous-partial-derivatives-imply-total-differentiability]]), so the chain rule ([[thm-chain-rule-for-total-derivatives]]) gives $\partial_tu(x,t)=c\,\partial_sv(x,ct)$ and $\partial_t^2u(x,t)=c^2\partial_s^2v(x,ct)$ while spatial derivatives are unchanged, so $\Box_cu=c^2(\partial_s^2v-\Delta v)$ evaluated at $s=ct$, and the initial displacement limits agree, while the initial velocity limit of $u$ is $c$ times that of $v$. The cited treatments state their formulas at unit speed, and this convention is the only place where the general speed enters those formulas.

**Sphere normalisation.** Let $\sigma$ be the polar surface measure on the unit sphere ([[def-polar-surface-measure-on-the-unit-sphere]]). Write $V_m:=|B_1^m|$ for the unit ball and $\omega_m:=\sigma(S^m)=(m+1)V_{m+1}>0$ for the total polar measure of the unit sphere $S^m\subseteq\mathbb R^{m+1}$ ([[lem-sphere-and-ball-measures-scale]]); thus the boundary sphere of a ball in $\mathbb R^n$ has total measure $\omega_{n-1}=nV_n$. For an integer $m\ge0$ put $(2m+1)!!:=(2m+1)(2m-1)\cdots3\cdot1$ and $(2m)!!:=(2m)(2m-2)\cdots2$, so that $0!!=1!!=1$ and $(n-2)!!$ is defined for every odd $n\ge3$. All sphere and weighted-ball integrals on this page are read under the Axiom of Countable Choice of [[def-countable-choice]], under which the polar measure and its integrals are supplied.
