---
id: lem-number-field-brauer-local-invariants-sum-to-zero
kind: lemma
title: "The local invariants of a number-field Brauer class sum to zero"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 21
deps:
  - def-axiom-of-choice
  - thm-choice-implies-dependent-implies-countable-choice
  - thm-local-class-formation-for-finite-residue-local-field
  - lem-local-unramified-degree-two-cohomology-and-inflation
  - def-restriction-and-corestriction-on-group-cohomology
  - thm-restriction-corestriction-composite-is-multiplication-by-the-index
  - thm-continuous-profinite-cohomology-as-direct-limit-of-finite-quotients
  - thm-finite-unramified-local-extensions-classified-by-residue-extensions
  - thm-finite-extension-local-degree-equals-ramification-index-times-residue-degree
  - thm-completion-of-an-absolutely-valued-field
  - lem-uniqueness-of-an-extended-complete-field-absolute-value
  - thm-krasner-lemma-for-complete-nonarchimedean-fields
  - lem-finite-galois-obstruction-brauer-cohomology-comparison
  - cor-local-brauer-invariant-under-choice
  - thm-archimedean-brauer-groups-and-invariant-maps
  - cor-number-field-brauer-class-splits-over-cyclic-cyclotomic-extension
  - cor-the-galois-group-of-a-rational-cyclotomic-field
  - lem-arithmetic-frobenius-on-a-cyclotomic-field
  - thm-global-field-completion-tensor-product-decomposition
  - thm-field-norm-and-trace-by-embeddings
  - lem-hensel-factor-lifting-over-a-complete-valued-field
proof_strategy: direct
axiom_use: >-
  AC supplies the ordinary closure/completion data and implies the DC/CC used
  by the explicit continuous cochain and lifting conventions. The entire
  transfer, formal-module, Frobenius-descent and cyclotomic cancellation
  calculation is supplied here; no local/global Artin theorem, later
  norm-index theorem, BHN theorem or global class formation is assumed.
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "J. S. Milne, Class Field Theory, version 4.03"
      url: "https://www.jmilne.org/math/CourseNotes/CFT.pdf"
      locator: "VII section8, especially Lemmas8.4–8.6, and I section3 Frobenius descent; the needed local formal and cohomological calculations are expanded here without a later reciprocity premise."
verification: {}
---

## Statement

Assume AC. Let $K$ be a number field and let $A$ be a finite-dimensional central simple $K$-algebra. At each finite place use the normalized local Brauer invariant, with the standard crossed-product comparison and arithmetic-Frobenius normalization; at real places use the invariant in $\frac12\mathbb Z/\mathbb Z$ and at complex places the zero invariant. Then only finitely many local images $[A\otimes_KK_v]$ have nonzero invariant and
$$\sum_v\operatorname{inv}_v([A\otimes_KK_v])=0\quad\text{in }\mathbb Q/\mathbb Z.$$

## Statement references

[[cor-local-brauer-invariant-under-choice]]

[[thm-archimedean-brauer-groups-and-invariant-maps]]

[[cor-number-field-brauer-class-splits-over-cyclic-cyclotomic-extension]]

## Facts & Assumptions

**Given:** AC, the number field $K$ and algebra $A$ in the Statement. AC supplies DC and Countable Choice throughout the normalized-cochain convention.

[F1] For a finite-residue complete discretely valued field $F$, the normalized cohomological invariant $\iota_F:H^2(G_F,F_s^\times)\to\mathbb Q/\mathbb Z$ is an isomorphism, and restriction to $E/F$ scales it by $[E:F]$. For an unramified character $\chi$, the invariant is computed by valuation, inverse Bockstein and evaluation at arithmetic Frobenius. [[thm-local-class-formation-for-finite-residue-local-field]] [[lem-local-unramified-degree-two-cohomology-and-inflation]]

[F2] Corestriction extends the finite-coset norm, and corestriction after restriction multiplies by the subgroup index. Continuous cochains are the direct-limit finite-quotient convention. [[def-restriction-and-corestriction-on-group-cohomology]] [[thm-restriction-corestriction-composite-is-multiplication-by-the-index]] [[thm-continuous-profinite-cohomology-as-direct-limit-of-finite-quotients]]

[F3] Finite unramified extensions are classified by the finite residue extensions with compatible arithmetic Frobenius. Completion preserves the value group and residue field; finite extensions have degree equal to ramification index times residue degree. Automorphisms preserve the unique extended value. Krasner's lemma makes every algebraic intermediate field in $F_s$ relatively closed in $F_s$. [[thm-finite-unramified-local-extensions-classified-by-residue-extensions]] [[thm-completion-of-an-absolutely-valued-field]] [[thm-finite-extension-local-degree-equals-ramification-index-times-residue-degree]] [[lem-uniqueness-of-an-extended-complete-field-absolute-value]] [[thm-krasner-lemma-for-complete-nonarchimedean-fields]]

[F4] For a finite Galois splitting field, $b=-o$ identifies the algebraic Brauer class with its multiplication factor set, and commutes with scalar extension. At finite local fields the algebraic invariant is $\iota_F\circ b_F$. The complex Brauer group is zero and the nonzero real class has invariant $1/2$. [[lem-finite-galois-obstruction-brauer-cohomology-comparison]] [[cor-local-brauer-invariant-under-choice]] [[thm-archimedean-brauer-groups-and-invariant-maps]]

[F5] Every central simple number-field algebra splits over a totally complex finite cyclic cyclotomic extension. [[cor-number-field-brauer-class-splits-over-cyclic-cyclotomic-extension]]

[F6] Rational cyclotomic automorphisms are exponent classes, and an unramified rational prime has arithmetic Frobenius exponent equal to that prime. [[cor-the-galois-group-of-a-rational-cyclotomic-field]] [[lem-arithmetic-frobenius-on-a-cyclotomic-field]]

[F7] Field norms are products over separable embeddings. At a completion, a finite global extension is the product of its local completion fields, so its norm becomes the product of their norms. [[thm-field-norm-and-trace-by-embeddings]] [[thm-global-field-completion-tensor-product-decomposition]]

[F8] Hensel factor lifting and the unramified classification imply that adjoining roots of unity of order prime to the residue characteristic is unramified: the roots of the residue polynomial are simple and lift from a finite residue splitting field. [[lem-hensel-factor-lifting-over-a-complete-valued-field]] [[thm-finite-unramified-local-extensions-classified-by-residue-extensions]]

[A1] AC implies the DC/CC required in [F1]–[F4] and supplies the common closure and compatible valuation embeddings. [[def-axiom-of-choice]] [[thm-choice-implies-dependent-implies-countable-choice]]

## Proof

**Proof technique:** use the cohomological character pairing itself, construct the necessary local formal fields and their Frobenius descent inline, prove cyclotomic cancellation, and apply the independently proved cyclic splitting theorem. No reciprocity theorem is a premise.

**Given:** The original data. For a finite-order continuous character $\chi:G_F\to\mathbb Q/\mathbb Z$ and $a\in F^\times$, write $\kappa_F(\chi,a)=\iota_F(a\smile\delta\chi)$, using the Bockstein of $0\to\mathbb Z\to\mathbb Q\to\mathbb Q/\mathbb Z\to0$. This is additive in $\chi$ and multiplicative in $a$, by cohomology functoriality.

1.1 We first prove norm compatibility without an Artin map. For finite separable $E/F$, put $G=G_F$, $H=G_E$, $d=[E:F]$, and $M=F_s^\times$. For $\beta\in H^2(H,M)$ choose $c\in\mathbb Q/\mathbb Z$ with $dc=\iota_E(\beta)$ and let $\gamma=\iota_F^{-1}(c)$. By [F1], $\operatorname{res}\gamma=\beta$, so [F2] gives $\operatorname{cor}\beta=d\gamma$ and $\iota_F(\operatorname{cor}\beta)=\iota_E(\beta)$. This uses a divisible preimage and invariant injectivity, not cancellation by $d$ on a torsion group. [F1, F2, A1, given, algebra]

1.2 We construct the auxiliary local formal fields explicitly. For a uniformizer $\pi$ of $F$ and residue size $q$, put $f(X)=\pi X+X^q$. For any linear form $L$ in finitely many variables, construct the unique integral $H=L+O(\text{degree }2)$ with $f(H)=H(f(X_1),\ldots,f(X_s))$. At degree $r\ge2$ the error is divisible by $\pi$: modulo $\pi$ this is the equality between the $q$th power and substitution of $X_i^q$, since coefficients reduce to $\mathbb F_q$. A degree-$r$ correction is therefore uniquely obtained by division by $\pi-\pi^r=\pi(1-\pi^{r-1})$. For $L=X+Y$ this gives a formal law $F_\pi$, and for $L=aX$ the scalar series $[a]_\pi=aX+O(X^2)$. Uniqueness proves associativity, commutativity, identity, the endomorphism property and the ring action, by comparing the corresponding composites with the same linear terms. The inverse law is obtained recursively from coefficient one, and $[\pi]_\pi=f$. A unit $a$ has inverse scalar series $[a^{-1}]_\pi$. These are constructed identities, not an imported formal-module existence theorem. [given, construct, algebra]

1.3 Let $B$ be the valuation ring of the completion of $F^{\mathrm{ur}}$, with its arithmetic Frobenius $\sigma$. By [F3], it has uniformizer $\pi$ and residue field $\bar k$. Both $b\mapsto\sigma b-b$ on $B$ and $b\mapsto\sigma b/b$ on $B^\times$ are onto. Solve $x^q-x=c$ or $x^{q-1}=c$ in the algebraic residue field first, then correct at each power of $\pi$ by the additive equation $x^q-x=c$; the corrections $\pi^r x$ and $1+\pi^r x$ have exactly that first-order effect. DC from AC supplies compatible lifts and completeness their limits. Modulo $\pi^r$, the additive fixed classes are precisely $\mathcal O_F/\pi^r$: inductively a fixed lift differs from a base-field lift by $\pi^{r-1}c$ with $c^q=c$. It follows that $B^\sigma=\mathcal O_F$. [F3, A1, construct, algebra]

2.1 Here is the exact projection identity needed for the pairing. Choose a finite transversal $T$ for $H\backslash G$, write $tg=h(t,g)t_g$, and lift $\chi$ to its rational representative $r(g)\in[0,1)$. Set $z(g,g')=r(g)+r(g')-r(gg')$ and $m_t(g)=r(h(t,g))-r(g)-r(t)+r(t_g)\in\mathbb Z$. The finite-cochain transfer is $\operatorname{Cor}(f)(g,g')=\prod_t t^{-1}f(h(t,g),h(t_g,g'))$; it commutes with the differential since $h(t,gg')=h(t,g)h(t_g,g')$ and $gt_g^{-1}=t^{-1}h(t,g)$ match the interior and first faces. It extends the degree-zero norm and is therefore [F2]. Expansion gives $z(h(t,g),h(t_g,g'))=z(g,g')+m_t(g)+m_{t_g}(g')-m_t(gg')$. For $a\in E^\times$, the cochain $B(g)=\prod_t t^{-1}(a)^{m_t(g)}$ consequently satisfies $\operatorname{Cor}(a^{\operatorname{res}z})=(N_{E/F}a)^z\,\delta B$, because $gt_g^{-1}(a)=t^{-1}(a)$. Thus $\operatorname{cor}(a\smile\delta\operatorname{res}\chi)=N_{E/F}a\smile\delta\chi$. Combining with step 1.1 proves $\kappa_F(\chi,N_{E/F}a)=\kappa_E(\operatorname{res}\chi,a)$. Finite character images and coset indices make all cochains continuous; [F2] passes the finite calculation to the stated continuous convention. [F1, F2, F7, step 1.1, construct, algebra]

2.2 Choose $\lambda_1\ne0$ with $\pi+\lambda_1^{q-1}=0$, and then $f(\lambda_j)=\lambda_{j-1}$. The first point has valuation $1/(q-1)$. Inductively over $F(\lambda_{j-1})$, the polynomial $X^q+\pi X-\lambda_{j-1}$ has constant term a uniformizer and every other lower coefficient divisible by it. A root has valuation $1/q$ in that normalized valuation: otherwise its leading or constant term is uniquely of least valuation. Thus [F3] forces degree and ramification index $q$, and $\lambda_j$ is a uniformizer. Hence $[F(\lambda_n):F]=D_n=(q-1)q^{n-1}$ and this extension is totally ramified. The polynomial $f^{\circ n}$ has $q^n$ simple roots in the open unit disk: all roots are in that disk by reduction to $X^{q^n}$, and differentiating the formal translation identity at a torsion point gives $(f^{\circ n})'(\lambda)\,F_{\pi,X}(0,\lambda)=\pi^n\ne0$. The annihilator of the primitive $\lambda_n$ in the scalar action is exactly $\pi^n$, since a smaller power would kill $\lambda_1$. Its $q^n$ scalar multiples therefore give all roots. They lie in the complete field $F(\lambda_n)$ by convergence of their integral scalar series, so this field is Galois. Its action injects into $(\mathcal O_F/\pi^n)^\times$, whose size is $D_n$; equality of degrees makes it that group. The primitive polynomial $\pi+(f^{\circ(n-1)}(X))^{q-1}$ is monic of degree $D_n$ and constant term $\pi$, hence is minimal. Consequently $N_{F(\lambda_n)/F}(-\lambda_n)=\pi$, also when $D_n=1$. Denote this torsion field by $F_{\pi,n}$. [F3, A1, step 1.2, construct, algebra]

2.3 Two series with linear term $\pi X$ and reduction $X^q$ have a unique integral coordinate $c(X)=X+O(X^2)$ intertwining them: its degree-$r$ coefficient is obtained by dividing the error, divisible by $\pi$, by $\pi^r-\pi$. Transported formal laws and scalar actions agree by the same uniqueness with their fixed tangent terms. Thus replacing the chosen $f$ by any other normalized parameter series does not change its torsion fields or labeled scalar actions. This includes an explicit alternative model once its formal identities are verified below. [step 1.2, construct, algebra]

3.1 If $\chi$ is unramified, the cocycle $a\smile\delta\chi$ inflates from $\operatorname{Gal}(F^{\mathrm{ur}}/F)$ with coefficients in $(F^{\mathrm{ur}})^\times$. Valuation sends it to $v_F(a)\delta\chi$. The normalization [F1] therefore gives $\kappa_F(\chi,a)=v_F(a)\chi(\operatorname{Frob}_F)$. Also, if $a$ is a norm from a finite separable extension over which $\chi$ is trivial, step 2.1 gives $\kappa_F(\chi,a)=0$. These are the only local reciprocity properties needed below, and both have just been proved cohomologically. [F1, step 2.1, algebra]

3.2 For another uniformizer $\varpi=u\pi$, choose $\varepsilon\in B^\times$ with $\sigma\varepsilon=u\varepsilon$. Construct $h=\varepsilon X+O(X^2)$ over $B$ with $\sigma h=h\circ[u]_\pi$: writing the new coefficient as $a\varepsilon^r$ makes its equation $(\sigma a-a)(u\varepsilon)^r=c$, soluble by step 1.3. Set $k=(\sigma h)\circ f\circ h^{-1}$. Commutation of $f$ with $[u]_\pi$ gives $\sigma k=k$, so $k$ has coefficients in $\mathcal O_F$; its linear term is $\varpi X$ and its reduction is $X^q$, since $\overline{\sigma h}\circ X^q=X^q\circ\bar h$. The coordinate of step 2.3 from $k$ to $g(X)=\varpi X+X^q$ changes $h$ to one still satisfying $\sigma h=h\circ[u]_\pi$ and now $g\circ h=h\circ[\varpi]_\pi$. Transported formal laws and scalar actions commute with $g$ and have the prescribed tangent terms, so uniqueness makes this an $\mathcal O_F$-linear formal isomorphism to the module for $\varpi$. It preserves the level-$n$ torsion ideal. [step 1.2, step 2.3, step 1.3, construct, algebra]

4.1 For a torsion point $\lambda$, $h(\lambda)$ is a simple torsion root of the other module and is therefore separable algebraic over $F$. Approximating the coefficients of $h$ from $F^{\mathrm{ur}}$ shows that $h(\lambda)$ is in the closure of $F^{\mathrm{ur}}F_{\pi,n}$. Krasner's relative-closedness assertion in [F3] puts it in that algebraic field itself; applying $h^{-1}$ gives equality $S_n=F^{\mathrm{ur}}F_{\pi,n}=F^{\mathrm{ur}}F_{\varpi,n}$. Because the torsion field is totally ramified and the other field unramified, their intersection is $F$. Thus define $R_\pi(v\pi^t)$ on this abelian compositum by $\sigma^t$ on $F^{\mathrm{ur}}$ and $[v^{-1}]_\pi$ on $F_{\pi,n}$. It is a homomorphism. The element $R_\pi(\varpi)$ acts on $B$ as $\sigma$, and on $\lambda$ as $[u^{-1}]_\pi$, hence fixes $h(\lambda)$ by the identity for $h$. Therefore $R_\pi(\varpi)=R_\varpi(\varpi)$ on the common $S_n$. All coefficient actions extend by the isometries in [F3]. [F3, step 2.2, step 3.2, construct, algebra]

5.1 If a finite character $\chi$ factors through $S_n/F$, decompose it using $S_n=F^{\mathrm{ur}}F_{\varpi,n}$ into an unramified character and a torsion-field character. The norm formula of step 2.2 and step 3.1 make the latter character's pairing with $\varpi$ zero, while step 3.1 gives the former its Frobenius value. Thus $\kappa_F(\chi,\varpi)=\chi(R_\varpi(\varpi))=\chi(R_\pi(\varpi))$. Since every unit $u$ is $(u\pi)/\pi$, uniformizers generate $F^\times$ and the two homomorphisms agree on all of it. This identifies the cohomological pairing with these explicit formal/unramified actions without a local Artin theorem. [step 3.1, step 2.2, step 4.1, algebra]

6.1 On $\mathbb Q_\ell$, the alternative formal model $X+Y+XY$, $[a](X)=(1+X)^a-1$ has tangent coefficient $a$ and parameter $[\ell](X)\equiv X^\ell\pmod\ell$. Its coefficients are integral by approximating $a\in\mathbb Z_\ell$ by nonnegative integers in each fixed binomial polynomial; all formal action identities follow coefficientwise by the same continuity from integer exponents. Step 2.3 identifies it with the constructed parameter module, and its torsion is $\zeta_{\ell^r}-1$. Consequently step 5.1 gives, for a character of $\operatorname{Gal}(\mathbb Q_\ell(\mu_{\ell^r})/\mathbb Q_\ell)$ and $a=u\ell^t$, the pairing equal to its value on exponent $u^{-1}$. For a character on roots of unity prime to $\ell$, step 3.1 instead gives $t$ times its value on arithmetic Frobenius, which acts by exponent $\ell$. These assertions include the dyadic and trivial-level cases. [F6, F8, step 3.1, step 2.3, step 5.1, construct, algebra]

7.1 Let $E=\mathbb Q(\mu_{\ell^r})$ and let $\chi$ be a character of its Galois group, restricted at each rational completion. For $a\in\mathbb Q^\times$, the pairings at $p\ne\ell$ evaluate exponent $p^{v_p(a)}$ by step 3.1 and [F6]; the pairing at $\ell$ evaluates $u^{-1}$ by step 6.1, where $u=a\ell^{-v_\ell(a)}$. Define the real pairing as evaluation on complex conjugation when $a<0$ and zero otherwise. Its exponent is $\operatorname{sgn}(a)$. The product of these exponents is one, because $u=\operatorname{sgn}(a)\prod_{p\ne\ell}p^{v_p(a)}$. Thus the sum of all pairings is zero. Every character on a rational cyclotomic field is the sum of characters on its prime-power components, so this rational zero-sum holds for every $\mathbb Q(\mu_N)$ character. [F6, step 3.1, step 6.1, algebra]

8.1 A character of a subgroup of a finite abelian group extends to the whole group with values in $\mathbb Q/\mathbb Z$. To see this, adjoin one generator $g$ at a time; if its coset has order $d$, choose $x$ with $dx=\chi(dg)$ and set the extended value at $h+rg$ to $\chi(h)+rx$. This is well-defined by the defining relation, and finitely many repetitions suffice. Therefore a character of a cyclic cyclotomic $M/K$, $M\subseteq K(\mu_N)$, lifts to one on $\operatorname{Gal}(\mathbb Q(\mu_N)/\mathbb Q)$: compose first with the quotient from $\operatorname{Gal}(K(\mu_N)/K)$, a subgroup of that rational Galois group, and extend. Group the local pairings of a principal $a\in K^\times$ by rational places. Step 2.1 and [F7] make their finite-place sum equal to the rational pairing on $N_{K/\mathbb Q}a$. At infinity this remains true, since a complex norm is positive and a real completion gives the identity map. Step 7.1 proves that the sum is zero. The sums are finite: choose a nonzero integer $d$ with $da$ and $da^{-1}$ integral; outside primes dividing $dN$, the element is a local unit and the cyclotomic character is unramified by [F8], so step 3.1 gives zero. This proves zero-sum for every cyclic cyclotomic character without a global reciprocity theorem. [F6, F7, F8, step 2.1, step 3.1, step 7.1, construct, algebra]

8.2 A central simple algebra split by a finite cyclic $M/K$ is Brauer-equivalent to $A(M,\sigma,b)$ for some $b\in K^\times$. Indeed [F4] supplies its crossed product with normalized factor set; if $u$ is the homogeneous element of generator degree $\sigma$, then $u^n=b\in M^\times$ and commutation with $u$ forces $\sigma(b)=b$. Every other homogeneous basis element is a multiple of $u^i$, giving exactly that cyclic algebra. For $\chi(\sigma)=1/n$, its multiplication factor is $b^{\lfloor(i+j)/n\rfloor}$, exactly $b\smile\delta\chi$ for the lift $\chi(\sigma^i)=i/n$. By [F4], after each finite-place scalar extension its invariant is $\kappa_{K_v}(\operatorname{res}\chi,b)$. At a real place a nontrivial order-two decomposition subgroup restricts the carry to the algebra $(\mathbb C/\mathbb R,b)$: the element $u^{n/2}$ has square $b$. This is split for $b>0$ and is the quaternion class for $b<0$, with invariant $1/2$ as in [F4]; for $b<0$ scale to $-1$ and use its positive four-square norm to see division, and for $b>0$ a positive square root gives the split conjugation action. Thus its archimedean invariant is the real pairing in step 7.1; at complex places both are zero. [F4, step 7.1, construct, algebra]

9.1 Apply [F5] to the given algebra $A$. Its splitting field is cyclic cyclotomic, so step 8.2 represents its class as $A(M,\sigma,b)$, preserving every local class. Step 8.1 and step 8.2 show that the sum of their normalized local invariants is zero. Finiteness follows from the same explicit argument: outside primes dividing a clearing denominator for $b,b^{-1}$ and the cyclotomic order, its character is unramified and $b$ is a unit, so the invariant vanishes by step 3.1. The real and complex places are finite in number. Hence the local invariants of the original algebra are finitely supported and sum to zero. All original hypotheses are exactly [A1]; no local/global Artin map, BHN theorem, or global class formation has been used. [F4, F5, F8, A1, step 3.1, step 8.1, step 8.2, algebra] ∎
