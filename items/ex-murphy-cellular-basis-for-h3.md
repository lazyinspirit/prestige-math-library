---
id: ex-murphy-cellular-basis-for-h3
kind: example
title: "The Murphy cellular basis of H(S_3)"
status: draft
origin: pipeline
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-hecke-jucys-murphy-elements-and-q-contents, def-cellular-algebra-basis-and-cell-module, def-murphy-elements-and-murphy-tableau-elements, prop-hecke-specht-theory-specializes-to-group-specht-theory-at-q-one, thm-murphy-tableau-elements-form-a-cellular-basis, cor-dj-bridge-specialization-and-composition-multiplicity-dictionary]
justified_by: []
aliases: []
landmark: false
dependency_level: 13
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Andrew Mathas, Hecke algebras and Schur algebras of the symmetric group, complete prepublication manuscript (1998; expanded published edition: AMS University Lecture Series 15, 1999); complete 79-page manuscript, SHA-256 8cfeb611a95a3ff25cb95ad22bfd3a68475818301c34b04d131a8480a1b997e0"
      url: "https://web.math.ucsb.edu/~bigelow/books/mathas.pdf"
      locator: "Example 2.2(ii) and Chapter 3, printed pp. 10 and 20-31: the Murphy basis of H(S_3) with the three dominance cells and the six basis elements"
---

## Example

Work over any commutative ring $R$ with $q\in R^{\times}$ and let $H=H_{R,q}(S_3)$
with generators $T_1,T_2$, the braid relation $T_1T_2T_1=T_2T_1T_2$ and
quadratics $T_i^2=(q-1)T_i+q$. The Murphy cellular basis
([[thm-murphy-tableau-elements-form-a-cellular-basis]]) is indexed by the
partitions $(3),(2,1),(1^3)$ ordered by dominance. Explicitly, with $*$ the
antiautomorphism $T_w^*=T_{w^{-1}}$
([[def-murphy-elements-and-murphy-tableau-elements]]): (a) for $\lambda=(3)$,
$\mathrm{Std}(3)=\{s\}$ and
$m_{ss}=m_{(3)}=1+T_1+T_2+T_1T_2+T_2T_1+T_1T_2T_1$; (b) for $\lambda=(2,1)$,
$\mathrm{Std}(2,1)=\{t,u\}$ with $t=\begin{smallmatrix}1&2\\3\end{smallmatrix}$,
$u=\begin{smallmatrix}1&3\\2\end{smallmatrix}$, and $m_{(2,1)}=1+T_1$ (the row
symmetrizer of $S_{(2,1)}=\langle(1\,2)\rangle$), so that $m_{tt}=1+T_1$,
$m_{tu}=(1+T_1)T_2$, $m_{ut}=T_2(1+T_1)$ and $m_{uu}=T_2(1+T_1)T_2$; (c) for
$\lambda=(1^3)$, $\mathrm{Std}(1^3)=\{v\}$ and $m_{vv}=m_{(1^3)}=1$. In total
$1+4+1=6=3!=|S_3|$ elements; the middle cell carries
$|\mathrm{Std}(2,1)|^2=4$ basis elements, its two off-diagonal elements
satisfy $m_{tu}^*=m_{ut}$, and the largest cell is spanned by $m_{ss}$,
illustrating the cellular anti-involution. At $q=1$ this is the Murphy basis of
$R[S_3]$, obtained by base change from the integral basis over $\mathbb Z$
([[cor-dj-bridge-specialization-and-composition-multiplicity-dictionary]]).

## Facts & Assumptions

**Given:** A commutative ring $R$, $q\in R^{\times}$, $H=H_{R,q}(S_3)$ with standard basis $\{T_w\}$ and Murphy elements ([[def-murphy-elements-and-murphy-tableau-elements]]); the cellular axioms ([[def-cellular-algebra-basis-and-cell-module]]); the Murphy cellular basis theorem ([[thm-murphy-tableau-elements-form-a-cellular-basis]]).

[F1] ([[def-murphy-elements-and-murphy-tableau-elements]]) $m_\mu=\sum_{w\in S_\mu}T_w$, $m_{st}=T_{d(s)}^*m_\mu T_{d(t)}$, $m_{st}^*=m_{ts}$; for the shape $(2,1)$ the distinguished representatives are $d(t)=1$ and $d(u)=s_2$, and for $(3)$ and $(1^3)$ the Young subgroups are all of $S_3$ and trivial respectively.

[F2] ([[thm-murphy-tableau-elements-form-a-cellular-basis]]) The six elements $m_{st}$ form an $R$-basis of $H$ indexed by the three partitions ordered by dominance.

[F3] At $q=1$, $T_w\mapsto w$ identifies $H_{R,1}(S_3)$ with $R[S_3]$ over every commutative $R$ ([[def-hecke-jucys-murphy-elements-and-q-contents]], Definition, final paragraph). The integral Murphy basis specializes by [F2].



## Verification

1.1 Cell $(2,1)$: $S_{(2,1)}=\langle s_1\rangle$, so $m_{(2,1)}=1+T_1$; the two standard tableaux of shape $(2,1)$ are $t=\begin{smallmatrix}1&2\\3\end{smallmatrix}$ (row reading word $1\,2\,3$, so $d(t)=1$) and $u=\begin{smallmatrix}1&3\\2\end{smallmatrix}$ (row reading word $1\,3\,2$, so $d(u)=s_2$). Hence $m_{tt}=1\cdot(1+T_1)\cdot1=1+T_1$, $m_{tu}=(1+T_1)T_2$, $m_{ut}=T_2^*(1+T_1)=T_2(1+T_1)$ and $m_{uu}=T_2^*(1+T_1)T_2=T_2(1+T_1)T_2$, using $T_2^*=T_2$ and $m_{(2,1)}^*=m_{(2,1)}$. [given, F1]

1.2 Cells $(3)$ and $(1^3)$: $S_{(3)}=S_3$ has six elements with reduced expressions $1,s_1,s_2,s_1s_2,s_2s_1,s_1s_2s_1$, so $m_{(3)}=1+T_1+T_2+T_1T_2+T_2T_1+T_1T_2T_1=T_{d(s)}^*m_{(3)}T_{d(s)}$ for the unique standard tableau; $S_{(1^3)}$ is trivial, so its group algebra sum is the identity, $m_{(1^3)}=1$, and $m_{vv}=1$. [given, F1]

2.1 Count and anti-involution: the three cells contribute $1^2+2^2+1^2=6=3!=|S_3|$ elements, in agreement with $H$ being free of rank $6$; and $m_{tu}^*=m_{ut}$ is the instance of the general identity $m_{st}^*=m_{ts}$ of [F1], the middle cell being the one with two indices. [step 1.1, step 1.2, F1, F2]

3.1 Specialization: setting $q=1$ turns $T_w$ into $w$, so the displayed elements become the Murphy basis of $R[S_3]$; this is the $n=3$ case of [F3]. [step 1.1, step 1.2, F3] ∎
