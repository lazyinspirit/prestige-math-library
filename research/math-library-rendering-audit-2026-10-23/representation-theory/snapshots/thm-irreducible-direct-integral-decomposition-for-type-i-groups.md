---
id: thm-irreducible-direct-integral-decomposition-for-type-i-groups
kind: theorem
title: Irreducible direct integral decomposition for type I groups
deps:
- thm-central-decomposition-into-factor-representations
- lem-type-i-factor-fields-admit-measurable-irreducible-multiplicity-splittings
- lem-multiplicity-of-a-type-i-factor-representation-is-well-defined
- thm-equivalent-characterizations-of-second-countable-type-i-groups
- def-unitary-dual-of-a-locally-compact-group
- def-axiom-of-choice
- lem-borel-relations-admit-conull-borel-uniformizations
- lem-closed-witness-codings-and-measured-projections
- thm-disintegration-of-a-joint-law-on-standard-borel-spaces
- cor-standard-borel-spaces-have-countable-generating-and-measure-determining-algebras
- lem-measurable-gram-schmidt-and-constant-field-trivializations
- lem-measurable-von-neumann-algebra-fields-have-measurable-commutants-and-centers
- thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces
- thm-monotone-convergence-for-the-integral
- thm-direct-integrals-of-measurable-hilbert-fields-are-hilbert-spaces
- thm-nondegenerate-representations-of-c-star-g-are-unitary-representations-of-g
- lem-separable-group-c-star-type-i-and-smooth-dual-criteria
- lem-gcr-kernel-and-mackey-borel-characterizations
- lem-primitive-ideals-have-standard-borel-quotient-norm-codings
- lem-local-analytic-separation-and-saturated-borel-quotients
- thm-increasing-simple-approximation-of-a-nonnegative-measurable-function
dependency_level: 8
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
  - title: Bachir Bekka and Pierre de la Harpe, Unitary Representations of Groups, Duals, and Characters (arXiv:1912.07262v1, 16 December 2019; author-hosted complete book draft)
    url: https://arxiv.org/pdf/1912.07262
    locator: 'Chapter 6, §6.D: Theorem 6.D.7 (canonical decomposition into irreducible representations for type I groups), printed pp. 201-202; Chapter 8, §8.F: Glimm theorem, printed pp. 256-259'
  - title: 'Bruce Blackadar, Operator Algebras: Theory of C*-Algebras and von Neumann Algebras (author-hosted complete text)'
    url: https://bruceblackadar.com/Mathematics/Cycr.pdf
    locator: 'Part IV, §1.5: IV.1.5.12 (type I groups have standard dual) and IV.1.5.7, printed pp. 359-361'
status: published
origin: pipeline
pipeline_run: frontier-43-complex-representation-15
proof_strategy: direct
axiom_use: AC is assumed and inherited from central decomposition, measurable splitting, class coding and conditional kernels. The additional choices are countable generating algebras, conull class/intertwiner selectors, ideal dense sequences and frame choices. No representative of every dual class is chosen. Null supports are extended by zero; zero total space uses zero measure. Conditional multiplicity spaces are nonzero because their first constant coordinate has norm one; finite and infinite dimensions are treated by measurable frames.
verification:
  audited: "2026-10-08"
  precheck: pass
---

## Statement

Assume the Axiom of Choice. Let $G$ be a second-countable locally compact group of type I and let $(\pi,H)$ be a strongly continuous unitary representation on a separable Hilbert space. Then the central decomposition of $\pi$ refines to a direct integral over the unitary dual: there exist a standard measure $\mu$ on $\widehat G$, a measurable multiplicity function $m:\widehat G\to\{1,2,\dots,\infty\}$, a measurable field $(H_\sigma)$ of Hilbert spaces over $\widehat G$ and a unitary $U:H\to\int_{\widehat G}^\oplus H_\sigma\,d\mu(\sigma)$ such that for $\mu$-almost every $\sigma$, the fibre representation is equivalent to $m(\sigma)$ copies of $\sigma$ and $$U\pi(g)U^{-1}=\int_{\widehat G}^\oplus m(\sigma)\,\sigma(g)\,d\mu(\sigma)\qquad(g\in G),$$ where the integral is formed from the multiplicity field. Null-support fibres may be taken to be zero; no representative of every class of the entire dual is asserted. For H=0 take the zero measure and zero field.

## Facts & Assumptions

[F1] A nonzero separable unitary representation admits a central factor decomposition, and type-I factor fields split measurably into irreducible fields with positive finite or countable multiplicities ([[thm-central-decomposition-into-factor-representations]], [[lem-type-i-factor-fields-admit-measurable-irreducible-multiplicity-splittings]]).

[F2] For a second-countable type-I group, the actual dual is standard Borel, Mackey and Fell Borel structures agree, and its kernel map identifies it with the standard primitive-ideal code space ([[lem-separable-group-c-star-type-i-and-smooth-dual-criteria]], [[lem-gcr-kernel-and-mackey-borel-characterizations]]). Countably many ideal-open sets form a basis and separate distinct kernels ([[lem-primitive-ideals-have-standard-borel-quotient-norm-codings]]). Fixed-carrier representation class maps and the group/C*-correspondence are Borel ([[lem-local-analytic-separation-and-saturated-borel-quotients]], [[def-unitary-dual-of-a-locally-compact-group]]).

[F3] Borel relations have completion-measurable projections, and nonempty Borel relations admit selectors on conull Borel bases ([[lem-closed-witness-codings-and-measured-projections]], [[lem-borel-relations-admit-conull-borel-uniformizations]]).

[F4] Probability joint laws on standard-Borel spaces have conditional kernels with the iterated nonnegative integral identity. A standard-Borel space has a countable separating generating algebra ([[thm-disintegration-of-a-joint-law-on-standard-borel-spaces]], [[cor-standard-borel-spaces-have-countable-generating-and-measure-determining-algebras]]).

[F5] Measurable Gram–Schmidt gives dimension strata, constant-carrier coordinates, measurable closed subfields and density of their bounded scalar localizations. Their direct integrals are Hilbert spaces ([[lem-measurable-gram-schmidt-and-constant-field-trivializations]], [[thm-direct-integrals-of-measurable-hilbert-fields-are-hilbert-spaces]]).

[F6] Measurable von Neumann algebra fields have fibrewise commutants and centres; decomposable representatives are unique almost everywhere ([[lem-measurable-von-neumann-algebra-fields-have-measurable-commutants-and-centers]]). Nondegenerate C*-representations correspond to strongly continuous group representations ([[thm-nondegenerate-representations-of-c-star-g-are-unitary-representations-of-g]]).

[F7] Nonnegative integral approximation and monotone convergence permit countable-coordinate norm sums and scalar pushforward substitution ([[thm-monotone-convergence-for-the-integral]], [[thm-increasing-simple-approximation-of-a-nonnegative-measurable-function]]). AC has the meaning of [[def-axiom-of-choice]].

## Proof

**Proof technique:** direct.

**Given:** AC and the hypotheses and notation of the Statement.

1.1 By [F2], $\widehat G$ is standard Borel. If $H=0$, take zero measure, zero Hilbert and representation fields, and $m=1$; the class identification is almost-everywhere and is vacuous, while the integral is zero. Suppose $H\ne0$. By [F1] choose a central decomposition on a nonzero sigma-finite standard-Borel base $(X,\alpha)$, then split its type-I fibres to obtain a measurable irreducible field $\tau_x$ on $K_x$ and multiplicity $k(x)\ge1$. Thus $\pi$ is the integral of $\tau_x^{\oplus k(x)}$. Pass to an equivalent probability measure $P$: partition $X$ into finite-measure Borel pieces $E_j$, use the strictly positive density proportional to $\sum_j2^{-j}(1+\alpha(E_j))^{-1}\mathbf1_{E_j}$, and normalize its finite positive integral. Multiplication by the inverse square root of this density is a unitary from the $\alpha$-integral to the $P$-integral, by the elementary density substitution on indicators, simple functions and increasing nonnegative limits [F7]; it commutes with the representation. [F1, F2, F7, given, construct]

2.1 In the constant-dimension coordinates of [F5], $x\mapsto\tau_x$ is a Borel map into the fixed-carrier representation spaces of [F2]: its basis coefficients on the countably many generating group evaluations are Borel. Hence $f(x)=[\tau_x]\in\widehat G$ is Borel. Put $\beta=f_*P$. The graph relation $R=\{(b,x):f(x)=b\}$ is Borel: a countable separating algebra of the dual expresses equality of its two labels by countably many matching membership tests. Its projected image $f(X)$ is completion-measurable by [F3] and has full $\beta$-measure, because every Borel superset pulls back to all of $X$. Choose a conull Borel $B\subseteq f(X)$ by removing a Borel null envelope of its complement. Apply [F3] on $(B,\beta)$ to select $x_b$ with $f(x_b)=b$, deleting further null exceptions if necessary. Set $\sigma_b=\tau_{x_b}$ on $E_b=K_{x_b}$; pulling back the fundamental sections and fixed-group coefficients makes this a measurable field. [F2, F3, F4, F5, step 1.1, construct]

3.1 For almost every $x$, $\tau_x$ and $\sigma_{f(x)}$ are equivalent. Select implementing unitaries measurably: on the countably many constant-dimension strata use the operator unit ball between their fixed carriers. Impose the Borel equations $v^*v=I$, $vv^*=I$ and $v\tau_x(g)=\sigma_{f(x)}(g)v$ for a fixed countable dense subset of $G$. Operator products are Borel because basis coefficients are limits of finite coordinate sums. The relation is Borel and has nonempty sections by equality of classes. Conull selection [F3] supplies $v_x$; strong continuity extends the selected identities from the dense group subset to every $g$. Apply $v_x$ in every multiplicity slot. We have now represented $\pi$ as $\int_X^\oplus\sigma_{f(x)}^{\oplus k(x)}\,dP(x)$, with a single retained conull Borel base. [F2, F3, F5, step 2.1, construct]

4.1 Apply [F4] to the joint law of $(x,f(x))$ to obtain a probability kernel $b\mapsto P_b$ on $X$ with marginal $\beta$. It is supported on $f^{-1}(b)$ for almost every $b$: for each set $C$ in a countable separating algebra of $B$, the conditional integral identity gives $P_b(f^{-1}(C))=\mathbf1_C(b)$ almost everywhere, by testing every Borel conditioning set. Remove the countable union of exceptional sets. Off it, with $P_b$-probability one, $f(x)$ and $b$ agree on all these separating sets, hence $f(x)=b$. This also proves the support assertion without presuming the fibres of $f$ are atoms of $P$. [F4, step 2.1, step 3.1, algebra]

5.1 Define $L_b=L^2(X,P_b;\ell^2(k(x)))$, interpreting the variable-coordinate space as the subspace of $\ell^2$ with coordinates $r\le k(x)$. Take a countable Borel generating algebra $\mathcal A$ of $X$, including $X$. The sections $\ell_{A,r}(b)(x)=\mathbf1_A(x)\mathbf1_{\{k(x)\ge r\}}e_r$ have Borel Gram coefficients $\delta_{rs}P_b(A\cap A'\cap\{k\ge r\})$. Their span is dense in $L_b$: indicators from a generating algebra are dense in scalar $L^2$ for every probability (the class of events whose indicators lie in their closed span is a monotone class, or a lambda-system containing the algebra), and finite-coordinate truncation then gives the vector claim. Thus these sections define a measurable separable Hilbert field. It is nonzero since $\ell_{X,1}$ has norm one. By [F5], $d(b)=\dim L_b\in\{1,2,\dots,\infty\}$ is Borel and the field has measurable orthonormal frames. [F4, F5, step 4.1, construct]

6.1 We spell out the Hilbert regrouping. On each dimension stratum of $E_b$, choose its measurable frame $(a_j(b))$ by [F5]. For an original square-integrable measurable vector section $\xi(x)$ in $E_{f(x)}^{\oplus k(x)}$, write its scalar coordinates $h_{jr}(x)$ in the frame $a_j(f(x))$ and multiplicity coordinate $r$. The conditional integral formula gives $\int\sum_{j,r}|h_{jr}(x)|^2\,dP=\int\sum_j\|(h_{jr})_r\|_{L_b}^2\,d\beta(b)$. The resulting field vector $\sum_j a_j(b)\otimes(h_{jr})_r$ is measurable: its pairings with $a_j(b)\otimes\ell_{A,r}(b)$ are conditional integrals of the Borel scalar coordinates, obtained by bounded truncation and then limits, and are finite almost everywhere by the displayed norm identity. This defines an isometry into $\int_B^\oplus E_b\otimes L_b\,d\beta$. It is onto: every bounded scalar localization $t(b)a_j(b)\otimes\ell_{A,r}(b)$ has the original measurable preimage with coordinate $t(f(x))\mathbf1_A(x)\mathbf1_{\{k\ge r\}}$, zero in other slots. Such localizations have dense span by [F5]. The range of an isometry from a Hilbert space is closed, so it is the whole target. Pointwise coordinate action shows that this unitary intertwines the representation with $\int_B^\oplus\sigma_b\otimes I_{L_b}\,d\beta$. Expanding the measurable frame of $L_b$ yields $d(b)$ copies of $\sigma_b$. [F4, F5, F7, step 3.1, step 4.1, step 5.1, algebra]

7.1 The regrouped model is central. Put $A=C^*(G)$ and $M=\pi(A)''$ in this model. For each closed ideal $J$ of $A$, the projection $Q_J$ onto $\overline{\pi(J)H}$ commutes with $\pi(A)$, because that subspace reduces the representation by the two-sided ideal property. It also commutes with $\pi(A)'$, since this commutant and its adjoints preserve the same closed span; hence $Q_J\in M\cap M'$. Fibrewise this projection is measurable: choose a countable norm-dense sequence in $J$, apply its represented operators to a countable fundamental fibre family, and use [F5] for their closed spans and projections. The integral of these fibre spans is exactly the global closed span: its bounded finite-measure scalar-localized generators are $\pi(j)$ applied to localized fundamental sections, hence lie in the global range, while every $\pi(j)\xi$ takes values in the fibre spans. The density clause of [F5] proves equality. In the irreducible fibre $\sigma_b$, this range is0 or all of $E_b$, and is0 precisely when $J\subseteq\ker\sigma_b$; thus $Q_J$ is multiplication by the indicator of the ideal-open $\{b:J\not\subseteq\ker\sigma_b\}$. By [F2] countably many such opens generate the full Borel sigma-algebra of $B$. Their scalar multipliers generate the full diagonal algebra $\mathcal D_B$: indicators extend from their generating algebra to the sigma-algebra by monotone strong limits, then bounded scalar functions follow by simple uniform approximation. Hence $\mathcal D_B\subseteq M\subseteq\mathcal D_B'$. [F2, F5, F6, step 6.1, algebra]

8.1 By [F6] the measurable algebra field generated by the irreducible amplifications has a von Neumann direct integral. Each global intertwiner is decomposable since it commutes with $\mathcal D_B\subseteq M$; on a countable dense group subset its fibres commute with the represented group operators, and strong continuity extends to every group element. Thus, exactly as for central factor fibres, every section of the fibre generated algebras commutes with each global intertwiner, hence lies in $M$; the reverse inclusion follows from the integrated group generators. Consequently $M$ is their integral and its centre is the integral of their scalar centres, namely $\mathcal D_B$. Extend the fields by zero and $d$ by1 off the conull Borel support $B$; use the probability measure $\mu=\beta$ on the whole standard dual. It is a standard measure, the extended multiplicity function is Borel, and the direct integral and fibre class statements are exactly those of the Statement with $m=d$. Centrality was proved, rather than inferred from the labels alone. [F1, F2, F6, step 6.1, step 7.1, algebra] ∎

## Boundary and source qualifications

AC is assumed and inherited from central decomposition, measurable splitting, class coding and conditional kernels. The additional choices are countable generating algebras, conull class/intertwiner selectors, ideal dense sequences and frame choices. No representative of every dual class is chosen. Null supports are extended by zero; zero total space uses zero measure. Conditional multiplicity spaces are nonzero because their first constant coordinate has norm one; finite and infinite dimensions are treated by measurable frames. No new citation exception is used. The only inherited cited premise is the exact Glimm factor-type-I-to-GCR implication in the criteria supplier, under the recorded owner authority. The complete Bekka–de la Harpe PDF pp.195–202 was consulted: its canonical decomposition uses prior structure results; here the conull selection, kernel regrouping, centrality and uniqueness arguments are written locally. No full-book or unavailable-original reading is claimed.
