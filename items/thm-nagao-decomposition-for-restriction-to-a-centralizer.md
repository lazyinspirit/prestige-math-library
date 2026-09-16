---
id: thm-nagao-decomposition-for-restriction-to-a-centralizer
kind: theorem
title: Nagao decomposition for restriction to a centralizer
status: published
origin: pipeline
deps: [lem-block-idempotents-lift-uniquely-from-kh-to-oh, def-relative-projectivity-and-vertices-for-og-lattices, thm-krull-schmidt-for-og-lattices, lem-integral-mackey-and-higman-for-og-lattices, def-induced-block-from-a-subgroup, lem-block-induction-exists-under-centralizer-containment, lem-block-centre-locality-and-trace-ideal-sums, cor-normal-p-core-lies-in-every-block-defect-group, def-axiom-of-choice]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: 2026-09-14
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
sources:
  references:
    - title: "Craven, The Brauer Correspondence, Theorems 2.17–2.18 and sections 3.1–3.3, pp. 26–36"
      url: "https://web.mat.bham.ac.uk/D.A.Craven/docs/theses/2004diss.pdf"
    - title: "Aschbacher–Kessar–Oliver, Fusion Systems in Algebra and Topology, proof of Theorem 5.4, pp. 276–277"
      url: "https://www.math.univ-paris13.fr/~bobol/ako.pdf"
---

## Statement

Assume the Axiom of Choice. Let $(K,\mathcal O,k)$ be a splitting
$p$-modular system for a finite group $G$. Let $B$ be a block of $kG$, let
$\widehat B$ denote its block-idempotent lift in $\mathcal O G$, and let $D$
be a $p$-subgroup such that
$$  D C_G(D)\leq H\leq N_G(D).$$
If $M$ is a finite-free $\mathcal O G$-lattice with $\widehat B M=M$, then
there is an $\mathcal O H$-decomposition
$$  \operatorname{Res}_H^G M=M_{\mathrm{corr}}\oplus M_{\mathrm{err}}$$
with the following properties.

1. Every indecomposable summand of $M_{\mathrm{corr}}$ belongs to the lift
   $\widehat c$ of a block $c$ of $kH$ satisfying $c^G=B$.
2. Every indecomposable summand of $M_{\mathrm{err}}$ has a vertex that does
   not contain $D$ (indeed, no vertex of such a summand contains $D$).

Either displayed summand may be zero.

## Facts & Assumptions

**Given:** AC and the system, groups, blocks, lift, and lattice in the Statement.

[F1] Block idempotents have unique central lifts to integral group algebras ([[lem-block-idempotents-lift-uniquely-from-kh-to-oh]]).

[F2] Every finite-rank $\mathcal O H$-lattice has a finite Krull--Schmidt decomposition, and an indecomposable has local endomorphism ring ([[thm-krull-schmidt-for-og-lattices]]).

[F3] Integral relative traces satisfy Higman's criterion, and a vertex of an indecomposable relatively $R$-projective lattice is contained in an $H$-conjugate of $R$ ([[lem-integral-mackey-and-higman-for-og-lattices]] and [[def-relative-projectivity-and-vertices-for-og-lattices]]).

[F4] The center of a modular block is local ([[lem-block-centre-locality-and-trace-ideal-sums]]).

[F5] Block induction is the unique restriction-summand block and exists under centralizer containment ([[def-induced-block-from-a-subgroup]] and [[lem-block-induction-exists-under-centralizer-containment]]).

[F6] A normal $p$-subgroup lies in every block defect group ([[cor-normal-p-core-lies-in-every-block-defect-group]]).

[F7] AC is available ([[def-axiom-of-choice]]) and discharges the inherited published contracts in F4–F6. All new sums and decompositions below are finite.

## Proof

1.1 Since $H\leq N_G(D)$, the group $D$ is normal in $H$. Hence $D\leq O_p(H)$, and F6 shows that every defect group $Q$ of every block $c$ of $kH$ contains $D$. It follows that $$ C_G(Q)\leq C_G(D)\leq H. $$ Thus F5 defines $c^G$ for every block $c$ of $kH$. [F5, F6, F7]

1.2 We record the block corner that controls an error component. Write $b$ for the idempotent of the global block $B$, and let $\pi_H:kG\to kH$ delete coefficients outside $H$. For a block $c$ of $kH$, the maps $$ kHc\hookrightarrow kG, \qquad a\longmapsto c\pi_H(a):kG\longrightarrow kHc $$ split the identity $H$-double-coset copy of the block bimodule $kHc$. The corner of left multiplication by $b$ on this copy is left multiplication by $c\pi_H(b)$. If that corner were a unit in $\operatorname{End}_{H\times H}(kHc)=Z(kHc)$, normalizing the second map by its inverse would split $kHc$ from the restriction of the global block $kGb$. By F5 this would imply $c^G=B$. Therefore, when $c^G\ne B$, the element $c\pi_H(b)$ is a nonunit of the local algebra $Z(kHc)$ and hence is nilpotent. [F4, F5]

1.3 The coefficients of the central element $\widehat B$ are constant on $G$-conjugacy classes, hence on $H$-conjugacy classes. The complement of $H$ in $G$ is $H$-conjugation invariant, so for suitable coefficients $a_x\in\mathcal O$ and representatives $x$ of its finitely many $H$-classes, $$ \widehat B-\pi_H(\widehat B) =\sum_{x\in (G\setminus H)/H\text{-conj}} a_x\operatorname{Tr}_{C_H(x)}^H(x). $$ Here the trace is for the conjugation action: its summands are exactly the elements of the $H$-class of $x$. Moreover, $$D\not\leq C_H(x),$$ because the opposite containment would put $x$ in $C_G(D)\leq H$. [given, algebra]

2.1 Let $\widehat c$ denote the lift of $c$. The lifts are pairwise orthogonal and sum to $1$: their products and the difference between their sum and $1$ are central idempotents reducing respectively to $0$ and $0$, so F1's uniqueness forces those idempotents to vanish. Consequently $$ M=\bigoplus_c\widehat cM. $$ Define $$ M_{\mathrm{corr}}= \bigoplus_{c:\,c^G=B}\widehat cM, \qquad M_{\mathrm{err}}= \bigoplus_{c:\,c^G\ne B}\widehat cM. $$ F2 decomposes each component into indecomposables, and the first asserted property follows directly from the definition. [F1, F2, step 1.1]

2.2 Let $U$ be an indecomposable summand of $\widehat cM$ for a block $c$ with $c^G\ne B$, and choose $H$-linear split maps $i:U\to M$ and $r:M\to U$. Put $E=\operatorname{End}_{\mathcal OH}(U)$, which is local by F2. Integral coefficient truncation $\pi_H:\mathcal OG\to\mathcal OH$ commutes with reduction. Thus step 1.2 shows that the reduction of $$ \widehat c\,\pi_H(\widehat B) $$ is nilpotent. Some power of this element therefore belongs to $\mathfrak m\mathcal OH$, where $\mathfrak m$ is the maximal ideal of $\mathcal O$. Since $\widehat c$ acts as the identity on $U$ and the central element $\pi_H(\widehat B)$ commutes with the $H$-projection $ir$, it follows that $$ s=r\,\pi_H(\widehat B)i\in E $$ has a power in $\mathfrak mE$. Such a power cannot be a unit, so $s$ is a nonunit and belongs to $J(E)$. [F1, F2, step 1.2]

3.1 The equality $\widehat BM=M$ and the $H$-linearity of $i,r$ now give inside $E$ $$ 1_U=s+ \sum_{x\in (G\setminus H)/H\text{-conj}} \operatorname{Tr}_{C_H(x)}^H \bigl(a_x r x i\bigr). $$ Indeed, $a_xrxi$ is $C_H(x)$-linear, and taking the $H$-linear corner commutes with each finite relative trace. The first term lies in $J(E)$ by step 2.2. If every displayed trace term were a nonunit, their finite sum would also lie in the maximal ideal $J(E)$, contradicting the equality. Hence one trace term is a unit. For $\beta\in E$ and any $C_H(x)$-endomorphism $\alpha$ of $U$, one has $\beta\operatorname{Tr}_{C_H(x)}^H(\alpha)=\operatorname{Tr}_{C_H(x)}^H(\beta\alpha)$ and $\operatorname{Tr}_{C_H(x)}^H(\alpha)\beta=\operatorname{Tr}_{C_H(x)}^H(\alpha\beta)$. Thus the image of this relative trace is a two-sided ideal of $E$; since it contains a unit, it contains $1_U$. Higman's criterion makes $U$ relatively $C_H(x)$-projective for the corresponding $x$. [F2, F3, F7, step 2.2, step 1.3]

4.1 Let $P$ be any vertex of $U$. F3 gives $P\leq hC_H(x)h^{-1}$ for some $h\in H$. Were $D\leq P$, normality of $D$ in $H$ would imply $$ D=h^{-1}Dh\leq C_H(x), $$ contrary to step 1.3. Thus $D\not\leq P$, proving the second property. If $D=1$, the hypotheses force $H=G$, so the outside-class sum is empty and all error components are zero; if $M=0$, both conclusions are vacuous. These also cover all boundary cases without an empty-sum inference. [F3, step 2.1, step 1.3, step 3.1] ∎
