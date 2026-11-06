---
id: op-cft-nondegenerate-sewing-pairing-beyond-finite-rigidity
kind: open-problem
title: Nondegeneracy of the annular pairing beyond finite rigidity
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 0
domain: mathematics
library: mathematics
deps: []
dependency_roles: {}
justified_by: []
aliases: []
physical_scope: null
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
  sources_checked:
    date: 2026-10-26
    scope: Müller–Woike arXiv:2608.28579v2, Theorem 5.4, the finite-rigid discussion, and Remark 5.8.
    by: Direct full-text inspection of the pinned version; this records status review and not a solution.
sources:
  references:
    - title: "Lukas Müller and Lukas Woike, Modular Functors with Singularities from Vertex Operator Algebras Beyond Rigidity and Finiteness"
      url: https://arxiv.org/pdf/2608.28579v2
      locator: "§2.2, Definition 2.1, for cyclic categories of modules; §2.3, Definition 2.3 and Theorem 2.6, for Rep(V) and its pairing; §3.3 for the finite-rigid hypotheses; §5.2, Theorem 5.4, Corollary 5.7 and Remark 5.8 for the annular pairing and its status."
---

## Open problem

Fix a vertex operator algebra $V$ and a cyclic category $\mathcal T$ of its graded modules in the sense of Müller–Woike, §2.2, Definition 2.1: $\mathcal T$ is a full subcategory equipped with their nondegenerate pairing and coevaluation, associative unital promonoidal structure, braiding, balancing, and cyclicity isomorphism. Set $\operatorname{Rep}(V)=\operatorname{Lin}(\mathcal T^{\mathrm{op}},\mathrm{Vect})$, the source cocompletion of $\mathcal T$. Write $\int_{S^1}\operatorname{Rep}(V)$ for the source's shorthand for factorization homology of the framed $E_2$-category $\operatorname{Rep}(V)$ on the annular cylinder $S^1\times[0,1]$, defined as the homotopy colimit over oriented embeddings of finite disjoint unions of $2$-disks into that cylinder; the source identifies it with categorical Hochschild homology. Theorem 5.4 constructs an open-closed modular functor with singularities from this data. Evaluating it on an annulus with two parametrized boundary circles gives the symmetric pairing
$$\beta:\left(\int_{S^1}\operatorname{Rep}(V)\right)\boxtimes\left(\int_{S^1}\operatorname{Rep}(V)\right)\longrightarrow\mathrm{Vect}.$$


Put $\mathcal A=\int_{S^1}\operatorname{Rep}(V)$. The ambient symmetric monoidal bicategory is $\mathrm{Pr}^L_{\mathbb C}$ of locally presentable complex-linear categories, complex-linear functors preserving all small colimits, and natural transformations, as in the source's §2.1. Here locally presentable means cocomplete and generated under $\lambda$-filtered colimits by a set of $\lambda$-presentable objects for some regular cardinal $\lambda$; an object is $\lambda$-presentable when its hom functor preserves those colimits. The tensor product $\boxtimes$ is the Deligne–Kelly product, characterized by functors out of it preserving colimits corresponding to bilinear functors preserving colimits separately; its unit $\mathrm{Vect}$ is the category of all complex vector spaces. The pairing $\beta$ is **nondegenerate** precisely when there exists a colimit-preserving complex-linear coevaluation $\delta:\mathrm{Vect}\to\mathcal A\boxtimes\mathcal A$ with natural isomorphisms
$$(\mathrm{id}_{\mathcal A}\boxtimes\beta)\circ(\delta\boxtimes\mathrm{id}_{\mathcal A})\cong\mathrm{id}_{\mathcal A},\qquad(\beta\boxtimes\mathrm{id}_{\mathcal A})\circ(\mathrm{id}_{\mathcal A}\boxtimes\delta)\cong\mathrm{id}_{\mathcal A}.$$
Use the canonical tensor-unit and associativity identifications in these composites. Thus $\beta$ must exhibit $\mathcal A$ as its own dual; the existence of an unrelated copairing is insufficient.

In the source's **finite-rigid case**, $V\text{-}\mathrm{mod}$ is the category of strongly graded $V$-modules and is a finite tensor category: a finite $\mathbb C$-linear abelian category with finite-dimensional morphism spaces, finitely many simple isomorphism classes, enough projectives, finite length, a rigid monoidal product, and simple unit. The chosen rigid dual agrees with the VOA contragredient operation $X\mapsto X'$. Is $\beta$ nondegenerate when these finite-rigid hypotheses do not hold?

## Status

As of 2026-10-26, Müller–Woike, Remark 5.8, state that the annular pairing is nondegenerate in the finite-rigid case and that its nondegeneracy beyond that case is not known. Their Theorem 5.4 constructs the modular functor with singularities under its stated cyclic-category hypothesis. The construction supplies a symmetric copairing $\Delta^\circ$ for the modular functor, but Remark 5.8 cautions that it is generally not a copairing for $\beta$, even when $\beta$ is nondegenerate; its existence therefore does not settle the question. No answer is claimed here, and this item is not a premise of another result.
