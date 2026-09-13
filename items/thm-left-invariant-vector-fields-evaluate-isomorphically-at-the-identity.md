---
id: thm-left-invariant-vector-fields-evaluate-isomorphically-at-the-identity
kind: theorem
title: Left-invariant vector fields evaluate isomorphically at the identity
status: draft
origin: pipeline
deps: ["def-countable-choice", "def-left-and-right-invariant-vector-fields", "prop-translations-are-diffeomorphisms-and-their-differentials-trivialize-the-tangent-bundle"]
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: Anthony W. Knapp, Lie Groups Beyond an Introduction, 2nd ed.
      url: https://www.math.stonybrook.edu/~aknapp/download/Beyond2.pdf
      locator: Chapter I §10, printed page 69
    - title: Alexander Kirillov Jr., An Introduction to Lie Groups and Lie Algebras
      url: https://www.math.stonybrook.edu/~kirillov/liegroups/liegroups.pdf
      locator: Theorem 2.27 and proof, printed pages 21–22
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
proof_strategy: direct
---

## Statement

Assume $\mathrm{AC}_\omega$. Let $\mathfrak X_L(G)$ and
$\mathfrak X_R(G)$ be the real vector spaces of left- and right-invariant
smooth vector fields on a Lie group $G$. Evaluation at the identity gives
linear isomorphisms

$$\operatorname{ev}_e^L:\mathfrak X_L(G)\longrightarrow T_eG$$

and

$$\operatorname{ev}_e^R:\mathfrak X_R(G)\longrightarrow T_eG.$$

Their respective inverses send $v\in T_eG$ to

$$v^L_g=d(L_g)_e(v)\qquad\text{and}\qquad v^R_g=d(R_g)_e(v).$$

The countable-choice assumption is used exactly through the supplied
invariant-field and smooth translation-trivialization results.

## Facts & Assumptions

**Given:** $\mathrm{AC}_\omega$, a Lie group $G$ with identity $e$, and a
vector $v\in T_eG$.

[F1] $\mathrm{AC}_\omega$ is countable choice. [[def-countable-choice]].

[F2] Invariance is equivalent to the appropriate identity-value formula.
[[def-left-and-right-invariant-vector-fields]].

[F3] The maps $(g,v)\mapsto d(L_g)_e(v)$ and
$(g,v)\mapsto d(R_g)_e(v)$ are smooth vector-bundle isomorphisms.
[[prop-translations-are-diffeomorphisms-and-their-differentials-trivialize-the-tangent-bundle]].

## Proof

**Proof technique:** direct.

1.1 Pointwise addition and scalar multiplication preserve smooth vector fields. Because each differential $d(L_g)_h$ is linear, they also preserve left invariance; the same holds on the right. Thus $\mathfrak X_L(G)$ and $\mathfrak X_R(G)$ are real vector spaces, and evaluation at $e$ is linear on each. [F2, algebra]

1.2 Fix $v\in T_eG$. The map $g\mapsto(g,v)$ is a smooth section of the product bundle $G\times T_eG$. Composing it with the left trivialization in [F3] shows that $v^L_g=d(L_g)_e(v)$ is a smooth vector field. Its identity-value formula makes it left invariant by [F2], and $v^L_e=d(L_e)_e(v)=v$. [F2, F3, algebra]

2.1 Conversely, [F2] forces every $X\in\mathfrak X_L(G)$ to satisfy $X_g=d(L_g)_e(X_e)$ at every $g$. Hence $X=(X_e)^L$, so $v\mapsto v^L$ and $\operatorname{ev}_e^L$ are mutually inverse linear maps. [F2, step 1.1, step 1.2]

2.2 Replacing the left trivialization by the right trivialization in [F3] gives a smooth field $v^R_g=d(R_g)_e(v)$. The right identity-value characterization in [F2] proves invariance and uniqueness, while $R_e=\operatorname{id}_G$ gives $v^R_e=v$. Thus $v\mapsto v^R$ is the inverse of $\operatorname{ev}_e^R$. [F2, F3, step 1.1, algebra]

3.1 A Lie group is nonempty. If $\dim G=0$, then $T_eG=0$ and both invariant-field spaces contain only the zero field, so both evaluation maps are the unique zero-dimensional isomorphisms; dimension one needs no change. No metric or nondegeneracy condition occurs, and the group is boundaryless by convention. The stated $\mathrm{AC}_\omega$ is inherited through [F2] and [F3]; fixing the supplied vector $v$ and performing pointwise linear operations adds no choice. The theorem asserts two explicit isomorphisms, not a biconditional. [F1, F2, F3, step 1.1, step 1.2, step 2.1, step 2.2] ∎
