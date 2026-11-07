---
dependency_level: 12
id: lem-function-field-discrete-idele-cohomology-and-local-invariants
kind: lemma
title: Discrete idelic cohomology, finite descent and actual local invariant coordinates
deps:
- def-global-idele-class-module-for-galois-group
- lem-function-field-constant-class-local-invariant-comparison
- def-global-field
- thm-curves-function-fields-equivalence
- thm-local-ring-smooth-curve-dvr
- def-completion-of-a-global-field-at-a-place
- thm-global-field-completion-tensor-product-decomposition
- thm-finite-galois-extension-characterizations
- thm-fundamental-theorem-of-finite-galois-theory
- thm-absolute-galois-restriction-to-finite-galois-subextensions-is-surjective
- thm-shapiro-lemma-for-group-cohomology
- thm-projective-comparison-map-exists
- thm-projective-comparison-maps-are-unique-up-to-chain-homotopy
- thm-primitive-element-theorem-for-finite-separable-extensions
- thm-global-field-element-integral-at-all-but-finitely-many-places
- def-discriminant-of-a-monic-polynomial
- thm-discriminant-root-formula-and-repeated-root-criterion
- lem-hensel-factor-lifting-over-a-complete-valued-field
- thm-valuation-ring-is-integrally-closed
- thm-finite-extension-local-degree-equals-ramification-index-times-residue-degree
- thm-hilbert-90-for-finite-galois-extension
- lem-unramified-local-unit-norms-and-cohomology
- thm-local-class-formation-for-finite-residue-local-field
- lem-relative-invariant-for-class-formations
- cor-local-brauer-invariant-under-choice
- lem-local-invariant-restriction-scaling
- lem-finite-galois-obstruction-brauer-cohomology-comparison
- thm-continuous-profinite-cohomology-as-direct-limit-of-finite-quotients
- thm-multiplicative-group-of-a-finite-field-is-cyclic
- thm-extensions-of-finite-fields-are-galois-with-cyclic-frobenius-group
- thm-finite-unramified-local-extensions-classified-by-residue-extensions
- def-axiom-of-choice
- def-dependent-choice
- thm-choice-implies-dependent-implies-countable-choice
provenance:
  statement: ai-altered
  proof: ai-altered
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
axiom_use: AC, Countable Choice and DC exactly. AC is used for product primitives and field
  embeddings; ramified unit positive vanishing is never asserted. Actual discrete stage maps,
  bar localization, constant denominator exhaustion and normalized restriction maps are proved.
  No local-global completion cofinality or global CFT theorem is imported.
sources:
  references:
  - title: J. S. Milne, Arithmetic Duality Theorems, second edition; locally reconstructed intermediates
    url: https://www.jmilne.org/math/Books/ADTnot.pdf
    locator: Appendix A.8, printed132–133, full proof read; Milne CFT VII2 Propositions2.2–2.6
      and norm calculation, printed203–207, full actual proofs read. Number-field finite-idelic
      methods are adapted explicitly to function fields, and the omitted absolute-local comparison
      is replaced by constant-extension denominator exhaustion.
  - title: J. S. Milne, Class Field Theory, version4.03
    url: https://www.jmilne.org/math/CourseNotes/CFT.pdf
    locator: ChapterVII2 Propositions2.2–2.6, printed203–207, full relevant finite-idelic/norm
      proofs read; actual local/absolute bridges are reconstructed here, not imported.
verification: {}
proof_strategy: direct
---

## Statement

Assume AC, Countable Choice and DC. Let $F$ be a global function field with
its full finite constant field, fix $F_s$, and let
$J=\varinjlim_{T/F\subset F_s}\mathbb A_T^\times$ and
$C=\varinjlim_{T/F\subset F_s}C_T$ be the discrete modules with
extension-of-idèles maps and Galois transport. Their stage maps are injective.
For every finite intermediate $E/F$ in $F_s$,
$$J^{G_E}=\mathbb A_E^\times,\qquad C^{G_E}=C_E,\qquad H^1_{\mathrm{cts}}(G_E,J)=0,\qquad H^2_{\mathrm{cts}}(G_E,J)\xrightarrow{\sim}\bigoplus_{v\in E^{(1)}}\mathbb Q/\mathbb Z.$$
The degree-two coordinates are the actual normalized local multiplicative
invariants, equivalently the local classical Brauer invariants through the
standard comparison. The map from $H^2(G_E,F_s^\times)$ is the actual
Brauer localization row. For finite $E'/E$ in $F_s$, restriction sends its $v$
coordinate to $[E'_w:E_v]$ times that coordinate at each $w\mid v$;
hence the sum scales by $[E':E]$. In particular, for finite Galois $T/E$ in $F_s$,
the natural map $C_E\to C_T^{\operatorname{Gal}(T/E)}$ is an isomorphism.
No rational-place hypothesis is imposed.

## Statement references

[[def-global-idele-class-module-for-galois-group]]

[[lem-function-field-constant-class-local-invariant-comparison]]

## Facts & Assumptions

**Given:** The original choices, fields and actual discrete direct-limit
modules in the Statement. Every place here is nonarchimedean.

[F1] The actual module definition supplies extension maps, their transport
action and $1\to F_s^\times\to J\to C\to1$. Global function fields
have their exact finite constants and, over that perfect relatively closed
base, a smooth proper geometrically integral model. Closed-point local
rings are DVRs and their metric completions preserve residue and value group.
[[def-global-idele-class-module-for-galois-group]] [[def-global-field]]
[[thm-curves-function-fields-equivalence]]
[[thm-local-ring-smooth-curve-dvr]]
[[def-completion-of-a-global-field-at-a-place]]

[F2] The actual topological tensor-completion isomorphism is
$T\otimes_EE_v=\prod_{w\mid v}T_w$ for every finite separable global
extension. Finite Galois correspondence and the automorphism-count criterion
apply to these finite fields. Under AC the absolute finite restriction map
is onto. [[thm-global-field-completion-tensor-product-decomposition]]
[[thm-finite-galois-extension-characterizations]]
[[thm-fundamental-theorem-of-finite-galois-theory]]
[[thm-absolute-galois-restriction-to-finite-galois-subextensions-is-surjective]]

[F3] The actual AC Shapiro proof is Hom-adjunction on a restricted free
bar resolution. Its comparison maps and homotopies exist under DC.
[[thm-shapiro-lemma-for-group-cohomology]]
[[thm-projective-comparison-map-exists]]
[[thm-projective-comparison-maps-are-unique-up-to-chain-homotopy]]

[F4] A finite separable extension has a primitive element. Global-field
elements are integral at all but finitely many places under AC; a monic
separable polynomial has nonzero discriminant. Squarefree residue factors
lift by Hensel, valuation rings are integrally closed, and finite local
degree is $ef$ under Countable Choice.
[[thm-primitive-element-theorem-for-finite-separable-extensions]]
[[thm-global-field-element-integral-at-all-but-finitely-many-places]]
[[def-discriminant-of-a-monic-polynomial]]
[[thm-discriminant-root-formula-and-repeated-root-criterion]]
[[lem-hensel-factor-lifting-over-a-complete-valued-field]]
[[thm-valuation-ring-is-integrally-closed]]
[[thm-finite-extension-local-degree-equals-ramification-index-times-residue-degree]]

[F5] Finite Hilbert90 kills local and global multiplicative $H^1$. At a
finite UNRAMIFIED complete finite-residue extension the unit module has
zero positive cohomology. Local class formation and its actual relative
invariant identify $H^2(D,T_w^\times)$ with $(1/|D|)\mathbb Z/\mathbb Z$
inside the normalized absolute invariant.
[[thm-hilbert-90-for-finite-galois-extension]]
[[lem-unramified-local-unit-norms-and-cohomology]]
[[thm-local-class-formation-for-finite-residue-local-field]]
[[lem-relative-invariant-for-class-formations]]
[[cor-local-brauer-invariant-under-choice]]

[F6] The actual local normalized invariant under finite base change scales
by the LOCAL degree $ef$. Standard Brauer comparison is natural and has
$b([A(c)])=[c]$, not the opposite sign.
[[lem-local-invariant-restriction-scaling]]
[[lem-finite-galois-obstruction-brauer-cohomology-comparison]]

[F7] Compact/AC continuous cohomology is the finite-quotient direct limit
with actual coefficient inclusions and inflation.
[[thm-continuous-profinite-cohomology-as-direct-limit-of-finite-quotients]]

[F8] The accepted constant-class comparison proves that finite constant
extensions have their true cyclic degrees, every global Brauer/cohomology
class has a constant carry representative $(n,a)$, and its actual local
invariant is $[k(v):k]\operatorname{ord}_v(a)/n$.
[[lem-function-field-constant-class-local-invariant-comparison]]

[F9] Finite fields have cyclic multiplicative group and cyclic Frobenius
extensions. Finite unramified local extensions correspond to their finite
residue extensions. [[thm-multiplicative-group-of-a-finite-field-is-cyclic]]
[[thm-extensions-of-finite-fields-are-galois-with-cyclic-frobenius-group]]
[[thm-finite-unramified-local-extensions-classified-by-residue-extensions]]

[A1] AC, Countable Choice and DC are literal assumptions. Products of
families of boundaries may use AC for their primitives; no such product
choice is inferred from DC alone. [[def-axiom-of-choice]]
[[def-dependent-choice]] [[thm-choice-implies-dependent-implies-countable-choice]]

## Proof

**Proof technique:** actual finite bar localization, restricted-product
cohomology, finite descent and constant-field exhaustion of local denominators.

**Given:** The stated data; first work over the base $F$ and write its constant field as $k$.

1.1 By [F1] choose the curve model. Completing its closed-point DVR preserves its uniformizer and residue field: a Cauchy sequence in the valuation ring has a stabilized residue, and successive division by a parameter gives the same value group. The residue field is finite over finite $k$. Thus every $F_v$ and every finite completion factor below is a complete discretely valued finite-residue field. For finite Galois $T/F$ with group $G$, [F2] gives $A=T\otimes_FF_v=\prod_{w\mid v}T_w$. Its fixed algebra is $F_v$: invariants are the kernel of the finite family of linear maps $g-1$, so commute with field base change, while $T^G=F$. No division by $|G|$ is involved. Galois action is transitive on the factors, since an orbit sum of primitive idempotents would otherwise be a nontrivial idempotent of $F_v$. If there are $r$ factors of equal degree $m$, then $|G|=rm$ and the stabilizer $D_w$ has order $m$. Its action on $T_w$ is faithful, because identity on that completion fixes the dense $T$. The factor is separable and has $m$ automorphisms, so [F2] identifies $D_w$ with its full local Galois group. This works in arbitrary characteristic, including wild ramification. [A1, F1, F2, given, construct, algebra]

2.1 Fix $w$. For a tuple $a\in\prod_{w'\mid v}T_{w'}^\times$ put $f_a(g)=g(a_{g^{-1}w})$. It satisfies $f_a(dg)=d f_a(g)$ for $d\in D_w$ and transforms by right translation under $G$. Its inverse at $w'=gw$ is $g f(g^{-1})$, independent of the representative by that relation. This is the actual coinduced module, equally for local units. Under [F3], the Shapiro map is restriction of a bar cochain to $D_w$ followed by evaluation of its $w$ component. It is an isomorphism: Hom-adjunction identifies the complexes, and inclusion of the homogeneous bars of $D_w$ into the restricted $G$ bar is an augmentation-preserving comparison of free resolutions. The actual comparison/homotopy theorem gives the same cohomology isomorphism. Thus the component is literal localization, not an arbitrary abstract identification. [F3, step 1.1, construct, algebra]

2.2 Establish the finite exceptional set inline, without a downstream class-field supplier. By [F4] write $T=F(\theta)$ with monic separable minimal polynomial $f$. Remove the finitely many places where a coefficient, its nonzero discriminant, or the inverse discriminant is nonintegral. Elsewhere $f$ has squarefree monic reduction. Factor that reduction into its finitely many irreducible factors and lift them repeatedly by two-factor Hensel. A lifted monic factor is irreducible over $F_v$: any monic factors have integral coefficients because their roots are integral and the valuation ring is integrally closed; reducing would contradict residue irreducibility. Its root's residue degree is the polynomial degree, and [F4]'s local $ef$ formula forces ramification index one. By [F2] these are all completion factors. Thus only finitely many places ramify. No global reciprocity, second inequality or ramified-unit vanishing was used. [F2, F4, step 1.1, construct, algebra]

2.3 Extension maps on idèles are injective, since every field completion embedding is injective. Finite invariants satisfy $I_T^G=I_F$: under step 1.1 the fixed tuple is $F_v^\times$, and it is a unit at all places above $v$ exactly when its base valuation is zero. The restricted-product condition therefore descends. Stage maps on classes are injective too. If a class of $C_E$ becomes principal $b$ at some later field, pass to a finite Galois common level $T/E$; the extended idèle is fixed by $\operatorname{Gal}(T/E)$, so its principal scalar $b$ is fixed, by the diagonal injection. Hence $b\in E$ and the original class was already principal. This proves injectivity into $C$ as well. [F1, F2, step 1.1, construct, algebra]

3.1 Changing $w$ conjugates the stabilizer and applies the induced local field isomorphism. Choices differing by $d\in D_w$ induce inner action on cohomology, which is identity: on homogeneous bars the left-equivariant prism $P_d[g_0,\ldots,g_n]=\sum_{i=0}^n(-1)^i[g_0,\ldots,g_i,g_i d,\ldots,g_n d]$ satisfies $\partial P_d+P_d\partial=R_d-1$ by cancellation of consecutive deletions. Hom-dualizing identifies the compatible inner action with the identity. The normalized local invariant is preserved by a valued-field isomorphism, since normalized valuation, residue-cardinality arithmetic Frobenius and inverse-Bockstein evaluation in its construction are preserved. Therefore the resulting $\mathbb Q/\mathbb Z$ coordinate is independent of the chosen place. [F3, F5, F6, step 2.1, construct, algebra]

3.2 For any finite Galois $T/E$, let $[a]\in C_T$ be invariant. The uniquely specified scalars $b_g$ with $g(a)/a=\operatorname{diag}(b_g)$ satisfy $b_{gh}=b_g g(b_h)$. Hilbert90 in [F5] gives $b_g=g(b)/b$. Thus $a/b$ is a fixed idèle, and the finite invariant result of step 2.3 descends it to $I_E$. Together with injectivity, this proves $C_T^{\operatorname{Gal}(T/E)}=C_E$. Now let $x\in J^{G_E}$ or $C^{G_E}$, represented at a finite Galois level $T/F$ containing $E$. Every $h\in\operatorname{Gal}(T/E)$ has a lift to $G_E$ by the AC statement [F2]. The stage injection makes its representative already fixed at $T$. Finite descent then gives $J^{G_E}=I_E$ and $C^{G_E}=C_E$. The finite group is a QUOTIENT, not a subgroup of $G_E$. The argument applies equally to nonnormal $E/F$. [A1, F2, F5, step 2.3, construct, algebra]

4.1 For finite $S$ containing those ramified places set $I_T(S)=\prod_{v\in S}\prod_{w\mid v}T_w^\times\times\prod_{v\notin S}\prod_{w\mid v}\mathcal O_{T_w}^\times$. These $G$-modules have directed union $I_T$. Finite-group bar cochains commute with this union by finite image. They commute with products in each degree, and cohomology does as well under [A1]: kernels commute coordinatewise and for a family of boundary values AC chooses a family of primitives. By step 2.1 the local pieces are the actual stabilizer groups. Outside $S$ they are UNRAMIFIED unit groups, so [F5] kills their positive cohomology. Taking the union over $S$ gives $H^q(G,I_T)=\bigoplus_v H^q(D_w,T_w^\times)$ for $q>0$. Hilbert90 makes $H^1(G,I_T)=0$; in degree two the $v$ coordinate is the actual invariant subgroup $(1/n_v)\mathbb Z/\mathbb Z$, $n_v=|D_w|=[T_w:F_v]$, by [F5]. Its finite local sum has order only $\operatorname{lcm}_v n_v$, not necessarily $|G|$. [A1, F3, F5, step 2.1, step 3.1, step 2.2, construct, algebra]

5.1 By [F7] and step 3.2, $H^q(G_F,J)=\varinjlim_{T/F\ \mathrm{Galois}}H^q(\operatorname{Gal}(T/F),I_T)$ with the actual inflation/coefficient maps. They preserve each local invariant: evaluating an inflated cochain at a chosen upstairs place after restriction to its stabilizer is exactly inflation/coefficient inclusion of its downstairs local cochain. The local stabilizer quotient is onto by the finite degree/stabilizer argument of step 1.1 applied to the tower. Both classes inflate to the same absolute local class over $F_v$, so their [F5] invariant is equal. Step4.1 therefore gives an injection of the degree-two colimit into $\bigoplus_v\mathbb Q/\mathbb Z$, and zero $H^1$. This is a comparison of actual maps. [F5, F7, step 1.1, step 4.1, step 3.2, construct, algebra]

6.1 The injection is onto using constant extensions alone. Put $d_v=[k(v):k]$ and $k_n=\mathbb F_{q^n}$. By [F8], $F_n=Fk_n/F$ has degree $n$. Finite simple-root Hensel lifts of $X^{q^{d_v}}-X$ in $F_v$ form a coefficient field isomorphic to $k(v)$: uniqueness and the Frobenius identities close the finite root set under field operations. Repeated residue subtraction and division by a parameter gives the deterministic Laurent expansion $F_v=k(v)((\pi_v))$, compatible with the original finite $k$. Choose a primitive generator $\eta$ of $k_n/k$, for instance a generator of $k_n^\times$ by [F9]. Its degree-$n$ minimal polynomial has the $n$ roots $\eta^{q^i}$. Frobenius $q^{d_v}$ permutes these by $i\mapsto i+d_v$, with $\gcd(n,d_v)$ orbits of length $n/\gcd(n,d_v)$. This is about that minimal polynomial, not all $q^n$ roots of $X^{q^n}-X$. Thus $k(v)\otimes_k k_n$ is the product of that many fields of order $q^{\operatorname{lcm}(n,d_v)}$. Finite bases extend coefficientwise to Laurent fields; applying [F2] shows that each completion of $F_n$ has degree $n/\gcd(n,d_v)$ over $F_v$. For finitely many desired fractions with denominators $r_v$, choose $n$ divisible by every $r_v d_v$. Their denominators divide those local degrees $n/d_v$, and step 4.1 realizes the entire finite tuple at this one constant level. Hence $H^2(G_F,J)=\bigoplus_v\mathbb Q/\mathbb Z$. No local-extension globalization theorem or rational place is required. [F2, F4, F8, F9, step 4.1, step 5.1, construct, algebra]

7.1 Identify the global map into these coordinates. By [F6,F8], every class of $H^2(G_F,F_s^\times)$ is the standard comparison of a global class with constant carry representative $(n,a)$. Under step 2.1 its image in idelic cohomology is exactly the restricted carry evaluated in the chosen completion. The accepted actual comparison [F8] computes its normalized local invariant as $d_v\operatorname{ord}_v(a)/n$, with the standard sign $b=-o$. These are exactly the invariants of its actual Brauer localizations. Since every class has such a representative, the whole diagram is actual localization, not an arbitrary isomorphism of row terms. Finite support follows from the finite divisor of $a$, also in [F8]. [F6, F8, step 2.1, step 6.1, algebra]

8.1 For finite separable $E'/E$, compute restriction first at a finite Galois level $T/E$ containing $E'$ representing a given finite tuple. Restrict its bar cochain to $\operatorname{Gal}(T/E')$ and evaluate at a chosen place of $T$ over $w\mid v$. This is literally the local restriction to the intersection of that subgroup with the old stabilizer; conjugacy choices are harmless by step 3.1. Its subgroup index is $[E'_w:E_v]$, from the stabilizer degree calculation. By [F6], its normalized invariant is that local degree times the old coordinate. The tensor-completion dimension equality [F2] gives $\sum_{w\mid v}[E'_w:E_v]=[E':E]$, proving the asserted sum scaling. The direct-limit systems over a finite $E/F$ are the same systems restricted to $G_E$, by cofinality of fields containing $E$. Each such field again has finite exact constants and its own model (the finite-constant degree bound follows from [F8] and $[E:F]$). Repeating the argument over that base proves all displayed identities, localization and scaling for every $E$, including nonnormal bases and empty tuples. There are no real-place terms or quasi-finite infinite constant fields in this Statement. [A1, F1, F2, F6, F8, step 3.1, step 3.2, step 6.1, step 7.1, construct, algebra] ∎
