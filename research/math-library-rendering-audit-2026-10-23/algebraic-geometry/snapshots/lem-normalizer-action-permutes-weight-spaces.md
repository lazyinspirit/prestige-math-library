---
id: lem-normalizer-action-permutes-weight-spaces
kind: lemma
title: "The normalizer of the torus permutes weight spaces"
status: published
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 28
deps: [def-axiom-of-choice, def-root-datum-of-a-split-reductive-group, def-roots-and-root-groups-of-a-split-reductive-group, def-weight-and-dominant-weight-of-a-rational-representation, thm-weyl-group-borel-chambers]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "J. S. Milne, Algebraic Groups (corrected 2022 printing, Cambridge University Press)"
      url: "https://www.jmilne.org/math/Books/iAG2022.pdf"
      locator: "Ch. 22 (22.15), printed p. 467"
    - title: "Robert Steinberg, Lectures on Chevalley Groups (Yale University, 1967; notes prepared by J. Faulkner and R. Wilson)"
      url: "https://math.soimeme.org/~arunram/Resources/YaleNotes.pdf"
      locator: "Ch. 12, Lemma 73 preamble"
---
## Statement

Assume the Axiom of Choice inherited from the named suppliers. Let $(V,r)$ be a
rational representation of a split reductive group $(G,T)$ and let
$n\in N_G(T)(R)$ for a $k$-algebra $R$. If $v\in V_\lambda$, then $n\cdot(v\otimes1)\in(V\otimes_kR)_{n\lambda}$, where $n\lambda:T_R\to\mathbf G_{m,R}$ is the character $t\mapsto\lambda(n^{-1}tn)$, tested over every $R$-algebra. If $R$ is disconnected, this character can vary between components; the target denotes its eigensubmodule over $R$. Consequently, for every $w\in W(G,T)$ the weight spaces
$V_\lambda$ and $V_{w\lambda}$ have the same dimension, and the set of weights
of $(V,r)$ is stable under $W$
([[thm-weyl-group-borel-chambers]],
[[def-root-datum-of-a-split-reductive-group]]).

## Facts & Assumptions

**Given:** A rational representation $(V,r)$ of the split reductive group
$(G,T)$, a weight vector $v\in V_\lambda$ and a point $n\in N_G(T)(R)$ for a
$k$-algebra $R$.

[F1] *The character $n\lambda$.* For $n\in N_G(T)(R)$ the assignment
$t\mapsto\lambda(n^{-1}tn)$ is a character $n\lambda\in X(T)_R$ of $T_R$: it is
a morphism in $t$ and multiplicative because conjugation is a group
homomorphism ([[def-root-datum-of-a-split-reductive-group]],
[[def-weight-and-dominant-weight-of-a-rational-representation]]).

[F2] *Weight vectors.* For $t\in T(R)$ and $v\in V_\lambda$ one has
$t\cdot v=\lambda(t)v$, and the weight spaces are the eigenspaces of the
$T$-action ([[def-weight-and-dominant-weight-of-a-rational-representation]]).

[F3] *Weyl group.* $W(G,T)=N_G(T)(k)/T(k)$, and every $w\in W$ has
representatives $n\in N_G(T)(k)$ and $n^{-1}$ for $w^{-1}$
([[thm-weyl-group-borel-chambers]],
[[def-root-datum-of-a-split-reductive-group]]).

## Proof

**Proof technique:** direct.

1.1 For $t\in T(R)$ one computes $t\cdot(n\cdot v)=n\cdot((n^{-1}tn)\cdot v)=n\cdot(\lambda(n^{-1}tn)v)=\lambda(n^{-1}tn)\,(n\cdot v)=(n\lambda)(t)\,(n\cdot v)$ in $V_R$: the first equality uses that the action is a left action and $n^{-1}tn\in T(R)$, and the second uses [F2] and $R$-linearity of the action of $n$. Hence $n\cdot(v\otimes1)$ belongs to the stated eigensubmodule of $V\otimes_kR$, with the calculation valid over every $R$-algebra. [F1, F2, given]

2.1 Applying step 1.1 to $n\in N_G(T)(R)$ gives a bijection $V_\lambda\otimes_kR\to(V\otimes_kR)_{n\lambda}$, $v\mapsto n\cdot v$, with inverse given by $n^{-1}$; taking $R=k$ and representatives of $w$ shows $\dim_kV_\lambda=\dim_kV_{w\lambda}$ for every $w\in W$. [F3, step 1.1]

3.1 Since $V_\chi\ne0$ exactly for the weights of $V$, step 2.1 shows that the set of weights is stable under the action $w\colon\lambda\mapsto w\lambda$ of $W$. [step 2.1]

4.1 Steps 1.1, 2.1 and 3.1 establish the three assertions. [step 1.1, step 2.1, step 3.1] ∎ 