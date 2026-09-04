---
id: fs-first-cohomology-with-nonabelian-coefficients-is-a-group
kind: false-statement
title: "FALSE: first cohomology with nonabelian coefficients is a group"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-first-nonabelian-cohomology-as-a-pointed-set, thm-nonabelian-first-cohomology-classifies-complements-as-a-pointed-set]
proof_strategy: direct
verification:
  audited: 2026-09-04
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-04
sources:
  scraped: []
  references:
    - title: "Chaoli Li, Class field theory: proofs"
      url: "https://www.math.columbia.edu/~chaoli/docs/ClassFieldTheory2.html"
---

## Statement

For nonabelian coefficients, pointwise multiplication of cocycles always
induces a group structure on first cohomology.

## Facts & Assumptions

**Given:** The trivial action of $C_2\times C_2=\langle s,t\rangle$ on $S_3$.

[L1] Nonabelian first cohomology is defined as a pointed orbit set
([[def-first-nonabelian-cohomology-as-a-pointed-set]]).

[L2] It classifies complements only up to coefficient-group conjugacy as a
pointed set ([[thm-nonabelian-first-cohomology-classifies-complements-as-a-pointed-set]]).

## Refutation

**Proof technique:** direct.

1.1 Under the trivial action, a nonabelian cocycle is exactly a homomorphism to $S_3$. Define cocycles $z,w:C_2\times C_2\to S_3$ by $$z(s)=(12),\quad z(t)=1,\qquad w(s)=1,\quad w(t)=(23).$$ Their pointwise product $u=zw$ satisfies $u(s)=(12)$ and $u(t)=(23)$. Since $st=ts$, a homomorphism would require $u(s)u(t)=u(t)u(s)$, but $(12)(23)\ne(23)(12)$. Thus $u$ is not a cocycle. [given, L1, algebra]

2.1 Thus cocycles are not even closed under the proposed pointwise operation. Fact [L1] accordingly defines nonabelian $H^1$ only as a pointed orbit set, and [L2] identifies its natural classification target as a pointed set of complement classes. Therefore pointwise multiplication does not induce the asserted group structure. [L1, L2, step 1.1] ∎
