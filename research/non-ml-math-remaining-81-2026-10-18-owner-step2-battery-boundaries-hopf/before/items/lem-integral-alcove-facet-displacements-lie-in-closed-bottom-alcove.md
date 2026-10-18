---
id: lem-integral-alcove-facet-displacements-lie-in-closed-bottom-alcove
kind: lemma
title: Integral facet displacements with closed-alcove dominant representatives
status: draft
dependency_level: 0
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
deps: [def-minuscule-weight, lem-root-datum-combinatorics, thm-classification-of-irreducible-reduced-crystallographic-root-systems, thm-cg-affine-alcove-transitivity-presentation-and-length, def-axiom-of-choice]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Stephen F. Sawin, Quantum Groups at Roots of Unity and Modularity
      url: https://arxiv.org/pdf/math/0308281v2
      locator: Section 4, proof following Lemma 11. The construction here corrects the arbitrary fixed-facet displacement assertion, uses the closed alcove, and handles E8 explicitly without a mark-one assumption.
---

## Statement

Assume the inherited Axiom of Choice. Let $R$ be an irreducible simply-laced root system, normalize roots to squared length two, and write $\theta=\sum a_i\alpha_i$, $h=1+\sum a_i$. Let $\ell>h$ be odd and $k=\ell-h$. Put $C=\{x:(x+\rho,\alpha_i)>0,\ (x+\rho,\theta)<\ell\}$. For every integral $\mu\in C$ and every facet $F$ of its closure, there is an integral point $\lambda$ in the relative interior of $F$ such that the ordinary Weyl-dominant representative $\gamma$ of $\mu-\lambda$ satisfies $\gamma\in P^+$ and $(\gamma,\theta)\le k+1$. Thus $\gamma$ is in the dominant part of the closed shifted bottom alcove. A finite facet point $\lambda$ need not be dominant before affine transport.

The assertion transports to every affine alcove. If the transported facet lies inside the strict shifted dominant chamber, the transported integral facet point is dominant. This is a geometric displacement assertion; it does not assert a tensor-summand or translation-functor conclusion.

For the finite coordinate verifications use the $E_8$ roots $\pm e_i\pm e_j$ and the half sums with an even number of minus signs, and simple vectors $\alpha_1=(e_1-e_2-e_3-e_4-e_5-e_6-e_7+e_8)/2$, $\alpha_2=e_1+e_2$, $\alpha_3=e_2-e_1$, $\alpha_j=e_{j-1}-e_{j-2}$ for $4\le j\le8$. The first six or seven give the $E_6,E_7$ subsystems.

## Facts & Assumptions

**Given:** The irreducible root system, positive base, full weight lattice and odd $\ell>h$.

[F1] The simply-laced possibilities are $A_n,D_n,E_6,E_7,E_8$, finite Weyl groups act on chambers, and roots have one-sign integral simple coordinates ([[thm-classification-of-irreducible-reduced-crystallographic-root-systems]], [[lem-root-datum-combinatorics]]).

[F2] A minuscule weight has pairings in $\{-1,0,1\}$ with every root, as does each member of its Weyl orbit ([[def-minuscule-weight]]).

[F3] Affine Weyl isometries transport facets and alcoves, and their linear parts belong to the finite Weyl group ([[thm-cg-affine-alcove-transitivity-presentation-and-length]]).

## Proof

**Given:** These data. Write $m_i=(\mu,\alpha_i)\ge0$; then $\sum a_im_i\le k$.

1.1 In types $A_n,D_n,E_6,E_7$ there is a nonzero minuscule fundamental weight $\omega$ with $(\omega,\theta)=1$. Here is the finite root-data check: the highest-root marks are respectively $(1,\ldots,1)$, $(1,2,\ldots,2,1,1)$, $(1,2,2,3,2,1)$ and $(2,2,3,4,3,2,1)$ in the standard diagram numbering. The $A,D$ vectors follow directly from $e_1-e_{n+1}$ and $e_1+e_2$ in their coordinate models. For $E_6,E_7$ use the first six or seven simple vectors of the $E_8$ realization specified in the Statement: summing with the stated marks gives respectively $(1,1,1,1,1,-1,-1,1)/2$ and $-e_7+e_8$, actual roots in that realization, and pairing with the respective simple vectors is nonnegative. They are therefore the highest roots, since a simply-laced irreducible root system has a single dominant root in its root orbit. Every positive root is at most this highest root in the simple-root order, so a fundamental weight at a mark-one node has all positive-root pairings at most one, proving the minuscule assertion and $(\omega,\theta)=1$. [F1, F2, algebra]

2.1 For a finite facet $i$ form the full-rank finite root subsystem with base $\{-\theta\}\cup\{\alpha_j:j\ne i\}$. Independence follows from $a_i>0$ in the highest-root relation; pairwise off-diagonal inner products are nonpositive, and these roots generate a finite reflection subgroup of $W$. Choose a vector $z$ pairing positively with all these independent roots, and minimize $(w\omega,z)$ over their finite generated reflection subgroup. Call a minimizer $\eta_i$. If it paired positively with one of those roots, reflecting in that root would strictly lower its pairing with $z$, a contradiction. Thus $(\eta_i,\alpha_j)\le0$ for $j\ne i$ and $(\eta_i,\theta)\ge0$. The remaining pairing $(\eta_i,\alpha_i)$ is positive: if it were nonpositive, all simple pairings and their positive-mark sum would force every pairing zero, hence $\eta_i=0$, impossible. By [F2] it is exactly one. Set $r=m_i+1$ and $\lambda=\mu-r\eta_i$. Its $i$-th Dynkin coordinate is $-1$, all other finite coordinates are nonnegative, and its highest-root pairing has not increased. Therefore $\lambda+\rho$ lies on exactly the $i$-th finite facet, and $\lambda$ is in its relative interior. The dominant displacement is $r\omega$, whose highest-root pairing is $r\le k+1$. [F1, F2, step 1.1, construct, algebra]

2.2 For the upper facet in the same types put $r=k+1-(\mu,\theta)>0$ and $\lambda=\mu+r\omega$. Every finite Dynkin coordinate stays nonnegative and the highest-root pairing becomes $k+1$, so $\lambda$ is in exactly that facet's relative interior. The dominant displacement is the dominant representative of $-r\omega$, whose highest-root pairing is again $r$ (the Weyl involution $-w_0$ preserves the highest root). Since $r\le k+1$, it lies in the required closed alcove. [F1, F2, step 1.1, algebra]

3.1 It remains to handle $E_8$, where $h=30$, $k$ is positive odd, and the marks are $(2,3,4,6,5,4,3,2)$. Use its root model consisting of $\pm e_i\pm e_j$ and half sums with an even number of minus signs. Fix $\alpha_1=(e_1-e_2-e_3-e_4-e_5-e_6-e_7+e_8)/2$, $\alpha_2=e_1+e_2$, $\alpha_3=e_2-e_1$, and $\alpha_j=e_{j-1}-e_{j-2}$ for $4\le j\le8$. Their Cartan pairings give the $E_8$ diagram and the marked sum is $\theta=e_7+e_8$, whose Dynkin coordinates are $(0,0,0,0,0,0,0,1)$. For finite facets $i=1,\ldots,8$ take respectively the roots $\eta_1=-e_7+e_8,\quad\eta_2=(e_1+e_2+e_3+e_4+e_5-e_6-e_7+e_8)/2,\quad\eta_3=(-e_1+e_2+e_3+e_4-e_5-e_6-e_7+e_8)/2,\quad\eta_4=-e_1-e_2,\quad\eta_5=e_4+e_8,\quad\eta_6=e_5+e_8,\quad\eta_7=e_6+e_8,\quad\eta_8=e_7+e_8.$ Their Dynkin coordinate vectors, obtained by the displayed dot products, are respectively $(1,0,0,0,0,0,0,-1)$, $(0,1,0,0,0,0,-1,0)$, $(0,0,1,0,0,-1,0,0)$, $(0,-2,0,1,0,0,0,0)$, $(0,0,0,0,1,-1,0,0)$, $(0,0,0,0,0,1,-1,0)$, $(0,0,0,0,0,0,1,-1)$ and $(0,0,0,0,0,0,0,1)$. Thus each has pairing one at node $i$, nonpositive pairings elsewhere, and nonnegative highest-root pairing (respectively $0,0,0,0,1,1,1,2$). Set $r=m_i+1$ and $\lambda=\mu-r\eta_i$. The same coordinate inequalities as step 2.1 place $\lambda$ in the required finite facet's relative interior. Every root is Weyl conjugate to $\theta$, so the dominant displacement is $r\theta$. Because $a_i\ge2$ and $k$ is odd, $m_i\le(k-1)/2$, hence $(r\theta,\theta)=2r\le k+1$. [F1, step 2.1, construct, algebra]

4.1 For the $E_8$ upper facet let $r=k+1-(\mu,\theta)$. If $r$ is even, take $\lambda=\mu+(r/2)\theta$. It is dominant, is in that facet's relative interior, and its dominant displacement has highest-root pairing $r\le k+1$. If $r$ is odd, $(\mu,\theta)$ is odd since $k+1$ is even, so $m_j>0$ for some odd-mark node $j\in\{2,5,7\}$. Choose respectively $\beta_2=-e_1+e_8$, $\beta_5=e_3+e_8$, $\beta_7=e_5+e_8$. Their Dynkin coordinate vectors are $(0,-1,1,0,0,0,0,0)$, $(0,0,0,1,-1,0,0,0)$ and $(0,0,0,0,0,1,-1,0)$, and each has highest-root pairing one. With $u=(r-1)/2$ put $\lambda=\mu+u\theta+\beta_j$. Its only potentially negative coordinate is repaired by $m_j\ge1$, and its highest-root pairing increases by $2u+1=r$, placing it exactly in the upper facet's relative interior. For every root $\alpha$, $|(u\theta+\beta_j,\alpha)|\le2u+2=r+1$, since all root pairings have absolute value at most two. The highest-root pairing of the dominant displacement is the maximum of its pairings with roots, hence at most $r+1$. Oddness of $r$ gives $r\le k$, so this is at most $k+1$. This proves the upper-facet assertion too. [F1, step 3.1, construct, algebra]

5.1 For an arbitrary affine alcove write $\mu=w\mathbin{\cdot}\mu_0$ with $\mu_0$ in the bottom alcove and transport the constructed facet point by the same dot action. The difference of the two transported points is the finite linear Weyl part of $w$ applied to their original difference, so its ordinary dominant representative is unchanged. If the transported facet is inside the strict shifted dominant chamber, each shifted simple pairing at its relative-interior integral point is a positive integer, and subtracting $\rho$ leaves nonnegative Dynkin coordinates. Thus the transported point is dominant exactly as required. No tensor decomposition conclusion has been used or asserted. [F3, step 2.1, step 2.2, step 3.1, step 4.1, algebra] ∎
