---
id: lem-sugawara-mode-one-commutator
kind: lemma
title: The Sugawara mode-one commutator
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 3
deps:
  - def-sugawara-modes
  - def-dual-coxeter-number-for-normalized-form
  - def-positive-energy-unitary-affine-module
  - def-positive-energy-affine-module
  - def-untwisted-affine-central-extension
  - def-loop-algebra-of-a-simple-lie-algebra
  - def-compact-real-form-of-a-complex-semisimple-lie-algebra
  - def-residue-two-cocycle-on-a-loop-algebra
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: Antony Wassermann, Kac–Moody and Virasoro Algebras, Chapter III §6
      url: https://arxiv.org/pdf/1004.1287
---

## Statement

Let $\mathfrak k$ be a compact real form of a finite-dimensional complex simple Lie algebra, let $(X_i)$ be orthonormal for $Q=-B|_{\mathfrak k}$, and let $H$ be a restricted positive-energy unitary affine-current module of level $k\in\mathbb Z_{\ge0}$. For the Sugawara modes in [[def-sugawara-modes]], for every $X\in\mathfrak k$ and $m\in\mathbb Z$,
$$[L_m,X(0)]=0,\qquad [L_m,X(1)]=-X(m+1).$$

## Facts & Assumptions

**Given:** The compact current-mode bracket, the level $k$, and the normally ordered mode formula on $H$.

[F1] [[def-sugawara-modes]]: with $Q$-orthonormal $(X_i)$, $L_m=-S_m/(k+h^\vee)$, where $S_m=\frac12\sum_i\sum_{r\in\mathbb Z}:X_i(r)X_i(m-r):$; negative modes are placed left of nonnegative modes.

[F2] [[def-dual-coxeter-number-for-normalized-form]]: $\frac12\sum_i\operatorname{ad}(X_i)^2=-h^\vee I$ on $\mathfrak g$.

[F3] [[def-untwisted-affine-central-extension]]: on this compact basis, $[X(a),Y(b)]=[X,Y](a+b)-akQ(X,Y)\delta_{a+b,0}$.

[F4] [[def-positive-energy-affine-module]]: for every vector and current, all sufficiently large positive modes annihilate that vector.

[F5] [[def-positive-energy-unitary-affine-module]]: the central generator acts as $kI$ and $X(n)^*=-X(-n)$ for compact $X$.

[F6] [[def-compact-real-form-of-a-complex-semisimple-lie-algebra]]: the Killing form is negative definite on $\mathfrak k$.

[F7] [[def-residue-two-cocycle-on-a-loop-algebra]]: $B$ is invariant, is a positive-real rescaling of the Killing form, and is normalized so long roots have square $2$.

[F8] [[def-loop-algebra-of-a-simple-lie-algebra]]: $\mathfrak g$ is finite-dimensional and simple.

## Proof

1.1 Invariance of $Q$ gives $\sum_i([X,X_i]\otimes X_i+X_i\otimes[X,X_i])=0$. Applying the mode product $u\otimes v\mapsto u(a)v(b)$ shows the corresponding operator identity for every pair of mode indices $a,b$. Thus the diagonal zero-mode action on the inverse tensor vanishes, so $[X(0),S_m]=0$; the indices are unchanged and the normal-ordering split is unchanged. Also $Q$ is positive definite by [F6]–[F7], and finite dimensionality in [F8] gives an orthonormal basis. [F1, F6, F7, F8, algebra]

2.1 Put $q=m+1$. Expand $[X(1),S_m]$ using [F1] and [F3]. Write $\mathbf1_P=1$ when condition $P$ holds and $0$ otherwise. For each $\alpha+\beta=q$, the noncentral terms are $A_{\alpha,\beta}=\sum_i[X,X_i](\alpha)X_i(\beta)$ with coefficient $a_{\alpha,\beta}=\frac12(\mathbf1_{\alpha\le0}+\mathbf1_{\beta\ge0})$, and $B_{\alpha,\beta}=\sum_iX_i(\alpha)[X,X_i](\beta)$ with coefficient $b_{\alpha,\beta}=\frac12(\mathbf1_{\alpha<0}+\mathbf1_{\beta\ge1})$. Indeed, in the $r<0$ terms, commuting on the first factor gives $A$ with $\alpha=r+1\le0$ and commuting on the second gives $B$ with $\alpha=r<0$; in the $r\ge0$ terms the normal product is $J_{x^a}(m-r)J_{x_a}(r)$, so commuting on the first factor gives $A$ with $\beta=r\ge0$ and commuting on the second gives $B$ with $\beta=r+1\ge1$. The invariant-tensor identity in step 1.1 gives $A_{\alpha,\beta}+B_{\alpha,\beta}=0$, and $a_{\alpha,\beta}-b_{\alpha,\beta}=\frac12(\mathbf1_{\alpha=0}+\mathbf1_{\beta=0})$. Hence the current terms reduce to $\frac12\sum_i\bigl([X,X_i](0)X_i(q)+[X,X_i](q)X_i(0)\bigr)=\frac12\sum_i\operatorname{ad}_{X_i}^2(X)(q)=-h^\vee X(q).$ For this reduction, apply the invariant-tensor identity at indices $(q,0)$ to replace the second summand by $-\sum_iX_i(q)[X,X_i](0)$; the resulting difference is $\frac12\sum_i\left[\, [X,X_i](0),X_i(q)\right]$. The mode bracket at index zero identifies this with $\frac12\sum_i\operatorname{ad}_{[X,X_i]}(X_i)(q)$, and skew-symmetry gives $\operatorname{ad}_{[X,X_i]}(X_i)=\operatorname{ad}_{X_i}^2(X)$. Then [F2] gives the last equality. The central term occurs once from each original factor with mode $-1$; its contraction with the dual basis sums to $X$ because $(X_i)$ is $Q$-orthonormal, so [F3] and [F5] give $-kX(q)/2$ from each factor, including when both factors have mode $-1$. Therefore $[X(1),S_m]=-(k+h^\vee)X(q)$, and [F1] gives $[L_m,X(1)]=-X(q)$. These expansions are legitimate on every vector: in the $r\ge0$ tail the rightmost mode has index $r$ and its commutator has index $r+1$, while in the $r<0$ tail the rightmost mode has index $m-r$ and its commutator has index $m-r+1$; all annihilate a fixed vector for sufficiently large absolute tail index by [F4]. [F1, F2, F3, F4, F5, step 1.1, algebra] ∎
