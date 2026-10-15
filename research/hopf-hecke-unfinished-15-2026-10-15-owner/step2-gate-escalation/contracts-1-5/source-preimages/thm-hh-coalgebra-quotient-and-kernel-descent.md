---
id: thm-hh-coalgebra-quotient-and-kernel-descent
kind: theorem
title: "Coideal quotients, coalgebra-map kernels, and sums of subcoalgebras"
status: draft
origin: pipeline
pipeline_run: hopf-hecke-unfinished-15-2026-10-15
dependency_level: 2
deps: [def-hh-coalgebra-and-coalgebra-map, def-hh-subcoalgebras-coideals-and-quotient-coalgebras, lem-hh-tensor-injections-quotients-and-kernels-over-a-field, def-axiom-of-choice, def-hh-scalar-and-tensor-conventions, prop-functoriality-of-module-tensor-products, lem-hh-tensor-coherence-on-elementary-tensors, def-quotient-module, thm-quotient-module-laws]
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: "AC is used through [[lem-hh-tensor-injections-quotients-and-kernels-over-a-field]] for tensoring arbitrary injections and for the quotient-kernel formula. This is needed in the quotient, kernel, and subcoalgebra-sum arguments. The finite matrix construction and counit calculation are not part of this AC-dependent theorem."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "UCSD Math 207A, Hopf Algebras lecture notes, Spring 2020"
      url: "https://mathweb.ucsd.edu/~drogalsk/207a-s20-lecturenotes.pdf"
      locator: "Chapter 1, Lemma 1.20 and Proposition 1.21, printed pp. 15–16. Proposition 1.21 leaves the quotient and kernel details as an exercise; the item supplies them."
    - title: "Benedikt Stufler, Hopf Algebras lecture notes, University of Zurich course, 2018"
      url: "https://www.dmg.tuwien.ac.at/stufler/doc/lec/2018hopf.pdf"
      locator: "§3.1, Definition 3.19 and the quotient-coalgebra discussion, printed pp. 16–17; the item supplies the complete local proof."

---
## Statement

Let $C$ be a coalgebra over a field $k$, and assume the Axiom of Choice. For every coideal $I\subseteq C$, the quotient vector space $C/I$ has a unique coalgebra structure making $q:C\to C/I$ a coalgebra map, given by
$$
\overline{\Delta}(c+I)=(q\otimes q)\Delta(c),\qquad \overline{\varepsilon}(c+I)=\varepsilon_C(c).
$$
This quotient has the universal property that every coalgebra map $f:C\to D$ with $I\subseteq\ker f$ factors uniquely through $q$ by a coalgebra map. Also, the kernel of every coalgebra map is a coideal, and the sum of any family of subcoalgebras of $C$ is a subcoalgebra.

## Facts & Assumptions

**Given:** A field $k$, a coalgebra $C$, and the Axiom of Choice.

[A1] The Axiom of Choice says every family of nonempty sets has a choice function ([[def-axiom-of-choice]]).

[F1] A coideal $I$ satisfies $\varepsilon_C(I)=0$ and $\Delta_C(I)\subseteq I\otimes C+C\otimes I$; a subcoalgebra is a subspace with its inclusion a coalgebra map ([[def-hh-subcoalgebras-coideals-and-quotient-coalgebras]]).

[F2] For subspaces $U\subseteq V$ and $Z\subseteq W$, with quotient maps $p:V\to V/U$ and $r:W\to W/Z$, $\ker(p\otimes r)=U\otimes W+V\otimes Z$. Tensoring an injective linear map with an identity map is injective ([[lem-hh-tensor-injections-quotients-and-kernels-over-a-field]]).

[F3] The quotient $C/I$ consists of additive cosets, with the quotient map linear and surjective; for a vector space the scalar action on cosets is well-defined ([[def-quotient-module]], [[thm-quotient-module-laws]]).

[F4] Linear maps induce tensor maps, preserve composition, and are determined by their values on elementary tensors ([[prop-functoriality-of-module-tensor-products]]).

[F5] The associator and symmetry are natural, and the unit isomorphisms are natural as well ([[lem-hh-tensor-coherence-on-elementary-tensors]]).

[F6] Coalgebra maps preserve comultiplication and counit, and the coalgebra identities use the associator and unit isomorphisms of [F5] ([[def-hh-coalgebra-and-coalgebra-map]]).

## Proof

1.1 Let $q:C\to C/I$ be the quotient map. By [F2], $\ker(q\otimes q)=I\otimes C+C\otimes I$, so $(q\otimes q)\Delta(x)=0$ for every $x\in I$ by [F1]; also $\varepsilon_C(x)=0$ for $x\in I$. If $c+I=c'+I$, then $c-c'\in I$ by the coset description [F3], and these two vanishing facts give $(q\otimes q)\Delta(c)=(q\otimes q)\Delta(c')$ and $\varepsilon_C(c)=\varepsilon_C(c')$. Hence the displayed formulas are well-defined on cosets; their linearity follows from linearity of $\Delta$, $\varepsilon_C$, and $q\otimes q$ together with the quotient operations of [F3]. They define maps $\overline{\Delta}$ and $\overline{\varepsilon}$ with $\overline{\Delta}q=(q\otimes q)\Delta$ and $\overline{\varepsilon}q=\varepsilon_C$. The map $q\otimes q$ is surjective: each element of $(C/I)\otimes(C/I)$ is a finite sum of elementary tensors, and each factor of each elementary tensor has a preimage under $q$. [given, A1, F1, F2, F3, F4, construct]

1.2 Let $f:C\to D$ be a coalgebra map and $K=\ker f$. Then $\varepsilon_C(K)=0$ by [F6]. Let $q_K:C\to C/K$ be the quotient map and define $\widetilde f:C/K\to D$ by $\widetilde f(c+K)=f(c)$. This is well-defined and linear by the coset description [F3], and it is injective because $\widetilde f(c+K)=0$ implies $c\in K$. For $x\in K$, $(\widetilde f\otimes\widetilde f)(q_K\otimes q_K)\Delta(x)=(f\otimes f)\Delta(x)=\Delta_D(f(x))=0$. The tensor map $\widetilde f\otimes\widetilde f$ is injective by [A1] and [F2], applying the injection assertion twice and using the symmetry in [F5]; hence $(q_K\otimes q_K)\Delta(x)=0$. The quotient-kernel formula [F2] now gives $\Delta(x)\in K\otimes C+C\otimes K$, so $K$ is a coideal by [F1]. [given, A1, F1, F2, F3, F5, F6, algebra]

1.3 Let $(D_\alpha)_{\alpha\in\Lambda}$ be any family of subcoalgebras and set $S=\sum_{\alpha\in\Lambda}D_\alpha$, where the sum consists of finite sums of elements of the $D_\alpha$. For $s\in S$, write $s=\sum_{j=1}^r d_j$ with each $d_j$ in some $D_{\alpha_j}$. Since each inclusion $D_{\alpha_j}\to C$ is a coalgebra map, $\Delta_C(d_j)$ lies in the image of $D_{\alpha_j}\otimes D_{\alpha_j}$, which factors through $S\otimes S$. Thus $\Delta_C(S)$ lies in the image of $S\otimes S\to C\otimes C$. This last map is injective by [A1] and [F2], so it gives a unique linear $\Delta_S:S\to S\otimes S$ with $(j_S\otimes j_S)\Delta_S=\Delta_Cj_S$; put $\varepsilon_S=\varepsilon_C|_S$. [given, A1, F1, F2, F4, construct]

2.1 The coassociativity composites, after precomposition with $q$, satisfy $\alpha_{C/I,C/I,C/I}(\overline{\Delta}\otimes\mathrm{id})\overline{\Delta}q=(q\otimes(q\otimes q))\alpha_{C,C,C}(\Delta\otimes\mathrm{id})\Delta=(q\otimes(q\otimes q))(\mathrm{id}\otimes\Delta)\Delta=(\mathrm{id}\otimes\overline{\Delta})\overline{\Delta}q$, where the middle equality is coassociativity in $C$ and the outer equalities use functoriality and associator naturality [F4, F5, F6]. Since $q$ is surjective, the composites on $C/I$ are equal. Likewise $\lambda_{C/I}(\overline{\varepsilon}\otimes\mathrm{id})\overline{\Delta}q=\lambda_{C/I}(\varepsilon_C\otimes q)\Delta=q\lambda_C(\varepsilon_C\otimes\mathrm{id})\Delta=q$ and $\rho_{C/I}(\mathrm{id}\otimes\overline{\varepsilon})\overline{\Delta}q=\rho_{C/I}(q\otimes\varepsilon_C)\Delta=q\rho_C(\mathrm{id}\otimes\varepsilon_C)\Delta=q$; unit naturality and the counit equations give the last equalities, and surjectivity of $q$ proves both counit identities on $C/I$. [step 1.1, F4, F5, F6, algebra]

2.2 The map $j_S\otimes j_S\otimes j_S$ is injective by applying [F2] repeatedly, with associators from [F5]. Composing the two coassociativity composites for $\Delta_S$ with this injection gives the corresponding composites for $\Delta_Cj_S$, which agree by [F6]; therefore the composites for $\Delta_S$ agree. Composing either counit composite with $j_S$ gives the corresponding counit composite in $C$ followed by $j_S$, hence $j_S$ by [F6]; since $j_S$ is injective, each counit composite on $S$ is $\mathrm{id}_S$. Thus $S$ is a subcoalgebra. If $\Lambda$ is empty, $S=0$ and the unique zero structure maps satisfy the coalgebra identities on the zero space. [step 1.3, A1, F2, F5, F6, algebra]

3.1 Any coalgebra structure on $C/I$ making $q$ a coalgebra map must satisfy $\overline{\Delta}q=(q\otimes q)\Delta$ and $\overline{\varepsilon}q=\varepsilon_C$. Surjectivity of $q$ uniquely determines each map, so the displayed quotient structure is unique. If a coalgebra map $f:C\to D$ kills $I$, define $\overline f(c+I)=f(c)$. This is well-defined and linear by [F3]. The equations $\varepsilon_D\overline f q=\varepsilon_C=\overline{\varepsilon}q$ and $\Delta_D\overline f q=(f\otimes f)\Delta=(\overline f\otimes\overline f)(q\otimes q)\Delta=(\overline f\otimes\overline f)\overline\Delta q$ show, by surjectivity of $q$, that $\overline f$ is a coalgebra map; any factorization is this map on cosets, so it is unique. [step 1.1, step 2.1, F3, F4, F6]

4.1 Steps 1.1 and 2.1 establish the quotient coalgebra, and step 3.1 proves its uniqueness and universal property. Step 1.2 establishes the kernel coideal claim; steps 1.3 and 2.2 establish closure under arbitrary sums of subcoalgebras. [step 1.1, step 2.1, step 3.1, step 1.2, step 1.3, step 2.2] ∎

