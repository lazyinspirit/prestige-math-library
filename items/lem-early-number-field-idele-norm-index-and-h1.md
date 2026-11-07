---
id: lem-early-number-field-idele-norm-index-and-h1
kind: lemma
title: "Self-contained early idele norm index and first-cohomology theorem"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 11
deps:
  - def-axiom-of-choice
  - def-countable-choice
  - def-dependent-choice
  - def-idele-group-of-a-global-field
  - def-idele-class-group-of-a-global-field
  - def-global-idele-class-module-for-galois-group
  - thm-global-field-completion-tensor-product-decomposition
  - thm-hilbert-90-for-finite-galois-extension
  - thm-galois-closures-exist-and-are-minimal
  - thm-fundamental-theorem-of-finite-galois-theory
  - def-tate-cohomology-for-finite-groups
  - thm-long-exact-sequence-in-tate-cohomology
  - lem-cyclic-group-cohomology-norm-and-inflation
  - thm-local-class-formation-for-finite-residue-local-field
  - lem-relative-invariant-for-class-formations
  - lem-unramified-local-unit-norms-and-cohomology
  - thm-s-unit-theorem
  - thm-finiteness-of-the-number-field-class-group
  - thm-logarithmic-unit-image-is-a-full-lattice
  - def-logarithmic-unit-embedding
  - thm-product-formula-for-number-fields
  - def-s-integers-and-s-units-of-a-number-field
  - lem-discrete-subgroups-of-real-vector-spaces-are-lattices
  - thm-shapiro-lemma-for-group-cohomology
  - thm-weak-approximation-for-inequivalent-absolute-values
  - thm-kummer-correspondence
  - thm-cyclic-degree-n-extensions-with-roots-of-unity-are-kummer
  - lem-trace-pairing-for-a-finite-separable-extension
  - thm-field-norm-and-trace-by-embeddings
  - thm-basic-laws-for-field-norm-and-trace
  - thm-finite-unramified-local-extensions-classified-by-residue-extensions
  - lem-hensel-factor-lifting-over-a-complete-valued-field
  - thm-unique-factorisation-of-ideals-in-dedekind-domains
  - thm-degree-one-inflation-restriction-exact-sequence
  - thm-restriction-corestriction-composite-is-multiplication-by-the-index
  - thm-sylow-first-theorem
  - lem-proper-subgroup-of-a-finite-p-group-is-properly-normalized-local
  - thm-continuous-profinite-cohomology-as-direct-limit-of-finite-quotients
proof_strategy: direct
axiom_use: >-
  AC, Countable Choice and DC retain the actual arithmetic/cohomology
  conventions of the local and global input constructions. All finite global
  fixedpoint, Herbrand, norm-index and H1 arguments are supplied in this body;
  no later global norm-index, global Artin, BHN or global class-formation
  theorem is a logical input.
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "J. S. Milne, Class Field Theory, version 4.03"
      url: "https://www.jmilne.org/math/CourseNotes/CFT.pdf"
      locator: "VII sections2–6, finite idele cohomology and the algebraic norm-index proof; the full needed constructions are expanded here rather than cited through later global reciprocity suppliers."
verification: {}
---

## Statement

Assume AC, Countable Choice, and Dependent Choice, with the supplied finite-group and continuous-cohomology conventions. Let $L/K$ be a finite Galois extension of number fields, let $G=\operatorname{Gal}(L/K)$, and let $C_L=\mathbb A_L^\times/L^\times$. Then $C_K/N_{L/K}C_L$ is finite of order dividing $[L:K]$, its order equals $[L:K]$ when $G$ is cyclic, and
$$H^1(G,C_L)=0.$$
For a number field $F$ with separable closure $F_s$ and direct-limit idele-class module $C_F^{\mathrm{disc}}$, every open $U\le G_F$ also satisfies
$$H^1_{\mathrm{cts}}(U,C_F^{\mathrm{disc}})=0.$$

## Statement references

[[def-idele-class-group-of-a-global-field]]

[[def-global-idele-class-module-for-galois-group]]

## Facts & Assumptions

**Given:** Exactly the original number-field, finite Galois and AC/CC/DC data. Group cohomology uses the stipulated normalized cochains and their supplied derived comparison.

[F1] Ideles and their classes are the restricted-product group and its quotient by the diagonal field group. Finite scalar extension commutes with their field norms. [[def-idele-group-of-a-global-field]] [[def-idele-class-group-of-a-global-field]]

[F2] For a finite separable global extension, tensoring at a finite completion gives the product of the completions above that place. Hilbert 90 gives zero first cohomology for the multiplicative group of a finite Galois field extension. [[thm-global-field-completion-tensor-product-decomposition]] [[thm-hilbert-90-for-finite-galois-extension]] Finite separable extensions have finite Galois closures and the finite Galois correspondence identifies subgroup fixed fields. [[thm-galois-closures-exist-and-are-minimal]] [[thm-fundamental-theorem-of-finite-galois-theory]]

[F3] The number-field ideal class group is finite, and nonzero ideals factor into finite products of primes under AC. [[thm-finiteness-of-the-number-field-class-group]] [[thm-unique-factorisation-of-ideals-in-dedekind-domains]]

[F4] For a finite set of places including all archimedean ones, the S-unit group has rank the number of places minus one and finite cyclic torsion equal to its roots of unity. [[thm-s-unit-theorem]] [[def-s-integers-and-s-units-of-a-number-field]]

[F5] The ordinary logarithmic unit image is a full lattice in the product-formula hyperplane. [[thm-logarithmic-unit-image-is-a-full-lattice]] [[def-logarithmic-unit-embedding]]

[F6] The normalized global absolute values satisfy the product formula. [[thm-product-formula-for-number-fields]]

[F7] A discrete subgroup of a finite-dimensional real vector space is a lattice in its real span. [[lem-discrete-subgroups-of-real-vector-spaces-are-lattices]]

[F8] Shapiro's lemma identifies cohomology of a coinduced module with subgroup cohomology. Finite-index induction and coinduction agree as the same finite direct sum/product. [[thm-shapiro-lemma-for-group-cohomology]]

[F9] Tate cohomology has its long exact sequence; for a cyclic group the norm/augmentation resolution computes the even and odd groups. [[def-tate-cohomology-for-finite-groups]] [[thm-long-exact-sequence-in-tate-cohomology]] [[lem-cyclic-group-cohomology-norm-and-inflation]]

[F10] Under AC/DC the normalized local class formation has H1 zero and degree-two invariant Q/Z with restriction scaling by the field degree. Relative inflation identifies finite-extension H2 with the restriction kernel. [[thm-local-class-formation-for-finite-residue-local-field]] [[lem-relative-invariant-for-class-formations]]

[F11] Unramified local extensions are classified by finite residue extensions; Hensel factor lifting lifts coprime residue factors. Thus a Kummer root of a unit is unramified away from the residue divisors of its exponent. [[thm-finite-unramified-local-extensions-classified-by-residue-extensions]] [[lem-hensel-factor-lifting-over-a-complete-valued-field]]

[F12] In a finite unramified local extension, unit norms are onto and all positive unit cohomology vanishes. [[lem-unramified-local-unit-norms-and-cohomology]]

[F13] Field norms are determinants and products over separable embeddings; trace is their first-order coefficient, is nonzero in a finite separable extension, and norms are transitive. These finite determinant identities also give scalar-extension/norm compatibility on each completion product and hence on ideles. [[thm-field-norm-and-trace-by-embeddings]] [[thm-basic-laws-for-field-norm-and-trace]] [[lem-trace-pairing-for-a-finite-separable-extension]]

[F14] Kummer theory over a field containing the required roots of unity classifies finite elementary abelian extensions by radical subspaces with its perfect pairing. [[thm-kummer-correspondence]] [[thm-cyclic-degree-n-extensions-with-roots-of-unity-are-kummer]]

[F15] Degree-one inflation–restriction is exact; corestriction after restriction to a finite-index subgroup multiplies cohomology by its index. [[thm-degree-one-inflation-restriction-exact-sequence]] [[thm-restriction-corestriction-composite-is-multiplication-by-the-index]]

[F16] Sylow subgroups exist, and a proper subgroup of a finite p-group is properly contained in its normalizer. [[thm-sylow-first-theorem]] [[lem-proper-subgroup-of-a-finite-p-group-is-properly-normalized-local]]

[F17] The global discrete idele-class module is the direct limit under extension maps. Continuous cohomology is the colimit of finite-quotient cohomology on the fixed coefficient modules. [[def-global-idele-class-module-for-galois-group]] [[thm-continuous-profinite-cohomology-as-direct-limit-of-finite-quotients]]

[F18] Finite weak approximation holds for inequivalent number-field absolute values. [[thm-weak-approximation-for-inequivalent-absolute-values]]

[A1] AC/CC/DC are retained for the actual local class-formation, S-unit, lattice, completion and cohomology inputs, and for simultaneous local preimages. No global reciprocity, global class-formation or later global norm-index theorem is assumed. [[def-axiom-of-choice]] [[def-countable-choice]] [[def-dependent-choice]]

## Proof

**Proof technique:** expand the finite local, logarithmic lattice, Kummer and subgroup calculations before applying any global H1 conclusion.

**Given:** The data in the Statement and [F1]–[F18], [A1].

1.1 For a cyclic group generated by $\sigma$, the periodic norm/augmentation resolution in [F9] gives $\widehat H^0(M)=M^G/NM$ and $\widehat H^{-1}(M)=\ker N/(\sigma-1)M$. A one-cocycle is determined by $m=f(\sigma)$, with $Nm=0$, via $f(\sigma^j)=\sum_{i<j}\sigma^im$; principal cocycles have $m=(\sigma-1)b$. Thus $H^1=\widehat H^{-1}$, and the same resolution gives $H^2=\widehat H^0$. Write $h(M)=|\widehat H^0(M)|/|\widehat H^{-1}(M)|$ when these groups are finite. The cyclic six-term segment of the long exact sequence in [F9] shows $h(B)=h(A)h(C)$ for $0\to A\to B\to C\to0$, by multiplying the orders in that finite exact cycle. It also proves finiteness for the third term when it holds for two. For a finite module $M$, the equalities $|M^G|=|M|/|(\sigma-1)M|$ and $|NM|=|M|/|\ker N|$ give $h(M)=1$. For trivial $\mathbb Z$, they give $h(\mathbb Z)=|G|$. [F9, given, algebra]

1.2 For a finite separable nonarchimedean local extension $E/B$ of characteristic zero, choose $c$ with $t=\operatorname{Tr}_{E/B}(c)\ne0$ by [F13]. Multiplying $c$ by a sufficiently large base-field uniformizer power makes $c$ integral and all coefficients of $N_{E/B}(1+Xc)=1+tX+\sum_{i\ge2}b_iX^i$ integral. Let $e=v_B(t)\ge0$, choose $n>2e$, and put $h=n-e$. For $z\in\pi_B^n\mathcal O_B$, the map $x\mapsto(z-\sum_{i\ge2}b_ix^i)/t$ preserves $\pi_B^h\mathcal O_B$ and contracts differences by a positive power of $\pi_B$, because $(i-1)h-e>0$ for every $i\ge2$. Iterating from zero gives a unique limit by completeness and proves $1+z=N(1+xc)$. Thus the local norm subgroup contains an open unit subgroup and is open. At archimedean places norm images are either the full group or the open positive-real subgroup. [F13, A1, given, construct, algebra]

1.3 For finite Galois $E/B$, take invariants in $1\to E^\times\to\mathbb A_E^\times\to C_E\to1$. The invariant ideles are $\mathbb A_B^\times$ by the completion product [F2]; at archimedean places the corresponding assertion is the finite real/complex decomposition, with complex conjugation fixing the real field, and Hilbert 90 kills $H^1(\operatorname{Gal}(E/B),E^\times)$. Hence the induced map $C_B\to C_E^{\operatorname{Gal}(E/B)}$ is an isomorphism. It is canonical and equivariant under automorphisms of a larger finite Galois tower because it is induced by coordinatewise field embeddings. [F1, F2, A1, given, algebra]

1.4 Choose a finite set $S$ of places of $K$ containing all archimedean and ramified places and enough finite primes to generate the ideal class group of $L$. Let $T$ be the places of $L$ above $S$, and let $I_{L,T}$ be the restricted ideles with arbitrary components at $T$ and unit components outside $T$. Since the primes in $T$ generate the class group, every idele class has a representative in $I_{L,T}$, and the exact sequence $1\to U_{L,T}\to I_{L,T}\to C_L\to1$ has $U_{L,T}=L^\times\cap I_{L,T}$, the $T$-unit group. [F4, F3, F1, given, construct]

1.5 Define the $S$-logarithm by $$u\longmapsto ((\log|\sigma(u)|)_\sigma,(-v_w(u)\log Nw)_{w\in T_f}),$$ using one real embedding and one from each complex pair, with complex coordinates doubled. The product formula [F6] places its image in the hyperplane $H_T$ whose weighted coordinate sum is zero. An element of its kernel has all finite valuations zero, hence is an ordinary unit. On ordinary units the map is the ordinary logarithmic embedding, whose domain has rank $r_1(L)+r_2(L)-1$ by [F4] and whose image is a full lattice of that rank by [F5]. Thus its kernel has rank zero and is finite. Every root of unity is in this kernel, and every finite-order unit is a root of unity, so the torsion assertion in [F4] identifies the kernel exactly. For each finite $w\in T_f$, let $h$ be the exponent of the finite ideal class group [F3]; choose $\pi_w$ with $(\pi_w)=w^h$. Its finite logarithm coordinates give $h\log(Nw)e_w$, so the projection of the full image to finite coordinates is a lattice. The kernel of that projection is the ordinary-unit logarithm lattice. A convergent sequence in the full image has eventually constant finite coordinates, after which discreteness of the kernel makes it eventually constant. The image is discrete. Its rank, by [F4], is $r_1(L)+r_2(L)-1+|T_f|=\dim H_T$, so [F7] makes it a full lattice in $H_T$. [A1, F5, F4, F3, F6, F7, given, choose, algebra]

1.6 Suppose only finitely many primes fail to split completely in $L$. A nontrivial finite solvable group has nontrivial abelianization, hence a quotient of prime order; choose that cyclic quotient and let $E/K$ be its corresponding subextension. Every prime that splits completely in $L$ splits completely in $E$, so only finitely many primes fail to split completely in $E$. Let $S$ contain those primes and the archimedean places. [F16, given, choose]

1.7 We first compute a local index. Let $B$ be a finite extension of $\mathbb Q_\ell$, with residue size $q$, normalized integer valuation $v$, and unit group $U$. Put $e=v(p)$, where $p$ is any rational prime, and choose $m>e/(p-1)$. The map $z\mapsto(1+z)^p-1$ is a bijection from $\pi^m\mathcal O_B$ to $\pi^{m+e}\mathcal O_B$. Indeed its linear term is $pz$; every nonlinear term divided by $p$ has strictly larger valuation than $z$ on that ball. For prescribed $b\in\pi^{m+e}\mathcal O_B$, solve $z=(b-\sum_{j=2}^p\binom pj z^j)/p$ by iteration from $0$. The right side preserves $\pi^m\mathcal O_B$ and contracts differences by a positive power of $\pi$: for $2\le j<p$ its coefficient after division by $p$ is integral and contributes at least $(j-1)m$, while the last term contributes $(p-1)m-e>0$. Completeness gives the unique limit, proving surjectivity and injectivity. Thus $U_m^p=U_{m+e}$ and $U_m$ has no nonidentity $p$-torsion. On the finite quotients the map $U/U_m\to U^p/U_m^p$ has kernel $\mu_p(B)U_m/U_m$, of size $|\mu_p(B)|$. Counting gives $[U:U^p]=|\mu_p(B)|q^e$ and $[B^\times:B^{\times p}]=p|\mu_p(B)|/|p|_B$. For $B=\mathbb R$ or $\mathbb C$ the same latter formula follows by the sign map or the existence of complex $p$th roots, with normalized $|p|_B=p$ or $p^2$. [given, construct, algebra]

1.8 For the moment assume that $L/K$ is cyclic of degree $p$ and that $\mu_p\subseteq K$. By [F14], write $L=K(a^{1/p})$. Choose a finite set $S$ of places containing the archimedean places, the divisors of $p$ and $a$, and finite primes whose ideal classes generate the class group. Put $s=|S|$, counting each complex pair once. By [F3, F4], $U(S)/U(S)^p$ has order $p^s$: its free rank is $s-1$ and its finite cyclic torsion contains $\mu_p$, hence contributes one factor $p$. Also $U(S)\cap K^{\times p}=U(S)^p$, since a $p$th root of an $S$-unit has zero valuation outside $S$. Let $M=K(U(S)^{1/p})$. The perfect Kummer pairing gives $[M:K]=p^s$, $L\subseteq M$, and $[M:L]=p^t$ with $t=s-1$. The extension $M/K$ is unramified outside $S$ by [F11]. Finally, if $I_S$ denotes the ideles with unit components outside $S$, then $\mathbb A_K^\times=K^\times I_S$: multiply an idele's associated fractional ideal by a principal ideal to make its ideal class supported on the chosen class-group generators in $S$. [F3, F4, F14, F11, A1, given, choose, algebra]

2.1 For a finite cyclic nonarchimedean local extension $E/B$ of degree $d$, [F10] identifies $H^2(\operatorname{Gal}(E/B),E^\times)$ with the invariant subgroup $\frac1d\mathbb Z/\mathbb Z$, of order $d$. The cyclic formula in step 1.1 makes this the norm quotient $B^\times/N_{E/B}E^\times$. Hilbert 90 [F2] gives $H^1(E^\times)=0$, so $h(E^\times)=d$. The valuation exact sequence $1\to\mathcal O_E^\times\to E^\times\to\mathbb Z\to0$ and step 1.1 give $h(\mathcal O_E^\times)=d/d=1$. In an unramified extension both relevant Tate groups of units vanish by [F12] and step 1.1. At archimedean places the only nontrivial extension is $\mathbb C/\mathbb R$, with norm image $\mathbb R_{>0}$ and quotient order two; Hilbert 90 again gives zero H1. These establish every local norm/cohomology calculation needed below without a local Artin theorem. [F2, F10, F12, A1, step 1.1, algebra]

2.2 All finite extension maps on idele classes are injective: embed a finite extension in a finite Galois closure, apply step 1.3 to the composite, and deduce injectivity of the first map. Therefore the direct limit in [F17] can be regarded as a directed union of these groups. If a class fixed by $G_M$ is represented in a finite field, put that field in a finite Galois $E/M$. Injectivity shows its representative in $C_E$ is fixed by $\operatorname{Gal}(E/M)$, so belongs to $C_M$ by step 1.3. Thus $(C_F^{\mathrm{disc}})^{G_M}=C_M$. [F17, A1, step 1.3, construct, algebra]

2.3 Add the invariant line $\mathbb Z\mathbf1$ to the logarithmic lattice to obtain a full $G$-stable lattice $\Lambda$ in $\mathbb R^T$; its intersection with $H_T$ is zero because the positive weighted coordinate sum defining $H_T$ is nonzero on $\mathbf1$. We must compare rational representations, not intersect arbitrary real lattices. Choose a $\mathbb Z$-basis of $\Lambda$ and the standard basis of $\mathbb Q^T$. The intertwiner equations $A_gX=XP_g$, $g\in G$, have rational coefficients. Gaussian elimination over $\mathbb Q$ gives a rational basis $X_1,\ldots,X_s$ for their solution space, and the same row reduction over $\mathbb R$ shows that all real solutions are their real linear combinations. Since $\Lambda$ spans the real permutation representation, there is an invertible real solution; hence $\det(\sum t_iX_i)$ is a nonzero polynomial over $\mathbb Q$. A nonzero polynomial over an infinite field has a nonvanishing value in that field: induct on its variables, first specialize so one nonzero coefficient remains nonzero and then avoid the finitely many roots of the remaining one-variable polynomial. Thus an invertible rational intertwiner exists. It gives a $\mathbb QG$-isomorphism $\mathbb Q^T\to\Lambda\otimes\mathbb Q$. Transport the standard lattice to a $G$-stable lattice $M$ in $\Lambda\otimes\mathbb Q$. In finite bases, clearing the denominators of this isomorphism and its inverse gives a positive integer $d$ with $dM\subseteq\Lambda$ and $d\Lambda\subseteq M$. Consequently $J=M\cap\Lambda$ has finite index in both. By [step 1.1] and quotient one for finite modules, $h_G(\Lambda)=h_G(M)=h_G(\mathbb Z^T)$. For the permutation lattice $\mathbb Z^T$, its orbit at $v$ is the induced trivial $\mathbb Z$-module from $G_v$. Ordinary Shapiro in degrees $1,2$ and the cyclic formulas of [F8, step 1.1] give $H^1(G_v,\mathbb Z)=0$ and $H^2(G_v,\mathbb Z)=\mathbb Z/|G_v|\mathbb Z$. Consequently its Herbrand quotient is $\prod_{v\in S}|G_v|=\prod_{v\in S}[L_w:K_v]$. The trivial quotient $\Lambda/\log U_{L,T}\cong\mathbb Z$ has Herbrand quotient $n$, so multiplicativity gives $h_G(U_{L,T})=\prod_{v\in S}[L_w:K_v]/n$; the finite torsion kernel has quotient one. All group cohomology and local inputs retain [A1]. [step 1.1, F8, step 1.1, step 1.5, algebra, A1]

2.4 Fix an idele $a=(a_v)\in\mathbb A_K^\times$. For every $v\in S$, the local norm image $V_v$ is open by [step 1.2] at finite places and by [step 1.2] at archimedean places. Weak approximation [F18] gives $b\in K^\times$ lying in every open coset $a_vV_v$, so $b/a_v$ is a local norm for every $v\in S$. At each finite $v\notin S$, $E/K$ splits completely, so every element of $K_v^\times$ is a local norm. Since $a_v$ is a unit for almost all $v$, choose unit norm preimages at every place outside $S$; at split places one may put the desired local element in one factor and $1$ in the others. The resulting family is a unit at all but finitely many places, hence an idele. Thus $b/a$ is an idele norm, and every class in $C_K$ lies in $N_{E/K}C_E$. [step 1.2, F18, step 1.2, step 1.6, given, construct, A1]

3.1 The group $G$ is cyclic and every decomposition subgroup $G_v$ is cyclic. For each orbit of places use the finite-index induced/coinduced identification in [F8, step 1.1], then apply ordinary Shapiro in degrees $1,2$. The explicit cyclic formulas in [F8, step 1.1] turn these two ordinary groups into precisely $\widehat H^{-1}$ and $\widehat H^0$ on both sides; no negative-degree form of Shapiro is being assumed. For each finite $v\in S$, the local multiplicative factor is induced from the decomposition group $G_v$. Its negative first Tate group is zero by local Hilbert 90, and its zeroth group has order $[L_w:K_v]$ by [step 2.1]. For each archimedean $v\in S$, the quotient order is [step 2.1], and local Hilbert 90 again gives vanishing of the negative first Tate group. For finite $v\notin S$, both Tate groups of the local unit factor vanish by [step 2.1, F12]. Finite-group cochains commute with arbitrary products, since each cochain group is a finite power of its coefficient group; cocycle kernels are coordinatewise and AC selects coordinatewise preimages of coboundaries. Thus the entire product outside $S$ has zero Tate groups. There are only finitely many remaining factors, all with finite Tate groups by the local calculations. Shapiro and multiplicativity therefore give $h_G(I_{L,T})=\prod_{v\in S}[L_w:K_v]$. [step 2.1, step 2.1, F12, F8, step 1.1, step 2.1, step 1.4, algebra]

4.1 Applying [step 1.1] to the exact sequence in step 1.4 gives $h_G(C_L)=h_G(I_{L,T})/h_G(U_{L,T})=n$ by steps 3.1 and 2.3. The Tate groups are finite because the local groups and the finite-rank lattice cohomology in the construction are finite. [step 1.1, step 1.4, step 3.1, step 2.3, algebra]

5.1 For a cyclic extension $E/B$ of degree $n$, step 1.3 identifies its zeroth Tate group with $C_B/N_{E/B}C_E$. Step 4.1 proves both Tate groups finite and their order ratio $n$. Thus the norm quotient has order $n|\widehat H^{-1}(\operatorname{Gal}(E/B),C_E)|\ge n$. This proves the first norm-index bound locally in this proof. [step 1.3, step 4.1, algebra]

6.1 Step 2.4 gives $C_K=N_{E/K}C_E$, contradicting [step 5.1] because $[E:K]>1$. Therefore the assumed finite set cannot exist. [step 5.1, step 2.4, contradiction]

7.1 Choose primes of $L$ outside $S$ whose Frobenius elements form an $\mathbb F_p$-basis of $\operatorname{Gal}(M/L)$. Such primes exist using only [step 5.1, step 6.1]: if all the outside-$S$ Frobenius elements generated a proper subgroup, its fixed field would be a nontrivial abelian extension of $L$ in which every prime outside a finite set splits, contrary to infinitely many nonsplit primes. A finite basis can therefore be extracted. If one of these relative Frobenius elements is nonidentity, its local extension $M_w/L_u$ has degree $p$. But $M/K$ is unramified of exponent $p$ at the underlying prime $v$, so $[M_w:K_v]\le p$ and consequently $L_u=K_v$. Since $L/K$ is Galois, $v$ splits completely in $L$. The relative Frobenius is therefore the Frobenius at $v$ for $M/K$. Their underlying primes form a set $T$ of size $t$, disjoint from $S$, whose Frobenius elements form the required basis of $\operatorname{Gal}(M/L)$. [step 5.1, step 6.1, F14, F11, step 1.8, construct]

8.1 For $u\in U(S)$, its radical $u^{1/p}$ lies in $L$ if and only if $u$ is a $p$th power in every $K_v$, $v\in T$. In one direction $L_u=K_v$ at these split places. In the other direction, the root lies in the local base field at each such place and is fixed by the corresponding Frobenius; these Frobenius elements generate $\operatorname{Gal}(M/L)$, so the root lies in $L$. It follows from [F14] over $L$ that the kernel of $U(S)\to\prod_{v\in T}U_v/U_v^p$ has index $[M:L]=p^t$. Each factor on the right has order $p$ by step 1.7, since $v\notin S$ has $|p|_v=1$ and contains $\mu_p$. The map is thus onto a group of order $p^t$. [F14, step 1.7, step 1.8, step 7.1, algebra]

9.1 We need the following consequence of this surjectivity. Suppose $b\in K^\times$ is a $p$th power in every $K_v$, $v\in S$, and is a unit outside $S\cup T$. Set $F=K(b^{1/p})$ and let $D$ have local factors $K_v^\times$ on $S$, $U_v^p$ on $T$, and $U_v$ elsewhere. Each factor of $D$ is a local norm from $F$: over $S$ the extension splits, over $T$ the local quotient has order dividing $p$ by [step 2.1, F12], and elsewhere the extension is unramified by [F11]. At split archimedean places this is immediate; all other places here are finite. Choosing local norm preimages, unit preimages outside finitely many places by [step 2.1, F12], gives $D\subseteq N_{F/K}\mathbb A_F^\times$. Step 8.1 gives $I_S=D\,U(S)$, since $I_S/D=\prod_{v\in T}U_v/U_v^p$. Step 1.8 then implies $\mathbb A_K^\times=K^\times D\subseteq K^\times N_{F/K}\mathbb A_F^\times$. If $F\ne K$, [F14] makes $F/K$ cyclic of degree $p$, contradicting the first norm-index inequality [step 5.1, step 6.1]. Hence $F=K$ and $b\in K^{\times p}$. [step 5.1, step 6.1, F14, step 2.1, F12, F11, A1, step 1.8, step 8.1, construct]

10.1 Define $E$ to have local factors $K_v^{\times p}$ on $S$, $K_v^\times$ on $T$, and $U_v$ elsewhere. The subgroup $E$ is contained in $N_{L/K}\mathbb A_L^\times$: on $S$ each local degree divides $p$, so local $p$th powers are norms by [step 2.1, F12] (at a real place the only possible nontrivial norm image is the positive reals, which contain the squares); on $T$ the extension splits by step 7.1; elsewhere it is unramified and units are norms. The same local-preimage construction used in step 9.1 gives an idele preimage. Also $K^\times\cap E=U(S\cup T)^p$: an element of the intersection satisfies the hypotheses of step 9.1 and its $p$th root is an $S\cup T$-unit; conversely every such $p$th power lies in $E$. [step 2.1, F12, A1, step 7.1, step 9.1, construct, algebra]

11.1 The finite index $[I_{S\cup T}:E]$ is $\prod_{v\in S}[K_v^\times:K_v^{\times p}]=p^{2s}/\prod_{v\in S}|p|_v=p^{2s}$, by step 1.7 and [F6]; all places where $|p|_v\ne1$ are in $S$. The elementary quotient map $I_{S\cup T}/E\to K^\times I_{S\cup T}/K^\times E$ has kernel $(K^\times\cap I_{S\cup T})/(K^\times\cap E)=U(S\cup T)/U(S\cup T)^p$, of order $p^{s+t}$ by [F3, F4]. Since $K^\times I_{S\cup T}=\mathbb A_K^\times$, we obtain $[\mathbb A_K^\times:K^\times E]=p^{2s-(s+t)}=p^{s-t}=p$. Step 10.1 now makes $Q(L/K)$ a quotient of a group of order $p$, so its order divides $p$. [F3, F4, F6, step 1.7, step 1.8, step 10.1, algebra]

12.1 For an arbitrary cyclic degree-$p$ extension, put $K'=K(\mu_p)$ and $L'=LK'$. The degree $m=[K':K]$ divides $p-1$, so $K'\cap L=K$ and $[L':K']=p$. Extension and norm define maps $Q(L/K)\to Q(L'/K')\to Q(L/K)$ by [F13]. To check the first map, scalar extension of a local norm is the norm of the scalar-extended element in the corresponding finite product of local fields, so it carries norms to norms; the second map is well-defined by norm transitivity. Their composite is multiplication by $m$. The group $Q(L/K)$ is killed by $p$, since $p$th powers of extended ideles are norms. Multiplication by $m$ is therefore an automorphism, so the first map is injective. Step 11.1 applied over $K'$ proves that its order divides $p$ for every cyclic degree-$p$ extension. [F13, step 11.1, algebra]

13.1 By induction, the same divisibility holds for a Galois extension with finite $p$-group $P$. Choose a normal subgroup $H$ of index $p$ and let $M=L^H$. There is an exact sequence $C_M/N_{L/M}C_L\to C_K/N_{L/K}C_L\to C_K/N_{M/K}C_M\to1$: the first arrow is induced by $N_{M/K}$, the second is the quotient map, and transitivity identifies the first image with the second kernel. The outer groups have orders dividing $|H|$ and $p$ by induction and step 12.1. Thus the middle group is finite of order dividing $|P|$. The trivial extension starts the induction. [F13, step 12.1, construct, algebra]

14.1 Finally take a Sylow $p$-subgroup $P\le G$ and $M=L^P$, with $d=[M:K]$ prime to $p$. Extension defines $Q(L/K)\to Q(L/M)$: if $x$ is an $L$-idele, the extension to $M$ of $N_{L/K}x$ is $N_{L/M}(\prod_{t\in P\backslash G}t x)$, using left-coset representatives, since the double product ranges over $G$. Norm back to $K$ defines a reverse map, and their composite is multiplication by $d$. Therefore the $p$-primary subgroup of $Q(L/K)$ injects into $Q(L/M)$; by step 13.1 it is finite of order dividing $|P|$. The whole group $Q(L/K)$ is killed by $|G|$ by [F13], so elementary Bezout decomposes it as the direct sum of its $p$-primary subgroups for the finitely many primes dividing $|G|$. Each of these has the proved finite order bound. Multiplying their orders proves that $Q(L/K)$ is finite and its order divides $|G|=[L:K]$, exactly as stated. [F13, step 13.1, construct, algebra]

15.1 For every cyclic extension, the bounds in steps 5.1 and 14.1 force its norm index to equal its degree. Suppose now that $G$ is cyclic of prime order $p$. By [step 1.3, step 2.2], its zeroth Tate group is $C_K/N_{L/K}C_L$. The two inequalities in [step 5.1, step 14.1] make its order exactly $p$. The Herbrand quotient in [step 4.1] therefore forces $|\widehat H^{-1}(G,C_L)|=1$. For a cyclic group generated by $\sigma$, a one-cocycle is determined by $m=f(\sigma)$, with $N m=0$, where $N=1+\sigma+\cdots+\sigma^{p-1}$; conversely the formula $f(\sigma^j)=\sum_{i<j}\sigma^im$ defines a cocycle whenever $Nm=0$. Principal cocycles have $m=(\sigma-1)b$. Thus $H^1(G,C_L)=\ker N/(\sigma-1)C_L=\widehat H^{-1}(G,C_L)=0$. Here the multiplicative idele-class group is written additively only in this elementary cocycle formula. [step 1.3, step 2.2, step 4.1, step 5.1, step 14.1, A1, given, algebra]

16.1 Suppose next that $G=P$ is a finite $p$-group. Induct on $|P|$, with the trivial group immediate and order $p$ covered by step 15.1. A maximal proper subgroup $H$ exists because $P$ is finite. Its normalizer properly contains it by [F16], so maximality forces $H\trianglelefteq P$. The quotient has no nontrivial proper subgroup and is a $p$-group, hence has order $p$: otherwise a power of a nonidentity element would generate a proper subgroup of order $p$. Put $M=L^H$. Induction gives $H^1(H,C_L)=0$. By [step 1.3, step 2.2] its fixed coefficient group $C_L^H$ is canonically $C_M$, equivariantly for $P/H$ because the identification is induced by extension of ideles. Step 15.1 applied to $M/K$ gives $H^1(P/H,C_M)=0$. The exact sequence [F15] now gives $H^1(P,C_L)=0$. [step 1.3, step 2.2, F15, F16, step 15.1, construct, algebra]

17.1 Let $G$ be arbitrary and nontrivial. For every prime $p\mid|G|$, choose a Sylow subgroup $P_p$ and put $d_p=[G:P_p]$. The finite extension $L/L^{P_p}$ has $p$-group Galois group, so step 16.1 gives $H^1(P_p,C_L)=0$. Restriction of any $x\in H^1(G,C_L)$ to $P_p$ is therefore zero, and [F15] implies $d_px=0$. The greatest common divisor of the finitely many integers $d_p=|G|/p^{v_p(|G|)}$ is one. An integer Bezout combination of these equalities gives $x=0$. For $G=1$ a one-cocycle is already zero. This proves the finite-level assertion without assuming finiteness of $H^1(G,C_L)$. [F15, F16, step 16.1, construct, algebra]

18.1 For the continuous assertion, write $U=G_M$ for the finite field fixed by $U$. Its open normal subgroups are $G_E$ with $E/M$ finite Galois inside $F_s$. By [step 1.3, step 2.2], the corresponding fixed coefficient group is $C_E$. Formula [F17] identifies $H^1_{\mathrm{cts}}(G_M,C_F^{\mathrm{disc}})$ with the filtered colimit of $H^1(\operatorname{Gal}(E/M),C_E)$ over those extensions. Every term is zero by step 17.1, so the colimit is zero. Both assertions retain exactly [A1], and no global reciprocity or global Brauer theorem has been used. [step 1.3, step 2.2, F17, A1, step 17.1, algebra] ∎
