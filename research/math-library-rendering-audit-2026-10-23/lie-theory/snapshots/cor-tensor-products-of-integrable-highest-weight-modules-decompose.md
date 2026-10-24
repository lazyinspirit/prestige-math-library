---
id: cor-tensor-products-of-integrable-highest-weight-modules-decompose
kind: corollary
title: Tensor products of integrable highest weight modules decompose
status: published
origin: pipeline
deps: [thm-complete-reducibility-of-integrable-kac-moody-o-modules, thm-integrability-criterion-for-simple-highest-weight-kac-moody-modules, thm-universal-property-and-pbw-character-of-kac-moody-verma-modules, def-axiom-of-choice, def-kac-moody-category-o]
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: 2026-09-12
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  references:
    - title: Kleshchev, Lectures on Infinite Dimensional Lie Algebras
      url: https://darkwing.uoregon.edu/~klesh/teaching/IDLALN3.pdf
    - title: Perrin, Introduction to Kac-Moody Groups and Lie Algebras
      url: https://lmv.math.cnrs.fr/wp-content/uploads/2019/09/km-suite.pdf
proof_strategy: direct
---

## Statement

Assume AC, let $A$ be a finite symmetrizable GCM, and let $\lambda,\mu\in P^+$. Then $L_A(\lambda)\otimes_{\mathbb C}L_A(\mu)$ with the diagonal action is integrable and belongs to $\mathcal O$. It is an algebraic direct sum of dominant highest-weight simples, each with finite multiplicity; every weight space is finite dimensional. AC is inherited only through the complete-reducibility decomposition.

## Facts & Assumptions

**Given:** AC and the stated symmetrizable GCM and dominant weights. Put $V=L_A(\lambda)$ and $W=L_A(\mu)$.

[F1] Under AC an integrable $\mathcal O$ module is a direct sum of dominant highest-weight simples ([[thm-complete-reducibility-of-integrable-kac-moody-o-modules]]).

[F2] The two simple highest-weight modules are integrable ([[thm-integrability-criterion-for-simple-highest-weight-kac-moody-modules]]).

[F3] Their Verma modules have finite-dimensional weight spaces, one-dimensional tops and support in the respective downward cones, and map onto the simple modules ([[thm-universal-property-and-pbw-character-of-kac-moody-verma-modules]]).

[F4] The assumed choice axiom is [[def-axiom-of-choice]].

[F5] Quotients inherit weight spaces and category-$\mathcal O$ bounds ([[def-kac-moody-category-o]]).

## Proof

1.1 Define $x(v\otimes w)=xv\otimes w+v\otimes xw$. This is balanced and linear in both tensor factors. Expanding the commutator of $x\otimes1+1\otimes x$ and $y\otimes1+1\otimes y$, the two mixed terms cancel because they act on different factors, leaving $[x,y]\otimes1+1\otimes[x,y]$. Hence this is a Lie representation. For a fixed simple generator $x=e_i$ or $f_i$, choose $p,q\geq1$ killing the fixed vectors $v,w$ under its powers, using F2. The two factor operators commute. In their $(p+q-1)$st binomial power, each term kills $v\otimes w$: its first exponent is at least $p$ or its second is at least $q$. A maximum over finitely many elementary tensors proves local nilpotence on every tensor vector. [F2, given]

1.2 The tensor weight decomposition is the algebraic direct sum of $V_\eta\otimes W_\theta$ grouped by $\eta+\theta$: every tensor is a finite sum of weight tensors, and the component maps induced by the factor projections prove directness before grouping. For $\nu=\lambda+\mu-\beta$, contributions have $\eta=\lambda-\beta_1$, $\theta=\mu-\beta_2$, with $\beta_1+\beta_2=\beta$ in $Q^+$. If $\beta=\sum b_i\alpha_i$, there are at most $\prod_i(b_i+1)$ such pairs, since each coefficient of $\beta_1$ lies between $0$ and $b_i$. By F3 and F5 each factor space is finite dimensional, so the finite sum of their tensor spaces is finite dimensional. Outside $(\lambda+\mu)-Q^+$ there are no contributions. Thus the tensor module belongs to $\mathcal O$ by F5. [F3, F5, given]

2.1 Steps 1.1 and 1.2 give integrability and $\mathcal O$ membership. Apply F1 under the declared F4 assumption. Each copy of $L_A(\nu)$ in its direct sum has one nonzero top vector at weight $\nu$ by F3 and F5. In an internal direct sum these top lines are linearly independent. Their number is bounded by the finite dimension of the tensor weight space from 1.2: more than that many lines would supply a finite independent set larger than its dimension. Hence every simple has finite multiplicity. This is a finiteness assertion, not a closed tensor multiplicity formula. [F1, F3, F4, F5, step 1.1, step 1.2]

3.1 At $\beta=0$ the only split is $(0,0)$, so the tensor top space is one dimensional. If a generator already kills either tensor factor, the bound in 1.1 remains valid with the corresponding exponent one. A zero factor would give the empty decomposition by the same argument, although the specified simple factors are nonzero. Zero dominant labels require no change. The nilpotence and weight-space calculations use only finite sums and finite bounds; AC is used precisely in invoking F1 for the decomposition. [F1, F3, F4, step 1.1, step 1.2, step 2.1] ∎
