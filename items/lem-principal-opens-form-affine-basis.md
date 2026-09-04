---
id: lem-principal-opens-form-affine-basis
kind: lemma
title: "Principal opens form a basis for the Zariski topology on an affine variety"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-principal-open-classical-variety, thm-zariski-closed-sets-affine-space]
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "J. S. Milne, Algebraic Geometry, Chapter 3c"
      url: "https://www.jmilne.org/math/CourseNotes/AG.pdf"
    - title: "Donu Arapura, Notes on Basic Algebraic Geometry, §1.3 and localization discussion"
      url: "https://www.math.purdue.edu/~arapura/preprints/algeom.pdf"
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-04
---

## Statement

Let $X$ be a classical affine variety over an algebraically closed field $k$.
Then the principal opens $D_X(\overline f)$ form a basis for the Zariski
topology on $X$. In particular,
$$ D_X(\overline f)\cap D_X(\overline g)=D_X(\overline f\,\overline g) $$
for all $\overline f,\overline g\in k[X]$.

## Facts & Assumptions

**Given:** A classical affine variety $X$ over an algebraically closed field $k$.

[L1] For $\overline f\in k[X]$, the principal open is $D_X(\overline f)=\{x\in X:\overline f(x)\ne0\}$ ([[def-principal-open-classical-variety]]).

[L2] Closed subsets of affine space are zero loci of sets of polynomials ([[thm-zariski-closed-sets-affine-space]]).

## Proof

**Proof technique:** direct.

1.1 For any $\overline f\in k[X]$, the set $D_X(\overline f)$ is open because it is the complement in $X$ of the closed subset where $\overline f$ vanishes. Also a point lies in $D_X(\overline f)\cap D_X(\overline g)$ exactly when both $\overline f$ and $\overline g$ are nonzero there, equivalently when $\overline f\,\overline g$ is nonzero there. Thus $D_X(\overline f)\cap D_X(\overline g)=D_X(\overline f\,\overline g)$. [L1, given, algebra]

1.2 Let $U\subseteq X$ be Zariski-open and $x\in U$. Then $X\setminus U$ is closed in $X$, so there is a set $S$ of polynomials on the ambient affine space with $$ X\setminus U=X\cap V(S) $$ by [L2]. Since $x\notin V(S)$, choose $f\in S$ with $f(x)\ne0$. Then $x\in D_X(\overline f)\subseteq U$. Hence every open set is a union of principal opens. [L1, L2, choose]

2.1 Steps 1.1 and 1.2 are exactly the basis criterion. [step 1.1, step 1.2] ∎
