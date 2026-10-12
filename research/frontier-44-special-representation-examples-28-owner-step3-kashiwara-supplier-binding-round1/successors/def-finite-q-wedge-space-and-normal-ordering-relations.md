---
id: def-finite-q-wedge-space-and-normal-ordering-relations
kind: definition
title: "The finite q-wedge space and the normal-ordering relations"
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 7
deps: [lem-the-q-antisymmetrizer-determines-the-finite-q-wedge-kernel,
       lem-the-level-one-vector-representation-has-a-perfect-crystal-with-lower-global-basis,
       def-the-level-one-vector-representation-its-affinization-and-energy-function,
       def-the-affine-hecke-algebra-action-on-finite-tensor-powers-of-the-vector-representation]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "Bernard Leclerc, Fock space representations (author-hosted complete 38-page treatment)"
      url: "https://leclercb.users.lmno.cnrs.fr/lectnotes_final.pdf"
      locator: "sec. 3.5, printed pp. 19-20: the q-wedge space $\\wedge^r_qU=U^{\\otimes r}/I_r$ and the straightening Prop. 8; sec. 3.6-3.7, printed pp. 20-22: bar involution and the ordered-wedge basis."
    - title: "Masaki Kashiwara, Tetsuji Miwa and Eugene Stern, Decomposition of q-deformed Fock spaces, arXiv:q-alg/9508006"
      url: "https://arxiv.org/pdf/q-alg/9508006"
      locator: "sec. 1.3, printed pp. 5-8: the wedge space, relations (43),(45) and the normally ordered wedge basis."
    - title: "Kashiwara-Miwa-Petersen-Yung, Perfect crystals and q-deformed Fock spaces"
      url: "https://arxiv.org/pdf/q-alg/9603025"
      locator: "sec. 3.3, printed pp. 14-17: normal ordering via the energy function and Lemmas 3.3.1-3.3.3."
---

## Definition

For $N\ge1$ let $V_{\mathrm{aff}}^{\otimes N}$ carry the affine Hecke action and put
$W_N:=V_{\mathrm{aff}}^{\otimes N}\big/\ker A_N$, where $A_N=\sum_{w\in S_N}S_w$;
write $u_{m_1}\wedge\cdots\wedge u_{m_N}$ for the image of the pure tensor, and let
$\wedge$ denote this product. Call an index tuple **normal** (or normally
ordered) if $m_1>m_2>\cdots>m_N$, and set $W_A:=\sum_{\text{normal }I}\mathbb Z[q,q^{-1}]\,u_I$,
$W_0:=\bigoplus_{\text{normal }I}\mathbb Z[q]\,u_I$, where $u_I$ is the image of
the corresponding ordered wedge.

For $l<m$ write $m-l=ae+b$ with $a\ge0$, $0\le b<e$ (so $a=\lfloor(m-l)/e\rfloor$
and $b$ is the residue difference). The **normal-ordering relations** are:

$$u_l\wedge u_l=0;\qquad u_l\wedge u_m=-u_m\wedge u_l\quad(b=0);\qquad u_l\wedge u_m=-q^{-1}u_m\wedge u_l\quad(a=0,\ b>0);$$

$$u_l\wedge u_m=-q^{-1}u_m\wedge u_l-u_{l+ae}\wedge u_{m-ae}-q^{-1}u_{m-ae}\wedge u_{l+ae}\quad(a>0,\ b>0),$$

where the last line is to be read as a relation in $W_N$ and is applied
recursively to its two remaining unordered pairs; each recursion step strictly
decreases the gap of the unordered pair it rewrites and keeps every index
between $l$ and $m$, so the procedure terminates. The energy normal order is
the equivalent formulation through the opposite-channel energy:
$u_{m_1}\wedge u_{m_2}$ is rewritten toward decreasing indices by
$H_{\mathrm{op}}(u_{m_1}\otimes u_{m_2})>0\iff m_1>m_2$ of
[[def-the-level-one-vector-representation-its-affinization-and-energy-function]].

## Facts & Assumptions

**Given:** The space $W_N=V_{\mathrm{aff}}^{\otimes N}/\ker A_N$, the ordered wedges, the lattice $W_A$, the chart $W_0$, and the three displayed relations.

[F1] $\ker A_N=\sum_i\ker(S_i+1)$ and $S_i=-1$ on $W_N$; the quotient is $U_q(\mathfrak g)$-stable by [[lem-the-q-antisymmetrizer-determines-the-finite-q-wedge-kernel]].

[F2] On two residue-labelled factors the operator $S$ acts by the three cases $-q$ (swap) for $j<k$, $-1$ for $j=k$ and $-q\,$swap$+(Q-1)$ for $j>k$ with the loop extension $S(fw)=s(f)S(w)+(1-Q)Y_2\frac{f-s(f)}{Y_1-Y_2}w$ ([[def-the-affine-hecke-algebra-action-on-finite-tensor-powers-of-the-vector-representation]]).

[F3] $u_{m-e}=Yu_m$ with $Y$ the loop operator, and $Y$ acts invertibly; the residue of $u_m$ is $m\bmod e$ ([[def-the-level-one-vector-representation-its-affinization-and-energy-function]]).

[F4] $q\ne0$ and $q^r\ne1$ for $r\ne0$ in $\mathbb Q(q)$ ([[lem-the-q-antisymmetrizer-determines-the-finite-q-wedge-kernel]]).

## Verification

**Proof technique:** check the displayed relations in the quotient from the two-factor operator, prove termination by a well-founded gap measure, and record the lattice charts.

1.1 The first three relations hold in $W_N$. Since $S=-1$ on $W_N$, the two-factor operator on the images gives: for $j=k$, $S(v_j\otimes v_j)=-v_j\otimes v_j$ forces $u_j\wedge u_j=0$ after multiplying by $Y$-powers; for $j<k$ (residues distinct) $S(v_j\otimes v_k)=-qv_k\otimes v_j$, so $u_{m_1}\wedge u_{m_2}=-q^{-1}u_{m_2}\wedge u_{m_1}$ for any two indices whose residues are $j<k$ in this order, and if their residues are equal, $a>0,b=0$ and the relation $u_l\wedge u_m=-u_m\wedge u_l$ follows from applying the divided-difference part of [F2] $a$ times to reach the equal-residue base case. [F1, F2, F3, F4, given, algebra]

2.1 The fourth relation holds in $W_N$. Write $l<m$ with $a>0$, $b>0$ and residue labels $j<k$. Applying $S=-1$ to the two-factor image and using the loop extension of [F2] with $f=Y_1^{a}$ gives $0=(S+1)(Y_1^aw)=Y_2^aS(w)+(1-Q)\sum_{r=1}^{a}Y_1^{a-r}Y_2^rw+Y_1^aw$ for $w=v_j\otimes v_k$; substituting $S(w)=-qv_k\otimes v_j$ and translating $Y_1^{a-r}Y_2^{r}$ into index shifts of $u_l,u_m$ yields the three-term relation after using the first two relations to normalise the two correction terms; the exponents match because $m-l=ae+b$ makes the correction pair $(m-b,l+b)$ decreasing available as $(l+ae,m-ae)$ and its reverse. [F1, F2, F3, step 1.1, algebra]

3.1 Termination of the recursion. Attach to an unordered pair $\{l,m\}$ with $l<m$ the pair $(a,b)$ of its euclidean data; the first two relations and the recursion replace $\{l,m\}$ by pairs with strictly smaller gap, and in the fourth relation the unchanged reverse pair drops from gap $ae+b$ to $ae-b$, while the correction pair $(l+ae,m-ae)$ is already decreasing with gap $ae-b<ae+b$; a decreasing sequence of nonnegative integer gaps terminates, so every word is rewritten in finitely many steps and every index used lies between the original minimum and maximum. [step 2.1, given, algebra]

4.1 The quotient is generated by the normal wedges over the Laurent ring, and $w_A$ contains the Laurent lattice. By step 3.1 any wedge is a finite combination of normally ordered wedges with coefficients in $\mathbb Z[q,q^{-1}]$ (the three cases have Laurent coefficients $q^{\pm1},-1$), so the normal wedges span $W_N$ over $\mathbb Q(q)$ and their $\mathbb Z[q,q^{-1}]$-span $W_A$ contains the image of the Laurent tensor lattice; the image of the Laurent lattice is contained in $W_A$ by the same rewriting. The chart $W_0$ is the separate $\mathbb Z[q]$-span and satisfies $W_A/qW_A=0$ in the sense that the $A_0$-span of the normal basis is a proper $A_0$-lattice whose mod-$q$ fibre is the residue basis; it is not a crystal residue of the Laurent quotient. [step 2.1, step 3.1, F1, F3, given, algebra]

5.1 Conclusion. The finite q-wedge space is the quotient of the tensor power by $\ker A_N$, the three normal-ordering relations are the displayed rewriting rules of the quotient, rewriting terminates with all indices between the original extremes, and the Laurent chart $W_A$ and the positive chart $W_0$ are kept distinct. [step 1.1, step 2.1, step 3.1, step 4.1] ∎

## Remarks

- The energy criterion $H_{\mathrm{op}}>0\iff m_1>m_2$ is a statement about the
  opposite channel; the normal-ordering relations themselves are proved from
  the fixed-channel Hecke operator and do not invoke the R-matrix, which is
  constructed next.

- The zero chart $W_0$ is not $W_A$ modulo $q$: the Laurent lattice has no
  separated $q$-adic quotient, which is why the Fock space below uses the
  positive and balanced charts instead.
