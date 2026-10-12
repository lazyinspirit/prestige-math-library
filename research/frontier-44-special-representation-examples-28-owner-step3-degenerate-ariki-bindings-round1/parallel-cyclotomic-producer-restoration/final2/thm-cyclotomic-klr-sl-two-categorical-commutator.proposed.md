---
id: thm-cyclotomic-klr-sl-two-categorical-commutator
kind: theorem
title: "The categorical $\\mathfrak{sl}_2$ commutator for cyclotomic KLR functors"
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 8
deps: [def-cyclotomic-klr-quotient-at-a-dominant-weight,
       def-cyclotomic-klr-induction-and-restriction-functors,
       def-graded-ring-module-bimodule-and-internal-shift,
       def-quantum-integers-factorials-and-divided-powers-at-q-i,
       lem-cyclotomic-klr-dot-annihilators-and-finite-root-strings,
       lem-generic-klr-induction-and-restriction-mixed-relations,
       thm-cyclotomic-klr-induction-is-projective-on-the-right]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "Seok-Jin Kang and Masaki Kashiwara, Categorification of Highest Weight Modules via Khovanov-Lauda-Rouquier Algebras, arXiv:1102.4677v4"
      url: "https://arxiv.org/pdf/1102.4677v4"
      locator: "Section 5, Theorem 5.2 and its complete proof in Section 5.2: the cyclotomic categorical sl_2 relation with the summands q^{2d_ik} and q^{-2d_i(k+1)}."
    - title: "Ben Webster, Knot Invariants and Higher Representation Theory I, arXiv:1001.2020v9"
      url: "https://arxiv.org/pdf/1001.2020v9"
      locator: "Section 1.4 and Section 2: the sl_2 relations for the cyclotomic functors and the graded bimodule maps realizing them."
---

## Statement

Let $R^\Lambda$ be the cyclotomic KLR algebra of
[[def-cyclotomic-klr-quotient-at-a-dominant-weight]], let
$E^\Lambda_i,F^\Lambda_i$ be the functors of
[[def-cyclotomic-klr-induction-and-restriction-functors]], and read the
composites $E^\Lambda_iF^\Lambda_i$ and $F^\Lambda_iE^\Lambda_i$ as
endofunctors of $\mathrm{Mod}(R^\Lambda(\beta))$ via the weight bookkeeping
fixed there. Put $\lambda:=\Lambda-\beta$ and $q_i:=q^{d_i}$
([[def-quantum-integers-factorials-and-divided-powers-at-q-i]]).

(a) If $\langle h_i,\lambda\rangle\ge0$, there is a natural isomorphism of
endofunctors of $\mathrm{Mod}(R^\Lambda(\beta))$
$$q_i^{-2}F^\Lambda_iE^\Lambda_i\oplus\bigoplus_{k=0}^{\langle h_i,\lambda\rangle-1}q_i^{2k}\mathrm{Id}\;\cong\;E^\Lambda_iF^\Lambda_i.$$

(b) If $\langle h_i,\lambda\rangle\le0$, there is a natural isomorphism of
endofunctors of $\mathrm{Mod}(R^\Lambda(\beta))$
$$q_i^{-2}F^\Lambda_iE^\Lambda_i\;\cong\;E^\Lambda_iF^\Lambda_i\oplus\bigoplus_{k=0}^{-\langle h_i,\lambda\rangle-1}q_i^{-2k-2}\mathrm{Id}.$$

Applied to the object $R^\Lambda(\beta)$ the same computation gives an
isomorphism of graded $R^\Lambda(\beta)$-bimodules obtained from
$F^\Lambda_iE^\Lambda_iR^\Lambda(\beta)$ and
$E^\Lambda_iF^\Lambda_iR^\Lambda(\beta)$ by the displayed summands
([[def-graded-ring-module-bimodule-and-internal-shift]] for the shift
conventions).

## Facts & Assumptions

**Given:** The cyclotomic quotient $R^\Lambda$, a fixed $\beta$, the functors
$E^\Lambda_i,F^\Lambda_i$ and the generic functors $E_i,F_i,\bar F_i$ of
[[lem-generic-klr-induction-and-restriction-mixed-relations]]; put
$A=R^\Lambda(\beta)$, $h=\langle h_i,\Lambda-\beta\rangle$,
$p:=\beta_i$ and $d_i$ the symmetrizer entry.

[F1] The projective comparison of
[[thm-cyclotomic-klr-induction-is-projective-on-the-right]]:
$0\to q^{s}K_1\xrightarrow{P}K_0\to Be\to0$ with
$s=(\alpha_i\mid 2\Lambda-\beta)$ and right $A$-projective $K_0,K_1$, and the
generic same-end/opposite-end corner maps of
[[lem-generic-klr-induction-and-restriction-mixed-relations]] split.

[F2] The dot annihilators of
[[lem-cyclotomic-klr-dot-annihilators-and-finite-root-strings]]: every dot has
a monic scalar-coefficient annihilator in each fixed block, so every relevant
polynomial in the appended dots is subject to monic division.

[F3] The weights: $h=\langle h_i,\Lambda-\beta\rangle$ and
$q_i=q^{d_i}$; shifts are internal shifts of
[[def-graded-ring-module-bimodule-and-internal-shift]] with
$(M\{r\})_m=M_{m-r}$
([[def-quantum-integers-factorials-and-divided-powers-at-q-i]]).

## Proof

**Proof technique:** compute the snake map of the exact comparison square by
monic division, split its cokernel or kernel by the dotted unit columns, and
read the two graded isomorphisms off the snake sequence.

1.1 The comparison square and its snake map. Combine the exact sequence of [F1] with the split generic PBW same-end and opposite-end corner maps; at fixed $\beta$ the resulting exact square has horizontal comparison maps and vertical same-end transfer and opposite-end multiplication maps. Its snake map is $\mathcal A:q^{2d_ih}A[t]\to A[t]$, and one writes $\phi_k=\mathcal A(t^k)$. Put $p=\beta_i$ and let $S(t)=\prod_{\nu_a=i}(t-x_a)^2$, $W(t)=\gamma(-1)^pt^{\lambda_i}\prod_{\nu_a\ne i}Q_{i\nu_a}(t,x_a)$, summed with word idempotents; $S$ and $W$ are central monic of degrees $2p$ and $h+2p$. The actual P/Q identities give $\mathcal A(t^kS)=\gamma^{-1}t^kW$; in the source notation $\kappa=-\tau_{\mathrm{native}}$ the recurrence is $\phi_{k+1}=t\phi_k+E(\psi_k)$, and in positive-native transfer notation it is $\phi_{k+1}=t\phi_k-E(\psi_k^{\mathrm{native}})$, the two conventions not being mixed. [F1, F2]

2.1 Monic division and the positive branch. The recurrence in step 1.1 implies $\mathcal A(at)-\mathcal A(a)t\in A$ for every $a\in A[t]$. Induction on $m$ therefore gives $\deg_t(\mathcal A(af)-\mathcal A(a)f)<m$ whenever $f$ has degree $m$: for $f=tg$, write the difference as $\mathcal A(atg)-\mathcal A(at)g+(\mathcal A(at)-\mathcal A(a)t)g$, and use the degree-$m-1$ case on the first term. Applying this to the central monic $S$ and $a=t^k$, together with $\mathcal A(t^kS)=\gamma^{-1}t^kW$, gives $t^kW=(\gamma\phi_k)S+r_k$ with $\deg_t r_k<2p$. Thus ordinary monic division proves that $\gamma\phi_k$ is precisely the quotient of $t^kW$ by $S$; no $A[t]$-linearity of the snake map is assumed. For $h\ge0$ the quotients have distinct unit leading degrees $h+k$, so $\mathcal A$ is injective with polynomial remainder basis $1,t,\dots,t^{h-1}$; the dotted ordinary-unit columns split its cokernel. The positive snake sequence is $0\to q_i^{-2}F^\Lambda_iE^\Lambda_i\to E^\Lambda_iF^\Lambda_i\to\operatorname{coker}\mathcal A\to0$; the dotted ordinary-unit columns give a section of its last map, hence the natural isomorphism $q_i^{-2}F^\Lambda_iE^\Lambda_i\oplus\bigoplus_{k=0}^{h-1}q_i^{2k}\mathrm{Id}\cong E^\Lambda_iF^\Lambda_i$ of part (a). [step 1.1, F2, F3]

3.1 The negative branch. For $h=-r\le0$, the same division shows $\mathcal A$ is surjective with kernel spanned by $1,t,\dots,t^{r-1}$. The dotted multiplication-counit rows on that kernel are anti-triangular with unit source diagonal $\gamma^{-1}$ (equivalently native diagonal $-\gamma^{-1}$), so their finite recursive inverse splits the kernel; the snake sequence then gives $q_i^{-2}F^\Lambda_iE^\Lambda_i\cong E^\Lambda_iF^\Lambda_i\oplus\bigoplus_{k=0}^{r-1}q_i^{-2k-2}\mathrm{Id}$, which is part (b). [step 1.1, step 2.1, F3]

4.1 Bimodule form and conclusion. Evaluating the natural isomorphisms of steps 2.1 and 3.1 on the object $A=R^\Lambda(\beta)$ and using the internal shift convention of [F3] gives the displayed isomorphism of graded $A$-bimodules; For $i\ne j$ the generic mixed corner map also descends to the cyclotomic quotients. To see this directly, expand the first-strand cyclotomic ideal by the same PBW cosets: besides terms where its generator lies in the source or target rank-$n$ algebra, the only term has the generator fully transferred to the left endpoint and back. In the $(i,j)$ corner that term has the factor $e(i,\beta')a(x_1)e(j,\beta')=0$, since the two endpoint idempotents are orthogonal and commute with the first dot. Thus the corner ideal is exactly the sum of the source and target induced cyclotomic ideals. Quotienting the generic map by these two ideals gives $E_i^{\mathrm{basic}}F_j^{\mathrm{basic}}\cong q^{-(\alpha_i\mid\alpha_j)}F_j^{\mathrm{basic}}E_i^{\mathrm{basic}}$. This endpoint argument concerns unequal colors; the equal-color relation is instead the split snake sequence already proved. Both branches are proved by division and finite recursion, and local nilpotence is not used to guess the summand count. [step 2.1, step 3.1] ∎
