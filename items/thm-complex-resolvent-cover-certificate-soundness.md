---
id: thm-complex-resolvent-cover-certificate-soundness
kind: theorem
title: Diskwise Neumann certificates bound a complex matrix resolvent
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 3
deps: [lem-complex-infinity-neumann-inverse-norm-bound, def-complex-infinity-matrix-norm, lem-complex-infinity-matrix-norm-submultiplicative, thm-rank-nullity]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: "Siegfried M. Rump, Verification methods: Rigorous results using floating-point arithmetic, Acta Numerica 19 (2010), §§10.5–10.6"
      url: "https://www.tuhh.de/ti3/rump/intlab/ActaNumerica2010.pdf"
    - title: "Nicholas J. Higham, Numerical Linear Algebra and Matrix Analysis, MIMS EPrint 2015.103, §5.1"
      url: "https://eprints.maths.manchester.ac.uk/2411/01/covered/MIMS_ep2015_103.pdf"
---

## Statement

Let $n\ge1$, let $\Gamma$ be a nonempty finite union of closed line segments in $\mathbb C$, let $\mathcal A\subseteq\mathbb C^{n\times n}$ be nonempty, and let $A_0\in\mathbb C^{n\times n}$. Each segment of $\Gamma$ is assigned to one of finitely many disks $D_j=\{z:|z-z_j|\le r_j\}$ whose radius is $r_j\ge0$ and whose disk contains both endpoints of that segment. For each disk there are $R_j\in\mathbb C^{n\times n}$ and nonnegative bounds $e_j,\delta_A,s_j$ satisfying
$$e_j\ge\|I-R_j(z_jI-A_0)\|_{\infty,\mathbb C},\quad \delta_A\ge\sup_{A\in\mathcal A}\|A-A_0\|_{\infty,\mathbb C},\quad s_j\ge\|R_j\|_{\infty,\mathbb C}.$$
If $q_j=e_j+s_j(r_j+\delta_A)<1$ for each $j$, then every $z\in\Gamma$ and $A\in\mathcal A$ make $zI-A$ invertible, and
$$\|(zI-A)^{-1}\|_{\infty,\mathbb C}\le \max_j\frac{s_j}{1-q_j}.$$
The theorem bounds the resolvent on the supplied contour cover; it does not count enclosed eigenvalues or certify a nonnormal eigenvalue disk from a residual.

## Facts & Assumptions

**Given:** $\Gamma,\mathcal A,A_0,D_j,R_j,e_j,\delta_A,s_j$ and $q_j$ as in the statement.

[F1] A defect of complex infinity norm at most $q<1$ has inverse norm at most $(1-q)^{-1}$ ([[lem-complex-infinity-neumann-inverse-norm-bound]]).

[F2] The complex infinity matrix norm is compatible with products ([[lem-complex-infinity-matrix-norm-submultiplicative]]).

[F3] A product of square matrices is nonsingular only if each factor is nonsingular, by rank-nullity ([[thm-rank-nullity]]).

[F4] The complex infinity matrix norm is the maximum absolute row sum, so $\|I\|_{\infty,\mathbb C}=1$ ([[def-complex-infinity-matrix-norm]]).

## Proof

1.1 Each segment of $\Gamma$ has both endpoints in its assigned disk. A disk is convex, so the segment between its endpoints lies in the disk; the finite assignments therefore cover all of $\Gamma$. [given, algebra]

1.2 Fix a disk, $z\in D_j$, and $A\in\mathcal A$. The exact identity $I-R_j(zI-A)=I-R_j(z_jI-A_0)-R_j\bigl((z-z_j)I-(A-A_0)\bigr)$ and [F2] give $\|I-R_j(zI-A)\|_{\infty,\mathbb C}\le e_j+s_j(|z-z_j|+\|A-A_0\|_{\infty,\mathbb C})\le q_j<1$. [F1] applies to $M=R_j(zI-A)=I-E$ with $E=I-M$, giving $\|M^{-1}\|_{\infty,\mathbb C}\le(1-q_j)^{-1}$. Here [F4] gives $\|(z-z_j)I\|_{\infty,\mathbb C}=|z-z_j|$, and the row-sum norm's triangle inequality and compatibility [F2, F4] justify the defect estimate. [given, F1, F2, F4, algebra]

2.1 By [F4], $\|I\|_{\infty,\mathbb C}=1$. Since $M=R_j(zI-A)$ is nonsingular, both square factors are nonsingular by [F3]. Then $(zI-A)^{-1}=M^{-1}R_j$, so [F2] gives $\|(zI-A)^{-1}\|_{\infty,\mathbb C}\le s_j/(1-q_j)$. The disk cover from step 1.1 yields the maximum bound on all of $\Gamma$, uniformly in $A$. [given, F1, F2, F3, F4, step 1.1, step 1.2, algebra] ∎
