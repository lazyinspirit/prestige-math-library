---
id: thm-uniform-interval-linear-residual-certifier-soundness
kind: theorem
title: The uniform interval residual certifier is sound on success
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 6
deps: [alg-uniform-interval-linear-residual-certifier, thm-uniform-linear-residual-solution-enclosure, thm-outward-rounded-operations-are-isotone-and-dag-sound, thm-spectral-and-frobenius-norms-are-unitarily-invariant-with-singular-value-formulas-and-rank-comparison, def-verified-linear-residual-certificate-data]
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
    - title: "Siegfried M. Rump, Verification methods: Rigorous results using floating-point arithmetic, Acta Numerica 19 (2010), §§5.1–5.5 and 10.5"
      url: "https://www.tuhh.de/ti3/rump/intlab/ActaNumerica2010.pdf"
    - title: "Nicholas J. Higham, Numerical Linear Algebra and Matrix Analysis, MIMS EPrint 2015.103, §§1 and 5.1"
      url: "https://eprints.maths.manchester.ac.uk/2411/01/covered/MIMS_ep2015_103.pdf"
---

## Statement

If [[alg-uniform-interval-linear-residual-certifier]] returns `certified` with $(R,\widehat x,q,r)$, then every $(A,b)$ in the admitted families has a unique solution and its distance from $\widehat x$ is at most $r/(1-q)$. Inconclusive output asserts no such conclusion.

## Facts & Assumptions

**Given:** Nonempty matrix and right-hand-side families enclosed by the supplied rectangles and a successful algorithm return with $q<1$.

[F1] Every exact family value in a finite interval expression DAG is enclosed by its outward result ([[thm-outward-rounded-operations-are-isotone-and-dag-sound]]).

[F2] Frobenius norm bounds the induced Euclidean operator norm ([[thm-spectral-and-frobenius-norms-are-unitarily-invariant-with-singular-value-formulas-and-rank-comparison]]).

[F3] The reported tuple is uniform residual certificate data ([[alg-uniform-interval-linear-residual-certifier]], [[def-verified-linear-residual-certificate-data]]).

[F4] Usable uniform residual data give a unique solution and the stated error radius ([[thm-uniform-linear-residual-solution-enclosure]]).

## Proof

1.1 By [F1], the interval DAGs for $I-RA$ and $R(b-A\widehat x)$ enclose these expressions simultaneously for every admitted $A,b$. The component modulus bounds, sums of squares and square roots therefore bound their Frobenius or Euclidean norms uniformly. By [F2], the first Frobenius bound also bounds $\|I-RA\|_2$. Thus the returned $q,r$ satisfy the inequalities in the uniform residual certificate definition. [F1, F2, F3, algebra]

2.1 The run returns `certified` only with $q<1$. Apply [F4] to the uniform certificate: for every admitted pair there is a unique solution $x_A(b)$ and $\|x_A(b)-\widehat x\|_2\le r/(1-q)$. [given, F3, F4, step 1.1] ∎

