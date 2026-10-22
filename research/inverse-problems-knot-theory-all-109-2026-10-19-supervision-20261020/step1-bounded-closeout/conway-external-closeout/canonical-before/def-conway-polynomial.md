---
id: def-conway-polynomial
kind: definition
title: The Conway polynomial
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: not-applicable
deps:
  - def-oriented-link-in-s-three-and-ambient-isotopy
  - def-oriented-crossing-sign-writhe-and-blackboard-framing
justified_by: []
dependency_level: 1
verification:
  precheck: n/a
sources:
  references:
    - title: Introduction to Vassiliev Knot Invariants, §2.3
      url: https://www.math.cinvestav.mx/~mostovoy/cdbook/cdbook-as-submitted.pdf
    - title: Polyak–Viro Formulas for Coefficients of the Conway Polynomial, §§3.4–4.2
      url: https://math.osu.edu/~chmutov.1/preprints/chmutov-khoury-rossi.pdf
    - title: Elementary proof of existence of the Alexander-Conway polynomial, §§1–4, PDF pp. 1–9
      url: https://arxiv.org/pdf/2012.03086
---

## Definition

For an oriented link type $L$ in $S^3$, the Conway polynomial is the polynomial $\nabla_L(z)\in\mathbb Z[z]$ characterized by the normalization $\nabla_U(z)=1$ for the unknot $U$ and the skein relation
$$\nabla_{L_+}(z)-\nabla_{L_-}(z)=z\,\nabla_{L_0}(z).$$
Here $L_+$ and $L_-$ are identical oriented links outside a ball and have respectively a positive and negative crossing inside it, while $L_0$ is obtained in that ball by the orientation-preserving smoothing. For each integer $k\ge0$, the $k$th Conway coefficient is $c_k(L):=[z^k]\nabla_L(z)$. This carrier records the conventional skein interface; existence and uniqueness of the invariant are a separate well-definedness obligation.

## Definition references

[[def-oriented-link-in-s-three-and-ambient-isotopy|Oriented links and ambient-isotopy classes]]

[[def-oriented-crossing-sign-writhe-and-blackboard-framing|Positive crossing convention]]

[Chmutov, Duzhin, and Mostovoy, §2.3, printed pp. 35–37](https://www.math.cinvestav.mx/~mostovoy/cdbook/cdbook-as-submitted.pdf)

[Chmutov, Cap Khoury, and Rossi, §§3.4–4.2, PDF pp. 4–8](https://math.osu.edu/~chmutov.1/preprints/chmutov-khoury-rossi.pdf)

[Garaev, “Elementary proof of existence of the Alexander-Conway polynomial,” §§1–4, PDF pp. 1–9](https://arxiv.org/pdf/2012.03086)

