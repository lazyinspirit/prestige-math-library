---
id: thm-burgess-character-sum-bound-cube-free-moduli
kind: theorem
title: "Burgess character-sum bound for cube-free moduli"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 1
deps: [def-dirichlet-character-modulo-q, thm-full-riemann-roch-divisor, thm-finiteness-of-degree-zero-divisor-class-group-over-finite-field, lem-finitely-many-closed-points-of-bounded-degree, thm-principal-divisor-degree-zero-proper-curve, thm-global-functions-proper-integral-variety, thm-hodge-index-theorem-for-smooth-projective-surfaces, thm-intersection-with-curve-as-degree-of-restriction, thm-surface-intersection-product-bilinear-and-symmetric, lem-degree-pullback-divisor-finite-morphism-curves, lem-global-section-effective-divisor, thm-line-bundle-rational-section-cartier-divisor, thm-conormal-sequence-closed-immersion, thm-jacobian-criterion-smooth-morphism, lem-smooth-finite-line-curves-over-finite-fields-have-smooth-completions, thm-polya-vinogradov-partial-sum-bound, thm-chinese-remainder-theorem, thm-holder-finite-real-exponents, thm-induction-principle, thm-constructible-inner-model-semantic-and-formal-schema, prop-constructible-levels-transitivity-ordinals-and-rank, thm-delta-zero-absoluteness-for-transitive-sets]
justified_by: []
proof_strategy: direct
axiom_use: "Work in ZF; choice-dependent geometric inputs are used only inside L, and the finite-data conclusion is transferred by arithmetic absoluteness."
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  scraped: []
  references:
    - title: "Marios Voskou, Burgess bounds: Character Sums and Dirichlet L-functions, UCL lecture slides (January 27, 2021)"
      url: "https://www.homepages.ucl.ac.uk/~ucahpet/Burgess.pdf"
      locator: "Theorem 2, slide 6; composite Lemma 1.2, slides 14–16; prime-modulus estimates and final optimization outline, slides 17–34."
---

## Statement

Let q be a positive cube-free integer, χ a nonprincipal Dirichlet character modulo q, N an integer, and H≥1 an integer. For every ε>0 and integer r≥1, |Σ_{N<n≤N+H}χ(n)|≪_{ε,r}H^{1−1/r}q^{(r+1)/(4r²)+ε}.

## Statement references

[Marios Voskou, Burgess bounds: Character Sums and Dirichlet L-functions, UCL lecture slides (January 27, 2021), Theorem 2, slide 6; composite Lemma 1.2, slides 14–16; prime-modulus estimates and final optimization outline, slides 17–34.](https://www.homepages.ucl.ac.uk/~ucahpet/Burgess.pdf)

## Facts & Assumptions

**Given:** The complete objects and hypotheses in the Statement. Work in ZF; $L$ denotes the constructible universe.

[F1] [[def-dirichlet-character-modulo-q]] defines characters as unit-group homomorphisms extended by zero.

[F2] Inside $L$, [[thm-full-riemann-roch-divisor]] gives Riemann–Roch; [[thm-finiteness-of-degree-zero-divisor-class-group-over-finite-field]], [[lem-finitely-many-closed-points-of-bounded-degree]], [[thm-principal-divisor-degree-zero-proper-curve]], and [[thm-global-functions-proper-integral-variety]] supply the finite divisor-count inputs. These are used with their AC assumptions inside $L$.

[F3] Inside $L$, [[thm-hodge-index-theorem-for-smooth-projective-surfaces]] gives negativity for classes orthogonal to a positive-square class. [[thm-intersection-with-curve-as-degree-of-restriction]], [[thm-surface-intersection-product-bilinear-and-symmetric]], and [[lem-degree-pullback-divisor-finite-morphism-curves]] supply the intersection and degree formulas, with their AC assumptions inside $L$.

[F4] [[lem-global-section-effective-divisor]], [[thm-line-bundle-rational-section-cartier-divisor]], [[thm-conormal-sequence-closed-immersion]], and [[thm-jacobian-criterion-smooth-morphism]] provide section, conormal and smooth local inputs; the specific graph and local calculations are carried out below inside $L$.

[F5] [[lem-smooth-finite-line-curves-over-finite-fields-have-smooth-completions]] supplies a smooth projective completion of the finite étale Kummer curve, with its explicit AC assumption used inside $L$.

[F6] [[thm-polya-vinogradov-partial-sum-bound]] gives the primitive-character interval bound $O(\sqrt m\log m)$.

[F7] [[thm-chinese-remainder-theorem]] gives finite product decompositions for coprime moduli.

[F8] [[thm-holder-finite-real-exponents]] gives finite Hölder and Cauchy–Schwarz; [[thm-induction-principle]] gives strong induction by applying ordinary induction to all smaller lengths.

[F9] [[thm-constructible-inner-model-semantic-and-formal-schema]] and [[prop-constructible-levels-transitivity-ordinals-and-rank]] give the fixed-axiom ZFC relativization and common ordinals for $L$; [[thm-delta-zero-absoluteness-for-transitive-sets]] supplies formula-by-formula bounded absoluteness. No ambient AC or class truth predicate is assumed.

## Proof

**Proof technique:** work in $L$ for the geometric and character-sum argument, then transfer the exact finite-data inequality to ambient ZF.

1.1 By [F9], the constructible universe is transitive, has the actual natural numbers, and satisfies each fixed ZFC axiom. Perform steps 2.1–20.1 inside $L$, where AC holds; all geometric objects, real numbers and choices in those steps are internal to $L$. The finite-data result is transferred to ambient ZF in the final steps. [F9, given]

2.1 Put N_n=#C(F_{q^n}). Let A_n be the number of effective divisors of degree n, with A_0=1. There are finitely many: a degree-n effective divisor can involve only closed points of degree at most n, of which there are finitely many, and its multiplicities are bounded. Expansion of the Euler product gives Z(C,T)=Σ_{n≥0} A_n T^n. Indeed, a closed point x of degree e contributes e geometric points to C(F_{q^n}) if e|n and none otherwise, since its residue field is F_{q^e}; hence its contribution to log Z is Σ_{m≥1}T^{em}/m=−log(1−T^e). Unique decomposition of effective divisors then gives the product ∏_x(1−T^{deg x})^{-1}, coefficientwise finite. [F2, F2, F3, F3, F3, F4, F4, F9, algebra, step 1.1]

3.1 Put h=|Cl⁰(C)|. For every integer n, addition of n[P] bijects Cl⁰(C) with the degree-n divisor classes. Each such class has a divisor D defined over F_q. Its effective representatives are exactly D+div(f) for nonzero f∈L(D), modulo multiplication by F_q^×. Thus their number is (q^{ℓ(D)}−1)/(q−1). If deg D=n>2g−2, Riemann–Roch and the negative degree of K−D give ℓ(D)=n+1−g: a nonzero section would make an effective divisor of negative degree, impossible. Consequently, for every n≥2g−1 with n≥0, [F2, F2, F3, F3, F3, F4, F4, F9, step 2.1, algebra]
A_n=h(q^{n+1−g}−1)/(q−1). [F2, F2, F3, F3, F3, F4, F4, F9, step 2.1, algebra]

4.1 Let P_C(T)=(1−T)(1−qT)Σ_n A_nT^n. Its coefficients are integers. If g≥1, step 3.1 makes A_n a fixed linear combination of q^n and 1 for all n≥2g−1. Hence A_n−(q+1)A_{n−1}+qA_{n−2}=0 for n≥2g+1, so P_C is a polynomial of degree at most 2g. Its constant coefficient is A_0=1. If g=0, step 3.1 applies for all n≥0 and A_0=1 implies h=1. Then Σ_n A_nT^n=1/((1−T)(1−qT)), so P_C=1. This proves rationality and the stated degree bound. [F2, F2, F3, F3, F3, F4, F4, F9, step 3.1, algebra]

5.1 Let k be an algebraically closed field of characteristic p>0; let C/k be a smooth projective integral curve of genus g defined over F_q⊂k, and let F be the k-base-change of the q^n-power Frobenius over F_q. Set Q=q^n, X=C×C, choose P∈C(k), H=C×{P}, V={P}×C, Δ=graph(id_C), Γ=graph(F). Every displayed curve is a smooth effective Cartier divisor on X: each graph is a section of the first projection between smooth schemes of relative dimension one, hence a regular codimension-one closed immersion. Products of smooth projective geometrically integral curves are smooth projective integral surfaces. The existing `thm-intersection-with-curve-as-degree-of-restriction` (AC) computes intersection of two such effective divisors as the degree of the corresponding restricted line bundle. [F2, F2, F3, F3, F3, F4, F4, F9, step 4.1, algebra]
The line bundles of H and V are pr₂*O_C(P) and pr₁*O_C(P), respectively. Restriction to H and V gives H²=V²=0 and H·V=1 directly: the constant map pulls O_C(P) back to a trivial line bundle, whereas the identity pulls it back to degree one. Restriction to Δ is via id on both factors, so Δ·H=Δ·V=1. Restriction to Γ uses pr₁|Γ=id and pr₂|Γ=F, hence Γ·V=1 and Γ·H=deg F^*O_C(P)=Q using `lem-degree-pullback-divisor-finite-morphism-curves`. The only fact to show is deg F=Q: over k the Q-power map is a universal homeomorphism, and for a point x with F(x)=P its completed local-ring map sends a target uniformizer t to a unit times s^Q for a source uniformizer s. Indeed relative Frobenius fixes constants and raises local coordinates from the F_q model to Q-th powers; perfectness of k permits Q-th roots of coefficients. The inverse image is one geometric point and has local scheme length Q. The nonconstant proper curve morphism is finite flat by the named degree-pullback supplier, so that fibre length is its degree. This argument also covers inseparable F; it does not identify the relative Frobenius with a k-linear absolute Frobenius.
For any k-morphism f:C→C let i_f:C→X be its graph and I its ideal. Locally choose a source coordinate u and target coordinate v; the graph is defined by v−f^*v. The pullback of I/I² is the line generated by this equation modulo its square. Under change of target coordinate, the generator transforms by the derivative of the coordinate change evaluated on f, so I/I²≅f^*Ω¹_C. Equivalently, conormal exactness for the section of pr₁ gives this isomorphism. Consequently the normal line is N_{Γ_f/X}≅f^*T_C. For a Cartier divisor, O_X(Γ_f)|_{Γ_f}≅(I/I²)^∨, so `thm-intersection-with-curve-as-degree-of-restriction` gives Γ_f²=deg f^*T_C. Thus Δ²=2−2g and Γ²=Q(2−2g), using deg K_C=2g−2 from Riemann–Roch at 0 and K_C, and pullback degree from the named supplier.
Finally Γ∩Δ is the fixed-point scheme of F. Its geometric points are exactly C(F_Q), finite because C is finite type over F_Q. At any such point the pullback of a local diagonal equation is F^*t−t in the local DVR O_{C,P}. The differential of relative Frobenius is zero for Q>1, so the coefficient of t is −1; this element is a uniformizer and its local quotient has length one. The canonical section of O_X(Δ)|Γ has this zero scheme. Degree of its zero divisor is therefore #C(F_Q), so restriction-to-curve intersection yields Γ·Δ=#C(F_Q). No topological or smooth-manifold fixed-point theorem is used. [F2, F2, F3, F3, F3, F4, F4, F9, step 4.1, algebra]

6.1 Define D=Δ−H−V and E=Γ−H−QV in the group of divisor classes. Step 5.1 gives D·(H+V)=E·(H+V)=0 and yields [F2, F2, F3, F3, F3, F4, F4, F9, step 5.1, algebra]
D²=−2g,   E²=−2gQ,   D·E=#C(F_Q)−Q−1.                           (4)
The class H+V has positive self-intersection 2. By the published arbitrary-field Hodge index theorem, every integral divisor class L orthogonal to H+V has L²≤0. Applying this to aD+bE for every pair of integers a,b gives a negative-semidefinite quadratic form; taking rational ratios and using density gives the Cauchy inequality
(D·E)²≤D²E²=4g²Q.
For g=0 this says D·E=0 as well: a negative-semidefinite quadratic form with zero diagonal term has zero cross term. Substitute (4) to obtain |#C(F_Q)−Q−1|≤2g√Q. This use of Hodge index needs only integer tensor powers and its stated AC hypothesis; no real-coefficient version is assumed. [F2, F2, F3, F3, F3, F4, F4, F9, step 5.1, algebra]

7.1 Step 4.1 gives P_C(0)=1 and factors P_C(T)=∏_{i=1}^m(1−α_iT), m≤2g. Taking formal logarithms in Z=P_C/((1−T)(1−qT)) gives [F2, F2, F3, F3, F3, F4, F4, F9, step 6.1, algebra]
N_n=q^n+1−Σ_i α_i^n.                                                (5)
By step 6.1, |Σ_i α_i^n|≤2g q^{n/2} for every n≥1. Hence the power series Σ_{n≥1}(Σ_i α_i^n)T^n converges absolutely for |T|<q^{−1/2}. Formally, and therefore analytically near zero,
Σ_{n≥1}(Σ_i α_i^n)T^n=−T P_C'(T)/P_C(T).
The left side extends holomorphically throughout |T|<q^{−1/2}. If P_C had a zero there, its logarithmic derivative would have a pole, contradicting equality by analytic continuation. Thus |α_i|≤√q for every i, including multiplicities. For g=0, rationality gives P_C=1 and the conclusion is empty. [F2, F2, F3, F3, F3, F4, F4, F9, step 6.1, algebra]

8.1 Let k=F_p, d|p−1, and f(x)=∏(x−c_i)^{a_i} with distinct c_i∈k and 1≤a_i<d. Suppose a_1=1. Put U'=A¹_k\{c_2,…,c_t} and [F4, F5, F9, step 7.1, algebra]
B=k[x,1/∏_{i≥2}(x−c_i),y]/(y^d−f(x)).
Geometric irreducibility follows as follows. Over $K=\overline{k}(x)$, if $\alpha^d=f$ and $m=[K(\alpha):K]$, the extension is Galois because $K$ contains the $d$th roots of unity; its conjugates are $\zeta\alpha$. The valuation at $x=c_1$ gives $v(\alpha)=1/d$, so the norm has valuation $m/d$, an integer. Thus $d\mid m$, and the degree-$d$ equation gives $m=d$. Hence $Y^d-f$ is geometrically irreducible and $B$ is a geometrically integral domain. B is finite over the coordinate ring of U', because the equation is monic in y. The affine curve W=Spec B is smooth everywhere: if y≠0, ∂(y^d−f)/∂y=d y^{d−1} is nonzero; if y=0, then x=c_1 since the other c_i are excluded, and ∂(y^d−f)/∂x=−f'(c_1)≠0. Thus W is regular and normal. The point (x,y)=(c_1,0) is a k-rational smooth point; its fibre over c_1 has exactly this closed point (though the scheme fibre has nilpotents).
The normal completion X in [F5] is obtained by normalizing P¹ in the function field E=k(x,y). Its restriction over U' is the integral closure A' of k[U'] in E. Since B is finite over k[U'], B⊂A'; conversely, any element of E integral over k[U'] is also integral over B, hence lies in B because B is integrally closed. Thus A'=B and W is literally the inverse image of U' in X. The displayed rational point is therefore a point of X, not merely a point of an unrelated birational plane model. The later character-sum calculation allows replacing χ by its conjugate and all exponents by their negatives modulo d, so a singleton exponent d−1 may be made 1 without changing any nonzero character values; zeros at discarded roots are handled separately there. All these constructions occur inside $L$, so the completion lemma's AC hypothesis holds there. [F4, F5, F9, step 7.1, algebra]

9.1 It suffices to establish the following singleton-root estimate using the curve bound and rational-point construction. Suppose temporarily that every multiplicative character χ of F_p of exact order d satisfies [F1, F5, step 7.1, step 8.1, algebra]
|Σ_{x∈F_p} χ(f(x))| ≤ (t−1)√p,
with χ(0)=0. Consequently, for r≥2, a list b₁,…,b_{2r} containing a singleton satisfies the exact W bound in the frozen conditional Burgess reduction with C_r=2r−1. At p=2 no nontrivial character exists. For p odd, combine repeated shifts, replacing each exponent by its residue modulo d. A singleton contributes exponent 1 or d−1, so at least one exponent is nonzero and coprime to d; after discarding zero residues the resulting f has t≤2r distinct roots and fits the input. At a root discarded after reduction, the original product is zero even though χ(f) need not vanish. Let E denote these discarded roots. Thus, assuming that bound, the original sum differs from the f-sum by at most |E|, while t+|E|≤2r. We obtain
|original sum| ≤ (t−1)√p+|E| ≤ (2r−1)√p.
This bookkeeping is essential: cancelling a zero exponent must not turn original zero summands into nonzero ones. [F1, F5, step 7.1, step 8.1, algebra]

10.1 To prove step 9.1, let C be the smooth projective completion from step 8.1, and let V be its open subset defined by Y^d=f(X) and f(X)≠0. For every n≥1 write F_{p^n}=k_n, Norm_n:k_n^×→F_p^×, and χ_n=χ∘Norm_n extended by zero. For j=1,…,d−1 set [F1, F5, step 7.1, step 8.1, step 9.1, algebra]
S_n(j)=Σ_{x∈k_n} χ_n(f(x))^j,
L_j(T)=exp(Σ_{n≥1} S_n(j)T^n/n).
These are formal power series over C; no analytic convergence is needed. Because Norm_n is surjective, χ_n has exact order d. For each x with f(x)≠0, finite character orthogonality in k_n^× gives exactly Σ_{j=0}^{d−1}χ_n(f(x))^j solutions of Y^d=f(x). Hence, writing U=A¹\{c₁,…,c_t} and using the defining point-count series for zeta functions,
ζ(V,T)=ζ(U,T)∏_{j=1}^{d−1} L_j(T),
ζ(U,T)=(1−T)^t/(1−pT).                                            (1)
Let the closed points of C\V have degrees e₁,…,e_s. The finite point-count contribution of a degree-e point is e in extension degrees divisible by e and 0 otherwise. Exponentiation therefore gives
ζ(V,T)=ζ(C,T)∏_{h=1}^s(1−T^{e_h}).                                  (2)
We now prove that each L_j is a polynomial of degree at most t−1. Its Euler product over monic irreducible polynomials P(X) coprime to g(X)=∏(X−c_i) is
L_j(T)=∏_{P∤g}(1−χ^{j}(Norm_{F_p[X]/P / F_p}(f(X)))T^{deg P})^{−1}.
This follows by grouping each x∈k_n by its irreducible polynomial of degree e|n: its conjugacy class contributes e terms, each norm to F_p being the n/e-th power of its norm from F_{p^e}; then expand −log(1−z)=Σ_{m≥1}z^m/m. For a monic P of degree e, Norm(X−c_i)=(-1)^e P(c_i), and multiplicativity extends the Euler product to all monic F of degree m. Its coefficient is therefore
χ^j((-1)^{mΣ_i a_i}) Σ_{F monic, deg F=m} ∏_{i=1}^t χ^j(F(c_i))^{a_i},
where characters at zero are zero. When m≥t, the evaluation map from monic degree-m F to (F(c₁),…,F(c_t))∈F_p^t is surjective with exactly p^{m−t} preimages: subtract X^m and use the invertible Vandermonde matrix on the coefficients of 1,X,…,X^{t−1}; remaining m−t coefficients are free. Because some a_i is coprime to d and 1≤j<d, χ^{j a_i} is nontrivial. Its sum over F_p is zero by multiplication by a unit on which it is nontrivial. The evaluation sum therefore vanishes. Thus L_j∈C[T], L_j(0)=1 and deg L_j≤t−1.
Combining (1)–(2) with the displayed zeta expression gives the polynomial identity
(1−T)^{t+1} ∏_{j=1}^{d−1}L_j(T)=P_C(T)∏_{h=1}^s(1−T^{e_h}).  (3)
Every zero of each L_j is a zero of the right side of (3), so it is either a zero of P_C or a root of unity. By the root bound proved in step 7.1, each reciprocal root of L_j has modulus at most √p. Factor L_1(T)=∏_{i=1}^m(1−α_iT), m≤t−1. Comparing the coefficient of T in its formal logarithm with the defining series gives S_1(1)=−Σ_i α_i, so |S_1(1)|≤(t−1)√p, as claimed. [F1, F5, step 7.1, step 8.1, step 9.1, algebra]

11.1 Inside $L$, fix $r\ge2$ and $\varepsilon>0$. For each fixed $D\ge1$ and $\eta>0$, $D^{\omega(m)}\tau(m)^D\ll_{D,\eta}m^\eta$ for cube-free $m$. Indeed each prime contributes at most $D3^D$ to the left side, so primes exceeding $(D3^D)^{1/\eta}$ are absorbed by $p^\eta$ and the finitely many smaller primes contribute a fixed constant. The same argument gives $m/\varphi(m)=\prod_{p\mid m}(1-1/p)^{-1}\ll_\eta m^\eta$. Thus, for $U\ge1$, inclusion-exclusion gives $\#\{a\le U:(a,m)=1\}=U\varphi(m)/m+O(2^{\omega(m)})$. In particular, for fixed $\kappa>0$, $U\ge m^\kappa$ implies this count is $\gg_{\eta,\kappa}Um^{-\eta}$, after increasing constants to cover bounded $m$: use the preceding estimates first with exponents smaller than both $\eta$ and $\kappa/3$. [given, algebra, step 10.1]

12.1 First suppose $\chi$ is primitive modulo cube-free $m$. The Chinese remainder isomorphism decomposes its unit-group homomorphism into characters $\chi_{p^e}$ for $p^e\Vert m$. Each component is primitive: descent of one component would descend the product to a proper divisor. In particular the components for $e=1$ are nontrivial. For $e=2$, the restriction to $1+p\mathbb Z/p^2\mathbb Z$ is $\chi_{p^2}(1+pt)=e^{2\pi i ct/p}$ for some $c\not\equiv0\pmod p$: the map $t\mapsto1+pt$ is an isomorphism from the additive group of $\mathbb F_p$, and $c=0$ would give descent modulo $p$. This includes $p=2$. [F1, F7, algebra, step 11.1]

13.1 Fix integers $b_1,\ldots,b_{2r}$, and an index $i$ for which $b_i$ differs as an integer from every other entry. Put $A_i=\prod_{j\ne i}(b_i-b_j)\ne0$. If $p\nmid A_i$, the root $-b_i$ is a singleton modulo $p$. For $e=1$, [step 10.1] bounds the local complete sum by $C_r\sqrt p$. For $e=2$, group the summation variable as $x=x_0+pt$. Terms with any $x_0+b_j=0$ modulo $p$ vanish. Otherwise write $R(X)=\prod_{j\le r}(X+b_j)/\prod_{j>r}(X+b_j)$ and $L(X)=R'(X)/R(X)=\sum_{j\le r}(X+b_j)^{-1}-\sum_{j>r}(X+b_j)^{-1}$. Expansion modulo $p^2$ gives $R(x_0+pt)=R(x_0)(1+ptL(x_0))$. By step 12.1 the inner $t$ sum vanishes unless $L(x_0)=0$ modulo $p$, when its magnitude is $p$. Clearing the distinct linear denominators makes its numerator a polynomial of degree at most $2r-1$, which is nonzero: its residue at the singleton pole $-b_i$ has coefficient $+1$ or $-1$, nonzero also in characteristic two. There are at most $2r-1$ surviving $x_0$, so the local sum is at most $(2r-1)p$. [F9, step 12.1, algebra]

14.1 Write $m=Q_1Q_2^2$ with $Q_1,Q_2$ coprime square-free. At primes dividing $A_i$ use the trivial bound $p^e$. CRT factors the complete sum, so step 13.1 gives [step 13.1, algebra]
$$\left|\sum_{x\bmod m}\prod_{j\le r}\chi(x+b_j)\prod_{j>r}\overline{\chi(x+b_j)}\right|\le D_r^{\omega(m)}\sqrt m\,w(A_i),\qquad w(t)=(Q_1,t)^{1/2}(Q_2,t),$$
where gcd means positive gcd. The rational notation in step 13.1 was used only at units; all vanished terms remain zero. [F7, step 13.1, algebra]

15.1 For any integer $B\ge1$, expand $M(B)=\sum_{x\bmod m}|\sum_{b=1}^B\chi(x+b)|^{2r}$. Lists with at most $r$ distinct integer entries number at most $(2r)^{2r}B^r$ and contribute at most that number times $m$. Every other list has an integer singleton; assign it to the least singleton index $i$. For fixed $b_i$, $w(A_i)\le\prod_{j\ne i}w(b_i-b_j)$, by comparing the valuations at each prime (each is capped at one before applying its fixed weight). Moreover $w(t)\le\sum_{d\mid\operatorname{rad}(m),\ d\mid t}d$ for nonzero $t$. Since $0<|b_i-b|<B$, only $d<B$ occur, and there are at most $2B/d$ choices of $b\ne b_i$ with $d\mid b_i-b$. Hence $\sum_{1\le b\le B,\ b\ne b_i}w(b_i-b)\le2B\tau(\operatorname{rad}(m))$. Drop the remaining restrictions on the other entries, sum independently, and apply steps 11.1 and 14.1. For every $\eta>0$ this proves [step 14.1, algebra]
$$M(B)\ll_{r,\eta}mB^r+m^{1/2+\eta}B^{2r}.$$
This includes $B=1$, whose off-diagonal singleton sums are empty. [step 11.1, step 14.1, algebra]

16.1 Let $1\le A\le H$ and $2AH<m$. For each residue $x$, let $\nu(x)$ count pairs $(a,n)$ with $1\le a\le A$, $(a,m)=1$, $N<n\le N+H$, and $n\equiv ax\pmod m$. Set $U=\#\{a\le A:(a,m)=1\}$. Then $\sum_x\nu(x)=UH$, and [step 15.1, algebra]
$$\sum_x\nu(x)^2\ll AH\log(2A).$$
Indeed a collision has $a_1=du$, $a_2=dv$, $(u,v)=1$. Since $d$ is a unit modulo $m$, its congruence is $vn_1-un_2\equiv0\pmod m$. As $n_1,n_2$ range over the same length-$H$ interval, this expression lies in a real interval of length at most $H(u+v)<m$, hence has at most one possible multiple $km$. Solutions of $vn_1-un_2=km$ form a single affine progression with difference $(u,v)$, and their number is at most $H/\max(u,v)+1$. For fixed $d$, sum over $u,v\le A/d$, grouping by $t=\max(u,v)$ and bounding their number by $2t$; the result is $O(HA/d+(A/d)^2)$. Summing $d\le A$ gives $O(AH\log(2A)+A^2)$, and $A\le H$ absorbs the second term. This works for every integer $N$, without reducing its magnitude. [F1, algebra]

17.1 Put $\theta=1-1/r$, $\alpha=(r+1)/(4r^2)$ and fix a sufficiently small constant $c=c_r>0$, with $2c<1$ and $2c^\theta<1/2$. Induct on the positive integer $H$ for the assertion $|S(N,H)|\le K H^\theta m^{\alpha+\varepsilon}$ uniformly in $N$. If $H\le m^{(r+1)/(4r)}$, the trivial bound proves it with $K\ge1$. If $H>m^{1/2+1/(4r)}$, [F6] proves it after increasing $K$: at that endpoint $H^\theta m^\alpha=m^{1/2}$, and $\log m\ll_\varepsilon m^\varepsilon$. Period sums vanish since multiplication by a unit with nontrivial character preserves a complete sum and multiplies it by a value different from one. Bounded $m$ cause no exception: periodicity bounds every interval sum by $m$, uniformly in $H$. [F1, F6, F8, algebra, algebra, step 16.1]

18.1 In the remaining range take $B=\lceil m^{1/(2r)}\rceil$, $A=\lfloor cH/B\rfloor$. For all sufficiently large $m$ these are positive, $A\asymp_r H/B\le H$, $AB\le cH<H$, and $2AH\le2cH^2/B\le2cm<m$. Also $A\gg_r m^{(r-1)/(4r)}$, so step 11.1, with $\kappa=(r-1)/(8r)$, gives $U\gg_{r,\eta}Am^{-\eta}$ for every $\eta>0$. Shifting the interval by $ab$ removes and adds intervals of length $ab<H$. The induction hypothesis bounds the difference between $S(N,H)$ and $S(N+ab,H)$ by $2K(cH)^\theta m^{\alpha+\varepsilon}$. Average over $a\le A$ coprime to $m$ and $b\le B$. Since $\chi(n+ab)=\chi(a)\chi(a^{-1}n+b)$, the average of the absolute main expression is at most [step 17.1, algebra]
$$\frac1{UB}\sum_{x\bmod m}\nu(x)\left|\sum_{b=1}^B\chi(x+b)\right|.$$
[F1, step 11.1, step 17.1, algebra, algebra]

19.1 Hölder, first separating $\nu^{1-1/r}$ and then applying Cauchy to the remaining factor, bounds the numerator in step 18.1 by [step 18.1, algebra]
$$(UH)^{1-1/r}\left(\sum_x\nu(x)^2\right)^{1/(2r)}M(B)^{1/(2r)}.$$
Steps 15.1 and 16.1, $B\asymp m^{1/(2r)}$, $A\asymp_r H/B$, the lower bound for $U$, and $\log m\ll_\eta m^\eta$ therefore bound the main average by
$$\ll_{r,\eta}H^{1-1/(2r)}A^{-1/(2r)}B^{-1}m^{O_r(\eta)}(mB^r+m^{1/2}B^{2r})^{1/(2r)}\ll_{r,\eta}H^\theta m^{\alpha+O_r(\eta)}.$$
Here both moment terms are $\asymp_r m^{3/2}$, and the final exponent is $3/(4r)-(1-1/(2r))/(2r)=\alpha$. Choose $\eta>0$ small enough that $O_r(\eta)\le\varepsilon$, and then $K$ at least twice the resulting main-term constant. The error in step 18.1 is at most $K H^\theta m^{\alpha+\varepsilon}/2$, so the induction closes. [F8, step 15.1, step 16.1, step 18.1, algebra, algebra]

20.1 Finally let $\chi$ be arbitrary nonprincipal modulo cube-free $q$. CRT decomposes its unit character into prime-power components. For each component choose the least exponent through which it factors; their product $f\mid q$ is cube-free and the resulting character $\chi^*$ modulo $f$ is primitive by construction. It is nonprincipal, since otherwise $\chi$ would be principal on all units modulo $q$. Let $Q$ be the product of primes dividing $q$ but not $f$. Then pointwise [step 19.1, algebra]
$$\chi(n)=\chi^*(n)\prod_{p\mid Q}(1-1_{p\mid n})=\sum_{d\mid Q}\mu(d)\chi^*(n)1_{d\mid n}.$$
For each $d$, $(d,f)=1$, so on $n=dk$ the summand is $\chi^*(d)\chi^*(k)$. If $d\le H$, the $k$ interval has length at most $H/d+1\le2H/d$, and step 19.1 applied with exponent $\varepsilon/2$ gives a bound $\ll H^\theta d^{-\theta}f^{\alpha+\varepsilon/2}$. Terms with $d>H$ each contain at most one integer and are at most one. Thus the total is $\ll\tau(Q)(H^\theta q^{\alpha+\varepsilon/2}+1)\ll H^\theta q^{\alpha+\varepsilon}$ by step 11.1. Empty intervals contribute zero. For $r=1$, use [F6] for the primitive intervals instead, then the same finite inclusion-exclusion and subpower estimate to obtain $\ll_\varepsilon q^{1/2+\varepsilon}$; this is exactly the claimed $r=1$ bound. Moduli one and two admit no nonprincipal character. Together these steps establish the full cube-free bound inside $L$. [F1, F6, F7, step 11.1, step 19.1, algebra]

21.1 For q≥2, encode a character by a finite table of residues on 0,…,q−1, with a distinguished zero marker at the nonunits, and exponent e_a∈{0,…,m−1} at each unit, where m=q!. All values of a finite unit-group character are m-th roots of unity by the finite group order theorem; the canonical complex value represented by e_a is exp(2πi e_a/m). The assertion that a table is a nonprincipal Dirichlet character is a finite conjunction of modular multiplication and gcd checks. Cube-freeness is a first-order arithmetic condition on q. All such tables are finite sequences of natural numbers and therefore belong to both L and the ambient universe; their arithmetic operations and truth values agree. [F1, F9, step 20.1, algebra] [F1, F9, step 20.1, algebra]

22.1 Fix positive rational δ=a/b, with positive integers a,b, and r≥1. For each coded q, χ, N,H, and positive integer K, the two sides of [F1, F9, step 21.1, algebra]
|Σχ(n)|≤K H^{1−1/r}q^{(r+1)/(4r²)+a/b}                         (I)
are nonnegative **uniformly computable reals from these integer inputs**. Specifically, ζ_m^e=cos(2πe/m)+i sin(2πe/m) has a fixed rational approximation procedure using π=16 arctan(1/5)−4 arctan(1/239) and alternating rational Taylor expansions, with an explicit computable error bound. Finite addition and the square-root bisection algorithm approximate the absolute value of the sum. Rational powers of positive integers are approximated by rational bisection for the corresponding integer root followed by integer powers. The procedure chooses its finite truncation lengths and search bounds by specified integer formulas, so it uses no choice of an infinite family of witnesses. Its output sequences are identical in L and V, and each has a proved uniform error at most 2^{−j} at index j.
For such approximations A_j,B_j, the comparison of their limits is equivalent to the arithmetic formula
∀j∈N, A_j≤B_j+2^{1−j}.                                           (2)
Indeed the forward implication follows from the two error bounds, and if A>B then sufficiently large j violates (2). Thus (I) is an arithmetic formula in the finite integer inputs; all its quantifiers range over the same ω in L and V. Formula-by-formula bounded absoluteness, applied to ω and the fixed arithmetic definitions, makes the comparison absolute. No arbitrary real supplied by V is claimed to belong to L. [F1, F9, step 21.1, algebra]

23.1 The fixed arithmetic sentence asserting the rational-parameter form of (B) is [F1, F9, step 22.1, algebra]
∀r≥1 ∀a,b≥1 ∃K≥1 ∀q,N,H,χ-code [cube-free q, H≥1, χ nonprincipal ⇒ (I)].  (B_Q)
All variables here range over ω (encode a signed N by a natural-number pair), and a character code is a finite list bounded by q and q!. Step 22.1 gives an explicit arithmetic matrix. Consequently (B_Q) has the same truth value in L and V: relativization does not alter ω or any finite code, and induction over this one fixed arithmetic formula transfers its bounded quantifiers and Boolean structure. No uniform choice of K over all pairs (r,a/b) is required; (B_Q) asserts separate existence for each pair. [F1, F9, step 22.1, algebra]

24.1 Take the actual finite proof of (B) under AC, already supplied by steps 2.1–20.1. Relativize that derivation to L. For each finitely many ZFC axiom instances used, the existing formal inner-model theorem gives its relativization in ZF; first-order inference and the particular definitions carry the proof to the fixed relativized conclusion. Therefore ZF proves (B_Q)^L. The actual constants in the internal proof can be replaced by positive integer K>C using the Archimedean property inside L. This is a single fixed proof and a single fixed arithmetic conclusion, not an assertion of full ZFC consistency or a uniform truth predicate. Step 23.1 transfers (B_Q)^L to ambient (B_Q). [F1, F9, step 23.1, algebra] [F1, F9, step 23.1, algebra]

25.1 In ambient ZF let ε>0 be any real and let r≥1. Choose a positive rational a/b<ε using the Archimedean property of the real numbers; this is one finite choice for the given ε. The K supplied by (B_Q) then works for ε, since q≥1 implies q^{a/b}≤q^ε. Every actual character has a finite table of the type in step 21.1, and the table's complex sum is the original sum. This proves (B) for all real ε without ambient AC. If q=1 there is no nonprincipal character, so the q≥2 coding restriction loses no case. [F1, F9, step 24.1, algebra] [F1, F9, step 24.1, algebra] ∎
## Source notes

The proof derives the singleton-root character estimate using an AC-qualified curve calculation inside the constructible universe and the arithmetic transfer to ZF. The cited earlier Weil carrier is not used: its pairwise-distinct-root Statement does not supply the repeated-root estimate proved here.
