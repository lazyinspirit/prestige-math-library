---
id: ex-cartan-involution-and-k-plus-p-for-sl-n-r
kind: example
title: Cartan involution and k plus p for sl n r
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-cartan-involution-of-a-real-semisimple-lie-algebra, def-cartan-decomposition-of-a-real-semisimple-lie-algebra, ex-general-and-special-linear-lie-groups, ex-orthogonal-and-special-orthogonal-lie-groups, ex-classical-simple-lie-algebras-and-their-killing-forms, def-transpose-of-a-matrix, def-killing-form-of-a-finite-dimensional-lie-algebra, thm-cartans-semisimplicity-criterion, prop-bracket-relations-and-killing-signs-in-a-cartan-decomposition]
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Anthony W. Knapp, Lie Groups Beyond an Introduction, 2nd ed., Chapter VI"
      url: "https://www.math.stonybrook.edu/~aknapp/download/Beyond2-clickable.pdf"
      locator: "Chapter VI, §1, negative-transpose Cartan involution and the (6.25) sign conventions, printed pp. 355-358; Chapter VI, §4, Example 1 for sl(n,R), printed p. 371"
    - title: "Pavel Etingof, MIT 18.745 Lie Groups and Lie Algebras I, Lectures 19-24"
      url: "https://ocw.mit.edu/courses/18-745-lie-groups-and-lie-algebras-i-fall-2020/mit18_745_f20_lec_full.pdf"
      locator: "Lecture 43, §43.1, printed pp. 217-218"
landmark: false
proof_strategy: direct
---

## Example

Let $n\ge2$ and let $\mathfrak g_0=\mathfrak{sl}_n(\mathbb R)$ be the real Lie
algebra of real traceless $n\times n$ matrices
([[ex-general-and-special-linear-lie-groups]]). Then

$$\theta(X)=-X^{\mathsf T},\qquad \mathfrak k_0=\{X:X^{\mathsf T}+X=0\}=\mathfrak{so}(n),\qquad \mathfrak p_0=\{X\in\mathfrak{sl}_n(\mathbb R):X^{\mathsf T}=X\}$$

is a Cartan involution of $\mathfrak g_0$ together with its Cartan
decomposition: $\mathfrak k_0$ is the special orthogonal Lie algebra and
$\mathfrak p_0$ is the space of symmetric traceless matrices
([[def-cartan-involution-of-a-real-semisimple-lie-algebra]],
[[def-cartan-decomposition-of-a-real-semisimple-lie-algebra]]).

## Facts & Assumptions

**Given:** An integer $n\ge2$, the real Lie algebra $\mathfrak g_0=\mathfrak{sl}_n(\mathbb R)$ of real traceless matrices, the map $\theta(X)=-X^{\mathsf T}$, and the Killing form $B$ of $\mathfrak g_0$.

[L1] $\mathfrak{sl}_n(\mathbb R)$ is a real Lie subalgebra of $M_n(\mathbb R)$ under $[X,Y]=XY-YX$, with $\operatorname{tr}(XY)=\operatorname{tr}(YX)$ and $\operatorname{tr}X=0$ for every $X$ ([[ex-general-and-special-linear-lie-groups]]).

[L2] Transposition is additive, involutive and reverses products: $(XY)^{\mathsf T}=Y^{\mathsf T}X^{\mathsf T}$ ([[def-transpose-of-a-matrix]]).

[L3] The Killing form of $\mathfrak{sl}_n$ is $B(X,Y)=2n\operatorname{tr}(XY)$ for $n\ge2$, so it is nondegenerate on $\mathfrak{sl}_n(\mathbb R)$, and $\mathfrak{sl}_n(\mathbb R)$ is therefore semisimple ([[ex-classical-simple-lie-algebras-and-their-killing-forms]], [[def-killing-form-of-a-finite-dimensional-lie-algebra]], [[thm-cartans-semisimplicity-criterion]]).

[L4] The orthogonal Lie algebra is $\mathfrak{so}(n)=\{X\in M_n(\mathbb R):X^{\mathsf T}+X=0\}$ ([[ex-orthogonal-and-special-orthogonal-lie-groups]]).

[L5] A Cartan involution of a real semisimple Lie algebra $\mathfrak g_0$ is an involutive automorphism $\theta$ with $B_\theta(X,Y)=-B(X,\theta Y)$ positive definite, and its Cartan decomposition is the decomposition into the $+1$ and $-1$ eigenspaces; then $[\mathfrak k_0,\mathfrak k_0]\subseteq\mathfrak k_0$, $[\mathfrak k_0,\mathfrak p_0]\subseteq\mathfrak p_0$, $[\mathfrak p_0,\mathfrak p_0]\subseteq\mathfrak k_0$, with $B$ negative definite on $\mathfrak k_0$ and positive definite on $\mathfrak p_0$ ([[def-cartan-involution-of-a-real-semisimple-lie-algebra]], [[def-cartan-decomposition-of-a-real-semisimple-lie-algebra]], [[prop-bracket-relations-and-killing-signs-in-a-cartan-decomposition]]).





**Proof technique:** direct matrix computation.

1.1 The map $\theta$ is an involutive automorphism of $\mathfrak g_0$: by [L2], $\theta^2X=X^{\mathsf T\mathsf T}=X$; $\operatorname{tr}(-X^{\mathsf T})=-\operatorname{tr}X$ makes $\theta$ preserve tracelessness; and $\theta[X,Y]=-(XY-YX)^{\mathsf T}=-(Y^{\mathsf T}X^{\mathsf T}-X^{\mathsf T}Y^{\mathsf T})=[\theta X,\theta Y]$ by [L2]. [given, L1, L2, algebra]

1.2 The Killing form satisfies $B(X,Y)=2n\operatorname{tr}(XY)$ on all of $\mathfrak g_0$ by [L3]. [L3]

2.1 The fixed space of $\theta$ is $\mathfrak k_0=\mathfrak{so}(n)$: $\theta X=X$ means $-X^{\mathsf T}=X$, that is $X^{\mathsf T}+X=0$, which is the defining condition of $\mathfrak{so}(n)$ by [L4]; such an $X$ automatically has $\operatorname{tr}X=0$, so no tracelessness is lost. [step 1.1, L1, L4, algebra]

2.2 The anti-fixed space of $\theta$ is the space of symmetric traceless matrices: $\theta X=-X$ means $-X^{\mathsf T}=-X$, that is $X^{\mathsf T}=X$, and membership in $\mathfrak g_0$ adds $\operatorname{tr}X=0$. [step 1.1, L1, algebra]

2.3 The form $B_\theta(X,Y)=-B(X,\theta Y)$ is positive definite: by steps 1.2 and 2.2, $B_\theta(X,Y)=-2n\operatorname{tr}(-XY^{\mathsf T})=2n\operatorname{tr}(XY^{\mathsf T})=2n\sum_{i,j=1}^nX_{ij}Y_{ij}$, and $\operatorname{tr}(XX^{\mathsf T})=\sum_{i,j}X_{ij}^2>0$ for $X\ne0$. Hence $\theta$ is a Cartan involution of the semisimple algebra $\mathfrak g_0$ of [L3]. [step 1.1, step 1.2, L3, L5, algebra]

3.1 The eigenspace decomposition $\mathfrak g_0=\mathfrak k_0\oplus\mathfrak p_0$ holds with $\mathfrak k_0$ as in step 2.1 and $\mathfrak p_0$ as in step 2.2, since every $X$ is $\tfrac12(X-\theta X)+\tfrac12(X+\theta X)$ and the two summands are respectively symmetric and skew-symmetric. [step 2.1, step 2.2, algebra]

3.2 The bracket relations follow directly from transposition: for skew $X,Y$ one has $[X,Y]^{\mathsf T}=-{[X,Y]}$, for skew $X$ and symmetric $Y$ one has $[X,Y]^{\mathsf T}=[X,Y]$, and for symmetric $X,Y$ one has $[X,Y]^{\mathsf T}=-[X,Y]$; hence $[\mathfrak k_0,\mathfrak k_0]\subseteq\mathfrak k_0$, $[\mathfrak k_0,\mathfrak p_0]\subseteq\mathfrak p_0$ and $[\mathfrak p_0,\mathfrak p_0]\subseteq\mathfrak k_0$, in agreement with [L5]. [step 2.1, step 2.2, L5, algebra]

3.3 The Killing signs also follow from the computations: for $X\in\mathfrak k_0$ we have $B(X,X)=2n\operatorname{tr}(X^2)=-2n\operatorname{tr}(XX^{\mathsf T})<0$ for $X\ne0$, and for $Y\in\mathfrak p_0$ we have $B(Y,Y)=2n\operatorname{tr}(Y^2)=2n\operatorname{tr}(YY^{\mathsf T})>0$ for $Y\ne0$, so $B$ is negative definite on $\mathfrak k_0$ and positive definite on $\mathfrak p_0$. [step 1.2, step 2.1, step 2.2, algebra]

4.1 Endpoints and scope: for $n=1$ the algebra $\mathfrak{sl}_1(\mathbb R)=0$ is semisimple (its Killing form is nondegenerate vacuously), and the same construction degenerates to the zero Cartan decomposition. The hypothesis $n\ge2$ isolates the nonzero classical case covered by [L3]. For $n=2$ one has $\dim\mathfrak k_0=1$ and $\dim\mathfrak p_0=2$, so both summands are nonzero. The computations are finite, use no choice principle, and the displayed identification of $\mathfrak k_0$ with $\mathfrak{so}(n)$ is an equality of matrix sets, not merely an isomorphism. [given, step 2.1, step 2.2, L3, algebra] ∎
