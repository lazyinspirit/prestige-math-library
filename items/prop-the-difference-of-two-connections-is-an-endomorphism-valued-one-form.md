---
id: prop-the-difference-of-two-connections-is-an-endomorphism-valued-one-form
kind: proposition
title: "The difference of two connections is an endomorphism valued one form"
status: published
origin: pipeline
deps: ["prop-local-coordinate-formula-for-a-bundle-connection","thm-connection-one-form-transformation-law","def-connection-on-a-smooth-vector-bundle"]
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
verification:
  audited: 2026-09-12
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  references:
    - title: Ved Datar, Lectures on Riemannian Geometry
      url: https://math.iisc.ac.in/~vvdatar/Lecture_Notes/RG_Lectures_typesett_published.pdf
---

## Statement

For two connections $\nabla^0,\nabla^1$ on the same bundle $E$, there is a unique smooth section $B$ of $\operatorname{Hom}(TM,\operatorname{End}E)$ such that
$$\nabla^1_Xs-\nabla^0_Xs=B(X)s.$$
This is called an endomorphism-valued one-form. In a frame it has matrix $\omega_1-\omega_0$.

## Facts & Assumptions

**Given:** Two connections on a finite-rank smooth real bundle.

[F1] The local coefficient rule is $du+\omega u$ ([[prop-local-coordinate-formula-for-a-bundle-connection]]).

[F2] Connection matrices transform by conjugation plus $A^{-1}dA$ ([[thm-connection-one-form-transformation-law]]).

[F3] The choice-free open-quotient construction gives Hom bundles with Hausdorff second-countable smooth structures and the fibrewise matrix transition rule ([[def-connection-on-a-smooth-vector-bundle]]).

## Proof

1.1 Subtracting the local formulas cancels $du$: for $s=eu$, the difference is $e(\omega_1(X)-\omega_0(X))u$. At a point it depends only on $X(p)$ and $u(p)$, not their derivatives. Thus the matrix difference gives a smooth linear map $T_pM\to\operatorname{End}(E_p)$ in each chart, including zero inputs. [F1, F3]

2.1 Under $e'=eA$, the two $A^{-1}dA$ terms cancel and the matrix difference becomes $A^{-1}(\omega_1-\omega_0)A$. This is exactly change of basis for the same fibre endomorphism. These local maps agree intrinsically and define the claimed smooth Hom section. Every fibre vector is a value of a local constant-coefficient section; the equality for these sections determines the endomorphism uniquely. Equal connections give $B=0$; rank one gives scalar one-forms, rank zero gives the unique zero map, and an empty base imposes no values. This is a comparison of supplied connections and uses no existence theorem or choice axiom. [F2, F3, step 1.1] ∎
