---
id: lem-gts-classical-and-nonhyperelliptic-curve-brill-noether-bounds
kind: lemma
title: Classical and nonhyperelliptic vector-bundle Brill–Noether bounds
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
domain: mathematics
library: physics
category: string-theory
axiom_use: ZF + AC
deps:
- thm-riemann-roch-euler-characteristic-curve
- thm-serre-duality-curves-vector-bundles
- lem-normalization-lowers-arithmetic-genus-delta
- thm-integral-closure-finite-finite-type-domain-over-field
- thm-serre-vanishing
- lem-eventual-global-generation-coherent-twists
- def-axiom-of-choice
dependency_roles:
  thm-riemann-roch-euler-characteristic-curve: mathematical-premise
  thm-serre-duality-curves-vector-bundles: mathematical-premise
  lem-normalization-lowers-arithmetic-genus-delta: mathematical-premise
  thm-integral-closure-finite-finite-type-domain-over-field: mathematical-premise
  thm-serre-vanishing: mathematical-premise
  lem-eventual-global-generation-coherent-twists: mathematical-premise
  def-axiom-of-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
  - title: Brambila-Paz, Grzegorczyk and Newstead, Geography of Brill–Noether loci
      for small slopes
    url: https://arxiv.org/pdf/alg-geom/9511003v1
    locator: 'Section2.1: Xiao induction, reconstructed with the exact slope bounds'
  - title: Feyzbakhsh, Koseki, Liu and Rekuski, Stability conditions on Calabi–Yau
      threefolds via Brill–Noether theory of curves
    url: https://arxiv.org/pdf/2509.24990v2
    locator: Section4.1, the classical/nonhyperelliptic BN inequalities
verification:
  precheck: pass
  judge:
    model: gpt-6-luna
    verdict: pass
    date: 2026-11-06
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-04
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
dependency_level: 0
---

## Statement

Assume AC. Let $C$ be a smooth connected projective complex curve of genus $g\ge1$, and define $\operatorname{BN}_C$ as the limsup of $h^0(E)/\operatorname{rk}E$ over stable bundles whose slope tends to $g-1$. Every semistable bundle of rank $n>0$ and degree $d$ with $0\le d/n\le2g-2$ satisfies
$$h^0(E)\le d/2+n.$$
Thus $\operatorname{BN}_C\le(g-1)/2+1$. If $C$ is nonhyperelliptic, then $g\ge3$ and every semistable bundle with $1\le d/n\le2g-3$ satisfies
$$h^0(E)\le d/2+n/2,$$
so $\operatorname{BN}_C\le g/2$. In particular the latter bound holds if $\omega_C$ is very ample. Hyperelliptic means admitting a degree-two morphism to $\mathbb P^1$.

## Facts & Assumptions

**Given:** A smooth connected projective complex curve. The degree of a vector bundle E is χ(E)−rk(E)χ(O), equivalently its determinant degree, as proved below. Semistability means every proper subbundle of smaller positive rank has slope at most deg(E)/rk(E). Work in ZF+AC.

[F1] [[thm-riemann-roch-euler-characteristic-curve]] gives the line-bundle Euler identity, and [[thm-serre-duality-curves-vector-bundles]] identifies h1(E) with h0(E*ω), including the normalized canonical trace.

[F2] [[thm-integral-closure-finite-finite-type-domain-over-field]] constructs finite normalizations of the image curves below; normal curves over C are smooth. [[lem-normalization-lowers-arithmetic-genus-delta]] gives $p_a(B)≥g(normalization)$. The special low-degree genus estimate and the needed hyperplane-position statement are proved below, rather than imported as a Castelnuovo theorem.

[F3] [[thm-serre-vanishing]] and [[lem-eventual-global-generation-coherent-twists]] supply finite generation and eventual vanishing in the Hilbert-function and maximal-slope constructions. Localizations of monomial polynomial rings and exact multiplication by a hyperplane form give the displayed coordinate Hilbert functions.

[F4] [[def-axiom-of-choice]] is the ambient premise for bases and general choices.

## Proof

1.1 Line-bundle Clifford from a valuation calculation. Let C be a smooth connected projective curve of genus $g≥1$. Let L have degree $d∈[0,2g−2]$. If $h0(L)=0$ there is nothing to prove. If $h1(L)=0$, Riemann–Roch gives $h0(L)=d+1−g≤d/2+1$. Otherwise put $p=h0(L)>0$ and $q=h0(ω_C L^{-1})>0$. At a smooth point choose bases of these two section spaces with strictly increasing vanishing orders $a1<…<ap$ and $b1<…<bq$: each graded piece of the order filtration is at most one-dimensional. The products s1t1,…,s1tq,s2tq,…,sptq have pairwise strictly increasing orders. They are independent global canonical sections. Thus $p+q−1≤g$. Serre duality and Riemann–Roch give $p−q=d+1−g$, hence $2p≤d+2$. This proves the rank-one bound directly. [F1, F3, F4, given, algebra]

2.1 The same argument proves $h0(ω_C)=g$ and deg $ω_C=2g−2$ from the supplied duality/Riemann–Roch identities. Euler degree for vector bundles agrees with determinant degree: inject a sufficiently negative line bundle of rank-many copies by generic independent sections of a positive twist, avoiding rank drop at the finitely many chosen points. The cokernel has finite length, equal to the determinant zero divisor; Euler additivity proves $χ(E)=\operatorname{deg}(\operatorname{det} E)+rk(E)(1−g)$. [F1, F3, F4, step 1.1, algebra]

3.1 The low-degree Castelnuovo estimate needed for the equality case. A nondegenerate integral complex curve $B⊂P^r$ of degree 2r, $r≥2$, has arithmetic genus at most r+1. A degree-r nondegenerate integral curve has arithmetic genus zero. [F1, F2, F3, F4, step 2.1, algebra]

4.1 Here are the geometric and Hilbert-function details. A general hyperplane meets B at distinct smooth points. Its hyperplane-section monodromy is the full symmetric group: the incidence of ordered distinct smooth pairs lying in a hyperplane is irreducible (over the irreducible pair space its fiber is the projective space of hyperplanes through their line), so monodromy is two-transitive. An ordinary tangent hyperplane supplies a transposition. Such a hyperplane exists by taking a general smooth point p and a hyperplane containing its tangent line but not its osculating plane, and avoiding the finite singular set and other tangencies. In characteristic zero the osculating plane is generically genuinely a plane unless B is a line. For $r≥3$, hyperplanes tangent also at a varying second point have one smaller dimension: generically the two tangent lines span a three-space. If all general tangent lines met the fixed tangent line, projection from that line would have zero derivative and would be constant in characteristic zero, putting B in a plane, contrary to nondegeneracy. For a plane curve, the calculation $ℓ(p)·p=ℓ(p)·p'=0$ and hence $ℓ'(p)·p=0$ shows that the tangent to the dual curve recovers p; the general tangent line is tangent at just that point, with contact two. A transverse local pencil at an ordinary tangency is $z²=t$ and exchanges just the two meeting points. Two-transitivity conjugates this transposition to every transposition, proving the claimed symmetric monodromy. [F1, F2, F3, F4, step 3.1, algebra]

5.1 Consequently a general hyperplane section of degree d has its points in linear general position. Indeed it spans the hyperplane: a second linear form vanishing on all those simple points divided by its defining form would be a regular function on the normalization of B and hence constant. Some r of the points are therefore independent. Full symmetric monodromy, and the closed determinant equations for dependence, make every r-subset independent for a general hyperplane. [F1, F2, F3, F4, step 4.1, algebra]

6.1 For $d=2r$, let $h_D(n)$ be the coordinate Hilbert function of this reduced hyperplane section $D⊂P^{r−1}$. Then $h_D(1)=r$, $h_D(2)≥2r−1$, and $h_D(n)=2r$ for $n≥3$. To prove the latter bounds explicitly, any selected 2r−1 points can be separated by quadratic forms: for each selected point, partition the other 2r−2 into two sets of r−1, choose the hyperplane through each set avoiding that point, and multiply. Cubics separate all 2r points by distributing their other 2r−1 points into sets of r−1,r−1,1. Linear general position provides each avoiding hyperplane. The same construction with $d=r$ gives $h_D(n)=r$ for every $n≥1$. [F1, F2, F3, F4, step 5.1, algebra]

7.1 Let $A_B$ be the homogeneous coordinate domain. Multiplication by a general hyperplane form is injective, and $A_B/(h)$ surjects onto the saturated coordinate ring of D. Thus $h_B(n)−h_B(n−1)≥h_D(n)$. Summing to a large n and using $h_B(n)=dn+1−p_a(B)$ gives $p_a(B)≤\sum _{n≥1}(d−h_D(n))$. This is at most r+1 when $d=2r$, and zero when $d=r$. These are the exact estimates asserted, with no general Castelnuovo theorem assumed. The actual genus–delta normalization identity then gives the same upper bound on the normalization genus. [F1, F2, F3, F4, step 6.1, algebra]

8.1 Strict line Clifford on a nonhyperelliptic curve. Suppose C is nonhyperelliptic and $g≥3$. For every line bundle of degree $1≤d≤2g−3$, [F1, F2, F3, F4, step 7.1, algebra]

9.1 $h0(L)≤d/2+1/2$. [F1, F2, F3, F4, step 8.1, algebra]

10.1 It suffices to exclude equality $2h0(L)=d+2$ in the classical bound. If h0 or h1 is at most one the endpoint degree equations already exclude such equality. Otherwise put $p=h0(L)≥2$, $q=h1(L)≥2$; equality gives $d=2p−2$ and $g=p+q−1≥p+1$. Both L and $ω_C L^{-1}$ are basepoint-free: removing any base point keeps its h0 but lowers its degree by one, contradicting §1. [F1, F2, F3, F4, step 9.1, algebra]

11.1 Consider the map of L into $P^{p−1}$. If $p=2$ it is a degree-two map to P1, contrary to nonhyperellipticity. Otherwise put $r=p−1≥2$. If the map is birational onto its image of degree 2r, §2 gives $g≤r+1=p$, contradiction. Its degree e is therefore at least two. A nondegenerate curve in $P^r$ has degree at least r (its general hyperplane section spans $P^{r−1}$); hence $2r=e$ deg(image) forces $e=2$ and image degree r. Section 2 makes that image's normalization genus zero. A smooth genus-zero complex curve is P1: Riemann–Roch gives a degree-one function after choosing one point. Thus C has a degree-two map to P1, again a contradiction. This proves the strict bound. [F1, F2, F3, F4, step 10.1, algebra]

12.1 The maximal-proper-slope induction, with all quotient bounds. For a semistable bundle E of rank $n≥2$ choose a saturated proper subbundle E1 of MAXIMAL slope, and put $E2=E/E1$. Such a maximum exists: eventual generation of E* embeds E into $O_C(m)^N$. Taking exterior powers bounds the degree of every rank-r subbundle by r m deg $O_C(1)$. There are only finitely many ranks and their degree slopes form discrete bounded-above sets. Saturation raises degree and makes the quotient a bundle. [F1, F3, F4, step 11.1, algebra]

13.1 E1 and E2 are semistable. A destabilizing subbundle of E1 would contradict maximality. For E2, a proper subbundle G of slope greater than $μ(E2)≥μ(E)≥μ(E1)$ would have a proper preimage in E of slope greater than μ(E1), another contradiction. [F1, F3, F4, step 12.1, algebra]

14.1 Fix $a=0$ or1 and $U=2g−2−a$. Suppose $μ(E)∈[a,U]$ and $h0(E)>a$ n, $h1(E)>a$ n (for $a=0$ these are simply nonzero). Evaluation at any a distinct points has target dimension a n. A nonzero section in its kernel gives a saturated line subbundle of degree at least a, so $μ(E1)≥a$. Applying the same observation to $E*ω_C$, using Serre duality, gives a nonzero quotient line Q of E with degree $q≤U$. Its rank-(n−1) kernel has slope at most μ(E1). Thus $d−q≤(n−1)μ(E1)$, and, writing $r1=rk(E1)$, [F1, F3, F4, step 13.1, algebra]

15.1 $μ(E2)=(d−r1μ(E1))/(n−r1) ≤[q+(n−1−r1)μ(E1)]/(n−r1)≤U$. [F1, F3, F4, step 14.1, algebra]

16.1 Also $μ(E1)≤μ(E)≤U$ and $μ(E2)≥μ(E)≥a$. Both smaller-rank factors therefore lie in the SAME closed slope interval [a,U]. This is the missing precise inequality behind the short source phrase 'one sees easily'. [F1, F3, F4, step 15.1, algebra]

17.1 For $a=0$, the non-special cases follow from Riemann–Roch; otherwise induct with the rank-one result §1, sum $h0(E)≤h0(E1)+h0(E2)$, and add their degrees/ranks. It gives $h0(E)≤d/2+n$ for every semistable bundle of slope[0,2g−2]. [F1, F3, F4, step 16.1, algebra]

18.1 For $a=1$ on a nonhyperelliptic C, if $h0(E)≤n$ then $h0(E)≤(d+n)/2$ because $d≥n$. If $h1(E)≤n$, Riemann–Roch gives $h0(E)≤d+n(2−g)≤(d+n)/2$ because $d≤n(2g−3)$. In the remaining case the preceding induction applies with §3 as its rank-one base, yielding $h0(E)≤d/2+n/2$ for every semistable bundle of slope[1,2g−3]. No tensor-product semistability or unitary representation theorem is used. [F1, F3, F4, step 17.1, algebra]

19.1 The exact BN consequences. For a smooth C of genus $g≥2$, the neighborhood of g−1 is inside[0,2g−2], so the rank-independent first estimate gives $BN_C≤(g−1)/2+1$ by taking the defining limsup. On a nonhyperelliptic curve $g≥3$, use[1,2g−3] to obtain $BN_C≤g/2$. The genus-one first estimate follows separately: negative slope has no sections, positive slope has $h1=0$ by duality and semistability, and slope zero has $h0≤\operatorname{rank}$ by the $a=0$ induction. Thus $BN_C≤1$ there as well. [F1, F3, F4, step 18.1, algebra]

20.1 If $ω_C$ is very ample then C is nonhyperelliptic. Indeed a degree-two map $π:C→P1$ would give $L=π*O(g−1)$, of degree2g−2 and at least g sections. Riemann–Roch makes $h1(L)≥1$, so Serre duality supplies a nonzero map $L→ω_C$ of degree zero, necessarily an isomorphism. Then every canonical section is pulled back (both spaces have dimension g), contradicting separation of the two points of a general fiber. This proves the exact canonical-very-ample implication used in the weighted X6,6 correction, without a gonality theorem imported as a premise. [F1, F3, F4, step 19.1, algebra] ∎

## Remarks

The proof includes the rank-one equality argument, the needed special Castelnuovo estimate, and the precise maximal-proper-slope quotient inequalities. No Re/Mercat theorem or tensor-product semistability is a logical premise. Actual source reading was BPGN Section2.1 and FKLLR Section4.1; no full reading of Re/Mercat is claimed.
