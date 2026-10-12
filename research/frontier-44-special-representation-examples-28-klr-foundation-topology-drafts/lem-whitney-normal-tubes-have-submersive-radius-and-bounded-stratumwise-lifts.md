---
id: lem-whitney-normal-tubes-have-submersive-radius-and-bounded-stratumwise-lifts
kind: lemma
title: Whitney normal tubes have submersive radius and bounded stratumwise lifts
status: draft
origin: session
deps: [def-finite-complex-algebraic-whitney-stratification-and-control-data, thm-euclidean-tubular-neighbourhood-theorem, def-axiom-of-choice]
provenance:
  statement: literature-derived
  proof: ai-generated
proof_strategy: direct
sources:
  references:
    - title: Mark Goresky, Lecture notes on sheaves and perverse sheaves, Section 8
      url: https://www.math.ias.edu/~goresky/pdf/all2.pdf
---

## Statement

Assume AC. Let a finite smooth Whitney (a),(b) stratification be embedded in $\mathbb R^N$, let $R$ be one stratum, and choose its ordinary Euclidean normal tube with projection $\pi$ and distance $r(x)=\|x-\pi(x)\|$. Near every point of $R$, after shrinking the tube, $(\pi,r)$ is a submersion on each incident upper stratum. There are smooth stratumwise right inverses for its differential whose norms are locally uniformly bounded near $R$. Consequently a smooth bounded field $w$ on $R$ has smooth locally bounded lifts on each incident stratum with $d\pi(V)=w\circ\pi$ and $dr(V)=0$; there are also radial lifts with $d\pi(V_{\rm rad})=0$, $dr(V_{\rm rad})=r$ and $\|V_{\rm rad}\|\le Cr$. These are lifts relative to this one lower stratum only; no simultaneous Mather control identities or continuous stratified flow is claimed.

## Facts & Assumptions

**Given:** AC, a finite Whitney stratification, and a stratum $R\subseteq\mathbb R^N$.

[F1] Whitney (a) includes $T_yR$ in every limiting upper tangent plane; Whitney (b) includes limiting secants $x-\pi(x)$ in that same plane ([[def-finite-complex-algebraic-whitney-stratification-and-control-data]]).

[F2] Under countable choice, hence AC, ordinary normal addition gives a smooth Euclidean tube: each point is uniquely $x=y+n$ with $y\in R$ and $n\perp T_yR$, and its zero-section differential splits tangent and normal directions ([[thm-euclidean-tubular-neighbourhood-theorem]]).

[A1] AC includes the countable-choice assumption of [F2] ([[def-axiom-of-choice]]).

## Proof

1.1 In the tube write $y=\pi(x)$, $n=x-y$, and $r=\|n\|$. For $r>0$, differentiating the norm gives $dr_x(v)=\langle n/r,v-d\pi_x(v)\rangle=\langle n/r,v\rangle$, because $d\pi_x(v)\in T_yR$ and $n\perp T_yR$. At $y\in R$, the inverse differential of normal addition identifies $d\pi_y$ with orthogonal projection onto $T_yR$. On a small lower-stratum coordinate patch fix a smooth orthonormal frame for $TR$ and use it to identify the target of $d\pi$ with $\mathbb R^m$, $m=\dim R$. [F2, construct, algebra]

2.1 For $x$ in an incident stratum $S$, let $A_x:T_xS\to\mathbb R^m\oplus\mathbb R$ be the matrix of $(d\pi_x,dr_x)$ in that frame. We prove a uniform bound $\|A_x^*\lambda\|\ge c\|\lambda\|$ near any given $y_0\in R$. If no such neighborhood and $c>0$ existed, there would be $x_j\to y_0$ in incident upper strata and unit target vectors $\lambda_j=(a_j,b_j)$ with $\|A_{x_j}^*\lambda_j\|\to0$. Pass to one of the finitely many strata and convergent subsequences of tangent planes, unit normal directions $n_j/r_j$, and unit target vectors. Write their limits as $T$, $u$ and $(a,b)$, with $a$ interpreted in $T_{y_0}R$. Smoothness of the tube gives $d\pi_{x_j}\to P_{T_{y_0}R}$, and step 1.1 gives $A_{x_j}^*\lambda_j\to P_T(a+bu)$. [step 1.1, construct]

3.1 By Whitney (a), $T_{y_0}R\subseteq T$. By Whitney (b) applied to $x_j$ and $\pi(x_j)$, $u\in T$. Also $u\perp T_{y_0}R$ and $\|u\|=1$. Thus $a+bu\in T$ and its squared norm is $\|a\|^2+b^2=1$. It cannot have zero orthogonal projection onto $T$, contradicting step 2.1. Hence the lower singular-value bound holds. In particular $A_x^*$ is injective, $A_x$ is onto, and $(\pi,r)|_S$ is a submersion throughout the shrunk neighborhood. [F1, step 2.1, algebra]

4.1 Define the right inverse $H_x=A_x^*(A_xA_x^*)^{-1}$. Its image lies in $T_xS$ and $A_xH_x=1$. The tangent bundle, tube differentials and their matrix coefficients are smooth along $S$, so $H_x$ is smooth along $S$. The singular-value bound gives $\|H_x\|\le1/c$. For a smooth field $w$ on $R$ use $V(x)=H_x(w(\pi(x)),0)$, and for the radial field use $V_{\rm rad}(x)=H_x(0,r(x))$. They satisfy the stated differential constraints, with $\|V\|\le\|w\|/c$ and $\|V_{\rm rad}\|\le r/c$. There are finitely many incident strata, so the neighborhood and bound can be chosen for all of them simultaneously. Their restrictions are locally bounded near the given point of $R$. [step 3.1, construct, algebra]

5.1 The construction applies near every lower-stratum point, and an empty stratum contributes no instances. When $m=0$ the same argument uses only the normal row and proves radial submersion; no positive lower-stratum dimension is needed. It proves ordinary tube transversality and one-stratum bounded lifts only. On approaching a different intermediate stratum, these independently chosen lifts need not agree with its chosen lift or projection. Thus simultaneous compatible control data and controlled-lift gluing remain a separate prerequisite for the continuous-flow construction. [F1, F2, A1, step 4.1] ∎
