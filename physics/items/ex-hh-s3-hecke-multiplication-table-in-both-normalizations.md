---
id: ex-hh-s3-hecke-multiplication-table-in-both-normalizations
kind: example
title: "The complete S3 multiplication table in both normalizations"
status: published
origin: pipeline
pipeline_run: frontier-42-coxeter-32
dependency_level: 8
deps: [def-hh-universal-coxeter-hecke-parameters-and-presentation, lem-hh-reduced-word-independence-and-length-multiplication, thm-hh-generic-coxeter-hecke-standard-basis, lem-hh-hecke-anti-involution-bar-and-normalization, def-hh-coxeter-matrix-word-group-and-length, thm-hh-parabolic-minimal-representatives-and-length-additivity]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "George Lusztig, Lectures on Hecke Algebras with Unequal Parameters (MIT Fall 1999 lecture notes, arXiv:math/0108172v1)"
      url: "https://arxiv.org/pdf/math/0108172"
      locator: "Sections 3.1-3.2, PDF p. 8: the presentation, the multiplication rules and the spanning of {T_w} for the dihedral type A_2"
    - title: "Meinolf Geck, Modular Representations of Hecke Algebras (EPFL course notes, arXiv:math/0511548v2)"
      url: "https://arxiv.org/pdf/math/0511548"
      locator: "Section 2, printed p. 7: the multiplication rule in the multiplicative normalization, and Section 4.1, printed p. 15, for the substitution pi = v^2"
    - title: "Anders Bjorner and Francesco Brenti, Combinatorics of Coxeter Groups, Springer GTM 231 (2005), complete book PDF"
      url: "https://sites.math.washington.edu/~billey/classes/reflection.groups/references/EntireBook.pdf"
      locator: "Section 6.1, printed pp. 174-175: the multiplication rule T_sT_w=qT_sw+(q-1)T_w and the special basis elements T_s"
verification:
  audited: "2026-10-08"
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-08
---

## Example

Let $S=\{s,t\}$ with $m(s,t)=3$, so that $W=\langle s,t\mid s^2=t^2=(st)^3=1\rangle\cong S_3$ with elements $1,s,t,st,ts,w_0:=sts=tst$ of lengths $0,1,1,2,2,3$ ([[def-hh-coxeter-matrix-word-group-and-length]]; the identification with $S_3$ is the type-$A$ clause of [[thm-hh-parabolic-minimal-representatives-and-length-additivity]]). The odd-edge graph is connected, so $R=\mathbb Z[v^{\pm1}]$, $v_s=v_t=v$, and $H$ is free with basis $\{T_w\}$ ([[thm-hh-generic-coxeter-hecke-standard-basis]]).

1. **Normalized table.** With $u:=v-v^{-1}$ and the columns indexed by $1,s,t,st,ts,w_0$, the complete $6\times6$ left-multiplication table of $H$ is
$$\begin{array}{c|cccccc} T_x\backslash T_y & T_1 & T_s & T_t & T_{st} & T_{ts} & T_{w_0}\\ \hline T_1 & T_1 & T_s & T_t & T_{st} & T_{ts} & T_{w_0}\\ T_s & T_s & uT_s+T_1 & T_{st} & T_t+uT_{st} & T_{w_0} & T_{ts}+uT_{w_0}\\ T_t & T_t & T_{ts} & uT_t+T_1 & T_{w_0} & T_s+uT_{ts} & T_{st}+uT_{w_0}\\ T_{st} & T_{st} & T_{w_0} & T_s+uT_{st} & T_{ts}+uT_{w_0} & T_1+uT_s+uT_{w_0} & T_t+uT_{st}+uT_{ts}+u^2T_{w_0}\\ T_{ts} & T_{ts} & T_t+uT_{ts} & T_{w_0} & T_1+uT_t+uT_{w_0} & T_{st}+uT_{w_0} & T_s+uT_{ts}+uT_{st}+u^2T_{w_0}\\ T_{w_0} & T_{w_0} & T_{st}+uT_{w_0} & T_{ts}+uT_{w_0} & T_s+uT_{st}+uT_{ts}+u^2T_{w_0} & T_t+uT_{ts}+uT_{st}+u^2T_{w_0} & T_1+u(T_s+T_t)+u^2(T_{st}+T_{ts})+(u^3+u)T_{w_0} \end{array}$$
In particular $T_sT_t=T_{st}$, $T_tT_s=T_{ts}$, the braid identity $T_sT_tT_s=T_{w_0}=T_tT_sT_t$ holds, and $T_s^2=uT_s+T_1$, $T_t^2=uT_t+T_1$ ([[lem-hh-reduced-word-independence-and-length-multiplication]]; the table is a finite computation from those rules).

2. **Multiplicative table.** Put $Q:=v^2$, $S_s:=vT_s$, $S_t:=vT_t$ and $S_w:=S_{s_1}\cdots S_{s_k}=v^{\ell(w)}T_w$ for a reduced expression $w=s_1\cdots s_k$ (well defined, since the $S$'s satisfy the braid relations). Then
$$S_sS_w=\begin{cases}S_{sw},&\ell(sw)=\ell(w)+1,\\[2pt] Q\,S_{sw}+(Q-1)S_w,&\ell(sw)=\ell(w)-1,\end{cases}$$
and the same rule holds with $S_t$. With $a:=Q-1$, the complete multiplicative table is
$$\begin{array}{c|cccccc} S_x\backslash S_y & S_1 & S_s & S_t & S_{st} & S_{ts} & S_{w_0}\\ \hline S_1 & S_1 & S_s & S_t & S_{st} & S_{ts} & S_{w_0}\\ S_s & S_s & QS_1+aS_s & S_{st} & QS_t+aS_{st} & S_{w_0} & QS_{ts}+aS_{w_0}\\ S_t & S_t & S_{ts} & QS_1+aS_t & S_{w_0} & QS_s+aS_{ts} & QS_{st}+aS_{w_0}\\ S_{st} & S_{st} & S_{w_0} & QS_s+aS_{st} & QS_{ts}+aS_{w_0} & Q^2S_1+QaS_s+aS_{w_0} & Q^2S_t+Qa(S_{st}+S_{ts})+a^2S_{w_0}\\ S_{ts} & S_{ts} & QS_t+aS_{ts} & S_{w_0} & Q^2S_1+QaS_t+aS_{w_0} & QS_{st}+aS_{w_0} & Q^2S_s+Qa(S_{ts}+S_{st})+a^2S_{w_0}\\ S_{w_0} & S_{w_0} & QS_{st}+aS_{w_0} & QS_{ts}+aS_{w_0} & Q^2S_s+Qa(S_{st}+S_{ts})+a^2S_{w_0} & Q^2S_t+Qa(S_{ts}+S_{st})+a^2S_{w_0} & Q^3S_1+Q^2a(S_s+S_t)+Qa^2(S_{st}+S_{ts})+(a^3+Qa)S_{w_0} \end{array}$$
The rows for $S_{st}$, $S_{ts}$ and $S_{w_0}$ are obtained by composing the generator rows; in expanded $Q$-notation, $S_{w_0}S_{w_0}=Q^3S_1+(Q^3-Q^2)(S_s+S_t)+(Q^3-2Q^2+Q)(S_{st}+S_{ts})+(Q^3-2Q^2+2Q-1)S_{w_0}$ ([[lem-hh-hecke-anti-involution-bar-and-normalization]], part 4). The conversion between the two tables is $T_w=v^{-\ell(w)}S_w$; it maps the normalized table above to the multiplicative one.

3. **Sanity checks.** Both tables satisfy the braid identity and are associative, because they are the tables of the associative algebras $H$ and its rescaling; the substitution $v=1$ (so $Q=1$) turns them into the multiplication table of the group ring $\mathbb Z[S_3]$ ([[ex-hh-hecke-specialization-at-v-equals-one]]).

## Facts & Assumptions

**Given:** The generators $s,t$ with $m(s,t)=3$, the group $W\cong S_3$ with its six elements and lengths, the ring $R=\mathbb Z[v^{\pm1}]$ and the algebra $H$ with standard basis $\{T_w\}$.

[F1] $R=\Lambda_{\mathbb Z,1}$, $H$ is the quotient of the free associative $R$-algebra on $T_s,T_t$ by the quadratic relations and the single braid relation $T_sT_tT_s=T_tT_sT_t$, and $v$ is a unit. ([[def-hh-universal-coxeter-hecke-parameters-and-presentation]])

[F2] For every reduced expression $w=s_1\cdots s_k$ the element $T_w=T_{s_1}\cdots T_{s_k}$ is well defined, and $T_sT_w=T_{sw}$ if $\ell(sw)=\ell(w)+1$ while $T_sT_w=T_{sw}+(v-v^{-1})T_w$ if $\ell(sw)=\ell(w)-1$; the analogous right-multiplication rule holds. ([[lem-hh-reduced-word-independence-and-length-multiplication]])

[F3] $\{T_w:w\in W\}$ is an $R$-basis of $H$. ([[thm-hh-generic-coxeter-hecke-standard-basis]])

[F4] $T_s$ is a unit with $T_s^{-1}=T_s-(v-v^{-1})$; for $Q_s=v^2$ and $S_s=vT_s$ one has $T_s=v^{-1}S_s$, $S_s$ is a unit, and $(S_s-Q_s)(S_s+1)=0$. ([[lem-hh-hecke-anti-involution-bar-and-normalization]])

[F5] $W\cong S_3$ via $s\mapsto(12)$, $t\mapsto(23)$; its six elements $1,s,t,st,ts,w_0=sts=tst$ have lengths $0,1,1,2,2,3$, and $\ell$ agrees with the inversion number of the corresponding permutation. ([[def-hh-coxeter-matrix-word-group-and-length]], [[thm-hh-parabolic-minimal-representatives-and-length-additivity]])

## Verification

**Proof technique:** direct.

1.1 The six elements of $W$ and their lengths are those recorded in [F5], and the odd-edge graph on $S=\{s,t\}$ (the single edge $\{s,t\}$, since $m(s,t)=3$ is odd) is connected, so $c=1$, $R=\mathbb Z[v^{\pm1}]$ and $v_s=v_t=v$ by the parameter rule of [F1]. By [F3] the family $\{T_w:w\in W\}$ is an $R$-basis of $H$, so all tables below record well-defined elements. [F1, F3, F5]

1.2 Expansion from the rules of [F2] gives the normalized table of part 1. For example $T_sT_{st}$: $s\cdot(st)=t$ has length $1<2$, so the entry is $T_t+uT_{st}$; $T_sT_{ts}$: $s\cdot(ts)=w_0$ has length $3>2$, so the entry is $T_{w_0}$; $T_{w_0}T_s$: $w_0s=st$ has length $2<3$, so the entry is $T_{st}+uT_{w_0}$; $T_{st}T_{w_0}$: $(st)w_0=t$ has length $1<2$, so $T_{st}T_{w_0}=T_s(T_tT_{w_0})=T_s(T_{st}+uT_{w_0})=T_sT_{st}+uT_sT_{w_0}=(T_t+uT_{st})+u(T_{ts}+uT_{w_0})=T_t+uT_{st}+uT_{ts}+u^2T_{w_0}$; and $T_{w_0}T_{w_0}=(T_{w_0}T_{st})T_s=(T_s+uT_{st}+uT_{ts}+u^2T_{w_0})T_s=T_1+u(T_s+T_t)+u^2(T_{st}+T_{ts})+(u^3+u)T_{w_0}$, using $T_{st}T_s=T_{w_0}$, $T_{ts}T_s=T_t+uT_{ts}$, $T_{w_0}T_s=T_{st}+uT_{w_0}$ and $T_s^2=T_1+uT_s$. The remaining entries are computed in the same way by left multiplication by a reduced expression of the row element; the displayed table records all $36$ products. [F2, F3, algebra]

2.1 Multiplying the rules of 1.2 by $v^{\ell(w)+1}$ gives the multiplicative rule $S_sS_w=S_{sw}$ when $\ell(sw)=\ell(w)+1$ and $S_sS_w=QS_{sw}+(Q-1)S_w$ when $\ell(sw)=\ell(w)-1$, and similarly for $S_t$: for instance $S_sS_s=v^2T_s^2=v^2(uT_s+T_1)=v^2u\,v^{-1}S_s+QS_1=(Q-1)S_s+QS_1$ because $vu=v^2-1=Q-1$; and $S_sS_{w_0}=v^4T_sT_{w_0}=v^4(T_{ts}+uT_{w_0})=QS_{ts}+(Q-1)S_{w_0}$. The $S_s$- and $S_t$-rows are the translations of the corresponding rows of the normalized table; since $S_{st}=S_sS_t$, $S_{ts}=S_tS_s$ and $S_{w_0}=S_sS_{ts}$ (each $S_w$ is the product of the $S$'s along a reduced expression), associativity of $H$ composes the generator rows into the other displayed rows, with $a=Q-1$; and converting the entry $T_{w_0}T_{w_0}=T_1+u(T_s+T_t)+u^2(T_{st}+T_{ts})+(u^3+u)T_{w_0}$ with $S_w=v^{\ell(w)}T_w$ gives the stated $S_{w_0}S_{w_0}$. [F2, F4, step 1.1, step 1.2, algebra]

3.1 The two tables are converted into one another by $T_w=v^{-\ell(w)}S_w$, which is $T_s=v^{-1}S_s$ on generators and extends to products; it maps each entry of the normalized table to the corresponding entry of the multiplicative table by the computation of 2.1. Both tables satisfy the braid identity $T_sT_tT_s=T_{w_0}=T_tT_sT_t$ because it is the defining braid relation of $H$ ([F1]), and both are associative because $H$ is a quotient of an associative algebra; the substitution $v=1$ (so $u=0$ and $Q=1$) turns the normalized table into the group-ring table of $\mathbb Z[S_3]$, as recorded in [[ex-hh-hecke-specialization-at-v-equals-one]], and the multiplicative table into the same table since $S_w=T_w$ and $Q=1$ there. All computations are over $\mathbb Z[v^{\pm1}]$ and use no choice. [F1, F4, step 1.2, step 2.1] ∎

