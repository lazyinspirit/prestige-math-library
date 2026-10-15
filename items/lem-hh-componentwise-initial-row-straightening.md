---
id: lem-hh-componentwise-initial-row-straightening
kind: lemma
title: "Componentwise initial-row straightening"
status: draft
origin: pipeline
pipeline_run: hopf-hecke-unfinished-15-2026-10-15
dependency_level: 4
deps:
  - def-hh-cyclotomic-murphy-elements
  - def-hh-multipartitions-standard-tableaux-and-generic-contents
  - lem-hh-type-a-garnir-straightening-and-murphy-cell-law
  - lem-hh-type-a-murphy-strong-tableau-straightening
  - thm-hh-parabolic-minimal-representatives-and-length-additivity
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
sources:
  references:
    - title: "Richard Dipper, Gordon James, and Andrew Mathas, Cyclotomic q-Schur algebras, Mathematische Zeitschrift 229 (1998), 385–416"
      url: "https://pnp.mathematik.uni-stuttgart.de/iaz/iaz1/Dipper/papers/cyclo.ps"
      locator: "§3, Lemmas 3.15–3.19 and Proposition 3.18, printed pp. 390–392: initial-kind multitableaux, component cosets, and componentwise Murphy straightening. Full text inspected."
    - title: "Andrew Mathas, Hecke algebras and Schur algebras of the symmetric group, complete author-uploaded preliminary lecture manuscript (1998)"
      url: "https://web.math.ucsb.edu/~bigelow/books/mathas.pdf"
      locator: "Chapter 3, §§3.3–3.18, PDF pp. 24–31: type-A row-module action, Garnir straightening, and fixed-row Murphy law. Full text inspected."
---

## Statement

Let $\alpha=(\alpha^{(1)},\ldots,\alpha^{(r)})$ be a multicomposition of $n$: each $\alpha^{(c)}$ is a finite sequence of nonnegative row lengths, and the total of all parts is $n$. Let $\bar\alpha^{(c)}$ be the partition obtained by sorting the parts of component $c$, and write $\bar\alpha=(\bar\alpha^{(1)},\ldots,\bar\alpha^{(r)})$. Define $u_\alpha$ by the formula for $u_\lambda$ using the component totals, let $x_\alpha$ be the sum over the row subgroup of the row-filled multicomposition tableau, and set $m^\alpha_{st}=T_{d(s)}^*u_\alpha x_\alpha T_{d(t)}$ for row-standard multitableaux $s,t$ of shape $\alpha$.

Then $m^\alpha_{st}$ is an $R$-linear combination of standard cyclotomic Murphy elements $m^\mu_{uv}$ with $\mu^{(c)}\unrhd\bar\alpha^{(c)}$ for every component $c$, and with $\operatorname{comp}_u=\operatorname{comp}_s$ and $\operatorname{comp}_v=\operatorname{comp}_t$. Define $u\unrhd_{\rm tab}s$ by requiring, for every label cutoff $m$, component $c$, and row cutoff $k$, that the number of labels at most $m$ in components $1,\ldots,c-1$ plus the first $k$ rows of component $c$ of $u$ is at least the corresponding number for $s$. Then the output tableaux also satisfy $u\unrhd_{\rm tab}s$ and $v\unrhd_{\rm tab}t$.

In particular, for a multipartition $\lambda$, standard $s,t$, and every finite generator $T_i$,
$$m_{st}T_i\equiv\sum_v r_{t,v}(T_i)m_{sv}\pmod{N^{\triangleright\lambda}},$$
with coefficients independent of $s$. Consequently $N^{\unrhd\lambda}$ and $N^{\triangleright\lambda}$ are two-sided ideals for the finite Hecke subalgebra.

## Facts & Assumptions

**Given:** $r,n\ge1$, the universal cyclotomic parameters, a multicomposition $\alpha$, and row-standard multitableaux $s,t$.

[F1] [[def-hh-cyclotomic-murphy-elements]]: the row-filled component intervals, commuting factor $u_\alpha$, row symmetrizer, distinguished tableau permutations, and anti-involution use the stated right action. For a row-standard multicomposition tableau of shape $\alpha$, bare $d(s)$ or $d(t)$ in this lemma is the local $d_\alpha$ convention of [F10] in [[lem-hh-type-a-garnir-straightening-and-murphy-cell-law]]; it is uniquely defined for any bijective filling and is minimal in the row coset when the filling is row-standard.

[F2] [[def-hh-multipartitions-standard-tableaux-and-generic-contents]]: multipartition dominance compares cumulative component sizes and row-prefix sums; standard multitableaux are the linear extensions of the componentwise box poset.

[F3] [[lem-hh-type-a-garnir-straightening-and-murphy-cell-law]] gives the ordinary integral Murphy basis, dominance ideals and fixed-first-index law. [[lem-hh-type-a-murphy-strong-tableau-straightening]] gives the full ordinary composition straightening: every output shape dominates the sorted input composition, and both output tableaux dominate their row-standard inputs at every label and row cutoff, including across different shapes. Its generic spectral proof descends coefficientwise through the independently established universal integral basis before arbitrary specialization.

[F4] [[thm-hh-parabolic-minimal-representatives-and-length-additivity]]: distinguished component-coset representatives preserve the order of labels inside every component interval and their products have additive length.

## Proof

**Given:** The component intervals, the row symmetrizers, and the multicomposition tableau conventions of the Statement.

1.1 Let $n_c=|\alpha^{(c)}|$ and $a_c=\sum_{d<c}n_d$. Write $S_\eta=S_{n_1}\times\cdots\times S_{n_r}$ for the subgroup permuting labels inside the consecutive component intervals. Every row-standard $s$ has a unique factorization $s=s_0\cdot w_s$ with $s_0$ of initial kind and $w_s$ the distinguished representative for the component coset; similarly $t=t_0\cdot w_t$. By [F4], $d_\alpha(s)=d_\alpha(s_0)w_s$, $d_\alpha(t)=d_\alpha(t_0)w_t$, and both lengths add. For any finite generator $T_i$ inside component interval $k$, the factors of $u_\alpha$ with index $c\le k$ use only $L_j$ with $j<i$ and commute distantly; factors with $c>k$ contain both $L_i,L_{i+1}$ symmetrically and commute by the Murphy divided-difference relation. Thus $u_\alpha$ commutes with all of $H(S_\eta)$. [F1, F4, algebra]

2.1 For initial-kind $s_0,t_0$, the row group and distinguished tableau permutations split into their component intervals. Since $u_\alpha$ commutes with $S_\eta$, the finite part of $m^\alpha_{s_0t_0}$ is a product of ordinary type-A row Murphy elements, one for each component. Apply the ordinary type-A composition-to-partition straightening [F3] separately in each component. Every output component partition dominates the sorted input component partition. The row-tableau prefix inequalities are exactly the componentwise inequalities from [F3]. The component factors commute because their simple-generator intervals are disjoint, so multiplying their finite expansions gives the asserted initial-kind expansion and componentwise dominance. [F1, F2, F3, step 1.1]

3.1 Restore arbitrary $s,t$ by multiplying each initial-kind term on the left by $T_{w_s}^*$ and on the right by $T_{w_t}$. Length additivity makes these products the Murphy elements indexed by the relabeled row-standard tableaux, without lower-length corrections. The component assignments are preserved because the same component coset representatives act on every term. To check tableau-prefix dominance after relabeling, fix a global label cutoff $m$. Since each $w_s$ preserves order within an initial component interval, the labels of that interval sent to values at most $m$ form an initial segment. Every cumulative row count of a relabeled tableau is therefore the corresponding componentwise row-prefix count at that segment length, where the inequalities have already been proved in step 2.1. The same argument applies to $w_t$. [F2, F4, step 1.1, step 2.1]

4.1 For each multipartition $\lambda$, the exact finite row-module action expresses every $m_{st}T_i$ as a combination of row-standard elements of shape $\lambda$ with first index $s$. Apply the componentwise expansion just proved: all output shapes dominate $\lambda$ component by component, so $N^{\unrhd\lambda}$ is a right ideal for the finite Hecke subalgebra. Applying $*$ gives left closure. The strict span is the sum of these ideals over shapes strictly dominating $\lambda$, so it is also a two-sided ideal for that subalgebra. This argument proves ideal closure before using a fixed-first-index congruence. [F1, F2, F3, step 2.1, step 3.1]

5.1 Now take $s=t^\lambda$. In every same-shape standard output term from that componentwise expansion the first tableau $u$ dominates $t^\lambda$. The row-filled tableau is maximal for every row-prefix count among standard tableaux of this fixed shape, so equality of all the counts forces $u=t^\lambda$. Thus $m_{t^\lambda,t}T_i$ is a linear combination of the $m_{t^\lambda,v}$ modulo $N^{\triangleright\lambda}$. Its coefficients depend only on $t,T_i$ and $\lambda$. Multiply this congruence on the left by $T_{d(s)}^*$ for arbitrary standard $s$. The error remains in $N^{\triangleright\lambda}$ by step 4.1, and the displayed terms become $m_{sv}$. This proves the asserted finite-generator law with coefficients independent of $s$. [F1, F2, F3, step 4.1, step 3.1] ∎
