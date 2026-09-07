---
id: lem-expander-size-adjustment-and-laziness
kind: lemma
title: "Expander size adjustment and laziness"
status: draft
origin: pipeline
deps: [thm-margulis-family-has-uniform-spectral-gap, thm-cheeger-inequalities-for-finite-regular-graphs]
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Irit Dinur, The PCP theorem by gap amplification; §2.1 Lemma2.1 and Corollary2.4, pp8–9; HLW Construction8.1 and §4.5; explicit constants adapted."
      url: "https://www.wisdom.weizmann.ac.il/~dinuri/mypapers/combpcp.pdf"
---

## Statement

For every integer $N\ge1$ there is a polynomial-time constructible reverse-paired $128$-regular multigraph $H_N$ on exactly $N$ vertices with
$$\alpha(H_N)\le\rho_0:=1-\frac{49}{1638400}<1.$$
For $N\ge2$ every $S$ satisfies $\operatorname{cut}(S)\ge(7/10)\min(|S|,N-|S|)$. Every vertex has loops.

## Facts & Assumptions

**Given:** the objects and hypotheses in the statement above.

[F1] For every $m\ge2$ the normalized Margulis adjacency has absolute nontrivial norm $\alpha\le73/80$, hence algebraic gap at least $7/80$. For $m=1$ the mean-zero space is zero and $\alpha=0$. ([[thm-margulis-family-has-uniform-spectral-gap]]).

[F2] For a finite $d$-regular adjacency-slot multigraph on $n\ge2$ vertices, $$\frac{\gamma}{2}\le h\le\sqrt{2\gamma},\qquad h\le h_V\le dh.$$ Here $\gamma=1-\mu_2$ is the algebraic gap; it is not replaced by $1-\alpha$. ([[thm-cheeger-inequalities-for-finite-regular-graphs]]).


## Proof

1.1 For $N\ge2$ put $m=\lceil\sqrt N\rceil$. The Margulis graph has algebraic gap at least $7/80$, so Cheeger's lower bound gives unnormalized cut ratio at least $8(7/80)/2=7/20$. Partition its $m^2$ vertices, in fixed lexicographic order, into $N$ nonempty consecutive fibers of size at most four. Such a partition exists since $N\le m^2\le4N$, by allocating one vertex per fiber and distributing the remainder up to the capacity four. [F1, F2]

2.1 Sum adjacency entries across fibers to form the quotient, retaining internal slots on its diagonal. Every row has sum at most $32$; pad its diagonal to row sum $32$. For a quotient cut, the two lifts each have at least as many vertices as their respective sets of fibers. The old cut lower bound therefore yields at least $(7/20)\min(|S|,N-|S|)$ crossing slots. Padding changes no cut, so the degree-$32$ graph has normalized $h\ge7/640$. [step 1.1, algebra]

3.1 Cheeger's other direction yields algebraic gap at least $h^2/2\ge49/819200$. Add $32$ diagonal slots at each vertex. The normalized matrix becomes $(I+M)/2$, all its eigenvalues lie in $[0,1]$, and its nontrivial norm is at most $1-49/1638400$. Double all slots, giving degree $128$ with even diagonal and unchanged normalized matrix. Cuts double, giving the claimed $7/10$ unnormalized ratio. [F2, step 2.1]

4.1 Symmetry and even diagonal allow explicit reverse pairing: match opposite off-diagonal slots, and pair diagonal slots in order. At least the added loops remain at every vertex. Integer square-root search, fiber allocation, summation, and padding operate on $O(N)$ slots with polynomial-length labels, in polynomial bit time. For $N=1$ output $128$ loop slots; its mean-zero norm is zero and all cut assertions are vacuous. [step 3.1, algebra] ∎
