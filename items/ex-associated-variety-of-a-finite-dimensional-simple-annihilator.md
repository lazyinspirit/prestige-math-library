---
id: ex-associated-variety-of-a-finite-dimensional-simple-annihilator
kind: example
title: "The associated variety of a finite-dimensional simple annihilator is the origin"
status: draft
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 1
deps: [def-associated-graded-variety-of-a-two-sided-ideal, def-annihilator-ideal-of-a-lie-algebra-module, thm-finite-dimensional-simple-modules-are-classified-by-dominant-highest-weights, def-pbw-filtration-by-tensor-degree-on-the-enveloping-algebra, thm-pbw-ordered-monomial-basis-for-the-enveloping-algebra, thm-classical-affine-zero-loci-form-zariski-closed-sets, thm-cayley-hamilton, def-polynomial-evaluation-at-an-endomorphism]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "D. Barbasch, Cells in Weyl groups and primitive ideals (AIM workshop notes, 2006)"
      url: "http://www.liegroups.org/papers/summer06/cells.pdf"
      locator: "Section 3.3, printed pp.10-11"
    - title: "D. A. Vogan, The orbit method and primitive ideals for semisimple Lie algebras (CMS Conf. Proc. 1986)"
      url: "https://math.mit.edu/~dav/vogan86CMS.pdf"
      locator: "Section 3"
---

## Example

Let $\mathfrak g$ be a finite-dimensional complex semisimple Lie algebra and let
$L(\lambda)$ be a finite-dimensional simple $U(\mathfrak g)$-module, with
$\lambda$ dominant integral. Then
$I(\lambda)=\operatorname{Ann}_{U(\mathfrak g)}L(\lambda)$ has finite codimension
in $U(\mathfrak g)$, and its associated variety is the origin:

$$\mathcal V(I(\lambda))=\{0\}\subseteq\mathfrak g^*.$$ Indeed, with $d=\dim_{\mathbb C}L(\lambda)$, Cayley-Hamilton shows that for every $y\in\mathfrak g$ the power $y^d$ is the symbol of an element of $I(\lambda)$, so $\operatorname{gr}I(\lambda)$ contains the $d$-th powers of all of $\mathfrak g$. Over $\mathbb C$, the polarization identity shows that these pure $d$-th powers span $S^d(\mathfrak g)$: for $y_1,\ldots,y_d\in\mathfrak g$, $$d!\,y_1\cdots y_d=\sum_{J\subseteq\{1,\ldots,d\}}(-1)^{d-|J|} \left(\sum_{j\in J}y_j\right)^d.$$
Since $\operatorname{gr}I(\lambda)$ is an
ideal in $S(\mathfrak g)$, it contains every $S^k(\mathfrak g)$ for $k\ge d$.
Its zero set is therefore $\{0\}$; equivalently, every point $\xi$ in it
satisfies $\xi(y)^d=0$ for all $y\in\mathfrak g$. The finite-dimensionality
of $L(\lambda)$ is essential here. Infinite-dimensional (Verma-type)
annihilators behave differently: their associated varieties need not be
$\{0\}$, and on this page no positive-dimensionality statement about them is
asserted.

## Facts & Assumptions

**Given:** A finite-dimensional complex semisimple Lie algebra $\mathfrak g$, a dominant integral weight $\lambda$, and the finite-dimensional simple module $L(\lambda)$ with $d:=\dim_{\mathbb C}L(\lambda)\ge1$.

[F1] $I(\lambda)$ is the kernel of the unital algebra homomorphism $U(\mathfrak g)\to\operatorname{End}_{\mathbb C}(L(\lambda))$ given by the action, so it is a proper two-sided ideal and $U(\mathfrak g)/I(\lambda)$ embeds into the finite-dimensional algebra $\operatorname{End}_{\mathbb C}(L(\lambda))$ ([[def-annihilator-ideal-of-a-lie-algebra-module]], [[thm-finite-dimensional-simple-modules-are-classified-by-dominant-highest-weights]]).

[F2] Cayley-Hamilton: for every endomorphism $T$ of the finite-dimensional space $L(\lambda)$, the characteristic polynomial $\chi_T$ satisfies $\chi_T(T)=0$; it is monic of degree $d$ ([[thm-cayley-hamilton]], [[def-polynomial-evaluation-at-an-endomorphism]]).

[F3] The symbol of an element $p(y)=y^d+\text{(terms of degree }<d)$ of the PBW filtration is $y^d\in S^d(\mathfrak g)$; symbols multiply, and $\mathcal V(I)$ is the zero locus of $\operatorname{gr}I$ in $\mathfrak g^*$ with $\mathfrak g^*$ in duality with the degree-one symbols ([[def-associated-graded-variety-of-a-two-sided-ideal]], [[def-pbw-filtration-by-tensor-degree-on-the-enveloping-algebra]], [[thm-pbw-ordered-monomial-basis-for-the-enveloping-algebra]], [[thm-classical-affine-zero-loci-form-zariski-closed-sets]]).

## Verification

**Proof technique:** direct.

1.1 The action map $U(\mathfrak g)\to\operatorname{End}_{\mathbb C}(L(\lambda))$ has kernel $I(\lambda)$ by definition, so $U(\mathfrak g)/I(\lambda)$ is isomorphic to a subalgebra of the finite-dimensional algebra $\operatorname{End}_{\mathbb C}(L(\lambda))$; hence $I(\lambda)$ has finite codimension in $U(\mathfrak g)$. It is proper because $1$ acts as the identity on the nonzero module $L(\lambda)$. [F1, given]

1.2 Fix $y\in\mathfrak g$ and let $\chi_y$ be the characteristic polynomial of the operator by which $y$ acts on $L(\lambda)$; by [F2] it is monic of degree $d$ and $\chi_y(y)$ acts as $0$ on $L(\lambda)$, that is, $\chi_y(y)\in I(\lambda)$. Writing $\chi_y(y)=y^d+\text{(terms of PBW degree }<d)$, its symbol in the associated graded is $y^d$ by [F3]; hence $y^d\in(\operatorname{gr}I(\lambda))_d\subseteq S^d(\mathfrak g)$. [F2, F3, algebra]

2.1 Let $\xi\in\mathcal V(I(\lambda))$. By step 1.2 and the definition of the associated variety, $0=\xi(y^d)=\xi(y)^d$ for every $y\in\mathfrak g$, so $\xi(y)=0$ for every $y\in\mathfrak g$ and hence $\xi=0$; thus $\mathcal V(I(\lambda))\subseteq\{0\}$. Conversely, $I(\lambda)$ is a proper ideal, so $I(\lambda)\cap\mathbb C\cdot1=0$ and $\operatorname{gr}I(\lambda)$ has no nonzero degree-zero element; every $f\in\operatorname{gr}I(\lambda)$ therefore has zero constant term and satisfies $f(0)=0$, so $0\in\mathcal V(I(\lambda))$. Hence $\mathcal V(I(\lambda))=\{0\}$. [step 1.2, F1, F3, algebra] ∎
