---
id: thm-global-field-unipotent-adelic-quotients-are-compact
kind: theorem
title: Compact adelic unipotent quotients for parabolics of GL_r
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 8
deps:
  - def-axiom-of-choice
  - def-countable-choice
  - thm-choice-implies-dependent-implies-countable-choice
  - def-global-field
  - def-adele-ring-of-a-global-field
  - thm-global-field-additive-adele-quotient-discrete-cocompact
  - thm-global-field-adeles-and-ideles-locally-compact
  - cor-existence-of-left-and-right-haar-measures
  - lem-lch-urysohn-cutoff-for-a-compact-set-inside-an-open-set
  - thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique
  - thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces
  - thm-rmk-positive-functional-is-integration-against-its-representing-measure
  - def-quotient-topology
proof_strategy: direct
axiom_use: AC and Countable Choice are explicit and inherited from the additive adelic suppliers. AC supplies DC to the compact cutoff construction. All matrix reductions use only finitely many entries.
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: J. S. Milne, Algebraic Number Theory, additive adelic compactness
      url: https://www.jmilne.org/math/CourseNotes/ANT.pdf
      locator: Chapter 7; source context for the locally supplied additive adelic theorem. The matrix and quotient-measure arguments are given locally here.
---

## Statement

Assume AC and Countable Choice. Let $F$ be a number field or a one-variable function field with exact finite constant field, and let $\mathbb A_F$ be its adele ring. Fix positive integers $r_1,\ldots,r_s$ with sum $r$. Let $N_0$ be the group of block upper-triangular $r\times r$ matrices whose diagonal blocks are identity matrices of sizes $r_1,\ldots,r_s$. For $g\in\mathrm{GL}_r(F)$ set $N=gN_0g^{-1}$. Then $N(F)$ is discrete and closed in $N(\mathbb A_F)$, and the left-coset space
$$N(F)\backslash N(\mathbb A_F)$$
is compact Hausdorff. It admits a right-$N(\mathbb A_F)$-invariant Radon probability measure. Thus this holds for the unipotent radical of every standard parabolic of $\mathrm{GL}_r$ and every $F$-rational conjugate. The partition with $s=1$, when $N=1$, is included.

## Statement references

[[thm-global-field-additive-adele-quotient-discrete-cocompact]]

[[thm-global-field-adeles-and-ideles-locally-compact]]

[[cor-existence-of-left-and-right-haar-measures]]

## Facts & Assumptions

**Given:** AC, Countable Choice, the global field $F$, its adeles, the block partition and $g\in\mathrm{GL}_r(F)$ as in the Statement.

[A1] AC implies DC and Countable Choice. [[def-axiom-of-choice]] [[def-countable-choice]] [[thm-choice-implies-dependent-implies-countable-choice]]

[F1] The additive subgroup $F$ is discrete and closed in the locally compact Hausdorff additive group $\mathbb A_F$, and $\mathbb A_F/F$ is compact. The adelic operations are continuous. [[thm-global-field-additive-adele-quotient-discrete-cocompact]] [[thm-global-field-adeles-and-ideles-locally-compact]] [[def-adele-ring-of-a-global-field]]

[F2] An LCH group has a left Haar measure under AC. For a compact subset of an LCH space there is a continuous compactly supported function at least one on that subset and nonnegative everywhere, using DC. [[cor-existence-of-left-and-right-haar-measures]] [[lem-lch-urysohn-cutoff-for-a-compact-set-inside-an-open-set]]

[F3] Sigma-finite measures have finite product measures, and integrable functions on these products satisfy Fubini's theorem. [[thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique]] [[thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]]

[F4] A positive functional on continuous compactly supported real functions on an LCH space is integration against its representing Radon measure. [[thm-rmk-positive-functional-is-integration-against-its-representing-measure]]

[F5] A coset space has its quotient topology. Global fields in the Statement are finite extensions of $\mathbb Q$ or of a rational function field over a finite field, so they are countable under the stated choice assumptions. [[def-quotient-topology]] [[def-global-field]]

## Proof

1.1 Write $A=\mathbb A_F$. There is a compact set $C\subseteq A$ meeting every additive coset modulo $F$. Indeed choose a zero neighbourhood $O$ with compact closure using local compactness in [F1]. The quotient map $q:A\to A/F$ is open, since $q^{-1}(q(V))=\bigcup_{a\in F}(a+V)$ for every open $V$. Its translates $q(x+O)$ cover the compact quotient, so finitely many, with representatives $x_1,\ldots,x_m$, cover it. The finite union $C=\bigcup_i(x_i+\overline O)$ is compact and meets every coset; enlarge it by $\{0\}$ if necessary. In particular every $a\in A$ has $a-f\in C$ for some $f\in F$. [A1, F1, F5, given, choose, construct]

2.1 Let $E$ be the set of pairs $(i,j)$ with the block of $i$ strictly before the block of $j$, and put $d=|E|$. The entries $n_{ij}$ for $(i,j)\in E$ identify $N_0(A)$ homeomorphically with $A^d$, and identify $N_0(F)$ with $F^d$ as subsets. This follows directly from the matrix equations: the remaining entries are fixed zeros and ones; at each place integral matrices correspond exactly to integral free coordinates, so the identification preserves the restricted-product topology. Hence [F1] makes $N_0(A)$ LCH and $N_0(F)$ discrete and closed. For each $(i,j)\in E$, the elementary matrix $I+tE_{ij}$ belongs to $N_0$ for any scalar $t$. Left multiplication by $I-fE_{ij}$ changes $n_{ij}$ to $n_{ij}-f$; any other changed free entry is $n_{ik}$ with $k>j$, of strictly larger height $k-i>j-i$. Thus reduce the free entries in increasing order of $j-i$, using step 1.1 to choose $f\in F$ at each step. Entries already reduced are unchanged, including others of the same height. The finite product of these rational elementary matrices lies in $N_0(F)$ and sends any $n\in N_0(A)$ to a matrix all of whose free entries lie in $C$. [F1, step 1.1, construct, algebra]

3.1 The matrices with all free entries in $C$ form the compact set $K_C$ corresponding to $C^d$. Step 2.1 says $N_0(F)K_C=N_0(A)$, so the continuous quotient map carries $K_C$ onto the left-coset space, making that space compact. It is Hausdorff: for inequivalent $x,y$, the closed subgroup $N_0(F)$ does not contain $xy^{-1}$; choose neighbourhoods $V_x,V_y$ with $V_xV_y^{-1}$ disjoint from that subgroup by continuity. Their images in the quotient are disjoint open neighbourhoods. If $d=0$, the group and quotient are single points and these conclusions hold directly. Conjugation by $g$ is a continuous automorphism of matrix groups over the topological ring $A$, with inverse conjugation by $g^{-1}$. Both matrices have entries in the diagonal copy of $F\subseteq A$. It identifies the rational subgroups and their restricted-product adelic topologies, hence induces the asserted homeomorphism of coset spaces for $N$ and $N_0$. [F1, F5, step 2.1, algebra, construct]

3.2 We give the invariant measure as well. Fix additive Haar measure on $A$ by [F2]. It is sigma-finite: $F$ is countable by [F5], and step 1.1 gives $A=F+C$, a countable union of compact sets, each of finite Haar measure. There are countably many places of $F$: each lies over one of the countably many places of its rational global subfield, with finitely many places over each. Each completion is separable metrizable, since the countable field $F$ is dense in its completion. The countably many restricted-product charts therefore have countable bases, obtained from finite cylinders in the countable local bases. Thus $A$ and its finite powers are second countable, so their Borel product sigma-algebras agree. The product measure on $A^d$ from [F3] transports to a measure $\mu$ on $H=N_0(A)$. It is both left and right invariant. In the free coordinates, multiplication by a fixed upper-block matrix changes each coordinate into itself plus a function of coordinates of strictly smaller height, since $$(xy)_{ij}=x_{ij}+y_{ij}+\sum_{i<k<j}x_{ik}y_{kj}.$$ For a compactly supported continuous function, integrate in reverse height order. At each step, the change in the coordinate being integrated is an additive translation depending only on the fixed earlier coordinates; additive Haar invariance removes it. Fubini [F3] justifies the finite succession of these integrations, for either left or right multiplication. Thus $\mu$ is bi-invariant, finite on compact sets and positive on nonempty opens. [A1, F1, F2, F3, F5, step 1.1, step 2.1, algebra]

4.1 Put $\Gamma=N_0(F)$ and $Q=\Gamma\backslash H$. Choose $b\in C_c(H)$ nonnegative and at least one on $K_C$, using [F2]. The sum $S(x)=\sum_{\gamma\in\Gamma}b(\gamma x)$ is positive and locally finite. For positivity use $\Gamma K_C=H$. For local finiteness, if $x$ varies in a relatively compact neighbourhood $W$, only $\gamma\in\Gamma\cap\operatorname{supp}(b)\overline W^{-1}$ contribute; this intersection is finite because $\Gamma$ is closed and discrete and the latter set is compact. Therefore $\beta=b/S$ is continuous and compactly supported, nonnegative, and $\sum_{\gamma\in\Gamma}\beta(\gamma x)=1$. For $f\in C(Q;\mathbb R)$ define $L(f)=\int_H\beta(x)f(\Gamma x)\,d\mu(x)$. This finite positive functional is independent of the chosen such cutoff $\beta$: insert the identity $\sum_\gamma\beta'(\gamma x)=1$, integrate each term, and put $y=\gamma x$. Left invariance of $\mu$ and $f(\Gamma\gamma^{-1}y)=f(\Gamma y)$ transform the sum into $\int_H\beta'(y)f(\Gamma y)\sum_\gamma\beta(\gamma^{-1}y)\,d\mu(y)$, which is the expression using $\beta'$. The exchanges are justified by nonnegativity for $f\ge0$, followed by subtraction for arbitrary real $f$; the sums have countably many terms by [F5]. [A1, F2, F3, F5, step 3.1, step 3.2, construct, algebra]

5.1 For $h\in H$, put $f_h(\Gamma x)=f(\Gamma xh)$. Right invariance of $\mu$ from step 3.2 gives $L(f_h)=\int_H\beta(yh^{-1})f(\Gamma y)\,d\mu(y)$. The function $y\mapsto\beta(yh^{-1})$ is again a nonnegative compact cutoff with orbit sum one, so step 4.1 proves $L(f_h)=L(f)$. Also $0<L(1)<\infty$, since $\beta$ is nonzero, continuous, nonnegative and compactly supported, and $\mu$ is positive on nonempty opens. Divide by $L(1)$. The compact Hausdorff space $Q$ from step 3.1 is LCH and satisfies $C_c(Q)=C(Q)$, so [F4] represents this normalized positive functional by a Radon probability measure. Equality of the functionals under every right translation shows invariance of that measure. Transport it by conjugation to the quotient for $N$. For $d=0$ use the point mass instead. All assertions follow. [F4, step 3.1, step 3.2, step 4.1, algebra, construct] ∎
