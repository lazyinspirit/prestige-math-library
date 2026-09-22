---
id: ex-complex-simple-lie-algebra-viewed-as-a-real-simple-algebra
kind: example
title: Complex simple lie algebra viewed as a real simple algebra
status: published
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [thm-complexification-dichotomy-for-a-real-simple-lie-algebra, def-complexification-of-a-real-lie-algebra, prop-complexification-has-a-canonical-conjugation-with-fixed-algebra-g-zero, prop-complexification-preserves-semisimplicity, prop-ideals-and-quotients-of-semisimple-lie-algebras, cor-semisimple-lie-algebras-are-centerless-and-perfect, thm-cartans-semisimplicity-criterion, def-killing-form-of-a-finite-dimensional-lie-algebra]
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Anthony W. Knapp, Lie Groups Beyond an Introduction, 2nd ed., Chapter VI"
      url: "https://www.math.stonybrook.edu/~aknapp/download/Beyond2-clickable.pdf"
      locator: "Chapter VI, §9, Theorem 6.94(a) and Proposition 6.95 with proofs, printed pp. 407-408"
    - title: "Pavel Etingof, MIT 18.745 Lie Groups and Lie Algebras I, Lectures 19-24"
      url: "https://ocw.mit.edu/courses/18-745-lie-groups-and-lie-algebras-i-fall-2020/mit18_745_f20_lec_full.pdf"
      locator: "Lecture 40, §40.1, printed pp. 206-207"
landmark: false
proof_strategy: direct
verification:
  audited: 2026-09-22
---

## Example

Let $\mathfrak s$ be a finite-dimensional complex simple Lie algebra and let
$\mathfrak s_{\mathbb R}$ be the same real vector space with the bracket
restricted to real scalars, regarded as a real Lie algebra. Then
$\mathfrak s_{\mathbb R}$ is a simple real Lie algebra, and its
complexification is $\mathbb C$-isomorphic to
$\mathfrak s\oplus\overline{\mathfrak s}$, where
$\overline{\mathfrak s}$ is $\mathfrak s$ with the conjugate complex
structure, with the canonical conjugation of the real form interchanging the
two factors. This is the complex-as-real case of the dichotomy of
[[thm-complexification-dichotomy-for-a-real-simple-lie-algebra]].

## Facts & Assumptions

**Given:** A finite-dimensional complex simple Lie algebra $\mathfrak s$ with multiplication by $i$ written $J$, and the real Lie algebra $\mathfrak s_{\mathbb R}$ obtained by restricting scalars.

[L1] $\mathfrak s_{\mathbb R}$ is a real Lie algebra whose bracket is the restriction of the bracket of $\mathfrak s$; $J$ is $\mathbb R$-linear with $J^2=-\mathrm{id}$ and $J[X,Y]=[JX,Y]=[X,JY]$, and the complexification $(\mathfrak s_{\mathbb R})_{\mathbb C}$ carries the bracket extending the one of $\mathfrak s_{\mathbb R}$ ([[def-complexification-of-a-real-lie-algebra]]).

[L2] The Killing form of $\mathfrak s_{\mathbb R}$ is $B_{\mathbb R}(X,Y)=2\operatorname{Re}B_{\mathfrak s}(X,Y)$, and a finite-dimensional real Lie algebra is semisimple exactly when its Killing form is nondegenerate ([[def-killing-form-of-a-finite-dimensional-lie-algebra]], [[thm-cartans-semisimplicity-criterion]]).

[L3] Every ideal of a finite-dimensional semisimple Lie algebra is a direct sum of simple ideals with an ideal complement, hence is itself semisimple; a semisimple Lie algebra equals its own derived algebra ([[prop-ideals-and-quotients-of-semisimple-lie-algebras]], [[cor-semisimple-lie-algebras-are-centerless-and-perfect]]).

[L4] The complexification $(\mathfrak s_{\mathbb R})_{\mathbb C}$ carries the canonical conjugation $\sigma(X+iY)=X-iY$, whose fixed locus is the embedded copy of $\mathfrak s_{\mathbb R}$, and complexification preserves semisimplicity ([[prop-complexification-has-a-canonical-conjugation-with-fixed-algebra-g-zero]], [[def-complexification-of-a-real-lie-algebra]], [[prop-complexification-preserves-semisimplicity]]).





**Proof technique:** direct computation with ideals and with the explicit isomorphism.

1.1 The real Lie algebra $\mathfrak s_{\mathbb R}$ is semisimple: its Killing form is $B_{\mathbb R}(X,Y)=2\operatorname{Re}B_{\mathfrak s}(X,Y)$ because the adjoint operators of $\mathfrak s_{\mathbb R}$ are the $\mathbb C$-linear operators $\operatorname{ad}_X$ viewed over $\mathbb R$ and the real trace of a complex-linear operator is twice the real part of its complex trace, so if $B_{\mathbb R}(X,Y)=0$ for all $Y$, then replacing $Y$ by $JY$ and using $B_{\mathfrak s}(X,JY)=iB_{\mathfrak s}(X,Y)$ gives $\operatorname{Im}B_{\mathfrak s}(X,Y)=0$ as well, hence $B_{\mathfrak s}(X,\cdot)=0$ and $X=0$; thus $B_{\mathbb R}$ is nondegenerate and [L2] applies. [given, L1, L2, algebra]

2.1 For every ideal $\mathfrak a\subseteq\mathfrak s_{\mathbb R}$ one has $\mathfrak a=[\mathfrak a,\mathfrak s_{\mathbb R}]$: by [L3] applied to the semisimple algebra $\mathfrak s_{\mathbb R}$ of step 1.1, $\mathfrak a$ is semisimple and satisfies $\mathfrak a=[\mathfrak a,\mathfrak a]$, so $\mathfrak a=[\mathfrak a,\mathfrak a]\subseteq[\mathfrak a,\mathfrak s_{\mathbb R}]\subseteq\mathfrak a$. [step 1.1, L3, algebra]

3.1 Every ideal is $J$-stable: if $X\in\mathfrak a$ and $X=\sum_j[X_j,Y_j]$ with $X_j\in\mathfrak a$ and $Y_j\in\mathfrak s_{\mathbb R}$ as in step 2.1, then $JX=\sum_jJ[X_j,Y_j]=\sum_j[X_j,JY_j]\in[\mathfrak a,\mathfrak s_{\mathbb R}]=\mathfrak a$ by [L1]. Hence a real ideal of $\mathfrak s_{\mathbb R}$ is a complex subspace and a complex ideal of $\mathfrak s$. [step 2.1, L1, algebra]

4.1 Consequently $\mathfrak s_{\mathbb R}$ is simple over $\mathbb R$: since $\mathfrak s$ is complex simple, a complex ideal is $0$ or $\mathfrak s$, so every ideal of $\mathfrak s_{\mathbb R}$ is $0$ or $\mathfrak s_{\mathbb R}$; the algebra is nonabelian because $\mathfrak s$ is nonabelian, so it is simple. [step 3.1, algebra]

5.1 Define $\overline{\mathfrak s}$ to be the real space $\mathfrak s$ with the complex structure $-J$; it is a complex Lie algebra with the same bracket. Then the map $L:(\mathfrak s_{\mathbb R})_{\mathbb C}\to\mathfrak s\oplus\overline{\mathfrak s}$, $L(X+iY)=(X+JY,\ X-JY)$, is a $\mathbb C$-linear isomorphism of complex vector spaces: it is additive and $\mathbb R$-bilinear in the obvious way, its inverse is $(U,V)\mapsto\frac12(U+V)+i\,\frac12J^{-1}(U-V)$, and $L(i(X+iY))=L(-Y+iX)=(-Y+JX,\ -Y-JX)=(J(X+JY),\ -J(X-JY))$, which is $i$ times $L(X+iY)$ in the complex structure $(J,-J)$ of $\mathfrak s\oplus\overline{\mathfrak s}$. Dimension counts agree: both sides have complex dimension $2\dim_{\mathbb C}\mathfrak s$. [given, step 4.1, algebra]

6.1 The map $L$ preserves brackets: for $X,Y,X',Y'\in\mathfrak s_{\mathbb R}$ one has $[L(X+iY),L(X'+iY')]=([X+JY,X'+JY'],\ [X-JY,X'-JY'])$ and $L([X+iY,X'+iY'])=L([X,X']-[Y,Y']+i([X,Y']+[Y,X']))=([X,X']-[Y,Y']+J([X,Y']+[Y,X']),\ [X,X']-[Y,Y']-J([X,Y']+[Y,X']))$, and the two expressions agree because $[JY,JY']=J^2[Y,Y']=-[Y,Y']$ and $[JY,X']=J[Y,X']$ by [L1]. Hence $L$ is an isomorphism of complex Lie algebras. [step 5.1, L1, algebra]

7.1 The canonical conjugation of $(\mathfrak s_{\mathbb R})_{\mathbb C}$, namely $\sigma(X+iY)=X-iY$, corresponds under $L$ to the swap of the two factors: $L(\sigma(X+iY))=L(X-iY)=(X-JY,\ X+JY)$, which is the interchange of the entries of $L(X+iY)=(X+JY,X-JY)$; its fixed locus is the image of $\mathfrak s_{\mathbb R}$ under the embedding, in agreement with [L4]. [step 5.1, step 6.1, L4, algebra]

8.1 Combining the steps: $\mathfrak s_{\mathbb R}$ is a simple real Lie algebra by step 4.1, and its complexification is isomorphic to $\mathfrak s\oplus\overline{\mathfrak s}$ by steps 5.1 and 6.1, with the canonical conjugation of the real form acting as the swap of the two factors by step 7.1. This realizes the complex-as-real alternative of [[thm-complexification-dichotomy-for-a-real-simple-lie-algebra]] directly, from the explicit isomorphism $L$ and without using any supplementary clause of that theorem: a complex simple algebra regarded as real has a complexification that is a direct sum of two simple ideals interchanged by conjugation, and the example supplies the isomorphism and the swap. [step 4.1, step 5.1, step 6.1, step 7.1]

9.1 Endpoints and scope: $\mathfrak s$ is nonabelian by hypothesis, so $\mathfrak s_{\mathbb R}$ has nonzero bracket and simplicity is not vacuous; for $\mathfrak s=\mathfrak{sl}_2(\mathbb C)$ the real dimension $\dim_{\mathbb R}\mathfrak s_{\mathbb R}=6$ equals $\dim_{\mathbb C}(\mathfrak s\oplus\overline{\mathfrak s})$ computed over $\mathbb C$ as $3+3$, in agreement with step 5.1; the zero algebra is excluded because it is not simple, and every step is a finite computation, so the argument uses no choice principle. [given, step 5.1, step 7.1, algebra] ∎
