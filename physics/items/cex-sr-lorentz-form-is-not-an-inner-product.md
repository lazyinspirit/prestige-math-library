---
id: cex-sr-lorentz-form-is-not-an-inner-product
kind: counterexample
title: "The Lorentz form is not an inner product"
status: published
origin: session
domain: mathematics
dependency_level: 2
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
proof_strategy: direct
deps: [def-lorentz-form-and-inertia, lem-lorentz-form-has-orthonormal-basis, def-inner-product-space, def-euclidean-inner-product]
dependency_roles:
  def-lorentz-form-and-inertia: mathematical-premise
  lem-lorentz-form-has-orthonormal-basis: mathematical-premise
  def-inner-product-space: mathematical-premise
  def-euclidean-inner-product: mathematical-premise
sources:
  references:
    - title: "H. S. Reall, Part III General Relativity (Cambridge, October 12, 2022 revision), sections 2.1-2.2 pp. 25-28 (PDF pp. 26-29); Internet Archive copy of the original https://www.damtp.cam.ac.uk/user/hsr1000/part3_gr_lectures.pdf"
      url: "https://web.archive.org/web/20230323191108id_/https://www.damtp.cam.ac.uk/user/hsr1000/part3_gr_lectures.pdf"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-10
---

## Statement refuted

Statement refuted: "the Lorentz form $\eta$ of a Lorentz vector space is an
inner product, i.e. a positive-definite symmetric bilinear form"
([[def-inner-product-space]]).

## Facts & Assumptions

**Given:** A Lorentz vector space $(V,\eta)$ of signature $(-,+,+,+)$, and an
$\eta$-orthonormal ordered basis of $V$ supplied by
[[lem-lorentz-form-has-orthonormal-basis]].

[L1] There is an ordered basis $(e_0,e_1,e_2,e_3)$ of $V$ with
$\eta(e_a,e_b)=\operatorname{diag}(-1,1,1,1)_{ab}$ for all $a,b$; a basis with
this property is called $\eta$-orthonormal
([[lem-lorentz-form-has-orthonormal-basis]]).

[L2] An inner product $\langle\,\cdot\,,\,\cdot\,\rangle$ on a real or complex
vector space satisfies: $\langle v,v\rangle$ is real and nonnegative, and
$\langle v,v\rangle=0$ if and only if $v=0$
([[def-inner-product-space]]).

[L3] The Euclidean inner product of $x,y\in\mathbb R^n$ is
$\langle x,y\rangle=\sum_{k<n}x_ky_k$, and it is the positive-definite inner
product of the Euclidean space $\mathbb R^n$
([[def-euclidean-inner-product]]).

## Counterexample

1.1 By [L1] fix an $\eta$-orthonormal ordered basis $(e_0,e_1,e_2,e_3)$ of $V$. Since it is a basis, $e_0\neq 0$, and by the displayed matrix $\eta(e_0,e_0)=-1<0$. [L1, choose]

2.1 An inner product must satisfy $\langle v,v\rangle\ge 0$ for every $v$, with equality only at $v=0$, by [L2]. The symmetric bilinear form $\eta$ fails this at the nonzero vector $e_0$, where $\eta(e_0,e_0)=-1<0$; hence $\eta$ is not positive definite and therefore is not an inner product, refuting the displayed statement. The contrast with [L3] shows that the failure comes from $\eta$ itself rather than from the definition of an inner product, which the Euclidean inner product satisfies. [step 1.1, L2, L3]

3.1 Consequently $\eta$ does not induce a norm on $V$: the Euclidean norm of [L3] is defined as $\lVert x\rVert_2=\sqrt{\langle x,x\rangle}$, and a norm arising from an inner product in this way requires the nonnegative quantity $\langle v,v\rangle$ of [L2] for every $v$, whereas $\eta(e_0,e_0)=-1$ admits no real square root. In particular the positive-definite inner-product theory (Cauchy-Schwarz, norms and orthogonal projection) cannot be applied to $\eta$ without additional argument. [step 2.1, L1, L2, L3] ∎

## Remarks

The refutation uses one nonzero vector. It does not claim that $\eta$ has no
useful positivity properties at all: on the orthogonal complement of a timelike
vector the restriction of $\eta$ is positive definite, as
[[ex-sr-orthogonal-complement-of-a-timelike-vector]] shows, and that is a
statement about a subspace rather than about $\eta$ itself.
