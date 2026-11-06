---
id: lem-gts-three-dimensional-perfect-residue-field-complex-forces-regularity
kind: lemma
title: A three-dimensional perfect residue-field complex forces regularity
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
domain: mathematics
library: physics
category: string-theory
axiom_use: ZF + AC
deps:
- lem-normal-domain-implies-s-two
- thm-integral-closure-finite-finite-type-domain-over-field
- thm-auslander-buchsbaum-serre-regularity-criterion
- thm-auslander-buchsbaum-formula
- thm-regular-local-rings-are-domains-and-cohen-macaulay
- thm-artin-rees-lemma
- thm-krull-intersection-theorem
- cor-noether-normalisation-module-finiteness
- thm-dimension-formula-for-affine-domains
- thm-faithful-flatness-of-jacobson-adic-completion
- lem-generic-freeness-finite-type-algebra-module
- def-axiom-of-choice
dependency_roles:
  lem-normal-domain-implies-s-two: mathematical-premise
  thm-integral-closure-finite-finite-type-domain-over-field: mathematical-premise
  thm-auslander-buchsbaum-serre-regularity-criterion: mathematical-premise
  thm-auslander-buchsbaum-formula: mathematical-premise
  thm-regular-local-rings-are-domains-and-cohen-macaulay: mathematical-premise
  thm-artin-rees-lemma: mathematical-premise
  thm-krull-intersection-theorem: mathematical-premise
  cor-noether-normalisation-module-finiteness: mathematical-premise
  thm-dimension-formula-for-affine-domains: mathematical-premise
  thm-faithful-flatness-of-jacobson-adic-completion: mathematical-premise
  lem-generic-freeness-finite-type-algebra-module: mathematical-premise
  def-axiom-of-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
  - title: Bridgeland, King and Reid, The McKay correspondence as an equivalence of derived categories
    url: https://arxiv.org/pdf/math/9908027v2
    locator: §5, Theorem 5.1 and Corollaries 5.2–5.3 (PDF pp.15–16); projective application §6 (pp.16–18). Corrected
      local algebra is proved here, not imported from this source.
  - title: Bridgeland and Iyengar, A criterion for regularity of local rings
    url: https://arxiv.org/pdf/math/0602235v2
    locator: 'Complete four-page v2: Theorem1.1, Lemmas2.1–2.2, Proposition2.3, Theorem2.4 and Remark2.5 (PDF pp.1–4);
      actual corrected Tor edge and colon argument.'
  - title: Huneke and Lyubeznik, Absolute integral closure in positive characteristic
    url: https://arxiv.org/pdf/math/0604046
    locator: Lemma 2.2 and its complete proof (PDF pp.4–5), read for the equational construction. Steps 5.1–8.1 give the local proof with explicit Noetherian and positive-degree hypotheses; no theorem is imported.
verification:
  precheck: pass
  judge:
    model: gpt-6-luna
    verdict: pass
    date: 2026-11-05
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-04
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
dependency_level: 0
---

## Statement

Assume the Axiom of Choice. Let $(R,\mathfrak m,k)$ be an integral three-dimensional local ring essentially of finite type over $\mathbb C$, at a closed point. Let
$$F_3\longrightarrow F_2\longrightarrow F_1\longrightarrow F_0$$
be a complex of finite free $R$-modules in homological degrees $3,2,1,0$. Suppose every homology module has finite length and $H_0(F)=k$. Then $H_i(F)=0$ for $i>0$ and $R$ is regular. Equivalently, a perfect cochain complex supported at that point, with amplitude $[-3,0]$ and zeroth cohomology $k$, is quasi-isomorphic to $k$ and forces regularity. No normality, Cohen–Macaulayness, self-duality, or rank pattern is an additional hypothesis.

## Facts & Assumptions

**Given:** The local ring and finite matrix complex of the Statement. Work in ZF+AC. Local cohomology below is the cohomology of the finite-generator alternating localization Cech complex; its displayed constructions, continuous duality, Frobenius killing, and big-CM carrier are proved below.

[F1] [[lem-normal-domain-implies-s-two]] supplies S2 for each finite normal domain; [[thm-integral-closure-finite-finite-type-domain-over-field]] supplies finite normalization, including after an intermediate finite integral extension. [[cor-noether-normalisation-module-finiteness]] and [[thm-dimension-formula-for-affine-domains]] supply the finite polynomial presentation and exact height/dimension accounting.

[F2] [[thm-auslander-buchsbaum-serre-regularity-criterion]] supplies finite free resolutions over regular local rings and the final finite-projective-dimension criterion for the residue field. [[thm-auslander-buchsbaum-formula]] and [[thm-regular-local-rings-are-domains-and-cohen-macaulay]] supply the actual finite-module depth and regular-parameter identities.

[F3] [[thm-artin-rees-lemma]], [[thm-krull-intersection-theorem]], and [[thm-faithful-flatness-of-jacobson-adic-completion]] supply exact continuous duality and the completion/colon passages used below. These are not a premise that a Cohen–Macaulay extension already exists.

[F4] [[lem-generic-freeness-finite-type-algebra-module]] supplies the explicitly used generic flatness in the finite equation spreading. Absolute irreducibility, tangent-rank preservation, and punctured contracting homotopies are handled in the proof rather than inferred from an unspecified specialization theorem.

[F5] [[def-axiom-of-choice]] is the ambient premise, including free resolutions of arbitrary modules, coefficient-vector-space bases, and the countable union construction. No choice-free assertion is made.

## Proof

1.1 Finite lower local cohomology in normal dimension three. Let (S,n) be a normal three-dimensional local domain essentially finite type over a perfect field l, at a closed point. Then $H_n^0(S)=H_n^1(S)=0$, and $H_n^2(S)$ has finite length. The same assertion holds for finite normal semilocal extensions of S, with support at the finitely many points above n. [F1, F2, F3, given, algebra]

2.1 Here is the finite-length justification. Present $S=T/I$ with T a localization of a polynomial ring over l at a closed point, regular of dimension N. A finite free T-resolution P of S exists. Normality gives S2. At every nonmaximal prime p of S its localization has dimension at most two, and S2 therefore makes it Cohen–Macaulay. Its codimension in the corresponding regular localization is the constant $c=N−3$ (the dimension formula for finite-type equidimensional algebras). Auslander–Buchsbaum then makes the projective dimension there c. Consequently the finite T-module $\operatorname{Ext}_T^{(N−2)}(S,T)=\operatorname{Ext}_T^{(c+1)}(S,T)$ is supported only at the maximal ideal and has finite length. [F1, F2, F3, step 1.1, algebra]

3.1 For completeness the precise local bridge is elementary after completion of T. The completion is a power-series ring over the finite residue extension of l. Its parameter Cech complex has cohomology only in degree N, where E consists of finite linear combinations of strictly negative Laurent monomials. The coefficient-of-(z1^−1...zN^−1) pairing identifies E with the continuous l-dual of the completed power-series ring: a continuous functional factors through some finite parameter-ideal quotient, and its finitely many coefficients are precisely those negative Laurent coefficients. Thus the finite complex P tensor E is the continuous dual of Hom(P,T-hat), with reversed degrees. [F1, F2, F3, step 2.1, algebra]

4.1 Continuous dual is exact on finite modules over this complete ring. Indeed Artin–Rees gives, for U subset V finite, an exponent b such that U intersect $n^b$ V is contained in $n^a$ U, for any prescribed a. A functional on U vanishing on $n^a$ U therefore extends linearly from U/(U intersect $n^b$ V) to $V/n^b$ V. Submodules are closed by Krull intersection, so the same description identifies the dual of a quotient with the kernel. This proves exactness, without an assumed Matlis injectivity theorem. The finite Cech/free-resolution double complex now identifies $H_n^i(S)$ with the continuous dual of $\operatorname{Ext}_T^{(N−i)}(S,T)$ after completion. Completion does not alter an n-power-torsion module: it is the union of its submodules killed by $n^a$, and tensor with the completion is the identity on each such module. In particular finite length of the Ext module gives finite length of $H_n^2(S)$. S2 gives the two lower vanishings either by the first two regular parameters or the same calculation. For a finite normal semilocal extension use the direct sum over its finitely many maximal ideals, or perform the identical finite-resolution calculation before localizing those points. [F1, F2, F3, step 3.1, algebra]

5.1 An explicit positive-degree Frobenius equational lemma. Let S be a Noetherian domain of characteristic $p>0$, let a be a finitely generated ideal, and let $j>0$. Suppose alpha in $H_a^j(S)$ has all its Frobenius iterates in one finitely generated S-submodule of $H_a^j(S)$. Then a finite integral domain extension S $\to $ S' kills alpha. Here $H_a^j$ is computed by the augmented alternating localization Cech complex, with S in degree zero. If $a=0$ its positive-degree cohomology is zero, so take S'=S; otherwise remove zero generators and write $a=(z_1,...,z_e)$ with every $z_i$ nonzero. No degree-zero assertion is made: for $a=0$ and $\alpha=1$, a domain extension cannot kill alpha. [F1, F5, step 4.1, algebra]

6.1 Set $M_t=\sum_{(0\le i\le t)}$ S $F^i(\alpha)$. These form an increasing chain of submodules of the one finite module in step 5.1. Since S is Noetherian that module is Noetherian, and the chain stabilizes. Choose $r\ge 1$ for which $F^r(\alpha)$ is in $M_{(r-1)}$. Thus for coefficients $a_i$ in S,
$$g(\alpha)=0,\qquad g(X)=X^{p^r}-\sum_{i=0}^{r-1}a_i X^{p^i}.$$
The polynomial is monic and additive, and satisfies g(-x)=-g(x). The Noetherian hypothesis is used exactly at this stabilization. [F1, F5, step 5.1, algebra]

7.1 Represent alpha by a degree-j Cech cocycle c. Since $j>0$ and g(alpha)=0, there is a degree-(j-1) cochain b with g(c)=d b. Additivity and g(-x)=-g(x) make g commute with d. For each component $b_I$ in $S[1/w_I]$, where $w_I$ is the product of its localizing generators (the empty product is 1), choose $n\ge 0$ so that $w_I^n$ $b_I$ belongs to S. Adjoin, in a fixed algebraic closure of Frac(S), a root $u_I$ of
$$u_I^{p^r}-\sum_{i=0}^{r-1}a_i w_I^{n(p^r-p^i)}u_I^{p^i}-w_I^{np^r}b_I=0.$$
All coefficients belong to S, because $np^r\ge n$, and the polynomial is monic. The finitely many roots generate a finite integral domain extension $S_1$. Put $\beta_I=u_I/w_I^n$ in $S_1[1/w_I]$. Dividing its equation by $w_I^{np^r}$ gives $g(\beta_I)=b_I$. Consequently c'=c-d beta is a cocycle satisfying g(c')=0 componentwise. [F1, F5, step 6.1, algebra]

8.1 Each of the finitely many components of c' lies in $Frac(S_1)$ and is integral over S, by its monic equation $g(c'_I)=0$. Adjoin them to obtain a finite integral domain extension S' of S. These components are now global elements of S'. Every localization map at a product of the nonzero $z_i$ is injective, so the cocycle equations holding in those localizations hold in S' itself. The global-constant subcomplex has in degree q one copy of S' for each q-element subset of [e], including the empty subset in degree zero. Its differential is the alternating sum omitting one index. To see its positive-degree exactness explicitly, extend cochains antisymmetrically to ordered tuples, with repeated indices giving zero, and define $(h c)_J=c_{(1,J)}$. Expanding the two alternating sums gives d h+h $d=id$. Hence the global cocycle c' is d gamma, with $\gamma=h$ c' (also when $j=1$, where gamma belongs to the degree-zero copy S'). Thus $c=d(\beta+\gamma)$ over S' and alpha vanishes. No separability of the extensions is required. This proves the lemma under all the hypotheses of step 5.1. [F1, F5, step 7.1, algebra]

9.1 Constructing a balanced big-CM carrier in dimension three, characteristic p. Let (R,m) be a three-dimensional local domain essentially finite type over a perfect field of positive characteristic. Normalize it, obtaining a finite normal semilocal domain S0. Finiteness follows by Noether normalization: for a generically separable finite extension the trace/discriminant bounds its integral closure inside a finite module over the normal polynomial base; a finite purely inseparable part is handled by adjoining a fixed $p^r$-th root of that base. Localizing retains finiteness. The same argument applies after every finite extension below. [F1, F3, F5, step 8.1, algebra]

10.1 By steps 1.1–4.1, $H_m^2(S0)$ is finite length. Each Si below is finite over the Noetherian ring R, hence Noetherian. Its $H_m^2$ is a finite module stable under Frobenius, and the Cech degree is $j=2>0$. Thus the exact hypotheses of step 5.1 apply to each of its finitely many generators. Apply steps 5.1–8.1 to those generators over Si and take the compositum of the finitely many resulting integral domain extensions in the fixed algebraic closure. Each generator maps to zero in this compositum, so the entire original $H_m^2(Si)$ does; normalizing preserves this vanishing. In particular this gives S1 from S0. Iterate: choose a finite normal semilocal Si+1 containing Si such that $H_m^2(Si)$ $\to $ $H_m^2(Si+1)$ is zero. Let C be the directed union of this chain. All rings lie in one algebraic closure of Frac(R), so C is a domain integral over R. Lying over makes mC proper. Finite-generator Cech complexes commute with filtered colimits, hence $H_m^0(C)=H_m^1(C)=H_m^2(C)=0$. [F1, F3, F5, step 9.1, algebra]

11.1 Fix ANY system of parameters x1,x2,x3 of R. It is a system of parameters at every maximal ideal of every Si over m. Each normal Si is S2. Its first parameter is a non-zero divisor; its quotient by that parameter has no associated primes other than height-one primes. The second parameter avoids all those primes: if a height-one prime contained both x1,x2, adjoining x3 would produce a prime of height at most two by the principal ideal theorem, whereas the full parameter ideal has height three. Thus x1,x2 is Si-regular. Filtered colimits preserve these injections, so x1,x2 is C-regular as well. [F1, F3, F5, step 10.1, algebra]

12.1 The local-cohomology long exact sequences for these two regular elements show $H_m^0(C/(x1,x2)C)=0$, using $H_m^1(C)=H_m^2(C)=0$. An element of C/(x1,x2)C killed by x3 is killed by the full parameter ideal and hence by a power of m. It must therefore be zero. Thus x3 is also regular. The parameter ideal does not generate C, since it is contained in mC. This proves directly that C is balanced big Cohen–Macaulay, including the nontriviality condition. This is a construction, not an invocation of Hochster's theorem. [F1, F3, F5, step 11.1, algebra]

13.1 Acyclicity after tensor with this carrier. For the finite free complex F in the target claim, F is split exact after localization at every nonmaximal prime. Indeed it is then an acyclic bounded complex of free modules; beginning at degree zero, split the surjections and successively contract. For a finite set of generators $a_j$ of m, the localized contracting homotopy at $a_j$ has finitely many denominators. Clearing them gives a homotopy $d h_j+h_j d=a_j^N\operatorname{id}$. Increasing N if necessary gives the same statement for all j. These identities survive tensor with ANY module. Consequently all homology of F tensor C is annihilated by a fixed power of m, even though it need not be finitely generated. [F2, F5, step 12.1, algebra]

14.1 The C-regular parameter sequence implies $\operatorname{Ext}_R^i(k,C)=0$ for $i<3$. For clarity, multiplication by each $x_i$ acts as zero on $\operatorname{Ext}_R^j(k,−)$, since $x_i$ annihilates k. The long exact sequences of 0 $\to $ $C/(x1,...,x_{(i−1)})C$ $\xrightarrow{x_i}$ $C/(x1,...,x_{(i−1)})C$ $\to $ $C/(x1,...,x_i)C$ $\to $ 0, starting with the vanishing of Hom(k,−) forced by the next regular element, prove this by induction. No finite generation of C, or assertion that the parameter Koszul complex resolves an R-module, is used. Each term $F_i$ tensor C has the same depth bound. [F2, F5, step 13.1, algebra]

15.1 Here is the length-three acyclicity argument explicitly. Write $Z_i$ and $B_i$ for cycles and boundaries. The top H3 is a submodule of a term of positive depth, yet is killed by a power of m, so H3=0. Hence B2 is isomorphic to the top term and has depth at least three. If H2 were nonzero, it would have a nonzero element killed by m. In 0 $\to $ B2 $\to $ Z2 $\to $ H2 $\to $ 0, $\operatorname{Hom}(k,B2)=\operatorname{Ext}^1(k,B2)=0$ would lift that element to Hom(k,Z2), impossible since Z2 embeds in a term of positive depth. Thus H2=0. The row 0 $\to $ B2 $\to $ F2 tensor C $\to $ B1 $\to $ 0 now gives $\operatorname{depth}(B1)\ge 2$. The identical argument using 0 $\to $ B1 $\to $ Z1 $\to $ H1 $\to $ 0 proves H1=0. Therefore F tensor C is exact in all positive degrees. [F2, F5, step 14.1, algebra]

16.1 The corrected residue-field argument, with no invalid Tor step. Choose a nonnegative free resolution V of C. Since F is bounded free, H(F tensor V)=H(F tensor C). For ANY nonnegative complex U and nonnegative flat complex V, the natural map H1(U tensor V) -> H1(H0(U) tensor V) [F2, F3, F5, step 15.1, algebra]

17.1 is onto. Its proof is the truncation sequence: the kernel of U $\to $ H0(U) has zero homology in degrees $\le 0$, and tensor with the nonnegative flat V retains that vanishing, as is seen by the first-quadrant double-complex filtration. The long exact sequence gives the claimed surjection. Apply this with $U=F$. Section 4 implies $\operatorname{Tor}_1^R(k,C)=0$ because H0(F)=k. [F2, F3, F5, step 16.1, algebra]

18.1 We record why this forces the parameter regular sequence to reflect to R, although C is infinitely generated. Let I be any m-primary ideal. Tensor a free resolution of C with R/I and then a nonnegative flat resolution of k over R/I. The same connective edge argument gives Tor_1^(R/I)(C/IC,k)=0. [F2, F3, F5, step 17.1, algebra]

19.1 Over an Artin local ring B, EVERY module M with Tor_1^B(M,k)=0 is free. Lift a basis of M/nM to get B^(basis) -> M. The cokernel equals its n multiple and vanishes by nilpotence. The Tor exact sequence makes the kernel reduction zero, and nilpotence kills the kernel too. This proves the claim for arbitrarily large bases, without finite Nakayama. Here C/IC is nonzero since mC is proper, so its freeness makes it faithful over R/I. Hence (IC :_R C)=I [F2, F3, F5, step 18.1, algebra]

20.1 for every m-primary I. For arbitrary I apply this to $I+m^n$ and use Krull intersection in the finite module R/I: (IC:C) subset $\bigcap_n$ $((I+m^n)C:C)$ = $\bigcap_n(I+m^n)$ = I. [F2, F3, F5, step 19.1, algebra]

21.1 The reverse inclusion is automatic. Now if x1,x2,x3 is C-regular, put $I=(x1,...,x_{(i−1)})$. From r xi in I one obtains xi r C subset IC, then r C subset IC by regularity on C/IC, and therefore r in I by the colon equality. Thus the parameter sequence is R-regular. We have proved $\operatorname{depth} R=3$. [F2, F3, F5, step 20.1, algebra]

22.1 Apply the section-4 acyclicity argument with $C=R$. The original positive homology vanishes, so F is a finite free resolution of k. The actual residue-field finite-projective-dimension criterion proves that R is regular. This completes D3 in positive characteristic. It uses neither an asserted Tor vanishing for a finite parameter quotient nor a small Cohen–Macaulay module. [F2, F3, F5, step 21.1, algebra]

23.1 Spreading the finite complex from characteristic zero. For the original complex local ring choose an affine integral threefold neighborhood of the closed point. Descend its finite equations, that point, the finite matrices of F, the identities $d_i$ $d_{(i+1)}=0$, and the ideal equalities coker(d1)=k, to a finitely generated characteristic-zero field k0 and then to a finite-type integral Z-algebra B. To ensure that the finite homology stays supported at the section after specialization, descend the cleared contracting homotopies $d h_j+h_j d=a_j^N\operatorname{id}$ of section 4 for generators of that section's ideal. They are FINITELY MANY MATRIX IDENTITIES. Thus every closed fibre complex still has finite-length homology, without an illicit cohomology/base-change assumption. [F1, F2, F4, F5, step 22.1, algebra]

24.1 Here are the usual spreading points made explicit. Noether normalization gives a finite map of the affine threefold to affine 3-space; its monic generator equations and finite module generators descend, as does its injective base inclusion after generic flatness. Geometric integrality can be retained after localization of B: choose a principal dense open of the generic integral variety birationally identified with an absolutely irreducible hypersurface. Its homogenized polynomial stays irreducible after removing a closed subset of the coefficient base, since the locus of homogeneous factorizations of each possible pair of degrees is the image of a projective multiplication map, and there are only finitely many such pairs. Arrange flatness of the model and of its quotient by the principal-open denominator, by inverting the finitely many leading coefficients in a Groebner presentation. Multiplication by that denominator is then injective in every remaining fibre. The principal open is integral in each fibre, and injectivity into it proves integrality of the whole fibre. This yields integral three-dimensional closed fibres, including the distinguished section. One may replace each finite residue field by its algebraic closure, a faithfully flat extension. [F1, F2, F4, F5, step 23.1, algebra]

25.1 Finally the tangent-space dimension at the section is constant after one more localization: it is the corank of the finite Jacobian matrix of the fixed equations, so invert a nonzero generic maximal-rank minor and kill the generically zero larger minors. If the original local ring were not regular, that constant tangent dimension would exceed three. Choose any remaining closed point of positive characteristic. The specialized finite free complex has length three, H0 equal to its residue field and finite-length homology, and its local ring is a three-dimensional domain. Sections 1–5 make that local ring regular, so its tangent dimension is three, a contradiction. Therefore the characteristic-zero R is regular. [F1, F2, F4, F5, step 24.1, algebra]

26.1 Once R is regular of dimension three, its depth is three. Section 4 with $C=R$ proves the original complex acyclic in positive degrees, and H0=k gives F quasi-isomorphic to k. This proves the full desired D3 claim in its original scope. [F1, F2, F4, F5, step 25.1, algebra] ∎

## Remarks

This carrier preserves the complete six-section local construction authored in `derived-mckay/d3-characteristic-p-and-spreading-construction.md`. That author read BKR Section 5, the corrected Bridgeland–Maciocia Section 4 footnote, and the complete four-page Bridgeland–Iyengar text. The assembling owner read the complete research construction and the exact local supplier Statements; this is not a claim of an additional full reading of those external papers. The former unjustified Tor assertion in Bridgeland–Maciocia is not used. Neither a named intersection theorem nor big Cohen–Macaulay existence is an imported proof premise. This source's conclusion is local regularity; it does not alone prove a global McKay equivalence or a flop factorization.
