---
id: lem-cft-positive-integer-affine-admissible-semisimplicity
kind: lemma
title: Admissible positive-integral-level simple affine modules are semisimple
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 5
domain: mathematics
library: mathematics
deps:
  - def-cft-simple-affine-voa
  - def-admissible-vertex-algebra-module
  - def-ordinary-vertex-module
  - def-vertex-algebra-module
  - def-untwisted-affine-central-extension
  - def-degree-derivation-and-full-untwisted-affine-algebra
  - thm-universal-affine-vertex-algebra
  - lem-cft-affine-current-fields-have-uniform-nilpotence
  - thm-finite-dimensional-representations-of-sl-two
  - thm-weyls-complete-reducibility-theorem
  - thm-complete-reducibility-of-integrable-kac-moody-o-modules
  - def-kac-moody-category-o
  - thm-universal-property-and-pbw-character-of-kac-moody-verma-modules
  - thm-kac-moody-verma-module-has-a-unique-simple-quotient
  - def-axiom-of-choice
  - def-sugawara-modes
  - lem-sugawara-modes-act-on-currents
  - thm-sugawara-modes-satisfy-virasoro
  - def-dual-coxeter-number-for-normalized-form
  - lem-the-affine-simple-root-alpha-zero-is-delta-minus-the-highest-root
  - lem-finite-semisimple-cartan-root-and-string-structure
  - lem-finite-semisimple-pbw-and-highest-weight-construction
  - cor-schurs-lemma-for-irreducible-lie-algebra-representations
  - lem-finite-weyl-positive-roots-and-simple-reflections
dependency_roles:
  def-cft-simple-affine-voa: mathematical-premise
  def-admissible-vertex-algebra-module: mathematical-premise
  def-ordinary-vertex-module: mathematical-premise
  def-vertex-algebra-module: mathematical-premise
  def-untwisted-affine-central-extension: mathematical-premise
  def-degree-derivation-and-full-untwisted-affine-algebra: mathematical-premise
  thm-universal-affine-vertex-algebra: mathematical-premise
  lem-cft-affine-current-fields-have-uniform-nilpotence: mathematical-premise
  thm-finite-dimensional-representations-of-sl-two: mathematical-premise
  thm-weyls-complete-reducibility-theorem: mathematical-premise
  thm-complete-reducibility-of-integrable-kac-moody-o-modules: mathematical-premise
  def-kac-moody-category-o: mathematical-premise
  thm-universal-property-and-pbw-character-of-kac-moody-verma-modules: mathematical-premise
  thm-kac-moody-verma-module-has-a-unique-simple-quotient: mathematical-premise
  def-axiom-of-choice: mathematical-premise
  def-sugawara-modes: mathematical-premise
  lem-sugawara-modes-act-on-currents: mathematical-premise
  thm-sugawara-modes-satisfy-virasoro: mathematical-premise
  def-dual-coxeter-number-for-normalized-form: mathematical-premise
  lem-the-affine-simple-root-alpha-zero-is-delta-minus-the-highest-root: mathematical-premise
  lem-finite-semisimple-cartan-root-and-string-structure: mathematical-premise
  lem-finite-semisimple-pbw-and-highest-weight-construction: mathematical-premise
  cor-schurs-lemma-for-irreducible-lie-algebra-representations: mathematical-premise
  lem-finite-weyl-positive-roots-and-simple-reflections: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-04
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
sources:
  references:
    - title: Chongying Dong, Haisheng Li, and Geoffrey Mason, Regularity of Rational Vertex Operator Algebras
      url: https://arxiv.org/pdf/q-alg/9508018v1
      locator: "§2, Proposition 3.5 and Theorem 3.7, printed pp. 2–8; local admissible semisimplicity is reconstructed below from the proved Kac–Moody suppliers."
    - title: Tomoyuki Arakawa and Anne Moreau, Arc spaces and vertex algebras
      url: https://www.imo.universite-paris-saclay.fr/~anne.moreau/Arc_space-vertex_algebras-BOOK_version.pdf
      locator: "§3.1 and §11.1, especially Theorem 11.1 and the positive-integral-level affine-module statement, printed pp. 65–68 and 217–218."
---

## Statement

Assume the Axiom of Choice. For finite-dimensional complex simple $\mathfrak g$ with long roots of squared length $2$ and $\ell\in\mathbb Z_{>0}$, every admissible module for the Sugawara VOA $L_\ell(\mathfrak g)$ is an algebraic direct sum of simple ordinary modules. There are only finitely many isomorphism classes of simple ordinary $L_\ell(\mathfrak g)$-modules at this fixed level.

## Facts & Assumptions

**Given:** An admissible $L_\ell(\mathfrak g)$-module $M$ with its specified nonnegative grading $M=\bigoplus_{q\ge0}M(q)$.

[A1] Assume the Axiom of Choice. It is used by [[thm-complete-reducibility-of-integrable-kac-moody-o-modules]] and in the final maximal-direct-sum argument.

[F1] [[def-admissible-vertex-algebra-module]] gives $x_mM(q)\subseteq M(q-m)$ for every current $x\in\mathfrak g$ and puts $M(q)=0$ for $q<0$. [[def-untwisted-affine-central-extension]] gives the affine current brackets and the level-$\ell$ central action. [[def-degree-derivation-and-full-untwisted-affine-algebra]] specifies the full extension by $d$ with $[d,x_m]=m x_m$; its action must be specified separately on each module.

[F2] [[lem-cft-affine-current-fields-have-uniform-nilpotence]] proves local nilpotence of $a_m$ for every finite root vector $a$, every mode $m$, and every weak module; it also gives a finite basis $\mathcal B$ including the finite simple-root and highest-root generators needed for affine integrability. [[thm-weyls-complete-reducibility-theorem]] applies to finite-dimensional horizontal $\mathfrak g$-modules, and [[thm-finite-dimensional-representations-of-sl-two]] gives the integer highest-weight labels for finite root triples.

[F3] [[def-kac-moody-category-o]] specifies weight-space finiteness and finite-cone support. [[thm-universal-property-and-pbw-character-of-kac-moody-verma-modules]] supplies affine PBW spanning, finite weight spaces, and support below a highest weight. [[thm-kac-moody-verma-module-has-a-unique-simple-quotient]] fixes the simple highest-weight module at a given highest weight. [[thm-complete-reducibility-of-integrable-kac-moody-o-modules]] assumes AC and a finite symmetrizable GCM, and decomposes integrable modules in that category.

[F4] [[def-cft-simple-affine-voa]] realizes $L_\ell(\mathfrak g)$ as a quotient of the current-generated universal affine vertex algebra [[thm-universal-affine-vertex-algebra]]. [[def-vertex-algebra-module]] supplies lower truncation and module Jacobi; on a restricted module, [[def-sugawara-modes]] gives $2(\ell+h^\vee)L_0=\sum_a x_a(0)x^a(0)+2\sum_{n>0,a}x_a(-n)x^a(n)$, while [[lem-sugawara-modes-act-on-currents]] gives $[L_0,x_m]=-m x_m$ and [[thm-sugawara-modes-satisfy-virasoro]] supplies the conformal action. The denominator is nonzero.

[F5] [[lem-the-affine-simple-root-alpha-zero-is-delta-minus-the-highest-root]] gives $h_0=c-\theta^\vee$, a highest root with full positive support, and in its Proof 4.1 a positive symmetrizer for the untwisted affine GCM: with $\beta_0=-\theta$ and $\beta_i=\alpha_i$, the row factors $d_i=(\beta_i,\beta_i)/2>0$ make $d_i a_{ij}=(\beta_i,\beta_j)$ symmetric. [[lem-finite-semisimple-cartan-root-and-string-structure]] supplies the finite crystallographic root structure, and [[lem-finite-weyl-positive-roots-and-simple-reflections]] gives the positive integral basis of simple coroots.

[F6] [[def-ordinary-vertex-module]] requires semisimple $L_0$, finite-dimensional eigenspaces and a lower bound on real parts.

[F7] [[lem-finite-semisimple-pbw-and-highest-weight-construction]] gives finite-root PBW ordering and classifies finite-dimensional simple horizontal $\mathfrak g$-modules uniquely by their dominant integral highest weights. [[cor-schurs-lemma-for-irreducible-lie-algebra-representations]] says every endomorphism of a finite-dimensional irreducible complex $\mathfrak g$-module is scalar.

## Proof

1.1 Let $D$ act as $q$ on $M(q)$ and extend the affine current action by $d=-D$. The grading shift in [F1] gives $[d,x_m]=m x_m$, so this is a module for the full untwisted affine algebra at level $\ell$. For an ordered basis $a_1,\ldots,a_s$ from $\mathcal B$, PBW spans $U(\mathfrak g)u$ by $a_1(0)^{r_1}\cdots a_s(0)^{r_s}u$. Local nilpotence [F2] makes the span of $a_s(0)^ru$ finite-dimensional. Recursively, if the suffix span is finite-dimensional, choose a finite spanning set; the powers of the next zero mode on each spanning vector have finite span by local nilpotence. Their finite sum is again finite-dimensional. After all $s$ steps this contains every PBW word, proving that $U(\mathfrak g)u$ is finite-dimensional. Hence each horizontal orbit is completely reducible by [F2], and its Cartan acts diagonally. [F1, F2, given, algebra]

2.1 Fix homogeneous $u\in M(q_0)$. The subspace $P=U(\mathfrak g[t]_{\ge0})u$ is finite-dimensional. Indeed, PBW orders it as positive-loop words applied to the finite-dimensional zero-mode orbit $U(\mathfrak g)u$; a positive mode lowers the nonnegative grade by its positive index, so a nonzero word has total index at most $q_0$, and there are finitely many such words in a finite basis of $\mathfrak g$. The full cyclic affine module $C=U(\widehat{\mathfrak g})u$ is spanned by negative-loop words applied to $P$. At each fixed admissible grade, only finitely many negative-mode index partitions and basis choices occur, so $C$ has finite-dimensional grade pieces. Each such piece is a finite-dimensional horizontal $\mathfrak g$-module, hence decomposes into Cartan weights by [F2]. The finite-dimensional positive-current space $P$ has a finite set of affine weights; negative affine root operators then show that the weight support of $C$ is contained in finitely many cones $\lambda_j-Q^+$. Thus $C$ lies in affine Kac–Moody category $\mathcal O$. [F1, F2, F3, step 1.1, algebra]

3.1 Every affine simple-root generator acts locally nilpotently on $C$, since [F2] supplies a current basis containing all finite simple-root and highest-root generators with nilpotent modes; thus $C$ is integrable. By [F5], the affine GCM $\widehat A$ is finite and symmetrizable, so the symmetrizable-GCM hypothesis of [F3] holds; [A1] supplies its AC hypothesis. Therefore $C$ is a direct sum of simple affine highest-weight modules. For any such summand $S$, current modes preserve $S$. If $a$ is a current state and $b$ is a state whose modes preserve $S$, module Jacobi gives
$$
((a_{(r)}b)^M)_{(m)}u=\sum_{j\ge0}(-1)^j\binom rj a^M_{(r-j)}b^M_{(m+j)}u-(-1)^r\sum_{j\ge0}(-1)^j\binom rj b^M_{(m+r-j)}a^M_{(j)}u.
$$
For fixed $u\in S$, each sum is finite by lower truncation of its rightmost mode; every term preserves $S$. Induction on PBW length in the current-generated VOA therefore makes $S$ a VOA submodule. In any such summand, let $v$ be an affine highest vector of weight $\lambda$, and put $H=U(\mathfrak g[0])v$. The finite root decomposition in [F5] gives finitely many negative root vectors; PBW [F7] orders them before the Cartan and positive root vectors. The positive root vectors kill $v$, Cartan vectors act by scalars, and each negative root zero mode is locally nilpotent by [F2]. The successive finite-span argument of step 1.1, applied to these ordered negative root modes, makes $H$ finite-dimensional. It is a completely reducible horizontal module by [F2]. Its top weight space is $\mathbb Cv$ and all weights are at or below $\lambda|_{\mathfrak h}$ by the PBW ordering; every nonzero projection of $v$ to a simple summand is therefore a highest vector of that same top weight. The one-dimensional top permits only one such summand, and $H=U(\mathfrak g[0])v$ has no summand with zero projection, so $H$ is irreducible. The quadratic definition of $L_0$ in [F4], applied to $v$ annihilated by positive loop modes, shows $L_0v$ is a linear combination of zero-mode products applied to $v$, hence lies in $H$. Since $[L_0,x_0]=0$ by [F4], $L_0$ preserves $H$; Schur's lemma [F7] makes it scalar there, say $h_S$. If $q_S$ is the admissible grade of $v$, then $d v=-q_Sv$, while negative loop modes of total degree $n$ give $d$-eigenvalue $-q_S-n$ and $L_0$-eigenvalue $h_S+n$. These words applied to $H$ span $S$ by affine PBW, so $L_0+d=(h_S-q_S)I$ on $S$. Thus every VOA submodule of $S$, being $L_0$-stable, is also $d$-stable; full-affine simplicity now proves VOA simplicity. Each negative loop mode $x_{-m}$ raises the eigenvalue by $m>0$ by [F4]. The identity $L_0+d=(h_S-q_S)I$ identifies each $L_0$ eigenspace with a single admissible grade piece of $S$, which is finite-dimensional by step 2.1. The spectrum of each summand is a translate of $\mathbb Z_{\ge0}$, so every summand is lower bounded and ordinary by [F6]. Hence $M$, being the sum of its homogeneous cyclic submodules $C$, is a sum of simple ordinary submodules. [A1, F2, F3, F4, F5, F6, F7, step 2.1]

4.1 Choose a maximal family of simple ordinary submodules of $M$ whose sum is direct; such a family exists by [A1], since unions of chains of independent families remain independent. If its sum were not $M$, the sum-of-simple-submodules statement in step 3.1 supplies a simple ordinary submodule $S$ not contained in it. The intersection of $S$ with the chosen sum is a submodule of simple $S$, so it is either $0$ or $S$; the latter is excluded, and the former would enlarge the independent family. Therefore the sum is all of $M$, proving complete reducibility. [A1, step 3.1, algebra]

4.2 It remains to count the possible simple ordinary isomorphism classes. Let $N$ be any simple ordinary module. For each $L_0$ eigenvalue coset in $\mathbb C/\mathbb Z$, the sum of its eigenspaces is stable under every current mode by [F4], hence under all state modes by the current-generation argument of step 3.1. Simplicity leaves one nonzero coset. Its nonempty lower-bounded spectrum therefore has a lowest eigenvalue $h$, whose eigenspace is finite-dimensional. Positive current modes lower $L_0$ and hence kill this eigenspace. It is stable under zero modes, so choose a finite-dimensional irreducible horizontal $\mathfrak g$-summand and a highest vector $w$ in it. This is killed by every affine simple raising generator. Every affine simple lowering generator acts locally nilpotently by [F2]; together with the raising operator killing $w$, the rank-one brackets make the generated $\mathfrak{sl}_2$ string finite-dimensional, so [F2] makes each affine Dynkin label $m_i=w(h_i)$ a nonnegative integer. The finite-root labels determine the horizontal irreducible uniquely by [F7]; the node-zero label is included, and the level is $\ell$. For this classification, extend the current action on $N$ to the full affine algebra by $d=-L_0$. This is a valid extension because [F4] gives $[-L_0,x_m]=m x_m$, and $L_0$ commutes with the scalar central action. It is a new choice of extension on $N$, independent of $d=-D$ used for $M$ in step 1.1; no equality of the admissible grading and conformal weights is assumed. Thus $w$ is an affine highest vector of a dominant integral weight $\lambda$ at level $\ell$, with $\lambda(d)=-h$. Any current-invariant subspace of $N$ is stable under all state modes by step 3.1's finite Jacobi formula, so VOA simplicity makes $N$ simple for the current algebra and hence for this full affine action. In particular $w$ generates $N$. Affine Verma universality in [F3] gives a surjection from the Verma module of weight $\lambda$, and [F3] identifies its unique simple quotient. [F1, F2, F3, F4, F6, F7, step 3.1]

5.1 Write $m_i=\lambda(h_i)\in\mathbb Z_{\ge0}$ for the affine Dynkin labels. The coroot $\theta^\vee$ is a positive coroot, so in the finite simple-coroot basis it has $\theta^\vee=\sum_{i=1}^r b_i h_i$ with positive integers $b_i$: it lies in the positive coroot lattice, and its support is full because the highest root has full support by [F5]. Since $h_0=c-\theta^\vee$, the level identity gives $\ell=\lambda(c)=m_0+\sum_i b_i m_i$. Every coefficient on the right is positive, so this equation has only finitely many nonnegative integer solutions. On a top vector $w$, the positive-mode terms in the quadratic Sugawara formula [F4] vanish, so $2(\ell+h^\vee)L_0w=Cw$, where $C=\sum_a x_a(0)x^a(0)$ for $B$-dual bases. Invariance of $B$ makes $\sum_a x_a\otimes x^a$ invariant under the diagonal adjoint action (it corresponds to the identity map of $\mathfrak g$); hence $[z,C]=0$ for every $z\in\mathfrak g$. Schur's lemma [F7] makes $C$ scalar on the irreducible horizontal top, and its scalar is determined by that representation, which [F7] uniquely fixes from the finite highest-weight labels. Thus the top conformal weight $h$ is fixed by those labels. Consequently only finitely many affine highest weights, including their derivation values, occur; [F3]'s unique simple highest-weight quotient fixes the full affine module for the extension $d=-L_0$. An affine intertwiner commutes with all current modes, and the same finite Jacobi induction as in step 3.1 makes it commute with all state modes, so it is a VOA intertwiner. Thus these finitely many weights fix the simple ordinary VOA modules up to isomorphism. This proves finiteness. [F3, F4, F5, F7, step 4.2, algebra] ∎

