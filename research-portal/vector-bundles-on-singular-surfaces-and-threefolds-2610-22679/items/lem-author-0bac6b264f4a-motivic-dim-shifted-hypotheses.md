---
id: lem-author-0bac6b264f4a-motivic-dim-shifted-hypotheses
kind: lemma
title: Normalizing the comparison fiber for the dimension criterion
status: draft
domain: mathematics
deps:
  - lem-author-0bac6b264f4a-motivic-dim-general-interface
  - thm-author-0bac6b264f4a-motivic-dim-relative-package-input
  - thm-author-0bac6b264f4a-motivic-dim-dimension-criterion-input
dependency_roles:
  lem-author-0bac6b264f4a-motivic-dim-general-interface: mathematical-premise
  thm-author-0bac6b264f4a-motivic-dim-relative-package-input: mathematical-premise
  thm-author-0bac6b264f4a-motivic-dim-dimension-criterion-input: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
proof_strategy: direct
dependency_level: 10
---

## Statement
For $j\geq0$ and a prime field $F$, set $W_{j,F}=F_{j,F}[j]$, with cochain shift $H^n(C[j])=H^{n+j}(C)$. Then $W_{j,F}$ satisfies every hypothesis of the dimension criterion over base ring $F$: it is finitary Nisnevich, cdh-acyclic, pro-cdh on Noetherian $F$-schemes, and has nilpotent-relative values in degrees $\leq0$ on every Noetherian local henselian $F$-algebra.

## Facts & Assumptions
**Given:** The actual fiber $F_{j,F}$ and the shift convention in the Statement.

**Goal:** Check the precise domain, ideal and degree hypotheses before applying the criterion.

[F1] [[thm-author-0bac6b264f4a-motivic-dim-relative-package-input]] gives finitariness, Nisnevich descent, cdh acyclicity, pro-cdh descent, and the relative bound $\leq j$ for finitely generated nilpotent ideals.

[F2] [[thm-author-0bac6b264f4a-motivic-dim-dimension-criterion-input]] is the criterion requiring relative bound $\leq0$ for Noetherian local henselian algebras. [[lem-author-0bac6b264f4a-motivic-dim-general-interface]] specifies the actual fiber used here.

## Proof
1.1 Shift by $[j]$ is an equivalence of the stable derived category and commutes with limits and colimits. Thus it preserves the finitary and Nisnevich properties, commutes with pointwise total fibers, and preserves the supplied degreewise pro-cdh condition: for every integer $n$ the shifted total-fiber system has $H^n=H^{n+j}$ of the original system, which is zero as a pro abelian group. This uses the explicit convention of [F1]–[F2], without asserting cartesianness in $\operatorname{Pro}(D(\mathbb Z))$. It also commutes with cdh sheafification: shifting preserves sheaves and its inverse does likewise, so the reflective sheafification universal property identifies the two composites. Hence $W_{j,F}$ retains the first geometric properties of [F1], including $L_{\mathrm{cdh}}W_{j,F}=0$. [F1, F2]

2.1 Let $A$ be any Noetherian local henselian $F$-algebra and $I$ any nilpotent ideal. Every ideal of a Noetherian ring is finitely generated, so [F1] applies without an added ideal hypothesis. For $n>0$, the relative cohomology of $W_{j,F}(A,I)$ in degree $n$ is the relative cohomology of $F_{j,F}(A,I)$ in degree $n+j>j$, hence zero. This is exactly the degree and functor-class hypothesis of [F2]; the source’s stronger arbitrary-algebra package has been used only under its actual finitely-generated-ideal condition. [F1, F2, step 1.1] ∎
