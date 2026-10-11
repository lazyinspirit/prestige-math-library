---
id: lem-i-string-components-of-a-crystal-lattice
kind: lemma
title: "The $i$-string components of a lattice vector and the single surviving component modulo $q$"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-crystal-graph-epsilon-phi-and-weight, def-crystal-lattice-and-crystal-basis, def-kashiwara-crystal-operators, thm-unique-kashiwara-i-string-decomposition]
justified_by: []
aliases: []
landmark: false
dependency_level: 6
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Masaki Kashiwara, On crystal bases of the q-analogue of universal enveloping algebras, Duke Math. J. 63 (1991), no. 2, 465-516"
      url: "https://webpages.math.luc.edu/~ptingley/oldseminars/QuantumGroupsSpring2011/Kashiwara91.pdf"
      locator: "§2.3, printed pp. 474-475, Proposition 2.3.2(ii): for $u=\\sum_{n=0}^Nf_i^{(n)}u_n\\in L_\\lambda$ all $u_n$ belong to $L$; if $u$ mod $qL$ belongs to $B$ then $u_n\\in qL$ for $n\\ne n_0$, $u_{n_0}$ mod $qL$ lies in $B$ and $u\\equiv f_i^{(n_0)}u_{n_0}$ mod $qL$."
    - title: "Kyeonghoon Jeong, Seok-Jin Kang and Masaki Kashiwara, Crystal Bases for Quantum Generalized Kac-Moody Algebras, arXiv:math/0305390"
      url: "https://arxiv.org/pdf/math/0305390"
      locator: "§4, printed pp. 15-18, Lemma 4.5(a) ($L=\\bigoplus_{n\\ge0}f_i^{(n)}(\\ker e_i\\cap L)$) and Theorem 4.7 (the single-component residue form of the $i$-string decomposition)."
---

## Statement

Let $(L,B)$ be a crystal basis of an integrable weight module $M$ in the sense of [[def-crystal-lattice-and-crystal-basis]], let $i\in I$, $\lambda\in P$ and $u\in L_\lambda$, and let $u=\sum_{n\ge0}F_i^{(n)}u_n$ be the admissible $i$-string decomposition of $u$: the sum is finite, $u_n\in\ker E_i\cap M_{\lambda+n\alpha_i}$, and $u_n=0$ whenever $n>\langle h_i,\lambda+n\alpha_i\rangle$ ([[thm-unique-kashiwara-i-string-decomposition]]). Then:

(a) **Components lie in the lattice.** $u_n\in L\cap M_{\lambda+n\alpha_i}$ for every $n$.

(b) **Lattice string decomposition.** $L_\lambda=\bigoplus_{n\ge0}\tilde f_i^{\,n}\bigl(L_{\lambda+n\alpha_i}\cap\ker E_i\bigr)$, the sum being direct because admissible decompositions are unique; equivalently $L=\bigoplus_{n\ge0}\tilde f_i^{\,n}(L\cap\ker E_i)$.

(c) **Single surviving component.** If $u+qL=0$ in $L_\lambda/qL_\lambda$, then $u_n\in qL$ for every $n$. If $u+qL\in B_\lambda$, then there is exactly one index $n_0$ with $u_{n_0}\notin qL$, and for it $u_{n_0}+qL\in B_{\lambda+n_0\alpha_i}$, $u\equiv F_i^{(n_0)}u_{n_0}\pmod{qL}$ and $u_{n_0}+qL=\tilde e_i^{\,n_0}(u+qL)$; in particular $n_0=\varepsilon_i(u+qL)$ ([[def-crystal-graph-epsilon-phi-and-weight]]), and $\tilde e_iu$ and $\tilde f_iu$ are the residues of $F_i^{(n_0-1)}u_{n_0}$ and $F_i^{(n_0+1)}u_{n_0}$.

Everything is a statement about the fixed lattice $L$ and the operators $\tilde e_i,\tilde f_i$; no finite-dimensionality, bounded support, uniform nilpotence or choice principle is assumed. Here $F_i^{(-1)}u$ is interpreted as $0$, and $F_i^{(a+1)}u=0$ for a top of coroot weight $a$, so the final formulas include both finite-string endpoints.

## Facts & Assumptions

**Given:** A crystal basis $(L,B)$ of an integrable weight module $M$ ([[def-crystal-lattice-and-crystal-basis]]), an index $i\in I$, a label $\lambda\in P$ and a vector $u\in L_\lambda$ with admissible $i$-string decomposition $u=\sum_{n\ge0}F_i^{(n)}u_n$, $u_n\in\ker E_i\cap M_{\lambda+n\alpha_i}$, $u_n=0$ for $n>\langle h_i,\lambda+n\alpha_i\rangle$ ([[thm-unique-kashiwara-i-string-decomposition]]); write $T_n:=\tilde e_i^{\,n}u$ for $n\ge0$.

[F1] Crystal lattice and crystal basis ([[def-crystal-lattice-and-crystal-basis]]): $L=\bigoplus_{\mu\in P}L_\mu$ with $L_\mu=L\cap M_\mu$, $\tilde e_iL\subseteq L$ and $\tilde f_iL\subseteq L$; $B=\bigsqcup_\mu B_\mu$ is a $\mathbb Q$-basis of $L/qL$ with $B_\mu\subseteq L_\mu/qL_\mu$, $\tilde e_iB\subseteq B\cup\{0\}$ and $\tilde f_iB\subseteq B\cup\{0\}$, and $\tilde f_ib=b'$ if and only if $b=\tilde e_ib'$ for all $b,b'\in B$.

[F2] Kashiwara operators ([[def-kashiwara-crystal-operators]]): on the unique admissible decomposition $v=\sum_nF_i^{(n)}v_n$ one has $\tilde e_iv=\sum_{n\ge1}F_i^{(n-1)}v_n$ and $\tilde f_iv=\sum_{n\ge0}F_i^{(n+1)}v_n$ (divided powers), both linear and shifting label weight by $\alpha_i$ and $-\alpha_i$; they preserve $L$ by [F1] and commute with module homomorphisms.

[F3] Uniqueness of the admissible decomposition ([[thm-unique-kashiwara-i-string-decomposition]]): every vector of an integrable weight module has exactly one finite admissible $i$-string decomposition as in the Given; additionally $F_i^{(n)}$ is injective on $\ker E_i\cap M_\mu$ for $n\le\langle h_i,\mu\rangle$ and zero for $n>\langle h_i,\mu\rangle$, and $\ker E_i\cap M_\mu=0$ when $\langle h_i,\mu\rangle<0$.

[F4] Crystal graph invariants ([[def-crystal-graph-epsilon-phi-and-weight]]): $\varepsilon_i(b)=\max\{n:\tilde e_i^{\,n}b\ne0\}$ and $\varphi_i(b)=\max\{n:\tilde f_i^{\,n}b\ne0\}$ are finite and nonnegative on $B$, $\tilde e_i^{\,n}b\ne0$ exactly for $0\le n\le\varepsilon_i(b)$, and on an existing edge $\tilde e_ib=b'$ one has $\varepsilon_i(b)=\varepsilon_i(b')+1$.

## Proof

**Proof technique:** direct.

1.1 The tails $T_n=\tilde e_i^{\,n}u$ lie in $L\cap M_{\lambda+n\alpha_i}$, and $T_n=\sum_{k\ge n}F_i^{(k-n)}u_k$ with $\tilde f_iT_{n+1}=T_n-u_n$ for every $n\ge0$. Indeed $T_0=u\in L_\lambda$ and each $\tilde e_i$ preserves $L$ and raises the label weight by $\alpha_i$ by [F2], so $T_n\in L_{\lambda+n\alpha_i}$ by [F1]; on the string decomposition $\tilde e_i$ substitutes $F_i^{(k)}u_k\mapsto F_i^{(k-1)}u_k$ by [F2], giving $T_n=\sum_{k\ge n}F_i^{(k-n)}u_k$, and applying $\tilde f_i$ to $T_{n+1}=\sum_{k\ge n+1}F_i^{(k-n-1)}u_k$ shifts every divided power up by one, so $\tilde f_iT_{n+1}=\sum_{k\ge n+1}F_i^{(k-n)}u_k=T_n-u_n$. [F1, F2, F3]

2.1 Every $u_n$ lies in $L$. For $n\ge0$ the identity $u_n=T_n-\tilde f_iT_{n+1}$ of step 1.1 exhibits $u_n$ as a difference of two elements of $L$: $T_n,T_{n+1}\in L$ by step 1.1 and $\tilde f_iL\subseteq L$ by [F1]; the weight of $u_n$ is $\lambda+n\alpha_i$ by the Given, so $u_n\in L\cap M_{\lambda+n\alpha_i}=L_{\lambda+n\alpha_i}$. This proves (a). [step 1.1, F1]

3.1 The lattice string decomposition (b). For a top $v\in L_{\lambda+n\alpha_i}\cap\ker E_i$ the vector $\tilde f_i^{\,n}v$ equals $F_i^{(n)}v$ by [F2] applied to the one-term admissible decomposition of $v$, so $u=\sum_n\tilde f_i^{\,n}u_n$ with $u_n\in L\cap\ker E_i$ by step 2.1, and conversely every $\tilde f_i^{\,n}(L_{\lambda+n\alpha_i}\cap\ker E_i)$ lies in $L$ by iterated stability [F1]. For a relation $\sum_n\tilde f_i^{\,n}v_n=0$ with $v_n\in L\cap\ker E_i$ first discard the top components of coroot weight $a<n$: their $n$-th lowering image is $F_i^{(n)}v_n=0$ by [F3]; the remaining representatives are admissible, so the relation is an admissible decomposition of $0$ and every remaining $v_n=0$ by the uniqueness half of [F3]. Hence the sum is direct and equals $L_\lambda=\bigoplus_\mu L_\mu$'s $\lambda$-part. [step 2.1, F1, F2, F3]

3.2 Base case $N=0$ of (c). Suppose the largest index with $u_N\ne0$ is $N=0$, so $u=u_0$ is a top vector and $\tilde f_iu=0$ by the last clause of [F2]; if $u+qL=0$ then $u_0=u\in qL$, and otherwise $u_0+qL=u+qL\in B_\lambda$ is the single surviving component, with $n_0=0=\varepsilon_i(u+qL)$ by [F4] and $\tilde e_iu=0$ the residue of $F_i^{(-1)}u_0=0$. [step 2.1, F1, F2, F4]

4.1 Induction step for (c): both clauses for $N\ge1$, assuming them for vectors whose largest nonzero component index is $<N$ (such vectors lie in $L$ by step 2.1). Put $w:=\tilde e_iu=\sum_{n\ge1}F_i^{(n-1)}u_n\in L$ by step 1.1, whose possible nonzero components are $u_1,\dots,u_N$, of largest index $N-1<N$; if $u+qL=0$ then $w+qL=0$, so by the induction hypothesis all of $u_1,\dots,u_N$ lie in $qL$, and then $u_0=u-\tilde f_iw\in qL$ because $u\in qL$ and $\tilde f_iw=\sum_{n\ge1}\tilde f_i^{\,n}u_n\in qL$ (each $\tilde f_i^{\,n}$ preserves $L$ by [F1], hence maps $qL$ into $qL$), so every component lies in $qL$. If instead $u+qL=b\in B_\lambda$, then $w+qL=\tilde e_ib\in B\cup\{0\}$ by [F1]; if $w+qL=0$, the first clause applied to $w$ gives $u_1,\dots,u_N\in qL$, so $u\equiv u_0\pmod{qL}$, $u_0+qL=u+qL=b\in B$, and $n_0=0$ with $\varepsilon_i(b)=0$ by [F4]; if $w+qL=b'\in B$, the induction hypothesis gives a unique index $n_0\ge1$ with $u_{n_0}\notin qL$, $u_{n_0}+qL\in B$ and $w\equiv F_i^{(n_0-1)}u_{n_0}\pmod{qL}$, and applying the linear $\tilde f_i$ (which preserves $L$, hence $qL$) gives $u\equiv u_0+\tilde f_iw\equiv F_i^{(n_0)}u_{n_0}\pmod{qL}$ while $(\tilde f_iw)+qL=\tilde f_i(w+qL)=\tilde f_i\tilde e_ib=b$ by the partial-inverse axiom of [F1], so $u_0=u-\tilde f_iw\in qL$; then $u\equiv F_i^{(n_0)}u_{n_0}\pmod{qL}$, applying $\tilde e_i^{\,n_0}$ and the partial-inverse axiom gives $u_{n_0}+qL=\tilde e_i^{\,n_0}(u+qL)$, and [F4] gives $n_0=\varepsilon_i(u+qL)$ together with the uniqueness of $n_0$ as the only index outside $qL$ (the induction hypothesis excludes the indices $1,\dots,N$ different from $n_0$, and $u_0\in qL$). [step 1.1, step 2.1, step 3.2, F1, F2, F4]

5.1 The remaining residual formulas and the choice audit. By the previous steps, when $u+qL\in B_\lambda$ every component $u_n$ with $n\ne n_0$ lies in $qL$, so $\tilde e_iu=\sum_{n\ge1}F_i^{(n-1)}u_n$ and $\tilde f_iu=\sum_{n\ge0}F_i^{(n+1)}u_n$ are congruent modulo $qL$ to $F_i^{(n_0-1)}u_{n_0}$ and $F_i^{(n_0+1)}u_{n_0}$ respectively, with $F_i^{(-1)}u_0:=0$ when $n_0=0$ and $F_i^{(a+1)}u_n:=0$ beyond the string bottom by [F3]; this proves the final clause of (c). Every step used only the fixed lattice $L$, the finitely supported string decomposition of $u$ and the stated operators, so no finite-dimensionality, bounded support, uniform nilpotence or choice principle is assumed. [step 4.1, step 3.2, F1, F2, F3, given] ∎
