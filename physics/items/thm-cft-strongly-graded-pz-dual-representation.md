---
id: thm-cft-strongly-graded-pz-dual-representation
kind: theorem
title: Strongly graded P(z) products from restricted-dual images
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-retained-2026-10-29
page: vertex-modules-intertwiners-and-fusion
dependency_level: 4
domain: mathematics
library: mathematics
proof_strategy: direct
deps:
  - def-cft-pz-compatibility-subspace
  - def-cft-pz-intertwining-map
  - def-cft-pz-tensor-product
  - thm-cft-strongly-graded-contragredient-duality
dependency_roles:
  def-cft-pz-compatibility-subspace: mathematical-premise
  def-cft-pz-intertwining-map: mathematical-premise
  def-cft-pz-tensor-product: mathematical-premise
  thm-cft-strongly-graded-contragredient-duality: mathematical-premise
sources:
  references:
    - title: "Huang, Lepowsky and Zhang, Part IV, §5.2, Proposition 5.33 and the dual-image construction"
      url: https://arxiv.org/pdf/1012.4198v2
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  precheck: pending
  judge:
    model: gpt-6-luna
    verdict: pass
    date: 2026-11-06
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-05
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
---

## Statement

Let $V$ be strongly graded Möbius or conformal, and let $\mathcal C$ be a full category of strongly graded generalized modules closed under restricted contragredients. For $W_1,W_2\in\mathcal C$ and $z\ne0$, let $S$ be the sum of transposed images of all $P(z)$-maps with target in $\mathcal C$, with the transported action and the degree convention $S^{(\beta)}_{[h]}$ from the compatibility definition. If $S$ is an object of $\mathcal C$ with this action, then $S'$ represents the $P(z)$-maps. Its universal map $\kappa$ is evaluation, its homogeneous components span $S'$ as a vector space, and every representing product is canonically isomorphic to this one. If a representing product $(T,\iota)$ already exists, then $S=\operatorname{im}(\iota':T'\to(W_1\otimes W_2)^*)$; thus the assumption $S\in\mathcal C$ follows whenever closure under images applies to this ambient strongly graded module homomorphism. There is no global weight-bound or CFT-type assumption.

## Statement references

[[def-cft-pz-compatibility-subspace]]

[[def-cft-pz-intertwining-map]]

[[def-cft-pz-tensor-product]]

[[thm-cft-strongly-graded-contragredient-duality]]

## Facts & Assumptions

**Given:** The hypotheses of the Statement, including the explicit membership assumption for $S$.

[F1] [[thm-cft-strongly-graded-contragredient-duality]] proves strong duality, opposite identities, double-dual evaluation and functorial transposition in this exact generality.

[F2] [[def-cft-pz-compatibility-subspace]], with its strong-duality supplier, proves that each transposed image intertwines the transported modes, has full compatibility and satisfies the local grading restrictions. Its sum defines $S$.

[F3] [[def-cft-pz-intertwining-map]] gives the exact Jacobi, grading, truncation and Möbius bracket identities. [[def-cft-pz-tensor-product]] gives the relative representing bijection.

## Proof

1.1 For $w_1,w_2$ homogeneous of auxiliary degrees $\beta_1,\beta_2$, define $\kappa(w_1,w_2)$ componentwise by $\langle s,\kappa(w_1,w_2)\rangle=s(w_1\otimes w_2)$. Only $s$ of degree $-\beta_1-\beta_2$ can contribute. Each fixed generalized-weight component is a functional on the finite-dimensional corresponding component of $S$, hence an element of $\overline{S'}$. For fixed $h$, the components at $h-m$, $m\to+\infty$, vanish because the ONE degree $\beta_1+\beta_2$ integer string of $S'$ is lower truncated. Finite sums of degrees handle arbitrary inputs. Compatibility in F2 transposes to the full $P(z)$-Jacobi identity for $\kappa$ and the three transported $L'(j)$ identities transpose to its Möbius brackets. Thus $\kappa$ is an actual $P(z)$-map, with target $S'\in\mathcal C$. [given, F1, F2, F3, algebra]

2.1 Given $I:W_1\otimes W_2\to\overline X$ with $X\in\mathcal C$, its transpose $I':X'\to S$ has its image in $S$ by the definition of that sum. Transposed Jacobi and the bracket identities make it a strong-module homomorphism. Its restricted transpose is a homomorphism $S'\to X''$, hence, by F1 and fullness, a morphism $f_I:S'\to X$. Pairing with $x'\in X'$ gives $I=\overline{f_I}\kappa$. Conversely, such a factorization forces $f_I'(x')$ to have exactly the values $\langle x',I(w_1,w_2)\rangle$ on every input; injectivity of the inclusion $S\hookrightarrow(W_1\otimes W_2)^*$ makes this transpose unique. Restricted duals separate finite components, so $f_I$ is unique. The same pairings show naturality in $X$. This proves the representing property. [F1, F2, F3, step 1.1, algebra]

3.1 If the span of the homogeneous components of $\kappa(w_1,w_2)$ were proper, its intersection with some finite-dimensional $(\beta,h)$-component would be proper. Choose a nonzero functional on that component vanishing on the intersection and extend it by zero to other components. It is an element $s\in(S')'=S$, by F1, and it vanishes on every evaluation value, so $s(w_1,w_2)=0$ for all inputs. The inclusion of $S$ in the algebraic dual is injective, a contradiction. This proves the vector-space spanning assertion without an unlicensed assumption that every submodule or quotient belongs to $\mathcal C$. [F1, step 1.1, step 2.1, algebra]

4.1 Suppose $(T,\iota)$ already represents. Every $I$ is $\overline f\iota$ for a morphism $f:T\to X$, so $I'=\iota'f'$ and every transposed image is contained in $\operatorname{im}\iota'$. The canonical map $\iota$ itself is one of the maps summed, giving the reverse inclusion. Thus $S=\operatorname{im}\iota'$. Once $S\in\mathcal C$, steps 1.1–2.1 show that $S'$ represents the same functor. Apply the two representing bijections to their canonical maps: the two comparison morphisms have compositions inducing the original universal maps, so uniqueness makes both compositions identities. This identifies $T$ with $S'$ and transports step 3.1 to $T$. [F1, F3, step 2.1, step 3.1, algebra] ∎
