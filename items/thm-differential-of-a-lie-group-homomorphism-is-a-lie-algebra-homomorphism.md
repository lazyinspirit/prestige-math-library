---
id: thm-differential-of-a-lie-group-homomorphism-is-a-lie-algebra-homomorphism
kind: theorem
title: Differential of a Lie-group homomorphism is a Lie-algebra homomorphism
status: published
origin: pipeline
deps: ["def-countable-choice", "def-lie-algebra-homomorphism", "def-lie-group-homomorphism-isomorphism-and-automorphism", "prop-related-vector-fields-have-related-lie-brackets", "thm-left-invariant-vector-fields-evaluate-isomorphically-at-the-identity", "def-lie-bracket-on-the-tangent-space-of-a-lie-group", "lem-the-differential-sends-derivations-to-derivations-and-is-linear", "thm-chain-rule-for-differentials-of-smooth-maps"]
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: Alexander Kirillov Jr., An Introduction to Lie Groups and Lie Algebras
      url: https://www.math.stonybrook.edu/~kirillov/liegroups/liegroups.pdf
      locator: Proposition 3.12(1), statement and proof, printed page 32; the authored proof uses related invariant fields to avoid the source proof's forward reference to exponential naturality
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

Assume $\mathrm{AC}_\omega$. Let $F:G\to H$ be a homomorphism of
finite-dimensional real Lie groups, with Lie algebras
$\mathfrak g=T_eG$ and $\mathfrak h=T_{e_H}H$. Then

$$dF_e:\mathfrak g\longrightarrow\mathfrak h$$

is a Lie-algebra homomorphism. The countable-choice assumption is used exactly
through the supplied smooth invariant-field and tangent-bracket results.

## Facts & Assumptions

**Given:** $\mathrm{AC}_\omega$, finite-dimensional real Lie groups $G,H$,
and a Lie-group homomorphism $F:G\to H$.

[F1] $\mathrm{AC}_\omega$ is countable choice. [[def-countable-choice]].

[F2] A Lie-algebra homomorphism is a linear map preserving brackets.
[[def-lie-algebra-homomorphism]].

[F3] The map $F$ is smooth, preserves identities, and satisfies
$F(gh)=F(g)F(h)$.
[[def-lie-group-homomorphism-isomorphism-and-automorphism]].

[F4] Pairs of related smooth vector fields have related brackets.
[[prop-related-vector-fields-have-related-lie-brackets]].

[F5] Assuming $\mathrm{AC}_\omega$, each tangent vector has a unique
left-invariant smooth extension $X^L_g=d(L_g)_eX$.
[[thm-left-invariant-vector-fields-evaluate-isomorphically-at-the-identity]].

[F6] The tangent bracket is characterized by
$[X^L,Y^L]=[X,Y]_{\mathfrak g}^L$, and similarly for $\mathfrak h$.
[[def-lie-bracket-on-the-tangent-space-of-a-lie-group]].

[F7] The differential of a smooth map at a point is linear.
[[lem-the-differential-sends-derivations-to-derivations-and-is-linear]].

[F8] Differentials of smooth maps obey the chain rule.
[[thm-chain-rule-for-differentials-of-smooth-maps]].

## Proof

**Proof technique:** direct.

1.1 Fix $X\in\mathfrak g$. By [F5], $X$ and $dF_eX$ have left-invariant extensions $X^L$ on $G$ and $(dF_eX)^L$ on $H$. For every $g\in G$, the homomorphism law [F3] gives $F\circ L_g=L_{F(g)}\circ F$. Therefore [F8] gives $$dF_g(X^L_g)=dF_gd(L_g)_eX=d(L_{F(g)})_{e_H}dF_eX=(dF_eX)^L_{F(g)}.$$ Thus $X^L$ and $(dF_eX)^L$ are $F$-related. [F3, F5, F8, algebra]

2.1 Apply [F4] to the related pairs from step 1.1 for $X$ and $Y$. Then $[X^L,Y^L]$ is $F$-related to $[(dF_eX)^L,(dF_eY)^L]$. Evaluating relatedness at $e$ and using [F6] on both groups yields $$dF_e([X,Y]_{\mathfrak g})=[dF_eX,dF_eY]_{\mathfrak h}.$$ [F4, F5, F6, step 1.1]

3.1 By [F7], $dF_e$ is linear, and step 2.1 proves bracket preservation. Hence $dF_e$ is a Lie-algebra homomorphism by [F2]. [F2, F6, F7, step 2.1]

4.1 Lie groups are nonempty and boundaryless. If either Lie algebra is zero-dimensional, the same related-field calculation applies and all relevant source vectors or target values are zero; in dimension one the proof is unchanged. No metric, nondegeneracy, interval, or endpoint occurs. The only choice use is the stated $\mathrm{AC}_\omega$, inherited through [F5] and [F6]; fixing two tangent vectors adds no choice. No biconditional is asserted. [F1, F2, F3, F4, F5, F6, F7, F8, step 1.1, step 2.1, step 3.1] ∎
