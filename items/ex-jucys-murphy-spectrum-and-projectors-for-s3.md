---
id: ex-jucys-murphy-spectrum-and-projectors-for-s3
kind: example
title: "The Jucys-Murphy spectrum and projectors for S_3"
status: draft
origin: pipeline
pipeline_run: frontier-38-owner-30
deps: [thm-jucys-murphy-joint-spectrum-is-the-set-of-tableau-content-vectors, thm-primitive-tableau-idempotents-by-jucys-murphy-interpolation, def-content-vector-of-a-standard-tableau, def-jucys-murphy-elements-of-the-symmetric-group-algebra, thm-gelfand-tsetlin-algebra-is-the-diagonal-algebra-in-the-young-basis, def-removable-and-addable-nodes-of-a-partition, cex-ordinary-jucys-murphy-projection-formulas-do-not-survive-content-collision]
justified_by: []
aliases: []
landmark: false
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "Garsia, Young Seminormal Representation, Murphy Elements and Content Evaluations, UCSD lecture notes (2003), Theorems 3.4-3.5, printed pp. 22-24"
      url: "https://www.math.ucsd.edu/~garsia/somepapers/Youngseminormal.pdf"
    - title: "Okounkov-Vershik, A New Approach to the Representation Theory of the Symmetric Groups, Selecta Math. (N.S.) 2 (1996) 581-605; complete arXiv repost math/0503040, sections 5-6, printed pp. 17-24"
      url: "https://arxiv.org/pdf/math/0503040"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
---

## Statement

The four standard tableaux of size three have content vectors
$\operatorname{Cont}=(0,1,2)$ for the row tableau of shape $(3)$, $(0,1,-1)$
for the tableau $\begin{smallmatrix}1&2\\3\end{smallmatrix}$ of shape
$(2,1)$, $(0,-1,1)$ for $\begin{smallmatrix}1&3\\2\end{smallmatrix}$, and
$(0,-1,-2)$ for the column tableau of shape $(1,1,1)$. Writing
$X_2=(1\ 2)$ and $X_3=(1\ 3)+(2\ 3)$ in $\mathbb C[S_3]$, the recursion of
[[thm-primitive-tableau-idempotents-by-jucys-murphy-interpolation]] gives the
four primitive idempotents
$$P_{\mathrm{row}}=\frac{(X_2+1)(X_3+1)}{6},\quad P_{\begin{smallmatrix}1&2\\3\end{smallmatrix}}=\frac{(X_2+1)(2-X_3)}{6},\quad P_{\begin{smallmatrix}1&3\\2\end{smallmatrix}}=\frac{(1-X_2)(X_3+2)}{6},\quad P_{\mathrm{col}}=\frac{(1-X_2)(1-X_3)}{6},$$
with denominators $2$ and $6$; they satisfy $P_T^2=P_T$, $P_TP_{T'}=0$ for
$T\ne T'$ and $\sum_TP_T=1$, each $P_T$ acts on its own content vector by the
identity and on the other content vectors by zero, and the sum of the two
$(2,1)$-projectors is the central idempotent of the two-dimensional Specht
module.

## Facts & Assumptions

**Given:** The group algebra $\mathbb C[S_3]$ with basis $1,(1\ 2),(1\ 3),(2\ 3),(1\ 2\ 3),(1\ 3\ 2)$ and the elements $X_2=(1\ 2)$, $X_3=(1\ 3)+(2\ 3)$ ([[def-jucys-murphy-elements-of-the-symmetric-group-algebra]]).

[F1] For the standard tableaux of size three the addable-content sets of the predecessor shapes are $A((1))=\{1,-1\}$, $A((2))=\{2,-1\}$ and $A((1,1))=\{1,-2\}$, and the recursion of the cited theorem gives the displayed four products; the denominators $c_T(n)-c$ are $\pm2$ at step $n=2$ and $\pm3$ at step $n=3$; their products give the denominator $6$ in the displayed formulas ([[thm-primitive-tableau-idempotents-by-jucys-murphy-interpolation]], [[def-removable-and-addable-nodes-of-a-partition]]).

[F2] $X_kv_T=c_T(k)v_T$ for the Young line of each standard tableau $T$, and the four content vectors of size three are exactly the vectors satisfying conditions (1)-(3) ([[thm-jucys-murphy-joint-spectrum-is-the-set-of-tableau-content-vectors]], [[def-content-vector-of-a-standard-tableau]]).

[F3] $\mathrm{GZ}(3)=\bigoplus_T\mathbb C P_T$: the four lines are independent, the $P_T$ are pairwise orthogonal idempotents summing to $1$, and the sum of the $P_T$ over the tableaux of a fixed shape is the corresponding central idempotent of $\mathbb C[S_3]$ ([[thm-gelfand-tsetlin-algebra-is-the-diagonal-algebra-in-the-young-basis]]).

## Proof

**Proof technique:** direct.

1.1 Multiplication in $S_3$ gives $X_2^2=1$, $X_2X_3=X_3X_2=(1\ 2\ 3)+(1\ 3\ 2)$ and $X_3^2=(1\ 2\ 3)+(1\ 3\ 2)+2$, whence also $(X_2X_3)^2=X_2X_3+2$; every product below is evaluated with these relations and the basis of the Given block. [given, algebra]

1.2 Contents. The row tableau carries entries $1,2,3$ in the cells $(1,1),(1,2),(1,3)$ of contents $0,1,2$; the tableau $\begin{smallmatrix}1&2\\3\end{smallmatrix}$ carries them in $(1,1),(1,2),(2,1)$ of contents $0,1,-1$; the tableau $\begin{smallmatrix}1&3\\2\end{smallmatrix}$ in $(1,1),(2,1),(1,2)$ of contents $0,-1,1$; and the column tableau in $(1,1),(2,1),(3,1)$ of contents $0,-1,-2$. This gives the four content vectors of the Statement. [F2, given, algebra]

2.1 The recursion of [F1] at $n=2$ gives $P_{[1\ 2]}=(X_2+1)/2$ and $P_{\begin{smallmatrix}1\\2\end{smallmatrix}}=(1-X_2)/2$, because the two addable contents of $(1)$ are $1$ and $-1$; at $n=3$ the factors are $(X_3+1)/3$ and $(2-X_3)/3$ over the shape $(2)$, and $(X_3+2)/3$ and $(1-X_3)/3$ over the shape $(1,1)$. Multiplying gives exactly the four displayed elements, with denominators $2$ and $6$. [F1, step 1.2, algebra]

3.1 Expanded in the basis of the Given block, the four elements are $$P_{\mathrm{row}}=\tfrac16\bigl(1+(1\ 2)+(1\ 3)+(2\ 3)+(1\ 2\ 3)+(1\ 3\ 2)\bigr),$$ $$P_{\begin{smallmatrix}1&2\\3\end{smallmatrix}}=\tfrac13\cdot1+\tfrac13(1\ 2)-\tfrac16(1\ 3)-\tfrac16(2\ 3)-\tfrac16(1\ 2\ 3)-\tfrac16(1\ 3\ 2),$$ $$P_{\begin{smallmatrix}1&3\\2\end{smallmatrix}}=\tfrac13\cdot1-\tfrac13(1\ 2)+\tfrac16(1\ 3)+\tfrac16(2\ 3)-\tfrac16(1\ 2\ 3)-\tfrac16(1\ 3\ 2),$$ $$P_{\mathrm{col}}=\tfrac16\bigl(1-(1\ 2)-(1\ 3)-(2\ 3)+(1\ 2\ 3)+(1\ 3\ 2)\bigr).$$ [step 2.1, algebra]

4.1 Idempotence and orthogonality. Squaring each of the four elements of step 3.1 with the relations of step 1.1 returns the same element, and each product of two distinct ones vanishes; equivalently, the four elements are the orthogonal rank-one projections of [F3], and their sum is $$\tfrac16+\tfrac13+\tfrac13+\tfrac16=1,$$ using the coefficient sums in step 3.1. This verifies all algebraic assertions about $P_T$. [step 1.1, step 3.1, F3, algebra]

5.1 Action on the spectrum. By [F3] each $P_T$ is the projection onto the line $\mathbb C v_T$, so $P_T$ acts by $1$ on the content-vector eigenvector of $T$ and by $0$ on the eigenvectors of the other tableaux, whose content vectors are the four listed in step 1.2. [F2, F3, step 1.2, step 4.1, algebra]

5.2 The sum of the two $(2,1)$-projectors is $P_{\begin{smallmatrix}1&2\\3\end{smallmatrix}}+P_{\begin{smallmatrix}1&3\\2\end{smallmatrix}}=\tfrac23\cdot1-\tfrac13(1\ 2\ 3)-\tfrac13(1\ 3\ 2)$, which is central in $\mathbb C[S_3]$ and, by [F3], is the central idempotent of the two-dimensional Specht module $V^{(2,1)}$; the remaining two projectors are the central idempotents of the one-dimensional modules $V^{(3)}$ and $V^{(1,1,1)}$. [step 3.1, step 4.1, F3, algebra]

6.1 The example exhibits the interpolation formula at the smallest nontrivial size: the recursion inverts only $2$ at step $n=2$ and $3$ at step $n=3$, giving the denominator $6$ in the products, and the failure of the formula in characteristic $2$ is recorded separately in [[cex-ordinary-jucys-murphy-projection-formulas-do-not-survive-content-collision]]. [F1, step 2.1, step 5.2] ∎

## Remarks

- **The four spectra.** The content vectors $(0,1,2),(0,1,-1),(0,-1,1),(0,-1,-2)$ are the four vectors satisfying conditions (1)-(3) for $n=3$; the first and last belong to the one-dimensional modules of the trivial and sign representations.

- **The central idempotent.** $\tfrac23\cdot1-\tfrac13(1\ 2\ 3)-\tfrac13(1\ 3\ 2)$ has the standard form $(\dim V/|G|)\sum_g\chi(g^{-1})g$ of the central idempotent attached to $V^{(2,1)}$.
