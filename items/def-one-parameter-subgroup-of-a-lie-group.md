---
id: def-one-parameter-subgroup-of-a-lie-group
kind: definition
title: One-parameter subgroup of a Lie group
status: draft
origin: pipeline
deps: ["def-lie-group", "def-lie-group-homomorphism-isomorphism-and-automorphism"]
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: Alexander Kirillov Jr., An Introduction to Lie Groups and Lie Algebras
      url: https://www.math.stonybrook.edu/~kirillov/liegroups/liegroups.pdf
      locator: Note following Theorem 2.29, printed page 23
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
---

## Definition

The standard coordinate on $\mathbb R$ makes addition
$(s,t)\mapsto s+t$ and inversion $t\mapsto-t$ smooth, so
$(\mathbb R,+)$ is a one-dimensional Lie group in the sense of
[[def-lie-group]]. A **one-parameter subgroup** of a Lie group $G$ is a
Lie-group homomorphism

$$\gamma:(\mathbb R,+)\longrightarrow G$$

in the sense of
[[def-lie-group-homomorphism-isomorphism-and-automorphism]]. Thus $\gamma$ is
smooth, is defined for every real parameter, and satisfies

$$\gamma(s+t)=\gamma(s)\gamma(t),\qquad \gamma(0)=e,\qquad \gamma(-t)=\gamma(t)^{-1}.$$

The last two identities are consequences of the group-homomorphism law, not
extra data. A smooth curve defined only on an interval around $0$ is therefore
not yet a one-parameter subgroup, even if it satisfies the product law
whenever all displayed parameters remain in that interval. The term also
does not assert that the image is embedded or closed.

Both the domain and every Lie-group codomain are nonempty and boundaryless.
For a zero-dimensional codomain the definition still permits, for example,
the constant homomorphism; for a one-dimensional codomain it is unchanged.
No metric, nondegeneracy, or finite endpoint occurs, and all maps and group
operations are supplied explicitly, so no choice axiom is used. This is a
definition, not a biconditional characterization.
