---
id: lem-prime-exponent-idelic-congruence-subgroups-are-kummer-norms
kind: lemma
title: Prime-exponent idele congruence quotients are Kummer norm quotients
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 22
deps:
  - def-idele-class-group-of-a-global-field
  - def-idele-group-of-a-global-field
  - thm-global-artin-reciprocity-and-norm-index
  - thm-s-unit-theorem
  - thm-finiteness-of-the-number-field-class-group
  - thm-kummer-correspondence
  - thm-kummer-pairing-is-perfect
  - thm-local-artin-reciprocity-and-norm-index
  - lem-unramified-local-unit-norms-and-cohomology
  - lem-hensel-factor-lifting-over-a-complete-valued-field
  - thm-finite-unramified-local-extensions-classified-by-residue-extensions
  - thm-product-formula-for-number-fields
  - def-axiom-of-choice
  - def-countable-choice
  - def-dependent-choice
proof_strategy: direct
axiom_use: The AC, CC and DC hypotheses are exactly those of the global/local reciprocity and S-unit suppliers; local norm preimages are chosen under AC. No global existence, norm limitation or global class-formation H2 theorem is assumed.
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: J. S. Milne, Class Field Theory, version 4.03
      url: https://www.jmilne.org/math/CourseNotes/CFT.pdf
      locator: VII Section9, Proposition9.2 and Lemma9.3, printed pp.224–225, read in full. The local power-index and global power-detection calculations are supplied explicitly below.
---

## Statement

Assume AC, Countable Choice and Dependent Choice. Let $p$ be a rational prime and let $K$ be a number field containing $\mu_p$. Let $S$ be a finite set of places containing the archimedean places, all places above $p$, and finite places whose ideal classes generate the ideal class group. Put
$$U_S=\{a\in K^\times:v(a)=0\text{ at every finite }v\notin S\},\qquad L=K(U_S^{1/p}),$$
and let $E_S\subseteq\mathbb A_K^\times$ have local factors $K_v^{\times p}$ for $v\in S$ and $\mathcal O_v^\times$ otherwise. Then $L/K$ is finite abelian and
$$K^\times E_S=K^\times N_{L/K}\mathbb A_L^\times.$$
Consequently every open finite-index subgroup $H\le C_K$ with $pC_K\subseteq H$ is the norm group of a finite abelian extension of exponent dividing $p$. Its extension can be chosen inside a fixed separable closure and has degree $[C_K:H]$.

## Facts & Assumptions

**Given:** The original AC/CC/DC hypotheses, the prime $p$, the number field $K$ containing $\mu_p$, and the finite set $S$ in the Statement.

[F1] The finite abelian global Artin map induces $C_F/N_{M/F}C_M\cong\operatorname{Gal}(M/F)$, with quotient compatibility, for every given finite abelian number-field extension. The idele topology is the restricted-product topology ([[thm-global-artin-reciprocity-and-norm-index]], [[def-idele-class-group-of-a-global-field]], [[def-idele-group-of-a-global-field]]).

[F2] The class group is finite. The $S$-unit group has finite cyclic torsion $\mu(K)$ and free rank $|S|-1$, counting every archimedean place once. Kummer theory over a field containing $\mu_p$ identifies the radical quotient with the character group of the Galois group of its finite exponent-$p$ extension ([[thm-finiteness-of-the-number-field-class-group]], [[thm-s-unit-theorem]], [[thm-kummer-correspondence]], [[thm-kummer-pairing-is-perfect]]).

[F3] Local reciprocity identifies the finite abelian norm quotient with the local Galois group. Units in a finite unramified local extension have surjective norm. Coprime Hensel lifting and finite unramified extensions lift finite residue-field splitting extensions ([[thm-local-artin-reciprocity-and-norm-index]], [[lem-unramified-local-unit-norms-and-cohomology]], [[lem-hensel-factor-lifting-over-a-complete-valued-field]], [[thm-finite-unramified-local-extensions-classified-by-residue-extensions]]).

[F4] With normalized absolute values, $\prod_v|a|_v=1$ for $a\in K^\times$ ([[thm-product-formula-for-number-fields]]).

[A1] AC, CC and DC are the literal assumptions of the cited global/local constructions and permit the local norm preimages used below ([[def-axiom-of-choice]], [[def-countable-choice]], [[def-dependent-choice]]).

## Proof

**Proof technique:** finite local power indices, S-unit Kummer degree, and comparison with the already supplied Artin norm index.

1.1 Let $B/\mathbb Q_\ell$ be finite with residue size $q$, valuation $v$, units $U$ and uniformizer $\pi$. Put $e=v(p)$ and choose $m>e/(p-1)$. The map $z\mapsto(1+z)^p-1$ sends $\pi^m\mathcal O_B$ bijectively onto $\pi^{m+e}\mathcal O_B$. For a prescribed $b$ in the latter ideal solve $z=(b-\sum_{j=2}^p\binom pjz^j)/p$ by iteration from zero: its nonlinear differences have valuation gain at least $m$ for $j<p$ and $(p-1)m-e>0$ for $j=p$. Completeness gives its unique fixed point. Hence $U_m^p=U_{m+e}$ and $U_m$ has no nonidentity $p$-torsion. The map $U/U_m\to U^p/U_m^p$ has kernel $\mu_p(B)U_m/U_m$: if $u^p=z^p$ for $z\in U_m$, then $u/z\in\mu_p(B)$. Counting the finite quotients gives $[U:U^p]=|\mu_p(B)|q^e$, and therefore $[B^\times:B^{\times p}]=p|\mu_p(B)|/|p|_B$. For $B=\mathbb R,\mathbb C$ the same formula follows from signs and complex roots, using $|p|_B=p,p^2$. In every completion of the given $K$, $|\mu_p(K_v)|=p$. [given, construct, algebra]

1.2 Put $I_S=\prod_{v\in S}K_v^\times\times\prod_{v\notin S}\mathcal O_v^\times$ and $s=|S|$. The class-group generators in $S$ give $\mathbb A_K^\times=K^\times I_S$: for an idele, adjust its finite valuation divisor by a principal divisor so that its ideal class is represented on $S$. By [F2], $|U_S/U_S^p|=p^s$, since the free rank is $s-1$ and the finite cyclic torsion contains $\mu_p$. Also $U_S\cap K^{\times p}=U_S^p$, since valuations outside $S$ of a $p$th root are zero. Thus [F2] makes $L/K$ finite abelian of degree $p^s$. Outside $S$, its local extensions are unramified: for an $S$-unit $u$, $T^p-\bar u$ has simple roots in a finite residue-field splitting extension, and [F3] lifts them to an unramified extension; use a finite generating list of $U_S/U_S^p$. [F2, F3, A1, given, construct, algebra]

2.1 We first identify a possible kernel in the index count. If $a\in U_S$ is a $p$th power in every $K_v$ for $v\in S$, let $M=K(a^{1/p})$. This is a given finite abelian extension by [F2]. It splits over each $v\in S$, so all $K_v^\times$ are local norms there, and is unramified outside $S$ by step 1.2, so all outside units are norms by [F3]. Choosing local preimages (unit preimages outside $S$) gives $I_S\subseteq N_{M/K}\mathbb A_M^\times$. Since $K^\times I_S=\mathbb A_K^\times$, [F1] says its norm quotient is trivial, hence $[M:K]=1$. Thus $a\in K^{\times p}$, and then $a\in U_S^p$. This proves $U_S\cap E_S=U_S^p$; the reverse inclusion is immediate. [F1, F2, F3, A1, step 1.2, construct, algebra]

2.2 Every local norm quotient for $L/K$ has exponent dividing $p$ by [F2] and [F3]. Thus at $v\in S$ it contains $K_v^{\times p}$ in its norm subgroup; outside $S$, units are norms by step 1.2. Choose the local norm preimages to obtain $E_S\subseteq N_{L/K}\mathbb A_L^\times$. Finite local preimages and unit preimages elsewhere form an idele by the restricted-product definition; no inverse limit of choices is asserted beyond [A1]. [F2, F3, A1, step 1.2, construct]

3.1 Step 1.1 and [F4] give $[I_S:E_S]=\prod_{v\in S}p^2/|p|_v=p^{2s}$, since $S$ contains all places where $|p|_v\ne1$. The quotient homomorphism $I_S/E_S\to K^\times I_S/K^\times E_S$ has kernel $U_S/(U_S\cap E_S)=U_S/U_S^p$, of order $p^s$ by steps 1.2 and 2.1. Therefore $[\mathbb A_K^\times:K^\times E_S]=p^s$. On the other hand [F1] and step 1.2 give $[\mathbb A_K^\times:K^\times N_{L/K}\mathbb A_L^\times]=[L:K]=p^s$. The inclusion from step 2.2 and equality of these finite indices prove the asserted equality. [F1, F4, step 1.1, step 1.2, step 2.1, step 2.2, algebra]

4.1 Finally let $H\le C_K$ be open finite-index and contain $pC_K$, and let $J$ be its inverse image in the ideles. Openness gives a finite set $S$ outside which the full unit product is contained in $J$; enlarge it by infinity, the primes above $p$, and class-group generators. Since $\mathbb A_K^{\times p}\subseteq J$, each finite tuple of $p$th powers on $S$, extended by units outside, lies in $J$. Hence $E_S\subseteq J$, and step 3.1 gives $N_{L/K}C_L\subseteq H$. Under the surjective Artin isomorphism of [F1], $H/N_{L/K}C_L$ is a subgroup $D$ of $\operatorname{Gal}(L/K)$. Its fixed field $E$ has $N_{E/K}C_E=H$: restriction of the Artin map to $E$ has kernel the preimage of $D$, by the quotient compatibility in [F1]. The degree is $[C_K:H]$ and the Galois exponent divides $p$. This proves the final clause without a global existence input. [F1, F2, A1, step 3.1, construct, algebra] ∎
