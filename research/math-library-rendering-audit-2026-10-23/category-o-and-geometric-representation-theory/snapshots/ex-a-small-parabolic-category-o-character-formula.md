---
id: ex-a-small-parabolic-category-o-character-formula
kind: example
title: "A small parabolic category O character formula"
status: published
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 21
deps: [thm-singular-category-o-multiplicities-are-parabolic-kl-polynomials,
       def-singular-integral-category-o-block-and-stabilizer,
       def-parabolic-kazhdan-lusztig-basis-and-polynomials,
       thm-parabolic-kazhdan-lusztig-polynomials-are-alternating-sums-of-ordinary-ones,
       def-grothendieck-group-and-character-of-category-o,
       prop-the-grothendieck-group-of-o-has-simple-and-standard-bases,
       def-inverse-kazhdan-lusztig-polynomials,
       thm-kazhdan-lusztig-inversion-formula, def-axiom-of-choice,
       thm-parabolic-category-o-multiplicities-are-parabolic-kl-polynomials,
       thm-parabolic-kazhdan-lusztig-character-formula,
       def-parabolic-category-o-for-a-standard-parabolic,
       ex-translation-to-a-singular-wall-in-type-a-two,
       ex-parabolic-kl-polynomials-for-s-three-modulo-s-two,
       thm-bgg-reciprocity,
       thm-parabolic-category-o-is-a-highest-weight-category]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "Lin Chen, lecture notes (Spring 2024), Lecture 9: standard filtrations, BGG reciprocity and translation functors (complete 7-page lecture)"
      url: "https://windshower.github.io/linchen/teaching/s2024/lecture9.pdf"
      locator: "Section 2, Theorem 2.2 (printed pp. 4-5): BGG reciprocity and the standard/simple basis of the Grothendieck group, the interface inverted here; complete passage read."
    - title: "Anders Bjoerner and Francesco Brenti, Combinatorics of Coxeter Groups, Graduate Texts in Mathematics 231, Springer 2005 (author-hosted complete 370-page PDF)"
      url: "https://sites.math.washington.edu/~billey/classes/reflection.groups/references/EntireBook.pdf"
      locator: "Section 5.1 (printed pp. 134-135): the Kazhdan-Lusztig data of S_3 used by the matrix; complete passage read."
    - title: "Anne Moreau, M2 Representation Theory 2025–2026 (current complete 129-page author notes)"
      url: "https://www.imo.universite-paris-saclay.fr/~anne.moreau/M2-RepTh2025.pdf"
      locator: "Current Section 13.3 pp. 98-99, Equation 18 and Theorem 13.11; Sections 13.1-13.3 pp. 93-99 independently read in full. The local finite-Levi character argument uses the already-proved library Weyl-character theorem on s_J and retains the center twist; it does not import the singular/parabolic Koszul equivalence."
---

## Example

For $\mathfrak{sl}_3$, $\lambda=0$, $J=\{s_1\}$, the genuine regular parabolic
category has minimal-left labels $(e,s_2,s_2s_1)$, with highest weights
$0,-\alpha_2,-\alpha_1-2\alpha_2$. Its generalized-standard/simple matrix is
$$N=\begin{pmatrix}1&1&0\\0&1&1\\0&0&1\end{pmatrix},\qquad N^{-1}=\begin{pmatrix}1&-1&1\\0&1&-1\\0&0&1\end{pmatrix}.$$
Thus
$$\operatorname{ch}L(0)=\operatorname{ch}\Delta^J(0)-\operatorname{ch}\Delta^J(-\alpha_2)+\operatorname{ch}\Delta^J(-\alpha_1-2\alpha_2),$$
$\operatorname{ch}L(-\alpha_2)=\operatorname{ch}\Delta^J(-\alpha_2)-\operatorname{ch}\Delta^J(-\alpha_1-2\alpha_2)$,
and $\operatorname{ch}L(-\alpha_1-2\alpha_2)=\operatorname{ch}\Delta^J(-\alpha_1-2\alpha_2)$.

For comparison retain the singular antidominant block with
$\mu+\rho=-\omega_2$ and right-minimal labels $(e,s_2,s_1s_2)$: its
composition matrix $A=\begin{pmatrix}1&0&0\\1&1&0\\1&1&1\end{pmatrix}$ has
inverse
$\begin{pmatrix}1&0&0\\-1&1&0\\0&-1&1\end{pmatrix}$, giving
$\operatorname{ch}L(\mu)=\operatorname{ch}M(\mu)$,
$\operatorname{ch}L(s_2\cdot\mu)=\operatorname{ch}M(s_2\cdot\mu)-\operatorname{ch}M(\mu)$,
and
$\operatorname{ch}L(s_1s_2\cdot\mu)=\operatorname{ch}M(s_1s_2\cdot\mu)-\operatorname{ch}M(s_2\cdot\mu)$.
The latter coefficients are Mobius values in this all-one singular chain only.
The two blocks exemplify distinct spherical and antispherical formulas; the
singular example is not the generalized-Verma character formula of the
parabolic category.

## Facts & Assumptions

**Given:** The $\mathfrak{sl}_3$ data: dominant regular $\lambda=0$ and $J=\{s_1\}$ for the parabolic block; $\mu$ with $\mu+\rho=-\omega_2$ for the singular block; the label sets ${}^JW=(e,s_2,s_2s_1)$ and $W^J=(e,s_2,s_1s_2)$ ([[def-parabolic-category-o-for-a-standard-parabolic]], [[def-singular-integral-category-o-block-and-stabilizer]]).

[F1] Regular parabolic multiplicities: $[\Delta^J(y\cdot\lambda):L(x\cdot\lambda)]=n_{y,x}(1)$ for $x,y\in{}^JW$ ([[thm-parabolic-category-o-multiplicities-are-parabolic-kl-polynomials]]), and the character formula $\operatorname{ch}L(x\cdot\lambda)=\sum_{y\ge x}(N^{-1})_{x,y}\operatorname{ch}\Delta^J(y\cdot\lambda)$ with $N=(n_{y,x}(1))$ ([[thm-parabolic-kazhdan-lusztig-character-formula]]).

[F2] The $S_3$ antispherical values $n_{y,x}(1)$ of [[ex-parabolic-kl-polynomials-for-s-three-modulo-s-two]] in the order $(e,s_2,s_2s_1)$ are the matrix $N$ displayed above; its inverse is the integer matrix displayed (verified by the two matrix products in the Verification below).

[F3] Singular multiplicities: in the singular block of $\mu$ with $y,w\in W^J=(e,s_2,s_1s_2)$, $[M(y\cdot\mu):L(w\cdot\mu)]=P_{yw_0,ww_0}(1)=1$ exactly for $y\ge w$ and $0$ otherwise ([[thm-singular-category-o-multiplicities-are-parabolic-kl-polynomials]], [[ex-translation-to-a-singular-wall-in-type-a-two]]); BGG reciprocity gives the projective version ([[thm-bgg-reciprocity]]).

[F4] Grothendieck-group and inversion data: the simple and generalized-standard classes are bases, characters are injective, and inverse matrices are computed by the finite signed chain inversions of the unitriangular multiplicity matrix ([[thm-parabolic-category-o-is-a-highest-weight-category]] (4) for generalized standards, [[def-grothendieck-group-and-character-of-category-o]], [[prop-the-grothendieck-group-of-o-has-simple-and-standard-bases]] for ordinary standards, and [[def-inverse-kazhdan-lusztig-polynomials]], [[thm-kazhdan-lusztig-inversion-formula]] for the ordinary inverse comparison).

[F5] The parabolic highest weights: $e\cdot0=0$, $s_2\cdot0=-\alpha_2$, $s_2s_1\cdot0=-\alpha_1-2\alpha_2$, and the singular labels for $W^J$ are $\mu$, $s_2\cdot\mu$, $s_1s_2\cdot\mu$ with the dominance chain of [[ex-translation-to-a-singular-wall-in-type-a-two]].

## Verification

**Proof technique:** direct finite matrix inversion in the two blocks, with the two products checked entrywise.

1.1 **The parabolic matrix.** By [F2] the matrix $N=(n_{y,x}(1))$ in the order $(e,s_2,s_2s_1)$ is the displayed upper unitriangular matrix. The displayed matrix $N^{-1}$ is its inverse: $N N^{-1}$ has entries $\sum_z n_{y,z}(1)(N^{-1})_{z,x}$, which equal $1$ for $y=x$ and $0$ otherwise (the only nonzero contributions are from $z\in\{y,\ldots,x\}$ with the alternating coefficients), and similarly $N^{-1}N=I$. Both products are finite integer calculations. [F2, algebra]

1.2 **The singular matrix.** By [F3] the composition matrix in the order $(e,s_2,s_1s_2)$ is $A=\begin{pmatrix}1&0&0\\1&1&0\\1&1&1\end{pmatrix}$ (entry $(y,w)$ is $1$ exactly when $y\ge w$). The displayed matrix $B=\begin{pmatrix}1&0&0\\-1&1&0\\0&-1&1\end{pmatrix}$ satisfies $AB=I=BA$ by the same finite chain computation, so $A^{-1}=B$. [F3, algebra]

2.1 **The parabolic characters.** By [F1] and step 1.1, $\operatorname{ch}L(x\cdot\lambda)=\sum_y(N^{-1})_{x,y}\operatorname{ch}\Delta^J(y\cdot\lambda)$. Reading the rows of $N^{-1}$ in the order $(e,s_2,s_2s_1)$ gives exactly the three displayed character identities, using $0$, $-\alpha_2$, $-\alpha_1-2\alpha_2$ as the labels of $e\cdot0$, $s_2\cdot0$, $s_2s_1\cdot0$ by [F5]: with $\rho=\alpha_1+\alpha_2$, the type-$A_2$ reflection relations give $s_2\rho=\alpha_1$ and $s_2s_1\rho=-\alpha_2$, hence the stated dot translates after subtracting $\rho$. [F1, F5, step 1.1, algebra]

3.1 **The singular characters and the comparison.** By [F3] and [F4], $\operatorname{ch}L(w\cdot\mu)=\sum_y(A^{-1})_{w,y}\operatorname{ch}M(y\cdot\mu)$; the rows of $B=A^{-1}$ give the three displayed singular identities, in which the nonzero off-diagonal coefficients are the Mobius values $\pm1$ of this all-one chain only. The parabolic coefficients of step 2.1 include the value $+1$ in the $(1,3)$ position of $N^{-1}$, which the singular inverse does not have: the two formulas are different character formulas for different blocks, and the singular one is not the generalized-Verma character formula of the parabolic category. [F1, F3, F4, step 1.1, step 2.1, step 1.2, algebra] ∎

## Remarks

The example is the smallest case in which both inversions can be written down explicitly: the spherical/antispherical distinction of the companion counterexample persists in the inverse matrices, and no singular/parabolic category equivalence or grading is used. The two blocks have different label orders (left-minimal versus right-minimal representatives), which is why both index dictionaries are displayed.
