---
id: lem-weighted-collection-in-lower-central-coordinates
kind: lemma
title: Weighted collection with finite-order carries
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: Druţu–Kapovich, Geometric Group Theory (837-page edition)
      url: https://www.math.ucdavis.edu/~kapovich/EPR/ggt.pdf
      locator: Lemma 14.21 and Proposition 14.25, pp.505–508,510–511; retain the last-layer conclusion only from part II
status: draft
origin: pipeline
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-08
proof_strategy: direct
deps: ["lem-hall-malcev-finite-collection-alphabets-include-torsion-carries", "lem-hall-malcev-commutator-product-identities", "lem-hall-malcev-lower-central-commutators-add-weights", "lem-finite-lower-central-coordinate-systems-exist"]
---
## Statement

Fix a finitely generated nilpotent group $G$ of class $c$, a mixed lower-central coordinate system, and a finite alphabet of letters assigned weight $i$ only if their values lie in $\gamma_i(G)$. For every $\lambda\ge1$ there is $C$ such that, for $R\ge1$, a word with at most $\lambda R^i$ letters of each weight $i$ has normalized free coordinates in layer $j$ bounded in absolute value by $CR^j$, with canonical bounded residues in finite factors. If its value lies in $\gamma_k$, all earlier coordinates vanish. In particular a word of ordinary length $n$ has free coordinate bounds $C\max(1,n)^j$. Constants depend on the fixed alphabets, coordinate system and $\lambda$, not on the word or $R$.

## Facts & Assumptions

**Given:** Use ambient lower-central weights throughout; inverse letters retain weight. Finite alphabets and $\lambda$ are fixed.

[F1] Finite alphabets can be closed under commutators and carries, with fixed replacements into cyclic-factor lifts ([[lem-hall-malcev-finite-collection-alphabets-include-torsion-carries]]).

[F2] Commutators use $xyx^{-1}y^{-1}$ and have product and inverse identities ([[lem-hall-malcev-commutator-product-identities]]).

[F3] Commutator errors have at least the sum of their ambient input weights ([[lem-hall-malcev-lower-central-commutators-add-weights]]).

[F4] Mixed coordinates exist uniquely, and coordinates before layer $k$ vanish for elements in $\gamma_k$ ([[lem-finite-lower-central-coordinate-systems-exist]]).

## Proof

1.1 Enlarge the finite alphabet by the fixed coordinate lifts and close it as in F1. Assign each nonidentity letter its actual ambient depth. This can only raise its previous assigned weight; since $R\ge1$, its cumulative count through depth $j$ is initially at most $j\lambda R^j$. At the start of a layer-$i$ stage, replace each depth-$i$ letter by its fixed word in the chosen layer-$i$ cyclic lifts followed by deeper letters. Replacing $O(R^i)$ letters by uniformly bounded words contributes $O(R^i)\le O(R^j)$ to every depth $j\ge i$. Close the finitely many new alphabets in advance for each of the finitely many layers. No replacement contains a letter of depth below $i$. [F1, given]

2.1 Fix one cyclic lift $t$ of weight $i$. Extract its occurrences and inverse occurrences one by one from the uncollected suffix, always taking the leftmost such occurrence. Move this letter to the front of that suffix, after already fixed coordinates, by $xt=tx[x^{-1},t^{-1}]$ (the same identity holds with $t^{-1}$ in place of $t$). Indeed multiplying the right side gives $t x x^{-1}t^{-1}x t=xt$. A crossing of a depth-$a$ letter creates at most one error of depth at least $a+i$. Place the error to the right of the moving letter; it is not crossed again during this extraction. Thus one extraction crosses each letter of the old suffix prefix at most once. It produces no new weight-$i$ occurrence. [F2, F3, step 1.1]

3.1 Let $U_j(\ell)$ count all letters of depth at most $j$ in the uncollected suffix after $\ell$ extractions, before reducing the extracted power. Set $U_j=0$ for $j<i$. The crossing rule gives $U_j(\ell+1)\le U_j(\ell)+U_{j-i}(\ell)$. Induction on $\ell$, using $\binom{\ell}{s}+\binom{\ell}{s-1}=\binom{\ell+1}{s}$, therefore gives $U_j(L)\le\sum_{s\ge0,\ j-si\ge i}\binom{L}{s}U_{j-si}(0)$. There are $L=O(R^i)$ occurrences to extract; every summand is bounded by $O(R^{si})O(R^{j-si})=O(R^j)$. The number of summands is at most $c$, independent of $R$. At intermediate extraction counts the same bound holds. [step 2.1, algebra]

4.1 The extracted power is $t^m$ with $|m|\le L$. If its factor is infinite cyclic retain this exponent. If its factor has order $d>1$, divide $m=qd+r$ with $0\le r<d$ and rewrite $t^m=t^r(t^d)^q$. This identity holds also for negative $m$. The carry $t^d$ has depth greater than $i$ or is $1$. Append at most $|q|\le L+1$ copies of that carry or its inverse to the suffix immediately after $t^r$. They add $O(R^i)\le O(R^j)$ letters to any deeper cumulative count. Thus the same weight bounds hold after residue reduction; if the carry is $1$, it is deleted. [F1, step 3.1, algebra]

5.1 Process the finitely many cyclic lifts in layer $i$ in their prescribed order. Step 3.1 and step 4.1 preserve the bounds after each such processing, with a changed constant independent of $R$. Errors and carries all have depth greater than $i$, so the layer then contains only its fixed normalized prefix. Continue to layer $i+1$. After at most $c$ layers the suffix is trivial. The resulting ordered product is the unique mixed normal form, so its free coordinates have the asserted bounds. If its value is in $\gamma_k$, successively projecting to the earlier factors forces all their normalized coordinates to be zero. This argument never uses the intrinsic lower-central series of the subgroup $\gamma_k$. [F4, step 1.1, step 3.1, step 4.1]

6.1 For ordinary words assign generator letters weight one and set $R=\max(1,n)$; their number is at most $R$. The bound follows, including the empty word, whose coordinates are zero. Reversal with inversion leaves the weighted counts unchanged; concatenation adds counts, so the same estimate applies with the sum of the two constants $\lambda$. If $c=0$ there are no nonidentity letters or coordinates. [step 5.1] ∎

## Source notes

[Druţu–Kapovich, Geometric Group Theory (837-page edition)](https://www.math.ucdavis.edu/~kapovich/EPR/ggt.pdf), Lemma 14.21 and Proposition 14.25, pp.505–508,510–511; retain the last-layer conclusion only from part II. Revised Lemma 14.21 supplies collection by extraction. The recurrence is proved here using cumulative ambient-depth counts for arbitrary layer i. Carries are delayed until a generator is fully extracted, so their contribution is explicitly bounded. No change to promised scope.
