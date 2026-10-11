---
id: lem-the-central-action-on-the-deformed-antidominant-projective
kind: lemma
title: The central action on the deformed antidominant projective
status: draft
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
       lem-the-coinvariant-algebra-is-a-gorenstein-algebra-with-one-dimensional-socle]
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

[F8] The invariant ring $S^W$ is a polynomial algebra and $S$ is free of rank $|W|$ over $S^W$ ([[thm-chevalley-shephard-todd-for-finite-weyl-groups]]); orbit sums form a basis of $\mathbb C[P]^W$, and invariant polynomials separate finite $W$-orbits over every characteristic-zero field by finite interpolation and averaging ([[lem-weyl-orbit-sums-form-a-basis-of-finite-weyl-invariants]]).

[F9] The coinvariant algebra $C=S/(S\,S^W_+)$ with its degree normalization, the harmonic complement $\mathcal H$ with $\rho|_{\mathcal H}\colon\mathcal H\cong C$ and $S^W\otimes\mathcal H\cong S$ ([[def-the-coinvariant-algebra-of-a-finite-weyl-group]], [[lem-the-harmonic-complement-of-the-coinvariant-algebra]]); $C$ is graded Gorenstein with one-dimensional socle in the top degree $2N$, and $C_j=0$ for $j>2N$ ([[lem-the-coinvariant-algebra-is-a-gorenstein-algebra-with-one-dimensional-socle]]).

## Proof

**Proof technique:** direct.

1.1 The block at $\eta=-\rho$ has a single highest weight in $W\cdot\eta\cap(\eta-Q^+)=\{\eta\}$, so $M(\eta)=L(\eta)$ is simple, its projective cover has a Verma flag whose single factor is $L(\eta)$ by BGG reciprocity, hence equals $L(\eta)$ and $L(\eta)$ is projective; with a single simple object and enough projectives the block is semisimple, so $L(\eta)$ is injective as well, and the well-definedness part of [F6] then supplies the object $Q=\operatorname{pr}_{\chi_\lambda}(E\otimes L(\eta))$, which is projective and injective and has a Verma flag with the factors $\Delta(x\cdot\lambda)$, $x\in W$, once each, together with $\operatorname{Hom}_{\mathcal O}(Q,L(a))\cong\mathbb C$ and a split embedding $P(a)\hookrightarrow Q$; the same construction with the distinct extremal weights $Wv=W/W_\nu$ gives the singular once-each flag. [F1, F6]

1.2 Let $p$ be a height-one prime of $R$, $T=R_p$, $k=\operatorname{Frac}(R/p)$, and let $\tau$ be the tautological parameter of the deformed family; the residual central characters are the $W$-classes of the points $xv+\tau$, $x\in W$, and $\chi_{xv+\tau}=\chi_{yv+\tau}$ over $k$ forces $xv+\tau=w(yv+\tau)$ for some $w$ by [F1] and finite interpolation, so comparing the constant and linear parts modulo $p$ gives $xv=wyv$ and $w\tau=\tau$ in $k$; a nonidentity $w$ fixing the generic point of the divisor $p$ fixes a hyperplane, hence is a reflection and $p$ is the root prime $\langle\tau,\alpha^\vee\rangle$ for that root; therefore at every nonroot prime all residual characters are pairwise distinct, while at the root prime the equal-character classes are exactly the pairs $\{x,s_\alpha x\}$ together with singleton classes wherever $s_\alpha xv=xv$, which occurs in the singular case. [F1, F8, algebra]

1.3 Fix such a root prime and a two-element class with upper relative label $A=a+\tau$ and lower label $B=b+\tau$, where $b=s_\alpha\cdot a=a-n\alpha$ and $n=\langle a+\rho,\alpha^\vee\rangle>0$; by the Shapovalov determinant the $\alpha$-factor vanishes at the prime, so $\operatorname{Rad}M(A)\neq0$, and the Casimir equation $2(A+\rho,\gamma)=(\gamma,\gamma)$ for a singular weight $A-\gamma$, expanded along the divisor, has its parameter coefficient vanishing only for $\gamma\in\mathbb C\alpha$ and its constant term then forces $\gamma=n\alpha$; for $B$ the shifted pairing is $\langle B+\rho,\alpha^\vee\rangle=-n$, so no positive $\gamma$ solves the equation and $M(B)$ is simple; the minimal singular weight of $\operatorname{Rad}M(A)$ is therefore $B$, the space of maps $M(B)\to M(A)$ is one-dimensional and injective, the $B$-weight space of the radical is one-dimensional, and since $\operatorname{Rad}M(A)/M(B)$ has zero $B$-weight it vanishes, so $\operatorname{Rad}M(A)=M(B)$ and $M(A)$ has length two. [F2, F3, algebra]

2.1 Every standard $\Delta(x\cdot\lambda)$ contains $L(a)$ as a composition factor: $a$ is the minimal weight of $W\cdot a$, so the Verma embedding criterion gives a nonzero, hence injective, map $M(a)=L(a)\to\Delta(x\cdot\lambda)$, and BGG reciprocity gives $(P(a):\Delta(x\cdot\lambda))=[\Delta(x\cdot\lambda):L(a)]\ge1$, while $(P(a):\Delta(x\cdot\lambda))\le(Q:\Delta(x\cdot\lambda))=1$ because $P(a)$ is a summand of $Q$; hence all multiplicities equal one, the complementary summand of $P(a)$ in $Q$ has flag length zero, and $Q=P(a)$; the argument applies verbatim to a dot-dominant singular $\nu$ with $Wv$ replaced by $W/W_\nu$. [F6, step 1.1]

2.2 At a root prime the lift $P_R$ localizes to a projective $P_T$ whose flag has exactly the two factors $\Delta_T(A)$ and $\Delta_T(B)$ once each, with canonical maximal-weight submodule $\Delta_T(A)$, giving an extension $0\to\Delta_T(A)\to P_T\to\Delta_T(B)\to0$ whose residue fiber does not split: a splitting would make the residue $M(B)$ projective, but dualizing the nonsplit length-two $M(A)$ by restricted duality gives the nonsplit sequence $0\to L(A)\to D(M(A))\to L(B)=M(B)\to0$, which over a projective $M(B)$ would split and force $D(M(A))\cong L(A)\oplus L(B)$, contradicting the indecomposability of the length-two $M(A)$ via $D^2\cong\operatorname{id}$. [F5, F7, step 1.2, step 1.3]

2.3 The algebra $B=R\otimes_{R^W}R$ is finite free of rank $|W|$ over $R$ and embeds into $K^W$ by $f\otimes r\mapsto(f(x^{-1}\tau)r)_x$ after inverting nonzero elements; at a nonroot height-one prime the orbit points are pairwise distinct modulo $p$, so Chinese-remainder projectors split every branch and $B_T\cong T^W$; at the root prime the points coalesce in the pairs of step 1.2 and CRT isolates each pair, while a linear polynomial $h$ with $h(x^{-1}\alpha)\neq0$ has two pair evaluations differing by a nonzero scalar multiple of the uniformizer $\tau(\alpha^\vee)$, producing the element $(\tau(\alpha^\vee),0)$ in the pair component, so $B_T$ is exactly the congruence order there; taking $H=W_\nu$-invariants on the first factor gives $B^H=R^H\otimes_{R^W}R$, finite free over $R$, with the corresponding coset orders in the singular case. [F8, step 1.2, algebra]

2.4 Let $u=\nu+\rho$ be dominant with $H=\operatorname{Stab}(u)$ and $\nu$ the target; translating $\Delta(y\cdot\lambda)$ onto the facet with the extremal translator of weight $u-v$ and applying the norm comparison to the dominant weights $u,v$ shows that a retained factor $yv+\gamma=xu$ satisfies $|\gamma|=|u-x^{-1}yv|\ge|u-v|$ with equality throughout, so $\gamma$ is an extremal weight of the translator, equality forces $x^{-1}yv\in W_uv=\{v\}$ by regularity of $v$, hence $x=y$, and the retained standard is $\Delta(y\cdot\nu)$ with multiplicity one; in the opposite direction a retained factor of $T_{\mathrm{out}}\Delta(y\cdot\nu)$ satisfies $yu+\delta=xv$ with $\delta$ a weight of the dual translator, the same comparison forces equality and $x\in yH$, so $T_{\mathrm{out}}\Delta(y\cdot\nu)=\bigoplus_{h\in H}\Delta(yh\cdot\lambda)$, once each. [F4, F6, step 1.1]

3.1 Any endomorphism $f$ of $P_T$ preserves $\Delta_T(A)$ and acts by scalars $u_a$ on $\Delta_T(A)$ and $u_b$ on $\Delta_T(B)$; if $u_a-u_b$ were a unit modulo $p$, the residual projector $(f-u_b)/(u_a-u_b)$, polynomial in $f$ since $(f-u_a)(f-u_b)=0$ on the two-step flag, would split the nonsplit residual extension of step 2.2, so $u_a\equiv u_b$ modulo $\tau(\alpha^\vee)$ and $\operatorname{End}(P_T)$ lies in the congruence order; the central Casimir element acts on the two generic standards by $(A,A+2\rho)$ and $(B,B+2\rho)$, eigenvalues differing by $2n(\alpha,\tau)=n(\alpha,\alpha)\langle\tau,\alpha^\vee\rangle$, a unit times the uniformizer, so the Casimir minus the lower eigenvalue gives the pair $(\tau(\alpha^\vee),0)$ and together with the identity generates the full congruence order, both generators being central actions; on singleton classes the order is $T$, generated by the identity. [F1, F2, step 2.2]

3.2 By the singular version of step 2.1 the lift $P_R^\nu$ has every distinct singular standard once, so by step 2.4 the exact biadjoint return translation carries $P_R^\nu$ to a projective with every regular standard once whose Hom to the regular antidominant simple is one-dimensional by adjunction through the one-factor onto translation; the regular antidominant projective therefore splits off, comparison of the once-each flags gives $T_{\mathrm{out}}P_R^\nu\cong P_R^\lambda$, and the identification is unique by the local projective uniqueness of [F7]. [F6, F7, step 2.1, step 2.4]

4.1 Both $\operatorname{End}(P_R)$ and $B$ respectively $B^H$ are finite free $R$-modules inside the same generic tuple algebra $K^W$ respectively $K^{W/H}$, and steps 3.1 and 2.3 show that their localizations agree at every height-one prime; since $R$ is a regular local ring, hence normal, a finitely generated free module is the intersection of its height-one localizations inside the fraction-field extension, so the canonical algebra map identifies $\operatorname{End}(P_R)$ with $R\otimes_{R^W}R$ in the regular case and with $R^{W_\nu}\otimes_{R^W}R$ in the singular case, and in particular central action realizes every element of the order. [F7, step 3.1, step 2.3]

5.1 For $H=\operatorname{Stab}(u)$ the closed right fiber of $B^H$ is $C^H$, and surjectivity of the shifted Harish-Chandra map onto it is proved by jets: choose $N$ larger than the maximal nonzero coinvariant degree, choose an $H$-invariant representative $h(X-v)$ of a prescribed class, prescribe the jet $h$ of order $N$ at $v$ and zero jets of order $N$ at the other distinct orbit points, obtain $q$ by polynomial CRT since the corresponding powers of maximal ideals are comaximal, and average $p(X)=(1/|H|)\sum_{w\in W}q(w^{-1}X)$; then $p$ is $W$-invariant and $p(v+\tau)\equiv h(\tau)$ modulo $(\tau)^N$, because the $w\notin H$ summands have zero jets at $v$ and each of the $|H|$ summands with $w\in H$ contributes the jet $h(w^{-1}\tau)=h(\tau)$ by $H$-invariance, so the error vanishes in $C$ and the class of $p$ is the prescribed one; by [F1] there is $z\in Z$ with $\operatorname{HC}_\rho(z)=p$. [F1, F8, F9, step 4.1]

6.1 The image of $a_\lambda$ is an $R$-submodule of the finite free target $B$ respectively $B^H$ whose cokernel is finitely generated and has zero closed fiber by step 5.1; Nakayama over the local ring $R$ makes the cokernel zero, so $a_\lambda$ is surjective, and the action map $Z\otimes R\to\operatorname{End}(P_R)$ is surjective with it under the identification of step 4.1. [F7, step 4.1, step 5.1]

7.1 Under the tuple identification, $z\otimes r$ acts on the generic constituent of highest weight $x\cdot\lambda+\tau$ by the scalar $\operatorname{HC}_\rho(z)(x(\lambda+\rho)+\tau)r=\sigma_\lambda(\operatorname{HC}_\rho(z))(x^{-1}\tau)r$, these scalars vary with $x$, and the injective tuple embedding shows that an element of $Z\otimes R$ acts by zero if and only if its image in $B$ respectively $B^H$ is zero; hence the action map and $a_\lambda$ have the same kernel and induce the displayed isomorphism, while tensoring the right factor with the residue field at $0$ gives $(R\otimes_{R^W}R)\otimes_R C\cong R/(R^W_+R)=C$ respectively $(R^{W_\nu}\otimes_{R^W}R)\otimes_R C\cong C^{W_\nu}$. [F1, step 4.1, step 6.1]

8.1 On generic constituents translation out repeats the scalar attached to a coset $yH$ on every branch $yh$, so under the identifications of steps 4.1 and 7.1 the map $\operatorname{End}(P_R^\nu)\to\operatorname{End}(T_{\mathrm{out}}P_R^\nu)=\operatorname{End}(P_R^\lambda)$ induced by the translation identification of step 3.2 is the inclusion $R^{W_\nu}\otimes_{R^W}R\hookrightarrow R\otimes_{R^W}R$; this holds uniformly across the facet, including the regular case $W_\nu=\{1\}$, where it is the identity. [step 3.2, step 4.1, step 7.1] ∎
