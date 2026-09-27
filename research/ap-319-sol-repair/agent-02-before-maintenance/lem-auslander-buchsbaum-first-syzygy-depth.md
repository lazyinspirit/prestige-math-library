---
id: "lem-auslander-buchsbaum-first-syzygy-depth"
kind: "lemma"
title: "auslander buchsbaum first syzygy depth"
deps: ["def-projective-dimension-of-an-object", "thm-depth-lemma"]
sources:
  references:
    - title: "Theorem 1.53, final induction step, p.25"
      url: "https://jack-jeffries.github.io/UM/LCnotes.pdf"
provenance:
  statement: literature-derived
  proof: ai-altered
status: published
origin: "pipeline"
proof_strategy: "Explicit algebraic derivation"
---

## Statement

In a minimal presentation $0\to K\to F\to M\to0$ of a nonzero finite module over a nonzero Noetherian local ring, let $n=\operatorname{pd}M\ge2$ be finite. If $\operatorname{depth}K=\operatorname{depth}R-(n-1)$, then $\operatorname{depth}M=\operatorname{depth}K-1$.

## Facts & Assumptions

**Given:** The objects and hypotheses in the statement.

[F1] A free module has projective dimension zero ([[def-projective-dimension-of-an-object]]).

[F2] [[thm-depth-lemma]]: Let $(R,\mathfrak m)$ be a Noetherian local ring and $0\to A\to B\to C\to0$ a short exact sequence of finite $R$-modules. With $a=\operatorname{depth}_R(A)$, $b=\operatorname{depth}_R(B)$, and $c=\operatorname{depth}_R(C)$, $$b\ge\min\{a,c\},\qquad a\ge\min\{b,c+1\},\qquad c\ge\min\{a-1,b\}.$$ The last inequality is vacuous when $a=0$.

## Proof

1.1 The presentation has $F\ne0$ because $M\ne0$. If $K=0$, then $M\cong F$ is free and has projective dimension zero by [F1], contrary to $n\ge2$. Thus $K\ne0$; it is finite as a submodule of the finite module $F$ over the Noetherian ring $R$. Write $a=\operatorname{depth}K$, $b=\operatorname{depth}F=\operatorname{depth}R$, and $c=\operatorname{depth}M$. The equality for $F$ follows since an element is injective on a nonzero finite direct sum of $R$ exactly when it is injective on $R$, also after successive quotients. The hypothesis gives $a=b-(n-1)<b$. [F1, given, algebra]

2.1 The depth inequality $a\ge\min(b,c+1)$ forces $c+1\le a$, since $b>a$. In particular $a\ge1$. The other inequality $c\ge\min(a-1,b)=a-1$ now applies and yields $c=a-1$. This uses only the stated depth hypothesis on $K$, not the formula being proved by induction later. [F2, step 1.1, algebra] ∎
