---
id: lem-temperley-lieb-trivial-linkage-at-loop-plus-or-minus-two
kind: lemma
title: "Trivial-factor linkage at loop parameter plus or minus two"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
deps:
  - def-temperley-lieb-link-state-standard-modules
  - lem-temperley-lieb-link-state-module-action-is-well-defined
  - lem-temperley-lieb-integral-spin-representation-is-split-injective
  - thm-characteristic-of-a-field-is-zero-or-prime
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Robert A. Spencer, The Modular Temperley–Lieb Algebra"
      url: "https://arxiv.org/pdf/2011.01328"
      locator: "§6 and the use of linkage in Theorem 8.3; the present explicit transposition-sum argument supplies the excluded δ=±2 branch."
---

## Statement

Let $K$ be a field of positive characteristic $p$, let $\delta=2$ or $\delta=-2$ in $K$, and let $0\le m\le n$ with $n-m$ even. If the one-dimensional module on which all diagram generators act by zero is a composition factor of $W_{n,m}(K,\delta)$, then
$$m+1\equiv n+1\pmod {2p}\qquad\text{or}\qquad m+1\equiv-(n+1)\pmod {2p}.$$
This includes characteristic two, where both loop parameters are zero. In characteristic zero, the same hypothesis forces $m=n$.

## Facts & Assumptions

**Given:** The field, loop parameter and allowed labels in the Statement.

[F1] The link-state modules are the quotients by lower propagation and carry the diagram action ([[def-temperley-lieb-link-state-standard-modules]], [[lem-temperley-lieb-link-state-module-action-is-well-defined]]).

[F2] The integral spin construction has cup $c(1)=q(01)+(10)$, cap $b(01)=1,b(10)=q^{-1},b(00)=b(11)=0$, satisfies the diagram identities, and its generator acts on $01,10$ by the symmetric matrix with entries $q,1,1,q^{-1}$ ([[lem-temperley-lieb-integral-spin-representation-is-split-injective]]).

[F3] A field has characteristic zero or prime characteristic ([[thm-characteristic-of-a-field-is-zero-or-prime]]).

## Proof

**Given:** The data and hypotheses in the Statement.

1.1 Put $k=(n-m)/2$. Reflect a link-state diagram to a morphism $m\to n$, apply its spin operator to the all-zero word of length $m$, and extend linearly; this defines $\iota:W_{n,m}\to V_n$. Any diagram of propagation less than $m$ has a cap joining two input zero strands, so it kills that word by $b(00)=0$ and the map is well-defined. The diagram identities in [F2] make it intertwine the left action obtained from the stated right action by reflection. Each link state maps into the weight-$k$ word subspace. Its lexicographically greatest word puts $1$ at each left arc endpoint, $0$ at every right arc endpoint and defect, and has coefficient $1$. Every other word in its expansion is smaller. The greatest word determines the matching: scanning left to right, a $1$ opens an arc, and a $0$ closes the most recent open arc if one exists and otherwise marks a defect. No defect is inside an arc by [F1]. Distinct states thus have distinct greatest words, giving a unitriangular minor and injectivity over $K$. [F1, F2, given, construct, algebra]

2.1 If $\delta=-2$, specialize [F2] at $q=-1$; the operators $s_i=1+d_i$ are the ordinary place swaps on binary words. If $\delta=2$, specialize at $q=1$ and conjugate the weight-$k$ word space by $w\mapsto(-1)^{\operatorname{inv}(w)}w$. Then $s_i=1-d_i$ become the ordinary place swaps: swapping $01$ and $10$ changes inversion parity, while swapping equal bits fixes the word. Hence these $s_i$ preserve the injected module and satisfy the symmetric-group relations. In either case the image of a cup is, up to a sign, the alternating two-site tensor, and every link-state image is, up to an overall sign, the product of its alternating arc factors with zeros at its defects. For $q=1$ this last assertion follows because reversing the bits on an arc changes inversion parity by the odd distance between its endpoints; that distance is odd since the arc encloses only paired sites. The same conclusion holds in characteristic two, with all signs equal. [F1, F2, step 1.1, algebra, construct]

3.1 Identify the weight-$k$ word space with squarefree monomials of degree $k$ in $x_1,\ldots,x_n$, with place permutations permuting indices. Choose the link state with arcs $(1,2),(3,4),\ldots,(2k-1,2k)$ and $m$ remaining defects. Its image, after the identification of step 2.1 and multiplication by a harmless sign, is $w=\prod_{j=1}^k(x_{2j}-x_{2j-1})$. For any link state, a permutation carries these $k$ pairs and the $m$ defect sites onto its arc pairs and defect sites; it sends $w$ to its image up to sign. Thus $w$ generates the injected module under the symmetric-group action. [F1, step 1.1, step 2.1, construct, algebra]

4.1 Let $Z=\sum_{a<b}(ab)$ act through this symmetric-group action. It commutes with every $s_i$ because conjugation permutes the transpositions, and therefore with all $d_i$. Its action on $w$ is scalar, as the following disjoint groups of terms show. A transposition within one paired factor contributes $-w$, for a total $-kw$. A transposition between two defect sites fixes $w$, giving $\binom m2w$. For a paired factor $x_b-x_a$ and defect $c$, the sum of $(ac)$ and $(bc)$ replaces that factor by $(x_b-x_c)+(x_c-x_a)=x_b-x_a$, giving $kmw$ over all such pairs. For two paired factors $(x_b-x_a)(x_d-x_c)$, expanding the four swaps $(ac),(ad),(bc),(bd)$ gives twice the original product: terms $x_ax_b$ and $x_cx_d$ cancel, and each of the four original cross terms appears with twice its original sign. Thus these terms contribute $2\binom k2w$. Consequently $Zw=c_{n,m}w$, where $c_{n,m}=\binom m2+km+k^2-2k=\binom{m+k}2+\binom k2-k$. By centrality and step 3.1, $Z$ acts by this scalar on all of $W_{n,m}$. [step 2.1, step 3.1, algebra]

5.1 On the trivial diagram module, every $s_i$ acts as $1$ in either convention, and so $Z$ acts by $\binom n2$. A scalar action on a module has the same scalar on every subquotient. The assumed composition factor therefore forces $0=\binom n2-c_{n,m}=k(n-k+1)$ in $K$. In characteristic zero, the integers $k\ge0$ and $n-k+1>0$ force $k=0$ and hence $m=n$. [F3, step 4.1, algebra]

6.1 In odd characteristic $p$, step 5.1 gives $p\mid k$ or $p\mid(n-k+1)$. Since $2k=n-m$ and $2(n-k+1)=n+m+2$, these are respectively $m+1\equiv n+1$ or $m+1\equiv-(n+1)$ modulo $p$. The two sides have the same integer parity, so divisibility by odd $p$ strengthens to divisibility by $2p$. In characteristic two, step 5.1 says $k$ is even or $n-k+1$ is even. The first condition is $n-m=2k\equiv0\pmod4$, and the second is $n+m+2=2(n-k+1)\equiv0\pmod4$. These are exactly the two asserted congruences modulo $2p=4$. All branches follow. [F3, step 5.1, algebra] ∎
