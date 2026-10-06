---
id: def-limitwise-nullhomotopy-subgroup-of-a-leaf
kind: definition
title: "Limitwise-nullhomotopy subgroup of a leaf"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [def-limitwise-nullhomotopy-predicate-on-based-loops, lem-limitwise-nullhomotopy-predicate-descends-to-a-normal-subgroup, def-countable-choice-principle-for-foliation-pair]
justified_by: []
aliases: []
landmark: false
dependency_level: 9
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "S. P. Novikov, The Topology of Foliations (English translation by J. A. Zilber; complete PDF of the translation)"
      url: "https://homepage.mi-ras.ru/~snovikov/23.pdf"
      locator: "\u00a73, printed pp. 9\u201310 (Definition 3.1, Lemmas 3.1\u20133.2, and the definition of $\\Pi^j_1(A)$)"
---

## Definition

Assume Countable Choice $\mathrm{AC}_\omega$. For a transversely oriented codimension-
one foliation, a leaf $L$, a base point $x\in L$, and a side $j$, define $\Pi^j_1(L,x)$
to be the set of classes $[\alpha]\in N_j(L,x)$ for which the predicate $Q_j(f)$ of
[[def-limitwise-nullhomotopy-predicate-on-based-loops]] holds for a based representative
$f$. By [[lem-limitwise-nullhomotopy-predicate-descends-to-a-normal-subgroup]], this is
independent of the representative and fence and is a normal subgroup of $\pi_1(L,x)$. It
is Novikov’s limitwise-nullhomotopy subgroup, distinct from the ordinary limit-cycle
quotient $P_j$.
