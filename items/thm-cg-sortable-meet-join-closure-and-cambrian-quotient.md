---
id: thm-cg-sortable-meet-join-closure-and-cambrian-quotient
kind: theorem
title: Sortable elements form a sublattice and the c-Cambrian quotient is its lattice-homomorphic image
status: published
origin: pipeline
pipeline_run: frontier-42-coxeter-32
dependency_level: 28
deps:
  - def-cg-coxeter-oriented-euler-form-and-c-sorting-word
  - def-cg-recursive-sortable-projection-and-cambrian-congruence
  - def-cg-initial-letter-sortable-projection
  - thm-cg-sortable-skip-basis-cover-roots-and-chamber-unions
  - lem-cg-sortable-cone-criterion-and-projection-monotonicity
  - lem-cg-sortable-skips-basis-and-cover-decomposition
  - lem-cg-sortable-recursion-output-and-initial-choice-independence
  - lem-cg-uniform-omega-positive-and-aligned-sortability
  - lem-cg-greedy-sorting-word-and-rank-two-alignment
  - def-cg-sortable-element-skip-roots-and-cone
  - lem-cg-weak-parabolic-projection-and-cover-joins
  - lem-cg-finite-rank-two-inversion-set-recognition
  - def-cg-geometric-inversion-set
  - def-cg-canonical-reflection-homomorphism
  - def-cg-real-coxeter-form-and-reflection
  - lem-cg-reflection-form-invariance-and-rank-two-orders
  - def-cg-left-right-weak-order-and-descents
  - thm-cg-weak-order-meet-semilattice-and-finite-lattice
  - lem-cg-weak-order-is-a-graded-partial-order
  - def-cg-parabolic-quotient-and-two-sided-minima
  - def-cg-finite-lattice-congruence-and-interval-projections
  - def-hh-coxeter-matrix-word-group-and-length
  - thm-cg-root-inversion-formulas-and-strong-exchange
  - def-cg-finite-reflection-arrangement-and-spherical-chambers
  - thm-cg-finite-chamber-tiling-and-coset-face-identification
  - thm-cg-root-sign-and-simple-reflection-positivity
justified_by: []
aliases: []
proof_strategy: induction
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "N. Reading and D. E. Speyer, Sortable elements in infinite Coxeter groups, arXiv:0803.2722v3 (2010); Trans. Amer. Math. Soc. 363 (2011) 699-761"
      url: "https://arxiv.org/pdf/0803.2722"
      locator: "Section 7, Theorems 7.1 and 7.3 with proofs (printed pp. 38-40); Section 2.5, Propositions 2.18 and 2.20, Corollary 2.21 and Lemma 2.23 (printed pp. 14-15); the proof of Theorem 7.3 cites Lemma 2.23 in a case broader than that lemma’s printed hypothesis"
    - title: "N. Reading, Sortable elements and Cambrian lattices, arXiv:math/0512339v1 (2005); Algebra Universalis 56 (2007) 35-56"
      url: "https://arxiv.org/pdf/math/0512339"
      locator: "Section 3, Proposition 3.2, Corollary 3.3 and the proof of Theorem 1.2 (printed pp. 8-9)"
    - title: "A. Bjorner and F. Brenti, Combinatorics of Coxeter Groups, Graduate Texts in Mathematics 231, Springer 2005"
      url: "https://sites.math.washington.edu/~billey/classes/reflection.groups/references/EntireBook.pdf"
      locator: "Chapter 2, Section 2.4, Proposition 2.4.4 and Corollary 2.4.5 on parabolic prefixes (printed pp. 39-41); Chapter 3, Proposition 3.1.3, Proposition 3.1.6, Theorem 3.2.1 and Lemma 3.2.3 on weak order and finite lattices"
verification:
  audited: "2026-10-08"
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-08
---

## Statement

Let $(W,S)$ be a Coxeter system of finite type, $c$ a Coxeter element ([[def-cg-coxeter-oriented-euler-form-and-c-sorting-word]]), $\pi_c$ the sortable projection, $\sim_c$ the sortable equivalence and $W/{\sim_c}$ the sortable quotient of [[def-cg-recursive-sortable-projection-and-cambrian-congruence]]; let $\wedge$ and $\vee$ be meet and join in the weak-order lattice $W$ ([[thm-cg-weak-order-meet-semilattice-and-finite-lattice]]) and $N(w)$ the inversion set of $w$ ([[def-cg-geometric-inversion-set]]). Then:

**(1) Meet closure.** For every nonempty set $A$ of $c$-sortable elements the meet $\bigwedge A$ exists in $W$, is $c$-sortable, and satisfies

$$N\Bigl(\Bigl(\bigwedge A\Bigr)^{-1}\Bigr)=\bigcap_{a\in A}N(a^{-1}).$$

**(2) Join closure.** Every nonempty set $A$ of $c$-sortable elements has a join $\bigvee A$ in $W$, and $\bigvee A$ is $c$-sortable. Consequently the $c$-sortable elements form a sublattice of the finite weak-order lattice.

**(3) The initial-letter join formula.** Let $s\in S$ be an initial letter of $c$ and let $y\in W$ satisfy $y\not\ge_Rs$. Then $s$ is a cover reflection of $s\vee y$ and

$$\pi_c(s\vee y)=s\vee\pi_c(y)=\pi_c(s)\vee\pi_c(y).$$

**(4) Meet and join preservation.** For all $x,y\in W$,

$$\pi_c(x\wedge y)=\pi_c(x)\wedge\pi_c(y),\qquad \pi_c(x\vee y)=\pi_c(x)\vee\pi_c(y).$$

Hence $\pi_c$ is a lattice homomorphism, the proposed quotient operations of [[def-cg-recursive-sortable-projection-and-cambrian-congruence]] (2) are independent of the chosen representatives, $\sim_c$ is a lattice congruence of $W$, and the map $W/{\sim_c}\to\pi_c(W)$, $[x]_c\mapsto\pi_c(x)$, is a bijection identifying the sortable quotient order $\le_c$ with the restriction of $\le_R$; it is a lattice isomorphism, so $W/{\sim_c}$ is a lattice and $p_c$ is a surjective lattice homomorphism.

**(5) Abstention.** As in [[def-cg-recursive-sortable-projection-and-cambrian-congruence]], the quotient is not identified with the separate least lattice congruence contracting the oriented rank-two cover pairs determined by the rank-two orientations induced by $c$, and no cluster-fan, noncrossing-partition or counting statement is made. No Choice is used.

## Facts & Assumptions

**Given:** A finite-type Coxeter system $(W,S)$, a Coxeter element $c$, its sortable projection $\pi_c$, its c-sortable elements, the right weak order $\le_R$, the weak-order lattice operations, the sortable equivalence $\sim_c$, and the quotient set and proposed quotient operations of [[def-cg-recursive-sortable-projection-and-cambrian-congruence]].

[F1] [[def-cg-recursive-sortable-projection-and-cambrian-congruence]] (1)-(2): $\sim_c$ is defined by equality of $\pi_c$-images, $W/{\sim_c}$ has the order induced by $\le_R$ on those images, and $[x]_c\vee[y]_c=[x\vee y]_c$, $[x]_c\wedge[y]_c=[x\wedge y]_c$ are the proposed quotient operations.

[F2] [[def-cg-initial-letter-sortable-projection]]: for an initial letter $s$ of $c$, the recursion is $\pi_c(w)=s\pi_{scs}(sw)$ when $w\ge_Rs$ and $\pi_c(w)=\pi_{c'}(w_J)$ when $w\not\ge_Rs$, where $J=S\setminus\{s\}$, $c'$ is the restriction of $c$ to $W_J$, and $w_J$ is the $W_J$-prefix.

[F3] [[def-cg-coxeter-oriented-euler-form-and-c-sorting-word]] and [[def-cg-sortable-element-skip-roots-and-cone]] (1),(4): $c^\infty$ has a first block containing every generator, so the one-letter element $s$ is c-sortable; c-sortability is the weak-decrease-by-inclusion condition on sorting-word blocks; and $\mathrm{Cone}_c(v)$ is the intersection of its skip-root halfspaces.

[F4] [[thm-cg-sortable-skip-basis-cover-roots-and-chamber-unions]] (1)-(3): $\pi_c$ is well defined, independent of the recursive initial-letter choices, idempotent and order preserving; $\pi_c(w)$ is the unique greatest c-sortable element below $w$; the skip roots form a basis; and every cone is a union of closed chambers.

[F5] [[lem-cg-sortable-recursion-output-and-initial-choice-independence]] (2),(4)-(5): $\pi_c(w)$ is c-sortable and below $w$, it fixes every c-sortable element, it detects whether an initial letter lies below its input, and its restriction to $W_J$ is the projection for the restricted Coxeter element. Compatibility with prefixes of arbitrary elements is supplied by [F18].

[F6] [[lem-cg-uniform-omega-positive-and-aligned-sortability]] (2): $w$ is c-sortable if and only if it is c-aligned.

[F7] [[lem-cg-greedy-sorting-word-and-rank-two-alignment]] (4)(ii): in the c-oriented order on a noncommutative generalized rank-two subsystem, a c-aligned inversion trace is empty, the allowed terminal singleton, or an initial segment in that same fixed order; for the zero-orientation case the trace is empty or a singleton.

[F8] [[lem-cg-finite-rank-two-inversion-set-recognition]] (1),(4): a finite subset of $\Phi_+$ is an inversion set precisely when every noncommutative generalized rank-two trace is empty, an initial segment, or a final segment of that subsystem's angular order, and $w\mapsto N(w)$ bijects $W$ with precisely the subsets satisfying this criterion.

[F9] [[def-cg-geometric-inversion-set]] (1): $N(w)=\{\alpha\in\Phi_+:\rho(w)\alpha\in\Phi_-\}$.

[F10] [[lem-cg-weak-order-is-a-graded-partial-order]] (2),(4)-(5): weak-order covers add one length; $u\le_Rv$ if and only if $N(u^{-1})\subseteq N(v^{-1})$; $|N(w^{-1})|=\ell(w)$; and $s\le_Rw$ if and only if $e_s\in N(w^{-1})$.

[F11] [[thm-cg-root-inversion-formulas-and-strong-exchange]] (1)(ii)-(iii),(2): $t_{\rho(u)e_r}=u r u^{-1}$, equal root reflections have roots differing only by sign, and if $w=u r$ is reduced then the prefix-root list for $N(w^{-1})$ is the prefix-root list for $N(u^{-1})$ together with the single new root $\rho(u)e_r$.

[F12] [[thm-cg-weak-order-meet-semilattice-and-finite-lattice]] (2): finite-type $W$ is finite and its right weak order is a lattice.

[F13] [[lem-cg-weak-parabolic-projection-and-cover-joins]] (1),(3): $w_J$ is the greatest $W_J$-element below $w$, and the parabolic-prefix map preserves joins, so $(x\vee y)_J=x_J\vee_{W_J}y_J$.

[F14] [[def-cg-left-right-weak-order-and-descents]] (1),(3) and [[def-cg-parabolic-quotient-and-two-sided-minima]] (2): $u\le_Rv$ means $v=ux$ with additive length, $s\le_Rw$ exactly when $\ell(sw)<\ell(w)$, and each simple left multiplication changes length by $1$ or $-1$; taking $w=1$ gives $\ell(s)=1$.


[F15] [[def-cg-finite-lattice-congruence-and-interval-projections]] (1): representative independence of the proposed class meet and join operations is equivalent to the kernel relation being a lattice congruence.

[F16] [[def-cg-finite-reflection-arrangement-and-spherical-chambers]] (1) and [[thm-cg-finite-chamber-tiling-and-coset-face-identification]] (1)-(2): $B$ is $\rho$-invariant; $C=\{q:B(q,e_t)\ge0\text{ for all }t\}$; the arrangement is $\rho(W)$-invariant; the closed chambers are $wC$; their walls are root hyperplanes; and the simple-root hyperplanes are walls of the fundamental chamber.

[F17] [[thm-cg-root-sign-and-simple-reflection-positivity]] statement and (2)-(3): positive roots are nonzero nonnegative combinations of simple roots, negative roots are their negatives, each root has $B$-norm $1$, and each simple root has $B(e_s,e_s)=1$; the simple-reflection action preserves positive roots except for the corresponding simple root.

[F18] [[lem-cg-sortable-cone-criterion-and-projection-monotonicity]] (2)-(4): $\pi_c$ is order preserving, the cone criterion is $\pi_c(w)=v\iff wC\subseteq\mathrm{Cone}_c(v)$ for c-sortable $v$, and projection commutes with parabolic prefixes.

[F19] [[lem-cg-sortable-skips-basis-and-cover-decomposition]] (3),(5)(iii): with $\mathrm{Cov}(v)=\{t_\alpha:\alpha\in\operatorname{cov}(v)\}$ the set of cover reflections, the negative skip roots are $\{-\beta_t:t\in\mathrm{Cov}(v)\}$; here $\operatorname{cov}(v)$ is the positive-root set of [[lem-cg-weak-parabolic-projection-and-cover-joins]] (4). When $s$ is initial in $c$ and $s\in\mathrm{Cov}(v)$, one has $v=s\vee v_J$.

[F20] [[def-hh-coxeter-matrix-word-group-and-length]]: each simple generator $r\in S$ is an involution, $r^2=1$.

[F21] [[def-cg-canonical-reflection-homomorphism]] (1), [[def-cg-real-coxeter-form-and-reflection]], and [[def-cg-finite-reflection-arrangement-and-spherical-chambers]]: $\rho(r)=r_r$ for each $r\in S$, and $r_r$ is the reflection with normal $e_r$, fixing $H_{e_r}$ pointwise and exchanging its two sides.

## Proof

**Proof technique:** recognize the meet inversion set by rank-two traces; use the greatest-sortable-below projection for join closure; derive the initial-letter formula from parabolic projection, a cone wall and cover decomposition; then prove join preservation by induction on $(|S|,\ell(x\vee y))$.

1.1 Let $A\ne\varnothing$ be a set of c-sortable elements and put $I:=\bigcap_{a\in A}N(a^{-1})$. Since $W$ is finite, $I$ is finite. In each noncommutative generalized rank-two subsystem, [F6]-[F7] put all the traces $N(a^{-1})$ at the same c-oriented end of its angular order; their intersection is therefore empty, the allowed terminal singleton, or an initial segment in that fixed order. In a zero-orientation subsystem each trace is empty or a singleton, so their intersection is again empty or a singleton. Thus $I$ satisfies [F8], so [F8] gives a unique $u\in W$ with $N(u)=I$; put $m:=u^{-1}$, so $N(m^{-1})=I$. For every $a\in A$, $N(m^{-1})\subseteq N(a^{-1})$, so $m\le_Ra$ by [F10]. If $v$ is any lower bound of $A$, then $N(v^{-1})\subseteq I=N(m^{-1})$, so $v\le_Rm$; therefore $m=\bigwedge A$ and the displayed inversion-set identity holds. The same rank-two traces show $m$ is c-aligned, hence c-sortable by [F6]. [F6, F7, F8, F9, F10, F12, given, algebra]

1.2 Fix $s\in S$ and put $D_s:=\{u:s\not\le_Ru\}$. By [F14], $\ell(su)=\ell(u)+1$ for $u\in D_s$ and $\ell(su)=\ell(u)-1$ otherwise. Thus $u\mapsto su$ sends $D_s$ into $\{w:s\le_Rw\}$. Conversely, if $w\ge_Rs$, write $w=su$ with $\ell(w)=1+\ell(u)$. If $u\ge_Rs$, then [F14] gives $\ell(su)=\ell(u)-1$, contradicting this equality, so $u\in D_s$; hence the map is onto. If $u,v\in D_s$ and $u\le_Rv$, write $v=ux$ with additive length. Then $sv=(su)x$ and $\ell(sv)=\ell(su)+\ell(x)$, so $su\le_Rsv$. Conversely, if $su\le_Rsv$, write $sv=(su)x$ with additive length; cancellation gives $v=ux$, and the ascent identities give $\ell(v)=\ell(u)+\ell(x)$, so $u\le_Rv$. Therefore left multiplication by $s$ is an order isomorphism from $D_s$ onto $\{w:s\le_Rw\}$. [F14, given, algebra]

1.3 Suppose $u\lessdot_Rv$, $u\not\ge_Rs$ and $v\ge_Rs$. Then $e_s\in N(v^{-1})\setminus N(u^{-1})$ by [F10]. The inclusion in [F10] and the one-length rise across a cover imply that this difference has one root, so it equals $\{e_s\}$. Write $v=ur$ with $r\in S$ by [F10] and [F14]. By [F11], the unique new prefix root in $N(v^{-1})$ is $\rho(u)e_r$, hence $\rho(u)e_r=e_s$ and $u r u^{-1}=s$. Using $r^2=1$ from [F20], $sv=s(ur)=(u r u^{-1})(u r)=u=vr$. Thus $s$ is a cover reflection of $v$. [F10, F11, F14, F20, given, algebra]

1.4 We prove join preservation by lexicographic induction on $(|S|,\ell(x\vee y))$. If $|S|=0$ or $\ell(x\vee y)=0$, then $W=\{1\}$ or $x=y=1$, respectively, and the identity holds. For every other pair, assume it holds for all pairs of smaller lexicographic measure. This is the induction hypothesis. [base, ih]

2.1 Let $A\ne\varnothing$ be c-sortable and set $w:=\bigvee A$, which exists by [F12]. For every $a\in A$, $a=\pi_c(a)\le_R\pi_c(w)$ by [F4]-[F5], so $\pi_c(w)$ is an upper bound of $A$ and $w\le_R\pi_c(w)$. Since $\pi_c(w)\le_Rw$ by [F4], we get $w=\pi_c(w)$; hence $w$ is c-sortable. Together with step 1.1 this proves (2). [F4, F5, F12, step 1.1, given, algebra]

2.2 If $X,Y\not\ge_Rs$, their rank-one parabolic prefixes are both $1$. By join preservation of the parabolic prefix map in [F13], $Z:=X\vee Y$ also has rank-one prefix $1$, so $Z\not\ge_Rs$. Step 1.2 shows $sZ$ is an upper bound of $sX,sY$. If $w$ is any common upper bound of $sX,sY$, then $w\ge_Rs$ and we may write $w=sw'$ with $w':=sw$ and $\ell(w)=1+\ell(w')$. If $w'\ge_Rs$, [F14] would instead give $\ell(sw')=\ell(w')-1$, contradicting $sw'=w$ and that length equality; hence $w'\not\ge_Rs$. Step 1.2 now gives $X,Y\le_Rw'$, hence $Z\le_Rw'$, and the same order isomorphism gives $sZ\le_Rw$. Therefore $sX\vee sY=s(X\vee Y)$. [F13, F14, step 1.2, given, algebra]

2.3 By monotonicity, $\pi_c(x\wedge y)\le_R\pi_c(x)\wedge\pi_c(y)$. The right side is c-sortable by step 1.1 and is below $x\wedge y$ because $\pi_c(x)\le_Rx$ and $\pi_c(y)\le_Ry$. Since $\pi_c(x\wedge y)$ is the greatest c-sortable element below $x\wedge y$ by [F4], the reverse inequality holds. Thus $\pi_c(x\wedge y)=\pi_c(x)\wedge\pi_c(y)$. [F4, F5, step 1.1, given, algebra]

2.4 Suppose $x,y\not\ge_Rs$. The rank-one case of [F13] shows $x\vee y\not\ge_Rs$, so [F2] computes all projections in $W_J$, where $J=S\setminus\{s\}$. The prefix join identity $(x\vee y)_J=x_J\vee_{W_J}y_J$ from [F13] and the induction hypothesis from step 1.4 applied in the lower-rank parabolic give $\pi_c(x\vee y)=\pi_{c'}(x_J\vee_{W_J}y_J)=\pi_{c'}(x_J)\vee_{W_J}\pi_{c'}(y_J)=\pi_c(x)\vee_{W_J}\pi_c(y)$. These last two outputs lie in $W_J$ by [F2], and their join in $W$ equals their join in $W_J$: if $a,b\in W_J$, then [F13](1),(3) gives $a,b\le_R(a\vee_Wb)_J$ and $(a\vee_Wb)_J=a\vee_{W_J}b$, while $(a\vee_Wb)_J\le_Ra\vee_Wb$; hence $a\vee_Wb=(a\vee_Wb)_J$. Thus the displayed value is $\pi_c(x)\vee_W\pi_c(y)$. Here $x_J,y_J$ are their actual $W_J$-prefixes; no identity claim about them is needed. [F2, F5, F13, step 1.4, given, algebra]

2.5 Let $y\not\ge_Rs$ and put $z:=s\vee y$. In a saturated chain from $y$ to $z$, take the first cover $u\lessdot_Rv$ whose upper element satisfies $v\ge_Rs$. Its lower element is not above $s$, so step 1.3 gives $v=su$ and $s$ is a cover reflection of $v$. Since $v$ is a common upper bound of both $s$ and $y$, leastness gives $z\le_Rv$; the chain gives $v\le_Rz$, so $v=z$ and $s$ is a cover reflection of $z$. Let $q:=\pi_c(z)$. The one-letter element $s$ is c-sortable, so $\pi_c(s)=s$ by [F5]; monotonicity gives $s\le_Rq$. Since $sz=u\not\ge_Rs$ and $\pi_c(sz)\le_Rsz$ by [F5], $\pi_c(sz)\not\ge_Rs$ and therefore $\pi_c(sz)\ne q$. By [F18], $zC\subseteq\mathrm{Cone}_c(q)$ but $(sz)C\not\subseteq\mathrm{Cone}_c(q)$. Step 1.3 gives $sz=zr$ for some $r\in S$, so $s=zrz^{-1}$; by [F11], $\rho(z)e_r=\pm e_s$, and [F21] shows that $rC$ is the adjacent chamber to $C$ across $H_{e_r}$: $C\cap H_{e_r}$ is a facet, the reflection fixes it pointwise and exchanges its sides, and the arrangement is W-invariant. Applying $z$ gives that $zC$ and $zrC$ are adjacent across $zH_{e_r}=H_{\rho(z)e_r}=H_s$ by [F11]. The cone is the intersection of the skip-root halfspaces [F3] and a union of closed chambers [F4], so their common facet lies in its boundary. The skip-root set is finite, and each defining hyperplane distinct from $H_s$ intersects $H_s$ in a proper subspace. Start at a relative-interior point of the facet. For each such hyperplane still containing the point, perturb within $H_s$ in a direction outside that hyperplane; a sufficiently small perturbation stays in the relative interior and preserves the nonzero evaluations for hyperplanes already avoided. Finite iteration yields a point outside all those intersections. At this point a defining skip-root inequality is an equality, and its hyperplane must be $H_s$. By [F17], the skip root normal to this wall is either $e_s$ or $-e_s$. Since $s\le_Rz$, [F10] gives $\rho(z^{-1})e_s\in\Phi_-$. For $p\in C^\circ$, invariance of $B$ gives $B(\rho(z)p,e_s)=B(p,\rho(z^{-1})e_s)<0$ by [F16]-[F17]. Thus the included chamber is on the negative side of $H_s$, so the inward skip-root normal is $-e_s$. By [F19], $-e_s=-\beta_s$ in the negative skip basis means $s\in\mathrm{Cov}(q)$, so $s$ is a cover reflection of $q$. [F3, F4, F5, F10, F11, F16, F17, F18, F19, F21, step 1.3, given, algebra]

3.1 Suppose $x,y\ge_Rs$ for an initial letter $s$ of $c$, and put $X:=sx$, $Y:=sy$. Then $X,Y\not\ge_Rs$ by [F14]. Applying step 2.2 to $X,Y$ gives $x\vee y=s(X\vee Y)$; since $s^2=1$ by [F20], this is equivalent to $X\vee Y=s(x\vee y)$, whose length is $\ell(x\vee y)-1$. By the recursion [F2], $\pi_c(x)=s\pi_{scs}(X)$, $\pi_c(y)=s\pi_{scs}(Y)$ and $\pi_c(x\vee y)=s\pi_{scs}(s(x\vee y))$. The induction hypothesis from step 1.4 for $(X,Y)$ in the rotated system $scs$ gives $\pi_{scs}(X\vee Y)=\pi_{scs}(X)\vee\pi_{scs}(Y)$; these two projection values are not above $s$ because they lie below $X,Y$ by [F5]. Applying step 2.2 again yields $\pi_c(x)\vee\pi_c(y)=s(\pi_{scs}(X)\vee\pi_{scs}(Y))=s\pi_{scs}(X\vee Y)=\pi_c(x\vee y)$. [F2, F5, F14, F20, step 1.4, step 2.2, given, algebra]

3.2 By the initial cover decomposition [F19], $q=s\vee q_J$ for $J=S\setminus\{s\}$. Parabolic compatibility [F18] gives $q_J=\pi_{c'}(z_J)$, and join preservation of prefixes [F13] gives $z_J=(s\vee y)_J=s_J\vee y_J=y_J$, since $s_J=1$. The rank-drop branch of [F2] gives $\pi_c(y)=\pi_{c'}(y_J)$; hence $q_J=\pi_c(y)$ and $\pi_c(s\vee y)=s\vee\pi_c(y)=\pi_c(s)\vee\pi_c(y)$. This proves (3). [F2, F13, F18, F19, step 2.5, given, algebra]

4.1 In the mixed case, assume $x\ge_Rs$ and $y\not\ge_Rs$, and put $z:=s\vee y$. Then $x,z\ge_Rs$. Since $x\vee y$ is an upper bound of $s$ and $y$, $z\le_Rx\vee y$; since $y\le_Rz$, also $x\vee y\le_Rx\vee z$, so $x\vee z=x\vee y$. The both-above case 3.1, whose induction step uses the shorter join $s(x\vee z)$, now gives $\pi_c(x\vee y)=\pi_c(x)\vee\pi_c(z)$. By step 3.2, $\pi_c(z)=\pi_c(s)\vee\pi_c(y)$; monotonicity and $s\le_Rx$ give $\pi_c(s)\le_R\pi_c(x)$, hence $\pi_c(x\vee y)=\pi_c(x)\vee\pi_c(y)$. This proves the join identity in every case. [F4, step 1.4, step 3.1, step 3.2, given, algebra]

5.1 Define $\varphi:W/{\sim_c}\to\pi_c(W)$ by $\varphi([x]_c)=\pi_c(x)$. It is well defined and injective by the definition of $\sim_c$, and surjective by the definition of $\pi_c(W)$. By [F5], every image is c-sortable and every c-sortable element is fixed, so $\pi_c(W)$ is exactly the c-sortable sublattice. The quotient order is defined by $[x]_c\le_c[y]_c$ exactly when $\pi_c(x)\le_R\pi_c(y)$, so $\varphi$ is an order isomorphism; the identities proved in steps 2.3, 2.4, 3.1 and 4.1 make it a lattice isomorphism. Equality of $\pi_c$-images is preserved by both meet and join, so by [F15] and the definition [F1], $\sim_c$ is a lattice congruence, the proposed class operations are representative-independent, and $W/{\sim_c}$ is a lattice. The quotient map $p_c$ is surjective and preserves meet and join by those operations. All sets and inductions used here are finite, and no Choice is used. [F1, F5, F15, step 2.3, step 2.4, step 3.1, step 4.1, discharge-induction, given, algebra] ∎
