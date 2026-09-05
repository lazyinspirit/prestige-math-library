---
id: thm-morse-functions-are-dense-by-relative-jet-transversality
kind: theorem
title: "Every smooth function admits arbitrarily fine strong-topology perturbations whose differential is transverse to zero, supported away from a closed set where transversality already holds"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [lem-morse-functions-are-transverse-differentials, prop-the-zero-section-is-a-smooth-embedding, thm-parametric-transversality, prop-a-null-set-has-dense-complement-in-a-positive-dimensional-manifold, lem-manifold-bump-for-a-compact-set-inside-an-open-set, thm-a-locally-finite-sum-of-smooth-functions-is-smooth, thm-every-smooth-manifold-admits-a-smooth-proper-exhaustion-function]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-09-05
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Marco Gualtieri, Topology I: Smooth Manifolds, Part 10"
      url: "https://www.math.toronto.edu/mgualt/courses/17-1300/docs/17-1300-notes-10.pdf"
    - title: "Shintaro Fushida-Hardy, Morse theory"
      url: "https://www.scribd.com/document/488533132/morse"
    - title: "Chris Wendl, Functional Analysis lecture notes, Section 10.3"
      url: "https://www.mathematik.hu-berlin.de/~wendl/Winter2020/FunkAna/lecturenotes.pdf"
---

## Statement

Let $M$ be a smooth manifold, let $f:M\to\mathbb R$ be smooth, and let
$A\subseteq M$ be closed. Assume that $df$ is transverse to the zero section on
an open neighbourhood of $A$. Then every neighbourhood of $f$ in the strong
$C^\infty$ topology contains a smooth function $g$ such that:

- $g-f$ is supported in $M\setminus A$;
- $g=f$ on some open neighbourhood of $A$; and
- $dg$ is transverse to the zero section of $T^*M$.

Equivalently, every strong neighbourhood of $f$ contains a Morse function that
agrees with $f$ near $A$.

## Facts & Assumptions

**Given:** A smooth manifold $M$, a smooth function $f:M\to\mathbb R$, a closed set $A\subseteq M$, an open neighbourhood $V$ of $A$ on which $df$ is transverse to the zero section, and a chosen strong smooth neighbourhood $\mathcal U$ of $f$.

[F1] A smooth function is Morse exactly when its differential section is transverse to the zero section ([[lem-morse-functions-are-transverse-differentials]]).

[L1] The zero section is an embedded submanifold, parametric transversality makes the bad parameter set null for a transverse family, and a null subset of a positive-dimensional parameter manifold has dense complement ([[prop-the-zero-section-is-a-smooth-embedding]], [[thm-parametric-transversality]], [[prop-a-null-set-has-dense-complement-in-a-positive-dimensional-manifold]]).

[L2] Smooth bump functions exist on prescribed compact subsets inside open sets, and locally finite sums of smooth functions are smooth ([[lem-manifold-bump-for-a-compact-set-inside-an-open-set]], [[thm-a-locally-finite-sum-of-smooth-functions-is-smooth]]).

[L3] Every smooth manifold admits a smooth proper exhaustion function ([[thm-every-smooth-manifold-admits-a-smooth-proper-exhaustion-function]]).

[A1] A basic strong neighbourhood of $f$ is determined by uniform bounds for finitely many derivatives on each member of a locally finite compact family. The derivative order and tolerance may vary from one member to another. Consequently one may choose a finite order $r_n$ and a sufficiently small derivative bound on each shell so that every locally finite perturbation satisfying all the shell bounds stays inside $\mathcal U$.

## Proof

**Proof technique:** direct.

1.1 Choose an open set $W$ with $A\subseteq W$ and $\overline W\subseteq V$. By [L3], fix a smooth proper exhaustion $h:M\to[0,\infty)$, set $K_{-1}=K_0:=\varnothing$, and for $n\ge1$ let $K_n:=h^{-1}([0,n])$. Using [A1], choose integers $r_n\ge n+1$ and positive tolerances $\varepsilon_n$ so small that whenever smooth functions $u_n$ satisfy $$\operatorname{supp}(u_n)\subseteq\bigl(\operatorname{int}K_{n+1}\setminus K_{n-1}\bigr)\setminus\overline W$$ and $\|u_n\|_{C^{r_n}(K_{n+1})}<\varepsilon_n$ for every $n$, the locally finite sum $u:=\sum_nu_n$ gives $f+u\in\mathcal U$. The varying orders $r_n$ dominate every derivative order imposed by the chosen strong neighbourhood on the corresponding shell. [given, L3, A1, choose]


2.1 Construct inductively $g_n$ so that $g_0=f$, the correction $u_n:=g_n-g_{n-1}$ has the support and size prescribed in step 1.1, and $dg_n$ is transverse to the zero section on a neighbourhood of $\overline W\cup K_n$. Suppose $g_{n-1}$ has been chosen. The set $C_n$ where $dg_{n-1}$ is not transverse on $K_n$ is compact. If $C_n=\varnothing$, put $u_n:=0$ and $g_n:=g_{n-1}$; openness of the transversality locus gives the required neighbourhood of $K_n$, so all the inductive conditions hold. Hence assume that $C_n$ is nonempty. It is disjoint from both $\overline W$ and $K_{n-1}$: on $\overline W$ every earlier correction vanishes and $df$ is transverse, while transversality near $K_{n-1}$ is the inductive hypothesis. Thus $C_n$ has a finite coordinate cover whose chart closures lie in $$\bigl(\operatorname{int}K_{n+1}\setminus K_{n-1}\bigr)\setminus\overline W.$$ Using [L2], choose bump-supported coordinate functions $\phi_i$ on these charts so that their differentials span every cotangent fibre on a neighbourhood of $C_n$. The resulting parameter space is positive-dimensional: a nontransverse point cannot occur when $\dim M=0$, and a nonempty coordinate cover in positive dimension supplies at least one coordinate function. [L2, step 1.1, given, construct]


3.1 In the nonempty case of step 2.1, consider the finite-dimensional family $$g_{n-1,\mathbf a}:=g_{n-1}+\sum_i a_i\phi_i.$$ On a neighbourhood of $C_n$, its parameter derivatives span the cotangent fibres. On the compact remainder of $K_n$, the section $dg_{n-1}$ is already transverse, so after restricting to a sufficiently small parameter ball, transversality there persists for every parameter. Hence the total family is transverse to the zero section on a neighbourhood of $K_n$. By [L1], the bad slice parameters form a null set; because the parameter ball is positive-dimensional, its complement is dense. Choose $\mathbf a_n$ in that complement and close enough to $0$ that $u_n:=\sum_i(a_n)_i\phi_i$ satisfies the bound in step 1.1. Put $g_n:=g_{n-1}+u_n$. Transversality is open, so $dg_n$ is transverse on a neighbourhood of $K_n$, and it still agrees with $df$ near $\overline W$. Together with the empty case handled in step 2.1, this completes the induction. [L1, step 2.1, choose]


4.1 The shell supports are locally finite, so [L2] makes $u:=\sum_{n\ge1}u_n$ smooth. Put $g:=f+u$. Step 1.1 gives $g\in\mathcal U$. Every correction is supported outside $\overline W$, so $g=f$ on the neighbourhood $W$ of $A$ and $g-f$ is supported in $M\setminus A$. Fix $p\in M$ and choose $n$ with $p\in K_n$. Step 3.1 makes $dg_{n+1}$ transverse near $p$, while every $u_m$ with $m\ge n+2$ has support disjoint from $K_n$ and therefore vanishes near $p$. Thus $g$ agrees near $p$ with $g_{n+1}$, so $dg$ is transverse there. Since $p$ was arbitrary, $dg$ is transverse everywhere. [L2, step 1.1, step 3.1]


5.1 By [F1], the final function $g$ is Morse. This proves the relative strong-topology density statement. [F1, step 4.1] ∎
