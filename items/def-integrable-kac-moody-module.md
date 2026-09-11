---
id: def-integrable-kac-moody-module
kind: definition
title: Integrable kac moody module
status: draft
origin: pipeline
deps: [def-kac-moody-category-o, def-kac-moody-algebra-associated-to-a-gcm]
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  references:
    - title: Kleshchev, Lectures on Infinite Dimensional Lie Algebras
      url: https://darkwing.uoregon.edu/~klesh/teaching/IDLALN3.pdf
    - title: Perrin, Introduction to Kac-Moody Groups and Lie Algebras
      url: https://lmv.math.cnrs.fr/wp-content/uploads/2019/09/km-suite.pdf
---

## Definition

Let $\mathfrak g(A)$ be the algebra of [[def-kac-moody-algebra-associated-to-a-gcm]], with its simple generators $e_i,f_i$ and Cartan $\mathfrak h$. A module $V$ is **integrable** if it is a weight module and every $e_i,f_i$ acts locally nilpotently. Explicitly,

$$V=\bigoplus_{\mu\in\mathfrak h^*}V_\mu,\qquad V_\mu=\{v:hv=\mu(h)v\text{ for all }h\in\mathfrak h\},$$

and for every index $i$ and vector $v\in V$ there are positive integers $N_e,N_f$, depending on $i,v$, such that $e_i^{N_e}v=0$ and $f_i^{N_f}v=0$.

Only the weight-module convention from [[def-kac-moody-category-o]] is used. Finite-dimensional weight spaces, bounded-above support and finite generation are not part of integrability. Nor is a uniform nilpotence exponent required. The zero module is integrable, taking exponents one on its sole vector. Both raising and lowering conditions are required, independently; no AC is part of this definition.
