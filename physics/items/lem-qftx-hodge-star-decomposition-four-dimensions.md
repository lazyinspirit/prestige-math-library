---
id: lem-qftx-hodge-star-decomposition-four-dimensions
kind: lemma
title: Hodge decomposition of two-forms in four dimensions
status: "published"
origin: session
domain: mathematics
library: mathematics
category: quantum-field-theory-mathematics
dependency_level: 0
deps: []
dependency_roles: {}
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "David Tong, TASI Lectures on Solitons: Instantons, Monopoles, Vortices and Kinks"
      url: https://www.damtp.cam.ac.uk/user/tong/tasi/instanton.pdf
      locator: "Lecture 1, §1.1.1, equations (1.6)–(1.8), printed pp. 8–9: the four-dimensional self-dual and anti-self-dual decomposition used in square completion."
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-25
---

## Statement

Let $V$ be a four-dimensional real vector space with an orientation and inner product $g$, and let $W$ be a finite-dimensional real inner-product space. Define the Hodge operator $*_g$ on $\Lambda^2V^*$ by $\alpha\wedge *_g\beta=\langle\alpha,\beta\rangle_g\,\mathrm{vol}_g$, and extend it $W$-linearly to $\Lambda^2V^*\otimes W$. Give this tensor product the inner product induced by those on $\Lambda^2V^*$ and $W$. Then $*_g^2=I$, $*_g$ is an isometry, and its $+1$ and $-1$ eigenspaces are orthogonal. Every $\Phi\in\Lambda^2V^*\otimes W$ has the unique decomposition

$$
\Phi=\Phi^++\Phi^-,\qquad \Phi^\pm:=\frac{\Phi\pm *_g\Phi}{2},\qquad *_g\Phi^\pm=\pm\Phi^\pm.
$$

If the inner product on $V$ is rescaled to $\widehat g=\lambda^2g$ for any $\lambda>0$, then the Hodge operator on two-forms is unchanged: $*_{\widehat g}=*_g$.

## Statement references

[Tong, Lecture 1 §1.1.1, equations (1.6)–(1.8)](https://www.damtp.cam.ac.uk/user/tong/tasi/instanton.pdf)

## Facts & Assumptions

**Given:** The oriented four-dimensional inner-product space $V$, the finite-dimensional inner-product space $W$, and the Hodge operator and induced tensor-product inner product specified in the Statement.

[A1] The oriented space $V$ has a positively oriented orthonormal coframe, and $W$ has an orthonormal basis; these are finite-dimensional inner-product spaces.

## Proof

1.1 Choose a positively oriented orthonormal coframe $e^1,e^2,e^3,e^4$ of $V^*$. The defining wedge identity gives $*_g e^{12}=e^{34}$, $*_g e^{13}=-e^{24}$, $*_g e^{14}=e^{23}$, $*_g e^{23}=e^{14}$, $*_g e^{24}=-e^{13}$, and $*_g e^{34}=e^{12}$. Thus $*_g$ permutes the orthonormal basis of $\Lambda^2V^*$ with signs, so it is an isometry; applying it twice to each of the six basis vectors gives $*_g^2=I$. The same conclusions hold after tensoring each basis vector with any member of an orthonormal basis of $W$. [given, A1, algebra]

2.1 For $\Phi^+=\tfrac12(\Phi+*_g\Phi)$ and $\Phi^-=\tfrac12(\Phi-*_g\Phi)$, the identity $*_g^2=I$ from step 1.1 gives $*_g\Phi^+=\Phi^+$, $*_g\Phi^-=-\Phi^-$, and $\Phi=\Phi^++\Phi^-$. If $*_g\alpha=\alpha$ and $*_g\beta=-\beta$, the isometry property from step 1.1 gives $\langle\alpha,\beta\rangle=\langle *_g\alpha,*_g\beta\rangle=-\langle\alpha,\beta\rangle$, hence $\langle\alpha,\beta\rangle=0$. The decomposition is unique because the intersection of the two eigenspaces is zero. [given, A1, step 1.1, algebra]

3.1 Under $\widehat g=\lambda^2g$, the induced inner product on $\Lambda^2V^*$ scales by $\lambda^{-4}$ because each covector factor scales by $\lambda^{-2}$, while the oriented volume form scales by $\lambda^4$. Hence for all $\alpha,\beta\in\Lambda^2V^*$, $\langle\alpha,\beta\rangle_{\widehat g}\,\mathrm{vol}_{\widehat g}=\langle\alpha,\beta\rangle_g\,\mathrm{vol}_g$. The defining wedge identity therefore gives $\alpha\wedge *_{\widehat g}\beta=\alpha\wedge *_g\beta$ for every $\alpha$; nondegeneracy of the wedge pairing between two-forms in dimension four implies $*_{\widehat g}\beta=*_g\beta$. The identity extends $W$-linearly. [given, A1, algebra] ∎
