---
id: prop-the-lie-algebra-of-a-lie-subgroup-is-a-lie-subalgebra
kind: proposition
title: The Lie algebra of a Lie subgroup is a Lie subalgebra
status: published
origin: pipeline
deps: [def-countable-choice, def-immersed-embedded-and-closed-lie-subgroup, thm-differential-of-a-lie-group-homomorphism-is-a-lie-algebra-homomorphism, def-lie-subalgebra-and-ideal]
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: John M. Lee, Introduction to Smooth Manifolds, 2nd ed.
      url: https://julianchaidez.net/materials/reu/lee_smooth_manifolds.pdf
      locator: Definition 19.25 and the paragraph following it, printed page 506
    - title: Alexander Kirillov Jr., An Introduction to Lie Groups and Lie Algebras
      url: https://www.math.stonybrook.edu/~kirillov/liegroups/liegroups.pdf
      locator: Proposition 3.12(1), printed page 32
verification:
  audited: 2026-09-14
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
proof_strategy: direct
---

## Statement

Assume $\mathrm{AC}_\omega$. If $i:H\to G$ is a Lie-subgroup inclusion,
then

$$di_e:\operatorname{Lie}(H)=T_eH\longrightarrow\operatorname{Lie}(G)=T_eG$$

is injective and identifies $\operatorname{Lie}(H)$ with the Lie subalgebra
$di_e(T_eH)$ of $\operatorname{Lie}(G)$.

## Facts & Assumptions

**Given:** $\mathrm{AC}_\omega$, a finite-dimensional real Lie group $G$, and a Lie subgroup $i:H\to G$.

[F1] A Lie-subgroup inclusion is an injective immersion and a smooth Lie-group homomorphism. [[def-immersed-embedded-and-closed-lie-subgroup]].

[F2] The differential of an immersion is injective at every point. [[def-immersed-embedded-and-closed-lie-subgroup]].

[F3] Under $\mathrm{AC}_\omega$, the identity differential of a smooth Lie-group homomorphism is linear and bracket preserving. [[def-countable-choice]], [[thm-differential-of-a-lie-group-homomorphism-is-a-lie-algebra-homomorphism]].

[F4] A Lie subalgebra is a linear subspace closed under the ambient bracket. [[def-lie-subalgebra-and-ideal]].

## Proof

**Proof technique:** identify the tangent algebra with the image of the identity differential.

1.1 Since $i$ is an immersion by [F1], its differential $di_e:T_eH\to T_eG$ is injective by [F2]. It is therefore a linear isomorphism from $T_eH$ onto the linear subspace $\mathfrak h:=di_e(T_eH)\subseteq T_eG$. [F1, F2, algebra]

2.1 Because $i$ is also a smooth Lie-group homomorphism, [F3] gives $$di_e([X,Y]_H)=[di_eX,di_eY]_G$$ for all $X,Y\in T_eH$. Hence the bracket of any two vectors in $\mathfrak h$ again lies in $\mathfrak h$. [F1, F3, step 1.1]

3.1 Thus $\mathfrak h$ is a bracket-closed linear subspace of $T_eG$ and so is a Lie subalgebra by [F4]. Step 1.1 identifies $\operatorname{Lie}(H)$ with it, and step 2.1 shows that this identification respects Lie brackets. This includes the zero-dimensional and full-dimensional cases. The only choice used is the stated $\mathrm{AC}_\omega$ inherited by [F3]. [F3, F4, step 1.1, step 2.1] ∎
