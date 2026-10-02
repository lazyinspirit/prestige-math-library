---
id: lem-a-compact-scalar-identity-forces-finite-dimension
kind: lemma
title: "A nonzero compact scalar identity forces finite dimension"
status: draft
origin: pipeline
pipeline_run: frontier-37-owner-30
deps: [def-hilbert-space, def-bounded-linear-operator, def-operator-norm, def-compact-linear-operator, lem-compositions-with-a-compact-operator-are-compact, thm-closed-unit-ball-compact-iff-finite-dimensional, lem-reverse-triangle-inequality-in-a-normed-space]
provenance:
  statement: literature-derived
  proof: literature-derived
proof_strategy: direct
verification:
  precheck: pass
sources:
  references:
    - title: "Vera Serganova, Representation Theory, Chapter III §§1.6–2.1"
      url: "https://math.berkeley.edu/~serganov/math252/Bookrep.pdf"
---

## Statement

Let $H$ be a real or complex Hilbert space
([[def-hilbert-space]]) and let $c$ be a nonzero scalar. If the scalar operator
$cI_H$ is a compact operator
([[def-compact-linear-operator]]), then $H$ is finite dimensional: it admits an
ordered basis of finite length. This implication is choice free.

## Facts & Assumptions

**Given:** a real or complex Hilbert space $H$, a nonzero scalar $c$, and the
assumption that $cI_H$ is compact.

[F1] A linear operator $T$ is compact exactly when the closure of
$T(\overline B)$ is compact, where $\overline B=\{x:\|x\|\le1\}$ is the closed
unit ball. ([[def-compact-linear-operator]])

[F2] If $T$ is compact and $A$ is bounded, then the composite $TA$ is compact.
([[lem-compositions-with-a-compact-operator-are-compact]])

[F3] A normed space $X$ has compact closed unit ball if and only if $X$ admits
an ordered basis of finite length. ([[thm-closed-unit-ball-compact-iff-finite-dimensional]])

[F4] For all vectors $x,y$ of a normed space, $\bigl|\,\|x\|-\|y\|\,\bigr|\le\|x-y\|$.
([[lem-reverse-triangle-inequality-in-a-normed-space]])

[F5] The scalar operator $c^{-1}I_H$ is bounded, with $\|c^{-1}I_H\|\le|c|^{-1}$, including $H=\{0\}$.
([[def-bounded-linear-operator]], [[def-operator-norm]])

## Proof

**Proof technique:** direct.

1.1 The scalar operator $c^{-1}I_H$ satisfies $\|c^{-1}I_Hx\|=|c|^{-1}\|x\|$ for every $x\in H$, so it is bounded with bound $|c|^{-1}$ so its operator norm is at most $|c|^{-1}$, including when $H=\{0\}$. [F5, algebra]

1.2 The closed unit ball $\overline B$ is closed in $H$: if $\|x\|>1$, put $r=\|x\|-1>0$. Whenever $\|y-x\|<r$, [F4] gives $\|y\|\ge\|x\|-\|y-x\|>1$, so the open ball of radius $r$ about $x$ is disjoint from $\overline B$. Its complement is therefore open. [F4]

2.1 The composite $(cI_H)\circ(c^{-1}I_H)$ is compact by [F2], applied with the compact operator $cI_H$ and the bounded operator $c^{-1}I_H$; this composite is the identity $I_H$. [F2, step 1.1]

3.1 By [F1] applied to $I_H$, the closure of $I_H(\overline B)=\overline B$ in $H$ is compact. By step 1.2 the ball $\overline B$ is closed, so this closure is $\overline B$ itself; hence $\overline B$ is a compact subset of $H$. [F1, step 1.2, step 2.1]

4.1 By [F3] applied to the normed space $H$, compactness of $\overline B$ means that $H$ admits an ordered basis of finite length, that is, $H$ is finite dimensional. [F3, step 3.1] ∎
