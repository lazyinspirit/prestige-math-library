---
id: lem-cft-principal-central-reduction-characters-and-semisimplicity
kind: lemma
title: Principal central reduction, regular deformation transport and semisimple minimal-series tops
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
domain: mathematics
library: mathematics
physical_scope: null
proof_strategy: direct
deps:
  - def-axiom-of-choice
  - thm-harish-chandra-isomorphism-for-the-center
  - thm-chevalley-shephard-todd-for-finite-weyl-groups
  - thm-enveloping-algebra-is-free-over-its-center
  - thm-duflo-joseph-g-finite-endomorphisms-of-verma-modules
  - lem-the-nilpotent-central-fiber-is-a-reduced-integral-domain
  - cor-verma-irreducibility-criterion-from-shapovalov-determinants
  - lem-cft-principal-whittaker-universal-equivalence
  - lem-cft-finite-whittaker-coinvariants-exact
  - lem-cft-principal-voa-zhu-brst-quotient-comparison
  - lem-cft-affine-zhu-quotient-and-integrable-descent
  - thm-cft-principal-admissible-affine-module-classification
  - lem-cft-affine-parabolic-simple-levi-restriction
  - lem-cft-admissible-sl2-vacuum-null-polynomial
  - lem-cft-zhu-top-induction-and-forward-rationality
  - cor-finite-variable-polynomial-ring-noetherian
  - cor-weak-nullstellensatz-algebraically-closed-coordinate-form
  - thm-chinese-remainder-theorem-for-comaximal-ideals
dependency_roles:
  def-axiom-of-choice: mathematical-premise
  thm-harish-chandra-isomorphism-for-the-center: mathematical-premise
  thm-chevalley-shephard-todd-for-finite-weyl-groups: mathematical-premise
  thm-enveloping-algebra-is-free-over-its-center: mathematical-premise
  thm-duflo-joseph-g-finite-endomorphisms-of-verma-modules: mathematical-premise
  lem-the-nilpotent-central-fiber-is-a-reduced-integral-domain: mathematical-premise
  cor-verma-irreducibility-criterion-from-shapovalov-determinants: mathematical-premise
  lem-cft-principal-whittaker-universal-equivalence: mathematical-premise
  lem-cft-finite-whittaker-coinvariants-exact: mathematical-premise
  lem-cft-principal-voa-zhu-brst-quotient-comparison: mathematical-premise
  lem-cft-affine-zhu-quotient-and-integrable-descent: mathematical-premise
  thm-cft-principal-admissible-affine-module-classification: mathematical-premise
  lem-cft-affine-parabolic-simple-levi-restriction: mathematical-premise
  lem-cft-admissible-sl2-vacuum-null-polynomial: mathematical-premise
  lem-cft-zhu-top-induction-and-forward-rationality: mathematical-premise
  cor-finite-variable-polynomial-ring-noetherian: mathematical-premise
  cor-weak-nullstellensatz-algebraically-closed-coordinate-form: mathematical-premise
  thm-chinese-remainder-theorem-for-comaximal-ideals: mathematical-premise
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: Tomoyuki Arakawa, Rationality of W-algebras, principal nilpotent cases
      url: https://arxiv.org/pdf/1211.7124v3
      locator: Section10.5–10.10, regular central-character deformations; the annihilator, affine induction and splitting are reconstructed here.
verification:
  precheck: pass
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-05
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
dependency_level: 10
---

## Statement

Assume Choice, a finite-dimensional complex simple g and the original nondegenerate principal-admissible level k with its specified two-branch level predicate. Put $V=L(k \Lambda_{0})$, $U=U(g)$, $Z=Z(U)$, and $A(V)=U/J$ under the actual affine Zhu map. Use the pinned principal character chi and $Y=U$ $\otimes_{U(n+)}$ $C_{\chi }$. Let $I_{J}=\operatorname{Wh}(JY)$. Then the actual associative principal reduction is $B_{J}=Z/I_{J}$ and is a finite product of copies of C. Its complete simple list, with repetitions removed, is $C_{\gamma _{\bar{\lambda}}}$ for the nondegenerate admissible affine labels $\lambda $. Every such character is regular. Every $B_{J}$ self-extension of one of these characters splits by the explicit first-order Verma and actual affine-quotient transport below.

Under the actual natural quotient Zhu comparison, $A(H_{f}^{0}(V))$ is this algebra $B_{J}$. These assertions do not assume $H_{f}^{0}(V)$ simple or rational and do not use a generic reverse Zhu implication.

## Facts & Assumptions

**Given:** The exact original level tests, actual affine quotient, pinned principal data and invariant-form normalization. The finite character $\gamma _{\lambda }$ evaluates the $\rho -shifted$ HC polynomial at $\lambda +\rho $. Dual numbers mean $D=C[t]/(t^{2})$.

[A1] [[def-axiom-of-choice]] is inherited from the unchanged finite mathematical suppliers and their algebraic-group, PBW and projective constructions.

[F1] [[thm-harish-chandra-isomorphism-for-the-center]], [[thm-chevalley-shephard-todd-for-finite-weyl-groups]], [[thm-enveloping-algebra-is-free-over-its-center]], [[thm-duflo-joseph-g-finite-endomorphisms-of-verma-modules]], and [[lem-the-nilpotent-central-fiber-is-a-reduced-integral-domain]] give the polynomial center, U free over Z, $Ann_{U}$ $M_{g}(\lambda )=U$ ker $\gamma _{\lambda }$, and the reduced integral central leading fiber C[Nilcone]. The last supplier constructs the principal slice, invariant Jacobian, sl2 strings and irreducible nilcone of dimension dim g−rank g. Its associated-grade statements are used with their actual proof scope.

[F2] [[lem-cft-principal-whittaker-universal-equivalence]] gives Y free over Z, $\operatorname{Wh}(Y)=Z$, exact arbitrary-coefficient Whittaker equivalence and its CE contraction. [[lem-cft-finite-whittaker-coinvariants-exact]] gives actual finite category-O Whittaker homology and its top values.

[F3] [[lem-cft-affine-zhu-quotient-and-integrable-descent]], [[thm-cft-principal-admissible-affine-module-classification]], and [[lem-cft-zhu-top-induction-and-forward-rationality]] supply the actual quotient $A(V)=U/J$, classified ordinary-Cartan affine category-O modules, and top-preserving $n=0$ induction. Only induction and the forward/top correspondence are used, never a reverse Zhu criterion. [[cor-verma-irreducibility-criterion-from-shapovalov-determinants]] supplies the exact finite anti-dominant no-positive-integral criterion.

[F4] [[lem-cft-affine-parabolic-simple-levi-restriction]], including its all-weak-module field homotopy, acts on the cohomology of every actual weak quotient module by the SIMPLE rank-one vacuum algebra. [[lem-cft-admissible-sl2-vacuum-null-polynomial]], step19, gives its squarefree OPERATOR polynomial on generalized highest spaces, with roots r−s $p_{i}/q_{i}$ for $0\le r\le p_{i}-2$ and $0\le s\le q_{i}-1$. The finite simple coroots form a basis. These are actual mode statements, not just scalar classification polynomials.

[F5] [[cor-finite-variable-polynomial-ring-noetherian]], [[cor-weak-nullstellensatz-algebraically-closed-coordinate-form]] and [[thm-chinese-remainder-theorem-for-comaximal-ideals]] give the indicated finite algebra facts. The needed local Nakayama argument is proved below by its determinant trick.

[F6] [[lem-cft-principal-voa-zhu-brst-quotient-comparison]] identifies the NATURAL actual quotient Zhu algebra with the associative principal reduction, including the pinned old/new conformal and Cartan shifts. It is not an abstract center isomorphism.

## Proof

1.1 At a regular $x=\lambda +\rho $, differentials of invariant polynomials span the full cotangent space. For each other orbit point y choose affine linear $L_{y}$ with $L_{y}(x)=1,L_{y}(y)=0$ and put $L=\prod $ $L_{y}^{2}$. Given a linear covector ell, $p(v)=L(v)ell(v-x)$ has derivative ell at x and zero value/derivative at every other orbit point. Its W-average $P(v)=\sum _{w}$ $p(w^{-1}v)$ is invariant and has $dP_{x}=ell$. Basic invariant generators therefore have invertible derivative matrix at x. The orbit is free: write $x=u+iv$, choose a real linear combination u+s v off every root hyperplane (only finitely many s are forbidden), and use the trivial stabilizer of a real regular Weyl-chamber point. Thus every derivation of Z at $\gamma _{\lambda }$ is uniquely $d(HC(z))_{x}(\mu )$ for a vector mu, by solving this derivative matrix and applying the polynomial chain rule. [A1, F1, algebra]

1.2 For a U-submodule Yprime of Y, F2 identifies its Whittaker vectors with an ideal I in Z; evaluation under the actual equivalence gives $Y'=Y$ $\otimes_{Z}$ $I=YI$. Therefore $JY=Y$ $I_{J}$ and $Y/JY=Y$ $\otimes_{Z}$ $B_{J}$, where $B_{J}=Z/I_{J}$. For every $B_{J}$-module E, J annihilates Y $\otimes_{Z}$ E, since its action factors through JY $\otimes_{Z}$ $E=Y$ $I_{J}$ $\otimes_{Z}$ $E=0$. This transports arbitrary modules and extensions, not only characters. [F2, given, algebra]

2.1 A self-extension $0\to C_{\gamma }\to E\to C_{\gamma }\to 0$ has a basis v,vprime with z $v=\gamma (z)v$ and z $v'=\gamma (z)v'+d(z)v$. Associativity gives $d(zz')=\gamma (z)d(z')+d(z)\gamma (z')$. Set t $v'=v,t$ $v=0$. Then E is free rank one over D and its Z action is $\phi (z)=\gamma (z)+t$ d(z). At regular gamma the preceding step realizes d by a weight direction mu. Define $N_{D}=U$ $\otimes_{U(b)}D_{\lambda +t \mu }$, with n+ acting zero and Cartan $\lambda +t$ mu. PBW makes $N_{D}=U(n-)$ tensor D, a genuine extension of $M_{g}(\lambda )$ by itself. The polynomial HC highest-weight formula gives central action phi. Its ordinary n− coinvariants are exactly E. [F1, step 1.1, algebra]

2.2 For a character gamma set $Y_{\gamma }=Y$ $\otimes_{Z}$ $C_{\gamma }$. The filtered free basis in F2 and the principal invariant restriction give gr $Y_{\gamma }=C[N]$ supported on the actual N-orbit of the pinned principal f. F1 identifies the central quotient $U_{\gamma }$ leading algebra with the same reduced integral C[Nilcone]; regrading each finite Cartan component of PBW degree d and root grade j by d−j gives the Kazhdan version, with central invariant generators of root grade zero. The annihilator K of $Y_{\gamma }$ in $U_{\gamma }$ is a two-sided ad-g-stable ideal. Its leading ideal is therefore Poisson and G-stable: root derivations are locally nilpotent and exponentiate polynomially; Cartan preserves weight components. Its zero set contains the support Nf and hence Gf. This orbit has dimension dim g−rank g by the principal sl2 strings, so is dense in the irreducible nilcone of F1. Every leading element of K thus vanishes on the entire reduced nilcone, so gr $K=0$ by Nullstellensatz and $K=0$ by leading-symbol separation. Consequently $Ann_{U}$ $Y_{\gamma }=U$ ker gamma. [A1, F1, F2, F5, step 1.2, algebra]

3.1 Here is the exact first-order annihilator lemma. If B and P are flat over D and B/tB acts faithfully on P/tP, then B acts faithfully on P: an annihilator b has zero special fiber, so $b=t$ c; flatness gives $\operatorname{ker}(t:P\to P)=tP$, hence c acts zero on the special fiber and $c=t$ d; thus $b=0$. Apply this to $B=U$ $\otimes_{Z}$ D and $P=N_{D}$. F1 gives B D-free, PBW gives $N_{D}$ D-free, and Duflo–Joseph makes its special-fiber central reduction faithful. Therefore $Ann_{U}$ $N_{D}=U$ ker $\phi =U$ $Ann_{Z}$ E. The kernel equality is coefficientwise phi in an actual Z-basis of U, and does not require phi surjective. This covers $d=0$ as well. [F1, step 2.1, algebra]

3.2 The complete $B_{J}$ character condition is gamma in $Irr(B_{J})$ iff J subset U ker gamma. Forward, J kills $Y_{\gamma }$ and its annihilator is U ker gamma by step 2.2. Conversely JY lies in Y ker gamma; the exact Whittaker equivalence identifies $\operatorname{Wh}(Y\ker\gamma)=\ker\gamma$, so $I_{J}$ subset ker gamma. Choose in the finite dot orbit an anti-dominant representative lambdabar: minimize the real pairing of $w(\bar{\lambda}+\rho )$ with a fixed real strictly dominant vector. A positive integral coroot pairing would decrease it after the corresponding reflection. The finite Verma is therefore simple by F3, and its annihilator is U ker gamma. The displayed ideal condition makes it an actual U/J-module. Its $n=0$ simple affine quotient has this horizontal highest top and the required ordinary-Cartan category-O properties by current PBW. F3 therefore makes its label $\lambda $ admissible. Admissibility would make every integral finite shifted positive-root pairing positive, whereas finite anti-dominance forbids that; hence all finite-root shifted pairings are nonintegral. The character is regular and the affine label nondegenerate. Conversely an actual nondegenerate admissible quotient module has this simple finite Verma top, so J annihilates it; its Duflo annihilator and the same condition give the $B_{J}$ character. This proves the exact listed characters, with repetitions removed. The classification invocation is on this induced actual quotient module with the stated ordinary-Cartan hypothesis. Its iff uses the actual nonintegral quotient transports and the simple-Levi operator boundary, so the inference is about the entire affine module rather than the central character alone. [A1, F1, F2, F3, step 2.2, algebra]

4.1 For the regular dual-number E above, Y $\otimes_{Z}$ E and U $\otimes_{Z}$ D are D-free by F1–F2. Their special-fiber action is faithful by the preceding step. The flat faithful-deformation argument therefore gives $Ann_{U}(Y \otimes_{Z} E)=U$ $Ann_{Z}$ $E=Ann_{U}$ $N_{D}$. If E is a $B_{J}$-module, J annihilates the first module by step 1.2, and consequently J annihilates $N_{D}$ too. Thus $N_{D}$ is an ACTUAL U/J-module extension, not a pointwise statement about two equal constituent annihilators. [F1, F2, step 3.1, step 1.2, step 2.2, algebra]

5.1 Let $T=M_{g}(\bar{\lambda})=L_{g}(\bar{\lambda})$ for a regular finite anti-dominant nondegenerate admissible affine $\lambda $. Actual $n=0$ induction $M_{V}(T)$ has its original retained top. Current PBW gives the ordinary semisimple finite Cartan, finite full-weight pieces, highest cone, locally nilpotent positive Borel, and locally finite Sugawara operator. The adopted affine quotient classification/semisimplicity therefore applies. Its cyclic highest vector can project only to the simple label $\lambda $ and generates exactly one copy, so $M_{V}(T)=L(\lambda )$. For an actual U/J extension $0\to T\to N_{D}\to T\to 0$, induction is right exact by its constructed left-adjoint property and yields $M_{V}(T)\to M_{V}(N_{D})\to M_{V}(T)\to 0$. The first map is nonzero on its retained injected top, hence injective because $M_{V}(T)$ is simple. Thus the middle is a genuine extension $0\to L(\lambda )\to M_{V}(N_{D})\to L(\lambda )\to 0$, with the finite generalized highest-cone and lower-bounded Sugawara properties supplied by PBW and the two-copy deformed top. [F1, F3, step 4.1, algebra]

6.1 This generalized affine self-extension splits WITHOUT assuming Cartan semisimple. Its generalized full highest-weight plane $U_{\lambda }$ has dimension two and is killed by positive affine roots, since the two highest cones contain no larger weight. For each finite simple root use the actual nilradical-loop restriction of F4. At loop depth zero it is exactly the finite Chevalley complex: positive loop modes kill the coefficient top, zero modes give its coefficient and bracket terms, and there are no negative-cohomological cochains. Hence $U_{\lambda }$ injects into H0; positive-depth boundaries cannot meet it because the differential preserves loop depth. The corrected $h_{i}$ equals the original $h_{i}$ there, since the ghost correction kills the zero-ghost vacuum. The simple rank-one null field therefore gives $f_{i}(h_{i})U_{\lambda }=0$, with $f_{i}(X)=\prod _{r=0}^{p_{i}-2}\prod _{s=0}^{q_{i}-1}(X-r+s p_{i}/q_{i})$. Coprimality makes these roots distinct. Both constituent eigenvalues are $\lambda (h_{i})$, so every $h_{i}$ is that scalar on the plane. Sugawara on this highest plane is consequently scalar too. A chosen lift of the quotient highest vector now generates an ordinary affine Verma quotient with a one-dimensional highest line. It cannot contain the independent highest line of the simple kernel; their intersection is zero and supplies a splitting. This directly recovers the needed weight-category hypothesis rather than applying F3 prematurely. The all-weak-module statement of F4 is essential here: the coefficient algebra D commutes with the ghost/current maps and the vacuum-boundary field homotopy. Thus the null field acts by zero as an operator on the generalized plane, including its nilpotent Cartan part. Squarefreeness then forces that nilpotent part to vanish; a list of scalar roots by itself would not do so. [F3, F4, step 5.1, algebra]

7.1 The constructed affine splitting preserves its chosen grade-zero top: its highest-vector section has the same scalar Sugawara energy and the mode-degree grading. Restrict it to obtain a U/J splitting of $N_{D}$. Its n− coinvariants split the original central extension E, because PBW identified those coinvariants with E. Thus every $B_{J}$ self-extension at a regular occurring character splits. [F2, F3, step 2.1, step 6.1, algebra]

8.1 There are finitely many listed characters. On the actual finite highest tops, F4 restricts each finite simple-coroot value to the finite set r−s $p_{i}/q_{i}$. The simple coroots form a basis, so their finite product bounds all finite highest weights and therefore the central characters. No finiteness of arbitrary affine derivation shifts is asserted. All occurring characters are regular by the preceding step and all their $B_{J}$ self-extensions split by step 7.1. [F3, F4, step 7.1, step 3.2, algebra]

9.1 For a maximal ideal m of $B_{J}$, a nonzero linear functional on $m/m^{2}$ would give a derivation at its character and the nonsplit two-dimensional extension of step 2.1. Hence $m/m^{2}=0$. The quotient $B_{J}$ of polynomial Z is Noetherian by F1 and F5. Its localized maximal ideal is finitely generated and equals its square. If a is a generating column, write $a=C$ a with C entries in that maximal ideal; det(1−C) is a unit and its adjugate gives $a=0$. Thus every maximal localization is its residue field C, by weak Nullstellensatz. The natural map to the finite product of these localizations is injective: the annihilator of a hypothetical nonzero element vanishing in each localization lies in a maximal ideal where no outside element could annihilate it. CRT surjects onto the same finite product. Therefore $B_{J}$ is exactly a finite product of copies of C, not merely a reduced list of points. [F1, F5, step 2.1, step 8.1, algebra]

10.1 F6 now identifies the actual $A(H_{f}^{0}(V))$ with this $B_{J}$ through its natural mode/finite-BRST comparison and original conformal shifts. Thus this exact finite character list and semisimplicity apply to the actual quotient VOA top algebra. Under the physical minus convention the labels may be written $\gamma _{-w_{0} \bar{\lambda}}$: the opposition diagram automorphism preserves the positive Borel, level and unique affine vacuum ideal and carries the nondegenerate admissible list onto itself. This is a reindexing of the complete list, not an assumption of injectivity of all affine-to-central labels. No simplicity or rationality of $H_{f}^{0}(V)$ was used. [F3, F6, step 3.2, step 9.1, algebra] ∎

## Proof status

Faithful schema materialization of the complete regular-central-deformation and principal-Whittaker-deformation research proofs, including direct-reductions.md section8, using their exact local suppliers. The frozen Whittaker and actual quotient-Zhu carriers replace already completed universal/quotient interfaces. Research only; no independent acceptance, production adoption or native gate credit is claimed.
