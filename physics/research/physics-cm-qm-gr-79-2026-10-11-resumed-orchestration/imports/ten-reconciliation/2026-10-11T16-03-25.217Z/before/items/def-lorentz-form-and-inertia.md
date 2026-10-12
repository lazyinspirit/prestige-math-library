---
id: def-lorentz-form-and-inertia
kind: definition
title: "Lorentz forms of inertia (3,1,0) on a 4-dimensional real vector space"
status: draft
origin: session
domain: mathematics
dependency_level: 0
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-vector-space, def-dimension, def-bilinear-symmetric-skew-and-alternating-forms, def-matrix-radicals-rank-and-nondegeneracy-of-a-bilinear-form, def-definiteness-inertia-and-signature-data-over-the-reals]
dependency_roles:
  def-vector-space: mathematical-premise
  def-dimension: mathematical-premise
  def-bilinear-symmetric-skew-and-alternating-forms: mathematical-premise
  def-matrix-radicals-rank-and-nondegeneracy-of-a-bilinear-form: mathematical-premise
  def-definiteness-inertia-and-signature-data-over-the-reals: mathematical-premise
sources:
  references:
    - title: "H. S. Reall, Part III General Relativity (Cambridge, October 12, 2022 revision), sections 2.1-2.2 pp. 25-28 (PDF pp. 26-29); Internet Archive copy of the original https://www.damtp.cam.ac.uk/user/hsr1000/part3_gr_lectures.pdf"
      url: "https://web.archive.org/web/20230323191108id_/https://www.damtp.cam.ac.uk/user/hsr1000/part3_gr_lectures.pdf"
    - title: "S. M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1 (1997), Ch. 1 pp. 2-7 (PDF pp. 9-14)"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
    - title: "K. Conrad, Bilinear Forms (orthogonality, radicals, inertia)"
      url: "https://kconrad.math.uconn.edu/blurbs/linmultialg/bilinearform.pdf"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-10
---

## Definition

Let $V$ be a $4$-dimensional real vector space ([[def-vector-space]],
[[def-dimension]]). A **Lorentz form** on $V$ is a symmetric bilinear form
$\eta:V\times V\to\mathbb R$ ([[def-bilinear-symmetric-skew-and-alternating-forms]])
such that

1. $\eta$ is nondegenerate: both radicals
   $\operatorname{rad}_L(\eta)=\{u:\eta(u,v)=0\text{ for every }v\}$ and
   $\operatorname{rad}_R(\eta)=\{v:\eta(u,v)=0\text{ for every }u\}$ are
   $\{0\}$ ([[def-matrix-radicals-rank-and-nondegeneracy-of-a-bilinear-form]]);
   and
2. $\eta$ has **inertia** $(3,1,0)$: in some (equivalently, in every) basis of
   $V$ in which the matrix of $\eta$ is diagonal, exactly three diagonal
   entries are positive, exactly one is negative, and none is zero
   ([[def-definiteness-inertia-and-signature-data-over-the-reals]]).

The inertia of a symmetric bilinear form is the triple $(p,q,r)$ of numbers of
positive, negative and zero diagonal entries of any diagonalizing basis, and it
is independent of the diagonalizing basis by Sylvester's law of inertia
([[def-definiteness-inertia-and-signature-data-over-the-reals]]); hence clause 2
is a property of $\eta$ itself and not of a chosen basis. The **associated
quadratic form** of $\eta$ is

$$q(v):=\eta(v,v),\qquad v\in V .$$

A **Lorentz vector space of signature $(-,+,+,+)$** is a pair $(V,\eta)$
consisting of a $4$-dimensional real vector space $V$ and a Lorentz form $\eta$
on $V$; the name records that the diagonal normal form of $\eta$ has one
negative entry followed by three positive entries. No positive-definite
structure on $V$ is assumed or implied by this definition, and $q$ takes both
negative and positive values on nonzero vectors: a basis in which
$\eta$ is diagonal with diagonal entries $-1,1,1,1$ exists by clause 2, and on
its first vector $q$ is $-1$, while on each of the other three it is $+1$.
