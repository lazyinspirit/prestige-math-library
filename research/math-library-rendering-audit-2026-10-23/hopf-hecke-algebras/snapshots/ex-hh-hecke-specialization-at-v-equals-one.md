---
id: ex-hh-hecke-specialization-at-v-equals-one
kind: example
title: "Specialization of the generic Hecke algebra to the group ring"
status: published
origin: pipeline
pipeline_run: frontier-42-coxeter-32
dependency_level: 8
deps: [def-hh-universal-coxeter-hecke-parameters-and-presentation, thm-hh-generic-coxeter-hecke-standard-basis, lem-hh-hecke-anti-involution-bar-and-normalization, lem-hh-universal-presentations-and-base-change, lem-hh-free-associative-ring-and-relations-descent, lem-hh-finite-polynomial-and-localization-constructions, def-group-ring, thm-group-ring-is-a-unital-algebra-with-basis-g, def-hh-coxeter-matrix-word-group-and-length]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Meinolf Geck, Modular Representations of Hecke Algebras (EPFL course notes, arXiv:math/0511548v2)"
      url: "https://arxiv.org/pdf/math/0511548"
      locator: "Section 4.1, printed p. 15: the specialization H_{k,xi} = k (x)_A H and the rule by which the parameters specialize"
    - title: "Anders Bjorner and Francesco Brenti, Combinatorics of Coxeter Groups, Springer GTM 231 (2005), complete book PDF"
      url: "https://sites.math.washington.edu/~billey/classes/reflection.groups/references/EntireBook.pdf"
      locator: "Section 6.1, printed p. 174: the remark that at q^{1/2}=1 the Hecke algebra specializes to the group algebra Z[W]"
    - title: "George Lusztig, Lectures on Hecke Algebras with Unequal Parameters (MIT Fall 1999 lecture notes, arXiv:math/0108172v1)"
      url: "https://arxiv.org/pdf/math/0108172"
      locator: "Section 3.2, PDF p. 8: the relation (T_s-v_s)(T_s+v_s^{-1})=0 whose specialization at v_s=1 is T_s^2=1"
verification:
  audited: "2026-10-08"
  precheck: pass
---

## Example

Let $(S,m)$, $W$, $R$, $v_s$, $H$, $T_s$ be as in [[def-hh-universal-coxeter-hecke-parameters-and-presentation]] and let $A$ be a commutative ring with units $u_s\in A^\times$ constant on the classes $[s]$, inducing $\varphi:R\to A$ with $v_s\mapsto u_s$ ([[lem-hh-finite-polynomial-and-localization-constructions]], part 2). Write $H_A:=A\otimes_RH$ for the specialization.

1. **The specialization at $u_s=1$.** If $u_s=1$ for all $s$, then there is an isomorphism of $A$-algebras
$$H_A\longrightarrow A[W],\qquad T_s\longmapsto s,\qquad T_w\longmapsto w,$$
where $A[W]$ is the group ring ([[def-group-ring]]); it is an isomorphism of free $A$-modules on the specialized standard basis $\{1\otimes T_w\}$ and the group basis $\{w\}$ ([[thm-hh-generic-coxeter-hecke-standard-basis]], part 4).

2. **Why the relation specializes.** In $A[W]$ one has $s^2=1$, so the specialized quadratic relation $(s-1)(s+1)=s^2-1=0$ holds, and the braid relations are the defining relations of $W$; conversely, sending $T_s\mapsto s$ kills the specialized relations, so it factors through $H_A$ by the universal property. This is the case $Q=1$ of the normalization $(S_s-Q_s)(S_s+1)=0$ of [[lem-hh-hecke-anti-involution-bar-and-normalization]], part 4.

3. **Other specializations.** For arbitrary units $u_s$ the specialization is still free with basis $(1\otimes T_w)$ ([[thm-hh-generic-coxeter-hecke-standard-basis]], part 4), but the quadratic relation reads $T_s^2=(u_s-u_s^{-1})T_s+1$, so $T_s\mapsto s$ is an algebra map only when $u_s^2=1$ in $A$, i.e. $u_s-u_s^{-1}=0$ (over a field this means $u_s=\pm1$); in particular $v\mapsto1$ and $v\mapsto-1$ both give the group ring, since $u-u^{-1}=0$ in either case. Applications: the specialization $v=1$ is the bridge from this generic algebra to the type-$A$ principal-series page `principal-series-representations-of-gl-n-over-a-finite-field` and to the Hecke-Markov trace page `hecke-markov-traces-and-polynomial-link-invariants`, both of which work in the multiplicative normalization of [[lem-hh-hecke-anti-involution-bar-and-normalization]].

## Facts & Assumptions

**Given:** A finite Coxeter matrix $(S,m)$, the group $W$, the parameters $R$, $v_s$, the algebra $H$ with standard basis $\{T_w\}$, a commutative ring $A$ with units $u_s$ and the induced homomorphism $\varphi:R\to A$.

[F1] $H$ is the quotient of the free associative $R$-algebra on $(T_s)_{s\in S}$ by the relations (Q) and (B), and for every unital associative $R$-algebra $B$ and every family $(t_s)$ in $B$ satisfying (Q) and (B) there is a unique unital $R$-algebra homomorphism $H\to B$ with $T_s\mapsto t_s$; the images of the $T_s$, together with the coefficient image of $R$, generate $H$ as a ring. ([[def-hh-universal-coxeter-hecke-parameters-and-presentation]])

[F2] $\{T_w:w\in W\}$ is an $R$-basis of $H$, and for every ring homomorphism $R\to R'$ the scalar extension $R'\otimes_RH$ is free with basis $(1\otimes T_w)_{w\in W}$; there is no flatness or torsion hypothesis. ([[thm-hh-generic-coxeter-hecke-standard-basis]])

[F3] Each $T_s$ is a unit, $T_s=v_s^{-1}S_s$ with $S_s=v_sT_s$, and $(S_s-Q_s)(S_s+1)=0$ with $Q_s=v_s^2$. ([[lem-hh-hecke-anti-involution-bar-and-normalization]])

[F4] The scalar extension of a presented algebra is presented by the images of the relations: $R'\otimes_R(R\langle X\rangle/I)\cong(R'\otimes_RR\langle X\rangle)/\operatorname{im}(R'\otimes_RI)$, with no flatness or freeness of $R'$ over $R$; the scalar extension of a free module with basis $(a_i)$ is free with basis $(1\otimes a_i)$. ([[lem-hh-universal-presentations-and-base-change]])

[F5] Applying the Laurent universal property over $\mathbb Z$, a choice of units $u_1,\dots,u_c$ in the commutative $\mathbb Z$-algebra $A$ extends uniquely to a $\mathbb Z$-algebra homomorphism $\varphi:R=\Lambda_{\mathbb Z,c}\to A$ with $v_i\mapsto u_i$; equivalently, $\varphi(v_s)=u_s$ when the units $u_s$ are constant on the classes $[s]$. ([[lem-hh-finite-polynomial-and-localization-constructions]], part 2)

[F6] The group ring $A[W]$ carries a unique multiplication with $[w][w']=[ww']$, making it a unital $A$-algebra with $A$-basis $\{[w]:w\in W\}$ whose identity is $[1]$ and whose every basis element $[w]$ is a unit with inverse $[w^{-1}]$. ([[thm-group-ring-is-a-unital-algebra-with-basis-g]], [[def-group-ring]])

[F7] $W$ is presented by the generators $s\in S$ and the relators $s^2$ and $(st)^{m(s,t)}$ ($s\ne t$, $m(s,t)<\infty$); a map from $S$ into a group that kills every relator extends uniquely to a group homomorphism $W\to G$. ([[def-hh-coxeter-matrix-word-group-and-length]])

[F8] For a commutative ring $A$ and a set $X$, the free associative $A$-algebra $A\langle X\rangle$ has the universal property that every map $X\to B$ into a unital $A$-algebra $B$ extends uniquely to a unital $A$-algebra homomorphism $A\langle X\rangle\to B$; and a unital $A$-algebra homomorphism out of $A\langle X\rangle$ that kills a set $E\subseteq A\langle X\rangle$ factors uniquely through the quotient $A\langle X\rangle/(E)$, the presented $A$-algebra with generators $X$ and relations $E$. ([[lem-hh-free-associative-ring-and-relations-descent]])

## Verification

**Proof technique:** direct.

1.1 By [F4] the specialization $H_A=A\otimes_RH$ is the quotient of the free associative $A$-algebra on $(T_s)_{s\in S}$ by the images under $\varphi$ of the relations (Q) and (B) of [F1]. When $u_s=1$ for all $s$, those images are $T_s^2-1$ and the braid relations. The assignment $T_s\mapsto s$ extends uniquely to a unital $A$-algebra homomorphism from the free algebra to $A[W]$ ([F8], first assertion); it kills $T_s^2-1$ because $s^2=1$ in $W$, and it kills each braid relation because the defining relator $(st)^{m(s,t)}=1$ holds in $W$ ([F7]). By the quotient universal property ([F8], second assertion) it therefore factors uniquely through $H_A$, giving a unital $A$-algebra homomorphism $\Phi:H_A\to A[W]$ with $\Phi(T_s)=s$. [F1, F4, F6, F7, F8]

1.2 Conversely, in $H_A$ the images of the relations give $T_s^2=1$ (the image of (Q) at $u_s=1$) and the braid relations, and each $T_s$ is a unit ([F3]). For $s\ne t$ with $m:=m(s,t)<\infty$ put $a:=T_s$, $b:=T_t$ and $x:=ab$; then $a^2=b^2=1$, so $x^{-1}=ba$ and $x^{-k}=(ba)^k$ for every $k\ge0$. The braid relation says that the two alternating products of $m$ factors coincide: if $m=2k$ it reads $x^k=x^{-k}$, whence $x^{2k}=1$, while if $m=2k+1$ it reads $x^ka=x^{-k}b$, and multiplying on the right by $b=b^{-1}$ gives $x^{k+1}=x^{-k}$, whence $x^{2k+1}=1$. Thus $(T_sT_t)^{m(s,t)}=x^m=1$; with $T_s^2=1$ this shows that the assignment $s\mapsto T_s$ kills every defining relator of $W$ ([F7]), so it extends to a group homomorphism $\varphi:W\to H_A^\times$ with $\varphi(w)=T_w$ for every $w\in W$ (the product along a reduced expression). Since $([w])_{w\in W}$ is an $A$-basis of $A[W]$ and $[w][w']=[ww']$ ([F6]), the formula $\Psi\bigl(\sum_wa_w[w]\bigr):=\sum_wa_w\varphi(w)$ defines a unital $A$-algebra homomorphism $\Psi:A[W]\to H_A$ with $\Psi(w)=T_w$: it is $A$-linear by construction, multiplicativity reduces on basis elements to $\varphi(ww')=\varphi(w)\varphi(w')$, and $\Psi([1])=\varphi(1)=1$. [F3, F4, F6, F7]

2.1 The two maps are mutually inverse: $\Phi(\Psi(s))=\Phi(T_s)=s$ for every $s\in S$ and $\Psi(\Phi(T_s))=\Psi(s)=T_s$, and both composites fix $A$ because the maps are $A$-linear; they fix every $T_w$ since each is a product of the $T_s$, and every group basis element $w$ since each is a product of the generators $s$. The $A$-bases ([F2], [F6]) therefore make the composites the respective identities. Hence $\Phi$ is an isomorphism of $A$-algebras. On bases, $\Phi(T_w)=s_1\cdots s_k=w$ for a reduced expression $w=s_1\cdots s_k$ by multiplicativity, so $\Phi$ carries the $A$-basis $(1\otimes T_w)$ of $H_A$ ([F2]) to the $A$-basis $(w)$ of $A[W]$ ([F6]) and is an isomorphism of free $A$-modules. [F1, F2, F6, step 1.1, step 1.2]

2.2 For arbitrary units $u_s$, the image of (Q) under $\varphi$ reads $T_s^2-(u_s-u_s^{-1})T_s-1=0$ in $H_A$ ([F4]), and $H_A$ is free with basis $(1\otimes T_w)$ ([F2]). If an $A$-algebra homomorphism $H_A\to A[W]$ with $T_s\mapsto s$ existed, applying it to that relation would give $0=s^2-(u_s-u_s^{-1})s-1=-(u_s-u_s^{-1})s$ in $A[W]$; since the elements $w$ form an $A$-basis of $A[W]$ ([F6]), this forces $u_s-u_s^{-1}=0$, i.e. $u_s^2=1$, and over a field $u_s=\pm1$. Conversely, if every $u_s^2=1$, all specialized quadratics are $T_s^2-1$, so the constructions of 1.1–2.1 apply and give the same basis-preserving isomorphism $H_A\cong A[W]$. Consequently, when $R=\mathbb Z[v^{\pm1}]$ is the one-component coefficient ring, the specializations $v\mapsto1$ and $v\mapsto-1$ both satisfy $u-u^{-1}=0$; for $u=\pm1$ the image of (Q) is $T_s^2-1$ in either case, so the construction of 1.1-2.1 applies verbatim and both give the group ring, whereas any specialization to a unit with $u_s^2\ne1$ admits no such map $T_s\mapsto s$: the standard basis $(1\otimes T_w)$ still exists by [F2] but the quadratic relation is not the group relation. [F2, F4, F6, step 1.1]

3.1 Assembly: part 1 is steps 1.1, 1.2 and 2.1, the specialization mechanism of part 2 is steps 1.1 and 2.2 (the case $Q_s=1$ of the normalization [F3]), and part 3 is step 2.2 together with the base-change freeness of [F2]. No choice is used: the coefficient homomorphism is unique by [F5], both maps are defined on explicit generators, and no selection occurs. The two application pages named in the statement are reading pointers only; no item of this pair depends on them. [F2, F3, F5, step 1.1, step 1.2, step 2.1, step 2.2] ∎
