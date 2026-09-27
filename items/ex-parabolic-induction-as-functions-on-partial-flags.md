---
id: ex-parabolic-induction-as-functions-on-partial-flags
kind: example
title: Parabolic induction of the trivial module as flag functions
status: draft
origin: pipeline
pipeline_run: frontier-35-ten-categories
deps: [def-harish-chandra-induction-and-restriction-for-finite-gl-n, def-compositions-partial-flags-and-standard-parabolics, thm-induction-of-the-trivial-representation-is-the-permutation-representation-on-left-cosets, def-trivial-regular-and-permutation-representations, thm-complete-flags-form-gl-n-over-b, def-group-action, def-standard-subgroups-of-gl-n-over-a-finite-field]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "Olivier Dudas and Jean Michel, Lectures on Finite Reductive Groups and Their Representations - Definition 9.2 and Remark 9.3, printed p. 35"
      url: "https://webusers.imj-prg.fr/~jean.michel/papiers/lectures_beijing_2015.pdf"
    - title: "Jay Taylor, Finite Reductive Groups - Definition 5.2, printed p. 42"
      url: "https://pages.uoregon.edu/belias/WARTHOG/DLtheory/TaylorReductiveGroups.pdf"
verification:
  precheck: pass
---

## Example

Let $n\ge1$, let $q$ be a prime power, put $G=\operatorname{GL}_n(\mathbb F_q)$
and let $\alpha$ be a composition of $n$ with standard parabolic
$P_\alpha=L_\alpha\ltimes U_\alpha$
([[def-compositions-partial-flags-and-standard-parabolics]],
[[def-harish-chandra-induction-and-restriction-for-finite-gl-n]]). Write
$\mathbb C$ for the trivial representation of $L_\alpha$, on which every
element of $L_\alpha$ acts as the identity
([[def-trivial-regular-and-permutation-representations]]). Then the
Harish-Chandra induction of the trivial module is the permutation
representation of $G$ on the partial flags of type $\alpha$:
$$R_{L_\alpha}^G(\mathbb C)=\operatorname{Ind}_{P_\alpha}^G\bigl(\operatorname{Inf}_{L_\alpha}^{P_\alpha}\mathbb C\bigr)\;\cong\;\operatorname{Ind}_{P_\alpha}^G\mathbb C\;\cong\;\mathbb C[G/P_\alpha]\;\cong\;\mathbb C[\mathcal F_\alpha],$$
where the middle isomorphism is the induced-trivial isomorphism of
[[thm-induction-of-the-trivial-representation-is-the-permutation-representation-on-left-cosets]]
and the last is the transport of structure along the $G$-equivariant bijection
$gP_\alpha\mapsto g\cdot W_\bullet^{(\alpha)}$ of
[[def-compositions-partial-flags-and-standard-parabolics]]. Under this
identification $R_{L_\alpha}^G(\mathbb C)$ is the space of complex functions on
the type-$\alpha$ partial flags, with
$$(x\cdot f)(F_\bullet)=f(x^{-1}\cdot F_\bullet)\qquad(x\in G).$$
In the two extreme cases this reads $R_G^G(\mathbb C)=\mathbb C$ for
$\alpha=(n)$, where there is a single type-$\alpha$ partial flag, and
$R_T^G(\mathbb C)\cong\mathbb C[G/B]$ for $\alpha=(1^n)$, the permutation
module on the complete flags
([[thm-complete-flags-form-gl-n-over-b]]). Since
$\dim_{\mathbb C}R_{L_\alpha}^G(\mathbb C)=[G:P_\alpha]$, the dimension of this
permutation module is the number of partial flags of type $\alpha$.

## Facts & Assumptions

**Given:** A prime power $q$, an integer $n\ge1$, the group $G=\operatorname{GL}_n(\mathbb F_q)$, and a composition $\alpha$ of $n$.

[F1] The standard parabolic $P_\alpha=L_\alpha\ltimes U_\alpha$ is an internal semidirect product, the projection $\pi:P_\alpha\to L_\alpha$ (with kernel $U_\alpha$) inverts the isomorphism $L_\alpha\to P_\alpha/U_\alpha$, and the inflation of an $L_\alpha$-module $V$ is $V$ with $p\cdot v=\pi(p)\cdot v$; the Harish-Chandra induction is $R_{L_\alpha}^G(V)=\operatorname{Ind}_{P_\alpha}^G(\operatorname{Inf}_{L_\alpha}^{P_\alpha}V)$, and for complex finite-dimensional $V$ one has $\dim_{\mathbb C}R_{L_\alpha}^G(V)=[G:P_\alpha]\dim_{\mathbb C}V$ ([[def-harish-chandra-induction-and-restriction-for-finite-gl-n]], [[def-compositions-partial-flags-and-standard-parabolics]]).

[F2] For a finite group $G$ and a subgroup $H\le G$, inducing the trivial complex representation of $H$ to $G$ gives the permutation representation of $G$ on the left coset set $G/H$: the induced module is identified with the functions on $G/H$, and the action is the left permutation action on cosets ([[thm-induction-of-the-trivial-representation-is-the-permutation-representation-on-left-cosets]]).

[F3] The trivial representation of a group over a field $k$ is $k$ with every group element acting as the identity, and for a finite left $G$-set $X$ the free $k$-module $k^{(X)}$ with $g\cdot e_x=e_{g\cdot x}$ is the permutation representation attached to $X$ ([[def-trivial-regular-and-permutation-representations]]).

[F4] The set $\mathcal F_\alpha$ of partial flags of type $\alpha$ is a $G$-set under $g\cdot F_\bullet=(g(F_0),\dots,g(F_r))$, the standard partial flag $W_\bullet^{(\alpha)}$ has $W_i=V_{d_i}$ and stabiliser $P_\alpha$, and $gP_\alpha\mapsto g\cdot W_\bullet^{(\alpha)}$ is a $G$-equivariant bijection $G/P_\alpha\to\mathcal F_\alpha$; for $\alpha=(n)$ the set $\mathcal F_{(n)}$ has the single element $0\subsetneq V$ ([[def-compositions-partial-flags-and-standard-parabolics]], [[def-group-action]]).

[F5] For $\alpha=(1^n)$ the partial flags of type $\alpha$ are the complete flags of $V=\mathbb F_q^n$, and $gB\mapsto g\cdot V_\bullet$ is a $G$-equivariant bijection from the left cosets $G/B$ onto the complete flags, where $B=P_{(1^n)}$ is the standard Borel subgroup ([[thm-complete-flags-form-gl-n-over-b]], [[def-compositions-partial-flags-and-standard-parabolics]], [[def-standard-subgroups-of-gl-n-over-a-finite-field]]).

## Verification

**Proof technique:** direct.

1.1 The trivial representation $\mathbb C$ of $L_\alpha$ has $\pi(p)\cdot z=z$ for every $p\in P_\alpha$ and $z\in\mathbb C$, because $\mathbb C$ is the trivial $L_\alpha$-module; hence the inflated action of [F1] is $p\cdot z=\pi(p)\cdot z=z$, so the inflation $\operatorname{Inf}_{L_\alpha}^{P_\alpha}\mathbb C$ is the trivial $P_\alpha$-module. [F1, F3]

2.1 By [F2] applied to the subgroup $P_\alpha\le G$, the induction $\operatorname{Ind}_{P_\alpha}^G\mathbb C$ of the trivial $P_\alpha$-module is the permutation representation of $G$ on the left cosets $G/P_\alpha$, so by step 1.1 the Harish-Chandra induction satisfies $R_{L_\alpha}^G(\mathbb C)=\operatorname{Ind}_{P_\alpha}^G(\operatorname{Inf}_{L_\alpha}^{P_\alpha}\mathbb C)\cong\mathbb C[G/P_\alpha]$. [step 1.1, F1, F2]

3.1 The orbit map $gP_\alpha\mapsto g\cdot W_\bullet^{(\alpha)}$ is a $G$-equivariant bijection $G/P_\alpha\to\mathcal F_\alpha$ by [F4]; transporting functions along it defines a linear isomorphism $\Phi:\mathbb C[G/P_\alpha]\to\mathbb C[\mathcal F_\alpha]$ by $\Phi(f)(g\cdot W_\bullet^{(\alpha)}):=f(gP_\alpha)$, which is well defined and bijective because the orbit map is. It is $G$-equivariant: for $x,g\in G$ one has $\Phi(x\cdot f)(g\cdot W_\bullet)=\bigl(x\cdot f\bigr)(gP_\alpha)=f(x^{-1}gP_\alpha)=\Phi(f)((x^{-1}g)\cdot W_\bullet)=\Phi(f)(x^{-1}\cdot(g\cdot W_\bullet))$, using the left-coset action on $G/P_\alpha$ and the action of [F4] on flags; hence $\mathbb C[G/P_\alpha]\cong\mathbb C[\mathcal F_\alpha]$ as $G$-modules, with the action $(x\cdot f)(F_\bullet)=f(x^{-1}\cdot F_\bullet)$. [step 2.1, F2, F3, F4]

4.1 Combining steps 2.1 and 3.1 gives $R_{L_\alpha}^G(\mathbb C)\cong\mathbb C[\mathcal F_\alpha]$: the Harish-Chandra induction of the trivial $L_\alpha$-module is the permutation representation of $G$ on the partial flags of type $\alpha$, the space of complex functions on $\mathcal F_\alpha$ with the action $(x\cdot f)(F_\bullet)=f(x^{-1}\cdot F_\bullet)$. [step 2.1, step 3.1, F3]

5.1 For $\alpha=(n)$ the standard parabolic is $P_{(n)}=G$ with $L_{(n)}=G$ and $U_{(n)}=\{I_n\}$, and by [F4] the set $\mathcal F_{(n)}$ has the single element $0\subsetneq V$, so $R_G^G(\mathbb C)$ is the permutation representation on a one-point set, that is, the trivial $G$-module $\mathbb C$; for $\alpha=(1^n)$ the identification of [F5] gives $\mathbb C[\mathcal F_{(1^n)}]\cong\mathbb C[G/B]$ with $B=P_{(1^n)}$, the permutation module of $G$ on the complete flags. [step 4.1, F4, F5]

6.1 Finally $\dim_{\mathbb C}R_{L_\alpha}^G(\mathbb C)=[G:P_\alpha]\cdot1=[G:P_\alpha]$ by the dimension formula of [F1], and under the bijection of [F4] the index $[G:P_\alpha]$ is the number of partial flags of type $\alpha$; the two extremes of step 5.1 are the cases $\alpha=(n)$, where there is a single type-$\alpha$ flag and the index is $1$, and $\alpha=(1^n)$, where the flags are the complete flags and $R_T^G(\mathbb C)\cong\mathbb C[G/B]$. ∎ [step 4.1, step 5.1, F1, F4]

## Remarks

The example records the trivial case of Harish-Chandra induction on this page:
the induced module is a permutation module, and the fact that the two extreme
compositions give the trivial module and $\mathbb C[G/B]$ matches the boundary
behaviour of the functors. The identification uses the $G$-equivariant
bijection between cosets and flags from
[[def-compositions-partial-flags-and-standard-parabolics]] and the
induced-trivial theorem of
[[thm-induction-of-the-trivial-representation-is-the-permutation-representation-on-left-cosets]];
no character theory is used, so the statement is the natural isomorphism of
$G$-modules on the nose, not merely an equality of composition factors.
