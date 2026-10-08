---
id: lem-hh-commuting-left-right-hecke-length-operators
kind: lemma
title: "The commuting left and right length operators and their Hecke relations"
status: published
origin: pipeline
pipeline_run: frontier-42-coxeter-32
dependency_level: 5
deps: [def-hh-universal-coxeter-hecke-parameters-and-presentation, thm-hh-matsumoto-reduced-word-theorem, thm-hh-coxeter-exchange-deletion-and-faithfulness, lem-hh-dihedral-root-recurrence-and-root-sign, def-hh-coxeter-matrix-word-group-and-length, def-free-module-on-a-set-and-standard-basis, def-module-homomorphism-kernel-image-and-cokernel, def-endomorphism-ring-of-a-module]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "George Lusztig, Lectures on Hecke Algebras with Unequal Parameters (MIT Fall 1999 lecture notes, arXiv:math/0108172v1)"
      url: "https://arxiv.org/pdf/math/0108172"
      locator: "Proposition 3.3 with its complete proof, PDF pp. 8-9: the operators P_s, Q_s, the six length configurations of the commutation check and the evaluation argument at e_1"
    - title: "George Lusztig, Lectures on Hecke Algebras with Unequal Parameters (MIT Fall 1999 lecture notes, arXiv:math/0108172v1)"
      url: "https://arxiv.org/pdf/math/0108172"
      locator: "Proposition 1.10 with its proof, PDF p. 5: l(swt)=l(w) and l(sw)=l(wt) imply sw=wt, via the exchange statement 1.7"
verification:
  audited: "2026-10-08"
  precheck: pass
---

## Statement

Let $(S,m)$, $W$, $\ell$ be as in [[def-hh-coxeter-matrix-word-group-and-length]], let $R$, $v_s$, $H$, $T_s$ be as in [[def-hh-universal-coxeter-hecke-parameters-and-presentation]], and let $E$ be the free $R$-module with basis $(e_w)_{w\in W}$ ([[def-free-module-on-a-set-and-standard-basis]]). For $s\in S$ define $R$-linear endomorphisms $P_s,Q_s\in\operatorname{End}_R(E)$ ([[def-endomorphism-ring-of-a-module]], [[def-module-homomorphism-kernel-image-and-cokernel]]) by
$$P_s(e_w)=\begin{cases}e_{sw},&\ell(sw)=\ell(w)+1,\\[2pt] e_{sw}+(v_s-v_s^{-1})e_w,&\ell(sw)=\ell(w)-1,\end{cases}\qquad Q_s(e_w)=\begin{cases}e_{ws},&\ell(ws)=\ell(w)+1,\\[2pt] e_{ws}+(v_s-v_s^{-1})e_w,&\ell(ws)=\ell(w)-1.\end{cases}$$

1. **Commutation.** $P_sQ_t=Q_tP_s$ for all $s,t\in S$.
2. **Quadratic relations.** $P_s^2=(v_s-v_s^{-1})P_s+\operatorname{id}_E$, hence $P_s$ is invertible with $P_s^{-1}=P_s-(v_s-v_s^{-1})\operatorname{id}_E$; the same identities hold with $Q_s$ in place of $P_s$.
3. **Braid relations.** For $s\ne t$ with $m:=m(s,t)<\infty$, the two products of $m$ alternating factors agree: $P_sP_tP_s\cdots=P_tP_sP_t\cdots$, and likewise for the $Q$'s.
4. **Reduced products.** If $w=s_1\cdots s_k$ is a reduced expression, then $P_{s_1}\cdots P_{s_k}(e_1)=e_w$. Consequently $P_{s_1}\cdots P_{s_k}=P_{s'_1}\cdots P_{s'_k}$ for any two reduced expressions of $w$, and we write $P_w$ for this common endomorphism; then $P_w(e_1)=e_w$.

Neither finiteness of $W$ nor any regularity of $R$ is assumed. The operators $P_s$ model left multiplication by $T_s$ under the representation constructed in [[thm-hh-generic-coxeter-hecke-standard-basis]].

## Facts & Assumptions

**Given:** A finite Coxeter matrix $(S,m)$, the group $W$ with its length function $\ell$ and the parameter data $R$, $v_s$ of the definition, and the free $R$-module $E$ with basis $(e_w)_{w\in W}$.

[F1] For every $w\in W$ and $s\in S$ one has $\ell(sw)=\ell(w)\pm1$ and $\ell(ws)=\ell(w)\pm1$; moreover, if $w=s_1\cdots s_k$ is reduced and $\ell(sw)=k-1$, then there is $i\in\{1,\dots,k\}$ with $s\,s_1\cdots s_{i-1}=s_1\cdots s_i$, equivalently $sw=s_1\cdots\widehat{s_i}\cdots s_k$; the right-handed form is analogous. ([[thm-hh-coxeter-exchange-deletion-and-faithfulness]])

[F2] $R$ is a commutative ring in which each $v_s$ is a unit, with $v_s=v_t$ whenever $s,t\in S$ are conjugate in $W$, and $E$ is the free $R$-module of [[def-free-module-on-a-set-and-standard-basis]] with standard basis $(e_w)_{w\in W}$. ([[def-hh-universal-coxeter-hecke-parameters-and-presentation]])

[F3] Alternating dihedral words are reduced in the ambient group: if $s\ne t$ and $w_q$ is the value of the alternating word of length $q$ beginning with $s$, then $\ell(w_q)=q$ whenever $q\le m(s,t)$ with $m(s,t)<\infty$. ([[lem-hh-dihedral-root-recurrence-and-root-sign]])

[F4] Any two reduced expressions of the same element $w\in W$ are braid-equivalent: one is obtained from the other by finitely many replacements of an alternating subword $s\,t\,s\,t\cdots$ of length $m(s,t)<\infty$ by the alternating word $t\,s\,t\,s\cdots$ of the same length. ([[thm-hh-matsumoto-reduced-word-theorem]])

[F5] $W$ is the quotient of the free group on $S$ by the normal closure of the relators $s^2$, $s\in S$, and $(st)^{m(s,t)}$ for $s\ne t$ with $m(s,t)<\infty$; the length $\ell(w)$ is the least length of a word in $S$ representing $w$. ([[def-hh-coxeter-matrix-word-group-and-length]])

[F6] In a free module with basis $(e_w)$, every element is a unique finite $R$-linear combination of the basis vectors; a family of $R$-linear maps that agree on every basis vector is equal. ([[def-free-module-on-a-set-and-standard-basis]])

[F7] $\operatorname{End}_R(E)$ consists of the $R$-module homomorphisms $E\to E$ with pointwise addition and composition as multiplication. ([[def-endomorphism-ring-of-a-module]], [[def-module-homomorphism-kernel-image-and-cokernel]])

## Proof

**Given:** A finite Coxeter matrix $(S,m)$, the group $W$ with length $\ell$, the parameters $R$, $v_s$ and the free module $E$ with basis $(e_w)_{w\in W}$.

1.1 For $x\in W$ and $s\in S$, [F1] gives $\ell(sx)=\ell(x)\pm1$, so exactly one clause of the displayed definition of $P_s$ applies to $e_x$, and likewise exactly one clause of the definition of $Q_s$ applies to $e_x$; each basis vector therefore has exactly one prescribed image, and extending $R$-linearly defines $P_s,Q_s\in\operatorname{End}_R(E)$ ([F6], [F7]). Both clauses have the form $e_x\mapsto e_{\sigma x}+c\,e_x$ with $\sigma$ the multiplication by $s$ from the appropriate side and $c$ the appropriate unit difference, so no selection is involved. [F1, F6, F7]

1.2 Write $u_s:=v_s-v_s^{-1}$. If $\ell(sw)=\ell(w)+1$, then $P_s^2(e_w)=P_s(e_{sw})=e_w+u_se_{sw}=e_w+u_sP_s(e_w)$, because $\ell(s\cdot sw)=\ell(w)=\ell(sw)-1$. If $\ell(sw)=\ell(w)-1$, then $P_s(e_w)=e_{sw}+u_se_w$ and $P_s(e_{sw})=e_w$, so $P_s^2(e_w)=e_w+u_sP_s(e_w)$; in both cases $P_s^2=u_sP_s+\operatorname{id}_E$ on each basis vector, hence on $E$ ([F6], [F7]). Therefore $P_s(P_s-u_s\operatorname{id}_E)=\operatorname{id}_E=(P_s-u_s\operatorname{id}_E)P_s$, so $P_s$ is invertible with inverse $P_s-u_s\operatorname{id}_E$. Multiplying all length data on the right gives the same computation for $Q_s$. [F1, F6, algebra]

1.3 (two-length lemma) Let $x\in W$ and $s,t\in S$ satisfy $\ell(sxt)=\ell(x)$ and $\ell(sx)=\ell(xt)$; then $sx=xt$. Indeed, let $x=s_1\cdots s_q$ be a reduced expression. If $\ell(xt)=q+1$, then $(s_1,\dots,s_q,t)$ is a reduced expression of $xt$ of length $q+1=\ell(xt)$, and $\ell(s\cdot xt)=\ell(x)=q$, so exchange [F1] applied to this expression and the letter $s$ gives an index $i\in\{1,\dots,q+1\}$ with $s\,s_1\cdots s_{i-1}=s_1\cdots s_i$, where $s_{q+1}:=t$. If $i=q+1$, this reads $sx=xt$ and we are done; if $i\le q$, then $sx=(s\,s_1\cdots s_{i-1})s_i\,s_{i+1}\cdots s_q=(s_1\cdots s_i)s_i\,s_{i+1}\cdots s_q=s_1\cdots s_{i-1}s_{i+1}\cdots s_q$ is represented by a word of $q-1$ letters, so $\ell(sx)\le q-1<q+1=\ell(xt)=\ell(sx)$, a contradiction. If $\ell(xt)=q-1$, put $x':=xt$; then $x't=x$, so $\ell(x't)=\ell(x)=q=\ell(xt)+1=\ell(x')+1$, $\ell(sx't)=\ell(sx)=q-1=\ell(x')$ and $\ell(sx')=\ell(sxt)=\ell(x)=q=\ell(x't)$, so $x'$ satisfies the hypotheses of the case just treated with the roles of the lengths interchanged, and that case yields $sx'=x't$; multiplying by $t$ on the right gives $sx=xt$. [F1, algebra]

1.4 Fix $s,t\in S$ and $x\in W$ and expand both $P_sQ_t(e_x)$ and $Q_tP_s(e_x)$ from the definitions. In the four length configurations (i) $\ell(sx)=\ell(xt)=\ell(x)+1$, $\ell(sxt)=\ell(x)+2$, where both sides equal $e_{sxt}$; (ii) $\ell(sx)=\ell(xt)=\ell(x)-1$, $\ell(sxt)=\ell(x)-2$, where both sides equal $e_{sxt}+u_te_{sx}+u_se_{xt}+u_su_te_x$; (iii) $\ell(sx)=\ell(x)-1$, $\ell(xt)=\ell(x)+1$, $\ell(sxt)=\ell(x)$, where both sides equal $e_{sxt}+u_se_{xt}$; (iv) $\ell(sx)=\ell(x)+1$, $\ell(xt)=\ell(x)-1$, $\ell(sxt)=\ell(x)$, where both sides equal $e_{sxt}+u_te_{sx}$; the two expansions agree, where $u_s=v_s-v_s^{-1}$ and $u_t=v_t-v_t^{-1}$. [F1, algebra]

1.5 (reduced products at $e_1$) Let $w=s_1\cdots s_k$ be a reduced expression. Every contiguous subword is reduced: replacing a subword by a shorter representative would shorten the entire expression of $w$, contradicting $\ell(w)=k$ ([F5]). Put $z_i:=s_i\cdots s_k$ for $1\le i\le k$ and $z_{k+1}:=1$; then $\ell(z_i)=k-i+1$ and $s_i z_{i+1}=z_i$, so $P_{s_i}(e_{z_{i+1}})=e_{z_i}$. Applying the operators from right to left gives $P_{s_1}\cdots P_{s_k}(e_1)=e_w$. For right multiplication put $w_i:=s_1\cdots s_i$, $w_0:=1$; the same reduced-subword argument gives $\ell(w_i)=i$ and $w_{i-1}s_i=w_i$, so $Q_{s_i}(e_{w_{i-1}})=e_{w_i}$. Thus $Q_{s_k}\cdots Q_{s_1}(e_1)=e_w$. Both identities also hold for the empty expression. [F1, F5, F6, algebra]

2.1 In the two remaining length configurations, (v) $\ell(sx)=\ell(xt)=\ell(x)-1$, $\ell(sxt)=\ell(x)$, the two expansions are $P_sQ_t(e_x)=e_{sxt}+u_te_{sx}+u_su_te_x$ and $Q_tP_s(e_x)=e_{sxt}+u_se_{xt}+u_su_te_x$; (vi) $\ell(sx)=\ell(xt)=\ell(x)+1$, $\ell(sxt)=\ell(x)$, the two expansions are $P_sQ_t(e_x)=e_{sxt}+u_se_{xt}$ and $Q_tP_s(e_x)=e_{sxt}+u_te_{sx}$. In both, $\ell(sxt)=\ell(x)$ and $\ell(sx)=\ell(xt)$, so $sx=xt$ by 1.3. Hence $s$ and $t$ are conjugate in $W$ (with $x$ as conjugating element) and therefore $v_s=v_t$ by the parameter rule of the definition ([F2]), so $u_s=u_t$ and the two expansions coincide: also $P_sQ_t(e_x)=Q_tP_s(e_x)$. Together with the four configurations of 1.4 this proves $P_sQ_t(e_x)=Q_tP_s(e_x)$ for every basis vector $e_x$, so $P_sQ_t=Q_tP_s$ because $(e_x)$ spans $E$ ([F6]). [F2, F6, step 1.3, step 1.4]

3.1 Let $s\ne t$ with $m:=m(s,t)<\infty$, and put $a:=P_sP_tP_s\cdots$ and $b:=P_tP_sP_t\cdots$, each product having $m$ alternating factors. Let $w_1$ be the alternating product of $m$ factors beginning with $s$ and $w_2$ that beginning with $t$. Each successive factor is length-increasing along the alternating word by [F3] (the partial alternating words of length $\le m$ are reduced), so the computation of 1.5 gives $a(e_1)=e_{w_1}$ and, with the roles of $s,t$ exchanged, $b(e_1)=e_{w_2}$. In $W$ one has $w_1=w_2$: since $(st)(ts)=s\,t\,t\,s=s^2=1$ in $W$, we have $(ts)=(st)^{-1}$ ([F5]), and the relator $(st)^m=1$ gives $(st)^{-k}=(st)^{m-k}$ for $0\le k\le m$; hence if $m=2k+1$ then $w_2=(ts)^kt=(st)^{-k}t=(st)^{k+1}t=(st)^ks=w_1$, while if $m=2k$ then $w_2=(ts)^k=(st)^{-k}=(st)^k=w_1$. Now let $w=u_1\cdots u_k$ be any reduced expression. By 1.5, $Q_{u_k}\cdots Q_{u_1}(e_1)=e_w$, and by 2.1 every $P_s$ commutes with every $Q_t$, so $a(e_w)=aQ_{u_k}\cdots Q_{u_1}(e_1)=Q_{u_k}\cdots Q_{u_1}a(e_1)=Q_{u_k}\cdots Q_{u_1}b(e_1)=b(e_w)$; since $(e_w)_{w\in W}$ is a basis, $a=b$ ([F6]). The same argument with $P$ replaced by $Q$ throughout gives the braid relations for the $Q$'s. [F3, F5, F6, step 1.5, step 2.1]

4.1 By [F4] any two reduced expressions of $w$ are braid-equivalent, and a braid move replaces a block $P_sP_tP_s\cdots$ of $m(s,t)$ factors by $P_tP_sP_t\cdots$ with the same product by 3.1, so the product $P_{s_1}\cdots P_{s_k}$ depends only on $w$; writing $P_w$ for this common endomorphism, $P_w(e_1)=e_w$ by 1.5. Hence part 4 holds, and with part 1 (2.1), part 2 (1.2) and part 3 (3.1) all four assertions are proved. No finiteness of $W$ and no regularity of $R$ was used, and no choice: the operators are defined by explicit length conditions and every product above runs along a reduced expression that exists by the definition of $\ell$. [F4, step 1.2, step 1.5, step 2.1, step 3.1] ∎
