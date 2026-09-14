---
id: lem-the-casimir-operator-is-basis-independent-and-intertwining
kind: lemma
title: The Casimir operator is basis-independent and intertwining
status: published
origin: pipeline
pipeline_run: phase-2-next-18
deps: [def-casimir-operator-relative-to-an-invariant-form, prop-trace-forms-are-symmetric-and-invariant, thm-universal-property-of-the-universal-enveloping-algebra]
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: 2026-09-14
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-14
sources:
  references:
    - title: "Milne, Lie Algebras, Proposition 5.17"
      url: https://www.jmilne.org/math/CourseNotes/LAG.pdf
      locator: "§5, Proposition 5.17, printed pp. 50–51"
---

## Statement

The Casimir element $\Omega_B$ is independent of the chosen dual bases and
belongs to the center of $U(\mathfrak g)$. Consequently its action on every
$\mathfrak g$-module is a $\mathfrak g$-intertwiner.

## Facts & Assumptions

**Given:** The data in the Casimir definition.

[L1] The element is the image of the dual-basis tensor under multiplication
in $U(\mathfrak g)$
([[def-casimir-operator-relative-to-an-invariant-form]]).

[L2] Invariance means
$B([z,x],y)+B(x,[z,y])=0$
([[prop-trace-forms-are-symmetric-and-invariant]]).

[L3] A representation extends uniquely to an algebra homomorphism from the
universal enveloping algebra
([[thm-universal-property-of-the-universal-enveloping-algebra]]).

## Proof

**Proof technique:** invariant inverse tensor.

1.1 The form isomorphism $b:\mathfrak g\to\mathfrak g^*$ sends $x\mapsto B(x,-)$. Under $\mathfrak g\otimes\mathfrak g^*\cong\operatorname{End}(\mathfrak g)$, the identity corresponds to $\sum_i x_i\otimes b(x^i)$. Hence $\sum_i x_i\otimes x^i$ is the inverse tensor of $B$ and is independent of the basis. Multiplication into $U(\mathfrak g)$ proves the same for $\Omega_B$. [L1, algebra]

2.1 For $z\in\mathfrak g$, the diagonal adjoint action on the inverse tensor is $\sum_i([z,x_i]\otimes x^i+x_i\otimes[z,x^i])$. Pairing its second factor with an arbitrary vector and using [L2] shows that this tensor is zero. Multiplication sends it to $[z,\Omega_B]$, hence that commutator is zero. Since $\mathfrak g$ generates $U(\mathfrak g)$, $\Omega_B$ is central. [L2, step 1.1, algebra]

3.1 By [L3], any module action extends to $U(\mathfrak g)$. Centrality gives $\rho(x)\rho(\Omega_B)=\rho(\Omega_B)\rho(x)$ for every $x$, precisely the intertwining condition. For $\mathfrak g=0$, the inverse tensor and Casimir are empty sums and all assertions reduce to $0=0$. [L3, step 2.1] ∎