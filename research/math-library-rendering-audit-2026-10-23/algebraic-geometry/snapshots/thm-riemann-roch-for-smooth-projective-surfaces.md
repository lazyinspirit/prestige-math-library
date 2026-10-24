---
id: thm-riemann-roch-for-smooth-projective-surfaces
kind: theorem
title: "Riemann-Roch for smooth projective surfaces"
status: published
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 1
deps:
  - def-axiom-of-choice
  - def-canonical-divisor-of-a-smooth-projective-surface
  - def-cartier-divisor
  - def-divisor-intersection-number-on-smooth-projective-surface
  - def-euler-characteristic-coherent-sheaf
  - def-invertible-sheaf
  - def-sheaf-tensor-product
  - lem-invertible-sheaf-dual-tensor-inverse
  - thm-serre-duality-smooth-projective-variety-locally-free-sheaves
  - thm-surface-intersection-product-bilinear-and-symmetric
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
    - title: "Ravi Vakil, The Rising Sea: Foundations of Algebraic Geometry, pre-publication version 2025-10-21"
      url: "https://math.stanford.edu/~vakil/216blog/FOAGoct2125public.pdf"
    - title: "A. Kumar and K. Venkatram, MIT 18.727 Topics in Algebraic Geometry: Algebraic Surfaces, Spring 2008, Lecture 2"
      url: "https://ocw.mit.edu/courses/18-727-topics-in-algebraic-geometry-algebraic-surfaces-spring-2008/198274c0c471d31fc05d600e28e403db_lect2.pdf"
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $k$ be a field, let
$X$ be an integral smooth projective surface over $k$, and let $K_X$ be a
canonical divisor ([[def-canonical-divisor-of-a-smooth-projective-surface]]).
Then for every invertible $\mathcal O_X$-module $\mathcal L$
([[def-invertible-sheaf]])
$$\chi(X,\mathcal L)=\chi(X,\mathcal O_X)+\tfrac12\bigl(\mathcal L\cdot\mathcal L-\mathcal L\cdot K_X\bigr),$$
and equivalently, for every Cartier divisor $D$ on $X$
([[def-cartier-divisor]]) with $\mathcal O_X(D)\cong\mathcal L$,
$$\chi(X,\mathcal O_X(D))=\chi(X,\mathcal O_X)+\tfrac12\,D\cdot(D-K_X).$$
Here $\chi$ is the Euler characteristic
([[def-euler-characteristic-coherent-sheaf]]). The right-hand side is an
integer and is independent of the choice of canonical divisor and of the
representative divisor of $\mathcal L$
([[def-canonical-divisor-of-a-smooth-projective-surface]]). No ampleness,
effectivity or vanishing hypothesis is imposed on $\mathcal L$.

## Facts & Assumptions

**Given:** a field $k$, an integral smooth projective surface $X$ over $k$, a canonical divisor $K_X$, and an invertible sheaf $\mathcal L$.

[F1] The intersection product is defined by the alternating sum $\mathcal L_1\cdot\mathcal L_2=\chi(X,\mathcal O_X)-\chi(X,\mathcal L_1^{\vee})-\chi(X,\mathcal L_2^{\vee})+\chi(X,\mathcal L_1^{\vee}\otimes\mathcal L_2^{\vee})$ of [[def-divisor-intersection-number-on-smooth-projective-surface]], is symmetric and $\mathbb Z$-bilinear, and satisfies $\mathcal L_1^{\vee}\otimes\mathcal L_1\cong\mathcal O_X$ ([[thm-surface-intersection-product-bilinear-and-symmetric]], [[lem-invertible-sheaf-dual-tensor-inverse]], [[def-sheaf-tensor-product]], [[def-invertible-sheaf]]).

[F2] The canonical sheaf satisfies $\mathcal O_X(K_X)\cong\omega_X=\bigwedge^2\Omega^1_{X/k}$, and $K_X\cdot\mathcal L=\omega_X\cdot\mathcal L$ for every invertible $\mathcal L$ ([[def-canonical-divisor-of-a-smooth-projective-surface]]).

[F3] Serre duality: for every invertible sheaf $E$ the cup-product pairing $H^q(X,E)\times H^{2-q}(X,E^{\vee}\otimes\omega_X)\to k$ is perfect with finite-dimensional groups, so $\chi(X,E)=\chi(X,E^{\vee}\otimes\omega_X)$; in particular $\chi(X,\omega_X)=\chi(X,\mathcal O_X)$ ([[thm-serre-duality-smooth-projective-variety-locally-free-sheaves]], [[def-euler-characteristic-coherent-sheaf]]).

[F4] The Axiom of Choice is inherited from the Serre-duality and Euler-characteristic suppliers of [F3]; the sheaf $\mathcal L$ and the divisor $K_X$ are given data.



## Proof
**Proof technique:** direct: evaluate the defining alternating sum on the pair $(\mathcal L^{\vee},\mathcal L\otimes\omega_X^{\vee})$ and replace two terms by Serre duality.

1.1 The defining sum. Put $A:=\mathcal L^{\vee}$ and $B:=\mathcal L\otimes\omega_X^{\vee}$. By [F1], $$A\cdot B=\chi(X,\mathcal O_X)-\chi(X,A^{\vee})-\chi(X,B^{\vee})+\chi(X,A^{\vee}\otimes B^{\vee})=\chi(X,\mathcal O_X)-\chi(X,\mathcal L)-\chi(X,\mathcal L^{\vee}\otimes\omega_X)+\chi(X,\omega_X),$$ because $A^{\vee}\cong\mathcal L$, $B^{\vee}\cong\mathcal L^{\vee}\otimes\omega_X$ and $A^{\vee}\otimes B^{\vee}\cong\omega_X$ ([[lem-invertible-sheaf-dual-tensor-inverse]]). [F1]

2.1 Serre duality in the two last terms. By [F3] with $E=\mathcal L^{\vee}\otimes\omega_X$, whose dual twisted by $\omega_X$ is $\mathcal L$, we have $\chi(X,\mathcal L^{\vee}\otimes\omega_X)=\chi(X,\mathcal L)$; and $\chi(X,\omega_X)=\chi(X,\mathcal O_X)$. Hence $$A\cdot B=2\bigl(\chi(X,\mathcal O_X)-\chi(X,\mathcal L)\bigr).$$ [F3, step 1.1]

3.1 Bilinearity. By [F1] and [F2], $A\cdot B=\mathcal L^{\vee}\cdot(\mathcal L\otimes\omega_X^{\vee})=-\mathcal L\cdot\mathcal L+\mathcal L\cdot\omega_X=\mathcal L\cdot K_X-\mathcal L\cdot\mathcal L$, where $\mathcal L\cdot K_X$ is the intersection with $\omega_X$ by [F2]. Comparing with step 2.1 and rearranging, $$2\bigl(\chi(X,\mathcal O_X)-\chi(X,\mathcal L)\bigr)=\mathcal L\cdot K_X-\mathcal L\cdot\mathcal L,\qquad\text{that is}\qquad\chi(X,\mathcal L)=\chi(X,\mathcal O_X)+\tfrac12\bigl(\mathcal L\cdot\mathcal L-\mathcal L\cdot K_X\bigr).$$ The right-hand side is an integer because $\chi$ is; it depends only on the isomorphism class of $\mathcal L$ and on the canonical class, hence is independent of the chosen representative divisor and canonical divisor ([[def-canonical-divisor-of-a-smooth-projective-surface]]). [F1, F2, step 1.1, step 2.1]

4.1 The divisor form. If $D$ is a Cartier divisor with $\mathcal O_X(D)\cong\mathcal L$, then $\mathcal L\cdot\mathcal L=D\cdot D$ and $\mathcal L\cdot K_X=D\cdot K_X$ by the dictionary of [[def-divisor-intersection-number-on-smooth-projective-surface]] and [[def-canonical-divisor-of-a-smooth-projective-surface]], so $\chi(X,\mathcal O_X(D))=\chi(X,\mathcal O_X)+\tfrac12D\cdot(D-K_X)$. The Axiom of Choice is inherited from [F4]; no further selection is made. [F4, step 3.1] ∎ 