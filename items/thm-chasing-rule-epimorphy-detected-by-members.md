---
id: thm-chasing-rule-epimorphy-detected-by-members
kind: theorem
title: "Epimorphy is detected by members"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-members-modulo-equivalence-correspond-to-subobjects,
       prop-a-morphism-carries-members-to-members-and-preserves-equivalence,
       thm-the-image-is-the-least-subobject-through-which-a-morphism-factors,
       def-monomorphism-and-epimorphism,
       def-pullbacks-and-pushouts,
       thm-the-pullback-of-an-epimorphism-is-an-epimorphism]
justified_by: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-29
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Saunders Mac Lane, Categories for the Working Mathematician, Theorem VIII.4.3(iii)"
      url: "https://math.mit.edu/~hrm/palestine/maclane-categories.pdf"
pipeline_run: frontier-23
---

## Statement

For a morphism $g:B \to C$ in an abelian category, the following are
equivalent:

1. $g$ is epic.
2. For every member $z:Z \to C$, there exists a member $y:Y \to B$ with
   $$g y \equiv z.$$

## Facts & Assumptions

**Given:** A morphism $g:B \to C$.

[L1] Members modulo equivalence correspond exactly to subobjects
([[thm-members-modulo-equivalence-correspond-to-subobjects]]).

[L3] The image is the least subobject through which a morphism factors
([[thm-the-image-is-the-least-subobject-through-which-a-morphism-factors]]).

[L4] Pullbacks exist, and pullbacks of epimorphisms are epimorphisms
([[def-pullbacks-and-pushouts]],
[[thm-the-pullback-of-an-epimorphism-is-an-epimorphism]]).

## Proof

**Proof technique:** direct.

1.1 Assume $g$ is epic. For a member $z:Z \to C$, form the pullback of $z$ along $g$ with projections $y:P \to B$ and $\alpha:P \to Z$. By [L4], $\alpha$ is epic, and the pullback equation $g y = z \alpha$ shows $g y \equiv z$. [L4, assume-hyp, construct]

1.2 Assume condition 2, and write $g$ as an epi-mono factorization $B \xrightarrow{e} I \xrightarrow{m} C$. Apply condition 2 to the identity member $1_C:C \to C$. Then there is $y:Y \to B$ with $g y \equiv 1_C$, so [L1] says that $g y$ and $1_C$ determine the same whole subobject of $C$. Since $g y$ factors through $g$, [L3] gives $[\operatorname{im}(g y)] \le [\operatorname{im}(g)] = [\!m\!]$, hence $[1_C] \le [\!m\!]$, which forces $[\!m\!] = [1_C]$. Thus $g$ is epic. [L1, L3, assume-hyp, algebra]

2.1 Therefore conditions 1 and 2 are equivalent. [step 1.1, step 1.2] ∎
