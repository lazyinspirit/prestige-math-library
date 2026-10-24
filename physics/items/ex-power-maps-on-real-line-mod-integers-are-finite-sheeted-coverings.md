---
id: ex-power-maps-on-real-line-mod-integers-are-finite-sheeted-coverings
kind: example
title: "The maps $[x]\\mapsto[mx]$ on $\\mathbb R/\\mathbb Z$ are $m$-sheeted coverings for $m\\ge1$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [ex-real-line-mod-integer-translations-is-a-covering, def-covering-map-and-evenly-covered-neighbourhoods, prop-number-of-sheets-is-locally-constant, def-integers, thm-division-algorithm-in-z]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  verified:
    model: "gpt-6-sol"
    verdict: "locally-reviewed"
    date: 2026-09-26
    scope: "Current item-local mathematical content and used-supplier-interface review, as documented in the bound evidence; no whole-closure claim; no new judge claim."
    delegated_by: "owner"
sources:
  scraped: []
  references:
    - title: "Allen Hatcher, Algebraic Topology, §1.3"
      url: "https://pi.math.cornell.edu/~hatcher/AT/AT.pdf"
    - title: "Marco Gualtieri, MAT1300 Week 4 Term 2, §1.6"
      url: "https://www.math.toronto.edu/mgualt/MAT1300/Week%204%20Term%202.pdf"
    - title: "Omar Antolín Camarena, Proper local homeomorphisms and covering maps"
      url: "https://www.matem.unam.mx/~omar/notes/propetale.html"
pipeline_run: null
---

## Example

For every integer $m\ge1$, the map $P_m:\mathbb R/\mathbb Z\to\mathbb R/\mathbb Z$ given by $P_m([x])=[mx]$ is a well-defined $m$-sheeted covering.

## Facts & Assumptions

**Given:** The objects, hypotheses, and choice principles stated above.

[F1] For the quotient by integer translation, $q:\mathbb R\to\mathbb R/\mathbb Z$ is a covering map, and every deck transformation is a unique translation $x\mapsto x+n$ with $n\in\mathbb Z$. ([[ex-real-line-mod-integer-translations-is-a-covering]]).

[F2] A **covering map** is a continuous surjection $p:E\to B$ such that every $b\in B$ has an open neighbourhood $U$ for which $p^{-1}(U)$ is a disjoint union of open sets $V_j$, called **sheets**, and each restriction $p|_{V_j}:V_j\to U$ is a homeomorphism (def-continuous-map-top, def-homeomorphism-and-open-maps, def-disjoint-union-topology). Such a $U$ is **evenly covered**, and $p^{-1}(b)$ is the **fibre** over $b$. A covering is **trivial** when it is isomorphic over $B$ to a product projection $B\times F\to B$ with $F$ discrete. ([[def-covering-map-and-evenly-covered-neighbourhoods]]).

[F3] For a covering $p:E\to B$, the cardinality of $p^{-1}(b)$ is locally constant as a function of $b\in B$. If $B$ is connected, all fibres are equinumerous. ([[prop-number-of-sheets-is-locally-constant]]).

[F4] On the set $\mathbb{N} \times \mathbb{N}$ of pairs of natural numbers, define $$(a,b) \sim (c,d) \iff a + d = b + c.$$ This is an equivalence relation (lem-int-equivalence). The **integers** are the quotient $$\mathbb{Z} := (\mathbb{N} \times \mathbb{N}) / \sim,$$ and we write $[(a,b)]$ for the equivalence class of $(a,b)$. ([[def-integers]]).

[F5] Let $a,b\in\mathbb Z$ with $b>0$. Then there exist integers $q$ and $r$ with $a=qb+r$ and $0\le r<b$, and this pair is unique ([[thm-division-algorithm-in-z]]).

## Verification

**Proof technique:** direct.

1.1 If $[x]=[x+n]$ with $n\in\mathbb Z$, then $[m(x+n)]=[mx]$, so $P_m$ is well defined. Since $P_m\circ q=q\circ(x\mapsto mx)$ and $q$ is a quotient map, $P_m$ is continuous. It is surjective because $P_m([y/m])=[y]$. [given, F1]

2.1 Fix $[a]$ and choose $I=(a-\delta,a+\delta)$ with $0<\delta<1/2$. The quotient map $q$ is open, since $q^{-1}(q(O))=\bigcup_{n\in\mathbb Z}(O+n)$ is open for every open $O\subseteq\mathbb R$. Thus $U=q(I)$ is open, and $q|_I$ is a homeomorphism onto $U$. For $0\le r<m$, put $V_r=q((I+r)/m)$. Each $V_r$ is open, and $P_m|_{V_r}$ is a homeomorphism onto $U$, with inverse $q(u)\mapsto q((u+r)/m)$ for $u\in I$. If points from $V_r$ and $V_s$ coincide, then $u-v+r-s$ is a multiple of $m$ for some $u,v\in I$. Since $|u-v|<1$ and $r-s$ is an integer between $-(m-1)$ and $m-1$, this forces $r=s$ and $u=v$. Finally, if $P_m([x])\in U$, then $mx=u+n$ for some $u\in I$ and $n\in\mathbb Z$; write $n=km+r$ with $0\le r<m$ by [F5], giving $[x]\in V_r$. Hence $P_m^{-1}(U)$ is the disjoint union of exactly $m$ sheets. [F1, F2, F5, step 1.1]

3.1 At $m=1$ the map is the identity, so no zero-sheet or division-by-zero case is hidden. [step 2.1]

4.1 The preceding construction and implications establish the assertion. [step 3.1] ∎
