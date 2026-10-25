---
id: ex-uniform-null-capture-on-a-block-function
kind: example
title: Uniform null capture for a constant block function
status: published
origin: pipeline
deps: [lem-uniform-null-g-delta-capture-functions]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: literature-derived
sources:
  references:
    - {title: "Hiromi Ishii, Regularity Properties and Inaccessible Cardinals", url: "https://tsukuba.repo.nii.ac.jp/record/37187/files/Hiromi%20ISHII.pdf", locator: "Lemma 3.11, pp. 47-50"}
verification:
  audited: 2026-09-22
---

## Example

For the constant function $f(n)=0$, the uniform capture lemma assigns a null
$G_\delta$ set $N_f$. Whenever an open $U$ of measure below one contains $N_f$,
the associated finite capture sets satisfy $0\in\varphi_U(n)$ for all
sufficiently large $n$.

## Verification

**Given:** The constant function $f:\omega\to\omega$, $f(n)=0$, and an open set $U\supseteq N_f$ of coin measure below one.

[F1] [[lem-uniform-null-g-delta-capture-functions]]: for every $f\in\omega^\omega$ there is a uniformly assigned null $G_\delta$ set $N_f$, and if an open $U$ of measure below one contains $N_f$, then the finite capture sets satisfy $f(n)\in\varphi_U(n)$ for all sufficiently large $n$.

1.1 Apply [F1] to the constant function $f(n)=0$. It supplies the uniformly assigned set $N_f$ and says directly that $N_f$ is a null $G_\delta$. [F1]

1.2 Since the given $U$ is open, has measure below one, and contains $N_f$, the capture clause of [F1] gives $f(n)\in\varphi_U(n)$ for all sufficiently large $n$. Because $f(n)=0$ for every $n$, this is exactly $0\in\varphi_U(n)$ eventually. [F1]

2.1 Thus [step 1.1] gives the claimed null $G_\delta$, and [step 1.2] gives the claimed eventual, rather than pointwise, capture of the constant function. [step 1.1, step 1.2] ∎
