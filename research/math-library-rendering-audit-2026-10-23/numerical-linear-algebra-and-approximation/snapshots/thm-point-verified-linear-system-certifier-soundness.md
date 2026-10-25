---
id: thm-point-verified-linear-system-certifier-soundness
kind: theorem
title: The point linear solve certifier returns a sound solution ball on success
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 6
deps: [alg-point-verified-linear-system-certifier, thm-uniform-linear-residual-solution-enclosure, lem-rounded-linear-and-normal-residual-certificates, thm-outward-rounded-operations-are-isotone-and-dag-sound]
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
    - title: "Siegfried M. Rump, Verification methods: Rigorous results using floating-point arithmetic, Acta Numerica 19 (2010), §10.5"
      url: "https://www.tuhh.de/ti3/rump/intlab/ActaNumerica2010.pdf"
    - title: "Nicholas J. Higham, Numerical Linear Algebra and Matrix Analysis, MIMS EPrint 2015.103, §1"
      url: "https://eprints.maths.manchester.ac.uk/2411/01/covered/MIMS_ep2015_103.pdf"
---

## Statement

For exact stored dyadic $A,b,R,\widehat x$, if [[alg-point-verified-linear-system-certifier]] returns `certified` with ball $B(\widehat x,s)$, then $A$ is invertible and its unique solution $x$ to $Ax=b$ belongs to that ball. A range-failure or inconclusive result makes no such claim.

## Facts & Assumptions

**Given:** The exact input data and a `certified` return with outward bounds $q<1$, $r$, and $s\ge r/(1-q)$.

[F1] The point algorithm's rounded products and residuals satisfy the stated operationwise error allowances ([[alg-point-verified-linear-system-certifier]], [[lem-rounded-linear-and-normal-residual-certificates]]).

[F2] Outward interval DAG evaluation encloses every exact operation and its range is isotone ([[thm-outward-rounded-operations-are-isotone-and-dag-sound]]).

[F3] Usable residual data imply a unique solution within $r/(1-q)$ ([[thm-uniform-linear-residual-solution-enclosure]]).

## Proof

1.1 On a successful run, the columnwise rounded products enclose every column of $RA$ with Euclidean errors at most $v_j$, by [F1]. The Frobenius error between the rounded product matrix and $RA$ is therefore at most $\sqrt{\sum_jv_j^2}$. Outward soundness [F2] encloses $I-\widehat{RA}$, so the reported $q$ bounds $\|I-RA\|_2$ by the triangle inequality and $\|M\|_2\le\|M\|_F$. [F1, F2, algebra]

1.2 The rounded residual allowance $W$ bounds $\|\widehat w-(A\widehat x-b)\|_2$ and the rounded product allowance $v_c$ bounds $\|\widehat c-R\widehat w\|_2$ by [F1]. Thus $\|R(b-A\widehat x)\|_2\le\|\widehat c\|_2+\|R\|_2W+v_c\le r$, where [F2] makes each reported upper bound outward and $\|R\|_2\le\|R\|_F$. [F1, F2, algebra]

2.1 These are usable point residual certificate data with $q<1$. By [F3] the system has a unique solution and $\|x-\widehat x\|_2\le r/(1-q)\le s$. The latter inequality is exactly the returned ball membership. [given, F3, step 1.1, step 1.2, algebra] ∎
