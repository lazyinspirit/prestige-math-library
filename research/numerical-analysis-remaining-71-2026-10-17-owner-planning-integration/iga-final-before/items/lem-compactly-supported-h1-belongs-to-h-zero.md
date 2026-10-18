---
id: lem-compactly-supported-h1-belongs-to-h-zero
kind: lemma
title: Compactly supported H1 functions lie in H1_0
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 0
deps:
  - def-sobolev-space-wkp-and-its-norm
  - def-wkp-zero-as-a-sobolev-closure
  - lem-compact-support-zero-extension-in-wkp
  - thm-meyers-serrin-density-on-an-arbitrary-open-set
  - lem-test-function-cutoffs-and-euclidean-localization
  - def-countable-choice
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  precheck: pending
sources:
  references:
    - title: "Juha Kinnunen, Sobolev Spaces, Chapter 1 §1.3 and Chapter 2, complete lecture notes"
      url: "https://math.aalto.fi/~jkkinnun/files/sobolev_spaces.pdf"
    - title: "John K. Hunter, Notes on Partial Differential Equations, §3.4"
      url: "https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf"
    - title: "Stefan Takacs, Numerical Analysis of Isogeometric Methods, complete JKU lecture notes, 2018/19"
      url: "https://numa.jku.at/media/filer_public/3c/2a/3c2a6222-fd4d-4405-b866-e3757698fe8c/lecture_notes_iga.pdf"
---

## Statement

Assume Countable Choice. Let $U\subset\mathbb R^d$ be open and let $z\in H^1(U)$ vanish almost everywhere outside a compact set $K\subset U$. Then $z\in H^1_0(U)$, where $H^1_0(U)$ is the $H^1$ closure of $C_c^\infty(U)$.


## Facts & Assumptions

**Given:** Countable Choice; open $U\subset\mathbb R^d$; compact $K\subset U$; and $z\in H^1(U)$ with $z=0$ almost everywhere on $U\setminus K$.

[A1] [[def-countable-choice]] is used through the zero-extension, Meyers--Serrin density and Sobolev closure interfaces [F1], [F2], and [F4]; the cutoff existence [F3] itself is choice-free.

[F1] [[lem-compact-support-zero-extension-in-wkp]]: the zero extension $E_0z$ belongs to $H^1(\mathbb R^d)$ and its Sobolev norm equals that of $z$.

[F2] [[thm-meyers-serrin-density-on-an-arbitrary-open-set]]: under Countable Choice, smooth functions in $C^\infty(\mathbb R^d)\cap H^1(\mathbb R^d)$ are dense in $H^1(\mathbb R^d)$.

[F3] [[lem-test-function-cutoffs-and-euclidean-localization]]: for compact $K\subset U$ there is $\chi\in C_c^\infty(U)$ equal to one on a neighborhood of $K$.

[F4] [[def-wkp-zero-as-a-sobolev-closure]]: $H^1_0(U)$ is the closure of $C_c^\infty(U)$ in the $H^1$ norm.

## Proof

1.1 By [F1], $E_0z\in H^1(\mathbb R^d)$ and $E_0z=z$ on $U$, $E_0z=0$ off $U$. By [F2], choose $q_n\in C^\infty(\mathbb R^d)\cap H^1(\mathbb R^d)$ with $q_n\to E_0z$ in $H^1(\mathbb R^d)$. Choose $\chi$ from [F3]. [A1, F1, F2, F3, given]

2.1 Multiplication by $\chi$ is bounded on $H^1(\mathbb R^d)$. Indeed, for a weak derivative and a test function $\psi$, the weak identity gives $\int \chi q\,\partial_j\psi=\int q\,\partial_j(\chi\psi)-\int q(\partial_j\chi)\psi=-\int(\chi\partial_jq+q\partial_j\chi)\psi,$ so $D_j(\chi q)=\chi D_jq+q\partial_j\chi$; the boundedness of $\chi$ and its derivatives gives the $H^1$ norm bound. Since $\chi E_0z=z$ almost everywhere, $\chi q_n\to z$ in $H^1(U)$. Every $\chi q_n$ is smooth and compactly supported in $U$, so [F4] proves $z\in H^1_0(U)$. [F1, F3, F4, step 1.1, algebra] ∎
