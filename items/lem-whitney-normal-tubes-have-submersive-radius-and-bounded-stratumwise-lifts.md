---
id: lem-whitney-normal-tubes-have-submersive-radius-and-bounded-stratumwise-lifts
kind: lemma
title: "Whitney normal tubes have submersive radius and bounded stratumwise lifts"
status: published
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 8
deps: [def-axiom-of-choice,
       def-finite-complex-algebraic-whitney-stratification-and-control-data,
       thm-choice-implies-dependent-implies-countable-choice,
       thm-euclidean-tubular-neighbourhood-theorem]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-11
sources:
  references:
    - title: "John Mather, Notes on Topological Stability (1970)"
      url: "https://doi.org/10.1090/S0273-0979-2012-01383-6"
      locator: "Sections 1-2 (Whitney conditions and normal tubes)"
---

## Statement

Assume AC. Let a finite smooth Whitney (a),(b) stratification be embedded in
$\mathbb R^N$, let $R$ be one stratum, and choose its ordinary Euclidean normal
tube with projection $\pi$ and distance $r(x)=\|x-\pi(x)\|$. Near every point of
$R$, after shrinking the tube, $(\pi,r)$ is a submersion on each incident upper
stratum. There are smooth stratumwise right inverses for its differential whose
norms are locally uniformly bounded near $R$. Consequently a smooth bounded
field $w$ on $R$ has smooth locally bounded lifts on each incident stratum with
$d\pi(V)=w\circ\pi$ and $dr(V)=0$; there are also radial lifts with
$d\pi(V_{\rm rad})=0$, $dr(V_{\rm rad})=r$ and $\|V_{\rm rad}\|\le Cr$. These
are lifts relative to this one lower stratum only; no simultaneous Mather
control identities or continuous stratified flow is claimed.

## Facts & Assumptions

**Given:** AC, a finite smooth Whitney (a),(b) stratification embedded in $\mathbb R^N$, and one lower stratum $R$.

[F1] Whitney (a) for the incident pair $(S,R)$ includes $T_yR\subseteq T$ for every limit $T$ of tangent planes $T_{x_j}S$ with $x_j\to y$; Whitney (b) additionally includes every limit of normalized secants $(x_j-\pi(x_j))/\|x_j-\pi(x_j)\|$ in that same limiting plane ([[def-finite-complex-algebraic-whitney-stratification-and-control-data]]).

[F2] Assuming countable choice, and hence under AC, the ordinary normal addition map of an embedded smooth submanifold $R$ is a diffeomorphism from a normal neighbourhood onto an open tube: every point of the tube is uniquely $x=y+n$ with $y\in R$ and $n\perp T_yR$, and at the zero section the differentials of the projection and the normal coordinate split the tangent space into the tangent and normal directions ([[thm-euclidean-tubular-neighbourhood-theorem]]).

[A1] AC implies $\mathrm{AC}_\omega$ ([[thm-choice-implies-dependent-implies-countable-choice]]), which supplies the countable-choice hypothesis of the Euclidean tube theorem [F2]; the remaining argument is choice-free ([[def-axiom-of-choice]]).

## Proof

**Proof technique:** direct.

1.1 Write $y=\pi(x)$ and $n=x-y$ for a point of the tube, and $r=\|n\|$. When $r>0$, differentiating the norm gives $dr_x(v)=\langle n/r,v-d\pi_x(v)\rangle=\langle n/r,v\rangle$, because $d\pi_x(v)\in T_yR$ is orthogonal to $n$; and at $y\in R$ the inverse differential of normal addition identifies $d\pi_y$ with the orthogonal projection onto $T_yR$ by [F2]. Fix a lower-stratum coordinate patch with a smooth orthonormal frame for $TR$, and use it to identify the target of $d\pi$ with $\mathbb R^m$, $m=\dim R$. [F2, construct, algebra]

2.1 For $x$ in an incident upper stratum $S$ let $A_x:T_xS\to\mathbb R^m\oplus\mathbb R$ be the matrix of $(d\pi_x,dr_x)$ in that frame. Suppose no uniform lower bound $\|A_x^*\lambda\|\ge c\|\lambda\|$ held near a point $y_0\in R$. Then there are $x_j\to y_0$ in incident strata and unit vectors $\lambda_j=(a_j,b_j)$ with $\|A_{x_j}^*\lambda_j\|\to0$; passing to one of the finitely many strata and to subsequences, the tangent planes $T_{x_j}S$ converge to a plane $T$, the unit normal directions $n_j/r_j$ converge to a unit vector $u$, and the target vectors converge to a unit $(a,b)$. By smoothness of the tube projection, $d\pi_{x_j}$ converges to the orthogonal projection onto $T_{y_0}R$, and by step 1.1 the adjoints satisfy $A_{x_j}^*\lambda_j\to \Pi_T(a)+bu$, where $\Pi_T$ is the orthogonal projection onto $T$. [step 1.1, construct]

3.1 By Whitney (a), $T_{y_0}R\subseteq T$, so $\Pi_T(a)=a$; by Whitney (b) applied to the secants $x_j-\pi(x_j)$, the unit limit $u$ lies in $T$. Hence the limit $a+bu$ lies in $T$ and has squared norm $\|a\|^2+b^2=1$, because $a\in T_{y_0}R$ is orthogonal to $u$. This contradicts $\|A_{x_j}^*\lambda_j\|\to0$. Therefore there is a neighbourhood of $y_0$ in the tube and a constant $c>0$ with $\|A_x^*\lambda\|\ge c\|\lambda\|$ for all $x$ there in incident strata. In particular $A_x^*$ is injective, $A_x$ is surjective, and $(\pi,r)|_S$ is a submersion throughout that neighbourhood. [F1, step 2.1, algebra]

4.1 Set $H_x=A_x^*(A_xA_x^*)^{-1}$. Its image lies in $T_xS$ and $A_xH_x=\mathrm{id}$, and it is smooth along $S$ because the frame, the tube differentials and their coefficients are smooth; the singular-value bound gives $\|H_x\|\le1/c$. For a smooth bounded field $w$ on $R$ put $V(x)=H_x(w(\pi(x)),0)$, and put $V_{\rm rad}(x)=H_x(0,r(x))$. Then $d\pi_x(V)=w(\pi(x))$, $dr_x(V)=0$, $d\pi_x(V_{\rm rad})=0$, $dr_x(V_{\rm rad})=r(x)$, and $\|V\|\le\|w\|/c$, $\|V_{\rm rad}\|\le r(x)/c$; all these fields are smooth along $S$ and locally bounded near the given point of $R$. Since there are finitely many incident strata, the neighbourhood and the constant can be chosen to work for all of them at once. [step 3.1, construct, algebra]

5.1 The construction applies near every point of $R$ and an empty stratum contributes no instances; when $m=0$ the same argument uses only the normal row of $A_x$ and proves radial submersivity, so no positive lower-stratum dimension is needed. What is proved is ordinary tube transversality together with one-stratum bounded lifts: on approaching a different intermediate stratum, independently chosen lifts need not agree with that stratum's choices, so simultaneous compatible control data and the gluing of controlled lifts remain separate obligations. [F1, F2, A1, step 4.1] ∎

## Remarks

- The submersion conclusion is relative to the single lower stratum $R$: the estimates are uniform near each point of $R$ but nothing is asserted about uniformity along the whole stratification, and no simultaneous Mather identities for several lower strata are claimed.
