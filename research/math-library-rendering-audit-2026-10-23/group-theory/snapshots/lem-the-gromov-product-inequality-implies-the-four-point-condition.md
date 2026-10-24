---
id: "lem-the-gromov-product-inequality-implies-the-four-point-condition"
kind: "lemma"
title: "The gromov product inequality implies the four point condition"
deps: ["def-hg-toolkit-slim-triangles-products-and-four-point-constants"]
provenance:
  statement: "ai-altered"
  proof: "ai-altered"
verification:
  audited: 2026-09-12
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  references:
    - title: "Druţu–Kapovich §9.5 Gromov hyperbolicity"
      url: "https://www.math.ucdavis.edu/~kapovich/EPR/kapovich_drutu.pdf"
status: published
origin: "pipeline"
proof_strategy: "direct"
---

## Statement

For any metric space and $\kappa\ge0$, the product inequality with constant $\kappa$ at every basepoint is equivalent to the four-point condition whose largest two opposite-pair distance sums differ by at most $2\kappa$. Geodesicity is unnecessary.

## Facts & Assumptions

**Given:** A metric space and $\kappa\ge0$.

[F1] The two conditions and the product formula are those in [[def-hg-toolkit-slim-triangles-products-and-four-point-constants]].

## Proof

1.1 For an ordered quadruple $(o,x,y,z)$ write $A=d(o,y)+d(x,z)$, $B=d(o,z)+d(x,y)$ and $C=d(o,x)+d(y,z)$, and put $R=d(o,x)+d(o,y)+d(o,z)$. Then $2(x|z)_o=R-A$, $2(x|y)_o=R-B$, and $2(y|z)_o=R-C$. Consequently the product inequality for this ordered quadruple is exactly $A\le\max\{B,C\}+2\kappa$, since $\min\{R-B,R-C\}=R-\max\{B,C\}$. [F1, algebra]

2.1 Suppose the product condition holds for all ordered quadruples. Permuting $x,y,z$ in step 1.1 gives the three inequalities bounding each of $A,B,C$ by the maximum of the other two plus $2\kappa$. Apply the inequality with the largest sum on its left: the maximum on its right is the second-largest, including ties. This proves the four-point condition. [step 1.1, given]

3.1 Conversely suppose the four-point condition holds. For every ordered quadruple, if $A$ is largest it is at most the second-largest plus $2\kappa$, while if it is not largest it is already at most $\max\{B,C\}$. Thus $A\le\max\{B,C\}+2\kappa$ in either case. Step 1.1 recovers the product inequality at the arbitrary basepoint $o$. The computations remain valid when points coincide or $\kappa=0$. [step 1.1, given] ∎
