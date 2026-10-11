---
id: ex-self-dual-shift-normalization-for-a-cyclotomic-projective
kind: example
title: "Self-dual shift normalization for a cyclotomic projective"
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 18
deps: [def-cyclotomic-klr-diagram-duality-and-graded-module-duals,
       def-cyclotomic-klr-quotient-at-a-dominant-weight,
       thm-cyclotomic-klr-algebras-are-finite-dimensional-graded-symmetric]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-11
sources:
  references:
    - title: "Ben Webster, Knot Invariants and Higher Representation Theory I, arXiv:1001.2020v9"
      url: "https://arxiv.org/pdf/1001.2020v9"
      locator: "Section 1.3, Theorem 1.8 and Remark 1.9: the closing-diagram Frobenius trace, its symmetric adjustment and the degree shift of the self-dual normalization."
    - title: "Mikhail Khovanov and Aaron D. Lauda, A diagrammatic approach to categorification of quantum groups I, Representation Theory 13 (2009) 309-347, arXiv:0803.4121v2"
      url: "https://arxiv.org/pdf/0803.4121"
      locator: "Section 2.2 and Section 3.1: the polynomial rank-one module and the shift that centres the divided-power projective."
---

## Example

For rank one $d_i=1$ and $\lambda\ge1$, let $B=k[x]/x^\lambda$ and $P=B$. The
PROJECTIVE Hom dual satisfies $P^\#\cong P$, so the canonical normalized
projective is $P$ with no shift. Its finite vector dual is different:
$$D_\psi P\cong P\{-2(\lambda-1)\}.$$
The unique vector-dual-centered shift of this regular module is
$P\{-(\lambda-1)\}$. For $\lambda=1$ both centers agree; for $\lambda=2$,
projective Hom-self-duality centers $P$ at $0$ while vector-self-duality
centers it at $-1$. If $\lambda=0$ the block is zero and there is no
indecomposable projective here. For any normalized cyclotomic projective the
general relation is
$D_\psi P\cong P^\#\{-2\operatorname{def}_\Lambda(\beta)\}$; it does not
redefine the lower-basis projective normalization.

## Verification

**Given:** The rank-one cyclotomic quotient $B=k[x]/x^\lambda$ of [[def-cyclotomic-klr-quotient-at-a-dominant-weight]] with $d_i=1$, $\lambda\ge1$, and the two dualities of [[def-cyclotomic-klr-diagram-duality-and-graded-module-duals]].

[F1] The vector dual $D_\psi M=\operatorname{HOM}_k(M,k)^\psi$ reverses internal shifts and satisfies $D_\psi^2M\cong M$; the projective dual $P^\#=\operatorname{HOM}_B(P,B)^\psi$ is a finite graded projective and the symmetric theorem gives $D_\psi P\cong P^\#\{t_\beta\}$ with $t_\beta=-2\operatorname{def}_\Lambda(\beta)$ ([[thm-cyclotomic-klr-algebras-are-finite-dimensional-graded-symmetric]]).

1.1 Projective Hom self-duality. Evaluation $\operatorname{HOM}_B(B,B)\cong B$ gives $P^\#=\operatorname{HOM}_B(B,B)^\psi\cong B=P$ directly, the generator-fixing anti-involution producing the same left module; hence the canonical normalized projective is $P$ with no shift. [F1]

2.1 Vector duality and the shift. The functional $\epsilon(x^a)=0$ for $a<\lambda-1$ and $\epsilon(x^{\lambda-1})=1$ is the coefficient-of-$x^{\lambda-1}$ trace; it has degree $-2(\lambda-1)$ and its anti-diagonal pairing $\epsilon(x^ax^b)=\delta_{a+b,\lambda-1}$ is perfect over every field, so $D_\psi B\cong B\{-2(\lambda-1)\}$. Since $D_\psi(P\{s\})=D_\psi P\{-s\}$, vector self-duality of $P\{s\}$ solves $-2(\lambda-1)-s=s$, namely $s=-(\lambda-1)$, while projective Hom self-duality solves $-s=s$, namely $s=0$. [step 1.1, F1]

3.1 The general defect shift and the boundary. For a general normalized cyclotomic projective the same computation with the symmetric theorem gives $D_\psi P\cong P^\#\{-2\operatorname{def}_\Lambda(\beta)\}$, which is a comparison of the two dualities and does not redefine the projective normalization. At $\lambda=1$ the two centers agree; at $\lambda=2$ they differ by $1$ as computed; at $\lambda=0$ the defining relation is $1=0$ and the block vanishes, so there is no indecomposable projective here. The trace is never halved to pick the lower-basis class. [step 2.1, F1] ∎
