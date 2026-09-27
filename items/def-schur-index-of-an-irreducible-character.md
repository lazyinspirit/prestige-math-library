---
id: def-schur-index-of-an-irreducible-character
kind: definition
title: "The Schur index of an irreducible character"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-character-field-and-field-of-definition, thm-scalar-extension-of-an-irreducible-finite-group-representation, lem-character-field-is-the-stabilizer-fixed-field, cor-cyclotomic-field-splits-a-finite-group, thm-galois-orbits-classify-simple-modules-after-splitting-base-change, def-axiom-of-choice]
verification:
  verified:
    model: gpt-6-sol
    verdict: locally-reviewed
    date: '2026-09-23'
    scope: Owner-authorized bounded mathematical repair review; evidence research/ap-319-sol-repair/agent-05-receipts.jsonl (def-schur-index-of-an-irreducible-character). No independent judge or whole-closure certification.
    delegated_by: owner
sources:
  references:
    - title: "Gabor Wiese, Galois Representations, Corollary 2.5.4"
      url: "https://r.jina.ai/https://math.uni.lu/wiese/notes/GalRep.pdf"
    - title: "Weizhe Zheng, Lectures on Algebra, Proposition 4.3.2"
      url: "https://server.mcm.ac.cn/~zheng/algebra.pdf"
---

## Definition

Assume the Axiom of Choice (ZFC). Let $\chi$ be an irreducible complex character of a finite group $G$, put
$K=\mathbb Q(\chi)$, and choose a finite cyclotomic splitting field $E/K$;
thus $K\subseteq E\subseteq\mathbb C$ and $E/K$ is finite Galois.
The finite-group specialization of
[[thm-galois-orbits-classify-simple-modules-after-splitting-base-change]]
applies to $K[G]$ and $E[G]$: it matches simple $K[G]$-modules bijectively
with Galois orbits of simple $E[G]$-modules, and each orbit occurs in the
extension of exactly one simple $K[G]$-module. Thus there is a unique
irreducible $K$-representation $V$, up to isomorphism, whose scalar extension
contains a representation affording $\chi$. In the decomposition
from [[thm-scalar-extension-of-an-irreducible-finite-group-representation]],
write its common multiplicity as $m$.  The **Schur index of $\chi$ over $K$** is
$$m_K(\chi):=m.$$
The next lemma proves that enlarging the chosen finite Galois splitting field
does not change this integer; that is why this is a definition rather than an
auxiliary choice.
