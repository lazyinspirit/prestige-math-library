---
id: prop-universal-central-extension-group-is-superperfect
kind: proposition
title: "Universal central extension groups are superperfect"
status: published
origin: pipeline
deps: [def-superperfect-group, thm-free-presentation-construction-has-the-universal-property, cor-kernel-of-the-universal-central-extension-is-the-schur-multiplier]
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
  audited: 2026-09-06
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
---

## Statement

The total group of a universal central extension is superperfect.

## Facts & Assumptions

**Given:** Let $u:U\to G$ be a universal central extension.

## Proof

**Proof technique:** direct.

1.1 For an abelian group $A$ and a homomorphism $\phi:U\to A$, the maps $x\mapsto(u(x),0)$ and $x\mapsto(u(x),\phi(x))$ from $U$ to the split central extension $G\times A\to G$ are both over $G$.  Universality makes them equal, so every such $\phi$ vanishes.  Taking $A=U_{\mathrm{ab}}$ shows that $U$ is perfect. [given, algebra]

2.1 Let $e:E\twoheadrightarrow U$ be any central extension.  The composite $[E,E]\to U\to G$ is surjective because $e([E,E])=[U,U]=U$.  If $x\in[E,E]$ maps to $1$ in $G$, then $e(x)\in\ker u\subseteq Z(U)$, whence $[x,E]\subseteq\ker e\subseteq Z(E)$ and therefore $[x,[E,E]]=1$.  Thus $[E,E]\to G$ is a central extension. [step 1.1, algebra]

3.1 Universality of $u$ gives a map $s:U\to[E,E]$ over $G$.  Both $e\circ s$ and $\operatorname{id}_U$ are maps from $U$ to the central extension $u:U\to G$ over $G$, so uniqueness gives $e\circ s=\operatorname{id}_U$. Consequently every central extension of $U$ splits. [step 2.1, algebra]

4.1 Since $U$ is perfect, the free-presentation theorem gives a universal central extension $v:V\to U$, with kernel $M(U)$ by [[cor-kernel-of-the-universal-central-extension-is-the-schur-multiplier]]. Step 3.1 splits it, so $V\cong M(U)\times U$.  The argument of step 1.1, applied to $v$, also makes $V$ perfect.  Abelianizing the displayed product therefore gives $M(U)=0$.  Hence $H_1(U;\mathbb Z)=H_2(U;\mathbb Z)=0$, and [[def-superperfect-group]] makes $U$ superperfect. [step 1.1, step 3.1, algebra] ∎
