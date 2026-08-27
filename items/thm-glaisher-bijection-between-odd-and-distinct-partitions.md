---
id: thm-glaisher-bijection-between-odd-and-distinct-partitions
kind: theorem
title: "Glaisher's bijection between odd-part and distinct-part partitions"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [def-partition-counting-functions-and-restricted-families]
justified_by: []
aliases: []
landmark: false
proof_strategy: bijection
verification:
  audited: 2026-08-28
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-27
sources:
  scraped: []
  references:
    - title: "Darij Grinberg, Enumerative Combinatorics: class notes"
      url: "https://www.cip.ifi.lmu.de/~grinberg/t/19fco/n/n.pdf"
    - title: "Stephen Melczer, An Invitation to Enumeration, Chapter 9: Integer Partitions"
      url: "https://enumeration.ca/extensions/partitions/"
pipeline_run: null
---

## Statement

For every integer $n \ge 0$, there is a bijection between partitions of $n$
into odd parts and partitions of $n$ into distinct parts.

## Facts & Assumptions

**Given:** an integer $n \ge 0$.

[F1] Partitions into odd parts and partitions into distinct parts are the two families counted by $p_{\mathrm{odd}}(n)$ and $p_{\mathrm{dist}}(n)$ ([[def-partition-counting-functions-and-restricted-families]]).

## Proof

**Proof technique:** bijection.

1.1 Let $\lambda$ be a partition of $n$ into odd parts. For each odd integer $m$, let $c_m$ be its multiplicity in $\lambda$, and write the binary expansion

$$c_m=\sum_{j \ge 0}\varepsilon_{m,j}2^j, \qquad \varepsilon_{m,j}\in\{0,1\}.$$

Define $G(\lambda)$ to contain the part $2^jm$ once for every pair $(m,j)$ with $\varepsilon_{m,j}=1$. Since

$$\sum_{j \ge 0}\varepsilon_{m,j}2^jm=m c_m,$$

the parts with odd core $m$ have the same total $m c_m$ before and after the
replacement. Summing over the odd cores shows that the total sum of the parts
of $G(\lambda)$ is still $n$. [F1, construct, algebra]

1.2 Conversely, let $\mu$ be a partition of $n$ into distinct parts. Write each part uniquely as $2^ju$ with $u$ odd, and replace it by $2^j$ copies of the odd part $u$. The resulting partition $H(\mu)$ has only odd parts and still sums to $n$. [F1, construct]

2.1 The parts of $G(\lambda)$ are distinct. Indeed, every positive integer has a unique expression $2^ju$ with $u$ odd, so two equal parts in $G(\lambda)$ would come from the same odd core $u$ and the same power $2^j$, hence from the same binary digit. [step 1.1]

3.1 The two constructions are inverse. Starting from $\lambda$, step 1.2 reconstructs from each part $2^jm$ of $G(\lambda)$ exactly the $2^j$ copies of $m$ encoded by the corresponding binary digit, so $H(G(\lambda))=\lambda$. Starting from $\mu$, step 1.1 groups together all parts with the same odd core and reassembles exactly the original powers of two, so $G(H(\mu))=\mu$. Therefore $G$ is a bijection. [step 1.1, step 2.1, step 1.2] ∎
