---
id: cor-injectives-have-costandard-filtrations
kind: corollary
title: Injectives have costandard filtrations
status: draft
origin: pipeline
deps:
- def-axiom-of-choice
- def-injective-object
- def-standard-and-costandard-objects-in-category-o
- def-verma-flag-and-its-multiplicities
- lem-finite-length-objects-decompose-into-indecomposables
- prop-projective-covers-in-o-are-indecomposable-and-unique
- prop-restricted-duality-is-an-exact-involution-on-category-o
- thm-bgg-reciprocity
- thm-projectives-in-category-o-have-verma-flags
- thm-category-o-is-abelian-and-extension-closed
- thm-every-category-o-object-has-finite-length
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
  - title: Lin Chen, lecture notes (Spring 2024), Lecture 9, Theorem-Definition 1.2, Theorem 1.4
      and Theorem 2.2
    url: https://windshower.github.io/linchen/teaching/s2024/lecture9.pdf
    locator: §1, Theorem-Definition 1.2 and Theorem 1.4, printed pp. 1-3; §2, Theorem 2.2, printed
      p. 4 (full text read at harvest)
  - title: Pavel Etingof, Representations of Lie Groups (18.757, Fall 2023), Sec. 20.1-20.2
    url: https://ocw.mit.edu/courses/18-757-representations-of-lie-groups-fall-2023/mit18_757_f23_lec_full.pdf
    locator: §20.2, Corollary 20.5(ii), printed p. 102; §20.4, Proposition 20.9 and Corollary 20.10,
      printed p. 103 (restricted duality and injectives).
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). For every weight
$\lambda$ the restricted dual $I(\lambda)=D(P(\lambda))$ of the projective
cover is an injective object of $\mathcal O$
([[def-injective-object]]) and has a finite costandard ($\nabla$-)flag, with
multiplicities
$$(I(\lambda):\nabla(\mu))=(P(\lambda):\Delta(\mu))=[\Delta(\mu):L(\lambda)]$$
in the sense of [[def-verma-flag-and-its-multiplicities]] and
[[thm-bgg-reciprocity]]; the functor $D$ exchanges Verma flags of projectives
with costandard flags of injectives. Every injective object of $\mathcal O$
has a finite costandard flag: it is a finite direct sum of indecomposable
injectives, and $D$ induces a bijection between the indecomposable projectives
and the indecomposable injectives of $\mathcal O$
([[prop-restricted-duality-is-an-exact-involution-on-category-o]]); each
indecomposable injective is the dual of an indecomposable projective and hence
of the form $I(\lambda)$.

## Facts & Assumptions

**Given:** The Axiom of Choice, weights $\lambda,\mu$, the Verma-filtered projective cover $P(\lambda)$, and the exact contravariant involution $D$ of restricted duality with $D(\Delta(\mu))=\nabla(\mu)$ and $D(\nabla(\mu))=\Delta(\mu)$.

[F1] $D$ is an exact contravariant involution of $\mathcal O$, hence carries projectives to injectives and injectives to projectives, preserves finite direct sums, finite length and multiplicities, and maps a flag of $Y$ to a flag of $D(Y)$ with the dual factors: the exact sequences $0\to X_{i-1}\to X_i\to X_i/X_{i-1}\to0$ become $0\to D(X_i/X_{i-1})\to D(X_i)\to D(X_{i-1})\to0$ ([[prop-restricted-duality-is-an-exact-involution-on-category-o]], [[def-standard-and-costandard-objects-in-category-o]]).

[F2] $P(\lambda)$ has a finite Verma flag with multiplicities $(P(\lambda):\Delta(\mu))=[\Delta(\mu):L(\lambda)]$, and every indecomposable projective is a projective cover of its simple head ([[thm-projectives-in-category-o-have-verma-flags]], [[thm-bgg-reciprocity]], [[prop-projective-covers-in-o-are-indecomposable-and-unique]]).

[F3] The category $\mathcal O$ is abelian, and every object has finite length ([[thm-category-o-is-abelian-and-extension-closed]], [[thm-every-category-o-object-has-finite-length]]). These hypotheses allow [[lem-finite-length-objects-decompose-into-indecomposables]] to be applied: every object is a finite direct sum of indecomposable objects, including the empty sum for zero.

## Proof

**Proof technique:** direct: dualize a Verma flag of a projective and decompose a general injective into duals of indecomposable projectives.

1.1 $D(P(\lambda))$ is injective by [F1]. If $0=X_0\subseteq X_1\subseteq\cdots\subseteq X_n=P(\lambda)$ is a Verma flag with factors $\Delta(\mu_i)=X_i/X_{i-1}$, then applying the exact contravariant functor $D$ to the defining sequences $0\to X_{i-1}\to X_i\to\Delta(\mu_i)\to0$ gives exact sequences $0\to\nabla(\mu_i)\to D(X_i)\to D(X_{i-1})\to0$; by induction on $i$, a finite costandard flag of $D(X_{i-1})$ concatenated with the subobject $\nabla(\mu_i)$ gives a finite costandard flag of $D(X_i)$, because extensions of objects with finite costandard flags again have finite costandard flags. For $i=n$ this gives a finite costandard flag of $I(\lambda)=D(P(\lambda))$ with the factors $\nabla(\mu_i)$, hence $(I(\lambda):\nabla(\mu))=(P(\lambda):\Delta(\mu))=[\Delta(\mu):L(\lambda)]$ by [F2]. [F1, F2, given]

1.2 Let $I\in\mathcal O$ be injective. By [F3] it has finite length and $I=I_1\oplus\cdots\oplus I_n$ with each $I_j$ indecomposable. Applying the exact contravariant involution $D$ gives $D(I)=\bigoplus_jD(I_j)$ with each $D(I_j)$ an indecomposable projective: $D$ is an equivalence, so it preserves indecomposability and exchanges projectives with injectives. Each $D(I_j)$ is therefore a projective cover of its simple head $L(\mu_j)$ by [F2], hence $D(I_j)\cong P(\mu_j)$ by uniqueness of projective covers and $I_j\cong D(D(I_j))\cong D(P(\mu_j))=I(\mu_j)$. [F1, F2, F3]

2.1 By step 1.1 each $I(\mu_j)$ has a finite costandard flag, and a finite direct sum of objects with finite costandard flags again has one, by concatenating flags along the summands; hence every injective object $I\cong\bigoplus_jI(\mu_j)$ has a finite costandard flag, and the bijection between indecomposable projectives and indecomposable injectives is induced by $D$. [step 1.1, step 1.2] ∎
