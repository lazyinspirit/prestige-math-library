---
dependency_level: 17
id: lem-local-roots-of-unity-and-hilbert-milnor-bridge
kind: lemma
title: Local roots of unity and the Hilbert map on Milnor K2
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
deps:
- def-axiom-of-choice
- def-dependent-choice
- def-local-artin-reciprocity-map
- def-local-hilbert-symbol-over-field-containing-roots-of-unity
- lem-local-hilbert-symbol-is-well-defined-and-bilinear
- thm-local-hilbert-symbol-nondegenerate-pairing
- thm-local-artin-reciprocity-and-norm-index
- lem-finite-residue-teichmuller-lifts-and-equal-characteristic-laurent-coordinates
- lem-milnor-symbol-anticommutativity-and-repeated-entry-identities
- cor-finite-subgroups-of-units-in-a-domain-are-cyclic
- lem-hensel-factor-lifting-over-a-complete-valued-field
- def-field-norm-and-trace
- def-milnor-k-group-of-a-field
justified_by: []
proof_strategy: direct
axiom_use: Root structure ZF; Hilbert/Artin instantiation under literal AC/DC and
  canonical supplied map/norm data
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
  - title: Fesenko–Vostokov, Local Fields and Their Extensions, Chapter I §§5–6 and
      Chapter IX §4; explicit local reconstruction below
    url: https://ivanfesenko.org/wp-content/uploads/2021/10/vol.pdf
verification: {}
---

## Statement

Assume AC and DC. Let $F$ be a complete discretely valued field with finite residue field $k$ of cardinality $q$ and characteristic $p$. Its torsion group $\mu(F)\subset F^\times$ is finite cyclic of order $m=p^r(q-1)$, where $r=0$ if $\operatorname{char}F=p$, and in characteristic zero $r$ is the largest integer for which a primitive $p^r$th root belongs to $F$. For every $n\ge1$ prime to $\operatorname{char}F$, with $\mu_n\subset F$, use the distinguished canonical local Artin map and its exact finite norm kernels. The literal Hilbert symbol
$$(a,b)_{F,n}=\operatorname{rec}_F(a)(b^{1/n})/b^{1/n}$$
is Steinberg and induces a surjection $H_n:K_2^M(F)\to\mu_n$. Its surjectivity is independent of any tame-symbol orientation formula. These claims use the full supplied canonical-map/norm hypotheses; Frobenius normalization alone is not substituted for them.

## Statement references

[[def-axiom-of-choice]]

[[def-dependent-choice]]

[[def-local-artin-reciprocity-map]]

[[def-local-hilbert-symbol-over-field-containing-roots-of-unity]]

[[lem-local-hilbert-symbol-is-well-defined-and-bilinear]]

[[thm-local-hilbert-symbol-nondegenerate-pairing]]

[[thm-local-artin-reciprocity-and-norm-index]]

[[lem-finite-residue-teichmuller-lifts-and-equal-characteristic-laurent-coordinates]]

[[lem-milnor-symbol-anticommutativity-and-repeated-entry-identities]]

[[cor-finite-subgroups-of-units-in-a-domain-are-cyclic]]

[[lem-hensel-factor-lifting-over-a-complete-valued-field]]

## Facts & Assumptions

**Given:** Exactly the data in the Statement.

[F1] Finite residue elements have their unique multiplicative lifts; the nonzero lifts form $\mu_{q-1}$. [[lem-finite-residue-teichmuller-lifts-and-equal-characteristic-laurent-coordinates]]

[F2] Simple residue roots lift uniquely by Hensel. [[lem-hensel-factor-lifting-over-a-complete-valued-field]]

[F3] The canonical local Artin map is the distinguished finite-character map, and under AC/DC its finite abelian quotient kernels are the field norm groups. [[def-local-artin-reciprocity-map]] [[thm-local-artin-reciprocity-and-norm-index]]

[F4] With the supplied closure and map, the Hilbert symbol is well-defined, bilinear and kills $n$th powers in both arguments. [[def-local-hilbert-symbol-over-field-containing-roots-of-unity]] [[lem-local-hilbert-symbol-is-well-defined-and-bilinear]]

[F5] Under AC/DC and exactly the finite Artin norm-kernel hypotheses in [F3], the Hilbert pairing has trivial left and right radicals. Its full proof, including the finite Hom-cardinality calculation, is a supplier in this same reconstruction packet. [[thm-local-hilbert-symbol-nondegenerate-pairing]]

[F8] The field norm is the determinant of the multiplication operator. [[def-field-norm-and-trace]]

[F6] A finite subgroup of the units of a field is cyclic. [[cor-finite-subgroups-of-units-in-a-domain-are-cyclic]]

[F7] Milnor symbols have the multilinear Steinberg presentation and its anticommutativity identities. [[def-milnor-k-group-of-a-field]] [[lem-milnor-symbol-anticommutativity-and-repeated-entry-identities]]

[A1] AC and DC are retained for instantiating the actual canonical Artin/norm and Hilbert nondegeneracy branches; no choice-free existence claim is made. [[def-axiom-of-choice]] [[def-dependent-choice]]

## Proof

**Given:** The data above.

1.1 Every torsion element has valuation zero. A prime-to-$p$ torsion element in $1+\mathfrak m_F$ is $1$, since it and $1$ would be two lifts of the simple residue root $1$ of $T^d-1$ for $p\nmid d$, contrary to [F2]. Reduction is therefore injective on prime-to-$p$ torsion. Its image lies in $k^\times$, and [F1] supplies every element of that group, so this torsion is exactly $\mu_{q-1}$. In characteristic $p$ the identity $T^{p^a}-1=(T-1)^{p^a}$ excludes all nontrivial $p$-power torsion. [F1, F2, given, algebra]

1.2 Fix $n$ as in the Statement and $b\ne0,1$. Put $L=F(\beta)$ with $\beta^n=b$. Its Galois group injects into the cyclic group $\mu_n$ by its action on $\beta$, so it has order $d\mid n$ and image $\mu_d$. Hence $c=\beta^d\in F$, and the minimal polynomial is $T^d-c$. Choose finitely many representatives $\eta$ of $\mu_n/\mu_d$. Their $d$th powers run through $\mu_{n/d}$. The multiplication operator of $\beta$ has companion characteristic polynomial $T^d-c$; consequently $\det(I-\eta m_\beta)=\eta^d\det(\eta^{-1}I-m_\beta)=1-\eta^dc$. Thus the determinant norm in [F8] gives $$N_{L/F}(1-\eta\beta)=1-\eta^d c,\qquad N_{L/F}\!\left(\prod_\eta(1-\eta\beta)\right)=\prod_{\xi\in\mu_{n/d}}(1-\xi c)=1-b.$$ None of these factors is zero, since that would imply $b=1$. This also covers $d=1$ and $n=1$. [F3, F4, F6, F8, given, construct, algebra]

2.1 In characteristic zero put $e=v_F(p)$. For a primitive $p^a$th root $\zeta$, reduction gives $\bar\zeta=1$. If $1\le j\le p^a$ and $p\nmid j$, then $(1-\zeta^j)/(1-\zeta)=1+\zeta+\cdots+\zeta^{j-1}$ has nonzero residue $j$, hence is a unit. Factoring the polynomial $1+T^{p^{a-1}}+\cdots+T^{(p-1)p^{a-1}}$ into its primitive-root linear factors and evaluating at $1$ gives $\prod_{p\nmid j}(1-\zeta^j)=p$. Consequently $e=p^{a-1}(p-1)v_F(1-\zeta)\ge p^{a-1}(p-1)$. Only finitely many $a$ satisfy this. Choose the largest $r$, or $r=0$ if none. Any torsion element splits into its prime-to-$p$ and $p$-power parts by Bezout, so its order divides $(q-1)p^r$. There are finitely many such roots, since they satisfy one polynomial of that degree; they form a cyclic group by [F6]. The subgroup supplied by [F1] and a primitive $p^r$th root already has that full order, because the orders are coprime. This proves the stated torsion structure in both characteristics, including $p=2$ and $m=1$. [F1, F2, F6, step 1.1, construct, algebra]

2.2 The exact finite Artin norm kernel in [F3] shows that $\operatorname{rec}_F(1-b)$ acts trivially on $L$. Thus $(1-b,b)_{F,n}=1$. Substituting $b=1-a$ proves the Steinberg relation on every admissible pair $a,1-a$. Bilinearity from [F4] therefore descends to a homomorphism $H_n$ on the Milnor tensor quotient [F7]. This step uses the actual norm-kernel theorem, not an unqualified inference from the supplied-data cup identity. [A1, F3, F4, F7, step 1.2, algebra]

3.1 The class of a uniformizer in $F^\times/F^{\times n}$ has exact order $n$: its $j$th power can be an $n$th power only if $n$ divides its valuation $j$. By left nondegeneracy [F5], its associated character into $\mu_n$ consequently has exact order $n$. The order of a character with image in a finite cyclic group equals the order of its image: that image is cyclic, and is killed by an integer exactly when its generator is. Therefore this character has image all of $\mu_n$, proving surjectivity of $H_n$. For $n=1$ both groups in the pairing are trivial and the same conclusion holds. The AC/DC and canonical supplied-map premises of [F3]–[F5] are precisely retained. [A1, F3, F4, F5, F6, step 2.2, algebra] ∎

