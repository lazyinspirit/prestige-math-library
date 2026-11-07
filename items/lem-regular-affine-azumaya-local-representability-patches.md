---
id: lem-regular-affine-azumaya-local-representability-patches
kind: lemma
title: "Local Azumaya representability patches on regular affine algebras"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 11
deps:
  - def-axiom-of-choice
  - def-azumaya-algebra-on-a-variety
  - lem-azumaya-stable-equivalence-detected-by-cohomological-class
  - lem-large-projective-modules-extend-across-regular-principal-localizations
  - lem-regular-integral-etale-gm-h2-injects-into-function-field
  - lem-faithfully-flat-effective-descent-of-modules-and-algebras
justified_by: []
proof_strategy: direct
axiom_use: "AC is assumed for the stable-equivalence, projective-extension and generic-injectivity suppliers."
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Raymond T. Hoobler, A cohomological interpretation of Brauer groups of rings"
      url: "https://msp.org/pjm/1980/86-1/pjm-v86-n1-p05-s.pdf"
      locator: "p. 89, the ideal patching argument; the infinite-field finite-type case is reconstructed below."
verification: {}
---

## Statement

Assume AC. Let $k$ be an infinite field, let $A$ be a regular integral finite-type $k$-algebra, and let $\alpha\in H^2_{\mathrm{et}}(\operatorname{Spec}A,\mathbb G_m)$. If, for every maximal ideal $\mathfrak m$, the restriction of $\alpha$ to $\operatorname{Spec}A_\mathfrak m$ is represented by an Azumaya algebra, then $\alpha$ is represented by an Azumaya algebra on $\operatorname{Spec}A$. This is a local-to-global patching result; the local representability hypothesis is not asserted here.

## Facts & Assumptions

**Given:** The infinite field, regular integral algebra, cohomology class and local representability hypothesis in the Statement.

[A1] The Axiom of Choice is assumed. [[def-axiom-of-choice]]

[F1] Azumaya algebras satisfy the tensor-to-endomorphism identity and descend through the stated faithfully flat algebra descent. [[def-azumaya-algebra-on-a-variety]] [[lem-faithfully-flat-effective-descent-of-modules-and-algebras]]

[F2] Equal cohomology classes of Azumaya algebras give an isomorphism after tensoring with endomorphism algebras of finite projectives. [[lem-azumaya-stable-equivalence-detected-by-cohomological-class]]

[F3] A projective of rank greater than the dimension on a nonzero principal localization of a regular integral finite-type infinite-field algebra extends to a projective of the same rank. [[lem-large-projective-modules-extend-across-regular-principal-localizations]]

[F4] Étale $H^2(\mathbb G_m)$ of a regular integral Noetherian scheme injects into that of every nonempty open. [[lem-regular-integral-etale-gm-h2-injects-into-function-field]]

## Proof

**Proof technique:** show that the principal opens carrying representatives form an ideal and use the closed-point hypotheses.

1.1 Let $S$ be the set of $f\in A$ such that $\alpha|_{D(f)}$ has an Azumaya representative. It contains zero, since $D(0)$ is empty, and if $f\in S$ and $a\in A$, restriction to $D(af)\subseteq D(f)$ gives $af\in S$. To prove that $S$ is an ideal, it remains to show that every $h\in(f_1,f_2)$ belongs to $S$ when $f_1,f_2\in S$. If $h=0$ this is immediate; otherwise $D(h)$ is covered by $D(hf_1)$ and $D(hf_2)$. If one of these pieces is empty, $D(h)$ lies in the other and restriction gives $h\in S$. [given, construct, algebra]

2.1 On the two nonempty pieces choose Azumaya representatives $A_1,A_2$ of the restrictions of $\alpha$. Their restrictions to the overlap have equal cohomological classes, so [F2] gives finite projectives $P_1,P_2$ there and an isomorphism $A_1\otimes\mathcal E nd(P_1)\cong A_2\otimes\mathcal E nd(P_2)$. Replace both $P_i$ by a common number of direct copies; the isomorphism tensors with the same matrix algebra, and their positive ranks become larger than $\dim A$. Each piece is a regular integral finite-type $k$-algebra, and the overlap is its nonzero principal localization. By [F3], the enlarged $P_i$ extend to finite projectives $Q_i$ on the respective pieces. [A1, F2, F3, step 1.1, choose, construct, algebra]

3.1 The Azumaya algebras $A_i\otimes\mathcal E nd(Q_i)$ are isomorphic on the overlap. Glue them across the two-open cover of $D(h)$ by [F1]; the result $A_h$ is Azumaya because the defining finite locally free and tensor-isomorphism conditions are local. Its class agrees with $\alpha$ on a nonempty piece, since endomorphism algebras have zero class. By [F4], restriction from the regular integral scheme $D(h)$ to that piece is injective in degree two, so $[A_h]=\alpha|_{D(h)}$. Thus $h\in S$ and $S$ is an ideal. [F1, F4, step 1.1, step 2.1, algebra]

4.1 For each maximal ideal $\mathfrak m$, choose a local Azumaya representative over $A_\mathfrak m$. Its finite projective idempotent, multiplication, unit, inverse to the Azumaya tensor map, and their finitely many identities descend after clearing denominators to an Azumaya algebra on some $D(f)$ with $f\notin\mathfrak m$. The descended class and $\alpha$ agree over the common function field because they agree over $A_\mathfrak m$; [F4] then makes them equal on $D(f)$. Hence $S$ is contained in no maximal ideal. An ideal not contained in any maximal ideal is the whole ring, so $1\in S$ and $\alpha$ has a global Azumaya representative. [A1, F4, step 3.1, choose, construct, algebra] ∎
