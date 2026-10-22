---
id: thm-balanced-knot-zero-z-holomorphic-counts-define-a-polynomial-complex
kind: theorem
title: "Balanced knot zero-z holomorphic counts define a polynomial complex"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps: [def-countable-choice, def-admissible-pointed-heegaard-floer-data, lem-product-integrable-generator-neighborhoods-and-relative-tame-extension, lem-balanced-knot-zero-z-strips-have-finitely-many-domains-and-uniform-energy, thm-countable-choice-flat-endpoint-jet-universal-strip-regularity, lem-zero-marked-bounded-energy-strip-regularity-survives-collar-approximation, thm-finite-zero-marked-actual-index-one-strip-counts-under-an-energy-bound, thm-fixed-zero-marked-whitney-class-index-two-compactification-and-mod-two-cancellation, lem-continuous-whitney-classes-admit-relative-smooth-fixed-end-models, lem-unbubbled-strip-breaking-and-regular-gluing-preserve-whitney-concatenation]
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Ozsvath and Szabo, Holomorphic disks and knot invariants"
      url: "https://arxiv.org/abs/math/0209056"
      locator: "The zero-z restriction; actual counts and cancellation are assembled from the local proved suppliers below"
---

## Statement

Assume Countable Choice. Let an actual balanced $2k$-pointed Heegaard diagram for one oriented knot in $S^3$ have the complete compression disks, simultaneous boundary-parallel arc systems and cyclic marked cut components of the pointed-data definition. Write $m=h+k-1$ and let $\mathcal G=T_\alpha\cap T_\beta$ be its finite generator set. Choose a surface complex structure, positive area form and metric, and protect the diagonal and the marked and region divisors in its symmetric product as in the domain-energy theorem.

There exists a smooth nearly symmetric path $J_t$ with genuine constant endpoint collars and exact product-integrable generator charts such that the following construction is defined. On the free module
$$C_z=\bigoplus_{x\in\mathcal G}\mathbb F_2[U_1,\ldots,U_k]x$$
put
$$\partial_z x=\sum_{y\in\mathcal G}\ \sum_{[u]} U_1^{n_{w_1}(u)}\cdots U_k^{n_{w_k}(u)}y.$$
The inner sum is over actual finite-energy $J_t$-holomorphic strip orbits modulo longitudinal translation, with ends $x,y$, actual fixed-end Fredholm index one and $n_{z_i}(u)=0$ for every $i$. Its coefficients count those orbits modulo two. Only finitely many such orbits occur across all ordered generator pairs and all Whitney classes. Thus every coefficient is a polynomial, and the $\mathbb F_2[U_1,\ldots,U_k]$-linear operator satisfies $\partial_z^2=0$.

This proves the zero-$z$ count complex only, allowing positive $w$ powers. It does not prove the full filtered differential that also counts positive $z$ multiplicities, identify this complex with a separately defined invariant, supply normalized gradings, prove independence of choices or moves, or establish the grid-to-analytic comparison.

## Statement references

[[def-countable-choice]]

[[def-admissible-pointed-heegaard-floer-data|The geometric balanced-diagram convention; its full filtered differential is not substituted here.]]

## Facts & Assumptions

**Given:** The actual diagram and protected geometric data in the Statement. In this proof the marked set required to vanish in the analytic zero-marked suppliers is precisely $\{z_1,\ldots,z_k\}$. Each component of either individual attaching-system complement contains one such point. The $w$ divisors are protected for positivity and degree accounting, but their degrees are not required to vanish.

[F1] [[lem-product-integrable-generator-neighborhoods-and-relative-tame-extension]] supplies the actual initial nearly symmetric structure and product generator charts. [[lem-balanced-knot-zero-z-strips-have-finitely-many-domains-and-uniform-energy]] gives a finite set of actual zero-$z$ domains across all endpoints, indices, classes and paths with this fixed geometry, and a common domain-energy constant on a sufficiently small coefficient neighborhood.

[F2] [[thm-countable-choice-flat-endpoint-jet-universal-strip-regularity]] gives actual auxiliary regular paths and their smooth constant-collar approximants. [[lem-zero-marked-bounded-energy-strip-regularity-survives-collar-approximation]] makes sufficiently close approximants regular for all zero-marked strips below any one prescribed finite energy bound.

[F3] [[thm-finite-zero-marked-actual-index-one-strip-counts-under-an-energy-bound]] proves actual finiteness of the index-one translation quotient under that energy bound. [[thm-fixed-zero-marked-whitney-class-index-two-compactification-and-mod-two-cancellation]] gives the actual compactified one-manifold and even broken-boundary count for every fixed zero-marked class of index two whose class energy bound is below the same regularity threshold. Its proof establishes divisor-degree invariance and concatenation additivity for every region and marked divisor.

[F4] [[lem-continuous-whitney-classes-admit-relative-smooth-fixed-end-models]] defines the actual continuous Whitney-class index, proves its additivity under concatenation and identifies it with actual strip index. [[lem-unbubbled-strip-breaking-and-regular-gluing-preserve-whitney-concatenation]] identifies the actual broken and glued classes with this concatenation. No domain formula for the index is assumed.

## Proof

1.1 If $m=0$, then $h=0,k=1$, the symmetric product is a point, and the generator set consists of its one point. Its only strip is constant and has index zero on the zero-dimensional section space. Therefore $\partial_z=0$ and the conclusion is direct. Suppose $m>0$. Apply [F1] to obtain a background with exact generator charts avoiding the finitely many protected divisors and diagonal. Choose separated smaller compact generator neighborhoods and a protected compact neighborhood of those divisors and diagonal. They satisfy the separated spatial-set hypotheses in [F2]; the free spatial closure lies away from the diagonal, where the descended product form is smooth. Take a small coefficient neighborhood with all these protected data fixed, small enough that one constant $C$ works in the domain-energy estimate by [F1]. The finite set $\mathcal D$ of actual zero-$z$ domains supplied there works for every path under consideration. Define $$G=1+\max\left(\{0\}\cup\left\{C\sum_R n_R(D)\int_R\eta:D\in\mathcal D\right\}\right).$$ Actual region coefficients are nonnegative. Hence every actual zero-$z$ strip has energy less than $G$, regardless of index or class. This is a bound for the entire domain set, not a bound imposed by deleting classes. Empty actual domain sets use $G=1$. [F1, F2, given, construct, algebra]

2.1 Choose an auxiliary all-strip regular path in that neighborhood using [F2], and apply its actual collar-approximation theorem at threshold $E_0=3G$. A sufficiently close approximant is a smooth genuine constant-collar path with the same protected geometry and common $C$, regular for every nonconstant zero-$z$ strip of energy at most $3G$. Fix this ONE path for the remainder of the proof. Every strip used below is for this same path. By [F3] and step1.1, its index-one translation quotient is finite across all classes and generator pairs. All such strips are nonconstant: a constant generator strip has the constant-class index zero by [F4], agreeing with its actual transverse constant operator. The finite counts in the Statement are therefore precisely these regular rigid orbits, and their nonnegative integral $w$ multiplicities give the stated finite polynomial formula. Extend it linearly over the polynomial ring. [F1, F2, F3, F4, step 1.1, construct]

3.1 Fix generators $x,z$. The coefficient of $z$ in $\partial_z^2x$ is a finite sum over ordered pairs of rigid orbits $u:x\to y$, $v:y\to z$ and their intermediate generator $y$, with weight $$U^{\mathbf n_w(u)+\mathbf n_w(v)}.$$ Group these finitely many pairs by the actual continuous concatenated Whitney class $\phi=[u]*[v]$. By [F4] its index is two, and by the divisor-degree additivity in [F3] it has $n_{z_i}(\phi)=0$ and $n_R(\phi)=n_R(u)+n_R(v)\ge0$. Its class bound from [F3] satisfies $$B_\phi=C\sum_R|n_R(\phi)|\int_R\eta\le2(G-1)<3G.$$ The estimate uses the actual domains of the two rigid components, both in $\mathcal D$, and the common $C$; it does not require any formal domain to have a holomorphic representative. Thus the SAME fixed path chosen in step2.1 meets the regularity hypothesis of the fixed-class theorem for every class in this finite grouping. [F3, F4, step 1.1, step 2.1, construct, algebra]

4.1 Apply [F3] to each such class. Its compactification has boundary exactly all ordered rigid pairs of that concatenated class. Each component of any such pair has nonnegative marked degrees, so zero total $z$ degrees force both components to be zero-$z$. Every pair in that boundary is consequently among the pairs in step3.1; none was omitted by the grouping. Conversely each grouped pair occurs as an actual boundary point by the gluing and exhaustion assertion in [F3]. Their number is even. All pairs of this class have exactly the SAME monomial weight $U^{\mathbf n_w(\phi)}$ by marked-degree additivity. Their total contribution over $\mathbb F_2$ is therefore zero. Summing over the finite class grouping proves that the coefficient of $z$ in $\partial_z^2x$ is zero. This applies to every $x,z$, hence $\partial_z^2=0$ on the free polynomial module. [F3, F4, step 2.1, step 3.1, construct, algebra]

5.1 All choices and sums in this argument are justified by the actual geometric, analytic and class suppliers: a single path is selected, every rigid orbit set is finite, and every class grouping is finite. In particular there is no infinite formal sum of per-class cancellation identities, no assumption of a domain-index formula, and no replacement of the full filtered all-$z$ differential by this zero-$z$ operator. The result is the stated count complex with positive $w$ powers permitted; the further grading, invariance and comparison assertions listed outside its scope remain separate obligations. [step 1.1, step 2.1, step 3.1, step 4.1, algebra] ∎
