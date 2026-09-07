---
id: cor-well-founded-pointed-graphs-have-unique-decorations
kind: corollary
title: "Well-founded pointed graphs have unique decorations"
status: published
origin: pipeline
deps: ["def-accessible-pointed-membership-graphs", "def-extensional-relation-and-collapse-map", "prop-transitive-closure-minimality", "thm-mostowski-collapse-for-extensional-relations"]
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Kozen and Ruozzi, Applications of Metric Coinduction (2009) \u2014 section 6 APG paragraph p.10; Marks 6.11 p.32."
      url: "https://lmcs.episciences.org/1168/pdf"
---

## Statement

Every well-founded accessible pointed graph $(X,R,r)$ has a unique decoration $d$. Its range is $\operatorname{TC}(\{d(r)\})$. If $R$ is extensional, $d$ is the unique isomorphism from $(X,R)$ onto membership on that transitive set.

## Facts & Assumptions

**Given:** Work in ZF unless the statement explicitly weakens or supplements it; fix the objects and hypotheses of the statement.

[F1] An accessible pointed graph consists of a set $X$ of nodes, a root $r\in X$, and a relation $R\subseteq X^2$. Draw an arrow $x\to y$ precisely when $yRx$. Accessibility means that for every $x\in X$ there are $n\in\omega$ and a function $p:n+1\to X$ with $p(0)=r$, $p(n)=x$, and $p(i+1)Rp(i)$ for $i<n$. The path of length zero reaches the root. A decoration is a set function $d$ on $X$ such that $d(x)=\{d(y):yRx\}$ for each node. A well-founded graph means that $R$ has the minimal-element property, not an unqualified no-infinite-path characterization. Extensionality is not part of the graph definition. No axiom of anti-foundation is assumed. Conventions and prerequisites: def-well-founded-setlike-relations. ([[def-accessible-pointed-membership-graphs]])

[F2] A setlike relation $R$ on $X$ is extensional when $\operatorname{pred}_R(x)=\operatorname{pred}_R(y)$ implies $x=y$ for $x,y\in X$. If $R$ is also well-founded, its collapse map is the unique definable function $$\pi(x)=\{\pi(y):yRx\}.$$ Existence and uniqueness follow from well-founded recursion with $G(x,h)=\operatorname{ran}(h)$, a set by Replacement. A collapse map is defined even without extensionality; injectivity is a further conclusion requiring extensionality. The construction for a supplied well-founded relation uses no ambient Foundation. Conventions and prerequisites: thm-recursion-on-well-founded-setlike-relations. ([[def-extensional-relation-and-collapse-map]])

[F3] For every set $a$, $\operatorname{TC}(a)$ is transitive, contains $a$ as a subset, and is contained in every transitive set $T$ with $a\subseteq T$. Moreover $a\subseteq b$ implies $\operatorname{TC}(a)\subseteq\operatorname{TC}(b)$, and $\operatorname{TC}(\operatorname{TC}(a))=\operatorname{TC}(a)$. In particular $a\in\operatorname{TC}(\{a\})$. ([[prop-transitive-closure-minimality]])

[F4] Every well-founded setlike extensional relation $R$ on a definable class $X$ is isomorphic to membership on a unique transitive definable class $Y$, by a unique definable isomorphism $\pi:X\to Y$. For a set domain $X$, the isomorphism and its image are sets. This holds without ambient Foundation. ([[thm-mostowski-collapse-for-extensional-relations]])

## Proof

1.1 The collapse recursion, which does not require extensionality for existence, supplies a unique decoration on the set $X$. Its range $D$ is transitive by the recursion equation and contains $d(r)$ as an element, so minimality gives $\operatorname{TC}(\{d(r)\})\subseteq D$. [F2, F3]

2.1 Every node $x$ is reached from $r$ by a finite predecessor path. Along this path the decoration of each next node is a member of the decoration of the preceding node. Transitivity therefore puts $d(x)$ in $\operatorname{TC}(\{d(r)\})$, starting with the root itself at path length zero. This gives the reverse inclusion. [F1, F3, step 1.1]

3.1 When $R$ is extensional, Mostowski collapse makes the same decoration an isomorphism, unique among isomorphisms onto transitive targets. Step 2.1 identifies that target explicitly. [F4, step 2.1] ∎
