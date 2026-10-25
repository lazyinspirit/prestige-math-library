---
id: lem-separation-of-disjoint-closed-invariant-subsets-by-an-invariant
kind: lemma
title: Invariants separate a stable point from a disjoint closed invariant subset
status: published
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 7
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
deps: [thm-invariant-ring-finite-generation-and-affine-categorical-quotient, def-rational-action-on-affine-variety, thm-classical-affine-nullstellensatz-correspondence, def-axiom-of-choice]
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "Michel Brion, Introduction to actions of algebraic groups, Les cours du CIRM 1 (2010), no. 1, 1-22"
      url: "https://ccirm.centre-mersenne.org/item/10.5802/ccirm.1.pdf"
---

## Statement

Assume the Axiom of Choice inherited from the named suppliers. Let $G$ be a
complex reductive affine algebraic group acting algebraically on an affine
algebraic set $X$, with categorical quotient
$\pi:X\to X/\!/G$
([[thm-invariant-ring-finite-generation-and-affine-categorical-quotient]]).
Let $Z\subseteq X$ be closed and $G$-stable, and let $x\in X$ with
$\pi(x)\notin\pi(Z)$. Then there exists $f\in\mathbb C[X]^G$ with $f(x)\neq0$
and $f|_Z=0$.

## Facts & Assumptions

**Given:** AC; a complex reductive affine algebraic group $G$ acting on an
affine algebraic set $X$; the categorical quotient $\pi:X\to X/\!/G$; a closed
$G$-stable subset $Z\subseteq X$ and a point $x\in X$ with
$\pi(x)\notin\pi(Z)$.

[F1] *Closed images of closed invariant subsets.* For every closed $G$-stable
subset $Y\subseteq X$ the morphism $Y/\!/G\to X/\!/G$ is a closed immersion,
and for closed $G$-stable $Y,Y'\subseteq X$ one has
$\pi(Y\cap Y')=\pi(Y)\cap\pi(Y')$
([[thm-invariant-ring-finite-generation-and-affine-categorical-quotient]],
clause (iv)).

[F2] *Separation by regular functions.* In an affine algebraic set, a point
outside a closed subset is separated from it by a regular function: if $q$ is a
maximal ideal of a coordinate ring $A$ and $C\subseteq\operatorname{Spec}A$ is
the closed set of a radical ideal $\mathfrak a\not\subseteq q$, then there is
$g\in\mathfrak a$ with $g(q)\neq0$
([[thm-classical-affine-nullstellensatz-correspondence]]).

## Proof

**Proof technique:** direct.

1.1 The image $\pi(Z)$ is closed in $X/\!/G$: since $Z$ is closed and $G$-stable, [F1] makes $Z/\!/G\to X/\!/G$ a closed immersion; its image is $\pi(Z)$, because $\pi|_Z$ is surjective onto $Z/\!/G$ by the quotient theorem and the underlying set of the closed immersion is that image. [F1]

2.1 By hypothesis $\pi(x)\notin\pi(Z)$, so in the affine algebraic set $X/\!/G$ the point $\pi(x)$, viewed as the maximal ideal $\mathfrak m_{\pi(x)}$ of $\mathbb C[X/\!/G]=\mathbb C[X]^G$, does not contain the radical ideal $\mathfrak a$ of the closed set $\pi(Z)$; by [F2] there is $\bar f\in\mathfrak a\subseteq\mathbb C[X]^G$ with $\bar f(\pi(x))\neq0$ and $\bar f|_{\pi(Z)}=0$. [F2, step 1.1]

3.1 Put $f=\pi^*(\bar f)=\bar f\circ\pi\in\mathbb C[X]^G$. Then $f(x)=\bar f(\pi(x))\neq0$, and for $z\in Z$ one has $f(z)=\bar f(\pi(z))=0$ because $\pi(z)\in\pi(Z)$; hence $f|_Z=0$. This is the required invariant. [step 2.1] ∎

## Remarks

- This is the first step of Brion's proof of Proposition 1.26 (printed
  pp. 9-10): the closedness of $\pi(Z)$ is clause (iv) of the affine quotient
  theorem, and the separating function is produced on the quotient and pulled
  back along $\pi$.
- AC is inherited from the quotient and Nullstellensatz suppliers; the pullback
  construction itself is choice-free.
