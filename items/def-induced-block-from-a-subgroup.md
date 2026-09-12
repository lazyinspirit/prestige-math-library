---
id: def-induced-block-from-a-subgroup
kind: definition
title: A block induced from a subgroup
deps: ["def-block-bimodule-for-the-double-group", "def-p-blocks-by-primitive-central-idempotents", "thm-krull-schmidt-for-finite-dimensional-kg-modules"]
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - title: Saunders, Modular Representation Theory, Definition 5.13
      url: https://jpsaunders.uk/ModRep/NotesWebsite.pdf
    - title: Farrell–Lassueur, Modular Representation Theory of Finite Groups, Definition
        40.1, §40 (printed pp.8–12 of upload17)
      url: https://www.niamhfarrell.com/uploads/6/9/2/8/69286633/upload17.pdf
status: draft
origin: pipeline
---

## Definition

Fix a splitting $p$-modular system for finite $G$, with residue field $k$, and $H\le G$. For a primitive central idempotent $e$ of $kH$, write $b=kHe$ as the indecomposable double-group module of [[def-block-bimodule-for-the-double-group]]. A block $B$ of $kG$ **is induced from $b$**, denoted $b^G=B$, if it is the unique block for which
$$b\mid\operatorname{Res}^{G\times G}_{H\times H}B.$$
Here $X\mid Y$ means there are module maps $i:X\to Y$, $r:Y\to X$ with $ri=\operatorname{id}_X$; equivalently $Y\cong X\oplus\ker r$.

Blocks are the actual ideals belonging to [[def-p-blocks-by-primitive-central-idempotents]], not a choice of isomorphic copies. Distinct blocks $kGf,kGf'$ are nonisomorphic as bimodules: left multiplication by $f$ is the identity on the first and zero on the second, and every bimodule isomorphism would intertwine these operators. The finite multiplicities of indecomposable summands are well-defined by [[thm-krull-schmidt-for-finite-dimensional-kg-modules]].

If no block, or more than one block, has the splitting property, $b^G$ is undefined. The definition never assigns a value in those cases. For $H=G$ the indecomposable block $b$ is its own unique such block, so $b^G=b$. No infinite family of choices is required by this definition. A central-character formula is a further theorem under additional hypotheses, not part of this definition.
