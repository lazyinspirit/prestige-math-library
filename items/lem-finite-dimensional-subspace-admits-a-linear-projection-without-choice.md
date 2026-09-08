---
id: lem-finite-dimensional-subspace-admits-a-linear-projection-without-choice
kind: lemma
title: "Finite-dimensional subspaces admit projections without Choice"
status: published
origin: pipeline
pipeline_run: phase-2-wave-1
deps: [def-linear-map, thm-dimension-of-a-linear-subspace]
justified_by: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-09-09
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-08
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "Etingof et al., Introduction to Representation Theory"
      url: "https://math.mit.edu/~etingof/reprbook.pdf"
    - title: "Sheldon Axler, Linear Algebra Done Right, fourth edition"
      url: "https://linear.axler.net/LADR4e.pdf"
---

## Statement

For a subspace $U$ of a finite-dimensional $k$-vector space $V$, there is a linear $P:V\to V$ with $P^2=P$, $\operatorname{im}P=U$, and $P|_U=\operatorname{id}_U$. No choice axiom is required. This includes $U=0$ and $U=V$.

## Facts & Assumptions

**Given:** $V$ finite-dimensional over a field $k$, and $U\le V$.

[F1] Every independent subset of a subspace of a finite-dimensional space extends to a finite basis, without a choice principle ([[thm-dimension-of-a-linear-subspace]]).

[F2] Linearity means $P(av+bw)=aP(v)+bP(w)$ for all scalars and vectors ([[def-linear-map]]).

## Proof

**Proof technique:** direct.

1.1 Apply F1 to the empty independent subset of $U$ to obtain a finite basis $u_1,\ldots,u_r$. This is independent in $V$, so apply F1 with subspace $V$ to extend it to $u_1,\ldots,u_r,w_1,\ldots,w_s$. Every vector has an expansion in this basis; two expansions agree coefficientwise because their difference is a zero linear combination of an independent family. [F1]

2.1 Define $P(\sum_{j=1}^r a_j u_j+\sum_{\ell=1}^s b_\ell w_\ell)=\sum_{j=1}^r a_j u_j$. The uniqueness just proved makes $P$ a well-defined function $V\to V$. If $v,v'$ have $u$-coordinates $a_j,a'_j$, then $cv+dv'$ has $u$-coordinates $ca_j+da'_j$. Consequently $P(cv+dv')=\sum_j(ca_j+da'_j)u_j=cP(v)+dP(v')$, so $P$ is linear. [step 1.1, F2, algebra]

3.1 Each $P(v)$ belongs to $U$. For $u\in U$, its basis expression uses only the $u_j$, so $P(u)=u$. Thus every $u\in U$ is in the image, and $\operatorname{im}P=U$. Since $P(v)\in U$, also $P(P(v))=P(v)$. [step 1.1, step 2.1]

4.1 If $U=0$, then $r=0$ and the formula gives $P=0$. If $U=V$, no added vectors are needed and $P=\operatorname{id}_V$. If $V=0$, both lists are empty and these formulas coincide. Only two applications of the choice-free finite extension result and finite enumerations were used; no simultaneous choice over an infinite family occurs. [F1, step 1.1, step 2.1, step 3.1] ∎

## Sources

[Axler, Linear Algebra Done Right, 4e](https://linear.axler.net/LADR4e.pdf), 2.32–2.33, pp. 41–42. The local finite-basis supplier works over arbitrary fields, extending Axler’s real/complex convention. [Etingof et al.](https://math.mit.edu/~etingof/reprbook.pdf), Theorem 4.1.1 proof, p. 62, uses the resulting projection.
