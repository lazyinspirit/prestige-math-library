---
id: fs-modular-representations-are-determined-by-ordinary-characters
kind: false-statement
title: "FALSE: modular representations are determined by ordinary characters"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: []
proof_strategy: direct
verification:
  verified:
    model: "gpt-6-sol"
    verdict: "locally-reviewed"
    date: 2026-09-26
    scope: "Current item-local mathematical content and used-supplier-interface review, as documented in the bound evidence; no whole-closure claim; no new judge claim."
    delegated_by: "owner"
sources:
  scraped: []
  references:
    - title: "J. Miquel Martinez, Modular Representation Theory of Finite Groups"
      url: "https://www.uv.es/jomimar8/pdfs/course%20notes.pdf"
    - title: "Tudor Ciurca, Representation Theory"
      url: "https://www.scribd.com/document/951548499/ModRep"
---

## Statement

Two finite-dimensional modular representations with the same ordinary-style
character data must be isomorphic.

## Facts & Assumptions

**Given:** The cyclic group $C_p$ over a field $k$ of characteristic $p$.

## Refutation

**Proof technique:** direct.

1.1 Let $V$ be the $2$-dimensional $kC_p$-module with generator acting by $I+N=\bigl(\begin{smallmatrix}1&1\\0&1\end{smallmatrix}\bigr)$, and let $W=k\oplus k$ be the direct sum of two trivial modules. Since $N^2=0$ and $\operatorname{char}k=p$, $(I+N)^p=I$, so this is a representation of $C_p$. The modules are not isomorphic: the generator acts nontrivially on $V$ and trivially on $W$. [given, algebra]

2.1 For each group element $g^a$, the matrices are $(I+N)^a=I+aN$ on $V$ and $I$ on $W$, so their ordinary-style traces are both $2$ in $k$. The invariant line $ke_1\subset V$ and its quotient are both trivial, so $V$ and $W$ also have the same semisimplification. The only $p$-regular element of $C_p$ is the identity, where both Brauer characters, when defined through a splitting system, take the value $2$. These conclusions follow directly from the matrices and require no splitting-system hypothesis on $k$. [step 1.1, algebra]

3.1 Thus ordinary-style character data do not recover the full modular representation; even Brauer characters cannot distinguish these two modules. The statement is false. [step 1.1, step 2.1] ∎
