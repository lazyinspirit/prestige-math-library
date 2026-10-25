---
id: def-forcing-preorder-compatibility-and-filter
kind: definition
title: Forcing preorders, compatibility and filters
status: published
origin: pipeline
deps: []
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  audited: 2026-09-12
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  references:
    - title: "Neeman, Forcing (Math 223S, 2011), Definitions 1.12–1.13, p. 3; nonemptiness convention made explicit"
      url: https://www.math.ucla.edu/~ineeman/223s.1.11s/223s-spring11-lecture-notes-6-5.pdf
---

## Definition

A **forcing preorder** $(P,\le)$ is a nonempty set with a reflexive transitive relation. The convention is that $q\le p$ means $q$ is stronger than $p$; antisymmetry is not required. Conditions $p,q$ are **compatible** if there exists $r\in P$ with $r\le p$ and $r\le q$. They are **incompatible**, written $p\perp q$, if there is no such $r$.

A **forcing filter** is a nonempty subset $G\subseteq P$ that is upward closed and internally downward directed: if $p\in G$ and $p\le q$, then $q\in G$; if $p,q\in G$, some $r\in G$ satisfies $r\le p,q$. In particular the empty subset is not a forcing filter. A subset $D\subseteq P$ is **dense** when for every $p\in P$ there exists $q\in D$ with $q\le p$.

There need not be a weakest condition, binary meets, or a zero condition. The directedness condition does not presume a meet operation or demand closure under a nonexistent operation. No genericity requirement is included in the definition of a forcing filter. All conventions are over ZF.
