---
id: lem-generalized-weight-space-decomposition-for-a-nilpotent-subalgebra
kind: lemma
title: Generalized weight spaces of a nilpotent subalgebra
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-lower-central-series-and-nilpotent-lie-algebra, def-lie-subalgebra-ideal-and-center, def-derivation-of-a-lie-algebra, thm-engels-theorem, prop-nilpotent-lie-algebras-are-solvable, thm-primary-decomposition-for-an-endomorphism, thm-lies-theorem]
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Anthony W. Knapp, Lie Groups Beyond an Introduction, 2nd ed., Chapter II"
      url: "https://www.math.stonybrook.edu/~aknapp/download/Beyond2-clickable.pdf"
      locator: "Chapter II, Propositions 2.4 and 2.5"
landmark: false
proof_strategy: direct
---

## Statement

Let $\mathfrak g$ be a finite-dimensional complex Lie algebra and let
$\mathfrak h\subseteq\mathfrak g$ be a nilpotent Lie subalgebra
([[def-lower-central-series-and-nilpotent-lie-algebra]],
[[def-lie-subalgebra-ideal-and-center]]). For $\alpha\in\mathfrak h^*$ put

$$\mathfrak g_\alpha=\{X\in\mathfrak g:\text{for each }H\in\mathfrak h\text{ there is }n=n(H,X)\text{ with }(\operatorname{ad}_H-\alpha(H))^nX=0\},$$

with $\operatorname{ad}_H(X)=[H,X]$ as in
[[def-derivation-of-a-lie-algebra]]. Then:

(i) each $\mathfrak g_\alpha$ is a linear subspace of $\mathfrak g$ stable
under $\operatorname{ad}_H$ for every $H\in\mathfrak h$, and
$\mathfrak g_\alpha=0$ for all but finitely many $\alpha$;
(ii) $\mathfrak g=\bigoplus_{\alpha\in\mathfrak h^*}\mathfrak g_\alpha$;
(iii) $\mathfrak h\subseteq\mathfrak g_0$;
(iv) $[\mathfrak g_\alpha,\mathfrak g_\beta]\subseteq\mathfrak g_{\alpha+\beta}$ for all $\alpha,\beta$.

## Facts & Assumptions

**Given:** A finite-dimensional complex Lie algebra $\mathfrak g$ and a nilpotent Lie subalgebra $\mathfrak h\subseteq\mathfrak g$.

[L1] A finite-dimensional Lie algebra is nilpotent if and only if every adjoint operator of it is nilpotent ([[thm-engels-theorem]]); applied to $\mathfrak h$, the endomorphism $\operatorname{ad}_H|_{\mathfrak h}$ is nilpotent for every $H\in\mathfrak h$.

[L2] A nilpotent Lie algebra is solvable ([[prop-nilpotent-lie-algebras-are-solvable]]), and every nonzero finite-dimensional module of a solvable complex Lie algebra has a flag lowered by every represented operator, by Lie's theorem ([[thm-lies-theorem]]).

[L3] For an endomorphism $T$ of a finite-dimensional complex vector space $V$ and $N=\dim V$, the generalized eigenspaces $\ker(T-\lambda)^N$ are $T$-invariant and $V=\bigoplus_\lambda\ker(T-\lambda)^N$ ([[thm-primary-decomposition-for-an-endomorphism]]).

## Proof

**Proof technique:** simultaneous generalized eigenspace refinement.

1.1 Let $H\in\mathfrak h$ and $N=\dim\mathfrak g$. By [L3] applied to $\operatorname{ad}_H$, the spaces $V_{\lambda,H}=\ker(\operatorname{ad}_H-\lambda)^N$ are $\operatorname{ad}_H$-invariant and $\mathfrak g=\bigoplus_\lambda V_{\lambda,H}$. Moreover $\mathfrak h\subseteq\mathfrak g_0$: for $H'\in\mathfrak h$, [L1] gives $(\operatorname{ad}_H)^nH'=0$ for some $n$, so $H'\in\mathfrak g_0$ because the condition defining $\mathfrak g_0$ is vacuous at $\alpha=0$. This is (iii). [L1, L3, algebra]

1.2 We claim each $V_{\lambda,H}$ is stable under $\operatorname{ad}_Y$ for every $Y\in\mathfrak h$. Write $\mathfrak h=\bigcup_{m=0}^{d}\mathfrak h(m)$ with $\mathfrak h(m)=\{Y:(\operatorname{ad}_H)^mY=0\}$ and $d=\dim\mathfrak h$, and induct on $m$. For $m=0$ we have $\mathfrak h(0)=0$. Let $Y\in\mathfrak h(m)$ with $m\ge1$; then $[H,Y]\in\mathfrak h(m-1)$ because $(\operatorname{ad}_H)^{m-1}[H,Y]=(\operatorname{ad}_H)^mY=0$. The operator identity

2.1 Fix a basis $H_1,\dots,H_r$ of $\mathfrak h$; iterating step 1.2 over the pairwise compatible decompositions $\mathfrak g=\bigoplus_\lambda V_{\lambda,H_j}$ refines the direct sum decomposition to $\mathfrak g=\bigoplus_{(\lambda_1,\dots,\lambda_r)}(V_{\lambda_1,H_1}\cap\cdots\cap V_{\lambda_r,H_r})$, and each summand is stable under $\operatorname{ad}_H$ for every $H\in\mathfrak h$. For a tuple $(\lambda_1,\dots,\lambda_r)$ with nonzero summand $W$ let $\alpha\in\mathfrak h^*$ be the linear functional with $\alpha(H_j)=\lambda_j$. By [L2], the solvable algebra $\mathfrak h$ acts triangularly on $W$ in a suitable basis $v_1,\dots,v_s$; the diagonal entries of such a triangular form are eigenvalues of $\operatorname{ad}_{H_j}$ on $W$ for each $j$, and since $W\subseteq V_{\lambda_j,H_j}$ the only eigenvalue of $\operatorname{ad}_{H_j}$ there is $\lambda_j$, so every diagonal entry equals $\alpha$. Hence each $v_i$ satisfies $(\operatorname{ad}_H-\alpha(H))^i v_i=0$ for all $H\in\mathfrak h$, and therefore $W\subseteq\mathfrak g_\alpha$. In particular only finitely many $\mathfrak g_\alpha$ are nonzero. [L2, step 1.2, algebra]

3.1 Since each $\mathfrak g_\alpha$ is a linear subspace by definition and stable under every $\operatorname{ad}_H$ by step 1.2, and since an element of $\mathfrak g_\alpha$ satisfies the generalized eigenvalue condition for each $H_j$ with value $\alpha(H_j)$, we have $\mathfrak g_\alpha\subseteq V_{\alpha(H_1),H_1}\cap\cdots\cap V_{\alpha(H_r),H_r}$; combined with step 2.1 and the injectivity of the map $(\lambda_1,\dots,\lambda_r)\mapsto\sum_j\lambda_j e_j$ on the dual basis, this gives $\mathfrak g_\alpha=V_{\alpha(H_1),H_1}\cap\cdots\cap V_{\alpha(H_r),H_r}$ and the direct sum decomposition (ii), with only finitely many nonzero terms. This proves (i) and (ii). [step 1.2, step 2.1, algebra]

4.1 For $X\in\mathfrak g_\alpha$, $Y\in\mathfrak g_\beta$ and $H\in\mathfrak h$, the binomial expansion gives $(\operatorname{ad}_H-(\alpha+\beta)(H))^n[X,Y]=\sum_{k=0}^{n}\binom nk[(\operatorname{ad}_H-\alpha(H))^kX,(\operatorname{ad}_H-\beta(H))^{n-k}Y]$; choosing $n\ge 2P$ where $P$ bounds the two vanishing exponents for $X$ and $Y$, so that for every $k$ either $k\ge P$ or $n-k\ge P$, every summand is zero, hence $[X,Y]\in\mathfrak g_{\alpha+\beta}$, which is (iv). If $\mathfrak g=0$ all spaces are zero and every assertion is vacuous. [step 3.1, algebra] ∎
