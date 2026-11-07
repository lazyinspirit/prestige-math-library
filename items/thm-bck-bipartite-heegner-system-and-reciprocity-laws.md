---
id: thm-bck-bipartite-heegner-system-and-reciprocity-laws
kind: theorem
title: "Level-Raised Heegner Classes Satisfy the Bipartite Reciprocity Laws"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 29
deps:
  - def-bipartite-heegner-euler-system
  - def-classical-heegner-point-kolyvagin-data
  - def-normalized-cuspidal-eigenform-over-gl2
  - thm-deligne-attaches-l-adic-representation-to-a-cuspidal-eigenform
  - thm-number-field-ray-class-field-artin-isomorphism
  - thm-poitou-tate-exact-sequence-for-finite-modules
  - thm-ring-class-group-is-ray-class-group-quotient-by-scalar-residues
  - thm-ring-class-reciprocity-on-cm-singular-moduli
  - thm-singular-modulus-generates-the-ring-class-field
justified_by: []
provenance:
  statement: literature-derived
  proof: not-supplied
sources:
  references:
    - title: "A. Burungale, F. Castella, and C.-H. Kim, A Proof of Perrin-Riou’s Heegner Point Main Conjecture"
      url: "https://arxiv.org/pdf/1908.09512"
      locator: "§3 Theorem 3.3, printed pp. 8–9: level-raised systems and explicit reciprocity laws."
verification: {}
---

## Statement

Let $(\rho,N^-)$ satisfy Condition CR: $\rho$ is ramified at every prime $\ell\mid N^-$ with $\ell\equiv\pm1\pmod p$, and the residual representation $\rho_0$ is surjective. For every $j>0$, there are positive-vertex Heegner classes $\kappa_j(m)\in\operatorname{Sel}_{N^-m}(K,T_j)$ for admissible squarefree products $m\in\mathcal N_j^{\prime,+}$ and negative-vertex elements $\lambda_j(m)\in\Lambda/\mathfrak p^j\Lambda$ for $m\in\mathcal N_j^{\prime,-}$, where $\mathcal N_j^{\prime,+}$ and $\mathcal N_j^{\prime,-}$ are the two parity classes of the admissible level-raising products and $\mathcal L'_j$ is the set of admissible primes. They satisfy both explicit reciprocity laws:

1. If $mq_1q_2\in\mathcal N_j^{\prime,+}$ for distinct $q_1,q_2\in\mathcal L'_j$, then $\operatorname{loc}_{q_2}(\kappa_j(mq_1q_2))=\lambda_j(mq_1)$ under the fixed isomorphism $H^1_{\rm ord}(K_{q_1},T_j)\cong\Lambda/\mathfrak p^j\Lambda$.

2. If $mq\in\mathcal N_j^{\prime,-}$ for $q\in\mathcal L'_j$, then $\operatorname{loc}_{q}(\kappa_j(m))=\lambda_j(mq)$ under the fixed isomorphism $H^1_{\rm unr}(K_q,T_j)\cong\Lambda/\mathfrak p^j\Lambda$.

## Statement references

[[def-bipartite-heegner-euler-system]]

[Burungale–Castella–Kim, *A Proof of Perrin-Riou’s Heegner Point Main Conjecture*, §3 Theorem 3.3](https://arxiv.org/pdf/1908.09512)

## Authoring status

The local level-raising construction and both explicit-reciprocity arguments remain absent. The CM suppliers retain their explicit unresolved inputs. The current Poitou–Tate carrier contains a local argument through its stated dependencies; its former finite-S, Tor and topology proof gaps are not current blockers in that carrier. This does not supply the missing level-raising or reciprocity proofs, nor a choice-scope justification for using Poitou–Tate under this unqualified Statement. Local proof completion remains escalated.
