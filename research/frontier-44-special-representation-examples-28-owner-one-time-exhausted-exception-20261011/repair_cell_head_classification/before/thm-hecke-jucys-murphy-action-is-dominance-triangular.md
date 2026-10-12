---
id: thm-hecke-jucys-murphy-action-is-dominance-triangular
kind: theorem
title: "The Hecke Jucys-Murphy action is dominance triangular"
status: draft
origin: pipeline
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-dominance-order-on-partitions, def-hecke-jucys-murphy-elements-and-q-contents, def-young-tableau-standard-tableau-and-shape, thm-murphy-tableau-elements-form-a-cellular-basis, def-type-a-hecke-specht-module-and-cell-form]
justified_by: []
aliases: []
landmark: false
dependency_level: 10
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Andrew Mathas, Hecke algebras and Schur algebras of the symmetric group, complete prepublication manuscript (1998; expanded published edition: AMS University Lecture Series 15, 1999); complete 79-page manuscript, SHA-256 8cfeb611a95a3ff25cb95ad22bfd3a68475818301c34b04d131a8480a1b997e0"
      url: "https://web.math.ucsb.edu/~bigelow/books/mathas.pdf"
      locator: "Theorem 3.30 with Proposition 3.24 and Corollary 3.25, and Proposition 3.26, printed pp. 26-31: the triangular action of the Jucys-Murphy elements on the Murphy basis modulo H^{rhd lambda}, and commutativity of the L_k"
    - title: "Andrew Mathas, Cyclotomic quiver Hecke algebras of type A, arXiv:1310.2142; in: Modular Representation Theory of Finite and p-adic Groups, Lecture Notes Series 30, World Scientific (2015) 165-266; complete 54-page preprint"
      url: "https://arxiv.org/abs/1310.2142"
      locator: "Lemma 1.6.2 (James-Mathas [62, Proposition 3.7]), printed p. 8: m_{st}L_r = c_r^Z(t)m_{st} + sum over more dominant v of a_v m_{sv} modulo H_n^{< lambda}; proof reduces the general case to the non-degenerate case and specialization, and the level-1 integral case reads m_{st}L_r = [content_t(r)]_v m_{st} + more dominant terms"
    - title: "Andrew Mathas and Marcos Soriano, Seminormal forms and Gram determinants for cellular algebras, arXiv:math/0604108; J. reine angew. Math. 619 (2008) 141-173; complete 29-page author-hosted preprint, SHA-256 a2cd21ced7f35dee695388304c26804ef8ac9c54b661a5d624501c80864698a1"
      url: "https://arxiv.org/pdf/math/0604108"
      locator: "Example 2.15, printed pp. 6-7: L_i = sum_{j<i} q^{j-i}T_{(j,i)} act triangularly with q-contents and commute pairwise (with a reference to Mathas, Proposition 3.26)"
---

## Statement

Let $R$ be a commutative ring, $q\in R^{\times}$, $H=H_{R,q}(S_n)$, and let
$L_1,\dots,L_n$ be the Hecke Jucys-Murphy elements
([[def-hecke-jucys-murphy-elements-and-q-contents]]). For every $\lambda\vdash n$,
every standard $\lambda$-tableau $t$ and every $1\le k\le n$ there exist
$a_v\in R$ with
$$m_tL_k=[\operatorname{content}_t(k)]_q\,m_t+\sum_{v\rhd t}a_v\,m_v,$$
where $(m_t)_{t\in\mathrm{Std}(\lambda)}$ is the Murphy basis of the Murphy cell
module $S^{\lambda}_{\mathrm M}$
([[def-type-a-hecke-specht-module-and-cell-form]]) and the sum is over standard
$\lambda$-tableaux $v$ strictly dominating $t$ in the dominance order on
tableaux ([[def-dominance-order-on-partitions]],
[[def-young-tableau-standard-tableau-and-shape]]). In particular $L_k$ acts on
the Murphy cell module $S^{\lambda}_{\mathrm M}$ with Murphy basis $(m_t)$ by a
triangular matrix whose diagonal entries are the q-content values.
Consequently the $L_k$ commute pairwise and every symmetric polynomial in
$L_1,\dots,L_n$ is central in $H$.

## Facts & Assumptions

**Given:** A commutative ring $R$, $q\in R^{\times}$, $H=H_{R,q}(S_n)$ with its Murphy cellular basis $\{m_{st}\}$ and Murphy cell modules $S^{\lambda}_{\mathrm M}$ ([[thm-murphy-tableau-elements-form-a-cellular-basis]], [[def-type-a-hecke-specht-module-and-cell-form]]); the Jucys-Murphy elements $L_k$ and q-contents $[\operatorname{content}_t(k)]_q$ ([[def-hecke-jucys-murphy-elements-and-q-contents]]).

[F1] ([[thm-murphy-tableau-elements-form-a-cellular-basis]]) The $m_{st}$ form a cellular basis of $H$ over the poset $\Lambda$ of partitions under dominance, with $H^{\rhd\lambda}$ spanned by the $m_{uv}$ with $\mu\rhd\lambda$; the Murphy cell module $S^{\lambda}_{\mathrm M}$ has $R$-basis $m_t=m_{t^\lambda t}+H^{\rhd\lambda}$ ($t\in\mathrm{Std}(\lambda)$), and the right action of $h\in H$ on $m_t$ is the collection of coefficients $r_v$ in $m_{t^\lambda t}h\equiv\sum_vr_vm_{t^\lambda v}\pmod{H^{\rhd\lambda}}$.

[F2] ([[def-hecke-jucys-murphy-elements-and-q-contents]]) $L_k=\sum_{j<k}q^{j-k}T_{(j,k)}$ and $[\operatorname{content}_t(k)]_q$ is the q-integer of the content of the box of $t$ containing $k$. The $L_k$ commute pairwise (Mathas, Proposition 3.26, as stated in Mathas-Soriano, Example 2.15, printed pp. 6-7).

[F3] Source triangular identity (James-Mathas, Proposition 3.7; clean statement in Mathas, arXiv:1310.2142, Lemma 1.6.2, printed p. 8): for $1\le r\le n$ and $s,t\in\mathrm{Std}(\lambda)$ there are $a_v\in R$ with $$m_{st}L_r\equiv[\operatorname{content}_t(r)]_q\,m_{st}+\sum_{v\rhd t}a_v\,m_{sv}\pmod{H^{\rhd\lambda}},$$ the sum being over standard $\lambda$-tableaux $v$ strictly dominating $t$; over the level-one Hecke algebra the level of the parameters makes the q-content of the source equal to $[\operatorname{content}_t(r)]_q$ (the integral specialization of the source's content function, with $q=v^2$ and $[\operatorname{content}]_v=[\operatorname{content}]_q$ for all integral contents, including the negative ones by the extension $[-m]_q=-q^{-m}[m]_q$).

[F4] The centre of $H$ consists of the symmetric polynomials in $L_1,\dots,L_n$ (Mathas, Chapter 3; stated in Mathas, arXiv:1310.2142, Section 1.6, printed p. 4, for the Hecke and cyclotomic Hecke algebras). In particular every such symmetric polynomial is central.



## Proof

**Proof technique:** direct.

1.1 Module form of the triangular identity: fix $\lambda$, $k$ and $t\in\mathrm{Std}(\lambda)$, and apply [F3] with $r=k$ and $s:=t^\lambda$: $$m_{t^\lambda t}L_k\equiv[\operatorname{content}_t(k)]_q\,m_{t^\lambda t}+\sum_{v\rhd t}a_v\,m_{t^\lambda v}\pmod{H^{\rhd\lambda}}$$ for some $a_v\in R$. By [F1] the right action of $L_k$ on $S^{\lambda}_{\mathrm M}$ is read off from exactly this congruence, and the classes of the terms on the right are the basis vectors $m_t$ and $m_v$; hence $m_tL_k=[\operatorname{content}_t(k)]_q\,m_t+\sum_{v\rhd t}a_v\,m_v$ in $S^{\lambda}_{\mathrm M}$. [given, F1, F2, F3]

2.1 Triangular matrix: order $\mathrm{Std}(\lambda)$ by a linear extension of the dominance order that lists the most dominant tableaux first; by step 1.1 the matrix of the action of $L_k$ on the basis $(m_t)$ is triangular with diagonal entries $[\operatorname{content}_t(k)]_q$, since every off-diagonal contribution $a_v$ with $v\rhd t$ belongs to a strictly earlier column. [step 1.1]

3.1 Consequences: the $L_k$ commute pairwise by [F2], and every symmetric polynomial $f(L_1,\dots,L_n)$ in them is central in $H$ by [F4]; the triangular shape of step 2.1 records the diagonal content values $f(\operatorname{content}_t(1),\dots,\operatorname{content}_t(n))$ of this central element on each Murphy cell module. [step 2.1, F2, F4] ∎
