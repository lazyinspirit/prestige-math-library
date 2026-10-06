---
id: "lem-axiomatic-cellular-boundaries-are-integral-incidence-matrices-with-coefficients"
kind: "lemma"
title: "Axiomatic cellular boundaries are integral incidence matrices with coefficients"
deps: ["lem-any-homology-theory-has-a-cellular-chain-complex-on-a-cw-pair", "lem-sphere-endomorphisms-act-by-the-same-integer-in-every-ordinary-theory", "def-incidence-number-of-two-cw-cells", "thm-cellular-boundary-is-the-incidence-degree-matrix"]
provenance:
  statement: "ai-altered"
  proof: "ai-altered"
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "May, A Concise Course in Algebraic Topology, 15§2, first theorem and arbitrary-coefficient paragraph p.119"
      url: "https://www.math.uchicago.edu/~may/CONCISE/ConciseRevised.pdf"
      locator: "15§2, first theorem and arbitrary-coefficient paragraph p.119"
status: published
origin: "pipeline"
proof_strategy: "Project the attaching boundary onto each target cell sphere and use natural suspension/cofiber boundaries and the sphere-action lemma. Arbitrary additivity gives column-finite direct sums. This supplies the coefficient-matrix step missing from a bare five-lemma proof."
---

## Statement

For a CW pair $(X,A)$, an ordinary theory $h$ with coefficient $G$, and chosen cell orientations, the complex $C_*^h(X,A)$ is canonically
$$C_*^{\mathrm{cell}}(X,A;\mathbb Z)\otimes G.$$
Its differential is the integral incidence matrix acting on $G$. In degree one the entries are signed terminal-minus-initial endpoints. The direct-sum matrices have finite support in each column.

## Facts & Assumptions

**Given:** The objects and hypotheses in the statement above.

[F1] For a CW pair $(X,A)$ and an ordinary theory $h$ with coefficient $G$, put $F_{-1}=A$ and $F_r=A\cup X^r$ for $r\ge0$. Set $$C_r^h(X,A)=h_r(F_r,F_{r-1})\quad(r\ge0),\qquad C_r^h=0\quad(r<0).$$ Each $C_r^h$ is the direct sum of copies of $G$ indexed by the relative $r$-cells. Define $d_0=0$ and for $r\ge1$ let $d_r$ be the triple boundary to $h_{r-1}(F_{r-1},A)$ followed by its map to $h_{r-1}(F_{r-1},F_{r-2})$. Then $d_{r-1}d_r=0$, naturally for cellular maps of CW pairs. ([[lem-any-homology-theory-has-a-cellular-chain-complex-on-a-cw-pair]])

[F2] Let $n\ge0$ and $u:S^n\to S^n$ be continuous. If $u_*$ on $\widetilde H_n(S^n;\mathbb Z)$ is multiplication by $d$, then $u_*$ on $\widetilde h_n(S^n)\cong G$ for every ordinary theory $h$ is $d\,\mathrm{id}_G$. The identifications use the same oriented sphere generator; for $n=0$ use the difference of the two point classes. ([[lem-sphere-endomorphisms-act-by-the-same-integer-in-every-ordinary-theory]])

[F3] For $n\ge2$ and oriented cells $e^n_\alpha$ and $e^{n-1}_\beta$, collapse the complement of $e^{n-1}_\beta$ in $X^{n-1}$ and compose the attaching map of $e^n_\alpha$ with the resulting quotient to $S^{n-1}$. Its induced endomorphism of oriented $\widetilde H_{n-1}(S^{n-1};\mathbb Z)$ is multiplication by a unique integer, denoted $[e^n_\alpha:e^{n-1}_\beta]$. For $n=1$, orient the characteristic interval of $e^1_\alpha$ from $-1$ to $+1$ and, for a vertex $v=e^0_\beta$, set $$[e^1_\alpha:v]=\mathbf 1_{\{\chi_\alpha(+1)=v\}}-\mathbf 1_{\{\chi_\alpha(-1)=v\}}.$$ Thus an oriented edge contributes its terminal vertex minus its initial vertex, and a loop with both endpoints at one vertex has incidence number zero there. ([[def-incidence-number-of-two-cw-cells]])

[F4] Let $X$ be a CW complex. For $n\geq1$, in the integral cellular chain groups with the chosen cell orientations, $$d_ne^n_\alpha=\sum_\beta[e^n_\alpha:e^{n-1}_\beta]e^{n-1}_\beta.$$ ([[thm-cellular-boundary-is-the-incidence-degree-matrix]])

## Proof

1.1 By F1 the chain groups are direct sums of copies of $G$ on relative cells. For a source $r$-cell and target $(r-1)$-cell with $r\ge2$, project the boundary homomorphism onto the target summand. Naturality of the characteristic disk pair identifies this component with the attaching map followed by collapse onto the target cell sphere and the natural disk boundary identifications. The corresponding integer for integral singular homology is precisely the incidence number of F3 and F4. [F1, F3, F4]

2.1 F2 says that this same sphere endomorphism acts on coefficient $G$ by that integer times the identity. For $r=1$, the boundary of the oriented interval is $(-g,g)$ at its two ends, so an edge contributes $g$ at the terminal vertex and $-g$ at the initial vertex. If the endpoints coincide they cancel; endpoints in $A$ vanish in the relative complex. [F2, F3, step 1.1]

3.1 Each characteristic boundary has image in the finite union of closed cells supplied by closure finiteness, so only finitely many target cells can contribute to its column. Thus these components define a map of direct sums. At degree zero the outgoing differential is zero. The bases and component calculations identify the entire complex with the displayed tensor complex, for arbitrary $G$, including $G=0$ and pairs with no relative cells. [F1, step 1.1, step 2.1] ∎
