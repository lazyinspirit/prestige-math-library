---
id: prop-complexification-preserves-semisimplicity
kind: proposition
title: Complexification preserves semisimplicity
status: published
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-complexification-of-a-real-lie-algebra, def-killing-form-of-a-finite-dimensional-lie-algebra, thm-cartans-semisimplicity-criterion]
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Anthony W. Knapp, Lie Groups Beyond an Introduction, 2nd ed., Chapter VI"
      url: "https://www.math.stonybrook.edu/~aknapp/download/Beyond2-clickable.pdf"
      locator: "Chapter VI, §1, printed pp. 348-353"
    - title: "Anthony W. Knapp, Lie Groups Beyond an Introduction, 2nd ed., Chapter I"
      url: "https://www.math.stonybrook.edu/~aknapp/download/Beyond2-clickable.pdf"
      locator: "Chapter I, §5, criteria for semisimplicity, printed pp. 23-30"
landmark: false
proof_strategy: direct
verification:
  audited: 2026-09-22
---

## Statement

Let $\mathfrak g_0$ be a finite-dimensional real Lie algebra with
complexification $\mathfrak g_{\mathbb C}$
([[def-complexification-of-a-real-lie-algebra]]). Then $\mathfrak g_0$ is
semisimple if and only if $\mathfrak g_{\mathbb C}$ is semisimple.

## Facts & Assumptions

**Given:** A finite-dimensional real Lie algebra $\mathfrak g_0$ with complexification $\mathfrak g_{\mathbb C}=\mathfrak g_0\otimes_{\mathbb R}\mathbb C$ and canonical real embedding $\varepsilon(X)=X\otimes1$.

[L1] For a finite-dimensional Lie algebra $\mathfrak l$ over a field of characteristic zero (in particular over $\mathbb R$ or $\mathbb C$), the algebra is semisimple if and only if $B_{\mathfrak l}$ is nondegenerate; the Killing form is the trace form of the adjoint representation, $B_{\mathfrak l}(X,Y)=\operatorname{tr}(\operatorname{ad}_X\circ\operatorname{ad}_Y)$ ([[thm-cartans-semisimplicity-criterion]], [[def-killing-form-of-a-finite-dimensional-lie-algebra]]).

[L2] The complexification carries the bracket $[X\otimes z,Y\otimes w]=[X,Y]\otimes zw$ and every element has a unique expression $X\otimes1+i\,Y\otimes1$ with $X,Y\in\mathfrak g_0$; the embedded copy of $\mathfrak g_0$ is a real form, in particular a real Lie subalgebra ([[def-complexification-of-a-real-lie-algebra]]).



**Proof technique:** direct.

1.1 We compute the Killing form of $\mathfrak g_{\mathbb C}$ on embedded elements. Let $X,Y\in\mathfrak g_0$ and choose a real basis $u_1,\dots,u_n$ of $\mathfrak g_0$. This is also a complex basis of $\mathfrak g_{\mathbb C}$: it spans over $\mathbb C$ because $X\otimes z=z\,\varepsilon(X)$ and it is independent over $\mathbb C$ by [L2]; consequently $\varepsilon$ is injective, since $\varepsilon X=0$ for $X=\sum_k t_ku_k$ means $\sum_k t_k(u_k\otimes1)=0$, which forces $t_k=0$ for every $k$ by that independence. In this basis the matrix of $\operatorname{ad}_{\varepsilon(X)}$ has entries determined by $[\varepsilon X,\varepsilon u_k]=\varepsilon[X,u_k]$, the $\mathbb R$-linear extension of $\operatorname{ad}_X$. Hence $$B_{\mathfrak g_{\mathbb C}}(\varepsilon X,\varepsilon Y)=\operatorname{tr}(\operatorname{ad}_{\varepsilon X}\operatorname{ad}_{\varepsilon Y})=\operatorname{tr}_{\mathbb R}(\operatorname{ad}_X\operatorname{ad}_Y)=B_{\mathfrak g_0}(X,Y),$$ using that the trace of the complexification of a real endomorphism equals its real trace computed in the real basis $\{u_k\}$. [L1, L2, algebra]

2.1 The restriction map $Z\mapsto iZ$ is $\mathbb R$-linear and injective on $\mathfrak g_{\mathbb C}$; by [L2] the $\mathbb R$-span of $\varepsilon(\mathfrak g_0)$ and $i\varepsilon(\mathfrak g_0)$ is all of $\mathfrak g_{\mathbb C}$, so every element is $X\otimes1+i\,Y\otimes1$ and the assignment $X+ iY\mapsto(X,Y)$ is a real vector-space isomorphism $\mathfrak g_{\mathbb C}\to\mathfrak g_0\times\mathfrak g_0$. In particular, if a real form of the complex bilinear form $B_{\mathfrak g_{\mathbb C}}$ has no radical outside $0$ then it is nondegenerate as a real form, and conversely. [L1, L2, step 1.1, algebra]

2.2 Suppose first that $\mathfrak g_{\mathbb C}$ is semisimple, so that $B_{\mathfrak g_{\mathbb C}}$ is nondegenerate by [L1]. If $X\in\mathfrak g_0$ satisfies $B_{\mathfrak g_0}(X,Y)=0$ for all $Y\in\mathfrak g_0$, then by step 1.1, $B_{\mathfrak g_{\mathbb C}}(\varepsilon X,\varepsilon Y)=0$ for all $Y\in\mathfrak g_0$. Complex bilinearity gives $B_{\mathfrak g_{\mathbb C}}(\varepsilon X,Z)=0$ for every $Z\in\mathfrak g_{\mathbb C}$: writing $Z=\varepsilon Y+i\,\varepsilon Y'$ with $Y,Y'\in\mathfrak g_0$, the pairing is $B_{\mathfrak g_{\mathbb C}}(\varepsilon X,\varepsilon Y)+i\,B_{\mathfrak g_{\mathbb C}}(\varepsilon X,\varepsilon Y')=0$. Nondegeneracy forces $\varepsilon X=0$, hence $X=0$, so $B_{\mathfrak g_0}$ is nondegenerate and $\mathfrak g_0$ is semisimple by [L1]. [L1, L2, step 1.1, algebra]

3.1 Conversely suppose $\mathfrak g_0$ is semisimple, so $B_{\mathfrak g_0}$ is nondegenerate. Let $Z\in\mathfrak g_{\mathbb C}$ satisfy $B_{\mathfrak g_{\mathbb C}}(Z,W)=0$ for all $W$. Write $Z=\varepsilon X+i\,\varepsilon Y$ with $X,Y\in\mathfrak g_0$. Taking first $W=\varepsilon U$ for $U\in\mathfrak g_0$ and using complex linearity in the second argument together with step 1.1 gives $$0=B_{\mathfrak g_{\mathbb C}}(\varepsilon X,\varepsilon U)+i\,B_{\mathfrak g_{\mathbb C}}(\varepsilon Y,\varepsilon U)=B_{\mathfrak g_0}(X,U)+i\,B_{\mathfrak g_0}(Y,U),$$ so both $B_{\mathfrak g_0}(X,U)=0$ and $B_{\mathfrak g_0}(Y,U)=0$ for all $U\in\mathfrak g_0$. Nondegeneracy gives $X=Y=0$ and hence $Z=0$, so $B_{\mathfrak g_{\mathbb C}}$ is nondegenerate and $\mathfrak g_{\mathbb C}$ is semisimple by [L1]. The two implications together prove the equivalence. [L1, L2, step 1.1, step 2.2, algebra] ∎
