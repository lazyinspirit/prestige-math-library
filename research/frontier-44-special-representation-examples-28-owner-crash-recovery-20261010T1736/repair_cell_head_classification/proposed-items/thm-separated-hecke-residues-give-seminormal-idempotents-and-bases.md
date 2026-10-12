---
id: thm-separated-hecke-residues-give-seminormal-idempotents-and-bases
kind: theorem
title: "Separated Hecke residues give seminormal idempotents and bases"
status: draft
origin: pipeline
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-quantum-characteristic-of-an-invertible-hecke-parameter, def-type-a-hecke-specht-module-and-cell-form, thm-hecke-jucys-murphy-action-is-dominance-triangular, thm-murphy-tableau-elements-form-a-cellular-basis, thm-nonzero-cell-heads-classify-the-simple-modules-of-a-cellular-algebra]
justified_by: []
aliases: []
landmark: false
dependency_level: 11
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Andrew Mathas, Hecke algebras and Schur algebras of the symmetric group, complete prepublication manuscript (1998; expanded published edition: AMS University Lecture Series 15, 1999); complete 79-page manuscript, SHA-256 8cfeb611a95a3ff25cb95ad22bfd3a68475818301c34b04d131a8480a1b997e0"
      url: "https://web.math.ucsb.edu/~bigelow/books/mathas.pdf"
      locator: "Lemma 3.32, Proposition 3.33 and Theorem 3.34, printed pp. 30-34: separation of q-content sequences when e>n, the spectral projectors and the seminormal basis of the Murphy cell module; the t dominates s branch of Theorem 3.34(ii) in the 1998 manuscript is inconsistent with the Hecke relations and is corrected here following the clean sources below"
    - title: "Jun Hu and Andrew Mathas, Seminormal forms and cyclotomic quiver Hecke algebras of type A, arXiv:1304.0906, complete 51-page preprint"
      url: "https://arxiv.org/abs/1304.0906"
      locator: "Example 3.11 with the axial distance (3.8), Lemma 3.12 and Proposition 3.17: the seminormal coefficient system and the two branches of the generator action"
    - title: "Andrew Mathas, Seminormal forms and Gram determinants for cellular algebras, arXiv:math/0604108; J. reine angew. Math. 619 (2008) 141-173; complete 29-page author-hosted preprint, SHA-256 a2cd21ced7f35dee695388304c26804ef8ac9c54b661a5d624501c80864698a1"
      url: "https://arxiv.org/pdf/math/0604108"
      locator: "Proposition 2.7, Definition 2.8 and Proposition 4.13 with the appendix: the separation condition and the abstract spectral construction of seminormal idempotents from separating JM-elements"
---

## Statement

Let $F$ be a field, $q\in F^{\times}$, let $e=e(F,q)$ and assume $e>n$ (with $e=\infty$ allowed); let $\lambda\vdash n$, $H=H_{F,q}(S_n)$, and let $S^{\lambda}_{\mathrm M}$ be the Murphy cell module with Murphy basis $(m_t)_{t\in\mathrm{Std}(\lambda)}$ ([[def-type-a-hecke-specht-module-and-cell-form]]).

1. (**Separation**) If $s,t$ are standard $\lambda$-tableaux with $[\operatorname{content}_s(k)]_q=[\operatorname{content}_t(k)]_q$ for all $1\le k\le n$ then $s=t$. More precisely, if the q-content values agree for all $k\notin\{i,i+1\}$ for some $i$, then $s=t$ or $t=s(i\ i+1)$. 2. (**Idempotents**) Let $\mathcal R_k$ be the set of distinct q-content values of the entry $k$ over standard tableaux of **all** partitions of $n$. For a standard $\lambda$-tableau $t$ define $$F_t:=\prod_{k=1}^{n}\ \prod_{\substack{c\in\mathcal R_k\\        c\ne[\operatorname{content}_t(k)]_q}}        \frac{L_k-c}{[\operatorname{content}_t(k)]_q-c}\in F[L_1,\ldots,L_n].$$ These are orthogonal idempotents of $H$; their actions on $S_{\mathrm M}^\lambda$ project onto the corresponding simultaneous eigenlines. Put $f_t=m_tF_t$. Then $f_tL_k=[\operatorname{content}_t(k)]_qf_t$ and $f_t=m_t+\sum_{s\rhd t}a_sm_s$. The global content sets are essential for the asserted idempotency in $H$, rather than only the induced same-shape endomorphisms. 3. (**Orthogonal seminormal basis**) $\{f_t:t\in\mathrm{Std}(\lambda)\}$ is a basis of $S^{\lambda}_{\mathrm M}$ satisfying $f_tF_s=\delta_{ts}f_t$ and $\langle f_s,f_t\rangle_\lambda=\delta_{st}\langle f_t,f_t\rangle_\lambda$; it is the **seminormal basis** of the Murphy cell module. 4. (**Generator action**) Let $s$ be a standard $\lambda$-tableau, $1\le i<n$ and $t:=s(i\ i+1)$, and put $\rho:=\operatorname{content}_s(i)-\operatorname{content}_s(i+1)\in\mathbb Z$. If $i$ and $i+1$ lie in the same row of $s$ then $f_sT_i=q\,f_s$; if they lie in the same column then $f_sT_i=-f_s$; otherwise $t$ is standard and $$f_sT_i=\alpha_i(s)\,f_t-\frac{1}{[\rho]_q}f_s,\qquad \alpha_i(s):=\begin{cases}1,&s\rhd t,\\[1mm]\dfrac{[1+\rho]_q[1-\rho]_q}{[\rho]_q[-\rho]_q},&t\rhd s,\end{cases}$$ where $[-\rho]_q$ is the extended quantum integer of [[def-hecke-jucys-murphy-elements-and-q-contents]] and for the swapped tableau $\operatorname{content}_t(i)-\operatorname{content}_t(i+1)=-\rho$. No semisimplicity of $H$ is assumed and no choice principle is used.

## Facts & Assumptions

**Given:** A field $F$, $q\in F^{\times}$ with quantum characteristic $e>n$, a partition $\lambda\vdash n$, the Murphy cell module $S^{\lambda}_{\mathrm M}$ with Murphy basis $(m_t)$ and cell form ([[def-type-a-hecke-specht-module-and-cell-form]]), and the q-content values of [[def-hecke-jucys-murphy-elements-and-q-contents]].

[F1] ([[thm-hecke-jucys-murphy-action-is-dominance-triangular]]) $m_tL_k=[\operatorname{content}_t(k)]_q\,m_t+\sum_{v\rhd t}a_vm_v$ in $S^{\lambda}_{\mathrm M}$; the $L_k$ commute pairwise and every symmetric polynomial in them is central.

[F2] ([[def-quantum-characteristic-of-an-invertible-hecke-parameter]]) For $e>n$ no $m$ with $1\le m\le n$ has $[m]_q=0$; more precisely, if two integer contents $c,c'$ with $|c-c'|\le n$ satisfy $[c]_q=[c']_q$ then $c=c'$.

[F3] ([[def-type-a-hecke-specht-module-and-cell-form]]) The cell form on $S^{\lambda}_{\mathrm M}$ is symmetric and associative, and the star anti-involution fixes each $L_k$; the Murphy basis is triangular along the dominance order on tableaux.

[F4] Source results: separation of q-content sequences for $e>n$ and the seminormal spectral construction are Mathas, Lemma 3.32, Proposition 3.33 and Theorem 3.34 (printed pp. 30-34); the coefficient system of part 4 as displayed is that of Hu-Mathas, Example 3.11 with the axial distance (3.8), Lemma 3.12 and Proposition 3.17, the 1998 manuscript's $t\rhd s$ branch being inconsistent with the Hecke relations. The abstract form of the spectral construction under the separation condition is Mathas, Proposition 4.13 with the appendix.





## Proof

**Proof technique:** direct.

1.1 Reconstruct a tableau from its residue tuple. At a prefix of size $k-1$, two different addable corners have integer content difference of absolute value at most $k$. Since $[a]_q-[b]_q=q^b[a-b]_q$ and $e>n$, their q-contents differ. Starting with the empty diagram, the tuple thus recovers each added node and the final shape. For two tableaux of a fixed shape with identical entries' residues outside $i,i+1$, first reconstruct the common prefix through $i-1$, and reconstruct the common suffix by successively deleting the unique appropriate removable corner from the fixed final shape. The intervening skew diagram has two boxes; its only possible orders are the original order and its swap. This proves both separation assertions. [given, F1, F2]

2.1 Diagonalize the commuting JM operators on a cell. Their triangular basis gives a filtration with one-dimensional joint characters indexed by standard tableaux. Those characters are distinct by step 1.1. For commuting triangular operators, the simultaneous generalized eigenspaces split along their distinct joint characters: the corresponding maximal ideals of the polynomial algebra are pairwise comaximal. Each joint character occurs once in this cell, so each generalized eigenspace is one-dimensional and hence an actual joint eigenline. This finite Chinese-remainder argument works over any field and needs no choice of a generic scalar or algebraic closure. The Lagrange product of the Statement is $1$ on its target tuple and $0$ on every other tuple. Applied to $m_t$, its triangular diagonal coefficient is $1$, and the other possible terms are strictly more dominant. Thus it gives the asserted $f_t$. [F1, step 1.1]

2.2 Compute the diagonal coefficient using the **correctly ordered** JM relation $$T_iL_i=L_{i+1}T_i-(q-1)L_{i+1}-1.$$ For $k\ne i,i+1$, $T_i$ commutes with $L_k$. Consequently separation restricts $f_sT_i$ to the span of $f_s$ and $f_t$ if the swap is standard, or to $f_s$ alone otherwise. Write its coefficient of $f_s$ as $c_s$. The displayed relation gives $$c_s\bigl([\operatorname{content}_s(i)]_q-              [\operatorname{content}_s(i+1)]_q\bigr)    =-(q-1)[\operatorname{content}_s(i+1)]_q-1.$$ Its denominator is $q^{\operatorname{content}_s(i+1)}[\rho]_q$, while the numerator is $-q^{\operatorname{content}_s(i+1)}$, so $c_s=-1/[\rho]_q$. This does not claim that $T_i$ commutes with $L_i$. [F1, F2, step 1.1]

3.1 At this stage step 2.1 establishes the projector identities on each individual cell module. The global identities in $H$ will follow below after proving that the sum of the cell modules is faithful. No finite-$e$ classification is a premise. [step 2.1]

3.2 The transition from $m_t$ to $f_t$ is unitriangular, so these vectors form a basis. For $s\ne t$, choose $k$ at which their q-contents differ. Self-adjointness $L_k^*=L_k$ and associativity give $$([\operatorname{content}_s(k)]_q-    [\operatorname{content}_t(k)]_q)\langle f_s,f_t\rangle=0.$$ The scalar is nonzero, proving orthogonality. The Lagrange action also gives $f_tF_s=\delta_{ts}f_t$. [F3, step 1.1, step 2.1]

3.3 If the swap is not standard, the consecutive entries lie adjacently in one row or one column. Then $\rho=-1$ or $\rho=1$, respectively, and step 2.2 gives $c_s=q$ or $c_s=-1$. These are the stated row and column cases; the row action is $q$, not the scalar $1$ at a general parameter. [step 2.2]

4.1 Suppose the swap is standard. In the branch $s\rhd t$, the length-additive Murphy action has leading term $m_sT_i=m_t$; the unitriangular eigenbasis change then gives the off-diagonal coefficient $\alpha_i(s)=1$. Higher-dominance terms cannot alter the coefficient at $t$ in this two-dimensional eigenline span. This is the leading-term argument in the full proof of Mathas Theorem 3.34. In both branches the quadratic relation gives $$\alpha_i(s)\alpha_i(t)=q+(q-1)c_s-c_s^2  =\frac{[1+\rho]_q[1-\rho]_q}{[\rho]_q[-\rho]_q}.$$ The last equality follows directly from $[-\rho]_q=-q^{-\rho}[\rho]_q$ and the quantum-integer addition identities. Thus the opposite branch has exactly the displayed coefficient. This proves the generator formula without accepting the inconsistent branch in the 1998 manuscript. [step 3.2, step 2.2]

5.1 Prove nondegeneracy in the separated range locally. The canonical Murphy basis vector has form value $[\lambda]!_q=\prod_a[\lambda_a]!_q$, because $x_\lambda^2=[\lambda]!_qx_\lambda$; its seminormal image has the same value since the canonical tableau is dominance-maximal. This scalar is nonzero when $e>n$. If $s\rhd t=s(i,i+1)$ is a standard swap, put $a=1/[\rho]_q$. Step 4.1 gives $f_t=f_s(T_i+a)$. Associativity, orthogonality and the quadratic relation give $\langle f_t,f_t\rangle=(q+a)(1-a)\langle f_s,f_s\rangle=q[\rho+1]_q[\rho-1]_q[\rho]_q^{-2}\langle f_s,f_s\rangle$. Indeed expansion of $(T_i+a)^2$ and its $f_s$ coefficient $-a$ gives $q-a(q-1)-a^2=(q+a)(1-a)$. The swapped incomparable boxes have $2\le|\rho|\le n-1$: their row and column separations plus one are at most the size of the diagram. Thus all three quantum integers here are nonzero. Every standard tableau is connected to the canonical one by length-increasing swaps of adjacent incomparable entries: bubble-sort its linear extension of the box-order poset into the canonical row-order extension, then reverse the swaps. Induction gives nonzero diagonal norm at every $f_t$, so each cell form is nonsingular. [F2, F3, step 3.2, step 4.1, algebra]

6.1 Each cell is now its nonzero simple form quotient, absolutely simple, and all these cells are pairwise distinct and exhaust the simple modules by [[thm-nonzero-cell-heads-classify-the-simple-modules-of-a-cellular-algebra]]. Thus the split semisimple quotient $H/J(H)$ has dimension $\sum_\lambda |\operatorname{Std}(\lambda)|^2$. This equals $\dim H$ because the Murphy cellular basis has exactly one element for each pair of standard tableaux of the same shape ([[thm-murphy-tableau-elements-form-a-cellular-basis]]). Hence $J(H)=0$, $H$ is split semisimple, and the direct sum of all its simple cell modules is faithful. On that faithful module the global Lagrange products of the Statement are the orthogonal projectors from step 2.1, with different shapes having disjoint tuples by step 1.1. Therefore $F_sF_t=\delta_{st}F_t$ holds in $H$ itself, proving the global idempotents. This argument proves only the separated range and does not assert a finite-$e$ nonzero-label criterion when $e\le n$. [step 5.1, step 2.1, step 1.1, algebra]

7.1 Steps 1.1-6.1 prove all four claims. No semisimplicity was imposed as a hypothesis: it was derived locally from nondegenerate cells and their complete finite-cell classification. The calculation concerns the intrinsic Murphy cell and keeps the signed ordinary-module dictionary separate. All products and basis changes are finite, and no choice principle is used. [step 1.1, step 3.2, step 4.1, step 6.1] ∎
