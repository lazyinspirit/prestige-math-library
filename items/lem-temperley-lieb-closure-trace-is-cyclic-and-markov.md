---
id: lem-temperley-lieb-closure-trace-is-cyclic-and-markov
kind: lemma
title: "The normalized closure trace is cyclic and satisfies the Markov rules"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 3
deps:
  - def-temperley-lieb-normalized-markov-trace-by-closure
  - def-temperley-lieb-diagram-category
  - thm-temperley-lieb-diagram-category-laws
  - lem-temperley-lieb-generators-satisfy-local-relations
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
sources:
  references:
    - title: "Joshua Chen, The Temperley-Lieb Categories and Skein Modules"
      url: "https://arxiv.org/pdf/1502.06845"
      locator: "§§2.1 and 5.1, PDF pp. 13–15 and 60–61: diagram closure, one-strand trace, and cyclicity."
    - title: "K. Iohara, G. I. Lehrer, and R. B. Zhang, The Jones Quotients of the Temperley-Lieb Algebras"
      url: "https://arxiv.org/pdf/1702.08128"
      locator: "§1.2, printed pp. 2–3: normalized Jones trace identities after translating their generator sign."
---

## Statement

For $\delta\in\mathbb C^\times$, the maps $\tau_n$ of [[def-temperley-lieb-normalized-markov-trace-by-closure]] satisfy

$$\tau_n(xy)=\tau_n(yx),\qquad \tau_{n+1}(x\otimes1)=\tau_n(x),\qquad \tau_{n+1}((x\otimes1)d_n)=\delta^{-1}\tau_n(x)$$

for every $n\ge0$ and $x,y\in\mathrm{TL}_n(\mathbb C,\delta)$ in the first two identities, and for every $n\ge1$ and $x\in\mathrm{TL}_n(\mathbb C,\delta)$ in the third identity, where $d_n$ is the elementary cup-cap diagram on the last two strands.

## Facts & Assumptions

**Given:** A nonzero loop value $\delta$, diagram closure, and stacking composition.

[F1] Stacking is associative, each closed component contributes $\delta$, and the elementary generator $d_n$ is a cap and cup on the last two positions ([[def-temperley-lieb-diagram-category]], [[thm-temperley-lieb-diagram-category-laws]], [[lem-temperley-lieb-generators-satisfy-local-relations]]).

[F2] $\tau_n(D)$ is $\delta^{-n}$ times the evaluation of the closed matching graph obtained by joining corresponding exterior endpoints ([[def-temperley-lieb-normalized-markov-trace-by-closure]]).

## Proof

**Proof technique:** Count the closed components in the glued matching graph.

1.1 For basis diagrams $D,E:n\to n$, the closed graph used to evaluate $\tau_n(DE)$ is obtained by placing the two layers in a cyclic order and joining the exterior endpoints. Cutting this cyclic graph between the $D$ and $E$ layers gives the graph for $\tau_n(ED)$ with the same components and the same number of closed loops. The normalizing power $\delta^{-n}$ is the same, so $\tau_n(DE)=\tau_n(ED)$. Bilinearity extends the identity to all $D,E$. [F1, F2, given, algebra]

2.1 In the closure of $x\otimes1$, the added vertical strand closes to one additional circle and is disjoint from the closed graph for $x$. Thus its loop count is $c(x)+1$, while the normalizing exponent changes from $-n$ to $-(n+1)$; the two powers of $\delta$ cancel and $\tau_{n+1}(x\otimes1)=\tau_n(x)$. [F1, F2, step 1.1, algebra]

3.1 In the closure of $(x\otimes1)d_n$, the last cap and cup connect the new boundary strand to the preceding strand and create no additional closed component. The normalization still gains one factor $\delta^{-1}$ from rank $n$ to rank $n+1$. Hence $\tau_{n+1}((x\otimes1)d_n)=\delta^{-1}\tau_n(x)$ on basis diagrams, and bilinearity gives it for every $x$. [F1, F2, step 2.1, algebra] ∎
