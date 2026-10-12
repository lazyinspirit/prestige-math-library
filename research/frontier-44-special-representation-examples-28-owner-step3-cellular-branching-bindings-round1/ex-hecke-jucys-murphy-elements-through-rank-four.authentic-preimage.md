---
id: ex-hecke-jucys-murphy-elements-through-rank-four
kind: example
title: "The Hecke Jucys-Murphy elements through rank four"
status: draft
origin: pipeline
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-content-vector-of-a-standard-tableau, def-hecke-jucys-murphy-elements-and-q-contents, prop-group-algebra-and-finite-field-specializations-of-the-generic-hecke-algebra, thm-hecke-jucys-murphy-action-is-dominance-triangular]
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
      locator: "Theorem 3.30 and the Jucys-Murphy normalisation preceding it, printed pp. 26-31; Example 2.15 of Mathas-Soriano for the q-content list"
---

## Example

Let $R$ be a commutative ring and $q\in R^{\times}$. In $H=H_{R,q}(S_n)$ the
Hecke Jucys-Murphy elements
([[def-hecke-jucys-murphy-elements-and-q-contents]]) for $n\ge4$ are
$$L_1=0,\quad L_2=q^{-1}T_{(1,2)},\quad L_3=q^{-1}T_{(2,3)}+q^{-2}T_{(1,3)},\quad L_4=q^{-1}T_{(3,4)}+q^{-2}T_{(2,4)}+q^{-3}T_{(1,4)},$$
and in general $L_k=\sum_{j<k}q^{j-k}T_{(j,k)}$. For the standard tableau
$t=\begin{smallmatrix}1&3&4\\2\end{smallmatrix}$ of shape $(3,1)$ the contents
of the entries $k=1,2,3,4$ are $0,-1,1,2$
([[def-content-vector-of-a-standard-tableau]]), so the diagonal eigenvalues of
$L_1,\dots,L_4$ on the Murphy vector $m_t$ are $[0]_q=0$, $[-1]_q=-q^{-1}$,
$[1]_q=1$ and $[2]_q=1+q$; the triangular correction terms
$\sum_{v\rhd t}a_vm_v$ are present in general
([[thm-hecke-jucys-murphy-action-is-dominance-triangular]]) and vanish only in
the semisimple range handled by
[[thm-separated-hecke-residues-give-seminormal-idempotents-and-bases]]. At
$q=1$ the four elements specialize to the ordinary Jucys-Murphy elements
$X_1=0$, $X_2=(1\,2)$, $X_3=(1\,3)+(2\,3)$, $X_4=(1\,4)+(2\,4)+(3\,4)$ and the
eigenvalues to $0,-1,1,2$, the standard contents of $t$.

## Facts & Assumptions

**Given:** A commutative ring $R$, $q\in R^{\times}$, the Hecke algebra $H_{R,q}(S_n)$, the Jucys-Murphy elements and q-contents ([[def-hecke-jucys-murphy-elements-and-q-contents]]), the content vector of a standard tableau ([[def-content-vector-of-a-standard-tableau]]), and the q=1 specialization $H_{R,1}(S_n)\cong R[S_n]$ ([[prop-group-algebra-and-finite-field-specializations-of-the-generic-hecke-algebra]]).

[F1] ([[def-hecke-jucys-murphy-elements-and-q-contents]]) $L_k=\sum_{j<k}q^{j-k}T_{(j,k)}$; $[m]_q=1+q+\cdots+q^{m-1}$ for $m\ge0$, $[-m]_q=-q^{-m}[m]_q$ for $m>0$, and $[m]_1=m$ for all $m\in\mathbb Z$.

[F2] ([[thm-hecke-jucys-murphy-action-is-dominance-triangular]]) $m_tL_k=[\operatorname{content}_t(k)]_q\,m_t+\sum_{v\rhd t}a_vm_v$ on the Murphy cell module, so the displayed values are the diagonal entries and the correction terms are as stated.



## Verification

1.1 Substitution: in [F1], for $k=1$ the sum is empty, giving $L_1=0$; for $k=2$ it has the single term $q^{1-2}T_{(1,2)}=q^{-1}T_{(1,2)}$; for $k=3$ it has $q^{-1}T_{(2,3)}+q^{-2}T_{(1,3)}$; and for $k=4$ it has $q^{-1}T_{(3,4)}+q^{-2}T_{(2,4)}+q^{-3}T_{(1,4)}$, matching the displayed list. [given, F1]

1.2 Contents: reading the tableau $t$ with rows $(1,3,4)$ and $(2)$, the node of $1$ is $(1,1)$ with content $1-1=0$, the node of $2$ is $(2,1)$ with content $1-2=-1$, the node of $3$ is $(1,2)$ with content $2-1=1$ and the node of $4$ is $(1,3)$ with content $3-1=2$; by definition $[\operatorname{content}_t(k)]_q$ is the q-integer of these contents. [given, F1]

2.1 Eigenvalues: by [F1], $[0]_q=0$, $[-1]_q=-q^{-1}[1]_q=-q^{-1}$, $[1]_q=1$ and $[2]_q=1+q$; substituting into the triangularity formula [F2] gives the stated diagonal eigenvalues $0,-1,1,2$ up to the q-powers $-q^{-1},1,1+q$. The correction terms are exactly the sum $\sum_{v\rhd t}a_vm_v$ of [F2] and are not asserted to vanish outside the semisimple range. [step 1.1, step 1.2, F1, F2]

3.1 Specialization: setting $q=1$ in the displayed formulas turns $L_k$ into $\sum_{j<k}(j\,k)=X_k$ by the specialization isomorphism of [[prop-group-algebra-and-finite-field-specializations-of-the-generic-hecke-algebra]] and [F1], giving $X_1=0$, $X_2=(1\,2)$, $X_3=(1\,3)+(2\,3)$ and $X_4=(1\,4)+(2\,4)+(3\,4)$; the eigenvalues $[m]_1=m$ become $0,-1,1,2$, the contents of $t$. [step 1.2, step 2.1, F1] ∎
