---
id: lem-hard-lefschetz-splits-a-bounded-t-structure-complex
kind: lemma
title: "Hard Lefschetz splits a bounded t-structure complex"
status: draft
origin: session
deps:
  - def-canonical-t-structure-on-a-derived-category
  - thm-long-exact-hom-sequences-of-a-distinguished-triangle
  - prop-a-distinguished-triangle-splits-exactly-when-one-connecting-map-vanishes
proof_strategy: induction
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "P. Deligne, Theoreme de Lefschetz et criteres de degenerescence de suites spectrales, Publ. Math. IHES 35 (1968), 107–126"
      url: https://www.numdam.org/item/PMIHES_1968__35__107_0/
---

## Statement

Let $\mathcal T$ be a triangulated category with a bounded t-structure and t-cohomology $H^j_t$. Let $K\in\mathcal T$ and $L:K\to K[2]$ satisfy that $H^{-j}_t(L^j):H^{-j}_t(K)\to H^j_t(K)$ is an isomorphism for every integer $j\ge0$. Then there is an isomorphism $K\cong\bigoplus_j H^j_t(K)[-j]$. The sum is finite. The splitting is not asserted to be canonical or to satisfy the stronger primitive-lift compatibility used in the Hodge theory of projective maps.

## Facts & Assumptions

**Given:** $\mathcal T,K,L$ and the bounded t-structure of the Statement.

[F1] The t-structure supplies truncation triangles, t-cohomology long exact sequences and $\operatorname{Hom}(\mathcal T^{\le a},\mathcal T^{\ge a+1})=0$. In particular $\operatorname{Hom}(A,B[-j])=0$ for heart objects $A,B$ and $j>0$. These are the abstract t-structure axioms and their truncation consequences, in the convention of [[def-canonical-t-structure-on-a-derived-category]].

[F2] A distinguished triangle has long exact Hom sequences; a left inverse for its first map forces its connecting map to vanish, so the triangle splits as a biproduct. Indeed the connecting map shifted by $[-1]$, followed by the first map, is zero; postcomposition with the left inverse then makes the connecting map itself zero. The split-triangle characterization is [[thm-long-exact-hom-sequences-of-a-distinguished-triangle]] and [[prop-a-distinguished-triangle-splits-exactly-when-one-connecting-map-vanishes]].

## Proof

**Given:** the data of the Statement. We induct on an integer $n\ge0$ such that $H^j_t(K)=0$ for $|j|>n$.

1.1 If $n=0$, the truncation triangle identifies $K$ with $H^0_t(K)$, giving the required splitting. For $n>0$, assume the assertion for amplitude contained in $[-n+1,n-1]$ and set $A=H^{-n}_t(K)$, $B=H^n_t(K)$. Truncation gives maps $a:A[n]\to K$ and $b:K\to B[-n]$ inducing the identities on the bottom and top cohomology groups. Write $h=H^{-n}_t(L^n):A\to B$, an isomorphism. Since $n>0$, $ba=0$ by the negative Hom assertion in [F1]. [given, F1, induction, base, ih]

2.1 Define $c:B[-n]\to K$ to be $L^n[-2n]\,a[-2n]\,h^{-1}[-n]$, and define $r:K\to A[n]$ to be $h^{-1}[n]\,b[2n]\,L^n$. Their composites $bc$ and $ra$ are identity maps: they induce the identities on $H^n_t(B[-n])$ and $H^{-n}_t(A[n])$, respectively, and a morphism between two equally shifted heart objects is its map on that unique t-cohomology group. Put $r'=r-(rc)b$. Then $r'a=1$, $r'c=0$, $ba=0$ and $bc=1$. Thus $(r',b)(a,c)$ is the identity of $A[n]\oplus B[-n]$. [F1, step 1.1, algebra]

3.1 Complete $(a,c)$ to a distinguished triangle. Its left inverse $(r',b)$ makes it split by [F2], so $K\cong A[n]\oplus K_0\oplus B[-n]$ for its cone $K_0$. The cohomology sequence and the identity maps at the extreme degrees give $H^j_t(K_0)=H^j_t(K)$ for $-n<j<n$ and zero otherwise. Let $i:K_0\to K$ and $p:K\to K_0$ be the inclusion and projection, and put $L_0=p[2]Li$. For $0\le j<n$, the map $H^{-j}_t(L_0^j)$ is $H^{-j}_t(L^j)$ under these cohomology identifications: at every intermediate degree $-j,-j+2,\ldots,j$ the maps induced by $i$ and $p$ are inverse isomorphisms, since none is an extreme degree. Hence $L_0$ satisfies hard Lefschetz on $K_0$. [F1, F2, step 2.1, algebra]

4.1 The induction hypothesis splits $K_0$ into its finitely many shifted t-cohomology objects. Together with the two extreme summands in step 3.1 this gives $K\cong\bigoplus_{j=-n}^nH^j_t(K)[-j]$. Boundedness supplies such an $n$ for the original $K$, completing the induction. [step 1.1, step 3.1, induction, discharge-induction] ∎

## Proof contract boundary

The proof is complete relative to a genuine bounded t-structure. It is an abstract local proof and does not claim that a constructible or equivariant perverse t-structure has already been constructed. That separate construction is the supplier owner's responsibility. This lemma proves existence of a splitting; it does **not** discharge de Cataldo–Migliorini Lemma 2.11.1, which requires stronger primitive-compatible lifts.
