---
id: "thm-ag-geometric-regularity-perfect-base"
kind: "theorem"
title: "Regular algebras over a perfect field are geometrically regular"
status: draft
origin: "pipeline"
deps: ["lem-ag-geometric-regularity-field-tests", "thm-perfect-field-characterizations", "def-perfect-field", "thm-purely-inseparable-extension-characterizations", "thm-binomial-theorem-over-a-commutative-ring", "lem-prime-divides-intermediate-binomial-coefficients", "def-regular-noetherian-ring", "def-axiom-of-choice"]
proof_strategy: "direct"
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-27
sources:
  references:
    - title: "Stacks Algebra 10.45.3–4"
      url: "https://stacks.math.columbia.edu/download/algebra.pdf"
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $k$ be a perfect field
([[def-perfect-field]]) and let $A$ be a finite-type $k$-algebra that is regular
([[def-regular-noetherian-ring]]). Then $A\otimes_kK$ is a regular ring for
**every** field extension $K/k$, not only for the finitely generated ones. In
particular a regular finite-type algebra over a perfect field is geometrically
regular ([[lem-ag-geometric-regularity-field-tests]]).

No assumption is made on the extension field $K$: it need not be perfect. In
characteristic $0$ the hypothesis that $k$ is perfect is automatic, and the
statement says that regular finite-type algebras over such fields stay regular
after arbitrary scalar extension.

## Facts & Assumptions

**Given:** A perfect field $k$, a regular finite-type $k$-algebra $A$, and the Axiom of Choice.

[F1] [[thm-perfect-field-characterizations]]: $F$ is perfect if and only if either $\operatorname{char}F=0$, or $\operatorname{char}F=p>0$ and the Frobenius map $a\mapsto a^p$ is surjective; iterating, every element of a perfect field of characteristic $p$ is a $p^e$-th power for every $e\ge0$.

[F2] [[def-perfect-field]]: a field is perfect when every algebraic extension of it is separable, equivalently (in characteristic $p$) when its Frobenius endomorphism is surjective.

[F3] [[thm-purely-inseparable-extension-characterizations]]: for algebraic $K/F$ of characteristic $p$, $K/F$ is purely inseparable if and only if every $\alpha\in K$ has $\alpha^{p^e}\in F$ for some $e\ge0$; in characteristic $0$ a purely inseparable extension is trivial.

[F4] [[thm-binomial-theorem-over-a-commutative-ring]] and [[lem-prime-divides-intermediate-binomial-coefficients]]: in a commutative ring of characteristic $p$ one has $(u+v)^{p}=\sum_k\binom pk u^kv^{p-k}=u^p+v^p$ and hence $(u-v)^{p^e}=u^{p^e}-v^{p^e}$ for every $e\ge0$; in a field $t^{p^e}=0$ forces $t=0$.

[F5] [[lem-ag-geometric-regularity-field-tests]]: under the Axiom of Choice, a finite-type $k$-algebra $A$ is geometrically regular over $k$ if and only if $A$ is regular and $A\otimes_kk'$ is regular for every finite purely inseparable $k'/k$; and then $A\otimes_kK$ is regular for every field extension $K/k$.

[F6] [[def-regular-noetherian-ring]]: a commutative Noetherian ring is regular when all its prime localisations are regular local rings.

## Proof

1.1 Every finite purely inseparable extension of $k$ is trivial. Let $k'/k$ be finite purely inseparable. If the characteristic is $0$, then $k'=k$ by [F3]. If the characteristic is $p>0$, fix $a\in k'$; by [F3] there is $e\ge0$ with $a^{p^e}\in k$, and since the Frobenius map of $k$ is surjective by [F1] we may write $a^{p^e}=b^{p^e}$ with $b\in k$. Then $(a-b)^{p^e}=a^{p^e}-b^{p^e}=0$ by [F4], and $k'$ is a field, so $a=b\in k$. Hence $k'=k$. [F1, F3, F4]

2.1 Applying the field tests. The algebra $A$ is regular by hypothesis, and by step 1.1 the only finite purely inseparable extension of $k$ is $k$ itself, for which $A\otimes_kk=A$ is regular. Hence [F5] makes $A$ geometrically regular over $k$, and its second clause makes $A\otimes_kK$ regular for every field extension $K/k$. [F5, step 1.1, F6]

3.1 Thus a regular finite-type algebra over a perfect field is geometrically regular, and every scalar extension $A\otimes_kK$ is regular, whether or not $K$ is perfect or finitely generated; in characteristic $0$ the perfectness hypothesis is automatic by [F1, F2] ∎
