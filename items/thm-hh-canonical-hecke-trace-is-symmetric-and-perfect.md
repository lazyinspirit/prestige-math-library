---
id: thm-hh-canonical-hecke-trace-is-symmetric-and-perfect
kind: theorem
title: "The canonical Hecke trace is symmetric and perfect"
status: draft
origin: pipeline
pipeline_run: hopf-hecke-unfinished-15-2026-10-15
dependency_level: 1
deps: [def-hh-canonical-hecke-trace-and-symmetrizing-form, def-hh-universal-coxeter-hecke-parameters-and-presentation, lem-hh-commuting-left-right-hecke-length-operators, thm-hh-generic-coxeter-hecke-standard-basis]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Meinolf Geck, Modular Representations of Hecke Algebras (EPFL lecture notes, arXiv:math/0511548v2)"
      url: "https://arxiv.org/pdf/math/0511548"
      locator: "Section 2, printed pp. 6-7: the coefficient-at-identity trace, the formula tau(T_w T_w')=pi(w) when w'=w^{-1}, and the resulting perfect symmetric pairing"
    - title: "George Lusztig, Hecke Algebras with Unequal Parameters (revised book text, arXiv:math/0208154v2)"
      url: "https://arxiv.org/pdf/math/0208154"
      locator: "§3.3, printed pp. 22-24: Proposition 3.3 and the complete regular-module operator proof of the standard basis, including the six length cases"
    - title: "Andrew Mathas, Iwahori-Hecke Algebras and Schur Algebras of the Symmetric Group (self-contained notes, 1998; complete 79-page text)"
      url: "https://web.math.ucsb.edu/~bigelow/books/mathas.pdf"
      locator: "Chapter 1, §2, printed pp. 4-5: the coefficient-of-identity form and Proposition 1.14 for type A"
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
---

## Statement

Let $(S,m)$, $W$, $R$, $H$, the standard basis $\{T_w:w\in W\}$, and the trace $\tau$ be as in [[def-hh-universal-coxeter-hecke-parameters-and-presentation]], [[thm-hh-generic-coxeter-hecke-standard-basis]], and [[def-hh-canonical-hecke-trace-and-symmetrizing-form]]. Assume $W$ is finite. On the finite free $R$-module $E=\bigoplus_{w\in W}Re_w$, define the coordinate pairing by $\langle e_x,e_y\rangle=\delta_{x,y}$ and extend $R$-bilinearly. For an endomorphism $A$ with $A(e_x)=\sum_y a_{y,x}e_y$, define its coordinate transpose by $A^t(e_y)=\sum_xa_{y,x}e_x$, so $\langle Au,v\rangle=\langle u,A^tv\rangle$. Let $P_s$ be the left length operator of [[lem-hh-commuting-left-right-hecke-length-operators]].

For all $x,y\in W$,
$$
\tau(T_xT_y)=\delta_{x^{-1},y}.
$$
Consequently $\tau(ab)=\tau(ba)$ for all $a,b\in H$, and the map $H\to\operatorname{Hom}_R(H,R)$, $a\mapsto[b\mapsto\tau(ab)]$, is an isomorphism. The basis dual to $\{T_w:w\in W\}$ for this pairing is $\{T_{w^{-1}}:w\in W\}$; it is the standard basis indexed by inverses, not the algebra-inverse family $\{T_w^{-1}\}$.

For every unital homomorphism of commutative rings $\phi:R\to R'$, the induced canonical trace on $R'\otimes_RH$ has the same basis-pair formula and is again symmetric and perfect. No semisimplicity, field, or nondegeneracy hypothesis is required.

## Facts & Assumptions

**Given:** A finite Coxeter system $(W,S)$, its generic Hecke algebra $H$ over $R$, its standard basis, the finite-rank regular module $E$, and the coefficient-at-identity functional $\tau$.

[F1] For $s\in S$, $P_s(e_w)=e_{sw}$ if $\ell(sw)=\ell(w)+1$, and $P_s(e_w)=e_{sw}+(v_s-v_s^{-1})e_w$ if $\ell(sw)=\ell(w)-1$. ([[lem-hh-commuting-left-right-hecke-length-operators]])

[F2] For every reduced expression $w=s_1\cdots s_k$, $P_{s_1}\cdots P_{s_k}(e_1)=e_w$. ([[lem-hh-commuting-left-right-hecke-length-operators]])

[F3] The standard-basis representation $\rho:H\to\operatorname{End}_R(E)$ satisfies $\rho(T_w)=P_w$ and $\rho(T_w)(e_1)=e_w$; the standard elements remain a basis after every commutative base change of $R$. ([[thm-hh-generic-coxeter-hecke-standard-basis]])

[F4] For finite $W$, if $h=\sum_{w\in W}r_wT_w$, then $\tau(h)=r_1$. ([[def-hh-canonical-hecke-trace-and-symmetrizing-form]])

## Proof

**Given:** The data of the Statement.

1.1 Fix $s\in S$. The involution $w\mapsto sw$ has no fixed point because [F1] gives $\ell(sw)=\ell(w)\pm1$. It partitions $W$ into pairs; in each pair let $w_-$ be the unique shorter element and write the other element as $sw_-$. Put $a_s=v_s-v_s^{-1}$. Then $P_s(e_{w_-})=e_{sw_-}$ and $P_s(e_{sw_-})=e_{w_-}+a_se_{sw_-}$. Relative to the ordered pair $(e_{w_-},e_{sw_-})$, its matrix is $\begin{pmatrix}0&1\\1&a_s\end{pmatrix}$, which is symmetric. Distinct pairs are preserved, so $\langle P_su,v\rangle=\langle u,P_sv\rangle$ for every $u,v\in E$: each $P_s$ is self-adjoint for the coordinate pairing. [given, F1, algebra]

2.1 If $x=s_1\cdots s_k$ is reduced, then its reversed word $s_k\cdots s_1$ represents $x^{-1}$ and is reduced: otherwise its inverse word would give a shorter expression for $x$. Thus $P_x=P_{s_1}\cdots P_{s_k}$ and, since each factor is self-adjoint, its adjoint is $P_x^t=P_{s_k}\cdots P_{s_1}=P_{x^{-1}}$. By [F2], $P_{x^{-1}}e_1=e_{x^{-1}}$ and $P_ye_1=e_y$. [F1, F2, step 1.1, algebra]

3.1 Write $T_xT_y=\sum_{w\in W}r_wT_w$. Since the representation $\rho$ in [F3] is an algebra homomorphism, applying $\rho(T_xT_y)$ to $e_1$ gives $P_xP_y e_1=\sum_wr_wP_w e_1=\sum_wr_we_w$. Thus [F4] and the coordinate pairing show that the coefficient of $T_1$ is $\langle e_1,P_xP_y e_1\rangle$. Move $P_x$ across the pairing using step 2.1 to obtain
$$
\tau(T_xT_y)=\langle P_{x^{-1}}e_1,P_ye_1\rangle=\langle e_{x^{-1}},e_y\rangle=\delta_{x^{-1},y}.
$$
This proves the basis-pair formula. [F2, F3, F4, step 2.1]

4.1 Since $\delta_{x^{-1},y}=\delta_{y^{-1},x}$, the formula of step 3.1 is symmetric on basis pairs; $R$-bilinearity gives $\tau(ab)=\tau(ba)$ for all $a,b$. For each $z\in W$ define the coordinate functional $\lambda_z(\sum_w r_wT_w):=r_z$. Every $R$-linear functional $f:H\to R$ has the unique expansion $f=\sum_{z\in W}f(T_z)\lambda_z$, so $\{\lambda_z\}$ is a basis of $\operatorname{Hom}_R(H,R)$. Step 3.1 gives $[b\mapsto\tau(T_xb)]=\lambda_{x^{-1}}$, hence the pairing map sends a basis bijectively to the dual basis and is an isomorphism. Also $\tau(T_xT_{y^{-1}})=\delta_{x,y}$, proving the stated dual-basis description. [given, step 3.1, algebra]

5.1 After any unital ring map $\phi:R\to R'$, [F3] gives the specialized basis $\{1\otimes T_w:w\in W\}$. Its canonical trace has the same coefficient formula, so the calculation of step 3.1 gives the same permutation Gram matrix over $R'$. The coordinate functionals for this finite basis again form a basis of the $R'$-dual by the explicit coordinate argument of step 4.1; therefore the specialized trace is symmetric and perfect. All constructions use the already indexed basis and finite coordinate formulas, so no choice or semisimplicity is used. [F3, step 3.1, step 4.1] ∎
