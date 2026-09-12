---
id: "lem-simplex-factor-reversal-is-chain-homotopic-to-the-identity-diagonal"
kind: "lemma"
title: "Factor reversal gives the commutativity chain homotopy"
status: "draft"
origin: "pipeline"
pipeline_run: "phase-2-next-17"
deps: ["thm-alexander-whitney-and-eilenberg-zilber-are-chain-homotopy-inverses","def-singular-chain-cross-product-on-generators"]
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - title: Hatcher proof of Theorem 3.11; Miller Lecture 29
      url: https://pi.math.cornell.edu/~hatcher/AT/ATch3.pdf
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: "direct"
---

## Statement

Let $X$ be a space and $R$ a commutative unital ring. Put $A=\operatorname{AW}:C_*(X\times X;R)\to C_*(X;R)\otimes_R C_*(X;R)$ and let $\tau(x,y)=(y,x)$. On homogeneous tensors put
$$W(a\otimes b)=(-1)^{pq}b\otimes a\qquad(|a|=p,\ |b|=q).$$
Then $WA\tau_\#$ and $A$ are naturally chain homotopic. In particular $WD_X$ and $D_X$, with $D_X=A\Delta_\#$, are naturally chain homotopic. No AC is required.

## Facts & Assumptions

[F1] [[thm-alexander-whitney-and-eilenberg-zilber-are-chain-homotopy-inverses]] provides natural maps $A,S$ and specified natural homotopies for $AS-1$ and $SA-1$, over $R$.

[F2] [[def-singular-chain-cross-product-on-generators]] expresses $S$ as the signed sum of monotone lattice paths.

## Proof

**Given:** The signed tensor differential $d(a\otimes b)=da\otimes b+(-1)^p a\otimes db$. Take the supplied homotopies $dU+Ud=AS-1$ and $dV+Vd=SA-1$.

1.1 The coefficients of $db\otimes a$ and $b\otimes da$ in $dW(a\otimes b)$ are respectively $(-1)^{pq}$ and $(-1)^{pq+q}$. In $Wd(a\otimes b)$ they are $(-1)^{p+p(q-1)}$ and $(-1)^{(p-1)q}$, respectively. Each corresponding pair agrees modulo two, so $dW=Wd$. Also $W^2=1$. Terms involving $da$ or $db$ in degree zero are absent, so the calculation includes $p=0$ and $q=0$. [given]

1.2 A shuffle path has $p$ horizontal and $q$ vertical steps. Its permutation sign is $(-1)^N$, where $N$ counts vertical steps occurring before horizontal steps. Interchanging the two types of steps replaces $N$ by $pq-N$, since each horizontal/vertical pair contributes to exactly one of the counts. It therefore changes the sign by $(-1)^{pq}$. The affine simplex of the swapped path is the original one followed by factor interchange. Matching paths bijectively in the finite shuffle sums gives $\tau_\#S=SW$. This is a signed-shuffle calculation, not merely naturality for maps of the two factors. [F2, given]

2.1 Put $B=WA\tau_\#$ and $L=WUW$. These are natural (with simultaneous maps of $X$), and step 1.2 gives $BS=WASW$. Thus $$dL+Ld=W(AS-1)W=BS-1.$$ The map $B$ is a chain map by step 1.1, [F1], and the fact that postcomposition commutes with face boundary. Define $K=LA-BV$. Using the two supplied homotopy equations yields $$dK+Kd=(BS-1)A-B(SA-1)=B-A.$$ This is an explicitly specified natural homotopy. [F1, step 1.1, step 1.2, given]

3.1 Since $\tau\Delta=\Delta$, precomposing step 2.1 with the chain map $\Delta_\#$ gives $$d(K\Delta_\#)+(K\Delta_\#)\partial=WD_X-D_X.$$ In degree zero the twists have sign $+1$ and the maps agree on vertices. If $X$ is empty or $R=0$, all maps have zero complexes as domain and codomain. Degenerate singular simplices and one-point spaces use the same shuffle paths and homotopies; nothing was normalized away. The construction uses finite signed sums and the supplied homotopies, not a selection of new fillers, so it is choice-free. [F1, F2, step 2.1] ∎
