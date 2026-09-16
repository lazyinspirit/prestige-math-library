---
id: ex-root-systems-b-two-and-c-two-from-matrix-lie-algebras
kind: example
title: Root systems B_2 and C_2 from matrix Lie algebras
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [thm-roots-of-a-complex-semisimple-lie-algebra-form-a-reduced-crystallographic-root-system, thm-root-space-decomposition-of-a-complex-semisimple-lie-algebra, def-root-and-root-space-relative-to-a-cartan-subalgebra, def-cartan-subalgebra-of-a-lie-algebra, def-normalizer-of-a-lie-subalgebra, thm-cartan-subalgebras-of-complex-semisimple-lie-algebras-are-exactly-maximal-toral-subalgebras, def-coroot-of-a-lie-algebra-root, prop-brackets-of-root-spaces, cor-the-only-scalar-multiples-of-a-root-that-are-roots-are-plus-or-minus-the-root]
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
---

## Example

For the antisymmetric matrix $S=\sum_{i=1}^{5}E_{i,6-i}$ let
$$\mathfrak{so}_5(\mathbb C)=\{X\in M_5(\mathbb C):X^tS+SX=0\},$$
the complex orthogonal Lie algebra of the form $x_1x_5+x_2x_4+x_3^2$, and for
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

**Given:** The matrix realizations $\mathfrak{so}_5(\mathbb C)$ and $\mathfrak{sp}_4(\mathbb C)$ defined in the Example, their diagonal subalgebras $\mathfrak h_B,\mathfrak h_C$, the bracket formula $[H,E_{ab}]=(H_{aa}-H_{bb})E_{ab}$ for diagonal $H$, and the root-space and reducedness facts of [[def-root-and-root-space-relative-to-a-cartan-subalgebra]], [[prop-brackets-of-root-spaces]] and [[thm-roots-of-a-complex-semisimple-lie-algebra-form-a-reduced-crystallographic-root-system]]; Cartan subalgebras are as in [[def-cartan-subalgebra-of-a-lie-algebra]] and [[def-normalizer-of-a-lie-subalgebra]].

## Verification

**Proof technique:** direct.

1.1 Both algebras are Lie subalgebras, and the displayed diagonals form Cartan subalgebras. For a diagonal $H$ one has $[H,E_{ab}]=(H_{aa}-H_{bb})E_{ab}$, and $X\in\mathfrak{so}_5(\mathbb C)$ lies in $\mathfrak h_B$ exactly when $X$ is diagonal with $X_{11}=-X_{55}$, $X_{22}=-X_{44}$, $X_{33}=0$; the analogous computation for $J$ gives $X_{ii}=-X_{i+2,i+2}$, that is $X\in\mathfrak h_C$. In both cases the diagonal subalgebra is abelian, equals its normalizer (an element normalizing a diagonal algebra with distinct derived entries must be diagonal: for a non-diagonal entry $X_{ab}$ with $a\ne b$ choose $H$ in the algebra with $H_{aa}\ne H_{bb}$, and $H$ can be chosen traceless because the involved indices come in the pairs $a,a'$ with opposite entries), and is therefore a Cartan subalgebra. [given, algebra]

2.1 For $\mathfrak{so}_5(\mathbb C)$ the bracket formula shows that the algebra is spanned by the vectors $E_{ab}-E_{b'a'}$ with $a\ne b$, $b\ne a'$ (where $a'=6-a$), since those are exactly the matrices killed by the condition $X^tS+SX=0$, and each such vector is an eigenvector of $\operatorname{ad}_H$ for the weight $H_{aa}-H_{bb}$ because $H_{a'a'}=-H_{aa}$ and $H_{b'b'}=-H_{bb}$. Listing the pairs $a<b$ with $b\ne6-a$ gives the weights $\pm\varepsilon_1,\pm\varepsilon_2,\pm(\varepsilon_1+\varepsilon_2),\pm(\varepsilon_1-\varepsilon_2)$ — eight roots, since the only other weight values, $\pm2\varepsilon_1$ and $\pm2\varepsilon_2$, come from the excluded pairs with $b=a'$, for which $E_{ab}-E_{b'a'}=0$. This is the root system $B_2$. [given, step 1.1, algebra]

2.2 For $\mathfrak{sp}_4(\mathbb C)$ the same bracket formula gives the weights $H_{aa}-H_{bb}=\pm\eta_i\pm\eta_j$ on the off-diagonal matrix units and $H_{ii}-H_{i+2,i+2}=2\eta_i$ on $E_{i,i+2}$ and its negative on $E_{i+2,i}$. Hence the roots are $\pm2\eta_1,\pm2\eta_2,\pm(\eta_1+\eta_2),\pm(\eta_1-\eta_2)$ — eight roots, the root system $C_2$. [given, step 1.1, algebra]

3.1 Both root sets are invariant under the reflections they define and satisfy the integrality of Cartan integers by [[thm-roots-of-a-complex-semisimple-lie-algebra-form-a-reduced-crystallographic-root-system]], and the reflections of $B_2$ are the transpositions $(\pm\varepsilon_1)\leftrightarrow(\pm\varepsilon_2)$ together with the sign changes, exactly as in $C_2$ after the substitution $\varepsilon_1\mapsto\eta_1+\eta_2$, $\varepsilon_2\mapsto\eta_1-\eta_2$; this substitution is a linear isomorphism and carries the eight vectors of $\Phi_B$ bijectively onto the eight vectors of $\Phi_C$, hence $B_2\cong C_2$. [given, step 2.1, step 2.2, algebra] ∎
