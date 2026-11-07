---
id: ex-reflex-reciprocity-for-the-standard-q-i-cm-type
kind: example
title: "Reflex reciprocity for the standard Q(i)-CM type"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 21
deps:
  - def-cm-algebra-and-cm-type
  - def-reflex-field-and-reflex-type-of-a-cm-type
  - def-reflex-norm-associated-to-a-cm-type
  - thm-reflex-field-idele-reciprocity-on-cm-tate-modules
  - def-arith-tate-module-and-inertia
  - lem-arith-field-prime-to-characteristic-torsion-and-tate-module
  - thm-complex-torus-weierstrass-cubic-isomorphism
  - thm-elliptic-cubic-chord-tangent-group-law
  - def-axiom-of-choice
  - def-countable-choice
  - def-dependent-choice
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "J. S. Milne, The Fundamental Theorem of Complex Multiplication, §§1 and 3"
      url: "https://arxiv.org/pdf/0705.3446"
      locator: "The reflex norm construction and Theorem 3.10, printed pp. 2–3 and 22–24."
    - title: "Margaret Bilu, Complex multiplication of abelian varieties, §§3.2–4"
      url: "https://perso.pages.math.cnrs.fr/users/margaret.bilu/Complexmultiplication.pdf"
      locator: "Reflex norm and reflex-field reciprocity, printed pp. 12–14 and 25–31."
verification: {}
---

## Example

Assume AC, Countable Choice, and DC. Let $E=E^r=K=\mathbb Q(i)$ with the CM type $\Phi=\{\mathrm{id}:K\hookrightarrow\mathbb C\}$, and let $A$ be the elliptic curve whose analytic uniformization is $\mathbb C/\mathbb Z[i]$. For $\sigma\in\operatorname{Aut}(\mathbb C/K)$ and $s\in\mathbb A_{f,K}^{\times}$ satisfying $\operatorname{art}_K(s)=\sigma|_{K^{\mathrm{ab}}}$ under the reciprocal Artin convention, the reflex norm is $N_\Phi(s)=s$. Consequently the unique $K$-linear quasi-isogeny $\lambda\in\operatorname{Hom}^0(A,\sigma A)$ in the reflex-field reciprocity theorem satisfies $\lambda(sx)=\sigma x$ for every $x\in V_fA$.

## Example references

[[def-cm-algebra-and-cm-type]]

[[def-reflex-field-and-reflex-type-of-a-cm-type]]

[[def-reflex-norm-associated-to-a-cm-type]]

[[thm-reflex-field-idele-reciprocity-on-cm-tate-modules]]

## Facts & Assumptions

**Given:** The fixed inclusion $K=\mathbb Q(i)\subset\mathbb C$, the standard CM type, and the hypotheses stated in the Example.

[A1] AC is inherited from the abelian-variety interface. [[def-axiom-of-choice]]

[A2] Countable Choice is inherited from the finite-idèle and global CFT interfaces. [[def-countable-choice]]

[A3] DC is inherited from the reflex-field reciprocity theorem's CFT supplier. [[def-dependent-choice]]

[F1] The reflex norm is the determinant on the CM-type trace module and is functorial on finite idèles. [[def-reflex-norm-associated-to-a-cm-type]]

[F2] The rank-two complex torus is a smooth projective elliptic curve under its Weierstrass map. [[thm-complex-torus-weierstrass-cubic-isomorphism]]

[F3] The Weierstrass biholomorphism transports the torus group law to the algebraic chord-tangent law on the cubic. [[thm-elliptic-cubic-chord-tangent-group-law]]

[F4] The reflex-field idèle theorem gives a unique $E$-linear quasi-isogeny with the displayed Tate-module relation, under its stated choice hypotheses. [[thm-reflex-field-idele-reciprocity-on-cm-tate-modules]]

## Proof

1.1 The torus $A=\mathbb C/\mathbb Z[i]$ is a smooth projective cubic with its elliptic group law by [F2] and [F3]. For $a\in K$, the one-dimensional $K\otimes K$-module $V_\Phi=K$ has $a$ acting by the identity embedding, so its trace is $a$ and the reflex field is $K$. On this rank-one $K$-space, $s$ acts with $K$-determinant $s$. This holds componentwise at each finite place, so $N_\Phi(s)=s$. [A1, A2, A3, F1, F2, F3, given, algebra]

2.1 Apply [F4] with $E=E^r=K$ and the computed reflex norm. The theorem yields the unique $K$-linear quasi-isogeny and exactly the relation in the Example. The theorem is used at its actual rational-homomorphism scope. [F4, step 1.1, given] ∎

