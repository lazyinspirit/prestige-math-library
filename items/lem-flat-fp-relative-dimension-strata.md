---
id: lem-flat-fp-relative-dimension-strata
kind: lemma
title: "Dense relative-dimension strata in flat finitely presented fibres"
status: draft
origin: pipeline
deps:
  - def-axiom-of-choice
  - def-flat-morphism-schemes
  - def-locally-finite-presentation-morphism
  - def-finitely-presented-module-and-algebra
  - def-scheme-theoretic-fibre
  - thm-affine-fibre-product-tensor-ring
  - lem-fibre-product-open-restriction
  - def-relative-dimension-smooth-morphism
  - def-krull-dimension-of-a-ring
  - def-local-ring
  - def-cohen-macaulay-local-module-and-ring
  - def-finite-type-and-module-finite-algebras
  - def-quasi-finite-at-a-prime-for-finite-type-algebras
  - cor-quasi-finite-locus-open-finite-type-algebra
  - lem-local-fibre-dimension-bound-via-polynomial-quasifiniteness
  - cor-flat-local-cohen-macaulay-fibre-criterion
  - cor-zero-dimensional-local-modules-are-cohen-macaulay
  - thm-regular-local-rings-are-domains-and-cohen-macaulay
  - cor-finite-type-algebra-over-noetherian-ring-is-noetherian
  - lem-field-is-noetherian
  - thm-noetherian-ring-quotients-and-localisations
  - thm-irreducible-components-and-minimal-primes
  - thm-affine-domain-dimension-transcendence-degree
  - cor-noetherian-spectrum-has-finitely-many-irreducible-components
  - def-irreducible-component-scheme
  - def-generic-point-irreducible-closed-subset
  - lem-flatness-by-fibres-for-polynomial-chart
  - lem-flat-locus-open-finitely-presented-algebra
  - lem-ag-local-flatness-regular-parameters
  - lem-associated-primes-of-cohen-macaulay-module-have-full-dimension
  - lem-regular-local-residue-field-koszul-resolution
  - thm-dimension-formula-for-affine-domains
  - thm-flat-going-down
  - thm-minimal-support-primes-are-associated
  - thm-parameters-and-regular-sequences-in-cohen-macaulay-modules
  - thm-quasi-finite-algebra-open-finite-factorization
  - thm-regular-sequences-give-acyclic-koszul-complexes
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "The Stacks Project, More on Morphisms, Section 37.22 (tags 045U, 054T): the Cohen-Macaulay locus of a flat, locally finitely presented morphism"
      url: https://stacks.math.columbia.edu/tag/045U
    - title: "The Stacks Project, Commutative Algebra, Section 10.130 (tags 00RE, 00RH, 00RI, 00RL): openness of Cohen-Macaulay loci"
      url: https://stacks.math.columbia.edu/download/algebra.pdf
    - title: "The Stacks Project, Commutative Algebra, Sections 10.99 and 10.128 (tags 00MI, 00R4): flatness criteria and miracle flatness"
      url: https://stacks.math.columbia.edu/download/algebra.pdf
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $f\colon X\to S$ be a
morphism of schemes that is flat ([[def-flat-morphism-schemes]]) and locally of
finite presentation ([[def-locally-finite-presentation-morphism]]). For $x\in X$
put $s=f(x)$, let $X_s$ denote the scheme-theoretic fibre
([[def-scheme-theoretic-fibre]]) and let $\dim_xX_s$ be its local dimension at
$x$ ([[def-relative-dimension-smooth-morphism]]). Write $\mathcal O_{X_s,x}$
for the local ring of the fibre at $x$ ([[def-local-ring]]) and put
$$W=\{x\in X:\mathcal O_{X_s,x}\text{ is Cohen--Macaulay}\}$$
([[def-cohen-macaulay-local-module-and-ring]]), and for $d\ge0$
$$W_d=\{x\in W:\dim_xX_s=d\}.$$
Then:

1. every fibre $X_s$ is a locally Noetherian scheme, and $W$ is open in $X$;
2. $W\cap X_s$ is dense in $X_s$, for every $s\in S$;
3. each $W_d$ is open in $X$; the sets $W_d$ are pairwise disjoint and
   $W=\bigsqcup_{d\ge0}W_d$; and for every $s\in S$ with $X_s\ne\varnothing$,
   $$\sup\{d\ge0:W_d\cap X_s\ne\varnothing\}=\dim X_s\in\mathbb N\cup\{\infty\}.$$
   If $\dim X_s$ is finite, this supremum is a largest attained value.

The finite presentation case is included, since finite presentation implies
local finite presentation ([[def-finitely-presented-module-and-algebra]],
[[def-locally-finite-presentation-morphism]]). No Noetherian hypothesis is
imposed on $S$, and no separatedness, reducedness or quasi-compactness is
used.


## Facts & Assumptions
**Given:** The data and hypotheses displayed in the Statement, with the conventions fixed there.

[F1] Affine-local description of locally finitely presented morphisms and of their fibres. A morphism $f\colon X\to S$ is locally of finite presentation when every point of $X$ has affine open neighbourhoods $U=\operatorname{Spec}B\subseteq X$ and $V=\operatorname{Spec}A\subseteq S$ with $f(U)\subseteq V$ and $A\to B$ a finitely presented algebra ([[def-locally-finite-presentation-morphism]], [[def-finitely-presented-module-and-algebra]]). For such a chart and a point $s\in V$ with prime $\mathfrak p\subseteq A$, the fibre product $\operatorname{Spec}B\times_{\operatorname{Spec}A}\operatorname{Spec}\kappa(\mathfrak p)$ is canonically $\operatorname{Spec}(B\otimes_A\kappa(\mathfrak p))$, and it represents the open subscheme $U\cap X_s$ of the scheme-theoretic fibre $X_s$ ([[def-scheme-theoretic-fibre]], [[thm-affine-fibre-product-tensor-ring]], [[lem-fibre-product-open-restriction]]). Under this identification a point $x\in U$ with prime $\mathfrak q\subseteq B$ over $\mathfrak p$ corresponds to the prime $\overline{\mathfrak q}$ of $B\otimes_A\kappa(\mathfrak p)$, and the local ring of $X_s$ at $x$ is $B_{\mathfrak q}/\mathfrak pB_{\mathfrak q}$. Since $B$ is a finitely generated $A$-algebra, $B\otimes_A\kappa(\mathfrak p)$ is generated as a $\kappa(\mathfrak p)$-algebra by the images of a finite generating family, so the fibre is a scheme locally of finite type over the residue field ([[def-finite-type-and-module-finite-algebras]]).

[F2] Local dimension. For a scheme $Y$ and a point $y\in Y$, the local dimension $\dim_yY$ is the infimum of the Krull dimensions of the open neighbourhoods of $y$; it is not the height of the local ring in general ([[def-relative-dimension-smooth-morphism]], [[def-krull-dimension-of-a-ring]]). On a finite-type affine scheme over a field it equals the largest dimension of an irreducible component through $y$: each component is a finite-type domain, and every nonempty principal open of that component has the same fraction field and dimension by [[thm-affine-domain-dimension-transcendence-degree]]; one can shrink away the finitely many components not containing $y$. The local dimension is unaffected by passing to an open subscheme containing the point, and $\dim_yY\le\dim Y$ because $Y$ itself is an open neighbourhood of $y$.

[F3] Quasi-finiteness at a prime. Let $R\to S$ be a ring map of finite type and let $\mathfrak q\subseteq S$ be a prime over $\mathfrak p=\mathfrak q\cap R$. Then $R\to S$ is quasi-finite at $\mathfrak q$ exactly when $S_{\mathfrak q}/\mathfrak pS_{\mathfrak q}$ is finite as a $\kappa(\mathfrak p)$-module, equivalently when the fibre $\operatorname{Spec}(S\otimes_R\kappa(\mathfrak p))$ has local dimension $0$ at the point corresponding to $\mathfrak q$ ([[def-quasi-finite-at-a-prime-for-finite-type-algebras]]). If $R\to S$ is of finite type then the set of primes at which it is quasi-finite is open in $\operatorname{Spec}S$ ([[cor-quasi-finite-locus-open-finite-type-algebra]]). Quasi-finiteness at a prime is preserved by base change and by localisation: if $R\to R'$ is any ring map and $\mathfrak q'\subseteq S'=R'\otimes_RS$ lies over $\mathfrak q$, then $S'_{\mathfrak q'}/\mathfrak p'S'_{\mathfrak q'}$ is a localisation of $(S_{\mathfrak q}/\mathfrak pS_{\mathfrak q})\otimes_{\kappa(\mathfrak p)}\kappa(\mathfrak p')$, hence finite over $\kappa(\mathfrak p')$; and forming $S_g$ localises the fibre ring at $\mathfrak q$ without changing it at primes not containing $g$.

[F4] Polynomial charts for finite local fibre dimension. Assume AC. Let $A\to B$ be a finite type ring map, $\mathfrak q\in\operatorname{Spec}B$ over $\mathfrak p$, and $n\ge0$. If the scheme-theoretic fibre has local dimension $n$ at the point corresponding to $\mathfrak q$, then there exist $g\in B\setminus\mathfrak q$ and an $A$-algebra map $A[T_1,\dots,T_n]\to B_g$ that is quasi-finite ([[lem-local-fibre-dimension-bound-via-polynomial-quasifiniteness]]).

[F5] Published field-case inputs. For a finite-type domain over a field, the affine-domain dimension formula identifies the height of a prime with the difference between the dimension of the domain and the transcendence degree of the residue field ([[thm-dimension-formula-for-affine-domains]], [[thm-affine-domain-dimension-transcendence-degree]]). Every minimal support prime of a finite module over a Noetherian local ring is associated, and in a Cohen--Macaulay local module every associated prime has quotient dimension equal to the module dimension ([[thm-minimal-support-primes-are-associated]], [[lem-associated-primes-of-cohen-macaulay-module-have-full-dimension]]). Every system of parameters of a Cohen--Macaulay local ring is a regular sequence ([[thm-parameters-and-regular-sequences-in-cohen-macaulay-modules]]). A regular system of parameters of a regular local ring has a Koszul resolution of the residue field, and a regular sequence has acyclic Koszul complex in positive degrees ([[lem-regular-local-residue-field-koszul-resolution]], [[thm-regular-sequences-give-acyclic-koszul-complexes]]). For a local map of Noetherian local rings and a finite target-module, vanishing of $\operatorname{Tor}_1$ with the source residue field implies flatness over the source ([[lem-ag-local-flatness-regular-parameters]]). For the reverse direction, flat local maps satisfy going down ([[thm-flat-going-down]]), while the finite integral factorization of a quasi-finite algebra yields a local finite intermediate ring after shrinking ([[thm-quasi-finite-algebra-open-finite-factorization]]). Flat local maps over a Cohen--Macaulay base with zero-dimensional Cohen--Macaulay closed fibre have Cohen--Macaulay target ([[cor-flat-local-cohen-macaulay-fibre-criterion]], [[cor-zero-dimensional-local-modules-are-cohen-macaulay]], [[thm-regular-local-rings-are-domains-and-cohen-macaulay]]).

[F6] Critère de platitude par fibres, polynomial-chart case. Assume AC. Let $R\to P=R[T_1,\dots,T_d]\to B$ be ring maps with $B$ a finitely presented $P$-algebra, let $\mathfrak q\subseteq B$ be a prime, and put $\mathfrak p=R\cap\mathfrak q$ and $\mathfrak Q=P\cap\mathfrak q$. If $B_{\mathfrak q}$ is flat over $R_{\mathfrak p}$ and the closed-fibre local algebra $(B\otimes_R\kappa(\mathfrak p))_{\mathfrak q}$ is flat over $\kappa(\mathfrak p)[T_1,\dots,T_d]$ at the induced prime, then $B_{\mathfrak q}$ is flat over $P_{\mathfrak Q}$ ([[lem-flatness-by-fibres-for-polynomial-chart]]). Its Noetherian and general-base cases are proved using the finite-over-target local flatness criterion and eventual flatness in a Noetherian approximation.

[F7] Openness of the flat locus. Assume AC. Let $R\to B$ be a finitely presented ring map. Then the set of primes $\mathfrak q\in\operatorname{Spec}B$ with $B_{\mathfrak q}$ flat over $R$ is open in $\operatorname{Spec}B$ ([[lem-flat-locus-open-finitely-presented-algebra]]). Its proof is supplied locally through Noetherian approximation, a finite free syzygy, fibrewise exactness openness, and flat-complex lifting.

[F8] Fibres are locally Noetherian, and Cohen--Macaulayness of their local rings. A finite type algebra over a field is Noetherian ([[cor-finite-type-algebra-over-noetherian-ring-is-noetherian]], [[lem-field-is-noetherian]]), and localisations and quotients of Noetherian rings are Noetherian ([[thm-noetherian-ring-quotients-and-localisations]]). The Cohen--Macaulay property used here is that of a nonzero finite module over a Noetherian local ring, with the zero module excluded ([[def-cohen-macaulay-local-module-and-ring]]); in particular the local ring $\mathcal O_{X_s,x}$ of a point of a locally Noetherian scheme is a nonzero Noetherian local ring, so it makes sense to ask whether it is Cohen--Macaulay ([[def-local-ring]]). A nonzero Noetherian local ring of dimension $0$ is Cohen--Macaulay ([[cor-zero-dimensional-local-modules-are-cohen-macaulay]]).

[F9] Points of a scheme and generisations. A point $\eta$ of a scheme $Y$ is a generic point of an irreducible closed subset $Z$ when $\overline{\{\eta\}}=Z$, and a point is generic for an irreducible component of $Y$ exactly when it is minimal for the specialisation order ([[def-generic-point-irreducible-closed-subset]], [[def-irreducible-component-scheme]]). For an affine scheme $\operatorname{Spec}A$ the irreducible components are the closed sets $V(\mathfrak p)$ for the minimal primes $\mathfrak p$ of $A$ ([[thm-irreducible-components-and-minimal-primes]]), and a Noetherian ring has only finitely many minimal primes, so an affine Noetherian scheme has only finitely many irreducible components ([[cor-noetherian-spectrum-has-finitely-many-irreducible-components]]).

[F10] The Axiom of Choice states that every family of nonempty sets has a choice function ([[def-axiom-of-choice]]).



## Proof

**Proof technique:** direct.

1.1 Reduction to affine charts. The claims of the Statement are local on $X$. Choose, using the definition of local finite presentation, an affine open cover of $X$ by charts $U=\operatorname{Spec}B$ with $f(U)\subseteq V=\operatorname{Spec}A$ and $A\to B$ finitely presented; such charts exist at every point by [F1]. For a point $x\in U$ with prime $\mathfrak q\subseteq B$ over the prime $\mathfrak p\subseteq A$ of $s$, the identification of [F1] exhibits the chart fibre $\operatorname{Spec}(B\otimes_A\kappa(\mathfrak p))$ as the open subscheme $U\cap X_s$ of $X_s$, gives $\mathcal O_{X_s,x}=B_{\mathfrak q}/\mathfrak pB_{\mathfrak q}$, and gives the same local dimension $\dim_xX_s$ whether computed in $U\cap X_s$ or in $X_s$ by [F2]. A subset of a topological space is open (respectively dense) exactly when its trace in every member of an open cover is so, and a union of pairwise disjoint open subsets is determined chart by chart. Hence it suffices to prove the following affine statement: for a flat finitely presented ring map $R\to B$ and a prime $\mathfrak q\subseteq B$ over $\mathfrak p$, writing $W_B=\{\mathfrak q'\in\operatorname{Spec}B:B_{\mathfrak q'}/\mathfrak p'B_{\mathfrak q'}$ is Cohen--Macaulay$\}$ and $W_{B,d}=\{\mathfrak q'\in W_B:\dim_{\mathfrak q'}(B/R)=d\}$, the set $W_B$ is open, each $W_{B,d}$ is open, the $W_{B,d}$ partition $W_B$, $W_B$ is dense in every nonempty fibre $\operatorname{Spec}(B\otimes_R\kappa(\mathfrak p))$, and the supremum of the labels $d$ met by a nonempty fibre is its dimension. [F1, F2]

1.2 The polynomial chart at a point of $W$. Let $\mathfrak q\in W_B$ and put $n:=\dim_{\mathfrak q}(B/R)$, the local dimension of the fibre at $\mathfrak q$. Applying [F4] (AC) to the finite type map $R\to B$ at $\mathfrak q$ gives $g\in B\setminus\mathfrak q$ and an $R$-algebra map $\varphi\colon P:=R[T_1,\dots,T_n]\to B_g$ that is quasi-finite. Since $B$ is finitely presented over $R$, the localisation $B_g$ is finitely presented over $P$ as well (composition of finitely presented maps, and localisation is finitely presented). The fibre ring at $\mathfrak q$ is unchanged by the localisation $B\to B_g$, and $g\notin\mathfrak q$. [F1, F3, F4]

2.1 Fibres are locally Noetherian. In the chart of step 1.1 the fibre ring $B\otimes_A\kappa(\mathfrak p)$ is generated over the field $\kappa(\mathfrak p)$ by the images of a finite algebra generating family of $B$ over $A$ [F1]; it is therefore a finite type algebra over a field, hence Noetherian by [F8]. As the charts $U\cap X_s$ cover $X_s$, the fibre $X_s$ is locally Noetherian. In particular each local ring $\mathcal O_{X_s,x}$ is a nonzero Noetherian local ring, so the Cohen--Macaulay condition defining $W$ is meaningful by [F8]. [F1, F8, step 1.1]

2.2 The local dimension calculation on the closed fibre. Base change the chart of step 1.2 to $k=\kappa(\mathfrak p)$ and write $S=B_g\otimes_Rk$, $R_0=k[T_1,\dots,T_n]$, $\mathfrak q_0$ for the selected prime of $S$, and $\mathfrak p_0$ for its contraction to $R_0$. Quasi-finiteness at $\mathfrak q_0$ gives a finite residue extension $\kappa(\mathfrak q_0)/\kappa(\mathfrak p_0)$ [F3]. Let $d=\dim S_{\mathfrak q_0}$. For each minimal prime $\mathfrak m_i$ of the Cohen--Macaulay local ring $S_{\mathfrak q_0}$, [F5] makes it associated and gives $\dim(S_{\mathfrak q_0}/\mathfrak m_i)=d$. Let $P_i$ be the corresponding minimal prime of $S$ contained in $\mathfrak q_0$. Apply the affine-domain dimension formula [F5] to the finite-type domain $S/P_i$ at $\mathfrak q_0/P_i$: its component has dimension $d+\operatorname{trdeg}_k\kappa(\mathfrak q_0)$. The local topological dimension at $\mathfrak q_0$ is the maximum of the dimensions of these components by [F2], and equals $n$ by the choice in step 1.2; thus $d=n-\operatorname{trdeg}_k\kappa(\mathfrak q_0)$. The residue extension is finite, so this transcendence degree equals that of $\kappa(\mathfrak p_0)$; applying the same affine-domain formula to the polynomial domain $R_0$ gives $n-\operatorname{trdeg}_k\kappa(\mathfrak p_0)=\operatorname{ht}(\mathfrak p_0)=\dim(R_0)_{\mathfrak p_0}$. Hence $\dim S_{\mathfrak q_0}=\dim(R_0)_{\mathfrak p_0}=d$, which may be strictly less than the local topological dimension $n$ at a nonclosed point. [F2, F3, F5, step 1.2]

3.1 Flatness from regular parameters. The local ring $(R_0)_{\mathfrak p_0}$ is regular of dimension $d$; choose a regular parameter system $u_1,\dots,u_d$. Since $S_{\mathfrak q_0}/\mathfrak p_0S_{\mathfrak q_0}$ is a finite-dimensional local $\kappa(\mathfrak p_0)$-algebra by quasi-finiteness [F3], it is Artinian, so $\mathfrak p_0S_{\mathfrak q_0}$ is $\mathfrak q_0S_{\mathfrak q_0}$-primary. The images of the $u_i$ therefore form a system of parameters of the $d$-dimensional Cohen--Macaulay local ring $S_{\mathfrak q_0}$ by step 2.2, hence a regular sequence by [F5]. Tensoring the Koszul resolution of $\kappa(\mathfrak p_0)$ over $(R_0)_{\mathfrak p_0}$ with $S_{\mathfrak q_0}$ gives its Koszul complex on this regular sequence, so $\operatorname{Tor}_1^{(R_0)_{\mathfrak p_0}}(\kappa(\mathfrak p_0),S_{\mathfrak q_0})=0$ by [F5]. The published local Tor-flatness criterion [F5] applies to the finite $S_{\mathfrak q_0}$-module $S_{\mathfrak q_0}$ and yields flatness over $(R_0)_{\mathfrak p_0}$. For $d=0$ the parameter list is empty, the source local ring is a field and the same conclusion is immediate. [F3, F5, step 2.2]

3.2 The generic point of every irreducible component of a fibre lies in $W$. Let $s\in S$ and let $C$ be an irreducible component of $X_s$ with generic point $\eta$ [F9]. By step 2.1 the fibre $X_s$ is locally Noetherian, so $\mathcal O_{X_s,\eta}$ is a Noetherian local ring. We claim its Krull dimension is $0$, i.e. that its maximal ideal is its only prime. Primes of $\mathcal O_{X_s,\eta}$ correspond to the points $\xi\in X_s$ with $\eta\in\overline{\{\xi\}}$, that is, to the generisations of $\eta$ [F9]; if $\xi$ is such a point, then $\overline{\{\xi\}}$ is a closed irreducible subset of $X_s$ containing $\eta$, hence contains $\overline{\{\eta\}}=C$, and since $C$ is an irreducible component and $\overline{\{\xi\}}$ is irreducible we get $\overline{\{\xi\}}=C$; thus $\xi$ is a generic point of the component $C$, so $\xi=\eta$. Hence $\dim\mathcal O_{X_s,\eta}=0$, and by [F8] this nonzero Noetherian local ring is Cohen--Macaulay. Therefore $\eta\in W$. [F8, F9, step 2.1]

4.1 Flatness over the polynomial chart. The polynomial ring $P=R[T_1,\dots,T_n]$ is free, hence flat, over $R$; the ring $B_g$ is finitely presented over $P$; the localisation $B_{\mathfrak q}$ is flat over $R_{\mathfrak p}$ because $B$ is flat over $R$ and localisation is exact; and step 3.1 exhibits the closed-fibre local algebra as flat over the polynomial fibre local ring. By the critère de platitude par fibres in the polynomial-chart form [F6], the local ring $B_{\mathfrak q}$ is flat over $P_{\mathfrak Q}$, where $\mathfrak Q=P\cap\mathfrak q$. This is the exact use of [F6]. [F6, step 3.1]

4.2 The supremum of the relative dimensions over a fibre is its dimension. Let $s\in S$ with $X_s\ne\varnothing$. If $W_d\cap X_s\ne\varnothing$ and $x$ lies in it, then $d=\dim_xX_s\le\dim X_s$ by [F2]; this gives one inequality, including when $\dim X_s=\infty$. For the reverse inequality, cover $X_s$ by the finite-type affine fibre charts $U=\operatorname{Spec}A$ of step 2.1. Every finite chain of irreducible closed subsets $Z_0\subsetneq\cdots\subsetneq Z_m$ of $X_s$ remains a strict chain after intersection with an affine chart $U$ containing a point of $Z_0$: each intersection is nonempty and irreducible, and equality of two consecutive intersections would put a nonempty open dense subset of $Z_{i+1}$ inside its proper closed subset $Z_i$. Consequently $\dim X_s=\sup_U\dim U$, even if the fibre is not quasi-compact and this supremum is infinite. Each affine chart $U$ is finite type over $\kappa(s)$, so it has finitely many irreducible components [F9], each of finite dimension by [[thm-affine-domain-dimension-transcendence-degree]]; choose one component $C_U$ of dimension $\dim U$ and its generic point $\eta_U$. Its local ring has dimension zero by step 3.2, so $\eta_U\in W$, and [F2] applied inside $U$ gives $\dim_{\eta_U}X_s=\dim_{\eta_U}U=\dim C_U=\dim U$. Thus $W_{\dim U}\cap X_s\ne\varnothing$ for every affine chart $U$, proving $\sup\{d:W_d\cap X_s\ne\varnothing\}\ge\sup_U\dim U=\dim X_s$. If $\dim X_s<\infty$, a nonempty subset of $\mathbb N$ with finite supremum attains it, so the supremum is a largest value in that case. [F2, F9, step 2.1, step 3.2]

5.1 Spreading flatness and quasi-finiteness out. The map $P\to B_g$ is finitely presented and $B_{\mathfrak q}$ is flat over $P_{\mathfrak Q}$ by step 4.1, so the openness of the flat locus [F7] gives $h_1\in B_g\setminus\mathfrak q$ with $(B_g)_{h_1}$ flat over $P$; this is the exact use of [F7]. The map $P\to B_g$ is of finite type and quasi-finite at $\mathfrak q$ by step 1.2, so openness of the quasi-finite locus [F3] gives $h_2\in B_g\setminus\mathfrak q$ such that $P\to(B_g)_{h_2}$ is quasi-finite at every prime, and this remains true after base change to each residue field by [F3]. Replacing $B$ by $B_{gh_1h_2}$, which by [F3] leaves the fibre ring and the local fibre dimension at every prime of $B$ not containing $g h_1h_2$ unchanged, we may assume for the remainder of the affine proof: $R\to B$ is flat and finitely presented, $P=R[T_1,\dots,T_n]\to B$ arises from a quasi-finite map and is flat at every prime of $B$, and $P\to B$ is quasi-finite at every prime of $B$. [F3, F7, step 1.2, step 4.1]

6.1 Openness of $W_B$ and of every $W_{B,d}$. Work in the situation of step 5.1 and let $\mathfrak q'\in\operatorname{Spec}B$, with images $\mathfrak p'=R\cap\mathfrak q'$ and $\mathfrak Q'=P\cap\mathfrak q'$. After base change to $k'=\kappa(\mathfrak p')$, the local map $k'[T_1,\dots,T_n]_{\mathfrak Q'}\to B_{\mathfrak q'}/\mathfrak p'B_{\mathfrak q'}$ is flat and quasi-finite by step 5.1 and [F3]. The polynomial source is a regular local ring and the closed fibre of this quasi-finite map is zero-dimensional and Cohen--Macaulay, so the flat-local Cohen--Macaulay criterion [F5] makes the target fibre local ring Cohen--Macaulay. Put $h=\operatorname{ht}(\mathfrak Q')$. Going down for the flat local map gives target local-ring dimension at least $h$. For the reverse bound apply the finite integral factorization in [F5] to the quasi-finite $k'[T_1,\dots,T_n]$-algebra $S'=B\otimes_Rk'$ after the localization of step 5.1. It gives a finite $k'[T_1,\dots,T_n]$-algebra $T$ and a principal open $D_T(a)$ containing the contraction $\mathfrak r$ of the selected prime $\mathfrak q''$ of $S'$, with $T_a\cong S'_a$. Hence $S'_{\mathfrak q''}\cong T_{\mathfrak r}$. Since $T$ is integral over the image of the polynomial ring, distinct comparable primes of $T$ have distinct contractions (incomparability); every strict prime chain in $T_{\mathfrak r}$ therefore contracts to a strict chain ending at $\mathfrak Q'$, so its length is at most $h$. Thus its dimension is $h$. The residue extension is finite, and the CM component and affine-domain dimension calculation of step 2.2, now read in reverse, gives local topological dimension $h+\operatorname{trdeg}_{k'}\kappa(\mathfrak Q')=n$. Therefore every point of this chart lies in $W_B\cap W_{B,n}$. Taking unions over the polynomial charts centered at points of $W_B$ proves that $W_B$ and every $W_{B,d}$ are open. [F3, F5, step 2.2, step 5.1]

7.1 Density of $W$ in every fibre. Let $s\in S$ and let $C$ be an irreducible component of $X_s$. By step 3.2 its generic point $\eta$ belongs to $W\cap X_s$. Since the closure of $\{\eta\}$ in $X_s$ is $C$, the closure of $W\cap X_s$ contains $C$. Every point of the locally Noetherian fibre $X_s$ lies in an irreducible component [F9], so the closure of $W\cap X_s$ is all of $X_s$. This proves density without using the openness assertion of step 6.1. [F9, step 3.2]

7.2 The partition $W=\bigsqcup_dW_d$. By definition each $x\in W$ lies in exactly one $W_d$, namely the one with $d=\dim_xX_{f(x)}$, because the local dimension is a well-defined nonnegative integer. Hence the $W_d$ are pairwise disjoint and their union is $W$; each is open by step 6.1. [step 6.1]

8.1 Choice accounting and conclusion. The Axiom of Choice is declared in the Statement and is used exactly through the openness of the quasi-finite locus [F3], the polynomial-chart lemma [F4], the flatness-by-fibres criterion [F6], and the flat-locus openness theorem [F7]; the finitely many chart, element and component selections made in the proof use no further choice, and the reductions of steps 1.1 and 5.1 are finite. Steps 2.1 and 6.1 establish clause 1 of the Statement, steps 3.2 and 7.1 establish clause 2, and steps 6.1, 7.2 and 4.2 establish clause 3; all three clauses are proved under the stated hypotheses; steps 2.1, 3.2, 4.2 and 7.1 do not require the flat-locus openness input, while steps 5.1–6.1 establish the openness claims using [F7]. [F3, F4, F5, F6, F7, F10, step 2.1, step 6.1, step 7.1, step 7.2, step 4.2] $\square$
