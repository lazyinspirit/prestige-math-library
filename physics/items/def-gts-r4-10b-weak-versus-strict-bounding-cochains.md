---
id: def-gts-r4-10b-weak-versus-strict-bounding-cochains
kind: definition
title: Weak versus strict bounding cochains
status: published
origin: pipeline
domain: mathematics
library: physics
dependency_level: 12
deps:
  - def-gts-lagrangian-branes-and-filtered-curved-a-infinity-fukaya-operations
  - def-gts-universal-novikov-completion
  - lem-gts-novikov-completion-is-filtered-ring
  - thm-gts-a-infinity-identities-bounding-cochains-and-unobstructed-fukaya-objects
dependency_roles:
  def-gts-lagrangian-branes-and-filtered-curved-a-infinity-fukaya-operations: mathematical-premise
  def-gts-universal-novikov-completion: mathematical-premise
  lem-gts-novikov-completion-is-filtered-ring: mathematical-premise
  thm-gts-a-infinity-identities-bounding-cochains-and-unobstructed-fukaya-objects: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: Fukaya, Oh, Ohta, and Ono, Lagrangian Floer Theory on Compact Toric Manifolds I, arXiv:0802.1703v3
      url: https://arxiv.org/pdf/0802.1703v3
      locator: §3, Definition 3.2, Lemma 3.3, Proposition 3.5, Definitions 3.6–3.7, printed pp. 16–18
verification:
  precheck: pass
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-05
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
---

## Definition

Let $R=\Lambda^0_{\nu,\mathbb Q}$ be the source graded Novikov completion with $\Gamma=\mathbb R\times\mathbb Z$, $\nu(\lambda,n)=\lambda$, and degree $d(\lambda,n)=2n$ as in [[def-gts-universal-novikov-completion]]. Write its monomial $q^{(\lambda,n)}$ as $T^\lambda\mathsf e^n$. Thus $R$ consists of formal sums $\sum_i a_iT^{\lambda_i}\mathsf e^{n_i}$ with $a_i\in\mathbb Q$, $\lambda_i\ge0$, and only finitely many nonzero terms below every energy cutoff; $\mathsf e=T^0\mathsf e^1$ is invertible, has cohomological degree two, and has valuation zero. The completion is a separated filtered ring by [[lem-gts-novikov-completion-is-filtered-ring]]. Let $(C,m_k)$ be a complete energy-filtered curved A-infinity algebra over $R$, with each $m_k$ filtration-preserving, $m_0\in F^{>0}C[1]$, and with the shifted bar coderivation satisfying $D^2=0$. Write $1_C$ for a strict algebra unit, distinct from the formal coefficient variable $\mathsf e$. Write $d(x)$ for unshifted cohomological degree, so the shifted degree is $d(x)-1$. The unit convention is $m_2(1_C,x)=(-1)^{d(x)}m_2(x,1_C)=x$, and $m_k$ vanishes on a unit input for every $k\ge1$ with $k\ne2$. This unit is an additional hypothesis: the current geometric single-object carrier uses the energy-only coefficient ring and does not construct a strict or homotopy unit on its full singular-chain model. The source article separately describes a homotopy-unital geometric model and a strictly unital canonical model; neither unit enhancement is inferred for the local carrier.

For $b\in F^\lambda C[1]^0$ with $\lambda>0$, define the deformed operations by the convergent sums
$$m_k^b(x_1,\ldots,x_k)=\sum_{r_0,\ldots,r_k\ge0}m_{k+r_0+\cdots+r_k}(b^{\otimes r_0},x_1,b^{\otimes r_1},\ldots,x_k,b^{\otimes r_k}).$$
A **weak bounding cochain** is such a $b$ for which $\sum_{k\ge0}m_k(b,\ldots,b)\in R\,1_C$; equivalently, the deformed curvature is a scalar multiple of $1_C$. This is the source condition written $m_0^b\equiv0\pmod{\Lambda_{0,\mathrm{nov}}\{e_C\}}$, where $e_C$ denotes its algebraic unit; here it is written $1_C$ to distinguish it from the formal coefficient variable $\mathsf e$. A **strict bounding cochain** satisfies $\sum_{k\ge0}m_k(b,\ldots,b)=0$, equivalently $m_0^b=0$. Weakly unobstructed means that at least one positive-valuation weak bounding cochain exists. Weak unobstructedness therefore asserts existence of a weak solution, but does not assert strict unobstructedness. The definition does not claim that every filtered curved algebra has a weak solution.

## Definition references

[[def-gts-lagrangian-branes-and-filtered-curved-a-infinity-fukaya-operations]]

[[def-gts-universal-novikov-completion]]

[[lem-gts-novikov-completion-is-filtered-ring]]

[[thm-gts-a-infinity-identities-bounding-cochains-and-unobstructed-fukaya-objects]]

## Facts & Assumptions

**Given:** A complete separated Novikov filtration, filtration-preserving curved operations, $m_0\in F^{>0}$, a strictly unital model with unit $1_C$, and the curved A-infinity identity $D^2=0$.

[F1] The Novikov completion is complete and the energy filtration is separated and multiplicative. [[def-gts-universal-novikov-completion]] [[lem-gts-novikov-completion-is-filtered-ring]]

[F2] The geometric operation interface retains curvature and defines the shifted bar convention, but does not construct the strict or homotopy unit assumed in stronger source models. The present strict unit is independently specified. [[def-gts-lagrangian-branes-and-filtered-curved-a-infinity-fukaya-operations]]

[F3] The bar coderivation identity $D^2=0$ is the conditional algebraic input of the preceding theorem. [[thm-gts-a-infinity-identities-bounding-cochains-and-unobstructed-fukaya-objects]]

[F4] A strict unit satisfies $m_2(1_C,x)=(-1)^{d(x)}m_2(x,1_C)=x$ and $m_k$ with a unit input vanishes for every $k\ge1$, $k\ne2$; these equations are part of the present definition.

## Proof

**Given:** The data above, including the strict-unit equations [F4] and the curved identity [F3].

1.1 Every term with $r=r_0+\cdots+r_k$ copies of $b$ has filtration at least $r\lambda$ beyond the fixed input filtration. For each fixed $r$ there are only finitely many $(r_0,\ldots,r_k)$, and $r\lambda\to\infty$. Completeness [F1] therefore makes each displayed sum for $m_k^b$ converge. The same estimate proves convergence of $\sum_{k\ge0}m_k(b^{\otimes k})$, since its $k$th term has filtration at least $k\lambda$ (and the $k=0$ term has positive filtration by hypothesis). In the boundary case $b=0$, only the $k=0$ curvature term remains. [F1, given, algebra]

2.1 Fix homogeneous inputs $x_1,\ldots,x_n$. For a tuple $\mathbf r=(r_0,\ldots,r_n)$ of nonnegative integers, form the finite bar word $w_{\mathbf r}=b^{\otimes r_0}\otimes x_1\otimes\cdots\otimes x_n\otimes b^{\otimes r_n}$. In the tensor-length-one component of $D^2(w_{\mathbf r})$, every term is a nested operation consuming the entire word: the inner operation is inserted into the outer one. Conversely, expanding the $m^b$-identity on $x_1,\ldots,x_n$ and recording which inserted copies of $b$ lie in the inner and outer operation recovers exactly one such nested term and its tuple $\mathbf r$. Thus, grouped by $\mathbf r$, the expanded deformed identity is the sum of these zero components of $D^2(w_{\mathbf r})$. The signs agree because the shifted degree of $b$ is zero. Each grouped sum vanishes by [F3]. At any fixed energy cutoff only finitely many tuples contribute, since a tuple with $r_0+\cdots+r_n=r$ adds filtration at least $r\lambda$; completeness and separatedness [F1] then give the identity in the limit. [F1, F3, step 1.1, construct, algebra]

3.1 In the weak case write $m_0^b=\lambda_b1_C$. This calculation requires the strict-unit hypothesis [F4]; the local geometric operation interface [F2] constructs no such unit and does not imply it. The one-input component of $(D^b)^2=0$ is
$$m_1^b m_1^b(x)+(-1)^{d(x)+1}m_2^b(x,m_0^b)+m_2^b(m_0^b,x)=0.$$
Strict unitality is preserved by the insertion formula because $b$ has shifted degree zero and every operation with a unit input vanishes except $m_2$. Thus $m_2^b(1_C,x)=(-1)^{d(x)}m_2^b(x,1_C)=x$. Substitution gives $(-1)^{d(x)+1}\lambda_b(-1)^{d(x)}x+\lambda_bx=0$, so $(m_1^b)^2=0$. [F2, F3, F4, step 2.1, algebra]

4.1 In the strict case the defining sum equals zero, so $m_0^b=0$ by the zero-input definition of $m_0^b$. A strict solution is therefore weak with scalar $\lambda_b=0$. The converse need not hold: the weak condition permits nonzero scalar curvature. Consequently weak unobstructedness alone does not imply strict unobstructedness. [F4, step 1.1, step 3.1, algebra] ∎

## Proof status

The convergence and algebraic unit calculation are conditional on a strict unital complete model and the A-infinity identity. The current single-object geometric carrier does not construct a homotopy or strict unit on its full singular-chain model. The source article distinguishes its homotopy-unital geometric model from its unital canonical model and delegates the complete geometric proof to the FOOO trilogy. The strict-unit geometric model and current 10A identity are not ready suppliers; this item's readiness is escalated. No bounding cochain is claimed to exist for an arbitrary given algebra; assuming weak unobstructedness does assert existence of a weak one.
