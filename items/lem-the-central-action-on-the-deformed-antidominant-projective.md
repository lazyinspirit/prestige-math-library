---
id: lem-the-central-action-on-the-deformed-antidominant-projective
kind: lemma
title: The central action on the deformed antidominant projective
status: published
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 7
deps: [thm-lifting-of-indecomposable-projectives-to-the-deformed-family,
       thm-harish-chandra-isomorphism-for-the-center,
       prop-harish-chandra-projection-is-multiplicative-on-the-center,
       cor-central-characters-are-dot-weyl-orbits,
       def-axiom-of-choice,
       def-the-antidominant-projective-and-the-soergel-functor,
       lem-the-harmonic-complement-of-the-coinvariant-algebra,
       prop-casimir-eigenvalue-on-a-highest-weight-module,
       lem-generic-shapovalov-radical-on-a-casimir-hyperplane,
       thm-shapovalov-determinant-formula,
       prop-restricted-duality-is-an-exact-involution-on-category-o,
       lem-dominant-norm-distance-comparison,
       lem-weight-norm-bound-for-finite-dimensional-simple-modules,
       def-harish-chandra-projection,
       lem-harish-chandra-projection-computes-highest-weight-scalars,
       def-regular-integral-category-o-block-and-its-antidominant-weight,
       thm-simple-objects-of-category-o-are-highest-weight-modules,
       thm-category-o-has-enough-projectives,
       prop-projective-covers-in-o-are-indecomposable-and-unique,
       thm-projectives-in-category-o-have-verma-flags,
       thm-bgg-reciprocity,
       thm-bgg-verma-homomorphism-criterion,
       lem-tensoring-with-a-finite-dimensional-module-preserves-verma-flags,
       lem-tensoring-a-projective-with-a-finite-dimensional-module-is-projective,
       prop-translation-functors-are-exact-and-biadjoint-across-a-wall,
       prop-highest-weight-of-the-dual-representation,
       thm-central-character-summands-split-into-linkage-blocks,
       lem-block-projection-preserves-projectives,
       def-the-deformed-category-o-family-and-its-specializations,
       prop-base-change-freeness-and-specialization-in-the-deformed-family,
       thm-chevalley-shephard-todd-for-finite-weyl-groups,
       lem-weyl-orbit-sums-form-a-basis-of-finite-weyl-invariants,
       def-the-coinvariant-algebra-of-a-finite-weyl-group,
       lem-the-coinvariant-algebra-is-a-gorenstein-algebra-with-one-dimensional-socle,
       thm-nakayama-lemma,
       lem-finite-variable-polynomial-rings-over-fields-are-ufds,
       thm-the-weyl-group-acts-simply-transitively-on-weyl-chambers]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Wolfgang Soergel, Kategorie O, perverse Garben und Moduln ueber den Koinvarianten zur Weylgruppe, J. Amer. Math. Soc. 3 (1990) 421-445 (MPIM preprint 1989/46 full text)"
      url: "https://archive.mpim-bonn.mpg.de/3653/1/preprint_1989_46.pdf"
      locator: "Section 2.2, Lemmas 3 and 4 and Theorem 8 (preprint pp. 11-14), including the deferred proof of Theorem 8"
    - title: "Wolfgang Soergel, The combinatorics of Harish-Chandra bimodules, J. reine angew. Math. 429 (1992) 49-74 (full text)"
      url: "http://sporadic.stanford.edu/macdo/papers/SoergelHC.pdf"
      locator: "Section 3.2, Theorem 9: Z\\otimes T -> End P_lambda surjective with image T^lambda \\otimes_{T^lambda} T and common kernel"
    - title: "Wolfgang Soergel, Universelle versus relative Einhuelle: Eine geometrische Untersuchung von Quotienten von universellen Einh\u00fcllenden halbeinfacher Lie-Algebren, Math. Ann. 284 (1989), 177-198"
      url: "https://gdz.sub.uni-goettingen.de/download/pdf/PPN235181684_0284/LOG_0020.pdf"
      locator: "Section 1.2, p. 178, and Section 3.5, p. 185, Corollary 8: F = Gamma(X,D)^A = End_S(M)^{g-endl}; full scanned text read via OCR"
    - title: "Wolfgang Soergel, The combinatorics of Harish-Chandra bimodules (1992)"
      url: "http://sporadic.stanford.edu/macdo/papers/SoergelHC.pdf"
      locator: "Section 3.2, Theorems 9-10 and proofs, pp. 62-63; domain Z tensor T and target T^{W_lambda} tensor_{T^W} T"
---

## Statement

Assume the Axiom of Choice. Let $\lambda$ be dominant regular integral,
$S=S(\mathfrak h)$, $R=S_{(0)}$, and $P_R=P_R(w_0,\lambda)$ the deformed
antidominant projective. Write $\operatorname{HC}_\rho\colon Z(U(\mathfrak g))\to S^W$
for the published shifted Harish-Chandra isomorphism,
$\sigma_\lambda(f)(\epsilon)=f(\lambda+\rho+\epsilon)$, and define
$$a_\lambda\colon Z\otimes_{\mathbb C}R\longrightarrow R\otimes_{R^W}R,\qquad z\otimes r\longmapsto\sigma_\lambda(\operatorname{HC}_\rho(z))\otimes r.$$
Then $a_\lambda$ and the action map $Z\otimes R\to\operatorname{End}_{\mathfrak g\otimes R}(P_R)$
are surjective and have the same kernel, inducing a canonical $R$-algebra
isomorphism
$$\operatorname{End}_{\mathfrak g\otimes R}(P_R)\cong R\otimes_{R^W}R.$$
On a generic Verma constituent of highest weight $x\cdot\lambda+\epsilon$, $z$
acts by the scalar
$\operatorname{HC}_\rho(z)(x(\lambda+\rho)+\epsilon)=\sigma_\lambda(\operatorname{HC}_\rho(z))(x^{-1}\epsilon)$;
these scalars vary with $x$, and the center need not act by a single scalar on
$P_R$. After tensoring the right $R$ factor with the residue field at $0$, the
endomorphism algebra becomes $C=S/(S^W_+S)$. More generally, for dot-dominant
integral $\nu$ the corresponding algebra is $R^{W_\nu}\otimes_{R^W}R$, where
$W_\nu$ is the dot stabilizer. Translation out of that facet identifies the
singular antidominant projective with the regular one; under these shifted
Harish-Chandra identifications, its induced endomorphism map is the inclusion
$R^{W_\nu}\otimes_{R^W}R\hookrightarrow R\otimes_{R^W}R$.

## Facts & Assumptions

**Given:** The Axiom of Choice ([[def-axiom-of-choice]]), the regular dominant integral source $\lambda$ with $v=\lambda+\rho$, the deformation algebras $S=S(\mathfrak h)$ and $R=S_{(0)}$, the tautological parameter $\tau$ (denoted $\epsilon$ on closed points), the deformed antidominant projective $P_R$ of [[thm-lifting-of-indecomposable-projectives-to-the-deformed-family]], and the suppliers named below.

[F1] The shifted Harish-Chandra map $\operatorname{HC}_\rho(z)(\mu)=\operatorname{pr}(z)(\mu-\rho)$ is an algebra isomorphism $Z(U(\mathfrak g))\to S(\mathfrak h)^W$, and $\operatorname{pr}(zz')=\operatorname{pr}(z)\operatorname{pr}(z')$ ([[thm-harish-chandra-isomorphism-for-the-center]], [[def-harish-chandra-projection]], [[prop-harish-chandra-projection-is-multiplicative-on-the-center]]); a central element $z$ acts on a cyclic highest-weight module of highest weight $\mu$ by the scalar $\operatorname{pr}(z)(\mu)=\operatorname{HC}_\rho(z)(\mu+\rho)$ ([[lem-harish-chandra-projection-computes-highest-weight-scalars]]); central characters satisfy $\chi_\mu=\chi_\nu$ if and only if $\mu\in W\cdot\nu=\{w(\mu+\rho)-\rho\}$ ([[cor-central-characters-are-dot-weyl-orbits]]). These statements commute with extension of scalars along $\mathbb C\to K$ for a characteristic-zero field $K$.

[F2] On a cyclic highest-weight module of highest weight $\mu$ the quadratic Casimir element acts by the scalar $(\mu,\mu+2\rho)$, the form being the one induced by the Killing form ([[prop-casimir-eigenvalue-on-a-highest-weight-module]]).

[F3] The Shapovalov determinant factors as $D_\beta(\mu)\doteq\prod_{\alpha\in\Phi^+}\prod_{n\ge1}(\langle\mu+\rho,\alpha^\vee\rangle-n)^{K(\beta-n\alpha)}$ ([[thm-shapovalov-determinant-formula]]); and if $H_{\alpha,n}$ is a factor hyperplane, then outside a countable union of proper affine subspaces of $H_{\alpha,n}$, with $\mu=\lambda-n\alpha$, $M(\mu)$ is simple, the space of maps $M(\mu)\to M(\lambda)$ is one-dimensional, every nonzero such map is injective with image the Shapovalov radical, and $M(\lambda)/M(\mu)=L(\lambda)$ ([[lem-generic-shapovalov-radical-on-a-casimir-hyperplane]]).

[F4] For dominant $\xi,\eta$ one has $|\xi-w\eta|\ge|\xi-\eta|$ for every $w\in W$, with equality if and only if $w\eta\in W_\xi\eta$ ([[lem-dominant-norm-distance-comparison]]); every weight $\gamma$ of a finite-dimensional simple $L(\nu)$ satisfies $|\gamma|\le|\nu|$ with equality if and only if $\gamma\in W\nu$, and each weight in $W\nu$ occurs with multiplicity one ([[lem-weight-norm-bound-for-finite-dimensional-simple-modules]]).

[F5] Restricted duality $D$ is an exact contravariant equivalence with $D^2\cong\operatorname{id}$, preserving weight-space dimensions, formal characters and simple composition multiplicities ([[prop-restricted-duality-is-an-exact-involution-on-category-o]]).

[F6] Category-$\mathcal O$ structure and the regular block: simples are highest-weight modules ([[thm-simple-objects-of-category-o-are-highest-weight-modules]]); there are enough projectives ([[thm-category-o-has-enough-projectives]]); projective covers are indecomposable and unique up to isomorphism ([[prop-projective-covers-in-o-are-indecomposable-and-unique]]); projectives have finite Verma flags ([[thm-projectives-in-category-o-have-verma-flags]]); BGG reciprocity relates flag multiplicities and composition multiplicities ([[thm-bgg-reciprocity]]); the Verma embedding criterion ([[thm-bgg-verma-homomorphism-criterion]]); tensoring with a finite-dimensional module preserves Verma flags ([[lem-tensoring-with-a-finite-dimensional-module-preserves-verma-flags]]) and projectivity and injectivity ([[lem-tensoring-a-projective-with-a-finite-dimensional-module-is-projective]]); translation functors across a wall are exact and biadjoint ([[prop-translation-functors-are-exact-and-biadjoint-across-a-wall]]); the highest weight of a dual finite-dimensional module ([[prop-highest-weight-of-the-dual-representation]]); central-character summands split into linkage blocks and their projections preserve projectives ([[thm-central-character-summands-split-into-linkage-blocks]], [[lem-block-projection-preserves-projectives]]). The regular integral block conventions, including the antidominant weight $a=w_0\cdot\lambda$, are those of [[def-regular-integral-category-o-block-and-its-antidominant-weight]], and the well-definedness part of [[def-the-antidominant-projective-and-the-soergel-functor]] proves that the block at $\eta=-\rho$ is semisimple with $L(\eta)$ projective and injective, that $Q=\operatorname{pr}_{\chi_\lambda}(E\otimes L(\eta))$ with $E=L(\lambda+\rho)$ has a projective-injective Verma flag consisting of the factors $\Delta(x\cdot\lambda)$, $x\in W$, once each, that $\operatorname{Hom}_{\mathcal O}(Q,L(a))\cong\mathbb C$, and that $P(a)$ is a direct summand of $Q$.

[F7] The deformed family $\mathcal D_R(\lambda)$ of [[def-the-deformed-category-o-family-and-its-specializations]]; for every $x\in W$ the lift $P_R(x,\lambda)$ exists, is unique up to isomorphism, has a finite deformed Verma flag with the same multiplicities as its closed fiber, satisfies Hom base change for every map of deformation algebras, has finite free Hom modules into finite Verma-filtered targets, and a $\mathfrak g\otimes R$-linear map of such objects that is an isomorphism on the residue fiber is an isomorphism; for a dot-dominant integral target $\nu$ the same construction gives the lifts with labels the distinct cosets $W/W_\nu$ ([[thm-lifting-of-indecomposable-projectives-to-the-deformed-family]], [[prop-base-change-freeness-and-specialization-in-the-deformed-family]]).

[F8] The ring $R$ is a localization of a finite-variable polynomial UFD ([[lem-finite-variable-polynomial-rings-over-fields-are-ufds]]); height-one primes are therefore principal, with discrete valuation localizations. The invariant ring $S^W$ is a polynomial algebra and $S$ is free of rank $|W|$ over $S^W$ ([[thm-chevalley-shephard-todd-for-finite-weyl-groups]]); orbit sums form a basis of $\mathbb C[P]^W$, and invariant polynomials separate finite $W$-orbits over every characteristic-zero field by finite interpolation and averaging ([[lem-weyl-orbit-sums-form-a-basis-of-finite-weyl-invariants]]).

[F9] The coinvariant algebra $C=S/(S\,S^W_+)$ with its degree normalization, the harmonic complement $\mathcal H$ with $\rho|_{\mathcal H}\colon\mathcal H\cong C$ and $S^W\otimes\mathcal H\cong S$ ([[def-the-coinvariant-algebra-of-a-finite-weyl-group]], [[lem-the-harmonic-complement-of-the-coinvariant-algebra]]); $C$ is graded Gorenstein with one-dimensional socle in the top degree $2N$, and $C_j=0$ for $j>2N$ ([[lem-the-coinvariant-algebra-is-a-gorenstein-algebra-with-one-dimensional-socle]]).

## Proof

**Proof technique:** direct.

1.1 The block at $\eta=-\rho$ has a single highest weight in $W\cdot\eta\cap(\eta-Q^+)=\{\eta\}$, so $M(\eta)=L(\eta)$ is simple, its projective cover has a Verma flag whose single factor is $L(\eta)$ by BGG reciprocity, hence equals $L(\eta)$ and $L(\eta)$ is projective; with a single simple object and enough projectives the block is semisimple, so $L(\eta)$ is injective as well, and the well-definedness part of [F6] then supplies the object $Q=\operatorname{pr}_{\chi_\lambda}(E\otimes L(\eta))$, which is projective and injective and has a Verma flag with the factors $\Delta(x\cdot\lambda)$, $x\in W$, once each, together with $\operatorname{Hom}_{\mathcal O}(Q,L(a))\cong\mathbb C$ and a split embedding $P(a)\hookrightarrow Q$; the same construction with the distinct extremal weights $Wv=W/W_\nu$ gives the singular once-each flag. [F1, F6]

1.2 Let $p$ be a height-one prime of $R$, $T=R_p$, $k=\operatorname{Frac}(R/p)$, and let $\tau$ be the tautological parameter of the deformed family; the residual central characters are the $W$-classes of the points $xv+\tau$, $x\in W$, and $\chi_{xv+\tau}=\chi_{yv+\tau}$ over $k$ forces $xv+\tau=w(yv+\tau)$ for some $w$ by [F1] and finite interpolation, so comparing the constant and linear parts modulo $p$ gives $xv=wyv$ and $w\tau=\tau$ in $k$; a nonidentity $w$ fixing the generic point of the divisor $p$ fixes a hyperplane, hence is the orthogonal reflection in that hyperplane. That hyperplane must be a root hyperplane: otherwise it contains a root-regular real point, whose open chamber would be stabilized by $w$, contradicting [[thm-the-weyl-group-acts-simply-transitively-on-weyl-chambers]]. Thus $p$ is the root prime $\langle\tau,\alpha^\vee\rangle$ for that root; therefore at every nonroot prime all residual characters are pairwise distinct, while at the root prime the equal-character classes are exactly the pairs $\{x,s_\alpha x\}$ together with singleton classes wherever $s_\alpha xv=xv$, which occurs in the singular case. [F1, F8, algebra]

1.3 At a root divisor, isolate one two-element residual character class by CRT. Write its upper and lower weights $A=a+\tau$ and $B=b+\tau$, where $b=s_\alpha\cdot a=a-n\alpha$ and $n=\langle a+\rho,\alpha^\vee\rangle>0$. Over $k=\operatorname{Frac}(R/p)$, a singular vector of weight $A-\gamma$ must satisfy the Casimir equation $2(A+\rho,\gamma)=(\gamma,\gamma)$. Its parameter term vanishes identically on the divisor only if $\gamma$ is a multiple of $\alpha$, and its constant term then forces $\gamma=n\alpha$. The Shapovalov determinant on that weight has valuation one: only its $(\alpha,n)$ factor vanishes, with exponent $K(0)=1$, so its residue radical has dimension one there. A nonzero radical has a highest-weight vector, by choosing minimal root height among its nonzero weight spaces; it is therefore generated initially by that one-dimensional $B$-weight space. The same Casimir equation for $B$ has no solution with positive $\gamma$, so $M(B)$ is simple. Its highest vector gives an injected $M(B)\to M(A)$: the induced map is injective because its simple source is nonzero. Any nonzero quotient of the radical by this image would again have a highest-weight vector; the equation forces weight $B$, but its $B$-space is zero. Thus $\operatorname{Rad}M(A)=M(B)$ and $M(A)$ has length two. This proves the required divisor-field classification directly; no closed-point or complex-only classification is substituted for it. [F2, F3, algebra]

1.4 Let $u=\nu+\rho$ be dominant with $H=\operatorname{Stab}(u)$, and $v=\lambda+\rho$ regular dominant. For onto translation, a retained factor satisfies $yv+\gamma=xu$. The norm bound and dominant-distance inequality force equality $|\gamma|=|u-v|$ and $x^{-1}yv\in Hv$; because $v$ is regular this means $x^{-1}y\in H$, hence $xu=yu$. Thus the retained standard is $\Delta(y\cdot\nu)$ once. This uses the coset condition, not the false assertion $Hv=\{v\}$. For return translation the retained labels are $x\in yH$, each extremal weight once. The conclusion is a Verma flag with factors $\Delta(yh\cdot\lambda)$ for $h\in H$, not a direct sum. The same calculation applies to the deformed tensor flags, with the common parameter $\tau$ retained. [F4, F6, F7, algebra]

2.1 Every standard $\Delta(x\cdot\lambda)$ contains $L(a)$ as a composition factor: $a$ is the minimal weight of $W\cdot a$, so the Verma embedding criterion gives a nonzero, hence injective, map $M(a)=L(a)\to\Delta(x\cdot\lambda)$, and BGG reciprocity gives $(P(a):\Delta(x\cdot\lambda))=[\Delta(x\cdot\lambda):L(a)]\ge1$, while $(P(a):\Delta(x\cdot\lambda))\le(Q:\Delta(x\cdot\lambda))=1$ because $P(a)$ is a summand of $Q$; hence all multiplicities equal one, the complementary summand of $P(a)$ in $Q$ has flag length zero, and $Q=P(a)$; the argument applies verbatim to a dot-dominant singular $\nu$ with $Wv$ replaced by $W/W_\nu$. [F6, step 1.1]

2.2 Put $K=\operatorname{Frac}R$ and $B=R\otimes_{R^W}R$. Localization of the free invariant/harmonic decomposition in [F8] makes it finite free of rank $|W|$ over the right $R$. Evaluation embeds it into $K^W$ by $f\otimes r\mapsto(f(x^{-1}\tau)r)_x$: generically the orbit has $|W|$ distinct points, interpolation makes this map surjective after tensoring with $K$, and freeness makes it injective over $R$. At a nonroot height-one prime, residual orbit points are distinct and CRT gives $B_T=T^W$. At a root prime CRT isolates the pairs from step 1.2. Every pair evaluation is congruent modulo the root uniformizer $\alpha=\langle\tau,\alpha^\vee\rangle$. Choose a linear $f$ for which the two values differ by a unit times $\alpha$; subtract its lower value and multiply by the pair projector to obtain $(\alpha,0)$. Together with the pair identity this generates exactly the congruence order $\{(u,v)\in T^2:u-v\in\alpha T\}$. For a singular stabilizer $H=W_\nu$, Reynolds averaging on the first factor identifies $B^H=R^H\otimes_{R^W}R$. It is finite projective over right $R$ as a split summand of $B$, hence free since $R$ is local; its generic rank is $|W/H|$. The same pair and singleton orders, now on cosets, follow by taking the $H$-fixed tuples. [F8, step 1.2, algebra]

3.1 Localize $P_R$ to $T=R_p$. Its full flag still has $|W|$ factors; CRT in the finitely many residual central characters splits it into pair components and singleton components. Write $P_{T,\{A,B\}}$ for one pair summand. Only this summand has the two factors $\Delta_T(A)$ and $\Delta_T(B)$ once. Maximal-weight generation gives $0\to\Delta_T(A)\to P_{T,\{A,B\}}\to\Delta_T(B)\to0$. It is projective in its character component by base change and splitting. The residual extension cannot split: otherwise its direct summand $M(B)$ would be projective, but duality applied to the nonsplit length-two $M(A)$ yields a nonsplit extension $0\to L(A)\to D M(A)\to L(B)=M(B)\to0$, contradicting projectivity. At a singleton the summand has a single standard. The identical argument applies to the singular once-each flag, with root-fixed labels giving singletons. Over the fraction field all standard characters are distinct and all Vermas are simple by the Shapovalov determinant; hence each component is its indicated standard and the generic endomorphism algebra is the tuple algebra. [F3, F5, F7, step 1.2, step 1.3, step 2.1, algebra]

3.2 Translation out carries $P_R^\nu$ to a regular projective by the exact tensor biadjunction and the actual central projectors. Its flag contains every regular standard once by steps 2.1 and 1.4. On the closed fiber, onto translation takes the regular antidominant simple Verma to the singular antidominant simple Verma, so adjunction gives a one-dimensional Hom from the return projective to the regular antidominant simple. Its regular antidominant cover splits off; both have every standard once, so the complement has zero flag and vanishes. Hom base change and the two-map lifting argument of [F7] now give $T_{\mathrm{out}}P_R^\nu\cong P_R^\lambda$. Any two choices induce the same endomorphism map after identification, since the endomorphism algebra is commutative (as will follow from its generic tuple embedding). [F6, F7, step 2.1, step 1.4, algebra]

4.1 Any endomorphism $f$ of the isolated pair $P_{T,\{A,B\}}$ preserves $\Delta_T(A)$ and acts by scalars $u_a$ on $\Delta_T(A)$ and $u_b$ on $\Delta_T(B)$; if $u_a-u_b$ were a unit modulo $p$, the residual projector $(f-u_b)/(u_a-u_b)$, polynomial in $f$ since $(f-u_a)(f-u_b)=0$ on the two-step flag, would split the nonsplit residual extension of step 3.1, so $u_a\equiv u_b$ modulo $\tau(\alpha^\vee)$ and $\operatorname{End}(P_{T,\{A,B\}})$ lies in the congruence order; the central Casimir element acts on the two generic standards by $(A,A+2\rho)$ and $(B,B+2\rho)$, eigenvalues differing by $2n(\alpha,\tau)=n(\alpha,\alpha)\langle\tau,\alpha^\vee\rangle$, a unit times the uniformizer, so the Casimir minus the lower eigenvalue gives the pair $(\tau(\alpha^\vee),0)$ and together with the identity generates the full congruence order, both generators being central actions; on singleton classes the order is $T$, generated by the identity. [F1, F2, step 3.1]

5.1 The generic tuple embeddings place $\operatorname{End}(P_R)$ and $B$ (or $\operatorname{End}(P_R^\nu)$ and $B^H$) inside the same tuple algebra. Both are finite free right-$R$ modules: for End this is [F7], for $B^H$ it is Reynolds averaging in step 2.2. Steps 3.1, 2.2 and 4.1 identify their localizations at each height-one prime, pair by pair, including the singular singletons. A finite free $R$-lattice equals the intersection of its height-one localizations inside its fraction-field span. Indeed $R$ is a localization of a polynomial UFD, and $R=\bigcap_{\operatorname{ht}p=1}R_p$: a reduced fractional denominator outside $R$ has a nonunit irreducible factor detected at its prime; applying this coefficientwise to any free lattice basis proves the lattice assertion. Thus the two lattices are equal and yield the asserted algebra identification. This does not yet assert that the global central image is saturated; its surjectivity is established separately below. [F7, F8, step 2.2, step 4.1, algebra]

6.1 For a dominant shifted weight $u$ with stabilizer $H$, the closed right fiber of $B^H$ is $C^H$, because averaging commutes with quotienting by the right maximal ideal. Choose $N$ above the largest ordinary polynomial degree in $C$, and choose an $H$-invariant representative $h(\tau)$ of any prescribed class in $C^H$ by averaging. Prescribe the jet $h(X-u)$ of order $N$ at $u$, and zero jets at the other distinct points in $Wu$. Polynomial CRT produces $q$ with those jets. Then $p(X)=|H|^{-1}\sum_{w\in W}q(w^{-1}X)$ is $W$-invariant. At $X=u+\tau$, precisely the $w\in H$ terms contribute, and their jets equal $h(w^{-1}\tau)=h(\tau)$; the other terms vanish to order $N$. Hence $p(u+\tau)\equiv h(\tau)\pmod{(\tau)^N}$, whose image in $C$ is the prescribed class. In the regular case take $u=v$ and $H=1$; in the singular case take the actual singular $u$, never regular $v$. By [F1], $p=\operatorname{HC}_\rho(z)$ for a central element $z$. [F1, F8, F9, step 5.1, algebra]

7.1 The image of $a_\lambda$ is an $R$-submodule of the finite free target $B$ respectively $B^H$ whose cokernel is finitely generated and has zero closed fiber by step 6.1; Nakayama over the local ring $R$ makes the cokernel zero, so $a_\lambda$ is surjective, and the action map $Z\otimes R\to\operatorname{End}(P_R)$ is surjective with it under the identification of step 5.1. [F7, step 5.1, step 6.1]

8.1 Under the tuple identification, $z\otimes r$ acts on the generic constituent of highest weight $x\cdot\lambda+\tau$ by the scalar $\operatorname{HC}_\rho(z)(x(\lambda+\rho)+\tau)r=\sigma_\lambda(\operatorname{HC}_\rho(z))(x^{-1}\tau)r$, these scalars vary with $x$, and the injective tuple embedding shows that an element of $Z\otimes R$ acts by zero if and only if its image in $B$ respectively $B^H$ is zero; hence the action map and $a_\lambda$ have the same kernel and induce the displayed isomorphism, while, writing $k=R/\mathfrak m=\mathbb C$ for the residue field (distinct from the coinvariant algebra $C$), tensoring the right factor with $k$ gives $(R\otimes_{R^W}R)\otimes_R k\cong R/(R^W_+R)=C$ respectively $(R^{W_\nu}\otimes_{R^W}R)\otimes_R k\cong C^{W_\nu}$. [F1, step 5.1, step 7.1]

9.1 On generic constituents translation out repeats the scalar attached to a coset $yH$ on every branch $yh$, so under the identifications of steps 5.1 and 8.1 the map $\operatorname{End}(P_R^\nu)\to\operatorname{End}(T_{\mathrm{out}}P_R^\nu)=\operatorname{End}(P_R^\lambda)$ induced by the translation identification of step 3.2 is the inclusion $R^{W_\nu}\otimes_{R^W}R\hookrightarrow R\otimes_{R^W}R$; this holds uniformly across the facet, including the regular case $W_\nu=\{1\}$, where it is the identity. [step 3.2, step 5.1, step 8.1] ∎
