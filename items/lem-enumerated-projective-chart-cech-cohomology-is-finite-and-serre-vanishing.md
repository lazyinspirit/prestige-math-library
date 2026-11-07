---
dependency_level: 1
id: lem-enumerated-projective-chart-cech-cohomology-is-finite-and-serre-vanishing
kind: lemma
title: Projective standard-chart Cech finiteness and Serre vanishing in ZF
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
deps:
- def-noetherian-ring-and-module
- lem-finite-modules-over-noetherian-rings-are-noetherian
- def-finitely-presented-module-and-algebra
- thm-well-ordering-principle
- thm-recursion
- lem-zero-in-a-localised-module
- thm-localisation-of-modules-is-exact
- thm-localisation-of-modules-is-tensor-product
- thm-associativity-of-balanced-tensor-products
- thm-flatness-criteria-by-injections-and-ideals
- def-cech-cochain-complex-open-cover
- def-cohomology-object-of-a-cochain-complex
- thm-long-exact-sequence-in-cohomology
- lem-enumerated-noetherian-flat-complex-has-universal-finite-replacement
- def-relative-projective-space-standard-charts
- def-polynomial-ring-on-a-family-of-indeterminates
- def-direct-sum-of-a-family-of-modules
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
axiom_use: ZF with GIVEN enumeration and finite chart-module gluing. Only choice-free
  provider clauses are adopted. Arbitrary coefficient modules are unrestricted; geometric
  affine comparison is restricted to supplied enumerated Noetherian bases.
sources:
  references:
  - title: The Stacks Project, Lemma30.8.1, projective-space twisting-sheaf cohomology
    url: https://stacks.math.columbia.edu/tag/01XT
    locator: Complete current local statement/proof, including the explicit monomial
      contraction and n=0 case, read from saved HTML/text. No general derived-sheaf/affine-acyclicity
      theorem is imported; the restricted finite-chart proof is supplied locally.
---

## Statement

Work in ZF. Let $A$ be a Noetherian commutative ring with a GIVEN surjection $\mathbb N\to A$, and let $n\ge0$. For $0\le i\le n$ put $A_i=A[x_j/x_i:j\ne i]$, the standard projective chart algebra. Suppose $F$ is GIVEN by a finitely presented $A_i$-module $F_i$ on each chart, with specified localization isomorphisms on chart overlaps satisfying the identity and triple cocycle. Define $F(t)$ by tensoring those transition maps with the standard $\mathcal O(t)$ transitions, for $t\in\mathbb Z$. For a nonempty index set $I$, let $F_I$ be the corresponding overlap localization, identified by the Given maps. Define the ALGEBRAIC ordered Čech complex
$$C^p(F)=\bigoplus_{|I|=p+1}F_I,\qquad (\delta c)_{i_0\cdots i_{p+1}}=\sum_{j=0}^{p+1}(-1)^j c_{i_0\cdots\widehat{i_j}\cdots i_{p+1}}\big|_I,$$
with terms zero outside degrees $0,\ldots,n$.

Then every $H^q(C(F))$ is a finitely generated $A$-module. There is an integer $t_0$ such that, for every $t\ge t_0$, all positive $H^q(C(F(t)))$ vanish and $F(t)$ is generated on every chart by finitely many compatible global sections. The chart/overlap modules and Čech terms have specified enumerations obtained from the Given finite presentation data. A coherent module on a specified closed projective subscheme fits the statement through its finite chart quotient modules.

If each $F_i$ is flat as an $A$-module, there are a bounded nonnegative complex $E$ of finite projective $A$-modules, finite free in positive degrees, and a chain map $\gamma:E\to C(F)$ such that $\gamma\otimes_A1_M$ is a quasi-isomorphism for EVERY $A$-module $M$, with no enumeration assumption on $M$. For any $A$-algebra $B$, tensoring $C(F)$ with $B$ is the algebraic Čech complex of the base-changed chart-module data, naturally in $B$.

The actual affine sheaf/section interpretation and finite-affine-cover Čech refinement comparison in the supplied enumerated affine chart category are asserted only on a SUPPLIED ENUMERATED Noetherian base and its chart localizations, including a base-changed $B$ when it has those extra Given properties. No general derived-sheaf/injective-resolution comparison, and no identification $B=\Gamma(\operatorname{Spec}B,\mathcal O)$ for arbitrary unenumerated $B$, is asserted. The zero ring/modules, $n=0$, all integer twists, and empty finite generator lists are included.

## Facts & Assumptions

**Given:** ZF, the ring enumeration and the explicit finite standard-chart module/cocycle data in the Statement.

[F1] Noetherian means the finite-generation definition, and submodules and quotients of finite modules are finite; finite presentations are matrices between finite free modules. The DC-conditional converse from chain stabilization is not used. [[def-noetherian-ring-and-module]] [[lem-finite-modules-over-noetherian-rings-are-noetherian]] [[def-finitely-presented-module-and-algebra]]

[F2] Nonempty subsets of $\mathbb N$ have least elements and a specified successor function has a unique iterated sequence by ordinary recursion. No computability or dependent-choice selection is assumed. [[thm-well-ordering-principle]] [[thm-recursion]]

[F3] A localized element is zero exactly when some denominator kills its numerator. Localization is exact, is tensoring with the localized ring, and commutes with tensor coefficient change by the natural balanced-tensor associativity maps. [[lem-zero-in-a-localised-module]] [[thm-localisation-of-modules-is-exact]] [[thm-localisation-of-modules-is-tensor-product]] [[thm-associativity-of-balanced-tensor-products]]

[F4] We use the ordered Čech alternating restriction formula on the supplied module data; its square-zero identity follows by the same two-deletion cancellation. Algebraic cohomology is kernel modulo image; termwise short exact sequences of cochain complexes have long exact cohomology sequences. These are complexes of modules, not derived-sheaf resolutions. [[def-cech-cochain-complex-open-cover]] [[def-cohomology-object-of-a-cochain-complex]] [[thm-long-exact-sequence-in-cohomology]]

[F5] Flatness is preservation of tensor injections; finite direct sums of flat modules remain flat by coordinatewise injectivity. [[thm-flatness-criteria-by-injections-and-ideals]]

[F6] An enumerated Noetherian bounded nonnegative flat complex with GIVEN finite cohomology has a finite projective replacement universally tensor-equivalent for all unrestricted coefficient modules, in ZF. [[lem-enumerated-noetherian-flat-complex-has-universal-finite-replacement]]

[F7] The standard chart coordinate changes are $x_\ell/x_i=(x_\ell/x_j)/(x_i/x_j)$ with reciprocal coordinate on each pair overlap. Only these coordinate formulas are used; the restricted geometric interpretation is proved below rather than adopting a general all-base comparison. Polynomial modules and direct sums have their finite monomial/support descriptions. [[def-relative-projective-space-standard-charts]] [[def-polynomial-ring-on-a-family-of-indeterminates]] [[def-direct-sum-of-a-family-of-modules]]

## Proof

**Proof technique:** finite affine unit identities, Laurent-monomial contractions, coordinate-power extension of local generators, finite sum-of-twists covers and descending Čech inductions; then apply the enumerated flat-complex replacement.

**Given:** Exactly the Statement data in ZF.

1.1 If $A=0$, its unital chart modules are zero and every assertion follows from the zero complexes and empty lists. If all the given chart modules are zero, take $t_0=0$, the zero replacement and empty generator lists directly. In the remaining nonzero case its enumeration gives enumerations of finite polynomial expressions, quotients, localizations and finite modules from their given generators. Kernels are enumerated by retaining a coded element when it satisfies the defining equation and returning zero otherwise; quotients inherit enumerations. All finite data have natural-number codes, so [F2] selects least witnesses whenever desired. This is not a claim that membership predicates or those searches are computable. The Given restriction cocycle makes two successive deletions commute, and their two alternating signs are opposite, so $\delta^2=0$ already on the algebraic data. Every selection below is either one finite list or a specified least-code recursion. [F2, F7, given, construct]

1.2 Compute first the algebraic complex for $\mathcal O(a)$. Write $S=A[x_0,\ldots,x_n]$. Its degree-$p$ term is the degree-$a$ part of $\bigoplus_{|I|=p+1}S_{\prod_{i\in I}x_i}$. Laurent monomials have exponent vectors $m\in\mathbb Z^{n+1}$ with $\sum m_i=a$; the term for $I$ admits precisely those with $N(m)=\{i:m_i<0\}\subset I$. The differential respects these weights. If $N(m)$ is nonempty and proper, take its least missing vertex $v$. The coefficient complex contracts by $ (hc)_J=(-1)^{\operatorname{pos}(v,J\cup\{v\})}c_{J\cup\{v\}}$ when $v\notin J$, and zero otherwise. Toggling $v$ preserves containment of $N(m)$. Expanding $\delta h+h\delta$, terms deleting another vertex occur twice with opposite signs; the term deleting $v$ has coefficient $+1$ and is $c_J$. Thus this sum is the identity, with no missing bottom augmentation since $N(m)\ne\varnothing$. If $N(m)=\varnothing$, augment by $A$ in degree $-1$ with its diagonal differential and take $v=0$; the same formula, including $J=\varnothing$, contracts this augmented simplex. Removing the augmentation leaves precisely the constant $A$ in degree zero of the unaugmented complex. If $N(m)$ contains every vertex, the only term is $A$ in degree $n$. These maps preserve finite monomial support, so assemble over the direct sum without any infinitely selected lifts. [F4, F7, construct, algebra]

2.1 The chart rings are Noetherian without a chain-selection argument. For an ideal $J\subset A[x]$, take the empty generator list if $J=0$. Otherwise its leading coefficients, together with zero, form an ideal of $A$. Choose finitely many nonzero generating leading coefficients and polynomial witnesses $f_i\in J$. Let $d$ bound their degrees. The submodule $J\cap A[x]_{<d}$ of $A^d$ is finite by [F1]; choose its finite generators. Cancelling a polynomial's leading coefficient by shifted multiples of the $f_i$ and descending its degree expresses it in these finitely many polynomials. Thus $A[x]$ is Noetherian. Iterate through finitely many variables. The same contraction-of-numerators argument makes every localization Noetherian. Finite module kernels and quotients on the finitely many charts therefore retain finite presentations. Only finite witness lists, not arbitrary chains, have been selected. [F1, F3, step 1.1, construct, algebra]

2.2 On any supplied enumerated ring $B$, every proper ideal lies in a maximal ideal: process its enumeration, adjoining the next element precisely when the enlarged ideal is proper. Ordinary recursion [F2] gives a nested sequence of proper ideals; its union stays proper because a unit equation is finite. An element rejected at its stage generates the unit ideal modulo the union, so that union is maximal and hence prime. Consequently a set of principal opens covering $\operatorname{Spec}B$ has a finite unit-ideal witness, or a greedy maximal ideal containing their proper generated ideal would be an uncovered point. The argument applies to all enumerated chart localizations. It also gives the expected principal-open restrictions: if $D(g)\subset D(f)$, $f$ must be a unit in $B_g$, since otherwise a greedy maximal ideal containing $f$ there would give a point of $D(g)$ outside $D(f)$. [F2, F3, step 1.1, construct, algebra]

2.3 There are finitely many nonnegative exponent vectors of fixed total $a$, and finitely many all-negative ones of that total. Hence each cohomology module of $\mathcal O(a)$ is finite free. For $n\ge1$, only degrees zero and $n$ can contribute, and the top group vanishes for $a\ge-n$; in particular all positive groups vanish for $a\ge0$. When $n=0$, there is just one exponent $(a)$: the nonnegative and all-negative alternatives both contribute $A$ in degree zero, for every integer $a$, and no positive group. This is also the direct one-chart computation on $\operatorname{Spec}A$. Every Čech complex under consideration is zero above $n$. [F4, F7, step 1.2, algebra]

3.1 For any $B$-module $L$, even uncountable, the basis presheaf $D(f)\mapsto L_f$ has the sheaf equalizer property on finite principal covers of an enumerated affine base. If a section vanishes on each member, finitely many denominator powers kill it and a unit identity in those powers kills it globally. To glue compatible fractions $m_i\in L_{f_i}$, choose a common power clearing their finitely many denominators and the finitely many discrepancies of their overlap identities. With $1=\sum_i a_if_i^N$, the element $m=\sum_i a_i(f_i^Nm_i)$ is defined in the module and restricts to each $m_i$; the clearing ensures those equalities before the extra localizations, by [F3]. An arbitrary cover of a principal open has a finite principal refinement: collect ALL subordinate basis members, apply step 2.2, and assign only the resulting finitely many members to their cover opens. Thus this basis presheaf extends to the actual associated module sheaf without changing its principal-open values. In particular $\Gamma(\operatorname{Spec}B,\widetilde L)=L$ on this enumerated base. No such argument is made for a ring without the supplied enumeration. [F3, step 2.2, construct, algebra]

4.1 The positive Čech groups of an affine module on a finite principal cover vanish by an explicit finite formula. Write a cocycle $c$ as alternating cochains, with repeated-index terms zero. Choose $N$ large enough that $f_i^Nc_{iJ}$ descends from the localization at $f_i$ to the module localized only at the $J$-coordinates, for every one of the finitely many indices. Increase $N$ to kill the finitely many discrepancies when lifting its cocycle identities before that extra localization; [F3] permits this. Choose $1=\sum_i a_if_i^N$ and set $b_J=\sum_i a_if_i^Nc_{iJ}$. The alternating cocycle identity gives $\delta b=c$, since all the identities were cleared and the coefficients sum to one. Thus no infinite family of preimages was selected. Its degree-zero kernel is the module by step 3.1. On the standard projective charts and intersections this proves the actual section interpretation of the specified module gluing data. Morphisms are recovered from the module maps; a module with all prime localizations zero is zero here, because a nonzero element's proper annihilator lies in a greedy maximal ideal. [F3, F4, step 2.2, step 3.1, construct, algebra]

4.2 Extend a local generator $g\in F_i$ to a compatible twisted global section. On chart $j$ its overlap image has the form $u_j/(x_i/x_j)^{a_j}$ in $(F_j)_{x_i/x_j}$. Choose these finitely many representatives and $m\ge\max_j a_j$. Multiplication by $(x_i/x_j)^m$ gives chart sections of $F(m)$ extending $x_i^m g$ where chart $i$ meets them. Their discrepancies on a chart-pair overlap vanish after additionally inverting $x_i$. By [F3], a power of that coordinate kills each discrepancy; there are finitely many pairs, so one common further power does so for all. Multiplying by the global section $x_i^N$ makes them glue to a section of $F(m+N)$ whose coefficient in the $x_i^{m+N}$ frame on chart $i$ is exactly $g$. The twist transition in [F7] is exactly what makes these multiplications compatible across overlaps. [F3, F7, step 3.1, construct, algebra]

5.1 Apply step 4.2 to the finite local generator list on each of the finitely many charts. The resulting sections define a surjection $E_0=\bigoplus_j\mathcal O(-a_j)\to F$. On each chart its image contains the given generators, using the corresponding unit coordinate frame. Its kernel is coherent chart data: a submodule of a finite free module over a Noetherian chart ring is finite, hence finitely presented by applying [F1] to the finite-presentation kernel; exact localization identifies the overlap kernels and their cocycle. Thus one can form exact rows $0\to F_{j+1}\to E_j\to F_j\to0$, starting with $F_0=F$, and every $E_j$ a finite sum of twists. Only a specified FINITE number of these rows will be used, never a countable free resolution or a choice of presentations for all coherent data simultaneously. [F1, F3, step 2.1, step 4.2, construct, algebra]

6.1 A short exact row of these chart data gives a termwise short exact row of algebraic Čech complexes, by exactness on each overlap module. Its long exact sequence is [F4]. Explicitly, a connecting class is represented by lifting one cycle and taking its differential in the kernel; its independence of the finite witnesses defines a unique class, and the usual finite kernel/image chase proves exactness. This uses no injective resolutions or general derived-sheaf comparison. [F3, F4, step 5.1, algebra]

7.1 Descend on $q$ to prove finite generation for EVERY coherent chart datum. Above $n$ it holds because the complex is zero. For a given $F$, use one cover row of step 5.1. The exact segment $H^q(C(E_0))\to H^q(C(F))\to H^{q+1}(C(F_1))$ makes $H^q(C(F))$ an extension of a quotient of the first module by a submodule of the last. The first is finite by step 2.3; the last is finite by the induction hypothesis applied to $F_1$. [F1] and finitely many lifts of generators make the middle finite. The finite downward induction reaches $q=0$. Its universal quantifier in $F$ does not choose a presentation for all $F$ at once. [F1, F4, step 2.3, step 5.1, step 6.1, algebra]

7.2 For a fixed $F$, take finitely many rows of step 5.1 through $E_0,\ldots,E_n$. For all sufficiently large $t$, every positive group of all those finite twist sums $E_j(t)$ vanishes by step 2.3. Their exact sequences give $H^q(C(F(t)))\cong H^{q+1}(C(F_1(t)))\cong\cdots$ for $q>0$ until the right side is in a degree above $n$, hence zero. A common bound is a maximum over only the finitely many summand degrees. It works simultaneously for all positive $q$ and all larger $t$. This is finite dimension shifting, not infinite dependent selection. [F4, step 2.3, step 5.1, step 6.1, algebra]

8.1 For $t\ge\max_j a_j$, $E_0(t)$ is globally generated: its summand $\mathcal O(t-a_j)$ has the finitely many nonnegative-degree monomial sections, including the unit frame $x_i^{t-a_j}$ on chart $i$. Their finitely many images under $E_0(t)\to F(t)$ generate on every chart. Increasing the bound in step 7.2 to this finite maximum proves the simultaneous vanishing and generation Statement. When $n=0$, this is simply generation of the supplied finite $A$-module, with no positive cohomology in any twist. [F7, step 2.3, step 5.1, step 7.2, construct, algebra]

8.2 The finite chart presentations and the enumeration of $A$ specify enumerations of all chart/overlap modules and the finite Čech terms. If every $F_i$ is $A$-flat, its overlap localizations remain $A$-flat: tensor an arbitrary injection of $A$-modules with $F_i$, then localize this injection as a chart-module map, using [F3]. Finite direct sums remain flat by the injection definition [F5]. Thus $C(F)$ is a bounded nonnegative enumerated flat complex, with finitely generated cohomology supplied by step 7.1. The exact ZF replacement [F6] gives $E$, $\gamma$, and the claimed quasi-isomorphisms for every coefficient module $M$, whether countable or not. [F3, F5, F6, step 1.1, step 7.1, construct, algebra]

9.1 For any $A$-algebra $B$, tensor/localization identities [F3] identify $C(F)\otimes_AB$ with the finite algebraic Čech complex of the pulled-back module data, with the same alternating differentials; these identifications are natural in $B$. They make no assertion about arbitrary geometric affine global sections. If $B$ is also supplied enumerated and Noetherian, steps 2.2–4.1 apply to its chart rings and give the actual affine/sheaf interpretation. For finite affine covers with supplied enumerated Noetherian coordinate presentations in this category, refinement comparisons follow by the finite double Čech complex: refine each intersection by a finite principal cover; its positive rows or columns contract by step 4.1 and its degree-zero part is the original module. Eliminating those finite acyclic rows and columns gives the canonical refinement comparisons. Such refinements exist by the finite unit-cover argument in step 2.2. No general derived-sheaf/injective-resolution theorem or arbitrary unenumerated-base affine identification is used. [F3, F4, step 2.2, step 3.1, step 4.1, step 8.2, algebra]

10.1 The zero ring is in step 1.1; zero modules and empty finite generator lists give zero summands in step 5.1. The one-chart case $n=0$ and every negative twist are explicit in step 2.3. Coefficients $M=0$ give zero tensor complexes, and arbitrary uncountable nonzero $M$ remain in step 8.2. All infinite sets used in the proof have given codes or are defined sets of possible local data; no simultaneous selection from an arbitrary family occurs. The result proves precisely the specified projective-chart algebra, its restricted geometric interpretation, and its universal module-tensor clause. It does not supply arithmetic projectivity of an unspecified smooth proper model, a choice-free Hilbert quotient or all-base properness, or the original unqualified generic-Jacobian comparison. [F2, F6, step 1.1, step 2.3, step 5.1, step 8.1, step 8.2, step 9.1, algebra] ∎

## Remarks

For an arbitrary unenumerated base ring, the algebraic tensor complex is still identified by its module formulas; this is not promoted to a geometric global-section comparison. The original unqualified good-reduction theorem and the remaining projectivity/Hilbert/properness/Jacobian obligations are unchanged. No AC or DC is removed from an existing geometric supplier.
