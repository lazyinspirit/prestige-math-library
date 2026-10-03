---
id: lem-artins-product-cancellation-dichotomy
kind: lemma
title: "Artin's product-cancellation dichotomy"
status: draft
origin: pipeline
pipeline_run: frontier-38-owner-30
dependency_level: 4
deps: [def-peripheral-boundary-preserving-automorphism-of-f-n, def-artin-automorphisms-of-the-free-group, thm-reduced-words-form-the-free-group, def-free-group]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
sources:
  references:
    - title: "Emil Artin, Theory of Braids, Annals of Mathematics 48 (1947), pp. 101-126, the proof of Theorem 16 before and in case 1, printed pp. 113-114"
      url: "https://www.maths.ed.ac.uk/~v1ranick/papers/artinbraids.pdf"
    - title: "Juan Gonzalez-Meneses, Basic results on braid groups, section 1.6, printed pp. 9-10"
      url: "https://arxiv.org/pdf/1010.0321"
---

## Statement

Let $A$ be peripheral-boundary-preserving, and write
$T_j=A(x_j)=Q_j^{-1}x_{\pi(j)}Q_j$ as reduced words, with
$T_1\cdots T_n=x_1\cdots x_n$. In particular the displayed conjugator
expressions have no internal cancellation. Exactly one of the following holds:

1. No maximal junction cancellation of two adjacent factors cancels a
   middle letter. Then every $Q_j$ is empty, $\pi$ is the identity, and
   $A=\operatorname{id}$.
2. Some adjacent pair has such a cancellation. Choose the least index $i$
   with this property and stop its junction cancellation at the first
   cancelled middle letter. Put $a=x_{\pi(i)}$, $b=x_{\pi(i+1)}$,
   $U=Q_i$, and $V=Q_{i+1}$. If the left middle letter $a$ is cancelled first,
   then $V=R a U$ as a reduced concatenation; if the right middle letter $b$
   is cancelled first, then $U=R b^{-1}V$ as a reduced concatenation.

Here cancelling a middle letter means deleting it with its inverse, not
merely exposing it. The first cancelled middle letter is defined for the
chosen junction; no order-independent first cancellation is asserted.

## Facts & Assumptions

**Given:** The reduced conjugator expressions above and the exact product identity, with the peripheral and boundary conventions of [[def-peripheral-boundary-preserving-automorphism-of-f-n]].

[F1] The product identity follows from the homomorphism and boundary condition ([[def-peripheral-boundary-preserving-automorphism-of-f-n]], [[def-free-group]]).

[F2] Free reduction deletes adjacent inverse pairs, and the resulting reduced word is unique ([[thm-reduced-words-form-the-free-group]]).

## Proof

1.1 *A first middle cancellation must come from original neighbours.* Reduce the whole product by deleting adjacent inverse pairs, for example always the leftmost available pair. Before the first middle letter is cancelled, every factor retains its middle letter and therefore has a nonempty residue. Its surviving letters form an interval of the original reduced factor: a deletion inside such an interval is impossible, so deletions take place only at residue boundaries. No factor has disappeared, and these boundaries are between original neighbours. To cancel the left middle letter at the boundary of $T_i,T_{i+1}$, all of $Q_i$ on its right must first cancel against the initial letters of $Q_{i+1}^{-1}$; those letters cannot have been removed at the other boundary without first cancelling the right middle letter. The corresponding assertion holds for cancellation of the right middle letter. Thus any first middle cancellation in the whole product also occurs in a junction cancellation of an original adjacent pair. [F1, F2, construct]

2.1 *If no adjacent pair cancels a middle letter.* Step 1.1 shows that no middle letter is cancelled in the whole reduction. All $n$ middle letters therefore survive in its final word $x_1\cdots x_n$ of length $n$, leaving no conjugator letters and forcing their order to be $x_1,\dots,x_n$. The initial $Q_1^{-1}$ cannot be deleted: it is reduced, has no factor on its left, and cannot cancel across its surviving middle letter. Hence $Q_1$ is empty. Inductively, if $Q_1,\dots,Q_{j-1}$ are empty, the initial letters of $Q_j^{-1}$ cannot cancel against the surviving earlier middle letters or across its own middle letter. Hence $Q_j$ is empty as well. Thus all conjugators vanish and $\pi(j)=j$, so $A=\operatorname{id}$. This includes $n=0,1$. [F1, F2, step 1.1]

3.1 *The two explicit prefix forms.* Otherwise choose the least qualifying $i$. At that junction the words are $U^{-1}aU$ and $V^{-1}bV$. If $a$ is the first middle letter cancelled, cancellation removes the entire suffix $U$ of the left factor against the head $U^{-1}$ of $V^{-1}$, and the next letter of $V^{-1}$ must be $a^{-1}$. Equivalently $V=R a U$ as a reduced word. If $b$ is the first cancelled middle letter, the whole head $V^{-1}$ has cancelled against the suffix $V$ of $U$, and the preceding letter of $U$ must be $b^{-1}$; hence $U=R b^{-1}V$. The two positive middle letters cannot cancel each other, so the first deletion involves exactly one of them. Exhaustiveness and exclusivity follow by whether a qualifying junction exists. [F2, step 2.1, construct] ∎

## Remarks

This is the cancellation split in Artin's proof of Theorem 16, printed p. 114. The prefix forms in step 3.1 give explicit shorter conjugators in `lem-an-extremal-cancellation-shortens-an-artin-substitution`.
