---
id: thm-neron-tate-height-zero-iff-torsion
kind: theorem
title: Zero canonical height is equivalent to torsion over a number field
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 10
deps:
  - def-axiom-of-choice
  - def-dependent-choice
  - def-number-field
  - def-abelian-variety-over-a-field
  - def-neron-tate-canonical-height
  - thm-canonical-height-is-quadratic-and-functorial
  - thm-canonical-height-northcott-property
justified_by: []
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "Brian Conrad, Abelian Varieties"
      url: "https://math.stanford.edu/~conrad/249CS15Page/handouts/abvarnotes.pdf"
      locator: "§§10.2–10.3, canonical-height positivity and torsion criterion, pp. 95–103."
    - title: "Bjorn Poonen, Rational Points on Varieties"
      url: "https://math.mit.edu/~poonen/papers/Qpoints.pdf"
      locator: "§8.4.4–8.4.5, canonical-height descent and finiteness."
---

## Statement

Assume the Axiom of Choice and Dependent Choice. Let $K/\mathbb Q$ be a finite extension, let $A/K$ be a proper, smooth, geometrically connected group variety, let $L$ be a symmetric ample invertible sheaf, and let $P\in A(K)$. For a Weil height $h_L$ of $L$, define $\widehat h_L(P)=\lim_{j\to\infty}4^{-j}h_L([2]^jP)$. Then $\widehat h_L(P)=0$ if and only if $P$ is torsion, meaning that $mP=0$ for some integer $m\ge1$.

## Statement references

[[def-axiom-of-choice|Axiom of Choice]]

[[def-dependent-choice|Dependent Choice]]

[[def-number-field|number field]]

[[def-abelian-variety-over-a-field|abelian variety]]

[[def-neron-tate-canonical-height|canonical height]]

## Facts & Assumptions

**Given:** AC and DC; a number field $K$; an abelian variety $A/K$; a symmetric ample invertible sheaf $L$; and $P\in A(K)$.

[A1] AC and DC are the stated axioms ([[def-axiom-of-choice]], [[def-dependent-choice]]).

[F1] The canonical height is represented by a symmetric biadditive form $B_L$, with $\widehat h_L(Q)=B_L(Q,Q)$ ([[thm-canonical-height-is-quadratic-and-functorial]]).

[F2] Every canonical-height sublevel set $\{Q\in A(K):\widehat h_L(Q)\le C\}$, for $C\ge0$, is finite ([[thm-canonical-height-northcott-property]]).

## Proof

**Proof technique:** use quadratic homogeneity for one direction and Northcott finiteness of the zero sublevel for the other.

1.1 If $P$ is torsion, choose $m\ge1$ with $mP=0$. By biadditivity in [F1], $\widehat h_L(mP)=m^2\widehat h_L(P)$; also $\widehat h_L(0)=B_L(0,0)=0$. Since $mP=0$, this yields $\widehat h_L(P)=0$. [F1, given, algebra]

2.1 If $\widehat h_L(P)=0$, then for every integer $k$, [F1] gives $\widehat h_L(kP)=k^2\widehat h_L(P)=0$. All multiples $kP$ therefore lie in the finite zero sublevel set from [F2]. Two distinct integers $r<s$ have $rP=sP$, so $(s-r)P=0$ with $s-r\ge1$; hence $P$ is torsion. The proof uses no full Mordell–Weil theorem; AC and DC enter only through the cited suppliers [A1]. [A1, F1, F2, given, algebra] ∎
