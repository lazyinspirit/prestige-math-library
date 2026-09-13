---
id: lem-ma-reduction-to-small-ccc-orders
kind: lemma
title: Martin's Axiom reduces to small ccc orders
status: draft
origin: pipeline
deps: [def-martins-axiom, def-axiom-of-choice]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
sources:
  references:
    - {title: "Karagila, Forcing & Symmetric Extensions, Lemma 7.11", url: "https://karagila.org/files/Forcing-2023.pdf"}
---

## Statement

In ZFC, for every infinite cardinal $\kappa$, $\mathrm{MA}(\kappa)$ is equivalent to its restriction to ccc forcing orders of cardinality at most $\kappa$. A largest condition may be adjoined, and any such small order can be coded on a subset of a fixed set of cardinality $\kappa$.

## Facts & Assumptions

**Given:** AC, infinite $\kappa$, a ccc order $P$, and at most $\kappa$ dense sets.

[F1] [[def-martins-axiom]] defines $\mathrm{MA}(\kappa)$ for ccc orders and at most $\kappa$ dense sets. The reduction to small orders is proved below.

## Proof

1.1 Adjoin a largest condition if necessary. Starting with it, recursively form increasing sets $Q_n\subseteq P$ of size at most $\kappa$. To obtain $Q_{n+1}$, include all of $Q_n$; for every $q\in Q_n$ and every original dense $D$ choose one $d(q,D)\le q$ in $D$; and for every pair $q,r\in Q_n$ compatible in $P$, choose one common extension $s(q,r)\le q,r$. Put all these witnesses together with $Q_n$ into $Q_{n+1}$. AC supplies the simultaneous choices, and cardinal absorption preserves the size bound. Let $Q=\bigcup_nQ_n$. [F1]

2.1 Every $D\cap Q$ is dense in $Q$ by the first closure requirement. Compatibility between members of $Q$ is reflected in $Q$ by the second: once both occur at some $Q_n$, their chosen common extension lies in $Q_{n+1}$. Hence every antichain of $Q$ is an antichain of the ccc order $P$, so $Q$ is ccc. A filter on $Q$ meeting the intersections generates an upward-closed directed filter in $P$ meeting every original $D$. Therefore the small-order restriction implies full $\mathrm{MA}(\kappa)$; the converse is immediate. [F1, step 1.1]

3.1 Since $|Q|\le\kappa$, choose an injection $Q\hookrightarrow\kappa$ and transport the order to its image. The unused points of $\kappa$ are not forcing conditions; no duplicate largest elements are needed. This gives the fixed-domain coding used in bookkeeping without changing filters or ccc. [step 2.1] ∎
