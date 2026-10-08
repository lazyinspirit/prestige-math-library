---
id: lem-dual-knuth-star-operations-give-antiparallel-kazhdan-lusztig-graph-edges
kind: lemma
title: Star operations are Knuth moves and preserve the relevant cells
status: draft
origin: pipeline
pipeline_run: frontier-43-complex-representation-15
deps: [def-star-operations-on-the-symmetric-group, thm-kazhdan-lusztig-basis-multiplication-formula, def-left-right-and-two-sided-kazhdan-lusztig-preorders-and-cells, thm-knuth-equivalence-classes-are-insertion-tableau-fibers, thm-existence-and-uniqueness-of-the-kazhdan-lusztig-basis, def-kazhdan-lusztig-polynomials-in-the-classical-q-normalization, def-normalized-type-a-hecke-algebra-and-its-bar-involution, lem-bruhat-order-basic-properties-for-permutations]
dependency_level: 8
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Susumu Ariki, Robinson–Schensted correspondence and left cells, arXiv:math/9910117 — Definition 3.2, Theorem 3.3, and the complete proof of Lemma 3.4: Knuth moves as star operations and the corresponding cell relation."
      url: "https://arxiv.org/pdf/math/9910117"
      locator: "§§3.2–3.3, printed pp. 7–8 / PDF pp. 7–8: Definition 3.2, Theorem 3.3, and the full proof of Lemma 3.4 were reread."
    - title: "G. Lusztig, Hecke Algebras with Unequal Parameters (revised version arXiv:math/0208154v2) — Corollary 6.7 and the rank-two equal-parameter calculation in Proposition 7.3."
      url: "https://arxiv.org/pdf/math/0208154"
      locator: "§§6.6–6.7, printed pp. 30–31, for left/right multiplication; §7.3, printed pp. 31–32, for the equal-parameter dihedral basis calculation specialized to type $A_2$. Both original TeX passages were reread."
    - title: "Donald E. Knuth, Permutations, Matrices, and Generalized Young Tableaux, Pacific J. Math. 34 (1970), 709–727 — Theorem 6 and the two local transformations."
      url: "https://msp.org/pjm/1970/34-3/pjm-v34-n3-p09-s.pdf"
      locator: "§6, equations (6.6)–(6.7), Theorem 6 and its canonical-row-word proof, printed pp. 722–724."
verification:
  precheck: pass
---

## Facts & Assumptions

**Given:** $n\ge3$, $1\le i\le n-2$, $r=s_i$, $t=s_{i+1}$, $W_I=\langle r,t\rangle\cong S_3$, and the corresponding right star operation.

[F1] Each right coset of $W_I$ has a unique shortest representative $\widetilde w$; its six elements have lengths $\ell(\widetilde w)+0,\ell(\widetilde w)+1,\ell(\widetilde w)+1,\ell(\widetilde w)+2,\ell(\widetilde w)+2,\ell(\widetilde w)+3$, and the star involution pairs $\widetilde w r\leftrightarrow\widetilde w rt$ and $\widetilde w t\leftrightarrow\widetilde w tr$. In one-line notation these pairs are $bac\leftrightarrow bca$ and $acb\leftrightarrow cab$ ([[def-star-operations-on-the-symmetric-group]]).

[F2] A Knuth move preserves the insertion tableau, and Knuth equivalence is exactly equality of insertion tableaux ([[thm-knuth-equivalence-classes-are-insertion-tableau-fibers]]).

[F3] For a simple reflection $s$, if $sw>w$ then $C_sC_w=C_{sw}+\sum_{z:sz<z<w}\mu(z,w)C_z$, and if $sw<w$ then $C_sC_w=(v+v^{-1})C_w$; on the right, if $ws>w$ then $C_wC_s=C_{ws}+\sum_{zs<z<w}\mu(z,w)C_z$, and if $ws<w$ then $C_wC_s=(v+v^{-1})C_w$ ([[thm-kazhdan-lusztig-basis-multiplication-formula]]).

[F4] A right coefficient step is a right preorder step, and $x\sim_Ry$ iff $x^{-1}\sim_Ly^{-1}$ ([[def-left-right-and-two-sided-kazhdan-lusztig-preorders-and-cells]]).

[F5] In $C_w=\sum_{x\le w}p_{x,w}H_x$, the coefficients are supported on $x\le w$ and $p_{w,w}=1$; if $x\lessdot w$ is a Bruhat cover, then $p_{x,w}=v$ ([[thm-existence-and-uniqueness-of-the-kazhdan-lusztig-basis]]). The latter follows from the degree-one leading term and parity clauses.

[F6] For $x\le y$, $p_{x,y}=v^{\ell(y)-\ell(x)}P_{x,y}(v^{-2})$, and for $x<y$, $\mu(x,y)$ is the coefficient of $v$ in $p_{x,y}$ ([[def-kazhdan-lusztig-polynomials-in-the-classical-q-normalization]]).

[F7] The standard Hecke basis satisfies $H_s^2=1+(v^{-1}-v)H_s$ ([[def-normalized-type-a-hecke-algebra-and-its-bar-involution]]).

[F8] Bruhat order on $S_n$ has the reduced-subword characterization and is graded by inversion length ([[lem-bruhat-order-basic-properties-for-permutations]]).

## Statement

Let $D_i$ and $(-)^*$ be as in [[def-star-operations-on-the-symmetric-group]]. (a) For $w\in D_i$, $w^*$ is obtained from $w$ by one elementary Knuth relation on the letters in positions $i,i+1,i+2$; in particular $P(w^*)=P(w)$. Put $D_{ij}:=\{w\in D_i:ws_i<w,\ ws_{i+1}>w\}$ and $D_{ji}:=\{w\in D_i:ws_i>w,\ ws_{i+1}<w\}$. The restriction $K_{ij}$ of $(-)^*$ is a bijection $D_{ij}\to D_{ji}$ whose inverse is $K_{ji}$. (b) For every $w\in D_i$, if $a$ and $b$ are the shorter and longer, respectively, of $\{w,w^*\}$, then $\mu(a,b)=1$ and $w^*\sim_Rw$; by inversion, $^*w\sim_Lw$ whenever $w^{-1}\in D_i$. (c) Inside the rank-two subgroup $W_I=\langle s_i,s_{i+1}\rangle\cong S_3$, every Kazhdan–Lusztig polynomial $P_{x,y}$ with $x\le y$ is $1$, and $\mu(x,y)=1$ exactly for Bruhat covers $x\lessdot y$. For every shortest representative $\widetilde w$ of a right $W_I$-coset, the ambient pairs $\widetilde w s_i\lessdot\widetilde w s_i s_{i+1}$ and $\widetilde w s_{i+1}\lessdot\widetilde w s_{i+1}s_i$ therefore also have $\mu$-coefficient $1$.

## Proof

**Proof technique:** use the explicit $S_3$ star table, compute its rank-two Kazhdan–Lusztig basis, and apply the left/right multiplication formulas to the two directed edges of each star pair.

1.1 **Knuth moves and the restricted bijection.** In the sorted-coset notation of [F1], the four elements of $D_i$ have local triples $bac,bca,acb,cab$, and the star table exchanges $bac\leftrightarrow bca$ and $acb\leftrightarrow cab$. These are exactly the two elementary Knuth moves, so [F2] gives $P(w^*)=P(w)$. The right descent of each pair is exchanged between $s_i$ and $s_{i+1}$; hence $(-)^*$ maps $D_{ij}$ to $D_{ji}$. Since $(-)^*$ is an involution, its restriction is a bijection with inverse $K_{ji}$. [F1, F2]

1.2 **The rank-two basis and coefficients.** Write $e$ for the identity and $w_0=rtr=trt$. The six elements of $W_I$ are $e,r,t,rt,tr,w_0$, and their Bruhat intervals follow from reduced subwords. Since $e\lessdot r,t$, the support and diagonal clauses of [F5] give $C_r=H_r+v$ and $C_t=H_t+v$. For $C_rC_t$, the left multiplication formula has no correction term: $[e,t]=\{e,t\}$ and $re=r>e$. Similarly, $C_tC_r$ has no correction term because $[e,r]=\{e,r\}$ and $te=t>e$. Thus $C_{rt}=C_rC_t$ and $C_{tr}=C_tC_r$; expanding with [F7] gives $C_{rt}=H_{rt}+v(H_r+H_t)+v^2H_e$ and $C_{tr}=H_{tr}+v(H_r+H_t)+v^2H_e$. The interval $[e,tr)$ consists of $e,t,r$, and only $r$ satisfies $rz<z$ there; since $r\lessdot tr$, [F5]–[F6] give $\mu(r,tr)=1$. Thus $C_{w_0}=C_rC_{tr}-C_r=H_{w_0}+v(H_{rt}+H_{tr})+v^2(H_r+H_t)+v^3H_e$. Comparing these six expansions with $p_{x,y}=v^{\ell(y)-\ell(x)}P_{x,y}(v^{-2})$ shows $P_{x,y}=1$ for every $x\le y$ in $W_I$. For such pairs the coefficient of $v$ in $p_{x,y}=v^{\ell(y)-\ell(x)}$ is $1$ exactly when the length difference is $1$, i.e. exactly on covers. [F3, F5, F6, F7, F8, algebra]

1.3 **Ambient star-pair coefficients.** The lengths in [F1] show that each of $\widetilde w r\lessdot\widetilde w rt$ and $\widetilde w t\lessdot\widetilde w tr$ is an ambient Bruhat cover: the upper element is the lower element multiplied on the right by one simple reflection and its length increases by one. Thus [F5]–[F6] give $\mu(\widetilde w r,\widetilde w rt)=\mu(\widetilde w t,\widetilde w tr)=1$. These are precisely the shorter-to-longer star-pair coefficients, so the Statement's coefficient claim holds for either choice of $w$. [F1, F5, F6, F8]

2.1 **Right-cell equivalence.** Since the claim is symmetric in the star pair, take its shorter member $w$. By [F1], either $w=\widetilde w r$ and $w^*=wt=\widetilde w rt$, or $w=\widetilde w t$ and $w^*=wr=\widetilde w tr$. In the first case [F3] gives a coefficient-$1$ right step from $w$ to $w^*$; also $w^*r=\widetilde w rtr$ has length $\ell(\widetilde w)+3$, whereas $wr=\widetilde w$, so the right-ascent formula for $C_{w^*}C_r$ contains $C_w$ with coefficient $\mu(w,w^*)=1$ by step 1.3. In the second case the coefficient-$1$ step comes from $C_wC_r$, and $w^*t=\widetilde w trt$ has length $\ell(\widetilde w)+3$ while $wt=\widetilde w$, so $C_{w^*}C_t$ contains $C_w$ with coefficient $\mu(w,w^*)=1$. Each case therefore gives both $w^*\le_Rw$ and $w\le_Rw^*$, proving $w^*\sim_Rw$. [F1, F3, F4, step 1.3]

3.1 **The dual statement.** For $w^{-1}\in D_i$, step 2.1 gives $(w^{-1})^*\sim_Rw^{-1}$. Inverting this equivalence by [F4] yields $^*w=((w^{-1})^*)^{-1}\sim_Lw$. [F1, F4, step 2.1] ∎

## Remarks

The original scaffold's proposed identity $C_{\widetilde w u}=\sum_{t\le u}v^{\ell(u)-\ell(t)}H_{\widetilde w t}$ for an arbitrary shortest right-coset representative is false: with $n=4$, $W_I=\langle s_1,s_2\rangle$, $\widetilde w=s_3$, and $u=s_2$, the left side is $H_{s_3s_2}+vH_{s_3}+vH_{s_2}+v^2H_e$, whereas the displayed coset sum omits $vH_{s_2}+v^2H_e$. The rank-two claim is stated for the subgroup itself, and the ambient star-pair coefficients follow separately from the cover property.

The multiplication-formula and cell-definition suppliers are provisional because their shared basis-existence supplier has an owner-held scope issue. This proof is complete from the stated coefficient and cover clauses, but its decision must remain escalated until those actual supplier paths are reconciled. No choice principle is used.
