---
id: lem-ip-index-source-elements-are-minimum-norm
kind: lemma
title: Index source elements are minimum-norm solutions
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 3
deps:
  - def-ip-index-source-ball
  - def-ip-compact-linear-inverse-model
  - thm-singular-value-decomposition-for-compact-operators
  - def-compact-spectral-filter-and-qualification
  - def-countable-choice
  - def-hilbert-space
  - def-real-and-complex-inner-product-space
  - def-orthogonality-and-orthogonal-complement
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
sources:
  references:
    - title: "Christian Clason, Regularization of Inverse Problems, lecture notes — Chapter 3, compact SVD and minimum-norm solutions"
      url: "https://imsc.uni-graz.at/clason/preprints/InverseNotes.pdf"
      locator: "Chapter 3, §§3.1–3.2, printed pp. 16–26: compact singular systems and minimum-norm representatives."
    - title: "Bernd Hofmann and Peter Mathé, A Note on the Modulus of Continuity for Ill-Posed Problems in Hilbert Space"
      url: "https://www.tu-chemnitz.de/mathematik/ip/fulltext/hofmann_b76.pdf"
      locator: "Section 1, PDF pp. 1–2: source sets relative to the spectrum of the operator."
---

## Statement

Assume Countable Choice. Let $K:X\to Y$ be compact between real or complex Hilbert spaces over the same scalar field, let $\psi$ be a bounded nonnegative spectral index with $\psi(0)=0$, and let $x=\psi(|K|)w$ for some $w\in X$. Then $x\in N(K)^\perp$; consequently, among all $z\in X$ satisfying $Kz=Kx$, $x$ is the unique vector of minimum norm.

## Statement references

[[def-ip-compact-linear-inverse-model|Compact Hilbert-space inverse model]]

[Clason, *Regularization of Inverse Problems*, Chapter 3](https://imsc.uni-graz.at/clason/preprints/InverseNotes.pdf)

[Hofmann and Mathé, *A Note on the Modulus of Continuity*, Section 1](https://www.tu-chemnitz.de/mathematik/ip/fulltext/hofmann_b76.pdf)

## Facts & Assumptions

**Given:** Countable Choice, compact $K:X\to Y$ between real or complex Hilbert spaces, an admissible index function $\psi$ with $\psi(0)=0$, and $x=\psi(|K|)w$.

[A1] [[def-countable-choice]]: Countable Choice is assumed by the compact singular-value decomposition supplier.

[F1] [[thm-singular-value-decomposition-for-compact-operators]]: A compact operator has orthonormal right singular vectors spanning $N(K)^\perp$, with $|K|v_j=s_jv_j$ for each positive singular value $s_j$, and $X=N(K)^\perp\oplus N(K)$.

[F2] [[def-ip-index-source-ball]] and [[def-compact-spectral-filter-and-qualification]]: A bounded spectral index acts by $\psi(s_j)$ on each right singular vector and by $\psi(0)=0$ on the kernel.

[F3] [[def-hilbert-space]], [[def-real-and-complex-inner-product-space]], and [[def-orthogonality-and-orthogonal-complement]]: The Hilbert norm is induced by the inner product; if $x\perp n$, then $\|x+n\|^2=\|x\|^2+\|n\|^2$.

## Proof

1.1 By [F1], write $w=w_0+\sum_j w_jv_j$ in norm, with $w_0\in N(K)$ and the $v_j$ an orthonormal basis of $N(K)^\perp$. The compact spectral multiplier in [F2] gives $x=\psi(|K|)w=\psi(0)w_0+\sum_j\psi(s_j)w_jv_j=\sum_j\psi(s_j)w_jv_j$. This norm-convergent sum is a limit of finite linear combinations of the $v_j$, so [F1] places $x$ in their closed span $N(K)^\perp$; if the positive singular set is empty, the sum and closed span are both zero. Thus $x\perp N(K)$. [given, A1, F1, F2, construct]

2.1 If $Kz=Kx$, then $n:=z-x\in N(K)$. By step 1.1, $x\perp n$, so [F3] gives $\|z\|^2=\|x+n\|^2=\|x\|^2+\|n\|^2\ge\|x\|^2$, with equality only when $n=0$, that is, $z=x$. Thus $x$ is the unique minimum-norm solution. [given, step 1.1, F3, algebra] ∎
