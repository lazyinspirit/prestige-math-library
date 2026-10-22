---
id: lem-smooth-slice-disk-induces-seifert-metabolizer
kind: lemma
title: A smooth slice disk induces a Seifert metabolizer
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-axiom-of-choice, def-knot-seifert-pairing-and-matrix, def-metabolic-seifert-form-and-algebraic-knot-concordance, lem-smooth-slice-disk-bounds-seifert-hypersurface, lem-linking-number-equals-four-dimensional-intersection-number, lem-rational-isotropic-subspace-saturates-to-integral-metabolizer, thm-poincare-lefschetz-duality, thm-universal-coefficient-theorem-for-cohomology-over-a-pid, thm-long-exact-sequence-of-a-pair-in-singular-homology, thm-compact-smooth-manifolds-with-corners-admit-relative-finite-triangulations]
proof_strategy: direct
sources:
  references:
    - title: Julia Collins, On the concordance orders of knots, Theorem 2.2.9, printed pages 20–21
      url: https://era.ed.ac.uk/bitstream/handle/1842/5034/Collins2011.pdf?sequence=4
---

## Statement

Assume full AC. Let $K\subset S^3$ be a smooth oriented knot, let $F\subset S^3$ be a connected compact oriented smooth Seifert surface of genus $g$, and suppose $K$ bounds a smooth neat proper disk in the standard $B^4$. Then the positive-push Seifert pairing on $H_1(F;\mathbb Z)$ has a rank-$g$ primitive direct summand on which it vanishes identically.

## Statement references

[[def-knot-seifert-pairing-and-matrix]]

[[def-metabolic-seifert-form-and-algebraic-knot-concordance]]

[[lem-smooth-slice-disk-bounds-seifert-hypersurface]]

## Facts & Assumptions

**Given:** Full AC, the smooth neat slice disk and the specified Seifert surface $F$.

[A1] Full AC supplies the declared assumptions of the smooth constructions and duality. [[def-axiom-of-choice]]

[F1] The abstract cap of $F$ bounds a compact connected oriented smooth hypersurface $R$ in the interior of $B^4$. Its boundary $\Sigma$ has the usual $H_1(F)\cong H_1(\Sigma)$ identification, and $R$ has a bicollar aligned with the positive Seifert push. The construction keeps $R$ and its bicollar inside an inner ball and supplies disjoint product annuli connecting its boundary cycles and positive pushes to their original copies on $S^3$. [[lem-smooth-slice-disk-bounds-seifert-hypersurface]]

[F2] Compact smooth manifolds and their boundary pairs have finite triangulations. Their homology pair sequence is exact. Over $\mathbb Q$, universal coefficients identify homology and cohomology dimensions; Poincaré–Lefschetz duality gives $H_i(R,\Sigma;\mathbb Q)\cong H^{3-i}(R;\mathbb Q)$ and $H_i(R;\mathbb Q)\cong H^{3-i}(R,\Sigma;\mathbb Q)$. [[thm-compact-smooth-manifolds-with-corners-admit-relative-finite-triangulations]], [[thm-long-exact-sequence-of-a-pair-in-singular-homology]], [[thm-universal-coefficient-theorem-for-cohomology-over-a-pid]], [[thm-poincare-lefschetz-duality]]

[F3] Boundary linking of disjoint rational circle cycles is intersection of collared rational bounding chains in the ball. [[lem-linking-number-equals-four-dimensional-intersection-number]]

[F4] A rational half-rank isotropic subspace saturates to a primitive integral half-rank direct summand. [[lem-rational-isotropic-subspace-saturates-to-integral-metabolizer]]

[F5] The positive-push pairing is bilinear on integral homology, and its rational extension evaluates $V(x,y)=\operatorname{lk}(x^+,y)$. [[def-knot-seifert-pairing-and-matrix]]

## Proof

1.1 Choose $R$ and $\Sigma$ by [F1]. All homology groups in the dimension calculation have rational coefficients. The connected cap $\Sigma$ has genus $g$, so $b_1(\Sigma)=2g$ and $\chi(\Sigma)=2-2g$. The map $H_0(\Sigma)\to H_0(R)$ is an isomorphism. The pair sequence consequently makes $H_1(R)\to H_1(R,\Sigma)$ onto. Its target has dimension $b_2(R)$ by [F2], so the image of $H_1(\Sigma)\to H_1(R)$ has dimension $b_1(R)-b_2(R)$. Finiteness in [F2] permits alternating dimensions in the pair sequence: $\chi(R,\Sigma)=\chi(R)-\chi(\Sigma)$. Duality also gives $\chi(R,\Sigma)=-\chi(R)$, since $R$ has dimension three. Therefore $\chi(R)=1-g$. Furthermore $H_3(R)\cong H^0(R,\Sigma)=0$, because $R$ and its nonempty boundary are connected. With $b_0(R)=1$ this yields $b_1(R)-b_2(R)=g$. Thus $L=\ker(H_1(\Sigma)\to H_1(R))$, regarded as a subspace of $H_1(F;\mathbb Q)$ using [F1], has dimension $2g-g=g$. [A1, F1, F2, given, algebra]

2.1 Let $x,y\in L$ and represent them by finite rational circle cycles on $F$ outside its attaching collar. Their inward copies bound finite rational $2$-chains $X,Y$ in $R$, by the definition of the homology kernel. Push $X$ to a fixed small positive level of the bicollar in [F1]. The result is disjoint from $R$, hence from $Y$, and its boundary is the positive Seifert push of the inward copy of $x$. Attach the product annuli from [F1] to this chain and to $Y$, reaching the original $x^+$ and $y$ in $S^3$. The annuli have disjoint traces since $x^+$ is disjoint from $y$, and their interiors lie outside the inner ball containing both chains. Thus the two resulting bounding chains are disjoint. Product collars are supplied by the shell, and smooth relative chain approximations and arbitrarily small perturbations inside their disjoint neighborhoods put their interiors in general position without introducing an intersection. Their intersection number is zero. By [F3] and [F5], $V_{\mathbb Q}(x,y)=\operatorname{lk}(x^+,y)=0$. This holds for every $x,y\in L$. [F1, F2, F3, F5, step 1.1, construct]

3.1 The integral lattice has rank $2g$, and $L$ is a rational isotropic subspace of dimension $g$. By [F4], its saturation $H_1(F;\mathbb Z)\cap L$ is a primitive direct summand of rank $g$ on which the integral Seifert pairing vanishes. This is the required metabolizer. [F4, step 1.1, step 2.1, algebra] ∎

## Remarks

This smooth intermediate does not replace or narrow the original locally flat slice-metabolizer statement. Its geometric premise has a separate complete smooth proof; the full locally flat TOP Seifert-hypersurface premise remains an independent obligation.
