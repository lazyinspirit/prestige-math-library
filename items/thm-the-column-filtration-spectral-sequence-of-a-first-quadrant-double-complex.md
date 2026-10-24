---
verification:
  repair: research/math-library-rendering-repairs-2026-10-23/receipts/thm-the-column-filtration-spectral-sequence-of-a-first-quadrant-double-complex.json
  precheck: pass
id: thm-the-column-filtration-spectral-sequence-of-a-first-quadrant-double-complex
kind: theorem
title: The column filtration spectral sequence of a first quadrant double complex
status: published
origin: pipeline
pipeline_run: phase-2-next-20
deps: [def-row-and-column-filtrations-of-a-first-quadrant-double-complex, thm-the-next-page-is-the-homology-of-the-current-page, thm-bounded-filtered-complex-spectral-sequence-abuts-to-filtered-homology, def-induced-filtration-on-homology, thm-the-row-filtration-spectral-sequence-of-a-first-quadrant-double-complex]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Stacks Project, Lemmas 12.25.1 and 12.25.3 (homological anticommuting convention)"
      url: https://stacks.math.columbia.edu/tag/012X
---

## Statement

For a first-quadrant homological double complex $C$, the column filtration
of $T=\operatorname{Tot}(C)$ has
$$E^1_{p,q}=H^v_q(C_{p,*}),\qquad d^1\text{ induced by }h,\qquad E^2_{p,q}=H^h_p(H^v_q(C)).$$
Its differentials have bidegree $(-r,r-1)$, and
$$E^\infty_{p,q}\cong F^{\mathrm{col}}_pH_{p+q}(T)/F^{\mathrm{col}}_{p-1}H_{p+q}(T),\qquad F^{\mathrm{col}}_pH_n(T)=\operatorname{im}(H_n(F^{\mathrm{col}}_pT)\to H_n(T)).$$
The target filtration is finite in each degree.

## Facts & Assumptions

[F1] [[def-row-and-column-filtrations-of-a-first-quadrant-double-complex]] specifies both cutoffs and their finite biproduct total objects.

[F2] [[thm-the-row-filtration-spectral-sequence-of-a-first-quadrant-double-complex]] computes the row pages, differential and finite image-filtration abutment.

[F3] [[thm-the-next-page-is-the-homology-of-the-current-page]] supplies natural page transitions; [[thm-bounded-filtered-complex-spectral-sequence-abuts-to-filtered-homology]] supplies natural abutment identifications; [[def-induced-filtration-on-homology]] defines the target as an image.

## Proof

**Given:** The first-quadrant complex $C$ in the statement, with anticommuting arrows $h,v$.

1.1 Define $D_{a,b}=C_{b,a}$, with $h^D_{a,b}=v^C_{b,a}$ and $v^D_{a,b}=h^C_{b,a}$. The two square-zero identities for $D$ are those for $v^C,h^C$ respectively, and its mixed sum is the mixed sum for $C$ with the two summands exchanged. Thus $D$ is again a first-quadrant anticommuting double complex. In each total degree, permutation of the finite summands gives an isomorphism $\operatorname{Tot}(D)\to T$. It commutes with total differentials because it changes $h^D+v^D$ into $v^C+h^C=h^C+v^C$. The row cutoff $b\le p$ in $D$ becomes the column cutoff in $C$. [F1, given]

2.1 Apply the row theorem to $D$. Its horizontal homology at $(q,p)$ is $H^v_q(C_{p,*})$, and its induced vertical differential is the original $h^C$. Its second page is therefore $H^h_p(H^v_q(C))$, with the same filtered bidegrees. These are the pages of the column-filtered $T$: the filtration-preserving isomorphism in step 1.1 identifies their graded objects and differentials, and natural page transitions propagate the identification through every page. No sign twist is needed in the transposition. [F2, F3, step 1.1]

3.1 The same filtered isomorphism sends $H_n(F^{\mathrm{row}}_p\operatorname{Tot}(D))\to H_n(\operatorname{Tot}(D))$ to $H_n(F^{\mathrm{col}}_pT)\to H_n(T)$, hence sends their images to each other. Naturality of finite convergence identifies the stationary page in step 2.1 with the stated associated graded of these images. The bounds are $-1$ and $n$ for $n\ge0$; for negative $n$ the complex is zero. This includes $n=0$, a zero complex and a complex in one column. All maps are specified by finite permutations and universal properties, so no choice assumption enters. [F1, F2, F3, step 1.1, step 2.1] ∎

## Remarks

The grid shows the first three rows and columns; it need not be the support of $C$. The shaded columns illustrate the cutoff $p\le1$: in total degree $n$, only their summands with $p+q=n$ enter $F^{\mathrm{col}}_1T_n$. Every elementary square anticommutes, rather than commutes: the two routes from $C_{p,q}$ to $C_{p-1,q-1}$ sum to zero. Consecutive horizontal or vertical arrows compose to zero, and arrows leaving the first quadrant have zero target.

```tikz
\begin{tikzpicture}[x=2cm,y=1.4cm,>=stealth]
\fill[blue!10] (-0.45,-0.4) rectangle (1.45,2.4);
\node at (0,0) (c00) {$C_{0,0}$};
\node at (1,0) (c10) {$C_{1,0}$};
\node at (2,0) (c20) {$C_{2,0}$};
\node at (0,1) (c01) {$C_{0,1}$};
\node at (1,1) (c11) {$C_{1,1}$};
\node at (2,1) (c21) {$C_{2,1}$};
\node at (0,2) (c02) {$C_{0,2}$};
\node at (1,2) (c12) {$C_{1,2}$};
\node at (2,2) (c22) {$C_{2,2}$};
\draw[->] (c10) -- node[above] {$h$} (c00);
\draw[->] (c20) -- node[above] {$h$} (c10);
\draw[->] (c11) -- node[above] {$h$} (c01);
\draw[->] (c21) -- node[above] {$h$} (c11);
\draw[->] (c12) -- node[above] {$h$} (c02);
\draw[->] (c22) -- node[above] {$h$} (c12);
\draw[->] (c01) -- node[left] {$v$} (c00);
\draw[->] (c11) -- node[left] {$v$} (c10);
\draw[->] (c21) -- node[left] {$v$} (c20);
\draw[->] (c02) -- node[left] {$v$} (c01);
\draw[->] (c12) -- node[left] {$v$} (c11);
\draw[->] (c22) -- node[left] {$v$} (c21);
\node at (0.5,-0.8) {$p\le1$};
\node at (2,-0.8) {$p=2$};
\node at (-0.8,2) {$q=2$};
\node at (-0.8,1) {$q=1$};
\node at (-0.8,0) {$q=0$};
\end{tikzpicture}
```

Passing to the column quotient removes $h$ and retains $v$, so vertical homology gives $E^1_{p,q}$. The induced $h$ then moves left on that page. On page $r\ge1$, the arrow is $d^r:E^r_{p,q}\to E^r_{p-r,q+r-1}$: it moves $r$ columns left and $r-1$ rows up, lowering total degree by one. Transposition in proof step 1.1 exchanges the horizontal and vertical roles without a sign change, because the total differential is already $h+v$. The proof above is independent of this illustration.
