---
id: fs-tor-one-of-r-mod-i-and-m-is-always-the-i-torsion-submodule-of-m
title: "Tor one of R modulo I and M is not always the I-torsion submodule of M"
kind: false-statement
status: published
origin: pipeline
deps: ["thm-tor-one-of-a-cyclic-abelian-group-detects-n-torsion", "def-balanced-tor-bifunctor"]
proof_strategy: direct
sources:
  references:
    - title: "Charles A. Weibel, An Introduction to Homological Algebra"
      url: https://math.mit.edu/~hrm/palestine/weibel/03-tor_and_ext.pdf
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: 2026-09-06
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
---

## Statement

False claim: for every ideal $I\triangleleft R$, $\operatorname{Tor}_1^R(R/I,M)$ equals $\{m\in M:Im=0\}$.

## Refutation

**Given:** let $R=k[x,y]$, $I=(x,y)$, and $M=k=R/I$, where $k$ is a field.

1.1 Tensoring $0\to I\to R\to R/I\to0$ with $k$ gives $\operatorname{Tor}_1^R(R/I,k)\cong\ker(I\otimes_Rk\longrightarrow k)$. The displayed multiplication map is zero because $I$ annihilates $k$. [given, algebra]

2.1 Moreover $I\otimes_Rk\cong I/I^2$, and the residue classes of $x$ and $y$ form a $k$-basis of $I/I^2$. Hence $\operatorname{Tor}_1^R(R/I,k)\cong k^2$. [step 1.1, algebra]

3.1 On the other hand, $\{m\in k:Im=0\}=k$.  The Tor group has $k$-dimension two while the asserted $I$-torsion submodule has dimension one, so they are not equal (or even isomorphic). [step 2.1, contradiction] ∎
