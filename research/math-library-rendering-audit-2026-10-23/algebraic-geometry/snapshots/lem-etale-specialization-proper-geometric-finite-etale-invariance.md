---
id: lem-etale-specialization-proper-geometric-finite-etale-invariance
kind: lemma
title: "Algebraically closed field extension preserves covers of a smooth proper scheme"
status: published
origin: pipeline
pipeline_run: frontier-38-owner-30
deps:
  - thm-existence-of-algebraic-closures
  - thm-algebraic-extension-is-purely-inseparable-over-its-separable-closure
  - def-axiom-of-choice
  - thm-finite-etale-algebras-invariant-under-nilpotent-thickening
  - thm-effective-fpqc-descent-of-finite-etale-covers
  - lem-finite-etale-galois-refinements-and-quotients
  - thm-proper-smooth-complete-dvr-finite-etale-cover-equivalence
  - thm-nonempty-regular-locus-reduced-variety-perfect-field
  - thm-regular-equals-smooth-over-perfect-field
  - thm-smooth-local-standard-form
  - thm-etale-formally-etale-finite-presentation
  - cor-weak-nullstellensatz-algebraically-closed-coordinate-form
  - thm-finite-etale-covers-equivalent-to-finite-continuous-pi1-sets
proof_strategy: direct
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
    scope: "Historical full Step 5 item mathematical read and adjudication where required, including the used supplier interfaces; current mathematical text matches the recorded postreview snapshot."
    delegated_by: owner
    evidence:
      - research/frontier-38-owner-30-reader-30.md
      - research/frontier-38-owner-30-dispatch/reader-reader-30.result.json
      - research/frontier-38-owner-30-step5-hash-30-post-5a.json
      - research/frontier-38-owner-30-alpha-batch-30-5a-decisions.json
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "SGA 1, recomposed edition, Expose X Corollary 1.8, printed pages 204-205"
      url: https://arxiv.org/pdf/math/0206203
    - title: "Stacks Project, Fundamental Groups of Schemes, section 9 Lemmas 9.1 and 9.3, Tags 0A48 and 0A49"
      url: https://stacks.math.columbia.edu/download/pione.pdf
---

## Statement

Assume AC. Let $k\subset K$ be algebraically closed fields and $X$ a smooth proper $k$-scheme, not necessarily projective or connected. Pullback is an equivalence
$$\operatorname{FEt}(X)\longrightarrow\operatorname{FEt}(X_K).$$
If $X$ is connected and $\bar x_K$ is a geometric basepoint of $X_K$ with image $\bar x$ on $X$, the equivalence preserves their fibre functors and induces an isomorphism $\pi_1^{\mathrm{et}}(X_K,\bar x_K)\to\pi_1^{\mathrm{et}}(X,\bar x)$.

For any field $F$, any finite purely inseparable extension $F'/F$, and any $F$-scheme $Z$, pullback $\operatorname{FEt}(Z)\to\operatorname{FEt}(Z_{F'})$ is also an equivalence. Consequently a finite étale cover whose coefficients descend to a finite algebraic extension of a trait fraction field can discard its purely inseparable part: it descends to the maximal separable subextension.

This is a new local support item for A911. Smooth proper geometric fibres are its exact intended application. The proof below uses smoothness for essential surjectivity through complete DVR lifting; the full-faithfulness argument works for any finite type $k$-scheme. The stronger arbitrary proper assertion in the sources is not needed or claimed here.

## Facts & Assumptions

**Given:** AC, algebraically closed $k\subset K$, and smooth proper $X/k$.

[F1] A nonempty finite type scheme over an algebraically closed field has a rational closed point, including after localization in finitely many nonzero elements ([[cor-weak-nullstellensatz-algebraically-closed-coordinate-form]]).

[F2] Finite étale covers and their arrows descend effectively along fpqc covers; finite étale covers can be trivialized by finite étale covers. Graphs and equalizers of their maps are open and closed, and finite étale rank-one maps are isomorphisms ([[thm-effective-fpqc-descent-of-finite-etale-covers]], [[lem-finite-etale-galois-refinements-and-quotients]]).

[F3] Restriction from a smooth proper scheme over a complete Noetherian DVR to its closed fibre is an equivalence, without assuming projectivity ([[thm-proper-smooth-complete-dvr-finite-etale-cover-equivalence]]).

[F4] A finite type reduced scheme over a perfect field has a dense regular locus, regular is smooth over that field, and smooth schemes have local étale maps to affine space. Étale maps have unique infinitesimal lifting. Nonempty finite type schemes over an algebraically closed field have rational closed points ([[thm-nonempty-regular-locus-reduced-variety-perfect-field]], [[thm-regular-equals-smooth-over-perfect-field]], [[thm-smooth-local-standard-form]], [[thm-etale-formally-etale-finite-presentation]], [[cor-weak-nullstellensatz-algebraically-closed-coordinate-form]]).

[F5] The cover/fibre-functor classification and profinite topology are [[thm-finite-etale-covers-equivalent-to-finite-continuous-pi1-sets]]. AC ([[def-axiom-of-choice]]) is inherited from [F1]–[F5] and is used for common field extensions below. Algebraic closures exist under AC ([[thm-existence-of-algebraic-closures]]).

[F6] Finite étale algebras and their maps lift uniquely across a nilpotent ideal ([[thm-finite-etale-algebras-invariant-under-nilpotent-thickening]]). Applied on affine opens, the unique maps agree on overlaps, so the same fully faithful equivalence holds for finite étale covers of schemes across nilpotent closed immersions; local algebra lifts glue uniquely. An algebraic extension is purely inseparable over its maximal separable subextension ([[thm-algebraic-extension-is-purely-inseparable-over-its-separable-closure]]).

## Proof

1.1 Every integral finite type $k$-scheme remains integral after any field extension $L/k$. On an affine chart with domain $B$, suppose $fg=0$ in $B\otimes_kL$ with $f,g$ nonzero. Express $f,g$ as finite linear combinations of elements of a $k$-basis of $B$. Their coefficients lie in a finitely generated $k$-domain $A\subset L$. Since vector spaces are flat, $B\otimes_kA\to B\otimes_kL$ is injective, so the same equality holds over $A$. Choose a nonzero coefficient of $f$ and a nonzero coefficient of $g$. By [F1] there is a $k$-point of $\operatorname{Spec}A$ avoiding their product. Specializing there gives two nonzero elements of $B$ whose product is zero, a contradiction. Thus $B\otimes_kL$ is a domain. Affine charts of an integral scheme have nonempty overlaps, which stay nonempty after faithful field extension; the domain charts therefore glue to an integral scheme. For any finite type $k$-scheme $Z$, apply this to the reduced structures of its finitely many irreducible components. Their base changes are irreducible and still give all the irreducible components: each has a nonempty open subset disjoint from the others, and nonemptiness persists after faithful extension. Intersections are nonempty before extension exactly when they are nonempty afterwards. The finite graph whose vertices are irreducible components and edges are nonempty intersections has connected components exactly the connected components of $Z$: a partition without edges gives disjoint closed unions, each also open, while a connected graph glues connected irreducible pieces into a connected union. Hence every connected component stays connected, and every open and closed subscheme of $Z_L$ is the base change of a unique open and closed subscheme of $Z$. [F1, given, choose, algebra]

1.2 Let $U\to X_K$ be finite étale. It spreads to a finite étale cover $U_A\to X_A$ for a finitely generated $k$-subalgebra $A\subset K$. Here is the finite-data argument: take a finite affine cover of proper separated $X$; its intersections are affine. On each chart a finite locally free algebra is specified by a finite idempotent matrix presenting its projective module, multiplication and unit matrices, and their finitely many identities. Étaleness is specified by a separability idempotent in its tensor square, with multiplication equal to one and annihilated by all differences $b\otimes1-1\otimes b$ for a finite set of algebra generators. This description follows after the trivializations in [F2] and descends there; conversely it makes the diagonal an open and closed immersion and gives the finite locally free étale condition. The finitely many gluing isomorphisms and their inverses on chart intersections also use only finitely many coefficients and identities. Collect those coefficients from $K$; enlarge $A$ to include coefficients witnessing every equality and inverse. Thus these algebra presentations and gluings give the asserted cover over $A$. The same argument spreads any specified maps between such covers. The domain $A$ has a dense smooth open by [F4], since algebraically closed $k$ is perfect. Localize in a nonzero element so that a rational point $a\in\operatorname{Spec}A$ lies in that smooth open, and further shrink around it to obtain an étale map to $\mathbf A_k^d$ by [F4]. None of these localizations changes the given base change to $K$. [F2, F4, given, choose, construct]

1.3 For the purely inseparable assertion choose $q=p^e$ such that every element of $F'$ has $q$th power in $F$; characteristic zero gives the identity case. The multiplication map $F'\otimes_FF'\to F'$ has kernel generated by finitely many $b\otimes1-1\otimes b$, for field generators $b$ of $F'/F$. Each generator has $q$th power zero, so this finitely generated ideal is nilpotent. Thus the diagonal of $Z_{F'}$ in its self-fibre-product over $Z$ is a nilpotent closed immersion. For any cover $W\to Z_{F'}$, its two pullbacks to the self-fibre-product restrict to the same cover on that diagonal. By [F6] the identity there lifts uniquely to an isomorphism between those pullbacks. On the triple fibre product the diagonal is likewise nilpotent, and uniqueness forces the cocycle identity. Effective fpqc descent in [F2] gives a cover on $Z$. Maps descend as well: their two pullbacks agree because they agree on the diagonal and [F6] is faithful. This proves the asserted equivalence for arbitrary $Z$. For a finite algebraic extension $L/F$, its maximal separable subextension $L_s$ has $L/L_s$ purely inseparable; apply the just-proved assertion to $Z_{L_s}$. No separability of the original coefficients is presumed. [F2, F6, construct, algebra]

2.1 Given finite étale $Y,W\to X$, their internal Hom is represented by a finite étale $H\to X$. Indeed work on each of the finitely many connected components of $X$ and then take their disjoint union; after a common finite étale trivializing cover from [F2], replace $Y,W$ by finite constant sets $E,F$ and take the constant cover with fibre the finite set of all functions $E\to F$. Changes of trivialization act by precomposition and postcomposition; those actions satisfy the cocycle law, so [F2] descends this cover. The evaluation morphism descends with it. Sections of $H$ are therefore exactly maps $Y\to W$, and this construction commutes with base change. Since $H$ is of finite type over $k$, step 1.1 applies. The image of a section over $X_L$ is open and closed in $H_L$ by [F2], hence is the pullback of a unique open and closed $H'\subset H$. The finite étale map $H'\to X$ has degree one after faithful field extension, thus degree one before extension, and is an isomorphism by [F2]. Its inverse gives the unique descended section. This proves full faithfulness of $\operatorname{FEt}(X)\to\operatorname{FEt}(X_L)$ for every field extension $L/k$ when $k$ is algebraically closed, using only finite type. Apply this argument also with any algebraically closed extension as the initial ground field. [F1, F2, step 1.1, construct]

2.2 We construct a generically injective arc through $a$, including in positive characteristic. Choose positive integers $M_j$ with $M_{j+1}/M_j\to\infty$, and for $1\le i\le d$ put $h_i(t)=\sum_{n\ge0}t^{M_{dn+i}}\in tk\llbracket t\rrbracket$. These $d$ series are algebraically independent over $k$. To verify this, take a nonzero polynomial $P$ of total degree at most $D$. Truncate each series after the same $n=N$. For large $N$, the degrees $M_{dN+i}$ increase so rapidly that the degrees of the distinct monomials in $P$ evaluated on these truncated polynomials are distinct: comparing exponent vectors at their highest differing index, its contribution is larger than $D$ times the sum of all preceding degrees. Thus the largest-degree monomial has a unique nonzero leading term, and $P$ evaluated on the truncations is nonzero of degree at most $D M_{dN+d}$. The first omitted term has degree $M_{d(N+1)+1}>D M_{dN+d}$, so substitution of the full series cannot change that nonzero polynomial's coefficients through its degree. Hence $P(h_1,\ldots,h_d)\ne0$. Add the coordinates of $a$ to the $h_i$ and map the coordinate ring of affine space to $k\llbracket t\rrbracket$. The étale chart at $a$ lifts this map uniquely from $k$ through $k[t]/(t^n)$ for all $n$ by [F4]. Taking the compatible inverse limit of images of finitely many generators gives $A\to k\llbracket t\rrbracket$, reducing to $a$. This map is injective: it is injective on the polynomial coordinate ring by the independence just proved, and the generic algebra of the étale integral chart over its polynomial coordinates is a finite field extension. Localizing the map at all nonzero coordinate polynomials therefore gives a unital map from that field to $k((t))$, which is injective. When $d=0$, $A=k$ and the constant arc has the same required property. [F4, step 1.2, choose, construct, algebra]

3.1 Put $R=k\llbracket t\rrbracket$ and $L=k((t))$. Pull $U_A$ back along the arc to a cover $U_R$ of the smooth proper constant family $X_R$. Its closed fibre is a finite étale cover $V\to X$. By [F3], $U_R$ and $V_R$ are isomorphic: full faithfulness lifts the closed-fibre identification and its inverse. Thus $U_L\cong V_L$ as covers of $X_L$. Both $K$ and $L$ contain $Q=\operatorname{Frac}A$ by step 2.2. Their tensor product over $Q$ is nonzero (tensoring two nonzero vector spaces over a field is nonzero). Choose a prime of that tensor product, take its quotient fraction field and then an algebraic closure $T$. Both fields embed in $T$, since the kernel of a unital map from a field is zero, and their embeddings agree on $Q$. Consequently the two original covers $U$ and $V_K$ become isomorphic over $T$. By step 2.1 applied over the algebraically closed ground field $K$, that isomorphism and its inverse descend uniquely to $K$. Therefore $U\cong V_K$, proving essential surjectivity. [F3, F5, step 2.1, step 1.2, step 2.2, choose, construct]

4.1 Full faithfulness and essential surjectivity prove the equivalence. For the stated basepoints, a finite étale cover over the algebraically closed field of a geometric point is a finite disjoint union of points; further algebraically closed field extension preserves that point set. Hence the equivalence identifies the geometric fibre functors naturally. Conjugating their automorphisms through the equivalence gives the asserted group isomorphism; the topology is preserved because kernels of actions on finite fibres are a neighbourhood basis by [F5]. The AC use is exactly that of [F5] and the selections in steps 1.2, 2.2 and 3.1. [F5, step 2.1, step 3.1, step 1.3] ∎
