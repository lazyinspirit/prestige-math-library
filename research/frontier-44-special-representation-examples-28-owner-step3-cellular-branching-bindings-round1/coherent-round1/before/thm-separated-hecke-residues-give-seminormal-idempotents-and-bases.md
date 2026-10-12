---
id: thm-separated-hecke-residues-give-seminormal-idempotents-and-bases
kind: theorem
title: "Separated Hecke residues give seminormal idempotents and bases"
status: draft
origin: pipeline
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-hecke-jucys-murphy-elements-and-q-contents, def-quantum-characteristic-of-an-invertible-hecke-parameter, def-type-a-hecke-specht-module-and-cell-form, thm-hecke-jucys-murphy-action-is-dominance-triangular, thm-murphy-tableau-elements-form-a-cellular-basis]
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
    - title: "Jun Hu and Andrew Mathas, Seminormal forms and quiver Hecke algebras, arXiv:0907.2985, complete 51-page preprint"
      url: "https://arxiv.org/abs/0907.2985"
      locator: "Example 3.11 with the axial distance (3.8), Lemma 3.12 and Proposition 3.17: the seminormal coefficient system and the two branches of the generator action"
    - title: "Andrew Mathas and Marcos Soriano, Seminormal forms and Gram determinants for cellular algebras, arXiv:math/0604108; J. reine angew. Math. 619 (2008) 141-173; complete 29-page author-hosted preprint, SHA-256 a2cd21ced7f35dee695388304c26804ef8ac9c54b661a5d624501c80864698a1"
      url: "https://arxiv.org/pdf/math/0604108"
      locator: "Proposition 2.7, Definition 2.8 and Proposition 4.13 with the appendix: the separation condition and the abstract spectral construction of seminormal idempotents from separating JM-elements"
---

## Statement

Let $F$ be a field, $q\in F^{\times}$, let $e=e(F,q)$ and assume $e>n$ (with
$e=\infty$ allowed); let $\lambda\vdash n$, $H=H_{F,q}(S_n)$, and let
$S^{\lambda}_{\mathrm M}$ be the Murphy cell module with Murphy basis
$(m_t)_{t\in\mathrm{Std}(\lambda)}$
([[def-type-a-hecke-specht-module-and-cell-form]]).

1. (**Separation**) If $s,t$ are standard $\lambda$-tableaux with
   $[\operatorname{content}_s(k)]_q=[\operatorname{content}_t(k)]_q$ for all
   $1\le k\le n$ then $s=t$. More precisely, if the q-content values agree for
   all $k\notin\{i,i+1\}$ for some $i$, then $s=t$ or $t=s(i\ i+1)$.
2. (**Idempotents**) For a standard $\lambda$-tableau $t$ define, inside the
   commutative algebra $F[L_1,\dots,L_n]$,
   $$F_t:=\prod_{k=1}^{n}\ \prod_{\substack{s\in\mathrm{Std}(\lambda)\\[2pt] [\operatorname{content}_s(k)]_q\ne[\operatorname{content}_t(k)]_q}}\frac{L_k-[\operatorname{content}_s(k)]_q}{[\operatorname{content}_t(k)]_q-[\operatorname{content}_s(k)]_q}$$
   and put $f_t:=m_tF_t\in S^{\lambda}_{\mathrm M}$. All denominators are
   nonzero by (1) and the $f_t$ are well-defined spectral projectors:
   $f_tL_k=[\operatorname{content}_t(k)]_q\,f_t$, and
   $f_t=m_t+\sum_{s\rhd t}a_sm_s$ for suitable $a_s\in F$.
3. (**Orthogonal seminormal basis**) $\{f_t:t\in\mathrm{Std}(\lambda)\}$ is a
   basis of $S^{\lambda}_{\mathrm M}$ satisfying $f_tF_s=\delta_{ts}f_t$ and
   $\langle f_s,f_t\rangle_\lambda=\delta_{st}\langle f_t,f_t\rangle_\lambda$;
   it is the **seminormal basis** of the Murphy cell module.
4. (**Generator action**) Let $s$ be a standard $\lambda$-tableau, $1\le i<n$
   and $t:=s(i\ i+1)$, and put
   $\rho:=\operatorname{content}_s(i)-\operatorname{content}_s(i+1)\in\mathbb Z$.
   If $i$ and $i+1$ lie in the same row of $s$ then $f_sT_i=q\,f_s$; if they lie
   in the same column then $f_sT_i=-f_s$; otherwise $t$ is standard and
   $$f_sT_i=\alpha_i(s)\,f_t-\frac{1}{[\rho]_q}f_s,\qquad \alpha_i(s):=\begin{cases}1,&s\rhd t,\\[1mm]\dfrac{[1+\rho]_q[1-\rho]_q}{[\rho]_q[-\rho]_q},&t\rhd s,\end{cases}$$
   where $[-\rho]_q$ is the extended quantum integer of
   [[def-hecke-jucys-murphy-elements-and-q-contents]] and for the swapped
   tableau $\operatorname{content}_t(i)-\operatorname{content}_t(i+1)=-\rho$.
   No semisimplicity of $H$ is assumed and no choice principle is used.

## Facts & Assumptions

**Given:** A field $F$, $q\in F^{\times}$ with quantum characteristic $e>n$, a partition $\lambda\vdash n$, the Murphy cell module $S^{\lambda}_{\mathrm M}$ with Murphy basis $(m_t)$ and cell form ([[def-type-a-hecke-specht-module-and-cell-form]]), and the q-content values of [[def-hecke-jucys-murphy-elements-and-q-contents]].

[F1] ([[thm-hecke-jucys-murphy-action-is-dominance-triangular]]) $m_tL_k=[\operatorname{content}_t(k)]_q\,m_t+\sum_{v\rhd t}a_vm_v$ in $S^{\lambda}_{\mathrm M}$; the $L_k$ commute pairwise and every symmetric polynomial in them is central.

[F2] ([[def-quantum-characteristic-of-an-invertible-hecke-parameter]]) For $e>n$ no $m$ with $1\le m\le n$ has $[m]_q=0$; more precisely, if two integer contents $c,c'$ with $|c-c'|\le n$ satisfy $[c]_q=[c']_q$ then $c=c'$.

[F3] ([[def-type-a-hecke-specht-module-and-cell-form]]) The cell form on $S^{\lambda}_{\mathrm M}$ is symmetric and associative, and the star anti-involution fixes each $L_k$; the Murphy basis is triangular along the dominance order on tableaux.

[F4] Source results: separation of q-content sequences for $e>n$ and the seminormal spectral construction are Mathas, Lemma 3.32, Proposition 3.33 and Theorem 3.34 (printed pp. 30-34); the coefficient system of part 4 as displayed is that of Hu-Mathas, Example 3.11 with the axial distance (3.8), Lemma 3.12 and Proposition 3.17, the 1998 manuscript's $t\rhd s$ branch being inconsistent with the Hecke relations. The abstract form of the spectral construction under the separation condition is Mathas-Soriano, Proposition 4.13 with the appendix.



## Proof

**Proof technique:** direct.

1.1 Separation of contents: because $e>n$, two nodes of $[\,\lambda\,]$ that are distinct and have the same residue lie neither in the same row nor in the same column, and distinct removable nodes have distinct residues ([F2] applied to the contents of the nodes removed in the order $n,n-1,\dots,1$); peeling off the nodes carrying $n,n-1,\dots,1$ therefore reconstructs $t$ from its q-content sequence, giving the first claim of (1). The same argument for fixed $i$ shows that the pair $(s,t=s(i\ i+1))$ is the only possible source of a common sequence when one coordinate is allowed to disagree. [given, F2, F4]

1.2 Combined case: when $i,i+1$ lie in the same row of $s$ the defining relation $T_iL_i=L_iT_i$ together with the content computation gives $T_i$-eigenvalue $q$; when they lie in the same column the eigenvalue is $-1$; both are the standard row and column cases of the Hecke generator action, and the stated values follow from $m_sT_i=m_s$ and $m_sT_i=-m_s$ respectively in the Murphy basis. [given, F3, F4]

2.1 Spectral projectors: the $L_k$ commute by [F1], so $F_t$ is a well-defined element of the commutative algebra $F[L_1,\dots,L_n]$; all denominators are nonzero by step 1.1. On the basis vector $m_v$, the triangularity [F1] gives $m_vL_k=[\operatorname{content}_v(k)]_q\,m_v+(\text{more dominant})$; differentiating the tableaux by their content sequences shows that $F_t$ kills every $m_v$ with $v\rhd t$ (some factor $L_k-[\operatorname{content}_v(k)]_q$ with $[\operatorname{content}_v(k)]_q\ne[\operatorname{content}_t(k)]_q$ vanishes on the eigenvalue of $v$), while $F_t$ acts as the identity on the t-eigenspace. Hence $f_t=m_t+\sum_{s\rhd t}a_sm_s$ and $f_tL_k=[\operatorname{content}_t(k)]_q f_t$. This is part (2). [step 1.1, F1, F4]

3.1 Orthogonality and the basis: the $F_t$, for the distinct content sequences of step 1.1, are orthogonal Lagrange projectors in $F[L_1,\dots,L_n]$, so $F_sF_t=\delta_{st}F_s$ and $f_sF_t=m_sF_sF_t=\delta_{st}f_s$, giving part of (3). For the form: by [F3] and the self-adjointness $L_k^*=L_k$, for $s\ne t$ and any $k$ with $[\operatorname{content}_s(k)]_q\ne[\operatorname{content}_t(k)]_q$ one has $${[\operatorname{content}}_s(k)]_q\langle f_s,f_t\rangle_\lambda=\langle f_sL_k,f_t\rangle_\lambda=\langle f_s,f_tL_k\rangle_\lambda=[\operatorname{content}_t(k)]_q\langle f_s,f_t\rangle_\lambda,$$ hence $\langle f_s,f_t\rangle_\lambda=0$; this gives the orthogonality, and the transition matrix from $(m_t)$ to $(f_t)$ is unitriangular by step 2.1, hence invertible, giving the basis property. This completes part (3). [step 1.1, step 2.1, F1, F3]

4.1 Axial computation: otherwise $t=s(i\ i+1)$ is standard and, by parts (1)-(3), $f_sT_i$ is an eigenvector of each $L_k$ with $k\ne i,i+1$ with the content of $s$ (equivalently of $t$); separation forces $f_sT_i\in\operatorname{span}(f_s,f_t)$. Write $f_sT_i=\alpha_i(s)f_t+c_sf_s$. Multiplying the relation $T_iL_i=T_iL_{i+1}-1-(q-1)L_{i+1}$ (an elementary consequence of the definition of the $L_k$ and the Hecke relations) on the left by $f_s$ and using the eigenvalues gives $c_s=-1/[\rho]_q$. Applying $T_i$ twice and using the quadratic relation $T_i^2=(q-1)T_i+q$ gives $\alpha_i(s)\alpha_i(t)=[1+\rho]_q[1-\rho]_q/([\rho]_q[-\rho]_q)$; since $\operatorname{content}_t(i)-\operatorname{content}_t(i+1)=-\rho$, the dominance cases are $\rho>0$ with $s\rhd t$ and $\rho<0$ with $t\rhd s$, yielding the two displayed branches. This is part (4). [step 2.1, step 3.1, F2, F4]

5.1 Assembly: steps 1.1, 1.2, 2.1, 3.1 and 4.1 prove the four parts; no semisimplicity of $H$ was used, since the construction takes place in the commutative subalgebra generated by the $L_k$ and only uses the triangularity on the cell module, and no choice principle is used. [step 1.1, step 1.2, step 2.1, step 3.1, step 4.1] ∎
