---
id: cor-dyadic-partition-choice-does-not-change-the-lp-square-function-space
kind: corollary
title: "The choice of admissible dyadic partition does not change the Lp square-function space"
status: published
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 7
deps: [lem-existence-of-a-smooth-inhomogeneous-dyadic-frequency-partition, def-inhomogeneous-dyadic-frequency-partition, thm-littlewood-paley-square-function-equivalence-on-lp, def-countable-choice, lem-dyadic-pieces-are-uniform-mihlin-multipliers-and-lp-bounded, thm-c-c-infinity-rn-is-dense-in-l-p-of-rn]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Terence Tao, Math 247A Lecture Notes 4 (UCLA, Fall 2006)"
      url: "https://www.math.ucla.edu/~tao/247a.1.06f/notes4.pdf"
      locator: "Corollary 5.4, where the equivalence holds for any adapted family with $\\sum_j|\\psi_j|^2\\sim1$, printed p. 24"
    - title: "Loukas Grafakos, Classical Fourier Analysis, 3rd ed. (Springer GTM 249)"
      url: "https://www.math.stonybrook.edu/~bishop/classes/math638.F20/Grafakos_Classical_Fourier_Analysis.pdf"
      locator: "Definition 6.1.1 and Theorem 6.1.2, whose statements hold for any admissible annular generator $\\Psi$, printed pp. 420-421"
    - title: "Mark Williams, Notes on Harmonic Analysis (January 11, 2022)"
      url: "https://markwilliams.web.unc.edu/wp-content/uploads/sites/19674/2022/01/notesonharmonicanalysisB.pdf"
      locator: "(5.11) and §5.2, where the partition is chosen once but the estimates use only the annular support, printed pp. 18-21"
---

## Statement

Assume Countable Choice. Call an inhomogeneous dyadic frequency partition **admissible** when it is
obtained as in [[lem-existence-of-a-smooth-inhomogeneous-dyadic-frequency-partition]]
from some radial cutoff satisfying the standing hypotheses. Let
$(\varphi_j)$ and $(\psi_j)$ be two admissible partitions with associated
square functions $S^{(\varphi)}$ and $S^{(\psi)}$. Then for every
$1<p<\infty$ there are constants $0<c\le C<\infty$, depending only on $n,p$
and the two cutoffs, such that for every $f\in L^p(\mathbb R^n;\mathbb C)$
$$c\,\|S^{(\psi)}f\|_p\le\|S^{(\varphi)}f\|_p\le C\,\|S^{(\psi)}f\|_p .$$
Moreover the mixed pieces are almost orthogonal:
$\Delta^{(\varphi)}_j\Delta^{(\psi)}_k=0$ whenever $|j-k|\ge3$, and each mixed
operator $\Delta^{(\varphi)}_j\Delta^{(\psi)}_k$ is the Fourier multiplier with
symbol $\varphi_j\psi_k$ supported in
$\operatorname{supp}\varphi_j\cap\operatorname{supp}\psi_k$. For $j,k\ge1$
these are intersections of the corresponding annular supports; if either
index is zero, use the actual low-frequency ball support of that block.

## Facts & Assumptions

**Given:** Countable Choice, two admissible partitions $(\varphi_j)$, $(\psi_j)$ with cutoffs $\psi_\varphi,\psi_\psi$ and operators $\Delta^{(\varphi)}_j,\Delta^{(\psi)}_k$; a real $1<p<\infty$; a function $f\in L^p(\mathbb R^n;\mathbb C)$.

[F1] [[thm-littlewood-paley-square-function-equivalence-on-lp]] applies to each admissible partition separately: for the partition $(\varphi_j)$ there are constants $0<c_1\le C_1<\infty$ depending only on $n,p$ and the cutoff $\psi_\varphi$ with $c_1\|g\|_p\le\|S^{(\varphi)}g\|_p\le C_1\|g\|_p$ for all $g\in L^p$, and for the partition $(\psi_j)$ there are constants $0<c_2\le C_2<\infty$ depending only on $n,p$ and $\psi_\psi$ with $c_2\|g\|_p\le\|S^{(\psi)}g\|_p\le C_2\|g\|_p$.

[F2] For each of the two admissible partitions, every fixed dyadic piece is a bounded operator on $L^p$ and agrees with its convolution representative; the composition on $\mathcal S$ has symbol $\varphi_j\psi_k$ ([[lem-dyadic-pieces-are-uniform-mihlin-multipliers-and-lp-bounded]], [[def-inhomogeneous-dyadic-frequency-partition]]). Also $C_c^\infty$ is dense in $L^p$ for $1<p<\infty$ ([[thm-c-c-infinity-rn-is-dense-in-l-p-of-rn]]). For $j,k\ge1$ the supports satisfy $\operatorname{supp}\varphi_j\subset\{2^{j-1}\le|\xi|\le2^{j+1}\}$ and $\operatorname{supp}\psi_k\subset\{2^{k-1}\le|\xi|\le2^{k+1}\}$; the low blocks satisfy $\operatorname{supp}\varphi_0\subset\{|\xi|\le2\}$ and $\operatorname{supp}\psi_0\subset\{|\xi|\le2\}$ ([[def-inhomogeneous-dyadic-frequency-partition]], [[lem-existence-of-a-smooth-inhomogeneous-dyadic-frequency-partition]]).

## Proof

**Proof technique:** direct.

1.1 Comparability of the two square functions. By [F1] applied to $f$, $c_1\|f\|_p\le\|S^{(\varphi)}f\|_p\le C_1\|f\|_p$ and $c_2\|f\|_p\le\|S^{(\psi)}f\|_p\le C_2\|f\|_p$; eliminating $\|f\|_p$ gives $\frac{c_1}{C_2}\|S^{(\psi)}f\|_p\le\|S^{(\varphi)}f\|_p\le\frac{C_1}{c_2}\|S^{(\psi)}f\|_p$, with constants depending only on $n,p$ and the two cutoffs. [F1, algebra]

1.2 The mixed pieces and their supports. For $f\in\mathcal S$ the composition rule [F2] gives $\Delta^{(\varphi)}_j\Delta^{(\psi)}_kf=T_{\varphi_j\psi_k}f$, whose symbol is supported in $\operatorname{supp}\varphi_j\cap\operatorname{supp}\psi_k$. If $|j-k|\ge3$, say $k\ge j+3$, then $\operatorname{supp}\varphi_j\subset\{|\xi|\le2^{j+1}\}$ (including $j=0$, since its support lies in the radius-two ball) and $\operatorname{supp}\psi_k\subset\{|\xi|\ge2^{k-1}\}$, with $2^{j+1}<2^{k-1}$, so the supports are disjoint and $\varphi_j\psi_k\equiv0$. Thus the mixed operator vanishes on $\mathcal S$; by [F2] each fixed dyadic piece is bounded on $L^p$, so its composition is bounded, and $C_c^\infty\subset\mathcal S$ is dense in $L^p$. Hence the identity $\Delta^{(\varphi)}_j\Delta^{(\psi)}_k=0$ extends to all of $L^p$. The same argument applies when $j\ge k+3$ after interchanging the partitions. When $j,k\ge1$ the support intersection is the intersection of their annuli; if a low block occurs it is the intersection with that block's actual ball support from [F2]. [F2, algebra]

2.1 Conclusion. Step 1.1 is the stated two-sided comparability with constants depending only on $n,p$ and the two cutoffs, and step 1.2 is the almost-orthogonality and support statement for the mixed pieces. [step 1.1, step 1.2] ∎
