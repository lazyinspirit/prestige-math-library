---
id: lem-plane-exterior-of-a-closed-disc-is-path-connected
kind: lemma
title: "The exterior of a closed disc in the plane is path-connected"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [cor-euclidean-spheres-are-path-connected, lem-radial-normalisation-is-continuous, def-euclidean-spheres-and-closed-balls, def-path-connected, thm-path-connected-implies-connected, lem-continuity-is-local-and-pastes, def-metric-ball, lem-complex-conjugation-and-modulus-laws, rem-complex-plane-euclidean-dictionary]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "L. V. Ahlfors, Complex Analysis, 3rd ed., Ch. 4 §2.1"
      url: "https://people.math.gatech.edu/~mccuan/courses/6321/lars-ahlfors-complex-analysis-third-edition-mcgraw-hill-science_engineering_math-1979.pdf"
pipeline_run: null
---

## Statement

Let $c\in\mathbb C$. Then:

1. for every real $R\ge0$, the open exterior
   $$E_>:=\{\,z\in\mathbb C\ :\ |z-c|>R\,\}$$
   is path-connected, and therefore a connected subset of $\mathbb C$; taking
   $R=0$, the punctured plane $\mathbb C\setminus\{c\}$ is path-connected;
2. for every real $R>0$, the closed exterior
   $$E_\ge:=\{\,z\in\mathbb C\ :\ |z-c|\ge R\,\}$$
   is path-connected, and therefore a connected subset of $\mathbb C$.

## Facts & Assumptions

**Given:** A point $c\in\mathbb C$ and a real $R$, with $R\ge0$ in clause 1 and $R>0$ in clause 2; the plane is read as $\mathbb R^2$ with its Euclidean metric through [[rem-complex-plane-euclidean-dictionary]]. Write $E$ for whichever of the two sets is under discussion.

[L1] For $n\ge2$ the unit sphere $S^{n-1}\subseteq\mathbb R^n$ is path-connected and connected ([[cor-euclidean-spheres-are-path-connected]]).

[L2] For $n\ge1$ the map $\rho(x)=x/\lVert x\rVert_2$ from $\mathbb R^n\setminus\{0\}$ to $S^{n-1}$ is continuous ([[lem-radial-normalisation-is-continuous]]).

[L3] For $n\ge1$, $S^{n-1}=S_2(0,1)=\{x\in\mathbb R^n:\lVert x\rVert_2=1\}$ ([[def-euclidean-spheres-and-closed-balls]]).

[L4] A subset is path-connected when any two of its points are joined by a continuous map from $[0,1]$ whose image lies in it ([[def-path-connected]]).

[L5] A path-connected subset of a topological space is a connected subset ([[thm-path-connected-implies-connected]]).

[L6] A composite of continuous maps is continuous, and a function whose restrictions to the members of a finite closed cover are continuous is continuous ([[lem-continuity-is-local-and-pastes]]).

[L7] $B(x,r)=\{y:d(x,y)<r\}$ ([[def-metric-ball]]).

[L8] $|zw|=|z||w|$ and $|z+w|\le|z|+|w|$ for complex $z,w$ ([[lem-complex-conjugation-and-modulus-laws]]).

## Proof

**Proof technique:** direct.

1.1 Let $z,w\in E$ and put $\rho=\max(|z-c|,|w-c|)$. In clause 1 this gives $\rho\ge|z-c|>R\ge0$ and $\rho\ge|w-c|>R$, and in clause 2 it gives $\rho\ge|z-c|\ge R>0$ and $\rho\ge|w-c|\ge R$; in both cases $\rho>0$ and $z\ne c$, $w\ne c$, so $u=(z-c)/|z-c|$ and $v=(w-c)/|w-c|$ lie on the unit circle $S^1$ by [L2] and [L3]. [given, L2, L3, L7]

1.2 By [L1] with $n=2$ there is a continuous $\sigma:[0,1]\to S^1$ with $\sigma(0)=u$ and $\sigma(1)=v$. [L1, L4]

2.1 The map $\mu(s)=c+\bigl((1-s)|z-c|+s\rho\bigr)u$ is continuous on $[0,1]$ by [L6], joins $z$ to $c+\rho u$, and satisfies $|\mu(s)-c|=(1-s)|z-c|+s\rho$ by [L8] and $|u|=1$; that value lies between $|z-c|$ and $\rho$, so it exceeds $R$ in clause 1 and is at least $R$ in clause 2, and $\mu$ has image in $E$. The same formula with $w$ and $v$ gives a continuous $\nu:[0,1]\to E$ joining $w$ to $c+\rho v$. [step 1.1, L6, L7, L8]

2.2 The map $s\mapsto c+\rho\,\sigma(s)$ is continuous on $[0,1]$ by [L6], joins $c+\rho u$ to $c+\rho v$, and has $|c+\rho\sigma(s)-c|=\rho$ by [L8], which exceeds $R$ in clause 1 and is at least $R$ in clause 2, so its image lies in $E$. [step 1.1, step 1.2, L6, L7, L8]

3.1 Concatenating $\mu$, the path of step 2.2 and the reversal of $\nu$, each on a closed subinterval of $[0,1]$ and agreeing at the two shared endpoints, gives by [L6] a continuous map $[0,1]\to E$ from $z$ to $w$. Since $z,w\in E$ were arbitrary, $E$ is path-connected by [L4], hence a connected subset of $\mathbb C$ by [L5]; the argument was run for both clauses at once, and at $R=0$ clause 1 reads $\mathbb C\setminus\{c\}$. [step 2.1, step 2.2, L4, L5, L6] ∎
