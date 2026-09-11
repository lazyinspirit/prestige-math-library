---
id: cor-green-correspondence-for-modules-of-vertex-exactly-p
kind: corollary
title: Green correspondence for modules of vertex exactly p
status: draft
origin: pipeline
deps: [thm-green-correspondence-with-exceptional-families, lem-green-exceptional-family-containment-and-fusion, def-axiom-of-choice]
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Saunders, Modular Representation Theory, Lemmas 4.18–4.19 and 4.35–4.38, Theorem 4.34
      url: https://jpsaunders.uk/ModRep/NotesWebsite.pdf
    - title: Lassueur–Farrell, Chapter 7, §29, Theorem 29.4 and proof
      url: https://www.niamhfarrell.com/uploads/6/9/2/8/69286633/upload2.pdf
proof_strategy: direct
---

## Statement

Assume AC. Let $G$ be finite, $k$ of characteristic $p>0$, $P$ a $p$-subgroup and $N_G(P)\leq H\leq G$. The Green correspondence restricts to inverse bijections between isomorphism classes of nonzero indecomposable finite-dimensional $G$- and $H$-modules having $P$ itself as a vertex. Restriction errors are relatively $\mathcal Y$-projective and induction errors relatively $\mathcal X$-projective, with the families in the full Green theorem. These need not be the same subgroup family.

## Facts & Assumptions

**Given:** The groups, field and fixed vertex above.

[A1] AC ([[def-axiom-of-choice]]) is inherited through the Green theorem's finite-length argument.

[F1] Green's full theorem gives inverse class maps, preserving a specified admissible vertex and the two error families ([[thm-green-correspondence-with-exceptional-families]]).

[F2] Every member of $\mathcal X$ is proper in $P$, and $P\in\mathcal Z$ ([[lem-green-exceptional-family-containment-and-fusion]]).

## Proof

1.1 By F2, every $P\cap{}^sP$ with $s\notin H$ has order smaller than $|P|$. No conjugate of $P$ can be contained in it. Thus the fixed subgroup $P$ belongs to the admissible class $\mathcal Z$. [F2, given]

2.1 Apply F1 under A1 to modules with this vertex. In each direction the distinguished module has the same vertex $P$, so both maps preserve the fixed-vertex subclasses. Their two inverse identities remain valid on these subclasses, proving the required bijection. The error decompositions remain respectively $\mathcal Y$- and $\mathcal X$-projective as in F1, with no equality between the families asserted. If $P=1$, then $H=G$; if $H=G$ directly, the correspondence is the identity and the errors are zero. Nonzero indecomposable inputs and the inherited AC assumption are unchanged. [A1, F1, step 1.1] ∎
