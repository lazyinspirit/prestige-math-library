---
id: lem-gts-curve-nef-ample-perturbation-by-nakai-construction
kind: lemma
title: Curve-nef ample perturbations by a projective Nakai construction
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
domain: mathematics
library: physics
proof_strategy: direct
deps:
  - def-axiom-of-choice
  - thm-serre-criterion-ampleness
  - thm-serre-vanishing
  - thm-proper-pushforward-coherent
  - thm-cohomological-dimension-noetherian-scheme
  - thm-localisation-and-polynomial-extension-of-regular-rings
  - cor-dimension-of-a-finite-polynomial-ring-over-a-field
dependency_roles:
  def-axiom-of-choice: mathematical-premise
  thm-serre-criterion-ampleness: mathematical-premise
  thm-serre-vanishing: mathematical-premise
  thm-proper-pushforward-coherent: mathematical-premise
  thm-cohomological-dimension-noetherian-scheme: mathematical-premise
  thm-localisation-and-polynomial-extension-of-regular-rings: mathematical-premise
  cor-dimension-of-a-finite-polynomial-ring-over-a-field: mathematical-premise
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  precheck: pending
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-04
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
dependency_level: 0
sources:
  references:
  - title: Olivier Debarre, Introduction to Mori Theory (M2 course, 2010; revision 2011)
    url: https://perso.imj-prg.fr/wp-content/uploads/debarre-pub/M22.pdf
    locator: 'Chapter 4 §§4.1–4.2, printed pp. 40–44 (PDF pp. 41–45): Theorem 4.1 (Nakai–Moishezon), Lemma 4.4,
      sums of ample/nef divisors and Theorem 4.6 (curve-nef equivalence), including proofs. This exact range was
      actually read; no other chapter reading is claimed.'
---

## Statement

Assume AC. Let $X$ be a projective scheme over $\mathbb C$, let $N$ be a Cartier divisor with $N\cdot C\geq0$ for every integral projective curve $C\subset X$, and let $A$ be ample Cartier. Then $N+tA$ is an ample $\mathbb Q$-Cartier divisor for every rational $t>0$. Thus curve-nefness implies that the numerical class of $N$ lies in the closure of the ample cone. This is a conclusion, not a redefinition of nefness. The argument also proves the projective numerical criterion used here: a Cartier divisor $L$ is ample if $L^{\dim V}\cdot V>0$ for every positive-dimensional integral closed subscheme $V\subset X$.

Products of Cartier divisors on an integral projective $r$-fold mean the mixed Euler-characteristic intersection numbers constructed in the proof. For ample complete intersections these are their ordinary zero-cycle degrees; on a curve the number is the usual line-bundle degree, so the nef hypothesis has its ordinary curve meaning. No cone theorem, basepoint-free theorem, Kodaira vanishing, Riemann–Roch formula for a smooth variety, or equivalence of numerical and analytic nef definitions is a premise.

## Facts & Assumptions

**Given:** Exactly the projective schemes, Cartier divisors and AC in the Statement.

[F1] [[thm-serre-criterion-ampleness]] identifies ampleness with eventual global generation of every coherent twist. Its Statement does NOT identify ampleness directly with cohomological vanishing. The latter implication is proved below.

[F2] [[thm-serre-vanishing]] gives eventual positive-degree coherent-cohomology vanishing for powers of an ample line bundle on a projective scheme. [[thm-proper-pushforward-coherent]], applied to the projective structure morphism to $\operatorname{Spec}\mathbb C$, gives finite-dimensional coherent cohomology in each degree. The finite range comes separately from F5.

[F3] [[thm-localisation-and-polynomial-extension-of-regular-rings]] and [[cor-dimension-of-a-finite-polynomial-ring-over-a-field]] give a finite global-dimension bound for a polynomial ring in finitely many variables over $\mathbb C$. We use it for a finite bigraded free resolution.

[F4] [[def-axiom-of-choice]] supplies homogeneous generators, finite free resolutions and coefficient choices. Every limiting numerical argument below takes place in the two-dimensional real span of the specified divisor classes.

[F5] [[thm-cohomological-dimension-noetherian-scheme]] gives $H^q(V,G)=0$ for every quasi-coherent sheaf $G$ on a separated Noetherian scheme $V$ of dimension at most $r$ and every $q>r$. Every projective scheme over $\mathbb C$ satisfies these hypotheses with $r=\dim V$.

## Proof

**Given:** F1–F4. Twisting notation is additive. A rational divisor is called ample if some positive integral multiple is an ample line bundle. The real ample cone in a finite real span is the cone of positive finite real combinations of ample rational classes.

1.1 We first prove that eventual vanishing of all higher coherent twists implies ampleness, so no stronger Serre criterion is assumed. Embed $X$ by a very ample $H$ in $\mathbb P^s$. If $H^q(X,F(nL))=0$ for every coherent $F$, every $q>0$, and sufficiently large $n$ depending on $F$, apply it to the finitely many $F(-jH)$, $1\leq j\leq s$. The pushforward $E=i_*F(nL)$ then satisfies $H^j(\mathbb P^s,E(-j))=0$ for $j>0$. Such an $E$ is globally generated, by the following elementary induction on $s$. Remove its maximal zero-dimensional subsheaf $T$; it has no higher cohomology, is globally generated, and the quotient has no zero-dimensional associated points. Through any specified point choose a hyperplane containing none of that quotient's finitely many associated subvarieties. Multiplication by its equation is injective. The cohomology exact sequence makes the hyperplane restriction satisfy the same vanishing; induction generates it, and $H^1(E(-1))=0$ lifts its sections. This generates the quotient at the specified point. Sections lift back across $T$ since $H^1(T)=0$, and together with sections of $T$ generate $E$. For $s=0$ the assertion is just linear algebra. Thus every $F(nL)$ is generated and F1 proves ampleness. [F1, F2, construct]

1.2 Here is the uniform vanishing needed for two ample bundles. If $B,C$ are ample on a projective scheme $V$ and $F$ is coherent, then $H^q(V,F(aB+bC))=0$ for $q>0$ whenever $a,b\geq0$ and $a+b$ is sufficiently large. Replace $B,C$ by very ample powers and handle the finitely many residue exponents by twisting $F$. Embed $V$ in $\mathbb P^u\times\mathbb P^v$ by them. A coherent sheaf on this product is the sheafification of a finite bigraded module over $S=\mathbb C[x_0,\ldots,x_u,y_0,\ldots,y_v]$: choose a finite presentation by sufficiently negative diagonal twists using the very ample Segre bundle, and sheafify its cokernel. F3 supplies a finite bigraded free resolution. To retain grading, take homogeneous components of splittings; a finite graded projective module over this positively graded polynomial ring is graded free by lifting a homogeneous basis modulo $(x,y)$ and applying graded Nakayama to the split kernel. On the corner $a,b\gg0$, every line-bundle term of the sheafified resolution has no higher cohomology, by the standard monomial Čech complex of projective space and its tensor product. Derived sections of the finite resolution are then concentrated in nonpositive degrees, so the coherent sheaf has no positive cohomology. For $a$ smaller than the corner bound there are finitely many possible $a$ and ordinary Serre vanishing in $b$ applies; the opposite finite-width strip is identical. These corner and strip bounds give exactly the stated bound on $a+b$, not merely separate lower bounds on both variables. [F2, F3, F4, construct]

1.3 We construct the Euler polynomial used in the numerical criterion. For very ample line bundles $B,C$ on an integral projective $r$-fold $V$, set $f(a,b)=\chi(V,aB+bC)$ for integers $a,b$. Any $r+1$ sufficiently general sections, each from either $B$ or $C$, have empty common zero set. Their twisted Koszul complex is exact, since locally at least one section is a unit. Its Euler relation says $\Delta_B^i\Delta_C^j f=0$ whenever $i+j=r+1$, on ALL of $\mathbb Z^2$. Discrete Newton expansion therefore makes $f$ a polynomial of total degree at most $r$: successively expand in binomial polynomials and use the mixed differences to kill coefficients of larger total degree. The top mixed differences with $r$ sections are the zero-cycle degrees of their general proper complete intersections. They can be chosen in the dense smooth open of $V$: over the perfect field $\mathbb C$ the generic smooth locus is dense by the separating-transcendence-basis Jacobian calculation, and a general $r$-fold hyperplane intersection avoids its fixed lower-dimensional complement. Thus these Koszul complexes have only the zero-dimensional quotient at their common zeros. This identifies the leading homogeneous polynomial with $(aB+bC)^r/r!$. Every Cartier $L$ is a difference of very ample bundles, because $L+mH$ and $mH$ are very ample for large $m$ by F1. Substituting gives $\chi(V,nL)=(L^r/r!)n^r+O(n^{r-1})$. This defines the mixed intersection products for arbitrary Cartier divisors and is compatible with restriction to a general hyperplane. In dimension one it is exactly the degree difference of the Euler polynomials. Only the leading Euler polynomial, not a general Todd-class formula, is needed. [F1, F2, F4, construct]

1.4 We now pass from CURVE-nefness to ample perturbations, without assuming a real numerical criterion. First, the rational ample cone is convex and open in the span of two given Cartier classes. Convexity follows because a tensor product of ample bundles is ample, by their projective embeddings and the Segre embedding. For openness at an ample class $A$, F1 makes $mA\pm B$ ample for $m\gg0$ for any fixed Cartier $B$: first make $(m-1)A\pm B$ generated, then tensor with $A$. This also shows that $N+tA$ is ample for sufficiently large rational $t$. A rational class belonging to this real cone is already rational ample: write its finite positive real expression in rational ample classes, solve the resulting rational linear equations by Gaussian elimination, and approximate the free real parameters by rational ones inside the strictly positive solution set. This gives a positive rational expression, whose denominator clears to a tensor product of ample bundles. Define the open real cone by positive real combinations of these rational classes; no real Nakai criterion is asserted. [F1, construct]

2.1 On a projective scheme, ampleness may be checked on its finitely many reduced irreducible components. For the nontrivial direction let $I_j$ be their ideals. Their product $J$ is contained in the nilradical, so $J^r=0$ for some finite $r$. Filter a coherent module $F$ by successively multiplying by $I_1,\ldots,I_s$, then repeat this cycle $r$ times. Each successive quotient is annihilated by one $I_j$, hence is a coherent pushforward from that reduced component. If $L$ is ample there, F2 makes its higher twists acyclic. The finite filtration and the extension direction of the long cohomology sequence make all higher twists of $F$ acyclic. step 1.1 proves ampleness on the entire scheme. This argument does not make the false assertion that eventual $H^1$-vanishing is two-out-of-three in arbitrary short exact sequences. [F1, F2, step 1.1, algebra]

3.1 We prove the numerical ampleness criterion by dimension induction. Dimension zero is immediate from F1. It suffices by step 2.1 to handle integral $V$ of dimension $r>0$. Assume $L^{\dim W}\cdot W>0$ for all positive-dimensional integral $W\subseteq V$. Fix a very ample hyperplane $H$. The induction hypothesis and step 2.1 make $L|_H$ ample, including a reducible or nonreduced hyperplane. step 1.2 on $H$ makes all $H^q(H,mL+kH)$ vanish for $q>0$, all $k\geq0$, once $m$ is sufficiently large. For $i\geq2$ the hyperplane exact sequence consequently identifies $H^i(V,mL+(k-1)H)$ with $H^i(V,mL+kH)$, for $k\geq1$. For fixed $m$, the latter vanishes for sufficiently large $k$ by F2. Hence $H^i(V,mL)=0$ for $i\geq2$ and all large $m$. [F1, F2, step 1.2, step 2.1, construct]

4.1 By step 1.3 and $L^r>0$, the preceding vanishing gives $h^0(V,mL)\geq\chi(V,mL)=(L^r/r!)m^r+O(m^{r-1})$. On $H$, the ample bundle $L|_H$ has $h^0(H,mL)=O(m^{r-1})$, by F2 and its Euler polynomial. The restriction sequence therefore gives a nonzero section of $m_0L-H$ for some $m_0>0$. If its divisor is empty, $m_0L=H$ and $L$ is already ample. Otherwise let its effective Cartier divisor be $D$. All integral subvarieties of $D$ satisfy the original intersection positivity, so induction and step 2.1 make $L|_D$ ample. Also $H|_D$ is ample. [F1, F2, step 1.3, step 3.1, construct]

5.1 Fix any integer $a$ and write $n=qm_0+r_0$ with $0\leq r_0<m_0$. The twist $\mathcal O_V(nL-qD-aH)=\mathcal O_V(r_0L+(q-a)H)$ has no higher cohomology for all large $q$ by F2, uniformly for the finitely many $r_0$. For $0\leq k\leq q$, its successive divisor restrictions are $\mathcal O_D((n-m_0k)L+kH-aH)$. The two nonnegative coefficients $n-m_0k,k$ have sum at least $q$. step 1.2 therefore makes every such restriction acyclic in positive degree for all large $q$, uniformly in $k$. Descending from $k=q$ to $k=0$ in the exact Cartier-divisor sequences gives $H^i(V,nL-aH)=0$ for $i>0$ and all large $n$. [F2, step 1.2, step 4.1, algebra]

6.1 These line-bundle vanishings imply the same for every coherent $F$. Build a partial resolution $0\to K_r\to L_{r-1}\to\cdots\to L_0\to F\to0$ by finite sums $L_i$ of line bundles $\mathcal O_V(-aH)$, using F1 for the successive coherent kernels. After twisting by $nL$, the finitely many $L_i(nL)$ have no higher cohomology by step 5.1. Repeated long exact sequences then identify $H^q(V,F(nL))$ with $H^{q+r}(V,K_r(nL))$ for every $q>0$. The latter vanishes by F5: $V$ is projective, hence separated and Noetherian, of dimension $r$, and $K_r(nL)$ is coherent and therefore quasi-coherent. Thus $H^q(V,F(nL))=0$ for every coherent $F$, every $q>0$, and all sufficiently large $n$; step 1.1 makes $L$ ample. Conversely an ample bundle has positive top degree on every integral subvariety by taking a very ample power and a general complete linear section. This proves the numerical criterion. [F1, F2, F5, step 1.1, step 5.1, construct]

7.1 Induct on $\dim X$, reducing to its integral components by step 2.1. The curve case follows from degree positivity and the numerical criterion. Suppose the perturbation assertion is proved on all smaller-dimensional projective schemes. If the threshold $t_0=\inf\{t>0:N+tA\text{ belongs to the real ample cone}\}$ were positive, then $T=N+t_0A$ would be a limit of ample rational classes. Thus $N\cdot T^{r-1}\geq0$: approximate $T$ from above by ample rational $N+tA$, represent a positive multiple of its $(r-1)$-fold self-intersection by an effective complete-intersection curve, and use the original curve-nef inequality. On a general very ample hyperplane in a positive power of $A$, the induction hypothesis gives $T|_H$ real ample: choose a positive rational $s<t_0$, so $(N+sA)|_H$ is ample rational and add $(t_0-s)A|_H$. Its top degree is strictly positive, as is seen by expanding positive combinations of very ample rational classes and taking their complete intersections. Therefore $A\cdot T^{r-1}>0$. Consequently
$$T^r=N\cdot T^{r-1}+t_0A\cdot T^{r-1}>0.$$
By continuity the same total top-degree inequality holds for a rational $t<t_0$ sufficiently close to it. All proper positive-dimensional integral subvarieties have ample restriction of $N+tA$ by the induction hypothesis, so all their top degrees are positive. The RATIONAL numerical criterion just proved makes $N+tA$ ample, contradicting the definition of $t_0$. [F4, step 2.1, step 6.1, step 1.4, construct]

8.1 It follows that $t_0=0$. Every rational $t>0$ is above the threshold and $N+tA$ is ample; alternatively choose a smaller ample rational point and add a positive ample multiple of $A$. Hence $N$ lies in the closure of the ample cone, with its original nonnegative-curve definition retained. Apply step 2.1 once more for nonintegral or nonreduced $X$. All claimed conclusions follow. No nef-and-big semiampleness or vanishing theorem has been used in constructing this bridge. [F1, step 2.1, step 1.4, step 7.1, algebra] ∎
