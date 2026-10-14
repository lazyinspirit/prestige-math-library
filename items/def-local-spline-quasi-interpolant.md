---
id: def-local-spline-quasi-interpolant
kind: definition
title: Bounded local spline quasi-interpolants
status: published
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
dependency_level: 1
deps: [def-b-spline-space-and-basis, def-sobolev-space-wkp-and-its-norm, cor-one-dimensional-w-one-p-functions-have-absolutely-continuous-representatives, def-axiom-of-choice]
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-14
sources:
  references:
    - title: Tom Lyche, Carla Manni, and Hendrik Speleers, B-Splines and Spline Approximation, §§2.1–2.2
      url: https://www.mat.uniroma2.it/~speleers/cime2017/material/notes_lyche.pdf
---

## Definition

Fix a bounded interval $[a,b]$, a degree $p\in\mathbb N_0$, an exponent $1\le q\le\infty$, an integer $0\le l\le p$, and a nonempty family $\mathcal T$ of clamped degree-$p$ knot meshes on $[a,b]$. A **mesh-uniform bounded local quasi-interpolant** is a family of real-linear maps $Q_\xi:C([a,b];\mathbb R)\to S_{p,\xi}$, one for each $\xi\in\mathcal T$, for which there are common constants $M\in\mathbb N$ and $0\le C_Q<\infty$ such that the following hold for every $\xi\in\mathcal T$ and every nonempty cell $I_m$ of its mesh: there is a neighborhood $J_{\xi,m}\subseteq[a,b]$ containing $I_m$ and formed from at most $M$ adjacent knot cells; each point of $[a,b]$ belongs to at most $M$ of the neighborhoods $J_{\xi,m}$; (i) if $f=g$ almost everywhere on $J_{\xi,m}$, then $Q_\xi f=Q_\xi g$ almost everywhere on $I_m$; (ii) $Q_\xi v=v$ for every $v\in\mathcal P_l$; and (iii) $\|Q_\xi f\|_{L^q(I_m)}\le C_Q\|f\|_{L^q(J_{\xi,m})}$. The constants $M$ and $C_Q$ are independent of $\xi$. The derivative and continuous-representative conventions for Sobolev inputs are those of [[def-sobolev-space-wkp-and-its-norm]] and [[cor-one-dimensional-w-one-p-functions-have-absolutely-continuous-representatives]].

For a fixed mesh, the coefficient-functional formulation in Lyche–Manni–Speleers is one sufficient way to obtain these local stability and reproduction properties. Uniform constants in that construction give a family as defined here; this definition records the operator hypotheses used in the approximation proof.
