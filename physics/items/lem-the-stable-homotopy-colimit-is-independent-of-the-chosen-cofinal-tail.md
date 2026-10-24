---
id: lem-the-stable-homotopy-colimit-is-independent-of-the-chosen-cofinal-tail
kind: lemma
title: Stable homotopy colimits are independent of a cofinal tail
status: published
origin: pipeline
deps: ["def-stable-homotopy-groups-of-a-sequential-prespectrum", "def-limit-and-colimit-of-a-diagram"]
proof_strategy: direct
verification:
  audited: 2026-09-14
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: J. P. May, A Concise Course in Algebraic Topology
      url: https://web.archive.org/web/20220823180711if_/http://www.math.uchicago.edu/~may/CONCISE/ConciseRevised.pdf
      locator: Chapter 22, Section 2, printed pages 176--177
---

## Statement

Let $n_0\geq0$, and let
$A_{n_0}\to A_{n_0+1}\to A_{n_0+2}\to\cdots$ be the sequential group
system used to define a stable homotopy group. For every $N\geq n_0$,
inclusion of the tail
induces a canonical group isomorphism

$$ \operatorname*{colim}_{n\geq N}A_n \xrightarrow{\ \cong\ } \operatorname*{colim}_{n\geq n_0}A_n. $$

In particular, deleting finitely many legal terms from the system defining
$\pi_k(E)$ does not change the resulting group.

## Facts & Assumptions

[F1] In the disjoint-union quotient model, $[n,x]=[m,y]$ exactly when the two elements have equal images at some common later stage ([[def-stable-homotopy-groups-of-a-sequential-prespectrum]]).

[F2] Every finite set of natural-number indices has a common later index.

## Proof

**Given:** The sequential group system, legal initial cutoff $n_0$, and tail index $N\geq n_0$ in the statement.

1.1 **Surjectivity.** A class $[n,x]$ in the colimit beginning at $n_0$ has the same value as $[N,b_{N-1}\cdots b_nx]$ if $n<N$, and already has a representative in the tail if $n\geq N$. Hence every class comes from the tail. [F1, F2]

1.2 **Injectivity.** Suppose two tail representatives have the same image in the colimit beginning at $n_0$. By [F1], their images agree at a common stage $r$. Replace $r$ by $\max(r,N)$ if needed. This witnesses their equality using only the tail relation, so the tail map is injective. [F1]

1.3 **Group structure and canonicity.** The inclusion respects bonding maps, hence respects addition on common-stage representatives. Its inverse is forced by advancing a representative into the tail; [F1] shows that this is independent of the chosen later stage. Thus the isomorphism is canonical. [F1]

$\square$
