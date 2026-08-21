---
id: lem-open-cover-loop-generation
kind: lemma
title: "Loops over a two-set path-connected open cover factor through the covering sets"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-based-loops-and-fundamental-group, thm-fundamental-group-laws,
       def-induced-homomorphism-on-fundamental-groups, def-path-connected,
       thm-lebesgue-number-lemma, thm-heine-borel-rn,
       lem-continuity-is-local-and-pastes, lem-finite-choice,
       thm-continuity-characterisations-top, cor-archimedean-reciprocal]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-21
sources:
  scraped: []
  references:
    - title: "Allen Hatcher, Algebraic Topology, Lemma 1.15"
      url: "https://pi.math.cornell.edu/~hatcher/AT/AT%2B.pdf"
pipeline_run: null
---

## Statement

Let $X=U\cup V$, where $U$ and $V$ are open path-connected subsets of $X$, let $U\cap V$ be path-connected, and fix $x_0\in U\cap V$. If $j_U:U\hookrightarrow X$ and $j_V:V\hookrightarrow X$ are the inclusions, then every element of $\pi_1(X,x_0)$ is a finite product of elements in the images of

$$ (j_U)_*:\pi_1(U,x_0)\to\pi_1(X,x_0),\qquad (j_V)_*:\pi_1(V,x_0)\to\pi_1(X,x_0). $$

Equivalently, these two images generate $\pi_1(X,x_0)$ ([[def-based-loops-and-fundamental-group]], [[def-induced-homomorphism-on-fundamental-groups]]).

## Facts & Assumptions

**Given:** The cover, basepoint, and inclusion maps in the Statement, and a based loop $\alpha:I\to X$ at $x_0$.

[F1] If an open cover of a compact metric space has Lebesgue number $\delta>0$, every nonempty subset of diameter less than $\delta$ lies in one cover member ([[thm-lebesgue-number-lemma]]).

[F2] A space is path-connected when every pair of its points is joined by a path in that space ([[def-path-connected]]).

[F3] Loop concatenation is well defined on path-homotopy classes and makes $\pi_1(X,x_0)$ a group, with constant-loop identity and path-reversal inverses ([[thm-fundamental-group-laws]]).

[F4] A natural-number-indexed finite family of nonempty sets has a choice function, without any choice axiom ([[lem-finite-choice]]).

[F5] A map is continuous exactly when the preimage of every open set is open ([[thm-continuity-characterisations-top]]).

[F6] The closed interval $I=[0,1]$ is a compact subset of the usual metric real line ([[thm-heine-borel-rn]]).

[F7] For every real $\eta>0$ there is a natural $q\ge1$ with $1/q<\eta$ ([[cor-archimedean-reciprocal]]).

[F8] A composite of continuous maps is continuous ([[lem-continuity-is-local-and-pastes]]).

## Proof

**Proof technique:** direct.

1.1 By [F5], $\alpha^{-1}(U)$ and $\alpha^{-1}(V)$ form an open cover of the compact metric interval $I$. Choose a Lebesgue number $\delta>0$ by [F1], then choose $q\ge1$ with $1/q<\delta$ by [F7] and use the subdivision $t_i=i/q$. Each restricted path $\alpha_i:=\alpha|_{[t_{i-1},t_i]}$, reparametrized to $I$, is continuous by [F8] and lies wholly in $U$ or wholly in $V$; assign it to $U$ if its image lies in $U$, and to $V$ otherwise. Merge adjacent pieces assigned to the same set. After merging, every interior subdivision value $\alpha(t_i)$ lies in $U\cap V$; the construction also admits the constant loop and the case of one retained piece. [F1, F5, F6, F7, F8]

2.1 Put $\lambda_0=\lambda_m=c_{x_0}$. For each remaining interior vertex, [F2] makes the family of paths in $U\cap V$ from $x_0$ to $\alpha(t_i)$ nonempty, so [F4] supplies paths $\lambda_i$ for the finitely many vertices. If $\alpha_i$ lies in $A_i\in\{U,V\}$, then $\beta_i:=\lambda_{i-1}*\alpha_i*\bar\lambda_i$ is a based loop in $A_i$. [step 1.1, F2, F4, choose]

3.1 In the product $[\beta_1]\cdots[\beta_m]$, every adjacent pair $\bar\lambda_i*\lambda_i$ cancels up to endpoint-fixed path homotopy, and the outside connectors are constant. Thus [F3] gives $[\alpha]=(j_{A_1})_*[\beta_1]\cdots(j_{A_m})_*[\beta_m]$. For $m=1$ this is the single factor $[\alpha]$, and for a constant loop it is the identity, so every loop class has the asserted factorization. [step 2.1, F3, algebra] ∎
