---
id: lem-measurable-von-neumann-algebra-fields-have-measurable-commutants-and-centers
kind: lemma
title: "Measurable fields of von Neumann algebras have measurable commutants and centers"
status: draft
origin: pipeline
pipeline_run: frontier-43-complex-representation-15
deps:
  - def-measurable-field-of-von-neumann-algebras
  - lem-measurable-gram-schmidt-and-constant-field-trivializations
  - lem-measurable-fields-of-nonempty-compact-sets-have-measurable-dense-selections
  - thm-double-commutant-theorem-for-concrete-von-neumann-algebras
  - thm-measurable-essentially-bounded-operator-fields-act-decomposably
  - thm-decomposable-operators-are-the-commutant-of-diagonal-multiplication
  - thm-continuous-preimages-of-borel-sets-are-borel
  - def-standard-borel-space
  - def-measurable-and-decomposable-operator-fields
  - lem-borel-relations-admit-conull-borel-uniformizations
  - def-strong-and-weak-operator-topologies
  - thm-tychonoff
  - thm-riesz-representation-for-hilbert-space
  - thm-heine-borel-rn
  - lem-closed-subset-of-a-compact-space-is-compact
  - def-direct-integral-of-a-measurable-hilbert-field
  - def-measurable-hilbert-field-from-a-countable-fundamental-family
  - def-von-neumann-algebra-and-commutant
  - def-axiom-of-choice
justified_by: []
aliases: []
dependency_level: 2
axiom_use: "AC is the stated hypothesis and is inherited by the measurable-selection, uniformization, direct-integral and decomposable-field suppliers; it also supplies the fixed orthonormal bases and dense operator sequences used on the dimension strata and the countable defining sequences of the generated von Neumann algebras. The selector applications are choice-free once their measurable input and compact target are fixed, and no global selector on the base is claimed."
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "Bachir Bekka and Pierre de la Harpe, Unitary Representations of Groups, Duals, and Characters (arXiv:1912.07262v1, 16 December 2019; author-hosted complete book draft)"
      url: "https://arxiv.org/pdf/1912.07262"
      locator: "Chapter 1, §1.I: Proposition 1.I.3 (the commutant field is measurable and the direct integral is a von Neumann algebra), Theorem 1.I.6 and its proof, printed pp. 69-70. The local proof replaces the source's references to Dixmier by explicit measurable-selection and commutant arguments."
    - title: "Bruce Blackadar, Operator Algebras: Theory of C*-Algebras and von Neumann Algebras (author-hosted complete text)"
      url: "https://bruceblackadar.com/Mathematics/Cycr.pdf"
      locator: "Part III, §III.1.6.1-III.1.6.4, printed pp. 252-254: direct-integral architecture and decomposition theory. The technical measurable constructions are supplied locally; this source explicitly outlines rather than proves them."
verification:
  precheck: pass
---

## Statement

Assume the Axiom of Choice. Let $(M_x)_{x\in X}$ be a measurable field of unital von Neumann algebras on a measurable Hilbert field $(H_x)$ with countable fundamental family over a sigma-finite standard-Borel measure space $(X,\mathcal B,\mu)$, all fibres separable. Write $\mathcal M:=\int_X^\oplus M_x\,d\mu(x)$ for the direct integral. Then: (1) on a common conull Borel stratum there are WOT-dense countable measurable sections of the unit balls of $M_x$, $M_x'$ and $Z(M_x)$; in particular the commutant field $x\mapsto M_x'$ and the centre field $x\mapsto Z(M_x)=M_x\cap M_x'$ are measurable fields of von Neumann algebras; (2) $\mathcal M$ is a concrete von Neumann algebra on $\int_X^\oplus H_x\,d\mu(x)$; (3) $\mathcal M'=\int_X^\oplus M_x'\,d\mu(x)$; (4) $Z(\mathcal M)=\int_X^\oplus Z(M_x)\,d\mu(x)$; and if two measurable fields of unital von Neumann algebras have the same direct integral, then they coincide almost everywhere.

## Facts & Assumptions

**Given:** AC; a sigma-finite standard-Borel measure space $(X,\mathcal B,\mu)$; a measurable Hilbert field with countable fundamental family; a measurable field $(M_x)$ of unital von Neumann algebras with defining sequence $(T^{(k)})_{k\ge1}$; and $\mathcal M=\int_X^\oplus M_x\,d\mu(x)$.

[F1] The field $(M_x)$ is measurable when $M_x=W^*(T^{(1)}_x,T^{(2)}_x,\dots)$ for almost every $x$; its direct integral consists of the operators $\int_X^\oplus T_x\,d\mu(x)$ of essentially bounded weakly measurable fields with $T_x\in M_x$ almost everywhere, and the diagonal algebra $\mathcal D$ is contained in it ([[def-measurable-field-of-von-neumann-algebras]], [[def-direct-integral-of-a-measurable-hilbert-field]]).

[F2] A weakly measurable essentially bounded operator field induces a bounded decomposable operator, pointwise products and adjoints correspond to operator products and adjoints, and two such fields induce the same operator exactly when they agree almost everywhere; decomposable operators are exactly the operators commuting with the diagonal algebra ([[thm-measurable-essentially-bounded-operator-fields-act-decomposably]], [[thm-decomposable-operators-are-the-commutant-of-diagonal-multiplication]], [[def-measurable-and-decomposable-operator-fields]]).

[F3] On every finite or infinite dimension stratum $X_p$ of the field there are unitaries $U_x:H_x\to K_p$ onto a fixed separable Hilbert space of dimension $p$, transported matrix coefficients of weakly measurable fields are Borel, and the countable frame sections are measurable ([[lem-measurable-gram-schmidt-and-constant-field-trivializations]]).

[F4] If $g:X\times K\to[0,\infty)$ on a standard Borel sigma-finite base and a fixed compact metric $K$ with a dense sequence has measurable sections in the first variable, continuous sections in the second, and nonempty zero sets $C_x=\{k:g(x,k)=0\}$, then there are measurable $s_j:X\to K$ with $s_j(x)\in C_x$ and $\{s_j(x)\}_j$ dense in $C_x$ for every $x$ ([[lem-measurable-fields-of-nonempty-compact-sets-have-measurable-dense-selections]]).

[F5] Borel relations with nonempty vertical sections admit Borel selectors on a conull Borel set, bounded sectionwise suprema have Borel versions off a null set, and countably many such selectors and versions can be restricted to one common conull Borel set ([[lem-borel-relations-admit-conull-borel-uniformizations]]).

[F6] WOT is generated by operator matrix coefficients; on a separable carrier its bounded-ball topology is generated by the basis coefficients ([[def-strong-and-weak-operator-topologies]], [[lem-measurable-gram-schmidt-and-constant-field-trivializations]], Proof 5.1). Closed complex discs are compact by Euclidean Heine–Borel; AC supplies compactness of their products, and closed subsets of compact spaces are compact ([[thm-heine-borel-rn]], [[thm-tychonoff]], [[lem-closed-subset-of-a-compact-space-is-compact]]). AC supplies Countable Choice for Hilbert Riesz representation ([[thm-riesz-representation-for-hilbert-space]]). A concrete von Neumann algebra equals its double commutant ([[thm-double-commutant-theorem-for-concrete-von-neumann-algebras]]).

[F7] Borel sets have Borel preimages under continuous maps between standard Borel spaces, and the structure of standard Borel measure spaces and their completions is as in the cited definitions ([[thm-continuous-preimages-of-borel-sets-are-borel]], [[def-standard-borel-space]], [[def-measurable-hilbert-field-from-a-countable-fundamental-family]], [[def-von-neumann-algebra-and-commutant]], [[def-axiom-of-choice]]).

## Proof

**Proof technique:** stratumwise trivialization, a measurable zero-set selection for the commutator equations in the weak-operator unit ball, and a decomposition argument for the commutant of the direct integral.

**Given:** AC; the sigma-finite standard-Borel measure space $(X,\mathcal B,\mu)$; the measurable Hilbert field with countable fundamental family; the measurable field $(M_x)$ with defining sequence $(T^{(k)})$; and $\mathcal M=\int_X^\oplus M_x\,d\mu(x)$.

1.1 Discard a Borel null set where the defining generation identity fails. The dimension strata $X_p=\{x:\dim H_x=p\}$, $p\in\{1,2,\dots\}\cup\{\infty\}$, are Borel by [F3], their union with the zero stratum is $X$, and on the zero stratum $H_x=\{0\}$, so $M_x=M_x'=Z(M_x)=\{0\}$ and all claims are trivial; on a fixed stratum $X_p$ we may therefore use the unitaries $U_x:H_x\to K_p$ onto the fixed separable model of [F3] and the transported algebras $M_x^t:=U_xM_xU_x^*$. [F1, F3, F7]

1.2 Let $B$ be the WOT unit ball of $\mathcal B(K_p)$ with the metric $d(T,S):=\sum_{a,b}2^{-(a+b)}\min(1,|\langle(T-S)f_a,f_b\rangle|)$ attached to a fixed orthonormal basis $(f_a)$ of $K_p$; the basis-coordinate topology agrees with WOT by [F6]. To prove compactness, form the compact product of closed unit discs indexed by $(a,b)$. The displayed weighted coefficient metric induces its product topology: finitely many coordinates control each finite head, and the summable weights uniformly control the tail. In it impose $|\sum_{a,b}c_{ab}z_a\overline{w_b}|\le\|z\|\|w\|$ for all finite rational-complex coordinate vectors $z,w$. These are closed conditions, so their solution set is compact. Scalar continuity extends the inequalities to all finite complex coordinate vectors; the resulting bounded sesquilinear form extends by density to $K_p$. Riesz representation, with the first-variable-linear convention, represents it uniquely as $\langle Tz,w\rangle$ for a contraction $T$. Conversely every contraction satisfies the conditions, so this closed coordinate set is exactly $B$. Thus $B$ with the displayed metric is compact. Enumerate only the finite matrices with rational-complex entries and operator norm at most $1$, extended by zero on the remaining coordinates. This is a countable subset of $B$ and is WOT-dense: finite-coordinate compressions $P_nTP_n$ of a contraction $T$ converge strongly to $T$; for any positive rational $\varepsilon<1$, the finite matrix $(1-\varepsilon)P_nTP_n$ has norm at most $1-\varepsilon$ and can be approximated in finite-dimensional operator norm by rational-complex matrices within any tolerance less than $\varepsilon$, all still of norm at most $1$. Taking the compression size to infinity and the shrinkage and tolerances to zero proves the asserted WOT density. [F3, F6, construct]

1.3 The direct integral $\mathcal M$ is a unital $*$-subalgebra of $\mathcal B(\mathcal H)$ containing the diagonal algebra $\mathcal D$: sums, products and adjoints of induced operators are induced by the pointwise sums, products and adjoints of essentially bounded weakly measurable fields by [F2], the identity is induced by the constant field $I_{H_x}$, and $\mathcal D\subseteq\mathcal M$ by [F1]. [F1, F2, algebra]

2.1 Explicitly adjoin adjoints to the defining sequence: set $R_{2k-1}(x)=T^{(k)}_x$ and $R_{2k}(x)=(T^{(k)}_x)^*$, so $M_x=W^*(R_j(x):j\ge1)$ and the family is adjoint-closed. The transported generators $S_j(x):=U_xR_j(x)U_x^*$ are weakly measurable by [F2,F3]. Their norms are Borel, since they are the suprema of their norms on a fixed countable dense subset of the unit sphere in the constant-space model; the latter norms are Borel limits of finite coefficient square sums. Put $R_j^b(x):=R_j(x)/(1+\|R_j(x)\|)$ on the original fibres and $S_j^b(x):=U_xR_j^b(x)U_x^*=S_j(x)/(1+\|S_j(x)\|)$ on $K_p$. The original fields are weakly measurable and bounded by $1$ on the countable union of strata, with value $0$ on the zero stratum. Each normalized family generates its corresponding fibre algebra, since normalization multiplies each generator by a nonzero scalar. The normalized family remains adjoint-closed because an operator and its adjoint have the same norm. Therefore commuting with every $S_j^b(x)$ is equivalent to commuting with $M_x^t$: it gives commutation with the generated unital $*$-algebra and then with its WOT closure, since multiplication by a fixed bounded operator is WOT-continuous. The assignment $x\mapsto(S_1^b(x),S_2^b(x),\dots)$ is Borel into the product WOT balls by its measurable coordinates. [F2, F3, F6, step 1.1, algebra]

3.1 We claim $(\mathcal M)'\subseteq\int_X^\oplus M_x'\,d\mu(x)$. Let $T\in(\mathcal M)'$; since $\mathcal D\subseteq\mathcal M$, the operator $T$ commutes with $\mathcal D$ and hence is decomposable, $T=\int_X^\oplus T_x\,d\mu(x)$ for a weakly measurable essentially bounded field $(T_x)$, by [F2]. For every $k$ the operator $\int_X^\oplus R_k^{b}(x)\,d\mu(x)$ belongs to $\mathcal M$, so $T$ commutes with it; by [F2] the field $x\mapsto[T_x,R_k^{b}(x)]$ induces the zero operator, and a decomposable operator vanishes exactly when its field vanishes almost everywhere, as its coefficient integrals against a countable fundamental family of sections all vanish. Hence, on one conull set depending on $k$, the fibre $T_x$ commutes with $R_k^{b}(x)$; intersecting the countably many conull sets gives one conull set on which $T_x$ commutes with every member of the adjoint-closed normalized generating family of step 2.1, so $T_x\in M_x'$ almost everywhere, and $T\in\int_X^\oplus M_x'\,d\mu(x)$. The reverse inclusion is pointwise commutation. [F2, step 1.3, step 2.1, algebra]

3.2 Define $g(x,T):=\sum_{k,a,b}w_{k,a,b}\min(1,|\langle(TS_k^{b}(x)-S_k^{b}(x)T)f_a,f_b\rangle|)$ with positive summable weights $w_{k,a,b}$. For fixed $T$ the map $x\mapsto g(x,T)$ is measurable, a countable sum of measurable functions by step 1.2; for fixed $x$ the map $T\mapsto g(x,T)$ is continuous, being the uniform limit of the weighted partial sums of continuous functions; and $g(x,T)=0$ exactly when $T$ commutes with every $S_k^{b}(x)$, that is, exactly when $T\in (M_x^t)'$ and $\|T\|\le1$, by step 2.1. The zero sets $C_x=(M_x^t)'_1$ are nonempty, since the identity belongs to them, and compact. [F6, step 1.2, algebra]

4.1 Apply [F4] on the standard Borel sigma-finite space $X_p$ to the function $g$, and reindex its selectors by $B_j=s_{j-1}$ for $j\ge1$. This yields measurable maps $B_j:X_p\to B$ with $B_j(x)\in(M_x^t)'_1$ for all $j\ge1$ such that $(B_j(x))_{j\ge1}$ is WOT-dense in $(M_x^t)'_1$ for every $x$. Each $B_j$ is a weakly measurable operator field, since its Borel matrix coefficients in the basis $(f_a)$ are obtained by composing the coefficient functionals with the measurable map $B_j$; hence $(M_x^t)'=W^*(B_j(x):j\ge1)$ is a measurable field of von Neumann algebras in the sense of [F1]. [F1, F4, step 3.2]

5.1 Repeating steps 3.2–4.1 for the simultaneous commutator equations of the fields $S_k^{b}$ and $B_j$ yields measurable dense sections of the unit ball of the centre $Z(M_x^t)=(M_x^t)\cap(M_x^t)'$; repeating them for the commutator equations of the fields $B_j$ alone yields measurable dense sections of the unit ball of $M_x^t$, because the commutant of the WOT-closed unital algebra generated by the $B_j$ is exactly $\{T:TB_j=B_jT\text{ for all }j\}$; and by [F5] the countably many selections so obtained, together with the Gram-Schmidt sections of [F3], can be combined on one common conull Borel subset of $X_p$. [F3, F5, step 4.1, algebra]

6.1 Transporting back by the unitaries $U_x$, and taking the union over the countably many dimension strata inside one common conull set, we obtain the promised WOT-dense countable measurable sections of the unit balls of $M_x$, $M_x'$ and $Z(M_x)$ on a common conull Borel stratum, and the fields $x\mapsto M_x'$, $x\mapsto Z(M_x)$ satisfy the measurability condition of [F1] through those sections. [F3, F5, step 5.1]

7.1 Therefore $(\mathcal M)'=\int_X^\oplus M_x'\,d\mu(x)$, and, since $x\mapsto M_x'$ is again a measurable field of von Neumann algebras by step 6.1, the same identity applies to it: $(\mathcal M)''=\int_X^\oplus (M_x')'\,d\mu(x)=\int_X^\oplus M_x\,d\mu(x)=\mathcal M$, where the middle equality is the fibre double commutant theorem of [F6] applied to each $M_x$. Hence $\mathcal M$ is a WOT-closed unital $*$-subalgebra of $\mathcal B(\mathcal H)$, that is, a concrete von Neumann algebra, with commutant $\mathcal M'=\int_X^\oplus M_x'\,d\mu(x)$. [F6, step 3.1, algebra]

8.1 For the centre: by [F2] the intersection $\mathcal M\cap\mathcal M'$ consists exactly of those operators whose fibres lie in $M_x\cap M_x'$ almost everywhere, because an operator in the intersection has two decomposable representatives with fibres in $M_x$ and in $M_x'$ respectively, and decomposable representatives are unique almost everywhere. Hence $Z(\mathcal M)=\int_X^\oplus Z(M_x)\,d\mu(x)$. [F2, step 7.1, algebra]

9.1 Finally let $(N_x)$ be a measurable field of unital von Neumann algebras with $\int_X^\oplus N_x\,d\mu(x)=\int_X^\oplus M_x\,d\mu(x)$. For each $k$, the operator $\int_X^\oplus R_k^{b}(x)\,d\mu(x)$ belongs to $\int_X^\oplus N_x\,d\mu(x)$, so by the almost-everywhere uniqueness of decomposable representatives its field agrees almost everywhere with an $N_x$-valued essentially bounded weakly measurable field; thus $R_k^{b}(x)\in N_x$ for almost every $x$. Intersecting the countably many conull sets and taking weak-operator closures of the generated algebras gives $M_x\subseteq N_x$ almost everywhere; the symmetric argument gives $N_x\subseteq M_x$ almost everywhere, so the two fields coincide almost everywhere. [F2, step 2.1, step 8.1, algebra] ∎

## Boundary cases

The zero stratum is handled in step 1.1: there $H_x=\{0\}$ and all three algebras are $\{0\}$, with the unique unit-ball section the zero operator. A one-dimensional stratum has $K_p=\mathbb C$, the unit ball is the closed unit disc, and the selected operators have measurable scalar coefficients. If some defining generator vanishes identically on a stratum, its normalization $S_k/(1+\|S_k\|)$ is the zero field there, which is allowed and does not change the generated algebra. If $\mu(X_p)=0$ the stratum is discarded without changing any almost-everywhere statement, and if all fibres are zero then $\mathcal H=\{0\}$ and all four conclusions hold trivially with the zero von Neumann algebra. The statements are almost-everywhere statements on a conull Borel stratum; no selection is claimed at every point, and in the uniqueness clause only the almost-everywhere conclusion is asserted. Choice is used exactly as recorded in the axiom-use field; the four selector applications inherit the countable choice of the selection supplier.

## Source qualifications

Bekka-de la Harpe, Chapter 1 §1.I, Proposition 1.I.3 and Theorem 1.I.6, printed pp. 69-70, state the measurability of the commutant field, that the direct integral of a measurable field of von Neumann algebras is a von Neumann algebra, and identify its commutant; their proofs are referred to Dixmier-von Neumann, and the local argument above replaces those references by the explicit stratumwise selection, commutator-zero-set, decomposability and almost-everywhere uniqueness steps, using the run-local measurable selection and uniformization suppliers. Blackadar, Part III §III.1.6, printed pp. 252-254, outlines the direct-integral architecture and states the same structural conclusions while explicitly omitting the technical details; no step above is taken from that outline. The centre identity and the equality-of-integrals assertion are proved locally in steps 8.1–9.1 and are not asserted by either source in this exact form.
