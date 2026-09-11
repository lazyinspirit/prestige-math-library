---
id: def-dual-connection
kind: definition
title: "Dual connection"
status: published
origin: pipeline
deps: ["thm-local-connection-forms-glue-exactly-when-they-obey-the-transformation-law","def-connection-on-a-smooth-vector-bundle","prop-local-coordinate-formula-for-a-bundle-connection"]
provenance:
  statement: ai-altered
  proof: not-applicable
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

## Definition

The **dual connection** on the smooth bundle $E^*$ of [[def-connection-on-a-smooth-vector-bundle]] is characterized by
$$ (\nabla^*_X\alpha)(s)=X(\alpha(s))-\alpha(\nabla_Xs).$$
The right side is function-linear in $s$: replacing $s$ by $fs$ introduces $X(f)\alpha(s)$ once with each sign, so those terms cancel.

Here is the construction, including well-definedness. In a frame $e$ write $s=eu$ and write $\alpha$ with dual coefficient column $a$, so $\alpha(s)=a^Tu$. The coordinate formula [[prop-local-coordinate-formula-for-a-bundle-connection]] gives
$$X(a^Tu)-a^T(X(u)+\omega(X)u)=(X(a)-\omega(X)^Ta)^Tu.$$
Thus the required coefficients are $X(a)-\omega(X)^Ta$, and the local connection matrix in the dual frame is $-\omega^T$. These local rules are smooth, real-linear and obey the section Leibniz rule by the scalar product rule. On an overlap both give the intrinsic displayed pairing formula; agreement against every local frame section forces equality of the dual covectors. They therefore glue to a connection, equivalently by [[thm-local-connection-forms-glue-exactly-when-they-obey-the-transformation-law]]. Testing against a basis also proves uniqueness. This verifies the implicit characterization rather than assuming that it defines an operator.

The derivative on scalar functions is $X(f)$; duality preserves the evaluation pairing with that scalar connection. For rank one the matrix changes sign; for rank zero evaluation and all coefficients are empty. Zero sections give zero derivatives, while empty bases give the unique operator. This construction is local and canonical from the given connection and requires no choice axiom.
