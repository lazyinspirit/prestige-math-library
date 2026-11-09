---
id: lem-author-3cde9692a7e9-actual-total-cartan
kind: lemma
title: The actual perfect K-space operations satisfy total Cartan
status: published
domain: mathematics
deps:
  - lem-author-3cde9692a7e9-local-free-test
  - lem-author-3cde9692a7e9-derived-chain-detection
  - thm-author-3cde9692a7e9-universal-grass-input
  - thm-author-d026a7b99ace-universal-chern-space
  - lem-author-32887006bdff-em-p1-model
  - lem-author-32887006bdff-actual-orientation
  - prop-chern-whitney-identities
  - prop-motivic-projective-bundle-formula
  - math:def-axiom-of-choice
dependency_roles:
  lem-author-3cde9692a7e9-local-free-test: mathematical-premise
  lem-author-3cde9692a7e9-derived-chain-detection: mathematical-premise
  thm-author-3cde9692a7e9-universal-grass-input: mathematical-premise
  thm-author-d026a7b99ace-universal-chern-space: mathematical-premise
  lem-author-32887006bdff-em-p1-model: mathematical-premise
  lem-author-32887006bdff-actual-orientation: mathematical-premise
  prop-chern-whitney-identities: mathematical-premise
  prop-motivic-projective-bundle-formula: mathematical-premise
  math:def-axiom-of-choice: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
proof_strategy: direct
dependency_level: 21
---

## Statement
Assume the Axiom of Choice and the fixed compatible universe and site-size bounds of the supplied constructions.

For the actual universal perfect K-space Chern operations $C_i:\mathcal K\to K(\mathbb Z(i)_{\rm mot},2i)$, set $C_0=1$. For every $i\geq1$ the natural maps satisfy, in the local pointed homotopy category,
$$C_i\circ\mu\simeq\sum_{a+b=i}\cup\circ(C_a\times C_b),$$
where $\mu$ is actual K-space addition and the right side uses the actual graded motivic cup product and additive target operation. Consequently, on every noetherian finite-dimensional $X/k$, the actual perfect operations give a natural total-series homomorphism $c_t^{\rm perf}:K_0(X)\to\{1+\sum_{i\geq1}a_it^i:a_i\in H^{2i,i}(X)\}$ under formal series multiplication. This is a coefficientwise Cartan homotopy/identity; no unproved stronger assertion about a chosen coherent E∞ map of total-series objects is made.

## Facts & Assumptions

[A1] Assume the Axiom of Choice as formulated in [[math:def-axiom-of-choice]] and the stated universe and site-size bounds. They are inherited from the universal-operation construction in [F2] at steps 1.1 and 3.1, and the local free-class/derived-chain comparisons in [F3] at step 3.1. The finite coefficient and formal-series arguments introduce no additional choice principle.

[F1] [[thm-author-3cde9692a7e9-universal-grass-input]] supplies the actual Vect/Grass comparison and universal-class detection for the completed non-A¹ EM ring model over base $X$. The theory has explicit zero negative weights in every degree, as in [[prop-motivic-projective-bundle-formula]].

[F2] [[prop-chern-whitney-identities]] supplies actual bundle Whitney on all smooth finite Grassmannian pairs over $X$; no smoothness of $X/k$ is needed. [[thm-author-d026a7b99ace-universal-chern-space]] constructs the actual stable universal Chern K-space maps from precisely these bundle classes, naturally in coefficients.

[F3] [[lem-author-3cde9692a7e9-local-free-test]] gives the block-sum/free-class comparison for actual addition, and [[lem-author-3cde9692a7e9-derived-chain-detection]] detects identities in the local homotopy category by its product.

## Proof
**Given:** The actual EM model and K-space operation on the stated site. Assume Choice and the universe and site-size bounds in [A1].

**Goal:** Establish Cartan for these maps on all perfect classes, not just for bundle-representable classes.

1.1 On $\mathrm{Vect}_n\times\mathrm{Vect}_m$, form the Cartan difference of the two universal bundle classes. Pull back to the finite Grassmannian approximations of the two factors. Those schemes are smooth qcqs over $X$ and carry the actual universal bundles. Their completed Whitney identity [F2] makes the difference zero. The faithful comparison in [F1] therefore proves the universal Cartan identity on this product stack, hence a homotopy of its classifying maps into the indicated Eilenberg target. [F1, F2]

2.1 These identities stabilize without a phantom ambiguity. For a fixed Chern weight $i$, [F1] expresses the relevant cohomology in universal variables with their Chern weights. A monomial of total weight $d>i$ has coefficient in weight $i-d<0$, which is zero in every cohomological degree. Thus both the degree-zero and degree-one homotopy groups of the relevant mapping-space systems stabilize once each rank is at least $i$; their potentially contributing variables have indices at most $i$. The Milnor $\lim^1$ of the degree-one groups is therefore zero. Applying the mapping-space inverse limit to the stabilized universal classes gives the identity on stable $BGL\times BGL$, not merely identities on its finite pieces. This uses all-degree negative-weight vanishing, not just vanishing of diagonal Chow groups. [F1, step 1.1]

3.1 The actual $C_i$ restrict along $j$ to those stable universal classes by their specified completion construction, and ignore the trivial-rank summand. Addition restricts to block sum by [F3]. Thus the Cartan difference on $\mathcal K\times\mathcal K$ pulls back to zero along $j\times j$. Apply map detection [F3] to conclude that it is zero as the claimed natural map. This identifies the homotopy class of the actual operations, not a new extension selected by equality on affine $K_0$. [F2, F3, step 2.1, A1]

4.1 Evaluate at $X$ and take $\pi_0$. The coefficientwise identities give $c_t^{\rm perf}(x+y)=c_t^{\rm perf}(x)c_t^{\rm perf}(y)$. The operations are pointed for $i>0$, so $c_t^{\rm perf}(0)=1$. The target is an abelian group: the coefficient first degrees are even, multiplication uses finite convolutions, and inverses are defined recursively. Naturality follows from that of the actual operations. This proves the formal total identity for arbitrary perfect classes. [F2, step 3.1] ∎
