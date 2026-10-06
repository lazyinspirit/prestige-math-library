---
id: "thm-every-h-minus-one-functional-has-ltwo-plus-divergence-form"
kind: "theorem"
title: "Every $H^{-1}$ functional is an $L^2$ function plus a divergence"
status: draft
origin: pipeline
pipeline_run: "frontier-39-analysis-30"
dependency_level: 2
deps:
  - "thm-cauchy-schwarz-in-an-inner-product-space"
  - "lem-l-two-with-the-integral-pairing-is-a-hilbert-space"
  - "def-bounded-linear-operator"
  - "def-complex-conjugate-real-imaginary-part-and-modulus"
  - "def-countable-choice"
  - "def-h-minus-one-as-the-dual-of-h-one-zero"
  - "def-hilbert-space"
  - "def-hk-and-hk-zero-notation"
  - "def-l-p-space-as-a-quotient-by-null-functions"
  - "def-operator-norm"
  - "def-sobolev-space-wkp-and-its-norm"
  - "def-wkp-zero-as-a-sobolev-closure"
  - "lem-ltwo-and-divergence-data-embed-in-h-minus-one"
  - "lem-w-one-two-is-a-hilbert-space"
  - "thm-cauchy-schwarz-and-the-euclidean-norm"
  - "thm-riesz-representation-for-hilbert-space"
proof_strategy: "direct"
provenance:
  statement: "literature-derived"
  proof: "ai-altered"
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "John K. Hunter, Notes on Partial Differential Equations (UC Davis, revised 18 June 2014, complete 242-page two-quarter notes)"
      url: "https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf"
      locator: "§4.3, Theorem 4.7 and the infimum formula (4.9) describing $H^{-1}$ as $f_0+\\sum\\partial_if_i$, printed pp. 95–98"
    - title: "Richard S. Laugesen, Linear Analysis and Partial Differential Equations (University of Illinois, 2020, complete 158-page graduate notes)"
      url: "https://publish.illinois.edu/rlaugesen/files/2023/07/554-Lectures.pdf"
      locator: "§5.1, the generalized Poisson equation with $L^2$ data, printed p. 101"
    - title: "Haim Brezis, Functional Analysis, Sobolev Spaces and Partial Differential Equations (Springer Universitext, 2011, complete 614-page text)"
      url: "https://www.math.toronto.edu/almut/Brezis.pdf"
      locator: "Section 8.3, Proposition 8.14 and its Hahn–Banach proof, printed pp. 219–220: representation by f0 and f1. Brezis uses the sum Sobolev norm and a maximum data norm; the Euclidean data-norm identity for the H1 norm here is proved independently by Hilbert Riesz representation."
---

## Statement

Assume Countable Choice. Let $\Omega\subseteq\mathbb R^n$ be open, $n\ge1$. For every $F\in H^{-1}(\Omega)$ ([[def-h-minus-one-as-the-dual-of-h-one-zero]]) there are $f_0,f_1,\dots,f_n\in L^2(\Omega)$ such that $$F(v)=(f_0,v)_{L^2}+\sum_{i=1}^n(f_i,D_iv)_{L^2}\qquad\text{for every }v\in H^1_0(\Omega),$$ the norm is exactly the infimum over all such representations, $$\|F\|_{H^{-1}}=\inf\Big\{\Big(\sum_{i=0}^n\|f_i\|_{L^2}^2\Big)^{1/2}:F(v)=(f_0,v)_{L^2}+\sum_{i=1}^n(f_i,D_iv)_{L^2}\ \forall v\Big\},$$ and the infimum is attained by the canonical choice $f_0=g$, $f_i=D_ig$ given by the Riesz vector of $\overline{F(\cdot)}$; in particular the data are controlled by the norm and conversely. The representation is the converse of [[lem-ltwo-and-divergence-data-embed-in-h-minus-one]] and needs no Hahn--Banach extension theorem: Riesz representation in $H^1_0$ already produces it.

## Facts & Assumptions

**Given:** Countable Choice; an open $\Omega\subseteq\mathbb R^n$, $n\ge1$; and a functional $F\in H^{-1}(\Omega)$, that is, a bounded conjugate-linear functional on $H^1_0(\Omega)$ with $\|F\|_{H^{-1}}=\sup_{\|v\|\le1}|F(v)|$.

[F1] $H^1_0(\Omega)$ is a Hilbert space under $(u,v)_{H^1}:=(u,v)_{L^2}+\sum_{i=1}^n(D_iu,D_iv)_{L^2}$, whose induced norm is the $W^{1,2}$ norm; the pairing is linear in the first variable and conjugate-linear in the second, and conjugate-symmetric ([[lem-w-one-two-is-a-hilbert-space]], [[def-sobolev-space-wkp-and-its-norm]], [[def-wkp-zero-as-a-sobolev-closure]], [[def-hk-and-hk-zero-notation]], [[def-hilbert-space]]).

[F2] $H^{-1}(\Omega)$ consists of the bounded conjugate-linear functionals, with $\|F\|_{H^{-1}}=\sup_{\|v\|\le1}|F(v)|$; the $L^2$ pairings are conjugate-symmetric and depend only on classes ([[def-h-minus-one-as-the-dual-of-h-one-zero]], [[def-l-p-space-as-a-quotient-by-null-functions]]).

[F3] Riesz representation under Countable Choice: for a bounded linear functional $G$ on $H^1_0(\Omega)$ there is a unique $g$ with $G(v)=(v,g)_{H^1}$ for all $v$, and $\|G\|=\|g\|_{H^1}$, the operator norm being the dual norm ([[thm-riesz-representation-for-hilbert-space]], [[def-operator-norm]], [[def-bounded-linear-operator]], [[def-countable-choice]]).

[F4] Every $L^2$ pairing satisfies $|(f,v)_{L^2}|\le\|f\|_2\|v\|_2$ by [[lem-l-two-with-the-integral-pairing-is-a-hilbert-space]] and [[thm-cauchy-schwarz-in-an-inner-product-space]]. Conjugation and finite Cauchy--Schwarz: $\overline{z}$ has $|\overline z|=|z|$ and $\overline{F(v)}$ depends linearly on $v$ when $F$ is conjugate-linear; for complex numbers $z_0,\dots,z_n,w_0,\dots,w_n$, $\bigl|\sum_{i=0}^nz_i\overline{w_i}\bigr|\le\bigl(\sum_{i=0}^n|z_i|^2\bigr)^{1/2}\bigl(\sum_{i=0}^n|w_i|^2\bigr)^{1/2}$ ([[def-complex-conjugate-real-imaginary-part-and-modulus]], [[thm-cauchy-schwarz-and-the-euclidean-norm]]).



## Proof

1.1 The functional $G(v):=\overline{F(v)}$ is linear in $v$ (conjugating a conjugate-linear map gives a linear one), and $|G(v)|=|F(v)|$ for every $v$, so $G$ is bounded with the same dual norm as $F$. [F1, F4]

1.2 Every representation bounds the norm: if $F(v)=(f_0,v)_{L^2}+\sum_i(f_i,D_iv)_{L^2}$ for all $v$, then the $L^2$ pairing bound followed by finite Cauchy--Schwarz on the real vectors of component norms, and $\|v\|_{H^1}^2=\|v\|_{L^2}^2+\sum_i\|D_iv\|_{L^2}^2$ give $$|F(v)|\le\Bigl(\sum_{i=0}^n\|f_i\|_{L^2}^2\Bigr)^{1/2}\|v\|_{H^1},$$ so $\|F\|_{H^{-1}}\le\bigl(\sum_{i=0}^n\|f_i\|_{L^2}^2\bigr)^{1/2}$ and, taking the infimum over all representations, $\|F\|_{H^{-1}}\le\inf\{\cdots\}$. [F1, F2, F4]

2.1 Riesz representation: by [F3] applied to the Hilbert space $H^1_0(\Omega)$ there is a unique $g\in H^1_0(\Omega)$ with $G(v)=(v,g)_{H^1}$ for every $v\in H^1_0(\Omega)$, and $\|g\|_{H^1}=\|G\|=\|F\|_{H^{-1}}$. Conjugating and expanding the $H^1$ inner product gives, for every $v$, $$F(v)=\overline{(v,g)_{H^1}}=(g,v)_{L^2}+\sum_{i=1}^n(D_ig,D_iv)_{L^2},$$ so with $f_0:=g$ and $f_i:=D_ig\in L^2(\Omega)$ this is a representation of the required form. [F1, F2, F3, F4, step 1.1]

3.1 The canonical representation attains the infimum: for $f_0=g$, $f_i=D_ig$ one has $\sum_{i=0}^n\|f_i\|_{L^2}^2=\|g\|_{L^2}^2+\sum_i\|D_ig\|_{L^2}^2=\|g\|_{H^1}^2=\|F\|_{H^{-1}}^2$ by step 2.1, so the infimum is at most $\|F\|_{H^{-1}}$ and, with step 1.2, equals it. The data of the canonical representation are controlled by the norm through $\|g\|_{H^1}=\|F\|_{H^{-1}}$ and conversely by the estimate of step 1.2. The construction uses Riesz representation in $H^1_0$ only; no Hahn--Banach extension is invoked. [F1, F3, step 2.1, step 1.2, algebra] ∎ 