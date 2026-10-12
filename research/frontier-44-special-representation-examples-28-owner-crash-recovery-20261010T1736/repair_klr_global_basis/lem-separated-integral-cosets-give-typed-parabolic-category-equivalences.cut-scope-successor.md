---
id: lem-separated-integral-cosets-give-typed-parabolic-category-equivalences
kind: lemma
title: "Separated integral cosets give typed parabolic category equivalences"
status: draft
origin: session
pipeline_run: frontier-44-special-representation-examples-28
deps:
  - lem-nonintegral-harish-chandra-tensor-projective-comparison
  - def-parabolic-category-o-for-a-standard-parabolic
  - def-integral-parabolic-category-o-block-for-higher-level-schur-weyl-duality
  - thm-central-character-summands-split-into-linkage-blocks
  - thm-strong-linkage-principle-for-verma-modules
  - lem-integral-reflection-orbits-are-linkage-equivalence-classes
  - thm-every-category-o-object-has-finite-length
  - thm-category-o-has-enough-projectives
  - thm-pbw-ordered-monomial-basis-for-the-enveloping-algebra
  - thm-finite-dimensional-simple-modules-are-classified-by-dominant-highest-weights
  - def-axiom-of-choice
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Bernstein and Gelfand, Tensor products of finite and infinite dimensional representations of semisimple Lie algebras"
      url: "https://www.numdam.org/item/CM_1980__41_2_245_0.pdf"
      locator: "Sections 5.1–5.12; historical owner HC/coset notes supply the reconstruction being expanded here, rather than a new claim of source retrieval by this author."
    - title: "Brundan and Kleshchev, The degenerate analogue of Ariki's categorification theorem"
      url: "https://arxiv.org/pdf/0901.0057"
      locator: "Integral component conventions are consumed through the local actual16 Definition; this proof constructs the complex-to-integral category boundary."
axiom_use: "Inherited AC for the stated category-O projective and HC suppliers; choosing projective generators and extending their presentations."
---

## Statement

Assume AC. Work in genuine type-$A$ parabolic category $\mathcal O$ for
$\mathfrak{gl}_N(\mathbb C)$ with its fixed Borel. Its column Levi has ordered
blocks of heights $q_1\ge\cdots\ge q_l$. All entries in column $j$ lie in
$c_j+\mathbb Z$, where the original admissibility condition is
$c_j-c_k\in\mathbb Z\Rightarrow c_j=c_k$. Use the source highest-weight
convention $\eta_i=a_i+i-1$ and half-sum
$\rho_i=(N+1-2i)/2$, with the column reading prescribed by the source Borel.
For each occurring entry coset $\kappa$ retain its columns in their original
order. Fix an order on the finite set of cosets; no order on $\mathbb C$ is used.

Subject to the local HC tensor-projective comparison stated in [F1], stable
sorting of the coordinates by $\kappa$ gives an exact, complex-linear
equivalence of the genuine parabolic categories, carrying each ordinary
Verma label by the dot permutation and carrying the corresponding generalized
standard, simple head and projective cover. On each linkage block, the sorted
category is equivalent to the product of the corresponding parabolic blocks
for $\mathfrak{gl}_{N_\kappa}$, where
$N_\kappa=\sum_{j\in\kappa}q_j$. Product means the abelian category generated
by finite presentations of outer tensor products, equivalently modules over
the tensor product of the finite block endomorphism algebras.

For the original pyramid with $n$ rows put $n_\kappa=\max_{j\in\kappa}q_j$.
The component integral entry dictionary is exactly
$$a_i^{\mathrm{int}}=a_i-c_\kappa+n-n_\kappa,\qquad m_j=q_j-n_\kappa,\qquad \inf I_\kappa=1-n_\kappa.$$
Thus $m_j+1-\inf I_\kappa=q_j$, with the original nonincreasing retained
heights and charges. For the admitted-ground subcategories, where each original entry has a
nonnegative integral difference from its own ground entry, this dictionary
lands in the bounded-below admitted integral component models of [F4]. For
other genuine parabolic blocks it records the integral weight/coset
dictionary and the trace shift, without asserting membership in that fixed
admitted cut. If the component follows $B_\kappa$ sorted coordinates, its
Levi highest weight and the integral highest weight differ by the scalar
trace-character shift
$$\delta_\kappa=B_\kappa+c_\kappa-n+n_\kappa.$$
This shift is a Lie algebra character and requires no integrality of
$c_\kappa$. Singular repeated-entry linkage blocks are included. The original
complex origins, component entry multisets and their scalar centres remain
recorded; different complex cosets are not merged into one integral block.

Sorting commutes coherently with finite tensoring and its invariant Casimir
and permutation maps. The separated product decomposition is blockwise and
does not assert that unrestricted tensoring is componentwise. The proof gives
its actual filtration and block-projection comparison. Choices of sorting
word with the same stable permutation yield the natural comparison fixed on
the chosen reference highest vector and its tensor-projective presentations.

## Facts & Assumptions

**Given:** The original admissible origins and nonincreasing column heights, the source Borel and highest-weight convention, and AC. No realness, mutual comparability, regularity of the subject block, or integrality across different cosets is assumed.

[F1] The local tensor-projective comparison [[lem-nonintegral-harish-chandra-tensor-projective-comparison]]: for a regular weight $\lambda$ decreasing within each integral shifted-coordinate coset, finite integral-coordinate tensors $E\otimes\Delta_\lambda$ and their direct summands give projective generators of $\mathcal O_{\lambda+\mathbb Z^N}$; for finite $E,F$ their Hom spaces are naturally $(E^*\otimes F\otimes U_{\chi_\lambda})^{\mathfrak g}$, with evaluation and composition. Its same all-weight Duflo input is required for $s\cdot\lambda$ after a distinct-coset adjacent swap. This is a conditional supplier until its actual all-weight Duflo proof is accepted; the present proof does not supply that missing density theorem.

[F2] Finite length, projective covers and PBW: [[thm-every-category-o-object-has-finite-length]], [[thm-category-o-has-enough-projectives]], [[thm-pbw-ordered-monomial-basis-for-the-enveloping-algebra]]. The scalar centre of $\mathfrak{gl}_N$ splits off from the semisimple theory.

[F3] Actual linkage, not a central-character identification: [[thm-central-character-summands-split-into-linkage-blocks]], [[thm-strong-linkage-principle-for-verma-modules]], [[lem-integral-reflection-orbits-are-linkage-equivalence-classes]]. In type $A$, the integral roots are exactly differences of shifted coordinates in the same $\mathbb C/\mathbb Z$ coset; their group permutes those coordinates.

[F4] Genuine parabolic modules and the admitted integral component convention: [[def-parabolic-category-o-for-a-standard-parabolic]], [[def-integral-parabolic-category-o-block-for-higher-level-schur-weyl-duality]], [[thm-finite-dimensional-simple-modules-are-classified-by-dominant-highest-weights]]. Only the Levi-integrable simple criterion, Serre property, largest generalized-Verma quotient and the explicit integral charge/height convention are consumed. The proof below constructs the nonintegral product rather than importing integral highest-weight conclusions for arbitrary complex labels.

[F5] AC [[def-axiom-of-choice]], with the exact inherited/projective use recorded above.

## Proof

**Proof technique:** direct.

**Given:** Use the data of the Statement and [F1]–[F5]. Normalize Chevalley matrices by $E=E_{i,i+1}$, $F=E_{i+1,i}$ and $H=[E,F]$. Twist by $\phi=\exp(\operatorname{ad}E)\exp(\operatorname{ad}(-F))\exp(\operatorname{ad}E)$ with twisted action $x\cdot v=\phi(x)v$.

1.1 Every $H$-weight in the relevant weight-coset category is nonintegral when the adjacent shifted coordinates belong to different entry cosets: $\eta(H)=(\eta+\rho)_i-(\eta+\rho)_{i+1}-1$, and weight changes are integral. This holds in every subquotient. If $Fv=0$ for a weight vector of weight $h$, choose $r\ge0$ maximal with $E^rv\ne0$, using positive-root local nilpotence in $\mathcal O$. The $\mathfrak{sl}_2$ relation gives $FE^{r+1}v=-(r+1)(h+r)E^rv$, a contradiction. Thus $F$ is injective on every object and subquotient of that category. [given, algebra]

2.1 Powers of $F$ satisfy both Ore conditions in $U(\mathfrak g)$: iterating $Fu=uF+[F,u]$ gives the finite binomial commutation formula, since $\operatorname{ad}F$ is locally nilpotent on each enveloping element. PBW makes $U$ a domain. Its localization $U_F=\bigcup_{k\ge0}F^{-k}U$ is a directed union of free right $U$-modules; consequently localization $M_F=U_F\otimes_U M$ is exact. Step 1.1 makes $M\to M_F$ injective, and the diagram of short exact sequences $0\to M\to M_F\to M_F/M\to0$ proves exactness of $C_F(M)=M_F/M$. Therefore $T_s(M)={}^{\phi}C_F(M)$ is exact. The adjoint exponentials defining $\phi$ are finite on every $u\in U$; they send $E,F,H$ to $-F,-E,-H$ and act as the adjacent permutation on the Cartan. [F2, step 1.1, construct, algebra]

3.1 Let $v$ be the normalized highest vector of $\Delta_\eta$. The class $F^{-1}v$ becomes a highest vector of weight $s\cdot\eta$: its new $E$ is $-F$, whose value lies in $\Delta_\eta$; the other transformed positive roots are positive roots distinct from $\alpha_i$, and commuting them through $F^{-1}$ leaves positive-root terms killing $v$. The new $F$ sends $F^{-r}v$ to $r(\eta(H)+r+1)F^{-r-1}v$, with every scalar nonzero. PBW, ordered with $F$ first, gives the basis of the localized quotient with $F$-powers $-1,-2,\ldots$; reflection permutes the remaining positive roots. Hence the displayed vector generates the quotient. Its character is $s(e^\eta\sum_{r\ge1}e^{r\alpha_i}\prod_{\beta>0,\beta\ne\alpha_i}(1-e^{-\beta})^{-1})=\operatorname{ch}\Delta_{s\cdot\eta}$. The highest-vector surjection is an isomorphism by equality of each finite weight dimension. This fixes its scalar by $v_{s\cdot\eta}\mapsto[F^{-1}v_\eta]$. [F2, step 2.1, construct, algebra]

4.1 For finite-dimensional $X$, localization commutes with tensoring. On $M_F\otimes X$ the total operator $F_M+F_X$ has inverse $F_M^{-1}\sum_{k\ge0}(-F_M^{-1}F_X)^k$; the sum is finite since $F_X$ is nilpotent. The localization universal property identifies $(M\otimes X)_F$ with $M_F\otimes X$ and identifies the embedded $M\otimes X$. Quotienting and the Weyl matrix $W_X=\exp(E_X)\exp(-F_X)\exp(E_X)$ identify $T_s(M\otimes X)$ naturally with $T_s(M)\otimes X$. For two finite tensor factors, $W_{X\otimes Y}=W_X\otimes W_Y$, so associativity and the tensor-unit diagrams commute. The diagonal Weyl action fixes the invariant Casimir and commutes with flips, proving their compatibility as actual operators. [step 2.1, construct, algebra, step 3.1]

5.1 Choose regular coset-dominant $\lambda$ in the weight-coset category. Crossing distinct cosets preserves each coset's internal order, so $s\cdot\lambda$ meets the same regular coset-dominance hypotheses; its central character equals $\chi_\lambda$. For a generator map encoded by $t\in(E^*\otimes F\otimes U_\chi)^{\mathfrak g}$, its action is the finite sum of finite-tensor matrix entries followed by enveloping operators on $\Delta_\lambda$. The invariant matrix map commutes with the total $F$ on the tensor modules, so its unique localized extension agrees with the same enveloping-operator formula under the tensor localization of step 4.1. Passing to the quotient, twisting and applying the matrices of step 4.1 transforms $t$ by simultaneous Weyl conjugation in its three factors. Each $t$ lies in a finite adjoint submodule, so that conjugation is $\exp(E_{\mathrm{diag}})\exp(-F_{\mathrm{diag}})\exp(E_{\mathrm{diag}})$ and fixes $t$, since its diagonal $\mathfrak g$-action is zero. Thus $T_s$ induces exactly the common Hom identification of [F1], respecting composition and identity. The scalar from step 3.1 is the same on all generators $X\otimes\Delta_\lambda$, so it cancels on every generator Hom space; an arbitrary unnormalized scalar is not treated as a literal equality of highest vectors. [F1, step 3.1, step 4.1, algebra]

6.1 Every object has a finite presentation by finite direct sums and summands of the generators in [F1]. Exactness and steps 3.1–4.1 show that its $T_s$ image is the cokernel of a map between target generators, hence belongs to the target category $\mathcal O$. Step 5.1 identifies all generator maps. Every target presentation therefore lifts, proving essential surjectivity. Applying Hom from a generator to a source presentation and its target presentation gives identical cokernel diagrams, since those generators are projective; applying Hom from a presented object gives identical kernel diagrams. This proves full faithfulness on all objects. Idempotents are preserved and reflected by the generator Hom identification, so summands cause no gap. Consequently $T_s$ is an exact category equivalence, established on actual maps and presentations. [F1, F2, step 2.1, step 5.1, construct, algebra]

7.1 Compose these swaps in a stable bubble sort by the fixed coset order. Each swap crosses different cosets; none permutes indices inside a coset. The composite sends $\Delta_\eta$ to $\Delta_{w\cdot\eta}$ and therefore sends its unique simple head to $L(w\cdot\eta)$. It transports projective covers by exact equivalence and essentiality. Every original column consists entirely of one coset; stable sorting retains its coordinates as a consecutive block and retains their internal order. At the end, the original Levi simple roots are therefore positive simple roots of the sorted column Levi. Their highest-weight integral-dominance pairings are unchanged. By the actual Levi simple criterion and Serre property of [F4], the composite and its inverse restrict to the full parabolic subcategories. Because generalized Vermas are the largest parabolic-finite quotients of ordinary Vermas, their quotient universal property is transported, giving the claimed generalized-standard labels as modules. No intermediate swap is asserted to preserve an intermediate parabolic subcategory. [F4, step 3.1, step 6.1, construct, algebra]

8.1 The coherent comparison of two sorting paths can be made on tensor-projective generators. Each path has the common [F1] Hom matrix identification of step 5.1; their final Weyl representatives differ at most by a diagonal torus matrix when they induce the same coordinate permutation. Diagonal simultaneous action again fixes invariant matrices. Their reference-standard highest lines admit a unique comparison after fixing its nonzero scalar; tensor it with $X$ for every generator and summand. The equality on generator Hom matrices makes these comparisons natural, and taking presentation cokernels extends them uniquely to all objects, independently of a presentation by full faithfulness. Comparisons for three paths compose because they coincide on the normalized reference generator and its tensor presentations. This proves the stated normalization and coherence, without asserting an unnormalized inverse-twist or braid identity. [F1, step 4.1, step 5.1, step 6.1, construct, algebra, step 7.1]

9.1 After sorting let $\mathfrak q$ have contiguous coset Levi $\mathfrak l=\bigoplus_\kappa\mathfrak{gl}_{N_\kappa}$ and positive outside radical $\mathfrak u$. In a fixed linkage block $C$, [F3] says exactly that highest labels are obtained by permutations within the coset blocks, including when entries repeat. Hence all highest labels have the same block-centre values $z_\kappa$. For each initial union of coset blocks, write $Z_r$ for its diagonal trace and $b_r$ for the common highest-label value. Every module weight satisfies $b_r-\mu(Z_r)\in\mathbb Z_{\ge0}$: this holds on simple highest-weight modules by their negative-root weights and on all finite-length objects by their composition series. An outside negative root strictly lowers at least one prefix; an inside root leaves every prefix fixed. The simultaneous top section $S(M)=\{v:Z_rv=b_rv\ \forall r\}$ is therefore a Levi module and is annihilated by $\mathfrak u$. It is exact, since it is a direct sum of Cartan weight spaces and the Cartan acts semisimply. These are integer differences from fixed complex values, not inequalities on complex numbers. [F2, F3, construct, algebra, step 8.1]

10.1 In fact $M^{\mathfrak u}=S(M)$. If a nonzero homogeneous radical-invariant vector lies in a lower prefix section, its Levi cyclic module has a highest vector: its positive Levi orbit is finite-dimensional and a maximal weight therein is killed by every positive Levi root. Radical invariants are Levi-stable because $[\mathfrak l,\mathfrak u]\subset\mathfrak u$. That Levi highest vector is thus a full $\mathfrak g$ highest vector. Its cyclic module has a simple highest-weight quotient of the same weight and the same strictly lower prefix, contradicting the actual label restriction in [F3]. Decomposing a general invariant into centre weights gives the same contradiction componentwise. Moreover $S$ detects nonzero objects: every simple of $C$ has a nonzero highest vector in its top section, and exactness plus a composition series proves the assertion for every nonzero finite-length object. [F2, F3, step 9.1, algebra]

11.1 Let $C_{\mathfrak l}$ be the product integral-reflection orbit for the Levi highest weights with these fixed scalar centres, and define $R(X)=U(\mathfrak g)\otimes_{U(\mathfrak q)}X$, with $\mathfrak u$ acting by zero. PBW makes $R$ exact and identifies $S(R(X))=X$ naturally: every outside negative PBW monomial lowers some prefix, so only its degree-zero term contributes. For a Levi simple $L_{\mathfrak l}(\eta)$, induction is a quotient of the ordinary $\mathfrak g$ Verma of label $\eta$, hence lies in $C$ by [F3] and has finite length by [F2]. Every composition factor has nonzero top section by step 10.1; exactness and $S(R(L_{\mathfrak l}(\eta)))=L_{\mathfrak l}(\eta)$ imply that there is only one factor. Thus $R(L_{\mathfrak l}(\eta))=L_{\mathfrak g}(\eta)$ is simple. Exactness extends block membership and finite length to $R(X)$ for every finite-length $X$ by a Levi composition series. [F2, F3, step 9.1, step 10.1, construct, algebra]

12.1 Induction and radical invariants are adjoint, and step 10.1 identifies the latter with $S$. Their unit is PBW's top-section isomorphism $X\to S(R(X))$. For the counit $R(S(M))\to M$, applying exact $S$ gives this identity, so its kernel and cokernel have zero top section; both are finite-length objects of $C$ and vanish by detection in step 10.1. Hence $R$ and $S$ are inverse exact category equivalences. This argument proves full faithfulness from the actual unit and counit. It does not deduce it from composition matrices. By induction transitivity, ordinary Levi Vermas go to ordinary $\mathfrak g$ Vermas; the corresponding column-generalized Vermas go to their genuine column-parabolic inductions. The Levi integrability criterion restricts the equivalence to the column-parabolic subcategories just as in step 7.1; projective covers again follow by exact equivalence. [F4, step 10.1, step 11.1, construct, algebra]

13.1 Each finite Levi factor block has a finite projective generator (finite label orbit and [F2], or its parabolic reflector). For two outer tensor projectives, their Hom is the tensor product of their factor Homs, by tensor-Hom and the finite-dimensional factor Hom spaces; applying a factor-projective Hom successively is exact: a fixed weight for the other factors cuts a finite-generated factor-$\mathcal O$ module, since PBW bounds the negative monomials in those fixed coordinates; factor projectivity therefore applies weight by weight. The resulting multiplicity module is in the remaining factor $\mathcal O$, by the same PBW finiteness with the finitely many generator weights of the projective. Their outer tensor sum therefore is projective, and its simple quotients cover all factor tuples. Those tuples exhaust the simple labels of the direct-sum Lie algebra: the outer tensor of the factor simples is cyclic on the tensor of their highest vectors. Any nonzero submodule has a highest vector by positive-root local finiteness and bounded highest-weight support; taking invariants successively in the separate positive root algebras leaves only that tensor highest line, because a simple highest-weight factor has no other highest vector. The submodule thus contains the cyclic generator, proving simplicity and identifying the unique simple quotient of the direct-sum Verma. Thus the outer tensor generator gives finite presentations of every object and has the tensor-product endomorphism algebra. Applying the generator Hom and its presentation inverse proves the product description in the Statement. This also proves standard/simple/projective tensor labels as objects, not just as classes. [F2, F4, step 12.1, construct, algebra]

14.1 The original tableau convention gives $\eta_i+\rho_i=a_i+(N-1)/2$, so dot sorting is literally stable sorting of the $a_i$. In the sorted $\kappa$ block the Levi coordinate is $a_t+B_\kappa+t-1$. The integral coordinate from the Statement is $a_t-c_\kappa+n-n_\kappa+t-1$; their difference is exactly $\delta_\kappa$. Tensoring with the one-dimensional Lie algebra representation $x\mapsto\delta_\kappa\operatorname{tr}(x)$ is an exact inverse equivalence with inverse shift $-\delta_\kappa$, and its tensor associativity is ordinary scalar multiplication. It carries highest vectors, induced standards, simple heads and projective covers. Since a ground entry in global row $r$ is $c_\kappa+1-r$, its integral image is $1-(r-n+n_\kappa)$; these are the actual bottom-aligned integral ground rows. The retained heights give $m_j=q_j-n_\kappa$ nonincreasing and $m_j+1-(1-n_\kappa)=q_j$. This checks the exact component hypotheses of [F4], without treating a nonintegral scalar trace character as an algebraic determinant character. [F4, step 7.1, step 13.1, construct, algebra]

15.1 For clarity about tensor transport, the ordinary induction tensor identity is $R(X)\otimes V\cong U(\mathfrak g)\otimes_{U(\mathfrak q)}(X\otimes\operatorname{Res}_{\mathfrak q}V)$; it follows from the coproduct and antipode and is natural in $X,V$. The restricted vector representation has its actual prefix-$\mathfrak q$ filtration whose sections are the coset vector modules $V_\kappa$ with outside radical zero. Exact induction therefore gives a filtration of $R(X)\otimes V$ with sections $R(X\otimes V_\kappa)$. A projected linkage/entry-multiset tensor summand admitting an entry change in coset $\kappa$ kills the other sections: their highest labels change a different coset multiset, so their central characters or linkage classes differ by [F3]. Only the $\kappa$ section survives, giving its natural component comparison; the dual vector representation has the reversed filtration and the same argument. Thus the residue-projected operators transport to the appropriate integral factor. Iterated tensor comparisons use the same actual filtrations and the associative tensor identity, so their diagrams commute; no unrestricted tensor-product assertion is inferred. [F3, step 11.1, step 12.1, construct, algebra, step 14.1]

16.1 The trace-character shift changes the relevant vector Casimir eigenvalue by its scalar: for $\Omega=\sum_{i,j}E_{ij}\otimes E_{ji}$, replacing the first-factor action by $E_{ij}+\delta_{ij}\delta$ adds $\delta\sum_i1\otimes E_{ii}=\delta$ on a vector representation; the dual gives the corresponding opposite shift. The offset can be computed explicitly: on a vector-tensor Verma section of highest label $\eta+\varepsilon_i$, the quadratic central element has value $\sum_k\eta_k(\eta_k+N+1-2k)$, while its value on the vector is $N$. Taking half the difference gives the global tensor-Casimir eigenvalue $\eta_i+1-i$. For the Levi coordinate $t=i-B_\kappa$, the same calculation gives $\eta_i+1-t$, greater by $B_\kappa$. Hence the trace shift contributes $\delta_\kappa-B_\kappa=c_\kappa-n+n_\kappa$ to the original residue: $(c_\kappa+q_j-n)-(q_j-n_\kappa)=c_\kappa-n+n_\kappa$. This computes the parameter dictionary and the block projections of step 15.1; no integer residue is silently equated with its complex original. It does not replace a proof of the full affine-Hecke natural-transformation presentation. Together with steps 4.1 and 15.1 this proves the claimed normalized compatibility, and steps 7.1, 12.1–13.1 and 14.1 prove the typed category equivalence with all stated labels and hypotheses. [step 4.1, step 7.1, step 12.1, step 13.1, step 14.1, step 15.1, algebra] ∎

## Proof status and adoption boundary

This is a complete local conditional construction, pending the precise [F1]
all-weight Duflo/HC input and current integral component convention. It is a
guarded research proposal, not a canonical item, readiness decision or native
author result. The authentic historical coset note supplied the Ore/Serre/top-
section route; this carrier expands its generator Hom proof, induction
membership, actual product, normalization and distinct $N,n,N_\kappa,n_\kappa$
scalar bookkeeping. It does not prove the Duflo density theorem, the Fock
canonical-basis identification, or Whittaker simple-image assertions.
