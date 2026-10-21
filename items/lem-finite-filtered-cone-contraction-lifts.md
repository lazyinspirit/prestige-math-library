---
id: lem-finite-filtered-cone-contraction-lifts
kind: lemma
title: "Finite filtered perturbation of an explicit cone contraction"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps: []
dependency_level: 0
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Ozsvath, Stipsicz and Szabo, Grid Homology for Knots and Links"
      url: "https://web.math.princeton.edu/~petero/GridHomologyBook.pdf"
      locator: "Appendices A.6–A.8; filtered complexes, associated graded, and lifting homotopy equivalences"
---

## Statement

Work over a polynomial ring of characteristic two, with an integer Maslov grading and integer Alexander filtration. Let $E$ be a based module whose homogeneous piece of each Maslov degree is finite dimensional over the coefficient field and has finite upper and lower Alexander bounds. Let $\delta_0,\delta$ be two module-linear differentials of Maslov degree $-1$ on $E$, where $\delta_0$ preserves Alexander degree and $\Delta=\delta-\delta_0$ strictly lowers it. Suppose a module-linear map $h_0$ of Maslov degree $+1$ preserves Alexander degree and satisfies $\delta_0h_0+h_0\delta_0=\operatorname{id}$. Then
$$h=h_0\sum_{r\ge0}(\Delta h_0)^r$$
is a well-defined filtered module-linear contraction for $\delta$, so $\delta h+h\delta=\operatorname{id}$. The sum is finite on each input. If $E$ has a finite module basis and each map in the formula is a finite polynomial matrix, the sum is a finite polynomial matrix as well.

In particular, for a filtered degree-zero chain map $F:C\to B$, any explicit Alexander-degree-preserving contraction of the cone of its associated-graded map lifts by this formula to a contraction of the cone of $F$, provided the stated degreewise bounds hold. The upper-right block of the lifted contraction is a filtered chain homotopy inverse to $F$, and its diagonal blocks give homotopies from both composites to the identity. If the initial data are finite domain counts, these matrices are finite sums of compositions of those domain counts.

## Statement references

[Ozsvath, Stipsicz and Szabo, *Grid Homology for Knots and Links*, Appendices A.6–A.8](https://web.math.princeton.edu/~petero/GridHomologyBook.pdf)

## Facts & Assumptions

**Given:** The two differentials, the explicit contraction, and the stated finite Alexander bounds in each Maslov degree. The fixed basis identifies the associated-graded module with the Alexander-graded underlying module; the filtration-preserving part of a differential is its associated-graded differential in this identification.

## Proof

1.1 The operator $N=\Delta h_0$ has Maslov degree zero and strictly lowers Alexander degree. If an input has Maslov degree $j$ and Alexander degree at most $a$, then $N^r$ of that input has Alexander degree at most $a-r$. Below the finite lower bound for degree $j$ it must vanish. Hence $N$ is locally nilpotent. The finite geometric sum gives a well-defined inverse $A^{-1}=\sum_{r\ge0}N^r$ to $A=1+N$; multiplication telescopes on each input. The sum defines a module-linear map because every summand is module-linear and, for each fixed finite set of inputs and their sum, one can take a common finite truncation. [given, construct, algebra]

2.1 From $\delta^2=\delta_0^2=0$ obtain $\delta_0\Delta+\Delta\delta_0+\Delta^2=0$. Consequently $\delta A+A\delta_0=\Delta+\delta_0\Delta h_0+\Delta^2h_0+\Delta h_0\delta_0=\Delta(1+\delta_0h_0+h_0\delta_0)=0$. Thus $A^{-1}\delta=\delta_0A^{-1}$. This computation uses the supplied contraction identity and characteristic two; it has no convergence issue by step 1.1. [given, step 1.1, algebra]

3.1 Define $h=h_0A^{-1}$. Using step 2.1 gives $\delta h+h\delta=(\delta h_0+h_0\delta_0)A^{-1}=(1+\Delta h_0)A^{-1}=1$. Every term has Maslov degree $+1$, and all terms except possibly the zeroth lower Alexander degree, so $h$ is filtered. If there is a finite module basis, choose for each basis vector a nilpotence exponent in step 1.1 and take the maximum. Module-linearity then shows that $N$ to this maximum power vanishes on the entire module. The matrix formula is therefore a finite polynomial sum. [given, step 1.1, step 2.1, construct, algebra]

4.1 The cone of $F$ is $C[1]\oplus B$, with differential $\delta(c,b)=(d_Cc,Fc+d_Bb)$; $C[1]$ raises Maslov degree by one and leaves Alexander filtration unchanged. Its Alexander-degree-preserving part is exactly the cone of the associated-graded map. Apply steps 1.1–1.3 to this module and write the lifted contraction in blocks $h=(h_C,G;L,h_B)$ relative to this decomposition. The upper-right block of $\delta h+h\delta=1$ is $d_CG+Gd_B=0$, so $G:B\to C$ is a filtered degree-zero chain map. [given, step 3.1, construct, algebra]

5.1 The upper-left block of that identity gives $d_Ch_C+h_Cd_C+GF=1$, and the lower-right block gives $FG+d_Bh_B+h_Bd_B=1$. The diagonal blocks have Maslov degree $+1$ and do not increase filtration, since $h$ has these properties. Thus $G$ is the claimed filtered inverse and these blocks are its two inverse homotopies. A finite product of matrices counting finite domains counts finite words of composable domains, with the products of their monomial weights; the finite sum in step 3.1 therefore has precisely the asserted finite-count interpretation. [step 3.1, step 4.1, algebra] ∎
