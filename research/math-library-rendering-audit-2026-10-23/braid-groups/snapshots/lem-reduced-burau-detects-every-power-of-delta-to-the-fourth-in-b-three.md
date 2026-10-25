---
id: lem-reduced-burau-detects-every-power-of-delta-to-the-fourth-in-b-three
kind: lemma
title: "The reduced Burau representation detects every power of the fourth power of the half twist in B3"
status: published
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 10
deps:
  - def-reduced-burau-representation
  - thm-topological-and-matrix-burau-representations-agree
  - def-garside-half-twist-and-simple-positive-braid
  - lem-units-and-powers-of-the-laurent-polynomial-ring
  - def-axiom-of-choice
justified_by: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Joan S. Birman and Tara E. Brendle, Braids: A Survey (background on Burau matrices, the cyclic cover and absolute homology)"
      url: "https://www.math.columbia.edu/~jb/Handbook-21.pdf"
      locator: "Section 4.2, printed pp. 46-47; section 4.4, printed p. 52. Relative-module, basis and specialization calculations are supplied locally."
    - title: "Vasudha Bharathram, Joan S. Birman and Tara E. Brendle, The Burau representation is faithful for n = 4, arXiv:2607.05283v1 (6 July 2026), Introduction and section 2 (printed pp. 1-5)"
      url: "https://arxiv.org/pdf/2607.05283v1"
      locator: "Introduction and section 2, printed pp. 1-5"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Statement

Assume AC (inherited through the definition of the reduced representation and
the agreement theorem with the topological representation). Let
$\Delta=\sigma_1\sigma_2\sigma_1$ be the half twist of $B_3$ and let
$\bar\rho_3:B_3\to\operatorname{GL}_2(\Lambda_1)$ be the reduced Burau
representation in the basis $(g_1,g_2)$ of
[[thm-topological-and-matrix-burau-representations-agree]], over
$\Lambda_1=\mathbb Z[t^{\pm1}]$. Then
$$\bar\rho_3(\Delta^2)=t^3I_2,\qquad\text{hence}\qquad \bar\rho_3(\Delta^{4k})=t^{6k}I_2$$ for every $k\in\mathbb Z$, and
$t^{6k}I_2=I_2$ if and only if $k=0$. Consequently no nonzero power
$\Delta^{4k}$, $k\ne0$, lies in the kernel of $\bar\rho_3$, and the cyclic
subgroup $\langle\Delta^4\rangle=\{\Delta^{4k}:k\in\mathbb Z\}$ maps
isomorphically onto its image under $\bar\rho_3$.

## Facts & Assumptions

**Given:** AC; the half twist $\Delta=\sigma_1\sigma_2\sigma_1$ of $B_3$; the reduced representation $\bar\rho_3$ in the basis $(g_1,g_2)$; the ring $\Lambda_1=\mathbb Z[t^{\pm1}]$ with its element $t$.

[F1] In the basis $(g_1,g_2)$, $\bar\rho_3(\sigma_1)=\begin{pmatrix}-t&t\\0&1\end{pmatrix}$, $\bar\rho_3(\sigma_2)=\begin{pmatrix}1&0\\1&-t\end{pmatrix}$, and $\bar\rho_3(\Delta^2)=t^3I_2$ for the full twist $\Delta^2=(\sigma_1\sigma_2\sigma_1)^2$ ([[thm-topological-and-matrix-burau-representations-agree]]).

[F2] $\bar\rho_3:B_3\to\operatorname{GL}_2(\Lambda_1)$ is a group homomorphism; hence $\bar\rho_3(\beta^m)=\bar\rho_3(\beta)^m$ for every $\beta\in B_3$ and every $m\in\mathbb Z$, where negative powers are taken in the group $\operatorname{GL}_2(\Lambda_1)$ ([[def-reduced-burau-representation]]).

[F3] $t^m\ne1$ in $\Lambda_1$ for every integer $m\ne0$ ([[lem-units-and-powers-of-the-laurent-polynomial-ring]], clause (b)).

[F4] $\Delta^2=(\sigma_1\sigma_2\sigma_1)^2$ is the full twist of $B_3$ and $\Delta^{4k}=(\Delta^2)^{2k}$ for every $k\in\mathbb Z$ ([[def-garside-half-twist-and-simple-positive-braid]]).

## Proof

**Proof technique:** direct.

1.1 *The full twist in the reduced representation.* Write $M_1=\bar\rho_3(\sigma_1)=\begin{pmatrix}-t&t\\0&1\end{pmatrix}$ and $M_2=\bar\rho_3(\sigma_2)=\begin{pmatrix}1&0\\1&-t\end{pmatrix}$ as in [F1]. Since $\bar\rho_3$ is a homomorphism and $\Delta^2=(\sigma_1\sigma_2\sigma_1)^2$ by [F4], $\bar\rho_3(\Delta^2)=(M_1M_2M_1)^2$ in the composition order of the conventions. Direct computation gives $M_1M_2=\begin{pmatrix}0&-t^2\\1&-t\end{pmatrix}$ and $M_1M_2M_1=\begin{pmatrix}0&-t^2\\-t&0\end{pmatrix}$, so $(M_1M_2M_1)^2=\begin{pmatrix}(-t^2)(-t)&0\\0&(-t)(-t^2)\end{pmatrix}=t^3I_2$, confirming the displayed value $\bar\rho_3(\Delta^2)=t^3I_2$. [F1, F2, F4, algebra]

2.1 *All powers of the fourth power.* For $k\ge0$, $\bar\rho_3(\Delta^{4k})=\bar\rho_3\bigl((\Delta^2)^{2k}\bigr)=\bigl(\bar\rho_3(\Delta^2)\bigr)^{2k}=(t^3I_2)^{2k}=t^{6k}I_2$ by [F2], [F4] and step 1.1. For $k<0$ set $k'=-k>0$; the matrix $t^3I_2$ is invertible with inverse $t^{-3}I_2$, and $\Delta^{4k}=(\Delta^2)^{-2k'}$, so $\bar\rho_3(\Delta^{4k})=\bigl(\bar\rho_3(\Delta^2)\bigr)^{-2k'}=(t^{-3}I_2)^{2k'}=t^{6k}I_2$, the same formula. Hence $\bar\rho_3(\Delta^{4k})=t^{6k}I_2$ for every $k\in\mathbb Z$. [F2, F4, step 1.1, algebra]

3.1 *Detection.* The scalar matrix $t^{6k}I_2$ equals $I_2$ if and only if $t^{6k}=1$ in $\Lambda_1$, and by [F3] applied to $m=6k$ this holds if and only if $6k=0$, that is, if and only if $k=0$. Therefore $\Delta^{4k}\in\ker\bar\rho_3$ is possible only for $k=0$: no nonzero power of $\Delta^4$ lies in the kernel. Consequently the restriction of the homomorphism $\bar\rho_3$ to the cyclic subgroup $\langle\Delta^4\rangle=\{\Delta^{4k}:k\in\mathbb Z\}$ has trivial kernel, so it is injective and maps that subgroup isomorphically onto its image. [F3, step 2.1] ∎
