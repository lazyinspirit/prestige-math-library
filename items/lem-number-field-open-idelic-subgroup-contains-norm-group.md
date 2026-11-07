---
id: lem-number-field-open-idelic-subgroup-contains-norm-group
kind: lemma
title: "Every open finite-index idèle-class subgroup contains a finite norm subgroup"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 23
deps:
  - def-idele-class-group-of-a-global-field
  - def-idele-group-of-a-global-field
  - lem-prime-exponent-idelic-congruence-subgroups-are-kummer-norms
  - thm-global-artin-reciprocity-and-norm-index
  - lem-canonical-local-reciprocity-is-compatible-with-field-norms
  - lem-local-cyclic-algebra-invariant-artin-compatibility
  - thm-local-brauer-invariant-for-finite-residue-local-field
  - thm-archimedean-local-reciprocity
  - cor-the-galois-group-of-a-rational-cyclotomic-field
  - thm-multiplicative-group-of-a-finite-field-is-cyclic
  - thm-fundamental-theorem-of-finite-abelian-groups-invariant-factor-form
  - def-axiom-of-choice
  - def-countable-choice
  - def-dependent-choice
justified_by: []
proof_strategy: direct
axiom_use: The original AC, CC and DC hypotheses are preserved. No global existence theorem, norm limitation, global class-formation H2 theorem or new Given is assumed.
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "J. Neukirch, Algebraic Number Theory"
      url: "https://www.math.toronto.edu/~ila/Neukirch_Algebraic_number_theory.pdf"
      locator: "VI §6, proof of Theorem6.1, printed pp.395–396, read in full. Its norm-limitation descent is replaced below by induction on finite-character order and central cyclic towers."
    - title: "J. S. Milne, Class Field Theory, version 4.03"
      url: "https://www.jmilne.org/math/CourseNotes/CFT.pdf"
      locator: "VII Section9, Proposition9.2 and Lemmas9.3–9.4, printed pp.224–226, read in full. The prime Kummer construction is supplied separately; the proof below avoids Lemma9.4 and its norm-limitation premise."
verification: {}
---

## Statement

Assume the Axiom of Choice (AC), Countable Choice (CC), and Dependent Choice (DC). Let $K$ be a number field and let $H$ be an open subgroup of finite index in $C_K=\mathbb A_K^\times/K^\times$. Then there is a finite abelian extension $E/K$ such that $N_{E/K}C_E\subseteq H$.

## Statement references

[[def-idele-class-group-of-a-global-field]]

[[thm-number-field-second-norm-index-inequality]]

[Neukirch, *Algebraic Number Theory*, VI §6](https://www.math.toronto.edu/~ila/Neukirch_Algebraic_number_theory.pdf)

[Milne, *Class Field Theory*, VII §9](https://www.jmilne.org/math/CourseNotes/CFT.pdf)

## Facts & Assumptions

**Given:** The original AC, CC and DC hypotheses; a number field $K$; and an open finite-index subgroup $H\le C_K$ in the unchanged Statement.

[F1] For each given finite abelian extension $E/F$, global Artin reciprocity gives $C_F/N_{E/F}C_E\cong\operatorname{Gal}(E/F)$, with its compatible quotient maps. The topology of ideles and classes is the restricted-product and quotient topology ([[thm-global-artin-reciprocity-and-norm-index]], [[def-idele-class-group-of-a-global-field]], [[def-idele-group-of-a-global-field]]).

[F2] If $\mu_p\subseteq F$, every open subgroup of $C_F$ whose quotient is finite of exponent dividing $p$ is exactly the norm subgroup of a finite abelian extension of exponent dividing $p$ and degree the index. This is the completed S-unit Kummer construction, not a general global existence assumption ([[lem-prime-exponent-idelic-congruence-subgroups-are-kummer-norms]]).

[F3] Distinguished local reciprocity commutes with finite field norms. The invariant of a cyclic algebra is the character value on that local Artin map. The normalized local invariant is valuation followed by the Bockstein and evaluation at arithmetic Frobenius; at real places reciprocity is sign/conjugation and at complex places it is trivial ([[lem-canonical-local-reciprocity-is-compatible-with-field-norms]], [[lem-local-cyclic-algebra-invariant-artin-compatibility]], [[thm-local-brauer-invariant-for-finite-residue-local-field]], [[thm-archimedean-local-reciprocity]]).

[F4] $\operatorname{Gal}(\mathbb Q(\mu_p)/\mathbb Q)=(\mathbb Z/p\mathbb Z)^\times$ is cyclic of order $p-1$. A finite abelian group is a product of finite cyclic groups, whose coordinate characters to $\mathbb Q/\mathbb Z$ separate its elements ([[cor-the-galois-group-of-a-rational-cyclotomic-field]], [[thm-multiplicative-group-of-a-finite-field-is-cyclic]], [[thm-fundamental-theorem-of-finite-abelian-groups-invariant-factor-form]]).

[A1] AC, CC and DC are the unchanged public assumptions and cover the finite-extension/closure data and the hypotheses of [F1]–[F4] ([[def-axiom-of-choice]], [[def-countable-choice]], [[def-dependent-choice]]).

## Proof

**Proof technique:** realize finite characters by prime Kummer theory and induction through central cyclic towers; take the finite compositum for a finite abelian quotient.

1.1 We spell out two functorialities that will be used. Norm transitivity holds on ideles by multiplying finite local field norms, and on classes since principal norms are principal. For a finite extension $L/K$ and a continuous finite-image character $f:G_K\to\mathbb Q/\mathbb Z$, write $f^\mathrm{Art}_K$ for its character on $C_K$ using the Artin map of its finite cyclic fixed field. Then [F3], multiplied over completions, gives $(f|_{G_L})^\mathrm{Art}_L=f^\mathrm{Art}_K\circ N_{L/K}$. This remains true when that fixed field and $L$ meet: use their actual compositum and restriction maps from [F1]. At infinity it follows from the sign norm for $\mathbb C/\mathbb R$. Thus this square does not assume existence of a class field for an arbitrary open subgroup. [F1, F3, A1, given, algebra]

1.2 Artin maps are also natural under field isomorphisms and the resulting transport of completions. Here this follows directly from the canonical normalization in [F3]: a valued-field isomorphism transports the maximal unramified extension, integer valuation, Bockstein cochain maps and arithmetic Frobenius, hence preserves the local invariant. It transports every cyclic algebra with its generator and parameter. The character formula in [F3] therefore gives the same transported local Artin value for every character of each finite abelian local extension; the characters separate its finite abelian Galois group. This proves local naturality. Taking the finite product gives global naturality, including real signs and trivial complex factors. In particular, for a finite abelian $E/L$ and a $K$-embedding $\sigma$ of $L$, the Artin map for $\sigma E/\sigma L$ is the transport of that for $E/L$. [F1, F3, F4, A1, algebra]

1.3 Two finite abelian extensions $E_1,E_2$ of the same number field, in a fixed separable closure, with the same norm subgroup are equal. Indeed let $M=E_1E_2$. Its surjective Artin map has the preimage of $\operatorname{Gal}(M/E_i)$ equal to $N_{E_i/K}C_{E_i}$ by [F1]. Equal preimages under a surjection give equal subgroups and hence equal fixed fields. This is uniqueness for already given extensions and is not global existence. [F1, construct, algebra]

2.1 We record a cyclic descent argument. Let $L/K$ be finite cyclic and let $\chi:C_K\to\mathbb Q/\mathbb Z$ be continuous with finite image. Suppose $\theta=\chi\circ N_{L/K}$ is realized by a cyclic extension $E/L$ with $N_{E/L}C_E=\ker\theta$ and $[E:L]=|\operatorname{im}\theta|$. The norm $N_{L/K}$ is invariant under $\operatorname{Gal}(L/K)$, so $\theta$ and its kernel are invariant. For an extension of any $\sigma\in\operatorname{Gal}(L/K)$ to the fixed separable closure, field norms give $N_{\sigma E/L}C_{\sigma E}=\sigma(N_{E/L}C_E)=\ker\theta$. Uniqueness in step 1.3 gives $\sigma E=E$. All $K$-embeddings of $E$ thus preserve $E$, so $E/K$ is finite Galois. [F1, A1, step 1.1, step 1.3, construct, algebra]

3.1 Identify $\operatorname{Gal}(E/L)$ faithfully with $\operatorname{im}\theta$ by [F1], so that its composite with the Artin map of $L$ is $\theta$. For $g\in\operatorname{Gal}(E/K)$ lying above $\sigma\in\operatorname{Gal}(L/K)$, step 1.2 and $\theta(\sigma a)=\theta(a)$ imply that conjugation by $g$ acts trivially on every Artin value from $C_L$. Those values exhaust $\operatorname{Gal}(E/L)$ by [F1], so this subgroup is central. A finite group with central cyclic subgroup and cyclic quotient is abelian: choose a lift $t$ of a quotient generator; every element is $ht^i$, with all $h$ in the central subgroup, and any two such elements commute. Thus $E/K$ is abelian. Norm transitivity gives $N_{E/K}C_E\subseteq\ker\chi$. By [F1], every subgroup of $C_K$ containing $N_{E/K}C_E$, in particular $\ker\chi$, is the norm of its associated fixed subfield of this already existing abelian $E/K$. [F1, step 1.1, step 1.2, step 2.1, algebra]

4.1 Every continuous character $\chi:C_K\to\mathbb Q/\mathbb Z$ of prime order $p$ has a cyclic norm realization. Put $L=K(\mu_p)$. Restriction to $\mathbb Q(\mu_p)$ embeds $\operatorname{Gal}(L/K)$ in the cyclic group of [F4]; hence $L/K$ is cyclic of degree $d\mid p-1$. The group $C_K/N_{L/K}C_L$ has order $d$ by [F1]. The image of $N_{L/K}C_L$ under $\chi$ therefore has index dividing both $d$ and $p$ in $\operatorname{im}\chi$, so equals the whole order-$p$ image. Thus $\theta=\chi\circ N_{L/K}$ has order $p$. Since $\mu_p\subseteq L$, [F2] supplies a finite abelian $E/L$ with norm kernel $\ker\theta$ and degree $p$; its quotient is cyclic because $C_L/\ker\theta$ is cyclic. Steps 2.1 and 3.1 make $E/K$ abelian and put its norm inside $\ker\chi$. The fixed-subfield construction in step 3.1 then gives a cyclic degree-$p$ extension of $K$ whose norm subgroup is exactly $\ker\chi$. The case $d=1$, in particular $p=2$, is included. [F1, F2, F4, A1, step 2.1, step 3.1, construct, algebra]

5.1 Induct on $r\ge1$ to realize every finite character $\chi$ of order $p^r$ by a cyclic extension whose norm is $\ker\chi$ and whose degree is $p^r$. Step 4.1 starts the induction for every number field. For $r>1$, the character $p^{r-1}\chi$ has order $p$, so choose its cyclic degree-$p$ norm field $L/K$ by step 4.1. Its norm image is $\ker(p^{r-1}\chi)$, whose image under $\chi$ has order exactly $p^{r-1}$. Hence $\theta=\chi\circ N_{L/K}$ has that order. Induction over the number field $L$ supplies a cyclic $E/L$ of degree $p^{r-1}$ and norm $\ker\theta$. Steps 2.1 and 3.1 make $E/K$ abelian and give $N_{E/K}C_E\subseteq\ker\chi$. Both subgroups have index $p^r$: the first by [F1] and $[E:K]=p^r$, the second by the order of $\chi$. They are equal, and $\operatorname{Gal}(E/K)\cong C_K/\ker\chi$ is cyclic. This completes the induction without descending a nonabelian norm subgroup or using norm limitation. [F1, step 2.1, step 3.1, step 4.1, construct, algebra]

6.1 Now $A=C_K/H$ is a finite abelian group. Write it as a finite product of cyclic groups by [F4] and use their coordinate characters to $\mathbb Q/\mathbb Z$. Splitting each into its finitely many primary characters gives continuous characters $\chi_1,\ldots,\chi_t$ of prime-power orders whose kernels intersect exactly in $H$. Step 5.1 supplies finite cyclic extensions $E_i/K$ with $N_{E_i/K}C_{E_i}=\ker\chi_i$. Their finite compositum $E/K$ is abelian. For every $i$, norm transitivity gives $N_{E/K}C_E\subseteq N_{E_i/K}C_{E_i}=\ker\chi_i$. Therefore $N_{E/K}C_E\subseteq H$, exactly as required. If $A$ is trivial, use the empty compositum $E=K$, whose norm is $C_K$. All extensions and characters are finite, and all choices retain the original [A1]. The full original Statement is proved; no global existence or class-formation assertion was used as a premise. [F1, F4, A1, step 1.1, step 5.1, construct, algebra] ∎
