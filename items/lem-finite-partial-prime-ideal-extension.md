---
id: lem-finite-partial-prime-ideal-extension
kind: lemma
title: "Extension of finite partial prime-ideal diagrams"
status: draft
origin: pipeline
deps: [def-finite-partial-prime-ideal-diagrams]
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-14
sources:
  references:
    - title: "Tressl, Stone Duality for Boolean Algebras, §2.2, pp. 4–8; finite atom argument"
      url: https://personalpages.manchester.ac.uk/staff/Marcus.Tressl/papers/StoneDualityBooleanAlgebras.pdf
justified_by: []
forward_refs: []
proof_strategy: finite-boolean-algebra
---

## Statement

Let $A\subseteq C$ be finite Boolean subalgebras of a Boolean algebra $B$.
Every homomorphism $e:A\to\mathbf2$ extends to a homomorphism
$e':C\to\mathbf2$.  Consequently every finite partial prime-ideal diagram
extends across any prescribed finite subset of $B$.

## Facts & Assumptions

**Given:** The finite subalgebras $A\subseteq C\subseteq B$ and a homomorphism $e:A\to\mathbf2$.

[F1] A finite partial prime-ideal diagram is a homomorphism on its whole finite subalgebra, and finite generated subalgebras have nonzero cells as atoms. [[def-finite-partial-prime-ideal-diagrams]]

## Proof

1.1 The finitely many atoms of $A$ have join $1$.  At least one has $e$-value $1$, since $e(1)=1$; at most one does, since distinct atoms have meet $0$ whereas two value-$1$ atoms would have meet of value $1$.  Let $a$ be this unique atom. [F1, given, choose]

2.1 The atoms of $C$ below $a$ have join $a$: intersect the atomic decomposition of $1_C$ with $a$.  Because $a\ne0$, at least one such $C$-atom $c$ is nonzero.  This chooses one element from one finite nonempty set, not a choice function on a family. [F1, step 1.1, choose]

3.1 Define $e'(x)=1$ exactly when $c\le x$.  Since $c$ is an atom, it lies below exactly one of $x,\neg x$, and $c\le x\wedge y$ exactly when both $c\le x$ and $c\le y$; hence $e'$ preserves $0,1,\neg,\wedge$, and therefore $\vee$.  Thus $e':C\to\mathbf2$ is a Boolean homomorphism. [F1, step 2.1, construct]

4.1 For $x\in A$, the selected $A$-atom $a$ lies below exactly one of $x,\neg x$, and $c\le a$.  If $e(x)=1$, uniqueness in step 1.1 forces $a\le x$, hence $e'(x)=1$; if $e(x)=0$, then $e(\neg x)=1$, so $a\le\neg x$ and $e'(x)=0$.  Therefore $e'|A=e$. [step 1.1, step 2.1, step 3.1]

5.1 Given a finite $F\subseteq B$, take $C=\langle A\cup F\rangle$.  The cell description makes $C$ finite, step 4.1 extends the original diagram to $C$, and its domain contains $F$; this is precisely extension across $F$. It is not called a diagram deciding $F$, because the preceding definition reserves that phrase for a diagram whose domain is exactly $\langle F\rangle$. [F1, step 4.1] ∎
