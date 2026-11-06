---
id: lem-gts-filtered-finite-matrix-completion-extension
kind: lemma
title: Finite Floer matrices extend from the graded to the full energy completion
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
domain: mathematics
library: physics
dependency_level: 4
deps:
  - def-gts-universal-novikov-completion
  - lem-gts-novikov-completion-is-filtered-ring
  - def-gts-rational-capped-hamiltonian-floer-module
dependency_roles:
  def-gts-universal-novikov-completion: mathematical-premise
  lem-gts-novikov-completion-is-filtered-ring: mathematical-premise
  def-gts-rational-capped-hamiltonian-floer-module: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: John Pardon, An algebraic approach to virtual fundamental cycles on moduli spaces of pseudo-holomorphic curves
      url: https://arxiv.org/pdf/1309.2370v6
      locator: Definitions 7.7.2–7.7.3 and the bounded-extension and matrix-identity argument following equation 7.7.3; adapted here to the larger energy completion
verification:
  precheck: pending
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-05
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
---

## Statement

Let $k$ be a field, $\Gamma$ an abelian group, $\nu:\Gamma\to\mathbb R$ and $\delta:\Gamma\to\mathbb Z$ homomorphisms, $\Lambda=\Lambda_{\nu,k}$ the full energy completion, and $\Lambda^{\mathrm{gr}}\subset\Lambda$ its finite-grading-support subring. For finite index sets $S,T$, assign real reference weights $a_s,b_t$ and integer degrees $g_s,h_t$ to their basis vectors. On $C=\Lambda^S$ and $D=\Lambda^T$ use $v_C(c)=\min_s(v(c_s)+a_s)$ and $v_D(z)=\min_t(v(z_t)+b_t)$, with value $+\infty$ on zero. Then the following hold.

The modules $C,D$ are complete, and $(\Lambda^{\mathrm{gr}})^S$ is dense in $C$. Every finite matrix $A=(A_{ts})$ over $\Lambda^{\mathrm{gr}}$ extends uniquely to a continuous $\Lambda$-linear map $C\to D$ with the same entries. If $A\ne0$, then
$$v_D(Ac)\ge v_C(c)+m_A,\qquad m_A=\min_{A_{ts}\ne0}\bigl(v(A_{ts})+b_t-a_s\bigr).$$
The zero matrix is continuous and satisfies every such lower bound. Every finite sum, product, and polynomial identity of compatible finite matrices survives extension. In particular, a differential, continuation chain maps, and chain homotopy inverses over the graded completion extend with the same identities to the full completion.

If $\delta(\Gamma)\subset2\mathbb Z$ and each nonzero coefficient monomial $q^\gamma$ in $A_{ts}$ satisfies $h_t+\delta(\gamma)=g_s+r$, the extension has completed degree $r$ and parity $r$ modulo two. If $k\to k'$ is a unital homomorphism of fields, coefficientwise transport gives continuous maps of the two coefficient rings and preserves all these finite-matrix identities; no ordinary tensor-product description of the completed modules is required.

For the closed Hamiltonian data with all time-one fixed points nondegenerate, the component set and the contractible orbit sets are finite. Thus these results apply componentwise to the rational capped modules, their characteristic-zero coefficient extensions, and changes of reference cap.

## Statement references

[[def-gts-universal-novikov-completion]]

[[lem-gts-novikov-completion-is-filtered-ring]]

[[def-gts-rational-capped-hamiltonian-floer-module]]

## Facts & Assumptions

**Given:** The coefficient data and finite matrices in the Statement; for the last conclusion, the smooth compact manifold and the supplied smooth time-one Hamiltonian evolution of the rational capped-module definition.

[F1] The full energy completion has finite coefficient support below each real cutoff. [[def-gts-universal-novikov-completion]]

[F2] Convolution is well-defined, the full ring is complete, and $v(uv)\ge v(u)+v(v)$ and $v(u+v)\ge\min(v(u),v(v))$. [[lem-gts-novikov-completion-is-filtered-ring]]

[F3] The rational capped-module data supply the reference weights, deck degrees, and a time-one map whose derivative minus the identity is invertible at every fixed point. [[def-gts-rational-capped-hamiltonian-floer-module]]

## Proof

1.1 A sum of two finite-grading-support series has degree support in the union of their degree supports. The product has degree support in the sum of those two finite sets, because $\delta$ is additive; convolution exists by [F2]. Hence $\Lambda^{\mathrm{gr}}$ is a unital subring of $\Lambda$. Truncating $b\in\Lambda$ to the terms with $\nu(\gamma)<N$ gives a finite group-ring sum $b^{<N}$ by [F1], and $v(b-b^{<N})\ge N$. Therefore these finite sums converge to $b$. With finitely many reference weights this convergence holds in every stated module norm, proving density. [F1, F2, given, algebra]

1.2 A Cauchy sequence in $C$ is coordinatewise Cauchy, since $v(c_s-c'_s)\ge v_C(c-c')-a_s$. Each coordinate converges in $\Lambda$ by [F2]. There are finitely many coordinates, so the resulting coordinatewise limit lies in $C$ and the minimum of the coordinate convergence bounds tends to infinity, proving convergence in $v_C$. The empty index set gives the zero module and causes no exception. The same proof applies to $D$. [F2, given, algebra]

1.3 Each component of a manifold is open: every point has a connected small coordinate ball lying in its component. These components cover compact $M$, so a finite subcover shows that there are finitely many. The fixed-point set $Z$ of the supplied smooth time-one map $\Phi$ is closed: the map $z\mapsto(z,\Phi(z))$ is continuous and the diagonal is closed in the Hausdorff product $M\times M$. Thus $Z$ is compact. At a fixed point choose a coordinate chart identifying it with $0$ and, by continuity, representing $\Phi$ in that same chart near $0$. Write $f(y)=\Phi(y)-y$ in coordinates and $L=Df(0)=D\Phi(0)-I$. In positive dimension, invertibility gives $\|Ly\|\ge c\|y\|$ for $c=\|L^{-1}\|^{-1}>0$, while differentiability gives $f(y)=Ly+r(y)$ with $\|r(y)\|\le(c/2)\|y\|$ near zero. Therefore $\|f(y)\|\ge(c/2)\|y\|$ and zero is the only fixed point in that neighborhood. In dimension zero the coordinate neighborhood is already a point. The resulting isolating neighborhoods cover compact $Z$ and admit a finite subcover, each meeting $Z$ in one point. Hence $Z$ is finite. An orbit of the specified evolution is determined by its initial point; the one-periodic orbits, and their contractible subsets, are therefore finite. [F3, given, construct, algebra]

2.1 Define the extended map by $(Ac)_t=\sum_s A_{ts}c_s$. Every summand exists by [F2] and each sum is finite. For each nonzero entry, $v(A_{ts}c_s)+b_t\ge v(A_{ts})+v(c_s)+b_t\ge v_C(c)+v(A_{ts})+b_t-a_s$. Taking minima proves the claimed estimate and continuity. The ring laws give $\Lambda$-linearity and agreement on the graded submodule. Two continuous extensions agreeing on that dense submodule agree everywhere: approximate any input by its finite truncations and use the continuity of both extensions and the Hausdorff valuation topology. [F2, step 1.1, step 1.2, algebra]

3.1 For matrices $A,B$ of compatible finite sizes, the coefficient entries of their composition are $\sum_j B_{tj}A_{js}$, a finite sum of products in $\Lambda^{\mathrm{gr}}$. Its image in $\Lambda$ is the same finite sum of the same convolution products. Addition, scalar multiples, and identity matrices are preserved in the same way. Repeated composition proves that every finite matrix polynomial identity persists. Taking $d^2=0$, $d'F=Fd$, $GF-I=dK+Kd$, and $FG-I=d'L+Ld'$ gives the differential, chain-map, and homotopy-inverse conclusions; each displayed identity is between matrices of the appropriate fixed finite sizes. [F2, step 2.1, algebra]

3.2 For homogeneous input of degree $j$, each coefficient term $q^\eta e_s$ has $g_s+\delta(\eta)=j$. Every output monomial produced by $A_{ts}$ has degree $h_t+\delta(\gamma+\eta)=g_s+r+\delta(\eta)=j+r$. Thus the extension preserves completed degree $r$; on an arbitrary input this holds termwise in its convergent energy expansions. Since all ring degrees are even, these ordinary $\Lambda$-linear matrices obey the graded scalar convention also when $r$ is odd, and have parity $r$. The full module may have infinitely many nonzero integer-degree components, so this asserts completed grading rather than membership in an algebraic direct sum of degrees. [given, step 2.1, algebra]

4.1 Apply $k\to k'$ to every coefficient. The image support is contained in the original support, so finite energy support and finite grading support persist and valuation cannot decrease. At a fixed exponent, every convolution coefficient is a finite sum by [F2]; a field homomorphism preserves that sum and its products. Consequently coefficientwise transport is a unital continuous ring map commuting with the inclusions of the graded rings, and it preserves all identities in step 3.1. For a characteristic-zero field $k'$, the unique unital embedding of $\mathbb Q$ is defined by $a/b\mapsto(a\cdot1)(b\cdot1)^{-1}$, since $b\ne0$ remains nonzero. This supplies the stated rational scalar extensions. [F1, F2, step 3.1, algebra]

5.1 The modules in [F3] consequently have finite bases on finitely many components, so steps 1.1, 1.2, 2.1, 3.1, 3.2 and 4.1 apply separately with each component's ring. Under $w_x'=w_x\#B_x$, a coefficient is multiplied by $q^{-B_x}$, its valuation decreases by $\nu(B_x)$, and its reference weight increases by $\nu(B_x)$; the weighted valuation is unchanged. Its coefficient degree decreases by $\delta(B_x)$ while its reference degree increases by $\delta(B_x)$; total degree is unchanged. These monomial maps and their inverse maps are finite matrices, preserve both rings, and are continuous. Thus the extension construction is compatible with reference-cap relabeling and all claimed applications follow. [F3, step 1.1, step 2.1, step 3.1, step 3.2, step 4.1, step 1.3, algebra] ∎

## Source scope

This is an elementary local adaptation of the bounded extension and identity argument in Pardon §7.7.3. It does not assert geometric moduli finiteness, virtual counts, or any analytic compactification. Invertibility of atlas group orders is a separate geometric-construction hypothesis. The reference action, Conley–Zehnder recap convention, and Novikov ring theorem are the exact earlier suppliers used above. No choice principle beyond choosing finitely many reference caps is used.
