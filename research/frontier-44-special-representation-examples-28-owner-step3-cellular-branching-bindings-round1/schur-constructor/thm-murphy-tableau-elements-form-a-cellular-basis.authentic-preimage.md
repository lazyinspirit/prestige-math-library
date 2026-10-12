---
id: thm-murphy-tableau-elements-form-a-cellular-basis
kind: theorem
title: "The Murphy tableau elements form a cellular basis"
status: draft
origin: pipeline
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [cor-sum-of-squares-of-standard-tableau-numbers, def-dominance-order-on-partitions, def-murphy-elements-and-murphy-tableau-elements, def-young-tableau-standard-tableau-and-shape, thm-standard-basis-of-the-generic-type-a-hecke-algebra]
justified_by: []
aliases: []
landmark: false
dependency_level: 2
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Andrew Mathas, Hecke algebras and Schur algebras of the symmetric group, complete prepublication manuscript (1998; expanded published edition: AMS University Lecture Series 15, 1999); complete 79-page manuscript, SHA-256 8cfeb611a95a3ff25cb95ad22bfd3a68475818301c34b04d131a8480a1b997e0"
      url: "https://web.math.ucsb.edu/~bigelow/books/mathas.pdf"
      locator: "Chapter 3 Section 2, printed pp. 20-25: Lemma 3.2, Proposition 3.3, Corollary 3.4, Lemma 3.9, the Garnir tableaux, Lemma 3.12, Lemma 3.13, Lemma 3.14, Corollary 3.15, Proposition 3.16, Corollary 3.17 and Theorem 3.18 (the Murphy Basis Theorem); the straightening argument is followed step by step in the proof below"
---

## Statement

Let $R$ be a commutative ring, $q\in R^{\times}$, and $H=H_{R,q}(S_n)$
([[def-generic-type-a-hecke-algebra]]). Let $\Lambda$ be the set of partitions
of $n$ ordered by dominance $\unrhd$
([[def-dominance-order-on-partitions]]), and for $\lambda\in\Lambda$ let
$T(\lambda)=\mathrm{Std}(\lambda)$ be the set of standard $\lambda$-tableaux
([[def-young-tableau-standard-tableau-and-shape]]). Then the **Murphy basis
theorem** holds: the family
$$\mathcal M=\{m_{st}:\lambda\vdash n,\ s,t\in\mathrm{Std}(\lambda)\}$$
is an $R$-basis of $H$, and $(\mathcal M,\Lambda)$ is a cellular basis of $H$ in
the sense of [[def-cellular-algebra-basis-and-cell-module]]. Explicitly:
(i) $m_{st}^{*}=m_{ts}$ for all $\lambda$ and $s,t$; and (ii) for every
$\lambda$, every $t\in\mathrm{Std}(\lambda)$ and every $h\in H$ there exist
$r_v\in R$ with
$$m_{st}h\equiv\sum_{v\in\mathrm{Std}(\lambda)}r_v\,m_{sv}\pmod{H^{\rhd\lambda}},$$
where $H^{\rhd\lambda}$ is spanned by the $m_{uv}$ with $\mu\rhd\lambda$. The
theorem holds over every commutative coefficient ring with $q\in R^{\times}$
and assumes no semisimplicity; the total number of Murphy elements is
$\sum_{\lambda\vdash n}|\mathrm{Std}(\lambda)|^2=n!$
([[cor-sum-of-squares-of-standard-tableau-numbers]]), matching the rank of $H$.

## Facts & Assumptions

**Given:** A commutative ring $R$, a unit $q\in R^\times$, and the Hecke algebra $H=H_{R,q}(S_n)$ with standard basis $\{T_w\}$ and Murphy elements $m_{st}=T_{d(s)}^{*}m_\mu T_{d(t)}$ ([[def-murphy-elements-and-murphy-tableau-elements]]).

[F1] Murphy-element calculus ([[def-murphy-elements-and-murphy-tableau-elements]]): for a composition $\mu$, $m_\mu=\sum_{w\in S_\mu}T_w$ satisfies $m_\mu T_w=q^{\ell(w)}m_\mu$ for $w\in S_\mu$; the $d(t)$, $t$ row-standard, are the distinguished right-coset representatives $D_\mu$ of $S_\mu$, with $\ell(wd)=\ell(w)+\ell(d)$ for $w\in S_\mu$, $d\in D_\mu$; $m_{st}^*=m_{ts}$; and $m_{st}h$ is additive in the two tableau indices.

[F2] Standard basis ([[thm-standard-basis-of-the-generic-type-a-hecke-algebra]]): $\{T_w:w\in S_n\}$ is an $R$-basis of $H$ of rank $n!$, and $T_wT_i=T_{ws_i}$ if $\ell(ws_i)=\ell(w)+1$, while $T_wT_i=(q-1)T_w+qT_{ws_i}$ if $\ell(ws_i)=\ell(w)-1$.

[F3] Dominance ([[def-dominance-order-on-partitions]]): $\lambda\unrhd\mu$ when $\sum_{i\le j}\lambda_i\ge\sum_{i\le j}\mu_i$ for all $j$, a partial order with strict part $\rhd$.

[F4] Count ([[cor-sum-of-squares-of-standard-tableau-numbers]]): $\sum_{\lambda\vdash n}|\mathrm{Std}(\lambda)|^2=n!$.

## Proof

**Proof technique:** direct.

1.1 For a composition $\mu$ the set $\{m_\mu T_d:d\in D_\mu\}$ is an $R$-basis of $M^\mu=m_\mu H$, and for $t\in D_\mu$ (identified with its row-standard $\mu$-tableau) and $1\le i<n$, setting $s:=ts_i$ one has $m_\mu T_{d(t)}T_i=q\,m_\mu T_{d(t)}$ if $s$ is not row-standard, $m_\mu T_{d(t)}T_i=m_\mu T_{d(s)}$ if $s$ is row-standard with $\ell(d(s))>\ell(d(t))$, and $m_\mu T_{d(t)}T_i=q\,m_\mu T_{d(s)}+(q-1)m_\mu T_{d(t)}$ if $s$ is row-standard with $\ell(d(s))<\ell(d(t))$. Indeed the cosets $S_\mu d$, $d\in D_\mu$, partition $S_n$ and $T_uT_d=T_{ud}$ for $u\in S_\mu$, $d\in D_\mu$ by [F1] and [F2], so $m_\mu T_d=\sum_{u\in S_\mu}T_{ud}$ is the sum of the standard basis elements indexed by one coset; disjointness of the cosets gives the basis statement. For the formula: if $s$ is not row-standard then $i,i+1$ are in the same row of $t$, so $d(t)s_i\in S_\mu d(t)$, say $d(t)s_i=ud(t)$ with $\ell(ud(t))=\ell(u)+\ell(d(t))$; then $T_{d(t)}T_i=T_{d(t)s_i}=T_uT_{d(t)}$ and $m_\mu T_{d(t)}T_i=q^{\ell(u)}m_\mu T_{d(t)}=q\,m_\mu T_{d(t)}$ by [F1] (here $\ell(u)=1$). If $s$ is row-standard then $d(s)=d(t)s_i$ and the two remaining cases are exactly the two cases of the multiplication rule [F2], multiplied on the left by $m_\mu$. [F1, F2, algebra]

2.1 (Row-standard spanning; Lemma 3.9 of the source, printed p. 27) For every partition $\lambda$ and all row-standard $\lambda$-tableaux $s,t$ the element $m_{st}$ is an $R$-linear combination of elements $m_{uv}$ with $u,v$ row-standard $\lambda$-tableaux. The source's proof is used: choose $d\in S_n$ such that $S_{\lambda}=dS_{\lambda'}d^{-1}$ and $t^{\lambda}d$, $t^{\lambda'}d^{-1}$ are both row-standard (a matrix transpose conjugation); then $d\in D_{\lambda'}$, $d^{-1}\in D_{\lambda}$ and $m_\lambda T_d=T_dm_{\lambda'}$ by [F1], and $m_{\lambda'}=T_d^{-1}m_\lambda T_d$ is a combination of terms $m_{uv}$ with $u,v$ row-standard by step 1.1 and its left-handed analogue; the general $m_{st}=T_{d(s)}^{*}m_\lambda T_{d(t)}=T_{d(s)}^{*}T_d^{-1}m_{\lambda'}T_dT_{d(t)}$ follows by applying step 1.1 (and its mirror) on both sides. [given, step 1.1, F1, algebra]

3.1 (Straightening; Lemmas 3.12-3.14 of the source, printed pp. 27-29) If $t$ is a row-standard $\lambda$-tableau which is not standard, then $m_{st}$ is an $R$-linear combination of terms $m_{uv}$ with $u,v$ standard $\nu$-tableaux for partitions $\nu$ such that either $\nu\rhd\lambda$ in dominance, or $\nu=\lambda$ with $u\unrhd s$ and $v\unrhd t$ in the tableau order of the source (which refines dominance). The argument, in the source's steps: (a) a non-standard row-standard $t$ can be written $t=gw$ with $g$ a Garnir tableau and $\ell(d(t))=\ell(d(g))+\ell(w)$ (Lemma 3.13); (b) for a Garnir tableau $g$ the **Garnir relation** $m_{t^\lambda g}=h-\sum_{\zeta\in\mathrm{Std}(\lambda),\ \zeta\rhd g}m_{t^\lambda\zeta}$ holds, where $h$ is a combination of $m_{uv}$ with $u,v$ row-standard $\nu$-tableaux and $\nu\rhd\lambda$ (Lemma 3.12, whose verification is the coset identity of the source's Example 3.11 together with step 1.1); (c) substituting (b) into $m_{st}=T_{d(s)}^{*}m_{t^\lambda g}T_w$ and using the right and left tableau forms of step 1.1 gives the induction in $\nu$ and in $t$ (Lemma 3.14). [given, step 1.1, step 2.1, F1, F2, F3, algebra]

4.1 (Column exclusion; Corollary 3.15 and Proposition 3.16 of the source, printed pp. 29-30) Suppose $t$ is a standard $\lambda$-tableau such that $i$ and $i+1$ are in the same column of $t$. Then $m_{st}T_i\equiv-m_{st}+\sum_vr_vm_{sv}\pmod{H^{\rhd\lambda}}$ with $v$ standard and $v\rhd t$ (Corollary 3.15); and if $h=\sum_{s,t}r_{st}m_{st}$ is an element of $H_{\mathbb Z}[q^{\pm1}]$ involving $m_{uv}$ for standard $\lambda$-tableaux $u,v$, then no two consecutive entries $i,i+1$ lie in the same column of $u$ (Proposition 3.16). The proof of the Proposition is the source's: apply $T_i$ to $h$ and use $T_im_\lambda=\widehat q\,m_\lambda$ together with the unitriangular expansion of $T_ih$ obtained from Corollary 3.15, forcing the coefficient of $m_{uv}$ to vanish. [given, step 3.1, F1, F3, algebra]

4.2 The set $\mathcal M$ spans $H$: by steps 2.1 and 3.1 every $m_{st}$ with $s,t$ row-standard reduces by the straightening induction, in finitely many steps, to an $R$-linear combination of $m_{uv}$ with $u,v$ **standard**; since $H$ is spanned by all row-standard $m_{st}$ — indeed $H=M^{(n)}$ and the $m_{t^\lambda t}$ with $t$ row-standard form the basis of $M^\lambda$ of step 1.1 — this proves spanning. The number of elements is $|\mathcal M|=\sum_{\lambda\vdash n}|\mathrm{Std}(\lambda)|^2=n!$ by [F4], equal to the rank of the free $R$-module $H$ by [F2]; a spanning set of that cardinality is a basis. [step 2.1, step 3.1, step 1.1, F2, F4]

5.1 (Two-sided ideals; Corollary 3.17 of the source, printed p. 30) For a partition $\lambda$ the spans $H^{\unrhd\lambda}$ of the $m_{uv}$ with $\nu\unrhd\lambda$ and $H^{\rhd\lambda}$ of the $m_{uv}$ with $\nu\rhd\lambda$ are two-sided ideals of $H$, and for $t\in\mathrm{Std}(\lambda)$ and $h\in H$ there are $r_v\in R$ with $m_{t^\lambda t}h\equiv\sum_{v\in\mathrm{Std}(\lambda)}r_vm_{t^\lambda v}\pmod{H^{\rhd\lambda}}$. The source's induction on $\lambda$ is used: step 1.1 shows $m_{t^\lambda t^\lambda}T_w=\sum r_{uv}m_{uv}$ with $u,v$ standard and $\nu\unrhd\lambda$; Proposition 3.16 then constrains the shapes $\nu$ that occur: because no two consecutive entries of $u$ may lie in a common column, the entries $1,\dots,\lambda_1$ must all lie in the first row of $u$, so $\nu_1\ge\lambda_1$, and the same argument on the remaining rows gives $\nu_1+\cdots+\nu_j\ge\lambda_1+\cdots+\lambda_j$ for every $j$, that is, $\nu\unrhd\lambda$; the general $m_{st}$ follows by multiplying on the left by $T_{d(s)}^{*}$ and using the left-handed version of step 1.1. [given, step 1.1, step 3.1, step 4.1, F1, F3, algebra]

6.1 The cellular axioms hold: (i) is $m_{st}^*=m_{ts}$ from [F1]; (ii) is step 5.1, whose congruence is exactly the cellular triangular axiom for the Murphy basis with $\Lambda$ ordered by dominance, since $H^{\rhd\lambda}$ is spanned by the $m_{uv}$ with $\mu\rhd\lambda$; the anti-automorphism $m_{st}\mapsto m_{ts}$ and the ideal property of $H^{\rhd\lambda}$ are step 5.1 and [F1]. Hence $(\mathcal M,\Lambda)$ is a cellular basis of $H$, the Murphy basis theorem. [step 5.1, step 4.2, F1] ∎
