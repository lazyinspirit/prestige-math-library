---
id: ex-hh-unequal-parameter-dihedral-consistency
kind: example
title: "Unequal parameters in the dihedral cases: the odd-edge obstruction and the even-edge freedom"
status: published
origin: pipeline
pipeline_run: frontier-42-coxeter-32
dependency_level: 7
deps: [def-hh-universal-coxeter-hecke-parameters-and-presentation, lem-hh-commuting-left-right-hecke-length-operators, thm-hh-generic-coxeter-hecke-standard-basis, thm-hh-coxeter-exchange-deletion-and-faithfulness, lem-hh-dihedral-root-recurrence-and-root-sign, def-hh-coxeter-matrix-word-group-and-length, lem-hh-finite-polynomial-and-localization-constructions, thm-hh-matsumoto-reduced-word-theorem, thm-int-comm-ring, lem-int-cancellation, lem-nat-embeds-int]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "George Lusztig, Lectures on Hecke Algebras with Unequal Parameters (MIT Fall 1999 lecture notes, arXiv:math/0108172v1)"
      url: "https://arxiv.org/pdf/math/0108172"
      locator: "Proposition 3.3, PDF p. 9: the two exceptional length configurations and the equal-parameter conclusion, together with Proposition 1.10 on PDF p. 5"
    - title: "George Lusztig, Lectures on Hecke Algebras with Unequal Parameters (MIT Fall 1999 lecture notes, arXiv:math/0108172v1)"
      url: "https://arxiv.org/pdf/math/0108172"
      locator: "Section 3.1, PDF p. 8: the constraint L(s)=L(s') for finite odd m(s,s') on weight functions"
verification:
  audited: "2026-10-08"
  precheck: pass
---

## Example

Let $S=\{s,t\}$ with $m:=m(s,t)$ finite and $W$ the dihedral group of order $2m$ ([[thm-hh-matsumoto-reduced-word-theorem]], part 3). For the operator test, let $R$ be any commutative ring and let $v_s,v_t\in R^\times$ be arbitrary units, without imposing the odd-component rule. Put $E:=R^{(W)}$ with basis $(e_w)$ and define $P_s,Q_t$ by the length formulas of [[lem-hh-commuting-left-right-hecke-length-operators]], using $u_x:=v_x-v_x^{-1}$ for $x\in\{s,t\}$. These formulas define linear maps even when the parameters fail the rule; the commutation test below determines the obstruction. For the generic Hecke algebra itself, the coefficient ring and class-constant parameters are those of [[def-hh-universal-coxeter-hecke-parameters-and-presentation]].

1. **$m$ odd forces equal differences.** Suppose $m$ is odd, so that $s$ and $t$ are conjugate and [[def-hh-universal-coxeter-hecke-parameters-and-presentation]] gives them one parameter. If instead one tries independent parameters $u_s,u_t$, the commutation check of [[lem-hh-commuting-left-right-hecke-length-operators]] fails: at the weight $w=sts$ (the case $m=3$) one has $sw=wt=ts$ and
$$P_sQ_t(e_w)-Q_tP_s(e_w)=(u_t-u_s)\,e_{ts},$$
and for general odd $m$ the same computation at the longest element $w=stst\cdots$ of length $m$ gives $(u_t-u_s)\,e_{wt}$ with $wt$ the alternating element of length $m-1$; the difference vanishes if and only if $u_s=u_t$. Since the quadratic relation depends on the parameter only through the difference $u_x$ ([[def-hh-universal-coxeter-hecke-parameters-and-presentation]], convention (ii)), the condition $u_s=u_t$ means precisely that the quadratic relations of $T_s$ and $T_t$ coincide; for unit-valued parameters in an integral domain its solutions are $v_t=v_s$ and $v_t=-v_s^{-1}$; over an arbitrary commutative ring the exact condition is $(v_t-v_s)(v_t+v_s^{-1})=0$. The class-constant assignment of the A page satisfies this condition on an odd edge; it is a canonical choice of unit parameters, rather than the only choice with these quadratic relations.

2. **$m$ even allows unequal parameters.** Suppose $m$ is even, e.g. $m=4$ or $6$. Then $s$ and $t$ lie in different components of the odd-edge graph and are not conjugate; the assignment $v_s=u$, $v_t=w$ with independent units $u,w$ is a legitimate instance of [[def-hh-universal-coxeter-hecke-parameters-and-presentation]], and for every $z\in W$ the two expansions of $P_sQ_t(e_z)$ and $Q_tP_s(e_z)$ agree term by term with no relation imposed between $u$ and $w$. Consequently $P_sQ_t=Q_tP_s$, and the standard basis theorem [[thm-hh-generic-coxeter-hecke-standard-basis]] applies with distinct parameters $u\ne w$.

3. **Conclusion.** Independent parameter differences are allowed across generators that are not conjugate. Within an odd component the differences must agree; distinct unit parameters can still give the same difference, as in $v_t=-v_s^{-1}$ over an integral domain. This is the local (rank-two) content of the parameter rule of [[def-hh-universal-coxeter-hecke-parameters-and-presentation]].

## Facts & Assumptions

**Given:** $S=\{s,t\}$ with $m=m(s,t)$ finite, the dihedral group $W$ of order $2m$, the free module $E$ with basis $(e_w)_{w\in W}$ and the operators $P_s$, $Q_t$ built from the parameters $u_s$, $u_t$.

[F1] Simple generators are conjugate in $W$ if and only if they are joined by a chain of odd edges; in the generic presentation the units are assigned equally on each conjugacy class, while the quadratic relation depends on $v_s$ only through $u_s=v_s-v_s^{-1}$. ([[def-hh-universal-coxeter-hecke-parameters-and-presentation]])

[F2] The operators $P_s,Q_t$ are defined by the two length clauses, so on each basis vector $e_z$ they act by the clause determined by $\ell(sz)$ and $\ell(zt)$; whenever $\ell(szt)=\ell(z)$ and $\ell(sz)=\ell(zt)$ one has $sz=zt$ (the two-length lemma). ([[lem-hh-commuting-left-right-hecke-length-operators]], [[thm-hh-coxeter-exchange-deletion-and-faithfulness]])

[F3] The group on $s,t$ with finite $m(s,t)=m$ is dihedral of order $2m$ ([[thm-hh-matsumoto-reduced-word-theorem]], part 3). Alternating dihedral words are reduced in the ambient group: for $q\le m$ the alternating word of length $q$ has length exactly $q$ in $W$. ([[lem-hh-dihedral-root-recurrence-and-root-sign]])

[F4] $\{T_w:w\in W\}$ is an $R$-basis of the Hecke algebra whenever the parameters are constant on odd-edge components; in particular the standard basis theorem applies to the two-parameter algebra of the even case $m$, where $s$ and $t$ lie in different odd components. ([[thm-hh-generic-coxeter-hecke-standard-basis]])

[F5] The integers are a commutative ring ([[thm-int-comm-ring]]) with no zero divisors ([[lem-int-cancellation]]), and $0\ne1$ by injectivity of the natural-number embedding ([[lem-nat-embeds-int]]), hence an integral domain. The Laurent polynomial ring in finitely many variables over an integral domain is an integral domain; in an integral domain a product is zero only if one factor is zero. The independent formal variables $v_s,v_t$ in $\mathbb Z[v_s^{\pm1},v_t^{\pm1}]$ do not satisfy either factor equation; the two alternatives describe unit-valued specializations into integral domains. ([[lem-hh-finite-polynomial-and-localization-constructions]])

## Verification

**Proof technique:** direct.

1.1 Fix $x\in W$ and expand $P_sQ_t(e_x)$ and $Q_tP_s(e_x)$ from the two length clauses. The intermediate length $\ell(sxt)$ differs from both $\ell(sx)$ and $\ell(xt)$ by $\pm1$, so only the following length configurations occur: (i) $\ell(sx)=\ell(xt)=\ell(x)+1$, $\ell(sxt)=\ell(x)+2$; (ii) $\ell(sx)=\ell(xt)=\ell(x)-1$, $\ell(sxt)=\ell(x)-2$; (iii) $\ell(sx)=\ell(x)-1$, $\ell(xt)=\ell(x)+1$, $\ell(sxt)=\ell(x)$; (iv) $\ell(sx)=\ell(x)+1$, $\ell(xt)=\ell(x)-1$, $\ell(sxt)=\ell(x)$; (v) $\ell(sx)=\ell(xt)=\ell(x)-1$, $\ell(sxt)=\ell(x)$; (vi) $\ell(sx)=\ell(xt)=\ell(x)+1$, $\ell(sxt)=\ell(x)$. In (i)-(iv) the two expansions agree identically for all values of $u_s,u_t$; in (v) they are $P_sQ_t(e_x)=e_{sxt}+u_te_{sx}+u_su_te_x$ and $Q_tP_s(e_x)=e_{sxt}+u_se_{xt}+u_su_te_x$, and in (vi) they are $P_sQ_t(e_x)=e_{sxt}+u_se_{xt}$ and $Q_tP_s(e_x)=e_{sxt}+u_te_{sx}$; moreover in (v) and (vi) the hypotheses $\ell(sxt)=\ell(x)$ and $\ell(sx)=\ell(xt)$ hold, so $sx=xt$ ([F2]). [F2, algebra]

2.1 Let $m=2k+1$ be odd and let $\xi:=(st)^ks$, the alternating word of length $m$; by [F3] $\ell(\xi)=m$, and $s\xi=s(st)^ks=(ts)^k=(st)^{-k}=(st)^{k+1}$ while $\xi t=(st)^kst=(st)^{k+1}$, the middle identities using $(st)^{-1}=ts$ and the relator $(st)^m=1$ together with $m-k=k+1$ (the values here are elements of $W$, not literal words). Put $z:=s\xi=\xi t$; then $z$ is the alternating element of length $m-1$, so $\ell(s\xi)=\ell(\xi t)=\ell(z)=m-1=\ell(\xi)-1$ by [F3], while $s\xi t=zt=(st)^{k+1}t=(st)^kstt=(st)^ks=\xi$ gives $\ell(s\xi t)=\ell(\xi)$. This is configuration (v) of 1.1 at the weight $\xi$, so $P_sQ_t(e_\xi)-Q_tP_s(e_\xi)=(u_t-u_s)e_z$ with $z=\xi t$ the alternating element of length $m-1$; for $m=3$ this is the displayed identity with $z=ts$. The difference vanishes in $E$ if and only if $u_t-u_s=0$ in the coefficient ring, because $(e_w)$ is a basis. Consequently independent parameters with $u_s\ne u_t$ violate the commutation of the length operators, while $u_s=u_t$ holds exactly when the quadratic relations of $T_s$ and $T_t$ coincide ([F1]); the identity $v_t(u_t-u_s)=(v_t-v_s)(v_t+v_s^{-1})$ shows that $u_s=u_t$ is equivalent to $(v_t-v_s)(v_t+v_s^{-1})=0$, since $v_t$ is a unit. For unit-valued specializations into an integral domain this holds exactly when $v_t=v_s$ or $v_t=-v_s^{-1}$ by [F5]; over a ring with zero divisors only the product-zero condition is asserted. [F1, F3, F5, step 1.1, algebra]

2.2 Let $m$ be even. If some $x$ satisfied $\ell(sxt)=\ell(x)$ and $\ell(sx)=\ell(xt)$, then $sx=xt$ by [F2], so $s=xtx^{-1}$ is conjugate to $t$; but for $m$ even the odd-edge graph on $S=\{s,t\}$ has no edge, so $s$ and $t$ are not conjugate by [F1]. Hence no $x$ realizes configurations (v) or (vi) of 1.1, and only the configurations (i)-(iv) occur, in which the expansions agree identically for arbitrary $u_s,u_t$; therefore $P_sQ_t=Q_tP_s$ in the two-parameter algebra, and by [F4] the standard basis theorem applies there with independent parameters $u\ne w$. [F1, F2, F4, step 1.1]

3.1 By 2.1 the parameter difference is forced within the odd component $\{s,t\}$: commutation of the length operators requires $u_s=u_t$, equivalently the two quadratic relations coincide, and over an integral domain these are the assignments $v_t=v_s$ or $v_t=-v_s^{-1}$. The first is class-constant, as in [F1]; the second has the same quadratic relation and hence the same length operators as the first. By 2.2, when $s$ and $t$ lie in different odd components the parameter difference is free and the standard basis exists for any independent units. This is precisely the rank-two content of the parameter rule [F1], and no choice is used: all expansions are computed from the explicit length clauses, and the two equations solved above are quadratic identities in units. [F1, step 2.1, step 2.2, algebra] ∎
