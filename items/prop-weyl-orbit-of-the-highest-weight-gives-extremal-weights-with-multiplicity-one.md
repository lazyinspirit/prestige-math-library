---
id: prop-weyl-orbit-of-the-highest-weight-gives-extremal-weights-with-multiplicity-one
kind: proposition
title: Extremal Weyl-orbit weights
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [thm-highest-weight-classification-of-finite-dimensional-irreducible-representations, prop-the-highest-weight-space-of-an-irreducible-module-is-one-dimensional, lem-highest-weight-modules-have-weights-below-the-top-weight, lem-simple-reflections-preserve-weight-multiplicities, def-open-and-closed-weyl-chambers, thm-the-weyl-group-acts-simply-transitively-on-weyl-chambers, def-weyl-group-of-a-root-system, def-partial-order-on-weights, thm-simple-roots-form-a-basis-and-every-root-has-one-sign-of-integral-coordinates, def-weight-and-weight-space-of-a-lie-algebra-representation, def-axiom-of-choice]
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Anthony W. Knapp, Lie Groups Beyond an Introduction, 2nd ed."
      url: "https://www.math.stonybrook.edu/~aknapp/download/Beyond2-clickable.pdf"
      locator: "Theorem 5.5(d)–(e) and remarks"
    - title: "Alexander Kirillov Jr., An Introduction to Lie Groups and Lie Algebras"
      url: "https://www.math.stonybrook.edu/~kirillov/liegroups/liegroups.pdf"
      locator: "§8.2"
proof_strategy: direct
---

## Statement

Assume the Axiom of Choice. Let $\mathfrak g$ be a finite-dimensional complex
semisimple Lie algebra with Cartan subalgebra $\mathfrak h$ and a fixed
positive system with Weyl group $W$ and fundamental chamber $C$
([[def-open-and-closed-weyl-chambers]],
[[thm-the-weyl-group-acts-simply-transitively-on-weyl-chambers]]),
let $\lambda$ be dominant integral, and let $V(\lambda)$ be the
finite-dimensional irreducible module of highest weight $\lambda$. Then for
every $w\in W$ the weight $w(\lambda)$ occurs in $V(\lambda)$ with multiplicity
one,
$$\dim V(\lambda)_{w(\lambda)}=1 ,$$
and $w(\lambda)$ is extremal in the chamber $w(C)$, in the following sense:
every weight $\mu$ of $V(\lambda)$ satisfies $w^{-1}(\mu)\le\lambda$ in the root
order, equivalently $w(\lambda)-\mu$ is a nonnegative integral combination of
the positive roots of the positive system defined by the chamber $w(C)$.

## Facts & Assumptions

**Given:** The Axiom of Choice, such $\mathfrak g,\mathfrak h$, a fixed positive system with Weyl group $W$ and fundamental chamber $C$, a dominant integral $\lambda$, and the module $V(\lambda)$.

[A1] The Axiom of Choice is assumed; it enters through the root-space theory used by the cited suppliers ([[def-axiom-of-choice]]).

[L1] $V(\lambda)$ is a finite-dimensional irreducible highest weight module of highest weight $\lambda$; its $\lambda$-weight space is one-dimensional and every weight $\mu$ of $V(\lambda)$ satisfies $\mu\le\lambda$, that is, $\lambda-\mu$ is a nonnegative integral combination of the simple roots ([[thm-highest-weight-classification-of-finite-dimensional-irreducible-representations]], [[prop-the-highest-weight-space-of-an-irreducible-module-is-one-dimensional]], [[lem-highest-weight-modules-have-weights-below-the-top-weight]], [[def-partial-order-on-weights]]).

[L2] Weight multiplicities of $V(\lambda)$ are invariant under $W$: $\dim V(\lambda)_{w\mu}=\dim V(\lambda)_\mu$ for all $w\in W$ and all $\mu$, so the weight set is $W$-invariant ([[lem-simple-reflections-preserve-weight-multiplicities]]).

[L3] The chambers of $\Phi$ are the connected components of the complement of the root hyperplanes; the fundamental chamber is $C=\{x:(x,\alpha_i)>0\}$, the Weyl group permutes the chambers, and $W$ acts simply transitively on them; the set of positive roots attached to $w(C)$ is $w(\Phi^+)$, and the associated positive cone is $w(Q_+)$ ([[def-open-and-closed-weyl-chambers]], [[thm-the-weyl-group-acts-simply-transitively-on-weyl-chambers]], [[thm-simple-roots-form-a-basis-and-every-root-has-one-sign-of-integral-coordinates]], [[def-weyl-group-of-a-root-system]]).

## Proof

**Proof technique:** direct.

1.1 Fix $w\in W$; since $\lambda$ is a weight of $V(\lambda)$ by [L1] and the weight set is $W$-invariant by [L2], the functional $w(\lambda)$ is a weight of $V(\lambda)$, and its multiplicity satisfies $\dim V(\lambda)_{w(\lambda)}=\dim V(\lambda)_\lambda=1$ by [L2] and [L1]. [A1, L1, L2]

1.2 Let $\mu$ be a weight of $V(\lambda)$; then $w^{-1}(\mu)$ is a weight by [L2], so $w^{-1}(\mu)\le\lambda$ by [L1], that is, $\lambda-w^{-1}(\mu)\in Q_+$. [L1, L2]

2.1 Applying the linear map $w$ to the relation of step 1.2 gives $w(\lambda)-\mu\in w(Q_+)$, which is exactly the statement that $w(\lambda)-\mu$ is a nonnegative integral combination of the roots in the positive system $w(\Phi^+)$ attached to the chamber $w(C)$ by [L3]; hence $w(\lambda)$ is extremal in that chamber. [L3, step 1.2]

3.1 Steps 1.1 and 3.1 prove the multiplicity-one and extremality assertions for every $w\in W$. [step 1.1, step 2.1] ∎
