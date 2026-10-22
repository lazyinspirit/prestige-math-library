---
id: cex-knot-kt-12-boundary-case
kind: counterexample
title: "A primitive sixth root makes the trefoil Hermitian form singular"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 15
deps:
  - def-levine-tristram-hermitian-form-and-signature
  - lem-levine-tristram-hermitian-form-singular-set
  - lem-levine-tristram-one-sided-averages-exist
  - ex-knot-kt-07-worked-cases
  - def-axiom-of-choice
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Anthony Conway, The Levine–Tristram signature: a survey, Matrix Annals 2016 (arXiv:1903.04477)"
      url: "https://arxiv.org/pdf/1903.04477"
      locator: "§2.1, printed pp. 3–4: Hermitian form and singularity at Alexander roots; §2.4, printed p. 7: averaged signature convention; complete 18-page PDF inspected."
---
## Statement refuted

Assume full AC. The false statement is: “For every $\omega\in S^1\setminus\{1\}$, the Levine–Tristram Hermitian matrix of every knot is nonsingular.” The positive trefoil matrix at a primitive sixth root is singular. At that root the nondegenerate signature calculation does not apply; the defined knot invariant is the one-sided-average value.

## Statement references

[[def-levine-tristram-hermitian-form-and-signature|The form and root-average convention]]

[[ex-knot-kt-07-worked-cases|The positive trefoil matrix and Alexander polynomial]]

[[lem-levine-tristram-hermitian-form-singular-set|Alexander roots are precisely singular parameters]]

[[lem-levine-tristram-one-sided-averages-exist|Existence of the one-sided limits at the root]]

## Facts & Assumptions

**Given:** Full AC, the positive trefoil matrix $V_T=\begin{psmallmatrix}1&0\\-1&1\end{psmallmatrix}$, and a primitive sixth root $\omega=e^{i\pi/3}$.

[A1] Full AC supplies the positive-push Seifert matrix and signature conventions. [[def-axiom-of-choice]], [[def-levine-tristram-hermitian-form-and-signature]]

[F1] $V_T$ is the positive-push trefoil matrix and its Alexander polynomial is $1-t+t^2$. [[ex-knot-kt-07-worked-cases]]

[F2] A root of the Alexander polynomial is exactly a singular parameter for $H_\omega$, and the invariant at such a root is the average of one-sided signatures. [[lem-levine-tristram-hermitian-form-singular-set]], [[def-levine-tristram-hermitian-form-and-signature]]

[F3] Each one-sided limit at this root exists as an integer, so the arithmetic mean prescribed by the definition is defined. [[lem-levine-tristram-one-sided-averages-exist]]

## Proof

1.1 Let $c=1-\omega$. Since $\omega+\bar\omega=1$, $|c|^2=(1-\omega)(1-\bar\omega)=2-(\omega+\bar\omega)=1$. Direct substitution gives
$$H_\omega(V_T)=\begin{pmatrix}1&-\bar c\\-c&1\end{pmatrix},\qquad \det H_\omega=1-|c|^2=0.$$
The matrix is nonzero (its diagonal entries are $1$), so it is singular. Also $1-\omega+\omega^2=0$, confirming this is an Alexander root. [A1, F1, given, algebra]

2.1 The zero determinant refutes the universal nonsingularity statement. By [F2], this root is precisely where the definition uses the arithmetic mean of the two one-sided signature limits; [F3] guarantees that this average is defined. No signature formula requiring an invertible $H_\omega$ may be used at the root itself. [F2, F3, step 1.1, contradiction] ∎
