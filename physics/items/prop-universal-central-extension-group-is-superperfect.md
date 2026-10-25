---
id: prop-universal-central-extension-group-is-superperfect
kind: proposition
title: "Universal central extension groups are superperfect"
status: published
origin: pipeline
deps: [def-superperfect-group, thm-free-presentation-construction-has-the-universal-property, cor-kernel-of-the-universal-central-extension-is-the-schur-multiplier, def-axiom-of-choice, def-supplied-projective-resolution-datum]
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  scraped: []
  references:
    - title: "Charles A. Weibel, An Introduction to Homological Algebra, Chapter 6, §6.9: Universal Central Extensions"
      url: https://math.mit.edu/~hrm/palestine/weibel/06-group_homology_and_cohomology.pdf
proof_strategy: direct
verification:
  precheck: pass
  verified:
    model: gpt-6-sol
    verdict: locally-reviewed
    date: '2026-09-24'
    scope: Bounded mathematical repair review recorded in /home/lazyinspirit/Projects/prestige-math-library/research/ap-131-sol-repair/agent-05-receipts.jsonl.
      Local checks and any separate second-reader evidence are recorded in the run
      report; this is not an independent judge verdict or whole-library certification.
    delegated_by: user
---

## Statement

Assume the Axiom of Choice and supplied projective-resolution data for group
homology. The total group of a universal central extension is superperfect.

## Facts & Assumptions

**Given:** The stated choice and resolution hypotheses and a universal
central extension $u:U\to G$. Choice supplies a free presentation of $U$
and the simultaneous lifts used by the free-presentation universal-extension
theorem; it also implies the dependent-choice premise of the kernel
identification.

## Proof

**Proof technique:** direct.

1.1 For an abelian group $A$ and a homomorphism $\phi:U\to A$, the maps $x\mapsto(u(x),0)$ and $x\mapsto(u(x),\phi(x))$ from $U$ to the split central extension $G\times A\to G$ are both over $G$.  Universality makes them equal, so every such $\phi$ vanishes.  Taking $A=U_{\mathrm{ab}}$ shows that $U$ is perfect. [given, algebra]

2.1 Let $e:E\twoheadrightarrow U$ be any central extension.  The composite $[E,E]\to U\to G$ is surjective because $e([E,E])=[U,U]=U$.  If $x\in[E,E]$ maps to $1$ in $G$, then $e(x)\in\ker u\subseteq Z(U)$, whence $[x,E]\subseteq\ker e\subseteq Z(E)$ and therefore $[x,[E,E]]=1$.  Thus $[E,E]\to G$ is a central extension. [step 1.1, algebra]

3.1 Universality of $u$ gives a map $s:U\to[E,E]$ over $G$.  Both $e\circ s$ and $\operatorname{id}_U$ are maps from $U$ to the central extension $u:U\to G$ over $G$, so uniqueness gives $e\circ s=\operatorname{id}_U$. Consequently every central extension of $U$ splits. [step 2.1, algebra]

4.1 Since $U$ is perfect, the free-presentation theorem under Choice gives a universal central extension $v:V\to U$. Under the resolution hypotheses, its kernel is $M(U)$ by [[cor-kernel-of-the-universal-central-extension-is-the-schur-multiplier]]. Step 3.1 gives a homomorphic section, so centrality yields $V\cong M(U)\times U$. The argument of step 1.1 applied to $v$ makes $V$ perfect. Abelianizing this product gives $M(U)=0$. Also $U_{\mathrm{ab}}=0$ by step 1.1, so $H_1(U;\mathbb Z)=H_2(U;\mathbb Z)=0$ and $U$ is superperfect. [step 1.1, step 3.1, algebra] ∎
