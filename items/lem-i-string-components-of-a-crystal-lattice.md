---
id: lem-i-string-components-of-a-crystal-lattice
kind: lemma
title: "The $i$-string components of a lattice vector and the single surviving component modulo $q$"
status: published
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
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-11
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

2.2 Residue components when $u\in qL$. Step 1.1 gives $u_n=\tilde e_i^{\,n}u-\tilde f_i\tilde e_i^{\,n+1}u$. Both operators preserve $L$ and are linear, hence preserve $qL$; therefore every $u_n$ lies in $qL$. [step 1.1, F1, F2]

3.1 The lattice string decomposition (b). For a top $v\in L_{\lambda+n\alpha_i}\cap\ker E_i$ the vector $\tilde f_i^{\,n}v$ equals $F_i^{(n)}v$ by [F2] applied to the one-term admissible decomposition of $v$, so $u=\sum_n\tilde f_i^{\,n}u_n$ with $u_n\in L\cap\ker E_i$ by step 2.1, and conversely every $\tilde f_i^{\,n}(L_{\lambda+n\alpha_i}\cap\ker E_i)$ lies in $L$ by iterated stability [F1]. For a relation $\sum_n\tilde f_i^{\,n}v_n=0$ with $v_n\in L\cap\ker E_i$ first discard the top components of coroot weight $a<n$: their $n$-th lowering image is $F_i^{(n)}v_n=0$ by [F3]; the remaining representatives are admissible, so the relation is an admissible decomposition of $0$ and every remaining $v_n=0$ by the uniqueness half of [F3]. Hence the sum is direct and equals $L_\lambda=\bigoplus_\mu L_\mu$'s $\lambda$-part. [step 2.1, F1, F2, F3]


3.2 Residue components when $u+qL=b\in B_\lambda$. Put $N:=\varepsilon_i(b)$. Reducing the identity of step 1.1 gives $u_n+qL=\tilde e_i^{\,n}b-\tilde f_i\tilde e_i^{\,n+1}b$. For $n<N$ the partial-inverse axiom gives $\tilde f_i\tilde e_i^{\,n+1}b=\tilde e_i^{\,n}b$, so this difference is zero. For $n=N$ it is $\tilde e_i^{\,N}b\in B$, and for $n>N$ both terms vanish. Thus exactly $u_N$ is outside $qL$, with residue $\tilde e_i^{\,N}b$. Since $F_i^{(n)}u_n=\tilde f_i^{\,n}u_n$ on a top component, all other summands lie in $qL$; consequently $u\equiv F_i^{(N)}u_N\pmod{qL}$. This proves (c), including $N=0$, where raising, rather than lowering, kills the top. [step 1.1, step 2.1, step 2.2, F1, F2, F4]

4.1 The remaining residual formulas and the choice audit. By the previous steps, when $u+qL\in B_\lambda$ every component $u_n$ with $n\ne n_0$ lies in $qL$, so $\tilde e_iu=\sum_{n\ge1}F_i^{(n-1)}u_n$ and $\tilde f_iu=\sum_{n\ge0}F_i^{(n+1)}u_n$ are congruent modulo $qL$ to $F_i^{(n_0-1)}u_{n_0}$ and $F_i^{(n_0+1)}u_{n_0}$ respectively, with $F_i^{(-1)}u_0:=0$ when $n_0=0$ and $F_i^{(a+1)}u_n:=0$ beyond the string bottom by [F3]; this proves the final clause of (c). Every step used only the fixed lattice $L$, the finitely supported string decomposition of $u$ and the stated operators, so no finite-dimensionality, bounded support, uniform nilpotence or choice principle is assumed. [step 3.2, step 2.2, F1, F2, F3, given] ∎
