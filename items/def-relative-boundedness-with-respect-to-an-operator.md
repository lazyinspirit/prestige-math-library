---
id: def-relative-boundedness-with-respect-to-an-operator
kind: definition
title: "Relative boundedness with respect to an operator"
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-unbounded-linear-operator-domain-and-graph, def-resolvent-and-spectrum-of-a-closed-unbounded-operator, def-densely-defined-closed-and-closable-operator, def-bounded-linear-operator]
proof_strategy: not-applicable
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "Gerald Teschl, Mathematical Methods in Quantum Mechanics, second edition"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe2.pdf"
      locator: "Section 6.1, Lemmas 6.1-6.3, pp.157-159"
---

## Definition

Let $A$ be a linear operator on $H$ with domain $D(A)$. An operator $B$ is
**$A$-bounded**, or **relatively bounded with respect to $A$**, when
$D(A)\subseteq D(B)$ and there are finite constants $a,b\ge0$ with
$$\|Bx\|\le a\|Ax\|+b\|x\|\qquad\text{for all }x\in D(A).$$
The infimum of the admissible constants $a$ is the **$A$-bound** of $B$, and
one says the $A$-bound is *below one* when some $a<1$ is admissible.

**Equivalent form.** $B$ is $A$-bounded exactly when $B$ is bounded on $D(A)$
for the graph norm $\|x\|_A=(\|x\|^2+\|Ax\|^2)^{1/2}$ of
[[def-unbounded-linear-operator-domain-and-graph]]: each estimate
$\|Bx\|\le a\|Ax\|+b\|x\|$ gives
$\|Bx\|\le\max(a,b)\sqrt2\,\|x\|_A$, and conversely a graph-norm bound
$\|Bx\|\le C\|x\|_A$ gives the estimate with $a=b=C$. The constant $b$ is not
intrinsic, and no closedness, density or resolvent hypothesis is needed for
the definition. If $A$ is closed with nonempty resolvent set, then $A$-bounded
operators are exactly those with $D(A)\subseteq D(B)$ for which $BR_A(z)$ is
bounded for some, equivalently every, $z\in\rho(A)$
([[def-densely-defined-closed-and-closable-operator]],
[[def-resolvent-and-spectrum-of-a-closed-unbounded-operator]]); this is used
in the Kato-Rellich theorem below and recorded here as an interface.
