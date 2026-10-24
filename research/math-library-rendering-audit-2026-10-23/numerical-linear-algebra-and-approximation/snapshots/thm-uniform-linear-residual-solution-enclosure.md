---
id: thm-uniform-linear-residual-solution-enclosure
kind: theorem
title: A uniform approximate inverse and residual enclose every linear solution
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 2
deps: [def-verified-linear-residual-certificate-data, lem-neumann-inverse-norm-bound, cor-operator-norm-submultiplicative-and-t-star-t-identity, thm-rank-nullity, def-operator-norm-on-a-finite-dimensional-inner-product-space]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: "Siegfried M. Rump, Verification methods: Rigorous results using floating-point arithmetic, Acta Numerica 19 (2010), §10.5"
      url: "https://www.tuhh.de/ti3/rump/intlab/ActaNumerica2010.pdf"
    - title: "Nicholas J. Higham, Numerical Linear Algebra and Matrix Analysis, MIMS EPrint 2015.103, §1"
      url: "https://eprints.maths.manchester.ac.uk/2411/01/covered/MIMS_ep2015_103.pdf"
---

## Statement

If $(R,\widehat x,q,r)$ is usable uniform residual certificate data for nonempty $\mathcal A\subseteq\mathbb C^{n\times n}$ and $\mathcal b\subseteq\mathbb C^n$, then for every $A\in\mathcal A$ and $b\in\mathcal b$, the equation $Ax=b$ has a unique solution $x_A(b)$ and
$$
\|x_A(b)-\widehat x\|_2\le\frac{r}{1-q}.
$$

## Facts & Assumptions

**Given:** The uniform certificate data, with $q<1$.

[F1] For $\|E\|_2\le q<1$, $I-E$ is invertible and $\|(I-E)^{-1}\|_2\le(1-q)^{-1}$ ([[lem-neumann-inverse-norm-bound]]).

[F2] The operator 2-norm is compatible with composition ([[cor-operator-norm-submultiplicative-and-t-star-t-identity]]).

[F3] Rank-nullity makes an injective or surjective endomorphism of a finite-dimensional space invertible ([[thm-rank-nullity]]).

[F4] The operator 2-norm is induced by the Euclidean vector norm ([[def-operator-norm-on-a-finite-dimensional-inner-product-space]]).

## Proof

1.1 Fix any $A\in\mathcal A$ and $b\in\mathcal b$, and put $E=I-RA$. Certificate data give $\|E\|_2\le q<1$, so $RA=I-E$ is invertible by [F1]. If $Ax=0$, then $RAx=0$ and injectivity of $RA$ gives $x=0$; hence $A$ is injective and invertible by [F3]. Also $RA$ is surjective, so $R$ is surjective and invertible by [F3]. Thus $Ax=b$ has a unique solution. [given, F1, F3, algebra]

2.1 For that solution, $RA(x_A(b)-\widehat x)=R(b-A\widehat x)$. The matrix and vector norms are the induced Euclidean norms by [F4], so [F2] applies; since $RA=I-E$, certificate data and [F1] imply $\|x_A(b)-\widehat x\|_2\le\|(I-E)^{-1}\|_2\,\|R(b-A\widehat x)\|_2\le r/(1-q)$. Every choice of $A,b$ was arbitrary, proving the uniform conclusion. [given, F1, F2, F4, step 1.1] ∎

