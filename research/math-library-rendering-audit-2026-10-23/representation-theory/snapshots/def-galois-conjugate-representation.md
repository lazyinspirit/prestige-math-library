---
id: def-galois-conjugate-representation
kind: definition
title: "Galois conjugates of a representation"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-finite-galois-extension-and-galois-group, def-restriction-and-extension-of-scalars, def-finite-dimensional-representation-of-a-group-over-a-field]
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "Gabor Wiese, Galois Representations, Definition 2.2.7"
      url: "https://r.jina.ai/https://math.uni.lu/wiese/notes/GalRep.pdf"
    - title: "Weizhe Zheng, Lectures on Algebra, Proposition 4.6.14"
      url: "https://server.mcm.ac.cn/~zheng/algebra.pdf"
---

## Definition

Let $E/F$ be finite Galois, let $G$ be a group, and let $V$ be an
$E$-representation with matrices $\rho(g)$ in an $E$-basis.  For
$\sigma\in\operatorname{Gal}(E/F)$, the **$\sigma$-conjugate** ${}^{\sigma}V$
is the $E$-representation whose matrix for $g$ is obtained by applying
$\sigma$ entrywise to $\rho(g)$.  This does not depend on the chosen basis up to
equivalence: conjugating every entry of $A\rho(g)A^{-1}$ gives
$\sigma(A)\sigma(\rho(g))\sigma(A)^{-1}$.

Its character is $\chi_{{}^{\sigma}V}=\sigma\circ\chi_V$.  We write
$\operatorname{Stab}(V)$ for the subgroup of Galois automorphisms for which
${}^{\sigma}V\cong V$.
