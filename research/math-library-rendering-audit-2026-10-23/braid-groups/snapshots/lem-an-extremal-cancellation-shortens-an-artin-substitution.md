---
id: lem-an-extremal-cancellation-shortens-an-artin-substitution
kind: lemma
title: "An extremal cancellation shortens an Artin substitution"
status: published
origin: pipeline
pipeline_run: frontier-38-owner-30
dependency_level: 5
deps: [lem-artins-product-cancellation-dichotomy, def-artin-automorphisms-of-the-free-group, def-peripheral-boundary-preserving-automorphism-of-f-n]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
    scope: "Historical full Step 5 item mathematical read and adjudication where required, including the used supplier interfaces; current mathematical text matches the recorded postreview snapshot."
    delegated_by: owner
    evidence:
      - research/frontier-38-owner-30-reader-15.md
      - research/frontier-38-owner-30-dispatch/reader-reader-15.result.json
      - research/frontier-38-owner-30-step5-hash-15-post-5a.json
      - research/frontier-38-owner-30-alpha-batch-15-5a-decisions.json
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
sources:
  references:
    - title: "Emil Artin, Theory of Braids, Annals of Mathematics 48 (1947), pp. 101-126, proof of Theorem 16, cases 2(a) and 2(b), printed pp. 114-115"
      url: "https://www.maths.ed.ac.uk/~v1ranick/papers/artinbraids.pdf"
    - title: "Juan Gonzalez-Meneses, Basic results on braid groups, section 1.6, printed pp. 9-10"
      url: "https://arxiv.org/pdf/1010.0321"
---

## Statement

In case 2 of [[lem-artins-product-cancellation-dichotomy]], use its chosen
adjacent pair and notation $a,b,U,V,R$. Put $s=\rho(\sigma_i)$, with the
convention of [[def-artin-automorphisms-of-the-free-group]]. If the left
middle letter is cancelled first, set $A'=A\circ s$; if the right middle
letter is cancelled first, set $A'=A\circ s^{-1}$. In both cases $A'$ is
peripheral-boundary-preserving and has a representation whose total reduced
conjugator length is strictly less than that of $A$.

More precisely, its two new conjugators can be taken as
$\operatorname{red}(RU),U$ in the left case, and
$V,\operatorname{red}(RV)$ in the right case; all other conjugators are
unchanged. A representation of minimum total length therefore satisfies
$\ell(A')<\ell(A)$.

## Facts & Assumptions

**Given:** The reduced expressions, the adjacent pair selected in the cancellation dichotomy, and the frozen Artin substitution $s$.

[F1] The dichotomy gives $V=RaU$ in the left case and $U=Rb^{-1}V$ in the right case, as reduced concatenations ([[lem-artins-product-cancellation-dichotomy]]).

[F2] The automorphism $s$ sends $x_i$ to $x_ix_{i+1}x_i^{-1}$ and $x_{i+1}$ to $x_i$; its inverse sends them to $x_{i+1}$ and $x_{i+1}^{-1}x_ix_{i+1}$ respectively, fixing all other basis letters ([[def-artin-automorphisms-of-the-free-group]]).

[F3] Peripheral-boundary-preserving means permutation of positive basis conjugacy classes and exact preservation of $\delta=x_1\cdots x_n$ ([[def-peripheral-boundary-preserving-automorphism-of-f-n]]).

## Proof

1.1 *Left middle letter.* Here $V=RaU$. Postcomposition gives $A'(x_i)=T_iT_{i+1}T_i^{-1}$ and $A'(x_{i+1})=T_i$, where $T_i=U^{-1}aU$ and $T_{i+1}=V^{-1}bV$. The first image has conjugator $VT_i^{-1}=RaU\,U^{-1}a^{-1}U=RU$ around $b$, so $A'(x_i)=(RU)^{-1}b(RU)$ and $A'(x_{i+1})=U^{-1}aU$. Reducing $RU$ gives conjugators of total length at most $|R|+2|U|$, whereas the old pair has length $|U|+|V|=|R|+1+2|U|$. The length falls by at least one. [F1, F2, algebra]

1.2 *Right middle letter.* Here $U=Rb^{-1}V$. Postcomposition with the inverse gives $A'(x_i)=T_{i+1}$ and $A'(x_{i+1})=T_{i+1}^{-1}T_iT_{i+1}$. The second image has conjugator $UT_{i+1}=Rb^{-1}V\,V^{-1}bV=RV$ around $a$. Thus the new conjugators are $V,\operatorname{red}(RV)$, of total length at most $|R|+2|V|$, while $|U|+|V|=|R|+1+2|V|$. Again the length falls by at least one; all other images are unchanged in either case. [F1, F2, algebra]

2.1 *Admissibility and recovery.* The displayed images swap the two middle generators and retain conjugates of every other generator, so they still permute the positive peripheral classes. Both $s$ and $s^{-1}$ fix $\delta$, since $s(x_ix_{i+1})=(x_ix_{i+1}x_i^{-1})x_i=x_ix_{i+1}$ and the inverse fixes the same word. Consequently $A'$ fixes $\delta$ and is peripheral-boundary-preserving. In the left case $A=A'\circ s^{-1}$; in the right case $A=A'\circ s$. The strict pair inequalities of steps 1.1 and 1.2 prove the total decrease; when the original representation is minimal they give $\ell(A')\le\ell(A)-1$. No choice principle is used. [F2, F3, step 1.1, step 1.2, algebra] ∎

## Remarks

These are Artin's two length reductions in the proof of Theorem 16, printed pp. 114–115, translated to the authored generator convention. Both operations change source basis letters by postcomposition; they do not apply a substitution to every target word by precomposition.
