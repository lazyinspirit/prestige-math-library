---
id: lem-cyclotomic-semistandard-sums-give-schur-endomorphism-basis
kind: lemma
title: "Cyclotomic semistandard sums give the actual Schur endomorphism basis"
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 20
deps: [def-arbitrary-level-cyclotomic-hecke-murphy-cell-and-schur-modules,
       thm-arbitrary-level-cyclotomic-hecke-murphy-basis-is-cellular,
       lem-cyclotomic-semistandard-row-type-sums-give-permutation-module-bases,
       lem-universal-cyclotomic-hecke-canonical-trace-is-perfect-and-symmetric,
       def-cellular-algebra-basis-and-cell-module]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "Mathas, The representation theory of the Ariki–Koike and cyclotomic q-Schur algebras, math/0204025"
      url: "https://arxiv.org/pdf/math/0204025"
      locator: "PDF pp. 16–19, 27–37: arbitrary-level element conventions and contracts; full local arguments in these registration drafts replace the review sketches."
    - title: "Mathas, Hecke algebras and Schur algebras of the symmetric group, complete 79-page manuscript"
      url: "https://web.math.ucsb.edu/~bigelow/books/mathas.pdf"
      locator: "Ordinary finite type A only; Garnir/Murphy printed pp. 18–25 and ordinary semistandard/Specht/Schur PDF pp. 45–50 were actually read; no arbitrary-level DJM proof read claimed."
    - title: "Lyle–Mathas, Blocks of cyclotomic Hecke algebras, math/0607451v4"
      url: "https://arxiv.org/pdf/math/0607451v4"
      locator: "Section 2.1–2.3 exact multipartition-summand Schur variant and deformation; no external proof fallback."
---

## Statement

For $H_n$, the summands $M_\lambda=m_\lambda H_n$, the direct sum
$M=\bigoplus_\lambda M_\lambda$ and the multipartition-summand algebra
$C_n=\operatorname{End}_{H_n}(M)$ of
[[def-arbitrary-level-cyclotomic-hecke-murphy-cell-and-schur-modules]],
evaluation $f\mapsto f(m_\nu)$ identifies
$$\operatorname{Hom}_{H_n}(M_\nu,M_\mu)\cong M_\mu\cap H_nm_\nu,$$
with $R$-basis the rectangular sums $m_{(S,T)}$ over $S$ semistandard of
shape $\lambda$ and type $\mu$ and $T$ semistandard of shape $\lambda$ and
type $\nu$. Consequently the maps $\varphi_{ST}$ are actual well-defined
endomorphisms of $M$ and form a free dominance-cellular basis of $C_n$ with
$\varphi_{ST}^*=\varphi_{TS}$ and
$$\varphi_{ST}\varphi\equiv\sum_W r_{(T,W)}(\varphi)\,\varphi_{SW}\pmod{C_n^{\rhd\lambda}}$$
with coefficients independent of $S$. The formation of this basis and its
constants specializes to every commutative unit-parameter base, including the
LM deformation DVR. The proof uses the perfect symmetric canonical trace
([[lem-universal-cyclotomic-hecke-canonical-trace-is-perfect-and-symmetric]])
and the codomain direct-summand pivots
([[lem-cyclotomic-semistandard-row-type-sums-give-permutation-module-bases]]);
no field-only double-annihilator and no nonsaturated-lattice argument is used.

## Facts & Assumptions

**Given:** The Data of [F1], the cellular Murphy basis [F2], the permutation module basis [F3], the canonical trace [F4], and the cellular-algebra definition [F5].

[F1] $H_n$, the submodules $M_\lambda=m_\lambda H_n$, the Murphy elements $m_{st}$, the elements $m_{(S,t)}$ and $m_{(S,T)}$, the direct sum $M=\bigoplus_\lambda M_\lambda$ and $C_n=\operatorname{End}_{H_n}(M)$, the presentation involution $*$, and the definition of $\varphi_{ST}$ as the map sending $m_\alpha h$ to $\delta_{\alpha,\nu}m_{(S,T)}h$ ([[def-arbitrary-level-cyclotomic-hecke-murphy-cell-and-schur-modules]]).

[F2] The $m_{st}$ are an $R$-basis of $H_n$ with $m_{st}h\equiv\sum_vr_{(t,v)}(h)m_{sv}\pmod{H^{>\lambda}}$, coefficients independent of $s$; the higher spans are two-sided ideals, and the basis and law specialize to every commutative unit-parameter base ([[thm-arbitrary-level-cyclotomic-hecke-murphy-basis-is-cellular]]).

[F3] $M_\mu=m_\mu H_n$ has $R$-basis the sums $m_{(S,t)}=\sum_{s:\mu(s)=S}m_{st}$ over semistandard $S$ of shape $\lambda$ and type $\mu$ and standard $t$, with disjoint coefficient-$1$ Murphy pivots, and is a direct summand of the codomain $H_n$ ([[lem-cyclotomic-semistandard-row-type-sums-give-permutation-module-bases]]).

[F4] The canonical coefficient trace $\tau$ satisfies $\tau(ab)=\tau(ba)$ and makes $(a,b)\mapsto\tau(ab)$ a perfect associative $R$-bilinear pairing, over the universal ring and after every commutative unit-parameter base change ([[lem-universal-cyclotomic-hecke-canonical-trace-is-perfect-and-symmetric]]).

[F5] A cellular basis $\{c^\lambda_{st}\}$ of an $R$-algebra $A$ requires an involutory anti-automorphism $i$ with $i(c^\lambda_{st})=c^\lambda_{ts}$ and the triangular multiplication $c^\lambda_{st}a\equiv\sum_vr_vc^\lambda_{sv}\pmod{A^{\rhd\lambda}}$ with $r_v$ independent of $s$ ([[def-cellular-algebra-basis-and-cell-module]]).

## Proof

**Proof technique:** direct.

**Given:** The data and suppliers of [F1]–[F5], over the universal Laurent

parameter ring.

1.1 Annihilator lemma. Let $m\in H_n$ be such that $mH_n$ is a direct summand of the codomain $H_n$, put $K=\operatorname{rAnn}(m)=\{a:ma=0\}$ and let $L_m(a)=ma$. The functional $f$ on $H_n$ vanishes on $K$ exactly when $f=g\circ L_m$ for some functional $g$ on $H_n$: one direction is immediate, and for the other $f$ descends to the split quotient $H_n/K\cong mH_n$ and extends to $H_n$ by zero on a complementary summand. Hence, for $x$ with $\tau(xk)=0$ for all $k\in K$, the functional $a\mapsto\tau(xa)$ vanishes on $K$, so $\tau(xa)=g(ma)=\tau(y\,ma)$ for the element $y$ representing $g$ under the perfect pairing [F4], and $\tau((x-ym)a)=0$ for all $a$, so $x=ym\in H_nm$. Since $K$ is a right ideal, the converse also holds: if $x=ym$ then $\tau(xk)=\tau(y\,mk)=0$ for $k\in K$, and if $\tau(xk)=0$ for all $k\in K$ then $\tau((xk)a)=0$ for all $a$ because $ka\in K$, so perfectness gives $xk=0$. Therefore $\operatorname{lAnn}(\operatorname{rAnn}(m))=H_nm$. [F3, F4, algebra]

2.1 Evaluation is a bijection onto the intersection. The cyclic module $M_\nu=m_\nu H_n$ [F1] makes evaluation $f\mapsto f(m_\nu)$ injective on $\operatorname{Hom}_{H_n}(M_\nu,M_\mu)$, since $f(m_\nu a)=f(m_\nu)a$. Its image is exactly $\{x\in m_\mu H_n:xK=0\}$ with $K=\operatorname{rAnn}(m_\nu)$: the inverse sends such an $x$ to the well-defined map $m_\nu a\mapsto xa$, which is a right $H_n$-map, and well-definedness is precisely $xK=0$. By step 1.1 with $m=m_\nu$ — whose image is a codomain direct summand by [F3] — this image is $m_\mu H_n\cap H_nm_\nu$, so $\operatorname{Hom}_{H_n}(M_\nu,M_\mu)\cong M_\mu\cap H_nm_\nu$. [F1, F3, step 1.1, algebra]

3.1 The intersection basis. By [F3] the module $M_\mu$ has basis $m_{(S,t)}$ over semistandard $S$ of type $\mu$ and standard $t$, whose Murphy coordinates are constant on each admissible left fibre and zero off them ([F2]); applying the involution $*$ to the basis of $M_\nu$ gives a basis of $H_nm_\nu$ of the elements $m_{(s,T)}$ over semistandard $T$ of type $\nu$ and standard $s$, whose Murphy coordinates are constant on each admissible right fibre and zero off them. Hence an element of the intersection has Murphy coordinates that are zero unless the left fibre is admissible and the right fibre is admissible, and constant on each simultaneous pair of fibres. The rectangular sums $m_{(S,T)}$ have exactly these coordinate properties, with disjoint coefficient-$1$ pivots at the pairs $(s_0,T_0)$ of pivot refinements, and conversely every such coordinate family is the corresponding $R$-linear combination. Therefore the $m_{(S,T)}$ are an $R$-basis of $M_\mu\cap H_nm_\nu$. [F2, F3, step 2.1, algebra]

4.1 The endomorphism basis. For $S,T$ of common shape $\lambda$ and types $\mu,\nu$, formula $\varphi_{ST}(m_\alpha h)=\delta_{\alpha,\nu}m_{(S,T)}h$ is well-defined: the right side depends on $m_\alpha h\in M_\alpha$ only through $h$ modulo $\operatorname{rAnn}(m_\alpha)$, and for $\alpha\ne\nu$ the map is defined to be zero, while for $\alpha=\nu$ well-definedness is exactly the coordinate property of step 3.1; multiplicativity in $h$ makes each $\varphi_{ST}$ an $H_n$-map, and every endomorphism of $M$ is determined by its restrictions to the finitely many cyclic summands. Evaluation on each $M_\nu$ delivers by step 2.1 the whole intersection $M_\mu\cap H_nm_\nu$, so the $\varphi_{ST}$ form an $R$-basis of $C_n=\operatorname{End}_{H_n}(M)$, finite and free. [F1, step 3.1, step 2.1, algebra]

5.1 Cellular laws. Define an $R$-linear involution on the established endomorphism basis by $\varphi_{ST}^*=\varphi_{TS}$. We verify anti-multiplicativity by evaluation; no generator-fixing star map on the right-module direct sum is assumed. If $m_{(S,T)}=m_\mu h_{ST}$ then $m_{(T,S)}=h_{ST}^*m_\mu$, and for a composable pair with $\operatorname{type}(T)=\operatorname{type}(U)$ the star of the evaluated product $m_{(S,T)}h_{UV}$ is $h_{UV}^*m_{(T,S)}=m_{(V,U)}h_{TS}$, while for non-composable types both products vanish; evaluation injectivity (step 4.1) gives $(\varphi_{ST}\varphi_{UV})^*=\varphi_{VU}\varphi_{TS}$, hence $\varphi_{ST}^*=\varphi_{TS}$. For the multiplication rule, evaluate $\varphi_{ST}\varphi_{UV}$ at the cyclic generator $m_{\operatorname{type}(V)}$ in its source summand: it is $m_{(S,T)}h_{UV}$ when $\operatorname{type}(U)=\operatorname{type}(T)$ and zero otherwise. The Murphy cell law [F2] expands this same-shape part as $\sum_{s\in\text{fibre }S}\sum_vb_{(T,v)}(h_{UV})m_{sv}$ with $b_{(T,v)}=\sum_{t\in\text{fibre }T}r_{(t,v)}(h_{UV})$ independent of $s$ and $S$; because the product is an actual $H_n$-map and step 3.1 groups $v$ into its semistandard fibres, the coefficients are constant on each right fibre, so the coefficient of $\varphi_{SW}$ depends on $T,W$ and the multiplier only, and all remaining terms have strictly higher shape. Thus the datum $\{\varphi_{ST}\}$ with the dominance poset on shapes satisfies [F5]: it is a free dominance-cellular basis of $C_n$. [F1, F2, F5, step 4.1, algebra]

6.1 Specialization. Every step above is an identity of coefficients in the universal Laurent ring with denominators inverted only when they are units: the trace, the annihilator computation, the two one-sided bases, the intersection basis, and the structure constants all live over the universal ring and involve no field, dimension count, rationalization, or generic flatness. Hence applying any commutative base change in which the parameters are units — including the LM deformation DVR and arbitrary fields — preserves the well-definedness, the basis, the transpose rule, and the cellular multiplication constants. [F2, F4, step 5.1, algebra] ∎

## Remarks

The lemma closes the well-definedness obligation of the definition of $C_n$ and of the maps $\varphi_{ST}$: the double-annihilator identity is derived from the perfect canonical trace together with the codomain direct-summand property of $m_\nu H_n$, and the intersection basis is derived from the one-sided semistandard bases, so no field-only double-annihilator or nonsaturated-lattice argument is used. The intersection basis groups the two admissible Murphy coordinate fibres independently. No choice principle is used: all bases and coset sums are finite.
