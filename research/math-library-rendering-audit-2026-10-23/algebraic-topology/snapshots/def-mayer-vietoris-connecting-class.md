---
id: def-mayer-vietoris-connecting-class
kind: definition
title: "Mayer–Vietoris connecting class"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [thm-mayer-vietoris-sequence-in-singular-homology]
justified_by: [lem-the-mayer-vietoris-connector-is-independent-of-small-chain-decomposition]
verification:
  audited: 2026-09-06
sources:
  references:
    - title: "Allen Hatcher, Algebraic Topology, §2.2"
      url: "https://pi.math.cornell.edu/~hatcher/AT/ATch2.pdf"
pipeline_run: frontier-31a
---

## Definition

Fix an abelian group $G$, an open cover $X=U\cup V$, and $n\ge1$. For a
cover-small $n$-cycle $z=u+v$ with $u\in C_n(U;G)$ and
$v\in C_n(V;G)$, define
$$\delta[z]:=[\partial u]=[-\partial v]\in H_{n-1}(U\cap V;G).$$
This is the connecting-class convention compatible with $i(c)=(c,-c)$.

Indeed, $\partial z=0$ implies $\partial u=-\partial v$. As a chain lying in both subcomplexes, this is a chain on $U\cap V$, and $\partial^2u=0$ makes it a cycle. For $n=1$ this uses the ordinary zero boundary on $0$-chains; if the overlap is empty the chain is zero.

The well-definedness obligation is discharged by [[lem-the-mayer-vietoris-connector-is-independent-of-small-chain-decomposition]]. Explicitly, replacing $(u,v)$ by another decomposition changes $u$ by an overlap chain and hence $\partial u$ by an overlap boundary. If $z'-z=\partial(a+b)$ in the small complex, where $a$ lies in $U$ and $b$ in $V$, then $u'-u-\partial a$ is an overlap chain and its boundary is $\partial u'-\partial u$. The cover-small homology identification used in [[thm-mayer-vietoris-sequence-in-singular-homology]] therefore makes this a class depending only on $[z]\in H_n(X;G)$. Lifting $z$ to $(u,v)$ gives boundary $(\partial u,-\partial u)=i(\partial u)$, so the sign agrees with that sequence.
