---
id: lem-ip-open-euclidean-locally-finite-smooth-partition
kind: lemma
title: Locally finite smooth partitions of unity on Euclidean open sets
status: draft
origin: pipeline
deps:
  - lem-rat-embeds-dense
  - lem-smooth-bump-between-concentric-euclidean-balls
  - thm-heine-borel-rn
  - thm-product-of-countable
  - thm-rationals-countable
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Gláucio Terra, Introduction to Geometric Measure Theory — Lecture Notes, version 1.6"
      url: "https://www.ime.usp.br/~glaucio/mat6704/textos/GMTLecureNotes.pdf"
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 0
---

## Statement

If an open set $\Omega\subseteq\mathbb R^n$ is covered by a countable family of open sets $(V_\ell)_{\ell\in I}$, then there is a countable locally finite family of nonnegative functions $(\eta_j)\subset C_c^\infty(\Omega)$ summing to one, with each $\operatorname{supp}\eta_j$ contained in one member $V_\ell$ of the cover. Locally finite means that each point has a neighborhood meeting only finitely many supports.

## Statement references

[[lem-smooth-bump-between-concentric-euclidean-balls|A smooth bump can equal one on a smaller concentric ball and vanish outside a larger ball.]]

## Facts & Assumptions

**Given:** An open set $\Omega\subseteq\mathbb R^n$ and a countable open cover of $\Omega$.

[F1] For $n\ge1$, closed bounded subsets of $\mathbb R^n$ are compact. ([[thm-heine-borel-rn]])

[F2] Rational vectors are dense in $\mathbb R^n$, and $\mathbb Q^n$ is countable. ([[lem-rat-embeds-dense]], [[thm-rationals-countable]], [[thm-product-of-countable]])

[F3] For $n\ge1$, a smooth cutoff exists between any two concentric balls whose closures are nested. ([[lem-smooth-bump-between-concentric-euclidean-balls]])

## Proof

**Given:** The open set $\Omega$ and its countable open cover.

1.1 If $\Omega=\varnothing$, the empty family proves the claim. If $n=0$ and $\Omega\ne\varnothing$, then $\Omega=\mathbb R^0$ is a singleton; choose one cover member containing it and the single function $\eta=1$, which is smooth and compactly supported. Thus assume $n\ge1$ and $\Omega\ne\varnothing$. For $m\ge1$ set $K_m=\{x:|x|\le m,\ \operatorname{dist}(x,\Omega^c)\ge1/m\}$ when $\Omega\ne\mathbb R^n$, and set $K_m=\overline B(0,m)$ when $\Omega=\mathbb R^n$; put $K_m=\varnothing$ for $m\le0$. Each $K_m$ is compact by [F1], the sets are nested, $K_m\subset\operatorname{int}K_{m+1}$, and their interiors cover $\Omega$. The compact shells $S_m:=K_m\setminus\operatorname{int}K_{m-1}$ cover $\Omega$ and lie in the open sets $U_m:=\operatorname{int}K_{m+1}\setminus K_{m-2}$. The family $(U_m)$ is locally finite: any compact subset of $\Omega$ lies in some $\operatorname{int}K_N$ and hence in $K_{m-2}$ for all sufficiently large $m$. [F1, given, algebra]

2.1 Fix once a smooth nonnegative cutoff $\theta$ equal to one on $\overline B(0,1)$ and supported in $B(0,2)$, whose existence is [F3]. In each $U_m$, consider the rational inner balls $B(q,r)$ for which $\overline B(q,2r)\subset U_m\cap V_\ell$ for some cover index $\ell$. Indexed by $(\ell,q,r)$, these balls form a countable cover of $S_m$: for each point choose a cover member containing it, then density [F2] gives a rational center and radius with the required doubled closure. Compactness of $S_m$ gives a finite subcover. Order all finite lists of eligible indexed balls by natural-number codes and take the first list covering $S_m$; thus no choice principle is needed. For each selected ball use the fixed rescaled cutoff $\psi_{m,j}(x):=\theta((x-q)/r)$. The family is locally finite because each shell contributes finitely many cutoffs supported in $U_m$, and each support also lies in its assigned cover member. Its sum $s:=\sum_{m,j}\psi_{m,j}$ is smooth and positive on $\Omega$ because the shells cover $\Omega$. [F2, F3, step 1.1, choose, construct]

3.1 Define $\eta_{m,j}:=\psi_{m,j}/s$. Then each function is smooth, nonnegative and compactly supported in $\Omega$, the family is locally finite, and $\sum_{m,j}\eta_{m,j}=1$. Each support remains in its assigned cover member, and enumeration gives the required countable family. [step 2.1, algebra] ∎
