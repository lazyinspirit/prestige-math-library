---
id: ex-first-cohomology-of-c-two-with-trivial-action-on-c-three-is-zero
kind: example
title: "With trivial action, H^1(C_2,C_3) is zero"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [cor-first-cohomology-for-a-trivial-action-is-hom, thm-classification-of-cyclic-groups]
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "David A. Craven, Finite Group Theory"
      url: "https://web.mat.bham.ac.uk/D.A.Craven/docs/lectures/finitegroups2012.pdf"
---

## Example

For the trivial action of $C_2$ on $C_3$,

$$H^1(C_2,C_3)=0.$$

## Facts & Assumptions

**Given:** The trivial action of $C_2$ on $C_3$.

[L1] For a trivial action, $H^1(G,A)\cong\operatorname{Hom}(G,A)$
([[cor-first-cohomology-for-a-trivial-action-is-hom]]).

[L2] A group of order $3$ is cyclic, and every nonidentity element has order
$3$ ([[thm-classification-of-cyclic-groups]]).

## Verification

**Proof technique:** direct.

1.1 By [L1], it is enough to compute homomorphisms $C_2\to C_3$. [given, L1]

2.1 The generator of $C_2$ must map to an element whose order divides $2$, but [L2] says the only such element of $C_3$ is the identity. So every homomorphism is trivial, and therefore $H^1(C_2,C_3)=0$. [L1, L2, step 1.1] ∎
