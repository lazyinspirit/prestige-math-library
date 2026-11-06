---
id: lem-cft-principal-admissible-affine-nilcone-and-nonzero-reduction
kind: lemma
title: Actual admissible affine nilcone and nonzero principal C2-finite reduction
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
domain: mathematics
library: physics
axiom_use: ZF + AC
deps:
- def-axiom-of-choice
- def-cft-root-data-for-principal-w-levels
- def-cft-principal-admissible-level
- lem-cft-principal-level-affine-admissibility
- lem-cft-admissible-affine-rank-one-c2-symbol
- lem-cft-affine-parabolic-simple-levi-restriction
- thm-cft-principal-admissible-affine-module-classification
- lem-cft-affine-zhu-quotient-and-integrable-descent
- thm-cft-zhu-algebra-structure-and-top-action
- cor-verma-irreducibility-criterion-from-shapovalov-determinants
- thm-duflo-joseph-g-finite-endomorphisms-of-verma-modules
- lem-the-nilpotent-central-fiber-is-a-reduced-integral-domain
- thm-cartier-smoothness-for-affine-groups-in-characteristic-zero
- thm-borel-and-maximal-torus-conjugacy-over-algebraically-closed-field
- lem-cft-principal-whittaker-universal-equivalence
- lem-cft-principal-quotient-li-tail-regularity-and-strictness
dependency_roles:
  def-axiom-of-choice: mathematical-premise
  def-cft-root-data-for-principal-w-levels: mathematical-premise
  def-cft-principal-admissible-level: mathematical-premise
  lem-cft-principal-level-affine-admissibility: mathematical-premise
  lem-cft-admissible-affine-rank-one-c2-symbol: mathematical-premise
  lem-cft-affine-parabolic-simple-levi-restriction: mathematical-premise
  thm-cft-principal-admissible-affine-module-classification: mathematical-premise
  lem-cft-affine-zhu-quotient-and-integrable-descent: mathematical-premise
  thm-cft-zhu-algebra-structure-and-top-action: mathematical-premise
  cor-verma-irreducibility-criterion-from-shapovalov-determinants: mathematical-premise
  thm-duflo-joseph-g-finite-endomorphisms-of-verma-modules: mathematical-premise
  lem-the-nilpotent-central-fiber-is-a-reduced-integral-domain: mathematical-premise
  thm-cartier-smoothness-for-affine-groups-in-characteristic-zero: mathematical-premise
  thm-borel-and-maximal-torus-conjugacy-over-algebraically-closed-field: mathematical-premise
  lem-cft-principal-whittaker-universal-equivalence: mathematical-premise
  lem-cft-principal-quotient-li-tail-regularity-and-strictness: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
  - title: Tomoyuki Arakawa, Associated varieties of modules over Kac–Moody algebras
      and C2-cofiniteness of W-algebras
    url: https://arxiv.org/pdf/1004.1554
    locator: Retrieved v5, sections5.3.3–5.4; explicit rank-one, finite-flag, both-branch
      arithmetic and filtered-Zhu arguments are reconstructed locally, with actual
      quotient Li/BRST supplied separately.
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

Assume AC. Let g be finite-dimensional complex simple, with long roots normalized to squared length2 and the supplied dual-root realization where needed. Write h,hvee,r for Coxeter, dual Coxeter and lacing numbers. Let p,q be positive coprime integers, $t=k+h^{\vee}=p/q$, and impose one of the original nondegenerate tests:

    $\operatorname{gcd}(q,r)=1$, $p\ge h^{\vee}$, $q\ge h$;
    or $\operatorname{gcd}(q,r)=r$, $p\ge h$, $q\ge r$ $h^{\vee}_{\text{dual}}$.

The second branch retains its supplied dual realization and normalization. Let $V=L(k \Lambda_{0})$ be the actual supplied simple affine vacuum quotient. With $R_{V}=V/C_{2}(V)$, its reduced support $X_{V}$ is the full nilpotent cone in g*, and there is an actual surjective algebra map $R_{V}$ to C[Nilcone]. This does not assert $R_{V}$ reduced. For principal f and its compatible integral Dynkin slice $S_{f}$, the actual $H^{0}_{f}(V)$ is nonzero and C2-cofinite; the specified simple principal W quotient $W_{k}$ is C2-cofinite as well. No W rationality or generic reverse-Zhu criterion is a premise.

## Statement references

[[def-axiom-of-choice]]

[[def-cft-root-data-for-principal-w-levels]]

[[def-cft-principal-admissible-level]]

[[lem-cft-principal-level-affine-admissibility]]

[[lem-cft-admissible-affine-rank-one-c2-symbol]]

[[lem-cft-affine-parabolic-simple-levi-restriction]]

[[thm-cft-principal-admissible-affine-module-classification]]

[[lem-cft-affine-zhu-quotient-and-integrable-descent]]

[[thm-cft-zhu-algebra-structure-and-top-action]]

[[cor-verma-irreducibility-criterion-from-shapovalov-determinants]]

[[thm-duflo-joseph-g-finite-endomorphisms-of-verma-modules]]

[[lem-the-nilpotent-central-fiber-is-a-reduced-integral-domain]]

[[thm-cartier-smoothness-for-affine-groups-in-characteristic-zero]]

[[thm-borel-and-maximal-torus-conjugacy-over-algebraically-closed-field]]

[[lem-cft-principal-whittaker-universal-equivalence]]

[[lem-cft-principal-quotient-li-tail-regularity-and-strictness]]

## Facts & Assumptions

**Given:** Exactly the objects, actual quotient/singular-state inputs and root normalizations in the Statement.

[F1] [[def-cft-root-data-for-principal-w-levels]], [[def-cft-principal-admissible-level]] and [[lem-cft-principal-level-affine-admissibility]] give the exact source normalization, supplied dual branch and finite root-height bounds. All additional nondegenerate affine-label arithmetic is proved below.

[F2] [[lem-cft-affine-parabolic-simple-levi-restriction]] gives the actual simple rank-one quotient action, including its singular-state boundary in proof steps34.1–37.1. [[lem-cft-admissible-affine-rank-one-c2-symbol]] supplies the actual nonzero C2 symbol and explicit Casimir nilpotence.

[F3] [[thm-cft-principal-admissible-affine-module-classification]] supplies actual quotient modules at the full $Pr_{k}$ interface. [[cor-verma-irreducibility-criterion-from-shapovalov-determinants]] and [[thm-duflo-joseph-g-finite-endomorphisms-of-verma-modules]] give the finite Verma and its exact annihilator. [[lem-cft-affine-zhu-quotient-and-integrable-descent]] and [[thm-cft-zhu-algebra-structure-and-top-action]] give the actual affine Zhu ideal/top, not a reverse rationality result.

[F4] [[lem-the-nilpotent-central-fiber-is-a-reduced-integral-domain]] supplies the exact central-quotient associated graded and the adjoint root/torus realization. [[thm-cartier-smoothness-for-affine-groups-in-characteristic-zero]] and [[thm-borel-and-maximal-torus-conjugacy-over-algebraically-closed-field]] supply the finite algebraic-group interfaces used in the explicit stable-flag argument.

[F5] [[lem-cft-principal-whittaker-universal-equivalence]], proof step1.1, supplies the polynomial principal invariant restriction and its reduced-point nilpotent slice. [[lem-cft-principal-quotient-li-tail-regularity-and-strictness]] gives the actual quotient BRST intrinsic-Li/C2 scheme comparison; universal Kazhdan PBW alone is not substituted.

[A1] [[def-axiom-of-choice]] is inherited from the actual Duflo, nilcone and finite algebraic-group suppliers. No original geometric or level family is restricted.

## Proof

**Given:** The Facts and the exact hypotheses of the Statement. All calculations below are local algebraic proofs.

1.1 **Actual parabolic C2 edge and Cartan nilpotence.** Let $V=L(k \Lambda_{0})$. For each finite simple root i, the adopted parabolic lemma constructs an actual vertex homomorphism $L_{k_{i}}(sl2_{i})$ $\to $ $H^{0}(C_{i}(V))$, $k_{i}+2=2(k+h^{\vee})/(\alpha _{i},\alpha _{i})$. It factors through the **simple** rank-one vacuum algebra because the actual global Wakimoto differential maps its singular generator to a BRST boundary. This is precisely the earlier lemma's actual-current comparison, full-column boundary equation and vacuum-state identification. No mere universal Levi action, character equality, or top-annihilation polynomial is substituted. For any differential vertex superalgebra C with odd differential a zero-mode derivation, there is a natural algebra homomorphism $R_{H(C)}$ $\to $ $H(R_{C})$. A closed vector maps to its class modulo C2(C). Changing it by a boundary changes that class by a boundary. A C2 product of closed representatives already belongs to C2(C), so the map is well defined on C2 cohomology classes and preserves multiplication. No injectivity or surjectivity is asserted. For the actual nilradical restriction complex, C2 reduction of its charged-ghost/current PBW model gives $R_{C_{i}(V)}=R_{V}$ tensor $\Lambda (r_{i})$ tensor $\Lambda (r_{i}*)$. The BRST differential is the ordinary classical current/ghost differential. Set every ghost variable and every finite root-current variable to0, leaving the Cartan quotient $D=R_{V}/(g_{\alpha }: \alpha  finite root)$. This projection kills every BRST boundary. Indeed d of an antighost is a nilradical root current plus ghost-quadratic terms, d of a current has a ghost factor, and d of a ghost is ghost quadratic. There is no nonzero moment character in this parabolic restriction. Derivative terms are already zero in C2. Therefore the projection induces an algebra map $H(R_{C})\to D$. The corrected Levi currents reduce to the original Levi currents under this projection; their corrections contain ghost factors. The quadratic rank-one Casimir `Omega_i=h_i^2/2+2e_i f_i` consequently maps to $h_{i}^{2}/2$. The concrete rank-one proof supplies $\Omega _{i}^{N_{i}}=0$ in $R_{L_{k_{i}}(sl2_{i})}$, $N_{i}=(p_{i}-1)(q_{i}+1)/2$, where $k_{i}+2=p_{i}/q_{i}$ is reduced. Its integer exponent and nonzero singular-symbol computation were proved there, not imported as a finite computation. Composing the actual maps above gives $h_{i}^{2N_{i}}=0$ in D. Every simple coroot coordinate is therefore nilpotent in the Cartan restriction. Since these coordinates span the Cartan, its reduced support is exactly{0}. Thus $X_{V}$ intersect $h*=\{0\}$.                                (1) The rank-one C2 input is the polynomial Ore state itself, identified before specialization with the actual maximal-ideal generator. Its projection is computed on that state and the nonzero scalar survives the rational admissible specialization, including $q_{i}=1$ and $p_{i}=2$. Thus the nilpotence used above concerns the actual simple rank-one C2 algebra. [given, F1, F2, A1, construct, algebra]

2.1 **Complete finite stable-flag nilpotence argument.** The defining ideal of $R_{V}$ in S(g) is stable under the finite adjoint action: finite zero modes are derivations preserving the vacuum ideal and C2. Root derivations are locally nilpotent on S(g), so their polynomial exponentials preserve the ideal. The Cartan action preserves weight components. Therefore its reduced support $X_{V}$ is invariant under the connected adjoint algebraic group G. This uses the explicit root group/torus realization already constructed in the authenticated nilcone-domain supplier; Choice is inherited there. We prove that any closed G-invariant subset X of g satisfying X intersect $h=\{0\}$ consists entirely of nilpotents. Use the invariant form to identify g* with g. Take x in X. Choose a complete flag in the finite vector space g stable under the single complex operator ad x, by triangularizing that operator. Its stabilizer H in G is a closed subgroup of the upper-triangular matrix group in a flag-adapted basis, hence is solvable. Its Lie algebra contains ad x: the tangent condition for preservation of the flag is precisely that the infinitesimal operator preserves each flag subspace. In characteristic zero these algebraic groups are smooth, and Lie $H=Lie$ $H^{0}$. Thus x belongs to the Lie algebra of the connected solvable group $H^{0}$. Enlarge $H^{0}$ to a connected solvable closed subgroup of maximal dimension. This process terminates because dimensions are bounded; a strict containment of connected closed groups of equal dimension is impossible. It is therefore a Borel subgroup. Borel conjugacy (the established finite algebraic-group supplier, with its explicit Choice assumption) conjugates x into the standard $b=h+n+$. Write the resulting element as h0+u, with h0 in h and u in n+. Choose an integral strictly dominant cocharacter of the adjoint torus. Such a cocharacter is obtained by a positive integral multiple of $\rho^{\vee}$; its value on every positive root is positive. Its adjoint action fixes h0 and multiplies each positive root component of u by a positive power of its parameter s. Therefore $lim_{s\to 0}$ $\operatorname{Ad}(\lambda (s))(h_{0}+u)=h_{0}$. Closedness and invariance put h0 in X intersect h, so $h_{0}=0$. The element u in n+ is ad-nilpotent: adjoint brackets with u strictly increase root height in the finite root-height decomposition. Hence x is nilpotent, since conjugation preserves that property. This proves the required geometry without assuming a Jordan-decomposition orbit-closure theorem or reductivity of a semisimple centralizer. Applying it to(1) gives $X_{V}$ subset Nilcone.                                  (2) No smoothness or reducedness of $R_{V}$ was used; $X_{V}$ denotes its reduced support. [F4, step 1.1, construct, algebra]

3.1 **Exact original root bounds and dual conventions.** Normalize long roots to squared length2. Let r be the lacing number, $t=k+h^{\vee}=p/q$, with p,q positive coprime and one of the supplied nondegenerate tests. For any root alpha put $c_{\alpha }=2/(\alpha ,\alpha )$ in{1,r}, $ht(\alpha )=<\alpha ,\rho^{\vee}>$, $ht(\alpha^{\vee})=<\rho ,\alpha^{\vee}>$. Heights are signed. The vector $\rho^{\vee}$ is embedded in h* using the normalized invariant form. Thus $<\rho^{\vee},\alpha^{\vee}\ge c_{\alpha }$ ht(alpha). The following exact finite-root bounds are the ones already proved in the adopted level-admissibility arithmetic: - max positive root height is h−1; - positive long-root coroot heights are at most hvee−1; - every positive-root coroot height is at most h−1; - $h-1\le r(h^{\vee}-1)$, and $h^{\vee}\le h$. For the coprincipal branch use the supplied normalized dual realization, as the original level predicate requires. Applying the same finite root identities to the dual datum gives max positive short-root height $=$ $h^{\vee}_{\text{dual}}-1$, $h-1\le r(h^{\vee}_{\text{dual}}-1)$. The equality for the short highest root follows directly from the supplied dual normalization: the highest long dual root is $\theta_{s}^{\vee}=r$ $\theta _{s}$; its original squared length is2r, so the dual normalized form is the original form divided by r. The dual half-root sum is $\rho^{\vee}$, and the normalized dual highest-coroot pairing is therefore `(1/r)(rho-vee,r theta_s)=ht(theta_s)`. Hence $h^{\vee}_{\text{dual}}=1+ht(\theta _{s})$. Coordinate transposition in the finite classified diagrams gives the common Coxeter number h; applying the already proved short-coroot bound to that dual datum gives $h-1\le r(h^{\vee}_{\text{dual}}-1)$. These are finite-root identities for the supplied dual normalization, not a new equivalence between level predicates. Choice is inherited if the dual realization is obtained by the root supplier's Choice-based construction. [F1, step 2.1, construct, algebra]

4.1 **Both-branch nondegenerate affine label and integral-root isomorphism.** Choose a level-k affine highest weight $\lambda $ whose finite part is $\bar{\lambda}=-t$ $\rho^{\vee}$. The derivation coordinate may be chosen to match its Sugawara highest energy; it does not enter any real-root pairing. For $\beta =\alpha +n$ delta, $<\lambda +\hat{\rho},\beta -coroot>$ $=ht(\alpha^{\vee})+c_{\alpha }$ t(n−ht(alpha)).             (1) We verify the full admissibility test and finite nondegeneracy directly. **Coprime branch.** Assume $\operatorname{gcd}(q,r)=1$, $p\ge h^{\vee}$, $q\ge h$. Since $\operatorname{gcd}(p,q)=1$ and $c_{\alpha }$ is1 or r, integrality in(1) is equivalent to $n=ht(\alpha )+q$ ell,   ell integral. For alpha positive, `0<ht(alpha)<q`, so positivity of beta forces $ell\ge 0$. The pairing is `ht(alpha-coroot)+c_alpha p ell`, which is strictly positive. For alpha negative, write $\alpha =-\gamma $ with gamma positive. Then beta positive requires $n>0$, hence $ell\ge 1$, and the pairing is at least $-ht(\gamma^{\vee})+c_{\gamma }$ p. For gamma long this is at least `−(hvee−1)+p>0`. For gamma short it is at least `−(h−1)+r p>0` by $h-1\le r(h^{\vee}-1)$ and $p\ge h^{\vee}$. Thus every positive integral real root has strictly positive shifted pairing. Nonintegral pairings are irrelevant to the forbidden nonpositive-integral condition. For a finite root $n=0$, its nonzero height has absolute value less than q, so the integrality congruence is impossible. Thus every finite shifted root pairing is nonintegral. **Coprincipal branch.** Assume $\operatorname{gcd}(q,r)=r$, $p\ge h$, $q\ge r$ $h^{\vee}_{\text{dual}}$. Let the period for alpha be $q_{\alpha }=q/c_{\alpha }$. It is integral, and integrality in(1) is equivalent to `n=ht(alpha)+q_alpha ell`. For long roots, `ht(gamma)<=h−1<q`: indeed `h−1<=r(hvee_dual−1)<r hvee_dual<=q`. For short roots, `ht(gamma)<=hvee_dual−1<q/r=q_alpha`. Hence every positive root has height strictly less than its period, exactly as needed in the preceding sign argument. If alpha is positive and beta positive, $ell\ge 0$; if alpha is negative and beta positive, $ell\ge 1$. At an integral root the affine contribution in(1) is now p ell for either length. In the second case the pairing is therefore at least `p−ht(gamma-coroot)>=p−(h−1)>0`; the first case is also strictly positive. Again finite $n=0$ is never integral, because no positive root height is a multiple of its larger period. **Rational-span condition.** For every finite simple root $\alpha _{i}$, the real root $\beta _{i}=\alpha _{i}+\delta $ is integral by(1), with shifted pairing1. So is $\beta _{i}+q$ delta. Their difference q delta puts delta into their rational span, and then $\alpha _{i}=\beta _{i}-\delta $ does also. Therefore the rational span of the integral real roots is the full rational span of all real affine roots. This is precisely the corrected rational-span convention of the adopted affine theorem, not integral-lattice equality. Both branches prove that $\lambda $ is admissible, and no finite-root shifted pairing is integral. Thus it is an explicit nondegenerate admissible weight. No existence theorem about a minimal-series list has been invoked. The exact root-system isomorphism required by the affine classification also holds: the coweight translation alpha+n delta maps to alpha+(n-ht(alpha))delta. It preserves real-root lengths and the affine reflection/root-string relations, since ht is linear in alpha and delta is the radical direction of the affine form. It sends the integral congruences just computed to the vacuum periods: q for every root in the coprime branch and $q/c_{\alpha }$ in the coprincipal branch. Thus the integral real-root system of $\lambda $ is isomorphic to that of k Lambda0, not merely of full rational span. This proves $\lambda $ belongs to the actual $Pr_{k}$ interface. [F1, F3, step 3.1, construct, algebra]

5.1 **Actual finite Verma quotient module and annihilator ideal.** The adopted affine classification makes $L(\lambda )$ an actual module for $V=L(k \Lambda_{0})$. Since its finite shifted root pairings are all nonintegral, `cor-verma-irreducibility-criterion-from-shapovalov-determinants` makes its horizontal finite highest module $M_{g}(\bar{\lambda})$ simple. That module is precisely the current grade-zero top of $L(\lambda )$, by highest-weight PBW and simplicity. It is consequently an actual A(V)-module under the proved top action. Write `A(V)=U(g)/J` using the already adopted affine Zhu identification. Then J annihilates $M_{g}(\bar{\lambda})$. The authenticated published Duflo–Joseph supplier gives its exact annihilator, so J subset U(g) ker $\gamma _{\bar{\lambda}}$.                    (2) Choice is inherited from the finite mathematical suppliers. This is an actual ideal containment, not a pointwise statement about its scalar zero modes on one vector. The classification use is its actual quotient-module if direction, joined through nonintegral inverse galleries and length-zero current transports; the arithmetic calculation of step 4.1 supplies its full admissible label, not a substitute scalar null character. In particular all modes of the vacuum ideal annihilate this $L(\lambda )$. [F3, step 4.1, construct, algebra]

6.1 **Actual filtered Zhu map and reverse nilcone inclusion.** For a nonnegative integer-conformal vertex algebra, filter its Zhu algebra by state weights. Sending a homogeneous state a of weight d to the degree-d symbol of its Zhu class gives a surjective graded algebra map $R_{V}=V/C_{2}(V)$ $\to gr$ A(V).                                (3) Here is the required proof. The circle relation for homogeneous a,b starts with `a_(−2)b`, of weight wt(a)+wt(b)+1, and every other summand has smaller weight; its leading symbol therefore kills every C2 generator. The star product starts with `a_(−1)b`, while its other summands have smaller weight, so multiplication descends. Every filtered Zhu class has a representative of the corresponding weight, proving surjectivity. This argument needs no reverse-Zhu or module semisimplicity theorem. For the affine V at hand the state-weight filtration on $A(V)=U/J$ is exactly the quotient PBW filtration. The universal current classes have weight1 and generate its Zhu algebra. The affine circle identities reduce x(−n), $n\ge 2$, to lower-mode classes, and the star identity reduces a (−1) current word to its enveloping product with lower-length corrections. Thus every weight-d state has PBW image of degree at most d. Conversely a PBW product of at most d current classes is represented by iterated star products of states of total weight at most d. Both filtered inclusions follow; they remain exact after quotienting by the actual vacuum ideal. Containment(2) gives a strict quotient map U/J $\to $ U/U ker $\gamma _{\bar{\lambda}}$ with these quotient PBW filtrations. Its associated graded is surjective. The authenticated nilcone-domain supplier identifies the target associated graded with C[Nilcone]. Composing with(3) gives an actual surjection $R_{V}$ $\to $ C[Nilcone].                                   (4) Therefore the entire nilpotent cone, including the principal nilpotent f, is a closed reduced subscheme of Spec $R_{V}$. In particular `f in X_V`. This conclusion is stronger than merely finding a nonzero central character, and it does not require the VOA W Zhu/finite-reduction comparison. [F3, F4, step 5.1, construct, algebra]

7.1 **Actual nonzero and C2 finite principal reduction.** The preceding arguments give equality of reduced supports $X_{V}=\operatorname{Nilcone}$ and the actual surjection $R_{V}$ to C[Nilcone], without asserting $R_{V}$ reduced. The principal invariant restriction constructed in the Whittaker supplier's proof step1.1 is a polynomial isomorphism from invariant coordinates to the coordinates on $S_{f}$; hence Nilcone intersect $S_{f}$ is the reduced point {f}, scheme-theoretically. Apply the actual quotient Li/BRST supplier to $H=H^{0}_{f}(V)$: $R_{H}=(R_{V}/\text{moment} \text{constraints})^{n}$ is the coordinate algebra of the actual scheme $\operatorname{Spec}(R_{V})$ intersect $S_{f}$. Its support is exactly {f} and it is nonzero, since f lies in $\operatorname{Spec}(R_{V})$. This coordinate algebra is a quotient of the finite polynomial ring $O(S_{f})$. For each affine coordinate centered at f a positive power lies in its defining ideal; the monomials below these finitely many exponent bounds span the quotient. Thus $R_{H}$ is finite-dimensional and H is nonzero and C2-cofinite. The strict vertex quotient $W^{k}$ to H has the specified simple $W_{k}$ as a quotient: its proper graded kernel is contained in the unique maximal proper graded ideal. A vertex quotient induces a surjection of C2 algebras, by lifting both states in every C2 product. Therefore $W_{k}$ is C2-cofinite as well. No prior simplicity of H or W rationality has been assumed. [F2, F4, F5, step 6.1, construct, algebra] ∎

## Remarks

Both original nondegenerate branches and their supplied dual normalization are retained. The affine support equality is only reduced support, while the quotient BRST result retains its actual scheme and nilpotent thickening. These are proof-bearing local prerequisites for the full W assembly, not an assertion of W rationality or independent acceptance.
