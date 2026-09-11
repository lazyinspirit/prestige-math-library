---
id: prop-adding-an-endomorphism-valued-one-form-to-a-connection-gives-a-connection
kind: proposition
title: "Adding an endomorphism valued one form to a connection gives a connection"
status: draft
origin: pipeline
deps: ["prop-the-difference-of-two-connections-is-an-endomorphism-valued-one-form","def-connection-on-a-smooth-vector-bundle"]
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
verification:
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

If $\nabla$ is a connection and $B\in\Gamma(\operatorname{Hom}(TM,\operatorname{End}E))$, then
$$(\nabla+B)_Xs=\nabla_Xs+B(X)s$$
defines a connection. If the set of connections is nonempty, it is an affine space modeled on the real vector space of endomorphism-valued one-forms: that vector space acts freely and transitively by this addition.

## Facts & Assumptions

**Given:** A connection $\nabla$ and a smooth endomorphism-valued one-form $B$ on $E$.

[F1] The connection definition is real linearity and the one-form Leibniz rule ([[def-connection-on-a-smooth-vector-bundle]]).

[F2] Two connections have a unique endomorphism-valued one-form as their difference ([[prop-the-difference-of-two-connections-is-an-endomorphism-valued-one-form]]).

## Proof

1.1 Define $\eta_s(p)(v)=B_p(v)s(p)$. In local matrices this is a finite sum of products of smooth coefficients, hence a smooth Hom section. It is real-linear in $s$ and satisfies $\eta_{fs}=f\eta_s$. Therefore $(\nabla+B)(fs)=df\otimes s+f\nabla s+f\eta_s=df\otimes s+f(\nabla+B)s$. This proves the connection axioms. [F1, construct]

2.1 Adding the zero form fixes $\nabla$, and adding $B$ then $C$ equals adding $B+C$ by pointwise evaluation. The difference theorem shows any other connection equals $\nabla+B$ for exactly one $B$, proving transitivity and freeness. For a rank-zero bundle the modeling vector space is zero and the connection space a singleton; an empty base has the same interpretation. In rank one the action is addition of scalar one-forms. No claim of nonemptiness without a given connection, or choice of a preferred origin, enters this affine-space assertion. [F2, step 1.1] ∎
