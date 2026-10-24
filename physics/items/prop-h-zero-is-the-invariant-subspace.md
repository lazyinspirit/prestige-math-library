---
id: prop-h-zero-is-the-invariant-subspace
kind: proposition
title: "Degree-zero Lie algebra cohomology is the invariant subspace"
status: published
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 0
deps: [def-representation-of-a-lie-algebra, def-chevalley-eilenberg-cochains, def-chevalley-eilenberg-differential, def-lie-algebra-cohomology, thm-the-chevalley-eilenberg-differential-squares-to-zero, prop-zero-th-lie-algebra-cohomology-is-invariants]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "Pavel Etingof, Lie Groups and Lie Algebras, MIT 18.755 lecture notes (Spring 2024), §45.2 pp.246–249 and §48.1 pp.259–261"
      url: "https://live.ocw.mit.edu/courses/18-755-lie-groups-and-lie-algebras-ii-spring-2024/mit18_755_s24_lec_full.pdf"
      locator: "§48.1, printed p.260, the degree-zero identity H^0(g,V)=V^g"
    - title: "Peter Woit, Lie Algebra Cohomology and the Borel–Weil–Bott Theorem (Math G4344, Spring 2012), printed pp.1–7"
      url: "https://www.math.columbia.edu/~woit/LieGroups-2012/borelweilbott.pdf"
      locator: "printed p.2, invariants and the derived-functor interpretation; the degree-zero computation is local"
---

## Statement

Let $\mathfrak a$ be a Lie algebra and $V$ an $\mathfrak a$-module. In the
convention of [[def-chevalley-eilenberg-cochains]], evaluation at $1$ identifies
$C^0(\mathfrak a,V)$ with $V$, and [[def-chevalley-eilenberg-differential]] gives
$(d^0v)(x)=x\cdot v$ for $x\in\mathfrak a$, $v\in V$. Hence
$$H^0(\mathfrak a,V)=V^{\mathfrak a}=\{v\in V:x\cdot v=0\text{ for every }x\in\mathfrak a\},$$
so the degree-zero cohomology is the invariant subspace; for the trivial module
this reads $H^0(\mathfrak a,k)=k$. This normalizes the degree-zero end of the
page and agrees with [[prop-zero-th-lie-algebra-cohomology-is-invariants]].

## Facts & Assumptions

**Given:** A Lie algebra $\mathfrak a$ and an $\mathfrak a$-module $V$.

[L1] Degree-zero cochains are $\operatorname{Hom}_k(\Lambda^0\mathfrak a,V)$, and evaluation at $1\in k=\Lambda^0\mathfrak a$ identifies this space with $V$; the cochain spaces vanish in negative degrees ([[def-chevalley-eilenberg-cochains]]).

[L2] The differential in degree zero is $(d^0v)(x)=x\cdot v$ for all $x\in\mathfrak a$ and $v\in V$ ([[def-chevalley-eilenberg-differential]]), and $d^1d^0=0$ ([[thm-the-chevalley-eilenberg-differential-squares-to-zero]]).

[L3] $H^q(\mathfrak a,V)=\ker d^q/\operatorname{im}d^{q-1}$ ([[def-lie-algebra-cohomology]]).

[L4] The published statement $H^0(\mathfrak g,M)=M^{\mathfrak g}$ for the same Chevalley–Eilenberg convention ([[prop-zero-th-lie-algebra-cohomology-is-invariants]]); the module identity $[x,y]v=x(yv)-y(xv)$ of [[def-representation-of-a-lie-algebra]] is not needed below, only the action itself.

## Proof

**Proof technique:** compute in degree zero.

1.1 By [L1] an element of $C^0(\mathfrak a,V)$ is the same as a vector $v\in V$, and $d^0v=0$ means exactly that the linear map $x\mapsto x\cdot v$ vanishes, that is $x\cdot v=0$ for every $x\in\mathfrak a$. Hence $\ker d^0=\{v\in V:x\cdot v=0\text{ for every }x\in\mathfrak a\}$. [L1, L2]

2.1 The space $C^{-1}(\mathfrak a,V)$ is zero by [L1], so $\operatorname{im}d^{-1}=0$; substituting into [L3] gives $H^0(\mathfrak a,V)=\ker d^0$, and step 1.1 identifies this with the invariant subspace $V^{\mathfrak a}$. [L1, L3, step 1.1]

3.1 For the trivial module the action on $k$ is zero by definition, so every vector is invariant and $H^0(\mathfrak a,k)=k$; this is the special case $M=k$ of [L4]. If $\mathfrak a=0$ the condition $x\cdot v=0$ is vacuous, so $H^0(0,V)=V$; if $V=0$ both sides are zero. [L4, step 1.1] ∎ 
