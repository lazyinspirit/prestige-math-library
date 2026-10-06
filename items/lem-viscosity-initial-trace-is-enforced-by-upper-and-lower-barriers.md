---
id: lem-viscosity-initial-trace-is-enforced-by-upper-and-lower-barriers
kind: lemma
title: "Time-space barriers enforce the initial trace for the Cauchy problem"
status: draft
origin: pipeline
pipeline_run: frontier-39-analysis-30
deps: [def-hamilton-jacobi-cauchy-problem, def-viscosity-subsolution-and-supersolution, def-ck-and-multi-index-notation-in-several-variables, thm-fermat-for-euclidean-local-extrema]
justified_by: []
aliases: []
dependency_level: 2
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "Hung Vinh Tran, Hamilton--Jacobi Equations: Theory and Applications, 2020 preliminary author manuscript of AMS Graduate Studies in Mathematics 213 (complete text)"
      url: "https://people.math.wisc.edu/~htran24/HJ-equations-Tran-AMS.pdf"
      locator: "Chapter 1 Section 8, Theorem 1.30, printed pp. 36--37"
    - title: "Michael G. Crandall, Hitoshi Ishii and Pierre-Louis Lions, User's guide to viscosity solutions of second order partial differential equations, Bulletin of the American Mathematical Society 27 (1992), 1--67 (complete article)"
      url: "https://arxiv.org/pdf/math/9207212"
      locator: "(8.4) (IC) and Theorem 8.2, printed pp. 49--51"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Statement

Let $n\ge1$, $T>0$, $O\subseteq\mathbb R^n$ open, $Z=O\times(0,T)$, let
$H:O\times[0,T]\times\mathbb R^n\to\mathbb R$ be continuous, and let
$u_0\in C^1(O)$ have bounded gradient. Assume
$C_0:=\sup_{x\in O,\,0\le t\le T}|H(x,t,Du_0(x))|<\infty$. Define
$\phi_\pm(x,t):=u_0(x)\pm C_0t$. Then: (1) $\phi_-$ is a classical
subsolution and $\phi_+$ a classical supersolution in $Z$, each with initial
datum $u_0$; (2) if $w:Z\to\mathbb R$ is locally bounded with
$\phi_-\le w\le\phi_+$ on $Z$, then for every $x\in O$ the relaxed limits
satisfy
$$\liminf_{\substack{(y,s)\to(x,0)\\ s>0}}w(y,s)\ge u_0(x)\ge\limsup_{\substack{(y,s)\to(x,0)\\ s>0}}w(y,s),$$
so both equal $u_0(x)$; (3) consequently $w$ satisfies the relaxed initial
condition for the Cauchy problem in both directions, and any continuous
extension of $w$ to the initial face takes the value $u_0$ pointwise. No
choice principle is used.

## Facts & Assumptions

**Given:** Open $O\subseteq\mathbb R^n$, $T>0$, continuous $H:O\times[0,T]\times\mathbb R^n\to\mathbb R$, $u_0\in C^1(O)$ with bounded gradient, $C_0=\sup_{O\times[0,T]}|H(x,t,Du_0(x))|<\infty$, the barriers $\phi_\pm=u_0\pm C_0t$, and a locally bounded $w:Z\to\mathbb R$ with $\phi_-\le w\le\phi_+$.

[F1] If a $C^1$ function satisfies the differential inequality pointwise on the open set $Z$, then it satisfies the corresponding viscosity test inequality: at a local contact with another $C^1$ function, Fermat's theorem makes their first derivatives equal ([[def-viscosity-subsolution-and-supersolution]], [[thm-fermat-for-euclidean-local-extrema]]).

[F2] The functions $(x,t)\mapsto u_0(x)\pm C_0t$ are $C^1$ on $Z$, with time derivatives $\pm C_0$ and spatial gradient $Du_0(x)$; since $u_0$ is continuous on $O$, they extend continuously to the initial face $O\times\{0\}$ with value $u_0$ ([[def-ck-and-multi-index-notation-in-several-variables]]).

[F3] The relaxed initial conditions for a subsolution and a supersolution of the Cauchy problem are stated as limsup and liminf over $(y,s)\to(x,0)$ with $s>0$ ([[def-viscosity-subsolution-and-supersolution]]).

## Proof

**Proof technique:** explicit affine-in-time barriers and continuity of the datum.

1.1 The barriers are pointwise classical sub- and supersolutions on $Z$. By [F2], $\phi_\pm$ are $C^1$ there, with $(\phi_\pm)_t=\pm C_0$ and $D\phi_\pm=Du_0$. The definition of $C_0$ gives $-C_0\le H(x,t,Du_0(x))\le C_0$ for every $(x,t)\in O\times[0,T]$, so $(\phi_-)_t+H(x,t,D\phi_-)=-C_0+H(x,t,Du_0(x))\le0$ and $(\phi_+)_t+H(x,t,D\phi_+)=C_0+H(x,t,Du_0(x))\ge0$ pointwise on $Z$. By [F1] these pointwise inequalities imply the viscosity test inequalities, and [F2] gives the pointwise initial values. No continuity on the lateral boundary $\partial O\times[0,T]$ is needed. [F1, F2, algebra]

2.1 The squeeze at the initial face. Fix $x\in O$. For $(y,s)\in Z$ the pointwise bounds give $\phi_-(y,s)=u_0(y)-C_0s\le w(y,s)\le u_0(y)+C_0s=\phi_+(y,s)$. As $(y,s)\to(x,0)$ with $s>0$ we have $s\to0$ and $y\to x$, so by continuity of $u_0$ at $x$ both $u_0(y)-C_0s\to u_0(x)$ and $u_0(y)+C_0s\to u_0(x)$; the squeeze therefore gives $\liminf w\ge u_0(x)$ and $\limsup w\le u_0(x)$, both relaxed limits being taken along $s>0$. [step 1.1, algebra]

3.1 Conclusion. By step 2.1 the two relaxed limits both equal $u_0(x)$, which is exactly the bisided relaxed initial condition of [F3]; in particular a continuous extension of $w$ to $O\times\{0\}$ must take the value $u_0$ there. This is the two-barrier boundary control used by the Perron construction. [step 2.1, F3] ∎

## Remarks

- **Sharpness of the hypothesis.** The boundedness of $C_0$ is what makes the barriers classical; it holds, for example, when $H$ is uniformly bounded on $O\times[0,T]\times\{|p|\le\|Du_0\|_\infty\}$. Boundedness of $O$ or boundedness for each fixed momentum alone does not supply that uniform bound. The barriers are the model two-sided control of the initial face and are used in the Perron existence theorem.
