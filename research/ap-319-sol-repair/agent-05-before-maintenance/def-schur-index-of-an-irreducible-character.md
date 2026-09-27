---
id: def-schur-index-of-an-irreducible-character
kind: definition
title: "The Schur index of an irreducible character"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-character-field-and-field-of-definition, thm-scalar-extension-of-an-irreducible-finite-group-representation, lem-character-field-is-the-stabilizer-fixed-field, cor-cyclotomic-field-splits-a-finite-group]
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "Gabor Wiese, Galois Representations, Corollary 2.5.4"
      url: "https://r.jina.ai/https://math.uni.lu/wiese/notes/GalRep.pdf"
    - title: "Weizhe Zheng, Lectures on Algebra, Proposition 4.3.2"
      url: "https://server.mcm.ac.cn/~zheng/algebra.pdf"
---

## Definition

Let $\chi$ be an irreducible complex character of a finite group $G$, put
$K=\mathbb Q(\chi)$, and choose a finite cyclotomic splitting field $E/K$;
thus $K\subseteq E\subseteq\mathbb C$ and $E/K$ is finite Galois.
Proposition 4.3.2 in the cited notes of Zheng says that, as $V$ ranges over
the irreducible $K$-representations, the absolutely irreducible constituents
of $E\otimes_KV$ form a complete, nonrepeating list of the irreducible
$E$-representations, grouped into Galois orbits.  Consequently there is a
unique irreducible $K$-representation $V$, up to isomorphism, whose scalar
extension contains a representation affording $\chi$.  In the decomposition
from [[thm-scalar-extension-of-an-irreducible-finite-group-representation]],
write its common multiplicity as $m$.  The **Schur index of $\chi$ over $K$** is
$$m_K(\chi):=m.$$
The next lemma proves that enlarging the chosen finite Galois splitting field
does not change this integer; that is why this is a definition rather than an
auxiliary choice.
