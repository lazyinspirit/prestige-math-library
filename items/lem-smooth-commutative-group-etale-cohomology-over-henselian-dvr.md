---
id: lem-smooth-commutative-group-etale-cohomology-over-henselian-dvr
kind: lemma
title: "Smooth commutative-group etale cohomology over a Henselian DVR"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 7
deps:
  - def-axiom-of-choice
  - thm-choice-implies-dependent-implies-countable-choice
  - def-henselian-pair-and-henselian-local-ring
  - cor-henselian-local-simple-root-criterion
  - thm-jacobian-criterion-smooth-morphism
  - thm-etale-locally-standard-etale
  - thm-normal-basis-theorem
  - thm-adjugate-identity-over-a-commutative-ring
  - lem-finite-dimensional-commutative-algebras-decompose-into-local-factors
  - thm-finite-flat-modules-over-local-rings-are-free
  - thm-cayley-hamilton
  - cor-finite-extensions-of-finite-fields-are-simple
  - thm-extensions-of-finite-fields-are-galois-with-cyclic-frobenius-group
  - thm-existence-of-algebraic-closures
  - thm-absolute-galois-group-of-finite-field-is-procyclic
  - thm-continuous-profinite-cohomology-as-direct-limit-of-finite-quotients
  - lem-formal-smooth-group-kernel-is-cyclically-acyclic-over-unramified-extension
  - thm-abelian-sheaves-on-a-site-have-enough-injectives
  - lem-site-slice-restriction-locality-and-composition
justified_by: []
proof_strategy: direct
axiom_use: "AC is retained for existing smooth geometry, one algebraic closure, and site injective models; it supplies any DC convention in continuous derived cohomology. No original unqualified flat-duality claim is closed."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "J. S. Milne, Etale Cohomology, III Section3; Arithmetic Duality Theorems, III Lemma1.1"
      url: "https://www.jmilne.org/math/Books/ADTnot.pdf"
      locator: "The needed smooth residue comparison is reconstructed via finite etale covers and explicit cyclic formal kernels. No smooth fppf/etale topology comparison is imported."
verification: {}
---

## Statement

Assume AC. Let $R$ be a Henselian discrete valuation ring with finite residue
field $k$, and let $G$ be a smooth commutative separated group scheme of
finite presentation over $R$. Write $G_{\mathrm{et}}$ for its represented
abelian sheaf on the small etale site, and similarly over $k$.
For every $r\ge1$, restriction to the residue field induces an isomorphism
$$H^r_{\mathrm{et}}(\operatorname{Spec}R,G_{\mathrm{et}})\xrightarrow{\sim}H^r_{\mathrm{et}}(\operatorname{Spec}k,(G_k)_{\mathrm{et}}).$$
No completeness, fraction-field characteristic or connectedness assumption is
required. This is a small-etale assertion, with no assertion identifying
these groups with fppf cohomology of a general smooth group scheme.

## Facts & Assumptions

**Given:** The data and AC in the Statement. Write $\pi$ for one uniformizer.

[A1] AC supplies the quoted geometric and site-model interfaces and implies the dependent-choice convention of the continuous derived-cohomology interface. [[def-axiom-of-choice]] [[thm-choice-implies-dependent-implies-countable-choice]]

[F1] Henselian factor lifting and unique simple-root lifting hold. Under AC, smooth schemes have standard smooth charts, and etale morphisms are locally standard etale. [[def-henselian-pair-and-henselian-local-ring]] [[cor-henselian-local-simple-root-criterion]] [[thm-jacobian-criterion-smooth-morphism]] [[thm-etale-locally-standard-etale]]

[F2] Finite Galois fields have normal bases. The adjugate identity inverts matrices of unit determinant. Finite flat modules over local rings are free. Cayley-Hamilton holds over fields. [[thm-normal-basis-theorem]] [[thm-adjugate-identity-over-a-commutative-ring]] [[thm-finite-flat-modules-over-local-rings-are-free]] [[thm-cayley-hamilton]]

[F3] A finite-dimensional commutative field algebra decomposes into finitely many local factors. [[lem-finite-dimensional-commutative-algebras-decompose-into-local-factors]]

[F4] Finite extensions of finite fields are simple, cyclic Galois extensions; a chosen algebraic closure has absolute Galois group generated topologically by Frobenius. [[cor-finite-extensions-of-finite-fields-are-simple]] [[thm-extensions-of-finite-fields-are-galois-with-cyclic-frobenius-group]] [[thm-existence-of-algebraic-closures]] [[thm-absolute-galois-group-of-finite-field-is-procyclic]]

[F5] Continuous profinite cohomology is the direct limit of finite-quotient cohomology with fixed coefficients. [[thm-continuous-profinite-cohomology-as-direct-limit-of-finite-quotients]]

[F6] For a finite cyclic unramified local cover, the formal reduction kernel of smooth commutative-group points has zero cyclic cohomology in every positive degree. [[lem-formal-smooth-group-kernel-is-cyclically-acyclic-over-unramified-extension]]

[F7] Under AC, abelian sheaves on the fixed small sites have injective resolutions. The actual named-functor acyclic-model lemma computes derived sections using acyclic terms. [[thm-abelian-sheaves-on-a-site-have-enough-injectives]] [[lem-site-slice-restriction-locality-and-composition]]

## Proof

**Proof technique:** construct the finite unramified tower, compute small-etale cohomology by its finite Galois covers, and kill the formal kernel.

**Given:** The data above; every site is taken in one fixed universe.

1.1 We first record finite Henselian algebra facts directly from [F1]. If $E$ is finite free over $R$, every idempotent of $E/\pi E$ lifts uniquely. Lift the idempotent to $b$. Its multiplication characteristic polynomial reduces to $T^a(T-1)^c$. Factor it by [F1] into monic $f_0,f_1$ reducing to these powers; their finite Sylvester coefficient matrix has unit determinant, so [F2] gives $u f_0+v f_1=1$. Cayley-Hamilton after extension to $\operatorname{Frac}(R)$ gives $f_0(b)f_1(b)=0$, since $E$ injects into that extension. Thus $u(b)f_0(b)$ is the desired idempotent. Multiplication by $1-x$ for $x\in\pi E$ is invertible by its unit matrix determinant. An idempotent in $\pi E$ is therefore zero, giving uniqueness of lifts. Residue coordinate idempotents from [F3] consequently split $E$ into local factors: a residue unit lifts to a unit by the same $1-x$ argument. [F1, F2, F3, given, construct, algebra]

1.2 We also use a direct smooth lifting argument. A residual rational point of a smooth scheme over a Henselian local ring lifts to a section: choose a standard smooth chart from [F1], lift its free residue coordinates, and set them equal to those lifts. The resulting square Jacobian is invertible, so this cuts out an etale neighbourhood. A standard-etale presentation reduces its lifting to a monic simple-root equation. Henselian simple-root lifting gives the section and preserves every required unit denominator. This uses only one finite chart and finitely many coordinate lifts. [A1, F1, choose, construct, algebra]

2.1 In particular any finite free local $R$-algebra $B$ with $\pi B$ its maximal ideal is Henselian. Given a monic polynomial $h\in B[T]$ and a coprime monic factorization of its reduction, its algebra $E=B[T]/h$ is finite free over $R$. The corresponding residue idempotent lifts uniquely by step 1.1. The ring $B$ is Noetherian because it is finite over the Noetherian DVR $R$. The two summands of $E$ are finite projective over $B$, hence finite free by the Noetherian local interface [F2]. The characteristic polynomials of multiplication by $T$ on these summands multiply to $h$ and reduce to the prescribed factors: the determinant is compatible with direct sums and the power basis of $B[T]/h$ gives characteristic polynomial $h$. Uniqueness follows from uniqueness of the idempotent, since the summands have annihilating monic polynomials of the specified degrees. This is exactly the Henselian factor-lifting condition on $B$. [F1, F2, step 1.1, construct, algebra]

3.1 Fix one algebraic closure $\bar k$ of $k$. For each $n\ge1$, let $k_n\subset\bar k$ have degree $n$ over $k$, and lift one monic irreducible polynomial presenting $k_n$ to a monic $f_n\in R[T]$. Put $B_n=R[T]/f_n$. Its residue is $k_n$, and it is finite free of rank $n$. Every element with nonzero residue is a unit: its multiplication matrix is invertible modulo $\pi$, hence over $R$. Thus $B_n$ is local with maximal ideal $\pi B_n$. It is a DVR: any nonzero element has a least valuation among its finitely many coordinates and is $\pi^a$ times an element of nonzero residue; multiplication by $\pi$ is injective. Step 2.1 makes it Henselian. The derivative $f_n'$ is a unit in $B_n$ by separability of its residue, so its polynomial presentation is standard etale. [A1, F1, F2, F4, step 2.1, choose, construct, algebra]

4.1 Every $k$-embedding $k_n\to k_m$ for $n\mid m$ lifts uniquely to an $R$-map $B_n\to B_m$: lift the corresponding simple root of $f_n$ by [F1] over the Henselian ring $B_m$. The maps associated to the fixed inclusions $k_n\subseteq k_m$ are compatible by uniqueness. Each is injective, since its source is a DVR, its restriction to $R$ is injective, and a nonzero kernel would contain a power of $\pi$. Frobenius lifts uniquely to $\sigma_n\in\operatorname{Aut}_R(B_n)$ of order $n$. All $n$ distinct residue roots lift, giving $B_n\otimes_RB_n\cong\prod_{i<n}B_n$. A normal basis of $k_n/k$ lifts to a conjugate basis over $R$ by its unit determinant. Its coordinate invariants have rank one, generated by the trace of the basis element, which is a unit in $R$. Thus $B_n^{\sigma_n}=R$. The same argument over $B_n$ applies to every $B_m/B_n$ with $n\mid m$. These are exactly the finite cyclic cover hypotheses in [F6]. [F1, F2, F4, step 3.1, construct, algebra]

5.1 The pointed covers $\operatorname{Spec}B_n$ are cofinal among etale neighbourhoods of the geometric closed point. Indeed any such neighbourhood $V\to\operatorname{Spec}R$ has a residual point over some finite $k_n$. After base change to $B_n$ it has a $k_n$-point. The explicit smooth-point lifting argument of step 1.2, applied to this etale neighbourhood over the Henselian $B_n$, gives a section. This is a map $\operatorname{Spec}B_n\to V$ preserving the residual point. The argument also shows that a covering family of any $\operatorname{Spec}B_n$ admits a refinement by one $\operatorname{Spec}B_m$ with $n\mid m$: choose one member and a point above its closed point, extend the finite residue field, and lift. No claim of cofinality for neighbourhoods of the generic point is used. [F1, step 1.2, step 3.1, step 4.1, choose, construct, algebra]

6.1 For an arbitrary abelian sheaf $F$ on the small etale site put $T(F)=\operatorname{colim}_nF(B_n)$, with divisibility indexing, and $\Gamma=\operatorname{Gal}(\bar k/k)$. This is a discrete continuous $\Gamma$-module. The functor $T$ is exact: kernels commute with the filtered colimit; to lift the germ of a section across a sheaf epimorphism, take its local lift on a covering and use the cofinal refinement in step 5.1. Moreover $T(F)^{\operatorname{Gal}(\bar k/k_n)}=F(B_n)$. To check the only nonformal inclusion, represent an invariant germ at some $B_m$ with $n\mid m$. Equality with its $n$th Frobenius translate holds at a finite later level. At that level it is fixed by the cyclic group over $B_n$, whose generator is that Frobenius. The sheaf equalizer for the finite Galois cover descends it uniquely to $B_n$. Injectivity follows from the same covering sheaf condition. In particular $T(F)^\Gamma=F(R)$, taking $B_1=R$ through its unique residual identification. [F4, step 4.1, step 5.1, construct, algebra]

7.1 If $I$ is an injective abelian sheaf, $H^q(C_n,I(B_n))=0$ for $q>0$. The augmented free-abelian sheaf complex of the Cech nerve of the covering $\operatorname{Spec}B_n\to\operatorname{Spec}R$ is exact: on a cover where it has a section, inserting that section contracts the augmentation, and local exactness is sheaf exactness. Applying $\operatorname{Hom}(-,I)$ preserves exactness by injectivity. The resulting Cech complex is precisely the usual group-cochain complex $\operatorname{Map}(C_n^q,I(B_n))$, using the tensor product identity of step 4.1. Thus [F5] and step 6.1 give $H^q_{\mathrm{cont}}(\Gamma,T(I))=0$ for $q>0$. [F5, F7, step 4.1, step 6.1, construct, algebra]

7.2 Take $F=G_{\mathrm{et}}$ and write $P=T(F)$. Reduction gives an exact sequence of discrete continuous abelian $\Gamma$-modules $0\to M\to P\to G(\bar k)\to0$. Surjectivity follows by descending a point to a finite $k_n$ and lifting that smooth residual point over $B_n$ by step 1.2. The kernel is the filtered union of $M_n=\ker(G(B_n)\to G(k_n))$. By the fixed-group calculation in step 6.1, $M^{\operatorname{Gal}(\bar k/k_n)}=M_n$. The finite cyclic cohomology of $M_n$ is zero in all positive degrees by [F6] and step 4.1. Applying [F5] gives $H^r_{\mathrm{cont}}(\Gamma,M)=0$ for every $r\ge1$. [F5, F6, step 3.1, step 4.1, step 6.1, construct, algebra]

8.1 Apply $T$ to one actual injective resolution $F\to I^\bullet$, supplied under AC by [F7]. Form the first-quadrant double complex $C^p_{\mathrm{cts}}(\Gamma,T(I^q))$. The vertical cohomology is zero in $q>0$ and is $C^p_{\mathrm{cts}}(\Gamma,T(F))$ in degree zero: $T$ is exact by step 6.1, and the continuous-cochain functor is exact, because a continuous cochain has finite image and finitely many coefficient preimages lift it continuously. Horizontally step 7.1 gives zero in $p>0$ and $I^q(R)$ in degree zero. The two filtrations of its direct-sum total complex therefore compute respectively continuous-cochain cohomology of $T(F)$ and $H^r(I^\bullet(R))$. Only finitely many summands occur in each total degree; the collapse is obtained by eliminating the off-axis cycles successively using the exact rows or columns. This proves naturally $H^r_{\mathrm{et}}(R,F)=H^r_{\mathrm{cont}}(\Gamma,T(F))$, without assuming a continuous-group injective model. The identical argument over $k$, using the finite covers $k_n$, gives $H^r_{\mathrm{et}}(k,(G_k)_{\mathrm{et}})=H^r_{\mathrm{cont}}(\Gamma,G(\bar k))$. Thus an actual site resolution is compared; arbitrary Cech cohomology is not declared equal to sheaf cohomology. [F5, F7, step 6.1, step 7.1, construct, algebra]

9.1 The continuous-cochain long exact sequence of step 7.2 now identifies $H^r(\Gamma,P)$ with $H^r(\Gamma,G(\bar k))$ for every $r\ge1$. For precision the cochain sequence is exact: continuous cochains on the compact profinite power have finite image; finitely many coefficient preimages in $P$ lift them continuously, so no global coefficient section is assumed. Both maps are actual coefficient reduction. The identifications of step 8.1 are natural in that map, so their composite is exactly the stated residue restriction. Degree zero is excluded: the formal kernel of $G(R)\to G(k)$ need not be zero. All arguments admit dimension zero and disconnected $G$, and no completeness or fraction-field characteristic restriction was used. This proves the small-etale Statement only, retaining the AC convention in [A1]. [A1, F5, F7, step 8.1, step 7.2, algebra] ∎
