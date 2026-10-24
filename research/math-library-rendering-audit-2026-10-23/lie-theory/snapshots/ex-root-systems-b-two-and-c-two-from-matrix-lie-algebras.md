---
id: ex-root-systems-b-two-and-c-two-from-matrix-lie-algebras
kind: example
title: Root systems B_2 and C_2 from matrix Lie algebras
status: published
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-axiom-of-choice, thm-roots-of-a-complex-semisimple-lie-algebra-form-a-reduced-crystallographic-root-system, def-root-and-root-space-relative-to-a-cartan-subalgebra, def-cartan-subalgebra-of-a-lie-algebra, def-normalizer-of-a-lie-subalgebra, ex-classical-simple-lie-algebras-and-their-killing-forms, thm-cartans-semisimplicity-criterion]
forward_refs: [def-rank-and-isomorphism-of-root-systems]
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Pavel Etingof, MIT 18.745 Lie Groups and Lie Algebras I, Lectures 19–24"
      url: "https://ocw.mit.edu/courses/18-745-lie-groups-and-lie-algebras-i-fall-2020/mit18_745_f20_lec_full.pdf"
      locator: "Examples 20.12–20.14, printed pp. 110–111"
    - title: "Anthony W. Knapp, Lie Groups Beyond an Introduction, 2nd ed., Chapter II"
      url: "https://www.math.stonybrook.edu/~aknapp/download/Beyond2-clickable.pdf"
      locator: "Chapter II, §1 and §5"
landmark: false
proof_strategy: direct
axiom_strength: "ZF + AC; inherited from the general reduced crystallographic root-system theorem."
verification:
  audited: 2026-09-22
---

## Example

Assume AC ([[def-axiom-of-choice]]). For the symmetric matrix $S=\sum_{i=1}^{5}E_{i,6-i}$ let
$$\mathfrak{so}_5(\mathbb C)=\{X\in M_5(\mathbb C):X^tS+SX=0\},$$
the complex orthogonal Lie algebra of the symmetric bilinear form with Gram
matrix $S$ (whose quadratic form is $2x_1x_5+2x_2x_4+x_3^2$), and for
$J=\begin{pmatrix}0&I_2\\-I_2&0\end{pmatrix}$ let
$$\mathfrak{sp}_4(\mathbb C)=\{X\in M_4(\mathbb C):X^tJ+JX=0\},$$
the complex symplectic Lie algebra. Both are finite-dimensional complex
semisimple Lie algebras under the commutator bracket, and their diagonal
subalgebras
$$\mathfrak h_B=\{\operatorname{diag}(x_1,x_2,0,-x_2,-x_1)\},\qquad \mathfrak h_C=\{\operatorname{diag}(y_1,y_2,-y_1,-y_2)\}$$
are Cartan subalgebras. Writing $\varepsilon_i$ for the coordinate functionals
on $\mathfrak h_B$ and $\eta_i$ for those on $\mathfrak h_C$, the roots are
$$\Phi_B=\{\pm\varepsilon_1,\pm\varepsilon_2,\pm(\varepsilon_1+\varepsilon_2),\pm(\varepsilon_1-\varepsilon_2)\}$$
for $\mathfrak{so}_5(\mathbb C)$ and
$$\Phi_C=\{\pm2\eta_1,\pm2\eta_2,\pm(\eta_1+\eta_2),\pm(\eta_1-\eta_2)\}$$
for $\mathfrak{sp}_4(\mathbb C)$; these are the root systems $B_2$ and $C_2$,
each with eight roots, and the assignment
$\varphi(\varepsilon_1)=\eta_1+\eta_2$, $\varphi(\varepsilon_2)=\eta_1-\eta_2$
carries $\Phi_B$ bijectively onto $\Phi_C$, so $B_2\cong C_2$.

## Facts & Assumptions

**Given:** AC; the matrix realizations $\mathfrak{so}_5(\mathbb C)$ and $\mathfrak{sp}_4(\mathbb C)$ defined in the Example, their diagonal subalgebras $\mathfrak h_B,\mathfrak h_C$, and the bracket formula $[H,E_{ab}]=(H_{aa}-H_{bb})E_{ab}$ for diagonal $H$.

[L1] A Cartan subalgebra is nilpotent and self-normalizing; roots are the nonzero adjoint weights relative to it ([[def-cartan-subalgebra-of-a-lie-algebra]], [[def-normalizer-of-a-lie-subalgebra]], [[def-root-and-root-space-relative-to-a-cartan-subalgebra]]).

[L2] The Killing forms of $\mathfrak{so}_5$ and $\mathfrak{sp}_4$ are nondegenerate, so Cartan's criterion makes both algebras semisimple ([[ex-classical-simple-lie-algebras-and-their-killing-forms]], [[thm-cartans-semisimplicity-criterion]]).

[L3] The roots of a complex semisimple Lie algebra form a reduced crystallographic root system, and a linear bijection of root sets is a root-system isomorphism when it preserves all Cartan integers ([[thm-roots-of-a-complex-semisimple-lie-algebra-form-a-reduced-crystallographic-root-system]], [[def-rank-and-isomorphism-of-root-systems]]).

## Verification

**Proof technique:** direct.

1.1 The equations defining both matrix spaces are closed under commutators, and [L2] makes the resulting Lie algebras semisimple. Their displayed diagonal subalgebras are abelian. Choose $H_B=\operatorname{diag}(1,2,0,-2,-1)$ and $H_C=\operatorname{diag}(1,2,-1,-2)$; each has pairwise distinct diagonal entries. If $X$ normalizes the corresponding diagonal subalgebra, then $[X,H_B]$ or $[X,H_C]$ is diagonal, but a commutator with a diagonal matrix has zero diagonal and therefore vanishes. The matrix-unit bracket formula then makes $X$ diagonal, and the defining form equation places it in $\mathfrak h_B$ or $\mathfrak h_C$. Thus each displayed subalgebra is nilpotent and self-normalizing, hence Cartan by [L1]. [L1, L2, given, algebra]

2.1 For $\mathfrak{so}_5(\mathbb C)$, put $a'=6-a$. Its zero-weight space is $\mathfrak h_B$, and its nonzero weight spaces are spanned by the nonzero vectors $E_{ab}-E_{b'a'}$ with $a\ne b$ and $b\ne a'$. Each is an $\operatorname{ad}_H$-eigenvector of weight $H_{aa}-H_{bb}$ because $H_{a'a'}=-H_{aa}$ and $H_{b'b'}=-H_{bb}$. Listing these weights gives $\pm\varepsilon_1,\pm\varepsilon_2,\pm(\varepsilon_1+\varepsilon_2),\pm(\varepsilon_1-\varepsilon_2)$; the would-be weights $\pm2\varepsilon_i$ correspond to $b=a'$, where the displayed vector is zero. Thus there are exactly eight roots, the set $B_2$. [L1, given, step 1.1, algebra]

2.2 For $\mathfrak{sp}_4(\mathbb C)$, the form-compatible root vectors in the $a$-blocks are $E_{12}-E_{43}$ and $E_{21}-E_{34}$, of weights $\pm(\eta_1-\eta_2)$. The symmetric $b$-block gives $E_{13},E_{24},E_{14}+E_{23}$ of weights $2\eta_1,2\eta_2,\eta_1+\eta_2$, and the symmetric $c$-block gives their three negative weights. Hence the roots are $\pm2\eta_1,\pm2\eta_2,\pm(\eta_1+\eta_2),\pm(\eta_1-\eta_2)$ — exactly eight roots, the set $C_2$. [L1, given, step 1.1, algebra]

3.1 By [L3], the two root sets computed in steps 2.1 and 2.2 are reduced crystallographic root systems. The linear map $\varphi(\varepsilon_1)=\eta_1+\eta_2$, $\varphi(\varepsilon_2)=\eta_1-\eta_2$ carries the eight vectors of $\Phi_B$ bijectively onto those of $\Phi_C$. Its two image basis vectors are orthogonal of squared length $2$, so $(\varphi u,\varphi v)=2(u,v)$ for all $u,v$; the common factor cancels from every Cartan integer. Thus [L3] makes $\varphi$ a root-system isomorphism $B_2\cong C_2$. [L3, step 2.1, step 2.2, algebra] ∎
