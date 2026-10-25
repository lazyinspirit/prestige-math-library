---
id: lem-lkb-lifted-absolute-cellular-boundary-and-fraction-field-rank
kind: lemma
title: The absolute LKB cellular boundary and fraction-field rank
status: published
origin: session
deps: [lem-the-unordered-two-point-punctured-plane-has-an-equivariant-two-dimensional-cell-model, thm-cellular-homology-computes-singular-homology]
dependency_level: 1
proof_strategy: direct
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
    scope: "Historical full Step 5 item mathematical read and adjudication where required, including the used supplier interfaces; current mathematical text matches the recorded postreview snapshot."
    delegated_by: owner
    evidence:
      - research/frontier-38-owner-30-reader-16.md
      - research/frontier-38-owner-30-dispatch/reader-reader-16.result.json
      - research/frontier-38-owner-30-step5-hash-16-post-5a.json
      - research/frontier-38-owner-30-alpha-batch-16-5a-decisions.json
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
sources:
  references:
    - title: Paoluzzi and Paris, A note on the Lawrence–Krammer–Bigelow representation, section 3, pp.507–509
      url: https://msp.org/agt/2002/2-1/agt-v2-n1-p24-p.pdf
    - title: Bigelow, The Lawrence-Krammer representation, Lemma 4.2
      url: https://arxiv.org/pdf/math/0204057
provenance:
  statement: literature-derived
  proof: ai-altered
---

## Statement

Let $C$ be the unordered configuration of two points in $\mathbb C\setminus\{p_1,\ldots,p_n\}$, where $p_1<\cdots<p_n$ and $n\ge1$. Let $\widetilde C$ be the regular cover determined by
$$\Phi(\alpha)=q^{a(\alpha)}t^{b(\alpha)},$$
where $a$ is the sum of the two mobile points' winding numbers around all punctures and $b$ is their mutual half-twist exponent. Write $\Lambda=\mathbb Z[q^{\pm1},t^{\pm1}]$ and $K=\mathbb Q(q,t)$.

In the preceding two-dimensional model, the absolute covering chain groups have bases $a_i,b_i,c_i$ in degree one and $A_{ij},B_{ir}$ in degree two, with
$$dA_{ij}=(q-1)(a_j-b_i),$$
$$dB_{i1}=(1-t)a_i-c_i+q c_{i+1},\qquad dB_{i2}=-ta_i+tb_i-c_i+c_{i+1},$$
$$dB_{i3}=(t-1)b_i-qc_i+c_{i+1}.$$
Ordinary absolute $H_2(\widetilde C;\mathbb Z)$ is the kernel of this differential. Its natural map to $K\otimes_\Lambda H_2(\widetilde C;\mathbb Z)$ is injective, and that vector space has dimension $\binom n2$. These claims do not assert integral freeness or injection into end-relative homology.

## Facts & Assumptions

**Given:** $n\ge1$, the real punctures, the cover determined by $\Phi$, and the rings $\Lambda$ and $K$.

[F1] [[lem-the-unordered-two-point-punctured-plane-has-an-equivariant-two-dimensional-cell-model]] supplies the two-dimensional quotient cell model, its attaching words, and the deck-equivariant lifted homotopy equivalence.

[F2] [[thm-cellular-homology-computes-singular-homology]] identifies the cellular homology of the covering CW complex with ordinary absolute singular homology.



## Proof

1.1 Choose the directed edges in [F1] to make a positively oriented puncture meridian on returning along its barred edge. The barred grid is contractible, so its lift can be fixed consistently with every barred edge having displacement $1$. The resulting $a_i$ and $b_i$ loops move one mobile point counterclockwise once around $p_i$, with the other outside that small meridian disk. Thus their exponents are $(a,b)=(1,0)$ and their displacement is $q$. Each $c_i$ crosses the diagonal between two real chambers exchanged by coordinate interchange; in the unordered quotient it exchanges the mobile points counterclockwise in their common puncture interval, enclosing no puncture. Its exponents are $(0,1)$ and its displacement is $t$. Paths in the barred grid provide the basepoint paths, and changing those paths by a homotopy has no effect on these displacements. Both $q$ and $t$ occur, so the deck group is $\mathbb Z^2$. [F1, given, construct]

2.1 Lift every cell after fixing one basepoint lift. For a word, a positive edge contributes its prefix displacement times that edge, and an inverse edge contributes minus the displacement after traversing that inverse edge times the positive edge. Apply this to the four attaching words of [F1]. The word $b_i a_jb_i^{-1}a_j^{-1}$ contributes $b_i+qa_j-qb_i-a_j$. The word $a_ic_{i+1}a_i^{-1}c_i^{-1}$ contributes $a_i+qc_{i+1}-ta_i-c_i$. The word $c_{i+1}b_i a_i^{-1}c_i^{-1}$ contributes $c_{i+1}+tb_i-ta_i-c_i$. Finally $c_{i+1}b_i c_i^{-1}b_i^{-1}$ contributes $c_{i+1}+tb_i-qc_i-b_i$. These are exactly the displayed differential formulas. The lifted model has no 3-cells, so [F1] and [F2] identify $H_2(\widetilde C;\mathbb Z)$ with $\ker d\subset C_2$. These are absolute chains; no end neighbourhood or relative quotient has entered the construction. [F1, F2, step 1.1, construct]

3.1 Over $K$, let $W$ be the span of all $B_{ir}$. Suppose $\sum_i(r_iB_{i1}+s_iB_{i2}+u_iB_{i3})$ has zero boundary. Its $a_i$ coefficient gives $s_i=(1-t)t^{-1}r_i$, and its $b_i$ coefficient then gives $u_i=r_i$. The remaining boundary is $(q+t^{-1})\sum_i r_i(c_{i+1}-c_i)$. Since $q+t^{-1}\ne0$, its $c_1$ coefficient forces $r_1=0$, its $c_2$ coefficient then forces $r_2=0$, and successive coefficients force every $r_i=0$. Hence also $s_i=u_i=0$, and $d|_W$ is injective. Projection onto the $\binom n2$ $A$-coordinates is consequently injective on $\ker(d\otimes K)$, giving an upper bound $\binom n2$ for its dimension. [step 2.1, algebra]

4.1 Put $S=(t-1)(qt+1)$ and define $V_{ib}=-qtB_{i1}+q(t-1)B_{i2}+B_{i3}$, $V_{ia}=B_{i1}+q(t-1)B_{i2}-qtB_{i3}$, and $V_{i0}=-tB_{i1}+(t-1)B_{i2}-tB_{i3}$. Substitution gives $dV_{ib}=Sb_i-(q-1)(qt+1)c_{i+1}$, $dV_{ia}=-Sa_i+(q-1)(qt+1)c_i$, and $dV_{i0}=(qt+1)(c_i-c_{i+1})$. Therefore the integral chains $$E_{ij}=SA_{ij}+(q-1)V_{ib}+(q-1)V_{ja}+\sum_{i<k<j}(q-1)^2V_{k0}$$ are cycles: the $a_j,b_i$ terms cancel the boundary of $SA_{ij}$, and the $c$ terms telescope. Their $A$-coordinates are $S$ in coordinate $(i,j)$ and zero elsewhere. Since $S\ne0$, they are independent over $K$. Together with step 3.1 this proves that the field kernel has dimension $\binom n2$ and basis $\{E_{ij}\}$. For $n=1$ there are no such chains, and step 3.1 says the full kernel is zero. [step 2.1, step 3.1, algebra]

5.1 The ring $\Lambda$ is a domain: it is the localization of the polynomial domain $\mathbb Z[q,t]$ by monomials. Its finite free module $C_2$ is torsion-free, and so is its submodule $\ker d$. If an element of $\ker d$ maps to zero after localization, a nonzero denominator annihilates it; torsion-freeness makes it zero. Thus the localization map on absolute $H_2$ is injective. Moreover every field cycle becomes an integral cycle after multiplying by a common nonzero denominator of its finitely many cellular coordinates. Hence localization of $\ker d$ is exactly $\ker(d\otimes K)$, not just a subspace thereof. Step 4.1 now gives the asserted dimension. Integral spanning by the $E_{ij}$ was never used or inferred. [step 2.1, step 4.1, algebra] ∎
