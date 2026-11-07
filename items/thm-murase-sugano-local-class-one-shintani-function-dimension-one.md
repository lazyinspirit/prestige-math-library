---
id: thm-murase-sugano-local-class-one-shintani-function-dimension-one
kind: theorem
title: "Murase–Sugano Dimension One for Local Class-One Shintani Functions"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: not-supplied
deps: []
dependency_level: 0
sources:
  scraped: []
  references:
    - title: "Atsushi Murase and Takashi Sugano, Shintani Functions and Automorphic L-Functions for GL(n), §§1, 3–4"
      url: "https://www.jstage.jst.go.jp/article/tmj1949/48/2/48_2_165/_pdf"
    - title: "James W. Cogdell, L-functions and Converse Theorems for GL(n), Lecture 2, §2.2"
      url: "https://people.math.osu.edu/cogdell.1/pcmi-www.pdf"
pipeline_run: number-theory-all-141-2026-10-25
---

## Statement

Let $K$ be a nonarchimedean local field with ring of integers $\mathcal O_K$, $n\geq2$, $G=\mathrm{GL}_n(K)$, $G_0=\mathrm{GL}_{n-1}(K)$ embedded in $G$ by $g_0\mapsto\operatorname{diag}(g_0,1)$, $K_G=\mathrm{GL}_n(\mathcal O_K)$, and $K_0=\mathrm{GL}_{n-1}(\mathcal O_K)$. Let $T$ and $T_0$ be the diagonal tori of $G$ and $G_0$, and let $\Xi$ and $\xi$ be unramified characters of $T$ and $T_0$, respectively. For $H=G,G_0$, let $\mathcal H_H$ be the convolution algebra of compactly supported, locally constant, bi-$K_H$-invariant complex functions, with $\operatorname{vol}(K_H)=1$, and let $\Xi^\wedge:\mathcal H_G\to\mathbb C$ and $\xi^\wedge:\mathcal H_{G_0}\to\mathbb C$ be the Satake homomorphisms determined by those unramified characters. Define $\operatorname{Sh}(\xi,\Xi)$ to be the vector space of functions $W:G\to\mathbb C$ that are left $K_0$-invariant, right $K_G$-invariant, and satisfy

$$\phi*W*\Phi=\xi^\wedge(\phi)\Xi^\wedge(\Phi)W\qquad(\phi\in\mathcal H_{G_0},\ \Phi\in\mathcal H_G),$$

where

$$(\phi*W*\Phi)(g)=\int_{G_0}\int_G\phi(x)W(x^{-1}gy)\Phi(y)\,dy\,dx.$$

Then $\dim_{\mathbb C}\operatorname{Sh}(\xi,\Xi)=1$ for every pair $(\xi,\Xi)$ of unramified torus characters.

## Statement references

[Atsushi Murase and Takashi Sugano, *Shintani Functions and Automorphic L-Functions for GL(n)*, §§1.3–1.4 and Theorems 3.1 and 4.10](https://www.jstage.jst.go.jp/article/tmj1949/48/2/48_2_165/_pdf)

[James W. Cogdell, *L-functions and Converse Theorems for GL(n)*, Lecture 2, §2.2](https://people.math.osu.edu/cogdell.1/pcmi-www.pdf)
