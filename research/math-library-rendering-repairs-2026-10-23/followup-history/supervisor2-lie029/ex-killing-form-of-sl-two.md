---
id: ex-killing-form-of-sl-two
kind: example
title: Killing form of sl_2
status: published
origin: pipeline
pipeline_run: phase-2-next-18
deps: [def-killing-form-of-a-finite-dimensional-lie-algebra, thm-cartans-semisimplicity-criterion]
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: 2026-09-14
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-14
sources:
  references:
    - title: "Kirillov, An Introduction to Lie Groups and Lie Algebras, Example 5.51"
      url: https://www.math.stonybrook.edu/~kirillov/liegroups/liegroups.pdf
      locator: "§5.8, Example 5.51, printed pp. 83–84"
---

## Example

Let $k$ have characteristic zero and put $\mathfrak g=\mathfrak{sl}_2(k)$. For

$$e=\begin{pmatrix}0&1\\0&0\end{pmatrix},\qquad f=\begin{pmatrix}0&0\\1&0\end{pmatrix},\qquad h=\begin{pmatrix}1&0\\0&-1\end{pmatrix},$$

one has $K(h,h)=8$, $K(e,f)=K(f,e)=4$, and all other basis pairings are zero. Thus $K$ is nondegenerate.

## Facts & Assumptions

**Given:** The displayed matrices over a characteristic-zero field.

[L1] The Killing form is $K(x,y)=\operatorname{tr}(\operatorname{ad}_x\operatorname{ad}_y)$ ([[def-killing-form-of-a-finite-dimensional-lie-algebra]]).

[L2] A finite-dimensional characteristic-zero Lie algebra is semisimple exactly when its Killing form is nondegenerate ([[thm-cartans-semisimplicity-criterion]]).

## Verification

**Proof technique:** direct matrix calculation.

1.1 In the ordered basis $(e,f,h)$, the relations $[h,e]=2e$, $[h,f]=-2f$, and $[e,f]=h$ give $$\operatorname{ad}_e=\begin{pmatrix}0&0&-2\\0&0&0\\0&1&0\end{pmatrix},\quad \operatorname{ad}_f=\begin{pmatrix}0&0&0\\0&0&2\\-1&0&0\end{pmatrix},\quad \operatorname{ad}_h=\begin{pmatrix}2&0&0\\0&-2&0\\0&0&0\end{pmatrix}.$$ [given, algebra]

2.1 Squaring the last matrix gives trace $8$. Multiplying the first two matrices in either order gives trace $4$. Their squares have trace zero, and multiplying either by $\operatorname{ad}_h$ in either order also has trace zero. By [L1], these are precisely the claimed pairings. [L1, step 1.1, algebra]

3.1 The Gram matrix has determinant $$\det\begin{pmatrix}0&4&0\\4&0&0\\0&0&8\end{pmatrix}=-128.$$ Characteristic zero makes this scalar nonzero, so $K$ is nondegenerate. In particular [L2] recovers semisimplicity. Every basis pairing was calculated, including the zero pairings, and no choice principle is used. [L2, step 2.1, algebra] ∎