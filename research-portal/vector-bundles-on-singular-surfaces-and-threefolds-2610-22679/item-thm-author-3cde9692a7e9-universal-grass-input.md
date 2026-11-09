---
title: External actual universal-class detection on Vect and Grass
status: published
research_item: thm-author-3cde9692a7e9-universal-grass-input
dependency_level: 17
---

PDF p. 11: Lemma5.3, second Chern additivity

## Prerequisites

- [lem-author-32887006bdff-em-p1-model](item-lem-author-32887006bdff-em-p1-model)
- [lem-author-32887006bdff-actual-orientation](item-lem-author-32887006bdff-actual-orientation)
- [lem-adjudicate-a8be8a17c858-negative-model-coefficients](item-lem-adjudicate-a8be8a17c858-negative-model-coefficients)
- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)


## Statement
For the source’s linearly oriented homotopy-commutative non-A¹ motivic ring spectrum with PBF, the actual map $\mathrm{Gr}_n\to\mathrm{Vect}_n$ induces the universal Chern-coordinate isomorphism
$$E^{*,*}(\mathrm{Vect}_{n,+}\otimes R)\cong E^{*,*}(R)\lbrack\!\lbrack c_1,\ldots,c_n\rbrack\!\rbrack$$
for every homotopy-cocommutative motivic coring $R$. This is the map-induced identification of Theorem4.4.6/Corollary4.4.7, with finite Grassmannian formula Lemma4.4.4 and Corollary4.4.5. Taking products of two classifying stacks is allowed by applying the coring version successively; restriction to their finite Grassmannian approximations jointly detects the universal coefficients.
The variables have bidegrees $(2j,j)$ and stabilize under adding a trivial line. For the completed EM model, assume the Axiom of Choice and the fixed compatible site and universe bounds of the supplied model and negative-coefficient constructions. Under these premises negative coefficient weights are zero in every cohomological degree. Hence for any fixed target Chern weight $i$, only monomials of total weight at most $i$ can occur; the relevant mapping-space $\pi_0$ and $\pi_1$ systems stabilize as both ranks exceed $i$. This last finiteness consequence is used explicitly in the local Cartan proof to rule out a phantom term.

## External input
Import the actual Vect/Grass cohomology comparison and finite Grassmannian formula from the precisely cited source. Theorem 4.4.6 is formulated after the source's elementary-excision localization; Corollary 4.4.7 is the stated cohomological consequence under PBF. The EM-specific negative coefficients and bounded-weight consequence are supplied and checked separately below. No bundle-group presentation or affine Picard-group detection substitutes for the map-induced comparison.

## Facts & Assumptions
[A1] The assumed [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice) and fixed size bounds discharge the actual model and negative-coefficient premises in [F2]–[F3], first used in step 1.1. The general external coring comparison retains its stated hypotheses; these added premises concern its specified EM application.

[F1] The external Annala–Iwasa input above gives the actual universal-coordinate comparison, including the coring version. In Lemma 4.4.4 the monomial index is $\alpha=(\alpha_1,\ldots,\alpha_n)$ with $|\alpha|=\sum_j\alpha_j\leq N-n$ and Chern weight $w(\alpha)=\sum_jj\alpha_j$, for the universal rank-$n$ quotient on $G(n,N)=\operatorname{Gr}_n(\mathcal O_S^N)$.

[F2] [lem-author-32887006bdff-em-p1-model](item-lem-author-32887006bdff-em-p1-model) and [lem-author-32887006bdff-actual-orientation](item-lem-author-32887006bdff-actual-orientation) supply the actual model $\mathcal E_S$, products, orientation and PBF over every qcqs field-scheme $S$.

[F3] [lem-adjudicate-a8be8a17c858-negative-model-coefficients](item-lem-adjudicate-a8be8a17c858-negative-model-coefficients) supplies $\mathcal E_S^{a,b}(Y)=0$ for all $a$ and $b<0$, on every smooth qcqs $S$-scheme $Y$, with the actual spectrum-valued coefficient convention. Its Choice and universe assumptions are inherited here. It computes the reduced projective-line loop of $A_0$, rather than identifying formal zero complexes with negative twists without an argument.


**Given:** The external input and its hypotheses; for the local consequence, a qcqs field-scheme $S$, its actual EM model, inherited Choice and universe bounds, and an integer $i\geq0$.

**Goal:** Verify the bounded-weight consequence and finite transition ranges for the universal one-factor and two-factor mapping spaces used by the consumers.

## Proof
1.1 In the coefficient convention of [F3], mapping homotopy degree $u$ into the weight-$i$ target is cohomological bidegree $(2i-u,i)$. A Chern monomial of weight $w$ therefore has coefficient $\mathcal E_S^{2(i-w)-u,i-w}(S)$. This group is zero whenever $w>i$, for every $u$, in particular $u=0,1$. The vanishing is about the actual represented model by [F3]. The general coring formula in [F1] remains valid, but negative-weight vanishing for an arbitrary coring is not being inferred from vanishing over $S$. [A1, F1, F2, F3]

2.1 Apply the finite basis formula in [F1] to $G(n,N)$, and successively to $G(n,N)\times_S G(m,M)$ using the same actual class maps. The latter mapping groups in homotopy degree $u$ have a finite additive basis $c^\alpha d^\beta$ with $|\alpha|\leq N-n$ and $|\beta|\leq M-m$; their coefficients are $\mathcal E_S^{2(i-w)-u,i-w}(S)$ for $w=w(\alpha)+w(\beta)$. For any surviving monomial, step 1.1 gives $w\leq i$, hence $|\alpha|\leq i$, $|\beta|\leq i$, and every variable index occurring is at most $i$. Consequently $N-n\geq i$ and $M-m\geq i$ include every potentially nonzero monomial. The one-factor assertion follows by omitting $\beta$. These are additive basis statements; no quotient-ring presentation of the finite Grassmannian is presumed. [F1, F2, step 1.1]

3.1 Increasing $N$ or $M$ restricts each universal quotient bundle to the previous one, so the pullback preserves all these basis monomials. In the ambient ranges of step 2.1 it is an isomorphism in mapping homotopy degrees zero and one. Under rank stabilization $V\mapsto V\oplus\mathcal O$, the old Chern classes are preserved and the new top class pulls back to zero: this follows from the source's Whitney formula and the pointed orientation in [F1]–[F2]. Once $n,m\geq\max\{1,i\}$, every newly introduced variable has weight greater than $i$ and has zero coefficient by step 1.1. Thus the rank restriction maps are also isomorphisms in both homotopy degrees. Applying the actual comparison in [F1] gives the same stabilization on the classifying stacks and their product. [F1, F2, step 1.1, step 2.1]

4.1 Take a cofinal countable diagonal in the finite approximation indices, for example $n=m=k$ and $N=M=2k$, followed from $k\geq\max\{1,i\}$. The mapping-spectrum tower has eventually isomorphic $\pi_0$ and $\pi_1$ by step 3.1; the same holds for the rank tower of classifying stacks. In the sequential homotopy-limit model, the possible kernel of $\pi_0\operatorname{holim}\to\lim\pi_0$ is the cokernel of $1-\mathrm{shift}$ on the product of the $\pi_1$ groups. On the constant tail identify their transition maps with identity. Given a sequence $(a_k)$, set $b_{k_0}=0$ and recursively $b_{k+1}=b_k-a_k$; then $(1-\mathrm{shift})(b)_k=a_k$. Thus this cokernel, equivalently $\lim^1\pi_1$, is zero. The bounded-weight universal classes are jointly detected by the finite approximations with no phantom term. Nothing in this argument requires a Noetherian or dimension bound on $S$. [step 2.1, step 3.1, algebra] ∎
