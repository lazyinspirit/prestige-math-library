---
id: ex-translation-to-a-singular-wall-in-type-a-two
kind: example
title: "Translation to a singular wall in type A_2"
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 18
deps: [thm-translation-to-the-wall-on-verma-simple-and-projective-objects,
       thm-singular-category-o-multiplicities-are-parabolic-kl-polynomials,
       def-singular-integral-category-o-block-and-stabilizer,
       def-translation-functor-between-o-blocks, def-verma-module,
       cor-antidominant-verma-modules-are-simple, thm-bgg-reciprocity,
       def-kazhdan-lusztig-polynomials-in-the-classical-q-normalization,
       def-dot-action-facets-and-single-wall-translation-data,
       def-axiom-of-choice,
       lem-bruhat-order-basic-properties-for-permutations]
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
      locator: "Section 3, Example 3.16 (printed p. 7): for sl_2 the functor O_{w(0)} -> O_{w(-1)} sends L_{-2} to L_{-1} and L_0 to 0, with -1 in F^+_{-2} and -1 not in F^+_0; complete passage read."
    - title: "Anders Bjoerner and Francesco Brenti, Combinatorics of Coxeter Groups, Graduate Texts in Mathematics 231, Springer 2005 (author-hosted complete 370-page PDF)"
      url: "https://sites.math.washington.edu/~billey/classes/reflection.groups/references/EntireBook.pdf"
      locator: "Section 5.1 (printed pp. 134-135): all Kazhdan-Lusztig polynomials of S_3 equal 1 for comparable pairs; complete passage read."
---

## Example

Let $\mathfrak g=\mathfrak{sl}_2$ and use the coordinate
$l=\langle\lambda,\alpha^\vee\rangle$, so the dot action is $s\cdot l=-l-2$
and the facets are $(-\infty,-1)$, $\{-1\}$, $(-1,\infty)$
([[def-dot-action-facets-and-single-wall-translation-data]], Example 3.11 of
the source). Take $\lambda=-2$, $\mu=-1$. Then the singular block
$\mathcal O_{-1}$ has the single simple $L(-1)=M(-1)=P(-1)$, and the
translation functor $T=T_{-2}^{-1}$ satisfies $TM(-2)=M(-1)$, $TM(0)=M(-1)$,
$$TL(-2)=L(-1)\quad(\text{the label }1\in W^J),\qquad TL(0)=0\quad(\text{the label }s\notin W^J),$$
and $TP(-2)=2\,P(-1)$, because the projective cover $P(-2)$ of $L(-2)$ has
the Verma flag $\Delta(-2),\Delta(0)$ and both factors are sent to
$\Delta(-1)$.

For $\mathfrak g=\mathfrak{sl}_3$ take $J=\{s_1\}$ and the dot-antidominant
$\mu$ with $\mu+\rho=-\omega_2$; then $W^J=\{1,s_2,s_1s_2\}$ and by
[[thm-singular-category-o-multiplicities-are-parabolic-kl-polynomials]] the
composition and Verma-flag matrices of the singular block are
$$[M(y\cdot\mu):L(w\cdot\mu)]=(P(w\cdot\mu):\Delta(y\cdot\mu))=\begin{pmatrix}1&0&0\\1&1&0\\1&1&1\end{pmatrix}$$
in the row/column order $(1,\,s_2,\,s_1s_2)$: explicitly $M(\mu)$ is
irreducible, $M(s_2\cdot\mu)$ has composition factors $L(\mu),L(s_2\cdot\mu)$
once each, and $M(s_1s_2\cdot\mu)$ has all three simples once; dually
$(P(\mu):\Delta(y\cdot\mu))=1$ for all three $y$,
$(P(s_2\cdot\mu):\Delta(s_2\cdot\mu))=(P(s_2\cdot\mu):\Delta(s_1s_2\cdot\mu))=1$,
with its $\Delta(\mu)$ multiplicity zero, and
$P(s_1s_2\cdot\mu)=\Delta(s_1s_2\cdot\mu)$ has the single top-label standard.
The surviving
simple labels are exactly the minimal coset representatives, so translation
onto the wall kills $L(w\cdot\lambda)$ for $w\notin W^J$ (for instance
$L(s_1\cdot\lambda)$ and $L(w_0\cdot\lambda)$ in the $\mathfrak{sl}_3$ case).

## Facts & Assumptions

**Given:** The Axiom of Choice; for $\mathfrak{sl}_2$ the facet datum $\lambda=-2$, $\mu=-1$ with $J=\{s\}$, $W^J=\{1\}$; for $\mathfrak{sl}_3$ the standard parabolic $J=\{s_1\}$, $W_J=\{1,s_1\}$, $W^J=\{1,s_2,s_1s_2\}$ and the dot-antidominant weight with $\mu+\rho=-\omega_2$ ([[def-dot-action-facets-and-single-wall-translation-data]], [[def-singular-integral-category-o-block-and-stabilizer]]).

[F1] Wall translation: $T\Delta(w\cdot\lambda)\cong\Delta(w\cdot\mu)$, and $TL(w\cdot\lambda)\cong L(w\cdot\mu)$ for $w\in W^J$, $TL(w\cdot\lambda)=0$ otherwise ([[thm-translation-to-the-wall-on-verma-simple-and-projective-objects]] (1),(2)); $T$ is exact and preserves finite Verma flags.

[F2] The most singular block: for $\mu=-\rho$ (that is $\mu+\rho=0$) the Verma $M(\mu)=L(\mu)$ is simple and its block has the single simple; the projective cover has flag $[\Delta(\mu)]$ and equals $L(\mu)$, so it is projective and injective ([[cor-antidominant-verma-modules-are-simple]], [[thm-translation-to-the-wall-on-verma-simple-and-projective-objects]] (3)).

[F3] Ordinary Kazhdan--Lusztig values of $S_3$: $P_{a,b}(1)=1$ for comparable pairs and $0$ otherwise, so with $w_0$ the longest element the multiplicity formula $[M(y\cdot\mu):L(w\cdot\mu)]=P_{yw_0,ww_0}(1)$ of [[thm-singular-category-o-multiplicities-are-parabolic-kl-polynomials]] gives $1$ exactly when $y\ge w$ in $W^J=\{1,s_2,s_1s_2\}$ ([[lem-bruhat-order-basic-properties-for-permutations]], [[def-kazhdan-lusztig-polynomials-in-the-classical-q-normalization]]).

[F4] BGG reciprocity $(P(w\cdot\mu):\Delta(y\cdot\mu))=[M(y\cdot\mu):L(w\cdot\mu)]$ and the Verma flag of $P(-2)$ in $\mathfrak{sl}_2$: $(P(-2):\Delta(-2))=(P(-2):\Delta(0))=1$ ([[thm-bgg-reciprocity]], [[def-verma-module]]).

[F5] The sl_3 weights: $\mu=-(4\alpha_1+5\alpha_2)/3$, $s_2\cdot\mu=-(4\alpha_1+2\alpha_2)/3$, $s_1s_2\cdot\mu=-(\alpha_1+2\alpha_2)/3$, with $s_2\cdot\mu-\mu=\alpha_2$, $s_1s_2\cdot\mu-s_2\cdot\mu=\alpha_1$, $s_1s_2\cdot\mu-\mu=\alpha_1+\alpha_2$ in $Q^+$, and no other pairs of the three labels are dominance-linked ([[def-singular-integral-category-o-block-and-stabilizer]], [[def-dot-action-facets-and-single-wall-translation-data]]).

## Verification

**Proof technique:** direct: evaluate the wall-translation theorem on the two smallest wall data and read the matrices off the regular Kazhdan-Lusztig values at one.

1.1 **The sl_2 singular block.** For $\mu=-1=-\rho$ the dot orbit is $\{-1\}$, so $\mathcal O_{-1}$ has the single simple $L(-1)$, and by [F2] $M(-1)=L(-1)=P(-1)=\nabla(-1)$ is projective and injective. [F2, algebra]

1.2 **The sl_2 translation.** Here $W^J=\{1\}$. By [F1], $TM(-2)=M(-1)$ and $TM(0)=M(-1)$; and on simples $TL(-2)=L(-1)$, while $TL(0)=0$ because $s\notin W^J$. [F1, algebra]

1.3 **The sl_3 matrices.** Right multiplication by the longest element reverses Bruhat order, so $yw_0\le ww_0$ iff $y\ge w$. In the chain $W^J=(1,s_2,s_1s_2)$, the formula [F3] therefore gives the displayed LOWER unitriangular matrix $A$: its row $y$, column $w$ is one exactly when $y\ge w$. BGG [F4] gives the same entries for $(P(w\cdot\mu):\Delta(y\cdot\mu))$. Thus the column at $w=1$ consists of three ones, the column at $w=s_2$ has zeros at $y=1$ and ones at $y=s_2,s_1s_2$, and the column at $w=s_1s_2$ has only the diagonal one. These are precisely the corrected projective flags displayed above; reading rows gives the unchanged simple composition factors of the three Vermas. [F3, F4, algebra]

2.1 **The sl_2 projective.** By [F4] the cover $P(-2)$ has the Verma flag $\Delta(-2),\Delta(0)$. Applying the exact functor $T$ to a flag gives a flag with factors $T\Delta(-2)=\Delta(-1)$ and $T\Delta(0)=\Delta(-1)$ by [F1], so $TP(-2)$ has flag of length two with both factors $\Delta(-1)=P(-1)$; hence $TP(-2)=2P(-1)$. [F1, F4, step 1.1, step 1.2, algebra]

3.1 **Surviving labels.** Applying [F1] to the simple labels: $L(w\cdot\lambda)$ survives translation iff $w\in W^J=\{1,s_2,s_1s_2\}$; hence $L(s_1\cdot\lambda)$ and $L(w_0\cdot\lambda)=L(s_1s_2s_1\cdot\lambda)$ are sent to zero, as are all other non-minimal labels. This proves every displayed assertion. [F1, step 1.3, algebra] ∎
