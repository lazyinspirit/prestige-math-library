---
id: lem-parshin-construction-fixed-genus-curves-ramified-at-one-rational-point
kind: lemma
title: "The Parshin construction gives bounded-genus covers ramified over one point"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 10
deps:
  - def-number-field
  - def-algebraic-curve-over-field
  - def-good-reduction-of-smooth-proper-curve-at-a-finite-place
  - lem-smooth-proper-curve-has-good-reduction-away-from-finite-set
  - def-abelian-variety-over-a-field
  - def-abelian-scheme
  - thm-valuative-criterion-properness
  - def-jacobian-of-smooth-proper-curve
  - def-pointed-abel-jacobi-map-of-curve
  - def-axiom-of-choice
  - def-dependent-choice
  - def-countable-choice
  - def-etale-morphism-schemes
  - def-finite-morphism-schemes
  - thm-valuative-criterion-properness
  - lem-finite-etale-galois-refinements-and-quotients
  - lem-section-of-smooth-relative-curve-effective-cartier
  - thm-jacobian-good-reduction-from-smooth-proper-curve-model
  - thm-relative-picard-identity-component-and-rigidified-universal-line-bundle-over-dvr
  - thm-abel-jacobi-universal-property-for-pointed-curve
  - thm-picard-zero-represented-by-jacobian
  - thm-abel-jacobi-pullback-of-multiplication-is-geometrically-connected
  - lem-geometric-connectedness-persists-for-finite-etale-curve-cover
  - lem-multiplication-by-n-on-abelian-scheme
  - thm-weak-mordell-weil-finite-generation
  - lem-uniformly-split-finite-etale-curve-cover-over-number-field-points
  - lem-finite-number-field-extensions-bounded-degree-unramified-outside-s
  - lem-finiteness-of-picard-group-of-s-integers
  - lem-s-integer-ideal-classes-become-principal-after-finite-extension
  - lem-relative-line-bundle-trivial-on-generic-fiber-pulled-back-from-base
  - lem-double-cover-from-square-root-line-bundle-branched-at-two-sections
  - thm-riemann-hurwitz-complete
  - lem-proper-stable-base-change
  - thm-smooth-morphisms-stable-base-change-composition
justified_by: []
proof_strategy: direct
axiom_use: "AC, DC, and Countable Choice are declared. AC/DC are used by the Jacobian and weak Mordell–Weil inputs; Countable Choice enters the bounded-extension route. The Dedekind-base relative Picard and line-bundle extension interface remains open; the bounded-extension route is supplied under AC and Countable Choice."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "J. S. Milne, Abelian Varieties, version 2.0, Chapter IV §5, Theorem 5.1 and proof, printed pp. 146–148"
      url: "https://www.jmilne.org/math/CourseNotes/AV.pdf"
      locator: "Chapter III §9, Proposition 9.1 and its finite-etale fundamental-group/Picard proof; Chapter IV §5, Theorem 5.1 and proof, including the fixed etale pullback, uniform splitting, weak Mordell–Weil halving, Picard-class principalization, and the two-point branched cover."
    - title: "G. Faltings, G. Wustholz et al., Rational Points, 2nd ed. (1986), Chapter V §4.4, Proposition 4.9 and proof, printed pp. 191–196"
      url: "https://yhzhumath.github.io/Mordell2024/RP.pdf"
      locator: "Kodaira–Parshin construction of a fixed-field family of bounded-genus covers with a single target branch point."
verification: {}
---

## Statement

Assume AC, DC, and Countable Choice. Let $K$ be a number field, let $X/K$ be a smooth proper geometrically connected curve of genus $g\ge2$, and suppose $X$ has a $K$-rational point $P_0$. Let $S$ be a finite set of finite primes of $K$ containing every prime above $2$, and suppose $X$ has good reduction outside $S$. Put $D=2^{2g}$. There are a finite extension $L/K$ and an integer $G=2+2D(g-1)$, both independent of $P$, such that for every $P\in X(K)$ there are a smooth proper geometrically connected curve $Y_P/L$ and a finite morphism $\phi_P:Y_P\to X_L$ of degree at most $2D$ with the following properties: $Y_P$ has good reduction outside the primes of $L$ above $S$; the branch locus of $\phi_P$ is exactly $\{P\}$; and $2\le g(Y_P)\le G$.

## Statement references

[[def-number-field]]

[[def-algebraic-curve-over-field]]

[[def-good-reduction-of-smooth-proper-curve-at-a-finite-place]]

[[lem-smooth-proper-curve-has-good-reduction-away-from-finite-set]]

[Milne, Theorem 5.1 and proof](https://www.jmilne.org/math/CourseNotes/AV.pdf)

[Milne, Proposition 9.1 and proof](https://www.jmilne.org/math/CourseNotes/AV.pdf)

[Faltings–Wüstholz et al., Proposition 4.9 and proof](https://yhzhumath.github.io/Mordell2024/RP.pdf)

## Facts & Assumptions

**Given:** AC, DC, Countable Choice, $K,X,g,P_0,S$ as in the Statement.

[A1] AC is the stated choice principle. [[def-axiom-of-choice]]

[A2] DC is the stated dependent-choice principle. [[def-dependent-choice]]

[A3] Countable Choice is the stated countable choice principle. [[def-countable-choice]]

[F1] A pointed smooth proper curve has a Jacobian and pointed Abel–Jacobi map; every pointed map from the curve to an abelian variety factors uniquely through its Jacobian, and the Jacobian represents the degree-zero Picard functor. [[def-jacobian-of-smooth-proper-curve]] [[def-pointed-abel-jacobi-map-of-curve]] [[thm-abel-jacobi-universal-property-for-pointed-curve]] [[thm-picard-zero-represented-by-jacobian]]

[F2] For an abelian scheme of relative dimension $g$, multiplication by $2$ is finite etale of degree $2^{2g}$ when $2$ is invertible on the base. [[lem-multiplication-by-n-on-abelian-scheme]]

[F3] Every element of $A(F)/2A(F)$ is among finitely many classes for any abelian variety $A$ over a number field $F$. [[thm-weak-mordell-weil-finite-generation]]

[F5] There is a finite extension of a number field over which every class in the Picard group of its ring of $S$-integers becomes principal. [[lem-s-integer-ideal-classes-become-principal-after-finite-extension]]

[F6] Under AC, on a smooth proper curve model with geometrically integral fibres, a line bundle trivial on the generic fibre is pulled back from the base; after a base extension killing the original base Picard group, that pullback becomes trivial. [[lem-relative-line-bundle-trivial-on-generic-fiber-pulled-back-from-base]]

[F7] A square root of the branch divisor of two disjoint sections defines a finite flat degree-two cover, smooth and proper over the base, with genus twice the source genus. [[lem-double-cover-from-square-root-line-bundle-branched-at-two-sections]]

[F8] An unramified degree-$e$ morphism of smooth proper curves satisfies $g(X_2)=1+e(g-1)$; a double cover branched simply at two points has genus twice the source genus. [[thm-riemann-hurwitz-complete]]

[F9] Properness and smoothness are preserved under arbitrary base change. [[lem-proper-stable-base-change]] [[thm-smooth-morphisms-stable-base-change-composition]]

[F11] Properness extends the generic point $P_0$ over each local valuation ring of the Dedekind base, and separatedness makes these extensions unique so they glue to a section over $U$. [[thm-valuative-criterion-properness]]

[F12] A finite étale morphism has open-and-closed diagonal, so the equalizer of two sections is open and closed. [[lem-finite-etale-galois-refinements-and-quotients]]

[F13] A finite étale cover of a smooth proper curve model whose generic fibre is geometrically connected has geometrically connected fibres; smoothness then makes those fibres geometrically integral. [[lem-geometric-connectedness-persists-for-finite-etale-curve-cover]]

[F14] Sections of the smooth relative curve model are effective Cartier divisors on the total space. [[lem-section-of-smooth-relative-curve-effective-cartier]]

[L1] Under the declared AC and DC, [[thm-jacobian-good-reduction-from-smooth-proper-curve-model]] proves good reduction of the Jacobian at each prime with a smooth proper curve model. Its original unqualified choice scope remains held. This placewise result does not itself construct the global abelian scheme and extended Abel–Jacobi map required in [L2].

[L6] Under AC and DC, [[lem-smooth-proper-curve-has-good-reduction-away-from-finite-set]] supplies a smooth proper curve model with geometrically connected fibres over $\operatorname{Spec}\mathcal O_{K,S}$ for the prescribed $S$, using the given good reduction at every prime outside $S$. It does not enlarge $S$.

[L2] The proof needs a relative Picard identity-component theorem over the ring of $S$-integers, an extended pointed Abel–Jacobi map, and extension of each generic square-root line bundle to the total curve model. The existing [[thm-relative-picard-identity-component-and-rigidified-universal-line-bundle-over-dvr]] supplies representability and a section-rigidified universal bundle over a DVR under AC and DC. Its Statement does not supply this Dedekind-base interface or the generic line-bundle extension used in step 5.1; these remain unresolved.

[L3] Under the declared AC and Countable Choice, [[lem-finite-number-field-extensions-bounded-degree-unramified-outside-s]] supplies finiteness of bounded-degree extensions unramified outside $S$; its current proof uses the supplied bounded-extension theorem.

[L4] Under AC and Countable Choice, [[lem-uniformly-split-finite-etale-curve-cover-over-number-field-points]] supplies one finite extension splitting all fibres of the given finite étale cover above $K$-rational points. Its former bounded-extension supplier hold [L3] is closed.

[L5] The pullback of multiplication by $2$ on $J_X$ along the pointed Abel–Jacobi map is geometrically connected of degree $D=2^{2g}$ ([[thm-abel-jacobi-pullback-of-multiplication-is-geometrically-connected]]).

## Proof
1.1 Given the global model interface [L6], put $U=\operatorname{Spec}\mathcal O_{K,S}$ and let $\mathcal X/U$ be the smooth proper model. The point $P_0$ extends to a section by properness [F11]. The relative Picard interface [L2] is required to extend $J_X$, $u_{P_0}$, and the model Picard data. Subject to that interface, [F2] makes multiplication by $2$ finite etale of degree $D$, and its pullback along $u_{P_0}$ is a finite etale cover $\mathcal X_0\to\mathcal X$ of degree $D$. [F2, F11, L1, L2, L6, given, construct]

2.1 The fibre of $\mathcal X_0\to\mathcal X$ above $P_0$ contains the zero of $J_X$. By [L5], the full pullback is geometrically connected, so the entire degree-$D$ cover is $X_2$ and $e=D>1$. [L5, step 1.1, construct]

3.1 Apply the split-fibre interface [L4] over $K$ and enlarge to a fixed $L_1/K$ over which every fibre above every $P\in X(K)$ splits. For each such $P$, choose distinct $Q_1,Q_2\in X_2(L_1)$ above $P$; this is possible because $e=D>1$. By [F13] and [L5], the finite étale model of $X_2$ has geometrically connected, hence geometrically integral, fibres, so it is a fixed smooth proper model with good reduction outside primes above $S$. [A1, A3, F13, L4, L5, step 2.1, choose]

4.1 Let $J_2=\operatorname{Pic}^0(X_2/L_1)$. By [F3], $J_2(L_1)/2J_2(L_1)$ is finite. Choose representatives $r_1,\ldots,r_m$ and a finite extension $L_2/L_1$ containing a half of each $r_i$. For every $z\in J_2(L_1)$, write $z=r_i+2w$ with $w\in J_2(L_1)$; then $z=2(w+r_i/2)$ in $J_2(L_2)$. In particular the class of $Q_1-Q_2$ has a half in $J_2(L_2)$. [A1, A2, F1, F3, step 3.1, choose, construct, algebra]

5.1 By [F1], the half in step 4.1 is a degree-zero line-bundle class $\mathcal D_P$ on $X_{2,L_2}$ with $\mathcal D_P^{\otimes2}\cong\mathcal O(Q_1-Q_2)$. Put $\mathcal M_P=\mathcal D_P\otimes\mathcal O(Q_2)$; then $\mathcal M_P^{\otimes2}\cong\mathcal O(Q_1+Q_2)$ on the generic fibre. The still-held extension interface [L2] is required to extend each $\mathcal M_P$ as an invertible sheaf on the model over $R_2=\mathcal O_{L_2,S_{L_2}}$. Form its discrepancy $\mathcal N_P=\mathcal M_P^{\otimes2}\otimes\mathcal O(-Q_1-Q_2)$ on this OLD model; it is generically trivial. By [F6] under the declared AC, $\mathcal N_P\cong p^*\mathcal B_P$ for some $\mathcal B_P\in\operatorname{Pic}(R_2)$. Apply [F5] once to this fixed ring $R_2$, obtaining a finite extension $L_3/L_2$ on which the extension map from $\operatorname{Pic}(R_2)$ is zero. Pull back the entire model and the constructed bundles. Every old-base class $\mathcal B_P$ becomes trivial, uniformly in $P$, and hence every discrepancy vanishes. This proves the square relation on that model conditional on [L2]. No assertion that the NEW ring has Picard group zero is made or needed. [A1, F1, F5, F6, F9, L2, step 4.1, construct, algebra]

6.1 The points $Q_1,Q_2$ extend to sections of the finite étale model over the $S$-integers of $L_1$ by [F11]. By [F14], each section defines an effective Cartier divisor; their equalizer is open and closed by [F12], and is empty on the generic fibre, so it is empty because the base is integral. Near a point of either section, disjointness lets us remove the other section; there the sum has the same local equation as the one remaining divisor. Off both sections its local equation is $1$. These equations show their sum is the relative effective Cartier branch divisor required in [F7]. Apply [F7] to obtain a smooth proper geometrically connected double cover $Y_P\to X_2$ branched exactly at $Q_1,Q_2$. Since $X_2\to X$ is étale, the composite $\phi_P:Y_P\to X_{L_3}$ is ramified exactly above $P$ and has degree $2e\le2D$. The smooth proper model supplied by [F7], together with [F9], gives good reduction outside primes over $S$. [F2, F7, F9, F11, F12, F14, step 5.1, algebra]

7.1 By [F8], $g(X_2)=1+e(g-1)$ and $g(Y_P)=2g(X_2)=2+2e(g-1)$. Since $e=D$, this gives $2\le g(Y_P)=2+2D(g-1)=G$, uniformly in $P$. The fields $L_1,L_2,L_3$ and the bound depend only on the initial data, not on $P$; their composite over $K$ is the asserted $L$. [F8, step 2.1, step 3.1, step 6.1, algebra] ∎

## Proof status

Escalated at [L2]: the Dedekind-base relative Picard scheme, extended Abel–Jacobi map, and generic line-bundle extension are not supplied by the existing DVR theorem. The global-model supplier [L6], connected pullback [L5], and bounded-extension/splitting chain [L3]–[L4] now have local proof bodies at the declared choice scope. Their existence does not complete this construction or grant proof acceptance.
