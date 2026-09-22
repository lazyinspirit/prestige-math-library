---
id: thm-simple-roots-form-a-basis-and-every-root-has-one-sign-of-integral-coordinates
kind: theorem
title: Simple roots form a signed integral basis
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-positive-system-and-base-of-simple-roots, thm-rank-two-root-system-classification, def-reduced-crystallographic-euclidean-root-system]
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-22
sources:
  references:
    - title: "Anthony W. Knapp, Lie Groups Beyond an Introduction, 2nd ed., Chapter II"
      url: "https://www.math.stonybrook.edu/~aknapp/download/Beyond2-clickable.pdf"
      locator: "Chapter II, §5, Proposition 2.49 and Lemma 2.51, printed pp. 155-156"
landmark: true
proof_strategy: direct
---

## Statement

Let $\Phi\subseteq E$ be a reduced crystallographic root system with positive
system $\Phi^{+}$ and simple roots $\Delta\subseteq\Phi^{+}$
([[def-positive-system-and-base-of-simple-roots]]). Then $\Delta$ is a basis
of $E$; more precisely:
1. $\Delta$ is linearly independent and spans $E$, so $|\Delta|=\dim E$;
2. every positive root is a sum of simple roots with nonnegative integer
   coefficients, and every negative root is a sum of simple roots with
   nonpositive integer coefficients.

Consequently every root is a unique integral combination
$\sum_{\alpha\in\Delta}n_\alpha\alpha$ of the simple roots in which the nonzero
coefficients all have the same sign, positive for positive roots and negative
for negative roots.

## Facts & Assumptions

**Given:** A reduced crystallographic root system $\Phi\subseteq E$ with a regular vector $v\in E$, the positive system $\Phi^{+}=\{\alpha:(v,\alpha)>0\}$, and the set $\Delta$ of simple roots, a root being simple when it is not a sum of two positive roots.

[L1] $\Phi$ is finite, spans $E$, $0\notin\Phi$, $s_\alpha(\Phi)=\Phi$, all Cartan integers are integral, and $\mathbb R\alpha\cap\Phi=\{\pm\alpha\}$ ([[def-reduced-crystallographic-euclidean-root-system]]).

[L2] $\Phi^{+}=\{\alpha:(v,\alpha)>0\}$ and $\Phi^{-}=-\Phi^{+}$ are disjoint and cover $\Phi$; a positive root is simple when it is not a sum of two positive roots ([[def-positive-system-and-base-of-simple-roots]]).

[L3] If $\alpha,\beta$ are nonproportional roots with $(\alpha,\beta)>0$ then $\alpha-\beta\in\Phi$ ([[thm-rank-two-root-system-classification]]).

## Proof

**Proof technique:** direct.

1.1 Every positive root is a nonnegative integral sum of simple roots: if $\alpha\in\Phi^{+}$ is not simple, it is a sum $\alpha=\beta+\gamma$ of two positive roots, and $(v,\beta),(v,\gamma)$ are positive and add up to $(v,\alpha)$; iterating this decomposition and always choosing a summand that is not simple cannot continue forever, since the finitely many values $(v,\delta)$, $\delta\in\Phi^{+}$, strictly decrease along each branch, so the process terminates and exhibits $\alpha$ as a sum of simple roots. [L1, L2, algebra]

1.2 Distinct simple roots $\alpha,\beta$ satisfy $(\alpha,\beta)\le0$. Indeed, if $(\alpha,\beta)>0$ then $\alpha-\beta\in\Phi$ by [L3]; this root is positive or negative, and if it is positive then $\alpha=(\alpha-\beta)+\beta$ is a nontrivial sum of two positive roots, while if it is negative then $\beta=(\beta-\alpha)+\alpha$ is a nontrivial sum of two positive roots, contradicting the simplicity of $\alpha$ or of $\beta$. [L2, L3, algebra]

2.1 The simple roots are linearly independent. Suppose $\sum_{i\in I}c_i\alpha_i=\sum_{j\in J}c_j\alpha_j$ with disjoint nonempty index sets and all $c_i,c_j>0$; this is the shape of every nontrivial real linear relation, after moving negative coefficients to the other side. The common vector $\gamma=\sum_{i\in I}c_i\alpha_i$ is nonzero, so $(\gamma,\gamma)>0$; on the other hand, expanding one side against the other gives $(\gamma,\gamma)=\sum_{i\in I,j\in J}c_ic_j(\alpha_i,\alpha_j)\le0$, because $I\cap J=\varnothing$ and distinct simple roots have nonpositive inner product by step 1.2. This contradiction shows all coefficients vanish, so $\Delta$ is linearly independent. [L1, step 1.2, algebra]

3.1 The simple roots span $E$: every root is a simple-root combination by step 1.1 or its negative, and $\Phi$ spans $E$. Together with step 2.1 the set $\Delta$ is a basis of $E$, and with step 1.1 every root is an integral combination whose coefficients all have the sign of the root. Uniqueness of the coefficients is basis uniqueness, and no choice-theoretic input is used. [L1, step 1.1, step 2.1, algebra] ∎
