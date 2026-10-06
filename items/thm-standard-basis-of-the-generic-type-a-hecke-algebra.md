---
id: thm-standard-basis-of-the-generic-type-a-hecke-algebra
kind: theorem
title: "The standard basis of the generic type-A Hecke algebra"
status: draft
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
deps:
  - def-generic-type-a-hecke-algebra
  - def-weyl-group-and-length-for-finite-gl-n
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Ivan Losev, Lecture 8: Representations of GL_n(F_q) - Section 2.2, Theorem 2.5 (H_v(n) is free over Z[v^{+-1}] with basis T_w), PDF p. 4"
      url: "https://ivanloseu.github.io/RT/RT8.pdf"
    - title: "Olivier Dudas and Jean Michel, Lectures on Finite Reductive Groups and Their Representations - Section 11.2 (genericity and flatness of Hecke algebras), printed p. 47"
      url: "https://webusers.imj-prg.fr/~jean.michel/papiers/lectures_beijing_2015.pdf"
    - title: "Jay Taylor, Finite Reductive Groups - Definition 5.13 and Remark 5.14 (generic Hecke algebra), printed pp. 44-45"
      url: "https://pages.uoregon.edu/belias/WARTHOG/DLtheory/TaylorReductiveGroups.pdf"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Statement

In the generic type-A Hecke algebra $H_v(n)$ over $A=\mathbb Z[v^{\pm1}]$ with
generators $T_1,\dots,T_{n-1}$, the quadratic relations
$(T_i-v)(T_i+1)=0$, the braid relations and the distant commutations, and with
$T_w$ the product of the $T_i$ along a reduced word for $w\in S_n$
([[def-generic-type-a-hecke-algebra]]):

1. $\{T_w:w\in S_n\}$ is an $A$-basis of $H_v(n)$; in particular $H_v(n)$ is
free of rank $n!$ over $A$;
2. for every $w\in S_n$ and every $1\le i\le n-1$,
$$T_wT_i=T_{ws_i}\quad\text{if }\ell(ws_i)=\ell(w)+1,\qquad T_wT_i=(v-1)T_w+v\,T_{ws_i}\quad\text{if }\ell(ws_i)=\ell(w)-1,$$
where $\ell$ is the inversion length of $S_n$
([[def-weyl-group-and-length-for-finite-gl-n]]); consequently the rule rewrites
every monomial in the generators as an $A$-linear combination of the $T_w$.

No choice principle is used.

## Facts & Assumptions

**Given:** The presented $A$-algebra $H_v(n)$ and its generators $T_i$, where
$A=\mathbb Z[v^{\pm1}]$, and $S_n$ with adjacent transpositions and inversion
length $\ell$ ([[def-generic-type-a-hecke-algebra]],
[[def-weyl-group-and-length-for-finite-gl-n]]).

[F1] $H_v(n)$ has the quadratic, adjacent braid and distant commutation
relations, and $T_w$ denotes the product along a chosen reduced expression
([[def-generic-type-a-hecke-algebra]]).

[F2] Permutations are composed as functions; in one-line notation, right
multiplication by $s_i=(i\ i+1)$ swaps entries in positions $i,i+1$, and
$\ell(w)$ is the number of inversions
([[def-weyl-group-and-length-for-finite-gl-n]]).

## Proof

**Proof technique:** direct.

1.1 **Inversion length.** Write $w=(a_1,\dots,a_n)$ in one-line notation. Right multiplication by $s_i$ swaps the adjacent entries $a_i,a_{i+1}$. Every inversion involving a position outside $i,i+1$ has the same total contribution before and after this swap; only the pair $(i,i+1)$ changes. Thus $\ell(ws_i)=\ell(w)+1$ when $a_i<a_{i+1}$ and $\ell(ws_i)=\ell(w)-1$ when $a_i>a_{i+1}$. Each adjacent transposition changes inversion count by one, so every word for $w$ has length at least $\ell(w)$. Conversely, a nonidentity permutation has an adjacent descent, since an increasing one-line permutation is the identity. Repeatedly swapping an adjacent descent decreases the inversion count by one until the identity is reached; reversing these swaps writes $w$ as a word of length $\ell(w)$. Therefore inversion length is minimal word length. Every prefix of a reduced word is reduced, and each successive letter raises length by one. [F2, algebra]

2.1 **Connectivity of reduced words.** We prove by induction on $r=\ell(w)$ that any two reduced words for $w$ are related by commuting moves and the adjacent braid moves. The assertion is immediate for $r=0$. For two reduced words with the same last letter $s_i$, remove it and apply induction to the reduced prefixes for $ws_i$. Otherwise their last letters $s_i,s_j$ are distinct right descents of $w$. If $|i-j|>1$, the descents occupy disjoint positions and remain descents after applying the other transposition. The common permutation $u:=ws_is_j=ws_js_i$ has length $r-2$. Choose a reduced word $p$ for $u$. Then $ps_j$ and $ps_i$ are reduced words for $ws_i$ and $ws_j$. By induction the prefixes of the original words connect to these, and appending their final letters reduces the comparison to $ps_js_i$ versus $ps_is_j$, which differ by a commutation. If $j=i+1$ (the case $i=j+1$ is symmetric), the entries of $w$ in positions $i,i+1,i+2$ are strictly decreasing. The common permutation $u:=ws_is_js_i=ws_js_is_j$ has length $r-3$. For a reduced word $p$ of $u$, $ps_is_j$ and $ps_js_i$ are reduced words for $ws_i$ and $ws_j$. Induction on their prefixes, followed by appending the last letters, reduces the comparison to $ps_is_js_i$ versus $ps_js_is_j$, which differ by the adjacent braid move. [F2, step 1.1, algebra]

2.2 **The quadratic relation.** Let $E:=\bigoplus_{w\in S_n}Ae_w$. Define an $A$-linear operator $\rho_i$ by $e_w\rho_i=e_{ws_i}$ if $\ell(ws_i)=\ell(w)+1$, and $e_w\rho_i=(v-1)e_w+ve_{ws_i}$ if $\ell(ws_i)=\ell(w)-1$. If $i$ is an ascent, then $ws_i$ is a descent and $e_w\rho_i^2=(v-1)e_{ws_i}+ve_w=(v-1)e_w\rho_i+ve_w$. If $i$ is a descent, then $ws_i$ is an ascent, and $e_w\rho_i^2=(v-1)e_w\rho_i+ve_w$. Hence $\rho_i^2=(v-1)\rho_i+v$. [F1, step 1.1, algebra]

3.1 **Distant commutation.** Suppose $|i-j|>1$. Swapping positions $i,i+1$ does not change the ascent/descent status in positions $j,j+1$, and conversely. Thus the two operators commute; the common values in the four cases are $$\begin{array}{c|l} \text{statuses at }w& e_w\rho_i\rho_j=e_w\rho_j\rho_i\\ \hline \text{both ascents}&e_{ws_is_j}\\ i\text{ ascent},\ j\text{ descent}&(v-1)e_{ws_i}+ve_{ws_is_j}\\ i\text{ descent},\ j\text{ ascent}&(v-1)e_{ws_j}+ve_{ws_is_j}\\ \text{both descents}&(v-1)^2e_w+v(v-1)(e_{ws_i}+e_{ws_j})+v^2e_{ws_is_j}. \end{array}$$ [F2, step 1.1, step 2.2, algebra]

3.2 **Adjacent braid relation.** Let $j=i+1$ and write $(a,b,c)$ for the entries of $w$ in positions $i,i+1,i+2$. Put $E=e_w$, $E_i=e_{ws_i}$, $E_j=e_{ws_j}$, $E_{ij}=e_{ws_is_j}$, $E_{ji}=e_{ws_js_i}$, and $E_{iji}=e_{ws_is_js_i}=e_{ws_js_is_j}$. Applying the ascent/descent rule from step 2.2 to these three positions gives the same value for $e_w\rho_i\rho_j\rho_i$ and $e_w\rho_j\rho_i\rho_j$ in each of the six possible one-line order types: $$\begin{array}{c|l} \text{order of }(a,b,c)&e_w\rho_i\rho_j\rho_i=e_w\rho_j\rho_i\rho_j\\ \hline a<b<c&E_{iji}\\ a<c<b&(v-1)E_{ij}+vE_{iji}\\ b<a<c&(v-1)E_{ji}+vE_{iji}\\ b<c<a&(v-1)^2E_j+v(v-1)(E+E_{ji})+v^2E_{iji}\\ c<a<b&(v-1)^2E_i+v(v-1)(E+E_{ij})+v^2E_{iji}\\ c<b<a&((v-1)^3+v(v-1))E+v(v-1)^2(E_i+E_j)+v^2(v-1)(E_{ij}+E_{ji})+v^3E_{iji}. \end{array}$$ These cases exhaust the distinct entries $a,b,c$, so $\rho_i\rho_j\rho_i=\rho_j\rho_i\rho_j$. [F1, F2, step 1.1, step 2.2, algebra]

4.1 Steps 2.2, 3.1 and 3.2 verify the defining relations of $H_v(n)$, so $E$ is a right $H_v(n)$-module by $e_w(T_{i_1}\cdots T_{i_r}):=e_w\rho_{i_1}\cdots\rho_{i_r}$. If $i_1\cdots i_k$ is a reduced word for $w$, step 1.1 shows every prefix is reduced and every letter is an ascent at its prefix, hence $e_{\mathrm{id}}T_{i_1}\cdots T_{i_k}=e_w$. By step 2.1 any two reduced expressions for $w$ differ by commutations and adjacent braid moves, which hold in $H_v(n)$ by [F1]; consequently $T_w$ is independent of the reduced expression. [F1, F2, step 1.1, step 2.1, step 2.2, step 3.1, step 3.2]

5.1 **Independence.** If $\sum_wa_wT_w=0$ in $H_v(n)$ with $a_w\in A$, applying the right action of step 4.1 to $e_{\mathrm{id}}$ gives $\sum_wa_we_w=0$ in the free module $E$, so every $a_w=0$. [step 4.1, algebra]

5.2 **Multiplication rule and spanning.** Let $u=ws_i$. If $\ell(us_i)=\ell(u)+1$, a reduced word for $u$ followed by $i$ is reduced by step 1.1, so $T_uT_i=T_{us_i}$. If $\ell(us_i)=\ell(u)-1$, then $u=(us_i)s_i$ is reduced, so the first case and the quadratic relation [F1] give $T_uT_i=T_{us_i}T_i^2=(v-1)T_u+vT_{us_i}$. Every monomial in the generators reduces by induction on its number of letters to an $A$-linear combination of the $T_w$, so they span. [F1, step 1.1, step 4.1, algebra]

6.1 By step 5.1 the $T_w$ are linearly independent, and by step 5.2 they span. Thus they form an $A$-basis, giving clause (1); the multiplication rule of step 5.2 proves clause (2). The proof uses only inversion-count arguments, the defining presentation and the displayed finite local cases; no choice principle is used. [step 5.1, step 5.2] ∎

## Remarks

**Comparison with the Soergel normalization.** The same statement is proved
independently in the Soergel normalization in the item
`lem-type-a-hecke-standard-basis-for-soergel-comparison`, homed later in the
reading order, after the substitution $q=v^{-2}$ relating the two parameters.
That comparison is orientation only and is not a premise of the proof above.
