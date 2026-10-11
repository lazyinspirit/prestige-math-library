---
id: lem-kostant-adjoint-isotypic-multiplicities-have-zero-weight-rank
kind: lemma
title: Adjoint isotypic modules have the zero-weight rank
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 0
deps: [thm-kostant-harmonic-decomposition-of-the-symmetric-algebra,
       thm-enveloping-algebra-is-free-over-its-center,
       thm-weyls-complete-reducibility-theorem,
       thm-weyl-character-formula,
       thm-symmetric-invariants-restrict-to-weyl-invariants,
       lem-weyl-coinvariant-hilbert-series-has-order-w-dimension,
       thm-pbw-ordered-monomial-basis-for-the-enveloping-algebra,
       def-axiom-of-choice, thm-chevalley-shephard-todd-for-finite-weyl-groups,
       def-completed-formal-character-ring-for-downward-cones]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Pavel Etingof, Representations of Lie Groups, MIT18.757 full lecture notes (2023)"
      url: "https://ocw.mit.edu/courses/18-757-representations-of-lie-groups-fall-2023/mit18_757_f23_lec_full.pdf"
      locator: "Section 13.1, Theorem 13.1 and its complete proof (printed pp. 71-73), and Section 13.5, Theorem 13.5 (printed p. 74): the isomorphism S(g) = S(g)^g tensor H and the isotypic multiplicity dim E_0 for the adjoint action, with the torus-limit replaced locally by the explicit finite root-lattice shift coefficient argument"
---

## Statement

Assume the Axiom of Choice. Let $\mathfrak g$ be a finite-dimensional complex
semisimple Lie algebra, $S=S(\mathfrak g)$ the symmetric algebra of the adjoint
representation, $R=S^{\mathfrak g}$ its invariants, $Z=Z(U(\mathfrak g))$ the
center of the enveloping algebra, and let $\mathcal H\subseteq S$ be a Kostant
harmonic subspace, so that multiplication is an isomorphism
$R\otimes_{\mathbb C}\mathcal H\to S$ of graded $\mathfrak g$-modules with $R$
acting trivially ([[thm-kostant-harmonic-decomposition-of-the-symmetric-algebra]]).

For every finite-dimensional $\mathfrak g$-module $E$ with zero-weight space
$E_0$, the module $\operatorname{Hom}_{\mathfrak g}(E,S)$ is a free graded
$R$-module of rank $\dim E_0$, and the module
$\operatorname{Hom}_{\mathfrak g}(E,U(\mathfrak g))$ is a free $Z$-module of
rank $\dim E_0$; with the filtered lifting $U(\mathfrak g)=Z\cdot\operatorname{sym}(\mathcal H)$
of [[thm-enveloping-algebra-is-free-over-its-center]] these freenesses are
compatible with the natural quotient maps. More precisely,
$$\operatorname{Hom}_{\mathfrak g}(E,S)\cong R\otimes_{\mathbb C}\operatorname{Hom}_{\mathfrak g}(E,\mathcal H),\qquad \operatorname{Hom}_{\mathfrak g}(E,U(\mathfrak g))\cong Z\otimes_{\mathbb C}\operatorname{Hom}_{\mathfrak g}(E,\mathcal H),$$
where $\operatorname{Hom}_{\mathfrak g}(E,\mathcal H)$ is a finite-dimensional
graded vector space of dimension $\dim E_0$; consequently every central
reduction has adjoint $E$-multiplicity $\dim E_0$, and the natural map
$\operatorname{Hom}_{\mathfrak g}(E,S)\otimes_R R/R_+\to\operatorname{Hom}_{\mathfrak g}(E,S/(R_+S))$
is an isomorphism onto a space of dimension $\dim E_0$.

## Facts & Assumptions

**Given:** A finite-dimensional complex semisimple Lie algebra $\mathfrak g$, its symmetric algebra $S=S(\mathfrak g)$ with the adjoint action, $R=S^{\mathfrak g}$, the enveloping algebra $U(\mathfrak g)$ with center $Z$, a Kostant harmonic subspace $\mathcal H\subseteq S$, and a finite-dimensional $\mathfrak g$-module $E$ with zero-weight space $E_0$.

[F1] Under AC, multiplication $R\otimes_{\mathbb C}\mathcal H\to S$ is an isomorphism of graded $\mathfrak g$-modules, $R$ acting trivially, and $S_d=(R_+S)_d\oplus\mathcal H_d$ with both summands $\mathfrak g$-stable and $\mathcal H_d$ finite dimensional ([[thm-kostant-harmonic-decomposition-of-the-symmetric-algebra]], [[def-axiom-of-choice]]).

[F2] Under AC, $R=S^{\mathfrak g}$ restricts to $S(\mathfrak h)^W$, which is a polynomial algebra on homogeneous algebraically independent basic invariants of degrees $d_1,\dots,d_r$, and $\prod_i d_i=|W|$ ([[thm-symmetric-invariants-restrict-to-weyl-invariants]], [[thm-chevalley-shephard-todd-for-finite-weyl-groups]], [[lem-weyl-coinvariant-hilbert-series-has-order-w-dimension]]).

[F3] Every finite-dimensional $\mathfrak g$-module is completely reducible ([[thm-weyls-complete-reducibility-theorem]]).

[F4] For dominant integral $\lambda$ the character is $\operatorname{ch}L(\lambda)=A(\lambda+\rho)A(\rho)^{-1}$ with $A(\rho)=e^{\rho}\prod_{\alpha\in\Phi^+}(1-e^{-\alpha})$, and the formal products live in the completed character ring of [[def-completed-formal-character-ring-for-downward-cones]] ([[thm-weyl-character-formula]]).

[F5] Under AC, the symmetrization $\operatorname{sym}:S\to U(\mathfrak g)$ is a filtered $\mathfrak g$-equivariant vector-space isomorphism with associated graded the identity, and the symmetrized lifts of a homogeneous basis of $\mathcal H$ form a left and right $Z$-basis of $U(\mathfrak g)$, so $U(\mathfrak g)=Z\cdot\operatorname{sym}(\mathcal H)$ with $\operatorname{gr}Z=R$ ([[thm-enveloping-algebra-is-free-over-its-center]], [[thm-pbw-ordered-monomial-basis-for-the-enveloping-algebra]]).

## Proof

**Proof technique:** direct.

1.1 Write $C=S/(R_+S)$ for the coinvariant algebra of the adjoint action. By [F1], $S_d=(R_+S)_d\oplus\mathcal H_d$ in every degree, with both summands $\mathfrak g$-stable; hence the quotient map restricts to an isomorphism $\mathcal H\to C$ of graded $\mathfrak g$-modules, and each $\mathcal H_d$ is finite dimensional. In particular the multiplicity series $H_E(q):=\sum_{d\ge0}\dim_{\mathbb C}\operatorname{Hom}_{\mathfrak g}(E,\mathcal H_d)q^d$ has nonnegative integer coefficients. [F1]

1.2 By [F2] the ring $R$ is a polynomial algebra $\mathbb C[p_1,\dots,p_r]$ on homogeneous generators $p_i$ of degrees $d_i$, and the Hilbert series $\operatorname{Hilb}(R,q)=\prod_i(1-q^{d_i})^{-1}$ arises from the graded algebra structure of $R$ on $S$. Also $\prod_id_i=|W|$. [F2]

1.3 Since $R$ acts on $S$ by $R$-linear maps commuting with $\mathfrak g$ and acts trivially on $E$, evaluating on $E$ gives an isomorphism of graded $R$-modules $\operatorname{Hom}_{\mathfrak g}(E,S)\cong R\otimes_{\mathbb C}\operatorname{Hom}_{\mathfrak g}(E,\mathcal H)$. Indeed $R\otimes\mathcal H$ is free over $R$ on $\mathcal H$ and the adjoint action is $R$-linear, so $\operatorname{Hom}_{\mathbb C}(E,R\otimes\mathcal H)\cong R\otimes\operatorname{Hom}_{\mathbb C}(E,\mathcal H)$ as $R$-modules and taking $\mathfrak g$-invariants commutes with the graded direct sum. Consequently $\operatorname{Hom}_{\mathfrak g}(E,S)$ is a free graded $R$-module; it has finite rank exactly when $\operatorname{Hom}_{\mathfrak g}(E,\mathcal H)$ is finite dimensional, and then its rank is $\dim_{\mathbb C}\operatorname{Hom}_{\mathfrak g}(E,\mathcal H)=H_E(1)$. [F1, algebra]

1.4 The graded character of $S$ is $\operatorname{ch}S=\prod_{\alpha\in\Phi}(1-qe^{\alpha})^{-1}\cdot(1-q)^{-r}$: the weights of $\mathfrak g$ under the adjoint action are the roots $\alpha\in\Phi$ together with $0$ with multiplicity $r$, and the symmetric algebra on a finite-dimensional module with weights $\mu$ has character $\prod_\mu(1-qe^\mu)^{-1}$ in the completed character ring, the geometric series being interpreted coefficientwise in $\mathbb C[P]\lbrack\lbrack q\rbrack\rbrack$, whose coefficients have finite support. [F4, algebra]

1.5 The simple characters are orthonormal for the constant-term form $$\langle\phi,\psi\rangle=\frac1{|W|}\operatorname{CT}\bigl(\phi\,\psi^{*}\prod_{\alpha\in\Phi}(1-e^{\alpha})\bigr),\qquad \psi^{*}=\sum_\mu(\dim \psi_\mu)e^{-\mu},$$ where $\operatorname{CT}$ takes the coefficient of $e^0$: by [F4], $\prod_{\alpha\in\Phi}(1-e^{\alpha})=A(\rho)A(\rho)^{*}$, so the pairing of $\chi_E$ and $\chi_F$ equals $\frac1{|W|}\operatorname{CT}(A(E+\rho)A(F+\rho)^{*})$, and the constant term selects the pairs with $w(E+\rho)=w'(F+\rho)$; each dominant orbit has exactly $|W|$ terms and the signs multiply to $1$, so the value is $\delta_{EF}$. [F4, algebra]

1.6 Realize constant terms as matrix coefficients on $\ell^2(P)$, $P$ the weight lattice, with orthonormal basis $\delta_\mu$: identify $e^\mu$ with $\delta_{-\mu}$ and put $U_\alpha\delta_\mu=\delta_{\mu-\alpha}$, so multiplication by $e^{\alpha}$ corresponds to $U_\alpha$. For $0\le q<1$ the operators $F_\alpha(q)=(I-U_\alpha)(I-qU_\alpha)^{-1}$ are bounded and commute, and $F_{-\alpha}(q)=F_\alpha(q)^{*}$; hence $T(q)=\prod_{\alpha\in\Phi}F_\alpha(q)=\prod_{\alpha\in\Phi^+}F_\alpha(q)F_\alpha(q)^{*}$ is self-adjoint, and $\|F_\alpha(q)\|\le2$ for $q\ge\frac12$: the inverse is the norm-convergent Neumann series $\sum_{n\ge0}q^nU_\alpha^n$, and for every vector $v$, $\|(I-qU_\alpha)v\|^2-q\|(I-U_\alpha)v\|^2=(1-q)^2\|v\|^2\ge0$. Applying this inequality to $(I-qU_\alpha)^{-1}v$ gives $\|F_\alpha(q)\|\le q^{-1/2}\le2$. Moreover $(F_\alpha(q)-I)\delta_0=-(1-q)\sum_{n\ge0}q^n\delta_{-(n+1)\alpha}$ has squared norm $\frac{1-q}{1+q}\to0$, so expanding $\prod_\alpha F_\alpha(q)-I$ as a telescoping sum with one factor $F_\alpha(q)-I$ per term and all other factors bounded by $2$ gives $\|T(q)\delta_0-\delta_0\|\to0$ as $q\to1^{-}$. [F1, construct]

1.7 By [F3] each finite-dimensional $\mathcal H_d$ decomposes into isotypic components, so $\operatorname{ch}\mathcal H=\sum_E H_E(q)\chi_E$ in the completed character ring, the sum over isomorphism classes of finite-dimensional simple $\mathfrak g$-modules; both sides are formal power series whose coefficients are finite characters. [F3, F4]

2.1 Since $R$ has trivial $\mathfrak g$-action, the decomposition $S=R\otimes\mathcal H$ of [F1] tensors characters: $\operatorname{ch}S=\operatorname{Hilb}(R,q)\cdot\operatorname{ch}\mathcal H$. Combining with steps 1.2, 1.4 and 1.7, $$\operatorname{ch}\mathcal H=\prod_i[d_i]_q\cdot\prod_{\alpha\in\Phi}(1-qe^{\alpha})^{-1},\qquad [d_i]_q=1+q+\cdots+q^{d_i-1}.$$ [F1, step 1.2, step 1.4, step 1.7, algebra]

2.2 Interpreting a finitely supported character as the finite combination of shifts $\psi\mapsto\sum_\mu\psi_\mu U_\mu$ identifies the constant term of step 1.6 with a matrix coefficient: $$\operatorname{CT}\Bigl(\psi\prod_{\alpha\in\Phi}\frac{1-e^{\alpha}}{1-qe^{\alpha}}\Bigr)=\langle\psi\,T(q)\delta_0,\delta_0\rangle.$$ [step 1.6, algebra]

3.1 Applying the orthonormality of step 1.5 to the expansion 2.1 gives, for each finite-dimensional simple $E$, with $\chi_E^{*}$ as in step 1.5 and the matrix-coefficient form of step 2.2, $$H_E(q)=\prod_i[d_i]_q\cdot\frac1{|W|}\langle\chi_E^{*}T(q)\delta_0,\delta_0\rangle.$$ This identity is coefficientwise in $q$; for $|q|<1$ the finitely many Neumann series converge in operator norm, so the constant-term power series also converges to the displayed matrix coefficient. [step 1.5, step 2.1, step 2.2, algebra]

4.1 Letting $q\to1^{-}$ in step 3.1, the matrix coefficient tends to $\langle\chi_E^{*}\delta_0,\delta_0\rangle=\dim E_0$ by the second part of step 1.6, and $\prod_i[d_i]_q\to\prod_id_i=|W|$ by step 1.2; hence $\lim_{q\to1^{-}}H_E(q)=\dim E_0$. [step 1.2, step 1.6, step 3.1, algebra]

5.1 The coefficients $\dim\operatorname{Hom}_{\mathfrak g}(E,\mathcal H_d)$ of $H_E(q)$ are nonnegative integers and $H_E(q)$ is increasing for $0\le q<1$; the finite limit $\dim E_0$ of step 4.1 therefore forces $\operatorname{Hom}_{\mathfrak g}(E,\mathcal H_d)=0$ for all but finitely many $d$ and $\sum_d\dim\operatorname{Hom}_{\mathfrak g}(E,\mathcal H_d)=\dim E_0$. Hence $\operatorname{Hom}_{\mathfrak g}(E,\mathcal H)$ is finite dimensional of dimension $\dim E_0$, and by step 1.3 the module $\operatorname{Hom}_{\mathfrak g}(E,S)$ is a finitely generated graded free $R$-module of rank $\dim E_0$. [step 1.3, step 4.1, algebra]

6.1 The identification of step 1.1 gives $\operatorname{Hom}_{\mathfrak g}(E,C)\cong\operatorname{Hom}_{\mathfrak g}(E,\mathcal H)$ as graded vector spaces, so $\dim\operatorname{Hom}_{\mathfrak g}(E,C)=\dim E_0$; tensoring the isomorphism of step 1.3 with $R/R_+=\mathbb C$ and using $S\otimes_R(R/R_+)=C$ shows that $\operatorname{Hom}_{\mathfrak g}(E,S)\otimes_R(R/R_+)\to\operatorname{Hom}_{\mathfrak g}(E,C)$ is an isomorphism. This is the asserted compatibility with the natural quotient map $S\to C=S/(R_+S)$. [step 1.1, step 1.3, step 5.1]

6.2 By [F5] the symmetrization $\operatorname{sym}$ is filtered, $\mathfrak g$-equivariant with associated graded the identity, and the symmetrized lifts of a homogeneous basis of $\mathcal H$ form a $Z$-basis of $U(\mathfrak g)$; thus $U(\mathfrak g)=Z\cdot\operatorname{sym}(\mathcal H)\cong Z\otimes_{\mathbb C}\operatorname{sym}(\mathcal H)$ with $Z$ acting trivially under the adjoint action. Applying the argument of step 1.3 with $Z$ in place of $R$ and $\operatorname{sym}(\mathcal H)$ in place of $\mathcal H$ gives an isomorphism of $Z$-modules $\operatorname{Hom}_{\mathfrak g}(E,U(\mathfrak g))\cong Z\otimes_{\mathbb C}\operatorname{Hom}_{\mathfrak g}(E,\mathcal H)$; by step 5.1 this is a free $Z$-module of rank $\dim E_0$. [F5, step 1.3, step 5.1]

7.1 For every central character with kernel $\mathfrak m\subseteq Z$ the reduction satisfies $\operatorname{Hom}_{\mathfrak g}(E,U(\mathfrak g)\otimes_ZZ/\mathfrak m)\cong(Z/\mathfrak m)\otimes_{\mathbb C}\operatorname{Hom}_{\mathfrak g}(E,\mathcal H)$, of dimension $\dim E_0$ over $Z/\mathfrak m$; in the polynomial family the reductions $\operatorname{Hom}_{\mathfrak g}(E,S)\otimes_RR/\mathfrak m$ have the same rank $\dim E_0$, and the special case $\mathfrak m=R_+$, with $S\otimes_R(R/R_+)=C$, is step 6.1. Hence every central reduction has adjoint $E$-multiplicity $\dim E_0$. [step 6.1, step 6.2, algebra]

8.1 For later use we record that the argument also applies to a finite direct sum: if $E=\bigoplus_jE_j$ is a finite direct sum of finite-dimensional modules, then $E_0=\bigoplus_j(E_j)_0$ and $\operatorname{Hom}_{\mathfrak g}(E,-)\cong\bigoplus_j\operatorname{Hom}_{\mathfrak g}(E_j,-)$, so all ranks add and the conclusions hold with $\dim E_0=\sum_j\dim(E_j)_0$. The Axiom of Choice is inherited from [F1], [F2] and [F5], namely from the Kostant decomposition, the Chevalley restriction and the free-over-center theorem; the multiplicity computation itself uses only finite-dimensional linear algebra, finite sums over the finite Weyl group and single root-lattice shifts. [F1, F2, F5, step 7.1, algebra] ∎
